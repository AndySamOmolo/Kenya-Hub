// Dholuo Grammar Rules — Rebuilt from "A Handbook of the Kavirondo Language"
// by Some Fathers of St. Joseph's Society (Mill-Hill, London), 1920 (Dedication 1896–1921)
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
        { letter: 'b', pronunciation: 'as in bell', example: 'Bam: to be crooked. Tobo: to speak definitely' },
        { letter: 'ch', pronunciation: 'as Ch in Kiswahili (church)', example: 'Chak: milk. Wacho: to speak' },
        { letter: 'd', pronunciation: 'as in deed', example: 'Dol: Colobus monkey. Tedo: to cook' },
        { letter: 'dh', pronunciation: 'as in "though"', example: 'Dhiyo: to go. Puodho: garden' },
        { letter: 'f', pronunciation: 'as in food', example: 'Fuwo: to be foolish' },
        { letter: 'g', pronunciation: 'as in gab (always hard, never as in George)', example: 'Gamo: to reach over. Kago: to split. Gem (pronounce game)' },
        { letter: 'h', pronunciation: 'as in hat', example: 'Hato: to cut deeply' },
        { letter: 'j', pronunciation: 'as in Kiswahili', example: 'Jana. Jaro: to despise' },
        { letter: 'k', pronunciation: 'as in keen', example: 'Kelo: to bring. Kek: a fishscreen' },
        { letter: 'l', pronunciation: 'as in lid', example: 'Lamo: to worship, adore. Lal: to be lost' },
        { letter: 'm', pronunciation: 'as in man', example: 'Min: mother. Limo: to visit' },
        { letter: 'n', pronunciation: 'as in nag', example: 'Nego: to kill. Neno: to see' },
        { letter: 'p', pronunciation: 'as in pen', example: 'Piny: country. Top: to be rotten' },
        { letter: 'r', pronunciation: 'as in rat', example: 'Ramo: to hurt. Gwaro: to scratch' },
        { letter: 's', pronunciation: 'as in sing', example: 'Sara: fishbone. Moso: to greet' },
        { letter: 't', pronunciation: 'as in tell', example: 'Tado: roof. Rito: to watch' },
        { letter: 'th', pronunciation: 'as in thatch', example: 'Thedho: to forge. Thieth: a cure' }
    ],
    special_consonants: [
        { letter: 'mb', pronunciation: 'One sound at word start', example: 'Mbiru: a bird' },
        { letter: 'nd', pronunciation: 'One sound at word start', example: 'Ndawa: tobacco. Ndemo: tweezers' },
        { letter: 'ng', pronunciation: 'Double sound as in "finger"', example: 'Ngege: carp. Ngoro: cowardice' },
        { letter: "ng'", pronunciation: 'Nasal as "ng" in "song"', example: "Ng'owo: a figtree. Bang': after, behind" },
        { letter: 'ny', pronunciation: 'One sound (as French gn in Règne)', example: 'Nyako: girl. Piny: country' }
    ],
    vowels: [
        { letter: 'a', pronunciation: 'as in "father" (long) / as in "fat" (short)', example: 'Mako: to hold. Kal: wimbi' },
        { letter: 'e', pronunciation: 'as "a" in "lake" / as in "hen" / as French "è" in "père"', example: 'Lemo: to pray. Lendo: to clean. Ler: to be clean' },
        { letter: 'i', pronunciation: 'as in "police" / as in "tin" / intermediate between e and i (Note I)', example: 'Limo: to visit. Lith lwedo: finger. Matin: small' },
        { letter: 'o', pronunciation: 'as "oa" in "coach" / as in "song" / as "aw" in "law"', example: 'Moso: to greet. Kwongo: to begin. Loko: to change' },
        { letter: 'u', pronunciation: 'as in "bull" / intermediate between u and o (Note I)', example: 'Bur: a hole. Lur: to be barren' },
        { letter: 'y', pronunciation: 'semi-vowel: vowel before consonant, consonant before vowel (Note II)', example: 'Yweyo: to sweep. Yako: to rob' },
        { letter: 'w', pronunciation: 'semi-vowel: vowel after consonant, consonant before vowel (Note III)', example: 'Yweyo: to breathe. Wacho: to speak' }
    ],
};

// ============================================================
// POSSESSIVE PRONOUNS
// From the Handbook, Chapter I, Paragraph 12 & Chapter III
// Two suffix systems
// ============================================================

