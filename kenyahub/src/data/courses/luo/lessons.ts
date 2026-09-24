// Structured lessons for the Learn tab
// Sources: grammar.ts, dictionary data, "A Handbook of the Kavirondo (Dholuo) Language"

import {
    GREETINGS,
    PERSONAL_PRONOUNS,
    POSSESSIVE_SUFFIXES_SIMPLE,
    POSSESSIVE_SUFFIXES_EXTENDED,
    DEMONSTRATIVES,
    PLACE_DEMONSTRATIVES,
    PLURAL_PATTERNS,
    VERB_TENSES,
    QUESTION_WORDS,
    TIME_EXPRESSIONS,
    ADVERBS,
    PREFIXES,
    REFLECTIVE_PRONOUNS,
    ALONE_PRONOUNS,
} from './grammar';

import {
    PREPOSITIONS,
    CONJUNCTIONS,
    VERB_CONJUGATION_HERO,
    REFLEXIVE_VERBS,
    NOUN_CLASSES,
    SENTENCE_PATTERNS,
    ADJECTIVE_FORMATION,
    NAMING_CONVENTIONS,
    ALPHABET,
    CONVERSATION_HOUSEHOLD,
    CONVERSATION_HEALTH,
    CONVERSATION_WORK,
    CONVERSATION_TRAVEL,
    CONVERSATION_VILLAGE,
    DAYS_OF_WEEK,
} from './grammar-reference';

// ============================================================
// TYPES
// ============================================================

export interface LessonCard {
    luo: string;
    english: string;
    hint?: string;
    audio?: string;
    example?: string;
    response?: string;
}

export interface LessonExercise {
    type: 'match' | 'fill' | 'choice' | 'order';
    question: string;
    options?: string[];
    answer: string;
    hint?: string;
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    icon: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    category: string;
    cards: LessonCard[];
    exercises: LessonExercise[];
    culturalNote?: string;
    frontLabel?: string;
    backLabel?: string;
}

export interface LessonCategory {
    id: string;
    name: string;
    icon: string;
    description: string;
    color: string;
}

// ============================================================
// CATEGORIES
// ============================================================

export const LESSON_CATEGORIES: LessonCategory[] = [
    { id: 'basics', name: 'Basics', icon: '🌱', description: 'Start here — greetings, numbers & essentials', color: '#4CAF50' },
    { id: 'grammar', name: 'Grammar', icon: '📐', description: 'Pronouns, tenses & sentence structure', color: '#2196F3' },
    { id: 'vocabulary', name: 'Vocabulary', icon: '📖', description: 'Words for everyday life', color: '#FF9800' },
    { id: 'culture', name: 'Culture', icon: '🏺', description: 'Proverbs, expressions & traditions', color: '#9C27B0' },
    { id: 'conversation', name: 'Conversation', icon: '💬', description: 'Real-world dialogue practice', color: '#E91E63' },
];

// ============================================================
// LESSONS
// ============================================================

