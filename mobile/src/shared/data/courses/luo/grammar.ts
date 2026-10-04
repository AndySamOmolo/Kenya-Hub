// Dholuo Grammar Rules — Rebuilt from "A Handbook of the Kavirondo Language"
// by the Fathers of St. Joseph's Society (Mill-Hill, London), 1920
// ============================================================

export interface GrammarSuggestion {
    word: string;
    type: 'possessive' | 'demonstrative' | 'plural' | 'related' | 'prefix' | 'conjugation';
    description: string;
    example?: string;
}

// ============================================================
// ALPHABET & PRONUNCIATION
// From the Handbook, pages 1-4
// ============================================================

export const ALPHABET = {
    consonants: [
        { letter: 'b', pronunciation: 'as in bell', example: 'Bam: to be crooked' },
        { letter: 'ch', pronunciation: 'as Ch in Kiswahili', example: 'Chak: milk' },
        { letter: 'd', pronunciation: 'as in deed', example: 'Dol: Colobus monkey' },
        { letter: 'dh', pronunciation: 'as in "though"', example: 'Dhiyo: to go' },
        { letter: 'f', pronunciation: 'as in food', example: 'Fuwo: to be foolish' },
        { letter: 'g', pronunciation: 'as in gab', example: 'Gamo: to reach over' },
        { letter: 'h', pronunciation: 'as in hat', example: 'Hato: to cut deeply' },
        { letter: 'j', pronunciation: 'as in Kiswahili', example: 'Jaro: to despise' },
        { letter: 'k', pronunciation: 'as in keen', example: 'Kelo: to bring' },
        { letter: 'l', pronunciation: 'as in lid', example: 'Lamo: to worship, adore' },
        { letter: 'm', pronunciation: 'as in man', example: 'Min: mother' },
        { letter: 'n', pronunciation: 'as in nag', example: 'Nego: to kill' },
        { letter: 'p', pronunciation: 'as in pen', example: 'Piny: country' },
        { letter: 'r', pronunciation: 'as in rat', example: 'Ramo: to hurt' },
        { letter: 's', pronunciation: 'as in sing', example: 'Sara: fishbone' },
        { letter: 't', pronunciation: 'as in tell', example: 'Tado: roof' },
        { letter: 'th', pronunciation: 'as in thatch', example: 'Thiedho: to forge' },
    ],
    special_consonants: [
        { letter: 'mb', pronunciation: 'One sound at word start', example: 'Mbiru: a bird' },
        { letter: 'nd', pronunciation: 'One sound at word start', example: 'Ndawa: tobacco' },
        { letter: 'ng', pronunciation: 'Double sound as in "finger"', example: 'Ngege: carp' },
        { letter: "ng'", pronunciation: 'Nasal as "ng" in "song"', example: "Ng'owo: a figtree" },
        { letter: 'ny', pronunciation: 'One sound', example: 'Nyako: girl' },
    ],
    vowels: [
        { letter: 'a', pronunciation: 'as in "father"', example: 'Mako: to hold' },
        { letter: 'e', pronunciation: 'as "a" in "lake"', example: 'Lemo: to pray' },
        { letter: 'i', pronunciation: 'as in "police"', example: 'Limo: to visit' },
        { letter: 'o', pronunciation: 'as "oa" in "coach"', example: 'Moso: to greet' },
        { letter: 'u', pronunciation: 'as in "bull"', example: 'Bur: a hole' },
    ],
};

// ============================================================
// POSSESSIVE PRONOUNS
// From the Handbook, Chapter I, Paragraph 12 & Chapter II
// Two suffix systems
// ============================================================

export const POSSESSIVE_SUFFIXES_SIMPLE = [
    { suffix: 'a', person: 'my', description: '(my) — used with consonant endings' },
    { suffix: 'i', person: 'your', description: '(your - singular)' },
    { suffix: 'e', person: 'his/her/its', description: '(his/her/its)' },
    { suffix: 'wa', person: 'our', description: '(our)' },
    { suffix: 'u', person: 'your', description: '(your - plural)' },
    { suffix: 'gi', person: 'their', description: '(their)' },
];

