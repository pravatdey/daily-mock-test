/**
 * Daily Question Generator Script
 *
 * Runs via GitHub Actions at 12 AM IST daily.
 * Uses GitHub Models (primary) and Groq (fallback).
 * Saves results as static JSON files in questions/ directory.
 */

const fs = require('fs');
const path = require('path');

const GH_MODELS_TOKEN = process.env.GH_MODELS_TOKEN;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

if (!GH_MODELS_TOKEN && !GROQ_API_KEY) {
    console.error('ERROR: No API keys. Add GH_MODELS_TOKEN or GROQ_API_KEY to GitHub Secrets.');
    process.exit(1);
}

// ===== Exam Configurations =====
const EXAMS = {
    upsc: {
        name: 'UPSC Prelims',
        questionCount: 30,
        prompt: `Generate 30 unique multiple-choice questions for UPSC Civil Services Prelims General Studies Paper-I exam preparation.

Cover these topics with roughly equal distribution:
- Indian History (Ancient, Medieval, Modern, Freedom Struggle) - 5 questions
- Indian Geography (Physical, Economic, Climate, Rivers, Resources) - 4 questions
- Indian Polity & Governance (Constitution, Parliament, Judiciary, Panchayati Raj, Fundamental Rights) - 5 questions
- Indian Economy (Budget, Banking, GDP, Five Year Plans, Economic Reforms, Trade) - 4 questions
- General Science (Physics, Chemistry, Biology, Technology, Space) - 4 questions
- Environment & Ecology (Biodiversity, Climate Change, Protected Areas, Environmental Laws) - 4 questions
- Current Affairs & General Knowledge (National, International, Awards, Schemes, Sports) - 4 questions

Questions should be at UPSC Prelims difficulty level - analytical, conceptual, and fact-based.`
    },
    oas: {
        name: 'Odisha Civil Services',
        questionCount: 30,
        prompt: `Generate 30 unique multiple-choice questions for Odisha Administrative Services (OAS) exam conducted by OPSC.

Cover these topics - HEAVILY focused on Odisha state:
- Odisha History (Kalinga War, Gajapati dynasty, Ganga dynasty, Bhoi dynasty, Odisha freedom fighters like Buxi Jagabandhu, Surendra Sai, Jayee Rajguru, Laxman Naik, formation of Odisha state 1936) - 5 questions
- Odisha Geography (Districts of Odisha, Rivers - Mahanadi/Brahmani/Baitarani, Chilika Lake, Eastern Ghats, Minerals, Climate, Ports) - 5 questions
- Odisha Culture & Heritage (Jagannath Temple, Konark Sun Temple, Odissi dance, Pattachitra, Sabai grass craft, Raja festival, Nuakhai, tribal culture of Odisha, Odia literature) - 4 questions
- Odisha Economy & Development (Mining industry, NALCO, Paradip Port, agriculture, Odisha Budget, welfare schemes of Odisha government) - 4 questions
- Indian Polity & Constitution (relevant to state governance, Governor, State Legislature, Panchayati Raj in Odisha) - 4 questions
- General Science (Basic Physics, Chemistry, Biology for state exam level) - 4 questions
- Current Affairs (Odisha state news, national events, Odisha government schemes, Mo Sarkar, KALIA, BSKY) - 4 questions

Questions must be specific to Odisha state - NOT generic Indian GK. This is a STATE exam.`
    },
    ossc: {
        name: 'OSSC RI/Amin',
        questionCount: 30,
        prompt: `Generate 30 unique multiple-choice questions for OSSC Revenue Inspector (RI) and Amin examination in Odisha.

Cover these topics:
- Odisha General Knowledge (Districts, famous places, rivers, lakes, dams, festivals, tribal communities, Odisha history, important personalities of Odisha) - 6 questions
- Indian History & Culture (Ancient India, Medieval India, Modern India, Indian culture, heritage sites) - 4 questions
- Geography (India + Odisha - physical features, climate, soil, agriculture, minerals) - 4 questions
- Indian Polity & Constitution (Fundamental rights, DPSP, Parliament, State Legislature, Local governance, Land revenue system) - 4 questions
- General Science (Physics basics, Chemistry basics, Biology, Health, Nutrition, common diseases) - 4 questions
- Mental Ability & Reasoning (Number series, letter series, analogies, coding-decoding, direction sense, blood relations) - 4 questions
- Current Affairs (Odisha + National - government schemes, awards, sports, recent events) - 4 questions

Questions should be at intermediate difficulty - suitable for RI/Amin level exam.`
    }
};

// ===== Fetch Wikipedia content for current affairs facts =====
async function fetchWikipediaSummary(title) {
    try {
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
        const response = await fetch(url);
        if (!response.ok) return null;
        const data = await response.json();
        return data.extract || null;
    } catch (e) {
        return null;
    }
}

