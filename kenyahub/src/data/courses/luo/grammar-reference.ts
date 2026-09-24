// Advanced Grammar Reference Data
// Extracted from JSON linguistic sources for Learn tab lessons
// Sources:
//   - "Dholuo Grammar for Beginners" by Peter Onyango Onyoyo
//   - "A Handbook of the Kavirondo (Dholuo) Language" by Mill-Hill Fathers
//   - "Dholuo Grammar Data" linguistic reference

// ============================================================
// PREPOSITIONS with examples
// ============================================================
export const PREPOSITIONS = [
    { luo: 'e', english: 'in, at, on', examples: ['Thuol ni e ot — A snake is in the house', 'Nyasaye ni e polo — God is in heaven'] },
    { luo: 'ne', english: 'to, for', examples: ['Watero chiemo ne welo — We are taking food to the guests'] },
    { luo: 'gi', english: 'with, by', examples: ['Adhi sikul gi tienda — I go to school on foot', 'Aloo dhi nam gi wuon — Aloo is going to the lake with her father'] },
    { luo: 'mar', english: 'of, belonging to', examples: ['Bug japuonj — the teacher\'s book'] },
    { luo: 'kod / kodi', english: 'with (comitative)', examples: ['Idwaro wacho koda? — Do you want to speak with me?'] },
    { luo: 'kuom', english: 'from, about', examples: [] },
    { luo: 'ei', english: 'inside, within', examples: [] },
    { luo: 'e bwo', english: 'under, below', examples: [] },
    { luo: 'nyim', english: 'in front of, before', examples: [] },
    { luo: 'bath', english: 'beside, next to', examples: [] },
    { luo: "dier ng'e", english: 'behind', examples: [] },
    { luo: 'malo', english: 'up, above', examples: ["Chung' malo — Stand up"] },
    { luo: 'piny', english: 'down, below', examples: ['Bed piny — Sit down', 'Keturu gikmoko piny — Put the loads down'] },
    { luo: 'nyaka', english: 'until, up to', examples: ['Pur nyaka akani nyaka chopi kacha — Dig from here to there'] },
];

// ============================================================
// CONJUNCTIONS with examples
// ============================================================
export const CONJUNCTIONS = [
    { luo: 'gi', english: 'and (linking nouns)', examples: ['Otieno gi wuon gero ot — Otieno and his father are building a house'] },
    { luo: 'to', english: 'but, however', examples: ['Akelo ndiko to nyamin somo — Akelo is writing, but her sister is reading'] },
    { luo: 'kendo', english: 'and (same subject)', examples: ['John dhi kendo duogo — John goes and comes back'] },
    { luo: 'nikech', english: 'because', examples: ['Ok adhi sikul nikech wiya bara — I am not going to school because I have a headache'] },
    { luo: 'emomiyo', english: 'that is why', examples: ['Natue emomiyo ne ok obiro — He was sick, that is why he did not come'] },
    { luo: 'ka', english: 'if, when', examples: ['Ka koth ochwe to kik ibi — If it rains, do not come'] },
    { luo: 'kaka', english: 'like, as', examples: ["Ode rieny kaka sulwe — His house shines like a star"] },
    { luo: 'kata', english: 'although, even if, or', examples: ['Kata ahere to ok anyal — Although I love her, I cannot'] },
    { luo: 'nimar', english: 'for, because (formal)', examples: ["Asomo dholuo nimar adwa ng'eye — I study Dholuo because I want to know it"] },
    { luo: 'mondo', english: 'in order that, so that', examples: ['Chiemo nimondo ayud teko — I eat so that I get energy'] },
];

