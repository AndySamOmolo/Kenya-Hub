import type { LanguageConfig, CourseUnit } from "../types";

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
    "routledge-prehistoric-people-1910",
    "hobley-akamba-ethnology-1910",
    "johnston-bantu-1919",
    "bantu-beliefs",
    "open-web-swadesh-comparative",
    "mcgregor-kikuyu-vocabulary-1904"
  ]
};

export const KIKUYU_UNITS: CourseUnit[] = [
  {
    "id": "kikuyu-unit-1",
    "unitNumber": 1,
    "title": "Greetings, Courtesies & Everyday Inquiries",
    "description": "Master traditional Gĩkũyũ salutations, polite replies, and essential conversational questions recorded by Hildegarde Hinde (1904).",
    "icon": "Handshake",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-greetings-1",
        "title": "Salutations & Welcoming Guests",
        "icon": "Handshake",
        "description": "Learn traditional salutations, responses, and welcoming hospitality phrases from Hinde (1904).",
        "culturalNote": "Among the Agĩkũyũ of the Central Highlands, inquiring after the peace ('mwohoro') of the homestead, children, and herds precedes any formal conversation.",
        "words": [
          {
            "target": "Mwohoro",
            "source": "Salutation / How is the news?",
            "pronunciation": "mwo-ho-ro"
          },
          {
            "target": "Mwohoro mwēga",
            "source": "Good news / Fine",
            "pronunciation": "mwo-ho-ro mwe-ga"
          },
          {
            "target": "Mwēga munnu",
            "source": "Very good / Very well",
            "pronunciation": "mwe-ga munnu"
          },
          {
            "target": "Nimwega",
            "source": "I am good / well",
            "pronunciation": "nimwe-ga"
          },
          {
            "target": "Uka haha",
            "source": "Come here",
            "pronunciation": "uka ha-ha"
          },
          {
            "target": "Rehe maii",
            "source": "Bring water",
            "pronunciation": "re-he maii"
          },
          {
            "target": "Reherria",
            "source": "Bring food",
            "pronunciation": "re-herria"
          },
          {
            "target": "Aca",
            "source": "No",
            "pronunciation": "aca"
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
        "words": [
          {
            "target": "Wita gwatia?",
            "source": "What is your name?",
            "pronunciation": "wi-ta gwa-tia"
          },
          {
            "target": "Wathiiku?",
            "source": "Where are you going?",
            "pronunciation": "wathii-ku"
          },
          {
            "target": "Ukwendakki?",
            "source": "What do you want?",
            "pronunciation": "ukwendakki"
          },
          {
            "target": "Umaku?",
            "source": "Where do you come from?",
            "pronunciation": "u-ma-ku"
          },
          {
            "target": "Uguikatia?",
            "source": "What are you doing?",
            "pronunciation": "u-gui-ka-tia"
          },
          {
            "target": "Nikkigekki?",
            "source": "What is this?",
            "pronunciation": "nikki-gekki"
          },
          {
            "target": "Meku maii?",
            "source": "Where is the water?",
            "pronunciation": "me-ku maii"
          },
          {
            "target": "Ndiui",
            "source": "I do not know",
            "pronunciation": "ndiui"
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
    "unitNumber": 2,
    "title": "Numbers, Counting & Multipliers",
    "description": "Learn the decimal counting system from 1 to 100, ordinals, and frequency multipliers from Hinde (1904).",
    "icon": "BookOpen",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-numbers-1-10",
        "title": "Cardinal Numbers 1 to 10",
        "icon": "Hash",
        "description": "Count from 1 (imue) to 10 (ikumi) in Gĩkũyũ.",
        "words": [
          {
            "target": "Imue",
            "source": "One (1)",
            "pronunciation": "i-mue"
          },
          {
            "target": "Igiri",
            "source": "Two (2)",
            "pronunciation": "i-gi-ri"
          },
          {
            "target": "Ithatu",
            "source": "Three (3)",
            "pronunciation": "itha-tu"
          },
          {
            "target": "Inya",
            "source": "Four (4)",
            "pronunciation": "inya"
          },
          {
            "target": "Ithanu",
            "source": "Five (5)",
            "pronunciation": "itha-nu"
          },
          {
            "target": "Thanthatu",
            "source": "Six (6)",
            "pronunciation": "thantha-tu"
          },
          {
            "target": "Muguanja",
            "source": "Seven (7)",
            "pronunciation": "mu-guanja"
          },
          {
            "target": "Inyanya",
            "source": "Eight (8)",
            "pronunciation": "inyanya"
          },
          {
            "target": "Ikenda",
            "source": "Nine (9)",
            "pronunciation": "i-kenda"
          },
          {
            "target": "Ikumi",
            "source": "Ten (10)",
            "pronunciation": "i-ku-mi"
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
        "words": [
          {
            "target": "Mirongoiri",
            "source": "Twenty (20)",
            "pronunciation": "mi-rongoi-ri"
          },
          {
            "target": "Mirongo itatu",
            "source": "Thirty (30)",
            "pronunciation": "mi-rongo i-ta-tu"
          },
          {
            "target": "Mirongo inya",
            "source": "Forty (40)",
            "pronunciation": "mi-rongo inya"
          },
          {
            "target": "Mirongo ithanu",
            "source": "Fifty (50)",
            "pronunciation": "mi-rongo itha-nu"
          },
          {
            "target": "Igana",
            "source": "One hundred (100)",
            "pronunciation": "i-ga-na"
          },
          {
            "target": "Kirrimue",
            "source": "Once (one time)",
            "pronunciation": "kirri-mue"
          },
          {
            "target": "Kēēri",
            "source": "Twice (two times)",
            "pronunciation": "kee-ri"
          },
          {
            "target": "Kathatu",
            "source": "Thrice (three times)",
            "pronunciation": "katha-tu"
          },
          {
            "target": "Kuambirrira",
            "source": "First",
            "pronunciation": "kuambirri-ra"
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
    "unitNumber": 3,
    "title": "Family, Kinship & Social Ranks",
    "description": "Learn terms for family members, life stages, and possessives from Hinde (1904) and Hobley (1922).",
    "icon": "Users",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-family-kinship",
        "title": "Parents, Children & Homestead Kin",
        "icon": "Users",
        "description": "Master core kinship nouns and possessive phrases.",
        "words": [
          {
            "target": "Baba wiitu",
            "source": "Our father",
            "pronunciation": "ba-ba wii-tu"
          },
          {
            "target": "Nyina wiitu",
            "source": "Our mother",
            "pronunciation": "nyi-na wii-tu"
          },
          {
            "target": "Mwana wakua",
            "source": "My child",
            "pronunciation": "mwa-na wa-kua"
          },
          {
            "target": "Siana siaku",
            "source": "Your children",
            "pronunciation": "sia-na sia-ku"
          },
          {
            "target": "Mundu (pl. Andu)",
            "source": "Person (pl. People)",
            "pronunciation": "mundu"
          },
          {
            "target": "Muka (pl. Aka)",
            "source": "Woman / Wife (pl. Women / Wives)",
            "pronunciation": "mu-ka"
          },
          {
            "target": "Mwanake (pl. Anake)",
            "source": "Warrior / Young man (pl. Warriors)",
            "pronunciation": "mwa-na-ke"
          },
          {
            "target": "Muiritu (pl. Airitu)",
            "source": "Maiden / Unmarried girl",
            "pronunciation": "mui-ri-tu"
          },
          {
            "target": "Mutumia (pl. Atumia)",
            "source": "Elder of the community",
            "pronunciation": "mu-tu-mia"
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
    "unitNumber": 4,
    "title": "Homestead, Food, Livestock & Daily Sustenance",
    "description": "Talk about food, milk, hunger, cattle, and household items using Hinde (1904).",
    "icon": "Tractor",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-food-homestead",
        "title": "Food, Milk, Fire & Homestead Life",
        "icon": "MessageCircle",
        "description": "Express hunger, request milk and food, and name household items.",
        "words": [
          {
            "target": "Nihūtie",
            "source": "I am hungry",
            "pronunciation": "ni-hu-tie"
          },
          {
            "target": "Ningwenda irria",
            "source": "I want milk",
            "pronunciation": "ningwenda irria"
          },
          {
            "target": "Ugika kurria?",
            "source": "Do you want to eat?",
            "pronunciation": "u-gi-ka kurria"
          },
          {
            "target": "Ngombe siake",
            "source": "His cows / cattle",
            "pronunciation": "ngombe sia-ke"
          },
          {
            "target": "Nyumba ninene",
            "source": "A big house",
            "pronunciation": "nyumba ni-ne-ne"
          },
          {
            "target": "Mwitzi wiitu",
            "source": "Our village / homestead",
            "pronunciation": "mwitzi wii-tu"
          },
          {
            "target": "Akiamwaki",
            "source": "Make a fire",
            "pronunciation": "a-kiamwa-ki"
          },
          {
            "target": "Ruhiu rwega",
            "source": "A good knife / sword",
            "pronunciation": "ru-hiu rwe-ga"
          },
          {
            "target": "Kiratu (pl. Iratu)",
            "source": "Sandal / shoe (pl. Sandals)",
            "pronunciation": "ki-ra-tu"
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
    "unitNumber": 5,
    "title": "Verbs, Tenses & Negation",
    "description": "Master affirmative and negative verb conjugations, imperatives, and everyday actions from Hinde (1904).",
    "icon": "Zap",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-verbs-actions",
        "title": "Everyday Verbs, Commands & Negatives",
        "icon": "Zap",
        "description": "Express going, returning, bringing, seeing, and negative statements.",
        "words": [
          {
            "target": "Ningathi",
            "source": "I will go",
            "pronunciation": "ningathi"
          },
          {
            "target": "Ndikathie",
            "source": "I will not go",
            "pronunciation": "ndi-kathie"
          },
          {
            "target": "Ndingihotta kuthi",
            "source": "I cannot go",
            "pronunciation": "ndingi-hotta kuthi"
          },
          {
            "target": "Ningashōka",
            "source": "I will return",
            "pronunciation": "ningasho-ka"
          },
          {
            "target": "Ndikwenda",
            "source": "I do not want",
            "pronunciation": "ndikwenda"
          },
          {
            "target": "Ndionna",
            "source": "I do not see",
            "pronunciation": "ndionna"
          },
          {
            "target": "Nikurehe",
            "source": "I bring",
            "pronunciation": "ni-ku-re-he"
          },
          {
            "target": "Aniuka",
            "source": "He has come",
            "pronunciation": "a-niu-ka"
          },
          {
            "target": "Udikuka",
            "source": "Do not come",
            "pronunciation": "u-di-ku-ka"
          },
          {
            "target": "Kirra",
            "source": "Be quiet",
            "pronunciation": "kirra"
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
    "unitNumber": 6,
    "title": "Nature, Body Parts & Cultural Heritage",
    "description": "Explore natural landscapes, anatomy, and classical Agĩkũyũ cultural institutions from Hinde (1904) and Hobley (1922).",
    "icon": "Activity",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-nature-body",
        "title": "Nature, Anatomy & Locatives",
        "icon": "Activity",
        "description": "Name features of the highland landscape and parts of the body.",
        "words": [
          {
            "target": "Kiara (pl. Shiara)",
            "source": "Finger (pl. Fingers)",
            "pronunciation": "kia-ra"
          },
          {
            "target": "Uwoko wake",
            "source": "His hand / arm",
            "pronunciation": "u-wo-ko wa-ke"
          },
          {
            "target": "Mtueni",
            "source": "In the head",
            "pronunciation": "mtue-ni"
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
        "words": [
          {
            "target": "Mundu Mugo",
            "source": "Traditional healer and diviner",
            "pronunciation": "mundu mu-go"
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
    "unitNumber": 7,
    "title": "Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Kikuyu (Gĩkũyũ) built directly from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927).",
    "icon": "User",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-family-kinship-kinship-elders-7",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "muundu, pl. andu",
            "source": "Man",
            "pronunciation": "muundu"
          },
          {
            "target": "Mwana",
            "source": "Son",
            "pronunciation": "mwana"
          },
          {
            "target": "karegu",
            "source": "Girl",
            "pronunciation": "karegu"
          },
          {
            "target": "kahi",
            "source": "boy",
            "pronunciation": "ka-hi"
          },
          {
            "target": "mundu murume",
            "source": "boy (circumcised)",
            "pronunciation": "mundu mu-ru-me"
          },
          {
            "target": "murāta",
            "source": "brother",
            "pronunciation": "mu-ra-ta"
          },
          {
            "target": "mthoni",
            "source": "brother in law",
            "pronunciation": "mtho-ni"
          },
          {
            "target": "muthamaki",
            "source": "chief",
            "pronunciation": "mutha-ma-ki"
          },
          {
            "target": "kana, pl. twana",
            "source": "child",
            "pronunciation": "ka-na"
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
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "kukigamma",
            "source": "crawl (a man)",
            "pronunciation": "ku-ki-gamma"
          },
          {
            "target": "muthuri, pl. athuri",
            "source": "elder",
            "pronunciation": "muthu-ri"
          },
          {
            "target": "baba",
            "source": "father",
            "pronunciation": "ba-ba"
          },
          {
            "target": "wathiomo",
            "source": "father-in-law",
            "pronunciation": "wathio-mo"
          },
          {
            "target": "karegu",
            "source": "girl",
            "pronunciation": "ka-re-gu"
          },
          {
            "target": "murume wakwa",
            "source": "husband",
            "pronunciation": "mu-ru-me wakwa"
          },
          {
            "target": "muundu, pl. andu",
            "source": "man",
            "pronunciation": "muundu"
          },
          {
            "target": "maiitu",
            "source": "mother",
            "pronunciation": "maii-tu"
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
    "unitNumber": 8,
    "title": "Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Kikuyu (Gĩkũyũ) built directly from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927).",
    "icon": "Scale",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-numbers-measures-cardinals-ordinals-8",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "Ithathatũ",
            "source": "Six",
            "pronunciation": "ithatha-tu"
          },
          {
            "target": "-õthe",
            "source": "all",
            "pronunciation": "othe"
          },
          {
            "target": "ithiwi õthe",
            "source": "all of us",
            "pronunciation": "ithi-wi othe"
          },
          {
            "target": "imue",
            "source": "One",
            "pronunciation": "imue"
          },
          {
            "target": "ikumi",
            "source": "Ten",
            "pronunciation": "ikumi"
          },
          {
            "target": "andu ere",
            "source": "both",
            "pronunciation": "andu ere"
          },
          {
            "target": "kutara",
            "source": "count",
            "pronunciation": "ku-ta-ra"
          },
          {
            "target": "inyanga",
            "source": "eight",
            "pronunciation": "inyanga"
          },
          {
            "target": "kanyanya",
            "source": "eight times",
            "pronunciation": "kanyanya"
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
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "mirongoiri na itanu",
            "source": "fifty",
            "pronunciation": "mi-rongoi-ri na i-ta-nu"
          },
          {
            "target": "kiarra ki morroto",
            "source": "finger (first)",
            "pronunciation": "kiarra ki morro-to"
          },
          {
            "target": "ikinya or kuambirrira",
            "source": "first",
            "pronunciation": "i-kinya or kuambirri-ra"
          },
          {
            "target": "katanu",
            "source": "five times",
            "pronunciation": "ka-ta-nu"
          },
          {
            "target": "mirongo iri na ena",
            "source": "forty",
            "pronunciation": "mi-rongo iri na ena"
          },
          {
            "target": "kanna",
            "source": "four times",
            "pronunciation": "kanna"
          },
          {
            "target": "kishuinji",
            "source": "half",
            "pronunciation": "kishuinji"
          },
          {
            "target": "nichigana",
            "source": "how many",
            "pronunciation": "nichi-ga-na"
          },
          {
            "target": "riingi",
            "source": "many",
            "pronunciation": "riingi"
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
    "unitNumber": 9,
    "title": "Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Kikuyu (Gĩkũyũ) built directly from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927).",
    "icon": "Milk",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-food-agriculture-staple-foods-cookery-9",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "marigu",
            "source": "banana",
            "pronunciation": "ma-ri-gu"
          },
          {
            "target": "kutziara",
            "source": "bear fruit (to)",
            "pronunciation": "kutzia-ra"
          },
          {
            "target": "enjohi",
            "source": "beer (native)",
            "pronunciation": "enjo-hi"
          },
          {
            "target": "-nyungu",
            "source": "bitter",
            "pronunciation": "nyungu"
          },
          {
            "target": "ngorrono",
            "source": "butter",
            "pronunciation": "ngorro-no"
          },
          {
            "target": "maguta",
            "source": "butter (clarified)",
            "pronunciation": "ma-gu-ta"
          },
          {
            "target": "uria",
            "source": "butter milk",
            "pronunciation": "u-ria"
          },
          {
            "target": "mweer",
            "source": "caffre corn",
            "pronunciation": "mweer"
          },
          {
            "target": "mugwatchi",
            "source": "cassava",
            "pronunciation": "mugwatchi"
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
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "mbariki",
            "source": "castor-oil tree",
            "pronunciation": "mba-ri-ki"
          },
          {
            "target": "kurri ambakki",
            "source": "chew (tobacco)",
            "pronunciation": "kurri ambakki"
          },
          {
            "target": "kuruga",
            "source": "cook",
            "pronunciation": "ku-ru-ga"
          },
          {
            "target": "kumea",
            "source": "drink",
            "pronunciation": "ku-mea"
          },
          {
            "target": "kunigurria",
            "source": "eat",
            "pronunciation": "ku-ni-gurria"
          },
          {
            "target": "itumbi, pl. matumbi",
            "source": "egg",
            "pronunciation": "i-tumbi"
          },
          {
            "target": "mutŭ",
            "source": "flour",
            "pronunciation": "mu-tu"
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
    "unitNumber": 10,
    "title": "Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Kikuyu (Gĩkũyũ) built directly from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927).",
    "icon": "PawPrint",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-nature-wildlife-land-sky-water-10",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "hiti",
            "source": "Hyena",
            "pronunciation": "hi-ti"
          },
          {
            "target": "mũgumo (pl. mĩgumo)",
            "source": "Sacred Fig Tree",
            "pronunciation": "mu-gu-mo"
          },
          {
            "target": "thigirriri",
            "source": "ant (small black)",
            "pronunciation": "thi-girri-ri"
          },
          {
            "target": "tharaku",
            "source": "ant (red)",
            "pronunciation": "tha-ra-ku"
          },
          {
            "target": "muthua",
            "source": "ant (white)",
            "pronunciation": "muthua"
          },
          {
            "target": "irõõnga",
            "source": "antelope",
            "pronunciation": "i-roonga"
          },
          {
            "target": "muhu",
            "source": "ashes",
            "pronunciation": "mu-hu"
          },
          {
            "target": "nugu ao ithinwa",
            "source": "baboon",
            "pronunciation": "nu-gu ao ithinwa"
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
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "mugiyo",
            "source": "baobab tree",
            "pronunciation": "mu-gi-yo"
          },
          {
            "target": "kugambu",
            "source": "bark",
            "pronunciation": "ku-gambu"
          },
          {
            "target": "makonni",
            "source": "bark (of tree)",
            "pronunciation": "ma-konni"
          },
          {
            "target": "enjugu",
            "source": "beans (tree)",
            "pronunciation": "enju-gu"
          },
          {
            "target": "njuki",
            "source": "bee",
            "pronunciation": "nju-ki"
          },
          {
            "target": "mbuggi",
            "source": "bell (cow)",
            "pronunciation": "mbuggi"
          },
          {
            "target": "nyoni",
            "source": "bird",
            "pronunciation": "nyo-ni"
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
    "unitNumber": 11,
    "title": "The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Kikuyu (Gĩkũyũ) built directly from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927).",
    "icon": "Heart",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-body-health-anatomy-senses-11",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "nda (ni ya)",
            "source": "It is of (Mombasa contracted copula)",
            "pronunciation": "nda"
          },
          {
            "target": "runyadide",
            "source": "ankle",
            "pronunciation": "runya-di-de"
          },
          {
            "target": "wuoko",
            "source": "arm (the whole)",
            "pronunciation": "wuo-ko"
          },
          {
            "target": "kuwoko",
            "source": "arm (fore)",
            "pronunciation": "ku-wo-ko"
          },
          {
            "target": "kichako",
            "source": "arm (upper)",
            "pronunciation": "kicha-ko"
          },
          {
            "target": "mgongo",
            "source": "back",
            "pronunciation": "mgongo"
          },
          {
            "target": "ihindi",
            "source": "back (small of)",
            "pronunciation": "i-hindi"
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
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "nderu",
            "source": "beard",
            "pronunciation": "nde-ru"
          },
          {
            "target": "sakame",
            "source": "blood",
            "pronunciation": "sa-ka-me"
          },
          {
            "target": "kumirra",
            "source": "blow nose",
            "pronunciation": "ku-mirra"
          },
          {
            "target": "mwiri",
            "source": "body",
            "pronunciation": "mwi-ri"
          },
          {
            "target": "ihuha, pl. mahuha",
            "source": "boil",
            "pronunciation": "i-hu-ha"
          },
          {
            "target": "kutu",
            "source": "Ear",
            "pronunciation": "kutu"
          },
          {
            "target": "ihindi, pl. mahindi",
            "source": "bone",
            "pronunciation": "i-hindi"
          },
          {
            "target": "nyondo",
            "source": "breast",
            "pronunciation": "nyondo"
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
    "unitNumber": 12,
    "title": "Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Kikuyu (Gĩkũyũ) built directly from Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927).",
    "icon": "Compass",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-verbs-grammar-action-verbs-12",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "culturalNote": "Primary historical documentation for Kikuyu (Gĩkũyũ) (Gĩkũyũ) in Hémery (1903), Hinde (1904), McGregor (1904), Routledge (1910), Hobley (1910, 1922), Johnston (1919) & Stevenson (1927) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kiambu, Murang'a, Nyeri.",
        "words": [
          {
            "target": "kwaria (-aria) / kuuga",
            "source": "Speak",
            "pronunciation": "kwa-ria / kuu-ga"
          },
          {
            "target": "kũkoma (-koma)",
            "source": "Sleep",
            "pronunciation": "ku-ko-ma"
          },
          {
            "target": "gũthiĩ (-thiĩ)",
            "source": "Go",
            "pronunciation": "guthii"
          },
          {
            "target": "kũnyua (-nyua)",
            "source": "Drink",
            "pronunciation": "kunyua"
          },
          {
            "target": "kũrĩa (-rĩa)",
            "source": "Eat",
            "pronunciation": "ku-ria"
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
    "id": "kikuyu-unit-13",
    "unitNumber": 13,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Kikuyu (Gĩkũyũ) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-pd-corpus-13-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Kikuyu (Gĩkũyũ) headwords and dialect forms extracted from primary public-domain monographs.",
        "words": [
          {
            "target": "riika (pl. mariika)",
            "source": "Age-grade / initiation generation",
            "pronunciation": "rii-ka"
          },
          {
            "target": "ituĩka",
            "source": "Generational transfer of governance ceremony",
            "pronunciation": "i-tui-ka"
          },
          {
            "target": "thahu",
            "source": "Ritual impurity / ceremonial curse",
            "pronunciation": "tha-hu"
          },
          {
            "target": "gũtahĩkia",
            "source": "To purify ceremonially from thahu",
            "pronunciation": "gu-ta-hi-kia"
          },
          {
            "target": "thengira",
            "source": "Unmarried men's bachelor hut / council hut",
            "pronunciation": "thengi-ra"
          },
          {
            "target": "rũkwarũ",
            "source": "Goat-skin wrist/waist strip of ceremonial peace",
            "pronunciation": "rukwa-ru"
          },
          {
            "target": "rũenji / rũoro",
            "source": "Traditional razor / Cattle-branding iron knife",
            "pronunciation": "ruenji / ruo-ro"
          },
          {
            "target": "mũgũnda / gĩthaka",
            "source": "Cultivated garden farm / Uncultivated bushland",
            "pronunciation": "mu-gunda / githa-ka"
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
        "words": [
          {
            "target": "gũtũma mbeca na thimũ",
            "source": "To send money via mobile phone (M-Pesa)",
            "pronunciation": "gu-tu-ma mbe-ca na thi-mu"
          },
          {
            "target": "ũrĩmi wa mĩmera na mahiũ",
            "source": "Crop farming and livestock husbandry",
            "pronunciation": "u-ri-mi wa mi-me-ra na ma-hiu"
          },
          {
            "target": "mbeũ njega cia mbembe",
            "source": "Certified / high-yield maize seeds",
            "pronunciation": "mbeu nje-ga cia mbembe"
          },
          {
            "target": "thibitarĩ / nyũmba ya ũrigiti",
            "source": "Hospital / health dispensary",
            "pronunciation": "thi-bi-ta-ri / nyumba ya u-ri-gi-ti"
          },
          {
            "target": "gwĩciria / kũmenya",
            "source": "To think / To know",
            "pronunciation": "gwi-ci-ria / ku-menya"
          },
          {
            "target": "gũtindĩka / kũgucia",
            "source": "To push / To pull",
            "pronunciation": "gu-tindi-ka / ku-gu-cia"
          },
          {
            "target": "kũatũra / gũtinia",
            "source": "To split wood / To cut",
            "pronunciation": "kua-tu-ra / gu-ti-nia"
          },
          {
            "target": "kũnyoroka / kũrũnga",
            "source": "To be smooth / To be straight",
            "pronunciation": "kunyo-ro-ka / ku-runga"
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
    "id": "kikuyu-unit-14",
    "unitNumber": 14,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Kikuyu (Gĩkũyũ) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-open-dataset-14-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Baby",
        "description": "Learn core Kikuyu (Gĩkũyũ) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "words": [
          {
            "target": "Ku-Tahikia",
            "source": "To purify. Ku is the infinitive prefix common to all verbs",
            "pronunciation": "ku-tahikia"
          },
          {
            "target": "Ruoro",
            "source": "Knife used for branding cattle",
            "pronunciation": "ruo-ro"
          },
          {
            "target": "Ruenji",
            "source": "A razor",
            "pronunciation": "ruenji"
          },
          {
            "target": "Rika",
            "source": "Generation—age grade",
            "pronunciation": "ri-ka"
          },
          {
            "target": "Njohi",
            "source": "Native beer, usually made from sugar cane",
            "pronunciation": "njo-hi"
          },
          {
            "target": "Ngunga",
            "source": "Caterpillars",
            "pronunciation": "ngunga"
          },
          {
            "target": "Ndorume",
            "source": "A ram, a favourite form of sacrifice",
            "pronunciation": "ndo-ru-me"
          },
          {
            "target": "Ngoma",
            "source": "Ancestral spirit",
            "pronunciation": "ngo-ma"
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
        "words": [
          {
            "target": "Muburi",
            "source": "Goat",
            "pronunciation": "mu-bu-ri"
          },
          {
            "target": "Murogi",
            "source": "Medicine man who deals in black magic",
            "pronunciation": "mu-ro-gi"
          },
          {
            "target": "Mugumu",
            "source": "Sacred fig tree, often called muti wa Engai",
            "pronunciation": "mu-gu-mu"
          },
          {
            "target": "Kiama",
            "source": "Council of elders",
            "pronunciation": "kia-ma"
          },
          {
            "target": "Kita",
            "source": "The power of the evil eye",
            "pronunciation": "ki-ta"
          },
          {
            "target": "Kihe",
            "source": "An uncircumcised boy",
            "pronunciation": "ki-he"
          },
          {
            "target": "Kithangaona",
            "source": "Sacred place",
            "pronunciation": "kithangao-na"
          },
          {
            "target": "Ichua",
            "source": "A sacrificial fire",
            "pronunciation": "ichua"
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
  },
  {
    "id": "kikuyu-unit-15",
    "unitNumber": 15,
    "title": "Hémery English-Kikuyu Hand-Book — 9 Noun Classes,",
    "description": "Master the complete grammar, 3-way demonstratives, Kohora verb paradigm, 5 derived verb stems, particles (pp. 13–14), and 5-part Phrase-Book (Usual, Servants & Meals, Village Visit, Working, In Caravan) from Rev. Fr. A. Hémery's 1903 English-Kikuyu Hand-Book.",
    "icon": "BookOpen",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-hemery-1903-grammar-particles-13-1",
        "title": "9 Noun Classes, 3-Way Demonstratives, Kohora Conjugation &",
        "icon": "Sparkles",
        "description": "Study Hémery's (1903, pp. 1–14) 9 noun classes, ka-/to- diminutives, ke- augmentatives, 3-way demonstratives, full Kohora paradigm, and enclitic particles.",
        "words": [
          {
            "target": "Cl. VI Letwa → Maletwa, Ondo → Maondo, Taama → Mataama",
            "source": "Name, cause, cloth (Ø → ma-)",
            "pronunciation": "cl-vi-letwa-maletwa"
          },
          {
            "target": "Kangondu, Kamunyu, Kangombe • Tomae, Toirio • Kengombe, Kemunyu",
            "source": "Small sheep, little salt, little ox (ka- dimin.)",
            "pronunciation": "ka-ngo-ndu / ka-mu-nyu / to-ma-e / to-i-ri-o / ke-ngo-mbe"
          },
          {
            "target": "Mundu oyo / olya / oshio",
            "source": "This (near) / that (distant) / that (spoken of beforehand) man, thing, and stone",
            "pronunciation": "o-yo o-lya o-shi-o / ge-ke ke-lya ke-o / re-re re-lya re-o"
          },
          {
            "target": "Ndahora",
            "source": "Neg. Ndihora",
            "pronunciation": "ndahora"
          },
          {
            "target": "Ne ngohora",
            "source": "Neg. Ndikohora",
            "pronunciation": "ne-ngohora"
          },
          {
            "target": "Tiguo uhoro",
            "source": "pl. tigwoni uhoro",
            "pronunciation": "tiguo-uhoro"
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
                "left": "Tiguo uhoro (pl. tigwoni uhoro)",
                "right": "Good-bye, farewell (sg. & pl.)"
              }
            ]
          }
        ]
      },
      {
        "id": "kikuyu-hemery-1903-phrasebook-13-2",
        "title": "Phrase-Book Sections I",
        "icon": "MessageCircle",
        "description": "Practice authentic 1903 Kikuyu dialogues from Hémery's 5-part Phrase-Book (Book pp. 77–87): Usual, Servants & Meals, A Visit to a Village, Working, and In Caravan.",
        "words": [
          {
            "target": "Waetagwa-tya? • We moona-ko? • We huma-ko? • Wasie-ko?",
            "source": "What is your name?",
            "pronunciation": "wa-e-ta-gwa-tya / we moo-na-ko / we hu-ma-ko / wa-si-e-ko"
          },
          {
            "target": "Okolya saa shiigana?",
            "source": "When have you your meals? — About 6 a.m.",
            "pronunciation": "o-ko-lya saa shi-i-ga-na / ta saa ku-mi na i-ge-re ro-chi-ne"
          },
          {
            "target": "Kozondeka-tya ucholo?",
            "source": "How do you prepare the gruel?",
            "pronunciation": "kozondeka-tya-ucholo"
          },
          {
            "target": "Ndena kehuti",
            "source": "I have fever",
            "pronunciation": "ndena-kehuti"
          },
          {
            "target": "Akui magana atano",
            "source": "Five hundred porters",
            "pronunciation": "akui-magana-atano"
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
  },
  {
    "id": "kikuyu-unit-16",
    "unitNumber": 16,
    "title": "McGregor English-Kikuyu Vocabulary — Orthography,",
    "description": "Master the Kabeti (Fort Smith) orthography (th for s/z, ng' vs. ng'g), plural bracket conventions, suppletive kinship, 7-day time sequence, agricultural seasons (Kathano, Kehu, Njahi, Mweri, Mohea), customary law (Chira, Magambo, Muma, Oramati), and conversational idioms from Rev. A. W. McGregor's 1904 English-Kikuyu Vocabulary.",
    "icon": "BookOpen",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-mcgregor-1904-orthography-kinship-time-14-1",
        "title": "Kabeti Orthography (Th, Ng' vs. Ng'g), Suppletive Kinship, 7-Day",
        "icon": "Sparkles",
        "description": "Study McGregor's (1904, pp. iii–iv, 5–192) Fort Smith (Kabeti) phonological rules, plural bracket system, kinship possessives, 7-day sequence, and seasonal calendar.",
        "words": [
          {
            "target": "Mwetereri",
            "source": "Etereri",
            "pronunciation": "mwetereri"
          },
          {
            "target": "Baba / Thoguo / Ithi (pl. Maithi)",
            "source": "My / your / his-her father (pl. fathers)",
            "pronunciation": "baba"
          },
          {
            "target": "Iyo → Ira → Reu / Omothi → Rochio → Oke → Matukwatatu → Matukwana",
            "source": "Day before yesterday → Yesterday → To-day → To-morrow → Day after to-morrow → 2 days",
            "pronunciation": "iyo-ira-reu"
          },
          {
            "target": "Kathano (Mwaka wa heho) & Mwaka wa kehu",
            "source": "Greater rainy season (winter) & lesser rainy season",
            "pronunciation": "kathano-mwaka-wa-kehu"
          },
          {
            "target": "Kabeti",
            "source": "Fort Smith",
            "pronunciation": "kabeti"
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
            "type": "match_pairs",
            "prompt": "Match each Kikuyu seasonal or temporal term from McGregor (1904, pp. 114, 142, 154, 191) with its English meaning:",
            "correctAnswer": "Kathano vs. Mwaka wa kehu: Greater rainy season (winter) vs. lesser rainy season (p. 142)",
            "pairs": [
              {
                "left": "Kathano vs. Mwaka wa kehu",
                "right": "Greater rainy season (winter) vs. lesser rainy season (p. 142)"
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
        "title": "Customary Law (Chira, Magambo, Muma, Oramati), Ethnomedicine &",
        "icon": "MessageCircle",
        "description": "Learn McGregor's (1904, pp. 6–192) terminology for Kikuyu courts, murder composition, ordeal oaths, peacemaking, ritual, and everyday questions.",
        "words": [
          {
            "target": "Chira",
            "source": "Ma-",
            "pronunciation": "chira"
          },
          {
            "target": "Muchiri",
            "source": "A-",
            "pronunciation": "muchiri"
          },
          {
            "target": "Muramati (A-) & Oramati",
            "source": "Heir/inheritor & birthright/inheritance",
            "pronunciation": "muramati-oramati"
          },
          {
            "target": "Ngai (Makai) & Ngai angienda",
            "source": "God & 'If God wills (D.V.)'",
            "pronunciation": "ngai-ngai-angienda"
          },
          {
            "target": "Mundu mugo (A-) & Kahiyu ka mundu mugo (To-)",
            "source": "Doctor/medicine-man & lancet",
            "pronunciation": "mu-ndu mu-go / mu-tha-i-ga wa hi-ngu-ra-nda / mu-ru-tu-tu"
          },
          {
            "target": "Thingira",
            "source": "Ma-",
            "pronunciation": "thingira"
          },
          {
            "target": "Mungu",
            "source": "Miungu",
            "pronunciation": "mungu"
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
      },
      {
        "id": "kikuyu-mcgregor-1904-provenance-grammar-editorial-14-3",
        "title": "Stanford Provenance, 10 Noun Classes, Pronouns/Enclitics & 1904",
        "icon": "BookOpen",
        "description": "Examine the physical provenance of the Stanford University Libraries copy (PL 8379.4 .M3 C.1), the 10 noun class prefix pairings, pronominal/interrogative enclitics, and the 3 printing gaps & 9 errata of the 1904 SPCK edition.",
        "culturalNote": "Compiled by Rev. A. W. McGregor at Fort Smith (native name Kabeti) in 1901–1902 (Preface signed London, May 1903), this 192-page volume is the first printed vocabulary of the Kikuyu language, documenting the speech of 200,000–300,000 Agĩkũyũ from the Uganda Railway (miles 326–360) to Mount Kenia (Kirinyaga / Kilinyatha / Kireira, 4,000–18,000 ft).",
        "words": [
          {
            "target": "Fort Smith",
            "source": "Kabeti, 1901–1902",
            "pronunciation": "fort-smith"
          },
          {
            "target": "Uganda Railway",
            "source": "miles 326–360",
            "pronunciation": "uganda-railway"
          },
          {
            "target": "Nie / Nie mweni / Nie nyiki",
            "source": "Personal, Reflexive & Exclusive ('Only we') Pronouns and Possessive Home Locatives",
            "pronunciation": "nie"
          },
          {
            "target": "No? Niweo?",
            "source": "Who? Who are you?",
            "pronunciation": "no-niweo"
          },
          {
            "target": "ithanwa (pl. mathanwa)",
            "source": "Axe",
            "pronunciation": "i-tha-nwa"
          }
        ],
        "sentences": [
          {
            "target": "Niweo? — Nie nyiki (Nie mweni). — Meha? — Goro uriko?",
            "source": "Who are you? — I alone (I myself). — Where are they? — What price (worth)? (McGregor 1904, Book pp. 14, 186–190)"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-17",
    "unitNumber": 17,
    "title": "Routledge 'With a Prehistoric People: The Akikúyu of",
    "description": "Master the historical, technical, legal, musical, ritual, and narrative vocabulary recorded by W. Scoresby & Katherine Routledge across Fort Hall and Nyeri (1902–1910, pp. i–xxxii, 1–392, Plates I–CXXXVI).",
    "icon": "BookOpen",
    "color": "#10B981",
    "skills": [
      {
        "id": "kikuyu-routledge-1910-history-clans-crafts-15-1",
        "title": "10 Ages, 17 Initiation Years, 13 Clans, Metallurgy, 6-Step",
        "icon": "Sparkles",
        "description": "Study the 10 generation ages, 17 annual initiation cohorts, 13 i-ri-ka clans, 17 age-stage terms, iron smelting, cold wire-drawing, 6-step chain-making, 2-stage pottery, and 30-item Wa-wer'-u market price list in Routledge (1910, pp. 1–115).",
        "words": [
          {
            "target": "Man-jí-ri (Mam'-ba & N'jí-ri) → Man-dó-ti → Chi-éra → Masaí →",
            "source": "The 10 Ages Since the Creation of the World",
            "pronunciation": "man-jí-ri-man-dó-ti-chi-éra-masaí"
          },
          {
            "target": "1891 Ngan'do",
            "source": "Key annual circumcision cohorts among the 17 named years",
            "pronunciation": "1891-ngan'do"
          },
          {
            "target": "A'si (A-ki-e-ki / N'dor-ó-bo) & A-gum'-ba (A-mai-tho ma chi-a-na)",
            "source": "Forest elephant hunters (30-goat clearing sale) & 4 ft 6 in. obsidian pit-dwellers",
            "pronunciation": "a'si-a-gum'-ba"
          },
          {
            "target": "mu-san'-ga",
            "source": "Washed magnetite ore",
            "pronunciation": "mu-san'-ga"
          },
          {
            "target": "ku-i'-nya ki-shan'-di",
            "source": "47 & 38 symbols",
            "pronunciation": "ku-i'-nya-ki-shan'-di"
          }
        ],
        "sentences": [
          {
            "target": "Ku-nor'-a → Ku-ta-nu'-ka → Ku-o-go'-sa (from Mu-gi'-o, Mon-du'-e, Mu-ke'-o, Mu-lin'-da n'gu-ru'-e & Mu-gu'-mu).",
            "source": "Peel bark → Chew bark → Roll twine on the thigh (3-step string-making from 5 fibrous barks, Routledge 1910, pp. 77–79)."
          }
        ]
      },
      {
        "id": "kikuyu-routledge-1910-law-religion-folklore-15-2",
        "title": "Second Birth, 12 Dances, Ki-á-ma & N'já-ma Governance, 9 Trials,",
        "icon": "MessageCircle",
        "description": "Master the social rites, 12 classified dances, 3 elder grades, 9 dated court trials, 6 Mu-ma ordeals, N'gaí sacrifice, Ai-twi'-ka snake worship, Mun'-du Mu-gu divination, 29 Thá-hu causes, 14-hole Ki-tha-si stone, and 13 Ro-gá-nu folktales in Routledge (1910, pp. 117–333).",
        "words": [
          {
            "target": "ko-chi-a-rú-o ke'-ri / ko-chi-a-re-i-rú-o m'bór-i",
            "source": "Rite of Second Birth",
            "pronunciation": "ko-chi-a-rú-o-ke'-ri"
          },
          {
            "target": "Ke-boí-i-a, N'goi-í-sa, Mam-bú-ra (boys)",
            "source": "All 12 classified dances across 4 categories + the Gúra River harvest dance before",
            "pronunciation": "ke-boí-i-a"
          },
          {
            "target": "Mo-ran'-ja / N'dun'-du / Ke-thi-ga → Ki-á-ma → N'já-ma",
            "source": "Three official elder grades, ceremonial leaf-bunch & 3 staff woods, eagle feather &",
            "pronunciation": "mo-ran'-ja"
          },
          {
            "target": "N'gaí / Mwi-nin-ya-ga",
            "source": "Supreme Creator ('Possessor of Whiteness'), 8-shrub fig-tree sacrifice & responses",
            "pronunciation": "n'gaí"
          },
          {
            "target": "Mun'-du Mu-gu",
            "source": "Medicine-Man's 5 gourds & divination gourd",
            "pronunciation": "mun'-du-mu-gu"
          }
        ],
        "sentences": [
          {
            "target": "O N'gaí! Mwi-nin-ya-ga! — N'ga-na! Sa-i! Sa-i!",
            "source": "O God! Possessor of Whiteness! — So be it! Hear, hear!"
          }
        ]
      },
      {
        "id": "kikuyu-hohnel-1894-vol1-lesson",
        "title": "Höhnel: 1887 Traverse of 68 Ravines, Kuhoria Tatha & Mathira",
        "icon": "Mountain",
        "description": "Explore Lieut. Ludwig von Höhnel's (1894, Vol. I) complete record of the first European traverse of Kikuyuland (Aug. 27–Oct. 8, 1887): Ngongo Bagas blood-brotherhood with Miani, Karanja, and Waiyaki, the 68 parallel ravines from Nairobi to Thegu, ridge peace ceremonies ('Mirema! — Thayu! Thayu!'), Aturi smiths and 7–8 ft. muro digging-sticks, and the Oct. 11, 1887 ascent of Mount Kenia (Donyo Egere) to 15,355 ft.",
        "culturalNote": "On Sept. 16, 1887 in northern Mathira (p. 298), four medicine-men concluded a solemn githathi peace covenant by breaking the legs of a white ram and a black goat with clubs and slitting them longitudinally while Count Teleki, Jumbe Kimemeta, and six Kikuyu chiefs stepped across the bleeding carcasses seven times swearing eternal peace.",
        "words": [
          {
            "target": "kuringa githathi",
            "source": "Aug. 23 Ngongo Bagas & Sept. 16 Mathira 7-step covenant, pp. 221, 298",
            "pronunciation": "kuringa-githathi"
          },
          {
            "target": "rugongo",
            "source": "pl. migongo",
            "pronunciation": "rugongo"
          },
          {
            "target": "Aturi smiths, ruhiu (spatulate sword), kahiu (knife), kiondo (string",
            "source": "Kikuyu Metallurgy, Weapons, Crafts, Musical Instruments & Communal Digging-Poles",
            "pronunciation": "aturi-smiths"
          },
          {
            "target": "Kĩrĩnyaga",
            "source": "Mount Kenya",
            "pronunciation": "ki-ri-nya-ga"
          }
        ],
        "sentences": [
          {
            "target": "U-u-u-ui! Ngai! — Mirema! Mirema! — Thayu! Thayu!",
            "source": "Exclamation of wonder ('O God!'), peaceful greeting ('Mirema!'), and the peace-sprinkling chorus ('Peace! Peace!') recorded across Kikuyuland in"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-18",
    "unitNumber": 18,
    "title": "Ethnobiology, Botanicals & Modern Gĩkũyũ",
    "description": "Gĩkũyũ highland trees, wildlife, farming, and everyday vocabulary from Tsammalex, Kaikki.org, Google SMOL/GATITOS, CGIAR, and Thiomi",
    "icon": "🌳",
    "color": "#16A34A",
    "skills": [
      {
        "id": "kikuyu-open-skill-1",
        "title": "Highland Flora, Fauna & Daily Life",
        "icon": "🌿",
        "description": "Authentic Gĩkũyũ botanicals, livestock terms, and everyday nouns",
        "grammarTip": "Class 3/4 trees and plants in Gĩkũyũ take the singular prefix mũ- and plural prefix mĩ- (e.g., mũtamaiyũ 'wild olive', mũringa 'cordia tree').",
        "culturalNote": "Sourced from Tsammalex Kikuyu Ethnobiology (CC-BY-4.0), Kaikki.org Kikuyu Wiktionary (CC-BY-SA-4.0), Google SMOL/GATITOS (CC-BY-4.0), CGIAR (Apache-2.0), and The Thiomi Dataset (CC-BY-4.0).",
        "words": [
          {
            "target": "mũgũnda",
            "source": "Cultivated field or garden",
            "pronunciation": "mu-gu-nda"
          },
          {
            "target": "ũrĩmi",
            "source": "Agriculture / farming",
            "pronunciation": "u-ri-mi"
          },
          {
            "target": "mũrĩmi",
            "source": "Farmer or cultivator",
            "pronunciation": "mu-ri-mi"
          },
          {
            "target": "mũrutani",
            "source": "Teacher or instructor",
            "pronunciation": "mu-ru-ta-ni"
          },
          {
            "target": "ngwacĩ",
            "source": "Sweet potato",
            "pronunciation": "ngwa-ci"
          },
          {
            "target": "mũgĩmbĩ",
            "source": "Finger millet",
            "pronunciation": "mu-gi-mbi"
          },
          {
            "target": "mũtamaiyũ",
            "source": "Wild brown olive tree",
            "pronunciation": "mu-ta-mai-yu"
          },
          {
            "target": "mũthaitĩ",
            "source": "East African camphorwood",
            "pronunciation": "mu-thai-ti"
          },
          {
            "target": "mũthĩga",
            "source": "East African greenheart medicinal tree",
            "pronunciation": "mu-thi-ga"
          },
          {
            "target": "ndereti",
            "source": "Conversation or dialogue",
            "pronunciation": "nde-re-ti"
          },
          {
            "target": "ũrata",
            "source": "Friendship",
            "pronunciation": "u-ra-ta"
          },
          {
            "target": "ririkana",
            "source": "To remember",
            "pronunciation": "ri-ri-ka-na"
          }
        ],
        "sentences": [
          {
            "target": "Kĩara kĩmwe gĩtiũragaga ndaa.",
            "source": "One finger cannot kill a louse (unity proverb)."
          },
          {
            "target": "Kamũingĩ koyaga ndĩrĩ.",
            "source": "A small group together lifts the heavy mortar."
          }
        ]
      },
      {
        "id": "kikuyu-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Kikuyu (Gĩkũyũ) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "The Thiomi Dataset (CC-BY-4.0), Google SMOL/GATITOS (en_kik, CC-BY-4.0), African Next Voices Kenya (5 Gikuyu dialects, CC-BY-4.0), CGIAR Kikuyu–English (Apache-2.0), LughaGen (CC-BY-SA-4.0), Mich-Seth Owusu Emotion & Parallel Corpora (MIT/CC-BY-4.0), CLDF Tsammalex & ASJP v20 (CC-BY-4.0), Kaikki.org (CC-BY-SA-4.0) & Public Domain & Peer-Reviewed Lexicons (Höhnel 1894, Hémery 1903, Hinde 1904, McGregor 1904/1905, Routledge 1910, Hobley 1910/1922, Barlow 1914/1951, Dundas 1915, Werner 1915, Johnston 1919, Beech 1920 & Kencorpus/ANV 2022–2026)",
        "words": [
                  {
                            "target": "Wĩ mwega?",
                            "source": "Hello",
                            "pronunciation": "wee mweh-gah / nee-ah-tee-ah"
                  },
                  {
                            "target": "thayũ",
                            "source": "Peace",
                            "pronunciation": "tha-yu"
                  },
                  {
                            "target": "Koonya wega",
                            "source": "Thank",
                            "pronunciation": "koonya we-ga"
                  },
                  {
                            "target": "Komindja",
                            "source": "Bless",
                            "pronunciation": "ko-mindja"
                  },
                  {
                            "target": "kuenda",
                            "source": "Please",
                            "pronunciation": "kuenda"
                  },
                  {
                            "target": "Koohera",
                            "source": "Pardon",
                            "pronunciation": "koo-he-ra"
                  },
                  {
                            "target": "Kogeizia",
                            "source": "Salute",
                            "pronunciation": "ko-gei-zia"
                  },
                  {
                            "target": "-a kikenni",
                            "source": "Welcome",
                            "pronunciation": "a ki-kenni"
                  },
                  {
                            "target": "Tiguoni uhoro",
                            "source": "Farewell",
                            "pronunciation": "ti-guo-ni u-ho-ro"
                  },
                  {
                            "target": "Kegaithio",
                            "source": "Greeting",
                            "pronunciation": "kegaithio"
                  }
        ],
        "sentences": [
                  {
                            "target": "Wĩ mwega?",
                            "source": "Hello"
                  },
                  {
                            "target": "Koonya wega",
                            "source": "Thank"
                  },
                  {
                            "target": "Wega. Uhoro",
                            "source": "Peace"
                  },
                  {
                            "target": "-a kikenni",
                            "source": "Welcome"
                  },
                  {
                            "target": "Tiguoni uhoro",
                            "source": "Farewell"
                  },
                  {
                            "target": "Nĩ wega",
                            "source": "Thank you"
                  },
                  {
                            "target": "Kotongia. Kotongio",
                            "source": "Bless, to"
                  },
                  {
                            "target": "Kuitika ni wega. Kohoya",
                            "source": "Thank, to"
                  }
        ]
},
      {
        "id": "kikuyu-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Kikuyu (Gĩkũyũ) sentences for healthcare, transport, and community safety.",
        "culturalNote": "The Thiomi Dataset (CC-BY-4.0), Google SMOL/GATITOS (en_kik, CC-BY-4.0), African Next Voices Kenya (5 Gikuyu dialects, CC-BY-4.0), CGIAR Kikuyu–English (Apache-2.0), LughaGen (CC-BY-SA-4.0), Mich-Seth Owusu Emotion & Parallel Corpora (MIT/CC-BY-4.0), CLDF Tsammalex & ASJP v20 (CC-BY-4.0), Kaikki.org (CC-BY-SA-4.0) & Public Domain & Peer-Reviewed Lexicons (Höhnel 1894, Hémery 1903, Hinde 1904, McGregor 1904/1905, Routledge 1910, Hobley 1910/1922, Barlow 1914/1951, Dundas 1915, Werner 1915, Johnston 1919, Beech 1920 & Kencorpus/ANV 2022–2026)",
        "words": [
                  {
                            "target": "Ithathatũ",
                            "source": "Six",
                            "pronunciation": "ithathatu"
                  },
                  {
                            "target": "imue",
                            "source": "One",
                            "pronunciation": "i-mue"
                  },
                  {
                            "target": "ikumi",
                            "source": "Ten",
                            "pronunciation": "i-ku-mi"
                  },
                  {
                            "target": "igiri",
                            "source": "Two",
                            "pronunciation": "i-gi-ri"
                  },
                  {
                            "target": "andu ere",
                            "source": "Both",
                            "pronunciation": "andu ere"
                  },
                  {
                            "target": "ithanu",
                            "source": "Five",
                            "pronunciation": "itha-nu"
                  },
                  {
                            "target": "inya",
                            "source": "Four",
                            "pronunciation": "inya"
                  },
                  {
                            "target": "kishuinji",
                            "source": "Half",
                            "pronunciation": "kishuinji"
                  },
                  {
                            "target": "ikenda",
                            "source": "Nine",
                            "pronunciation": "i-kenda"
                  },
                  {
                            "target": "irrimue",
                            "source": "Once",
                            "pronunciation": "irri-mue"
                  }
        ],
        "sentences": [
                  {
                            "target": "Igiri. Eri",
                            "source": "Two"
                  },
                  {
                            "target": "tandātū, I-tha-ndātū",
                            "source": "Six"
                  },
                  {
                            "target": "andu ere",
                            "source": "Both"
                  },
                  {
                            "target": "kishuinji, kechuje or etigia",
                            "source": "Half"
                  },
                  {
                            "target": "Inna. Inya",
                            "source": "Four"
                  },
                  {
                            "target": "tāno, I-thāno",
                            "source": "Five"
                  },
                  {
                            "target": "mirongo ithanu",
                            "source": "Fifty"
                  },
                  {
                            "target": "ikinya or kuambirrira",
                            "source": "First"
                  }
        ]
}
    ]
  }
];