export const POSSESSIVE_SUFFIXES_EXTENDED = [
    { suffix: 'na', person: 'my', description: '(my) — used with vowel endings & verb-formed nouns' },
    { suffix: 'ni', person: 'your', description: '(your - singular)' },
    { suffix: 'ne', person: 'his/her/its', description: '(his/her/its)' },
    { suffix: 'wa', person: 'our', description: '(our)' },
    { suffix: 'u', person: 'your', description: '(your - plural)' },
    { suffix: 'gi', person: 'their', description: '(their)' },
];

// Irregular possessives from the Handbook pp. 27-29
export const IRREGULAR_POSSESSIVES: { [key: string]: { [suffix: string]: string } } = {
    'law': { 'a': 'lawa', 'i': 'lawi', 'e': 'lawe', 'wa': 'lawa', 'u': 'lawu', 'gi': 'lawgi' },
    'pi': { 'a': 'piga', 'i': 'pigi', 'e': 'pige', 'wa': 'pigwa', 'u': 'pigu', 'gi': 'piggi' },
    'kwer': { 'a': 'kweya', 'i': 'kweyi', 'e': 'kweye', 'wa': 'kwerwa', 'u': 'kweru', 'gi': 'kwergi' },
    'wer': { 'a': 'wenda', 'i': 'wendi', 'e': 'wende', 'wa': 'wendwa', 'u': 'wendu', 'gi': 'wendgi' },
    'le': { 'a': 'leya', 'i': 'leyi', 'e': 'leye', 'wa': 'lewa', 'u': 'leu', 'gi': 'legi' },
    'yie': { 'a': 'yieya', 'i': 'yieyi', 'e': 'yieye', 'wa': 'yiewa', 'u': 'yieu', 'gi': 'yiegi' },
    'lep': { 'a': 'lewa', 'i': 'lewi', 'e': 'lewe', 'wa': 'lepwa', 'u': 'lepu', 'gi': 'lepgi' },
    'kor': { 'a': 'kora', 'i': 'kori', 'e': 'kore', 'wa': 'korwa', 'u': 'koru', 'gi': 'korgi' },
    'diel': { 'a': 'dienda', 'i': 'diendi', 'e': 'diende', 'wa': 'diekwa', 'u': 'dieku', 'gi': 'diekgi' },
    'gweno': { 'a': 'gwenda', 'i': 'gwendi', 'e': 'gwende', 'wa': 'gwendwa', 'u': 'gwendu', 'gi': 'gwendgi' },
    'chi': { 'a': 'chiega', 'i': 'chiegi', 'e': 'chiege', 'wa': 'chiewa', 'u': 'chieu', 'gi': 'chiegi' },
    'wuod': { 'a': 'wuoda', 'i': 'wuodi', 'e': 'wuode', 'wa': 'wuodwa', 'u': 'wuodu', 'gi': 'wuodgi' },
    'wuoyi': { 'a': 'wuoda', 'i': 'wuodi', 'e': 'wuode', 'wa': 'wuodwa', 'u': 'wuodu', 'gi': 'wuodgi' },
    'dayo': { 'a': 'dana', 'i': 'dani', 'e': 'dane', 'wa': 'dayowa', 'u': 'dayou', 'gi': 'dayogi' },
    'won': { 'a': 'wuora', 'i': 'wuoru', 'e': 'wuon', 'wa': 'wuonwa', 'u': 'wuonu', 'gi': 'wuongi' },
    'min': { 'a': 'mera', 'i': 'meru', 'e': 'min', 'wa': 'minwa', 'u': 'minu', 'gi': 'mingi' },
    'nyathi': { 'a': 'nyathina', 'i': 'nyathini', 'e': 'nyathine', 'wa': 'nyathiwa', 'u': 'nyathiu', 'gi': 'nyathigi' },
    "ng'ato": { 'a': "ng'ata", 'i': "ng'ati", 'e': "ng'ate", 'wa': "ng'atwa", 'u': "ng'atu", 'gi': "ng'atgi" },
};

