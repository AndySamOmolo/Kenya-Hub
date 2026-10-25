// ============================================================
// Kisii (Ekegusii) Language Course Configuration & Units
// Based on Public Domain & Open-Web Linguistic Sources:
// 1. C. W. Hobley (1902) "Eastern Uganda: An Ethnological Survey" (Kossova / Kisii vocabulary & numerals)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" (Igizii) & (1919) "Comparative Study of the Bantu Languages" (#7 Ki-guzii)
// 3. Wikipedia Gusii_language
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const KISII_CONFIG: LanguageConfig = {
  id: 'kisii',
  name: 'Kisii',
  nativeName: 'Ekegusii',
  family: 'Bantu',
  counties: ['Kisii', 'Nyamira'],
  speakers: '2.7M',
  speechLocale: 'sw-KE',
  description: 'A Highland East Nyanza Bantu language (JE.42) spoken across Kisii and Nyamira counties in Western Kenya. Grounded in C. W. Hobley (1902) and Sir Harry H. Johnston (1902, 1919).',
  color: '#D97706',
  sources: [
    'hobley-eastern-uganda-1902',
    'johnston-uganda-protectorate-1902',
    'johnston-bantu-1919',
    'open-web-swadesh-comparative',
  ],
};

export const KISII_UNITS: CourseUnit[] = [
  {
    id: 'kisii-unit-1',
    title: 'Unit 1: Greetings, Noun Classes & Numbers 1–20 (Hobley 1902 & Johnston 1919)',
    description: 'Master Ekegusii greetings, noun class pairs (omonto/abanto, egekombe/ebikombe, rigena/amagena), and counting from 1 to 20.',
    icon: '👋',
    skills: [
      {
        id: 'kisii-greetings-nouns',
        title: 'Greetings, People & Homestead Nouns (Hobley 1902 & Johnston 1919)',
        icon: 'Users',
        description: 'Learn daily salutations and core noun classes in Ekegusii.',
        tips: "Morning greeting in Ekegusii is 'Bwakire buya' ('It has dawned well'), and good night is 'Obotuko obuya'. Notice Class 1/2 'omonto → abanto' (person → people) and Class 9/10 'eng'ombe → chiombe' (cow → cows).",
        words: [
          { target: 'Bwakire buya', source: 'Good morning', pronunciation: 'bwah-kee-reh boo-yah', hint: 'Morning salutation' },
          { target: 'Obotuko obuya', source: 'Good night', pronunciation: 'oh-boh-too-koh oh-boo-yah', hint: 'Night salutation' },
          { target: 'omonto (pl. abanto)', source: 'Person (pl. People)', pronunciation: 'oh-moh-ntoh / ah-bah-ntoh', hint: 'Class 1/2 noun (Hobley 1902 & Johnston 1919)' },
          { target: 'omosacha (pl. abasacha) / omokungu (pl. abakungu)', source: 'Man, husband / Woman, wife', pronunciation: 'oh-moh-sah-chah / oh-moh-koon-goo', hint: 'Hobley (1902) & Johnston (1919 #7)' },
          { target: 'omoiseke (pl. abaiseke) / omosia (pl. abasia)', source: 'Girl / Boy', pronunciation: 'oh-moh-ee-seh-keh / oh-moh-see-ah', hint: 'Class 1/2 nouns (Johnston 1919)' },
          { target: 'omogaka (pl. abagaka) / baba / tata', source: 'Elder / Mother / Father', pronunciation: 'oh-moh-gah-kah / bah-bah / tah-tah', hint: 'Kinship & elder nouns (Hobley 1902)' },
          { target: 'amache / amabere / omorero', source: 'Water / Milk / Fire', pronunciation: 'ah-mah-cheh / ah-mah-beh-reh / oh-moh-reh-roh', hint: 'Hobley (1902) & Johnston (1919)' },
          { target: 'enyomba (pl. chinyomba) / inka', source: 'House (pl. Houses) / Homestead', pronunciation: 'eh-nyohm-bah / ee-nkah', hint: 'Class 9/10 e-/chi- (Johnston 1919)' },
          { target: 'rigena (pl. amagena) / omote (pl. emete)', source: 'Stone (pl. Stones) / Tree (pl. Trees)', pronunciation: 'ree-geh-nah / oh-moh-teh', hint: 'Class 5/6 ri-/ama- & Class 3/4 omo-/eme-' },
          { target: 'Engoro / Erioba', source: 'God / The Sun', pronunciation: 'ehn-goh-roh / eh-ree-oh-bah', hint: 'Hobley (1902) & Johnston (1919)' }
        ],
        sentences: [
          { target: 'Bwakire buya, baba.', source: 'Good morning, mother.' },
          { target: 'Obotuko obuya inka.', source: 'Good night at home.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Good morning" in Ekegusii?',
            correctAnswer: 'Bwakire buya',
            options: ['Bwakire buya', 'Obotuko obuya', 'omonto (pl. abanto)', 'amache / amabere / omorero'],
            hint: 'Literally "It has dawned well"'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Ekegusii words with their English meanings:',
            correctAnswer: 'Bwakire buya: Good morning, Obotuko obuya: Good night, omonto: Person, inka: Homestead',
            pairs: [
              { left: 'Bwakire buya', right: 'Good morning' },
              { left: 'Obotuko obuya', right: 'Good night' },
              { left: 'omonto', right: 'Person' },
              { left: 'inka', right: 'Homestead' }
            ]
          }
        ]
      },
      {
        id: 'kisii-numbers-verbs',
        title: 'Numbers 1–20 & Everyday Actions (Hobley 1902 & Johnston 1919)',
        icon: 'Hash',
        description: 'Count from eyemo (1) to emerongo ebere (20) and use core Ekegusii verbs.',
        tips: "Numbers 6–8 build on 'isano' (5): isano nemo (6), isano na ibere (7), isano na isato (8), while 9 is 'kianda' and 10 is 'ikomi' (Hobley 1902, p. 69 & Johnston 1919, p. 59).",
        words: [
          { target: 'eyemo', source: 'One (1)', pronunciation: 'eh-yeh-moh', hint: 'Cardinal 1 (Hobley 1902 & Johnston 1919)' },
          { target: 'ibere', source: 'Two (2)', pronunciation: 'ee-beh-reh', hint: 'Cardinal 2' },
          { target: 'isato', source: 'Three (3)', pronunciation: 'ee-sah-toh', hint: 'Cardinal 3' },
          { target: 'inye', source: 'Four (4)', pronunciation: 'ee-nyeh', hint: 'Cardinal 4' },
          { target: 'isano', source: 'Five (5)', pronunciation: 'ee-sah-noh', hint: 'Cardinal 5' },
          { target: 'isano nemo', source: 'Six (6, lit. 5+1)', pronunciation: 'ee-sah-noh neh-moh', hint: 'Cardinal 6' },
          { target: 'isano na ibere / isano na isato', source: 'Seven (7, lit. 5+2) / Eight (8, lit. 5+3)', pronunciation: 'ee-sah-noh nah ee-beh-reh', hint: 'Cardinals 7 & 8' },
          { target: 'kianda / ikomi', source: 'Nine (9) / Ten (10)', pronunciation: 'kee-ah-ndah / ee-koh-mee', hint: 'Cardinals 9 & 10' },
          { target: 'emerongo ebere / rigana', source: 'Twenty (20) / One hundred (100)', pronunciation: 'eh-meh-roh-ngoh eh-beh-reh / ree-gah-nah', hint: 'Cardinals 20 & 100 (Johnston 1919)' },
          { target: 'okomanya / okorora / okoria / okonywa', source: 'To know / To see / To eat / To drink', pronunciation: 'oh-koh-mah-nyah / oh-koh-roh-rah', hint: 'Core verbs (Hobley 1902 & Johnston 1919)' }
        ],
        sentences: [
          { target: 'Ikomi na ibere', source: 'Twelve (ten and two)' },
          { target: 'Chiombe isano na ibere', source: 'Seven cows' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How is "Six (6)" formed in Ekegusii?',
            correctAnswer: 'isano nemo',
            options: ['isano nemo', 'eyemo', 'kianda / ikomi', 'emerongo ebere / rigana'],
            hint: 'Literally 5 (isano) + 1 (nemo)'
          }
        ]
      }
    ]
  },
  {
    id: 'kisii-unit-2',
    title: 'Unit 2: Dahl’s Law, Agriculture, Craftsmanship & Oral Wisdom (Hobley 1902 & Johnston 1919 #7)',
    description: 'Master Ekegusii Dahl’s Law voicing (oko-/ogo-, eke-/ege-), highland crops, tools, and traditional Risaga community values.',
    icon: '🌾',
    skills: [
      {
        id: 'kisii-agriculture-culture',
        title: 'Highland Crops, Tools, Pronouns & Risaga Solidarity',
        icon: 'Award',
        description: 'Learn Ekegusii vocabulary from Hobley (1902 Kossova) and Johnston (1919 #7 Ki-guzii).',
        tips: "In Ekegusii, Dahl's Law voices k to g before a voiceless consonant in the next syllable: oko-manya (to know) vs. ogo-kama (to milk), eke-moni (cat) vs. ege-kombe (cup).",
        culturalNote: "In Gusii highland tradition, 'risaga' is cooperative neighbourhood labour where homesteads unite to cultivate finger-millet (obori), thatch houses (chinyomba), and harvest crops.",
        words: [
          { target: 'inche, aye, ere, intwe, inywe, barabwo', source: 'I, you (sg.), s/he, we, you (pl.), they', pronunciation: 'een-cheh, ah-yeh, eh-reh, een-tweh', hint: 'Johnston (1919, p. 58 #7 Ki-guzii) pronouns' },
          { target: 'obori / amaemba / erabuoni', source: 'Finger-millet (wimbi) / Sorghum / Sweet potato', pronunciation: 'oh-boh-ree / ah-mah-ehm-bah', hint: 'Hobley (1902, p. 65) highland staples' },
          { target: 'obokima / obouki', source: 'Millet ugali / Honey', pronunciation: 'oh-boh-kee-mah / oh-boh-oo-kee', hint: 'Hobley (1902, p. 64)' },
          { target: 'ritimo (pl. amatimo) / enguba', source: 'Spear (pl. Spears) / Shield', pronunciation: 'ree-tee-moh / ehn-goo-bah', hint: 'Hobley (1902, p. 66) & Johnston (1919 #7)' },
          { target: 'obota / omogwe / orobanga', source: 'Bow / Arrow / Sword-knife (panga)', pronunciation: 'oh-boh-tah / oh-moh-gweh / oh-roh-bahn-gah', hint: 'Hobley (1902, p. 62)' },
          { target: 'risaga / egesarate', source: 'Cooperative community work-party / Cattle boma', pronunciation: 'ree-sah-gah / eh-geh-sah-rah-teh', hint: 'Traditional Gusii institutions' },
          { target: 'rogoro / maate', source: 'Upperside (Northern standard dialect) / Lowerside (South-western dialect)', pronunciation: 'roh-goh-roh / mah-teh', hint: 'Two main Ekegusii dialect zones' },
          { target: 'gokama (-kama) / okoruga (-ruga)', source: 'To milk (Dahl’s Law ogo-) / To cook (oko-)', pronunciation: 'goh-kah-mah / oh-koh-roo-gah', hint: 'Dahl’s Law voicing before voiceless k' },
          { target: 'Amaboko abere nigo agokora egesieri', source: 'Two hands together build the doorway (Proverb)', pronunciation: 'ah-mah-boh-koh ah-beh-reh', hint: 'Unity and cooperation' }
        ],
        sentences: [
          { target: 'Amaboko abere nigo agokora egesieri.', source: 'Two hands together build the doorway.' },
          { target: 'Omwana omonyakige ogokina na abagaka.', source: 'A respectful child sits with elders.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Why does the Ekegusii verb "gokama" (to milk) use "go-" instead of "oko-"?',
            correctAnswer: 'Dahl’s Law voices k to g before the voiceless stem consonant -k-',
            options: [
              'Dahl’s Law voices k to g before the voiceless stem consonant -k-',
              'It is a plural noun in Class 2',
              'It is a negative past tense',
              'It means "Good morning"'
            ],
            hint: 'oko- + -kama -> ogo-kama (gokama)'
          }
        ]
      }
    ]
  }
];