export const LESSONS: Lesson[] = [
    // ── BASICS ──────────────────────────────────

    {
        id: 'greetings',
        title: 'Greetings & Farewells',
        description: 'Learn how to say hello and goodbye in Dholuo',
        icon: '👋',
        level: 'beginner',
        category: 'basics',
        cards: GREETINGS.map(g => ({
            luo: g.luo,
            english: g.english,
            response: g.response,
            hint: `Reply with: ${g.response}`,
        })),
        exercises: [
            { type: 'choice', question: 'How do you say "Good morning" to one person?', options: ['Misawa', 'Oyawore', 'Oriti', 'Ber'], answer: 'Oyawore' },
            { type: 'choice', question: 'What is the correct reply to "Misawa"?', options: ['Oriti', 'Misawa ahinya', 'Ber', 'Oyawore'], answer: 'Misawa ahinya' },
            { type: 'match', question: 'Match "Goodbye" in Dholuo', options: ['Oyawore', 'Misawa', 'Oriti', 'Ber'], answer: 'Oriti' },
            { type: 'fill', question: 'Complete: _____ means "Good evening"', answer: 'Oyimore', hint: 'Starts with O' },
            { type: 'choice', question: '"Ber" means...', options: ['Good morning', 'Goodbye', 'Hi', 'Thank you'], answer: 'Hi' },
        ],
        culturalNote: 'In Luo culture, greetings are very important. When you meet someone, always greet them first before starting any conversation. Elders are greeted first as a sign of respect.',
    },

    {
        id: 'numbers',
        title: 'Numbers 1-10',
        description: 'Count like the Luo — from achiel to apar',
        icon: '🔢',
        level: 'beginner',
        category: 'basics',
        cards: [
            { luo: 'Achiel', english: '1 (One)' },
            { luo: 'Ariyo', english: '2 (Two)' },
            { luo: 'Adek', english: '3 (Three)' },
            { luo: 'Ang\'wen', english: '4 (Four)' },
            { luo: 'Abich', english: '5 (Five)' },
            { luo: 'Auchiel', english: '6 (Six)' },
            { luo: 'Abiriyo', english: '7 (Seven)' },
            { luo: 'Aboro', english: '8 (Eight)' },
            { luo: 'Ochiko', english: '9 (Nine)' },
            { luo: 'Apar', english: '10 (Ten)' },
        ],
        exercises: [
            { type: 'choice', question: 'What is "5" in Dholuo?', options: ['Adek', 'Abich', 'Auchiel', 'Ariyo'], answer: 'Abich' },
            { type: 'choice', question: '"Apar" means...', options: ['8', '9', '10', '7'], answer: '10' },
            { type: 'fill', question: 'Complete: _____ = Three', answer: 'Adek', hint: 'Starts with A' },
            { type: 'match', question: 'Match "7" in Dholuo', options: ['Aboro', 'Abiriyo', 'Auchiel', 'Ochiko'], answer: 'Abiriyo' },
            { type: 'order', question: 'Put in order: 1, 2, 3', options: ['Ariyo', 'Achiel', 'Adek'], answer: 'Achiel,Ariyo,Adek' },
        ],
        culturalNote: 'The Luo counting system is base-10. Notice how numbers 6 (auchiel = a+achiel) and 7 (abiriyo = a+ariyo) are built upon 1 and 2.',
    },

    {
        id: 'time-expressions',
        title: 'Time & Days',
        description: 'Express time, days of the week, and daily rhythms',
        icon: '⏰',
        level: 'beginner',
        category: 'basics',
        cards: [
            ...TIME_EXPRESSIONS.map(t => ({ luo: t.luo, english: t.english })),
            { luo: 'Wuok chieng\'', english: 'Sunrise' },
            { luo: 'Pod piny', english: 'Dawn (before sunrise)' },
        ],
        exercises: [
            { type: 'choice', question: 'How do you say "Today" in Dholuo?', options: ['Sani', 'Kawuono', 'Kiny', 'Nyoro'], answer: 'Kawuono' },
            { type: 'choice', question: '"Kiny" means...', options: ['Yesterday', 'Today', 'Tomorrow', 'Now'], answer: 'Tomorrow' },
            { type: 'match', question: 'Match "Evening" in Dholuo', options: ['Okinyi', 'Odhiambo', 'Otieno', 'Sani'], answer: 'Odhiambo' },
            { type: 'fill', question: '"Nyoro" means _____', answer: 'Yesterday', hint: 'The day before today' },
        ],
    },

    {
        id: 'question-words',
        title: 'Asking Questions',
        description: 'Learn how to ask who, what, where, when, why, and how',
        icon: '❓',
        level: 'beginner',
        category: 'basics',
        cards: QUESTION_WORDS.map(q => ({
            luo: q.luo,
            english: q.english,
            example: q.usage,
        })),
        exercises: [
            { type: 'choice', question: 'How do you ask "What?" in Dholuo?', options: ['Kanye', 'Ang\'o', 'Nade', 'Adi'], answer: 'Ang\'o' },
            { type: 'choice', question: '"Kanye" means...', options: ['What?', 'When?', 'Where?', 'Why?'], answer: 'Where?' },
            { type: 'match', question: 'Match "How?" in Dholuo', options: ['Nade', 'Adi', 'Kanye', 'Ng\'a'], answer: 'Nade' },
            { type: 'fill', question: '"In nade?" means "How are _____?"', answer: 'you', hint: 'Second person singular' },
        ],
        culturalNote: '"In nade?" (How are you?) is the most common question in daily Luo conversations. The expected response pattern is: "Ber" (Fine/Good).',
    },

    // ── GRAMMAR ─────────────────────────────────

    {
        id: 'pronouns',
        title: 'Personal Pronouns',
        description: 'I, You, He/She — standalone & verb-attached forms',
        icon: '👤',
        level: 'beginner',
        category: 'grammar',
        cards: [
            ...PERSONAL_PRONOUNS.separable.map(p => ({
                luo: p.luo,
                english: p.english,
                hint: 'Standalone pronoun',
            })),
            ...PERSONAL_PRONOUNS.inseparable.map(p => ({
                luo: `${p.prefix}-`,
                english: `${p.person} (verb prefix)`,
                example: p.example,
                hint: 'Attached to verbs',
            })),
        ],
        exercises: [
            { type: 'choice', question: '"An" means...', options: ['You', 'I/Me', 'He/She', 'We'], answer: 'I/Me' },
            { type: 'choice', question: 'Which prefix means "I" when attached to a verb?', options: ['i-', 'a-', 'o-', 'wa-'], answer: 'a-' },
            { type: 'match', question: '"Wan" means...', options: ['I', 'You', 'We', 'They'], answer: 'We' },
            { type: 'fill', question: '"Obiro" means "He/She _____"', answer: 'comes', hint: 'Present tense of come' },
            { type: 'choice', question: 'What is "They" in Dholuo?', options: ['Wan', 'Un', 'Gin', 'En'], answer: 'Gin' },
        ],
        culturalNote: 'In Dholuo, pronouns are either standalone (separable) or attached to verbs as prefixes (inseparable). "A-biro" = I-come. "O-biro" = He/She-comes. This is a key feature of the language.',
    },

    {
        id: 'possessives',
        title: 'Possessive Forms',
        description: 'My, your, his — how to show ownership',
        icon: '🤝',
        level: 'intermediate',
        category: 'grammar',
        cards: [
            ...POSSESSIVE_SUFFIXES_SIMPLE.map(p => ({
                luo: `-${p.suffix}`,
                english: p.person,
                hint: `Consonant endings: add -${p.suffix}`,
            })),
            ...POSSESSIVE_SUFFIXES_EXTENDED.map(p => ({
                luo: `-${p.suffix}`,
                english: `${p.person} (vowel ending)`,
                hint: `Vowel endings: add -${p.suffix}`,
            })),
        ],
        exercises: [
            { type: 'choice', question: '"Kora" means "my ___"', options: ['house', 'chest', 'knife', 'goat'], answer: 'chest' },
            { type: 'choice', question: 'To say "my" with a consonant-ending noun, add:', options: ['-na', '-a', '-wa', '-gi'], answer: '-a' },
            { type: 'fill', question: '"Wuod" + "-a" = _____ (my son)', answer: 'Wuoda', hint: 'Wuod + a' },
            { type: 'choice', question: 'Which suffix means "their"?', options: ['-wa', '-u', '-gi', '-e'], answer: '-gi' },
        ],
        culturalNote: 'Possessives in Dholuo work as suffixes added to the noun. There are two systems: simple suffixes for consonant endings (-a, -i, -e, -wa, -u, -gi) and extended suffixes for vowel endings (-na, -ni, -ne, -wa, -u, -gi).',
    },

    {
        id: 'plurals',
        title: 'Singular & Plural',
        description: 'Making words plural — patterns & irregulars',
        icon: '👥',
        level: 'intermediate',
        category: 'grammar',
        cards: PLURAL_PATTERNS.map(p => ({
            luo: `${p.singular} → ${p.plural}`,
            english: p.meaning,
        })),
        exercises: [
            { type: 'choice', question: 'What is the plural of "ot" (house)?', options: ['otni', 'ute', 'oti', 'otogi'], answer: 'ute' },
            { type: 'choice', question: '"Nyithindo" is the plural of...', options: ['nyako', 'nyathi', 'nyar', 'nyiri'], answer: 'nyathi' },
            { type: 'match', question: 'Plural of "diel" (goat)?', options: ['dielni', 'diegi', 'diek', 'dielgi'], answer: 'diek' },
            { type: 'fill', question: 'The plural of "dhako" (woman) is _____', answer: 'mon', hint: 'Irregular plural' },
            { type: 'choice', question: 'The most common regular plural suffix is:', options: ['-ini', '-gi', '-ni', '-e'], answer: '-ini' },
        ],
        culturalNote: 'Dholuo has many irregular plurals, especially for common words about people and animals. The regular pattern is to add "-ini" (e.g., obwolo → obwolini), but the most frequently used words often have unique plural forms.',
    },

    {
        id: 'verb-tenses',
        title: 'Verb Tenses',
        description: 'Past, present, and future in Dholuo verbs',
        icon: '⚡',
        level: 'intermediate',
        category: 'grammar',
        cards: [
            ...VERB_TENSES.map(v => ({
                luo: v.prefix ? `${v.prefix} + verb` : 'verb root',
                english: `${v.tense} tense`,
                example: v.example,
            })),
            { luo: 'dhi', english: 'to go (base verb)', example: 'Used as example for all tenses' },
            { luo: 'biro', english: 'to come', example: 'Abiro = I come' },
            { luo: 'chiemo', english: 'to eat', example: 'Achiemo = I eat' },
            { luo: 'nindo', english: 'to sleep', example: 'Anindo = I sleep' },
        ],
        exercises: [
            { type: 'choice', question: 'How do you say "I went" in Dholuo?', options: ['Adhi', 'Ne adhi', 'Abiro dhi', 'Dhi'], answer: 'Ne adhi' },
            { type: 'choice', question: '"Abiro dhi" means...', options: ['I went', 'I go', 'I will go', 'He goes'], answer: 'I will go' },
            { type: 'fill', question: '"Ne o_____" means "He/She went"', answer: 'dhi', hint: 'Base form of "to go"' },
            { type: 'choice', question: 'Which word signals future tense?', options: ['ne', 'ka', 'biro', 'se'], answer: 'biro' },
        ],
        culturalNote: 'The past tense in Dholuo uses "ne" before the pronoun prefix + verb. The future tense uses "biro" (literally "come"). This is similar to English "going to" for future.',
    },

    {
        id: 'demonstratives',
        title: 'This & That',
        description: 'Demonstrative pronouns and place words',
        icon: '👉',
        level: 'beginner',
        category: 'grammar',
        cards: [
            ...DEMONSTRATIVES.map(d => ({
                luo: `-${d.suffix}`,
                english: d.meaning,
                example: d.example,
            })),
            ...PLACE_DEMONSTRATIVES.map(p => ({
                luo: p.luo,
                english: p.english,
            })),
        ],
        exercises: [
            { type: 'choice', question: 'To say "this person" add which suffix?', options: ['-cha', '-ni', '-ka', '-no'], answer: '-ni' },
            { type: 'choice', question: '"Ka" means...', options: ['There', 'Here', 'That place', 'This'], answer: 'Here' },
            { type: 'fill', question: '"Ng\'at_____" means "that person"', answer: 'cha', hint: 'Suffix for "that"' },
        ],
    },

    {
        id: 'reflective-pronouns',
        title: 'Myself, Yourself, Alone',
        description: 'Reflective pronouns and emphasis forms',
        icon: '🪞',
        level: 'intermediate',
        category: 'grammar',
        cards: [
            ...REFLECTIVE_PRONOUNS.map(r => ({ luo: r.luo, english: r.english })),
            ...ALONE_PRONOUNS.map(a => ({ luo: a.luo, english: a.english })),
        ],
        exercises: [
            { type: 'choice', question: '"Awon" means...', options: ['Himself', 'Myself', 'Yourself', 'Ourselves'], answer: 'Myself' },
            { type: 'choice', question: '"Kende" means...', options: ['Myself alone', 'Yourself alone', 'He/She alone', 'We alone'], answer: 'He/She alone' },
            { type: 'match', question: '"Ourselves" in Dholuo?', options: ['Awon', 'Wawegi', 'Uwegi', 'Giwegi'], answer: 'Wawegi' },
        ],
    },

    // ── VOCABULARY ──────────────────────────────

    {
        id: 'family',
        title: 'Family Members',
        description: 'Words for family relationships',
        icon: '👨‍👩‍👧‍👦',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Wuoro / Won', english: 'Father', hint: 'Won = father of' },
            { luo: 'Mama / Min', english: 'Mother', hint: 'Min = mother of' },
            { luo: 'Wuoyi / Wuod', english: 'Son / Boy' },
            { luo: 'Nyako', english: 'Girl / Daughter' },
            { luo: 'Nyathi', english: 'Child' },
            { luo: 'Owadwa', english: 'Brother / Sibling' },
            { luo: 'Nyaminwa', english: 'Sister' },
            { luo: 'Dayo', english: 'Grandmother' },
            { luo: 'Kwaro', english: 'Grandfather' },
            { luo: 'Chi', english: 'Wife' },
            { luo: 'Dichuo / Jaod', english: 'Husband' },
            { luo: 'Nyiekwa', english: 'Grandchild' },
        ],
        exercises: [
            { type: 'choice', question: '"Dayo" means...', options: ['Mother', 'Grandmother', 'Aunt', 'Sister'], answer: 'Grandmother' },
            { type: 'choice', question: 'How do you say "child" in Dholuo?', options: ['Wuoyi', 'Nyako', 'Nyathi', 'Owadwa'], answer: 'Nyathi' },
            { type: 'match', question: '"Kwaro" means...', options: ['Father', 'Grandfather', 'Uncle', 'Brother'], answer: 'Grandfather' },
            { type: 'fill', question: '"Chi" means _____', answer: 'Wife', hint: 'Female spouse' },
        ],
        culturalNote: 'In Luo culture, family extends far beyond the nuclear family. "Owadwa" (brother/sibling) can refer to cousins and clan-mates. The extended family (anyuola) is central to Luo identity.',
    },

    {
        id: 'body-parts',
        title: 'Body Parts',
        description: 'Learn the words for parts of the body',
        icon: '🫁',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Wi', english: 'Head' },
            { luo: 'Wang\'', english: 'Eye' },
            { luo: 'It', english: 'Ear' },
            { luo: 'Um', english: 'Nose' },
            { luo: 'Dhok / Dho', english: 'Mouth' },
            { luo: 'Lak', english: 'Tooth / Teeth' },
            { luo: 'Lep', english: 'Tongue' },
            { luo: 'Lwedo', english: 'Hand / Arm' },
            { luo: 'Tielo', english: 'Leg / Foot' },
            { luo: 'Kor', english: 'Chest / Side' },
            { luo: 'Ich', english: 'Stomach' },
            { luo: 'Dier', english: 'Back' },
        ],
        exercises: [
            { type: 'choice', question: '"Wi" means...', options: ['Eye', 'Head', 'Ear', 'Nose'], answer: 'Head' },
            { type: 'choice', question: 'How do you say "hand" in Dholuo?', options: ['Tielo', 'Lwedo', 'Kor', 'Dier'], answer: 'Lwedo' },
            { type: 'match', question: '"Lep" means...', options: ['Tooth', 'Tongue', 'Lip', 'Neck'], answer: 'Tongue' },
            { type: 'fill', question: '"Ich" means _____', answer: 'Stomach', hint: 'Where food goes' },
        ],
    },

    {
        id: 'animals',
        title: 'Animals',
        description: 'Common animals in the Luo homeland',
        icon: '🦁',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Guok', english: 'Dog' },
            { luo: 'Paka', english: 'Cat' },
            { luo: 'Dhiang\'', english: 'Cow' },
            { luo: 'Diel', english: 'Goat' },
            { luo: 'Rombo', english: 'Sheep' },
            { luo: 'Gweno', english: 'Chicken' },
            { luo: 'Ondiek', english: 'Hyena' },
            { luo: 'Sibuor', english: 'Lion' },
            { luo: 'Apwoyo', english: 'Rabbit / Hare' },
            { luo: 'Thuol', english: 'Snake' },
            { luo: 'Rech', english: 'Fish' },
            { luo: 'Winyo', english: 'Bird' },
        ],
        exercises: [
            { type: 'choice', question: '"Sibuor" means...', options: ['Dog', 'Hyena', 'Lion', 'Snake'], answer: 'Lion' },
            { type: 'choice', question: 'How do you say "fish" in Dholuo?', options: ['Winyo', 'Thuol', 'Rech', 'Apwoyo'], answer: 'Rech' },
            { type: 'match', question: '"Gweno" means...', options: ['Goat', 'Sheep', 'Chicken', 'Duck'], answer: 'Chicken' },
            { type: 'fill', question: '"Guok" means _____', answer: 'Dog', hint: 'Man\'s best friend' },
        ],
        culturalNote: 'Cattle (dhok) hold deep cultural significance for the Luo. They are used in bride wealth (nyombo), ceremonies, and are a measure of wealth. The hare (apwoyo) appears frequently in Luo folklore as a trickster character.',
    },

    {
        id: 'food-drink',
        title: 'Food & Drink',
        description: 'Words for meals, food, and beverages',
        icon: '🍲',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Chiemo', english: 'Food / To eat' },
            { luo: 'Pi', english: 'Water' },
            { luo: 'Chak', english: 'Milk' },
            { luo: 'Kuon', english: 'Ugali (staple food)' },
            { luo: 'Alot', english: 'Vegetables' },
            { luo: 'Rech', english: 'Fish' },
            { luo: 'Ring\'o', english: 'Meat' },
            { luo: 'Nyuka', english: 'Porridge' },
            { luo: 'Bel', english: 'Millet' },
            { luo: 'Oduma', english: 'Maize / Corn' },
            { luo: 'Cham', english: 'Grain / Cereals' },
            { luo: 'Modho', english: 'To drink' },
        ],
        exercises: [
            { type: 'choice', question: '"Kuon" is...', options: ['Rice', 'Ugali', 'Porridge', 'Bread'], answer: 'Ugali' },
            { type: 'choice', question: 'How do you say "water" in Dholuo?', options: ['Chak', 'Pi', 'Modho', 'Nyuka'], answer: 'Pi' },
            { type: 'match', question: '"Alot" means...', options: ['Meat', 'Fish', 'Vegetables', 'Fruit'], answer: 'Vegetables' },
            { type: 'fill', question: '"Ring\'o" means _____', answer: 'Meat', hint: 'Protein from animals' },
        ],
        culturalNote: 'The traditional Luo diet centers on kuon (ugali) served with alot (vegetables) and rech (fish) from Lake Victoria. Fish is the most iconic Luo food — "Ja-Nam" (people of the lake) is a common name for the Luo.',
    },

    {
        id: 'nature',
        title: 'Nature & Weather',
        description: 'The natural world in Dholuo',
        icon: '🌿',
        level: 'intermediate',
        category: 'vocabulary',
        cards: [
            { luo: 'Chieng\'', english: 'Sun / Day' },
            { luo: 'Dwe', english: 'Moon / Month' },
            { luo: 'Sulwe', english: 'Star' },
            { luo: 'Polo', english: 'Sky / Heaven' },
            { luo: 'Piny', english: 'Earth / Ground / Land' },
            { luo: 'Nam', english: 'Lake / Sea' },
            { luo: 'Aora', english: 'River' },
            { luo: 'Got', english: 'Mountain / Hill' },
            { luo: 'Koth', english: 'Rain' },
            { luo: 'Yamo', english: 'Wind' },
            { luo: 'Yien', english: 'Tree' },
            { luo: 'Lum', english: 'Grass' },
        ],
        exercises: [
            { type: 'choice', question: '"Nam" means...', options: ['River', 'Rain', 'Lake', 'Ocean'], answer: 'Lake' },
            { type: 'choice', question: 'How do you say "rain" in Dholuo?', options: ['Yamo', 'Koth', 'Pi', 'Polo'], answer: 'Koth' },
            { type: 'match', question: '"Piny" means...', options: ['Sky', 'Earth', 'Rain', 'Wind'], answer: 'Earth' },
            { type: 'fill', question: '"Chieng\'" means _____ or Day', answer: 'Sun', hint: 'The bright star in the sky' },
        ],
    },

    {
        id: 'colors',
        title: 'Colors',
        description: 'Describe the world with color words',
        icon: '🎨',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Rachar', english: 'White' },
            { luo: 'Rateng\'', english: 'Black' },
            { luo: 'Makwar', english: 'Red' },
            { luo: 'Maratong\'', english: 'Green' },
            { luo: 'Maralik', english: 'Blue' },
            { luo: 'Madhiang\'', english: 'Yellow / Brown' },
            { luo: 'Rang Achiel gi Achiel', english: 'Colorful' },
        ],
        exercises: [
            { type: 'choice', question: '"Rachar" means...', options: ['Black', 'White', 'Red', 'Green'], answer: 'White' },
            { type: 'choice', question: 'How do you say "red" in Dholuo?', options: ['Rateng\'', 'Makwar', 'Maralik', 'Rachar'], answer: 'Makwar' },
            { type: 'match', question: '"Rateng\'" means...', options: ['White', 'Black', 'Blue', 'Yellow'], answer: 'Black' },
        ],
    },

    {
        id: 'adverbs',
        title: 'Adverbs',
        description: 'Describe how, how much, how far',
        icon: '💨',
        level: 'intermediate',
        category: 'vocabulary',
        cards: [
            ...ADVERBS.quantity.map(a => ({ luo: a.luo, english: a.english, hint: 'Quantity/degree' })),
            ...ADVERBS.manner.map(a => ({ luo: a.luo, english: a.english, hint: 'Manner' })),
        ],
        exercises: [
            { type: 'choice', question: '"Piyo" means...', options: ['Slowly', 'Quickly', 'Well', 'Badly'], answer: 'Quickly' },
            { type: 'choice', question: '"Ahinya" means...', options: ['Far', 'Near', 'Very', 'Half'], answer: 'Very' },
            { type: 'match', question: '"Maber" means...', options: ['Badly', 'Well', 'Slowly', 'Far'], answer: 'Well' },
        ],
    },

    {
        id: 'word-building',
        title: 'Word Building with Prefixes',
        description: 'Learn how prefixes create related words',
        icon: '🧩',
        level: 'advanced',
        category: 'grammar',
        cards: Object.entries(PREFIXES).map(([prefix, info]) => ({
            luo: `${prefix}-`,
            english: info.meaning,
            example: info.example,
        })),
        exercises: [
            { type: 'choice', question: '"Ja-" means...', options: ['Place of', 'Person who', 'People who', 'Thing that'], answer: 'Person who' },
            { type: 'choice', question: '"Jo-" is the plural form of which prefix?', options: ['Ma-', 'Ja-', 'O-', 'A-'], answer: 'Ja-' },
            { type: 'fill', question: '"Japuonj" means _____ (person who teaches)', answer: 'Teacher', hint: 'Ja- + puonj (teach)' },
        ],
        culturalNote: 'The Ja-/Jo- prefix system is very productive in Dholuo. Ja- = person of/from, Jo- = people of/from. Ja-Kisumu = person from Kisumu. Jo-Luo = Luo people. Ja-ote = messenger (person of messages).',
    },

    // ── CULTURE ─────────────────────────────────

    {
        id: 'proverbs-lesson',
        title: 'Wisdom in Proverbs',
        description: 'Learn through traditional Luo proverbs',
        icon: '📜',
        level: 'intermediate',
        category: 'culture',
        cards: [
            { luo: 'Koth achiel ok kel kwe', english: 'One rain does not bring harvest', hint: 'Meaning: Patience is needed for results' },
            { luo: 'Wuon ot ong\'eyo kama iro chiek', english: 'The owner of the house knows where the roof leaks', hint: 'Meaning: You know your own problems best' },
            { luo: 'Rieko ok ter ne nyathi', english: 'Wisdom cannot be given to a child', hint: 'Meaning: Experience comes with time' },
            { luo: 'Jal ma luwo bang\' ogwang\' ok bari', english: 'One who follows a monkey doesn\'t tire', hint: 'Meaning: When you love what you do, it\'s effortless' },
            { luo: 'Guok ma wuotho gi ndara ok ong\'eyo apwoyo', english: 'A dog that walks on the road doesn\'t know the hare', hint: 'Meaning: Stay on the beaten path and you miss adventures' },
            { luo: 'Dhoot achiel ok kel yueyo', english: 'One door doesn\'t bring breeze', hint: 'Meaning: You need multiple options/openness' },
        ],
        exercises: [
            { type: 'choice', question: '"Koth achiel ok kel kwe" teaches about...', options: ['Honesty', 'Patience', 'Courage', 'Family'], answer: 'Patience' },
            { type: 'choice', question: 'In "Rieko ok ter ne nyathi", who is "nyathi"?', options: ['Teacher', 'Elder', 'Child', 'King'], answer: 'Child' },
            { type: 'fill', question: 'Complete: "Wuon ___ ong\'eyo kama iro chiek"', answer: 'ot', hint: 'A building you live in' },
        ],
        culturalNote: 'Luo proverbs (ngeche) are passed down through generations orally. They encode deep cultural values — community, patience, hard work, and respect for elders. Learning them is essential to understanding the Luo worldview.',
    },

    {
        id: 'common-expressions',
        title: 'Everyday Expressions',
        description: 'Phrases you\'ll hear daily in Luo communities',
        icon: '🗣️',
        level: 'beginner',
        category: 'conversation',
        cards: [
            { luo: 'Erokamano', english: 'Thank you' },
            { luo: 'Mos', english: 'Please / Slowly' },
            { luo: 'Kik iparri', english: 'Don\'t worry' },
            { luo: 'Donge?', english: 'Isn\'t it? / Right?' },
            { luo: 'Adwaro...', english: 'I want...' },
            { luo: 'Akonyi', english: 'I\'ll help you' },
            { luo: 'Wadhiuru', english: 'Let\'s go (plural)' },
            { luo: 'Wadhi', english: 'Let\'s go (two people)' },
            { luo: 'Ber ahinya', english: 'Very good / Excellent' },
            { luo: 'Ok awinjo', english: 'I don\'t understand' },
            { luo: 'Nyingi en ng\'a?', english: 'What is your name?' },
            { luo: 'Nyinga en...', english: 'My name is...' },
        ],
        exercises: [
            { type: 'choice', question: 'How do you say "Thank you"?', options: ['Mos', 'Erokamano', 'Ber ahinya', 'Donge'], answer: 'Erokamano' },
            { type: 'choice', question: '"Ok awinjo" means...', options: ['I don\'t want', 'I don\'t know', 'I don\'t understand', 'I don\'t care'], answer: 'I don\'t understand' },
            { type: 'fill', question: '"My name is..." = "_____ en..."', answer: 'Nyinga', hint: 'Nying + -a (my)' },
            { type: 'match', question: '"Kik iparri" means...', options: ['Come here', 'Don\'t worry', 'I\'m sorry', 'Goodbye'], answer: 'Don\'t worry' },
        ],
        culturalNote: '"Erokamano" is perhaps the most important phrase to know. It shows gratitude and respect. In formal settings, you might say "Erokamano ahinya" (Thank you very much).',
    },

    {
        id: 'at-the-market',
        title: 'At the Market',
        description: 'Buying, selling, and bargaining phrases',
        icon: '🏪',
        level: 'intermediate',
        category: 'conversation',
        cards: [
            { luo: 'Chiro', english: 'Market' },
            { luo: 'Neng\'a en adi?', english: 'How much is it?' },
            { luo: 'En mangima ahinya', english: 'It\'s too expensive' },
            { luo: 'Lor nengone', english: 'Reduce the price' },
            { luo: 'Adwaro ng\'iewo...', english: 'I want to buy...' },
            { luo: 'Uso', english: 'To sell' },
            { luo: 'Ng\'iewo', english: 'To buy' },
            { luo: 'Pesa', english: 'Money' },
            { luo: 'Lokruok', english: 'Change (money back)' },
            { luo: 'Erokamano, ok adwar', english: 'Thank you, I don\'t want it' },
        ],
        exercises: [
            { type: 'choice', question: '"Neng\'a en adi?" asks about...', options: ['Quality', 'Size', 'Price', 'Color'], answer: 'Price' },
            { type: 'choice', question: 'How do you say "market"?', options: ['Duka', 'Chiro', 'Nam', 'Pesa'], answer: 'Chiro' },
            { type: 'fill', question: '"Lor _____" means "Reduce the price"', answer: 'nengone', hint: 'Price in Dholuo' },
        ],
    },

    {
        id: 'directions',
        title: 'Directions & Places',
        description: 'Navigate around — directional words',
        icon: '🧭',
        level: 'intermediate',
        category: 'conversation',
        cards: [
            { luo: 'Yo', english: 'Way / Path / Road' },
            { luo: 'Kowuoth', english: 'Right' },
            { luo: 'Koracham', english: 'Left' },
            { luo: 'Nyim', english: 'In front / Forward' },
            { luo: 'Chien', english: 'Behind / Back' },
            { luo: 'Malo', english: 'Up / Above' },
            { luo: 'Piny', english: 'Down / Below' },
            { luo: 'Ka', english: 'Here' },
            { luo: 'Kacha', english: 'There' },
            { luo: 'Machiegni', english: 'Near' },
            { luo: 'Mabor', english: 'Far' },
        ],
        exercises: [
            { type: 'choice', question: '"Malo" means...', options: ['Down', 'Left', 'Up', 'Near'], answer: 'Up' },
            { type: 'choice', question: 'How do you say "right" (direction)?', options: ['Koracham', 'Kowuoth', 'Nyim', 'Chien'], answer: 'Kowuoth' },
            { type: 'match', question: '"Mabor" means...', options: ['Near', 'Far', 'Left', 'Behind'], answer: 'Far' },
        ],
    },

    // ── NEW LESSONS FROM JSON DATA ──────────────────

    // ── BASICS (new) ────────────────────────────────

    {
        id: 'alphabet-pronunciation',
        title: 'Alphabet & Sounds',
        description: 'Learn the Dholuo alphabet, vowels, and special consonants',
        icon: '🔤',
        level: 'beginner',
        category: 'basics',
        cards: [
            ...ALPHABET.vowels.map(v => ({
                luo: v.letter.toUpperCase(),
                english: `Vowel: ${v.pronunciation}`,
                example: v.example,
            })),
            ...ALPHABET.special_consonants.map(c => ({
                luo: c.letter.toUpperCase(),
                english: `Special: ${c.pronunciation}`,
                example: c.example,
            })),
        ],
        exercises: [
            { type: 'choice', question: 'How is "dh" pronounced in Dholuo?', options: ['Like "d" in dog', 'Like "th" in "this"', 'Like "th" in "think"', 'Like "sh" in ship'], answer: 'Like "th" in "this"' },
            { type: 'choice', question: 'How many vowels does Dholuo have?', options: ['3', '4', '5', '7'], answer: '5' },
            { type: 'fill', question: '"Ng\'" is pronounced like "ng" in the word _____', answer: 'song', hint: 'A word meaning to sing' },
            { type: 'choice', question: '"Th" in Dholuo sounds like "th" in...', options: ['"this"', '"think"', '"church"', '"ship"'], answer: '"think"' },
            { type: 'choice', question: 'Dholuo is a _____ language (meaning pitch changes word meaning)', options: ['Tonal', 'Stress', 'Syllable', 'Click'], answer: 'Tonal' },
        ],
        culturalNote: 'Dholuo uses 22 letters. The letter C never stands alone — it always pairs with H to form "CH". Special sounds like "dh", "th", "ng\'" and "ny" are essential to master for correct pronunciation. Dholuo is also a tone language: the word "kich" with a high tone means "bee" but with a low tone means "orphan".',
    },

    {
        id: 'days-months',
        title: 'Days & Months',
        description: 'Learn the days of the week, months, and seasons in Dholuo',
        icon: '📅',
        level: 'beginner',
        category: 'basics',
        cards: [
            ...DAYS_OF_WEEK.map(d => ({
                luo: d.dholuo,
                english: d.english,
                hint: `Literally: "${d.literal}"`,
            })),
            { luo: 'Chwiri', english: 'Wet/Rainy season (Mar–Jun)', hint: 'Long rains' },
            { luo: 'Oro', english: 'Dry season (Dec–Mar)', hint: 'Dry period' },
        ],
        exercises: [
            { type: 'choice', question: 'What is Monday in Dholuo?', options: ['Tich ariyo', 'Wuok tich', 'Tich adek', 'Tich abich'], answer: 'Wuok tich' },
            { type: 'choice', question: '"Tich abich" means...', options: ['Monday', 'Wednesday', 'Friday', 'Saturday'], answer: 'Friday' },
            { type: 'fill', question: '"Chwiri" is the _____ season', answer: 'wet', hint: 'Rainy time of year' },
            { type: 'match', question: '"Chieng\' ngeso" (Saturday) literally means...', options: ['Rest day', 'Day of shaving', 'Work five', 'Start of work'], answer: 'Day of shaving' },
            { type: 'choice', question: 'How do you say "January" in Dholuo?', options: ['Dwe mar ariyo', 'Dwe mar achiel', 'Dwe mar adek', 'Dwe mar apar'], answer: 'Dwe mar achiel' },
        ],
        culturalNote: 'Luo day names follow a work-counting pattern: Monday is "Wuok tich" (start of work), Tuesday through Friday count work days (tich ariyo, adek, ang\'wen, abich). Months are numbered by the moon (dwe = moon/month).',
    },

    // ── GRAMMAR (new) ───────────────────────────────

    {
        id: 'prepositions-conjunctions',
        title: 'Prepositions & Conjunctions',
        description: 'Connecting words — in, at, with, because, but, and more',
        icon: '🔗',
        level: 'intermediate',
        category: 'grammar',
        cards: [
            ...PREPOSITIONS.slice(0, 8).map(p => ({
                luo: p.luo,
                english: p.english,
                example: p.examples[0] || '',
            })),
            ...CONJUNCTIONS.slice(0, 6).map(c => ({
                luo: c.luo,
                english: c.english,
                example: c.examples[0] || '',
            })),
        ],
        exercises: [
            { type: 'choice', question: '"E" as a preposition means...', options: ['with', 'in / at / on', 'from', 'under'], answer: 'in / at / on' },
            { type: 'choice', question: 'How do you say "because" in Dholuo?', options: ['to', 'kendo', 'nikech', 'kata'], answer: 'nikech' },
            { type: 'fill', question: '"Otieno _____ wuon gero ot" = Otieno AND his father are building a house', answer: 'gi', hint: 'Means "and" for linking nouns' },
            { type: 'choice', question: '"To" as a conjunction means...', options: ['And', 'Or', 'But', 'Because'], answer: 'But' },
            { type: 'match', question: '"Mondo" means...', options: ['because', 'in order that', 'although', 'but'], answer: 'in order that' },
        ],
        culturalNote: 'Dholuo has two words for "and": "gi" links nouns (Otieno gi Apiyo = Otieno and Apiyo), while "kendo" links clauses with the same subject (John dhi kendo duogo = John goes and comes back).',
    },

    {
        id: 'verb-conjugation-deep',
        title: 'Verb Conjugation',
        description: 'Master all verb tenses using "hero" (to love) as a model',
        icon: '💪',
        level: 'intermediate',
        category: 'grammar',
        cards: [
            ...VERB_CONJUGATION_HERO.tenses.present_indefinite.map(v => ({
                luo: v.luo,
                english: `Present: ${v.person}`,
                hint: 'Subject prefix + verb stem',
            })),
            ...VERB_CONJUGATION_HERO.tenses.past_indefinite.slice(0, 3).map(v => ({
                luo: v.luo,
                english: `Past: ${v.person}`,
                hint: "Use 'ne' before the verb",
            })),
            ...VERB_CONJUGATION_HERO.tenses.future.slice(0, 3).map(v => ({
                luo: v.luo,
                english: `Future: ${v.person}`,
            })),
        ],
        exercises: [
            { type: 'choice', question: '"Ahero" means...', options: ['You love', 'I love', 'He loves', 'They love'], answer: 'I love' },
            { type: 'choice', question: 'How do you say "He/She loved" in Dholuo?', options: ['Ohero', 'Ne ohero', 'Onaher', 'Ok ohero'], answer: 'Ne ohero' },
            { type: 'fill', question: '"I will love" = _____', answer: 'Anaher', hint: 'Future tense: A + na + root' },
            { type: 'choice', question: '"Ok ahero" means...', options: ['I will love', 'I loved', 'I do not love', 'Do I love?'], answer: 'I do not love' },
            { type: 'match', question: '"Gihero" — who is the subject?', options: ['I', 'You', 'He/She', 'They'], answer: 'They' },
        ],
        culturalNote: 'Dholuo conjugation follows a consistent pattern: the subject prefix (a-, i-, o-, wa-, u-, gi-) attaches directly to the verb root. Past tense adds "ne" before the verb; future replaces the final vowel with a special form. The imperative (command form) uses just the verb root: "her!" (love!).',
    },

    {
        id: 'reflexive-reciprocal',
        title: 'Reflexive & Reciprocal Verbs',
        description: 'Express actions done to oneself or to each other',
        icon: '🪞',
        level: 'advanced',
        category: 'grammar',
        cards: REFLEXIVE_VERBS.person_markers.map(r => ({
            luo: r.suffix,
            english: r.person,
            example: r.example,
            hint: 'Add this suffix to the verb',
        })),
        exercises: [
            { type: 'choice', question: '"Ohinyore" means...', options: ['He hurt me', 'He hurt himself', 'He hurt them', 'They hurt him'], answer: 'He hurt himself' },
            { type: 'choice', question: 'What suffix makes a verb reflexive for "I"?', options: ['-re', '-ri', '-ra', '-ru'], answer: '-ra' },
            { type: 'fill', question: '"Otieno gi Apiyo oherore" = Otieno and Apiyo love _____', answer: 'each other', hint: 'Reciprocal meaning' },
            { type: 'choice', question: '"Gihinyore" means...', options: ['They hurt themselves', 'They hurt me', 'I hurt them', 'You hurt yourself'], answer: 'They hurt themselves' },
        ],
        culturalNote: 'Reflexive verbs use the suffix -rV where V is a vowel that changes with person. The same form can express reciprocal actions (doing something to each other) depending on context.',
    },

    {
        id: 'noun-classes-plurals',
        title: 'Noun Classes & Plurals',
        description: 'The 8 noun classes and how to form plurals correctly',
        icon: '📊',
        level: 'advanced',
        category: 'grammar',
        cards: NOUN_CLASSES.flatMap(nc =>
            nc.examples.slice(0, 2).map(ex => ({
                luo: `${ex.singular} → ${ex.plural}`,
                english: `${ex.english} (${nc.suffix})`,
                hint: nc.name,
            }))
        ),
        exercises: [
            { type: 'choice', question: 'What is the plural of "rombo" (sheep)?', options: ['rombi', 'rombe', 'rombni', 'rombeyni'], answer: 'rombe' },
            { type: 'choice', question: '"Japuonj" becomes "jopuonj" in plural. What class is this?', options: ['-nde', '-che', 'ja-/jo-', '-ni'], answer: 'ja-/jo-' },
            { type: 'fill', question: 'Plural of "dhako" (woman) is _____', answer: 'mon', hint: 'Irregular — completely different word' },
            { type: 'choice', question: 'Which word stays the SAME in both singular and plural?', options: ['ot', 'rech', 'rombo', 'dala'], answer: 'rech' },
            { type: 'match', question: '"Higa → higni" uses which plural class?', options: ['-nde', '-che', '-mbe', '-ni'], answer: '-ni' },
        ],
        culturalNote: 'Dholuo has 8 noun classes, each with its own plural pattern. The most irregular plurals are for common words like dhako→mon (woman→women), ot→udi (house→houses), and dala→mier (home→homes). Person nouns using "ja-" always become "jo-" in the plural.',
    },

    {
        id: 'sentence-patterns',
        title: 'Sentence Patterns',
        description: 'Learn the 6 basic sentence structures in Dholuo',
        icon: '🏗️',
        level: 'advanced',
        category: 'grammar',
        cards: SENTENCE_PATTERNS.map(p => ({
            luo: p.examples[0].luo,
            english: p.examples[0].english,
            hint: `Pattern: ${p.name}`,
        })),
        exercises: [
            { type: 'choice', question: '"Omolo biro" (Omolo is coming) is what pattern?', options: ['SVO', 'SV', 'S+Cs', 'SVOL'], answer: 'SV' },
            { type: 'choice', question: '"Mama amiyo nyathi chiemo" uses which pattern?', options: ['SVO', 'SV', 'SVIODO', 'S+Cs'], answer: 'SVIODO' },
            { type: 'fill', question: '"Omolo ber" (Omolo is good) is a S+_____ pattern', answer: 'Cs', hint: 'Subject + Subject Complement' },
            { type: 'choice', question: 'In "Thuol ni e ot" (A snake is in the house), which pattern is used?', options: ['SV', 'SVO', 'S+LA', 'SVOC'], answer: 'S+LA' },
        ],
        culturalNote: 'Dholuo follows fairly consistent word order patterns. The basic order is Subject-Verb-Object (SVO), similar to English. However, when describing location, the pattern is Subject + Locative (S+LA), often using the preposition "e" (in/at).',
    },

    {
        id: 'adjective-formation',
        title: 'Adjective Formation & Comparison',
        description: 'How to form adjectives with ma- and compare things',
        icon: '📏',
        level: 'intermediate',
        category: 'grammar',
        cards: [
            ...ADJECTIVE_FORMATION.roots.slice(0, 8).map(a => ({
                luo: a.adjective,
                english: a.english,
                hint: `Root: ${a.root} + ma- prefix`,
            })),
            { luo: ADJECTIVE_FORMATION.comparison.comparative.particle, english: 'More than (comparative)', example: ADJECTIVE_FORMATION.comparison.comparative.example },
            { luo: ADJECTIVE_FORMATION.comparison.superlative.particle, english: 'The most (superlative)', example: ADJECTIVE_FORMATION.comparison.superlative.example },
            { luo: 'Ahinya', english: 'Very (intensifier)', example: 'Maber ahinya — Very good' },
        ],
        exercises: [
            { type: 'choice', question: 'What prefix makes an adjective in Dholuo?', options: ['ja-', 'ma-', 'o-', 'ka-'], answer: 'ma-' },
            { type: 'choice', question: '"Maber" comes from the root...', options: ['bor', 'ber', 'bir', 'bar'], answer: 'ber' },
            { type: 'fill', question: '"This is taller THAN that" uses the word _____ for comparison', answer: 'moloyo', hint: 'Comparative marker' },
            { type: 'choice', question: '"Maber moloyo te" means...', options: ['Very good', 'Better than', 'The best', 'Good enough'], answer: 'The best' },
            { type: 'match', question: '"Ahinya" means...', options: ['A little', 'Very', 'Too much', 'Enough'], answer: 'Very' },
        ],
        culturalNote: 'The "ma-" prefix is one of the most productive word-building tools in Dholuo. Adjectives always follow the noun they describe. There are special intensifiers for colors: "thiriri" (very white), "ti" (very black), "ha" (very red).',
    },

    // ── VOCABULARY (new) ────────────────────────────

    {
        id: 'occupations',
        title: 'Occupations & Professions',
        description: 'Learn words for different jobs and roles using ja-/jo- prefixes',
        icon: '👷',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Japuonj', english: 'Teacher', hint: 'ja- + puonj (teach)' },
            { luo: 'Jatedo', english: 'Cook', hint: 'ja- + tedo (cook)' },
            { luo: 'Japur', english: 'Farmer', hint: 'ja- + pur (dig/farm)' },
            { luo: 'Jakuath', english: 'Shepherd / Herder', hint: 'ja- + kuath (herd)' },
            { luo: 'Jalupo', english: 'Fisherman', hint: 'ja- + lupo (fish)' },
            { luo: 'Jadwar', english: 'Hunter', hint: 'ja- + dwar (hunt)' },
            { luo: 'Jayath', english: 'Doctor / Healer', hint: 'ja- + yath (medicine)' },
            { luo: 'Jatich', english: 'Worker / Servant', hint: 'ja- + tich (work)' },
            { luo: 'Jatelo', english: 'Leader', hint: 'ja- + telo (lead)' },
            { luo: 'Jakom', english: 'Chairperson', hint: 'ja- + kom (chair/seat)' },
        ],
        exercises: [
            { type: 'choice', question: 'What does the "ja-" prefix mean?', options: ['Place of', 'Person who', 'Tool for', 'Act of'], answer: 'Person who' },
            { type: 'choice', question: '"Jalupo" means...', options: ['Hunter', 'Farmer', 'Fisherman', 'Shepherd'], answer: 'Fisherman' },
            { type: 'fill', question: 'The plural of "japuonj" (teacher) is _____', answer: 'jopuonj', hint: 'ja- becomes jo-' },
            { type: 'match', question: '"Jayath" is a...', options: ['Teacher', 'Cook', 'Doctor', 'Farmer'], answer: 'Doctor' },
            { type: 'choice', question: '"Jadwar" is someone who...', options: ['Farms', 'Hunts', 'Fishes', 'Cooks'], answer: 'Hunts' },
        ],
        culturalNote: 'The "ja-" prefix is one of the most useful word-building tools in Dholuo. It means "person who" and combines with any verb or noun: ja- + puonj (teach) = japuonj (teacher). The plural changes ja- to jo- : japuonj → jopuonj (teachers).',
    },

    {
        id: 'food-agriculture',
        title: 'Food & Agriculture',
        description: 'Essential food, farming, and cooking vocabulary',
        icon: '🌾',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Chiemo', english: 'Food' },
            { luo: 'Kuon', english: 'Ugali / Thick porridge (staple food)' },
            { luo: 'Alot', english: 'Vegetables / Greens' },
            { luo: "Ring'o", english: 'Meat' },
            { luo: 'Rech', english: 'Fish' },
            { luo: 'Chak', english: 'Milk' },
            { luo: "Tong'", english: 'Egg' },
            { luo: 'Olemo', english: 'Fruit' },
            { luo: 'Rabolo', english: 'Banana' },
            { luo: 'Rabuon', english: 'Potato / Sweet potato' },
            { luo: 'Bando', english: 'Maize / Indian corn' },
            { luo: 'Chumbi', english: 'Salt' },
            { luo: 'Puodho', english: 'Garden / Farm' },
            { luo: 'Dero', english: 'Granary (grain store)' },
        ],
        exercises: [
            { type: 'choice', question: '"Kuon" is the Dholuo word for...', options: ['Rice', 'Ugali/Porridge', 'Bread', 'Soup'], answer: 'Ugali/Porridge' },
            { type: 'choice', question: 'What is "banana" in Dholuo?', options: ['Rabuon', 'Rabolo', 'Maembe', 'Olemo'], answer: 'Rabolo' },
            { type: 'fill', question: '"Puodho" means _____ or farm', answer: 'Garden', hint: 'A cultivated piece of land' },
            { type: 'match', question: '"Dero" is a...', options: ['Kitchen', 'Granary', 'Market', 'Garden'], answer: 'Granary' },
            { type: 'choice', question: '"Alot" refers to...', options: ['Fruits', 'Meat', 'Vegetables', 'Grains'], answer: 'Vegetables' },
        ],
        culturalNote: 'Kuon (ugali) made from maize meal is a staple food of the Luo, often eaten with alot (vegetables) and rech (fish) from Lake Victoria. The dero (granary) was traditionally an important structure in every Luo homestead for storing grain.',
    },

    {
        id: 'household-items',
        title: 'Household & Home',
        description: 'Words for things around the house and compound',
        icon: '🏠',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Ot', english: 'House' },
            { luo: 'Dala / Pacho', english: 'Home / Homestead' },
            { luo: 'Dhoot', english: 'Door / Entrance' },
            { luo: 'Mesa', english: 'Table' },
            { luo: 'Kom', english: 'Chair / Seat' },
            { luo: 'Kitanda', english: 'Bed' },
            { luo: 'Agulu', english: 'Clay pot' },
            { luo: 'Kijiko', english: 'Spoon' },
            { luo: 'Taya', english: 'Lamp' },
            { luo: 'Funguo', english: 'Key / Keys' },
            { luo: 'Ndoo', english: 'Bucket / Pail' },
            { luo: 'Bul', english: 'Drum' },
        ],
        exercises: [
            { type: 'choice', question: '"Dhoot" means...', options: ['Window', 'Wall', 'Door', 'Roof'], answer: 'Door' },
            { type: 'choice', question: 'What is "spoon" in Dholuo?', options: ['Pala', 'Kijiko', 'Agulu', 'Mesa'], answer: 'Kijiko' },
            { type: 'fill', question: '"Dala" or "Pacho" means _____', answer: 'Home', hint: 'Where you live / homestead' },
            { type: 'match', question: '"Agulu" is a...', options: ['Cup', 'Plate', 'Clay pot', 'Table'], answer: 'Clay pot' },
        ],
        culturalNote: 'The traditional Luo homestead (dala/pacho) consists of separate round houses (udi) for different family members, the kitchen, and a granary (dero). The compound is enclosed and has a main entrance gate.',
    },

    {
        id: 'weather-nature',
        title: 'Weather & Nature',
        description: 'Words for weather, sky, seasons, and natural world',
        icon: '🌦️',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Koth', english: 'Rain' },
            { luo: "Chieng'", english: 'Sun / Day' },
            { luo: 'Dwe', english: 'Moon / Month' },
            { luo: 'Sulwe', english: 'Star' },
            { luo: 'Polo', english: 'Sky / Heaven' },
            { luo: 'Yamo', english: 'Wind / Air' },
            { luo: 'Mor mar polo', english: 'Thunder' },
            { luo: 'Mil mar polo', english: 'Lightning' },
            { luo: 'Chwiri', english: 'Wet/Rainy season' },
            { luo: 'Oro', english: 'Dry season' },
            { luo: 'Got', english: 'Mountain / Hill' },
            { luo: 'Aora', english: 'River / Stream' },
            { luo: 'Lowo', english: 'Land / Soil / Earth' },
        ],
        exercises: [
            { type: 'choice', question: '"Sulwe" means...', options: ['Moon', 'Sun', 'Star', 'Sky'], answer: 'Star' },
            { type: 'choice', question: 'How do you say "thunder" in Dholuo?', options: ['Mil mar polo', 'Mor mar polo', 'Yamo', 'Koth'], answer: 'Mor mar polo' },
            { type: 'fill', question: '"Polo" means _____ or heaven', answer: 'Sky', hint: 'Look up!' },
            { type: 'match', question: '"Aora" is a...', options: ['Lake', 'River', 'Mountain', 'Forest'], answer: 'River' },
        ],
        culturalNote: 'The Luo calendar is lunar-based, hence "dwe" means both "moon" and "month". There are two main seasons: chwiri (wet/rainy, March to June) and oro (dry, December to March). The lake (nam) — referring to Lake Victoria — is central to Luo life.',
    },

    // ── CULTURE (new) ───────────────────────────────

    {
        id: 'naming-system',
        title: 'Luo Naming Conventions',
        description: 'The beautiful system behind Luo names — O- for boys, A- for girls',
        icon: '📛',
        level: 'intermediate',
        category: 'culture',
        cards: NAMING_CONVENTIONS.time_based_names.map(n => ({
            luo: `${n.masculine} / ${n.feminine}`,
            english: n.occasion,
            hint: `Male: ${n.masculine}, Female: ${n.feminine}`,
        })),
        exercises: [
            { type: 'choice', question: '"Atieno" is a girl born at...', options: ['Morning', 'Noon', 'Evening', 'Night'], answer: 'Night' },
            { type: 'choice', question: 'The male prefix in Luo names is...', options: ['A-', 'O-', 'Ja-', 'Ma-'], answer: 'O-' },
            { type: 'fill', question: 'A girl born during harvest is called _____', answer: 'Akeyo', hint: 'A- + keyo (harvest)' },
            { type: 'choice', question: '"Opiyo" and "Odongo" are names for...', options: ['Brothers', 'Twins', 'Friends', 'Neighbors'], answer: 'Twins' },
            { type: 'match', question: '"Anyango" was born when...', options: ['It was raining', 'Sun was rising', 'At night', 'During harvest'], answer: 'Sun was rising' },
        ],
        culturalNote: 'Luo naming is a deeply meaningful tradition. Names reflect the circumstances of birth: time of day, season, weather, or special events. The prefix differentiates gender — O- for males and A- for females. "Ja-" prefix indicates origin: "Ja Kisumo" = someone from Kisumu.',
    },

    {
        id: 'titles-honorifics',
        title: 'Titles & Respect',
        description: 'How to address elders, leaders, and community members',
        icon: '🎖️',
        level: 'intermediate',
        category: 'culture',
        cards: [
            { luo: 'Ruoth', english: 'Chief / King / Lord', hint: 'Used for traditional leaders and God' },
            { luo: "Jaduong'", english: 'Elder / Sir', hint: 'Respectful title for older men; also for Catholic priests' },
            { luo: 'Mikayi', english: 'First wife', hint: 'In a polygamous home' },
            { luo: 'Nyachira', english: 'Second wife' },
            { luo: 'Migosi', english: 'Mister / Sir', hint: 'Formal address' },
            { luo: 'Nyadendi', english: 'Miss / Young woman' },
            { luo: 'Ker', english: 'President / Supreme ruler' },
            { luo: 'Rawera', english: 'Youth / Youngster' },
            { luo: 'Omera', english: 'Friend / Cousin (same sex)', hint: 'Informal - shows closeness' },
        ],
        exercises: [
            { type: 'choice', question: '"Ruoth" refers to a...', options: ['Youth', 'Chief/King', 'Teacher', 'Doctor'], answer: 'Chief/King' },
            { type: 'choice', question: '"Mikayi" is the...', options: ['First wife', 'Second wife', 'Mother', 'Grandmother'], answer: 'First wife' },
            { type: 'fill', question: '"Omera" is an informal word for _____ or cousin', answer: 'friend', hint: 'Same-sex friend' },
            { type: 'match', question: '"Ker" means...', options: ['Elder', 'Chief', 'President', 'Youth'], answer: 'President' },
        ],
        culturalNote: 'Respect for elders is central to Luo culture. A jaduong\' (elder) commands great respect in community decisions. The ruoth (chief/king) was the traditional leader of a Luo community. When greeting, always address the elder first.',
    },

    // ── CONVERSATION (new) ──────────────────────────

    {
        id: 'household-phrases',
        title: 'Around the House',
        description: 'Commands and requests for daily household activities',
        icon: '🧹',
        level: 'intermediate',
        category: 'conversation',
        cards: CONVERSATION_HOUSEHOLD.map(p => ({
            luo: p.luo,
            english: p.english,
        })),
        exercises: [
            { type: 'choice', question: '"Kel pi majitech" means...', options: ['Boil some water', 'Bring some hot water', 'Pour the water out', 'The water is cold'], answer: 'Bring some hot water' },
            { type: 'choice', question: 'How do you say "Close the door"?', options: ['Yawo dhoot', 'Chiegi dhoot', 'Lwok dhoot', 'Kel dhoot'], answer: 'Chiegi dhoot' },
            { type: 'fill', question: '"Lwok _____" means "Wash those plates"', answer: 'sembogi', hint: 'Plates in Dholuo' },
            { type: 'match', question: '"Amok taya" means...', options: ['Turn off the lamp', 'Light the lamp', 'Buy a lamp', 'Bring the lamp'], answer: 'Light the lamp' },
        ],
    },

    {
        id: 'health-sickness',
        title: 'Health & Sickness',
        description: 'Describe symptoms, ask about health, and visit the doctor',
        icon: '🏥',
        level: 'intermediate',
        category: 'conversation',
        cards: CONVERSATION_HEALTH.map(p => ({
            luo: p.luo,
            english: p.english,
        })),
        exercises: [
            { type: 'choice', question: '"Atuo" means...', options: ['I am hungry', 'I am sick', 'I am tired', 'I am fine'], answer: 'I am sick' },
            { type: 'choice', question: 'How do you ask "Is anyone sick?"', options: ["Nitiye ng'ato matuwo?", 'In nade?', "Ot-uwo ang'o?", 'Bada otur?'], answer: "Nitiye ng'ato matuwo?" },
            { type: 'fill', question: '"Bada otur" means "My _____ is broken"', answer: 'arm', hint: 'Body part' },
            { type: 'match', question: '"Wiya usi maka" means...', options: ['I have a headache', 'I have fever', 'I am dizzy', 'I cannot eat'], answer: 'I have fever' },
        ],
        culturalNote: 'In Luo culture, visiting the sick is an important communal duty. Traditional healers (jayath or jajuok) play a significant role alongside modern medicine. Health-related vocabulary is practical for daily life and community interaction.',
    },

    {
        id: 'at-work',
        title: 'At Work',
        description: 'Employment, farming, and work-related conversations',
        icon: '⚒️',
        level: 'intermediate',
        category: 'conversation',
        cards: CONVERSATION_WORK.map(p => ({
            luo: p.luo,
            english: p.english,
        })),
        exercises: [
            { type: 'choice', question: '"Idwaro tich?" asks...', options: ['Are you working?', 'Do you want work?', 'Is work finished?', 'Where is work?'], answer: 'Do you want work?' },
            { type: 'choice', question: '"Ing\'eyo pur?" asks if you understand...', options: ['Reading', 'Cooking', 'Cultivation', 'Building'], answer: 'Cultivation' },
            { type: 'fill', question: '"Ang\'eyo matintin" = I know a _____', answer: 'little', hint: 'Small amount' },
            { type: 'match', question: '"Tiuru piyo" means...', options: ['Rest now', 'Stop working', 'Work hard!', 'Come here'], answer: 'Work hard!' },
        ],
    },

    {
        id: 'travel-journey',
        title: 'Travel & Journey',
        description: 'Planning trips, asking for directions, and managing travel',
        icon: '🗺️',
        level: 'advanced',
        category: 'conversation',
        cards: CONVERSATION_TRAVEL.slice(0, 12).map(p => ({
            luo: p.luo,
            english: p.english,
        })),
        exercises: [
            { type: 'choice', question: '"Kiny wanadhi safari" means...', options: ['We arrived today', 'We start the journey tomorrow', 'The journey is long', 'Where is the road?'], answer: 'We start the journey tomorrow' },
            { type: 'choice', question: '"Aorani tut?" asks if the river is...', options: ['Wide', 'Deep', 'Cold', 'Fast'], answer: 'Deep' },
            { type: 'fill', question: '"Chieng\' wuok yor _____" = The sun rises from the east', answer: 'ugwe', hint: 'Cardinal direction for east' },
            { type: 'match', question: '"Chieng\' kech ahinya" means...', options: ['It is raining', 'It is windy', 'The sun is very hot', 'It is dark'], answer: 'The sun is very hot' },
        ],
        culturalNote: 'Travel in traditional Luo life involved walking with porters (joting) carrying loads (musike). Cardinal directions use unique Dholuo words: ugwe (east), yimbo (west), milambo (south), masawa (north). Navigation relied on the sun, rivers, and landmarks.',
    },

    {
        id: 'village-visit',
        title: 'Visiting a Village',
        description: 'Social interactions when visiting a new place',
        icon: '🏘️',
        level: 'advanced',
        category: 'conversation',
        cards: CONVERSATION_VILLAGE.map(p => ({
            luo: p.luo,
            english: p.english,
        })),
        exercises: [
            { type: 'choice', question: '"Ruoth ni kanwe?" asks...', options: ['Who is the chief?', 'Where is the chief?', 'Is the chief home?', 'Call the chief'], answer: 'Where is the chief?' },
            { type: 'choice', question: '"En dalane" means...', options: ['He is away', 'He is at home', 'He is the chief', 'He is coming'], answer: 'He is at home' },
            { type: 'fill', question: '"Adwaro ng\'ato, onyisa yo" = I want a guide to show me the _____', answer: 'road', hint: 'yo = road/path' },
            { type: 'match', question: '"Aol" means...', options: ['I am hungry', 'I am sick', 'I am tired', 'I am lost'], answer: 'I am tired' },
        ],
        culturalNote: 'Visiting another village follows strict social protocols. You must first see the chief (ruoth) or elder (jaduong\') and state your purpose. Hospitality is a core Luo value — guests (welo) are always provided food and shelter.',
    },

    // ── LAFAND ALIGNED LESSONS (accuracy-focused) ───────────

    {
        id: 'lafand-connectors',
        title: 'Connectors in Context',
        description: 'High-frequency connectors from LAFAND: nikech, to, kendo, ka, mondo, kata',
        icon: '🧷',
        level: 'intermediate',
        category: 'grammar',
        cards: [
            { luo: 'Kata obedo ni ji mang\'eny ne ochako ng\'iyo gi wach tiyo gi intanet, ne nitie ji mang\'eny ma bende ne ok nyal timo kamano.', english: 'Even as vast numbers of people were adapting to their new realities, it became increasingly apparent that equally large numbers of people were shut out from being able to do so.' },
            { luo: 'Ji milion 520 kuomgi nyalo yudo intanet mar simu to pod ok giyud.', english: 'Some 520-million can access the mobile internet but do not.' },
            { luo: 'Ji milion 270 ok nyal yudo intanet nikech intanet pok ochopo kama gintie.', english: '270-million cannot access the mobile internet because they do not have the requisite coverage.' },
            { luo: 'Bedo ni Mei tarik 17 higani ne en Telecommunication and Information Society Day, ber ng\'eyo ni gin ji adi ma ok nyal yudo intanet.', english: 'Given that 17 May was Telecommunication and Information Society Day, it is worth examining how many people cannot access the internet.' },
            { luo: 'Ka idwaro chiwo pesa ma konyo e loso stima, ne ni kambi maloso stimano ok chid alwora.', english: 'If you want to finance energy, finance clean energy.' },
            { luo: 'Riwruoge ariyogi osewalore e wach holo kambi ma Lamu pesa, kendo gisewalore e chenro mamoko.', english: 'Both entities have pulled out of funding the Lamu project, and they have pulled out of other coal project plans too.' },
        ],
        exercises: [
            { type: 'choice', question: 'In corpus usage, "nikech" means...', options: ['and', 'because', 'if', 'however'], answer: 'because' },
            { type: 'choice', question: 'In the corpus, "to" most often marks...', options: ['location', 'contrast (but)', 'future', 'plural'], answer: 'contrast (but)' },
            { type: 'fill', question: 'Complete: "Ji milion 270 ok nyal yudo intanet _____ intanet pok ochopo kama gintie."', answer: 'nikech', hint: 'Reason connector' },
            { type: 'match', question: 'Match connector to function', options: ['ka = if', 'kendo = and', 'kata = even/although', 'mondo = in order that'], answer: 'ka = if' },
        ],
        culturalNote: 'These connectors appear at very high frequency in formal Luo writing. Learning them in full sentences is more effective than isolated vocabulary.',
    },

    {
        id: 'lafand-formal-register',
        title: 'Formal Register',
        description: 'Understand formal Luo used in reports, policy, and institutions',
        icon: '📰',
        level: 'advanced',
        category: 'conversation',
        cards: [
            { luo: 'John Chumo, Jatelo mar National Environmental Complaints Committee kata NECC ne owacho ni riwruok margi jiwo kembe mondo oluw chenro ma nyasani mar tiyo gi gik ma ok chid muya.', english: 'John Chumo, secretary of the National Environmental Complaints Committee (NECC), said their institution is encouraging companies to embrace the new order of clean energy.' },
            { luo: 'Chenro ma kamano nyiso ni kembe duto magolo kabon mang\'eny nyaka lok yoregi mag tich.', english: 'Such moves show that entities producing large carbon emissions must change their ways of operation.' },
            { luo: 'Kaluwore gi Ovum, riwruok matimo nonro, kwan joma nigi intanet motudnegi e ot e Sub-Saharan Africa en mana ji milion 6.6.', english: 'According to Ovum, there are only 6.6-million fixed-line internet subscriptions in Sub-Saharan Africa.' },
            { luo: 'Ka ne jo EPRA wuoyo e wachno, ne giwacho ni osuru mar kelo petrol e pachoka ne odok piny gi pasent 0.57.', english: 'In a statement, EPRA said the average landed cost of imported petrol decreased by 0.57 percent.' },
            { luo: 'Pasent 21 mar alworano duto ema yudo intanet mar 4G broadband.', english: 'Across the region, 4G broadband coverage is only 21 percent.' },
        ],
        exercises: [
            { type: 'choice', question: 'In formal register, "Kaluwore gi..." is best translated as...', options: ['As soon as', 'According to', 'Because of', 'In spite of'], answer: 'According to' },
            { type: 'choice', question: '"pasent" corresponds to...', options: ['county', 'coverage', 'percent', 'policy'], answer: 'percent' },
            { type: 'fill', question: 'Complete: "Pasent 21 mar alworano duto ema yudo intanet mar _____ broadband."', answer: '4G', hint: 'Network generation' },
            { type: 'choice', question: '"chenro" in these policy contexts most closely means...', options: ['meal', 'plan/strategy', 'village', 'greeting'], answer: 'plan/strategy' },
        ],
    },

    {
        id: 'lafand-reported-speech',
        title: 'Reported Speech',
        description: 'Practice converting direct quotes and reported speech in Luo and Kiswahili',
        icon: '💬',
        level: 'advanced',
        category: 'grammar',
        frontLabel: 'Luo',
        backLabel: 'Kiswahili',
        cards: [
            { luo: 'Ne owacho niya: "Ka idwaro chiwo pesa ma konyo e loso stima, ne ni kambi maloso stimano ok chid alwora."', english: 'He said: "If you want to finance energy, finance clean energy."' },
            { luo: 'Bichiang\'a nowacho ni, "Ikano nengo mar pesani e shares."', english: 'Bichianga said, "You store the value of money in shares."' },
            { luo: 'Ne giwacho ni gidwaro dwoko piny higa ka higa, pesa ma gichiwo mitiyogo e weche maka mar kidi.', english: 'They said they wanted to reduce year by year the money they funded in coal energy matters.' },
            { luo: 'Ka ne jo EPRA wuoyo e wachno, ne giwacho ni osuru mar kelo petrol e pachoka ne odok piny.', english: 'When EPRA spoke on the matter, they said the landed cost of imported petrol had gone down.' },
        ],
        exercises: [
            { type: 'choice', question: 'The marker most used before reported content in these sentences is...', options: ['to', 'ni', 'ka', 'ok'], answer: 'ni' },
            { type: 'choice', question: 'In corpus quotations, "nowacho ni" is best rendered as...', options: ['will say', 'said that', 'was walking', 'did not say'], answer: 'said that' },
            { type: 'fill', question: 'Complete: "Bichiang\'a _____ ni, Ikano nengo mar pesani e shares."', answer: 'nowacho', hint: 'Reported speech verb' },
        ],
    },

    {
        id: 'lafand-money-units',
        title: 'Money and Units',
        description: 'Read prices, percentages, years, and measurements from authentic corpus lines',
        icon: '💹',
        level: 'intermediate',
        category: 'vocabulary',
        cards: [
            { luo: 'Ne okel petrol ma romo lita milion 433 e pachoka kokalo kuom OTS mondo otigo e alap ma April-Mei.', english: 'A total of 433 million litres of petrol were imported through OTS for the April-May cycle.' },
            { luo: 'Jo apiko ma Nairobi biro chulo siling\' 126.37 e lita ka lita mar petrol.', english: 'Nairobi motorists will pay Sh126.37 per litre for petrol.' },
            { luo: 'Amerka bende nigi chenro mar dwoko chien gi nus chilo duto mar kabon chop higa mar 2030.', english: 'The US also intends to cut carbon emissions in half by 2030.' },
            { luo: 'Osuru mar kelo petrol ne odok piny gi pasent 0.57.', english: 'The landed cost of imported petrol decreased by 0.57 percent.' },
            { luo: 'Kitiyo gi siling\' 1,000 e ng\'iewo shares 100 mag Safaricom.', english: 'You use Sh1,000 to buy 100 Safaricom shares.' },
        ],
        exercises: [
            { type: 'choice', question: '"pasent 0.57" means...', options: ['0.57 percent', '57 percent', '5.7 million', '57 litres'], answer: '0.57 percent' },
            { type: 'choice', question: '"lita milion 433" refers to...', options: ['price', 'distance', 'volume', 'temperature'], answer: 'volume' },
            { type: 'fill', question: 'Complete: "... kabon chop higa mar _____."', answer: '2030', hint: 'Target year in the sentence' },
        ],
    },

    {
        id: 'lafand-energy-climate-pack',
        title: 'Energy and Climate',
        description: 'Practice climate and energy language with aligned LAFAND sentence pairs',
        icon: '🌍',
        level: 'advanced',
        category: 'conversation',
        cards: [
            { luo: 'Standard Bank ma South Africa, ma otudore gi ICBC, bende ne owinjore ochiw pesa migerogo kambi ma Lamu.', english: 'South Africa\'s Standard Bank, an affiliate of ICBC, was also expected to fund the Lamu project.' },
            { luo: 'Riwruoge ariyogi osewalore e wach holo kambi ma Lamu pesa.', english: 'Both entities have since pulled out of plans to fund the Lamu project.' },
            { luo: 'Ker ma Amerka, Joe Biden ne oketo seyi e winjruok moro ma ne omiyo Amerka odonjo kendo e Paris Agreement.', english: 'US President Joe Biden signed a treaty that saw America rejoin the Paris Agreement.' },
            { luo: 'Ka idwaro chiwo pesa ma konyo e loso stima, ne ni kambi maloso stimano ok chid alwora.', english: 'If you want to finance energy, finance clean energy.' },
            { luo: 'Kapo ni dongruok moro ketho alwora, mano ok en dongruok.', english: 'If development harms the environment, that is not development.' },
        ],
        exercises: [
            { type: 'choice', question: '"alwora" in this domain mostly refers to...', options: ['language', 'environment', 'market', 'transport'], answer: 'environment' },
            { type: 'choice', question: 'Which agreement is explicitly named in the corpus line?', options: ['Kyoto', 'Nairobi Accord', 'Paris Agreement', 'COP27'], answer: 'Paris Agreement' },
            { type: 'fill', question: 'Complete: "... odonjo kendo e _____ Agreement."', answer: 'Paris', hint: 'Global climate treaty' },
        ],
    },

    {
        id: 'lafand-digital-pack',
        title: 'Digital and Connectivity',
        description: 'Use real corpus lines to discuss internet access and digital transformation',
        icon: '📶',
        level: 'advanced',
        category: 'conversation',
        cards: [
            { luo: 'Gimoro higa achiel kama mokalo, gik mitimo e intanet osemedore matamre ginono e piny mangima.', english: 'Over the past year, digital transformation has accelerated rapidly around the world.' },
            { luo: 'Bed ni idwaro tiyo, idwaro puonjori gimoro, kata idwaro tudri gi osiepeni kata joodu, intanet ne dwarore.', english: 'Whether working, learning, or keeping in touch with friends and family, internet became essential.' },
            { luo: 'Kuom ranyisi, e pinje man Sub-Saharan Afrika, chiegni ji milion 800 ok otud gi intanet mar simu.', english: 'In Sub-Saharan Africa, about 800 million people are not connected to mobile internet.' },
            { luo: 'Pasent 21 mar alworano duto ema yudo intanet mar 4G broadband.', english: 'Only 21 percent of the region has 4G broadband coverage.' },
            { luo: 'Kwan joma nigi intanet motudnegi e ot e Sub-Saharan Africa en mana ji milion 6.6.', english: 'There are only 6.6 million fixed-line internet subscriptions in Sub-Saharan Africa.' },
        ],
        exercises: [
            { type: 'choice', question: '"intanet mar simu" means...', options: ['fixed internet', 'mobile internet', 'satellite TV', 'radio signal'], answer: 'mobile internet' },
            { type: 'choice', question: 'How many people are cited as not connected to mobile internet?', options: ['270 million', '520 million', '800 million', '6.6 million'], answer: '800 million' },
            { type: 'fill', question: 'Complete: "Pasent 21 ... intanet mar _____ broadband."', answer: '4G', hint: 'Network generation' },
        ],
    },

    {
        id: 'lafand-transport-pack',
        title: 'Transport and Infrastructure',
        description: 'Transport, pipeline, and logistics vocabulary from aligned LAFAND lines',
        icon: '🛣️',
        level: 'advanced',
        category: 'conversation',
        cards: [
            { luo: 'Riwruoge 263 mochiwore ne konyo oganda, osekwayo bengi mondo kik gichiw dola bilion 3.5 milosogo paip mar mo mawuok Uganda nyaka dho wath ma Tanzanian.', english: 'A coalition of 263 charities urged banks not to finance a $3.5 billion oil pipeline from Uganda to the Tanzanian coast.' },
            { luo: 'Total mar France kod National Offshore Oil Corporation ma China onego ochak loso paip ma borne en kilomita 1,445.', english: 'France\'s Total and China National Offshore Oil Corporation were due to start work on a 1,445 km pipeline.' },
            { luo: 'Paipno wuok yo podho chieng\' ma Uganda nyaka Tanzania ma chop e pot ma Tanga e Indian Ocean.', english: 'The pipeline runs from western Uganda through Tanzania to the port of Tanga on the Indian Ocean.' },
            { luo: 'Giwacho ni chenrono nyalo miyo oma ji lowo kendo gilal yoregi mag yuto.', english: 'They said the project could lead to loss of community land and livelihoods.' },
            { luo: 'Jo apiko ma Nairobi biro chulo siling\' 126.37 e lita ka lita mar petrol.', english: 'Nairobi motorists will pay Sh126.37 per litre for petrol.' },
        ],
        exercises: [
            { type: 'choice', question: '"paip" in these lines means...', options: ['bridge', 'pipeline', 'highway', 'harbor'], answer: 'pipeline' },
            { type: 'choice', question: 'The pipeline length cited in corpus is...', options: ['433 km', '800 km', '1,445 km', '3,500 km'], answer: '1,445 km' },
            { type: 'fill', question: 'Complete: "... nyaka Tanzania ma chop e pot ma _____."', answer: 'Tanga', hint: 'Named port city' },
        ],
    },

];

