// ============================================================
// Turkana (Ng'aturukana) Language Course Configuration & Units
// Based on "Turkana Grammatical Notes and Vocabulary"
// by Juxon Barton (Journal of the Royal Anthropological Institute, 1921 — Public Domain)
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const TURKANA_CONFIG: LanguageConfig = {
  "id": "turkana",
  "name": "Turkana",
  "nativeName": "Ng'aturukana",
  "family": "Nilotic",
  "counties": [
    "Turkana"
  ],
  "speakers": "1.1M",
  "speechLocale": "",
  "description": "An Eastern Nilotic (Plains Nilotic) language spoken across the vast savannahs and Rift Valley of Turkana County in northwestern Kenya.",
  "color": "#00897B",
  "sources": [
    "turkana-grammar"
  ]
};

export const TURKANA_UNITS: CourseUnit[] = [
  {
    "id": "turkana-unit-1-greetings",
    "title": "Unit 1: Greetings & Farewells",
    "description": "Comprehensive Turkana curriculum for Greetings & Farewells, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "turkana-exp-greetings",
        "title": "Greetings & Farewells (Part 1)",
        "icon": "Hospital",
        "description": "Master Turkana greetings & farewells vocabulary and expressions from verified historical sources.",
        "tips": "Traditional Turkana pastoral greetings invoke 'Mata!' (Health!) across family, cattle ('Mata ng'atuk'), homestead ('Mata ouwi'), children ('Mata ng'idwi'), and community gatherings ('Mata ariama').",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Mata",
            "source": "Health (Pastoral greeting enquiry)",
            "pronunciation": "ma-ta",
            "hint": "Traditional pastoral greeting inquiry between adults (lit. 'health'). Response: 'Ii mata'. (Barton 1921)"
          },
          {
            "target": "Ii mata",
            "source": "Health to you (Greeting reply)",
            "pronunciation": "ii ma-ta",
            "hint": "Traditional response acknowledging health. (Barton 1921)"
          },
          {
            "target": "Mata ng'atuk",
            "source": "Health to your cattle",
            "pronunciation": "ma-ta ng'a-tuk",
            "hint": "Pastoral greeting inquiring after cattle herds. Response: 'Mata ouwi' (health to your village). (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mata\" in Turkana?",
            "correctAnswer": "Health (Pastoral greeting enquiry)",
            "options": [
              "Health to you (Greeting reply)",
              "Health to your cattle",
              "Health (Pastoral greeting enquiry)"
            ],
            "hint": "Traditional pastoral greeting inquiry between adults (lit. 'health'). Response: 'Ii mata'. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ii mata\" in Turkana?",
            "correctAnswer": "Health to you (Greeting reply)",
            "options": [
              "Health to your cattle",
              "Health to you (Greeting reply)",
              "Health (Pastoral greeting enquiry)"
            ],
            "hint": "Traditional response acknowledging health. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mata ng'atuk\" in Turkana?",
            "correctAnswer": "Health to your cattle",
            "options": [
              "Health to your cattle",
              "Health (Pastoral greeting enquiry)",
              "Health to you (Greeting reply)"
            ],
            "hint": "Pastoral greeting inquiring after cattle herds. Response: 'Mata ouwi' (health to your village). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Health (Pastoral greeting enquiry)\" in Turkana?",
            "correctAnswer": "Mata",
            "options": [
              "Mata ng'atuk",
              "Mata",
              "Ii mata"
            ],
            "hint": "mah-tah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Health to you (Greeting reply)\" in Turkana?",
            "correctAnswer": "Ii mata",
            "options": [
              "Ii mata",
              "Mata",
              "Mata ng'atuk"
            ],
            "hint": "ee-ee mah-tah"
          }
        ]
      },
      {
        "id": "turkana-exp-greetings-2",
        "title": "Greetings & Farewells (Part 2)",
        "icon": "Handshake",
        "description": "Master Turkana greetings & farewells vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Greetings & Farewells, pay special attention to pronunciation and morphological prefixes/suffixes: 'Mata ouwi' (Health to your village), 'Mata ng'idwi' (Health to your children), 'Mata ariama' (Health to our meetings), 'Mata ng'ebarin' (Health to your property).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Mata ouwi",
            "source": "Health to your village",
            "pronunciation": "ma-ta ou-wi",
            "hint": "Pastoral blessing wishing wellbeing upon the homestead and kraal. (Barton 1921)"
          },
          {
            "target": "Mata ng'idwi",
            "source": "Health to your children",
            "pronunciation": "ma-ta ng'idwi",
            "hint": "Pastoral blessing for family and children. Response: 'Mata ariama'. (Barton 1921)"
          },
          {
            "target": "Mata ariama",
            "source": "Health to our meetings",
            "pronunciation": "ma-ta a-ria-ma",
            "hint": "Greeting reply wishing health and prosperity to repeated gatherings and fellowship. (Barton 1921)"
          },
          {
            "target": "Mata ng'ebarin",
            "source": "Health to your property",
            "pronunciation": "ma-ta ng'e-ba-rin",
            "hint": "Greeting inquiring after livestock wealth and possessions. Response: 'Mata ng'abero'. (Barton 1921)"
          },
          {
            "target": "Mata ng'abero",
            "source": "Health to your women",
            "pronunciation": "ma-ta ng'a-be-ro",
            "hint": "Greeting response wishing peace and health to household women. (Barton 1921)"
          },
          {
            "target": "Mata ejik",
            "source": "Complete health",
            "pronunciation": "ma-ta e-jik",
            "hint": "Spoken together by both parties at the close of greetings; signifies total wellbeing and absolute peace. (Barton 1921)"
          },
          {
            "target": "Na? / Baiya",
            "source": "Traditional salutation",
            "pronunciation": "na / bai-ya",
            "hint": "Ancient reciprocal salutation repeated three times between speakers. (Barton 1921)"
          },
          {
            "target": "Tolot-ion / Ejok alothi",
            "source": "Farewell exchange",
            "pronunciation": "tolot-ion / e-jok a-lothi",
            "hint": "'Go thou' answered by 'Good, I go'. (Barton 1921)"
          },
          {
            "target": "Abe / Ii",
            "source": "Goodbye (Parting)",
            "pronunciation": "abe / ii",
            "hint": "Simple parting farewell 'Abe' answered with affirmative 'Ii'. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mata ouwi\" mean in English?",
            "correctAnswer": "Health to your village",
            "options": [
              "Health to your children",
              "Health to our meetings",
              "Health to your property",
              "Health to your village"
            ],
            "hint": "Pastoral blessing wishing wellbeing upon the homestead and kraal. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mata ng'idwi\" mean in English?",
            "correctAnswer": "Health to your children",
            "options": [
              "Health to our meetings",
              "Health to your property",
              "Health to your children",
              "Health to your village"
            ],
            "hint": "Pastoral blessing for family and children. Response: 'Mata ariama'. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mata ariama\" mean in English?",
            "correctAnswer": "Health to our meetings",
            "options": [
              "Health to your property",
              "Health to our meetings",
              "Health to your village",
              "Health to your children"
            ],
            "hint": "Greeting reply wishing health and prosperity to repeated gatherings and fellowship. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Health to our meetings\" in Turkana?",
            "correctAnswer": "Mata ariama",
            "options": [
              "Mata ariama",
              "Mata ouwi",
              "Mata ng'idwi",
              "Mata ng'ebarin"
            ],
            "hint": "mah-tah ah-ree-ah-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Health to your property\" in Turkana?",
            "correctAnswer": "Mata ng'ebarin",
            "options": [
              "Mata ouwi",
              "Mata ng'idwi",
              "Mata ariama",
              "Mata ng'ebarin"
            ],
            "hint": "mah-tah ngeh-bah-reen"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Health to your women\" in Turkana?",
            "correctAnswer": "Mata ng'abero",
            "options": [
              "Mata ng'idwi",
              "Mata ariama",
              "Mata ng'abero",
              "Mata ouwi"
            ],
            "hint": "mah-tah ngah-beh-roh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Mata ouwi: Health to your village, Mata ng'idwi: Health to your children, Mata ariama: Health to our meetings, Mata ng'ebarin: Health to your property",
            "pairs": [
              {
                "left": "Mata ouwi",
                "right": "Health to your village"
              },
              {
                "left": "Mata ng'idwi",
                "right": "Health to your children"
              },
              {
                "left": "Mata ariama",
                "right": "Health to our meetings"
              },
              {
                "left": "Mata ng'ebarin",
                "right": "Health to your property"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-2-numbers",
    "title": "Unit 2: Numbers",
    "description": "Comprehensive Turkana curriculum for Numbers, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Compass",
    "skills": [
      {
        "id": "turkana-exp-numbers",
        "title": "Numbers (Part 1)",
        "icon": "BookOpen",
        "description": "Master Turkana numbers vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Numbers, pay special attention to pronunciation and morphological prefixes/suffixes: 'Apei / Epei' (One), 'Ngaarei / Ngiarei (Ari)' (Two), 'Ngauni / Ngiuni (Uni)' (Three), 'Ngaomon / Ngiomon (Omwon)' (Four).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Apei / Epei",
            "source": "One",
            "pronunciation": "a-pei / e-pei",
            "hint": "Cardinal 1 (Apei fem., Epei masc.). (Barton 1921)"
          },
          {
            "target": "Ngaarei / Ngiarei (Ari)",
            "source": "Two",
            "pronunciation": "ngaa-rei / ngia-rei",
            "hint": "Cardinal 2 (Ngaarei fem., Ngiarei masc.; Ari). (Barton 1921)"
          },
          {
            "target": "Ngauni / Ngiuni (Uni)",
            "source": "Three",
            "pronunciation": "ngau-ni / ngiu-ni",
            "hint": "Cardinal 3 (Ngauni fem., Ngiuni masc.; Uni). (Barton 1921)"
          },
          {
            "target": "Ngaomon / Ngiomon (Omwon)",
            "source": "Four",
            "pronunciation": "ngao-mon / ngio-mon",
            "hint": "Cardinal 4 (Ngaomon fem., Ngiomon masc.; Omwon). (Barton 1921)"
          },
          {
            "target": "Ngakan / Akhan",
            "source": "Five",
            "pronunciation": "nga-kan / akhan",
            "hint": "Cardinal 5. Literally 'hand' (akan). (Barton 1921)"
          },
          {
            "target": "Ngakanikapei / Akhan ka pei",
            "source": "Six",
            "pronunciation": "nga-ka-ni-ka-pei / akhan ka pei",
            "hint": "5 + 1. (Barton 1921)"
          },
          {
            "target": "Ngakanikaarei / Akhan ka ari",
            "source": "Seven",
            "pronunciation": "nga-ka-ni-kaa-rei / akhan ka ari",
            "hint": "5 + 2. (Barton 1921)"
          },
          {
            "target": "Ngakanikauni / Akhan ka uni",
            "source": "Eight",
            "pronunciation": "nga-ka-ni-kau-ni / akhan ka uni",
            "hint": "5 + 3. (Barton 1921)"
          },
          {
            "target": "Ngakanikaomon / Akhan ka omwon",
            "source": "Nine",
            "pronunciation": "nga-ka-ni-kao-mon / akhan ka omwon",
            "hint": "5 + 4. (Barton 1921)"
          },
          {
            "target": "Tomon / Ng'tomon",
            "source": "Ten",
            "pronunciation": "to-mon / ng'to-mon",
            "hint": "Cardinal 10. (Barton 1921)"
          },
          {
            "target": "Tomon ka pei",
            "source": "Eleven",
            "pronunciation": "to-mon ka pei",
            "hint": "10 + 1. (Barton 1921)"
          },
          {
            "target": "Tomon ka ari / Tomon kangaarei",
            "source": "Twelve",
            "pronunciation": "to-mon ka ari / to-mon kangaa-rei",
            "hint": "10 + 2. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Apei / Epei\" in Turkana?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
            ],
            "hint": "Cardinal 1 (Apei fem., Epei masc.). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ngaarei / Ngiarei (Ari)\" in Turkana?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
              "One"
            ],
            "hint": "Cardinal 2 (Ngaarei fem., Ngiarei masc.; Ari). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ngauni / Ngiuni (Uni)\" in Turkana?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Cardinal 3 (Ngauni fem., Ngiuni masc.; Uni). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Turkana?",
            "correctAnswer": "Ngauni / Ngiuni (Uni)",
            "options": [
              "Ngauni / Ngiuni (Uni)",
              "Apei / Epei",
              "Ngaarei / Ngiarei (Ari)",
              "Ngaomon / Ngiomon (Omwon)"
            ],
            "hint": "ngah-oo-nee / oo-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Turkana?",
            "correctAnswer": "Ngaomon / Ngiomon (Omwon)",
            "options": [
              "Apei / Epei",
              "Ngaarei / Ngiarei (Ari)",
              "Ngauni / Ngiuni (Uni)",
              "Ngaomon / Ngiomon (Omwon)"
            ],
            "hint": "ngah-oh-mohn / ohm-wohn"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Turkana expression with its English meaning:",
            "correctAnswer": "Apei / Epei: One",
            "pairs": [
              {
                "left": "Apei / Epei",
                "right": "One"
              },
              {
                "left": "Ngaarei / Ngiarei (Ari)",
                "right": "Two"
              },
              {
                "left": "Ngauni / Ngiuni (Uni)",
                "right": "Three"
              },
              {
                "left": "Ngaomon / Ngiomon (Omwon)",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Turkana term for \"Five\": ___",
            "correctAnswer": "Ngakan / Akhan",
            "options": [
              "Apei / Epei",
              "Ngaarei / Ngiarei (Ari)",
              "Ngauni / Ngiuni (Uni)",
              "Ngakan / Akhan"
            ],
            "hint": "Cardinal 5. Literally 'hand' (akan). (Barton 1921)"
          }
        ]
      },
      {
        "id": "turkana-exp-numbers-2",
        "title": "Numbers (Part 2)",
        "icon": "Compass",
        "description": "Master Turkana numbers vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Numbers, pay special attention to pronunciation and morphological prefixes/suffixes: 'Tomon ari / Ngatomona arei' (Twenty), 'Tomon uni' (Thirty), 'Tomon omwon' (Forty), 'Tomon akhan / Ngatomona akan' (Fifty).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Tomon ari / Ngatomona arei",
            "source": "Twenty",
            "pronunciation": "to-mon ari / nga-to-mo-na a-rei",
            "hint": "20 (two tens). (Barton 1921)"
          },
          {
            "target": "Tomon uni",
            "source": "Thirty",
            "pronunciation": "to-mon uni",
            "hint": "30 (three tens). (Barton 1921)"
          },
          {
            "target": "Tomon omwon",
            "source": "Forty",
            "pronunciation": "to-mon omwon",
            "hint": "40 (four tens). (Barton 1921)"
          },
          {
            "target": "Tomon akhan / Ngatomona akan",
            "source": "Fifty",
            "pronunciation": "to-mon akhan / nga-to-mo-na a-kan",
            "hint": "50 (five tens). (Barton 1921)"
          },
          {
            "target": "Tomon akhan ka pei",
            "source": "Sixty",
            "pronunciation": "to-mon akhan ka pei",
            "hint": "60 (six tens). (Barton 1921)"
          },
          {
            "target": "Tomon akhan ka ari",
            "source": "Seventy",
            "pronunciation": "to-mon akhan ka ari",
            "hint": "70 (seven tens). (Barton 1921)"
          },
          {
            "target": "Tomon akhan ka uni",
            "source": "Eighty",
            "pronunciation": "to-mon akhan ka uni",
            "hint": "80 (eight tens). (Barton 1921)"
          },
          {
            "target": "Tomon akhan ka omwon",
            "source": "Ninety",
            "pronunciation": "to-mon akhan ka omwon",
            "hint": "90 (nine tens). (Barton 1921)"
          },
          {
            "target": "Tomon tomon / Amiet",
            "source": "One hundred",
            "pronunciation": "to-mon to-mon / a-miet",
            "hint": "100 (ten tens). (Barton 1921)"
          },
          {
            "target": "Tomon tomon ithia ari",
            "source": "Two hundred",
            "pronunciation": "to-mon to-mon ithia ari",
            "hint": "200. (Barton 1921)"
          },
          {
            "target": "Abungi",
            "source": "Small herd count (250–300)",
            "pronunciation": "a-bungi",
            "hint": "Traditional pastoral counting unit denoting a small herd of 250 to 300 livestock. (Barton 1921)"
          },
          {
            "target": "Ouriman / Alip",
            "source": "Large herd count (500–1000)",
            "pronunciation": "ou-ri-man / a-lip",
            "hint": "Traditional pastoral counting unit denoting a large herd of 500 to 1,000 cattle. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Tomon ari / Ngatomona arei\" mean in English?",
            "correctAnswer": "Twenty",
            "options": [
              "Thirty",
              "Forty",
              "Fifty",
              "Twenty"
            ],
            "hint": "20 (two tens). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Tomon uni\" mean in English?",
            "correctAnswer": "Thirty",
            "options": [
              "Forty",
              "Fifty",
              "Thirty",
              "Twenty"
            ],
            "hint": "30 (three tens). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Tomon omwon\" mean in English?",
            "correctAnswer": "Forty",
            "options": [
              "Fifty",
              "Forty",
              "Twenty",
              "Thirty"
            ],
            "hint": "40 (four tens). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Forty\" in Turkana?",
            "correctAnswer": "Tomon omwon",
            "options": [
              "Tomon omwon",
              "Tomon ari / Ngatomona arei",
              "Tomon uni",
              "Tomon akhan / Ngatomona akan"
            ],
            "hint": "toh-mohn ohm-wohn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fifty\" in Turkana?",
            "correctAnswer": "Tomon akhan / Ngatomona akan",
            "options": [
              "Tomon ari / Ngatomona arei",
              "Tomon uni",
              "Tomon omwon",
              "Tomon akhan / Ngatomona akan"
            ],
            "hint": "toh-mohn ah-khahn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sixty\" in Turkana?",
            "correctAnswer": "Tomon akhan ka pei",
            "options": [
              "Tomon uni",
              "Tomon omwon",
              "Tomon akhan ka pei",
              "Tomon ari / Ngatomona arei"
            ],
            "hint": "toh-mohn ah-khahn kah peh-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Tomon ari / Ngatomona arei: Twenty, Tomon uni: Thirty, Tomon omwon: Forty, Tomon akhan / Ngatomona akan: Fifty",
            "pairs": [
              {
                "left": "Tomon ari / Ngatomona arei",
                "right": "Twenty"
              },
              {
                "left": "Tomon uni",
                "right": "Thirty"
              },
              {
                "left": "Tomon omwon",
                "right": "Forty"
              },
              {
                "left": "Tomon akhan / Ngatomona akan",
                "right": "Fifty"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-3-calendar-seasons",
    "title": "Unit 3: Calendar & Seasons",
    "description": "Comprehensive Turkana curriculum for Calendar & Seasons, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Clock",
    "skills": [
      {
        "id": "turkana-exp-calendar-seasons",
        "title": "Calendar & Seasons (Part 1)",
        "icon": "Clock",
        "description": "Master Turkana calendar & seasons vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Calendar & Seasons, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ageboro' (Rainy season), 'Akamu' (Dry season), 'Lodungi' (January), 'Lomoruk' (February).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ageboro",
            "source": "Rainy season",
            "pronunciation": "a-ge-bo-ro",
            "hint": "The traditional rainy season in the Turkana pastoral cycle. (Barton 1921)"
          },
          {
            "target": "Akamu",
            "source": "Dry season",
            "pronunciation": "a-ka-mu",
            "hint": "The dry season, demanding seasonal herd migrations to mountain grazing reserves. (Barton 1921)"
          },
          {
            "target": "Lodungi",
            "source": "January",
            "pronunciation": "lo-dungi",
            "hint": "1st month of the Turkana traditional calendar; begins approx. 22 January. (Barton 1921)"
          },
          {
            "target": "Lomoruk",
            "source": "February",
            "pronunciation": "lo-mo-ruk",
            "hint": "2nd month of the traditional Turkana calendar. (Barton 1921)"
          },
          {
            "target": "Loichoto",
            "source": "March",
            "pronunciation": "loicho-to",
            "hint": "3rd month of the traditional Turkana calendar; heralds wet season preparations. (Barton 1921)"
          },
          {
            "target": "Titima",
            "source": "April",
            "pronunciation": "ti-ti-ma",
            "hint": "4th month of the traditional Turkana calendar; marks wet season rains and lush grass. (Barton 1921)"
          },
          {
            "target": "Erwait (pl. ngurwa)",
            "source": "Day"
          },
          {
            "target": "Lopo",
            "source": "June",
            "pronunciation": "lo-po",
            "hint": "6th month of the traditional Turkana calendar; end of rainy season. (Barton 1921)"
          },
          {
            "target": "Lotiak",
            "source": "July",
            "pronunciation": "lo-tiak",
            "hint": "7th month of the traditional Turkana calendar; onset of dry season. (Barton 1921)"
          },
          {
            "target": "Lolingachunu",
            "source": "August",
            "pronunciation": "lo-lingachu-nu",
            "hint": "8th month of the traditional Turkana calendar; mid dry season. (Barton 1921)"
          },
          {
            "target": "Lothaban",
            "source": "September",
            "pronunciation": "lotha-ban",
            "hint": "9th month of the traditional Turkana calendar. (Barton 1921)"
          },
          {
            "target": "Lolongu",
            "source": "October",
            "pronunciation": "lo-longu",
            "hint": "10th month of the traditional Turkana calendar. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ageboro — Akamu",
            "source": "Rainy season — Dry season"
          },
          {
            "target": "Lodungi — Lomoruk",
            "source": "January — February"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ageboro\" mean in English?",
            "correctAnswer": "Rainy season",
            "options": [
              "Rainy season",
              "Dry season",
              "January",
              "February"
            ],
            "hint": "Core vocabulary in Calendar & Seasons (Part 1)"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Dry season\"",
            "correctAnswer": "Akamu",
            "acceptedAnswers": [
              "Akamu",
              "Akamu"
            ],
            "hint": "Starts with \"Ak\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Lodungi\"",
            "correctAnswer": "January",
            "acceptedAnswers": [
              "January",
              "January"
            ],
            "hint": "Review Calendar & Seasons (Part 1)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Calendar & Seasons (Part 1) with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Ageboro",
                "right": "Rainy season"
              },
              {
                "left": "Akamu",
                "right": "Dry season"
              },
              {
                "left": "Lodungi",
                "right": "January"
              },
              {
                "left": "Lomoruk",
                "right": "February"
              },
              {
                "left": "Loichoto",
                "right": "March"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-calendar-seasons-2",
        "title": "Calendar & Seasons (Part 2)",
        "icon": "Calendar",
        "description": "Master Turkana calendar & seasons vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Calendar & Seasons, pay special attention to pronunciation and morphological prefixes/suffixes: 'Lorarrar' (November), 'Lugwan' (December), 'Ekaru (pl. ngaro)' (Year), 'Elap (pl. ngelapio)' (Month / Moon).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Lorarrar",
            "source": "November",
            "pronunciation": "lo-rarrar",
            "hint": "11th month of the traditional Turkana calendar. (Barton 1921)"
          },
          {
            "target": "Lugwan",
            "source": "December",
            "pronunciation": "lugwan",
            "hint": "12th month of the traditional Turkana calendar. (Barton 1921)"
          },
          {
            "target": "Ekaru (pl. ngaro)",
            "source": "Year",
            "pronunciation": "e-ka-ru",
            "hint": "Year or annual cycle. This year: 'Ekaru lo'; next year: 'Ekaru echi'; last year: 'Ekaru ye'. (Barton 1921)"
          },
          {
            "target": "Elap (pl. ngelapio)",
            "source": "Month / Moon",
            "pronunciation": "e-lap",
            "hint": "Lunar month or moon. (Barton 1921)"
          },
          {
            "target": "Erwait (pl. ngurwa)",
            "source": "Day",
            "pronunciation": "erwait",
            "hint": "Daytime or daylight period. (Barton 1921)"
          },
          {
            "target": "Akuari (pl. ngakuaretha)",
            "source": "Night",
            "pronunciation": "a-kua-ri",
            "hint": "Night-time darkness. (Barton 1921)"
          },
          {
            "target": "Ataparach",
            "source": "Dawn / Early morning",
            "pronunciation": "a-ta-pa-rach",
            "hint": "First light of dawn and early morning. (Barton 1921)"
          },
          {
            "target": "Ethimakunyak / Taparach",
            "source": "Morning",
            "pronunciation": "ethi-ma-kunyak / ta-pa-rach",
            "hint": "Morning hours before intense heat. (Barton 1921)"
          },
          {
            "target": "Naparan / Ewi akolon",
            "source": "Midday / Noon",
            "pronunciation": "na-pa-ran / ewi a-ko-lon",
            "hint": "Midday when the sun is directly overhead. (Barton 1921)"
          },
          {
            "target": "Ebon / Ebong",
            "source": "Afternoon / Evening",
            "pronunciation": "e-bon / e-bong",
            "hint": "Late afternoon approaching dusk. (Barton 1921)"
          },
          {
            "target": "Alomo akolon",
            "source": "Sunrise (6 a.m.)",
            "pronunciation": "a-lo-mo a-ko-lon",
            "hint": "The sun appearing over the horizon at dawn. (Barton 1921)"
          },
          {
            "target": "Achou akolon",
            "source": "Morning sun (7 a.m.)",
            "pronunciation": "achou a-ko-lon",
            "hint": "Morning sun ascending. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Lorarrar\" mean in English?",
            "correctAnswer": "November",
            "options": [
              "December",
              "Year",
              "Month / Moon",
              "November"
            ],
            "hint": "11th month of the traditional Turkana calendar. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Lugwan\" mean in English?",
            "correctAnswer": "December",
            "options": [
              "Year",
              "Month / Moon",
              "December",
              "November"
            ],
            "hint": "12th month of the traditional Turkana calendar. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekaru (pl. ngaro)\" mean in English?",
            "correctAnswer": "Year",
            "options": [
              "Month / Moon",
              "Year",
              "November",
              "December"
            ],
            "hint": "Year or annual cycle. This year: 'Ekaru lo'; next year: 'Ekaru echi'; last year: 'Ekaru ye'. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Year\" in Turkana?",
            "correctAnswer": "Ekaru (pl. ngaro)",
            "options": [
              "Ekaru (pl. ngaro)",
              "Lorarrar",
              "Lugwan",
              "Elap (pl. ngelapio)"
            ],
            "hint": "eh-kah-roo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Month / Moon\" in Turkana?",
            "correctAnswer": "Elap (pl. ngelapio)",
            "options": [
              "Lorarrar",
              "Lugwan",
              "Ekaru (pl. ngaro)",
              "Elap (pl. ngelapio)"
            ],
            "hint": "eh-lahp"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Day\" in Turkana?",
            "correctAnswer": "Erwait (pl. ngurwa)",
            "options": [
              "Lugwan",
              "Ekaru (pl. ngaro)",
              "Erwait (pl. ngurwa)",
              "Lorarrar"
            ],
            "hint": "ehr-wah-eet"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Lorarrar: November, Lugwan: December, Ekaru (pl. ngaro): Year, Elap (pl. ngelapio): Month / Moon",
            "pairs": [
              {
                "left": "Lorarrar",
                "right": "November"
              },
              {
                "left": "Lugwan",
                "right": "December"
              },
              {
                "left": "Ekaru (pl. ngaro)",
                "right": "Year"
              },
              {
                "left": "Elap (pl. ngelapio)",
                "right": "Month / Moon"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-calendar-seasons-3",
        "title": "Calendar & Seasons (Part 3)",
        "icon": "Sun",
        "description": "Master Turkana calendar & seasons vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Calendar & Seasons, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ewi akolon' (Overhead sun (12 p.m.)), 'Athom akolon' (Mid-afternoon sun (2 p.m.)), 'Aloma akolon' (Sunset (6 p.m.)), 'Tete / Akolon itina' (Today).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ewi akolon",
            "source": "Overhead sun (12 p.m.)",
            "pronunciation": "ewi a-ko-lon",
            "hint": "Peak noon sun directly above. (Barton 1921)"
          },
          {
            "target": "Athom akolon",
            "source": "Mid-afternoon sun (2 p.m.)",
            "pronunciation": "athom a-ko-lon",
            "hint": "Declining afternoon sun. (Barton 1921)"
          },
          {
            "target": "Aloma akolon",
            "source": "Sunset (6 p.m.)",
            "pronunciation": "a-lo-ma a-ko-lon",
            "hint": "The sun setting into twilight. (Barton 1921)"
          },
          {
            "target": "Tete / Akolon itina",
            "source": "Today",
            "pronunciation": "te-te / a-ko-lon i-ti-na",
            "hint": "The present day. (Barton 1921)"
          },
          {
            "target": "Mui",
            "source": "Tomorrow",
            "pronunciation": "mui",
            "hint": "The following day. Tomorrow morning: 'Mui ataparach'. (Barton 1921)"
          },
          {
            "target": "Mui echi akolon",
            "source": "Day after tomorrow",
            "pronunciation": "mui echi a-ko-lon",
            "hint": "Two days forward. (Barton 1921)"
          },
          {
            "target": "Beyen / Ngon",
            "source": "Yesterday",
            "pronunciation": "be-yen / ngon",
            "hint": "The previous day. (Barton 1921)"
          },
          {
            "target": "Ngon echi akolon",
            "source": "Day before yesterday",
            "pronunciation": "ngon echi a-ko-lon",
            "hint": "Two days ago. (Barton 1921)"
          },
          {
            "target": "Tokona",
            "source": "Now",
            "pronunciation": "to-ko-na",
            "hint": "At the present moment. Instantly: 'Tokona-tokona'. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          },
          {
            "target": "Epolok ngikiliok lu.",
            "source": "These men are strong and great."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ewi akolon\" mean in English?",
            "correctAnswer": "Overhead sun (12 p.m.)",
            "options": [
              "Mid-afternoon sun (2 p.m.)",
              "Sunset (6 p.m.)",
              "Today",
              "Overhead sun (12 p.m.)"
            ],
            "hint": "Peak noon sun directly above. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Athom akolon\" mean in English?",
            "correctAnswer": "Mid-afternoon sun (2 p.m.)",
            "options": [
              "Sunset (6 p.m.)",
              "Today",
              "Mid-afternoon sun (2 p.m.)",
              "Overhead sun (12 p.m.)"
            ],
            "hint": "Declining afternoon sun. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aloma akolon\" mean in English?",
            "correctAnswer": "Sunset (6 p.m.)",
            "options": [
              "Today",
              "Sunset (6 p.m.)",
              "Overhead sun (12 p.m.)",
              "Mid-afternoon sun (2 p.m.)"
            ],
            "hint": "The sun setting into twilight. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sunset (6 p.m.)\" in Turkana?",
            "correctAnswer": "Aloma akolon",
            "options": [
              "Aloma akolon",
              "Ewi akolon",
              "Athom akolon",
              "Tete / Akolon itina"
            ],
            "hint": "ah-loh-mah ah-koh-lohn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Today\" in Turkana?",
            "correctAnswer": "Tete / Akolon itina",
            "options": [
              "Ewi akolon",
              "Athom akolon",
              "Aloma akolon",
              "Tete / Akolon itina"
            ],
            "hint": "teh-teh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tomorrow\" in Turkana?",
            "correctAnswer": "Mui",
            "options": [
              "Athom akolon",
              "Aloma akolon",
              "Mui",
              "Ewi akolon"
            ],
            "hint": "moo-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ewi akolon: Overhead sun (12 p.m.), Athom akolon: Mid-afternoon sun (2 p.m.), Aloma akolon: Sunset (6 p.m.), Tete / Akolon itina: Today",
            "pairs": [
              {
                "left": "Ewi akolon",
                "right": "Overhead sun (12 p.m.)"
              },
              {
                "left": "Athom akolon",
                "right": "Mid-afternoon sun (2 p.m.)"
              },
              {
                "left": "Aloma akolon",
                "right": "Sunset (6 p.m.)"
              },
              {
                "left": "Tete / Akolon itina",
                "right": "Today"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-4-family",
    "title": "Unit 4: Family & People",
    "description": "Comprehensive Turkana curriculum for Family & People, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Users",
    "skills": [
      {
        "id": "turkana-exp-family",
        "title": "Family & People (Part 1)",
        "icon": "Users",
        "description": "Master Turkana family & people vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Family & People, pay special attention to pronunciation and morphological prefixes/suffixes: 'Etunganan / Etonganan (pl. ngitunga)' (Person / Mankind), 'Ekili / E'kili (pl. ngiliok)' (Man / Male), 'Abero / A'bero (pl. ngabero)' (Woman / Female), 'Baba / Papa (pl. tababa / ngipapao)' (Father).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Etunganan / Etonganan (pl. ngitunga)",
            "source": "Person / Mankind",
            "pronunciation": "e-tunga-nan / e-tonga-nan",
            "hint": "Human being or person. Plural: Ngitunga (people). (Barton 1921)"
          },
          {
            "target": "Ekili / E'kili (pl. ngiliok)",
            "source": "Man / Male",
            "pronunciation": "e-ki-li / e'ki-li",
            "hint": "Adult male or warrior. Plural: Ngiliok. (Barton 1921)"
          },
          {
            "target": "Abero / A'bero (pl. ngabero)",
            "source": "Woman / Female",
            "pronunciation": "a-be-ro / a'be-ro",
            "hint": "Adult female or woman. Plural: Ngabero. (Barton 1921)"
          },
          {
            "target": "Baba / Papa (pl. tababa / ngipapao)",
            "source": "Father",
            "pronunciation": "ba-ba / pa-pa",
            "hint": "Father or paternal head. (Barton 1921)"
          },
          {
            "target": "Toto / Iyoo (pl. tatoto / ngiyootin)",
            "source": "Mother",
            "pronunciation": "to-to / i-yoo",
            "hint": "Mother. (Barton 1921)"
          },
          {
            "target": "Ikoku / Ikoko (pl. ngidwe / ngedwi)",
            "source": "Child",
            "pronunciation": "i-ko-ku / i-ko-ko",
            "hint": "Child or baby offspring. (Barton 1921)"
          },
          {
            "target": "Edit / Lokoku (pl. ngedithok / ngidwe)",
            "source": "Son / Young boy",
            "pronunciation": "e-dit / lo-ko-ku",
            "hint": "Male child or youth. (Barton 1921)"
          },
          {
            "target": "Apethe / Apese (pl. ngapethur / ngapesur)",
            "source": "Daughter / Girl",
            "pronunciation": "a-pethe / a-pe-se",
            "hint": "Girl or unmarried daughter. (Barton 1921)"
          },
          {
            "target": "Lokadokan / Ekaato (pl. ngalokadokon / ngikaatoka)",
            "source": "Brother",
            "pronunciation": "lo-ka-do-kan / e-kaa-to",
            "hint": "Brother or male kin. (Barton 1921)"
          },
          {
            "target": "Lokadokan / Nakaato (pl. ngaitotui / ngakaatoka)",
            "source": "Sister",
            "pronunciation": "lo-ka-do-kan / na-kaa-to",
            "hint": "Sister or female kin. (Barton 1921)"
          },
          {
            "target": "Lokiliakan / Ekile (pl. ngiliokoka / ngikilyok)",
            "source": "Husband",
            "pronunciation": "lo-ki-lia-kan / e-ki-le",
            "hint": "Married partner / husband (lit. 'my man'). (Barton 1921)"
          },
          {
            "target": "Abero / Aberu (pl. ngabero / ngaberu)",
            "source": "Wife",
            "pronunciation": "a-be-ro / a-be-ru",
            "hint": "Married woman / wife. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Etunganan / Etonganan (pl. ngitunga)\" mean in English?",
            "correctAnswer": "Person / Mankind",
            "options": [
              "Man / Male",
              "Woman / Female",
              "Father",
              "Person / Mankind"
            ],
            "hint": "Human being or person. Plural: Ngitunga (people). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekili / E'kili (pl. ngiliok)\" mean in English?",
            "correctAnswer": "Man / Male",
            "options": [
              "Woman / Female",
              "Father",
              "Man / Male",
              "Person / Mankind"
            ],
            "hint": "Adult male or warrior. Plural: Ngiliok. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Abero / A'bero (pl. ngabero)\" mean in English?",
            "correctAnswer": "Woman / Female",
            "options": [
              "Father",
              "Woman / Female",
              "Person / Mankind",
              "Man / Male"
            ],
            "hint": "Adult female or woman. Plural: Ngabero. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Woman / Female\" in Turkana?",
            "correctAnswer": "Abero / A'bero (pl. ngabero)",
            "options": [
              "Abero / A'bero (pl. ngabero)",
              "Etunganan / Etonganan (pl. ngitunga)",
              "Ekili / E'kili (pl. ngiliok)",
              "Baba / Papa (pl. tababa / ngipapao)"
            ],
            "hint": "ah-beh-roh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Father\" in Turkana?",
            "correctAnswer": "Baba / Papa (pl. tababa / ngipapao)",
            "options": [
              "Etunganan / Etonganan (pl. ngitunga)",
              "Ekili / E'kili (pl. ngiliok)",
              "Abero / A'bero (pl. ngabero)",
              "Baba / Papa (pl. tababa / ngipapao)"
            ],
            "hint": "bah-bah / pah-pah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mother\" in Turkana?",
            "correctAnswer": "Toto / Iyoo (pl. tatoto / ngiyootin)",
            "options": [
              "Ekili / E'kili (pl. ngiliok)",
              "Abero / A'bero (pl. ngabero)",
              "Toto / Iyoo (pl. tatoto / ngiyootin)",
              "Etunganan / Etonganan (pl. ngitunga)"
            ],
            "hint": "toh-toh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Etunganan / Etonganan (pl. ngitunga): Person / Mankind, Ekili / E'kili (pl. ngiliok): Man / Male, Abero / A'bero (pl. ngabero): Woman / Female, Baba / Papa (pl. tababa / ngipapao): Father",
            "pairs": [
              {
                "left": "Etunganan / Etonganan (pl. ngitunga)",
                "right": "Person / Mankind"
              },
              {
                "left": "Ekili / E'kili (pl. ngiliok)",
                "right": "Man / Male"
              },
              {
                "left": "Abero / A'bero (pl. ngabero)",
                "right": "Woman / Female"
              },
              {
                "left": "Baba / Papa (pl. tababa / ngipapao)",
                "right": "Father"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-family-2",
        "title": "Family & People (Part 2)",
        "icon": "User",
        "description": "Master Turkana family & people vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Family & People, pay special attention to pronunciation and morphological prefixes/suffixes: 'Apa (pl. ngapapai)' (Grandfather / Male ancestor), 'Tata (pl. ngatubai)' (Grandmother / Female ancestor), 'Eya (pl. ngaiyayai)' (Aunt), 'Baba / Mama (pl. ngebabai)' (Uncle).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Apa (pl. ngapapai)",
            "source": "Grandfather / Male ancestor",
            "pronunciation": "apa",
            "hint": "Paternal or maternal grandfather / ancestor. (Barton 1921)"
          },
          {
            "target": "Tata (pl. ngatubai)",
            "source": "Grandmother / Female ancestor",
            "pronunciation": "ta-ta",
            "hint": "Paternal or maternal grandmother / ancestress. (Barton 1921)"
          },
          {
            "target": "Eya (pl. ngaiyayai)",
            "source": "Aunt",
            "pronunciation": "eya",
            "hint": "Maternal or paternal aunt. (Barton 1921)"
          },
          {
            "target": "Baba / Mama (pl. ngebabai)",
            "source": "Uncle",
            "pronunciation": "ba-ba / ma-ma",
            "hint": "Paternal or maternal uncle. (Barton 1921)"
          },
          {
            "target": "Akamuranika (pl. ngamurak)",
            "source": "Father-in-law",
            "pronunciation": "a-ka-mu-ra-ni-ka",
            "hint": "Father-in-law. (Barton 1921)"
          },
          {
            "target": "Akamuran (pl. ngamurak)",
            "source": "In-law (Brother/Sister-in-law)",
            "pronunciation": "a-ka-mu-ran",
            "hint": "Affinal relative through marriage. (Barton 1921)"
          },
          {
            "target": "Ekasiko / Akasikot (pl. ngasikot / ngikasiko)",
            "source": "Old man / Elder",
            "pronunciation": "e-ka-si-ko / a-ka-si-kot",
            "hint": "Respected elder in traditional age-set hierarchy. (Barton 1921)"
          },
          {
            "target": "Akimat (pl. ngakimat)",
            "source": "Old woman",
            "pronunciation": "a-ki-mat",
            "hint": "Elderly respected woman. (Barton 1921)"
          },
          {
            "target": "Akarachonait / Ekasurani (pl. ngarachona / ngikasurak)",
            "source": "Young warrior / Youth",
            "pronunciation": "a-ka-racho-nait / e-ka-su-ra-ni",
            "hint": "Initiated young pastoral warrior of the age-grade. (Barton 1921)"
          },
          {
            "target": "Epay / Ekone (pl. ngepaylon / ngikonei)",
            "source": "Friend",
            "pronunciation": "e-pay / e-ko-ne",
            "hint": "Close friend or peer. (Barton 1921)"
          },
          {
            "target": "Eirkatungan / Erotoit (pl. ngatukok / ngerotoitin)",
            "source": "Chief / Leader",
            "pronunciation": "eirka-tungan / e-ro-toit",
            "hint": "Community leader, raid scout, or prominent elder. (Barton 1921)"
          },
          {
            "target": "Ebayunan / Epeyonon (pl. ngebayok / ngipeyok)",
            "source": "Guest / Stranger",
            "pronunciation": "e-ba-yu-nan / e-pe-yo-non",
            "hint": "Traveller or visiting guest hosted at the kraal. (Barton 1921)"
          },
          {
            "target": "edit, pl. ngedithok",
            "source": "Son",
            "pronunciation": "edit"
          },
          {
            "target": "ikoko, pl. ngedwi",
            "source": "Baby",
            "pronunciation": "ikoko"
          },
          {
            "target": "atageri, pl. ngatagerin",
            "source": "Clan",
            "pronunciation": "atageri"
          },
          {
            "target": "apethi, pl. nyapethur",
            "source": "Girl",
            "pronunciation": "apethi"
          }
        ],
        "sentences": [
          {
            "target": "Apa — Tata",
            "source": "Grandfather — Grandmother"
          },
          {
            "target": "Eya — Baba",
            "source": "Aunt — Uncle"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Apa\" mean in English?",
            "correctAnswer": "Grandfather / Male ancestor",
            "options": [
              "Grandfather / Male ancestor",
              "Grandmother / Female ancestor",
              "Aunt",
              "Uncle"
            ],
            "hint": "Core vocabulary in Family & People (Part 2)"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Grandmother / Female ancestor\"",
            "correctAnswer": "Tata",
            "acceptedAnswers": [
              "Tata (pl. ngatubai)",
              "Tata"
            ],
            "hint": "Starts with \"Ta\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Eya\"",
            "correctAnswer": "Aunt",
            "acceptedAnswers": [
              "Aunt",
              "Aunt"
            ],
            "hint": "Review Family & People (Part 2)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Family & People (Part 2) with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Apa",
                "right": "Grandfather"
              },
              {
                "left": "Tata",
                "right": "Grandmother"
              },
              {
                "left": "Eya",
                "right": "Aunt"
              },
              {
                "left": "Baba",
                "right": "Uncle"
              },
              {
                "left": "Akamuranika",
                "right": "Father-in-law"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-5-animals",
    "title": "Unit 5: Animals & Wildlife",
    "description": "Comprehensive Turkana curriculum for Animals & Wildlife, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "PawPrint",
    "skills": [
      {
        "id": "turkana-exp-animals",
        "title": "Animals & Wildlife (Part 1)",
        "icon": "PawPrint",
        "description": "Master Turkana animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ng'atuk / Ngatuk (sing. Ate / Atāka)' (Cattle (Herds)), 'Atāka / Aite (pl. ngatak / ngatuk)' (Cow), 'Emanik (pl. ngemaniko)' (Bull), 'Emon (pl. ngemongin)' (Bullock / Ox).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ng'atuk / Ngatuk (sing. Ate / Atāka)",
            "source": "Cattle (Herds)",
            "pronunciation": "ng'a-tuk / nga-tuk",
            "hint": "Plural collective for cattle herds, central to Turkana identity and sustenance. (Barton 1921)"
          },
          {
            "target": "Atāka / Aite (pl. ngatak / ngatuk)",
            "source": "Cow",
            "pronunciation": "a-ta-ka / ai-te",
            "hint": "Adult cow providing milk and blood. (Barton 1921)"
          },
          {
            "target": "Emanik (pl. ngemaniko)",
            "source": "Bull",
            "pronunciation": "e-ma-nik",
            "hint": "Breeding herd sire bull. (Barton 1921)"
          },
          {
            "target": "Emon (pl. ngemongin)",
            "source": "Bullock / Ox",
            "pronunciation": "e-mon",
            "hint": "Castrated ox; central to ceremonial display, bell-wearing, and praise poetry. (Barton 1921)"
          },
          {
            "target": "Atou / Ataok (pl. ngatak / ngataokin)",
            "source": "Heifer",
            "pronunciation": "a-tou / a-taok",
            "hint": "Young female cow before first calf. (Barton 1921)"
          },
          {
            "target": "Manangit (pl. ngemanan)",
            "source": "Small calf",
            "pronunciation": "ma-nangit",
            "hint": "Very young suckling calf. (Barton 1921)"
          },
          {
            "target": "Etak (pl. ngetak)",
            "source": "Large calf",
            "pronunciation": "e-tak",
            "hint": "Weaned growing calf. (Barton 1921)"
          },
          {
            "target": "Akine / Akini (pl. ngakinei / ngakini)",
            "source": "Goat",
            "pronunciation": "a-ki-ne / a-ki-ni",
            "hint": "Domestic goat. Plural: Ngakinei. (Barton 1921)"
          },
          {
            "target": "Akorai (pl. ngora)",
            "source": "He-goat",
            "pronunciation": "a-ko-rai",
            "hint": "Male billy goat. (Barton 1921)"
          },
          {
            "target": "Ekali (pl. ngali)",
            "source": "Kid (young goat)",
            "pronunciation": "e-ka-li",
            "hint": "Young goat or lamb. (Barton 1921)"
          },
          {
            "target": "Amethek / Amesek (pl. ngamethekin / ngamesekin)",
            "source": "Sheep",
            "pronunciation": "a-methek / a-me-sek",
            "hint": "Indigenous fat-tailed sheep. (Barton 1921)"
          },
          {
            "target": "Egetipan (pl. ngetipaka)",
            "source": "Ram",
            "pronunciation": "e-ge-ti-pan",
            "hint": "Male breeding ram. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ng'atuk / Ngatuk (sing. Ate / Atāka)\" mean in English?",
            "correctAnswer": "Cattle (Herds)",
            "options": [
              "Cow",
              "Bull",
              "Bullock / Ox",
              "Cattle (Herds)"
            ],
            "hint": "Plural collective for cattle herds, central to Turkana identity and sustenance. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atāka / Aite (pl. ngatak / ngatuk)\" mean in English?",
            "correctAnswer": "Cow",
            "options": [
              "Bull",
              "Bullock / Ox",
              "Cow",
              "Cattle (Herds)"
            ],
            "hint": "Adult cow providing milk and blood. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emanik (pl. ngemaniko)\" mean in English?",
            "correctAnswer": "Bull",
            "options": [
              "Bullock / Ox",
              "Bull",
              "Cattle (Herds)",
              "Cow"
            ],
            "hint": "Breeding herd sire bull. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bull\" in Turkana?",
            "correctAnswer": "Emanik (pl. ngemaniko)",
            "options": [
              "Emanik (pl. ngemaniko)",
              "Ng'atuk / Ngatuk (sing. Ate / Atāka)",
              "Atāka / Aite (pl. ngatak / ngatuk)",
              "Emon (pl. ngemongin)"
            ],
            "hint": "eh-mah-neek"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bullock / Ox\" in Turkana?",
            "correctAnswer": "Emon (pl. ngemongin)",
            "options": [
              "Ng'atuk / Ngatuk (sing. Ate / Atāka)",
              "Atāka / Aite (pl. ngatak / ngatuk)",
              "Emanik (pl. ngemaniko)",
              "Emon (pl. ngemongin)"
            ],
            "hint": "eh-mohn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Heifer\" in Turkana?",
            "correctAnswer": "Atou / Ataok (pl. ngatak / ngataokin)",
            "options": [
              "Atāka / Aite (pl. ngatak / ngatuk)",
              "Emanik (pl. ngemaniko)",
              "Atou / Ataok (pl. ngatak / ngataokin)",
              "Ng'atuk / Ngatuk (sing. Ate / Atāka)"
            ],
            "hint": "ah-toh-oo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ng'atuk / Ngatuk (sing. Ate / Atāka): Cattle (Herds), Atāka / Aite (pl. ngatak / ngatuk): Cow, Emanik (pl. ngemaniko): Bull, Emon (pl. ngemongin): Bullock / Ox",
            "pairs": [
              {
                "left": "Ng'atuk / Ngatuk (sing. Ate / Atāka)",
                "right": "Cattle (Herds)"
              },
              {
                "left": "Atāka / Aite (pl. ngatak / ngatuk)",
                "right": "Cow"
              },
              {
                "left": "Emanik (pl. ngemaniko)",
                "right": "Bull"
              },
              {
                "left": "Emon (pl. ngemongin)",
                "right": "Bullock / Ox"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-animals-2",
        "title": "Animals & Wildlife (Part 2)",
        "icon": "Compass",
        "description": "Master Turkana animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Esikirya / E'sikiriya (pl. ngisikirya)' (Donkey), 'Akāl / Ekaal (pl. ngāl / ngikaala)' (Camel), 'Etom / E'tome (pl. ngetom / ngitomei)' (Elephant), 'Angatuin / Engatun (pl. ngatuino / ngingatunyo)' (Lion).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Esikirya / E'sikiriya (pl. ngisikirya)",
            "source": "Donkey",
            "pronunciation": "e-si-kirya / e'si-ki-ri-ya",
            "hint": "Pack donkey, indispensable for transporting household goods on migration. (Barton 1921)"
          },
          {
            "target": "Akāl / Ekaal (pl. ngāl / ngikaala)",
            "source": "Camel",
            "pronunciation": "a-kal / e-kaal",
            "hint": "Dromedary camel, vital milk source during severe drought. (Barton 1921)"
          },
          {
            "target": "Etom / E'tome (pl. ngetom / ngitomei)",
            "source": "Elephant",
            "pronunciation": "e-tom / e'to-me",
            "hint": "African savanna elephant. (Barton 1921)"
          },
          {
            "target": "Angatuin / Engatun (pl. ngatuino / ngingatunyo)",
            "source": "Lion",
            "pronunciation": "anga-tuin / enga-tun",
            "hint": "Apex predator lion. (Barton 1921)"
          },
          {
            "target": "Eris (pl. ngerise / ngirisa)",
            "source": "Leopard",
            "pronunciation": "e-ris",
            "hint": "Leopard. (Barton 1921)"
          },
          {
            "target": "Arrara (pl. ngarrarai)",
            "source": "Cheetah",
            "pronunciation": "arra-ra",
            "hint": "Cheetah. (Barton 1921)"
          },
          {
            "target": "Ebu / Ebuu (pl. ngebui / ngibuwin)",
            "source": "Hyena",
            "pronunciation": "ebu / e-buu",
            "hint": "Spotted hyena. (Barton 1921)"
          },
          {
            "target": "Epiot (pl. ngepioto)",
            "source": "Wild dog",
            "pronunciation": "e-piot",
            "hint": "African wild dog / painted dog. (Barton 1921)"
          },
          {
            "target": "Ekui (pl. ngekui)",
            "source": "Jackal",
            "pronunciation": "e-kui",
            "hint": "Jackal. (Barton 1921)"
          },
          {
            "target": "Yekori / Ekori (pl. ngikorio)",
            "source": "Giraffe",
            "pronunciation": "ye-ko-ri / e-ko-ri",
            "hint": "Reticulated giraffe. (Barton 1921)"
          },
          {
            "target": "Ekothuan / Ekosowan (pl. ngekothua / ngikosowani)",
            "source": "Buffalo",
            "pronunciation": "e-kothuan / e-ko-so-wan",
            "hint": "Cape buffalo whose hide was prized for heavy shields. (Barton 1921)"
          },
          {
            "target": "Amothi / Emosik (pl. ngamothingok / ngimosiko)",
            "source": "Rhinoceros",
            "pronunciation": "a-mothi / e-mo-sik",
            "hint": "Black rhinoceros. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Esikirya / E'sikiriya (pl. ngisikirya)\" mean in English?",
            "correctAnswer": "Donkey",
            "options": [
              "Camel",
              "Elephant",
              "Lion",
              "Donkey"
            ],
            "hint": "Pack donkey, indispensable for transporting household goods on migration. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akāl / Ekaal (pl. ngāl / ngikaala)\" mean in English?",
            "correctAnswer": "Camel",
            "options": [
              "Elephant",
              "Lion",
              "Camel",
              "Donkey"
            ],
            "hint": "Dromedary camel, vital milk source during severe drought. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Etom / E'tome (pl. ngetom / ngitomei)\" mean in English?",
            "correctAnswer": "Elephant",
            "options": [
              "Lion",
              "Elephant",
              "Donkey",
              "Camel"
            ],
            "hint": "African savanna elephant. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Elephant\" in Turkana?",
            "correctAnswer": "Etom / E'tome (pl. ngetom / ngitomei)",
            "options": [
              "Etom / E'tome (pl. ngetom / ngitomei)",
              "Esikirya / E'sikiriya (pl. ngisikirya)",
              "Akāl / Ekaal (pl. ngāl / ngikaala)",
              "Angatuin / Engatun (pl. ngatuino / ngingatunyo)"
            ],
            "hint": "eh-tohm"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lion\" in Turkana?",
            "correctAnswer": "Angatuin / Engatun (pl. ngatuino / ngingatunyo)",
            "options": [
              "Esikirya / E'sikiriya (pl. ngisikirya)",
              "Akāl / Ekaal (pl. ngāl / ngikaala)",
              "Etom / E'tome (pl. ngetom / ngitomei)",
              "Angatuin / Engatun (pl. ngatuino / ngingatunyo)"
            ],
            "hint": "ahn-gah-too-een"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leopard\" in Turkana?",
            "correctAnswer": "Eris (pl. ngerise / ngirisa)",
            "options": [
              "Akāl / Ekaal (pl. ngāl / ngikaala)",
              "Etom / E'tome (pl. ngetom / ngitomei)",
              "Eris (pl. ngerise / ngirisa)",
              "Esikirya / E'sikiriya (pl. ngisikirya)"
            ],
            "hint": "eh-rees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Esikirya / E'sikiriya (pl. ngisikirya): Donkey, Akāl / Ekaal (pl. ngāl / ngikaala): Camel, Etom / E'tome (pl. ngetom / ngitomei): Elephant, Angatuin / Engatun (pl. ngatuino / ngingatunyo): Lion",
            "pairs": [
              {
                "left": "Esikirya / E'sikiriya (pl. ngisikirya)",
                "right": "Donkey"
              },
              {
                "left": "Akāl / Ekaal (pl. ngāl / ngikaala)",
                "right": "Camel"
              },
              {
                "left": "Etom / E'tome (pl. ngetom / ngitomei)",
                "right": "Elephant"
              },
              {
                "left": "Angatuin / Engatun (pl. ngatuino / ngingatunyo)",
                "right": "Lion"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-animals-3",
        "title": "Animals & Wildlife (Part 3)",
        "icon": "TreePine",
        "description": "Master Turkana animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Epir (pl. ngipirin)' (Hippopotamus), 'Etugo / Etuko (pl. ngetugoi / ngitukoi)' (Zebra), 'Uwabet (pl. nguawabeto)' (Eland), 'Eder (pl. ngederin)' (Oryx).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Epir (pl. ngipirin)",
            "source": "Hippopotamus",
            "pronunciation": "e-pir",
            "hint": "Hippopotamus of Lake Turkana. (Barton 1921)"
          },
          {
            "target": "Etugo / Etuko (pl. ngetugoi / ngitukoi)",
            "source": "Zebra",
            "pronunciation": "e-tu-go / e-tu-ko",
            "hint": "Plains zebra. (Barton 1921)"
          },
          {
            "target": "Uwabet (pl. nguawabeto)",
            "source": "Eland",
            "pronunciation": "u-wa-bet",
            "hint": "Giant eland antelope. (Barton 1921)"
          },
          {
            "target": "Eder (pl. ngederin)",
            "source": "Oryx",
            "pronunciation": "e-der",
            "hint": "Beisa oryx; horns used for tobacco containers and horns. (Barton 1921)"
          },
          {
            "target": "Emakak (pl. ngemakaka)",
            "source": "Greater Kudu",
            "pronunciation": "e-ma-kak",
            "hint": "Greater kudu. (Barton 1921)"
          },
          {
            "target": "Asarich (pl. ngasarich)",
            "source": "Lesser Kudu",
            "pronunciation": "a-sa-rich",
            "hint": "Lesser kudu. (Barton 1921)"
          },
          {
            "target": "Akoloba / E'koloba (pl. ngalobai)",
            "source": "Impala",
            "pronunciation": "a-ko-lo-ba / e'ko-lo-ba",
            "hint": "Impala antelope. Buck: 'Ekoloba-emanik'; doe: 'Ekoloba-abero'. (Barton 1921)"
          },
          {
            "target": "Ethuro (pl. ngetheroi)",
            "source": "Dik-dik",
            "pronunciation": "ethu-ro",
            "hint": "Kirk's dik-dik dwarf antelope. (Barton 1921)"
          },
          {
            "target": "Akokorait (pl. ngokorai)",
            "source": "Waterbuck",
            "pronunciation": "a-ko-ko-rait",
            "hint": "Waterbuck antelope. (Barton 1921)"
          },
          {
            "target": "Adarit (pl. ngadarita)",
            "source": "Bushbuck",
            "pronunciation": "a-da-rit",
            "hint": "Bushbuck antelope. (Barton 1921)"
          },
          {
            "target": "Epigi / Eputir (pl. ngapigi / ngiputiro)",
            "source": "Warthog",
            "pronunciation": "e-pi-gi / e-pu-tir",
            "hint": "Warthog. (Barton 1921)"
          },
          {
            "target": "Echom (pl. ngechomin)",
            "source": "Baboon",
            "pronunciation": "echom",
            "hint": "Olive baboon. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          },
          {
            "target": "Epolok ngikiliok lu.",
            "source": "These men are strong and great."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Epir (pl. ngipirin)\" mean in English?",
            "correctAnswer": "Hippopotamus",
            "options": [
              "Zebra",
              "Eland",
              "Oryx",
              "Hippopotamus"
            ],
            "hint": "Hippopotamus of Lake Turkana. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Etugo / Etuko (pl. ngetugoi / ngitukoi)\" mean in English?",
            "correctAnswer": "Zebra",
            "options": [
              "Eland",
              "Oryx",
              "Zebra",
              "Hippopotamus"
            ],
            "hint": "Plains zebra. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Uwabet (pl. nguawabeto)\" mean in English?",
            "correctAnswer": "Eland",
            "options": [
              "Oryx",
              "Eland",
              "Hippopotamus",
              "Zebra"
            ],
            "hint": "Giant eland antelope. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eland\" in Turkana?",
            "correctAnswer": "Uwabet (pl. nguawabeto)",
            "options": [
              "Uwabet (pl. nguawabeto)",
              "Epir (pl. ngipirin)",
              "Etugo / Etuko (pl. ngetugoi / ngitukoi)",
              "Eder (pl. ngederin)"
            ],
            "hint": "oo-wah-beht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Oryx\" in Turkana?",
            "correctAnswer": "Eder (pl. ngederin)",
            "options": [
              "Epir (pl. ngipirin)",
              "Etugo / Etuko (pl. ngetugoi / ngitukoi)",
              "Uwabet (pl. nguawabeto)",
              "Eder (pl. ngederin)"
            ],
            "hint": "eh-dehr"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Greater Kudu\" in Turkana?",
            "correctAnswer": "Emakak (pl. ngemakaka)",
            "options": [
              "Etugo / Etuko (pl. ngetugoi / ngitukoi)",
              "Uwabet (pl. nguawabeto)",
              "Emakak (pl. ngemakaka)",
              "Epir (pl. ngipirin)"
            ],
            "hint": "eh-mah-kahk"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Epir (pl. ngipirin): Hippopotamus, Etugo / Etuko (pl. ngetugoi / ngitukoi): Zebra, Uwabet (pl. nguawabeto): Eland, Eder (pl. ngederin): Oryx",
            "pairs": [
              {
                "left": "Epir (pl. ngipirin)",
                "right": "Hippopotamus"
              },
              {
                "left": "Etugo / Etuko (pl. ngetugoi / ngitukoi)",
                "right": "Zebra"
              },
              {
                "left": "Uwabet (pl. nguawabeto)",
                "right": "Eland"
              },
              {
                "left": "Eder (pl. ngederin)",
                "right": "Oryx"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-animals-4",
        "title": "Animals & Wildlife (Part 4)",
        "icon": "Target",
        "description": "Master Turkana animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akodokon (pl. ngadokoi)' (Monkey), 'Akinyan / Akinyang (pl. ngakinyanga)' (Crocodile), 'Ebokok (pl. ngebokoka)' (Tortoise), 'Emun (pl. ngemun)' (Snake).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Akodokon (pl. ngadokoi)",
            "source": "Monkey",
            "pronunciation": "a-ko-do-kon",
            "hint": "Vervet / Sykes monkey. (Barton 1921)"
          },
          {
            "target": "Akinyan / Akinyang (pl. ngakinyanga)",
            "source": "Crocodile",
            "pronunciation": "a-kinyan / a-kinyang",
            "hint": "Nile crocodile, abundant in Lake Turkana. (Barton 1921)"
          },
          {
            "target": "Ebokok (pl. ngebokoka)",
            "source": "Tortoise",
            "pronunciation": "e-bo-kok",
            "hint": "Leopard tortoise. (Barton 1921)"
          },
          {
            "target": "Emun (pl. ngemun)",
            "source": "Snake",
            "pronunciation": "e-mun",
            "hint": "General serpent / snake. (Barton 1921)"
          },
          {
            "target": "Akipom (pl. ngapomia)",
            "source": "Puff adder",
            "pronunciation": "a-ki-pom",
            "hint": "Venomous puff adder. (Barton 1921)"
          },
          {
            "target": "Emorotot (pl. ngemorotota)",
            "source": "Python",
            "pronunciation": "e-mo-ro-tot",
            "hint": "African rock python. (Barton 1921)"
          },
          {
            "target": "Ereu (pl. ngarewa)",
            "source": "Spitting cobra",
            "pronunciation": "e-reu",
            "hint": "Spitting cobra. (Barton 1921)"
          },
          {
            "target": "Ikenit / Ikoni (pl. ngken / ngiken)",
            "source": "Bird",
            "pronunciation": "i-ke-nit / i-ko-ni",
            "hint": "Wild bird. (Barton 1921)"
          },
          {
            "target": "Akalis (pl. ngaliso)",
            "source": "Ostrich",
            "pronunciation": "a-ka-lis",
            "hint": "Somali ostrich; feathers used for warriors' ceremonial headdresses. (Barton 1921)"
          },
          {
            "target": "Atorokot (pl. ngatorok)",
            "source": "Vulture",
            "pronunciation": "a-to-ro-kot",
            "hint": "Scavenger vulture. (Barton 1921)"
          },
          {
            "target": "Ejili (pl. ngaijilili)",
            "source": "Hawk",
            "pronunciation": "e-ji-li",
            "hint": "Bird of prey / raptor. (Barton 1921)"
          },
          {
            "target": "Akorup (pl. ngoroka)",
            "source": "Crow",
            "pronunciation": "a-ko-rup",
            "hint": "Pied crow. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akodokon (pl. ngadokoi)\" mean in English?",
            "correctAnswer": "Monkey",
            "options": [
              "Crocodile",
              "Tortoise",
              "Snake",
              "Monkey"
            ],
            "hint": "Vervet / Sykes monkey. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akinyan / Akinyang (pl. ngakinyanga)\" mean in English?",
            "correctAnswer": "Crocodile",
            "options": [
              "Tortoise",
              "Snake",
              "Crocodile",
              "Monkey"
            ],
            "hint": "Nile crocodile, abundant in Lake Turkana. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ebokok (pl. ngebokoka)\" mean in English?",
            "correctAnswer": "Tortoise",
            "options": [
              "Snake",
              "Tortoise",
              "Monkey",
              "Crocodile"
            ],
            "hint": "Leopard tortoise. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tortoise\" in Turkana?",
            "correctAnswer": "Ebokok (pl. ngebokoka)",
            "options": [
              "Ebokok (pl. ngebokoka)",
              "Akodokon (pl. ngadokoi)",
              "Akinyan / Akinyang (pl. ngakinyanga)",
              "Emun (pl. ngemun)"
            ],
            "hint": "eh-boh-kohk"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Snake\" in Turkana?",
            "correctAnswer": "Emun (pl. ngemun)",
            "options": [
              "Akodokon (pl. ngadokoi)",
              "Akinyan / Akinyang (pl. ngakinyanga)",
              "Ebokok (pl. ngebokoka)",
              "Emun (pl. ngemun)"
            ],
            "hint": "eh-moon"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Puff adder\" in Turkana?",
            "correctAnswer": "Akipom (pl. ngapomia)",
            "options": [
              "Akinyan / Akinyang (pl. ngakinyanga)",
              "Ebokok (pl. ngebokoka)",
              "Akipom (pl. ngapomia)",
              "Akodokon (pl. ngadokoi)"
            ],
            "hint": "ah-kee-pohm"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Akodokon (pl. ngadokoi): Monkey, Akinyan / Akinyang (pl. ngakinyanga): Crocodile, Ebokok (pl. ngebokoka): Tortoise, Emun (pl. ngemun): Snake",
            "pairs": [
              {
                "left": "Akodokon (pl. ngadokoi)",
                "right": "Monkey"
              },
              {
                "left": "Akinyan / Akinyang (pl. ngakinyanga)",
                "right": "Crocodile"
              },
              {
                "left": "Ebokok (pl. ngebokoka)",
                "right": "Tortoise"
              },
              {
                "left": "Emun (pl. ngemun)",
                "right": "Snake"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-animals-5",
        "title": "Animals & Wildlife (Part 5)",
        "icon": "BookOpen",
        "description": "Master Turkana animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Atapen (pl. ngatapeno)' (Guineafowl), 'Ekuri (pl. ngokori)' (Dove), 'Atapeng / Akukor (pl. ngatapengo / ngakukoroi)' (Chicken / Fowl), 'Apoo (pl. ngapooi)' (Hare / Rabbit).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Atapen (pl. ngatapeno)",
            "source": "Guineafowl",
            "pronunciation": "a-ta-pen",
            "hint": "Helmeted guineafowl. (Barton 1921)"
          },
          {
            "target": "Ekuri (pl. ngokori)",
            "source": "Dove",
            "pronunciation": "e-ku-ri",
            "hint": "African dove. (Barton 1921)"
          },
          {
            "target": "Ekolia (pl. ngolia)",
            "source": "Fish",
            "pronunciation": "e-ko-lia",
            "hint": "Fish harvested by fishing communities along Lake Turkana. (Barton 1921)"
          },
          {
            "target": "Ingok (pl. ngoko / ngingokwo)",
            "source": "Dog",
            "pronunciation": "ingok",
            "hint": "Domestic camp guard dog. (Barton 1921)"
          },
          {
            "target": "Lorutoit (pl. lokutucha)",
            "source": "Wild cat",
            "pronunciation": "lo-ru-toit",
            "hint": "African wild cat. (Barton 1921)"
          },
          {
            "target": "Ejulin (pl. ngejuluno)",
            "source": "Rat",
            "pronunciation": "e-ju-lin",
            "hint": "Rodent / rat. (Barton 1921)"
          },
          {
            "target": "Emathi (pl. ngemathia)",
            "source": "Locust",
            "pronunciation": "e-mathi",
            "hint": "Migratory desert locust. (Barton 1921)"
          },
          {
            "target": "Etherot (pl. ngesorro)",
            "source": "Mosquito",
            "pronunciation": "ethe-rot",
            "hint": "Mosquito insect. (Barton 1921)"
          },
          {
            "target": "Emadan (pl. ngamadan)",
            "source": "Tick",
            "pronunciation": "e-ma-dan",
            "hint": "Livestock tick. (Barton 1921)"
          },
          {
            "target": "Oūū (coll. bees)",
            "source": "Bee",
            "pronunciation": "ouu",
            "hint": "Wild honeybee swarms. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atapen (pl. ngatapeno)\" mean in English?",
            "correctAnswer": "Guineafowl",
            "options": [
              "Dove",
              "Chicken / Fowl",
              "Hare / Rabbit",
              "Guineafowl"
            ],
            "hint": "Helmeted guineafowl. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekuri (pl. ngokori)\" mean in English?",
            "correctAnswer": "Dove",
            "options": [
              "Chicken / Fowl",
              "Hare / Rabbit",
              "Dove",
              "Guineafowl"
            ],
            "hint": "African dove. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fish\" in Turkana?",
            "correctAnswer": "Ekolia (pl. ngolia)",
            "options": [
              "Ekuri (pl. ngokori)",
              "Atapeng / Akukor (pl. ngatapengo / ngakukoroi)",
              "Ekolia (pl. ngolia)",
              "Atapen (pl. ngatapeno)"
            ],
            "hint": "eh-koh-lee-ah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Atapen (pl. ngatapeno): Guineafowl, Ekuri (pl. ngokori): Dove",
            "pairs": [
              {
                "left": "Atapen (pl. ngatapeno)",
                "right": "Guineafowl"
              },
              {
                "left": "Ekuri (pl. ngokori)",
                "right": "Dove"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-6-nature",
    "title": "Unit 6: Nature & Environment",
    "description": "Comprehensive Turkana curriculum for Nature & Environment, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "TreePine",
    "skills": [
      {
        "id": "turkana-exp-nature",
        "title": "Nature & Environment (Part 1)",
        "icon": "TreePine",
        "description": "Master Turkana nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ng'akipi / Agipi (pl. ngagipi)' (Water), 'Angalul / Angolul (pl. ngangolulio)' (River / Stream), 'Ayonay (pl. ngiyonay)' (Dry riverbed (Laga)), 'Emoro / Emor (pl. ngemor)' (Mountain).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ng'akipi / Agipi (pl. ngagipi)",
            "source": "Water",
            "pronunciation": "ng'a-ki-pi / a-gi-pi",
            "hint": "Vital pastoral resource. Fresh water: 'Agipi kalimok'; dirty water: 'Agipi eloth'. (Barton 1921)"
          },
          {
            "target": "Angalul / Angolul (pl. ngangolulio)",
            "source": "River / Stream",
            "pronunciation": "anga-lul / ango-lul",
            "hint": "Permanent or seasonal river channel. (Barton 1921)"
          },
          {
            "target": "Emoro / Emor (pl. ngemor)",
            "source": "Mountain",
            "pronunciation": "e-mo-ro / e-mor",
            "hint": "Rocky mountain or hill peak. (Barton 1921)"
          },
          {
            "target": "Aukot (pl. ngoukon)",
            "source": "Mountain range",
            "pronunciation": "au-kot",
            "hint": "Highland mountain range. (Barton 1921)"
          },
          {
            "target": "Amukora (pl. ngemokor)",
            "source": "Hill",
            "pronunciation": "a-mu-ko-ra",
            "hint": "Rocky knoll or hillock. (Barton 1921)"
          },
          {
            "target": "Aro / Etot (pl. ngaroitin / ngatotin)",
            "source": "Plain / Savannah",
            "pronunciation": "aro / e-tot",
            "hint": "Vast open arid plain. (Barton 1921)"
          },
          {
            "target": "Amoni (pl. nyamoniek)",
            "source": "Forest / Acacia bushland",
            "pronunciation": "a-mo-ni",
            "hint": "Dense riverine thorn forest or thicket. (Barton 1921)"
          },
          {
            "target": "Akitela (pl. ngateai)",
            "source": "Wilderness / Open country",
            "pronunciation": "a-ki-te-la",
            "hint": "Uninhabited wilderness expanse. (Barton 1921)"
          },
          {
            "target": "Akolon / Akolong (pl. ngakolon)",
            "source": "Sun",
            "pronunciation": "a-ko-lon / a-ko-long",
            "hint": "The sun; also governs diurnal timekeeping. (Barton 1921)"
          },
          {
            "target": "Kanyerit (pl. nganyer)",
            "source": "Star",
            "pronunciation": "kanye-rit",
            "hint": "Night sky star. (Barton 1921)"
          },
          {
            "target": "Etup",
            "source": "Morning star",
            "pronunciation": "e-tup",
            "hint": "Bright morning planet Venus visible before sunrise. (Barton 1921)"
          },
          {
            "target": "akuich, God",
            "source": "Sky",
            "pronunciation": "akuich god"
          }
        ],
        "sentences": [
          {
            "target": "Ng'akipi — Angalul",
            "source": "Water — River"
          },
          {
            "target": "Emoro — Aukot",
            "source": "Mountain — Mountain range"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ng'akipi\" mean in English?",
            "correctAnswer": "Water",
            "options": [
              "Water",
              "River / Stream",
              "Mountain",
              "Mountain range"
            ],
            "hint": "Core vocabulary in Nature & Environment (Part 1)"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"River / Stream\"",
            "correctAnswer": "Angalul",
            "acceptedAnswers": [
              "Angalul / Angolul (pl. ngangolulio)",
              "Angalul"
            ],
            "hint": "Starts with \"An\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Emoro\"",
            "correctAnswer": "Mountain",
            "acceptedAnswers": [
              "Mountain",
              "Mountain"
            ],
            "hint": "Review Nature & Environment (Part 1)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Nature & Environment (Part 1) with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Ng'akipi",
                "right": "Water"
              },
              {
                "left": "Angalul",
                "right": "River"
              },
              {
                "left": "Emoro",
                "right": "Mountain"
              },
              {
                "left": "Aukot",
                "right": "Mountain range"
              },
              {
                "left": "Amukora",
                "right": "Hill"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-nature-2",
        "title": "Nature & Environment (Part 2)",
        "icon": "Leaf",
        "description": "Master Turkana nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akuich / Akuj' (Sky / Heaven), 'Edu (pl. ngeduon)' (Cloud), 'Atorot / Ekuwam (pl. ngatorot / ngikuwamin)' (Wind), 'Ekwam (pl. ngakwama)' (Whirlwind / Dust devil).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Akuich / Akuj",
            "source": "Sky / Heaven",
            "pronunciation": "a-kuich / a-kuj",
            "hint": "The vault of heaven and celestial abode of God. (Barton 1921)"
          },
          {
            "target": "Edu (pl. ngeduon)",
            "source": "Cloud",
            "pronunciation": "edu",
            "hint": "Rain cloud. (Barton 1921)"
          },
          {
            "target": "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
            "source": "Wind",
            "pronunciation": "a-to-rot / e-ku-wam",
            "hint": "Breeze or wind across the plains. (Barton 1921)"
          },
          {
            "target": "Ekwam (pl. ngakwama)",
            "source": "Whirlwind / Dust devil",
            "pronunciation": "ekwam",
            "hint": "Spiraling desert dust whirlwind. (Barton 1921)"
          },
          {
            "target": "Egiru (pl. ngakiro)",
            "source": "Thunder",
            "pronunciation": "e-gi-ru",
            "hint": "Thunder resounding during seasonal storms. (Barton 1921)"
          },
          {
            "target": "Emilia",
            "source": "Lightning",
            "pronunciation": "e-mi-lia",
            "hint": "Flash of lightning. (Barton 1921)"
          },
          {
            "target": "Elup / Ngalup",
            "source": "Earth / Soil / Ground",
            "pronunciation": "e-lup / nga-lup",
            "hint": "Soil and ground surface. (Barton 1921)"
          },
          {
            "target": "Athinuin / Asinik",
            "source": "Sand",
            "pronunciation": "athi-nuin / a-si-nik",
            "hint": "Desert and riverbed sand. (Barton 1921)"
          },
          {
            "target": "Amoro (pl. ngamur)",
            "source": "Stone / Rock",
            "pronunciation": "a-mo-ro",
            "hint": "Stone or boulder. White quartz: 'Amoro ekwan'. (Barton 1921)"
          },
          {
            "target": "Ebur / Ejwa (pl. ngiburin / ngejowi)",
            "source": "Rock pool / Spring",
            "pronunciation": "e-bur / ejwa",
            "hint": "Natural rock pool or perennial freshwater spring. (Barton 1921)"
          },
          {
            "target": "Akar (pl. ngakari)",
            "source": "Well",
            "pronunciation": "a-kar",
            "hint": "Hand-dug sand river well where livestock water. (Barton 1921)"
          },
          {
            "target": "Echoto",
            "source": "Mud",
            "pronunciation": "echo-to",
            "hint": "Rain mud or river silt. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akuich / Akuj\" mean in English?",
            "correctAnswer": "Sky / Heaven",
            "options": [
              "Cloud",
              "Wind",
              "Whirlwind / Dust devil",
              "Sky / Heaven"
            ],
            "hint": "The vault of heaven and celestial abode of God. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Edu (pl. ngeduon)\" mean in English?",
            "correctAnswer": "Cloud",
            "options": [
              "Wind",
              "Whirlwind / Dust devil",
              "Cloud",
              "Sky / Heaven"
            ],
            "hint": "Rain cloud. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atorot / Ekuwam (pl. ngatorot / ngikuwamin)\" mean in English?",
            "correctAnswer": "Wind",
            "options": [
              "Whirlwind / Dust devil",
              "Wind",
              "Sky / Heaven",
              "Cloud"
            ],
            "hint": "Breeze or wind across the plains. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Wind\" in Turkana?",
            "correctAnswer": "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
            "options": [
              "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
              "Akuich / Akuj",
              "Edu (pl. ngeduon)",
              "Ekwam (pl. ngakwama)"
            ],
            "hint": "ah-toh-roht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Whirlwind / Dust devil\" in Turkana?",
            "correctAnswer": "Ekwam (pl. ngakwama)",
            "options": [
              "Akuich / Akuj",
              "Edu (pl. ngeduon)",
              "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
              "Ekwam (pl. ngakwama)"
            ],
            "hint": "eh-kwahm"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Thunder\" in Turkana?",
            "correctAnswer": "Egiru (pl. ngakiro)",
            "options": [
              "Edu (pl. ngeduon)",
              "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
              "Egiru (pl. ngakiro)",
              "Akuich / Akuj"
            ],
            "hint": "eh-gee-roo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Akuich / Akuj: Sky / Heaven, Edu (pl. ngeduon): Cloud, Atorot / Ekuwam (pl. ngatorot / ngikuwamin): Wind, Ekwam (pl. ngakwama): Whirlwind / Dust devil",
            "pairs": [
              {
                "left": "Akuich / Akuj",
                "right": "Sky / Heaven"
              },
              {
                "left": "Edu (pl. ngeduon)",
                "right": "Cloud"
              },
              {
                "left": "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
                "right": "Wind"
              },
              {
                "left": "Ekwam (pl. ngakwama)",
                "right": "Whirlwind / Dust devil"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-nature-3",
        "title": "Nature & Environment (Part 3)",
        "icon": "Sprout",
        "description": "Master Turkana nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akitoi / E'kitoi (pl. ngakito)' (Tree), 'Ateni (pl. ngateni)' (Tree branch), 'Akobuket (pl. ngabuk)' (Tree bark), 'Akui (pl. ngakui)' (Leaf).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Akitoi / E'kitoi (pl. ngakito)",
            "source": "Tree",
            "pronunciation": "a-ki-toi / e'ki-toi",
            "hint": "Living tree or medicinal wood. Plural: Ngakito. (Barton 1921)"
          },
          {
            "target": "Ateni (pl. ngateni)",
            "source": "Tree branch",
            "pronunciation": "a-te-ni",
            "hint": "Branch or bough of a tree. (Barton 1921)"
          },
          {
            "target": "Akobuket (pl. ngabuk)",
            "source": "Tree bark",
            "pronunciation": "a-ko-bu-ket",
            "hint": "Bark stripped from trees for rope and medicinal uses. (Barton 1921)"
          },
          {
            "target": "Akui (pl. ngakui)",
            "source": "Leaf",
            "pronunciation": "a-kui",
            "hint": "Tree foliage or medicinal leaf. (Barton 1921)"
          },
          {
            "target": "Atagorot (pl. ngatagor)",
            "source": "Root",
            "pronunciation": "a-ta-go-rot",
            "hint": "Plant or tree root used in healing concoctions. (Barton 1921)"
          },
          {
            "target": "Amel / Amelu",
            "source": "Grass / Pasture",
            "pronunciation": "a-mel / a-me-lu",
            "hint": "Fresh tender pasture for cattle and sheep. (Barton 1921)"
          },
          {
            "target": "Akokai (pl. ngoka)",
            "source": "Thorn",
            "pronunciation": "a-ko-kai",
            "hint": "Thorn used in defensive kraal fencing. (Barton 1921)"
          },
          {
            "target": "Akwap / Akwop (pl. ngakwapa)",
            "source": "Land / Country",
            "pronunciation": "akwap / akwop",
            "hint": "Ancestral homeland or territory. (Barton 1921)"
          },
          {
            "target": "akolon, pl. ngakolon",
            "source": "Sun",
            "pronunciation": "akolon"
          }
        ],
        "sentences": [
          {
            "target": "Akitoi — Ateni",
            "source": "Tree — Tree branch"
          },
          {
            "target": "Akobuket — Akui",
            "source": "Tree bark — Leaf"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akitoi\" mean in English?",
            "correctAnswer": "Tree",
            "options": [
              "Tree",
              "Tree branch",
              "Tree bark",
              "Leaf"
            ],
            "hint": "Core vocabulary in Nature & Environment (Part 3)"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Tree branch\"",
            "correctAnswer": "Ateni",
            "acceptedAnswers": [
              "Ateni (pl. ngateni)",
              "Ateni"
            ],
            "hint": "Starts with \"At\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Akobuket\"",
            "correctAnswer": "Tree bark",
            "acceptedAnswers": [
              "Tree bark",
              "Tree bark"
            ],
            "hint": "Review Nature & Environment (Part 3)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Nature & Environment (Part 3) with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Akitoi",
                "right": "Tree"
              },
              {
                "left": "Ateni",
                "right": "Tree branch"
              },
              {
                "left": "Akobuket",
                "right": "Tree bark"
              },
              {
                "left": "Akui",
                "right": "Leaf"
              },
              {
                "left": "Atagorot",
                "right": "Root"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-7-body",
    "title": "Unit 7: Body Parts",
    "description": "Comprehensive Turkana curriculum for Body Parts, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Activity",
    "skills": [
      {
        "id": "turkana-exp-body",
        "title": "Body Parts (Part 1)",
        "icon": "Activity",
        "description": "Master Turkana body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ako / Akou (pl. nyakis / ngakouō)' (Head), 'Atimat / Ngetim (pl. ngatim)' (Hair), 'Akon / Akong (pl. ngakonyan)' (Eye), 'Agit / Akit (pl. nyagi / ngaki)' (Ear).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ako / Akou (pl. nyakis / ngakouō)",
            "source": "Head",
            "pronunciation": "ako / a-kou",
            "hint": "Head. Plural: Nyakis / Ngakouo. (Barton 1921)"
          },
          {
            "target": "Atimat / Ngetim (pl. ngatim)",
            "source": "Hair",
            "pronunciation": "a-ti-mat / nge-tim",
            "hint": "Human hair. (Barton 1921)"
          },
          {
            "target": "Akon / Akong (pl. ngakonyan)",
            "source": "Eye",
            "pronunciation": "a-kon / a-kong",
            "hint": "Eye. Plural: Ngakonyan. (Barton 1921)"
          },
          {
            "target": "Agit / Akit (pl. nyagi / ngaki)",
            "source": "Ear",
            "pronunciation": "a-git / a-kit",
            "hint": "Ear. Plural: Nyagi / Ngaki. (Barton 1921)"
          },
          {
            "target": "Ekumi (pl. ngikumith / ngikumes)",
            "source": "Nose",
            "pronunciation": "e-ku-mi",
            "hint": "Nose. Plural: Ngikumith. (Barton 1921)"
          },
          {
            "target": "Akitok (pl. ngakituka)",
            "source": "Mouth",
            "pronunciation": "a-ki-tok",
            "hint": "Mouth. Plural: Ngakituka. (Barton 1921)"
          },
          {
            "target": "Akitok (pl. ngakutoka)",
            "source": "Lip",
            "pronunciation": "a-ki-tok",
            "hint": "Lips. (Barton 1921)"
          },
          {
            "target": "Agelai / Ekelai (pl. ngelai / ngikelai)",
            "source": "Tooth",
            "pronunciation": "a-ge-lai / e-ke-lai",
            "hint": "Tooth. Plural: Ngelai. (Barton 1921)"
          },
          {
            "target": "Aliep / Angajep (pl. ngaliep / ngangajepa)",
            "source": "Tongue",
            "pronunciation": "a-liep / anga-jep",
            "hint": "Tongue. (Barton 1921)"
          },
          {
            "target": "Edokoli (pl. ngadokoli)",
            "source": "Throat",
            "pronunciation": "e-do-ko-li",
            "hint": "Throat and larynx. (Barton 1921)"
          },
          {
            "target": "Emotherin / Emosingo (pl. ngemotheringa / ngimosingo)",
            "source": "Neck",
            "pronunciation": "e-mothe-rin / e-mo-singo",
            "hint": "Neck. Plural: Ngemotheringa. (Barton 1921)"
          },
          {
            "target": "Ebenek (pl. ngebeneka)",
            "source": "Beard",
            "pronunciation": "e-be-nek",
            "hint": "Facial beard or chin whiskers. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ako / Akou (pl. nyakis / ngakouō)\" mean in English?",
            "correctAnswer": "Head",
            "options": [
              "Hair",
              "Eye",
              "Ear",
              "Head"
            ],
            "hint": "Head. Plural: Nyakis / Ngakouo. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atimat / Ngetim (pl. ngatim)\" mean in English?",
            "correctAnswer": "Hair",
            "options": [
              "Eye",
              "Ear",
              "Hair",
              "Head"
            ],
            "hint": "Human hair. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akon / Akong (pl. ngakonyan)\" mean in English?",
            "correctAnswer": "Eye",
            "options": [
              "Ear",
              "Eye",
              "Head",
              "Hair"
            ],
            "hint": "Eye. Plural: Ngakonyan. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eye\" in Turkana?",
            "correctAnswer": "Akon / Akong (pl. ngakonyan)",
            "options": [
              "Akon / Akong (pl. ngakonyan)",
              "Ako / Akou (pl. nyakis / ngakouō)",
              "Atimat / Ngetim (pl. ngatim)",
              "Agit / Akit (pl. nyagi / ngaki)"
            ],
            "hint": "ah-kohn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ear\" in Turkana?",
            "correctAnswer": "Agit / Akit (pl. nyagi / ngaki)",
            "options": [
              "Ako / Akou (pl. nyakis / ngakouō)",
              "Atimat / Ngetim (pl. ngatim)",
              "Akon / Akong (pl. ngakonyan)",
              "Agit / Akit (pl. nyagi / ngaki)"
            ],
            "hint": "ah-geet / ah-keet"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Turkana?",
            "correctAnswer": "Ekumi (pl. ngikumith / ngikumes)",
            "options": [
              "Atimat / Ngetim (pl. ngatim)",
              "Akon / Akong (pl. ngakonyan)",
              "Ekumi (pl. ngikumith / ngikumes)",
              "Ako / Akou (pl. nyakis / ngakouō)"
            ],
            "hint": "eh-koo-mee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ako / Akou (pl. nyakis / ngakouō): Head, Atimat / Ngetim (pl. ngatim): Hair, Akon / Akong (pl. ngakonyan): Eye, Agit / Akit (pl. nyagi / ngaki): Ear",
            "pairs": [
              {
                "left": "Ako / Akou (pl. nyakis / ngakouō)",
                "right": "Head"
              },
              {
                "left": "Atimat / Ngetim (pl. ngatim)",
                "right": "Hair"
              },
              {
                "left": "Akon / Akong (pl. ngakonyan)",
                "right": "Eye"
              },
              {
                "left": "Agit / Akit (pl. nyagi / ngaki)",
                "right": "Ear"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-body-2",
        "title": "Body Parts (Part 2)",
        "icon": "Eye",
        "description": "Master Turkana body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Eret (pl. ngeretin)' (Face), 'Ethiket / Ekeget (pl. ngethiketa / ngikegeta)' (Shoulder), 'Etorob (pl. ngatorobio)' (Chest), 'Ethigina / Ekidi (pl. ngethigin)' (Breast).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Eret (pl. ngeretin)",
            "source": "Face",
            "pronunciation": "e-ret",
            "hint": "Face or brow. (Barton 1921)"
          },
          {
            "target": "Ethiket / Ekeget (pl. ngethiketa / ngikegeta)",
            "source": "Shoulder",
            "pronunciation": "ethi-ket / e-ke-get",
            "hint": "Shoulder. Plural: Ngethiketa. (Barton 1921)"
          },
          {
            "target": "Etorob (pl. ngatorobio)",
            "source": "Chest",
            "pronunciation": "e-to-rob",
            "hint": "Chest. Plural: Ngatorobio. (Barton 1921)"
          },
          {
            "target": "Ethigina / Ekidi (pl. ngethigin)",
            "source": "Breast",
            "pronunciation": "ethi-gi-na / e-ki-di",
            "hint": "Breast. Plural: Ngethigin. (Barton 1921)"
          },
          {
            "target": "Etou / Etau (pl. ngetai / ngitai)",
            "source": "Heart",
            "pronunciation": "e-tou / e-tau",
            "hint": "Anatomical heart and locus of courage. (Barton 1921)"
          },
          {
            "target": "Akok (pl. akokis)",
            "source": "Abdomen / Belly",
            "pronunciation": "a-kok",
            "hint": "Abdomen. Plural: Akokis. (Barton 1921)"
          },
          {
            "target": "Eboi (pl. ngaboyo)",
            "source": "Stomach",
            "pronunciation": "e-boi",
            "hint": "Internal stomach organ. (Barton 1921)"
          },
          {
            "target": "Egur / Eguur (pl. ngurai / ngiguur)",
            "source": "Back",
            "pronunciation": "e-gur / e-guur",
            "hint": "Human back. (Barton 1921)"
          },
          {
            "target": "Akan (pl. ngakanin)",
            "source": "Arm / Hand",
            "pronunciation": "a-kan",
            "hint": "Hand or whole arm. Plural: Ngakanin. (Barton 1921)"
          },
          {
            "target": "Etou ya akan (pl. ngetou ya ngakanin)",
            "source": "Palm of hand",
            "pronunciation": "e-tou ya a-kan",
            "hint": "Inner palm of hand. (Barton 1921)"
          },
          {
            "target": "Ekimoin (pl. ngemoyo / ngimoyin)",
            "source": "Finger",
            "pronunciation": "e-ki-moin",
            "hint": "Finger. Plural: Ngemoyo. (Barton 1921)"
          },
          {
            "target": "Ekimoin labuloi / nabolon",
            "source": "Thumb",
            "pronunciation": "e-ki-moin la-bu-loi / na-bo-lon",
            "hint": "Thumb (lit. 'big finger'). (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eret (pl. ngeretin)\" mean in English?",
            "correctAnswer": "Face",
            "options": [
              "Shoulder",
              "Chest",
              "Breast",
              "Face"
            ],
            "hint": "Face or brow. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ethiket / Ekeget (pl. ngethiketa / ngikegeta)\" mean in English?",
            "correctAnswer": "Shoulder",
            "options": [
              "Chest",
              "Breast",
              "Shoulder",
              "Face"
            ],
            "hint": "Shoulder. Plural: Ngethiketa. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Etorob (pl. ngatorobio)\" mean in English?",
            "correctAnswer": "Chest",
            "options": [
              "Breast",
              "Chest",
              "Face",
              "Shoulder"
            ],
            "hint": "Chest. Plural: Ngatorobio. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Chest\" in Turkana?",
            "correctAnswer": "Etorob (pl. ngatorobio)",
            "options": [
              "Etorob (pl. ngatorobio)",
              "Eret (pl. ngeretin)",
              "Ethiket / Ekeget (pl. ngethiketa / ngikegeta)",
              "Ethigina / Ekidi (pl. ngethigin)"
            ],
            "hint": "eh-toh-rohb"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Breast\" in Turkana?",
            "correctAnswer": "Ethigina / Ekidi (pl. ngethigin)",
            "options": [
              "Eret (pl. ngeretin)",
              "Ethiket / Ekeget (pl. ngethiketa / ngikegeta)",
              "Etorob (pl. ngatorobio)",
              "Ethigina / Ekidi (pl. ngethigin)"
            ],
            "hint": "eh-thee-gee-nah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Heart\" in Turkana?",
            "correctAnswer": "Etou / Etau (pl. ngetai / ngitai)",
            "options": [
              "Ethiket / Ekeget (pl. ngethiketa / ngikegeta)",
              "Etorob (pl. ngatorobio)",
              "Etou / Etau (pl. ngetai / ngitai)",
              "Eret (pl. ngeretin)"
            ],
            "hint": "eh-toh-oo / eh-tah-oo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Eret (pl. ngeretin): Face, Ethiket / Ekeget (pl. ngethiketa / ngikegeta): Shoulder, Etorob (pl. ngatorobio): Chest, Ethigina / Ekidi (pl. ngethigin): Breast",
            "pairs": [
              {
                "left": "Eret (pl. ngeretin)",
                "right": "Face"
              },
              {
                "left": "Ethiket / Ekeget (pl. ngethiketa / ngikegeta)",
                "right": "Shoulder"
              },
              {
                "left": "Etorob (pl. ngatorobio)",
                "right": "Chest"
              },
              {
                "left": "Ethigina / Ekidi (pl. ngethigin)",
                "right": "Breast"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-body-3",
        "title": "Body Parts (Part 3)",
        "icon": "Hand",
        "description": "Master Turkana body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Emargoit / Emagarit (pl. ngemagor)' (Fingernail / Claw), 'Akeju (pl. ngakeju)' (Leg), 'Akun / Akung (pl. ngakungin)' (Knee), 'Adapal akeju / Etou ya keju' (Foot / Sole).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Emargoit / Emagarit (pl. ngemagor)",
            "source": "Fingernail / Claw",
            "pronunciation": "e-margoit / e-ma-ga-rit",
            "hint": "Fingernail, claw, or animal hoof. (Barton 1921)"
          },
          {
            "target": "Akeju (pl. ngakeju)",
            "source": "Leg",
            "pronunciation": "a-ke-ju",
            "hint": "Leg or foot. Plural: Ngakeju. (Barton 1921)"
          },
          {
            "target": "Akun / Akung (pl. ngakungin)",
            "source": "Knee",
            "pronunciation": "a-kun / a-kung",
            "hint": "Knee joint. Plural: Ngakungin. (Barton 1921)"
          },
          {
            "target": "Adapal akeju / Etou ya keju",
            "source": "Foot / Sole",
            "pronunciation": "a-da-pal a-ke-ju / e-tou ya ke-ju",
            "hint": "Sole of foot. (Barton 1921)"
          },
          {
            "target": "Akimoin akejo (pl. ngakimmoio ngakeju)",
            "source": "Toe",
            "pronunciation": "a-ki-moin a-ke-jo",
            "hint": "Toe of the foot. (Barton 1921)"
          },
          {
            "target": "Akoit (pl. ngakoiyo)",
            "source": "Bone",
            "pronunciation": "a-koit",
            "hint": "Bone. Plural: Ngakoiyo. (Barton 1921)"
          },
          {
            "target": "Nakot / Ngakoot",
            "source": "Blood",
            "pronunciation": "na-kot / nga-koot",
            "hint": "Living blood; also tapped as pastoral sustenance. (Barton 1921)"
          },
          {
            "target": "Akwan (pl. ngouwat) / Akirin (pl. ngakir)",
            "source": "Body / Flesh",
            "pronunciation": "akwan / a-ki-rin",
            "hint": "Human body or flesh. (Barton 1921)"
          },
          {
            "target": "Emun-ya / Ejim (pl. ngemunya / ngijimyo)",
            "source": "Skin",
            "pronunciation": "emun-ya / e-jim",
            "hint": "Human skin or dressed animal pelt. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          },
          {
            "target": "Epolok ngikiliok lu.",
            "source": "These men are strong and great."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emargoit / Emagarit (pl. ngemagor)\" mean in English?",
            "correctAnswer": "Fingernail / Claw",
            "options": [
              "Leg",
              "Knee",
              "Foot / Sole",
              "Fingernail / Claw"
            ],
            "hint": "Fingernail, claw, or animal hoof. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akeju (pl. ngakeju)\" mean in English?",
            "correctAnswer": "Leg",
            "options": [
              "Knee",
              "Foot / Sole",
              "Leg",
              "Fingernail / Claw"
            ],
            "hint": "Leg or foot. Plural: Ngakeju. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akun / Akung (pl. ngakungin)\" mean in English?",
            "correctAnswer": "Knee",
            "options": [
              "Foot / Sole",
              "Knee",
              "Fingernail / Claw",
              "Leg"
            ],
            "hint": "Knee joint. Plural: Ngakungin. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Knee\" in Turkana?",
            "correctAnswer": "Akun / Akung (pl. ngakungin)",
            "options": [
              "Akun / Akung (pl. ngakungin)",
              "Emargoit / Emagarit (pl. ngemagor)",
              "Akeju (pl. ngakeju)",
              "Adapal akeju / Etou ya keju"
            ],
            "hint": "ah-koon"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Foot / Sole\" in Turkana?",
            "correctAnswer": "Adapal akeju / Etou ya keju",
            "options": [
              "Emargoit / Emagarit (pl. ngemagor)",
              "Akeju (pl. ngakeju)",
              "Akun / Akung (pl. ngakungin)",
              "Adapal akeju / Etou ya keju"
            ],
            "hint": "ah-dah-pahl ah-keh-joo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Toe\" in Turkana?",
            "correctAnswer": "Akimoin akejo (pl. ngakimmoio ngakeju)",
            "options": [
              "Akeju (pl. ngakeju)",
              "Akun / Akung (pl. ngakungin)",
              "Akimoin akejo (pl. ngakimmoio ngakeju)",
              "Emargoit / Emagarit (pl. ngemagor)"
            ],
            "hint": "eh-kee-moh-een ah-keh-joh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Emargoit / Emagarit (pl. ngemagor): Fingernail / Claw, Akeju (pl. ngakeju): Leg, Akun / Akung (pl. ngakungin): Knee, Adapal akeju / Etou ya keju: Foot / Sole",
            "pairs": [
              {
                "left": "Emargoit / Emagarit (pl. ngemagor)",
                "right": "Fingernail / Claw"
              },
              {
                "left": "Akeju (pl. ngakeju)",
                "right": "Leg"
              },
              {
                "left": "Akun / Akung (pl. ngakungin)",
                "right": "Knee"
              },
              {
                "left": "Adapal akeju / Etou ya keju",
                "right": "Foot / Sole"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-8-food",
    "title": "Unit 8: Food & Drink",
    "description": "Comprehensive Turkana curriculum for Food & Drink, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Soup",
    "skills": [
      {
        "id": "turkana-exp-food",
        "title": "Food & Drink (Part 1)",
        "icon": "Soup",
        "description": "Master Turkana food & drink vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Food & Drink, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akirin (pl. ngakerin / ngakir)' (Meat), 'Akili / Ngakile' (Milk), 'Alepan' (Fresh milk), 'Ngakikok' (Curdled milk).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Akirin (pl. ngakerin / ngakir)",
            "source": "Meat",
            "pronunciation": "a-ki-rin",
            "hint": "Meat from prepared livestock. (Barton 1921)"
          },
          {
            "target": "Akili / Ngakile",
            "source": "Milk",
            "pronunciation": "a-ki-li / nga-ki-le",
            "hint": "Fresh cow, camel, or goat milk. (Barton 1921)"
          },
          {
            "target": "Alepan",
            "source": "Fresh milk",
            "pronunciation": "a-le-pan",
            "hint": "Warm milk fresh from milking. (Barton 1921)"
          },
          {
            "target": "Ngakikok",
            "source": "Curdled milk",
            "pronunciation": "nga-ki-kok",
            "hint": "Sour fermented milk curd, a dietary staple. (Barton 1921)"
          },
          {
            "target": "Akimet (pl. ngakajonon / ngameta)",
            "source": "Butter / Ghee / Fat",
            "pronunciation": "a-ki-met",
            "hint": "Clarified butter or melted fat. (Barton 1921)"
          },
          {
            "target": "Nyesik / Nadaka",
            "source": "Honey",
            "pronunciation": "nye-sik / na-da-ka",
            "hint": "Wild bush honey collected from cliff and tree hives. (Barton 1921)"
          },
          {
            "target": "Ngapok",
            "source": "Soup / Broth",
            "pronunciation": "nga-pok",
            "hint": "Rich broth made by boiling meat and marrow bones. (Barton 1921)"
          },
          {
            "target": "Mumwa / Ngimumwa",
            "source": "Millet / Sorghum (grain)",
            "pronunciation": "mumwa / ngi-mumwa",
            "hint": "Drought-hardy sorghum grain cultivated in river floodplains. (Barton 1921)"
          },
          {
            "target": "Ngakima",
            "source": "Eleusine / Finger millet",
            "pronunciation": "nga-ki-ma",
            "hint": "Finger millet grain. (Barton 1921)"
          },
          {
            "target": "Nyepepe / Ekabur",
            "source": "Maize",
            "pronunciation": "nye-pe-pe / e-ka-bur",
            "hint": "Corn / maize cobs. (Barton 1921)"
          },
          {
            "target": "Ngamari",
            "source": "Beans",
            "pronunciation": "nga-ma-ri",
            "hint": "Cultivated beans. (Barton 1921)"
          },
          {
            "target": "Ngakiriyek / Ngakirio",
            "source": "Flour",
            "pronunciation": "nga-ki-ri-yek / nga-ki-rio",
            "hint": "Ground stone flour used for atap porridge. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akirin (pl. ngakerin / ngakir)\" mean in English?",
            "correctAnswer": "Meat",
            "options": [
              "Milk",
              "Fresh milk",
              "Curdled milk",
              "Meat"
            ],
            "hint": "Meat from prepared livestock. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akili / Ngakile\" mean in English?",
            "correctAnswer": "Milk",
            "options": [
              "Fresh milk",
              "Curdled milk",
              "Milk",
              "Meat"
            ],
            "hint": "Fresh cow, camel, or goat milk. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alepan\" mean in English?",
            "correctAnswer": "Fresh milk",
            "options": [
              "Curdled milk",
              "Fresh milk",
              "Meat",
              "Milk"
            ],
            "hint": "Warm milk fresh from milking. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fresh milk\" in Turkana?",
            "correctAnswer": "Alepan",
            "options": [
              "Alepan",
              "Akirin (pl. ngakerin / ngakir)",
              "Akili / Ngakile",
              "Ngakikok"
            ],
            "hint": "ah-leh-pahn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Curdled milk\" in Turkana?",
            "correctAnswer": "Ngakikok",
            "options": [
              "Akirin (pl. ngakerin / ngakir)",
              "Akili / Ngakile",
              "Alepan",
              "Ngakikok"
            ],
            "hint": "ngah-kee-kohk"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Butter / Ghee / Fat\" in Turkana?",
            "correctAnswer": "Akimet (pl. ngakajonon / ngameta)",
            "options": [
              "Akili / Ngakile",
              "Alepan",
              "Akimet (pl. ngakajonon / ngameta)",
              "Akirin (pl. ngakerin / ngakir)"
            ],
            "hint": "ah-kee-meht"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Akirin (pl. ngakerin / ngakir): Meat, Akili / Ngakile: Milk, Alepan: Fresh milk, Ngakikok: Curdled milk",
            "pairs": [
              {
                "left": "Akirin (pl. ngakerin / ngakir)",
                "right": "Meat"
              },
              {
                "left": "Akili / Ngakile",
                "right": "Milk"
              },
              {
                "left": "Alepan",
                "right": "Fresh milk"
              },
              {
                "left": "Ngakikok",
                "right": "Curdled milk"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-food-2",
        "title": "Food & Drink (Part 2)",
        "icon": "Coffee",
        "description": "Master Turkana food & drink vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Food & Drink, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akimoich / Akimuj (pl. ngimocha)' (Food (provisions)), 'Ng'akipi / Agipi' (Drinking water), 'Edot (pl. ngedotin)' (Salt / Salt-lick), 'Enyakait (pl. nganyakaita)' (Chewing tobacco).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Akimoich / Akimuj (pl. ngimocha)",
            "source": "Food (provisions)",
            "pronunciation": "a-ki-moich / a-ki-muj",
            "hint": "Food and subsistence sustenance. (Barton 1921)"
          },
          {
            "target": "Ng'akipi / Agipi",
            "source": "Drinking water",
            "pronunciation": "ng'a-ki-pi / a-gi-pi",
            "hint": "Drinking water drawn from wells. (Barton 1921)"
          },
          {
            "target": "Edot (pl. ngedotin)",
            "source": "Salt / Salt-lick",
            "pronunciation": "e-dot",
            "hint": "Mineral-rich soil and salt ingested by stock. (Barton 1921)"
          },
          {
            "target": "Enyakait (pl. nganyakaita)",
            "source": "Chewing tobacco",
            "pronunciation": "enya-kait",
            "hint": "Traditional cured tobacco chewed with ash. (Barton 1921)"
          },
          {
            "target": "Etaba ekumi (pl. ngetabin ekumi)",
            "source": "Snuff tobacco",
            "pronunciation": "e-ta-ba e-ku-mi",
            "hint": "Aromatic fine snuff powder. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akimoich / Akimuj (pl. ngimocha)\" mean in English?",
            "correctAnswer": "Food (provisions)",
            "options": [
              "Drinking water",
              "Salt / Salt-lick",
              "Chewing tobacco",
              "Food (provisions)"
            ],
            "hint": "Food and subsistence sustenance. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ng'akipi / Agipi\" mean in English?",
            "correctAnswer": "Drinking water",
            "options": [
              "Salt / Salt-lick",
              "Chewing tobacco",
              "Drinking water",
              "Food (provisions)"
            ],
            "hint": "Drinking water drawn from wells. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Edot (pl. ngedotin)\" mean in English?",
            "correctAnswer": "Salt / Salt-lick",
            "options": [
              "Chewing tobacco",
              "Salt / Salt-lick",
              "Food (provisions)",
              "Drinking water"
            ],
            "hint": "Mineral-rich soil and salt ingested by stock. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Salt / Salt-lick\" in Turkana?",
            "correctAnswer": "Edot (pl. ngedotin)",
            "options": [
              "Edot (pl. ngedotin)",
              "Akimoich / Akimuj (pl. ngimocha)",
              "Ng'akipi / Agipi",
              "Enyakait (pl. nganyakaita)"
            ],
            "hint": "eh-doht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Chewing tobacco\" in Turkana?",
            "correctAnswer": "Enyakait (pl. nganyakaita)",
            "options": [
              "Akimoich / Akimuj (pl. ngimocha)",
              "Ng'akipi / Agipi",
              "Edot (pl. ngedotin)",
              "Enyakait (pl. nganyakaita)"
            ],
            "hint": "eh-nyah-kah-eet"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Snuff tobacco\" in Turkana?",
            "correctAnswer": "Etaba ekumi (pl. ngetabin ekumi)",
            "options": [
              "Ng'akipi / Agipi",
              "Edot (pl. ngedotin)",
              "Etaba ekumi (pl. ngetabin ekumi)",
              "Akimoich / Akimuj (pl. ngimocha)"
            ],
            "hint": "eh-tah-bah eh-koo-mee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Akimoich / Akimuj (pl. ngimocha): Food (provisions), Ng'akipi / Agipi: Drinking water, Edot (pl. ngedotin): Salt / Salt-lick, Enyakait (pl. nganyakaita): Chewing tobacco",
            "pairs": [
              {
                "left": "Akimoich / Akimuj (pl. ngimocha)",
                "right": "Food (provisions)"
              },
              {
                "left": "Ng'akipi / Agipi",
                "right": "Drinking water"
              },
              {
                "left": "Edot (pl. ngedotin)",
                "right": "Salt / Salt-lick"
              },
              {
                "left": "Enyakait (pl. nganyakaita)",
                "right": "Chewing tobacco"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-9-home",
    "title": "Unit 9: Home & Material Culture",
    "description": "Comprehensive Turkana curriculum for Home & Material Culture, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Home",
    "skills": [
      {
        "id": "turkana-exp-home",
        "title": "Home & Material Culture (Part 1)",
        "icon": "Home",
        "description": "Master Turkana home & material culture vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Home & Material Culture, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ouwi / Nawi (pl. ngouwi / ngawiyoi)' (Homestead / Village), 'Akie / Akai (pl. ngakiyis / ngkais)' (House / Family hut), 'Akidor (pl. ngidorin / ngikidoria)' (Door / Kraal gate), 'Anuk / Anok (pl. nganukim / ngokin)' (Cattle kraal / Enclosure).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ouwi / Nawi (pl. ngouwi / ngawiyoi)",
            "source": "Homestead / Village",
            "pronunciation": "ou-wi / na-wi",
            "hint": "Nomadic pastoral kraal and family settlement. (Barton 1921)"
          },
          {
            "target": "Akie / Akai (pl. ngakiyis / ngkais)",
            "source": "House / Family hut",
            "pronunciation": "a-kie / a-kai",
            "hint": "Domed sleeping shelter framed with bent branches and thatched. (Barton 1921)"
          },
          {
            "target": "Akidor (pl. ngidorin / ngikidoria)",
            "source": "Door / Kraal gate",
            "pronunciation": "a-ki-dor",
            "hint": "Entrance gate in the thorn bush perimeter of the kraal. (Barton 1921)"
          },
          {
            "target": "Anuk / Anok (pl. nganukim / ngokin)",
            "source": "Cattle kraal / Enclosure",
            "pronunciation": "a-nuk / a-nok",
            "hint": "Thorn barrier enclosing livestock overnight. (Barton 1921)"
          },
          {
            "target": "Achokor (pl. ngachokoritho)",
            "source": "Grazing ground",
            "pronunciation": "acho-kor",
            "hint": "Designated pasture territory for herds. (Barton 1921)"
          },
          {
            "target": "Ipem / Epem (pl. nyepemin / ngapemiok)",
            "source": "Bed / Sleeping mat",
            "pronunciation": "i-pem / e-pem",
            "hint": "Raised wooden platform bed. (Barton 1921)"
          },
          {
            "target": "Ekijolon / Ekicholong (pl. ngijolona / ngikicholonga)",
            "source": "Carved headrest / Stool",
            "pronunciation": "e-ki-jo-lon / e-kicho-long",
            "hint": "Iconic carved wooden headrest carried everywhere by Turkana men. (Barton 1921)"
          },
          {
            "target": "Emaguk (pl. ngemogaka)",
            "source": "Sitting stool",
            "pronunciation": "e-ma-guk",
            "hint": "Low wooden stool for resting in the compound. (Barton 1921)"
          },
          {
            "target": "Etu / Itu (pl. ngetuel / ngetui)",
            "source": "Calabash / Milk gourd",
            "pronunciation": "etu / itu",
            "hint": "Dried gourd vessel used for churning and drinking milk. (Barton 1921)"
          },
          {
            "target": "Edera / Eboli (pl. ngaderai / ngibolai)",
            "source": "Half gourd / Drinking cup",
            "pronunciation": "e-de-ra / e-bo-li",
            "hint": "Hemispherical gourd cup. (Barton 1921)"
          },
          {
            "target": "Elipit (pl. ngilipai)",
            "source": "Wooden milk bowl",
            "pronunciation": "e-li-pit",
            "hint": "Carved wooden bowl for sipping milk. (Barton 1921)"
          },
          {
            "target": "Emwut (pl. ngemwuti)",
            "source": "Large water jar",
            "pronunciation": "emwut",
            "hint": "Water storage container. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ouwi / Nawi (pl. ngouwi / ngawiyoi)\" mean in English?",
            "correctAnswer": "Homestead / Village",
            "options": [
              "House / Family hut",
              "Door / Kraal gate",
              "Cattle kraal / Enclosure",
              "Homestead / Village"
            ],
            "hint": "Nomadic pastoral kraal and family settlement. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akie / Akai (pl. ngakiyis / ngkais)\" mean in English?",
            "correctAnswer": "House / Family hut",
            "options": [
              "Door / Kraal gate",
              "Cattle kraal / Enclosure",
              "House / Family hut",
              "Homestead / Village"
            ],
            "hint": "Domed sleeping shelter framed with bent branches and thatched. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akidor (pl. ngidorin / ngikidoria)\" mean in English?",
            "correctAnswer": "Door / Kraal gate",
            "options": [
              "Cattle kraal / Enclosure",
              "Door / Kraal gate",
              "Homestead / Village",
              "House / Family hut"
            ],
            "hint": "Entrance gate in the thorn bush perimeter of the kraal. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Door / Kraal gate\" in Turkana?",
            "correctAnswer": "Akidor (pl. ngidorin / ngikidoria)",
            "options": [
              "Akidor (pl. ngidorin / ngikidoria)",
              "Ouwi / Nawi (pl. ngouwi / ngawiyoi)",
              "Akie / Akai (pl. ngakiyis / ngkais)",
              "Anuk / Anok (pl. nganukim / ngokin)"
            ],
            "hint": "ah-kee-dohr"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cattle kraal / Enclosure\" in Turkana?",
            "correctAnswer": "Anuk / Anok (pl. nganukim / ngokin)",
            "options": [
              "Ouwi / Nawi (pl. ngouwi / ngawiyoi)",
              "Akie / Akai (pl. ngakiyis / ngkais)",
              "Akidor (pl. ngidorin / ngikidoria)",
              "Anuk / Anok (pl. nganukim / ngokin)"
            ],
            "hint": "ah-nook"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Grazing ground\" in Turkana?",
            "correctAnswer": "Achokor (pl. ngachokoritho)",
            "options": [
              "Akie / Akai (pl. ngakiyis / ngkais)",
              "Akidor (pl. ngidorin / ngikidoria)",
              "Achokor (pl. ngachokoritho)",
              "Ouwi / Nawi (pl. ngouwi / ngawiyoi)"
            ],
            "hint": "ah-choh-kohr"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ouwi / Nawi (pl. ngouwi / ngawiyoi): Homestead / Village, Akie / Akai (pl. ngakiyis / ngkais): House / Family hut, Akidor (pl. ngidorin / ngikidoria): Door / Kraal gate, Anuk / Anok (pl. nganukim / ngokin): Cattle kraal / Enclosure",
            "pairs": [
              {
                "left": "Ouwi / Nawi (pl. ngouwi / ngawiyoi)",
                "right": "Homestead / Village"
              },
              {
                "left": "Akie / Akai (pl. ngakiyis / ngkais)",
                "right": "House / Family hut"
              },
              {
                "left": "Akidor (pl. ngidorin / ngikidoria)",
                "right": "Door / Kraal gate"
              },
              {
                "left": "Anuk / Anok (pl. nganukim / ngokin)",
                "right": "Cattle kraal / Enclosure"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-home-2",
        "title": "Home & Material Culture (Part 2)",
        "icon": "Landmark",
        "description": "Master Turkana home & material culture vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Home & Material Culture, pay special attention to pronunciation and morphological prefixes/suffixes: 'Amut (pl. ngamuti)' (Cooking pot), 'Akolopoich (pl. ngolopoicha)' (Traditional wooden spoon), 'Eteker / Etuba (pl. ngatekera / ngatubai)' (Watering trough), 'Akim (pl. ngakimia)' (Fire).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Amut (pl. ngamuti)",
            "source": "Cooking pot",
            "pronunciation": "a-mut",
            "hint": "Earthen pot set over hearth stones. (Barton 1921)"
          },
          {
            "target": "Akolopoich (pl. ngolopoicha)",
            "source": "Traditional wooden spoon",
            "pronunciation": "a-ko-lo-poich",
            "hint": "Carved wooden spoon. (Barton 1921)"
          },
          {
            "target": "Eteker / Etuba (pl. ngatekera / ngatubai)",
            "source": "Watering trough",
            "pronunciation": "e-te-ker / e-tu-ba",
            "hint": "Carved wooden log trough into which well water is poured for cattle. (Barton 1921)"
          },
          {
            "target": "Akim (pl. ngakimia)",
            "source": "Fire",
            "pronunciation": "a-kim",
            "hint": "Homestead fire providing light and predator defense. (Barton 1921)"
          },
          {
            "target": "Akitoi (pl. ngakito)",
            "source": "Firewood",
            "pronunciation": "a-ki-toi",
            "hint": "Dry firewood branches. (Barton 1921)"
          },
          {
            "target": "Akikoi akim (pl. ngakitoi akim)",
            "source": "Fire-making stick",
            "pronunciation": "a-ki-koi a-kim",
            "hint": "Friction stick pair spun by hand to produce embers. (Barton 1921)"
          },
          {
            "target": "Apurru / Apuru",
            "source": "Smoke",
            "pronunciation": "a-purru / a-pu-ru",
            "hint": "Hearth smoke that repels biting flies. (Barton 1921)"
          },
          {
            "target": "Amukat (pl. ngamuk)",
            "source": "Leather sandals",
            "pronunciation": "a-mu-kat",
            "hint": "Thick hide or tire sandals protecting feet from thorns and scorching sand. (Barton 1921)"
          },
          {
            "target": "Erwaro / Ouoro (pl. ngerwaroi / ngouario)",
            "source": "Cloth wrap",
            "pronunciation": "erwa-ro / ouo-ro",
            "hint": "Woven cloth garment. (Barton 1921)"
          },
          {
            "target": "Elo (pl. ngeloue)",
            "source": "Hide garment",
            "pronunciation": "elo",
            "hint": "Traditional leather skin garment. (Barton 1921)"
          },
          {
            "target": "Asowat (pl. ngathua)",
            "source": "Iron bracelet",
            "pronunciation": "a-so-wat",
            "hint": "Forged iron bracelet. (Barton 1921)"
          },
          {
            "target": "Maritoit (pl. maritoi)",
            "source": "Brass bracelet",
            "pronunciation": "ma-ri-toit",
            "hint": "Ornamental brass jewelry bracelet. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Amut (pl. ngamuti)\" mean in English?",
            "correctAnswer": "Cooking pot",
            "options": [
              "Traditional wooden spoon",
              "Watering trough",
              "Fire",
              "Cooking pot"
            ],
            "hint": "Earthen pot set over hearth stones. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akolopoich (pl. ngolopoicha)\" mean in English?",
            "correctAnswer": "Traditional wooden spoon",
            "options": [
              "Watering trough",
              "Fire",
              "Traditional wooden spoon",
              "Cooking pot"
            ],
            "hint": "Carved wooden spoon. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eteker / Etuba (pl. ngatekera / ngatubai)\" mean in English?",
            "correctAnswer": "Watering trough",
            "options": [
              "Fire",
              "Watering trough",
              "Cooking pot",
              "Traditional wooden spoon"
            ],
            "hint": "Carved wooden log trough into which well water is poured for cattle. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Watering trough\" in Turkana?",
            "correctAnswer": "Eteker / Etuba (pl. ngatekera / ngatubai)",
            "options": [
              "Eteker / Etuba (pl. ngatekera / ngatubai)",
              "Amut (pl. ngamuti)",
              "Akolopoich (pl. ngolopoicha)",
              "Akim (pl. ngakimia)"
            ],
            "hint": "eh-teh-kehr"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fire\" in Turkana?",
            "correctAnswer": "Akim (pl. ngakimia)",
            "options": [
              "Amut (pl. ngamuti)",
              "Akolopoich (pl. ngolopoicha)",
              "Eteker / Etuba (pl. ngatekera / ngatubai)",
              "Akim (pl. ngakimia)"
            ],
            "hint": "ah-keem"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Firewood\" in Turkana?",
            "correctAnswer": "Akitoi (pl. ngakito)",
            "options": [
              "Akolopoich (pl. ngolopoicha)",
              "Eteker / Etuba (pl. ngatekera / ngatubai)",
              "Akitoi (pl. ngakito)",
              "Amut (pl. ngamuti)"
            ],
            "hint": "ah-kee-toh-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Amut (pl. ngamuti): Cooking pot, Akolopoich (pl. ngolopoicha): Traditional wooden spoon, Eteker / Etuba (pl. ngatekera / ngatubai): Watering trough, Akim (pl. ngakimia): Fire",
            "pairs": [
              {
                "left": "Amut (pl. ngamuti)",
                "right": "Cooking pot"
              },
              {
                "left": "Akolopoich (pl. ngolopoicha)",
                "right": "Traditional wooden spoon"
              },
              {
                "left": "Eteker / Etuba (pl. ngatekera / ngatubai)",
                "right": "Watering trough"
              },
              {
                "left": "Akim (pl. ngakimia)",
                "right": "Fire"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-home-3",
        "title": "Home & Material Culture (Part 3)",
        "icon": "Hammer",
        "description": "Master Turkana home & material culture vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Home & Material Culture, pay special attention to pronunciation and morphological prefixes/suffixes: 'Amedok (pl. ngemedoi)' (Mud head-dress), 'Eburiangan (pl. ngeburianganga)' (Tobacco box), 'Echui (pl. ngechuin)' (Skin pouch / Bag), 'Echiro (pl. ngichiroi)' (Market).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Amedok (pl. ngemedoi)",
            "source": "Mud head-dress",
            "pronunciation": "a-me-dok",
            "hint": "Sculpted clay and blue-pigment coiffure worn by initiated Turkana men. (Barton 1921)"
          },
          {
            "target": "Eburiangan (pl. ngeburianganga)",
            "source": "Tobacco box",
            "pronunciation": "e-bu-riangan",
            "hint": "Carved horn container holding tobacco. (Barton 1921)"
          },
          {
            "target": "Echui (pl. ngechuin)",
            "source": "Skin pouch / Bag",
            "pronunciation": "echui",
            "hint": "Leather carrying pouch. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          },
          {
            "target": "Epolok ngikiliok lu.",
            "source": "These men are strong and great."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Amedok (pl. ngemedoi)\" mean in English?",
            "correctAnswer": "Mud head-dress",
            "options": [
              "Tobacco box",
              "Skin pouch / Bag",
              "Market",
              "Mud head-dress"
            ],
            "hint": "Sculpted clay and blue-pigment coiffure worn by initiated Turkana men. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eburiangan (pl. ngeburianganga)\" mean in English?",
            "correctAnswer": "Tobacco box",
            "options": [
              "Skin pouch / Bag",
              "Market",
              "Tobacco box",
              "Mud head-dress"
            ],
            "hint": "Carved horn container holding tobacco. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Echui (pl. ngechuin)\" mean in English?",
            "correctAnswer": "Skin pouch / Bag",
            "options": [
              "Market",
              "Skin pouch / Bag",
              "Mud head-dress",
              "Tobacco box"
            ],
            "hint": "Leather carrying pouch. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Skin pouch / Bag\" in Turkana?",
            "correctAnswer": "Echui (pl. ngechuin)",
            "options": [
              "Echui (pl. ngechuin)",
              "Amedok (pl. ngemedoi)",
              "Eburiangan (pl. ngeburianganga)",
              "Echiro (pl. ngichiroi)"
            ],
            "hint": "eh-choo-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Amedok (pl. ngemedoi): Mud head-dress, Eburiangan (pl. ngeburianganga): Tobacco box, Echui (pl. ngechuin): Skin pouch / Bag",
            "pairs": [
              {
                "left": "Amedok (pl. ngemedoi)",
                "right": "Mud head-dress"
              },
              {
                "left": "Eburiangan (pl. ngeburianganga)",
                "right": "Tobacco box"
              },
              {
                "left": "Echui (pl. ngechuin)",
                "right": "Skin pouch / Bag"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-10-weapons-tools",
    "title": "Unit 10: Weapons & Tools",
    "description": "Comprehensive Turkana curriculum for Weapons & Tools, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Globe",
    "skills": [
      {
        "id": "turkana-exp-weapons-tools",
        "title": "Weapons & Tools (Part 1)",
        "icon": "Hammer",
        "description": "Master Turkana weapons & tools vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Weapons & Tools, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akwara / A'kwara (pl. ngakwarath / ngawarath)' (Spear), 'Emorok (pl. ngemorkin)' (Spear shaft), 'Akuraro (pl. ngakuraroi)' (Spear sheath), 'Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)' (Shield).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Akwara / A'kwara (pl. ngakwarath / ngawarath)",
            "source": "Spear",
            "pronunciation": "akwa-ra / a'kwa-ra",
            "hint": "Long slender iron spear carried by warriors and elders for defense. (Barton 1921)"
          },
          {
            "target": "Emorok (pl. ngemorkin)",
            "source": "Spear shaft",
            "pronunciation": "e-mo-rok",
            "hint": "Polished hardwood shaft connecting spear blade and iron butt. (Barton 1921)"
          },
          {
            "target": "Akuraro (pl. ngakuraroi)",
            "source": "Spear sheath",
            "pronunciation": "a-ku-ra-ro",
            "hint": "Decorated leather cap shielding the spearhead tip. (Barton 1921)"
          },
          {
            "target": "Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)",
            "source": "Shield",
            "pronunciation": "oupwol / e'gwoe / egwo",
            "hint": "Elongated battle shield formed of thick cured buffalo or giraffe leather. (Barton 1921)"
          },
          {
            "target": "Ekileng / A'kileng (pl. ngakilengya / ngilenya)",
            "source": "Knife",
            "pronunciation": "e-ki-leng / a'ki-leng",
            "hint": "Iron knife used for utility and defense. (Barton 1921)"
          },
          {
            "target": "Abarait (pl. ngibara)",
            "source": "Wrist knife (Abarait)",
            "pronunciation": "a-ba-rait",
            "hint": "Famous circular razor-sharp steel blade worn on the wrist for hand combat and daily tasks. (Barton 1921)"
          },
          {
            "target": "Akoli (pl. ngakoli)",
            "source": "Finger knife",
            "pronunciation": "a-ko-li",
            "hint": "Small curved iron hook knife worn on a finger. (Barton 1921)"
          },
          {
            "target": "Ebiro (pl. ngiberoi)",
            "source": "Fighting club / Rungu",
            "pronunciation": "e-bi-ro",
            "hint": "Weighted heavy wooden throwing club. (Barton 1921)"
          },
          {
            "target": "Ebelebel (pl. ngebelebellai)",
            "source": "Curved throwing stick",
            "pronunciation": "e-be-le-bel",
            "hint": "Flat curved throwing weapon used in hunting and close combat. (Barton 1921)"
          },
          {
            "target": "Ebela (pl. ngabellai)",
            "source": "Shepherd's stick",
            "pronunciation": "e-be-la",
            "hint": "Long walking stick carried by shepherds to guide stock. (Barton 1921)"
          },
          {
            "target": "Akou (pl. ngakouō)",
            "source": "Bow",
            "pronunciation": "a-kou",
            "hint": "Hunting bow strung with animal sinew. (Barton 1921)"
          },
          {
            "target": "Akoiyet (pl. ngoi)",
            "source": "Arrow",
            "pronunciation": "a-koi-yet",
            "hint": "Iron-barbed arrow. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akwara / A'kwara (pl. ngakwarath / ngawarath)\" mean in English?",
            "correctAnswer": "Spear",
            "options": [
              "Spear shaft",
              "Spear sheath",
              "Shield",
              "Spear"
            ],
            "hint": "Long slender iron spear carried by warriors and elders for defense. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emorok (pl. ngemorkin)\" mean in English?",
            "correctAnswer": "Spear shaft",
            "options": [
              "Spear sheath",
              "Shield",
              "Spear shaft",
              "Spear"
            ],
            "hint": "Polished hardwood shaft connecting spear blade and iron butt. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akuraro (pl. ngakuraroi)\" mean in English?",
            "correctAnswer": "Spear sheath",
            "options": [
              "Shield",
              "Spear sheath",
              "Spear",
              "Spear shaft"
            ],
            "hint": "Decorated leather cap shielding the spearhead tip. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Spear sheath\" in Turkana?",
            "correctAnswer": "Akuraro (pl. ngakuraroi)",
            "options": [
              "Akuraro (pl. ngakuraroi)",
              "Akwara / A'kwara (pl. ngakwarath / ngawarath)",
              "Emorok (pl. ngemorkin)",
              "Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)"
            ],
            "hint": "ah-koo-rah-roh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Shield\" in Turkana?",
            "correctAnswer": "Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)",
            "options": [
              "Akwara / A'kwara (pl. ngakwarath / ngawarath)",
              "Emorok (pl. ngemorkin)",
              "Akuraro (pl. ngakuraroi)",
              "Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)"
            ],
            "hint": "oh-pwohl / eh-gwoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Knife\" in Turkana?",
            "correctAnswer": "Ekileng / A'kileng (pl. ngakilengya / ngilenya)",
            "options": [
              "Emorok (pl. ngemorkin)",
              "Akuraro (pl. ngakuraroi)",
              "Ekileng / A'kileng (pl. ngakilengya / ngilenya)",
              "Akwara / A'kwara (pl. ngakwarath / ngawarath)"
            ],
            "hint": "eh-kee-lehng"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Akwara / A'kwara (pl. ngakwarath / ngawarath): Spear, Emorok (pl. ngemorkin): Spear shaft, Akuraro (pl. ngakuraroi): Spear sheath, Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi): Shield",
            "pairs": [
              {
                "left": "Akwara / A'kwara (pl. ngakwarath / ngawarath)",
                "right": "Spear"
              },
              {
                "left": "Emorok (pl. ngemorkin)",
                "right": "Spear shaft"
              },
              {
                "left": "Akuraro (pl. ngakuraroi)",
                "right": "Spear sheath"
              },
              {
                "left": "Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)",
                "right": "Shield"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-weapons-tools-2",
        "title": "Weapons & Tools (Part 2)",
        "icon": "PawPrint",
        "description": "Master Turkana weapons & tools vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Weapons & Tools, pay special attention to pronunciation and morphological prefixes/suffixes: 'Atom (pl. ngetom)' (Rifle / Gun), 'Atom (pl. ngatom)' (War horn / Trumpet), 'Akuta (pl. ngakuta)' (Wooden digging stick), 'Ameleko (pl. ngemelakoi)' (Iron hoe).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Atom (pl. ngetom)",
            "source": "Rifle / Gun",
            "pronunciation": "a-tom",
            "hint": "Firearm; named historically from early trade linked with elephant hunting. (Barton 1921)"
          },
          {
            "target": "Atom (pl. ngatom)",
            "source": "War horn / Trumpet",
            "pronunciation": "a-tom",
            "hint": "Carved wood or oryx horn trumpet blown to signal assemblies or alarms. (Barton 1921)"
          },
          {
            "target": "Akuta (pl. ngakuta)",
            "source": "Wooden digging stick",
            "pronunciation": "a-ku-ta",
            "hint": "Hardwood pointed digging stick for seasonal gardening and digging wells. (Barton 1921)"
          },
          {
            "target": "Ameleko (pl. ngemelakoi)",
            "source": "Iron hoe",
            "pronunciation": "a-me-le-ko",
            "hint": "Forged iron cultivating hoe. (Barton 1921)"
          },
          {
            "target": "Eyap (pl. ngaiyapai)",
            "source": "Axe",
            "pronunciation": "e-yap",
            "hint": "Small wood-cutting axe used to gather acacia boma fencing. (Barton 1921)"
          },
          {
            "target": "Emoto (pl. ngemotoin)",
            "source": "Needle / Awl",
            "pronunciation": "e-mo-to",
            "hint": "Sharp piercing needle for sewing leather garments and footwear. (Barton 1921)"
          },
          {
            "target": "Akobito (pl. ngakobit)",
            "source": "Fiber rope / Cord",
            "pronunciation": "a-ko-bi-to",
            "hint": "Strong twisted fiber cord used for tying livestock. (Barton 1921)"
          },
          {
            "target": "Ewuno / Aloit (pl. ngounui / ngaloito)",
            "source": "Animal snare / Trap",
            "pronunciation": "e-wu-no / a-loit",
            "hint": "Noose snare or pitfall trap for wild game. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atom (pl. ngetom)\" mean in English?",
            "correctAnswer": "Rifle / Gun",
            "options": [
              "War horn / Trumpet",
              "Wooden digging stick",
              "Iron hoe",
              "Rifle / Gun"
            ],
            "hint": "Firearm; named historically from early trade linked with elephant hunting. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atom (pl. ngatom)\" mean in English?",
            "correctAnswer": "War horn / Trumpet",
            "options": [
              "Wooden digging stick",
              "Iron hoe",
              "War horn / Trumpet",
              "Rifle / Gun"
            ],
            "hint": "Carved wood or oryx horn trumpet blown to signal assemblies or alarms. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akuta (pl. ngakuta)\" mean in English?",
            "correctAnswer": "Wooden digging stick",
            "options": [
              "Iron hoe",
              "Wooden digging stick",
              "Rifle / Gun",
              "War horn / Trumpet"
            ],
            "hint": "Hardwood pointed digging stick for seasonal gardening and digging wells. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Wooden digging stick\" in Turkana?",
            "correctAnswer": "Akuta (pl. ngakuta)",
            "options": [
              "Akuta (pl. ngakuta)",
              "Atom (pl. ngetom)",
              "Atom (pl. ngatom)",
              "Ameleko (pl. ngemelakoi)"
            ],
            "hint": "ah-koo-tah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Iron hoe\" in Turkana?",
            "correctAnswer": "Ameleko (pl. ngemelakoi)",
            "options": [
              "Atom (pl. ngetom)",
              "Atom (pl. ngatom)",
              "Akuta (pl. ngakuta)",
              "Ameleko (pl. ngemelakoi)"
            ],
            "hint": "ah-meh-leh-koh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Axe\" in Turkana?",
            "correctAnswer": "Eyap (pl. ngaiyapai)",
            "options": [
              "Atom (pl. ngatom)",
              "Akuta (pl. ngakuta)",
              "Eyap (pl. ngaiyapai)",
              "Atom (pl. ngetom)"
            ],
            "hint": "eh-yahp"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Atom (pl. ngetom): Rifle / Gun, Atom (pl. ngatom): War horn / Trumpet, Akuta (pl. ngakuta): Wooden digging stick, Ameleko (pl. ngemelakoi): Iron hoe",
            "pairs": [
              {
                "left": "Atom (pl. ngetom)",
                "right": "Rifle / Gun"
              },
              {
                "left": "Atom (pl. ngatom)",
                "right": "War horn / Trumpet"
              },
              {
                "left": "Akuta (pl. ngakuta)",
                "right": "Wooden digging stick"
              },
              {
                "left": "Ameleko (pl. ngemelakoi)",
                "right": "Iron hoe"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-11-verbs",
    "title": "Unit 11: Verbs & Actions",
    "description": "Comprehensive Turkana curriculum for Verbs & Actions, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Layers",
    "skills": [
      {
        "id": "turkana-exp-verbs",
        "title": "Verbs & Actions (Part 1)",
        "icon": "Soup",
        "description": "Master Turkana verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Emugi / Akimuji' (To eat), 'Emathi / Akimati' (To drink), 'Aperi / Topper' (To sleep), 'Alothi / Tolot' (To go).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Emugi / Akimuji",
            "source": "To eat",
            "pronunciation": "e-mu-gi / a-ki-mu-ji",
            "hint": "Consume food. Present 1st person: 'Emugi ayon' (I eat). (Barton 1921)"
          },
          {
            "target": "Emathi / Akimati",
            "source": "To drink",
            "pronunciation": "e-mathi / a-ki-ma-ti",
            "hint": "Drink liquid, water, or milk. (Barton 1921)"
          },
          {
            "target": "Aperi / Topper",
            "source": "To sleep",
            "pronunciation": "a-pe-ri / topper",
            "hint": "Rest or sleep. Imperative: 'Toperirobo' (sleep well!). (Barton 1921)"
          },
          {
            "target": "Alothi / Tolot",
            "source": "To go",
            "pronunciation": "a-lothi / to-lot",
            "hint": "Depart or travel. Imperative: 'Tolot!' (go!), pl. 'Tolotto!'. (Barton 1921)"
          },
          {
            "target": "Abuni / Bwa",
            "source": "To come",
            "pronunciation": "a-bu-ni / bwa",
            "hint": "Approach. Imperative: 'Bwa!' (come!), pl. 'Potto!'. (Barton 1921)"
          },
          {
            "target": "Akeri / Kibirr",
            "source": "To run",
            "pronunciation": "a-ke-ri / ki-birr",
            "hint": "Run quickly. Imperative: 'Kibirr!'. (Barton 1921)"
          },
          {
            "target": "Ainua / Ainu",
            "source": "To see",
            "pronunciation": "ai-nua / ai-nu",
            "hint": "Perceive with vision. Imperative: 'Tainu!' (see!). (Barton 1921)"
          },
          {
            "target": "Erari / Era",
            "source": "To hear / listen",
            "pronunciation": "e-ra-ri / era",
            "hint": "Listen or perceive sound. Present: 'Erari ayon' (I hear). (Barton 1921)"
          },
          {
            "target": "Erworo / Akirwor",
            "source": "To speak / talk",
            "pronunciation": "erwo-ro / a-kirwor",
            "hint": "Speak in words or talk together. (Barton 1921)"
          },
          {
            "target": "Akilari / Elari",
            "source": "To walk",
            "pronunciation": "a-ki-la-ri / e-la-ri",
            "hint": "Travel on foot. (Barton 1921)"
          },
          {
            "target": "Ouwei / Towoyo",
            "source": "To stand",
            "pronunciation": "ou-wei / to-wo-yo",
            "hint": "Stand stationary or halt. (Barton 1921)"
          },
          {
            "target": "Eboigini / Aboikini",
            "source": "To sit / dwell",
            "pronunciation": "e-boi-gi-ni / a-boi-ki-ni",
            "hint": "Sit down or settle in an area. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emugi / Akimuji\" mean in English?",
            "correctAnswer": "To eat",
            "options": [
              "To drink",
              "To sleep",
              "To go",
              "To eat"
            ],
            "hint": "Consume food. Present 1st person: 'Emugi ayon' (I eat). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emathi / Akimati\" mean in English?",
            "correctAnswer": "To drink",
            "options": [
              "To sleep",
              "To go",
              "To drink",
              "To eat"
            ],
            "hint": "Drink liquid, water, or milk. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aperi / Topper\" mean in English?",
            "correctAnswer": "To sleep",
            "options": [
              "To go",
              "To sleep",
              "To eat",
              "To drink"
            ],
            "hint": "Rest or sleep. Imperative: 'Toperirobo' (sleep well!). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To sleep\" in Turkana?",
            "correctAnswer": "Aperi / Topper",
            "options": [
              "Aperi / Topper",
              "Emugi / Akimuji",
              "Emathi / Akimati",
              "Alothi / Tolot"
            ],
            "hint": "ah-peh-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To go\" in Turkana?",
            "correctAnswer": "Alothi / Tolot",
            "options": [
              "Emugi / Akimuji",
              "Emathi / Akimati",
              "Aperi / Topper",
              "Alothi / Tolot"
            ],
            "hint": "ah-loh-thee / toh-loht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To come\" in Turkana?",
            "correctAnswer": "Abuni / Bwa",
            "options": [
              "Emathi / Akimati",
              "Aperi / Topper",
              "Abuni / Bwa",
              "Emugi / Akimuji"
            ],
            "hint": "ah-boo-nee / bwah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Emugi / Akimuji: To eat, Emathi / Akimati: To drink, Aperi / Topper: To sleep, Alothi / Tolot: To go",
            "pairs": [
              {
                "left": "Emugi / Akimuji",
                "right": "To eat"
              },
              {
                "left": "Emathi / Akimati",
                "right": "To drink"
              },
              {
                "left": "Aperi / Topper",
                "right": "To sleep"
              },
              {
                "left": "Alothi / Tolot",
                "right": "To go"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-verbs-2",
        "title": "Verbs & Actions (Part 2)",
        "icon": "Hammer",
        "description": "Master Turkana verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Anyouni' (To rise / get up), 'Ainagini / Akini' (To give), 'Alemari / Atachi' (To take / receive), 'Arami / Karam' (To hit / beat).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Anyouni",
            "source": "To rise / get up",
            "pronunciation": "anyou-ni",
            "hint": "Awaken and rise up. (Barton 1921)"
          },
          {
            "target": "Ainagini / Akini",
            "source": "To give",
            "pronunciation": "ai-na-gi-ni / a-ki-ni",
            "hint": "Offer or deliver an item. (Barton 1921)"
          },
          {
            "target": "Alemari / Atachi",
            "source": "To take / receive",
            "pronunciation": "a-le-ma-ri / a-tachi",
            "hint": "Pick up or accept. (Barton 1921)"
          },
          {
            "target": "Arami / Karam",
            "source": "To hit / beat",
            "pronunciation": "a-ra-mi / ka-ram",
            "hint": "Strike with club or stick. Passive: 'Karamitai ayon' (I am struck). (Barton 1921)"
          },
          {
            "target": "Ari",
            "source": "To kill",
            "pronunciation": "ari",
            "hint": "Kill or dispatch an animal. (Barton 1921)"
          },
          {
            "target": "Achomi / Echomi",
            "source": "To spear / stab",
            "pronunciation": "acho-mi / echo-mi",
            "hint": "Strike with spear blade. (Barton 1921)"
          },
          {
            "target": "Igi / Ajori",
            "source": "To fight",
            "pronunciation": "igi / a-jo-ri",
            "hint": "Fight in combat or cattle defense. (Barton 1921)"
          },
          {
            "target": "Aduki",
            "source": "To build / construct",
            "pronunciation": "a-du-ki",
            "hint": "Build a shelter or fence. (Barton 1921)"
          },
          {
            "target": "Adungi / Adongai",
            "source": "To cut / chop",
            "pronunciation": "a-dungi / a-dongai",
            "hint": "Cut. Reduplicative: 'Adungi-dungi' (chop into small pieces). (Barton 1921)"
          },
          {
            "target": "Elatari / Alotari",
            "source": "To wash / clean",
            "pronunciation": "e-la-ta-ri / a-lo-ta-ri",
            "hint": "Wash with water. 'Elatari ngakan' (wash hands). (Barton 1921)"
          },
          {
            "target": "Edoroki",
            "source": "To cook",
            "pronunciation": "e-do-ro-ki",
            "hint": "Boil or prepare food at the fire. (Barton 1921)"
          },
          {
            "target": "Enokogini",
            "source": "To burn",
            "pronunciation": "e-no-ko-gi-ni",
            "hint": "Kindle or catch fire. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Anyouni\" mean in English?",
            "correctAnswer": "To rise / get up",
            "options": [
              "To give",
              "To take / receive",
              "To hit / beat",
              "To rise / get up"
            ],
            "hint": "Awaken and rise up. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ainagini / Akini\" mean in English?",
            "correctAnswer": "To give",
            "options": [
              "To take / receive",
              "To hit / beat",
              "To give",
              "To rise / get up"
            ],
            "hint": "Offer or deliver an item. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alemari / Atachi\" mean in English?",
            "correctAnswer": "To take / receive",
            "options": [
              "To hit / beat",
              "To take / receive",
              "To rise / get up",
              "To give"
            ],
            "hint": "Pick up or accept. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To take / receive\" in Turkana?",
            "correctAnswer": "Alemari / Atachi",
            "options": [
              "Alemari / Atachi",
              "Anyouni",
              "Ainagini / Akini",
              "Arami / Karam"
            ],
            "hint": "ah-leh-mah-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To hit / beat\" in Turkana?",
            "correctAnswer": "Arami / Karam",
            "options": [
              "Anyouni",
              "Ainagini / Akini",
              "Alemari / Atachi",
              "Arami / Karam"
            ],
            "hint": "ah-rah-mee / kah-rahm"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To kill\" in Turkana?",
            "correctAnswer": "Ari",
            "options": [
              "Ainagini / Akini",
              "Alemari / Atachi",
              "Ari",
              "Anyouni"
            ],
            "hint": "ah-ree"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Anyouni: To rise / get up, Ainagini / Akini: To give, Alemari / Atachi: To take / receive, Arami / Karam: To hit / beat",
            "pairs": [
              {
                "left": "Anyouni",
                "right": "To rise / get up"
              },
              {
                "left": "Ainagini / Akini",
                "right": "To give"
              },
              {
                "left": "Alemari / Atachi",
                "right": "To take / receive"
              },
              {
                "left": "Arami / Karam",
                "right": "To hit / beat"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-verbs-3",
        "title": "Verbs & Actions (Part 3)",
        "icon": "Heart",
        "description": "Master Turkana verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ayeni' (To tie / bind), 'Alachari / Alakari' (To untie / loosen), 'Alepa' (To milk), 'Aiyoki / Eyogi' (To graze / herd).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ayeni",
            "source": "To tie / bind",
            "pronunciation": "a-ye-ni",
            "hint": "Fasten with cord or tether. (Barton 1921)"
          },
          {
            "target": "Alachari / Alakari",
            "source": "To untie / loosen",
            "pronunciation": "a-lacha-ri / a-la-ka-ri",
            "hint": "Release or untie. (Barton 1921)"
          },
          {
            "target": "Alepa",
            "source": "To milk",
            "pronunciation": "a-le-pa",
            "hint": "Milk cows, camels, or goats into a gourd. (Barton 1921)"
          },
          {
            "target": "Aiyoki / Eyogi",
            "source": "To graze / herd",
            "pronunciation": "ai-yo-ki / e-yo-gi",
            "hint": "Drive stock out to pasture. (Barton 1921)"
          },
          {
            "target": "Aiyeni",
            "source": "To know",
            "pronunciation": "ai-ye-ni",
            "hint": "Possess knowledge. Negative: 'Mam ayeni' (I don't know). (Barton 1921)"
          },
          {
            "target": "Atami",
            "source": "To understand / think",
            "pronunciation": "a-ta-mi",
            "hint": "Reflect, comprehend, or meditate. Imperative: 'Kitam!'. (Barton 1921)"
          },
          {
            "target": "Achami / Achemi",
            "source": "To like / love / accept",
            "pronunciation": "acha-mi / ache-mi",
            "hint": "Assent, like, love, or desire. (Barton 1921)"
          },
          {
            "target": "Angeri",
            "source": "To refuse / dislike",
            "pronunciation": "ange-ri",
            "hint": "Reject or refuse an offer. (Barton 1921)"
          },
          {
            "target": "Athaki",
            "source": "To seek / look for",
            "pronunciation": "atha-ki",
            "hint": "Search for stray livestock or tracking spoor. (Barton 1921)"
          },
          {
            "target": "Edonga",
            "source": "To dance",
            "pronunciation": "e-donga",
            "hint": "Dance in traditional celebrations or warrior dances. (Barton 1921)"
          },
          {
            "target": "Eruko",
            "source": "To sing",
            "pronunciation": "e-ru-ko",
            "hint": "Sing ox praise songs and historic epics. (Barton 1921)"
          },
          {
            "target": "Atona",
            "source": "To die",
            "pronunciation": "a-to-na",
            "hint": "Pass away or perish. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          },
          {
            "target": "Epolok ngikiliok lu.",
            "source": "These men are strong and great."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ayeni\" mean in English?",
            "correctAnswer": "To tie / bind",
            "options": [
              "To untie / loosen",
              "To milk",
              "To graze / herd",
              "To tie / bind"
            ],
            "hint": "Fasten with cord or tether. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alachari / Alakari\" mean in English?",
            "correctAnswer": "To untie / loosen",
            "options": [
              "To milk",
              "To graze / herd",
              "To untie / loosen",
              "To tie / bind"
            ],
            "hint": "Release or untie. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alepa\" mean in English?",
            "correctAnswer": "To milk",
            "options": [
              "To graze / herd",
              "To milk",
              "To tie / bind",
              "To untie / loosen"
            ],
            "hint": "Milk cows, camels, or goats into a gourd. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To milk\" in Turkana?",
            "correctAnswer": "Alepa",
            "options": [
              "Alepa",
              "Ayeni",
              "Alachari / Alakari",
              "Aiyoki / Eyogi"
            ],
            "hint": "ah-leh-pah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To graze / herd\" in Turkana?",
            "correctAnswer": "Aiyoki / Eyogi",
            "options": [
              "Ayeni",
              "Alachari / Alakari",
              "Alepa",
              "Aiyoki / Eyogi"
            ],
            "hint": "ah-ee-yoh-kee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To know\" in Turkana?",
            "correctAnswer": "Aiyeni",
            "options": [
              "Alachari / Alakari",
              "Alepa",
              "Aiyeni",
              "Ayeni"
            ],
            "hint": "ah-ee-yeh-nee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ayeni: To tie / bind, Alachari / Alakari: To untie / loosen, Alepa: To milk, Aiyoki / Eyogi: To graze / herd",
            "pairs": [
              {
                "left": "Ayeni",
                "right": "To tie / bind"
              },
              {
                "left": "Alachari / Alakari",
                "right": "To untie / loosen"
              },
              {
                "left": "Alepa",
                "right": "To milk"
              },
              {
                "left": "Aiyoki / Eyogi",
                "right": "To graze / herd"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-12-phrases",
    "title": "Unit 12: Common Phrases",
    "description": "Comprehensive Turkana curriculum for Common Phrases, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Award",
    "skills": [
      {
        "id": "turkana-exp-phrases",
        "title": "Common Phrases (Part 1)",
        "icon": "BookOpen",
        "description": "Master Turkana common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ngai akero ekon? / Ngai ekiro kon?' (What is your name?), 'Ekiro kang erai...' (My name is...), 'Alothi ai? / Ilotit iwon ai?' (Where are you going?), 'Eyyey ngeth? / Ali ngeth?' (Where is he / she?).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ngai akero ekon? / Ngai ekiro kon?",
            "source": "What is your name?",
            "pronunciation": "ngai a-ke-ro e-kon / ngai e-ki-ro kon",
            "hint": "Enquiring someone's identity. (Barton 1921)"
          },
          {
            "target": "Alothi ai? / Ilotit iwon ai?",
            "source": "Where are you going?",
            "pronunciation": "a-lothi ai / i-lo-tit i-won ai",
            "hint": "Enquiring traveller's destination. (Barton 1921)"
          },
          {
            "target": "Eyyey ngeth? / Ali ngeth?",
            "source": "Where is he / she?",
            "pronunciation": "eyyey ngeth / ali ngeth",
            "hint": "Asking the location of a person. (Barton 1921)"
          },
          {
            "target": "Bwa nege! / Tobwo nege!",
            "source": "Come here",
            "pronunciation": "bwa ne-ge / tobwo ne-ge",
            "hint": "Command to approach. (Barton 1921)"
          },
          {
            "target": "Tenyu! / Tolot!",
            "source": "Go away",
            "pronunciation": "tenyu / to-lot",
            "hint": "Command to leave. (Barton 1921)"
          },
          {
            "target": "Ngolik! / Engolikini!",
            "source": "Look out! / Take care!",
            "pronunciation": "ngo-lik / engo-li-ki-ni",
            "hint": "Warning to be watchful. (Barton 1921)"
          },
          {
            "target": "Darun adojigi / Todar wadio",
            "source": "Wait a little",
            "pronunciation": "da-run a-do-ji-gi / to-dar wa-dio",
            "hint": "Requesting brief patience. (Barton 1921)"
          },
          {
            "target": "Towa thik!",
            "source": "Leave it alone!",
            "pronunciation": "to-wa thik",
            "hint": "Instruction not to touch or disturb. (Barton 1921)"
          },
          {
            "target": "Nyo lo?",
            "source": "What is this?",
            "pronunciation": "nyo lo",
            "hint": "Asking what an object is. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ngai akero ekon? / Ngai ekiro kon?\" mean in English?",
            "correctAnswer": "What is your name?",
            "options": [
              "My name is...",
              "Where are you going?",
              "Where is he / she?",
              "What is your name?"
            ],
            "hint": "Enquiring someone's identity. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alothi ai? / Ilotit iwon ai?\" mean in English?",
            "correctAnswer": "Where are you going?",
            "options": [
              "Where is he / she?",
              "Where are you going?",
              "What is your name?",
              "My name is..."
            ],
            "hint": "Enquiring traveller's destination. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where are you going?\" in Turkana?",
            "correctAnswer": "Alothi ai? / Ilotit iwon ai?",
            "options": [
              "Alothi ai? / Ilotit iwon ai?",
              "Ngai akero ekon? / Ngai ekiro kon?",
              "Ekiro kang erai...",
              "Eyyey ngeth? / Ali ngeth?"
            ],
            "hint": "ah-loh-thee ah-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where is he / she?\" in Turkana?",
            "correctAnswer": "Eyyey ngeth? / Ali ngeth?",
            "options": [
              "Ngai akero ekon? / Ngai ekiro kon?",
              "Ekiro kang erai...",
              "Alothi ai? / Ilotit iwon ai?",
              "Eyyey ngeth? / Ali ngeth?"
            ],
            "hint": "eh-ee-yeh-ee ngehth"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Come here\" in Turkana?",
            "correctAnswer": "Bwa nege! / Tobwo nege!",
            "options": [
              "Ekiro kang erai...",
              "Alothi ai? / Ilotit iwon ai?",
              "Bwa nege! / Tobwo nege!",
              "Ngai akero ekon? / Ngai ekiro kon?"
            ],
            "hint": "bwah neh-geh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ngai akero ekon? / Ngai ekiro kon?: What is your name?, Alothi ai? / Ilotit iwon ai?: Where are you going?, Eyyey ngeth? / Ali ngeth?: Where is he / she?",
            "pairs": [
              {
                "left": "Ngai akero ekon? / Ngai ekiro kon?",
                "right": "What is your name?"
              },
              {
                "left": "Alothi ai? / Ilotit iwon ai?",
                "right": "Where are you going?"
              },
              {
                "left": "Eyyey ngeth? / Ali ngeth?",
                "right": "Where is he / she?"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-phrases-2",
        "title": "Common Phrases (Part 2)",
        "icon": "Crown",
        "description": "Master Turkana common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Esagin nyo? / Isagin nyo?' (What do you want?), 'Ali tela kon?' (What is your tribe?), 'Ngeyai? / Nyeyai? / Erai ngiai?' (How much? / How many?), 'Ikwani?' (Why?).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Esagin nyo? / Isagin nyo?",
            "source": "What do you want?",
            "pronunciation": "e-sa-gin nyo / i-sa-gin nyo",
            "hint": "Asking someone's intent or need. (Barton 1921)"
          },
          {
            "target": "Ali tela kon?",
            "source": "What is your tribe?",
            "pronunciation": "ali te-la kon",
            "hint": "Enquiring someone's ethnic section or clan. (Barton 1921)"
          },
          {
            "target": "Ngeyai? / Nyeyai? / Erai ngiai?",
            "source": "How much? / How many?",
            "pronunciation": "nge-yai / nye-yai / e-rai ngiai",
            "hint": "Asking quantity, headcount, or price. (Barton 1921)"
          },
          {
            "target": "Ikwani?",
            "source": "Why?",
            "pronunciation": "ikwa-ni",
            "hint": "Asking reason or motive. (Barton 1921)"
          },
          {
            "target": "Wurre?",
            "source": "When?",
            "pronunciation": "wurre",
            "hint": "Asking about time. (Barton 1921)"
          },
          {
            "target": "Mam ayeni / Aiye",
            "source": "I don't know",
            "pronunciation": "mam a-ye-ni / ai-ye",
            "hint": "Expressing lack of knowledge. 'Aiye' = Who knows? (Barton 1921)"
          },
          {
            "target": "Kirworo kiyapak",
            "source": "Speak slowly",
            "pronunciation": "kirwo-ro ki-ya-pak",
            "hint": "Asking someone to speak slower. (Barton 1921)"
          },
          {
            "target": "Kere / Iteni robo",
            "source": "It is true",
            "pronunciation": "ke-re / i-te-ni ro-bo",
            "hint": "Affirmation of truth. (Barton 1921)"
          },
          {
            "target": "Alioko nguna",
            "source": "That is a lie",
            "pronunciation": "a-lio-ko ngu-na",
            "hint": "Refuting falsehood (alioko = lies). (Barton 1921)"
          },
          {
            "target": "Ejok (pl. ngejokok)",
            "source": "Good / Beautiful",
            "pronunciation": "e-jok",
            "hint": "Describing good or beautiful quality. (Barton 1921)"
          },
          {
            "target": "Arono (pl. ngaroko)",
            "source": "Bad / Ugly",
            "pronunciation": "a-ro-no",
            "hint": "Describing bad or harmful quality. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Esagin nyo? / Isagin nyo?\" mean in English?",
            "correctAnswer": "What do you want?",
            "options": [
              "What is your tribe?",
              "How much? / How many?",
              "Why?",
              "What do you want?"
            ],
            "hint": "Asking someone's intent or need. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ali tela kon?\" mean in English?",
            "correctAnswer": "What is your tribe?",
            "options": [
              "How much? / How many?",
              "Why?",
              "What is your tribe?",
              "What do you want?"
            ],
            "hint": "Enquiring someone's ethnic section or clan. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ngeyai? / Nyeyai? / Erai ngiai?\" mean in English?",
            "correctAnswer": "How much? / How many?",
            "options": [
              "Why?",
              "How much? / How many?",
              "What do you want?",
              "What is your tribe?"
            ],
            "hint": "Asking quantity, headcount, or price. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"How much? / How many?\" in Turkana?",
            "correctAnswer": "Ngeyai? / Nyeyai? / Erai ngiai?",
            "options": [
              "Ngeyai? / Nyeyai? / Erai ngiai?",
              "Esagin nyo? / Isagin nyo?",
              "Ali tela kon?",
              "Ikwani?"
            ],
            "hint": "ngeh-yah-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Why?\" in Turkana?",
            "correctAnswer": "Ikwani?",
            "options": [
              "Esagin nyo? / Isagin nyo?",
              "Ali tela kon?",
              "Ngeyai? / Nyeyai? / Erai ngiai?",
              "Ikwani?"
            ],
            "hint": "ee-kwah-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"When?\" in Turkana?",
            "correctAnswer": "Wurre?",
            "options": [
              "Ali tela kon?",
              "Ngeyai? / Nyeyai? / Erai ngiai?",
              "Wurre?",
              "Esagin nyo? / Isagin nyo?"
            ],
            "hint": "woo-reh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Esagin nyo? / Isagin nyo?: What do you want?, Ali tela kon?: What is your tribe?, Ngeyai? / Nyeyai? / Erai ngiai?: How much? / How many?, Ikwani?: Why?",
            "pairs": [
              {
                "left": "Esagin nyo? / Isagin nyo?",
                "right": "What do you want?"
              },
              {
                "left": "Ali tela kon?",
                "right": "What is your tribe?"
              },
              {
                "left": "Ngeyai? / Nyeyai? / Erai ngiai?",
                "right": "How much? / How many?"
              },
              {
                "left": "Ikwani?",
                "right": "Why?"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-phrases-3",
        "title": "Common Phrases (Part 3)",
        "icon": "Droplets",
        "description": "Master Turkana common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Epol (pl. ngepolok)' (Big / Great), 'Edit (pl. ngedithok)' (Small / Little), 'Noi / Kere' (Very / Truly), 'Ayari / Akiyar akwan' (I am well).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Epol (pl. ngepolok)",
            "source": "Big / Great",
            "pronunciation": "e-pol",
            "hint": "Large stature or high importance. (Barton 1921)"
          },
          {
            "target": "Edit (pl. ngedithok)",
            "source": "Small / Little",
            "pronunciation": "e-dit",
            "hint": "Small size or youth. (Barton 1921)"
          },
          {
            "target": "Noi / Kere",
            "source": "Very / Truly",
            "pronunciation": "noi / ke-re",
            "hint": "Intensifier adverb denoting thoroughly or very. (Barton 1921)"
          },
          {
            "target": "Ayari / Akiyar akwan",
            "source": "I am well",
            "pronunciation": "a-ya-ri / a-ki-yar akwan",
            "hint": "Affirming health and physical life. (Barton 1921)"
          },
          {
            "target": "Adiaka ayon / Adyaka ayong",
            "source": "I am sick",
            "pronunciation": "a-dia-ka a-yon / adya-ka a-yong",
            "hint": "Stating illness. (Barton 1921)"
          },
          {
            "target": "Ayon akoro",
            "source": "I am hungry",
            "pronunciation": "a-yon a-ko-ro",
            "hint": "Expressing hunger (akoro = famine/hunger). (Barton 1921)"
          },
          {
            "target": "Akori ayon",
            "source": "I am thirsty",
            "pronunciation": "a-ko-ri a-yon",
            "hint": "Expressing thirst for water. (Barton 1921)"
          },
          {
            "target": "Erika",
            "source": "It is finished",
            "pronunciation": "e-ri-ka",
            "hint": "Expressing completion. (Barton 1921)"
          },
          {
            "target": "Da dan / Dadan",
            "source": "All together",
            "pronunciation": "da dan / da-dan",
            "hint": "Totally / collectively. (Barton 1921)"
          },
          {
            "target": "Erot / Eerot (pl. ngerotin)",
            "source": "Road / Path",
            "pronunciation": "e-rot / ee-rot",
            "hint": "Path, road, or pastoral cattle route. (Barton 1921)"
          },
          {
            "target": "Elwana",
            "source": "Far",
            "pronunciation": "elwa-na",
            "hint": "Long distance away. (Barton 1921)"
          },
          {
            "target": "Epii / Api",
            "source": "Near",
            "pronunciation": "e-pii / api",
            "hint": "Close proximity. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          },
          {
            "target": "Epolok ngikiliok lu.",
            "source": "These men are strong and great."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Epol (pl. ngepolok)\" mean in English?",
            "correctAnswer": "Big / Great",
            "options": [
              "Small / Little",
              "Very / Truly",
              "I am well",
              "Big / Great"
            ],
            "hint": "Large stature or high importance. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Edit (pl. ngedithok)\" mean in English?",
            "correctAnswer": "Small / Little",
            "options": [
              "Very / Truly",
              "I am well",
              "Small / Little",
              "Big / Great"
            ],
            "hint": "Small size or youth. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Noi / Kere\" mean in English?",
            "correctAnswer": "Very / Truly",
            "options": [
              "I am well",
              "Very / Truly",
              "Big / Great",
              "Small / Little"
            ],
            "hint": "Intensifier adverb denoting thoroughly or very. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Very / Truly\" in Turkana?",
            "correctAnswer": "Noi / Kere",
            "options": [
              "Noi / Kere",
              "Epol (pl. ngepolok)",
              "Edit (pl. ngedithok)",
              "Ayari / Akiyar akwan"
            ],
            "hint": "noh-ee / keh-reh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I am well\" in Turkana?",
            "correctAnswer": "Ayari / Akiyar akwan",
            "options": [
              "Epol (pl. ngepolok)",
              "Edit (pl. ngedithok)",
              "Noi / Kere",
              "Ayari / Akiyar akwan"
            ],
            "hint": "ah-yah-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I am sick\" in Turkana?",
            "correctAnswer": "Adiaka ayon / Adyaka ayong",
            "options": [
              "Edit (pl. ngedithok)",
              "Noi / Kere",
              "Adiaka ayon / Adyaka ayong",
              "Epol (pl. ngepolok)"
            ],
            "hint": "ah-dyah-kah ah-yohng"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Epol (pl. ngepolok): Big / Great, Edit (pl. ngedithok): Small / Little, Noi / Kere: Very / Truly, Ayari / Akiyar akwan: I am well",
            "pairs": [
              {
                "left": "Epol (pl. ngepolok)",
                "right": "Big / Great"
              },
              {
                "left": "Edit (pl. ngedithok)",
                "right": "Small / Little"
              },
              {
                "left": "Noi / Kere",
                "right": "Very / Truly"
              },
              {
                "left": "Ayari / Akiyar akwan",
                "right": "I am well"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-exp-phrases-4",
        "title": "Common Phrases (Part 4)",
        "icon": "Sun",
        "description": "Master Turkana common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Kidyeny' (Left), 'Teten' (Right), 'Ngeselekin / Pesa' (Money), 'Togangai! / Torimokakithai!' (Help!).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Teten",
            "source": "Right",
            "pronunciation": "te-ten",
            "hint": "Direction right (akan na lo teten = right hand). (Barton 1921)"
          },
          {
            "target": "Akim!",
            "source": "Fire!",
            "pronunciation": "a-kim",
            "hint": "Urgent warning of fire danger. (Barton 1921)"
          },
          {
            "target": "Ekakolon! / Akokolon!",
            "source": "Thief!",
            "pronunciation": "e-ka-ko-lon / a-ko-ko-lon",
            "hint": "Alarm alerting that cattle or property is being stolen. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Teten\" in Turkana?",
            "correctAnswer": "Right",
            "options": [
              "Fire!",
              "Thief!",
              "Right"
            ],
            "hint": "Direction right (akan na lo teten = right hand). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Akim!\" in Turkana?",
            "correctAnswer": "Fire!",
            "options": [
              "Thief!",
              "Fire!",
              "Right"
            ],
            "hint": "Urgent warning of fire danger. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ekakolon! / Akokolon!\" in Turkana?",
            "correctAnswer": "Thief!",
            "options": [
              "Thief!",
              "Right",
              "Fire!"
            ],
            "hint": "Alarm alerting that cattle or property is being stolen. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Right\" in Turkana?",
            "correctAnswer": "Teten",
            "options": [
              "Ekakolon! / Akokolon!",
              "Teten",
              "Akim!"
            ],
            "hint": "teh-tehn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fire!\" in Turkana?",
            "correctAnswer": "Akim!",
            "options": [
              "Akim!",
              "Teten",
              "Ekakolon! / Akokolon!"
            ],
            "hint": "ah-keem"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-13-public-domain-corpus",
    "title": "Unit 13: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Turkana vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "skills": [
      {
        "id": "turkana-pd-corpus-18-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Turkana headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Turkana linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "Kalome",
            "source": "You weep",
            "pronunciation": "ka-lo-me",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Ekiyo",
            "source": "They laugh",
            "pronunciation": "e-ki-yo",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Ekokolan",
            "source": "He steals",
            "pronunciation": "e-ko-ko-lan",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Auri",
            "source": "He stinks",
            "pronunciation": "au-ri",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Nyakakparan",
            "source": "We sold not",
            "pronunciation": "nya-kakpa-ran",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Kibalayūa",
            "source": "We say",
            "pronunciation": "ki-ba-la-yua",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Kesobake",
            "source": "We make",
            "pronunciation": "ke-so-ba-ke",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Acamet",
            "source": "Thou lovest",
            "pronunciation": "a-ca-met",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          }
        ],
        "sentences": [
          ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Kalome\" in Turkana?",
            "correctAnswer": "You weep",
            "options": [
              "You weep",
              "They laugh",
              "He steals",
              "He stinks"
            ],
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Turkana term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Kalome: You weep",
            "pairs": [
              {
                "left": "Kalome",
                "right": "You weep"
              },
              {
                "left": "Ekiyo",
                "right": "They laugh"
              },
              {
                "left": "Ekokolan",
                "right": "He steals"
              },
              {
                "left": "Auri",
                "right": "He stinks"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Turkana term for \"We sold not\": ___",
            "correctAnswer": "Nyakakparan",
            "options": [
              "Nyakakparan",
              "Kibalayūa",
              "Kalome",
              "Ekiyo"
            ],
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          }
        ]
      },
      {
        "id": "turkana-pd-corpus-18-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Turkana ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Turkana transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "Nyayeni ao",
            "source": "I know not",
            "pronunciation": "nya-ye-ni ao",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Ayeni",
            "source": "I know",
            "pronunciation": "a-ye-ni",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Aran (?)",
            "source": "I kill them",
            "pronunciation": "a-ran",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Kilūsiswa",
            "source": "I went",
            "pronunciation": "ki-lu-siswa",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Alot",
            "source": "I go",
            "pronunciation": "a-lot",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Ainaʻ, Ainak",
            "source": "I give thee",
            "pronunciation": "ai-na' ai-nak",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Nyeʻberu",
            "source": "I give",
            "pronunciation": "nye'be-ru",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Kepōto tanyama",
            "source": "I eat not",
            "pronunciation": "ke-po-to tanya-ma",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          }
        ],
        "sentences": [
          {
            "target": "Nyayeni ao",
            "source": "I know not"
          },
          {
            "target": "Kepōto tanyama",
            "source": "I eat not"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Nyayeni ao\" in Turkana?",
            "correctAnswer": "I know not",
            "options": [
              "I know not",
              "I know",
              "I kill them",
              "I went"
            ],
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Turkana term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Nyayeni ao: I know not",
            "pairs": [
              {
                "left": "Nyayeni ao",
                "right": "I know not"
              },
              {
                "left": "Ayeni",
                "right": "I know"
              },
              {
                "left": "Aran (?)",
                "right": "I kill them"
              },
              {
                "left": "Kilūsiswa",
                "right": "I went"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Turkana term for \"I go\": ___",
            "correctAnswer": "Alot",
            "options": [
              "Alot",
              "Ainaʻ, Ainak",
              "Nyayeni ao",
              "Ayeni"
            ],
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-14-open-datasets-modern",
    "title": "Unit 14: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Turkana vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "skills": [
      {
        "id": "turkana-open-dataset-19-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Soup",
        "description": "Learn core Turkana verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Turkana dialects and everyday speech.",
        "words": [
          {
            "target": "Anyama",
            "source": "I eat",
            "pronunciation": "anya-ma",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Nyanyame",
            "source": "I ate not",
            "pronunciation": "nyanya-me",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Amatañon",
            "source": "I drank",
            "pronunciation": "a-ma-tangon",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Amasi",
            "source": "I drink",
            "pronunciation": "a-ma-si",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Atuana",
            "source": "I die",
            "pronunciation": "a-tua-na",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Ebolia",
            "source": "I dance",
            "pronunciation": "e-bo-lia",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Nyebuni",
            "source": "I come not",
            "pronunciation": "nye-bu-ni",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Año abu",
            "source": "I come",
            "pronunciation": "ango abu",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          }
        ],
        "sentences": [
          {
            "target": "Año abu",
            "source": "I come"
          }
          ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Anyama\" in Turkana (Ng'aturkana)?",
            "correctAnswer": "I eat",
            "options": [
              "I eat",
              "I ate not",
              "I drank",
              "I drink"
            ],
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Turkana (Ng'aturkana) term to its English meaning:",
            "correctAnswer": "Anyama: I eat",
            "pairs": [
              {
                "left": "Anyama",
                "right": "I eat"
              },
              {
                "left": "Nyanyame",
                "right": "I ate not"
              },
              {
                "left": "Amatañon",
                "right": "I drank"
              },
              {
                "left": "Amasi",
                "right": "I drink"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Turkana (Ng'aturkana) term for \"I die\": ___",
            "correctAnswer": "Atuana",
            "options": [
              "Atuana",
              "Anyama",
              "Nyanyame",
              "Amatañon"
            ],
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          }
        ]
      },
      {
        "id": "turkana-open-dataset-19-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Turkana terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Turkana roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "Año ñesilo",
            "source": "I bring",
            "pronunciation": "ango nge-si-lo",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Año?",
            "source": "I am",
            "pronunciation": "ango",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Eduār",
            "source": "No, not",
            "pronunciation": "e-duar",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Ali?",
            "source": "Where?",
            "pronunciation": "ali",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Eluana",
            "source": "There",
            "pronunciation": "e-lua-na",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Elallak",
            "source": "Plenty",
            "pronunciation": "e-lallak",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Ekriónon",
            "source": "Black",
            "pronunciation": "ekrio-non",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "target": "Kannĕ",
            "source": "Here",
            "pronunciation": "kanne",
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          }
        ],
        "sentences": [
          {
            "target": "Año ñesilo",
            "source": "I bring"
          }
          ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Año ñesilo\" in Turkana?",
            "correctAnswer": "I bring",
            "options": [
              "I bring",
              "I am",
              "No, not",
              "Where?"
            ],
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Turkana term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Año ñesilo: I bring",
            "pairs": [
              {
                "left": "Año ñesilo",
                "right": "I bring"
              },
              {
                "left": "Año?",
                "right": "I am"
              },
              {
                "left": "Eduār",
                "right": "No, not"
              },
              {
                "left": "Ali?",
                "right": "Where?"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Turkana term for \"There\": ___",
            "correctAnswer": "Eluana",
            "options": [
              "Eluana",
              "Elallak",
              "Año ñesilo",
              "Año?"
            ],
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          }
        ]
      }
    ]
  }
];

// ============================================================
// Hon. K. R. Dundas (1910) "Notes on the Tribes Inhabiting the Baringo District"
// (JRAI Vol. 40, Jan.–Jun. 1910, pp. 66–70, Plates XVI–XVII — Public Domain)
// ============================================================
TURKANA_UNITS.push({
  id: "turkana-unit-dundas-1910-tribes-clans-calendar",
  title: "Unit 20: Dundas (1910) 16 Tribes, 19 Attegir Clans, Life Stages & 12-Month Calendar",
  description: "Master the 16 principal Turkana tribes, 19 Ngoitunya & Ngolio exogamous clans (attegir), 6 male & female life stages, asavanissia warrior ages, Agipie & the nether-world god, and the 12-month Nakiborror / Nakamou / Nait calendar from Hon. K. R. Dundas (JRAI Vol. 40, 1910, pp. 66–70).",
  icon: "BookOpen",
  skills: [
    {
      id: "turkana-dundas-1910-tribes-clans-life-stages",
      title: "16 Principal Tribes, 19 Attegir Clans & 6 Life Stages (pp. 66–69)",
      icon: "Users",
      description: "Learn the 16 Turkana tribes, 19 Ngoitunya & Ngolio clans (attegir), life-stage titles, marriage & slaughter customs, and deities recorded by Hon. K. R. Dundas (1910).",
      tips: "Dundas (1910, p. 67) notes that Turkana clans (attegir) are strictly exogamous and have no totems; Ngaruwo (#12) is the rain-makers' clan, and a new warrior generation (asavanissia) is instituted every 4 or 5 years.",
      culturalNote: "Source attribution: Hon. Kenneth R. Dundas, 'Notes on the Tribes Inhabiting the Baringo District, East Africa Protectorate', Journal of the Royal Anthropological Institute Vol. 40 (1910, pp. 66–70, Plates XVI–XVII).",
      words: [
        {
          target: "Ngolio, Ngoitunya, Nittacha, Nessetou, Nbochoross, Ngissir, Nissikir, Kamatak, Lugumong, Oiuaeguara, Nijiye, Ngirriomong, Ngakumuk, Ngalabong, Ngorr, Nikotomungwa",
          source: "The 16 principal Turkana tribes (Ngolio & Ngoitunya live south of Lake Rudolph on the Kerio, Sogota & Tirkwel)",
          pronunciation: "ngo-li-o / ngoi-tu-nya / nit-ta-cha / nes-se-tou / nbo-cho-ross / ngis-sir / nis-si-kir / ka-ma-tak",
          hint: "Hon. K. R. Dundas (1910, p. 66)"
        },
        {
          target: "Attegir (19 clans): Nitegorr, Molereto, Tuduya, Ellelet, Ebalang, Kaleso, Ngonom, Ngatap, Moana, Nittacha, Egurerr, Ngaruwo (rain-makers), Neturana, Erarak, Eraraket, Abuchaw, Ngattigo, Ekkadenya, Ogorok",
          source: "All 19 exogamous clans (attegir, without totems) of the Ngoitunya & Ngolio tribes (#1–8 occur in all 16 tribes; #12 Ngaruwo = rain-makers' clan)",
          pronunciation: "at-te-gir / ni-te-gorr / mo-le-re-to / tu-du-ya / nga-ru-wo",
          hint: "Hon. K. R. Dundas (1910, p. 67)"
        },
        {
          target: "nidue → egile → kasikou (oppa) • apesur → aberu → agemat • asavanissia",
          source: "Boy → warrior → old man (oppa wears beaded cap headdress, Plate XVI Fig. 7) • Girl → married woman → old woman • Warrior age-generations (every 4–5 years)",
          pronunciation: "ni-du-e / e-gi-le / ka-si-kou / op-pa / a-pe-sur / a-be-ru / a-ge-mat / a-sa-va-nis-si-a",
          hint: "Hon. K. R. Dundas (1910, p. 67 & Plates XVI–XVII)"
        },
        {
          target: "Nessegonn • Agipie vs. Nether-world god",
          source: "Evergreen bush on the lower Sogota with sweet berries & leathery fodder leaves • Benevolent sky god vs. malevolent god of rocks and rivers",
          pronunciation: "nes-se-gonn / a-gi-pi-e",
          hint: "Hon. K. R. Dundas (1910, pp. 67, 69)"
        }
      ],
      sentences: [
        {
          target: "Nidue → Egile → Kasikou (Oppa) • Apesur → Aberu → Agemat.",
          source: "Young boy → Warrior → Old man • Unmarried girl → Married woman → Old woman (Dundas 1910, p. 67)."
        }
      ],
      authoredExercises: [
        {
          type: "multiple_choice",
          prompt: "In Hon. K. R. Dundas (1910, p. 67), which of the 19 exogamous clans (attegir) of the Ngoitunya and Ngolio Turkana is the hereditary rain-makers' clan?",
          correctAnswer: "Ngaruwo",
          options: [
            "Ngaruwo",
            "Nitegorr",
            "Molereto",
            "Ogorok"
          ],
          hint: "12th clan in Dundas's list of 19 attegir (p. 67)"
        },
        {
          type: "match_pairs",
          prompt: "Match each Turkana term from Hon. K. R. Dundas (1910, pp. 67, 69) with its meaning:",
          correctAnswer: "nidue, egile, kasikou (oppa): Boy, warrior, and old man life stages (p. 67)",
          pairs: [
            {
              left: "nidue, egile, kasikou (oppa)",
              right: "Boy, warrior, and old man life stages (p. 67)"
            },
            {
              left: "apesur, aberu, agemat",
              right: "Girl, married woman, and old woman life stages (p. 67)"
            },
            {
              left: "asavanissia",
              right: "Warrior age-generations instituted every 4 or 5 years (p. 67)"
            },
            {
              left: "Agipie",
              right: "Benevolent god of the skies prayed to in sickness (p. 69)"
            }
          ]
        }
      ]
    },
    {
      id: "turkana-dundas-1910-12-month-calendar",
      title: "The 12-Month Calendar: Nakiborror, Nakamou & Nait (p. 70)",
      icon: "Sun",
      description: "Master all 12 months and 3 seasonal divisions of the Turkana year recorded by Hon. K. R. Dundas (1910, p. 70).",
      tips: "The Turkana year begins in March with Lomaruk (Wet season: Nakiborror, March–August) followed by Lolongo (Dry season: Nakamou, September–February); August, September, and October (Loitiak, Lolongo, Lopo) are called Nait because the grass turns yellow.",
      culturalNote: "Source attribution: Hon. K. R. Dundas, JRAI Vol. 40 (1910, p. 70).",
      words: [
        {
          target: "Nakiborror (Wet season, Mar–Aug): 1. Lomaruk, 2. Tetimaru, 3. Eliel, 4. Loichoto, 5. Loisoban, 6. Loitiak",
          source: "The 6 Wet-Season months of the Turkana year (March to August)",
          pronunciation: "na-ki-bor-ror / lo-ma-ruk / te-ti-ma-ru / e-li-el / loi-cho-to / loi-so-ban / loi-ti-ak",
          hint: "Hon. K. R. Dundas (1910, p. 70)"
        },
        {
          target: "Nakamou (Dry season, Sept–Feb): 7. Lolongo, 8. Lopo, 9. Lorara, 10. Lomuk, 11. Logwang, 12. Lodunge",
          source: "The 6 Dry-Season months of the Turkana year (September to February)",
          pronunciation: "na-ka-mou / lo-lo-ngo / lo-po / lo-ra-ra / lo-muk / lo-gwang / lo-du-nge",
          hint: "Hon. K. R. Dundas (1910, p. 70)"
        },
        {
          target: "Nait (Loitiak, Lolongo & Lopo — August, September & October)",
          source: "Three-month transitional period so called because the grass turns yellow",
          pronunciation: "nait / loi-ti-ak / lo-lo-ngo / lo-po",
          hint: "Hon. K. R. Dundas (1910, p. 70)"
        }
      ],
      sentences: [
        {
          target: "Nakiborror: Lomaruk, Tetimaru, Eliel, Loichoto, Loisoban, Loitiak • Nakamou: Lolongo, Lopo, Lorara, Lomuk, Logwang, Lodunge.",
          source: "Wet Season (March–August) & Dry Season (September–February) in Dundas (1910, p. 70)."
        }
      ],
      authoredExercises: [
        {
          type: "multiple_choice",
          prompt: "Why are the months of Loitiak (August), Lolongo (September), and Lopo (October) collectively called 'Nait' in the Turkana calendar (Dundas 1910, p. 70)?",
          correctAnswer: "Because the grass turns yellow during those three months",
          options: [
            "Because the grass turns yellow during those three months",
            "Because flying ants swarm",
            "Because the Pleiades disappear",
            "Because bulls are tied up"
          ],
          hint: "See Dundas (1910, p. 70)"
        }
      ]
    }
  ]
});
