// Luo Grammar Rules for Smart Suggestions
// Sources: "Dholuo Grammar for Beginners" and "A Handbook of the Kavirondo (Dholuo) Language"

export interface GrammarSuggestion {
    word: string;
    type: 'possessive' | 'demonstrative' | 'plural' | 'related' | 'prefix' | 'conjugation';
    description: string;
    example?: string;
}

// ============================================================
// POSSESSIVE PRONOUNS
// Based on "A Handbook of the Kavirondo (Dholuo) Language"
// ============================================================

// Two suffix systems for possessive pronouns
// First system: a, i, e, wa, u, gi - used with consonant endings
// Second system: na, ni, ne, wa, u, gi - used with certain vowel endings

export const POSSESSIVE_SUFFIXES_SIMPLE = [
    { suffix: 'a', person: 'my', description: '(my)' },
    { suffix: 'i', person: 'your', description: '(your - singular)' },
    { suffix: 'e', person: 'his/her/its', description: '(his/her/its)' },
    { suffix: 'wa', person: 'our', description: '(our)' },
    { suffix: 'u', person: 'your', description: '(your - plural)' },
    { suffix: 'gi', person: 'their', description: '(their)' },
];

export const POSSESSIVE_SUFFIXES_EXTENDED = [
    { suffix: 'na', person: 'my', description: '(my)' },
    { suffix: 'ni', person: 'your', description: '(your - singular)' },
    { suffix: 'ne', person: 'his/her/its', description: '(his/her/its)' },
    { suffix: 'wa', person: 'our', description: '(our)' },
    { suffix: 'u', person: 'your', description: '(your - plural)' },
    { suffix: 'gi', person: 'their', description: '(their)' },
];

// Irregular possessives from the Handbook
// These words have special forms when possessive suffixes are added
export const IRREGULAR_POSSESSIVES: { [key: string]: { [suffix: string]: string } } = {
    // Law (cloth) → Lawa (my cloth)
    'law': { 'a': 'lawa', 'i': 'lawi', 'e': 'lawe', 'wa': 'lawa', 'u': 'lawu', 'gi': 'lawgi' },
    // Pi (water) → Piga (my water)
    'pi': { 'a': 'piga', 'i': 'pigi', 'e': 'pige', 'wa': 'pigwa', 'u': 'pigu', 'gi': 'piggi' },
    // Kwer (hoe) → Kweya (my hoe)
    'kwer': { 'a': 'kweya', 'i': 'kweyi', 'e': 'kweye', 'wa': 'kwerwa', 'u': 'kweru', 'gi': 'kwergi' },
    // Wer (hymn/song) → Wenda (my song)
    'wer': { 'a': 'wenda', 'i': 'wendi', 'e': 'wende', 'wa': 'wendwa', 'u': 'wendu', 'gi': 'wendgi' },
    // Le (axe) → Leya (my axe)
    'le': { 'a': 'leya', 'i': 'leyi', 'e': 'leye', 'wa': 'lewa', 'u': 'leu', 'gi': 'legi' },
    // Yie (canoe/boat) → Yieya (my boat)
    'yie': { 'a': 'yieya', 'i': 'yieyi', 'e': 'yieye', 'wa': 'yiewa', 'u': 'yieu', 'gi': 'yiegi' },
    // Lep (tongue) → Lewa (my tongue)
    'lep': { 'a': 'lewa', 'i': 'lewi', 'e': 'lewe', 'wa': 'lepwa', 'u': 'lepu', 'gi': 'lepgi' },
    // Kor (chest/side) → Kora (my chest)
    'kor': { 'a': 'kora', 'i': 'kori', 'e': 'kore', 'wa': 'korwa', 'u': 'koru', 'gi': 'korgi' },
    // Diel (goat) → Dienda (my goat)
    'diel': { 'a': 'dienda', 'i': 'diendi', 'e': 'diende', 'wa': 'diekwa', 'u': 'dieku', 'gi': 'diekgi' },
    // Gweno (chicken) → Gwenda (my chicken)
    'gweno': { 'a': 'gwenda', 'i': 'gwendi', 'e': 'gwende', 'wa': 'gwendwa', 'u': 'gwendu', 'gi': 'gwendgi' },
    // Chi (wife) → Chiega (my wife)
    'chi': { 'a': 'chiega', 'i': 'chiegi', 'e': 'chiege', 'wa': 'chiewa', 'u': 'chieu', 'gi': 'chiegi' },
    // Wuoyi / Wuod (son) → Wuoda (my son)
    'wuod': { 'a': 'wuoda', 'i': 'wuodi', 'e': 'wuode', 'wa': 'wuodwa', 'u': 'wuodu', 'gi': 'wuodgi' },
    'wuoyi': { 'a': 'wuoda', 'i': 'wuodi', 'e': 'wuode', 'wa': 'wuodwa', 'u': 'wuodu', 'gi': 'wuodgi' },
    // Dayo (grandmother) → Dana (my grandmother)
    'dayo': { 'a': 'dana', 'i': 'dani', 'e': 'dane', 'wa': 'dayowa', 'u': 'dayou', 'gi': 'dayogi' },
    // Won (father) → Wuora (my father)
    'won': { 'a': 'wuora', 'i': 'wuoru', 'e': 'wuon', 'wa': 'wuonwa', 'u': 'wuonu', 'gi': 'wuongi' },
    // Min (mother) → Meru / Mama (my mother)
    'min': { 'a': 'mera', 'i': 'meru', 'e': 'min', 'wa': 'minwa', 'u': 'minu', 'gi': 'mingi' },
    // Nyathi (child) → Nyathina (my child)
    'nyathi': { 'a': 'nyathina', 'i': 'nyathini', 'e': 'nyathine', 'wa': 'nyathiwa', 'u': 'nyathiu', 'gi': 'nyathigi' },
    // Ng'ato (person) → Ng'ata (my person)
    "ng'ato": { 'a': "ng'ata", 'i': "ng'ati", 'e': "ng'ate", 'wa': "ng'atwa", 'u': "ng'atu", 'gi': "ng'atgi" },
};