// Construct Possessive Rules from the Handbook, pp. 13-16
export const CONSTRUCT_POSSESSIVE_RULES = [
    { pattern: /la$/, replacement: 'nd', example: 'Pala → Pand (knife of)', rule: 'Words ending in "l" + vowel → nd' },
    { pattern: /lo$/, replacement: 'nd', example: 'Obwolo → Obwond (mushroom of)', rule: 'Words ending in "l" + vowel → nd' },
    { pattern: /yo$/, replacement: 'ch', example: 'Apwoyo → Apwoch (rabbit of)', rule: 'Words ending in vowel + y + vowel → ch' },
    { pattern: /dho$/, replacement: 'thi', example: 'Puodho → Puothi (garden of)', rule: 'Words ending in "dh" → th' },
    { pattern: /do$/, replacement: 't', example: 'Tado → Tat (roof of)', rule: 'Words ending in "d" → t' },
    { pattern: /mo$/, replacement: 'mb', example: 'Remo → Remb (blood of)', rule: 'Words ending in "m" + vowel → mb' },
    { pattern: /wa$/, replacement: 'p', example: 'Ndawa → Ndap (tobacco of)', rule: 'Words ending in "w" → p' },
    { pattern: /k$/, replacement: 'g', example: 'Lok → Log (handle of)', rule: 'Words ending in "k" → g' },
    { pattern: /ga$/, replacement: 'k', example: 'Puga → Puk (gourd of)', rule: 'Words ending in "g" + vowel → k' },
    { pattern: /ch$/, replacement: '', example: 'Kwach → Kwa (leopard of)', rule: 'Words ending in "ch" drop "ch"' },
];

// ============================================================
// DEMONSTRATIVE PRONOUNS
// From the Handbook, Chapter III, Paragraph 4
// ============================================================
export const DEMONSTRATIVES = [
    { suffix: 'ni', meaning: 'this (near)', description: 'Adjective suffix for nearby singular', example: "Ng'atni = this person" },
    { suffix: 'no', meaning: 'that (far)', description: 'Adjective suffix for distant singular', example: "Ng'atno = that person" },
    { suffix: 'gi', meaning: 'these (near)', description: 'Adjective suffix for nearby plural', example: 'Jogi = these people' },
    { suffix: 'go', meaning: 'those (far)', description: 'Adjective suffix for distant plural', example: 'Jogo = those people' },
    { suffix: 'cha', meaning: 'that over yonder', description: 'Points to something far away', example: 'Yath cha = that tree over yonder' },
];

export const DEMONSTRATIVE_SUBSTANTIVES = [
    { luo: 'Ma / Mani', english: 'this (thing)' },
    { luo: 'Magi', english: 'these (things)' },
    { luo: 'Macha / Machacha', english: 'that over yonder' },
    { luo: 'Jali / Jal', english: 'this man' },
    { luo: 'Jalo', english: 'that man' },
    { luo: 'Joka', english: 'those men over there' },
];

export const PLACE_DEMONSTRATIVES = [
    { luo: 'Ka', english: 'Here' },
    { luo: 'Ku', english: 'Here (slightly away)' },
    { luo: 'Cha', english: 'There, yonder' },
    { luo: 'Kucha / Kacha', english: 'There, yonder' },
    { luo: 'Kanye / Kune / Kure / Ere', english: 'Where?' },
    { luo: 'Kanyo / Kuno / Kuro / Eri', english: 'There (answer)' },
    { luo: 'Koni', english: 'This side' },
    { luo: 'Kono', english: 'That side' },
    { luo: 'Kocha', english: 'On the other side' },
];