// ============================================================
// VERB CONJUGATION TABLE (hero = to love)
// ============================================================
export const VERB_CONJUGATION_HERO = {
    verb: 'hero',
    meaning: 'to love',
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
            { person: 'I loved', luo: 'Ne ahero' },
            { person: 'You loved', luo: 'Ne ihero' },
            { person: 'He/She loved', luo: 'Ne ohero' },
            { person: 'We loved', luo: 'Ne wa hero' },
            { person: 'You (pl) loved', luo: 'Ne uhero' },
            { person: 'They loved', luo: 'Ne gihero' },
        ],
        future: [
            { person: 'I shall love', luo: 'Anaher' },
            { person: 'You will love', luo: 'Iniher' },
            { person: 'He/She will love', luo: 'Onaher' },
            { person: 'We shall love', luo: 'Wanaher' },
            { person: 'You (pl) will love', luo: 'Unuher' },
            { person: 'They will love', luo: 'Giniher' },
        ],
        imperative: [
            { person: 'Love! (singular)', luo: 'Her!' },
            { person: 'Love! (plural)', luo: 'Heruru!' },
        ],
        subjunctive: [
            { person: 'that I love', luo: 'Aher' },
            { person: 'that you love', luo: 'Iher' },
            { person: 'that he/she love', luo: 'Oher' },
            { person: 'that we love', luo: 'Waher' },
            { person: 'that you (pl) love', luo: 'Uher' },
            { person: 'that they love', luo: 'Giher' },
        ],
        negative_present: [
            { person: 'I do not love', luo: 'Ok ahero' },
            { person: 'You do not love', luo: 'Ok ihero' },
            { person: 'He/She does not love', luo: 'Ok ohero' },
            { person: 'We do not love', luo: 'Ok wa hero' },
            { person: 'You (pl) do not love', luo: 'Ok uhero' },
            { person: 'They do not love', luo: 'Ok gihero' },
        ],
    },
};

// ============================================================
// VERB TENSE FORMATION RULES
// ============================================================
export const VERB_TENSE_RULES = {
    present: {
        description: 'Uses subject prefix + verb stem',
        formula: 'prefix + verb',
        examples: [
            { luo: 'adhi', english: 'I go / I am going' },
            { luo: 'idhi', english: 'you go' },
            { luo: 'odhi', english: 'he/she goes' },
            { luo: 'wadhi', english: 'we go' },
            { luo: 'udhi', english: 'you (pl) go' },
            { luo: 'gidhi', english: 'they go' },
        ],
    },
    past: {
        description: "Uses 'nene' or 'ne' before verb",
        formula: 'ne/nene + prefix + verb',
        examples: [
            { luo: 'nene adhi', english: 'I went' },
            { luo: 'ne odhi', english: 'he/she went' },
            { luo: 'nene gidhi', english: 'they went' },
        ],
    },
    past_habitual: {
        description: "Uses 'nene' + verb + 'ga'",
        formula: 'nene + prefix + verb + ga',
        examples: [
            { luo: 'nene achiemoga', english: 'I was eating / used to eat' },
            { luo: 'nene asomoga dholuo', english: 'I used to study Dholuo' },
        ],
    },
    future: {
        description: "Uses 'biro' (will) as auxiliary",
        formula: 'prefix + biro + verb',
        examples: [
            { luo: 'abiro dhi', english: 'I will go' },
            { luo: 'wabiro dhi', english: 'we will go' },
            { luo: 'gibiro dhi', english: 'they will go' },
        ],
    },
    imperative: {
        description: 'Drop infinitive ending (-o/-yo) for singular, add -uru for plural',
        formula: 'verb root (+ uru for plural)',
        examples: [
            { luo: 'chiem!', english: 'eat! (from chiemo)' },
            { luo: 'nind!', english: 'sleep! (from nindo)' },
            { luo: 'ti!', english: 'work! (from tiyo)' },
            { luo: 'ndik!', english: 'write! (from ndiko)' },
            { luo: 'lem!', english: 'pray! (from lemo)' },
        ],
    },
    conditional: {
        description: "Uses 'ka' (if) and 'to' (then)",
        formula: 'ka + clause, to + clause',
        examples: [
            { luo: 'ka ibiro, to wabiro dhi', english: 'if you come, then we will go' },
            { luo: 'ka itedo, to wabiro chiemo', english: 'if you cook, we will eat' },
        ],
    },
    negation: {
        description: "Uses 'ok' before the verb",
        formula: 'ok + prefix + verb',
        examples: [
            { luo: 'ok adhi', english: 'I am not going' },
            { luo: "ok ang'eye", english: 'I do not know him' },
            { luo: 'ok rach', english: 'it is not bad' },
        ],
    },
    obligation: {
        description: "Uses 'nyaka' (must/should)",
        formula: 'nyaka + prefix + verb',
        examples: [
            { luo: 'nyaka adhi', english: 'I must go' },
            { luo: 'nyaka iwuo', english: 'you must speak' },
            { luo: 'nyaka ite', english: 'you must work' },
        ],
    },
    probability: {
        description: "Uses 'nyalo' (can/may/might)",
        formula: 'subject + nyalo + verb',
        examples: [
            { luo: 'koth nyalo chue kawuono', english: 'it may rain today' },
            { luo: 'wanyalo dhi kiny', english: 'we may go tomorrow' },
        ],
    },
};

