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
          { target: 'obori / amaemba / erabuoni', source: 'Finger-millet (wimbi) / Sorghum / Sweet potato', pronunciation: 'oh-boh-ree / ah-mah-ehm-bah', hint: 'Hobley (1902, pp. 89–91) highland staples' },
          { target: 'obokima / obouki', source: 'Millet ugali / Honey', pronunciation: 'oh-boh-kee-mah / oh-boh-oo-kee', hint: 'Hobley (1902, pp. 89–91)' },
          { target: 'ritimo (pl. amatimo) / enguba', source: 'Spear (pl. Spears) / Shield', pronunciation: 'ree-tee-moh / ehn-goo-bah', hint: 'Hobley (1902, pp. 89–91) & Johnston (1919 #7)' },
          { target: 'obota / omogwe / orobanga', source: 'Bow / Arrow / Sword-knife (panga)', pronunciation: 'oh-boh-tah / oh-moh-gweh / oh-roh-bahn-gah', hint: 'Hobley (1902, pp. 89–91)' },
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
  },
  {
    "id": "kisii-unit-3",
    "title": "Unit 3: Family, Kinship, Clans & Social Organization (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))",
    "description": "Master family, kinship, clans & social organization in Kisii (Ekegusii) built directly from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
    "icon": "👨‍👩‍👧‍👦",
    "skills": [
      {
        "id": "kisii-family-kinship-kinship-elders-3",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies. Grounded in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kisii (Ekegusii) (Ekegusii) in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kisii, Nyamira.",
        "words": [
          {
            "target": "omosani (pl. abasani)",
            "source": "Friend",
            "pronunciation": "oh-moh-sah-nee",
            "hint": "Ekegusii Class 1/2 friendship noun"
          },
          {
            "target": "omwana (pl. abana)",
            "source": "Child",
            "pronunciation": "oh-mwah-nah / ah-bah-nah",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "omokungu (pl. abakungu)",
            "source": "Woman",
            "pronunciation": "oh-moh-koon-goo",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "omosacha (pl. abasacha)",
            "source": "Man",
            "pronunciation": "oh-moh-sah-chah",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "tata (iso = your father, ise = his father)",
            "source": "Father",
            "pronunciation": "tah-tah",
            "hint": "Hobley 1902 p. 63 & Johnston 1919 #7"
          },
          {
            "target": "obonto",
            "source": "Humanity / Ubuntu philosophy",
            "pronunciation": "obonto",
            "hint": "Wikipedia Ubuntu philosophy — Ekegusii"
          },
          {
            "target": "baba",
            "source": "Mother",
            "pronunciation": "baba",
            "hint": "Wikipedia Gusii language — Phonology"
          },
          {
            "target": "abana",
            "source": "Children",
            "pronunciation": "abana",
            "hint": "Wikipedia Gusii language — Phonology"
          },
          {
            "target": "baminto",
            "source": "Our people / brothers and sisters",
            "pronunciation": "baminto",
            "hint": "Wikipedia Gusii language — Phonology"
          }
        ],
        "sentences": [
          {
            "target": "Abanto baito bamanyire \"omosani (pl. abasani)\" amo na \"omwana (pl. abana)\".",
            "source": "Our people know \"Friend\" and \"Child\"."
          },
          {
            "target": "ase enka yaito nigo bore omokungu (pl. abakungu) na omosacha (pl. abasacha).",
            "source": "At our home there is Woman and Man."
          },
          {
            "target": "Abagaka nigoateba igoro ya \"tata (iso = your father, ise = his father)\" na \"obonto\".",
            "source": "The elders spoke about \"Father\" and \"Humanity / Ubuntu philosophy\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"omosani (pl. abasani)\" mean in English (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))?",
            "correctAnswer": "Friend",
            "options": [
              "Friend",
              "Child",
              "Woman",
              "Man"
            ],
            "hint": "Ekegusii Class 1/2 friendship noun"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Kisii (Ekegusii) term to its verified English meaning:",
            "pairs": [
              {
                "left": "omosani (pl. abasani)",
                "right": "Friend"
              },
              {
                "left": "omwana (pl. abana)",
                "right": "Child"
              },
              {
                "left": "omokungu (pl. abakungu)",
                "right": "Woman"
              },
              {
                "left": "omosacha (pl. abasacha)",
                "right": "Man"
              }
            ]
          }
        ]
      },
      {
        "id": "kisii-family-kinship-clans-community-3",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records. Grounded in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kisii (Ekegusii) (Ekegusii) in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kisii, Nyamira.",
        "words": [
          {
            "target": "omoiseke (pl. abaiseke)",
            "source": "Girl (Class 9/2)",
            "pronunciation": "omoiseke (pl. abaiseke)",
            "hint": "Wikipedia Gusii language — Noun classes"
          },
          {
            "target": "sokoro",
            "source": "Grandfather",
            "pronunciation": "sokoro",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "omosubati",
            "source": "Lady / married woman",
            "pronunciation": "omosubati",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "omorwani",
            "source": "Fighter / warrior",
            "pronunciation": "omorwani",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "N-dugi-ani. Omw-ana ωw-etu / Ωm-ura ωm-intu. Ωmω-mura ωm-intu",
            "source": "Brother",
            "pronunciation": "n-dugi-ani. omw-ana ωw-etu / ωm-ura ωm-intu. ωmω-mura ωm-intu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Nya-ruχa. Omw-iseke. Ωmω-subati. Ωmu-gωgω / Ωmω-subati; ava-",
            "source": "Sister",
            "pronunciation": "nya-ruχa. omw-iseke. ωmω-subati. ωmu-gωgω / ωmω-subati; ava-",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Omw-ana. Iωmω-isia / Omw-ana. Ωmω-risia",
            "source": "Son, boy",
            "pronunciation": "omw-ana. iωmω-isia / omw-ana. ωmω-risia",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Ωmω-ke. Ωmu-kuṅgu. Ωmu-ka / Ωmω-kare",
            "source": "Wife",
            "pronunciation": "ωmω-ke. ωmu-kuṅgu. ωmu-ka / ωmω-kare",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "umwisia",
            "source": "Son",
            "pronunciation": "umwisia",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Kossova / Kisii)"
          }
        ],
        "sentences": [
          {
            "target": "Abanto baito bamanyire \"omoiseke (pl. abaiseke)\" amo na \"sokoro\".",
            "source": "Our people know \"Girl (Class 9/2)\" and \"Grandfather\"."
          },
          {
            "target": "ase enka yaito nigo bore omosubati na omorwani.",
            "source": "At our home there is Lady / married woman and Fighter / warrior."
          },
          {
            "target": "Abagaka nigoateba igoro ya \"N-dugi-ani. Omw-ana ωw-etu / Ωm-ura ωm-intu. Ωmω-mura ωm-intu\" na \"Nya-ruχa. Omw-iseke. Ωmω-subati. Ωmu-gωgω / Ωmω-subati; ava-\".",
            "source": "The elders spoke about \"Brother\" and \"Sister\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"omoiseke (pl. abaiseke)\" mean in English (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))?",
            "correctAnswer": "Girl (Class 9/2)",
            "options": [
              "Girl (Class 9/2)",
              "Grandfather",
              "Lady / married woman",
              "Fighter / warrior"
            ],
            "hint": "Wikipedia Gusii language — Noun classes"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Kisii (Ekegusii) term to its verified English meaning:",
            "pairs": [
              {
                "left": "omoiseke (pl. abaiseke)",
                "right": "Girl (Class 9/2)"
              },
              {
                "left": "sokoro",
                "right": "Grandfather"
              },
              {
                "left": "omosubati",
                "right": "Lady / married woman"
              },
              {
                "left": "omorwani",
                "right": "Fighter / warrior"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-4",
    "title": "Unit 4: Numbers, Counting, Currency & Measures (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))",
    "description": "Master numbers, counting, currency & measures in Kisii (Ekegusii) built directly from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
    "icon": "🔢",
    "skills": [
      {
        "id": "kisii-numbers-measures-cardinals-ordinals-4",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables. Grounded in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kisii (Ekegusii) (Ekegusii) in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kisii, Nyamira.",
        "words": [
          {
            "target": "isano na ibere",
            "source": "Seven (7, lit. 5+2)",
            "pronunciation": "isano na ibere",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "isano na isato",
            "source": "Eight (8, lit. 5+3)",
            "pronunciation": "isano na isato",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "kianda",
            "source": "Nine (9)",
            "pronunciation": "kianda",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi",
            "source": "Ten (10)",
            "pronunciation": "ikomi",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi nemo",
            "source": "Eleven (11)",
            "pronunciation": "ikomi nemo",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi na isato",
            "source": "Thirteen (13)",
            "pronunciation": "ikomi na isato",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi na inye",
            "source": "Fourteen (14)",
            "pronunciation": "ikomi na inye",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi na isano",
            "source": "Fifteen (15)",
            "pronunciation": "ikomi na isano",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi na isano nemo",
            "source": "Sixteen (16)",
            "pronunciation": "ikomi na isano nemo",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          }
        ],
        "sentences": [
          {
            "target": "Abanto baito bamanyire \"isano na ibere\" amo na \"isano na isato\".",
            "source": "Our people know \"Seven (7, lit. 5+2)\" and \"Eight (8, lit. 5+3)\"."
          },
          {
            "target": "ase enka yaito nigo bore kianda na ikomi.",
            "source": "At our home there is Nine (9) and Ten (10)."
          },
          {
            "target": "Abagaka nigoateba igoro ya \"ikomi nemo\" na \"ikomi na isato\".",
            "source": "The elders spoke about \"Eleven (11)\" and \"Thirteen (13)\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"isano na ibere\" mean in English (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))?",
            "correctAnswer": "Seven (7, lit. 5+2)",
            "options": [
              "Seven (7, lit. 5+2)",
              "Eight (8, lit. 5+3)",
              "Nine (9)",
              "Ten (10)"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Kisii (Ekegusii) term to its verified English meaning:",
            "pairs": [
              {
                "left": "isano na ibere",
                "right": "Seven (7, lit. 5+2)"
              },
              {
                "left": "isano na isato",
                "right": "Eight (8, lit. 5+3)"
              },
              {
                "left": "kianda",
                "right": "Nine (9)"
              },
              {
                "left": "ikomi",
                "right": "Ten (10)"
              }
            ]
          }
        ]
      },
      {
        "id": "kisii-numbers-measures-trade-measures-4",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions. Grounded in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kisii (Ekegusii) (Ekegusii) in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kisii, Nyamira.",
        "words": [
          {
            "target": "ikomi na isano na ibere",
            "source": "Seventeen (17)",
            "pronunciation": "ikomi na isano na ibere",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi na isano na isato",
            "source": "Eighteen (18)",
            "pronunciation": "ikomi na isano na isato",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi na kianda",
            "source": "Nineteen (19)",
            "pronunciation": "ikomi na kianda",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "emerongo ebere",
            "source": "Twenty (20)",
            "pronunciation": "emerongo ebere",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "Esekendi",
            "source": "Second (time unit)",
            "pronunciation": "esekendi",
            "hint": "Ekegusii — GitHub unicode-org/cldr (guz.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "-mu, -mω / -mω, -mwe",
            "source": "One",
            "pronunciation": "-mu, -mω / -mω, -mwe",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "-beri, -viri / -viri",
            "source": "Two",
            "pronunciation": "-beri, -viri / -viri",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "-satu, -tatu / -tatu",
            "source": "Three",
            "pronunciation": "-satu, -tatu / -tatu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "-nye, -nne / -nne",
            "source": "Four",
            "pronunciation": "-nye, -nne / -nne",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          }
        ],
        "sentences": [
          {
            "target": "Abanto baito bamanyire \"ikomi na isano na ibere\" amo na \"ikomi na isano na isato\".",
            "source": "Our people know \"Seventeen (17)\" and \"Eighteen (18)\"."
          },
          {
            "target": "ase enka yaito nigo bore ikomi na kianda na emerongo ebere.",
            "source": "At our home there is Nineteen (19) and Twenty (20)."
          },
          {
            "target": "Abagaka nigoateba igoro ya \"Esekendi\" na \"-mu, -mω / -mω, -mwe\".",
            "source": "The elders spoke about \"Second (time unit)\" and \"One\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ikomi na isano na ibere\" mean in English (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))?",
            "correctAnswer": "Seventeen (17)",
            "options": [
              "Seventeen (17)",
              "Eighteen (18)",
              "Nineteen (19)",
              "Twenty (20)"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Kisii (Ekegusii) term to its verified English meaning:",
            "pairs": [
              {
                "left": "ikomi na isano na ibere",
                "right": "Seventeen (17)"
              },
              {
                "left": "ikomi na isano na isato",
                "right": "Eighteen (18)"
              },
              {
                "left": "ikomi na kianda",
                "right": "Nineteen (19)"
              },
              {
                "left": "emerongo ebere",
                "right": "Twenty (20)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-5",
    "title": "Unit 5: Food, Cuisine, Crops & Livestock Husbandry (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))",
    "description": "Master food, cuisine, crops & livestock husbandry in Kisii (Ekegusii) built directly from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
    "icon": "🌾",
    "skills": [
      {
        "id": "kisii-food-agriculture-staple-foods-cookery-5",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Utensils",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs. Grounded in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kisii (Ekegusii) (Ekegusii) in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kisii, Nyamira.",
        "words": [
          {
            "target": "obouki",
            "source": "Honey",
            "pronunciation": "oh-boh-oo-kee",
            "hint": "Hobley 1902 p. 64 & Johnston 1919 #7"
          },
          {
            "target": "enyama",
            "source": "Meat",
            "pronunciation": "eh-nyah-mah",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "endagera (obokima = ugali)",
            "source": "Food",
            "pronunciation": "ehn-dah-geh-rah / oh-boh-kee-mah",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "egekombe (pl. ebikombe)",
            "source": "Cup (Class 7/8: ege-/ebi-)",
            "pronunciation": "egekombe (pl. ebikombe)",
            "hint": "Wikipedia Gusii language — Noun classes"
          },
          {
            "target": "ritunda (pl. amatunda)",
            "source": "Fruit (Class 5/6: ri-/ama-)",
            "pronunciation": "ritunda (pl. amatunda)",
            "hint": "Wikipedia Gusii language — Noun classes"
          },
          {
            "target": "amabere",
            "source": "Milk (Class 6: ama-)",
            "pronunciation": "amabere",
            "hint": "Wikipedia Gusii language — Noun classes"
          },
          {
            "target": "amache",
            "source": "Water",
            "pronunciation": "amache",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "Pauni ya Sudani",
            "source": "Sudanese Pound (SDG)",
            "pronunciation": "pauni ya sudani",
            "hint": "Ekegusii — GitHub unicode-org/cldr (guz.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Ri-gωmia; ama-. Eri-tωki; ama- / Eri-tωke; ama-",
            "source": "Banana",
            "pronunciation": "ri-gωmia; ama-. eri-tωki; ama- / eri-tωke; ama-",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          }
        ],
        "sentences": [
          {
            "target": "Abanto baito bamanyire \"obouki\" amo na \"enyama\".",
            "source": "Our people know \"Honey\" and \"Meat\"."
          },
          {
            "target": "ase enka yaito nigo bore endagera (obokima = ugali) na egekombe (pl. ebikombe).",
            "source": "At our home there is Food and Cup (Class 7/8: ege-/ebi-)."
          },
          {
            "target": "Abagaka nigoateba igoro ya \"ritunda (pl. amatunda)\" na \"amabere\".",
            "source": "The elders spoke about \"Fruit (Class 5/6: ri-/ama-)\" and \"Milk (Class 6: ama-)\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"obouki\" mean in English (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))?",
            "correctAnswer": "Honey",
            "options": [
              "Honey",
              "Meat",
              "Food",
              "Cup (Class 7/8: ege-/ebi-)"
            ],
            "hint": "Hobley 1902 p. 64 & Johnston 1919 #7"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Kisii (Ekegusii) term to its verified English meaning:",
            "pairs": [
              {
                "left": "obouki",
                "right": "Honey"
              },
              {
                "left": "enyama",
                "right": "Meat"
              },
              {
                "left": "endagera (obokima = ugali)",
                "right": "Food"
              },
              {
                "left": "egekombe (pl. ebikombe)",
                "right": "Cup (Class 7/8: ege-/ebi-)"
              }
            ]
          }
        ]
      },
      {
        "id": "kisii-food-agriculture-crops-livestock-5",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Sprout",
        "description": "Study indigenous crops, planting seasons, and livestock terminology. Grounded in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kisii (Ekegusii) (Ekegusii) in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kisii, Nyamira.",
        "words": [
          {
            "target": "Ege-tinia. Ama-guta / Ege-tinia; evi-",
            "source": "Fat, oil",
            "pronunciation": "ege-tinia. ama-guta / ege-tinia; evi-",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "In-jala, en-jara / En-cara",
            "source": "Hunger",
            "pronunciation": "in-jala, en-jara / en-cara",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "E-bandω; ci-. Erinya-mωdωma / Ama-dumω. Eri-tumwa",
            "source": "Maize",
            "pronunciation": "e-bandω; ci-. erinya-mωdωma / ama-dumω. eri-tumwa",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Ama-vere",
            "source": "Milk",
            "pronunciation": "ama-vere",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Ama-rwa",
            "source": "Palm wine, beer",
            "pronunciation": "ama-rwa",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "-lia",
            "source": "To eat",
            "pronunciation": "-lia",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "owoli",
            "source": "Eleusine grain (wimbi)",
            "pronunciation": "owoli",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Kossova / Kisii)"
          },
          {
            "target": "amauta",
            "source": "Fat",
            "pronunciation": "amauta",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Kossova / Kisii)"
          },
          {
            "target": "amarua",
            "source": "Beer",
            "pronunciation": "amarua",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Kossova / Kisii)"
          }
        ],
        "sentences": [
          {
            "target": "Abanto baito bamanyire \"Ege-tinia. Ama-guta / Ege-tinia; evi-\" amo na \"In-jala, en-jara / En-cara\".",
            "source": "Our people know \"Fat, oil\" and \"Hunger\"."
          },
          {
            "target": "ase enka yaito nigo bore E-bandω; ci-. Erinya-mωdωma / Ama-dumω. Eri-tumwa na Ama-vere.",
            "source": "At our home there is Maize and Milk."
          },
          {
            "target": "Abagaka nigoateba igoro ya \"Ama-rwa\" na \"-lia\".",
            "source": "The elders spoke about \"Palm wine, beer\" and \"To eat\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ege-tinia. Ama-guta / Ege-tinia; evi-\" mean in English (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))?",
            "correctAnswer": "Fat, oil",
            "options": [
              "Fat, oil",
              "Hunger",
              "Maize",
              "Milk"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Kisii (Ekegusii) term to its verified English meaning:",
            "pairs": [
              {
                "left": "Ege-tinia. Ama-guta / Ege-tinia; evi-",
                "right": "Fat, oil"
              },
              {
                "left": "In-jala, en-jara / En-cara",
                "right": "Hunger"
              },
              {
                "left": "E-bandω; ci-. Erinya-mωdωma / Ama-dumω. Eri-tumwa",
                "right": "Maize"
              },
              {
                "left": "Ama-vere",
                "right": "Milk"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-6",
    "title": "Unit 6: Nature, Landscape, Flora & East African Wildlife (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))",
    "description": "Master nature, landscape, flora & east african wildlife in Kisii (Ekegusii) built directly from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
    "icon": "🦁",
    "skills": [
      {
        "id": "kisii-nature-wildlife-land-sky-water-6",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "Sun",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena. Grounded in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kisii (Ekegusii) (Ekegusii) in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kisii, Nyamira.",
        "words": [
          {
            "target": "rituko (pl. amatuko) / omobaso",
            "source": "Day",
            "pronunciation": "ree-too-koh / oh-moh-bah-soh",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "obotuko",
            "source": "Night",
            "pronunciation": "oh-boh-too-koh",
            "hint": "Hobley 1902 p. 65 & Johnston 1919 #7"
          },
          {
            "target": "omote (pl. emete)",
            "source": "Tree",
            "pronunciation": "oh-moh-teh / eh-meh-teh",
            "hint": "Hobley 1902 p. 67 & Johnston 1919 #7"
          },
          {
            "target": "embura",
            "source": "Rain",
            "pronunciation": "ehm-boo-rah",
            "hint": "Hobley 1902 p. 66 & Johnston 1919 #7"
          },
          {
            "target": "omorero",
            "source": "Fire",
            "pronunciation": "oh-moh-reh-roh",
            "hint": "Hobley 1902 p. 63 & Johnston 1919 #7"
          },
          {
            "target": "eng'enang'eni (pl. ching'enang'eni)",
            "source": "Star",
            "pronunciation": "ehn-geh-nahn-geh-nee",
            "hint": "Hobley 1902 p. 67 & Johnston 1919 #7"
          },
          {
            "target": "omotienyi",
            "source": "Moon",
            "pronunciation": "oh-moh-tyeh-nyee",
            "hint": "Hobley 1902 p. 65 & Johnston 1919 #7"
          },
          {
            "target": "erioba (risase)",
            "source": "Sun",
            "pronunciation": "eh-ree-oh-bah / ree-sah-seh",
            "hint": "Hobley 1902 p. 67 & Johnston 1919 #7"
          },
          {
            "target": "Engoro (Erioba)",
            "source": "God",
            "pronunciation": "ehn-goh-roh / eh-ree-oh-bah",
            "hint": "Hobley 1902 p. 64 & Johnston 1919 #7"
          }
        ],
        "sentences": [
          {
            "target": "Abanto baito bamanyire \"rituko (pl. amatuko) / omobaso\" amo na \"obotuko\".",
            "source": "Our people know \"Day\" and \"Night\"."
          },
          {
            "target": "ase enka yaito nigo bore omote (pl. emete) na embura.",
            "source": "At our home there is Tree and Rain."
          },
          {
            "target": "Abagaka nigoateba igoro ya \"omorero\" na \"eng'enang'eni (pl. ching'enang'eni)\".",
            "source": "The elders spoke about \"Fire\" and \"Star\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"rituko (pl. amatuko) / omobaso\" mean in English (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))?",
            "correctAnswer": "Day",
            "options": [
              "Day",
              "Night",
              "Tree",
              "Rain"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Kisii (Ekegusii) term to its verified English meaning:",
            "pairs": [
              {
                "left": "rituko (pl. amatuko) / omobaso",
                "right": "Day"
              },
              {
                "left": "obotuko",
                "right": "Night"
              },
              {
                "left": "omote (pl. emete)",
                "right": "Tree"
              },
              {
                "left": "embura",
                "right": "Rain"
              }
            ]
          }
        ]
      },
      {
        "id": "kisii-nature-wildlife-wildlife-flora-6",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "Trees",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts. Grounded in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kisii (Ekegusii) (Ekegusii) in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kisii, Nyamira.",
        "words": [
          {
            "target": "ense",
            "source": "Earth / world",
            "pronunciation": "ense",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "risase / omobaso",
            "source": "Sun / daytime",
            "pronunciation": "risase / omobaso",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "rogoro",
            "source": "Upperside / hillside (standard dialect region)",
            "pronunciation": "rogoro",
            "hint": "Wikipedia Gusii language — Dialects & Sample phrases"
          },
          {
            "target": "maate",
            "source": "Lowerside (southwestern dialect region)",
            "pronunciation": "maate",
            "hint": "Wikipedia Gusii language — Dialects"
          },
          {
            "target": "enyancha",
            "source": "Lake / sea",
            "pronunciation": "enyancha",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "eroro",
            "source": "Desert / wilderness",
            "pronunciation": "eroro",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "Omororro",
            "source": "fire (Class 3)",
            "pronunciation": "omororro",
            "hint": "Ekegusii"
          },
          {
            "target": "Chanuari (Can)",
            "source": "January (Month 1)",
            "pronunciation": "chanuari (can)",
            "hint": "Ekegusii — GitHub unicode-org/cldr (guz.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Feburari (Feb)",
            "source": "February (Month 2)",
            "pronunciation": "feburari (feb)",
            "hint": "Ekegusii — GitHub unicode-org/cldr (guz.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          }
        ],
        "sentences": [
          {
            "target": "Abanto baito bamanyire \"ense\" amo na \"risase / omobaso\".",
            "source": "Our people know \"Earth / world\" and \"Sun / daytime\"."
          },
          {
            "target": "ase enka yaito nigo bore rogoro na maate.",
            "source": "At our home there is Upperside / hillside (standard dialect region) and Lowerside (southwestern dialect region)."
          },
          {
            "target": "Abagaka nigoateba igoro ya \"enyancha\" na \"eroro\".",
            "source": "The elders spoke about \"Lake / sea\" and \"Desert / wilderness\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ense\" mean in English (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))?",
            "correctAnswer": "Earth / world",
            "options": [
              "Earth / world",
              "Sun / daytime",
              "Upperside / hillside (standard dialect region)",
              "Lowerside (southwestern dialect region)"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Kisii (Ekegusii) term to its verified English meaning:",
            "pairs": [
              {
                "left": "ense",
                "right": "Earth / world"
              },
              {
                "left": "risase / omobaso",
                "right": "Sun / daytime"
              },
              {
                "left": "rogoro",
                "right": "Upperside / hillside (standard dialect region)"
              },
              {
                "left": "maate",
                "right": "Lowerside (southwestern dialect region)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-7",
    "title": "Unit 7: The Human Body, Health, Medicine & Safety (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))",
    "description": "Master the human body, health, medicine & safety in Kisii (Ekegusii) built directly from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
    "icon": "🩺",
    "skills": [
      {
        "id": "kisii-body-health-anatomy-senses-7",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables. Grounded in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kisii (Ekegusii) (Ekegusii) in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kisii, Nyamira.",
        "words": [
          {
            "target": "okogoro (pl. amagoro)",
            "source": "Foot",
            "pronunciation": "oh-koh-goh-roh / ah-mah-goh-roh",
            "hint": "Hobley 1902 p. 64 & Johnston 1919 #7"
          },
          {
            "target": "okoboko (pl. amaboko)",
            "source": "Hand",
            "pronunciation": "oh-koh-boh-koh / ah-mah-boh-koh",
            "hint": "Hobley 1902 p. 64 & Johnston 1919 #7"
          },
          {
            "target": "riiso (pl. amaiso)",
            "source": "Eye",
            "pronunciation": "ree-soh / ah-mah-ee-soh",
            "hint": "Hobley 1902 p. 63 & Johnston 1919 #7"
          },
          {
            "target": "omotwe (pl. emetwe)",
            "source": "Head (Class 3/4: omo-/eme-)",
            "pronunciation": "omotwe (pl. emetwe)",
            "hint": "Wikipedia Gusii language — Noun classes"
          },
          {
            "target": "ogoto",
            "source": "Ear",
            "pronunciation": "ogoto",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "obori / amaemba / rigomia (ritoke) / erabuoni / obouki",
            "source": "Finger-millet (wimbi) / Sorghum / Banana / Sweet potato / Honey",
            "pronunciation": "o-bo-ri / a-ma-em-ba / ri-to-ke / o-bo-u-ki",
            "hint": "C. W. Hobley (1902, pp. 89–91 Kossova) & Sir Harry H. Johnston (1919, pp. 56–58 #7 Ki-guzii)"
          },
          {
            "target": "Ωmω-kωnω; ama- / Ωkω-bωkω",
            "source": "Arm",
            "pronunciation": "ωmω-kωnω; ama- / ωkω-bωkω",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Ωmω-goṅgω",
            "source": "Back",
            "pronunciation": "ωmω-goṅgω",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "In-da, En-dā; cin-da / En-da; cin-da",
            "source": "Belly",
            "pronunciation": "in-da, en-dā; cin-da / en-da; cin-da",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          }
        ],
        "sentences": [
          {
            "target": "Abanto baito bamanyire \"okogoro (pl. amagoro)\" amo na \"okoboko (pl. amaboko)\".",
            "source": "Our people know \"Foot\" and \"Hand\"."
          },
          {
            "target": "ase enka yaito nigo bore riiso (pl. amaiso) na omotwe (pl. emetwe).",
            "source": "At our home there is Eye and Head (Class 3/4: omo-/eme-)."
          },
          {
            "target": "Abagaka nigoateba igoro ya \"ogoto\" na \"obori / amaemba / rigomia (ritoke) / erabuoni / obouki\".",
            "source": "The elders spoke about \"Ear\" and \"Finger-millet (wimbi) / Sorghum / Banana / Sweet potato / Honey\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"okogoro (pl. amagoro)\" mean in English (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))?",
            "correctAnswer": "Foot",
            "options": [
              "Foot",
              "Hand",
              "Eye",
              "Head (Class 3/4: omo-/eme-)"
            ],
            "hint": "Hobley 1902 p. 64 & Johnston 1919 #7"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Kisii (Ekegusii) term to its verified English meaning:",
            "pairs": [
              {
                "left": "okogoro (pl. amagoro)",
                "right": "Foot"
              },
              {
                "left": "okoboko (pl. amaboko)",
                "right": "Hand"
              },
              {
                "left": "riiso (pl. amaiso)",
                "right": "Eye"
              },
              {
                "left": "omotwe (pl. emetwe)",
                "right": "Head (Class 3/4: omo-/eme-)"
              }
            ]
          }
        ]
      },
      {
        "id": "kisii-body-health-healing-safety-7",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "ShieldAlert",
        "description": "Master expressions for illness, healing remedies, protection, and safety. Grounded in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kisii (Ekegusii) (Ekegusii) in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kisii, Nyamira.",
        "words": [
          {
            "target": "Amany-iṅga or Amainy-iṅga / Ama-sere. Amainy-iṅga",
            "source": "Blood",
            "pronunciation": "amany-iṅga or amainy-iṅga / ama-sere. amainy-iṅga",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Eki-kuba; evi- / Ege-kuba; eve-. Eṅ-kuba; ciṅ-",
            "source": "Breast (man's)",
            "pronunciation": "eki-kuba; evi- / ege-kuba; eve-. eṅ-kuba; ciṅ-",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Li-bere / Ωlu-bere; cim-",
            "source": "Breast (woman's)",
            "pronunciation": "li-bere / ωlu-bere; cim- ...",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Eki-ara; evi- or ebi- / Eki-ara; evi-. Ek-era; evi-ara",
            "source": "Finger",
            "pronunciation": "eki-ara; evi- or ebi- / eki-ara; evi-. ek-era; evi-ara",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "E-tukia; ci-",
            "source": "Hair",
            "pronunciation": "e-tukia; ci-",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Ωmu-twe; emi- / Ωmω-tui, Ωmω-tu",
            "source": "Head",
            "pronunciation": "ωmu-twe; emi- / ωmω-tui, ωmω-tu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "En-teme. Eṅ-korω / Eṅ-korω",
            "source": "Heart",
            "pronunciation": "en-teme. eṅ-korω / eṅ-korω",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Ye-tiṅgirω. Iki-taleṅgi / Ege-tiṅgirω. Eke-sugurω",
            "source": "Heel",
            "pronunciation": "ye-tiṅgirω. iki-taleṅgi / ege-tiṅgirω. eke-sugurω",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Eri-ru / Eri-rū",
            "source": "Knee",
            "pronunciation": "eri-ru / eri-rū",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          }
        ],
        "sentences": [
          {
            "target": "Abanto baito bamanyire \"Amany-iṅga or Amainy-iṅga / Ama-sere. Amainy-iṅga\" amo na \"Eki-kuba; evi- / Ege-kuba; eve-. Eṅ-kuba; ciṅ-\".",
            "source": "Our people know \"Blood\" and \"Breast (man's)\"."
          },
          {
            "target": "ase enka yaito nigo bore Li-bere / Ωlu-bere; cim- na Eki-ara; evi- or ebi- / Eki-ara; evi-. Ek-era; evi-ara.",
            "source": "At our home there is Breast (woman's) and Finger."
          },
          {
            "target": "Abagaka nigoateba igoro ya \"E-tukia; ci-\" na \"Ωmu-twe; emi- / Ωmω-tui, Ωmω-tu\".",
            "source": "The elders spoke about \"Hair\" and \"Head\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Amany-iṅga or Amainy-iṅga / Ama-sere. Amainy-iṅga\" mean in English (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))?",
            "correctAnswer": "Blood",
            "options": [
              "Blood",
              "Breast (man's)",
              "Breast (woman's)",
              "Finger"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Kisii (Ekegusii) term to its verified English meaning:",
            "pairs": [
              {
                "left": "Amany-iṅga or Amainy-iṅga / Ama-sere. Amainy-iṅga",
                "right": "Blood"
              },
              {
                "left": "Eki-kuba; evi- / Ege-kuba; eve-. Eṅ-kuba; ciṅ-",
                "right": "Breast (man's)"
              },
              {
                "left": "Li-bere / Ωlu-bere; cim-",
                "right": "Breast (woman's)"
              },
              {
                "left": "Eki-ara; evi- or ebi- / Eki-ara; evi-. Ek-era; evi-ara",
                "right": "Finger"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-8",
    "title": "Unit 8: Core Verbs, Tenses, Negation & Verbal Extensions (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))",
    "description": "Master core verbs, tenses, negation & verbal extensions in Kisii (Ekegusii) built directly from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
    "icon": "⚡",
    "skills": [
      {
        "id": "kisii-verbs-grammar-action-verbs-8",
        "title": "Essential Action & Motion Verbs",
        "icon": "Compass",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work. Grounded in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kisii (Ekegusii) (Ekegusii) in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kisii, Nyamira.",
        "words": [
          {
            "target": "ogokwana (-kwana) / okoboora",
            "source": "Speak",
            "pronunciation": "oh-goh-kwah-nah",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "okorara (-rara)",
            "source": "Sleep",
            "pronunciation": "oh-koh-rah-rah",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "ogocha (inchwo! = come!)",
            "source": "Come",
            "pronunciation": "oh-goh-chah / een-chwoh",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "okogenda (-genda)",
            "source": "Go",
            "pronunciation": "oh-koh-gehn-dah",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "okonywa (-nywa)",
            "source": "Drink",
            "pronunciation": "oh-koh-nywah",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "okoria (-ria)",
            "source": "Eat",
            "pronunciation": "oh-koh-ree-ah",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "bóra (to miss) vs. bóóra (to say)",
            "source": "To miss (short vowel) vs. To say/tell (long vowel)",
            "pronunciation": "bóra (to miss) vs. bóóra (to say)",
            "hint": "Wikipedia Gusii language — Contrastive vowel length"
          },
          {
            "target": "komanya (-manya)",
            "source": "To know",
            "pronunciation": "komanya (-manya)",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "gokama (-kama)",
            "source": "To milk",
            "pronunciation": "gokama (-kama)",
            "hint": "Wikipedia Gusii language — Sample phrases"
          }
        ],
        "sentences": [
          {
            "target": "Abanto baito bamanyire \"ogokwana (-kwana) / okoboora\" amo na \"okorara (-rara)\".",
            "source": "Our people know \"Speak\" and \"Sleep\"."
          },
          {
            "target": "ase enka yaito nigo bore ogocha (inchwo! = come!) na okogenda (-genda).",
            "source": "At our home there is Come and Go."
          },
          {
            "target": "Abagaka nigoateba igoro ya \"okonywa (-nywa)\" na \"okoria (-ria)\".",
            "source": "The elders spoke about \"Drink\" and \"Eat\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ogokwana (-kwana) / okoboora\" mean in English (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))?",
            "correctAnswer": "Speak",
            "options": [
              "Speak",
              "Sleep",
              "Come",
              "Go"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Kisii (Ekegusii) term to its verified English meaning:",
            "pairs": [
              {
                "left": "ogokwana (-kwana) / okoboora",
                "right": "Speak"
              },
              {
                "left": "okorara (-rara)",
                "right": "Sleep"
              },
              {
                "left": "ogocha (inchwo! = come!)",
                "right": "Come"
              },
              {
                "left": "okogenda (-genda)",
                "right": "Go"
              }
            ]
          }
        ]
      },
      {
        "id": "kisii-verbs-grammar-verbal-derivatives-8",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "Layers",
        "description": "Build complex meanings using verbal extensions and grammatical particles. Grounded in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kisii (Ekegusii) (Ekegusii) in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kisii, Nyamira.",
        "words": [
          {
            "target": "komenya (menya)",
            "source": "To dwell / live",
            "pronunciation": "komenya (menya)",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "gotenena (-tenena)",
            "source": "To stand",
            "pronunciation": "gotenena (-tenena)",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "korora (-rora)",
            "source": "To see",
            "pronunciation": "korora (-rora)",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "-garagara",
            "source": "To roll over",
            "pronunciation": "-garagara",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "gesa (verb) / rigesa (noun)",
            "source": "To harvest / harvest season",
            "pronunciation": "gesa (verb) / rigesa (noun)",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "rera",
            "source": "To cry",
            "pronunciation": "rera",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "tara",
            "source": "To walk",
            "pronunciation": "tara",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "rigereria",
            "source": "To look / observe",
            "pronunciation": "rigereria",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "okoria / okonywa",
            "source": "to eat / to drink (Class 15 infinitives)",
            "pronunciation": "okoria / okonywa",
            "hint": "Ekegusii"
          }
        ],
        "sentences": [
          {
            "target": "Abanto baito bamanyire \"komenya (menya)\" amo na \"gotenena (-tenena)\".",
            "source": "Our people know \"To dwell / live\" and \"To stand\"."
          },
          {
            "target": "ase enka yaito nigo bore korora (-rora) na -garagara.",
            "source": "At our home there is To see and To roll over."
          },
          {
            "target": "Abagaka nigoateba igoro ya \"gesa (verb) / rigesa (noun)\" na \"rera\".",
            "source": "The elders spoke about \"To harvest / harvest season\" and \"To cry\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"komenya (menya)\" mean in English (C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria))?",
            "correctAnswer": "To dwell / live",
            "options": [
              "To dwell / live",
              "To stand",
              "To see",
              "To roll over"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Kisii (Ekegusii) term to its verified English meaning:",
            "pairs": [
              {
                "left": "komenya (menya)",
                "right": "To dwell / live"
              },
              {
                "left": "gotenena (-tenena)",
                "right": "To stand"
              },
              {
                "left": "korora (-rora)",
                "right": "To see"
              },
              {
                "left": "-garagara",
                "right": "To roll over"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-9-public-domain-corpus",
    "title": "Unit 9: Newly Integrated Public-Domain Monograph & Comparative Lexicon",
    "description": "Master newly extracted Kisii (Ekegusii) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "kisii-pd-corpus-9-1",
        "title": "Historical Monograph & Comparative Roots I (Kisii (Ekegusii))",
        "icon": "Scroll",
        "description": "Study verified Kisii (Ekegusii) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Kisii (Ekegusii) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "Ngωtenga",
            "source": "I dance",
            "pronunciation": "ngoh-teng-a",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Nangire",
            "source": "I come not",
            "pronunciation": "nang-i-re",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Ngωja",
            "source": "I come",
            "pronunciation": "ngoh-ja",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Narēnta",
            "source": "I bring",
            "pronunciation": "na-reh-nta",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Inje ndu",
            "source": "I am",
            "pronunciation": "inj-e ndu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Yaya",
            "source": "No, not",
            "pronunciation": "ya-ya",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Ariá",
            "source": "There",
            "pronunciation": "a-ri",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "ñgi",
            "source": "Plenty",
            "pronunciation": "ngi",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          }
        ],
        "sentences": [
          {
            "target": "Ngωtenga — Nangire.",
            "source": "I dance — I come not."
          },
          {
            "target": "Ngωja • Narēnta.",
            "source": "I come • I bring."
          },
          {
            "target": "Inje ndu (Yaya).",
            "source": "I am (No, not)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ngωtenga\" in Kisii (Ekegusii) (Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966))?",
            "correctAnswer": "I dance",
            "options": [
              "I dance",
              "I come not",
              "I come",
              "I bring"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kisii (Ekegusii) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Ngωtenga: I dance",
            "pairs": [
              {
                "left": "Ngωtenga",
                "right": "I dance"
              },
              {
                "left": "Nangire",
                "right": "I come not"
              },
              {
                "left": "Ngωja",
                "right": "I come"
              },
              {
                "left": "Narēnta",
                "right": "I bring"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii (Ekegusii) term for \"I am\": ___",
            "correctAnswer": "Inje ndu",
            "options": [
              "Inje ndu",
              "Yaya",
              "Ngωtenga",
              "Nangire"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          }
        ]
      },
      {
        "id": "kisii-pd-corpus-9-2",
        "title": "Historical Monograph & Comparative Roots II (Kisii (Ekegusii))",
        "icon": "Compass",
        "description": "Expand your command of Kisii (Ekegusii) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Kisii (Ekegusii) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "Emuamu",
            "source": "Black",
            "pronunciation": "e-mua-mu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Aīya, Aiga",
            "source": "Here",
            "pronunciation": "aee-ya ai-ga",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Endabu",
            "source": "White",
            "pronunciation": "end-a-bu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "saja, -gore",
            "source": "Male",
            "pronunciation": "sa-ja go-re",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "kĕ",
            "source": "Little",
            "pronunciation": "ke",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "kuru",
            "source": "Great",
            "pronunciation": "ku-ru",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "uya, -ya; Abantu baya = good men",
            "source": "Good",
            "pronunciation": "u-ya ya",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Enkari, -kari",
            "source": "Female",
            "pronunciation": "enk-a-ri ka-ri",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          }
        ],
        "sentences": [
          {
            "target": "Emuamu — Aīya, Aiga.",
            "source": "Black — Here."
          },
          {
            "target": "Endabu • saja, -gore.",
            "source": "White • Male."
          },
          {
            "target": "kĕ (kuru).",
            "source": "Little (Great)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Emuamu\" in Kisii (Ekegusii) (Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966))?",
            "correctAnswer": "Black",
            "options": [
              "Black",
              "Here",
              "White",
              "Male"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kisii (Ekegusii) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Emuamu: Black",
            "pairs": [
              {
                "left": "Emuamu",
                "right": "Black"
              },
              {
                "left": "Aīya, Aiga",
                "right": "Here"
              },
              {
                "left": "Endabu",
                "right": "White"
              },
              {
                "left": "saja, -gore",
                "right": "Male"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii (Ekegusii) term for \"Little\": ___",
            "correctAnswer": "kĕ",
            "options": [
              "kĕ",
              "kuru",
              "Emuamu",
              "Aīya, Aiga"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-10-open-datasets-modern",
    "title": "Unit 10: Open-Dataset Vocabulary, Swadesh Core & Everyday Domains",
    "description": "Master Kisii (Ekegusii) vocabulary and expressions from open-licensed datasets (Wiktionary Swadesh, CLDR, Kencorpus, Anv-ke & thinkKenya) alongside deep archival lexicon.",
    "icon": "Globe",
    "skills": [
      {
        "id": "kisii-open-dataset-10-1",
        "title": "Swadesh Core & Cultural Lexicon (Kisii (Ekegusii))",
        "icon": "Layers",
        "description": "Learn core Kisii (Ekegusii) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Kisii (Ekegusii) dialects and everyday speech.",
        "words": [
          {
            "target": "bi",
            "source": "Bad",
            "pronunciation": "bi",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Abana babo",
            "source": "Their children",
            "pronunciation": "a-ba-na ba-bo",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Riroba rienu",
            "source": "Your country",
            "pronunciation": "ri-ro-ba rie-nu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Omuji uitu",
            "source": "Our town",
            "pronunciation": "o-mu-ji ui-tu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "„ yake",
            "source": "His house",
            "pronunciation": "ya-ke",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "„ yāo",
            "source": "Thy house",
            "pronunciation": "ya-ho",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Enyumba yane",
            "source": "My house",
            "pronunciation": "eny-umb-a ya-ne",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "„ ulia",
            "source": "That tree",
            "pronunciation": "u-lia",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          }
        ],
        "sentences": [
          {
            "target": "bi — Abana babo.",
            "source": "Bad — Their children."
          },
          {
            "target": "Riroba rienu • Omuji uitu.",
            "source": "Your country • Our town."
          },
          {
            "target": "„ yake („ yāo).",
            "source": "His house (Thy house)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"bi\" in Kisii (Ekegusii) (Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966))?",
            "correctAnswer": "Bad",
            "options": [
              "Bad",
              "Their children",
              "Your country",
              "Our town"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kisii (Ekegusii) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "bi: Bad",
            "pairs": [
              {
                "left": "bi",
                "right": "Bad"
              },
              {
                "left": "Abana babo",
                "right": "Their children"
              },
              {
                "left": "Riroba rienu",
                "right": "Your country"
              },
              {
                "left": "Omuji uitu",
                "right": "Our town"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii (Ekegusii) term for \"His house\": ___",
            "correctAnswer": "„ yake",
            "options": [
              "„ yake",
              "„ yāo",
              "bi",
              "Abana babo"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          }
        ]
      },
      {
        "id": "kisii-open-dataset-10-2",
        "title": "Agriculture, Community & Everyday Life (Kisii (Ekegusii))",
        "icon": "Sparkles",
        "description": "Practice Kisii (Ekegusii) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Kisii (Ekegusii) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "Umute uyu",
            "source": "This tree",
            "pronunciation": "u-mu-te u-yu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "„ uuria",
            "source": "That man",
            "pronunciation": "uu-ria",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Omuntu ωyu",
            "source": "This man",
            "pronunciation": "o-munt-u oh-yu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "onsi (bonsi, etc.)",
            "source": "All",
            "pronunciation": "on-si",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Abω",
            "source": "They",
            "pronunciation": "a-boh",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Inyue",
            "source": "You",
            "pronunciation": "iny-ue",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Iewi",
            "source": "We",
            "pronunciation": "ie-wi",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Ωlia",
            "source": "He",
            "pronunciation": "oh-lia",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          }
        ],
        "sentences": [
          {
            "target": "Umute uyu — „ uuria.",
            "source": "This tree — That man."
          },
          {
            "target": "Omuntu ωyu • onsi (bonsi, etc.).",
            "source": "This man • All."
          },
          {
            "target": "Abω (Inyue).",
            "source": "They (You)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Umute uyu\" in Kisii (Ekegusii) (Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966))?",
            "correctAnswer": "This tree",
            "options": [
              "This tree",
              "That man",
              "This man",
              "All"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kisii (Ekegusii) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Umute uyu: This tree",
            "pairs": [
              {
                "left": "Umute uyu",
                "right": "This tree"
              },
              {
                "left": "„ uuria",
                "right": "That man"
              },
              {
                "left": "Omuntu ωyu",
                "right": "This man"
              },
              {
                "left": "onsi (bonsi, etc.)",
                "right": "All"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii (Ekegusii) term for \"They\": ___",
            "correctAnswer": "Abω",
            "options": [
              "Abω",
              "Inyue",
              "Umute uyu",
              "„ uuria"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          }
        ]
      }
    ]
  }
];
