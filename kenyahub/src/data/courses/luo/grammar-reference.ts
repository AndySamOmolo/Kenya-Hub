// Advanced Grammar Reference Data — Rebuilt from "A Handbook of the Kavirondo Language"
// by Some Fathers of St. Joseph's Society (Mill-Hill, London), 1920 (Dedication 1896–1921)
// ============================================================

// ============================================================
// PREPOSITIONS with examples
// From the Handbook, Chapter VI
// ============================================================
export const PREPOSITIONS = [
    { luo: 'e', english: 'in, at, on', examples: ['Thuol ni e ot — A snake is in the house', 'Nobiro oda — He came in my house'] },
    { luo: 'ne / ni', english: 'to, for (dative)', examples: ['Losna mesa — Make me a table', 'Wagoyo ni Nyasaye erokamano — We thank God'] },
    { luo: 'gi', english: 'with, by, and', examples: ["Nobiro gi tong' — He came with a spear", 'Min gi nyathine — The mother and her child'] },
    { luo: 'mar / mag', english: 'of (genitive)', examples: ["Kwesi mar Petrus — Peter's pipe", "Kombe mag won — Father's chairs"] },
    { luo: 'kod / kodi', english: 'with (together)', examples: ['Wadhi kodi — Shall I go with you?', 'Romo kodi — Equal to'] },
    { luo: 'kuom', english: 'from, some of (partitive)', examples: ['Omiya kuom rech — He gives me some of the fish', 'Oa kuom Nyasaye — He comes from God', 'Achiel kuomu — One of you'] },
    { luo: 'ei', english: 'inside, within', examples: ['Nobiro ei oda — He came inside my house'] },
    { luo: 'e bwo', english: 'under, below', examples: ['Bwo mesa — Under the table'] },
    { luo: 'nyim', english: 'in front of, before', examples: ["Ochung' e nyima — He stood before me"] },
    { luo: 'ir', english: 'to (direction)', examples: ['Nobiro ira — He came to me'] },
    { luo: "e pier / e dier ng'e", english: 'behind', examples: ["Nochung' e pier ot — He stood behind the house"] },
    { luo: 'malo', english: 'up, above, on top', examples: ['Kete malo — Put it on high'] },
    { luo: 'piny', english: 'down, on the ground', examples: ['Nogore piny — He fell down', 'Bedi piny — Sit down'] },
    { luo: 'diere', english: 'amidst, in between, halfway', examples: ["Nochung' diere — He stood in the midst", "Neging'ado diere — They cut it halfway in the middle"] },
    { luo: 'oko', english: 'outside', examples: ['Puke oko — Throw it outside'] },
    { luo: 'iye', english: 'inside, in it', examples: ['Ni iye — It is inside', 'Donjiye — Enter inside'] },
    { luo: 'nyaka', english: 'until, up to', examples: ['Pur nyaka a kaeni nyaka chopi kacha — Dig from here to there'] },
    { luo: "nikwop / n'ang'o", english: 'on account of, because of', examples: ['Nikwop gin — On account of them'] }
];

