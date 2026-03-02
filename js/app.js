/**
 * Daily Mock Test Application
 * Features:
 * - Dual exam support: UPSC Prelims & Odisha Civil Services (OCS)
 * - Daily auto-rotating 60-question tests using date-based seeding
 * - 60-minute countdown timer
 * - Question navigation palette
 * - Detailed results with category breakdown
 * - Answer review with explanations
 * - Fully responsive design
 */

// ===== Global State =====
let currentQuestions = [];
let userAnswers = {};
let currentQuestionIndex = 0;
let timerInterval = null;
let timeRemaining = 60 * 60; // 60 minutes in seconds
let testStartTime = null;
let testEndTime = null;
let testSubmitted = false;
let currentExamType = 'upsc'; // 'upsc' or 'ocs'

// ===== Exam Config =====
const EXAM_CONFIG = {
    upsc: {
        name: 'UPSC Prelims',
        seedOffset: 0,
        questionCount: 60
    },
    ocs: {
        name: 'Odisha Civil Services',
        seedOffset: 7919, // Different prime offset for different question set
        questionCount: 60
    }
};

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setTodayDate();
    setTestNumbers();
});

// ===== Animated Background Particles =====
function createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#6C63FF', '#4ECDC4', '#FF6B6B', '#FFD93D', '#8B85FF'];

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(particle);
    }
}

// ===== Set Today's Date =====
function setTodayDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('today-date').textContent = today.toLocaleDateString('en-IN', options);
}

// ===== Set Test Numbers on Landing Page =====
function setTestNumbers() {
    const startDate = new Date('2024-01-01');
    const today = new Date();
    const daysDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const testNumber = daysDiff + 1;

    document.getElementById('upsc-test-number').textContent = testNumber;
    document.getElementById('ocs-test-number').textContent = testNumber;
}

// ===== Daily Test Generation (Date-Seeded) =====
function getDaySeed() {
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        const char = dateStr.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}

function seededRandom(seed) {
    let s = seed;
    return function () {
        s = (s * 1103515245 + 12345) & 0x7fffffff;
        return s / 0x7fffffff;
    };
}

function generateDailyTest(examType) {
    const config = EXAM_CONFIG[examType];
    const seed = getDaySeed() + config.seedOffset;
    const rng = seededRandom(seed);

    // Shuffle question bank using seeded random and pick questions
    const shuffled = [...QUESTION_BANK];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    currentQuestions = shuffled.slice(0, config.questionCount);
}

// ===== Start Test =====
function startTest(examType) {
    currentExamType = examType;
    testSubmitted = false;
    userAnswers = {};
    currentQuestionIndex = 0;
    timeRemaining = 60 * 60;
    testStartTime = new Date();

    // Generate questions for this exam type
    generateDailyTest(examType);

    // Switch to test page
    showPage('test-page');

    // Build question navigation grid
    buildQuestionGrid();

    // Load first question
    loadQuestion(0);

    // Start timer
    startTimer();

    // Update header
    const config = EXAM_CONFIG[examType];
    const startDate = new Date('2024-01-01');
    const today = new Date();
    const daysDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('test-title-text').textContent = `${config.name} - Test #${daysDiff + 1}`;
    document.getElementById('total-q-num').textContent = currentQuestions.length;
}

// ===== Page Navigation =====
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    if (timerInterval) clearInterval(timerInterval);
    showPage('landing-page');
}