export const POSSESSIVE_SUFFIXES_SIMPLE = [
    { suffix: 'a', person: 'my', description: '(my) — used with consonant endings' },
    { suffix: 'i', person: 'your', description: '(your - singular)' },
    { suffix: 'e', person: 'his/her/its', description: '(his/her/its)' },
    { suffix: 'wa', person: 'our', description: '(our)' },
    { suffix: 'u', person: 'your', description: '(your - plural)' },
    { suffix: 'gi', person: 'their', description: '(their)' }
];

export const POSSESSIVE_SUFFIXES_EXTENDED = [
    { suffix: 'na', person: 'my', description: '(my) — used with vowel endings & verb-formed nouns' },
    { suffix: 'ni', person: 'your', description: '(your - singular)' },
    { suffix: 'ne', person: 'his/her/its', description: '(his/her/its)' },
    { suffix: 'wa', person: 'our', description: '(our)' },
    { suffix: 'u', person: 'your', description: '(your - plural)' },
    { suffix: 'gi', person: 'their', description: '(their)' }
];

// Irregular possessives from the Handbook pp. 25-30
export const IRREGULAR_POSSESSIVES: { [key: string]: { [suffix: string]: string } } = {
    'ot': { 'a': 'oda', 'i': 'odi', 'e': 'ode', 'wa': 'odwa', 'u': 'odu', 'gi': 'odgi' },
    'law': { 'a': 'lawa', 'i': 'lawi', 'e': 'lawe', 'wa': 'lawwa', 'u': 'lawu', 'gi': 'lawgi' },
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
    'dhako': { 'a': 'chiega', 'i': 'chiegi', 'e': 'chiege', 'wa': 'chiegwa', 'u': 'chiegu', 'gi': 'chieggi' },
    'chwo': { 'a': 'chwora', 'i': 'chwori', 'e': 'chwore', 'wa': 'chworwa', 'u': 'chworu', 'gi': 'chworgi' },
    'nyako': { 'a': 'nyara', 'i': 'nyari', 'e': 'nyare', 'wa': 'nyarwa', 'u': 'nyaru', 'gi': 'nyargi' },
    'wuod': { 'a': 'woda', 'i': 'wodi', 'e': 'wode', 'wa': 'wodwa', 'u': 'wodu', 'gi': 'wodgi' },
    'wuoyi': { 'a': 'woda', 'i': 'wodi', 'e': 'wode', 'wa': 'wodwa', 'u': 'wodu', 'gi': 'wodgi' },
    'dayo': { 'a': 'dana', 'i': 'dani', 'e': 'dane', 'wa': 'dayowa', 'u': 'dayou', 'gi': 'dayogi' },
    'kwar': { 'a': 'kwara', 'i': 'kwari', 'e': 'kware', 'wa': 'kwarwa', 'u': 'kwaru', 'gi': 'kwargi' },
    'won': { 'a': 'wora', 'i': 'woru', 'e': 'won mare', 'wa': 'wonwa / worwa', 'u': 'wonu', 'gi': 'wongi / worgi' },
    'min': { 'a': 'mama', 'i': 'meru', 'e': 'min mare', 'wa': 'minwa', 'u': 'minu', 'gi': 'mingi' },
    'omin': { 'a': 'omera', 'i': 'omeru', 'e': 'omin mare', 'wa': 'ominwa', 'u': 'ominu', 'gi': 'omingi' },
    'nyamin': { 'a': 'nyamera', 'i': 'nyameru', 'e': 'nyamin mare', 'wa': 'nyaminwa', 'u': 'nyaminu', 'gi': 'nyamingi' },
    'owadwa': { 'a': 'owadwa', 'i': 'owadu', 'e': 'owadigi', 'wa': 'owadwa', 'u': 'owadu', 'gi': 'owadigi' },
    'nyathi': { 'a': 'nyathina', 'i': 'nyathini', 'e': 'nyathine', 'wa': 'nyathiwa', 'u': 'nyathiu', 'gi': 'nyathigi' },
    'ringruok': { 'a': 'ringra', 'i': 'ringri', 'e': 'ringre', 'wa': 'ringrwa', 'u': 'ringru', 'gi': 'ringrgi' },
    'teko': { 'a': 'tekra / tekona', 'i': 'tekri / tekoni', 'e': 'tekre / tekone', 'wa': 'tekrwa / tekowa', 'u': 'tekru / tekou', 'gi': 'tekrgi / tekogi' },
    'mier': { 'a': 'mieya / miecha', 'i': 'mieyi / miechi', 'e': 'mieye / mieche', 'wa': 'mieywa / miechwa', 'u': 'mieyu / miechu', 'gi': 'mieygi / miechgi' },
    'gi': { 'a': 'gira', 'i': 'giri', 'e': 'gire', 'wa': 'girwa', 'u': 'giru', 'gi': 'girgi' },
    "ng'ato": { 'a': "ng'ata", 'i': "ng'ati", 'e': "ng'ate", 'wa': "ng'atwa", 'u': "ng'atu", 'gi': "ng'atgi" },
};

