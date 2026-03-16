/**
 * Daily Question Generator Script
 *
 * Runs via GitHub Actions at 12 AM IST daily.
 * Calls Google Gemini API to generate 60 unique questions per exam.
 * Saves results as static JSON files in questions/ directory.
 */

const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error('ERROR: GEMINI_API_KEY environment variable is not set.');
    process.exit(1);
}

// ===== Exam Configurations =====
const EXAMS = {
    upsc: {
        name: 'UPSC Prelims',
        questionCount: 60,
        prompt: `Generate 60 unique multiple-choice questions for UPSC Civil Services Prelims General Studies Paper-I exam preparation.

Cover these topics with roughly equal distribution:
- Indian History (Ancient, Medieval, Modern, Freedom Struggle) - 9 questions
- Indian Geography (Physical, Economic, Climate, Rivers, Resources) - 9 questions
- Indian Polity & Governance (Constitution, Parliament, Judiciary, Panchayati Raj, Fundamental Rights) - 9 questions
- Indian Economy (Budget, Banking, GDP, Five Year Plans, Economic Reforms, Trade) - 8 questions
- General Science (Physics, Chemistry, Biology, Technology, Space) - 9 questions
- Environment & Ecology (Biodiversity, Climate Change, Protected Areas, Environmental Laws) - 8 questions
- Current Affairs & General Knowledge (National, International, Awards, Schemes, Sports) - 8 questions

Questions should be at UPSC Prelims difficulty level - analytical, conceptual, and fact-based. Include questions on constitutional amendments, important acts, historical events with dates, geographical features of India, scientific discoveries, and government schemes.`
    },
    oas: {
        name: 'Odisha Civil Services',
        questionCount: 60,
        prompt: `Generate 60 unique multiple-choice questions for Odisha Administrative Services (OAS) exam conducted by OPSC.

Cover these topics - HEAVILY focused on Odisha state:
- Odisha History (Kalinga War, Gajapati dynasty, Ganga dynasty, Bhoi dynasty, Odisha freedom fighters like Buxi Jagabandhu, Surendra Sai, Jayee Rajguru, Laxman Naik, formation of Odisha state 1936) - 10 questions
- Odisha Geography (Districts of Odisha, Rivers - Mahanadi/Brahmani/Baitarani, Chilika Lake, Eastern Ghats, Minerals, Climate, Ports) - 10 questions
- Odisha Culture & Heritage (Jagannath Temple, Konark Sun Temple, Odissi dance, Pattachitra, Sabai grass craft, Raja festival, Nuakhai, tribal culture of Odisha, Odia literature) - 8 questions
- Odisha Economy & Development (Mining industry, NALCO, Paradip Port, agriculture, Odisha Budget, welfare schemes of Odisha government) - 7 questions
- Indian Polity & Constitution (relevant to state governance, Governor, State Legislature, Panchayati Raj in Odisha) - 8 questions
- General Science (Basic Physics, Chemistry, Biology for state exam level) - 8 questions
- Current Affairs (Odisha state news, national events, Odisha government schemes, Mo Sarkar, KALIA, BSKY) - 9 questions

Questions must be specific to Odisha state - NOT generic Indian GK. This is a STATE exam.`
    },
    ossc: {
        name: 'OSSC RI/Amin',
        questionCount: 60,
        prompt: `Generate 60 unique multiple-choice questions for OSSC Revenue Inspector (RI) and Amin examination in Odisha.

Cover these topics:
- Odisha General Knowledge (Districts, famous places, rivers, lakes, dams, festivals, tribal communities, Odisha history, important personalities of Odisha) - 12 questions
- Indian History & Culture (Ancient India, Medieval India, Modern India, Indian culture, heritage sites) - 8 questions
- Geography (India + Odisha - physical features, climate, soil, agriculture, minerals) - 9 questions
- Indian Polity & Constitution (Fundamental rights, DPSP, Parliament, State Legislature, Local governance, Land revenue system) - 8 questions
- General Science (Physics basics, Chemistry basics, Biology, Health, Nutrition, common diseases) - 8 questions
- Mental Ability & Reasoning (Number series, letter series, analogies, coding-decoding, direction sense, blood relations) - 8 questions
- Current Affairs (Odisha + National - government schemes, awards, sports, recent events) - 7 questions

Questions should be at intermediate difficulty - suitable for RI/Amin level exam. Include questions about land revenue administration, survey & settlement.`
    },
    cgl: {
        name: 'SSC CGL',
        questionCount: 60,
        prompt: `Generate 60 unique multiple-choice questions for SSC CGL (Combined Graduate Level) Tier-1 examination.

Cover these topics:
- General Awareness & Static GK (History, Culture, Heritage, Books & Authors, Important Days, First in India/World) - 10 questions
- General Science (Physics concepts, Chemistry - elements/compounds/reactions, Biology - human body/diseases/nutrition) - 9 questions
- Indian Polity & Economy (Constitution, Government institutions, Banking, Insurance, Budget terminology, Economic organizations) - 9 questions
- Geography (India & World - capitals, rivers, mountains, ocean currents, climate, soils) - 8 questions
- Reasoning & Logic (Analogies, Coding-Decoding, Series completion, Syllogisms, Blood relations, Direction sense, Mirror/Water image concepts) - 10 questions
- English Language Concepts (Synonyms, Antonyms, Idioms & Phrases, One word substitution, Spelling corrections, Grammar rules) - 7 questions
- Current Affairs (Recent appointments, awards, summits, sports events, government schemes, international events) - 7 questions

Questions should match SSC CGL Tier-1 difficulty. Mix conceptual and factual questions.`
    },
    chsl: {
        name: 'SSC CHSL',
        questionCount: 60,
        prompt: `Generate 60 unique multiple-choice questions for SSC CHSL (Combined Higher Secondary Level) Tier-1 examination.

Cover these topics:
- General Awareness (Indian History, Culture, Famous personalities, Important dates, Books & Authors, National symbols, Dances of India) - 12 questions
- General Science (Basic Physics, Basic Chemistry, Biology - diseases, vitamins, human body systems, nutrition) - 10 questions
- Reasoning & Mental Ability (Number series, Alphabet series, Odd one out, Analogy, Classification, Coding-Decoding, Mirror image, Paper folding) - 12 questions
- Indian Polity (Fundamental Rights, Duties, President, Prime Minister, Parliament basics, Courts) - 8 questions
- Geography (Indian states & capitals, rivers, mountains, national parks, soils, crops) - 8 questions
- Current Affairs & GK (Government schemes, recent events, sports, awards, abbreviations) - 10 questions

Questions should be at 10+2 level difficulty - simpler than CGL. Focus on direct, factual questions rather than analytical ones. This is an easier exam.`
    },
    ssb: {
        name: 'SSB',
        questionCount: 60,
        prompt: `Generate 60 unique multiple-choice questions for SSB (Sashastra Seema Bal) Head Constable / Constable examination.

Cover these topics:
- General Awareness & GK (Famous personalities, National symbols, Important days, Firsts in India, Awards - Padma/Bharat Ratna, National parks, Dances) - 12 questions
- Indian History & Freedom Struggle (Ancient kingdoms, Mughal era, British rule, Freedom fighters, Important revolts, Battles, Independence movement) - 10 questions
- Indian Polity & Constitution (Fundamental Rights, DPSP, President, Parliament, Supreme Court, Election Commission, Emergency provisions) - 8 questions
- Geography (India - Rivers, Mountains, Borders, Neighboring countries, International boundaries, Passes, Ports, Climate) - 8 questions
- General Science (Physics basics, Chemistry basics, Biology - diseases/vitamins/body systems, Space missions, Defense technology) - 8 questions
- Defense & Security Knowledge (Indian Army/Navy/Air Force, Ranks, Operations, Border security forces, War history, Weapons systems, Defense exercises) - 6 questions
- Current Affairs (National events, International news, Sports, Government schemes, Recent appointments, Summits) - 8 questions

Include questions about Indian borders, neighboring countries, and security-related topics. Suitable for paramilitary force exam level.`
    }
};

