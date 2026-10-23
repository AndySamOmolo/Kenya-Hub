// ============================================================
// Teso (Ateso) Language Course Configuration & Units
// Based on Open-Web Linguistic Data (Wikipedia Teso_language & Eastern_Nilotic_languages / Vossen 1982)
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
  description: 'An Eastern Nilotic language of the Ateker (Teso–Turkana) cluster spoken in Busia County, Western Kenya and eastern Uganda.',
  color: '#6D4C41',
  sources: ['open-web-swadesh-comparative'],
};

export const TESO_UNITS: CourseUnit[] = [
  {
    id: 'teso-unit-1',
    title: 'Unit 1: Greetings, Kinship & The Three Noun Genders',
    description: 'Master Ateso greetings (Yoga, Ijai biai, Ejokuna), kinship terms, and Masculine (e-), Feminine (a-), and Neuter (i-) nouns.',
    icon: '👋',
    skills: [
      {
        id: 'teso-greetings-kinship',
        title: 'Greetings, Introductions & Family',
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
          { target: 'toto / papa', source: 'Mother / Father', pronunciation: 'toh-toh / pah-pah', hint: 'Prefixless kinship nouns' },
          { target: 'etelepat (pl. itelepai)', source: 'Boy (pl. Boys)', pronunciation: 'eh-teh-leh-paht', hint: 'Masculine e- → i- noun' },
          { target: 'apese (pl. apesur)', source: 'Girl (pl. Girls)', pronunciation: 'ah-peh-seh', hint: 'Feminine a- noun' },
          { target: 'ikoku (pl. idwe)', source: 'Child (pl. Children)', pronunciation: 'ee-koh-koo / ee-dweh', hint: 'Neuter i- noun' }
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
        title: 'Quinary Numerals, Spatial Adverbs & Cardinal Directions',
        icon: 'Compass',
        description: 'Count in Masculine and Feminine genders and navigate using Ateso spatial adverbs.',
        tips: "Ateso numbers 1–5 are idiope/adiope (1), iyarei/aarei (2), iuni/auni (3), ioŋon/aoŋon (4), and ikany/akany (5, from akan 'hand'). Six is ikany-kape (5+1) and ten is itomon/atomon.",
        words: [
          { target: 'idiope (m.) / adiope (f.)', source: 'One (1)', pronunciation: 'ee-dee-oh-peh / ah-dee-oh-peh', hint: 'Agrees with noun gender' },
          { target: 'iyarei (m.) / aarei (f.)', source: 'Two (2)', pronunciation: 'ee-yah-reh-ee / ah-ah-reh-ee', hint: 'Cardinal 2' },
          { target: 'iuni (m.) / auni (f.)', source: 'Three (3)', pronunciation: 'ee-oo-nee / ah-oo-nee', hint: 'Cardinal 3' },
          { target: 'ioŋon (m.) / aoŋon (f.)', source: 'Four (4)', pronunciation: 'ee-oh-ngohn / ah-oh-ngohn', hint: 'Cardinal 4' },
          { target: 'ikany (m.) / akany (f.)', source: 'Five (5)', pronunciation: 'ee-kah-ny / ah-kah-ny', hint: 'Cardinal 5 (< akan hand)' },
          { target: 'itomon (m.) / atomon (f.)', source: 'Ten (10)', pronunciation: 'ee-toh-mohn / ah-toh-mohn', hint: 'Cardinal 10' },
          { target: 'kide / too', source: 'East / West', pronunciation: 'kee-deh / toh-oh', hint: 'Cardinal directions' },
          { target: 'nyakoi / agolitomei', source: 'North / South', pronunciation: 'nyah-koh-ee / ah-goh-lee-toh-meh-ee', hint: 'Cardinal directions' },
          { target: 'akipi / akile', source: 'Water / Milk', pronunciation: 'ah-kee-pee / ah-kee-leh', hint: 'Indigenous feminine liquids' },
          { target: 'akinyam / akimat', source: 'To eat / To drink', pronunciation: 'ah-kee-nyahm / ah-kee-maht', hint: 'Core verbs' }
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
  }
];