// Construct Possessive Rules from the Handbook, pp. 13-17
export const CONSTRUCT_POSSESSIVE_RULES = [
    { pattern: /la$/, replacement: 'nd', example: 'Pala → Pand (knife of); Sigana → Sigandi nyako (story of the girl)', rule: 'Words ending in "l" or "n" + vowel → nd (except Agulu, Abila, Agola, Obwolo, Ndalo → ch)' },
    { pattern: /l$/, replacement: 'nd', example: 'Bel → Bendi Kisii (the matama of Kisii); Tol → Tond atonga (rope of the basket)', rule: 'Words ending in "l" → nd' },
    { pattern: /lo$/, replacement: 'ch', example: 'Agulu → Aguch nyako (cooking pot of the girl); Obwolo → Obwoch (mushroom of)', rule: 'Exception group (Agulu, Abila, Agola, Obwolo, Ndalo) → ch' },
    { pattern: /yo$/, replacement: 'ch', example: 'Apwoyo → Apwoch (rabbit of); Chiro → Chich Mwa (market of the foreigners)', rule: 'Words ending in r or vowel + y + vowel → ch' },
    { pattern: /dho$/, replacement: 'thi', example: 'Puodho → Puothi bel (garden of millet)', rule: 'Words ending in "dh" → th' },
    { pattern: /do$/, replacement: 't', example: 'Tado → Tat ot (roof of the house); Ot → Od Okelo (house of Okelo)', rule: 'Words ending in "d" → t and "t" → d' },
    { pattern: /mo$/, replacement: 'mb', example: 'Remo → Remb (blood of); Olemo → Olemb (fruit of)', rule: 'Words ending in "m" + vowel → mb' },
    { pattern: /wa$/, replacement: 'p', example: 'Ndawa → Ndap (tobacco of); Bwo → Bop ot (shelf of the house)', rule: 'Words ending in "w" or "b" → p' },
    { pattern: /k$/, replacement: 'g', example: 'Lok → Log le (handle of the axe); Guok → Guog (dog of)', rule: 'Words ending in "k" → g' },
    { pattern: /ga$/, replacement: 'k', example: 'Puga → Puk (gourd of); Dago → Dag (pot of)', rule: 'Words ending in "g" + vowel → k or g' },
    { pattern: /ch$/, replacement: '', example: 'Kwach → Kwa (leopard of); Rech → Rej nam (fish of the lake)', rule: 'Words ending in "ch" drop "ch" or change to "j"' }
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
    { suffix: 'cha', meaning: 'that over yonder', description: 'Points to something far away (pl. -ka)', example: 'Yath cha = that tree over yonder' }
];

export const DEMONSTRATIVE_SUBSTANTIVES = [
    { luo: 'Ma / Mani', english: 'this (thing)' },
    { luo: 'Magi', english: 'these (things)' },
    { luo: 'Mano / Mago', english: 'that / those (things)' },
    { luo: 'Macha / Machacha (pl. Maka)', english: 'that / those over yonder' },
    { luo: 'Jali / Jal', english: 'this man' },
    { luo: 'Jalo', english: 'that man' },
    { luo: 'Joka', english: 'those men over there' },
    { luo: 'Nyieni / Nyieno / Nyiecha', english: 'this / that / yonder young man' }
];