// Construct Possessive: When the noun changes form before the possessor
// From the Handbook: The construct case changes the noun ending
export const CONSTRUCT_POSSESSIVE_RULES = [
    // Words ending in r/l + vowel → nd
    { pattern: /la$/, replacement: 'nd', example: 'pala → pand (knife of)' },
    { pattern: /lo$/, replacement: 'nd', example: 'kulo → kund (kraal of)' },
    // Words ending in vowel + y + vowel → ch
    { pattern: /(.)[aeiouy]yo$/, replacement: '$1och', example: 'apwoyo → apwoch (rabbit of)' },
    // Words ending in d/dh → t/th (and vice versa)
    { pattern: /dho$/, replacement: 'thi', example: 'puodho → puothi (garden of)' },
    { pattern: /da$/, replacement: 'ta', example: 'tada → tat (roof of)' },
    // Words ending in m + vowel → mb
    { pattern: /mo$/, replacement: 'mb', example: 'remo → remb (blood of)' },
    // Words ending in w → p
    { pattern: /wa$/, replacement: 'p', example: 'ndawa → ndap (tobacco of)' },
    // Words ending in k → g (and vice versa)
    { pattern: /ko$/, replacement: 'g', example: 'loko → log (handle of)' },
    { pattern: /ga$/, replacement: 'k', example: 'puga → puk (gourd of)' },
];

// ============================================================
// DEMONSTRATIVE PRONOUNS
// ============================================================
export const DEMONSTRATIVES = [
    { suffix: 'ni', meaning: 'this', description: '(this)', example: "ng'atni = this person" },
    { suffix: 'cha', meaning: 'that', description: '(that)', example: "ng'atcha = that person" },
];

// Place demonstratives
export const PLACE_DEMONSTRATIVES = [
    { luo: 'ka', english: 'here' },
    { luo: 'kae', english: 'this place' },
    { luo: 'kacha', english: 'there' },
    { luo: 'kachacha', english: 'that place over there' },
];

