// ============================================================
// Luhya (Oluluyia / Luwanga / Luhanga) Language Course Configuration & Units
// Based on Public Domain & Comparative Linguistic Sources:
// 1. C. W. Hobley (1902) "Eastern Uganda: An Ethnological Survey" & (1903) "Anthropological Studies in Kavirondo"
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" & (1919) "Comparative Study of the Bantu Languages"
// 3. Rev. N. Stam (1929) "The Bahanga" (Catholic Anthropological Conference Vol. I, No. 4 — Public Domain)
// 4. Wiktionary Bantu Swadesh Lists (Zone J30) & Wikipedia Luhya_language
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

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
            "pronunciation": "mee-rehm-beh / moo-lehm-beh",
            "hint": "Universal Luhya greeting of peace (Hobley 1902)"
          },
          {
            "target": "esie / ise",
            "source": "I / me",
            "pronunciation": "eh-see-eh / ee-seh",
            "hint": "Wanga/Kisa esie, Nyole/Bukusu ise, Logoli inze (Johnston 1919)"
          },
          {
            "target": "iwe",
            "source": "You (singular)",
            "pronunciation": "ee-weh",
            "hint": "2nd person singular pronoun"
          },
          {
            "target": "efwe / ifwe",
            "source": "We / us",
            "pronunciation": "eh-fweh / ee-fweh",
            "hint": "1st person plural pronoun"
          },
          {
            "target": "omundu (pl. abandu)",
            "source": "Person (pl. People)",
            "pronunciation": "oh-moo-ndoo / ah-bah-ndoo",
            "hint": "Class 1/2 noun (Hobley 1902 & Johnston 1919)"
          },
          {
            "target": "omukhasi (pl. abakhasi)",
            "source": "Woman / Wife",
            "pronunciation": "oh-moo-khah-see",
            "hint": "Class 1/2 noun"
          },
          {
            "target": "omusatsa (pl. abasatsa)",
            "source": "Man / Husband",
            "pronunciation": "oh-moo-sah-tsah",
            "hint": "Class 1/2 noun"
          },
          {
            "target": "omwana (pl. abana)",
            "source": "Child (pl. Children)",
            "pronunciation": "oh-mwah-nah / ah-bah-nah",
            "hint": "Class 1/2 noun"
          },
          {
            "target": "omwami (pl. abami)",
            "source": "King / Paramount Chief (Nabongo)",
            "pronunciation": "oh-mwah-mee / ah-bah-mee",
            "hint": "Rev. N. Stam (1929, pp. 148–149) Wanga royal title"
          },
          {
            "target": "mama / papa (sese)",
            "source": "Mother / Father",
            "pronunciation": "mah-mah / pah-pah",
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
        "tips": "Hobley (1902, pp. 84, 95) and Johnston (1919, p. 54) record Luwanga/Lunyara numerals 1–10: ndala (-lala, 1), tsimbili (-bili, 2), tsitaru (-taru, 3), tsine (-ne, 4), tsiraano (-raano, 5), tsisaasaba (6), mufungate (tsisaba, 7), munane (8), shenda (9), ikhumi (10).",
        "words": [
          {
            "target": "-lala (ndala)",
            "source": "One (1)",
            "pronunciation": "lah-lah",
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          },
          {
            "target": "-bili (tsimbili)",
            "source": "Two (2)",
            "pronunciation": "bee-lee",
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          },
          {
            "target": "-taru (tsitaru)",
            "source": "Three (3)",
            "pronunciation": "tah-roo",
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          },
          {
            "target": "-ne (tsine)",
            "source": "Four (4)",
            "pronunciation": "neh",
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          },
          {
            "target": "-raano (tsiraano)",
            "source": "Five (5)",
            "pronunciation": "rah-noh",
            "hint": "Hobley (1902) & Johnston (1919 #5a)"
          },
          {
            "target": "tsisaasaba, mufungate, munane, shenda, ikhumi",
            "source": "6, 7, 8, 9, 10",
            "pronunciation": "tsee-sah-sah-bah, moo-foon-gah-teh, moo-nah-neh, shehn-dah, ee-khoo-mee",
            "hint": "Johnston (1919, p. 54) Luwanga/Lunyara numerals 6–10"
          },
          {
            "target": "-khongo",
            "source": "Big / large",
            "pronunciation": "khoh-ngoh",
            "hint": "Zone J30 Swadesh #27"
          },
          {
            "target": "-titi / -tutu",
            "source": "Small / few",
            "pronunciation": "tee-tee",
            "hint": "Zone J30 Swadesh #32"
          },
          {
            "target": "-layi",
            "source": "Good",
            "pronunciation": "lah-yee",
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
            "pronunciation": "ah-mah-tsee",
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "target": "omuliro",
            "source": "Fire",
            "pronunciation": "oh-moo-lee-roh",
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "target": "liyuba (eliuba)",
            "source": "Sun",
            "pronunciation": "lee-yoo-bah",
            "hint": "Rev. N. Stam (1929, p. 160) & Johnston (1919)"
          },
          {
            "target": "ifula",
            "source": "Rain",
            "pronunciation": "ee-foo-lah",
            "hint": "Hobley (1902) & Johnston (1919)"
          },
          {
            "target": "Were / Nasayi",
            "source": "God, the Supreme Creator",
            "pronunciation": "weh-reh / nah-sah-yee",
            "hint": "Rev. N. Stam (1929, pp. 154, 159–160) Wanga religion"
          },
          {
            "target": "Were ankhonyere / Nasayi akhulinde",
            "source": "May God help me / May God guard you",
            "pronunciation": "weh-reh ahn-khoh-nyeh-reh",
            "hint": "Rev. N. Stam (1929, p. 160) traditional blessing"
          },
          {
            "target": "musiro (muziro) / ekhyinekha",
            "source": "Clan totem (thing abstained from) / Soul or shadow",
            "pronunciation": "moo-see-roh / eh-khyee-neh-khah",
            "hint": "Stam (1929, pp. 162, 176) & Hobley (1903, p. 347)"
          },
          {
            "target": "okhunywa / okhuliira",
            "source": "To drink / To eat",
            "pronunciation": "oh-khoo-nywah / oh-khoo-lee-rah",
            "hint": "Class 15 infinitives"
          },
          {
            "target": "okhulola / okhumanya",
            "source": "To see / To know",
            "pronunciation": "oh-khoo-loh-lah / oh-khoo-mah-nyah",
            "hint": "Class 15 infinitives"
          },
          {
            "target": "okhwitsa / okhuchenda",
            "source": "To come / To walk",
            "pronunciation": "oh-khwee-tsah / oh-khoo-chehn-dah",
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
    "description": "Master family, kinship, clans & social organization in Luhya (Luyia) built directly from C.",
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
            "pronunciation": "oh-mwah-mee / nah-bohn-goh",
            "hint": "Rev. N. Stam 1929 pp. 148–149 Wanga royal title"
          },
          {
            "target": "omulina (pl. abalina) / omwitsa",
            "source": "Friend",
            "pronunciation": "oh-moo-lee-nah / oh-mwee-tsah",
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "target": "omwana (pl. abana / baana)",
            "source": "Child / children",
            "pronunciation": "omwana (pl. abana / baana)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "mukha / omukhasi",
            "source": "Wife",
            "pronunciation": "mukha / omukhasi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omukhwe / omusatsa",
            "source": "Husband",
            "pronunciation": "omukhwe / omusatsa",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "mama",
            "source": "Mother",
            "pronunciation": "mama",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "papa / taata",
            "source": "Father",
            "pronunciation": "papa / taata",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omwana (pl. abana / avana)",
            "source": "child (pl. children)",
            "pronunciation": "omwana (pl. abana / avana)",
            "hint": "Lubukusu / Oluhya"
          },
          {
            "target": "Omw-ami; aw-ami / Omw-ami / Omw-ami. Ωmu-kuru",
            "source": "Chief",
            "pronunciation": "omw-ami; aw-ami / omw-ami / omw-ami. omu-kuru",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          }
        ],
        "sentences": [
          {
            "target": "Munzu mwefwe muli omwana (pl. abana / baana) nende mukha / omukhasi.",
            "source": "In our house there is Child / children and Wife."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Omwami (Nabongo, pl. Abami)\" in Luhya?",
            "correctAnswer": "King / Chief",
            "options": [
              "Friend",
              "Child / children",
              "Wife",
              "King / Chief"
            ],
            "hint": "Rev. N. Stam 1929 pp. 148–149 Wanga royal title"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omulina (pl. abalina) / omwitsa\" in Luhya?",
            "correctAnswer": "Friend",
            "options": [
              "Child / children",
              "Wife",
              "Friend",
              "King / Chief"
            ],
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"omwana (pl. abana / baana)\" in Luhya?",
            "correctAnswer": "Child / children",
            "options": [
              "Wife",
              "Child / children",
              "King / Chief",
              "Friend"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Child / children\" in Luhya?",
            "correctAnswer": "omwana (pl. abana / baana)",
            "options": [
              "omwana (pl. abana / baana)",
              "Omwami (Nabongo, pl. Abami)",
              "omulina (pl. abalina) / omwitsa",
              "mukha / omukhasi"
            ],
            "hint": "omwana (pl. abana / baana)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Wife\" in Luhya?",
            "correctAnswer": "mukha / omukhasi",
            "options": [
              "Omwami (Nabongo, pl. Abami)",
              "omulina (pl. abalina) / omwitsa",
              "omwana (pl. abana / baana)",
              "mukha / omukhasi"
            ],
            "hint": "mukha / omukhasi"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
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
            "prompt": "Complete the Luhya term for \"Husband\": ___",
            "correctAnswer": "omukhwe / omusatsa",
            "options": [
              "Omwami (Nabongo, pl. Abami)",
              "omulina (pl. abalina) / omwitsa",
              "omwana (pl. abana / baana)",
              "omukhwe / omusatsa"
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
            "pronunciation": "omw-ana / omw-ana; bab-ana. om-soriri",
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
            "pronunciation": "mukhofu",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "oweha",
            "source": "Marriage",
            "pronunciation": "oweha",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "umuchesa",
            "source": "Neighbour",
            "pronunciation": "umuchesa",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "mulamu",
            "source": "Sister-in-law",
            "pronunciation": "mulamu",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "msiani",
            "source": "Son",
            "pronunciation": "msiani",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "nakufiala",
            "source": "Son-in-law",
            "pronunciation": "nakufiala",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "baba",
            "source": "Step-father",
            "pronunciation": "baba",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          }
        ],
        "sentences": [
          {
            "target": "Munzu mwefwe muli mukhofu nende oweha.",
            "source": "In our house there is Elder and Marriage."
          }
        ],
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
    "description": "Master numbers, counting, currency & measures in Luhya (Luyia) built directly from C.",
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
            "pronunciation": "ee-khoo-mee",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "shenda (kienda)",
            "source": "Nine",
            "pronunciation": "shehn-dah / kee-ehn-dah",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "munane (tsinane)",
            "source": "Eight",
            "pronunciation": "moo-nah-neh",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "mufungate (tsisaba)",
            "source": "Seven",
            "pronunciation": "moo-foon-gah-teh / tsee-sah-bah",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "tsisaasaba (mkaga)",
            "source": "Six",
            "pronunciation": "tsee-sah-sah-bah",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "-osi / tulu",
            "source": "All",
            "pronunciation": "-osi / tulu",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-inji / -nyishi",
            "source": "Many",
            "pronunciation": "-inji / -nyishi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-lala / ndala",
            "source": "One",
            "pronunciation": "-lala / ndala",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-bili /tsimbili",
            "source": "Two",
            "pronunciation": "-bili /tsimbili",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Munzu mwefwe muli munane (tsinane) nende mufungate (tsisaba).",
            "source": "In our house there is Eight and Seven."
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
            "pronunciation": "-taru / tsitaru",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-ne / tsine",
            "source": "Four",
            "pronunciation": "-ne / tsine",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-raano / tsiraano",
            "source": "Five",
            "pronunciation": "-raano / tsiraano",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "Sekunde",
            "source": "Second (time unit)",
            "pronunciation": "sekunde",
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
            "pronunciation": "-nggi / -inggi",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          }
        ],
        "sentences": [
          {
            "target": "Munzu mwefwe muli -raano / tsiraano nende Sekunde.",
            "source": "In our house there is Five and Second (time unit)."
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
    "description": "Master food, cuisine, crops & livestock husbandry in Luhya (Luyia) built directly from C.",
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
            "pronunciation": "oh-boo-shee",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "amabele (mabere)",
            "source": "Milk",
            "pronunciation": "ah-mah-beh-leh",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "ebyokhulia (obuma = ugali)",
            "source": "Food",
            "pronunciation": "eh-byoh-khoo-lee-ah / oh-boo-mah",
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "target": "eshiamo (pl. ebiamo)",
            "source": "Fruit",
            "pronunciation": "eshiamo (pl. ebiamo)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "inyama",
            "source": "Meat",
            "pronunciation": "inyama",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "libuyu (pl. amabuyu)",
            "source": "Egg",
            "pronunciation": "libuyu (pl. amabuyu)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omunyu / omufume",
            "source": "Salt",
            "pronunciation": "omunyu / omufume",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-yinjikhane",
            "source": "Full",
            "pronunciation": "-yinjikhane",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-bolo",
            "source": "Rotten",
            "pronunciation": "-bolo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Munzu mwefwe muli ebyokhulia (obuma = ugali) nende eshiamo (pl. ebiamo).",
            "source": "In our house there is Food and Fruit."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"obushi (bushi)\" in Luhya?",
            "correctAnswer": "Honey",
            "options": [
              "Milk",
              "Food",
              "Fruit",
              "Honey"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"amabele (mabere)\" in Luhya?",
            "correctAnswer": "Milk",
            "options": [
              "Food",
              "Fruit",
              "Milk",
              "Honey"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ebyokhulia (obuma = ugali)\" in Luhya?",
            "correctAnswer": "Food",
            "options": [
              "Fruit",
              "Food",
              "Honey",
              "Milk"
            ],
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Food\" in Luhya?",
            "correctAnswer": "ebyokhulia (obuma = ugali)",
            "options": [
              "ebyokhulia (obuma = ugali)",
              "obushi (bushi)",
              "amabele (mabere)",
              "eshiamo (pl. ebiamo)"
            ],
            "hint": "eh-byoh-khoo-lee-ah / oh-boo-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fruit\" in Luhya?",
            "correctAnswer": "eshiamo (pl. ebiamo)",
            "options": [
              "obushi (bushi)",
              "amabele (mabere)",
              "ebyokhulia (obuma = ugali)",
              "eshiamo (pl. ebiamo)"
            ],
            "hint": "eshiamo (pl. ebiamo)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "obushi (bushi): Honey",
            "pairs": [
              {
                "left": "obushi (bushi)",
                "right": "Honey"
              },
              {
                "left": "amabele (mabere)",
                "right": "Milk"
              },
              {
                "left": "ebyokhulia (obuma = ugali)",
                "right": "Food"
              },
              {
                "left": "eshiamo (pl. ebiamo)",
                "right": "Fruit"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"Meat\": ___",
            "correctAnswer": "inyama",
            "options": [
              "obushi (bushi)",
              "amabele (mabere)",
              "ebyokhulia (obuma = ugali)",
              "inyama"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
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
            "pronunciation": "ama-furra / ama-futa / kimi-nawa (pl.). kama-futa",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "In-zala / In-jala / In-jara, In-zala",
            "source": "Hunger",
            "pronunciation": "in-zala / in-jala / in-jara, in-zala",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "Ama-duma. Ka-duma (5 b) / Ama-dumwa / Nabu-kubo",
            "source": "Maize",
            "pronunciation": "ama-duma. ka-duma (5 b) / ama-dumwa / nabu-kubo",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "Omw-engge. Ama-lua / Omw-engge / Kama-rwa",
            "source": "Palm wine, beer",
            "pronunciation": "omw-engge. ama-lua / omw-engge / kama-rwa",
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
            "pronunciation": "-dia / -dia, -lia / -lya",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "shilulu",
            "source": "Bitter",
            "pronunciation": "shilulu",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "shifui",
            "source": "Boil (noun)",
            "pronunciation": "shifui",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          }
        ],
        "sentences": [
          {
            "target": "Munzu mwefwe muli In-zala / In-jala / In-jara, In-zala nende Ama-duma. Ka-duma (5 b) / Ama-dumwa / Nabu-kubo.",
            "source": "In our house there is Hunger and Maize."
          }
        ],
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
    "description": "Master nature, landscape, flora & east african wildlife in Luhya (Luyia) built directly from C.",
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
            "pronunciation": "omusaala / omuti (pl. emisaala)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omutsuru",
            "source": "Forest",
            "pronunciation": "omutsuru",
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
            "pronunciation": "lifafu / lisafu (pl. amasafu)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omurombo",
            "source": "Root",
            "pronunciation": "omurombo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "likhoba",
            "source": "Bark (of tree)",
            "pronunciation": "likhoba",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eshimuli (pl. ebimuli)",
            "source": "Flower",
            "pronunciation": "eshimuli (pl. ebimuli)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "obunyasi",
            "source": "Grass",
            "pronunciation": "obunyasi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eliuba",
            "source": "Sun",
            "pronunciation": "eliuba",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Munzu mwefwe muli imwo nende lifafu / lisafu (pl. amasafu).",
            "source": "In our house there is Seed and Leaf."
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
            "pronunciation": "omwesi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "ing'ining'ini",
            "source": "Star",
            "pronunciation": "ing'ining'ini",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omuchera / omwalo",
            "source": "River",
            "pronunciation": "omuchera / omwalo",
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
            "pronunciation": "libale / lichina",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "olufu",
            "source": "Dust",
            "pronunciation": "olufu",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eshi / eshialo",
            "source": "Earth / country",
            "pronunciation": "eshi / eshialo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "lilesi",
            "source": "Cloud",
            "pronunciation": "lilesi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "loing'ong'ong'we",
            "source": "Fog / mist",
            "pronunciation": "loing'ong'ong'we",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Munzu mwefwe muli omuchera / omwalo nende inyanza.",
            "source": "In our house there is River and Lake / sea."
          }
        ],
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
    "description": "Master the human body, health, medicine & safety in Luhya (Luyia) built directly from C.",
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
            "pronunciation": "amabanga / amalasire / amatsayi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "likumba (pl. amakumba)",
            "source": "Bone",
            "pronunciation": "likumba (pl. amakumba)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "amanulu / amafura",
            "source": "Fat / oil",
            "pronunciation": "amanulu / amafura",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "liswi (pl. amaswi)",
            "source": "Hair",
            "pronunciation": "liswi (pl. amaswi)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omurwe / om'rwe (pl. emirwe)",
            "source": "Head",
            "pronunciation": "omurwe / om'rwe (pl. emirwe)",
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
            "pronunciation": "imoni (pl. tsimoni) / eliiso",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "amolu",
            "source": "Nose",
            "pronunciation": "amolu",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omunwa (pl. eminwa)",
            "source": "Mouth",
            "pronunciation": "omunwa (pl. eminwa)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Munzu mwefwe muli amanulu / amafura nende liswi (pl. amaswi).",
            "source": "In our house there is Fat / oil and Hair."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"amabanga / amalasire / amatsayi\" in Luhya?",
            "correctAnswer": "Blood",
            "options": [
              "Bone",
              "Fat / oil",
              "Hair",
              "Blood"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"likumba (pl. amakumba)\" in Luhya?",
            "correctAnswer": "Bone",
            "options": [
              "Fat / oil",
              "Hair",
              "Bone",
              "Blood"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"amanulu / amafura\" in Luhya?",
            "correctAnswer": "Fat / oil",
            "options": [
              "Hair",
              "Fat / oil",
              "Blood",
              "Bone"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fat / oil\" in Luhya?",
            "correctAnswer": "amanulu / amafura",
            "options": [
              "amanulu / amafura",
              "amabanga / amalasire / amatsayi",
              "likumba (pl. amakumba)",
              "liswi (pl. amaswi)"
            ],
            "hint": "amanulu / amafura"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hair\" in Luhya?",
            "correctAnswer": "liswi (pl. amaswi)",
            "options": [
              "amabanga / amalasire / amatsayi",
              "likumba (pl. amakumba)",
              "amanulu / amafura",
              "liswi (pl. amaswi)"
            ],
            "hint": "liswi (pl. amaswi)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya expression with its English meaning:",
            "correctAnswer": "amabanga / amalasire / amatsayi: Blood",
            "pairs": [
              {
                "left": "amabanga / amalasire / amatsayi",
                "right": "Blood"
              },
              {
                "left": "likumba (pl. amakumba)",
                "right": "Bone"
              },
              {
                "left": "amanulu / amafura",
                "right": "Fat / oil"
              },
              {
                "left": "liswi (pl. amaswi)",
                "right": "Hair"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya term for \"Head\": ___",
            "correctAnswer": "omurwe / om'rwe (pl. emirwe)",
            "options": [
              "amabanga / amalasire / amatsayi",
              "likumba (pl. amakumba)",
              "amanulu / amafura",
              "omurwe / om'rwe (pl. emirwe)"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
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
            "pronunciation": "elino (pl. ameno)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "olulimi (pl. tsinzimi)",
            "source": "Tongue",
            "pronunciation": "olulimi (pl. tsinzimi)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "lilaro / eshilenge",
            "source": "Foot",
            "pronunciation": "lilaro / eshilenge",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eshilenje / lirango",
            "source": "Leg / thigh",
            "pronunciation": "eshilenje / lirango",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "lisikamo",
            "source": "Knee",
            "pronunciation": "lisikamo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omukhono (pl. emikhono)",
            "source": "Hand / arm",
            "pronunciation": "omukhono (pl. emikhono)",
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
            "pronunciation": "amala",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "likosi",
            "source": "Neck",
            "pronunciation": "likosi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Munzu mwefwe muli lilaro / eshilenge nende eshilenje / lirango.",
            "source": "In our house there is Foot and Leg / thigh."
          }
        ],
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
    "description": "Master core verbs, tenses, negation & verbal extensions in Luhya (Luyia) built directly from C.",
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
            "pronunciation": "oh-khoo-loh-mah",
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "target": "okhukona",
            "source": "Sleep",
            "pronunciation": "oh-khoo-koh-nah",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhunywa",
            "source": "Drink",
            "pronunciation": "oh-khoo-nywah",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhuliira / okhulia",
            "source": "Eat",
            "pronunciation": "oh-khoo-lee-ah",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhwitsa (itsa!)",
            "source": "Come",
            "pronunciation": "oh-khwee-tsah",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhutsia (tsia!)",
            "source": "Go",
            "pronunciation": "oh-khoo-tsee-ah",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhukuna / okhuluma",
            "source": "To bite",
            "pronunciation": "okhukuna / okhuluma",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhunuuna",
            "source": "To suck",
            "pronunciation": "okhunuuna",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhubita / okhufutsa",
            "source": "To spit",
            "pronunciation": "okhubita / okhufutsa",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Munzu mwefwe muli okhunywa nende okhuliira / okhulia.",
            "source": "In our house there is Drink and Eat."
          }
        ],
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
            "source": "To vomit",
            "pronunciation": "okhusala",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhuutsa / okhufura",
            "source": "To blow",
            "pronunciation": "okhuutsa / okhufura",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhuyeera",
            "source": "To breathe",
            "pronunciation": "okhuyeera",
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
            "pronunciation": "okhulola",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhuulira",
            "source": "To hear",
            "pronunciation": "okhuulira",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhumanya",
            "source": "To know",
            "pronunciation": "okhumanya",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhupara",
            "source": "To think",
            "pronunciation": "okhupara",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhuunya",
            "source": "To smell",
            "pronunciation": "okhuunya",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Munzu mwefwe muli okhuyeera nende okhutsekha.",
            "source": "In our house there is To breathe and To laugh."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"okhusala\" in Luhya?",
            "correctAnswer": "To vomit",
            "options": [
              "To blow",
              "To breathe",
              "To laugh",
              "To vomit"
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
              "To vomit"
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
              "To vomit",
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
                "right": "To vomit"
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
            "target": "wañge = my",
            "source": "(my)",
            "pronunciation": "wañge = my",
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
            "pronunciation": "ndera",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Bali",
            "source": "They are",
            "pronunciation": "bali",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Muli",
            "source": "Ye are",
            "pronunciation": "muli",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "khuli",
            "source": "We are",
            "pronunciation": "khuli",
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
        "sentences": [
          {
            "target": "wañge = my",
            "source": "(my)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"wañge = my\" in Luhya?",
            "correctAnswer": "(my)",
            "options": [
              "(my)",
              "I come",
              "I bring",
              "They are"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukonde / Masaba)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Luhya (Luyia) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "wañge = my: (my)",
            "pairs": [
              {
                "left": "wañge = my",
                "right": "(my)"
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
              "khuli",
              "wañge = my",
              "Ndzidza"
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
            "pronunciation": "tawi",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Racari",
            "source": "most beasts, etc",
            "pronunciation": "racari",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Iduasi",
            "source": "(mammals and reptiles)",
            "pronunciation": "iduasi",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Nisie",
            "source": "I, me",
            "pronunciation": "nisie",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Ngiri",
            "source": "Wart hog",
            "pronunciation": "ngiri",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Lucemo, (Ri-, Ma-); Tsiñgemo, pl",
            "source": "Raphia palm",
            "pronunciation": "lucemo, (ri-, ma-); tsiñgemo, pl",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Alia efu",
            "source": "(our)",
            "pronunciation": "alia efu",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          }
        ],
        "sentences": [
          {
            "target": "Alia efu",
            "source": "(our)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ndu\" in Luhya?",
            "correctAnswer": "I am",
            "options": [
              "I am",
              "No, not",
              "most beasts, etc",
              "(mammals and reptiles)"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Luhya (Luyia) term from the public-domain corpus to its English meaning:",
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
                "right": "most beasts, etc"
              },
              {
                "left": "Iduasi",
                "right": "(mammals and reptiles)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Luhya (Luyia) term for \"I, me\": ___",
            "correctAnswer": "Nisie",
            "options": [
              "Nisie",
              "Ngiri",
              "Ndu",
              "Tawi"
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
            "source": "(castrated)",
            "pronunciation": "ehei",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Sirkhanga",
            "source": "(good)",
            "pronunciation": "sirkhanga",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Ekhibia, Efiuma",
            "source": "Iron / Beads",
            "pronunciation": "ekhibia, efiuma",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Imbande, Tsimbande",
            "source": "nut",
            "pronunciation": "imbande, tsimbande",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Omuriango",
            "source": "Doorway",
            "pronunciation": "omuriango",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Citere",
            "source": "Daylight",
            "pronunciation": "citere",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Akhana",
            "source": "(little)",
            "pronunciation": "akhana",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Indiwisi",
            "source": "Colobus",
            "pronunciation": "indiwisi",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          }
        ],
        "sentences": [
          {
            "target": "Ekhibia, Efiuma",
            "source": "Iron / Beads"
          },
          {
            "target": "Imbande, Tsimbande",
            "source": "nut"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ehei\" in Luhya?",
            "correctAnswer": "(castrated)",
            "options": [
              "(castrated)",
              "(good)",
              "Iron / Beads",
              "nut"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Luhya (Luyia) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Ehei: (castrated)",
            "pairs": [
              {
                "left": "Ehei",
                "right": "(castrated)"
              },
              {
                "left": "Sirkhanga",
                "right": "(good)"
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
              "Citere",
              "Ehei",
              "Sirkhanga"
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
            "pronunciation": "injobe",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "Ikisi",
            "source": "Cephalophus",
            "pronunciation": "ikisi",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
          },
          {
            "target": "chenanu",
            "source": "Whose",
            "pronunciation": "chenanu",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Ketosh / Bukusu)"
          },
          {
            "target": "ewinanu",
            "source": "Who",
            "pronunciation": "ewinanu",
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
            "pronunciation": "siwisi",
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
            "pronunciation": "kimirongolo",
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
  }
];
