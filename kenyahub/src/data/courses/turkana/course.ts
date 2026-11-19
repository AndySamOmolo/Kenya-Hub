import type { LanguageConfig, CourseUnit } from "../types";

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
    "id": "turkana-unit-1",
    "unitNumber": 1,
    "title": "Greetings & Farewells",
    "description": "Comprehensive Turkana curriculum for Greetings & Farewells, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "BookOpen",
    "color": "#00897B",
    "skills": [
      {
        "id": "turkana-exp-greetings",
        "title": "Greetings & Pastoral Blessings (Part 1)",
        "icon": "Hospital",
        "description": "Master Turkana greetings & farewells vocabulary and expressions from verified historical sources.",
        "tips": "Traditional Turkana pastoral greetings invoke 'Mata!' (Health!) across family, cattle ('Mata ng'atuk'), homestead ('Mata ouwi'), children ('Mata ng'idwi'), and community gatherings ('Mata ariama').",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Mata",
            "source": "Health (Pastoral greeting enquiry)",
            "pronunciation": "ma-ta"
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
            "pronunciation": "ma-ta ng'a-tuk"
          },
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
            "hint": "Starts with \"He…\" (6 letters)"
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
        "title": "Community Greetings & Farewells (Part 2)",
        "icon": "Handshake",
        "description": "Master Turkana greetings & farewells vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Greetings & Farewells, pay special attention to pronunciation and morphological prefixes/suffixes: 'Mata ouwi' (Health to your village), 'Mata ng'idwi' (Health to your children), 'Mata ariama' (Health to our meetings), 'Mata ng'ebarin' (Health to your property).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
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
            "pronunciation": "ma-ta e-jik"
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
              "Health to your village",
              "Complete health",
              "Traditional salutation",
              "Farewell exchange"
            ],
            "hint": "Pastoral blessing wishing wellbeing upon the homestead and kraal. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mata ng'idwi\" mean in English?",
            "correctAnswer": "Health to your children",
            "options": [
              "Health to your children",
              "Complete health",
              "Traditional salutation",
              "Farewell exchange"
            ],
            "hint": "Pastoral blessing for family and children. Response: 'Mata ariama'. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mata ariama\" mean in English?",
            "correctAnswer": "Health to our meetings",
            "options": [
              "Complete health",
              "Traditional salutation",
              "Health to our meetings",
              "Farewell exchange"
            ],
            "hint": "Greeting reply wishing health and prosperity to repeated gatherings and fellowship. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Health to our meetings\" in Turkana?",
            "correctAnswer": "Mata ariama",
            "options": [
              "Mata ouwi",
              "Mata ng'idwi",
              "Mata ariama",
              "Mata ejik"
            ],
            "hint": "mah-tah ah-ree-ah-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Health to your property\" in Turkana?",
            "correctAnswer": "Mata ng'ebarin",
            "options": [
              "Mata ouwi",
              "Mata ariama",
              "Mata ng'ebarin",
              "Mata ejik"
            ],
            "hint": "mah-tah ngeh-bah-reen"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Health to your women\" in Turkana?",
            "correctAnswer": "Mata ng'abero",
            "options": [
              "Mata ariama",
              "Mata ouwi",
              "Mata ng'abero",
              "Mata ejik"
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
    "id": "turkana-unit-2",
    "unitNumber": 2,
    "title": "Numbers",
    "description": "Comprehensive Turkana curriculum for Numbers, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Compass",
    "color": "#00897B",
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
              "One",
              "Two"
            ],
            "hint": "Cardinal 2 (Ngaarei fem., Ngiarei masc.; Ari). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ngauni / Ngiuni (Uni)\" in Turkana?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "One",
              "Two",
              "Three"
            ],
            "hint": "Cardinal 3 (Ngauni fem., Ngiuni masc.; Uni). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Turkana?",
            "correctAnswer": "Ngauni",
            "options": [
              "Ngauni",
              "Apei",
              "Ngaarei",
              "Ngaomon"
            ],
            "hint": "ngah-oo-nee / oo-nee",
            "acceptedAnswers": [
              "Ngauni / Ngiuni (Uni)",
              "Ngauni"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Turkana?",
            "correctAnswer": "Ngaomon",
            "options": [
              "Ngaomon",
              "Apei",
              "Ngaarei",
              "Ngauni"
            ],
            "hint": "ngah-oh-mohn / ohm-wohn",
            "acceptedAnswers": [
              "Ngaomon / Ngiomon (Omwon)",
              "Ngaomon"
            ]
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
            "correctAnswer": "Ngakan",
            "options": [
              "Apei",
              "Ngaarei",
              "Ngauni",
              "Ngakan"
            ],
            "hint": "Cardinal 5. Literally 'hand' (akan). (Barton 1921)",
            "acceptedAnswers": [
              "Ngakan / Akhan",
              "Ngakan"
            ]
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
              "Twenty",
              "Forty",
              "Fifty"
            ],
            "hint": "20 (two tens). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Tomon uni\" mean in English?",
            "correctAnswer": "Thirty",
            "options": [
              "Thirty",
              "Forty",
              "Fifty",
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
              "Tomon ari",
              "Tomon omwon",
              "Tomon uni",
              "Tomon tomon"
            ],
            "hint": "toh-mohn ohm-wohn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fifty\" in Turkana?",
            "correctAnswer": "Tomon akhan",
            "options": [
              "Tomon uni",
              "Tomon akhan",
              "Tomon omwon",
              "Tomon tomon"
            ],
            "hint": "toh-mohn ah-khahn",
            "acceptedAnswers": [
              "Tomon akhan / Ngatomona akan",
              "Tomon akhan"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sixty\" in Turkana?",
            "correctAnswer": "Tomon akhan ka pei",
            "options": [
              "Tomon akhan ka pei",
              "Tomon uni",
              "Tomon omwon",
              "Tomon tomon"
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
    "id": "turkana-unit-3",
    "unitNumber": 3,
    "title": "Calendar & Seasons",
    "description": "Comprehensive Turkana curriculum for Calendar & Seasons, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Clock",
    "color": "#00897B",
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
            "target": "Yeliyel",
            "source": "May",
            "pronunciation": "ye-li-yel",
            "hint": "5th month of the traditional Turkana calendar. (Barton 1921)"
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
            "source": "Rainy season — Dry season."
          },
          {
            "target": "Lodungi — Lomoruk",
            "source": "January — February."
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
            "pronunciation": "e-ka-ru"
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
            "target": "Naparan",
            "source": "Midday",
            "pronunciation": "na-pa-ran",
            "hint": "Midday when the sun is directly overhead. (Barton 1921)"
          },
          {
            "target": "Ewi akolon",
            "source": "Noon",
            "pronunciation": "e-wi a-ko-lon",
            "hint": "Midday when the sun is directly overhead. (Barton 1921)"
          },
          {
            "target": "Ebon",
            "source": "Afternoon",
            "pronunciation": "e-bon",
            "hint": "Late afternoon approaching dusk. (Barton 1921)"
          },
          {
            "target": "Ebong",
            "source": "Evening",
            "pronunciation": "e-bong",
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
              "November",
              "Year",
              "Month"
            ],
            "hint": "11th month of the traditional Turkana calendar. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Lugwan\" mean in English?",
            "correctAnswer": "December",
            "options": [
              "Year",
              "Month",
              "November",
              "December"
            ],
            "hint": "12th month of the traditional Turkana calendar. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekaru (pl. ngaro)\" mean in English?",
            "correctAnswer": "Year",
            "options": [
              "Month",
              "November",
              "Year",
              "December"
            ],
            "hint": "Starts with \"Ye…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Year\" in Turkana?",
            "correctAnswer": "Ekaru",
            "options": [
              "Lorarrar",
              "Lugwan",
              "Ekaru",
              "Elap"
            ],
            "hint": "eh-kah-roo",
            "acceptedAnswers": [
              "Ekaru (pl. ngaro)",
              "Ekaru"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Month / Moon\" in Turkana?",
            "correctAnswer": "Elap",
            "options": [
              "Lorarrar",
              "Elap",
              "Lugwan",
              "Ekaru"
            ],
            "hint": "eh-lahp",
            "acceptedAnswers": [
              "Elap (pl. ngelapio)",
              "Elap"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Day\" in Turkana?",
            "correctAnswer": "Erwait",
            "options": [
              "Lugwan",
              "Ekaru",
              "Erwait",
              "Lorarrar"
            ],
            "hint": "ehr-wah-eet",
            "acceptedAnswers": [
              "Erwait (pl. ngurwa)",
              "Erwait"
            ]
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
            "correctAnswer": "Overhead sun",
            "options": [
              "Mid-afternoon sun",
              "Sunset",
              "Today",
              "Overhead sun"
            ],
            "hint": "Peak noon sun directly above. (Barton 1921)",
            "acceptedAnswers": [
              "Overhead sun (12 p.m.)",
              "Overhead sun"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Athom akolon\" mean in English?",
            "correctAnswer": "Mid-afternoon sun",
            "options": [
              "Sunset",
              "Today",
              "Mid-afternoon sun",
              "Overhead sun"
            ],
            "hint": "Declining afternoon sun. (Barton 1921)",
            "acceptedAnswers": [
              "Mid-afternoon sun (2 p.m.)",
              "Mid-afternoon sun"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aloma akolon\" mean in English?",
            "correctAnswer": "Sunset",
            "options": [
              "Today",
              "Overhead sun",
              "Mid-afternoon sun",
              "Sunset"
            ],
            "hint": "Starts with \"Su…\" (6 letters)",
            "acceptedAnswers": [
              "Sunset (6 p.m.)",
              "Sunset"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sunset (6 p.m.)\" in Turkana?",
            "correctAnswer": "Aloma akolon",
            "options": [
              "Aloma akolon",
              "Ewi akolon",
              "Athom akolon",
              "Tete"
            ],
            "hint": "ah-loh-mah ah-koh-lohn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Today\" in Turkana?",
            "correctAnswer": "Tete",
            "options": [
              "Ewi akolon",
              "Athom akolon",
              "Tete",
              "Aloma akolon"
            ],
            "hint": "teh-teh",
            "acceptedAnswers": [
              "Tete / Akolon itina",
              "Tete"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tomorrow\" in Turkana?",
            "correctAnswer": "Mui",
            "options": [
              "Mui",
              "Athom akolon",
              "Aloma akolon",
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
    "id": "turkana-unit-4",
    "unitNumber": 4,
    "title": "Family & People",
    "description": "Comprehensive Turkana curriculum for Family & People, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Users",
    "color": "#00897B",
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
            "target": "Etunganan",
            "source": "Person",
            "pronunciation": "e-tu-nga-nan",
            "hint": "Human being or person. Plural: Ngitunga (people). (Barton 1921)"
          },
          {
            "target": "Etonganan (pl. ngitunga)",
            "source": "Mankind",
            "pronunciation": "e-to-nga-nan",
            "hint": "Human being or person. Plural: Ngitunga (people). (Barton 1921)"
          },
          {
            "target": "Ekili",
            "source": "Man",
            "pronunciation": "e-ki-li",
            "hint": "Adult male or warrior. Plural: Ngiliok. (Barton 1921)"
          },
          {
            "target": "E'kili (pl. ngiliok)",
            "source": "Male",
            "pronunciation": "e'ki-li",
            "hint": "Adult male or warrior. Plural: Ngiliok. (Barton 1921)"
          },
          {
            "target": "Abero",
            "source": "Woman",
            "pronunciation": "a-be-ro",
            "hint": "Adult female or woman. Plural: Ngabero. (Barton 1921)"
          },
          {
            "target": "A'bero (pl. ngabero)",
            "source": "Female",
            "pronunciation": "a'be-ro",
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
            "target": "Edit",
            "source": "Son",
            "pronunciation": "e-dit",
            "hint": "Male child or youth. (Barton 1921)"
          },
          {
            "target": "Lokoku",
            "source": "Young boy",
            "pronunciation": "lo-ko-ku",
            "hint": "Male child or youth. (Barton 1921)"
          },
          {
            "target": "Apethe",
            "source": "Daughter",
            "pronunciation": "a-pe-the",
            "hint": "Girl or unmarried daughter. (Barton 1921)"
          },
          {
            "target": "Apese",
            "source": "Girl",
            "pronunciation": "a-pe-se",
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
            "prompt": "What does \"Etunganan\" mean in English?",
            "correctAnswer": "Person",
            "options": [
              "Person",
              "Man",
              "Woman",
              "Father"
            ],
            "hint": "Starts with \"Pe…\" (6 letters)",
            "acceptedAnswers": [
              "Person / Mankind",
              "Person"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekili\" mean in English?",
            "correctAnswer": "Man",
            "options": [
              "Woman",
              "Man",
              "Father",
              "Person"
            ],
            "hint": "Adult male or warrior. Plural: Ngiliok. (Barton 1921)",
            "acceptedAnswers": [
              "Man / Male",
              "Man"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Abero\" mean in English?",
            "correctAnswer": "Woman",
            "options": [
              "Father",
              "Person",
              "Man",
              "Woman"
            ],
            "hint": "Starts with \"Wo…\" (5 letters)",
            "acceptedAnswers": [
              "Woman / Female",
              "Woman"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Woman\" in Turkana?",
            "correctAnswer": "Abero",
            "options": [
              "Etunganan",
              "Ekili",
              "Baba",
              "Abero"
            ],
            "hint": "ah-beh-roh",
            "acceptedAnswers": [
              "Abero / A'bero (pl. ngabero)",
              "Abero"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Father\" in Turkana?",
            "correctAnswer": "Baba",
            "options": [
              "Etunganan",
              "Ekili",
              "Abero",
              "Baba"
            ],
            "hint": "bah-bah / pah-pah",
            "acceptedAnswers": [
              "Baba / Papa (pl. tababa / ngipapao)",
              "Baba"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mother\" in Turkana?",
            "correctAnswer": "Toto",
            "options": [
              "Ekili",
              "Abero",
              "Etunganan",
              "Toto"
            ],
            "hint": "toh-toh",
            "acceptedAnswers": [
              "Toto / Iyoo (pl. tatoto / ngiyootin)",
              "Toto"
            ]
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
            "source": "Parent-in-law (Father-in-law / Mother-in-law)",
            "pronunciation": "a-ka-mu-ra-ni-ka",
            "hint": "Father-in-law or mother-in-law. (Barton 1921)"
          },
          {
            "target": "Akamuran (pl. ngamurak)",
            "source": "In-law (Brother/Sister-in-law)",
            "pronunciation": "a-ka-mu-ran",
            "hint": "Affinal relative through marriage. (Barton 1921)"
          },
          {
            "target": "Ekasiko",
            "source": "Old man",
            "pronunciation": "e-ka-si-ko",
            "hint": "Respected elder in traditional age-set hierarchy. (Barton 1921)"
          },
          {
            "target": "Akasikot",
            "source": "Elder",
            "pronunciation": "a-ka-si-kot",
            "hint": "Respected elder in traditional age-set hierarchy. (Barton 1921)"
          },
          {
            "target": "Akimat (pl. ngakimat)",
            "source": "Old woman",
            "pronunciation": "a-ki-mat",
            "hint": "Elderly respected woman. (Barton 1921)"
          },
          {
            "target": "Akarachonait",
            "source": "Young warrior",
            "pronunciation": "a-ka-ra-cho-nait",
            "hint": "Initiated young pastoral warrior of the age-grade. (Barton 1921)"
          },
          {
            "target": "Ekasurani",
            "source": "Youth",
            "pronunciation": "e-ka-su-ra-ni",
            "hint": "Initiated young pastoral warrior of the age-grade. (Barton 1921)"
          },
          {
            "target": "Epay / Ekone (pl. ngepaylon / ngikonei)",
            "source": "Friend",
            "pronunciation": "e-pay / e-ko-ne",
            "hint": "Close friend or peer. (Barton 1921)"
          },
          {
            "target": "Eirkatungan",
            "source": "Chief",
            "pronunciation": "eir-ka-tu-ngan",
            "hint": "Community leader, raid scout, or prominent elder. (Barton 1921)"
          },
          {
            "target": "Erotoit",
            "source": "Leader",
            "pronunciation": "e-ro-toit",
            "hint": "Community leader, raid scout, or prominent elder. (Barton 1921)"
          },
          {
            "target": "Ebayunan",
            "source": "Guest",
            "pronunciation": "e-ba-yu-nan",
            "hint": "Traveller or visiting guest hosted at the kraal. (Barton 1921)"
          },
          {
            "target": "Epeyonon",
            "source": "Stranger",
            "pronunciation": "e-pe-yo-non",
            "hint": "Traveller or visiting guest hosted at the kraal. (Barton 1921)"
          },
          {
            "target": "Emorothi (pl. ngemoroka)",
            "source": "Neighbour",
            "pronunciation": "e-mo-ro-thi",
            "hint": "Neighbouring homestead resident. (Barton 1921)"
          },
          {
            "target": "Atageri (pl. ngatagerin)",
            "source": "Clan",
            "pronunciation": "a-ta-ge-ri",
            "hint": "Exogamous patrilineal clan. (Barton 1921)"
          },
          {
            "target": "Ebusorut (pl. ngebusorito)",
            "source": "Widow",
            "pronunciation": "e-bu-so-rut",
            "hint": "Widow. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Apa — Tata",
            "source": "Grandfather — Grandmother."
          },
          {
            "target": "Eya — Baba",
            "source": "Aunt — Uncle."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Apa\" mean in English?",
            "correctAnswer": "Grandfather",
            "options": [
              "Grandmother",
              "Aunt",
              "Uncle",
              "Grandfather"
            ],
            "hint": "Core vocabulary in Family & People (Part 2)",
            "acceptedAnswers": [
              "Grandfather / Male ancestor",
              "Grandfather"
            ]
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
    "id": "turkana-unit-5",
    "unitNumber": 5,
    "title": "Animals & Wildlife",
    "description": "Comprehensive Turkana curriculum for Animals & Wildlife, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "PawPrint",
    "color": "#00897B",
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
            "correctAnswer": "Cattle",
            "options": [
              "Cow",
              "Bull",
              "Bullock",
              "Cattle"
            ],
            "hint": "Starts with \"Ca…\" (6 letters)",
            "acceptedAnswers": [
              "Cattle (Herds)",
              "Cattle"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atāka / Aite (pl. ngatak / ngatuk)\" mean in English?",
            "correctAnswer": "Cow",
            "options": [
              "Bull",
              "Bullock",
              "Cow",
              "Cattle"
            ],
            "hint": "Starts with \"Co…\" (3 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emanik (pl. ngemaniko)\" mean in English?",
            "correctAnswer": "Bull",
            "options": [
              "Bullock",
              "Cattle",
              "Cow",
              "Bull"
            ],
            "hint": "Starts with \"Bu…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bull\" in Turkana?",
            "correctAnswer": "Emanik",
            "options": [
              "Ng'atuk",
              "Atāka",
              "Emon",
              "Emanik"
            ],
            "hint": "eh-mah-neek",
            "acceptedAnswers": [
              "Emanik (pl. ngemaniko)",
              "Emanik"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bullock / Ox\" in Turkana?",
            "correctAnswer": "Emon",
            "options": [
              "Ng'atuk",
              "Emon",
              "Atāka",
              "Emanik"
            ],
            "hint": "eh-mohn",
            "acceptedAnswers": [
              "Emon (pl. ngemongin)",
              "Emon"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Heifer\" in Turkana?",
            "correctAnswer": "Atou",
            "options": [
              "Atāka",
              "Emanik",
              "Ng'atuk",
              "Atou"
            ],
            "hint": "ah-toh-oo",
            "acceptedAnswers": [
              "Atou / Ataok (pl. ngatak / ngataokin)",
              "Atou"
            ]
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
              "Donkey",
              "Elephant",
              "Lion"
            ],
            "hint": "Starts with \"Do…\" (6 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akāl / Ekaal (pl. ngāl / ngikaala)\" mean in English?",
            "correctAnswer": "Camel",
            "options": [
              "Camel",
              "Elephant",
              "Lion",
              "Donkey"
            ],
            "hint": "Starts with \"Ca…\" (5 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Etom / E'tome (pl. ngetom / ngitomei)\" mean in English?",
            "correctAnswer": "Elephant",
            "options": [
              "Lion",
              "Donkey",
              "Elephant",
              "Camel"
            ],
            "hint": "Starts with \"El…\" (8 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Elephant\" in Turkana?",
            "correctAnswer": "Etom",
            "options": [
              "Esikirya",
              "Etom",
              "Akāl",
              "Angatuin"
            ],
            "hint": "eh-tohm",
            "acceptedAnswers": [
              "Etom / E'tome (pl. ngetom / ngitomei)",
              "Etom"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lion\" in Turkana?",
            "correctAnswer": "Angatuin",
            "options": [
              "Esikirya",
              "Angatuin",
              "Akāl",
              "Etom"
            ],
            "hint": "ahn-gah-too-een",
            "acceptedAnswers": [
              "Angatuin / Engatun (pl. ngatuino / ngingatunyo)",
              "Angatuin"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leopard\" in Turkana?",
            "correctAnswer": "Eris",
            "options": [
              "Eris",
              "Akāl",
              "Etom",
              "Esikirya"
            ],
            "hint": "eh-rees",
            "acceptedAnswers": [
              "Eris (pl. ngerise / ngirisa)",
              "Eris"
            ]
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
              "Hippopotamus",
              "Zebra",
              "Eland",
              "Oryx"
            ],
            "hint": "Starts with \"Hi…\" (12 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Etugo / Etuko (pl. ngetugoi / ngitukoi)\" mean in English?",
            "correctAnswer": "Zebra",
            "options": [
              "Eland",
              "Zebra",
              "Oryx",
              "Hippopotamus"
            ],
            "hint": "Starts with \"Ze…\" (5 letters)"
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
            "hint": "Starts with \"El…\" (5 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eland\" in Turkana?",
            "correctAnswer": "Uwabet",
            "options": [
              "Uwabet",
              "Epir",
              "Etugo",
              "Eder"
            ],
            "hint": "oo-wah-beht",
            "acceptedAnswers": [
              "Uwabet (pl. nguawabeto)",
              "Uwabet"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Oryx\" in Turkana?",
            "correctAnswer": "Eder",
            "options": [
              "Epir",
              "Eder",
              "Etugo",
              "Uwabet"
            ],
            "hint": "eh-dehr",
            "acceptedAnswers": [
              "Eder (pl. ngederin)",
              "Eder"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Greater Kudu\" in Turkana?",
            "correctAnswer": "Emakak",
            "options": [
              "Etugo",
              "Uwabet",
              "Epir",
              "Emakak"
            ],
            "hint": "eh-mah-kahk",
            "acceptedAnswers": [
              "Emakak (pl. ngemakaka)",
              "Emakak"
            ]
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
              "Monkey",
              "Snake"
            ],
            "hint": "Starts with \"Mo…\" (6 letters)"
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
            "hint": "Starts with \"Cr…\" (9 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ebokok (pl. ngebokoka)\" mean in English?",
            "correctAnswer": "Tortoise",
            "options": [
              "Snake",
              "Monkey",
              "Crocodile",
              "Tortoise"
            ],
            "hint": "Starts with \"To…\" (8 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tortoise\" in Turkana?",
            "correctAnswer": "Ebokok",
            "options": [
              "Akodokon",
              "Akinyan",
              "Emun",
              "Ebokok"
            ],
            "hint": "eh-boh-kohk",
            "acceptedAnswers": [
              "Ebokok (pl. ngebokoka)",
              "Ebokok"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Snake\" in Turkana?",
            "correctAnswer": "Emun",
            "options": [
              "Akodokon",
              "Akinyan",
              "Emun",
              "Ebokok"
            ],
            "hint": "eh-moon",
            "acceptedAnswers": [
              "Emun (pl. ngemun)",
              "Emun"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Puff adder\" in Turkana?",
            "correctAnswer": "Akipom",
            "options": [
              "Akinyan",
              "Akipom",
              "Ebokok",
              "Akodokon"
            ],
            "hint": "ah-kee-pohm",
            "acceptedAnswers": [
              "Akipom (pl. ngapomia)",
              "Akipom"
            ]
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
            "target": "Oūū",
            "source": "Bee (collective: bees)",
            "pronunciation": "o-uu",
            "hint": "Wild honeybee swarms. (Barton 1921)"
          },
          {
            "target": "Atapeng / Akukor (pl. ngatapengo / ngakukoroi)",
            "source": "Chicken / Fowl",
            "pronunciation": "a-ta-peng / a-ku-kor",
            "hint": "Domestic fowl. (Barton 1921)"
          },
          {
            "target": "Apoo (pl. ngapooi)",
            "source": "Hare / Rabbit",
            "pronunciation": "a-poo",
            "hint": "Savannah hare. (Barton 1921)"
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
              "Guineafowl",
              "Chicken",
              "Hare"
            ],
            "hint": "Starts with \"Gu…\" (10 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekuri (pl. ngokori)\" mean in English?",
            "correctAnswer": "Dove",
            "options": [
              "Dove",
              "Chicken",
              "Hare",
              "Guineafowl"
            ],
            "hint": "Starts with \"Do…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fish\" in Turkana?",
            "correctAnswer": "Ekolia",
            "options": [
              "Ekuri",
              "Atapeng",
              "Ingok",
              "Ekolia"
            ],
            "hint": "eh-koh-lee-ah",
            "acceptedAnswers": [
              "Ekolia (pl. ngolia)",
              "Ekolia"
            ]
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
    "id": "turkana-unit-6",
    "unitNumber": 6,
    "title": "Nature & Environment",
    "description": "Comprehensive Turkana curriculum for Nature & Environment, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "TreePine",
    "color": "#00897B",
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
            "target": "Angalul",
            "source": "River",
            "pronunciation": "a-nga-lul",
            "hint": "Permanent or seasonal river channel. (Barton 1921)"
          },
          {
            "target": "Angolul (pl. ngangolulio)",
            "source": "Stream",
            "pronunciation": "a-ngo-lul",
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
            "target": "Aro",
            "source": "Plain",
            "pronunciation": "a-ro",
            "hint": "Vast open arid plain. (Barton 1921)"
          },
          {
            "target": "Etot",
            "source": "Savannah",
            "pronunciation": "e-tot",
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
            "target": "Ayonay (pl. ngiyonay)",
            "source": "Dry riverbed (Laga)",
            "pronunciation": "a-yo-nay",
            "hint": "Seasonal sandy riverbed where subsurface wells are dug. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Ng'akipi — Angalul",
            "source": "Water — River."
          },
          {
            "target": "Emoro — Aukot",
            "source": "Mountain — Mountain range."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ng'akipi\" mean in English?",
            "correctAnswer": "Water",
            "options": [
              "River",
              "Mountain",
              "Water",
              "Stream"
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
            "target": "Akuich",
            "source": "Sky",
            "pronunciation": "a-kuich",
            "hint": "The vault of heaven and celestial abode of God. (Barton 1921)"
          },
          {
            "target": "Akuj",
            "source": "Heaven",
            "pronunciation": "a-kuj",
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
            "target": "Elup",
            "source": "Earth",
            "pronunciation": "e-lup",
            "hint": "Soil and ground surface. (Barton 1921)"
          },
          {
            "target": "Ngalup",
            "source": "Soil",
            "pronunciation": "nga-lup",
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
            "target": "Ebur",
            "source": "Rock pool",
            "pronunciation": "e-bur",
            "hint": "Natural rock pool or perennial freshwater spring. (Barton 1921)"
          },
          {
            "target": "Ejwa",
            "source": "Spring",
            "pronunciation": "e-jwa",
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
            "prompt": "What does \"Akuich\" mean in English?",
            "correctAnswer": "Sky",
            "options": [
              "Cloud",
              "Wind",
              "Sky",
              "Whirlwind"
            ],
            "hint": "The vault of heaven and celestial abode of God. (Barton 1921)",
            "acceptedAnswers": [
              "Sky / Heaven",
              "Sky"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Edu (pl. ngeduon)\" mean in English?",
            "correctAnswer": "Cloud",
            "options": [
              "Wind",
              "Whirlwind",
              "Sky",
              "Cloud"
            ],
            "hint": "Starts with \"Cl…\" (5 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atorot / Ekuwam (pl. ngatorot / ngikuwamin)\" mean in English?",
            "correctAnswer": "Wind",
            "options": [
              "Wind",
              "Whirlwind",
              "Sky",
              "Cloud"
            ],
            "hint": "Starts with \"Wi…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Wind\" in Turkana?",
            "correctAnswer": "Atorot",
            "options": [
              "Akuich",
              "Edu",
              "Ekwam",
              "Atorot"
            ],
            "hint": "ah-toh-roht",
            "acceptedAnswers": [
              "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
              "Atorot"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Whirlwind / Dust devil\" in Turkana?",
            "correctAnswer": "Ekwam",
            "options": [
              "Ekwam",
              "Akuich",
              "Edu",
              "Atorot"
            ],
            "hint": "eh-kwahm",
            "acceptedAnswers": [
              "Ekwam (pl. ngakwama)",
              "Ekwam"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Thunder\" in Turkana?",
            "correctAnswer": "Egiru",
            "options": [
              "Edu",
              "Egiru",
              "Atorot",
              "Akuich"
            ],
            "hint": "eh-gee-roo",
            "acceptedAnswers": [
              "Egiru (pl. ngakiro)",
              "Egiru"
            ]
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
            "target": "Amel",
            "source": "Grass",
            "pronunciation": "a-mel",
            "hint": "Fresh tender pasture for cattle and sheep. (Barton 1921)"
          },
          {
            "target": "Amelu",
            "source": "Pasture",
            "pronunciation": "a-me-lu",
            "hint": "Fresh tender pasture for cattle and sheep. (Barton 1921)"
          },
          {
            "target": "Akokai (pl. ngoka)",
            "source": "Thorn",
            "pronunciation": "a-ko-kai",
            "hint": "Thorn used in defensive kraal fencing. (Barton 1921)"
          },
          {
            "target": "Akwap",
            "source": "Land",
            "pronunciation": "a-kwap",
            "hint": "Ancestral homeland or territory. (Barton 1921)"
          },
          {
            "target": "Akwop (pl. ngakwapa)",
            "source": "Country",
            "pronunciation": "a-kwop",
            "hint": "Ancestral homeland or territory. (Barton 1921)"
          },
          {
            "target": "Achokor (pl. ngachokoritho)",
            "source": "Grazing ground",
            "pronunciation": "a-cho-kor",
            "hint": "Open grazing pastureland. (Barton 1921)"
          }
        ],
        "sentences": [
          {
            "target": "Akitoi — Ateni",
            "source": "Tree — Tree branch."
          },
          {
            "target": "Akobuket — Akui",
            "source": "Tree bark — Leaf."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akitoi\" mean in English?",
            "correctAnswer": "Tree",
            "options": [
              "Tree branch",
              "Tree bark",
              "Leaf",
              "Tree"
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
    "id": "turkana-unit-7",
    "unitNumber": 7,
    "title": "Body Parts",
    "description": "Comprehensive Turkana curriculum for Body Parts, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Activity",
    "color": "#00897B",
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
              "Head",
              "Ear"
            ],
            "hint": "Starts with \"He…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atimat / Ngetim (pl. ngatim)\" mean in English?",
            "correctAnswer": "Hair",
            "options": [
              "Eye",
              "Hair",
              "Ear",
              "Head"
            ],
            "hint": "Starts with \"Ha…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akon / Akong (pl. ngakonyan)\" mean in English?",
            "correctAnswer": "Eye",
            "options": [
              "Eye",
              "Ear",
              "Head",
              "Hair"
            ],
            "hint": "Starts with \"Ey…\" (3 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eye\" in Turkana?",
            "correctAnswer": "Akon",
            "options": [
              "Akon",
              "Ako",
              "Atimat",
              "Agit"
            ],
            "hint": "ah-kohn",
            "acceptedAnswers": [
              "Akon / Akong (pl. ngakonyan)",
              "Akon"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ear\" in Turkana?",
            "correctAnswer": "Agit",
            "options": [
              "Agit",
              "Ako",
              "Atimat",
              "Akon"
            ],
            "hint": "ah-geet / ah-keet",
            "acceptedAnswers": [
              "Agit / Akit (pl. nyagi / ngaki)",
              "Agit"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Turkana?",
            "correctAnswer": "Ekumi",
            "options": [
              "Atimat",
              "Akon",
              "Ekumi",
              "Ako"
            ],
            "hint": "eh-koo-mee",
            "acceptedAnswers": [
              "Ekumi (pl. ngikumith / ngikumes)",
              "Ekumi"
            ]
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
              "Face",
              "Shoulder",
              "Chest",
              "Breast"
            ],
            "hint": "Starts with \"Fa…\" (4 letters)"
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
            "hint": "Starts with \"Sh…\" (8 letters)"
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
            "hint": "Starts with \"Ch…\" (5 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Chest\" in Turkana?",
            "correctAnswer": "Etorob",
            "options": [
              "Etorob",
              "Eret",
              "Ethiket",
              "Ethigina"
            ],
            "hint": "eh-toh-rohb",
            "acceptedAnswers": [
              "Etorob (pl. ngatorobio)",
              "Etorob"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Breast\" in Turkana?",
            "correctAnswer": "Ethigina",
            "options": [
              "Eret",
              "Ethiket",
              "Etorob",
              "Ethigina"
            ],
            "hint": "eh-thee-gee-nah",
            "acceptedAnswers": [
              "Ethigina / Ekidi (pl. ngethigin)",
              "Ethigina"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Heart\" in Turkana?",
            "correctAnswer": "Etou",
            "options": [
              "Ethiket",
              "Etorob",
              "Etou",
              "Eret"
            ],
            "hint": "eh-toh-oo / eh-tah-oo",
            "acceptedAnswers": [
              "Etou / Etau (pl. ngetai / ngitai)",
              "Etou"
            ]
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
            "target": "Emargoit",
            "source": "Fingernail",
            "pronunciation": "e-mar-goit",
            "hint": "Fingernail, claw, or animal hoof. (Barton 1921)"
          },
          {
            "target": "Emagarit (pl. ngemagor)",
            "source": "Claw",
            "pronunciation": "e-ma-ga-rit",
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
            "target": "Adapal akeju",
            "source": "Foot",
            "pronunciation": "a-da-pal a-ke-ju",
            "hint": "Sole of foot. (Barton 1921)"
          },
          {
            "target": "Etou ya keju",
            "source": "Sole",
            "pronunciation": "e-tou ya ke-ju",
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
            "target": "Akwan (pl. ngouwat)",
            "source": "Body",
            "pronunciation": "a-kwan",
            "hint": "Human body or flesh. (Barton 1921)"
          },
          {
            "target": "Akirin (pl. ngakir)",
            "source": "Flesh",
            "pronunciation": "a-ki-rin",
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
            "prompt": "What does \"Emargoit\" mean in English?",
            "correctAnswer": "Fingernail",
            "options": [
              "Leg",
              "Knee",
              "Foot",
              "Fingernail"
            ],
            "hint": "Starts with \"Fi…\" (10 letters)",
            "acceptedAnswers": [
              "Fingernail / Claw",
              "Fingernail"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akeju (pl. ngakeju)\" mean in English?",
            "correctAnswer": "Leg",
            "options": [
              "Knee",
              "Foot",
              "Fingernail",
              "Leg"
            ],
            "hint": "Starts with \"Le…\" (3 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akun / Akung (pl. ngakungin)\" mean in English?",
            "correctAnswer": "Knee",
            "options": [
              "Foot",
              "Knee",
              "Fingernail",
              "Leg"
            ],
            "hint": "Starts with \"Kn…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Knee\" in Turkana?",
            "correctAnswer": "Akun",
            "options": [
              "Emargoit",
              "Akun",
              "Akeju",
              "Adapal akeju"
            ],
            "hint": "ah-koon",
            "acceptedAnswers": [
              "Akun / Akung (pl. ngakungin)",
              "Akun"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Foot\" in Turkana?",
            "correctAnswer": "Adapal akeju",
            "options": [
              "Emargoit",
              "Adapal akeju",
              "Akeju",
              "Akun"
            ],
            "hint": "ah-dah-pahl ah-keh-joo",
            "acceptedAnswers": [
              "Adapal akeju / Etou ya keju",
              "Adapal akeju"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Toe\" in Turkana?",
            "correctAnswer": "Akimoin akejo",
            "options": [
              "Akeju",
              "Akimoin akejo",
              "Akun",
              "Emargoit"
            ],
            "hint": "eh-kee-moh-een ah-keh-joh",
            "acceptedAnswers": [
              "Akimoin akejo (pl. ngakimmoio ngakeju)",
              "Akimoin akejo"
            ]
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
    "id": "turkana-unit-8",
    "unitNumber": 8,
    "title": "Food & Drink",
    "description": "Comprehensive Turkana curriculum for Food & Drink, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Soup",
    "color": "#00897B",
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
            "target": "Akimet (pl. ngakajonon)",
            "source": "Butter",
            "pronunciation": "a-ki-met",
            "hint": "Clarified butter or melted fat. (Barton 1921)"
          },
          {
            "target": "Ngameta",
            "source": "Ghee / Clarified fat",
            "pronunciation": "nga-me-ta",
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
            "target": "Mumwa",
            "source": "Millet",
            "pronunciation": "mu-mwa",
            "hint": "Drought-hardy sorghum grain cultivated in river floodplains. (Barton 1921)"
          },
          {
            "target": "Ngimumwa",
            "source": "Sorghum (grain)",
            "pronunciation": "ngi-mu-mwa",
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
            "hint": "Starts with \"Me…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akili / Ngakile\" mean in English?",
            "correctAnswer": "Milk",
            "options": [
              "Milk",
              "Fresh milk",
              "Curdled milk",
              "Meat"
            ],
            "hint": "Starts with \"Mi…\" (4 letters)"
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
              "Akirin",
              "Alepan",
              "Akili",
              "Ngakikok"
            ],
            "hint": "ah-leh-pahn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Curdled milk\" in Turkana?",
            "correctAnswer": "Ngakikok",
            "options": [
              "Akirin",
              "Ngakikok",
              "Akili",
              "Alepan"
            ],
            "hint": "ngah-kee-kohk"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Butter\" in Turkana?",
            "correctAnswer": "Akimet",
            "options": [
              "Akili",
              "Akimet",
              "Alepan",
              "Akirin"
            ],
            "hint": "ah-kee-meht",
            "acceptedAnswers": [
              "Akimet (pl. ngakajonon / ngameta)",
              "Akimet"
            ]
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
            "correctAnswer": "Food",
            "options": [
              "Drinking water",
              "Food",
              "Salt",
              "Chewing tobacco"
            ],
            "hint": "Starts with \"Fo…\" (4 letters)",
            "acceptedAnswers": [
              "Food (provisions)",
              "Food"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ng'akipi / Agipi\" mean in English?",
            "correctAnswer": "Drinking water",
            "options": [
              "Salt",
              "Chewing tobacco",
              "Food",
              "Drinking water"
            ],
            "hint": "Starts with \"Dr…\" (14 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Edot\" mean in English?",
            "correctAnswer": "Salt",
            "options": [
              "Chewing tobacco",
              "Salt",
              "Food",
              "Drinking water"
            ],
            "hint": "Starts with \"Sa…\" (4 letters)",
            "acceptedAnswers": [
              "Salt / Salt-lick",
              "Salt"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Salt / Salt-lick\" in Turkana?",
            "correctAnswer": "Edot",
            "options": [
              "Akimoich",
              "Edot",
              "Ng'akipi",
              "Enyakait"
            ],
            "hint": "eh-doht",
            "acceptedAnswers": [
              "Edot (pl. ngedotin)",
              "Edot"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Chewing tobacco\" in Turkana?",
            "correctAnswer": "Enyakait",
            "options": [
              "Enyakait",
              "Akimoich",
              "Ng'akipi",
              "Edot"
            ],
            "hint": "eh-nyah-kah-eet",
            "acceptedAnswers": [
              "Enyakait (pl. nganyakaita)",
              "Enyakait"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Snuff tobacco\" in Turkana?",
            "correctAnswer": "Etaba ekumi",
            "options": [
              "Ng'akipi",
              "Etaba ekumi",
              "Edot",
              "Akimoich"
            ],
            "hint": "eh-tah-bah eh-koo-mee",
            "acceptedAnswers": [
              "Etaba ekumi (pl. ngetabin ekumi)",
              "Etaba ekumi"
            ]
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
    "id": "turkana-unit-9",
    "unitNumber": 9,
    "title": "Home & Material Culture",
    "description": "Comprehensive Turkana curriculum for Home & Material Culture, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Home",
    "color": "#00897B",
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
            "target": "Ouwi",
            "source": "Homestead",
            "pronunciation": "ou-wi",
            "hint": "Nomadic pastoral kraal and family settlement. (Barton 1921)"
          },
          {
            "target": "Nawi",
            "source": "Village",
            "pronunciation": "na-wi",
            "hint": "Nomadic pastoral kraal and family settlement. (Barton 1921)"
          },
          {
            "target": "Akie",
            "source": "House",
            "pronunciation": "a-kie",
            "hint": "Domed sleeping shelter framed with bent branches and thatched. (Barton 1921)"
          },
          {
            "target": "Akai",
            "source": "Family hut",
            "pronunciation": "a-kai",
            "hint": "Domed sleeping shelter framed with bent branches and thatched. (Barton 1921)"
          },
          {
            "target": "Akidor (pl. ngidorin)",
            "source": "Door",
            "pronunciation": "a-ki-dor",
            "hint": "Entrance gate in the thorn bush perimeter of the kraal. (Barton 1921)"
          },
          {
            "target": "Ekidor (pl. ngikidoria)",
            "source": "Kraal gate",
            "pronunciation": "e-ki-dor",
            "hint": "Entrance gate in the thorn bush perimeter of the kraal. (Barton 1921)"
          },
          {
            "target": "Anuk",
            "source": "Cattle kraal",
            "pronunciation": "a-nuk",
            "hint": "Thorn barrier enclosing livestock overnight. (Barton 1921)"
          },
          {
            "target": "Anok",
            "source": "Enclosure",
            "pronunciation": "a-nok",
            "hint": "Thorn barrier enclosing livestock overnight. (Barton 1921)"
          },
          {
            "target": "Achokor (pl. ngachokoritho)",
            "source": "Grazing ground",
            "pronunciation": "a-cho-kor",
            "hint": "Designated pasture territory for herds. (Barton 1921)"
          },
          {
            "target": "Ipem",
            "source": "Bed",
            "pronunciation": "i-pem",
            "hint": "Raised wooden platform bed. (Barton 1921)"
          },
          {
            "target": "Epem",
            "source": "Sleeping mat",
            "pronunciation": "e-pem",
            "hint": "Raised wooden platform bed. (Barton 1921)"
          },
          {
            "target": "Ekijolon",
            "source": "Carved headrest",
            "pronunciation": "e-ki-jo-lon",
            "hint": "Iconic carved wooden headrest carried everywhere by Turkana men. (Barton 1921)"
          },
          {
            "target": "Ekicholong",
            "source": "Stool",
            "pronunciation": "e-ki-cho-long",
            "hint": "Iconic carved wooden headrest carried everywhere by Turkana men. (Barton 1921)"
          },
          {
            "target": "Emaguk (pl. ngemogaka)",
            "source": "Sitting stool",
            "pronunciation": "e-ma-guk",
            "hint": "Low wooden stool for resting in the compound. (Barton 1921)"
          },
          {
            "target": "Etu",
            "source": "Calabash",
            "pronunciation": "e-tu",
            "hint": "Dried gourd vessel used for churning and drinking milk. (Barton 1921)"
          },
          {
            "target": "Itu",
            "source": "Milk gourd",
            "pronunciation": "i-tu",
            "hint": "Dried gourd vessel used for churning and drinking milk. (Barton 1921)"
          },
          {
            "target": "Edera",
            "source": "Half gourd",
            "pronunciation": "e-de-ra",
            "hint": "Hemispherical gourd cup. (Barton 1921)"
          },
          {
            "target": "Eboli",
            "source": "Drinking cup",
            "pronunciation": "e-bo-li",
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
            "prompt": "What does \"Ouwi\" mean in English?",
            "correctAnswer": "Homestead",
            "options": [
              "House",
              "Door",
              "Homestead",
              "Cattle kraal"
            ],
            "hint": "Nomadic pastoral kraal and family settlement. (Barton 1921)",
            "acceptedAnswers": [
              "Homestead / Village",
              "Homestead"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akie\" mean in English?",
            "correctAnswer": "House",
            "options": [
              "Door",
              "Cattle kraal",
              "House",
              "Homestead"
            ],
            "hint": "Domed sleeping shelter framed with bent branches and thatched. (Barton 1921)",
            "acceptedAnswers": [
              "House / Family hut",
              "House"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akidor\" mean in English?",
            "correctAnswer": "Door",
            "options": [
              "Cattle kraal",
              "Homestead",
              "House",
              "Door"
            ],
            "hint": "Entrance gate in the thorn bush perimeter of the kraal. (Barton 1921)",
            "acceptedAnswers": [
              "Door / Kraal gate",
              "Door"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Door\" in Turkana?",
            "correctAnswer": "Akidor",
            "options": [
              "Ouwi",
              "Akie",
              "Anuk",
              "Akidor"
            ],
            "hint": "ah-kee-dohr",
            "acceptedAnswers": [
              "Akidor (pl. ngidorin / ngikidoria)",
              "Akidor"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cattle kraal\" in Turkana?",
            "correctAnswer": "Anuk",
            "options": [
              "Ouwi",
              "Anuk",
              "Akie",
              "Akidor"
            ],
            "hint": "ah-nook",
            "acceptedAnswers": [
              "Anuk / Anok (pl. nganukim / ngokin)",
              "Anuk"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Grazing ground\" in Turkana?",
            "correctAnswer": "Achokor",
            "options": [
              "Akie",
              "Akidor",
              "Achokor",
              "Ouwi"
            ],
            "hint": "ah-choh-kohr",
            "acceptedAnswers": [
              "Achokor (pl. ngachokoritho)",
              "Achokor"
            ]
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
              "Cooking pot",
              "Fire"
            ],
            "hint": "Earthen pot set over hearth stones. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akolopoich (pl. ngolopoicha)\" mean in English?",
            "correctAnswer": "Traditional wooden spoon",
            "options": [
              "Watering trough",
              "Traditional wooden spoon",
              "Fire",
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
            "correctAnswer": "Eteker",
            "options": [
              "Amut",
              "Akolopoich",
              "Eteker",
              "Akim"
            ],
            "hint": "eh-teh-kehr",
            "acceptedAnswers": [
              "Eteker / Etuba (pl. ngatekera / ngatubai)",
              "Eteker"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fire\" in Turkana?",
            "correctAnswer": "Akim",
            "options": [
              "Amut",
              "Akim",
              "Akolopoich",
              "Eteker"
            ],
            "hint": "ah-keem",
            "acceptedAnswers": [
              "Akim (pl. ngakimia)",
              "Akim"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Firewood\" in Turkana?",
            "correctAnswer": "Akitoi",
            "options": [
              "Akolopoich",
              "Eteker",
              "Amut",
              "Akitoi"
            ],
            "hint": "ah-kee-toh-ee",
            "acceptedAnswers": [
              "Akitoi (pl. ngakito)",
              "Akitoi"
            ]
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
            "pronunciation": "e-chui",
            "hint": "Leather carrying pouch. (Barton 1921)"
          },
          {
            "target": "Echiro (pl. ngichiroi)",
            "source": "Market",
            "pronunciation": "e-chi-ro",
            "hint": "Trading place or market center. (Barton 1921)"
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
              "Mud head-dress",
              "Tobacco box",
              "Skin pouch",
              "Market"
            ],
            "hint": "Sculpted clay and blue-pigment coiffure worn by initiated Turkana men. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eburiangan (pl. ngeburianganga)\" mean in English?",
            "correctAnswer": "Tobacco box",
            "options": [
              "Skin pouch",
              "Market",
              "Mud head-dress",
              "Tobacco box"
            ],
            "hint": "Carved horn container holding tobacco. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Echui\" mean in English?",
            "correctAnswer": "Skin pouch",
            "options": [
              "Skin pouch",
              "Market",
              "Mud head-dress",
              "Tobacco box"
            ],
            "hint": "Leather carrying pouch. (Barton 1921)",
            "acceptedAnswers": [
              "Skin pouch / Bag",
              "Skin pouch"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Skin pouch / Bag\" in Turkana?",
            "correctAnswer": "Echui",
            "options": [
              "Amedok",
              "Eburiangan",
              "Echui",
              "Echiro"
            ],
            "hint": "eh-choo-ee",
            "acceptedAnswers": [
              "Echui (pl. ngechuin)",
              "Echui"
            ]
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
    "id": "turkana-unit-10",
    "unitNumber": 10,
    "title": "Weapons & Tools",
    "description": "Comprehensive Turkana curriculum for Weapons & Tools, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Globe",
    "color": "#00897B",
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
            "pronunciation": "a-ba-rait"
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
              "Shield",
              "Knife",
              "Spear"
            ],
            "hint": "Starts with \"Sp…\" (5 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emorok (pl. ngemorkin)\" mean in English?",
            "correctAnswer": "Spear shaft",
            "options": [
              "Shield",
              "Spear",
              "Spear shaft",
              "Knife"
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
              "Knife"
            ],
            "hint": "Decorated leather cap shielding the spearhead tip. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Spear sheath\" in Turkana?",
            "correctAnswer": "Akuraro",
            "options": [
              "Akuraro",
              "Akwara",
              "Emorok",
              "Oupwol"
            ],
            "hint": "ah-koo-rah-roh",
            "acceptedAnswers": [
              "Akuraro (pl. ngakuraroi)",
              "Akuraro"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Shield\" in Turkana?",
            "correctAnswer": "Oupwol",
            "options": [
              "Akwara",
              "Oupwol",
              "Emorok",
              "Akuraro"
            ],
            "hint": "oh-pwohl / eh-gwoh",
            "acceptedAnswers": [
              "Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)",
              "Oupwol"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Knife\" in Turkana?",
            "correctAnswer": "Ekileng",
            "options": [
              "Emorok",
              "Ekileng",
              "Akuraro",
              "Akwara"
            ],
            "hint": "eh-kee-lehng",
            "acceptedAnswers": [
              "Ekileng / A'kileng (pl. ngakilengya / ngilenya)",
              "Ekileng"
            ]
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
            "target": "Ewuno",
            "source": "Animal snare",
            "pronunciation": "e-wu-no",
            "hint": "Noose snare or pitfall trap for wild game. (Barton 1921)"
          },
          {
            "target": "Aloit",
            "source": "Trap",
            "pronunciation": "a-loit",
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
            "prompt": "What does \"Atom\" mean in English?",
            "correctAnswer": "Rifle",
            "options": [
              "War horn",
              "Wooden digging stick",
              "Rifle",
              "Iron hoe"
            ],
            "hint": "Firearm; named historically from early trade linked with elephant hunting. (Barton 1921)",
            "acceptedAnswers": [
              "Rifle / Gun",
              "Rifle"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atom\" mean in English?",
            "correctAnswer": "War horn",
            "options": [
              "Wooden digging stick",
              "War horn",
              "Iron hoe",
              "Rifle"
            ],
            "hint": "Carved wood or oryx horn trumpet blown to signal assemblies or alarms. (Barton 1921)",
            "acceptedAnswers": [
              "War horn / Trumpet",
              "War horn"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akuta (pl. ngakuta)\" mean in English?",
            "correctAnswer": "Wooden digging stick",
            "options": [
              "Wooden digging stick",
              "Iron hoe",
              "Rifle",
              "War horn"
            ],
            "hint": "Hardwood pointed digging stick for seasonal gardening and digging wells. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Wooden digging stick\" in Turkana?",
            "correctAnswer": "Akuta",
            "options": [
              "Atom",
              "Ameleko",
              "Akuta",
              "Eyap"
            ],
            "hint": "ah-koo-tah",
            "acceptedAnswers": [
              "Akuta (pl. ngakuta)",
              "Akuta"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Iron hoe\" in Turkana?",
            "correctAnswer": "Ameleko",
            "options": [
              "Ameleko",
              "Atom",
              "Akuta",
              "Eyap"
            ],
            "hint": "ah-meh-leh-koh",
            "acceptedAnswers": [
              "Ameleko (pl. ngemelakoi)",
              "Ameleko"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Axe\" in Turkana?",
            "correctAnswer": "Eyap",
            "options": [
              "Eyap",
              "Atom",
              "Akuta",
              "Ameleko"
            ],
            "hint": "eh-yahp",
            "acceptedAnswers": [
              "Eyap (pl. ngaiyapai)",
              "Eyap"
            ]
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
    "id": "turkana-unit-11",
    "unitNumber": 11,
    "title": "Verbs & Actions",
    "description": "Comprehensive Turkana curriculum for Verbs & Actions, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Layers",
    "color": "#00897B",
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
            "target": "Erari",
            "source": "To hear",
            "pronunciation": "e-ra-ri",
            "hint": "Listen or perceive sound. Present: 'Erari ayon' (I hear). (Barton 1921)"
          },
          {
            "target": "Era",
            "source": "To listen",
            "pronunciation": "e-ra",
            "hint": "Listen or perceive sound. Present: 'Erari ayon' (I hear). (Barton 1921)"
          },
          {
            "target": "Erworo",
            "source": "To speak",
            "pronunciation": "er-wo-ro",
            "hint": "Speak in words or talk together. (Barton 1921)"
          },
          {
            "target": "Akirwor",
            "source": "To talk",
            "pronunciation": "a-kir-wor",
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
            "target": "Eboigini",
            "source": "To sit",
            "pronunciation": "e-boi-gi-ni",
            "hint": "Sit down or settle in an area. (Barton 1921)"
          },
          {
            "target": "Aboikini",
            "source": "To dwell",
            "pronunciation": "a-boi-ki-ni",
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
              "To eat",
              "To go"
            ],
            "hint": "Consume food. Present 1st person: 'Emugi ayon' (I eat). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emathi / Akimati\" mean in English?",
            "correctAnswer": "To drink",
            "options": [
              "To sleep",
              "To drink",
              "To go",
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
              "To eat",
              "To drink",
              "To sleep"
            ],
            "hint": "Rest or sleep. Imperative: 'Toperirobo' (sleep well!). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To sleep\" in Turkana?",
            "correctAnswer": "Aperi",
            "options": [
              "Emugi",
              "Emathi",
              "Aperi",
              "Alothi"
            ],
            "hint": "ah-peh-ree",
            "acceptedAnswers": [
              "Aperi / Topper",
              "Aperi"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To go\" in Turkana?",
            "correctAnswer": "Alothi",
            "options": [
              "Alothi",
              "Emugi",
              "Emathi",
              "Aperi"
            ],
            "hint": "ah-loh-thee / toh-loht",
            "acceptedAnswers": [
              "Alothi / Tolot",
              "Alothi"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To come\" in Turkana?",
            "correctAnswer": "Abuni",
            "options": [
              "Emathi",
              "Abuni",
              "Aperi",
              "Emugi"
            ],
            "hint": "ah-boo-nee / bwah",
            "acceptedAnswers": [
              "Abuni / Bwa",
              "Abuni"
            ]
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
            "target": "Alemari",
            "source": "To take",
            "pronunciation": "a-le-ma-ri",
            "hint": "Pick up or accept. (Barton 1921)"
          },
          {
            "target": "Atachi",
            "source": "To receive",
            "pronunciation": "a-ta-chi",
            "hint": "Pick up or accept. (Barton 1921)"
          },
          {
            "target": "Arami",
            "source": "To hit",
            "pronunciation": "a-ra-mi",
            "hint": "Strike with club or stick. Passive: 'Karamitai ayon' (I am struck). (Barton 1921)"
          },
          {
            "target": "Karam",
            "source": "To beat",
            "pronunciation": "ka-ram",
            "hint": "Strike with club or stick. Passive: 'Karamitai ayon' (I am struck). (Barton 1921)"
          },
          {
            "target": "Ari",
            "source": "To kill",
            "pronunciation": "a-ri",
            "hint": "Kill or dispatch an animal. (Barton 1921)"
          },
          {
            "target": "Achomi",
            "source": "To spear",
            "pronunciation": "a-cho-mi",
            "hint": "Strike with spear blade. (Barton 1921)"
          },
          {
            "target": "Echomi",
            "source": "To stab",
            "pronunciation": "e-cho-mi",
            "hint": "Strike with spear blade. (Barton 1921)"
          },
          {
            "target": "Igi / Ajori",
            "source": "To fight",
            "pronunciation": "i-gi / a-jo-ri",
            "hint": "Fight in combat or cattle defense. (Barton 1921)"
          },
          {
            "target": "Aduki",
            "source": "To build / construct",
            "pronunciation": "a-du-ki",
            "hint": "Build a shelter or fence. (Barton 1921)"
          },
          {
            "target": "Adungi",
            "source": "To cut",
            "pronunciation": "a-du-ngi",
            "hint": "Cut. Reduplicative: 'Adungi-dungi' (chop into small pieces). (Barton 1921)"
          },
          {
            "target": "Adongai",
            "source": "To chop",
            "pronunciation": "a-do-ngai",
            "hint": "Cut. Reduplicative: 'Adungi-dungi' (chop into small pieces). (Barton 1921)"
          },
          {
            "target": "Elatari",
            "source": "To wash",
            "pronunciation": "e-la-ta-ri",
            "hint": "Wash with water. 'Elatari ngakan' (wash hands). (Barton 1921)"
          },
          {
            "target": "Alotari",
            "source": "To clean",
            "pronunciation": "a-lo-ta-ri",
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
            "correctAnswer": "To rise",
            "options": [
              "To give",
              "To take",
              "To hit",
              "To rise"
            ],
            "hint": "Awaken and rise up. (Barton 1921)",
            "acceptedAnswers": [
              "To rise / get up",
              "To rise"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ainagini / Akini\" mean in English?",
            "correctAnswer": "To give",
            "options": [
              "To give",
              "To take",
              "To hit",
              "To rise"
            ],
            "hint": "Offer or deliver an item. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alemari\" mean in English?",
            "correctAnswer": "To take",
            "options": [
              "To hit",
              "To rise",
              "To give",
              "To take"
            ],
            "hint": "Pick up or accept. (Barton 1921)",
            "acceptedAnswers": [
              "To take / receive",
              "To take"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To take\" in Turkana?",
            "correctAnswer": "Alemari",
            "options": [
              "Anyouni",
              "Ainagini",
              "Arami",
              "Alemari"
            ],
            "hint": "ah-leh-mah-ree",
            "acceptedAnswers": [
              "Alemari / Atachi",
              "Alemari"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To hit\" in Turkana?",
            "correctAnswer": "Arami",
            "options": [
              "Arami",
              "Anyouni",
              "Ainagini",
              "Alemari"
            ],
            "hint": "ah-rah-mee / kah-rahm",
            "acceptedAnswers": [
              "Arami / Karam",
              "Arami"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To kill\" in Turkana?",
            "correctAnswer": "Ari",
            "options": [
              "Ainagini",
              "Alemari",
              "Anyouni",
              "Ari"
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
            "target": "Alachari",
            "source": "To untie",
            "pronunciation": "a-la-cha-ri",
            "hint": "Release or untie. (Barton 1921)"
          },
          {
            "target": "Alakari",
            "source": "To loosen",
            "pronunciation": "a-la-ka-ri",
            "hint": "Release or untie. (Barton 1921)"
          },
          {
            "target": "Alepa",
            "source": "To milk",
            "pronunciation": "a-le-pa",
            "hint": "Milk cows, camels, or goats into a gourd. (Barton 1921)"
          },
          {
            "target": "Aiyoki",
            "source": "To graze",
            "pronunciation": "ai-yo-ki",
            "hint": "Drive stock out to pasture. (Barton 1921)"
          },
          {
            "target": "Eyogi",
            "source": "To herd",
            "pronunciation": "e-yo-gi",
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
            "target": "Achami",
            "source": "To like",
            "pronunciation": "a-cha-mi",
            "hint": "Assent, like, love, or desire. (Barton 1921)"
          },
          {
            "target": "Achemi",
            "source": "To love",
            "pronunciation": "a-che-mi",
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
            "source": "To seek / look",
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
            "correctAnswer": "To tie",
            "options": [
              "To tie",
              "To untie",
              "To milk",
              "To graze"
            ],
            "hint": "Fasten with cord or tether. (Barton 1921)",
            "acceptedAnswers": [
              "To tie / bind",
              "To tie"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alachari\" mean in English?",
            "correctAnswer": "To untie",
            "options": [
              "To milk",
              "To untie",
              "To graze",
              "To tie"
            ],
            "hint": "Release or untie. (Barton 1921)",
            "acceptedAnswers": [
              "To untie / loosen",
              "To untie"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alepa\" mean in English?",
            "correctAnswer": "To milk",
            "options": [
              "To graze",
              "To milk",
              "To tie",
              "To untie"
            ],
            "hint": "Milk cows, camels, or goats into a gourd. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To milk\" in Turkana?",
            "correctAnswer": "Alepa",
            "options": [
              "Ayeni",
              "Alepa",
              "Alachari",
              "Aiyoki"
            ],
            "hint": "ah-leh-pah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To graze\" in Turkana?",
            "correctAnswer": "Aiyoki",
            "options": [
              "Ayeni",
              "Alachari",
              "Alepa",
              "Aiyoki"
            ],
            "hint": "ah-ee-yoh-kee",
            "acceptedAnswers": [
              "Aiyoki / Eyogi",
              "Aiyoki"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To know\" in Turkana?",
            "correctAnswer": "Aiyeni",
            "options": [
              "Alachari",
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
    "id": "turkana-unit-12",
    "unitNumber": 12,
    "title": "Common Phrases",
    "description": "Comprehensive Turkana curriculum for Common Phrases, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' and 'A Classified Vocabulary of Turkana'.",
    "icon": "Award",
    "color": "#00897B",
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
            "target": "Ekiro kang erai...",
            "source": "My name is...",
            "pronunciation": "e-ki-ro kang e-rai",
            "hint": "Stating one's personal name. (Barton 1921)"
          },
          {
            "target": "Alothi ai? / Ilotit iwon ai?",
            "source": "Where are you going?",
            "pronunciation": "a-lothi ai / i-lo-tit i-won ai",
            "hint": "Enquiring traveller's destination. (Barton 1921)"
          },
          {
            "target": "Eyyey ngeth?",
            "source": "Where is he?",
            "pronunciation": "ey-yey ngeth",
            "hint": "Asking the location of a person. (Barton 1921)"
          },
          {
            "target": "Ali ngeth?",
            "source": "Where is she?",
            "pronunciation": "a-li ngeth",
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
            "target": "Ngolik!",
            "source": "Look out!",
            "pronunciation": "ngo-lik",
            "hint": "Warning to be watchful. (Barton 1921)"
          },
          {
            "target": "Engolikini!",
            "source": "Take care!",
            "pronunciation": "e-ngo-li-ki-ni",
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
              "What is your name?",
              "Where are you going?",
              "Where is he"
            ],
            "hint": "Enquiring someone's identity. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alothi ai? / Ilotit iwon ai?\" mean in English?",
            "correctAnswer": "Where are you going?",
            "options": [
              "Where is he",
              "Where are you going?",
              "What is your name?",
              "My name is..."
            ],
            "hint": "Enquiring traveller's destination. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where are you going?\" in Turkana?",
            "correctAnswer": "Alothi ai?",
            "options": [
              "Ngai akero ekon?",
              "Ekiro kang erai...",
              "Eyyey ngeth?",
              "Alothi ai?"
            ],
            "hint": "ah-loh-thee ah-ee",
            "acceptedAnswers": [
              "Alothi ai? / Ilotit iwon ai?",
              "Alothi ai?"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where is he\" in Turkana?",
            "correctAnswer": "Eyyey ngeth?",
            "options": [
              "Eyyey ngeth?",
              "Ngai akero ekon?",
              "Ekiro kang erai...",
              "Alothi ai?"
            ],
            "hint": "eh-ee-yeh-ee ngehth",
            "acceptedAnswers": [
              "Eyyey ngeth? / Ali ngeth?",
              "Eyyey ngeth?"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Come here\" in Turkana?",
            "correctAnswer": "Bwa nege!",
            "options": [
              "Ekiro kang erai...",
              "Alothi ai?",
              "Ngai akero ekon?",
              "Bwa nege!"
            ],
            "hint": "bwah neh-geh",
            "acceptedAnswers": [
              "Bwa nege! / Tobwo nege!",
              "Bwa nege!"
            ]
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
            "target": "Ngeyai?",
            "source": "How much?",
            "pronunciation": "nge-yai",
            "hint": "Asking quantity, headcount, or price. (Barton 1921)"
          },
          {
            "target": "Nyeyai?",
            "source": "How many?",
            "pronunciation": "nye-yai",
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
              "How much?",
              "How many?",
              "What do you want?"
            ],
            "hint": "Asking someone's intent or need. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ali tela kon?\" mean in English?",
            "correctAnswer": "What is your tribe?",
            "options": [
              "How much?",
              "What is your tribe?",
              "What do you want?",
              "How many?"
            ],
            "hint": "Enquiring someone's ethnic section or clan. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ngeyai?\" mean in English?",
            "correctAnswer": "How much?",
            "options": [
              "Why?",
              "How much?",
              "What do you want?",
              "What is your tribe?"
            ],
            "hint": "Asking quantity, headcount, or price. (Barton 1921)",
            "acceptedAnswers": [
              "How much? / How many?",
              "How much?"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"How much?\" in Turkana?",
            "correctAnswer": "Ngeyai?",
            "options": [
              "Esagin nyo?",
              "Ngeyai?",
              "Ali tela kon?",
              "Ikwani?"
            ],
            "hint": "ngeh-yah-ee",
            "acceptedAnswers": [
              "Ngeyai? / Nyeyai? / Erai ngiai?",
              "Ngeyai?"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Why?\" in Turkana?",
            "correctAnswer": "Ikwani?",
            "options": [
              "Ikwani?",
              "Esagin nyo?",
              "Ali tela kon?",
              "Ngeyai?"
            ],
            "hint": "ee-kwah-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"When?\" in Turkana?",
            "correctAnswer": "Wurre?",
            "options": [
              "Wurre?",
              "Ali tela kon?",
              "Ngeyai?",
              "Esagin nyo?"
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
            "target": "Noi",
            "source": "Very",
            "pronunciation": "noi",
            "hint": "Intensifier adverb denoting thoroughly or very. (Barton 1921)"
          },
          {
            "target": "Kere",
            "source": "Truly",
            "pronunciation": "ke-re",
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
            "target": "Erot",
            "source": "Road",
            "pronunciation": "e-rot",
            "hint": "Path, road, or pastoral cattle route. (Barton 1921)"
          },
          {
            "target": "Eerot (pl. ngerotin)",
            "source": "Path",
            "pronunciation": "ee-rot",
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
            "prompt": "What does \"Epol\" mean in English?",
            "correctAnswer": "Big",
            "options": [
              "Big",
              "Small",
              "Very",
              "I am well"
            ],
            "hint": "Large stature or high importance. (Barton 1921)",
            "acceptedAnswers": [
              "Big / Great",
              "Big"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Edit\" mean in English?",
            "correctAnswer": "Small",
            "options": [
              "Very",
              "I am well",
              "Small",
              "Big"
            ],
            "hint": "Starts with \"Sm…\" (5 letters)",
            "acceptedAnswers": [
              "Small / Little",
              "Small"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Noi\" mean in English?",
            "correctAnswer": "Very",
            "options": [
              "Very",
              "I am well",
              "Big",
              "Small"
            ],
            "hint": "Starts with \"Ve…\" (4 letters)",
            "acceptedAnswers": [
              "Very / Truly",
              "Very"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Very\" in Turkana?",
            "correctAnswer": "Noi",
            "options": [
              "Noi",
              "Epol",
              "Edit",
              "Ayari"
            ],
            "hint": "noh-ee / keh-reh",
            "acceptedAnswers": [
              "Noi / Kere",
              "Noi"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I am well\" in Turkana?",
            "correctAnswer": "Ayari",
            "options": [
              "Epol",
              "Edit",
              "Noi",
              "Ayari"
            ],
            "hint": "ah-yah-ree",
            "acceptedAnswers": [
              "Ayari / Akiyar akwan",
              "Ayari"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I am sick\" in Turkana?",
            "correctAnswer": "Adiaka ayon",
            "options": [
              "Edit",
              "Adiaka ayon",
              "Noi",
              "Epol"
            ],
            "hint": "ah-dyah-kah ah-yohng",
            "acceptedAnswers": [
              "Adiaka ayon / Adyaka ayong",
              "Adiaka ayon"
            ]
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
            "target": "Kidyeny",
            "source": "Left",
            "pronunciation": "ki-dyeny",
            "hint": "Direction left (akan na lo kidyeny = left hand). (Barton 1921)"
          },
          {
            "target": "Teten",
            "source": "Right",
            "pronunciation": "te-ten",
            "hint": "Direction right (akan na lo teten = right hand). (Barton 1921)"
          },
          {
            "target": "Ngeselekin / Pesa",
            "source": "Money",
            "pronunciation": "nge-se-le-kin / pe-sa",
            "hint": "Currency or trade coins. (Barton 1921)"
          },
          {
            "target": "Togangai! / Torimokakithai!",
            "source": "Help!",
            "pronunciation": "to-ga-ngai / to-ri-mo-ka-ki-thai",
            "hint": "Cry for assistance or rescue. (Barton 1921)"
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
            "hint": "Starts with \"Ri…\" (5 letters)"
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
            "hint": "Starts with \"Fi…\" (4 letters)"
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
    "id": "turkana-unit-13",
    "unitNumber": 13,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Turkana vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#00897B",
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
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Kalome\" in Turkana?",
            "correctAnswer": "You weep",
            "options": [
              "They laugh",
              "He steals",
              "He stinks",
              "You weep"
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
              "Kibalayūa",
              "Kalome",
              "Ekiyo",
              "Nyakakparan"
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
            "target": "Aran",
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
            "target": "Ainak",
            "source": "I give",
            "pronunciation": "ai-nak",
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
            "source": "I know not."
          },
          {
            "target": "Kepōto tanyama",
            "source": "I eat not."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Nyayeni ao\" in Turkana?",
            "correctAnswer": "I know not",
            "options": [
              "I know",
              "I know not",
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
                "left": "Aran",
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
              "Ainaʻ",
              "Alot",
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
    "id": "turkana-unit-14",
    "unitNumber": 14,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Turkana vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#00897B",
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
            "source": "I come."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Anyama\" in Turkana (Ng'aturkana)?",
            "correctAnswer": "I eat",
            "options": [
              "I ate not",
              "I drank",
              "I eat",
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
              "Anyama",
              "Nyanyame",
              "Atuana",
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
            "target": "Año",
            "source": "I am",
            "pronunciation": "a-ngo",
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
            "source": "I bring."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Año ñesilo\" in Turkana?",
            "correctAnswer": "I bring",
            "options": [
              "I am",
              "No",
              "I bring",
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
                "left": "Año",
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
              "Año"
            ],
            "hint": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-15",
    "unitNumber": 15,
    "title": "Dundas 16 Tribes, 19 Attegir Clans, Life Stages & 12-Month Calendar",
    "description": "Master the 16 principal Turkana tribes, 19 Ngoitunya & Ngolio exogamous clans (attegir), 6 male & female life stages, asavanissia warrior ages, Agipie & the nether-world god, and the 12-month Nakiborror / Nakamou / Nait calendar from Hon. K. R. Dundas (JRAI Vol. 40, 1910, pp. 66–70).",
    "icon": "BookOpen",
    "color": "#00897B",
    "skills": [
      {
        "id": "turkana-dundas-1910-tribes-clans-life-stages",
        "title": "16 Principal Tribes, 19 Attegir Clans & 6 Life Stages",
        "icon": "Users",
        "description": "Learn the 16 Turkana tribes, 19 Ngoitunya & Ngolio clans (attegir), life-stage titles, marriage & slaughter customs, and deities recorded by Hon. K. R. Dundas (1910).",
        "tips": "Dundas (1910, p. 67) notes that Turkana clans (attegir) are strictly exogamous and have no totems; Ngaruwo (#12) is the rain-makers' clan, and a new warrior generation (asavanissia) is instituted every 4 or 5 years.",
        "culturalNote": "Source attribution: Hon. Kenneth R. Dundas, 'Notes on the Tribes Inhabiting the Baringo District, East Africa Protectorate', Journal of the Royal Anthropological Institute Vol. 40 (1910, pp. 66–70, Plates XVI–XVII).",
        "words": [
          {
            "target": "Ngolio, Ngoitunya, Nittacha, Nessetou, Nbochoross, Ngissir, Nissikir",
            "source": "The 16 principal Turkana tribes",
            "pronunciation": "ngolio",
            "hint": "Hon. K. R. Dundas (1910, p. 66)"
          },
          {
            "target": "Attegir: Nitegorr, Molereto, Tuduya, Ellelet, Ebalang, Ngaruwo",
            "source": "Exogamous clans (attegir, without totems) of the Ngoitunya & Ngolio tribes",
            "pronunciation": "at-te-gir / ni-te-gorr / mo-le-re-to / tu-du-ya / nga-ru-wo",
            "hint": "Hon. K. R. Dundas (1910, p. 67)"
          },
          {
            "target": "nidue → egile → kasikou (oppa)",
            "source": "Boy → warrior → old man",
            "pronunciation": "nidue-egile-kasikou"
          },
          {
            "target": "apesur → aberu → agemat",
            "source": "Girl → married woman → old woman",
            "pronunciation": "apesur-aberu-agemat"
          },
          {
            "target": "asavanissia",
            "source": "Warrior age-generations (every 4–5 years)",
            "pronunciation": "asavanissia"
          },
          {
            "target": "Nessegonn",
            "source": "Evergreen bush on the lower Sogota with sweet berries & leathery fodder leaves",
            "pronunciation": "nessegonn"
          },
          {
            "target": "Agipie",
            "source": "Benevolent sky god prayed to in sickness",
            "pronunciation": "a-gi-pie"
          }
        ],
        "sentences": [
          {
            "target": "Nidue → Egile → Kasikou (Oppa)",
            "source": "Young boy → Warrior → Old man."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each Turkana term from Hon. K. R. Dundas (1910, pp. 67, 69) with its meaning:",
            "correctAnswer": "nidue, egile, kasikou (oppa): Boy, warrior, and old man life stages (p. 67)",
            "pairs": [
              {
                "left": "nidue, egile, kasikou (oppa)",
                "right": "Boy, warrior, and old man life stages (p. 67)"
              },
              {
                "left": "apesur, aberu, agemat",
                "right": "Girl, married woman, and old woman life stages (p. 67)"
              },
              {
                "left": "asavanissia",
                "right": "Warrior age-generations instituted every 4 or 5 years (p. 67)"
              },
              {
                "left": "Agipie",
                "right": "Benevolent god of the skies prayed to in sickness (p. 69)"
              }
            ]
          }
        ]
      },
      {
        "id": "turkana-dundas-1910-12-month-calendar",
        "title": "The 12-Month Calendar: Nakiborror, Nakamou & Nait",
        "icon": "Sun",
        "description": "Master all 12 months and 3 seasonal divisions of the Turkana year recorded by Hon. K. R. Dundas (1910, p. 70).",
        "tips": "The Turkana year begins in March with Lomaruk (Wet season: Nakiborror, March–August) followed by Lolongo (Dry season: Nakamou, September–February); August, September, and October (Loitiak, Lolongo, Lopo) are called Nait because the grass turns yellow.",
        "culturalNote": "Source attribution: Hon. K. R. Dundas, JRAI Vol. 40 (1910, p. 70).",
        "words": [
          {
            "target": "Nakiborror: Lomaruk, Tetimaru, Eliel, Loichoto, Loisoban, Loitiak",
            "source": "The 6 Wet-Season months of the Turkana year (March to August)",
            "pronunciation": "na-ki-bor-ror / lo-ma-ruk / te-ti-ma-ru / e-li-el",
            "hint": "Hon. K. R. Dundas (1910, p. 70)"
          },
          {
            "target": "Nakamou: Lolongo, Lopo, Lorara, Lomuk, Logwang, Lodunge",
            "source": "The 6 Dry-Season months of the Turkana year (September to February)",
            "pronunciation": "na-ka-mou / lo-lo-ngo / lo-po / lo-ra-ra",
            "hint": "Hon. K. R. Dundas (1910, p. 70)"
          },
          {
            "target": "Nait (Loitiak, Lolongo, Lopo)",
            "source": "Three-month transitional period (August–October) when the grass turns yellow",
            "pronunciation": "nait / loi-ti-ak / lo-lo-ngo / lo-po",
            "hint": "Hon. K. R. Dundas (1910, p. 70)"
          }
        ],
        "sentences": [
          {
            "target": "Nakiborror: Lomaruk, Tetimaru, Eliel, Loichoto, Loisoban, Loitiak.",
            "source": "Wet Season (March–August): Lomaruk, Tetimaru, Eliel, Loichoto, Loisoban, Loitiak."
          }
        ]
      },
      {
        "id": "turkana-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Turkana parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "Sunbird AI SALT & SALT-31 Ng'aturkana (CC-BY-4.0), CLDF ASJP v20 TURKANA (Best 1983 / Brown, CC-BY-4.0), SIL Bloom Ng'aturkana CC-BY-4.0 & Public Domain Historical Lexicons (Höhnel 1894, Johnston 1902, Purvis 1909, Dundas 1910, Beech 1911 & Juxon Barton 1921).",
        "words": [
          {
            "target": "ekithil",
            "source": "Peace",
            "pronunciation": "e-kithil"
          },
          {
            "target": "Alakara",
            "source": "Thank you",
            "pronunciation": "a-la-ka-ra"
          },
          {
            "target": "emala",
            "source": "To greet",
            "pronunciation": "e-ma-la"
          },
          {
            "target": "akathi",
            "source": "To thank",
            "pronunciation": "a-kathi"
          },
          {
            "target": "alakari",
            "source": "To please",
            "pronunciation": "a-la-ka-ri"
          },
          {
            "target": "Tolot-ion",
            "source": "Farewell exchange",
            "pronunciation": "toh-loht-ee-ohn / eh-johk ah-loh-thee"
          },
          {
            "target": "Abe",
            "source": "Goodbye (Parting)",
            "pronunciation": "ah-beh / ee-ee"
          },
          {
            "target": "Ejok alothi",
            "source": "Farewell response (Good, I go)",
            "pronunciation": "e-jok a-lo-thi"
          },
          {
            "target": "Na?",
            "source": "Traditional salutation",
            "pronunciation": "nah / bah-ee-yah"
          },
          {
            "target": "Ii mata",
            "source": "Health to you (Greeting reply)",
            "pronunciation": "ee-ee mah-tah"
          }
        ],
        "sentences": [
          {
            "target": "Tolot-ion! — Ejok alothi.",
            "source": "Go well! — Good, I go."
          },
          {
            "target": "Ii mata",
            "source": "Health to you (Greeting reply)."
          },
          {
            "target": "mata ejik",
            "source": "Complete health! (Unison greeting response)."
          },
          {
            "target": "agipi kalimok",
            "source": "Water, fresh."
          },
          {
            "target": "Ayon akoro",
            "source": "I am hungry."
          },
          {
            "target": "Akori ayon",
            "source": "I am thirsty."
          }
        ]
      },
      {
        "id": "turkana-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Turkana sentences for healthcare, transport, and community safety.",
        "culturalNote": "Sunbird AI SALT & SALT-31 Ng'aturkana (CC-BY-4.0), CLDF ASJP v20 TURKANA (Best 1983 / Brown, CC-BY-4.0), SIL Bloom Ng'aturkana CC-BY-4.0 & Public Domain Historical Lexicons (Höhnel 1894, Johnston 1902, Purvis 1909, Dundas 1910, Beech 1911 & Juxon Barton 1921).",
        "words": [
          {
            "target": "Apei",
            "source": "One",
            "pronunciation": "ah-peh-ee / eh-peh-ee"
          },
          {
            "target": "Ngaarei",
            "source": "Two",
            "pronunciation": "ngah-ah-reh-ee / ah-ree"
          },
          {
            "target": "Ngakanikapei",
            "source": "Six",
            "pronunciation": "ngah-kah-nee-kah-peh-ee"
          },
          {
            "target": "Tomon",
            "source": "Ten",
            "pronunciation": "toh-mohn"
          },
          {
            "target": "Ngaomon",
            "source": "Four",
            "pronunciation": "ngah-oh-mohn / ohm-wohn"
          },
          {
            "target": "Ngakan",
            "source": "Five",
            "pronunciation": "ngah-kahn / ah-khahn"
          },
          {
            "target": "Ngakanikaomon",
            "source": "Nine",
            "pronunciation": "ngah-kah-nee-kah-oh-mohn"
          },
          {
            "target": "da dan mwari",
            "source": "Both",
            "pronunciation": "da dan mwa-ri"
          },
          {
            "target": "Ngauni",
            "source": "Three",
            "pronunciation": "ngah-oo-nee / oo-nee"
          },
          {
            "target": "Ngakanikaarei",
            "source": "Seven",
            "pronunciation": "ngah-kah-nee-kah-ah-reh-ee"
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
        ]
      }
    ]
  }
];
