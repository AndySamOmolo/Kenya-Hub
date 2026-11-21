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
            "target": "omosacha (pl. abasacha)",
            "source": "Man, husband",
            "pronunciation": "o-mo-sacha",
            "hint": "Hobley (1902) & Johnston (1919 #7)"
          },
          {
            "target": "omokungu (pl. abakungu)",
            "source": "Woman, wife",
            "pronunciation": "o-mo-kungu",
            "hint": "Hobley (1902) & Johnston (1919 #7)"
          },
          {
            "target": "omoiseke (pl. abaiseke)",
            "source": "Girl",
            "pronunciation": "o-moi-se-ke",
            "hint": "Class 1/2 nouns (Johnston 1919)"
          },
          {
            "target": "omosia (pl. abasia)",
            "source": "Boy",
            "pronunciation": "o-mo-sia",
            "hint": "Class 1/2 nouns (Johnston 1919)"
          },
          {
            "target": "omogaka (pl. abagaka)",
            "source": "Elder",
            "pronunciation": "o-mo-ga-ka",
            "hint": "Kinship & elder nouns (Hobley 1902)"
          },
          {
            "target": "baba",
            "source": "Mother",
            "pronunciation": "ba-ba",
            "hint": "Kinship & elder nouns (Hobley 1902)"
          },
          {
            "target": "tata",
            "source": "Father",
            "pronunciation": "ta-ta",
            "hint": "Kinship & elder nouns (Hobley 1902)"
          },
          {
            "target": "amache",
            "source": "Water",
            "pronunciation": "a-mache",
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "target": "amabere",
            "source": "Milk",
            "pronunciation": "a-ma-be-re",
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "target": "omorero",
            "source": "Fire",
            "pronunciation": "o-mo-re-ro",
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "target": "enyomba (pl. chinyomba)",
            "source": "House (pl. Houses)",
            "pronunciation": "enyomba",
            "hint": "Class 9/10 e-/chi- (Johnston 1919)"
          },
          {
            "target": "inka",
            "source": "Homestead",
            "pronunciation": "inka",
            "hint": "Class 9/10 e-/chi- (Johnston 1919)"
          },
          {
            "target": "rigena (pl. amagena)",
            "source": "Stone (pl. Stones)",
            "pronunciation": "ri-ge-na",
            "hint": "Class 5/6 ri-/ama- & Class 3/4 omo-/eme-"
          },
          {
            "target": "omote (pl. emete)",
            "source": "Tree (pl. Trees)",
            "pronunciation": "o-mo-te",
            "hint": "Class 5/6 ri-/ama- & Class 3/4 omo-/eme-"
          },
          {
            "target": "Engoro",
            "source": "God",
            "pronunciation": "engo-ro",
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "target": "Erioba",
            "source": "The Sun",
            "pronunciation": "e-rio-ba",
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
              "Person",
              "Man",
              "Good morning"
            ],
            "hint": "Morning salutation"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Obotuko obuya\" in Kisii?",
            "correctAnswer": "Good night",
            "options": [
              "Person",
              "Man",
              "Good night",
              "Good morning"
            ],
            "hint": "Night salutation"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omonto (pl. abanto)\" in Kisii?",
            "correctAnswer": "Person",
            "options": [
              "Person",
              "Man",
              "Good morning",
              "Good night"
            ],
            "hint": "Class 1/2 noun (Hobley 1902 & Johnston 1919)",
            "acceptedAnswers": [
              "Person (pl. People)",
              "Person"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Person (pl. People)\" in Kisii?",
            "correctAnswer": "omonto",
            "options": [
              "omonto",
              "Bwakire buya",
              "Obotuko obuya",
              "omosacha"
            ],
            "hint": "oh-moh-ntoh / ah-bah-ntoh",
            "acceptedAnswers": [
              "omonto (pl. abanto)",
              "omonto"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Man\" in Kisii?",
            "correctAnswer": "omosacha",
            "options": [
              "Bwakire buya",
              "Obotuko obuya",
              "omosacha",
              "omonto"
            ],
            "hint": "oh-moh-sah-chah / oh-moh-koon-goo",
            "acceptedAnswers": [
              "omosacha (pl. abasacha) / omokungu (pl. abakungu)",
              "omosacha"
            ]
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
            "prompt": "Complete the Kisii term for \"Girl\": ___",
            "correctAnswer": "omoiseke",
            "options": [
              "Bwakire buya",
              "Obotuko obuya",
              "omonto",
              "omoiseke"
            ],
            "hint": "Class 1/2 nouns (Johnston 1919)",
            "acceptedAnswers": [
              "omoiseke (pl. abaiseke) / omosia (pl. abasia)",
              "omoiseke"
            ]
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
            "target": "isano na ibere",
            "source": "Seven (7, lit. 5+2)",
            "pronunciation": "i-sa-no na i-be-re",
            "hint": "Cardinals 7 & 8"
          },
          {
            "target": "isano na isato",
            "source": "Eight (8, lit. 5+3)",
            "pronunciation": "i-sa-no na i-sa-to",
            "hint": "Cardinals 7 & 8"
          },
          {
            "target": "kianda",
            "source": "Nine (9)",
            "pronunciation": "kianda",
            "hint": "Cardinals 9 & 10"
          },
          {
            "target": "ikomi",
            "source": "Ten (10)",
            "pronunciation": "i-ko-mi",
            "hint": "Cardinals 9 & 10"
          },
          {
            "target": "emerongo ebere",
            "source": "Twenty (20)",
            "pronunciation": "e-me-rongo e-be-re",
            "hint": "Cardinals 20 & 100 (Johnston 1919)"
          },
          {
            "target": "rigana",
            "source": "One hundred (100)",
            "pronunciation": "ri-ga-na",
            "hint": "Cardinals 20 & 100 (Johnston 1919)"
          },
          {
            "target": "okomanya",
            "source": "To know",
            "pronunciation": "o-ko-manya",
            "hint": "Core verbs (Hobley 1902 & Johnston 1919)"
          },
          {
            "target": "okorora",
            "source": "To see",
            "pronunciation": "o-ko-ro-ra",
            "hint": "Core verbs (Hobley 1902 & Johnston 1919)"
          },
          {
            "target": "okoria",
            "source": "To eat",
            "pronunciation": "o-ko-ria",
            "hint": "Core verbs (Hobley 1902 & Johnston 1919)"
          },
          {
            "target": "okonywa",
            "source": "To drink",
            "pronunciation": "o-konywa",
            "hint": "Core verbs (Hobley 1902 & Johnston 1919)"
          }
        ],
        "sentences": [
          {
            "target": "Chiombe isano na ibere",
            "source": "Seven cows."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"eyemo\" in Kisii?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
            ],
            "hint": "Cardinal 1 (Hobley 1902 & Johnston 1919)",
            "acceptedAnswers": [
              "One (1)",
              "One"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ibere\" in Kisii?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "One",
              "Two"
            ],
            "hint": "Cardinal 2",
            "acceptedAnswers": [
              "Two (2)",
              "Two"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"isato\" in Kisii?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Cardinal 3",
            "acceptedAnswers": [
              "Three (3)",
              "Three"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three (3)\" in Kisii?",
            "correctAnswer": "isato",
            "options": [
              "eyemo",
              "isato",
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
              "isano",
              "eyemo",
              "ibere",
              "isato"
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
            "pronunciation": "inche",
            "hint": "Johnston (1919, Vol. I, p. 82 #7 Ki-guzii) pronouns"
          },
          {
            "target": "aye",
            "source": "you (sg.)",
            "pronunciation": "aye",
            "hint": "Johnston (1919, Vol. I, p. 82 #7 Ki-guzii) pronouns"
          },
          {
            "target": "ere",
            "source": "s/he",
            "pronunciation": "ere",
            "hint": "Johnston (1919, Vol. I, p. 82 #7 Ki-guzii) pronouns"
          },
          {
            "target": "intwe",
            "source": "we",
            "pronunciation": "intwe",
            "hint": "Johnston (1919, Vol. I, p. 82 #7 Ki-guzii) pronouns"
          },
          {
            "target": "inywe",
            "source": "you (pl.)",
            "pronunciation": "inywe",
            "hint": "Johnston (1919, Vol. I, p. 82 #7 Ki-guzii) pronouns"
          },
          {
            "target": "barabwo",
            "source": "they",
            "pronunciation": "ba-rabwo",
            "hint": "Johnston (1919, Vol. I, p. 82 #7 Ki-guzii) pronouns"
          },
          {
            "target": "obori",
            "source": "Finger-millet (wimbi)",
            "pronunciation": "o-bo-ri",
            "hint": "Hobley (1902, pp. 89–91) highland staples"
          },
          {
            "target": "amaemba",
            "source": "Sorghum",
            "pronunciation": "a-maemba",
            "hint": "Hobley (1902, pp. 89–91) highland staples"
          },
          {
            "target": "erabuoni",
            "source": "Sweet potato",
            "pronunciation": "e-ra-buo-ni",
            "hint": "Hobley (1902, pp. 89–91) highland staples"
          },
          {
            "target": "obokima",
            "source": "Millet ugali",
            "pronunciation": "o-bo-ki-ma",
            "hint": "Hobley (1902, pp. 89–91)"
          },
          {
            "target": "obouki",
            "source": "Honey",
            "pronunciation": "o-bou-ki",
            "hint": "Hobley (1902, pp. 89–91)"
          },
          {
            "target": "ritimo (pl. amatimo)",
            "source": "Spear (pl. Spears)",
            "pronunciation": "ri-ti-mo",
            "hint": "Hobley (1902, pp. 89–91) & Johnston (1919 #7)"
          },
          {
            "target": "enguba",
            "source": "Shield",
            "pronunciation": "engu-ba",
            "hint": "Hobley (1902, pp. 89–91) & Johnston (1919 #7)"
          },
          {
            "target": "obota",
            "source": "Bow",
            "pronunciation": "o-bo-ta",
            "hint": "Hobley (1902, pp. 89–91)"
          },
          {
            "target": "omogwe",
            "source": "Arrow",
            "pronunciation": "o-mogwe",
            "hint": "Hobley (1902, pp. 89–91)"
          },
          {
            "target": "orobanga",
            "source": "Sword-knife (panga)",
            "pronunciation": "o-ro-banga",
            "hint": "Hobley (1902, pp. 89–91)"
          },
          {
            "target": "risaga",
            "source": "Cooperative community work-party",
            "pronunciation": "ri-sa-ga",
            "hint": "Traditional Gusii institutions"
          },
          {
            "target": "egesarate",
            "source": "Cattle boma",
            "pronunciation": "e-ge-sa-ra-te",
            "hint": "Traditional Gusii institutions"
          },
          {
            "target": "rogoro",
            "source": "Upperside (Northern standard dialect)",
            "pronunciation": "ro-go-ro",
            "hint": "Two main Ekegusii dialect zones"
          },
          {
            "target": "maate",
            "source": "Lowerside (South-western dialect)",
            "pronunciation": "maa-te",
            "hint": "Two main Ekegusii dialect zones"
          },
          {
            "target": "gokama (-kama)",
            "source": "To milk (Dahl’s Law ogo-)",
            "pronunciation": "go-ka-ma",
            "hint": "Dahl’s Law voicing before voiceless k"
          },
          {
            "target": "okoruga (-ruga)",
            "source": "To cook (oko-)",
            "pronunciation": "o-ko-ru-ga",
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
            "prompt": "What is the English meaning of \"inche\" in Kisii?",
            "correctAnswer": "I",
            "options": [
              "Finger-millet",
              "I",
              "Millet ugali",
              "Spear"
            ],
            "hint": "Johnston (1919, Vol. I, p. 82 #7 Ki-guzii) pronouns",
            "acceptedAnswers": [
              "I, you (sg.), s/he, we, you (pl.), they",
              "I"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"obori\" in Kisii?",
            "correctAnswer": "Finger-millet",
            "options": [
              "Millet ugali",
              "Finger-millet",
              "Spear",
              "I"
            ],
            "hint": "Hobley (1902, pp. 89–91) highland staples",
            "acceptedAnswers": [
              "Finger-millet (wimbi) / Sorghum / Sweet potato",
              "Finger-millet"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"obokima\" in Kisii?",
            "correctAnswer": "Millet ugali",
            "options": [
              "Spear",
              "I",
              "Millet ugali",
              "Finger-millet"
            ],
            "hint": "Hobley (1902, pp. 89–91)",
            "acceptedAnswers": [
              "Millet ugali / Honey",
              "Millet ugali"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Millet ugali\" in Kisii?",
            "correctAnswer": "obokima",
            "options": [
              "inche",
              "obori",
              "obokima",
              "ritimo"
            ],
            "hint": "oh-boh-kee-mah / oh-boh-oo-kee",
            "acceptedAnswers": [
              "obokima / obouki",
              "obokima"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Spear\" in Kisii?",
            "correctAnswer": "ritimo",
            "options": [
              "inche",
              "obori",
              "ritimo",
              "obokima"
            ],
            "hint": "ree-tee-moh / ehn-goo-bah",
            "acceptedAnswers": [
              "ritimo (pl. amatimo) / enguba",
              "ritimo"
            ]
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
            "prompt": "Complete the Kisii term for \"Bow\": ___",
            "correctAnswer": "obota",
            "options": [
              "inche",
              "obori",
              "obokima",
              "obota"
            ],
            "hint": "Hobley (1902, pp. 89–91)",
            "acceptedAnswers": [
              "obota / omogwe / orobanga",
              "obota"
            ]
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
              "Friend",
              "Man"
            ],
            "hint": "Starts with \"Fr…\" (6 letters)"
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
              "Friend",
              "Child",
              "Woman"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Woman\" in Kisii?",
            "correctAnswer": "omokungu",
            "options": [
              "omokungu",
              "omosani",
              "omwana",
              "omosacha"
            ],
            "hint": "oh-moh-koon-goo",
            "acceptedAnswers": [
              "omokungu (pl. abakungu)",
              "omokungu"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Man\" in Kisii?",
            "correctAnswer": "omosacha",
            "options": [
              "omosani",
              "omwana",
              "omosacha",
              "omokungu"
            ],
            "hint": "oh-moh-sah-chah",
            "acceptedAnswers": [
              "omosacha (pl. abasacha)",
              "omosacha"
            ]
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
            "correctAnswer": "tata",
            "options": [
              "omosani",
              "tata",
              "omwana",
              "omokungu"
            ],
            "hint": "Hobley 1902 p. 63 & Johnston 1919 #7",
            "acceptedAnswers": [
              "tata (iso = your father, ise = his father)",
              "tata"
            ]
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
            "source": "Girl (Class 1/2: omo-/aba-)",
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
            "target": "omwana oitu / omomura oitu",
            "source": "Brother",
            "pronunciation": "omwa-na o-i-tu"
          },
          {
            "target": "omwiseke oitu / nyarukha",
            "source": "Sister",
            "pronunciation": "omwi-se-ke o-i-tu / nya-ru-kha"
          },
          {
            "target": "omwana / omoisia",
            "source": "Son / Boy",
            "pronunciation": "omwa-na / o-moi-sia"
          },
          {
            "target": "omokungu / omoke",
            "source": "Wife",
            "pronunciation": "o-mo-ku-ngu / o-mo-ke"
          },
          {
            "target": "omomura (pl. abamura)",
            "source": "Young man / Son",
            "pronunciation": "o-mo-mu-ra"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omoiseke\" in Kisii (Ekegusii)?",
            "correctAnswer": "Girl",
            "options": [
              "Grandfather",
              "Lady",
              "Girl",
              "Fighter"
            ],
            "hint": "Wikipedia Gusii language — Noun classes",
            "acceptedAnswers": [
              "Girl (Class 9/2)",
              "Girl"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kisii (Ekegusii) term to its English meaning:",
            "correctAnswer": "omoiseke (pl. abaiseke): Girl (Class 1/2: omo-/aba-)",
            "pairs": [
              {
                "left": "omoiseke (pl. abaiseke)",
                "right": "Girl (Class 1/2: omo-/aba-)"
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
            "correctAnswer": "omwana oitu",
            "options": [
              "omoiseke",
              "sokoro",
              "omosubati",
              "omwana oitu"
            ]
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
            "correctAnswer": "Seven",
            "options": [
              "Eight",
              "Nine",
              "Seven",
              "Ten"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System",
            "acceptedAnswers": [
              "Seven (7, lit. 5+2)",
              "Seven"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"isano na isato\" in Kisii?",
            "correctAnswer": "Eight",
            "options": [
              "Nine",
              "Ten",
              "Eight",
              "Seven"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System",
            "acceptedAnswers": [
              "Eight (8, lit. 5+3)",
              "Eight"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kianda\" in Kisii?",
            "correctAnswer": "Nine",
            "options": [
              "Ten",
              "Nine",
              "Seven",
              "Eight"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System",
            "acceptedAnswers": [
              "Nine (9)",
              "Nine"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nine (9)\" in Kisii?",
            "correctAnswer": "kianda",
            "options": [
              "isano na ibere",
              "kianda",
              "ikomi",
              "ikomi nemo"
            ],
            "hint": "Starts with \"ki…\" (6 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ten (10)\" in Kisii?",
            "correctAnswer": "ikomi",
            "options": [
              "ikomi",
              "isano na ibere",
              "kianda",
              "ikomi nemo"
            ],
            "hint": "Starts with \"ik…\" (5 letters)"
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
              "ikomi nemo",
              "isano na ibere",
              "kianda",
              "ikomi"
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
            "correctAnswer": "Seventeen",
            "options": [
              "Eighteen",
              "Nineteen",
              "Twenty",
              "Seventeen"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System",
            "acceptedAnswers": [
              "Seventeen (17)",
              "Seventeen"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikomi na isano na isato\" in Kisii?",
            "correctAnswer": "Eighteen",
            "options": [
              "Nineteen",
              "Twenty",
              "Eighteen",
              "Seventeen"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System",
            "acceptedAnswers": [
              "Eighteen (18)",
              "Eighteen"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikomi na kianda\" in Kisii?",
            "correctAnswer": "Nineteen",
            "options": [
              "Twenty",
              "Seventeen",
              "Nineteen",
              "Eighteen"
            ],
            "hint": "Wikipedia Gusii language — Gusii Numeral System",
            "acceptedAnswers": [
              "Nineteen (19)",
              "Nineteen"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nineteen (19)\" in Kisii?",
            "correctAnswer": "ikomi na kianda",
            "options": [
              "emerongo ebere",
              "Esekendi",
              "-mu",
              "ikomi na kianda"
            ],
            "hint": "Starts with \"ik…\" (15 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Twenty (20)\" in Kisii?",
            "correctAnswer": "emerongo ebere",
            "options": [
              "emerongo ebere",
              "ikomi na kianda",
              "Esekendi",
              "-mu"
            ],
            "hint": "Starts with \"em…\" (14 letters)"
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
              "ikomi na kianda",
              "Esekendi",
              "emerongo ebere",
              "-mu"
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
            "target": "rigomia (pl. amagomia) / ritoke",
            "source": "Banana",
            "pronunciation": "ri-go-mia / ri-to-ke"
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
              "Honey",
              "Cup"
            ],
            "hint": "Hobley 1902 p. 64 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"enyama\" in Kisii?",
            "correctAnswer": "Meat",
            "options": [
              "Food",
              "Meat",
              "Cup",
              "Honey"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"endagera\" in Kisii?",
            "correctAnswer": "Food",
            "options": [
              "Cup",
              "Honey",
              "Meat",
              "Food"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Food\" in Kisii?",
            "correctAnswer": "endagera",
            "options": [
              "obouki",
              "enyama",
              "egekombe",
              "endagera"
            ],
            "hint": "ehn-dah-geh-rah / oh-boh-kee-mah",
            "acceptedAnswers": [
              "endagera (obokima = ugali)",
              "endagera"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cup (Class 7/8: ege-/ebi-)\" in Kisii?",
            "correctAnswer": "egekombe",
            "options": [
              "obouki",
              "egekombe",
              "enyama",
              "endagera"
            ],
            "hint": "Starts with \"eg…\" (8 letters)",
            "acceptedAnswers": [
              "egekombe (pl. ebikombe)",
              "egekombe"
            ]
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
            "correctAnswer": "ritunda",
            "options": [
              "obouki",
              "ritunda",
              "enyama",
              "endagera"
            ],
            "hint": "Wikipedia Gusii language — Noun classes",
            "acceptedAnswers": [
              "ritunda (pl. amatunda)",
              "ritunda"
            ]
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
            "target": "amaguta / egetinia",
            "source": "Fat / Oil",
            "pronunciation": "a-ma-gu-ta / e-ge-ti-nia"
          },
          {
            "target": "enchara / enjara",
            "source": "Hunger",
            "pronunciation": "en-cha-ra / en-ja-ra"
          },
          {
            "target": "ebando (pl. chibando)",
            "source": "Maize",
            "pronunciation": "e-ba-ndo"
          },
          {
            "target": "amabere / amavere",
            "source": "Milk",
            "pronunciation": "a-ma-be-re"
          },
          {
            "target": "amarwa",
            "source": "Traditional millet beer",
            "pronunciation": "a-ma-rwa"
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
            "target": "chinyeni",
            "source": "Vegetables / Greens",
            "pronunciation": "chi-nye-ni"
          },
          {
            "target": "eng'ombe (pl. chiombe)",
            "source": "Cow / Cattle",
            "pronunciation": "eng-o-mbe"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"amaguta / egetinia\" in Kisii?",
            "correctAnswer": "Fat / Oil",
            "options": [
              "Hunger",
              "Maize",
              "Milk",
              "Fat / Oil"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"enchara / enjara\" in Kisii?",
            "correctAnswer": "Hunger",
            "options": [
              "Maize",
              "Milk",
              "Fat / Oil",
              "Hunger"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ebando (pl. chibando)\" in Kisii?",
            "correctAnswer": "Maize",
            "options": [
              "Milk",
              "Maize",
              "Fat / Oil",
              "Hunger"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Maize\" in Kisii?",
            "correctAnswer": "ebando",
            "options": [
              "amaguta",
              "enchara",
              "amabere",
              "ebando"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Milk\" in Kisii?",
            "correctAnswer": "amabere",
            "options": [
              "amaguta",
              "enchara",
              "ebando",
              "amabere"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kisii expression with its English meaning:",
            "correctAnswer": "amaguta / egetinia: Fat / Oil",
            "pairs": [
              {
                "left": "amaguta / egetinia",
                "right": "Fat / Oil"
              },
              {
                "left": "enchara / enjara",
                "right": "Hunger"
              },
              {
                "left": "ebando (pl. chibando)",
                "right": "Maize"
              },
              {
                "left": "amabere / amavere",
                "right": "Milk"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii term for \"Traditional millet beer\": ___",
            "correctAnswer": "amarwa",
            "options": [
              "amaguta",
              "amarwa",
              "enchara",
              "ebando"
            ]
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
            "target": "eng'enang'eni",
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
            "target": "Eri-guru",
            "source": "Sky",
            "pronunciation": "eri-guru"
          }
        ],
        "sentences": [
          {
            "target": "Rituko n'obotuko mbuya.",
            "source": "Day and night are good."
          },
          {
            "target": "Embura nigo ekorwa igoro ase omote.",
            "source": "Rain falls from above onto the tree."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"rituko\" mean in English?",
            "correctAnswer": "Day",
            "options": [
              "Night",
              "Tree",
              "Day",
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
            "target": "risase",
            "source": "Sun",
            "pronunciation": "ri-sa-se",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "omobaso",
            "source": "Daytime",
            "pronunciation": "o-mo-ba-so",
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
            "target": "enchogu",
            "source": "Elephant",
            "pronunciation": "en-cho-gu"
          },
          {
            "target": "iriuba",
            "source": "Sky",
            "pronunciation": "i-riu-ba"
          },
          {
            "target": "engo",
            "source": "Leopard",
            "pronunciation": "en-go"
          },
          {
            "target": "Em-beho",
            "source": "Wind",
            "pronunciation": "em-beho"
          }
        ],
        "sentences": [
          {
            "target": "Risase nigo rikorika ase ense.",
            "source": "The sun shines upon the earth."
          },
          {
            "target": "Enyancha nene ere ange n'eroro.",
            "source": "A great lake is near the wilderness."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ense\" mean in English?",
            "correctAnswer": "Earth",
            "options": [
              "Sun",
              "Lake",
              "Earth",
              "Desert"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees",
            "acceptedAnswers": [
              "Earth / world",
              "Earth"
            ]
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
            "target": "riino (pl. amaino)",
            "source": "Tooth",
            "pronunciation": "rii-no"
          },
          {
            "target": "oromeme (pl. chimeme)",
            "source": "Tongue",
            "pronunciation": "o-ro-me-me"
          },
          {
            "target": "emioro",
            "source": "Nose",
            "pronunciation": "e-mio-ro"
          },
          {
            "target": "omonwa",
            "source": "Mouth",
            "pronunciation": "o-mo-nwa"
          },
          {
            "target": "enkoro",
            "source": "Heart",
            "pronunciation": "en-ko-ro"
          },
          {
            "target": "omokono / okoboko",
            "source": "Arm",
            "pronunciation": "o-mo-ko-no / o-ko-bo-ko"
          },
          {
            "target": "omogongo",
            "source": "Back",
            "pronunciation": "o-mo-go-ngo"
          },
          {
            "target": "enda (pl. chinda)",
            "source": "Belly / Stomach",
            "pronunciation": "en-da"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okogoro (pl. amagoro)\" in Kisii (Ekegusii)?",
            "correctAnswer": "Foot",
            "options": [
              "Hand",
              "Eye",
              "Head",
              "Foot"
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
              "okogoro",
              "okoboko",
              "ogoto",
              "riiso"
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
            "target": "amanyinga",
            "source": "Blood",
            "pronunciation": "a-ma-nyi-nga"
          },
          {
            "target": "egekuba (pl. ebikuba)",
            "source": "Chest",
            "pronunciation": "e-ge-ku-ba"
          },
          {
            "target": "ribere (pl. amabere)",
            "source": "Breast",
            "pronunciation": "ri-be-re"
          },
          {
            "target": "ekiara (pl. ebiara)",
            "source": "Finger",
            "pronunciation": "e-kia-ra"
          },
          {
            "target": "etukia (pl. chitukia)",
            "source": "Hair",
            "pronunciation": "e-tu-kia"
          },
          {
            "target": "omotwe (pl. emetwe)",
            "source": "Head",
            "pronunciation": "o-mo-twe"
          },
          {
            "target": "enteme / enkoro",
            "source": "Heart",
            "pronunciation": "en-te-me / en-ko-ro"
          },
          {
            "target": "egetingiro",
            "source": "Heel",
            "pronunciation": "e-ge-ti-ngi-ro"
          },
          {
            "target": "eriru (pl. amaru)",
            "source": "Knee",
            "pronunciation": "e-ri-ru"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"amanyinga\" in Kisii (Ekegusii)?",
            "correctAnswer": "Blood",
            "options": [
              "Chest",
              "Finger",
              "Hair",
              "Blood"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kisii (Ekegusii) term to its English meaning:",
            "correctAnswer": "amanyinga: Blood",
            "pairs": [
              {
                "left": "amanyinga",
                "right": "Blood"
              },
              {
                "left": "egekuba (pl. ebikuba)",
                "right": "Chest"
              },
              {
                "left": "ribere (pl. amabere)",
                "right": "Breast"
              },
              {
                "left": "ekiara (pl. ebiara)",
                "right": "Finger"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kisii (Ekegusii) term for \"Hair\": ___",
            "correctAnswer": "etukia",
            "options": [
              "amanyinga",
              "etukia",
              "egekuba",
              "ribere"
            ]
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
              "Speak",
              "Sleep",
              "Come",
              "Go"
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
              "Speak",
              "Sleep"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ogocha\" in Kisii?",
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
            "correctAnswer": "ogocha",
            "options": [
              "ogokwana",
              "ogocha",
              "okorara",
              "okogenda"
            ],
            "hint": "oh-goh-chah / een-chwoh",
            "acceptedAnswers": [
              "ogocha (inchwo! = come!)",
              "ogocha"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Go\" in Kisii?",
            "correctAnswer": "okogenda",
            "options": [
              "ogokwana",
              "okogenda",
              "okorara",
              "ogocha"
            ],
            "hint": "oh-koh-gehn-dah",
            "acceptedAnswers": [
              "okogenda (-genda)",
              "okogenda"
            ]
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
            "correctAnswer": "okonywa",
            "options": [
              "ogokwana",
              "okorara",
              "ogocha",
              "okonywa"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #7",
            "acceptedAnswers": [
              "okonywa (-nywa)",
              "okonywa"
            ]
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
            "target": "gesa",
            "source": "To harvest",
            "pronunciation": "ge-sa",
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "target": "rigesa",
            "source": "Harvest season",
            "pronunciation": "ri-ge-sa",
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
            "target": "okoria",
            "source": "to eat",
            "pronunciation": "o-ko-ria",
            "hint": "Ekegusii"
          },
          {
            "target": "okonywa",
            "source": "to drink (Class 15 infinitives)",
            "pronunciation": "o-konywa",
            "hint": "Ekegusii"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"komenya\" in Kisii?",
            "correctAnswer": "To dwell",
            "options": [
              "To stand",
              "To see",
              "To dwell",
              "To roll over"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases",
            "acceptedAnswers": [
              "To dwell / live",
              "To dwell"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"gotenena (-tenena)\" in Kisii?",
            "correctAnswer": "To stand",
            "options": [
              "To see",
              "To stand",
              "To roll over",
              "To dwell"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"korora (-rora)\" in Kisii?",
            "correctAnswer": "To see",
            "options": [
              "To roll over",
              "To dwell",
              "To stand",
              "To see"
            ],
            "hint": "Wikipedia Gusii language — Sample phrases"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To see\" in Kisii?",
            "correctAnswer": "korora",
            "options": [
              "komenya",
              "gotenena",
              "-garagara",
              "korora"
            ],
            "hint": "Starts with \"ko…\" (6 letters)",
            "acceptedAnswers": [
              "korora (-rora)",
              "korora"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To roll over\" in Kisii?",
            "correctAnswer": "-garagara",
            "options": [
              "-garagara",
              "komenya",
              "gotenena",
              "korora"
            ],
            "hint": "Starts with \"-g…\" (9 letters)"
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
            "prompt": "Complete the Kisii term for \"To harvest\": ___",
            "correctAnswer": "gesa",
            "options": [
              "komenya",
              "gesa",
              "gotenena",
              "korora"
            ],
            "hint": "Starts with \"ge…\" (4 letters)",
            "acceptedAnswers": [
              "gesa (verb) / rigesa (noun)",
              "gesa"
            ]
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
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Nangire",
            "source": "I come not",
            "pronunciation": "nangi-re",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Ngoja",
            "source": "I come",
            "pronunciation": "ngo-ja",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Narēnta",
            "source": "I bring",
            "pronunciation": "na-renta",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Inje ndu",
            "source": "I am",
            "pronunciation": "inje ndu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Yaya",
            "source": "No, not",
            "pronunciation": "ya-ya",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Ariá",
            "source": "There",
            "pronunciation": "a-ria",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "ñgi",
            "source": "Plenty",
            "pronunciation": "nggi",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          }
        ],
        "sentences": [
          {
            "target": "Inje ndu",
            "source": "I am."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ngotenga\" in Kisii?",
            "correctAnswer": "I dance",
            "options": [
              "I come not",
              "I come",
              "I dance",
              "I bring"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
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
              "Yaya",
              "Ngotenga",
              "Inje ndu",
              "Nangire"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
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
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Aīya, Aiga",
            "source": "Here",
            "pronunciation": "ai-ya ai-ga",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Endabu",
            "source": "White",
            "pronunciation": "enda-bu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "saja, -gore",
            "source": "Male",
            "pronunciation": "sa-ja go-re",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "kĕ",
            "source": "Little",
            "pronunciation": "ke",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "kuru",
            "source": "Great",
            "pronunciation": "ku-ru",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "uya / -ya (abanto baya)",
            "source": "Good (e.g., good people)",
            "pronunciation": "u-ya / ya"
          },
          {
            "target": "Enkari, -kari",
            "source": "Female",
            "pronunciation": "enka-ri ka-ri",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Emuamu\" in Kisii?",
            "correctAnswer": "Black",
            "options": [
              "Here",
              "White",
              "Black",
              "Male"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
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
              "kuru",
              "Emuamu",
              "kĕ",
              "Aīya"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
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
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Abana babo",
            "source": "Their children",
            "pronunciation": "a-ba-na ba-bo",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Riroba rienu",
            "source": "Your country",
            "pronunciation": "ri-ro-ba rie-nu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Omuji uitu",
            "source": "Our town",
            "pronunciation": "o-mu-ji ui-tu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "yake (-ake)",
            "source": "His / Her (possessive)",
            "pronunciation": "ya-ke",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "yāo (-ao)",
            "source": "Your (singular possessive)",
            "pronunciation": "yao",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Enyumba yane",
            "source": "My house",
            "pronunciation": "enyumba ya-ne",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "ulia",
            "source": "That (yonder, Class 3)",
            "pronunciation": "u-lia",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          }
        ],
        "sentences": [
          {
            "target": "Abana babo",
            "source": "Their children."
          },
          {
            "target": "Riroba rienu",
            "source": "Your country."
          },
          {
            "target": "Omuji uitu",
            "source": "Our town."
          },
          {
            "target": "Enyumba yane",
            "source": "My house."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"bi\" in Kisii (Ekegusii)?",
            "correctAnswer": "Bad",
            "options": [
              "Their children",
              "Your country",
              "Our town",
              "Bad"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
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
            "correctAnswer": "yake",
            "options": [
              "yake",
              "bi",
              "Abana babo",
              "Riroba rienu"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)",
            "acceptedAnswers": [
              "yake (-ake)",
              "yake"
            ]
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
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "uuria",
            "source": "That person (yonder, Class 1)",
            "pronunciation": "uu-ria",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Omuntu oyu",
            "source": "This man",
            "pronunciation": "o-muntu oyu",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "onsi (bonsi, etc.)",
            "source": "All",
            "pronunciation": "onsi",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Abo",
            "source": "They",
            "pronunciation": "abo",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Inyue",
            "source": "You",
            "pronunciation": "inyue",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Iewi",
            "source": "We",
            "pronunciation": "ie-wi",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          },
          {
            "target": "Olia",
            "source": "He",
            "pronunciation": "o-lia",
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
          }
        ],
        "sentences": [
          {
            "target": "Umute uyu",
            "source": "This tree."
          },
          {
            "target": "Omuntu oyu",
            "source": "This man."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Umute uyu\" in Kisii (Ekegusii)?",
            "correctAnswer": "This tree",
            "options": [
              "This tree",
              "That person",
              "This man",
              "All"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
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
              "Umute uyu",
              "Abo",
              "uuria",
              "Omuntu oyu"
            ],
            "hint": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 993–1001)"
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
            "target": "Engoro",
            "source": "God",
            "pronunciation": "engoro"
          },
          {
            "target": "Erioba",
            "source": "Sun",
            "pronunciation": "e-rio-ba"
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
            "source": "This man — This tree — Our town — Your country — Their children."
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
        "culturalNote": "DDD Kenya Ekegusii Intent & 470H ASR Corpora (CC-BY-4.0), Sunbird AI SALT-31 Ekegusii (CC-BY-4.0), CLDF ASJP v20 GUSII & BantuBVD (CC-BY-4.0) & Public Domain Historical Lexicons (Hobley 1902 & Johnston 1902, 1919–1922).",
        "words": [
          {
            "target": "Omorembe",
            "source": "Peace",
            "pronunciation": "oh-moh-rehm-beh"
          },
          {
            "target": "Bwakire!",
            "source": "Good morning / Hello",
            "pronunciation": "bwah-kee-reh"
          },
          {
            "target": "Mbuya mono",
            "source": "Thank you very much",
            "pronunciation": "m-boo-yah moh-noh"
          },
          {
            "target": "Naki ogenderete?",
            "source": "How are you doing?",
            "pronunciation": "nah-kee oh-gehn-deh-reh-teh"
          },
          {
            "target": "Obotuko obuya",
            "source": "Good night",
            "pronunciation": "oh-boh-too-koh oh-boo-yah"
          },
          {
            "target": "Bwairire",
            "source": "Good evening",
            "pronunciation": "bwairire"
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
            "target": "amauta",
            "source": "Fat",
            "pronunciation": "a-mau-ta"
          },
          {
            "target": "Erige",
            "source": "Egg",
            "pronunciation": "e-ri-ge"
          }
        ],
        "sentences": [
          {
            "target": "Bwakire buya, baba!",
            "source": "Good morning, mother!"
          },
          {
            "target": "Mbuya mono!",
            "source": "Thank you very much! / Very well!"
          },
          {
            "target": "Okorwa gose ogotoma chibesa ase esimu.",
            "source": "Withdrawing or sending money by mobile phone."
          },
          {
            "target": "Naki ogenderete rero?",
            "source": "How are you doing today?"
          },
          {
            "target": "Karibu inka.",
            "source": "Welcome home."
          },
          {
            "target": "Omorembe obe n'inwe.",
            "source": "Peace be with you."
          }
        ]
      },
      {
        "id": "kisii-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Kisii (Ekegusii) sentences for healthcare, transport, and community safety.",
        "culturalNote": "DDD Kenya Ekegusii Intent & 470H ASR Corpora (CC-BY-4.0), Sunbird AI SALT-31 Ekegusii (CC-BY-4.0), CLDF ASJP v20 GUSII & BantuBVD (CC-BY-4.0) & Public Domain Historical Lexicons (Hobley 1902 & Johnston 1902, 1919–1922).",
        "words": [
          {
            "target": "-mu, -mo",
            "source": "One",
            "pronunciation": "mu / mo"
          },
          {
            "target": "-beri, -viri",
            "source": "Two",
            "pronunciation": "be-ri / vi-ri"
          },
          {
            "target": "-sano na i-mo",
            "source": "Six",
            "pronunciation": "sa-no na i-mo"
          },
          {
            "target": "I-kumi",
            "source": "Ten",
            "pronunciation": "i-kumi"
          },
          {
            "target": "-nye, -nne",
            "source": "Four",
            "pronunciation": "nye / nne"
          },
          {
            "target": "-sano, -tanu",
            "source": "Five",
            "pronunciation": "sa-no / ta-nu"
          },
          {
            "target": "Ki-anda",
            "source": "Nine",
            "pronunciation": "ki-anda"
          },
          {
            "target": "-satu, -tatu",
            "source": "Three",
            "pronunciation": "sa-tu / ta-tu"
          },
          {
            "target": "-sano na i-were",
            "source": "Seven",
            "pronunciation": "sa-no na i-we-re"
          },
          {
            "target": "-sano na i-satu",
            "source": "Eight",
            "pronunciation": "sa-no na i-sa-tu"
          }
        ],
        "sentences": []
      }
    ]
  }
];
