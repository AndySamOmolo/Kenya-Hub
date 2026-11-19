import type { LanguageConfig, CourseUnit } from "../types";

export const LUHYA_CONFIG: LanguageConfig = {
  "id": "luhya",
  "name": "Luhya",
  "nativeName": "Oluluyia",
  "family": "Bantu",
  "counties": [
    "Kakamega",
    "Bungoma",
    "Vihiga",
    "Busia",
    "Trans Nzoia"
  ],
  "speakers": "6.8M",
  "speechLocale": "sw-KE",
  "description": "A major Great Lakes / Western Bantu language cluster (Zone J30) spoken across Western Kenya.",
  "color": "#2FA463",
  "sources": [
    "hobley-eastern-uganda-1902",
    "johnston-uganda-protectorate-1902",
    "hobley-kavirondo-nandi-1903",
    "johnston-bantu-1919",
    "stam-bahanga-1929",
    "open-web-swadesh-comparative",
    "purvis-masaba-1909",
    "clem-jenks-sande-theory-description-2019",
    "selvanathan-bantu-iav-focus-2019"
  ]
};

export const LUHYA_UNITS: CourseUnit[] = [
  {
    "id": "luhya-unit-1",
    "unitNumber": 1,
    "title": "Pronouns, People, Kinship & Numbers",
    "description": "Learn core personal pronouns, human & family nouns (omu-/aba-), and cardinal numbers in Oluluyia.",
    "icon": "Hash",
    "color": "#2FA463",
    "skills": [
      {
        "id": "luhya-pronouns-people",
        "title": "Pronouns, People & Family (Class 1/2)",
        "icon": "Users",
        "description": "Master personal pronouns and Class 1/2 human nouns in Oluluyia.",
        "tips": "In Oluluyia, Class 1 singular human nouns begin with 'omu-' and form their Class 2 plural in 'aba-': omundu (person) → abandu (people), omukhasi (woman) → abakhasi (women), omusatsa (man) → abasatsa (men), omwami (king/chief) → abami (Stam 1929).",
        "words": [
          {
            "target": "Mirembe!",
            "source": "Peace!",
            "pronunciation": "mi-rembe",
            "hint": "Universal Luhya greeting of peace (Hobley 1902)"
          },
          {
            "target": "Mulembe!",
            "source": "Greetings!",
            "pronunciation": "mu-lembe",
            "hint": "Universal Luhya greeting of peace (Hobley 1902)"
          },
          {
            "target": "esie",
            "source": "I",
            "pronunciation": "e-sie",
            "hint": "Wanga/Kisa esie, Nyole/Bukusu ise, Logoli inze (Johnston 1919)"
          },
          {
            "target": "ise",
            "source": "me",
            "pronunciation": "i-se",
            "hint": "Wanga/Kisa esie, Nyole/Bukusu ise, Logoli inze (Johnston 1919)"
          },
          {
            "target": "iwe",
            "source": "You (singular)",
            "pronunciation": "iwe",
            "hint": "2nd person singular pronoun"
          },
          {
            "target": "efwe",
            "source": "We",
            "pronunciation": "efwe",
            "hint": "1st person plural pronoun"
          },
          {
            "target": "ifwe",
            "source": "us",
            "pronunciation": "ifwe",
            "hint": "1st person plural pronoun"
          },
          {
            "target": "omundu (pl. abandu)",
            "source": "Person (pl. People)",
            "pronunciation": "o-mundu",
            "hint": "Class 1/2 noun (Hobley 1902 & Johnston 1919)"
          },
          {
            "target": "omukhasi (pl. abakhasi)",
            "source": "Woman / Wife",
            "pronunciation": "o-mukha-si",
            "hint": "Class 1/2 noun"
          },
          {
            "target": "omusatsa (pl. abasatsa)",
            "source": "Man / Husband",
            "pronunciation": "o-mu-satsa",
            "hint": "Class 1/2 noun"
          },
          {
            "target": "omwana (pl. abana)",
            "source": "Child (pl. Children)",
            "pronunciation": "omwa-na",
            "hint": "Class 1/2 noun"
          },
          {
            "target": "omwami (pl. abami)",
            "source": "King / Paramount Chief (Nabongo)",
            "pronunciation": "omwa-mi",
            "hint": "Rev. N. Stam (1929, pp. 148–149) Wanga royal title"
          },
          {
            "target": "mama",
            "source": "Mother",
            "pronunciation": "ma-ma",
            "hint": "Core kinship terms (Hobley 1902)"
          },
          {
            "target": "papa (sese)",
            "source": "Father",
            "pronunciation": "pa-pa / se-se",
            "hint": "Core kinship terms (Hobley 1902)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu mulayi; abandu balayi.",
            "source": "A good person; good people."
          },
          {
            "target": "Omwana nende mama.",
            "source": "The child and mother."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mirembe!\" in Luhya?",
            "correctAnswer": "Peace!",
            "options": [
              "I",
              "Peace!",
              "You",
              "We"
            ],
            "hint": "Starts with \"Pe…\" (5 letters)",
            "acceptedAnswers": [
              "Peace! / Greetings!",
              "Peace!"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"esie\" in Luhya?",
            "correctAnswer": "I",
            "options": [
              "I",
              "You",
              "We",
              "Peace!"
            ],
            "hint": "Wanga/Kisa esie, Nyole/Bukusu ise, Logoli inze (Johnston 1919)",
            "acceptedAnswers": [
              "I / me",
              "I"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"iwe\" in Luhya?",
            "correctAnswer": "You",
            "options": [
              "We",
              "You",
              "Peace!",
              "I"
            ],
            "hint": "2nd person singular pronoun",
            "acceptedAnswers": [
              "You (singular)",
              "You"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"You (singular)\" in Luhya?",
            "correctAnswer": "iwe",
            "options": [
              "iwe",
              "Mirembe!",
              "esie",
              "efwe"
            ],
            "hint": "ee-weh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"We\" in Luhya?",
            "correctAnswer": "efwe",
            "options": [
              "Mirembe!",
              "efwe",
              "esie",
              "iwe"
            ],
            "hint": "Starts with \"ef…\" (4 letters)",
            "acceptedAnswers": [
              "efwe / ifwe",
              "efwe"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "Mirembe! / Mulembe!: Peace! / Greetings!",
            "pairs": [
              {
                "left": "Mirembe! / Mulembe!",
                "right": "Peace! / Greetings!"
              },
              {
                "left": "esie / ise",
                "right": "I / me"
              },
              {
                "left": "iwe",
                "right": "You (singular)"
              },
              {
                "left": "efwe / ifwe",
                "right": "We / us"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"Person (pl. People)\": ___",
            "correctAnswer": "omundu",
            "options": [
              "omundu",
              "Mirembe!",
              "esie",
              "iwe"
            ],
            "hint": "Class 1/2 noun (Hobley 1902 & Johnston 1919)",
            "acceptedAnswers": [
              "omundu (pl. abandu)",
              "omundu"
            ]
          }
        ]
      },
      {
        "id": "luhya-numbers-adjectives",
        "title": "Numbers 1–10 & Core Descriptive Roots",
        "icon": "Hash",
        "description": "Count from 1 to 10 in Luwanga/Oluluyia and use core descriptive stems.",
        "tips": "Hobley (1902, pp. 84, 95) and Johnston (1919, Vol. I, p. 81) record Luwanga/Lunyara numerals 1–10: ndala (-lala, 1), tsimbili (-bili, 2), tsitaru (-taru, 3), tsine (-ne, 4), tsiraano (-raano, 5), tsisaasaba (6), mufungate (tsisaba, 7), munane (8), shenda (9), ikhumi (10).",
        "words": [
          {
            "target": "-lala (ndala)",
            "source": "One (1)",
            "pronunciation": "la-la",
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          },
          {
            "target": "-bili (tsimbili)",
            "source": "Two (2)",
            "pronunciation": "bi-li",
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          },
          {
            "target": "-taru (tsitaru)",
            "source": "Three (3)",
            "pronunciation": "ta-ru",
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          },
          {
            "target": "-ne (tsine)",
            "source": "Four (4)",
            "pronunciation": "ne",
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          },
          {
            "target": "-raano (tsiraano)",
            "source": "Five (5)",
            "pronunciation": "raa-no",
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          },
          {
            "target": "tsisaasaba",
            "source": "Six (6)",
            "pronunciation": "tsi-saa-sa-ba",
            "hint": "Johnston (1919, Vol. I, p. 81) Luwanga/Lunyara numerals 6–10"
          },
          {
            "target": "mufungate",
            "source": "Seven (7)",
            "pronunciation": "mu-funga-te",
            "hint": "Johnston (1919, Vol. I, p. 81) Luwanga/Lunyara numerals 6–10"
          },
          {
            "target": "munane",
            "source": "Eight (8)",
            "pronunciation": "mu-na-ne",
            "hint": "Johnston (1919, Vol. I, p. 81) Luwanga/Lunyara numerals 6–10"
          },
          {
            "target": "shenda",
            "source": "Nine (9)",
            "pronunciation": "shenda",
            "hint": "Johnston (1919, Vol. I, p. 81) Luwanga/Lunyara numerals 6–10"
          },
          {
            "target": "ikhumi",
            "source": "Ten (10)",
            "pronunciation": "ikhu-mi",
            "hint": "Johnston (1919, Vol. I, p. 81) Luwanga/Lunyara numerals 6–10"
          },
          {
            "target": "-khongo",
            "source": "Big / large",
            "pronunciation": "khongo",
            "hint": "Zone J30 Swadesh #27"
          },
          {
            "target": "-titi",
            "source": "Small",
            "pronunciation": "ti-ti",
            "hint": "Zone J30 Swadesh #32"
          },
          {
            "target": "-tutu",
            "source": "Few",
            "pronunciation": "tu-tu",
            "hint": "Zone J30 Swadesh #32"
          },
          {
            "target": "-layi",
            "source": "Good",
            "pronunciation": "la-yi",
            "hint": "Zone J30 Swadesh #185"
          }
        ],
        "sentences": [
          {
            "target": "Abana babili balayi.",
            "source": "Two good children."
          },
          {
            "target": "Amakhuwa malayi.",
            "source": "Good words / matters."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-lala (ndala)\" in Luhya?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
            ],
            "hint": "Hobley (1902) & Johnston (1919 #5a)",
            "acceptedAnswers": [
              "One (1)",
              "One"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-bili (tsimbili)\" in Luhya?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
              "One"
            ],
            "hint": "Hobley (1902) & Johnston (1919 #5a)",
            "acceptedAnswers": [
              "Two (2)",
              "Two"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-taru (tsitaru)\" in Luhya?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "One",
              "Two",
              "Three"
            ],
            "hint": "Hobley (1902) & Johnston (1919 #5a)",
            "acceptedAnswers": [
              "Three (3)",
              "Three"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three (3)\" in Luhya?",
            "correctAnswer": "-taru",
            "options": [
              "-lala",
              "-taru",
              "-bili",
              "-ne"
            ],
            "hint": "tah-roo",
            "acceptedAnswers": [
              "-taru (tsitaru)",
              "-taru"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four (4)\" in Luhya?",
            "correctAnswer": "-ne",
            "options": [
              "-lala",
              "-bili",
              "-ne",
              "-taru"
            ],
            "hint": "neh",
            "acceptedAnswers": [
              "-ne (tsine)",
              "-ne"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "-lala (ndala): One (1)",
            "pairs": [
              {
                "left": "-lala (ndala)",
                "right": "One (1)"
              },
              {
                "left": "-bili (tsimbili)",
                "right": "Two (2)"
              },
              {
                "left": "-taru (tsitaru)",
                "right": "Three (3)"
              },
              {
                "left": "-ne (tsine)",
                "right": "Four (4)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"Five (5)\": ___",
            "correctAnswer": "-raano",
            "options": [
              "-lala",
              "-raano",
              "-bili",
              "-taru"
            ],
            "hint": "Hobley (1902) & Johnston (1919 #5a)",
            "acceptedAnswers": [
              "-raano (tsiraano)",
              "-raano"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-2",
    "unitNumber": 2,
    "title": "Nature, Core Verbs (Okhu-) & Wanga Heritage",
    "description": "Explore natural elements, high-frequency okhu- verbs, and Luhanga cultural vocabulary from Rev. N. Stam (1929) and C. W. Hobley (1903).",
    "icon": "TreePine",
    "color": "#2FA463",
    "skills": [
      {
        "id": "luhya-nature-verbs",
        "title": "Water, Fire, Nature, Everyday Verbs & Wanga Heritage",
        "icon": "Coffee",
        "description": "Learn core environmental nouns, infinitive verbs, and classical Luhanga expressions from Stam (1929).",
        "tips": "Verbs in Oluluyia begin with the infinitive prefix 'okhu-' (or 'okhw-' before a vowel): okhunywa (to drink), okhuliira (to eat), okhulola (to see), okhumanya (to know), okhwitsa (to come). In Rev. N. Stam's 'The Bahanga' (1929), Were / Nasayi is the Supreme Creator.",
        "words": [
          {
            "target": "amaatsi / madzi",
            "source": "Water",
            "pronunciation": "a-maatsi / madzi",
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "target": "omuliro",
            "source": "Fire",
            "pronunciation": "o-mu-li-ro",
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "target": "liyuba (eliuba)",
            "source": "Sun",
            "pronunciation": "li-yu-ba",
            "hint": "Rev. N. Stam (1929, p. 160) & Johnston (1919)"
          },
          {
            "target": "ifula",
            "source": "Rain",
            "pronunciation": "i-fu-la",
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "target": "Were / Nasayi",
            "source": "God, the Supreme Creator",
            "pronunciation": "we-re / na-sa-yi",
            "hint": "Rev. N. Stam (1929, pp. 154, 159–160) Wanga religion"
          },
          {
            "target": "Were ankhonyere",
            "source": "May God help me",
            "pronunciation": "we-re ankhonye-re",
            "hint": "Rev. N. Stam (1929, p. 160) traditional blessing"
          },
          {
            "target": "Nasayi akhulinde",
            "source": "May God guard you",
            "pronunciation": "na-sa-yi akhu-linde",
            "hint": "Rev. N. Stam (1929, p. 160) traditional blessing"
          },
          {
            "target": "musiro (muziro)",
            "source": "Clan totem (thing abstained from)",
            "pronunciation": "mu-si-ro",
            "hint": "Stam (1929, pp. 162, 176) & Hobley (1903, p. 347)"
          },
          {
            "target": "ekhyinekha",
            "source": "Soul or shadow",
            "pronunciation": "ekhyi-nekha",
            "hint": "Stam (1929, pp. 162, 176) & Hobley (1903, p. 347)"
          },
          {
            "target": "okhunywa",
            "source": "To drink",
            "pronunciation": "okhunywa",
            "hint": "Class 15 infinitives"
          },
          {
            "target": "okhuliira",
            "source": "To eat",
            "pronunciation": "okhu-lii-ra",
            "hint": "Class 15 infinitives"
          },
          {
            "target": "okhulola",
            "source": "To see",
            "pronunciation": "okhu-lo-la",
            "hint": "Class 15 infinitives"
          },
          {
            "target": "okhumanya",
            "source": "To know",
            "pronunciation": "okhu-manya",
            "hint": "Class 15 infinitives"
          },
          {
            "target": "okhwitsa",
            "source": "To come",
            "pronunciation": "okhwitsa",
            "hint": "Class 15 infinitives"
          },
          {
            "target": "okhuchenda",
            "source": "To walk",
            "pronunciation": "okhuchenda",
            "hint": "Class 15 infinitives"
          }
        ],
        "sentences": [
          {
            "target": "Were ankhonyere; Nasayi akhulinde.",
            "source": "May God help me; may the Creator guard you."
          },
          {
            "target": "Okhunywa amaatsi.",
            "source": "To drink water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"amaatsi / madzi\" in Luhya?",
            "correctAnswer": "Water",
            "options": [
              "Fire",
              "Sun",
              "Rain",
              "Water"
            ],
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omuliro\" in Luhya?",
            "correctAnswer": "Fire",
            "options": [
              "Sun",
              "Rain",
              "Fire",
              "Water"
            ],
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"liyuba (eliuba)\" in Luhya?",
            "correctAnswer": "Sun",
            "options": [
              "Rain",
              "Sun",
              "Water",
              "Fire"
            ],
            "hint": "Rev. N. Stam (1929, p. 160) & Johnston (1919)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sun\" in Luhya?",
            "correctAnswer": "liyuba",
            "options": [
              "liyuba",
              "amaatsi",
              "omuliro",
              "ifula"
            ],
            "hint": "lee-yoo-bah",
            "acceptedAnswers": [
              "liyuba (eliuba)",
              "liyuba"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Rain\" in Luhya?",
            "correctAnswer": "ifula",
            "options": [
              "ifula",
              "amaatsi",
              "omuliro",
              "liyuba"
            ],
            "hint": "ee-foo-lah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "amaatsi / madzi: Water",
            "pairs": [
              {
                "left": "amaatsi / madzi",
                "right": "Water"
              },
              {
                "left": "omuliro",
                "right": "Fire"
              },
              {
                "left": "liyuba (eliuba)",
                "right": "Sun"
              },
              {
                "left": "ifula",
                "right": "Rain"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"God\": ___",
            "correctAnswer": "Were",
            "options": [
              "amaatsi",
              "omuliro",
              "Were",
              "liyuba"
            ],
            "hint": "Rev. N. Stam (1929, pp. 154, 159–160) Wanga religion",
            "acceptedAnswers": [
              "Were / Nasayi",
              "Were"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-3",
    "unitNumber": 3,
    "title": "Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Luhya (Luyia) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902, 1919), Rev. J. B. Purvis (1909), and Rev. John Roscoe (1915).",
    "icon": "Users",
    "color": "#2FA463",
    "skills": [
      {
        "id": "luhya-family-kinship-kinship-elders-3",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "Omwami (Nabongo, pl. Abami)",
            "source": "King / Chief",
            "pronunciation": "omwa-mi",
            "hint": "Rev. N. Stam 1929 pp. 148–149 Wanga royal title"
          },
          {
            "target": "omulina (pl. abalina) / omwitsa",
            "source": "Friend",
            "pronunciation": "o-mu-li-na / omwitsa",
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "target": "omwana (pl. abana / baana)",
            "source": "Child",
            "pronunciation": "omwa-na",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "abana / baana",
            "source": "Children",
            "pronunciation": "a-ba-na / baa-na",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "mukha / omukhasi",
            "source": "Wife",
            "pronunciation": "mukha / o-mukha-si",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omusatsa / omusecha",
            "source": "Husband",
            "pronunciation": "o-mu-satsa / o-mu-se-cha"
          },
          {
            "target": "mama",
            "source": "Mother",
            "pronunciation": "ma-ma",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "papa / taata",
            "source": "Father",
            "pronunciation": "pa-pa / taa-ta",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "gukhu / kukhu",
            "source": "Grandmother",
            "pronunciation": "gu-khu / ku-khu"
          },
          {
            "target": "kuka / guka",
            "source": "Grandfather",
            "pronunciation": "ku-ka / gu-ka"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Omwami\" in Luhya (Luyia)?",
            "correctAnswer": "King",
            "options": [
              "Friend",
              "King",
              "Child",
              "Wife"
            ],
            "hint": "Rev. N. Stam 1929 pp. 148–149 Wanga royal title",
            "acceptedAnswers": [
              "King / Chief",
              "King"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Luhya (Luyia) term to its English meaning:",
            "correctAnswer": "Omwami (Nabongo, pl. Abami): King / Chief",
            "pairs": [
              {
                "left": "Omwami (Nabongo, pl. Abami)",
                "right": "King / Chief"
              },
              {
                "left": "omulina (pl. abalina) / omwitsa",
                "right": "Friend"
              },
              {
                "left": "omwana (pl. abana / baana)",
                "right": "Child / children"
              },
              {
                "left": "mukha / omukhasi",
                "right": "Wife"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya (Luyia) term for \"Husband\": ___",
            "correctAnswer": "omusatsa",
            "options": [
              "Omwami",
              "omusatsa",
              "omulina",
              "omwana"
            ]
          }
        ]
      },
      {
        "id": "luhya-family-kinship-clans-community-3",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "omusolili / omwana",
            "source": "Son / Boy",
            "pronunciation": "o-mu-so-li-li / omwa-na"
          },
          {
            "target": "senge",
            "source": "Aunt",
            "pronunciation": "senge",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "mukhofu",
            "source": "Elder",
            "pronunciation": "mukho-fu",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "oweha",
            "source": "Marriage",
            "pronunciation": "o-we-ha",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "umuchesa",
            "source": "Neighbour",
            "pronunciation": "u-muche-sa",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "mulamu",
            "source": "Sister-in-law",
            "pronunciation": "mu-la-mu",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "msiani",
            "source": "Son",
            "pronunciation": "msia-ni",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "nakufiala",
            "source": "Son-in-law",
            "pronunciation": "na-ku-fia-la",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "baba",
            "source": "Step-father",
            "pronunciation": "ba-ba",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omusolili / omwana\" in Luhya?",
            "correctAnswer": "Son",
            "options": [
              "Aunt",
              "Elder",
              "Marriage",
              "Son"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)",
            "acceptedAnswers": [
              "Son, boy",
              "Son"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"senge\" in Luhya?",
            "correctAnswer": "Aunt",
            "options": [
              "Aunt",
              "Elder",
              "Marriage",
              "Son"
            ],
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mukhofu\" in Luhya?",
            "correctAnswer": "Elder",
            "options": [
              "Marriage",
              "Son",
              "Aunt",
              "Elder"
            ],
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Elder\" in Luhya?",
            "correctAnswer": "mukhofu",
            "options": [
              "omusolili",
              "senge",
              "oweha",
              "mukhofu"
            ],
            "hint": "Starts with \"mu…\" (7 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Marriage\" in Luhya?",
            "correctAnswer": "oweha",
            "options": [
              "oweha",
              "omusolili",
              "senge",
              "mukhofu"
            ],
            "hint": "Starts with \"ow…\" (5 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "omusolili / omwana: Son / Boy",
            "pairs": [
              {
                "left": "omusolili / omwana",
                "right": "Son / Boy"
              },
              {
                "left": "senge",
                "right": "Aunt"
              },
              {
                "left": "mukhofu",
                "right": "Elder"
              },
              {
                "left": "oweha",
                "right": "Marriage"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"Neighbour\": ___",
            "correctAnswer": "umuchesa",
            "options": [
              "umuchesa",
              "omusolili",
              "senge",
              "mukhofu"
            ],
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-4",
    "unitNumber": 4,
    "title": "Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Luhya (Luyia) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902, 1919), Rev. J. B. Purvis (1909), and Rev. John Roscoe (1915).",
    "icon": "Scale",
    "color": "#2FA463",
    "skills": [
      {
        "id": "luhya-numbers-measures-cardinals-ordinals-4",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "ikhumi (likhumi)",
            "source": "Ten",
            "pronunciation": "ikhu-mi",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "shenda (kienda)",
            "source": "Nine",
            "pronunciation": "shenda",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "munane (tsinane)",
            "source": "Eight",
            "pronunciation": "mu-na-ne",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "mufungate (tsisaba)",
            "source": "Seven",
            "pronunciation": "mu-funga-te",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "tsisaasaba (mkaga)",
            "source": "Six",
            "pronunciation": "tsi-saa-sa-ba",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "-osi / tulu",
            "source": "All",
            "pronunciation": "osi / tu-lu",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-inji / -nyishi",
            "source": "Many",
            "pronunciation": "inji / nyishi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-lala / ndala",
            "source": "One",
            "pronunciation": "la-la / nda-la",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-bili / tsimbili",
            "source": "Two",
            "pronunciation": "bi-li / tsimbi-li",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikhumi (likhumi)\" in Luhya?",
            "correctAnswer": "Ten",
            "options": [
              "Nine",
              "Eight",
              "Ten",
              "Seven"
            ],
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"shenda (kienda)\" in Luhya?",
            "correctAnswer": "Nine",
            "options": [
              "Eight",
              "Seven",
              "Nine",
              "Ten"
            ],
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"munane (tsinane)\" in Luhya?",
            "correctAnswer": "Eight",
            "options": [
              "Eight",
              "Seven",
              "Ten",
              "Nine"
            ],
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eight\" in Luhya?",
            "correctAnswer": "munane",
            "options": [
              "ikhumi",
              "shenda",
              "munane",
              "mufungate"
            ],
            "hint": "moo-nah-neh",
            "acceptedAnswers": [
              "munane (tsinane)",
              "munane"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Seven\" in Luhya?",
            "correctAnswer": "mufungate",
            "options": [
              "ikhumi",
              "mufungate",
              "shenda",
              "munane"
            ],
            "hint": "moo-foon-gah-teh / tsee-sah-bah",
            "acceptedAnswers": [
              "mufungate (tsisaba)",
              "mufungate"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "ikhumi (likhumi): Ten",
            "pairs": [
              {
                "left": "ikhumi (likhumi)",
                "right": "Ten"
              },
              {
                "left": "shenda (kienda)",
                "right": "Nine"
              },
              {
                "left": "munane (tsinane)",
                "right": "Eight"
              },
              {
                "left": "mufungate (tsisaba)",
                "right": "Seven"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"Six\": ___",
            "correctAnswer": "tsisaasaba",
            "options": [
              "tsisaasaba",
              "ikhumi",
              "shenda",
              "munane"
            ],
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a",
            "acceptedAnswers": [
              "tsisaasaba (mkaga)",
              "tsisaasaba"
            ]
          }
        ]
      },
      {
        "id": "luhya-numbers-measures-trade-measures-4",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "-taru / tsitaru",
            "source": "Three",
            "pronunciation": "ta-ru / tsi-ta-ru",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-ne / tsine",
            "source": "Four",
            "pronunciation": "ne / tsi-ne",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-raano / tsiraano",
            "source": "Five",
            "pronunciation": "raa-no / tsi-raa-no",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "Sekunde",
            "source": "Second (time unit)",
            "pronunciation": "se-kunde"
          },
          {
            "target": "Ama-kumi ka-tarru / Ama-kumi ka-datu / Kama-gumi ka-taru",
            "source": "Thirty",
            "pronunciation": "ama-kumi ka-tarru / ama-kumi ka-datu / kama-gumi ka-taru"
          },
          {
            "target": "Ama-kumi ka-nne / Kama-gumi ka-nne",
            "source": "Forty",
            "pronunciation": "ama-kumi ka-nne / kama-gumi ka-nne"
          },
          {
            "target": "Ama-kumi ka-rrano / Ama-kumi ka-tano / Kama-gumi ka-rano",
            "source": "Fifty",
            "pronunciation": "ama-kumi ka-rrano / ama-kumi ka-tano / kama-gumi ka-rano"
          },
          {
            "target": "Ama-kana ma-khumi / Si-zumi / Kama-tondo ki-kumi",
            "source": "Thousand",
            "pronunciation": "ama-kana ma-khumi / si-zumi / kama-tondo ki-kumi"
          },
          {
            "target": "-nggi / -inggi",
            "source": "Plenty, many",
            "pronunciation": "nggi / inggi"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-taru / tsitaru\" in Luhya?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Five",
              "Second",
              "Three"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-ne / tsine\" in Luhya?",
            "correctAnswer": "Four",
            "options": [
              "Five",
              "Second",
              "Four",
              "Three"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-raano / tsiraano\" in Luhya?",
            "correctAnswer": "Five",
            "options": [
              "Five",
              "Second",
              "Three",
              "Four"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Five\" in Luhya?",
            "correctAnswer": "-raano",
            "options": [
              "-taru",
              "-raano",
              "-ne",
              "Sekunde"
            ],
            "hint": "Starts with \"-r…\" (6 letters)",
            "acceptedAnswers": [
              "-raano / tsiraano",
              "-raano"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Second (time unit)\" in Luhya?",
            "correctAnswer": "Sekunde",
            "options": [
              "Sekunde",
              "-taru",
              "-ne",
              "-raano"
            ],
            "hint": "Starts with \"Se…\" (7 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "-taru / tsitaru: Three",
            "pairs": [
              {
                "left": "-taru / tsitaru",
                "right": "Three"
              },
              {
                "left": "-ne / tsine",
                "right": "Four"
              },
              {
                "left": "-raano / tsiraano",
                "right": "Five"
              },
              {
                "left": "Sekunde",
                "right": "Second (time unit)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"Thirty\": ___",
            "correctAnswer": "Ama-kumi ka-tarru",
            "options": [
              "-taru",
              "-ne",
              "Ama-kumi ka-tarru",
              "-raano"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)",
            "acceptedAnswers": [
              "Ama-kumi ka-tarru / Ama-kumi ka-datu / Kama-gumi ka-taru",
              "Ama-kumi ka-tarru"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-5",
    "unitNumber": 5,
    "title": "Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Luhya (Luyia) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902, 1919), Rev. J. B. Purvis (1909), and Rev. John Roscoe (1915).",
    "icon": "Tractor",
    "color": "#2FA463",
    "skills": [
      {
        "id": "luhya-food-agriculture-staple-foods-cookery-5",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "obushi (bushi)",
            "source": "Honey",
            "pronunciation": "o-bushi",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "amabele (mabere)",
            "source": "Milk",
            "pronunciation": "a-ma-be-le",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "ebyokhulia (obuma = ugali)",
            "source": "Food",
            "pronunciation": "ebyokhu-lia",
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "target": "eshiamo (pl. ebiamo)",
            "source": "Fruit",
            "pronunciation": "eshia-mo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "inyama",
            "source": "Meat",
            "pronunciation": "inya-ma",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "libuyu (pl. amabuyu)",
            "source": "Egg",
            "pronunciation": "li-bu-yu",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omunyu / omufume",
            "source": "Salt",
            "pronunciation": "o-munyu / o-mu-fu-me",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-yinjikhane",
            "source": "Full",
            "pronunciation": "yinjikha-ne",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-nuru",
            "source": "Fat",
            "pronunciation": "nu-ru"
          }
        ],
        "sentences": [
          {
            "target": "Obushi nende amabele ni ebyokhulia bilayi.",
            "source": "Honey and milk are good foods."
          },
          {
            "target": "Eshiamo ni eshikhulia shilayi.",
            "source": "Fruit is a good food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"obushi\" mean in English?",
            "correctAnswer": "Honey",
            "options": [
              "Honey",
              "Milk",
              "Food",
              "Fruit"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Milk\"",
            "correctAnswer": "amabele",
            "acceptedAnswers": [
              "amabele (mabere)",
              "amabele"
            ],
            "hint": "Starts with \"am\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ebyokhulia\"",
            "correctAnswer": "Food",
            "acceptedAnswers": [
              "Food",
              "Food"
            ],
            "hint": "Starts with \"Fo…\" (4 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Staple Foods, Cookery & Beverages with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "obushi",
                "right": "Honey"
              },
              {
                "left": "amabele",
                "right": "Milk"
              },
              {
                "left": "ebyokhulia",
                "right": "Food"
              },
              {
                "left": "eshiamo",
                "right": "Fruit"
              },
              {
                "left": "inyama",
                "right": "Meat"
              }
            ]
          }
        ]
      },
      {
        "id": "luhya-food-agriculture-crops-livestock-5",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "amafuta / kamafuta",
            "source": "Fat / Oil",
            "pronunciation": "a-ma-fu-ta / ka-ma-fu-ta"
          },
          {
            "target": "inzala / injala",
            "source": "Hunger",
            "pronunciation": "in-za-la / in-ja-la"
          },
          {
            "target": "amaduma",
            "source": "Maize",
            "pronunciation": "a-ma-du-ma"
          },
          {
            "target": "amalwa / omwenge",
            "source": "Millet beer / Palm wine",
            "pronunciation": "a-ma-lwa / omwe-nge"
          },
          {
            "target": "Ifukwa",
            "source": "Yam",
            "pronunciation": "i-fu-kwa"
          },
          {
            "target": "-lia / -lya / -dia",
            "source": "To eat",
            "pronunciation": "li-a / lya / di-a"
          },
          {
            "target": "shilulu",
            "source": "Bitter",
            "pronunciation": "shi-lu-lu",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "shifui",
            "source": "Boil (noun)",
            "pronunciation": "shi-fui",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hunger\" in Luhya?",
            "correctAnswer": "inzala",
            "options": [
              "inzala",
              "amafuta",
              "amaduma",
              "amalwa"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Maize\" in Luhya?",
            "correctAnswer": "amaduma",
            "options": [
              "amafuta",
              "amaduma",
              "amalwa",
              "inzala"
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"Millet beer / Palm wine\": ___",
            "correctAnswer": "amalwa",
            "options": [
              "amafuta",
              "amaduma",
              "amalwa",
              "inzala"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-6",
    "unitNumber": 6,
    "title": "Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Luhya (Luyia) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902, 1919), Rev. J. B. Purvis (1909), and Rev. John Roscoe (1915).",
    "icon": "PawPrint",
    "color": "#2FA463",
    "skills": [
      {
        "id": "luhya-nature-wildlife-land-sky-water-6",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "omusaala / omuti (pl. emisaala)",
            "source": "Tree",
            "pronunciation": "o-mu-saa-la / o-mu-ti",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omutsuru",
            "source": "Forest",
            "pronunciation": "o-mutsu-ru",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "imwo",
            "source": "Seed",
            "pronunciation": "imwo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "lifafu / lisafu (pl. amasafu)",
            "source": "Leaf",
            "pronunciation": "li-fa-fu / li-sa-fu",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omurombo",
            "source": "Root",
            "pronunciation": "o-mu-rombo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "likhoba",
            "source": "Bark (of tree)",
            "pronunciation": "likho-ba",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eshimuli (pl. ebimuli)",
            "source": "Flower",
            "pronunciation": "eshi-mu-li",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "obunyasi",
            "source": "Grass",
            "pronunciation": "o-bunya-si",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eliuba",
            "source": "Sun",
            "pronunciation": "e-liu-ba",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omusaala / omuti (pl. emisaala)\" in Luhya?",
            "correctAnswer": "Tree",
            "options": [
              "Forest",
              "Seed",
              "Tree",
              "Leaf"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omutsuru\" in Luhya?",
            "correctAnswer": "Forest",
            "options": [
              "Seed",
              "Forest",
              "Leaf",
              "Tree"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"imwo\" in Luhya?",
            "correctAnswer": "Seed",
            "options": [
              "Leaf",
              "Tree",
              "Forest",
              "Seed"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Seed\" in Luhya?",
            "correctAnswer": "imwo",
            "options": [
              "omusaala",
              "omutsuru",
              "lifafu",
              "imwo"
            ],
            "hint": "Starts with \"im…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leaf\" in Luhya?",
            "correctAnswer": "lifafu",
            "options": [
              "omusaala",
              "lifafu",
              "omutsuru",
              "imwo"
            ],
            "hint": "Starts with \"li…\" (6 letters)",
            "acceptedAnswers": [
              "lifafu / lisafu (pl. amasafu)",
              "lifafu"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "omusaala / omuti (pl. emisaala): Tree",
            "pairs": [
              {
                "left": "omusaala / omuti (pl. emisaala)",
                "right": "Tree"
              },
              {
                "left": "omutsuru",
                "right": "Forest"
              },
              {
                "left": "imwo",
                "right": "Seed"
              },
              {
                "left": "lifafu / lisafu (pl. amasafu)",
                "right": "Leaf"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"Root\": ___",
            "correctAnswer": "omurombo",
            "options": [
              "omusaala",
              "omutsuru",
              "imwo",
              "omurombo"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ]
      },
      {
        "id": "luhya-nature-wildlife-wildlife-flora-6",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "omwesi",
            "source": "Moon / month",
            "pronunciation": "omwe-si",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "ing'ining'ini",
            "source": "Star",
            "pronunciation": "ing'i-ning'i-ni",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omuchera / omwalo",
            "source": "River",
            "pronunciation": "o-muche-ra / omwa-lo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "inyanza",
            "source": "Lake / sea",
            "pronunciation": "inyanza",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "libale / lichina",
            "source": "Stone",
            "pronunciation": "li-ba-le / lichi-na",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "olufu",
            "source": "Dust",
            "pronunciation": "o-lu-fu",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eshi",
            "source": "Earth",
            "pronunciation": "eshi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eshialo",
            "source": "Country",
            "pronunciation": "eshia-lo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "lilesi",
            "source": "Cloud",
            "pronunciation": "li-le-si",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "loing'ong'we",
            "source": "Fog / mist",
            "pronunciation": "lo-ing'ong'we",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omwesi\" in Luhya?",
            "correctAnswer": "Moon",
            "options": [
              "Star",
              "Moon",
              "River",
              "Lake"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language",
            "acceptedAnswers": [
              "Moon / month",
              "Moon"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ing'ining'ini\" in Luhya?",
            "correctAnswer": "Star",
            "options": [
              "Star",
              "River",
              "Lake",
              "Moon"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omuchera / omwalo\" in Luhya?",
            "correctAnswer": "River",
            "options": [
              "Lake",
              "River",
              "Moon",
              "Star"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"River\" in Luhya?",
            "correctAnswer": "omuchera",
            "options": [
              "omuchera",
              "omwesi",
              "ing'ining'ini",
              "inyanza"
            ],
            "hint": "Starts with \"om…\" (8 letters)",
            "acceptedAnswers": [
              "omuchera / omwalo",
              "omuchera"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lake / sea\" in Luhya?",
            "correctAnswer": "inyanza",
            "options": [
              "inyanza",
              "omwesi",
              "ing'ining'ini",
              "omuchera"
            ],
            "hint": "Starts with \"in…\" (7 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "omwesi: Moon / month",
            "pairs": [
              {
                "left": "omwesi",
                "right": "Moon / month"
              },
              {
                "left": "ing'ining'ini",
                "right": "Star"
              },
              {
                "left": "omuchera / omwalo",
                "right": "River"
              },
              {
                "left": "inyanza",
                "right": "Lake / sea"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"Stone\": ___",
            "correctAnswer": "libale",
            "options": [
              "omwesi",
              "ing'ining'ini",
              "libale",
              "omuchera"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language",
            "acceptedAnswers": [
              "libale / lichina",
              "libale"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-7",
    "unitNumber": 7,
    "title": "The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Luhya (Luyia) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902, 1919), Rev. J. B. Purvis (1909), and Rev. John Roscoe (1915).",
    "icon": "User",
    "color": "#2FA463",
    "skills": [
      {
        "id": "luhya-body-health-anatomy-senses-7",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "amabanga / amalasire / amatsayi",
            "source": "Blood",
            "pronunciation": "a-ma-banga / a-ma-la-si-re / a-matsa-yi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "likumba (pl. amakumba)",
            "source": "Bone",
            "pronunciation": "li-kumba",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "liswi (pl. amaswi)",
            "source": "Hair",
            "pronunciation": "liswi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omurwe / om'rwe (pl. emirwe)",
            "source": "Head",
            "pronunciation": "o-murwe / om'rwe",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eshirwi / okhurwi",
            "source": "Ear",
            "pronunciation": "eshirwi / okhurwi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "imoni (pl. tsimoni) / eliiso",
            "source": "Eye",
            "pronunciation": "i-mo-ni / e-lii-so",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "amolu",
            "source": "Nose",
            "pronunciation": "a-mo-lu",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omunwa (pl. eminwa)",
            "source": "Mouth",
            "pronunciation": "o-munwa",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "Efi-tere",
            "source": "Toe",
            "pronunciation": "efi-tere"
          }
        ],
        "sentences": [
          {
            "target": "Amabanga nende amakumba bili mu mubili.",
            "source": "Blood and bones are in the body."
          },
          {
            "target": "Liswi lili khu murwe.",
            "source": "Hair is on the head."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"amabanga\" mean in English?",
            "correctAnswer": "Blood",
            "options": [
              "Bone",
              "Hair",
              "Blood",
              "Head"
            ],
            "hint": "Core vocabulary in Parts of the Body & Physical Senses"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Bone\"",
            "correctAnswer": "likumba",
            "acceptedAnswers": [
              "likumba (pl. amakumba)",
              "likumba"
            ],
            "hint": "Starts with \"li\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"liswi\"",
            "correctAnswer": "Hair",
            "acceptedAnswers": [
              "Hair",
              "Hair"
            ],
            "hint": "Review Parts of the Body & Physical Senses"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Parts of the Body & Physical Senses with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "amabanga",
                "right": "Blood"
              },
              {
                "left": "likumba",
                "right": "Bone"
              },
              {
                "left": "liswi",
                "right": "Hair"
              },
              {
                "left": "omurwe",
                "right": "Head"
              },
              {
                "left": "eshirwi",
                "right": "Ear"
              }
            ]
          }
        ]
      },
      {
        "id": "luhya-body-health-healing-safety-7",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "elino (pl. ameno)",
            "source": "Tooth",
            "pronunciation": "e-li-no",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "olulimi (pl. tsinzimi)",
            "source": "Tongue",
            "pronunciation": "o-lu-li-mi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "lilaro / eshilenge",
            "source": "Foot",
            "pronunciation": "li-la-ro / eshi-lenge",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eshilenje",
            "source": "Leg",
            "pronunciation": "eshi-lenje",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "lirango",
            "source": "Thigh",
            "pronunciation": "li-rango",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "lisikamo",
            "source": "Knee",
            "pronunciation": "li-si-ka-mo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omukhono (pl. emikhono)",
            "source": "Hand / arm",
            "pronunciation": "o-mukho-no",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "inda",
            "source": "Belly / stomach",
            "pronunciation": "inda",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "amala",
            "source": "Intestines / guts",
            "pronunciation": "a-ma-la",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "likosi",
            "source": "Neck",
            "pronunciation": "li-ko-si",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"elino (pl. ameno)\" in Luhya?",
            "correctAnswer": "Tooth",
            "options": [
              "Tongue",
              "Tooth",
              "Foot",
              "Leg"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"olulimi (pl. tsinzimi)\" in Luhya?",
            "correctAnswer": "Tongue",
            "options": [
              "Foot",
              "Leg",
              "Tooth",
              "Tongue"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"lilaro / eshilenge\" in Luhya?",
            "correctAnswer": "Foot",
            "options": [
              "Leg",
              "Foot",
              "Tooth",
              "Tongue"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Foot\" in Luhya?",
            "correctAnswer": "lilaro",
            "options": [
              "elino",
              "lilaro",
              "olulimi",
              "eshilenje"
            ],
            "hint": "Starts with \"li…\" (6 letters)",
            "acceptedAnswers": [
              "lilaro / eshilenge",
              "lilaro"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leg\" in Luhya?",
            "correctAnswer": "eshilenje",
            "options": [
              "elino",
              "olulimi",
              "lilaro",
              "eshilenje"
            ],
            "hint": "Starts with \"es…\" (9 letters)",
            "acceptedAnswers": [
              "eshilenje / lirango",
              "eshilenje"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "elino (pl. ameno): Tooth",
            "pairs": [
              {
                "left": "elino (pl. ameno)",
                "right": "Tooth"
              },
              {
                "left": "olulimi (pl. tsinzimi)",
                "right": "Tongue"
              },
              {
                "left": "lilaro / eshilenge",
                "right": "Foot"
              },
              {
                "left": "eshilenje / lirango",
                "right": "Leg / thigh"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"Knee\": ___",
            "correctAnswer": "lisikamo",
            "options": [
              "elino",
              "olulimi",
              "lilaro",
              "lisikamo"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-8",
    "unitNumber": 8,
    "title": "Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Luhya (Luyia) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902, 1919), Rev. J. B. Purvis (1909), and Rev. John Roscoe (1915).",
    "icon": "BookOpen",
    "color": "#2FA463",
    "skills": [
      {
        "id": "luhya-verbs-grammar-action-verbs-8",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "okhuloma / okhuboola",
            "source": "Speak",
            "pronunciation": "okhu-lo-ma / okhu-boo-la",
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "target": "okhukona",
            "source": "Sleep",
            "pronunciation": "okhu-ko-na",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhunywa",
            "source": "Drink",
            "pronunciation": "okhunywa",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhuliira / okhulia",
            "source": "Eat",
            "pronunciation": "okhu-lii-ra / okhu-lia",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhwitsa (itsa!)",
            "source": "Come",
            "pronunciation": "okhwitsa",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhutsia (tsia!)",
            "source": "Go",
            "pronunciation": "okhutsia",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhukuna / okhuluma",
            "source": "To bite",
            "pronunciation": "okhu-ku-na / okhu-lu-ma",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhunuuna",
            "source": "To suck",
            "pronunciation": "okhu-nuu-na",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhubita / okhufutsa",
            "source": "To spit",
            "pronunciation": "okhu-bi-ta / okhu-futsa",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okhuloma / okhuboola\" in Luhya?",
            "correctAnswer": "Speak",
            "options": [
              "Speak",
              "Sleep",
              "Drink",
              "Eat"
            ],
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okhukona\" in Luhya?",
            "correctAnswer": "Sleep",
            "options": [
              "Sleep",
              "Drink",
              "Eat",
              "Speak"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okhunywa\" in Luhya?",
            "correctAnswer": "Drink",
            "options": [
              "Drink",
              "Eat",
              "Speak",
              "Sleep"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Drink\" in Luhya?",
            "correctAnswer": "okhunywa",
            "options": [
              "okhunywa",
              "okhuloma",
              "okhukona",
              "okhuliira"
            ],
            "hint": "oh-khoo-nywah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eat\" in Luhya?",
            "correctAnswer": "okhuliira",
            "options": [
              "okhuloma",
              "okhukona",
              "okhunywa",
              "okhuliira"
            ],
            "hint": "oh-khoo-lee-ah",
            "acceptedAnswers": [
              "okhuliira / okhulia",
              "okhuliira"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "okhuloma / okhuboola: Speak",
            "pairs": [
              {
                "left": "okhuloma / okhuboola",
                "right": "Speak"
              },
              {
                "left": "okhukona",
                "right": "Sleep"
              },
              {
                "left": "okhunywa",
                "right": "Drink"
              },
              {
                "left": "okhuliira / okhulia",
                "right": "Eat"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"Come\": ___",
            "correctAnswer": "okhwitsa",
            "options": [
              "okhuloma",
              "okhukona",
              "okhunywa",
              "okhwitsa"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #5a",
            "acceptedAnswers": [
              "okhwitsa (itsa!)",
              "okhwitsa"
            ]
          }
        ]
      },
      {
        "id": "luhya-verbs-grammar-verbal-derivatives-8",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "okhusala",
            "source": "To cough",
            "pronunciation": "okhu-sa-la",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhuutsa / okhufura",
            "source": "To blow",
            "pronunciation": "okhuutsa / okhu-fu-ra",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhuyeera",
            "source": "To breathe",
            "pronunciation": "okhu-yee-ra",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhutsekha",
            "source": "To laugh",
            "pronunciation": "okhutsekha",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhulola",
            "source": "To see",
            "pronunciation": "okhu-lo-la",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhuulira",
            "source": "To hear",
            "pronunciation": "okhuu-li-ra",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhumanya",
            "source": "To know",
            "pronunciation": "okhu-manya",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhupara",
            "source": "To think",
            "pronunciation": "okhu-pa-ra",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhuunya",
            "source": "To smell",
            "pronunciation": "okhuunya",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okhusala\" in Luhya?",
            "correctAnswer": "To cough",
            "options": [
              "To blow",
              "To breathe",
              "To laugh",
              "To cough"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okhuutsa / okhufura\" in Luhya?",
            "correctAnswer": "To blow",
            "options": [
              "To breathe",
              "To blow",
              "To laugh",
              "To cough"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okhuyeera\" in Luhya?",
            "correctAnswer": "To breathe",
            "options": [
              "To laugh",
              "To cough",
              "To breathe",
              "To blow"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To breathe\" in Luhya?",
            "correctAnswer": "okhuyeera",
            "options": [
              "okhusala",
              "okhuutsa",
              "okhuyeera",
              "okhutsekha"
            ],
            "hint": "Starts with \"ok…\" (9 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To laugh\" in Luhya?",
            "correctAnswer": "okhutsekha",
            "options": [
              "okhusala",
              "okhutsekha",
              "okhuutsa",
              "okhuyeera"
            ],
            "hint": "Starts with \"ok…\" (10 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "okhusala: To cough",
            "pairs": [
              {
                "left": "okhusala",
                "right": "To cough"
              },
              {
                "left": "okhuutsa / okhufura",
                "right": "To blow"
              },
              {
                "left": "okhuyeera",
                "right": "To breathe"
              },
              {
                "left": "okhutsekha",
                "right": "To laugh"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"To see\": ___",
            "correctAnswer": "okhulola",
            "options": [
              "okhusala",
              "okhulola",
              "okhuutsa",
              "okhuyeera"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-9",
    "unitNumber": 9,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Luhya (Luyia) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#2FA463",
    "skills": [
      {
        "id": "luhya-pd-corpus-9-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Luhya (Luyia) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Luhya (Luyia) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "wange (-ange)",
            "source": "My (1st sg. possessive)",
            "pronunciation": "wange",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukonde / Masaba)"
          },
          {
            "target": "Ndzidza",
            "source": "I come",
            "pronunciation": "ndzidza",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Ndera",
            "source": "I bring",
            "pronunciation": "nde-ra",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Bali",
            "source": "They are",
            "pronunciation": "ba-li",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Muli",
            "source": "Ye are",
            "pronunciation": "mu-li",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "khuli",
            "source": "We are",
            "pronunciation": "khu-li",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Alu",
            "source": "He is",
            "pronunciation": "alu",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Uru",
            "source": "Thou art",
            "pronunciation": "uru",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"wange (-ange)\" in Luhya (Luyia)?",
            "correctAnswer": "My",
            "options": [
              "I come",
              "I bring",
              "My",
              "They are"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukonde / Masaba)",
            "acceptedAnswers": [
              "My (1st sg. possessive)",
              "My"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Luhya (Luyia) term to its English meaning:",
            "correctAnswer": "wange (-ange): My (1st sg. possessive)",
            "pairs": [
              {
                "left": "wange (-ange)",
                "right": "My (1st sg. possessive)"
              },
              {
                "left": "Ndzidza",
                "right": "I come"
              },
              {
                "left": "Ndera",
                "right": "I bring"
              },
              {
                "left": "Bali",
                "right": "They are"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya (Luyia) term for \"Ye are\": ___",
            "correctAnswer": "Muli",
            "options": [
              "wange",
              "Muli",
              "Ndzidza",
              "Ndera"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          }
        ]
      },
      {
        "id": "luhya-pd-corpus-9-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Luhya (Luyia) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Luhya (Luyia) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "Ndu",
            "source": "I am",
            "pronunciation": "ndu",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Tawi",
            "source": "No, not",
            "pronunciation": "ta-wi",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Racari",
            "source": "Male (of beasts)",
            "pronunciation": "ra-ca-ri",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Iduasi",
            "source": "Female (of mammals)",
            "pronunciation": "i-dua-si",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Nisie",
            "source": "I, me",
            "pronunciation": "ni-sie",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Ngiri",
            "source": "Wart hog",
            "pronunciation": "ngi-ri",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Lucemo, (Ri-, Ma-) (pl. Tsiñgemo)",
            "source": "Raphia palm",
            "pronunciation": "lu-ce-mo",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Alia efu (-efu)",
            "source": "Our (1st pl. possessive)",
            "pronunciation": "a-lia efu",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ndu\" in Luhya (Luyia)?",
            "correctAnswer": "I am",
            "options": [
              "No",
              "Male",
              "I am",
              "Female"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Luhya (Luyia) term to its English meaning:",
            "correctAnswer": "Ndu: I am",
            "pairs": [
              {
                "left": "Ndu",
                "right": "I am"
              },
              {
                "left": "Tawi",
                "right": "No, not"
              },
              {
                "left": "Racari",
                "right": "Male (of beasts)"
              },
              {
                "left": "Iduasi",
                "right": "Female (of mammals)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya (Luyia) term for \"I, me\": ___",
            "correctAnswer": "Nisie",
            "options": [
              "Ndu",
              "Nisie",
              "Tawi",
              "Racari"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-10",
    "unitNumber": 10,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Luhya (Luyia) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#2FA463",
    "skills": [
      {
        "id": "luhya-open-dataset-10-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Sun",
        "description": "Learn core Luhya (Luyia) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Luhya (Luyia) dialects and everyday speech.",
        "words": [
          {
            "target": "Ehei",
            "source": "Castrated ox",
            "pronunciation": "e-hei",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Sirkhanga",
            "source": "Good / Fine",
            "pronunciation": "sirkhanga",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Ekhibia, Efiuma",
            "source": "Iron / Beads",
            "pronunciation": "ekhi-bia e-fiu-ma",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Imbande, Tsimbande",
            "source": "Ground-nut",
            "pronunciation": "imbande tsimbande",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Omuriango",
            "source": "Doorway",
            "pronunciation": "o-mu-riango",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Citere",
            "source": "Daylight",
            "pronunciation": "ci-te-re",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Akhana (pl. Ruana)",
            "source": "Little child / Infant",
            "pronunciation": "akha-na",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Indiwisi",
            "source": "Colobus monkey",
            "pronunciation": "indi-wi-si",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ehei\" in Luhya (Luyia)?",
            "correctAnswer": "Castrated ox",
            "options": [
              "Good",
              "Iron",
              "Ground-nut",
              "Castrated ox"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Luhya (Luyia) term to its English meaning:",
            "correctAnswer": "Ehei: Castrated ox",
            "pairs": [
              {
                "left": "Ehei",
                "right": "Castrated ox"
              },
              {
                "left": "Sirkhanga",
                "right": "Good / Fine"
              },
              {
                "left": "Ekhibia, Efiuma",
                "right": "Iron / Beads"
              },
              {
                "left": "Imbande, Tsimbande",
                "right": "Ground-nut"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya (Luyia) term for \"Doorway\": ___",
            "correctAnswer": "Omuriango",
            "options": [
              "Ehei",
              "Sirkhanga",
              "Ekhibia",
              "Omuriango"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          }
        ]
      },
      {
        "id": "luhya-open-dataset-10-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Luhya (Luyia) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Luhya (Luyia) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "Injobe",
            "source": "Speke's tragelaph",
            "pronunciation": "injo-be",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Ikisi",
            "source": "Cephalophus",
            "pronunciation": "i-ki-si",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "chenanu",
            "source": "Whose",
            "pronunciation": "che-na-nu",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Ketosh / Bukusu)"
          },
          {
            "target": "ewinanu",
            "source": "Who",
            "pronunciation": "e-wi-na-nu",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Ketosh / Bukusu)"
          },
          {
            "target": "nindao",
            "source": "Wait",
            "pronunciation": "nindao",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Ketosh / Bukusu)"
          },
          {
            "target": "siwisi",
            "source": "Unripe",
            "pronunciation": "si-wi-si",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Ketosh / Bukusu)"
          },
          {
            "target": "ni-checho",
            "source": "True",
            "pronunciation": "ni-checho",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Ketosh / Bukusu)"
          },
          {
            "target": "kimirongolo",
            "source": "Trees",
            "pronunciation": "ki-mi-rongo-lo",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Ketosh / Bukusu)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Injobe\" in Luhya?",
            "correctAnswer": "Speke's tragelaph",
            "options": [
              "Cephalophus",
              "Whose",
              "Speke's tragelaph",
              "Who"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Luhya (Luyia) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Injobe: Speke's tragelaph",
            "pairs": [
              {
                "left": "Injobe",
                "right": "Speke's tragelaph"
              },
              {
                "left": "Ikisi",
                "right": "Cephalophus"
              },
              {
                "left": "chenanu",
                "right": "Whose"
              },
              {
                "left": "ewinanu",
                "right": "Who"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya (Luyia) term for \"Wait\": ___",
            "correctAnswer": "nindao",
            "options": [
              "siwisi",
              "nindao",
              "Injobe",
              "Ikisi"
            ],
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Ketosh / Bukusu)"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-11",
    "unitNumber": 11,
    "title": "Hobley Awa-Wanga Royal Chronicle, 8 Fables, Altars & 8 Muziro Totems",
    "description": "Master the 12-generation Awa-Wanga genealogy, 8 Ama-Wanga fables, Masambwa/Muzimo altars, 8 Bantu Kavirondo Muziro totems, livoya tassels, kiketi child naming, and Isira law from C. W. Hobley (1903, pp. 333–358).",
    "icon": "Crown",
    "color": "#2FA463",
    "skills": [
      {
        "id": "luhya-hobley-1903-11-1",
        "title": "12-Generation Awa-Wanga Genealogy, 8 Fables & Masambwa/Muzimo Altars",
        "icon": "BookOpen",
        "description": "Learn the royal lineage from Kuau and Wanga to Sundu, Kwehu, Sakwa, and Mumia, the 8 Ama-Wanga animal fables, and ancestral altar traditions.",
        "tips": "C. W. Hobley (1903, pp. 333–344) records the 12-generation Awa-Wanga genealogy (Kuau → Wanga → Kisesi/Wawala → Mzui/Chewi → Msindalo → Netia & Kiteji → Sundwa → Mkoya [→ Sundu → Mumia] & Kwehu [→ Sakwa → Tomia & Wombani]), 8 animal fables (ending with the elephant–hippo battle at Chikonesi), Ketosh Sangaro Hill & Mrumba fig altars, Awa-Wanga 3-stone Siala altars, and the Murembe peace tree.",
        "words": [
          {
            "target": "Kuau → Wanga → Kisesi (Wawala) → Mzui (Chewi) → Msindalo → Netia & Kiteji",
            "source": "First 6 generations of the Awa-Wanga royal dynasty",
            "pronunciation": "ku-a-u / wa-nga / ki-se-si / m-zu-i / m-si-nda-lo / ne-ti-a",
            "hint": "Hobley (1903, pp. 333–336)"
          },
          {
            "target": "Sundwa → Mkoya (→ Sundu → Mumia) & Kwehu",
            "source": "Later 6 generations of the Awa-Wanga royal dynasty at Mumias, Lumino, and Kimuri",
            "pronunciation": "su-ndwa / m-ko-ya / su-ndu / mu-mi-a / kwe-hu / sa-kwa",
            "hint": "Hobley (1903, pp. 334–336)"
          },
          {
            "target": "Chikonesi",
            "source": "Salt lick on River Nzoia where elephant and hippo slew each other in Kwehu’s reign",
            "pronunciation": "chikonesi"
          },
          {
            "target": "Sumba",
            "source": "Sumba Island dwarfish elves",
            "pronunciation": "sumba"
          },
          {
            "target": "Wa-Nyama kwa Wa-Ware (Bridge Island)",
            "source": "Lusinga twin monoliths of two bulls turned to stone",
            "pronunciation": "wa-nyama-kwa-wa-ware"
          },
          {
            "target": "Masambwa / Muzimo",
            "source": "Ancestral spirits",
            "pronunciation": "masambwa"
          },
          {
            "target": "Sangaro",
            "source": "Sacred granite hill 12 mi. NE of Mumias",
            "pronunciation": "sangaro"
          },
          {
            "target": "Mrumba (mlendege)",
            "source": "Ketosh 4-stone wild fig altar",
            "pronunciation": "mrumba"
          },
          {
            "target": "Siala / Mtarawanda",
            "source": "Awa-Wanga 3-stone Markhamia lutea altar",
            "pronunciation": "siala"
          },
          {
            "target": "Murembe (Ekirikiti)",
            "source": "Sacred coral tree",
            "pronunciation": "murembe"
          },
          {
            "target": "Waka → Wanawaka (m.) / Newaka (f.)",
            "source": "Python charm & names given to next boy or girl born",
            "pronunciation": "waka-wanawaka"
          }
        ],
        "sentences": [
          {
            "target": "Murembe! Were ankhonyere.",
            "source": "Peace! May God help me."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each Bantu Kavirondo sacred site or ritual tree in Hobley (1903, pp. 339–344) with its description:",
            "correctAnswer": "Sangaro Hill & Mrumba: Sacred Ketosh hill & 4-stone wild fig Masambwa altar",
            "pairs": [
              {
                "left": "Sangaro Hill & Mrumba",
                "right": "Sacred Ketosh hill & 4-stone wild fig Masambwa altar"
              },
              {
                "left": "Siala / Mtarawanda",
                "right": "Awa-Wanga 3-stone Muzimo altar tree (Markhamia lutea)"
              },
              {
                "left": "Murembe (Ekirikiti)",
                "right": "Sacred Erythrina peace tree ('murembe' = peace)"
              }
            ]
          }
        ]
      },
      {
        "id": "luhya-hobley-1903-11-2",
        "title": "The 8 Bantu Kavirondo Muziro Totems, Livoya & Kiketi Naming",
        "icon": "Shield",
        "description": "Practice the 8 clan totems (Muziro), Nyole rain-maker lineage, livoya tassels, quail & kiketi naming rites, and the Isira blood-feud taboo.",
        "tips": "Hobley (1903, p. 347) lists 8 Bantu Kavirondo Muziro totems: Imbongo (bushbuck — Kisesi of Awa-Wanga), Kuru/Ikulu (waterbuck — Marama, Tsoso, Isukha), Liusi (pigeon — Awa-Genya & Awa-Mrashi), Njofu (elephant — Awa-Shekwi of Nyole), Makuyi (black-and-white stork — Ketosh), Isunu (reedbuck — Ngaki of Tasoni), Imbongo/Ngawe (bushbuck — Ithako, E. Tsoso, S. Kabras), and Mbiakalo (cooked flying white ants — Kabras).",
        "words": [
          {
            "target": "Muziro: Imbongo (Ngawe)",
            "source": "Bushbuck",
            "pronunciation": "muziro-imbongo"
          },
          {
            "target": "Kuru (Ikulu)",
            "source": "Waterbuck (Marama, Tsoso, Isukha)",
            "pronunciation": "kuru"
          },
          {
            "target": "Isunu",
            "source": "Reedbuck (Ngaki of Tasoni)",
            "pronunciation": "isunu"
          },
          {
            "target": "Liusi",
            "source": "Pigeon (Awa-Genya & Awa-Mrashi)",
            "pronunciation": "liusi"
          },
          {
            "target": "Njofu",
            "source": "Elephant (Awa-Shekwi of Nyole)",
            "pronunciation": "njofu"
          },
          {
            "target": "Makuyi",
            "source": "Locust stork (Ketosh)",
            "pronunciation": "makuyi"
          },
          {
            "target": "Mbiakalo",
            "source": "Cooked flying white ants (Kabras)",
            "pronunciation": "mbiakalo"
          },
          {
            "target": "Mgahanya",
            "source": "Chief and rain-maker of the Shekwi clan of Nyole",
            "pronunciation": "mgahanya"
          },
          {
            "target": "Kayenga",
            "source": "Maragolia Hills host",
            "pronunciation": "kayenga"
          },
          {
            "target": "Livoya",
            "source": "Married woman’s 12 in. black-dyed fibre tassel",
            "pronunciation": "livoya"
          },
          {
            "target": "Kiketi",
            "source": "Pale blue naming bead with live quail & cowrie",
            "pronunciation": "kiketi"
          },
          {
            "target": "Isira",
            "source": "Fatal blood-feud meal taboo",
            "pronunciation": "isira"
          }
        ],
        "sentences": [
          {
            "target": "Muziro wa Kisesi ni Imbongo.",
            "source": "The clan totem (muziro) of the Kisesi clan of Awa-Wanga is the bushbuck (imbongo)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "According to C. W. Hobley (1903, p. 347), which Muziro totem is observed by the Kabras tribe (who may eat the insect raw, but never cooked)?",
            "correctAnswer": "Mbiakalo",
            "options": [
              "Mbiakalo",
              "Makuyi",
              "Liusi",
              "Isunu"
            ],
            "hint": "Hobley (1903, p. 347 — Totem #8)",
            "acceptedAnswers": [
              "Mbiakalo (flying white ants when cooked)",
              "Mbiakalo"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Bantu Kavirondo cultural term in Hobley (1903, pp. 347–358) with its meaning:",
            "correctAnswer": "Livoya: Married woman’s 12-inch black-dyed fibre tassel (p. 350)",
            "pairs": [
              {
                "left": "Livoya",
                "right": "Married woman’s 12-inch black-dyed fibre tassel (p. 350)"
              },
              {
                "left": "Makuyi",
                "right": "Ketosh clan totem: black-and-white locust-eating stork (p. 347)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-12",
    "unitNumber": 12,
    "title": "Set 8 Vocabularies & the 16 Lukonde Noun Prefixes (Johnston 1902)",
    "description": "Master the 16 archaic disyllabic prefixes of Lukonde (p. 1001), Set 8 comparative vocabulary across 5 Luhya/Masaba dialects (pp. 980–992), and Chapter XVII Bantu Kavirondo ethnography (pp. 722–755).",
    "icon": "Layers",
    "color": "#2FA463",
    "skills": [
      {
        "id": "luhya-johnston-1902-set8-prefixes-skill",
        "title": "The 16 Lukonde Prefixes, Lusōkwia Tens & Set 8 Vocabulary",
        "icon": "BookOpen",
        "description": "Practice the 16 Lukonde prefixes that solved Bleek's Bantu concord hypothesis and verified Set 8 entries.",
        "tips": "West Elgon Lukonde/Masaba preserves full disyllabic prefixes: Umu- (Cl. 1), Baba- (Cl. 2), Gumu- (Cl. 3), Gimi- (Cl. 4), Ili- (Cl. 5), Gama- (Cl. 6), Bibi- (Cl. 8), Lulu- (Cl. 11), Ruru-/Tutu- (Cl. 12), Kaka- (Cl. 13), Bubu- (Cl. 14), Kuku- (Cl. 15).",
        "words": [
          {
            "target": "Kuku- (Gu-)",
            "source": "Class 15 prefix (concord ku-, gu-)",
            "pronunciation": "ku-ku / gu"
          },
          {
            "target": "Ha- (Wa-)",
            "source": "Class 16 locative prefix (concord ha-, wa-)",
            "pronunciation": "ha / wa"
          },
          {
            "target": "Kamagumi kabili (20)",
            "source": "Twenty",
            "pronunciation": "kamagumi-kabili"
          },
          {
            "target": "Kamagumi katatu (30)",
            "source": "Thirty",
            "pronunciation": "kamagumi-katatu"
          },
          {
            "target": "Kamagumi kanne (40)",
            "source": "Forty",
            "pronunciation": "kamagumi-kanne"
          },
          {
            "target": "Kamagumi karano (50)",
            "source": "Fifty",
            "pronunciation": "kamagumi-karano"
          },
          {
            "target": "Akhana (pl. Ruana)",
            "source": "Little child",
            "pronunciation": "akhana"
          },
          {
            "target": "Iduasi",
            "source": "Female (of mammals & reptiles)",
            "pronunciation": "iduasi"
          },
          {
            "target": "Racari",
            "source": "Male (of beasts)",
            "pronunciation": "racari"
          },
          {
            "target": "Olumutana / Sirkhanga / Obukanga",
            "source": "Good spirit",
            "pronunciation": "olumutana"
          },
          {
            "target": "Injugu / Imbande",
            "source": "Ground-nut",
            "pronunciation": "injugu"
          },
          {
            "target": "Ihumba",
            "source": "Small nose",
            "pronunciation": "ihumba"
          },
          {
            "target": "Mwieka",
            "source": "Breeze",
            "pronunciation": "mwieka"
          },
          {
            "target": "Ehei",
            "source": "Castrated bullock",
            "pronunciation": "ehei"
          },
          {
            "target": "Alia efu",
            "source": "Our eating",
            "pronunciation": "alia-efu"
          }
        ],
        "sentences": [
          {
            "target": "Lidala liefu (Esialo siefwe) — Ingo yeru — Ingo yefu — Alia efu.",
            "source": "Our town (Lunyara, Lukabarasi, Lurimi) — Our eating."
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-13",
    "unitNumber": 13,
    "title": "Rev. N. Stam 'The Bahanga'",
    "description": "Master 100% of Rev. N. Stam's 1929 monograph 'The Bahanga' (Catholic Anthropological Conference, Vol. I, No. 4, pp. 143–179): the 11-generation Bakhitsetse royal genealogy from Kwandedi & Wanga to Mumia, Osundwa II, and Rapando, burial & sacrificial diagrams (Figs. 1–2), 5 special sacrifices, 6 practitioners, 2 ordeals, 10 omens, twins, marriage, and musiro totems.",
    "icon": "Crown",
    "color": "#2FA463",
    "skills": [
      {
        "id": "luhya-stam-1929-13-1-history-genealogy-burial",
        "title": "Tribal History, 11-Generation Bakhitsetse Genealogy & Burial Rites",
        "icon": "Crown",
        "description": "Learn the p. 145 Map terms, the royal lineage from Kwandedi and Wanga to Mumia, Osundwa II, and Rapando, royal sitting burial & Matungo bone procession, and Fig. 1 commoner burial positions.",
        "tips": "On the p. 145 Map, the country is Buhanga, the language Luhanga, a native Muhanga, and the people Bahanga. Wanga hid his royal thick copper bracelet under his skin cloak while sweeping for Muyima on Imanga hill, was joined at Bijifi by 3 Kabras clans (Bakyero/Bakhyero, Banamagwa, Bakhyikawa), founded Mumias and Matungo, and founded the Bakhitsetse royal line.",
        "words": [
          {
            "target": "Buhanga",
            "source": "Country of the Bahanga",
            "pronunciation": "buhanga"
          },
          {
            "target": "Luhanga",
            "source": "Language of the Bahanga",
            "pronunciation": "luhanga"
          },
          {
            "target": "Muhanga (sg.)",
            "source": "Native (singular)",
            "pronunciation": "muhanga"
          },
          {
            "target": "Bahanga",
            "source": "Natives (plural) (Map, p. 145)",
            "pronunciation": "bahanga"
          },
          {
            "target": "Kwandedi → Wanga & Khabiagala → Waballa & Murono (→ Kitai)",
            "source": "Early Bahanga royal genealogy from Teriki & Khyira/Bwagwe (Kabras) to Imanga",
            "pronunciation": "kwandedi-wanga-khabiagala-waballa",
            "hint": "Stam (1929, pp. 143–148)"
          },
          {
            "target": "Wamukoya [I] → Netya & Kweyu",
            "source": "Later Bahanga royal genealogy of the Bakhitsetse family at Mumias/Matungo",
            "pronunciation": "wamukoya-netya-kweyu",
            "hint": "Stam (1929, pp. 146–148)"
          },
          {
            "target": "okhufwa",
            "source": "Death / to die",
            "pronunciation": "okhufwa"
          },
          {
            "target": "okhuyaberwa",
            "source": "Burial / to be buried",
            "pronunciation": "okhuyaberwa"
          },
          {
            "target": "ekhyirindwa",
            "source": "Grave",
            "pronunciation": "ekhyirindwa"
          },
          {
            "target": "okhusenera ekhyirindwa ekhyo mwami",
            "source": "'To fix the grave of the chief'",
            "pronunciation": "okhusenera-ekhyirindwa-ekhyo-mwami"
          },
          {
            "target": "inkokho eyo mukulikho",
            "source": "Chicken of the burial (roasted unplucked)",
            "pronunciation": "inkokho-eyo-mukulikho"
          },
          {
            "target": "okhuba khu maziga",
            "source": "The great bewailing",
            "pronunciation": "okhuba-khu-maziga"
          },
          {
            "target": "okhukalusya evigumba",
            "source": "'To return the bones'",
            "pronunciation": "okhukalusya-evigumba"
          },
          {
            "target": "okhusenera ekhyirindwa",
            "source": "'To fasten the grave'",
            "pronunciation": "okhusenera-ekhyirindwa"
          },
          {
            "target": "omuyima",
            "source": "Burial dance (1 year later)",
            "pronunciation": "omuyima"
          }
        ],
        "sentences": [
          {
            "target": "Okhusenera ekhyirindwa ekhyo mwami khu Matungo.",
            "source": "To fix the grave of the chief at Matungo."
          }
        ]
      },
      {
        "id": "luhya-stam-1929-13-2-sacrifices-religion-practitioners",
        "title": "Kraal Sacrificial Stones, Special Sacrifices & Practitioners",
        "icon": "Sparkles",
        "description": "Master the Fig. 2 sacrificial stone layout, the 3-generation ancestral invocation, the 5 special sacrifices, Nasayi/Were prayers, 6 medical/magical practitioners, 2 ordeals, and 10 omens.",
        "tips": "In Fig. 2 (p. 153), two ancestral stones (amagina ake misambwa) stand 10 ft in front of the first wife's hut flanking the 4-ft lusambwa/lusiola pole (from obsolete samba 'build' → reversive sambula 'break down'), with the miniature khatsu khe misango hut to the left and two flat pathway stones (amagina ako lunganyi) outside the kraal entrance dedicated to Nasayi/Were.",
        "words": [
          {
            "target": "omumali owe misango",
            "source": "The sacrificer",
            "pronunciation": "omumali-owe-misango"
          },
          {
            "target": "omusango (okhumala omusango)",
            "source": "Sacrifice (to sacrifice)",
            "pronunciation": "omusango"
          },
          {
            "target": "amagina ake misambwa",
            "source": "Two stones of the ancestral spirits",
            "pronunciation": "amagina-ake-misambwa"
          },
          {
            "target": "lusambwa / lusiola (samba → sambula)",
            "source": "4-ft Markhamia platycalyx pole from the khyemebekho/khyembekho grove",
            "pronunciation": "lusambwa"
          },
          {
            "target": "khatsu khe misango",
            "source": "Little hut of the sacrifices (left of 1st wife's hut)",
            "pronunciation": "khatsu-khe-misango"
          },
          {
            "target": "amagina ako lunganyi",
            "source": "Two flat stones on the pathway outside kraal gate dedicated to Nasayi/Were",
            "pronunciation": "amagina-ako-lunganyi"
          },
          {
            "target": "amalwa / ingombe / inkokho / isindu eye misango",
            "source": "Sacrificial beer, cow, chicken & quail",
            "pronunciation": "amalwa"
          },
          {
            "target": "abakuku mulire omu",
            "source": "Grandfathers, eat here",
            "pronunciation": "abakuku-mulire-omu"
          },
          {
            "target": "evinambwa mulire omu",
            "source": "Great-grandfathers, eat here",
            "pronunciation": "evinambwa-mulire-omu"
          },
          {
            "target": "evisoni mulire omu",
            "source": "Great-great-grandfathers, eat here",
            "pronunciation": "evisoni-mulire-omu"
          },
          {
            "target": "okhutisa imbusi (4 cases)",
            "source": "Banging a goat's head around the hut",
            "pronunciation": "okhutisa-imbusi"
          },
          {
            "target": "Nasayi (< sayo) & Were",
            "source": "God ('the one adored' < sayo) & Creator",
            "pronunciation": "nasayi-were"
          },
          {
            "target": "liyuba",
            "source": "The sun",
            "pronunciation": "liyuba"
          },
          {
            "target": "Were ankhonyere",
            "source": "'God has helped me' (p. 160)",
            "pronunciation": "were-ankhonyere"
          },
          {
            "target": "Nasayi akhulinde",
            "source": "'May God protect you' (p. 161)",
            "pronunciation": "nasayi-akhulinde"
          },
          {
            "target": "ekhyinekha & vikhyeno",
            "source": "Immortal soul/shadow & evil spirits (p. 162)",
            "pronunciation": "ekhyinekha-vikhyeno"
          },
          {
            "target": "omusebe (sitani)",
            "source": "Masai-grave possession",
            "pronunciation": "omusebe"
          },
          {
            "target": "balosi (mulosi)",
            "source": "Bewitchers",
            "pronunciation": "balosi"
          },
          {
            "target": "omundu owe misala",
            "source": "Herbalist/cupping surgeon",
            "pronunciation": "omundu-owe-misala"
          },
          {
            "target": "omundu owe mikalo",
            "source": "Charm doctor",
            "pronunciation": "omundu-owe-mikalo"
          },
          {
            "target": "omufumo",
            "source": "Diviner",
            "pronunciation": "omufumo"
          },
          {
            "target": "omufira",
            "source": "Poison-man (2-cow cure)",
            "pronunciation": "omufira"
          },
          {
            "target": "ekhyilulu",
            "source": "Ordeal",
            "pronunciation": "ekhyilulu"
          },
          {
            "target": "amayoni amabi",
            "source": "10 bad-bird omens",
            "pronunciation": "amayoni-amabi"
          }
        ],
        "sentences": [
          {
            "target": "Abakuku mulire omu; evinambwa mulire omu; evisoni mulire omu.",
            "source": "Grandfathers, eat here; great-grandfathers, eat here; great-great-grandfathers, eat here."
          },
          {
            "target": "Were ankhonyere! Nasayi akhulinde.",
            "source": "God has helped me! May God protect you."
          }
        ]
      },
      {
        "id": "luhya-stam-1929-13-3-adoption-twins-marriage-totems-circumcision",
        "title": "Makokha Adoption, Twins (Amakhwana), Marriage & Musiro Totems",
        "icon": "Heart",
        "description": "Practice the Luhanga terminology and customs for roadway foundling adoption, twin purification, 10-cattle dowry & wedding rites, Isaac's antelope totem, mutilations, and circumcision.",
        "tips": "All Bahanga have Isaac's antelope (Boöcercus eurycerus) as their totem (musiro, 'the thing abstained from'), while Bahanga of Marama have the eland; totems are patrilineal and do not prevent intermarriage (only blood kinship bars marriage). Women never eat chickens, guinea fowl, eggs, sheep, suckling goat, or lepidosiren mudfish.",
        "words": [
          {
            "target": "Makokha",
            "source": "Name ('rubbish') given to a foundling child adopted at a road junction",
            "pronunciation": "ma-ko-kha",
            "hint": "Stam (1929, p. 171)"
          },
          {
            "target": "amakhwana",
            "source": "Twins",
            "pronunciation": "amakhwana"
          },
          {
            "target": "okhutsiya khu makwana",
            "source": "'To go to the twins'",
            "pronunciation": "okhutsiya-khu-makwana"
          },
          {
            "target": "okhutekherana",
            "source": "To marry",
            "pronunciation": "okhutekherana"
          },
          {
            "target": "okhukhua omukhana",
            "source": "To pay the dowry",
            "pronunciation": "okhukhua-omukhana"
          },
          {
            "target": "okhusira imbusi",
            "source": "'To jump over the goat'",
            "pronunciation": "okhusira-imbusi"
          },
          {
            "target": "ingombe yarando",
            "source": "'The stripped cow'",
            "pronunciation": "ingombe-yarando"
          },
          {
            "target": "musiro",
            "source": "Clan totem",
            "pronunciation": "musiro"
          },
          {
            "target": "isambirire",
            "source": "Grass used with saliva & cobwebs to burn the 3-stroke cheek mark (\\|/, 1.25 in.)",
            "pronunciation": "isambirire"
          },
          {
            "target": "okhukhyebwa & irumbi",
            "source": "Circumcision & 4–5 month seclusion hut",
            "pronunciation": "okhukhyebwa-irumbi"
          }
        ],
        "sentences": [
          {
            "target": "Okhutekherana nende okhukhua omukhana: okhusira imbusi.",
            "source": "To marry ('boil for one another') and to pay the bride-dowry: jumping over the goat."
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-14",
    "unitNumber": 14,
    "title": "Logoori, Luragooli & Lubukusu in Payne, Pacchiarotti & Bosire",
    "description": "Master all six Luhya-focused studies in 'Diversity in African languages' (2016): Logoori coronal palatalization (Ch. 9), 6 future inflections & 4 future constructions (Ch. 11), universal quantifiers vuri vs. -oosi (Ch. 12), Luragooli anticausative -Vk (Ch. 15), Lubukusu Transitive Reciprocal Constructions (Ch. 25), and Luhya enclitics in Kenyan comedy (Ch. 28).",
    "icon": "BookOpen",
    "color": "#0D9488",
    "skills": [
      {
        "id": "luhya-payne-2016-14-1-logoori-palatalization-futures",
        "title": "Logoori Coronal Palatalization & Oral-Text Future Tenses",
        "icon": "Volume2",
        "description": "Learn Logoori's 7-vowel system, dental/glottal palatalization, /h/-plosivization, coronal consonant-glide reduction (sj → ʃ), and the 6 future inflections and 4 auxiliary/subjunctive future constructions.",
        "tips": "In Glewwe & Aly (2016, Ch. 9, pp. 165–183), verbs with [ʃ] in the infinitive whose 1SG is [ʃ] rather than [mb] have underlying /si/ (e.g., /ko-siɛ-a/ → [koʃja] 'to grind', 1SG [ʃjɛɛzaa]) rather than /h/ (/ko-he-a/ → [koʃa] 'to burn', 1SG [mbezaa]). In Sarvasy (2016, Ch. 11, pp. 201–219), Logoori oral texts use SP-ra- -a for both near (hodiernal/crastinal) and general future, plus auxiliary kʊman̪a ('to know') + Subjunctive.",
        "words": [
          {
            "target": "Nj̪-anz-aa → n̪anzaa",
            "source": "I like",
            "pronunciation": "nj-anz-aa / nanzaa"
          },
          {
            "target": "N-man̪-aa → man̪aa vs. N-man̪-i → maɲi",
            "source": "I know vs. I knew",
            "pronunciation": "n-man-aa / manaa vs. ma-nyi"
          },
          {
            "target": "ka-n̪un̪i → kaɲuɲi",
            "source": "small bird",
            "pronunciation": "ka-nu-ni / ka-nyu-nyi"
          },
          {
            "target": "a-hir-aa → aʃiɾaa",
            "source": "s/he is taking",
            "pronunciation": "a-hi-raa / a-shi-raa"
          },
          {
            "target": "ko-roh-a → koroha vs. ko-roh-i → koroʃi",
            "source": "to get tired vs. we got tired (h → ʃ / __ i)",
            "pronunciation": "ko-ro-ha vs. ko-ro-shi"
          },
          {
            "target": "ke-hia → keʃa vs. eN-hia → embja",
            "source": "new in Class 7 (hj → ʃ) vs. Class 9 (N-h → mb)",
            "pronunciation": "ke-hia / ke-sha vs. e-mbja"
          },
          {
            "target": "ko-siɛ-a → koʃja vs. ko-he-a → koʃa",
            "source": "to grind vs. to burn",
            "pronunciation": "ko-ʃja / ʃjɛɛ-zaa / ko-ʃa / mbe-zaa",
            "hint": "Glewwe & Aly (2016, Ch. 9, pp. 176–179, Ex. 22, 26)"
          },
          {
            "target": "Mu-gamba, a-ra-zj-a mʊ ɪ-skuru / V-oosi va-ra-ɲor-a ɪ-taʤi",
            "source": "Tomorrow s/he will go to school / Everyone will get a crown (Near/General Future SP-ra- -a)",
            "pronunciation": "mu-ga-mba a-ra-zja mu i-sku-ru"
          },
          {
            "target": "Na-kʊ-sjaj-e Majki w-etu ma-uwa",
            "source": "We will plant flowers for our Mike (Middle Future na-SP- -e)",
            "pronunciation": "na-ku-sja-je maj-ki we-tu ma-u-wa"
          },
          {
            "target": "A-raka-ataɲ-e kʊ ɪ-sjoŋgo ɪ-jɪ, n-daka-mu-ʃir-e wa gʊ-nani",
            "source": "If s/he breaks this waterpot, I will take him/her to the ogre (Remote Future SP-raka- -e)",
            "pronunciation": "a-ra-ka-a-ta-nye ku i-sjo-ngo i-ji"
          },
          {
            "target": "Naa-a-kor-e ɪ-gaasi",
            "source": "S/he will do the work (Long-Vowel Remote Future naa-SP- -e)",
            "pronunciation": "naa-a-ko-re i-gaa-si"
          },
          {
            "target": "Si va-ri-ɲar-a mba",
            "source": "They will never manage (Indefinite Future SP-ri- -a)",
            "pronunciation": "si va-ri-nya-ra mba"
          },
          {
            "target": "Mu-gamba, man̪-a n-zj-e mʊ ɪ-skuru",
            "source": "Tomorrow, I will go to school",
            "pronunciation": "mu-gamba"
          },
          {
            "target": "Ma mu-gamba ma-m-bok-e, ma-n-zj-e kʊ ɪ-gaasi j-eende",
            "source": "And tomorrow I will wake up and go to my work (ma- + Subjunctive)",
            "pronunciation": "ma-mu-gamba-ma-m-bok-e"
          }
        ],
        "sentences": [
          {
            "target": "Mu-gamba, a-ra-zj-a mʊ ɪ-skuru",
            "source": "Tomorrow, s/he will go to school."
          }
        ]
      },
      {
        "id": "luhya-payne-2016-14-2-quantifiers-anticausative-bukusu-trc",
        "title": "Logoori Quantifiers, Anticausative -Vk & Lubukusu Reciprocals",
        "icon": "Layers",
        "description": "Compare distributive vuri ('every') vs. modifier -oosi ('all/whole/any'), Luragooli telic anticausative -Vk, Lubukusu transitive reciprocals (-an + ba-b-eene khu b-eene), and Luhya discourse markers in Kenyan stand-up comedy.",
        "tips": "In Landman (2016, Ch. 12), vuri ('every') is a strictly distributive D-head, whereas -oosi ('all, whole, any') is an agreeing AP modifier that can co-occur with vuri: soom-i vuri ki-tabu ch-oosi ('I read every whole book', p. 224). In Safir & Selvanathan (2016, Ch. 25), Lubukusu Ba-saani ba-a-biyil-an-a khu-khil-a ba-khasi allows both sloppy ('more than women hate each other') and strict ('more than women hate the men') readings, proving ba-b-eene khu b-eene is a direct object.",
        "words": [
          {
            "target": "vuri muundu a-syeev-i vs. vaandu v-oosi va-syeev-i",
            "source": "Every person danced vs. All the people danced",
            "pronunciation": "vuri-muundu-a-syeev-i-vs"
          },
          {
            "target": "soom-i vuri ki-tabu ch-oosi",
            "source": "I read every whole book",
            "pronunciation": "soom-i-vuri-ki-tabu-ch-oosi"
          },
          {
            "target": "muriaŋgo gu-aram-ik-i kuturona na imboza",
            "source": "The door opened from the wind",
            "pronunciation": "muriaŋgo-gu-aram-ik-i-kuturona-na"
          },
          {
            "target": "n-eny-a murianggo gu-han-ek-ɛ",
            "source": "I want the door to be in a closed state",
            "pronunciation": "n-eny-a-murianggo-gu-han-ek-e"
          },
          {
            "target": "ku-ɲig-ik-a vs. ku-vun-ik-a",
            "source": "to be ticklish (Class Ia experiencer) vs. to break (Class Ib affected-object taking -Vk)",
            "pronunciation": "ku-nyi-gi-ka vs. ku-vu-ni-ka",
            "hint": "Gluckman & Bowler (2016, Ch. 15, p. 283, Table 4)"
          },
          {
            "target": "Ba-saani ba-a-biyil-an-a khu-khil-a ba-khasi",
            "source": "The men hate each other more than the women [hate each other / hate the men]",
            "pronunciation": "ba-saani-ba-a-biyil-an-a-khu-khil-a-ba-khasi"
          },
          {
            "target": "Ba-khasi ba-a-i-yeet-an-a",
            "source": "The women helped each other and themselves",
            "pronunciation": "ba-khasi-ba-a-i-yeet-an-a"
          },
          {
            "target": "kuipia mama mja mzito",
            "source": "To steal from an expectant mother (Luhya-accented Swahili in Smart Joker, Ex. 9)",
            "pronunciation": "kuipia-mama-mja-mzito"
          }
        ],
        "sentences": [
          {
            "target": "Ba-saani ba-fumi-an-a ba-be-ene khu be-ene lukali",
            "source": "The men praised each other a lot."
          }
        ]
      },
      {
        "id": "luhya-selvanathan-2019-lubukusu-iav-focus-purvis-1909",
        "title": "Lubukusu IAV Focus Asymmetry & Purvis (1909) Lumasaba",
        "icon": "Sparkles",
        "description": "Master Naga Selvanathan's (2019, Ch. 32, pp. 623–645, DOI: 10.5281/zenodo.3367191) case-based analysis of Lubukusu Immediate-After-Verb (IAV) focus alongside Rev. J. B. Purvis's (1909, Chs. XV–XVI, pp. 317–351) Lumasaba grammar, July 20, 1907 letter, and 3 Bagisu fables.",
        "tips": "In Lubukusu (Selvanathan 2019, pp. 625–636, consultant Justine Sikuku), a focused nominal DP must move to the Immediate-After-Verb (IAV) Spec,FP position (Wekesa a-a-ra embeba kalaha; *Wekesa a-a-ra kalaha embeba), whereas a focused non-nominal manner adjunct (kalaha 'slowly') only appears immediately after the verb when the object DP is dislocated with an object marker (Wekesa a-ki-ra kalaha ekikombe).",
        "words": [
          {
            "target": "Wekesa a-a-ra embeba kalaha vs. Wekesa a-ki-ra kalaha (ekikombe)",
            "source": "Lubukusu nominal DP vs. non-nominal manner adjunct IAV focus asymmetry",
            "pronunciation": "we-ke-sa a-a-ra e-mbe-ba ka-la-ha / a-ki-ra ka-la-ha",
            "hint": "Naga Selvanathan (2019, Ch. 32, pp. 623–645, DOI: 10.5281/zenodo.3367191, consultant Justine Sikuku)"
          },
          {
            "target": "Ibaruwa ya Nayu: 'Nakuchyesere lugali mulebe wase: Wena? ugona oryena?'",
            "source": "Verbatim 1907 Lumasaba letter",
            "pronunciation": "i-ba-ru-wa ya na-yu na-ku-chye-se-re",
            "hint": "Rev. J. B. Purvis, Through Uganda to Mount Elgon (1909, Ch. XV, pp. 324–325)"
          },
          {
            "target": "tsingano",
            "source": "Fables / traditional folk tales",
            "pronunciation": "tsi-nga-no"
          }
        ],
        "sentences": [
          {
            "target": "Wekesa a-a-ra embeba kalaha",
            "source": "Wekesa killed the rat slowly (object DP focus in IAV)."
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-15",
    "unitNumber": 15,
    "title": "Modern Luhya Conversation & Civic Life",
    "description": "Everyday Marachi, Maragoli, Wanga, and Bukusu sentences, riddles, and civic vocabulary from Project Tafsiri v2.0 and Kencorpus",
    "icon": "MessageCircle",
    "color": "#10B981",
    "skills": [
      {
        "id": "luhya-open-skill-1",
        "title": "Everyday Conversation & Community",
        "icon": "MessageSquare",
        "description": "Conversational expressions across Lumarachi, Lulogooli, Luwanga, and Lubukusu",
        "grammarTip": "In Luhya dialects, 'Mirembe' expresses peace and greeting, while 'tawe' (Lubukusu/Lumarachi) and 'dave' (Lulogooli) mark clause-final negation.",
        "culturalNote": "Sourced from Dr. Moody Amakobe's Project Tafsiri v2.0 (mamakobe/luhya-multilingual-dataset, CC-BY-4.0) and Kencorpus (Wanjawa et al. 2022/2023, CC-BY-4.0).",
        "words": [
          {
            "target": "Mirembe munyumba yange",
            "source": "Peace in my house / Hello everyone inside",
            "pronunciation": "mi-re-mbe mu-nyu-mba ya-nge"
          },
          {
            "target": "Mulina wange ogoti",
            "source": "My friend is lost",
            "pronunciation": "mu-li-na wa-nge o-go-ti"
          },
          {
            "target": "eliaro",
            "source": "Boat or canoe (Luwanga)",
            "pronunciation": "e-li-a-ro"
          },
          {
            "target": "Obulwaye bwa Korona",
            "source": "Coronavirus disease",
            "pronunciation": "o-bu-lwa-ye bwa ko-ro-na"
          },
          {
            "target": "Olarusia ifaini",
            "source": "You will pay a fine",
            "pronunciation": "o-la-ru-sia i-fa-i-ni"
          },
          {
            "target": "Omuruki we sibala",
            "source": "President of the Republic (Lubukusu)",
            "pronunciation": "o-mu-ru-ki we si-ba-la"
          },
          {
            "target": "Omujumbe",
            "source": "Member of Parliament (Lubukusu)",
            "pronunciation": "o-mu-ju-mbe"
          },
          {
            "target": "Kamakangilo ka serekali",
            "source": "Public hospitals (Lubukusu)",
            "pronunciation": "ka-ma-ka-ngi-lo ka se-re-ka-li"
          },
          {
            "target": "Chirupia che kamasomo",
            "source": "School fees (Lubukusu)",
            "pronunciation": "chi-ru-pia che ka-ma-so-mo"
          },
          {
            "target": "Embako sebea ta!",
            "source": "A hoe never tells a lie (proverb)",
            "pronunciation": "e-mba-ko se-be-a ta"
          }
        ],
        "sentences": [
          {
            "target": "Indede wefwe sangala kho abakeni basangale.",
            "source": "Rejoice so that our guests may also rejoice."
          },
          {
            "target": "Nafula yali yaria imbako; leelo yomilanila okhulima.",
            "source": "Nafula used to fear the hoe; today she is dedicated to farming."
          },
          {
            "target": "Niko balomile kali ng'ali.",
            "source": "What they said is true."
          },
          {
            "target": "Chikhaafu chingali ne bibiaayo bikali.",
            "source": "Many cattle and much livestock."
          }
        ]
      },
      {
        "id": "luhya-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Luhya (Luyia) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "Kencorpus Lumarachi, Logooli & Lubukusu (KenCorpus_text, KenPOS, KenTrans, KenLumachiQuAD, CC-BY-4.0), Project Tafsiri v2.0 (9 Luhya dialects, CC-BY-4.0), Language Science Press Logoori & Lubukusu Corpora (2016/2019, CC-BY-4.0), Marconi Lumasaba (CC-BY-4.0), CLDF ASJP v20 & BantuBVD (CC-BY-4.0) & Public Domain & Peer-Reviewed Lexicons (Hobley 1902/1903, Johnston 1902/1919, Purvis 1909, Roscoe 1915, Stam 1929 & Payne et al. 2016).",
        "words": [
          {
            "target": "Mulembe!",
            "source": "Hello",
            "pronunciation": "moo-lehm-beh / mee-rehm-beh"
          },
          {
            "target": "unyanziri",
            "source": "Thanks",
            "pronunciation": "unyanzi-ri"
          },
          {
            "target": "Orio",
            "source": "Thank you",
            "pronunciation": "oh-ree-oh"
          },
          {
            "target": "murembi",
            "source": "Salutation",
            "pronunciation": "mu-remb-i"
          },
          {
            "target": "-leshiri",
            "source": "To pardon",
            "pronunciation": "leshi-ri"
          },
          {
            "target": "-shesia",
            "source": "To salute",
            "pronunciation": "she-sia"
          },
          {
            "target": "-leshe",
            "source": "To forgive",
            "pronunciation": "leshe"
          },
          {
            "target": "Eliaro",
            "source": "Boat / Canoe (Wanga dialect)",
            "pronunciation": "eh-lee-ah-roh"
          },
          {
            "target": "Mrembe",
            "source": "Good morning (Bukusu / Wanga / Maragoli)",
            "pronunciation": "mrembe"
          },
          {
            "target": "Oli otya?",
            "source": "How are you? (9-dialect Luhya)",
            "pronunciation": "oli otya"
          }
        ],
        "sentences": [
          {
            "target": "Indede wefwe sangala kho abakeni basangale",
            "source": "Rejoice so that the guests may rejoice (Lumarachi)."
          },
          {
            "target": "Oli otya?",
            "source": "How are you? (9-dialect Luhya)."
          },
          {
            "target": "Orio muno",
            "source": "Thank you very much (Mulembe)."
          },
          {
            "target": "Murembe, yoga!",
            "source": "Salutation (Luwanga)."
          }
        ]
      },
      {
        "id": "luhya-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Luhya (Luyia) sentences for healthcare, transport, and community safety.",
        "culturalNote": "Kencorpus Lumarachi, Logooli & Lubukusu (KenCorpus_text, KenPOS, KenTrans, KenLumachiQuAD, CC-BY-4.0), Project Tafsiri v2.0 (9 Luhya dialects, CC-BY-4.0), Language Science Press Logoori & Lubukusu Corpora (2016/2019, CC-BY-4.0), Marconi Lumasaba (CC-BY-4.0), CLDF ASJP v20 & BantuBVD (CC-BY-4.0) & Public Domain & Peer-Reviewed Lexicons (Hobley 1902/1903, Johnston 1902/1919, Purvis 1909, Roscoe 1915, Stam 1929 & Payne et al. 2016).",
        "words": [
          {
            "target": "ikhumi",
            "source": "Ten",
            "pronunciation": "ee-khoo-mee"
          },
          {
            "target": "tsisaasaba",
            "source": "Six",
            "pronunciation": "tsee-sah-sah-bah"
          },
          {
            "target": "-lala",
            "source": "One",
            "pronunciation": "la-la / nda-la"
          },
          {
            "target": "-bili",
            "source": "Two",
            "pronunciation": "bi-li / tsimbi-li"
          },
          {
            "target": "shenda",
            "source": "Nine",
            "pronunciation": "shehn-dah / kee-ehn-dah"
          },
          {
            "target": "-ne",
            "source": "Four",
            "pronunciation": "ne / tsi-ne"
          },
          {
            "target": "-raano",
            "source": "Five",
            "pronunciation": "raa-no / tsi-raa-no"
          },
          {
            "target": "lulala",
            "source": "Once",
            "pronunciation": "lu-la-la"
          },
          {
            "target": "munane",
            "source": "Eight",
            "pronunciation": "moo-nah-neh"
          },
          {
            "target": "mufungate",
            "source": "Seven",
            "pronunciation": "moo-foon-gah-teh / tsee-sah-bah"
          }
        ],
        "sentences": []
      }
    ]
  }
];