export const PLACE_DEMONSTRATIVES = [
    { luo: 'Ka / Kaeni', english: 'Here' },
    { luo: 'Ku', english: 'Here (slightly away)' },
    { luo: 'Cha', english: 'There, yonder' },
    { luo: 'Kucha / Kacha', english: 'There, yonder' },
    { luo: 'Kanye / Kune / Kure / Ere (pl. Eke)', english: 'Where?' },
    { luo: 'Kanyo / Kuno / Kuro / Eri', english: 'There (answer)' },
    { luo: 'Koni / Konni', english: 'This side' },
    { luo: 'Kono', english: 'That side' },
    { luo: 'Kocha / Loka / Lokacha', english: 'On the other side' }
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
        { luo: 'Gin', english: 'They, Them' }
    ],
    inseparable: [
        { prefix: 'a', person: '1st singular (I)', example: 'Ahero = I love' },
        { prefix: 'i', person: '2nd singular (You)', example: 'Ihero = You love' },
        { prefix: 'o', person: '3rd singular (He/She)', example: 'Ohero = He/She loves' },
        { prefix: 'wa', person: '1st plural (We)', example: 'Wahero = We love' },
        { prefix: 'u', person: '2nd plural (You all)', example: 'Uhero = You all love' },
        { prefix: 'gi', person: '3rd plural (They)', example: 'Gihero = They love' }
    ],
};

// ============================================================
// REFLECTIVE PRONOUNS
// From the Handbook, Chapter III, Paragraph 2
// ============================================================
export const REFLECTIVE_PRONOUNS = [
    { luo: 'Awuon (Awon)', english: 'I myself' },
    { luo: 'Iwuon (Iwon)', english: 'Thou thyself' },
    { luo: 'Owuon (Owon)', english: 'He/She himself/herself' },
    { luo: 'Wawegi', english: 'We ourselves' },
    { luo: 'Uwegi', english: 'You yourselves' },
    { luo: 'Giwegi', english: 'They themselves' }
];

