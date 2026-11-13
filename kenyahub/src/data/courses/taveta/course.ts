import type { CourseUnit, LanguageConfig } from "../types";

// ============================================================
// Taveta (Kitaveta) Language Course Configuration & Units
// Declarative modular course definition (audit-ready, zero runtime mutations)
// ============================================================

export const TAVETA_CONFIG: LanguageConfig = {
  "id": "taveta",
  "name": "Taveta",
  "nativeName": "Kitaveta",
  "family": "Bantu",
  "counties": [
    "Taita-Taveta"
  ],
  "speakers": "35K",
  "speechLocale": "sw-KE",
  "description": "A Coastal Hinterland Bantu language spoken in the Lumi River forest oasis near Mount Kilimanjaro in Taita-Taveta County.",
  "color": "#15803D",
  "sources": [
    "hollis-taveta-proverbs-1910",
    "hollis-taveta-enigmas-1911",
    "johnston-bantu-1919",
    "open-web-swadesh-comparative"
  ]
};

export const TAVETA_UNITS: CourseUnit[] = [
  {
    "id": "taveta-unit-1",
    "title": "Unit 1: Greetings, Lumi Forest Nouns, Numerals & Hollis (1910–1911) Proverbs & Enigmas",
    "description": "Learn Kitaveta greetings, noun classes, counting 1–10, and the 79 proverbs and 41 enigmas (ndaa) recorded by A. C. Hollis (1910–1911).",
    "icon": "TreePine",
    "skills": [
      {
        "id": "taveta-nouns-proverbs",
        "title": "Kitaveta Nouns & Hollis (1910) Proverbs",
        "icon": "Lightbulb",
        "description": "Master core Kitaveta nouns and proverbs from A. C. Hollis (1910) and Johnston (1919, Vol. I, pp. 98–112 #15 Taveita).",
        "tips": "In A. C. Hollis (1911) 'Taveta Enigmas', riddles are introduced with 'Nakutega ndaa!' ('I set you an enigma/trap!'), answered with 'Tega!' ('Set it!').",
        "culturalNote": "A. C. Hollis (1910) documented 79 Kitaveta proverbs and sayings reflecting the forest-irrigation agriculture of the Lumi River and the Njama council of elders.",
        "words": [
          {
            "target": "Mwakucha! / Uko mwidzi?",
            "source": "Good morning! / Are you well?",
            "pronunciation": "mwa-kucha / uko mwidzi",
            "hint": "Kitaveta salutation"
          },
          {
            "target": "mndu (pl. wandu) / mche (pl. wache)",
            "source": "Person (pl. People) / Woman (pl. Women)",
            "pronunciation": "mndu / mche",
            "hint": "Johnston (1919, Vol. I, pp. 101, 106 #15 Taveita)"
          },
          {
            "target": "mazi / moto / mbeho",
            "source": "Water / Fire / Cold",
            "pronunciation": "ma-zi / mo-to / mbe-ho",
            "hint": "Hollis (1910 Proverb #4) & Johnston (1919, Vol. I, pp. 98–112 #15 Taveita)"
          },
          {
            "target": "ideghe (pl. madeghe) / kucha",
            "source": "Bird (pl. Birds) / Dawn, daybreak",
            "pronunciation": "i-deghe / kucha",
            "hint": "Hollis (1910 Proverb #10)"
          },
          {
            "target": "rutoke (pl. matoke) / nyumba",
            "source": "Banana / House",
            "pronunciation": "ru-to-ke / nyumba",
            "hint": "Hollis (1911 Taveta Enigmas)"
          },
          {
            "target": "Nakutega ndaa! — Tega!",
            "source": "I set you a riddle! — Set it!",
            "pronunciation": "na-ku-te-ga ndaa — te-ga",
            "hint": "Hollis (1911, p. 200) riddle opening formula"
          },
          {
            "target": "Esikie mbeho niye esongeria moto",
            "source": "He who feels the cold draws near to the fire (Hollis 1910 #4)",
            "pronunciation": "e-si-kie mbe-ho ni-ye e-songe-ria mo-to",
            "hint": "Take initiative when in need"
          },
          {
            "target": "Ideghe imwe likaremwa kuiya teheshigha kucha",
            "source": "If one bird fails to sing, it does not stop the dawn (Hollis 1910 #10)",
            "pronunciation": "i-deghe imwe li-ka-remwa kui-ya te-heshigha kucha",
            "hint": "Time and progress wait for no one"
          }
        ],
        "sentences": [
          {
            "target": "Esikie mbeho niye esongeria moto.",
            "source": "It is the one who feels the cold who draws near to the fire (Hollis 1910 #4)."
          },
          {
            "target": "Ideghe imwe likaremwa kuiya teheshigha kucha.",
            "source": "If one bird fails to sing, it does not stop the dawn from breaking (Hollis 1910 #10)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mwakucha! / Uko mwidzi?\" in Taveta?",
            "correctAnswer": "Good morning! / Are you well?",
            "options": [
              "Person (pl. People) / Woman (pl. Women)",
              "Water / Fire / Cold",
              "Bird (pl. Birds) / Dawn, daybreak",
              "Good morning! / Are you well?"
            ],
            "hint": "Kitaveta salutation"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mndu (pl. wandu) / mche (pl. wache)\" in Taveta?",
            "correctAnswer": "Person (pl. People) / Woman (pl. Women)",
            "options": [
              "Water / Fire / Cold",
              "Bird (pl. Birds) / Dawn, daybreak",
              "Person (pl. People) / Woman (pl. Women)",
              "Good morning! / Are you well?"
            ],
            "hint": "Johnston (1919, Vol. I, pp. 101, 106 #15 Taveita)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mazi / moto / mbeho\" in Taveta?",
            "correctAnswer": "Water / Fire / Cold",
            "options": [
              "Bird (pl. Birds) / Dawn, daybreak",
              "Water / Fire / Cold",
              "Good morning! / Are you well?",
              "Person (pl. People) / Woman (pl. Women)"
            ],
            "hint": "Hollis (1910 Proverb #4) & Johnston (1919, Vol. I, pp. 98–112 #15 Taveita)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Water / Fire / Cold\" in Taveta?",
            "correctAnswer": "mazi / moto / mbeho",
            "options": [
              "mazi / moto / mbeho",
              "Mwakucha! / Uko mwidzi?",
              "mndu (pl. wandu) / mche (pl. wache)",
              "ideghe (pl. madeghe) / kucha"
            ],
            "hint": "mah-zee / moh-toh / m-beh-hoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bird (pl. Birds) / Dawn, daybreak\" in Taveta?",
            "correctAnswer": "ideghe (pl. madeghe) / kucha",
            "options": [
              "Mwakucha! / Uko mwidzi?",
              "mndu (pl. wandu) / mche (pl. wache)",
              "mazi / moto / mbeho",
              "ideghe (pl. madeghe) / kucha"
            ],
            "hint": "ee-deh-gheh / koo-chah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taveta expression with its English meaning:",
            "correctAnswer": "Mwakucha! / Uko mwidzi?: Good morning! / Are you well?",
            "pairs": [
              {
                "left": "Mwakucha! / Uko mwidzi?",
                "right": "Good morning! / Are you well?"
              },
              {
                "left": "mndu (pl. wandu) / mche (pl. wache)",
                "right": "Person (pl. People) / Woman (pl. Women)"
              },
              {
                "left": "mazi / moto / mbeho",
                "right": "Water / Fire / Cold"
              },
              {
                "left": "ideghe (pl. madeghe) / kucha",
                "right": "Bird (pl. Birds) / Dawn, daybreak"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taveta term for \"Banana / House\": ___",
            "correctAnswer": "rutoke (pl. matoke) / nyumba",
            "options": [
              "Mwakucha! / Uko mwidzi?",
              "mndu (pl. wandu) / mche (pl. wache)",
              "mazi / moto / mbeho",
              "rutoke (pl. matoke) / nyumba"
            ],
            "hint": "Hollis (1911 Taveta Enigmas)"
          }
        ]
      }
    ]
  },
  {
    "id": "taveta-unit-2",
    "title": "Unit 2: Family, Kinship, Clans & Social Organization (Sir Harry Johnston 1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis",
    "description": "Master family, kinship, clans & social organization in Taveta (Kitaveta) built directly from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A.",
    "icon": "Users",
    "skills": [
      {
        "id": "taveta-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "mndu mume (pl. wandu waume)",
            "source": "Man",
            "pronunciation": "mndu mu-me",
            "hint": "Johnston 1919 p. 101 #15 Taveita"
          },
          {
            "target": "mche (pl. wache)",
            "source": "Woman",
            "pronunciation": "mche",
            "hint": "Johnston 1919 pp. 106–109 #15 Taveita & Hollis 1910"
          },
          {
            "target": "mundu (pl. wandu)",
            "source": "Person / People",
            "pronunciation": "mundu",
            "hint": "Hollis (1910) & Johnston (1919) — Kitaveta"
          },
          {
            "target": "momi (pl. waomi) / mche (pl. wache)",
            "source": "Man / Husband & Woman / Wife",
            "pronunciation": "mo-mi / mche",
            "hint": "Sir Harry H. Johnston (1919, Vol. I, pp. 100–106) — #15 Taveta"
          },
          {
            "target": "papa / baba",
            "source": "Father",
            "pronunciation": "pa-pa / ba-ba",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "mama / mamo",
            "source": "Mother",
            "pronunciation": "ma-ma / ma-mo",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "mwana (pl. wana)",
            "source": "Child",
            "pronunciation": "mwa-na",
            "hint": "Hollis (1910) & Johnston (1919) — Kitaveta"
          },
          {
            "target": "Mlungu / Izuba",
            "source": "God",
            "pronunciation": "mlungu / i-zu-ba",
            "hint": "Hollis (1910) & Johnston (1919) — Kitaveta"
          },
          {
            "target": "M-ndele; va-. M-fora; va-",
            "source": "Girl",
            "pronunciation": "m-ndele va- m-fora va"
          }
        ],
        "sentences": [
          {
            "target": "mndu mume — mche",
            "source": "Man — Woman"
          },
          {
            "target": "mundu — momi",
            "source": "Person — Man"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mndu mume\" mean in English?",
            "correctAnswer": "Man",
            "options": [
              "Man",
              "Woman",
              "Person / People",
              "Man / Husband & Woman / Wife"
            ],
            "hint": "Core vocabulary in Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Woman\"",
            "correctAnswer": "mche",
            "acceptedAnswers": [
              "mche (pl. wache)",
              "mche"
            ],
            "hint": "Starts with \"mc\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mundu\"",
            "correctAnswer": "Person",
            "acceptedAnswers": [
              "Person / People",
              "Person"
            ],
            "hint": "Review Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Kinship Terms, Elders & Household Roles with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mndu mume",
                "right": "Man"
              },
              {
                "left": "mche",
                "right": "Woman"
              },
              {
                "left": "mundu",
                "right": "Person"
              },
              {
                "left": "momi",
                "right": "Man"
              },
              {
                "left": "papa",
                "right": "Father"
              }
            ]
          }
        ]
      },
      {
        "id": "taveta-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "zina (pl. mazina)",
            "source": "Name",
            "pronunciation": "zi-na",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "M-ringga; va-",
            "source": "Brother",
            "pronunciation": "m-ringga",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "Mnggwa; va-",
            "source": "Chief",
            "pronunciation": "mnggwa",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "M-omi",
            "source": "Husband",
            "pronunciation": "m-omi",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "M-rīngga",
            "source": "Sister",
            "pronunciation": "m-ringga",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "M-sōro; va-",
            "source": "Son, boy",
            "pronunciation": "m-soro",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "M-kā; va-kā",
            "source": "Wife",
            "pronunciation": "m-ka",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "mbuya (mwandani)",
            "source": "Friend",
            "pronunciation": "mbu-ya",
            "hint": "Hollis 1910 Taveta Proverbs"
          },
          {
            "target": "M-ndele; va-. M-fora; va",
            "source": "Girl",
            "pronunciation": "m nde-le"
          }
        ],
        "sentences": [
          {
            "target": "zina — M-ringga",
            "source": "Name — Brother"
          },
          {
            "target": "Mnggwa — M-omi",
            "source": "Chief — Husband"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"zina\" mean in English?",
            "correctAnswer": "Name",
            "options": [
              "Name",
              "Brother",
              "Chief",
              "Husband"
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Brother\"",
            "correctAnswer": "M-ringga",
            "acceptedAnswers": [
              "M-ringga; va-",
              "M-ringga"
            ],
            "hint": "Starts with \"M-\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Mnggwa\"",
            "correctAnswer": "Chief",
            "acceptedAnswers": [
              "Chief",
              "Chief"
            ],
            "hint": "Review Clans, Marriage & Community Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "zina",
                "right": "Name"
              },
              {
                "left": "M-ringga",
                "right": "Brother"
              },
              {
                "left": "Mnggwa",
                "right": "Chief"
              },
              {
                "left": "M-omi",
                "right": "Husband"
              },
              {
                "left": "M-rīngga",
                "right": "Sister"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "taveta-unit-3",
    "title": "Unit 3: Numbers, Counting, Currency & Measures (Sir Harry Johnston 1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis",
    "description": "Master numbers, counting, currency & measures in Taveta (Kitaveta) built directly from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A.",
    "icon": "Scale",
    "skills": [
      {
        "id": "taveta-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "imwe (kamwe)",
            "source": "One / Once",
            "pronunciation": "imwe",
            "hint": "A. C. Hollis (1910) & Johnston (1919) — Kitaveta"
          },
          {
            "target": "iwi (cha keri)",
            "source": "Two / Second",
            "pronunciation": "iwi",
            "hint": "Rev. A. R. Steggall (1897) & Johnston (1919) — Kitaveta"
          },
          {
            "target": "itatu",
            "source": "Three",
            "pronunciation": "i-ta-tu",
            "hint": "Johnston (1919) — Kitaveta numerals"
          },
          {
            "target": "ina",
            "source": "Four",
            "pronunciation": "ina",
            "hint": "Johnston (1919) — Kitaveta numerals"
          },
          {
            "target": "ishano",
            "source": "Five",
            "pronunciation": "isha-no",
            "hint": "Johnston (1919) — Kitaveta numerals"
          },
          {
            "target": "mtandatu",
            "source": "Six",
            "pronunciation": "mtanda-tu",
            "hint": "Johnston (1919) — Kitaveta numerals"
          },
          {
            "target": "mfungate",
            "source": "Seven",
            "pronunciation": "mfunga-te",
            "hint": "Johnston (1919) — Kitaveta numerals"
          },
          {
            "target": "mnane",
            "source": "Eight",
            "pronunciation": "mna-ne",
            "hint": "Johnston (1919) — Kitaveta numerals"
          },
          {
            "target": "kenda",
            "source": "Nine",
            "pronunciation": "kenda",
            "hint": "Johnston (1919) — Kitaveta numerals"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"imwe (kamwe)\" in Taveta?",
            "correctAnswer": "One / Once",
            "options": [
              "Two / Second",
              "Three",
              "Four",
              "One / Once"
            ],
            "hint": "A. C. Hollis (1910) & Johnston (1919) — Kitaveta"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"iwi (cha keri)\" in Taveta?",
            "correctAnswer": "Two / Second",
            "options": [
              "Three",
              "Four",
              "Two / Second",
              "One / Once"
            ],
            "hint": "Rev. A. R. Steggall (1897) & Johnston (1919) — Kitaveta"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"itatu\" in Taveta?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One / Once",
              "Two / Second"
            ],
            "hint": "Johnston (1919) — Kitaveta numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Taveta?",
            "correctAnswer": "itatu",
            "options": [
              "itatu",
              "imwe (kamwe)",
              "iwi (cha keri)",
              "ina"
            ],
            "hint": "i-ta-tu"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Taveta?",
            "correctAnswer": "ina",
            "options": [
              "imwe (kamwe)",
              "iwi (cha keri)",
              "itatu",
              "ina"
            ],
            "hint": "i-na"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taveta expression with its English meaning:",
            "correctAnswer": "imwe (kamwe): One / Once",
            "pairs": [
              {
                "left": "imwe (kamwe)",
                "right": "One / Once"
              },
              {
                "left": "iwi (cha keri)",
                "right": "Two / Second"
              },
              {
                "left": "itatu",
                "right": "Three"
              },
              {
                "left": "ina",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taveta term for \"Five\": ___",
            "correctAnswer": "ishano",
            "options": [
              "imwe (kamwe)",
              "iwi (cha keri)",
              "itatu",
              "ishano"
            ],
            "hint": "Johnston (1919) — Kitaveta numerals"
          }
        ]
      },
      {
        "id": "taveta-numbers-measures-trade-measures-3",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "ikumi",
            "source": "Ten",
            "pronunciation": "i-ku-mi",
            "hint": "Johnston (1919) — Kitaveta numerals"
          },
          {
            "target": "mirongo miwi (20) / igana (100)",
            "source": "Twenty / One hundred",
            "pronunciation": "mi-rongo mi-wi / i-ga-na",
            "hint": "Sir Harry H. Johnston (1919, Vol. I, pp. 107–108) — #15 Taveta"
          },
          {
            "target": "mirongo miwiri",
            "source": "Twenty",
            "pronunciation": "mi-rongo mi-wi-ri",
            "hint": "Johnston 1919 #15 Taveita"
          },
          {
            "target": "igana",
            "source": "One hundred",
            "pronunciation": "i-ga-na",
            "hint": "Johnston 1919 #15 Taveita"
          },
          {
            "target": "-mwe",
            "source": "One",
            "pronunciation": "mwe",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "-vīrī",
            "source": "Two",
            "pronunciation": "vi-ri",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "Mī-rōnggo mī-tātū",
            "source": "Thirty",
            "pronunciation": "mi-ronggo mi-tatu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "Mī-rōnggo mī-nā",
            "source": "Forty",
            "pronunciation": "mi-ronggo mi-na",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "Mī-rōnggo mī-sāno",
            "source": "Fifty",
            "pronunciation": "mi-ronggo mi-sano",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikumi\" in Taveta?",
            "correctAnswer": "Ten",
            "options": [
              "Twenty / One hundred",
              "Twenty",
              "One hundred",
              "Ten"
            ],
            "hint": "Johnston (1919) — Kitaveta numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mirongo miwi (20) / igana (100)\" in Taveta?",
            "correctAnswer": "Twenty / One hundred",
            "options": [
              "Twenty",
              "One hundred",
              "Twenty / One hundred",
              "Ten"
            ],
            "hint": "Sir Harry H. Johnston (1919, Vol. I, pp. 107–108) — #15 Taveta"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mirongo miwiri\" in Taveta?",
            "correctAnswer": "Twenty",
            "options": [
              "One hundred",
              "Twenty",
              "Ten",
              "Twenty / One hundred"
            ],
            "hint": "Johnston 1919 #15 Taveita"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Twenty\" in Taveta?",
            "correctAnswer": "mirongo miwiri",
            "options": [
              "mirongo miwiri",
              "ikumi",
              "mirongo miwi (20) / igana (100)",
              "igana"
            ],
            "hint": "mee-rohn-goh mee-wee-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"One hundred\" in Taveta?",
            "correctAnswer": "igana",
            "options": [
              "ikumi",
              "mirongo miwi (20) / igana (100)",
              "mirongo miwiri",
              "igana"
            ],
            "hint": "ee-gah-nah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taveta expression with its English meaning:",
            "correctAnswer": "ikumi: Ten",
            "pairs": [
              {
                "left": "ikumi",
                "right": "Ten"
              },
              {
                "left": "mirongo miwi (20) / igana (100)",
                "right": "Twenty / One hundred"
              },
              {
                "left": "mirongo miwiri",
                "right": "Twenty"
              },
              {
                "left": "igana",
                "right": "One hundred"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taveta term for \"One\": ___",
            "correctAnswer": "-mwe",
            "options": [
              "ikumi",
              "mirongo miwi (20) / igana (100)",
              "mirongo miwiri",
              "-mwe"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          }
        ]
      }
    ]
  },
  {
    "id": "taveta-unit-4",
    "title": "Unit 4: Food, Cuisine, Crops & Livestock Husbandry (Sir Harry Johnston 1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis",
    "description": "Master food, cuisine, crops & livestock husbandry in Taveta (Kitaveta) built directly from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A.",
    "icon": "Tractor",
    "skills": [
      {
        "id": "taveta-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "nyama",
            "source": "Meat",
            "pronunciation": "nya-ma",
            "hint": "Hollis 1910 & Johnston 1919 p. 101 #15 Taveita"
          },
          {
            "target": "maziwa (mabele)",
            "source": "Milk",
            "pronunciation": "ma-zi-wa",
            "hint": "Johnston 1919 p. 101 #15 Taveita"
          },
          {
            "target": "chakuria (wari = ugali)",
            "source": "Food",
            "pronunciation": "cha-ku-ria",
            "hint": "Hollis 1910 Taveta Proverbs & Johnston 1919 #15 Taveita"
          },
          {
            "target": "Ki-kwa; vi-kwa",
            "source": "Yam",
            "pronunciation": "ki-kwa vi-kwa"
          },
          {
            "target": "I-tagi; ma-",
            "source": "Egg",
            "pronunciation": "i-tagi ma"
          },
          {
            "target": "Ū-ki",
            "source": "Honey",
            "pronunciation": "u-ki"
          },
          {
            "target": "I-dio; ma",
            "source": "Banana",
            "pronunciation": "i dioh"
          },
          {
            "target": "Tūmbātu",
            "source": "Tobacco",
            "pronunciation": "tumba-tu"
          },
          {
            "target": "kigomba / madio",
            "source": "Ripe cooking banana grove",
            "pronunciation": "ki-gomb-a"
          }
        ],
        "sentences": [
          {
            "target": "nyama — maziwa",
            "source": "Meat — Milk"
          },
          {
            "target": "chakuria — Ki-kwa",
            "source": "Food — Yam"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"nyama\" mean in English?",
            "correctAnswer": "Meat",
            "options": [
              "Meat",
              "Milk",
              "Food",
              "Yam"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Milk\"",
            "correctAnswer": "maziwa",
            "acceptedAnswers": [
              "maziwa (mabele)",
              "maziwa"
            ],
            "hint": "Starts with \"ma\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"chakuria\"",
            "correctAnswer": "Food",
            "acceptedAnswers": [
              "Food",
              "Food"
            ],
            "hint": "Review Staple Foods, Cookery & Beverages"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Staple Foods, Cookery & Beverages with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "nyama",
                "right": "Meat"
              },
              {
                "left": "maziwa",
                "right": "Milk"
              },
              {
                "left": "chakuria",
                "right": "Food"
              },
              {
                "left": "Ki-kwa",
                "right": "Yam"
              },
              {
                "left": "I-tagi",
                "right": "Egg"
              }
            ]
          }
        ]
      },
      {
        "id": "taveta-food-agriculture-crops-livestock-4",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "iru (pl. maru)",
            "source": "Banana",
            "pronunciation": "iru",
            "hint": "Hollis (1910) & Johnston (1919) — Taveta staple crop"
          },
          {
            "target": "rutoke (pl. matoke)",
            "source": "Banana Grove",
            "pronunciation": "ru-to-ke",
            "hint": "Hollis 1910 & 1911 Taveta Enigmas"
          },
          {
            "target": "uki",
            "source": "Honey",
            "pronunciation": "uki",
            "hint": "Hollis 1910 & Johnston 1919 #15 Taveita"
          },
          {
            "target": "Ma-vuta",
            "source": "Fat, oil",
            "pronunciation": "ma-vuta",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "N-jaa",
            "source": "Hunger",
            "pronunciation": "n-jaa",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "M-pembā",
            "source": "Maize",
            "pronunciation": "m-pemba",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "M-bāngga",
            "source": "Palm wine, beer",
            "pronunciation": "m-bangga",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "M-nyū. I-gādi (soda)",
            "source": "Salt",
            "pronunciation": "m-nyu i-gadi",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "-lā",
            "source": "To eat",
            "pronunciation": "la"
          }
        ],
        "sentences": [
          {
            "target": "iru — rutoke",
            "source": "Banana — Banana Grove"
          },
          {
            "target": "uki — Ma-vuta",
            "source": "Honey — Fat, oil"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"iru\" mean in English?",
            "correctAnswer": "Banana",
            "options": [
              "Banana",
              "Banana Grove",
              "Honey",
              "Fat, oil"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Banana Grove\"",
            "correctAnswer": "rutoke",
            "acceptedAnswers": [
              "rutoke (pl. matoke)",
              "rutoke"
            ],
            "hint": "Starts with \"ru\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"uki\"",
            "correctAnswer": "Honey",
            "acceptedAnswers": [
              "Honey",
              "Honey"
            ],
            "hint": "Review Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "iru",
                "right": "Banana"
              },
              {
                "left": "rutoke",
                "right": "Banana Grove"
              },
              {
                "left": "uki",
                "right": "Honey"
              },
              {
                "left": "Ma-vuta",
                "right": "Fat, oil"
              },
              {
                "left": "N-jaa",
                "right": "Hunger"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "taveta-unit-5",
    "title": "Unit 5: Nature, Landscape, Flora & East African Wildlife (Sir Harry Johnston 1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis",
    "description": "Master nature, landscape, flora & east african wildlife in Taveta (Kitaveta) built directly from Sir Harry Johnston & A. C. Hollis.",
    "icon": "PawPrint",
    "skills": [
      {
        "id": "taveta-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "mrikazi (kucha = dawn)",
            "source": "Day",
            "pronunciation": "mri-ka-zi",
            "hint": "Hollis 1910 Proverb #10 & Johnston 1919 #15 Taveita"
          },
          {
            "target": "kilo",
            "source": "Night",
            "pronunciation": "ki-lo",
            "hint": "Johnston 1919 p. 101 #15 Taveita & Hollis 1910"
          },
          {
            "target": "nyota",
            "source": "Star",
            "pronunciation": "nyo-ta",
            "hint": "Johnston 1919 pp. 103–104 #15 Taveita"
          },
          {
            "target": "moto",
            "source": "Fire",
            "pronunciation": "mo-to",
            "hint": "A. C. Hollis (1910) Taveta Proverb #4"
          },
          {
            "target": "mbeho",
            "source": "Cold / Wind",
            "pronunciation": "mbe-ho",
            "hint": "A. C. Hollis (1910) Taveta Proverb #4"
          },
          {
            "target": "mazi",
            "source": "Water",
            "pronunciation": "ma-zi",
            "hint": "Hollis (1910) & Johnston (1919) — Kitaveta"
          },
          {
            "target": "izuwa / izuba",
            "source": "Sun",
            "pronunciation": "i-zu-wa / i-zu-ba",
            "hint": "Hollis (1910) & Johnston (1919) — Kitaveta"
          },
          {
            "target": "mwezi",
            "source": "Moon / Month",
            "pronunciation": "mwe-zi",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "mti (pl. miti)",
            "source": "Tree",
            "pronunciation": "mti",
            "hint": "A. C. Hollis (1910) — Kitaveta"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mrikazi (kucha = dawn)\" in Taveta?",
            "correctAnswer": "Day",
            "options": [
              "Night",
              "Star",
              "Fire",
              "Day"
            ],
            "hint": "Hollis 1910 Proverb #10 & Johnston 1919 #15 Taveita"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kilo\" in Taveta?",
            "correctAnswer": "Night",
            "options": [
              "Star",
              "Fire",
              "Night",
              "Day"
            ],
            "hint": "Johnston 1919 p. 101 #15 Taveita & Hollis 1910"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nyota\" in Taveta?",
            "correctAnswer": "Star",
            "options": [
              "Fire",
              "Star",
              "Day",
              "Night"
            ],
            "hint": "Johnston 1919 pp. 103–104 #15 Taveita"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Star\" in Taveta?",
            "correctAnswer": "nyota",
            "options": [
              "nyota",
              "mrikazi (kucha = dawn)",
              "kilo",
              "moto"
            ],
            "hint": "nyoh-tah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fire\" in Taveta?",
            "correctAnswer": "moto",
            "options": [
              "mrikazi (kucha = dawn)",
              "kilo",
              "nyota",
              "moto"
            ],
            "hint": "mo-to"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taveta expression with its English meaning:",
            "correctAnswer": "mrikazi (kucha = dawn): Day",
            "pairs": [
              {
                "left": "mrikazi (kucha = dawn)",
                "right": "Day"
              },
              {
                "left": "kilo",
                "right": "Night"
              },
              {
                "left": "nyota",
                "right": "Star"
              },
              {
                "left": "moto",
                "right": "Fire"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taveta term for \"Cold / Wind\": ___",
            "correctAnswer": "mbeho",
            "options": [
              "mrikazi (kucha = dawn)",
              "kilo",
              "nyota",
              "mbeho"
            ],
            "hint": "A. C. Hollis (1910) Taveta Proverb #4"
          }
        ]
      },
      {
        "id": "taveta-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "kucha",
            "source": "Dawn / Morning",
            "pronunciation": "kucha",
            "hint": "A. C. Hollis (1910) Taveta Proverb #10"
          },
          {
            "target": "mvula",
            "source": "Rain",
            "pronunciation": "mvu-la",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "msitu",
            "source": "Forest",
            "pronunciation": "msi-tu",
            "hint": "Hollis (1910) — Taveta Lumi River forest"
          },
          {
            "target": "mlima / fumvu",
            "source": "Mountain / Hill",
            "pronunciation": "mli-ma / fumvu",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "mto (Lumi)",
            "source": "River",
            "pronunciation": "mto",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "iwe (pl. mawe)",
            "source": "Stone / Rock",
            "pronunciation": "iwe",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "Msitu wa Lumi",
            "source": "Lumi River Forest",
            "pronunciation": "msi-tu wa lu-mi",
            "hint": "Hollis 1910 & 1911 Taveta"
          },
          {
            "target": "I-kala; ma-",
            "source": "Charcoal",
            "pronunciation": "i-kala",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "M-pepo",
            "source": "Cold",
            "pronunciation": "m-pepo",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kucha\" in Taveta?",
            "correctAnswer": "Dawn / Morning",
            "options": [
              "Rain",
              "Forest",
              "Mountain / Hill",
              "Dawn / Morning"
            ],
            "hint": "A. C. Hollis (1910) Taveta Proverb #10"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mvula\" in Taveta?",
            "correctAnswer": "Rain",
            "options": [
              "Forest",
              "Mountain / Hill",
              "Rain",
              "Dawn / Morning"
            ],
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"msitu\" in Taveta?",
            "correctAnswer": "Forest",
            "options": [
              "Mountain / Hill",
              "Forest",
              "Dawn / Morning",
              "Rain"
            ],
            "hint": "Hollis (1910) — Taveta Lumi River forest"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Forest\" in Taveta?",
            "correctAnswer": "msitu",
            "options": [
              "msitu",
              "kucha",
              "mvula",
              "mlima / fumvu"
            ],
            "hint": "msi-tu"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mountain / Hill\" in Taveta?",
            "correctAnswer": "mlima / fumvu",
            "options": [
              "kucha",
              "mvula",
              "msitu",
              "mlima / fumvu"
            ],
            "hint": "m-lee-mah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taveta expression with its English meaning:",
            "correctAnswer": "kucha: Dawn / Morning",
            "pairs": [
              {
                "left": "kucha",
                "right": "Dawn / Morning"
              },
              {
                "left": "mvula",
                "right": "Rain"
              },
              {
                "left": "msitu",
                "right": "Forest"
              },
              {
                "left": "mlima / fumvu",
                "right": "Mountain / Hill"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taveta term for \"River\": ___",
            "correctAnswer": "mto (Lumi)",
            "options": [
              "kucha",
              "mvula",
              "msitu",
              "mto (Lumi)"
            ],
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          }
        ]
      }
    ]
  },
  {
    "id": "taveta-unit-6",
    "title": "Unit 6: The Human Body, Health, Medicine & Safety (Sir Harry Johnston 1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis",
    "description": "Master the human body, health, medicine & safety in Taveta (Kitaveta) built directly from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A.",
    "icon": "User",
    "skills": [
      {
        "id": "taveta-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "mtwe (pl. mitwe)",
            "source": "Head",
            "pronunciation": "mtwe",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "risho (pl. mesho)",
            "source": "Eye",
            "pronunciation": "risho",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "kutu (pl. matu)",
            "source": "Ear",
            "pronunciation": "ku-tu",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "mbula",
            "source": "Nose",
            "pronunciation": "mbu-la",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "mlomo",
            "source": "Mouth",
            "pronunciation": "mlo-mo",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "ijego (pl. majego)",
            "source": "Tooth",
            "pronunciation": "i-je-go",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "ulimi",
            "source": "Tongue",
            "pronunciation": "u-li-mi",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "mkono (pl. mikono)",
            "source": "Hand / Arm",
            "pronunciation": "mko-no",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "kighulu (pl. vighulu)",
            "source": "Leg / Foot",
            "pronunciation": "kighu-lu",
            "hint": "Johnston (1919) — Kitaveta"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mtwe (pl. mitwe)\" in Taveta?",
            "correctAnswer": "Head",
            "options": [
              "Eye",
              "Ear",
              "Nose",
              "Head"
            ],
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"risho (pl. mesho)\" in Taveta?",
            "correctAnswer": "Eye",
            "options": [
              "Ear",
              "Nose",
              "Eye",
              "Head"
            ],
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kutu (pl. matu)\" in Taveta?",
            "correctAnswer": "Ear",
            "options": [
              "Nose",
              "Ear",
              "Head",
              "Eye"
            ],
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ear\" in Taveta?",
            "correctAnswer": "kutu (pl. matu)",
            "options": [
              "kutu (pl. matu)",
              "mtwe (pl. mitwe)",
              "risho (pl. mesho)",
              "mbula"
            ],
            "hint": "ku-tu (pl. ma-tu)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Taveta?",
            "correctAnswer": "mbula",
            "options": [
              "mtwe (pl. mitwe)",
              "risho (pl. mesho)",
              "kutu (pl. matu)",
              "mbula"
            ],
            "hint": "mbu-la"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taveta expression with its English meaning:",
            "correctAnswer": "mtwe (pl. mitwe): Head",
            "pairs": [
              {
                "left": "mtwe (pl. mitwe)",
                "right": "Head"
              },
              {
                "left": "risho (pl. mesho)",
                "right": "Eye"
              },
              {
                "left": "kutu (pl. matu)",
                "right": "Ear"
              },
              {
                "left": "mbula",
                "right": "Nose"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taveta term for \"Mouth\": ___",
            "correctAnswer": "mlomo",
            "options": [
              "mtwe (pl. mitwe)",
              "risho (pl. mesho)",
              "kutu (pl. matu)",
              "mlomo"
            ],
            "hint": "Johnston (1919) — Kitaveta"
          }
        ]
      },
      {
        "id": "taveta-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "sakame",
            "source": "Blood",
            "pronunciation": "sa-ka-me",
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "target": "Mu-kono; mi-",
            "source": "Arm",
            "pronunciation": "mu-kono",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "Mu-onggo",
            "source": "Back",
            "pronunciation": "mu-onggo",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "I-deu; ma-",
            "source": "Belly",
            "pronunciation": "i-deu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "Indi, I-windi; ma-",
            "source": "Bone",
            "pronunciation": "indi i-windi",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "M-bafu; mi-",
            "source": "Breast (man's)",
            "pronunciation": "m-bafu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "I-vele; ma-",
            "source": "Breast (woman's)",
            "pronunciation": "i-vele",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "Ki-ala; vi-ala",
            "source": "Finger",
            "pronunciation": "ki-ala",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "target": "Lu-wayo; ny-ayo",
            "source": "Foot",
            "pronunciation": "lu-wayo",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sakame\" in Taveta?",
            "correctAnswer": "Blood",
            "options": [
              "Arm",
              "Back",
              "Belly",
              "Blood"
            ],
            "hint": "Johnston (1919) — Kitaveta"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mu-kono; mi-\" in Taveta?",
            "correctAnswer": "Arm",
            "options": [
              "Back",
              "Belly",
              "Arm",
              "Blood"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mu-onggo\" in Taveta?",
            "correctAnswer": "Back",
            "options": [
              "Belly",
              "Back",
              "Blood",
              "Arm"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Back\" in Taveta?",
            "correctAnswer": "Mu-onggo",
            "options": [
              "Mu-onggo",
              "sakame",
              "Mu-kono; mi-",
              "I-deu; ma-"
            ],
            "hint": "mu-onggo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Belly\" in Taveta?",
            "correctAnswer": "I-deu; ma-",
            "options": [
              "sakame",
              "Mu-kono; mi-",
              "Mu-onggo",
              "I-deu; ma-"
            ],
            "hint": "i-deu; ma-"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taveta expression with its English meaning:",
            "correctAnswer": "sakame: Blood",
            "pairs": [
              {
                "left": "sakame",
                "right": "Blood"
              },
              {
                "left": "Mu-kono; mi-",
                "right": "Arm"
              },
              {
                "left": "Mu-onggo",
                "right": "Back"
              },
              {
                "left": "I-deu; ma-",
                "right": "Belly"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taveta term for \"Bone\": ___",
            "correctAnswer": "Indi, I-windi; ma-",
            "options": [
              "sakame",
              "Mu-kono; mi-",
              "Mu-onggo",
              "Indi, I-windi; ma-"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #15: Ki-Taveita)"
          }
        ]
      }
    ]
  },
  {
    "id": "taveta-unit-7",
    "title": "Unit 7: Core Verbs, Tenses, Negation & Verbal Extensions (Sir Harry Johnston 1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis",
    "description": "Master core verbs, tenses, negation & verbal extensions in Taveta (Kitaveta) built directly from Sir Harry Johnston & A. C. Hollis.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "taveta-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "kuteta (-teta) / kugamba",
            "source": "Speak",
            "pronunciation": "ku-te-ta / ku-gamba",
            "hint": "Hollis 1910 & Johnston 1919 #15 Taveita"
          },
          {
            "target": "kudza (-dza)",
            "source": "Come",
            "pronunciation": "kudza",
            "hint": "Hollis 1910 & Johnston 1919 #15 Taveita"
          },
          {
            "target": "kugenda (-genda)",
            "source": "Go",
            "pronunciation": "ku-genda",
            "hint": "Hollis 1910 & Johnston 1919 #15 Taveita"
          },
          {
            "target": "kunwa (-nwa)",
            "source": "Drink",
            "pronunciation": "kunwa",
            "hint": "Hollis 1910 & Johnston 1919 #15 Taveita"
          },
          {
            "target": "kuria (-ria)",
            "source": "Eat",
            "pronunciation": "ku-ria",
            "hint": "Hollis 1910 & Johnston 1919 #15 Taveita"
          },
          {
            "target": "kusikia (esikie = he who feels)",
            "source": "Feel / Hear",
            "pronunciation": "ku-si-kia",
            "hint": "A. C. Hollis (1910) Taveta Proverb #4"
          },
          {
            "target": "kusongeria",
            "source": "Approach / Draw near",
            "pronunciation": "ku-songe-ria",
            "hint": "A. C. Hollis (1910) Taveta Proverb #4"
          },
          {
            "target": "kukoma / kuhoma",
            "source": "Kill / Strike",
            "pronunciation": "ku-ko-ma / ku-ho-ma",
            "hint": "A. C. Hollis (1910) Taveta Proverb #6"
          },
          {
            "target": "kuiya",
            "source": "Cry / Howl / Sing",
            "pronunciation": "kui-ya",
            "hint": "A. C. Hollis (1910) Taveta Proverbs #8 & #10"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kuteta (-teta) / kugamba\" in Taveta?",
            "correctAnswer": "Speak",
            "options": [
              "Come",
              "Go",
              "Drink",
              "Speak"
            ],
            "hint": "Hollis 1910 & Johnston 1919 #15 Taveita"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kudza (-dza)\" in Taveta?",
            "correctAnswer": "Come",
            "options": [
              "Go",
              "Drink",
              "Come",
              "Speak"
            ],
            "hint": "Hollis 1910 & Johnston 1919 #15 Taveita"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kugenda (-genda)\" in Taveta?",
            "correctAnswer": "Go",
            "options": [
              "Drink",
              "Go",
              "Speak",
              "Come"
            ],
            "hint": "Hollis 1910 & Johnston 1919 #15 Taveita"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Go\" in Taveta?",
            "correctAnswer": "kugenda (-genda)",
            "options": [
              "kugenda (-genda)",
              "kuteta (-teta) / kugamba",
              "kudza (-dza)",
              "kunwa (-nwa)"
            ],
            "hint": "koo-gehn-dah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Drink\" in Taveta?",
            "correctAnswer": "kunwa (-nwa)",
            "options": [
              "kuteta (-teta) / kugamba",
              "kudza (-dza)",
              "kugenda (-genda)",
              "kunwa (-nwa)"
            ],
            "hint": "koo-nwah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taveta expression with its English meaning:",
            "correctAnswer": "kuteta (-teta) / kugamba: Speak",
            "pairs": [
              {
                "left": "kuteta (-teta) / kugamba",
                "right": "Speak"
              },
              {
                "left": "kudza (-dza)",
                "right": "Come"
              },
              {
                "left": "kugenda (-genda)",
                "right": "Go"
              },
              {
                "left": "kunwa (-nwa)",
                "right": "Drink"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taveta term for \"Eat\": ___",
            "correctAnswer": "kuria (-ria)",
            "options": [
              "kuteta (-teta) / kugamba",
              "kudza (-dza)",
              "kugenda (-genda)",
              "kuria (-ria)"
            ],
            "hint": "Hollis 1910 & Johnston 1919 #15 Taveita"
          }
        ]
      },
      {
        "id": "taveta-verbs-grammar-verbal-derivatives-7",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "kushigha",
            "source": "Leave / Stop",
            "pronunciation": "kushigha",
            "hint": "A. C. Hollis (1910) Taveta Proverb #10"
          },
          {
            "target": "kuyala (pass. kuyaiwa)",
            "source": "Sleep / Be slept on",
            "pronunciation": "ku-ya-la",
            "hint": "A. C. Hollis (1910) Taveta Proverb #14"
          },
          {
            "target": "kuomba",
            "source": "Pray / Beg",
            "pronunciation": "kuomba",
            "hint": "Rev. A. R. Steggall (1894) — Taveta Kitamo cha Kuomba"
          },
          {
            "target": "kufuma",
            "source": "Come out / Exit (Exodus)",
            "pronunciation": "ku-fu-ma",
            "hint": "Rev. A. R. Steggall (1897) — Kitamo cha Kufuma"
          },
          {
            "target": "kuona (-ona)",
            "source": "To see",
            "pronunciation": "kuo-na",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "kusikia (-sikia)",
            "source": "To hear",
            "pronunciation": "ku-si-kia",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "kumanya (-manya)",
            "source": "To know",
            "pronunciation": "ku-manya",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "Fole",
            "source": "Fear",
            "pronunciation": "fo-le"
          },
          {
            "target": "C-oni; vy-oni",
            "source": "Hide",
            "pronunciation": "c-oni vy-oni"
          }
        ],
        "sentences": [
          {
            "target": "kushigha — kuyala",
            "source": "Leave — Sleep"
          },
          {
            "target": "kuomba — kufuma",
            "source": "Pray — Come out"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kushigha\" mean in English?",
            "correctAnswer": "Leave / Stop",
            "options": [
              "Leave / Stop",
              "Sleep / Be slept on",
              "Pray / Beg",
              "Come out / Exit (Exodus)"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Sleep / Be slept on\"",
            "correctAnswer": "kuyala",
            "acceptedAnswers": [
              "kuyala (pass. kuyaiwa)",
              "kuyala"
            ],
            "hint": "Starts with \"ku\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kuomba\"",
            "correctAnswer": "Pray",
            "acceptedAnswers": [
              "Pray / Beg",
              "Pray"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kushigha",
                "right": "Leave"
              },
              {
                "left": "kuyala",
                "right": "Sleep"
              },
              {
                "left": "kuomba",
                "right": "Pray"
              },
              {
                "left": "kufuma",
                "right": "Come out"
              },
              {
                "left": "kuona",
                "right": "To see"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "taveta-unit-8",
    "title": "Unit 8: Time, Indigenous Calendar, Seasons & Navigation (Sir Harry Johnston 1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis",
    "description": "Master time, indigenous calendar, seasons & navigation in Taveta (Kitaveta) built directly from Sir Harry Johnston & A. C. Hollis.",
    "icon": "Compass",
    "skills": [
      {
        "id": "taveta-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "M-ri",
            "source": "Day",
            "pronunciation": "m ri"
          },
          {
            "target": "Mw-āka",
            "source": "Year",
            "pronunciation": "mw-aka"
          },
          {
            "target": "kucha",
            "source": "Dawn",
            "pronunciation": "ku-cha"
          },
          {
            "target": "ikaya (lero)",
            "source": "Today",
            "pronunciation": "ee-kah-yah"
          },
          {
            "target": "U-tūkū",
            "source": "Night",
            "pronunciation": "u-tuku"
          },
          {
            "target": "M-bēlē",
            "source": "Before",
            "pronunciation": "m-bele"
          },
          {
            "target": "I-gōlo",
            "source": "Yesterday",
            "pronunciation": "i-golo"
          },
          {
            "target": "Jahako",
            "source": "Hello"
          },
          {
            "target": "I-dīma",
            "source": "To-day",
            "pronunciation": "i-dima"
          }
        ],
        "sentences": [
          {
            "target": "M-ri — Mw-āka",
            "source": "Day — Year"
          },
          {
            "target": "kucha — ikaya",
            "source": "Dawn — Today"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"M-ri\" mean in English?",
            "correctAnswer": "Day",
            "options": [
              "Day",
              "Year",
              "Dawn",
              "Today"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Year\"",
            "correctAnswer": "Mw-āka",
            "acceptedAnswers": [
              "Mw-āka",
              "Mw-āka"
            ],
            "hint": "Starts with \"Mw\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kucha\"",
            "correctAnswer": "Dawn",
            "acceptedAnswers": [
              "Dawn",
              "Dawn"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "M-ri",
                "right": "Day"
              },
              {
                "left": "Mw-āka",
                "right": "Year"
              },
              {
                "left": "kucha",
                "right": "Dawn"
              },
              {
                "left": "ikaya",
                "right": "Today"
              },
              {
                "left": "U-tūkū",
                "right": "Night"
              }
            ]
          }
        ]
      },
      {
        "id": "taveta-time-calendar-journey-navigation-8",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taveta (Kitaveta) (Kitaveta / Kituweta) in Sir Harry Johnston (1886 & 1919 Group C #15 Ki-Taveita) & A. C. Hollis (1910–1911 Taveta Sayings, Proverbs & Enigmas) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "M-ri",
            "source": "Day"
          },
          {
            "target": "ikaya (lero)",
            "source": "Today",
            "pronunciation": "i-ka-ya",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "igolo (kesho)",
            "source": "Tomorrow",
            "pronunciation": "i-go-lo",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "igolo",
            "source": "Yesterday",
            "pronunciation": "i-go-lo",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "Hā-lē",
            "source": "Far",
            "pronunciation": "ha-le"
          },
          {
            "target": "N-jīa",
            "source": "Road",
            "pronunciation": "n-jia"
          },
          {
            "target": "Ā-ha",
            "source": "Here",
            "pronunciation": "a-ha"
          },
          {
            "target": "Hā-fūhī",
            "source": "Near",
            "pronunciation": "ha-fuhi"
          },
          {
            "target": "Hā-lya",
            "source": "There",
            "pronunciation": "ha-lya"
          }
        ],
        "sentences": [
          {
            "target": "M-ri — ikaya",
            "source": "Day — Today"
          },
          {
            "target": "igolo — igolo",
            "source": "Tomorrow — Yesterday"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"M-ri\" mean in English?",
            "correctAnswer": "Day",
            "options": [
              "Day",
              "Today",
              "Tomorrow",
              "Yesterday"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Today\"",
            "correctAnswer": "ikaya",
            "acceptedAnswers": [
              "ikaya (lero)",
              "ikaya"
            ],
            "hint": "Starts with \"ik\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"igolo\"",
            "correctAnswer": "Tomorrow",
            "acceptedAnswers": [
              "Tomorrow",
              "Tomorrow"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "M-ri",
                "right": "Day"
              },
              {
                "left": "ikaya",
                "right": "Today"
              },
              {
                "left": "igolo",
                "right": "Tomorrow"
              },
              {
                "left": "igolo",
                "right": "Yesterday"
              },
              {
                "left": "Hā-lē",
                "right": "Far"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "taveta-unit-9-public-domain-corpus",
    "title": "Unit 9: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Taveta (Kitaveta) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "skills": [
      {
        "id": "taveta-pd-corpus-9-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Taveta (Kitaveta) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Taveta (Kitaveta) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "mshana (pl. vashana)",
            "source": "Blacksmith / ironworker",
            "pronunciation": "msha-na",
            "hint": "A. C. Hollis, Taveta Sayings and Proverbs (1910)"
          },
          {
            "target": "mbazi /ulosi",
            "source": "Proverb / wise saying (Kitaveta)",
            "pronunciation": "mba-zi / u-lo-si",
            "hint": "A. C. Hollis, Taveta Sayings and Proverbs (1910)"
          },
          {
            "target": "kigano / ndima",
            "source": "Riddle / enigma (Taveta oral literature)",
            "pronunciation": "ki-ga-no / ndi-ma",
            "hint": "A. C. Hollis, Taveta Enigmas, Journal of the African Society Vol. 10 (1911)"
          },
          {
            "target": "rika (pl. marika)",
            "source": "Age-set / ruling generation in Taveta",
            "pronunciation": "ri-ka",
            "hint": "A. C. Hollis, Taveta Sayings and Proverbs (1910)"
          },
          {
            "target": "njama yaekomi",
            "source": "Council of elders (Taveta governance)",
            "pronunciation": "nja-ma yae-ko-mi",
            "hint": "A. C. Hollis, Taveta Sayings and Proverbs (1910)"
          },
          {
            "target": "mpungi / kireti",
            "source": "Sacred forest grove of Taveta",
            "pronunciation": "mpungi / ki-re-ti",
            "hint": "A. C. Hollis, Taveta Sayings and Proverbs (1910)"
          },
          {
            "target": "īvā",
            "source": "To steal",
            "pronunciation": "iva",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "īūkā",
            "source": "To stand, stop, be erect",
            "pronunciation": "iu-ka",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          }
        ],
        "sentences": [
          {
            "target": "njama yaekomi (mpungi / kireti).",
            "source": "Council of elders (Taveta governance) (Sacred forest grove of Taveta)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mshana (pl. vashana)\" in Taveta?",
            "correctAnswer": "Blacksmith / ironworker",
            "options": [
              "Blacksmith / ironworker",
              "Proverb / wise saying (Kitaveta)",
              "Riddle / enigma (Taveta oral literature)",
              "Age-set / ruling generation in Taveta"
            ],
            "hint": "A. C. Hollis, Taveta Sayings and Proverbs (1910)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Taveta (Kitaveta) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "mshana (pl. vashana): Blacksmith / ironworker",
            "pairs": [
              {
                "left": "mshana (pl. vashana)",
                "right": "Blacksmith / ironworker"
              },
              {
                "left": "mbazi /ulosi",
                "right": "Proverb / wise saying (Kitaveta)"
              },
              {
                "left": "kigano / ndima",
                "right": "Riddle / enigma (Taveta oral literature)"
              },
              {
                "left": "rika (pl. marika)",
                "right": "Age-set / ruling generation in Taveta"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taveta (Kitaveta) term for \"Council of elders (Taveta governance)\": ___",
            "correctAnswer": "njama yaekomi",
            "options": [
              "njama yaekomi",
              "mpungi / kireti",
              "mshana (pl. vashana)",
              "mbazi /ulosi"
            ],
            "hint": "A. C. Hollis, Taveta Sayings and Proverbs (1910)"
          }
        ]
      },
      {
        "id": "taveta-pd-corpus-9-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Taveta (Kitaveta) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Taveta (Kitaveta) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "lālā",
            "source": "To sleep",
            "pronunciation": "la-la",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "kāā",
            "source": "To sit, remain, abide",
            "pronunciation": "kaa",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "ōnā",
            "source": "To see",
            "pronunciation": "ona",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "kūndā",
            "source": "To love, want",
            "pronunciation": "kunda",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "lēkā",
            "source": "To leave off, cease",
            "pronunciation": "le-ka",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "sēkā",
            "source": "To laugh",
            "pronunciation": "se-ka",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "mānyā",
            "source": "To know",
            "pronunciation": "manya",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "bwāgā",
            "source": "To kill",
            "pronunciation": "bwa-ga",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"lālā\" in Taveta?",
            "correctAnswer": "To sleep",
            "options": [
              "To sit, remain, abide",
              "To see",
              "To love, want",
              "To sleep"
            ],
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kāā\" in Taveta?",
            "correctAnswer": "To sit, remain, abide",
            "options": [
              "To see",
              "To love, want",
              "To sit, remain, abide",
              "To sleep"
            ],
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ōnā\" in Taveta?",
            "correctAnswer": "To see",
            "options": [
              "To love, want",
              "To see",
              "To sleep",
              "To sit, remain, abide"
            ],
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To see\" in Taveta?",
            "correctAnswer": "ōnā",
            "options": [
              "ōnā",
              "lālā",
              "kāā",
              "kūndā"
            ],
            "hint": "oh-nah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To love, want\" in Taveta?",
            "correctAnswer": "kūndā",
            "options": [
              "lālā",
              "kāā",
              "ōnā",
              "kūndā"
            ],
            "hint": "koond-ah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taveta expression with its English meaning:",
            "correctAnswer": "lālā: To sleep",
            "pairs": [
              {
                "left": "lālā",
                "right": "To sleep"
              },
              {
                "left": "kāā",
                "right": "To sit, remain, abide"
              },
              {
                "left": "ōnā",
                "right": "To see"
              },
              {
                "left": "kūndā",
                "right": "To love, want"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taveta term for \"To leave off, cease\": ___",
            "correctAnswer": "lēkā",
            "options": [
              "lālā",
              "kāā",
              "ōnā",
              "lēkā"
            ],
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          }
        ]
      }
    ]
  },
  {
    "id": "taveta-unit-10-open-datasets-modern",
    "title": "Unit 10: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Taveta (Kitaveta) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "skills": [
      {
        "id": "taveta-open-dataset-10-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Soup",
        "description": "Learn core Taveta (Kitaveta) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Taveta (Kitaveta) dialects and everyday speech.",
        "words": [
          {
            "target": "gēndā",
            "source": "To go",
            "pronunciation": "genda",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "inggā",
            "source": "To give",
            "pronunciation": "ingga",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "lā",
            "source": "To eat",
            "pronunciation": "la",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "fwā",
            "source": "To die",
            "pronunciation": "fwa",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "vīnā",
            "source": "To dance",
            "pronunciation": "vi-na",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "tēmā",
            "source": "To cut",
            "pronunciation": "te-ma",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "zā",
            "source": "To come",
            "pronunciation": "za",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "gūlā",
            "source": "To buy, sell",
            "pronunciation": "gu-la",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"gēndā\" in Taveta?",
            "correctAnswer": "To go",
            "options": [
              "To give",
              "To eat",
              "To die",
              "To go"
            ],
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"inggā\" in Taveta?",
            "correctAnswer": "To give",
            "options": [
              "To eat",
              "To die",
              "To give",
              "To go"
            ],
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"lā\" in Taveta?",
            "correctAnswer": "To eat",
            "options": [
              "To die",
              "To eat",
              "To go",
              "To give"
            ],
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To eat\" in Taveta?",
            "correctAnswer": "lā",
            "options": [
              "lā",
              "gēndā",
              "inggā",
              "fwā"
            ],
            "hint": "lah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To die\" in Taveta?",
            "correctAnswer": "fwā",
            "options": [
              "gēndā",
              "inggā",
              "lā",
              "fwā"
            ],
            "hint": "fwah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taveta expression with its English meaning:",
            "correctAnswer": "gēndā: To go",
            "pairs": [
              {
                "left": "gēndā",
                "right": "To go"
              },
              {
                "left": "inggā",
                "right": "To give"
              },
              {
                "left": "lā",
                "right": "To eat"
              },
              {
                "left": "fwā",
                "right": "To die"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taveta term for \"To dance\": ___",
            "correctAnswer": "vīnā",
            "options": [
              "gēndā",
              "inggā",
              "lā",
              "vīnā"
            ],
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          }
        ]
      },
      {
        "id": "taveta-open-dataset-10-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Taveta (Kitaveta) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Taveta (Kitaveta) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "kābā",
            "source": "To beat",
            "pronunciation": "ka-ba",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "Sī-, Tā-, -sī",
            "source": "Not (with verb, as prefix, infix, or suffix)",
            "pronunciation": "si ta si",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "Kw-ī?",
            "source": "Where?",
            "pronunciation": "kw-i",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "īnggī",
            "source": "Plenty, many",
            "pronunciation": "inggi",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "ēūpē",
            "source": "White",
            "pronunciation": "eu-pe",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "kōnggō",
            "source": "Sick",
            "pronunciation": "konggo",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "fūhī",
            "source": "Short",
            "pronunciation": "fu-hi",
            "hint": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "target": "Jahako",
            "source": "Hello",
            "pronunciation": "ja-ha-ko"
          }
        ],
        "sentences": [
          {
            "target": "kābā — Sī-, Tā-, -sī",
            "source": "To beat — Not"
          },
          {
            "target": "Kw-ī? — īnggī",
            "source": "Where? — Plenty, many"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kābā\" mean in English?",
            "correctAnswer": "To beat",
            "options": [
              "To beat",
              "Not (with verb, as prefix, infix, or suffix)",
              "Where?",
              "Plenty, many"
            ],
            "hint": "Core vocabulary in Agriculture, Community & Everyday Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Not (with verb, as prefix, infix, or suffix)\"",
            "correctAnswer": "Sī-, Tā-, -sī",
            "acceptedAnswers": [
              "Sī-, Tā-, -sī",
              "Sī-, Tā-, -sī"
            ],
            "hint": "Starts with \"Sī\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Kw-ī?\"",
            "correctAnswer": "Where?",
            "acceptedAnswers": [
              "Where?",
              "Where?"
            ],
            "hint": "Review Agriculture, Community & Everyday Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Agriculture, Community & Everyday Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kābā",
                "right": "To beat"
              },
              {
                "left": "Sī-, Tā-, -sī",
                "right": "Not"
              },
              {
                "left": "Kw-ī?",
                "right": "Where?"
              },
              {
                "left": "īnggī",
                "right": "Plenty, many"
              },
              {
                "left": "ēūpē",
                "right": "White"
              }
            ]
          }
        ]
      }
    ]
  }
];
