// Advanced Grammar Reference Data — Rebuilt from "A Handbook of the Kavirondo Language"
// by the Fathers of St. Joseph's Society (Mill-Hill, London), 1920
// ============================================================

// ============================================================
// PREPOSITIONS with examples
// From the Handbook, Chapter VI
// ============================================================
export const PREPOSITIONS = [
    { luo: 'e', english: 'in, at, on', examples: ['Thuol ni e ot — A snake is in the house', 'Nobiro oda — He came in my house'] },
    { luo: 'ne / ni', english: 'to, for (dative)', examples: ['Losna mesa — Make me a table', 'Wagoyo ni Nyasaye erokamano — We thank God'] },
    { luo: 'gi', english: 'with, by, and', examples: ["Nobiro gi tong' — He came with a spear", "Min gi nyathine — The mother and her child"] },
    { luo: 'mar / mag', english: 'of (genitive)', examples: ['Kwesi mar Petrus — Peter\'s pipe', 'Kombe mag won — Father\'s chairs'] },
    { luo: 'kod / kodi', english: 'with (together)', examples: ['Wadhi kodi — Shall I go with you?', 'Romo kodi — Equal to'] },
    { luo: 'kuom', english: 'from, some of (partitive)', examples: ['Omiya kuom rech — He gives me some of the fish', 'Oa kuom Nyasaye — He comes from God'] },
    { luo: 'ei', english: 'inside, within', examples: ['Nobiro ei oda — He came inside my house'] },
    { luo: 'e bwo', english: 'under, below', examples: [] },
    { luo: 'nyim', english: 'in front of, before', examples: [] },
    { luo: 'ir', english: 'to (direction)', examples: ['Nobiro ira — He came to me'] },
    { luo: "e pier / e dier ng'e", english: 'behind', examples: ["Nochung' e pier ot — He stood behind the house"] },
    { luo: 'malo', english: 'up, above, on top', examples: ['Kete malo — Put it on high'] },
    { luo: 'piny', english: 'down, on the ground', examples: ['Nogore piny — He fell down', 'Bedi piny — Sit down'] },
    { luo: 'diere', english: 'amidst, in between, halfway', examples: ["Nocung' diere — He stood in the midst"] },
    { luo: 'oko', english: 'outside', examples: ['Puke oko — Throw it outside'] },
    { luo: 'iye', english: 'inside, in it', examples: ['Ni iye — It is inside'] },
    { luo: 'nyaka', english: 'until, up to', examples: ['Pur nyaka a kaeni nyaka chopi kacha — Dig from here to there'] },
    { luo: "nikwop / n'ang'o", english: 'on account of, because of', examples: ["Nikwop gin — On account of them"] },
];

// ============================================================
// CONJUNCTIONS with examples
// From the Handbook, Chapter VII
// ============================================================
export const CONJUNCTIONS = [
    { luo: 'gi', english: 'and (linking nouns)', examples: ['Bel gi kal — Matama and wimbi', "Min gi nyathine — The mother and her child"] },
    { luo: 'kendo', english: 'and, also (linking verbs/clauses)', examples: ['Negibiro kendo negidhi — They came and went', 'Abiro kendo — I come again'] },
    { luo: 'to', english: 'but, however, then', examples: ["To an to? — What about me?", 'Tek to tek — It is difficult (emphatic)'] },
    { luo: 'ni', english: 'that (introducing speech)', examples: ["Nogalo ni onyalo loye — He thought that he could beat her"] },
    { luo: 'ka', english: 'if, when, while, as, that', examples: ["Ka koth ochwe — If it rains", "Kane obiro — When he came"] },
    { luo: 'kata', english: 'whether, even if', examples: ['Kata ka — Even if'] },
    { luo: 'nimar / nikech', english: 'for, because', examples: ["Adak ka nimar ahero — I live here because I love it"] },
    { luo: 'mondo / nimondo', english: 'in order that, so that', examples: ['Tedi kuon mondo wacham — Boil some food for us to eat'] },
    { luo: 'kaka', english: 'as, like', examples: [] },
    { luo: 'di', english: 'lest, if (doubt/uncertainty)', examples: ["Ang'o madimona? — What will prevent me?"] },
    { luo: 'momiyo / momono', english: 'therefore, consequently', examples: ['Egin ahulonu tinende — Therefore I tell you today'] },
    { luo: 'mi / miti', english: 'then, consequently', examples: ['Mi ondiek weye — Then the hyena left him'] },
    { luo: 'eka', english: 'thereupon, and then', examples: ['Ekane odhi nindo — And then he went to sleep'] },
    { luo: 'nyaka', english: 'until, since', examples: [] },
    { luo: 'koro', english: 'now (narrative)', examples: ['Koro jachien noa kuome — Now the devil left him'] },
];