// ===== Timer =====
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timeRemaining = 0;
            updateTimerDisplay();
            alert('Time is up! Your test is being submitted automatically.');
            submitTest();
            return;
        }

        updateTimerDisplay();

        // Warning states
        const timerBox = document.getElementById('timer-box');
        if (timeRemaining <= 60) {
            timerBox.className = 'timer-box danger';
        } else if (timeRemaining <= 300) {
            timerBox.className = 'timer-box warning';
        } else {
            timerBox.className = 'timer-box';
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer-display').textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// ===== Question Navigation Grid =====
function buildQuestionGrid() {
    const grid = document.getElementById('question-grid');
    grid.innerHTML = '';

    for (let i = 0; i < currentQuestions.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'q-nav-btn';
        btn.textContent = i + 1;
        btn.onclick = () => loadQuestion(i);
        grid.appendChild(btn);
    }
}

function updateQuestionGrid() {
    const buttons = document.querySelectorAll('.q-nav-btn');
    buttons.forEach((btn, i) => {
        btn.className = 'q-nav-btn';
        if (i === currentQuestionIndex) {
            btn.classList.add('current');
        } else if (userAnswers[i] !== undefined) {
            btn.classList.add('answered');
        }
    });
}

// ===== Load Question =====
function loadQuestion(index) {
    currentQuestionIndex = index;
    const q = currentQuestions[index];

    // Update counter
    document.getElementById('current-q-num').textContent = index + 1;

    // Update category
    document.getElementById('question-category').textContent = q.category;

    // Update question text
    document.getElementById('question-text').textContent = `Q${index + 1}. ${q.question}`;

    // Update options
    const optionsList = document.getElementById('options-list');
    const letters = ['A', 'B', 'C', 'D'];
    optionsList.innerHTML = '';

    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option-item';
        if (userAnswers[index] === i) {
            div.classList.add('selected');
        }
        div.onclick = () => selectOption(index, i);

        div.innerHTML = `
            <div class="option-letter">${letters[i]}</div>
            <div class="option-text">${opt}</div>
        `;
        optionsList.appendChild(div);
    });

    // Update navigation buttons
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === currentQuestions.length - 1;
    document.getElementById('prev-btn').style.opacity = index === 0 ? '0.4' : '1';
    document.getElementById('next-btn').style.opacity = index === currentQuestions.length - 1 ? '0.4' : '1';

    // Update grid
    updateQuestionGrid();

    // Close mobile nav if open
    document.getElementById('question-nav').classList.remove('mobile-open');
}

// ===== Select Option =====
function selectOption(questionIndex, optionIndex) {
    userAnswers[questionIndex] = optionIndex;
    loadQuestion(questionIndex); // Refresh to show selection
}

// ===== Clear Answer =====
function clearAnswer() {
    delete userAnswers[currentQuestionIndex];
    loadQuestion(currentQuestionIndex);
}

// ===== Navigate Questions =====
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('test-page').classList.contains('active')) return;
    if (document.getElementById('submit-modal').style.display !== 'none') return;

    switch(e.key) {
        case 'ArrowRight':
        case 'n':
            nextQuestion();
            break;
        case 'ArrowLeft':
        case 'p':
            prevQuestion();
            break;
        case '1': case '2': case '3': case '4':
            selectOption(currentQuestionIndex, parseInt(e.key) - 1);
            break;
        case 'a': selectOption(currentQuestionIndex, 0); break;
        case 'b': selectOption(currentQuestionIndex, 1); break;
        case 'c': selectOption(currentQuestionIndex, 2); break;
        case 'd': selectOption(currentQuestionIndex, 3); break;
    }
});

// ===== Mobile Nav Toggle =====
function toggleMobileNav() {
    document.getElementById('question-nav').classList.toggle('mobile-open');
}

