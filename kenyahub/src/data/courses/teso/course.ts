// ============================================================
// Teso (Ateso / Elgumi / Wamia) Language Course Configuration & Units
// Based on Public Domain & Open-Web Linguistic Sources:
// 1. C. W. Hobley (1902) "Eastern Uganda: An Ethnological Survey" (Elgumi vocabulary, numerals & phrases)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" (Elgumi / Wamia)
// 3. Wikipedia Teso_language & Eastern_Nilotic_languages (Vossen 1982)
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

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
    "title": "Unit 1: Greetings, Kinship & The Three Noun Genders",
    "description": "Master Ateso greetings (Yoga, Ijai biai, Ejokuna), kinship terms, and Masculine (e-), Feminine (a-), and Neuter (i-) nouns.",
    "icon": "Users",
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
            "pronunciation": "yoh-gah",
            "hint": "Standard Ateso greeting"
          },
          {
            "target": "Ijai biai?",
            "source": "How are you? (singular)",
            "pronunciation": "ee-jah-ee bee-ah-ee",
            "hint": "Plural: Ijaasi biai?"
          },
          {
            "target": "Ejokuna, arai ijo?",
            "source": "Fine, and you?",
            "pronunciation": "eh-joh-koo-nah ah-rah-ee ee-joh",
            "hint": "Polite response"
          },
          {
            "target": "Ingai bo ekon'kiror?",
            "source": "What is your name?",
            "pronunciation": "ee-ngah-ee boh eh-kohn kee-rohr",
            "hint": "ekiror = name"
          },
          {
            "target": "Eyalama ewanyun",
            "source": "Nice to see you / Thank you",
            "pronunciation": "eh-yah-lah-mah eh-wah-nyoon",
            "hint": "Gratitude & welcome"
          },
          {
            "target": "Awanyunos bobo",
            "source": "See you again",
            "pronunciation": "ah-wah-nyoo-nohs boh-boh",
            "hint": "bobo = again"
          },
          {
            "target": "toto / papa",
            "source": "Mother / Father",
            "pronunciation": "toh-toh / pah-pah",
            "hint": "Prefixless kinship nouns (Hobley 1902)"
          },
          {
            "target": "ekile (pl. ikiliok) / aberu (pl. angor)",
            "source": "Man (pl. Men) / Woman (pl. Women)",
            "pronunciation": "eh-kee-leh / ah-beh-roo",
            "hint": "Hobley (1902) & Johnston (1902) Elgumi/Wamia"
          },
          {
            "target": "etelepat (pl. itelepai) / apese (pl. apesur)",
            "source": "Boy (pl. Boys) / Girl (pl. Girls)",
            "pronunciation": "eh-teh-leh-paht / ah-peh-seh",
            "hint": "Masculine e- → i- vs. Feminine a-"
          },
          {
            "target": "ikoku (pl. idwe)",
            "source": "Child (pl. Children)",
            "pronunciation": "ee-koh-koo / ee-dweh",
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
              "How are you? (singular)",
              "Fine, and you?",
              "What is your name?",
              "Hello"
            ],
            "hint": "Standard Ateso greeting"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ijai biai?\" in Teso?",
            "correctAnswer": "How are you? (singular)",
            "options": [
              "Fine, and you?",
              "What is your name?",
              "How are you? (singular)",
              "Hello"
            ],
            "hint": "Plural: Ijaasi biai?"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ejokuna, arai ijo?\" in Teso?",
            "correctAnswer": "Fine, and you?",
            "options": [
              "What is your name?",
              "Fine, and you?",
              "Hello",
              "How are you? (singular)"
            ],
            "hint": "Polite response"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fine, and you?\" in Teso?",
            "correctAnswer": "Ejokuna, arai ijo?",
            "options": [
              "Ejokuna, arai ijo?",
              "Yoga",
              "Ijai biai?",
              "Ingai bo ekon'kiror?"
            ],
            "hint": "eh-joh-koo-nah ah-rah-ee ee-joh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"What is your name?\" in Teso?",
            "correctAnswer": "Ingai bo ekon'kiror?",
            "options": [
              "Yoga",
              "Ijai biai?",
              "Ejokuna, arai ijo?",
              "Ingai bo ekon'kiror?"
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
              "Yoga",
              "Ijai biai?",
              "Ejokuna, arai ijo?",
              "Eyalama ewanyun"
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
            "pronunciation": "ee-dee-oh-peh / ah-dee-oh-peh",
            "hint": "Agrees with noun gender (Hobley 1902 & Johnston 1902)"
          },
          {
            "target": "iyarei (m.) / aarei (f.)",
            "source": "Two (2)",
            "pronunciation": "ee-yah-reh-ee / ah-ah-reh-ee",
            "hint": "Cardinal 2"
          },
          {
            "target": "iuni (m.) / auni (f.)",
            "source": "Three (3)",
            "pronunciation": "ee-oo-nee / ah-oo-nee",
            "hint": "Cardinal 3"
          },
          {
            "target": "ioŋon (m.) / aoŋon (f.)",
            "source": "Four (4)",
            "pronunciation": "ee-oh-ngohn / ah-oh-ngohn",
            "hint": "Cardinal 4"
          },
          {
            "target": "ikany (m.) / akany (f.)",
            "source": "Five (5)",
            "pronunciation": "ee-kah-ny / ah-kah-ny",
            "hint": "Cardinal 5 (< akan hand)"
          },
          {
            "target": "ikany-kape, ikany-kaare, ikany-kauni, ikany-kaoŋon, itomon",
            "source": "6 (5+1), 7 (5+2), 8 (5+3), 9 (5+4), 10",
            "pronunciation": "ee-kah-ny kah-peh ... ee-toh-mohn",
            "hint": "Hobley (1902, p. 95) & Johnston (1902, p. 851) quinary numerals 6–10"
          },
          {
            "target": "kide / too / nyakoi / agolitomei",
            "source": "East / West / North / South",
            "pronunciation": "kee-deh / toh-oh / nyah-koh-ee / ah-goh-lee-toh-meh-ee",
            "hint": "Cardinal directions"
          },
          {
            "target": "akipi / akile / akim / akolong",
            "source": "Water / Milk / Fire / Sun",
            "pronunciation": "ah-kee-pee / ah-kee-leh / ah-keem / ah-koh-lohng",
            "hint": "Hobley (1902) & Johnston (1902) core feminine nouns"
          },
          {
            "target": "akiteng (pl. aatuk) / emong (pl. imongin)",
            "source": "Cow (pl. Cattle) / Bull, Ox (pl. Oxen)",
            "pronunciation": "ah-kee-tehng / ah-took / eh-mohng",
            "hint": "Hobley (1902) pastoral nouns"
          },
          {
            "target": "akinyam / akimat / aanyun",
            "source": "To eat / To drink / To see",
            "pronunciation": "ah-kee-nyahm / ah-kee-maht / ah-nyoon",
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
            "correctAnswer": "One (1)",
            "options": [
              "Two (2)",
              "Three (3)",
              "Four (4)",
              "One (1)"
            ],
            "hint": "Agrees with noun gender (Hobley 1902 & Johnston 1902)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"iyarei (m.) / aarei (f.)\" in Teso?",
            "correctAnswer": "Two (2)",
            "options": [
              "Three (3)",
              "Four (4)",
              "Two (2)",
              "One (1)"
            ],
            "hint": "Cardinal 2"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"iuni (m.) / auni (f.)\" in Teso?",
            "correctAnswer": "Three (3)",
            "options": [
              "Four (4)",
              "Three (3)",
              "One (1)",
              "Two (2)"
            ],
            "hint": "Cardinal 3"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three (3)\" in Teso?",
            "correctAnswer": "iuni (m.) / auni (f.)",
            "options": [
              "iuni (m.) / auni (f.)",
              "idiope (m.) / adiope (f.)",
              "iyarei (m.) / aarei (f.)",
              "ioŋon (m.) / aoŋon (f.)"
            ],
            "hint": "ee-oo-nee / ah-oo-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four (4)\" in Teso?",
            "correctAnswer": "ioŋon (m.) / aoŋon (f.)",
            "options": [
              "idiope (m.) / adiope (f.)",
              "iyarei (m.) / aarei (f.)",
              "iuni (m.) / auni (f.)",
              "ioŋon (m.) / aoŋon (f.)"
            ],
            "hint": "ee-oh-ngohn / ah-oh-ngohn"
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
            "prompt": "Complete the Teso term for \"Five (5)\": ___",
            "correctAnswer": "ikany (m.) / akany (f.)",
            "options": [
              "idiope (m.) / adiope (f.)",
              "iyarei (m.) / aarei (f.)",
              "iuni (m.) / auni (f.)",
              "ikany (m.) / akany (f.)"
            ],
            "hint": "Cardinal 5 (< akan hand)"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-2",
    "title": "Unit 2: Hobley (1902) Elgumi Dialogues, Pronouns, Tools & Oral Wisdom",
    "description": "Learn conversational phrases, personal pronouns, tools, and proverbs from C. W. Hobley (1902) and Sir Harry Johnston (1902).",
    "icon": "Award",
    "skills": [
      {
        "id": "teso-hobley-1902-phrases",
        "title": "Pronouns, Homestead Tools & Hobley (1902) Phrases",
        "icon": "Home",
        "description": "Master Ateso pronouns, imperatives, and cultural terms recorded in 1902.",
        "tips": "Sir Harry Johnston (1902, p. 851) and C. W. Hobley (1902, pp. 92–95) recorded everyday salutations ('Mata!', 'Yoka yoka!') and conversational imperatives in Ateso (Elgumi/Wamia): 'Bia ne!' (Come here!), 'Kolot!' (Go away!), 'Koin akipi!' (Bring water!), and 'Icamit nyo?' (What do you want?).",
        "culturalNote": "In Ateso oral wisdom, 'Akan nabo mam epedori aibok akwap' ('One hand alone cannot dig the earth') celebrates community cooperation (aleya) in cultivating finger-millet (akima) and cassava.",
        "words": [
          {
            "target": "eong (ayong), ijo, ngesi, isio (oni), yesi, kesi",
            "source": "I, you (sg.), s/he, we, you (pl.), they",
            "pronunciation": "eh-ohng, ee-joh, ngeh-see, ee-see-oh",
            "hint": "Hobley (1902) & Johnston (1902) personal pronouns"
          },
          {
            "target": "Bia ne! / Kolot!",
            "source": "Come here! / Go!",
            "pronunciation": "bee-ah neh / koh-loht",
            "hint": "Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) conversational imperatives"
          },
          {
            "target": "Koin akipi! / Icamit nyo?",
            "source": "Bring water! / What do you want?",
            "pronunciation": "koyn ah-kee-pee / ee-chah-meet nyoh",
            "hint": "Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) phrases"
          },
          {
            "target": "Akuj / Edeke (Lokasuban)",
            "source": "God, the Supreme Creator",
            "pronunciation": "ah-kooj / eh-deh-keh / loh-kah-soo-bahn",
            "hint": "Hobley (1902) & Johnston (1902)"
          },
          {
            "target": "atap / akima / ajon",
            "source": "Millet bread (ugali) / Finger-millet / Traditional cereal brew",
            "pronunciation": "ah-tahp / ah-kee-mah / ah-john",
            "hint": "Ateso culinary staples"
          },
          {
            "target": "akwara (pl. ngakwaras) / aupwal (ebuku)",
            "source": "Spear / Shield",
            "pronunciation": "ah-kwah-rah / ah-oop-wahl",
            "hint": "Hobley (1902, pp. 92–95) & Johnston (1902)"
          },
          {
            "target": "akalabai / emal / ekileng",
            "source": "Bow / Arrow / Knife",
            "pronunciation": "ah-kah-lah-bah-ee / eh-mahl / eh-kee-lehng",
            "hint": "Hobley (1902, pp. 92–95) & Johnston (1902)"
          },
          {
            "target": "etogo (pl. itogoi) / ekek (pl. ikekia)",
            "source": "House (pl. Houses) / Door (pl. Doors)",
            "pronunciation": "eh-toh-goh / eh-kehk",
            "hint": "Hobley (1902, pp. 92–95) & Johnston (1902)"
          },
          {
            "target": "Akan nabo mam epedori aibok akwap",
            "source": "One hand alone cannot dig the earth (Proverb)",
            "pronunciation": "ah-kahn nah-boh mahm eh-peh-doh-ree",
            "hint": "Unity in community farming"
          }
        ],
        "sentences": [
          {
            "target": "Bia ne! Koin akipi!",
            "source": "Come here! Bring water! (Hobley 1902, p. 53)"
          },
          {
            "target": "Akan nabo mam epedori aibok akwap.",
            "source": "One hand alone cannot dig the earth."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"eong (ayong), ijo, ngesi, isio (oni), yesi, kesi\" in Teso?",
            "correctAnswer": "I, you (sg.), s/he, we, you (pl.), they",
            "options": [
              "Come here! / Go!",
              "Bring water! / What do you want?",
              "God, the Supreme Creator",
              "I, you (sg.), s/he, we, you (pl.), they"
            ],
            "hint": "Hobley (1902) & Johnston (1902) personal pronouns"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Bia ne! / Kolot!\" in Teso?",
            "correctAnswer": "Come here! / Go!",
            "options": [
              "Bring water! / What do you want?",
              "God, the Supreme Creator",
              "Come here! / Go!",
              "I, you (sg.), s/he, we, you (pl.), they"
            ],
            "hint": "Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) conversational imperatives"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Koin akipi! / Icamit nyo?\" in Teso?",
            "correctAnswer": "Bring water! / What do you want?",
            "options": [
              "God, the Supreme Creator",
              "Bring water! / What do you want?",
              "I, you (sg.), s/he, we, you (pl.), they",
              "Come here! / Go!"
            ],
            "hint": "Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) phrases"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bring water! / What do you want?\" in Teso?",
            "correctAnswer": "Koin akipi! / Icamit nyo?",
            "options": [
              "Koin akipi! / Icamit nyo?",
              "eong (ayong), ijo, ngesi, isio (oni), yesi, kesi",
              "Bia ne! / Kolot!",
              "Akuj / Edeke (Lokasuban)"
            ],
            "hint": "koyn ah-kee-pee / ee-chah-meet nyoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"God, the Supreme Creator\" in Teso?",
            "correctAnswer": "Akuj / Edeke (Lokasuban)",
            "options": [
              "eong (ayong), ijo, ngesi, isio (oni), yesi, kesi",
              "Bia ne! / Kolot!",
              "Koin akipi! / Icamit nyo?",
              "Akuj / Edeke (Lokasuban)"
            ],
            "hint": "ah-kooj / eh-deh-keh / loh-kah-soo-bahn"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "eong (ayong), ijo, ngesi, isio (oni), yesi, kesi: I, you (sg.), s/he, we, you (pl.), they",
            "pairs": [
              {
                "left": "eong (ayong), ijo, ngesi, isio (oni), yesi, kesi",
                "right": "I, you (sg.), s/he, we, you (pl.), they"
              },
              {
                "left": "Bia ne! / Kolot!",
                "right": "Come here! / Go!"
              },
              {
                "left": "Koin akipi! / Icamit nyo?",
                "right": "Bring water! / What do you want?"
              },
              {
                "left": "Akuj / Edeke (Lokasuban)",
                "right": "God, the Supreme Creator"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Millet bread (ugali) / Finger-millet / Traditional cereal brew\": ___",
            "correctAnswer": "atap / akima / ajon",
            "options": [
              "eong (ayong), ijo, ngesi, isio (oni), yesi, kesi",
              "Bia ne! / Kolot!",
              "Koin akipi! / Icamit nyo?",
              "atap / akima / ajon"
            ],
            "hint": "Ateso culinary staples"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-3",
    "title": "Unit 3: Family, Kinship, Clans & Social Organization (C. W. Hobley 1902 Elgumi Vocabulary & Sir Harry Johnston )",
    "description": "Master family, kinship, clans & social organization in Teso (Ateso) built directly from C.",
    "icon": "User",
    "skills": [
      {
        "id": "teso-family-kinship-kinship-elders-3",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "toto",
            "source": "Mother",
            "pronunciation": "toto",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "papa",
            "source": "Father",
            "pronunciation": "papa",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "mamai",
            "source": "Uncle (maternal)",
            "pronunciation": "mamai",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "inac / onac",
            "source": "Sister / brother (sibling)",
            "pronunciation": "inac / onac",
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
            "pronunciation": "etelepat / esapat (pl. itelepai)",
            "hint": "Wikipedia Teso language — Noun prefix"
          },
          {
            "target": "apese (pl. apesur)",
            "source": "Girl (pl. girls)",
            "pronunciation": "apese (pl. apesur)",
            "hint": "Wikipedia Teso language — Noun prefix"
          },
          {
            "target": "ikoku (pl. idwe / iduwe)",
            "source": "Child (pl. children)",
            "pronunciation": "ikoku (pl. idwe / iduwe)",
            "hint": "Wikipedia Teso language — Noun prefix"
          },
          {
            "target": "imukeru / ipese (baby girl)",
            "source": "Baby / infant",
            "pronunciation": "imukeru / ipese (baby girl)",
            "hint": "Wikipedia Teso language — Neuter nouns"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"toto\" in Teso?",
            "correctAnswer": "Mother",
            "options": [
              "Father",
              "Uncle (maternal)",
              "Sister / brother (sibling)",
              "Mother"
            ],
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"papa\" in Teso?",
            "correctAnswer": "Father",
            "options": [
              "Uncle (maternal)",
              "Sister / brother (sibling)",
              "Father",
              "Mother"
            ],
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mamai\" in Teso?",
            "correctAnswer": "Uncle (maternal)",
            "options": [
              "Sister / brother (sibling)",
              "Uncle (maternal)",
              "Mother",
              "Father"
            ],
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Uncle (maternal)\" in Teso?",
            "correctAnswer": "mamai",
            "options": [
              "mamai",
              "toto",
              "papa",
              "inac / onac"
            ],
            "hint": "mamai"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sister / brother (sibling)\" in Teso?",
            "correctAnswer": "inac / onac",
            "options": [
              "toto",
              "papa",
              "mamai",
              "inac / onac"
            ],
            "hint": "inac / onac"
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
              "papa",
              "mamai",
              "ija"
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
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "aberu (pl. aŋor)",
            "source": "Woman / wife (pl. women)",
            "pronunciation": "aberu (pl. aŋor)",
            "hint": "Wikipedia Teso language — Plural formation"
          },
          {
            "target": "ekamejan (pl. ikamejak)",
            "source": "Hunter (pl. hunters)",
            "pronunciation": "ekamejan (pl. ikamejak)",
            "hint": "Wikipedia Teso language — Agent nouns"
          },
          {
            "target": "ekecokon (pl. ikecokok)",
            "source": "Herdsman (pl. herdsmen)",
            "pronunciation": "ekecokon (pl. ikecokok)",
            "hint": "Wikipedia Teso language — Agent nouns"
          },
          {
            "target": "ekadukon (pl. ikadukok)",
            "source": "Builder (pl. builders)",
            "pronunciation": "ekadukon (pl. ikadukok)",
            "hint": "Wikipedia Teso language — Agent nouns"
          },
          {
            "target": "ekatubon (pl. ikatubok)",
            "source": "Judge (pl. judges)",
            "pronunciation": "ekatubon (pl. ikatubok)",
            "hint": "Wikipedia Teso language — Agent nouns"
          },
          {
            "target": "ekiror (é-kɪ́-rɔ́-rɪ̀)",
            "source": "Name",
            "pronunciation": "ekiror (é-kɪ́-rɔ́-rɪ̀)",
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "target": "ndachakoni",
            "source": "Brother",
            "pronunciation": "ndachakoni",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "edwe, epese, ekoko",
            "source": "Child",
            "pronunciation": "edwe, epese, ekoko",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "ndachakang epesi",
            "source": "Sister",
            "pronunciation": "ndachakang epesi",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          }
        ],
        "sentences": [
          {
            "target": "edwe, epese, ekoko",
            "source": "Child"
          },
          {
            "target": "ndachakang epesi",
            "source": "Sister"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aberu (pl. aŋor)\" in Teso?",
            "correctAnswer": "Woman / wife (pl. women)",
            "options": [
              "Hunter (pl. hunters)",
              "Herdsman (pl. herdsmen)",
              "Builder (pl. builders)",
              "Woman / wife (pl. women)"
            ],
            "hint": "Wikipedia Teso language — Plural formation"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ekamejan (pl. ikamejak)\" in Teso?",
            "correctAnswer": "Hunter (pl. hunters)",
            "options": [
              "Herdsman (pl. herdsmen)",
              "Builder (pl. builders)",
              "Hunter (pl. hunters)",
              "Woman / wife (pl. women)"
            ],
            "hint": "Wikipedia Teso language — Agent nouns"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ekecokon (pl. ikecokok)\" in Teso?",
            "correctAnswer": "Herdsman (pl. herdsmen)",
            "options": [
              "Builder (pl. builders)",
              "Herdsman (pl. herdsmen)",
              "Woman / wife (pl. women)",
              "Hunter (pl. hunters)"
            ],
            "hint": "Wikipedia Teso language — Agent nouns"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Herdsman (pl. herdsmen)\" in Teso?",
            "correctAnswer": "ekecokon (pl. ikecokok)",
            "options": [
              "ekecokon (pl. ikecokok)",
              "aberu (pl. aŋor)",
              "ekamejan (pl. ikamejak)",
              "ekadukon (pl. ikadukok)"
            ],
            "hint": "ekecokon (pl. ikecokok)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Builder (pl. builders)\" in Teso?",
            "correctAnswer": "ekadukon (pl. ikadukok)",
            "options": [
              "aberu (pl. aŋor)",
              "ekamejan (pl. ikamejak)",
              "ekecokon (pl. ikecokok)",
              "ekadukon (pl. ikadukok)"
            ],
            "hint": "ekadukon (pl. ikadukok)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "aberu (pl. aŋor): Woman / wife (pl. women)",
            "pairs": [
              {
                "left": "aberu (pl. aŋor)",
                "right": "Woman / wife (pl. women)"
              },
              {
                "left": "ekamejan (pl. ikamejak)",
                "right": "Hunter (pl. hunters)"
              },
              {
                "left": "ekecokon (pl. ikecokok)",
                "right": "Herdsman (pl. herdsmen)"
              },
              {
                "left": "ekadukon (pl. ikadukok)",
                "right": "Builder (pl. builders)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Judge (pl. judges)\": ___",
            "correctAnswer": "ekatubon (pl. ikatubok)",
            "options": [
              "aberu (pl. aŋor)",
              "ekamejan (pl. ikamejak)",
              "ekecokon (pl. ikecokok)",
              "ekatubon (pl. ikatubok)"
            ],
            "hint": "Wikipedia Teso language — Agent nouns"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-4",
    "title": "Unit 4: Numbers, Counting, Currency & Measures (C. W. Hobley 1902 Elgumi Vocabulary & Sir Harry Johnston )",
    "description": "Master numbers, counting, currency & measures in Teso (Ateso) built directly from C.",
    "icon": "Scale",
    "skills": [
      {
        "id": "teso-numbers-measures-cardinals-ordinals-4",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "itomon (atomon)",
            "source": "Ten",
            "pronunciation": "ee-toh-mohn",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "ikany-kaoŋon (5+4)",
            "source": "Nine",
            "pronunciation": "ee-kah-ny kah-oh-ngohn",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "ikany-kauni (5+3)",
            "source": "Eight",
            "pronunciation": "ee-kah-ny kah-oo-nee",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "ikany-kaare (5+2)",
            "source": "Seven",
            "pronunciation": "ee-kah-ny kah-reh",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "ikany-kape (5+1)",
            "source": "Six",
            "pronunciation": "ee-kah-ny kah-peh",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "esupur (traditional) / enoot",
            "source": "Zero / naught",
            "pronunciation": "esupur (traditional) / enoot",
            "hint": "Wikipedia Teso language — Numerals"
          },
          {
            "target": "idiope(t) (m.) / adiope(t) (f.) / yenisodit (n.)",
            "source": "One (1) — masculine / feminine / neuter",
            "pronunciation": "idiope(t) (m.) / adiope(t) (f.) / yenisodit (n.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "ikany-kape (m.) / akany-kape (f.)",
            "source": "Six (6, lit. 5+1)",
            "pronunciation": "ikany-kape (m.) / akany-kape (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "ikany-kaare (m.) / akany-kaare (f.)",
            "source": "Seven (7, lit. 5+2)",
            "pronunciation": "ikany-kaare (m.) / akany-kaare (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"itomon (atomon)\" in Teso?",
            "correctAnswer": "Ten",
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
            "prompt": "What is the English meaning of \"ikany-kaoŋon (5+4)\" in Teso?",
            "correctAnswer": "Nine",
            "options": [
              "Eight",
              "Seven",
              "Nine",
              "Ten"
            ],
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikany-kauni (5+3)\" in Teso?",
            "correctAnswer": "Eight",
            "options": [
              "Seven",
              "Eight",
              "Ten",
              "Nine"
            ],
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eight\" in Teso?",
            "correctAnswer": "ikany-kauni (5+3)",
            "options": [
              "ikany-kauni (5+3)",
              "itomon (atomon)",
              "ikany-kaoŋon (5+4)",
              "ikany-kaare (5+2)"
            ],
            "hint": "ee-kah-ny kah-oo-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Seven\" in Teso?",
            "correctAnswer": "ikany-kaare (5+2)",
            "options": [
              "itomon (atomon)",
              "ikany-kaoŋon (5+4)",
              "ikany-kauni (5+3)",
              "ikany-kaare (5+2)"
            ],
            "hint": "ee-kah-ny kah-reh"
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
            "correctAnswer": "ikany-kape (5+1)",
            "options": [
              "itomon (atomon)",
              "ikany-kaoŋon (5+4)",
              "ikany-kauni (5+3)",
              "ikany-kape (5+1)"
            ],
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          }
        ]
      },
      {
        "id": "teso-numbers-measures-trade-measures-4",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "ikany-kauni (m.) / akany-kauni (f.)",
            "source": "Eight (8, lit. 5+3)",
            "pronunciation": "ikany-kauni (m.) / akany-kauni (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "ikany-kaoŋon (m.) / akany-kaoŋon (f.)",
            "source": "Nine (9, lit. 5+4)",
            "pronunciation": "ikany-kaoŋon (m.) / akany-kaoŋon (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "itomon (m.) / atomon (f.)",
            "source": "Ten (10)",
            "pronunciation": "itomon (m.) / atomon (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "itomon-kanu-diope (m.) / atomon-kanu-diope (f.)",
            "source": "Eleven (11)",
            "pronunciation": "itomon-kanu-diope (m.) / atomon-kanu-diope (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "itomon'aare (m.) / atomon'aare (f.)",
            "source": "Twelve (12)",
            "pronunciation": "itomon'aare (m.) / atomon'aare (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "itomon'akany (m.) / atomon'aakany (f.)",
            "source": "Fifteen (15)",
            "pronunciation": "itomon'akany (m.) / atomon'aakany (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "akais aare",
            "source": "Twenty (20)",
            "pronunciation": "akais aare",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "akais auni",
            "source": "Thirty (30)",
            "pronunciation": "akais auni",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "akais aangon",
            "source": "Forty (40)",
            "pronunciation": "akais aangon",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          }
        ],
        "sentences": [
          {
            "target": "akais aare",
            "source": "Twenty (20)"
          },
          {
            "target": "akais auni",
            "source": "Thirty (30)"
          },
          {
            "target": "akais aangon",
            "source": "Forty (40)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikany-kauni (m.) / akany-kauni (f.)\" in Teso?",
            "correctAnswer": "Eight (8, lit. 5+3)",
            "options": [
              "Nine (9, lit. 5+4)",
              "Ten (10)",
              "Eleven (11)",
              "Eight (8, lit. 5+3)"
            ],
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikany-kaoŋon (m.) / akany-kaoŋon (f.)\" in Teso?",
            "correctAnswer": "Nine (9, lit. 5+4)",
            "options": [
              "Ten (10)",
              "Eleven (11)",
              "Nine (9, lit. 5+4)",
              "Eight (8, lit. 5+3)"
            ],
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"itomon (m.) / atomon (f.)\" in Teso?",
            "correctAnswer": "Ten (10)",
            "options": [
              "Eleven (11)",
              "Ten (10)",
              "Eight (8, lit. 5+3)",
              "Nine (9, lit. 5+4)"
            ],
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ten (10)\" in Teso?",
            "correctAnswer": "itomon (m.) / atomon (f.)",
            "options": [
              "itomon (m.) / atomon (f.)",
              "ikany-kauni (m.) / akany-kauni (f.)",
              "ikany-kaoŋon (m.) / akany-kaoŋon (f.)",
              "itomon-kanu-diope (m.) / atomon-kanu-diope (f.)"
            ],
            "hint": "itomon (m.) / atomon (f.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eleven (11)\" in Teso?",
            "correctAnswer": "itomon-kanu-diope (m.) / atomon-kanu-diope (f.)",
            "options": [
              "ikany-kauni (m.) / akany-kauni (f.)",
              "ikany-kaoŋon (m.) / akany-kaoŋon (f.)",
              "itomon (m.) / atomon (f.)",
              "itomon-kanu-diope (m.) / atomon-kanu-diope (f.)"
            ],
            "hint": "itomon-kanu-diope (m.) / atomon-kanu-diope (f.)"
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
            "prompt": "Complete the Teso term for \"Twelve (12)\": ___",
            "correctAnswer": "itomon'aare (m.) / atomon'aare (f.)",
            "options": [
              "ikany-kauni (m.) / akany-kauni (f.)",
              "ikany-kaoŋon (m.) / akany-kaoŋon (f.)",
              "itomon (m.) / atomon (f.)",
              "itomon'aare (m.) / atomon'aare (f.)"
            ],
            "hint": "Wikipedia Teso language — Cardinal numbers"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-5",
    "title": "Unit 5: Food, Cuisine, Crops & Livestock Husbandry (C. W. Hobley 1902 Elgumi Vocabulary & Sir Harry Johnston )",
    "description": "Master food, cuisine, crops & livestock husbandry in Teso (Ateso) built directly from C.",
    "icon": "Tractor",
    "skills": [
      {
        "id": "teso-food-agriculture-staple-foods-cookery-5",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "akiring",
            "source": "Meat",
            "pronunciation": "ah-kee-reeng",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akile",
            "source": "Milk",
            "pronunciation": "akile",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "atap",
            "source": "Millet bread / ugali",
            "pronunciation": "atap",
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "target": "akima / akuma",
            "source": "Porridge",
            "pronunciation": "akima / akuma",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "acece",
            "source": "Soup / broth",
            "pronunciation": "acece",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "ajon / ajony",
            "source": "Local cereal brew",
            "pronunciation": "ajon / ajony",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "etaget",
            "source": "Banana",
            "pronunciation": "etaget",
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "target": "enimu",
            "source": "Lemon",
            "pronunciation": "enimu",
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "target": "emucuuga",
            "source": "Orange",
            "pronunciation": "emucuuga",
            "hint": "Wikipedia Teso language — Masculine nouns"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akiring\" in Teso?",
            "correctAnswer": "Meat",
            "options": [
              "Milk",
              "Millet bread / ugali",
              "Porridge",
              "Meat"
            ],
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akile\" in Teso?",
            "correctAnswer": "Milk",
            "options": [
              "Millet bread / ugali",
              "Porridge",
              "Milk",
              "Meat"
            ],
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"atap\" in Teso?",
            "correctAnswer": "Millet bread / ugali",
            "options": [
              "Porridge",
              "Millet bread / ugali",
              "Meat",
              "Milk"
            ],
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Millet bread / ugali\" in Teso?",
            "correctAnswer": "atap",
            "options": [
              "atap",
              "akiring",
              "akile",
              "akima / akuma"
            ],
            "hint": "atap"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Porridge\" in Teso?",
            "correctAnswer": "akima / akuma",
            "options": [
              "akiring",
              "akile",
              "atap",
              "akima / akuma"
            ],
            "hint": "akima / akuma"
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
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "amunyu",
            "source": "Salt",
            "pronunciation": "amunyu",
            "hint": "Wikipedia Teso language — Adverbs of place"
          },
          {
            "target": "ecaai (tea) / akaawa (coffee)",
            "source": "Tea / coffee",
            "pronunciation": "ecaai (tea) / akaawa (coffee)",
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "target": "inyamat / ainyamat",
            "source": "Food",
            "pronunciation": "inyamat / ainyamat",
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "target": "ekurididi",
            "source": "Maize",
            "pronunciation": "ekurididi",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "akipi",
            "source": "Water",
            "pronunciation": "akipi",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "echori",
            "source": "Water-hole",
            "pronunciation": "echori",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"amunyu\" in Teso?",
            "correctAnswer": "Salt",
            "options": [
              "Tea / coffee",
              "Food",
              "Maize",
              "Salt"
            ],
            "hint": "Wikipedia Teso language — Adverbs of place"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ecaai (tea) / akaawa (coffee)\" in Teso?",
            "correctAnswer": "Tea / coffee",
            "options": [
              "Food",
              "Maize",
              "Tea / coffee",
              "Salt"
            ],
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"inyamat / ainyamat\" in Teso?",
            "correctAnswer": "Food",
            "options": [
              "Maize",
              "Food",
              "Salt",
              "Tea / coffee"
            ],
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Food\" in Teso?",
            "correctAnswer": "inyamat / ainyamat",
            "options": [
              "inyamat / ainyamat",
              "amunyu",
              "ecaai (tea) / akaawa (coffee)",
              "ekurididi"
            ],
            "hint": "inyamat / ainyamat"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Maize\" in Teso?",
            "correctAnswer": "ekurididi",
            "options": [
              "amunyu",
              "ecaai (tea) / akaawa (coffee)",
              "inyamat / ainyamat",
              "ekurididi"
            ],
            "hint": "ekurididi"
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
              "amunyu",
              "ecaai (tea) / akaawa (coffee)",
              "inyamat / ainyamat",
              "akipi"
            ],
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-6",
    "title": "Unit 6: Nature, Landscape, Flora & East African Wildlife (C. W. Hobley 1902 Elgumi Vocabulary & Sir Harry Johnston )",
    "description": "Master nature, landscape, flora & east african wildlife in Teso (Ateso) built directly from C.",
    "icon": "PawPrint",
    "skills": [
      {
        "id": "teso-nature-wildlife-land-sky-water-6",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "apaaran",
            "source": "Day",
            "pronunciation": "ah-pah-rahn",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akware",
            "source": "Night",
            "pronunciation": "ah-kwah-reh",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "acerit (pl. acerin)",
            "source": "Star",
            "pronunciation": "ah-cheh-reet",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akim",
            "source": "Fire",
            "pronunciation": "ah-keem",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akipi (a-ki-pí)",
            "source": "Water (pluralia tantum)",
            "pronunciation": "akipi (a-ki-pí)",
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "target": "edou",
            "source": "Rain",
            "pronunciation": "edou",
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
            "pronunciation": "akoloŋ",
            "hint": "Wikipedia Teso language — Singularia tantum"
          },
          {
            "target": "akuj / Edeke",
            "source": "Heaven / sky / God",
            "pronunciation": "akuj / Edeke",
            "hint": "Wikipedia Teso language — Vocabulary"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"apaaran\" in Teso?",
            "correctAnswer": "Day",
            "options": [
              "Night",
              "Star",
              "Fire",
              "Day"
            ],
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akware\" in Teso?",
            "correctAnswer": "Night",
            "options": [
              "Star",
              "Fire",
              "Night",
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
            "correctAnswer": "acerit (pl. acerin)",
            "options": [
              "acerit (pl. acerin)",
              "apaaran",
              "akware",
              "akim"
            ],
            "hint": "ah-cheh-reet"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fire\" in Teso?",
            "correctAnswer": "akim",
            "options": [
              "apaaran",
              "akware",
              "acerit (pl. acerin)",
              "akim"
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
            "correctAnswer": "akipi (a-ki-pí)",
            "options": [
              "apaaran",
              "akware",
              "acerit (pl. acerin)",
              "akipi (a-ki-pí)"
            ],
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          }
        ]
      },
      {
        "id": "teso-nature-wildlife-wildlife-flora-6",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "ekitoi (ɛ́-kɪ́tɔ́-ɪ̀)",
            "source": "Tree (pl. trees)",
            "pronunciation": "ekitoi (ɛ́-kɪ́tɔ́-ɪ̀)",
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "target": "eloa / emapule",
            "source": "Mvule tree",
            "pronunciation": "eloa / emapule",
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "target": "anya",
            "source": "Grass",
            "pronunciation": "anya",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "eduan",
            "source": "Weeds",
            "pronunciation": "eduan",
            "hint": "Wikipedia Teso language — Singularia tantum"
          },
          {
            "target": "asinge",
            "source": "Sand",
            "pronunciation": "asinge",
            "hint": "Wikipedia Teso language — Pluralia tantum"
          },
          {
            "target": "ekuron",
            "source": "Ashes",
            "pronunciation": "ekuron",
            "hint": "Wikipedia Teso language — Singularia tantum"
          },
          {
            "target": "imoru",
            "source": "Pebble / small stone",
            "pronunciation": "imoru",
            "hint": "Wikipedia Teso language — Neuter nouns"
          },
          {
            "target": "kide",
            "source": "East",
            "pronunciation": "kide",
            "hint": "Wikipedia Teso language — Adverbs of place"
          },
          {
            "target": "too",
            "source": "West",
            "pronunciation": "too",
            "hint": "Wikipedia Teso language — Adverbs of place"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ekitoi (ɛ́-kɪ́tɔ́-ɪ̀)\" in Teso?",
            "correctAnswer": "Tree (pl. trees)",
            "options": [
              "Mvule tree",
              "Grass",
              "Weeds",
              "Tree (pl. trees)"
            ],
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"eloa / emapule\" in Teso?",
            "correctAnswer": "Mvule tree",
            "options": [
              "Grass",
              "Weeds",
              "Mvule tree",
              "Tree (pl. trees)"
            ],
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"anya\" in Teso?",
            "correctAnswer": "Grass",
            "options": [
              "Weeds",
              "Grass",
              "Tree (pl. trees)",
              "Mvule tree"
            ],
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Grass\" in Teso?",
            "correctAnswer": "anya",
            "options": [
              "anya",
              "ekitoi (ɛ́-kɪ́tɔ́-ɪ̀)",
              "eloa / emapule",
              "eduan"
            ],
            "hint": "anya"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Weeds\" in Teso?",
            "correctAnswer": "eduan",
            "options": [
              "ekitoi (ɛ́-kɪ́tɔ́-ɪ̀)",
              "eloa / emapule",
              "anya",
              "eduan"
            ],
            "hint": "eduan"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "ekitoi (ɛ́-kɪ́tɔ́-ɪ̀): Tree (pl. trees)",
            "pairs": [
              {
                "left": "ekitoi (ɛ́-kɪ́tɔ́-ɪ̀)",
                "right": "Tree (pl. trees)"
              },
              {
                "left": "eloa / emapule",
                "right": "Mvule tree"
              },
              {
                "left": "anya",
                "right": "Grass"
              },
              {
                "left": "eduan",
                "right": "Weeds"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Sand\": ___",
            "correctAnswer": "asinge",
            "options": [
              "ekitoi (ɛ́-kɪ́tɔ́-ɪ̀)",
              "eloa / emapule",
              "anya",
              "asinge"
            ],
            "hint": "Wikipedia Teso language — Pluralia tantum"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-7",
    "title": "Unit 7: The Human Body, Health, Medicine & Safety (C. W. Hobley 1902 Elgumi Vocabulary & Sir Harry Johnston )",
    "description": "Master the human body, health, medicine & safety in Teso (Ateso) built directly from C.",
    "icon": "Heart",
    "skills": [
      {
        "id": "teso-body-health-anatomy-senses-7",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "akou (pl. akwes)",
            "source": "Head",
            "pronunciation": "ah-koh-oo",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akeju (pl. akejen)",
            "source": "Foot",
            "pronunciation": "ah-keh-joo",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akan (pl. akanin)",
            "source": "Hand",
            "pronunciation": "ah-kahn",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akong'u (a-kɔ́ŋ-ʊ̀)",
            "source": "Eye",
            "pronunciation": "akong'u (a-kɔ́ŋ-ʊ̀)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "akit (á-kí-t)",
            "source": "Ear",
            "pronunciation": "akit (á-kí-t)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ekume (e-kúmè)",
            "source": "Nose",
            "pronunciation": "ekume (e-kúmè)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ekialai (e-kíàl-àì)",
            "source": "Tooth",
            "pronunciation": "ekialai (e-kíàl-àì)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ang'ajep (á-ŋǎjɛ̀p)",
            "source": "Tongue",
            "pronunciation": "ang'ajep (á-ŋǎjɛ̀p)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "akituk (á-kɪ̀tʊ̀k)",
            "source": "Mouth",
            "pronunciation": "akituk (á-kɪ̀tʊ̀k)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akou (pl. akwes)\" in Teso?",
            "correctAnswer": "Head",
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
            "prompt": "What is the English meaning of \"akeju (pl. akejen)\" in Teso?",
            "correctAnswer": "Foot",
            "options": [
              "Hand",
              "Eye",
              "Foot",
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
              "Hand",
              "Head",
              "Foot"
            ],
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hand\" in Teso?",
            "correctAnswer": "akan (pl. akanin)",
            "options": [
              "akan (pl. akanin)",
              "akou (pl. akwes)",
              "akeju (pl. akejen)",
              "akong'u (a-kɔ́ŋ-ʊ̀)"
            ],
            "hint": "ah-kahn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eye\" in Teso?",
            "correctAnswer": "akong'u (a-kɔ́ŋ-ʊ̀)",
            "options": [
              "akou (pl. akwes)",
              "akeju (pl. akejen)",
              "akan (pl. akanin)",
              "akong'u (a-kɔ́ŋ-ʊ̀)"
            ],
            "hint": "akong'u (a-kɔ́ŋ-ʊ̀)"
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
            "correctAnswer": "akit (á-kí-t)",
            "options": [
              "akou (pl. akwes)",
              "akeju (pl. akejen)",
              "akan (pl. akanin)",
              "akit (á-kí-t)"
            ],
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          }
        ]
      },
      {
        "id": "teso-body-health-healing-safety-7",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "aakot (á-àkɔ́t)",
            "source": "Blood",
            "pronunciation": "aakot (á-àkɔ́t)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "akoit (á-kóì-t)",
            "source": "Bone",
            "pronunciation": "akoit (á-kóì-t)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "adam",
            "source": "Brain",
            "pronunciation": "adam",
            "hint": "Wikipedia Teso language — Singularia tantum"
          },
          {
            "target": "aijar",
            "source": "Life",
            "pronunciation": "aijar",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "ajo",
            "source": "Sleep",
            "pronunciation": "ajo",
            "hint": "Wikipedia Teso language — Pluralia tantum"
          },
          {
            "target": "ibokori",
            "source": "Finger",
            "pronunciation": "ibokori",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "etim",
            "source": "Hair",
            "pronunciation": "etim",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "akejen",
            "source": "Leg",
            "pronunciation": "akejen",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "murising",
            "source": "Neck",
            "pronunciation": "murising",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aakot (á-àkɔ́t)\" in Teso?",
            "correctAnswer": "Blood",
            "options": [
              "Bone",
              "Brain",
              "Life",
              "Blood"
            ],
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akoit (á-kóì-t)\" in Teso?",
            "correctAnswer": "Bone",
            "options": [
              "Brain",
              "Life",
              "Bone",
              "Blood"
            ],
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"adam\" in Teso?",
            "correctAnswer": "Brain",
            "options": [
              "Life",
              "Brain",
              "Blood",
              "Bone"
            ],
            "hint": "Wikipedia Teso language — Singularia tantum"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Brain\" in Teso?",
            "correctAnswer": "adam",
            "options": [
              "adam",
              "aakot (á-àkɔ́t)",
              "akoit (á-kóì-t)",
              "aijar"
            ],
            "hint": "adam"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Life\" in Teso?",
            "correctAnswer": "aijar",
            "options": [
              "aakot (á-àkɔ́t)",
              "akoit (á-kóì-t)",
              "adam",
              "aijar"
            ],
            "hint": "aijar"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "aakot (á-àkɔ́t): Blood",
            "pairs": [
              {
                "left": "aakot (á-àkɔ́t)",
                "right": "Blood"
              },
              {
                "left": "akoit (á-kóì-t)",
                "right": "Bone"
              },
              {
                "left": "adam",
                "right": "Brain"
              },
              {
                "left": "aijar",
                "right": "Life"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"Sleep\": ___",
            "correctAnswer": "ajo",
            "options": [
              "aakot (á-àkɔ́t)",
              "akoit (á-kóì-t)",
              "adam",
              "ajo"
            ],
            "hint": "Wikipedia Teso language — Pluralia tantum"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-8",
    "title": "Unit 8: Core Verbs, Tenses, Negation & Verbal Extensions (C. W. Hobley 1902 Elgumi Vocabulary & Sir Harry Johnston )",
    "description": "Master core verbs, tenses, negation & verbal extensions in Teso (Ateso) built directly from C.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "teso-verbs-grammar-action-verbs-8",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "ainer (alimun)",
            "source": "Speak",
            "pronunciation": "ah-ee-nehr",
            "hint": "Hobley 1902 & Ateso vocabulary"
          },
          {
            "target": "abunore (bia ne! = come here!)",
            "source": "Come",
            "pronunciation": "ah-boo-noh-reh / bee-ah neh",
            "hint": "Johnston 1902 p. 851 (Elgumi/Wamia) & Hobley 1902 pp. 92–95"
          },
          {
            "target": "alosit (kolot! = go!)",
            "source": "Go",
            "pronunciation": "ah-loh-seet / koh-loht",
            "hint": "Johnston 1902 p. 851 (Elgumi/Wamia) & Hobley 1902 pp. 92–95"
          },
          {
            "target": "akimat (aimat)",
            "source": "Drink",
            "pronunciation": "ah-kee-maht",
            "hint": "Hobley 1902 & Johnston 1902"
          },
          {
            "target": "akinyam (ainyam)",
            "source": "Eat",
            "pronunciation": "ah-kee-nyahm",
            "hint": "Hobley 1902 & Johnston 1902"
          },
          {
            "target": "akinyam / ainyam (akí-ɲám-à)",
            "source": "To eat",
            "pronunciation": "akinyam / ainyam (akí-ɲám-à)",
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "target": "akimat / aimat",
            "source": "To drink",
            "pronunciation": "akimat / aimat",
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "target": "akilip / ailip",
            "source": "To pray",
            "pronunciation": "akilip / ailip",
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "target": "aimo",
            "source": "To look for / search",
            "pronunciation": "aimo",
            "hint": "Wikipedia Teso language — Orthography"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ainer (alimun)\" in Teso?",
            "correctAnswer": "Speak",
            "options": [
              "Come",
              "Go",
              "Drink",
              "Speak"
            ],
            "hint": "Hobley 1902 & Ateso vocabulary"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"abunore (bia ne! = come here!)\" in Teso?",
            "correctAnswer": "Come",
            "options": [
              "Go",
              "Drink",
              "Come",
              "Speak"
            ],
            "hint": "Johnston 1902 p. 851 (Elgumi/Wamia) & Hobley 1902 pp. 92–95"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"alosit (kolot! = go!)\" in Teso?",
            "correctAnswer": "Go",
            "options": [
              "Drink",
              "Go",
              "Speak",
              "Come"
            ],
            "hint": "Johnston 1902 p. 851 (Elgumi/Wamia) & Hobley 1902 pp. 92–95"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Go\" in Teso?",
            "correctAnswer": "alosit (kolot! = go!)",
            "options": [
              "alosit (kolot! = go!)",
              "ainer (alimun)",
              "abunore (bia ne! = come here!)",
              "akimat (aimat)"
            ],
            "hint": "ah-loh-seet / koh-loht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Drink\" in Teso?",
            "correctAnswer": "akimat (aimat)",
            "options": [
              "ainer (alimun)",
              "abunore (bia ne! = come here!)",
              "alosit (kolot! = go!)",
              "akimat (aimat)"
            ],
            "hint": "ah-kee-maht"
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
                "left": "abunore (bia ne! = come here!)",
                "right": "Come"
              },
              {
                "left": "alosit (kolot! = go!)",
                "right": "Go"
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
            "correctAnswer": "akinyam (ainyam)",
            "options": [
              "ainer (alimun)",
              "abunore (bia ne! = come here!)",
              "alosit (kolot! = go!)",
              "akinyam (ainyam)"
            ],
            "hint": "Hobley 1902 & Johnston 1902"
          }
        ]
      },
      {
        "id": "teso-verbs-grammar-verbal-derivatives-8",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "aipet [e] (kick) vs. aipet [ɛ] (lay out)",
            "source": "To kick (close e) vs. To lay out (open ɛ)",
            "pronunciation": "aipet [e] (kick) vs. aipet [ɛ] (lay out)",
            "hint": "Wikipedia Teso language — Vowel contrast"
          },
          {
            "target": "aidip",
            "source": "To hit",
            "pronunciation": "aidip",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "aimor [ɔ] (share) vs. aimor [o] (insult)",
            "source": "To share (open ɔ) vs. To insult (close o)",
            "pronunciation": "aimor [ɔ] (share) vs. aimor [o] (insult)",
            "hint": "Wikipedia Teso language — Vowel contrast"
          },
          {
            "target": "aikut [u] (scoop) vs. aikut [ʊ] (blow)",
            "source": "To scratch the earth / scoop (close u) vs. To blow (open ʊ)",
            "pronunciation": "aikut [u] (scoop) vs. aikut [ʊ] (blow)",
            "hint": "Wikipedia Teso language — Vowel contrast"
          },
          {
            "target": "abal",
            "source": "To say",
            "pronunciation": "abal",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "ainu",
            "source": "To hug / embrace",
            "pronunciation": "ainu",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "aisab",
            "source": "To tell lies",
            "pronunciation": "aisab",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "alosit",
            "source": "To go (verbal noun: going)",
            "pronunciation": "alosit",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "abunere",
            "source": "To come (verbal noun: coming)",
            "pronunciation": "abunere",
            "hint": "Wikipedia Teso language — Feminine nouns"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aipet [e] (kick) vs. aipet [ɛ] (lay out)\" in Teso?",
            "correctAnswer": "To kick (close e) vs. To lay out (open ɛ)",
            "options": [
              "To hit",
              "To share (open ɔ) vs. To insult (close o)",
              "To scratch the earth / scoop (close u) vs. To blow (open ʊ)",
              "To kick (close e) vs. To lay out (open ɛ)"
            ],
            "hint": "Wikipedia Teso language — Vowel contrast"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aidip\" in Teso?",
            "correctAnswer": "To hit",
            "options": [
              "To share (open ɔ) vs. To insult (close o)",
              "To scratch the earth / scoop (close u) vs. To blow (open ʊ)",
              "To hit",
              "To kick (close e) vs. To lay out (open ɛ)"
            ],
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aimor [ɔ] (share) vs. aimor [o] (insult)\" in Teso?",
            "correctAnswer": "To share (open ɔ) vs. To insult (close o)",
            "options": [
              "To scratch the earth / scoop (close u) vs. To blow (open ʊ)",
              "To share (open ɔ) vs. To insult (close o)",
              "To kick (close e) vs. To lay out (open ɛ)",
              "To hit"
            ],
            "hint": "Wikipedia Teso language — Vowel contrast"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To share (open ɔ) vs. To insult (close o)\" in Teso?",
            "correctAnswer": "aimor [ɔ] (share) vs. aimor [o] (insult)",
            "options": [
              "aimor [ɔ] (share) vs. aimor [o] (insult)",
              "aipet [e] (kick) vs. aipet [ɛ] (lay out)",
              "aidip",
              "aikut [u] (scoop) vs. aikut [ʊ] (blow)"
            ],
            "hint": "aimor [ɔ] (share) vs. aimor [o] (insult)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To scratch the earth / scoop (close u) vs. To blow (open ʊ)\" in Teso?",
            "correctAnswer": "aikut [u] (scoop) vs. aikut [ʊ] (blow)",
            "options": [
              "aipet [e] (kick) vs. aipet [ɛ] (lay out)",
              "aidip",
              "aimor [ɔ] (share) vs. aimor [o] (insult)",
              "aikut [u] (scoop) vs. aikut [ʊ] (blow)"
            ],
            "hint": "aikut [u] (scoop) vs. aikut [ʊ] (blow)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso expression with its English meaning:",
            "correctAnswer": "aipet [e] (kick) vs. aipet [ɛ] (lay out): To kick (close e) vs. To lay out (open ɛ)",
            "pairs": [
              {
                "left": "aipet [e] (kick) vs. aipet [ɛ] (lay out)",
                "right": "To kick (close e) vs. To lay out (open ɛ)"
              },
              {
                "left": "aidip",
                "right": "To hit"
              },
              {
                "left": "aimor [ɔ] (share) vs. aimor [o] (insult)",
                "right": "To share (open ɔ) vs. To insult (close o)"
              },
              {
                "left": "aikut [u] (scoop) vs. aikut [ʊ] (blow)",
                "right": "To scratch the earth / scoop (close u) vs. To blow (open ʊ)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso term for \"To say\": ___",
            "correctAnswer": "abal",
            "options": [
              "aipet [e] (kick) vs. aipet [ɛ] (lay out)",
              "aidip",
              "aimor [ɔ] (share) vs. aimor [o] (insult)",
              "abal"
            ],
            "hint": "Wikipedia Teso language — Alphabet"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-9-public-domain-corpus",
    "title": "Unit 9: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Teso (Ateso) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
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
            "pronunciation": "iny-ah",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Akūt",
            "source": "God",
            "pronunciation": "a-koot",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Aginé",
            "source": "Goat",
            "pronunciation": "a-gin",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Ekokorr",
            "source": "Fowl",
            "pronunciation": "e-ko-kor",
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
            "pronunciation": "e-ses-see",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Ebokorit",
            "source": "Finger",
            "pronunciation": "e-boh-ko-rit",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ateker (pl. atekerin)\" in Teso?",
            "correctAnswer": "Clan / exogamous kinship group",
            "options": [
              "Clan / exogamous kinship group",
              "Grass",
              "God",
              "Goat"
            ],
            "hint": "Rev. A. L. Kitching, A Handbook of the Ateso Language (1915)"
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
              "Ekokorr",
              "Akeju",
              "ateker (pl. atekerin)",
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
            "pronunciation": "a-ko",
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
            "pronunciation": "e-ki ok",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Akenyanu",
            "source": "Day",
            "pronunciation": "a-keny-a-nu",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Akiteñ; nabero",
            "source": "Cow",
            "pronunciation": "a-ki-te",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Enañga",
            "source": "Cloth",
            "pronunciation": "e-nang-a",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "Ekōkō",
            "source": "Child",
            "pronunciation": "e-koh-koh",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          }
        ],
        "sentences": [
          {
            "target": "Akiteñ; nabero",
            "source": "Cow"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Akoñ\" in Teso?",
            "correctAnswer": "Eye",
            "options": [
              "Eye",
              "Elephant",
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
              "Akenyanu",
              "Akiteñ; nabero",
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
    "id": "teso-unit-10-open-datasets-modern",
    "title": "Unit 10: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Teso (Ateso) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
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
            "pronunciation": "a-nah-ca-keh e",
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
            "pronunciation": "a-ko-hit",
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
            "pronunciation": "a-to-ro t",
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
            "pronunciation": "e-ko-yoh",
            "hint": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II 1902, pp. 903–912"
          },
          {
            "target": "atomon",
            "source": "Ten",
            "pronunciation": "a-to-mon",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          }
        ],
        "sentences": [
          {
            "target": "Emal; Akau",
            "source": "Bow"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Anācăkēñe\" in Teso?",
            "correctAnswer": "Brother",
            "options": [
              "Brother",
              "Bow",
              "Bone",
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
              "Atoroqót",
              "Alaburu",
              "Anācăkēñe",
              "Emal; Akau"
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
            "target": "kanyi-ki-ongwon or akanya kangwun",
            "source": "Nine",
            "pronunciation": "kany-i ki ong-won or a-kany-a kang-wun",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "kanyi kauni",
            "source": "Eight",
            "pronunciation": "kany-i kau-ni",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "kanyi-kare",
            "source": "Seven",
            "pronunciation": "kany-i ka-re",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "{ kanyi or akanya } kape",
            "source": "Six",
            "pronunciation": "kany-i or a-kany-a ka-pe",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "ekan or akanyi",
            "source": "Five",
            "pronunciation": "e-kan or a-kany-i",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "aungwen or ongwon",
            "source": "Four",
            "pronunciation": "aung-wen or ong-won",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "auni or uni",
            "source": "Three",
            "pronunciation": "au-ni or u-ni",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "target": "are",
            "source": "Two",
            "pronunciation": "a-re",
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          }
        ],
        "sentences": [
          {
            "target": "kanyi-ki-ongwon or akanya kangwun",
            "source": "Nine"
          },
          {
            "target": "kanyi kauni",
            "source": "Eight"
          },
          {
            "target": "{ kanyi or akanya } kape",
            "source": "Six"
          },
          {
            "target": "ekan or akanyi",
            "source": "Five"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kanyi-ki-ongwon or akanya kangwun\" in Teso?",
            "correctAnswer": "Nine",
            "options": [
              "Nine",
              "Eight",
              "Seven",
              "Six"
            ],
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Teso (Ateso) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "kanyi-ki-ongwon or akanya kangwun: Nine",
            "pairs": [
              {
                "left": "kanyi-ki-ongwon or akanya kangwun",
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
                "left": "{ kanyi or akanya } kape",
                "right": "Six"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Teso (Ateso) term for \"Five\": ___",
            "correctAnswer": "ekan or akanyi",
            "options": [
              "ekan or akanyi",
              "aungwen or ongwon",
              "kanyi-ki-ongwon or akanya kangwun",
              "kanyi kauni"
            ],
            "hint": "Elgumi (Ateso / Wamia) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)"
          }
        ]
      }
    ]
  }
];