// ============================================================
// PERSONAL PRONOUNS
// From the Handbook, Chapter III
// ============================================================
export const PERSONAL_PRONOUNS = {
    separable: [
        { luo: 'An', english: 'I, Me' },
        { luo: 'In', english: 'Thou, You (singular)' },
        { luo: 'En', english: 'He, She, It, Him, Her' },
        { luo: 'Wan', english: 'We, Us' },
        { luo: 'Un', english: 'You (plural)' },
        { luo: 'Gin', english: 'They, Them' },
    ],
    inseparable: [
        { prefix: 'a', person: '1st singular (I)', example: 'Ahero = I love' },
        { prefix: 'i', person: '2nd singular (You)', example: 'Ihero = You love' },
        { prefix: 'o', person: '3rd singular (He/She)', example: 'Ohero = He/She loves' },
        { prefix: 'wa', person: '1st plural (We)', example: 'Wahero = We love' },
        { prefix: 'u', person: '2nd plural (You all)', example: 'Uhero = You all love' },
        { prefix: 'gi', person: '3rd plural (They)', example: 'Gihero = They love' },
    ],
};

// ============================================================
// REFLECTIVE PRONOUNS
// From the Handbook, Chapter III, Paragraph 2
// ============================================================
export const REFLECTIVE_PRONOUNS = [
    { luo: 'Awon', english: 'I myself' },
    { luo: 'Iwon', english: 'Thou thyself' },
    { luo: 'Owon', english: 'He/She himself/herself' },
    { luo: 'Wawegi', english: 'We ourselves' },
    { luo: 'Uwegi', english: 'You yourselves' },
    { luo: 'Giwegi', english: 'They themselves' },
];

export const ALONE_PRONOUNS = [
    { luo: 'Kenda', english: 'I myself / alone' },
    { luo: 'Kendi', english: 'You yourself / alone' },
    { luo: 'Kende', english: 'He/She himself/herself / alone' },
    { luo: 'Kendwa', english: 'We ourselves / alone' },
    { luo: 'Kendu', english: 'You yourselves / alone' },
    { luo: 'Kendigi', english: 'They themselves / alone' },
];