export const ALONE_PRONOUNS = [
    { luo: 'Kenda', english: 'I myself / alone' },
    { luo: 'Kendi', english: 'You yourself / alone' },
    { luo: 'Kende', english: 'He/She himself/herself / alone' },
    { luo: 'Kendwa', english: 'We ourselves / alone' },
    { luo: 'Kendu', english: 'You yourselves / alone' },
    { luo: 'Kendigi', english: 'They themselves / alone' }
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
    { singular: 'okwodo', plural: 'okwodini', meaning: 'tick → ticks', rule: 'Exception taking -ini' },
    { singular: "olang'", plural: 'olengini', meaning: 'black ant → black ants', rule: 'Exception taking -ini with a→e' },

    // Rule III: Specific consonant endings
    { singular: 'kul', plural: 'kunde', meaning: 'kraal → kraals', rule: 'Words ending in l → -nde' },
    { singular: 'dwol', plural: 'dwonde', meaning: 'voice → voices', rule: 'Words ending in l → -nde' },
    { singular: 'tol', plural: 'tonde', meaning: 'rope → ropes', rule: 'Words ending in l → -nde' },
    { singular: 'bul', plural: 'bunde', meaning: 'drum → drums', rule: 'Words ending in l → -nde' },
    { singular: 'wich', plural: 'wiye', meaning: 'head → heads', rule: 'Words ending in ch → -ye' },
    { singular: 'kwach', plural: 'kweye', meaning: 'leopard → leopards', rule: 'Words ending in ch → -ye' },
    { singular: 'tich', plural: 'tije', meaning: 'work → works', rule: 'Words ending in ch → -je' },
    { singular: 'rech', plural: 'reje', meaning: 'fish → fishes', rule: 'Words ending in ch → -je' },
    { singular: 'wach', plural: 'weche', meaning: 'word → words', rule: 'Words ending in ch → -che' },
    { singular: 'pien', plural: 'piende', meaning: 'hide → hides', rule: 'Words ending in n → -nde' },
    { singular: 'em', plural: 'embe', meaning: 'thigh → thighs', rule: 'Words ending in m → -mbe' },
    { singular: 'kom', plural: 'kombe', meaning: 'chair → chairs', rule: 'Words ending in m → -mbe' },
    { singular: 'olemo', plural: 'olembe', meaning: 'fruit → fruits', rule: 'Words ending in m + vowel → -mbe' },
    { singular: 'rombo', plural: 'rombe', meaning: 'sheep → sheep (pl.)', rule: 'Words ending in mbo → -mbe' },
    { singular: 'got', plural: 'gode', meaning: 'mountain → mountains', rule: 'Words ending in t → -de' },
    { singular: 'luth', plural: 'ludhe', meaning: 'stick → sticks', rule: 'Words ending in th → -dhe' },
    { singular: 'yath', plural: 'yedhe', meaning: 'tree/medicine → trees', rule: 'Words ending in th → -dhe (a→e)' },
    { singular: 'lwedo', plural: 'lwete', meaning: 'hand → hands', rule: 'Words ending in do → -te' },
    { singular: 'tielo', plural: 'tiende', meaning: 'foot/leg → feet/legs', rule: 'Words ending in lo → -nde' },
    { singular: 'puodho', plural: 'puothe', meaning: 'garden → gardens', rule: 'Words ending in dho → -the' },
    { singular: "ong'er", plural: "ong'eche", meaning: 'monkey → monkeys', rule: 'Words ending in r → -che' },
    { singular: 'bur', plural: 'buche', meaning: 'hole/ulcer → holes', rule: 'Words ending in r → -che' },
    { singular: 'kwer', plural: 'kweche', meaning: 'hoe → hoes', rule: 'Words ending in r → -che' },
    { singular: 'chiro', plural: 'chiche', meaning: 'market → markets', rule: 'Words ending in ro → -che' },
    { singular: 'dak', plural: 'dege', meaning: 'pot → pots', rule: 'Words ending in k → -ge' },
    { singular: 'chogo', plural: 'choke', meaning: 'bone → bones', rule: 'Words ending in go → -ke' },
    { singular: 'lak', plural: 'leke', meaning: 'tooth → teeth', rule: 'Words ending in k → -ke (a→e)' },
    { singular: 'apwoyo', plural: 'apwoche', meaning: 'rabbit → rabbits', rule: 'Words ending in y + vowel → -che' },
    { singular: 'kiew', plural: 'kiepe', meaning: 'furrow → furrows', rule: 'Words ending in w → -pe' },
    { singular: 'jowi', plural: 'jope', meaning: 'buffalo → buffaloes', rule: 'Words ending in wi → -pe' },
    { singular: 'pap', plural: 'pepe', meaning: 'field → fields', rule: 'Words ending in p → -pe (a→e)' },
    { singular: 'piny', plural: 'pinje', meaning: 'country → countries', rule: 'Words ending in ny → -nje' },

    // Double Plurals — Paragraph 5 (p. 10)
    { singular: 'law', plural: 'lewini / lepe', meaning: 'cloth → cloths', rule: 'Double plural (-ini or -pe)' },
    { singular: 'puga', plural: 'pugini / puke', meaning: 'gourd → gourds', rule: 'Double plural (-ini or -ke)' },
    { singular: 'kodhi', plural: 'kodhini / kothe', meaning: 'seed → seeds', rule: 'Double plural (-ini or -the)' },
    { singular: 'tado', plural: 'tedini / tete', meaning: 'roof → roofs', rule: 'Double plural (-ini or -te)' },
    { singular: 'higa', plural: 'higini / hike', meaning: 'year → years', rule: 'Double plural (-ini or -ke)' },
    { singular: 'dago', plural: 'degini / deke', meaning: 'large pot → pots', rule: 'Double plural (-ini or -ke)' },
    { singular: 'rawo', plural: 'rewini / rewe / repe', meaning: 'hippo → hippos', rule: 'Triple plural (-ini, -we, or -pe)' },

    // Irregular plurals — Paragraph 10 (pp. 11-12)
    { singular: 'dhano', plural: 'ji / jo', meaning: 'human/man → people', rule: 'Irregular' },
    { singular: 'dhako', plural: 'mon', meaning: 'woman → women', rule: 'Irregular' },
    { singular: 'dichuo', plural: 'chwo', meaning: 'man → men', rule: 'Irregular' },
    { singular: 'woyi', plural: 'yawoyi', meaning: 'boy → boys', rule: 'Irregular' },
    { singular: 'nyako', plural: 'nyiri', meaning: 'girl → girls', rule: 'Irregular' },
    { singular: 'nyathi', plural: 'nyithindo', meaning: 'child → children', rule: 'Irregular' },
    { singular: "ng'ato", plural: 'ji', meaning: 'person → people', rule: 'Irregular' },
    { singular: "dhiang'", plural: 'dhok', meaning: 'cow → cattle', rule: 'Irregular' },
    { singular: 'gweno', plural: 'gwen', meaning: 'fowl → fowls', rule: 'Irregular' },
    { singular: 'ot', plural: 'udi', meaning: 'house → houses', rule: 'Irregular' },
    { singular: 'dala', plural: 'mier', meaning: 'village → villages', rule: 'Irregular' },
    { singular: 'diel', plural: 'diek / diegi', meaning: 'goat → goats', rule: 'Irregular' },
    { singular: 'guok', plural: 'guogi', meaning: 'dog → dogs', rule: 'Irregular' },
    { singular: "chieng'", plural: 'ndalo', meaning: 'day → days/times', rule: 'Irregular' },
    { singular: 'yo', plural: 'yore', meaning: 'road → roads', rule: 'Irregular' },
    { singular: 'sulwe', plural: 'sulini', meaning: 'star → stars', rule: 'Irregular' },
    { singular: 'ruoth', plural: 'ruodhi', meaning: 'chief → chiefs', rule: 'Irregular' },
    { singular: 'ondiek', plural: 'ondiegi', meaning: 'hyena → hyenas', rule: 'Irregular' },
    { singular: 'wer', plural: 'wende', meaning: 'song → songs', rule: 'Irregular' },
    { singular: 'yie', plural: 'yiedhi', meaning: 'canoe/boat → boats', rule: 'Irregular' },
    { singular: 'pi', plural: 'pige', meaning: 'water → waters', rule: 'Irregular' },
    { singular: 'gi', plural: 'gik', meaning: 'thing → things', rule: 'Irregular' },
    { singular: 'lep', plural: 'lewe', meaning: 'tongue → tongues', rule: 'Irregular' },
    { singular: 'it', plural: 'ite', meaning: 'ear → ears', rule: 'Irregular' },
    { singular: "wang'", plural: 'wenge', meaning: 'eye → eyes', rule: 'Irregular' }
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
    { tense: 'Future', prefix: '-na-/-ni-/-no-', example: 'Naher = I shall love', rule: 'Pronoun prefix + tense marker + root' }
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
    { number: 6, luo: 'Auchiel', english: "Six (abich g'achiel)" },
    { number: 7, luo: 'Abiriyo', english: "Seven (abich g'ariyo)" },
    { number: 8, luo: 'Aboro', english: "Eight (abich g'adek)" },
    { number: 9, luo: 'Ongachiel / Ochiko', english: 'Nine (one missing from ten)' },
    { number: 10, luo: 'Apar', english: 'Ten' },
    { number: 11, luo: "Apar g'achiel", english: 'Eleven' },
    { number: 12, luo: "Apar g'ariyo", english: 'Twelve' },
    { number: 19, luo: "Apar gi ongachiel / Apar g'ochiko", english: 'Nineteen' },
    { number: 20, luo: 'Piero ariyo', english: 'Twenty (tens × two)' },
    { number: 30, luo: 'Piero adek', english: 'Thirty (tens × three)' },
    { number: 100, luo: 'Piero apar / Mia', english: 'Hundred' }
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
    { luo: 'Manade', english: 'Of what sort?', usage: 'Ichamo chiemo manade? — What sort of food do you eat?' }
];

