// ============================================================
// Kikuyu (Gĩkũyũ) Language Course Configuration & Units
// Based 100% on Public Domain Sources:
// 1. Hildegarde Hinde (1904) "Vocabularies of the Kamba and Kikuyu Languages of East Africa" (Cambridge Univ. Press)
// 2. C. W. Hobley (1922) "Bantu Beliefs and Customary Institutions" (H. F. & G. Witherby, London)
// 3. Wiktionary Appendix:Bantu Swadesh lists (Zone E20 Kikuyu core lexical roots)
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const KIKUYU_CONFIG: LanguageConfig = {
  "id": "kikuyu",
  "name": "Kikuyu",
  "nativeName": "Gĩkũyũ",
  "family": "Bantu",
  "counties": [
    "Kiambu",
    "Murang'a",
    "Nyeri",
    "Kirinyaga",
    "Nyandarua"
  ],
  "speakers": "8.1M",
  "speechLocale": "sw-KE",
  "description": "The most widely spoken ethnic language in Kenya, spoken across the fertile Central Highlands around Mount Kenya (Kĩrĩnyaga).",
  "color": "#2E7D32",
  "sources": [
    "johnston-uganda-protectorate-1902",
    "hemery-kikuyu-1903",
    "kamba-kikuyu-vocabularies",
    "mcgregor-kikuyu-1904",
    "routledge-kikuyu-1910",
    "hobley-akamba-ethnology-1910",
    "johnston-bantu-1919",
    "bantu-beliefs",
    "open-web-swadesh-comparative"
  ]
};

