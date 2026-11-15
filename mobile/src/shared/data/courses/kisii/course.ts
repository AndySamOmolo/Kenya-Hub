import type { LanguageConfig, CourseUnit } from "../types";

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
    "unitNumber": 1,
    "title": "Greetings, Noun Classes & Numbers 1–20",
    "description": "Master Ekegusii greetings, noun class pairs (omonto/abanto, egekombe/ebikombe, rigena/amagena), and counting from 1 to 20.",
    "icon": "Layers",
    "color": "#D97706",
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
            "pronunciation": "bwa-ki-re bu-ya",
            "hint": "Morning salutation"
          },
          {
            "target": "Obotuko obuya",
            "source": "Good night",
            "pronunciation": "o-bo-tu-ko o-bu-ya",
            "hint": "Night salutation"
          },
          {
            "target": "omonto (pl. abanto)",
            "source": "Person (pl. People)",
            "pronunciation": "o-monto",
            "hint": "Class 1/2 noun (Hobley 1902 & Johnston 1919)"
          },
          {
            "target": "omosacha (pl. abasacha) / omokungu (pl. abakungu)",
            "source": "Man, husband / Woman, wife",
            "pronunciation": "o-mo-sacha / o-mo-kungu",
            "hint": "Hobley (1902) & Johnston (1919 #7)"
          },
          {
            "target": "omoiseke (pl. abaiseke) / omosia (pl. abasia)",
            "source": "Girl / Boy",
            "pronunciation": "o-moi-se-ke / o-mo-sia",
            "hint": "Class 1/2 nouns (Johnston 1919)"
          },
          {
            "target": "omogaka (pl. abagaka) / baba / tata",
            "source": "Elder / Mother / Father",
            "pronunciation": "o-mo-ga-ka / ba-ba / ta-ta",
            "hint": "Kinship & elder nouns (Hobley 1902)"
          },
          {
            "target": "amache / amabere / omorero",
            "source": "Water / Milk / Fire",
            "pronunciation": "a-mache / a-ma-be-re / o-mo-re-ro",
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "target": "enyomba (pl. chinyomba) / inka",
            "source": "House (pl. Houses) / Homestead",
            "pronunciation": "enyomba / inka",
            "hint": "Class 9/10 e-/chi- (Johnston 1919)"
          },
          {
            "target": "rigena (pl. amagena) / omote (pl. emete)",
            "source": "Stone (pl. Stones) / Tree (pl. Trees)",
            "pronunciation": "ri-ge-na / o-mo-te",
            "hint": "Class 5/6 ri-/ama- & Class 3/4 omo-/eme-"
          },
          {
            "target": "Engoro / Erioba",
            "source": "God / The Sun",
            "pronunciation": "engo-ro / e-rio-ba",
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
        "tips": "Numbers 6–8 build on 'isano' (5): isano nemo (6), isano na ibere (7), isano na isato (8), while 9 is 'kianda' and 10 is 'ikomi' (Hobley 1902, p. 69 & Johnston 1919, Vol. I, p. 81).",
        "words": [
          {
            "target": "eyemo",
            "source": "One (1)",
            "pronunciation": "e-ye-mo",
            "hint": "Cardinal 1 (Hobley 1902 & Johnston 1919)"
          },
          {
            "target": "ibere",
            "source": "Two (2)",
            "pronunciation": "i-be-re",
            "hint": "Cardinal 2"
          },
          {
            "target": "isato",
            "source": "Three (3)",
            "pronunciation": "i-sa-to",
            "hint": "Cardinal 3"
          },
          {
            "target": "inye",
            "source": "Four (4)",
            "pronunciation": "inye",
            "hint": "Cardinal 4"
          },
          {
            "target": "isano",
            "source": "Five (5)",
            "pronunciation": "i-sa-no",
            "hint": "Cardinal 5"
          },
          {
            "target": "isano nemo",
            "source": "Six (6, lit. 5+1)",
            "pronunciation": "i-sa-no ne-mo",
            "hint": "Cardinal 6"
          },
          {
            "target": "isano na ibere / isano na isato",
            "source": "Seven (7, lit. 5+2) / Eight (8, lit. 5+3)",
            "pronunciation": "i-sa-no na i-be-re / i-sa-no na i-sa-to",
            "hint": "Cardinals 7 & 8"
          },
          {
            "target": "kianda / ikomi",
            "source": "Nine (9) / Ten (10)",
            "pronunciation": "kianda / i-ko-mi",
            "hint": "Cardinals 9 & 10"
          },
          {
            "target": "emerongo ebere / rigana",
            "source": "Twenty (20) / One hundred (100)",
            "pronunciation": "e-me-rongo e-be-re / ri-ga-na",
            "hint": "Cardinals 20 & 100 (Johnston 1919)"
          },
          {
            "target": "okomanya / okorora / okoria / okonywa",
            "source": "To know / To see / To eat / To drink",
            "pronunciation": "o-ko-manya / o-ko-ro-ra / o-ko-ria / o-konywa",
            "hint": "Core verbs (Hobley 1902 & Johnston 1919)"
          }
        ],
        "sentences": [
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
    "unitNumber": 2,
    "title": "Dahl’s Law, Agriculture, Craftsmanship & Oral Wisdom",
    "description": "Master Ekegusii Dahl’s Law voicing (oko-/ogo-, eke-/ege-), highland crops, tools, and traditional Risaga community values.",
    "icon": "Award",
    "color": "#D97706",
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
            "target": "inche",
            "source": "I",
            "pronunciation": "inche aye ere intwe inywe ba-rabwo",
            "hint": "Johnston (1919, Vol. I, p. 82 #7 Ki-guzii) pronouns"
          },
          {
            "target": "aye",
            "source": "you (sg.)",
            "pronunciation": "inche aye ere intwe inywe ba-rabwo",
            "hint": "Johnston (1919, Vol. I, p. 82 #7 Ki-guzii) pronouns"
          },
          {
            "target": "ere",
            "source": "s/he",
            "pronunciation": "inche aye ere intwe inywe ba-rabwo",
            "hint": "Johnston (1919, Vol. I, p. 82 #7 Ki-guzii) pronouns"
          },
          {
            "target": "obori / amaemba / erabuoni",
            "source": "Finger-millet (wimbi) / Sorghum / Sweet potato",
            "pronunciation": "o-bo-ri / a-maemba / e-ra-buo-ni",
            "hint": "Hobley (1902, pp. 89–91) highland staples"
          },
          {
            "target": "obokima / obouki",
            "source": "Millet ugali / Honey",
            "pronunciation": "o-bo-ki-ma / o-bou-ki",
            "hint": "Hobley (1902, pp. 89–91)"
          },
          {
            "target": "ritimo (pl. amatimo) / enguba",
            "source": "Spear (pl. Spears) / Shield",
            "pronunciation": "ri-ti-mo / engu-ba",
            "hint": "Hobley (1902, pp. 89–91) & Johnston (1919 #7)"
          },
          {
            "target": "obota / omogwe / orobanga",
            "source": "Bow / Arrow / Sword-knife (panga)",
            "pronunciation": "o-bo-ta / o-mogwe / o-ro-banga",
            "hint": "Hobley (1902, pp. 89–91)"
          },
          {
            "target": "risaga / egesarate",
            "source": "Cooperative community work-party / Cattle boma",
            "pronunciation": "ri-sa-ga / e-ge-sa-ra-te",
            "hint": "Traditional Gusii institutions"
          },
          {
            "target": "rogoro / maate",
            "source": "Upperside (Northern standard dialect) / Lowerside (South-western dialect)",
            "pronunciation": "ro-go-ro / maa-te",
            "hint": "Two main Ekegusii dialect zones"
          },
          {
            "target": "gokama (-kama) / okoruga (-ruga)",
            "source": "To milk (Dahl’s Law ogo-) / To cook (oko-)",
            "pronunciation": "go-ka-ma / o-ko-ru-ga",
            "hint": "Dahl’s Law voicing before voiceless k"
          },
          {
            "target": "Amaboko abere nigo agokora egesieri",
            "source": "Two hands together build the doorway (Proverb)",
            "pronunciation": "a-ma-bo-ko a-be-re ni-go a-go-ko-ra e-ge-sie-ri",
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
            "hint": "Johnston (1919, Vol. I, p. 82 #7 Ki-guzii) pronouns"
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
    "unitNumber": 3,
    "title": "Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Kisii (Ekegusii) built directly from C. W. Hobley (1902), G. A. S. Northcote (1907), and Sir Harry H. Johnston (1919, 1922).",
    "icon": "Users",
    "color": "#D97706",
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
            "pronunciation": "o-mo-sa-ni",
            "hint": "Ekegusii Class 1/2 friendship noun"
          },
          {
            "target": "omwana (pl. abana)",
            "source": "Child",
            "pronunciation": "omwa-na",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "omokungu (pl. abakungu)",
            "source": "Woman",
            "pronunciation": "o-mo-kungu",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "omosacha (pl. abasacha)",
            "source": "Man",
            "pronunciation": "o-mo-sacha",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "tata (iso = your father, ise = his father)",
            "source": "Father",
            "pronunciation": "ta-ta",
            "hint": "Hobley 1902 p. 63 & Johnston 1919 #7"
          },
          {
            "target": "obonto",
            "source": "Humanity / Ubuntu philosophy",
            "pronunciation": "o-bonto",
            "hint": "Wikipedia Ubuntu philosophy — Ekegusii"
          },
          {
            "target": "baba",
            "source": "Mother",
            "pronunciation": "ba-ba",
            "hint": "Wikipedia Gusii language — Phonology"
          },
          {
            "target": "abana",
            "source": "Children",
            "pronunciation": "a-ba-na",
            "hint": "Wikipedia Gusii language — Phonology"
          },
          {
            "target": "baminto",
            "source": "Our people / brothers and sisters",
            "pronunciation": "ba-minto",
            "hint": "Wikipedia Gusii language — Phonology"
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
            "pronunciation": "o-moi-se-ke",
            "hint": "Wikipedia Gusii language — Noun classes"
          },
          {
            "target": "sokoro",
            "source": "Grandfather",
            "pronunciation": "so-ko-ro",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "omosubati",
            "source": "Lady / married woman",
            "pronunciation": "o-mo-su-ba-ti",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "omorwani",
            "source": "Fighter / warrior",
            "pronunciation": "o-morwa-ni",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "N-dugi-ani. Omw-ana ow-etu / Om-ura om-intu. Omo-mura om-intu",
            "source": "Brother",
            "pronunciation": "n-dugi-ani omw-ana ow-etu / om-ura om-intu omo-mura om-intu"
          },
          {
            "target": "Nya-rukha. Omw-iseke. Omo-subati. Omu-gogo / Omo-subati; ava-",
            "source": "Sister",
            "pronunciation": "nya-rukha omw-iseke omo-subati omu-gogo / omo-subati"
          },
          {
            "target": "Omw-ana. Iomo-isia / Omw-ana. Omo-risia",
            "source": "Son, boy",
            "pronunciation": "omw-ana iomo-isia / omw-ana omo-risia"
          },
          {
            "target": "Omo-ke. Omu-kunggu. Omu-ka / Omo-kare",
            "source": "Wife",
            "pronunciation": "omo-ke omu-kunggu omu-ka / omo-kare"
          },
          {
            "target": "umwisia",
            "source": "Son",
            "pronunciation": "umwi-sia",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Kossova / Kisii)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omoiseke (pl. abaiseke)\" in Kisii (Ekegusii)?",
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
            "prompt": "Match each verified Kisii (Ekegusii) term to its English meaning:",
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
            "prompt": "Complete the Kisii (Ekegusii) term for \"Brother\": ___",
            "correctAnswer": "N-dugi-ani. Omw-ana ow-etu / Om-ura om-intu. Omo-mura om-intu",
            "options": [
              "N-dugi-ani. Omw-ana ow-etu / Om-ura om-intu. Omo-mura om-intu",
              "omoiseke (pl. abaiseke)",
              "sokoro",
              "omosubati"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-4",
    "unitNumber": 4,
    "title": "Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Kisii (Ekegusii) built directly from C. W. Hobley (1902), G. A. S. Northcote (1907), and Sir Harry H. Johnston (1919, 1922).",
    "icon": "Scale",
    "color": "#D97706",
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
            "pronunciation": "i-sa-no na i-be-re",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "isano na isato",
            "source": "Eight (8, lit. 5+3)",
            "pronunciation": "i-sa-no na i-sa-to",
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
            "pronunciation": "i-ko-mi",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi nemo",
            "source": "Eleven (11)",
            "pronunciation": "i-ko-mi ne-mo",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi na isato",
            "source": "Thirteen (13)",
            "pronunciation": "i-ko-mi na i-sa-to",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi na inye",
            "source": "Fourteen (14)",
            "pronunciation": "i-ko-mi na inye",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi na isano",
            "source": "Fifteen (15)",
            "pronunciation": "i-ko-mi na i-sa-no",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi na isano nemo",
            "source": "Sixteen (16)",
            "pronunciation": "i-ko-mi na i-sa-no ne-mo",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
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
            "pronunciation": "i-ko-mi na i-sa-no na i-be-re",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi na isano na isato",
            "source": "Eighteen (18)",
            "pronunciation": "i-ko-mi na i-sa-no na i-sa-to",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "ikomi na kianda",
            "source": "Nineteen (19)",
            "pronunciation": "i-ko-mi na kianda",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "emerongo ebere",
            "source": "Twenty (20)",
            "pronunciation": "e-me-rongo e-be-re",
            "hint": "Wikipedia Gusii language — Gusii Numeral System"
          },
          {
            "target": "Esekendi",
            "source": "Second (time unit)",
            "pronunciation": "e-se-kendi"
          },
          {
            "target": "-mu, -mo / -mo, -mwe",
            "source": "One",
            "pronunciation": "mu mo / mo mwe"
          },
          {
            "target": "-beri, -viri / -viri",
            "source": "Two",
            "pronunciation": "be-ri vi-ri / vi-ri"
          },
          {
            "target": "-satu, -tatu / -tatu",
            "source": "Three",
            "pronunciation": "sa-tu ta-tu / ta-tu"
          },
          {
            "target": "-nye, -nne / -nne",
            "source": "Four",
            "pronunciation": "nye nne / nne"
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
    "unitNumber": 5,
    "title": "Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Kisii (Ekegusii) built directly from C. W. Hobley (1902), G. A. S. Northcote (1907), and Sir Harry H. Johnston (1919, 1922).",
    "icon": "Tractor",
    "color": "#D97706",
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
            "pronunciation": "o-bou-ki",
            "hint": "Hobley 1902 p. 64 & Johnston 1919 #7"
          },
          {
            "target": "enyama",
            "source": "Meat",
            "pronunciation": "enya-ma",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "endagera (obokima = ugali)",
            "source": "Food",
            "pronunciation": "enda-ge-ra",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "egekombe (pl. ebikombe)",
            "source": "Cup (Class 7/8: ege-/ebi-)",
            "pronunciation": "e-ge-kombe",
            "hint": "Wikipedia Gusii language — Noun classes"
          },
          {
            "target": "ritunda (pl. amatunda)",
            "source": "Fruit (Class 5/6: ri-/ama-)",
            "pronunciation": "ri-tunda",
            "hint": "Wikipedia Gusii language — Noun classes"
          },
          {
            "target": "amabere",
            "source": "Milk (Class 6: ama-)",
            "pronunciation": "a-ma-be-re",
            "hint": "Wikipedia Gusii language — Noun classes"
          },
          {
            "target": "amache",
            "source": "Water",
            "pronunciation": "a-mache",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "Ri-gomia; ama-. Eri-toki; ama- / Eri-toke; ama-",
            "source": "Banana",
            "pronunciation": "ri-gomia"
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
            "pronunciation": "ege-tinia ama-guta / ege-tinia"
          },
          {
            "target": "In-jala, en-jara / En-cara",
            "source": "Hunger",
            "pronunciation": "in-jala en-jara / en-cara"
          },
          {
            "target": "E-bando; ci-. Erinya-modoma / Ama-dumo. Eri-tumwa",
            "source": "Maize",
            "pronunciation": "e-bando"
          },
          {
            "target": "Ama-vere",
            "source": "Milk",
            "pronunciation": "ama-vere"
          },
          {
            "target": "Ama-rwa",
            "source": "Palm wine, beer",
            "pronunciation": "ama-rwa"
          },
          {
            "target": "-lia",
            "source": "To eat",
            "pronunciation": "lia"
          },
          {
            "target": "owoli",
            "source": "Eleusine grain (wimbi)",
            "pronunciation": "o-wo-li",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Kossova / Kisii)"
          },
          {
            "target": "amauta",
            "source": "Fat",
            "pronunciation": "a-mau-ta",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Kossova / Kisii)"
          },
          {
            "target": "amarua",
            "source": "Beer",
            "pronunciation": "a-ma-rua",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Kossova / Kisii)"
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
    "unitNumber": 6,
    "title": "Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Kisii (Ekegusii) built directly from C. W. Hobley (1902), G. A. S. Northcote (1907), and Sir Harry H. Johnston (1919, 1922).",
    "icon": "PawPrint",
    "color": "#D97706",
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
            "pronunciation": "ri-tu-ko / o-mo-ba-so",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "obotuko",
            "source": "Night",
            "pronunciation": "o-bo-tu-ko",
            "hint": "Hobley 1902 p. 65 & Johnston 1919 #7"
          },
          {
            "target": "omote (pl. emete)",
            "source": "Tree",
            "pronunciation": "o-mo-te",
            "hint": "Hobley 1902 p. 67 & Johnston 1919 #7"
          },
          {
            "target": "embura",
            "source": "Rain",
            "pronunciation": "embu-ra",
            "hint": "Hobley 1902 p. 66 & Johnston 1919 #7"
          },
          {
            "target": "omorero",
            "source": "Fire",
            "pronunciation": "o-mo-re-ro",
            "hint": "Hobley 1902 p. 63 & Johnston 1919 #7"
          },
          {
            "target": "eng'enang'eni (pl. ching'enang'eni)",
            "source": "Star",
            "pronunciation": "eng'e-nang'e-ni",
            "hint": "Hobley 1902 p. 67 & Johnston 1919 #7"
          },
          {
            "target": "omotienyi",
            "source": "Moon",
            "pronunciation": "o-mo-tienyi",
            "hint": "Hobley 1902 p. 65 & Johnston 1919 #7"
          },
          {
            "target": "erioba (risase)",
            "source": "Sun",
            "pronunciation": "e-rio-ba",
            "hint": "Hobley 1902 p. 67 & Johnston 1919 #7"
          },
          {
            "target": "Eri-guru. Eri-oba / Eri-oba",
            "source": "Sky",
            "pronunciation": "eri-guru eri-oba / eri-oba"
          }
        ],
        "sentences": [
          {
            "target": "rituko — obotuko",
            "source": "Day — Night"
          },
          {
            "target": "omote — embura",
            "source": "Tree — Rain"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"rituko\" mean in English?",
            "correctAnswer": "Day",
            "options": [
              "Day",
              "Night",
              "Tree",
              "Rain"
            ],
            "hint": "Core vocabulary in Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Night\"",
            "correctAnswer": "obotuko",
            "acceptedAnswers": [
              "obotuko",
              "obotuko"
            ],
            "hint": "Starts with \"ob\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"omote\"",
            "correctAnswer": "Tree",
            "acceptedAnswers": [
              "Tree",
              "Tree"
            ],
            "hint": "Review Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Sky, Weather, Rivers & Landforms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "rituko",
                "right": "Day"
              },
              {
                "left": "obotuko",
                "right": "Night"
              },
              {
                "left": "omote",
                "right": "Tree"
              },
              {
                "left": "embura",
                "right": "Rain"
              },
              {
                "left": "omorero",
                "right": "Fire"
              }
            ]
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
            "pronunciation": "ri-sa-se / o-mo-ba-so",
            "hint": "Wikipedia Gusii language — Sample phrases"
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
            "pronunciation": "e-ro-ro",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "Omororro",
            "source": "fire (Class 3)",
            "pronunciation": "o-mo-rorro",
            "hint": "Ekegusii"
          },
          {
            "target": "muwaso",
            "source": "Sun",
            "pronunciation": "mu-wa-so"
          },
          {
            "target": "iriuba",
            "source": "Sky",
            "pronunciation": "i-riu-ba"
          },
          {
            "target": "Eny-anja",
            "source": "Lake",
            "pronunciation": "eny-anja"
          },
          {
            "target": "Em-beho. Omw-ieka / Em-beho. Omo-kama; eme-",
            "source": "Wind",
            "pronunciation": "em-beho omw-ieka / em-beho omo-kama eme"
          }
        ],
        "sentences": [
          {
            "target": "ense — risase",
            "source": "Earth — Sun"
          },
          {
            "target": "enyancha — eroro",
            "source": "Lake — Desert"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ense\" mean in English?",
            "correctAnswer": "Earth / world",
            "options": [
              "Earth / world",
              "Sun / daytime",
              "Lake / sea",
              "Desert / wilderness"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Sun / daytime\"",
            "correctAnswer": "risase",
            "acceptedAnswers": [
              "risase / omobaso",
              "risase"
            ],
            "hint": "Starts with \"ri\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"enyancha\"",
            "correctAnswer": "Lake",
            "acceptedAnswers": [
              "Lake / sea",
              "Lake"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ense",
                "right": "Earth"
              },
              {
                "left": "risase",
                "right": "Sun"
              },
              {
                "left": "enyancha",
                "right": "Lake"
              },
              {
                "left": "eroro",
                "right": "Desert"
              },
              {
                "left": "Omororro",
                "right": "fire"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-7",
    "unitNumber": 7,
    "title": "The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Kisii (Ekegusii) built directly from C. W. Hobley (1902), G. A. S. Northcote (1907), and Sir Harry H. Johnston (1919, 1922).",
    "icon": "User",
    "color": "#D97706",
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
            "pronunciation": "o-ko-go-ro",
            "hint": "Hobley 1902 p. 64 & Johnston 1919 #7"
          },
          {
            "target": "okoboko (pl. amaboko)",
            "source": "Hand",
            "pronunciation": "o-ko-bo-ko",
            "hint": "Hobley 1902 p. 64 & Johnston 1919 #7"
          },
          {
            "target": "riiso (pl. amaiso)",
            "source": "Eye",
            "pronunciation": "rii-so",
            "hint": "Hobley 1902 p. 63 & Johnston 1919 #7"
          },
          {
            "target": "omotwe (pl. emetwe)",
            "source": "Head (Class 3/4: omo-/eme-)",
            "pronunciation": "o-motwe",
            "hint": "Wikipedia Gusii language — Noun classes"
          },
          {
            "target": "ogoto",
            "source": "Ear",
            "pronunciation": "o-go-to",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "obori / amaemba / rigomia (ritoke) / erabuoni / obouki",
            "source": "Finger-millet (wimbi) / Sorghum / Banana / Sweet potato / Honey",
            "pronunciation": "o-bo-ri / a-maemba / ri-go-mia / e-ra-buo-ni / o-bou-ki",
            "hint": "C. W. Hobley (1902, pp. 89–91 Kossova) & Sir Harry H. Johnston (1919, Vol. I, pp. 73–85 #7 Ki-guzii)"
          },
          {
            "target": "Omo-kono; ama- / Oko-boko",
            "source": "Arm",
            "pronunciation": "omo-kono"
          },
          {
            "target": "Omo-gonggo",
            "source": "Back",
            "pronunciation": "omo-gonggo"
          },
          {
            "target": "In-da, En-dā; cin-da / En-da; cin-da",
            "source": "Belly",
            "pronunciation": "in-da en-da"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okogoro (pl. amagoro)\" in Kisii (Ekegusii)?",
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
            "prompt": "Match each verified Kisii (Ekegusii) term to its English meaning:",
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
            "prompt": "Complete the Kisii (Ekegusii) term for \"Ear\": ___",
            "correctAnswer": "ogoto",
            "options": [
              "ogoto",
              "okogoro (pl. amagoro)",
              "okoboko (pl. amaboko)",
              "riiso (pl. amaiso)"
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
            "pronunciation": "amany-ingga or amainy-ingga / ama-sere amainy-ingga"
          },
          {
            "target": "Eki-kuba; evi- / Ege-kuba; eve-. Eng-kuba; cing-",
            "source": "Breast (man's)",
            "pronunciation": "eki-kuba"
          },
          {
            "target": "Li-bere / Olu-bere; cim-",
            "source": "Breast (woman's)",
            "pronunciation": "li-bere / olu-bere"
          },
          {
            "target": "Eki-ara; evi- or ebi- / Eki-ara; evi-. Ek-era; evi-ara",
            "source": "Finger",
            "pronunciation": "eki-ara"
          },
          {
            "target": "E-tukia; ci-",
            "source": "Hair",
            "pronunciation": "e-tukia"
          },
          {
            "target": "Omu-twe; emi- / Omo-tui, Omo-tu",
            "source": "Head",
            "pronunciation": "omu-twe"
          },
          {
            "target": "En-teme. Eng-koro / Eng-koro",
            "source": "Heart",
            "pronunciation": "en-teme eng-koro / eng-koro"
          },
          {
            "target": "Ye-tinggiro. Iki-talenggi / Ege-tinggiro. Eke-suguro",
            "source": "Heel",
            "pronunciation": "ye-tinggiro iki-talenggi / ege-tinggiro eke-suguro"
          },
          {
            "target": "Eri-ru / Eri-rū",
            "source": "Knee",
            "pronunciation": "eri-ru / eri-ru"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Amany-ingga or Amainy-ingga / Ama-sere. Amainy-ingga\" in Kisii (Ekegusii)?",
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
            "prompt": "Match each verified Kisii (Ekegusii) term to its English meaning:",
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
                "left": "Li-bere / Olu-bere; cim-",
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
            "prompt": "Complete the Kisii (Ekegusii) term for \"Hair\": ___",
            "correctAnswer": "E-tukia; ci-",
            "options": [
              "E-tukia; ci-",
              "Amany-ingga or Amainy-ingga / Ama-sere. Amainy-ingga",
              "Eki-kuba; evi- / Ege-kuba; eve-. Eng-kuba; cing-",
              "Li-bere / Olu-bere; cim-"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-8",
    "unitNumber": 8,
    "title": "Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Kisii (Ekegusii) built directly from C. W. Hobley (1902), G. A. S. Northcote (1907), and Sir Harry H. Johnston (1919, 1922).",
    "icon": "BookOpen",
    "color": "#D97706",
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
            "pronunciation": "o-gokwa-na / o-ko-boo-ra",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "okorara (-rara)",
            "source": "Sleep",
            "pronunciation": "o-ko-ra-ra",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "ogocha (inchwo! = come!)",
            "source": "Come",
            "pronunciation": "o-gocha",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "okogenda (-genda)",
            "source": "Go",
            "pronunciation": "o-ko-genda",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "okonywa (-nywa)",
            "source": "Drink",
            "pronunciation": "o-konywa",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "okoria (-ria)",
            "source": "Eat",
            "pronunciation": "o-ko-ria",
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "target": "bóra (to miss) vs. bóóra (to say)",
            "source": "To miss (short vowel) vs. To say/tell (long vowel)",
            "pronunciation": "bo-ra vs boo-ra",
            "hint": "Wikipedia Gusii language — Contrastive vowel length"
          },
          {
            "target": "komanya (-manya)",
            "source": "To know",
            "pronunciation": "ko-manya",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "gokama (-kama)",
            "source": "To milk",
            "pronunciation": "go-ka-ma",
            "hint": "Wikipedia Gusii language — Sample phrases"
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
            "pronunciation": "ko-menya",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "gotenena (-tenena)",
            "source": "To stand",
            "pronunciation": "go-te-ne-na",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "korora (-rora)",
            "source": "To see",
            "pronunciation": "ko-ro-ra",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "-garagara",
            "source": "To roll over",
            "pronunciation": "ga-ra-ga-ra",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "gesa (verb) / rigesa (noun)",
            "source": "To harvest / harvest season",
            "pronunciation": "ge-sa / ri-ge-sa",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "rera",
            "source": "To cry",
            "pronunciation": "re-ra",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "tara",
            "source": "To walk",
            "pronunciation": "ta-ra",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "rigereria",
            "source": "To look / observe",
            "pronunciation": "ri-ge-re-ria",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "okoria / okonywa",
            "source": "to eat / to drink (Class 15 infinitives)",
            "pronunciation": "o-ko-ria / o-konywa",
            "hint": "Ekegusii"
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
    "id": "kisii-unit-9",
    "unitNumber": 9,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Kisii (Ekegusii) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#D97706",
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
            "pronunciation": "ngo-tenga",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Nangire",
            "source": "I come not",
            "pronunciation": "nangi-re",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Ngoja",
            "source": "I come",
            "pronunciation": "ngo-ja",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Narēnta",
            "source": "I bring",
            "pronunciation": "na-renta",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Inje ndu",
            "source": "I am",
            "pronunciation": "inje ndu",
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
            "pronunciation": "a-ria",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "ñgi",
            "source": "Plenty",
            "pronunciation": "nggi",
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
            "pronunciation": "ai-ya ai-ga",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Endabu",
            "source": "White",
            "pronunciation": "enda-bu",
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
            "pronunciation": "uya ya",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Enkari, -kari",
            "source": "Female",
            "pronunciation": "enka-ri ka-ri",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
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
    "id": "kisii-unit-10",
    "unitNumber": 10,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Kisii (Ekegusii) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#D97706",
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
            "target": "yake (-ake)",
            "source": "His / Her (possessive)",
            "pronunciation": "ya-ke",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "yāo (-ao)",
            "source": "Your (singular possessive)",
            "pronunciation": "yao",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Enyumba yane",
            "source": "My house",
            "pronunciation": "enyumba ya-ne",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "ulia",
            "source": "That (yonder, Class 3)",
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
            "prompt": "What is the English meaning of \"bi\" in Kisii (Ekegusii)?",
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
            "prompt": "Match each verified Kisii (Ekegusii) term to its English meaning:",
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
            "prompt": "Complete the Kisii (Ekegusii) term for \"His / Her (possessive)\": ___",
            "correctAnswer": "yake (-ake)",
            "options": [
              "yake (-ake)",
              "bi",
              "Abana babo",
              "Riroba rienu"
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
            "pronunciation": "u-mu-te uyu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "uuria",
            "source": "That person (yonder, Class 1)",
            "pronunciation": "uu-ria",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Omuntu oyu",
            "source": "This man",
            "pronunciation": "o-muntu oyu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "onsi (bonsi, etc.)",
            "source": "All",
            "pronunciation": "onsi",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Abo",
            "source": "They",
            "pronunciation": "abo",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Inyue",
            "source": "You",
            "pronunciation": "inyue",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Iewi",
            "source": "We",
            "pronunciation": "ie-wi",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "target": "Olia",
            "source": "He",
            "pronunciation": "o-lia",
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
            "prompt": "What is the English meaning of \"Umute uyu\" in Kisii (Ekegusii)?",
            "correctAnswer": "This tree",
            "options": [
              "This tree",
              "That person (yonder, Class 1)",
              "This man",
              "All"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kisii (Ekegusii) term to its English meaning:",
            "correctAnswer": "Umute uyu: This tree",
            "pairs": [
              {
                "left": "Umute uyu",
                "right": "This tree"
              },
              {
                "left": "uuria",
                "right": "That person (yonder, Class 1)"
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
            "prompt": "Complete the Kisii (Ekegusii) term for \"They\": ___",
            "correctAnswer": "Abo",
            "options": [
              "Abo",
              "Umute uyu",
              "uuria",
              "Omuntu oyu"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-11",
    "unitNumber": 11,
    "title": "Set 9 Igizii (Ekegusii) & Lusinga",
    "description": "Master all Igizii (Ekegusii) and Lusinga (Rusinga Island) vocabulary, numerals 1–1,000, pronouns, and verbal sentences from Set 9 of Sir Harry Johnston's The Uganda Protectorate, Vol. II (1902, pp. 993–1001).",
    "icon": "BookOpen",
    "color": "#D97706",
    "skills": [
      {
        "id": "kisii-johnston-1902-set9-skill",
        "title": "Set 9 Igizii & Lusinga Lexicon, Numerals & Verbal Sentences",
        "icon": "Sparkles",
        "description": "Practice verified Igizii (Ekegusii) headwords, pronouns, and sentences from pp. 993–1001 of Johnston (1902).",
        "tips": "In Johnston's Set 9 table (1902, pp. 993–1001), Igizii preserves the 7-vowel root system and Class 5 Eri- / Class 6 Ama- concords: Erioba (sun/God), Erino → Amaino (tooth → teeth), Eritimo → Amatimo (spear → spears), Riroba rienu (your country).",
        "words": [
          {
            "target": "Omundu (pl. Abanto)",
            "source": "Man/Person (pl. People)",
            "pronunciation": "omundu"
          },
          {
            "target": "Omukari (pl. Abakari)",
            "source": "Woman (pl. Women)",
            "pronunciation": "omukari"
          },
          {
            "target": "Engoro / Erioba",
            "source": "God / Sun",
            "pronunciation": "engoro"
          },
          {
            "target": "Amace",
            "source": "Water",
            "pronunciation": "amace"
          },
          {
            "target": "Omurero",
            "source": "Fire",
            "pronunciation": "omurero"
          },
          {
            "target": "Eritimo (pl. Amatimo)",
            "source": "Spear (pl. Spears)",
            "pronunciation": "eritimo"
          },
          {
            "target": "Enguba",
            "source": "Shield",
            "pronunciation": "enguba"
          },
          {
            "target": "Obuta",
            "source": "Bow",
            "pronunciation": "obuta"
          },
          {
            "target": "Omugwe (pl. Emigwe)",
            "source": "Arrow (pl. Arrows)",
            "pronunciation": "omugwe"
          },
          {
            "target": "Ekisiri / Ekenabo",
            "source": "Axe",
            "pronunciation": "ekisiri"
          },
          {
            "target": "Obuatō",
            "source": "Canoe",
            "pronunciation": "obuatō"
          },
          {
            "target": "Ngotenga",
            "source": "I dance",
            "pronunciation": "ngotenga"
          },
          {
            "target": "Nangire",
            "source": "I come not",
            "pronunciation": "nangire"
          },
          {
            "target": "Emuamu",
            "source": "Black",
            "pronunciation": "emuamu"
          },
          {
            "target": "Aīya, Aiga",
            "source": "Here",
            "pronunciation": "aīya"
          },
          {
            "target": "Omuji uitu",
            "source": "Our town",
            "pronunciation": "omuji-uitu"
          },
          {
            "target": "Riroba rienu",
            "source": "Your country",
            "pronunciation": "riroba-rienu"
          },
          {
            "target": "Abana babo",
            "source": "Their children",
            "pronunciation": "abana-babo"
          }
        ],
        "sentences": [
          {
            "target": "Omuntu oyu — Umute uyu — Omuji uitu — Riroba rienu — Abana babo.",
            "source": "This man — This tree — Our town — Your country — Their children (Johnston 1902, pp. 999–1001)."
          }
        ]
      },
{
        "id": "kisii-open-datasets-ddd",
        "title": "Mobile Banking, Highland Farming & Daily Life",
        "icon": "Database",
        "description": "Practice modern Ekegusii expressions for mobile banking, agriculture, and community life from Digital Divide Data's DDD-Kenya-Gusii-Intent (61.6k rows, CC-BY-4.0).",
        "culturalNote": "Digital Divide Data (DDD) Kenya's open Ekegusii datasets document contemporary spoken and written Ekegusii across Kisii and Nyamira counties, covering mobile money (chibesa ase esimu), highland tea and maize farming, and healthcare.",
        "grammarTip": "In Ekegusii, class 10 plural nouns with prefix chi- (such as chibesa 'money' and chinchoke 'bees') govern concord prefix chi- on demonstratives and possessives.",
        "words": [
                {
                        "target": "Chibesa",
                        "source": "Money / Funds",
                        "pronunciation": "chee-beh-sah"
                },
                {
                        "target": "Esimu yane",
                        "source": "My mobile phone",
                        "pronunciation": "eh-see-moo yah-neh"
                },
                {
                        "target": "Okorwa chibesa",
                        "source": "To withdraw money",
                        "pronunciation": "oh-koh-rwah chee-beh-sah"
                },
                {
                        "target": "Ogotoma chibesa",
                        "source": "To send money",
                        "pronunciation": "oh-goh-toh-mah chee-beh-sah"
                },
                {
                        "target": "Endagera engiya",
                        "source": "Good nutrition / feed",
                        "pronunciation": "eh-ndah-geh-rah eh-ngee-yah"
                },
                {
                        "target": "Ebimera",
                        "source": "Crops / Plants",
                        "pronunciation": "eh-bee-meh-rah"
                },
                {
                        "target": "Ekenyoro",
                        "source": "Highland village / community",
                        "pronunciation": "eh-keh-nyoh-roh"
                },
                {
                        "target": "Enchoke (pl. Chinchoke)",
                        "source": "Honeybee",
                        "pronunciation": "ehn-choh-keh"
                }
        ],
        "sentences": [
                {
                        "target": "Ning'ana nigo ntachie korwa chibesa ase esimu yane?",
                        "source": "How do I withdraw money using my mobile phone?"
                },
                {
                        "target": "Endagera engiya y'enchoke amo n'ebimera ase ekenyoro.",
                        "source": "Good care for bees and crops in the highland village."
                }
        ]
},
        {
        "id": "kisii-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Kisii (Ekegusii) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "DDD Kenya Ekegusii Intent & 470H ASR Corpora (CC-BY-4.0), Sunbird AI SALT-31 Ekegusii (CC-BY-4.0), CLDF ASJP v20 GUSII & BantuBVD (CC-BY-4.0) & Public Domain Historical Lexicons (Hobley 1902 & Johnston 1902, 1919–1922)",
        "words": [
                {
                        "target": "Mbuya mono (Obeire buya)",
                        "source": "Thank you",
                        "pronunciation": "m-boo-yah moh-noh"
                },
                {
                        "target": "Mbuya mono!",
                        "source": "Thank you very much! / Very well!",
                        "pronunciation": "mbu-ya mo-no"
                },
                {
                        "target": "Okorwa gose ogotoma chibesa ase esimu",
                        "source": "Mobile money transaction / Account balance inquiry",
                        "pronunciation": "oh-koh-rwah goh-seh oh-goh-toh-mah chee-beh-sah"
                },
                {
                        "target": "Bwakire / Bwakire buya",
                        "source": "Good morning (Ekegusii)",
                        "pronunciation": "bwakire"
                },
                {
                        "target": "Bwairire / Bwairire buya",
                        "source": "Good evening",
                        "pronunciation": "bwairire"
                },
                {
                        "target": "Mbuya mono",
                        "source": "Thank you very much",
                        "pronunciation": "mbuya mono"
                },
                {
                        "target": "Karibu inka",
                        "source": "Welcome home",
                        "pronunciation": "karibu inka"
                },
                {
                        "target": "Omorembe obe n'inwe",
                        "source": "Peace be with you",
                        "pronunciation": "omorembe obe n'inwe"
                },
                {
                        "target": "Intwe tokorenda ntangana inka",
                        "source": "We keep bullock at the homestead",
                        "pronunciation": "intwe tokorenda ntangana inka"
                },
                {
                        "target": "Intwe tokorenda ngokoraturi inka",
                        "source": "We keep we make at the homestead",
                        "pronunciation": "intwe tokorenda ngokoraturi inka"
                },
                {
                        "target": "Intwe tokorenda tindi inka",
                        "source": "We keep no at the homestead",
                        "pronunciation": "intwe tokorenda tindi inka"
                },
                {
                        "target": "Intwe tokorenda na-kulete inka",
                        "source": "We keep i bring at the homestead",
                        "pronunciation": "intwe tokorenda na-kulete inka"
                }
        ],
        "sentences": [
                {
                        "target": "Ee, tobwate ntangana engiya",
                        "source": "Yes, we have good bullock"
                },
                {
                        "target": "Inwe Timobwate ngokoraturi rero?",
                        "source": "Do you have we make today?"
                },
                {
                        "target": "Ee, tobwate ngokoraturi engiya",
                        "source": "Yes, we have good we make"
                },
                {
                        "target": "Inwe Timobwate tindi rero?",
                        "source": "Do you have no today?"
                },
                {
                        "target": "Ee, tobwate tindi engiya",
                        "source": "Yes, we have good no"
                },
                {
                        "target": "Inwe Timobwate na-kulete rero?",
                        "source": "Do you have i bring today?"
                },
                {
                        "target": "Ee, tobwate na-kulete engiya",
                        "source": "Yes, we have good i bring"
                },
                {
                        "target": "Inwe Timobwate kokosolia rero?",
                        "source": "Do you have i dance today?"
                },
                {
                        "target": "Ee, tobwate kokosolia engiya",
                        "source": "Yes, we have good i dance"
                },
                {
                        "target": "Inwe Timobwate nanyaweti rero?",
                        "source": "Do you have i drank today?"
                },
                {
                        "target": "Ee, tobwate nanyaweti engiya",
                        "source": "Yes, we have good i drank"
                },
                {
                        "target": "Inwe Timobwate Ekige rero?",
                        "source": "Do you have doorway today?"
                }
        ]
},
        {
        "id": "kisii-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Kisii (Ekegusii) sentences for healthcare, transport, and community safety.",
        "culturalNote": "DDD Kenya Ekegusii Intent & 470H ASR Corpora (CC-BY-4.0), Sunbird AI SALT-31 Ekegusii (CC-BY-4.0), CLDF ASJP v20 GUSII & BantuBVD (CC-BY-4.0) & Public Domain Historical Lexicons (Hobley 1902 & Johnston 1902, 1919–1922)",
        "words": [
                {
                        "target": "Intwe tokorenda kokosolia inka",
                        "source": "We keep i dance at the homestead",
                        "pronunciation": "intwe tokorenda kokosolia inka"
                },
                {
                        "target": "Intwe tokorenda nanyaweti inka",
                        "source": "We keep i drank at the homestead",
                        "pronunciation": "intwe tokorenda nanyaweti inka"
                },
                {
                        "target": "Intwe tokorenda Ekige inka",
                        "source": "We keep doorway at the homestead",
                        "pronunciation": "intwe tokorenda ekige inka"
                },
                {
                        "target": "Intwe tokorenda Eny-uma inka",
                        "source": "We keep buttocks at the homestead",
                        "pronunciation": "intwe tokorenda eny-uma inka"
                },
                {
                        "target": "Ebei ya riogo chiro n'eng'ana?",
                        "source": "What is the price of medicine at the market?",
                        "pronunciation": "ebei ya riogo chiro n'engana"
                },
                {
                        "target": "Ebei ya oborwaire chiro n'eng'ana?",
                        "source": "What is the price of sickness at the market?",
                        "pronunciation": "ebei ya oborwaire chiro n'engana"
                },
                {
                        "target": "Ebei ya Abaporisi chiro n'eng'ana?",
                        "source": "What is the price of police at the market?",
                        "pronunciation": "ebei ya abaporisi chiro n'engana"
                },
                {
                        "target": "Ebei ya Amabe chiro n'eng'ana?",
                        "source": "What is the price of danger at the market?",
                        "pronunciation": "ebei ya amabe chiro n'engana"
                },
                {
                        "target": "Ebei ya Omorembe chiro n'eng'ana?",
                        "source": "What is the price of peace at the market?",
                        "pronunciation": "ebei ya omorembe chiro n'engana"
                },
                {
                        "target": "Ebei ya ita chiro n'eng'ana?",
                        "source": "What is the price of „ kill at the market?",
                        "pronunciation": "ebei ya ita chiro n'engana"
                },
                {
                        "target": "Ebei ya iba chiro n'eng'ana?",
                        "source": "What is the price of „ steal at the market?",
                        "pronunciation": "ebei ya iba chiro n'engana"
                },
                {
                        "target": "Ebei ya Omwibi chiro n'eng'ana?",
                        "source": "What is the price of thief at the market?",
                        "pronunciation": "ebei ya omwibi chiro n'engana"
                }
        ],
        "sentences": [
                {
                        "target": "Ee, tobwate Ekige engiya",
                        "source": "Yes, we have good doorway"
                },
                {
                        "target": "Inwe Timobwate Eny-uma rero?",
                        "source": "Do you have buttocks today?"
                },
                {
                        "target": "Ee, tobwate Eny-uma engiya",
                        "source": "Yes, we have good buttocks"
                },
                {
                        "target": "Ebei ya Ebango chiro n'eng'ana?",
                        "source": "What is the price of loan at the market?"
                },
                {
                        "target": "Ebei ya Ebanki chiro n'eng'ana?",
                        "source": "What is the price of bank at the market?"
                },
                {
                        "target": "Ebei ya Ese-gi. chiro n'eng'ana?",
                        "source": "What is the price of war at the market?"
                },
                {
                        "target": "Ebei ya Omu-ti. I-ruka chiro n'eng'ana?",
                        "source": "What is the price of fear at the market?"
                },
                {
                        "target": "Ebei ya ngokwandi chiro n'eng'ana?",
                        "source": "What is the price of i die at the market?"
                },
                {
                        "target": "Ebei ya Enyagitari chiro n'eng'ana?",
                        "source": "What is the price of hospital at the market?"
                },
                {
                        "target": "Ebei ya Omoraria chiro n'eng'ana?",
                        "source": "What is the price of doctor at the market?"
                },
                {
                        "target": "Ebei ya riogo chiro n'eng'ana?",
                        "source": "What is the price of medicine at the market?"
                },
                {
                        "target": "Ebei ya oborwaire chiro n'eng'ana?",
                        "source": "What is the price of sickness at the market?"
                }
        ]
}
    ]
  }
];
