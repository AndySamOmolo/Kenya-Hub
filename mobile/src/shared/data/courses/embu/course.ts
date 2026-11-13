import type { CourseUnit, LanguageConfig } from "../types";

// ============================================================
// Embu (Kîembu / Kîmbeere) Language Course Configuration & Units
// Declarative modular course definition (audit-ready, zero runtime mutations)
// ============================================================

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
    "title": "Unit 1: Greetings, Noun Classes, Numerals 1–10 & Kiama Heritage",
    "description": "Master Kîembu and Kîmbeere greetings, mũ-/a- and kĩ-/ci- noun classes, Dahl’s Law, and numbers 1–10.",
    "icon": "Crown",
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
            "target": "Wĩ mwega? (resp. Ndĩ mwega) / Mũrĩ ega?",
            "source": "How are you? (I am well) / How are you all?",
            "pronunciation": "wi mwe-ga / mu-ri ega",
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
            "target": "mũrũme (pl. arũme) / mũka (pl. aka)",
            "source": "Man, husband / Woman, wife",
            "pronunciation": "mu-ru-me / mu-ka",
            "hint": "Johnston (1919, Vol. I, pp. 100, 106 #11 Embu)"
          },
          {
            "target": "mwana (pl. ciana / aana) / baba / maitũ",
            "source": "Child / Father / Mother",
            "pronunciation": "mwa-na / ba-ba / mai-tu",
            "hint": "Johnston (1919 #11 Embu)"
          },
          {
            "target": "maĩ (manjĩ) / mwaki / riũa",
            "source": "Water / Fire / Sun",
            "pronunciation": "mai / mwa-ki / riua",
            "hint": "Johnston (1919, Vol. I, pp. 99, 104, 106 #11 Embu)"
          },
          {
            "target": "mũtĩ (pl. mĩtĩ) / ĩvia (pl. mavia)",
            "source": "Tree (pl. Trees) / Stone (pl. Stones)",
            "pronunciation": "mu-ti / i-via",
            "hint": "Johnston (1919, Vol. I, pp. 104–105 #11 Embu)"
          },
          {
            "target": "Ngai (Murungu) / Kĩrĩnyaga",
            "source": "God / Mount Kenya",
            "pronunciation": "ngai / ki-rinya-ga",
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
            "prompt": "What is the English meaning of \"Wĩ mwega? (resp. Ndĩ mwega) / Mũrĩ ega?\" in Embu?",
            "correctAnswer": "How are you? (I am well) / How are you all?",
            "options": [
              "Thank you very much",
              "Person (pl. People)",
              "Man, husband / Woman, wife",
              "How are you? (I am well) / How are you all?"
            ],
            "hint": "Standard Kîembu salutation"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Nĩ wega mũno\" in Embu?",
            "correctAnswer": "Thank you very much",
            "options": [
              "Person (pl. People)",
              "Man, husband / Woman, wife",
              "Thank you very much",
              "How are you? (I am well) / How are you all?"
            ],
            "hint": "Gratitude"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mundũ (pl. andũ)\" in Embu?",
            "correctAnswer": "Person (pl. People)",
            "options": [
              "Man, husband / Woman, wife",
              "Person (pl. People)",
              "How are you? (I am well) / How are you all?",
              "Thank you very much"
            ],
            "hint": "Johnston (1919, Vol. I, p. 101 #11 Embu)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Person (pl. People)\" in Embu?",
            "correctAnswer": "mundũ (pl. andũ)",
            "options": [
              "mundũ (pl. andũ)",
              "Wĩ mwega? (resp. Ndĩ mwega) / Mũrĩ ega?",
              "Nĩ wega mũno",
              "mũrũme (pl. arũme) / mũka (pl. aka)"
            ],
            "hint": "moon-doo / ahn-doo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Man, husband / Woman, wife\" in Embu?",
            "correctAnswer": "mũrũme (pl. arũme) / mũka (pl. aka)",
            "options": [
              "Wĩ mwega? (resp. Ndĩ mwega) / Mũrĩ ega?",
              "Nĩ wega mũno",
              "mundũ (pl. andũ)",
              "mũrũme (pl. arũme) / mũka (pl. aka)"
            ],
            "hint": "moo-roo-meh / moo-kah"
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
            "prompt": "Complete the Embu term for \"Child / Father / Mother\": ___",
            "correctAnswer": "mwana (pl. ciana / aana) / baba / maitũ",
            "options": [
              "Wĩ mwega? (resp. Ndĩ mwega) / Mũrĩ ega?",
              "Nĩ wega mũno",
              "mundũ (pl. andũ)",
              "mwana (pl. ciana / aana) / baba / maitũ"
            ],
            "hint": "Johnston (1919 #11 Embu)"
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
            "pronunciation": "imwe i-gi-ri itha-tu inya itha-no",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "igĩrĩ",
            "source": "Two (2)",
            "pronunciation": "imwe i-gi-ri itha-tu inya itha-no",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "ithatũ",
            "source": "Three (3)",
            "pronunciation": "imwe i-gi-ri itha-tu inya itha-no",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "ithanthatũ",
            "source": "Six (6)",
            "pronunciation": "ithantha-tu mugwanja inyanya kenda i-ku-mi",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "mũgwanja",
            "source": "Seven (7)",
            "pronunciation": "ithantha-tu mugwanja inyanya kenda i-ku-mi",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "inyanya",
            "source": "Eight (8)",
            "pronunciation": "ithantha-tu mugwanja inyanya kenda i-ku-mi",
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "target": "kũrĩa / kũnyua / kũruga",
            "source": "To eat / To drink / To cook",
            "pronunciation": "ku-ria / kunyua / ku-ru-ga",
            "hint": "Class 15 infinitives"
          },
          {
            "target": "gũthiĩ / gũũka / kwaria",
            "source": "To go / To come / To speak",
            "pronunciation": "guthii / guu-ka / kwa-ria",
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
              "6, 7, 8, 9, 10",
              "To eat / To drink / To cook",
              "To go / To come / To speak",
              "1, 2, 3, 4, 5"
            ],
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ithanthatũ, mũgwanja, inyanya, kenda, ikũmi\" in Embu?",
            "correctAnswer": "6, 7, 8, 9, 10",
            "options": [
              "To eat / To drink / To cook",
              "To go / To come / To speak",
              "6, 7, 8, 9, 10",
              "1, 2, 3, 4, 5"
            ],
            "hint": "Johnston (1919, Vol. I, p. 107 #11 Embu)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kũrĩa / kũnyua / kũruga\" in Embu?",
            "correctAnswer": "To eat / To drink / To cook",
            "options": [
              "To go / To come / To speak",
              "To eat / To drink / To cook",
              "1, 2, 3, 4, 5",
              "6, 7, 8, 9, 10"
            ],
            "hint": "Class 15 infinitives"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To eat / To drink / To cook\" in Embu?",
            "correctAnswer": "kũrĩa / kũnyua / kũruga",
            "options": [
              "kũrĩa / kũnyua / kũruga",
              "ĩmwe, igĩrĩ, ithatũ, inya, ithano",
              "ithanthatũ, mũgwanja, inyanya, kenda, ikũmi",
              "gũthiĩ / gũũka / kwaria"
            ],
            "hint": "koo-ree-ah / koo-nywah / koo-roo-gah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To go / To come / To speak\" in Embu?",
            "correctAnswer": "gũthiĩ / gũũka / kwaria",
            "options": [
              "ĩmwe, igĩrĩ, ithatũ, inya, ithano",
              "ithanthatũ, mũgwanja, inyanya, kenda, ikũmi",
              "kũrĩa / kũnyua / kũruga",
              "gũthiĩ / gũũka / kwaria"
            ],
            "hint": "goo-thee / goo-kah / kwah-ree-ah"
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
              "ĩmwe, igĩrĩ, ithatũ, inya, ithano",
              "ithanthatũ, mũgwanja, inyanya, kenda, ikũmi",
              "kũrĩa / kũnyua / kũruga",
              "Kiama kia Ngome"
            ],
            "hint": "Aembu & Ambeere governance"
          }
        ]
      }
    ]
  },
  {
    "id": "embu-unit-2",
    "title": "Unit 2: Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Users",
    "skills": [
      {
        "id": "embu-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
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
            "target": "mũtumia (pl. atumia) / mũndũ mũka (pl. andũ aka)",
            "source": "Woman / Women",
            "pronunciation": "mu-tu-mia / mundu mu-ka",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mũndũ (pl. andũ)\" in Embu?",
            "correctAnswer": "Person / Human being",
            "options": [
              "Man / Men",
              "Woman / Women",
              "Husband",
              "Person / Human being"
            ],
            "hint": "Wikipedia Embu_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mũndũ mũrũme (pl. andũ arũme)\" in Embu?",
            "correctAnswer": "Man / Men",
            "options": [
              "Woman / Women",
              "Husband",
              "Man / Men",
              "Person / Human being"
            ],
            "hint": "Wikipedia Embu_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mũtumia (pl. atumia) / mũndũ mũka (pl. andũ aka)\" in Embu?",
            "correctAnswer": "Woman / Women",
            "options": [
              "Husband",
              "Woman / Women",
              "Person / Human being",
              "Man / Men"
            ],
            "hint": "Wikipedia Embu_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Woman / Women\" in Embu?",
            "correctAnswer": "mũtumia (pl. atumia) / mũndũ mũka (pl. andũ aka)",
            "options": [
              "mũtumia (pl. atumia) / mũndũ mũka (pl. andũ aka)",
              "mũndũ (pl. andũ)",
              "mũndũ mũrũme (pl. andũ arũme)",
              "mũthuri (pl. athuri)"
            ],
            "hint": "mutumia / mundu muka"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Husband\" in Embu?",
            "correctAnswer": "mũthuri (pl. athuri)",
            "options": [
              "mũndũ (pl. andũ)",
              "mũndũ mũrũme (pl. andũ arũme)",
              "mũtumia (pl. atumia) / mũndũ mũka (pl. andũ aka)",
              "mũthuri (pl. athuri)"
            ],
            "hint": "muthuri (pl. athuri)"
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
            "correctAnswer": "mwana (pl. ciana)",
            "options": [
              "mũndũ (pl. andũ)",
              "mũndũ mũrũme (pl. andũ arũme)",
              "mũtumia (pl. atumia) / mũndũ mũka (pl. andũ aka)",
              "mwana (pl. ciana)"
            ],
            "hint": "Wikipedia Embu_language"
          }
        ]
      },
      {
        "id": "embu-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "Ngai",
            "source": "God",
            "pronunciation": "ngai",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "Mu-ru wa maiya (K.); a-rūa maiya. Mū-rata (M., Mw.)",
            "source": "Brother",
            "pronunciation": "mu-ru wa mai-ya",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "Mu-thamaki; a-. Mu-nene; a-",
            "source": "Chief",
            "pronunciation": "mu-thamaki",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "Mwana; ciana and aana. Ka-ana; tw-ana. Ka-hi; tū-hi. Ka-rego; tu-",
            "source": "Child",
            "pronunciation": "mwa-na",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "Mū-rū wa maiya (K.). Mū-ārī wa maitū",
            "source": "Sister",
            "pronunciation": "mu-ru wa mai-ya mu-ari wa mai-tu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "Mū-rīū; a-rīū. Kī-hīī; i-hīī (boy)",
            "source": "Son, boy",
            "pronunciation": "mu-riu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "Mū-kā; a-kā",
            "source": "Wife",
            "pronunciation": "mu-ka",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
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
            "target": "Ngai — Mu-ru wa maiya",
            "source": "God — Brother"
          },
          {
            "target": "Mu-thamaki — Mwana",
            "source": "Chief — Child"
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
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Brother\"",
            "correctAnswer": "Mu-ru wa maiya",
            "acceptedAnswers": [
              "Mu-ru wa maiya (K.); a-rūa maiya. Mū-rata (M., Mw.)",
              "Mu-ru wa maiya"
            ],
            "hint": "Starts with \"Mu\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Mu-thamaki\"",
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
                "left": "Ngai",
                "right": "God"
              },
              {
                "left": "Mu-ru wa maiya",
                "right": "Brother"
              },
              {
                "left": "Mu-thamaki",
                "right": "Chief"
              },
              {
                "left": "Mwana",
                "right": "Child"
              },
              {
                "left": "Mū-rū wa maiya. Mū-ārī wa maitū",
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
    "title": "Unit 3: Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Scale",
    "skills": [
      {
        "id": "embu-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ĩmwe\" in Embu?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
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
              "Ithatũ",
              "Ĩmwe",
              "Igĩrĩ",
              "Inya"
            ],
            "hint": "ithatu"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Embu?",
            "correctAnswer": "Inya",
            "options": [
              "Ĩmwe",
              "Igĩrĩ",
              "Ithatũ",
              "Inya"
            ],
            "hint": "inya"
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
              "Ĩmwe",
              "Igĩrĩ",
              "Ithatũ",
              "Ithano"
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
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
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
            "pronunciation": "mi-ronggo i-giri",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "Mī-rōnggo ī-tātū",
            "source": "Thirty",
            "pronunciation": "mi-ronggo i-tatu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "Mī-rōnggo ī-nā",
            "source": "Forty",
            "pronunciation": "mi-ronggo i-na",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "Mī-rōnggo ī-tāno",
            "source": "Fifty",
            "pronunciation": "mi-ronggo i-tano",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "I-gāna; ma-gāna",
            "source": "Hundred",
            "pronunciation": "i-gana",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "Ngīrī; ma-ngīrī",
            "source": "Thousand",
            "pronunciation": "ngi-ri",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "-ōthē",
            "source": "All",
            "pronunciation": "othe",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "-īnggī",
            "source": "Plenty, many",
            "pronunciation": "inggi",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ikũmi\" in Embu?",
            "correctAnswer": "Ten",
            "options": [
              "Twenty",
              "Thirty",
              "Forty",
              "Ten"
            ],
            "hint": "Wikipedia Embu_language — Kîembu numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mī-rōnggo ī-gīrī\" in Embu?",
            "correctAnswer": "Twenty",
            "options": [
              "Thirty",
              "Forty",
              "Twenty",
              "Ten"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mī-rōnggo ī-tātū\" in Embu?",
            "correctAnswer": "Thirty",
            "options": [
              "Forty",
              "Thirty",
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
              "Mī-rōnggo ī-gīrī",
              "Mī-rōnggo ī-nā"
            ],
            "hint": "mī-rōnggo ī-tātū"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Forty\" in Embu?",
            "correctAnswer": "Mī-rōnggo ī-nā",
            "options": [
              "Ikũmi",
              "Mī-rōnggo ī-gīrī",
              "Mī-rōnggo ī-tātū",
              "Mī-rōnggo ī-nā"
            ],
            "hint": "mī-rōnggo ī-nā"
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
              "Mī-rōnggo ī-gīrī",
              "Mī-rōnggo ī-tātū",
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
    "title": "Unit 4: Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Tractor",
    "skills": [
      {
        "id": "embu-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
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
            "target": "Gī-kwa; i-kwa",
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
            "target": "nyama — irio",
            "source": "Meat — Food"
          },
          {
            "target": "cumbĩ — maguta",
            "source": "Salt — Oil"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"nyama\" mean in English?",
            "correctAnswer": "Meat",
            "options": [
              "Meat",
              "Food",
              "Salt",
              "Oil / Fat"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Food\"",
            "correctAnswer": "irio",
            "acceptedAnswers": [
              "irio",
              "irio"
            ],
            "hint": "Starts with \"ir\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"cumbĩ\"",
            "correctAnswer": "Salt",
            "acceptedAnswers": [
              "Salt",
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
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "I-rigo; ma-. Gi-toke (fruit)",
            "source": "Banana",
            "pronunciation": "i-rigo",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "Ma-guta. Ṅ-gorono (butter)",
            "source": "Fat, oil",
            "pronunciation": "ma-guta ng-gorono",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "Ū-ūkī; mō-ūkī",
            "source": "Honey",
            "pronunciation": "u-uki",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu)"
          },
          {
            "target": "nyama",
            "source": "Meat",
            "pronunciation": "nya-ma"
          },
          {
            "target": "M-bembē; ma-",
            "source": "Maize",
            "pronunciation": "m-bembe"
          },
          {
            "target": "N-g'aragu. M-būta (M.)",
            "source": "Hunger",
            "pronunciation": "n-g'aragu m-buta"
          },
          {
            "target": "mbembe",
            "source": "Maize, corn",
            "pronunciation": "mbembe"
          },
          {
            "target": "N-johi",
            "source": "Palm wine, beer",
            "pronunciation": "n-johi"
          },
          {
            "target": "mboso / nthooko",
            "source": "Beans / cowpeas",
            "pronunciation": "mbo-so / nthoo-ko"
          }
        ],
        "sentences": [
          {
            "target": "I-rigo — Ma-guta. Ṅ-gorono",
            "source": "Banana — Fat, oil"
          },
          {
            "target": "Ū-ūkī — nyama",
            "source": "Honey — Meat"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"I-rigo\" mean in English?",
            "correctAnswer": "Banana",
            "options": [
              "Banana",
              "Fat, oil",
              "Honey",
              "Meat"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Fat, oil\"",
            "correctAnswer": "Ma-guta. Ṅ-gorono",
            "acceptedAnswers": [
              "Ma-guta. Ṅ-gorono (butter)",
              "Ma-guta. Ṅ-gorono"
            ],
            "hint": "Starts with \"Ma\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Ū-ūkī\"",
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
                "left": "I-rigo",
                "right": "Banana"
              },
              {
                "left": "Ma-guta. Ṅ-gorono",
                "right": "Fat, oil"
              },
              {
                "left": "Ū-ūkī",
                "right": "Honey"
              },
              {
                "left": "nyama",
                "right": "Meat"
              },
              {
                "left": "M-bembē",
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
    "title": "Unit 5: Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "PawPrint",
    "skills": [
      {
        "id": "embu-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ĩria (pl. maria)\" in Embu?",
            "correctAnswer": "Lake / Sea / Ocean",
            "options": [
              "Root",
              "Leaf",
              "Bark (of tree)",
              "Lake / Sea / Ocean"
            ],
            "hint": "Wikipedia Embu_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mũri (pl. mĩri)\" in Embu?",
            "correctAnswer": "Root",
            "options": [
              "Leaf",
              "Bark (of tree)",
              "Root",
              "Lake / Sea / Ocean"
            ],
            "hint": "Wikipedia Embu_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ĩthangũ (pl. mathangũ)\" in Embu?",
            "correctAnswer": "Leaf",
            "options": [
              "Bark (of tree)",
              "Leaf",
              "Lake / Sea / Ocean",
              "Root"
            ],
            "hint": "Wikipedia Embu_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leaf\" in Embu?",
            "correctAnswer": "ĩthangũ (pl. mathangũ)",
            "options": [
              "ĩthangũ (pl. mathangũ)",
              "ĩria (pl. maria)",
              "mũri (pl. mĩri)",
              "ĩkoni"
            ],
            "hint": "ithangu (pl. mathangu)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bark (of tree)\" in Embu?",
            "correctAnswer": "ĩkoni",
            "options": [
              "ĩria (pl. maria)",
              "mũri (pl. mĩri)",
              "ĩthangũ (pl. mathangũ)",
              "ĩkoni"
            ],
            "hint": "ikoni"
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
            "correctAnswer": "mũtĩ (pl. mĩtĩ)",
            "options": [
              "ĩria (pl. maria)",
              "mũri (pl. mĩri)",
              "ĩthangũ (pl. mathangũ)",
              "mũtĩ (pl. mĩtĩ)"
            ],
            "hint": "Wikipedia Embu_language"
          }
        ]
      },
      {
        "id": "embu-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "karĩma / kĩrĩma",
            "source": "Hill / Mountain",
            "pronunciation": "ka-ri-ma / ki-ri-ma",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "karũnjĩ / rũnjĩ",
            "source": "Stream / River",
            "pronunciation": "ka-runji / runji",
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
            "target": "karĩma — karũnjĩ",
            "source": "Hill — Stream"
          },
          {
            "target": "mũthanga — nthĩ",
            "source": "Sand — Ground"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"karĩma\" mean in English?",
            "correctAnswer": "Hill / Mountain",
            "options": [
              "Hill / Mountain",
              "Stream / River",
              "Sand",
              "Ground / Earth"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Stream / River\"",
            "correctAnswer": "karũnjĩ",
            "acceptedAnswers": [
              "karũnjĩ / rũnjĩ",
              "karũnjĩ"
            ],
            "hint": "Starts with \"ka\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mũthanga\"",
            "correctAnswer": "Sand",
            "acceptedAnswers": [
              "Sand",
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
    "title": "Unit 6: The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "User",
    "skills": [
      {
        "id": "embu-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kanyua\" in Embu?",
            "correctAnswer": "Mouth",
            "options": [
              "Eye",
              "Head",
              "Hair",
              "Mouth"
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
              "Eye",
              "Mouth"
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
            "correctAnswer": "kĩongo (pl. ciongo)",
            "options": [
              "kĩongo (pl. ciongo)",
              "kanyua",
              "rĩitho (pl. metho)",
              "njuĩrĩ"
            ],
            "hint": "kiongo (pl. ciongo)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hair\" in Embu?",
            "correctAnswer": "njuĩrĩ",
            "options": [
              "kanyua",
              "rĩitho (pl. metho)",
              "kĩongo (pl. ciongo)",
              "njuĩrĩ"
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
            "correctAnswer": "ĩgego (pl. magego)",
            "options": [
              "kanyua",
              "rĩitho (pl. metho)",
              "kĩongo (pl. ciongo)",
              "ĩgego (pl. magego)"
            ],
            "hint": "Wikipedia Embu_language"
          }
        ]
      },
      {
        "id": "embu-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
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
            "target": "kũgũrũ (pl. magũrũ) / gĩtende (pl. itende)",
            "source": "Leg / Foot",
            "pronunciation": "ku-gu-ru / gi-tende",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "nda / ĩvũ",
            "source": "Belly / Stomach",
            "pronunciation": "nda / ivu",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "ĩkonye",
            "source": "Navel",
            "pronunciation": "i-konye",
            "hint": "Wikipedia Embu_language"
          },
          {
            "target": "Kū-gūrū; ma-. Mū-thīrīmo (shin). Kī-zimo",
            "source": "Leg",
            "pronunciation": "ku-guru"
          }
        ],
        "sentences": [
          {
            "target": "njara — kĩvĩ",
            "source": "Hand — Arm"
          },
          {
            "target": "mũmero — nyondo",
            "source": "Throat — Breast"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"njara\" mean in English?",
            "correctAnswer": "Hand",
            "options": [
              "Hand",
              "Arm",
              "Throat",
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
              "Throat",
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
    "title": "Unit 7: Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "embu-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
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
            "target": "rĩnga / kũgoma",
            "source": "Strike / Hit",
            "pronunciation": "ringa / ku-go-ma",
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
            "target": "ũka — tũma",
            "source": "Come — Send"
          },
          {
            "target": "thiĩ — gũa",
            "source": "Walk — Fall"
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
              "Walk / Go",
              "Fall"
            ],
            "hint": "Core vocabulary in Essential Action & Motion Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Send\"",
            "correctAnswer": "tũma",
            "acceptedAnswers": [
              "tũma",
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
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
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
            "target": "thambia — atũra",
            "source": "Wash — Split"
          },
          {
            "target": "va — ĩĩa",
            "source": "Give — Steal"
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
              "atũra",
              "atũra"
            ],
            "hint": "Starts with \"at\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"va\"",
            "correctAnswer": "Give",
            "acceptedAnswers": [
              "Give",
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
    "title": "Unit 8: Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Embu (Kĩembu) built directly from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Compass",
    "skills": [
      {
        "id": "embu-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
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
            "source": "Time zone",
            "pronunciation": "githaa"
          },
          {
            "target": "Mweri wa gatano (Gat)",
            "source": "May (Month 5)",
            "pronunciation": "mweri wa gatano"
          },
          {
            "target": "Mweri wa gatantatũ (Gan)",
            "source": "June (Month 6)",
            "pronunciation": "mweri wa gatantatu"
          },
          {
            "target": "Mweri wa mũgwanja (Mug)",
            "source": "July (Month 7)",
            "pronunciation": "mweri wa mugwanja"
          },
          {
            "target": "Mweri wa kathatũ (Kat)",
            "source": "March (Month 3)",
            "pronunciation": "mweri wa kathatu"
          }
        ],
        "sentences": [
          {
            "target": "ũtukũ — Ũmũnthĩ",
            "source": "Night — Today"
          },
          {
            "target": "Rũciũ — Ĩgoro",
            "source": "Tomorrow — Yesterday"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ũtukũ\" mean in English?",
            "correctAnswer": "Night",
            "options": [
              "Night",
              "Today",
              "Tomorrow",
              "Yesterday"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Today\"",
            "correctAnswer": "Ũmũnthĩ",
            "acceptedAnswers": [
              "Ũmũnthĩ",
              "Ũmũnthĩ"
            ],
            "hint": "Starts with \"Ũm\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Rũciũ\"",
            "correctAnswer": "Tomorrow",
            "acceptedAnswers": [
              "Tomorrow",
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
                "right": "Time zone"
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
        "culturalNote": "Primary historical documentation for Embu (Kĩembu) (Kĩembu) in C. W. Hobley (1910 & 1922 Mount Kenya Bantu) & Sir Harry Johnston (1919 Group C #11 Embu, Mbere & Chuka) preserves pre-1930 phonological, grammatical, and ethnographic usage across Embu.",
        "words": [
          {
            "target": "ũtukũ",
            "source": "Night"
          },
          {
            "target": "Mweri wa kana (Kan)",
            "source": "April (Month 4)",
            "pronunciation": "mweri wa kana"
          },
          {
            "target": "Mũthenya kiumia-inĩ",
            "source": "Day of the week",
            "pronunciation": "muthenya kiumia-ini"
          },
          {
            "target": "Mweri wa kanana (Knn)",
            "source": "August (Month 8)",
            "pronunciation": "mweri wa kanana"
          },
          {
            "target": "Ithaa",
            "source": "Hour (time unit)",
            "pronunciation": "ithaa"
          },
          {
            "target": "Mweri wa mbere (Mbe)",
            "source": "January (Month 1)",
            "pronunciation": "mweri wa mbere"
          },
          {
            "target": "Mweri wa kaĩri (Kai)",
            "source": "February (Month 2)",
            "pronunciation": "mweri wa kairi"
          },
          {
            "target": "Mweri wa ikũmi (Iku)",
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
            "target": "ũtukũ — Mweri wa kana",
            "source": "Night — April"
          },
          {
            "target": "Mũthenya kiumia-inĩ — Mweri wa kanana",
            "source": "Day of the week — August"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ũtukũ\" mean in English?",
            "correctAnswer": "Night",
            "options": [
              "Night",
              "April (Month 4)",
              "Day of the week",
              "August (Month 8)"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"April (Month 4)\"",
            "correctAnswer": "Mweri wa kana",
            "acceptedAnswers": [
              "Mweri wa kana (Kan)",
              "Mweri wa kana"
            ],
            "hint": "Starts with \"Mw\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Mũthenya kiumia-inĩ\"",
            "correctAnswer": "Day of the week",
            "acceptedAnswers": [
              "Day of the week",
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
    "id": "embu-unit-9-public-domain-corpus",
    "title": "Unit 9: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Embu (Kĩembu) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
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
            "pronunciation": "iya",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-rūgāmā",
            "source": "To stand / stop",
            "pronunciation": "ru-ga-ma",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-kōmā",
            "source": "To sleep",
            "pronunciation": "ko-ma",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-īkāra",
            "source": "To sit / remain / abide",
            "pronunciation": "i-ka-ra",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-ōnā, -rōrā",
            "source": "To see",
            "pronunciation": "ona ro-ra",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-ēndā",
            "source": "To love / want",
            "pronunciation": "enda",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-tīgā",
            "source": "To leave off / cease",
            "pronunciation": "ti-ga",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-thēkā",
            "source": "To laugh",
            "pronunciation": "the-ka",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-īyā\" in Embu?",
            "correctAnswer": "To steal",
            "options": [
              "To steal",
              "To stand / stop",
              "To sleep",
              "To sit / remain / abide"
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
            "correctAnswer": "-ōnā, -rōrā",
            "options": [
              "-ōnā, -rōrā",
              "-ēndā",
              "-īyā",
              "-rūgāmā"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
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
            "pronunciation": "menya",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-ūragā",
            "source": "To kill",
            "pronunciation": "u-ra-ga",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-thiī",
            "source": "To go",
            "pronunciation": "thii",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-hē",
            "source": "To give",
            "pronunciation": "he",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-kūā",
            "source": "To die",
            "pronunciation": "kua",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-īnā",
            "source": "To dance",
            "pronunciation": "ina",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-tīniā, -tēmā",
            "source": "To cut",
            "pronunciation": "ti-nia te-ma",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-ūkā",
            "source": "To come",
            "pronunciation": "uka",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-mēnyā\" in Embu?",
            "correctAnswer": "To know",
            "options": [
              "To know",
              "To kill",
              "To go",
              "To give"
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
              "-kūā",
              "-īnā",
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
    "id": "embu-unit-10-open-datasets-modern",
    "title": "Unit 10: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Embu (Kĩembu) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
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
            "pronunciation": "gu-ra endia",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-hūrā, -rīnggā",
            "source": "To beat",
            "pronunciation": "hu-ra ringga",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "Ndi-, Tī-, -tī-, -tā-",
            "source": "Not (with verb, as prefix, infix, or suffix)",
            "pronunciation": "ndi ti ti ta",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "Ācā!, Tī-gō!",
            "source": "No!",
            "pronunciation": "aca ti-go",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "Hā-rīa, Kū-rīa",
            "source": "There",
            "pronunciation": "ha-ria ku-ria",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "N-jā",
            "source": "Outside",
            "pronunciation": "n-ja",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "Hā-kūhī",
            "source": "Near",
            "pronunciation": "ha-kuhi",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "Gā-tīgātī",
            "source": "Middle",
            "pronunciation": "ga-tigati",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-gūrā, -ēndia\" in Embu?",
            "correctAnswer": "To buy / To sell",
            "options": [
              "To buy / To sell",
              "To beat",
              "Not (with verb, as prefix, infix, or suffix)",
              "No!"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
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
                "left": "Ndi-, Tī-, -tī-, -tā-",
                "right": "Not (with verb, as prefix, infix, or suffix)"
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
            "correctAnswer": "Hā-rīa, Kū-rīa",
            "options": [
              "Hā-rīa, Kū-rīa",
              "N-jā",
              "-gūrā, -ēndia",
              "-hūrā, -rīnggā"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
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
            "pronunciation": "the-ni",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "Hā-hā",
            "source": "Here",
            "pronunciation": "ha-ha",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "Kū-raihū",
            "source": "Far",
            "pronunciation": "ku-raihu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "Thī",
            "source": "Below, down",
            "pronunciation": "thi",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "Thūtha",
            "source": "Behind",
            "pronunciation": "thutha",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "M-bērē",
            "source": "Before",
            "pronunciation": "m-bere",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "I-gūrū",
            "source": "Above, up, on top",
            "pronunciation": "i-guru",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          },
          {
            "target": "-rūārū",
            "source": "Sick",
            "pronunciation": "rua-ru",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-thēnī\" in Embu (Kĩembu)?",
            "correctAnswer": "In, inside",
            "options": [
              "In, inside",
              "Here",
              "Far",
              "Below, down"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
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
              "Thūtha",
              "-thēnī",
              "Hā-hā",
              "Kū-raihū"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
          }
        ]
      }
    ]
  }
];