// ============================================================
// REFLEXIVE VERBS
// ============================================================
export const REFLEXIVE_VERBS = {
    description: 'Reflexives are marked by -rV suffix where V is a person marker',
    person_markers: [
        { person: 'I ... myself', suffix: '-ra / -re', example: 'Ahinyora — I have hurt myself' },
        { person: 'You ... yourself', suffix: '-ri / -re', example: 'Ihinyori — You have hurt yourself' },
        { person: 'He/She ... self', suffix: '-re', example: 'Ohinyore — He has hurt himself' },
        { person: 'We ... ourselves', suffix: '-re', example: 'Wahinyore — We have hurt ourselves' },
        { person: 'You (pl) ... yourselves', suffix: '-ru / -re', example: 'Uhinyoru — You have hurt yourselves' },
        { person: 'They ... themselves', suffix: '-re', example: 'Gihinyore — They have hurt themselves' },
    ],
    examples: [
        { luo: "Dhiang' nang'ere", english: 'The cow is licking itself' },
        { luo: "Jaduong' ohinyore", english: 'The elder has hurt himself' },
    ],
    reciprocal_examples: [
        { luo: 'Jokong\'o yanyore', english: 'Drunkards are insulting one another' },
        { luo: 'Otiene gi Apiyo oherore', english: 'Otieno and Apiyo love each other' },
    ],
};

// ============================================================
// NOUN CLASSES & PLURAL FORMATION
// ============================================================
export const NOUN_CLASSES = [
    {
        name: 'Class 1: -nde plurals',
        suffix: '-nde',
        examples: [
            { singular: 'dul', plural: 'dunde', english: 'hut' },
            { singular: 'duol', plural: 'duonde', english: 'voice' },
            { singular: 'pien', plural: 'piende', english: 'skin/hide' },
            { singular: 'kuon', plural: 'kuonde', english: 'porridge' },
            { singular: 'thuol', plural: 'thuonde', english: 'snake' },
        ],
    },
    {
        name: 'Class 2: -che plurals',
        suffix: '-che',
        examples: [
            { singular: 'akuru', plural: 'akuche', english: 'dove' },
            { singular: 'apuoyo', plural: 'apuoche', english: 'rabbit' },
            { singular: 'dwe', plural: 'dweche', english: 'moon/month' },
            { singular: 'ndara', plural: 'ndeche', english: 'road' },
            { singular: 'wach', plural: 'weche', english: 'word' },
        ],
    },
    {
        name: 'Class 3: -mbe plurals',
        suffix: '-mbe',
        examples: [
            { singular: 'rombo', plural: 'rombe', english: 'sheep' },
            { singular: 'cham', plural: 'chambe', english: 'grains' },
            { singular: 'kom', plural: 'kombe', english: 'chair' },
            { singular: 'lum', plural: 'lumbe', english: 'grass' },
            { singular: 'olemo', plural: 'olembe', english: 'fruit' },
        ],
    },
    {
        name: 'Class 4: -je/-ye plurals',
        suffix: '-je / -ye',
        examples: [
            { singular: 'mach', plural: 'meje', english: 'fire' },
            { singular: 'winy', plural: 'winje', english: 'bird' },
            { singular: 'dayo', plural: 'deye', english: 'grandmother' },
        ],
    },
    {
        name: 'Class 5: Unchanged plurals',
        suffix: '(same form)',
        examples: [
            { singular: 'rech', plural: 'rech', english: 'fish' },
            { singular: 'liech', plural: 'liech', english: 'elephant' },
            { singular: 'kich', plural: 'kich', english: 'bee/orphan' },
        ],
    },
    {
        name: 'Class 6: Irregular plurals',
        suffix: '(irregular)',
        examples: [
            { singular: 'dhako', plural: 'mon', english: 'woman → women' },
            { singular: 'dichuo', plural: 'chuo', english: 'man → men' },
            { singular: 'ot', plural: 'udi', english: 'house → houses' },
            { singular: 'dala', plural: 'mier', english: 'home → homes' },
        ],
    },
    {
        name: 'Class 7: ja-/jo- person nouns',
        suffix: 'ja- → jo-',
        examples: [
            { singular: "jaduong'", plural: 'jodongo', english: 'elder' },
            { singular: 'japuonj', plural: 'jopuonj', english: 'teacher' },
            { singular: 'jakom', plural: 'jokom', english: 'chairperson' },
            { singular: 'jajuok', plural: 'jojuogi', english: 'wizard' },
        ],
    },
    {
        name: 'Class 8: -ni plurals',
        suffix: '-ni',
        examples: [
            { singular: 'higa', plural: 'higni', english: 'year' },
            { singular: 'law', plural: 'lewni', english: 'cloth' },
            { singular: 'mitoka', plural: 'mitokni', english: 'car' },
        ],
    },
];