// ============================================================
// HELPERS
// ============================================================

const DYNAMIC_PRACTICE_IDS = new Set(['lafand-reported-speech']);

function readSeenKeys(lessonId: string): Set<string> {
    if (typeof window === 'undefined') return new Set<string>();
    try {
        const raw = localStorage.getItem(`learn-seen-cards-${lessonId}`);
        if (!raw) return new Set<string>();
        const parsed = JSON.parse(raw);
        return new Set(Array.isArray(parsed) ? parsed : []);
    } catch {
        return new Set<string>();
    }
}

function writeSeenKeys(lessonId: string, seen: Set<string>): void {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem(`learn-seen-cards-${lessonId}`, JSON.stringify(Array.from(seen)));
    } catch {
        // Ignore storage write failures.
    }
}

function cardFingerprint(card: LessonCard): string {
    return `${card.luo.toLowerCase().trim()}||${card.english.toLowerCase().trim()}`;
}

function lessonCardPool(filter: (card: LessonCard) => boolean): LessonCard[] {
    const pool = LESSONS
        .filter(lesson => !DYNAMIC_PRACTICE_IDS.has(lesson.id))
        .flatMap(lesson => lesson.cards)
        .filter(card => card.luo.trim().length > 0 && card.english.trim().length > 0)
        .filter(filter);

    // Ensure unique cards in the pool.
    const seen = new Set<string>();
    const unique: LessonCard[] = [];
    for (const card of pool) {
        const key = cardFingerprint(card);
        if (seen.has(key)) continue;
        seen.add(key);
        unique.push(card);
    }
    return unique;
}

