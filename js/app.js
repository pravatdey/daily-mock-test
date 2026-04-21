/**
 * Daily Mock Test Application - Dynamic AI-Powered Questions
 *
 * Features:
 * - 7 Exam types: UPSC, OAS, OSSC RI/Amin, SSC CGL, SSC CHSL, SSB
 * - Daily fresh questions generated via Google Gemini API
 * - Date-seeded so all students get same test on same day
 * - Questions cached in localStorage to avoid re-fetching
 * - 60 questions per test, 60 minutes timer
 * - Category-wise performance breakdown
 */

// ===== Global State =====
let currentQuestions = [];
let userAnswers = {};
let currentQuestionIndex = 0;
let timerInterval = null;
let timeRemaining = 30 * 60;
let testStartTime = null;
let testEndTime = null;
let testSubmitted = false;
let currentExamType = '';

// ===== Exam Configurations =====
const EXAM_CONFIG = {
    upsc: {
        name: 'UPSC Prelims',
        subtitle: 'Civil Services Examination',
        icon: '🏛️',
        gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
        color: '#FF6B6B',
        ribbonClass: 'upsc',
        questionCount: 30,
        timeMinutes: 30,
        marksPerQuestion: 2,
        tags: ['Indian History', 'Geography', 'Polity', 'Economy', 'Science', 'Environment', 'Current Affairs']
    },
    oas: {
        name: 'Odisha Civil Services',
        subtitle: 'OPSC OAS Examination',
        icon: '🏛️',
        gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44B09E 100%)',
        color: '#4ECDC4',
        ribbonClass: 'oas',
        questionCount: 30,
        timeMinutes: 30,
        marksPerQuestion: 2,
        tags: ['Odisha History', 'Odisha Geography', 'Odisha Culture', 'Indian Polity', 'Economy', 'Science', 'Current Affairs']
    },
    ossc: {
        name: 'OSSC RI/Amin',
        subtitle: 'Revenue Inspector & Amin Exam',
        icon: '📋',
        gradient: 'linear-gradient(135deg, #FFD93D 0%, #FF9F1C 100%)',
        color: '#FFD93D',
        ribbonClass: 'ossc',
        questionCount: 30,
        timeMinutes: 30,
        marksPerQuestion: 2,
        tags: ['Odisha GK', 'Indian History', 'Geography', 'Polity', 'Science & Math', 'Reasoning', 'Current Affairs']
    },
    cgl: {
        name: 'SSC CGL',
        subtitle: 'Combined Graduate Level',
        icon: '🎯',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#667eea',
        ribbonClass: 'cgl',
        questionCount: 30,
        timeMinutes: 30,
        marksPerQuestion: 2,
        tags: ['General Awareness', 'Reasoning', 'English', 'Quant Concepts', 'Science', 'Polity', 'Current Affairs']
    },
    chsl: {
        name: 'SSC CHSL',
        subtitle: 'Combined Higher Secondary Level',
        icon: '📝',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        color: '#f093fb',
        ribbonClass: 'chsl',
        questionCount: 30,
        timeMinutes: 30,
        marksPerQuestion: 2,
        tags: ['General Awareness', 'Reasoning', 'English', 'Quant', 'Science', 'Current Affairs']
    },
    sgl: {
        name: 'Odisha SGL',
        subtitle: 'OSSC Staff Selection Group-L',
        icon: '📋',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        color: '#43e97b',
        ribbonClass: 'sgl',
        questionCount: 30,
        timeMinutes: 30,
        marksPerQuestion: 2,
        tags: ['Odisha GK', 'Indian History', 'Odisha Culture', 'Geography', 'Science', 'Computer', 'Current Affairs']
    }
};

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setTodayDate();
    renderExamCards();
});

