// Structured lessons for the Learn tab
// Rebuilt entirely from "A Handbook of the Kavirondo (Dholuo) Language"
// by the Fathers of St. Joseph's Society (Mill-Hill, London), 1920

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
    CARDINAL_NUMBERS,
    ALPHABET,
    INTERJECTIONS,
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
    ALPHABET as ALPHABET_REF,
    CONVERSATION_GENERAL,
    CONVERSATION_HOUSEHOLD,
    CONVERSATION_HEALTH,
    CONVERSATION_WORK,
    CONVERSATION_TRAVEL,
    CONVERSATION_VILLAGE,
    DAYS_OF_WEEK,
    VERB_TO_BE,
    VERB_TO_HAVE,
    PASSIVE_VOICE,
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
    { id: 'basics', name: 'Basics', icon: '🌱', description: 'Start here — alphabet, greetings & essentials', color: '#4CAF50' },
    { id: 'grammar', name: 'Grammar', icon: '📐', description: 'Nouns, pronouns, tenses & sentence structure', color: '#2196F3' },
    { id: 'vocabulary', name: 'Vocabulary', icon: '📖', description: 'Words for everyday life', color: '#FF9800' },
    { id: 'culture', name: 'Culture', icon: '🏺', description: 'Proverbs, expressions & traditions', color: '#9C27B0' },
    { id: 'conversation', name: 'Conversation', icon: '💬', description: 'Real-world dialogue practice', color: '#E91E63' },
];

// ============================================================
// LESSONS
// ============================================================