// ============================================================
// PERSONAL PRONOUNS
// From the Handbook
// ============================================================
export const PERSONAL_PRONOUNS = {
    // Separable (standalone) pronouns
    separable: [
        { luo: 'An', english: 'I, Me' },
        { luo: 'In', english: 'Thou, You (singular)' },
        { luo: 'En', english: 'He, She, It, Him, Her' },
        { luo: 'Wan', english: 'We, Us' },
        { luo: 'Un', english: 'You (plural)' },
        { luo: 'Gin', english: 'They, Them' },
    ],
    // Inseparable (attached to verbs) pronouns
    inseparable: [
        { prefix: 'a', person: '1st singular', example: 'Abiro = I come' },
        { prefix: 'i', person: '2nd singular', example: 'Ibiro = You come' },
        { prefix: 'o', person: '3rd singular', example: 'Obiro = He/She comes' },
        { prefix: 'wa', person: '1st plural', example: 'Wabiro = We come' },
        { prefix: 'u', person: '2nd plural', example: 'Ubiro = You (all) come' },
        { prefix: 'gi', person: '3rd plural', example: 'Gibiro = They come' },
    ],
};

// ============================================================
// REFLECTIVE PRONOUNS
// ============================================================
export const REFLECTIVE_PRONOUNS = [
    { luo: 'Awon', english: 'Myself' },
    { luo: 'Iwon', english: 'Yourself (singular)' },
    { luo: 'Owon', english: 'Himself/Herself/Itself' },
    { luo: 'Wawegi', english: 'Ourselves' },
    { luo: 'Uwegi', english: 'Yourselves' },
    { luo: 'Giwegi', english: 'Themselves' },
];

// Also: kenda = myself/alone, kendi = yourself, kende = himself, etc.
export const ALONE_PRONOUNS = [
    { luo: 'Kenda', english: 'I myself / myself alone' },
    { luo: 'Kendi', english: 'You yourself / yourself alone' },
    { luo: 'Kende', english: 'He/She himself/herself / alone' },
    { luo: 'Kendwa', english: 'We ourselves / ourselves alone' },
    { luo: 'Kendu', english: 'You yourselves / yourselves alone' },
    { luo: 'Kendigi', english: 'They themselves / themselves alone' },
];

// ============================================================
// PLURAL PATTERNS
// From the Handbook - Most common plural is "-ini"
// ============================================================
export const PLURAL_PATTERNS = [
    // Irregular plurals
    { singular: 'nyathi', plural: 'nyithindo', meaning: 'child → children' },
    { singular: 'ot', plural: 'ute', meaning: 'house → houses' },
    { singular: "dhiang'", plural: 'dhok', meaning: 'cow → cattle' },
    { singular: 'guok', plural: 'guogi', meaning: 'dog → dogs' },
    { singular: 'rombo', plural: 'rombe', meaning: 'sheep → sheep (pl)' },
    { singular: 'diel', plural: 'diek', meaning: 'goat → goats' },
    { singular: 'wuoyi', plural: 'yawuoi', meaning: 'boy → boys' },
    { singular: 'nyako', plural: 'nyiri', meaning: 'girl → girls' },
    { singular: 'dhako', plural: 'mon', meaning: 'woman → women' },
    { singular: 'dichuo', plural: 'chuo', meaning: 'man → men' },
    { singular: "ng'ato", plural: 'ji', meaning: 'person → people' },
    { singular: 'pala', plural: 'pelni', meaning: 'knife → knives' },
    { singular: 'ruoth', plural: 'ruodhi', meaning: 'chief → chiefs' },
    { singular: 'ondiek', plural: 'ondiegi', meaning: 'hyena → hyenas' },
    { singular: 'chi', plural: 'mond', meaning: 'wife → wives' },
    { singular: 'dala', plural: 'mier', meaning: 'village → villages' },
    // Regular -ini plurals
    { singular: 'obwolo', plural: 'obwolini', meaning: 'mushroom → mushrooms' },
    { singular: 'siala', plural: 'sielini', meaning: 'tree → trees' },
    { singular: 'asoka', plural: 'asokini', meaning: 'basket → baskets' },
];