// ============================================================
// SENTENCE PATTERNS
// ============================================================
export const SENTENCE_PATTERNS = [
    {
        name: 'Subject + Verb (SV)',
        description: 'Simple sentences with a subject and an action',
        examples: [
            { luo: 'Omolo biro', english: 'Omolo is coming' },
            { luo: 'Nyako cha tedo', english: 'That girl is cooking' },
        ],
    },
    {
        name: 'Subject + Complement (S+Cs)',
        description: 'Describing a subject without a verb',
        examples: [
            { luo: 'Omolo ber', english: 'Omolo is good' },
            { luo: 'Jatichna jakuo', english: 'My servant is a thief' },
        ],
    },
    {
        name: 'Subject + Verb + Object (SVO)',
        description: 'Standard action sentences with a direct object',
        examples: [
            { luo: "Ng'ato onego jajwok", english: 'Someone has killed a wizard' },
            { luo: "Juma ochamo ring'o manumu", english: 'Juma has eaten raw meat' },
        ],
    },
    {
        name: 'Subject + Locative (S+LA)',
        description: 'Sentences describing location',
        examples: [
            { luo: 'Thuol ni e ot', english: 'A snake is in the house' },
            { luo: 'Nyasaye ni e polo', english: 'God is in heaven' },
        ],
    },
    {
        name: 'S + V + Object + Location (SVOL)',
        description: 'Action with an object placed somewhere',
        examples: [
            { luo: 'Apiyo keto pala e tiende', english: 'Apiyo is putting the knife at her foot' },
            { luo: "Ng'ato oolo pi e puga", english: 'Someone has poured water in a gourd' },
        ],
    },
    {
        name: 'S + V + Indirect Obj + Direct Obj (SVIODO)',
        description: 'Giving, bringing, or showing something to someone',
        examples: [
            { luo: 'Mama amiyo nyathi chiemo', english: 'Mother is giving the baby food' },
            { luo: 'Baba okelo ne nyathi nanga', english: 'Father has brought the baby a dress' },
        ],
    },
];

// ============================================================
// ADJECTIVE FORMATION & COMPARISON
// ============================================================
export const ADJECTIVE_FORMATION = {
    prefix: 'ma-',
    description: 'Most adjectives are formed by adding the prefix "ma-" to an adjective root.',
    roots: [
        { root: 'ber', adjective: 'maber', english: 'good / beautiful' },
        { root: 'rach', adjective: 'marach', english: 'bad / ugly' },
        { root: "duong'", adjective: "maduong'", english: 'big / great' },
        { root: 'bor', adjective: 'mabor', english: 'tall / long / far' },
        { root: 'tin', adjective: 'matin', english: 'small / little' },
        { root: "ng'eny", adjective: "mang'eny", english: 'many / much' },
        { root: 'mit', adjective: 'mamit', english: 'sweet / delicious' },
        { root: 'kech', adjective: 'makech', english: 'bitter / hot' },
        { root: 'liet', adjective: 'maliet', english: 'hot' },
        { root: "ng'ich", adjective: "mang'ich", english: 'cold' },
        { root: 'pek', adjective: 'mapek', english: 'heavy / difficult' },
        { root: 'yot', adjective: 'mayot', english: 'light / easy' },
    ],
    comparison: {
        equal: { particle: 'machal kod / kaka', example: 'Mae bor machal kod macha — This is as tall as that' },
        comparative: { particle: 'moloyo', example: 'Mae bor moloyo macha — This is taller than that' },
        superlative: { particle: 'moloyo te', example: 'Maber moloyo te — The best' },
    },
    intensifiers: [
        { luo: 'ahinya', english: 'very', example: 'Maber ahinya — Very good' },
        { luo: 'thiriri', english: 'very white', example: 'Marachar thiriri — Snow white' },
        { luo: 'ha', english: 'very red / very hot', example: 'Makwar ha — Very red' },
        { luo: 'ti', english: 'very black', example: "Marateng' ti — Pitch black" },
        { luo: 'thi', english: 'very cold', example: "Mang'ich thi — Freezing cold" },
    ],
    colors: [
        { english: 'red', noun: 'rakwar', adjective: 'makwar' },
        { english: 'black', noun: "rateng'", adjective: "marateng'" },
        { english: 'white', noun: 'rachar', adjective: 'marachar' },
        { english: 'green', noun: 'ralum', adjective: 'maralum' },
        { english: 'blue', noun: 'rambulu', adjective: 'marambulu' },
        { english: 'yellow', noun: "ratong' gweno", adjective: "maratong' gweno" },
        { english: 'brown', noun: 'rabuor', adjective: 'marabuor' },
        { english: 'grey', noun: 'ralik', adjective: 'maralik' },
    ],
};

