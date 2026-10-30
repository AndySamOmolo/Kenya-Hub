// ============================================================
// Kisii (Ekegusii) Language Course Configuration & Units
// Based on Public Domain & Open-Web Linguistic Sources:
// 1. C. W. Hobley (1902) "Eastern Uganda: An Ethnological Survey" (Kossova / Kisii vocabulary & numerals)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" (Igizii) & (1919) "Comparative Study of the Bantu Languages" (#7 Ki-guzii)
// 3. Wikipedia Gusii_language
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const KISII_CONFIG: LanguageConfig = {
  "id": "kisii",
  "name": "Kisii",
  "nativeName": "Ekegusii",
  "family": "Bantu",
  "counties": [
    "Kisii",
    "Nyamira"
  ],
  "speakers": "2.7M",
  "speechLocale": "sw-KE",
  "description": "A Highland East Nyanza Bantu language (JE.42) spoken across Kisii and Nyamira counties in Western Kenya.",
  "color": "#D97706",
  "sources": [
    "hobley-eastern-uganda-1902",
    "johnston-uganda-protectorate-1902",
    "johnston-bantu-1919",
    "open-web-swadesh-comparative"
  ]
};

export const KISII_UNITS: CourseUnit[] = [
  {
    "id": "kisii-unit-1",
    "title": "Unit 1: Greetings, Noun Classes & Numbers 1–20",
    "description": "Master Ekegusii greetings, noun class pairs (omonto/abanto, egekombe/ebikombe, rigena/amagena), and counting from 1 to 20.",
    "icon": "Layers",
    "skills": [
      {
        "id": "kisii-greetings-nouns",
        "title": "Greetings, People & Homestead Nouns",
        "icon": "Users",
        "description": "Learn daily salutations and core noun classes in Ekegusii.",
        "tips": "Morning greeting in Ekegusii is 'Bwakire buya' ('It has dawned well'), and good night is 'Obotuko obuya'. Notice Class 1/2 'omonto → abanto' (person → people) and Class 9/10 'eng'ombe → chiombe' (cow → cows).",
        "words": [
          {
            "target": "Bwakire buya",
            "source": "Good morning",
            "pronunciation": "bwah-kee-reh boo-yah",
            "hint": "Morning salutation"
          },
          {
            "target": "Obotuko obuya",
            "source": "Good night",
            "pronunciation": "oh-boh-too-koh oh-boo-yah",
            "hint": "Night salutation"
          },
          {
            "target": "omonto (pl. abanto)",
            "source": "Person (pl. People)",
            "pronunciation": "oh-moh-ntoh / ah-bah-ntoh",
            "hint": "Class 1/2 noun (Hobley 1902 & Johnston 1919)"
          },
          {
            "target": "omosacha (pl. abasacha) / omokungu (pl. abakungu)",
            "source": "Man, husband / Woman, wife",
            "pronunciation": "oh-moh-sah-chah / oh-moh-koon-goo",
            "hint": "Hobley (1902) & Johnston (1919 #7)"
          },
          {
            "target": "omoiseke (pl. abaiseke) / omosia (pl. abasia)",
            "source": "Girl / Boy",
            "pronunciation": "oh-moh-ee-seh-keh / oh-moh-see-ah",
            "hint": "Class 1/2 nouns (Johnston 1919)"
          },
          {
            "target": "omogaka (pl. abagaka) / baba / tata",
            "source": "Elder / Mother / Father",
            "pronunciation": "oh-moh-gah-kah / bah-bah / tah-tah",
            "hint": "Kinship & elder nouns (Hobley 1902)"
          },
          {
            "target": "amache / amabere / omorero",
            "source": "Water / Milk / Fire",
            "pronunciation": "ah-mah-cheh / ah-mah-beh-reh / oh-moh-reh-roh",
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "target": "enyomba (pl. chinyomba) / inka",
            "source": "House (pl. Houses) / Homestead",
            "pronunciation": "eh-nyohm-bah / ee-nkah",
            "hint": "Class 9/10 e-/chi- (Johnston 1919)"
          },
          {
            "target": "rigena (pl. amagena) / omote (pl. emete)",
            "source": "Stone (pl. Stones) / Tree (pl. Trees)",
            "pronunciation": "ree-geh-nah / oh-moh-teh",
            "hint": "Class 5/6 ri-/ama- & Class 3/4 omo-/eme-"
          },
          {
            "target": "Engoro / Erioba",
            "source": "God / The Sun",
            "pronunciation": "ehn-goh-roh / eh-ree-oh-bah",
            "hint": "Hobley (1902) & Johnston (1919)"
          }
        ],
        "sentences": [
          {
            "target": "Bwakire buya, baba.",
            "source": "Good morning, mother."
          },
          {
            "target": "Obotuko obuya inka.",
            "source": "Good night at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Bwakire buya\" in Kisii?",
            "correctAnswer": "Good morning",
            "options": [
              "Good night",
              "Person (pl. People)",
              "Man, husband / Woman, wife",
              "Good morning"
            ],
            "hint": "Morning salutation"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Obotuko obuya\" in Kisii?",
            "correctAnswer": "Good night",
            "options": [
              "Person (pl. People)",
              "Man, husband / Woman, wife",
              "Good night",
              "Good morning"
            ],
            "hint": "Night salutation"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omonto (pl. abanto)\" in Kisii?",
            "correctAnswer": "Person (pl. People)",
            "options": [
              "Man, husband / Woman, wife",
              "Person (pl. People)",
              "Good morning",
              "Good night"
            ],
            "hint": "Class 1/2 noun (Hobley 1902 & Johnston 1919)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Person (pl. People)\" in Kisii?",
            "correctAnswer": "omonto (pl. abanto)",
            "options": [
              "omonto (pl. abanto)",
              "Bwakire buya",
              "Obotuko obuya",
              "omosacha (pl. abasacha) / omokungu (pl. abakungu)"
            ],
            "hint": "oh-moh-ntoh / ah-bah-ntoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Man, husband / Woman, wife\" in Kisii?",
            "correctAnswer": "omosacha (pl. abasacha) / omokungu (pl. abakungu)",
            "options": [
              "Bwakire buya",
              "Obotuko obuya",
              "omonto (pl. abanto)",
              "omosacha (pl. abasacha) / omokungu (pl. abakungu)"
            ],
            "hint": "oh-moh-sah-chah / oh-moh-koon-goo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "Bwakire buya: Good morning",
            "pairs": [
              {
                "left": "Bwakire buya",
                "right": "Good morning"
              },
              {
                "left": "Obotuko obuya",
                "right": "Good night"
              },
              {
                "left": "omonto (pl. abanto)",
                "right": "Person (pl. People)"
              },
              {
                "left": "omosacha (pl. abasacha) / omokungu (pl. abakungu)",
                "right": "Man, husband / Woman, wife"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Girl / Boy\": ___",
            "correctAnswer": "omoiseke (pl. abaiseke) / omosia (pl. abasia)",
            "options": [
              "Bwakire buya",
              "Obotuko obuya",
              "omonto (pl. abanto)",
              "omoiseke (pl. abaiseke) / omosia (pl. abasia)"
            ],
            "hint": "Class 1/2 nouns (Johnston 1919)"
          }
        ]
      },
      {
        "id": "kisii-numbers-verbs",
        "title": "Numbers 1–20 & Everyday Actions",
        "icon": "Hash",
        "description": "Count from eyemo (1) to emerongo ebere (20) and use core Ekegusii verbs.",
        "tips": "Numbers 6–8 build on 'isano' (5): isano nemo (6), isano na ibere (7), isano na isato (8), while 9 is 'kianda' and 10 is 'ikomi' (Hobley 1902, p. 69 & Johnston 1919, p. 59).",
        "words": [
          {
            "target": "eyemo",
            "source": "One (1)",
            "pronunciation": "eh-yeh-moh",
            "hint": "Cardinal 1 (Hobley 1902 & Johnston 1919)"
          },
          {
            "target": "ibere",
            "source": "Two (2)",
            "pronunciation": "ee-beh-reh",
            "hint": "Cardinal 2"
          },
          {
            "target": "isato",
            "source": "Three (3)",
            "pronunciation": "ee-sah-toh",
            "hint": "Cardinal 3"
          },
          {
            "target": "inye",
            "source": "Four (4)",
            "pronunciation": "ee-nyeh",
            "hint": "Cardinal 4"
          },
          {
            "target": "isano",
            "source": "Five (5)",
            "pronunciation": "ee-sah-noh",
            "hint": "Cardinal 5"
          },
          {
            "target": "isano nemo",
            "source": "Six (6, lit. 5+1)",
            "pronunciation": "ee-sah-noh neh-moh",
            "hint": "Cardinal 6"
          },
          {
            "target": "isano na ibere / isano na isato",
            "source": "Seven (7, lit. 5+2) / Eight (8, lit. 5+3)",
            "pronunciation": "ee-sah-noh nah ee-beh-reh",
            "hint": "Cardinals 7 & 8"
          },
          {
            "target": "kianda / ikomi",
            "source": "Nine (9) / Ten (10)",
            "pronunciation": "kee-ah-ndah / ee-koh-mee",
            "hint": "Cardinals 9 & 10"
          },
          {
            "target": "emerongo ebere / rigana",
            "source": "Twenty (20) / One hundred (100)",
            "pronunciation": "eh-meh-roh-ngoh eh-beh-reh / ree-gah-nah",
            "hint": "Cardinals 20 & 100 (Johnston 1919)"
          },
          {
            "target": "okomanya / okorora / okoria / okonywa",
            "source": "To know / To see / To eat / To drink",
            "pronunciation": "oh-koh-mah-nyah / oh-koh-roh-rah",
            "hint": "Core verbs (Hobley 1902 & Johnston 1919)"
          }
        ],
        "sentences": [
          {
            "target": "Ikomi na ibere",
            "source": "Twelve (ten and two)"
          },
          {
            "target": "Chiombe isano na ibere",
            "source": "Seven cows"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"eyemo\" in Kisii?",
            "correctAnswer": "One (1)",
            "options": [
              "Two (2)",
              "Three (3)",
              "Four (4)",
              "One (1)"
            ],
            "hint": "Cardinal 1 (Hobley 1902 & Johnston 1919)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ibere\" in Kisii?",
            "correctAnswer": "Two (2)",
            "options": [
              "Three (3)",
              "Four (4)",
              "Two (2)",
              "One (1)"
            ],
            "hint": "Cardinal 2"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"isato\" in Kisii?",
            "correctAnswer": "Three (3)",
            "options": [
              "Four (4)",
              "Three (3)",
              "One (1)",
              "Two (2)"
            ],
            "hint": "Cardinal 3"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three (3)\" in Kisii?",
            "correctAnswer": "isato",
            "options": [
              "isato",
              "eyemo",
              "ibere",
              "inye"
            ],
            "hint": "ee-sah-toh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four (4)\" in Kisii?",
            "correctAnswer": "inye",
            "options": [
              "eyemo",
              "ibere",
              "isato",
              "inye"
            ],
            "hint": "ee-nyeh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "eyemo: One (1)",
            "pairs": [
              {
                "left": "eyemo",
                "right": "One (1)"
              },
              {
                "left": "ibere",
                "right": "Two (2)"
              },
              {
                "left": "isato",
                "right": "Three (3)"
              },
              {
                "left": "inye",
                "right": "Four (4)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Five (5)\": ___",
            "correctAnswer": "isano",
            "options": [
              "eyemo",
              "ibere",
              "isato",
              "isano"
            ],
            "hint": "Cardinal 5"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-2",
    "title": "Unit 2: Dahl’s Law, Agriculture, Craftsmanship & Oral Wisdom",
    "description": "Master Ekegusii Dahl’s Law voicing (oko-/ogo-, eke-/ege-), highland crops, tools, and traditional Risaga community values.",
    "icon": "Award",
    "skills": [
      {
        "id": "kisii-agriculture-culture",
        "title": "Highland Crops, Tools, Pronouns & Risaga Solidarity",
        "icon": "Mountain",
        "description": "Learn Ekegusii vocabulary from Hobley (1902 Kossova) and Johnston (1919 #7 Ki-guzii).",
        "tips": "In Ekegusii, Dahl's Law voices k to g before a voiceless consonant in the next syllable: oko-manya (to know) vs. ogo-kama (to milk), eke-moni (cat) vs. ege-kombe (cup).",
        "culturalNote": "In Gusii highland tradition, 'risaga' is cooperative neighbourhood labour where homesteads unite to cultivate finger-millet (obori), thatch houses (chinyomba), and harvest crops.",
        "words": [
          {
            "target": "inche, aye, ere, intwe, inywe, barabwo",
            "source": "I, you (sg.), s/he, we, you (pl.), they",
            "pronunciation": "een-cheh, ah-yeh, eh-reh, een-tweh",
            "hint": "Johnston (1919, p. 58 #7 Ki-guzii) pronouns"
          },
          {
            "target": "obori / amaemba / erabuoni",
            "source": "Finger-millet (wimbi) / Sorghum / Sweet potato",
            "pronunciation": "oh-boh-ree / ah-mah-ehm-bah",
            "hint": "Hobley (1902, pp. 89–91) highland staples"
          },
          {
            "target": "obokima / obouki",
            "source": "Millet ugali / Honey",
            "pronunciation": "oh-boh-kee-mah / oh-boh-oo-kee",
            "hint": "Hobley (1902, pp. 89–91)"
          },
          {
            "target": "ritimo (pl. amatimo) / enguba",
            "source": "Spear (pl. Spears) / Shield",
            "pronunciation": "ree-tee-moh / ehn-goo-bah",
            "hint": "Hobley (1902, pp. 89–91) & Johnston (1919 #7)"
          },
          {
            "target": "obota / omogwe / orobanga",
            "source": "Bow / Arrow / Sword-knife (panga)",
            "pronunciation": "oh-boh-tah / oh-moh-gweh / oh-roh-bahn-gah",
            "hint": "Hobley (1902, pp. 89–91)"
          },
          {
            "target": "risaga / egesarate",
            "source": "Cooperative community work-party / Cattle boma",
            "pronunciation": "ree-sah-gah / eh-geh-sah-rah-teh",
            "hint": "Traditional Gusii institutions"
          },
          {
            "target": "rogoro / maate",
            "source": "Upperside (Northern standard dialect) / Lowerside (South-western dialect)",
            "pronunciation": "roh-goh-roh / mah-teh",
            "hint": "Two main Ekegusii dialect zones"
          },
          {
            "target": "gokama (-kama) / okoruga (-ruga)",
            "source": "To milk (Dahl’s Law ogo-) / To cook (oko-)",
            "pronunciation": "goh-kah-mah / oh-koh-roo-gah",
            "hint": "Dahl’s Law voicing before voiceless k"
          },
          {
            "target": "Amaboko abere nigo agokora egesieri",
            "source": "Two hands together build the doorway (Proverb)",
            "pronunciation": "ah-mah-boh-koh ah-beh-reh",
            "hint": "Unity and cooperation"
          }
        ],
        "sentences": [
          {
            "target": "Amaboko abere nigo agokora egesieri.",
            "source": "Two hands together build the doorway."
          },
          {
            "target": "Omwana omonyakige ogokina na abagaka.",
            "source": "A respectful child sits with elders."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"inche, aye, ere, intwe, inywe, barabwo\" in Kisii?",
            "correctAnswer": "I, you (sg.), s/he, we, you (pl.), they",
            "options": [
              "Finger-millet (wimbi) / Sorghum / Sweet potato",
              "Millet ugali / Honey",
              "Spear (pl. Spears) / Shield",
              "I, you (sg.), s/he, we, you (pl.), they"
            ],
            "hint": "Johnston (1919, p. 58 #7 Ki-guzii) pronouns"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"obori / amaemba / erabuoni\" in Kisii?",
            "correctAnswer": "Finger-millet (wimbi) / Sorghum / Sweet potato",
            "options": [
              "Millet ugali / Honey",
              "Spear (pl. Spears) / Shield",
              "Finger-millet (wimbi) / Sorghum / Sweet potato",
              "I, you (sg.), s/he, we, you (pl.), they"
            ],
            "hint": "Hobley (1902, pp. 89–91) highland staples"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"obokima / obouki\" in Kisii?",
            "correctAnswer": "Millet ugali / Honey",
            "options": [
              "Spear (pl. Spears) / Shield",
              "Millet ugali / Honey",
              "I, you (sg.), s/he, we, you (pl.), they",
              "Finger-millet (wimbi) / Sorghum / Sweet potato"
            ],
            "hint": "Hobley (1902, pp. 89–91)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Millet ugali / Honey\" in Kisii?",
            "correctAnswer": "obokima / obouki",
            "options": [
              "obokima / obouki",
              "inche, aye, ere, intwe, inywe, barabwo",
              "obori / amaemba / erabuoni",
              "ritimo (pl. amatimo) / enguba"
            ],
            "hint": "oh-boh-kee-mah / oh-boh-oo-kee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Spear (pl. Spears) / Shield\" in Kisii?",
            "correctAnswer": "ritimo (pl. amatimo) / enguba",
            "options": [
              "inche, aye, ere, intwe, inywe, barabwo",
              "obori / amaemba / erabuoni",
              "obokima / obouki",
              "ritimo (pl. amatimo) / enguba"
            ],
            "hint": "ree-tee-moh / ehn-goo-bah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "inche, aye, ere, intwe, inywe, barabwo: I, you (sg.), s/he, we, you (pl.), they",
            "pairs": [
              {
                "left": "inche, aye, ere, intwe, inywe, barabwo",
                "right": "I, you (sg.), s/he, we, you (pl.), they"
              },
              {
                "left": "obori / amaemba / erabuoni",
                "right": "Finger-millet (wimbi) / Sorghum / Sweet potato"
              },
              {
                "left": "obokima / obouki",
                "right": "Millet ugali / Honey"
              },
              {
                "left": "ritimo (pl. amatimo) / enguba",
                "right": "Spear (pl. Spears) / Shield"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Bow / Arrow / Sword-knife (panga)\": ___",
            "correctAnswer": "obota / omogwe / orobanga",
            "options": [
              "inche, aye, ere, intwe, inywe, barabwo",
              "obori / amaemba / erabuoni",
              "obokima / obouki",
              "obota / omogwe / orobanga"
            ],
            "hint": "Hobley (1902, pp. 89–91)"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-3",
    "title": "Unit 3: Family, Kinship, Clans & Social Organization (C. W. Hobley 1902 Kossova Vocabulary & Sir Harry Johnston )",
    "description": "Master family, kinship, clans & social organization in Kisii (Ekegusii) built directly from C.",
    "icon": "Users",
    "skills": [
      {
        "id": "kisii-family-kinship-kinship-elders-3",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
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
            "target": "ase enka yaito nigo bore omokungu (pl. abakungu) na omosacha (pl. abasacha).",
            "source": "At our home there is Woman and Man."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omosani (pl. abasani)\" in Kisii?",
            "correctAnswer": "Friend",
            "options": [
              "Child",
              "Woman",
              "Man",
              "Friend"
            ],
            "hint": "Ekegusii Class 1/2 friendship noun"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omwana (pl. abana)\" in Kisii?",
            "correctAnswer": "Child",
            "options": [
              "Woman",
              "Man",
              "Child",
              "Friend"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omokungu (pl. abakungu)\" in Kisii?",
            "correctAnswer": "Woman",
            "options": [
              "Man",
              "Woman",
              "Friend",
              "Child"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Woman\" in Kisii?",
            "correctAnswer": "omokungu (pl. abakungu)",
            "options": [
              "omokungu (pl. abakungu)",
              "omosani (pl. abasani)",
              "omwana (pl. abana)",
              "omosacha (pl. abasacha)"
            ],
            "hint": "oh-moh-koon-goo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Man\" in Kisii?",
            "correctAnswer": "omosacha (pl. abasacha)",
            "options": [
              "omosani (pl. abasani)",
              "omwana (pl. abana)",
              "omokungu (pl. abakungu)",
              "omosacha (pl. abasacha)"
            ],
            "hint": "oh-moh-sah-chah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "omosani (pl. abasani): Friend",
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
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Father\": ___",
            "correctAnswer": "tata (iso = your father, ise = his father)",
            "options": [
              "omosani (pl. abasani)",
              "omwana (pl. abana)",
              "omokungu (pl. abakungu)",
              "tata (iso = your father, ise = his father)"
            ],
            "hint": "Hobley 1902 p. 63 & Johnston 1919 #7"
          }
        ]
      },
      {
        "id": "kisii-family-kinship-clans-community-3",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
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
            "target": "N-dugi-ani. Omw-ana ow-etu / Ωm-ura om-intu. Ωmo-mura om-intu",
            "source": "Brother",
            "pronunciation": "n-dugi-ani. omw-ana ow-etu / om-ura om-intu. omo-mura om-intu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Nya-rukha. Omw-iseke. Ωmo-subati. Ωmu-gogo / Ωmo-subati; ava-",
            "source": "Sister",
            "pronunciation": "nya-rukha. omw-iseke. omo-subati. omu-gogo / omo-subati; ava-",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Omw-ana. Iomo-isia / Omw-ana. Ωmo-risia",
            "source": "Son, boy",
            "pronunciation": "omw-ana. iomo-isia / omw-ana. omo-risia",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Ωmo-ke. Ωmu-kunggu. Ωmu-ka / Ωmo-kare",
            "source": "Wife",
            "pronunciation": "omo-ke. omu-kunggu. omu-ka / omo-kare",
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
            "target": "ase enka yaito nigo bore omosubati na omorwani.",
            "source": "At our home there is Lady / married woman and Fighter / warrior."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omoiseke (pl. abaiseke)\" in Kisii?",
            "correctAnswer": "Girl (Class 9/2)",
            "options": [
              "Grandfather",
              "Lady / married woman",
              "Fighter / warrior",
              "Girl (Class 9/2)"
            ],
            "hint": "Wikipedia Gusii language — Noun classes"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sokoro\" in Kisii?",
            "correctAnswer": "Grandfather",
            "options": [
              "Lady / married woman",
              "Fighter / warrior",
              "Grandfather",
              "Girl (Class 9/2)"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omosubati\" in Kisii?",
            "correctAnswer": "Lady / married woman",
            "options": [
              "Fighter / warrior",
              "Lady / married woman",
              "Girl (Class 9/2)",
              "Grandfather"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lady / married woman\" in Kisii?",
            "correctAnswer": "omosubati",
            "options": [
              "omosubati",
              "omoiseke (pl. abaiseke)",
              "sokoro",
              "omorwani"
            ],
            "hint": "omosubati"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fighter / warrior\" in Kisii?",
            "correctAnswer": "omorwani",
            "options": [
              "omoiseke (pl. abaiseke)",
              "sokoro",
              "omosubati",
              "omorwani"
            ],
            "hint": "omorwani"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "omoiseke (pl. abaiseke): Girl (Class 9/2)",
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
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Brother\": ___",
            "correctAnswer": "N-dugi-ani. Omw-ana ow-etu / Ωm-ura om-intu. Ωmo-mura om-intu",
            "options": [
              "omoiseke (pl. abaiseke)",
              "sokoro",
              "omosubati",
              "N-dugi-ani. Omw-ana ow-etu / Ωm-ura om-intu. Ωmo-mura om-intu"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-4",
    "title": "Unit 4: Numbers, Counting, Currency & Measures (C. W. Hobley 1902 Kossova Vocabulary & Sir Harry Johnston )",
    "description": "Master numbers, counting, currency & measures in Kisii (Ekegusii) built directly from C.",
    "icon": "Scale",
    "skills": [
      {
        "id": "kisii-numbers-measures-cardinals-ordinals-4",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
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
            "target": "ase enka yaito nigo bore kianda na ikomi.",
            "source": "At our home there is Nine (9) and Ten (10)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"isano na ibere\" in Kisii?",
            "correctAnswer": "Seven (7, lit. 5+2)",
            "options": [
              "Eight (8, lit. 5+3)",
              "Nine (9)",
              "Ten (10)",
              "Seven (7, lit. 5+2)"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"isano na isato\" in Kisii?",
            "correctAnswer": "Eight (8, lit. 5+3)",
            "options": [
              "Nine (9)",
              "Ten (10)",
              "Eight (8, lit. 5+3)",
              "Seven (7, lit. 5+2)"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kianda\" in Kisii?",
            "correctAnswer": "Nine (9)",
            "options": [
              "Ten (10)",
              "Nine (9)",
              "Seven (7, lit. 5+2)",
              "Eight (8, lit. 5+3)"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nine (9)\" in Kisii?",
            "correctAnswer": "kianda",
            "options": [
              "kianda",
              "isano na ibere",
              "isano na isato",
              "ikomi"
            ],
            "hint": "kianda"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ten (10)\" in Kisii?",
            "correctAnswer": "ikomi",
            "options": [
              "isano na ibere",
              "isano na isato",
              "kianda",
              "ikomi"
            ],
            "hint": "ikomi"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "isano na ibere: Seven (7, lit. 5+2)",
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
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Eleven (11)\": ___",
            "correctAnswer": "ikomi nemo",
            "options": [
              "isano na ibere",
              "isano na isato",
              "kianda",
              "ikomi nemo"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          }
        ]
      },
      {
        "id": "kisii-numbers-measures-trade-measures-4",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
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
            "target": "-mu, -mo / -mo, -mwe",
            "source": "One",
            "pronunciation": "-mu, -mo / -mo, -mwe",
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
            "target": "ase enka yaito nigo bore ikomi na kianda na emerongo ebere.",
            "source": "At our home there is Nineteen (19) and Twenty (20)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikomi na isano na ibere\" in Kisii?",
            "correctAnswer": "Seventeen (17)",
            "options": [
              "Eighteen (18)",
              "Nineteen (19)",
              "Twenty (20)",
              "Seventeen (17)"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikomi na isano na isato\" in Kisii?",
            "correctAnswer": "Eighteen (18)",
            "options": [
              "Nineteen (19)",
              "Twenty (20)",
              "Eighteen (18)",
              "Seventeen (17)"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikomi na kianda\" in Kisii?",
            "correctAnswer": "Nineteen (19)",
            "options": [
              "Twenty (20)",
              "Nineteen (19)",
              "Seventeen (17)",
              "Eighteen (18)"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nineteen (19)\" in Kisii?",
            "correctAnswer": "ikomi na kianda",
            "options": [
              "ikomi na kianda",
              "ikomi na isano na ibere",
              "ikomi na isano na isato",
              "emerongo ebere"
            ],
            "hint": "ikomi na kianda"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Twenty (20)\" in Kisii?",
            "correctAnswer": "emerongo ebere",
            "options": [
              "ikomi na isano na ibere",
              "ikomi na isano na isato",
              "ikomi na kianda",
              "emerongo ebere"
            ],
            "hint": "emerongo ebere"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "ikomi na isano na ibere: Seventeen (17)",
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
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Second (time unit)\": ___",
            "correctAnswer": "Esekendi",
            "options": [
              "ikomi na isano na ibere",
              "ikomi na isano na isato",
              "ikomi na kianda",
              "Esekendi"
            ],
            "hint": "Ekegusii — GitHub unicode-org/cldr (guz.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-5",
    "title": "Unit 5: Food, Cuisine, Crops & Livestock Husbandry (C. W. Hobley 1902 Kossova Vocabulary & Sir Harry Johnston )",
    "description": "Master food, cuisine, crops & livestock husbandry in Kisii (Ekegusii) built directly from C.",
    "icon": "Tractor",
    "skills": [
      {
        "id": "kisii-food-agriculture-staple-foods-cookery-5",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
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
            "target": "Ri-gomia; ama-. Eri-toki; ama- / Eri-toke; ama-",
            "source": "Banana",
            "pronunciation": "ri-gomia; ama-. eri-toki; ama- / eri-toke; ama-",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          }
        ],
        "sentences": [
          {
            "target": "ase enka yaito nigo bore endagera (obokima = ugali) na egekombe (pl. ebikombe).",
            "source": "At our home there is Food and Cup (Class 7/8: ege-/ebi-)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"obouki\" in Kisii?",
            "correctAnswer": "Honey",
            "options": [
              "Meat",
              "Food",
              "Cup (Class 7/8: ege-/ebi-)",
              "Honey"
            ],
            "hint": "Hobley 1902 p. 64 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"enyama\" in Kisii?",
            "correctAnswer": "Meat",
            "options": [
              "Food",
              "Cup (Class 7/8: ege-/ebi-)",
              "Meat",
              "Honey"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"endagera (obokima = ugali)\" in Kisii?",
            "correctAnswer": "Food",
            "options": [
              "Cup (Class 7/8: ege-/ebi-)",
              "Food",
              "Honey",
              "Meat"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Food\" in Kisii?",
            "correctAnswer": "endagera (obokima = ugali)",
            "options": [
              "endagera (obokima = ugali)",
              "obouki",
              "enyama",
              "egekombe (pl. ebikombe)"
            ],
            "hint": "ehn-dah-geh-rah / oh-boh-kee-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cup (Class 7/8: ege-/ebi-)\" in Kisii?",
            "correctAnswer": "egekombe (pl. ebikombe)",
            "options": [
              "obouki",
              "enyama",
              "endagera (obokima = ugali)",
              "egekombe (pl. ebikombe)"
            ],
            "hint": "egekombe (pl. ebikombe)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "obouki: Honey",
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
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Fruit (Class 5/6: ri-/ama-)\": ___",
            "correctAnswer": "ritunda (pl. amatunda)",
            "options": [
              "obouki",
              "enyama",
              "endagera (obokima = ugali)",
              "ritunda (pl. amatunda)"
            ],
            "hint": "Wikipedia Gusii language — Noun classes"
          }
        ]
      },
      {
        "id": "kisii-food-agriculture-crops-livestock-5",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
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
            "target": "E-bando; ci-. Erinya-modoma / Ama-dumo. Eri-tumwa",
            "source": "Maize",
            "pronunciation": "e-bando; ci-. erinya-modoma / ama-dumo. eri-tumwa",
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
            "target": "ase enka yaito nigo bore E-bando; ci-. Erinya-modoma / Ama-dumo. Eri-tumwa na Ama-vere.",
            "source": "At our home there is Maize and Milk."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ege-tinia. Ama-guta / Ege-tinia; evi-\" in Kisii?",
            "correctAnswer": "Fat, oil",
            "options": [
              "Hunger",
              "Maize",
              "Milk",
              "Fat, oil"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"In-jala, en-jara / En-cara\" in Kisii?",
            "correctAnswer": "Hunger",
            "options": [
              "Maize",
              "Milk",
              "Hunger",
              "Fat, oil"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"E-bando; ci-. Erinya-modoma / Ama-dumo. Eri-tumwa\" in Kisii?",
            "correctAnswer": "Maize",
            "options": [
              "Milk",
              "Maize",
              "Fat, oil",
              "Hunger"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Maize\" in Kisii?",
            "correctAnswer": "E-bando; ci-. Erinya-modoma / Ama-dumo. Eri-tumwa",
            "options": [
              "E-bando; ci-. Erinya-modoma / Ama-dumo. Eri-tumwa",
              "Ege-tinia. Ama-guta / Ege-tinia; evi-",
              "In-jala, en-jara / En-cara",
              "Ama-vere"
            ],
            "hint": "e-bando; ci-. erinya-modoma / ama-dumo. eri-tumwa"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Milk\" in Kisii?",
            "correctAnswer": "Ama-vere",
            "options": [
              "Ege-tinia. Ama-guta / Ege-tinia; evi-",
              "In-jala, en-jara / En-cara",
              "E-bando; ci-. Erinya-modoma / Ama-dumo. Eri-tumwa",
              "Ama-vere"
            ],
            "hint": "ama-vere"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "Ege-tinia. Ama-guta / Ege-tinia; evi-: Fat, oil",
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
                "left": "E-bando; ci-. Erinya-modoma / Ama-dumo. Eri-tumwa",
                "right": "Maize"
              },
              {
                "left": "Ama-vere",
                "right": "Milk"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Palm wine, beer\": ___",
            "correctAnswer": "Ama-rwa",
            "options": [
              "Ege-tinia. Ama-guta / Ege-tinia; evi-",
              "In-jala, en-jara / En-cara",
              "E-bando; ci-. Erinya-modoma / Ama-dumo. Eri-tumwa",
              "Ama-rwa"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-6",
    "title": "Unit 6: Nature, Landscape, Flora & East African Wildlife (C. W. Hobley 1902 Kossova Vocabulary & Sir Harry Johnston )",
    "description": "Master nature, landscape, flora & east african wildlife in Kisii (Ekegusii) built directly from C.",
    "icon": "PawPrint",
    "skills": [
      {
        "id": "kisii-nature-wildlife-land-sky-water-6",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
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
            "target": "ase enka yaito nigo bore omote (pl. emete) na embura.",
            "source": "At our home there is Tree and Rain."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"rituko (pl. amatuko) / omobaso\" in Kisii?",
            "correctAnswer": "Day",
            "options": [
              "Night",
              "Tree",
              "Rain",
              "Day"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"obotuko\" in Kisii?",
            "correctAnswer": "Night",
            "options": [
              "Tree",
              "Rain",
              "Night",
              "Day"
            ],
            "hint": "Hobley 1902 p. 65 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omote (pl. emete)\" in Kisii?",
            "correctAnswer": "Tree",
            "options": [
              "Rain",
              "Tree",
              "Day",
              "Night"
            ],
            "hint": "Hobley 1902 p. 67 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tree\" in Kisii?",
            "correctAnswer": "omote (pl. emete)",
            "options": [
              "omote (pl. emete)",
              "rituko (pl. amatuko) / omobaso",
              "obotuko",
              "embura"
            ],
            "hint": "oh-moh-teh / eh-meh-teh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Rain\" in Kisii?",
            "correctAnswer": "embura",
            "options": [
              "rituko (pl. amatuko) / omobaso",
              "obotuko",
              "omote (pl. emete)",
              "embura"
            ],
            "hint": "ehm-boo-rah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "rituko (pl. amatuko) / omobaso: Day",
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
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Fire\": ___",
            "correctAnswer": "omorero",
            "options": [
              "rituko (pl. amatuko) / omobaso",
              "obotuko",
              "omote (pl. emete)",
              "omorero"
            ],
            "hint": "Hobley 1902 p. 63 & Johnston 1919 #7"
          }
        ]
      },
      {
        "id": "kisii-nature-wildlife-wildlife-flora-6",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
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
            "target": "ase enka yaito nigo bore rogoro na maate.",
            "source": "At our home there is Upperside / hillside (standard dialect region) and Lowerside (southwestern dialect region)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ense\" in Kisii?",
            "correctAnswer": "Earth / world",
            "options": [
              "Sun / daytime",
              "Upperside / hillside (standard dialect region)",
              "Lowerside (southwestern dialect region)",
              "Earth / world"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"risase / omobaso\" in Kisii?",
            "correctAnswer": "Sun / daytime",
            "options": [
              "Upperside / hillside (standard dialect region)",
              "Lowerside (southwestern dialect region)",
              "Sun / daytime",
              "Earth / world"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"rogoro\" in Kisii?",
            "correctAnswer": "Upperside / hillside (standard dialect region)",
            "options": [
              "Lowerside (southwestern dialect region)",
              "Upperside / hillside (standard dialect region)",
              "Earth / world",
              "Sun / daytime"
            ],
            "hint": "Wikipedia Gusii language — Dialects & Sample phrases"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Upperside / hillside (standard dialect region)\" in Kisii?",
            "correctAnswer": "rogoro",
            "options": [
              "rogoro",
              "ense",
              "risase / omobaso",
              "maate"
            ],
            "hint": "rogoro"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lowerside (southwestern dialect region)\" in Kisii?",
            "correctAnswer": "maate",
            "options": [
              "ense",
              "risase / omobaso",
              "rogoro",
              "maate"
            ],
            "hint": "maate"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "ense: Earth / world",
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
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Lake / sea\": ___",
            "correctAnswer": "enyancha",
            "options": [
              "ense",
              "risase / omobaso",
              "rogoro",
              "enyancha"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-7",
    "title": "Unit 7: The Human Body, Health, Medicine & Safety (C. W. Hobley 1902 Kossova Vocabulary & Sir Harry Johnston )",
    "description": "Master the human body, health, medicine & safety in Kisii (Ekegusii) built directly from C.",
    "icon": "User",
    "skills": [
      {
        "id": "kisii-body-health-anatomy-senses-7",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
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
            "target": "Ωmo-kono; ama- / Ωko-boko",
            "source": "Arm",
            "pronunciation": "omo-kono; ama- / oko-boko",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Ωmo-gonggo",
            "source": "Back",
            "pronunciation": "omo-gonggo",
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
            "target": "ase enka yaito nigo bore riiso (pl. amaiso) na omotwe (pl. emetwe).",
            "source": "At our home there is Eye and Head (Class 3/4: omo-/eme-)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okogoro (pl. amagoro)\" in Kisii?",
            "correctAnswer": "Foot",
            "options": [
              "Hand",
              "Eye",
              "Head (Class 3/4: omo-/eme-)",
              "Foot"
            ],
            "hint": "Hobley 1902 p. 64 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okoboko (pl. amaboko)\" in Kisii?",
            "correctAnswer": "Hand",
            "options": [
              "Eye",
              "Head (Class 3/4: omo-/eme-)",
              "Hand",
              "Foot"
            ],
            "hint": "Hobley 1902 p. 64 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"riiso (pl. amaiso)\" in Kisii?",
            "correctAnswer": "Eye",
            "options": [
              "Head (Class 3/4: omo-/eme-)",
              "Eye",
              "Foot",
              "Hand"
            ],
            "hint": "Hobley 1902 p. 63 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eye\" in Kisii?",
            "correctAnswer": "riiso (pl. amaiso)",
            "options": [
              "riiso (pl. amaiso)",
              "okogoro (pl. amagoro)",
              "okoboko (pl. amaboko)",
              "omotwe (pl. emetwe)"
            ],
            "hint": "ree-soh / ah-mah-ee-soh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Head (Class 3/4: omo-/eme-)\" in Kisii?",
            "correctAnswer": "omotwe (pl. emetwe)",
            "options": [
              "okogoro (pl. amagoro)",
              "okoboko (pl. amaboko)",
              "riiso (pl. amaiso)",
              "omotwe (pl. emetwe)"
            ],
            "hint": "omotwe (pl. emetwe)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "okogoro (pl. amagoro): Foot",
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
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Ear\": ___",
            "correctAnswer": "ogoto",
            "options": [
              "okogoro (pl. amagoro)",
              "okoboko (pl. amaboko)",
              "riiso (pl. amaiso)",
              "ogoto"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          }
        ]
      },
      {
        "id": "kisii-body-health-healing-safety-7",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kisii (Ekegusii) (Ekegusii) in C. W. Hobley (1902 Kossova Vocabulary) & Sir Harry Johnston (1902 Igizii & 1919 Sub-group A6 Ki-Guzii / Ki-Koria) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kisii, Nyamira.",
        "words": [
          {
            "target": "Amany-ingga or Amainy-ingga / Ama-sere. Amainy-ingga",
            "source": "Blood",
            "pronunciation": "amany-ingga or amainy-ingga / ama-sere. amainy-ingga",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Eki-kuba; evi- / Ege-kuba; eve-. Eng-kuba; cing-",
            "source": "Breast (man's)",
            "pronunciation": "eki-kuba; evi- / ege-kuba; eve-. eng-kuba; cing-",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Li-bere / Ωlu-bere; cim-",
            "source": "Breast (woman's)",
            "pronunciation": "li-bere / olu-bere; cim- ...",
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
            "target": "Ωmu-twe; emi- / Ωmo-tui, Ωmo-tu",
            "source": "Head",
            "pronunciation": "omu-twe; emi- / omo-tui, omo-tu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "En-teme. Eng-koro / Eng-koro",
            "source": "Heart",
            "pronunciation": "en-teme. eng-koro / eng-koro",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "target": "Ye-tinggiro. Iki-talenggi / Ege-tinggiro. Eke-suguro",
            "source": "Heel",
            "pronunciation": "ye-tinggiro. iki-talenggi / ege-tinggiro. eke-suguro",
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
            "target": "ase enka yaito nigo bore Li-bere / Ωlu-bere; cim- na Eki-ara; evi- or ebi- / Eki-ara; evi-. Ek-era; evi-ara.",
            "source": "At our home there is Breast (woman's) and Finger."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Amany-ingga or Amainy-ingga / Ama-sere. Amainy-ingga\" in Kisii?",
            "correctAnswer": "Blood",
            "options": [
              "Breast (man's)",
              "Breast (woman's)",
              "Finger",
              "Blood"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Eki-kuba; evi- / Ege-kuba; eve-. Eng-kuba; cing-\" in Kisii?",
            "correctAnswer": "Breast (man's)",
            "options": [
              "Breast (woman's)",
              "Finger",
              "Breast (man's)",
              "Blood"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Li-bere / Ωlu-bere; cim-\" in Kisii?",
            "correctAnswer": "Breast (woman's)",
            "options": [
              "Finger",
              "Breast (woman's)",
              "Blood",
              "Breast (man's)"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Breast (woman's)\" in Kisii?",
            "correctAnswer": "Li-bere / Ωlu-bere; cim-",
            "options": [
              "Li-bere / Ωlu-bere; cim-",
              "Amany-ingga or Amainy-ingga / Ama-sere. Amainy-ingga",
              "Eki-kuba; evi- / Ege-kuba; eve-. Eng-kuba; cing-",
              "Eki-ara; evi- or ebi- / Eki-ara; evi-. Ek-era; evi-ara"
            ],
            "hint": "li-bere / olu-bere; cim- ..."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Finger\" in Kisii?",
            "correctAnswer": "Eki-ara; evi- or ebi- / Eki-ara; evi-. Ek-era; evi-ara",
            "options": [
              "Amany-ingga or Amainy-ingga / Ama-sere. Amainy-ingga",
              "Eki-kuba; evi- / Ege-kuba; eve-. Eng-kuba; cing-",
              "Li-bere / Ωlu-bere; cim-",
              "Eki-ara; evi- or ebi- / Eki-ara; evi-. Ek-era; evi-ara"
            ],
            "hint": "eki-ara; evi- or ebi- / eki-ara; evi-. ek-era; evi-ara"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "Amany-ingga or Amainy-ingga / Ama-sere. Amainy-ingga: Blood",
            "pairs": [
              {
                "left": "Amany-ingga or Amainy-ingga / Ama-sere. Amainy-ingga",
                "right": "Blood"
              },
              {
                "left": "Eki-kuba; evi- / Ege-kuba; eve-. Eng-kuba; cing-",
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
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Hair\": ___",
            "correctAnswer": "E-tukia; ci-",
            "options": [
              "Amany-ingga or Amainy-ingga / Ama-sere. Amainy-ingga",
              "Eki-kuba; evi- / Ege-kuba; eve-. Eng-kuba; cing-",
              "Li-bere / Ωlu-bere; cim-",
              "E-tukia; ci-"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-8",
    "title": "Unit 8: Core Verbs, Tenses, Negation & Verbal Extensions (C. W. Hobley 1902 Kossova Vocabulary & Sir Harry Johnston )",
    "description": "Master core verbs, tenses, negation & verbal extensions in Kisii (Ekegusii) built directly from C.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "kisii-verbs-grammar-action-verbs-8",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
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
            "target": "ase enka yaito nigo bore ogocha (inchwo! = come!) na okogenda (-genda).",
            "source": "At our home there is Come and Go."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ogokwana (-kwana) / okoboora\" in Kisii?",
            "correctAnswer": "Speak",
            "options": [
              "Sleep",
              "Come",
              "Go",
              "Speak"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okorara (-rara)\" in Kisii?",
            "correctAnswer": "Sleep",
            "options": [
              "Come",
              "Go",
              "Sleep",
              "Speak"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ogocha (inchwo! = come!)\" in Kisii?",
            "correctAnswer": "Come",
            "options": [
              "Go",
              "Come",
              "Speak",
              "Sleep"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Come\" in Kisii?",
            "correctAnswer": "ogocha (inchwo! = come!)",
            "options": [
              "ogocha (inchwo! = come!)",
              "ogokwana (-kwana) / okoboora",
              "okorara (-rara)",
              "okogenda (-genda)"
            ],
            "hint": "oh-goh-chah / een-chwoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Go\" in Kisii?",
            "correctAnswer": "okogenda (-genda)",
            "options": [
              "ogokwana (-kwana) / okoboora",
              "okorara (-rara)",
              "ogocha (inchwo! = come!)",
              "okogenda (-genda)"
            ],
            "hint": "oh-koh-gehn-dah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "ogokwana (-kwana) / okoboora: Speak",
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
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Drink\": ___",
            "correctAnswer": "okonywa (-nywa)",
            "options": [
              "ogokwana (-kwana) / okoboora",
              "okorara (-rara)",
              "ogocha (inchwo! = come!)",
              "okonywa (-nywa)"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          }
        ]
      },
      {
        "id": "kisii-verbs-grammar-verbal-derivatives-8",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
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
            "target": "ase enka yaito nigo bore korora (-rora) na -garagara.",
            "source": "At our home there is To see and To roll over."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"komenya (menya)\" in Kisii?",
            "correctAnswer": "To dwell / live",
            "options": [
              "To stand",
              "To see",
              "To roll over",
              "To dwell / live"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"gotenena (-tenena)\" in Kisii?",
            "correctAnswer": "To stand",
            "options": [
              "To see",
              "To roll over",
              "To stand",
              "To dwell / live"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"korora (-rora)\" in Kisii?",
            "correctAnswer": "To see",
            "options": [
              "To roll over",
              "To see",
              "To dwell / live",
              "To stand"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To see\" in Kisii?",
            "correctAnswer": "korora (-rora)",
            "options": [
              "korora (-rora)",
              "komenya (menya)",
              "gotenena (-tenena)",
              "-garagara"
            ],
            "hint": "korora (-rora)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To roll over\" in Kisii?",
            "correctAnswer": "-garagara",
            "options": [
              "komenya (menya)",
              "gotenena (-tenena)",
              "korora (-rora)",
              "-garagara"
            ],
            "hint": "-garagara"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "komenya (menya): To dwell / live",
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
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"To harvest / harvest season\": ___",
            "correctAnswer": "gesa (verb) / rigesa (noun)",
            "options": [
              "komenya (menya)",
              "gotenena (-tenena)",
              "korora (-rora)",
              "gesa (verb) / rigesa (noun)"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-9-public-domain-corpus",
    "title": "Unit 9: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Kisii (Ekegusii) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "skills": [
      {
        "id": "kisii-pd-corpus-9-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Kisii (Ekegusii) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Kisii (Ekegusii) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "Ngotenga",
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
            "target": "Ngoja",
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
            "target": "Inje ndu",
            "source": "I am"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ngotenga\" in Kisii?",
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
            "correctAnswer": "Ngotenga: I dance",
            "pairs": [
              {
                "left": "Ngotenga",
                "right": "I dance"
              },
              {
                "left": "Nangire",
                "right": "I come not"
              },
              {
                "left": "Ngoja",
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
              "Ngotenga",
              "Nangire"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          }
        ]
      },
      {
        "id": "kisii-pd-corpus-9-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
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
            "target": "Aīya, Aiga",
            "source": "Here"
          },
          {
            "target": "saja, -gore",
            "source": "Male"
          },
          {
            "target": "uya, -ya; Abantu baya = good men",
            "source": "Good"
          },
          {
            "target": "Enkari, -kari",
            "source": "Female"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Emuamu\" in Kisii?",
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
    "title": "Unit 10: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Kisii (Ekegusii) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "skills": [
      {
        "id": "kisii-open-dataset-10-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "TreePine",
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
            "target": "yake",
            "source": "His house",
            "pronunciation": "ya-ke",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "yāo",
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
            "target": "ulia",
            "source": "That tree",
            "pronunciation": "u-lia",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          }
        ],
        "sentences": [
          {
            "target": "Abana babo",
            "source": "Their children"
          },
          {
            "target": "Riroba rienu",
            "source": "Your country"
          },
          {
            "target": "Omuji uitu",
            "source": "Our town"
          },
          {
            "target": "Enyumba yane",
            "source": "My house"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"bi\" in Kisii?",
            "correctAnswer": "Bad",
            "options": [
              "Their children",
              "Your country",
              "Our town",
              "Bad"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Abana babo\" in Kisii?",
            "correctAnswer": "Their children",
            "options": [
              "Your country",
              "Our town",
              "Their children",
              "Bad"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Riroba rienu\" in Kisii?",
            "correctAnswer": "Your country",
            "options": [
              "Our town",
              "Your country",
              "Bad",
              "Their children"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Your country\" in Kisii?",
            "correctAnswer": "Riroba rienu",
            "options": [
              "Riroba rienu",
              "bi",
              "Abana babo",
              "Omuji uitu"
            ],
            "hint": "ri-ro-ba rie-nu"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Our town\" in Kisii?",
            "correctAnswer": "Omuji uitu",
            "options": [
              "bi",
              "Abana babo",
              "Riroba rienu",
              "Omuji uitu"
            ],
            "hint": "o-mu-ji ui-tu"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
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
            "prompt": "Complete the Kisii term for \"His house\": ___",
            "correctAnswer": "yake",
            "options": [
              "bi",
              "Abana babo",
              "Riroba rienu",
              "yake"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          }
        ]
      },
      {
        "id": "kisii-open-dataset-10-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "Leaf",
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
            "target": "uuria",
            "source": "That man",
            "pronunciation": "uu-ria",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Omuntu oyu",
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
            "target": "Abo",
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
            "target": "Umute uyu",
            "source": "This tree"
          },
          {
            "target": "Omuntu oyu",
            "source": "This man"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Umute uyu\" in Kisii?",
            "correctAnswer": "This tree",
            "options": [
              "That man",
              "This man",
              "All",
              "This tree"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"uuria\" in Kisii?",
            "correctAnswer": "That man",
            "options": [
              "This man",
              "All",
              "That man",
              "This tree"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Omuntu oyu\" in Kisii?",
            "correctAnswer": "This man",
            "options": [
              "All",
              "This man",
              "This tree",
              "That man"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"This man\" in Kisii?",
            "correctAnswer": "Omuntu oyu",
            "options": [
              "Omuntu oyu",
              "Umute uyu",
              "uuria",
              "onsi (bonsi, etc.)"
            ],
            "hint": "o-munt-u oh-yu"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"All\" in Kisii?",
            "correctAnswer": "onsi (bonsi, etc.)",
            "options": [
              "Umute uyu",
              "uuria",
              "Omuntu oyu",
              "onsi (bonsi, etc.)"
            ],
            "hint": "on-si"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "Umute uyu: This tree",
            "pairs": [
              {
                "left": "Umute uyu",
                "right": "This tree"
              },
              {
                "left": "uuria",
                "right": "That man"
              },
              {
                "left": "Omuntu oyu",
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
            "prompt": "Complete the Kisii term for \"They\": ___",
            "correctAnswer": "Abo",
            "options": [
              "Umute uyu",
              "uuria",
              "Omuntu oyu",
              "Abo"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          }
        ]
      }
    ]
  }
];