// ============================================================
// VERB CONJUGATION TABLE (hero = to love)
// From the Handbook, Chapter IV, full paradigm
// ============================================================
export const VERB_CONJUGATION_HERO = {
    verb: 'hero',
    meaning: 'to love',
    root: 'her',
    tenses: {
        present_indefinite: [
            { person: 'I love', luo: 'Ahero' },
            { person: 'You love', luo: 'Ihero' },
            { person: 'He/She loves', luo: 'Ohero' },
            { person: 'We love', luo: 'Wahero' },
            { person: 'You (pl) love', luo: 'Uhero' },
            { person: 'They love', luo: 'Gihero' },
        ],
        past_indefinite: [
            { person: 'I loved', luo: 'Nahero' },
            { person: 'You loved', luo: 'Nihero' },
            { person: 'He/She loved', luo: 'Nohero' },
            { person: 'We loved', luo: 'Newahero' },
            { person: 'You (pl) loved', luo: 'Nuhero' },
            { person: 'They loved', luo: 'Negihero' },
        ],
        present_perfect: [
            { person: 'I have loved', luo: 'Asehero' },
            { person: 'You have loved', luo: 'Isehero' },
            { person: 'He/She has loved', luo: 'Osehero' },
            { person: 'We have loved', luo: 'Wasehero' },
            { person: 'You (pl) have loved', luo: 'Usehero' },
            { person: 'They have loved', luo: 'Gisehero' },
        ],
        past_perfect: [
            { person: 'I had loved', luo: 'Nasehero' },
            { person: 'You had loved', luo: 'Nisehero' },
            { person: 'He/She had loved', luo: 'Nosehero' },
            { person: 'We had loved', luo: 'Newasehero' },
            { person: 'You (pl) had loved', luo: 'Neusehero' },
            { person: 'They had loved', luo: 'Negisehero' },
        ],
        future: [
            { person: 'I shall love', luo: 'Naher' },
            { person: 'You will love', luo: 'Niher' },
            { person: 'He/She will love', luo: 'Noher' },
            { person: 'We shall love', luo: 'Wanaher' },
            { person: 'You (pl) will love', luo: 'Unuher' },
            { person: 'They will love', luo: 'Giniher' },
        ],
        imperative: [
            { person: 'Love! (singular)', luo: 'Her!' },
            { person: 'Love! (plural)', luo: 'Heruru!' },
        ],
        subjunctive: [
            { person: 'That I love', luo: 'Aher' },
            { person: 'That you love', luo: 'Iher' },
            { person: 'That he/she love', luo: 'Oher' },
            { person: 'That we love', luo: 'Waher' },
            { person: 'That you (pl) love', luo: 'Uher' },
            { person: 'That they love', luo: 'Giher' },
        ],
        negative_present: [
            { person: 'I do not love', luo: 'Okahero' },
            { person: 'You do not love', luo: 'Okihero' },
            { person: 'He/She does not love', luo: 'Okohero' },
            { person: 'We do not love', luo: 'Okwahero' },
            { person: 'You (pl) do not love', luo: 'Okuhero' },
            { person: 'They do not love', luo: 'Okigihero' },
        ],
        negative_future: [
            { person: 'I shall not love', luo: 'Okanaher' },
            { person: 'You will not love', luo: 'Okaniher' },
            { person: 'He/She will not love', luo: 'Okanoher' },
            { person: 'We shall not love', luo: 'Okwanaher' },
            { person: 'You (pl) will not love', luo: 'Okanuher' },
            { person: 'They will not love', luo: 'Okaginiher' },
        ],
    },
};