// ============================================================
// NAMING CONVENTIONS
// ============================================================
export const NAMING_CONVENTIONS = {
    rules: {
        masculine_prefix: 'O-',
        feminine_prefix: 'A-',
        description: 'Traditional Luo names use O- prefix for males and A- prefix for females',
    },
    time_based_names: [
        { masculine: 'Omondi', feminine: 'Amondi', occasion: 'Born in the morning' },
        { masculine: 'Onyango', feminine: 'Anyango', occasion: 'Born when sun rising' },
        { masculine: 'Odhiambo', feminine: 'Adhiambo', occasion: 'Born in the evening' },
        { masculine: 'Otieno', feminine: 'Atieno', occasion: 'Born at night' },
        { masculine: 'Okeyo', feminine: 'Akeyo', occasion: 'Born during harvest' },
        { masculine: 'Okech', feminine: 'Akech', occasion: 'Born during hunger/famine' },
        { masculine: "Ochieng'", feminine: "Achieng'", occasion: 'Born when sun shining' },
        { masculine: 'Okoth', feminine: 'Akoth', occasion: 'Born when raining' },
        { masculine: 'Owino', feminine: 'Awino', occasion: 'Born with cord around neck' },
        { masculine: 'Opiyo', feminine: 'Apiyo', occasion: 'First-born twin' },
        { masculine: 'Odongo', feminine: 'Adongo', occasion: 'Second-born twin' },
    ],
    origin_names: {
        description: "ja- prefix (male) / nyar- prefix (female) indicate origin",
        examples: [
            { male: 'Ja Gem', female: 'Nyar Gem', meaning: 'From Gem' },
            { male: 'Ja Kisumo', female: 'Nyar Kisumo', meaning: 'From Kisumu' },
            { male: 'Ja Kenya', female: 'Nyar Kenya', meaning: 'Kenyan' },
        ],
    },
};

// ============================================================
// WORD FORMATION PATTERNS
// ============================================================
export const WORD_FORMATION = {
    agent_nouns: {
        description: "Prefix 'ja-' for singular, 'jo-' for plural (person who does X)",
        examples: [
            { singular: 'jatedo', plural: 'jotedo', english: 'cook(s)' },
            { singular: 'jatich', plural: 'jotich', english: 'worker(s)' },
            { singular: 'japuonj', plural: 'jopuonj', english: 'teacher(s)' },
        ],
    },
    tribal_nouns: {
        description: "Prefix 'ja-' for singular, no prefix for plural",
        examples: [
            { singular: 'Jaluo', plural: 'Luo', english: 'A Luo / The Luo people' },
        ],
    },
    instrument_nouns: {
        description: "Prefix 'ra-' to verb for tool/instrument nouns",
        examples: [],
    },
    verbal_nouns: {
        description: "Drop final '-o' from verb to get the noun form",
        examples: [
            { verb: 'hero', noun: 'her', english: 'love (n.)' },
            { verb: 'tedo', noun: 'ted', english: 'cooking (n.)' },
        ],
    },
    diminutives: {
        description: "Prefix 'Nya-' to singular and 'Nyi-' to plural for diminutive",
        examples: [],
    },
};