// ===== Render Exam Cards Dynamically =====
function renderExamCards() {
    const container = document.getElementById('exam-cards-container');
    const startDate = new Date('2024-01-01');
    const today = new Date();
    const testNumber = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;

    container.innerHTML = '';

    Object.entries(EXAM_CONFIG).forEach(([key, config], index) => {
        const card = document.createElement('div');
        card.className = `test-select-card glass-card exam-card-${key}`;
        card.style.animationDelay = `${0.1 + index * 0.1}s`;

        card.innerHTML = `
            <div class="card-ribbon ribbon-${config.ribbonClass}" style="background: ${config.gradient};">${config.name.split(' ')[0]}</div>
            <div class="card-icon-large">${config.icon}</div>
            <h2 class="card-title">${config.name}</h2>
            <p class="card-subtitle">${config.subtitle}</p>

            <div class="card-stats">
                <div class="card-stat">
                    <span class="card-stat-value" style="background: ${config.gradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${config.questionCount}</span>
                    <span class="card-stat-label">Questions</span>
                </div>
                <div class="card-stat">
                    <span class="card-stat-value" style="background: ${config.gradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${config.timeMinutes}</span>
                    <span class="card-stat-label">Minutes</span>
                </div>
                <div class="card-stat">
                    <span class="card-stat-value" style="background: ${config.gradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${config.questionCount * config.marksPerQuestion}</span>
                    <span class="card-stat-label">Marks</span>
                </div>
                <div class="card-stat">
                    <span class="card-stat-value" style="background: ${config.gradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${testNumber}</span>
                    <span class="card-stat-label">Test #</span>
                </div>
            </div>

            <div class="card-topics">
                ${config.tags.map(tag => `<span class="card-tag" style="background: ${hexToRgba(config.color, 0.1)}; border-color: ${hexToRgba(config.color, 0.25)}; color: ${config.color};">${tag}</span>`).join('')}
            </div>

            <button class="btn-primary btn-glow btn-exam" style="background: ${config.gradient};" onclick="startTest('${key}')">
                <span class="btn-icon">🚀</span>
                <span>Start ${config.name.split(' ')[0]} Test</span>
                <span class="btn-arrow">→</span>
            </button>
        `;

        container.appendChild(card);
    });
}

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// ===== Animated Background Particles =====
function createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#6C63FF', '#4ECDC4', '#FF6B6B', '#FFD93D', '#8B85FF', '#667eea', '#43e97b', '#f093fb'];

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

// ===== Get Today's Cache Key =====
function getTodayCacheKey(examType) {
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    return `mock_test_${examType}_${dateStr}`;
}

// ===== Load Questions from Static JSON =====
async function loadQuestions(examType) {
    const cacheKey = getTodayCacheKey(examType);

    // Check localStorage cache first
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        try {
            const parsed = JSON.parse(cached);
            if (Array.isArray(parsed) && parsed.length >= 10) {
                return parsed;
            }
        } catch (_parseError) {
            localStorage.removeItem(cacheKey);
        }
    }

    // Fetch from static JSON file (generated daily by GitHub Actions)
    const response = await fetch(`questions/${examType}.json`);

    if (!response.ok) {
        throw new Error(`Questions not available for ${EXAM_CONFIG[examType].name}. Please try again later.`);
    }

    const data = await response.json();
    const questions = data.questions;

    if (!Array.isArray(questions) || questions.length === 0) {
        throw new Error(`No questions found for ${EXAM_CONFIG[examType].name}.`);
    }

    // Cache for today
    localStorage.setItem(cacheKey, JSON.stringify(questions));

    // Clean up old caches
    cleanOldCache();

    return questions;
}

// ===== Clean Old Cache =====
function cleanOldCache() {
    const keys = Object.keys(localStorage);
    const today = new Date();

    keys.forEach(key => {
        if (key.startsWith('mock_test_')) {
            const parts = key.split('_');
            const dateStr = parts.slice(-3).join('-');
            const cacheDate = new Date(dateStr);
            const daysDiff = (today - cacheDate) / (1000 * 60 * 60 * 24);
            if (daysDiff > 3) {
                localStorage.removeItem(key);
            }
        }
    });
}

