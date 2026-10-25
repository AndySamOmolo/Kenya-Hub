// ============================================================
// Teso (Ateso / Elgumi / Wamia) Language Course Configuration & Units
// Based on Public Domain & Open-Web Linguistic Sources:
// 1. C. W. Hobley (1902) "Eastern Uganda: An Ethnological Survey" (Elgumi vocabulary, numerals & phrases)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" (Elgumi / Wamia)
// 3. Wikipedia Teso_language & Eastern_Nilotic_languages (Vossen 1982)
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const TESO_CONFIG: LanguageConfig = {
  id: 'teso',
  name: 'Teso',
  nativeName: 'Ateso',
  family: 'Nilotic',
  counties: ['Busia'],
  speakers: '468K',
  speechLocale: '',
  description: 'An Eastern Nilotic language of the Ateker (Teso–Turkana) cluster spoken in Busia County, Western Kenya and eastern Uganda. Grounded in C. W. Hobley (1902) and Sir Harry H. Johnston (1902).',
  color: '#6D4C41',
  sources: [
    'hobley-eastern-uganda-1902',
    'johnston-uganda-protectorate-1902',
    'open-web-swadesh-comparative',
  ],
};

export const TESO_UNITS: CourseUnit[] = [
  {
    id: 'teso-unit-1',
    title: 'Unit 1: Greetings, Kinship & The Three Noun Genders (Hobley 1902 & Johnston 1902)',
    description: 'Master Ateso greetings (Yoga, Ijai biai, Ejokuna), kinship terms, and Masculine (e-), Feminine (a-), and Neuter (i-) nouns.',
    icon: '👋',
    skills: [
      {
        id: 'teso-greetings-kinship',
        title: 'Greetings, Introductions & Family (Hobley 1902 & Johnston 1902)',
        icon: 'Handshake',
        description: 'Greet elders and friends, introduce yourself, and name family members in Ateso.',
        tips: "The universal greeting in Ateso is 'Yoga!' ('Hello!'), followed by 'Ijai biai?' (How are you? sg.) or 'Ijaasi biai?' (pl.), answered with 'Ejokuna' ('Fine/well'). Kinship terms like 'toto' (mother) and 'papa' (father) do not take gender prefixes.",
        words: [
          { target: 'Yoga', source: 'Hello', pronunciation: 'yoh-gah', hint: 'Standard Ateso greeting' },
          { target: 'Ijai biai?', source: 'How are you? (singular)', pronunciation: 'ee-jah-ee bee-ah-ee', hint: 'Plural: Ijaasi biai?' },
          { target: 'Ejokuna, arai ijo?', source: 'Fine, and you?', pronunciation: 'eh-joh-koo-nah ah-rah-ee ee-joh', hint: 'Polite response' },
          { target: "Ingai bo ekon'kiror?", source: 'What is your name?', pronunciation: 'ee-ngah-ee boh eh-kohn kee-rohr', hint: 'ekiror = name' },
          { target: 'Eyalama ewanyun', source: 'Nice to see you / Thank you', pronunciation: 'eh-yah-lah-mah eh-wah-nyoon', hint: 'Gratitude & welcome' },
          { target: 'Awanyunos bobo', source: 'See you again', pronunciation: 'ah-wah-nyoo-nohs boh-boh', hint: 'bobo = again' },
          { target: 'toto / papa', source: 'Mother / Father', pronunciation: 'toh-toh / pah-pah', hint: 'Prefixless kinship nouns (Hobley 1902)' },
          { target: 'ekile (pl. ikiliok) / aberu (pl. angor)', source: 'Man (pl. Men) / Woman (pl. Women)', pronunciation: 'eh-kee-leh / ah-beh-roo', hint: 'Hobley (1902) & Johnston (1902) Elgumi/Wamia' },
          { target: 'etelepat (pl. itelepai) / apese (pl. apesur)', source: 'Boy (pl. Boys) / Girl (pl. Girls)', pronunciation: 'eh-teh-leh-paht / ah-peh-seh', hint: 'Masculine e- → i- vs. Feminine a-' },
          { target: 'ikoku (pl. idwe)', source: 'Child (pl. Children)', pronunciation: 'ee-koh-koo / ee-dweh', hint: 'Neuter i- noun (Hobley 1902)' }
        ],
        sentences: [
          { target: 'Yoga! Ijai biai? Ejokuna.', source: 'Hello! How are you? Fine.' },
          { target: 'Aibo ejai toto? Ejai ngina.', source: 'Where is mother? She is over there.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you reply "Fine, and you?" to "Ijai biai?" in Ateso?',
            correctAnswer: 'Ejokuna, arai ijo?',
            options: ['Ejokuna, arai ijo?', 'Awanyunos bobo', "Ingai bo ekon'kiror?", 'Yoga'],
            hint: 'Ejokuna = fine/good'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Ateso greetings and kinship nouns with their meanings:',
            correctAnswer: 'Yoga: Hello, Ejokuna: Fine, toto / papa: Mother / Father, ikoku (pl. idwe): Child (pl. Children)',
            pairs: [
              { left: 'Yoga', right: 'Hello' },
              { left: 'Ejokuna', right: 'Fine' },
              { left: 'toto / papa', right: 'Mother / Father' },
              { left: 'ikoku (pl. idwe)', right: 'Child (pl. Children)' }
            ]
          }
        ]
      },
      {
        id: 'teso-numbers-directions',
        title: 'Quinary Numerals, Nature & Cardinal Directions (Hobley 1902 & Johnston 1902)',
        icon: 'Compass',
        description: 'Count in Masculine and Feminine genders and navigate using Ateso spatial adverbs and nature terms.',
        tips: "Ateso numbers 1–5 are idiope/adiope (1), iyarei/aarei (2), iuni/auni (3), ioŋon/aoŋon (4), and ikany/akany (5, from akan 'hand'). Six is ikany-kape (5+1) and ten is itomon/atomon (Hobley 1902, p. 69).",
        words: [
          { target: 'idiope (m.) / adiope (f.)', source: 'One (1)', pronunciation: 'ee-dee-oh-peh / ah-dee-oh-peh', hint: 'Agrees with noun gender (Hobley 1902 & Johnston 1902)' },
          { target: 'iyarei (m.) / aarei (f.)', source: 'Two (2)', pronunciation: 'ee-yah-reh-ee / ah-ah-reh-ee', hint: 'Cardinal 2' },
          { target: 'iuni (m.) / auni (f.)', source: 'Three (3)', pronunciation: 'ee-oo-nee / ah-oo-nee', hint: 'Cardinal 3' },
          { target: 'ioŋon (m.) / aoŋon (f.)', source: 'Four (4)', pronunciation: 'ee-oh-ngohn / ah-oh-ngohn', hint: 'Cardinal 4' },
          { target: 'ikany (m.) / akany (f.)', source: 'Five (5)', pronunciation: 'ee-kah-ny / ah-kah-ny', hint: 'Cardinal 5 (< akan hand)' },
          { target: 'ikany-kape, ikany-kaare, ikany-kauni, ikany-kaoŋon, itomon', source: '6 (5+1), 7 (5+2), 8 (5+3), 9 (5+4), 10', pronunciation: 'ee-kah-ny kah-peh ... ee-toh-mohn', hint: 'Hobley (1902, p. 95) & Johnston (1902, p. 851) quinary numerals 6–10' },
          { target: 'kide / too / nyakoi / agolitomei', source: 'East / West / North / South', pronunciation: 'kee-deh / toh-oh / nyah-koh-ee / ah-goh-lee-toh-meh-ee', hint: 'Cardinal directions' },
          { target: 'akipi / akile / akim / akolong', source: 'Water / Milk / Fire / Sun', pronunciation: 'ah-kee-pee / ah-kee-leh / ah-keem / ah-koh-lohng', hint: 'Hobley (1902) & Johnston (1902) core feminine nouns' },
          { target: 'akiteng (pl. aatuk) / emong (pl. imongin)', source: 'Cow (pl. Cattle) / Bull, Ox (pl. Oxen)', pronunciation: 'ah-kee-tehng / ah-took / eh-mohng', hint: 'Hobley (1902) pastoral nouns' },
          { target: 'akinyam / akimat / aanyun', source: 'To eat / To drink / To see', pronunciation: 'ah-kee-nyahm / ah-kee-maht / ah-nyoon', hint: 'Core verbs (Hobley 1902)' }
        ],
        sentences: [
          { target: 'Itelepai iuni ka apesur auni.', source: 'Three boys and three girls.' },
          { target: 'Akimat akile ka akinyam atap.', source: 'To drink milk and to eat millet bread.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which Ateso phrase means "three girls" (showing feminine numeral agreement)?',
            correctAnswer: 'apesur auni',
            options: ['apesur auni', 'itelepai iuni', 'ikoku idiope', 'itomon'],
            hint: 'Feminine plural apesur takes feminine numeral prefix a-'
          }
        ]
      }
    ]
  },
  {
    id: 'teso-unit-2',
    title: 'Unit 2: Hobley (1902) Elgumi Dialogues, Pronouns, Tools & Oral Wisdom',
    description: 'Learn conversational phrases, personal pronouns, tools, and proverbs from C. W. Hobley (1902) and Sir Harry Johnston (1902).',
    icon: '🏹',
    skills: [
      {
        id: 'teso-hobley-1902-phrases',
        title: 'Pronouns, Homestead Tools & Hobley (1902) Phrases',
        icon: 'MessageCircle',
        description: 'Master Ateso pronouns, imperatives, and cultural terms recorded in 1902.',
        tips: "Sir Harry Johnston (1902, p. 851) and C. W. Hobley (1902, pp. 92–95) recorded everyday salutations ("Mata!", "Yoka yoka!") and conversational imperatives in Ateso (Elgumi/Wamia): 'Bia ne!' (Come here!), 'Kolot!' (Go away!), 'Koin akipi!' (Bring water!), and 'Icamit nyo?' (What do you want?).",
        culturalNote: "In Ateso oral wisdom, 'Akan nabo mam epedori aibok akwap' ('One hand alone cannot dig the earth') celebrates community cooperation (aleya) in cultivating finger-millet (akima) and cassava.",
        words: [
          { target: 'eong (ayong), ijo, ngesi, isio (oni), yesi, kesi', source: 'I, you (sg.), s/he, we, you (pl.), they', pronunciation: 'eh-ohng, ee-joh, ngeh-see, ee-see-oh', hint: 'Hobley (1902) & Johnston (1902) personal pronouns' },
          { target: 'Bia ne! / Kolot!', source: 'Come here! / Go!', pronunciation: 'bee-ah neh / koh-loht', hint: 'Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) conversational imperatives' },
          { target: 'Koin akipi! / Icamit nyo?', source: 'Bring water! / What do you want?', pronunciation: 'koyn ah-kee-pee / ee-chah-meet nyoh', hint: 'Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) phrases' },
          { target: 'Akuj / Edeke (Lokasuban)', source: 'God, the Supreme Creator', pronunciation: 'ah-kooj / eh-deh-keh / loh-kah-soo-bahn', hint: 'Hobley (1902) & Johnston (1902)' },
          { target: 'atap / akima / ajon', source: 'Millet bread (ugali) / Finger-millet / Traditional cereal brew', pronunciation: 'ah-tahp / ah-kee-mah / ah-john', hint: 'Ateso culinary staples' },
          { target: 'akwara (pl. ngakwaras) / aupwal (ebuku)', source: 'Spear / Shield', pronunciation: 'ah-kwah-rah / ah-oop-wahl', hint: 'Hobley (1902, pp. 92–95) & Johnston (1902)' },
          { target: 'akalabai / emal / ekileng', source: 'Bow / Arrow / Knife', pronunciation: 'ah-kah-lah-bah-ee / eh-mahl / eh-kee-lehng', hint: 'Hobley (1902, pp. 92–95) & Johnston (1902)' },
          { target: 'etogo (pl. itogoi) / ekek (pl. ikekia)', source: 'House (pl. Houses) / Door (pl. Doors)', pronunciation: 'eh-toh-goh / eh-kehk', hint: 'Hobley (1902, pp. 92–95) & Johnston (1902)' },
          { target: 'Akan nabo mam epedori aibok akwap', source: 'One hand alone cannot dig the earth (Proverb)', pronunciation: 'ah-kahn nah-boh mahm eh-peh-doh-ree', hint: 'Unity in community farming' }
        ],
        sentences: [
          { target: 'Bia ne! Koin akipi!', source: 'Come here! Bring water! (Hobley 1902, p. 53)' },
          { target: 'Akan nabo mam epedori aibok akwap.', source: 'One hand alone cannot dig the earth.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In C. W. Johnston (1902, p. 851) & Hobley (1902, pp. 92–95), what does the Ateso phrase "Koin akipi!" mean?',
            correctAnswer: 'Bring water!',
            options: [
              'Bring water!',
              'One hand alone cannot dig the earth',
              'Spear / Shield',
              'House (pl. Houses)'
            ],
            hint: 'akipi = water'
          }
        ]
      }
    ]
  }
];
