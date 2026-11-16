import type { LanguageConfig, CourseUnit } from "../types";

export const MERU_CONFIG: LanguageConfig = {
  "id": "meru",
  "name": "Meru",
  "nativeName": "Kĩmĩĩrũ",
  "family": "Bantu",
  "counties": [
    "Meru",
    "Tharaka-Nithi",
    "Embu"
  ],
  "speakers": "2.4M",
  "speechLocale": "sw-KE",
  "description": "A Central Kenya (Mount Kenya / Thagiicu) Bantu language spoken around the eastern and northern slopes of Kĩrĩnyaga (Mount Kenya), renowned for its 16 noun classes and the Njũri Ncheke council of elders. Grounded in Hobley (1910), Sir Harry Johnston (1919), and comparative Mount Kenya Bantu linguistics.",
  "color": "#16A34A",
  "sources": [
    "hobley-akamba-ethnology-1910",
    "johnston-bantu-1919",
    "open-web-swadesh-comparative",
    "champion-atharaka-1912",
    "mberia-kitharaka-loanwords-2004",
    "dundas-bantu-laws-1915",
    "payne-pacchiarotti-bosire-diversity-2016"
  ]
};

export const MERU_UNITS: CourseUnit[] = [
  {
    "id": "meru-unit-1",
    "unitNumber": 1,
    "title": "Greetings, 16 Noun Classes, Numerals & Mount Kenya Culture",
    "description": "Master Kĩmĩĩrũ, Kĩtharaka, and Kîembu greetings, noun-class concords, numbers 1–10 (Johnston 1919 #11–11a), and everyday verbs.",
    "icon": "BookOpen",
    "color": "#16A34A",
    "skills": [
      {
        "id": "meru-greetings-nouns",
        "title": "Greetings, People & Noun Classes (Muntũ / Antũ)",
        "icon": "Users",
        "description": "Learn conversational greetings and noun classes across Mount Kenya Bantu (Johnston 1919 & Hobley 1910).",
        "tips": "In Kĩmĩĩrũ (Johnston 1919 Language #11a), Class 1/2 nouns pair mũ-/ba- (muntũ → antũ / bantũ 'person → people'), Class 3/4 pair mũ-/mĩ- (mũtĩ → mĩtĩ 'tree → trees'), and Class 12/13 pair ka-/tũ- for diminutives (kaana → tũana).",
        "words": [
          {
            "target": "Muuga!",
            "source": "Hello!",
            "pronunciation": "muu-ga / uri mwe-ga",
            "hint": "Standard Kĩmĩĩrũ greeting"
          },
          {
            "target": "Ũrĩ mwega? (resp. Ndĩ mwega)",
            "source": "Are you well? (I am well)",
            "pronunciation": "muu-ga / uri mwe-ga",
            "hint": "Standard Kĩmĩĩrũ greeting"
          },
          {
            "target": "Nĩwega mũno",
            "source": "Thank you very much",
            "pronunciation": "ni-we-ga mu-no",
            "hint": "Polite gratitude"
          },
          {
            "target": "muntũ (pl. antũ / bantũ)",
            "source": "person (pl. people)",
            "pronunciation": "muntu",
            "hint": "Johnston (1919, Vol. I, p. 101) Class 1/2 #11a Meru"
          },
          {
            "target": "mũrũme (pl. arũme)",
            "source": "man, husband",
            "pronunciation": "mu-ru-me / mu-ka",
            "hint": "Johnston (1919, Vol. I, pp. 100, 106) #11a Meru & Embu"
          },
          {
            "target": "mũka (pl. aka)",
            "source": "woman, wife",
            "pronunciation": "mu-ru-me / mu-ka",
            "hint": "Johnston (1919, Vol. I, pp. 100, 106) #11a Meru & Embu"
          },
          {
            "target": "mwana (pl. aana)",
            "source": "child",
            "pronunciation": "mwa-na / kaa-na",
            "hint": "Class 1/2 vs. Class 12/13 ka-/tũ-"
          },
          {
            "target": "kaana (pl. tũana)",
            "source": "small child (diminutive)",
            "pronunciation": "mwa-na / kaa-na",
            "hint": "Class 1/2 vs. Class 12/13 ka-/tũ-"
          },
          {
            "target": "mũtĩ (pl. mĩtĩ)",
            "source": "tree (pl. trees)",
            "pronunciation": "mu-ti / ii-ga",
            "hint": "Johnston (1919, Vol. I, pp. 104–105) Class 3/4 & 5/6"
          },
          {
            "target": "ĩiga (pl. maiga)",
            "source": "stone (pl. stones)",
            "pronunciation": "mu-ti / ii-ga",
            "hint": "Johnston (1919, Vol. I, pp. 104–105) Class 3/4 & 5/6"
          },
          {
            "target": "rũũji",
            "source": "water (river)",
            "pronunciation": "ruu-ji / mwanki",
            "hint": "Johnston (1919, Vol. I, pp. 99, 106) Meru & Tharaka"
          },
          {
            "target": "maĩ)",
            "source": "fire",
            "pronunciation": "ruu-ji / mwanki",
            "hint": "Johnston (1919, Vol. I, pp. 99, 106) Meru & Tharaka"
          },
          {
            "target": "riũa",
            "source": "sun",
            "pronunciation": "riua / mwe-ri / nja-ta",
            "hint": "Johnston (1919, Vol. I, pp. 101, 104) cosmological nouns"
          },
          {
            "target": "mweri",
            "source": "moon",
            "pronunciation": "riua / mwe-ri / nja-ta",
            "hint": "Johnston (1919, Vol. I, pp. 101, 104) cosmological nouns"
          },
          {
            "target": "njata",
            "source": "star",
            "pronunciation": "riua / mwe-ri / nja-ta",
            "hint": "Johnston (1919, Vol. I, pp. 101, 104) cosmological nouns"
          },
          {
            "target": "Murungu / Ngai",
            "source": "God, Supreme Creator",
            "pronunciation": "mu-rungu / ngai",
            "hint": "Johnston (1919, Vol. I, p. 100) & Hobley (1910, p. 157)"
          },
          {
            "target": "Njũri Ncheke / Kiama",
            "source": "Supreme Council of Elders",
            "pronunciation": "nju-ri nche-ke / kia-ma",
            "hint": "Traditional Ameru & Aembu governance"
          }
        ],
        "sentences": [
          {
            "target": "Muntũ ũjũ mũraja arĩrũta wĩra.",
            "source": "This tall person is working."
          },
          {
            "target": "Antũ baba baraja barĩrũta wĩra.",
            "source": "These tall people are working."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Muuga!\" in Meru?",
            "correctAnswer": "Hello!",
            "options": [
              "person",
              "man",
              "Hello!",
              "Are you well?"
            ],
            "hint": "Standard Kĩmĩĩrũ greeting",
            "acceptedAnswers": [
              "Hello! / Are you well? (I am well)",
              "Hello!"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Nĩwega mũno\" in Meru?",
            "correctAnswer": "Thank you very much",
            "options": [
              "Thank you very much",
              "Are you well?",
              "small child",
              "Supreme Council of Elders"
            ],
            "hint": "Polite gratitude"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"muntũ (pl. antũ / bantũ)\" in Meru?",
            "correctAnswer": "person",
            "options": [
              "person",
              "man",
              "Hello!",
              "Are you well?"
            ],
            "hint": "Johnston (1919, Vol. I, p. 101) Class 1/2 #11a Meru",
            "acceptedAnswers": [
              "person (pl. people)",
              "person"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"person\" in Meru?",
            "correctAnswer": "muntũ",
            "options": [
              "Muuga!",
              "muntũ",
              "Nĩwega mũno",
              "mũrũme"
            ],
            "hint": "moon-too / ahn-too",
            "acceptedAnswers": [
              "muntũ (pl. antũ / bantũ)",
              "muntũ"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"man\" in Meru?",
            "correctAnswer": "mũrũme",
            "options": [
              "Muuga!",
              "Nĩwega mũno",
              "muntũ",
              "mũrũme"
            ],
            "hint": "moo-roo-meh / moo-kah",
            "acceptedAnswers": [
              "mũrũme (pl. arũme) / mũka (pl. aka)",
              "mũrũme"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Meru expression with its English meaning:",
            "correctAnswer": "Muuga! / Ũrĩ mwega? (resp. Ndĩ mwega): Hello! / Are you well? (I am well)",
            "pairs": [
              {
                "left": "Muuga! / Ũrĩ mwega? (resp. Ndĩ mwega)",
                "right": "Hello! / Are you well? (I am well)"
              },
              {
                "left": "Nĩwega mũno",
                "right": "Thank you very much"
              },
              {
                "left": "muntũ (pl. antũ / bantũ)",
                "right": "person (pl. people)"
              },
              {
                "left": "mũrũme (pl. arũme) / mũka (pl. aka)",
                "right": "man, husband / woman, wife"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Meru term for \"child\": ___",
            "correctAnswer": "mwana",
            "options": [
              "mwana",
              "Muuga!",
              "Nĩwega mũno",
              "muntũ"
            ],
            "hint": "Class 1/2 vs. Class 12/13 ka-/tũ-",
            "acceptedAnswers": [
              "mwana (pl. aana) / kaana (pl. tũana)",
              "mwana"
            ]
          }
        ]
      },
      {
        "id": "meru-numbers-proverbs",
        "title": "Numerals 1–10, Dahl’s Law Verbs & Proverbs",
        "icon": "Hash",
        "description": "Count from 1 to 10 across Meru, Tharaka, Chuka, and Embu and learn Mount Kenya Bantu proverbs.",
        "tips": "Sir Harry Johnston (1919, Vol. I, p. 107) records the numerals of Meru (#11a) and Embu/Chuka/Mwimbe/Tharaka (#11): imwe (1), iiri (2), ithatu (3), inya (4), ithano (5), ithanthatu (6), mũgwanja (7), inyanya (8), kenda (9), ikũmi (10).",
        "words": [
          {
            "target": "imwe",
            "source": "One (1)",
            "pronunciation": "imwe ii-ri itha-tu inya itha-no",
            "hint": "Johnston (1919, Vol. I, p. 107) #11a Meru numerals"
          },
          {
            "target": "iiri (bairi)",
            "source": "Two (2)",
            "pronunciation": "imwe ii-ri itha-tu inya itha-no",
            "hint": "Johnston (1919, Vol. I, p. 107) #11a Meru numerals"
          },
          {
            "target": "ithatu",
            "source": "Three (3)",
            "pronunciation": "imwe ii-ri itha-tu inya itha-no",
            "hint": "Johnston (1919, Vol. I, p. 107) #11a Meru numerals"
          },
          {
            "target": "ithanthatu",
            "source": "Six (6)",
            "pronunciation": "ithantha-tu mugwanja inyanya kenda i-ku-mi",
            "hint": "Johnston (1919, Vol. I, p. 107) numerals 6–10"
          },
          {
            "target": "mũgwanja",
            "source": "Seven (7)",
            "pronunciation": "ithantha-tu mugwanja inyanya kenda i-ku-mi",
            "hint": "Johnston (1919, Vol. I, p. 107) numerals 6–10"
          },
          {
            "target": "inyanya",
            "source": "Eight (8)",
            "pronunciation": "ithantha-tu mugwanja inyanya kenda i-ku-mi",
            "hint": "Johnston (1919, Vol. I, p. 107) numerals 6–10"
          },
          {
            "target": "igana",
            "source": "100",
            "pronunciation": "i-ga-na / ngi-ri",
            "hint": "Johnston (1919, Vol. I, p. 107)"
          },
          {
            "target": "ngiri",
            "source": "1,000",
            "pronunciation": "i-ga-na / ngi-ri",
            "hint": "Johnston (1919, Vol. I, p. 107)"
          },
          {
            "target": "kũruga",
            "source": "to cook",
            "pronunciation": "ku-ru-ga / ku-ria / kunyua / guthii",
            "hint": "Dahl’s Law: kũ- voices to gũ- before voiceless th"
          },
          {
            "target": "kũrĩa",
            "source": "to eat",
            "pronunciation": "ku-ru-ga / ku-ria / kunyua / guthii",
            "hint": "Dahl’s Law: kũ- voices to gũ- before voiceless th"
          },
          {
            "target": "kũnyua",
            "source": "to drink",
            "pronunciation": "ku-ru-ga / ku-ria / kunyua / guthii",
            "hint": "Dahl’s Law: kũ- voices to gũ- before voiceless th"
          },
          {
            "target": "gũthiĩ",
            "source": "to go",
            "pronunciation": "ku-ru-ga / ku-ria / kunyua / guthii",
            "hint": "Dahl’s Law: kũ- voices to gũ- before voiceless th"
          },
          {
            "target": "Mũtĩ ũmwe ndũtũũragia mũrũrĩ",
            "source": "A single tree does not make a forest",
            "pronunciation": "mu-ti umwe ndu-tuu-ra-gia mu-ru-ri",
            "hint": "Mount Kenya Bantu proverb on unity"
          },
          {
            "target": "Kũmenya njĩra nĩ kũũria",
            "source": "To know the path is to ask",
            "pronunciation": "ku-menya nji-ra ni kuu-ria",
            "hint": "Proverb on humility and learning"
          }
        ],
        "sentences": [
          {
            "target": "Mũtĩ ũmwe ndũtũũragia mũrũrĩ.",
            "source": "A single tree does not make a forest."
          },
          {
            "target": "Kũmenya njĩra nĩ kũũria.",
            "source": "To know the path is to ask."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"imwe, iiri (bairi), ithatu, inya, ithano\" in Meru?",
            "correctAnswer": "1",
            "options": [
              "6",
              "100",
              "to cook",
              "1"
            ],
            "hint": "Johnston (1919, Vol. I, p. 107) #11a Meru numerals",
            "acceptedAnswers": [
              "1, 2, 3, 4, 5",
              "1"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ithanthatu, mũgwanja, inyanya, kenda, ikũmi\" in Meru?",
            "correctAnswer": "6",
            "options": [
              "100",
              "to cook",
              "6",
              "1"
            ],
            "hint": "Johnston (1919, Vol. I, p. 107) numerals 6–10",
            "acceptedAnswers": [
              "6, 7, 8, 9, 10",
              "6"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"igana\" in Meru?",
            "correctAnswer": "100",
            "options": [
              "to cook",
              "1",
              "100",
              "6"
            ],
            "hint": "Johnston (1919, Vol. I, p. 107)",
            "acceptedAnswers": [
              "100 / 1,000",
              "100"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"100\" in Meru?",
            "correctAnswer": "igana",
            "options": [
              "imwe",
              "ithanthatu",
              "igana",
              "kũruga"
            ],
            "hint": "ee-gah-nah / n-gee-ree",
            "acceptedAnswers": [
              "igana / ngiri",
              "igana"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"to cook\" in Meru?",
            "correctAnswer": "kũruga",
            "options": [
              "imwe",
              "ithanthatu",
              "igana",
              "kũruga"
            ],
            "hint": "koo-roo-gah / koo-ree-ah / koo-nywah / goo-thee",
            "acceptedAnswers": [
              "kũruga / kũrĩa / kũnyua / gũthiĩ",
              "kũruga"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Meru expression with its English meaning:",
            "correctAnswer": "imwe, iiri (bairi), ithatu, inya, ithano: 1, 2, 3, 4, 5",
            "pairs": [
              {
                "left": "imwe, iiri (bairi), ithatu, inya, ithano",
                "right": "1, 2, 3, 4, 5"
              },
              {
                "left": "ithanthatu, mũgwanja, inyanya, kenda, ikũmi",
                "right": "6, 7, 8, 9, 10"
              },
              {
                "left": "igana / ngiri",
                "right": "100 / 1,000"
              },
              {
                "left": "kũruga / kũrĩa / kũnyua / gũthiĩ",
                "right": "to cook / to eat / to drink / to go"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Meru term for \"A single tree does not make a forest\": ___",
            "correctAnswer": "Mũtĩ ũmwe ndũtũũragia mũrũrĩ",
            "options": [
              "Kũmenya njĩra nĩ kũũria",
              "imwe",
              "Mũtĩ ũmwe ndũtũũragia mũrũrĩ",
              "iiri"
            ],
            "hint": "Mount Kenya Bantu proverb on unity"
          }
        ]
      }
    ]
  },
  {
    "id": "meru-unit-2",
    "unitNumber": 2,
    "title": "Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Meru (Kĩmĩĩrũ) built directly from C. W. Hobley (1910), Arthur M. Champion (1912), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Users",
    "color": "#16A34A",
    "skills": [
      {
        "id": "meru-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "Murungu (Ngai)",
            "source": "God",
            "pronunciation": "mu-rungu",
            "hint": "Johnston 1919, Vol. I, p. 101 & Hobley 1910, p. 148"
          },
          {
            "target": "mũrũme (pl. arũme / barũme)",
            "source": "Man",
            "pronunciation": "moo-roo-meh"
          },
          {
            "target": "Mū-kā; a-kā",
            "source": "Wife",
            "pronunciation": "mu-ka"
          },
          {
            "target": "mwana (pl. aana / baana) / kaana (pl. tũana)",
            "source": "Child",
            "pronunciation": "mwana"
          },
          {
            "target": "Mu-thamaki; a-. Mu-nene",
            "source": "Chief",
            "pronunciation": "mu-thamaki a- mu-nene a"
          },
          {
            "target": "Mū-rū wa maiya (K.). Mū-ārī wa maitū",
            "source": "Sister",
            "pronunciation": "mu-ru wa maiya"
          },
          {
            "target": "Mu-ru wa maiya (K.); a-rūa maiya. Mū-rata (M., Mw.)",
            "source": "Brother",
            "pronunciation": "mu-ru wa maiya"
          },
          {
            "target": "Mū-thūri; a-. Mū-rūme",
            "source": "Husband",
            "pronunciation": "mu-thuri"
          },
          {
            "target": "Mū-rīū; a-rīū. Kī-hīī; i-hīī (boy)",
            "source": "Son, boy",
            "pronunciation": "mu-riu"
          }
        ],
        "sentences": [
          {
            "target": "Murungu — mũrũme",
            "source": "God — Man."
          },
          {
            "target": "Mū-kā — mwana",
            "source": "Wife — Child."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Murungu\" mean in English?",
            "correctAnswer": "God",
            "options": [
              "Man",
              "Wife",
              "Child",
              "God"
            ],
            "hint": "Core vocabulary in Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Man\"",
            "correctAnswer": "mũrũme",
            "acceptedAnswers": [
              "mũrũme (pl. arũme / barũme)",
              "mũrũme"
            ],
            "hint": "Starts with \"mũ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Mū-kā\"",
            "correctAnswer": "Wife",
            "acceptedAnswers": [
              "Wife",
              "Wife"
            ],
            "hint": "Review Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Kinship Terms, Elders & Household Roles with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Murungu",
                "right": "God"
              },
              {
                "left": "mũrũme",
                "right": "Man"
              },
              {
                "left": "Mū-kā",
                "right": "Wife"
              },
              {
                "left": "mwana",
                "right": "Child"
              },
              {
                "left": "Mu-thamaki",
                "right": "Chief"
              }
            ]
          }
        ]
      },
      {
        "id": "meru-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "mwana (pl. aana / baana) / kaana (pl. tũana)",
            "source": "Child",
            "pronunciation": "mwa-na / kaa-na",
            "hint": "Johnston 1919, Vol. I, p. 100 #11a Meru"
          },
          {
            "target": "mũka (pl. aka / baka)",
            "source": "Woman",
            "pronunciation": "mu-ka",
            "hint": "Johnston 1919, Vol. I, p. 106 #11a Meru"
          },
          {
            "target": "mũrũme (pl. arũme / barũme)",
            "source": "Man",
            "pronunciation": "mu-ru-me",
            "hint": "Johnston 1919, Vol. I, p. 102 #11a Meru"
          },
          {
            "target": "maitũ / ng'ina (nyina)",
            "source": "Mother",
            "pronunciation": "mai-tu / ng'i-na",
            "hint": "Johnston 1919, Vol. I, p. 102 #11a Meru"
          },
          {
            "target": "baba (ithe)",
            "source": "Father",
            "pronunciation": "ba-ba",
            "hint": "Johnston 1919, Vol. I, p. 101 #11a Meru"
          },
          {
            "target": "Muntũ (pl. Antũ)",
            "source": "Person / human (Class 1/2: Mũ-/Ba-)",
            "pronunciation": "muntu",
            "hint": "Wikipedia Meru language — Noun classes"
          },
          {
            "target": "Mũkũrũ (pl. Akũrũ)",
            "source": "Elder (Class 1/2: Mũkũrũ / Akũrũ)",
            "pronunciation": "mu-ku-ru",
            "hint": "Wikipedia Meru language — Noun classes"
          },
          {
            "target": "Kana (pl. Twana)",
            "source": "Child / small child (Class 12/13: Ka-/Tũ-)",
            "pronunciation": "ka-na",
            "hint": "Wikipedia Meru language — Noun classes"
          },
          {
            "target": "mũka (pl. aka) / mũtumĩĩa",
            "source": "Woman, wife",
            "pronunciation": "muka"
          }
        ],
        "sentences": [
          {
            "target": "mwana — mũka",
            "source": "Child — Woman."
          },
          {
            "target": "mũrũme — maitũ",
            "source": "Man — Mother."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mwana\" mean in English?",
            "correctAnswer": "Child",
            "options": [
              "Woman",
              "Man",
              "Mother",
              "Child"
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Woman\"",
            "correctAnswer": "mũka",
            "acceptedAnswers": [
              "mũka (pl. aka / baka)",
              "mũka"
            ],
            "hint": "Starts with \"mũ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mũrũme\"",
            "correctAnswer": "Man",
            "acceptedAnswers": [
              "Man",
              "Man"
            ],
            "hint": "Review Clans, Marriage & Community Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mwana",
                "right": "Child"
              },
              {
                "left": "mũka",
                "right": "Woman"
              },
              {
                "left": "mũrũme",
                "right": "Man"
              },
              {
                "left": "maitũ",
                "right": "Mother"
              },
              {
                "left": "baba",
                "right": "Father"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "meru-unit-3",
    "unitNumber": 3,
    "title": "Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Meru (Kĩmĩĩrũ) built directly from C. W. Hobley (1910), Arthur M. Champion (1912), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Scale",
    "color": "#16A34A",
    "skills": [
      {
        "id": "meru-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "ikũmi (pl. mĩrongo)",
            "source": "Ten",
            "pronunciation": "i-ku-mi",
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          },
          {
            "target": "kenda",
            "source": "Nine",
            "pronunciation": "kenda",
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          },
          {
            "target": "inyanya",
            "source": "Eight",
            "pronunciation": "inyanya",
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          },
          {
            "target": "mũgwanja",
            "source": "Seven",
            "pronunciation": "mugwanja",
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          },
          {
            "target": "ithanthatu",
            "source": "Six",
            "pronunciation": "ithantha-tu",
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          },
          {
            "target": "ithano (-thano)",
            "source": "Five",
            "pronunciation": "itha-no",
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          },
          {
            "target": "inya (-nya)",
            "source": "Four",
            "pronunciation": "inya",
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          },
          {
            "target": "ithatu (-thatu)",
            "source": "Three",
            "pronunciation": "itha-tu",
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          },
          {
            "target": "iiri (bairi)",
            "source": "Two",
            "pronunciation": "ii-ri",
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          }
        ],
        "sentences": [
          {
            "target": "Akũrũ nĩbaaria ũhoro wa kenda.",
            "source": "The elders discussed nine."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikũmi (pl. mĩrongo)\" in Meru?",
            "correctAnswer": "Ten",
            "options": [
              "Ten",
              "Nine",
              "Eight",
              "Seven"
            ],
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kenda\" in Meru?",
            "correctAnswer": "Nine",
            "options": [
              "Eight",
              "Seven",
              "Ten",
              "Nine"
            ],
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"inyanya\" in Meru?",
            "correctAnswer": "Eight",
            "options": [
              "Seven",
              "Ten",
              "Eight",
              "Nine"
            ],
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eight\" in Meru?",
            "correctAnswer": "inyanya",
            "options": [
              "ikũmi",
              "kenda",
              "inyanya",
              "mũgwanja"
            ],
            "hint": "ee-nyah-nyah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Seven\" in Meru?",
            "correctAnswer": "mũgwanja",
            "options": [
              "ikũmi",
              "kenda",
              "inyanya",
              "mũgwanja"
            ],
            "hint": "moo-gwahn-jah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Meru expression with its English meaning:",
            "correctAnswer": "ikũmi (pl. mĩrongo): Ten",
            "pairs": [
              {
                "left": "ikũmi (pl. mĩrongo)",
                "right": "Ten"
              },
              {
                "left": "kenda",
                "right": "Nine"
              },
              {
                "left": "inyanya",
                "right": "Eight"
              },
              {
                "left": "mũgwanja",
                "right": "Seven"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Meru term for \"Six\": ___",
            "correctAnswer": "ithanthatu",
            "options": [
              "ikũmi",
              "kenda",
              "inyanya",
              "ithanthatu"
            ],
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          }
        ]
      },
      {
        "id": "meru-numbers-measures-trade-measures-3",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "imwe (-mwe)",
            "source": "One",
            "pronunciation": "imwe",
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          },
          {
            "target": "Sekondi",
            "source": "Second (time unit)",
            "pronunciation": "se-kondi"
          },
          {
            "target": "Mī-rōnggo ī-gīrī",
            "source": "Twenty",
            "pronunciation": "mi-ronggo i-giri"
          },
          {
            "target": "Mī-rōnggo ī-tātū",
            "source": "Thirty",
            "pronunciation": "mi-ronggo i-tatu"
          },
          {
            "target": "Mī-rōnggo ī-nā",
            "source": "Forty",
            "pronunciation": "mi-ronggo i-na"
          },
          {
            "target": "Mī-rōnggo ī-tāno",
            "source": "Fifty",
            "pronunciation": "mi-ronggo i-tano"
          },
          {
            "target": "I-gāna; ma-gāna",
            "source": "Hundred",
            "pronunciation": "i-gana"
          },
          {
            "target": "Ngīrī; ma-ngīrī",
            "source": "Thousand",
            "pronunciation": "ngi-ri"
          },
          {
            "target": "-ōthē",
            "source": "All",
            "pronunciation": "othe"
          }
        ],
        "sentences": [
          {
            "target": "Akũrũ nĩbaaria ũhoro wa Sekondi.",
            "source": "The elders discussed second."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"imwe (-mwe)\" in Meru?",
            "correctAnswer": "One",
            "options": [
              "One",
              "Second",
              "Twenty",
              "Thirty"
            ],
            "hint": "Johnston 1919, Vol. I, pp. 109–110 #11a Meru"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Sekondi\" in Meru?",
            "correctAnswer": "Second",
            "options": [
              "Twenty",
              "Thirty",
              "One",
              "Second"
            ],
            "hint": "Kĩmĩĩrũ — GitHub unicode-org/cldr (mer.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)",
            "acceptedAnswers": [
              "Second (time unit)",
              "Second"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mī-rōnggo ī-gīrī\" in Meru?",
            "correctAnswer": "Twenty",
            "options": [
              "Twenty",
              "Thirty",
              "One",
              "Second"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11 & 11a: Kikuyu, Meru, Chuka)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Twenty\" in Meru?",
            "correctAnswer": "Mī-rōnggo ī-gīrī",
            "options": [
              "Mī-rōnggo ī-gīrī",
              "imwe",
              "Sekondi",
              "I-gāna"
            ],
            "hint": "Starts with \"Mī…\" (16 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Thirty\" in Meru?",
            "correctAnswer": "Mī-rōnggo ī-tātū",
            "options": [
              "Mī-rōnggo ī-tātū",
              "imwe",
              "Sekondi",
              "I-gāna"
            ],
            "hint": "Starts with \"Mī…\" (16 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Meru expression with its English meaning:",
            "correctAnswer": "imwe (-mwe): One",
            "pairs": [
              {
                "left": "imwe (-mwe)",
                "right": "One"
              },
              {
                "left": "Sekondi",
                "right": "Second (time unit)"
              },
              {
                "left": "Mī-rōnggo ī-gīrī",
                "right": "Twenty"
              },
              {
                "left": "Mī-rōnggo ī-tātū",
                "right": "Thirty"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Meru term for \"Forty\": ___",
            "correctAnswer": "Mī-rōnggo ī-nā",
            "options": [
              "imwe",
              "Mī-rōnggo ī-nā",
              "Sekondi",
              "I-gāna"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11 & 11a: Kikuyu, Meru, Chuka)"
          }
        ]
      }
    ]
  },
  {
    "id": "meru-unit-4",
    "unitNumber": 4,
    "title": "Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Meru (Kĩmĩĩrũ) built directly from C. W. Hobley (1910), Arthur M. Champion (1912), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Tractor",
    "color": "#16A34A",
    "skills": [
      {
        "id": "meru-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "Ũcũrũ",
            "source": "Porridge / gruel (Class 14: Ũ-/Bũ-)",
            "pronunciation": "u-cu-ru",
            "hint": "Wikipedia Meru language — Noun classes"
          },
          {
            "target": "Rũũji / Rũĩ / Rũũyĩ",
            "source": "Water",
            "pronunciation": "ruu-ji / rui / ruu-yi",
            "hint": "Wikipedia Meru language — Dialects"
          },
          {
            "target": "Gī-kwa; i-kwa",
            "source": "Yam",
            "pronunciation": "gi-kwa"
          },
          {
            "target": "kũrĩa",
            "source": "Eat",
            "pronunciation": "koo-ree-ah"
          },
          {
            "target": "biakũrĩa (irio)",
            "source": "Food",
            "pronunciation": "byah-koo-ree-ah"
          },
          {
            "target": "ĩria",
            "source": "Milk",
            "pronunciation": "iria"
          },
          {
            "target": "nyama",
            "source": "Meat",
            "pronunciation": "nya-ma"
          },
          {
            "target": "Cūmbī",
            "source": "Salt",
            "pronunciation": "cumbi i-gata"
          },
          {
            "target": "Ū-ūkī; mō-ūkī",
            "source": "Honey",
            "pronunciation": "u-uki"
          }
        ],
        "sentences": [
          {
            "target": "Ũcũrũ — Rũũji",
            "source": "Porridge — Water."
          },
          {
            "target": "Gī-kwa — kũrĩa",
            "source": "Yam — Eat."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ũcũrũ\" mean in English?",
            "correctAnswer": "Porridge",
            "options": [
              "Water",
              "Yam",
              "Porridge",
              "Eat"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages",
            "acceptedAnswers": [
              "Porridge / gruel (Class 14: Ũ-/Bũ-)",
              "Porridge"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Water\"",
            "correctAnswer": "Rũũji",
            "acceptedAnswers": [
              "Rũũji / Rũĩ / Rũũyĩ",
              "Rũũji"
            ],
            "hint": "Starts with \"Rũ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Gī-kwa\"",
            "correctAnswer": "Yam",
            "acceptedAnswers": [
              "Yam",
              "Yam"
            ],
            "hint": "Review Staple Foods, Cookery & Beverages"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Staple Foods, Cookery & Beverages with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Ũcũrũ",
                "right": "Porridge"
              },
              {
                "left": "Rũũji",
                "right": "Water"
              },
              {
                "left": "Gī-kwa",
                "right": "Yam"
              },
              {
                "left": "kũrĩa",
                "right": "Eat"
              },
              {
                "left": "biakũrĩa",
                "right": "Food"
              }
            ]
          }
        ]
      },
      {
        "id": "meru-food-agriculture-crops-livestock-4",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "M-bembē; ma",
            "source": "Maize",
            "pronunciation": "m-bembe"
          },
          {
            "target": "kũnyua",
            "source": "Drink",
            "pronunciation": "koo-nywah"
          },
          {
            "target": "I-rigo; ma-. Gi-toke (fruit)",
            "source": "Banana",
            "pronunciation": "i-rigo"
          },
          {
            "target": "N-g'aragu",
            "source": "Hunger",
            "pronunciation": "n-g'aragu m-buta"
          },
          {
            "target": "Ma-guta. Ṅ-gorono (butter)",
            "source": "Fat, oil",
            "pronunciation": "ma-guta n-gorono"
          },
          {
            "target": "mbembe",
            "source": "Maize, corn",
            "pronunciation": "mbembe"
          },
          {
            "target": "ĩrĩgũ (pl. marĩgũ)",
            "source": "Banana (pl. bananas)",
            "pronunciation": "irigu"
          },
          {
            "target": "irio",
            "source": "Food, traditional mashed meal",
            "pronunciation": "i-rio"
          },
          {
            "target": "kũrĩa",
            "source": "To eat",
            "pronunciation": "ku-ria"
          }
        ],
        "sentences": [
          {
            "target": "M-bembē — kũnyua",
            "source": "Maize — Drink."
          },
          {
            "target": "I-rigo — N-g'aragu. M-būta",
            "source": "Banana — Hunger."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"M-bembē\" mean in English?",
            "correctAnswer": "Maize",
            "options": [
              "Drink",
              "Maize",
              "Banana",
              "Hunger"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Drink\"",
            "correctAnswer": "kũnyua",
            "acceptedAnswers": [
              "kũnyua",
              "kũnyua"
            ],
            "hint": "Starts with \"kũ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"I-rigo\"",
            "correctAnswer": "Banana",
            "acceptedAnswers": [
              "Banana",
              "Banana"
            ],
            "hint": "Review Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "M-bembē",
                "right": "Maize"
              },
              {
                "left": "kũnyua",
                "right": "Drink"
              },
              {
                "left": "I-rigo",
                "right": "Banana"
              },
              {
                "left": "N-g'aragu. M-būta",
                "right": "Hunger"
              },
              {
                "left": "Ma-guta. Ṅ-gorono",
                "right": "Fat, oil"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "meru-unit-5",
    "unitNumber": 5,
    "title": "Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Meru (Kĩmĩĩrũ) built directly from C. W. Hobley (1910), Arthur M. Champion (1912), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "PawPrint",
    "color": "#16A34A",
    "skills": [
      {
        "id": "meru-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "rũũji (rũĩ)",
            "source": "River",
            "pronunciation": "rũũji"
          },
          {
            "target": "Rũũji / Rũĩ / Rũũyĩ",
            "source": "Water",
            "pronunciation": "rũũji"
          },
          {
            "target": "riũa",
            "source": "Sun",
            "pronunciation": "ree-oo-ah"
          },
          {
            "target": "njata",
            "source": "Star",
            "pronunciation": "n-jah-tah"
          },
          {
            "target": "mweri",
            "source": "Moon",
            "pronunciation": "mweh-ree"
          },
          {
            "target": "mbura",
            "source": "Rain",
            "pronunciation": "mbu-ra"
          },
          {
            "target": "mwaki (pl. mĩaki)",
            "source": "Fire",
            "pronunciation": "mwaki"
          },
          {
            "target": "Muuga! / Ũrĩ mwega? (resp. Ndĩ mwega)",
            "source": "Hello",
            "pronunciation": "muuga"
          },
          {
            "target": "mweri (pl. mĩeri)",
            "source": "Moon, month",
            "pronunciation": "mweri"
          }
        ],
        "sentences": [
          {
            "target": "rũũji — Rũũji",
            "source": "River — Water."
          },
          {
            "target": "riũa — njata",
            "source": "Sun — Star."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"rũũji\" mean in English?",
            "correctAnswer": "River",
            "options": [
              "Water",
              "Sun",
              "Star",
              "River"
            ],
            "hint": "Starts with \"Ri…\" (5 letters)"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Water\"",
            "correctAnswer": "Rũũji",
            "acceptedAnswers": [
              "Rũũji / Rũĩ / Rũũyĩ",
              "Rũũji"
            ],
            "hint": "Starts with \"Rũ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"riũa\"",
            "correctAnswer": "Sun",
            "acceptedAnswers": [
              "Sun",
              "Sun"
            ],
            "hint": "Review Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Sky, Weather, Rivers & Landforms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "rũũji",
                "right": "River"
              },
              {
                "left": "Rũũji",
                "right": "Water"
              },
              {
                "left": "riũa",
                "right": "Sun"
              },
              {
                "left": "njata",
                "right": "Star"
              },
              {
                "left": "mweri",
                "right": "Moon"
              }
            ]
          }
        ]
      },
      {
        "id": "meru-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "kĩrĩma (pl. irĩma)",
            "source": "Mountain / Hill",
            "pronunciation": "ki-ri-ma",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "rũũji (rũĩ)",
            "source": "River",
            "pronunciation": "ruu-ji",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "ĩiga (pl. maiga)",
            "source": "Stone / Rock",
            "pronunciation": "ii-ga",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "njata",
            "source": "Star, stars",
            "pronunciation": "nja-ta"
          },
          {
            "target": "rũũĩ (pl. njũũĩ)",
            "source": "River, stream",
            "pronunciation": "ruui"
          },
          {
            "target": "manjĩ / maĩ",
            "source": "Water (Class 6)",
            "pronunciation": "manji"
          },
          {
            "target": "mũrũrĩ (pl. mĩrũrĩ)",
            "source": "Forest, woodland",
            "pronunciation": "mururi"
          },
          {
            "target": "nyũngũ",
            "source": "Clay cooking pot",
            "pronunciation": "nyungu"
          },
          {
            "target": "mũthetu / tĩĩri",
            "source": "Soil, earth, ground",
            "pronunciation": "muthetu"
          }
        ],
        "sentences": [
          {
            "target": "kĩrĩma — rũũji",
            "source": "Mountain — River."
          },
          {
            "target": "ĩiga — njata",
            "source": "Stone — Star, stars."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kĩrĩma\" mean in English?",
            "correctAnswer": "Mountain",
            "options": [
              "River",
              "Stone",
              "Star",
              "Mountain"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees",
            "acceptedAnswers": [
              "Mountain / Hill",
              "Mountain"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"River\"",
            "correctAnswer": "rũũji",
            "acceptedAnswers": [
              "rũũji (rũĩ)",
              "rũũji"
            ],
            "hint": "Starts with \"rũ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ĩiga\"",
            "correctAnswer": "Stone",
            "acceptedAnswers": [
              "Stone / Rock",
              "Stone"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kĩrĩma",
                "right": "Mountain"
              },
              {
                "left": "rũũji",
                "right": "River"
              },
              {
                "left": "ĩiga",
                "right": "Stone"
              },
              {
                "left": "njata",
                "right": "Star, stars"
              },
              {
                "left": "rũũĩ",
                "right": "River, stream"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "meru-unit-6",
    "unitNumber": 6,
    "title": "The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Meru (Kĩmĩĩrũ) built directly from C. W. Hobley (1910), Arthur M. Champion (1912), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "User",
    "color": "#16A34A",
    "skills": [
      {
        "id": "meru-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "rũrĩmĩ (pl. ndĩmĩ)",
            "source": "Tongue, language",
            "pronunciation": "rũrĩmĩ"
          },
          {
            "target": "Riitho (pl. Meetho)",
            "source": "Eye (Class 5/6: Ri-/Ma-)",
            "pronunciation": "riitho"
          },
          {
            "target": "Kũgũrũ",
            "source": "Leg / foot (Class 15: Kũ-)",
            "pronunciation": "ku-gu-ru"
          },
          {
            "target": "Kĩara (pl. Bĩara)",
            "source": "Finger (Class 7/8: Kĩ-/Bĩ-)",
            "pronunciation": "kiara"
          },
          {
            "target": "Rũreme (pl. Ndeme)",
            "source": "Tongue (Class 11/10: Rũ-/N-)",
            "pronunciation": "rureme"
          },
          {
            "target": "mũtwe (pl. mĩtwe)",
            "source": "Head",
            "pronunciation": "mutwe"
          },
          {
            "target": "inyũrũ (pl. manyũrũ)",
            "source": "Nose",
            "pronunciation": "inyuru"
          },
          {
            "target": "kanyua (pl. tũnyua)",
            "source": "Mouth",
            "pronunciation": "kanyua"
          },
          {
            "target": "njara /oko (pl. moko)",
            "source": "Hand, arm",
            "pronunciation": "njara"
          },
          {
            "target": "kũgũrũ (pl. magũrũ)",
            "source": "Leg, foot",
            "pronunciation": "kuguru"
          },
          {
            "target": "Matu (sg. Kũtũ)",
            "source": "Ears (Mweru)",
            "pronunciation": "ma-tu"
          },
          {
            "target": "rĩitho (pl. metho)",
            "source": "Eye (pl. eyes)",
            "pronunciation": "riitho"
          },
          {
            "target": "gũtũ (pl. matũ)",
            "source": "Ear (pl. ears)",
            "pronunciation": "gutu"
          }
        ],
        "sentences": [
          {
            "target": "rũrĩmĩ — Riitho",
            "source": "Tongue, language — Eye."
          },
          {
            "target": "Kũgũrũ — Kĩara",
            "source": "Leg — Finger."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"rũrĩmĩ\" mean in English?",
            "correctAnswer": "Tongue",
            "options": [
              "Eye",
              "Tongue",
              "Leg",
              "Finger"
            ],
            "hint": "Core vocabulary in Parts of the Body & Physical Senses",
            "acceptedAnswers": [
              "Tongue, language",
              "Tongue"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Eye (Class 5/6: Ri-/Ma-)\"",
            "correctAnswer": "Riitho",
            "acceptedAnswers": [
              "Riitho (pl. Meetho)",
              "Riitho"
            ],
            "hint": "Starts with \"Ri\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Kũgũrũ\"",
            "correctAnswer": "Leg",
            "acceptedAnswers": [
              "Leg / foot (Class 15: Kũ-)",
              "Leg"
            ],
            "hint": "Review Parts of the Body & Physical Senses"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Parts of the Body & Physical Senses with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "rũrĩmĩ",
                "right": "Tongue, language"
              },
              {
                "left": "Riitho",
                "right": "Eye"
              },
              {
                "left": "Kũgũrũ",
                "right": "Leg"
              },
              {
                "left": "Kĩara",
                "right": "Finger"
              },
              {
                "left": "Rũreme",
                "right": "Tongue"
              }
            ]
          }
        ]
      },
      {
        "id": "meru-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "Nteithia / Ntethia",
            "source": "Help me",
            "pronunciation": "nteithia / ntethia",
            "hint": "Wikipedia Meru language — Sample phrases"
          },
          {
            "target": "rũrĩmĩ (pl. ndĩmĩ)",
            "source": "Tongue, language",
            "pronunciation": "rurimi"
          },
          {
            "target": "ĩrĩo (pl. meeno)",
            "source": "Tooth (pl. teeth)",
            "pronunciation": "irio"
          },
          {
            "target": "ngoro",
            "source": "Heart, spirit, mind",
            "pronunciation": "ngo-ro"
          },
          {
            "target": "Gu-oko; m-oko",
            "source": "Arm",
            "pronunciation": "gu-oko m-oko"
          },
          {
            "target": "Gū-tū; ma-tū",
            "source": "Ear",
            "pronunciation": "gu-tu"
          },
          {
            "target": "R-ītho; ma-ītho",
            "source": "Eye",
            "pronunciation": "r-itho"
          },
          {
            "target": "Kū-gūrū; ma-. Mū-thīrīmo (shin). Kī-zimo",
            "source": "Leg",
            "pronunciation": "ku-guru"
          },
          {
            "target": "Kī-ara; ci-ara",
            "source": "Toe",
            "pronunciation": "ki-ara"
          }
        ],
        "sentences": [
          {
            "target": "Nteithia — rũrĩmĩ",
            "source": "Help me — Tongue, language."
          },
          {
            "target": "ĩrĩo — ngoro",
            "source": "Tooth — Heart, spirit, mind."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nteithia\" mean in English?",
            "correctAnswer": "Help me",
            "options": [
              "Help me",
              "Tongue",
              "Tooth",
              "Heart"
            ],
            "hint": "Core vocabulary in Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Tongue, language\"",
            "correctAnswer": "rũrĩmĩ",
            "acceptedAnswers": [
              "rũrĩmĩ (pl. ndĩmĩ)",
              "rũrĩmĩ"
            ],
            "hint": "Starts with \"rũ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ĩrĩo\"",
            "correctAnswer": "Tooth",
            "acceptedAnswers": [
              "Tooth (pl. teeth)",
              "Tooth"
            ],
            "hint": "Review Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Health, Traditional Medicine & Emergency Terms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Nteithia",
                "right": "Help me"
              },
              {
                "left": "rũrĩmĩ",
                "right": "Tongue, language"
              },
              {
                "left": "ĩrĩo",
                "right": "Tooth"
              },
              {
                "left": "ngoro",
                "right": "Heart, spirit, mind"
              },
              {
                "left": "Gu-oko",
                "right": "Arm"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "meru-unit-7",
    "unitNumber": 7,
    "title": "Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Meru (Kĩmĩĩrũ) built directly from C. W. Hobley (1910), Arthur M. Champion (1912), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Compass",
    "color": "#16A34A",
    "skills": [
      {
        "id": "meru-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "Ngakũringĩra thimũ",
            "source": "I will phone / call you",
            "pronunciation": "nga-ku-ringi-ra thi-mu",
            "hint": "Wikipedia Meru language — Sample phrases"
          },
          {
            "target": "Uma nja",
            "source": "Get out",
            "pronunciation": "uma nja / tu-ra",
            "hint": "Wikipedia Meru language — Dialects"
          },
          {
            "target": "Tũra",
            "source": "go outside (Imenti/Chuka/Tharaka: Uma nja; Tigania: Tũra)",
            "pronunciation": "uma nja / tu-ra",
            "hint": "Wikipedia Meru language — Dialects"
          },
          {
            "target": "Jũkia",
            "source": "Take (imperative)",
            "pronunciation": "ju-kia",
            "hint": "Wikipedia Meru language — Sample phrases"
          },
          {
            "target": "Mbĩra",
            "source": "Tell me",
            "pronunciation": "mbi-ra",
            "hint": "Wikipedia Meru language — Sample phrases"
          },
          {
            "target": "kũaa (-aa) / kũnenga",
            "source": "To give",
            "pronunciation": "kũaa"
          },
          {
            "target": "Njĩtagwa",
            "source": "My name is",
            "pronunciation": "njĩtagwa"
          },
          {
            "target": "kuona (-ona)",
            "source": "To see",
            "pronunciation": "kwoh-nah"
          },
          {
            "target": "kũigua (-igua)",
            "source": "To hear",
            "pronunciation": "koo-ee-gwah"
          },
          {
            "target": "kũmenya (-menya)",
            "source": "To know",
            "pronunciation": "koo-meh-nyah"
          }
        ],
        "sentences": [
          {
            "target": "Ngakũringĩra thimũ — Uma nja",
            "source": "I will phone — Get out."
          },
          {
            "target": "Jũkia — Mbĩra",
            "source": "Take — Tell me."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ngakũringĩra thimũ\" mean in English?",
            "correctAnswer": "I will phone",
            "options": [
              "Get out",
              "Take",
              "Tell me",
              "I will phone"
            ],
            "hint": "Core vocabulary in Essential Action & Motion Verbs",
            "acceptedAnswers": [
              "I will phone / call you",
              "I will phone"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Get out / go outside\"",
            "correctAnswer": "Uma nja",
            "acceptedAnswers": [
              "Uma nja / Tũra",
              "Uma nja"
            ],
            "hint": "Starts with \"Um\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Jũkia\"",
            "correctAnswer": "Take",
            "acceptedAnswers": [
              "Take (imperative)",
              "Take"
            ],
            "hint": "Review Essential Action & Motion Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Essential Action & Motion Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Ngakũringĩra thimũ",
                "right": "I will phone"
              },
              {
                "left": "Uma nja",
                "right": "Get out"
              },
              {
                "left": "Jũkia",
                "right": "Take"
              },
              {
                "left": "Mbĩra",
                "right": "Tell me"
              },
              {
                "left": "kũaa",
                "right": "To give"
              }
            ]
          }
        ]
      },
      {
        "id": "meru-verbs-grammar-verbal-derivatives-7",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "kũaa (-aa) / kũnenga",
            "source": "To give",
            "pronunciation": "koo-ah"
          },
          {
            "target": "Njĩtagwa",
            "source": "My name is",
            "pronunciation": "njĩtagwa..."
          },
          {
            "target": "kwenda (Inkwendete = I love you)",
            "source": "To love / like",
            "pronunciation": "kwehn-dah"
          },
          {
            "target": "kwaria",
            "source": "To speak, talk",
            "pronunciation": "kwa-ria"
          },
          {
            "target": "kũrora",
            "source": "To look",
            "pronunciation": "kurora"
          },
          {
            "target": "kwona",
            "source": "to see",
            "pronunciation": "kurora"
          },
          {
            "target": "kwenda",
            "source": "To love, want, like",
            "pronunciation": "kwenda"
          },
          {
            "target": "kũmenya",
            "source": "To know, understand",
            "pronunciation": "ku-menya"
          },
          {
            "target": "kũigua",
            "source": "To hear, listen, feel",
            "pronunciation": "kui-gua"
          },
          {
            "target": "kũruta wĩra",
            "source": "To work",
            "pronunciation": "ku-ru-ta wi-ra / ku-ri-ma"
          },
          {
            "target": "kũrĩma",
            "source": "to cultivate",
            "pronunciation": "ku-ru-ta wi-ra / ku-ri-ma"
          }
        ],
        "sentences": [
          {
            "target": "kũaa — Njĩtagwa",
            "source": "To give — My name is."
          },
          {
            "target": "kwenda — kwaria",
            "source": "To love — To speak, talk."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kũaa\" mean in English?",
            "correctAnswer": "To give",
            "options": [
              "To give",
              "My name is",
              "To love",
              "To speak"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"My name is\"",
            "correctAnswer": "Njĩtagwa",
            "acceptedAnswers": [
              "Njĩtagwa",
              "Njĩtagwa"
            ],
            "hint": "Starts with \"Nj\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kwenda\"",
            "correctAnswer": "To love",
            "acceptedAnswers": [
              "To love / like",
              "To love"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kũaa",
                "right": "To give"
              },
              {
                "left": "Njĩtagwa",
                "right": "My name is"
              },
              {
                "left": "kwenda",
                "right": "To love"
              },
              {
                "left": "kwaria",
                "right": "To speak, talk"
              },
              {
                "left": "kũrora",
                "right": "To look at"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "meru-unit-8",
    "unitNumber": 8,
    "title": "Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Meru (Kĩmĩĩrũ) built directly from C. W. Hobley (1910), Arthur M. Champion (1912), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Map",
    "color": "#16A34A",
    "skills": [
      {
        "id": "meru-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "Njuraĩ (NJR)",
            "source": "July (Month 7)",
            "pronunciation": "njuraĩ"
          },
          {
            "target": "mũthenya",
            "source": "Day",
            "pronunciation": "moo-theh-nyah"
          },
          {
            "target": "ũtukũ",
            "source": "Night",
            "pronunciation": "utuku"
          },
          {
            "target": "Narua",
            "source": "Today",
            "pronunciation": "na-rua"
          },
          {
            "target": "Rũjũ",
            "source": "Tomorrow",
            "pronunciation": "ru-ju"
          },
          {
            "target": "Ĩgoro",
            "source": "Yesterday",
            "pronunciation": "igoro"
          },
          {
            "target": "Gũntũ kwa thaa",
            "source": "Time zone",
            "pronunciation": "guntu kwa thaa"
          },
          {
            "target": "Mĩĩ (MĨĨ)",
            "source": "May (Month 5)",
            "pronunciation": "mii"
          },
          {
            "target": "Njuni (NJU)",
            "source": "June (Month 6)",
            "pronunciation": "njuni"
          }
        ],
        "sentences": [
          {
            "target": "Njuraĩ — mũthenya",
            "source": "July — Day."
          },
          {
            "target": "ũtukũ — Narua",
            "source": "Night — Today."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Njuraĩ\" mean in English?",
            "correctAnswer": "July",
            "options": [
              "Day",
              "Night",
              "Today",
              "July"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons",
            "acceptedAnswers": [
              "July (Month 7)",
              "July"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Day\"",
            "correctAnswer": "mũthenya",
            "acceptedAnswers": [
              "mũthenya",
              "mũthenya"
            ],
            "hint": "Starts with \"mũ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ũtukũ\"",
            "correctAnswer": "Night",
            "acceptedAnswers": [
              "Night",
              "Night"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Njuraĩ",
                "right": "July"
              },
              {
                "left": "mũthenya",
                "right": "Day"
              },
              {
                "left": "ũtukũ",
                "right": "Night"
              },
              {
                "left": "Narua",
                "right": "Today"
              },
              {
                "left": "Rũjũ",
                "right": "Tomorrow"
              }
            ]
          }
        ]
      },
      {
        "id": "meru-time-calendar-journey-navigation-8",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Meru (Kĩmĩĩrũ) (Kĩmĩĩrũ) in C. W. Hobley (1910 Notes on Mweru & Tharaka) & Sir Harry Johnston (1919 Group C #11a Meru & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Meru, Tharaka-Nithi.",
        "words": [
          {
            "target": "Kiumia (KIU)",
            "source": "Sunday (Day of the week)",
            "pronunciation": "kiu-mia"
          },
          {
            "target": "Muramuko (MRA)",
            "source": "Monday (Day of the week)",
            "pronunciation": "mu-ra-mu-ko"
          },
          {
            "target": "Wairi (WAI)",
            "source": "Tuesday (Day of the week)",
            "pronunciation": "wai-ri"
          },
          {
            "target": "Wethatu (WET)",
            "source": "Wednesday (Day of the week)",
            "pronunciation": "wetha-tu"
          },
          {
            "target": "Wena (WEN)",
            "source": "Thursday (Day of the week)",
            "pronunciation": "we-na"
          },
          {
            "target": "Wetano (WTN)",
            "source": "Friday (Day of the week)",
            "pronunciation": "we-ta-no"
          },
          {
            "target": "Jumamosi (JUM)",
            "source": "Saturday (Day of the week)",
            "pronunciation": "ju-ma-mo-si"
          },
          {
            "target": "Njuraĩ (NJR)",
            "source": "July (Month 7)",
            "pronunciation": "njurai"
          },
          {
            "target": "Machi (MAC)",
            "source": "March (Month 3)",
            "pronunciation": "machi"
          }
        ],
        "sentences": [
          {
            "target": "Kiumia — Muramuko",
            "source": "Sunday — Monday."
          },
          {
            "target": "Wairi — Wethatu",
            "source": "Tuesday — Wednesday."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kiumia\" mean in English?",
            "correctAnswer": "Sunday",
            "options": [
              "Monday",
              "Sunday",
              "Tuesday",
              "Wednesday"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks",
            "acceptedAnswers": [
              "Sunday (Day of the week)",
              "Sunday"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Monday (Day of the week)\"",
            "correctAnswer": "Muramuko",
            "acceptedAnswers": [
              "Muramuko (MRA)",
              "Muramuko"
            ],
            "hint": "Starts with \"Mu\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Wairi\"",
            "correctAnswer": "Tuesday",
            "acceptedAnswers": [
              "Tuesday (Day of the week)",
              "Tuesday"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Kiumia",
                "right": "Sunday"
              },
              {
                "left": "Muramuko",
                "right": "Monday"
              },
              {
                "left": "Wairi",
                "right": "Tuesday"
              },
              {
                "left": "Wethatu",
                "right": "Wednesday"
              },
              {
                "left": "Wena",
                "right": "Thursday"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "meru-unit-9",
    "unitNumber": 9,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Meru (Kĩmĩĩrũ) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#16A34A",
    "skills": [
      {
        "id": "meru-pd-corpus-9-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Meru (Kĩmĩĩrũ) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Meru (Kĩmĩĩrũ) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "Nyambeene / Jombeni",
            "source": "Nyambene Hills (Jombeni Range)",
            "pronunciation": "nyambee-ne / jombe-ni",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 155)"
          },
          {
            "target": "Angilo",
            "source": "Angilo (Meru clan whose totem is black cattle)",
            "pronunciation": "angi-lo",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 157)"
          },
          {
            "target": "Athinga",
            "source": "Athinga (Meru clan whose totem is the giraffe)",
            "pronunciation": "athinga",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 156)"
          },
          {
            "target": "Ntuni",
            "source": "Ntuni (Meru clan whose totem is red cattle)",
            "pronunciation": "ntu-ni",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 156)"
          },
          {
            "target": "Njaru",
            "source": "Njaru (Meru clan whose totem is white cattle)",
            "pronunciation": "nja-ru",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 156)"
          },
          {
            "target": "Athanya",
            "source": "Athanya (Meru clan whose totem is basket twine)",
            "pronunciation": "athanya",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 156)"
          },
          {
            "target": "Ntowaita",
            "source": "Ntowaita (dominant Meru clan of the red-sea crossing tradition)",
            "pronunciation": "nto-wai-ta",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, pp. 157–158)"
          },
          {
            "target": "Mwiria / Mwiriga",
            "source": "Totemic clan division (Mweru)",
            "pronunciation": "mwi-ria / mwi-ri-ga",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 156 — Notes on Mweru)"
          }
        ],
        "sentences": [
          {
            "target": "Mwiria wa Njaru, Ntuni, Angilo, Athinga, Athanya na Ntowaita (Netiri).",
            "source": "The Mweru totemic clans (Mwiria) and their sacred totems (Netiri) ."
          },
          {
            "target": "Akũrũ nĩbaaria ũhoro wa Angilo.",
            "source": "The elders discussed Angilo."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Nyambeene / Jombeni\" in Meru?",
            "correctAnswer": "Nyambene Hills",
            "options": [
              "Angilo",
              "Athinga",
              "Ntuni",
              "Nyambene Hills"
            ],
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 155)",
            "acceptedAnswers": [
              "Nyambene Hills (Jombeni Range)",
              "Nyambene Hills"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Meru (Kĩmĩĩrũ) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Nyambeene / Jombeni: Nyambene Hills (Jombeni Range)",
            "pairs": [
              {
                "left": "Nyambeene / Jombeni",
                "right": "Nyambene Hills (Jombeni Range)"
              },
              {
                "left": "Angilo",
                "right": "Angilo (Meru clan whose totem is black cattle)"
              },
              {
                "left": "Athinga",
                "right": "Athinga (Meru clan whose totem is the giraffe)"
              },
              {
                "left": "Ntuni",
                "right": "Ntuni (Meru clan whose totem is red cattle)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Meru (Kĩmĩĩrũ) term for \"Njaru (Meru clan whose totem is white cattle)\": ___",
            "correctAnswer": "Njaru",
            "options": [
              "Athanya",
              "Nyambeene",
              "Njaru",
              "Angilo"
            ],
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 156)"
          }
        ]
      },
      {
        "id": "meru-pd-corpus-9-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Meru (Kĩmĩĩrũ) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Meru (Kĩmĩĩrũ) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "Netiri",
            "source": "Totem / forbidden sacred thing (Mweru)",
            "pronunciation": "ne-ti-ri",
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 157 — Notes on Mweru)"
          },
          {
            "target": "Kī-shīī",
            "source": "Womb",
            "pronunciation": "ki-shii"
          },
          {
            "target": "Mū-gūrra",
            "source": "Woman",
            "pronunciation": "mu-gurra"
          },
          {
            "target": "Mā-ī, Ro-e",
            "source": "Water",
            "pronunciation": "ma-i ro-e"
          },
          {
            "target": "Mā-zigūma",
            "source": "Spring water",
            "pronunciation": "ma-ziguma"
          },
          {
            "target": "N-twmōi",
            "source": "Tail",
            "pronunciation": "n-twmoi"
          },
          {
            "target": "Siyare",
            "source": "Stick",
            "pronunciation": "si-ya-re"
          },
          {
            "target": "Kī-rāma",
            "source": "Spear",
            "pronunciation": "ki-rama"
          }
        ],
        "sentences": [
          {
            "target": "Akũrũ nĩbaaria ũhoro wa Kī-shīī.",
            "source": "The elders discussed womb."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Netiri\" in Meru?",
            "correctAnswer": "Totem",
            "options": [
              "Womb",
              "Totem",
              "Woman",
              "Water"
            ],
            "hint": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 157 — Notes on Mweru)",
            "acceptedAnswers": [
              "Totem / forbidden sacred thing (Mweru)",
              "Totem"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Meru (Kĩmĩĩrũ) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Netiri: Totem / forbidden sacred thing (Mweru)",
            "pairs": [
              {
                "left": "Netiri",
                "right": "Totem / forbidden sacred thing (Mweru)"
              },
              {
                "left": "Kī-shīī",
                "right": "Womb"
              },
              {
                "left": "Mū-gūrra",
                "right": "Woman"
              },
              {
                "left": "Mā-ī, Ro-e",
                "right": "Water"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Meru (Kĩmĩĩrũ) term for \"Spring water\": ___",
            "correctAnswer": "Mā-zigūma",
            "options": [
              "N-twmōi",
              "Mā-zigūma",
              "Netiri",
              "Kī-shīī"
            ],
            "hint": "11a. Meru / Chuka / Mwimbi / Tharaka (M.) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          }
        ]
      }
    ]
  },
  {
    "id": "meru-unit-10",
    "unitNumber": 10,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Meru (Kĩmĩĩrũ) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#16A34A",
    "skills": [
      {
        "id": "meru-open-dataset-10-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Megaphone",
        "description": "Learn core Meru (Kĩmĩĩrũ) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Meru (Kĩmĩĩrũ) dialects and everyday speech.",
        "words": [
          {
            "target": "Mū-ūmba",
            "source": "Song",
            "pronunciation": "mu-umba"
          },
          {
            "target": "N-jīwa",
            "source": "Pigeon",
            "pronunciation": "n-jiwa"
          },
          {
            "target": "Mami",
            "source": "Mother",
            "pronunciation": "ma-mi"
          },
          {
            "target": "ma- N-kīma",
            "source": "Monkey",
            "pronunciation": "ma n-kima"
          },
          {
            "target": "ma- N-gare",
            "source": "Leopard",
            "pronunciation": "ma n-gare"
          },
          {
            "target": "M-būta",
            "source": "Hunger",
            "pronunciation": "m-buta"
          },
          {
            "target": "I-thanwa",
            "source": "Hoe",
            "pronunciation": "i-thanwa"
          },
          {
            "target": "Ki-songua",
            "source": "Heel",
            "pronunciation": "ki-songua"
          }
        ],
        "sentences": [
          {
            "target": "Akũrũ nĩbaaria ũhoro wa N-jīwa.",
            "source": "The elders discussed pigeon."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mū-ūmba\" in Meru?",
            "correctAnswer": "Song",
            "options": [
              "Pigeon",
              "Song",
              "Mother",
              "Monkey"
            ],
            "hint": "11a. Meru / Chuka / Mwimbi / Tharaka (M.) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Meru (Kĩmĩĩrũ) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Mū-ūmba: Song",
            "pairs": [
              {
                "left": "Mū-ūmba",
                "right": "Song"
              },
              {
                "left": "N-jīwa",
                "right": "Pigeon"
              },
              {
                "left": "Mami",
                "right": "Mother"
              },
              {
                "left": "ma- N-kīma",
                "right": "Monkey"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Meru (Kĩmĩĩrũ) term for \"Leopard\": ___",
            "correctAnswer": "ma- N-gare",
            "options": [
              "M-būta",
              "ma- N-gare",
              "Mū-ūmba",
              "N-jīwa"
            ],
            "hint": "11a. Meru / Chuka / Mwimbi / Tharaka (M.) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
          }
        ]
      },
      {
        "id": "meru-open-dataset-10-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Meru (Kĩmĩĩrũ) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Meru (Kĩmĩĩrũ) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "Ki-hīa",
            "source": "Goat (he)",
            "pronunciation": "ki-hia"
          },
          {
            "target": "N-kuā",
            "source": "Ghost",
            "pronunciation": "n-kua"
          },
          {
            "target": "Gi-thaka",
            "source": "Forest",
            "pronunciation": "gi-thaka"
          },
          {
            "target": "Ṅ-korora",
            "source": "Fear",
            "pronunciation": "ng-korora"
          },
          {
            "target": "Baba, Ba-ba, Ba-va",
            "source": "Father",
            "pronunciation": "ba-ba ba-ba ba-va"
          },
          {
            "target": "Ci-eri",
            "source": "Face, forehead",
            "pronunciation": "ci-eri"
          },
          {
            "target": "Mū-ranggo",
            "source": "Door",
            "pronunciation": "mu-ranggo"
          },
          {
            "target": "Rū-sena",
            "source": "Country",
            "pronunciation": "ru-sena"
          }
        ],
        "sentences": [
          {
            "target": "Akũrũ nĩbaaria ũhoro wa N-kuā.",
            "source": "The elders discussed ghost."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ki-hīa\" in Meru?",
            "correctAnswer": "Goat",
            "options": [
              "Goat",
              "Ghost",
              "Forest",
              "Fear"
            ],
            "hint": "11a. Meru / Chuka / Mwimbi / Tharaka (M.) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)",
            "acceptedAnswers": [
              "Goat (he)",
              "Goat"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Meru (Kĩmĩĩrũ) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Ki-hīa: Goat (he)",
            "pairs": [
              {
                "left": "Ki-hīa",
                "right": "Goat (he)"
              },
              {
                "left": "N-kuā",
                "right": "Ghost"
              },
              {
                "left": "Gi-thaka",
                "right": "Forest"
              },
              {
                "left": "Ṅ-korora",
                "right": "Fear"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Meru (Kĩmĩĩrũ) term for \"Father\": ___",
            "correctAnswer": "Baba",
            "options": [
              "Ci-eri",
              "Ki-hīa",
              "Baba",
              "N-kuā"
            ],
            "hint": "11a. Meru / Chuka / Mwimbi / Tharaka (M.) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)",
            "acceptedAnswers": [
              "Baba, Ba-ba, Ba-va",
              "Baba"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "meru-unit-11",
    "unitNumber": 11,
    "title": "Kĩtharaka Loanword Phonology & Atharaka Ethnography",
    "description": "Master Prof. Kithaka wa Mberia's (2004, OPLL Vol. 2, pp. 45–57, Examples 1–18) analysis of Kĩtharaka borrowed words (7 vowels, /v, ð, ɣ/, Dahl's Law, n-propping of /d/, and prefix reanalysis) alongside Arthur M. Champion's (1912, JRAI Vol. 42, pp. 68–90 + Plate X) Atharaka age-grades, smithy, and 14 clans.",
    "icon": "BookOpen",
    "color": "#16A34A",
    "skills": [
      {
        "id": "meru-kitharaka-loanword-phonology-mberia-2004",
        "title": "Kĩtharaka Loanword Phonology & Dahl's Law",
        "icon": "Sparkles",
        "description": "Learn how Kĩtharaka adapts Swahili and English loanwords across Examples (1)–(18) in Kithaka wa Mberia (2004).",
        "tips": "In Kĩtharaka (Mberia 2004, pp. 45–57), foreign /p, b, f, v/ become /β/ (moβira, βaði, βurana) except [b] after Class 9/10 N- (mbuŋgɛ, mbureki); /k/ voices to /ɣ/ before a voiceless consonant via Dahl's Law (moɣatɛ < mkatɛ, karaɣita < træktə); and foreign /d/ is propped with /n/ to form [nd] (ndawa, nderesa, ndasita).",
        "words": [
          {
            "target": "movira (< mpira)",
            "source": "ball",
            "pronunciation": "moira"
          },
          {
            "target": "vaði (< pasi)",
            "source": "iron box",
            "pronunciation": "aði"
          },
          {
            "target": "movukɔ (< mfukɔ)",
            "source": "bag/pocket",
            "pronunciation": "mouk"
          },
          {
            "target": "vurana (< fulana)",
            "source": "vest/undershirt",
            "pronunciation": "urana"
          },
          {
            "target": "vaisikiri (< baiskɛli)",
            "source": "bicycle",
            "pronunciation": "aisikiri"
          },
          {
            "target": "vetɛrɔri (< petrəl)",
            "source": "petrol",
            "pronunciation": "etrri"
          },
          {
            "target": "mbuŋgɛ (< buŋgɛ)",
            "source": "parliament",
            "pronunciation": "mbuŋg"
          },
          {
            "target": "mbureki (< breɪk)",
            "source": "brake",
            "pronunciation": "mbureki"
          },
          {
            "target": "mbɔksi (< bɔks) | ðimo (< simu)",
            "source": "box (Ex. 2: [b] after N-) | telephone",
            "pronunciation": "mbksi-ðimo"
          },
          {
            "target": "mɛða (< mɛza)",
            "source": "table",
            "pronunciation": "mða"
          },
          {
            "target": "ða: (< sa:)",
            "source": "hour/watch",
            "pronunciation": "ða"
          },
          {
            "target": "monaði (< mnazi)",
            "source": "coconut tree",
            "pronunciation": "monaði"
          },
          {
            "target": "mosɛðɔ (< mtʃɛzɔ)",
            "source": "game (Ex. 6: /s, z/ → /ð/)",
            "pronunciation": "mosð"
          },
          {
            "target": "moɣatɛ (< mkatɛ) & karaɣita (< træktə) vs. karamu (< kalamu), motuka",
            "source": "bread & tractor vs. pen, motorcar & school (/k/ retained)",
            "pronunciation": "mo-ɣa-tɛ / ka-ra-ɣi-ta / ka-ra-mu / mo-tu-kaa / su-ku-ru",
            "hint": "Kithaka wa Mberia (2004, OPLL Vol. 2, pp. 50–51, Ex. 8–9)"
          },
          {
            "target": "ndawa (< dawa)",
            "source": "medicine",
            "pronunciation": "ndawa"
          },
          {
            "target": "nderesa (< dirisha)",
            "source": "window",
            "pronunciation": "nderesa"
          },
          {
            "target": "ndasita (< dʌstə)",
            "source": "duster",
            "pronunciation": "ndasita"
          },
          {
            "target": "ndiŋgiri (< digri:) | duka → ruka (Cl. 11) → pl. nduka (Cl. 10)",
            "source": "degree | shop → shops",
            "pronunciation": "ndiŋgiri-duka-ruka-pl"
          },
          {
            "target": "sanduku → esanduku (Cl. 5)",
            "source": "box",
            "pronunciation": "sanduku-esanduku"
          }
        ],
        "sentences": [
          {
            "target": "Moɣatɛ na karamu irĩ mɛða-inĩ",
            "source": "The bread (moɣatɛ, with Dahl's Law) and the pen (karamu) are on the table (mɛða)."
          }
        ]
      },
      {
        "id": "meru-atharaka-ethnography-champion-1912",
        "title": "Atharaka Age-Grades, Mutialu Smithy, Customary Law & 14 Clans",
        "icon": "Shield",
        "description": "Explore Arthur M. Champion's (1912, JRAI Vol. 42, pp. 68–90 + Plate X) ethnography of the Atharaka along the Tana (Kilaluma) River.",
        "tips": "Champion (1912, pp. 72–89) documents the 5 male grades (Karna, Kaegi, Ntheka/Ngoromo, Ntheka Nguru, Kisungi/Mundu Mukuru), 6 female grades (Karna, Kali, Idika [pl. Matika], Mwiki, Mukaa/Mubiki, Mwekuru), the Mutialu smithy (kianda), the 5th-night death rite Thela Luku, and all 14 Atharaka clans.",
        "words": [
          {
            "target": "Male Grades: Karna → Kaegi → Ntheka/Ngoromo (Mbabu & Mkilamana) →",
            "source": "Complete Atharaka male and female life-stage grades and circumcision-year sets (pp. 72–73)",
            "pronunciation": "male-grades-karna-kaegi",
            "hint": "Arthur M. Champion (1912, JRAI Vol. 42, pp. 72–73)"
          },
          {
            "target": "Mutialu Smithy (kianda, pp. 77–78): longo (bellows), ngao (nozzle)",
            "source": "Complete blacksmithing terminology at Mutialu in Atharaka",
            "pronunciation": "mutialu-smithy-longo",
            "hint": "Arthur M. Champion (1912, JRAI Vol. 42, pp. 77–78)"
          },
          {
            "target": "Thela Luku",
            "source": "5th-night burial purification, p. 85",
            "pronunciation": "thela-luku"
          },
          {
            "target": "Chiama",
            "source": "Mukuru ya Chiama, Ngoromo ya Chiama, Akuru ya Nthuli, Ithembo, pp. 86–87",
            "pronunciation": "chiama"
          },
          {
            "target": "14 Atharaka Clans (pp. 88–89): Utonga, Kandi, Mululu, Nyaga, Mbula",
            "source": "Complete table of 14 Atharaka clans and Plate X material artifacts",
            "pronunciation": "14-atharaka-clans-utonga",
            "hint": "Arthur M. Champion (1912, JRAI Vol. 42, pp. 88–90 & Plate X)"
          }
        ],
        "sentences": [
          {
            "target": "Akuru ya Chiama marĩ Ithembo-inĩ",
            "source": "The elders of the Chiama council are at the sacred grove (Ithembo)."
          }
        ]
      },
      {
        "id": "meru-open-datasets-thiomi",
        "title": "Mother-Tongue Literacy, Farming & Community Life",
        "icon": "Database",
        "description": "Practice contemporary Kĩmĩĩrũ (Meru) sentences from the Thiomi Dataset (94,933 approved pairs, CC-BY-4.0) and African Next Voices Kenya.",
        "culturalNote": "The Thiomi Dataset (Mutisya, Mugane et al. 2026, CC-BY-4.0) includes 94,933 expert-validated English–Kĩmĩĩrũ sentence pairs alongside 5,453 benchmark pairs in thiomi-5k.",
        "grammarTip": "In Kĩmĩĩrũ, Class 2 human plural nouns take prefix a- (aana bontheethu 'all our children') and concord prefix ba-/a- on verbs.",
        "words": [
          {
            "target": "Aana bontheethu",
            "source": "All our children",
            "pronunciation": "ah-ah-nah boh-ntheh-eh-thoo"
          },
          {
            "target": "Kũthoma",
            "source": "To read / study",
            "pronunciation": "koo-thoh-mah"
          },
          {
            "target": "Rũthiomi rwa mũciĩ",
            "source": "Home / Mother language",
            "pronunciation": "roo-thyoh-mee rwah moo-chee-ee"
          },
          {
            "target": "Kũgwatithia",
            "source": "To support / assist",
            "pronunciation": "koo-gwah-tee-thyah"
          },
          {
            "target": "Mũnda (pl. Mĩnda)",
            "source": "Farm / Garden",
            "pronunciation": "moo-ndah"
          },
          {
            "target": "Mũrimi (pl. Arĩmi)",
            "source": "Farmer",
            "pronunciation": "moo-ree-mee"
          },
          {
            "target": "Thĩĩri",
            "source": "Peace",
            "pronunciation": "thee-ee-ree"
          },
          {
            "target": "Rũũjĩ",
            "source": "Water / River",
            "pronunciation": "roo-oo-jee"
          }
        ],
        "sentences": [
          {
            "target": "Aana bontheethu nĩabatiĩ kũgwatithia kũthoma na rũthiomi rwao rwa mũciĩ.",
            "source": "All our children should be supported to read in their home language."
          }
        ]
      },
      {
        "id": "meru-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Meru (Kĩmĩĩrũ) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "The Thiomi Dataset Kimeru (CC-BY-4.0), Sunbird AI SALT-31 Kimeru (CC-BY-4.0), Open-Access Kitharaka Phonology Corpus (wa Mberia), CLDF ASJP v20 THARAKA & BantuBVD (CC-BY-4.0), SIL Bloom CC-BY-4.0 & Public Domain & Peer-Reviewed Linguistic Lexicons (Hobley 1910, Champion 1912, Dundas 1915, Johnston 1919, Mberia 2004 & Unicode CLDR mer.xml).",
        "words": [
          {
            "target": "Muuga!",
            "source": "Hello",
            "pronunciation": "muuga"
          },
          {
            "target": "Nĩwega",
            "source": "Thank you",
            "pronunciation": "niwega"
          },
          {
            "target": "Tigwa bwega, tharimwa",
            "source": "Goodbye, be blessed",
            "pronunciation": "tigwa bwe-ga tha-rimwa"
          },
          {
            "target": "Nĩwega mũno",
            "source": "Thank you very much",
            "pronunciation": "ni-we-ga mu-no"
          },
          {
            "target": "Ndekera",
            "source": "I am sorry / Forgive me",
            "pronunciation": "nde-ke-ra"
          },
          {
            "target": "Tigwa na wega",
            "source": "Stay well / Go well (Goodbye)",
            "pronunciation": "tigwa na we-ga / thii na we-ga"
          },
          {
            "target": "Muuga rũũkũ",
            "source": "Good morning (Kimeru)",
            "pronunciation": "muuga rũũkũ"
          },
          {
            "target": "Ũrĩ mwega?",
            "source": "How are you? (Singular / Plural)",
            "pronunciation": "ũrĩ mwega"
          },
          {
            "target": "Ndĩ mwega",
            "source": "I am fine / We are fine",
            "pronunciation": "ndĩ mwega"
          },
          {
            "target": "Gī-kwa",
            "source": "Yam",
            "pronunciation": "gi-kwa"
          }
        ],
        "sentences": [
          {
            "target": "Tigwa bwega, tharimwa",
            "source": "Goodbye, be blessed."
          },
          {
            "target": "Nĩwega mũno",
            "source": "Thank you very much."
          },
          {
            "target": "Tigwa na wega",
            "source": "Stay well / Go well (Goodbye)."
          },
          {
            "target": "Muuga rũũkũ",
            "source": "Good morning (Kimeru)."
          },
          {
            "target": "Ũrĩ mwega?",
            "source": "How are you? (Singular / Plural)."
          },
          {
            "target": "Ndĩ mwega",
            "source": "I am fine / We are fine."
          }
        ]
      },
      {
        "id": "meru-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Meru (Kĩmĩĩrũ) sentences for healthcare, transport, and community safety.",
        "culturalNote": "The Thiomi Dataset Kimeru (CC-BY-4.0), Sunbird AI SALT-31 Kimeru (CC-BY-4.0), Open-Access Kitharaka Phonology Corpus (wa Mberia), CLDF ASJP v20 THARAKA & BantuBVD (CC-BY-4.0), SIL Bloom CC-BY-4.0 & Public Domain & Peer-Reviewed Linguistic Lexicons (Hobley 1910, Champion 1912, Dundas 1915, Johnston 1919, Mberia 2004 & Unicode CLDR mer.xml).",
        "words": [
          {
            "target": "ikũmi",
            "source": "Ten",
            "pronunciation": "ikumi"
          },
          {
            "target": "ithanthatu",
            "source": "Six",
            "pronunciation": "ee-thahn-thah-too"
          },
          {
            "target": "iiri",
            "source": "Two",
            "pronunciation": "ee-ree / bah-ee-ree"
          },
          {
            "target": "imwe",
            "source": "One",
            "pronunciation": "ee-mweh"
          },
          {
            "target": "kenda",
            "source": "Nine",
            "pronunciation": "kehn-dah"
          },
          {
            "target": "ithano",
            "source": "Five",
            "pronunciation": "ee-thah-noh"
          },
          {
            "target": "inya",
            "source": "Four",
            "pronunciation": "ee-nyah"
          },
          {
            "target": "inyanya",
            "source": "Eight",
            "pronunciation": "ee-nyah-nyah"
          },
          {
            "target": "mũgwanja",
            "source": "Seven",
            "pronunciation": "moo-gwahn-jah"
          },
          {
            "target": "ithatu",
            "source": "Three",
            "pronunciation": "ee-thah-too"
          }
        ],
        "sentences": [
          {
            "target": "ithathatũ, mũgwanja, inyanya, kenda, ikũmi",
            "source": "Six (6), seven (7), eight (8), nine (9), ten (10)."
          }
        ]
      }
    ]
  }
];