// ===== Submit Confirmation =====
function confirmSubmit() {
    const answered = Object.keys(userAnswers).length;
    const total = currentQuestions.length;
    const unanswered = total - answered;

    document.getElementById('modal-message').innerHTML = unanswered > 0
        ? `You have answered <strong>${answered}</strong> out of <strong>${total}</strong> questions.<br>
           <span style="color: var(--warning);">${unanswered} questions are still unanswered!</span><br>
           Are you sure you want to submit?`
        : `You have answered all <strong>${total}</strong> questions. Submit your test?`;

    document.getElementById('submit-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('submit-modal').style.display = 'none';
}

// ===== Submit Test =====
function submitTest() {
    if (testSubmitted) return;
    testSubmitted = true;

    closeModal();
    clearInterval(timerInterval);
    testEndTime = new Date();

    // Calculate results
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    const categoryStats = {};

    currentQuestions.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) {
            categoryStats[cat] = { total: 0, correct: 0 };
        }
        categoryStats[cat].total++;

        if (userAnswers[i] === undefined) {
            skipped++;
        } else if (userAnswers[i] === q.correct) {
            correct++;
            categoryStats[cat].correct++;
        } else {
            wrong++;
        }
    });

    const score = correct * 2; // 2 marks per question
    const totalMarks = currentQuestions.length * 2;
    const percentage = Math.round((score / totalMarks) * 100);

    // Time taken
    const timeTaken = Math.floor((testEndTime - testStartTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    // Show result page
    showPage('result-page');
    document.getElementById('review-section').style.display = 'none';

    // Set exam badge
    const config = EXAM_CONFIG[currentExamType];
    document.getElementById('result-exam-badge').textContent = config.name;
    document.getElementById('score-total').textContent = `/ ${totalMarks}`;

    // Animate score
    const scoreValue = document.getElementById('score-value');
    const scoreFill = document.getElementById('score-fill');

    // Set emoji and message based on score
    const emoji = document.getElementById('result-emoji');
    const message = document.getElementById('result-message');

    if (percentage >= 80) {
        emoji.textContent = '🏆';
        message.textContent = 'Outstanding! You\'re well prepared!';
    } else if (percentage >= 60) {
        emoji.textContent = '🎉';
        message.textContent = 'Great job! Keep up the good work!';
    } else if (percentage >= 40) {
        emoji.textContent = '💪';
        message.textContent = 'Good effort! Keep practicing!';
    } else {
        emoji.textContent = '📚';
        message.textContent = 'Keep studying! Practice makes perfect!';
    }

    // Animated score counter
    let currentScore = 0;
    const scoreInterval = setInterval(() => {
        currentScore += 2;
        if (currentScore > score) currentScore = score;
        scoreValue.textContent = currentScore;

        if (currentScore >= score) {
            clearInterval(scoreInterval);
        }
    }, 30);

    // SVG circle animation
    const circumference = 2 * Math.PI * 54; // r=54
    scoreFill.style.strokeDasharray = circumference;
    const offset = circumference - (percentage / 100) * circumference;

    // Add SVG gradient
    const svg = scoreFill.closest('svg');
    if (!svg.querySelector('defs')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.id = 'scoreGradient';
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');

        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#6C63FF');

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#4ECDC4');

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }

    scoreFill.style.stroke = 'url(#scoreGradient)';

    setTimeout(() => {
        scoreFill.style.strokeDashoffset = offset;
    }, 100);

    // Stats
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('wrong-count').textContent = wrong;
    document.getElementById('skipped-count').textContent = skipped;
    document.getElementById('time-taken').textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;

    // Category Breakdown
    const breakdownDiv = document.getElementById('category-breakdown');
    breakdownDiv.innerHTML = '';

    Object.entries(categoryStats).sort((a, b) => b[1].total - a[1].total).forEach(([cat, stats]) => {
        const pct = Math.round((stats.correct / stats.total) * 100);
        const item = document.createElement('div');
        item.className = 'category-bar-item';
        item.innerHTML = `
            <div class="category-bar-header">
                <span class="category-bar-name">${cat}</span>
                <span class="category-bar-score">${stats.correct}/${stats.total} (${pct}%)</span>
            </div>
            <div class="category-bar-track">
                <div class="category-bar-fill" data-width="${pct}"></div>
            </div>
        `;
        breakdownDiv.appendChild(item);
    });

    // Animate category bars
    setTimeout(() => {
        document.querySelectorAll('.category-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
        });
    }, 300);
}

// ===== Show Answer Review =====
function showReview() {
    const reviewSection = document.getElementById('review-section');
    const reviewList = document.getElementById('review-list');

    if (reviewSection.style.display === 'block') {
        reviewSection.style.display = 'none';
        return;
    }

    reviewSection.style.display = 'block';
    reviewList.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    currentQuestions.forEach((q, i) => {
        const userAns = userAnswers[i];
        const isCorrect = userAns === q.correct;
        const isSkipped = userAns === undefined;

        let statusClass, statusText, itemClass;
        if (isSkipped) {
            statusClass = 'skipped-status';
            statusText = 'Skipped';
            itemClass = 'skipped-review';
        } else if (isCorrect) {
            statusClass = 'correct-status';
            statusText = 'Correct';
            itemClass = 'correct-review';
        } else {
            statusClass = 'wrong-status';
            statusText = 'Wrong';
            itemClass = 'wrong-review';
        }

        const div = document.createElement('div');
        div.className = `review-item ${itemClass}`;

        let optionsHTML = '';
        q.options.forEach((opt, j) => {
            let optClass = '';
            if (j === q.correct) optClass = 'correct-option';
            else if (j === userAns && !isCorrect) optClass = 'wrong-option';

            optionsHTML += `
                <div class="review-option ${optClass}">
                    <span class="review-option-letter">${letters[j]}.</span>
                    <span>${opt}</span>
                    ${j === q.correct ? ' ✓' : ''}
                    ${j === userAns && !isCorrect ? ' ✗ (Your answer)' : ''}
                </div>
            `;
        });

        div.innerHTML = `
            <div class="review-q-header">
                <span class="review-q-number">Q${i + 1} • ${q.category}</span>
                <span class="review-q-status ${statusClass}">${statusText}</span>
            </div>
            <div class="review-question-text">${q.question}</div>
            <div class="review-options">${optionsHTML}</div>
            <div class="review-explanation">
                <strong>Explanation:</strong> ${q.explanation}
            </div>
        `;

        reviewList.appendChild(div);
    });

    // Scroll to review
    reviewSection.scrollIntoView({ behavior: 'smooth' });
}