// ===== Start Test =====
async function startTest(examType) {
    currentExamType = examType;
    testSubmitted = false;
    userAnswers = {};
    currentQuestionIndex = 0;
    timeRemaining = EXAM_CONFIG[examType].timeMinutes * 60;
    testStartTime = new Date();

    // Show loading screen
    showLoadingScreen(examType);

    try {
        currentQuestions = await loadQuestions(examType);

        // Ensure we have exactly the right count
        if (currentQuestions.length > EXAM_CONFIG[examType].questionCount) {
            currentQuestions = currentQuestions.slice(0, EXAM_CONFIG[examType].questionCount);
        }

        hideLoadingScreen();
        showPage('test-page');
        buildQuestionGrid();
        loadQuestion(0);
        startTimer();

        // Update header
        const config = EXAM_CONFIG[examType];
        const startDate = new Date('2024-01-01');
        const today = new Date();
        const daysDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
        document.getElementById('test-title-text').textContent = `${config.name} - Test #${daysDiff + 1}`;
        document.getElementById('total-q-num').textContent = currentQuestions.length;

    } catch (error) {
        hideLoadingScreen();
        showErrorModal(error.message);
    }
}

// ===== Loading Screen =====
function showLoadingScreen(examType) {
    const config = EXAM_CONFIG[examType];
    const overlay = document.getElementById('loading-overlay');
    document.getElementById('loading-exam-name').textContent = config.name;
    document.getElementById('loading-exam-icon').textContent = config.icon;
    overlay.style.display = 'flex';
}

function hideLoadingScreen() {
    document.getElementById('loading-overlay').style.display = 'none';
}

// ===== Error Modal =====
function showErrorModal(message) {
    document.getElementById('error-message').textContent = message;
    document.getElementById('error-modal').style.display = 'flex';
}

function closeErrorModal() {
    document.getElementById('error-modal').style.display = 'none';
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
    if (timerInterval) clearInterval(timerInterval);
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

    document.getElementById('current-q-num').textContent = index + 1;
    document.getElementById('question-category').textContent = q.category;
    document.getElementById('question-text').textContent = `Q${index + 1}. ${q.question}`;

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

    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === currentQuestions.length - 1;
    document.getElementById('prev-btn').style.opacity = index === 0 ? '0.4' : '1';
    document.getElementById('next-btn').style.opacity = index === currentQuestions.length - 1 ? '0.4' : '1';

    updateQuestionGrid();
    document.getElementById('question-nav').classList.remove('mobile-open');
}

// ===== Select Option =====
function selectOption(questionIndex, optionIndex) {
    userAnswers[questionIndex] = optionIndex;
    loadQuestion(questionIndex);
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

    switch (e.key) {
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

    const score = correct * 2;
    const totalMarks = currentQuestions.length * 2;
    const percentage = Math.round((score / totalMarks) * 100);

    const timeTaken = Math.floor((testEndTime - testStartTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    showPage('result-page');
    document.getElementById('review-section').style.display = 'none';

    const config = EXAM_CONFIG[currentExamType];
    document.getElementById('result-exam-badge').textContent = config.name;
    document.getElementById('score-total').textContent = `/ ${totalMarks}`;

    const scoreValue = document.getElementById('score-value');
    const scoreFill = document.getElementById('score-fill');

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

    let currentScore = 0;
    const scoreInterval = setInterval(() => {
        currentScore += 2;
        if (currentScore > score) currentScore = score;
        scoreValue.textContent = currentScore;
        if (currentScore >= score) clearInterval(scoreInterval);
    }, 30);

    const circumference = 2 * Math.PI * 54;
    scoreFill.style.strokeDasharray = circumference;
    const offset = circumference - (percentage / 100) * circumference;

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

    document.getElementById('correct-count').textContent = correct;
    document.getElementById('wrong-count').textContent = wrong;
    document.getElementById('skipped-count').textContent = skipped;
    document.getElementById('time-taken').textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;

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

    reviewSection.scrollIntoView({ behavior: 'smooth' });
}