// ============================================================
// REFLEXIVE VERBS
// From the Handbook, Chapter IV, Paragraph 5
// ============================================================
export const REFLEXIVE_VERBS = {
    rule: 'Add "-re" or "-ore" to the infinitive',
    examples: [
        { active: 'Hero (to love)', reflexive: 'Herore (to love oneself)' },
        { active: 'Lwoko (to wash)', reflexive: 'Lwokore (to bathe)' },
        { active: 'Loko (to change)', reflexive: 'Lokore (to turn)' },
        { active: 'Iro (to spread)', reflexive: 'Irore (to spread itself)' },
        { active: 'Choko (to gather)', reflexive: 'Chokore (to assemble)' },
        { active: 'Loso (to prepare)', reflexive: 'Losore (to prepare oneself)' },
        { active: 'Puonjo (to teach)', reflexive: 'Puonjore (to practise / learn)' },
        { active: 'Rwako (to wear)', reflexive: 'Rwakore (to dress)' },
        { active: 'Gonyo (to untie)', reflexive: 'Gonyore (to undress)' },
    ],
    person_markers: [
        { suffix: '-ora', person: 'I ... myself', example: 'Aherora — I love myself' },
        { suffix: '-ori', person: 'You ... yourself', example: 'Iherori — You love yourself' },
        { suffix: '-ore', person: 'He/She ... himself/herself', example: 'Oherore — He loves himself' },
        { suffix: '-ore', person: 'We ... ourselves', example: 'Waherore — We love ourselves' },
        { suffix: '-oru/-ore', person: 'You (pl) ... yourselves', example: 'Uheroru — You love yourselves' },
        { suffix: '-ore', person: 'They ... themselves', example: 'Giherore — They love themselves' },
    ],
};

// ============================================================
// NOUN CLASSES & FORMATION
// From the Handbook, Part II, Chapter I
// ============================================================
export const NOUN_CLASSES = {
    agent_nouns: {
        rule: 'Prefix "ja-" (singular) / "jo-" (plural) to verb or noun',
        examples: [
            { verb: 'Tedo (to cook)', noun: 'Jatedo (a cook)', plural: 'Jotedo (cooks)' },
            { verb: 'Telo (to lead)', noun: 'Jatelo (a guide)', plural: 'Jotelo (guides)' },
            { verb: 'Puonjo (to teach)', noun: 'Japuonj (a teacher)', plural: 'Jopuonj (teachers)' },
            { verb: 'Tiyo (to work)', noun: 'Jatich (a workman)', plural: 'Jotich (workmen)' },
            { noun_base: 'Miriambo (a lie)', noun: 'Jamiriambo (a liar)', plural: 'Jomiriambo (liars)' },
        ],
    },
    patient_nouns: {
        rule: 'Prefix "ng\'ama-" (singular) / "joma-" (plural) to verb',
        examples: [
            { verb: 'Fuwo (to be foolish)', noun: "Ng'amafuwo (a fool)", plural: 'Jomafuwo (fools)' },
            { verb: 'Tuwo (to be sick)', noun: "Ng'amatuwo (sick person)", plural: 'Jomatuwo (sick people)' },
        ],
    },
    instrument_nouns: {
        rule: 'Prefix "ra-" to verb root',
        examples: [
            { verb: 'Gwaro (to scratch)', noun: 'Ragwar (a pitchfork)' },
            { verb: 'Beto (to slash)', noun: 'Rabete (a slasher)' },
            { verb: 'Idho (to climb)', noun: 'Raidhi (a ladder)' },
        ],
    },
    abstract_nouns: {
        rule: 'Generally the verb drops the final "o"',
        examples: [
            { verb: 'Leko (to dream)', noun: 'Lek (dream)' },
            { verb: 'Timo (to do)', noun: 'Tim (a deed)' },
            { verb: 'Puonjo (to teach)', noun: 'Puonj (lesson/doctrine)' },
            { verb: 'Tiyo (to work)', noun: 'Tich (work)' },
            { verb: 'Hero (to love)', noun: 'Hera (love)' },
        ],
    },
    diminutives: {
        rule: 'Prefix "Nya-" (singular) / "Nyi-" (plural)',
        examples: [
            { base: 'Guok (dog)', diminutive: 'Nyaguok (puppy)', plural: 'Nyiguogi (puppies)' },
            { base: 'Ruath (bull)', diminutive: 'Nyaruath (bull-calf)', plural: 'Nyiruedhi (bull-calves)' },
        ],
    },
};