// ============================================================
// TIME EXPRESSIONS
// From the Handbook, Chapter V, Paragraph 2
// ============================================================
export const TIME_EXPRESSIONS = [
    { luo: 'Kawono', english: 'Now / Today' },
    { luo: 'Nende / Tinende / Tinde', english: 'Today' },
    { luo: 'Nyoro', english: 'Yesterday' },
    { luo: 'Kiny', english: 'Tomorrow' },
    { luo: 'Orucha / Oru', english: 'Day after tomorrow' },
    { luo: 'Nyocha', english: 'Day before yesterday' },
    { luo: 'Koro / Koro ka / Koro eka', english: 'Just now' },
    { luo: 'Podi', english: 'Still / Yet' },
    { luo: 'Chon', english: 'Early / Long ago' },
    { luo: 'Yande', english: 'Formerly / Before' },
    { luo: 'Bin', english: 'Presently / Soon' },
    { luo: "Wang'", english: 'Soon / Immediately' },
    { luo: 'Otieno', english: 'At night' },
    { luo: 'Odiewor', english: 'At midnight' },
    { luo: "Odiechieng'", english: 'In the daytime' },
    { luo: 'Pile / Pilepile', english: 'Daily / Constantly' },
    { luo: 'Manyakanende', english: 'Continually / Constantly' },
    { luo: "Aming'a", english: 'For a long time / Incessantly' },
    { luo: "Bang'e", english: 'Afterwards / Later on' }
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
    { luo: 'Tekre mon', english: 'Between 2 and 3 PM' }
];

