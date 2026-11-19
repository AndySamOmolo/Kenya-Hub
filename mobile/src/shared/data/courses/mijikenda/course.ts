import type { LanguageConfig, CourseUnit } from "../types";

export const MIJIKENDA_CONFIG: LanguageConfig = {
  "id": "mijikenda",
  "name": "Mijikenda",
  "nativeName": "Kigiryama / Chidigo (Midzi Chenda)",
  "family": "Bantu",
  "counties": [
    "Kilifi",
    "Kwale",
    "Mombasa",
    "Tana River"
  ],
  "speakers": "2.5M",
  "speechLocale": "sw-KE",
  "description": "The Sabaki Bantu language cluster of the Nine Sacred Kaya Homesteads along the Kenyan coast.",
  "color": "#0D9488",
  "sources": [
    "krapf-six-languages-1850",
    "krapf-suahili-dictionary-1882",
    "shaw-pocket-vocabulary-taita-1885",
    "krapf-rebmann-nika-dictionary-1887",
    "taylor-aphorisms-1891",
    "taylor-giryama-1891",
    "johnston-bantu-1919",
    "open-web-swadesh-comparative"
  ]
};

export const MIJIKENDA_UNITS: CourseUnit[] = [
  {
    "id": "mijikenda-unit-1",
    "unitNumber": 1,
    "title": "Sacred Kaya Heritage, Sabaki Nouns & W. E. Taylor Riddles",
    "description": "Learn Kigiryama, Kirabai, and Chidigo nouns, numerals, verbs, and 1891 riddles and folktales from W. E. Taylor and Krapf & Rebmann (1887).",
    "icon": "BookOpen",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-kaya-nouns",
        "title": "Midzi Chenda (Nine Homesteads), People & Nature",
        "icon": "Users",
        "description": "Master core Mijikenda nouns for society, nature, and sacred Kaya institutions.",
        "tips": "Mijikenda ('Midzi Chenda' = Nine Villages) shifts Proto-Bantu *t to h (moho = fire, muho = river, -hahu = three) and uses dzi-/ma- in Class 5/6 (dziwe = stone, madzi = water).",
        "words": [
          {
            "target": "Midzi Chenda",
            "source": "The Nine Homesteads / Mijikenda",
            "pronunciation": "midzi chenda",
            "hint": "midzi (villages) + chenda (nine)"
          },
          {
            "target": "kaya (pl. makaya)",
            "source": "sacred fortified forest homestead",
            "pronunciation": "ka-ya",
            "hint": "Taylor (1891) & Krapf & Rebmann (1887)"
          },
          {
            "target": "K'ambi / Habasi (Vaya, Fisi, Enye-ts'i)",
            "source": "Ruling council of elders & initiation degrees",
            "pronunciation": "k'ambi / ha-ba-si",
            "hint": "W. E. Taylor (1891, p. 43) Giriama governance"
          },
          {
            "target": "mut'u (pl. at'u)",
            "source": "person (pl. people)",
            "pronunciation": "mut'u",
            "hint": "W. E. Taylor (1891) Class 1/2"
          },
          {
            "target": "mwalume (pl. alume)",
            "source": "man",
            "pronunciation": "mwa-lu-me",
            "hint": "W. E. Taylor (1891)"
          },
          {
            "target": "muche (pl. ache)",
            "source": "woman",
            "pronunciation": "mu-che",
            "hint": "W. E. Taylor (1891)"
          },
          {
            "target": "madzi",
            "source": "water",
            "pronunciation": "madzi",
            "hint": "Krapf (1850), Krapf & Rebmann (1887), & Taylor (1891)"
          },
          {
            "target": "moho",
            "source": "fire",
            "pronunciation": "mo-ho",
            "hint": "Krapf (1850), Krapf & Rebmann (1887), & Taylor (1891)"
          },
          {
            "target": "dziwe (pl. mawe)",
            "source": "stone (pl. stones)",
            "pronunciation": "dzi-we",
            "hint": "Class 5 dzi-"
          },
          {
            "target": "dzua",
            "source": "sun",
            "pronunciation": "dzua",
            "hint": "Class 5 dzi-"
          },
          {
            "target": "Mulungu",
            "source": "God, Supreme Creator",
            "pronunciation": "mu-lungu",
            "hint": "Taylor (1891, p. 90) & Krapf & Rebmann (1887)"
          },
          {
            "target": "chakurya",
            "source": "food",
            "pronunciation": "cha-kurya",
            "hint": "W. E. Taylor (1891, p. 138)"
          },
          {
            "target": "wari",
            "source": "cooked cornmeal (ugali)",
            "pronunciation": "wa-ri",
            "hint": "W. E. Taylor (1891, p. 138)"
          },
          {
            "target": "mafigo",
            "source": "three cooking stones of the hearth",
            "pronunciation": "ma-fi-go",
            "hint": "W. E. Taylor (1891 Riddle #6)"
          }
        ],
        "sentences": [
          {
            "target": "Fw-alume ahahu, akiuka mumwenga, k'afurya wari. Ni mafigo.",
            "source": "We are three men; when one goes away, we eat no cornmeal. It is the three hearthstones."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Midzi Chenda\" in Mijikenda?",
            "correctAnswer": "The Nine Homesteads",
            "options": [
              "sacred fortified forest homestead",
              "person",
              "The Nine Homesteads",
              "man"
            ],
            "hint": "midzi (villages) + chenda (nine)",
            "acceptedAnswers": [
              "The Nine Homesteads / Mijikenda",
              "The Nine Homesteads"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kaya (pl. makaya)\" in Mijikenda?",
            "correctAnswer": "sacred fortified forest homestead",
            "options": [
              "The Nine Homesteads",
              "sacred fortified forest homestead",
              "cooked cornmeal",
              "three cooking stones of the hearth"
            ],
            "hint": "Taylor (1891) & Krapf & Rebmann (1887)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"K'ambi / Habasi (Vaya, Fisi, Enye-ts'i)\" in Mijikenda?",
            "correctAnswer": "Ruling council of elders & initiation degrees",
            "options": [
              "three cooking stones of the hearth",
              "The Nine Homesteads",
              "sacred fortified forest homestead",
              "Ruling council of elders & initiation degrees"
            ],
            "hint": "W. E. Taylor (1891, p. 43) Giriama governance"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ruling council of elders & initiation degrees\" in Mijikenda?",
            "correctAnswer": "K'ambi",
            "options": [
              "Midzi Chenda",
              "kaya",
              "K'ambi",
              "mut'u"
            ],
            "hint": "kahm-bee / hah-bah-see",
            "acceptedAnswers": [
              "K'ambi / Habasi (Vaya, Fisi, Enye-ts'i)",
              "K'ambi"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"person (pl. people)\" in Mijikenda?",
            "correctAnswer": "mut'u",
            "options": [
              "Midzi Chenda",
              "kaya",
              "K'ambi",
              "mut'u"
            ],
            "hint": "moo-too / ah-too",
            "acceptedAnswers": [
              "mut'u (pl. at'u)",
              "mut'u"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Mijikenda expression with its English meaning:",
            "correctAnswer": "Midzi Chenda: The Nine Homesteads / Mijikenda",
            "pairs": [
              {
                "left": "Midzi Chenda",
                "right": "The Nine Homesteads / Mijikenda"
              },
              {
                "left": "kaya (pl. makaya)",
                "right": "sacred fortified forest homestead"
              },
              {
                "left": "K'ambi / Habasi (Vaya, Fisi, Enye-ts'i)",
                "right": "Ruling council of elders & initiation degrees"
              },
              {
                "left": "mut'u (pl. at'u)",
                "right": "person (pl. people)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda term for \"man\": ___",
            "correctAnswer": "mwalume",
            "options": [
              "Midzi Chenda",
              "mwalume",
              "kaya",
              "K'ambi"
            ],
            "hint": "W. E. Taylor (1891)",
            "acceptedAnswers": [
              "mwalume (pl. alume) / muche (pl. ache)",
              "mwalume"
            ]
          }
        ]
      },
      {
        "id": "mijikenda-verbs-folklore",
        "title": "Kigiryama Verbs, Numerals, 4-Day Week & Taylor Proverbs & Folktales",
        "icon": "Scale",
        "description": "Learn Mijikenda action verbs, numbers, traditional 4-day market week, proverbs, and folktale characters from W. E. Taylor (1891).",
        "tips": "W. E. Taylor (1891, p. 78) documents the traditional 4-day Giriama week (Jumwa, Kuramuka, Kurima-hiri, Kuisa), 5 folktales starring Katsungula (the Little Hare), 22 riddles, and 64 Giryama/Nyika proverbs.",
        "words": [
          {
            "target": "katsungula",
            "source": "little hare",
            "pronunciation": "katsungu-la",
            "hint": "W. E. Taylor (1891) folktale characters"
          },
          {
            "target": "simba",
            "source": "lion",
            "pronunciation": "simba",
            "hint": "W. E. Taylor (1891) folktale characters"
          },
          {
            "target": "fisi",
            "source": "hyena",
            "pronunciation": "fi-si",
            "hint": "W. E. Taylor (1891) folktale characters"
          },
          {
            "target": "mumwenga",
            "source": "One (1)",
            "pronunciation": "mumwenga",
            "hint": "Mijikenda numerals 1–10 (Taylor 1891 & Krapf 1887)"
          },
          {
            "target": "mairi",
            "source": "Two (2)",
            "pronunciation": "mairi",
            "hint": "Mijikenda numerals 1–10 (Taylor 1891 & Krapf 1887)"
          },
          {
            "target": "ahahu",
            "source": "Three (3)",
            "pronunciation": "ahahu",
            "hint": "Mijikenda numerals 1–10 (Taylor 1891 & Krapf 1887)"
          },
          {
            "target": "Jumwa, Kuramuka, Kurima-hiri, Kuisa",
            "source": "The traditional 4-day Giriama week",
            "pronunciation": "jumwa ku-ra-mu-ka kurima-hiri kui-sa",
            "hint": "W. E. Taylor (1891, p. 78 under Moon)"
          },
          {
            "target": "kurya",
            "source": "to eat",
            "pronunciation": "kurya",
            "hint": "Taylor (1891, p. 138)"
          },
          {
            "target": "kugit'ira",
            "source": "to cook",
            "pronunciation": "ku-git'i-ra",
            "hint": "Taylor (1891, p. 138)"
          },
          {
            "target": "kugula",
            "source": "to buy",
            "pronunciation": "ku-gu-la",
            "hint": "Krapf & Rebmann (1887) & Taylor (1891)"
          },
          {
            "target": "kuguza",
            "source": "to sell",
            "pronunciation": "ku-gu-za",
            "hint": "Krapf & Rebmann (1887) & Taylor (1891)"
          },
          {
            "target": "Bandzu, bandzu rámala gogo",
            "source": "Chip, chip finished the block",
            "pronunciation": "bandzu"
          },
          {
            "target": "Chuwo k'akina mumwenga",
            "source": "Counsel is not of one alone (Taylor 1891)",
            "pronunciation": "chuwo-k'akina-mumwenga"
          },
          {
            "target": "K'akilumika",
            "source": "It cannot be bitten. It is the elbow (Taylor 1891 Riddle #8)",
            "pronunciation": "k'a-ki-lu-mi-ka ni ki-ko-ko-ra",
            "hint": "kikokora = elbow"
          },
          {
            "target": "Magoma mairi lwanda-ni. Ni mahombo.",
            "source": "Two cows, in the open field. — It is the breasts / maternal nourishment",
            "pronunciation": "ma-go-ma mai-ri lwanda-ni ni ma-hombo",
            "hint": "lwanda-ni = in the open field"
          }
        ],
        "sentences": [
          {
            "target": "Katsungula na Simba; Fisi na Simba na Katsungula.",
            "source": "The Little Hare and the Lion; The Hyena, the Lion, and the Little Hare."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"katsungula\" in Mijikenda?",
            "correctAnswer": "little hare",
            "options": [
              "little hare",
              "1",
              "to eat",
              "lion"
            ],
            "hint": "W. E. Taylor (1891) folktale characters",
            "acceptedAnswers": [
              "little hare / lion / hyena",
              "little hare"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mumwenga\" in Mijikenda?",
            "correctAnswer": "One (1)",
            "options": [
              "to eat",
              "little hare",
              "lion",
              "One (1)"
            ],
            "hint": "Mijikenda numerals 1–10 (Taylor 1891 & Krapf 1887)",
            "acceptedAnswers": [
              "One (1)",
              "1"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"The traditional 4-day Giriama week (rest day, 1st, 2nd, and 3rd cultivating days)\" in Mijikenda?",
            "correctAnswer": "Jumwa",
            "options": [
              "katsungula",
              "Jumwa",
              "mumwenga",
              "kurya"
            ],
            "hint": "joom-wah, koo-rah-moo-kah",
            "acceptedAnswers": [
              "Jumwa, Kuramuka, Kurima-hiri, Kuisa",
              "Jumwa"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"to eat\" in Mijikenda?",
            "correctAnswer": "kurya",
            "options": [
              "katsungula",
              "mumwenga",
              "kurya",
              "Jumwa"
            ],
            "hint": "koo-ryah / koo-gee-tee-rah",
            "acceptedAnswers": [
              "kurya / kugit'ira",
              "kurya"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Mijikenda expression with its English meaning:",
            "correctAnswer": "katsungula / simba / fisi: little hare / lion / hyena",
            "pairs": [
              {
                "left": "katsungula / simba / fisi",
                "right": "little hare / lion / hyena"
              },
              {
                "left": "kurya / kugit'ira",
                "right": "to eat / to cook"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda term for \"to buy\": ___",
            "correctAnswer": "kugula",
            "options": [
              "katsungula",
              "mumwenga",
              "Jumwa",
              "kugula"
            ],
            "hint": "Krapf & Rebmann (1887) & Taylor (1891)",
            "acceptedAnswers": [
              "kugula / kuguza",
              "kugula"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-2",
    "unitNumber": 2,
    "title": "Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Users",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "ndúgu múje",
            "source": "Aunt",
            "pronunciation": "ndu-gu mu-je",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "mána mulúme",
            "source": "Boy",
            "pronunciation": "ma-na mu-lu-me",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "múje ayelóloa",
            "source": "Bride",
            "pronunciation": "mu-je a-ye-lo-loa",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "ndugu mulume",
            "source": "Brother",
            "pronunciation": "ndu-gu mu-lu-me"
          },
          {
            "target": "muhóho",
            "source": "Child",
            "pronunciation": "mu-ho-ho",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "lukolo (pl. k'olo)",
            "source": "Family",
            "pronunciation": "lu-ko-lo",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "mbari",
            "source": "Clan",
            "pronunciation": "mba-ri",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "baba",
            "source": "Father",
            "pronunciation": "ba-ba",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "ndugu",
            "source": "Sibling / Relative",
            "pronunciation": "ndu-gu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "musijána muhoho manámje",
            "source": "Girl",
            "pronunciation": "mu-si-ja-na mu-ho-ho ma-namje",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ndúgu múje\" in Mijikenda (Giriama)?",
            "correctAnswer": "Aunt",
            "options": [
              "Boy",
              "Bride",
              "Brother",
              "Aunt"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Mijikenda (Giriama) term to its English meaning:",
            "correctAnswer": "ndúgu múje: Aunt",
            "pairs": [
              {
                "left": "ndúgu múje",
                "right": "Aunt"
              },
              {
                "left": "mána mulúme",
                "right": "Boy"
              },
              {
                "left": "múje ayelóloa",
                "right": "Bride"
              },
              {
                "left": "ndugu mulume",
                "right": "Brother"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda (Giriama) term for \"Child\": ___",
            "correctAnswer": "muhóho",
            "options": [
              "muhóho",
              "ndúgu múje",
              "mána mulúme",
              "múje ayelóloa"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          }
        ]
      },
      {
        "id": "mijikenda-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "tsáwe",
            "source": "Grandfather",
            "pronunciation": "tsa-we",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "wáwe",
            "source": "Grandmother",
            "pronunciation": "wa-we",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "muhóho wa mana",
            "source": "Grandson / Grandchild",
            "pronunciation": "mu-ho-ho wa ma-na",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "mulúme",
            "source": "Husband",
            "pronunciation": "mu-lu-me",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "zumbe",
            "source": "King",
            "pronunciation": "zumbe",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "mbari",
            "source": "Kin",
            "pronunciation": "mba-ri"
          },
          {
            "target": "mútu",
            "source": "Man",
            "pronunciation": "mutu"
          },
          {
            "target": "mutu múje",
            "source": "Wife",
            "pronunciation": "mutu muje"
          },
          {
            "target": "lóla muje",
            "source": "Marry",
            "pronunciation": "lola muje"
          }
        ],
        "sentences": [
          {
            "target": "Tsáwe na wáwe a-na-kala mudzini.",
            "source": "Grandfather and grandmother live in the homestead."
          },
          {
            "target": "Mulúme na muche a-na-linda muhóho.",
            "source": "The husband and wife care for the child."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"tsáwe\" mean in English?",
            "correctAnswer": "Grandfather",
            "options": [
              "Grandmother",
              "Grandfather",
              "Grandson",
              "Husband"
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Grandmother\"",
            "correctAnswer": "wáwe",
            "acceptedAnswers": [
              "wáwe",
              "wáwe"
            ],
            "hint": "Starts with \"wá\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"muhóho wa mana\"",
            "correctAnswer": "Grandson",
            "acceptedAnswers": [
              "Grandson / Grandchild",
              "Grandson"
            ],
            "hint": "Review Clans, Marriage & Community Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "tsáwe",
                "right": "Grandfather"
              },
              {
                "left": "wáwe",
                "right": "Grandmother"
              },
              {
                "left": "muhóho wa mana",
                "right": "Grandson"
              },
              {
                "left": "mulúme",
                "right": "Husband"
              },
              {
                "left": "zumbe",
                "right": "King"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-3",
    "unitNumber": 3,
    "title": "Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Scale",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "chenda (kenda)",
            "source": "Nine",
            "pronunciation": "chenda",
            "hint": "Taylor 1891 (Midzi Chenda = Nine Homesteads)"
          },
          {
            "target": "hnane (in counting, with voiceless nasal hn-) / nane (-nane)",
            "source": "Eight",
            "pronunciation": "hna-ne / na-ne",
            "hint": "Rev. W. E. Taylor (1891, p. x & Table I) & Krapf & Rebmann (1887)"
          },
          {
            "target": "fungahe",
            "source": "Seven",
            "pronunciation": "funga-he",
            "hint": "Taylor 1891 & Krapf & Rebmann 1887"
          },
          {
            "target": "handahu",
            "source": "Six",
            "pronunciation": "handa-hu",
            "hint": "Taylor 1891 & Krapf & Rebmann 1887"
          },
          {
            "target": "hahu (-hahu)",
            "source": "Three",
            "pronunciation": "ha-hu",
            "hint": "Wikipedia Sabaki languages & Bantu numeral cognates"
          },
          {
            "target": "tsano (ts'ano)",
            "source": "Five",
            "pronunciation": "tsa-no / ts'a-no",
            "hint": "Wikipedia Sabaki languages & Bantu numeral cognates"
          },
          {
            "target": "mwenga / mosi",
            "source": "One",
            "pronunciation": "mwenga / mo-si",
            "hint": "Sabaki / Northeast Coast Bantu numeral cognate"
          },
          {
            "target": "nne",
            "source": "Four",
            "pronunciation": "nne",
            "hint": "Sabaki / Northeast Coast Bantu numeral cognate"
          },
          {
            "target": "ikumi / kumi",
            "source": "Ten",
            "pronunciation": "i-ku-mi / ku-mi",
            "hint": "Sabaki / Northeast Coast Bantu numeral cognate"
          },
          {
            "target": "airi",
            "source": "Two",
            "pronunciation": "ai-ri"
          }
        ],
        "sentences": [
          {
            "target": "Midzi chenda na at'u hnane.",
            "source": "Nine homesteads and eight people."
          },
          {
            "target": "Siku fungahe na miezi handahu.",
            "source": "Seven days and six months."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"chenda\" mean in English?",
            "correctAnswer": "Nine",
            "options": [
              "Eight",
              "Seven",
              "Six",
              "Nine"
            ],
            "hint": "Core vocabulary in Cardinal & Ordinal Numerals"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Eight\"",
            "correctAnswer": "hnane",
            "acceptedAnswers": [
              "hnane (in counting, with voiceless nasal hn-) / nane (-nane)",
              "hnane"
            ],
            "hint": "Starts with \"hn\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"fungahe\"",
            "correctAnswer": "Seven",
            "acceptedAnswers": [
              "Seven",
              "Seven"
            ],
            "hint": "Review Cardinal & Ordinal Numerals"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Cardinal & Ordinal Numerals with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "chenda",
                "right": "Nine"
              },
              {
                "left": "hnane",
                "right": "Eight"
              },
              {
                "left": "fungahe",
                "right": "Seven"
              },
              {
                "left": "handahu",
                "right": "Six"
              },
              {
                "left": "tsano (ts'ano)",
                "right": "Five"
              }
            ]
          }
        ]
      },
      {
        "id": "mijikenda-numbers-measures-trade-measures-3",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "mia",
            "source": "Hundred",
            "pronunciation": "mi-a"
          },
          {
            "target": "kumi",
            "source": "Ten",
            "pronunciation": "ku-mi"
          },
          {
            "target": "menga",
            "source": "One",
            "pronunciation": "menga"
          },
          {
            "target": "tandahu",
            "source": "Six",
            "pronunciation": "tanda-hu"
          },
          {
            "target": "záno",
            "source": "Five",
            "pronunciation": "zano"
          },
          {
            "target": "kána mmenga",
            "source": "Once",
            "pronunciation": "kana mmenga"
          },
          {
            "target": "aïri",
            "source": "Both",
            "pronunciation": "airi"
          },
          {
            "target": "ane",
            "source": "Four",
            "pronunciation": "ane"
          },
          {
            "target": "Kenda",
            "source": "Nine",
            "pronunciation": "kend-a"
          }
        ],
        "sentences": [
          {
            "target": "At'u kumi a-na-gula mbuzi mia.",
            "source": "Ten people are buying a hundred goats."
          },
          {
            "target": "Kána mmenga na siku tandahu.",
            "source": "Once and six days."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mia\" mean in English?",
            "correctAnswer": "Hundred",
            "options": [
              "Ten",
              "One",
              "Six",
              "Hundred"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Ten\"",
            "correctAnswer": "kumi"
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"menga\"",
            "correctAnswer": "One"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Trade, Barter, Currency & Traditional Measures with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mia",
                "right": "Hundred"
              },
              {
                "left": "kumi",
                "right": "Ten"
              },
              {
                "left": "menga",
                "right": "One"
              },
              {
                "left": "tandahu",
                "right": "Six"
              },
              {
                "left": "záno",
                "right": "Five"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-4",
    "unitNumber": 4,
    "title": "Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Tractor",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "henda mukáhe",
            "source": "Bake bread",
            "pronunciation": "henda mu-ka-he",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "ídji (pl. mádji)",
            "source": "Egg",
            "pronunciation": "i-dji / ma-dji"
          },
          {
            "target": "jăkána",
            "source": "Boil",
            "pronunciation": "ja-ka-na"
          },
          {
            "target": "mukáhe",
            "source": "Bread",
            "pronunciation": "mu-ka-he",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "jíta",
            "source": "Cook",
            "pronunciation": "ji-ta",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. n.)"
          },
          {
            "target": "mafúha",
            "source": "Oil",
            "pronunciation": "mafuha"
          },
          {
            "target": "ója / kalánga",
            "source": "Fry",
            "pronunciation": "o-ja / ka-la-nga"
          },
          {
            "target": "wirási",
            "source": "Yam",
            "pronunciation": "wirasi"
          },
          {
            "target": "-nono (noun: mafuha)",
            "source": "Fat",
            "pronunciation": "-no-no / ma-fu-ha"
          }
        ],
        "sentences": [
          {
            "target": "Muche yu-na-henda mukáhe na mádji.",
            "source": "The woman is baking bread with eggs."
          },
          {
            "target": "N-na-jíta wari na mafúha.",
            "source": "I am cooking cornmeal with oil."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"henda mukáhe\" mean in English?",
            "correctAnswer": "Bake bread",
            "options": [
              "Egg",
              "Bake bread",
              "Boil",
              "Bread"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages",
            "acceptedAnswers": [
              "Bake bread",
              "Bake"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Egg\"",
            "correctAnswer": "ídji",
            "acceptedAnswers": [
              "ídji (pl. mádji)",
              "ídji"
            ],
            "hint": "Starts with \"íd\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"jăkána\"",
            "correctAnswer": "Boil"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Staple Foods, Cookery & Beverages with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "henda mukáhe",
                "right": "Bake bread"
              },
              {
                "left": "ídji (pl. mádji)",
                "right": "Egg"
              },
              {
                "left": "jăkána",
                "right": "Boil"
              },
              {
                "left": "mukáhe",
                "right": "Bread"
              },
              {
                "left": "jíta",
                "right": "Cook"
              }
            ]
          }
        ]
      },
      {
        "id": "mijikenda-food-agriculture-crops-livestock-4",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "mjíti",
            "source": "Cook",
            "pronunciation": "mji-ti",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "mazerre",
            "source": "Corn (maize)",
            "pronunciation": "ma-zerre",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "muháma",
            "source": "Millet / sorghum",
            "pronunciation": "mu-ha-ma",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "nóa",
            "source": "Drink",
            "pronunciation": "noa",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          },
          {
            "target": "ría",
            "source": "Eat",
            "pronunciation": "ria",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "ídji (pl. mádji)",
            "source": "Egg",
            "pronunciation": "idji",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "fiala mádji",
            "source": "to lay eggs",
            "pronunciation": "fia-la madji",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "-itsi (with nouns like nyama forming mbitsi)",
            "source": "Raw",
            "pronunciation": "-itsi"
          },
          {
            "target": "chaa",
            "source": "Tea",
            "pronunciation": "chaa"
          }
        ],
        "sentences": [
          {
            "target": "Mjíti yu-na-jíta mazerre.",
            "source": "The cook is cooking maize."
          },
          {
            "target": "Hu-na-rima muháma na hu-na-nóa madzi.",
            "source": "We cultivate sorghum and we drink water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mjíti\" mean in English?",
            "correctAnswer": "Cook",
            "options": [
              "Corn (maize)",
              "Millet / sorghum",
              "Cook",
              "Drink"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Corn (maize)\"",
            "correctAnswer": "mazerre",
            "acceptedAnswers": [
              "mazerre",
              "mazerre"
            ],
            "hint": "Starts with \"ma\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"muháma\"",
            "correctAnswer": "Millet / sorghum",
            "acceptedAnswers": [
              "Millet / sorghum",
              "Millet"
            ],
            "hint": "Review Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mjíti",
                "right": "Cook"
              },
              {
                "left": "mazerre",
                "right": "Corn (maize)"
              },
              {
                "left": "muháma",
                "right": "Millet / sorghum"
              },
              {
                "left": "nóa",
                "right": "Drink"
              },
              {
                "left": "ría",
                "right": "Eat"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-5",
    "unitNumber": 5,
    "title": "Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "PawPrint",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "kánda",
            "source": "Bank (of a river)",
            "pronunciation": "kanda",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "gnombe mulúme",
            "source": "Ox",
            "pronunciation": "gnombe mulume"
          },
          {
            "target": "dzua",
            "source": "Sun",
            "pronunciation": "dzoo-ah"
          },
          {
            "target": "ng'ombe",
            "source": "Cow",
            "pronunciation": "ngohm-beh"
          },
          {
            "target": "mbwa / dia",
            "source": "Dog",
            "pronunciation": "mbwa / dia"
          },
          {
            "target": "Bahari",
            "source": "Sea",
            "pronunciation": "ba-ha-ri"
          },
          {
            "target": "Madofia",
            "source": "Mud",
            "pronunciation": "ma-do-fia"
          },
          {
            "target": "paka",
            "source": "Cat",
            "pronunciation": "pa-ka"
          },
          {
            "target": "nsi",
            "source": "Fly",
            "pronunciation": "nsi"
          }
        ],
        "sentences": [
          {
            "target": "Ng'ombe mulúme yu-ko kánda ya muho.",
            "source": "The ox is at the bank of the river."
          },
          {
            "target": "Dzua ri-na-waka na ng'ombe i-na-rya.",
            "source": "The sun is shining and the cow is grazing."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kánda\" mean in English?",
            "correctAnswer": "Bank (of a river)",
            "options": [
              "Ox",
              "Sun",
              "Bank (of a river)",
              "Cow"
            ],
            "hint": "Core vocabulary in Sky, Weather, Rivers & Landforms",
            "acceptedAnswers": [
              "Bank (of a river)",
              "Bank"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Ox\"",
            "correctAnswer": "gnombe mulúme",
            "acceptedAnswers": [
              "gnombe mulúme",
              "gnombe mulúme"
            ],
            "hint": "Starts with \"gn\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"dzua\"",
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
                "left": "kánda",
                "right": "Bank (of a river)"
              },
              {
                "left": "gnombe mulúme",
                "right": "Ox"
              },
              {
                "left": "dzua",
                "right": "Sun"
              },
              {
                "left": "ng'ombe",
                "right": "Cow"
              },
              {
                "left": "mbwa",
                "right": "Dog"
              }
            ]
          }
        ]
      },
      {
        "id": "mijikenda-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "gáu (ra muhi)",
            "source": "Bark (of a tree)",
            "pronunciation": "gau",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "dia uzípiga kulúlu",
            "source": "Bark (like a dog)",
            "pronunciation": "dia u-zi-pi-ga ku-lu-lu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "niúji",
            "source": "Bee",
            "pronunciation": "niu-ji",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "niúni",
            "source": "Bird",
            "pronunciation": "niu-ni",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "fúma",
            "source": "Blow (wind)",
            "pronunciation": "fu-ma",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "uzánsu",
            "source": "Branch",
            "pronunciation": "u-zansu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "niáhi",
            "source": "Buffalo",
            "pronunciation": "nia-hi",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "urúka kua máwa",
            "source": "Fly",
            "pronunciation": "uruka kua mawa"
          },
          {
            "target": "ungulúe",
            "source": "Pig",
            "pronunciation": "ungulue"
          }
        ],
        "sentences": [
          {
            "target": "Gáu ra muhi ri-na-linda muhi.",
            "source": "Tree bark protects the tree."
          },
          {
            "target": "Niúji na niúni zi-na-ruruka mwituni.",
            "source": "Bees and birds fly in the forest."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"gáu\" mean in English?",
            "correctAnswer": "Bark (of a tree)",
            "options": [
              "Bark (of a tree)",
              "Bee",
              "Bird",
              "Blow (wind)"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees",
            "acceptedAnswers": [
              "Bark (of a tree)",
              "Bark"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Bark (like a dog)\"",
            "correctAnswer": "dia uzípiga kulúlu",
            "acceptedAnswers": [
              "dia uzípiga kulúlu",
              "dia uzípiga kulúlu"
            ],
            "hint": "Starts with \"di\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"niúji\"",
            "correctAnswer": "Bee",
            "acceptedAnswers": [
              "Bee",
              "Bee"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "gáu",
                "right": "Bark (of a tree)"
              },
              {
                "left": "dia uzípiga kulúlu",
                "right": "Bark (like a dog)"
              },
              {
                "left": "niúji",
                "right": "Bee"
              },
              {
                "left": "niúni",
                "right": "Bird"
              },
              {
                "left": "fúma",
                "right": "Blow (wind)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-6",
    "unitNumber": 6,
    "title": "The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "User",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "milázo",
            "source": "Blood",
            "pronunciation": "mi-la-zo",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "mukono (pl. mikono)",
            "source": "Arm",
            "pronunciation": "mu-ko-no"
          },
          {
            "target": "sikíro",
            "source": "Ear",
            "pronunciation": "sikiro"
          },
          {
            "target": "zítso (pl. mátso)",
            "source": "Eye",
            "pronunciation": "zi-tso"
          },
          {
            "target": "gúlu",
            "source": "Leg",
            "pronunciation": "gulu"
          },
          {
            "target": "mulómo",
            "source": "Lip",
            "pronunciation": "mulomo"
          },
          {
            "target": "lubáfu",
            "source": "Rib",
            "pronunciation": "lubafu"
          },
          {
            "target": "jála ja gulu",
            "source": "Toe",
            "pronunciation": "jala ja gulu"
          },
          {
            "target": "nyonga",
            "source": "Hip",
            "pronunciation": "nyonga"
          }
        ],
        "sentences": [
          {
            "target": "Milázo i-na-pita mukononi na muirini.",
            "source": "Blood flows through the arm and the body."
          },
          {
            "target": "Sikíro ri-na-sikia na mátso ga-na-ona.",
            "source": "The ear hears and the eyes see."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"milázo\" mean in English?",
            "correctAnswer": "Blood",
            "options": [
              "Blood",
              "Arm",
              "Ear",
              "Eye"
            ],
            "hint": "Core vocabulary in Parts of the Body & Physical Senses"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Arm\"",
            "correctAnswer": "mukono"
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"sikíro\"",
            "correctAnswer": "Ear",
            "acceptedAnswers": [
              "Ear",
              "Ear"
            ],
            "hint": "Review Parts of the Body & Physical Senses"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Parts of the Body & Physical Senses with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "milázo",
                "right": "Blood"
              },
              {
                "left": "mukono",
                "right": "Arm"
              },
              {
                "left": "sikíro",
                "right": "Ear"
              },
              {
                "left": "zítso (pl. mátso)",
                "right": "Eye"
              },
              {
                "left": "gúlu",
                "right": "Leg"
              }
            ]
          }
        ]
      },
      {
        "id": "mijikenda-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "óga",
            "source": "Danger",
            "pronunciation": "oga",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "kuffua",
            "source": "Die",
            "pronunciation": "kuffua",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. n.)"
          },
          {
            "target": "jilúngo ja mukóno",
            "source": "Elbow",
            "pronunciation": "ji-lungo ja mu-ko-no",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "ukóngo wa matso",
            "source": "Eye sickness",
            "pronunciation": "u-kongo wa matso",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "titetémo",
            "source": "Fever",
            "pronunciation": "ti-te-te-mo",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "ndhea",
            "source": "Jaw",
            "pronunciation": "ndhea"
          },
          {
            "target": "msósa",
            "source": "Bone",
            "pronunciation": "msosa"
          },
          {
            "target": "móngo",
            "source": "Back",
            "pronunciation": "mongo"
          },
          {
            "target": "muíri",
            "source": "Body",
            "pronunciation": "muiri"
          }
        ],
        "sentences": [
          {
            "target": "Ukóngo wa matso u-na-taka dawa.",
            "source": "Eye sickness requires medicine."
          },
          {
            "target": "Titetémo ri-na-uma muíri wosi.",
            "source": "Fever aches throughout the whole body."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"óga\" mean in English?",
            "correctAnswer": "Danger",
            "options": [
              "Die",
              "Elbow",
              "Danger",
              "Eye sickness"
            ],
            "hint": "Core vocabulary in Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Die\"",
            "correctAnswer": "kuffua",
            "acceptedAnswers": [
              "kuffua",
              "kuffua"
            ],
            "hint": "Starts with \"ku\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"jilúngo ja mukóno\"",
            "correctAnswer": "Elbow",
            "acceptedAnswers": [
              "Elbow",
              "Elbow"
            ],
            "hint": "Review Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Health, Traditional Medicine & Emergency Terms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "óga",
                "right": "Danger"
              },
              {
                "left": "kuffua",
                "right": "Die"
              },
              {
                "left": "jilúngo ja mukóno",
                "right": "Elbow"
              },
              {
                "left": "ukóngo wa matso",
                "right": "Eye sickness"
              },
              {
                "left": "titetémo",
                "right": "Fever"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-7",
    "unitNumber": 7,
    "title": "Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Compass",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "kuhenda (-henda)",
            "source": "To do / To make",
            "pronunciation": "ku-henda",
            "hint": "Krapf & Rebmann (1887) & Taylor (1891) Giryama"
          },
          {
            "target": "kwenda (-enda)",
            "source": "To go / To walk",
            "pronunciation": "kwenda",
            "hint": "Krapf (1850) Kinika & Taylor (1891) Giryama"
          },
          {
            "target": "kudza (-dza)",
            "source": "To come",
            "pronunciation": "kudza",
            "hint": "Taylor (1891) Giryama Vocabulary"
          },
          {
            "target": "kurima (-rima)",
            "source": "To cultivate / To hoe",
            "pronunciation": "ku-ri-ma",
            "hint": "Krapf (1850) Kinika"
          },
          {
            "target": "kugula (-gula)",
            "source": "To buy / To trade",
            "pronunciation": "ku-gu-la",
            "hint": "Krapf (1850) Kinika"
          },
          {
            "target": "kulola (-lola)",
            "source": "To look / To see",
            "pronunciation": "ku-lo-la",
            "hint": "Taylor (1891) Giryama Vocabulary"
          },
          {
            "target": "kusoma (-soma)",
            "source": "To read / To study",
            "pronunciation": "ku-so-ma",
            "hint": "Krapf (1850) Kinika"
          },
          {
            "target": "kulamusa (-lamusa)",
            "source": "To greet",
            "pronunciation": "ku-la-mu-sa",
            "hint": "Krapf (1850) Kinika"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kuhenda (-henda)\" in Mijikenda?",
            "correctAnswer": "To do / To make",
            "options": [
              "To go / To walk",
              "To come",
              "To do / To make",
              "To cultivate / To hoe"
            ],
            "hint": "Krapf & Rebmann (1887) & Taylor (1891) Giryama"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kwenda (-enda)\" in Mijikenda?",
            "correctAnswer": "To go / To walk",
            "options": [
              "To go / To walk",
              "To come",
              "To buy / To trade",
              "To do / To make"
            ],
            "hint": "Krapf (1850) Kinika & Taylor (1891) Giryama",
            "acceptedAnswers": [
              "To go / To walk",
              "To go"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kudza (-dza)\" in Mijikenda?",
            "correctAnswer": "To come",
            "options": [
              "To cultivate / To hoe",
              "To do / To make",
              "To go / To walk",
              "To come"
            ],
            "hint": "Taylor (1891) Giryama Vocabulary"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To come\" in Mijikenda?",
            "correctAnswer": "kudza",
            "options": [
              "kuhenda",
              "kwenda",
              "kurima",
              "kudza"
            ],
            "hint": "Starts with \"ku…\" (5 letters)",
            "acceptedAnswers": [
              "kudza (-dza)",
              "kudza"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To cultivate / To hoe\" in Mijikenda?",
            "correctAnswer": "kurima",
            "options": [
              "kurima",
              "kuhenda",
              "kwenda",
              "kudza"
            ],
            "hint": "Starts with \"ku…\" (6 letters)",
            "acceptedAnswers": [
              "kurima (-rima)",
              "kurima"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Mijikenda expression with its English meaning:",
            "correctAnswer": "kuhenda (-henda): To do / To make",
            "pairs": [
              {
                "left": "kuhenda (-henda)",
                "right": "To do / To make"
              },
              {
                "left": "kwenda (-enda)",
                "right": "To go / To walk"
              },
              {
                "left": "kudza (-dza)",
                "right": "To come"
              },
              {
                "left": "kurima (-rima)",
                "right": "To cultivate / To hoe"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda term for \"To buy / To trade\": ___",
            "correctAnswer": "kugula",
            "options": [
              "kuhenda",
              "kwenda",
              "kugula",
              "kudza"
            ],
            "hint": "Krapf (1850) Kinika",
            "acceptedAnswers": [
              "kugula (-gula)",
              "kugula"
            ]
          }
        ]
      },
      {
        "id": "mijikenda-verbs-grammar-verbal-derivatives-7",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "zibúma ada / bara",
            "source": "To accustom oneself",
            "pronunciation": "zi-bu-ma ada",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "kuuka / kuenda",
            "source": "Go",
            "pronunciation": "koo-kah / kwehn-dah"
          },
          {
            "target": "úsa / lónda",
            "source": "Ask",
            "pronunciation": "usa"
          },
          {
            "target": "fóya",
            "source": "Beg",
            "pronunciation": "foya"
          },
          {
            "target": "ulongo",
            "source": "Lie",
            "pronunciation": "u-long-o"
          },
          {
            "target": "ia",
            "source": "Rob",
            "pronunciation": "ia"
          },
          {
            "target": "ku-tsukula (to carry) / ku-vyaa (to bear)",
            "source": "Bear",
            "pronunciation": "ku-tsukula / ku-vyaa"
          },
          {
            "target": "mánia",
            "source": "Know",
            "pronunciation": "mania"
          },
          {
            "target": "zúva máhe",
            "source": "Spit",
            "pronunciation": "zuva mahe"
          }
        ],
        "sentences": [
          {
            "target": "N-na-kuuka mudzini ku-londa ndugu.",
            "source": "I am going to the homestead to ask for my relative."
          },
          {
            "target": "N-na-mánia njira ya kaya.",
            "source": "I know the path to the kaya."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"zibúma ada\" mean in English?",
            "correctAnswer": "To accustom oneself",
            "options": [
              "Go",
              "Ask",
              "To accustom oneself",
              "Beg"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Go\"",
            "correctAnswer": "kuuka",
            "acceptedAnswers": [
              "kuuka / kuenda",
              "kuuka"
            ],
            "hint": "Starts with \"ku\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"úsa\"",
            "correctAnswer": "Ask",
            "acceptedAnswers": [
              "Ask",
              "Ask"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "zibúma ada",
                "right": "To accustom oneself"
              },
              {
                "left": "kuuka",
                "right": "Go"
              },
              {
                "left": "úsa",
                "right": "Ask"
              },
              {
                "left": "fóya",
                "right": "Beg"
              },
              {
                "left": "ulongo",
                "right": "Lie"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-8",
    "unitNumber": 8,
    "title": "Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Map",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "lero (rero)",
            "source": "Today",
            "pronunciation": "le-ro",
            "hint": "Krapf (1850) & Taylor (1891) Giryama"
          },
          {
            "target": "dzana",
            "source": "Yesterday",
            "pronunciation": "dza-na",
            "hint": "Krapf (1850) & Taylor (1891) Giryama"
          },
          {
            "target": "madzacha (machero)",
            "source": "Dawn / Tomorrow morning",
            "pronunciation": "madzacha",
            "hint": "Taylor (1891) Giryama Vocabulary"
          },
          {
            "target": "usiku",
            "source": "Night",
            "pronunciation": "u-si-ku",
            "hint": "Krapf (1850) Kinika"
          },
          {
            "target": "mwezi",
            "source": "Moon / Month",
            "pronunciation": "mwe-zi",
            "hint": "Krapf (1850) Kinika"
          },
          {
            "target": "zíku",
            "source": "Day",
            "pronunciation": "ziku"
          }
        ],
        "sentences": [
          {
            "target": "Lero ni siku mbidzo kuliko dzana.",
            "source": "Today is a better day than yesterday."
          },
          {
            "target": "Madzacha ga-na-fika nyuma ya usiku.",
            "source": "Dawn arrives after the night."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"lero\" mean in English?",
            "correctAnswer": "Today",
            "options": [
              "Yesterday",
              "Dawn",
              "Today",
              "Night"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Yesterday\"",
            "correctAnswer": "dzana",
            "acceptedAnswers": [
              "dzana",
              "dzana"
            ],
            "hint": "Starts with \"dz\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"madzacha\"",
            "correctAnswer": "Dawn",
            "acceptedAnswers": [
              "Dawn / Tomorrow morning",
              "Dawn"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "lero",
                "right": "Today"
              },
              {
                "left": "dzana",
                "right": "Yesterday"
              },
              {
                "left": "madzacha",
                "right": "Dawn"
              },
              {
                "left": "usiku",
                "right": "Night"
              },
              {
                "left": "mwezi",
                "right": "Moon"
              }
            ]
          }
        ]
      },
      {
        "id": "mijikenda-time-calendar-journey-navigation-8",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Compass",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "mwaka (pl. miaka)",
            "source": "Year / Seasonal cycle",
            "pronunciation": "mwa-ka",
            "hint": "Krapf (1850) Kinika"
          },
          {
            "target": "nyondo (nyota)",
            "source": "Star",
            "pronunciation": "nyondo",
            "hint": "Taylor (1891) Giryama Vocabulary"
          },
          {
            "target": "niegnési ya jiramúko",
            "source": "Morning-star",
            "pronunciation": "niegne-si ya ji-ra-mu-ko",
            "hint": "Krapf (1850) Kinika"
          },
          {
            "target": "majéro",
            "source": "Early morning / Tomorrow",
            "pronunciation": "ma-je-ro",
            "hint": "Krapf (1850) Kinika"
          },
          {
            "target": "mbere",
            "source": "Before / In front",
            "pronunciation": "mbe-re",
            "hint": "Krapf (1850) Kinika"
          },
          {
            "target": "nyuma",
            "source": "Behind / Afterwards",
            "pronunciation": "nyu-ma",
            "hint": "Krapf (1850) Kinika"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mwaka (pl. miaka)\" in Mijikenda?",
            "correctAnswer": "Year / Seasonal cycle",
            "options": [
              "Year / Seasonal cycle",
              "Star",
              "Morning-star",
              "Early morning / Tomorrow"
            ],
            "hint": "Krapf (1850) Kinika"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nyondo (nyota)\" in Mijikenda?",
            "correctAnswer": "Star",
            "options": [
              "Morning-star",
              "Early morning / Tomorrow",
              "Star",
              "Year / Seasonal cycle"
            ],
            "hint": "Taylor (1891) Giryama Vocabulary"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"niegnési ya jiramúko\" in Mijikenda?",
            "correctAnswer": "Morning-star",
            "options": [
              "Early morning / Tomorrow",
              "Year / Seasonal cycle",
              "Morning-star",
              "Star"
            ],
            "hint": "Krapf (1850) Kinika"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Morning-star\" in Mijikenda?",
            "correctAnswer": "niegnési ya jiramúko",
            "options": [
              "majéro",
              "niegnési ya jiramúko",
              "nyondo",
              "mwaka"
            ],
            "hint": "Starts with \"ni…\""
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Before / In front\" in Mijikenda?",
            "correctAnswer": "mbere",
            "options": [
              "majéro",
              "nyondo",
              "mbere",
              "nyuma"
            ],
            "hint": "Starts with \"mb…\" (5 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Mijikenda expression with its English meaning:",
            "correctAnswer": "mwaka (pl. miaka): Year / Seasonal cycle",
            "pairs": [
              {
                "left": "mwaka (pl. miaka)",
                "right": "Year / Seasonal cycle"
              },
              {
                "left": "nyondo (nyota)",
                "right": "Star"
              },
              {
                "left": "niegnési ya jiramúko",
                "right": "Morning-star"
              },
              {
                "left": "majéro",
                "right": "Early morning / Tomorrow"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda term for \"Behind / Afterwards\": ___",
            "correctAnswer": "nyuma",
            "options": [
              "nyuma",
              "mbere",
              "niegnési ya jiramúko",
              "mwaka"
            ],
            "hint": "Krapf (1850) Kinika"
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-9",
    "unitNumber": 9,
    "title": "Conversational Phrases, Idioms & Daily Dialogue",
    "description": "Master conversational phrases, idioms & daily dialogue in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "MessageCircle",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-phrases-idioms-everyday-dialogue-9",
        "title": "Everyday Conversational Phrases & Questions",
        "icon": "CheckCircle2",
        "description": "Practice authentic questions, answers, and idiomatic expressions from historical phrasebooks.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "va ṣauíri",
            "source": "Advise",
            "pronunciation": "va saui-ri",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          },
          {
            "target": "hénda j̇éri",
            "source": "Affirm",
            "pronunciation": "henda je-ri",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          },
          {
            "target": "púnde",
            "source": "After",
            "pronunciation": "punde",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka prep.)"
          },
          {
            "target": "kahénsa",
            "source": "He is against",
            "pronunciation": "ka-hensa",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "lagána",
            "source": "Agree",
            "pronunciation": "la-ga-na",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. n.)"
          },
          {
            "target": "wízo",
            "source": "Agreeable",
            "pronunciation": "wi-zo",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka adj.)"
          },
          {
            "target": "pẹho",
            "source": "Air",
            "pronunciation": "pe-ho",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "Dheri / Amani",
            "source": "Peace",
            "pronunciation": "dheh-ree"
          },
          {
            "target": "lamúsa",
            "source": "Greet",
            "pronunciation": "lamusa"
          }
        ],
        "sentences": [
          {
            "target": "Hu-na-lagána ku-henda jéri na dheri.",
            "source": "We agree to act truthfully and in peace."
          },
          {
            "target": "N-na-ku-lamúsa na dheri, ndugu yangu.",
            "source": "I greet you in peace, my relative."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"va ṣauíri\" mean in English?",
            "correctAnswer": "Advise",
            "options": [
              "Advise",
              "Affirm",
              "After",
              "He is against"
            ],
            "hint": "Core vocabulary in Everyday Conversational Phrases & Questions"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Affirm\"",
            "correctAnswer": "hénda j̇éri",
            "acceptedAnswers": [
              "hénda j̇éri",
              "hénda j̇éri"
            ],
            "hint": "Starts with \"hé\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"púnde\"",
            "correctAnswer": "After",
            "acceptedAnswers": [
              "After",
              "After"
            ],
            "hint": "Review Everyday Conversational Phrases & Questions"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Everyday Conversational Phrases & Questions with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "va ṣauíri",
                "right": "Advise"
              },
              {
                "left": "hénda j̇éri",
                "right": "Affirm"
              },
              {
                "left": "púnde",
                "right": "After"
              },
              {
                "left": "kahénsa",
                "right": "He is against"
              },
              {
                "left": "lagána",
                "right": "Agree"
              }
            ]
          }
        ]
      },
      {
        "id": "mijikenda-phrases-idioms-courtesy-discourse-9",
        "title": "Hospitality, Requests & Social Discourse",
        "icon": "Handshake",
        "description": "Converse naturally in home, village, market, and travel settings.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "kulúlu",
            "source": "Alarm",
            "pronunciation": "ku-lu-lu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "aidímaye kúlla útu",
            "source": "Almighty",
            "pronunciation": "ai-di-ma-ye kulla utu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka adj.)"
          },
          {
            "target": "kahíri",
            "source": "Also",
            "pronunciation": "ka-hi-ri",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka adv.)"
          },
          {
            "target": "héndă-to",
            "source": "Amend",
            "pronunciation": "henda-to",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          },
          {
            "target": "kóro",
            "source": "Anger",
            "pronunciation": "ko-ro",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "zukíroa",
            "source": "To be angry",
            "pronunciation": "zu-ki-roa",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "búma kóro",
            "source": "To make angry",
            "pronunciation": "bu-ma ko-ro",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "oga",
            "source": "Anguish",
            "pronunciation": "oga",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "rehéra c̣ábari",
            "source": "Announce",
            "pronunciation": "re-he-ra kha-ba-ri",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kulúlu\" in Mijikenda?",
            "correctAnswer": "Alarm",
            "options": [
              "Almighty",
              "Also",
              "Alarm",
              "Amend"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aidímaye kúlla útu\" in Mijikenda?",
            "correctAnswer": "Almighty",
            "options": [
              "Also",
              "Almighty",
              "Amend",
              "Alarm"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka adj.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kahíri\" in Mijikenda?",
            "correctAnswer": "Also",
            "options": [
              "Amend",
              "Also",
              "Alarm",
              "Almighty"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka adv.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Also\" in Mijikenda?",
            "correctAnswer": "kahíri",
            "options": [
              "kulúlu",
              "kahíri",
              "aidímaye kúlla útu",
              "héndă-to"
            ],
            "hint": "Starts with \"ka…\" (6 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Amend\" in Mijikenda?",
            "correctAnswer": "héndă-to",
            "options": [
              "héndă-to",
              "kulúlu",
              "aidímaye kúlla útu",
              "kahíri"
            ],
            "hint": "Starts with \"hé…\" (8 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Mijikenda expression with its English meaning:",
            "correctAnswer": "kulúlu: Alarm",
            "pairs": [
              {
                "left": "kulúlu",
                "right": "Alarm"
              },
              {
                "left": "aidímaye kúlla útu",
                "right": "Almighty"
              },
              {
                "left": "kahíri",
                "right": "Also"
              },
              {
                "left": "héndă-to",
                "right": "Amend"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda term for \"Anger\": ___",
            "correctAnswer": "kóro",
            "options": [
              "kóro",
              "kulúlu",
              "aidímaye kúlla útu",
              "kahíri"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-10",
    "unitNumber": 10,
    "title": "Classical Proverbs, Riddles & Ethnographic Heritage",
    "description": "Master classical proverbs, riddles & ethnographic heritage in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Globe",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-oral-wisdom-literature-proverbs-riddles-10",
        "title": "Traditional Proverbs, Riddles & Aphorisms",
        "icon": "Award",
        "description": "Study verbatim oral wisdom, riddles, and moral aphorisms from the historical collections.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "búma áda",
            "source": "Accustom",
            "pronunciation": "bu-ma ada",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          },
          {
            "target": "loga kua uzáwi",
            "source": "Bewitch",
            "pronunciation": "lo-ga kua u-za-wi",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          },
          {
            "target": "síka",
            "source": "Bury",
            "pronunciation": "si-ka",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          },
          {
            "target": "ada",
            "source": "Custom",
            "pronunciation": "ada",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "zazíga kua ku tína",
            "source": "Dance",
            "pronunciation": "za-zi-ga kua ku ti-na",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. n.)"
          },
          {
            "target": "setáni / pepo",
            "source": "Devil",
            "pronunciation": "se-ta-ni",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "ngóma",
            "source": "Drum",
            "pronunciation": "ngo-ma",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "funga túmmu",
            "source": "Fast",
            "pronunciation": "funga tummu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "nóna",
            "source": "To be fast",
            "pronunciation": "no-na",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"búma áda\" in Mijikenda?",
            "correctAnswer": "Accustom",
            "options": [
              "Bewitch",
              "Bury",
              "Custom",
              "Accustom"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"loga kua uzáwi\" in Mijikenda?",
            "correctAnswer": "Bewitch",
            "options": [
              "Bewitch",
              "Bury",
              "Custom",
              "Accustom"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"síka\" in Mijikenda?",
            "correctAnswer": "Bury",
            "options": [
              "Custom",
              "Accustom",
              "Bewitch",
              "Bury"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bury\" in Mijikenda?",
            "correctAnswer": "síka",
            "options": [
              "búma áda",
              "loga kua uzáwi",
              "ada",
              "síka"
            ],
            "hint": "Starts with \"sí…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Custom\" in Mijikenda?",
            "correctAnswer": "ada",
            "options": [
              "ada",
              "búma áda",
              "loga kua uzáwi",
              "síka"
            ],
            "hint": "Starts with \"ad…\" (3 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Mijikenda expression with its English meaning:",
            "correctAnswer": "búma áda: Accustom",
            "pairs": [
              {
                "left": "búma áda",
                "right": "Accustom"
              },
              {
                "left": "loga kua uzáwi",
                "right": "Bewitch"
              },
              {
                "left": "síka",
                "right": "Bury"
              },
              {
                "left": "ada",
                "right": "Custom"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda term for \"Dance\": ___",
            "correctAnswer": "zazíga kua ku tína",
            "options": [
              "búma áda",
              "loga kua uzáwi",
              "zazíga kua ku tína",
              "funga túmmu"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. n.)"
          }
        ]
      },
      {
        "id": "mijikenda-oral-wisdom-literature-ethnographic-lexicon-10",
        "title": "Customary Law, Rituals & Historical Lexicon",
        "icon": "ShieldCheck",
        "description": "Master specialized cultural, legal, musical, and historical vocabulary.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Mijikenda (Giriama) (Kigiriama) in Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891 Giryama & Aphorisms), Johnston (1919) & Hobley (1922) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kilifi, Kwale, Mombasa.",
        "words": [
          {
            "target": "mbíra",
            "source": "Grave",
            "pronunciation": "mbi-ra",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "táric̣i",
            "source": "History",
            "pronunciation": "ta-rikhi",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "pembe",
            "source": "Horn",
            "pronunciation": "pembe",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "maṣálo / mafóyo",
            "source": "Prayer",
            "pronunciation": "ma-sa-lo",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "ṣála / foya Mulungu",
            "source": "Pray",
            "pronunciation": "sa-la",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          },
          {
            "target": "óga wa Mulungu",
            "source": "Religion",
            "pronunciation": "oga wa mu-lungu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "sádaka",
            "source": "Sacrifice",
            "pronunciation": "sa-da-ka",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "msúnie",
            "source": "Slave",
            "pronunciation": "msu-nie",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "róc̣o",
            "source": "Spirit",
            "pronunciation": "rokho",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mbíra\" in Mijikenda?",
            "correctAnswer": "Grave",
            "options": [
              "History",
              "Grave",
              "Horn",
              "Prayer"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"táric̣i\" in Mijikenda?",
            "correctAnswer": "History",
            "options": [
              "Horn",
              "History",
              "Prayer",
              "Grave"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"pembe\" in Mijikenda?",
            "correctAnswer": "Horn",
            "options": [
              "Horn",
              "Prayer",
              "Grave",
              "History"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Horn\" in Mijikenda?",
            "correctAnswer": "pembe",
            "options": [
              "pembe",
              "mbíra",
              "táric̣i",
              "maṣálo"
            ],
            "hint": "Starts with \"pe…\" (5 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Prayer\" in Mijikenda?",
            "correctAnswer": "maṣálo",
            "options": [
              "mbíra",
              "táric̣i",
              "pembe",
              "maṣálo"
            ],
            "hint": "Starts with \"ma…\" (6 letters)",
            "acceptedAnswers": [
              "maṣálo; mafóyo",
              "maṣálo"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Mijikenda expression with its English meaning:",
            "correctAnswer": "mbíra: Grave",
            "pairs": [
              {
                "left": "mbíra",
                "right": "Grave"
              },
              {
                "left": "táric̣i",
                "right": "History"
              },
              {
                "left": "pembe",
                "right": "Horn"
              },
              {
                "left": "maṣálo / mafóyo",
                "right": "Prayer"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda term for \"Pray\": ___",
            "correctAnswer": "ṣála",
            "options": [
              "mbíra",
              "táric̣i",
              "pembe",
              "ṣála"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)",
            "acceptedAnswers": [
              "ṣála; foya Mulungu",
              "ṣála"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-11",
    "unitNumber": 11,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Mijikenda (Giriama) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-pd-corpus-11-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Mijikenda (Giriama) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Mijikenda (Giriama) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "Be!",
            "source": "Well! (as interjection)",
            "pronunciation": "be",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "imbi",
            "source": "Wave",
            "pronunciation": "imbi",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "muho (river)",
            "source": "Stream",
            "pronunciation": "mu-ho",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "mulungu",
            "source": "Sky",
            "pronunciation": "mu-lungu",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "musasa",
            "source": "Sandpaper-tree",
            "pronunciation": "mu-sa-sa",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "sina (ma-)",
            "source": "Root",
            "pronunciation": "si-na",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "t'ete (pl. mat'ete) / muvungu (bamboo cylinder)",
            "source": "Reed",
            "pronunciation": "t'e-te / mu-vungu",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "kisiki chá wula",
            "source": "Rainbow",
            "pronunciation": "ki-si-ki cha wu-la",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Be!\" in Mijikenda?",
            "correctAnswer": "Well!",
            "options": [
              "Wave",
              "Stream",
              "Sky",
              "Well!"
            ],
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections",
            "acceptedAnswers": [
              "Well! (as interjection)",
              "Well!"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Mijikenda (Giriama) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Be!: Well! (as interjection)",
            "pairs": [
              {
                "left": "Be!",
                "right": "Well! (as interjection)"
              },
              {
                "left": "imbi",
                "right": "Wave"
              },
              {
                "left": "muho (river)",
                "right": "Stream"
              },
              {
                "left": "mulungu",
                "right": "Sky"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda (Giriama) term for \"Sandpaper-tree\": ___",
            "correctAnswer": "musasa",
            "options": [
              "sina",
              "musasa",
              "Be!",
              "imbi"
            ],
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          }
        ]
      },
      {
        "id": "mijikenda-pd-corpus-11-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Mijikenda (Giriama) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Mijikenda (Giriama) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "mulombi",
            "source": "Rain-maker",
            "pronunciation": "mu-lombi",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "t'orove",
            "source": "Mud",
            "pronunciation": "t'o-ro-ve",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "lumele (pl. mele) / lukwasi",
            "source": "Lightning",
            "pronunciation": "lu-me-le / lu-kwa-si",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "ziya (ra)",
            "source": "Lake",
            "pronunciation": "zi-ya",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "m'oho / lufukufuku",
            "source": "Heat",
            "pronunciation": "m'o-ho / lu-fu-ku-fu-ku",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "muungo",
            "source": "Guttapercha tree",
            "pronunciation": "muungo",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "ndzugu-nyasa",
            "source": "Ground-nuts",
            "pronunciation": "ndzugu-nyasa",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "ku-m'-richa hakeye",
            "source": "Desert (to leave alone)",
            "pronunciation": "ku-m'-richa ha-ke-ye",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "weru",
            "source": "Wilderness",
            "pronunciation": "we-ru",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mulombi\" in Mijikenda?",
            "correctAnswer": "Rain-maker",
            "options": [
              "Rain-maker",
              "Mud",
              "Lightning",
              "Lake"
            ],
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Mijikenda (Giriama) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "mulombi: Rain-maker",
            "pairs": [
              {
                "left": "mulombi",
                "right": "Rain-maker"
              },
              {
                "left": "t'orove",
                "right": "Mud"
              },
              {
                "left": "lumele (pl. mele) / lukwasi",
                "right": "Lightning"
              },
              {
                "left": "ziya (ra)",
                "right": "Lake"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda (Giriama) term for \"Heat\": ___",
            "correctAnswer": "m'oho",
            "options": [
              "muungo",
              "mulombi",
              "m'oho",
              "t'orove"
            ],
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections",
            "acceptedAnswers": [
              "m'oho / lufukufuku",
              "m'oho"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-12",
    "unitNumber": 12,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Mijikenda (Giriama) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-open-dataset-12-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "CloudRain",
        "description": "Learn core Mijikenda (Giriama) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Mijikenda (Giriama) dialects and everyday speech.",
        "words": [
          {
            "target": "makala",
            "source": "Charcoal",
            "pronunciation": "ma-ka-la",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "kitsahukuzi",
            "source": "Bush",
            "pronunciation": "kitsa-hu-ku-zi",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "kitsulu",
            "source": "Ant-hill",
            "pronunciation": "kitsu-lu",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          },
          {
            "target": "yonga",
            "source": "to sway, as a tree or branch, with the wind",
            "pronunciation": "yonga",
            "hint": "Krapf & Rebmann (1887) Nika-English Dictionary [v.n.]"
          },
          {
            "target": "usima, uzima",
            "source": "well, whole",
            "pronunciation": "u-si-ma u-zi-ma",
            "hint": "Krapf & Rebmann (1887) Nika-English Dictionary [adj.]"
          },
          {
            "target": "uokófu / réri",
            "source": "Peace",
            "pronunciation": "uokofu"
          },
          {
            "target": "pa mumvéra",
            "source": "Thank",
            "pronunciation": "pa mumvera"
          },
          {
            "target": "baríkia",
            "source": "Bless",
            "pronunciation": "barikia"
          }
        ],
        "sentences": [
          {
            "target": "Makala ga-na-waka moho mudzini.",
            "source": "Charcoal burns with fire in the homestead."
          },
          {
            "target": "Muhi u-na-yonga na pẹho kule kitsahukuzini.",
            "source": "The tree sways in the wind out in the bush."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"makala\" mean in English?",
            "correctAnswer": "Charcoal",
            "options": [
              "Bush",
              "Ant-hill",
              "to sway",
              "Charcoal"
            ],
            "hint": "Core vocabulary in Core Swadesh & Cultural Vocabulary"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Bush\"",
            "correctAnswer": "kitsahukuzi",
            "acceptedAnswers": [
              "kitsahukuzi",
              "kitsahukuzi"
            ],
            "hint": "Starts with \"ki\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kitsulu\"",
            "correctAnswer": "Ant-hill",
            "acceptedAnswers": [
              "Ant-hill",
              "Ant-hill"
            ],
            "hint": "Review Core Swadesh & Cultural Vocabulary"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Core Swadesh & Cultural Vocabulary with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "makala",
                "right": "Charcoal"
              },
              {
                "left": "kitsahukuzi",
                "right": "Bush"
              },
              {
                "left": "kitsulu",
                "right": "Ant-hill"
              },
              {
                "left": "yonga",
                "right": "to sway, as a tree or branch, with the wind"
              },
              {
                "left": "usima, uzima",
                "right": "well, whole"
              }
            ]
          }
        ]
      },
      {
        "id": "mijikenda-open-dataset-12-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Mijikenda (Giriama) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Mijikenda (Giriama) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "susi",
            "source": "wind",
            "pronunciation": "su-si",
            "hint": "Krapf & Rebmann (1887) Nika-English Dictionary [n.]"
          },
          {
            "target": "shidua",
            "source": "to be set on fire",
            "pronunciation": "shi-dua",
            "hint": "Krapf & Rebmann (1887) Nika-English Dictionary [v.p.]"
          },
          {
            "target": "lamusíra / lamúsa",
            "source": "Salute",
            "pronunciation": "lamusira"
          },
          {
            "target": "rija / usíra",
            "source": "Pardon",
            "pronunciation": "ri-ja"
          },
          {
            "target": "erésa / hurira",
            "source": "Please",
            "pronunciation": "eresa"
          },
          {
            "target": "koḥeri",
            "source": "Farewell",
            "pronunciation": "koheri"
          },
          {
            "target": "Kongo! / ku-tsangira",
            "source": "Welcome!",
            "pronunciation": "kongo"
          },
          {
            "target": "Mwadima! Na-m'vera na-we! (also Asante / Ni wega)",
            "source": "Thank you",
            "pronunciation": "mwah-dee-mah nah m-veh-rah nah-weh"
          }
        ],
        "sentences": [
          {
            "target": "At'u a-na-lamusíra wazé kwa dheri.",
            "source": "People salute the elders in peace."
          },
          {
            "target": "N-na-ku-lomba rija, ndugu yangu.",
            "source": "I ask for your pardon, my relative."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"susi\" mean in English?",
            "correctAnswer": "wind",
            "options": [
              "Salute",
              "wind",
              "Pardon",
              "Please"
            ],
            "hint": "Core vocabulary in Agriculture, Community & Everyday Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"to be set on fire\"",
            "correctAnswer": "shidua",
            "acceptedAnswers": [
              "shidua",
              "shidua"
            ],
            "hint": "Starts with \"sh\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"lamusíra\"",
            "correctAnswer": "Salute",
            "acceptedAnswers": [
              "Salute",
              "Salute"
            ],
            "hint": "Review Agriculture, Community & Everyday Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Agriculture, Community & Everyday Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "susi",
                "right": "wind"
              },
              {
                "left": "shidua",
                "right": "to be set on fire"
              },
              {
                "left": "lamusíra",
                "right": "Salute"
              },
              {
                "left": "rija",
                "right": "Pardon"
              },
              {
                "left": "erésa",
                "right": "Please"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-13",
    "unitNumber": 13,
    "title": "1887 Nika Dictionary",
    "description": "Master the 13-stage Mijikenda solar clock (Dzua), the 5 indigenous finger names (Chala), the 7 coconut maturation stages (Pungapunga to Muvala), the 8 palm-tapping steps (Ugema), and Kaya governance from Krapf, Rebmann & Sparshott (1887).",
    "icon": "Sun",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-1887-solar-clock-fingers",
        "title": "13-Stage Solar Clock (Dzua), Night Watches & 5 Finger Names (Chala)",
        "icon": "Clock",
        "description": "Learn how the Mijikenda reckon every hour of the day by the position of the sun (dzua) and cattle-pasturing cycles, alongside the five traditional finger names (Krapf & Rebmann 1887, pp. 20–21, 66, 176).",
        "tips": "In Kinika (Krapf & Rebmann 1887, p. 66), dzua ('sun', Class 5 ri-) takes the perfect prefix ri-dzi- (or ri-dza-) to mark each stage of the solar arc from sunrise (Dzua ridziupuka) to high noon (Dzua ridzifika vidzoani) and sunset (Dzua ridzedzua).",
        "words": [
          {
            "target": "Dzua ridziupuka",
            "source": "Sunrise (6:00 a.m.)",
            "pronunciation": "dzoo-ah ree-dzee-oo-poo-kah",
            "hint": "Stage 1 of the solar day (Krapf & Rebmann 1887, p. 66 s.v. Dzua)"
          },
          {
            "target": "Dzua ridziombola",
            "source": "Sunrise (the sun has come forth, 6:00 a.m.)",
            "pronunciation": "dzoo-ah ree-dzee-ohm-boh-lah",
            "hint": "Stage 1 of the solar day (Krapf & Rebmann 1887, p. 66 s.v. Dzua)"
          },
          {
            "target": "Dzua ridzidana nadzi",
            "source": "Early morning (c. 7:00 a.m. — the sun has parted from the earth)",
            "pronunciation": "dzoo-ah ree-dzee-dah-nah nah-dzee",
            "hint": "Stage 2 of the solar day (Krapf & Rebmann 1887, p. 66)"
          },
          {
            "target": "Dzua ridzifika murauko wa gnombe wegnie",
            "source": "Morning cattle-turning-out time (c. 8:30–9:00 a.m.)",
            "pronunciation": "dzua-ridzifika-murauko-wa",
            "hint": "Stage 4 of the solar day (Krapf & Rebmann 1887, p. 66)"
          },
          {
            "target": "Dzua ridzifika vidzoani (ri-dididi na vidzoa)",
            "source": "High noon (12:00 p.m. — the sun is perpendicular overhead)",
            "pronunciation": "dzoo-ah ree-dzee-fee-kah vee-dzoh-ah-nee",
            "hint": "Stage 7 of the solar day (Krapf & Rebmann 1887, p. 66)"
          },
          {
            "target": "Dzua ridziogoka",
            "source": "Early afternoon (1:00 p.m.)",
            "pronunciation": "dzoo-ah ree-dzee-oh-goh-kah",
            "hint": "Stages 8 & 11 of the solar day (Krapf & Rebmann 1887, p. 66)"
          },
          {
            "target": "Dzua ridzifika lua mudzana lua ku vola",
            "source": "Cool of the late afternoon (4:00 p.m.)",
            "pronunciation": "dzoo-ah ree-dzee-fee-kah loo-ah moo-dzah-nah",
            "hint": "Stages 8 & 11 of the solar day (Krapf & Rebmann 1887, p. 66)"
          },
          {
            "target": "Dzua ridzibodoka",
            "source": "Sunset (6:00 p.m.)",
            "pronunciation": "dzoo-ah ree-dzee-boh-doh-kah",
            "hint": "Stage 13 of the solar day (Krapf & Rebmann 1887, p. 66)"
          },
          {
            "target": "Dzua ridzedzua",
            "source": "Sunset (the sun has set, 6:00 p.m.)",
            "pronunciation": "dzoo-ah ree-dzeh-dzoo-ah",
            "hint": "Stage 13 of the solar day (Krapf & Rebmann 1887, p. 66)"
          },
          {
            "target": "Chala cha dzalagumba",
            "source": "Thumb (1st finger)",
            "pronunciation": "chah-lah chah dzah-lah-goom-bah",
            "hint": "Krapf & Rebmann (1887, pp. 20–21 s.v. Chala)"
          },
          {
            "target": "Chala cha muoloho",
            "source": "Forefinger or pointing finger (2nd finger)",
            "pronunciation": "chah-lah chah mwoh-loh-hoh",
            "hint": "Krapf & Rebmann (1887, pp. 20–21 s.v. Chala)"
          },
          {
            "target": "Chala kibomu",
            "source": "Middle finger (3rd)",
            "pronunciation": "chah-lah kee-boh-moo",
            "hint": "Krapf & Rebmann (1887, p. 21 s.v. Chala)"
          },
          {
            "target": "Chala kisicho dzina",
            "source": "Ring finger ('nameless finger', 4th)",
            "pronunciation": "chah-lah kee-see-choh dzee-nah",
            "hint": "Krapf & Rebmann (1887, p. 21 s.v. Chala)"
          },
          {
            "target": "Chala cha kanda",
            "source": "Little finger (5th)",
            "pronunciation": "chah-lah chah kahn-dah",
            "hint": "Krapf & Rebmann (1887, p. 21 s.v. Chala)"
          }
        ],
        "sentences": [
          {
            "target": "Dzua ridzifika vidzoani, ri-dididi na vidzoa.",
            "source": "The sun has reached the crown of the head; it is right overhead (high noon)."
          },
          {
            "target": "Kipindi cha kuika madzogolo ga mbele ni usiku.",
            "source": "The watch of the first cock-crowing is in the night."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "How do the Mijikenda express 'High noon (12:00 p.m. — the sun is perpendicular overhead)' in Krapf & Rebmann (1887, p. 66)?",
            "correctAnswer": "Dzua ridzifika vidzoani",
            "options": [
              "Chala cha dzalagumba",
              "Chala kibomu",
              "Dzua ridzifika vidzoani",
              "Dzua ridziupuka"
            ],
            "hint": "Literally: the sun has reached the crowns of the heads (vidzoani)",
            "acceptedAnswers": [
              "Dzua ridzifika vidzoani (ri-dididi na vidzoa)",
              "Dzua ridzifika vidzoani"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the literal meaning of the Mijikenda name for the ring finger, 'Chala kisicho dzina' (Krapf & Rebmann 1887, p. 21)?",
            "correctAnswer": "The finger that has no name",
            "options": [
              "Dzua ridzifika murauko wa gnombe wegnie",
              "Dzua ridziupuka",
              "The finger that has no name",
              "Dzua ridziombola"
            ],
            "hint": "kisicho = which has not; dzina = name"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Mijikenda solar timekeeping or finger expression (Krapf & Rebmann 1887) with its English meaning:",
            "correctAnswer": "Dzua ridziupuka: Sunrise (6:00 a.m.)",
            "pairs": [
              {
                "left": "Dzua ridziupuka",
                "right": "Sunrise (6:00 a.m.)"
              },
              {
                "left": "Dzua ridzifika vidzoani",
                "right": "High noon (12:00 p.m.)"
              },
              {
                "left": "Dzua ridzedzua",
                "right": "Sunset (6:00 p.m.)"
              },
              {
                "left": "Chala cha muoloho",
                "right": "Forefinger (pointing finger)"
              }
            ]
          }
        ]
      },
      {
        "id": "mijikenda-1887-kaya-coconuts-ugema",
        "title": "Kaya Architecture (Mumfiria, M'oro, Rungu) & Coconut Stages",
        "icon": "TreePine",
        "description": "Explore the three defining institutions of a Mijikenda Kaya, the 7 stages of coconut maturation (Pungapunga to Muvala), the 8 stages of palm-wine tapping (Dangadza), and the 8 stages of child motor development (Koko).",
        "tips": "As recorded by Krapf & Rebmann (1887, p. 259 s.v. M'oro), a settlement without a fortified gate (mumfiria), central council green (m'oro), and sacred elders' lodge (rungu) is called merely a mudzi ('village'), never a kaya.",
        "words": [
          {
            "target": "Mumfiria",
            "source": "Fortified narrow Kaya gate",
            "pronunciation": "mumfiria"
          },
          {
            "target": "M'oro",
            "source": "Central council green",
            "pronunciation": "m'oro"
          },
          {
            "target": "Rungu",
            "source": "Sacred elders' lodge",
            "pronunciation": "rungu"
          },
          {
            "target": "Ugnaro (men) & Gundi (women)",
            "source": "Youth initiation into Kambi",
            "pronunciation": "ugnaro-gundi"
          },
          {
            "target": "Ku thura (Mumondo → Govu)",
            "source": "Highest elder investiture conferring the lumfo armlet",
            "pronunciation": "ku-thura"
          },
          {
            "target": "Pungapunga → Kidagna → Kidale → Dafu → Koloma → Nazi → Muvala",
            "source": "7 stages of coconut maturation from embryo bud to ripe nut (nazi) and dried copra (muvala)",
            "pronunciation": "pungapunga-kidagna-kidale-dafu",
            "hint": "Krapf & Rebmann (1887, p. 325 s.v. Pungapunga)"
          },
          {
            "target": "Nafunga vanda → Nadangadza muanso → Nakueza vibaria → N'enda nikageme",
            "source": "Cutting trunk notches → Stripping/binding the spadix → Hanging calabashes → Tapping",
            "pronunciation": "nah-foon-gah vahn-dah • nah-dahn-gah-dzah mwahn-soh",
            "hint": "8-stage palm-wine tapping sequence (Krapf & Rebmann 1887, p. 35 s.v. Dangadza)"
          },
          {
            "target": "Muhoho yunasagala → yunahambala → yunaima koko → yunasukula → yunapiga malo",
            "source": "The child sits → crawls → stands alone (koko!) → totters (suku-suku) → runs swiftly",
            "pronunciation": "moo-hoh-hoh yoo-nah-sah-gah-lah • yoo-nah-ee-mah koh-koh",
            "hint": "8-stage child development sequence (Krapf & Rebmann 1887, p. 188 s.v. Koko)"
          }
        ],
        "sentences": [
          {
            "target": "M'oro mudzo ka-u-lavia dzua.",
            "source": "A good council speech does not bring out the sun (it settles the matter early)."
          },
          {
            "target": "Bandu na bandu ya mala gogo.",
            "source": "Chip by chip finishes the log."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each stage of coconut maturation (Krapf & Rebmann 1887, p. 325) with its meaning:",
            "correctAnswer": "Pungapunga: Stage 1 — Embryo flower-bud on the spadix",
            "pairs": [
              {
                "left": "Pungapunga",
                "right": "Stage 1 — Embryo flower-bud on the spadix"
              },
              {
                "left": "Dafu",
                "right": "Stage 4 — Half-grown green coconut full of sweet water"
              },
              {
                "left": "Nazi",
                "right": "Stage 6 — Fully ripe coconut used for coconut milk (tui)"
              },
              {
                "left": "Muvala",
                "right": "Stage 7 — Completely dried copra coconut"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-14",
    "unitNumber": 14,
    "title": "1887 Nika Dictionary II",
    "description": "Master the 6 answer verbs, 7 harvesting verbs, 4 pounding verbs, 12-class Na- pronouns, teknonymy (Abe-/Mayo-), 9 Kibaria calabashes, 6 Kiravo ordeals, Kore blood-money, 5 Mulungu prayers, and 3 fables from Krapf, Rebmann & Sparshott (1887).",
    "icon": "BookOpen",
    "color": "#0D9488",
    "skills": [
      {
        "id": "mijikenda-1887-verbs-pronouns-kinship",
        "title": "6 Answer Verbs, 7 Harvesting Verbs, 12-Class Na- Table & Teknonymy",
        "icon": "Languages",
        "description": "Learn the grammatical and lexical distinctions among Mijikenda answer, harvesting, and pounding verbs, the 12-class Na- pronominal table, and teknonymic kinship from Krapf, Rebmann & Sparshott (1887, pp. 1, 72–73, 93, 126, 297, 384).",
        "tips": "In Kinika (p. 126 s.v. Hongoza), three verbs for 'to answer' (ku hongoza, ku runga, ku shudia) are used strictly in negative clauses ('he did not answer a word'), whereas ku lungukiza, ku udzikiza, and ku udzira are used in both affirmative and negative clauses.",
        "words": [
          {
            "target": "Ku hongoza, Ku runga, Ku shudia (neg.) vs. Ku lungukiza, Ku udzikiza, Ku udzira",
            "source": "3 negative-only verbs for 'to answer' vs. 3 affirmative & negative verbs for 'to answer'",
            "pronunciation": "koo hohn-goh-zah / koo loon-goo-kee-zah",
            "hint": "Krapf, Rebmann & Sparshott (1887, p. 126 s.v. Hongoza)"
          },
          {
            "target": "Ku funa",
            "source": "To reap grain stalks (harvesting)",
            "pronunciation": "ku-funa"
          },
          {
            "target": "Ku guha",
            "source": "To break maize cobs",
            "pronunciation": "ku-guha"
          },
          {
            "target": "Ku tola",
            "source": "To pick bean pods",
            "pronunciation": "ku-tola"
          },
          {
            "target": "Ku poa",
            "source": "To thresh pods",
            "pronunciation": "ku-poa"
          },
          {
            "target": "Ku hunda",
            "source": "To pluck fruit",
            "pronunciation": "ku-hunda"
          },
          {
            "target": "Ku kwachula",
            "source": "To strip clusters",
            "pronunciation": "ku-kwachula"
          },
          {
            "target": "Ku kopa",
            "source": "To cut palm fronds/bunches",
            "pronunciation": "ku-kopa"
          },
          {
            "target": "Ku bonda",
            "source": "To mash soft food (pounding)",
            "pronunciation": "ku-bonda"
          },
          {
            "target": "Ku vonda",
            "source": "First husking pound of grain",
            "pronunciation": "ku-vonda"
          },
          {
            "target": "Ku huaga",
            "source": "Second cleaning pound of grain",
            "pronunciation": "ku-huaga"
          },
          {
            "target": "Ku pura",
            "source": "Final flour pounding",
            "pronunciation": "ku-pura"
          },
          {
            "target": "Na-ga/Na-go (Cl. 6)",
            "source": "Class-concordant 'also / and it / with it' pronouns across the 12 noun classes",
            "pronunciation": "na-ga",
            "hint": "12-class Na- table in Krapf, Rebmann & Sparshott (1887, p. 297 s.v. Na)"
          },
          {
            "target": "Abe-Gunja",
            "source": "Father-of-Gunja (teknonym)",
            "pronunciation": "abe-gunja"
          },
          {
            "target": "Avu",
            "source": "Maternal uncle",
            "pronunciation": "avu"
          },
          {
            "target": "Dzangasimi",
            "source": "Paternal aunt",
            "pronunciation": "dzangasimi"
          },
          {
            "target": "Muhua",
            "source": "Sister's child",
            "pronunciation": "muhua"
          },
          {
            "target": "Mukoi",
            "source": "Cross-cousin (child of avu)",
            "pronunciation": "mukoi"
          }
        ],
        "sentences": [
          {
            "target": "N'enda rima mundani; enda ukarime nawe!",
            "source": "I am going to cultivate in the garden; go and cultivate thou also! (Syntax of ku enda, p. 73)."
          },
          {
            "target": "Nimuudzisa, ela kahongoza neno.",
            "source": "I asked him, but he did not answer a word. (Negative-only ku hongoza, p. 126)."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each Mijikenda kinship or pounding term (Krapf, Rebmann & Sparshott 1887) with its exact meaning:",
            "correctAnswer": "Avu: Maternal uncle (mother's brother, p. 9)",
            "pairs": [
              {
                "left": "Avu",
                "right": "Maternal uncle (mother's brother, p. 9)"
              },
              {
                "left": "Dzangasimi",
                "right": "Paternal aunt (father's sister, p. 57)"
              },
              {
                "left": "Ku vonda",
                "right": "First pounding of corn to loosen the husk (p. 384)"
              },
              {
                "left": "Ku huaga",
                "right": "Second pounding of corn to clean the grain (p. 127)"
              }
            ]
          }
        ]
      },
      {
        "id": "mijikenda-1887-ordeals-prayers-fables",
        "title": "6 Kiravo Ordeals, Kore Blood-Money, 9 Calabashes & Mulungu Prayers",
        "icon": "Scale",
        "description": "Explore Mijikenda customary law (6 Kiravo ordeals, Kore blood-money, Ku funsa chala), the 9 Kibaria calabash sizes, the 5 prayers to Mulungu, and the 3 fables in Krapf, Rebmann & Sparshott (1887).",
        "tips": "In Mijikenda customary jurisprudence (p. 192 s.v. Kore), intentional murder required two anafiale (a youth and a maiden) to replace the victim's kifurifuri ('shadow'), whereas accidental homicide (kua zani, p. 339) required one kore.",
        "words": [
          {
            "target": "Kiravo cha mukate",
            "source": "Ordeal of the poisoned bread (kikahe) and the 6 Mijikenda judicial ordeals",
            "pronunciation": "kiravo-cha-mukate"
          },
          {
            "target": "Kore",
            "source": "Blood-money compensation",
            "pronunciation": "kore"
          },
          {
            "target": "Ku funsa chala",
            "source": "Bending a finger to forgive twice before fighting on the 3rd offence",
            "pronunciation": "ku-funsa-chala"
          },
          {
            "target": "Kibaria → Kirea → Tumbi → Ndzoma → Ndundu → Kipazi → Muvunda → M'ololo → Dunda",
            "source": "9 graded sizes of calabashes from the smallest palm-tapping gourd (kibaria) to the largest storage gourd",
            "pronunciation": "kibaria-kirea-tumbi-ndzoma",
            "hint": "Krapf, Rebmann & Sparshott (1887, pp. 151–152 s.v. Kibaria)"
          },
          {
            "target": "Similani kambi! — Hai!",
            "source": "Give ear, O council! — Aye!",
            "pronunciation": "similani-kambi-hai"
          },
          {
            "target": "Kula Abegnania! — Hosi nahu kule!",
            "source": "May Father-of-So-and-so live long! — May we all live long! (M'oro assembly formulas)",
            "pronunciation": "kula-abegnania-hosi-nahu"
          },
          {
            "target": "Nundu",
            "source": "Sacred bat of the Kaya (kifudu emblem)",
            "pronunciation": "nundu"
          }
        ],
        "sentences": [
          {
            "target": "We Mulungu, muinulire mukongo wehu, apate ku lola dzua!",
            "source": "O Mulungu (God), raise up our sick one, that he may behold the sun! (Prayer on p. 284)."
          },
          {
            "target": "Similani kambi! — Hai! Kula Abegnania! — Hosi nahu kule!",
            "source": "Give ear, O council! — Aye! May Father-of-So-and-so live long! — May we all live long! (pp. 259–260, 347)."
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-15",
    "unitNumber": 15,
    "title": "Digo (Chidigo) Information Structure",
    "description": "Master Steve Nicolle's (2016, Ch. 20, pp. 377–395) corpus analysis of Digo ([dig] E73, Kwale District, Kenya, 864 clauses) and 10 other Eastern Bantu languages across topic dislocation, clefted subject focus, and VS thetic sentences.",
    "icon": "BookOpen",
    "color": "#059669",
    "skills": [
      {
        "id": "mijikenda-nicolle-2016-15-1-digo-topic-focus-thetic",
        "title": "Digo Topic Dislocation, Clefted Subject Focus & VS Thetic Clauses",
        "icon": "MessageSquare",
        "description": "Practice the exact Digo oral narrative sentences from Nicolle (2016, Ch. 20, Ex. 2–3, 7–8, 11, 22, 25) alongside comparative Suba-Simbiti ([ssc] EJ403) patterns.",
        "tips": "In Digo ([dig] E73), left-dislocated object topics trigger an object prefix on the verb ([Barabara] ndipho [a-ka-i-rich-a], Ex. 2), whereas topicalized objects omit the object prefix when the verb is focused ([Pesa] sino [hu-na-Ø-hew-a], Ex. 3). Continued subject topics are left-dislocated across a paragraph break (Ex. 8) but right-dislocated within a paragraph (Lakini [achinyamala] [mutu yuyu], Ex. 11). Post-verbal subjects in Digo are never focal—subject focus requires a cleft (iye ndi=ye..., Ex. 22), and thetic sentences are strictly VS (ratuluka fisi, Ex. 25).",
        "words": [
          {
            "target": "[Barabara]_TOPIC ndipho [a-ka-i-rich-a]_COMMENT",
            "source": "The main road, that is when he left it",
            "pronunciation": "ba-ra-ba-ra ndi-pho a-ka-i-ri-cha"
          },
          {
            "target": "[Pesa]_TOPIC sino [hu-na-Ø-hew-a]_COMMENT",
            "source": "That money, we have been given [it]",
            "pronunciation": "pe-sa si-no hu-na-he-wa"
          },
          {
            "target": "ela [go mafuha ga taa]_TOPIC ndo [n’yarya?]_COMMENT",
            "source": "but that lamp oil, what was it? (switch topic)",
            "pronunciation": "e-la go ma-fu-ha ga taa ndo nya-rya"
          },
          {
            "target": "Lakini [achinyamala]_COMMENT [mutu yuyu]_TOPIC wala kayagomba na mutu",
            "source": "However, he kept quiet, this person, and didn't speak with anyone",
            "pronunciation": "la-ki-ni a-chi-nya-ma-la mu-tu yu-yu",
            "hint": "Nicolle (2016, Ch. 20, p. 383, Ex. 11)"
          },
          {
            "target": "Ndipho atu achimanya kukala [iye]_FOCUS [ndi=ye ariyehenda mambo gano]",
            "source": "That is when people knew that [it was] he [who did these things]",
            "pronunciation": "ndi-pho a-tu a-chi-ma-nya ku-ka-la i-ye",
            "hint": "Nicolle (2016, Ch. 20, p. 388, Ex. 22)"
          },
          {
            "target": "Phahi rero, chisha chindi, [ratuluka] [fisi], rina chitswa dza cha mutu",
            "source": "Then today, after a short time, out came a giant hyena, having a head like a person's",
            "pronunciation": "ra-tu-lu-ka fi-si ri-na chi-tswa dza cha mu-tu",
            "hint": "Nicolle (2016, Ch. 20, p. 390, Ex. 25)"
          }
        ],
        "sentences": [
          {
            "target": "Lakini achinyamala mutu yuyu wala kayagomba na mutu",
            "source": "However, this person kept quiet and didn't speak with anyone."
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-16",
    "unitNumber": 16,
    "title": "Kigiryama Agriculture & Homestead Life",
    "description": "Curated Kigiryama farming, irrigation, and natural-world vocabulary from the Lingua-Connect English–Giriama Corpus",
    "icon": "Sprout",
    "color": "#D97706",
    "skills": [
      {
        "id": "mijikenda-open-skill-1",
        "title": "Farming, Harvest & Coastal Nature",
        "icon": "Leaf",
        "description": "Agricultural extension terms and everyday Kigiryama nouns",
        "grammarTip": "In Kigiryama, locative and genitive phrases use 'wa / za / cha' agreeing with the head noun class (e.g., mwambolero wa dzuwa 'sunrise / east', uchi wa nyuchi 'wild bee honey').",
        "culturalNote": "Sourced from the Lingua-Connect/English-Giriama-Dataset (2025, CC-BY-4.0).",
        "words": [
          {
            "target": "mudzi",
            "source": "Town, village, or homestead (pl. midzi)",
            "pronunciation": "mu-dzi"
          },
          {
            "target": "mwambolero wa dzuwa",
            "source": "East / sunrise",
            "pronunciation": "mwa-mbo-le-ro wa dzu-wa"
          },
          {
            "target": "muho",
            "source": "River",
            "pronunciation": "mu-ho"
          },
          {
            "target": "ziya",
            "source": "Lake or sea",
            "pronunciation": "zi-ya"
          },
          {
            "target": "avuhi",
            "source": "Fishermen",
            "pronunciation": "a-vu-hi"
          },
          {
            "target": "vimia",
            "source": "Fishing nets",
            "pronunciation": "vi-mi-a"
          },
          {
            "target": "lungo",
            "source": "Winnowing tray",
            "pronunciation": "lu-ngo"
          },
          {
            "target": "lutsaga",
            "source": "Granary or corn barn",
            "pronunciation": "lu-tsa-ga"
          },
          {
            "target": "uchi wa nyuchi",
            "source": "Wild bee honey",
            "pronunciation": "u-chi wa nyu-chi"
          },
          {
            "target": "matunda madzo",
            "source": "Good fruits",
            "pronunciation": "ma-tu-nda ma-dzo"
          }
        ],
        "sentences": [
          {
            "target": "Mihogo chikala kinywe chingonji.",
            "source": "The crops need to be watered."
          }
        ]
      },
      {
        "id": "mijikenda-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Mijikenda (Giriama) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "Lingua-Connect English–Giriama Dataset (CC-BY-4.0), Language Science Press Digo/Mijikenda Corpus (Nicolle 2016, CC-BY-4.0), CLDF ASJP v20 GIRYAMA/DIGO & BantuBVD (CC-BY-4.0), SIL Bloom Mijikenda CC-BY-4.0 & Public Domain & Academic Lexicons (Krapf 1850/1882, Krapf, Rebmann & Sparshott 1887, Taylor 1891, Werner 1915, Johnston 1919, BFBS 1921 & Nicolle 2016).",
        "words": [
          {
            "target": "Dheri",
            "source": "Peace",
            "pronunciation": "dheh-ree"
          },
          {
            "target": "lamúsa",
            "source": "Greet",
            "pronunciation": "lamusa"
          },
          {
            "target": "pa mumvéra",
            "source": "Thank",
            "pronunciation": "pa mumvera"
          },
          {
            "target": "baríkia",
            "source": "Bless",
            "pronunciation": "barikia"
          },
          {
            "target": "lamusíra",
            "source": "Salute",
            "pronunciation": "lamusira"
          },
          {
            "target": "rija",
            "source": "Pardon",
            "pronunciation": "ri-ja"
          },
          {
            "target": "erésa",
            "source": "Please",
            "pronunciation": "eresa"
          },
          {
            "target": "koḥeri",
            "source": "Farewell",
            "pronunciation": "koheri"
          },
          {
            "target": "Kongo!",
            "source": "Welcome!",
            "pronunciation": "kongo"
          },
          {
            "target": "ku-mu-laga",
            "source": "Farewell (to bid)",
            "pronunciation": "ku mu la-ga"
          }
        ],
        "sentences": [
          {
            "target": "Mwadima! Na-m'vera na-we!",
            "source": "Thank you."
          },
          {
            "target": "Udzalamuka dze?",
            "source": "How are you this morning? (Kigiryama)."
          },
          {
            "target": "pa mumvéra",
            "source": "To give thanks."
          }
        ]
      },
      {
        "id": "mijikenda-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Mijikenda (Giriama) sentences for healthcare, transport, and community safety.",
        "culturalNote": "Lingua-Connect English–Giriama Dataset (CC-BY-4.0), Language Science Press Digo/Mijikenda Corpus (Nicolle 2016, CC-BY-4.0), CLDF ASJP v20 GIRYAMA/DIGO & BantuBVD (CC-BY-4.0), SIL Bloom Mijikenda CC-BY-4.0 & Public Domain & Academic Lexicons (Krapf 1850/1882, Krapf, Rebmann & Sparshott 1887, Taylor 1891, Werner 1915, Johnston 1919, BFBS 1921 & Nicolle 2016).",
        "words": [
          {
            "target": "handahu",
            "source": "Six",
            "pronunciation": "hahn-dah-hoo"
          },
          {
            "target": "mwenga",
            "source": "One",
            "pronunciation": "mwenga / mo-si"
          },
          {
            "target": "hiri",
            "source": "Two",
            "pronunciation": "hee-ree / mbee-ree"
          },
          {
            "target": "ikumi",
            "source": "Ten",
            "pronunciation": "i-ku-mi / ku-mi"
          },
          {
            "target": "chenda",
            "source": "Nine",
            "pronunciation": "chehn-dah"
          },
          {
            "target": "nne",
            "source": "Four",
            "pronunciation": "nne"
          },
          {
            "target": "tsano",
            "source": "Five",
            "pronunciation": "tsah-noh / ts'ah-noh"
          },
          {
            "target": "kána mmenga",
            "source": "Once",
            "pronunciation": "kana mmenga"
          },
          {
            "target": "aïri",
            "source": "Both",
            "pronunciation": "airi"
          },
          {
            "target": "hnane",
            "source": "Eight",
            "pronunciation": "hnah-neh / nah-neh"
          }
        ],
        "sentences": []
      }
    ]
  }
];
