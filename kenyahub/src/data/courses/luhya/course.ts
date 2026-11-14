import type { CourseUnit, LanguageConfig } from "../types";

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
    "open-web-swadesh-comparative"
  ]
};

export const LUHYA_UNITS: CourseUnit[] = [
  {
    "id": "luhya-unit-1",
    "title": "Unit 1: Pronouns, People, Kinship & Numbers",
    "description": "Learn core personal pronouns, human & family nouns (omu-/aba-), and cardinal numbers in Oluluyia.",
    "icon": "Hash",
    "skills": [
      {
        "id": "luhya-pronouns-people",
        "title": "Pronouns, People & Family (Class 1/2)",
        "icon": "Users",
        "description": "Master personal pronouns and Class 1/2 human nouns in Oluluyia.",
        "tips": "In Oluluyia, Class 1 singular human nouns begin with 'omu-' and form their Class 2 plural in 'aba-': omundu (person) → abandu (people), omukhasi (woman) → abakhasi (women), omusatsa (man) → abasatsa (men), omwami (king/chief) → abami (Stam 1929).",
        "words": [
          {
            "target": "Mirembe! / Mulembe!",
            "source": "Peace! / Greetings!",
            "pronunciation": "mi-rembe / mu-lembe",
            "hint": "Universal Luhya greeting of peace (Hobley 1902)"
          },
          {
            "target": "esie / ise",
            "source": "I / me",
            "pronunciation": "e-sie / ise",
            "hint": "Wanga/Kisa esie, Nyole/Bukusu ise, Logoli inze (Johnston 1919)"
          },
          {
            "target": "iwe",
            "source": "You (singular)",
            "pronunciation": "iwe",
            "hint": "2nd person singular pronoun"
          },
          {
            "target": "efwe / ifwe",
            "source": "We / us",
            "pronunciation": "efwe / ifwe",
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
            "target": "mama / papa (sese)",
            "source": "Mother / Father",
            "pronunciation": "ma-ma / pa-pa",
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
            "prompt": "What is the English meaning of \"Mirembe! / Mulembe!\" in Luhya?",
            "correctAnswer": "Peace! / Greetings!",
            "options": [
              "I / me",
              "You (singular)",
              "We / us",
              "Peace! / Greetings!"
            ],
            "hint": "Universal Luhya greeting of peace (Hobley 1902)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"esie / ise\" in Luhya?",
            "correctAnswer": "I / me",
            "options": [
              "You (singular)",
              "We / us",
              "I / me",
              "Peace! / Greetings!"
            ],
            "hint": "Wanga/Kisa esie, Nyole/Bukusu ise, Logoli inze (Johnston 1919)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"iwe\" in Luhya?",
            "correctAnswer": "You (singular)",
            "options": [
              "We / us",
              "You (singular)",
              "Peace! / Greetings!",
              "I / me"
            ],
            "hint": "2nd person singular pronoun"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"You (singular)\" in Luhya?",
            "correctAnswer": "iwe",
            "options": [
              "iwe",
              "Mirembe! / Mulembe!",
              "esie / ise",
              "efwe / ifwe"
            ],
            "hint": "ee-weh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"We / us\" in Luhya?",
            "correctAnswer": "efwe / ifwe",
            "options": [
              "Mirembe! / Mulembe!",
              "esie / ise",
              "iwe",
              "efwe / ifwe"
            ],
            "hint": "eh-fweh / ee-fweh"
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
            "correctAnswer": "omundu (pl. abandu)",
            "options": [
              "Mirembe! / Mulembe!",
              "esie / ise",
              "iwe",
              "omundu (pl. abandu)"
            ],
            "hint": "Class 1/2 noun (Hobley 1902 & Johnston 1919)"
          }
        ]
      },
      {
        "id": "luhya-numbers-adjectives",
        "title": "Numbers 1–10 (Hobley 1902 & Johnston 1919) & Core Descriptive Roots",
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
            "pronunciation": "tsi-saa-sa-ba mu-funga-te mu-na-ne shenda ikhu-mi",
            "hint": "Johnston (1919, Vol. I, p. 81) Luwanga/Lunyara numerals 6–10"
          },
          {
            "target": "mufungate",
            "source": "Seven (7)",
            "pronunciation": "tsi-saa-sa-ba mu-funga-te mu-na-ne shenda ikhu-mi",
            "hint": "Johnston (1919, Vol. I, p. 81) Luwanga/Lunyara numerals 6–10"
          },
          {
            "target": "munane",
            "source": "Eight (8)",
            "pronunciation": "tsi-saa-sa-ba mu-funga-te mu-na-ne shenda ikhu-mi",
            "hint": "Johnston (1919, Vol. I, p. 81) Luwanga/Lunyara numerals 6–10"
          },
          {
            "target": "-khongo",
            "source": "Big / large",
            "pronunciation": "khongo",
            "hint": "Zone J30 Swadesh #27"
          },
          {
            "target": "-titi / -tutu",
            "source": "Small / few",
            "pronunciation": "ti-ti / tu-tu",
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
            "correctAnswer": "One (1)",
            "options": [
              "Two (2)",
              "Three (3)",
              "Four (4)",
              "One (1)"
            ],
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-bili (tsimbili)\" in Luhya?",
            "correctAnswer": "Two (2)",
            "options": [
              "Three (3)",
              "Four (4)",
              "Two (2)",
              "One (1)"
            ],
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-taru (tsitaru)\" in Luhya?",
            "correctAnswer": "Three (3)",
            "options": [
              "Four (4)",
              "Three (3)",
              "One (1)",
              "Two (2)"
            ],
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three (3)\" in Luhya?",
            "correctAnswer": "-taru (tsitaru)",
            "options": [
              "-taru (tsitaru)",
              "-lala (ndala)",
              "-bili (tsimbili)",
              "-ne (tsine)"
            ],
            "hint": "tah-roo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four (4)\" in Luhya?",
            "correctAnswer": "-ne (tsine)",
            "options": [
              "-lala (ndala)",
              "-bili (tsimbili)",
              "-taru (tsitaru)",
              "-ne (tsine)"
            ],
            "hint": "neh"
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
            "correctAnswer": "-raano (tsiraano)",
            "options": [
              "-lala (ndala)",
              "-bili (tsimbili)",
              "-taru (tsitaru)",
              "-raano (tsiraano)"
            ],
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-2",
    "title": "Unit 2: Nature, Core Verbs (Okhu-) & Wanga Heritage",
    "description": "Explore natural elements, high-frequency okhu- verbs, and Luhanga cultural vocabulary from Rev. N. Stam (1929) and C. W. Hobley (1903).",
    "icon": "TreePine",
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
            "target": "Were ankhonyere / Nasayi akhulinde",
            "source": "May God help me / May God guard you",
            "pronunciation": "we-re ankhonye-re / na-sa-yi akhu-linde",
            "hint": "Rev. N. Stam (1929, p. 160) traditional blessing"
          },
          {
            "target": "musiro (muziro) / ekhyinekha",
            "source": "Clan totem (thing abstained from) / Soul or shadow",
            "pronunciation": "mu-si-ro / ekhyi-nekha",
            "hint": "Stam (1929, pp. 162, 176) & Hobley (1903, p. 347)"
          },
          {
            "target": "okhunywa / okhuliira",
            "source": "To drink / To eat",
            "pronunciation": "okhunywa / okhu-lii-ra",
            "hint": "Class 15 infinitives"
          },
          {
            "target": "okhulola / okhumanya",
            "source": "To see / To know",
            "pronunciation": "okhu-lo-la / okhu-manya",
            "hint": "Class 15 infinitives"
          },
          {
            "target": "okhwitsa / okhuchenda",
            "source": "To come / To walk",
            "pronunciation": "okhwitsa / okhuchenda",
            "hint": "Class 15 infinitives"
          }
        ],
        "sentences": [
          {
            "target": "Were ankhonyere; Nasayi akhulinde.",
            "source": "May God help me; may the Creator guard you (Stam 1929)."
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
            "correctAnswer": "liyuba (eliuba)",
            "options": [
              "liyuba (eliuba)",
              "amaatsi / madzi",
              "omuliro",
              "ifula"
            ],
            "hint": "lee-yoo-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Rain\" in Luhya?",
            "correctAnswer": "ifula",
            "options": [
              "amaatsi / madzi",
              "omuliro",
              "liyuba (eliuba)",
              "ifula"
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
            "prompt": "Complete the Luhya term for \"God, the Supreme Creator\": ___",
            "correctAnswer": "Were / Nasayi",
            "options": [
              "amaatsi / madzi",
              "omuliro",
              "liyuba (eliuba)",
              "Were / Nasayi"
            ],
            "hint": "Rev. N. Stam (1929, pp. 154, 159–160) Wanga religion"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-3",
    "title": "Unit 3: Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Luhya (Luyia) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902, 1919), Rev. J. B. Purvis (1909), and Rev. John Roscoe (1915).",
    "icon": "Users",
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
            "source": "Child / children",
            "pronunciation": "omwa-na",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "mukha / omukhasi",
            "source": "Wife",
            "pronunciation": "mukha / o-mukha-si",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omukhwe / omusatsa",
            "source": "Husband",
            "pronunciation": "o-mukhwe / o-mu-satsa",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
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
            "target": "omwana (pl. abana / avana)",
            "source": "child (pl. children)",
            "pronunciation": "omwa-na",
            "hint": "Lubukusu / Oluhya"
          },
          {
            "target": "Omw-ami; aw-ami / Omw-ami / Omw-ami. Omu-kuru",
            "source": "Chief",
            "pronunciation": "omw-ami",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Omwami (Nabongo, pl. Abami)\" in Luhya (Luyia)?",
            "correctAnswer": "King / Chief",
            "options": [
              "King / Chief",
              "Friend",
              "Child / children",
              "Wife"
            ],
            "hint": "Rev. N. Stam 1929 pp. 148–149 Wanga royal title"
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
            "correctAnswer": "omukhwe / omusatsa",
            "options": [
              "omukhwe / omusatsa",
              "Omwami (Nabongo, pl. Abami)",
              "omulina (pl. abalina) / omwitsa",
              "omwana (pl. abana / baana)"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
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
            "target": "Omw-ana / Omw-ana; bab-ana. Om-soriri",
            "source": "Son, boy",
            "pronunciation": "omw-ana / omw-ana",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Omw-ana / Omw-ana; bab-ana. Om-soriri\" in Luhya?",
            "correctAnswer": "Son, boy",
            "options": [
              "Aunt",
              "Elder",
              "Marriage",
              "Son, boy"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"senge\" in Luhya?",
            "correctAnswer": "Aunt",
            "options": [
              "Elder",
              "Marriage",
              "Aunt",
              "Son, boy"
            ],
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mukhofu\" in Luhya?",
            "correctAnswer": "Elder",
            "options": [
              "Marriage",
              "Elder",
              "Son, boy",
              "Aunt"
            ],
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Elder\" in Luhya?",
            "correctAnswer": "mukhofu",
            "options": [
              "mukhofu",
              "Omw-ana / Omw-ana; bab-ana. Om-soriri",
              "senge",
              "oweha"
            ],
            "hint": "mukhofu"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Marriage\" in Luhya?",
            "correctAnswer": "oweha",
            "options": [
              "Omw-ana / Omw-ana; bab-ana. Om-soriri",
              "senge",
              "mukhofu",
              "oweha"
            ],
            "hint": "oweha"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "Omw-ana / Omw-ana; bab-ana. Om-soriri: Son, boy",
            "pairs": [
              {
                "left": "Omw-ana / Omw-ana; bab-ana. Om-soriri",
                "right": "Son, boy"
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
              "Omw-ana / Omw-ana; bab-ana. Om-soriri",
              "senge",
              "mukhofu",
              "umuchesa"
            ],
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-4",
    "title": "Unit 4: Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Luhya (Luyia) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902, 1919), Rev. J. B. Purvis (1909), and Rev. John Roscoe (1915).",
    "icon": "Scale",
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
            "target": "-bili /tsimbili",
            "source": "Two",
            "pronunciation": "bi-li / tsimbi-li",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ikhumi (likhumi)\" in Luhya?",
            "correctAnswer": "Ten",
            "options": [
              "Nine",
              "Eight",
              "Seven",
              "Ten"
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
              "Seven",
              "Eight",
              "Ten",
              "Nine"
            ],
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eight\" in Luhya?",
            "correctAnswer": "munane (tsinane)",
            "options": [
              "munane (tsinane)",
              "ikhumi (likhumi)",
              "shenda (kienda)",
              "mufungate (tsisaba)"
            ],
            "hint": "moo-nah-neh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Seven\" in Luhya?",
            "correctAnswer": "mufungate (tsisaba)",
            "options": [
              "ikhumi (likhumi)",
              "shenda (kienda)",
              "munane (tsinane)",
              "mufungate (tsisaba)"
            ],
            "hint": "moo-foon-gah-teh / tsee-sah-bah"
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
            "correctAnswer": "tsisaasaba (mkaga)",
            "options": [
              "ikhumi (likhumi)",
              "shenda (kienda)",
              "munane (tsinane)",
              "tsisaasaba (mkaga)"
            ],
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
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
            "pronunciation": "se-kunde",
            "hint": "Oluluyia — GitHub unicode-org/cldr (luy.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Ama-kumi ka-tarru / Ama-kumi ka-datu / Kama-gumi ka-taru",
            "source": "Thirty",
            "pronunciation": "ama-kumi ka-tarru / ama-kumi ka-datu / kama-gumi ka-taru",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "Ama-kumi ka-nne / Kama-gumi ka-nne",
            "source": "Forty",
            "pronunciation": "ama-kumi ka-nne / kama-gumi ka-nne",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "Ama-kumi ka-rrano / Ama-kumi ka-tano / Kama-gumi ka-rano",
            "source": "Fifty",
            "pronunciation": "ama-kumi ka-rrano / ama-kumi ka-tano / kama-gumi ka-rano",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "Ama-kana ma-khumi / Si-zumi / Kama-tondo ki-kumi",
            "source": "Thousand",
            "pronunciation": "ama-kana ma-khumi / si-zumi / kama-tondo ki-kumi",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "-nggi / -inggi",
            "source": "Plenty, many",
            "pronunciation": "nggi / inggi",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-taru / tsitaru\" in Luhya?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Five",
              "Second (time unit)",
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
              "Second (time unit)",
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
              "Second (time unit)",
              "Five",
              "Three",
              "Four"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Five\" in Luhya?",
            "correctAnswer": "-raano / tsiraano",
            "options": [
              "-raano / tsiraano",
              "-taru / tsitaru",
              "-ne / tsine",
              "Sekunde"
            ],
            "hint": "-raano / tsiraano"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Second (time unit)\" in Luhya?",
            "correctAnswer": "Sekunde",
            "options": [
              "-taru / tsitaru",
              "-ne / tsine",
              "-raano / tsiraano",
              "Sekunde"
            ],
            "hint": "sekunde"
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
            "correctAnswer": "Ama-kumi ka-tarru / Ama-kumi ka-datu / Kama-gumi ka-taru",
            "options": [
              "-taru / tsitaru",
              "-ne / tsine",
              "-raano / tsiraano",
              "Ama-kumi ka-tarru / Ama-kumi ka-datu / Kama-gumi ka-taru"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-5",
    "title": "Unit 5: Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Luhya (Luyia) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902, 1919), Rev. J. B. Purvis (1909), and Rev. John Roscoe (1915).",
    "icon": "Tractor",
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
            "target": "obushi — amabele",
            "source": "Honey — Milk"
          },
          {
            "target": "ebyokhulia — eshiamo",
            "source": "Food — Fruit"
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
            "hint": "Review Staple Foods, Cookery & Beverages"
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
            "target": "Ama-furra / Ama-futa / Kimi-nawa (pl.). Kama-futa",
            "source": "Fat, oil",
            "pronunciation": "ama-furra / ama-futa / kimi-nawa kama-futa",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "In-zala / In-jala / In-jara, In-zala",
            "source": "Hunger",
            "pronunciation": "in-zala / in-jala / in-jara in-zala",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "Ama-duma. Ka-duma (5 b) / Ama-dumwa / Nabu-kubo",
            "source": "Maize",
            "pronunciation": "ama-duma ka-duma / ama-dumwa / nabu-kubo",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "Omw-engge. Ama-lua / Omw-engge / Kama-rwa",
            "source": "Palm wine, beer",
            "pronunciation": "omw-engge ama-lua / omw-engge / kama-rwa",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "I-fukwa / Ki-kwa or Si-kwa",
            "source": "Yam",
            "pronunciation": "i-fukwa / ki-kwa or si-kwa",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "-dia / -dia, -lia / -lya",
            "source": "To eat",
            "pronunciation": "dia / dia lia / lya",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hunger\" in Luhya?",
            "correctAnswer": "In-zala / In-jala / In-jara, In-zala",
            "options": [
              "In-zala / In-jala / In-jara, In-zala",
              "Pauni ya Sudani",
              "Ama-furra / Ama-futa / Kimi-nawa (pl.). Kama-futa",
              "Ama-duma. Ka-duma (5 b) / Ama-dumwa / Nabu-kubo"
            ],
            "hint": "in-zala / in-jala / in-jara, in-zala"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Maize\" in Luhya?",
            "correctAnswer": "Ama-duma. Ka-duma (5 b) / Ama-dumwa / Nabu-kubo",
            "options": [
              "Pauni ya Sudani",
              "Ama-furra / Ama-futa / Kimi-nawa (pl.). Kama-futa",
              "In-zala / In-jala / In-jara, In-zala",
              "Ama-duma. Ka-duma (5 b) / Ama-dumwa / Nabu-kubo"
            ],
            "hint": "ama-duma. ka-duma (5 b) / ama-dumwa / nabu-kubo"
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"Palm wine, beer\": ___",
            "correctAnswer": "Omw-engge. Ama-lua / Omw-engge / Kama-rwa",
            "options": [
              "Pauni ya Sudani",
              "Ama-furra / Ama-futa / Kimi-nawa (pl.). Kama-futa",
              "In-zala / In-jala / In-jara, In-zala",
              "Omw-engge. Ama-lua / Omw-engge / Kama-rwa"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-6",
    "title": "Unit 6: Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Luhya (Luyia) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902, 1919), Rev. J. B. Purvis (1909), and Rev. John Roscoe (1915).",
    "icon": "PawPrint",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omusaala / omuti (pl. emisaala)\" in Luhya?",
            "correctAnswer": "Tree",
            "options": [
              "Forest",
              "Seed",
              "Leaf",
              "Tree"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omutsuru\" in Luhya?",
            "correctAnswer": "Forest",
            "options": [
              "Seed",
              "Leaf",
              "Forest",
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
              "Seed",
              "Tree",
              "Forest"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Seed\" in Luhya?",
            "correctAnswer": "imwo",
            "options": [
              "imwo",
              "omusaala / omuti (pl. emisaala)",
              "omutsuru",
              "lifafu / lisafu (pl. amasafu)"
            ],
            "hint": "imwo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leaf\" in Luhya?",
            "correctAnswer": "lifafu / lisafu (pl. amasafu)",
            "options": [
              "omusaala / omuti (pl. emisaala)",
              "omutsuru",
              "imwo",
              "lifafu / lisafu (pl. amasafu)"
            ],
            "hint": "lifafu / lisafu (pl. amasafu)"
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
              "omusaala / omuti (pl. emisaala)",
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
            "target": "eshi / eshialo",
            "source": "Earth / country",
            "pronunciation": "eshi / eshia-lo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "lilesi",
            "source": "Cloud",
            "pronunciation": "li-le-si",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "loing'ong'ong'we",
            "source": "Fog / mist",
            "pronunciation": "loing'ong'ong'we",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omwesi\" in Luhya?",
            "correctAnswer": "Moon / month",
            "options": [
              "Star",
              "River",
              "Lake / sea",
              "Moon / month"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ing'ining'ini\" in Luhya?",
            "correctAnswer": "Star",
            "options": [
              "River",
              "Lake / sea",
              "Star",
              "Moon / month"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omuchera / omwalo\" in Luhya?",
            "correctAnswer": "River",
            "options": [
              "Lake / sea",
              "River",
              "Moon / month",
              "Star"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"River\" in Luhya?",
            "correctAnswer": "omuchera / omwalo",
            "options": [
              "omuchera / omwalo",
              "omwesi",
              "ing'ining'ini",
              "inyanza"
            ],
            "hint": "omuchera / omwalo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lake / sea\" in Luhya?",
            "correctAnswer": "inyanza",
            "options": [
              "omwesi",
              "ing'ining'ini",
              "omuchera / omwalo",
              "inyanza"
            ],
            "hint": "inyanza"
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
            "correctAnswer": "libale / lichina",
            "options": [
              "omwesi",
              "ing'ining'ini",
              "omuchera / omwalo",
              "libale / lichina"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-7",
    "title": "Unit 7: The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Luhya (Luyia) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902, 1919), Rev. J. B. Purvis (1909), and Rev. John Roscoe (1915).",
    "icon": "User",
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
            "target": "Efi-tere. Olu-ala / Olu-ala / Si-tere or Ki-tete",
            "source": "Toe",
            "pronunciation": "efi-tere olu-ala / olu-ala / si-tere or ki-tete"
          }
        ],
        "sentences": [
          {
            "target": "amabanga — likumba",
            "source": "Blood — Bone"
          },
          {
            "target": "liswi — omurwe",
            "source": "Hair — Head"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"amabanga\" mean in English?",
            "correctAnswer": "Blood",
            "options": [
              "Blood",
              "Bone",
              "Hair",
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
            "target": "eshilenje / lirango",
            "source": "Leg / thigh",
            "pronunciation": "eshi-lenje / li-rango",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"elino (pl. ameno)\" in Luhya?",
            "correctAnswer": "Tooth",
            "options": [
              "Tongue",
              "Foot",
              "Leg / thigh",
              "Tooth"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"olulimi (pl. tsinzimi)\" in Luhya?",
            "correctAnswer": "Tongue",
            "options": [
              "Foot",
              "Leg / thigh",
              "Tongue",
              "Tooth"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"lilaro / eshilenge\" in Luhya?",
            "correctAnswer": "Foot",
            "options": [
              "Leg / thigh",
              "Foot",
              "Tooth",
              "Tongue"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Foot\" in Luhya?",
            "correctAnswer": "lilaro / eshilenge",
            "options": [
              "lilaro / eshilenge",
              "elino (pl. ameno)",
              "olulimi (pl. tsinzimi)",
              "eshilenje / lirango"
            ],
            "hint": "lilaro / eshilenge"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leg / thigh\" in Luhya?",
            "correctAnswer": "eshilenje / lirango",
            "options": [
              "elino (pl. ameno)",
              "olulimi (pl. tsinzimi)",
              "lilaro / eshilenge",
              "eshilenje / lirango"
            ],
            "hint": "eshilenje / lirango"
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
              "elino (pl. ameno)",
              "olulimi (pl. tsinzimi)",
              "lilaro / eshilenge",
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
    "title": "Unit 8: Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Luhya (Luyia) built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902, 1919), Rev. J. B. Purvis (1909), and Rev. John Roscoe (1915).",
    "icon": "BookOpen",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okhuloma / okhuboola\" in Luhya?",
            "correctAnswer": "Speak",
            "options": [
              "Sleep",
              "Drink",
              "Eat",
              "Speak"
            ],
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okhukona\" in Luhya?",
            "correctAnswer": "Sleep",
            "options": [
              "Drink",
              "Eat",
              "Sleep",
              "Speak"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okhunywa\" in Luhya?",
            "correctAnswer": "Drink",
            "options": [
              "Eat",
              "Drink",
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
              "okhuloma / okhuboola",
              "okhukona",
              "okhuliira / okhulia"
            ],
            "hint": "oh-khoo-nywah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eat\" in Luhya?",
            "correctAnswer": "okhuliira / okhulia",
            "options": [
              "okhuloma / okhuboola",
              "okhukona",
              "okhunywa",
              "okhuliira / okhulia"
            ],
            "hint": "oh-khoo-lee-ah"
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
            "correctAnswer": "okhwitsa (itsa!)",
            "options": [
              "okhuloma / okhuboola",
              "okhukona",
              "okhunywa",
              "okhwitsa (itsa!)"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #5a"
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
        "sentences": [],
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
              "To laugh",
              "To blow",
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
              "To breathe",
              "To cough",
              "To blow"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To breathe\" in Luhya?",
            "correctAnswer": "okhuyeera",
            "options": [
              "okhuyeera",
              "okhusala",
              "okhuutsa / okhufura",
              "okhutsekha"
            ],
            "hint": "okhuyeera"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To laugh\" in Luhya?",
            "correctAnswer": "okhutsekha",
            "options": [
              "okhusala",
              "okhuutsa / okhufura",
              "okhuyeera",
              "okhutsekha"
            ],
            "hint": "okhutsekha"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "okhusala: To vomit",
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
              "okhuutsa / okhufura",
              "okhuyeera",
              "okhulola"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-9-public-domain-corpus",
    "title": "Unit 9: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Luhya (Luyia) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"wange (-ange)\" in Luhya (Luyia)?",
            "correctAnswer": "My (1st sg. possessive)",
            "options": [
              "My (1st sg. possessive)",
              "I come",
              "I bring",
              "They are"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukonde / Masaba)"
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
              "Muli",
              "wange (-ange)",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ndu\" in Luhya (Luyia)?",
            "correctAnswer": "I am",
            "options": [
              "I am",
              "No, not",
              "Male (of beasts)",
              "Female (of mammals)"
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
              "Nisie",
              "Ndu",
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
    "id": "luhya-unit-10-open-datasets-modern",
    "title": "Unit 10: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Luhya (Luyia) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
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
            "source": "nut",
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
            "source": "Colobus",
            "pronunciation": "indi-wi-si",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ehei\" in Luhya (Luyia)?",
            "correctAnswer": "Castrated ox",
            "options": [
              "Castrated ox",
              "Good / Fine",
              "Iron / Beads",
              "nut"
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
                "right": "nut"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya (Luyia) term for \"Doorway\": ___",
            "correctAnswer": "Omuriango",
            "options": [
              "Omuriango",
              "Ehei",
              "Sirkhanga",
              "Ekhibia, Efiuma"
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Injobe\" in Luhya?",
            "correctAnswer": "Speke's tragelaph",
            "options": [
              "Speke's tragelaph",
              "Cephalophus",
              "Whose",
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
              "nindao",
              "siwisi",
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
    "id": "luhya-unit-11-hobley-1903",
    "title": "Unit 11: Hobley (1903) Awa-Wanga Royal Chronicle, 8 Fables, Altars & 8 Muziro Totems",
    "description": "Master the 12-generation Awa-Wanga genealogy, 8 Ama-Wanga fables, Masambwa/Muzimo altars, 8 Bantu Kavirondo Muziro totems, livoya tassels, kiketi child naming, and Isira law from C. W. Hobley (1903, pp. 333–358).",
    "icon": "Crown",
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
            "source": "First 6 generations of the Awa-Wanga royal dynasty (from Tsoso/Viratsi & Manga Hill to Shikulu & Rekho)",
            "pronunciation": "ku-a-u / wa-nga / ki-se-si / m-zu-i / m-si-nda-lo / ne-ti-a",
            "hint": "Hobley (1903, pp. 333–336)"
          },
          {
            "target": "Sundwa → Mkoya (→ Sundu → Mumia) & Kwehu (→ Sakwa → Tomia & Wombani)",
            "source": "Later 6 generations of the Awa-Wanga royal dynasty at Mumias, Lumino, and Kimuri",
            "pronunciation": "su-ndwa / m-ko-ya / su-ndu / mu-mi-a / kwe-hu / sa-kwa",
            "hint": "Hobley (1903, pp. 334–336)"
          },
          {
            "target": "Chikonesi • Sumba • Wa-Nyama kwa Wa-Ware (Bridge Island)",
            "source": "Salt lick on River Nzoia where elephant and hippo slew each other in Kwehu’s reign • Sumba Island dwarfish elves • Lusinga twin monoliths of two bulls turned to stone",
            "pronunciation": "chi-ko-ne-si / su-mba / wa-nya-ma kwa wa-wa-re",
            "hint": "Hobley (1903, pp. 339–341)"
          },
          {
            "target": "Masambwa / Muzimo • Sangaro • Mrumba (mlendege) • Siala / Mtarawanda",
            "source": "Ancestral spirits • Sacred granite hill 12 mi. NE of Mumias • Ketosh 4-stone wild fig altar • Awa-Wanga 3-stone Markhamia lutea altar",
            "pronunciation": "ma-sa-mbwa / mu-zi-mo / sa-nga-ro / m-ru-mba / si-a-la",
            "hint": "Hobley (1903, pp. 342–343)"
          },
          {
            "target": "Murembe (Ekirikiti) • Waka → Wanawaka (m.) / Newaka (f.)",
            "source": "Sacred coral tree (Erythrina tomentosa, murembe = 'peace') • Python charm & names given to next boy or girl born",
            "pronunciation": "mu-re-mbe / wa-ka / wa-na-wa-ka / ne-wa-ka",
            "hint": "Hobley (1903, pp. 343–344)"
          }
        ],
        "sentences": [
          {
            "target": "Murembe! Were ankhonyere.",
            "source": "Peace! May God help me (Hobley 1903, p. 343 & Stam 1929, p. 160)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In C. W. Hobley (1903, p. 344), if an Awa-Wanga person sees or accidentally kills a python ('waka'), what names are given to the next boy or girl born after the white-fowl purification rite?",
            "correctAnswer": "Wanawaka (boy) or Newaka (girl)",
            "options": [
              "Wanawaka (boy) or Newaka (girl)",
              "Mumia (boy) or Sakwa (girl)",
              "Jaksinis (boy) or Obilos (girl)",
              "Netia (boy) or Kiteji (girl)"
            ],
            "hint": "From 'waka' = python in Lu-Wanga (Hobley 1903, p. 344)"
          },
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
              },
              {
                "left": "Chikonesi",
                "right": "Nzoia salt lick where the elephant and hippopotamus killed each other"
              }
            ]
          }
        ]
      },
      {
        "id": "luhya-hobley-1903-11-2",
        "title": "The 8 Bantu Kavirondo Muziro Totems, Livoya, Kiketi Naming & Isira Law",
        "icon": "Shield",
        "description": "Practice the 8 clan totems (Muziro), Nyole rain-maker lineage, livoya tassels, quail & kiketi naming rites, and the Isira blood-feud taboo.",
        "tips": "Hobley (1903, p. 347) lists 8 Bantu Kavirondo Muziro totems: Imbongo (bushbuck — Kisesi of Awa-Wanga), Kuru/Ikulu (waterbuck — Marama, Tsoso, Isukha), Liusi (pigeon — Awa-Genya & Awa-Mrashi), Njofu (elephant — Awa-Shekwi of Nyole), Makuyi (black-and-white stork — Ketosh), Isunu (reedbuck — Ngaki of Tasoni), Imbongo/Ngawe (bushbuck — Ithako, E. Tsoso, S. Kabras), and Mbiakalo (cooked flying white ants — Kabras).",
        "words": [
          {
            "target": "Muziro: Imbongo (Ngawe) • Kuru (Ikulu) • Isunu",
            "source": "Bushbuck (Kisesi of Awa-Wanga; Ithako, E. Tsoso, S. Kabras) • Waterbuck (Marama, Tsoso, Isukha) • Reedbuck (Ngaki of Tasoni)",
            "pronunciation": "mu-zi-ro / i-mbo-ngo / nga-we / ku-ru / i-ku-lu / i-su-nu",
            "hint": "Hobley (1903, p. 347 — Bantu Kavirondo Muziro totems #1, #2, #6, #7)"
          },
          {
            "target": "Liusi • Njofu • Makuyi • Mbiakalo",
            "source": "Pigeon (Awa-Genya & Awa-Mrashi) • Elephant (Awa-Shekwi of Nyole) • Locust stork (Ketosh) • Cooked flying white ants (Kabras)",
            "pronunciation": "li-u-si / njo-fu / ma-ku-yi / m-bi-a-ka-lo",
            "hint": "Hobley (1903, p. 347 — Bantu Kavirondo Muziro totems #3, #4, #5, #8)"
          },
          {
            "target": "Mgahanya (Agine / Ashue → Luchiri → Namonwa → Mgahanya) • Kayenga",
            "source": "Chief and rain-maker of the Shekwi clan of Nyole (descended from the Simbi abūr rain-witch) • Maragolia Hills host",
            "pronunciation": "m-ga-ha-nya / a-gi-ne / a-shu-e / lu-chi-ri / na-mo-nwa / ka-ye-nga",
            "hint": "Hobley (1903, pp. 349–350)"
          },
          {
            "target": "Livoya • Kiketi (Mumia, Jaksinis, Martinis, Obilos) • Isira",
            "source": "Married woman’s 12 in. black-dyed fibre tassel • Pale blue naming bead with live quail & cowrie • Fatal blood-feud meal taboo",
            "pronunciation": "li-vo-ya / ki-ke-ti / mu-mi-a / i-si-ra",
            "hint": "Hobley (1903, pp. 350–353, 357–358)"
          }
        ],
        "sentences": [
          {
            "target": "Muziro wa Kisesi ni Imbongo.",
            "source": "The clan totem (muziro) of the Kisesi clan of Awa-Wanga is the bushbuck (imbongo) (Hobley 1903, p. 347)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "According to C. W. Hobley (1903, p. 347), which Muziro totem is observed by the Kabras tribe (who may eat the insect raw, but never cooked)?",
            "correctAnswer": "Mbiakalo (flying white ants when cooked)",
            "options": [
              "Mbiakalo (flying white ants when cooked)",
              "Makuyi (black-and-white locust stork)",
              "Liusi (pigeon)",
              "Isunu (reedbuck)"
            ],
            "hint": "Hobley (1903, p. 347 — Totem #8)"
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
                "left": "Kiketi",
                "right": "Pale blue bead tied with a cowrie & live quail at child naming (p. 352)"
              },
              {
                "left": "Isira",
                "right": "Blood-feud taboo forbidding eating from a killer’s maternal pot (p. 357)"
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
    "id": "luhya-unit-johnston-1902-set8-lukonde-prefixes",
    "title": "Unit 12: Sir Harry Johnston (1902) Set 8 (Lukonde, Lusōkwia, Lunyara, Lukabarasi, Lurimi), 16 Lukonde Prefixes (p. 1001) & Ch. XVII Ethnography",
    "description": "Master the 16 archaic disyllabic prefixes of Lukonde (p. 1001), Set 8 comparative vocabulary across 5 Luhya/Masaba dialects (pp. 980–992), and Chapter XVII Bantu Kavirondo ethnography (pp. 722–755).",
    "icon": "Layers",
    "skills": [
      {
        "id": "luhya-johnston-1902-set8-prefixes-skill",
        "title": "The 16 Lukonde Prefixes (p. 1001), Lusōkwia Tens & Set 8 Vocabulary (pp. 980–992)",
        "icon": "BookOpen",
        "description": "Practice the 16 Lukonde prefixes that solved Bleek's Bantu concord hypothesis and verified Set 8 entries.",
        "tips": "West Elgon Lukonde/Masaba preserves full disyllabic prefixes: Umu- (Cl. 1), Baba- (Cl. 2), Gumu- (Cl. 3), Gimi- (Cl. 4), Ili- (Cl. 5), Gama- (Cl. 6), Bibi- (Cl. 8), Lulu- (Cl. 11), Ruru-/Tutu- (Cl. 12), Kaka- (Cl. 13), Bubu- (Cl. 14), Kuku- (Cl. 15).",
        "words": [
          {
            "target": "Umu- / Baba- • Gumu- / Gimi- • Ili- / Gama- • Ki-(Si-) / Bibi- • Lulu- / Zi-, Tsi-(Ci-) • Kaka- / Ruru-(Tutu-) • Bubu- • Kuku-(Gu-) • Ha-(Wa-)",
            "source": "The 16 Noun Prefixes of Lukonde (Johnston 1902, p. 1001)",
            "pronunciation": "u-mu ba-ba / gu-mu gi-mi / i-li ga-ma / ki bi-bi / lu-lu tsi / ka-ka ru-ru / bu-bu / ku-ku",
            "hint": "Johnston (1902, Vol. II, pp. 889–891, 1001)"
          },
          {
            "target": "Kamagumi kabili (20) • Kamagumi katatu (30) • Kamagumi kanne (40) • Kamagumi karano (50)",
            "source": "Twenty • Thirty • Forty • Fifty (in Lusōkwia, Set 8, p. 989)",
            "pronunciation": "ka-ma-gu-mi ka-bi-li / ka-ma-gu-mi ka-ta-tu / ka-ma-gu-mi kan-ne / ka-ma-gu-mi ka-ra-no",
            "hint": "Johnston (1902, Vol. II, p. 989)"
          },
          {
            "target": "Akhana (pl. Ruana) • Iduasi • Racari • Olumutana / Sirkhanga / Obukanga • Injugu / Imbande • Ihumba • Mwieka • Ehei • Alia efu",
            "source": "Little child • Female (of mammals & reptiles) • Male (of beasts) • Good spirit • Ground-nut • Small nose • Breeze • Castrated bullock • Our eating",
            "pronunciation": "a-kha-na ru-a-na / i-dua-si / ra-ca-ri / o-lu-mu-ta-na / i-nju-gu / i-hum-ba / mwie-ka / e-hei",
            "hint": "Johnston (1902, Vol. II, Set 8, pp. 980–992)"
          }
        ],
        "sentences": [
          {
            "target": "Lidala liefu (Esialo siefwe) — Ingo yeru — Ingo yefu — Alia efu.",
            "source": "Our town (Lunyara, Lukabarasi, Lurimi) — Our eating (Johnston 1902, pp. 989–990)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Sir Harry Johnston's The Uganda Protectorate, Vol. II (1902, pp. 889–891, 1001), which West Elgon Bantu prefixes solved Dr. Wilhelm Bleek's hypothesis regarding the origin of the concords gu-, gi-, and ga-?",
            "correctAnswer": "Lukonde / Masaba Class 3 Gumu- (concord gu-), Class 4 Gimi- (concord gi-), and Class 6 Gama- (concord ga-)",
            "options": [
              "Lukonde / Masaba Class 3 Gumu- (concord gu-), Class 4 Gimi- (concord gi-), and Class 6 Gama- (concord ga-)",
              "Swahili Class 3 M-, Class 4 Mi-, and Class 6 Ma-",
              "Kikuyu Class 16 Ha- and Kamba Class 16 Pa-",
              "Ja-luo prefixes Ja-, Jo-, and Nya-"
            ],
            "hint": "See Johnston (1902, Vol. II, pp. 889–891, 1001)"
          }
        ]
      }
    ]
  }
];

LUHYA_UNITS.push({
  "id": "luhya-unit-13-stam-1929-bahanga",
  "title": "Unit 13: Rev. N. Stam (1929) 'The Bahanga' — Complete Wanga Royal Genealogy, Burial & Sacrificial Diagrams (Figs. 1–2), Religion, Practitioners, Omens, Marriage & Totems",
  "description": "Master 100% of Rev. N. Stam's 1929 monograph 'The Bahanga' (Catholic Anthropological Conference, Vol. I, No. 4, pp. 143–179): the 11-generation Bakhitsetse royal genealogy from Kwandedi & Wanga to Mumia, Osundwa II, and Rapando, burial & sacrificial diagrams (Figs. 1–2), 5 special sacrifices, 6 practitioners, 2 ordeals, 10 omens, twins, marriage, and musiro totems.",
  "icon": "Crown",
  "skills": [
    {
      "id": "luhya-stam-1929-13-1-history-genealogy-burial",
      "title": "Tribal History, 11-Generation Bakhitsetse Genealogy & Burial Rites (pp. 143–152, Map & Fig. 1)",
      "icon": "Crown",
      "description": "Learn the p. 145 Map terms, the royal lineage from Kwandedi and Wanga to Mumia, Osundwa II, and Rapando, royal sitting burial & Matungo bone procession, and Fig. 1 commoner burial positions.",
      "tips": "On the p. 145 Map, the country is Buhanga, the language Luhanga, a native Muhanga, and the people Bahanga. Wanga hid his royal thick copper bracelet under his skin cloak while sweeping for Muyima on Imanga hill, was joined at Bijifi by 3 Kabras clans (Bakyero/Bakhyero, Banamagwa, Bakhyikawa), founded Mumias and Matungo, and founded the Bakhitsetse royal line.",
      "words": [
        {
          "target": "Buhanga • Luhanga • Muhanga (sg.) • Bahanga (pl.)",
          "source": "Country of the Bahanga • Language of the Bahanga • Native (singular) • Natives (plural) (Map, p. 145)",
          "pronunciation": "bu-ha-nga / lu-ha-nga / mu-ha-nga / ba-ha-nga",
          "hint": "Rev. N. Stam, The Bahanga (1929, p. 145 Map)"
        },
        {
          "target": "Kwandedi → Wanga & Khabiagala → Waballa (→ Muswi → Wamukoya [I]) & Murono (→ Kitai)",
          "source": "Early Bahanga royal genealogy from Teriki & Khyira/Bwagwe (Kabras) to Imanga (Muyima), Bijifi (Bakyero, Banamagwa, Bakhyikawa), Mumias, Matungo, Bukhayo & Matawa (Wakhalivu & Muswi's 4 arrows)",
          "pronunciation": "kwa-nde-di / wa-nga / kha-bi-a-ga-la / wa-bal-la / mu-swi / wa-mu-ko-ya / mu-ro-no / ki-ta-i",
          "hint": "Stam (1929, pp. 143–148)"
        },
        {
          "target": "Wamukoya [I] → Netya (→ Osundwa [I] → Wamukoya [II] → Khyihundu → Mumia, Murunga, Mulama, Katima, Were & Kiteki [→ Osundwa II]) & Kweyu (→ Lumbasi → Sakwa → Lutomiya [→ Rapando], Lwambami & Kiwundu)",
          "source": "Later Bahanga royal genealogy of the Bakhitsetse family at Mumias/Matungo and Khyimuli/Mukulu (pp. 146–148)",
          "pronunciation": "ne-tya / o-su-ndwa / khyi-hu-ndu / mu-mi-a / kwe-yu / lu-mba-si / sa-kwa / lu-to-mi-ya / ra-pa-ndo",
          "hint": "Stam (1929, pp. 146–148)"
        },
        {
          "target": "okhufwa • okhuyaberwa • ekhyirindwa • okhusenera ekhyirindwa ekhyo mwami",
          "source": "Death / to die • Burial / to be buried • Grave • 'To fix the grave of the chief' (exhuming, washing & butter-polishing the chief's bones to carry in a beerpot to Matungo 1–2 years after sitting burial in his hut)",
          "pronunciation": "o-khu-fwa / o-khu-ya-be-rwa / e-khyi-ri-ndwa / o-khu-se-ne-ra e-khyi-ri-ndwa e-khyo mwa-mi",
          "hint": "Stam (1929, pp. 148–149)"
        },
        {
          "target": "inkokho eyo mukulikho • okhuba khu maziga • okhukalusya evigumba • okhusenera ekhyirindwa • omuyima",
          "source": "Chicken of the burial (roasted unplucked) • The great bewailing • 'To return the bones' (by sons-in-law & wives without greeting or looking back) • 'To fasten the grave' • Burial dance (1 year later)",
          "pronunciation": "i-nko-kho e-yo mu-ku-li-kho / o-khu-ba khu ma-zi-ga / o-khu-ka-lu-sya e-vi-gu-mba / o-mu-yi-ma",
          "hint": "Stam (1929, pp. 150–151 & Fig. 1 p. 150)"
        }
      ],
      "sentences": [
        {
          "target": "Okhusenera ekhyirindwa ekhyo mwami khu Matungo.",
          "source": "To fix the grave of the chief at Matungo (Stam 1929, p. 149)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Rev. N. Stam's 'The Bahanga' (1929, p. 146), which three devoted Kabras clans joined Wanga at Bijifi near Imanga hill, and which clan's head (Wakhalivu) nominates the chief by investing him with the copper bracelet and strangles a dying chief of the Bakhitsetse family?",
          "correctAnswer": "Bakyero (Bakhyero), Banamagwa, and Bakhyikawa — with the Bakyero (Bakhyero) clan serving as kingmakers",
          "options": [
            "Bakyero (Bakhyero), Banamagwa, and Bakhyikawa — with the Bakyero (Bakhyero) clan serving as kingmakers",
            "Bamakambo, Abekwe, and Abarebe",
            "Abetakho, Babukusu, and Wamia",
            "Bakhayo,Bamarama, and Batsotso"
          ],
          "hint": "See Stam (1929, pp. 146, 148)"
        },
        {
          "type": "multiple_choice",
          "prompt": "According to Figure 1 and pp. 149–150 of Stam (1929), how are a kraal owner (man), a woman, and children positioned in burial, and why is a pierced wild-fig leaf placed over the corpse's left ear?",
          "correctAnswer": "Man inside the middle of his hut on his right side; woman outside to the left of the entrance on her left side; male child under right eaves & female child under left eaves — with a pierced leaf over the left ear so the dead can hear sacrifices",
          "options": [
            "Man inside the middle of his hut on his right side; woman outside to the left of the entrance on her left side; male child under right eaves & female child under left eaves — with a pierced leaf over the left ear so the dead can hear sacrifices",
            "All commoners are buried sitting upright at Matungo hill",
            "Men are buried outside the kraal gate and women inside the cattle pen",
            "Corpses are cremated on the river bank immediately after death"
          ],
          "hint": "See Stam (1929, pp. 149–150, Fig. 1)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each Bahanga historical ruler in Stam (1929, pp. 143–148) with his key deed or succession:",
          "correctAnswer": "Muswi: Posthumous son of Waballa given a girl's name at Matawa who slew 4 of Murono's followers with 4 arrows",
          "pairs": [
            {
              "left": "Muswi",
              "right": "Posthumous son of Waballa given a girl's name at Matawa who slew 4 of Murono's followers with 4 arrows"
            },
            {
              "left": "Osundwa [I]",
              "right": "Son of Netya proclaimed chief after Netya's death at Lwanda; rallied the Bahanga with 'death or victory'"
            },
            {
              "left": "Mumia (retired 1928 → Osundwa [II])",
              "right": "Son of Khyihundu; paramount chief with kraals at Mumias & Jinja, succeeded in 1928 by Kiteki's son Osundwa [II]"
            },
            {
              "left": "Rapando (son of Lutomiya)",
              "right": "Descendant of Kweyu (Kweyu → Lumbasi → Sakwa → Lutomiya → Rapando), chief of Mukulu"
            }
          ]
        }
      ]
    },
    {
      "id": "luhya-stam-1929-13-2-sacrifices-religion-practitioners",
      "title": "Kraal Sacrificial Stones (Fig. 2), 5 Special Sacrifices, Rainmaking, Religion & 6 Practitioners (pp. 152–170)",
      "icon": "Sparkles",
      "description": "Master the Fig. 2 sacrificial stone layout, the 3-generation ancestral invocation, the 5 special sacrifices, Nasayi/Were prayers, 6 medical/magical practitioners, 2 ordeals, and 10 omens.",
      "tips": "In Fig. 2 (p. 153), two ancestral stones (amagina ake misambwa) stand 10 ft in front of the first wife's hut flanking the 4-ft lusambwa/lusiola pole (from obsolete samba 'build' → reversive sambula 'break down'), with the miniature khatsu khe misango hut to the left and two flat pathway stones (amagina ako lunganyi) outside the kraal entrance dedicated to Nasayi/Were.",
      "words": [
        {
          "target": "omumali owe misango • omusango (okhumala omusango) • amagina ake misambwa • lusambwa / lusiola (samba → sambula)",
          "source": "The sacrificer • Sacrifice (to sacrifice) • Two stones of the ancestral spirits (right stone to eldest son, left to 2nd son) • 4-ft Markhamia platycalyx pole from the khyemebekho/khyembekho grove",
          "pronunciation": "o-mu-ma-li o-we mi-sa-ngo / a-ma-gi-na a-ke mi-sa-mbwa / lu-sa-mbwa / sa-mba sa-mbu-la",
          "hint": "Stam (1929, pp. 152–153 & Fig. 2)"
        },
        {
          "target": "khatsu khe misango • amagina ako lunganyi • amalwa / ingombe / inkokho / isindu eye misango",
          "source": "Little hut of the sacrifices (left of 1st wife's hut) • Two flat stones on the pathway outside kraal gate dedicated to Nasayi/Were • Sacrificial beer, cow, chicken & quail",
          "pronunciation": "kha-tsu khe mi-sa-ngo / a-ma-gi-na a-ko lu-nga-nyi / i-si-ndu e-ye mi-sa-ngo",
          "hint": "Stam (1929, pp. 153–156 & Fig. 2)"
        },
        {
          "target": "abakuku mulire omu • evinambwa mulire omu • evisoni mulire omu",
          "source": "'Grandfathers, eat here • Great-grandfathers, eat here • Great-great-grandfathers, eat here' (3-generation sacrificial invocation, p. 155)",
          "pronunciation": "a-ba-ku-ku mu-li-re o-mu / e-vi-na-mbwa mu-li-re o-mu / e-vi-so-ni mu-li-re o-mu",
          "hint": "Stam (1929, p. 155)"
        },
        {
          "target": "okhutisa imbusi (4 cases) • inkokho eyakulikhirwamwo",
          "source": "Banging a goat's head around the hut (for skull fracture, running naked into a hut, broken waterpot, or dripping grass-ash salt filter) • Live white chicken held at center pole with 2 wing feathers stuck in ground to name a baby after a parent-in-law",
          "pronunciation": "o-khu-ti-sa i-mbu-si / i-nko-kho e-ya-ku-li-khi-rwa-mwo",
          "hint": "Stam (1929, pp. 156–158)"
        },
        {
          "target": "Nasayi (< sayo) & Were • liyuba • Were ankhonyere • Nasayi akhulinde • ekhyinekha & vikhyeno",
          "source": "God ('the one adored' < sayo) & Creator • The sun • 'God has helped me' (p. 160) • 'May God protect you' (p. 161) • Immortal soul/shadow & evil spirits (p. 162)",
          "pronunciation": "na-sa-yi / we-re a-nkho-nye-re / na-sa-yi a-khu-li-nde / e-khyi-ne-kha / vi-khye-no",
          "hint": "Stam (1929, pp. 159–162)"
        },
        {
          "target": "omusebe (sitani) • balosi (mulosi) • omundu owe misala • omundu owe mikalo • omufumo • omufira • ekhyilulu • amayoni amabi",
          "source": "Masai-grave possession • Bewitchers • Herbalist/cupping surgeon • Charm doctor (wild pig's tooth court charm) • Diviner • Poison-man (2-cow cure) • Ordeal (2-cow theft / 3-cow false accusation fine & Skull Ordeal) • 10 bad-bird omens",
          "pronunciation": "o-mu-se-be / ba-lo-si / o-mu-ndu o-we mi-sa-la / o-mu-ndu o-we mi-ka-lo / o-mu-fu-mo / o-mu-fi-ra / e-khyi-lu-lu / a-ma-yo-ni a-ma-bi",
          "hint": "Stam (1929, pp. 162–170)"
        }
      ],
      "sentences": [
        {
          "target": "Abakuku mulire omu; evinambwa mulire omu; evisoni mulire omu.",
          "source": "Grandfathers, eat here; great-grandfathers, eat here; great-great-grandfathers, eat here (Stam 1929, p. 155)."
        },
        {
          "target": "Were ankhonyere! Nasayi akhulinde.",
          "source": "God has helped me! May God protect you (Stam 1929, pp. 160–161)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Figure 2 and pp. 152–154 of Stam (1929), what are the three sacrificial installations of a Bahanga kraal and how are the stones inherited?",
          "correctAnswer": "(1) Two ancestral stones (amagina ake misambwa, right to eldest son, left to 2nd son) 10 ft in front of the 1st wife's hut flanking the 4-ft lusambwa pole; (2) the miniature khatsu khe misango hut to the left; and (3) two flat pathway stones (amagina ako lunganyi) outside the kraal entrance dedicated to Nasayi/Were",
          "options": [
            "(1) Two ancestral stones (amagina ake misambwa, right to eldest son, left to 2nd son) 10 ft in front of the 1st wife's hut flanking the 4-ft lusambwa pole; (2) the miniature khatsu khe misango hut to the left; and (3) two flat pathway stones (amagina ako lunganyi) outside the kraal entrance dedicated to Nasayi/Were",
            "Four stones inside the cattle kraal inherited by the youngest daughter",
            "A single stone inside the chief's granary",
            "Three stones on the river bank dedicated to evil spirits (vikhyeno)"
          ],
          "hint": "See Stam (1929, pp. 152–154 & Fig. 2 p. 153)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each practitioner or legal/ritual term in Stam (1929, pp. 156–168) with its exact definition:",
          "correctAnswer": "omundu owe mikalo: Charm doctor who hangs a banana-bark cattle-plague bundle on a kraal pole & puts burnt-wood ash in a wild pig's hollow tooth for court trials",
          "pairs": [
            {
              "left": "omundu owe mikalo",
              "right": "Charm doctor who hangs a banana-bark cattle-plague bundle on a kraal pole & puts burnt-wood ash in a wild pig's hollow tooth for court trials"
            },
            {
              "left": "omundu owe misala",
              "right": "Herbalist & surgeon who performs wet cupping with a perforated cow-horn tip sealed with beeswax"
            },
            {
              "left": "omufira",
              "right": "Poison-man who pricks a victim's toe with a poison-pointed walking stick or rubs a wild onion on his leg (2-cow cure fee)"
            },
            {
              "left": "ekhyilulu",
              "right": "Trial by ordeal: pounded-stick draught (2-cow theft fine / 3-cow false accusation fine) or drinking from a relative's skull"
            }
          ]
        }
      ]
    },
    {
      "id": "luhya-stam-1929-13-3-adoption-twins-marriage-totems-circumcision",
      "title": "Makokha Adoption, Twins (Amakhwana), Marriage Rites, Musiro Totems & Circumcision (pp. 170–179)",
      "icon": "Heart",
      "description": "Practice the Luhanga terminology and customs for roadway foundling adoption, twin purification, 10-cattle dowry & wedding rites, Isaac's antelope totem, mutilations, and circumcision.",
      "tips": "All Bahanga have Isaac's antelope (Boöcercus eurycerus) as their totem (musiro, 'the thing abstained from'), while Bahanga of Marama have the eland; totems are patrilineal and do not prevent intermarriage (only blood kinship bars marriage). Women never eat chickens, guinea fowl, eggs, sheep, suckling goat, or lepidosiren mudfish.",
      "words": [
        {
          "target": "Makokha ('rubbish', p. 171)",
          "source": "Name given to an illegitimate child exposed on a road junction and adopted by a childless woman (who throws her loin-fringe over it, ties a mussel shell to its right wrist, strings a waist bead, puts an ear ring in its ear & shaves its head)",
          "pronunciation": "ma-ko-kha",
          "hint": "Stam (1929, p. 171)"
        },
        {
          "target": "amakhwana • okhutsiya khu makwana",
          "source": "Twins • 'To go to the twins' (after 2-month seclusion, draping a Passifloraceae creeper, sprinkling Trifolium clover, Caesalpiniaceae & sheep dung across a 10-mile radius, and sinking the excrement pot in a deep river)",
          "pronunciation": "a-ma-khwa-na / o-khu-tsi-ya khu ma-kwa-na",
          "hint": "Stam (1929, pp. 172–173)"
        },
        {
          "target": "okhutekherana • okhukhua omukhana (1 bull + 1 heifer + 8 cows; 3 goats = 1 cow)",
          "source": "To marry (lit. 'to boil for one another') • To pay the dowry (10 head of cattle total, paid in installments as calves are born)",
          "pronunciation": "o-khu-te-khe-ra-na / o-khu-khu-a o-mu-kha-na",
          "hint": "Stam (1929, pp. 173–174)"
        },
        {
          "target": "okhusira imbusi • ingombe yarando",
          "source": "'To jump over the goat' (bridal rite before eating at the groom's kraal) • 'The stripped cow' (sent by the groom next day if the bride is a virgin, speared by her paternal aunt)",
          "pronunciation": "o-khu-si-ra i-mbu-si / i-ngo-mbe ya-ra-ndo",
          "hint": "Stam (1929, p. 175)"
        },
        {
          "target": "musiro (Boöcercus eurycerus & eland) • isambirire • okhukhyebwa & irumbi",
          "source": "Clan totem ('the thing abstained from': Isaac's antelope for all Bahanga; eland in Marama; patrilineal & non-exogamous) • Grass used with saliva & cobwebs to burn the 3-stroke cheek mark (\\|/, 1.25 in.) • Circumcision (every 2–3 yrs, ages 15–25, by Kakalelwa/Abarebe operators) & 4–5 month seclusion hut",
          "pronunciation": "mu-si-ro / i-sa-mbi-ri-re / o-khu-khye-bwa / i-ru-mbi",
          "hint": "Stam (1929, pp. 176–179)"
        }
      ],
      "sentences": [
        {
          "target": "Okhutekherana nende okhukhua omukhana: okhusira imbusi.",
          "source": "To marry ('boil for one another') and to pay the bride-dowry: jumping over the goat (Stam 1929, pp. 173–175)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Rev. N. Stam's 'The Bahanga' (1929, pp. 173–176), what is the literal meaning of 'okhutekherana' (to marry), what is the dowry ('okhukhua omukhana'), and what happens 5–6 months after the wedding?",
          "correctAnswer": "'To boil for one another'; dowry is 1 young bull, 1 heifer, and 8 cows (3 goats = 1 cow); after 5–6 months of eating cold food from her mother-in-law's kitchen, the bride brings an 8-piece cooking outfit, throws river water at her husband, and her brother beats her with a stick (earning a heifer) before she cooks her first meal",
          "options": [
            "'To boil for one another'; dowry is 1 young bull, 1 heifer, and 8 cows (3 goats = 1 cow); after 5–6 months of eating cold food from her mother-in-law's kitchen, the bride brings an 8-piece cooking outfit, throws river water at her husband, and her brother beats her with a stick (earning a heifer) before she cooks her first meal",
            "'To build a kraal'; dowry is 50 camels and the bride cooks on the wedding night",
            "'To cross the river'; dowry is 6 goats and no cattle",
            "'To herd cattle'; dowry is paid by the bride's father to the groom"
          ],
          "hint": "See Stam (1929, pp. 173–176)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each Bahanga custom in Stam (1929, pp. 171–179) with its ethnographic detail:",
          "correctAnswer": "musiro: Isaac's antelope (Boöcercus eurycerus) for all Bahanga (eland in Marama); patrilineal & does not bar marriage between same-totem families",
          "pairs": [
            {
              "left": "musiro",
              "right": "Isaac's antelope (Boöcercus eurycerus) for all Bahanga (eland in Marama); patrilineal & does not bar marriage between same-totem families"
            },
            {
              "left": "Makokha",
              "right": "Roadway foundling ('rubbish') adopted with loin-fringe, right-wrist mussel shell, waist bead & ear ring"
            },
            {
              "left": "okhutsiya khu makwana",
              "right": "Twin purification after 2 months using Passifloraceae creeper & Trifolium/Caesalpiniaceae/sheep-dung sprinkling across 10 miles"
            },
            {
              "left": "okhukhyebwa & irumbi",
              "right": "Circumcision every 2–3 years (ages 15–25) by Kakalelwa (Abarebe) operators, followed by 4–5 months in seclusion lodges"
            }
          ]
        }
      ]
    }
  ]
});

// ── Unit 14: Complete Line-by-Line Integration of Doris L. Payne, Sara Pacchiarotti & Mokaya Bosire, eds., "Diversity in African languages: Selected papers from the 46th Annual Conference on African Linguistics" (Berlin: Language Science Press, 2016, Chs. 9, 11, 12, 15, 25 & 28) ──
LUHYA_UNITS.push({
  "id": "luhya-unit-14-payne-2016-diversity-complete",
  "title": "Unit 14: Logoori, Luragooli & Lubukusu in Payne, Pacchiarotti & Bosire (2016)",
  "description": "Master all six Luhya-focused studies in 'Diversity in African languages' (2016): Logoori coronal palatalization (Ch. 9), 6 future inflections & 4 future constructions (Ch. 11), universal quantifiers vuri vs. -oosi (Ch. 12), Luragooli anticausative -Vk (Ch. 15), Lubukusu Transitive Reciprocal Constructions (Ch. 25), and Luhya enclitics in Kenyan comedy (Ch. 28).",
  "order": 14,
  "color": "#0D9488",
  "lessons": [
    {
      "id": "luhya-payne-2016-14-1-logoori-palatalization-futures",
      "title": "Logoori Coronal Palatalization (Ch. 9, pp. 165–183) & Oral-Text Future Tenses (Ch. 11, pp. 201–219)",
      "icon": "Volume2",
      "description": "Learn Logoori's 7-vowel system, dental/glottal palatalization, /h/-plosivization, coronal consonant-glide reduction (sj → ʃ), and the 6 future inflections and 4 auxiliary/subjunctive future constructions.",
      "tips": "In Glewwe & Aly (2016, Ch. 9, pp. 165–183), verbs with [ʃ] in the infinitive whose 1SG is [ʃ] rather than [mb] have underlying /si/ (e.g., /ko-siɛ-a/ → [koʃja] 'to grind', 1SG [ʃjɛɛzaa]) rather than /h/ (/ko-he-a/ → [koʃa] 'to burn', 1SG [mbezaa]). In Sarvasy (2016, Ch. 11, pp. 201–219), Logoori oral texts use SP-ra- -a for both near (hodiernal/crastinal) and general future, plus auxiliary kʊman̪a ('to know') + Subjunctive.",
      "words": [
        {
          "target": "Nj̪-anz-aa → n̪anzaa • N-man̪-aa → man̪aa vs. N-man̪-i → maɲi • ka-n̪un̪i → kaɲuɲi",
          "source": "I like • I know vs. I knew • small bird (dental j̪ → j and n̪ → ɲ before /i, u/)",
          "pronunciation": "n̪a-nzaa / ma-n̪aa / ma-ɲi / ka-ɲu-ɲi",
          "hint": "Glewwe & Aly (2016, Ch. 9, p. 167, Ex. 8)"
        },
        {
          "target": "a-hir-aa → aʃiɾaa • ko-roh-a → koroha vs. ko-roh-i → koroʃi • ke-hia → keʃa vs. eN-hia → embja",
          "source": "s/he is taking • to get tired vs. we got tired (h → ʃ / __ i) • new in Class 7 (hj → ʃ) vs. Class 9 (N-h → mb)",
          "pronunciation": "a-ʃi-ɾaa / ko-ro-ha / ko-ro-ʃi / ke-ʃa / e-mbja",
          "hint": "Glewwe & Aly (2016, Ch. 9, pp. 168–173, Ex. 9, 12, 18)"
        },
        {
          "target": "ko-siɛ-a → koʃja (1SG ʃjɛɛzaa, CL1 aʃjɛɛzaa) vs. ko-he-a → koʃa (1SG mbezaa, CL1 ahezaa)",
          "source": "to grind (underlying /si/, undergoing sj → ʃ) vs. to burn (underlying /h/, undergoing h → b / N__ in 1SG)",
          "pronunciation": "ko-ʃja / ʃjɛɛ-zaa / ko-ʃa / mbe-zaa",
          "hint": "Glewwe & Aly (2016, Ch. 9, pp. 176–179, Ex. 22, 26)"
        },
        {
          "target": "SP-ra- -a (Near/General) • na-SP- -e (Middle) • SP-raka- -e / SP-aaka- -e (Remote) • naa-SP- -e (Long-Vowel Remote) • SP-ri- -a (Indefinite)",
          "source": "Mu-gamba, a-ra-zj-a mʊ ɪ-skuru & V-oosi va-ra-ɲor-a ɪ-taʤi • Na-kʊ-sjaj-e Majki w-etu ma-uwa • a-raka-ataɲ-e kʊ ɪ-sjoŋgo ɪ-jɪ, n-daka-mu-ʃir-e wa gʊ-nani • Naa-a-kor-e ɪ-gaasi • si va-ri-ɲar-a mba",
          "pronunciation": "a-ra-zja / na-kʊ-sja-je / a-ra-ka-a-ta-ɲe / naa-a-ko-re / si va-ri-ɲa-ra mba",
          "hint": "Sarvasy (2016, Ch. 11, pp. 203–212, Table 1 & Ex. 1–21)"
        },
        {
          "target": "Mu-gamba, man̪-a n-zj-e mʊ ɪ-skuru • Ma mu-gamba ma-m-bok-e, ma-n-zj-e kʊ ɪ-gaasi j-eende",
          "source": "Tomorrow, I will go to school (auxiliary kʊman̪a 'to know' + Subjunctive) • And tomorrow I will wake up and go to my work (ma- + Subjunctive)",
          "pronunciation": "mu-ga-mba ma-n̪a n-zje / ma-m-bo-ke ma-n-zje",
          "hint": "Sarvasy (2016, Ch. 11, pp. 214–217, Ex. 24, 29)"
        }
      ],
      "sentences": [
        {
          "target": "Mu-gamba, a-ra-zj-a mʊ ɪ-skuru • V-oosi va-ra-ɲor-a ɪ-taʤi.",
          "source": "Tomorrow, s/he will go to school • All will find a crown (Sarvasy 2016, Ch. 11, pp. 204–205, Ex. 1 & 3)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "How do Eleanor Glewwe & Ann M. Aly (2016, Ch. 9, pp. 174–180) resolve the apparent rule-ordering paradox in Logoori between /h/-Plosivization (h → b / N__) and Nasal Deletion in 1SG forms like [ʃoovaa] ('I am throwing out') and [ʃjɛɛzaa] ('I am grinding')?",
          "correctAnswer": "Those verbs have underlying /si/ rather than /h/ (/N-siov-aa/, /ko-siɛ-a/), so Nasal Deletion deletes /N/ before /s/, Gliding turns /i/ into [j], and Coronal Consonant-Glide Reduction (sj → ʃ) produces [ʃ]",
          "options": [
            "Those verbs have underlying /si/ rather than /h/ (/N-siov-aa/, /ko-siɛ-a/), so Nasal Deletion deletes /N/ before /s/, Gliding turns /i/ into [j], and Coronal Consonant-Glide Reduction (sj → ʃ) produces [ʃ]",
            "Logoori has no nasal prefixes in the 1st person singular",
            "All /b/ consonants turn into [ʃ] before back vowels",
            "Those verbs are borrowed from Arabic without prefixes"
          ],
          "hint": "See Glewwe & Aly (2016, Ch. 9, §4.2, pp. 176–179)"
        }
      ]
    },
    {
      "id": "luhya-payne-2016-14-2-quantifiers-anticausative-bukusu-trc",
      "title": "Logoori Quantifiers Vuri vs. -oosi (Ch. 12), Luragooli Anticausative -Vk (Ch. 15), Lubukusu Reciprocals (Ch. 25) & Comedy Enclitics (Ch. 28)",
      "icon": "Layers",
      "description": "Compare distributive vuri ('every') vs. modifier -oosi ('all/whole/any'), Luragooli telic anticausative -Vk, Lubukusu transitive reciprocals (-an + ba-b-eene khu b-eene), and Luhya discourse markers in Kenyan stand-up comedy.",
      "tips": "In Landman (2016, Ch. 12), vuri ('every') is a strictly distributive D-head, whereas -oosi ('all, whole, any') is an agreeing AP modifier that can co-occur with vuri: soom-i vuri ki-tabu ch-oosi ('I read every whole book', p. 224). In Safir & Selvanathan (2016, Ch. 25), Lubukusu Ba-saani ba-a-biyil-an-a khu-khil-a ba-khasi allows both sloppy ('more than women hate each other') and strict ('more than women hate the men') readings, proving ba-b-eene khu b-eene is a direct object.",
      "words": [
        {
          "target": "vuri muundu a-syeev-i vs. vaandu v-oosi va-syeev-i • soom-i vuri ki-tabu ch-oosi",
          "source": "Every person danced (strictly distributive D-head vuri) vs. All the people danced (agreeing modifier -oosi across 15 classes) • I read every whole book",
          "pronunciation": "vu-ri muu-ndu a-syee-vi / vaa-ndu voo-si va-syee-vi / ki-ta-bu choo-si",
          "hint": "Landman (2016, Ch. 12, pp. 221–225, Table 1 & Ex. 2, 13, 19)"
        },
        {
          "target": "muriaŋgo gu-aram-ik-i kuturona na imboza • n-eny-a murianggo gu-han-ek-ɛ",
          "source": "The door opened from the wind (anticausative -Vk licenses oblique causer, rejects agent) • I want the door to be in a closed state (telic result state of -Vk)",
          "pronunciation": "mu-ria-ŋgo gu-a-ra-mi-ki / gu-ha-ne-kɛ",
          "hint": "Gluckman & Bowler (2016, Ch. 15, pp. 276–279, Tables 1–3 & Ex. 4b, 10b)"
        },
        {
          "target": "Class Ia (kuholeka 'be heard', kuroreka 'be seen', kudiirika 'be touched', kumeneka 'be tasted') vs. Class Ib (kuholeka 'be punched', kuliika 'be eaten')",
          "source": "Luragooli Class Ia experiencer verbs vs. Class Ib affected-object verbs taking -Vk",
          "pronunciation": "ku-ho-le-ka / ku-ro-re-ka / ku-dii-ri-ka / ku-me-ne-ka / ku-lii-ka",
          "hint": "Gluckman & Bowler (2016, Ch. 15, p. 283, Table 4)"
        },
        {
          "target": "Ba-saani ba-a-biyil-an-a (ba-b-eene khu b-eene) khu-khil-a ba-khasi • Ba-khasi ba-a-i-yeet-an-a (ba-b-eene khu ba-b-eene)",
          "source": "The men hate each other more than the women [hate each other / hate the men] • The women helped each other and themselves (Lubukusu prefixal RFM i- + suffixal RCM -an)",
          "pronunciation": "ba-saa-ni ba-a-bi-yi-la-na ba-bee-ne khu bee-ne / ba-kha-si ba-a-i-yee-ta-na",
          "hint": "Safir & Selvanathan (2016, Ch. 25, pp. 500–505, Ex. 13, 18–23)"
        },
        {
          "target": "ilisemanga • kuipia mama mja mzito (Smart Joker, Ex. 9) • -ko & -nga (Omwami, Ex. 11)",
          "source": "Luhya-accented Swahili in Kenyan stand-up comedy (devoicing b → p in kuipia < kuibia, habitual -nga, and enclitics -ko & -nga)",
          "pronunciation": "i-li-se-ma-nga / ku-i-pi-a / -ko / -nga",
          "hint": "Michieka & Muaka (2016, Ch. 28, pp. 567–568, Ex. 9 & 11)"
        }
      ],
      "sentences": [
        {
          "target": "Ba-saani ba-fumi-an-a ba-be-ene khu be-ene lukali • O-mu-hayi ne e-twika bi-a-bon-an-a.",
          "source": "The men praised each other a lot • The hunter and the giraffe saw each other (Safir & Selvanathan 2016, Ch. 25, pp. 503–504, Ex. 18a & 21a)."
        }
      ],
      "authoredExercises": [
        {
          "type": "match_pairs",
          "prompt": "Match each Luhya linguistic phenomenon in Payne, Pacchiarotti & Bosire (2016) with its diagnostic property:",
          "correctAnswer": "vuri vs. -oosi (Landman 2016, Ch. 12): Pre-nominal invariant D-quantifier ('every', strictly distributive) vs. post-nominal 15-class agreeing AP modifier ('all, whole, any')",
          "pairs": [
            {
              "left": "vuri vs. -oosi (Landman 2016, Ch. 12)",
              "right": "Pre-nominal invariant D-quantifier ('every', strictly distributive) vs. post-nominal 15-class agreeing AP modifier ('all, whole, any')"
            },
            {
              "left": "-Vk in Luragooli (Gluckman & Bowler 2016, Ch. 15)",
              "right": "Telic anticausative suffix (-ek/-ik/-ok/-uk) that targets the result state under kwenya/daave and rejects progressive -ang- and agentive by-phrases"
            },
            {
              "left": "ba-b-eene khu b-eene (Safir & Selvanathan 2016, Ch. 25)",
              "right": "Lubukusu reciprocal anaphor occupying IAV direct-object position and licensing both sloppy and strict comparative ellipsis readings"
            },
            {
              "left": "-ko and -nga (Michieka & Muaka 2016, Ch. 28, Ex. 11)",
              "right": "Luhya verbal/clausal enclitics transferred into Kenyan Swahili/English comedy routines"
            }
          ]
        }
      ]
    }
  ]
});