// ============================================================
// GREETINGS & SALUTATIONS
// From the Handbook, Chapter IX
// ============================================================
export const GREETINGS = [
    { luo: 'Misawa!', english: 'Peace! / Hello!', response: 'Misawa ahinya! / Misawa ruok!' },
    { luo: 'Oyawore!', english: 'Good morning!', response: 'Oyawore ahinya!' },
    { luo: 'Okwe!', english: 'Peace!', response: 'Okwe ruok!' },
    { luo: 'Inindo nade?', english: 'How did you sleep?', response: 'Anindo maber' },
    { luo: 'Iriyo nade?', english: 'How are you? (during the day)', response: 'Ariyo maber' },
    { luo: 'Ingima?', english: 'How are you? (to a friend)', response: 'Angima, Omera' },
    { luo: 'Ringri ber?', english: 'How is your health?', response: 'Ringra ber' },
    { luo: 'Inindi', english: 'Goodbye / Sleep well', response: 'Inindi' },
    { luo: 'Nyasaye riti', english: 'May God protect you', response: 'Ero kamano' },
    { luo: 'Ero kamano', english: 'Thanks / Well done', response: 'Ero kamano' }
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
        { luo: 'Both', english: 'Nearly / Almost' }
    ],
    manner: [
        { luo: 'Piyo', english: 'Quickly / Fast' },
        { luo: 'Mos', english: 'Slowly / Gently / Please' },
        { luo: 'Maber', english: 'Well / Good' },
        { luo: 'Marach', english: 'Badly / Bad' },
        { luo: 'Matek', english: 'Hard / Difficult' },
        { luo: 'Nono', english: 'Simply / In vain / Without reason' },
        { luo: 'Mar ayiem', english: 'On purpose / Intentionally' },
        { luo: 'Ratiro', english: 'Publicly / Openly' },
        { luo: 'Arum', english: 'Together' },
        { luo: 'Kamano', english: 'So / Like that' }
    ],
    affirmation: [
        { luo: 'Ee / Aee', english: 'Yes' },
        { luo: 'Oyo', english: 'No' },
        { luo: 'Adieri', english: 'It is true' },
        { luo: 'Miriambo', english: 'It is false / a lie' }
    ],
    repetition: [
        { luo: 'Kendo', english: 'Again' },
        { luo: 'Mokwongo', english: 'First' },
        { luo: 'Kwonde duto', english: 'Everywhere' }
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
    { luo: 'Ero!', english: 'Hey! Look out! All right!' },
    { luo: 'Ero kamano', english: 'Thanks / Well done' },
    { luo: 'Nyire!', english: 'Stop that!' },
    { luo: 'Tè! (Duto tè)', english: 'Completely finished (nothing left)!' },
    { luo: 'Pep! (Duto pep)', english: 'To the very last one!' }
];

// ============================================================
// COMMON PREFIXES
// From the Handbook, Part II, Chapter I
// ============================================================
export const PREFIXES = {
    'Ja': { meaning: 'Person who / Person from', example: 'Japuonj = teacher, Jatich = workman, Jagem = person from Gem' },
    'Jo': { meaning: 'People who / People from (plural of Ja)', example: 'Jopuonj = teachers, Jotich = workmen' },
    'Ma': { meaning: 'Adjective marker / Which / That', example: "Maber = good, Maduong' = great, Matin = small" },
    'Ra': { meaning: 'One who has / Instrument / Defect', example: "Radhoho = leper, Ragwar = pitchfork, Rang'ol = lame person, Rakuom = hunchback" },
    'Ro': { meaning: 'Plural of Ra-', example: 'Rodhohini = lepers, Rokuombe = hunchbacks' },
    'Nya': { meaning: 'Diminutive / Daughter of (singular)', example: 'Nyaguok = puppy, Nyaruath = bull-calf, Nyakisumo = woman from Kisumu' },
    'Nyi': { meaning: 'Diminutive / Daughters of (plural)', example: 'Nyiguogi = puppies, Nyikisumo = women from Kisumu' },
    'O': { meaning: '3rd person singular verb prefix / Male name prefix', example: 'Obiro = he/she comes; Otieno = born at night (m.)' },
    'A': { meaning: '1st person singular verb prefix / Female name prefix', example: 'Abiro = I come; Atieno = born at night (f.)' },
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
