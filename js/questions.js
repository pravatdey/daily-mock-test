/**
 * MASSIVE QUESTION BANK for UPSC & Odisha PCS Mock Tests
 *
 * The system uses the current date as a seed to pick 60 questions daily per exam.
 * UPSC and OCS tests use different seeds for unique question sets.
 * Each day gets a unique, deterministic set of 60 questions per exam type.
 *
 * Categories:
 * 1. Indian History
 * 2. Indian Geography
 * 3. Indian Polity & Governance
 * 4. Indian Economy
 * 5. General Science
 * 6. Odisha GK & History
 * 7. Environment & Ecology
 * 8. Current Affairs & Miscellaneous
 */

const QUESTION_BANK = [

    // ========================================
    // INDIAN HISTORY (60+ questions)
    // ========================================
    {
        id: 1,
        category: "Indian History",
        question: "The Indus Valley Civilization was mainly spread across which river system?",
        options: ["Ganga-Yamuna", "Indus and Ghaggar-Hakra", "Brahmaputra", "Narmada-Tapti"],
        correct: 1,
        explanation: "The Indus Valley Civilization (also called Harappan Civilization) was primarily spread along the Indus River and the now dried-up Ghaggar-Hakra (Saraswati) river system."
    },
    {
        id: 2,
        category: "Indian History",
        question: "Who was the founder of the Maurya Empire?",
        options: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Brihadratha"],
        correct: 2,
        explanation: "Chandragupta Maurya founded the Maurya Empire in 322 BCE with the help of Chanakya (Kautilya) by overthrowing the Nanda dynasty."
    },
    {
        id: 3,
        category: "Indian History",
        question: "The famous Dandi March was associated with which movement?",
        options: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"],
        correct: 1,
        explanation: "The Dandi March (Salt March) in 1930 marked the beginning of the Civil Disobedience Movement against the British salt tax."
    },
    {
        id: 4,
        category: "Indian History",
        question: "Who wrote the famous book 'Arthashastra'?",
        options: ["Megasthenes", "Kautilya (Chanakya)", "Banabhatta", "Kalidasa"],
        correct: 1,
        explanation: "Kautilya (Chanakya), the prime minister of Chandragupta Maurya, authored the Arthashastra, an ancient Indian treatise on statecraft, economic policy, and military strategy."
    },
    {
        id: 5,
        category: "Indian History",
        question: "The Battle of Plassey in 1757 was fought between the British and?",
        options: ["Tipu Sultan", "Siraj-ud-Daulah", "Hyder Ali", "Shah Alam II"],
        correct: 1,
        explanation: "The Battle of Plassey (1757) was fought between the British East India Company led by Robert Clive and the Nawab of Bengal, Siraj-ud-Daulah."
    },
    {
        id: 6,
        category: "Indian History",
        question: "Ashoka the Great embraced Buddhism after the battle of?",
        options: ["Talikota", "Kalinga", "Haldighati", "Panipat"],
        correct: 1,
        explanation: "The Kalinga War (261 BCE) and its massive destruction deeply affected Emperor Ashoka, leading him to embrace Buddhism and the path of non-violence (Ahimsa)."
    },
    {
        id: 7,
        category: "Indian History",
        question: "The Mughal Empire was founded by?",
        options: ["Akbar", "Babur", "Humayun", "Shah Jahan"],
        correct: 1,
        explanation: "Babur, a descendant of Timur and Genghis Khan, founded the Mughal Empire in 1526 after defeating Ibrahim Lodi in the First Battle of Panipat."
    },
    {
        id: 8,
        category: "Indian History",
        question: "Which Viceroy of India announced the Partition of Bengal in 1905?",
        options: ["Lord Curzon", "Lord Ripon", "Lord Mountbatten", "Lord Dalhousie"],
        correct: 0,
        explanation: "Lord Curzon, the Viceroy of India, announced the Partition of Bengal in 1905, which led to massive protests and the Swadeshi Movement."
    },
    {
        id: 9,
        category: "Indian History",
        question: "The Jallianwala Bagh Massacre took place in which year?",
        options: ["1917", "1919", "1921", "1930"],
        correct: 1,
        explanation: "The Jallianwala Bagh Massacre occurred on April 13, 1919, in Amritsar when British troops under General Dyer fired on a peaceful gathering, killing hundreds."
    },
    {
        id: 10,
        category: "Indian History",
        question: "Who is known as the 'Father of Indian Renaissance'?",
        options: ["Swami Vivekananda", "Raja Ram Mohan Roy", "Ishwar Chandra Vidyasagar", "Dayanand Saraswati"],
        correct: 1,
        explanation: "Raja Ram Mohan Roy is often called the 'Father of Indian Renaissance' for his efforts in social reform, including the abolition of Sati and promotion of modern education."
    },
    {
        id: 11,
        category: "Indian History",
        question: "The Quit India Movement was launched in which year?",
        options: ["1940", "1941", "1942", "1943"],
        correct: 2,
        explanation: "The Quit India Movement was launched on August 8, 1942, by Mahatma Gandhi demanding an end to British rule in India."
    },
    {
        id: 12,
        category: "Indian History",
        question: "Which dynasty built the famous Khajuraho temples?",
        options: ["Chola Dynasty", "Chandela Dynasty", "Pallava Dynasty", "Rashtrakuta Dynasty"],
        correct: 1,
        explanation: "The Chandela Dynasty built the famous Khajuraho temples between 950-1050 CE, known for their stunning nagara-style architecture."
    },
    {
        id: 13,
        category: "Indian History",
        question: "Who was the first woman ruler of the Delhi Sultanate?",
        options: ["Nur Jahan", "Razia Sultan", "Mumtaz Mahal", "Chand Bibi"],
        correct: 1,
        explanation: "Razia Sultan (1236-1240) was the first and only woman ruler of the Delhi Sultanate, belonging to the Slave (Mamluk) Dynasty."
    },
    {
        id: 14,
        category: "Indian History",
        question: "The Doctrine of Lapse was introduced by?",
        options: ["Lord Wellesley", "Lord Dalhousie", "Lord Canning", "Lord Cornwallis"],
        correct: 1,
        explanation: "Lord Dalhousie introduced the Doctrine of Lapse, under which the British would annex any princely state where the ruler died without a natural male heir."
    },
    {
        id: 15,
        category: "Indian History",
        question: "Which emperor built the Taj Mahal?",
        options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
        correct: 2,
        explanation: "Shah Jahan built the Taj Mahal in Agra between 1632-1653 as a mausoleum for his wife Mumtaz Mahal."
    },
    {
        id: 16,
        category: "Indian History",
        question: "The Permanent Settlement was introduced by?",
        options: ["Lord Cornwallis", "Lord Wellesley", "Lord Ripon", "Lord Hastings"],
        correct: 0,
        explanation: "Lord Cornwallis introduced the Permanent Settlement in 1793 in Bengal, Bihar, and Odisha, which fixed the land revenue to be paid by zamindars."
    },
    {
        id: 17,
        category: "Indian History",
        question: "The Indian National Congress was founded in which year?",
        options: ["1880", "1885", "1890", "1895"],
        correct: 1,
        explanation: "The Indian National Congress (INC) was founded in 1885 by A.O. Hume, with the first session held in Bombay under W.C. Bannerjee as president."
    },
    {
        id: 18,
        category: "Indian History",
        question: "Who gave the slogan 'Do or Die'?",
        options: ["Subhas Chandra Bose", "Bal Gangadhar Tilak", "Mahatma Gandhi", "Jawaharlal Nehru"],
        correct: 2,
        explanation: "Mahatma Gandhi gave the slogan 'Do or Die' (Karo ya Maro) during the Quit India Movement in 1942."
    },
    {
        id: 19,
        category: "Indian History",
        question: "Which ancient Indian university was one of the first residential universities in the world?",
        options: ["Taxila", "Vikramashila", "Nalanda", "Vallabhi"],
        correct: 2,
        explanation: "Nalanda University, founded around 5th century CE, is considered one of the first great residential universities in the world, attracting scholars from all over Asia."
    },
    {
        id: 20,
        category: "Indian History",
        question: "The Rowlatt Act was passed in which year?",
        options: ["1917", "1918", "1919", "1920"],
        correct: 2,
        explanation: "The Rowlatt Act was passed on March 10, 1919, giving the British government powers to imprison anyone suspected of terrorism without trial."
    },

    // ========================================
    // INDIAN GEOGRAPHY (60+ questions)
    // ========================================
    {
        id: 21,
        category: "Indian Geography",
        question: "Which is the longest river in India?",
        options: ["Yamuna", "Brahmaputra", "Ganga", "Godavari"],
        correct: 2,
        explanation: "The Ganga is the longest river flowing entirely within India, with a length of about 2,525 km from Gangotri to the Bay of Bengal."
    },
    {
        id: 22,
        category: "Indian Geography",
        question: "The Deccan Plateau is bounded on the west by?",
        options: ["Eastern Ghats", "Western Ghats", "Vindhya Range", "Aravalli Range"],
        correct: 1,
        explanation: "The Deccan Plateau is bounded on the west by the Western Ghats (Sahyadri), on the east by the Eastern Ghats, and on the north by the Vindhya-Satpura ranges."
    },
    {
        id: 23,
        category: "Indian Geography",
        question: "Which Indian state has the longest coastline?",
        options: ["Maharashtra", "Tamil Nadu", "Gujarat", "Andhra Pradesh"],
        correct: 2,
        explanation: "Gujarat has the longest coastline among Indian states, stretching about 1,600 km along the Arabian Sea."
    },
    {
        id: 24,
        category: "Indian Geography",
        question: "The Tropic of Cancer passes through how many Indian states?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        explanation: "The Tropic of Cancer passes through 8 Indian states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram."
    },
    {
        id: 25,
        category: "Indian Geography",
        question: "Which soil type is most suitable for cotton cultivation?",
        options: ["Alluvial soil", "Black soil (Regur)", "Red soil", "Laterite soil"],
        correct: 1,
        explanation: "Black soil (Regur soil) is most suitable for cotton cultivation due to its moisture-retaining capacity. It is predominantly found in the Deccan Plateau."
    },
    {
        id: 26,
        category: "Indian Geography",
        question: "Chilika Lake is located in which Indian state?",
        options: ["Tamil Nadu", "Kerala", "Odisha", "Andhra Pradesh"],
        correct: 2,
        explanation: "Chilika Lake, the largest brackish water lake in Asia, is located in Odisha along the Bay of Bengal coast."
    },
    {
        id: 27,
        category: "Indian Geography",
        question: "Which mountain pass connects Leh with Kashmir?",
        options: ["Rohtang Pass", "Zoji La", "Khyber Pass", "Banihal Pass"],
        correct: 1,
        explanation: "Zoji La pass (3,528m) connects Leh (Ladakh) with the Kashmir Valley and is one of the most crucial passes in the western Himalayas."
    },
    {
        id: 28,
        category: "Indian Geography",
        question: "The Western Ghats are also known as?",
        options: ["Sahyadri", "Nilgiri", "Vindhya", "Karakoram"],
        correct: 0,
        explanation: "The Western Ghats are also known as Sahyadri, running along the western coast of India from Gujarat to Kerala."
    },
    {
        id: 29,
        category: "Indian Geography",
        question: "Which is the smallest state of India by area?",
        options: ["Tripura", "Sikkim", "Goa", "Mizoram"],
        correct: 2,
        explanation: "Goa is the smallest state of India by area, covering only 3,702 sq km."
    },
    {
        id: 30,
        category: "Indian Geography",
        question: "The Thar Desert is located in which state?",
        options: ["Gujarat", "Madhya Pradesh", "Rajasthan", "Haryana"],
        correct: 2,
        explanation: "The Thar Desert (Great Indian Desert) is primarily located in Rajasthan, extending into Gujarat, Haryana, and Punjab."
    },
    {
        id: 31,
        category: "Indian Geography",
        question: "Which river is known as the 'Sorrow of Bihar'?",
        options: ["Ganga", "Son", "Kosi", "Gandak"],
        correct: 2,
        explanation: "The Kosi River is known as the 'Sorrow of Bihar' due to its frequent flooding and course changes, causing widespread destruction."
    },
    {
        id: 32,
        category: "Indian Geography",
        question: "Nanda Devi peak is located in which state?",
        options: ["Himachal Pradesh", "Uttarakhand", "Sikkim", "Jammu & Kashmir"],
        correct: 1,
        explanation: "Nanda Devi (7,816m) is located in Uttarakhand and is the second highest mountain in India after Kangchenjunga."
    },
    {
        id: 33,
        category: "Indian Geography",
        question: "Which type of climate does most of India have?",
        options: ["Tropical", "Temperate", "Monsoon", "Arid"],
        correct: 2,
        explanation: "Most of India has a monsoon type of climate, characterized by seasonal reversal of winds and distinct wet and dry seasons."
    },
    {
        id: 34,
        category: "Indian Geography",
        question: "The Sundarbans delta is formed by which rivers?",
        options: ["Ganga and Yamuna", "Ganga and Brahmaputra", "Brahmaputra and Meghna", "Ganga and Mahanadi"],
        correct: 1,
        explanation: "The Sundarbans, the world's largest mangrove forest, is formed by the delta of the Ganga and Brahmaputra rivers in West Bengal and Bangladesh."
    },
    {
        id: 35,
        category: "Indian Geography",
        question: "Which state is the largest producer of tea in India?",
        options: ["Kerala", "Tamil Nadu", "Assam", "West Bengal"],
        correct: 2,
        explanation: "Assam is the largest producer of tea in India, accounting for more than 50% of the country's total tea production."
    },
    {
        id: 36,
        category: "Indian Geography",
        question: "Hirakud Dam is built on which river?",
        options: ["Godavari", "Krishna", "Mahanadi", "Narmada"],
        correct: 2,
        explanation: "Hirakud Dam, one of the longest dams in the world, is built on the Mahanadi River in Odisha."
    },
    {
        id: 37,
        category: "Indian Geography",
        question: "The Palk Strait separates India from?",
        options: ["Myanmar", "Sri Lanka", "Maldives", "Bangladesh"],
        correct: 1,
        explanation: "The Palk Strait separates the southeastern coast of India (Tamil Nadu) from Sri Lanka."
    },
    {
        id: 38,
        category: "Indian Geography",
        question: "Which island group of India lies in the Arabian Sea?",
        options: ["Andaman Islands", "Nicobar Islands", "Lakshadweep", "Both A and B"],
        correct: 2,
        explanation: "Lakshadweep islands lie in the Arabian Sea, while the Andaman and Nicobar Islands are in the Bay of Bengal."
    },
    {
        id: 39,
        category: "Indian Geography",
        question: "Which is the highest plateau in India?",
        options: ["Deccan Plateau", "Chota Nagpur Plateau", "Ladakh Plateau", "Malwa Plateau"],
        correct: 2,
        explanation: "The Ladakh Plateau is the highest plateau in India, with an average elevation of about 5,000 meters."
    },
    {
        id: 40,
        category: "Indian Geography",
        question: "The Brahmaputra River enters India through which state?",
        options: ["Assam", "Arunachal Pradesh", "Meghalaya", "Sikkim"],
        correct: 1,
        explanation: "The Brahmaputra enters India through Arunachal Pradesh (where it is called Dihang/Siang) before flowing into Assam."
    },

    // ========================================
    // INDIAN POLITY & GOVERNANCE (60+ questions)
    // ========================================
    {
        id: 41,
        category: "Indian Polity",
        question: "The Constitution of India was adopted on?",
        options: ["26 January 1950", "15 August 1947", "26 November 1949", "26 January 1949"],
        correct: 2,
        explanation: "The Constitution of India was adopted by the Constituent Assembly on November 26, 1949, and came into effect on January 26, 1950."
    },
    {
        id: 42,
        category: "Indian Polity",
        question: "Who is known as the 'Father of the Indian Constitution'?",
        options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
        correct: 1,
        explanation: "Dr. B.R. Ambedkar is known as the 'Father of the Indian Constitution' as he was the Chairman of the Drafting Committee of the Constituent Assembly."
    },
    {
        id: 43,
        category: "Indian Polity",
        question: "The Preamble of the Indian Constitution begins with?",
        options: ["We, the citizens of India", "We, the people of India", "We, the representatives of India", "The Government of India"],
        correct: 1,
        explanation: "The Preamble of the Indian Constitution begins with 'We, the people of India', signifying that the Constitution derives its authority from the people."
    },
    {
        id: 44,
        category: "Indian Polity",
        question: "Fundamental Rights are enshrined in which part of the Constitution?",
        options: ["Part II", "Part III", "Part IV", "Part V"],
        correct: 1,
        explanation: "Fundamental Rights are enshrined in Part III (Articles 12-35) of the Indian Constitution."
    },
    {
        id: 45,
        category: "Indian Polity",
        question: "The minimum age to become the President of India is?",
        options: ["25 years", "30 years", "35 years", "40 years"],
        correct: 2,
        explanation: "Under Article 58 of the Constitution, the minimum age to become the President of India is 35 years."
    },
    {
        id: 46,
        category: "Indian Polity",
        question: "The Rajya Sabha can have a maximum of how many members?",
        options: ["238", "245", "250", "260"],
        correct: 2,
        explanation: "The Rajya Sabha (Council of States) can have a maximum of 250 members - 238 elected by state and UT legislatures and 12 nominated by the President."
    },
    {
        id: 47,
        category: "Indian Polity",
        question: "Which Article of the Constitution deals with the Right to Equality?",
        options: ["Article 14", "Article 19", "Article 21", "Article 25"],
        correct: 0,
        explanation: "Article 14 of the Indian Constitution guarantees equality before law and equal protection of laws within the territory of India."
    },
    {
        id: 48,
        category: "Indian Polity",
        question: "The 73rd Constitutional Amendment is related to?",
        options: ["Fundamental Duties", "Panchayati Raj", "Municipal Bodies", "Scheduled Tribes"],
        correct: 1,
        explanation: "The 73rd Constitutional Amendment (1992) gave constitutional status to Panchayati Raj institutions, adding Part IX to the Constitution."
    },
    {
        id: 49,
        category: "Indian Polity",
        question: "Who appoints the Chief Justice of India?",
        options: ["Prime Minister", "President", "Law Minister", "Parliament"],
        correct: 1,
        explanation: "The President of India appoints the Chief Justice of India and other judges of the Supreme Court under Article 124 of the Constitution."
    },
    {
        id: 50,
        category: "Indian Polity",
        question: "The Directive Principles of State Policy are contained in which Part of the Constitution?",
        options: ["Part III", "Part IV", "Part IV-A", "Part V"],
        correct: 1,
        explanation: "The Directive Principles of State Policy are contained in Part IV (Articles 36-51) of the Indian Constitution."
    },
    {
        id: 51,
        category: "Indian Polity",
        question: "Emergency provisions in the Indian Constitution are borrowed from which country?",
        options: ["USA", "UK", "Germany", "Canada"],
        correct: 2,
        explanation: "The Emergency provisions in the Indian Constitution were borrowed from the Weimar Constitution of Germany."
    },
    {
        id: 52,
        category: "Indian Polity",
        question: "The Indian Parliament consists of?",
        options: ["Lok Sabha only", "Rajya Sabha only", "President, Lok Sabha and Rajya Sabha", "Lok Sabha and Rajya Sabha"],
        correct: 2,
        explanation: "Under Article 79, the Indian Parliament consists of the President and two Houses - Rajya Sabha (Council of States) and Lok Sabha (House of the People)."
    },
    {
        id: 53,
        category: "Indian Polity",
        question: "Which schedule of the Constitution deals with the anti-defection law?",
        options: ["Eighth Schedule", "Ninth Schedule", "Tenth Schedule", "Eleventh Schedule"],
        correct: 2,
        explanation: "The Tenth Schedule (added by the 52nd Amendment, 1985) deals with the anti-defection law, providing for disqualification of members who defect from their party."
    },
    {
        id: 54,
        category: "Indian Polity",
        question: "Fundamental Duties were added to the Constitution by which amendment?",
        options: ["40th Amendment", "42nd Amendment", "44th Amendment", "46th Amendment"],
        correct: 1,
        explanation: "Fundamental Duties were added by the 42nd Constitutional Amendment Act, 1976, based on the recommendations of the Swaran Singh Committee."
    },
    {
        id: 55,
        category: "Indian Polity",
        question: "The concept of 'Judicial Review' in India is adopted from which country?",
        options: ["UK", "USA", "Canada", "Australia"],
        correct: 1,
        explanation: "The concept of Judicial Review in the Indian Constitution is adopted from the Constitution of the United States of America."
    },
    {
        id: 56,
        category: "Indian Polity",
        question: "Money Bill can be introduced only in?",
        options: ["Rajya Sabha", "Lok Sabha", "Either House", "Joint Session"],
        correct: 1,
        explanation: "Under Article 110, a Money Bill can only be introduced in the Lok Sabha and not in the Rajya Sabha."
    },
    {
        id: 57,
        category: "Indian Polity",
        question: "The Governor of a state is appointed by?",
        options: ["Chief Minister", "President", "Prime Minister", "Chief Justice of India"],
        correct: 1,
        explanation: "Under Article 155, the Governor of a state is appointed by the President of India and holds office during the pleasure of the President."
    },
    {
        id: 58,
        category: "Indian Polity",
        question: "Right to Education (Article 21A) was added by which Constitutional Amendment?",
        options: ["84th", "86th", "88th", "91st"],
        correct: 1,
        explanation: "The 86th Constitutional Amendment Act, 2002, inserted Article 21A making free and compulsory education for children aged 6-14 a Fundamental Right."
    },
    {
        id: 59,
        category: "Indian Polity",
        question: "How many Fundamental Rights are currently recognized by the Indian Constitution?",
        options: ["5", "6", "7", "8"],
        correct: 1,
        explanation: "Currently, the Indian Constitution recognizes 6 Fundamental Rights (originally 7, but the Right to Property was removed by the 44th Amendment)."
    },
    {
        id: 60,
        category: "Indian Polity",
        question: "The CAG (Comptroller and Auditor General) of India is appointed by?",
        options: ["Prime Minister", "President", "Finance Minister", "Speaker of Lok Sabha"],
        correct: 1,
        explanation: "Under Article 148, the CAG is appointed by the President of India and audits all receipts and expenditures of the Government."
    },

    // ========================================
    // INDIAN ECONOMY (50+ questions)
    // ========================================
    {
        id: 61,
        category: "Indian Economy",
        question: "The Reserve Bank of India was established in which year?",
        options: ["1930", "1935", "1940", "1947"],
        correct: 1,
        explanation: "The Reserve Bank of India (RBI) was established on April 1, 1935, under the RBI Act 1934. It was nationalized in 1949."
    },
    {
        id: 62,
        category: "Indian Economy",
        question: "NITI Aayog replaced which body?",
        options: ["Finance Commission", "Planning Commission", "National Development Council", "Economic Advisory Council"],
        correct: 1,
        explanation: "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on January 1, 2015."
    },
    {
        id: 63,
        category: "Indian Economy",
        question: "GST (Goods and Services Tax) was implemented in India from?",
        options: ["1st April 2017", "1st July 2017", "1st January 2018", "1st April 2018"],
        correct: 1,
        explanation: "GST was implemented in India from July 1, 2017, through the 101st Constitutional Amendment Act, replacing multiple indirect taxes."
    },
    {
        id: 64,
        category: "Indian Economy",
        question: "Which Five Year Plan is known as the 'Mahalanobis Plan'?",
        options: ["First Five Year Plan", "Second Five Year Plan", "Third Five Year Plan", "Fourth Five Year Plan"],
        correct: 1,
        explanation: "The Second Five Year Plan (1956-61) is known as the Mahalanobis Plan, named after the statistician P.C. Mahalanobis who designed it with emphasis on heavy industrialization."
    },
    {
        id: 65,
        category: "Indian Economy",
        question: "The largest source of revenue for the Government of India is?",
        options: ["Income Tax", "Corporation Tax", "GST", "Customs Duty"],
        correct: 2,
        explanation: "GST (Goods and Services Tax) is the largest source of tax revenue for the government, combining multiple indirect taxes into one unified tax."
    },
    {
        id: 66,
        category: "Indian Economy",
        question: "Who is known as the architect of economic reforms in India (1991)?",
        options: ["P.V. Narasimha Rao", "Manmohan Singh", "P. Chidambaram", "Montek Singh Ahluwalia"],
        correct: 1,
        explanation: "Dr. Manmohan Singh, as Finance Minister in 1991, introduced the historic economic reforms (LPG - Liberalization, Privatization, Globalization) in India."
    },
    {
        id: 67,
        category: "Indian Economy",
        question: "What is the base year of the current GDP series in India?",
        options: ["2004-05", "2010-11", "2011-12", "2015-16"],
        correct: 2,
        explanation: "The current GDP series in India uses 2011-12 as the base year, introduced in January 2015."
    },
    {
        id: 68,
        category: "Indian Economy",
        question: "Which Indian state has the highest per capita income?",
        options: ["Maharashtra", "Karnataka", "Goa", "Sikkim"],
        correct: 2,
        explanation: "Goa consistently has one of the highest per capita incomes among Indian states due to tourism, mining, and a smaller population."
    },
    {
        id: 69,
        category: "Indian Economy",
        question: "The National Food Security Act was passed in which year?",
        options: ["2011", "2012", "2013", "2014"],
        correct: 2,
        explanation: "The National Food Security Act was passed in 2013, aiming to provide subsidized food grains to approximately two-thirds of India's population."
    },
    {
        id: 70,
        category: "Indian Economy",
        question: "MUDRA Bank was launched to support?",
        options: ["Large industries", "Micro, small and medium enterprises", "Agricultural sector", "Export-import trade"],
        correct: 1,
        explanation: "MUDRA (Micro Units Development and Refinance Agency) Bank was launched in 2015 to provide funding to micro and small enterprises."
    },
    {
        id: 71,
        category: "Indian Economy",
        question: "The first bank to be nationalized in India was?",
        options: ["State Bank of India", "Punjab National Bank", "Reserve Bank of India", "Imperial Bank of India"],
        correct: 2,
        explanation: "The Reserve Bank of India was the first bank to be nationalized in 1949. The Imperial Bank of India was nationalized in 1955 and renamed State Bank of India."
    },
    {
        id: 72,
        category: "Indian Economy",
        question: "Which Indian crop is known as 'White Gold'?",
        options: ["Rice", "Wheat", "Cotton", "Sugarcane"],
        correct: 2,
        explanation: "Cotton is known as 'White Gold' due to its high economic value and importance in India's textile industry."
    },
    {
        id: 73,
        category: "Indian Economy",
        question: "Inflation is measured using which index in India?",
        options: ["WPI only", "CPI only", "Both WPI and CPI", "GDP Deflator"],
        correct: 2,
        explanation: "India uses both WPI (Wholesale Price Index) and CPI (Consumer Price Index) to measure inflation. RBI uses CPI for its inflation targeting framework."
    },
    {
        id: 74,
        category: "Indian Economy",
        question: "The Fiscal Responsibility and Budget Management (FRBM) Act was enacted in?",
        options: ["2000", "2003", "2005", "2008"],
        correct: 1,
        explanation: "The FRBM Act was enacted in 2003 to ensure fiscal discipline by setting targets for the government to reduce fiscal deficit."
    },
    {
        id: 75,
        category: "Indian Economy",
        question: "Which sector contributes the most to India's GDP?",
        options: ["Agriculture", "Industry", "Services", "Mining"],
        correct: 2,
        explanation: "The Services sector contributes the most to India's GDP, accounting for over 50% of the total GDP."
    },

    // ========================================
    // GENERAL SCIENCE (60+ questions)
    // ========================================
    {
        id: 76,
        category: "General Science",
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correct: 2,
        explanation: "Nitrogen makes up about 78% of the Earth's atmosphere, followed by Oxygen at about 21%."
    },
    {
        id: 77,
        category: "General Science",
        question: "The SI unit of electric current is?",
        options: ["Volt", "Watt", "Ohm", "Ampere"],
        correct: 3,
        explanation: "The SI unit of electric current is the Ampere (A), named after French physicist André-Marie Ampère."
    },
    {
        id: 78,
        category: "General Science",
        question: "Which vitamin is produced when human skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correct: 3,
        explanation: "Vitamin D is synthesized in the skin when exposed to ultraviolet B (UVB) radiation from sunlight."
    },
    {
        id: 79,
        category: "General Science",
        question: "Photosynthesis primarily takes place in which part of the plant?",
        options: ["Roots", "Stem", "Leaves", "Flowers"],
        correct: 2,
        explanation: "Photosynthesis primarily takes place in the leaves of plants, specifically in the chloroplasts containing chlorophyll."
    },
    {
        id: 80,
        category: "General Science",
        question: "Which element has the chemical symbol 'Fe'?",
        options: ["Fluorine", "Francium", "Iron", "Fermium"],
        correct: 2,
        explanation: "Fe is the chemical symbol for Iron, derived from its Latin name 'Ferrum'."
    },
    {
        id: 81,
        category: "General Science",
        question: "Newton's First Law of Motion is also known as?",
        options: ["Law of Acceleration", "Law of Inertia", "Law of Action-Reaction", "Law of Gravitation"],
        correct: 1,
        explanation: "Newton's First Law of Motion is also known as the Law of Inertia - an object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force."
    },
    {
        id: 82,
        category: "General Science",
        question: "The human body has how many pairs of chromosomes?",
        options: ["21", "22", "23", "24"],
        correct: 2,
        explanation: "The human body has 23 pairs of chromosomes (total 46), with 22 pairs of autosomes and 1 pair of sex chromosomes."
    },
    {
        id: 83,
        category: "General Science",
        question: "Which blood group is known as the 'Universal Donor'?",
        options: ["A", "B", "AB", "O"],
        correct: 3,
        explanation: "Blood group O negative is the universal donor as its red blood cells can be transfused to patients of any blood group."
    },
    {
        id: 84,
        category: "General Science",
        question: "What is the chemical formula of table salt?",
        options: ["NaOH", "NaCl", "KCl", "CaCl2"],
        correct: 1,
        explanation: "Table salt is Sodium Chloride with the chemical formula NaCl."
    },
    {
        id: 85,
        category: "General Science",
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Jupiter", "Mars", "Saturn"],
        correct: 2,
        explanation: "Mars is called the 'Red Planet' because of the iron oxide (rust) on its surface, giving it a reddish appearance."
    },
    {
        id: 86,
        category: "General Science",
        question: "The pH value of pure water is?",
        options: ["0", "5", "7", "14"],
        correct: 2,
        explanation: "Pure water has a pH value of 7, which is considered neutral - neither acidic nor basic."
    },
    {
        id: 87,
        category: "General Science",
        question: "Sound waves cannot travel through?",
        options: ["Air", "Water", "Steel", "Vacuum"],
        correct: 3,
        explanation: "Sound waves require a medium (solid, liquid, or gas) to travel. They cannot travel through a vacuum as there are no particles to vibrate."
    },
    {
        id: 88,
        category: "General Science",
        question: "Which organ in the human body produces insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Stomach"],
        correct: 2,
        explanation: "The pancreas produces insulin through its beta cells in the Islets of Langerhans. Insulin regulates blood sugar levels."
    },
    {
        id: 89,
        category: "General Science",
        question: "The speed of light is approximately?",
        options: ["3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁸ m/s", "3 × 10⁹ m/s"],
        correct: 2,
        explanation: "The speed of light in vacuum is approximately 3 × 10⁸ m/s (about 300,000 km/s)."
    },
    {
        id: 90,
        category: "General Science",
        question: "DNA stands for?",
        options: ["Di-Nucleic Acid", "Deoxyribonucleic Acid", "Di-Nitrogen Acid", "Deoxy-nitrogen Acid"],
        correct: 1,
        explanation: "DNA stands for Deoxyribonucleic Acid, which carries genetic instructions for the development and function of living organisms."
    },
    {
        id: 91,
        category: "General Science",
        question: "Which metal is liquid at room temperature?",
        options: ["Sodium", "Mercury", "Aluminum", "Lead"],
        correct: 1,
        explanation: "Mercury (Hg) is the only metal that is liquid at room temperature (melting point: -38.83°C)."
    },
    {
        id: 92,
        category: "General Science",
        question: "The process of converting a liquid to gas is called?",
        options: ["Condensation", "Evaporation", "Sublimation", "Fusion"],
        correct: 1,
        explanation: "Evaporation (or vaporization) is the process of converting a liquid to a gas. The reverse process is condensation."
    },
    {
        id: 93,
        category: "General Science",
        question: "Which part of the brain controls balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Hypothalamus"],
        correct: 1,
        explanation: "The Cerebellum, located at the back of the brain, is responsible for coordinating voluntary movements, balance, and posture."
    },
    {
        id: 94,
        category: "General Science",
        question: "Ozone layer depletion is mainly caused by?",
        options: ["Carbon dioxide", "Sulfur dioxide", "Chlorofluorocarbons (CFCs)", "Methane"],
        correct: 2,
        explanation: "Chlorofluorocarbons (CFCs), used in refrigerants and aerosols, are the main cause of ozone layer depletion."
    },
    {
        id: 95,
        category: "General Science",
        question: "The largest organ of the human body is?",
        options: ["Liver", "Heart", "Skin", "Lungs"],
        correct: 2,
        explanation: "The skin is the largest organ of the human body, covering about 1.5-2 square meters in adults."
    },

    // ========================================
    // ODISHA GK & HISTORY (60+ questions)
    // ========================================
    {
        id: 96,
        category: "Odisha GK",
        question: "When was the separate state of Odisha formed?",
        options: ["1 April 1935", "1 April 1936", "15 August 1947", "26 January 1950"],
        correct: 1,
        explanation: "Odisha was formed as a separate province on April 1, 1936, carved out of the Bihar and Orissa Province. This day is celebrated as Odisha Day (Utkal Divas)."
    },
    {
        id: 97,
        category: "Odisha GK",
        question: "The famous Konark Sun Temple was built by which king?",
        options: ["Kapilendra Deva", "Narasimha Deva I", "Anantavarman Chodaganga", "Kharavela"],
        correct: 1,
        explanation: "The Konark Sun Temple (Black Pagoda) was built by King Narasimha Deva I of the Eastern Ganga Dynasty around 1250 CE."
    },
    {
        id: 98,
        category: "Odisha GK",
        question: "Chilika Lake is famous for which migratory bird?",
        options: ["Flamingo", "Irrawaddy Dolphin", "White-bellied Sea Eagle", "All of these"],
        correct: 3,
        explanation: "Chilika Lake attracts various migratory birds including Flamingos, White-bellied Sea Eagles, and is home to the Irrawaddy Dolphin."
    },
    {
        id: 99,
        category: "Odisha GK",
        question: "The Jagannath Temple at Puri was built by which dynasty?",
        options: ["Bhaumakara Dynasty", "Somavamshi Dynasty", "Eastern Ganga Dynasty", "Gajapati Dynasty"],
        correct: 2,
        explanation: "The Jagannath Temple at Puri was built by Anantavarman Chodaganga of the Eastern Ganga Dynasty in the 12th century."
    },
    {
        id: 100,
        category: "Odisha GK",
        question: "Which river is the largest river of Odisha?",
        options: ["Brahmani", "Baitarani", "Mahanadi", "Subarnarekha"],
        correct: 2,
        explanation: "The Mahanadi is the largest and most important river of Odisha, originating from Chhattisgarh and flowing through Odisha into the Bay of Bengal."
    },
    {
        id: 101,
        category: "Odisha GK",
        question: "The Kalinga War fought by Ashoka took place near which modern city?",
        options: ["Bhubaneswar", "Puri", "Dhauli", "Cuttack"],
        correct: 2,
        explanation: "The Kalinga War (261 BCE) is believed to have taken place near Dhauli, on the banks of the Daya River near Bhubaneswar."
    },
    {
        id: 102,
        category: "Odisha GK",
        question: "Simlipal National Park in Odisha is famous for?",
        options: ["Royal Bengal Tiger", "One-horned Rhinoceros", "Asiatic Lion", "Snow Leopard"],
        correct: 0,
        explanation: "Simlipal National Park in Mayurbhanj district is a tiger reserve famous for the Royal Bengal Tiger, elephants, and melanistic tigers."
    },
    {
        id: 103,
        category: "Odisha GK",
        question: "The famous Rath Yatra festival is associated with which deity?",
        options: ["Lord Shiva", "Lord Vishnu", "Lord Jagannath", "Lord Ganesh"],
        correct: 2,
        explanation: "The Rath Yatra (Chariot Festival) in Puri is associated with Lord Jagannath, along with his siblings Balabhadra and Subhadra."
    },
    {
        id: 104,
        category: "Odisha GK",
        question: "Who is known as the 'Nightingale of Odisha'?",
        options: ["Akshaya Mohanty", "Sunanda Patnaik", "Nandini Satpathy", "Pratibha Ray"],
        correct: 0,
        explanation: "Akshaya Mohanty is fondly called the 'Nightingale of Odisha' for his outstanding contribution to Odia music and playback singing."
    },
    {
        id: 105,
        category: "Odisha GK",
        question: "The Lingaraj Temple in Bhubaneswar is dedicated to which deity?",
        options: ["Lord Vishnu", "Lord Shiva", "Lord Brahma", "Lord Jagannath"],
        correct: 1,
        explanation: "The Lingaraj Temple, the largest temple in Bhubaneswar, is dedicated to Lord Shiva (also called Harihara, a combined form of Shiva and Vishnu)."
    },
    {
        id: 106,
        category: "Odisha GK",
        question: "Which emperor's inscription is found at Dhauli?",
        options: ["Chandragupta Maurya", "Ashoka", "Samudragupta", "Kharavela"],
        correct: 1,
        explanation: "Emperor Ashoka's rock edicts are found at Dhauli, expressing his remorse after the Kalinga War and his embrace of Buddhism and non-violence."
    },
    {
        id: 107,
        category: "Odisha GK",
        question: "Odisha's first Odia novel 'Saudamini' was written by?",
        options: ["Fakir Mohan Senapati", "Radhanath Ray", "Umesh Chandra Sarkar", "Madhusudan Das"],
        correct: 0,
        explanation: "Though 'Saudamini' is considered an early Odia novel, Fakir Mohan Senapati is widely regarded as the father of modern Odia literature for his novel 'Chha Mana Atha Guntha'."
    },
    {
        id: 108,
        category: "Odisha GK",
        question: "The Bhitarkanika National Park is famous for?",
        options: ["Olive Ridley Turtles", "Saltwater Crocodiles", "White Tigers", "Indian Rhinoceros"],
        correct: 1,
        explanation: "Bhitarkanika National Park in Kendrapara district is famous for saltwater crocodiles and is one of the largest habitats for these reptiles in India."
    },
    {
        id: 109,
        category: "Odisha GK",
        question: "Which district of Odisha is known as the 'Rice Bowl of Odisha'?",
        options: ["Cuttack", "Puri", "Bargarh", "Sambalpur"],
        correct: 2,
        explanation: "Bargarh district is known as the 'Rice Bowl of Odisha' due to its extensive paddy cultivation and high rice production."
    },
    {
        id: 110,
        category: "Odisha GK",
        question: "King Kharavela belonged to which dynasty?",
        options: ["Maurya Dynasty", "Chedi Dynasty", "Ganga Dynasty", "Bhaumakara Dynasty"],
        correct: 1,
        explanation: "King Kharavela, one of the greatest rulers of ancient Odisha, belonged to the Chedi (Mahameghavahana) Dynasty of Kalinga."
    },
    {
        id: 111,
        category: "Odisha GK",
        question: "The Olive Ridley sea turtles come for mass nesting at which beach in Odisha?",
        options: ["Puri Beach", "Gahirmatha Beach", "Chandipur Beach", "Gopalpur Beach"],
        correct: 1,
        explanation: "Gahirmatha Beach in Kendrapara district is the world's largest nesting ground for Olive Ridley sea turtles."
    },
    {
        id: 112,
        category: "Odisha GK",
        question: "How many districts are there in Odisha?",
        options: ["28", "29", "30", "31"],
        correct: 2,
        explanation: "Odisha currently has 30 districts. The latest additions were carved out from existing districts over the years."
    },
    {
        id: 113,
        category: "Odisha GK",
        question: "The Hathigumpha inscription is associated with?",
        options: ["Ashoka", "Kharavela", "Yayati Keshari", "Anantavarman"],
        correct: 1,
        explanation: "The Hathigumpha (Elephant Cave) inscription near Bhubaneswar was inscribed by King Kharavela of the Chedi Dynasty and describes his achievements."
    },
    {
        id: 114,
        category: "Odisha GK",
        question: "Paradip Port is located at the mouth of which river?",
        options: ["Brahmani", "Baitarani", "Mahanadi", "Rushikulya"],
        correct: 2,
        explanation: "Paradip Port, the major port of Odisha, is located at the mouth of the Mahanadi River on the Bay of Bengal coast."
    },
    {
        id: 115,
        category: "Odisha GK",
        question: "Which tribal group forms the largest tribal population in Odisha?",
        options: ["Santal", "Kondh", "Gond", "Saora"],
        correct: 1,
        explanation: "The Kondh (also Kandha/Khond) tribe is the largest tribal group in Odisha, primarily found in Kandhamal, Koraput, and surrounding districts."
    },
    {
        id: 116,
        category: "Odisha GK",
        question: "The famous Dhauligiri Peace Pagoda was built with the help of?",
        options: ["China", "Japan", "Thailand", "Sri Lanka"],
        correct: 1,
        explanation: "The Shanti Stupa (Peace Pagoda) at Dhauli was built in 1972 by the Japan Buddha Sangha and the Kalinga Nippon Buddha Sangha."
    },
    {
        id: 117,
        category: "Odisha GK",
        question: "Which lake in Odisha is Asia's largest brackish water lagoon?",
        options: ["Ansupa Lake", "Chilika Lake", "Kanjia Lake", "Tampara Lake"],
        correct: 1,
        explanation: "Chilika Lake, spread over Puri, Khordha, and Ganjam districts, is Asia's largest brackish water lagoon."
    },
    {
        id: 118,
        category: "Odisha GK",
        question: "Odisha was renamed from 'Orissa' in which year?",
        options: ["2008", "2010", "2011", "2012"],
        correct: 2,
        explanation: "The state was officially renamed from 'Orissa' to 'Odisha' on November 4, 2011, along with renaming the language from 'Oriya' to 'Odia'."
    },

    // ========================================
    // ENVIRONMENT & ECOLOGY (40+ questions)
    // ========================================
    {
        id: 119,
        category: "Environment & Ecology",
        question: "Which greenhouse gas contributes most to global warming?",
        options: ["Methane", "Nitrous Oxide", "Carbon Dioxide", "Water Vapour"],
        correct: 2,
        explanation: "Carbon Dioxide (CO₂) is the primary greenhouse gas contributing to global warming due to its abundance from fossil fuel burning."
    },
    {
        id: 120,
        category: "Environment & Ecology",
        question: "The Kyoto Protocol is related to?",
        options: ["Biodiversity Conservation", "Ozone Depletion", "Climate Change", "Nuclear Disarmament"],
        correct: 2,
        explanation: "The Kyoto Protocol (1997) is an international treaty that commits state parties to reduce greenhouse gas emissions to combat climate change."
    },
    {
        id: 121,
        category: "Environment & Ecology",
        question: "Jim Corbett National Park, India's first national park, is located in?",
        options: ["Madhya Pradesh", "Uttarakhand", "Rajasthan", "Assam"],
        correct: 1,
        explanation: "Jim Corbett National Park, established in 1936 as Hailey National Park, is located in Uttarakhand and was India's first national park."
    },
    {
        id: 122,
        category: "Environment & Ecology",
        question: "The term 'Biodiversity' was coined by?",
        options: ["Edward Wilson", "Walter Rosen", "Charles Darwin", "Alexander von Humboldt"],
        correct: 1,
        explanation: "The term 'Biodiversity' was coined by Walter G. Rosen in 1985 during a planning meeting for the National Forum on Biological Diversity."
    },
    {
        id: 123,
        category: "Environment & Ecology",
        question: "Which of the following is not a renewable source of energy?",
        options: ["Solar Energy", "Wind Energy", "Natural Gas", "Tidal Energy"],
        correct: 2,
        explanation: "Natural gas is a non-renewable (fossil fuel) source of energy. Solar, wind, and tidal energy are renewable sources."
    },
    {
        id: 124,
        category: "Environment & Ecology",
        question: "The 'Chipko Movement' was associated with the conservation of?",
        options: ["Water bodies", "Forests/Trees", "Wildlife", "Soil"],
        correct: 1,
        explanation: "The Chipko Movement (1973) in Uttarakhand was a forest conservation movement where villagers hugged trees to prevent them from being cut down."
    },
    {
        id: 125,
        category: "Environment & Ecology",
        question: "Which is the most biodiverse region in India?",
        options: ["Thar Desert", "Western Ghats", "Indo-Gangetic Plain", "Deccan Plateau"],
        correct: 1,
        explanation: "The Western Ghats is one of the 36 global biodiversity hotspots and the most biodiverse region in India."
    },
    {
        id: 126,
        category: "Environment & Ecology",
        question: "Acid rain is mainly caused by?",
        options: ["CO₂ and CO", "SO₂ and NOₓ", "CFCs", "Methane"],
        correct: 1,
        explanation: "Acid rain is primarily caused by sulfur dioxide (SO₂) and nitrogen oxides (NOₓ) released from burning fossil fuels, which react with water vapor in the atmosphere."
    },
    {
        id: 127,
        category: "Environment & Ecology",
        question: "Project Tiger was launched in India in which year?",
        options: ["1970", "1972", "1973", "1975"],
        correct: 2,
        explanation: "Project Tiger was launched on April 1, 1973, by the Government of India to protect the Bengal Tiger and its habitats."
    },
    {
        id: 128,
        category: "Environment & Ecology",
        question: "The Ramsar Convention is related to the conservation of?",
        options: ["Forests", "Wetlands", "Deserts", "Mountains"],
        correct: 1,
        explanation: "The Ramsar Convention (1971) is an international treaty for the conservation and sustainable use of wetlands."
    },
    {
        id: 129,
        category: "Environment & Ecology",
        question: "Which layer of the atmosphere contains the ozone layer?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        correct: 1,
        explanation: "The ozone layer is located in the Stratosphere, approximately 15-35 km above the Earth's surface."
    },
    {
        id: 130,
        category: "Environment & Ecology",
        question: "World Environment Day is celebrated on?",
        options: ["March 22", "April 22", "June 5", "October 16"],
        correct: 2,
        explanation: "World Environment Day is celebrated every year on June 5, as designated by the United Nations since 1974."
    },
    {
        id: 131,
        category: "Environment & Ecology",
        question: "The National Green Tribunal (NGT) was established in which year?",
        options: ["2008", "2010", "2012", "2014"],
        correct: 1,
        explanation: "The National Green Tribunal was established on October 18, 2010, under the NGT Act 2010, to handle environmental disputes."
    },
    {
        id: 132,
        category: "Environment & Ecology",
        question: "Which animal is the national aquatic animal of India?",
        options: ["Whale Shark", "Ganges River Dolphin", "Olive Ridley Turtle", "Mugger Crocodile"],
        correct: 1,
        explanation: "The Ganges River Dolphin (Platanista gangetica) was declared the National Aquatic Animal of India in 2009."
    },

    // ========================================
    // CURRENT AFFAIRS & MISCELLANEOUS (50+ questions)
    // ========================================
    {
        id: 133,
        category: "Current Affairs",
        question: "India's space agency ISRO stands for?",
        options: ["Indian Space Research Organisation", "Indian Scientific Research Organisation", "Indian Satellite Research Organisation", "Indian Space Rocket Organisation"],
        correct: 0,
        explanation: "ISRO stands for Indian Space Research Organisation, headquartered in Bengaluru, responsible for India's space programme."
    },
    {
        id: 134,
        category: "Current Affairs",
        question: "The headquarters of ISRO is located in?",
        options: ["New Delhi", "Sriharikota", "Bengaluru", "Thiruvananthapuram"],
        correct: 2,
        explanation: "The headquarters of ISRO (Indian Space Research Organisation) is located in Bengaluru, Karnataka."
    },
    {
        id: 135,
        category: "Current Affairs",
        question: "Chandrayaan-3 successfully landed on the Moon in which year?",
        options: ["2021", "2022", "2023", "2024"],
        correct: 2,
        explanation: "Chandrayaan-3 successfully soft-landed on the Moon's south pole on August 23, 2023, making India the 4th country to achieve a lunar landing."
    },
    {
        id: 136,
        category: "Current Affairs",
        question: "Which country hosted the G20 Summit in 2023?",
        options: ["Indonesia", "India", "Brazil", "South Africa"],
        correct: 1,
        explanation: "India hosted the G20 Summit in September 2023 in New Delhi, under the theme 'One Earth, One Family, One Future'."
    },
    {
        id: 137,
        category: "Current Affairs",
        question: "The Aditya-L1 mission of ISRO is related to?",
        options: ["Mars observation", "Sun observation", "Moon exploration", "Asteroid study"],
        correct: 1,
        explanation: "Aditya-L1 is India's first dedicated solar observation mission, placed at the L1 Lagrange point to study the Sun."
    },
    {
        id: 138,
        category: "Current Affairs",
        question: "Digital India initiative was launched in which year?",
        options: ["2013", "2014", "2015", "2016"],
        correct: 2,
        explanation: "The Digital India initiative was launched on July 1, 2015, to transform India into a digitally empowered society."
    },
    {
        id: 139,
        category: "Current Affairs",
        question: "The Swachh Bharat Mission was launched on?",
        options: ["26 January 2014", "15 August 2014", "2 October 2014", "5 June 2014"],
        correct: 2,
        explanation: "The Swachh Bharat Mission was launched on October 2, 2014 (Gandhi Jayanti), to achieve universal sanitation coverage in India."
    },
    {
        id: 140,
        category: "Current Affairs",
        question: "India's first bullet train project is planned between?",
        options: ["Delhi-Kolkata", "Mumbai-Ahmedabad", "Chennai-Bengaluru", "Delhi-Mumbai"],
        correct: 1,
        explanation: "India's first bullet train (High-Speed Rail) project is planned between Mumbai and Ahmedabad, a 508 km corridor using Shinkansen technology."
    },
    {
        id: 141,
        category: "Current Affairs",
        question: "The Gaganyaan mission is India's first?",
        options: ["Mars mission", "Solar mission", "Crewed spaceflight mission", "Deep space mission"],
        correct: 2,
        explanation: "Gaganyaan is India's first crewed spaceflight programme by ISRO, aiming to send Indian astronauts (Gaganauts) to space."
    },
    {
        id: 142,
        category: "Current Affairs",
        question: "UPI (Unified Payments Interface) was developed by?",
        options: ["RBI", "NPCI", "SBI", "Government of India"],
        correct: 1,
        explanation: "UPI was developed by the National Payments Corporation of India (NPCI) and was launched on April 11, 2016."
    },
    {
        id: 143,
        category: "Current Affairs",
        question: "The Paris Agreement on climate change was adopted in which year?",
        options: ["2013", "2014", "2015", "2016"],
        correct: 2,
        explanation: "The Paris Agreement was adopted on December 12, 2015, at COP21, with the goal of limiting global warming to 1.5°C above pre-industrial levels."
    },
    {
        id: 144,
        category: "Current Affairs",
        question: "Which Indian state first implemented the 'One Nation One Ration Card' scheme?",
        options: ["Kerala", "Andhra Pradesh", "Telangana", "Madhya Pradesh"],
        correct: 1,
        explanation: "Andhra Pradesh and Telangana were among the first states to implement the inter-state portability of ration cards under this scheme."
    },
    {
        id: 145,
        category: "Current Affairs",
        question: "Jan Dhan Yojana was launched to promote?",
        options: ["Digital literacy", "Financial inclusion", "Skill development", "Rural employment"],
        correct: 1,
        explanation: "Pradhan Mantri Jan Dhan Yojana (PMJDY) was launched in 2014 to ensure financial inclusion by providing bank accounts to all households."
    },
    {
        id: 146,
        category: "Current Affairs",
        question: "The International Solar Alliance (ISA) was co-founded by India and?",
        options: ["USA", "Japan", "France", "Germany"],
        correct: 2,
        explanation: "The International Solar Alliance was co-founded by India and France in 2015 during COP21 in Paris."
    },
    {
        id: 147,
        category: "Current Affairs",
        question: "Make in India initiative was launched in which year?",
        options: ["2013", "2014", "2015", "2016"],
        correct: 1,
        explanation: "Make in India was launched on September 25, 2014, to encourage companies to manufacture their products in India."
    },
    {
        id: 148,
        category: "Indian History",
        question: "The Sepoy Mutiny of 1857 started from which place?",
        options: ["Delhi", "Meerut", "Lucknow", "Kanpur"],
        correct: 1,
        explanation: "The Sepoy Mutiny (First War of Indian Independence) started on May 10, 1857, in Meerut when Indian soldiers revolted against the British."
    },
    {
        id: 149,
        category: "Indian History",
        question: "Who founded the Arya Samaj?",
        options: ["Swami Vivekananda", "Raja Ram Mohan Roy", "Swami Dayanand Saraswati", "Ramakrishna Paramahamsa"],
        correct: 2,
        explanation: "Swami Dayanand Saraswati founded the Arya Samaj in 1875 in Bombay, promoting the return to Vedic teachings."
    },
    {
        id: 150,
        category: "Indian History",
        question: "The Simon Commission came to India in which year?",
        options: ["1925", "1927", "1928", "1930"],
        correct: 2,
        explanation: "The Simon Commission visited India in 1928 to study constitutional reform. It was boycotted by Indians as it had no Indian members."
    },
    {
        id: 151,
        category: "Indian Geography",
        question: "Which state in India receives the highest rainfall?",
        options: ["Kerala", "Meghalaya", "Assam", "Arunachal Pradesh"],
        correct: 1,
        explanation: "Meghalaya receives the highest rainfall in India. Mawsynram in Meghalaya is the wettest place on Earth with about 11,871 mm of annual rainfall."
    },
    {
        id: 152,
        category: "Indian Geography",
        question: "The Andaman and Nicobar Islands are separated by?",
        options: ["Palk Strait", "Ten Degree Channel", "Nine Degree Channel", "Duncan Passage"],
        correct: 1,
        explanation: "The Ten Degree Channel separates the Andaman Islands from the Nicobar Islands in the Bay of Bengal."
    },
    {
        id: 153,
        category: "Indian Polity",
        question: "The President of India can be impeached by?",
        options: ["Supreme Court", "Parliament", "Cabinet", "Vice President"],
        correct: 1,
        explanation: "Under Article 61, the President can be impeached by Parliament for violation of the Constitution through a resolution passed by both Houses."
    },
    {
        id: 154,
        category: "Indian Polity",
        question: "Which Article of the Constitution provides for the appointment of a Prime Minister?",
        options: ["Article 74", "Article 75", "Article 76", "Article 78"],
        correct: 1,
        explanation: "Article 75 deals with the appointment of the Prime Minister by the President and other provisions related to the Council of Ministers."
    },
    {
        id: 155,
        category: "Indian Economy",
        question: "What is the full form of SEBI?",
        options: ["Securities and Exchange Board of India", "Stock Exchange Bureau of India", "Securities and Equity Board of India", "Stock and Exchange Board of India"],
        correct: 0,
        explanation: "SEBI stands for Securities and Exchange Board of India, established in 1992 to regulate the securities market in India."
    },
    {
        id: 156,
        category: "Indian Economy",
        question: "The 'Green Revolution' in India is associated with?",
        options: ["Verghese Kurien", "M.S. Swaminathan", "Norman Borlaug", "Both B and C"],
        correct: 3,
        explanation: "The Green Revolution in India is associated with both M.S. Swaminathan (Father of Green Revolution in India) and Norman Borlaug (Father of Global Green Revolution)."
    },
    {
        id: 157,
        category: "General Science",
        question: "Which gas is used in fire extinguishers?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 2,
        explanation: "Carbon Dioxide (CO₂) is commonly used in fire extinguishers because it is heavier than air and can smother fires by displacing oxygen."
    },
    {
        id: 158,
        category: "General Science",
        question: "The chemical name of baking soda is?",
        options: ["Sodium Carbonate", "Sodium Bicarbonate", "Sodium Chloride", "Sodium Hydroxide"],
        correct: 1,
        explanation: "Baking soda is Sodium Bicarbonate (NaHCO₃), commonly used in cooking and as an antacid."
    },
    {
        id: 159,
        category: "General Science",
        question: "Which vitamin deficiency causes Night Blindness?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correct: 0,
        explanation: "Vitamin A deficiency causes Night Blindness (Nyctalopia). Vitamin A is essential for the formation of rhodopsin in the eyes."
    },
    {
        id: 160,
        category: "General Science",
        question: "The hardest natural substance on Earth is?",
        options: ["Gold", "Iron", "Platinum", "Diamond"],
        correct: 3,
        explanation: "Diamond, a form of carbon, is the hardest known natural substance, ranking 10 on the Mohs scale of hardness."
    },
    {
        id: 161,
        category: "Odisha GK",
        question: "The famous Sambalpur's Sambalpuri saree is known for which art form?",
        options: ["Batik", "Ikat (Bandha)", "Block Print", "Zari Work"],
        correct: 1,
        explanation: "Sambalpuri sarees are famous for the Ikat (Bandha) tie-dye technique, where yarns are dyed before weaving to create patterns."
    },
    {
        id: 162,
        category: "Odisha GK",
        question: "Which dance form of Odisha is a classical Indian dance?",
        options: ["Chhau", "Odissi", "Gotipua", "Dalkhai"],
        correct: 1,
        explanation: "Odissi is a classical Indian dance form originating from Odisha, one of the eight recognized classical dances of India."
    },
    {
        id: 163,
        category: "Odisha GK",
        question: "Tikarpada Wildlife Sanctuary in Odisha is famous for?",
        options: ["Gharial Crocodiles", "Mugger Crocodiles", "Both A and B", "Olive Ridley Turtles"],
        correct: 0,
        explanation: "Tikarpada Wildlife Sanctuary on the banks of Mahanadi in Angul district is known for Gharial crocodile breeding and rehabilitation."
    },
    {
        id: 164,
        category: "Odisha GK",
        question: "The first Chief Minister of Odisha was?",
        options: ["Harekrushna Mahtab", "Nabakrushna Choudhuri", "Biju Patnaik", "Biren Mitra"],
        correct: 0,
        explanation: "Harekrushna Mahtab served as the first Chief Minister of Odisha from 1946 to 1950."
    },
    {
        id: 165,
        category: "Odisha GK",
        question: "Which festival is unique to Odisha and celebrated for 21 days?",
        options: ["Durga Puja", "Rath Yatra", "Raja Festival", "Makar Sankranti"],
        correct: 1,
        explanation: "The Rath Yatra in Puri is a grand festival celebrated over 21 days, including the return journey (Bahuda Yatra) of the deities."
    },
    {
        id: 166,
        category: "Indian History",
        question: "The Swaraj Party was founded by?",
        options: ["Mahatma Gandhi and Nehru", "C.R. Das and Motilal Nehru", "Bal Gangadhar Tilak and Gokhale", "Subhas Bose and S.C. Das"],
        correct: 1,
        explanation: "The Swaraj Party was founded in 1923 by C.R. Das and Motilal Nehru within the Indian National Congress to enter the legislature and oppose British policies."
    },
    {
        id: 167,
        category: "Indian History",
        question: "The Treaty of Allahabad (1765) was signed between the British and?",
        options: ["Tipu Sultan", "Shah Alam II", "Siraj-ud-Daulah", "Mir Qasim"],
        correct: 1,
        explanation: "The Treaty of Allahabad (1765) was signed between the British East India Company and Mughal Emperor Shah Alam II, granting the Diwani of Bengal to the British."
    },
    {
        id: 168,
        category: "Indian Geography",
        question: "The Kaziranga National Park is famous for?",
        options: ["Bengal Tiger", "One-Horned Rhinoceros", "Asiatic Lion", "Snow Leopard"],
        correct: 1,
        explanation: "Kaziranga National Park in Assam is world-famous for the Indian One-Horned Rhinoceros, hosting two-thirds of the world's population."
    },
    {
        id: 169,
        category: "Indian Geography",
        question: "Which Indian state shares borders with the maximum number of other Indian states?",
        options: ["Madhya Pradesh", "Uttar Pradesh", "Assam", "Maharashtra"],
        correct: 1,
        explanation: "Uttar Pradesh shares its borders with 9 Indian states: Uttarakhand, Himachal Pradesh, Haryana, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, Bihar, and Delhi NCT."
    },
    {
        id: 170,
        category: "Indian Polity",
        question: "The Election Commission of India is a?",
        options: ["Constitutional body", "Statutory body", "Executive body", "Judicial body"],
        correct: 0,
        explanation: "The Election Commission of India is a Constitutional body established under Article 324 of the Constitution."
    },
    {
        id: 171,
        category: "Indian Polity",
        question: "The Indian Constitution originally had how many Articles?",
        options: ["385", "390", "395", "400"],
        correct: 2,
        explanation: "The original Indian Constitution had 395 Articles in 22 Parts and 8 Schedules when it was adopted on November 26, 1949."
    },
    {
        id: 172,
        category: "Indian Economy",
        question: "Which state is the largest producer of rice in India?",
        options: ["Punjab", "Uttar Pradesh", "West Bengal", "Andhra Pradesh"],
        correct: 2,
        explanation: "West Bengal is the largest producer of rice in India, followed by Uttar Pradesh and Punjab."
    },
    {
        id: 173,
        category: "Indian Economy",
        question: "Repo Rate is the rate at which?",
        options: ["Banks lend to RBI", "RBI lends to banks", "Banks lend to customers", "Government borrows from RBI"],
        correct: 1,
        explanation: "Repo Rate is the rate at which the RBI lends short-term money to commercial banks against government securities."
    },
    {
        id: 174,
        category: "General Science",
        question: "Which scientist discovered Penicillin?",
        options: ["Louis Pasteur", "Alexander Fleming", "Edward Jenner", "Robert Koch"],
        correct: 1,
        explanation: "Sir Alexander Fleming discovered Penicillin in 1928, which became the first widely used antibiotic."
    },
    {
        id: 175,
        category: "General Science",
        question: "The smallest unit of an element is?",
        options: ["Molecule", "Atom", "Electron", "Cell"],
        correct: 1,
        explanation: "An atom is the smallest unit of an element that retains the chemical properties of that element."
    },
    {
        id: 176,
        category: "Environment & Ecology",
        question: "The 'Silent Valley' in Kerala is known for?",
        options: ["Tea plantations", "Tropical rainforests", "Hill stations", "Coffee production"],
        correct: 1,
        explanation: "Silent Valley National Park in Kerala contains some of the last remaining tropical evergreen forests in India and is known for its rich biodiversity."
    },
    {
        id: 177,
        category: "Environment & Ecology",
        question: "Which biosphere reserve in India was the first to be included in the UNESCO World Network?",
        options: ["Nilgiri", "Nanda Devi", "Sundarbans", "Gulf of Mannar"],
        correct: 0,
        explanation: "The Nilgiri Biosphere Reserve was the first Indian biosphere reserve to be included in the UNESCO World Network of Biosphere Reserves in 2000."
    },
    {
        id: 178,
        category: "Odisha GK",
        question: "Nandankanan Zoological Park is located near which city?",
        options: ["Cuttack", "Bhubaneswar", "Sambalpur", "Rourkela"],
        correct: 1,
        explanation: "Nandankanan Zoological Park is located near Bhubaneswar and is famous for its white tigers and open-air enclosures."
    },
    {
        id: 179,
        category: "Odisha GK",
        question: "The Silver City of Odisha is?",
        options: ["Puri", "Bhubaneswar", "Cuttack", "Sambalpur"],
        correct: 2,
        explanation: "Cuttack is known as the 'Silver City' of Odisha for its famous silver filigree work (Tarakasi)."
    },
    {
        id: 180,
        category: "Odisha GK",
        question: "Udaygiri and Khandagiri caves are located near?",
        options: ["Puri", "Bhubaneswar", "Cuttack", "Konark"],
        correct: 1,
        explanation: "Udaygiri and Khandagiri caves are located near Bhubaneswar and were carved out during the reign of King Kharavela for Jain monks."
    },
    {
        id: 181,
        category: "Indian History",
        question: "Who was the last Mughal Emperor?",
        options: ["Aurangzeb", "Shah Alam II", "Bahadur Shah Zafar", "Akbar II"],
        correct: 2,
        explanation: "Bahadur Shah Zafar (1837-1857) was the last Mughal Emperor. He was exiled to Rangoon by the British after the 1857 revolt."
    },
    {
        id: 182,
        category: "Indian History",
        question: "The Bhakti Movement in India was initiated by?",
        options: ["Adi Shankaracharya", "Ramanuja", "Kabir", "Guru Nanak"],
        correct: 1,
        explanation: "While the Bhakti Movement had roots in the south with Alvars and Nayanars, Ramanuja (11th-12th century) is credited with giving it a strong philosophical foundation."
    },
    {
        id: 183,
        category: "Indian Geography",
        question: "Which river forms the boundary between India and Pakistan in Punjab?",
        options: ["Sutlej", "Ravi", "Chenab", "Indus"],
        correct: 1,
        explanation: "The Ravi River forms a significant part of the India-Pakistan boundary in the Punjab region."
    },
    {
        id: 184,
        category: "Indian Geography",
        question: "The Nilgiri Hills are located at the junction of?",
        options: ["Eastern Ghats and Western Ghats", "Vindhya and Satpura", "Himalayas and Shivalik", "Aravalli and Vindhya"],
        correct: 0,
        explanation: "The Nilgiri Hills are located at the junction of the Eastern Ghats and Western Ghats in southern India."
    },
    {
        id: 185,
        category: "Indian Polity",
        question: "Which amendment to the Constitution lowered the voting age from 21 to 18?",
        options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
        correct: 2,
        explanation: "The 61st Constitutional Amendment Act, 1988, lowered the voting age from 21 years to 18 years."
    },
    {
        id: 186,
        category: "Indian Economy",
        question: "Pradhan Mantri Fasal Bima Yojana is related to?",
        options: ["Health insurance", "Life insurance", "Crop insurance", "Vehicle insurance"],
        correct: 2,
        explanation: "Pradhan Mantri Fasal Bima Yojana (PMFBY), launched in 2016, is a crop insurance scheme to protect farmers against crop losses."
    },
    {
        id: 187,
        category: "General Science",
        question: "Which disease is caused by the deficiency of Iron?",
        options: ["Goitre", "Scurvy", "Anaemia", "Rickets"],
        correct: 2,
        explanation: "Iron deficiency causes Anaemia, a condition where the blood doesn't have enough healthy red blood cells to carry oxygen to tissues."
    },
    {
        id: 188,
        category: "General Science",
        question: "Which type of mirror is used in headlights of vehicles?",
        options: ["Plane mirror", "Convex mirror", "Concave mirror", "Cylindrical mirror"],
        correct: 2,
        explanation: "Concave mirrors are used in vehicle headlights because they produce a powerful parallel beam of light when the bulb is placed at the focus."
    },
    {
        id: 189,
        category: "Environment & Ecology",
        question: "The Sundarbans mangrove forest is shared between India and?",
        options: ["Myanmar", "Bangladesh", "Sri Lanka", "Nepal"],
        correct: 1,
        explanation: "The Sundarbans, the world's largest mangrove forest, is shared between India (West Bengal) and Bangladesh."
    },
    {
        id: 190,
        category: "Odisha GK",
        question: "The Paika Rebellion of 1817 took place in which region?",
        options: ["Ganjam", "Khurda", "Puri", "Cuttack"],
        correct: 1,
        explanation: "The Paika Rebellion (1817) was a armed rebellion against British rule by the Paikas (warrior class) of Khurda, led by Bakshi Jagabandhu."
    },
    {
        id: 191,
        category: "Odisha GK",
        question: "Which mineral is Odisha the largest producer of in India?",
        options: ["Iron Ore", "Coal", "Chromite", "Bauxite"],
        correct: 2,
        explanation: "Odisha is the largest producer of Chromite in India, with major deposits in Sukinda Valley of Jajpur district."
    },
    {
        id: 192,
        category: "Odisha GK",
        question: "The Odisha State Museum is located in?",
        options: ["Cuttack", "Bhubaneswar", "Puri", "Sambalpur"],
        correct: 1,
        explanation: "The Odisha State Museum is located in Bhubaneswar, housing a rich collection of archaeological artifacts, manuscripts, and natural history specimens."
    },
    {
        id: 193,
        category: "Indian History",
        question: "The Ryotwari system of land revenue was introduced in?",
        options: ["Bengal", "Bombay and Madras Presidencies", "Punjab", "Central Provinces"],
        correct: 1,
        explanation: "The Ryotwari system was introduced in the Bombay and Madras Presidencies by Thomas Munro and Captain Alexander Read, where revenue was collected directly from cultivators."
    },
    {
        id: 194,
        category: "Indian Geography",
        question: "Which is the deepest river valley in India?",
        options: ["Narmada Valley", "Brahmaputra Valley", "Indus Valley", "Godavari Valley"],
        correct: 1,
        explanation: "The Brahmaputra Valley in Assam is one of the deepest river valleys in India, formed between the Eastern Himalayas and the Shillong Plateau."
    },
    {
        id: 195,
        category: "Indian Polity",
        question: "The concept of Public Interest Litigation (PIL) was introduced by?",
        options: ["Justice P.N. Bhagwati", "Justice V.R. Krishna Iyer", "Both A and B", "Justice Y.V. Chandrachud"],
        correct: 2,
        explanation: "The concept of PIL in India was pioneered by both Justice P.N. Bhagwati and Justice V.R. Krishna Iyer in the 1980s to make justice accessible to all."
    },
    {
        id: 196,
        category: "Indian Economy",
        question: "NABARD stands for?",
        options: ["National Bank for Agriculture and Rural Development", "National Board for Agriculture and Rural Development", "National Bureau of Agricultural Research and Development", "None of the above"],
        correct: 0,
        explanation: "NABARD stands for National Bank for Agriculture and Rural Development, established in 1982 to promote rural development."
    },
    {
        id: 197,
        category: "General Science",
        question: "Which gas is responsible for the blue color of the sky?",
        options: ["Oxygen", "Nitrogen", "Ozone", "None - it's due to scattering of light"],
        correct: 3,
        explanation: "The blue color of the sky is due to Rayleigh scattering of sunlight by the atmosphere. Shorter blue wavelengths are scattered more than longer red wavelengths."
    },
    {
        id: 198,
        category: "Environment & Ecology",
        question: "The concept of 'Carbon Footprint' measures?",
        options: ["Amount of oxygen consumed", "Total greenhouse gas emissions", "Amount of carbon in soil", "Forest coverage area"],
        correct: 1,
        explanation: "Carbon Footprint measures the total amount of greenhouse gases (primarily CO₂) generated by our actions, usually expressed in tonnes of CO₂ equivalent."
    },
    {
        id: 199,
        category: "Odisha GK",
        question: "The famous Chhau dance form originated from which part of Odisha?",
        options: ["Koraput", "Sambalpur", "Mayurbhanj", "Kalahandi"],
        correct: 2,
        explanation: "Chhau dance originated from Mayurbhanj district of Odisha. Mayurbhanj Chhau is performed without masks, unlike the Purulia and Seraikella variants."
    },
    {
        id: 200,
        category: "Current Affairs",
        question: "India's first indigenous aircraft carrier is named?",
        options: ["INS Vikrant", "INS Vikramaditya", "INS Vishal", "INS Viraat"],
        correct: 0,
        explanation: "INS Vikrant, India's first indigenous aircraft carrier, was commissioned in September 2022 at Cochin Shipyard."
    },
    {
        id: 201,
        category: "Indian History",
        question: "Who was the author of 'Discovery of India'?",
        options: ["Mahatma Gandhi", "Rabindranath Tagore", "Jawaharlal Nehru", "S. Radhakrishnan"],
        correct: 2,
        explanation: "Jawaharlal Nehru wrote 'The Discovery of India' during his imprisonment at Ahmednagar Fort in 1944."
    },
    {
        id: 202,
        category: "Indian History",
        question: "The Subsidiary Alliance was introduced by which Governor General?",
        options: ["Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie", "Lord Hastings"],
        correct: 1,
        explanation: "Lord Wellesley introduced the Subsidiary Alliance system in 1798, making Indian rulers dependent on the British for military protection."
    },
    {
        id: 203,
        category: "Indian Geography",
        question: "Which is the saltiest lake in India?",
        options: ["Sambhar Lake", "Chilika Lake", "Dal Lake", "Pangong Lake"],
        correct: 0,
        explanation: "Sambhar Lake in Rajasthan is the largest inland saltwater lake in India and also the saltiest, used for salt production."
    },
    {
        id: 204,
        category: "Indian Polity",
        question: "Article 370, which gave special status to Jammu & Kashmir, was abrogated in?",
        options: ["2017", "2018", "2019", "2020"],
        correct: 2,
        explanation: "Article 370 was abrogated on August 5, 2019, removing the special autonomous status of Jammu & Kashmir."
    },
    {
        id: 205,
        category: "Indian Economy",
        question: "The concept of 'Minimum Support Price' (MSP) is related to?",
        options: ["Industrial products", "Agricultural produce", "Imported goods", "Service sector"],
        correct: 1,
        explanation: "MSP is the minimum price guaranteed by the government for purchase of agricultural produce to protect farmers from price crashes."
    },
    {
        id: 206,
        category: "General Science",
        question: "Which hormone is known as the 'Emergency Hormone'?",
        options: ["Insulin", "Thyroxine", "Adrenaline", "Growth Hormone"],
        correct: 2,
        explanation: "Adrenaline (Epinephrine) is called the 'Emergency Hormone' because it is released in response to stress and prepares the body for 'fight or flight'."
    },
    {
        id: 207,
        category: "General Science",
        question: "The main source of energy for the Sun is?",
        options: ["Chemical reaction", "Nuclear fission", "Nuclear fusion", "Radioactive decay"],
        correct: 2,
        explanation: "Nuclear fusion is the main source of the Sun's energy, where hydrogen atoms fuse to form helium, releasing enormous amounts of energy."
    },
    {
        id: 208,
        category: "Odisha GK",
        question: "The Mahanadi River originates from?",
        options: ["Western Ghats", "Sihawa Hills of Chhattisgarh", "Eastern Ghats", "Vindhya Range"],
        correct: 1,
        explanation: "The Mahanadi River originates from Sihawa Hills near Raipur in Chhattisgarh and flows through Odisha to the Bay of Bengal."
    },
    {
        id: 209,
        category: "Odisha GK",
        question: "Which poet is known as the 'Father of Odia Literature'?",
        options: ["Jayadeva", "Sarala Das", "Fakir Mohan Senapati", "Radhanath Ray"],
        correct: 1,
        explanation: "Sarala Das (also Sarala Dasa) is known as the 'Father of Odia Literature' for writing the Odia Mahabharata (Sarala Mahabharata)."
    },
    {
        id: 210,
        category: "Current Affairs",
        question: "The Aadhaar card is issued by?",
        options: ["RBI", "UIDAI", "Election Commission", "Ministry of Home Affairs"],
        correct: 1,
        explanation: "The Aadhaar card is issued by UIDAI (Unique Identification Authority of India), providing a 12-digit unique identity number to residents."
    },
    {
        id: 211,
        category: "Indian History",
        question: "The Cripps Mission came to India in which year?",
        options: ["1940", "1942", "1944", "1946"],
        correct: 1,
        explanation: "The Cripps Mission came to India in 1942 with proposals for India's independence after World War II, but was rejected by the Congress and the Muslim League."
    },
    {
        id: 212,
        category: "Indian Geography",
        question: "Which waterfall is the highest waterfall in India?",
        options: ["Jog Falls", "Dudhsagar Falls", "Kunchikal Falls", "Nohkalikai Falls"],
        correct: 2,
        explanation: "Kunchikal Falls in Karnataka, with a height of 455 meters, is the highest waterfall in India."
    },
    {
        id: 213,
        category: "Indian Polity",
        question: "Inter-State Council was established under which Article?",
        options: ["Article 261", "Article 262", "Article 263", "Article 265"],
        correct: 2,
        explanation: "The Inter-State Council was established under Article 263 of the Constitution to investigate and advise on disputes between states."
    },
    {
        id: 214,
        category: "Indian Economy",
        question: "Demonetization of ₹500 and ₹1000 notes was announced on?",
        options: ["8 November 2015", "8 November 2016", "8 November 2017", "8 November 2018"],
        correct: 1,
        explanation: "Demonetization was announced on November 8, 2016, by Prime Minister Narendra Modi, invalidating ₹500 and ₹1000 banknotes."
    },
    {
        id: 215,
        category: "General Science",
        question: "Washing soda is chemically?",
        options: ["Sodium Chloride", "Sodium Carbonate", "Sodium Bicarbonate", "Calcium Carbonate"],
        correct: 1,
        explanation: "Washing soda is Sodium Carbonate (Na₂CO₃), used in cleaning and water softening."
    },
    {
        id: 216,
        category: "Odisha GK",
        question: "Which port city of Odisha was historically known as 'Dantapura'?",
        options: ["Paradip", "Gopalpur", "Puri", "Palur"],
        correct: 3,
        explanation: "Palur (near modern Ganjam) is identified with ancient Dantapura, the capital of the Kalinga kingdom mentioned in ancient texts."
    },
    {
        id: 217,
        category: "Environment & Ecology",
        question: "Which is the first biosphere reserve of India?",
        options: ["Sundarbans", "Nilgiri", "Nanda Devi", "Gulf of Mannar"],
        correct: 1,
        explanation: "Nilgiri Biosphere Reserve, established in 1986, was the first biosphere reserve in India."
    },
    {
        id: 218,
        category: "Current Affairs",
        question: "The National Education Policy 2020 replaced?",
        options: ["NPE 1968", "NPE 1986", "NPE 1992", "NPE 2005"],
        correct: 1,
        explanation: "The National Education Policy 2020 replaced the National Policy on Education 1986, introducing major reforms including the 5+3+3+4 structure."
    },
    {
        id: 219,
        category: "Indian History",
        question: "The Home Rule Movement was started by?",
        options: ["Mahatma Gandhi", "Annie Besant and Bal Gangadhar Tilak", "Subhas Chandra Bose", "Lala Lajpat Rai"],
        correct: 1,
        explanation: "The Home Rule Movement (1916) was started by Bal Gangadhar Tilak in Pune and Annie Besant in Madras, demanding self-governance for India."
    },
    {
        id: 220,
        category: "Odisha GK",
        question: "Madhusudan Das is known as?",
        options: ["Utkal Mani", "Utkal Gaurav", "Utkal Keshari", "Utkal Ratna"],
        correct: 0,
        explanation: "Madhusudan Das is fondly called 'Utkal Mani' (Gem of Utkal). He was the first Odia to get a graduate and law degree and worked for a separate Odisha province."
    },
    {
        id: 221,
        category: "Indian History",
        question: "Who led the Revolt of 1857 in Lucknow?",
        options: ["Nana Sahib", "Tatya Tope", "Begum Hazrat Mahal", "Rani Laxmibai"],
        correct: 2,
        explanation: "Begum Hazrat Mahal led the revolt of 1857 in Lucknow (Awadh) and declared her son Birjis Qadr as the ruler."
    },
    {
        id: 222,
        category: "Indian Geography",
        question: "The Aravalli Range is the oldest mountain range in India. Which is its highest peak?",
        options: ["Guru Shikhar", "Doda Betta", "Anai Mudi", "Mahendragiri"],
        correct: 0,
        explanation: "Guru Shikhar (1,722 m) in the Aravalli Range near Mount Abu, Rajasthan, is the highest peak of the Aravallis."
    },
    {
        id: 223,
        category: "Indian Polity",
        question: "The Right to Information Act was enacted in?",
        options: ["2003", "2004", "2005", "2006"],
        correct: 2,
        explanation: "The Right to Information Act was enacted in 2005, empowering citizens to access information from public authorities to promote transparency."
    },
    {
        id: 224,
        category: "Indian Economy",
        question: "Which is the oldest stock exchange in India?",
        options: ["National Stock Exchange", "Bombay Stock Exchange", "Calcutta Stock Exchange", "Delhi Stock Exchange"],
        correct: 1,
        explanation: "The Bombay Stock Exchange (BSE), established in 1875, is the oldest stock exchange in India and Asia."
    },
    {
        id: 225,
        category: "General Science",
        question: "The process of conversion of sugar into alcohol is called?",
        options: ["Combustion", "Fermentation", "Distillation", "Oxidation"],
        correct: 1,
        explanation: "Fermentation is the process of converting sugar into alcohol and carbon dioxide using yeast or bacteria."
    },
    {
        id: 226,
        category: "Odisha GK",
        question: "Which Odia author won the Jnanpith Award?",
        options: ["Gopinath Mohanty", "Pratibha Ray", "Manoj Das", "Both A and B"],
        correct: 3,
        explanation: "Both Gopinath Mohanty (1973) and Pratibha Ray (2011) won the Jnanpith Award for their contributions to Odia literature."
    },
    {
        id: 227,
        category: "Environment & Ecology",
        question: "What percentage of India's geographical area should be under forest according to National Forest Policy?",
        options: ["23%", "25%", "33%", "40%"],
        correct: 2,
        explanation: "The National Forest Policy 1988 aims to have 33% of India's geographical area under forest cover (67% for hilly regions)."
    },
    {
        id: 228,
        category: "Current Affairs",
        question: "Startup India initiative was launched in?",
        options: ["2014", "2015", "2016", "2017"],
        correct: 2,
        explanation: "Startup India was launched on January 16, 2016, to build a strong ecosystem for nurturing innovation and startups in India."
    },
    {
        id: 229,
        category: "Indian History",
        question: "The Morley-Minto Reforms of 1909 introduced?",
        options: ["Dyarchy", "Separate electorate for Muslims", "Universal suffrage", "Provincial autonomy"],
        correct: 1,
        explanation: "The Morley-Minto Reforms (Indian Councils Act, 1909) introduced separate electorate for Muslims for the first time."
    },
    {
        id: 230,
        category: "Indian Geography",
        question: "The 'Konkan Coast' stretches between?",
        options: ["Mumbai to Goa", "Goa to Mangalore", "Mumbai to Kanyakumari", "Gujarat to Goa"],
        correct: 0,
        explanation: "The Konkan Coast stretches from Mumbai (Maharashtra) to Goa along the western coast of India."
    },
    {
        id: 231,
        category: "Odisha GK",
        question: "Rourkela Steel Plant was established with the help of?",
        options: ["Russia", "Germany", "Japan", "UK"],
        correct: 1,
        explanation: "Rourkela Steel Plant in Odisha was established in 1959 with German collaboration, making it one of India's first integrated steel plants."
    },
    {
        id: 232,
        category: "Indian Polity",
        question: "The idea of Fundamental Duties in the Indian Constitution is inspired by?",
        options: ["USA Constitution", "USSR Constitution", "French Constitution", "Japanese Constitution"],
        correct: 1,
        explanation: "The concept of Fundamental Duties was inspired by the Constitution of the former USSR (Soviet Union)."
    },
    {
        id: 233,
        category: "Indian Economy",
        question: "White Revolution in India is related to?",
        options: ["Rice production", "Milk production", "Cotton production", "Egg production"],
        correct: 1,
        explanation: "The White Revolution (Operation Flood) was related to milk production and was spearheaded by Dr. Verghese Kurien."
    },
    {
        id: 234,
        category: "General Science",
        question: "Which lens is used to correct Myopia (short-sightedness)?",
        options: ["Convex lens", "Concave lens", "Bifocal lens", "Cylindrical lens"],
        correct: 1,
        explanation: "A concave (diverging) lens is used to correct Myopia (short-sightedness) by diverging light rays before they enter the eye."
    },
    {
        id: 235,
        category: "Environment & Ecology",
        question: "The Montreal Protocol is related to protection of?",
        options: ["Biodiversity", "Wetlands", "Ozone Layer", "Marine life"],
        correct: 2,
        explanation: "The Montreal Protocol (1987) is an international treaty designed to protect the ozone layer by phasing out substances that deplete it."
    },
    {
        id: 236,
        category: "Indian History",
        question: "The Government of India Act 1935 introduced?",
        options: ["Dyarchy at the Centre", "Provincial Autonomy", "Fundamental Rights", "Directive Principles"],
        correct: 1,
        explanation: "The Government of India Act 1935 introduced Provincial Autonomy, an All-India Federation (which never came into being), and a Federal Court."
    },
    {
        id: 237,
        category: "Indian Geography",
        question: "Which is the largest delta in the world?",
        options: ["Nile Delta", "Amazon Delta", "Ganges-Brahmaputra Delta", "Mekong Delta"],
        correct: 2,
        explanation: "The Ganges-Brahmaputra Delta (Sundarbans Delta) is the largest delta in the world, covering about 100,000 sq km across India and Bangladesh."
    },
    {
        id: 238,
        category: "Odisha GK",
        question: "The Puri Jagannath Temple is built in which architectural style?",
        options: ["Dravidian Style", "Nagara Style", "Vesara Style", "Indo-Islamic Style"],
        correct: 1,
        explanation: "The Puri Jagannath Temple is built in the Nagara (North Indian) architectural style, specifically the Kalinga school of architecture."
    },
    {
        id: 239,
        category: "Indian Polity",
        question: "Who has the power to declare Financial Emergency in India?",
        options: ["Prime Minister", "President", "Finance Minister", "RBI Governor"],
        correct: 1,
        explanation: "Under Article 360, the President has the power to declare Financial Emergency if satisfied that the financial stability of India is threatened."
    },
    {
        id: 240,
        category: "Indian Economy",
        question: "Census in India is conducted after every?",
        options: ["5 years", "8 years", "10 years", "12 years"],
        correct: 2,
        explanation: "Census in India is conducted every 10 years. The first census was in 1881 and the most recent completed was in 2011."
    },
    {
        id: 241,
        category: "General Science",
        question: "The powerhouse of the cell is?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
        correct: 2,
        explanation: "Mitochondria is called the 'Powerhouse of the Cell' because it produces energy (ATP) through cellular respiration."
    },
    {
        id: 242,
        category: "Odisha GK",
        question: "Baliyatra festival of Odisha celebrates?",
        options: ["Harvest season", "Ancient maritime trade with Southeast Asia", "Spring season", "Victory in war"],
        correct: 1,
        explanation: "Baliyatra in Cuttack celebrates the ancient maritime trade of Odisha (Kalinga) with Southeast Asian countries like Java, Sumatra, Bali, and Borneo."
    },
    {
        id: 243,
        category: "Current Affairs",
        question: "Ayushman Bharat scheme provides health coverage of?",
        options: ["₹1 lakh per family", "₹3 lakh per family", "₹5 lakh per family", "₹10 lakh per family"],
        correct: 2,
        explanation: "Ayushman Bharat - PM Jan Arogya Yojana provides health insurance coverage of ₹5 lakh per family per year for secondary and tertiary hospitalization."
    },
    {
        id: 244,
        category: "Indian History",
        question: "The Round Table Conferences were held in?",
        options: ["Delhi", "Calcutta", "London", "Bombay"],
        correct: 2,
        explanation: "Three Round Table Conferences were held in London between 1930-1932 to discuss constitutional reforms in India."
    },
    {
        id: 245,
        category: "Indian Geography",
        question: "The Shivalik Hills are part of?",
        options: ["Greater Himalayas", "Lesser Himalayas", "Outer Himalayas", "Trans Himalayas"],
        correct: 2,
        explanation: "The Shivalik Hills form the Outer Himalayas, the southernmost and youngest mountain chain of the Himalayan system."
    },
    {
        id: 246,
        category: "Odisha GK",
        question: "The Aska inscriptions of Ashoka are found in which district of Odisha?",
        options: ["Puri", "Ganjam", "Khordha", "Koraput"],
        correct: 1,
        explanation: "The Aska rock edicts (also known as Jaugada inscriptions) of Emperor Ashoka are found near Aska in Ganjam district of Odisha."
    },
    {
        id: 247,
        category: "Indian Polity",
        question: "The State Human Rights Commission is headed by?",
        options: ["A retired Supreme Court judge", "A retired High Court Chief Justice", "Governor of the state", "Chief Minister"],
        correct: 1,
        explanation: "The State Human Rights Commission is headed by a retired Chief Justice of a High Court."
    },
    {
        id: 248,
        category: "Indian Economy",
        question: "AMUL is related to which revolution?",
        options: ["Green Revolution", "Blue Revolution", "White Revolution", "Yellow Revolution"],
        correct: 2,
        explanation: "AMUL (Anand Milk Union Limited) is related to the White Revolution (Operation Flood) and was founded by Dr. Verghese Kurien."
    },
    {
        id: 249,
        category: "General Science",
        question: "Which planet has the most number of moons in our Solar System?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: 1,
        explanation: "Saturn has the most confirmed moons (over 140), surpassing Jupiter."
    },
    {
        id: 250,
        category: "Odisha GK",
        question: "The Sun Temple at Konark is designed in the shape of?",
        options: ["A lotus", "A chariot", "A pyramid", "A dome"],
        correct: 1,
        explanation: "The Sun Temple at Konark is designed in the shape of a colossal chariot with 24 elaborately carved wheels and 7 horses, representing the Sun God's chariot."
    }
];