async function getCurrentAffairsContext() {
    const topics = [
        'Governor_of_Odisha',
        'List_of_chief_ministers_of_Odisha',
        'Government_of_Odisha',
        'President_of_India',
        'Vice_President_of_India',
        'Prime_Minister_of_India',
        'Chief_Justice_of_India',
        'Cabinet_of_India'
    ];

    console.log(`  📚 Fetching current facts from Wikipedia...`);
    const facts = [];
    for (const topic of topics) {
        const summary = await fetchWikipediaSummary(topic);
        if (summary) {
            // Trim to first 500 chars to keep prompt size manageable
            facts.push(`[${topic.replace(/_/g, ' ')}]: ${summary.substring(0, 500)}`);
        }
    }
    return facts.join('\n\n');
}

// ===== Build prompt =====
function buildPrompt(examConfig, dateStr, currentFacts) {
    const factsSection = currentFacts
        ? `\n\nCURRENT VERIFIED FACTS (Use these for current affairs questions - DO NOT use outdated info):\n${currentFacts}\n`
        : '';

    return `${examConfig.prompt}${factsSection}

IMPORTANT:
- Date seed: ${dateStr} - ensure unique questions for today
- Generate EXACTLY ${examConfig.questionCount} questions
- Each question: 4 options (A, B, C, D)
- Questions must be UNIQUE
- Include explanations for correct answers
- Difficulty mix: 30% easy, 50% medium, 20% hard

Return ONLY valid JSON array:
[{"id":1,"category":"Topic","question":"Q?","options":["A","B","C","D"],"correct":0,"explanation":"Why"}]
"correct" = 0-based index (0=A,1=B,2=C,3=D). Return ONLY the JSON array.`;
}

// ===== Parse questions from API response =====
function parseQuestions(text, examConfig) {
    let jsonStr = text.trim();
    if (jsonStr.startsWith('```')) {
        jsonStr = jsonStr.replace(/```json?\n?/g, '').replace(/```$/g, '').trim();
    }

    let questions;
    const parsed = JSON.parse(jsonStr);

    if (Array.isArray(parsed)) {
        questions = parsed;
    } else if (typeof parsed === 'object' && parsed !== null) {
        for (const value of Object.values(parsed)) {
            if (Array.isArray(value) && value.length > 0 && value[0].question) {
                questions = value;
                break;
            }
        }
    }

    if (!Array.isArray(questions) || questions.length === 0) {
        throw new Error(`Invalid question format for ${examConfig.name}`);
    }

    return questions.slice(0, examConfig.questionCount).map((q, i) => ({
        id: i + 1,
        category: q.category || 'General',
        question: q.question,
        options: Array.isArray(q.options) ? q.options.slice(0, 4) : ['A', 'B', 'C', 'D'],
        correct: typeof q.correct === 'number' ? q.correct : 0,
        explanation: q.explanation || 'No explanation available.'
    }));
}