// ============================================================
// ADJECTIVE FORMATION
// From the Handbook, Chapter II & Part II Chapter II
// ============================================================
export const ADJECTIVE_FORMATION = {
    rule: 'Adjectives used attributively are always preceded by "ma"',
    note: 'The adjective always follows the noun. A good man = Dhano maber',
    plurals: [
        { singular: 'Maber', plural: 'Mabeyo', meaning: 'Good → Good (pl)' },
        { singular: 'Marach', plural: 'Maricho', meaning: 'Bad → Bad (pl)' },
        { singular: 'Mabor', plural: 'Maboyo', meaning: 'High/Far → High/Far (pl)' },
        { singular: "Maduong'", plural: "Madongo", meaning: 'Great → Great (pl)' },
        { singular: 'Matin', plural: 'Matindo', meaning: 'Small → Small (pl)' },
        { singular: 'Madit', plural: 'Madito', meaning: 'Grown up → Grown up (pl)' },
        { singular: 'Marachar', plural: 'Marachere', meaning: 'White → White (pl)' },
        { singular: "Marating'", plural: "Maratinge", meaning: 'Black → Black (pl)' },
        { singular: 'Masasi', plural: 'Masesini', meaning: 'Cruel → Cruel (pl)' },
    ],
    colors: {
        masculine: [
            { luo: 'Marachar', english: 'White (masculine)' },
            { luo: "Marating'", english: 'Black (masculine)' },
            { luo: 'Silwal', english: 'Chocolate brown (masculine)' },
        ],
        feminine: [
            { luo: 'Madibo', english: 'White (feminine)' },
            { luo: 'Madichol', english: 'Black (feminine)' },
            { luo: 'Malando', english: 'Chocolate brown (feminine)' },
        ],
    },
};

// ============================================================
// SENTENCE PATTERNS & SYNTAX
// From the Handbook, Part II, Chapters III-IV
// ============================================================
export const SENTENCE_PATTERNS = {
    simple_possessive: {
        rule: '"mar" (singular) / "mag" (plural) = of',
        examples: [
            { luo: 'Kwesi mar Petrus', english: "Peter's pipe" },
            { luo: 'Kombe mag won', english: "Father's chairs" },
            { luo: 'Wach Nyasaye', english: "God's word" },
        ],
    },
    comparison: {
        rule: 'No adjective comparison — use circumlocution with "loyo" (to surpass)',
        examples: [
            { luo: 'Olora gi rieko', english: 'He is wiser than I (he surpasses me with wisdom)' },
            { luo: 'Olopo ji duto gi rieko', english: 'He is the wisest (he surpasses all people with wisdom)' },
        ],
    },
    negation: {
        particles: ['Ok', 'Dak', 'Kik/Kiki', 'Nyak (never)', 'Onge (there is not)'],
        examples: [
            { luo: 'Ok ahero', english: 'I do not love' },
            { luo: 'Kik idhi', english: 'Do not go (negative imperative)' },
            { luo: "Nyak ocha", english: 'It is never despised' },
            { luo: "Onge ng'ato", english: 'There is nobody' },
        ],
    },
};

// ============================================================
// NAMING CONVENTIONS (from the Handbook p. 3)
// ============================================================
export const NAMING_CONVENTIONS = {
    rule: "Proper nouns take 'o' for a man, and 'a' for a woman",
    examples: [
        { name: 'Opiyo', gender: 'Male', meaning: 'First-born twin' },
        { name: 'Akinyi', gender: 'Female', meaning: 'Born in the morning' },
        { name: 'Otieno', gender: 'Male', meaning: 'Born at night' },
        { name: 'Apiyo', gender: 'Female', meaning: 'First-born twin (female)' },
    ],
};