function selectUnseenCards(lessonId: string, pool: LessonCard[], count: number): LessonCard[] {
    const seen = readSeenKeys(lessonId);
    const unseen = pool.filter(card => !seen.has(cardFingerprint(card)));
    const source = unseen.length >= count ? unseen : pool;
    const picked = [...source].sort(() => Math.random() - 0.5).slice(0, Math.min(count, source.length));

    if (unseen.length < count) {
        // Reset seen history once pool is exhausted, then continue.
        const reset = new Set<string>();
        for (const card of picked) {
            reset.add(cardFingerprint(card));
        }
        writeSeenKeys(lessonId, reset);
        return picked;
    }

    picked.forEach(card => seen.add(cardFingerprint(card)));
    writeSeenKeys(lessonId, seen);
    return picked;
}

function buildChoiceExercisesFromCards(cards: LessonCard[]): LessonExercise[] {
    const answers = cards.map(card => card.english);
    return cards.slice(0, 10).map((card) => {
        const distractors = answers
            .filter(answer => answer !== card.english)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        return {
            type: 'choice',
            question: `Choose the best translation for: "${card.luo}"`,
            options: [card.english, ...distractors].sort(() => Math.random() - 0.5),
            answer: card.english,
            hint: card.hint,
        };
    });
}

function buildDynamicLesson(baseLesson: Lesson): Lesson {
    const isReportedSpeech = baseLesson.id === 'lafand-reported-speech';
    const pool = lessonCardPool((card) => {
        if (!isReportedSpeech) return true;
        return /\b(wacho|owacho|nowacho|ni)\b/i.test(card.luo);
    });

    const selectedCards = selectUnseenCards(baseLesson.id, pool, 10);
    const cards = selectedCards.length > 0 ? selectedCards : baseLesson.cards;
    const exercises = buildChoiceExercisesFromCards(cards);

    return {
        ...baseLesson,
        cards,
        exercises,
    };
}

