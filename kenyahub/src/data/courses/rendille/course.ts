import type { CourseUnit, LanguageConfig } from "../types";

// ============================================================
// Rendille (Af-Rendille) Language Course Configuration & Units
// Declarative modular course definition (audit-ready, zero runtime mutations)
// ============================================================

export const RENDILLE_CONFIG: LanguageConfig = {
  "id": "rendille",
  "name": "Rendille",
  "nativeName": "Af-Rendille",
  "family": "Cushitic",
  "counties": [
    "Marsabit",
    "Isiolo"
  ],
  "speakers": "96K",
  "speechLocale": "sw-KE",
  "description": "A Lowland East Cushitic (Omo-Tana) language spoken across the Kaisut and Chalbi deserts of Marsabit County.",
  "color": "#DC2626",
  "sources": [
    "hobley-akamba-ethnology-1910",
    "open-web-swadesh-comparative"
  ]
};

export const RENDILLE_UNITS: CourseUnit[] = [
  {
    "id": "rendille-unit-1",
    "title": "Unit 1: Greetings, Hobley’s (1910) Rendille Camel & Desert Lexicon & Cushitic Numerals",
    "description": "Master Af-Rendille greetings, camel husbandry vocabulary, wildlife, and numerals 1–10 from C. W. Hobley (1910).",
    "icon": "Tractor",
    "skills": [
      {
        "id": "rendille-hobley-1910-lexicon",
        "title": "Greetings, Camel Pastoralism, Wildlife & Numerals",
        "icon": "Tractor",
        "description": "Learn the historic 1910 Rendille vocabulary recorded by C. W. Hobley in Marsabit.",
        "tips": "Af-Rendille is a Lowland East Cushitic language closely allied to Somali. Unlike Somali, Rendille preserves a prefixing conjugation on a larger class of verbs while sharing Cushitic numerals: kow (1), lamma (2), seyya (3), affar (4), chan (5), lih (6), teba (7), siddet (8), saagal (9), tomon (10).",
        "culturalNote": "In Rendille pastoral society around Marsabit and the Kaisut Desert, the 'gob' (clan settlement) centers on the sacred 'naabo' enclosure where elders offer evening prayers for the camels (gaal) and peace (nabad).",
        "words": [
          {
            "target": "Nabad! / Bariya? (resp. Waa nabad!)",
            "source": "Peace! / Good morning? (It is peace!)",
            "pronunciation": "na-bad / ba-ri-ya",
            "hint": "Af-Rendille salutation"
          },
          {
            "target": "gaal / ayyu / oor / nyirakh",
            "source": "Camels (collective) / She-camel / Burden camel / Camel calf",
            "pronunciation": "gaal / ayyu / oor / nyi-rakh",
            "hint": "Hobley (1910, p. 156) Rendille camel lexicon"
          },
          {
            "target": "gob / naabo / min",
            "source": "Clan settlement / Sacred ritual enclosure / House",
            "pronunciation": "gob / naa-bo / min",
            "hint": "Hobley (1910, p. 156)"
          },
          {
            "target": "biyo / caano / soor (huun)",
            "source": "Water / Milk / Food",
            "pronunciation": "bi-yo / caa-no / soor",
            "hint": "Hobley (1910, p. 156)"
          },
          {
            "target": "tor / gashan / bilau / biso / laho",
            "source": "Spear / Shield / Sword-knife / Bow / Arrow",
            "pronunciation": "tor / gashan / bi-lau / bi-so / la-ho",
            "hint": "Hobley (1910, p. 156) Rendille material culture"
          },
          {
            "target": "bahasi / kabih / arbah / worsis / nyugul",
            "source": "Lion / Leopard / Elephant / Rhinoceros / Ostrich",
            "pronunciation": "ba-ha-si / ka-bih / arbah / worsis / nyu-gul",
            "hint": "Hobley (1910, p. 157) northern wildlife"
          },
          {
            "target": "kow",
            "source": "One (1)",
            "pronunciation": "kow lamma seyya affar chan",
            "hint": "Cushitic numerals 1–5"
          },
          {
            "target": "lamma",
            "source": "Two (2)",
            "pronunciation": "kow lamma seyya affar chan",
            "hint": "Cushitic numerals 1–5"
          },
          {
            "target": "seyya",
            "source": "Three (3)",
            "pronunciation": "kow lamma seyya affar chan",
            "hint": "Cushitic numerals 1–5"
          },
          {
            "target": "lih",
            "source": "Six (6)",
            "pronunciation": "lih te-ba siddet saa-gal to-mon",
            "hint": "Cushitic numerals 6–10"
          },
          {
            "target": "teba",
            "source": "Seven (7)",
            "pronunciation": "lih te-ba siddet saa-gal to-mon",
            "hint": "Cushitic numerals 6–10"
          },
          {
            "target": "siddet",
            "source": "Eight (8)",
            "pronunciation": "lih te-ba siddet saa-gal to-mon",
            "hint": "Cushitic numerals 6–10"
          }
        ],
        "sentences": [
          {
            "target": "Gaal waa nolol; biyo waa nabad.",
            "source": "The camel is life; water is peace."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Nabad! / Bariya? (resp. Waa nabad!)\" in Rendille?",
            "correctAnswer": "Peace! / Good morning? (It is peace!)",
            "options": [
              "Camels (collective) / She-camel / Burden camel / Camel calf",
              "Clan settlement / Sacred ritual enclosure / House",
              "Water / Milk / Food",
              "Peace! / Good morning? (It is peace!)"
            ],
            "hint": "Af-Rendille salutation"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"gaal / ayyu / oor / nyirakh\" in Rendille?",
            "correctAnswer": "Camels (collective) / She-camel / Burden camel / Camel calf",
            "options": [
              "Clan settlement / Sacred ritual enclosure / House",
              "Water / Milk / Food",
              "Camels (collective) / She-camel / Burden camel / Camel calf",
              "Peace! / Good morning? (It is peace!)"
            ],
            "hint": "Hobley (1910, p. 156) Rendille camel lexicon"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"gob / naabo / min\" in Rendille?",
            "correctAnswer": "Clan settlement / Sacred ritual enclosure / House",
            "options": [
              "Water / Milk / Food",
              "Clan settlement / Sacred ritual enclosure / House",
              "Peace! / Good morning? (It is peace!)",
              "Camels (collective) / She-camel / Burden camel / Camel calf"
            ],
            "hint": "Hobley (1910, p. 156)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Clan settlement / Sacred ritual enclosure / House\" in Rendille?",
            "correctAnswer": "gob / naabo / min",
            "options": [
              "gob / naabo / min",
              "Nabad! / Bariya? (resp. Waa nabad!)",
              "gaal / ayyu / oor / nyirakh",
              "biyo / caano / soor (huun)"
            ],
            "hint": "gohb / nah-boh / meen"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Water / Milk / Food\" in Rendille?",
            "correctAnswer": "biyo / caano / soor (huun)",
            "options": [
              "Nabad! / Bariya? (resp. Waa nabad!)",
              "gaal / ayyu / oor / nyirakh",
              "gob / naabo / min",
              "biyo / caano / soor (huun)"
            ],
            "hint": "bee-yoh / ah-noh / sohr"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Rendille expression with its English meaning:",
            "correctAnswer": "Nabad! / Bariya? (resp. Waa nabad!): Peace! / Good morning? (It is peace!)",
            "pairs": [
              {
                "left": "Nabad! / Bariya? (resp. Waa nabad!)",
                "right": "Peace! / Good morning? (It is peace!)"
              },
              {
                "left": "gaal / ayyu / oor / nyirakh",
                "right": "Camels (collective) / She-camel / Burden camel / Camel calf"
              },
              {
                "left": "gob / naabo / min",
                "right": "Clan settlement / Sacred ritual enclosure / House"
              },
              {
                "left": "biyo / caano / soor (huun)",
                "right": "Water / Milk / Food"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Rendille term for \"Spear / Shield / Sword-knife / Bow / Arrow\": ___",
            "correctAnswer": "tor / gashan / bilau / biso / laho",
            "options": [
              "Nabad! / Bariya? (resp. Waa nabad!)",
              "gaal / ayyu / oor / nyirakh",
              "gob / naabo / min",
              "tor / gashan / bilau / biso / laho"
            ],
            "hint": "Hobley (1910, p. 156) Rendille material culture"
          }
        ]
      }
    ]
  },
  {
    "id": "rendille-unit-2",
    "title": "Unit 2: Family, Kinship, Clans & Social Organization C. W. Hobley",
    "description": "Master family, kinship, clans & social organization in Rendille (Afi Ren'dille) built directly from Lieut. Ludwig von Höhnel (1894), C. W. Hobley (1910), Bernd Heine (1976), and Günther Schlee (1978).",
    "icon": "Users",
    "skills": [
      {
        "id": "rendille-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "enyenyet (pl. enyenyó)",
            "source": "Person / People",
            "pronunciation": "enyenyet",
            "hint": "Bernd Heine (1976) & Fleming (1964) — Rendille"
          },
          {
            "target": "et (pl. rág)",
            "source": "Man / Husband",
            "pronunciation": "et",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "maxábal (pl. obórri)",
            "source": "Woman / Wife",
            "pronunciation": "ma-xa-bal",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "ínam (pl. yéyye)",
            "source": "Child / Boy",
            "pronunciation": "i-nam",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "ináam",
            "source": "Girl / Daughter",
            "pronunciation": "i-naam",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "abá",
            "source": "Father",
            "pronunciation": "aba",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "ayó",
            "source": "Mother",
            "pronunciation": "ayo",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "Waaq / Waaх",
            "source": "God / Sky",
            "pronunciation": "waaq / waaх",
            "hint": "Rendille Cushitic sky/Supreme Being"
          },
          {
            "target": "makhaabal",
            "source": "Clan elder / ritual leader",
            "pronunciation": "makh-aa-bal"
          }
        ],
        "sentences": [
          {
            "target": "enyenyet — et",
            "source": "Person — Man"
          },
          {
            "target": "maxábal — ínam",
            "source": "Woman — Child"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"enyenyet\" mean in English?",
            "correctAnswer": "Person / People",
            "options": [
              "Person / People",
              "Man / Husband",
              "Woman / Wife",
              "Child / Boy"
            ],
            "hint": "Core vocabulary in Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Man / Husband\"",
            "correctAnswer": "et",
            "acceptedAnswers": [
              "et (pl. rág)",
              "et"
            ],
            "hint": "Starts with \"et\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"maxábal\"",
            "correctAnswer": "Woman",
            "acceptedAnswers": [
              "Woman / Wife",
              "Woman"
            ],
            "hint": "Review Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Kinship Terms, Elders & Household Roles with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "enyenyet",
                "right": "Person"
              },
              {
                "left": "et",
                "right": "Man"
              },
              {
                "left": "maxábal",
                "right": "Woman"
              },
              {
                "left": "ínam",
                "right": "Child"
              },
              {
                "left": "ináam",
                "right": "Girl"
              }
            ]
          }
        ]
      },
      {
        "id": "rendille-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "magáh",
            "source": "Name",
            "pronunciation": "ma-gah",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "arab (saaxiib)",
            "source": "Friend",
            "pronunciation": "a-rab",
            "hint": "Rendille Cushitic vocabulary"
          },
          {
            "target": "abbo yar",
            "source": "Father's brother (paternal uncle)",
            "pronunciation": "ab-bo yar"
          },
          {
            "target": "abti",
            "source": "Mother's brother (maternal uncle)",
            "pronunciation": "ab-ti"
          },
          {
            "target": "inán weyn",
            "source": "Firstborn son (heir to the camel herd)",
            "pronunciation": "inan weyn"
          },
          {
            "target": "goob",
            "source": "Main clan settlement / circular homestead",
            "pronunciation": "goob"
          }
        ],
        "sentences": [
          {
            "target": "magáh — arab",
            "source": "Name — Friend"
          },
          {
            "target": "abbo yar — abti",
            "source": "Father's brother — Mother's brother"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"magáh\" mean in English?",
            "correctAnswer": "Name",
            "options": [
              "Name",
              "Friend",
              "Father's brother (paternal uncle)",
              "Mother's brother (maternal uncle)"
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Friend\"",
            "correctAnswer": "arab",
            "acceptedAnswers": [
              "arab (saaxiib)",
              "arab"
            ],
            "hint": "Starts with \"ar\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"abbo yar\"",
            "correctAnswer": "Father's brother",
            "acceptedAnswers": [
              "Father's brother (paternal uncle)",
              "Father's brother"
            ],
            "hint": "Review Clans, Marriage & Community Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "magáh",
                "right": "Name"
              },
              {
                "left": "arab",
                "right": "Friend"
              },
              {
                "left": "abbo yar",
                "right": "Father's brother"
              },
              {
                "left": "abti",
                "right": "Mother's brother"
              },
              {
                "left": "inán weyn",
                "right": "Firstborn son"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "rendille-unit-3",
    "title": "Unit 3: Numbers, Counting, Currency & Measures C. W. Hobley",
    "description": "Master numbers, counting, currency & measures in Rendille (Afi Ren'dille) built directly from Lieut. Ludwig von Höhnel (1894), C. W. Hobley (1910), Bernd Heine (1976), and Günther Schlee (1978).",
    "icon": "Scale",
    "skills": [
      {
        "id": "rendille-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "ków (adj. kaldai)",
            "source": "One",
            "pronunciation": "kow",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "láma",
            "source": "Two",
            "pronunciation": "la-ma",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "séyyah",
            "source": "Three",
            "pronunciation": "seyyah",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "áfar",
            "source": "Four",
            "pronunciation": "a-far",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "chán",
            "source": "Five",
            "pronunciation": "chan",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "líh",
            "source": "Six",
            "pronunciation": "lih",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "tebá",
            "source": "Seven",
            "pronunciation": "te-ba",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "síet",
            "source": "Eight",
            "pronunciation": "siet",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "saagál",
            "source": "Nine",
            "pronunciation": "saa-gal",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ków (adj. kaldai)\" in Rendille?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
            ],
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"láma\" in Rendille?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
              "One"
            ],
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"séyyah\" in Rendille?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Rendille?",
            "correctAnswer": "séyyah",
            "options": [
              "séyyah",
              "ków (adj. kaldai)",
              "láma",
              "áfar"
            ],
            "hint": "sey-yah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Rendille?",
            "correctAnswer": "áfar",
            "options": [
              "ków (adj. kaldai)",
              "láma",
              "séyyah",
              "áfar"
            ],
            "hint": "a-far"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Rendille expression with its English meaning:",
            "correctAnswer": "ków (adj. kaldai): One",
            "pairs": [
              {
                "left": "ków (adj. kaldai)",
                "right": "One"
              },
              {
                "left": "láma",
                "right": "Two"
              },
              {
                "left": "séyyah",
                "right": "Three"
              },
              {
                "left": "áfar",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Rendille term for \"Five\": ___",
            "correctAnswer": "chán",
            "options": [
              "ków (adj. kaldai)",
              "láma",
              "séyyah",
              "chán"
            ],
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          }
        ]
      },
      {
        "id": "rendille-numbers-measures-trade-measures-3",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "tomón",
            "source": "Ten",
            "pronunciation": "to-mon",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "tomón icóú kow",
            "source": "Eleven (Ten plus one)",
            "pronunciation": "to-mon i-cou kow",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "ków (adj. kaldai)",
            "source": "One",
            "pronunciation": "kow"
          },
          {
            "target": "láma",
            "source": "Two",
            "pronunciation": "la-ma"
          }
        ],
        "sentences": [
          {
            "target": "tomón — tomón icóú kow",
            "source": "Ten — Eleven"
          },
          {
            "target": "ków — láma",
            "source": "One — Two"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"tomón\" mean in English?",
            "correctAnswer": "Ten",
            "options": [
              "Ten",
              "Eleven (Ten plus one)",
              "One",
              "Two"
            ],
            "hint": "Core vocabulary in Trade, Barter, Currency & Traditional Measures"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Eleven (Ten plus one)\"",
            "correctAnswer": "tomón icóú kow",
            "acceptedAnswers": [
              "tomón icóú kow",
              "tomón icóú kow"
            ],
            "hint": "Starts with \"to\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ków\"",
            "correctAnswer": "One",
            "acceptedAnswers": [
              "One",
              "One"
            ],
            "hint": "Review Trade, Barter, Currency & Traditional Measures"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Trade, Barter, Currency & Traditional Measures with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "tomón",
                "right": "Ten"
              },
              {
                "left": "tomón icóú kow",
                "right": "Eleven"
              },
              {
                "left": "ków",
                "right": "One"
              },
              {
                "left": "láma",
                "right": "Two"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "rendille-unit-4",
    "title": "Unit 4: Food, Cuisine, Crops & Livestock Husbandry C. W. Hobley",
    "description": "Master food, cuisine, crops & livestock husbandry in Rendille (Afi Ren'dille) built directly from Lieut. Ludwig von Höhnel (1894), C. W. Hobley (1910), Bernd Heine (1976), and Günther Schlee (1978).",
    "icon": "Milk",
    "skills": [
      {
        "id": "rendille-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "huun (soor)",
            "source": "Food",
            "pronunciation": "huun",
            "hint": "Hobley 1910 Rendille & Cushitic corpus"
          },
          {
            "target": "haan (háan)",
            "source": "Milk",
            "pronunciation": "haan",
            "hint": "Bernd Heine (1976) — Rendille pastoral staple"
          },
          {
            "target": "jíid",
            "source": "Meat",
            "pronunciation": "jiid",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "gaal (sg. nyíro / ayr)",
            "source": "Camel (herd)",
            "pronunciation": "gaal",
            "hint": "Bernd Heine (1976) & Hobley (1910, p. 158) — Rendille camel pastoralism"
          },
          {
            "target": "lólyo (sg. sáa)",
            "source": "Cow / Cattle",
            "pronunciation": "lolyo",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "rriyó",
            "source": "Goat",
            "pronunciation": "rri-yo",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "subáh",
            "source": "Ghee / clarified butter",
            "pronunciation": "subah"
          },
          {
            "target": "caanó gaal",
            "source": "Fresh camel milk",
            "pronunciation": "caano gaal"
          },
          {
            "target": "kaleeló",
            "source": "Curdled / sour milk",
            "pronunciation": "kaleelo"
          }
        ],
        "sentences": [
          {
            "target": "huun — haan",
            "source": "Food — Milk"
          },
          {
            "target": "jíid — gaal",
            "source": "Meat — Camel"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"huun\" mean in English?",
            "correctAnswer": "Food",
            "options": [
              "Food",
              "Milk",
              "Meat",
              "Camel (herd)"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Milk\"",
            "correctAnswer": "haan",
            "acceptedAnswers": [
              "haan (háan)",
              "haan"
            ],
            "hint": "Starts with \"ha\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"jíid\"",
            "correctAnswer": "Meat",
            "acceptedAnswers": [
              "Meat",
              "Meat"
            ],
            "hint": "Review Staple Foods, Cookery & Beverages"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Staple Foods, Cookery & Beverages with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "huun",
                "right": "Food"
              },
              {
                "left": "haan",
                "right": "Milk"
              },
              {
                "left": "jíid",
                "right": "Meat"
              },
              {
                "left": "gaal",
                "right": "Camel"
              },
              {
                "left": "lólyo",
                "right": "Cow"
              }
            ]
          }
        ]
      },
      {
        "id": "rendille-food-agriculture-crops-livestock-4",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "óno",
            "source": "Sheep",
            "pronunciation": "ono",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "kullób",
            "source": "Smoked gourd for storing camel milk",
            "pronunciation": "kullob"
          },
          {
            "target": "madál",
            "source": "Wooden milk container / milking vessel",
            "pronunciation": "madal"
          },
          {
            "target": "huun (soor)",
            "source": "Food",
            "pronunciation": "hoon / sohr"
          }
        ],
        "sentences": [
          {
            "target": "óno — kullób",
            "source": "Sheep — Smoked gourd for storing camel milk"
          },
          {
            "target": "madál — huun",
            "source": "Wooden milk container — Food"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"óno\" mean in English?",
            "correctAnswer": "Sheep",
            "options": [
              "Sheep",
              "Smoked gourd for storing camel milk",
              "Wooden milk container / milking vessel",
              "Food"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Smoked gourd for storing camel milk\"",
            "correctAnswer": "kullób",
            "acceptedAnswers": [
              "kullób",
              "kullób"
            ],
            "hint": "Starts with \"ku\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"madál\"",
            "correctAnswer": "Wooden milk container",
            "acceptedAnswers": [
              "Wooden milk container / milking vessel",
              "Wooden milk container"
            ],
            "hint": "Review Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "óno",
                "right": "Sheep"
              },
              {
                "left": "kullób",
                "right": "Smoked gourd for storing camel milk"
              },
              {
                "left": "madál",
                "right": "Wooden milk container"
              },
              {
                "left": "huun",
                "right": "Food"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "rendille-unit-5",
    "title": "Unit 5: Nature, Landscape, Flora & East African Wildlife C. W. Hobley",
    "description": "Master nature, landscape, flora & east african wildlife in Rendille (Afi Ren'dille) built directly from Lieut. Ludwig von Höhnel (1894), C. W. Hobley (1910), Bernd Heine (1976), and Günther Schlee (1978).",
    "icon": "PawPrint",
    "skills": [
      {
        "id": "rendille-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "biche (biché)",
            "source": "Water",
            "pronunciation": "biche",
            "hint": "Bernd Heine (1976) & Fleming (1964) — Rendille"
          },
          {
            "target": "dáb",
            "source": "Fire",
            "pronunciation": "dab",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "orráh",
            "source": "Sun",
            "pronunciation": "orrah",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "yéyah",
            "source": "Moon / Month",
            "pronunciation": "ye-yah",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "bakál",
            "source": "Star",
            "pronunciation": "ba-kal",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "hír",
            "source": "Rain",
            "pronunciation": "hir",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "géed (pl. geedó)",
            "source": "Tree / Wood",
            "pronunciation": "geed",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "hós",
            "source": "Grass / Pasture",
            "pronunciation": "hos",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "dagáh",
            "source": "Stone / Rock",
            "pronunciation": "da-gah",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"biche (biché)\" in Rendille?",
            "correctAnswer": "Water",
            "options": [
              "Fire",
              "Sun",
              "Moon / Month",
              "Water"
            ],
            "hint": "Bernd Heine (1976) & Fleming (1964) — Rendille"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"dáb\" in Rendille?",
            "correctAnswer": "Fire",
            "options": [
              "Sun",
              "Moon / Month",
              "Fire",
              "Water"
            ],
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"orráh\" in Rendille?",
            "correctAnswer": "Sun",
            "options": [
              "Moon / Month",
              "Sun",
              "Water",
              "Fire"
            ],
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sun\" in Rendille?",
            "correctAnswer": "orráh",
            "options": [
              "orráh",
              "biche (biché)",
              "dáb",
              "yéyah"
            ],
            "hint": "or-rah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Moon / Month\" in Rendille?",
            "correctAnswer": "yéyah",
            "options": [
              "biche (biché)",
              "dáb",
              "orráh",
              "yéyah"
            ],
            "hint": "ye-yah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Rendille expression with its English meaning:",
            "correctAnswer": "biche (biché): Water",
            "pairs": [
              {
                "left": "biche (biché)",
                "right": "Water"
              },
              {
                "left": "dáb",
                "right": "Fire"
              },
              {
                "left": "orráh",
                "right": "Sun"
              },
              {
                "left": "yéyah",
                "right": "Moon / Month"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Rendille term for \"Star\": ___",
            "correctAnswer": "bakál",
            "options": [
              "biche (biché)",
              "dáb",
              "orráh",
              "bakál"
            ],
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          }
        ]
      },
      {
        "id": "rendille-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "hárra",
            "source": "Earth / Ground / Sand",
            "pronunciation": "harra",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "ibéen",
            "source": "Night",
            "pronunciation": "i-been",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "sáah",
            "source": "Day",
            "pronunciation": "saah",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "ukur / hal",
            "source": "Mountain / Hill",
            "pronunciation": "u-kur / hal",
            "hint": "Verified comparative entry across Kenyan cushitic corpus"
          },
          {
            "target": "war (tog)",
            "source": "River",
            "pronunciation": "war",
            "hint": "Verified comparative entry across Kenyan cushitic corpus"
          },
          {
            "target": "tulluu / eel",
            "source": "Water well / desert waterhole",
            "pronunciation": "tul-luu"
          },
          {
            "target": "bakkalcha",
            "source": "Morning star / Venus",
            "pronunciation": "bak-kal-cha"
          },
          {
            "target": "Roob ma da'ay?",
            "source": "Has rain fallen in the pastures?",
            "pronunciation": "roob ma da'ay"
          },
          {
            "target": "roxo / dida",
            "source": "Lava desert / Kaisut & Chalbi plains",
            "pronunciation": "ro-xo"
          }
        ],
        "sentences": [
          {
            "target": "hárra — ibéen",
            "source": "Earth — Night"
          },
          {
            "target": "sáah — ukur",
            "source": "Day — Mountain"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"hárra\" mean in English?",
            "correctAnswer": "Earth / Ground / Sand",
            "options": [
              "Earth / Ground / Sand",
              "Night",
              "Day",
              "Mountain / Hill"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Night\"",
            "correctAnswer": "ibéen",
            "acceptedAnswers": [
              "ibéen",
              "ibéen"
            ],
            "hint": "Starts with \"ib\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"sáah\"",
            "correctAnswer": "Day",
            "acceptedAnswers": [
              "Day",
              "Day"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "hárra",
                "right": "Earth"
              },
              {
                "left": "ibéen",
                "right": "Night"
              },
              {
                "left": "sáah",
                "right": "Day"
              },
              {
                "left": "ukur",
                "right": "Mountain"
              },
              {
                "left": "war",
                "right": "River"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "rendille-unit-6",
    "title": "Unit 6: The Human Body, Health, Medicine & Safety C. W. Hobley",
    "description": "Master the human body, health, medicine & safety in Rendille (Afi Ren'dille) built directly from Lieut. Ludwig von Höhnel (1894), C. W. Hobley (1910), Bernd Heine (1976), and Günther Schlee (1978).",
    "icon": "User",
    "skills": [
      {
        "id": "rendille-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "sám",
            "source": "Nose",
            "pronunciation": "sam",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "áf",
            "source": "Mouth / Language",
            "pronunciation": "af",
            "hint": "Bernd Heine (1976) & Wikipedia Rendille_language"
          },
          {
            "target": "íllax",
            "source": "Tooth",
            "pronunciation": "illax",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "harráb",
            "source": "Tongue",
            "pronunciation": "harrab",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "dahán",
            "source": "Hand / Arm",
            "pronunciation": "da-han",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "lúх",
            "source": "Leg / Foot",
            "pronunciation": "luх",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "díig",
            "source": "Blood",
            "pronunciation": "diig",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "láf",
            "source": "Bone",
            "pronunciation": "laf",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "náh",
            "source": "Breast",
            "pronunciation": "nah",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sám\" in Rendille?",
            "correctAnswer": "Nose",
            "options": [
              "Mouth / Language",
              "Tooth",
              "Tongue",
              "Nose"
            ],
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"áf\" in Rendille?",
            "correctAnswer": "Mouth / Language",
            "options": [
              "Tooth",
              "Tongue",
              "Mouth / Language",
              "Nose"
            ],
            "hint": "Bernd Heine (1976) & Wikipedia Rendille_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"íllax\" in Rendille?",
            "correctAnswer": "Tooth",
            "options": [
              "Tongue",
              "Tooth",
              "Nose",
              "Mouth / Language"
            ],
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tooth\" in Rendille?",
            "correctAnswer": "íllax",
            "options": [
              "íllax",
              "sám",
              "áf",
              "harráb"
            ],
            "hint": "il-lax"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tongue\" in Rendille?",
            "correctAnswer": "harráb",
            "options": [
              "sám",
              "áf",
              "íllax",
              "harráb"
            ],
            "hint": "har-rab"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Rendille expression with its English meaning:",
            "correctAnswer": "sám: Nose",
            "pairs": [
              {
                "left": "sám",
                "right": "Nose"
              },
              {
                "left": "áf",
                "right": "Mouth / Language"
              },
              {
                "left": "íllax",
                "right": "Tooth"
              },
              {
                "left": "harráb",
                "right": "Tongue"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Rendille term for \"Hand / Arm\": ___",
            "correctAnswer": "dahán",
            "options": [
              "sám",
              "áf",
              "íllax",
              "dahán"
            ],
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          }
        ]
      },
      {
        "id": "rendille-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "wáam",
            "source": "Heart",
            "pronunciation": "waam",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "íl (pl. indó)",
            "source": "Eye",
            "pronunciation": "il"
          },
          {
            "target": "nábah (pl. nabhó)",
            "source": "Ear",
            "pronunciation": "na-bah"
          },
          {
            "target": "matáh",
            "source": "Head",
            "pronunciation": "ma-tah"
          },
          {
            "target": "dhiig",
            "source": "Blood drawn for pastoral diet",
            "pronunciation": "dhiig"
          }
        ],
        "sentences": [
          {
            "target": "wáam — íl",
            "source": "Heart — Eye"
          },
          {
            "target": "nábah — matáh",
            "source": "Ear — Head"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"wáam\" mean in English?",
            "correctAnswer": "Heart",
            "options": [
              "Heart",
              "Eye",
              "Ear",
              "Head"
            ],
            "hint": "Core vocabulary in Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Eye\"",
            "correctAnswer": "íl",
            "acceptedAnswers": [
              "íl (pl. indó)",
              "íl"
            ],
            "hint": "Starts with \"íl\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"nábah\"",
            "correctAnswer": "Ear",
            "acceptedAnswers": [
              "Ear",
              "Ear"
            ],
            "hint": "Review Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Health, Traditional Medicine & Emergency Terms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "wáam",
                "right": "Heart"
              },
              {
                "left": "íl",
                "right": "Eye"
              },
              {
                "left": "nábah",
                "right": "Ear"
              },
              {
                "left": "matáh",
                "right": "Head"
              },
              {
                "left": "dhiig",
                "right": "Blood drawn for pastoral diet"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "rendille-unit-7",
    "title": "Unit 7: Core Verbs, Tenses, Negation & Verbal Extensions C. W. Hobley",
    "description": "Master core verbs, tenses, negation & verbal extensions in Rendille (Afi Ren'dille) built directly from Lieut. Ludwig von Höhnel (1894), C. W. Hobley (1910), Bernd Heine (1976), and Günther Schlee (1978).",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "rendille-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "urúd (a-urud)",
            "source": "Sleep",
            "pronunciation": "u-rud",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "amút (a-amut)",
            "source": "Die",
            "pronunciation": "a-mut",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "sií (a-sii)",
            "source": "Give",
            "pronunciation": "sii",
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "target": "agar",
            "source": "To see",
            "pronunciation": "a-gar",
            "hint": "Verified comparative entry across Kenyan cushitic corpus"
          },
          {
            "target": "dagah",
            "source": "To hear",
            "pronunciation": "da-gah",
            "hint": "Verified comparative entry across Kenyan cushitic corpus"
          },
          {
            "target": "ogow (aqan)",
            "source": "To know",
            "pronunciation": "o-gow",
            "hint": "Verified comparative entry across Kenyan cushitic corpus"
          },
          {
            "target": "jecla",
            "source": "To love / like",
            "pronunciation": "jecla",
            "hint": "Verified comparative entry across Kenyan cushitic corpus"
          },
          {
            "target": "sii",
            "source": "To give",
            "pronunciation": "sii",
            "hint": "Verified comparative entry across Kenyan cushitic corpus"
          },
          {
            "target": "kari",
            "source": "To cook",
            "pronunciation": "ka-ri",
            "hint": "Verified comparative entry across Kenyan cushitic corpus"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"urúd (a-urud)\" in Rendille?",
            "correctAnswer": "Sleep",
            "options": [
              "Die",
              "Give",
              "To see",
              "Sleep"
            ],
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"amút (a-amut)\" in Rendille?",
            "correctAnswer": "Die",
            "options": [
              "Give",
              "To see",
              "Die",
              "Sleep"
            ],
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sií (a-sii)\" in Rendille?",
            "correctAnswer": "Give",
            "options": [
              "To see",
              "Give",
              "Sleep",
              "Die"
            ],
            "hint": "Bernd Heine (1976) — Notes on the Rendille Language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Give\" in Rendille?",
            "correctAnswer": "sií (a-sii)",
            "options": [
              "sií (a-sii)",
              "urúd (a-urud)",
              "amút (a-amut)",
              "agar"
            ],
            "hint": "sii"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To see\" in Rendille?",
            "correctAnswer": "agar",
            "options": [
              "urúd (a-urud)",
              "amút (a-amut)",
              "sií (a-sii)",
              "agar"
            ],
            "hint": "ah-gahr"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Rendille expression with its English meaning:",
            "correctAnswer": "urúd (a-urud): Sleep",
            "pairs": [
              {
                "left": "urúd (a-urud)",
                "right": "Sleep"
              },
              {
                "left": "amút (a-amut)",
                "right": "Die"
              },
              {
                "left": "sií (a-sii)",
                "right": "Give"
              },
              {
                "left": "agar",
                "right": "To see"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Rendille term for \"To hear\": ___",
            "correctAnswer": "dagah",
            "options": [
              "urúd (a-urud)",
              "amút (a-amut)",
              "sií (a-sii)",
              "dagah"
            ],
            "hint": "Verified comparative entry across Kenyan cushitic corpus"
          }
        ]
      },
      {
        "id": "rendille-verbs-grammar-verbal-derivatives-7",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "irdá (a-irda)",
            "source": "Go",
            "pronunciation": "ir-da"
          },
          {
            "target": "ahám (a-ham)",
            "source": "Eat",
            "pronunciation": "a-ham"
          },
          {
            "target": "agár (a-agar)",
            "source": "See",
            "pronunciation": "a-gar"
          },
          {
            "target": "amút (a-amut)",
            "source": "Die",
            "pronunciation": "a-mut"
          },
          {
            "target": "nug (a-nug)",
            "source": "Suck",
            "pronunciation": "nug"
          },
          {
            "target": "imít (a-imit)",
            "source": "Come",
            "pronunciation": "i-mit"
          },
          {
            "target": "dagáh (a-dagah)",
            "source": "Hear",
            "pronunciation": "da-gah"
          },
          {
            "target": "aldow (yidhi = say)",
            "source": "Speak",
            "pronunciation": "ahl-dohw"
          },
          {
            "target": "abhúg (a-bhug)",
            "source": "Drink",
            "pronunciation": "a-bhug"
          }
        ],
        "sentences": [
          {
            "target": "irdá — ahám",
            "source": "Go — Eat"
          },
          {
            "target": "agár — amút",
            "source": "See — Die"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"irdá\" mean in English?",
            "correctAnswer": "Go",
            "options": [
              "Go",
              "Eat",
              "See",
              "Die"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Eat\"",
            "correctAnswer": "ahám",
            "acceptedAnswers": [
              "ahám (a-ham)",
              "ahám"
            ],
            "hint": "Starts with \"ah\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"agár\"",
            "correctAnswer": "See",
            "acceptedAnswers": [
              "See",
              "See"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "irdá",
                "right": "Go"
              },
              {
                "left": "ahám",
                "right": "Eat"
              },
              {
                "left": "agár",
                "right": "See"
              },
              {
                "left": "amút",
                "right": "Die"
              },
              {
                "left": "nug",
                "right": "Suck"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "rendille-unit-8",
    "title": "Unit 8: Time, Indigenous Calendar, Seasons & Navigation C. W. Hobley",
    "description": "Master time, indigenous calendar, seasons & navigation in Rendille (Afi Ren'dille) built directly from Lieut. Ludwig von Höhnel (1894), C. W. Hobley (1910), Bernd Heine (1976), and Günther Schlee (1978).",
    "icon": "Compass",
    "skills": [
      {
        "id": "rendille-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "ibéen",
            "source": "Night"
          },
          {
            "target": "sáah",
            "source": "Day",
            "pronunciation": "saah"
          },
          {
            "target": "gúu",
            "source": "Year",
            "pronunciation": "guu"
          },
          {
            "target": "maanta (saanta)",
            "source": "Today",
            "pronunciation": "mahn-tah"
          },
          {
            "target": "guu",
            "source": "Rainy season (long rains)",
            "pronunciation": "guu"
          },
          {
            "target": "nabhai",
            "source": "Long dry season",
            "pronunciation": "nab-hai"
          },
          {
            "target": "yer",
            "source": "Short rains season",
            "pronunciation": "yer"
          },
          {
            "target": "barri",
            "source": "Tomorrow"
          }
        ],
        "sentences": [
          {
            "target": "ibéen — sáah",
            "source": "Night — Day"
          },
          {
            "target": "gúu — maanta",
            "source": "Year — Today"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ibéen\" mean in English?",
            "correctAnswer": "Night",
            "options": [
              "Night",
              "Day",
              "Year",
              "Today"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Day\"",
            "correctAnswer": "sáah",
            "acceptedAnswers": [
              "sáah",
              "sáah"
            ],
            "hint": "Starts with \"sá\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"gúu\"",
            "correctAnswer": "Year",
            "acceptedAnswers": [
              "Year",
              "Year"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ibéen",
                "right": "Night"
              },
              {
                "left": "sáah",
                "right": "Day"
              },
              {
                "left": "gúu",
                "right": "Year"
              },
              {
                "left": "maanta",
                "right": "Today"
              },
              {
                "left": "guu",
                "right": "Rainy season"
              }
            ]
          }
        ]
      },
      {
        "id": "rendille-time-calendar-journey-navigation-8",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Rendille (Afi Ren'dille) (Afi Ren'dille) in C. W. Hobley (1910 Ethnology of A-Kamba, Ch. XVII: Notes on the Randili, Weekdays & Sub-tribes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit.",
        "words": [
          {
            "target": "jit (pl. jitat)",
            "source": "Road / Path",
            "pronunciation": "jit",
            "hint": "Heine (1976) & Schlee (1978) Rendille"
          },
          {
            "target": "foor",
            "source": "Outlying mobile camel camp",
            "pronunciation": "foor",
            "hint": "Schlee (1978) Rendille"
          },
          {
            "target": "harra",
            "source": "Today",
            "pronunciation": "harra",
            "hint": "Heine (1976) Rendille"
          },
          {
            "target": "barri",
            "source": "Tomorrow",
            "pronunciation": "barri",
            "hint": "Heine (1976) Rendille"
          },
          {
            "target": "shale",
            "source": "Yesterday",
            "pronunciation": "sha-le",
            "hint": "Heine (1976) Rendille"
          },
          {
            "target": "orrah",
            "source": "Sun / Daytime",
            "pronunciation": "orrah",
            "hint": "Heine (1976) Rendille"
          }
        ],
        "sentences": [
          {
            "target": "jit — foor",
            "source": "Road — Outlying mobile camel camp"
          },
          {
            "target": "harra — barri",
            "source": "Today — Tomorrow"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"jit\" mean in English?",
            "correctAnswer": "Road / Path",
            "options": [
              "Road / Path",
              "Outlying mobile camel camp",
              "Today",
              "Tomorrow"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Outlying mobile camel camp\"",
            "correctAnswer": "foor",
            "acceptedAnswers": [
              "foor",
              "foor"
            ],
            "hint": "Starts with \"fo\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"harra\"",
            "correctAnswer": "Today",
            "acceptedAnswers": [
              "Today",
              "Today"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "jit",
                "right": "Road"
              },
              {
                "left": "foor",
                "right": "Outlying mobile camel camp"
              },
              {
                "left": "harra",
                "right": "Today"
              },
              {
                "left": "barri",
                "right": "Tomorrow"
              },
              {
                "left": "shale",
                "right": "Yesterday"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "rendille-unit-9-public-domain-corpus",
    "title": "Unit 9: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Rendille (Afi Ren'dille) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "skills": [
      {
        "id": "rendille-pd-corpus-9-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Rendille (Afi Ren'dille) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Rendille (Afi Ren'dille) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "buur (pl. buurbuur)",
            "source": "Big",
            "pronunciation": "buur",
            "hint": "Hobley 1910 Rendille vocabulary"
          },
          {
            "target": "yar (nyirakh = young/small)",
            "source": "Small",
            "pronunciation": "yar",
            "hint": "Hobley 1910 Rendille vocabulary"
          },
          {
            "target": "Almadó",
            "source": "Almadó (new year & ritual cleansing festival)",
            "pronunciation": "alma-do",
            "hint": "Rendille Ritual Calendar — Schlee (1979)"
          },
          {
            "target": "Sorriyo",
            "source": "Sorriyo (sacred camel-blessing festival)",
            "pronunciation": "sorri-yo",
            "hint": "Rendille Ritual Calendar — Schlee (1979)"
          },
          {
            "target": "waakh barid",
            "source": "camel blessing / evening prayer assembly",
            "pronunciation": "waakh ba-rid",
            "hint": "Rendille Oral & Ritual Tradition — Schlee (1979)"
          },
          {
            "target": "her",
            "source": "Circumcised warrior age-set",
            "pronunciation": "her",
            "hint": "Rendille Age-Set System — Schlee (1979)"
          },
          {
            "target": "foor",
            "source": "Dry season pasture camp (satellite youth camp)",
            "pronunciation": "foor",
            "hint": "Rendille Pastoral Ecology — Schlee (1979)"
          },
          {
            "target": "ulukh",
            "source": "Portable curved house poles",
            "pronunciation": "u-lukh",
            "hint": "Rendille Material Culture — Schlee (1979)"
          }
        ],
        "sentences": [
          {
            "target": "waakh barid",
            "source": "camel blessing / evening prayer assembly"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"buur (pl. buurbuur)\" in Rendille?",
            "correctAnswer": "Big",
            "options": [
              "Big",
              "Small",
              "Almadó (new year & ritual cleansing festival)",
              "Sorriyo (sacred camel-blessing festival)"
            ],
            "hint": "Hobley 1910 Rendille vocabulary"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Rendille (Afi Ren'dille) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "buur (pl. buurbuur): Big",
            "pairs": [
              {
                "left": "buur (pl. buurbuur)",
                "right": "Big"
              },
              {
                "left": "yar (nyirakh = young/small)",
                "right": "Small"
              },
              {
                "left": "Almadó",
                "right": "Almadó (new year & ritual cleansing festival)"
              },
              {
                "left": "Sorriyo",
                "right": "Sorriyo (sacred camel-blessing festival)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Rendille (Afi Ren'dille) term for \"camel blessing / evening prayer assembly\": ___",
            "correctAnswer": "waakh barid",
            "options": [
              "waakh barid",
              "her",
              "buur (pl. buurbuur)",
              "yar (nyirakh = young/small)"
            ],
            "hint": "Rendille Oral & Ritual Tradition — Schlee (1979)"
          }
        ]
      },
      {
        "id": "rendille-pd-corpus-9-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Rendille (Afi Ren'dille) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Rendille (Afi Ren'dille) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "daf",
            "source": "Woven camel-loading mat / thatch",
            "pronunciation": "daf",
            "hint": "Rendille Material Culture — Schlee (1979)"
          },
          {
            "target": "koor",
            "source": "Camel bell carved from wood",
            "pronunciation": "koor",
            "hint": "Rendille Material Culture — Schlee (1979)"
          },
          {
            "target": "Burkeneji / Naibor Keneji",
            "source": "White sheep / Ariaal Rendille-Samburu section (Naibor Keneji)",
            "pronunciation": "burke-ne-ji / nai-bor ke-ne-ji",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 166)"
          },
          {
            "target": "Naroshon",
            "source": "Naroshon (Rendille clan of the Sogota & Angata plains)",
            "pronunciation": "na-roshon",
            "hint": "Hon. K. R. Dundas, Notes on the Tribes Inhabiting the Baringo District, JRAI Vol. 40 1910, p."
          },
          {
            "target": "Sere gal",
            "source": "Seventh day of the week (day of the camel)",
            "pronunciation": "se-re gal",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 166 — Randili calendar)"
          },
          {
            "target": "Sere adi",
            "source": "Sixth day of the week (day of sheep and goats; Almadó & Sorio begin)",
            "pronunciation": "se-re adi",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, Part II, Ch. VI, p. 163 — Randili calendar)"
          },
          {
            "target": "Ser hakhan",
            "source": "Fifth day of the week (no-travel / no camp-move / no cattle-medicine day)",
            "pronunciation": "ser hakhan",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, Part II, Ch. VI, p. 163 — Randili calendar)"
          },
          {
            "target": "Kumat",
            "source": "Fourth day of the week",
            "pronunciation": "ku-mat",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, Part II, Ch. VI, p. 163 — Randili calendar)"
          }
        ],
        "sentences": [
          {
            "target": "1. Hahat, 2. Hura hakhan, 3. Sere, 4. Kumat, 5. Ser hakhan, 6. Sere adi, 7. Sere gal.",
            "source": "The seven days of the Randili (Rendille) pastoral week recorded by C. W. Hobley (1910, Part II, Ch. VI, p. 163)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"daf\" in Rendille?",
            "correctAnswer": "Woven camel-loading mat / thatch",
            "options": [
              "Woven camel-loading mat / thatch",
              "Camel bell carved from wood",
              "White sheep / Ariaal Rendille-Samburu section (Naibor Keneji)",
              "Naroshon (Rendille clan of the Sogota & Angata plains)"
            ],
            "hint": "Rendille Material Culture — Schlee (1979)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Rendille (Afi Ren'dille) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "daf: Woven camel-loading mat / thatch",
            "pairs": [
              {
                "left": "daf",
                "right": "Woven camel-loading mat / thatch"
              },
              {
                "left": "koor",
                "right": "Camel bell carved from wood"
              },
              {
                "left": "Burkeneji / Naibor Keneji",
                "right": "White sheep / Ariaal Rendille-Samburu section (Naibor Keneji)"
              },
              {
                "left": "Naroshon",
                "right": "Naroshon (Rendille clan of the Sogota & Angata plains)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Rendille (Afi Ren'dille) term for \"Seventh day of the week (day of the camel)\": ___",
            "correctAnswer": "Sere gal",
            "options": [
              "Sere gal",
              "Sere adi",
              "daf",
              "koor"
            ],
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, Part II, Ch. VI, p. 163 — Randili calendar)"
          }
        ]
      }
    ]
  },
  {
    "id": "rendille-unit-10-open-datasets-modern",
    "title": "Unit 10: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Rendille (Afi Ren'dille) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "skills": [
      {
        "id": "rendille-open-dataset-10-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Sun",
        "description": "Learn core Rendille (Afi Ren'dille) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Rendille (Afi Ren'dille) dialects and everyday speech.",
        "words": [
          {
            "target": "Sere",
            "source": "Third day of the week (sere = day)",
            "pronunciation": "se-re",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, Part II, Ch. VI, p. 163 — Randili calendar)"
          },
          {
            "target": "Hura hakhan (hura = sun)",
            "source": "Second day of the week (day of rest / Sabbath)",
            "pronunciation": "hu-ra hakhan",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, Part II, Ch. VI, p. 163 — Randili calendar)"
          },
          {
            "target": "Hahat",
            "source": "First day of the week (fast and prayer day)",
            "pronunciation": "ha-hat",
            "hint": "C. W. Hobley, Ethnology of A-Kamba and Other East African Tribes (1910, Part II, Ch. VI, p. 163 — Randili calendar)"
          },
          {
            "target": "tumbo",
            "source": "Tobacco",
            "pronunciation": "tumbo",
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          },
          {
            "target": "diri",
            "source": "Cooking Pot",
            "pronunciation": "di-ri",
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          },
          {
            "target": "birlab",
            "source": "Iron",
            "pronunciation": "birlab",
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          },
          {
            "target": "laho",
            "source": "Arrow",
            "pronunciation": "la-ho",
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          },
          {
            "target": "biso",
            "source": "Bow",
            "pronunciation": "bi-so",
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Sere\" in Rendille?",
            "correctAnswer": "Third day of the week (sere = day)",
            "options": [
              "Third day of the week (sere = day)",
              "Second day of the week (day of rest / Sabbath)",
              "First day of the week (fast and prayer day)",
              "Tobacco"
            ],
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, Part II, Ch. VI, p. 163 — Randili calendar)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Rendille (Afi Ren'dille) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Sere: Third day of the week (sere = day)",
            "pairs": [
              {
                "left": "Sere",
                "right": "Third day of the week (sere = day)"
              },
              {
                "left": "Hura hakhan (hura = sun)",
                "right": "Second day of the week (day of rest / Sabbath)"
              },
              {
                "left": "Hahat",
                "right": "First day of the week (fast and prayer day)"
              },
              {
                "left": "tumbo",
                "right": "Tobacco"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Rendille (Afi Ren'dille) term for \"Cooking Pot\": ___",
            "correctAnswer": "diri",
            "options": [
              "diri",
              "birlab",
              "Sere",
              "Hura hakhan (hura = sun)"
            ],
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          }
        ]
      },
      {
        "id": "rendille-open-dataset-10-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Rendille (Afi Ren'dille) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Rendille (Afi Ren'dille) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "bilau",
            "source": "Sword / Knife",
            "pronunciation": "bi-lau",
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          },
          {
            "target": "gashan",
            "source": "Shield",
            "pronunciation": "gashan",
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          },
          {
            "target": "nyugul",
            "source": "Ostrich",
            "pronunciation": "nyu-gul",
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          },
          {
            "target": "worsis",
            "source": "Rhinoceros",
            "pronunciation": "worsis",
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          },
          {
            "target": "arbah",
            "source": "Elephant",
            "pronunciation": "arbah",
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          },
          {
            "target": "kabih",
            "source": "Leopard",
            "pronunciation": "ka-bih",
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          },
          {
            "target": "faras",
            "source": "Horse",
            "pronunciation": "fa-ras",
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          },
          {
            "target": "eyhel",
            "source": "Donkey",
            "pronunciation": "eyhel",
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"bilau\" in Rendille?",
            "correctAnswer": "Sword / Knife",
            "options": [
              "Sword / Knife",
              "Shield",
              "Ostrich",
              "Rhinoceros"
            ],
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Rendille (Afi Ren'dille) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "bilau: Sword / Knife",
            "pairs": [
              {
                "left": "bilau",
                "right": "Sword / Knife"
              },
              {
                "left": "gashan",
                "right": "Shield"
              },
              {
                "left": "nyugul",
                "right": "Ostrich"
              },
              {
                "left": "worsis",
                "right": "Rhinoceros"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Rendille (Afi Ren'dille) term for \"Elephant\": ___",
            "correctAnswer": "arbah",
            "options": [
              "arbah",
              "kabih",
              "bilau",
              "gashan"
            ],
            "hint": "Johnston (1902, Vol. II) & Hobley (1910, pp. 162–163) — Rendille pastoral lexicon"
          }
        ]
      }
    ]
  }
];