// ============================================================
// DAYS OF THE WEEK (from common Dholuo usage)
// ============================================================
export const DAYS_OF_WEEK = [
    { english: 'Monday', dholuo: 'Wuok tich', literal: 'Start of work' },
    { english: 'Tuesday', dholuo: 'Tich ariyo', literal: 'Second work-day' },
    { english: 'Wednesday', dholuo: 'Tich adek', literal: 'Third work-day' },
    { english: 'Thursday', dholuo: "Tich ang'wen", literal: 'Fourth work-day' },
    { english: 'Friday', dholuo: 'Tich abich', literal: 'Fifth work-day' },
    { english: 'Saturday', dholuo: "Chieng' ngeso", literal: 'Day of shaving' },
    { english: 'Sunday', dholuo: "Chieng' lemo", literal: 'Day of prayer' },
];

// ============================================================
// CONVERSATIONAL PHRASES
// From the Handbook, Phraseology section (Part II, end)
// ============================================================
export const CONVERSATION_GENERAL = [
    { luo: 'Iriyo nade?', english: 'How do you do?' },
    { luo: 'Ariyo maber', english: 'I am well' },
    { luo: 'Misawa. Okwe.', english: 'Good morning / Good evening' },
    { luo: 'Inindi!', english: 'Goodbye!' },
    { luo: 'Dala wacho ang\'o?', english: 'What\'s the news of the day?' },
    { luo: "Oling'", english: 'No news' },
    { luo: 'Donjiye', english: 'Come in' },
    { luo: "In ng'a?", english: 'Who is there?' },
    { luo: 'Bedi piny', english: 'Sit down' },
    { luo: "Idwaro wacho koda?", english: 'Do you want to speak to me?' },
    { luo: 'Okawinjo maber', english: "I don't understand" },
    { luo: 'Dhiyo', english: 'Go away' },
    { luo: 'Iwinjo?', english: 'Do you understand?' },
    { luo: 'Koro onego adhi', english: 'I must go now' },
    { luo: 'Akia', english: "I don't know" },
    { luo: "Iwacho ang'o?", english: 'What do you say?' },
    { luo: 'Wachina kendo', english: 'Say it again' },
    { luo: 'Wach mos', english: 'Speak slowly' },
    { luo: 'Duokina wach', english: 'Answer me' },
    { luo: 'Ret piyo', english: 'Make haste' },
    { luo: 'Wothi mos. Maki mos.', english: 'Be careful, take care' },
    { luo: "Nyingi ng'a?", english: 'What is your name?' },
    { luo: 'Idhi kanye?', english: 'Where are you going to?' },
    { luo: 'Bi ka', english: 'Come here' },
    { luo: 'Wiya owil', english: 'I have forgotten' },
    { luo: 'Ero! Ber!', english: 'Quite right! Well done!' },
    { luo: 'Mano miriambo', english: 'Nonsense / That is a lie' },
    { luo: "Ling'! We wach!", english: 'Silence! Keep quiet!' },
    { luo: 'Oromo', english: "That will do / That's enough" },
    { luo: 'Ee', english: 'Yes' },
    { luo: 'Oyo', english: 'No' },
    { luo: 'Adieri', english: 'It is true' },
    { luo: 'Barna / Leng\'rina', english: 'Let me pass' },
    { luo: 'Sa adi?', english: 'What time is it?' },
    { luo: 'Koth chwe', english: 'It is raining' },
    { luo: 'Koth ochok', english: 'The rain is over' },
    { luo: "Chieng' kech", english: 'The sun is hot' },
];

export const CONVERSATION_HOUSEHOLD = [
    { luo: 'Wach ni jatedo', english: 'Tell the cook' },
    { luo: 'Adwaro chiemo', english: 'I want something to eat' },
    { luo: 'Kel pi maliet', english: 'Bring some hot water' },
    { luo: 'Ket pi e kendo', english: 'Put the water on the fire' },
    { luo: 'Lwok sendegi', english: 'Wash those plates' },
    { luo: 'Kikombo ok ler', english: 'That cup is not clean' },
    { luo: 'Ere birauli?', english: 'Where is the tumbler?' },
    { luo: 'Dhi ooma rech', english: 'Get me some fish' },
    { luo: "Pedhima kitandana maber", english: 'Make my bed properly' },
    { luo: 'Chiegi abdot', english: 'Close the door' },
    { luo: 'Mia jungao', english: 'Give me the keys' },
];

