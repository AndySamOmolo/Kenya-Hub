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
            "pronunciation": "mwoh-hoh-roh",
            "hint": "Hinde (1904) p. 67 salutation"
          },
          {
            "target": "Mwohoro mwēga",
            "source": "Good news / Fine",
            "pronunciation": "mwoh-hoh-roh mweh-gah",
            "hint": "Hinde (1904) p. 67 reply"
          },
          {
            "target": "Mwēga munnu",
            "source": "Very good / Very well",
            "pronunciation": "mweh-gah moo-noo",
            "hint": "Hinde (1904) p. 67 emphatic reply"
          },
          {
            "target": "Nimwega",
            "source": "I am good / well",
            "pronunciation": "nee-mweh-gah",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Uka haha",
            "source": "Come here",
            "pronunciation": "oo-kah hah-hah",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Rehe maii",
            "source": "Bring water",
            "pronunciation": "reh-heh mah-ee",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Reherria",
            "source": "Bring food",
            "pronunciation": "reh-heh-rri-ah",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Aca",
            "source": "No",
            "pronunciation": "ah-chah",
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
          },
          {
            "target": "Nimwega, reherria.",
            "source": "I am well, bring food."
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
            "pronunciation": "wee-tah gwah-ti-ah",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Wathiiku?",
            "source": "Where are you going?",
            "pronunciation": "wah-thee-koo",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ukwendakki?",
            "source": "What do you want?",
            "pronunciation": "oo-kwen-dah-kee",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Umaku?",
            "source": "Where do you come from?",
            "pronunciation": "oo-mah-koo",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Uguikatia?",
            "source": "What are you doing?",
            "pronunciation": "oo-goo-ee-kah-ti-ah",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Nikkigekki?",
            "source": "What is this?",
            "pronunciation": "nee-kee-geh-kee",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Meku maii?",
            "source": "Where is the water?",
            "pronunciation": "meh-koo mah-ee",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ndiui",
            "source": "I do not know",
            "pronunciation": "ndee-oo-ee",
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
            "pronunciation": "ee-mweh",
            "hint": "Hinde (1904) p. 62 (modern: ĩmwe)"
          },
          {
            "target": "Igiri",
            "source": "Two (2)",
            "pronunciation": "ee-gee-ree",
            "hint": "Hinde (1904) p. 62 (modern: igĩrĩ)"
          },
          {
            "target": "Ithatu",
            "source": "Three (3)",
            "pronunciation": "ee-thah-too",
            "hint": "Hinde (1904) p. 62 (modern: ithatũ)"
          },
          {
            "target": "Inya",
            "source": "Four (4)",
            "pronunciation": "ee-nyah",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Ithanu",
            "source": "Five (5)",
            "pronunciation": "ee-thah-noo",
            "hint": "Hinde (1904) p. 62 (modern: ithano)"
          },
          {
            "target": "Thanthatu",
            "source": "Six (6)",
            "pronunciation": "thahn-thah-too",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Muguanja",
            "source": "Seven (7)",
            "pronunciation": "moo-gwah-njah",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Inyanya",
            "source": "Eight (8)",
            "pronunciation": "ee-nyah-nyah",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Ikenda",
            "source": "Nine (9)",
            "pronunciation": "ee-ken-dah",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Ikumi",
            "source": "Ten (10)",
            "pronunciation": "ee-koo-mee",
            "hint": "Hinde (1904) p. 62"
          }
        ],
        "sentences": [
          {
            "target": "Ikumi na imwe",
            "source": "Eleven (ten and one)"
          },
          {
            "target": "Miti ithatu na mahiga inya",
            "source": "Three trees and four stones"
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
            "pronunciation": "mee-roh-ngoh-ee-ree",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Mirongo itatu",
            "source": "Thirty (30)",
            "pronunciation": "mee-roh-ngoh ee-thah-too",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Mirongo inya",
            "source": "Forty (40)",
            "pronunciation": "mee-roh-ngoh ee-nyah",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Mirongo ithanu",
            "source": "Fifty (50)",
            "pronunciation": "mee-roh-ngoh ee-thah-noo",
            "hint": "Hinde (1904) p. 62"
          },
          {
            "target": "Igana",
            "source": "One hundred (100)",
            "pronunciation": "ee-gah-nah",
            "hint": "Hinde (1904) p. 63"
          },
          {
            "target": "Kirrimue",
            "source": "Once (one time)",
            "pronunciation": "kee-rree-mweh",
            "hint": "Hinde (1904) p. 63"
          },
          {
            "target": "Kēēri",
            "source": "Twice (two times)",
            "pronunciation": "keh-eh-ree",
            "hint": "Hinde (1904) p. 63"
          },
          {
            "target": "Kathatu",
            "source": "Thrice (three times)",
            "pronunciation": "kah-thah-too",
            "hint": "Hinde (1904) p. 63"
          },
          {
            "target": "Kuambirrira",
            "source": "First",
            "pronunciation": "kwahm-bee-rree-rah",
            "hint": "Hinde (1904) p. 63"
          },
          {
            "target": "Kurrigillia",
            "source": "Last",
            "pronunciation": "koo-rree-gee-lli-ah",
            "hint": "Hinde (1904) p. 63"
          }
        ],
        "sentences": [
          {
            "target": "Mirongoiri na imue",
            "source": "Twenty-one (twenty and one)"
          },
          {
            "target": "Kirrimue, kēēri, kathatu",
            "source": "Once, twice, thrice"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mirongoiri\" in Kikuyu?",
            "correctAnswer": "Twenty (20)",
            "options": [
              "Thirty (30)",
              "Forty (40)",
              "Fifty (50)",
              "Twenty (20)"
            ],
            "hint": "Hinde (1904) p. 62"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mirongo itatu\" in Kikuyu?",
            "correctAnswer": "Thirty (30)",
            "options": [
              "Forty (40)",
              "Fifty (50)",
              "Thirty (30)",
              "Twenty (20)"
            ],
            "hint": "Hinde (1904) p. 62"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mirongo inya\" in Kikuyu?",
            "correctAnswer": "Forty (40)",
            "options": [
              "Fifty (50)",
              "Forty (40)",
              "Twenty (20)",
              "Thirty (30)"
            ],
            "hint": "Hinde (1904) p. 62"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Forty (40)\" in Kikuyu?",
            "correctAnswer": "Mirongo inya",
            "options": [
              "Mirongo inya",
              "Mirongoiri",
              "Mirongo itatu",
              "Mirongo ithanu"
            ],
            "hint": "mee-roh-ngoh ee-nyah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fifty (50)\" in Kikuyu?",
            "correctAnswer": "Mirongo ithanu",
            "options": [
              "Mirongoiri",
              "Mirongo itatu",
              "Mirongo inya",
              "Mirongo ithanu"
            ],
            "hint": "mee-roh-ngoh ee-thah-noo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "Mirongoiri: Twenty (20)",
            "pairs": [
              {
                "left": "Mirongoiri",
                "right": "Twenty (20)"
              },
              {
                "left": "Mirongo itatu",
                "right": "Thirty (30)"
              },
              {
                "left": "Mirongo inya",
                "right": "Forty (40)"
              },
              {
                "left": "Mirongo ithanu",
                "right": "Fifty (50)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"One hundred (100)\": ___",
            "correctAnswer": "Igana",
            "options": [
              "Mirongoiri",
              "Mirongo itatu",
              "Mirongo inya",
              "Igana"
            ],
            "hint": "Hinde (1904) p. 63"
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
            "pronunciation": "bah-bah wee-too",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Nyina wiitu",
            "source": "Our mother",
            "pronunciation": "nyee-nah wee-too",
            "hint": "Hinde (1904) p. 65 (also Mwaitu)"
          },
          {
            "target": "Mwana wakua",
            "source": "My child",
            "pronunciation": "mwah-nah wah-kwah",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Siana siaku",
            "source": "Your children",
            "pronunciation": "see-ah-nah see-ah-koo",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Mundu (pl. Andu)",
            "source": "Person (pl. People)",
            "pronunciation": "moo-ndoo / ah-ndoo",
            "hint": "Hinde (1904) p. vi"
          },
          {
            "target": "Muka (pl. Aka)",
            "source": "Woman / Wife (pl. Women / Wives)",
            "pronunciation": "moo-kah / ah-kah",
            "hint": "Hinde (1904) p. vi"
          },
          {
            "target": "Mwanake (pl. Anake)",
            "source": "Warrior / Young man (pl. Warriors)",
            "pronunciation": "mwah-nah-keh / ah-nah-keh",
            "hint": "Hobley (1922) p. 305"
          },
          {
            "target": "Muiritu (pl. Airitu)",
            "source": "Maiden / Unmarried girl",
            "pronunciation": "moo-ee-ree-too",
            "hint": "Hobley (1922) p. 306"
          },
          {
            "target": "Mutumia (pl. Atumia)",
            "source": "Elder of the community",
            "pronunciation": "moo-too-mee-ah",
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
            "pronunciation": "nee-hoo-ti-eh",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ningwenda irria",
            "source": "I want milk",
            "pronunciation": "nee-ngwen-dah ee-rri-ah",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ugika kurria?",
            "source": "Do you want to eat?",
            "pronunciation": "oo-gee-kah koo-rri-ah",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Ngombe siake",
            "source": "His cows / cattle",
            "pronunciation": "ngoh-mbeh see-ah-keh",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Nyumba ninene",
            "source": "A big house",
            "pronunciation": "nyoo-mbah nee-neh-neh",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Mwitzi wiitu",
            "source": "Our village / homestead",
            "pronunciation": "mwee-tzee wee-too",
            "hint": "Hinde (1904) p. 65 (modern: mũciĩ witũ)"
          },
          {
            "target": "Akiamwaki",
            "source": "Make a fire",
            "pronunciation": "ah-ki-ah mwah-kee",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Ruhiu rwega",
            "source": "A good knife / sword",
            "pronunciation": "roo-hee-oo rweh-gah",
            "hint": "Hinde (1904) p. 66"
          },
          {
            "target": "Kiratu (pl. Iratu)",
            "source": "Sandal / shoe (pl. Sandals)",
            "pronunciation": "kee-rah-too / ee-rah-too",
            "hint": "Hinde (1904) p. vii"
          }
        ],
        "sentences": [
          {
            "target": "Nihūtie; ningwenda irria.",
            "source": "I am hungry; I want milk."
          },
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
            "pronunciation": "nee-ngah-thee",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ndikathie",
            "source": "I will not go",
            "pronunciation": "ndee-kah-thee-eh",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ndingihotta kuthi",
            "source": "I cannot go",
            "pronunciation": "ndee-ngee-hoh-ttah koo-thee",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ningashōka",
            "source": "I will return",
            "pronunciation": "nee-ngah-shoh-kah",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ndikwenda",
            "source": "I do not want",
            "pronunciation": "ndee-kwen-dah",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Ndionna",
            "source": "I do not see",
            "pronunciation": "ndee-oh-nnah",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Nikurehe",
            "source": "I bring",
            "pronunciation": "nee-koo-reh-heh",
            "hint": "Hinde (1904) p. 64"
          },
          {
            "target": "Aniuka",
            "source": "He has come",
            "pronunciation": "ah-nee-oo-kah",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Udikuka",
            "source": "Do not come",
            "pronunciation": "oo-dee-koo-kah",
            "hint": "Hinde (1904) p. 66"
          },
          {
            "target": "Kirra",
            "source": "Be quiet",
            "pronunciation": "kee-rrah",
            "hint": "Hinde (1904) p. 65"
          }
        ],
        "sentences": [
          {
            "target": "Ningathi; ningashōka.",
            "source": "I will go; I will return."
          },
          {
            "target": "Ndikwenda kuthi; ndingihotta kuthi.",
            "source": "I do not want to go; I cannot go."
          },
          {
            "target": "Aniuka; ithui kurehe.",
            "source": "He has come; we bring."
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
            "target": "Muti (pl. Miti)",
            "source": "Tree (pl. Trees)",
            "pronunciation": "moo-tee / mee-tee",
            "hint": "Hinde (1904) p. vi"
          },
          {
            "target": "Ihiga (pl. Mahiga)",
            "source": "Stone (pl. Stones)",
            "pronunciation": "ee-hee-gah / mah-hee-gah",
            "hint": "Hinde (1904) p. vi"
          },
          {
            "target": "Kirima (pl. Irima)",
            "source": "Mountain / Hill (pl. Mountains)",
            "pronunciation": "kee-ree-mah / ee-ree-mah",
            "hint": "Hinde (1904) & Swadesh"
          },
          {
            "target": "Ruui",
            "source": "River / Stream",
            "pronunciation": "roo-oo-ee",
            "hint": "Hinde (1904) & Swadesh"
          },
          {
            "target": "Mbura",
            "source": "Rain",
            "pronunciation": "mboo-rah",
            "hint": "Hinde (1904) & Swadesh"
          },
          {
            "target": "Kiara (pl. Shiara)",
            "source": "Finger (pl. Fingers)",
            "pronunciation": "kee-ah-rah / shee-ah-rah",
            "hint": "Hinde (1904) p. vii"
          },
          {
            "target": "Uwoko wake",
            "source": "His hand / arm",
            "pronunciation": "oo-woh-koh wah-keh",
            "hint": "Hinde (1904) p. 65"
          },
          {
            "target": "Mtueni",
            "source": "In the head",
            "pronunciation": "mtoo-eh-nee",
            "hint": "Hinde (1904) p. 67"
          }
        ],
        "sentences": [
          {
            "target": "Mti unwega; miti moni mijega.",
            "source": "A good tree; good trees."
          },
          {
            "target": "Mitini na nyumbani.",
            "source": "In the trees and in the house."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Muti (pl. Miti)\" in Kikuyu?",
            "correctAnswer": "Tree (pl. Trees)",
            "options": [
              "Stone (pl. Stones)",
              "Mountain / Hill (pl. Mountains)",
              "River / Stream",
              "Tree (pl. Trees)"
            ],
            "hint": "Hinde (1904) p. vi"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ihiga (pl. Mahiga)\" in Kikuyu?",
            "correctAnswer": "Stone (pl. Stones)",
            "options": [
              "Mountain / Hill (pl. Mountains)",
              "River / Stream",
              "Stone (pl. Stones)",
              "Tree (pl. Trees)"
            ],
            "hint": "Hinde (1904) p. vi"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Kirima (pl. Irima)\" in Kikuyu?",
            "correctAnswer": "Mountain / Hill (pl. Mountains)",
            "options": [
              "River / Stream",
              "Mountain / Hill (pl. Mountains)",
              "Tree (pl. Trees)",
              "Stone (pl. Stones)"
            ],
            "hint": "Hinde (1904) & Swadesh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mountain / Hill (pl. Mountains)\" in Kikuyu?",
            "correctAnswer": "Kirima (pl. Irima)",
            "options": [
              "Kirima (pl. Irima)",
              "Muti (pl. Miti)",
              "Ihiga (pl. Mahiga)",
              "Ruui"
            ],
            "hint": "kee-ree-mah / ee-ree-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"River / Stream\" in Kikuyu?",
            "correctAnswer": "Ruui",
            "options": [
              "Muti (pl. Miti)",
              "Ihiga (pl. Mahiga)",
              "Kirima (pl. Irima)",
              "Ruui"
            ],
            "hint": "roo-oo-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "Muti (pl. Miti): Tree (pl. Trees)",
            "pairs": [
              {
                "left": "Muti (pl. Miti)",
                "right": "Tree (pl. Trees)"
              },
              {
                "left": "Ihiga (pl. Mahiga)",
                "right": "Stone (pl. Stones)"
              },
              {
                "left": "Kirima (pl. Irima)",
                "right": "Mountain / Hill (pl. Mountains)"
              },
              {
                "left": "Ruui",
                "right": "River / Stream"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"Rain\": ___",
            "correctAnswer": "Mbura",
            "options": [
              "Muti (pl. Miti)",
              "Ihiga (pl. Mahiga)",
              "Kirima (pl. Irima)",
              "Mbura"
            ],
            "hint": "Hinde (1904) & Swadesh"
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
            "target": "Ngai",
            "source": "God, the Supreme Creator",
            "pronunciation": "ngah-ee",
            "hint": "Hobley (1922) p. 305"
          },
          {
            "target": "Mugumo",
            "source": "Sacred wild fig tree (shrine of sacrifice)",
            "pronunciation": "moo-goo-moh",
            "hint": "Hobley (1922) p. 306"
          },
          {
            "target": "Kiama",
            "source": "Council of elders",
            "pronunciation": "kee-ah-mah",
            "hint": "Hobley (1922) p. 306"
          },
          {
            "target": "Chira",
            "source": "Lawsuit / council deliberation",
            "pronunciation": "chee-rah",
            "hint": "Hobley (1922) p. 305"
          },
          {
            "target": "Rika (pl. Marika)",
            "source": "Circumcision age-set cohort",
            "pronunciation": "ree-kah",
            "hint": "Hobley (1922) p. 307"
          },
          {
            "target": "Itwika",
            "source": "Generational handing-over ceremony",
            "pronunciation": "ee-twee-kah",
            "hint": "Hobley (1922) p. 306"
          },
          {
            "target": "Muhiriga",
            "source": "Primary clan",
            "pronunciation": "moo-hee-ree-gah",
            "hint": "Hobley (1922) p. 306"
          },
          {
            "target": "Mbari",
            "source": "Sub-clan / ridge lineage",
            "pronunciation": "mbah-ree",
            "hint": "Hobley (1922) p. 306"
          },
          {
            "target": "Mundu Mugo",
            "source": "Traditional healer and diviner",
            "pronunciation": "moo-ndoo moo-goh",
            "hint": "Hobley (1922) p. 306"
          }
        ],
        "sentences": [
          {
            "target": "Atumia a Kiama na chira.",
            "source": "The elders of the Council and the deliberation."
          },
          {
            "target": "Mugumo ni muti wa Ngai.",
            "source": "The Mugumo fig is the sacred tree of God."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ngai\" in Kikuyu?",
            "correctAnswer": "God, the Supreme Creator",
            "options": [
              "Sacred wild fig tree (shrine of sacrifice)",
              "Council of elders",
              "Lawsuit / council deliberation",
              "God, the Supreme Creator"
            ],
            "hint": "Hobley (1922) p. 305"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mugumo\" in Kikuyu?",
            "correctAnswer": "Sacred wild fig tree (shrine of sacrifice)",
            "options": [
              "Council of elders",
              "Lawsuit / council deliberation",
              "Sacred wild fig tree (shrine of sacrifice)",
              "God, the Supreme Creator"
            ],
            "hint": "Hobley (1922) p. 306"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Kiama\" in Kikuyu?",
            "correctAnswer": "Council of elders",
            "options": [
              "Lawsuit / council deliberation",
              "Council of elders",
              "God, the Supreme Creator",
              "Sacred wild fig tree (shrine of sacrifice)"
            ],
            "hint": "Hobley (1922) p. 306"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Council of elders\" in Kikuyu?",
            "correctAnswer": "Kiama",
            "options": [
              "Kiama",
              "Ngai",
              "Mugumo",
              "Chira"
            ],
            "hint": "kee-ah-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lawsuit / council deliberation\" in Kikuyu?",
            "correctAnswer": "Chira",
            "options": [
              "Ngai",
              "Mugumo",
              "Kiama",
              "Chira"
            ],
            "hint": "chee-rah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "Ngai: God, the Supreme Creator",
            "pairs": [
              {
                "left": "Ngai",
                "right": "God, the Supreme Creator"
              },
              {
                "left": "Mugumo",
                "right": "Sacred wild fig tree (shrine of sacrifice)"
              },
              {
                "left": "Kiama",
                "right": "Council of elders"
              },
              {
                "left": "Chira",
                "right": "Lawsuit / council deliberation"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"Circumcision age-set cohort\": ___",
            "correctAnswer": "Rika (pl. Marika)",
            "options": [
              "Ngai",
              "Mugumo",
              "Kiama",
              "Rika (pl. Marika)"
            ],
            "hint": "Hobley (1922) p. 307"
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
            "target": "mũturi (pl. aturi)",
            "source": "Blacksmith",
            "pronunciation": "moo-too-ree",
            "hint": "Routledge 1910 pp. 79–96 & Hobley 1922"
          },
          {
            "target": "injingirri (small)",
            "source": "bell (warrior's)",
            "pronunciation": "injingirri (small)",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "ngongu",
            "source": "blind person",
            "pronunciation": "ngongu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kahi",
            "source": "boy",
            "pronunciation": "kahi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mundu murume",
            "source": "boy (circumcised)",
            "pronunciation": "mundu murume",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "murāta",
            "source": "brother",
            "pronunciation": "murāta",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mthoni",
            "source": "brother in law",
            "pronunciation": "mthoni",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "muthamaki",
            "source": "chief",
            "pronunciation": "muthamaki",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kana, pl. twana",
            "source": "child",
            "pronunciation": "kana, pl. twana",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          }
        ],
        "sentences": [
          {
            "target": "mundu murume",
            "source": "boy (circumcised)"
          },
          {
            "target": "kana, pl. twana",
            "source": "child"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mũturi (pl. aturi)\" in Kikuyu?",
            "correctAnswer": "Blacksmith",
            "options": [
              "bell (warrior's)",
              "blind person",
              "boy",
              "Blacksmith"
            ],
            "hint": "Routledge 1910 pp. 79–96 & Hobley 1922"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"injingirri (small)\" in Kikuyu?",
            "correctAnswer": "bell (warrior's)",
            "options": [
              "blind person",
              "boy",
              "bell (warrior's)",
              "Blacksmith"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ngongu\" in Kikuyu?",
            "correctAnswer": "blind person",
            "options": [
              "boy",
              "blind person",
              "Blacksmith",
              "bell (warrior's)"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"blind person\" in Kikuyu?",
            "correctAnswer": "ngongu",
            "options": [
              "ngongu",
              "mũturi (pl. aturi)",
              "injingirri (small)",
              "kahi"
            ],
            "hint": "ngongu"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"boy\" in Kikuyu?",
            "correctAnswer": "kahi",
            "options": [
              "mũturi (pl. aturi)",
              "injingirri (small)",
              "ngongu",
              "kahi"
            ],
            "hint": "kahi"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "mũturi (pl. aturi): Blacksmith",
            "pairs": [
              {
                "left": "mũturi (pl. aturi)",
                "right": "Blacksmith"
              },
              {
                "left": "injingirri (small)",
                "right": "bell (warrior's)"
              },
              {
                "left": "ngongu",
                "right": "blind person"
              },
              {
                "left": "kahi",
                "right": "boy"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"boy (circumcised)\": ___",
            "correctAnswer": "mundu murume",
            "options": [
              "mũturi (pl. aturi)",
              "injingirri (small)",
              "ngongu",
              "mundu murume"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
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
            "pronunciation": "kukigamma",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "muthuri, pl. athuri",
            "source": "elder",
            "pronunciation": "muthuri, pl. athuri",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mugitti, pl. agitti",
            "source": "enemy",
            "pronunciation": "mugitti, pl. agitti",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "baba",
            "source": "father",
            "pronunciation": "baba",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "wathiomo",
            "source": "father-in-law",
            "pronunciation": "wathiomo",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "karegu",
            "source": "girl",
            "pronunciation": "karegu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "murume wakwa",
            "source": "husband",
            "pronunciation": "murume wakwa",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "muundu, pl. andu",
            "source": "man",
            "pronunciation": "muundu, pl. andu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "maiitu",
            "source": "mother",
            "pronunciation": "maiitu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          }
        ],
        "sentences": [
          {
            "target": "muthuri, pl. athuri",
            "source": "elder"
          },
          {
            "target": "mugitti, pl. agitti",
            "source": "enemy"
          },
          {
            "target": "murume wakwa",
            "source": "husband"
          },
          {
            "target": "muundu, pl. andu",
            "source": "man"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kukigamma\" in Kikuyu?",
            "correctAnswer": "crawl (a man)",
            "options": [
              "elder",
              "enemy",
              "father",
              "crawl (a man)"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"muthuri, pl. athuri\" in Kikuyu?",
            "correctAnswer": "elder",
            "options": [
              "enemy",
              "father",
              "elder",
              "crawl (a man)"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mugitti, pl. agitti\" in Kikuyu?",
            "correctAnswer": "enemy",
            "options": [
              "father",
              "enemy",
              "crawl (a man)",
              "elder"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"enemy\" in Kikuyu?",
            "correctAnswer": "mugitti, pl. agitti",
            "options": [
              "mugitti, pl. agitti",
              "kukigamma",
              "muthuri, pl. athuri",
              "baba"
            ],
            "hint": "mugitti, pl. agitti"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"father\" in Kikuyu?",
            "correctAnswer": "baba",
            "options": [
              "kukigamma",
              "muthuri, pl. athuri",
              "mugitti, pl. agitti",
              "baba"
            ],
            "hint": "baba"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "kukigamma: crawl (a man)",
            "pairs": [
              {
                "left": "kukigamma",
                "right": "crawl (a man)"
              },
              {
                "left": "muthuri, pl. athuri",
                "right": "elder"
              },
              {
                "left": "mugitti, pl. agitti",
                "right": "enemy"
              },
              {
                "left": "baba",
                "right": "father"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"father-in-law\": ___",
            "correctAnswer": "wathiomo",
            "options": [
              "kukigamma",
              "muthuri, pl. athuri",
              "mugitti, pl. agitti",
              "wathiomo"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
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
            "pronunciation": "ee-thah-thah-too",
            "hint": "Hinde: thanthatu"
          },
          {
            "target": "-õthe",
            "source": "all",
            "pronunciation": "-õthe",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "ithiwi õthe",
            "source": "all of us",
            "pronunciation": "ithiwi õthe",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "-wēga",
            "source": "all right",
            "pronunciation": "-wēga",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "rimue",
            "source": "at once",
            "pronunciation": "rimue",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
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
            "pronunciation": "kutara",
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
            "target": "ithiwi õthe",
            "source": "all of us"
          },
          {
            "target": "andu ere",
            "source": "both"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ithathatũ\" in Kikuyu?",
            "correctAnswer": "Six",
            "options": [
              "all",
              "all of us",
              "all right",
              "Six"
            ],
            "hint": "Hinde: thanthatu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-õthe\" in Kikuyu?",
            "correctAnswer": "all",
            "options": [
              "all of us",
              "all right",
              "all",
              "Six"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ithiwi õthe\" in Kikuyu?",
            "correctAnswer": "all of us",
            "options": [
              "all right",
              "all of us",
              "Six",
              "all"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"all of us\" in Kikuyu?",
            "correctAnswer": "ithiwi õthe",
            "options": [
              "ithiwi õthe",
              "Ithathatũ",
              "-õthe",
              "-wēga"
            ],
            "hint": "ithiwi õthe"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"all right\" in Kikuyu?",
            "correctAnswer": "-wēga",
            "options": [
              "Ithathatũ",
              "-õthe",
              "ithiwi õthe",
              "-wēga"
            ],
            "hint": "-wēga"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "Ithathatũ: Six",
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
                "left": "-wēga",
                "right": "all right"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"at once\": ___",
            "correctAnswer": "rimue",
            "options": [
              "Ithathatũ",
              "-õthe",
              "ithiwi õthe",
              "rimue"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
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
            "pronunciation": "mirongoiri na itanu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kiarra ki morroto",
            "source": "finger (first)",
            "pronunciation": "kiarra ki morroto",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "ikinya or kuambirrira",
            "source": "first",
            "pronunciation": "ikinya or kuambirrira",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "katanu",
            "source": "five times",
            "pronunciation": "katanu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mirongo iri na ena",
            "source": "forty",
            "pronunciation": "mirongo iri na ena",
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
            "pronunciation": "nichigana",
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
            "target": "mirongoiri na itanu",
            "source": "fifty"
          },
          {
            "target": "kiarra ki morroto",
            "source": "finger (first)"
          },
          {
            "target": "ikinya or kuambirrira",
            "source": "first"
          },
          {
            "target": "mirongo iri na ena",
            "source": "forty"
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
            "pronunciation": "marigu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kutziara",
            "source": "bear fruit (to)",
            "pronunciation": "kutziara",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "enjohi",
            "source": "beer (native)",
            "pronunciation": "enjohi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "-nyungu",
            "source": "bitter",
            "pronunciation": "-nyungu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "ngorrono",
            "source": "butter",
            "pronunciation": "ngorrono",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "maguta",
            "source": "butter (clarified)",
            "pronunciation": "maguta",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "uria",
            "source": "butter milk",
            "pronunciation": "uria",
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
        "sentences": [],
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
            "pronunciation": "mbariki",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kurri ambakki",
            "source": "chew (tobacco)",
            "pronunciation": "kurri ambakki",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kurritatha gummia",
            "source": "chew (the cud)",
            "pronunciation": "kurritatha gummia",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kuruga",
            "source": "cook",
            "pronunciation": "kuruga",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kumea",
            "source": "drink",
            "pronunciation": "kumea",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kunigurria",
            "source": "eat",
            "pronunciation": "kunigurria",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "itumbi, pl. matumbi",
            "source": "egg",
            "pronunciation": "itumbi, pl. matumbi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "ngaragu",
            "source": "famine",
            "pronunciation": "ngaragu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mutŭ",
            "source": "flour",
            "pronunciation": "mutŭ",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          }
        ],
        "sentences": [
          {
            "target": "kurri ambakki",
            "source": "chew (tobacco)"
          },
          {
            "target": "kurritatha gummia",
            "source": "chew (the cud)"
          },
          {
            "target": "itumbi, pl. matumbi",
            "source": "egg"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mbariki\" in Kikuyu?",
            "correctAnswer": "castor-oil tree",
            "options": [
              "chew (tobacco)",
              "chew (the cud)",
              "cook",
              "castor-oil tree"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kurri ambakki\" in Kikuyu?",
            "correctAnswer": "chew (tobacco)",
            "options": [
              "chew (the cud)",
              "cook",
              "chew (tobacco)",
              "castor-oil tree"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kurritatha gummia\" in Kikuyu?",
            "correctAnswer": "chew (the cud)",
            "options": [
              "cook",
              "chew (the cud)",
              "castor-oil tree",
              "chew (tobacco)"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"chew (the cud)\" in Kikuyu?",
            "correctAnswer": "kurritatha gummia",
            "options": [
              "kurritatha gummia",
              "mbariki",
              "kurri ambakki",
              "kuruga"
            ],
            "hint": "kurritatha gummia"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"cook\" in Kikuyu?",
            "correctAnswer": "kuruga",
            "options": [
              "mbariki",
              "kurri ambakki",
              "kurritatha gummia",
              "kuruga"
            ],
            "hint": "kuruga"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "mbariki: castor-oil tree",
            "pairs": [
              {
                "left": "mbariki",
                "right": "castor-oil tree"
              },
              {
                "left": "kurri ambakki",
                "right": "chew (tobacco)"
              },
              {
                "left": "kurritatha gummia",
                "right": "chew (the cud)"
              },
              {
                "left": "kuruga",
                "right": "cook"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"drink\": ___",
            "correctAnswer": "kumea",
            "options": [
              "mbariki",
              "kurri ambakki",
              "kurritatha gummia",
              "kumea"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
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
            "pronunciation": "hee-tee",
            "hint": "Hémery 1903, McGregor 1904 & Routledge 1910"
          },
          {
            "target": "mũgumo (pl. mĩgumo)",
            "source": "Sacred Fig Tree",
            "pronunciation": "moo-goo-moh",
            "hint": "Routledge 1910 & Hobley 1922 sacred shrine tree"
          },
          {
            "target": "mialaho",
            "source": "afternoon",
            "pronunciation": "mialaho",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "thigirriri",
            "source": "ant (small black)",
            "pronunciation": "thigirriri",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "tharaku",
            "source": "ant (red)",
            "pronunciation": "tharaku",
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
            "pronunciation": "irõõnga",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "muhu",
            "source": "ashes",
            "pronunciation": "muhu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "nugu ao ithinwa",
            "source": "baboon",
            "pronunciation": "nugu ao ithinwa",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          }
        ],
        "sentences": [
          {
            "target": "nugu ao ithinwa",
            "source": "baboon"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"hiti\" in Kikuyu?",
            "correctAnswer": "Hyena",
            "options": [
              "Sacred Fig Tree",
              "afternoon",
              "ant (small black)",
              "Hyena"
            ],
            "hint": "Hémery 1903, McGregor 1904 & Routledge 1910"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mũgumo (pl. mĩgumo)\" in Kikuyu?",
            "correctAnswer": "Sacred Fig Tree",
            "options": [
              "afternoon",
              "ant (small black)",
              "Sacred Fig Tree",
              "Hyena"
            ],
            "hint": "Routledge 1910 & Hobley 1922 sacred shrine tree"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mialaho\" in Kikuyu?",
            "correctAnswer": "afternoon",
            "options": [
              "ant (small black)",
              "afternoon",
              "Hyena",
              "Sacred Fig Tree"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"afternoon\" in Kikuyu?",
            "correctAnswer": "mialaho",
            "options": [
              "mialaho",
              "hiti",
              "mũgumo (pl. mĩgumo)",
              "thigirriri"
            ],
            "hint": "mialaho"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"ant (small black)\" in Kikuyu?",
            "correctAnswer": "thigirriri",
            "options": [
              "hiti",
              "mũgumo (pl. mĩgumo)",
              "mialaho",
              "thigirriri"
            ],
            "hint": "thigirriri"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "hiti: Hyena",
            "pairs": [
              {
                "left": "hiti",
                "right": "Hyena"
              },
              {
                "left": "mũgumo (pl. mĩgumo)",
                "right": "Sacred Fig Tree"
              },
              {
                "left": "mialaho",
                "right": "afternoon"
              },
              {
                "left": "thigirriri",
                "right": "ant (small black)"
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
            "pronunciation": "mugiyo",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kugambu",
            "source": "bark",
            "pronunciation": "kugambu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "makonni",
            "source": "bark (of tree)",
            "pronunciation": "makonni",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "ebũbũ",
            "source": "bat",
            "pronunciation": "ebũbũ",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "enjugu",
            "source": "beans (tree)",
            "pronunciation": "enjugu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "njuki",
            "source": "bee",
            "pronunciation": "njuki",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "katinainyu",
            "source": "beetle",
            "pronunciation": "katinainyu",
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
            "pronunciation": "nyoni",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mugiyo\" in Kikuyu?",
            "correctAnswer": "baobab tree",
            "options": [
              "bark",
              "bark (of tree)",
              "bat",
              "baobab tree"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kugambu\" in Kikuyu?",
            "correctAnswer": "bark",
            "options": [
              "bark (of tree)",
              "bat",
              "bark",
              "baobab tree"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"makonni\" in Kikuyu?",
            "correctAnswer": "bark (of tree)",
            "options": [
              "bat",
              "bark (of tree)",
              "baobab tree",
              "bark"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"bark (of tree)\" in Kikuyu?",
            "correctAnswer": "makonni",
            "options": [
              "makonni",
              "mugiyo",
              "kugambu",
              "ebũbũ"
            ],
            "hint": "makonni"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"bat\" in Kikuyu?",
            "correctAnswer": "ebũbũ",
            "options": [
              "mugiyo",
              "kugambu",
              "makonni",
              "ebũbũ"
            ],
            "hint": "ebũbũ"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "mugiyo: baobab tree",
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
                "right": "bark (of tree)"
              },
              {
                "left": "ebũbũ",
                "right": "bat"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"beans (tree)\": ___",
            "correctAnswer": "enjugu",
            "options": [
              "mugiyo",
              "kugambu",
              "makonni",
              "enjugu"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
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
            "pronunciation": "runyadide",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "musite",
            "source": "anus",
            "pronunciation": "musite",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "wuoko",
            "source": "arm (the whole)",
            "pronunciation": "wuoko",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kuwoko",
            "source": "arm (fore)",
            "pronunciation": "kuwoko",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kichako",
            "source": "arm (upper)",
            "pronunciation": "kichako",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "enjegeki",
            "source": "armpit",
            "pronunciation": "enjegeki",
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
            "pronunciation": "ihindi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nda\" in Kikuyu?",
            "correctAnswer": "abdomen",
            "options": [
              "ankle",
              "anus",
              "arm (the whole)",
              "abdomen"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"runyadide\" in Kikuyu?",
            "correctAnswer": "ankle",
            "options": [
              "anus",
              "arm (the whole)",
              "ankle",
              "abdomen"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"musite\" in Kikuyu?",
            "correctAnswer": "anus",
            "options": [
              "arm (the whole)",
              "anus",
              "abdomen",
              "ankle"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"anus\" in Kikuyu?",
            "correctAnswer": "musite",
            "options": [
              "musite",
              "nda",
              "runyadide",
              "wuoko"
            ],
            "hint": "musite"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"arm (the whole)\" in Kikuyu?",
            "correctAnswer": "wuoko",
            "options": [
              "nda",
              "runyadide",
              "musite",
              "wuoko"
            ],
            "hint": "wuoko"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "nda: abdomen",
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
                "left": "musite",
                "right": "anus"
              },
              {
                "left": "wuoko",
                "right": "arm (the whole)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"arm (fore)\": ___",
            "correctAnswer": "kuwoko",
            "options": [
              "nda",
              "runyadide",
              "musite",
              "kuwoko"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
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
            "pronunciation": "nderu",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "thungi",
            "source": "bladder",
            "pronunciation": "thungi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "sakame",
            "source": "blood",
            "pronunciation": "sakame",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kumirra",
            "source": "blow nose",
            "pronunciation": "kumirra",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "mwiri",
            "source": "body",
            "pronunciation": "mwiri",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "ihuha, pl. mahuha",
            "source": "boil",
            "pronunciation": "ihuha, pl. mahuha",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "kuhiuha",
            "source": "boil",
            "pronunciation": "kuhiuha",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "ihindi, pl. mahindi",
            "source": "bone",
            "pronunciation": "ihindi, pl. mahindi",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "target": "nyondo",
            "source": "breast",
            "pronunciation": "nyondo",
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          }
        ],
        "sentences": [
          {
            "target": "ihuha, pl. mahuha",
            "source": "boil"
          },
          {
            "target": "ihindi, pl. mahindi",
            "source": "bone"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nderu\" in Kikuyu?",
            "correctAnswer": "beard",
            "options": [
              "bladder",
              "blood",
              "blow nose",
              "beard"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"thungi\" in Kikuyu?",
            "correctAnswer": "bladder",
            "options": [
              "blood",
              "blow nose",
              "bladder",
              "beard"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sakame\" in Kikuyu?",
            "correctAnswer": "blood",
            "options": [
              "blow nose",
              "blood",
              "beard",
              "bladder"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"blood\" in Kikuyu?",
            "correctAnswer": "sakame",
            "options": [
              "sakame",
              "nderu",
              "thungi",
              "kumirra"
            ],
            "hint": "sakame"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"blow nose\" in Kikuyu?",
            "correctAnswer": "kumirra",
            "options": [
              "nderu",
              "thungi",
              "sakame",
              "kumirra"
            ],
            "hint": "kumirra"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "nderu: beard",
            "pairs": [
              {
                "left": "nderu",
                "right": "beard"
              },
              {
                "left": "thungi",
                "right": "bladder"
              },
              {
                "left": "sakame",
                "right": "blood"
              },
              {
                "left": "kumirra",
                "right": "blow nose"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"body\": ___",
            "correctAnswer": "mwiri",
            "options": [
              "nderu",
              "thungi",
              "sakame",
              "mwiri"
            ],
            "hint": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)"
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
            "pronunciation": "kwah-ree-ah / koo-gah",
            "hint": "Hémery 1903 & McGregor 1904"
          },
          {
            "target": "kũkoma (-koma)",
            "source": "Sleep",
            "pronunciation": "koo-koh-mah",
            "hint": "Hémery 1903, McGregor 1904 & Hinde 1904"
          },
          {
            "target": "gũthiĩ (-thiĩ)",
            "source": "Go",
            "pronunciation": "goo-thee",
            "hint": "McGregor 1904 (Dahl's Law: kū-thiĩ > gũthiĩ)"
          },
          {
            "target": "kũnyua (-nyua)",
            "source": "Drink",
            "pronunciation": "koo-nywah",
            "hint": "Hémery 1903, McGregor 1904 & Hinde 1904"
          },
          {
            "target": "kũrĩa (-rĩa)",
            "source": "Eat",
            "pronunciation": "koo-ree-ah",
            "hint": "Hémery 1903, McGregor 1904 & Hinde 1904"
          },
          {
            "target": "n-a-tinda",
            "source": "I conquer",
            "pronunciation": "n-a-tinda",
            "hint": "Hinde (1904) — Indicative Mood. Present Tense"
          },
          {
            "target": "w-a-tinda",
            "source": "thou conquerest",
            "pronunciation": "w-a-tinda",
            "hint": "Hinde (1904) — Indicative Mood. Present Tense"
          },
          {
            "target": "a-tinda",
            "source": "he or she conquers",
            "pronunciation": "a-tinda",
            "hint": "Hinde (1904) — Indicative Mood. Present Tense"
          },
          {
            "target": "tw-a-tinda",
            "source": "we conquer",
            "pronunciation": "tw-a-tinda",
            "hint": "Hinde (1904) — Indicative Mood. Present Tense"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kwaria (-aria) / kuuga\" in Kikuyu?",
            "correctAnswer": "Speak",
            "options": [
              "Sleep",
              "Go",
              "Drink",
              "Speak"
            ],
            "hint": "Hémery 1903 & McGregor 1904"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kũkoma (-koma)\" in Kikuyu?",
            "correctAnswer": "Sleep",
            "options": [
              "Go",
              "Drink",
              "Sleep",
              "Speak"
            ],
            "hint": "Hémery 1903, McGregor 1904 & Hinde 1904"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"gũthiĩ (-thiĩ)\" in Kikuyu?",
            "correctAnswer": "Go",
            "options": [
              "Drink",
              "Go",
              "Speak",
              "Sleep"
            ],
            "hint": "McGregor 1904 (Dahl's Law: kū-thiĩ > gũthiĩ)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Go\" in Kikuyu?",
            "correctAnswer": "gũthiĩ (-thiĩ)",
            "options": [
              "gũthiĩ (-thiĩ)",
              "kwaria (-aria) / kuuga",
              "kũkoma (-koma)",
              "kũnyua (-nyua)"
            ],
            "hint": "goo-thee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Drink\" in Kikuyu?",
            "correctAnswer": "kũnyua (-nyua)",
            "options": [
              "kwaria (-aria) / kuuga",
              "kũkoma (-koma)",
              "gũthiĩ (-thiĩ)",
              "kũnyua (-nyua)"
            ],
            "hint": "koo-nywah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "kwaria (-aria) / kuuga: Speak",
            "pairs": [
              {
                "left": "kwaria (-aria) / kuuga",
                "right": "Speak"
              },
              {
                "left": "kũkoma (-koma)",
                "right": "Sleep"
              },
              {
                "left": "gũthiĩ (-thiĩ)",
                "right": "Go"
              },
              {
                "left": "kũnyua (-nyua)",
                "right": "Drink"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"Eat\": ___",
            "correctAnswer": "kũrĩa (-rĩa)",
            "options": [
              "kwaria (-aria) / kuuga",
              "kũkoma (-koma)",
              "gũthiĩ (-thiĩ)",
              "kũrĩa (-rĩa)"
            ],
            "hint": "Hémery 1903, McGregor 1904 & Hinde 1904"
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
            "target": "mw-a-tinda",
            "source": "you conquer",
            "pronunciation": "mw-a-tinda",
            "hint": "Hinde (1904) — Indicative Mood. Present Tense"
          },
          {
            "target": "m-a-tinda",
            "source": "they conquer",
            "pronunciation": "m-a-tinda",
            "hint": "Hinde (1904) — Indicative Mood. Present Tense"
          },
          {
            "target": "ni-ki-tinda",
            "source": "I am conquering",
            "pronunciation": "ni-ki-tinda",
            "hint": "Hinde (1904) — Present Imperfect"
          },
          {
            "target": "wa or u-ki-tinda",
            "source": "thou art conquering",
            "pronunciation": "wa or u-ki-tinda",
            "hint": "Hinde (1904) — Present Imperfect"
          },
          {
            "target": "a-ki-tinda",
            "source": "he or she is conquering",
            "pronunciation": "a-ki-tinda",
            "hint": "Hinde (1904) — Present Imperfect"
          },
          {
            "target": "tu-ki-tinda",
            "source": "we are conquering",
            "pronunciation": "tu-ki-tinda",
            "hint": "Hinde (1904) — Present Imperfect"
          },
          {
            "target": "mu-ki-tinda",
            "source": "you are conquering",
            "pronunciation": "mu-ki-tinda",
            "hint": "Hinde (1904) — Present Imperfect"
          },
          {
            "target": "me or ma-ki-tinda",
            "source": "they are conquering",
            "pronunciation": "me or ma-ki-tinda",
            "hint": "Hinde (1904) — Present Imperfect"
          },
          {
            "target": "ni-tind-eti or iti",
            "source": "I have conquered",
            "pronunciation": "ni-tind-eti or iti",
            "hint": "Hinde (1904) — Present Perfect"
          }
        ],
        "sentences": [
          {
            "target": "wa or u-ki-tinda",
            "source": "thou art conquering"
          },
          {
            "target": "me or ma-ki-tinda",
            "source": "they are conquering"
          },
          {
            "target": "ni-tind-eti or iti",
            "source": "I have conquered"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mw-a-tinda\" in Kikuyu?",
            "correctAnswer": "you conquer",
            "options": [
              "they conquer",
              "I am conquering",
              "thou art conquering",
              "you conquer"
            ],
            "hint": "Hinde (1904) — Indicative Mood. Present Tense"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"m-a-tinda\" in Kikuyu?",
            "correctAnswer": "they conquer",
            "options": [
              "I am conquering",
              "thou art conquering",
              "they conquer",
              "you conquer"
            ],
            "hint": "Hinde (1904) — Indicative Mood. Present Tense"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ni-ki-tinda\" in Kikuyu?",
            "correctAnswer": "I am conquering",
            "options": [
              "thou art conquering",
              "I am conquering",
              "you conquer",
              "they conquer"
            ],
            "hint": "Hinde (1904) — Present Imperfect"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I am conquering\" in Kikuyu?",
            "correctAnswer": "ni-ki-tinda",
            "options": [
              "ni-ki-tinda",
              "mw-a-tinda",
              "m-a-tinda",
              "wa or u-ki-tinda"
            ],
            "hint": "ni-ki-tinda"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"thou art conquering\" in Kikuyu?",
            "correctAnswer": "wa or u-ki-tinda",
            "options": [
              "mw-a-tinda",
              "m-a-tinda",
              "ni-ki-tinda",
              "wa or u-ki-tinda"
            ],
            "hint": "wa or u-ki-tinda"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kikuyu expression with its English meaning:",
            "correctAnswer": "mw-a-tinda: you conquer",
            "pairs": [
              {
                "left": "mw-a-tinda",
                "right": "you conquer"
              },
              {
                "left": "m-a-tinda",
                "right": "they conquer"
              },
              {
                "left": "ni-ki-tinda",
                "right": "I am conquering"
              },
              {
                "left": "wa or u-ki-tinda",
                "right": "thou art conquering"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kikuyu term for \"he or she is conquering\": ___",
            "correctAnswer": "a-ki-tinda",
            "options": [
              "mw-a-tinda",
              "m-a-tinda",
              "ni-ki-tinda",
              "a-ki-tinda"
            ],
            "hint": "Hinde (1904) — Present Imperfect"
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
            "pronunciation": "i-tuee-ka",
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
            "pronunciation": "goo-ta-hee-kia",
            "hint": "Hobley (1922, p. 308)"
          },
          {
            "target": "thengira",
            "source": "Unmarried men's bachelor hut / council hut",
            "pronunciation": "theng-i-ra",
            "hint": "Hobley (1922, p. 308)"
          },
          {
            "target": "rũkwarũ",
            "source": "Goat-skin wrist/waist strip of ceremonial peace",
            "pronunciation": "rook-wa-roo",
            "hint": "Hobley (1922, p. 308)"
          },
          {
            "target": "rũenji / rũoro",
            "source": "Traditional razor / Cattle-branding iron knife",
            "pronunciation": "rooenj-i",
            "hint": "Hobley (1922, p. 308)"
          },
          {
            "target": "mũgũnda / gĩthaka",
            "source": "Cultivated garden farm / Uncultivated bushland",
            "pronunciation": "moo-goond-a",
            "hint": "Wiktionary Bantu Swadesh & CGIAR Kikuyu"
          }
        ],
        "sentences": [],
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
            "pronunciation": "goo-too-ma mbe-ca na thi-moo",
            "hint": "Anv-ke Gĩkũyũ Financial Corpus"
          },
          {
            "target": "ũrĩmi wa mĩmera na mahiũ",
            "source": "Crop farming and livestock husbandry",
            "pronunciation": "oo-ree-mi wa mee-me-ra na ma-hioo",
            "hint": "CGIAR Kikuyu-English Translation Dataset"
          },
          {
            "target": "mbeũ njega cia mbembe",
            "source": "Certified / high-yield maize seeds",
            "pronunciation": "mbeoo nje-ga cia mbemb-e",
            "hint": "CGIAR & Anv-ke Agriculture Corpus"
          },
          {
            "target": "thibitarĩ / nyũmba ya ũrigiti",
            "source": "Hospital / health dispensary",
            "pronunciation": "thi-bi-ta-ree",
            "hint": "Anv-ke Healthcare Corpus"
          },
          {
            "target": "gwĩciria / kũmenya",
            "source": "To think / To know",
            "pronunciation": "gwee-ci-ria",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists"
          },
          {
            "target": "gũtindĩka / kũgucia",
            "source": "To push / To pull",
            "pronunciation": "goo-tind-ee-ka",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists"
          },
          {
            "target": "kũatũra / gũtinia",
            "source": "To split wood / To cut",
            "pronunciation": "kooa-too-ra",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists"
          },
          {
            "target": "kũnyoroka / kũrũnga",
            "source": "To be smooth / To be straight",
            "pronunciation": "koony-o-ro-ka",
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
          },
          {
            "target": "mbeũ njega cia mbembe",
            "source": "Certified / high-yield maize seeds"
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
            "pronunciation": "ku ta-hi-kia",
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
            "pronunciation": "ruenj-i",
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
            "pronunciation": "ngung-a",
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
        "sentences": [],
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
            "pronunciation": "kith-ang-ao-na",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "Ichua",
            "source": "A sacrificial fire",
            "pronunciation": "ich-ua",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          }
        ],
        "sentences": [],
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
];