// ============================================================
// DHOLUO ALPHABET & PRONUNCIATION
// ============================================================
export const ALPHABET = {
    letters: ['a', 'b', 'ch', 'd', 'dh', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', "ng'", 'ny', 'o', 'p', 'r', 's', 't', 'th', 'u', 'w', 'y'],
    vowels: [
        { letter: 'a', pronunciation: 'as in "father"', example: 'Mako — to hold' },
        { letter: 'e', pronunciation: 'as "a" in "fake"', example: 'Lamo — to pray' },
        { letter: 'i', pronunciation: 'as in "police"', example: 'Limo — to visit' },
        { letter: 'o', pronunciation: 'as "oa" in "coach"', example: 'Moso — to greet' },
        { letter: 'u', pronunciation: 'as in "bull"', example: 'Bur — a hole' },
    ],
    special_consonants: [
        { letter: 'ch', pronunciation: 'as in "chat"', example: 'Chak — milk' },
        { letter: 'dh', pronunciation: 'as "th" in "this"', example: 'Dhiyo — to go' },
        { letter: 'th', pronunciation: 'as "th" in "think"', example: 'Thiedho — to cure' },
        { letter: "ng'", pronunciation: 'nasal, as "ng" in "song"', example: "Ng'owo — a fig tree" },
        { letter: 'ny', pronunciation: 'one nasal sound', example: 'Nyako — girl' },
    ],
    grouped_consonants: [
        'cha, che, chi, cho, chu',
        'dha, dhe, dhi, dho, dhu',
        'mba, mbe, mbi, mbo, mbu',
        'nda, nde, ndi, ndo, ndu',
        "ng'a, ng'e, ng'i, ng'o, ng'u",
        'nya, nye, nyi, nyo, nyu',
        'tha, the, thi, tho, thu',
    ],
    tones: {
        description: 'Dholuo is a tone language. High and low tones can change meaning.',
        example: { word: 'kich', high_tone: 'bee', low_tone: 'orphan' },
    },
};

// ============================================================
// CONVERSATION PHRASEBOOKS (for lessons)
// ============================================================
export const CONVERSATION_HOUSEHOLD = [
    { luo: 'Wachni jatedo', english: 'Tell the cook' },
    { luo: 'Adwaro chiemo', english: 'I want something to eat' },
    { luo: 'Kel pi majitech', english: 'Bring some hot water' },
    { luo: 'Ket pi e mach', english: 'Put the water on the fire' },
    { luo: 'Lwok sembogi', english: 'Wash those plates' },
    { luo: 'Kikombo ok ifwe', english: 'That cup is not clean' },
    { luo: 'Amok taya', english: 'Light the lamp' },
    { luo: 'Chiegi dhoot', english: 'Close the door' },
    { luo: 'Miia funguo', english: 'Give me the keys' },
    { luo: 'Lwok lepegi', english: 'Wash these clothes' },
    { luo: 'Kel chiemo koro', english: 'Dish up the food now' },
    { luo: 'Pedhina kitandana maber', english: 'Make my bed properly' },
];

export const CONVERSATION_HEALTH = [
    { luo: "Nitiye ng'ato matuwo?", english: 'Is there anybody sick?' },
    { luo: "Ot-uwo ang'o?", english: 'What is the matter with him?' },
    { luo: 'Lingra duto ramna', english: 'I have pains all over my body' },
    { luo: 'Lingra rimna ka', english: 'I feel a pain here' },
    { luo: 'Wiya usi maka', english: 'I have fever' },
    { luo: 'Adiewo', english: 'I have diarrhoea' },
    { luo: 'Nindo otama otieno', english: 'I cannot sleep at night' },
    { luo: 'Bada otur', english: 'My arm is broken' },
    { luo: 'Wirive yadhini', english: 'Put on this ointment' },
    { luo: 'Itiwe gi nangani', english: 'Tie it up with this bandage' },
    { luo: "Kik irie badi ndalo auchiel", english: 'Do not stretch your arm for six days' },
    { luo: 'Koro onego adhi', english: 'I must go now' },
];

export const CONVERSATION_WORK = [
    { luo: 'Idwaro tich?', english: 'Do you want work?' },
    { luo: "Ing'eyo tich?", english: 'Do you know how to work?' },
    { luo: "Ing'eyo pur?", english: 'Do you understand cultivation?' },
    { luo: "Ing'eyo tong'o yien?", english: 'Do you know how to cut trees?' },
    { luo: "Ang'eyo matintin", english: 'I know a little' },
    { luo: "In ng'ato matek?", english: 'Are you a strong man?' },
    { luo: 'In jakanye?', english: 'Where do you come from?' },
    { luo: "In jadala ng'a?", english: 'What village are you from?' },
    { luo: 'Dalani bor?', english: 'Is your village far?' },
    { luo: 'Kel ji moko', english: 'Bring some more men' },
    { luo: 'Kiny nibi okinyi', english: 'Come early in the morning' },
    { luo: 'Bi piyo', english: 'Come quick' },
    { luo: 'Tiuru piyo', english: 'Go on, work hard' },
    { luo: "Ng'atni otiyo maber", english: 'This man works well' },
];

export const CONVERSATION_TRAVEL = [
    { luo: "D'anwang' joting?", english: 'Are any porters available?' },
    { luo: 'Idwaro adi?', english: 'How many do you want?' },
    { luo: 'Dwar joting moko', english: 'Look for some more porters' },
    { luo: 'Miergi bor aunya', english: 'The villages are far away' },
    { luo: 'Kiny wanadhi safari', english: 'We start the journey tomorrow' },
    { luo: 'Isetweyo gikmoko duto?', english: 'Have you got all the loads ready?' },
    { luo: 'Musike moko pek', english: 'Some of the loads are too heavy' },
    { luo: 'Gol gikmoko duto', english: 'Bring out the loads' },
    { luo: 'Itwe piyo', english: 'Tie them up quickly' },
    { luo: 'Luongi joting', english: 'Call the porters' },
    { luo: 'Aorani tut?', english: 'Is this river deep?' },
    { luo: "Nyang'e sitiye?", english: 'Are there crocodiles?' },
    { luo: "Chieng' kech ahinya", english: 'The sun is very hot' },
    { luo: 'Keturu gikmoko piny', english: 'Put the loads down' },
    { luo: "Chieng' wuok yor ugwe", english: 'The sun rises from the east' },
    { luo: "Chieng' podho yor yimbo", english: 'The sun sets in the west' },
];

export const CONVERSATION_VILLAGE = [
    { luo: 'Ruoth ni kanwe?', english: 'Where is the chief?' },
    { luo: 'En dalane', english: 'He is at home' },
    { luo: 'Dhi luonge, obi', english: 'Call him, let him come' },
    { luo: 'Wachne adwaro neno', english: 'Tell him I want to see him' },
    { luo: 'Gisebiro?', english: 'Have they come?' },
    { luo: 'Joko lomo nitiye?', english: 'Are there robbers in these parts?' },
    { luo: 'Adwaro ng\'ato, onyisa yo', english: 'I want a guide to show me the road' },
    { luo: "Penje gi m'odwaro", english: 'Ask him what he wants' },
    { luo: 'Aol', english: 'I am tired' },
    { luo: 'Adhi nindo', english: 'I shall go to bed' },
];

// ============================================================
// MONTHS & DAYS (for lessons reference)
// ============================================================
export const DAYS_OF_WEEK = [
    { english: 'Monday', dholuo: 'Wuok tich', literal: 'Start of work' },
    { english: 'Tuesday', dholuo: 'Tich ariyo', literal: 'Work two' },
    { english: 'Wednesday', dholuo: 'Tich adek', literal: 'Work three' },
    { english: 'Thursday', dholuo: "Tich ang'wen", literal: 'Work four' },
    { english: 'Friday', dholuo: 'Tich abich', literal: 'Work five' },
    { english: 'Saturday', dholuo: "Chieng' ngeso", literal: 'Day of shaving' },
    { english: 'Sunday', dholuo: "Chieng' odira", literal: 'Rest day' },
];

export const MONTHS = [
    { english: 'January', dholuo: 'Dwe mar achiel' },
    { english: 'February', dholuo: 'Dwe mar ariyo' },
    { english: 'March', dholuo: 'Dwe mar adek' },
    { english: 'April', dholuo: "Dwe mar ang'wen" },
    { english: 'May', dholuo: 'Dwe mar abich' },
    { english: 'June', dholuo: 'Dwe mar auchiel' },
    { english: 'July', dholuo: 'Dwe mar abiriyo' },
    { english: 'August', dholuo: 'Dwe mar aboro' },
    { english: 'September', dholuo: 'Dwe mar ochiko' },
    { english: 'October', dholuo: 'Dwe mar apar' },
    { english: 'November', dholuo: 'Dwe mar apar gi achiel' },
    { english: 'December', dholuo: 'Dwe mar apar gi ariyo' },
];