// ===== Gemini API Call =====
async function callGeminiAPI(examKey, examConfig) {
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const fullPrompt = `${examConfig.prompt}

IMPORTANT INSTRUCTIONS:
- Today's date seed: ${dateStr} - Use this to ensure unique questions for today
- Generate EXACTLY ${examConfig.questionCount} questions
- Each question must have EXACTLY 4 options (A, B, C, D)
- Questions must be UNIQUE and NOT repeated from any standard question bank
- Include detailed explanations for each correct answer
- Vary difficulty: 30% easy, 50% medium, 20% hard

Return ONLY a valid JSON array (no markdown, no code blocks, no extra text) in this exact format:
[
    {
        "id": 1,
        "category": "Category Name",
        "question": "Question text here?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correct": 0,
        "explanation": "Detailed explanation here"
    }
]

The "correct" field is the 0-based index of the correct option (0=A, 1=B, 2=C, 3=D).
Return ONLY the JSON array, nothing else.`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: fullPrompt }]
            }],
            generationConfig: {
                temperature: 0.9,
                topP: 0.95,
                topK: 40,
                maxOutputTokens: 65536,
                responseMimeType: 'application/json'
            }
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`API Error for ${examConfig.name}: ${response.status} - ${errorData?.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textContent) {
        throw new Error(`Empty response from Gemini API for ${examConfig.name}`);
    }

    // Parse JSON - handle potential markdown code blocks
    let jsonStr = textContent.trim();
    if (jsonStr.startsWith('```')) {
        jsonStr = jsonStr.replace(/```json?\n?/g, '').replace(/```$/g, '').trim();
    }

    const questions = JSON.parse(jsonStr);

    if (!Array.isArray(questions) || questions.length === 0) {
        throw new Error(`Invalid question format for ${examConfig.name}`);
    }

    // Validate and normalize question structure
    return questions.slice(0, examConfig.questionCount).map((q, i) => ({
        id: i + 1,
        category: q.category || 'General',
        question: q.question,
        options: Array.isArray(q.options) ? q.options.slice(0, 4) : ['A', 'B', 'C', 'D'],
        correct: typeof q.correct === 'number' ? q.correct : 0,
        explanation: q.explanation || 'No explanation available.'
    }));
}