// ============================================================
// CONJUNCTIONS with examples
// From the Handbook, Chapter VII
// ============================================================
export const CONJUNCTIONS = [
    { luo: 'gi', english: 'and (linking nouns)', examples: ['Bel gi kal — Matama and wimbi', 'Min gi nyathine — The mother and her child'] },
    { luo: 'kendo', english: 'and, also (linking verbs/clauses)', examples: ['Negibiro kendo negidhi — They came and went', 'Abiro kendo — I come again'] },
    { luo: 'to', english: 'but, however, then', examples: ['To an to? — What about me?', 'Tek to tek — It is difficult (emphatic)'] },
    { luo: 'ni', english: 'that (introducing speech)', examples: ['Nogalo ni onyalo loye — He thought that he could beat her'] },
    { luo: 'ka', english: 'if, when, while, as, that', examples: ['Ka koth ochwe — If it rains', 'Kane obiro — When he came'] },
    { luo: 'kata', english: 'whether, even if', examples: ['Kata ka — Even if'] },
    { luo: 'nimar / nikech', english: 'for, because', examples: ['Adak ka nimar ahero — I live here because I love it'] },
    { luo: 'mondo / nimondo', english: 'in order that, so that', examples: ['Tedi kuon mondo wacham — Boil some food for us to eat'] },
    { luo: 'kaka', english: 'as, like', examples: ['Tim kaka awachoni — Do as I tell you'] },
    { luo: 'di', english: 'lest, if (doubt/uncertainty)', examples: ["Ang'o madimona? — What will prevent me?"] },
    { luo: 'momiyo / momono', english: 'therefore, consequently', examples: ['Egin ahulonu tinende — Therefore I tell you today'] },
    { luo: 'mi / miti', english: 'then, consequently', examples: ['Mi ondiek weye — Then the hyena left him', 'Miti gidonjo pacho — And then they entered the village'] },
    { luo: 'eka', english: 'thereupon, and then', examples: ['Ekane odhi nindo — And then he went to sleep'] },
    { luo: 'nyaka', english: 'until, since', examples: ['Rita ka nyaka aduogi — Wait for me here until I return'] },
    { luo: 'koro', english: 'now (narrative)', examples: ['Koro jachien noa kuome — Now the devil left him'] }
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
            { person: 'They love', luo: 'Gihero' }
        ],
        past_indefinite: [
            { person: 'I loved', luo: 'Nahero' },
            { person: 'You loved', luo: 'Nihero' },
            { person: 'He/She loved', luo: 'Nohero' },
            { person: 'We loved', luo: 'Newahero' },
            { person: 'You (pl) loved', luo: 'Nuhero / Neuhero' },
            { person: 'They loved', luo: 'Negihero' }
        ],
        present_perfect: [
            { person: 'I have loved', luo: 'Asehero' },
            { person: 'You have loved', luo: 'Isehero' },
            { person: 'He/She has loved', luo: 'Osehero' },
            { person: 'We have loved', luo: 'Wasehero' },
            { person: 'You (pl) have loved', luo: 'Usehero' },
            { person: 'They have loved', luo: 'Gisehero' }
        ],
        past_perfect: [
            { person: 'I had loved', luo: 'Nasehero' },
            { person: 'You had loved', luo: 'Nisehero' },
            { person: 'He/She had loved', luo: 'Nosehero' },
            { person: 'We had loved', luo: 'Newasehero' },
            { person: 'You (pl) had loved', luo: 'Neusehero' },
            { person: 'They had loved', luo: 'Negisehero' }
        ],
        future: [
            { person: 'I shall love', luo: 'Naher' },
            { person: 'You will love', luo: 'Niher' },
            { person: 'He/She will love', luo: 'Noher' },
            { person: 'We shall love', luo: 'Wanaher' },
            { person: 'You (pl) will love', luo: 'Unuher' },
            { person: 'They will love', luo: 'Giniher' }
        ],
        imperative: [
            { person: 'Love! (singular)', luo: 'Her!' },
            { person: 'Love! (plural)', luo: 'Heruru!' }
        ],
        subjunctive: [
            { person: 'That I love', luo: 'Aher' },
            { person: 'That you love', luo: 'Iher' },
            { person: 'That he/she love', luo: 'Oher' },
            { person: 'That we love', luo: 'Waher' },
            { person: 'That you (pl) love', luo: 'Uher' },
            { person: 'That they love', luo: 'Giher' }
        ],
        negative_present: [
            { person: 'I do not love', luo: 'Okahero' },
            { person: 'You do not love', luo: 'Okihero' },
            { person: 'He/She does not love', luo: 'Okohero' },
            { person: 'We do not love', luo: 'Okwahero' },
            { person: 'You (pl) do not love', luo: 'Okuhero' },
            { person: 'They do not love', luo: 'Okigihero' }
        ],
        negative_future: [
            { person: 'I shall not love', luo: 'Okanaher' },
            { person: 'You will not love', luo: 'Okaniher' },
            { person: 'He/She will not love', luo: 'Okanoher' },
            { person: 'We shall not love', luo: 'Okwanaher' },
            { person: 'You (pl) will not love', luo: 'Okanuher' },
            { person: 'They will not love', luo: 'Okaginiher' }
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
        { active: 'Gonyo (to untie)', reflexive: 'Gonyore (to undress)' }
    ],
    person_markers: [
        { suffix: '-ora', person: 'I ... myself', example: 'Aherora — I love myself' },
        { suffix: '-ori', person: 'You ... yourself', example: 'Iherori — You love yourself' },
        { suffix: '-ore', person: 'He/She ... himself/herself', example: 'Oherore — He loves himself' },
        { suffix: '-ore', person: 'We ... ourselves', example: 'Waherore — We love ourselves' },
        { suffix: '-oru/-ore', person: 'You (pl) ... yourselves', example: 'Uheroru — You love yourselves' },
        { suffix: '-ore', person: 'They ... themselves', example: 'Giherore — They love themselves' }
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
            { noun_base: 'Miriambo (a lie)', noun: 'Jamiriambo (a liar)', plural: 'Jomiriambo (liars)' }
        ],
    },
    patient_nouns: {
        rule: 'Prefix "ng\'ama-" (singular) / "joma-" (plural) to verb',
        examples: [
            { verb: 'Fuwo (to be foolish)', noun: "Ng'amafuwo (a fool)", plural: 'Jomafuwo (fools)' },
            { verb: 'Tuwo (to be sick)', noun: "Ng'amatuwo (sick person)", plural: 'Jomatuwo (sick people)' }
        ],
    },
    instrument_nouns: {
        rule: 'Prefix "ra-" to verb root (or physical defect)',
        examples: [
            { verb: 'Gwaro (to scratch)', noun: 'Ragwar (a pitchfork)' },
            { verb: 'Beto (to slash)', noun: 'Rabete (a slasher)' },
            { verb: 'Idho (to climb)', noun: 'Raidhi (a ladder)' },
            { verb: "Ng'iyo (to look at)", noun: "Rang'i (a mirror / looking glass)" },
            { verb: 'Kuom (hump)', noun: 'Rakuom / Jarakuom (a hunchback, pl. Rokuombe)' }
        ],
    },
    abstract_nouns: {
        rule: 'Generally the verb drops the final "o"',
        examples: [
            { verb: 'Leko (to dream)', noun: 'Lek (dream)' },
            { verb: 'Timo (to do)', noun: 'Tim (a deed)' },
            { verb: 'Puonjo (to teach)', noun: 'Puonj (lesson/doctrine)' },
            { verb: 'Tiyo (to work)', noun: 'Tich (work)' },
            { verb: 'Hero (to love)', noun: 'Hera (love)' }
        ],
    },
    diminutives: {
        rule: 'Prefix "Nya-" (singular) / "Nyi-" (plural)',
        examples: [
            { base: 'Guok (dog)', diminutive: 'Nyaguok (puppy)', plural: 'Nyiguogi (puppies)' },
            { base: 'Ruath (bull)', diminutive: 'Nyaruath (bull-calf)', plural: 'Nyiruedhi (bull-calves)' }
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
        { singular: "Maduong'", plural: 'Madongo', meaning: 'Great → Great (pl)' },
        { singular: 'Matin', plural: 'Matindo', meaning: 'Small → Small (pl)' },
        { singular: 'Madit', plural: 'Madito', meaning: 'Grown up → Grown up (pl)' },
        { singular: 'Marachar', plural: 'Marachere', meaning: 'White → White (pl)' },
        { singular: "Marating'", plural: 'Maratinge', meaning: 'Black → Black (pl)' },
        { singular: 'Masasi', plural: 'Masesini', meaning: 'Cruel → Cruel (pl)' }
    ],
    colors: {
        masculine: [
            { luo: 'Marachar', english: 'White (masculine)' },
            { luo: "Marating'", english: 'Black (masculine)' },
            { luo: 'Silwal', english: 'Chocolate brown / red (masculine)' }
        ],
        feminine: [
            { luo: 'Madibo', english: 'White (feminine)' },
            { luo: 'Madichol', english: 'Black (feminine)' },
            { luo: 'Malando', english: 'Chocolate brown / red (feminine)' }
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
            { luo: 'Wach Nyasaye', english: "God's word" }
        ],
    },
    comparison: {
        rule: 'No adjective comparison — use circumlocution with "loyo" (to surpass) or "yombo" (to outstrip)',
        examples: [
            { luo: 'Oloya gi rieko', english: 'He is wiser than I am (he surpasses me with wisdom)' },
            { luo: 'Oloyo ji duto gi rieko', english: 'He is the wisest (he surpasses all people with wisdom)' },
            { luo: "Gari oyombo nyumbu (gi ng'wech)", english: 'A train is quicker than a mule' }
        ],
    },
    negation: {
        particles: ['Ok / Oki', 'Pok / Podi ok (not yet)', 'Dak', 'Kik / Kiki', 'Nyak (never)', 'Onge (there is not)'],
        examples: [
            { luo: 'Ok ahero', english: 'I do not love' },
            { luo: "Pok obiro (Podi ok obiro)", english: 'He has not come yet' },
            { luo: 'Kik idhi', english: 'Do not go (negative imperative)' },
            { luo: 'Nyasaye nyak ocha', english: 'God is never despised' },
            { luo: "Onge ng'ato", english: 'There is nobody' }
        ],
    },
};