// ===== GitHub Models API Call (Primary) =====
async function callGitHubModels(fullPrompt, examConfig) {
    const response = await fetch('https://models.github.ai/inference/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GH_MODELS_TOKEN}`
        },
        body: JSON.stringify({
            model: 'openai/gpt-4.1-nano',
            messages: [
                {
                    role: 'system',
                    content: 'You are an expert exam question generator for Indian competitive exams. Return ONLY a valid JSON array of question objects. No markdown, no extra text.'
                },
                { role: 'user', content: fullPrompt }
            ],
            temperature: 0.9,
            max_tokens: 16000
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`GitHub Models ${response.status}: ${errorData?.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const textContent = data.choices?.[0]?.message?.content;
    if (!textContent) throw new Error('Empty response from GitHub Models');

    return parseQuestions(textContent, examConfig);
}

// ===== Groq API Call (Fallback - batched) =====
async function callGroqBatch(batchPrompt) {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
                {
                    role: 'system',
                    content: 'You are an expert exam question generator for Indian competitive exams. Return ONLY a valid JSON object with a "questions" key containing an array of question objects.'
                },
                { role: 'user', content: batchPrompt }
            ],
            temperature: 0.9,
            max_tokens: 8192,
            response_format: { type: 'json_object' }
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Groq ${response.status}: ${errorData?.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const textContent = data.choices?.[0]?.message?.content;
    if (!textContent) throw new Error('Empty response from Groq');

    const parsed = JSON.parse(textContent);

    let questions;
    if (Array.isArray(parsed)) {
        questions = parsed;
    } else if (typeof parsed === 'object' && parsed !== null) {
        for (const value of Object.values(parsed)) {
            if (Array.isArray(value) && value.length > 0 && value[0].question) {
                questions = value;
                break;
            }
        }
    }

    if (!Array.isArray(questions) || questions.length === 0) {
        throw new Error('Groq response does not contain a questions array');
    }

    return questions;
}

async function callGroq(examConfig, dateStr, currentFacts) {
    const batchSize = 10;
    const totalQuestions = examConfig.questionCount;
    const batches = Math.ceil(totalQuestions / batchSize);
    let allQuestions = [];

    const topics = examConfig.prompt.split('\n').filter(l => l.trim().startsWith('-')).map(l => l.replace(/^- /, '').replace(/ - \d+ questions/, '').trim());

    for (let batch = 0; batch < batches; batch++) {
        const remaining = totalQuestions - allQuestions.length;
        const count = Math.min(batchSize, remaining);
        const batchNum = batch + 1;
        const topic = topics[batch % topics.length] || 'General Knowledge';

        // Include current facts only for current affairs topic batches
        const isCurrentAffairs = topic.toLowerCase().includes('current affairs');
        const factsContext = (isCurrentAffairs && currentFacts) ? `\n\nVERIFIED CURRENT FACTS:\n${currentFacts.substring(0, 1500)}\n` : '';

        const batchPrompt = `Generate ${count} unique MCQ for ${examConfig.name} exam. Topic: ${topic}. Date: ${dateStr}-b${batchNum}${factsContext}

Return JSON: {"questions":[{"id":1,"category":"Topic","question":"Q?","options":["A","B","C","D"],"correct":0,"explanation":"Why"}]}
"correct" = 0-based index. EXACTLY ${count} questions.`;

        console.log(`    Groq batch ${batchNum}/${batches} (${count}q)...`);
        const batchQuestions = await callGroqBatch(batchPrompt);
        allQuestions = allQuestions.concat(batchQuestions);

        if (batch < batches - 1) {
            console.log(`    ⏳ Waiting 62s for rate limit reset...`);
            await new Promise(resolve => setTimeout(resolve, 62000));
        }
    }

    return allQuestions.slice(0, totalQuestions).map((q, i) => ({
        id: i + 1,
        category: q.category || 'General',
        question: q.question,
        options: Array.isArray(q.options) ? q.options.slice(0, 4) : ['A', 'B', 'C', 'D'],
        correct: typeof q.correct === 'number' ? q.correct : 0,
        explanation: q.explanation || 'No explanation available.'
    }));
}

// ===== Generate with fallback =====
async function generateQuestions(examKey, examConfig, dateStr, currentFacts) {
    const fullPrompt = buildPrompt(examConfig, dateStr, currentFacts);

    // Try GitHub Models first (fast, single call)
    if (GH_MODELS_TOKEN) {
        try {
            const questions = await callGitHubModels(fullPrompt, examConfig);
            console.log(`  ✓ ${examConfig.name}: ${questions.length} questions (GitHub Models)`);
            return questions;
        } catch (error) {
            console.log(`  ⚠ GitHub Models failed: ${error.message}`);
        }
    }

    // Fallback to Groq (batched)
    if (GROQ_API_KEY) {
        try {
            console.log(`  → Trying Groq fallback...`);
            const questions = await callGroq(examConfig, dateStr, currentFacts);
            console.log(`  ✓ ${examConfig.name}: ${questions.length} questions (Groq)`);
            return questions;
        } catch (error) {
            console.log(`  ⚠ Groq failed: ${error.message}`);
        }
    }

    throw new Error(`All APIs failed for ${examConfig.name}`);
}

// ===== Main =====
async function main() {
    const questionsDir = path.join(__dirname, '..', 'questions');

    if (!fs.existsSync(questionsDir)) {
        fs.mkdirSync(questionsDir, { recursive: true });
    }

    const today = new Date();
    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    console.log(`\n=== Daily Question Generator ===`);
    console.log(`Date: ${dateStr}`);
    console.log(`APIs: ${GH_MODELS_TOKEN ? 'GitHub Models ✓' : 'GitHub Models ✗'} | ${GROQ_API_KEY ? 'Groq ✓' : 'Groq ✗'}`);
    console.log(`Exams: ${Object.keys(EXAMS).join(', ')}\n`);

    // Fetch current facts from Wikipedia (shared across all exams)
    const currentFacts = await getCurrentAffairsContext();
    console.log(`  ✓ Current affairs context loaded\n`);

    let successCount = 0;
    let failCount = 0;

    for (const [examKey, examConfig] of Object.entries(EXAMS)) {
        console.log(`Generating ${examConfig.name} questions...`);

        try {
            const questions = await generateQuestions(examKey, examConfig, dateStr, currentFacts);

            const filePath = path.join(questionsDir, `${examKey}.json`);
            const output = {
                exam: examKey,
                name: examConfig.name,
                date: dateStr,
                questionCount: questions.length,
                questions: questions
            };

            fs.writeFileSync(filePath, JSON.stringify(output, null, 2));
            successCount++;

        } catch (error) {
            console.error(`  ✗ ${examConfig.name}: ${error.message}`);
            failCount++;
        }

        // Small delay between exams
        if (Object.keys(EXAMS).indexOf(examKey) < Object.keys(EXAMS).length - 1) {
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }

    console.log(`\n=== Generation Complete ===`);
    console.log(`Success: ${successCount}/${Object.keys(EXAMS).length}`);
    console.log(`Failed: ${failCount}/${Object.keys(EXAMS).length}`);

    if (failCount === Object.keys(EXAMS).length) {
        console.error('All exams failed. Exiting with error.');
        process.exit(1);
    }
}

main().catch(error => {
    console.error('Fatal error:', error.message);
    process.exit(1);
});