// ============================================================
// PLURAL PATTERNS
// From the Handbook, Chapter I, Paragraphs 4-10
// ============================================================
export const PLURAL_PATTERNS = [
    // Rule I: Most common plural in -ini
    { singular: 'obwolo', plural: 'obwolini', meaning: 'mushroom → mushrooms', rule: 'Words ending in l + vowel → -ini' },
    { singular: 'siala', plural: 'sielini', meaning: 'tree → trees', rule: 'Words ending in l + vowel → -ini' },
    { singular: 'asoka', plural: 'asokini', meaning: 'basket → baskets', rule: 'Words ending in -a → -ini' },
    { singular: 'kwesi', plural: 'kwesini', meaning: 'pipe → pipes', rule: 'Words ending in s + vowel → -ini' },
    { singular: 'dwasi', plural: 'dwesini', meaning: 'cow → cows', rule: 'Words ending in s + vowel → -ini' },
    { singular: 'pala', plural: 'pelini', meaning: 'knife → knives', rule: 'Regular with vowel change a→e' },

    // Rule III: Specific consonant endings
    { singular: 'kul', plural: 'kunde', meaning: 'kraal → kraals', rule: 'Words ending in l → -nde' },
    { singular: 'dwol', plural: 'dwonde', meaning: 'voice → voices', rule: 'Words ending in l → -nde' },
    { singular: 'wich', plural: 'wiye', meaning: 'head → heads', rule: 'Words ending in ch → -ye' },
    { singular: 'kwach', plural: 'kweye', meaning: 'leopard → leopards', rule: 'Words ending in ch → -ye' },
    { singular: 'pien', plural: 'piende', meaning: 'hide → hides', rule: 'Words ending in n → -nde' },
    { singular: 'em', plural: 'embe', meaning: 'thigh → thighs', rule: 'Words ending in m → -mbe' },
    { singular: 'olemo', plural: 'olembe', meaning: 'fruit → fruits', rule: 'Words ending in m + vowel → -mbe' },
    { singular: 'got', plural: 'gode', meaning: 'mountain → mountains', rule: 'Words ending in t → -de' },
    { singular: 'luth', plural: 'ludhe', meaning: 'stick → sticks', rule: 'Words ending in th → -dhe' },
    { singular: 'lwedo', plural: 'lwete', meaning: 'hand → hands', rule: 'Words ending in do → -te' },
    { singular: 'puodho', plural: 'puothe', meaning: 'garden → gardens', rule: 'Words ending in dho → -the' },
    { singular: "ong'er", plural: "ong'ech", meaning: 'monkey → monkeys', rule: 'Words ending in r → -che' },
    { singular: 'bur', plural: 'buche', meaning: 'hole → holes', rule: 'Words ending in r → -che' },
    { singular: 'dak', plural: 'dege', meaning: 'pot → pots', rule: 'Words ending in k → -ge' },
    { singular: 'apwoyo', plural: 'apwoche', meaning: 'rabbit → rabbits', rule: 'Words ending in y + vowel → -che' },
    { singular: 'kiew', plural: 'kiepe', meaning: 'furrow → furrows', rule: 'Words ending in w → -pe' },
    { singular: 'piny', plural: 'pinje', meaning: 'country → countries', rule: 'Words ending in ny → -nje' },

    // Irregular plurals — Paragraph 10
    { singular: 'dhano', plural: 'jo', meaning: 'man → people', rule: 'Irregular' },
    { singular: 'dhako', plural: 'mon', meaning: 'woman → women', rule: 'Irregular' },
    { singular: 'woyi', plural: 'yawoyi', meaning: 'boy → boys', rule: 'Irregular' },
    { singular: 'nyako', plural: 'nyiri', meaning: 'girl → girls', rule: 'Irregular' },
    { singular: "ng'ato", plural: 'ji', meaning: 'person → people', rule: 'Irregular' },
    { singular: "dhiang'", plural: 'dhok', meaning: 'cow → cattle', rule: 'Irregular' },
    { singular: 'gweno', plural: 'gwen', meaning: 'fowl → fowls', rule: 'Irregular' },
    { singular: 'ot', plural: 'udi', meaning: 'house → houses', rule: 'Irregular' },
    { singular: 'dala', plural: 'mier', meaning: 'village → villages', rule: 'Irregular' },
    { singular: 'diel', plural: 'diek', meaning: 'goat → goats', rule: 'Irregular' },
    { singular: 'guok', plural: 'guogi', meaning: 'dog → dogs', rule: 'Irregular' },
    { singular: "chieng'", plural: 'ndalo', meaning: 'day → days/times', rule: 'Irregular' },
    { singular: 'yo', plural: 'yore', meaning: 'road → roads', rule: 'Irregular' },
    { singular: 'sulwe', plural: 'sulini', meaning: 'star → stars', rule: 'Irregular' },
    { singular: 'ruoth', plural: 'ruodhi', meaning: 'chief → chiefs', rule: 'Irregular' },
    { singular: 'ondiek', plural: 'ondiegi', meaning: 'hyena → hyenas', rule: 'Irregular' },
];

// ============================================================
// VERB TENSES
// From the Handbook, Chapter IV
// ============================================================
export const VERB_TENSES = [
    { tense: 'Present Indefinite', prefix: '', example: 'Ahero = I love', rule: 'Pronoun prefix + infinitive' },
    { tense: 'Present Imperfect', prefix: '', example: 'Wendo biro = The visitor is coming', rule: 'Drop 3rd person prefix when subject is near' },
    { tense: 'Past Indefinite', prefix: 'ne', example: 'Nahero = I loved', rule: '"ne" + pronoun prefix + verb' },
    { tense: 'Present Perfect', prefix: 'se', example: 'Asehero = I have loved', rule: 'Pronoun prefix + "se" + verb' },
    { tense: 'Past Perfect', prefix: 'ne...se', example: 'Nasehero = I had loved', rule: '"ne" + pronoun prefix + "se" + verb' },
    { tense: 'Future', prefix: '-na-/-ni-/-no-', example: 'Naher = I shall love', rule: 'Pronoun prefix + tense marker + root' },
];