export const CONVERSATION_HEALTH = [
    { luo: 'Ringri ber?', english: 'Are you well?' },
    { luo: 'Ee, ringra ber', english: 'Yes, I am quite well' },
    { luo: 'Ringra duto rama', english: 'My whole body aches' },
    { luo: 'Midusi maka', english: 'I have fever' },
    { luo: 'Adiewo', english: 'I have diarrhoea' },
    { luo: 'Adiewo remo', english: 'I have dysentery' },
    { luo: 'Nindo otama otieno', english: 'I cannot sleep at night' },
    { luo: "K'idwara gimoro, wachina", english: 'If you want anything, tell me' },
    { luo: 'Bada otur', english: 'My arm is broken' },
    { luo: 'Wiriye yadhini', english: 'Put on this ointment' },
    { luo: 'Naduogi kendo', english: 'I shall come again' },
];

export const CONVERSATION_WORK = [
    { luo: "Nyingi ng'a?", english: 'What is your name?' },
    { luo: 'Idwaro tich?', english: 'Do you want work?' },
    { luo: "Ing'eyo tich?", english: 'Do you know how to work?' },
    { luo: "Ing'eyo pur?", english: 'Do you understand cultivation?' },
    { luo: 'In jakanye?', english: 'Where do you come from?' },
    { luo: 'Dalau bor?', english: 'Is it very far?' },
    { luo: "Namii florin abich dwe achiel", english: 'I give you five florins a month' },
    { luo: 'Kel ji moko', english: 'Bring some more men' },
    { luo: 'Kiny nibi okinyi', english: 'Come early in the morning' },
    { luo: 'Bi piyo', english: 'Come quick' },
    { luo: 'Maki kwer', english: 'Take a hoe' },
    { luo: "Pur nyaka a kaeni nyaka chopi kacha", english: 'Dig from here to there' },
    { luo: 'Tiuru piyo', english: 'Go on, work hard' },
    { luo: "Ng'atni otiyo maber", english: 'This man works well' },
    { luo: 'Dhiuru dala uduto', english: 'Go home altogether' },
];

export const CONVERSATION_TRAVEL = [
    { luo: 'Kiny wanadhi safar', english: 'We shall start tomorrow' },
    { luo: 'Isetweyo gikmoko duto?', english: 'Have you all the loads ready?' },
    { luo: 'Musike moko pek', english: 'Some of the loads are too heavy' },
    { luo: 'Go bul', english: 'Beat the drum' },
    { luo: 'Gol gikmoko duto', english: 'Bring out the loads' },
    { luo: 'Twe piyo', english: 'Tie them up quickly' },
    { luo: 'Aonge tol', english: 'I have no rope' },
    { luo: "Luongi joting'", english: 'Call the porters' },
    { luo: 'Chai chiek?', english: 'Is the tea ready?' },
    { luo: 'Weuru, waywe kaeni', english: 'Halt, we will rest here' },
    { luo: 'Wasechopo, yaye', english: 'Here we are!' },
    { luo: 'Keturu gikmoko piny', english: 'Put the loads down' },
    { luo: "Chieng' kech ahinya", english: 'The sun is very hot' },
    { luo: 'Jatedo, losna chai', english: 'Cook, make some tea' },
    { luo: 'Dhi, dwar pi malew', english: 'Go and look for clean water' },
];

export const CONVERSATION_VILLAGE = [
    { luo: 'Ruoth ni kanye?', english: 'Where is the chief?' },
    { luo: 'En dalane', english: 'He is at home' },
    { luo: 'Dhi luonge, obi', english: 'Call him out' },
    { luo: 'Wachne adwaro nene', english: 'Tell him I want to see him' },
    { luo: 'In ruoth mar dalani?', english: 'Are you the chief of this village?' },
    { luo: "Dalani ng'ongo?", english: 'Is it an important village?' },
    { luo: 'Jo dalani gin adi?', english: 'How many people?' },
    { luo: 'Udi gin adi?', english: 'How many houses?' },
    { luo: "In gi dhok mang'eny?", english: 'Have you a good number of cattle?' },
    { luo: 'Pacho okwe?', english: 'Are the people quiet?' },
    { luo: 'Mia gimoro, amadhi', english: 'May I get something to drink?' },
    { luo: 'Pi oduore, oklew', english: 'This is not clear water' },
    { luo: 'Iumbo pi aora?', english: 'Do you get the water from the river?' },
    { luo: 'Abiro neno jo dalani', english: 'I come to visit the people' },
];