// ===== Main =====
async function main() {
    const questionsDir = path.join(__dirname, '..', 'questions');

    // Ensure questions directory exists
    if (!fs.existsSync(questionsDir)) {
        fs.mkdirSync(questionsDir, { recursive: true });
    }

    const today = new Date();
    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    console.log(`\n=== Daily Question Generator ===`);
    console.log(`Date: ${dateStr}`);
    console.log(`Exams: ${Object.keys(EXAMS).join(', ')}\n`);

    let successCount = 0;
    let failCount = 0;

    // Generate questions for each exam sequentially (to avoid rate limits)
    for (const [examKey, examConfig] of Object.entries(EXAMS)) {
        console.log(`Generating ${examConfig.name} questions...`);

        try {
            const questions = await callGeminiAPI(examKey, examConfig);

            // Save as JSON file
            const filePath = path.join(questionsDir, `${examKey}.json`);
            const output = {
                exam: examKey,
                name: examConfig.name,
                date: dateStr,
                questionCount: questions.length,
                questions: questions
            };

            fs.writeFileSync(filePath, JSON.stringify(output, null, 2));
            console.log(`  ✓ ${examConfig.name}: ${questions.length} questions saved to questions/${examKey}.json`);
            successCount++;

        } catch (error) {
            console.error(`  ✗ ${examConfig.name}: ${error.message}`);
            failCount++;
        }

        // Small delay between API calls to avoid rate limiting
        if (Object.keys(EXAMS).indexOf(examKey) < Object.keys(EXAMS).length - 1) {
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }

    console.log(`\n=== Generation Complete ===`);
    console.log(`Success: ${successCount}/${Object.keys(EXAMS).length}`);
    console.log(`Failed: ${failCount}/${Object.keys(EXAMS).length}`);

    if (failCount === Object.keys(EXAMS).length) {
        console.error('All exams failed to generate. Exiting with error.');
        process.exit(1);
    }
}

main().catch(error => {
    console.error('Fatal error:', error.message);
    process.exit(1);
});