// ============================================================
// NAMING CONVENTIONS (from the Handbook p. 3 & p. 81)
// ============================================================
export const NAMING_CONVENTIONS = {
    rule: "Proper nouns take 'o' for a man, and 'a' for a woman",
    examples: [
        { name: 'Opiyo', gender: 'Male', meaning: 'First-born twin' },
        { name: 'Akinyi', gender: 'Female', meaning: 'Born in the morning' },
        { name: 'Otieno', gender: 'Male', meaning: 'Born at night' },
        { name: 'Apiyo', gender: 'Female', meaning: 'First-born twin (female)' },
        { name: 'Okoth / Akoth', gender: 'Male / Female', meaning: 'Born during rain' },
        { name: 'Oyo / Ayo', gender: 'Male / Female', meaning: 'Born on the road / journey' }
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
    { english: 'Sunday', dholuo: "Chieng' lemo / Jumapil", literal: 'Day of prayer' }
];

// ============================================================
// CONVERSATIONAL PHRASES
// From the Handbook, Phraseology section (pp. 102–117)
// ============================================================
export const CONVERSATION_GENERAL = [
    { luo: 'Iriyo nade?', english: 'How do you do?' },
    { luo: 'Ariyo maber', english: 'I am well' },
    { luo: 'Misawa. Okwe.', english: 'Good morning / Good evening' },
    { luo: 'Inindi!', english: 'Goodbye!' },
    { luo: "Dala wacho ang'o?", english: "What's the news of the day?" },
    { luo: "Oling' / Dala oling'", english: 'No news' },
    { luo: 'Donjiye', english: 'Come in' },
    { luo: "In ng'a?", english: 'Who is there?' },
    { luo: 'Bedi piny', english: 'Sit down' },
    { luo: 'Idwaro wacho koda?', english: 'Do you want to speak to me?' },
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
    { luo: "Barna / Leng'rina", english: 'Let me pass' },
    { luo: 'Sa adi?', english: 'What time is it?' },
    { luo: 'Koth chwe', english: 'It is raining' },
    { luo: 'Koth ochok', english: 'The rain is over' },
    { luo: "Chieng' kech", english: 'The sun is hot' }
];

export const CONVERSATION_HOUSEHOLD = [
    { luo: 'Wach ni jatedo', english: 'Tell the cook' },
    { luo: 'Adwaro chiemo', english: 'I want something to eat' },
    { luo: 'Kel pi maliet', english: 'Bring some hot water' },
    { luo: 'Ket pi e kendo', english: 'Put the water on the fire' },
    { luo: 'Lwok sendegi', english: 'Wash those plates' },
    { luo: 'Kikombe ok ler', english: 'That cup is not clean' },
    { luo: 'Ere birauri?', english: 'Where is the tumbler?' },
    { luo: 'Dhi omna rech', english: 'Get me some fish' },
    { luo: 'Pedhina kitandana maber', english: 'Make my bed properly' },
    { luo: 'Chiegi dhoot', english: 'Close the door' },
    { luo: 'Mia funguo', english: 'Give me the keys' }
];

export const CONVERSATION_HEALTH = [
    { luo: 'Ringri ber?', english: 'Are you well?' },
    { luo: 'Ee, ringra ber', english: 'Yes, I am quite well' },
    { luo: 'Ringra duto rama', english: 'My whole body aches' },
    { luo: 'Midusi maka', english: 'I have fever' },
    { luo: 'Adiewo', english: 'I have diarrhoea' },
    { luo: 'Adiewo remo', english: 'I have dysentery' },
    { luo: 'Nindo otama otieno', english: 'I cannot sleep at night' },
    { luo: "K'idwaro gimoro, wachina", english: 'If you want anything, tell me' },
    { luo: 'Bada otur', english: 'My arm is broken' },
    { luo: 'Wiriye yadhini', english: 'Put on this ointment' },
    { luo: 'Naduogi kendo', english: 'I shall come again' }
];

export const CONVERSATION_WORK = [
    { luo: "Nyingi ng'a?", english: 'What is your name?' },
    { luo: 'Idwaro tich?', english: 'Do you want work?' },
    { luo: "Ing'eyo tich?", english: 'Do you know how to work?' },
    { luo: "Ing'eyo pur?", english: 'Do you understand cultivation?' },
    { luo: 'In jakanye?', english: 'Where do you come from?' },
    { luo: 'Dalau bor?', english: 'Is it very far?' },
    { luo: 'Namii florin abich dwe achiel', english: 'I give you five florins a month' },
    { luo: 'Kel ji moko', english: 'Bring some more men' },
    { luo: 'Kiny nibi okinyi', english: 'Come early in the morning' },
    { luo: 'Bi piyo', english: 'Come quick' },
    { luo: 'Maki kwer', english: 'Take a hoe' },
    { luo: 'Pur nyaka a kaeni nyaka chopi kacha', english: 'Dig from here to there' },
    { luo: 'Tiuru piyo', english: 'Go on, work hard' },
    { luo: "Ng'atni otiyo maber", english: 'This man works well' },
    { luo: 'Dhiuru dala uduto', english: 'Go home altogether' }
];

export const CONVERSATION_TRAVEL = [
    { luo: 'Kiny wanadhi safar', english: 'We shall start tomorrow' },
    { luo: 'Isetweyo gikmoko duto?', english: 'Have you all the loads ready?' },
    { luo: 'Musigo moko pek', english: 'Some of the loads are too heavy' },
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
    { luo: 'Dhi, dwar pi malew', english: 'Go and look for clean water' }
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
    { luo: 'Abiro neno jo dalani', english: 'I come to visit the people' }
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
        { person: 'They are', luo: 'Gibedo / Gibet' }
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
        { person: 'They have', luo: 'Gibet gi / Gin gi' }
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
        { active: 'Pawo (to clean)', passive: 'Pacho osepa (The village has been cleaned)' },
        { active: 'Kwalo / Pewo (to steal/plunder)', passive: 'Nope dhogi (Their cattle were stolen)' },
        { active: 'Winjo (to hear)', passive: 'Lemoni owinji (Thy prayer is heard)' }
    ],
    personal_passive: [
        { person: 'I am loved', luo: 'Ohera' },
        { person: 'You are loved', luo: 'Oheri' },
        { person: 'He/She is loved', luo: 'Ohere' },
        { person: 'We are loved', luo: 'Oherwa' },
        { person: 'You (pl) are loved', luo: 'Oheru' },
        { person: 'They are loved', luo: 'Ohergi' }
    ],
    note: 'The passive is rarely used in Dholuo — the active voice is strongly preferred.',
};

// ============================================================
// ALPHABET (for backward compatibility with lesson imports)
// ============================================================
export const ALPHABET = {
    vowels: [
        { letter: 'a', pronunciation: 'as in "father" / "fat"', example: 'Mako: to hold. Kal: wimbi' },
        { letter: 'e', pronunciation: 'as "a" in "lake" / "hen" / French "père"', example: 'Lemo: to pray. Lendo: to clean. Ler: to be clean' },
        { letter: 'i', pronunciation: 'as in "police" / "tin" / intermediate (Matin)', example: 'Limo: to visit. Lith lwedo: finger. Matin: small' },
        { letter: 'o', pronunciation: 'as "oa" in "coach" / "song" / "law"', example: 'Moso: to greet. Kwongo: to begin. Loko: to change' },
        { letter: 'u', pronunciation: 'as in "bull" / intermediate (Lur)', example: 'Bur: a hole. Lur: to be barren' }
    ],
    special_consonants: [
        { letter: 'dh', pronunciation: 'as in "though"', example: 'Dhiyo: to go. Puodho: garden' },
        { letter: 'th', pronunciation: 'as in "thatch"', example: 'Thedho: to forge. Thieth: a cure' },
        { letter: "ng'", pronunciation: 'nasal as "ng" in "song"', example: "Ng'owo: figtree. Bang': after" },
        { letter: 'ny', pronunciation: 'one sound', example: 'Nyako: girl. Piny: country' },
        { letter: 'mb', pronunciation: 'one sound at word start', example: 'Mbiru: a bird. Mbara: a scar' },
        { letter: 'nd', pronunciation: 'one sound at word start', example: 'Ndawa: tobacco. Ndemo: tweezers' }
    ],
};