// ============================================================
// CARDINAL NUMBERS
// From the Handbook, Chapter II, Paragraph 2
// ============================================================
export const CARDINAL_NUMBERS = [
    { number: 1, luo: 'Achiel', english: 'One' },
    { number: 2, luo: 'Ariyo', english: 'Two' },
    { number: 3, luo: 'Adek', english: 'Three' },
    { number: 4, luo: "Ang'wen", english: 'Four' },
    { number: 5, luo: 'Abich', english: 'Five' },
    { number: 6, luo: 'Auchiel', english: 'Six (abich g\'achiel)' },
    { number: 7, luo: 'Abiriyo', english: 'Seven (abich g\'ariyo)' },
    { number: 8, luo: 'Aboro', english: 'Eight (abich g\'adek)' },
    { number: 9, luo: 'Ongachiel', english: 'Nine (one missing from ten)' },
    { number: 10, luo: 'Apar', english: 'Ten' },
    { number: 11, luo: "Apar g'achiel", english: 'Eleven' },
    { number: 12, luo: "Apar g'ariyo", english: 'Twelve' },
    { number: 20, luo: 'Piero ariyo', english: 'Twenty (tens × two)' },
    { number: 30, luo: 'Piero adek', english: 'Thirty (tens × three)' },
    { number: 100, luo: 'Piero apar / Mia', english: 'Hundred' },
];

// ============================================================
// QUESTION WORDS
// From the Handbook, Chapter III, Paragraph 6
// ============================================================
export const QUESTION_WORDS = [
    { luo: "Ng'a", english: 'Who? (singular)', usage: "In ng'a? — Who are you?" },
    { luo: "Ng'a gini", english: 'Who? (plural)', usage: "Un ng'a gini? — Who are you all?" },
    { luo: "Ang'o", english: 'What?', usage: "Ma ang'o? — What is that?" },
    { luo: 'Mane', english: 'Which? (singular)', usage: 'Mane idwaro? — Which do you want?' },
    { luo: 'Mage', english: 'Which? (plural)', usage: 'Mage idwaro? — Which ones do you want?' },
    { luo: 'Nade', english: 'How?', usage: 'Iriyo nade? — How are you?' },
    { luo: 'Adi', english: 'How many?', usage: 'Florin adi? — How many florins?' },
    { luo: "Karang'o", english: 'When?', usage: "Ibiro karang'o? — When did you come?" },
    { luo: 'Kanye', english: 'Where?', usage: 'Idak kanye? — Where do you live?' },
    { luo: "Marang'o / N'ang'o", english: 'Why?', usage: "Marang'o ibiro ka? — Why do you come here?" },
    { luo: 'Manade', english: 'Of what sort?', usage: 'Ichamo chiamo manade? — What sort of food do you eat?' },
];

// ============================================================
// TIME EXPRESSIONS
// From the Handbook, Chapter V, Paragraph 2
// ============================================================
export const TIME_EXPRESSIONS = [
    { luo: 'Kawono', english: 'Now' },
    { luo: 'Nende / Tinende / Tinde', english: 'Today' },
    { luo: 'Nyoro', english: 'Yesterday' },
    { luo: 'Kiny', english: 'Tomorrow' },
    { luo: 'Orucha', english: 'Day after tomorrow' },
    { luo: 'Nyocha', english: 'Day before yesterday' },
    { luo: 'Koro / Koro ka', english: 'Just now' },
    { luo: 'Podi', english: 'Still / Yet' },
    { luo: 'Chon', english: 'Early / Long ago' },
    { luo: 'Yande', english: 'Formerly / Before' },
    { luo: 'Bin', english: 'Presently / Soon' },
    { luo: "Wang'", english: 'Soon / Immediately' },
    { luo: 'Otieno', english: 'At night' },
    { luo: 'Odiewor', english: 'At midnight' },
    { luo: "Odiechieng'", english: 'In the daytime' },
    { luo: 'Pile / Pilepile', english: 'Daily / Constantly' },
    { luo: "Bang'e", english: 'Afterwards / Later on' },
];

