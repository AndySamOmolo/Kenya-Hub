import type { LanguageConfig, CourseUnit } from "../types";

export const EMBU_CONFIG: LanguageConfig = {
  "id": "embu",
  "name": "Embu",
  "nativeName": "Kîembu / Kîmbeere",
  "family": "Bantu",
  "counties": [
    "Embu",
    "Kirinyaga",
    "Tharaka-Nithi"
  ],
  "speakers": "610K",
  "speechLocale": "sw-KE",
  "description": "A Central Kenya (Mount Kenya) Bantu language spoken on the southern and south-eastern slopes of Kĩrĩnyaga (Mount Kenya) by the Aembu and Ambeere communities. Grounded in Sir Harry H. Johnston and C. W. Hobley (1910, 1922).",
  "color": "#059669",
  "sources": [
    "hobley-akamba-ethnology-1910",
    "johnston-bantu-1919",
    "bantu-beliefs",
    "open-web-swadesh-comparative"
  ]
};

export const EMBU_UNITS: CourseUnit[] = [
  {
    "id": "embu-unit-1",
    "unitNumber": 1,
    "title": "Greetings, Noun Classes, Numerals 1–10 & Kiama Heritage",
    "description": "Master Kîembu and Kîmbeere greetings, mũ-/a- and kĩ-/ci- noun classes, Dahl’s Law, and numbers 1–10.",
    "icon": "Crown",
    "color": "#059669",
    "skills": [
      {
        "id": "embu-greetings-nouns",
        "title": "Greetings, People & Mount Kenya Nature",
        "icon": "Users",
        "description": "Learn everyday Kîembu salutations, kinship nouns, and landscape terms.",
        "tips": "Kîembu preserves palatal/bilabial fricatives (v where Gĩkũyũ has h: e.g., ĩvia 'stone', mũvĩrĩga 'clan') and observes Dahl's Law voicing dissimilation (kũ-thiĩ -> gũthiĩ).",
        "culturalNote": "In Kîembu tradition documented by C. W. Hobley (1910) and Sir Harry Johnston (1919), the Kiama kia Ngome (Council of Elders) met in sacred groves (mũtitũ) to arbitrate community law.",
        "words": [
          {
            "target": "Wĩ mwega? (resp. Ndĩ mwega)",
            "source": "How are you? (I am well)",
            "pronunciation": "wi mwe-ga",
            "hint": "Standard Kîembu salutation"
          },
          {
            "target": "Mũrĩ ega?",
            "source": "How are you all?",
            "pronunciation": "mu-ri ega",
            "hint": "Standard Kîembu salutation"
          },
          {
            "target": "Nĩ wega mũno",
            "source": "Thank you very much",
            "pronunciation": "ni we-ga mu-no",
            "hint": "Gratitude"
          },
          {
            "target": "mundũ (pl. andũ)",
            "source": "Person (pl. People)",
            "pronunciation": "mundu",
            "hint": "Johnston (1919, Vol. I, p. 101 #11 Embu)"
          },
          {
            "target": "mũrũme (pl. arũme)",
            "source": "Man, husband",
            "pronunciation": "mu-ru-me",
            "hint": "Johnston (1919, Vol. I, pp. 100, 106 #11 Embu)"
          },
          {
            "target": "mũka (pl. aka)",
            "source": "Woman, wife",
            "pronunciation": "mu-ka",
            "hint": "Johnston (1919, Vol. I, pp. 100, 106 #11 Embu)"
          },
          {
            "target": "mwana (pl. ciana / aana)",
            "source": "Child (pl. Children)",
            "pronunciation": "mwa-na / cia-na",
            "hint": "Johnston (1919 #11 Embu)"
          },
          {
            "target": "baba",
            "source": "Father",
            "pronunciation": "ba-ba",
            "hint": "Johnston (1919 #11 Embu)"
          },
          {
            "target": "maitũ",
            "source": "Mother",
            "pronunciation": "mai-tu",
            "hint": "Johnston (1919 #11 Embu)"
          },
          {
            "target": "maĩ (manjĩ)",
            "source": "Water",
            "pronunciation": "mai / ma-nji",
            "hint": "Johnston (1919, Vol. I, pp. 99, 104, 106 #11 Embu)"
          },
          {
            "target": "mwaki",
            "source": "Fire",
            "pronunciation": "mwa-ki",
            "hint": "Johnston (1919, Vol. I, pp. 99, 104, 106 #11 Embu)"
          },
          {
            "target": "riũa",
            "source": "Sun",
            "pronunciation": "riua",
            "hint": "Johnston (1919, Vol. I, pp. 99, 104, 106 #11 Embu)"
          },
          {
            "target": "mũtĩ (pl. mĩtĩ)",
            "source": "Tree (pl. Trees)",
            "pronunciation": "mu-ti",
            "hint": "Johnston (1919, Vol. I, pp. 104–105 #11 Embu)"
          },
          {
            "target": "ĩvia (pl. mavia)",
            "source": "Stone (pl. Stones)",
            "pronunciation": "i-via",
            "hint": "Johnston (1919, Vol. I, pp. 104–105 #11 Embu)"
          },
          {
            "target": "Ngai (Murungu)",
            "source": "God",
            "pronunciation": "ngai / mu-ru-ngu",
            "hint": "Johnston (1919, Vol. I, p. 100 #11) & Hobley (1910)"
          },
          {
            "target": "Kĩrĩnyaga",
            "source": "Mount Kenya",
            "pronunciation": "ki-rinya-ga",
            "hint": "Johnston (1919, Vol. I, p. 100 #11) & Hobley (1910)"
          }
        ],
        "sentences": [
          {
            "target": "Wĩ mwega? Ndĩ mwega, nĩ wega mũno.",
            "source": "How are you? I am well, thank you very much."
          },
          {
            "target": "Mũtĩ ũmwe ndũtũũragia mũtitũ.",
            "source": "A single tree does not make a sacred grove."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Wĩ mwega?\" in Embu?",
            "correctAnswer": "How are you?",
            "options": [
              "Thank you very much",
              "Person",
              "Man",
              "How are you?"
            ],
            "hint": "Standard Kîembu salutation",
            "acceptedAnswers": [
              "How are you? (I am well) / How are you all?",
              "How are you?"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Nĩ wega mũno\" in Embu?",
            "correctAnswer": "Thank you very much",
            "options": [
              "How are you?",
              "Thank you very much",
              "Mount Kenya",
              "How are you all?"
            ],
            "hint": "Gratitude"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mundũ (pl. andũ)\" in Embu?",
            "correctAnswer": "Person",
            "options": [
              "Person",
              "Man",
              "How are you?",
              "Woman"
            ],
            "hint": "Johnston (1919, Vol. I, p. 101 #11 Embu)",
            "acceptedAnswers": [
              "Person (pl. People)",
              "Person"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Person (pl. People)\" in Embu?",
            "correctAnswer": "mundũ",
            "options": [
              "Wĩ mwega?",
              "Nĩ wega mũno",
              "mundũ",
              "mũrũme"
            ],
            "hint": "moon-doo / ahn-doo",
            "acceptedAnswers": [
              "mundũ (pl. andũ)",
              "mundũ"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Man\" in Embu?",
            "correctAnswer": "mũrũme",
            "options": [
              "Wĩ mwega?",
              "Nĩ wega mũno",
              "mundũ",
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
            "prompt": "Match each Embu expression with its English meaning:",
            "correctAnswer": "Wĩ mwega? (resp. Ndĩ mwega) / Mũrĩ ega?: How are you? (I am well) / How are you all?",
            "pairs": [
              {
                "left": "Wĩ mwega? (resp. Ndĩ mwega) / Mũrĩ ega?",
                "right": "How are you? (I am well) / How are you all?"
              },
              {
                "left": "Nĩ wega mũno",
                "right": "Thank you very much"
              },
              {
                "left": "mundũ (pl. andũ)",
                "right": "Person (pl. People)"
              },
              {
                "left": "mũrũme (pl. arũme) / mũka (pl. aka)",
                "right": "Man, husband / Woman, wife"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Embu term for \"Child\": ___",
            "correctAnswer": "mwana",
            "options": [
              "mwana",
              "Wĩ mwega?",
              "Nĩ wega mũno",
              "mundũ"
            ],
            "hint": "Johnston (1919 #11 Embu)",
            "acceptedAnswers": [
              "mwana (pl. ciana / aana) / baba / maitũ",
              "mwana (pl. ciana / aana)",
              "mwana"
            ]
          }
        ]
      },
      {
        "id": "embu-numbers-verbs",
        "title": "Numerals 1–10 & Everyday Verbs",
        "icon": "Hash",
        "description": "Count from 1 to 10 in Kîembu/Kîmbeere and practice high-frequency verbs.",
        "tips": "Johnston (1919, Vol. I, p. 107 #11) records the numerals 1–10 across Embu and Emberre: ĩmwe (1), igĩrĩ (2), ithatũ (3), inya (4), ithano (5), ithanthatũ (6), mũgwanja (7), inyanya (8), kenda (9), ikũmi (10).",
        "words": [
          {
            "target": "ĩmwe",
            "source": "One (1)",
            "pronunciation": "imwe",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "igĩrĩ",
            "source": "Two (2)",
            "pronunciation": "i-gi-ri",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "ithatũ",
            "source": "Three (3)",
            "pronunciation": "itha-tu",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "inya",
            "source": "Four (4)",
            "pronunciation": "inya",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "ithano",
            "source": "Five (5)",
            "pronunciation": "itha-no",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "ithanthatũ",
            "source": "Six (6)",
            "pronunciation": "ithantha-tu",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "mũgwanja",
            "source": "Seven (7)",
            "pronunciation": "mugwanja",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "inyanya",
            "source": "Eight (8)",
            "pronunciation": "inyanya",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "kenda",
            "source": "Nine (9)",
            "pronunciation": "kenda",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "ikũmi",
            "source": "Ten (10)",
            "pronunciation": "i-ku-mi",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "kũrĩa",
            "source": "To eat",
            "pronunciation": "ku-ria",
            "hint": "Class 15 infinitives"
          },
          {
            "target": "kũnyua",
            "source": "To drink",
            "pronunciation": "kunyua",
            "hint": "Class 15 infinitives"
          },
          {
            "target": "kũruga",
            "source": "To cook",
            "pronunciation": "ku-ru-ga",
            "hint": "Class 15 infinitives"
          },
          {
            "target": "gũthiĩ",
            "source": "To go",
            "pronunciation": "guthii",
            "hint": "Dahl’s Law voicing on gũthiĩ and gũũka"
          },
          {
            "target": "gũũka",
            "source": "To come",
            "pronunciation": "guu-ka",
            "hint": "Dahl’s Law voicing on gũthiĩ and gũũka"
          },
          {
            "target": "kwaria",
            "source": "To speak",
            "pronunciation": "kwa-ria",
            "hint": "Dahl’s Law voicing on gũthiĩ and gũũka"
          },
          {
            "target": "Kiama kia Ngome",
            "source": "Traditional Council of Elders",
            "pronunciation": "kia-ma kia ngo-me",
            "hint": "Aembu & Ambeere governance"
          }
        ],
        "sentences": [
          {
            "target": "Andũ aĩrĩ nĩmarĩrũta wĩra.",
            "source": "Two people are working."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ĩmwe, igĩrĩ, ithatũ, inya, ithano\" in Embu?",
            "correctAnswer": "1, 2, 3, 4, 5",
            "options": [
              "1, 2, 3, 4, 5",
              "6, 7, 8, 9, 10",
              "To eat",
              "To go"
            ],
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)",
            "acceptedAnswers": [
              "1, 2, 3, 4, 5",
              "1"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ithanthatũ, mũgwanja, inyanya, kenda, ikũmi\" in Embu?",
            "correctAnswer": "6, 7, 8, 9, 10",
            "options": [
              "To eat",
              "To go",
              "6, 7, 8, 9, 10",
              "1, 2, 3, 4, 5"
            ],
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)",
            "acceptedAnswers": [
              "6, 7, 8, 9, 10",
              "6"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kũrĩa\" in Embu?",
            "correctAnswer": "To eat",
            "options": [
              "To go",
              "To eat",
              "1",
              "6"
            ],
            "hint": "Class 15 infinitives",
            "acceptedAnswers": [
              "To eat / To drink / To cook",
              "To eat"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To eat\" in Embu?",
            "correctAnswer": "kũrĩa",
            "options": [
              "ĩmwe",
              "kũrĩa",
              "ithanthatũ",
              "gũthiĩ"
            ],
            "hint": "koo-ree-ah / koo-nywah / koo-roo-gah",
            "acceptedAnswers": [
              "kũrĩa / kũnyua / kũruga",
              "kũrĩa"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To go\" in Embu?",
            "correctAnswer": "gũthiĩ",
            "options": [
              "ĩmwe",
              "gũthiĩ",
              "ithanthatũ",
              "kũrĩa"
            ],
            "hint": "goo-thee / goo-kah / kwah-ree-ah",
            "acceptedAnswers": [
              "gũthiĩ / gũũka / kwaria",
              "gũthiĩ"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Embu expression with its English meaning:",
            "correctAnswer": "ĩmwe, igĩrĩ, ithatũ, inya, ithano: 1, 2, 3, 4, 5",
            "pairs": [
              {
                "left": "ĩmwe, igĩrĩ, ithatũ, inya, ithano",
                "right": "1, 2, 3, 4, 5"
              },
              {
                "left": "ithanthatũ, mũgwanja, inyanya, kenda, ikũmi",
                "right": "6, 7, 8, 9, 10"
              },
              {
                "left": "kũrĩa / kũnyua / kũruga",
                "right": "To eat / To drink / To cook"
              },
              {
                "left": "gũthiĩ / gũũka / kwaria",
                "right": "To go / To come / To speak"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Embu term for \"Traditional Council of Elders\": ___",
            "correctAnswer": "Kiama kia Ngome",
            "options": [
              "ĩmwe",
              "ithanthatũ",
              "Kiama kia Ngome",
              "kũrĩa"
            ],
            "hint": "Aembu & Ambeere governance"
          }
        ]
      }
    ]
  },
  {
    "id": "embu-unit-2",
    "unitNumber": 2,
    "title": "Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Users",
    "color": "#059669",
    "skills": [
      {
        "id": "embu-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "mũndũ (pl. andũ)",
            "source": "Person / Human being",
            "pronunciation": "mundu",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mũndũ mũrũme (pl. andũ arũme)",
            "source": "Man / Men",
            "pronunciation": "mundu mu-ru-me",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mũtumia (pl. atumia)",
            "source": "Woman / Married woman (pl. Women)",
            "pronunciation": "mu-tu-mia",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mũndũ mũka (pl. andũ aka)",
            "source": "Woman / Female person (pl. Women)",
            "pronunciation": "mundu mu-ka",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mũthuri (pl. athuri)",
            "source": "Husband",
            "pronunciation": "muthu-ri",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mwana (pl. ciana)",
            "source": "Child / Children",
            "pronunciation": "mwa-na",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mũrata (pl. arata)",
            "source": "Friend",
            "pronunciation": "mu-ra-ta",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ava / vava",
            "source": "Father",
            "pronunciation": "ava / va-va",
            "hint": "Kîembu kinship"
          },
          {
            "target": "maitũ / nyina",
            "source": "Mother",
            "pronunciation": "mai-tu / nyi-na",
            "hint": "Kîembu kinship"
          },
          {
            "target": "rĩĩtwa (pl. marĩĩtwa)",
            "source": "Name",
            "pronunciation": "riitwa",
            "hint": "Wikipedia Embu_language"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mũndũ\" in Embu?",
            "correctAnswer": "Person",
            "options": [
              "Man",
              "Person",
              "Woman",
              "Husband"
            ],
            "hint": "Wikipedia Embu_language",
            "acceptedAnswers": [
              "Person / Human being",
              "Person"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mũndũ mũrũme\" in Embu?",
            "correctAnswer": "Man",
            "options": [
              "Woman",
              "Man",
              "Husband",
              "Person"
            ],
            "hint": "Wikipedia Embu_language",
            "acceptedAnswers": [
              "Man / Men",
              "Man"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mũtumia\" in Embu?",
            "correctAnswer": "Woman",
            "options": [
              "Husband",
              "Person",
              "Woman",
              "Man"
            ],
            "hint": "Wikipedia Embu_language",
            "acceptedAnswers": [
              "Woman / Married woman (pl. Women)",
              "Woman / Women",
              "Woman"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Woman\" in Embu?",
            "correctAnswer": "mũtumia",
            "options": [
              "mũndũ",
              "mũndũ mũrũme",
              "mũtumia",
              "mũthuri"
            ],
            "hint": "mutumia / mundu muka",
            "acceptedAnswers": [
              "mũtumia (pl. atumia) / mũndũ mũka (pl. andũ aka)",
              "mũtumia"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Husband\" in Embu?",
            "correctAnswer": "mũthuri",
            "options": [
              "mũthuri",
              "mũndũ",
              "mũndũ mũrũme",
              "mũtumia"
            ],
            "hint": "muthuri (pl. athuri)",
            "acceptedAnswers": [
              "mũthuri (pl. athuri)",
              "mũthuri"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Embu expression with its English meaning:",
            "correctAnswer": "mũndũ (pl. andũ): Person / Human being",
            "pairs": [
              {
                "left": "mũndũ (pl. andũ)",
                "right": "Person / Human being"
              },
              {
                "left": "mũndũ mũrũme (pl. andũ arũme)",
                "right": "Man / Men"
              },
              {
                "left": "mũtumia (pl. atumia) / mũndũ mũka (pl. andũ aka)",
                "right": "Woman / Women"
              },
              {
                "left": "mũthuri (pl. athuri)",
                "right": "Husband"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Embu term for \"Child / Children\": ___",
            "correctAnswer": "mwana",
            "options": [
              "mũndũ",
              "mũndũ mũrũme",
              "mũtumia",
              "mwana"
            ],
            "hint": "Wikipedia Embu_language",
            "acceptedAnswers": [
              "mwana (pl. ciana)",
              "mwana"
            ]
          }
        ]
      },
      {
        "id": "embu-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "Ngai",
            "source": "God",
            "pronunciation": "ngai",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mũrũ wa maitũ (pl. arũ a maitũ)",
            "source": "Brother",
            "pronunciation": "mu-ru wa mai-tu"
          },
          {
            "target": "mũthamaki (pl. athamaki)",
            "source": "Chief / Leader",
            "pronunciation": "mu-tha-ma-ki"
          },
          {
            "target": "mwana (pl. ciana) / kaana",
            "source": "Child",
            "pronunciation": "mwa-na / kaa-na"
          },
          {
            "target": "mwarĩ wa maitũ",
            "source": "Sister",
            "pronunciation": "mwa-ri wa mai-tu"
          },
          {
            "target": "mũrĩũ (pl. arĩũ) / kĩhĩĩ",
            "source": "Son / Boy",
            "pronunciation": "mu-ri-u / ki-hii"
          },
          {
            "target": "mũthoni (pl. athoni)",
            "source": "In-law",
            "pronunciation": "mu-tho-ni"
          },
          {
            "target": "mũka (pl. aka) / mũtumĩĩa",
            "source": "Woman, wife",
            "pronunciation": "muka"
          },
          {
            "target": "mũrũme (pl. arũme)",
            "source": "Man, husband",
            "pronunciation": "murume"
          }
        ],
        "sentences": [
          {
            "target": "Mũthamaki nĩakũtongoria andũ na thayũ.",
            "source": "The chief leads the people in peace."
          },
          {
            "target": "Mwarĩ wa maitũ na mũrũ wa maiya marĩ mũciĩ.",
            "source": "My sister and my brother are at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ngai\" mean in English?",
            "correctAnswer": "God",
            "options": [
              "God",
              "Brother",
              "Chief",
              "Child"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Brother\"",
            "correctAnswer": "mũrũ wa maitũ"
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mũthamaki\"",
            "correctAnswer": "Chief"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Ngai",
                "right": "God"
              },
              {
                "left": "mũrũ wa maitũ",
                "right": "Brother"
              },
              {
                "left": "mũthamaki",
                "right": "Chief"
              },
              {
                "left": "mwana",
                "right": "Child"
              },
              {
                "left": "mwarĩ wa maitũ",
                "right": "Sister"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "embu-unit-3",
    "unitNumber": 3,
    "title": "Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Scale",
    "color": "#059669",
    "skills": [
      {
        "id": "embu-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "Ĩmwe",
            "source": "One",
            "pronunciation": "imwe",
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          },
          {
            "target": "Igĩrĩ",
            "source": "Two",
            "pronunciation": "i-gi-ri",
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          },
          {
            "target": "Ithatũ",
            "source": "Three",
            "pronunciation": "itha-tu",
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          },
          {
            "target": "Inya",
            "source": "Four",
            "pronunciation": "inya",
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          },
          {
            "target": "Ithano",
            "source": "Five",
            "pronunciation": "itha-no",
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          },
          {
            "target": "Ithathatũ / Ithanthatũ",
            "source": "Six",
            "pronunciation": "ithatha-tu / ithantha-tu",
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          },
          {
            "target": "Mũgwanja",
            "source": "Seven",
            "pronunciation": "mugwanja",
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          },
          {
            "target": "Inyanya",
            "source": "Eight",
            "pronunciation": "inyanya",
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          },
          {
            "target": "Kenda",
            "source": "Nine",
            "pronunciation": "kenda",
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ĩmwe\" in Embu?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "One",
              "Three",
              "Four"
            ],
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Igĩrĩ\" in Embu?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
              "One"
            ],
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ithatũ\" in Embu?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Embu?",
            "correctAnswer": "Ithatũ",
            "options": [
              "Ĩmwe",
              "Ithatũ",
              "Igĩrĩ",
              "Inya"
            ],
            "hint": "Starts with \"It…\" (6 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Embu?",
            "correctAnswer": "Inya",
            "options": [
              "Ĩmwe",
              "Igĩrĩ",
              "Inya",
              "Ithatũ"
            ],
            "hint": "Starts with \"In…\" (4 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Embu expression with its English meaning:",
            "correctAnswer": "Ĩmwe: One",
            "pairs": [
              {
                "left": "Ĩmwe",
                "right": "One"
              },
              {
                "left": "Igĩrĩ",
                "right": "Two"
              },
              {
                "left": "Ithatũ",
                "right": "Three"
              },
              {
                "left": "Inya",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Embu term for \"Five\": ___",
            "correctAnswer": "Ithano",
            "options": [
              "Ithano",
              "Ĩmwe",
              "Igĩrĩ",
              "Ithatũ"
            ],
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          }
        ]
      },
      {
        "id": "embu-numbers-measures-trade-measures-3",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "Ikũmi",
            "source": "Ten",
            "pronunciation": "i-ku-mi",
            "hint": "Wikipedia Embu_language — Kîembu numerals"
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
            "target": "igana (pl. magana)",
            "source": "Hundred",
            "pronunciation": "i-ga-na"
          },
          {
            "target": "ngiri (pl. mangiri)",
            "source": "Thousand",
            "pronunciation": "ngi-ri"
          },
          {
            "target": "-ōthē",
            "source": "All",
            "pronunciation": "othe"
          },
          {
            "target": "-īnggī",
            "source": "Plenty, many",
            "pronunciation": "inggi"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ikũmi\" in Embu?",
            "correctAnswer": "Ten",
            "options": [
              "Twenty",
              "Thirty",
              "Ten",
              "Forty"
            ],
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mī-rōnggo ī-gīrī\" in Embu?",
            "correctAnswer": "Twenty",
            "options": [
              "Twenty",
              "Thirty",
              "Forty",
              "Ten"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mī-rōnggo ī-tātū\" in Embu?",
            "correctAnswer": "Thirty",
            "options": [
              "Thirty",
              "Forty",
              "Ten",
              "Twenty"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Thirty\" in Embu?",
            "correctAnswer": "Mī-rōnggo ī-tātū",
            "options": [
              "Mī-rōnggo ī-tātū",
              "Ikũmi",
              "igana",
              "ngiri"
            ],
            "hint": "Starts with \"Mī…\" (16 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Forty\" in Embu?",
            "correctAnswer": "Mī-rōnggo ī-nā",
            "options": [
              "Ikũmi",
              "Mī-rōnggo ī-nā",
              "igana",
              "ngiri"
            ],
            "hint": "Starts with \"Mī…\" (14 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Embu expression with its English meaning:",
            "correctAnswer": "Ikũmi: Ten",
            "pairs": [
              {
                "left": "Ikũmi",
                "right": "Ten"
              },
              {
                "left": "Mī-rōnggo ī-gīrī",
                "right": "Twenty"
              },
              {
                "left": "Mī-rōnggo ī-tātū",
                "right": "Thirty"
              },
              {
                "left": "Mī-rōnggo ī-nā",
                "right": "Forty"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Embu term for \"Fifty\": ___",
            "correctAnswer": "Mī-rōnggo ī-tāno",
            "options": [
              "Ikũmi",
              "igana",
              "ngiri",
              "Mī-rōnggo ī-tāno"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          }
        ]
      }
    ]
  },
  {
    "id": "embu-unit-4",
    "unitNumber": 4,
    "title": "Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Tractor",
    "color": "#059669",
    "skills": [
      {
        "id": "embu-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "nyama",
            "source": "Meat",
            "pronunciation": "nya-ma",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "irio",
            "source": "Food",
            "pronunciation": "i-rio",
            "hint": "Mount Kenya Bantu (Kîembu)"
          },
          {
            "target": "cumbĩ",
            "source": "Salt",
            "pronunciation": "cumbi",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "maguta",
            "source": "Oil / Fat",
            "pronunciation": "ma-gu-ta",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ng'aragu",
            "source": "Hunger (general)",
            "pronunciation": "ng'a-ra-gu",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ngũmba",
            "source": "Hunger for meat",
            "pronunciation": "ngumba",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "gĩkwa (pl. ikwa)",
            "source": "Yam",
            "pronunciation": "gi-kwa"
          },
          {
            "target": "ĩtumbĩ (pl. matumbĩ)",
            "source": "Egg",
            "pronunciation": "itumbi"
          },
          {
            "target": "ĩria",
            "source": "Milk",
            "pronunciation": "iria"
          }
        ],
        "sentences": [
          {
            "target": "Mũtumia nĩakũruga irio na nyama.",
            "source": "The woman is cooking food and meat."
          },
          {
            "target": "Ĩkĩra cumbĩ na maguta nyũngũ-inĩ.",
            "source": "Put salt and oil in the cooking pot."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"nyama\" mean in English?",
            "correctAnswer": "Meat",
            "options": [
              "Food",
              "Salt",
              "Meat",
              "Oil"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Food\"",
            "correctAnswer": "irio",
            "acceptedAnswers": [
              "irio"
            ],
            "hint": "Starts with \"ir\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"cumbĩ\"",
            "correctAnswer": "Salt",
            "acceptedAnswers": [
              "Salt"
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
                "left": "irio",
                "right": "Food"
              },
              {
                "left": "cumbĩ",
                "right": "Salt"
              },
              {
                "left": "maguta",
                "right": "Oil"
              },
              {
                "left": "ng'aragu",
                "right": "Hunger"
              }
            ]
          }
        ]
      },
      {
        "id": "embu-food-agriculture-crops-livestock-4",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "irigo (pl. marigo) / gĩtoke",
            "source": "Banana",
            "pronunciation": "i-ri-go / gi-to-ke"
          },
          {
            "target": "maguta / ngorono",
            "source": "Fat / Oil / Butter",
            "pronunciation": "ma-gu-ta / ngo-ro-no"
          },
          {
            "target": "ũũkĩ",
            "source": "Honey",
            "pronunciation": "u-u-ki"
          },
          {
            "target": "nyama",
            "source": "Meat",
            "pronunciation": "nya-ma"
          },
          {
            "target": "mũvĩa",
            "source": "Sorghum",
            "pronunciation": "mu-vi-a"
          },
          {
            "target": "ng'aragu",
            "source": "Hunger",
            "pronunciation": "ng'a-ra-gu"
          },
          {
            "target": "mbembe",
            "source": "Maize, corn",
            "pronunciation": "mbembe"
          },
          {
            "target": "njohi",
            "source": "Traditional beer",
            "pronunciation": "njo-hi"
          },
          {
            "target": "mboso",
            "source": "Beans",
            "pronunciation": "mbo-so"
          },
          {
            "target": "nthooko",
            "source": "Cowpeas",
            "pronunciation": "nthoo-ko"
          }
        ],
        "sentences": [
          {
            "target": "Arĩmi nĩmavandaga mbembe, mboso, na nthooko mũgũnda-inĩ.",
            "source": "Farmers plant maize, beans, and cowpeas in the garden."
          },
          {
            "target": "Njũkĩ nĩciũmbaga ũũkĩ mũtĩ-inĩ.",
            "source": "Bees make honey in the tree."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"irigo\" mean in English?",
            "correctAnswer": "Banana",
            "options": [
              "Fat",
              "Banana",
              "Honey",
              "Meat"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Fat / Oil\"",
            "correctAnswer": "maguta"
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ũũkĩ\"",
            "correctAnswer": "Honey"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "irigo",
                "right": "Banana"
              },
              {
                "left": "maguta",
                "right": "Fat / Oil"
              },
              {
                "left": "ũũkĩ",
                "right": "Honey"
              },
              {
                "left": "nyama",
                "right": "Meat"
              },
              {
                "left": "mbembe",
                "right": "Maize"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "embu-unit-5",
    "unitNumber": 5,
    "title": "Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "PawPrint",
    "color": "#059669",
    "skills": [
      {
        "id": "embu-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "ĩria (pl. maria)",
            "source": "Lake / Sea / Ocean",
            "pronunciation": "i-ria",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mũri (pl. mĩri)",
            "source": "Root",
            "pronunciation": "mu-ri",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ĩthangũ (pl. mathangũ)",
            "source": "Leaf",
            "pronunciation": "ithangu",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ĩkoni",
            "source": "Bark (of tree)",
            "pronunciation": "i-ko-ni",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mũtĩ (pl. mĩtĩ)",
            "source": "Tree",
            "pronunciation": "mu-ti",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mũũ",
            "source": "Ash",
            "pronunciation": "muu",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ndogo",
            "source": "Smoke",
            "pronunciation": "ndo-go",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "rũkũ (pl. ngũũ)",
            "source": "Firewood",
            "pronunciation": "ru-ku",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mwaki",
            "source": "Fire",
            "pronunciation": "mwa-ki",
            "hint": "Wikipedia Embu_language"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ĩria\" in Embu?",
            "correctAnswer": "Lake",
            "options": [
              "Root",
              "Leaf",
              "Lake",
              "Bark"
            ],
            "hint": "Wikipedia Embu_language",
            "acceptedAnswers": [
              "Lake / Sea / Ocean",
              "Lake"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mũri (pl. mĩri)\" in Embu?",
            "correctAnswer": "Root",
            "options": [
              "Leaf",
              "Root",
              "Bark",
              "Lake"
            ],
            "hint": "Wikipedia Embu_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ĩthangũ (pl. mathangũ)\" in Embu?",
            "correctAnswer": "Leaf",
            "options": [
              "Leaf",
              "Bark",
              "Lake",
              "Root"
            ],
            "hint": "Wikipedia Embu_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leaf\" in Embu?",
            "correctAnswer": "ĩthangũ",
            "options": [
              "ĩria",
              "ĩthangũ",
              "mũri",
              "ĩkoni"
            ],
            "hint": "Starts with \"ĩt…\" (7 letters)",
            "acceptedAnswers": [
              "ĩthangũ (pl. mathangũ)",
              "ĩthangũ"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bark (of tree)\" in Embu?",
            "correctAnswer": "ĩkoni",
            "options": [
              "ĩria",
              "ĩkoni",
              "mũri",
              "ĩthangũ"
            ],
            "hint": "Starts with \"ĩk…\" (5 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Embu expression with its English meaning:",
            "correctAnswer": "ĩria (pl. maria): Lake / Sea / Ocean",
            "pairs": [
              {
                "left": "ĩria (pl. maria)",
                "right": "Lake / Sea / Ocean"
              },
              {
                "left": "mũri (pl. mĩri)",
                "right": "Root"
              },
              {
                "left": "ĩthangũ (pl. mathangũ)",
                "right": "Leaf"
              },
              {
                "left": "ĩkoni",
                "right": "Bark (of tree)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Embu term for \"Tree\": ___",
            "correctAnswer": "mũtĩ",
            "options": [
              "ĩria",
              "mũri",
              "mũtĩ",
              "ĩthangũ"
            ],
            "hint": "Wikipedia Embu_language",
            "acceptedAnswers": [
              "mũtĩ (pl. mĩtĩ)",
              "mũtĩ"
            ]
          }
        ]
      },
      {
        "id": "embu-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "karĩma",
            "source": "Hill",
            "pronunciation": "ka-ri-ma",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "kĩrĩma",
            "source": "Mountain",
            "pronunciation": "ki-ri-ma",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "karũnjĩ",
            "source": "Stream",
            "pronunciation": "ka-runji",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "rũnjĩ",
            "source": "River",
            "pronunciation": "runji",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mũthanga",
            "source": "Sand",
            "pronunciation": "muthanga",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "nthĩ",
            "source": "Ground / Earth",
            "pronunciation": "nthi",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mbura",
            "source": "Rain",
            "pronunciation": "mbu-ra",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ime",
            "source": "Dew",
            "pronunciation": "ime",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ĩtu (pl. matu)",
            "source": "Cloud",
            "pronunciation": "itu",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "rũvuvo",
            "source": "Wind",
            "pronunciation": "ru-vu-vo",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "matũ / igũrũ",
            "source": "Sky",
            "pronunciation": "matu"
          }
        ],
        "sentences": [
          {
            "target": "Rũnjĩ rũu rũfumaga kĩrĩma-inĩ gĩa Kĩrĩnyaga.",
            "source": "That river flows from the mountain of Mount Kenya."
          },
          {
            "target": "Mbura nĩĩkuura na nthĩ ĩkaiyũra maĩ.",
            "source": "The rain is falling and the ground is filling with water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"karĩma\" mean in English?",
            "correctAnswer": "Hill",
            "options": [
              "Stream",
              "Sand",
              "Ground",
              "Hill"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees",
            "acceptedAnswers": [
              "Hill / Mountain",
              "Hill"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Stream / River\"",
            "correctAnswer": "karũnjĩ",
            "acceptedAnswers": [
              "karũnjĩ / rũnjĩ",
              "karũnjĩ",
              "rũnjĩ"
            ],
            "hint": "Starts with \"ka\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mũthanga\"",
            "correctAnswer": "Sand",
            "acceptedAnswers": [
              "Sand"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "karĩma",
                "right": "Hill"
              },
              {
                "left": "karũnjĩ",
                "right": "Stream"
              },
              {
                "left": "mũthanga",
                "right": "Sand"
              },
              {
                "left": "nthĩ",
                "right": "Ground"
              },
              {
                "left": "mbura",
                "right": "Rain"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "embu-unit-6",
    "unitNumber": 6,
    "title": "The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "User",
    "color": "#059669",
    "skills": [
      {
        "id": "embu-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "kanyua",
            "source": "Mouth",
            "pronunciation": "kanyua",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "rĩitho (pl. metho)",
            "source": "Eye",
            "pronunciation": "riitho",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "kĩongo (pl. ciongo)",
            "source": "Head",
            "pronunciation": "kiongo",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "njuĩrĩ",
            "source": "Hair",
            "pronunciation": "njui-ri",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ĩgego (pl. magego)",
            "source": "Tooth",
            "pronunciation": "i-ge-go",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "rũrĩmĩ (pl. irĩmĩ)",
            "source": "Tongue",
            "pronunciation": "ru-ri-mi",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "inyiũrũ (pl. manyiũrũ)",
            "source": "Nose",
            "pronunciation": "inyiu-ru",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "gũtũ (pl. matũ)",
            "source": "Ear",
            "pronunciation": "gu-tu",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ngingo",
            "source": "Neck",
            "pronunciation": "ngingo",
            "hint": "Wikipedia Embu_language"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kanyua\" in Embu?",
            "correctAnswer": "Mouth",
            "options": [
              "Eye",
              "Mouth",
              "Head",
              "Hair"
            ],
            "hint": "Wikipedia Embu_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"rĩitho (pl. metho)\" in Embu?",
            "correctAnswer": "Eye",
            "options": [
              "Head",
              "Hair",
              "Mouth",
              "Eye"
            ],
            "hint": "Wikipedia Embu_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kĩongo (pl. ciongo)\" in Embu?",
            "correctAnswer": "Head",
            "options": [
              "Hair",
              "Head",
              "Mouth",
              "Eye"
            ],
            "hint": "Wikipedia Embu_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Head\" in Embu?",
            "correctAnswer": "kĩongo",
            "options": [
              "kĩongo",
              "kanyua",
              "rĩitho",
              "njuĩrĩ"
            ],
            "hint": "kiongo (pl. ciongo)",
            "acceptedAnswers": [
              "kĩongo (pl. ciongo)",
              "kĩongo"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hair\" in Embu?",
            "correctAnswer": "njuĩrĩ",
            "options": [
              "njuĩrĩ",
              "kanyua",
              "rĩitho",
              "kĩongo"
            ],
            "hint": "njuiri"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Embu expression with its English meaning:",
            "correctAnswer": "kanyua: Mouth",
            "pairs": [
              {
                "left": "kanyua",
                "right": "Mouth"
              },
              {
                "left": "rĩitho (pl. metho)",
                "right": "Eye"
              },
              {
                "left": "kĩongo (pl. ciongo)",
                "right": "Head"
              },
              {
                "left": "njuĩrĩ",
                "right": "Hair"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Embu term for \"Tooth\": ___",
            "correctAnswer": "ĩgego",
            "options": [
              "ĩgego",
              "kanyua",
              "rĩitho",
              "kĩongo"
            ],
            "hint": "Wikipedia Embu_language",
            "acceptedAnswers": [
              "ĩgego (pl. magego)",
              "ĩgego"
            ]
          }
        ]
      },
      {
        "id": "embu-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "njara",
            "source": "Hand",
            "pronunciation": "nja-ra",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "kĩvĩ (pl. ivĩ)",
            "source": "Arm",
            "pronunciation": "ki-vi",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mũmero (pl. mĩmero)",
            "source": "Throat",
            "pronunciation": "mu-me-ro",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "nyondo",
            "source": "Breast",
            "pronunciation": "nyondo",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ngunyu",
            "source": "Claw / Fingernail",
            "pronunciation": "ngunyu",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "kũgũrũ (pl. magũrũ)",
            "source": "Leg",
            "pronunciation": "ku-gu-ru",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "gĩtende (pl. itende)",
            "source": "Foot",
            "pronunciation": "gi-tende",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "nda",
            "source": "Belly",
            "pronunciation": "nda",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ĩvũ",
            "source": "Stomach",
            "pronunciation": "ivu",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ĩkonye",
            "source": "Navel",
            "pronunciation": "i-konye",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "mũthĩrĩmo",
            "source": "Shin",
            "pronunciation": "mu-thi-ri-mo"
          }
        ],
        "sentences": [
          {
            "target": "Thambia njara ciaku na maĩ mbere ya kũrĩa.",
            "source": "Wash your hands with water before eating."
          },
          {
            "target": "Kũgũrũ gwake nĩkũrũaru, nĩakũthiĩ kũrĩ mũgo.",
            "source": "His leg is sore, he is going to the healer."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"njara\" mean in English?",
            "correctAnswer": "Hand",
            "options": [
              "Arm",
              "Throat",
              "Hand",
              "Breast"
            ],
            "hint": "Core vocabulary in Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Arm\"",
            "correctAnswer": "kĩvĩ",
            "acceptedAnswers": [
              "kĩvĩ (pl. ivĩ)",
              "kĩvĩ"
            ],
            "hint": "Starts with \"kĩ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mũmero\"",
            "correctAnswer": "Throat",
            "acceptedAnswers": [
              "Throat"
            ],
            "hint": "Review Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Health, Traditional Medicine & Emergency Terms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "njara",
                "right": "Hand"
              },
              {
                "left": "kĩvĩ",
                "right": "Arm"
              },
              {
                "left": "mũmero",
                "right": "Throat"
              },
              {
                "left": "nyondo",
                "right": "Breast"
              },
              {
                "left": "ngunyu",
                "right": "Claw"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "embu-unit-7",
    "unitNumber": 7,
    "title": "Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "BookOpen",
    "color": "#059669",
    "skills": [
      {
        "id": "embu-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "ũka",
            "source": "Come",
            "pronunciation": "uka",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "tũma",
            "source": "Send",
            "pronunciation": "tu-ma",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "thiĩ",
            "source": "Walk / Go",
            "pronunciation": "thii",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "gũa",
            "source": "Fall",
            "pronunciation": "gua",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "uma",
            "source": "Leave / Come out",
            "pronunciation": "uma",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "itũrũra",
            "source": "Pour",
            "pronunciation": "i-tu-ru-ra",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "rĩnga",
            "source": "Strike",
            "pronunciation": "ringa",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "kũgoma",
            "source": "Hit",
            "pronunciation": "ku-go-ma",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "rũma",
            "source": "Bite",
            "pronunciation": "ru-ma",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "kua",
            "source": "Die",
            "pronunciation": "kua"
          }
        ],
        "sentences": [
          {
            "target": "Ũka haha tũthiĩ mũgũnda-inĩ.",
            "source": "Come here so that we may go to the farm."
          },
          {
            "target": "Itũrũra maĩ ma kũnyua gĩkombe-inĩ.",
            "source": "Pour drinking water into the cup."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ũka\" mean in English?",
            "correctAnswer": "Come",
            "options": [
              "Come",
              "Send",
              "Walk",
              "Fall"
            ],
            "hint": "Core vocabulary in Essential Action & Motion Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Send\"",
            "correctAnswer": "tũma",
            "acceptedAnswers": [
              "tũma"
            ],
            "hint": "Starts with \"tũ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"thiĩ\"",
            "correctAnswer": "Walk",
            "acceptedAnswers": [
              "Walk / Go",
              "Walk"
            ],
            "hint": "Review Essential Action & Motion Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Essential Action & Motion Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ũka",
                "right": "Come"
              },
              {
                "left": "tũma",
                "right": "Send"
              },
              {
                "left": "thiĩ",
                "right": "Walk"
              },
              {
                "left": "gũa",
                "right": "Fall"
              },
              {
                "left": "uma",
                "right": "Leave"
              }
            ]
          }
        ]
      },
      {
        "id": "embu-verbs-grammar-verbal-derivatives-7",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "thambia",
            "source": "Wash",
            "pronunciation": "thambia",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "atũra",
            "source": "Split",
            "pronunciation": "a-tu-ra",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "va",
            "source": "Give",
            "pronunciation": "va",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ĩĩa",
            "source": "Steal",
            "pronunciation": "iia",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "rĩma",
            "source": "Cultivate / Farm",
            "pronunciation": "ri-ma",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "thika",
            "source": "Bury",
            "pronunciation": "thi-ka",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "vĩvia",
            "source": "Burn",
            "pronunciation": "vi-via",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "rĩa",
            "source": "Eat",
            "pronunciation": "ria",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "uga",
            "source": "Say",
            "pronunciation": "uga"
          }
        ],
        "sentences": [
          {
            "target": "Andũ nĩmarĩmaga mũgũnda mbura yakinya.",
            "source": "People cultivate the farm when the rain arrives."
          },
          {
            "target": "Atũra ngũũ na ũva mũgeni irio.",
            "source": "Split firewood and give the guest food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"thambia\" mean in English?",
            "correctAnswer": "Wash",
            "options": [
              "Wash",
              "Split",
              "Give",
              "Steal"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Split\"",
            "correctAnswer": "atũra",
            "acceptedAnswers": [
              "atũra"
            ],
            "hint": "Starts with \"at\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"va\"",
            "correctAnswer": "Give",
            "acceptedAnswers": [
              "Give"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "thambia",
                "right": "Wash"
              },
              {
                "left": "atũra",
                "right": "Split"
              },
              {
                "left": "va",
                "right": "Give"
              },
              {
                "left": "ĩĩa",
                "right": "Steal"
              },
              {
                "left": "rĩma",
                "right": "Cultivate"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "embu-unit-8",
    "unitNumber": 8,
    "title": "Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Compass",
    "color": "#059669",
    "skills": [
      {
        "id": "embu-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "ũtukũ",
            "source": "Night",
            "pronunciation": "utuku"
          },
          {
            "target": "Ũmũnthĩ",
            "source": "Today",
            "pronunciation": "umunthi"
          },
          {
            "target": "Rũciũ",
            "source": "Tomorrow",
            "pronunciation": "ru-ciu"
          },
          {
            "target": "Ĩgoro",
            "source": "Yesterday",
            "pronunciation": "igoro"
          },
          {
            "target": "Gĩthaa",
            "source": "Hour / Time",
            "pronunciation": "githaa"
          },
          {
            "target": "Mweri wa gatano",
            "source": "May (Month 5)",
            "pronunciation": "mweri wa gatano"
          },
          {
            "target": "Mweri wa gatantatũ",
            "source": "June (Month 6)",
            "pronunciation": "mweri wa gatantatu"
          },
          {
            "target": "Mweri wa mũgwanja",
            "source": "July (Month 7)",
            "pronunciation": "mweri wa mugwanja"
          },
          {
            "target": "Mweri wa kathatũ",
            "source": "March (Month 3)",
            "pronunciation": "mweri wa kathatu"
          }
        ],
        "sentences": [
          {
            "target": "Ũmũnthĩ nĩtũkũruta wĩra, rũciũ tũkahurũka.",
            "source": "Today we are working, tomorrow we will rest."
          },
          {
            "target": "Ĩgoro mbura nĩyoirire ũtukũ.",
            "source": "Yesterday rain fell at night."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ũtukũ\" mean in English?",
            "correctAnswer": "Night",
            "options": [
              "Today",
              "Tomorrow",
              "Yesterday",
              "Night"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Today\"",
            "correctAnswer": "Ũmũnthĩ",
            "acceptedAnswers": [
              "Ũmũnthĩ"
            ],
            "hint": "Starts with \"Ũm\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Rũciũ\"",
            "correctAnswer": "Tomorrow",
            "acceptedAnswers": [
              "Tomorrow"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ũtukũ",
                "right": "Night"
              },
              {
                "left": "Ũmũnthĩ",
                "right": "Today"
              },
              {
                "left": "Rũciũ",
                "right": "Tomorrow"
              },
              {
                "left": "Ĩgoro",
                "right": "Yesterday"
              },
              {
                "left": "Gĩthaa",
                "right": "Hour / Time"
              }
            ]
          }
        ]
      },
      {
        "id": "embu-time-calendar-journey-navigation-8",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "ũtukũ",
            "source": "Night",
            "pronunciation": "utuku"
          },
          {
            "target": "Mweri wa kana",
            "source": "April (Month 4)",
            "pronunciation": "mweri wa kana"
          },
          {
            "target": "Mũthenya kiumia-inĩ",
            "source": "Day of the week",
            "pronunciation": "muthenya kiumia-ini"
          },
          {
            "target": "Mweri wa kanana",
            "source": "August (Month 8)",
            "pronunciation": "mweri wa kanana"
          },
          {
            "target": "Ithaa",
            "source": "Hour (time unit)",
            "pronunciation": "ithaa"
          },
          {
            "target": "Mweri wa mbere",
            "source": "January (Month 1)",
            "pronunciation": "mweri wa mbere"
          },
          {
            "target": "Mweri wa kaĩri",
            "source": "February (Month 2)",
            "pronunciation": "mweri wa kairi"
          },
          {
            "target": "Mweri wa ikũmi",
            "source": "October (Month 10)",
            "pronunciation": "mweri wa ikumi"
          },
          {
            "target": "Ndagĩka",
            "source": "Minute (time unit)",
            "pronunciation": "nda-gi-ka"
          }
        ],
        "sentences": [
          {
            "target": "Mweri wa kana nĩ mweri wa mbura.",
            "source": "April is a month of rain."
          },
          {
            "target": "Mweri wa mbere nĩ kĩambĩrĩria kĩa mwaka.",
            "source": "January is the beginning of the year."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ũtukũ\" mean in English?",
            "correctAnswer": "Night",
            "options": [
              "April",
              "August",
              "Hour",
              "Night"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"April (Month 4)\"",
            "correctAnswer": "Mweri wa kana",
            "acceptedAnswers": [
              "Mweri wa kana"
            ],
            "hint": "Starts with \"Mw\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Mũthenya kiumia-inĩ\"",
            "correctAnswer": "Day of the week",
            "acceptedAnswers": [
              "Day of the week"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ũtukũ",
                "right": "Night"
              },
              {
                "left": "Mweri wa kana",
                "right": "April"
              },
              {
                "left": "Mũthenya kiumia-inĩ",
                "right": "Day of the week"
              },
              {
                "left": "Mweri wa kanana",
                "right": "August"
              },
              {
                "left": "Ithaa",
                "right": "Hour"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "embu-unit-9",
    "unitNumber": 9,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Embu (Kĩembu) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#059669",
    "skills": [
      {
        "id": "embu-pd-corpus-9-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Embu (Kĩembu) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Embu (Kĩembu) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "-īyā",
            "source": "To steal",
            "pronunciation": "iya"
          },
          {
            "target": "-rūgāmā",
            "source": "To stand / stop",
            "pronunciation": "ru-ga-ma"
          },
          {
            "target": "-kōmā",
            "source": "To sleep",
            "pronunciation": "ko-ma"
          },
          {
            "target": "-īkāra",
            "source": "To sit / remain / abide",
            "pronunciation": "i-ka-ra"
          },
          {
            "target": "-ōnā, -rōrā",
            "source": "To see",
            "pronunciation": "ona ro-ra"
          },
          {
            "target": "-ēndā",
            "source": "To love / want",
            "pronunciation": "enda"
          },
          {
            "target": "-tīgā",
            "source": "To leave off / cease",
            "pronunciation": "ti-ga"
          },
          {
            "target": "-thēkā",
            "source": "To laugh",
            "pronunciation": "the-ka"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-īyā\" in Embu?",
            "correctAnswer": "To steal",
            "options": [
              "To stand",
              "To sleep",
              "To steal",
              "To sit"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Embu (Kĩembu) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "-īyā: To steal",
            "pairs": [
              {
                "left": "-īyā",
                "right": "To steal"
              },
              {
                "left": "-rūgāmā",
                "right": "To stand / stop"
              },
              {
                "left": "-kōmā",
                "right": "To sleep"
              },
              {
                "left": "-īkāra",
                "right": "To sit / remain / abide"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Embu (Kĩembu) term for \"To see\": ___",
            "correctAnswer": "-ōnā",
            "options": [
              "-ēndā",
              "-ōnā",
              "-īyā",
              "-rūgāmā"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)",
            "acceptedAnswers": [
              "-ōnā, -rōrā",
              "-ōnā"
            ]
          }
        ]
      },
      {
        "id": "embu-pd-corpus-9-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Embu (Kĩembu) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Embu (Kĩembu) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "-mēnyā",
            "source": "To know",
            "pronunciation": "menya"
          },
          {
            "target": "-ūragā",
            "source": "To kill",
            "pronunciation": "u-ra-ga"
          },
          {
            "target": "-thiī",
            "source": "To go",
            "pronunciation": "thii"
          },
          {
            "target": "-hē",
            "source": "To give",
            "pronunciation": "he"
          },
          {
            "target": "-kūā",
            "source": "To die",
            "pronunciation": "kua"
          },
          {
            "target": "-īnā",
            "source": "To dance",
            "pronunciation": "ina"
          },
          {
            "target": "-tīniā, -tēmā",
            "source": "To cut",
            "pronunciation": "ti-nia te-ma"
          },
          {
            "target": "-ūkā",
            "source": "To come",
            "pronunciation": "uka"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-mēnyā\" in Embu?",
            "correctAnswer": "To know",
            "options": [
              "To kill",
              "To go",
              "To give",
              "To know"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Embu (Kĩembu) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "-mēnyā: To know",
            "pairs": [
              {
                "left": "-mēnyā",
                "right": "To know"
              },
              {
                "left": "-ūragā",
                "right": "To kill"
              },
              {
                "left": "-thiī",
                "right": "To go"
              },
              {
                "left": "-hē",
                "right": "To give"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Embu (Kĩembu) term for \"To die\": ___",
            "correctAnswer": "-kūā",
            "options": [
              "-īnā",
              "-kūā",
              "-mēnyā",
              "-ūragā"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          }
        ]
      }
    ]
  },
  {
    "id": "embu-unit-10",
    "unitNumber": 10,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Embu (Kĩembu) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#059669",
    "skills": [
      {
        "id": "embu-open-dataset-10-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Layers",
        "description": "Learn core Embu (Kĩembu) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Embu (Kĩembu) dialects and everyday speech.",
        "words": [
          {
            "target": "-gūrā, -ēndia",
            "source": "To buy / To sell",
            "pronunciation": "gu-ra endia"
          },
          {
            "target": "-hūrā, -rīnggā",
            "source": "To beat",
            "pronunciation": "hu-ra ringga"
          },
          {
            "target": "Ndi- / tĩ- (verbal negation)",
            "source": "Not (verbal negation prefix/infix)",
            "pronunciation": "ndi / ti"
          },
          {
            "target": "Ācā!, Tī-gō!",
            "source": "No!",
            "pronunciation": "aca ti-go"
          },
          {
            "target": "Hā-rīa, Kū-rīa",
            "source": "There",
            "pronunciation": "ha-ria ku-ria"
          },
          {
            "target": "N-jā",
            "source": "Outside",
            "pronunciation": "n-ja"
          },
          {
            "target": "Hā-kūhī",
            "source": "Near",
            "pronunciation": "ha-kuhi"
          },
          {
            "target": "Gā-tīgātī",
            "source": "Middle",
            "pronunciation": "ga-tigati"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-gūrā\" in Embu?",
            "correctAnswer": "To buy",
            "options": [
              "To beat",
              "To buy",
              "Not",
              "No!"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)",
            "acceptedAnswers": [
              "To buy / To sell",
              "To buy"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Embu (Kĩembu) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "-gūrā, -ēndia: To buy / To sell",
            "pairs": [
              {
                "left": "-gūrā, -ēndia",
                "right": "To buy / To sell"
              },
              {
                "left": "-hūrā, -rīnggā",
                "right": "To beat"
              },
              {
                "left": "Ndi- / tĩ- (verbal negation)",
                "right": "Not (verbal negation prefix/infix)"
              },
              {
                "left": "Ācā!, Tī-gō!",
                "right": "No!"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Embu (Kĩembu) term for \"There\": ___",
            "correctAnswer": "Hā-rīa",
            "options": [
              "N-jā",
              "-gūrā",
              "Hā-rīa",
              "-hūrā"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)",
            "acceptedAnswers": [
              "Hā-rīa, Kū-rīa",
              "Hā-rīa"
            ]
          }
        ]
      },
      {
        "id": "embu-open-dataset-10-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Embu (Kĩembu) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Embu (Kĩembu) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "-thēnī",
            "source": "In, inside",
            "pronunciation": "the-ni"
          },
          {
            "target": "Hā-hā",
            "source": "Here",
            "pronunciation": "ha-ha"
          },
          {
            "target": "Kū-raihū",
            "source": "Far",
            "pronunciation": "ku-raihu"
          },
          {
            "target": "Thī",
            "source": "Below, down",
            "pronunciation": "thi"
          },
          {
            "target": "Thūtha",
            "source": "Behind",
            "pronunciation": "thutha"
          },
          {
            "target": "M-bērē",
            "source": "Before",
            "pronunciation": "m-bere"
          },
          {
            "target": "I-gūrū",
            "source": "Above, up, on top",
            "pronunciation": "i-guru"
          },
          {
            "target": "-rūārū",
            "source": "Sick",
            "pronunciation": "rua-ru"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-thēnī\" in Embu (Kĩembu)?",
            "correctAnswer": "In",
            "options": [
              "Here",
              "Far",
              "Below",
              "In"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)",
            "acceptedAnswers": [
              "In, inside",
              "In"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Embu (Kĩembu) term to its English meaning:",
            "correctAnswer": "-thēnī: In, inside",
            "pairs": [
              {
                "left": "-thēnī",
                "right": "In, inside"
              },
              {
                "left": "Hā-hā",
                "right": "Here"
              },
              {
                "left": "Kū-raihū",
                "right": "Far"
              },
              {
                "left": "Thī",
                "right": "Below, down"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Embu (Kĩembu) term for \"Behind\": ___",
            "correctAnswer": "Thūtha",
            "options": [
              "-thēnī",
              "Hā-hā",
              "Kū-raihū",
              "Thūtha"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          }
        ]
      },
      {
        "id": "embu-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Embu (Kĩembu) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "CLDF ASJP v20 EMBU & BantuBVD (CC-BY-4.0), Unicode CLDR ebu (MIT/Unicode), SIL Bloom Kiembu CC-BY-4.0 & Public Domain Historical Lexicons (Hobley 1910/1922, Dundas 1915, Johnston 1919 & CLDR ebu.xml).",
        "words": [
          {
            "target": "Wĩ mwega?",
            "source": "Hello",
            "pronunciation": "wee mweh-gah"
          },
          {
            "target": "Nĩ wega",
            "source": "Thank you",
            "pronunciation": "nee weh-gah"
          },
          {
            "target": "Thayũ",
            "source": "Peace / blessing",
            "pronunciation": "thayu"
          },
          {
            "target": "Tigwa na wega",
            "source": "Goodbye, be blessed",
            "pronunciation": "tigwa na wega"
          },
          {
            "target": "Nĩwega mũno",
            "source": "Thank you very much",
            "pronunciation": "ni-we-ga mu-no"
          },
          {
            "target": "Thiĩ na thayũ",
            "source": "Safe journey / Go in peace",
            "pronunciation": "thiee na tha-yoo"
          },
          {
            "target": "gĩkwa",
            "source": "Yam",
            "pronunciation": "gi-kwa"
          },
          {
            "target": "ĩtumbĩ",
            "source": "Egg",
            "pronunciation": "itumbi"
          },
          {
            "target": "irio",
            "source": "Food",
            "pronunciation": "i-rio"
          },
          {
            "target": "cumbĩ",
            "source": "Salt",
            "pronunciation": "cumbi"
          }
        ],
        "sentences": [
          {
            "target": "Nĩ wega",
            "source": "Thank you."
          },
          {
            "target": "Tigwa na wega",
            "source": "Goodbye, be blessed."
          },
          {
            "target": "Nĩwega mũno",
            "source": "Thank you very much."
          },
          {
            "target": "Ndarauka wega, nĩ wega mũno",
            "source": "I woke up well, thank you."
          },
          {
            "target": "Thiĩ na thayũ",
            "source": "Safe journey / Go in peace."
          },
          {
            "target": "Mũtumia nĩakũruga irio na maguta.",
            "source": "The woman is cooking food with oil."
          }
        ]
      },
      {
        "id": "embu-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Embu (Kĩembu) sentences for healthcare, transport, and community safety.",
        "culturalNote": "CLDF ASJP v20 EMBU & BantuBVD (CC-BY-4.0), Unicode CLDR ebu (MIT/Unicode), SIL Bloom Kiembu CC-BY-4.0 & Public Domain Historical Lexicons (Hobley 1910/1922, Dundas 1915, Johnston 1919 & CLDR ebu.xml).",
        "words": [
          {
            "target": "Ĩmwe",
            "source": "One",
            "pronunciation": "imwe"
          },
          {
            "target": "Igĩrĩ",
            "source": "Two",
            "pronunciation": "igiri"
          },
          {
            "target": "Ithathatũ",
            "source": "Six",
            "pronunciation": "ithathatu"
          },
          {
            "target": "Ikũmi",
            "source": "Ten",
            "pronunciation": "ikumi"
          },
          {
            "target": "Inya",
            "source": "Four",
            "pronunciation": "inya"
          },
          {
            "target": "Ithano",
            "source": "Five",
            "pronunciation": "itha-no"
          },
          {
            "target": "Kenda",
            "source": "Nine",
            "pronunciation": "kenda"
          },
          {
            "target": "Ithatũ",
            "source": "Three",
            "pronunciation": "ithatu"
          },
          {
            "target": "Mũgwanja",
            "source": "Seven",
            "pronunciation": "mugwanja"
          },
          {
            "target": "Inyanya",
            "source": "Eight",
            "pronunciation": "inyanya"
          }
        ],
        "sentences": [
          {
            "target": "Ithathatũ, mũgwanja, inyanya, kenda, ikũmi.",
            "source": "Six (6), seven (7), eight (8), nine (9), ten (10)."
          },
          {
            "target": "Andũ arũme ikũmi nĩmarĩ kĩama-inĩ.",
            "source": "Ten men are in the council of elders."
          }
        ]
      }
    ]
  }
];