// ============================================================
// NORTHCOTE (1907) ONOMASTICS, CUSTOMARY LAW & ETHNOGRAPHY
// From G. A. S. Northcote, "The Nilotic Kavirondo", JRAI Vol. 37 (1907, pp. 58–66)
// ============================================================
export const NORTHCOTE_1907_ONOMASTICS_AND_LAW = {
    originAndKinship: "Belong to the same Nilotic family as the Dinka of the Sudan and are closely akin to the Aluri (Alur) and Acholi on both sides of the Nile near Wadilai; originally formed one tribe with the Acholi before migrating from the north-west under one big chief (pp. 58–59).",
    timeOfDayBirthNames: [
        { verbatim: 'onyango', modern: 'Onyango (m.) / Anyango (f.)', meaning: 'Born in the morning (p. 62)' },
        { verbatim: 'oching', modern: "Ochieng' (m.) / Achieng' (f.)", meaning: 'Born at noon (p. 62)' },
        { verbatim: 'odiambo', modern: 'Odhiambo (m.) / Adhiambo (f.)', meaning: 'Born in the afternoon (p. 62)' },
        { verbatim: 'otieno', modern: 'Otieno (m.) / Atieno (f.)', meaning: 'Born at night (p. 62)' }
    ],
    hereditaryNicknames: [
        { verbatim: 'obele', root: 'bel (mtama millet)', meaning: 'The man who owned much mtama (millet) (p. 62)' },
        { verbatim: 'oliech', root: 'liech (elephant)', meaning: 'The man who killed an elephant (p. 62)' },
        { verbatim: 'obonyo', root: 'bonyo (locust)', meaning: 'The man like a locust (p. 62)' }
    ],
    customaryLawAndRites: [
        "Married woman's grass tassel (chieno): discarded upon a husband's death until remarriage; anyone who touches a married woman's grass tassel must pay a fine of 3 goats to her husband (pp. 58–59).",
        "Succession & inheritance (p. 61): Strict clan exogamy; each wife's allocated cattle pass to her own sons (eldest taking the largest share), and chieftaincy descends to the eldest son of the first/chief wife (mikayi) even if a junior wife bore an older son (or to an adult half-brother/eldest uncle if the heir is an infant).",
        "Marriage & bride-wealth (pp. 61–62): Preliminary feast sets aside an offering for the sun-god (meat, chicken, mtama, beer); bride cooks the first dinner at the groom's village to signify acceptance; dowry was 20 cattle before the 1883 cattle plague, vs. 7 cattle (handsome dowry) or 1 heifer and 1 bull (or 1 bull and 20 goats) in 1907.",
        "Funeral rites (p. 63): Bull-charging dance in full war-paint, mock combat behind huge painted buffalo-hide shields (~3.5 ft × 6 ft), mourning for 6 days (chief) or 3 days (commoner), and recumbent burial inside the deceased's own hut, which continues to be occupied by his heir (correcting Sir Charles Eliot).",
        "Rain-making, fishing & music (pp. 64–66): Rain-maker boils herbs under a sacred tree and blows through a hollow reed before squirting the decoction into the air; fishing with 4-pronged wooden spears, weirs, and woven-grass nets; 8-stringed harp (nyatiti / thum) accompanying extempore songs."
    ]
};