// ============================================================
// VERB CONJUGATION
// ============================================================
export const VERB_TENSES = [
    { tense: 'present', prefix: '', example: 'dhi (go)' },
    { tense: 'past (I)', prefix: 'ne a', example: 'ne adhi (I went)' },
    { tense: 'past (you)', prefix: 'ne i', example: 'ne idhi (you went)' },
    { tense: 'past (he/she)', prefix: 'ne o', example: 'ne odhi (he/she went)' },
    { tense: 'future', prefix: 'biro', example: 'abiro dhi (I will go)' },
];

// Reflective verb endings (add -re/-ore)
export const REFLECTIVE_VERB_RULES = [
    { description: 'Add "-re" to form reflective', example: 'Hero (love) → Herore (love oneself)' },
    { description: 'Verbs ending in "-yo" can drop it', example: 'Tweyo (bind) → Twere (bind oneself)' },
];

// ============================================================
// QUESTION WORDS
// ============================================================
export const QUESTION_WORDS = [
    { luo: "Ang'o", english: 'What?', usage: "Ma en ang'o? (What is this?)" },
    { luo: "Ng'a", english: 'Who?', usage: "In ng'a? (Who are you?)" },
    { luo: "Nang'o", english: 'Why?', usage: "Nang'o itamori? (Why do you refuse?)" },
    { luo: 'Nade', english: 'How?', usage: 'In nade? (How are you?)' },
    { luo: 'Adi', english: 'How many?', usage: 'Gin ji adi? (How many people?)' },
    { luo: "Karang'o", english: 'When?', usage: "Ibiro karang'o? (When will you come?)" },
    { luo: 'Kanye', english: 'Where?', usage: 'Idhi kanye? (Where are you going?)' },
];

// ============================================================
// TIME EXPRESSIONS
// ============================================================
export const TIME_EXPRESSIONS = [
    { luo: 'Sani', english: 'Now' },
    { luo: 'Kawuono', english: 'Today' },
    { luo: 'Nyoro', english: 'Yesterday' },
    { luo: 'Kiny', english: 'Tomorrow' },
    { luo: 'Orucha', english: 'Day after tomorrow' },
    { luo: 'Nyocha', english: 'Day before yesterday' },
    { luo: 'Okinyi', english: 'Morning' },
    { luo: "Odiechieng'", english: 'Daytime/Midday' },
    { luo: 'Odhiambo', english: 'Evening' },
    { luo: 'Otieno', english: 'Night' },
];

// ============================================================
// GREETINGS
// ============================================================
export const GREETINGS = [
    { luo: 'Oyawore', english: 'Good morning (to one person)', response: 'Oyawore ahinya' },
    { luo: 'Oyaworeuru', english: 'Good morning (to many)', response: 'Oyaworeuru ahinya' },
    { luo: 'Misawa', english: 'Hello/Good day', response: 'Misawa ahinya' },
    { luo: 'Oyimore', english: 'Good evening', response: 'Oyimore ahinya' },
    { luo: 'Oriti', english: 'Goodbye (God protect you)', response: 'Oriti ahinya' },
    { luo: 'Ber', english: 'Hi', response: 'Ber ahinya' },
];