// ============================================================
// DEFECTIVE VERBS (TO BE, TO HAVE, etc.)
// From the Handbook, Chapter IV, Paragraph 8
// ============================================================
export const VERB_TO_BE = {
    infinitive: 'Bedo / Bet',
    present: [
        { person: 'I am', luo: 'Abedo / Abet' },
        { person: 'You are', luo: 'Ibedo / Ibet' },
        { person: 'He/She is', luo: 'Obedo / Obet' },
        { person: 'We are', luo: 'Wabedo / Wabet' },
        { person: 'You (pl) are', luo: 'Ubedo / Ubet' },
        { person: 'They are', luo: 'Gibedo / Gibet' },
    ],
    alternative: 'Use personal pronoun alone: Wan = We are',
    locative: 'Antiye (I am here), Intiye, Entiye, etc.',
};

export const VERB_TO_HAVE = {
    rule: 'No such verb — use "to be with" (bet gi)',
    present: [
        { person: 'I have', luo: 'Abet gi / An gi' },
        { person: 'You have', luo: 'Ibet gi / In gi' },
        { person: 'He/She has', luo: 'Obet gi / En gi' },
        { person: 'We have', luo: 'Wabet gi / Wan gi' },
        { person: 'You (pl) have', luo: 'Ubet gi / Un gi' },
        { person: 'They have', luo: 'Gibet gi / Gin gi' },
    ],
    negative: 'Aonge = I am without / I have not',
};

// ============================================================
// PASSIVE VOICE
// From the Handbook, Chapter IV, Paragraph 4
// ============================================================
export const PASSIVE_VOICE = {
    rule: 'Prefix "o" as impersonal pronoun + root of transitive verb',
    examples: [
        { active: 'Kelo (to bring)', passive: 'Chiemo okel (The food has been brought)' },
        { active: 'Nego (to kill)', passive: 'Onegeigi (They were killed)' },
    ],
    personal_passive: [
        { person: 'I am loved', luo: 'Ohera' },
        { person: 'You are loved', luo: 'Oheri' },
        { person: 'He/She is loved', luo: 'Ohere' },
        { person: 'We are loved', luo: 'Oherwa' },
        { person: 'You (pl) are loved', luo: 'Oheru' },
        { person: 'They are loved', luo: 'Ohergi' },
    ],
    note: 'The passive is rarely used in Dholuo — the active voice is strongly preferred.',
};

// ============================================================
// ALPHABET (for backward compatibility with lesson imports)
// ============================================================
export const ALPHABET = {
    vowels: [
        { letter: 'a', pronunciation: 'as in "father"', example: 'Mako: to hold' },
        { letter: 'e', pronunciation: 'as "a" in "lake"', example: 'Lemo: to pray' },
        { letter: 'i', pronunciation: 'as in "police"', example: 'Limo: to visit' },
        { letter: 'o', pronunciation: 'as "oa" in "coach"', example: 'Moso: to greet' },
        { letter: 'u', pronunciation: 'as in "bull"', example: 'Bur: a hole' },
    ],
    special_consonants: [
        { letter: 'dh', pronunciation: 'as in "though"', example: 'Dhiyo: to go' },
        { letter: 'th', pronunciation: 'as in "thatch"', example: 'Thiedho: to forge' },
        { letter: "ng'", pronunciation: 'nasal as "ng" in "song"', example: "Ng'owo: figtree" },
        { letter: 'ny', pronunciation: 'one sound', example: 'Nyako: girl' },
        { letter: 'mb', pronunciation: 'one sound at word start', example: 'Mbiru: a bird' },
        { letter: 'nd', pronunciation: 'one sound at word start', example: 'Ndawa: tobacco' },
    ],
};