// ============================================================
// C. W. HOBLEY (1903) JA-LUO ORIGIN LEGENDS, 3 GENEALOGIES, 20 KWERO TOTEMS & CUSTOMARY LAW
// From C. W. Hobley, "British East Africa: Anthropological Studies in Kavirondo and Nandi",
// Journal of the Anthropological Institute of Great Britain and Ireland, Vol. 33 (1903, pp. 325–359)
// ============================================================
export const HOBLEY_1903_JALUO_ETHNOGRAPHY_AND_TOTEMS = {
    sourceCitation: "C. W. Hobley, Assoc. M. Inst. C.E., 'British East Africa: Anthropological Studies in Kavirondo and Nandi', JAI Vol. 33 (Jul.–Dec. 1903), pp. 325–359 (Plates XXVIII–XXX).",
    kadimuPythonAncestor: "Unlike the rest of the Nilotic Ja-Luo who trace descent to Apōdtho, the Kadimu (originally a Bantu tribe near the mouth of the River Nzoia that adopted Dholuo) believe their common ancestor was a huge python (Nyelo), hold pythons sacred, and offer annual sacrifices to their python ancestor on a hill in Kadimu (pp. 326, 348).",
    originLegendsAndGenealogies: [
        {
            version: "Version I — Narrated by Ugada Ndiek, Chief of Usakwa (pp. 326–327)",
            summary: "Apōdtho descended from the heavens to Ramogi (or Lamogi) Hill far north of Uganda with one woman, a bull, a cow, a calf, mtama and other seeds, and the Were tree (from whose wood he carved two bowls — one for milking and one for catching cow's urine to mix with buttermilk at sundown). He had 2 sons (Ramogi and Anyango) and 4 daughters (each son marrying two sisters). Ramogi migrated south to Ramogi Hill in Kadimu near the River Nzoia mouth and fathered the Ja-Luo tribes; Anyango remained behind and fathered the Baganda and Banyoro.",
            genealogy: "Apōdtho → (1) Ramogi, (2) Anyango, (3) Four daughters. Sons of Ramogi: Uyoma, Semi, Alego, Gemi, Nyakach, Umia Madok, Owidi. Sons of Owidi: (a) Rachonyo → Kandaia, Kanyaluo, Kaduong, Kabondo (south of Kavirondo Gulf); (b) Chwanya → Kisumu, Kanyamwa, Karungu, Kadem (on German frontier), Kaboch, Kachieng of Milambo."
        },
        {
            version: "Version II — Narrated by Ugada, Chief of Korando (aged over 70, son of Otiendi, pp. 327–329)",
            summary: "Apōdtho descended with 2 cattle, fowls, and seeds of mtama, sem-sem (sesame), and wimbi; he found tobacco growing on earth, received sweet potatoes and beans from the elephant, and taught fire-making by friction. He could turn into a rock at will; when old and sick, a girl cupped blood from his shadow, the Ja-Luo speared his shadow, and he turned into a rock used for sharpening spears. Ramogi settled first in Kadimu near Chief Anam's village. The Ja-Mwa (Bantu Kavirondo) descended from Anyango; the Koloa and Kitoto plain clans descended from Kanu (a Masai who married Rachonyo's sister) and are called Ja-Kanu; the Nandi descended from the Ja-Lango.",
            genealogy: "Apōdtho → Chindu (cf. Luganda Kintu, p. 332) → Ramogi (5 wives) → Chingiruea → Owidi → (a) Kisumu → Menya & Dedi → Tipo → Nyuto (clan), Umwa, Okech, Nyawegi (clan), Korando → Abiru → Rombo → Otiendi → Ugada (chief of Korando), Obiero, Owunda; (b) Atipu; (c) Kogonya (clan). Other branches: Kaponja, Kalachonyo, Nyakal → Semi, Kasilual → Umia Madok, Uwilo → Uyoma, KaduET, Gemi loka ('loka' = on the other side, south of Kavirondo Gulf), Kanyada, Kadem, Karungu, Nyamkago, Lango."
        },
        {
            version: "Version III — Narrated by Gori Kogalo, Chief of Kanyamwa in South Kavirondo / Ugaya (pp. 328, 330–331)",
            summary: "Apōdtho, the sun, the wind, and the moon appeared on earth together. Buffalo and cattle emerged from the sea (Lake Victoria); cattle stayed tame while buffalo fled to the woods. When the moon, sun, and wind refused to kill an ox or eat its cooked meat after Apōdtho felled it with his fist, they fled to the heavens. Apōdtho promised his children they would reunite after death with the people in the heavens who shine bright like fire. Mbunga, eldest son of Ramogi, led the migration into Kavirondo.",
            genealogy: "Apōdtho → (1) Rajoki (ancestor of Europeans & all other peoples); (2) Jimbo → Uyua → Ramogi → Mbunga, Uyoma, Semi, Chwanya (Uchieng [Nyaleo, Gadero, Nyamasua], Kanyuta, Kalachonyo [Kabondo], Kisumu, Abonyo [Uganga], Anyango [Beo, Kadem, Uchieng, Owiti → Kaboch]), Nyamkago, Ujoa (Gemi, Alego), Alangu (Nandi & Lumbwa), Kanu (Koloa, Kubura); (3) [lost] → Mugirango (Bantu Kavirondo, Waganda, Kisii)."
        }
    ],
    twentyKweroTotemsInThoLuo: [
        { number: 1, english: "Crocodile", thoLuo: "Nyang" },
        { number: 2, english: "Hyæna", thoLuo: "Ndiek" },
        { number: 3, english: "Leopard", thoLuo: "Okwach" },
        { number: 4, english: "Baboon", thoLuo: "Bīm" },
        { number: 5, english: "Monkey (Cercopithecus sp.)", thoLuo: "Ongner" },
        { number: 6, english: "Wild cat", thoLuo: "Ogwang (eaten by Gemi, Lego & Sakwa)" },
        { number: 7, english: "Jackal", thoLuo: "Buwem" },
        { number: 8, english: "Vulture", thoLuo: "Achut-th" },
        { number: 9, english: "Crow", thoLuo: "Agako" },
        { number: 10, english: "Kite", thoLuo: "Otenga" },
        { number: 11, english: "Nile monitor (lizard)", thoLuo: "Ngnech" },
        { number: 12, english: "Python", thoLuo: "Nyelo (sacred ancestor of Kadimu)" },
        { number: 13, english: "Mongoose", thoLuo: "Gori gori" },
        { number: 14, english: "Rock hyrax", thoLuo: "Kumnēr" },
        { number: 15, english: "Tortoise", thoLuo: "Upuku" },
        { number: 16, english: "Colobus monkey", thoLuo: "Kuru" },
        { number: 17, english: "Wart hog", thoLuo: "Imbirri" },
        { number: 18, english: "Frog", thoLuo: "Ogwan" },
        { number: 19, english: "Crested crane (Balearica gibbericeps)", thoLuo: "Iwang (strictly preserved except in Gemi)" },
        { number: 20, english: "Ground hornbill", thoLuo: "Arumtich" }
    ],
    womensAdditionalKwero: "Ja-Luo women also observe Kwero against eating fowls, eggs, elephant, hippopotamus, and (among Kisumu and Gemi only) sheep (p. 348).",
    chiefUgadasElevenCharms: [
        "(1) Small iron arrow points made on his naming day shortly after birth (p. 345).",
        "(2) Thin sheet of iron (~2 × ½ in.) with 3 punched holes representing his deceased grandmother Thako, after whom Ugada took his second name (p. 345).",
        "(3) Quartz crystal found on the lake shore, mounted in shrunk leather like an acorn cup (p. 345).",
        "(4) Bored yellow pebble with an iron ring, inherited from his father Otiendi (pp. 345–346).",
        "(5) Necklace of 6 ancient yellow Nya-Luo beads Picked up in the fields after heavy rain (p. 346).",
        "(6) Piece of goat horn worn against chest complaints (p. 346).",
        "(7) Dried chicken beak worn around the neck against sickness (p. 346).",
        "(8) Cut helix of a marine shell inherited from Otiendi (brought from Chief Ogalo of Kanyamwa, p. 346).",
        "(9) Left-wrist cord with 4 short wooden sticks (omeni) so his children can touch him without suffering ill effects (p. 346).",
        "(10) Heavy right-wrist brass bracelet obtained by his brother Obiero from Aiyimbo on the lake shore (p. 346).",
        "(11) Tiny square leather bag containing rheumatism medicine (p. 346)."
    ],
    customsBeliefsAndLaw: [
        "Ancestor propitiation (p. 343): A sick Ja-Luo man throws 4 small pieces of meat to the 4 cardinal directions, squirts mouthfuls of native beer, and throws spoonfuls of mtama porridge toward the hut door.",
        "Barren woman burial charm (p. 344): Before burying a woman who died childless, an acacia thorn is stuck into the sole of her foot and broken off short, and no funeral wailing is permitted.",
        "Simbi abūr crater lake legend (pp. 349–350): In Kalachonyo (South Kavirondo), a rain-witch submerged an inhospitable village whose elders were drinking tembo, sparing only the compassionate woman who fed and warmed her and her husband, creating the green natron lake Simbi abūr ('abūr' = hole/pit).",
        "Cult of the Mkia — Chieno (pp. 350–351): Married Ja-Luo women wear a 6–8 inch stiff bottle-brush tail (chieno) of white tuoro aloe fibre (sometimes topped with white beads or 6 cowries); if a mother enters another house without her chieno, the house is defiled until her husband sacrifices a goat at the doorstep.",
        "Tattooing & demographics (pp. 353–356): Kisumu women are tattooed with lines below the navel and across the waist and breasts upon their first pregnancy; in the Gemi tribe, 12 women bore 126 children (10.6 average; 70 living, 56 dead; 42% male / 58% female).",
        "Isira blood-feud taboo (pp. 357–358): Male descendants of a murdered brother's maternal line can never eat with or use a cooking pot shared by the murderer's maternal line, under penalty of death within 24 hours.",
        "Cosmology (p. 358): Both the Sun and the Supreme Deity are called Chieng, and the daylight sky/heavens are called Polo; menstruation and conception are believed to occur at the new moon.",
        "Law of chieftainship succession (p. 359): Chieftainship descends strictly to the sons of the first-married wife (mikayi): Umoli married Agola first (sons Odera Ulalo and Sejenyi) and Kakwari second (older son Agina); when Odera Ulalo died, his younger full brother Sejenyi succeeded rather than the older half-brother Agina.",
        "Origin of the name 'Kavirondo' (p. 359): Kisumu elders state that 'Kavirondo' was originally an epithet applied in dance and bhang-smoking songs by the people of the south side of Kavirondo Gulf to the people of the north side who had vanquished them and driven them across the bay."
    ]
};