// ============================================================
// TIME PHRASES — Adverbial Phrases of Time
// From the Handbook p. 66
// ============================================================
export const TIME_PHRASES = [
    { luo: 'Kogwen', english: "At cock's crow" },
    { luo: 'Ka piny oyuso', english: 'At dusk' },
    { luo: 'Ka piny oru / Ka piny oyawore', english: 'At dawn / daybreak' },
    { luo: "Ka chieng' opilore", english: 'At sunrise' },
    { luo: "Ang'ich welo", english: 'Towards evening (past 6 PM)' },
    { luo: 'Kar donjo dhok', english: 'About 5 PM' },
    { luo: 'Tekre mon', english: 'Between 2 and 3 PM' },
];

// ============================================================
// GREETINGS & SALUTATIONS
// From the Handbook, Chapter IX
// ============================================================
export const GREETINGS = [
    { luo: 'Misawa!', english: 'Peace! / Hello!', response: 'Misawa ahinya!' },
    { luo: 'Okwe!', english: 'Peace!', response: 'Okwe ruok!' },
    { luo: 'Inindo nade?', english: 'How did you sleep?', response: 'Anindo maber' },
    { luo: 'Iriyo nade?', english: 'How are you? (during the day)', response: 'Ariyo maber' },
    { luo: 'Ingima?', english: 'How are you? (to a woman friend)', response: 'Angima' },
    { luo: 'Ringri ber?', english: 'How is your health?', response: 'Ringra ber' },
    { luo: 'Inindi', english: 'Goodbye / Sleep well', response: 'Inindi' },
    { luo: 'Nyasaye riti', english: 'May God protect you', response: 'Erokamano' },
    { luo: 'Ero kamano', english: 'Thanks / Well done', response: 'Ero kamano' },
];

// ============================================================
// ADVERBS
// From the Handbook, Chapter V
// ============================================================
export const ADVERBS = {
    quantity: [
        { luo: "Opong'", english: 'Full to the brim' },
        { luo: 'Kore', english: 'Half-full' },
        { luo: 'Mabor', english: 'Far' },
        { luo: 'Machiegini', english: 'Near' },
        { luo: 'Ahinya', english: 'Very' },
        { luo: "Ngang'", english: 'Very (emphatic)' },
        { luo: 'Lolwe', english: 'Very far' },
        { luo: 'Moloyo', english: 'Exceedingly' },
        { luo: 'Chuth / Chutho', english: 'Utterly / Quite / Outright' },
        { luo: 'Both', english: 'Nearly / Almost' },
    ],
    manner: [
        { luo: 'Piyo', english: 'Quickly / Fast' },
        { luo: 'Mos', english: 'Slowly / Gently / Please' },
        { luo: 'Maber', english: 'Well / Good' },
        { luo: 'Marach', english: 'Badly / Bad' },
        { luo: 'Matek', english: 'Hard / Difficult' },
        { luo: 'Nono', english: 'Simply / In vain / Without reason' },
        { luo: 'Ratiro', english: 'Publicly / Openly' },
        { luo: 'Arum', english: 'Together' },
        { luo: 'Kamano', english: 'So / Like that' },
    ],
    affirmation: [
        { luo: 'Ee / Aee', english: 'Yes' },
        { luo: 'Oyo', english: 'No' },
        { luo: 'Adieri', english: 'It is true' },
        { luo: 'Miriambo', english: 'It is false / a lie' },
    ],
    repetition: [
        { luo: 'Kendo', english: 'Again' },
        { luo: 'Mokwongo', english: 'First' },
        { luo: 'Kwonde duto', english: 'Everywhere' },
    ],
};