// ============================================================
// ADVERBS (from Handbook)
// ============================================================
export const ADVERBS = {
    quantity: [
        { luo: "Opong'", english: 'Full' },
        { luo: 'Kore', english: 'Half-full' },
        { luo: 'Mabor', english: 'Far' },
        { luo: "Machiegni", english: 'Near' },
        { luo: 'Ahinya', english: 'Very' },
        { luo: "Ngayang'", english: 'Very much' },
    ],
    manner: [
        { luo: 'Piyo', english: 'Quickly' },
        { luo: 'Mos', english: 'Slowly' },
        { luo: 'Maber', english: 'Well' },
        { luo: 'Marach', english: 'Badly' },
    ],
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Check if a word has an irregular possessive form
 */
export function getIrregularPossessive(word: string, suffixType: string): string | null {
    const wordLower = word.toLowerCase();
    const irregulars = IRREGULAR_POSSESSIVES[wordLower];
    if (irregulars && irregulars[suffixType]) {
        return irregulars[suffixType];
    }
    return null;
}

/**
 * Generate all possessive forms for a word
 */
export function generatePossessiveForms(word: string): { form: string; meaning: string }[] {
    const wordLower = word.toLowerCase();
    const forms: { form: string; meaning: string }[] = [];

    // Check irregular forms first
    if (IRREGULAR_POSSESSIVES[wordLower]) {
        const irregulars = IRREGULAR_POSSESSIVES[wordLower];
        forms.push({ form: irregulars['a'], meaning: 'my' });
        forms.push({ form: irregulars['i'], meaning: 'your' });
        forms.push({ form: irregulars['e'], meaning: 'his/her' });
        forms.push({ form: irregulars['wa'], meaning: 'our' });
        forms.push({ form: irregulars['u'], meaning: 'your (pl.)' });
        forms.push({ form: irregulars['gi'], meaning: 'their' });
        return forms;
    }

    // Generate regular forms
    const lastChar = wordLower[wordLower.length - 1];
    const isVowelEnding = 'aeiou'.includes(lastChar);

    if (isVowelEnding) {
        // Use extended suffixes for vowel endings
        const base = wordLower.slice(0, -1);
        forms.push({ form: base + 'na', meaning: 'my' });
        forms.push({ form: base + 'ni', meaning: 'your' });
        forms.push({ form: base + 'ne', meaning: 'his/her' });
        forms.push({ form: base + 'wa', meaning: 'our' });
        forms.push({ form: base + 'u', meaning: 'your (pl.)' });
        forms.push({ form: base + 'gi', meaning: 'their' });
    } else {
        // Use simple suffixes for consonant endings
        forms.push({ form: wordLower + 'a', meaning: 'my' });
        forms.push({ form: wordLower + 'i', meaning: 'your' });
        forms.push({ form: wordLower + 'e', meaning: 'his/her' });
        forms.push({ form: wordLower + 'wa', meaning: 'our' });
        forms.push({ form: wordLower + 'u', meaning: 'your (pl.)' });
        forms.push({ form: wordLower + 'gi', meaning: 'their' });
    }

    return forms;
}

/**
 * Get related words based on grammar patterns
 */
export function getRelatedWords(word: string): string[] {
    const related: string[] = [];
    const wordLower = word.toLowerCase();

    // Check plurals
    PLURAL_PATTERNS.forEach(({ singular, plural }) => {
        if (wordLower === singular) related.push(plural);
        if (wordLower === plural) related.push(singular);
    });

    // Check Ja-/Jo- patterns
    if (wordLower.startsWith('ja')) {
        related.push('Jo' + wordLower.substring(2));
    }
    if (wordLower.startsWith('jo')) {
        related.push('Ja' + wordLower.substring(2));
    }

    return related;
}

// Export combined POSSESSIVE_SUFFIXES for backward compatibility
export const POSSESSIVE_SUFFIXES = POSSESSIVE_SUFFIXES_SIMPLE;

// Common prefixes that create related words
export const PREFIXES = {
    'Ja': { meaning: 'person who', example: 'Japuonj (teacher - person who teaches)' },
    'Jo': { meaning: 'people who', example: 'Jopuonj (teachers - people who teach)' },
    'Ma': { meaning: 'adjective marker', example: 'Maber (good/beautiful)' },
    'O': { meaning: 'third person past', example: 'Obiro (he/she came)' },
    'A': { meaning: 'first person', example: 'Abiro (I came)' },
    'I': { meaning: 'second person', example: 'Ibiro (you came)' },
};
