import type { LanguageConfig, CourseUnit } from "../types";

export const TESO_CONFIG: LanguageConfig = {
  "id": "teso",
  "name": "Teso",
  "nativeName": "Ateso",
  "family": "Nilotic",
  "counties": [
    "Busia"
  ],
  "speakers": "468K",
  "speechLocale": "",
  "description": "An Eastern Nilotic language of the Ateker (Teso–Turkana) cluster spoken in Busia County, Western Kenya and eastern Uganda.",
  "color": "#6D4C41",
  "sources": [
    "hobley-eastern-uganda-1902",
    "johnston-uganda-protectorate-1902",
    "open-web-swadesh-comparative"
  ]
};

export const TESO_UNITS: CourseUnit[] = [
  {
    "id": "teso-unit-1",
    "unitNumber": 1,
    "title": "Greetings, Kinship & The Three Noun Genders",
    "description": "Master Ateso greetings (Yoga, Ijai biai, Ejokuna), kinship terms, and Masculine (e-), Feminine (a-), and Neuter (i-) nouns.",
    "icon": "Users",
    "color": "#6D4C41",
    "skills": [
      {
        "id": "teso-greetings-kinship",
        "title": "Greetings, Introductions & Family",
        "icon": "Handshake",
        "description": "Greet elders and friends, introduce yourself, and name family members in Ateso.",
        "tips": "The universal greeting in Ateso is 'Yoga!' ('Hello!'), followed by 'Ijai biai?' (How are you? sg.) or 'Ijaasi biai?' (pl.), answered with 'Ejokuna' ('Fine/well'). Kinship terms like 'toto' (mother) and 'papa' (father) do not take gender prefixes.",
        "words": [
          {
            "target": "Yoga",
            "source": "Hello",
            "pronunciation": "yo-ga",
            "hint": "Standard Ateso greeting"
          },
          {
            "target": "Ijai biai?",
            "source": "How are you? (singular)",
            "pronunciation": "i-jai biai",
            "hint": "Plural: Ijaasi biai?"
          },
          {
            "target": "Ejokuna, arai ijo?",
            "source": "Fine, and you?",
            "pronunciation": "e-jo-ku-na a-rai ijo",
            "hint": "Polite response"
          },
          {
            "target": "Ingai bo ekon'kiror?",
            "source": "What is your name?",
            "pronunciation": "ingai bo e-kon'ki-ror",
            "hint": "ekiror = name"
          },
          {
            "target": "Eyalama ewanyun",
            "source": "Nice to see you / Thank you",
            "pronunciation": "e-ya-la-ma e-wanyun",
            "hint": "Gratitude & welcome"
          },
          {
            "target": "Awanyunos bobo",
            "source": "See you again",
            "pronunciation": "a-wanyu-nos bo-bo",
            "hint": "bobo = again"
          },
          {
            "target": "toto",
            "source": "Mother",
            "pronunciation": "to-to",
            "hint": "Prefixless kinship nouns (Hobley 1902)"
          },
          {
            "target": "papa",
            "source": "Father",
            "pronunciation": "pa-pa",
            "hint": "Prefixless kinship nouns (Hobley 1902)"
          },
          {
            "target": "ekile (pl. ikiliok)",
            "source": "Man (pl. Men)",
            "pronunciation": "e-ki-le",
            "hint": "Hobley (1902) & Johnston (1902) Elgumi/Wamia"
          },
          {
            "target": "aberu (pl. angor)",
            "source": "Woman (pl. Women)",
            "pronunciation": "a-be-ru",
            "hint": "Hobley (1902) & Johnston (1902) Elgumi/Wamia"
          },
          {
            "target": "etelepat (pl. itelepai)",
            "source": "Boy (pl. Boys)",
            "pronunciation": "e-te-le-pat",
            "hint": "Masculine e- → i- vs. Feminine a-"
          },
          {
            "target": "apese (pl. apesur)",
            "source": "Girl (pl. Girls)",
            "pronunciation": "a-pe-se",
            "hint": "Masculine e- → i- vs. Feminine a-"
          },
          {
            "target": "ikoku (pl. idwe)",
            "source": "Child (pl. Children)",
            "pronunciation": "i-ko-ku",
            "hint": "Neuter i- noun (Hobley 1902)"
          }
        ],
        "sentences": [
          {
            "target": "Yoga! Ijai biai? Ejokuna.",
            "source": "Hello! How are you? Fine."
          },
          {
            "target": "Aibo ejai toto? Ejai ngina.",
            "source": "Where is mother? She is over there."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Yoga\" in Teso?",
            "correctAnswer": "Hello",
            "options": [
              "How are you?",
              "Fine",
              "See you again",
              "Hello"
            ],
            "hint": "Standard Ateso greeting"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ijai biai?\" in Teso?",
            "correctAnswer": "How are you?",
            "options": [
              "How are you?",
              "Fine",
              "What is your name?",
              "Hello"
            ],
            "hint": "Plural: Ijaasi biai?",
            "acceptedAnswers": [
              "How are you? (singular)",
              "How are you?"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ejokuna, arai ijo?\" in Teso?",
            "correctAnswer": "Fine",
            "options": [
              "Fine",
              "Hello",
              "How are you?",
              "See you again"
            ],
            "hint": "Polite response",
            "acceptedAnswers": [
              "Fine, and you?",
              "Fine"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fine, and you?\" in Teso?",
            "correctAnswer": "Ejokuna",
            "options": [
              "Yoga",
              "Ijai biai?",
              "Ingai bo ekon'kiror?",
              "Ejokuna"
            ],
            "hint": "eh-joh-koo-nah ah-rah-ee ee-joh",
            "acceptedAnswers": [
              "Ejokuna, arai ijo?",
              "Ejokuna"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"What is your name?\" in Teso?",
            "correctAnswer": "Ingai bo ekon'kiror?",
            "options": [
              "Ingai bo ekon'kiror?",
              "Yoga",
              "Ijai biai?",
              "Ejokuna"
            ],
            "hint": "ee-ngah-ee boh eh-kohn kee-rohr"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "Yoga: Hello",
            "pairs": [
              {
                "left": "Yoga",
                "right": "Hello"
              },
              {
                "left": "Ijai biai?",
                "right": "How are you? (singular)"
              },
              {
                "left": "Ejokuna, arai ijo?",
                "right": "Fine, and you?"
              },
              {
                "left": "Ingai bo ekon'kiror?",
                "right": "What is your name?"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Nice to see you / Thank you\": ___",
            "correctAnswer": "Eyalama ewanyun",
            "options": [
              "Eyalama ewanyun",
              "Yoga",
              "Ijai biai?",
              "Ejokuna"
            ],
            "hint": "Gratitude & welcome"
          }
        ]
      },
      {
        "id": "teso-numbers-directions",
        "title": "Quinary Numerals, Nature & Cardinal Directions",
        "icon": "Hash",
        "description": "Count in Masculine and Feminine genders and navigate using Ateso spatial adverbs and nature terms.",
        "tips": "Ateso numbers 1–5 are idiope/adiope (1), iyarei/aarei (2), iuni/auni (3), ioŋon/aoŋon (4), and ikany/akany (5, from akan 'hand'). Six is ikany-kape (5+1) and ten is itomon/atomon (Hobley 1902, p. 69).",
        "words": [
          {
            "target": "idiope (m.) / adiope (f.)",
            "source": "One (1)",
            "pronunciation": "i-dio-pe / a-dio-pe",
            "hint": "Agrees with noun gender (Hobley 1902 & Johnston 1902)"
          },
          {
            "target": "iyarei (m.) / aarei (f.)",
            "source": "Two (2)",
            "pronunciation": "i-ya-rei / aa-rei",
            "hint": "Cardinal 2"
          },
          {
            "target": "iuni (m.) / auni (f.)",
            "source": "Three (3)",
            "pronunciation": "iu-ni / au-ni",
            "hint": "Cardinal 3"
          },
          {
            "target": "ioŋon (m.) / aoŋon (f.)",
            "source": "Four (4)",
            "pronunciation": "iongon / aongon",
            "hint": "Cardinal 4"
          },
          {
            "target": "ikany (m.) / akany (f.)",
            "source": "Five (5)",
            "pronunciation": "i-kany / a-kany",
            "hint": "Cardinal 5 (< akan hand)"
          },
          {
            "target": "ikany-kape",
            "source": "6 (5+1)",
            "pronunciation": "i-kany-ka-pe",
            "hint": "Hobley (1902, p. 95) & Johnston (1902, p. 851) quinary numerals 6–10"
          },
          {
            "target": "ikany-kaare",
            "source": "7 (5+2)",
            "pronunciation": "i-kany-kaa-re",
            "hint": "Hobley (1902, p. 95) & Johnston (1902, p. 851) quinary numerals 6–10"
          },
          {
            "target": "ikany-kauni",
            "source": "8 (5+3)",
            "pronunciation": "i-kany-kau-ni",
            "hint": "Hobley (1902, p. 95) & Johnston (1902, p. 851) quinary numerals 6–10"
          },
          {
            "target": "kide",
            "source": "East",
            "pronunciation": "ki-de",
            "hint": "Cardinal directions"
          },
          {
            "target": "too",
            "source": "West",
            "pronunciation": "too",
            "hint": "Cardinal directions"
          },
          {
            "target": "nyakoi",
            "source": "North",
            "pronunciation": "nya-koi",
            "hint": "Cardinal directions"
          },
          {
            "target": "agolitomei",
            "source": "South",
            "pronunciation": "a-go-li-to-mei",
            "hint": "Cardinal directions"
          },
          {
            "target": "akipi",
            "source": "Water",
            "pronunciation": "a-ki-pi",
            "hint": "Hobley (1902) & Johnston (1902) core feminine nouns"
          },
          {
            "target": "akile",
            "source": "Milk",
            "pronunciation": "a-ki-le",
            "hint": "Hobley (1902) & Johnston (1902) core feminine nouns"
          },
          {
            "target": "akim",
            "source": "Fire",
            "pronunciation": "a-kim",
            "hint": "Hobley (1902) & Johnston (1902) core feminine nouns"
          },
          {
            "target": "akolong",
            "source": "Sun",
            "pronunciation": "a-ko-long",
            "hint": "Hobley (1902) & Johnston (1902) core feminine nouns"
          },
          {
            "target": "akiteng (pl. aatuk)",
            "source": "Cow (pl. Cattle)",
            "pronunciation": "a-ki-teng",
            "hint": "Hobley (1902) pastoral nouns"
          },
          {
            "target": "emong (pl. imongin)",
            "source": "Bull, Ox (pl. Oxen)",
            "pronunciation": "e-mong",
            "hint": "Hobley (1902) pastoral nouns"
          },
          {
            "target": "akinyam",
            "source": "To eat",
            "pronunciation": "a-ki-nyam",
            "hint": "Core verbs (Hobley 1902)"
          },
          {
            "target": "akimat",
            "source": "To drink",
            "pronunciation": "a-ki-mat",
            "hint": "Core verbs (Hobley 1902)"
          },
          {
            "target": "aanyun",
            "source": "To see",
            "pronunciation": "aa-nyun",
            "hint": "Core verbs (Hobley 1902)"
          }
        ],
        "sentences": [
          {
            "target": "Itelepai iuni ka apesur auni.",
            "source": "Three boys and three girls."
          },
          {
            "target": "Akimat akile ka akinyam atap.",
            "source": "To drink milk and to eat millet bread."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"idiope (m.) / adiope (f.)\" in Teso?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "One",
              "Four"
            ],
            "hint": "Agrees with noun gender (Hobley 1902 & Johnston 1902)",
            "acceptedAnswers": [
              "One (1)",
              "One"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"iyarei (m.) / aarei (f.)\" in Teso?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Two",
              "Four",
              "One"
            ],
            "hint": "Cardinal 2",
            "acceptedAnswers": [
              "Two (2)",
              "Two"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"iuni (m.) / auni (f.)\" in Teso?",
            "correctAnswer": "Three",
            "options": [
              "Three",
              "Four",
              "One",
              "Two"
            ],
            "hint": "Cardinal 3",
            "acceptedAnswers": [
              "Three (3)",
              "Three"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Teso?",
            "correctAnswer": "iuni",
            "options": [
              "idiope",
              "iyarei",
              "ioŋon",
              "iuni"
            ],
            "hint": "ee-oo-nee / ah-oo-nee",
            "acceptedAnswers": [
              "iuni (m.) / auni (f.)",
              "iuni"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Teso?",
            "correctAnswer": "ioŋon",
            "options": [
              "idiope",
              "iyarei",
              "iuni",
              "ioŋon"
            ],
            "hint": "ee-oh-ngohn / ah-oh-ngohn",
            "acceptedAnswers": [
              "ioŋon (m.) / aoŋon (f.)",
              "ioŋon"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "idiope (m.) / adiope (f.): One (1)",
            "pairs": [
              {
                "left": "idiope (m.) / adiope (f.)",
                "right": "One (1)"
              },
              {
                "left": "iyarei (m.) / aarei (f.)",
                "right": "Two (2)"
              },
              {
                "left": "iuni (m.) / auni (f.)",
                "right": "Three (3)"
              },
              {
                "left": "ioŋon (m.) / aoŋon (f.)",
                "right": "Four (4)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Five\": ___",
            "correctAnswer": "ikany",
            "options": [
              "idiope",
              "iyarei",
              "iuni",
              "ikany"
            ],
            "hint": "Cardinal 5 (< akan hand)",
            "acceptedAnswers": [
              "ikany (m.) / akany (f.)",
              "ikany"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-2",
    "unitNumber": 2,
    "title": "Hobley Elgumi Dialogues, Pronouns, Tools & Oral Wisdom",
    "description": "Learn conversational phrases, personal pronouns, tools, and proverbs from C. W. Hobley (1902) and Sir Harry Johnston (1902).",
    "icon": "Award",
    "color": "#6D4C41",
    "skills": [
      {
        "id": "teso-hobley-1902-phrases",
        "title": "Pronouns, Homestead Tools & Hobley Phrases",
        "icon": "Home",
        "description": "Master Ateso pronouns, imperatives, and cultural terms recorded in 1902.",
        "tips": "Sir Harry Johnston (1902, p. 851) and C. W. Hobley (1902, pp. 92–95) recorded everyday salutations ('Mata!', 'Yoka yoka!') and conversational imperatives in Ateso (Elgumi/Wamia): 'Bia ne!' (Come here!), 'Kolot!' (Go away!), 'Koin akipi!' (Bring water!), and 'Icamit nyo?' (What do you want?).",
        "culturalNote": "In Ateso oral wisdom, 'Akan nabo mam epedori aibok akwap' ('One hand alone cannot dig the earth') celebrates community cooperation (aleya) in cultivating finger-millet (akima) and cassava.",
        "words": [
          {
            "target": "eong (ayong)",
            "source": "I",
            "pronunciation": "e-ong",
            "hint": "Hobley (1902) & Johnston (1902) personal pronouns"
          },
          {
            "target": "ijo",
            "source": "You (sg.)",
            "pronunciation": "i-jo",
            "hint": "Hobley (1902) & Johnston (1902) personal pronouns"
          },
          {
            "target": "ngesi",
            "source": "He / She",
            "pronunciation": "nge-si",
            "hint": "Hobley (1902) & Johnston (1902) personal pronouns"
          },
          {
            "target": "Bia ne!",
            "source": "Come here!",
            "pronunciation": "bia ne",
            "hint": "Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) conversational imperatives"
          },
          {
            "target": "Kolot!",
            "source": "Go!",
            "pronunciation": "ko-lot",
            "hint": "Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) conversational imperatives"
          },
          {
            "target": "Koin akipi!",
            "source": "Bring water!",
            "pronunciation": "koin a-ki-pi",
            "hint": "Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) phrases"
          },
          {
            "target": "Icamit nyo?",
            "source": "What do you want?",
            "pronunciation": "i-ca-mit nyo",
            "hint": "Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) phrases"
          },
          {
            "target": "Akuj / Edeke (Lokasuban)",
            "source": "God, the Supreme Creator",
            "pronunciation": "a-kuj / e-de-ke",
            "hint": "Hobley (1902) & Johnston (1902)"
          },
          {
            "target": "atap",
            "source": "Millet bread (ugali)",
            "pronunciation": "a-tap",
            "hint": "Ateso culinary staples"
          },
          {
            "target": "akima",
            "source": "Finger-millet",
            "pronunciation": "a-ki-ma",
            "hint": "Ateso culinary staples"
          },
          {
            "target": "ajon",
            "source": "Traditional cereal brew",
            "pronunciation": "a-jon",
            "hint": "Ateso culinary staples"
          },
          {
            "target": "akwara (pl. ngakwaras)",
            "source": "Spear",
            "pronunciation": "a-kwa-ra",
            "hint": "Hobley (1902, pp. 92–95) & Johnston (1902)"
          },
          {
            "target": "aupwal (ebuku)",
            "source": "Shield",
            "pronunciation": "au-pwal",
            "hint": "Hobley (1902, pp. 92–95) & Johnston (1902)"
          },
          {
            "target": "akalabai",
            "source": "Bow",
            "pronunciation": "a-ka-la-bai",
            "hint": "Hobley (1902, pp. 92–95) & Johnston (1902)"
          },
          {
            "target": "emal",
            "source": "Arrow",
            "pronunciation": "e-mal",
            "hint": "Hobley (1902, pp. 92–95) & Johnston (1902)"
          },
          {
            "target": "ekileng",
            "source": "Knife",
            "pronunciation": "e-ki-leng",
            "hint": "Hobley (1902, pp. 92–95) & Johnston (1902)"
          },
          {
            "target": "etogo (pl. itogoi)",
            "source": "House (pl. Houses)",
            "pronunciation": "e-to-go",
            "hint": "Hobley (1902, pp. 92–95) & Johnston (1902)"
          },
          {
            "target": "ekek (pl. ikekia)",
            "source": "Door (pl. Doors)",
            "pronunciation": "e-kek",
            "hint": "Hobley (1902, pp. 92–95) & Johnston (1902)"
          },
          {
            "target": "Akan nabo mam epedori aibok akwap",
            "source": "One hand alone cannot dig the earth (Proverb)",
            "pronunciation": "a-kan na-bo mam e-pe-do-ri ai-bok akwap",
            "hint": "Unity in community farming"
          }
        ],
        "sentences": [
          {
            "target": "Bia ne! Koin akipi!",
            "source": "Come here! Bring water!"
          },
          {
            "target": "Akan nabo mam epedori aibok akwap.",
            "source": "One hand alone cannot dig the earth."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"eong\" in Teso?",
            "correctAnswer": "I",
            "options": [
              "Come here!",
              "Bring water!",
              "God",
              "I"
            ],
            "hint": "Hobley (1902) & Johnston (1902) personal pronouns",
            "acceptedAnswers": [
              "I, you (sg.), s/he, we, you (pl.), they",
              "I"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Bia ne!\" in Teso?",
            "correctAnswer": "Come here!",
            "options": [
              "Bring water!",
              "God",
              "I",
              "Come here!"
            ],
            "hint": "Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) conversational imperatives",
            "acceptedAnswers": [
              "Come here! / Go!",
              "Come here!"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Koin akipi!\" in Teso?",
            "correctAnswer": "Bring water!",
            "options": [
              "God",
              "Bring water!",
              "I",
              "Come here!"
            ],
            "hint": "Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) phrases",
            "acceptedAnswers": [
              "Bring water! / What do you want?",
              "Bring water!"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bring water!\" in Teso?",
            "correctAnswer": "Koin akipi!",
            "options": [
              "eong",
              "Koin akipi!",
              "Bia ne!",
              "Akuj"
            ],
            "hint": "koyn ah-kee-pee / ee-chah-meet nyoh",
            "acceptedAnswers": [
              "Koin akipi! / Icamit nyo?",
              "Koin akipi!"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"God\" in Teso?",
            "correctAnswer": "Akuj",
            "options": [
              "eong",
              "Akuj",
              "Bia ne!",
              "Koin akipi!"
            ],
            "hint": "ah-kooj / eh-deh-keh / loh-kah-soo-bahn",
            "acceptedAnswers": [
              "Akuj / Edeke (Lokasuban)",
              "Akuj"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "eong (ayong): I",
            "pairs": [
              {
                "left": "eong (ayong)",
                "right": "I"
              },
              {
                "left": "Bia ne!",
                "right": "Come here!"
              },
              {
                "left": "Koin akipi!",
                "right": "Bring water!"
              },
              {
                "left": "Akuj / Edeke (Lokasuban)",
                "right": "God, the Supreme Creator"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Millet bread\": ___",
            "correctAnswer": "atap",
            "options": [
              "eong",
              "Bia ne!",
              "atap",
              "Koin akipi!"
            ],
            "hint": "Ateso culinary staples",
            "acceptedAnswers": [
              "atap / akima / ajon",
              "atap"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-3",
    "unitNumber": 3,
    "title": "Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Teso (Ateso) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909), and Archdeacon A. L. Kitching (1915).",
    "icon": "User",
    "color": "#6D4C41",
    "skills": [
      {
        "id": "teso-family-kinship-kinship-elders-3",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "toto",
            "source": "Mother",
            "pronunciation": "to-to",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "papa",
            "source": "Father",
            "pronunciation": "pa-pa",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "mamai",
            "source": "Uncle (maternal)",
            "pronunciation": "ma-mai",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "inac",
            "source": "Sister",
            "pronunciation": "i-nac",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "onac",
            "source": "Brother (sibling)",
            "pronunciation": "o-nac",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "ija",
            "source": "Aunt",
            "pronunciation": "ija",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "etelepat / esapat (pl. itelepai)",
            "source": "Boy (pl. boys)",
            "pronunciation": "e-te-le-pat / e-sa-pat",
            "hint": "Wikipedia Teso language — Noun prefix"
          },
          {
            "target": "apese (pl. apesur)",
            "source": "Girl (pl. girls)",
            "pronunciation": "a-pe-se",
            "hint": "Wikipedia Teso language — Noun prefix"
          },
          {
            "target": "ikoku (pl. idwe / iduwe)",
            "source": "Child (pl. children)",
            "pronunciation": "i-ko-ku",
            "hint": "Wikipedia Teso language — Noun prefix"
          },
          {
            "target": "imukeru",
            "source": "Baby",
            "pronunciation": "i-mu-ke-ru",
            "hint": "Wikipedia Teso language — Neuter nouns"
          },
          {
            "target": "ipese",
            "source": "Baby girl / Infant",
            "pronunciation": "i-pe-se",
            "hint": "Wikipedia Teso language — Neuter nouns"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"toto\" in Teso?",
            "correctAnswer": "Mother",
            "options": [
              "Mother",
              "Father",
              "Uncle",
              "Sister"
            ],
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"papa\" in Teso?",
            "correctAnswer": "Father",
            "options": [
              "Father",
              "Uncle",
              "Sister",
              "Mother"
            ],
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mamai\" in Teso?",
            "correctAnswer": "Uncle",
            "options": [
              "Uncle",
              "Sister",
              "Mother",
              "Father"
            ],
            "hint": "Wikipedia Teso language — Gender and noun prefix",
            "acceptedAnswers": [
              "Uncle (maternal)",
              "Uncle"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Uncle (maternal)\" in Teso?",
            "correctAnswer": "mamai",
            "options": [
              "toto",
              "papa",
              "inac",
              "mamai"
            ],
            "hint": "Starts with \"ma…\" (5 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sister\" in Teso?",
            "correctAnswer": "inac",
            "options": [
              "inac",
              "toto",
              "papa",
              "mamai"
            ],
            "hint": "Starts with \"in…\" (4 letters)",
            "acceptedAnswers": [
              "inac / onac",
              "inac"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "toto: Mother",
            "pairs": [
              {
                "left": "toto",
                "right": "Mother"
              },
              {
                "left": "papa",
                "right": "Father"
              },
              {
                "left": "mamai",
                "right": "Uncle (maternal)"
              },
              {
                "left": "inac / onac",
                "right": "Sister / brother (sibling)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Aunt\": ___",
            "correctAnswer": "ija",
            "options": [
              "toto",
              "ija",
              "papa",
              "mamai"
            ],
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          }
        ]
      },
      {
        "id": "teso-family-kinship-clans-community-3",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "aberu (pl. aŋor)",
            "source": "Woman / wife (pl. women)",
            "pronunciation": "a-be-ru",
            "hint": "Wikipedia Teso language — Plural formation"
          },
          {
            "target": "ekiror (é-kɪ́-rɔ́-rɪ̀)",
            "source": "Name",
            "pronunciation": "e-ki-ror",
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "target": "ndachakoni",
            "source": "Brother",
            "pronunciation": "ndacha-ko-ni",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "edwe, epese, ekoko",
            "source": "Child",
            "pronunciation": "edwe e-pe-se e-ko-ko",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "ndachakang epesi",
            "source": "Sister",
            "pronunciation": "ndacha-kang e-pe-si",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "Ajakáit",
            "source": "Chief",
            "pronunciation": "a-ja-kait"
          },
          {
            "target": "epapero (pl. ipapero)",
            "source": "Friend",
            "pronunciation": "eh-pah-peh-roh"
          },
          {
            "target": "ejakait (pl. ijakaka)",
            "source": "Chief / leader / elder",
            "pronunciation": "e-ja-kait"
          },
          {
            "target": "etuŋanan",
            "source": "Person",
            "pronunciation": "e-tu-nga-nan"
          },
          {
            "target": "ituŋanan (pl. ituŋa / ituŋasinei)",
            "source": "Man (pl. people; generic mankind)",
            "pronunciation": "i-tu-nga-nan"
          }
        ],
        "sentences": [
          {
            "target": "aberu — ekiror",
            "source": "Woman — Name."
          },
          {
            "target": "ndachakoni — edwe, epese, ekoko",
            "source": "Brother — Child."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"aberu\" mean in English?",
            "correctAnswer": "Woman",
            "options": [
              "Name",
              "Brother",
              "Child",
              "Woman"
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life",
            "acceptedAnswers": [
              "Woman / wife (pl. women)",
              "Woman"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Name\"",
            "correctAnswer": "ekiror",
            "acceptedAnswers": [
              "ekiror (é-kɪ́-rɔ́-rɪ̀)",
              "ekiror"
            ],
            "hint": "Starts with \"ek\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ndachakoni\"",
            "correctAnswer": "Brother",
            "acceptedAnswers": [
              "Brother",
              "Brother"
            ],
            "hint": "Review Clans, Marriage & Community Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "aberu",
                "right": "Woman"
              },
              {
                "left": "ekiror",
                "right": "Name"
              },
              {
                "left": "ndachakoni",
                "right": "Brother"
              },
              {
                "left": "edwe, epese, ekoko",
                "right": "Child"
              },
              {
                "left": "ndachakang epesi",
                "right": "Sister"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-4",
    "unitNumber": 4,
    "title": "Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Teso (Ateso) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909), and Archdeacon A. L. Kitching (1915).",
    "icon": "Scale",
    "color": "#6D4C41",
    "skills": [
      {
        "id": "teso-numbers-measures-cardinals-ordinals-4",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "itomon (atomon)",
            "source": "Ten",
            "pronunciation": "i-to-mon",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "ikany-kaoŋon (5+4)",
            "source": "Nine",
            "pronunciation": "ikany-kaongon",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "ikany-kauni (5+3)",
            "source": "Eight",
            "pronunciation": "ikany-kauni",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "ikany-kaare (5+2)",
            "source": "Seven",
            "pronunciation": "ikany-kaare",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "ikany-kape (5+1)",
            "source": "Six",
            "pronunciation": "ikany-kape",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "esupur",
            "source": "Zero (traditional)",
            "pronunciation": "e-su-pur",
            "hint": "Wikipedia Teso language — Numerals"
          },
          {
            "target": "enoot",
            "source": "Naught / Zero",
            "pronunciation": "e-noot",
            "hint": "Wikipedia Teso language — Numerals"
          },
          {
            "target": "idiope(t) (m.)",
            "source": "One (1) — masculine",
            "pronunciation": "i-dio-pe",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "adiope(t) (f.)",
            "source": "One (1) — feminine",
            "pronunciation": "a-dio-pe",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "yenisodit (n.)",
            "source": "One (1) — neuter",
            "pronunciation": "ye-ni-so-dit",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "ikany-kape (m.) / akany-kape (f.)",
            "source": "Six (6, lit. 5+1)",
            "pronunciation": "ikany-kape / akany-kape",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "ikany-kaare (m.) / akany-kaare (f.)",
            "source": "Seven (7, lit. 5+2)",
            "pronunciation": "ikany-kaare / akany-kaare",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"itomon (atomon)\" in Teso?",
            "correctAnswer": "Ten",
            "options": [
              "Ten",
              "Nine",
              "Eight",
              "Seven"
            ],
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikany-kaoŋon (5+4)\" in Teso?",
            "correctAnswer": "Nine",
            "options": [
              "Nine",
              "Eight",
              "Seven",
              "Ten"
            ],
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikany-kauni (5+3)\" in Teso?",
            "correctAnswer": "Eight",
            "options": [
              "Eight",
              "Seven",
              "Ten",
              "Nine"
            ],
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eight\" in Teso?",
            "correctAnswer": "ikany-kauni",
            "options": [
              "itomon",
              "esupur",
              "ikany-kauni",
              "enoot"
            ],
            "hint": "ee-kah-ny kah-oo-nee",
            "acceptedAnswers": [
              "ikany-kauni (5+3)",
              "ikany-kauni"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Seven\" in Teso?",
            "correctAnswer": "ikany-kaare",
            "options": [
              "itomon",
              "esupur",
              "ikany-kaare",
              "enoot"
            ],
            "hint": "ee-kah-ny kah-reh",
            "acceptedAnswers": [
              "ikany-kaare (5+2)",
              "ikany-kaare"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "itomon (atomon): Ten",
            "pairs": [
              {
                "left": "itomon (atomon)",
                "right": "Ten"
              },
              {
                "left": "ikany-kaoŋon (5+4)",
                "right": "Nine"
              },
              {
                "left": "ikany-kauni (5+3)",
                "right": "Eight"
              },
              {
                "left": "ikany-kaare (5+2)",
                "right": "Seven"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Six\": ___",
            "correctAnswer": "ikany-kape",
            "options": [
              "itomon",
              "esupur",
              "enoot",
              "ikany-kape"
            ],
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)",
            "acceptedAnswers": [
              "ikany-kape (5+1)",
              "ikany-kape"
            ]
          }
        ]
      },
      {
        "id": "teso-numbers-measures-trade-measures-4",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "ikany-kauni (m.) / akany-kauni (f.)",
            "source": "Eight (8, lit. 5+3)",
            "pronunciation": "ikany-kauni / akany-kauni",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "ikany-kaoŋon (m.) / akany-kaoŋon (f.)",
            "source": "Nine (9, lit. 5+4)",
            "pronunciation": "ikany-kaongon / akany-kaongon",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "itomon (m.) / atomon (f.)",
            "source": "Ten (10)",
            "pronunciation": "i-to-mon / a-to-mon",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "itomon-kanu-diope (m.) / atomon-kanu-diope (f.)",
            "source": "Eleven (11)",
            "pronunciation": "itomon-kanu-diope / atomon-kanu-diope",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "itomon'aare (m.) / atomon'aare (f.)",
            "source": "Twelve (12)",
            "pronunciation": "i-to-mon'aa-re / a-to-mon'aa-re",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "itomon'akany (m.) / atomon'aakany (f.)",
            "source": "Fifteen (15)",
            "pronunciation": "i-to-mon'a-kany / a-to-mon'aa-kany",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "akais aare",
            "source": "Twenty (20)",
            "pronunciation": "a-kais aa-re",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "akais auni",
            "source": "Thirty (30)",
            "pronunciation": "a-kais au-ni",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "akais aangon",
            "source": "Forty (40)",
            "pronunciation": "a-kais aangon",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikany-kauni (m.) / akany-kauni (f.)\" in Teso?",
            "correctAnswer": "Eight",
            "options": [
              "Nine",
              "Ten",
              "Eight",
              "Eleven"
            ],
            "hint": "Wikipedia Teso language — Cardinal numbers",
            "acceptedAnswers": [
              "Eight (8, lit. 5+3)",
              "Eight"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikany-kaoŋon (m.) / akany-kaoŋon (f.)\" in Teso?",
            "correctAnswer": "Nine",
            "options": [
              "Ten",
              "Eleven",
              "Eight",
              "Nine"
            ],
            "hint": "Wikipedia Teso language — Cardinal numbers",
            "acceptedAnswers": [
              "Nine (9, lit. 5+4)",
              "Nine"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"itomon (m.) / atomon (f.)\" in Teso?",
            "correctAnswer": "Ten",
            "options": [
              "Eleven",
              "Eight",
              "Ten",
              "Nine"
            ],
            "hint": "Wikipedia Teso language — Cardinal numbers",
            "acceptedAnswers": [
              "Ten (10)",
              "Ten"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ten\" in Teso?",
            "correctAnswer": "itomon",
            "options": [
              "ikany-kauni",
              "akais aare",
              "ikany-kaoŋon",
              "itomon"
            ],
            "hint": "Starts with \"it…\" (6 letters)",
            "acceptedAnswers": [
              "itomon (m.) / atomon (f.)",
              "itomon"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eleven\" in Teso?",
            "correctAnswer": "itomon-kanu-diope",
            "options": [
              "ikany-kauni",
              "itomon-kanu-diope",
              "akais aare",
              "ikany-kaoŋon"
            ],
            "hint": "Starts with \"it…\" (17 letters)",
            "acceptedAnswers": [
              "itomon-kanu-diope (m.) / atomon-kanu-diope (f.)",
              "itomon-kanu-diope"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "ikany-kauni (m.) / akany-kauni (f.): Eight (8, lit. 5+3)",
            "pairs": [
              {
                "left": "ikany-kauni (m.) / akany-kauni (f.)",
                "right": "Eight (8, lit. 5+3)"
              },
              {
                "left": "ikany-kaoŋon (m.) / akany-kaoŋon (f.)",
                "right": "Nine (9, lit. 5+4)"
              },
              {
                "left": "itomon (m.) / atomon (f.)",
                "right": "Ten (10)"
              },
              {
                "left": "itomon-kanu-diope (m.) / atomon-kanu-diope (f.)",
                "right": "Eleven (11)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Twelve\": ___",
            "correctAnswer": "itomon'aare",
            "options": [
              "ikany-kauni",
              "akais aare",
              "ikany-kaoŋon",
              "itomon'aare"
            ],
            "hint": "Wikipedia Teso language — Cardinal numbers",
            "acceptedAnswers": [
              "itomon'aare (m.) / atomon'aare (f.)",
              "itomon'aare"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-5",
    "unitNumber": 5,
    "title": "Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Teso (Ateso) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909), and Archdeacon A. L. Kitching (1915).",
    "icon": "Tractor",
    "color": "#6D4C41",
    "skills": [
      {
        "id": "teso-food-agriculture-staple-foods-cookery-5",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "akiring",
            "source": "Meat",
            "pronunciation": "a-ki-ring",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akile",
            "source": "Milk",
            "pronunciation": "a-ki-le",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "atap",
            "source": "Millet bread / ugali",
            "pronunciation": "a-tap",
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "target": "akima / akuma",
            "source": "Porridge",
            "pronunciation": "a-ki-ma / a-ku-ma",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "acece",
            "source": "Soup / broth",
            "pronunciation": "a-ce-ce",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "ajon / ajony",
            "source": "Local cereal brew",
            "pronunciation": "a-jon / a-jony",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "etaget",
            "source": "Banana",
            "pronunciation": "e-ta-get",
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "target": "enimu",
            "source": "Lemon",
            "pronunciation": "e-ni-mu",
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "target": "emucuuga",
            "source": "Orange",
            "pronunciation": "e-mu-cuu-ga",
            "hint": "Wikipedia Teso language — Masculine nouns"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akiring\" in Teso?",
            "correctAnswer": "Meat",
            "options": [
              "Milk",
              "Meat",
              "Millet bread",
              "Porridge"
            ],
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akile\" in Teso?",
            "correctAnswer": "Milk",
            "options": [
              "Millet bread",
              "Porridge",
              "Meat",
              "Milk"
            ],
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"atap\" in Teso?",
            "correctAnswer": "Millet bread",
            "options": [
              "Porridge",
              "Meat",
              "Millet bread",
              "Milk"
            ],
            "hint": "Wikipedia Teso language — Orthography",
            "acceptedAnswers": [
              "Millet bread / ugali",
              "Millet bread"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Millet bread / ugali\" in Teso?",
            "correctAnswer": "atap",
            "options": [
              "akiring",
              "akile",
              "atap",
              "akima"
            ],
            "hint": "Starts with \"at…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Porridge\" in Teso?",
            "correctAnswer": "akima",
            "options": [
              "akiring",
              "akile",
              "atap",
              "akima"
            ],
            "hint": "Starts with \"ak…\" (5 letters)",
            "acceptedAnswers": [
              "akima / akuma",
              "akima"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "akiring: Meat",
            "pairs": [
              {
                "left": "akiring",
                "right": "Meat"
              },
              {
                "left": "akile",
                "right": "Milk"
              },
              {
                "left": "atap",
                "right": "Millet bread / ugali"
              },
              {
                "left": "akima / akuma",
                "right": "Porridge"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Soup / broth\": ___",
            "correctAnswer": "acece",
            "options": [
              "akiring",
              "akile",
              "atap",
              "acece"
            ],
            "hint": "Wikipedia Teso language — Feminine nouns"
          }
        ]
      },
      {
        "id": "teso-food-agriculture-crops-livestock-5",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "amunyu",
            "source": "Salt",
            "pronunciation": "a-munyu",
            "hint": "Wikipedia Teso language — Adverbs of place"
          },
          {
            "target": "ecaai",
            "source": "Tea",
            "pronunciation": "e-caai",
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "target": "akaawa",
            "source": "Coffee",
            "pronunciation": "a-kaa-wa",
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "target": "inyamat / ainyamat",
            "source": "Food",
            "pronunciation": "inya-mat / ainya-mat",
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "target": "ekurididi",
            "source": "Maize",
            "pronunciation": "e-ku-ri-di-di",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "akipi",
            "source": "Water",
            "pronunciation": "a-ki-pi",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "echori",
            "source": "Water-hole",
            "pronunciation": "echo-ri",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"amunyu\" in Teso?",
            "correctAnswer": "Salt",
            "options": [
              "Salt",
              "Tea",
              "Food",
              "Maize"
            ],
            "hint": "Wikipedia Teso language — Adverbs of place"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ecaai\" in Teso?",
            "correctAnswer": "Tea",
            "options": [
              "Food",
              "Maize",
              "Tea",
              "Salt"
            ],
            "hint": "Wikipedia Teso language — Masculine nouns",
            "acceptedAnswers": [
              "Tea / coffee",
              "Tea"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"inyamat / ainyamat\" in Teso?",
            "correctAnswer": "Food",
            "options": [
              "Food",
              "Maize",
              "Salt",
              "Tea"
            ],
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Food\" in Teso?",
            "correctAnswer": "inyamat",
            "options": [
              "amunyu",
              "inyamat",
              "ecaai",
              "ekurididi"
            ],
            "hint": "Starts with \"in…\" (7 letters)",
            "acceptedAnswers": [
              "inyamat / ainyamat",
              "inyamat"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Maize\" in Teso?",
            "correctAnswer": "ekurididi",
            "options": [
              "ekurididi",
              "amunyu",
              "ecaai",
              "inyamat"
            ],
            "hint": "Starts with \"ek…\" (9 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "amunyu: Salt",
            "pairs": [
              {
                "left": "amunyu",
                "right": "Salt"
              },
              {
                "left": "ecaai (tea) / akaawa (coffee)",
                "right": "Tea / coffee"
              },
              {
                "left": "inyamat / ainyamat",
                "right": "Food"
              },
              {
                "left": "ekurididi",
                "right": "Maize"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Water\": ___",
            "correctAnswer": "akipi",
            "options": [
              "akipi",
              "amunyu",
              "ecaai",
              "inyamat"
            ],
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-6",
    "unitNumber": 6,
    "title": "Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Teso (Ateso) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909), and Archdeacon A. L. Kitching (1915).",
    "icon": "PawPrint",
    "color": "#6D4C41",
    "skills": [
      {
        "id": "teso-nature-wildlife-land-sky-water-6",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "apaaran",
            "source": "Day",
            "pronunciation": "a-paa-ran",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akware",
            "source": "Night",
            "pronunciation": "akwa-re",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "acerit (pl. acerin)",
            "source": "Star",
            "pronunciation": "a-ce-rit",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akim",
            "source": "Fire",
            "pronunciation": "a-kim",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akipi (a-ki-pí)",
            "source": "Water (pluralia tantum)",
            "pronunciation": "a-ki-pi",
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "target": "edou",
            "source": "Rain",
            "pronunciation": "e-dou",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "ekwam",
            "source": "Air / wind",
            "pronunciation": "ekwam",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "akoloŋ",
            "source": "Sun",
            "pronunciation": "a-ko-long",
            "hint": "Wikipedia Teso language — Singularia tantum"
          },
          {
            "target": "akuj",
            "source": "Heaven",
            "pronunciation": "a-kuj",
            "hint": "Wikipedia Teso language — Vocabulary"
          },
          {
            "target": "Edeke",
            "source": "Sky / God",
            "pronunciation": "e-de-ke",
            "hint": "Wikipedia Teso language — Vocabulary"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"apaaran\" in Teso?",
            "correctAnswer": "Day",
            "options": [
              "Day",
              "Night",
              "Star",
              "Fire"
            ],
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akware\" in Teso?",
            "correctAnswer": "Night",
            "options": [
              "Star",
              "Night",
              "Fire",
              "Day"
            ],
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"acerit (pl. acerin)\" in Teso?",
            "correctAnswer": "Star",
            "options": [
              "Fire",
              "Star",
              "Day",
              "Night"
            ],
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Star\" in Teso?",
            "correctAnswer": "acerit",
            "options": [
              "acerit",
              "apaaran",
              "akware",
              "akim"
            ],
            "hint": "ah-cheh-reet",
            "acceptedAnswers": [
              "acerit (pl. acerin)",
              "acerit"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fire\" in Teso?",
            "correctAnswer": "akim",
            "options": [
              "apaaran",
              "akware",
              "akim",
              "acerit"
            ],
            "hint": "ah-keem"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "apaaran: Day",
            "pairs": [
              {
                "left": "apaaran",
                "right": "Day"
              },
              {
                "left": "akware",
                "right": "Night"
              },
              {
                "left": "acerit (pl. acerin)",
                "right": "Star"
              },
              {
                "left": "akim",
                "right": "Fire"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Water (pluralia tantum)\": ___",
            "correctAnswer": "akipi",
            "options": [
              "apaaran",
              "akware",
              "akipi",
              "acerit"
            ],
            "hint": "Wikipedia Teso language & Eastern Nilotic languages",
            "acceptedAnswers": [
              "akipi (a-ki-pí)",
              "akipi"
            ]
          }
        ]
      },
      {
        "id": "teso-nature-wildlife-wildlife-flora-6",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "ekitoi (ɛ́-kɪ́tɔ́-ɪ̀)",
            "source": "Tree (pl. trees)",
            "pronunciation": "e-ki-toi",
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "target": "eloa / emapule",
            "source": "Mvule tree",
            "pronunciation": "e-loa / e-ma-pu-le",
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "target": "anya",
            "source": "Grass",
            "pronunciation": "anya",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "asinge",
            "source": "Sand",
            "pronunciation": "a-singe",
            "hint": "Wikipedia Teso language — Pluralia tantum"
          },
          {
            "target": "ekuron",
            "source": "Ashes",
            "pronunciation": "e-ku-ron",
            "hint": "Wikipedia Teso language — Singularia tantum"
          },
          {
            "target": "imoru",
            "source": "Pebble / small stone",
            "pronunciation": "i-mo-ru",
            "hint": "Wikipedia Teso language — Neuter nouns"
          },
          {
            "target": "imulu",
            "source": "Hill",
            "pronunciation": "i-mu-lu"
          },
          {
            "target": "ekare",
            "source": "Lake",
            "pronunciation": "e-ka-re"
          },
          {
            "target": "echilet / aolok",
            "source": "River",
            "pronunciation": "eh-chee-leht"
          }
        ],
        "sentences": [
          {
            "target": "ekitoi — eloa",
            "source": "Tree — Mvule tree."
          },
          {
            "target": "anya — asinge",
            "source": "Grass — Sand."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ekitoi\" mean in English?",
            "correctAnswer": "Tree",
            "options": [
              "Mvule tree",
              "Grass",
              "Sand",
              "Tree"
            ],
            "hint": "Starts with \"Tr…\" (4 letters)",
            "acceptedAnswers": [
              "Tree (pl. trees)",
              "Tree"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Mvule tree\"",
            "correctAnswer": "eloa",
            "acceptedAnswers": [
              "eloa / emapule",
              "eloa"
            ],
            "hint": "Starts with \"el\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"anya\"",
            "correctAnswer": "Grass",
            "acceptedAnswers": [
              "Grass",
              "Grass"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ekitoi",
                "right": "Tree"
              },
              {
                "left": "eloa",
                "right": "Mvule tree"
              },
              {
                "left": "anya",
                "right": "Grass"
              },
              {
                "left": "asinge",
                "right": "Sand"
              },
              {
                "left": "ekuron",
                "right": "Ashes"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-7",
    "unitNumber": 7,
    "title": "The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Teso (Ateso) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909), and Archdeacon A. L. Kitching (1915).",
    "icon": "Heart",
    "color": "#6D4C41",
    "skills": [
      {
        "id": "teso-body-health-anatomy-senses-7",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "akou (pl. akwes)",
            "source": "Head",
            "pronunciation": "a-kou",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akeju (pl. akejen)",
            "source": "Foot",
            "pronunciation": "a-ke-ju",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akan (pl. akanin)",
            "source": "Hand",
            "pronunciation": "a-kan",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akong'u (a-kɔ́ŋ-ʊ̀)",
            "source": "Eye",
            "pronunciation": "a-kong'u",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "akit (á-kí-t)",
            "source": "Ear",
            "pronunciation": "a-kit",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ekume (e-kúmè)",
            "source": "Nose",
            "pronunciation": "e-ku-me",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ekialai (e-kíàl-àì)",
            "source": "Tooth",
            "pronunciation": "e-kia-lai",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ang'ajep (á-ŋǎjɛ̀p)",
            "source": "Tongue",
            "pronunciation": "ang'a-jep",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "akituk (á-kɪ̀tʊ̀k)",
            "source": "Mouth",
            "pronunciation": "a-ki-tuk",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akou (pl. akwes)\" in Teso?",
            "correctAnswer": "Head",
            "options": [
              "Foot",
              "Hand",
              "Head",
              "Eye"
            ],
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akeju (pl. akejen)\" in Teso?",
            "correctAnswer": "Foot",
            "options": [
              "Foot",
              "Hand",
              "Eye",
              "Head"
            ],
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akan (pl. akanin)\" in Teso?",
            "correctAnswer": "Hand",
            "options": [
              "Eye",
              "Head",
              "Foot",
              "Hand"
            ],
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hand\" in Teso?",
            "correctAnswer": "akan",
            "options": [
              "akou",
              "akeju",
              "akan",
              "akong'u"
            ],
            "hint": "ah-kahn",
            "acceptedAnswers": [
              "akan (pl. akanin)",
              "akan"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eye\" in Teso?",
            "correctAnswer": "akong'u",
            "options": [
              "akong'u",
              "akou",
              "akeju",
              "akan"
            ],
            "hint": "Starts with \"ak…\" (7 letters)",
            "acceptedAnswers": [
              "akong'u (a-kɔ́ŋ-ʊ̀)",
              "akong'u"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "akou (pl. akwes): Head",
            "pairs": [
              {
                "left": "akou (pl. akwes)",
                "right": "Head"
              },
              {
                "left": "akeju (pl. akejen)",
                "right": "Foot"
              },
              {
                "left": "akan (pl. akanin)",
                "right": "Hand"
              },
              {
                "left": "akong'u (a-kɔ́ŋ-ʊ̀)",
                "right": "Eye"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Ear\": ___",
            "correctAnswer": "akit",
            "options": [
              "akou",
              "akit",
              "akeju",
              "akan"
            ],
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)",
            "acceptedAnswers": [
              "akit (á-kí-t)",
              "akit"
            ]
          }
        ]
      },
      {
        "id": "teso-body-health-healing-safety-7",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "aakot (á-àkɔ́t)",
            "source": "Blood",
            "pronunciation": "aa-kot",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "akoit (á-kóì-t)",
            "source": "Bone",
            "pronunciation": "a-koit",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "adam",
            "source": "Brain",
            "pronunciation": "a-dam",
            "hint": "Wikipedia Teso language — Singularia tantum"
          },
          {
            "target": "aijar",
            "source": "Life",
            "pronunciation": "ai-jar",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "ibokori",
            "source": "Finger",
            "pronunciation": "i-bo-ko-ri",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "etim",
            "source": "Hair",
            "pronunciation": "e-tim",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "akejen",
            "source": "Leg",
            "pronunciation": "a-ke-jen",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "murising",
            "source": "Neck",
            "pronunciation": "mu-ri-sing",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "Akan",
            "source": "Arm",
            "pronunciation": "a-kan"
          }
        ],
        "sentences": [
          {
            "target": "aakot — akoit",
            "source": "Blood — Bone."
          },
          {
            "target": "adam — aijar",
            "source": "Brain — Life."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"aakot\" mean in English?",
            "correctAnswer": "Blood",
            "options": [
              "Bone",
              "Brain",
              "Life",
              "Blood"
            ],
            "hint": "Core vocabulary in Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Bone\"",
            "correctAnswer": "akoit",
            "acceptedAnswers": [
              "akoit (á-kóì-t)",
              "akoit"
            ],
            "hint": "Starts with \"ak\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"adam\"",
            "correctAnswer": "Brain",
            "acceptedAnswers": [
              "Brain",
              "Brain"
            ],
            "hint": "Review Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Health, Traditional Medicine & Emergency Terms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "aakot",
                "right": "Blood"
              },
              {
                "left": "akoit",
                "right": "Bone"
              },
              {
                "left": "adam",
                "right": "Brain"
              },
              {
                "left": "aijar",
                "right": "Life"
              },
              {
                "left": "ibokori",
                "right": "Finger"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-8",
    "unitNumber": 8,
    "title": "Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Teso (Ateso) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909), and Archdeacon A. L. Kitching (1915).",
    "icon": "BookOpen",
    "color": "#6D4C41",
    "skills": [
      {
        "id": "teso-verbs-grammar-action-verbs-8",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "ainer (alimun)",
            "source": "Speak",
            "pronunciation": "ai-ner",
            "hint": "Hobley 1902 & Ateso vocabulary"
          },
          {
            "target": "abunore (bia ne!)",
            "source": "Come (imperative: come here!)",
            "pronunciation": "a-bu-no-re",
            "hint": "Johnston 1902 p. 851 (Elgumi/Wamia) & Hobley 1902 pp. 92–95"
          },
          {
            "target": "alosit (kolot!)",
            "source": "Go (imperative: go!)",
            "pronunciation": "a-lo-sit",
            "hint": "Johnston 1902 p. 851 (Elgumi/Wamia) & Hobley 1902 pp. 92–95"
          },
          {
            "target": "akimat (aimat)",
            "source": "Drink",
            "pronunciation": "a-ki-mat",
            "hint": "Hobley 1902 & Johnston 1902"
          },
          {
            "target": "akinyam (ainyam)",
            "source": "Eat",
            "pronunciation": "a-kinyam",
            "hint": "Hobley 1902 & Johnston 1902"
          },
          {
            "target": "akinyam / ainyam (akí-ɲám-à)",
            "source": "To eat",
            "pronunciation": "a-kinyam / ainyam",
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "target": "akimat / aimat",
            "source": "To drink",
            "pronunciation": "a-ki-mat / ai-mat",
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "target": "akilip / ailip",
            "source": "To pray",
            "pronunciation": "a-ki-lip / ai-lip",
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "target": "aimo",
            "source": "To look for / search",
            "pronunciation": "ai-mo",
            "hint": "Wikipedia Teso language — Orthography"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ainer (alimun)\" in Teso?",
            "correctAnswer": "Speak",
            "options": [
              "Come",
              "Speak",
              "Go",
              "Drink"
            ],
            "hint": "Hobley 1902 & Ateso vocabulary"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"abunore\" in Teso?",
            "correctAnswer": "Come",
            "options": [
              "Go",
              "Come",
              "Drink",
              "Speak"
            ],
            "hint": "Johnston 1902 p. 851 (Elgumi/Wamia) & Hobley 1902 pp. 92–95"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"alosit\" in Teso?",
            "correctAnswer": "Go",
            "options": [
              "Drink",
              "Speak",
              "Go",
              "Come"
            ],
            "hint": "Johnston 1902 p. 851 (Elgumi/Wamia) & Hobley 1902 pp. 92–95"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Go\" in Teso?",
            "correctAnswer": "alosit",
            "options": [
              "ainer",
              "abunore",
              "alosit",
              "akimat"
            ],
            "hint": "ah-loh-seet / koh-loht",
            "acceptedAnswers": [
              "alosit (kolot!)",
              "alosit"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Drink\" in Teso?",
            "correctAnswer": "akimat",
            "options": [
              "ainer",
              "akimat",
              "abunore",
              "alosit"
            ],
            "hint": "ah-kee-maht",
            "acceptedAnswers": [
              "akimat (aimat)",
              "akimat"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "ainer (alimun): Speak",
            "pairs": [
              {
                "left": "ainer (alimun)",
                "right": "Speak"
              },
              {
                "left": "abunore (bia ne!)",
                "right": "Come (imperative: come here!)"
              },
              {
                "left": "alosit (kolot!)",
                "right": "Go (imperative: go!)"
              },
              {
                "left": "akimat (aimat)",
                "right": "Drink"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Eat\": ___",
            "correctAnswer": "akinyam",
            "options": [
              "akinyam",
              "ainer",
              "abunore",
              "alosit"
            ],
            "hint": "Hobley 1902 & Johnston 1902",
            "acceptedAnswers": [
              "akinyam (ainyam)",
              "akinyam"
            ]
          }
        ]
      },
      {
        "id": "teso-verbs-grammar-verbal-derivatives-8",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "aipet [e] vs. aipet [ɛ]",
            "source": "To kick (close e) vs. To lay out (open ɛ)",
            "pronunciation": "ai-pet vs ai-pet",
            "hint": "Wikipedia Teso language — Vowel contrast"
          },
          {
            "target": "aidip",
            "source": "To hit",
            "pronunciation": "ai-dip",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "aimor [ɔ] vs. aimor [o]",
            "source": "To share (open ɔ) vs. To insult (close o)",
            "pronunciation": "ai-mor vs ai-mor",
            "hint": "Wikipedia Teso language — Vowel contrast"
          },
          {
            "target": "aikut [u] vs. aikut [ʊ]",
            "source": "To scratch the earth / scoop (close u) vs. To blow (open ʊ)",
            "pronunciation": "ai-kut vs ai-kut",
            "hint": "Wikipedia Teso language — Vowel contrast"
          },
          {
            "target": "abal",
            "source": "To say",
            "pronunciation": "a-bal",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "ainu",
            "source": "To hug / embrace",
            "pronunciation": "ai-nu",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "aisab",
            "source": "To tell lies",
            "pronunciation": "ai-sab",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "alosit",
            "source": "To go (verbal noun: going)",
            "pronunciation": "a-lo-sit",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "abunere",
            "source": "To come (verbal noun: coming)",
            "pronunciation": "a-bu-ne-re",
            "hint": "Wikipedia Teso language — Feminine nouns"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aipet [e] vs. aipet [ɛ]\" in Teso?",
            "correctAnswer": "To kick vs. To lay out",
            "options": [
              "To share vs. To insult",
              "To kick vs. To lay out",
              "To scratch the earth",
              "To hit"
            ],
            "hint": "Wikipedia Teso language — Vowel contrast",
            "acceptedAnswers": [
              "To kick (close e) vs. To lay out (open ɛ)",
              "To kick vs. To lay out"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aidip\" in Teso?",
            "correctAnswer": "To hit",
            "options": [
              "To scratch the earth",
              "To hit",
              "To say",
              "To hug"
            ],
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aimor [ɔ] vs. aimor [o]\" in Teso?",
            "correctAnswer": "To share vs. To insult",
            "options": [
              "To scratch the earth",
              "To share vs. To insult",
              "To kick vs. To lay out",
              "To tell lies"
            ],
            "hint": "Wikipedia Teso language — Vowel contrast",
            "acceptedAnswers": [
              "To share (open ɔ) vs. To insult (close o)",
              "To share vs. To insult"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To share (open ɔ) vs. To insult (close o)\" in Teso?",
            "correctAnswer": "aimor [ɔ] vs. aimor [o]",
            "options": [
              "aimor [ɔ] vs. aimor [o]",
              "aipet [e] vs. aipet [ɛ]",
              "aidip",
              "aikut [u] vs. aikut [ʊ]"
            ],
            "hint": "Starts with \"ai…\"",
            "acceptedAnswers": [
              "aimor [ɔ] vs. aimor [o]"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To scratch the earth / scoop (close u) vs. To blow (open ʊ)\" in Teso?",
            "correctAnswer": "aikut [u] vs. aikut [ʊ]",
            "options": [
              "aipet [e] vs. aipet [ɛ]",
              "aidip",
              "aikut [u] vs. aikut [ʊ]",
              "aimor [ɔ] vs. aimor [o]"
            ],
            "hint": "Starts with \"ai…\"",
            "acceptedAnswers": [
              "aikut [u] vs. aikut [ʊ]"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "aipet [e] vs. aipet [ɛ]: To kick (close e) vs. To lay out (open ɛ)",
            "pairs": [
              {
                "left": "aipet [e] vs. aipet [ɛ]",
                "right": "To kick (close e) vs. To lay out (open ɛ)"
              },
              {
                "left": "aidip",
                "right": "To hit"
              },
              {
                "left": "aimor [ɔ] vs. aimor [o]",
                "right": "To share (open ɔ) vs. To insult (close o)"
              },
              {
                "left": "aikut [u] vs. aikut [ʊ]",
                "right": "To scratch the earth / scoop (close u) vs. To blow (open ʊ)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"To say\": ___",
            "correctAnswer": "abal",
            "options": [
              "abal",
              "aipet [e] vs. aipet [ɛ]",
              "aidip",
              "aimor [ɔ] vs. aimor [o]"
            ],
            "hint": "Wikipedia Teso language — Alphabet"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-9",
    "unitNumber": 9,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Teso (Ateso) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#6D4C41",
    "skills": [
      {
        "id": "teso-pd-corpus-9-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Teso (Ateso) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Teso (Ateso) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "ateker (pl. atekerin)",
            "source": "Clan / exogamous kinship group",
            "pronunciation": "a-te-ker",
            "hint": "Rev. A. L. Kitching, A Handbook of the Ateso Language (1915)"
          },
          {
            "target": "Inyā",
            "source": "Grass",
            "pronunciation": "inya",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Akūt",
            "source": "God",
            "pronunciation": "a-kut",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Aginé",
            "source": "Goat",
            "pronunciation": "a-gi-ne",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Ekokorr",
            "source": "Fowl",
            "pronunciation": "e-ko-korr",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Akeju",
            "source": "Foot",
            "pronunciation": "a-ke-ju",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Esessī",
            "source": "Fish",
            "pronunciation": "e-sessi",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Ebokorit",
            "source": "Finger",
            "pronunciation": "e-bo-ko-rit",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ateker\" in Teso?",
            "correctAnswer": "Clan",
            "options": [
              "Clan",
              "Grass",
              "God",
              "Goat"
            ],
            "hint": "Rev. A. L. Kitching, A Handbook of the Ateso Language (1915)",
            "acceptedAnswers": [
              "Clan / exogamous kinship group",
              "Clan"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Teso (Ateso) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "ateker (pl. atekerin): Clan / exogamous kinship group",
            "pairs": [
              {
                "left": "ateker (pl. atekerin)",
                "right": "Clan / exogamous kinship group"
              },
              {
                "left": "Inyā",
                "right": "Grass"
              },
              {
                "left": "Akūt",
                "right": "God"
              },
              {
                "left": "Aginé",
                "right": "Goat"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso (Ateso) term for \"Fowl\": ___",
            "correctAnswer": "Ekokorr",
            "options": [
              "Akeju",
              "Ekokorr",
              "ateker",
              "Inyā"
            ],
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          }
        ]
      },
      {
        "id": "teso-pd-corpus-9-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Teso (Ateso) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Teso (Ateso) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "Akoñ",
            "source": "Eye",
            "pronunciation": "a-kong",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Etom",
            "source": "Elephant",
            "pronunciation": "e-tom",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Akit",
            "source": "Ear",
            "pronunciation": "a-kit",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Ekiñok",
            "source": "Dog",
            "pronunciation": "e-kingok",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Akenyanu",
            "source": "Day",
            "pronunciation": "a-kenya-nu",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Akiteñ; nabero",
            "source": "Cow",
            "pronunciation": "a-ki-teng",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Enañga",
            "source": "Cloth",
            "pronunciation": "e-nangga",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Ekōkō",
            "source": "Child",
            "pronunciation": "e-ko-ko",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Akoñ\" in Teso?",
            "correctAnswer": "Eye",
            "options": [
              "Elephant",
              "Eye",
              "Ear",
              "Dog"
            ],
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Teso (Ateso) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Akoñ: Eye",
            "pairs": [
              {
                "left": "Akoñ",
                "right": "Eye"
              },
              {
                "left": "Etom",
                "right": "Elephant"
              },
              {
                "left": "Akit",
                "right": "Ear"
              },
              {
                "left": "Ekiñok",
                "right": "Dog"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso (Ateso) term for \"Day\": ___",
            "correctAnswer": "Akenyanu",
            "options": [
              "Akiteñ",
              "Akenyanu",
              "Akoñ",
              "Etom"
            ],
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-10",
    "unitNumber": 10,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Teso (Ateso) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#6D4C41",
    "skills": [
      {
        "id": "teso-open-dataset-10-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Hash",
        "description": "Learn core Teso (Ateso) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Teso (Ateso) dialects and everyday speech.",
        "words": [
          {
            "target": "Anācăkēñe",
            "source": "Brother",
            "pronunciation": "a-na-ca-kenge",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Emal; Akau",
            "source": "Bow",
            "pronunciation": "e-mal",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Akoit",
            "source": "Bone",
            "pronunciation": "a-koit",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Aqot",
            "source": "Blood",
            "pronunciation": "a-qot",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Atoroqót",
            "source": "Bird",
            "pronunciation": "a-to-ro-qot",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Alaburu",
            "source": "Banana",
            "pronunciation": "a-la-bu-ru",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Ekoyo",
            "source": "Arrow",
            "pronunciation": "e-ko-yo",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "atomon",
            "source": "Ten",
            "pronunciation": "a-to-mon",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Anācăkēñe\" in Teso?",
            "correctAnswer": "Brother",
            "options": [
              "Bow",
              "Bone",
              "Brother",
              "Blood"
            ],
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Teso (Ateso) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Anācăkēñe: Brother",
            "pairs": [
              {
                "left": "Anācăkēñe",
                "right": "Brother"
              },
              {
                "left": "Emal; Akau",
                "right": "Bow"
              },
              {
                "left": "Akoit",
                "right": "Bone"
              },
              {
                "left": "Aqot",
                "right": "Blood"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso (Ateso) term for \"Bird\": ___",
            "correctAnswer": "Atoroqót",
            "options": [
              "Alaburu",
              "Anācăkēñe",
              "Atoroqót",
              "Emal"
            ],
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          }
        ]
      },
      {
        "id": "teso-open-dataset-10-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Teso (Ateso) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Teso (Ateso) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "kanyi-ki-ongwon / akanya kangwun",
            "source": "Nine",
            "pronunciation": "kanyi-ki-ongwon",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "kanyi kauni",
            "source": "Eight",
            "pronunciation": "kanyi kau-ni",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "kanyi-kare",
            "source": "Seven",
            "pronunciation": "kanyi-kare",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "kanyi kape / akanya kape",
            "source": "Six",
            "pronunciation": "ka-nyi ka-pe / a-ka-nya ka-pe",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "ekan / akanyi",
            "source": "Five",
            "pronunciation": "e-kan",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "aungwen / ongwon",
            "source": "Four",
            "pronunciation": "aungwen",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "auni / uni",
            "source": "Three",
            "pronunciation": "au-ni",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "are",
            "source": "Two",
            "pronunciation": "are",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kanyi-ki-ongwon / akanya kangwun\" in Teso?",
            "correctAnswer": "Nine",
            "options": [
              "Eight",
              "Seven",
              "Six",
              "Nine"
            ],
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Teso (Ateso) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "kanyi-ki-ongwon / akanya kangwun: Nine",
            "pairs": [
              {
                "left": "kanyi-ki-ongwon / akanya kangwun",
                "right": "Nine"
              },
              {
                "left": "kanyi kauni",
                "right": "Eight"
              },
              {
                "left": "kanyi-kare",
                "right": "Seven"
              },
              {
                "left": "kanyi kape / akanya kape",
                "right": "Six"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso (Ateso) term for \"Five\": ___",
            "correctAnswer": "ekan / akanyi",
            "options": [
              "ekan / akanyi",
              "aungwen / ongwon",
              "kanyi-ki-ongwon / akanya kangwun",
              "kanyi kape / akanya kape"
            ],
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          }
        ]
      },
      {
        "id": "teso-water-health-farming",
        "title": "Clean Water, Clinic Visits & Crop Farming",
        "icon": "Sprout",
        "description": "Practice Ateso everyday dialogues for community water, healthcare clinics, and smallholder farming.",
        "culturalNote": "Spoken across Busia County and eastern Uganda, contemporary Ateso emphasizes cooperative farming of cassava (emogo), sorghum (imomwa), and groundnuts (emaido).",
        "grammarTip": "Notice the Ateso infinitive prefix a- in aanyun ('to get/find') and aira ('to plant'), and the locative preposition kotoma ('in / inside').",
        "words": [
          {
            "target": "Akipi nuekaleete",
            "source": "Clean drinking water",
            "pronunciation": "ah-kee-pee noo-eh-kah-leh-eh-teh"
          },
          {
            "target": "Adekis",
            "source": "Hospital / Health clinic",
            "pronunciation": "ah-deh-kees"
          },
          {
            "target": "Esomero",
            "source": "School",
            "pronunciation": "eh-soh-meh-roh"
          },
          {
            "target": "Ekorion",
            "source": "Farmer",
            "pronunciation": "eh-koh-ree-ohn"
          },
          {
            "target": "Esokoni",
            "source": "Market",
            "pronunciation": "eh-soh-koh-nee"
          },
          {
            "target": "Emogo",
            "source": "Cassava",
            "pronunciation": "eh-moh-goh"
          },
          {
            "target": "Imomwa",
            "source": "Sorghum",
            "pronunciation": "ee-moh-mwah"
          },
          {
            "target": "Emaido",
            "source": "Groundnuts / Peanuts",
            "pronunciation": "eh-mah-ee-doh"
          }
        ],
        "sentences": [
          {
            "target": "Ejok noi aanyun akipi nu elai kotoma ateker.",
            "source": "It is very good to have clean water in the community."
          },
          {
            "target": "Aira emogo, imomwa ka emaido eingarakini ateker.",
            "source": "Planting cassava, sorghum, and groundnuts supports the community."
          }
        ]
      },
      {
        "id": "teso-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Teso (Ateso) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "Sunbird AI SALT & SALT-31 Ateso (CC-BY-4.0), CLDF ASJP v20 TESO (Vossen 1982, CC-BY-4.0), Language Science Press Eastern Nilotic Corpus (2016, CC-BY-4.0) & Public Domain Historical Lexicons (Hobley 1902, Johnston 1902, Purvis 1909, Kitching 1915, Roscoe 1915 & BFBS 1921).",
        "words": [
          {
            "target": "Yoga",
            "source": "Hello",
            "pronunciation": "yo-ga"
          },
          {
            "target": "ekinok",
            "source": "Peace",
            "pronunciation": "e-ki-nok"
          },
          {
            "target": "Eyalama",
            "source": "Thank you",
            "pronunciation": "e-ya-la-ma"
          },
          {
            "target": "ainapakin",
            "source": "Peace / well-being",
            "pronunciation": "ai-na-pa-kin"
          },
          {
            "target": "Eyalama noi",
            "source": "Thank you very much",
            "pronunciation": "e-ya-la-ma noi"
          },
          {
            "target": "Ijai biai?",
            "source": "How did you sleep? / Good morning (Ateso)",
            "pronunciation": "ijai-biai"
          },
          {
            "target": "Esokoni",
            "source": "Market / trading place (Ateso)",
            "pronunciation": "esokoni"
          },
          {
            "target": "Akinyet",
            "source": "Fat",
            "pronunciation": "a-kinyet"
          },
          {
            "target": "akiring",
            "source": "Meat",
            "pronunciation": "ah-kee-reeng"
          },
          {
            "target": "akile",
            "source": "Milk",
            "pronunciation": "a-ki-le"
          }
        ],
        "sentences": [
          {
            "target": "Eyalama noi",
            "source": "Thank you very much."
          },
          {
            "target": "Ijai biai?",
            "source": "How did you sleep? / Good morning (Ateso)."
          },
          {
            "target": "Epaunt lok’ Uingereza",
            "source": "British Pound (GBP)."
          },
          {
            "target": "Epaunt Lok’ Sudan",
            "source": "Sudanese Pound (SDG)."
          },
          {
            "target": "Epaunt lok’ Misri",
            "source": "Egyptian Pound (EGP)."
          },
          {
            "target": "Akipi nuekaleete",
            "source": "Clean drinking water (Ateso)."
          },
          {
            "target": "Ejok akipi nu",
            "source": "This water is good."
          },
          {
            "target": "Eboikin imakio ore",
            "source": "The elders sit at the homestead."
          }
        ]
      },
      {
        "id": "teso-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Teso (Ateso) sentences for healthcare, transport, and community safety.",
        "culturalNote": "Sunbird AI SALT & SALT-31 Ateso (CC-BY-4.0), CLDF ASJP v20 TESO (Vossen 1982, CC-BY-4.0), Language Science Press Eastern Nilotic Corpus (2016, CC-BY-4.0) & Public Domain Historical Lexicons (Hobley 1902, Johnston 1902, Purvis 1909, Kitching 1915, Roscoe 1915 & BFBS 1921).",
        "words": [
          {
            "target": "itomon",
            "source": "Ten",
            "pronunciation": "ee-toh-mohn"
          },
          {
            "target": "ikany-kape",
            "source": "Six",
            "pronunciation": "ee-kah-ny kah-peh"
          },
          {
            "target": "iyarei",
            "source": "Two",
            "pronunciation": "ee-yah-reh-ee / ah-ah-reh-ee"
          },
          {
            "target": "idiope",
            "source": "One",
            "pronunciation": "ee-dee-oh-peh / ah-dee-oh-peh"
          },
          {
            "target": "ikany-kaoŋon",
            "source": "Nine",
            "pronunciation": "i-ka-ny ka-o-ngon"
          },
          {
            "target": "ikany",
            "source": "Five",
            "pronunciation": "ee-kah-ny / ah-kah-ny"
          },
          {
            "target": "ioŋon",
            "source": "Four",
            "pronunciation": "i-o-ngon"
          },
          {
            "target": "ikany-kauni",
            "source": "Eight",
            "pronunciation": "ee-kah-ny kah-oo-nee"
          },
          {
            "target": "ikany-kaare",
            "source": "Seven",
            "pronunciation": "ee-kah-ny kah-reh"
          },
          {
            "target": "iuni",
            "source": "Three",
            "pronunciation": "ee-oo-nee / ah-oo-nee"
          }
        ],
        "sentences": [
          {
            "target": "akais aangon",
            "source": "Forty (40)."
          },
          {
            "target": "akais akany",
            "source": "Fifty (50)."
          },
          {
            "target": "akais aare",
            "source": "Twenty (20)."
          },
          {
            "target": "akais auni",
            "source": "Thirty (30)."
          },
          {
            "target": "Koyaik ikoku yen edeka adekis atipet",
            "source": "Take the sick child to the health clinic immediately."
          }
        ]
      }
    ]
  }
];