// ============================================================
// C. W. HOBLEY (1902) EASTERN UGANDA: NILOTIC KAVIRONDO (JA-LUO / NIFE / THO-LUO)
// ETHNOGRAPHY, ORDEALS, 17 TRIBAL REGISTRIES, VERB CONJUGATIONS & 8 NOUN PLURAL CLASSES
// From C. W. Hobley, "Eastern Uganda: An Ethnological Survey", Anthropological Institute
// Occasional Papers No. 1 (London, 1902, pp. 7–13, 26–35, 52–56, 61–87, Plates I–III, V–VI)
// ============================================================
export const HOBLEY_1902_EASTERN_UGANDA_THOLUO = {
    sourceCitation: "C. W. Hobley, Assoc. M.Inst.C.E., 'Eastern Uganda: An Ethnological Survey', Anthropological Institute Occasional Papers No. 1 (London, 1902, pp. 1–96, Plates I–VI).",
    ethnographyAndMaterialCulture: [
        "Lake fishing & ironwork (pp. 26–27): Large conical wicker traps (dema) used with a floating papyrus-fringed surface rope and a stone-weighted ground rope paid out from ambatch-wood rafts; in Gemi, only the Uvino clan forges Samia iron into spears, knives, bill-hooks, and axes (smiths are called Yothet-th and also practise secret night witchcraft called Jamkingo, pp. 27, 32).",
        "Funeral & birth customs (pp. 27–28): A woman is buried on her left side in the verandah; a man on his right side in his first wife's hut; a chief is buried sitting in a new hut on a fresh ox-hide with a water pot over his head and seeds of every grain except sweet potatoes. A 3rd child born after two deaths is placed on a basket tray in the road, redeemed by the father for a goat, pierced in the right earlobe for a brass ring, and named Owiti (boy) or Awiti (girl, 'thrown away'). Twins are secluded for 1 month and named Apio (first-born, 'comes quickly', masc. Opio) and Adongo (second-born, 'delayed').",
        "Arms, music, dress & Nya-Luo beads (pp. 29–32, Figs. 8–9, 11, Plates V–VI): Curved cow/buffalo-hide shields and light ambatch-wood shields (Orindi), 10-ft spears, and arrow poison made by Opondo of Gemi; 8-string harp (Thūm, Fig. 8), laced drum (Būl, Fig. 9), and women's mtama-stalk hand-harp (Odundu); 6 lower incisors extracted; married father's mandatory small goat-skin when visiting his mother-in-law; 15 brass ear-rings with blue beads and ancient jasper/chalcedony Nya-Luo beads picked up near the Maragolia Hills after thunderstorms (worth 1 cow per bead; matched by Mr. C. H. Read of the British Museum to ancient Egypt and Beluchistan).",
        "Ordeals, medicine & beliefs (pp. 33–35, Fig. 12): Kiviri boiling wimbi-flour ordeal and the Calabash Ordeal (Fig. 12, plugged with crushed fibrous mimosa leaves); Chief Odera's youthful prophecy of European rule; Ochola tree seed-case eaten before battle to return unwounded; snake-bite antidotes identified by Dr. Rendle (British Museum) as Phytolacca Abyssinica (internal leaf infusion) and Ipomea palmata (external leaf poultice); Divinity Chieng (the sun, greeted by spitting East at dawn and West at sunset)."
    ],
    seventeenNiloticTribesAndChiefs1902: [
        "1. Kami or Gemi (pp. 52): Odera Ulalo (son of Umoli), Odera Sandei (son of Ulo), Ilari Atanda (son of Lochi), Wayoti Aratieri; 6 clans (Juothi, Karareo, Kagelo, Katumo, Kanyadeti, Kanikwaya).",
        "2. Lego (p. 52): Ukola, Ndonya/Ndong, Ngonga; 9 clans (Lafu, Kukwiri, Anyango, Kaluo, Karuothi, Yanyujaok, Jamoro, Yasiji, Yakadengi).",
        "3. Nife or Nyife (p. 53): Kero, Mulasi, Atipu, Unyango; 2 clans (Punji, Techi).",
        "4. Kisumu (p. 53): Ngola/Ugola & Ugada; 10 clans (Kisero & Yakagonya under Onduu, Karatenya, Kadongo, Korando [Ugada, Ogalo], Kaponja, Sagami, Kadedi, Yakamenya, Kanyawegi).",
        "5. Semi (pp. 53–54): Wadego, Yagudi, Awina; 7 clans (Kongo, Tieno [+ Dero], Kalunji, Kadipelo [Kumbija, Konyiwera, Kobita, Kaura, Kanyabong], Kombewa, Were [+ Kanyadwero], Kokeri).",
        "6. Sembo (p. 54): Adola; 2 clans (Umia, Kalei).",
        "7. Uyoma (p. 54): Lochi (d. 1899), Naiya; 4 clans (Kabuda, Katwenga, Kobong, Kukwiri).",
        "8. Sawakwa or Sakwa (p. 54): Ugada, Undieki; 6 clans (Kanyamwanda Nasimwa, Karabori, Kamiyawa, Yakakodi [+ Kanyavinya], Kuduoli).",
        "9. Timu or Utimu / Kadimu (p. 54): Anam, Uwori, Ugia; 3 clans (Kadimu, Rodi, Niaton).",
        "10. Songa (p. 55): Unyando (Wa-Mtoni) & Unyando (Wa-Juu).",
        "11. Kanu or Kadibo / Wa-Kitoto (pp. 9, 55): Kitoto (pure-bred native of Kisii/Kossova), Amimo, Niagoli, late Sendegi; 9 clans (Nyamoga/Moga, Kajulu, Kadibu/Kanu, Kumulu/Koloa, Kubura, Kamagaga, Kabonya, Kamrungu, Kimera/Sua).",
        "12. Khoro & Kanyamoti (p. 55): Uluma, Kahuri/Nyango, Handa; 4 clans (Makhoya, Umwangwi, Winyi, Mache).",
        "13. Kaki (p. 55): Masingo (near Gangu lake).",
        "14. Aiendi / Kasagunga (p. 55): Abomba; 5 clans (Aiendi, Sali, Diang, Tema, Kamreri).",
        "15. Ramba (p. 56): Gori Kogalo; 10 clans (Kadweti, Kabonyo, Kajuang, Kanyamwa/Kanyambo, Yahunda, Saki [at Usau hill], Kachola/Kologi, Kamungu, Kuchieng, Kasudu).",
        "16. Nyakatch (p. 56): Uhuri; 6 clans (Kadianga, Kabodo, Jimo, Kajembo, Kandaria, Kuguta).",
        "17. Kalachonyo (p. 56): Nyakiti; 13 clans (Kanyajok, Uma, Nyaluo, Kanyiperi, Adueti, Yakandaiya, Utienu, Kodera, Unyango, Akelu, Ojuach, Ukwainu, Kabondo)."
    ],
    eightThoLuoPluralClasses: [
        { classNumber: "Class I (-tot)", singular: "sere (arrow); le (axe/animal)", plural: "seretot; letot" },
        { classNumber: "Class II (-ngnen / -wen)", singular: "winyo (bird); tong (spear/egg)", plural: "winyongnen; tongwen" },
        { classNumber: "Class III (e- → gi-)", singular: "enuwadu (brother/companion)", plural: "ginuwadu / ginuwadwa" },
        { classNumber: "Class IV (-l → -k)", singular: "diel (goat)", plural: "diek" },
        { classNumber: "Class V (-iji)", singular: "chong / chonga (knee); lak (tooth)", plural: "chongiji; lakiji" },
        { classNumber: "Class VI (-a/-o → -i)", singular: "wer / wera (song); rombo (sheep)", plural: "weri; rombi" },
        { classNumber: "Class VII (no change)", singular: "lueta (arm)", plural: "lueta" },
        { classNumber: "Class VIII (irregular)", singular: "awang (eye); diang (cow); ot (house); hega (year)", plural: "wanga; dok; udi; hegini" }
    ],
    verbConjugations1902: {
        come: "Imp. bi! | Inf. obiro | Pres. 1s abiro, 2s inibiro/ibiro, 3s obiro, 1p wanowabiro/wabiro, 2p unubiro, 3p gi-biro | Fut. 1s angaanabi | Past 1s nabiro | Neg. Pres. 1s ungekabi (p. 85)",
        want: "Inf. oduaro | Pres. 1s aduaro, 2s iniduaro/iduaro, 3s oduaro/enouaro, 1p wanuwaduaro, 2p unuduaro, 3p giduaro | Fut. 1s anganaduari | Past 1s naduaro | Neg. Pres. 1s adagi (p. 85)"
    }
};