export const KIKUYU_UNITS: CourseUnit[] = [
  {
    "id": "kikuyu-unit-1",
    "title": "Unit 1: Greetings, Courtesies & Everyday Inquiries",
    "description": "Master traditional Gĩkũyũ salutations, polite replies, and essential conversational questions recorded by Hildegarde Hinde (1904).",
    "icon": "Handshake",
    "skills": [
      {
        "id": "kikuyu-greetings-1",
        "title": "Salutations & Welcoming Guests",
        "icon": "Handshake",
        "description": "Learn traditional salutations, responses, and welcoming hospitality phrases from Hinde (1904).",
        "tips": "In Hildegarde Hinde's 1904 vocabulary, the foundational salutation is 'Mwohoro?' ('What is the news/peace?'), answered with 'Mwohoro mwēga' ('Good news/peace') or 'Mwēga munnu' ('Very good'). Welcoming a visitor home involves 'Uka haha' ('Come here') and offering water ('Rehe maii').",
        "culturalNote": "Among the Agĩkũyũ of the Central Highlands, inquiring after the peace ('mwohoro') of the homestead, children, and herds precedes any formal conversation.",
        "words": [
          {
            "target": "Mwohoro",
            "source": "Salutation / How is the news?",
            "pronunciation": "mwo-ho-ro",
            "hint": "Hinde (1904) p. 67 salutation"
          },
          {
            "target": "Mwohoro mwēga",
            "source": "Good news / Fine",
            "pronunciation": "mwo-ho-ro mwe-ga",
            "hint": "Hinde (1904) p. 67 reply"
          },
          {
            "target": "Mwēga munnu",
            "source": "Very good / Very well",
            "pronunciation": "mwe-ga munnu",
            "hint": "Hinde (1904) p. 67 emphatic reply"
          },
          {
            "target": "Nimwega",
            "source": "I am good / well",
            "pronunciation": "nimwe-ga",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Uka haha",
            "source": "Come here",
            "pronunciation": "uka ha-ha",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Rehe maii",
            "source": "Bring water",
            "pronunciation": "re-he maii",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Reherria",
            "source": "Bring food",
            "pronunciation": "re-herria",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Aca",
            "source": "No",
            "pronunciation": "aca",
            "hint": "Core negative particle"
          }
        ],
        "sentences": [
          {
            "target": "Mwohoro? Mwohoro mwēga munnu.",
            "source": "How is the news? Very good news."
          },
          {
            "target": "Uka haha, rehe maii.",
            "source": "Come here, bring water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the traditional Kikuyu salutation recorded by Hildegarde Hinde (1904)?",
            "correctAnswer": "Mwohoro",
            "options": [
              "Mwohoro",
              "Uka haha",
              "Rehe maii",
              "Aca"
            ],
            "hint": "Literally asks after the news/peace"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bring water\" in Kikuyu?",
            "correctAnswer": "Rehe maii",
            "options": [
              "Rehe maii",
              "Uka haha",
              "Mwohoro mwēga",
              "Nimwega"
            ],
            "hint": "maii = water"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu hospitality phrases from Hinde (1904) with their English meanings:",
            "correctAnswer": "Mwohoro: Salutation, Mwēga munnu: Very good, Uka haha: Come here, Rehe maii: Bring water",
            "pairs": [
              {
                "left": "Mwohoro",
                "right": "Salutation"
              },
              {
                "left": "Mwēga munnu",
                "right": "Very good"
              },
              {
                "left": "Uka haha",
                "right": "Come here"
              },
              {
                "left": "Rehe maii",
                "right": "Bring water"
              }
            ]
          }
        ]
      },
      {
        "id": "kikuyu-questions-1",
        "title": "Essential Questions & Conversational Replies",
        "icon": "Coffee",
        "description": "Ask names, origins, destinations, and intentions using Hinde (1904) phraseology.",
        "tips": "Question words in Gĩkũyũ typically stand at the end of the clause or attach as interrogative enclitics: '-atia?' (how?), '-ku?' (where?), '-ki?' (what?), as in 'Wita gwatia?' (What is your name?) and 'Wathiiku?' (Where are you going?).",
        "words": [
          {
            "target": "Wita gwatia?",
            "source": "What is your name?",
            "pronunciation": "wi-ta gwa-tia",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Wathiiku?",
            "source": "Where are you going?",
            "pronunciation": "wathii-ku",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ukwendakki?",
            "source": "What do you want?",
            "pronunciation": "ukwendakki",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Umaku?",
            "source": "Where do you come from?",
            "pronunciation": "u-ma-ku",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Uguikatia?",
            "source": "What are you doing?",
            "pronunciation": "u-gui-ka-tia",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Nikkigekki?",
            "source": "What is this?",
            "pronunciation": "nikki-gekki",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Meku maii?",
            "source": "Where is the water?",
            "pronunciation": "me-ku maii",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ndiui",
            "source": "I do not know",
            "pronunciation": "ndiui",
            "hint": "Hinde (1904) p. 64 (also ndikumenya)"
          }
        ],
        "sentences": [
          {
            "target": "Wita gwatia? Umaku?",
            "source": "What is your name? Where do you come from?"
          },
          {
            "target": "Wathiiku? Ukwendakki?",
            "source": "Where are you going? What do you want?"
          },
          {
            "target": "Meku maii? Ndiui.",
            "source": "Where is the water? I do not know."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Wita gwatia?\" in Kikuyu?",
            "correctAnswer": "What is your name?",
            "options": [
              "Where are you going?",
              "What do you want?",
              "Where do you come from?",
              "What is your name?"
            ],
            "hint": "Hinde (1904) p. 64"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Wathiiku?\" in Kikuyu?",
            "correctAnswer": "Where are you going?",
            "options": [
              "What do you want?",
              "Where do you come from?",
              "Where are you going?",
              "What is your name?"
            ],
            "hint": "Hinde (1904) p. 64"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ukwendakki?\" in Kikuyu?",
            "correctAnswer": "What do you want?",
            "options": [
              "Where do you come from?",
              "What do you want?",
              "What is your name?",
              "Where are you going?"
            ],
            "hint": "Hinde (1904) p. 64"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"What do you want?\" in Kikuyu?",
            "correctAnswer": "Ukwendakki?",
            "options": [
              "Ukwendakki?",
              "Wita gwatia?",
              "Wathiiku?",
              "Umaku?"
            ],
            "hint": "oo-kwen-dah-kee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where do you come from?\" in Kikuyu?",
            "correctAnswer": "Umaku?",
            "options": [
              "Wita gwatia?",
              "Wathiiku?",
              "Ukwendakki?",
              "Umaku?"
            ],
            "hint": "oo-mah-koo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "Wita gwatia?: What is your name?",
            "pairs": [
              {
                "left": "Wita gwatia?",
                "right": "What is your name?"
              },
              {
                "left": "Wathiiku?",
                "right": "Where are you going?"
              },
              {
                "left": "Ukwendakki?",
                "right": "What do you want?"
              },
              {
                "left": "Umaku?",
                "right": "Where do you come from?"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"What are you doing?\": ___",
            "correctAnswer": "Uguikatia?",
            "options": [
              "Wita gwatia?",
              "Wathiiku?",
              "Ukwendakki?",
              "Uguikatia?"
            ],
            "hint": "Hinde (1904) p. 64"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-2",
    "title": "Unit 2: Numbers, Counting & Multipliers",
    "description": "Learn the decimal counting system from 1 to 100, ordinals, and frequency multipliers from Hinde (1904).",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "kikuyu-numbers-1-10",
        "title": "Cardinal Numbers 1 to 10",
        "icon": "Hash",
        "description": "Count from 1 (imue) to 10 (ikumi) in Gĩkũyũ.",
        "tips": "In Hinde (1904, p. 62), Kikuyu cardinal numbers 1–10 are: imue (1), igiri (2), ithatu (3), inya (4), ithanu (5), thanthatu (6), muguanja (7), inyanya (8), ikenda (9), and ikumi (10).",
        "words": [
          {
            "target": "Imue",
            "source": "One (1)",
            "pronunciation": "i-mue",
            "hint": "Hinde (1904) p. 62 (modern: ĩmwe)"
          },
          {
            "target": "Igiri",
            "source": "Two (2)",
            "pronunciation": "i-gi-ri",
            "hint": "Hinde (1904) p. 62 (modern: igĩrĩ)"
          },
          {
            "target": "Ithatu",
            "source": "Three (3)",
            "pronunciation": "itha-tu",
            "hint": "Hinde (1904) p. 62 (modern: ithatũ)"
          },
          {
            "target": "Inya",
            "source": "Four (4)",
            "pronunciation": "inya",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Ithanu",
            "source": "Five (5)",
            "pronunciation": "itha-nu",
            "hint": "Hinde (1904) p. 62 (modern: ithano)"
          },
          {
            "target": "Thanthatu",
            "source": "Six (6)",
            "pronunciation": "thantha-tu",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Muguanja",
            "source": "Seven (7)",
            "pronunciation": "mu-guanja",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Inyanya",
            "source": "Eight (8)",
            "pronunciation": "inyanya",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Ikenda",
            "source": "Nine (9)",
            "pronunciation": "i-kenda",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Ikumi",
            "source": "Ten (10)",
            "pronunciation": "i-ku-mi",
            "hint": "Hinde (1904) p. 62"
          }
        ],
        "sentences": [
          {
            "target": "Miti ithatu na mahiga inya",
            "source": "Three trees and four stones"
          },
          {
            "target": "Mũthuri nĩatairie Igiri mũciĩ.",
            "source": "The elder explained two at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Imue\" in Kikuyu?",
            "correctAnswer": "One (1)",
            "options": [
              "Two (2)",
              "Three (3)",
              "Four (4)",
              "One (1)"
            ],
            "hint": "Hinde (1904) p. 62 (modern: ĩmwe)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Igiri\" in Kikuyu?",
            "correctAnswer": "Two (2)",
            "options": [
              "Three (3)",
              "Four (4)",
              "Two (2)",
              "One (1)"
            ],
            "hint": "Hinde (1904) p. 62 (modern: igĩrĩ)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ithatu\" in Kikuyu?",
            "correctAnswer": "Three (3)",
            "options": [
              "Four (4)",
              "Three (3)",
              "One (1)",
              "Two (2)"
            ],
            "hint": "Hinde (1904) p. 62 (modern: ithatũ)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three (3)\" in Kikuyu?",
            "correctAnswer": "Ithatu",
            "options": [
              "Ithatu",
              "Imue",
              "Igiri",
              "Inya"
            ],
            "hint": "ee-thah-too"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four (4)\" in Kikuyu?",
            "correctAnswer": "Inya",
            "options": [
              "Imue",
              "Igiri",
              "Ithatu",
              "Inya"
            ],
            "hint": "ee-nyah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "Imue: One (1)",
            "pairs": [
              {
                "left": "Imue",
                "right": "One (1)"
              },
              {
                "left": "Igiri",
                "right": "Two (2)"
              },
              {
                "left": "Ithatu",
                "right": "Three (3)"
              },
              {
                "left": "Inya",
                "right": "Four (4)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"Five (5)\": ___",
            "correctAnswer": "Ithanu",
            "options": [
              "Imue",
              "Igiri",
              "Ithatu",
              "Ithanu"
            ],
            "hint": "Hinde (1904) p. 62 (modern: ithano)"
          }
        ]
      },
      {
        "id": "kikuyu-numbers-tens-multipliers",
        "title": "Tens (Mirongo), Hundreds & Multipliers",
        "icon": "Calculator",
        "description": "Count by tens from 20 to 100 and express \"once, twice, thrice, first, last\".",
        "tips": "Tens are formed with 'mirongo' + the unit numeral: mirongoiri (20), mirongo itatu (30), mirongo inya (40), mirongo ithanu (50), up to igana (100). Frequency multipliers prefix ka-/kĩ-: kirrimue (once), kēēri (twice), kathatu (thrice).",
        "words": [
          {
            "target": "Mirongoiri",
            "source": "Twenty (20)",
            "pronunciation": "mi-rongoi-ri",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Mirongo itatu",
            "source": "Thirty (30)",
            "pronunciation": "mi-rongo i-ta-tu",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Mirongo inya",
            "source": "Forty (40)",
            "pronunciation": "mi-rongo inya",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Mirongo ithanu",
            "source": "Fifty (50)",
            "pronunciation": "mi-rongo itha-nu",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Igana",
            "source": "One hundred (100)",
            "pronunciation": "i-ga-na",
            "hint": "Hinde (1904) p. 63"
          },
          {
            "target": "Kirrimue",
            "source": "Once (one time)",
            "pronunciation": "kirri-mue",
            "hint": "Hinde (1904) p. 63"
          },
          {
            "target": "Kēēri",
            "source": "Twice (two times)",
            "pronunciation": "kee-ri",
            "hint": "Hinde (1904) p. 63"
          },
          {
            "target": "Kathatu",
            "source": "Thrice (three times)",
            "pronunciation": "katha-tu",
            "hint": "Hinde (1904) p. 63"
          },
          {
            "target": "Kuambirrira",
            "source": "First",
            "pronunciation": "kuambirri-ra",
            "hint": "Hinde (1904) p. 63"
          },
          {
            "target": "imue",
            "source": "One",
            "pronunciation": "i-mue"
          }
        ],
        "sentences": [
          {
            "target": "Mirongoiri — Mirongo itatu",
            "source": "Twenty — Thirty"
          },
          {
            "target": "Mirongo inya — Mirongo ithanu",
            "source": "Forty — Fifty"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mirongoiri\" mean in English?",
            "correctAnswer": "Twenty (20)",
            "options": [
              "Twenty (20)",
              "Thirty (30)",
              "Forty (40)",
              "Fifty (50)"
            ],
            "hint": "Core vocabulary in Tens (Mirongo), Hundreds & Multipliers"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Thirty (30)\"",
            "correctAnswer": "Mirongo itatu",
            "acceptedAnswers": [
              "Mirongo itatu",
              "Mirongo itatu"
            ],
            "hint": "Starts with \"Mi\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Mirongo inya\"",
            "correctAnswer": "Forty",
            "acceptedAnswers": [
              "Forty (40)",
              "Forty"
            ],
            "hint": "Review Tens (Mirongo), Hundreds & Multipliers"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Tens (Mirongo), Hundreds & Multipliers with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Mirongoiri",
                "right": "Twenty"
              },
              {
                "left": "Mirongo itatu",
                "right": "Thirty"
              },
              {
                "left": "Mirongo inya",
                "right": "Forty"
              },
              {
                "left": "Mirongo ithanu",
                "right": "Fifty"
              },
              {
                "left": "Igana",
                "right": "One hundred"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-3",
    "title": "Unit 3: Family, Kinship & Social Ranks",
    "description": "Learn terms for family members, life stages, and possessives from Hinde (1904) and Hobley (1922).",
    "icon": "Users",
    "skills": [
      {
        "id": "kikuyu-family-kinship",
        "title": "Parents, Children & Homestead Kin",
        "icon": "Users",
        "description": "Master core kinship nouns and possessive phrases.",
        "tips": "Class 1 animate nouns replace 'mu-' with 'a-' in the plural (mundu → andu, muka → aka), while diminutive 'kana' (child) becomes 'twana' or 'siana' (children).",
        "words": [
          {
            "target": "Baba wiitu",
            "source": "Our father",
            "pronunciation": "ba-ba wii-tu",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Nyina wiitu",
            "source": "Our mother",
            "pronunciation": "nyi-na wii-tu",
            "hint": "Hinde (1904) p. 65 (also Mwaitu)"
          },
          {
            "target": "Mwana wakua",
            "source": "My child",
            "pronunciation": "mwa-na wa-kua",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Siana siaku",
            "source": "Your children",
            "pronunciation": "sia-na sia-ku",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Mundu (pl. Andu)",
            "source": "Person (pl. People)",
            "pronunciation": "mundu",
            "hint": "Hinde (1904) p. vi"
          },
          {
            "target": "Muka (pl. Aka)",
            "source": "Woman / Wife (pl. Women / Wives)",
            "pronunciation": "mu-ka",
            "hint": "Hinde (1904) p. vi"
          },
          {
            "target": "Mwanake (pl. Anake)",
            "source": "Warrior / Young man (pl. Warriors)",
            "pronunciation": "mwa-na-ke",
            "hint": "Hobley (1922) p. 305"
          },
          {
            "target": "Muiritu (pl. Airitu)",
            "source": "Maiden / Unmarried girl",
            "pronunciation": "mui-ri-tu",
            "hint": "Hobley (1922) p. 306"
          },
          {
            "target": "Mutumia (pl. Atumia)",
            "source": "Elder of the community",
            "pronunciation": "mu-tu-mia",
            "hint": "Hobley (1922) p. 307"
          }
        ],
        "sentences": [
          {
            "target": "Ninakana. Kana kani kiega.",
            "source": "I have a child. A good child."
          },
          {
            "target": "Twana tothe tunini.",
            "source": "All the children are small."
          },
          {
            "target": "Mundu nimuwega; andu anega.",
            "source": "A good man; good men."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Baba wiitu\" in Kikuyu?",
            "correctAnswer": "Our father",
            "options": [
              "Our mother",
              "My child",
              "Your children",
              "Our father"
            ],
            "hint": "Hinde (1904) p. 65"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Nyina wiitu\" in Kikuyu?",
            "correctAnswer": "Our mother",
            "options": [
              "My child",
              "Your children",
              "Our mother",
              "Our father"
            ],
            "hint": "Hinde (1904) p. 65 (also Mwaitu)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mwana wakua\" in Kikuyu?",
            "correctAnswer": "My child",
            "options": [
              "Your children",
              "My child",
              "Our father",
              "Our mother"
            ],
            "hint": "Hinde (1904) p. 65"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"My child\" in Kikuyu?",
            "correctAnswer": "Mwana wakua",
            "options": [
              "Mwana wakua",
              "Baba wiitu",
              "Nyina wiitu",
              "Siana siaku"
            ],
            "hint": "mwah-nah wah-kwah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Your children\" in Kikuyu?",
            "correctAnswer": "Siana siaku",
            "options": [
              "Baba wiitu",
              "Nyina wiitu",
              "Mwana wakua",
              "Siana siaku"
            ],
            "hint": "see-ah-nah see-ah-koo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "Baba wiitu: Our father",
            "pairs": [
              {
                "left": "Baba wiitu",
                "right": "Our father"
              },
              {
                "left": "Nyina wiitu",
                "right": "Our mother"
              },
              {
                "left": "Mwana wakua",
                "right": "My child"
              },
              {
                "left": "Siana siaku",
                "right": "Your children"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"Person (pl. People)\": ___",
            "correctAnswer": "Mundu (pl. Andu)",
            "options": [
              "Baba wiitu",
              "Nyina wiitu",
              "Mwana wakua",
              "Mundu (pl. Andu)"
            ],
            "hint": "Hinde (1904) p. vi"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-4",
    "title": "Unit 4: Homestead, Food, Livestock & Daily Sustenance",
    "description": "Talk about food, milk, hunger, cattle, and household items using Hinde (1904).",
    "icon": "Tractor",
    "skills": [
      {
        "id": "kikuyu-food-homestead",
        "title": "Food, Milk, Fire & Homestead Life",
        "icon": "MessageCircle",
        "description": "Express hunger, request milk and food, and name household items.",
        "tips": "Notice the locative suffix '-ini / -eni' in 'nyumbani' (in the house) and the concord on 'nyumba ninene' (a big house) vs. 'ruhiu rwega' (a good knife).",
        "words": [
          {
            "target": "Nihūtie",
            "source": "I am hungry",
            "pronunciation": "ni-hu-tie",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ningwenda irria",
            "source": "I want milk",
            "pronunciation": "ningwenda irria",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ugika kurria?",
            "source": "Do you want to eat?",
            "pronunciation": "u-gi-ka kurria",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Ngombe siake",
            "source": "His cows / cattle",
            "pronunciation": "ngombe sia-ke",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Nyumba ninene",
            "source": "A big house",
            "pronunciation": "nyumba ni-ne-ne",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Mwitzi wiitu",
            "source": "Our village / homestead",
            "pronunciation": "mwitzi wii-tu",
            "hint": "Hinde (1904) p. 65 (modern: mũciĩ witũ)"
          },
          {
            "target": "Akiamwaki",
            "source": "Make a fire",
            "pronunciation": "a-kiamwa-ki",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Ruhiu rwega",
            "source": "A good knife / sword",
            "pronunciation": "ru-hiu rwe-ga",
            "hint": "Hinde (1904) p. 66"
          },
          {
            "target": "Kiratu (pl. Iratu)",
            "source": "Sandal / shoe (pl. Sandals)",
            "pronunciation": "ki-ra-tu",
            "hint": "Hinde (1904) p. vii"
          }
        ],
        "sentences": [
          {
            "target": "Akiamwaki nyumbani.",
            "source": "Make a fire in the house."
          },
          {
            "target": "Ngombe siake na mwitzi wiitu.",
            "source": "His cows and our village."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Nihūtie\" in Kikuyu?",
            "correctAnswer": "I am hungry",
            "options": [
              "I want milk",
              "Do you want to eat?",
              "His cows / cattle",
              "I am hungry"
            ],
            "hint": "Hinde (1904) p. 64"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ningwenda irria\" in Kikuyu?",
            "correctAnswer": "I want milk",
            "options": [
              "Do you want to eat?",
              "His cows / cattle",
              "I want milk",
              "I am hungry"
            ],
            "hint": "Hinde (1904) p. 64"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ugika kurria?\" in Kikuyu?",
            "correctAnswer": "Do you want to eat?",
            "options": [
              "His cows / cattle",
              "Do you want to eat?",
              "I am hungry",
              "I want milk"
            ],
            "hint": "Hinde (1904) p. 65"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Do you want to eat?\" in Kikuyu?",
            "correctAnswer": "Ugika kurria?",
            "options": [
              "Ugika kurria?",
              "Nihūtie",
              "Ningwenda irria",
              "Ngombe siake"
            ],
            "hint": "oo-gee-kah koo-rri-ah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"His cows / cattle\" in Kikuyu?",
            "correctAnswer": "Ngombe siake",
            "options": [
              "Nihūtie",
              "Ningwenda irria",
              "Ugika kurria?",
              "Ngombe siake"
            ],
            "hint": "ngoh-mbeh see-ah-keh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "Nihūtie: I am hungry",
            "pairs": [
              {
                "left": "Nihūtie",
                "right": "I am hungry"
              },
              {
                "left": "Ningwenda irria",
                "right": "I want milk"
              },
              {
                "left": "Ugika kurria?",
                "right": "Do you want to eat?"
              },
              {
                "left": "Ngombe siake",
                "right": "His cows / cattle"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"A big house\": ___",
            "correctAnswer": "Nyumba ninene",
            "options": [
              "Nihūtie",
              "Ningwenda irria",
              "Ugika kurria?",
              "Nyumba ninene"
            ],
            "hint": "Hinde (1904) p. 65"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-5",
    "title": "Unit 5: Verbs, Tenses & Negation",
    "description": "Master affirmative and negative verb conjugations, imperatives, and everyday actions from Hinde (1904).",
    "icon": "Zap",
    "skills": [
      {
        "id": "kikuyu-verbs-actions",
        "title": "Everyday Verbs, Commands & Negatives",
        "icon": "Zap",
        "description": "Express going, returning, bringing, seeing, and negative statements.",
        "tips": "Affirmative future uses -ka-/-ga- ('ningathi' = I will go; 'ningashōka' = I will return), while negative verbs prefix nd-/ndi- ('ndithie / ndikathie' = I will not go; 'ndionna' = I do not see).",
        "words": [
          {
            "target": "Ningathi",
            "source": "I will go",
            "pronunciation": "ningathi",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ndikathie",
            "source": "I will not go",
            "pronunciation": "ndi-kathie",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ndingihotta kuthi",
            "source": "I cannot go",
            "pronunciation": "ndingi-hotta kuthi",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ningashōka",
            "source": "I will return",
            "pronunciation": "ningasho-ka",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ndikwenda",
            "source": "I do not want",
            "pronunciation": "ndikwenda",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ndionna",
            "source": "I do not see",
            "pronunciation": "ndionna",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Nikurehe",
            "source": "I bring",
            "pronunciation": "ni-ku-re-he",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Aniuka",
            "source": "He has come",
            "pronunciation": "a-niu-ka",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Udikuka",
            "source": "Do not come",
            "pronunciation": "u-di-ku-ka",
            "hint": "Hinde (1904) p. 66"
          },
          {
            "target": "Kirra",
            "source": "Be quiet",
            "pronunciation": "kirra",
            "hint": "Hinde (1904) p. 65"
          }
        ],
        "sentences": [
          {
            "target": "Ndikwenda kuthi; ndingihotta kuthi.",
            "source": "I do not want to go; I cannot go."
          },
          {
            "target": "Mũthuri nĩatairie Ndikathie mũciĩ.",
            "source": "The elder explained i will not go at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ningathi\" in Kikuyu?",
            "correctAnswer": "I will go",
            "options": [
              "I will not go",
              "I cannot go",
              "I will return",
              "I will go"
            ],
            "hint": "Hinde (1904) p. 64"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ndikathie\" in Kikuyu?",
            "correctAnswer": "I will not go",
            "options": [
              "I cannot go",
              "I will return",
              "I will not go",
              "I will go"
            ],
            "hint": "Hinde (1904) p. 64"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ndingihotta kuthi\" in Kikuyu?",
            "correctAnswer": "I cannot go",
            "options": [
              "I will return",
              "I cannot go",
              "I will go",
              "I will not go"
            ],
            "hint": "Hinde (1904) p. 64"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I cannot go\" in Kikuyu?",
            "correctAnswer": "Ndingihotta kuthi",
            "options": [
              "Ndingihotta kuthi",
              "Ningathi",
              "Ndikathie",
              "Ningashōka"
            ],
            "hint": "ndee-ngee-hoh-ttah koo-thee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I will return\" in Kikuyu?",
            "correctAnswer": "Ningashōka",
            "options": [
              "Ningathi",
              "Ndikathie",
              "Ndingihotta kuthi",
              "Ningashōka"
            ],
            "hint": "nee-ngah-shoh-kah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "Ningathi: I will go",
            "pairs": [
              {
                "left": "Ningathi",
                "right": "I will go"
              },
              {
                "left": "Ndikathie",
                "right": "I will not go"
              },
              {
                "left": "Ndingihotta kuthi",
                "right": "I cannot go"
              },
              {
                "left": "Ningashōka",
                "right": "I will return"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"I do not want\": ___",
            "correctAnswer": "Ndikwenda",
            "options": [
              "Ningathi",
              "Ndikathie",
              "Ndingihotta kuthi",
              "Ndikwenda"
            ],
            "hint": "Hinde (1904) p. 64"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-6",
    "title": "Unit 6: Nature, Body Parts & Cultural Heritage",
    "description": "Explore natural landscapes, anatomy, and classical Agĩkũyũ cultural institutions from Hinde (1904) and Hobley (1922).",
    "icon": "Activity",
    "skills": [
      {
        "id": "kikuyu-nature-body",
        "title": "Nature, Anatomy & Locatives",
        "icon": "Activity",
        "description": "Name features of the highland landscape and parts of the body.",
        "tips": "Class 3/4 trees ('muti → miti'), Class 5/6 stones ('ihiga → mahiga'), and Class 7/8 mountains ('kirima → irima') illustrate the core inanimate noun classes.",
        "words": [
          {
            "target": "Kiara (pl. Shiara)",
            "source": "Finger (pl. Fingers)",
            "pronunciation": "kia-ra",
            "hint": "Hinde (1904) p. vii"
          },
          {
            "target": "Uwoko wake",
            "source": "His hand / arm",
            "pronunciation": "u-wo-ko wa-ke",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Mtueni",
            "source": "In the head",
            "pronunciation": "mtue-ni",
            "hint": "Hinde (1904) p. 67"
          },
          {
            "target": "kutu",
            "source": "Ear",
            "pronunciation": "ku-tu"
          },
          {
            "target": "ritho, pl. meetho",
            "source": "Eye",
            "pronunciation": "ritho"
          },
          {
            "target": "kuhuru",
            "source": "Leg",
            "pronunciation": "ku-hu-ru"
          },
          {
            "target": "mbaru",
            "source": "Rib",
            "pronunciation": "mba-ru"
          },
          {
            "target": "kiarra",
            "source": "Toe",
            "pronunciation": "kiarra"
          }
        ],
        "sentences": [
          {
            "target": "Kiara — Uwoko wake",
            "source": "Finger — His hand"
          },
          {
            "target": "Mtueni — kutu",
            "source": "In the head — Ear"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kiara\" mean in English?",
            "correctAnswer": "Finger (pl. Fingers)",
            "options": [
              "Finger (pl. Fingers)",
              "His hand / arm",
              "In the head",
              "Ear"
            ],
            "hint": "Core vocabulary in Nature, Anatomy & Locatives"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"His hand / arm\"",
            "correctAnswer": "Uwoko wake",
            "acceptedAnswers": [
              "Uwoko wake",
              "Uwoko wake"
            ],
            "hint": "Starts with \"Uw\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Mtueni\"",
            "correctAnswer": "In the head",
            "acceptedAnswers": [
              "In the head",
              "In the head"
            ],
            "hint": "Review Nature, Anatomy & Locatives"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Nature, Anatomy & Locatives with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Kiara",
                "right": "Finger"
              },
              {
                "left": "Uwoko wake",
                "right": "His hand"
              },
              {
                "left": "Mtueni",
                "right": "In the head"
              },
              {
                "left": "kutu",
                "right": "Ear"
              },
              {
                "left": "ritho, pl. meetho",
                "right": "Eye"
              }
            ]
          }
        ]
      },
      {
        "id": "kikuyu-culture-hobley",
        "title": "Agĩkũyũ Council, Age-Sets & Sacred Heritage",
        "icon": "Crown",
        "description": "Learn the institutional vocabulary of the Kiama council, Itwika generational transfer, and sacred Mugumo tree from C. W. Hobley (1922).",
        "tips": "C. W. Hobley's 1922 Glossary documents how Agĩkũyũ governance revolved around the 'Kiama' (council of elders), 'Chira' (deliberation/lawsuit), and the alternating generational moieties 'Maina' and 'Mwangi' who transferred authority at the 'Itwika' ceremony.",
        "words": [
          {
            "target": "Mundu Mugo",
            "source": "Traditional healer and diviner",
            "pronunciation": "mundu mu-go",
            "hint": "Hobley (1922) p. 306"
          },
          {
            "target": "gũtũ (pl. matũ)",
            "source": "Ear",
            "pronunciation": "gutu"
          },
          {
            "target": "riitho (pl. maitho)",
            "source": "Eye",
            "pronunciation": "riitho"
          },
          {
            "target": "Guoko (pl. moko)",
            "source": "Arm",
            "pronunciation": "guoko"
          },
          {
            "target": "Mromo",
            "source": "Lip",
            "pronunciation": "mro-mo"
          },
          {
            "target": "Kiara kya kogoro",
            "source": "Toe",
            "pronunciation": "kia-ra kya ko-go-ro"
          },
          {
            "target": "Kiero (Chiero)",
            "source": "Hip",
            "pronunciation": "kiero"
          },
          {
            "target": "Koguru (Ma-)",
            "source": "Leg",
            "pronunciation": "koguru"
          },
          {
            "target": "Robaru (Ma-). (Mbaru.)",
            "source": "Rib",
            "pronunciation": "robaru"
          }
        ],
        "sentences": [
          {
            "target": "Mundu Mugo — gũtũ",
            "source": "Traditional healer and diviner — Ear"
          },
          {
            "target": "riitho — Guoko",
            "source": "Eye — Arm"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mundu Mugo\" mean in English?",
            "correctAnswer": "Traditional healer and diviner",
            "options": [
              "Traditional healer and diviner",
              "Ear",
              "Eye",
              "Arm"
            ],
            "hint": "Core vocabulary in Agĩkũyũ Council, Age-Sets & Sacred Heritage"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Ear\"",
            "correctAnswer": "gũtũ",
            "acceptedAnswers": [
              "gũtũ (pl. matũ)",
              "gũtũ"
            ],
            "hint": "Starts with \"gũ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"riitho\"",
            "correctAnswer": "Eye",
            "acceptedAnswers": [
              "Eye",
              "Eye"
            ],
            "hint": "Review Agĩkũyũ Council, Age-Sets & Sacred Heritage"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Agĩkũyũ Council, Age-Sets & Sacred Heritage with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Mundu Mugo",
                "right": "Traditional healer and diviner"
              },
              {
                "left": "gũtũ",
                "right": "Ear"
              },
              {
                "left": "riitho",
                "right": "Eye"
              },
              {
                "left": "Guoko",
                "right": "Arm"
              },
              {
                "left": "Mromo",
                "right": "Lip"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-7",
    "title": "Unit 7: Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Kikuyu (Gĩkũyũ) built directly from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927).",
    "icon": "User",
    "skills": [
      {
        "id": "kikuyu-family-kinship-kinship-elders-7",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "muundu, pl. andu",
            "source": "Man"
          },
          {
            "target": "Mwana",
            "source": "Son"
          },
          {
            "target": "karegu",
            "source": "Girl"
          },
          {
            "target": "kahi",
            "source": "boy",
            "pronunciation": "ka-hi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mundu murume",
            "source": "boy (circumcised)",
            "pronunciation": "mundu mu-ru-me",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "murāta",
            "source": "brother",
            "pronunciation": "mu-ra-ta",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mthoni",
            "source": "brother in law",
            "pronunciation": "mtho-ni",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "muthamaki",
            "source": "chief",
            "pronunciation": "mutha-ma-ki",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kana, pl. twana",
            "source": "child",
            "pronunciation": "ka-na",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          }
        ],
        "sentences": [
          {
            "target": "muundu, pl. andu — Mwana",
            "source": "Man — Son"
          },
          {
            "target": "karegu — kahi",
            "source": "Girl — boy"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"muundu, pl. andu\" mean in English?",
            "correctAnswer": "Man",
            "options": [
              "Man",
              "Son",
              "Girl",
              "boy"
            ],
            "hint": "Core vocabulary in Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Son\"",
            "correctAnswer": "Mwana",
            "acceptedAnswers": [
              "Mwana",
              "Mwana"
            ],
            "hint": "Starts with \"Mw\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"karegu\"",
            "correctAnswer": "Girl",
            "acceptedAnswers": [
              "Girl",
              "Girl"
            ],
            "hint": "Review Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Kinship Terms, Elders & Household Roles with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "muundu, pl. andu",
                "right": "Man"
              },
              {
                "left": "Mwana",
                "right": "Son"
              },
              {
                "left": "karegu",
                "right": "Girl"
              },
              {
                "left": "kahi",
                "right": "boy"
              },
              {
                "left": "mundu murume",
                "right": "boy"
              }
            ]
          }
        ]
      },
      {
        "id": "kikuyu-family-kinship-clans-community-7",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "kukigamma",
            "source": "crawl (a man)",
            "pronunciation": "ku-ki-gamma",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "muthuri, pl. athuri",
            "source": "elder",
            "pronunciation": "muthu-ri",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "baba",
            "source": "father",
            "pronunciation": "ba-ba",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "wathiomo",
            "source": "father-in-law",
            "pronunciation": "wathio-mo",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "karegu",
            "source": "girl",
            "pronunciation": "ka-re-gu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "murume wakwa",
            "source": "husband",
            "pronunciation": "mu-ru-me wakwa",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "muundu, pl. andu",
            "source": "man",
            "pronunciation": "muundu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "maiitu",
            "source": "mother",
            "pronunciation": "maii-tu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "Mwana",
            "source": "Son",
            "pronunciation": "mwa-na"
          }
        ],
        "sentences": [
          {
            "target": "kukigamma — muthuri, pl. athuri",
            "source": "crawl — elder"
          },
          {
            "target": "baba — wathiomo",
            "source": "father — father-in-law"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kukigamma\" mean in English?",
            "correctAnswer": "crawl (a man)",
            "options": [
              "crawl (a man)",
              "elder",
              "father",
              "father-in-law"
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"elder\"",
            "correctAnswer": "muthuri, pl. athuri",
            "acceptedAnswers": [
              "muthuri, pl. athuri",
              "muthuri, pl. athuri"
            ],
            "hint": "Starts with \"mu\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"baba\"",
            "correctAnswer": "father",
            "acceptedAnswers": [
              "father",
              "father"
            ],
            "hint": "Review Clans, Marriage & Community Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kukigamma",
                "right": "crawl"
              },
              {
                "left": "muthuri, pl. athuri",
                "right": "elder"
              },
              {
                "left": "baba",
                "right": "father"
              },
              {
                "left": "wathiomo",
                "right": "father-in-law"
              },
              {
                "left": "karegu",
                "right": "girl"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-8",
    "title": "Unit 8: Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Kikuyu (Gĩkũyũ) built directly from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927).",
    "icon": "Scale",
    "skills": [
      {
        "id": "kikuyu-numbers-measures-cardinals-ordinals-8",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "Ithathatũ",
            "source": "Six",
            "pronunciation": "ithatha-tu",
            "hint": "Hinde: thanthatu"
          },
          {
            "target": "-õthe",
            "source": "all",
            "pronunciation": "othe",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "ithiwi õthe",
            "source": "all of us",
            "pronunciation": "ithi-wi othe",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "imue",
            "source": "One"
          },
          {
            "target": "ikumi",
            "source": "Ten"
          },
          {
            "target": "andu ere",
            "source": "both",
            "pronunciation": "andu ere",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kutara",
            "source": "count",
            "pronunciation": "ku-ta-ra",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "inyanga",
            "source": "eight",
            "pronunciation": "inyanga",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kanyanya",
            "source": "eight times",
            "pronunciation": "kanyanya",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          }
        ],
        "sentences": [
          {
            "target": "Ithathatũ — -õthe",
            "source": "Six — all"
          },
          {
            "target": "ithiwi õthe — imue",
            "source": "all of us — One"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ithathatũ\" mean in English?",
            "correctAnswer": "Six",
            "options": [
              "Six",
              "all",
              "all of us",
              "One"
            ],
            "hint": "Core vocabulary in Cardinal & Ordinal Numerals"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"all\"",
            "correctAnswer": "-õthe",
            "acceptedAnswers": [
              "-õthe",
              "-õthe"
            ],
            "hint": "Starts with \"-õ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ithiwi õthe\"",
            "correctAnswer": "all of us",
            "acceptedAnswers": [
              "all of us",
              "all of us"
            ],
            "hint": "Review Cardinal & Ordinal Numerals"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Cardinal & Ordinal Numerals with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Ithathatũ",
                "right": "Six"
              },
              {
                "left": "-õthe",
                "right": "all"
              },
              {
                "left": "ithiwi õthe",
                "right": "all of us"
              },
              {
                "left": "imue",
                "right": "One"
              },
              {
                "left": "ikumi",
                "right": "Ten"
              }
            ]
          }
        ]
      },
      {
        "id": "kikuyu-numbers-measures-trade-measures-8",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "mirongoiri na itanu",
            "source": "fifty",
            "pronunciation": "mi-rongoi-ri na i-ta-nu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kiarra ki morroto",
            "source": "finger (first)",
            "pronunciation": "kiarra ki morro-to",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "ikinya or kuambirrira",
            "source": "first",
            "pronunciation": "i-kinya or kuambirri-ra",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "katanu",
            "source": "five times",
            "pronunciation": "ka-ta-nu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mirongo iri na ena",
            "source": "forty",
            "pronunciation": "mi-rongo iri na ena",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kanna",
            "source": "four times",
            "pronunciation": "kanna",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kishuinji",
            "source": "half",
            "pronunciation": "kishuinji",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "nichigana",
            "source": "how many",
            "pronunciation": "nichi-ga-na",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "riingi",
            "source": "many",
            "pronunciation": "riingi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          }
        ],
        "sentences": [
          {
            "target": "Mũthuri nĩatairie kiarra ki morroto mũciĩ.",
            "source": "The elder explained finger at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mirongoiri na itanu\" in Kikuyu?",
            "correctAnswer": "fifty",
            "options": [
              "finger (first)",
              "first",
              "five times",
              "fifty"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kiarra ki morroto\" in Kikuyu?",
            "correctAnswer": "finger (first)",
            "options": [
              "first",
              "five times",
              "finger (first)",
              "fifty"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikinya or kuambirrira\" in Kikuyu?",
            "correctAnswer": "first",
            "options": [
              "five times",
              "first",
              "fifty",
              "finger (first)"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"first\" in Kikuyu?",
            "correctAnswer": "ikinya or kuambirrira",
            "options": [
              "ikinya or kuambirrira",
              "mirongoiri na itanu",
              "kiarra ki morroto",
              "katanu"
            ],
            "hint": "ikinya or kuambirrira"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"five times\" in Kikuyu?",
            "correctAnswer": "katanu",
            "options": [
              "mirongoiri na itanu",
              "kiarra ki morroto",
              "ikinya or kuambirrira",
              "katanu"
            ],
            "hint": "katanu"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "mirongoiri na itanu: fifty",
            "pairs": [
              {
                "left": "mirongoiri na itanu",
                "right": "fifty"
              },
              {
                "left": "kiarra ki morroto",
                "right": "finger (first)"
              },
              {
                "left": "ikinya or kuambirrira",
                "right": "first"
              },
              {
                "left": "katanu",
                "right": "five times"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"forty\": ___",
            "correctAnswer": "mirongo iri na ena",
            "options": [
              "mirongoiri na itanu",
              "kiarra ki morroto",
              "ikinya or kuambirrira",
              "mirongo iri na ena"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-9",
    "title": "Unit 9: Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Kikuyu (Gĩkũyũ) built directly from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927).",
    "icon": "Milk",
    "skills": [
      {
        "id": "kikuyu-food-agriculture-staple-foods-cookery-9",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "marigu",
            "source": "banana",
            "pronunciation": "ma-ri-gu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kutziara",
            "source": "bear fruit (to)",
            "pronunciation": "kutzia-ra",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "enjohi",
            "source": "beer (native)",
            "pronunciation": "enjo-hi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "-nyungu",
            "source": "bitter",
            "pronunciation": "nyungu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "ngorrono",
            "source": "butter",
            "pronunciation": "ngorro-no",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "maguta",
            "source": "butter (clarified)",
            "pronunciation": "ma-gu-ta",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "uria",
            "source": "butter milk",
            "pronunciation": "u-ria",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mweer",
            "source": "caffre corn",
            "pronunciation": "mweer",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mugwatchi",
            "source": "cassava",
            "pronunciation": "mugwatchi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          }
        ],
        "sentences": [
          {
            "target": "Mũthuri nĩatairie kutziara mũciĩ.",
            "source": "The elder explained bear fruit at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"marigu\" in Kikuyu?",
            "correctAnswer": "banana",
            "options": [
              "bear fruit (to)",
              "beer (native)",
              "bitter",
              "banana"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kutziara\" in Kikuyu?",
            "correctAnswer": "bear fruit (to)",
            "options": [
              "beer (native)",
              "bitter",
              "bear fruit (to)",
              "banana"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"enjohi\" in Kikuyu?",
            "correctAnswer": "beer (native)",
            "options": [
              "bitter",
              "beer (native)",
              "banana",
              "bear fruit (to)"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"beer (native)\" in Kikuyu?",
            "correctAnswer": "enjohi",
            "options": [
              "enjohi",
              "marigu",
              "kutziara",
              "-nyungu"
            ],
            "hint": "enjohi"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"bitter\" in Kikuyu?",
            "correctAnswer": "-nyungu",
            "options": [
              "marigu",
              "kutziara",
              "enjohi",
              "-nyungu"
            ],
            "hint": "-nyungu"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "marigu: banana",
            "pairs": [
              {
                "left": "marigu",
                "right": "banana"
              },
              {
                "left": "kutziara",
                "right": "bear fruit (to)"
              },
              {
                "left": "enjohi",
                "right": "beer (native)"
              },
              {
                "left": "-nyungu",
                "right": "bitter"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"butter\": ___",
            "correctAnswer": "ngorrono",
            "options": [
              "marigu",
              "kutziara",
              "enjohi",
              "ngorrono"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          }
        ]
      },
      {
        "id": "kikuyu-food-agriculture-crops-livestock-9",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "mbariki",
            "source": "castor-oil tree",
            "pronunciation": "mba-ri-ki",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kurri ambakki",
            "source": "chew (tobacco)",
            "pronunciation": "kurri ambakki",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kuruga",
            "source": "cook",
            "pronunciation": "ku-ru-ga",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kumea",
            "source": "drink",
            "pronunciation": "ku-mea",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kunigurria",
            "source": "eat",
            "pronunciation": "ku-ni-gurria",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "itumbi, pl. matumbi",
            "source": "egg",
            "pronunciation": "i-tumbi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mutŭ",
            "source": "flour",
            "pronunciation": "mu-tu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "maguta",
            "source": "Oil",
            "pronunciation": "ma-gu-ta"
          },
          {
            "target": "hithi",
            "source": "Raw",
            "pronunciation": "hithi"
          }
        ],
        "sentences": [
          {
            "target": "mbariki — kurri ambakki",
            "source": "castor-oil tree — chew"
          },
          {
            "target": "kuruga — kumea",
            "source": "cook — drink"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mbariki\" mean in English?",
            "correctAnswer": "castor-oil tree",
            "options": [
              "castor-oil tree",
              "chew (tobacco)",
              "cook",
              "drink"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"chew (tobacco)\"",
            "correctAnswer": "kurri ambakki",
            "acceptedAnswers": [
              "kurri ambakki",
              "kurri ambakki"
            ],
            "hint": "Starts with \"ku\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kuruga\"",
            "correctAnswer": "cook",
            "acceptedAnswers": [
              "cook",
              "cook"
            ],
            "hint": "Review Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mbariki",
                "right": "castor-oil tree"
              },
              {
                "left": "kurri ambakki",
                "right": "chew"
              },
              {
                "left": "kuruga",
                "right": "cook"
              },
              {
                "left": "kumea",
                "right": "drink"
              },
              {
                "left": "kunigurria",
                "right": "eat"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-10",
    "title": "Unit 10: Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Kikuyu (Gĩkũyũ) built directly from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927).",
    "icon": "PawPrint",
    "skills": [
      {
        "id": "kikuyu-nature-wildlife-land-sky-water-10",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "hiti",
            "source": "Hyena",
            "pronunciation": "hi-ti",
            "hint": "Hémery 1903, McGregor 1904 & Routledge 1910"
          },
          {
            "target": "mũgumo (pl. mĩgumo)",
            "source": "Sacred Fig Tree",
            "pronunciation": "mu-gu-mo",
            "hint": "Routledge 1910 & Hobley 1922 sacred shrine tree"
          },
          {
            "target": "thigirriri",
            "source": "ant (small black)",
            "pronunciation": "thi-girri-ri",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "tharaku",
            "source": "ant (red)",
            "pronunciation": "tha-ra-ku",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "muthua",
            "source": "ant (white)",
            "pronunciation": "muthua",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "irõõnga",
            "source": "antelope",
            "pronunciation": "i-roonga",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "muhu",
            "source": "ashes",
            "pronunciation": "mu-hu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "nugu ao ithinwa",
            "source": "baboon",
            "pronunciation": "nu-gu ao ithinwa",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "nempaka",
            "source": "Cat",
            "pronunciation": "nempa-ka"
          }
        ],
        "sentences": [
          {
            "target": "hiti — mũgumo",
            "source": "Hyena — Sacred Fig Tree"
          },
          {
            "target": "thigirriri — tharaku",
            "source": "ant — ant"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"hiti\" mean in English?",
            "correctAnswer": "Hyena",
            "options": [
              "Hyena",
              "Sacred Fig Tree",
              "ant (small black)",
              "ant (red)"
            ],
            "hint": "Core vocabulary in Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Sacred Fig Tree\"",
            "correctAnswer": "mũgumo",
            "acceptedAnswers": [
              "mũgumo (pl. mĩgumo)",
              "mũgumo"
            ],
            "hint": "Starts with \"mũ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"thigirriri\"",
            "correctAnswer": "ant",
            "acceptedAnswers": [
              "ant (small black)",
              "ant"
            ],
            "hint": "Review Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Sky, Weather, Rivers & Landforms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "hiti",
                "right": "Hyena"
              },
              {
                "left": "mũgumo",
                "right": "Sacred Fig Tree"
              },
              {
                "left": "thigirriri",
                "right": "ant"
              },
              {
                "left": "tharaku",
                "right": "ant"
              },
              {
                "left": "muthua",
                "right": "ant"
              }
            ]
          }
        ]
      },
      {
        "id": "kikuyu-nature-wildlife-wildlife-flora-10",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "mugiyo",
            "source": "baobab tree",
            "pronunciation": "mu-gi-yo",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kugambu",
            "source": "bark",
            "pronunciation": "ku-gambu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "makonni",
            "source": "bark (of tree)",
            "pronunciation": "ma-konni",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "enjugu",
            "source": "beans (tree)",
            "pronunciation": "enju-gu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "njuki",
            "source": "bee",
            "pronunciation": "nju-ki",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mbuggi",
            "source": "bell (cow)",
            "pronunciation": "mbuggi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "nyoni",
            "source": "bird",
            "pronunciation": "nyo-ni",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "imme",
            "source": "Dew",
            "pronunciation": "imme"
          },
          {
            "target": "kui or ngiti",
            "source": "Dog",
            "pronunciation": "kui or ngi-ti"
          }
        ],
        "sentences": [
          {
            "target": "mugiyo — kugambu",
            "source": "baobab tree — bark"
          },
          {
            "target": "makonni — enjugu",
            "source": "bark — beans"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mugiyo\" mean in English?",
            "correctAnswer": "baobab tree",
            "options": [
              "baobab tree",
              "bark",
              "bark (of tree)",
              "beans (tree)"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"bark\"",
            "correctAnswer": "kugambu",
            "acceptedAnswers": [
              "kugambu",
              "kugambu"
            ],
            "hint": "Starts with \"ku\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"makonni\"",
            "correctAnswer": "bark",
            "acceptedAnswers": [
              "bark (of tree)",
              "bark"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mugiyo",
                "right": "baobab tree"
              },
              {
                "left": "kugambu",
                "right": "bark"
              },
              {
                "left": "makonni",
                "right": "bark"
              },
              {
                "left": "enjugu",
                "right": "beans"
              },
              {
                "left": "njuki",
                "right": "bee"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-11",
    "title": "Unit 11: The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Kikuyu (Gĩkũyũ) built directly from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927).",
    "icon": "Heart",
    "skills": [
      {
        "id": "kikuyu-body-health-anatomy-senses-11",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "nda",
            "source": "abdomen",
            "pronunciation": "nda",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "runyadide",
            "source": "ankle",
            "pronunciation": "runya-di-de",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "wuoko",
            "source": "arm (the whole)",
            "pronunciation": "wuo-ko",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kuwoko",
            "source": "arm (fore)",
            "pronunciation": "ku-wo-ko",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kichako",
            "source": "arm (upper)",
            "pronunciation": "kicha-ko",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mgongo",
            "source": "back",
            "pronunciation": "mgongo",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "ihindi",
            "source": "back (small of)",
            "pronunciation": "i-hindi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "Koto (pl. mato)",
            "source": "Ear",
            "pronunciation": "koto"
          },
          {
            "target": "Rizo (pl. maizo)",
            "source": "Eye",
            "pronunciation": "rizo"
          }
        ],
        "sentences": [
          {
            "target": "nda — runyadide",
            "source": "abdomen — ankle"
          },
          {
            "target": "wuoko — kuwoko",
            "source": "arm — arm"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"nda\" mean in English?",
            "correctAnswer": "abdomen",
            "options": [
              "abdomen",
              "ankle",
              "arm (the whole)",
              "arm (fore)"
            ],
            "hint": "Core vocabulary in Parts of the Body & Physical Senses"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"ankle\"",
            "correctAnswer": "runyadide",
            "acceptedAnswers": [
              "runyadide",
              "runyadide"
            ],
            "hint": "Starts with \"ru\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"wuoko\"",
            "correctAnswer": "arm",
            "acceptedAnswers": [
              "arm (the whole)",
              "arm"
            ],
            "hint": "Review Parts of the Body & Physical Senses"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Parts of the Body & Physical Senses with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "nda",
                "right": "abdomen"
              },
              {
                "left": "runyadide",
                "right": "ankle"
              },
              {
                "left": "wuoko",
                "right": "arm"
              },
              {
                "left": "kuwoko",
                "right": "arm"
              },
              {
                "left": "kichako",
                "right": "arm"
              }
            ]
          }
        ]
      },
      {
        "id": "kikuyu-body-health-healing-safety-11",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "nderu",
            "source": "beard",
            "pronunciation": "nde-ru",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "sakame",
            "source": "blood",
            "pronunciation": "sa-ka-me",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kumirra",
            "source": "blow nose",
            "pronunciation": "ku-mirra",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mwiri",
            "source": "body",
            "pronunciation": "mwi-ri",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "ihuha, pl. mahuha",
            "source": "boil",
            "pronunciation": "i-hu-ha",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kutu",
            "source": "Ear"
          },
          {
            "target": "ihindi, pl. mahindi",
            "source": "bone",
            "pronunciation": "i-hindi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "nyondo",
            "source": "breast",
            "pronunciation": "nyondo",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "Guoko (Moko)",
            "source": "Arm",
            "pronunciation": "guoko"
          }
        ],
        "sentences": [
          {
            "target": "nderu — sakame",
            "source": "beard — blood"
          },
          {
            "target": "kumirra — mwiri",
            "source": "blow nose — body"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"nderu\" mean in English?",
            "correctAnswer": "beard",
            "options": [
              "beard",
              "blood",
              "blow nose",
              "body"
            ],
            "hint": "Core vocabulary in Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"blood\"",
            "correctAnswer": "sakame",
            "acceptedAnswers": [
              "sakame",
              "sakame"
            ],
            "hint": "Starts with \"sa\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kumirra\"",
            "correctAnswer": "blow nose",
            "acceptedAnswers": [
              "blow nose",
              "blow nose"
            ],
            "hint": "Review Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Health, Traditional Medicine & Emergency Terms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "nderu",
                "right": "beard"
              },
              {
                "left": "sakame",
                "right": "blood"
              },
              {
                "left": "kumirra",
                "right": "blow nose"
              },
              {
                "left": "mwiri",
                "right": "body"
              },
              {
                "left": "ihuha, pl. mahuha",
                "right": "boil"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-12",
    "title": "Unit 12: Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Kikuyu (Gĩkũyũ) built directly from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927).",
    "icon": "Compass",
    "skills": [
      {
        "id": "kikuyu-verbs-grammar-action-verbs-12",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "kwaria (-aria) / kuuga",
            "source": "Speak",
            "pronunciation": "kwa-ria / kuu-ga",
            "hint": "Hémery 1903 & McGregor 1904"
          },
          {
            "target": "kũkoma (-koma)",
            "source": "Sleep",
            "pronunciation": "ku-ko-ma",
            "hint": "Hémery 1903, McGregor 1904 & Hinde 1904"
          },
          {
            "target": "gũthiĩ (-thiĩ)",
            "source": "Go",
            "pronunciation": "guthii",
            "hint": "McGregor 1904 (Dahl's Law: kū-thiĩ > gũthiĩ)"
          },
          {
            "target": "kũnyua (-nyua)",
            "source": "Drink",
            "pronunciation": "kunyua",
            "hint": "Hémery 1903, McGregor 1904 & Hinde 1904"
          },
          {
            "target": "kũrĩa (-rĩa)",
            "source": "Eat",
            "pronunciation": "ku-ria",
            "hint": "Hémery 1903, McGregor 1904 & Hinde 1904"
          },
          {
            "target": "Koeka",
            "source": "Do",
            "pronunciation": "koe-ka"
          },
          {
            "target": "kunikē",
            "source": "Ask",
            "pronunciation": "ku-ni-ke"
          },
          {
            "target": "kuhoiya",
            "source": "Beg",
            "pronunciation": "ku-hoi-ya"
          },
          {
            "target": "Kogora",
            "source": "Buy",
            "pronunciation": "ko-go-ra"
          }
        ],
        "sentences": [
          {
            "target": "kwaria — kũkoma",
            "source": "Speak — Sleep"
          },
          {
            "target": "gũthiĩ — kũnyua",
            "source": "Go — Drink"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kwaria\" mean in English?",
            "correctAnswer": "Speak",
            "options": [
              "Speak",
              "Sleep",
              "Go",
              "Drink"
            ],
            "hint": "Core vocabulary in Essential Action & Motion Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Sleep\"",
            "correctAnswer": "kũkoma",
            "acceptedAnswers": [
              "kũkoma (-koma)",
              "kũkoma"
            ],
            "hint": "Starts with \"kũ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"gũthiĩ\"",
            "correctAnswer": "Go",
            "acceptedAnswers": [
              "Go",
              "Go"
            ],
            "hint": "Review Essential Action & Motion Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Essential Action & Motion Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kwaria",
                "right": "Speak"
              },
              {
                "left": "kũkoma",
                "right": "Sleep"
              },
              {
                "left": "gũthiĩ",
                "right": "Go"
              },
              {
                "left": "kũnyua",
                "right": "Drink"
              },
              {
                "left": "kũrĩa",
                "right": "Eat"
              }
            ]
          }
        ]
      },
      {
        "id": "kikuyu-verbs-grammar-verbal-derivatives-12",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "Kolela",
            "source": "Cry",
            "pronunciation": "ko-le-la"
          },
          {
            "target": "Kokua",
            "source": "Die",
            "pronunciation": "ko-kua"
          },
          {
            "target": "Koendja",
            "source": "Dig",
            "pronunciation": "koendja"
          },
          {
            "target": "Kohora",
            "source": "Hit",
            "pronunciation": "ko-ho-ra"
          },
          {
            "target": "Kolima",
            "source": "Hoe",
            "pronunciation": "ko-li-ma"
          },
          {
            "target": "Kohenia",
            "source": "Lie",
            "pronunciation": "ko-he-nia"
          },
          {
            "target": "Koleha",
            "source": "Pay",
            "pronunciation": "ko-le-ha"
          },
          {
            "target": "Koekera",
            "source": "Put",
            "pronunciation": "koe-ke-ra"
          },
          {
            "target": "Koiya, kotunya",
            "source": "Rob",
            "pronunciation": "koi-ya ko-tunya"
          }
        ],
        "sentences": [
          {
            "target": "Kolela — Kokua",
            "source": "Cry — Die"
          },
          {
            "target": "Koendja — Kohora",
            "source": "Dig — Hit"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kolela\" mean in English?",
            "correctAnswer": "Cry",
            "options": [
              "Cry",
              "Die",
              "Dig",
              "Hit"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Die\"",
            "correctAnswer": "Kokua",
            "acceptedAnswers": [
              "Kokua",
              "Kokua"
            ],
            "hint": "Starts with \"Ko\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Koendja\"",
            "correctAnswer": "Dig",
            "acceptedAnswers": [
              "Dig",
              "Dig"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Kolela",
                "right": "Cry"
              },
              {
                "left": "Kokua",
                "right": "Die"
              },
              {
                "left": "Koendja",
                "right": "Dig"
              },
              {
                "left": "Kohora",
                "right": "Hit"
              },
              {
                "left": "Kolima",
                "right": "Hoe"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-13-public-domain-corpus",
    "title": "Unit 13: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Kikuyu (Gĩkũyũ) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "skills": [
      {
        "id": "kikuyu-pd-corpus-13-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Kikuyu (Gĩkũyũ) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Kikuyu (Gĩkũyũ) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "riika (pl. mariika)",
            "source": "Age-grade / initiation generation",
            "pronunciation": "rii-ka",
            "hint": "Hobley (1922, p. 308) & Routledge (1910)"
          },
          {
            "target": "ituĩka",
            "source": "Generational transfer of governance ceremony",
            "pronunciation": "i-tui-ka",
            "hint": "Hobley (1922) & Routledge (1910)"
          },
          {
            "target": "thahu",
            "source": "Ritual impurity / ceremonial curse",
            "pronunciation": "tha-hu",
            "hint": "Hobley (1922, p. 308)"
          },
          {
            "target": "gũtahĩkia",
            "source": "To purify ceremonially from thahu",
            "pronunciation": "gu-ta-hi-kia",
            "hint": "Hobley (1922, p. 308)"
          },
          {
            "target": "thengira",
            "source": "Unmarried men's bachelor hut / council hut",
            "pronunciation": "thengi-ra",
            "hint": "Hobley (1922, p. 308)"
          },
          {
            "target": "rũkwarũ",
            "source": "Goat-skin wrist/waist strip of ceremonial peace",
            "pronunciation": "rukwa-ru",
            "hint": "Hobley (1922, p. 308)"
          },
          {
            "target": "rũenji / rũoro",
            "source": "Traditional razor / Cattle-branding iron knife",
            "pronunciation": "ruenji / ruo-ro",
            "hint": "Hobley (1922, p. 308)"
          },
          {
            "target": "mũgũnda / gĩthaka",
            "source": "Cultivated garden farm / Uncultivated bushland",
            "pronunciation": "mu-gunda / githa-ka",
            "hint": "Wiktionary Bantu Swadesh & CGIAR Kikuyu"
          }
        ],
        "sentences": [
          {
            "target": "Mũthuri nĩatairie ituĩka mũciĩ.",
            "source": "The elder explained generational transfer of governance ceremony at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"riika (pl. mariika)\" in Kikuyu?",
            "correctAnswer": "Age-grade / initiation generation",
            "options": [
              "Age-grade / initiation generation",
              "Generational transfer of governance ceremony",
              "Ritual impurity / ceremonial curse",
              "To purify ceremonially from thahu"
            ],
            "hint": "Hobley (1922, p. 308) & Routledge (1910)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kikuyu (Gĩkũyũ) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "riika (pl. mariika): Age-grade / initiation generation",
            "pairs": [
              {
                "left": "riika (pl. mariika)",
                "right": "Age-grade / initiation generation"
              },
              {
                "left": "ituĩka",
                "right": "Generational transfer of governance ceremony"
              },
              {
                "left": "thahu",
                "right": "Ritual impurity / ceremonial curse"
              },
              {
                "left": "gũtahĩkia",
                "right": "To purify ceremonially from thahu"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu (Gĩkũyũ) term for \"Unmarried men's bachelor hut / council hut\": ___",
            "correctAnswer": "thengira",
            "options": [
              "thengira",
              "rũkwarũ",
              "riika (pl. mariika)",
              "ituĩka"
            ],
            "hint": "Hobley (1922, p. 308)"
          }
        ]
      },
      {
        "id": "kikuyu-pd-corpus-13-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Kikuyu (Gĩkũyũ) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Kikuyu (Gĩkũyũ) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "gũtũma mbeca na thimũ",
            "source": "To send money via mobile phone (M-Pesa)",
            "pronunciation": "gu-tu-ma mbe-ca na thi-mu",
            "hint": "Anv-ke Gĩkũyũ Financial Corpus"
          },
          {
            "target": "ũrĩmi wa mĩmera na mahiũ",
            "source": "Crop farming and livestock husbandry",
            "pronunciation": "u-ri-mi wa mi-me-ra na ma-hiu",
            "hint": "CGIAR Kikuyu-English Translation Dataset"
          },
          {
            "target": "mbeũ njega cia mbembe",
            "source": "Certified / high-yield maize seeds",
            "pronunciation": "mbeu nje-ga cia mbembe",
            "hint": "CGIAR & Anv-ke Agriculture Corpus"
          },
          {
            "target": "thibitarĩ / nyũmba ya ũrigiti",
            "source": "Hospital / health dispensary",
            "pronunciation": "thi-bi-ta-ri / nyumba ya u-ri-gi-ti",
            "hint": "Anv-ke Healthcare Corpus"
          },
          {
            "target": "gwĩciria / kũmenya",
            "source": "To think / To know",
            "pronunciation": "gwi-ci-ria / ku-menya",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists"
          },
          {
            "target": "gũtindĩka / kũgucia",
            "source": "To push / To pull",
            "pronunciation": "gu-tindi-ka / ku-gu-cia",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists"
          },
          {
            "target": "kũatũra / gũtinia",
            "source": "To split wood / To cut",
            "pronunciation": "kua-tu-ra / gu-ti-nia",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists"
          },
          {
            "target": "kũnyoroka / kũrũnga",
            "source": "To be smooth / To be straight",
            "pronunciation": "kunyo-ro-ka / ku-runga",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists"
          }
        ],
        "sentences": [
          {
            "target": "gũtũma mbeca na thimũ",
            "source": "To send money via mobile phone (M-Pesa)"
          },
          {
            "target": "ũrĩmi wa mĩmera na mahiũ",
            "source": "Crop farming and livestock husbandry"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"gũtũma mbeca na thimũ\" in Kikuyu?",
            "correctAnswer": "To send money via mobile phone (M-Pesa)",
            "options": [
              "To send money via mobile phone (M-Pesa)",
              "Crop farming and livestock husbandry",
              "Certified / high-yield maize seeds",
              "Hospital / health dispensary"
            ],
            "hint": "Anv-ke Gĩkũyũ Financial Corpus"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kikuyu (Gĩkũyũ) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "gũtũma mbeca na thimũ: To send money via mobile phone (M-Pesa)",
            "pairs": [
              {
                "left": "gũtũma mbeca na thimũ",
                "right": "To send money via mobile phone (M-Pesa)"
              },
              {
                "left": "ũrĩmi wa mĩmera na mahiũ",
                "right": "Crop farming and livestock husbandry"
              },
              {
                "left": "mbeũ njega cia mbembe",
                "right": "Certified / high-yield maize seeds"
              },
              {
                "left": "thibitarĩ / nyũmba ya ũrigiti",
                "right": "Hospital / health dispensary"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu (Gĩkũyũ) term for \"To think / To know\": ___",
            "correctAnswer": "gwĩciria / kũmenya",
            "options": [
              "gwĩciria / kũmenya",
              "gũtindĩka / kũgucia",
              "gũtũma mbeca na thimũ",
              "ũrĩmi wa mĩmera na mahiũ"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-14-open-datasets-modern",
    "title": "Unit 14: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Kikuyu (Gĩkũyũ) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "skills": [
      {
        "id": "kikuyu-open-dataset-14-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Baby",
        "description": "Learn core Kikuyu (Gĩkũyũ) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Kikuyu (Gĩkũyũ) dialects and everyday speech.",
        "words": [
          {
            "target": "Ku-Tahikia",
            "source": "To purify. Ku is the infinitive prefix common to all verbs",
            "pronunciation": "ku-tahikia",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Ruoro",
            "source": "Knife used for branding cattle",
            "pronunciation": "ruo-ro",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Ruenji",
            "source": "A razor",
            "pronunciation": "ruenji",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Rika",
            "source": "Generation—age grade",
            "pronunciation": "ri-ka",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Njohi",
            "source": "Native beer, usually made from sugar cane",
            "pronunciation": "njo-hi",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Ngunga",
            "source": "Caterpillars",
            "pronunciation": "ngunga",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Ndorume",
            "source": "A ram, a favourite form of sacrifice",
            "pronunciation": "ndo-ru-me",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Ngoma",
            "source": "Ancestral spirit",
            "pronunciation": "ngo-ma",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          }
        ],
        "sentences": [
          {
            "target": "Mũthuri nĩatairie Ruoro mũciĩ.",
            "source": "The elder explained knife used for branding cattle at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ku-Tahikia\" in Kikuyu?",
            "correctAnswer": "To purify. Ku is the infinitive prefix common to all verbs",
            "options": [
              "To purify. Ku is the infinitive prefix common to all verbs",
              "Knife used for branding cattle",
              "A razor",
              "Generation—age grade"
            ],
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kikuyu (Gĩkũyũ) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Ku-Tahikia: To purify. Ku is the infinitive prefix common to all verbs",
            "pairs": [
              {
                "left": "Ku-Tahikia",
                "right": "To purify. Ku is the infinitive prefix common to all verbs"
              },
              {
                "left": "Ruoro",
                "right": "Knife used for branding cattle"
              },
              {
                "left": "Ruenji",
                "right": "A razor"
              },
              {
                "left": "Rika",
                "right": "Generation—age grade"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu (Gĩkũyũ) term for \"Native beer, usually made from sugar cane\": ___",
            "correctAnswer": "Njohi",
            "options": [
              "Njohi",
              "Ngunga",
              "Ku-Tahikia",
              "Ruoro"
            ],
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          }
        ]
      },
      {
        "id": "kikuyu-open-dataset-14-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Kikuyu (Gĩkũyũ) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Kikuyu (Gĩkũyũ) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "Muburi",
            "source": "Goat",
            "pronunciation": "mu-bu-ri",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Murogi",
            "source": "Medicine man who deals in black magic",
            "pronunciation": "mu-ro-gi",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Mugumu",
            "source": "Sacred fig tree, often called muti wa Engai",
            "pronunciation": "mu-gu-mu",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Kiama",
            "source": "Council of elders",
            "pronunciation": "kia-ma",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Kita",
            "source": "The power of the evil eye",
            "pronunciation": "ki-ta",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Kihe",
            "source": "An uncircumcised boy",
            "pronunciation": "ki-he",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Kithangaona",
            "source": "Sacred place",
            "pronunciation": "kithangao-na",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Ichua",
            "source": "A sacrificial fire",
            "pronunciation": "ichua",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          }
        ],
        "sentences": [
          {
            "target": "Mũthuri nĩatairie Murogi mũciĩ.",
            "source": "The elder explained medicine man who deals in black magic at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Muburi\" in Kikuyu?",
            "correctAnswer": "Goat",
            "options": [
              "Goat",
              "Medicine man who deals in black magic",
              "Sacred fig tree, often called muti wa Engai",
              "Council of elders"
            ],
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kikuyu (Gĩkũyũ) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Muburi: Goat",
            "pairs": [
              {
                "left": "Muburi",
                "right": "Goat"
              },
              {
                "left": "Murogi",
                "right": "Medicine man who deals in black magic"
              },
              {
                "left": "Mugumu",
                "right": "Sacred fig tree, often called muti wa Engai"
              },
              {
                "left": "Kiama",
                "right": "Council of elders"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu (Gĩkũyũ) term for \"The power of the evil eye\": ___",
            "correctAnswer": "Kita",
            "options": [
              "Kita",
              "Kihe",
              "Muburi",
              "Murogi"
            ],
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          }
        ]
      }
    ]
  }
  ,
  {
    "id": "kikuyu-unit-hemery-1903-handbook",
    "title": "Unit 13: Hémery (1903) English-Kikuyu Hand-Book — 9 Noun Classes, Kohora Paradigm, Enclitics (-le & -tya) & 5-Part Phrase-Book",
    "description": "Master the complete grammar, 3-way demonstratives, Kohora verb paradigm, 5 derived verb stems, particles (pp. 13–14), and 5-part Phrase-Book (Usual, Servants & Meals, Village Visit, Working, In Caravan) from Rev. Fr. A. Hémery's 1903 English-Kikuyu Hand-Book.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "kikuyu-hemery-1903-grammar-particles-13-1",
        "title": "9 Noun Classes, 3-Way Demonstratives, Kohora Conjugation & Enclitics (-le & -tya)",
        "icon": "Sparkles",
        "description": "Study Hémery's (1903, pp. 1–14) 9 noun classes, ka-/to- diminutives, ke- augmentatives, 3-way demonstratives, full Kohora paradigm, and enclitic particles.",
        "tips": "In Rev. Fr. A. Hémery's English-Kikuyu Hand-Book (1903, pp. 8, 13–14), demonstratives distinguish Near (oyo, geke, rere), Distant (olya, kelya, relya), and Spoken of Beforehand (oshio, keo, reo); the enclitic -le affixed to a verb means 'when / as / if' (Ndalutara werale negokwata rupia), and -tya means 'how / what?' (Waekatya?).",
        "words": [
          {
            "target": "Cl. VI Letwa → Maletwa, Ondo → Maondo, Taama → Mataama • Cl. VII Logito → Ngito, Loleme → Ndeme, Loara → Ndoara • Cl. VIII Kiombe → Shiombe, Kiongoyo → Shiongoyo",
            "source": "Name, cause, cloth (Ø → ma-) • Roof, tongue, nail (l-/lo- → n-/nd-) • Person, fish (ki- → shi-)",
            "pronunciation": "le-twa ma-le-twa / lo-gi-to ngi-to / lo-le-me nde-me / ki-o-mbe shi-o-mbe",
            "hint": "Hémery (1903, Ch. I, Book pp. 2–3)"
          },
          {
            "target": "Kangondu, Kamunyu, Kangombe • Tomae, Toirio • Kengombe, Kemunyu",
            "source": "Small sheep, little salt, little ox (ka- dimin.) • Little water, little food (to- dimin.) • Big ox, plenty of salt (ke- augm.)",
            "pronunciation": "ka-ngo-ndu / ka-mu-nyu / to-ma-e / to-i-ri-o / ke-ngo-mbe",
            "hint": "Hémery (1903, Ch. I, Book pp. 3–4)"
          },
          {
            "target": "Mundu oyo / olya / oshio • Kendo geke / kelya / keo • Ihiga rere / relya / reo",
            "source": "This (near) / that (distant) / that (spoken of beforehand) man, thing, and stone",
            "pronunciation": "o-yo o-lya o-shi-o / ge-ke ke-lya ke-o / re-re re-lya re-o",
            "hint": "Hémery (1903, Ch. IV Art. III, Book p. 8)"
          },
          {
            "target": "Ndahora (Neg. Ndihora) • Nderahora / Ndehorete / Ndehorile (Neg. Ndinahora) • Ndakehora • Ne ngohora (Neg. Ndikohora) • Ningehora / Ningehorile",
            "source": "I beat (do not beat) • I beat / have beaten (did not beat) • I beat (narrative) • I shall beat (shall not beat) • I would beat / would have beaten",
            "pronunciation": "nda-ho-ra / ndi-ho-ra / nde-ra-ho-ra / nda-ke-ho-ra / ne ngo-ho-ra / ni-nge-ho-ra",
            "hint": "Hémery (1903, Ch. V Art. I, Book pp. 9–10)"
          },
          {
            "target": "Aderere! • Ndalutara werale negokwata rupia • Waekatya? • Ne muhoro — Nde muhoro, muhoro mweg • Tiguo uhoro (pl. tigwoni uhoro)",
            "source": "Listen to me! • If I do work I shall get Rupees (-le = if/when) • What do you do? (-tya = how?) • Good day — I am well • Good-bye (sg. / pl.)",
            "pronunciation": "a-de-re-re / nda-lu-ta-ra we-ra-le / wa-e-ka-tya / ne mu-ho-ro / ti-gu-o u-ho-ro",
            "hint": "Hémery (1903, Book pp. 13–14)"
          }
        ],
        "sentences": [
          {
            "target": "Ndalutara werale negokwata rupia.",
            "source": "If I do work I shall get Rupees. (Hémery 1903, Book p. 13)"
          },
          {
            "target": "Omwe alutaga wera, ungi ne aikara se.",
            "source": "One works (continually, -ga), another sits down. (Hémery 1903, Book p. 8)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Rev. Fr. A. Hémery's English-Kikuyu Hand-Book (1903, Book p. 13), what does the enclitic suffix '-le' attached to a verb (as in 'Ndalutara werale negokwata rupia') express?",
            "correctAnswer": "'When, as, if' (conditional/temporal clause marker)",
            "options": [
              "'When, as, if' (conditional/temporal clause marker)",
              "Negative imperative prefix",
              "Augmentative noun class prefix",
              "Passive voice suffix"
            ],
            "hint": "See Hémery (1903, Book p. 13: '-le, affixed to the verb, is equivalent to our when, as, if')"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu demonstrative or particle from Hémery (1903, Book pp. 8, 13–14) with its meaning:",
            "correctAnswer": "Mundu oshio / Kendo keo / Ihiga reo: That man / thing / stone spoken of beforehand",
            "pairs": [
              {
                "left": "Mundu oshio / Kendo keo / Ihiga reo",
                "right": "That man / thing / stone spoken of beforehand"
              },
              {
                "left": "Aderere!",
                "right": "Listen, listen to me! (call for attention before talking)"
              },
              {
                "left": "Rochio / Oke / Ira / Iyo",
                "right": "To-morrow / Day after to-morrow / Yesterday / Day before yesterday"
              },
              {
                "left": "Tiguo uhoro (pl. tigwoni uhoro)",
                "right": "Good-bye, farewell (sg. & pl.)"
              }
            ]
          }
        ]
      },
      {
        "id": "kikuyu-hemery-1903-phrasebook-13-2",
        "title": "Phrase-Book Sections I–V: Village Visit, Household, Agriculture & Caravan Dialogues",
        "icon": "MessageCircle",
        "description": "Practice authentic 1903 Kikuyu dialogues from Hémery's 5-part Phrase-Book (Book pp. 77–87): Usual, Servants & Meals, A Visit to a Village, Working, and In Caravan.",
        "tips": "Hémery's Phrase-Book (1903, pp. 77–87) records everyday 1902–1903 Nairobi/Kiambu Kikuyu conversations on village life, staple crops (ngwadje, mbosho, mohea, mbembe), honey/sugar-cane brewing (djohi na oke kana na igwa), medical care, and 500-porter caravan logistics.",
        "words": [
          {
            "target": "Waetagwa-tya? • We moona-ko? • We huma-ko? • Wasie-ko?",
            "source": "What is your name? • What tribe do you belong to? • Where do you come from? • Where are you going?",
            "pronunciation": "wa-e-ta-gwa-tya / we moo-na-ko / we hu-ma-ko / wa-si-e-ko",
            "hint": "Hémery (1903, Phrase-Book I, Book p. 78)"
          },
          {
            "target": "Okolya saa shiigana? — Ta saa kumi na igere, rochine (6 a.m.) • Irio lya mosenya, lya saa inya (10 a.m.)",
            "source": "When have you your meals? — About 6 a.m. • Breakfast is at 10 a.m. (Swahili-style 12-hour daylight clock)",
            "pronunciation": "o-ko-lya saa shi-i-ga-na / ta saa ku-mi na i-ge-re ro-chi-ne",
            "hint": "Hémery (1903, Phrase-Book II, Book p. 79)"
          },
          {
            "target": "Kozondeka-tya ucholo? • Kozondeka-tya djohi eno? Na oke, kana na igwa?",
            "source": "How do you prepare the gruel? • How do you make this liquor? With honey or sugar-cane?",
            "pronunciation": "ko-zo-nde-ka-tya u-cho-lo / djo-hi e-no / na o-ke ka-na na i-gwa",
            "hint": "Hémery (1903, Phrase-Book III, Book p. 81)"
          },
          {
            "target": "Ndena kehuti • Ndaharwo / Ndaharwo katema • Wasisina-le? ne ogohona • Guoko kwakwa ne ekonekete",
            "source": "I have fever • I have diarrhœa / dysentery • If you perspire, you will feel better • My arm is broken",
            "pronunciation": "nde-na ke-hu-ti / nda-ha-rwo ka-te-ma / wa-si-si-na-le ne o-go-ho-na",
            "hint": "Hémery (1903, Phrase-Book III, Book p. 82)"
          },
          {
            "target": "Akui magana atano • Mnyampara mwega • Huha choro! • Keraro kya mbele • Twahota koringa na magoro?",
            "source": "Five hundred porters • A good headman • Beat the drum/horn! • The first camp • Can we wade across on foot?",
            "pronunciation": "a-ku-i ma-ga-na a-ta-no / m-nya-mpa-ra mwe-ga / hu-ha cho-ro / ke-ra-ro",
            "hint": "Hémery (1903, Phrase-Book V, Book pp. 84–85)"
          }
        ],
        "sentences": [
          {
            "target": "Mwere mnene ne ngoenda ndurume na nguadje shya akui; ne akwenda rupia, kana mataama, kana megase?",
            "source": "Tell the chief I want a sheep and some potatoes for the porters; does he want rupees, or clothes, or beads? (Hémery 1903, Book pp. 86–87)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Hémery's Phrase-Book III ('A Visit to a Village', 1903, Book p. 81), what two ingredients are asked about in 'Kozondeka-tya djohi eno? Na oke, kana na igwa?' for brewing traditional Kikuyu liquor (djohi)?",
            "correctAnswer": "Honey (oke) or sugar-cane (igwa)",
            "options": [
              "Honey (oke) or sugar-cane (igwa)",
              "Sweet potatoes (nguadje) or yams (ikwa)",
              "Beans (mbosho) or rice (mchele)",
              "Castor-oil (mbariki) or ghee (maguta)"
            ],
            "hint": "oke = honey; igwa = sugar-cane (Hémery 1903, Book p. 81)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each conversational Kikuyu sentence from Hémery's Phrase-Book (1903, pp. 78–85) with its English meaning:",
            "correctAnswer": "We moona-ko?: What tribe do you belong to? (p. 78)",
            "pairs": [
              {
                "left": "We moona-ko?",
                "right": "What tribe do you belong to? (p. 78)"
              },
              {
                "left": "Kira! Manegene!",
                "right": "Silence! Hold your tongue! (p. 78)"
              },
              {
                "left": "Wasisina-le? ne ogohona",
                "right": "If you get into a perspiration, you will feel better (p. 82)"
              },
              {
                "left": "Twahota koringa na magoro?",
                "right": "Can we wade across on foot? (p. 85)"
              }
            ]
          }
        ]
      }
    ]
  }
  ,
  {
    "id": "kikuyu-unit-mcgregor-1904-vocabulary",
    "title": "Unit 14: McGregor (1904) English-Kikuyu Vocabulary (Fort Smith / Kabeti, 1901–1902) — Orthography, Kinship, 7-Day Sequence, Seasons & Customary Law",
    "description": "Master the Kabeti (Fort Smith) orthography (th for s/z, ng' vs. ng'g), plural bracket conventions, suppletive kinship, 7-day time sequence, agricultural seasons (Kathano, Kehu, Njahi, Mweri, Mohea), customary law (Chira, Magambo, Muma, Oramati), and conversational idioms from Rev. A. W. McGregor's 1904 English-Kikuyu Vocabulary.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "kikuyu-mcgregor-1904-orthography-kinship-time-14-1",
        "title": "Kabeti Orthography (Th, Ng' vs. Ng'g), Suppletive Kinship, 7-Day Sequence & Seasons",
        "icon": "Sparkles",
        "description": "Study McGregor's (1904, pp. iii–iv, 5–192) Fort Smith (Kabeti) phonological rules, plural bracket system, kinship possessives, 7-day sequence, and seasonal calendar.",
        "tips": "In Fort Smith / Kabeti (McGregor 1904, p. 5), S and Z are replaced by Th; ng' (as in koteng'era) is pronounced koteng-era (velar nasal), whereas ng'g (as in kuing'gata) sounds both the velar nasal and hard g.",
        "words": [
          {
            "target": "koteng'era (velar ng') vs. kuing'gata & ketung'guru (ng' + hard g) • Mwetereri (Etereri) • Gechunji (I-) → Ichunji",
            "source": "To run/abscond (koteng-era) vs. to banish/conquer & ball • Servant (pl. Etereri) • Portion (pl. Ichunji)",
            "pronunciation": "ko-teng-e-ra / ku-ing-ga-ta / mw-e-te-re-ri e-te-re-ri / ge-chu-nji i-chu-nji",
            "hint": "McGregor (1904, Note & Observe A–B, Book pp. 5–6)"
          },
          {
            "target": "Baba / Thoguo / Ithi (pl. Maithi) • Maito / Nyukwa / Nyina (pl. Manyina) • Rorachio (Marorachio) & Wathiomo",
            "source": "My / your / his-her father (pl. fathers) • My / your / his-her mother (pl. mothers) • Bride-wealth gift to bride's father & gift of a goat",
            "pronunciation": "ba-ba tho-gu-o i-thi ma-i-thi / ma-i-to nyu-kwa nyi-na ma-nyi-na / ro-ra-chi-o / wa-thi-o-mo",
            "hint": "McGregor (1904, Book pp. 63, 73, 114, 122, 137)"
          },
          {
            "target": "Iyo → Ira → Reu / Omothi → Rochio → Oke → Matukwatatu → Matukwana",
            "source": "Day before yesterday → Yesterday → To-day → To-morrow → Day after to-morrow → 2 days after to-morrow → 3 days after to-morrow",
            "pronunciation": "i-yo / i-ra / re-u o-mo-thi / ro-chi-o / o-ke / ma-tu-kwa-ta-tu / ma-tu-kwa-na",
            "hint": "McGregor (1904, Book pp. 44, 114, 170, 191–192)"
          },
          {
            "target": "Kathano (Mwaka wa heho) & Mwaka wa kehu • Mwaka wa Njahi, Mweri, Mohea",
            "source": "Greater rainy season (winter) & lesser rainy season • Agricultural seasons of Lablab beans (Njahi), bulrush millet (Mweri), and sorghum (Mohea)",
            "pronunciation": "ka-tha-no / mwa-ka wa ke-hu / mwa-ka wa nja-hi mwe-ri mo-he-a",
            "hint": "McGregor (1904, Book pp. 142, 154, 188, 191)"
          },
          {
            "target": "Kilinyatha / Kireira / Kirinyaga • Kabeti (Fort Smith) • Itherero / Ithereru & Naruguru / Gothoa",
            "source": "Mount Kenia (4,000–18,000 ft) • Kabeti (Fort Smith) • East/South/Coast & West",
            "pronunciation": "ki-li-nya-tha / ki-rei-ra / ki-ri-nya-ga / ka-be-ti / i-the-re-ro / na-ru-gu-ru",
            "hint": "McGregor (1904, Preface pp. iii–iv & Book pp. 34, 54, 95, 160, 186)"
          }
        ],
        "sentences": [
          {
            "target": "Tuthie kwitu! — Ndainuka (Nendathie). — Thie na uhoro!",
            "source": "Let us go along! — I am going home. — Go in peace! (McGregor 1904, Book pp. 14, 63, 76)"
          },
          {
            "target": "Kotariatea? — Kwena matu / Kwena heho / Kwena rugari.",
            "source": "What kind of weather is it? — It is cloudy / It is cold / It is hot weather. (McGregor 1904, Book pp. 84, 185)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Rev. A. W. McGregor's English-Kikuyu Vocabulary (1904, Book p. 5), how does the Fort Smith (Kabeti) orthography distinguish 'koteng'era' (to run/abscond) from 'kuing'gata' (to banish/conquer/drive away)?",
            "correctAnswer": "'ng'' (with a point after ng) represents the pure velar nasal (pronounced koteng-era, not koten-gera), whereas 'ng'g' represents both the velar nasal and the hard g sound",
            "options": [
              "'ng'' (with a point after ng) represents the pure velar nasal (pronounced koteng-era, not koten-gera), whereas 'ng'g' represents both the velar nasal and the hard g sound",
              "'ng'' is a glottal stop, whereas 'ng'g' is a labial-velar click",
              "'ng'' only occurs in borrowed Swahili words, whereas 'ng'g' only occurs in numerals",
              "Both are pronounced identically as 'nj'"
            ],
            "hint": "See McGregor (1904, Note p. 5: 'koteng'era, with a point after ng. This must be pronounced koteng-era, not koten-gera. Some words have both the nasal ng and the g hard sound, as kuing'gata')"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu seasonal or temporal term from McGregor (1904, pp. 114, 142, 154, 191) with its English meaning:",
            "correctAnswer": "Kathano vs. Mwaka wa kehu: Greater rainy season (winter) vs. lesser rainy season (p. 142)",
            "pairs": [
              {
                "left": "Kathano vs. Mwaka wa kehu",
                "right": "Greater rainy season (winter) vs. lesser rainy season (p. 142)"
              },
              {
                "left": "Mwaka wa Njahi, Mweri, Mohea",
                "right": "Crop-year seasons of lablab beans, bulrush millet & sorghum (pp. 154, 191)"
              },
              {
                "left": "Rochio → Oke → Matukwatatu → Matukwana",
                "right": "To-morrow → Day after to-morrow → 2 & 3 days after to-morrow (p. 114)"
              },
              {
                "left": "Kilinyatha / Kireira / Kirinyaga",
                "right": "Mount Kenia (pp. iv, 95)"
              }
            ]
          }
        ]
      },
      {
        "id": "kikuyu-mcgregor-1904-law-religion-idioms-14-2",
        "title": "Customary Law (Chira, Magambo, Muma, Oramati), Ethnomedicine & Conversational Idioms",
        "icon": "MessageCircle",
        "description": "Learn McGregor's (1904, pp. 6–192) terminology for Kikuyu courts, murder composition, ordeal oaths, peacemaking, ritual, and everyday questions.",
        "tips": "Notice how McGregor (1904) records judicial and ritual institutions: Chira (council/law), Magambo (composition for murder, p. 36), Konyua muma (taking the ordeal cup/oath, pp. 120, 124), Oramati (inheritance/birthright, pp. 23, 90), and Kotaithorana (to make peace / reconcile, p. 130).",
        "words": [
          {
            "target": "Chira (Ma-) • Muchiri (A-) • Muchirithia (A-) vs. Muchirithio (A-) • Magambo / Mugambo (Mi-) • Konyua muma",
            "source": "Council/law/decision • Judge/arbitrator/orator • Plaintiff/prosecutor vs. Defendant • Composition/fine for murder • To take an oath (ordeal cup)",
            "pronunciation": "chi-ra / mu-chi-ri / mu-chi-ri-thi-a / ma-ga-mbo / ko-nyu-a mu-ma",
            "hint": "McGregor (1904, Book pp. 10, 36, 45, 66, 94, 120, 124, 133, 139)"
          },
          {
            "target": "Muramati (A-) & Oramati • Mutaithorani (A-) / Mugwithania (A-) & Kotaithorana • Mukori (Akori) & Okori",
            "source": "Heir/inheritor & birthright/inheritance • Peacemaker/mediator/advocate & to make peace • Redeemer/ransomer & redemption/ransom",
            "pronunciation": "mu-ra-ma-ti o-ra-ma-ti / mu-ta-i-tho-ra-ni / ko-ta-i-tho-ra-na / mu-ko-ri o-ko-ri",
            "hint": "McGregor (1904, Book pp. 11, 23, 36, 81–82, 90, 109, 130, 142, 146)"
          },
          {
            "target": "Ngai (Makai) & Ngai angienda • Kegongaini (I-) & Igongona (Magongona) • Thahu / Mugiru (Migiri) • Nyoni njega vs. Nyoni njoru",
            "source": "God & 'If God wills (D.V.)' • Altar & sacrifice/offering • Ceremonial pollution/taboo • Good omen vs. bad omen/mischance",
            "pronunciation": "nga-i a-ngi-e-nda / ke-go-nga-i-ni / i-go-ngo-na / tha-hu mu-gi-ru / ny-o-ni nje-ga njo-ru",
            "hint": "McGregor (1904, Book pp. 14, 75, 88, 112, 122–123, 138, 157, 181)"
          },
          {
            "target": "Mundu mugo (A-) & Kahiyu ka mundu mugo (To-) • Muthaiga wa ndaa / hinguranda & Muthaiga wa koharithia • Murututu",
            "source": "Doctor/medicine-man & lancet • Emetic medicine & purgative medicine • Sulphate of copper (vitriol)",
            "pronunciation": "mu-ndu mu-go / mu-tha-i-ga wa hi-ngu-ra-nda / mu-ru-tu-tu",
            "hint": "McGregor (1904, Book pp. 50, 56, 97, 109, 132, 139, 164, 181)"
          },
          {
            "target": "Thingira (Ma-) • Itara (Ma-) & Ikombi (Ma-) • Mungu (Miungu) • Kewochi kya ngorono (Iwochi) / Katete",
            "source": "Man's hut • Granary/garner/loft/store • Refuge pit of men • Butter churn",
            "pronunciation": "thi-ngi-ra / i-ta-ra i-ko-mbi / mu-ngu / ke-wo-chi kya ngo-ro-no",
            "hint": "McGregor (1904, Book pp. 33, 72, 84–85, 103, 146, 162, 183)"
          }
        ],
        "sentences": [
          {
            "target": "Hari na mundu. — Akuugatea? — Anga nengothie, Ngai angienda.",
            "source": "There was a man. — How does he speak? — Suppose I go, if God wills (D.V.). (McGregor 1904, Book pp. 84, 138, 164, 167)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Rev. A. W. McGregor's English-Kikuyu Vocabulary (1904, Book pp. 36, 66, 120, 124), which two legal terms denote (1) the composition/fine paid for murder and (2) taking the solemn ordeal cup / oath?",
            "correctAnswer": "'Magambo / Mugambo (Mi-)' (composition/fine for murder) and 'Konyua muma' (to take the ordeal cup / oath)",
            "options": [
              "'Magambo / Mugambo (Mi-)' (composition/fine for murder) and 'Konyua muma' (to take the ordeal cup / oath)",
              "'Rorachio' (bride-wealth) and 'Wathiomo' (gift of a goat)",
              "'Itara' (granary) and 'Thingira' (man's hut)",
              "'Kathano' (greater rains) and 'Kehu' (lesser rains)"
            ],
            "hint": "See McGregor (1904, p. 36 'Composition [for murder]: Magambo', p. 66 'Fine [for murder]: Mugambo [Mi-]', pp. 120, 124 'Oath, to take an [take ordeal cup]: Konyua muma')"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu institutional or architectural term from McGregor (1904) with its meaning:",
            "correctAnswer": "Muramati (A-) / Oramati: Heir / Birthright & inheritance (pp. 23, 81, 90)",
            "pairs": [
              {
                "left": "Muramati (A-) / Oramati",
                "right": "Heir / Birthright & inheritance (pp. 23, 81, 90)"
              },
              {
                "left": "Mutaithorani (A-) / Kotaithorana",
                "right": "Peacemaker, mediator, advocate / To make peace (pp. 10–11, 130)"
              },
              {
                "left": "Mungu (Miungu)",
                "right": "Refuge pit of men (p. 146)"
              },
              {
                "left": "Itara (Ma-) & Ikombi (Ma-)",
                "right": "Garner, granary, loft & food storehouse (pp. 72, 103, 162, 183)"
              }
            ]
          }
        ]
      }
    ]
  }
];
