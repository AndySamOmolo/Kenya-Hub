import type { CourseUnit, LanguageConfig } from "../types";

// ============================================================
// Mijikenda (Kigiryama / Chidigo (Midzi Chenda)) Language Course Configuration & Units
// Declarative modular course definition (audit-ready, zero runtime mutations)
// ============================================================

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
    "title": "Unit 1: Sacred Kaya Heritage, Sabaki Nouns & W. E. Taylor (1891) Riddles",
    "description": "Learn Kigiryama, Kirabai, and Chidigo nouns, numerals, verbs, and 1891 riddles and folktales from W. E. Taylor and Krapf & Rebmann (1887).",
    "icon": "BookOpen",
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
            "target": "mwalume (pl. alume) / muche (pl. ache)",
            "source": "man / woman",
            "pronunciation": "mwa-lu-me / muche",
            "hint": "W. E. Taylor (1891)"
          },
          {
            "target": "madzi / moho",
            "source": "water / fire",
            "pronunciation": "madzi / mo-ho",
            "hint": "Krapf (1850), Krapf & Rebmann (1887), & Taylor (1891)"
          },
          {
            "target": "dziwe (pl. mawe) / dzua",
            "source": "stone (pl. stones) / sun",
            "pronunciation": "dzi-we / dzua",
            "hint": "Class 5 dzi-"
          },
          {
            "target": "Mulungu",
            "source": "God, Supreme Creator",
            "pronunciation": "mu-lungu",
            "hint": "Taylor (1891, p. 90) & Krapf & Rebmann (1887)"
          },
          {
            "target": "chakurya / wari",
            "source": "food / cooked cornmeal (ugali)",
            "pronunciation": "cha-kurya / wa-ri",
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
            "source": "We are three men; when one goes away, we eat no cornmeal. It is the three hearthstones (Taylor 1891)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Midzi Chenda\" in Mijikenda?",
            "correctAnswer": "The Nine Homesteads / Mijikenda",
            "options": [
              "sacred fortified forest homestead",
              "Ruling council of elders & initiation degrees",
              "person (pl. people)",
              "The Nine Homesteads / Mijikenda"
            ],
            "hint": "midzi (villages) + chenda (nine)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kaya (pl. makaya)\" in Mijikenda?",
            "correctAnswer": "sacred fortified forest homestead",
            "options": [
              "Ruling council of elders & initiation degrees",
              "person (pl. people)",
              "sacred fortified forest homestead",
              "The Nine Homesteads / Mijikenda"
            ],
            "hint": "Taylor (1891) & Krapf & Rebmann (1887)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"K'ambi / Habasi (Vaya, Fisi, Enye-ts'i)\" in Mijikenda?",
            "correctAnswer": "Ruling council of elders & initiation degrees",
            "options": [
              "person (pl. people)",
              "Ruling council of elders & initiation degrees",
              "The Nine Homesteads / Mijikenda",
              "sacred fortified forest homestead"
            ],
            "hint": "W. E. Taylor (1891, p. 43) Giriama governance"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ruling council of elders & initiation degrees\" in Mijikenda?",
            "correctAnswer": "K'ambi / Habasi (Vaya, Fisi, Enye-ts'i)",
            "options": [
              "K'ambi / Habasi (Vaya, Fisi, Enye-ts'i)",
              "Midzi Chenda",
              "kaya (pl. makaya)",
              "mut'u (pl. at'u)"
            ],
            "hint": "kahm-bee / hah-bah-see"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"person (pl. people)\" in Mijikenda?",
            "correctAnswer": "mut'u (pl. at'u)",
            "options": [
              "Midzi Chenda",
              "kaya (pl. makaya)",
              "K'ambi / Habasi (Vaya, Fisi, Enye-ts'i)",
              "mut'u (pl. at'u)"
            ],
            "hint": "moo-too / ah-too"
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
            "prompt": "Complete the Mijikenda term for \"man / woman\": ___",
            "correctAnswer": "mwalume (pl. alume) / muche (pl. ache)",
            "options": [
              "Midzi Chenda",
              "kaya (pl. makaya)",
              "K'ambi / Habasi (Vaya, Fisi, Enye-ts'i)",
              "mwalume (pl. alume) / muche (pl. ache)"
            ],
            "hint": "W. E. Taylor (1891)"
          }
        ]
      },
      {
        "id": "mijikenda-verbs-folklore",
        "title": "Kigiryama Verbs, Numerals, 4-Day Week & Taylor (1891) Proverbs & Folktales",
        "icon": "Scale",
        "description": "Learn Mijikenda action verbs, numbers, traditional 4-day market week, proverbs, and folktale characters from W. E. Taylor (1891).",
        "tips": "W. E. Taylor (1891, p. 78) documents the traditional 4-day Giriama week (Jumwa, Kuramuka, Kurima-hiri, Kuisa), 5 folktales starring Katsungula (the Little Hare), 22 riddles, and 64 Giryama/Nyika proverbs.",
        "words": [
          {
            "target": "katsungula / simba / fisi",
            "source": "little hare / lion / hyena",
            "pronunciation": "katsungu-la / simba / fi-si",
            "hint": "W. E. Taylor (1891) folktale characters"
          },
          {
            "target": "mumwenga",
            "source": "One (1)",
            "pronunciation": "mumwenga mai-ri a-ha-hu an-ne atsa-no handa-hu funga-he na-ne chenda ku-mi",
            "hint": "Mijikenda numerals 1–10 (Taylor 1891 & Krapf 1887)"
          },
          {
            "target": "mairi",
            "source": "Two (2)",
            "pronunciation": "mumwenga mai-ri a-ha-hu an-ne atsa-no handa-hu funga-he na-ne chenda ku-mi",
            "hint": "Mijikenda numerals 1–10 (Taylor 1891 & Krapf 1887)"
          },
          {
            "target": "ahahu",
            "source": "Three (3)",
            "pronunciation": "mumwenga mai-ri a-ha-hu an-ne atsa-no handa-hu funga-he na-ne chenda ku-mi",
            "hint": "Mijikenda numerals 1–10 (Taylor 1891 & Krapf 1887)"
          },
          {
            "target": "Jumwa, Kuramuka, Kurima-hiri, Kuisa",
            "source": "The traditional 4-day Giriama week (rest day, 1st, 2nd, and 3rd cultivating days)",
            "pronunciation": "jumwa ku-ra-mu-ka kurima-hiri kui-sa",
            "hint": "W. E. Taylor (1891, p. 78 under Moon)"
          },
          {
            "target": "kurya / kugit'ira",
            "source": "to eat / to cook",
            "pronunciation": "kurya / ku-git'i-ra",
            "hint": "Taylor (1891, p. 138)"
          },
          {
            "target": "kugula / kuguza",
            "source": "to buy / to sell",
            "pronunciation": "ku-gu-la / ku-gu-za",
            "hint": "Krapf & Rebmann (1887) & Taylor (1891)"
          },
          {
            "target": "Bandzu, bandzu rámala gogo (#602) • Chuwo k'akina mumwenga (#602a)",
            "source": "Chip, chip finished the block • Counsel is not of one alone (Taylor 1891)",
            "pronunciation": "bandzu bandzu ra-ma-la go-go • chu-wo k'a-ki-na mumwenga",
            "hint": "W. E. Taylor (1891, p. 136, Giryama Proverbs #602 & #602a)"
          },
          {
            "target": "K'akilumika. Ni kikokora.",
            "source": "It cannot be bitten. It is the elbow (Taylor 1891 Riddle #8)",
            "pronunciation": "k'a-ki-lu-mi-ka ni ki-ko-ko-ra",
            "hint": "kikokora = elbow"
          },
          {
            "target": "Magoma mairi lwanda-ni. Ni mahombo.",
            "source": "Two cows, in the open field. — It is the breasts / maternal nourishment (Taylor 1891 Riddle #18)",
            "pronunciation": "ma-go-ma mai-ri lwanda-ni ni ma-hombo",
            "hint": "lwanda-ni = in the open field"
          }
        ],
        "sentences": [
          {
            "target": "Katsungula na Simba; Fisi na Simba na Katsungula.",
            "source": "The Little Hare and the Lion; The Hyena, the Lion, and the Little Hare (Taylor 1891)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"katsungula / simba / fisi\" in Mijikenda?",
            "correctAnswer": "little hare / lion / hyena",
            "options": [
              "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
              "The traditional 4-day Giriama week (rest day, 1st, 2nd, and 3rd cultivating days)",
              "to eat / to cook",
              "little hare / lion / hyena"
            ],
            "hint": "W. E. Taylor (1891) folktale characters"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mumwenga, mairi, ahahu, an-ne, atsano, handahu, fungahe, nane, chenda, kumi\" in Mijikenda?",
            "correctAnswer": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
            "options": [
              "The traditional 4-day Giriama week (rest day, 1st, 2nd, and 3rd cultivating days)",
              "to eat / to cook",
              "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
              "little hare / lion / hyena"
            ],
            "hint": "Mijikenda numerals 1–10 (Taylor 1891 & Krapf 1887)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Jumwa, Kuramuka, Kurima-hiri, Kuisa\" in Mijikenda?",
            "correctAnswer": "The traditional 4-day Giriama week (rest day, 1st, 2nd, and 3rd cultivating days)",
            "options": [
              "to eat / to cook",
              "The traditional 4-day Giriama week (rest day, 1st, 2nd, and 3rd cultivating days)",
              "little hare / lion / hyena",
              "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
            ],
            "hint": "W. E. Taylor (1891, p. 78 under Moon)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"The traditional 4-day Giriama week (rest day, 1st, 2nd, and 3rd cultivating days)\" in Mijikenda?",
            "correctAnswer": "Jumwa, Kuramuka, Kurima-hiri, Kuisa",
            "options": [
              "Jumwa, Kuramuka, Kurima-hiri, Kuisa",
              "katsungula / simba / fisi",
              "mumwenga, mairi, ahahu, an-ne, atsano, handahu, fungahe, nane, chenda, kumi",
              "kurya / kugit'ira"
            ],
            "hint": "joom-wah, koo-rah-moo-kah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"to eat / to cook\" in Mijikenda?",
            "correctAnswer": "kurya / kugit'ira",
            "options": [
              "katsungula / simba / fisi",
              "mumwenga, mairi, ahahu, an-ne, atsano, handahu, fungahe, nane, chenda, kumi",
              "Jumwa, Kuramuka, Kurima-hiri, Kuisa",
              "kurya / kugit'ira"
            ],
            "hint": "koo-ryah / koo-gee-tee-rah"
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
                "left": "mumwenga, mairi, ahahu, an-ne, atsano, handahu, fungahe, nane, chenda, kumi",
                "right": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
              },
              {
                "left": "Jumwa, Kuramuka, Kurima-hiri, Kuisa",
                "right": "The traditional 4-day Giriama week (rest day, 1st, 2nd, and 3rd cultivating days)"
              },
              {
                "left": "kurya / kugit'ira",
                "right": "to eat / to cook"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda term for \"to buy / to sell\": ___",
            "correctAnswer": "kugula / kuguza",
            "options": [
              "katsungula / simba / fisi",
              "mumwenga, mairi, ahahu, an-ne, atsano, handahu, fungahe, nane, chenda, kumi",
              "Jumwa, Kuramuka, Kurima-hiri, Kuisa",
              "kugula / kuguza"
            ],
            "hint": "Krapf & Rebmann (1887) & Taylor (1891)"
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-2",
    "title": "Unit 2: Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Users",
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
            "target": "ndúgu",
            "source": "Brother",
            "pronunciation": "ndu-gu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "muhóho",
            "source": "Child",
            "pronunciation": "mu-ho-ho",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "lukolo (pl. k'olo) / mbari",
            "source": "Family / Clan",
            "pronunciation": "lu-ko-lo / mba-ri",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ndúgu múje\" in Mijikenda (Giriama)?",
            "correctAnswer": "Aunt",
            "options": [
              "Aunt",
              "Boy",
              "Bride",
              "Brother"
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
                "left": "ndúgu",
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
            "target": "tsáwe — wáwe",
            "source": "Grandfather — Grandmother"
          },
          {
            "target": "muhóho wa mana — mulúme",
            "source": "Grandson — Husband"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"tsáwe\" mean in English?",
            "correctAnswer": "Grandfather",
            "options": [
              "Grandfather",
              "Grandmother",
              "Grandson / Grandchild",
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
    "title": "Unit 3: Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Scale",
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
            "target": "chenda / kenda",
            "source": "Nine (Chenda / Kenda in Mijikenda)",
            "pronunciation": "chenda / kenda",
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
            "target": "chenda — hnane",
            "source": "Nine — Eight"
          },
          {
            "target": "fungahe — handahu",
            "source": "Seven — Six"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"chenda\" mean in English?",
            "correctAnswer": "Nine",
            "options": [
              "Nine",
              "Eight",
              "Seven",
              "Six"
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
                "left": "chenda",
                "right": "Nine"
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
            "target": "piga sikíro",
            "source": "Box, to give one-",
            "pronunciation": "pi-ga si-ki-ro",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
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
            "target": "piga sikíro — kumi",
            "source": "Box, to give one- — Ten"
          },
          {
            "target": "menga — tandahu",
            "source": "One — Six"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"piga sikíro\" mean in English?",
            "correctAnswer": "Box, to give one-",
            "options": [
              "Box, to give one-",
              "Ten",
              "One",
              "Six"
            ],
            "hint": "Core vocabulary in Trade, Barter, Currency & Traditional Measures"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Ten\"",
            "correctAnswer": "kumi",
            "acceptedAnswers": [
              "kumi",
              "kumi"
            ],
            "hint": "Starts with \"ku\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"menga\"",
            "correctAnswer": "One",
            "acceptedAnswers": [
              "One",
              "One"
            ],
            "hint": "Review Trade, Barter, Currency & Traditional Measures"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Trade, Barter, Currency & Traditional Measures with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "piga sikíro",
                "right": "Box, to give one-"
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
    "title": "Unit 4: Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Tractor",
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
            "source": "Bake, v. a. -bread",
            "pronunciation": "henda mu-ka-he",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "ídji pl. ma-",
            "source": "Egg"
          },
          {
            "target": "jíta; jăkána",
            "source": "Boil",
            "pronunciation": "ji-ta",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
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
            "target": "ója; kalánga",
            "source": "Fry",
            "pronunciation": "oja"
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
            "target": "henda mukáhe — ídji pl. ma-",
            "source": "Bake, v. a. -bread — Egg"
          },
          {
            "target": "jíta — mukáhe",
            "source": "Boil — Bread"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"henda mukáhe\" mean in English?",
            "correctAnswer": "Bake, v. a. -bread",
            "options": [
              "Bake, v. a. -bread",
              "Egg",
              "Boil",
              "Bread"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Egg\"",
            "correctAnswer": "ídji pl. ma-",
            "acceptedAnswers": [
              "ídji pl. ma-",
              "ídji pl. ma-"
            ],
            "hint": "Starts with \"íd\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"jíta\"",
            "correctAnswer": "Boil",
            "acceptedAnswers": [
              "Boil",
              "Boil"
            ],
            "hint": "Review Staple Foods, Cookery & Beverages"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Staple Foods, Cookery & Beverages with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "henda mukáhe",
                "right": "Bake, v. a. -bread"
              },
              {
                "left": "ídji pl. ma-",
                "right": "Egg"
              },
              {
                "left": "jíta",
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
            "source": "Corn, (turkish)",
            "pronunciation": "ma-zerre",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "muháma",
            "source": "maize",
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
            "source": "Eat, va",
            "pronunciation": "ria",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "ídji pl. ma-",
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
            "target": "mjíti — mazerre",
            "source": "Cook — Corn,"
          },
          {
            "target": "muháma — nóa",
            "source": "maize — Drink"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mjíti\" mean in English?",
            "correctAnswer": "Cook",
            "options": [
              "Cook",
              "Corn, (turkish)",
              "maize",
              "Drink"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Corn, (turkish)\"",
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
            "correctAnswer": "maize",
            "acceptedAnswers": [
              "maize",
              "maize"
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
                "right": "Corn,"
              },
              {
                "left": "muháma",
                "right": "maize"
              },
              {
                "left": "nóa",
                "right": "Drink"
              },
              {
                "left": "ría",
                "right": "Eat, va"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-5",
    "title": "Unit 5: Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "PawPrint",
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
            "source": "Bank, s. (of a river)",
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
            "target": "kánda — gnombe mulúme",
            "source": "Bank, s. — Ox"
          },
          {
            "target": "dzua — ng'ombe",
            "source": "Sun — Cow"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kánda\" mean in English?",
            "correctAnswer": "Bank, s. (of a river)",
            "options": [
              "Bank, s. (of a river)",
              "Ox",
              "Sun",
              "Cow"
            ],
            "hint": "Core vocabulary in Sky, Weather, Rivers & Landforms"
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
                "right": "Bank, s."
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
            "source": "Bark, s. (of a tree)",
            "pronunciation": "gau",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "dia uzípiga kulúlu",
            "source": "Bark, v. (like a dog)",
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
            "source": "Blow, v. (wind)",
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
            "target": "gáu — dia uzípiga kulúlu",
            "source": "Bark, s. — Bark, v."
          },
          {
            "target": "niúji — niúni",
            "source": "Bee — Bird"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"gáu\" mean in English?",
            "correctAnswer": "Bark, s. (of a tree)",
            "options": [
              "Bark, s. (of a tree)",
              "Bark, v. (like a dog)",
              "Bee",
              "Bird"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Bark, v. (like a dog)\"",
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
                "right": "Bark, s."
              },
              {
                "left": "dia uzípiga kulúlu",
                "right": "Bark, v."
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
                "right": "Blow, v."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-6",
    "title": "Unit 6: The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "User",
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
            "target": "va sélac̣a",
            "source": "Arm",
            "pronunciation": "va se-lakha"
          },
          {
            "target": "sikíro",
            "source": "Ear",
            "pronunciation": "sikiro"
          },
          {
            "target": "zítso pl. mátso",
            "source": "Eye",
            "pronunciation": "zitso"
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
            "target": "milázo — va sélac̣a",
            "source": "Blood — Arm"
          },
          {
            "target": "sikíro — zítso pl. mátso",
            "source": "Ear — Eye"
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
            "correctAnswer": "va sélac̣a",
            "acceptedAnswers": [
              "va sélac̣a",
              "va sélac̣a"
            ],
            "hint": "Starts with \"va\""
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
                "left": "va sélac̣a",
                "right": "Arm"
              },
              {
                "left": "sikíro",
                "right": "Ear"
              },
              {
                "left": "zítso pl. mátso",
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
            "target": "óga — kuffua",
            "source": "Danger — Die"
          },
          {
            "target": "jilúngo ja mukóno — ukóngo wa matso",
            "source": "Elbow — Eye sickness"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"óga\" mean in English?",
            "correctAnswer": "Danger",
            "options": [
              "Danger",
              "Die",
              "Elbow",
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
    "title": "Unit 7: Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Compass",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ságala\" in Mijikenda?",
            "correctAnswer": "Abide",
            "options": [
              "Able, to be-",
              "Abolish",
              "Above",
              "Abide"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. n.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"idíma\" in Mijikenda?",
            "correctAnswer": "Able, to be-",
            "options": [
              "Abolish",
              "Above",
              "Able, to be-",
              "Abide"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"fúnsa\" in Mijikenda?",
            "correctAnswer": "Abolish",
            "options": [
              "Above",
              "Abolish",
              "Abide",
              "Able, to be-"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Abolish\" in Mijikenda?",
            "correctAnswer": "fúnsa",
            "options": [
              "fúnsa",
              "ságala",
              "idíma",
              "zúlu"
            ],
            "hint": "fúnsa"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Above\" in Mijikenda?",
            "correctAnswer": "zúlu",
            "options": [
              "ságala",
              "idíma",
              "fúnsa",
              "zúlu"
            ],
            "hint": "zúlu"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Mijikenda expression with its English meaning:",
            "correctAnswer": "ságala: Abide",
            "pairs": [
              {
                "left": "ságala",
                "right": "Abide"
              },
              {
                "left": "idíma",
                "right": "Able, to be-"
              },
              {
                "left": "fúnsa",
                "right": "Abolish"
              },
              {
                "left": "zúlu",
                "right": "Above"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda term for \"Abound\": ___",
            "correctAnswer": "izála",
            "options": [
              "ságala",
              "idíma",
              "fúnsa",
              "izála"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. n.)"
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
            "target": "zibúma ada; bara",
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
            "target": "úsa; lónda",
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
            "target": "ku-tsukula (to carry); ku-vyaa (to bear)",
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
            "target": "zibúma ada — kuuka",
            "source": "To accustom oneself — Go"
          },
          {
            "target": "úsa — fóya",
            "source": "Ask — Beg"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"zibúma ada\" mean in English?",
            "correctAnswer": "To accustom oneself",
            "options": [
              "To accustom oneself",
              "Go",
              "Ask",
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
    "title": "Unit 8: Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Map",
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
            "target": "lero — dzana",
            "source": "Today — Yesterday"
          },
          {
            "target": "madzacha — usiku",
            "source": "Dawn — Night"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"lero\" mean in English?",
            "correctAnswer": "Today",
            "options": [
              "Today",
              "Yesterday",
              "Dawn / Tomorrow morning",
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
        "icon": "Droplets",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kuzéja; kuzignála\" in Mijikenda?",
            "correctAnswer": "Dawn",
            "options": [
              "Known, to make-",
              "Last day",
              "Late",
              "Dawn"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. n.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mánisa\" in Mijikenda?",
            "correctAnswer": "Known, to make-",
            "options": [
              "Last day",
              "Late",
              "Known, to make-",
              "Dawn"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"zíku ya ku sira\" in Mijikenda?",
            "correctAnswer": "Last day",
            "options": [
              "Late",
              "Last day",
              "Dawn",
              "Known, to make-"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Last day\" in Mijikenda?",
            "correctAnswer": "zíku ya ku sira",
            "options": [
              "zíku ya ku sira",
              "kuzéja; kuzignála",
              "mánisa",
              "majira gavojira"
            ],
            "hint": "zíku ya ku sira"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Late\" in Mijikenda?",
            "correctAnswer": "majira gavojira",
            "options": [
              "kuzéja; kuzignála",
              "mánisa",
              "zíku ya ku sira",
              "majira gavojira"
            ],
            "hint": "majira gavojira"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Mijikenda expression with its English meaning:",
            "correctAnswer": "kuzéja; kuzignála: Dawn",
            "pairs": [
              {
                "left": "kuzéja; kuzignála",
                "right": "Dawn"
              },
              {
                "left": "mánisa",
                "right": "Known, to make-"
              },
              {
                "left": "zíku ya ku sira",
                "right": "Last day"
              },
              {
                "left": "majira gavojira",
                "right": "Late"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda term for \"Legislate\": ___",
            "correctAnswer": "henda pore ya zi",
            "options": [
              "kuzéja; kuzignála",
              "mánisa",
              "zíku ya ku sira",
              "henda pore ya zi"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-9",
    "title": "Unit 9: Conversational Phrases, Idioms & Daily Dialogue",
    "description": "Master conversational phrases, idioms & daily dialogue in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "MessageCircle",
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
            "source": "Against, he is-",
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
            "source": "Agreable",
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
            "target": "va ṣauíri — hénda j̇éri",
            "source": "Advise — Affirm"
          },
          {
            "target": "púnde — kahénsa",
            "source": "After — Against, he is-"
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
              "Against, he is-"
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
                "right": "Against, he is-"
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
            "source": "Angry, to be-",
            "pronunciation": "zu-ki-roa",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "búma kóro",
            "source": "to make-",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kulúlu\" in Mijikenda?",
            "correctAnswer": "Alarm",
            "options": [
              "Almighty",
              "Also",
              "Amend",
              "Alarm"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aidímaye kúlla útu\" in Mijikenda?",
            "correctAnswer": "Almighty",
            "options": [
              "Also",
              "Amend",
              "Almighty",
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
              "kahíri",
              "kulúlu",
              "aidímaye kúlla útu",
              "héndă-to"
            ],
            "hint": "kahíri"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Amend\" in Mijikenda?",
            "correctAnswer": "héndă-to",
            "options": [
              "kulúlu",
              "aidímaye kúlla útu",
              "kahíri",
              "héndă-to"
            ],
            "hint": "héndă-to"
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
              "kulúlu",
              "aidímaye kúlla útu",
              "kahíri",
              "kóro"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-10",
    "title": "Unit 10: Classical Proverbs, Riddles & Ethnographic Heritage",
    "description": "Master classical proverbs, riddles & ethnographic heritage in Mijikenda (Giriama) built directly from Rev. Dr. J. L. Krapf (1850, 1887), Rev. J. Rebmann (1887), Rev. W. E. Taylor (1891), Alice Werner (1915), and Sir Harry H. Johnston (1919).",
    "icon": "Globe",
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
            "target": "setáni; pepo",
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
            "source": "Fast, vn",
            "pronunciation": "funga tummu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          },
          {
            "target": "nóna",
            "source": "Fast, adj. to be-",
            "pronunciation": "no-na",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)"
          }
        ],
        "sentences": [],
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
              "Bury",
              "Custom",
              "Bewitch",
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
              "Bury",
              "Accustom",
              "Bewitch"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bury\" in Mijikenda?",
            "correctAnswer": "síka",
            "options": [
              "síka",
              "búma áda",
              "loga kua uzáwi",
              "ada"
            ],
            "hint": "síka"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Custom\" in Mijikenda?",
            "correctAnswer": "ada",
            "options": [
              "búma áda",
              "loga kua uzáwi",
              "síka",
              "ada"
            ],
            "hint": "ada"
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
              "síka",
              "zazíga kua ku tína"
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
            "target": "maṣálo; mafóyo",
            "source": "Prayer",
            "pronunciation": "ma-sa-lo",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "target": "ṣála; foya Mulungu",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mbíra\" in Mijikenda?",
            "correctAnswer": "Grave",
            "options": [
              "History",
              "Horn",
              "Prayer",
              "Grave"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"táric̣i\" in Mijikenda?",
            "correctAnswer": "History",
            "options": [
              "Horn",
              "Prayer",
              "History",
              "Grave"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"pembe\" in Mijikenda?",
            "correctAnswer": "Horn",
            "options": [
              "Prayer",
              "Horn",
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
              "maṣálo; mafóyo"
            ],
            "hint": "pembe"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Prayer\" in Mijikenda?",
            "correctAnswer": "maṣálo; mafóyo",
            "options": [
              "mbíra",
              "táric̣i",
              "pembe",
              "maṣálo; mafóyo"
            ],
            "hint": "maṣálo; mafóyo"
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
                "left": "maṣálo; mafóyo",
                "right": "Prayer"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Mijikenda term for \"Pray\": ___",
            "correctAnswer": "ṣála; foya Mulungu",
            "options": [
              "mbíra",
              "táric̣i",
              "pembe",
              "ṣála; foya Mulungu"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)"
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-11-public-domain-corpus",
    "title": "Unit 11: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Mijikenda (Giriama) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Be!\" in Mijikenda?",
            "correctAnswer": "Well! (as interjection)",
            "options": [
              "Well! (as interjection)",
              "Wave",
              "Stream",
              "Sky"
            ],
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
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
              "musasa",
              "sina (ma-)",
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
            "target": "ku-m'-richa hakeye (noun: nyika / weru)",
            "source": "Desert (to leave alone) / Wilderness",
            "pronunciation": "ku-m'-richa ha-ke-ye",
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          }
        ],
        "sentences": [],
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
            "correctAnswer": "m'oho / lufukufuku",
            "options": [
              "m'oho / lufukufuku",
              "muungo",
              "mulombi",
              "t'orove"
            ],
            "hint": "Rev. W. E. Taylor (1891) Giryama Vocabulary and Collections"
          }
        ]
      }
    ]
  },
  {
    "id": "mijikenda-unit-12-open-datasets-modern",
    "title": "Unit 12: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Mijikenda (Giriama) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
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
            "target": "uokófu; réri",
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
            "target": "makala — kitsahukuzi",
            "source": "Charcoal — Bush"
          },
          {
            "target": "kitsulu — yonga",
            "source": "Ant-hill — to sway, as a tree or branch, with the wind"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"makala\" mean in English?",
            "correctAnswer": "Charcoal",
            "options": [
              "Charcoal",
              "Bush",
              "Ant-hill",
              "to sway, as a tree or branch, with the wind"
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
            "target": "lamusíra; lamúsa",
            "source": "Salute",
            "pronunciation": "lamusira"
          },
          {
            "target": "rija; usíra",
            "source": "Pardon",
            "pronunciation": "ri-ja"
          },
          {
            "target": "erésa; hurira",
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
            "target": "susi — shidua",
            "source": "wind — to be set on fire"
          },
          {
            "target": "lamusíra — rija",
            "source": "Salute — Pardon"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"susi\" mean in English?",
            "correctAnswer": "wind",
            "options": [
              "wind",
              "to be set on fire",
              "Salute",
              "Pardon"
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
    "id": "mijikenda-unit-13-krapf-rebmann-1887",
    "title": "Unit 13: 1887 Nika Dictionary — Solar Clock, Kaya Institutions & Ecological Taxonomies",
    "description": "Master the 13-stage Mijikenda solar clock (Dzua), the 5 indigenous finger names (Chala), the 7 coconut maturation stages (Pungapunga to Muvala), the 8 palm-tapping steps (Ugema), and Kaya governance from Krapf, Rebmann & Sparshott (1887).",
    "icon": "Sun",
    "skills": [
      {
        "id": "mijikenda-1887-solar-clock-fingers",
        "title": "13-Stage Solar Clock (Dzua), Night Watches & 5 Finger Names (Chala)",
        "icon": "Clock",
        "description": "Learn how the Mijikenda reckon every hour of the day by the position of the sun (dzua) and cattle-pasturing cycles, alongside the five traditional finger names (Krapf & Rebmann 1887, pp. 20–21, 66, 176).",
        "tips": "In Kinika (Krapf & Rebmann 1887, p. 66), dzua ('sun', Class 5 ri-) takes the perfect prefix ri-dzi- (or ri-dza-) to mark each stage of the solar arc from sunrise (Dzua ridziupuka) to high noon (Dzua ridzifika vidzoani) and sunset (Dzua ridzedzua).",
        "words": [
          {
            "target": "Dzua ridziupuka / Dzua ridziombola",
            "source": "Sunrise (6:00 a.m. — the sun has risen / come forth)",
            "pronunciation": "dzoo-ah ree-dzee-oo-poo-kah",
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
            "pronunciation": "dzoo-ah ree-dzee-fee-kah moo-rah-oo-koh wah ng'ohm-beh weh-nyeh",
            "hint": "Stage 4 of the solar day (Krapf & Rebmann 1887, p. 66)"
          },
          {
            "target": "Dzua ridzifika vidzoani (ri-dididi na vidzoa)",
            "source": "High noon (12:00 p.m. — the sun is perpendicular overhead)",
            "pronunciation": "dzoo-ah ree-dzee-fee-kah vee-dzoh-ah-nee",
            "hint": "Stage 7 of the solar day (Krapf & Rebmann 1887, p. 66)"
          },
          {
            "target": "Dzua ridziogoka / Dzua ridzifika lua mudzana lua ku vola",
            "source": "Early afternoon (1:00 p.m.) / Cool of the late afternoon (4:00 p.m.)",
            "pronunciation": "dzoo-ah ree-dzee-oh-goh-kah",
            "hint": "Stages 8 & 11 of the solar day (Krapf & Rebmann 1887, p. 66)"
          },
          {
            "target": "Dzua ridzibodoka / Dzua ridzedzua",
            "source": "Sunset (6:00 p.m. — the sun has gone down / set)",
            "pronunciation": "dzoo-ah ree-dzee-boh-doh-kah / ree-dzeh-dzoo-ah",
            "hint": "Stage 13 of the solar day (Krapf & Rebmann 1887, p. 66)"
          },
          {
            "target": "Chala cha dzalagumba / Chala cha muoloho",
            "source": "Thumb (1st finger) / Forefinger or pointing finger (2nd finger)",
            "pronunciation": "chah-lah chah dzah-lah-goom-bah / mwoh-loh-hoh",
            "hint": "Krapf & Rebmann (1887, pp. 20–21 s.v. Chala)"
          },
          {
            "target": "Chala kibomu / Chala kisicho dzina / Chala cha kanda",
            "source": "Middle finger (3rd) / Ring finger ('nameless finger', 4th) / Little finger (5th)",
            "pronunciation": "chah-lah kee-boh-moo / kee-see-choh dzee-nah / chah kahn-dah",
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
            "correctAnswer": "Dzua ridzifika vidzoani (ri-dididi na vidzoa)",
            "options": [
              "Dzua ridziupuka / Dzua ridziombola",
              "Dzua ridzifika vidzoani (ri-dididi na vidzoa)",
              "Dzua ridzibodoka / Dzua ridzedzua",
              "Dzua ridzidana nadzi"
            ],
            "hint": "Literally: the sun has reached the crowns of the heads (vidzoani)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the literal meaning of the Mijikenda name for the ring finger, 'Chala kisicho dzina' (Krapf & Rebmann 1887, p. 21)?",
            "correctAnswer": "The finger that has no name",
            "options": [
              "The pointing finger",
              "The finger that has no name",
              "The thumb",
              "The great finger"
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
        "title": "Kaya Architecture (Mumfiria, M'oro, Rungu), Coconut Stages & Palm-Tapping",
        "icon": "TreePine",
        "description": "Explore the three defining institutions of a Mijikenda Kaya, the 7 stages of coconut maturation (Pungapunga to Muvala), the 8 stages of palm-wine tapping (Dangadza), and the 8 stages of child motor development (Koko).",
        "tips": "As recorded by Krapf & Rebmann (1887, p. 259 s.v. M'oro), a settlement without a fortified gate (mumfiria), central council green (m'oro), and sacred elders' lodge (rungu) is called merely a mudzi ('village'), never a kaya.",
        "words": [
          {
            "target": "Mumfiria • M'oro • Rungu",
            "source": "Fortified narrow Kaya gate • Central council green • Sacred elders' lodge",
            "pronunciation": "moom-fee-ree-ah • moh-roh • roon-goo",
            "hint": "The three defining institutions of a Mijikenda Kaya (Krapf & Rebmann 1887, pp. 259, 285, 338)"
          },
          {
            "target": "Ugnaro (men) & Gundi (women) • Ku thura (Mumondo → Govu)",
            "source": "Youth initiation into Kambi • Highest elder investiture conferring the lumfo armlet",
            "pronunciation": "oo-nyah-roh • goon-dee • koo thoo-rah",
            "hint": "Mijikenda age-grades and ritual orders (Krapf & Rebmann 1887, pp. 111, 115, 356, 365)"
          },
          {
            "target": "Pungapunga → Kidagna → Kidale → Dafu → Koloma → Nazi → Muvala",
            "source": "7 stages of coconut maturation from embryo bud to ripe nut (nazi) and dried copra (muvala)",
            "pronunciation": "poon-gah-poon-gah • kee-dah-nyah • kee-dah-leh • dah-foo • koh-loh-mah • nah-zee • moo-vah-lah",
            "hint": "Krapf & Rebmann (1887, p. 325 s.v. Pungapunga)"
          },
          {
            "target": "Nafunga vanda → Nadangadza muanso → Nakueza vibaria → N'enda nikageme",
            "source": "Cutting trunk notches → Stripping/binding the spadix → Hanging calabashes → Tapping palm wine",
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
            "type": "multiple_choice",
            "prompt": "According to Krapf & Rebmann (1887, p. 259 s.v. M'oro), which three structures distinguish a sacred Mijikenda Kaya from an ordinary village (mudzi)?",
            "correctAnswer": "Mumfiria (fortified gateway), M'oro (central assembly green), and Rungu (sacred lodge)",
            "options": [
              "Mumfiria (fortified gateway), M'oro (central assembly green), and Rungu (sacred lodge)",
              "Kidagna, Kidale, and Dafu",
              "Kibaria, Muanso, and Vanda",
              "Chala, Koko, and Dzua"
            ],
            "hint": "See Krapf & Rebmann (1887, p. 259 s.v. M'oro)"
          },
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
    "id": "mijikenda-unit-14-krapf-rebmann-1887-complete",
    "title": "Unit 14: 1887 Nika Dictionary II — Verb Sets, 12-Class Na- Table, Kinship, Ordeals & Prayers",
    "description": "Master the 6 answer verbs, 7 harvesting verbs, 4 pounding verbs, 12-class Na- pronouns, teknonymy (Abe-/Mayo-), 9 Kibaria calabashes, 6 Kiravo ordeals, Kore blood-money, 5 Mulungu prayers, and 3 fables from Krapf, Rebmann & Sparshott (1887).",
    "icon": "BookOpen",
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
            "source": "3 negative-only verbs for 'to answer' vs. 3 affirmative & negative verbs for 'to reply / answer a call'",
            "pronunciation": "koo hohn-goh-zah / koo loon-goo-kee-zah",
            "hint": "Krapf, Rebmann & Sparshott (1887, p. 126 s.v. Hongoza)"
          },
          {
            "target": "Ku funa • Ku guha • Ku tola • Ku poa • Ku hunda • Ku kwachula • Ku kopa",
            "source": "7 harvesting verbs: reap stalks • break cobs • pick pods • thresh pods • pluck fruit • strip clusters • cut fronds/bunches",
            "pronunciation": "koo foo-nah • koo goo-hah • koo toh-lah • koo poh-ah • koo hoon-dah",
            "hint": "Krapf, Rebmann & Sparshott (1887, p. 93 s.v. Funa)"
          },
          {
            "target": "Ku bonda • Ku vonda • Ku huaga • Ku pura",
            "source": "4 pounding verbs: mash soft food • 1st husking pound • 2nd cleaning pound • final flour pounding",
            "pronunciation": "koo bohn-dah • koo vohn-dah • koo hwah-gah • koo poo-rah",
            "hint": "Krapf, Rebmann & Sparshott (1887, p. 127 s.v. Huaga & p. 384 s.v. Vonda)"
          },
          {
            "target": "Na-ga/Na-go (Cl. 6) • Na-ki/Na-cho (Cl. 7) • Na-lu/Na-lo (Cl. 11) • Na-ri/Na-ro (Cl. 5) • Na-vi/Na-vio (Cl. 8)",
            "source": "Class-concordant 'also / and it / with it' pronouns across the 12 noun classes",
            "pronunciation": "nah-gah nah-goh • nah-kee nah-choh • nah-loo nah-loh • nah-ree nah-roh",
            "hint": "12-class Na- table in Krapf, Rebmann & Sparshott (1887, p. 297 s.v. Na)"
          },
          {
            "target": "Abe-Gunja (pl. Abe-yehu / Abe-zehu) • Avu • Dzangasimi • Muhua • Mukoi",
            "source": "Father-of-Gunja (teknonym) • Maternal uncle • Paternal aunt • Sister's child • Cross-cousin (child of avu)",
            "pronunciation": "ah-beh goon-jah • ah-voo • dzahn-gah-see-mee • moo-hoo-ah • moo-koh-ee",
            "hint": "Kinship & teknonymy in Krapf, Rebmann & Sparshott (1887, pp. 1, 9, 57, 276, 279)"
          }
        ],
        "sentences": [
          {
            "target": "N'enda rima mundani; enda ukarime nawe!",
            "source": "I am going to cultivate in the garden; go and cultivate thou also! (Syntax of ku enda, p. 73)"
          },
          {
            "target": "Nimuudzisa, ela kahongoza neno.",
            "source": "I asked him, but he did not answer a word. (Negative-only ku hongoza, p. 126)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "Which three Kinika verbs for 'to answer' are used ONLY in negative sentences according to Krapf, Rebmann & Sparshott (1887, p. 126 s.v. Hongoza)?",
            "correctAnswer": "Ku hongoza, Ku runga, and Ku shudia",
            "options": [
              "Ku hongoza, Ku runga, and Ku shudia",
              "Ku lungukiza, Ku udzikiza, and Ku udzira",
              "Ku bonda, Ku vonda, and Ku huaga",
              "Ku funa, Ku guha, and Ku tola"
            ],
            "hint": "See p. 126 s.v. Hongoza"
          },
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
        "title": "6 Kiravo Ordeals, Kore Blood-Money, 9 Calabashes, 5 Mulungu Prayers & 3 Fables",
        "icon": "Scale",
        "description": "Explore Mijikenda customary law (6 Kiravo ordeals, Kore blood-money, Ku funsa chala), the 9 Kibaria calabash sizes, the 5 prayers to Mulungu, and the 3 fables in Krapf, Rebmann & Sparshott (1887).",
        "tips": "In Mijikenda customary jurisprudence (p. 192 s.v. Kore), intentional murder required two anafiale (a youth and a maiden) to replace the victim's kifurifuri ('shadow'), whereas accidental homicide (kua zani, p. 339) required one kore.",
        "words": [
          {
            "target": "Kiravo cha mukate (kikahe) • luembe • luiga • chuma • lukuni • mvuga • Ku piga niungu",
            "source": "6 judicial ordeals (poisoned cake, hot razor, hot horn/needle, hot iron, firebrand, boiling water) & pot-smashing oath",
            "pronunciation": "kee-rah-voh chah moo-kah-teh • lwem-beh • lwee-gah • choo-mah",
            "hint": "Krapf, Rebmann & Sparshott (1887, pp. 169, 178 s.v. Kikahe & Kiravo)"
          },
          {
            "target": "Kore (2 anafiale for kifurifuri shadow vs. 1 kore for kua zani) • Ku funsa chala",
            "source": "Blood-money compensation (intentional vs. accidental homicide) • Bending a finger to forgive twice before fighting on the 3rd offence",
            "pronunciation": "koh-reh • kee-foo-ree-foo-ree • koo foon-sah chah-lah",
            "hint": "Krapf, Rebmann & Sparshott (1887, pp. 94–95, 192, 339)"
          },
          {
            "target": "Kibaria → Kirea → Tumbi → Ndzoma → Ndundu → Kipazi → Muvunda → M'ololo → Dunda",
            "source": "9 graded sizes of calabashes from the smallest palm-tapping gourd (kibaria) to the largest storage gourd (dunda)",
            "pronunciation": "kee-bah-ree-ah • kee-reh-ah • toom-bee • ndzoh-mah • doon-dah",
            "hint": "Krapf, Rebmann & Sparshott (1887, pp. 151–152 s.v. Kibaria)"
          },
          {
            "target": "Similani kambi! — Hai! • Kula Abegnania! — Hosi nahu kule!",
            "source": "Give ear, O council! — Aye! • May Father-of-So-and-so live long! — May we all live long! (M'oro assembly formulas)",
            "pronunciation": "see-mee-lah-nee kahm-bee • hah-ee • koo-lah ah-beh-nyah-nee-ah",
            "hint": "Krapf, Rebmann & Sparshott (1887, pp. 259–260, 347)"
          },
          {
            "target": "Pingi na Kuku na Ninga (p. 323) • Nundu (bat, p. 314) • Mignio vs. Ludzoa (p. 256)",
            "source": "Three traditional Kinika fables: Charm-wood, Fowl & Wild Pigeon; the Bat rejected by birds and beasts; Black Ants vs. Termites",
            "pronunciation": "peen-gee nah koo-koo nah neen-gah • noon-doo • mee-nyoh",
            "hint": "Krapf, Rebmann & Sparshott (1887, pp. 256, 314, 323)"
          }
        ],
        "sentences": [
          {
            "target": "We Mulungu, muinulire mukongo wehu, apate ku lola dzua!",
            "source": "O Mulungu (God), raise up our sick one, that he may behold the sun! (Prayer on p. 284)"
          },
          {
            "target": "Similani kambi! — Hai! Kula Abegnania! — Hosi nahu kule!",
            "source": "Give ear, O council! — Aye! May Father-of-So-and-so live long! — May we all live long! (pp. 259–260, 347)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Mijikenda customary law (Krapf, Rebmann & Sparshott 1887, pp. 192, 339), why did intentional homicide require paying two young people (anafiale) as kore blood-money?",
            "correctAnswer": "To stand in place of the slain person's kifurifuri ('shadow') and perpetuate their lineage",
            "options": [
              "To stand in place of the slain person's kifurifuri ('shadow') and perpetuate their lineage",
              "To tap palm-wine in the Kaya",
              "To guard the mumfiria gateway",
              "To administer the kiravo ordeal"
            ],
            "hint": "See p. 192 s.v. Kore"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each cultural item from Krapf, Rebmann & Sparshott (1887) with its description:",
            "correctAnswer": "Kibaria → Dunda: 9 graded calabash sizes from smallest tapping gourd to largest vessel (pp. 151–152)",
            "pairs": [
              {
                "left": "Kibaria → Dunda",
                "right": "9 graded calabash sizes from smallest tapping gourd to largest vessel (pp. 151–152)"
              },
              {
                "left": "Ku funsa chala",
                "right": "Bending a finger to forgive twice before fighting on the third offence (pp. 94–95)"
              },
              {
                "left": "Nundu (p. 314)",
                "right": "Fable of the bat rejected by both birds and beasts for double-dealing"
              },
              {
                "left": "Bori, Ndzao, Mugoma",
                "right": "Three commercial weight classes of elephant ivory tusks (p. 321)"
              }
            ]
          }
        ]
      }
    ]
  }
];

// ── Unit 15: Complete Line-by-Line Integration of Steve Nicolle (2016, Ch. 20, pp. 377–395, DOI: 10.17169/langsci.b121.491), "Variation in the expression of information structure in eastern Bantu languages", in Doris L. Payne, Sara Pacchiarotti & Mokaya Bosire, eds., Diversity in African languages ──
MIJIKENDA_UNITS.push({
  "id": "mijikenda-unit-15-nicolle-2016-digo-information-structure-complete",
  "title": "Unit 15: Digo (Chidigo) Information Structure (Nicolle 2016)",
  "description": "Master Steve Nicolle's (2016, Ch. 20, pp. 377–395) corpus analysis of Digo ([dig] E73, Kwale District, Kenya, 864 clauses) and 10 other Eastern Bantu languages across topic dislocation, clefted subject focus, and VS thetic sentences.",
  "icon": "BookOpen",
  "number": 15,
  "color": "#059669",
  "skills": [
    {
      "id": "mijikenda-nicolle-2016-15-1-digo-topic-focus-thetic",
      "title": "Digo Left/Right Topic Dislocation, Clefted Subject Focus & VS Thetic Sentences (Ch. 20, pp. 377–395)",
      "icon": "MessageSquare",
      "description": "Practice the exact Digo oral narrative sentences from Nicolle (2016, Ch. 20, Ex. 2–3, 7–8, 11, 22, 25) alongside comparative Suba-Simbiti ([ssc] EJ403) patterns.",
      "tips": "In Digo ([dig] E73), left-dislocated object topics trigger an object prefix on the verb ([Barabara] ndipho [a-ka-i-rich-a], Ex. 2), whereas topicalized objects omit the object prefix when the verb is focused ([Pesa] sino [hu-na-Ø-hew-a], Ex. 3). Continued subject topics are left-dislocated across a paragraph break (Ex. 8) but right-dislocated within a paragraph (Lakini [achinyamala] [mutu yuyu], Ex. 11). Post-verbal subjects in Digo are never focal—subject focus requires a cleft (iye ndi=ye..., Ex. 22), and thetic sentences are strictly VS (ratuluka fisi, Ex. 25).",
      "words": [
        {
          "target": "[Barabara]_TOPIC ndipho [a-ka-i-rich-a]_COMMENT • [Pesa]_TOPIC sino [hu-na-Ø-hew-a]_COMMENT",
          "source": "The main road, that is when he left it (left-dislocated object with OP -i-) • That money, we have been given [it] (topicalized object without OP)",
          "pronunciation": "ba-ra-ba-ra ndi-pho a-ka-i-ri-cha / pe-sa si-no hu-na-he-wa",
          "hint": "Nicolle (2016, Ch. 20, pp. 379–380, Ex. 2–3)"
        },
        {
          "target": "ela [go mafuha ga taa]_TOPIC ndo [n’yarya?]_COMMENT • Yuya bwana warima munda uchifika dza Mazera, na hiku uchifika dza Malindi ela kaguwire hata tsere mwenga",
          "source": "but that lamp oil, what was it? (switch topic) • That man cultivated a farm reaching as far as Mazeras and Malindi, but he didn't harvest even one cob of maize (continued topic across paragraph break)",
          "pronunciation": "go ma-fu-ha ga taa ndo nya-rya / yu-ya bwa-na wa-ri-ma mun-da",
          "hint": "Nicolle (2016, Ch. 20, pp. 381–382, Ex. 7–8)"
        },
        {
          "target": "Lakini [achinyamala]_COMMENT [mutu yuyu]_TOPIC wala kayagomba na mutu",
          "source": "However, he kept quiet, this person, and didn't speak with anyone (right-dislocated continued subject topic within a paragraph)",
          "pronunciation": "la-ki-ni a-chi-nya-ma-la mu-tu yu-yu wa-la ka-ya-gom-ba na mu-tu",
          "hint": "Nicolle (2016, Ch. 20, p. 383, Ex. 11)"
        },
        {
          "target": "Ndipho atu achimanya kukala [iye]_FOCUS [ndi=ye ariyehenda mambo higo]_PRESUPPOSITION",
          "source": "That is when people knew that [it was] he [who did these things] (cleft construction required for subject argument focus in Digo)",
          "pronunciation": "ndi-pho a-tu a-chi-ma-nya ku-ka-la i-ye ndi-ye a-ri-ye-hen-da mam-bo hi-go",
          "hint": "Nicolle (2016, Ch. 20, p. 388, Ex. 22)"
        },
        {
          "target": "Phahi rero, chisha chindi, [ratuluka] [fisi], rina chitswa dza cha mutu, rina mikono minane na magulu manane, rina m’yo wa chuma",
          "source": "Then today, after a short time, out came a giant hyena, having a head like a person's, eight hands, eight legs, and an iron heart (VS thetic sentence in Digo)",
          "pronunciation": "ra-tu-lu-ka fi-si ri-na chi-tswa dza cha mu-tu",
          "hint": "Nicolle (2016, Ch. 20, p. 390, Ex. 25)"
        }
      ],
      "sentences": [
        {
          "target": "Lakini achinyamala mutu yuyu wala kayagomba na mutu • Ndipho atu achimanya kukala iye ndiye ariyehenda mambo higo.",
          "source": "However, this person kept quiet and didn't speak with anyone • That is when people knew that it was he who did these things (Nicolle 2016, Ch. 20, pp. 383, 388, Ex. 11 & 22)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "According to Steve Nicolle (2016, Ch. 20, pp. 381–391), how does Digo ([dig] E73) express (a) a continued subject topic within a paragraph, (b) subject argument focus, and (c) a thetic (all-new) sentence?",
          "correctAnswer": "(a) Right-dislocation after the verb (Lakini achinyamala mutu yuyu), (b) a cleft construction (iye ndi=ye ariyehenda mambo higo) since post-verbal subjects cannot be focal in Digo, and (c) VS constituent order (ratuluka fisi) or locative-class agreement",
          "options": [
            "(a) Right-dislocation after the verb (Lakini achinyamala mutu yuyu), (b) a cleft construction (iye ndi=ye ariyehenda mambo higo) since post-verbal subjects cannot be focal in Digo, and (c) VS constituent order (ratuluka fisi) or locative-class agreement",
            "(a) Obligatory SVO order in all contexts without clefts or right-dislocation",
            "(a) Post-verbal subject focus without clefts, as in Rangi and Mwani",
            "(a) SV thetic order only, prohibiting VS sentences"
          ],
          "hint": "See Nicolle (2016, Ch. 20, Ex. 11, 22 & 25, pp. 383, 388, 390)"
        }
      ]
    }
  ]
});