export function getLessonsByCategory(categoryId: string): Lesson[] {
    return LESSONS.filter(l => l.category === categoryId);
}

export function getLessonById(id: string): Lesson | undefined {
    const lesson = LESSONS.find(l => l.id === id);
    if (!lesson) return undefined;
    if (DYNAMIC_PRACTICE_IDS.has(lesson.id)) {
        return buildDynamicLesson(lesson);
    }
    return lesson;
}

export function getLessonProgress(lessonId: string): { completed: boolean; score: number; bestScore: number } {
    try {
        const saved = localStorage.getItem(`learn-progress-${lessonId}`);
        return saved ? JSON.parse(saved) : { completed: false, score: 0, bestScore: 0 };
    } catch {
        return { completed: false, score: 0, bestScore: 0 };
    }
}

export function saveLessonProgress(lessonId: string, score: number): void {
    const prev = getLessonProgress(lessonId);
    const data = {
        completed: true,
        score,
        bestScore: Math.max(prev.bestScore, score),
    };
    localStorage.setItem(`learn-progress-${lessonId}`, JSON.stringify(data));
}

export function getOverallProgress(): { totalLessons: number; completedLessons: number; averageScore: number } {
    let completed = 0;
    let totalScore = 0;
    LESSONS.forEach(lesson => {
        const progress = getLessonProgress(lesson.id);
        if (progress.completed) {
            completed++;
            totalScore += progress.bestScore;
        }
    });
    return {
        totalLessons: LESSONS.length,
        completedLessons: completed,
        averageScore: completed > 0 ? Math.round(totalScore / completed) : 0,
    };
}