// Complete Line-by-Line Expansion of Northcote (1907), "The Nilotic Kavirondo" (JRAI Vol. 37, pp. 58-66)
export const NORTHCOTE_1907_COMPLETE_LINE_BY_LINE_ARCHIVE = {
  citation: 'Northcote, G. A. S. (1907). "The Nilotic Kavirondo." Journal of the Royal Anthropological Institute of Great Britain and Ireland, Vol. 37, pp. 58–66.',
  stableUrl: 'http://www.jstor.org/stable/2843247',
  migrationAndKinship: {
    properName: 'Jaluo (Nilotic Kavirondo)',
    habitat: 'North-eastern shore of the Victoria Nyanza',
    linguisticKin: 'Belong to the same family as the Dinka tribe of the Soudan, and are very near relations of the Aluri (Alur) and Acholi tribes on both sides of the Nile near Wadilai (less difference than between two adjoining Bantu tribes).',
    migrationTradition: 'Originally one tribe with the Acholi; migrated from the north-west in a body under one big chief due to overcrowding or a dispute about the chieftaincy, later splitting into smaller chieftaincies via passive secession rather than conquest.'
  },
  physiqueDietAndDress: {
    physiqueComparison: 'Large-boned, deep-chested, somewhat fleshy, and very muscular—contrasting with the Masai, Nandi, and Lumbwa (who have great endurance but are not muscular races because until the great cattle plague of 1883 they lived entirely on animal food, whereas the Jaluo are agricultural/industrial with a mainly vegetable diet).',
    facialFeatures: 'Rather squat noses, large mouths, and big wide-opened eyes, with occasional structural faces and fine noses.',
    everydayDressAndTasselLaw: 'Men wear a goat skin hung over the right shoulder or nothing, with 6 to 10 pieces of iron wire wound round arms and legs (polished with oil and fat, though causing continual sores and ulcers) and strings of neck beads. Married women wear a small grass tassel behind hanging from the waist (discarded on the husband\'s death until re-marriage; anyone touching this tassel pays a fine of 3 goats to the husband), and latterly a strip of cloth 6 or 8 inches wide round the waist just meeting in front.',
    hutTaxAndCurrencyTransition: 'Keen traders who are realizing the advantages of the rupee over iron wire, accelerated by the 3-rupee annual hut tax (3 rupees a year for every hut).',
    fullCeremonialDress: [
      'Head: Huge hat of monkey or goat skin, or of feathers (often ostrich feathers).',
      'Face: Well-oiled face ornamented by lines of small white beads leading across the forehead, nose, upper lip, and chin, fastened behind the ear.',
      'Neck: Strings of beads, brass cartridge cases, fetishes, and 1 or 2 rounds of iron wire.',
      'Chest & Back: Rows of cowries sewn on to strips of leather across the chest and sometimes hanging down the back.',
      'Right Shoulder: Big black feather boa, or an ornament made of the long hair from the wildebeest\'s tail (the everyday goat skin is discarded).',
      'Waist: Strings of iron beads made by the native blacksmith out of extra-polished iron wire, with hanging bunches of feathers (transferred to his wife or wives after the dance so they may also have their fling).',
      'Body & Hair: Body oiled and covered with red clay or charcoal, or striped/spotted with yellow clay in imitation of the zebra or leopard; hair twisted into long thin strings dressed with oil and red clay/charcoal, or partially shaved leaving at least one little tuft (cut off and worn by the chief mourner at the owner\'s funeral).',
      'Knee & Ankle Bells: Small bells made of iron wire in the shape of broad-bean pods, with 1 or 2 small iron beads inside.'
    ],
    weaponsAndShields: 'Long-hafted, short-bladed spear, a Masai sword on the right hip, and occasionally a bow and arrows instead of the spear. Buffalo-hide shields measure ~3 feet 6 inches vertically and nearly 6 feet horizontally, curved back to cover left side, back, and front, painted red, white, and black in artistic designs (originally family heraldry, now individual taste).'
  },
  polityLandAndArchitecture: {
    semiFeudalPolity: 'Divided into chieftaincies or clans without an overlord; each chief places dependencies of 10 to 50 villages under sub-chiefs or headmen. In a crisis, an informal council of village heads (patres familiarum) expresses views without any voting, final decision resting with the chief. Tyranny is met by passive secession (headmen setting up as independent chiefs).',
    landTenureAndSwahiliLoans: 'Clan land is held in common and guarded against other chiefs\' subjects (trespass causes bloody quarrels), though outsiders may settle freely without payment if they obey the chief. Each village is a family headed by the father or eldest brother, with 1 or 2 retainers called askari (Swahili loanword = police/retainers). In laying out the shamba (Swahili loanword = agricultural land), every adult male and female marks out and tills an individual plot. Crops belong strictly to the tiller: a son can sell only grain he grew himself; one askari reaping what another sowed is a thief; if A\'s cattle or goats wander into B\'s shamba in the same village, B claims compensation. Broader land tenure is only temporary squatter\'s rights (no claim in perpetuo).',
    circularVillageAndGranaries: 'Circular village fenced with euphorbia bush, stone or mud wall, or watling. Central cattle pen surrounded by basket/wicker-work store houses (granaries) raised ~2 feet off the ground, ~5 feet high and 3 feet in diameter, with a small top opening for a man\'s head and shoulders and a grass roof.',
    fourHutSystem: 'Outside the granaries stands the circle of huts (sticks and grass plastered with dung and mud): every married male has (1) his own hut, (2) a hut for each wife, (3) a smaller hut for his sons, and (4) a smaller hut for his daughters (who live with an old woman, often their grandmother), keeping unmarried sexes rigidly apart.'
  },
  marriageInheritanceAndChieftainshipCase: {
    exogamyAndPolygyny: 'Strict clan exogamy; a son may marry his father\'s non-blood-related wife (step-mother), and two sisters are often simultaneously the wives of one man.',
    propertyInheritance: 'A husband allocates cattle to each wife (chief/first wife receiving the largest share); at his death, each wife and her cattle pass to her own sons (eldest son receiving the largest share as pater familias). If the first wife has no sons, all property (including the first wife and her daughters) passes to sons by another wife; if he has no sons at all, it passes to his brother or nearest male blood relation. Females can own no property.',
    chieftainshipCaseStudy: 'Documented succession case (p. 61): A chief married first wife (A) who bore two daughters (B and C); meanwhile he married second wife (E) who bore a son (F); later first wife (A) bore a son (D). On the chief\'s death, (D) became chief by virtue of the priority of his mother (A). Exceptions occur if (D) is too young to govern—then (F) may become chief since regency is unknown—or if both (D) and (F) are infants, an elder male blood relation such as their eldest uncle succeeds (often causing quarrels when the dispossessed heir grows up).',
    courtingAndWeddingRites: 'Suitor brings a bull or goats as earnest money after the two fathers set the dowry; at the preliminary feast an offering is set aside for the sun-god consisting of a little meat, part of a chicken, some mtama (millet), and native beer. Days later he carries the bride off by simulated force to his village, where she performs the rite of cooking the first dinner for him (signifying acceptance as husband), then returns home while he pays dowry installments (carrying her away for a few days at each payment). All offspring of the dowry livestock transfer at completion. If childless or dying early, the dowry is reclaimable or her sister takes her place; pre-existing children belong to the husband; dowry is recoverable if she deserts him.',
    dowryPreAndPost1883: 'Before the 1883 cattle plague: 20 head of cattle (plus goats, grain, etc.). In 1907: 7 head of cattle is a handsome dot, falling as low as 1 bull and 20 goats, with 1 heifer and 1 bull as the usual minimum.'
  },
  onomasticsFuneralsAndReligion: {
    birthAndGhostNames: 'Time-of-day names: onyango (morning), oching (noon), odiambo (afternoon), otieno (night). Dream names from a deceased relative appearing to the mother in sleep before birth, or posthumous names dictated by the dead father\'s ghost. Hereditary nicknames: obele ("the man who owned much mtama"), oliech ("the man who killed an elephant"), obonyo ("the man like a locust").',
    funeralCeremonies: 'While dying, relatives howl outside while doctors rattle stones in gourds and blow clouds of tobacco smoke around the invalid to drive out evil spirits. Next day, mourners in full war paint bring their best bulls; the mother or chief wife wears the dead man\'s goat skin and cut-off hair tuft, running round the village rattling a gourd and singing incantations; visitors refresh with beer and tobacco, charge up and down hanging on to their bulls\' tails and pricking them, then fight invisible evil spirits singly or in twos and threes behind their huge shields, feast, and make the sun offering.',
    wailingAndRecumbentBurial: 'Wailing at sunrise and sunset lasts 6 days for a chief (each village mourning separately after the dance day) and 3 days for a common person. The corpse is buried in a recumbent position inside the deceased\'s hut, which continues to be occupied by his heir (refuting Sir Charles Eliot\'s statement that the hut is destroyed or disused). At the end of mourning, beer, grain, and chicken flesh are offered on the grave.',
    sunWorshipAndVerbatimQuote: 'Worship the sun and to a lesser extent the moon, viewing the sun as rarely beneficent, often malignant, and usually apathetic. Verbatim native quote (p. 63): "It does not matter how much you pray, you fall sick and die just the same." Offerings are made to appease rather than obtain positive benefits.'
  },
  courtCasesMedicineAndRainMaking: {
    case1MissingRazorWitchcraftTrial: 'A man missed his razor, gave his two wives till evening to find it, allegedly struck one pregnant wife, and affixed two charms to their huts warning the thief would shortly die. Next day the pregnant wife delivered a still-born child and died. Tried for murder, his accusers blamed his witchcraft while the court held guilt lay only in the alleged blow; when the blow was proved a myth, he was discharged to his accusers\' disgust.',
    secretMurderDoorCharm: 'Burying a dead rat or chicken at the victim\'s door so that when he steps on the spot next morning he will die that day.',
    case2HutRoofCureAssault: 'Against the evil eye and illness, remedies include noise, drugs, herbs, and expert wet and dry cupping. In one case, a native practitioner ordered a sick wife to climb to the roof of her hut and stay there until better; when she died under this open-air cure, her husband beat the doctor violently with a club and was charged with assault.',
    case3LimeQuarryFatalSurgery: 'A Government employee suffered a broken thigh and internal injuries in a lime-quarry; Northcote bound a temporary splint, sent for the Indian apothecary, and forbade moving him, but a native surgeon called in during the night cut the man open to make a better diagnosis, killing him.',
    rainMakerRitualAndIndianShopkeeperAnecdote: 'Living near a big sacred tree, the rain-maker boils herbs in a large pot beneath it, draws decoction into a smaller pot over which he squats on his haunches, draws liquid through a hollow reed, blows to make the pot bubble, and squirts the liquid into the air with mutterings. When valley residents complained he was deflecting the lesser rains to the hills and asked the Bwana (Northcote) for a policeman, Northcote gave them a paper scribbled with crooked lines as a summons; the rain-maker refused to come, declaring the paper emanated from an Indian shopkeeper, but a tremendous storm broke that evening and the villagers praised Northcote\'s letter for frightening the magician into giving rain.'
  },
  subsistenceCharacterAndModernization: {
    cattleBleedingAndHemp: 'Drawing blood from living cattle and drinking it (justified as the only way to obtain salt in many parts of Kavirondo); heavy beer drinking; older men smoke hemp (bhang).',
    fiveFishingMethods: [
      '1. Rod and line',
      '2. Sunken trawl line',
      '3. Weirs',
      '4. Woven grass substitutes for nets',
      '5. Spearing with four-pronged wooden spears hurled with extraordinary accuracy at water swirls'
    ],
    huntingDogsAndThrowingSticks: 'Well-trained hunting dogs that run down an oribi or a hare, or retrieve a wounded guinea fowl knocked down by throwing sticks.',
    characterMusicAndLitigation: 'Post-puberty unmarried girls may have male "friends" from another clan with a strict veto on unchastity, and married women must be strictly faithful. Fond of fun, horse-play, and roars of laughter; skilled blacksmiths and shield painters; play the eight-stringed harp with extempore heroic or comic songs (yet cannot build a cornered room without painful apprenticeship). Better fighters than the Swahili and more disciplined policemen than the Masai. Painfully litigious like the natives of Hindustan, bringing civil cases from the time of their grandfathers to reverse pre-colonial decisions.',
    nineModernOccupationsAtKisumu: 'Employed as (1) soldiers, (2) sailors, (3) police, (4) masons, (5) carpenters, (6) sawyers, (7) blacksmiths, (8) gardeners, and (9) boys—including a smart native Jaluo sergeant instructor at Kisumu Provincial Headquarters after only 4–5 years of administration.'
  }
} as const;