// ============================================================
// INTERJECTIONS
// From the Handbook, Chapter VIII
// ============================================================
export const INTERJECTIONS = [
    { luo: 'Yaye', english: 'Indeed! Alas!' },
    { luo: "Ling'!", english: 'Keep quiet! Pshaw!' },
    { luo: 'Ara!', english: 'All right (inwardly resenting)' },
    { luo: "Jong'!", english: 'Stop!' },
    { luo: 'Tho!', english: 'Alas! Ah!' },
    { luo: 'Ero!', english: 'Hey! All right!' },
    { luo: 'Ero kamano', english: 'Thanks / Well done' },
    { luo: 'Nyire!', english: 'Stop that!' },
];

// ============================================================
// COMMON PREFIXES
// From the Handbook, Part II, Chapter I
// ============================================================
export const PREFIXES = {
    'Ja': { meaning: 'Person who / Person from', example: 'Japuonj = teacher, Jatich = workman, Jagem = person from Gem' },
    'Jo': { meaning: 'People who / People from (plural of Ja)', example: 'Jopuonj = teachers, Jotich = workmen' },
    'Ma': { meaning: 'Adjective marker / Which / That', example: 'Maber = good, Maduong\' = great, Matin = small' },
    'Ra': { meaning: 'One who has / Instrument / Defect', example: 'Radhoho = leper, Ragwar = pitchfork, Rang\'ol = lame person' },
    'Ro': { meaning: 'Plural of Ra-', example: 'Rodhohini = lepers' },
    'Nya': { meaning: 'Diminutive (singular)', example: 'Nyaguok = puppy, Nyaruath = bull-calf' },
    'Nyi': { meaning: 'Diminutive (plural)', example: 'Nyiguogi = puppies' },
    'O': { meaning: '3rd person singular verb prefix', example: 'Obiro = he/she comes' },
    'A': { meaning: '1st person singular verb prefix', example: 'Abiro = I come' },
    'I': { meaning: '2nd person singular verb prefix', example: 'Ibiro = you come' },
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export function getIrregularPossessive(word: string, suffixType: string): string | null {
    const wordLower = word.toLowerCase();
    const irregulars = IRREGULAR_POSSESSIVES[wordLower];
    if (irregulars && irregulars[suffixType]) {
        return irregulars[suffixType];
    }
    return null;
}

export function generatePossessiveForms(word: string): { form: string; meaning: string }[] {
    const wordLower = word.toLowerCase();
    const forms: { form: string; meaning: string }[] = [];

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

    const lastChar = wordLower[wordLower.length - 1];
    const isVowelEnding = 'aeiou'.includes(lastChar);

    if (isVowelEnding) {
        const base = wordLower.slice(0, -1);
        forms.push({ form: base + 'na', meaning: 'my' });
        forms.push({ form: base + 'ni', meaning: 'your' });
        forms.push({ form: base + 'ne', meaning: 'his/her' });
        forms.push({ form: base + 'wa', meaning: 'our' });
        forms.push({ form: base + 'u', meaning: 'your (pl.)' });
        forms.push({ form: base + 'gi', meaning: 'their' });
    } else {
        forms.push({ form: wordLower + 'a', meaning: 'my' });
        forms.push({ form: wordLower + 'i', meaning: 'your' });
        forms.push({ form: wordLower + 'e', meaning: 'his/her' });
        forms.push({ form: wordLower + 'wa', meaning: 'our' });
        forms.push({ form: wordLower + 'u', meaning: 'your (pl.)' });
        forms.push({ form: wordLower + 'gi', meaning: 'their' });
    }

    return forms;
}

export function getRelatedWords(word: string): string[] {
    const related: string[] = [];
    const wordLower = word.toLowerCase();

    PLURAL_PATTERNS.forEach(({ singular, plural }) => {
        if (wordLower === singular) related.push(plural);
        if (wordLower === plural) related.push(singular);
    });

    if (wordLower.startsWith('ja')) {
        related.push('Jo' + wordLower.substring(2));
    }
    if (wordLower.startsWith('jo')) {
        related.push('Ja' + wordLower.substring(2));
    }

    return related;
}

export const POSSESSIVE_SUFFIXES = POSSESSIVE_SUFFIXES_SIMPLE;