export const LESSONS: Lesson[] = [
    // ══════════════════════════════════════════════
    // ── BASICS ────────────────────────────────────
    // ══════════════════════════════════════════════

    {
        id: 'alphabet-pronunciation',
        title: 'The Dholuo Alphabet',
        description: 'Learn the consonants, vowels, and special sounds of Dholuo',
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
                english: `Special consonant: ${c.pronunciation}`,
                example: c.example,
            })),
        ],
        exercises: [
            { type: 'choice', question: 'How is "dh" pronounced in Dholuo?', options: ['Like "d" in dog', 'Like "th" in "though"', 'Like "sh" in ship', 'Like "ch" in church'], answer: 'Like "th" in "though"' },
            { type: 'choice', question: 'How many vowels does Dholuo have?', options: ['3', '4', '5', '7'], answer: '5' },
            { type: 'fill', question: '"Ng\'" is pronounced like "ng" in the word _____', answer: 'song', hint: 'A musical word' },
            { type: 'choice', question: '"Ny" as in "Nyako" is pronounced as...', options: ['Two separate sounds', 'One sound', 'Silent "n"', 'Like "ch"'], answer: 'One sound' },
        ],
        culturalNote: 'The language is called "Dholuo" (Dho = mouth/language + Luo = the people). The "dh" sound is essential — it appears in foundational words like dhiyo (to go), dhako (woman), and dhok (cattle/mouth).',
    },

    {
        id: 'greetings',
        title: 'Greetings & Salutations',
        description: 'Learn the traditional Dholuo greetings from the Handbook',
        icon: '👋',
        level: 'beginner',
        category: 'basics',
        cards: GREETINGS.map(g => ({
            luo: g.luo,
            english: g.english,
            response: g.response,
            hint: `Reply: ${g.response}`,
        })),
        exercises: [
            { type: 'choice', question: '"Misawa" means...', options: ['Goodbye', 'Peace / Hello', 'Thank you', 'How are you?'], answer: 'Peace / Hello' },
            { type: 'choice', question: 'What is the reply to "Inindo nade?"', options: ['Misawa ahinya', 'Anindo maber', 'Ariyo maber', 'Inindi'], answer: 'Anindo maber' },
            { type: 'fill', question: '"Iriyo nade?" means "How are _____?"', answer: 'you', hint: 'Used during the day' },
            { type: 'match', question: '"Inindi" means...', options: ['Hello', 'How are you?', 'Goodbye / Sleep well', 'Thank you'], answer: 'Goodbye / Sleep well' },
            { type: 'choice', question: '"Nyasaye riti" means...', options: ['God is great', 'God loves you', 'May God protect you', 'Thank God'], answer: 'May God protect you' },
        ],
        culturalNote: 'In Luo culture, greetings are sacred. You must always greet before starting any conversation. "Misawa" (Peace!) can be used any time of day. "Inindo nade?" (How did you sleep?) is the morning greeting. "Iriyo nade?" (How are you going?) is for daytime.',
    },

    {
        id: 'numbers',
        title: 'Numbers 1–100',
        description: 'The Dholuo counting system from the Handbook',
        icon: '🔢',
        level: 'beginner',
        category: 'basics',
        cards: CARDINAL_NUMBERS.map(n => ({
            luo: n.luo,
            english: `${n.number} (${n.english})`,
        })),
        exercises: [
            { type: 'choice', question: 'What is "5" in Dholuo?', options: ['Adek', 'Abich', 'Auchiel', 'Ariyo'], answer: 'Abich' },
            { type: 'choice', question: '"Apar" means...', options: ['8', '9', '10', '20'], answer: '10' },
            { type: 'fill', question: '"Piero ariyo" = _____', answer: 'Twenty', hint: 'Tens × two' },
            { type: 'match', question: '"Ongachiel" means...', options: ['Six', 'Seven', 'Eight', 'Nine (one missing from ten)'], answer: 'Nine (one missing from ten)' },
            { type: 'order', question: 'Put in order: 1, 2, 3', options: ['Ariyo', 'Achiel', 'Adek'], answer: 'Achiel,Ariyo,Adek' },
        ],
        culturalNote: 'The Luo counting system is base-10. Numbers 6-9 are built from 5 + smaller numbers: Auchiel (6) = abich g\'achiel (five-one), Abiriyo (7) = abich g\'ariyo (five-two). "Piero" means "tens" — so Piero adek = 30. For hundreds, the Kiswahili "mia" is commonly used.',
    },

    {
        id: 'time-expressions',
        title: 'Time & Days',
        description: 'Express time, days of the week, and daily rhythms',
        icon: '⏰',
        level: 'beginner',
        category: 'basics',
        cards: [
            ...TIME_EXPRESSIONS.slice(0, 12).map(t => ({ luo: t.luo, english: t.english })),
            ...DAYS_OF_WEEK.map(d => ({
                luo: d.dholuo,
                english: d.english,
                hint: `Literally: "${d.literal}"`,
            })),
        ],
        exercises: [
            { type: 'choice', question: 'How do you say "Today" in Dholuo?', options: ['Kawono', 'Nende', 'Kiny', 'Nyoro'], answer: 'Nende' },
            { type: 'choice', question: '"Kiny" means...', options: ['Yesterday', 'Today', 'Tomorrow', 'Now'], answer: 'Tomorrow' },
            { type: 'choice', question: 'What is Monday in Dholuo?', options: ['Tich ariyo', 'Wuok tich', 'Tich adek', 'Tich abich'], answer: 'Wuok tich' },
            { type: 'fill', question: '"Nyoro" means _____', answer: 'Yesterday', hint: 'The day before today' },
            { type: 'choice', question: '"Orucha" means...', options: ['Day before yesterday', 'Last week', 'Day after tomorrow', 'Next month'], answer: 'Day after tomorrow' },
        ],
        culturalNote: 'Luo day names follow a work-counting pattern: Monday is "Wuok tich" (start of work), and Tuesday-Friday count workdays. Saturday is "Chieng\' ngeso" (day of shaving). The Handbook notes that adverbs of time like "Yande" (formerly), "Chon" (long ago), and "Nende" (today) are used with the present tense.',
    },

    {
        id: 'question-words',
        title: 'Asking Questions',
        description: 'Master the interrogative pronouns from the Handbook',
        icon: '❓',
        level: 'beginner',
        category: 'basics',
        cards: QUESTION_WORDS.map(q => ({
            luo: q.luo,
            english: q.english,
            example: q.usage,
        })),
        exercises: [
            { type: 'choice', question: '"Ang\'o" means...', options: ['Who?', 'What?', 'Where?', 'When?'], answer: 'What?' },
            { type: 'choice', question: 'How do you ask "Where?" in Dholuo?', options: ['Nade', 'Kanye', 'Adi', "Ng'a"], answer: 'Kanye' },
            { type: 'match', question: '"Karang\'o" means...', options: ['What?', 'How?', 'When?', 'Why?'], answer: 'When?' },
            { type: 'fill', question: '"In ng\'a?" means "Who are _____?"', answer: 'you', hint: 'Second person' },
            { type: 'choice', question: '"Adi" asks about...', options: ['Location', 'Reason', 'Quantity', 'Manner'], answer: 'Quantity' },
        ],
        culturalNote: 'The Handbook notes an important distinction: "Ng\'a" is used for singular "who" while "Ng\'a gini" is plural. Also, "Marang\'o" (why) generally begins a sentence, while "N\'ang\'o" stands at the end.',
    },

    // ══════════════════════════════════════════════
    // ── GRAMMAR ──────────────────────────────────
    // ══════════════════════════════════════════════

    {
        id: 'nouns-gender-article',
        title: 'Nouns: Gender & Articles',
        description: 'How Dholuo handles gender, articles, and noun classes',
        icon: '📝',
        level: 'beginner',
        category: 'grammar',
        cards: [
            { luo: 'Dhano', english: 'A man', hint: 'Common noun' },
            { luo: 'Dhako', english: 'A woman', hint: 'Different word, not a suffix change' },
            { luo: 'Woyi (Wowi)', english: 'A boy', hint: 'Male youth' },
            { luo: 'Nyako', english: 'A girl', hint: 'Female youth' },
            { luo: 'Ruath', english: 'A bull', hint: 'Animals also have separate words' },
            { luo: 'Dwasi', english: 'A cow' },
            { luo: 'Nyuok', english: 'He-goat' },
            { luo: 'Sewini', english: 'She-goat' },
            { luo: 'Gweno mathwon', english: 'A cock (male chicken)', hint: 'Mathwon = male (for animals)' },
            { luo: 'Gweno masi', english: 'A hen (female chicken)', hint: 'Masi/Si = female (for animals)' },
        ],
        exercises: [
            { type: 'choice', question: 'How is gender expressed in Dholuo nouns?', options: ['By suffixes', 'By different words', 'By tone', 'By articles'], answer: 'By different words' },
            { type: 'choice', question: '"Mathwon" indicates...', options: ['Female', 'Male', 'Young', 'Old'], answer: 'Male' },
            { type: 'fill', question: '"Dhako" means _____', answer: 'woman', hint: 'Female adult' },
            { type: 'choice', question: 'Does Dholuo have definite articles like "the"?', options: ['Yes', 'No, but demonstratives serve this purpose', 'Only in formal speech', 'Yes, but only for people'], answer: 'No, but demonstratives serve this purpose' },
        ],
        culturalNote: 'The Handbook states: "There is no properly defined gender in Nilotic." Instead of changing suffixes (like English -ess), Dholuo uses entirely different words for male and female. For animals, "mathwon" (male) and "masi/si" (female) are added after the animal name.',
    },

    {
        id: 'pronouns',
        title: 'Personal Pronouns',
        description: 'Standalone & verb-attached pronouns from the Handbook',
        icon: '👤',
        level: 'beginner',
        category: 'grammar',
        cards: [
            ...PERSONAL_PRONOUNS.separable.map(p => ({
                luo: p.luo,
                english: p.english,
                hint: 'Standalone (separable) pronoun',
            })),
            ...PERSONAL_PRONOUNS.inseparable.map(p => ({
                luo: `${p.prefix}-`,
                english: `${p.person} (verb prefix)`,
                example: p.example,
                hint: 'Attached to verbs (inseparable)',
            })),
        ],
        exercises: [
            { type: 'choice', question: '"An" means...', options: ['You', 'I/Me', 'He/She', 'We'], answer: 'I/Me' },
            { type: 'choice', question: 'Which prefix means "I" when attached to a verb?', options: ['i-', 'a-', 'o-', 'wa-'], answer: 'a-' },
            { type: 'match', question: '"Wan" means...', options: ['I', 'You', 'We', 'They'], answer: 'We' },
            { type: 'fill', question: '"Obiro" means "He/She _____"', answer: 'comes', hint: 'O- = he/she' },
            { type: 'choice', question: '"Gin" means...', options: ['He', 'We', 'You (pl)', 'They'], answer: 'They' },
        ],
        culturalNote: 'The Handbook explains two types: "separable" pronouns (standalone: An, In, En, Wan, Un, Gin) and "inseparable" pronouns (attached to verbs: a-, i-, o-, wa-, u-, gi-). The objective 3rd person singular is "e" or "go" — He loves me: Oheroa. I love him: Aheroe.',
    },

    {
        id: 'possessives',
        title: 'Possessive Forms',
        description: 'Two suffix systems for showing ownership',
        icon: '🤝',
        level: 'intermediate',
        category: 'grammar',
        cards: [
            ...POSSESSIVE_SUFFIXES_SIMPLE.map(p => ({
                luo: `-${p.suffix}`,
                english: p.person,
                hint: p.description,
            })),
            ...POSSESSIVE_SUFFIXES_EXTENDED.map(p => ({
                luo: `-${p.suffix}`,
                english: `${p.person} (extended)`,
                hint: p.description,
            })),
            { luo: 'Koma', english: 'My chair (Kom + a)', hint: 'Consonant ending → simple suffix' },
            { luo: 'Osiepna', english: 'My friend (Osiep + na)', hint: 'Ending in p → extended suffix' },
            { luo: 'Ludha', english: 'My stick (Luth → Ludh + a)', hint: 'th→dh change + simple suffix' },
            { luo: 'Remba', english: 'My blood (Remo → Remb + a)', hint: 'm+vowel→mb change + simple suffix' },
        ],
        exercises: [
            { type: 'choice', question: 'Which suffix system is used for consonant-ending nouns?', options: ['Extended (-na, -ni, -ne)', 'Simple (-a, -i, -e)', 'Both equally', 'Neither'], answer: 'Simple (-a, -i, -e)' },
            { type: 'choice', question: '"Kora" means "my ___"', options: ['house', 'chest/side', 'knife', 'goat'], answer: 'chest/side' },
            { type: 'fill', question: '"Wuod" + "-a" = _____ (my son)', answer: 'Wuoda', hint: 'Wuod + a' },
            { type: 'choice', question: 'Which suffix means "their"?', options: ['-wa', '-u', '-gi', '-e'], answer: '-gi' },
        ],
        culturalNote: 'The Handbook devotes extensive attention to possessives because the noun changes form when a suffix is added. For beginners: use the plural form of a noun without the final vowel as a guide. E.g., Luth (stick) → pl. Ludhe → My stick = Ludha.',
    },

    {
        id: 'plurals',
        title: 'Singular & Plural',
        description: 'The complex plural system from the Handbook',
        icon: '👥',
        level: 'intermediate',
        category: 'grammar',
        cards: PLURAL_PATTERNS.slice(0, 18).map(p => ({
            luo: `${p.singular} → ${p.plural}`,
            english: p.meaning,
            hint: p.rule,
        })),
        exercises: [
            { type: 'choice', question: 'What is the most common plural suffix?', options: ['-ini', '-ge', '-nde', '-che'], answer: '-ini' },
            { type: 'choice', question: 'What is the plural of "ot" (house)?', options: ['otni', 'udi', 'oti', 'otogi'], answer: 'udi' },
            { type: 'match', question: 'Plural of "dhako" (woman)?', options: ['dhakoni', 'mon', 'dhoke', 'dhagi'], answer: 'mon' },
            { type: 'fill', question: 'The plural of "pala" (knife) is _____', answer: 'pelini', hint: 'Uses the -ini pattern' },
            { type: 'choice', question: '"Ji" is the plural of...', options: ['dhako', "ng'ato", 'woyi', 'ruoth'], answer: "ng'ato" },
        ],
        culturalNote: 'The Handbook admits: "It is well nigh impossible to lay down any definite rules for the formation of the plural." The most common pattern is -ini, but many everyday words have irregular plurals. The "a" of the penultimate often changes to "e" in the plural: Pala → Pelini.',
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
                hint: d.description,
            })),
            ...PLACE_DEMONSTRATIVES.map(p => ({
                luo: p.luo,
                english: p.english,
            })),
        ],
        exercises: [
            { type: 'choice', question: 'To say "this person" add which suffix?', options: ['-cha', '-ni', '-go', '-no'], answer: '-ni' },
            { type: 'choice', question: '"Ka" means...', options: ['There', 'Here', 'That place', 'Which?'], answer: 'Here' },
            { type: 'fill', question: '"Ng\'at_____" with suffix "-no" means "_____ person"', answer: 'that', hint: 'Distant singular' },
            { type: 'choice', question: '"Cha" refers to something...', options: ['Very near', 'Far away / over yonder', 'Just mentioned', 'Unknown'], answer: 'Far away / over yonder' },
        ],
        culturalNote: '"Ni/Ma" refers to something near. "No/Cha" refers to something far. The Handbook notes: "No and Go are also used when speaking of a person or object just mentioned" — similar to how English uses "the" as a weakened demonstrative.',
    },

    {
        id: 'verb-tenses',
        title: 'Verb Tenses Overview',
        description: 'Past, present, future, and perfect tenses',
        icon: '⚡',
        level: 'intermediate',
        category: 'grammar',
        cards: [
            ...VERB_TENSES.map(v => ({
                luo: v.prefix ? `${v.prefix} + verb` : 'prefix + verb',
                english: `${v.tense}`,
                example: v.example,
                hint: v.rule,
            })),
            { luo: 'Hero', english: 'to love (model verb)', hint: 'Root: Her' },
            { luo: 'Biro', english: 'to come', hint: 'Root: Bi' },
            { luo: 'Dhiyo', english: 'to go', hint: 'Root: Dhi' },
            { luo: 'Neno', english: 'to see', hint: 'Root: Ne' },
            { luo: 'Nego', english: 'to kill', hint: 'Root: Neg' },
        ],
        exercises: [
            { type: 'choice', question: 'How is the past tense formed?', options: ['Add -ed', 'Use "ne" before the verb', 'Change the vowel', 'Add "se" before'], answer: 'Use "ne" before the verb' },
            { type: 'choice', question: '"Asehero" means...', options: ['I loved', 'I will love', 'I have loved', 'I love'], answer: 'I have loved' },
            { type: 'fill', question: '"Naher" means "I shall _____"', answer: 'love', hint: 'Future tense of hero' },
            { type: 'choice', question: 'The verb root is formed by dropping the final...', options: ['"a"', '"e"', '"o"', '"i"'], answer: '"o"' },
        ],
        culturalNote: 'The Handbook lists 5 moods: Infinitive, Indicative, Imperative, Subjunctive, and Conditional. The present tense is used for past AND future when "time-words" clarify the meaning. E.g., "Kiny wadhi" = Tomorrow we shall go (present form, future meaning).',
    },

    {
        id: 'verb-conjugation-deep',
        title: 'Full Verb Conjugation',
        description: 'Master all tenses using "hero" (to love) as a model',
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
                hint: 'Ne + prefix + verb',
            })),
            ...VERB_CONJUGATION_HERO.tenses.present_perfect.slice(0, 3).map(v => ({
                luo: v.luo,
                english: `Perfect: ${v.person}`,
                hint: 'Prefix + se + verb',
            })),
            ...VERB_CONJUGATION_HERO.tenses.future.slice(0, 3).map(v => ({
                luo: v.luo,
                english: `Future: ${v.person}`,
                hint: 'Prefix + tense marker + root',
            })),
        ],
        exercises: [
            { type: 'choice', question: '"Ahero" means...', options: ['You love', 'I love', 'He loves', 'They love'], answer: 'I love' },
            { type: 'choice', question: '"Nohero" means...', options: ['I loved', 'He/She loved', 'They loved', 'We loved'], answer: 'He/She loved' },
            { type: 'fill', question: '"I shall love" = _____', answer: 'Naher', hint: 'Na + root' },
            { type: 'choice', question: '"Gihero" — who is the subject?', options: ['I', 'You', 'He/She', 'They'], answer: 'They' },
            { type: 'match', question: '"Asehero" means...', options: ['I loved', 'I have loved', 'I shall love', 'I am loving'], answer: 'I have loved' },
        ],
        culturalNote: 'The Handbook shows that the contracted past form (Nahero, Nihero, Nohero) is more common in conversation than the full form (Ne ahero, Ne ihero, Ne ohero). The present perfect uses "se": Asehero = I have loved (and still do).',
    },

    {
        id: 'negation',
        title: 'Negation & Commands',
        description: 'How to say "no", "not", "don\'t", and "never"',
        icon: '🚫',
        level: 'intermediate',
        category: 'grammar',
        cards: [
            { luo: 'Ok / Oki', english: 'Not (basic negation)', example: 'Ok ahero — I do not love' },
            { luo: 'Dak', english: 'Not / Cannot', example: 'Dak ahero — I do not love' },
            { luo: 'Kik / Kiki', english: 'Do not (prohibition)', example: 'Kik idhi — Do not go' },
            { luo: 'Nyak', english: 'Never (very strong)', example: 'Nyasaye nyak ocha — God is never despised' },
            { luo: "Onge / Ong'e", english: 'There is not / Without', example: "Onge ng'ato — There is nobody" },
            { luo: 'Poki / Podi ki', english: 'Not yet', example: "Pok'obiro — He has not come yet" },
            { luo: 'Her!', english: 'Love! (imperative singular)', hint: 'Just the verb root' },
            { luo: 'Heruru!', english: 'Love! (imperative plural)', hint: 'Root + -uru' },
            { luo: 'Onego obi', english: 'He must come', hint: '"Onego" = must' },
        ],
        exercises: [
            { type: 'choice', question: '"Kik idhi" means...', options: ['Go now', 'Don\'t go', 'Go again', 'Go quickly'], answer: 'Don\'t go' },
            { type: 'choice', question: 'Which negation word means "never"?', options: ['Ok', 'Dak', 'Kik', 'Nyak'], answer: 'Nyak' },
            { type: 'fill', question: '"The negative imperative uses _____ + subjunctive"', answer: 'Kik', hint: 'Prohibition word' },
            { type: 'choice', question: '"Pok\'obiro" means...', options: ['He came', 'He will come', 'He has not come yet', 'He never comes'], answer: 'He has not come yet' },
        ],
        culturalNote: 'The Handbook notes: "In Nilotic very frequently two negations are combined." E.g., "Okdak anene" = I did not see him at all. The subjunctive is used for negative commands instead of a negative imperative: "Kik idhi" (Don\'t go) = literally "May you not go."',
    },

    {
        id: 'reflective-pronouns',
        title: 'Myself, Yourself, Alone',
        description: 'Reflective pronouns and emphasis forms',
        icon: '🪞',
        level: 'intermediate',
        category: 'grammar',
        cards: [
            ...REFLECTIVE_PRONOUNS.map(r => ({ luo: r.luo, english: r.english, hint: '"Won" = owner/self' })),
            ...ALONE_PRONOUNS.map(a => ({ luo: a.luo, english: a.english, hint: '"Kende" = alone' })),
        ],
        exercises: [
            { type: 'choice', question: '"Awon" means...', options: ['Himself', 'Myself', 'Yourself', 'Ourselves'], answer: 'Myself' },
            { type: 'choice', question: '"Kende" means...', options: ['Myself alone', 'Yourself alone', 'He/She alone', 'We alone'], answer: 'He/She alone' },
            { type: 'match', question: '"Ourselves" in Dholuo?', options: ['Awon', 'Wawegi', 'Uwegi', 'Giwegi'], answer: 'Wawegi' },
            { type: 'fill', question: '"Adhi kenda" means "I go _____"', answer: 'alone', hint: 'Kenda = myself/alone' },
        ],
        culturalNote: 'The Handbook explains that "Won" literally means "Owner" — a substantive. "Awon" = my own self. "Kende" literally means "alone" but is used for emphasis like "myself." Compare: "Aherora awon" (I love myself — reflective) vs. "Ahero awon" (I MYSELF love — emphatic).',
    },

    {
        id: 'prepositions-conjunctions',
        title: 'Prepositions & Conjunctions',
        description: 'Connecting words from the Handbook',
        icon: '🔗',
        level: 'intermediate',
        category: 'grammar',
        cards: [
            ...PREPOSITIONS.slice(0, 8).map(p => ({
                luo: p.luo,
                english: p.english,
                example: p.examples[0] || '',
            })),
            ...CONJUNCTIONS.slice(0, 8).map(c => ({
                luo: c.luo,
                english: c.english,
                example: c.examples[0] || '',
            })),
        ],
        exercises: [
            { type: 'choice', question: '"E" as a preposition means...', options: ['with', 'in / at / on', 'from', 'under'], answer: 'in / at / on' },
            { type: 'choice', question: '"Gi" connects...', options: ['Verbs', 'Nouns (= and)', 'Time phrases', 'Sentences'], answer: 'Nouns (= and)' },
            { type: 'fill', question: '"Tedi kuon _____ wacham" = Boil food so that we eat', answer: 'mondo', hint: '"In order that"' },
            { type: 'choice', question: '"To" as a conjunction means...', options: ['And', 'Or', 'But / However', 'Because'], answer: 'But / However' },
        ],
        culturalNote: 'Dholuo has two words for "and": "gi" links nouns (Min gi nyathine = Mother and her child), while "kendo" links verbs/clauses (Negibiro kendo negidhi = They came and went). "To" (but) is used very widely and can express emphasis too: "Tek to tek" = It is truly difficult.',
    },

    {
        id: 'word-building',
        title: 'Word Building with Prefixes',
        description: 'How Ja-, Jo-, Ra-, Ma-, Nya- create new words',
        icon: '🧩',
        level: 'advanced',
        category: 'grammar',
        cards: Object.entries(PREFIXES).map(([prefix, info]) => ({
            luo: `${prefix}-`,
            english: info.meaning,
            example: info.example,
        })),
        exercises: [
            { type: 'choice', question: '"Ja-" means...', options: ['Place of', 'Person who/from', 'People who', 'Thing that'], answer: 'Person who/from' },
            { type: 'choice', question: '"Jo-" is the plural of which prefix?', options: ['Ma-', 'Ja-', 'Ra-', 'Nya-'], answer: 'Ja-' },
            { type: 'fill', question: '"Japuonj" means _____ (person who teaches)', answer: 'Teacher', hint: 'Ja- + puonj (teach)' },
            { type: 'choice', question: '"Nya-" forms...', options: ['Adjectives', 'Diminutives', 'Instruments', 'Agent nouns'], answer: 'Diminutives' },
        ],
        culturalNote: 'The Ja-/Jo- system is extremely productive. Ja-Kisumu = person from Kisumu. Jo-Luo = Luo people. Ja-tedo = cook. The "Ra-" prefix creates instruments (Ragwar = pitchfork, from gwaro = to scratch) and also marks physical defects (Radhoho = leper, Rang\'ol = lame person).',
    },

    {
        id: 'reflexive-reciprocal',
        title: 'Reflexive & Reciprocal Verbs',
        description: 'Actions done to oneself or to each other',
        icon: '🔄',
        level: 'advanced',
        category: 'grammar',
        cards: [
            ...REFLEXIVE_VERBS.examples.map(r => ({
                luo: `${r.active} → ${r.reflexive}`,
                english: 'Add -re/-ore to make reflexive',
            })),
            ...REFLEXIVE_VERBS.person_markers.map(r => ({
                luo: r.suffix,
                english: r.person,
                example: r.example,
            })),
        ],
        exercises: [
            { type: 'choice', question: 'How do you form a reflexive verb?', options: ['Add "re" or "ore"', 'Add "ni"', 'Change the prefix', 'Double the root'], answer: 'Add "re" or "ore"' },
            { type: 'choice', question: '"Lwokore" means...', options: ['To wash something', 'To bathe (wash oneself)', 'To be washed', 'To wash together'], answer: 'To bathe (wash oneself)' },
            { type: 'fill', question: '"Waherore" means "We love _____ _____"', answer: 'one another', hint: 'Reciprocal meaning' },
            { type: 'choice', question: '"Puonjore" means...', options: ['To teach', 'To be taught', 'To practise / learn', 'To teach each other'], answer: 'To practise / learn' },
        ],
        culturalNote: 'The Handbook notes many verbs that are reflexive in Dholuo but not in English: Lwokore (to bathe), Lokore (to turn), Chokore (to assemble), Rwakore (to dress), Gonyore (to undress). The reciprocal ("each other") uses the same reflexive form in the plural.',
    },

    // ══════════════════════════════════════════════
    // ── VOCABULARY ───────────────────────────────
    // ══════════════════════════════════════════════

    {
        id: 'family',
        title: 'Family Members',
        description: 'Words for family relationships from the Handbook',
        icon: '👨‍👩‍👧‍👦',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Won / Wuoro', english: 'Father', hint: 'Won = father of' },
            { luo: 'Min / Mama', english: 'Mother', hint: 'Min = mother of' },
            { luo: 'Woyi / Wuod', english: 'Son / Boy' },
            { luo: 'Nyako', english: 'Girl / Daughter' },
            { luo: 'Nyathi', english: 'Child' },
            { luo: 'Omin', english: 'Brother', hint: 'Omera = my brother' },
            { luo: 'Nyamin', english: 'Sister', hint: 'Nyamera = my sister' },
            { luo: 'Dayo', english: 'Grandmother' },
            { luo: 'Kwar', english: 'Grandfather / Ancestor' },
            { luo: 'Chi', english: 'Wife', hint: 'Chi Petrus = Peter\'s wife' },
            { luo: 'Chwo', english: 'Husband', hint: 'Chwor Maria = Maria\'s husband' },
            { luo: 'Nyakwar', english: 'Grandchild' },
            { luo: 'Owadwa', english: 'My relation / Kinsman' },
        ],
        exercises: [
            { type: 'choice', question: '"Dayo" means...', options: ['Mother', 'Grandmother', 'Aunt', 'Sister'], answer: 'Grandmother' },
            { type: 'choice', question: 'How do you say "child" in Dholuo?', options: ['Woyi', 'Nyako', 'Nyathi', 'Owadwa'], answer: 'Nyathi' },
            { type: 'match', question: '"Kwar" means...', options: ['Father', 'Grandfather/Ancestor', 'Uncle', 'Brother'], answer: 'Grandfather/Ancestor' },
            { type: 'fill', question: '"Chi" means _____', answer: 'Wife', hint: 'Female spouse' },
        ],
        culturalNote: 'The Handbook shows the irregular construct possessive for family: Chi Petrus (Peter\'s wife), Wodi Nyasaye (God\'s son), Nyar Seme (a girl from Seme). "Omin" (brother) and "Nyamin" (sister) follow the same pattern as "Min" (mother) for possessives.',
    },

    {
        id: 'animals',
        title: 'Animals',
        description: 'Domestic and wild animals from the Handbook',
        icon: '🦁',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Guok', english: 'Dog', hint: 'Pl: Guogi' },
            { luo: "Dhiang'", english: 'Cow / Cattle', hint: 'Pl: Dhok' },
            { luo: 'Ruath', english: 'Bull' },
            { luo: 'Dwasi', english: 'Cow (female)', hint: 'Pl: Dwesini' },
            { luo: 'Roya', english: 'Heifer' },
            { luo: 'Diel', english: 'Goat', hint: 'Pl: Diek' },
            { luo: 'Gweno', english: 'Chicken / Fowl', hint: 'Pl: Gwen' },
            { luo: 'Ondiek', english: 'Hyena', hint: 'Pl: Ondiegi' },
            { luo: 'Kwach', english: 'Leopard', hint: 'Pl: Kweye' },
            { luo: 'Sibuor', english: 'Lion' },
            { luo: 'Apwoyo', english: 'Rabbit / Hare', hint: 'Pl: Apwoche' },
            { luo: 'Thuol', english: 'Snake' },
            { luo: 'Rech', english: 'Fish' },
            { luo: 'Winyo', english: 'Bird' },
            { luo: 'Jowi', english: 'Buffalo', hint: 'Pl: Jope' },
            { luo: 'Omuga', english: 'Rhinoceros', hint: 'Pl: Omuke' },
            { luo: "Nyang'", english: 'Crocodile' },
            { luo: 'Oyieyo', english: 'Rat' },
        ],
        exercises: [
            { type: 'choice', question: '"Kwach" means...', options: ['Dog', 'Hyena', 'Leopard', 'Lion'], answer: 'Leopard' },
            { type: 'choice', question: '"Dhok" is the plural of...', options: ['Dhako', "Dhiang'", 'Diel', 'Dwasi'], answer: "Dhiang'" },
            { type: 'match', question: '"Jowi" means...', options: ['Goat', 'Sheep', 'Buffalo', 'Donkey'], answer: 'Buffalo' },
            { type: 'fill', question: '"Gweno" means _____', answer: 'Chicken', hint: 'Common farmyard bird' },
        ],
        culturalNote: 'Cattle (dhiang\'/dhok) are central to Luo culture. The Handbook shows different words for bull (Ruath), cow (Dwasi), heifer (Roya), and calf (Nyaroya). The hare (Apwoyo) appears frequently in traditional Luo folklore as a trickster figure.',
    },

    {
        id: 'body-parts',
        title: 'Body Parts',
        description: 'Words for parts of the human body',
        icon: '🫁',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Wich / Wi', english: 'Head', hint: 'Pl: Wiye' },
            { luo: "Wang'", english: 'Face / Eye', hint: 'Pl: Wenge' },
            { luo: 'It', english: 'Ear', hint: 'Pl: Ite' },
            { luo: 'Dhok / Dho', english: 'Mouth' },
            { luo: 'Lak', english: 'Tooth', hint: 'Pl: Leke' },
            { luo: 'Lep', english: 'Tongue' },
            { luo: 'Lwedo', english: 'Hand / Arm', hint: 'Pl: Lwete' },
            { luo: 'Tielo', english: 'Leg / Foot' },
            { luo: 'Kor', english: 'Chest / Side' },
            { luo: 'Em', english: 'Thigh', hint: 'Pl: Embe' },
            { luo: 'Chogo', english: 'Bone', hint: 'Pl: Choke' },
            { luo: 'Remo', english: 'Blood' },
            { luo: 'Ringruok', english: 'Body' },
            { luo: 'Yie wich', english: 'Hair (of the head)' },
            { luo: 'Kogono', english: 'Nail (finger/toe)', hint: 'Pl: Koke' },
        ],
        exercises: [
            { type: 'choice', question: '"Wich" means...', options: ['Eye', 'Head', 'Ear', 'Nose'], answer: 'Head' },
            { type: 'choice', question: 'How do you say "hand" in Dholuo?', options: ['Tielo', 'Lwedo', 'Kor', 'Em'], answer: 'Lwedo' },
            { type: 'match', question: '"Lep" means...', options: ['Tooth', 'Tongue', 'Lip', 'Neck'], answer: 'Tongue' },
            { type: 'fill', question: '"Remo" means _____', answer: 'Blood', hint: 'Red liquid in the body' },
        ],
    },

    {
        id: 'food-drink',
        title: 'Food & Drink',
        description: 'Words for meals, food, and beverages from the Handbook',
        icon: '🍲',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Chiemo', english: 'Food', hint: 'Chiemb guok = the dog\'s food' },
            { luo: 'Pi', english: 'Water', hint: 'Pl: Pige' },
            { luo: 'Chak', english: 'Milk', hint: "Cha dhiang' = cow's milk" },
            { luo: 'Kuon', english: 'Ugali / Matama porridge', hint: 'Staple food' },
            { luo: 'Bel', english: 'Matama / Millet' },
            { luo: 'Kal', english: 'Wimbi (finger millet)' },
            { luo: "Ring'o", english: 'Meat' },
            { luo: 'Rech', english: 'Fish' },
            { luo: 'Ndawa', english: 'Tobacco' },
            { luo: 'Chai', english: 'Tea' },
            { luo: 'Rabuon', english: 'Potato / Sweet potato' },
            { luo: 'Rabolo', english: 'Banana' },
            { luo: "Kong'o", english: 'Beer' },
            { luo: 'Mo', english: 'Fat / Oil', hint: "Mor dhiang' = butter" },
        ],
        exercises: [
            { type: 'choice', question: '"Kuon" is...', options: ['Rice', 'Ugali/Porridge', 'Bread', 'Soup'], answer: 'Ugali/Porridge' },
            { type: 'choice', question: 'How do you say "water" in Dholuo?', options: ['Chak', 'Pi', 'Mo', 'Chai'], answer: 'Pi' },
            { type: 'match', question: '"Bel" means...', options: ['Meat', 'Fish', 'Matama/Millet', 'Banana'], answer: 'Matama/Millet' },
            { type: 'fill', question: '"Ring\'o" means _____', answer: 'Meat', hint: 'Protein from animals' },
        ],
        culturalNote: 'The Handbook mentions matama (bel), wimbi (kal), and fish (rech) as staple foods. "Kuon" refers to the matama porridge (ugali). The construct possessive is used for food: "Chiemb guok" = the food of the dog, "Cha dhiang\'" = the milk of a cow.',
    },

    {
        id: 'nature',
        title: 'Nature & Weather',
        description: 'The natural world in the Handbook vocabulary',
        icon: '🌿',
        level: 'intermediate',
        category: 'vocabulary',
        cards: [
            { luo: "Chieng'", english: 'Sun / Day', hint: 'Pl: Ndalo' },
            { luo: 'Dwe', english: 'Moon / Month', hint: 'Pl: Dweye' },
            { luo: 'Sulwe', english: 'Star', hint: 'Pl: Sulini' },
            { luo: 'Polo', english: 'Sky / Heaven' },
            { luo: 'Piny', english: 'Earth / Ground / Country', hint: 'Pl: Pinje' },
            { luo: 'Nam', english: 'Lake / Sea' },
            { luo: 'Aora', english: 'River', hint: 'Pl: Aore' },
            { luo: 'Got', english: 'Mountain / Hill', hint: 'Pl: Gode' },
            { luo: 'Koth', english: 'Rain', hint: 'Koth chwe = it is raining' },
            { luo: 'Yamo', english: 'Wind' },
            { luo: 'Yath', english: 'Tree / Medicine', hint: 'Pl: Yedhe (construct: Yadhe)' },
            { luo: 'Lum', english: 'Grass' },
            { luo: 'Bungu', english: 'Forest' },
            { luo: 'Mach', english: 'Fire' },
        ],
        exercises: [
            { type: 'choice', question: '"Got" means...', options: ['River', 'Mountain', 'Lake', 'Forest'], answer: 'Mountain' },
            { type: 'choice', question: '"Koth chwe" means...', options: ['The rain stopped', 'It is raining', 'Rain is coming', 'Heavy rain'], answer: 'It is raining' },
            { type: 'match', question: '"Piny" means...', options: ['Sky', 'Earth/Country', 'Rain', 'Wind'], answer: 'Earth/Country' },
            { type: 'fill', question: '"Yath" means both tree and _____', answer: 'medicine', hint: 'Traditional healing comes from trees' },
        ],
    },

    {
        id: 'home-village',
        title: 'Home & Village',
        description: 'Words for house, village, and home life',
        icon: '🏠',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            { luo: 'Ot', english: 'House', hint: 'Pl: Udi' },
            { luo: 'Dala / Pacho', english: 'Village / Home' },
            { luo: 'Puodho', english: 'Garden', hint: 'Pl: Puothe' },
            { luo: 'Kendo', english: 'Fireplace' },
            { luo: 'Tado', english: 'Roof', hint: 'Pl: Tedini' },
            { luo: 'Dhoot', english: 'Door' },
            { luo: 'Bur', english: 'Hole', hint: 'Pl: Buche' },
            { luo: 'Yo', english: 'Road / Path', hint: 'Pl: Yore' },
            { luo: 'Kom', english: 'Chair' },
            { luo: 'Kitanda', english: 'Bed' },
            { luo: 'Bop', english: 'Earthen shelf' },
            { luo: 'Pala', english: 'Knife', hint: 'Pl: Pelini' },
            { luo: 'Kwer', english: 'Hoe' },
            { luo: 'Tong\'', english: 'Spear' },
            { luo: 'Luth', english: 'Stick', hint: 'Pl: Ludhe' },
        ],
        exercises: [
            { type: 'choice', question: '"Ot" means...', options: ['Village', 'House', 'Garden', 'Road'], answer: 'House' },
            { type: 'choice', question: 'What is the plural of "ot" (house)?', options: ['Oti', 'Udi', 'Otni', 'Udhi'], answer: 'Udi' },
            { type: 'fill', question: '"Dala" or "Pacho" means _____', answer: 'Village', hint: 'Where the community lives' },
            { type: 'match', question: '"Kwer" means...', options: ['Knife', 'Spear', 'Hoe', 'Stick'], answer: 'Hoe' },
        ],
    },

    {
        id: 'adverbs',
        title: 'Adverbs',
        description: 'How to say fast, slow, well, badly, very, near, far',
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
            { type: 'match', question: '"Maber" means...', options: ['Badly', 'Well/Good', 'Slowly', 'Far'], answer: 'Well/Good' },
            { type: 'fill', question: '"Moloyo" means _____', answer: 'Exceedingly', hint: 'Beyond very' },
        ],
        culturalNote: 'The Handbook explains that Dholuo adverbs are formed from abstract nouns by prefixing "ma": Ber (goodness) → Maber (well), Rach (badness) → Marach (badly), Tek (hardness) → Matek (hard). These are identical to adjectives but do not change in the plural.',
    },

    {
        id: 'colors-adjectives',
        title: 'Colors & Adjectives',
        description: 'Describing things — colors, sizes, and qualities',
        icon: '🎨',
        level: 'beginner',
        category: 'vocabulary',
        cards: [
            ...ADJECTIVE_FORMATION.plurals.map(a => ({
                luo: a.singular,
                english: a.meaning.split(' → ')[0],
                hint: `Plural: ${a.plural}`,
            })),
            ...ADJECTIVE_FORMATION.colors.masculine.map(c => ({
                luo: c.luo,
                english: c.english,
            })),
        ],
        exercises: [
            { type: 'choice', question: '"Marachar" means...', options: ['Black', 'White', 'Red', 'Green'], answer: 'White' },
            { type: 'choice', question: 'Adjectives used attributively are preceded by...', options: ['"ka"', '"ma"', '"ni"', '"ja"'], answer: '"ma"' },
            { type: 'fill', question: '"Dhano _____" = A good man', answer: 'maber', hint: 'Good/beautiful with adjective marker' },
            { type: 'choice', question: 'The plural of "maber" (good) is...', options: ['mabeyo', 'maberi', 'mabere', 'maberini'], answer: 'mabeyo' },
        ],
        culturalNote: 'The Handbook notes that Dholuo has different color words for masculine and feminine: Marachar (white, male) vs. Madibo (white, female). Adjectives always follow the noun: "Dhano maber" = A good man. Only a few adjectives change in the plural.',
    },

    // ══════════════════════════════════════════════
    // ── CULTURE ──────────────────────────────────
    // ══════════════════════════════════════════════

    {
        id: 'naming-traditions',
        title: 'Luo Naming Traditions',
        description: 'How Luo names encode gender, time, and circumstances',
        icon: '📛',
        level: 'beginner',
        category: 'culture',
        cards: [
            { luo: 'O- (male prefix)', english: 'Male names start with "O"', example: 'Opiyo, Otieno, Okello' },
            { luo: 'A- (female prefix)', english: 'Female names start with "A"', example: 'Akinyi, Apiyo, Adhiambo' },
            { luo: 'Otieno / Atieno', english: 'Born at night', hint: 'Otieno (male) / Atieno (female)' },
            { luo: 'Okinyi / Akinyi', english: 'Born in the morning' },
            { luo: 'Opiyo / Apiyo', english: 'First-born twin' },
            { luo: 'Odongo / Adongo', english: 'Second-born twin' },
            { luo: 'Odhiambo / Adhiambo', english: 'Born in the evening' },
            { luo: 'Okoth / Akoth', english: 'Born during rain' },
            { luo: 'Owuor / Awuor', english: 'Born during harvest' },
        ],
        exercises: [
            { type: 'choice', question: 'Male Luo names typically start with...', options: ['"A"', '"O"', '"Ja"', '"Ny"'], answer: '"O"' },
            { type: 'fill', question: '"Otieno" means born at _____', answer: 'night', hint: 'Otieno = darkness' },
            { type: 'choice', question: '"Okoth" indicates the child was born during...', options: ['Night', 'Morning', 'Rain', 'A journey'], answer: 'Rain' },
            { type: 'match', question: '"Opiyo" means...', options: ['Born at night', 'First-born twin', 'Born in rain', 'Born in morning'], answer: 'First-born twin' },
        ],
        culturalNote: 'The Handbook states: "Proper nouns take \'o\' for a man, and \'a\' for a woman." Luo names are deeply meaningful — they record the time, season, weather, or circumstances of birth. This tradition connects each person to a specific moment in the community\'s story.',
    },

    {
        id: 'interjections-exclamations',
        title: 'Exclamations & Interjections',
        description: 'Express emotion the Luo way!',
        icon: '😮',
        level: 'beginner',
        category: 'culture',
        cards: INTERJECTIONS.map(i => ({
            luo: i.luo,
            english: i.english,
        })),
        exercises: [
            { type: 'choice', question: '"Ero kamano" means...', options: ['Stop!', 'Alas!', 'Thanks / Well done', 'Keep quiet!'], answer: 'Thanks / Well done' },
            { type: 'choice', question: '"Ling\'!" means...', options: ['Come here!', 'Keep quiet!', 'Well done!', 'Oh no!'], answer: 'Keep quiet!' },
            { type: 'fill', question: '"Jong\'!" means _____!', answer: 'Stop', hint: 'Halt!' },
        ],
        culturalNote: 'The Handbook lists many expressive interjections. "Yaye" can express deep sorrow or amazement. "Tho!" sometimes expresses disgust, other times assent. Two special words express completeness: "Tè" (absolutely nothing left) and "Pep" (to the last one): "Dhok notho duto pep" = All the cattle died to the last calf.',
    },

    // ══════════════════════════════════════════════
    // ── CONVERSATION ────────────────────────────
    // ══════════════════════════════════════════════

    {
        id: 'common-expressions',
        title: 'Everyday Expressions',
        description: 'Essential daily phrases from the Handbook phraseology',
        icon: '🗣️',
        level: 'beginner',
        category: 'conversation',
        cards: CONVERSATION_GENERAL.slice(0, 18).map(c => ({
            luo: c.luo,
            english: c.english,
        })),
        exercises: [
            { type: 'choice', question: '"Ero kamano" means...', options: ['Goodbye', 'Thank you / Well done', 'I\'m sorry', 'How are you?'], answer: 'Thank you / Well done' },
            { type: 'choice', question: '"Okawinjo maber" means...', options: ['I don\'t want', 'I don\'t know', 'I don\'t understand', 'I don\'t care'], answer: 'I don\'t understand' },
            { type: 'fill', question: '"Bi ka" means "Come _____"', answer: 'here', hint: 'Ka = here' },
            { type: 'match', question: '"Wiya owil" means...', options: ['I\'m tired', 'I have forgotten', 'I\'m hungry', 'I\'m lost'], answer: 'I have forgotten' },
        ],
        culturalNote: '"Ero kamano" is the most important expression of gratitude in Luo. "Ling\'! We wach!" (Be quiet! Stop talking!) is used firmly but is not necessarily rude. "Oromo" (That\'s enough) is a polite way to end something.',
    },

    {
        id: 'at-the-village',
        title: 'Visiting a Village',
        description: 'Conversations when visiting a Luo village',
        icon: '🏘️',
        level: 'intermediate',
        category: 'conversation',
        cards: CONVERSATION_VILLAGE.map(c => ({
            luo: c.luo,
            english: c.english,
        })),
        exercises: [
            { type: 'choice', question: '"Ruoth ni kanye?" asks about...', options: ['The food', 'The chief\'s location', 'The road', 'The time'], answer: 'The chief\'s location' },
            { type: 'choice', question: '"Pacho okwe?" asks if...', options: ['Food is ready', 'The people are quiet/peaceful', 'The road is safe', 'It will rain'], answer: 'The people are quiet/peaceful' },
            { type: 'fill', question: '"Jo dalani gin _____?" = How many people?', answer: 'adi', hint: 'How many?' },
        ],
        culturalNote: 'When visiting a village, you always ask for the chief (Ruoth) first. The Handbook shows the proper sequence: greet, introduce yourself, ask about the village. "Dalani ng\'ongo?" (Is it an important village?) and "In gi dhok mang\'eny?" (Do you have many cattle?) are standard questions of respect.',
    },

    {
        id: 'health-wellbeing',
        title: 'Health & Wellbeing',
        description: 'Talking about health, illness, and recovery',
        icon: '🏥',
        level: 'intermediate',
        category: 'conversation',
        cards: CONVERSATION_HEALTH.map(c => ({
            luo: c.luo,
            english: c.english,
        })),
        exercises: [
            { type: 'choice', question: '"Ringri ber?" is asking about...', options: ['Your name', 'Your health', 'Your family', 'Your village'], answer: 'Your health' },
            { type: 'choice', question: '"Midusi maka" means...', options: ['I have a headache', 'I have fever', 'I have a cold', 'I am hungry'], answer: 'I have fever' },
            { type: 'fill', question: '"Bada otur" means "My arm is _____"', answer: 'broken', hint: 'Otur = broken/fractured' },
        ],
    },

    {
        id: 'work-employment',
        title: 'Work & Employment',
        description: 'Phrases for working and giving instructions',
        icon: '⚒️',
        level: 'intermediate',
        category: 'conversation',
        cards: CONVERSATION_WORK.map(c => ({
            luo: c.luo,
            english: c.english,
        })),
        exercises: [
            { type: 'choice', question: '"Idwaro tich?" asks...', options: ['Are you tired?', 'Do you want work?', 'Do you have work?', 'Is the work done?'], answer: 'Do you want work?' },
            { type: 'choice', question: '"Tiuru piyo" means...', options: ['Stop working', 'Work hard/fast', 'Come to work', 'Work is done'], answer: 'Work hard/fast' },
            { type: 'fill', question: '"Maki kwer" means "Take a _____"', answer: 'hoe', hint: 'Farm tool for digging' },
        ],
        culturalNote: 'The Handbook\'s work phrases reflect colonial-era labor conditions but the Dholuo vocabulary is authentic and still used. "Ing\'eyo pur?" (Do you understand cultivation?) shows agriculture\'s central role. "Tiuru piyo" (work hard) uses the imperative plural.',
    },

    {
        id: 'travel-journey',
        title: 'Travel & Journey',
        description: 'Phrases for travelling and caravan life',
        icon: '🧳',
        level: 'intermediate',
        category: 'conversation',
        cards: CONVERSATION_TRAVEL.slice(0, 12).map(c => ({
            luo: c.luo,
            english: c.english,
        })),
        exercises: [
            { type: 'choice', question: '"Kiny wanadhi safar" means...', options: ['We arrived today', 'We shall start tomorrow', 'The journey is long', 'Rest here tonight'], answer: 'We shall start tomorrow' },
            { type: 'choice', question: '"Aonge tol" means...', options: ['I have no money', 'I have no food', 'I have no rope', 'I have no water'], answer: 'I have no rope' },
            { type: 'fill', question: '"Wasechopo, yaye!" means "We have _____!"', answer: 'arrived', hint: 'Chopo = to arrive' },
        ],
    },

    {
        id: 'household-commands',
        title: 'Household Commands',
        description: 'Giving instructions around the house',
        icon: '🏡',
        level: 'intermediate',
        category: 'conversation',
        cards: CONVERSATION_HOUSEHOLD.map(c => ({
            luo: c.luo,
            english: c.english,
        })),
        exercises: [
            { type: 'choice', question: '"Adwaro chiemo" means...', options: ['The food is ready', 'I want food', 'Cook the food', 'Where is the food?'], answer: 'I want food' },
            { type: 'choice', question: '"Kel pi maliet" means...', options: ['Bring cold water', 'Bring hot water', 'Boil the water', 'Pour the water'], answer: 'Bring hot water' },
            { type: 'fill', question: '"Lwok sendegi" means "Wash those _____"', answer: 'plates', hint: 'Dishes' },
        ],
    },

    {
        id: 'weather-nature-talk',
        title: 'Weather & Nature Talk',
        description: 'Discussing weather, seasons, and natural events',
        icon: '🌦️',
        level: 'beginner',
        category: 'conversation',
        cards: [
            { luo: "Chieng' kech", english: 'The sun is hot' },
            { luo: 'Koth chwe', english: 'It is raining' },
            { luo: 'Koth ochok', english: 'The rain is over' },
            { luo: 'Polo otimo luoch', english: 'It is cloudy' },
            { luo: 'Luoch oyawore', english: 'It is clearing up' },
            { luo: 'Pi oduore, oklew', english: 'This water is not clear' },
            { luo: 'Dhi, dwar pi malew', english: 'Go and look for clean water' },
            { luo: 'Aonge tol', english: 'I have no rope' },
            { luo: 'Reti, wang\' koth nochwe', english: 'Make haste, it will rain' },
            { luo: 'Aorani tut?', english: 'Is this river deep?' },
            { luo: "D'wanyal yoro?", english: 'Can we wade across?' },
            { luo: "Nyang' sitiye?", english: 'Are there crocodiles?' },
        ],
        exercises: [
            { type: 'choice', question: '"Koth chwe" means...', options: ['It will rain', 'It is raining', 'It rained', 'Rain is good'], answer: 'It is raining' },
            { type: 'fill', question: '"Polo otimo _____" = It is cloudy', answer: 'luoch', hint: 'Clouds' },
            { type: 'choice', question: '"Aorani tut?" asks if the river is...', options: ['Wide', 'Fast', 'Deep', 'Clean'], answer: 'Deep' },
        ],
    },
];
