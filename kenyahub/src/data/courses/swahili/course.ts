import type { LanguageConfig, CourseUnit } from "../types";

export const SWAHILI_CONFIG: LanguageConfig = {
  "id": "swahili",
  "name": "Kiswahili",
  "nativeName": "Kiswahili",
  "family": "Bantu",
  "counties": [
    "Mombasa",
    "Kilifi",
    "Kwale",
    "Lamu",
    "Tana River",
    "Nairobi"
  ],
  "speakers": "15M+",
  "speechLocale": "sw-KE",
  "description": "Kenya's national and official language and East Africa's historic Sabaki Bantu lingua franca.",
  "color": "#0284C7",
  "sources": [
    "krapf-six-languages-1850",
    "steere-swahili-tales-1870",
    "krapf-suahili-dictionary-1882",
    "taylor-aphorisms-1891",
    "steere-madan-swahili-handbook-1894",
    "madan-english-swahili-dictionary-1902-grammar-1905",
    "madan-swahili-dictionary-1903",
    "kamba-kikuyu-vocabularies",
    "burt-swahili-grammar-1910",
    "madan-english-swahili-vocabulary-1917",
    "johnston-bantu-1919",
    "bantu-beliefs",
    "open-web-swadesh-comparative",
    "mwamzandi-swahili-relative-clauses-2022",
    "beech-aids-study-kiswahili-1918",
    "clem-jenks-sande-theory-description-2019",
    "gould-scott-swahili-relatives-2019",
    "pesetsky-swahili-semantic-gender-2019",
    "nurse-northern-swahili-southern-somali-2019",
    "goldsmith-mpiranya-swahili-mdl-2022"
  ]
};

export const SWAHILI_UNITS: CourseUnit[] = [
  {
    "id": "swahili-unit-1",
    "unitNumber": 1,
    "title": "Greetings, Noun Classes (Ngeli) & Everyday Phrases",
    "description": "Master coastal (Ki-Mvita / Ki-Unguja) and standard Kiswahili greetings, M-/Wa- and Ki-/Vi- noun classes, and conversational phrases from Hinde (1904), Steere (1894), and Burt (1910).",
    "icon": "BookOpen",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-greetings-nouns",
        "title": "Greetings, People & Noun Classes",
        "icon": "Users",
        "description": "Learn foundational Kiswahili greetings and noun singular/plural pairs.",
        "words": [
          {
            "target": "Hujambo!",
            "source": "Hello!",
            "pronunciation": "hu-jambo / ha-ba-ri ya-ko"
          },
          {
            "target": "Habari yako?",
            "source": "How is your news?",
            "pronunciation": "hu-jambo / ha-ba-ri ya-ko"
          },
          {
            "target": "Asante sana",
            "source": "Thank you very much",
            "pronunciation": "a-sante sa-na"
          },
          {
            "target": "mtu (pl. watu)",
            "source": "person (pl. people)",
            "pronunciation": "mtu"
          },
          {
            "target": "mtoto (pl. watoto)",
            "source": "child (pl. children)",
            "pronunciation": "mto-to"
          },
          {
            "target": "mgeni (pl. wageni)",
            "source": "guest / stranger",
            "pronunciation": "mge-ni"
          },
          {
            "target": "kitu (pl. vitu)",
            "source": "thing (pl. things)",
            "pronunciation": "ki-tu"
          },
          {
            "target": "maji",
            "source": "water",
            "pronunciation": "ma-ji / mo-to"
          },
          {
            "target": "moto",
            "source": "fire",
            "pronunciation": "ma-ji / mo-to"
          },
          {
            "target": "nyumba (pl. nyumba)",
            "source": "house (pl. houses)",
            "pronunciation": "nyumba"
          },
          {
            "target": "chakula",
            "source": "food",
            "pronunciation": "cha-ku-la"
          },
          {
            "target": "njia (Kimvita: ndia)",
            "source": "road / path / way",
            "pronunciation": "njia"
          }
        ],
        "sentences": [
          {
            "target": "Mgeni amefika nyumbani.",
            "source": "The guest has arrived at the house."
          },
          {
            "target": "Watu wanakunywa maji safi.",
            "source": "The people are drinking clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Hujambo!\" in Kiswahili?",
            "correctAnswer": "Hello!",
            "options": [
              "person",
              "Hello!",
              "child",
              "guest"
            ],
            "hint": "Response: Sijambo! / Njema! (Steere 1894 & Burt 1910)",
            "acceptedAnswers": [
              "Hello! / How is your news?",
              "Hello!"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Asante sana\" in Kiswahili?",
            "correctAnswer": "Thank you very much",
            "options": [
              "How is your news?",
              "Thank you very much",
              "Hello!",
              "person"
            ],
            "hint": "Polite gratitude"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mtu (pl. watu)\" in Kiswahili?",
            "correctAnswer": "person",
            "options": [
              "child",
              "Hello!",
              "guest",
              "person"
            ],
            "hint": "Class 1/2 m-/wa- (Krapf 1882 & Hinde 1904)",
            "acceptedAnswers": [
              "person (pl. people)",
              "person"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"person (pl. people)\" in Kiswahili?",
            "correctAnswer": "mtu",
            "options": [
              "Hujambo!",
              "mtu",
              "Asante sana",
              "mtoto"
            ],
            "hint": "m-too / wah-too",
            "acceptedAnswers": [
              "mtu (pl. watu)",
              "mtu"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"child (pl. children)\" in Kiswahili?",
            "correctAnswer": "mtoto",
            "options": [
              "mtoto",
              "Hujambo!",
              "Asante sana",
              "mtu"
            ],
            "hint": "m-toh-toh / wah-toh-toh",
            "acceptedAnswers": [
              "mtoto (pl. watoto)",
              "mtoto"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "Hujambo! / Habari yako?: Hello! / How is your news?",
            "pairs": [
              {
                "left": "Hujambo! / Habari yako?",
                "right": "Hello! / How is your news?"
              },
              {
                "left": "Asante sana",
                "right": "Thank you very much"
              },
              {
                "left": "mtu (pl. watu)",
                "right": "person (pl. people)"
              },
              {
                "left": "mtoto (pl. watoto)",
                "right": "child (pl. children)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"guest / stranger\": ___",
            "correctAnswer": "mgeni",
            "options": [
              "mgeni",
              "Hujambo!",
              "Asante sana",
              "mtu"
            ],
            "hint": "Class 1/2 m-/wa- (Hinde 1904)",
            "acceptedAnswers": [
              "mgeni (pl. wageni)",
              "mgeni"
            ]
          }
        ]
      },
      {
        "id": "swahili-verbs-proverbs",
        "title": "Verb Tenses, Numerals 1–10 & Taylor / Steere Proverbs",
        "icon": "Zap",
        "description": "Conjugate Swahili verbs across Present, Past, and Future tenses and learn iconic coastal proverbs and riddles.",
        "words": [
          {
            "target": "moja",
            "source": "One (1)",
            "pronunciation": "mo-ja mbi-li ta-tu nne ta-no"
          },
          {
            "target": "mbili",
            "source": "Two (2)",
            "pronunciation": "mo-ja mbi-li ta-tu nne ta-no"
          },
          {
            "target": "tatu",
            "source": "Three (3)",
            "pronunciation": "mo-ja mbi-li ta-tu nne ta-no"
          },
          {
            "target": "sita",
            "source": "Six (6)",
            "pronunciation": "si-ta sa-ba na-ne kenda ku-mi"
          },
          {
            "target": "saba (mfungate)",
            "source": "Seven (7)",
            "pronunciation": "si-ta sa-ba na-ne kenda ku-mi"
          },
          {
            "target": "nane",
            "source": "Eight (8)",
            "pronunciation": "si-ta sa-ba na-ne kenda ku-mi"
          },
          {
            "target": "ninashinda",
            "source": "I pass the day",
            "pronunciation": "ni-nashinda / ni-lishinda / ni-tashinda"
          },
          {
            "target": "nilishinda",
            "source": "I passed",
            "pronunciation": "ni-nashinda / ni-lishinda / ni-tashinda"
          },
          {
            "target": "nitashinda",
            "source": "I shall pass",
            "pronunciation": "ni-nashinda / ni-lishinda / ni-tashinda"
          },
          {
            "target": "sishindi",
            "source": "I do not",
            "pronunciation": "sishindi / si-kushinda / si-jashinda"
          },
          {
            "target": "sikushinda",
            "source": "I did not",
            "pronunciation": "sishindi / si-kushinda / si-jashinda"
          },
          {
            "target": "sijashinda",
            "source": "I have not yet passed the day",
            "pronunciation": "sishindi / si-kushinda / si-jashinda"
          },
          {
            "target": "kula",
            "source": "to eat",
            "pronunciation": "ku-la / kunywa / ku-ja / kwenda"
          },
          {
            "target": "kunywa",
            "source": "to drink",
            "pronunciation": "ku-la / kunywa / ku-ja / kwenda"
          },
          {
            "target": "kuja",
            "source": "to come",
            "pronunciation": "ku-la / kunywa / ku-ja / kwenda"
          },
          {
            "target": "kwenda",
            "source": "to go",
            "pronunciation": "ku-la / kunywa / ku-ja / kwenda"
          },
          {
            "target": "Haraka haraka haina baraka",
            "source": "Hurry, hurry has no blessing",
            "pronunciation": "ha-ra-ka ha-ra-ka hai-na ba-ra-ka"
          },
          {
            "target": "Mtaka cha mvunguni huinama (sharti ainame)",
            "source": "Whoever wants what is under the bed must stoop",
            "pronunciation": "mta-ka cha mvungu-ni hui-na-ma"
          },
          {
            "target": "Haba na haba hujaza kibaba",
            "source": "Little by little fills the measure",
            "pronunciation": "ha-ba na ha-ba hu-ja-za ki-ba-ba"
          }
        ],
        "sentences": [
          {
            "target": "Haba na haba hujaza kibaba.",
            "source": "Little by little fills the measure ."
          },
          {
            "target": "Mzee alitaja sita nyumbani.",
            "source": "The elder mentioned 6 at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"moja, mbili, tatu, nne, tano\" in Kiswahili?",
            "correctAnswer": "1",
            "options": [
              "1",
              "6",
              "I do not",
              "One"
            ],
            "hint": "Cardinal numbers 1–5 (Hinde 1904 & Steere 1894)",
            "acceptedAnswers": [
              "1, 2, 3, 4, 5",
              "1"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sita, saba (mfungate), nane, kenda (tisa), kumi\" in Kiswahili?",
            "correctAnswer": "6",
            "options": [
              "I do not",
              "1",
              "One",
              "6"
            ],
            "hint": "Krapf (1882) & Hinde (1904) preserve Bantu mfungate (7) & kenda (9)",
            "acceptedAnswers": [
              "6, 7, 8, 9, 10",
              "6"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ninashinda\" in Kiswahili?",
            "correctAnswer": "I pass the day",
            "options": [
              "I do not",
              "I passed",
              "I shall pass",
              "I pass the day"
            ],
            "hint": "Hinde (1904) paradigm verb ku-shinda",
            "acceptedAnswers": [
              "I pass the day / I passed / I shall pass",
              "I pass the day"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I pass the day\" in Kiswahili?",
            "correctAnswer": "ninashinda",
            "options": [
              "moja",
              "sita",
              "sishindi",
              "ninashinda"
            ],
            "hint": "nee-nah-sheen-dah",
            "acceptedAnswers": [
              "ninashinda / nilishinda / nitashinda",
              "ninashinda"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I do not\" in Kiswahili?",
            "correctAnswer": "sishindi",
            "options": [
              "moja",
              "sita",
              "ninashinda",
              "sishindi"
            ],
            "hint": "see-sheen-dee",
            "acceptedAnswers": [
              "sishindi / sikushinda / sijashinda",
              "sishindi"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "moja, mbili, tatu, nne, tano: 1, 2, 3, 4, 5",
            "pairs": [
              {
                "left": "moja, mbili, tatu, nne, tano",
                "right": "1, 2, 3, 4, 5"
              },
              {
                "left": "sita, saba (mfungate), nane, kenda (tisa), kumi",
                "right": "6, 7, 8, 9, 10"
              },
              {
                "left": "ninashinda / nilishinda / nitashinda",
                "right": "I pass the day / I passed / I shall pass"
              },
              {
                "left": "sishindi / sikushinda / sijashinda",
                "right": "I do not / I did not / I have not yet passed the day"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"to eat\": ___",
            "correctAnswer": "kula",
            "options": [
              "moja",
              "kula",
              "sita",
              "ninashinda"
            ],
            "hint": "Core infinitive verbs (Madan 1917)",
            "acceptedAnswers": [
              "kula / kunywa / kuja / kwenda",
              "kula"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-2",
    "unitNumber": 2,
    "title": "Classical Swahili Dialects, 8 Verb Stems & Steere Oral",
    "description": "Explore Ki-Mvita vs. Ki-Unguja vs. Ki-Amu/Ki-Ngozi dialects, Madan’s 8 verbal derivative stems, and Steere’s 1870 Vitendawili & Hadithi ya Liongo.",
    "icon": "Lightbulb",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-verb-derivations-madan",
        "title": "Madan 8 Verbal Derivative Stems & Steere Kinyume",
        "icon": "RefreshCw",
        "description": "Master Applied (-ia/-ea), Causative (-isha/-eza), Stative (-ika/-eka), Reciprocal (-ana), and Reversive (-ua/-oa) verb stems.",
        "words": [
          {
            "target": "kupenda → kupendea → kupendeza → kupendana",
            "source": "to love → love for/by → please (cause to love) → love each other",
            "pronunciation": "ku-penda → ku-pendea → ku-pende-za → ku-penda-na"
          },
          {
            "target": "kufunga → kufungia → kufungua → kufunguka",
            "source": "to fasten/shut → fasten for/with → unfasten (reversive) → become unfastened",
            "pronunciation": "ku-funga → ku-fungia → ku-fungua → ku-fungu-ka"
          },
          {
            "target": "kuvunja → kuvunjika",
            "source": "to break (trans.) → to be broken / breakable (stative)",
            "pronunciation": "ku-vunja → ku-vunji-ka"
          },
          {
            "target": "shokangwa",
            "source": "someone else's axe",
            "pronunciation": "sho-kangwa / jembengwa / ki-tingwa"
          },
          {
            "target": "jembengwa",
            "source": "hoe",
            "pronunciation": "sho-kangwa / jembengwa / ki-tingwa"
          },
          {
            "target": "kitingwa (Taylor 1891 -ngwa)",
            "source": "stool (possessive pronoun of alienation = -a wat'u)",
            "pronunciation": "sho-kangwa / jembengwa / ki-tingwa"
          },
          {
            "target": "Kinyume (Steere 1894 Appendix I, pp. 425–426)",
            "source": "Syllable-inversion wordplay written out by Johari in Merima dialect",
            "pronunciation": "kinyu-me"
          },
          {
            "target": "Kitendawili! — Tega!",
            "source": "A riddle! — Set your trap! (Riddle opening formula)",
            "pronunciation": "ki-tenda-wi-li — te-ga"
          },
          {
            "target": "Nyumba yangu kubwa, haina mlango. — Yai.",
            "source": "My house is large, it has no door. — An egg.",
            "pronunciation": "nyumba yangu kubwa hai-na mlango — yai"
          },
          {
            "target": "Kuku wangu akazalia miibani. — Nanasi.",
            "source": "My hen has laid among thorns. — A pineapple.",
            "pronunciation": "ku-ku wangu a-ka-za-lia mii-ba-ni — na-na-si"
          }
        ],
        "sentences": [
          {
            "target": "Watu wote wanapendana na kusaidiana.",
            "source": "All the people love one another and help one another."
          },
          {
            "target": "Mzee alitaja kufunga → kufungia → kufungua → kufunguka nyumbani.",
            "source": "The elder mentioned to fasten at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kupenda\" in Kiswahili?",
            "correctAnswer": "to love",
            "options": [
              "to fasten",
              "to love",
              "to break",
              "someone else's axe"
            ],
            "hint": "Madan (1903) Simple, Applied, Causative, & Reciprocal stems",
            "acceptedAnswers": [
              "to love → love for/by → please (cause to love) → love each other",
              "to love"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kufunga\" in Kiswahili?",
            "correctAnswer": "to fasten",
            "options": [
              "to break",
              "someone else's axe",
              "to love",
              "to fasten"
            ],
            "hint": "Madan (1903) Reversive -ua & Stative -uka",
            "acceptedAnswers": [
              "to fasten/shut → fasten for/with → unfasten (reversive) → become unfastened",
              "to fasten"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kuvunja\" in Kiswahili?",
            "correctAnswer": "to break",
            "options": [
              "someone else's axe",
              "to love",
              "to break",
              "to fasten"
            ],
            "hint": "Madan (1903) Neuter/Stative -ika",
            "acceptedAnswers": [
              "to break (trans.) → to be broken / breakable (stative)",
              "to break"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"to break (trans.) → to be broken / breakable (stative)\" in Kiswahili?",
            "correctAnswer": "kuvunja",
            "options": [
              "kuvunja",
              "kupenda",
              "kufunga",
              "shokangwa"
            ],
            "hint": "koo-voon-jah / koo-voon-jee-kah",
            "acceptedAnswers": [
              "kuvunja → kuvunjika",
              "kuvunja"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"someone else's axe\" in Kiswahili?",
            "correctAnswer": "shokangwa",
            "options": [
              "kupenda",
              "kufunga",
              "shokangwa",
              "kuvunja"
            ],
            "hint": "Starts with \"sh…\" (9 letters)",
            "acceptedAnswers": [
              "shokangwa / jembengwa / kitingwa (Taylor 1891 -ngwa)",
              "shokangwa"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "kupenda → kupendea → kupendeza → kupendana: to love → love for/by → please (cause to love) → love each other",
            "pairs": [
              {
                "left": "kupenda → kupendea → kupendeza → kupendana",
                "right": "to love → love for/by → please (cause to love) → love each other"
              },
              {
                "left": "kuvunja → kuvunjika",
                "right": "to break (trans.) → to be broken / breakable (stative)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-3",
    "unitNumber": 3,
    "title": "Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Users",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-family-kinship-kinship-elders-3",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "mfalme (pl. wafalme)",
            "source": "King",
            "pronunciation": "mfalme / jumbe / sulta-ni"
          },
          {
            "target": "jumbe",
            "source": "Chief",
            "pronunciation": "mfalme / jumbe / sulta-ni"
          },
          {
            "target": "mtu",
            "source": "Man",
            "pronunciation": "mtu"
          },
          {
            "target": "mwana, mtoto, (mume)",
            "source": "Son",
            "pronunciation": "mwana"
          },
          {
            "target": "kijana",
            "source": "Girl",
            "pronunciation": "kijana"
          },
          {
            "target": "Hujambo / Jambo (pl. Hamjambo)",
            "source": "Hello",
            "pronunciation": "hujambo"
          },
          {
            "target": "hirim",
            "source": "boy (circumcised)",
            "pronunciation": "hi-rim"
          },
          {
            "target": "ndugu",
            "source": "brother",
            "pronunciation": "ndu-gu"
          },
          {
            "target": "shemegi",
            "source": "brother in law",
            "pronunciation": "she-me-gi"
          },
          {
            "target": "mfalme",
            "source": "chief",
            "pronunciation": "mfalme"
          }
        ],
        "sentences": [
          {
            "target": "mfalme — mtu, pl. watu",
            "source": "King — Man."
          },
          {
            "target": "mwana, mtoto, — kijana, pl. vijana",
            "source": "Son — Girl."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mfalme\" mean in English?",
            "correctAnswer": "King",
            "options": [
              "Man",
              "Son",
              "Girl",
              "King"
            ],
            "hint": "Core vocabulary in Kinship Terms, Elders & Household Roles",
            "acceptedAnswers": [
              "King / Chief",
              "King"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Man\"",
            "correctAnswer": "mtu, pl. watu",
            "acceptedAnswers": [
              "mtu, pl. watu",
              "mtu, pl. watu"
            ],
            "hint": "Starts with \"mt\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mwana, mtoto,\"",
            "correctAnswer": "Son",
            "acceptedAnswers": [
              "Son",
              "Son"
            ],
            "hint": "Review Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Kinship Terms, Elders & Household Roles with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mfalme",
                "right": "King"
              },
              {
                "left": "mtu, pl. watu",
                "right": "Man"
              },
              {
                "left": "mwana, mtoto,",
                "right": "Son"
              },
              {
                "left": "kijana, pl. vijana",
                "right": "Girl"
              },
              {
                "left": "kijana, pl. vijana",
                "right": "boy"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-family-kinship-clans-community-3",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "mtoto",
            "source": "child",
            "pronunciation": "mto-to"
          },
          {
            "target": "kutambaa",
            "source": "crawl (a man)",
            "pronunciation": "ku-tambaa"
          },
          {
            "target": "mzee",
            "source": "elder",
            "pronunciation": "mzee"
          },
          {
            "target": "baba",
            "source": "father",
            "pronunciation": "ba-ba"
          },
          {
            "target": "mkwe",
            "source": "father-in-law",
            "pronunciation": "mkwe"
          },
          {
            "target": "mume",
            "source": "husband",
            "pronunciation": "mu-me"
          },
          {
            "target": "mtu",
            "source": "man",
            "pronunciation": "mtu"
          },
          {
            "target": "mganga",
            "source": "medicine man",
            "pronunciation": "mganga"
          },
          {
            "target": "mwana, mtoto, (mume)",
            "source": "Son",
            "pronunciation": "mwa-na mto-to"
          }
        ],
        "sentences": [
          {
            "target": "mtoto, pl. watoto — kutambaa",
            "source": "child — crawl."
          },
          {
            "target": "mzee, pl. wazee — baba",
            "source": "elder — father."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mtoto, pl. watoto\" mean in English?",
            "correctAnswer": "child",
            "options": [
              "crawl",
              "elder",
              "father",
              "child"
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"crawl (a man)\"",
            "correctAnswer": "kutambaa",
            "acceptedAnswers": [
              "kutambaa",
              "kutambaa"
            ],
            "hint": "Starts with \"ku\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mzee, pl. wazee\"",
            "correctAnswer": "elder",
            "acceptedAnswers": [
              "elder",
              "elder"
            ],
            "hint": "Review Clans, Marriage & Community Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mtoto, pl. watoto",
                "right": "child"
              },
              {
                "left": "kutambaa",
                "right": "crawl"
              },
              {
                "left": "mzee, pl. wazee",
                "right": "elder"
              },
              {
                "left": "baba",
                "right": "father"
              },
              {
                "left": "mkwe, pl. wakwe",
                "right": "father-in-law"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-4",
    "unitNumber": 4,
    "title": "Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Scale",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-numbers-measures-cardinals-ordinals-4",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "-ote",
            "source": "all",
            "pronunciation": "ote"
          },
          {
            "target": "sisi sote",
            "source": "all of us",
            "pronunciation": "si-si so-te"
          },
          {
            "target": "moja",
            "source": "One",
            "pronunciation": "moja"
          },
          {
            "target": "sita",
            "source": "Six",
            "pronunciation": "sita"
          },
          {
            "target": "wote wawili",
            "source": "both",
            "pronunciation": "wo-te wa-wi-li"
          },
          {
            "target": "kuhesabu",
            "source": "count",
            "pronunciation": "ku-he-sa-bu"
          },
          {
            "target": "nane",
            "source": "eight",
            "pronunciation": "na-ne"
          },
          {
            "target": "mara nane",
            "source": "eight times",
            "pronunciation": "ma-ra na-ne"
          },
          {
            "target": "kumi na moja",
            "source": "eleven",
            "pronunciation": "ku-mi na mo-ja"
          }
        ],
        "sentences": [
          {
            "target": "-ote — sisi sote",
            "source": "all — all of us."
          },
          {
            "target": "moja — sita",
            "source": "One — Six."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"-ote\" mean in English?",
            "correctAnswer": "all",
            "options": [
              "all",
              "all of us",
              "One",
              "Six"
            ],
            "hint": "Core vocabulary in Cardinal & Ordinal Numerals"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"all of us\"",
            "correctAnswer": "sisi sote",
            "acceptedAnswers": [
              "sisi sote",
              "sisi sote"
            ],
            "hint": "Starts with \"si\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"moja\"",
            "correctAnswer": "One",
            "acceptedAnswers": [
              "One",
              "One"
            ],
            "hint": "Review Cardinal & Ordinal Numerals"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Cardinal & Ordinal Numerals with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "-ote",
                "right": "all"
              },
              {
                "left": "sisi sote",
                "right": "all of us"
              },
              {
                "left": "moja",
                "right": "One"
              },
              {
                "left": "sita",
                "right": "Six"
              },
              {
                "left": "wote wawili",
                "right": "both"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-numbers-measures-trade-measures-4",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "hamsini",
            "source": "fifty",
            "pronunciation": "hamsi-ni"
          },
          {
            "target": "kwanza",
            "source": "first",
            "pronunciation": "kwanza"
          },
          {
            "target": "tano",
            "source": "five",
            "pronunciation": "ta-no"
          },
          {
            "target": "mara tano",
            "source": "five times",
            "pronunciation": "ma-ra ta-no"
          },
          {
            "target": "arobaini",
            "source": "forty",
            "pronunciation": "a-ro-bai-ni"
          },
          {
            "target": "'nne",
            "source": "four",
            "pronunciation": "'nne"
          },
          {
            "target": "mara 'nne",
            "source": "four times",
            "pronunciation": "ma-ra 'nne"
          },
          {
            "target": "nusu",
            "source": "half",
            "pronunciation": "nu-su"
          },
          {
            "target": "ngapi",
            "source": "how many",
            "pronunciation": "nga-pi"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja kwanza nyumbani.",
            "source": "The elder mentioned first at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"hamsini\" in Kiswahili?",
            "correctAnswer": "fifty",
            "options": [
              "first",
              "five",
              "five times",
              "fifty"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kwanza\" in Kiswahili?",
            "correctAnswer": "first",
            "options": [
              "five",
              "five times",
              "first",
              "fifty"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"tano\" in Kiswahili?",
            "correctAnswer": "five",
            "options": [
              "five times",
              "fifty",
              "first",
              "five"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"five\" in Kiswahili?",
            "correctAnswer": "tano",
            "options": [
              "hamsini",
              "kwanza",
              "mara tano",
              "tano"
            ],
            "hint": "Starts with \"ta…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"five times\" in Kiswahili?",
            "correctAnswer": "mara tano",
            "options": [
              "hamsini",
              "kwanza",
              "mara tano",
              "tano"
            ],
            "hint": "Starts with \"ma…\" (9 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "hamsini: fifty",
            "pairs": [
              {
                "left": "hamsini",
                "right": "fifty"
              },
              {
                "left": "kwanza",
                "right": "first"
              },
              {
                "left": "tano",
                "right": "five"
              },
              {
                "left": "mara tano",
                "right": "five times"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"forty\": ___",
            "correctAnswer": "arobaini",
            "options": [
              "arobaini",
              "hamsini",
              "kwanza",
              "tano"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-5",
    "unitNumber": 5,
    "title": "Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Tractor",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-food-agriculture-staple-foods-cookery-5",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "ugali",
            "source": "Porridge",
            "pronunciation": "u-ga-li / uji / si-ma"
          },
          {
            "target": "uji",
            "source": "Ugali",
            "pronunciation": "u-ga-li / uji / si-ma"
          },
          {
            "target": "ndizi",
            "source": "banana",
            "pronunciation": "ndi-zi"
          },
          {
            "target": "kuzaa",
            "source": "bear fruit (to)",
            "pronunciation": "ku-zaa"
          },
          {
            "target": "tembo",
            "source": "beer (native)",
            "pronunciation": "tembo"
          },
          {
            "target": "-chungu",
            "source": "bitter",
            "pronunciation": "chungu"
          },
          {
            "target": "siagi",
            "source": "butter",
            "pronunciation": "sia-gi"
          },
          {
            "target": "samli",
            "source": "butter (clarified)",
            "pronunciation": "samli"
          },
          {
            "target": "mtindi",
            "source": "butter milk",
            "pronunciation": "mtindi"
          },
          {
            "target": "matama",
            "source": "caffre corn",
            "pronunciation": "ma-ta-ma"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja ndizi nyumbani.",
            "source": "The elder mentioned banana at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ugali\" in Kiswahili?",
            "correctAnswer": "Porridge",
            "options": [
              "Porridge",
              "banana",
              "bear fruit",
              "beer"
            ],
            "hint": "Krapf 1882 & Madan 1903",
            "acceptedAnswers": [
              "Porridge / Ugali",
              "Porridge"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ndizi\" in Kiswahili?",
            "correctAnswer": "banana",
            "options": [
              "bear fruit",
              "beer",
              "banana",
              "Porridge"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kuzaa\" in Kiswahili?",
            "correctAnswer": "bear fruit",
            "options": [
              "beer",
              "Porridge",
              "bear fruit",
              "banana"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
            "acceptedAnswers": [
              "bear fruit (to)",
              "bear fruit"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"bear fruit (to)\" in Kiswahili?",
            "correctAnswer": "kuzaa",
            "options": [
              "ugali",
              "ndizi",
              "tembo",
              "kuzaa"
            ],
            "hint": "Starts with \"ku…\" (5 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"beer (native)\" in Kiswahili?",
            "correctAnswer": "tembo",
            "options": [
              "ugali",
              "tembo",
              "ndizi",
              "kuzaa"
            ],
            "hint": "Starts with \"te…\" (5 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "ugali / uji / sima: Porridge / Ugali",
            "pairs": [
              {
                "left": "ugali / uji / sima",
                "right": "Porridge / Ugali"
              },
              {
                "left": "ndizi",
                "right": "banana"
              },
              {
                "left": "kuzaa",
                "right": "bear fruit (to)"
              },
              {
                "left": "tembo",
                "right": "beer (native)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"bitter\": ___",
            "correctAnswer": "-chungu",
            "options": [
              "-chungu",
              "ugali",
              "ndizi",
              "kuzaa"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          }
        ]
      },
      {
        "id": "swahili-food-agriculture-crops-livestock-5",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "mahogo",
            "source": "cassava",
            "pronunciation": "ma-ho-go"
          },
          {
            "target": "mbarika",
            "source": "castor-oil tree",
            "pronunciation": "mba-ri-ka"
          },
          {
            "target": "kutafuna",
            "source": "chew (tobacco)",
            "pronunciation": "ku-ta-fu-na"
          },
          {
            "target": "kupika",
            "source": "cook",
            "pronunciation": "ku-pi-ka"
          },
          {
            "target": "kunwa",
            "source": "drink",
            "pronunciation": "kunwa"
          },
          {
            "target": "kula",
            "source": "eat",
            "pronunciation": "ku-la"
          },
          {
            "target": "yayi",
            "source": "egg",
            "pronunciation": "ya-yi"
          },
          {
            "target": "mafuta",
            "source": "Oil",
            "pronunciation": "ma-fu-ta"
          },
          {
            "target": "-bichi",
            "source": "Raw",
            "pronunciation": "bichi"
          }
        ],
        "sentences": [
          {
            "target": "mahogo, pl. hogo — mbarika",
            "source": "cassava — castor-oil tree."
          },
          {
            "target": "kutafuna — kupika",
            "source": "chew — cook."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mahogo, pl. hogo\" mean in English?",
            "correctAnswer": "cassava",
            "options": [
              "cassava",
              "castor-oil tree",
              "chew",
              "cook"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"castor-oil tree\"",
            "correctAnswer": "mbarika",
            "acceptedAnswers": [
              "mbarika",
              "mbarika"
            ],
            "hint": "Starts with \"mb\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kutafuna\"",
            "correctAnswer": "chew",
            "acceptedAnswers": [
              "chew (tobacco)",
              "chew"
            ],
            "hint": "Review Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mahogo, pl. hogo",
                "right": "cassava"
              },
              {
                "left": "mbarika",
                "right": "castor-oil tree"
              },
              {
                "left": "kutafuna",
                "right": "chew"
              },
              {
                "left": "kupika",
                "right": "cook"
              },
              {
                "left": "kunwa",
                "right": "drink"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-6",
    "unitNumber": 6,
    "title": "Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "PawPrint",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-nature-wildlife-land-sky-water-6",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "fisi",
            "source": "Hyena",
            "pronunciation": "fi-si"
          },
          {
            "target": "popo",
            "source": "Bat",
            "pronunciation": "popo"
          },
          {
            "target": "ngwiro",
            "source": "ant (large black)",
            "pronunciation": "ngwi-ro"
          },
          {
            "target": "chungu",
            "source": "ant (small black)",
            "pronunciation": "chungu"
          },
          {
            "target": "siafu",
            "source": "ant (red)",
            "pronunciation": "sia-fu"
          },
          {
            "target": "mchwa",
            "source": "ant (white)",
            "pronunciation": "mchwa"
          },
          {
            "target": "swarra",
            "source": "antelope",
            "pronunciation": "swarra"
          },
          {
            "target": "jifu",
            "source": "ashes",
            "pronunciation": "ji-fu"
          },
          {
            "target": "ng'ombe",
            "source": "Ox",
            "pronunciation": "ng'omb-e"
          }
        ],
        "sentences": [
          {
            "target": "fisi — popo",
            "source": "Hyena — Bat."
          },
          {
            "target": "ngwiro — chungu",
            "source": "ant — ant."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"fisi\" mean in English?",
            "correctAnswer": "Hyena",
            "options": [
              "Bat",
              "ant",
              "Hyena",
              "antelope"
            ],
            "hint": "Core vocabulary in Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Bat\"",
            "correctAnswer": "popo",
            "acceptedAnswers": [
              "popo",
              "popo"
            ],
            "hint": "Starts with \"po\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ngwiro\"",
            "correctAnswer": "ant",
            "acceptedAnswers": [
              "ant (large black)",
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
                "left": "fisi",
                "right": "Hyena"
              },
              {
                "left": "popo",
                "right": "Bat"
              },
              {
                "left": "ngwiro",
                "right": "ant"
              },
              {
                "left": "chungu",
                "right": "ant"
              },
              {
                "left": "siafu",
                "right": "ant"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-nature-wildlife-wildlife-flora-6",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "nyani",
            "source": "baboon",
            "pronunciation": "nya-ni"
          },
          {
            "target": "mbuyu",
            "source": "baobab tree",
            "pronunciation": "mbu-yu"
          },
          {
            "target": "kulia",
            "source": "bark",
            "pronunciation": "ku-lia"
          },
          {
            "target": "ganda (soft), gome (hard)",
            "source": "bark (of tree)",
            "pronunciation": "ganda go-me"
          },
          {
            "target": "baazi",
            "source": "beans (tree)",
            "pronunciation": "baa-zi"
          },
          {
            "target": "nyuki",
            "source": "bee",
            "pronunciation": "nyu-ki"
          },
          {
            "target": "kivumanzi",
            "source": "bell (cow)",
            "pronunciation": "ki-vu-manzi"
          },
          {
            "target": "hassi wa gnombe gnombe múme",
            "source": "Ox",
            "pronunciation": "hassi wa gnombe gnombe mume"
          },
          {
            "target": "paka",
            "source": "Cat",
            "pronunciation": "pa-ka"
          }
        ],
        "sentences": [
          {
            "target": "nyani — mbuyu, pl. mibuyu",
            "source": "baboon — baobab tree."
          },
          {
            "target": "kulia — ganda, gome",
            "source": "bark — bark."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"nyani\" mean in English?",
            "correctAnswer": "baboon",
            "options": [
              "baboon",
              "baobab tree",
              "bark",
              "beans"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"baobab tree\"",
            "correctAnswer": "mbuyu, pl. mibuyu",
            "acceptedAnswers": [
              "mbuyu, pl. mibuyu",
              "mbuyu, pl. mibuyu"
            ],
            "hint": "Starts with \"mb\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kulia\"",
            "correctAnswer": "bark",
            "acceptedAnswers": [
              "bark",
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
                "left": "nyani",
                "right": "baboon"
              },
              {
                "left": "mbuyu, pl. mibuyu",
                "right": "baobab tree"
              },
              {
                "left": "kulia",
                "right": "bark"
              },
              {
                "left": "ganda, gome",
                "right": "bark"
              },
              {
                "left": "baazi",
                "right": "beans"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-7",
    "unitNumber": 7,
    "title": "The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "User",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-body-health-anatomy-senses-7",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "maumivu",
            "source": "Pain",
            "pronunciation": "mau-mi-vu / uchungu"
          },
          {
            "target": "uchungu",
            "source": "Ache",
            "pronunciation": "mau-mi-vu / uchungu"
          },
          {
            "target": "ugonjwa",
            "source": "Sickness",
            "pronunciation": "u-gonjwa / ma-radhi"
          },
          {
            "target": "maradhi",
            "source": "Illness",
            "pronunciation": "u-gonjwa / ma-radhi"
          },
          {
            "target": "dawa",
            "source": "Medicine / Remedy",
            "pronunciation": "da-wa"
          },
          {
            "target": "mganga (pl. waganga)",
            "source": "Healer",
            "pronunciation": "mganga / ta-bi-bu"
          },
          {
            "target": "tabibu",
            "source": "Physician",
            "pronunciation": "mganga / ta-bi-bu"
          },
          {
            "target": "msaada (Nisaidie! = Help me!)",
            "source": "Help / Assistance",
            "pronunciation": "msaa-da"
          },
          {
            "target": "hatari",
            "source": "Danger / Peril",
            "pronunciation": "ha-ta-ri"
          },
          {
            "target": "jicho",
            "source": "Eye",
            "pronunciation": "jicho"
          },
          {
            "target": "mguu",
            "source": "Leg",
            "pronunciation": "mguu"
          },
          {
            "target": "sikio",
            "source": "Ear",
            "pronunciation": "sikio"
          }
        ],
        "sentences": [
          {
            "target": "maumivu — ugonjwa",
            "source": "Pain — Sickness."
          },
          {
            "target": "dawa — mganga",
            "source": "Medicine — Healer."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"maumivu\" mean in English?",
            "correctAnswer": "Pain",
            "options": [
              "Pain",
              "Sickness",
              "Medicine",
              "Healer"
            ],
            "hint": "Core vocabulary in Parts of the Body & Physical Senses",
            "acceptedAnswers": [
              "Pain / Ache",
              "Pain"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Sickness / Illness\"",
            "correctAnswer": "ugonjwa",
            "acceptedAnswers": [
              "ugonjwa / maradhi",
              "ugonjwa"
            ],
            "hint": "Starts with \"ug\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"dawa\"",
            "correctAnswer": "Medicine",
            "acceptedAnswers": [
              "Medicine / Remedy",
              "Medicine"
            ],
            "hint": "Review Parts of the Body & Physical Senses"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Parts of the Body & Physical Senses with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "maumivu",
                "right": "Pain"
              },
              {
                "left": "ugonjwa",
                "right": "Sickness"
              },
              {
                "left": "dawa",
                "right": "Medicine"
              },
              {
                "left": "mganga",
                "right": "Healer"
              },
              {
                "left": "msaada",
                "right": "Help"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-body-health-healing-safety-7",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "tumbo, plur. ma",
            "source": "Bowels",
            "pronunciation": "tumbo"
          },
          {
            "target": "fa",
            "source": "become Dead",
            "pronunciation": "fa"
          },
          {
            "target": "amekufa",
            "source": "He is dead",
            "pronunciation": "a-me-ku-fa"
          },
          {
            "target": "jicho",
            "source": "Eye",
            "pronunciation": "jicho"
          },
          {
            "target": "mguu",
            "source": "Leg",
            "pronunciation": "mguu"
          },
          {
            "target": "ubavu",
            "source": "Rib",
            "pronunciation": "ubavu"
          },
          {
            "target": "kidole",
            "source": "Toe",
            "pronunciation": "kidole"
          },
          {
            "target": "sikio (pl. masikio)",
            "source": "Ear",
            "pronunciation": "sikio"
          },
          {
            "target": "mkono",
            "source": "Arm",
            "pronunciation": "mko-no"
          }
        ],
        "sentences": [
          {
            "target": "tumbo, plur. ma- — fa",
            "source": "Bowels — become Dead."
          },
          {
            "target": "amekufa — jicho, pl. macho",
            "source": "He is dead — Eye."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"tumbo, plur. ma-\" mean in English?",
            "correctAnswer": "Bowels",
            "options": [
              "become Dead",
              "He is dead",
              "Eye",
              "Bowels"
            ],
            "hint": "Core vocabulary in Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"become Dead\"",
            "correctAnswer": "fa",
            "acceptedAnswers": [
              "fa",
              "fa"
            ],
            "hint": "Starts with \"fa\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"amekufa\"",
            "correctAnswer": "He is dead",
            "acceptedAnswers": [
              "He is dead",
              "He is dead"
            ],
            "hint": "Review Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Health, Traditional Medicine & Emergency Terms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "tumbo, plur. ma-",
                "right": "Bowels"
              },
              {
                "left": "fa",
                "right": "become Dead"
              },
              {
                "left": "amekufa",
                "right": "He is dead"
              },
              {
                "left": "jicho, pl. macho",
                "right": "Eye"
              },
              {
                "left": "mguu, pl. miguu",
                "right": "Leg"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-8",
    "unitNumber": 8,
    "title": "Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Compass",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-verbs-grammar-action-verbs-8",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "kusema / kunena",
            "source": "Speak",
            "pronunciation": "ku-se-ma / ku-ne-na"
          },
          {
            "target": "kulala (-lala)",
            "source": "Sleep",
            "pronunciation": "ku-la-la"
          },
          {
            "target": "kwenda (-enda)",
            "source": "Go",
            "pronunciation": "kwenda"
          },
          {
            "target": "tenda, fanya, (be of use) faa",
            "source": "Do",
            "pronunciation": "tend-a fany-a"
          },
          {
            "target": "kuuliza",
            "source": "Ask",
            "pronunciation": "kuu-li-za"
          },
          {
            "target": "kuomba",
            "source": "Beg",
            "pronunciation": "kuomba"
          },
          {
            "target": "lia, piga kelele",
            "source": "Cry",
            "pronunciation": "lia pi-ga ke-le-le"
          },
          {
            "target": "chimba",
            "source": "Dig",
            "pronunciation": "chimb-a"
          },
          {
            "target": "piga, chapa, menya, (with spear, arrow, etc.) fuma",
            "source": "Hit",
            "pronunciation": "pi-ga cha-pa meny-a"
          }
        ],
        "sentences": [
          {
            "target": "kusema — kulala",
            "source": "Speak — Sleep."
          },
          {
            "target": "kwenda — tenda, fanya, faa",
            "source": "Go — Do."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kusema\" mean in English?",
            "correctAnswer": "Speak",
            "options": [
              "Speak",
              "Sleep",
              "Go",
              "Do"
            ],
            "hint": "Core vocabulary in Essential Action & Motion Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Sleep\"",
            "correctAnswer": "kulala",
            "acceptedAnswers": [
              "kulala (-lala)",
              "kulala"
            ],
            "hint": "Starts with \"ku\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kwenda\"",
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
                "left": "kusema",
                "right": "Speak"
              },
              {
                "left": "kulala",
                "right": "Sleep"
              },
              {
                "left": "kwenda",
                "right": "Go"
              },
              {
                "left": "tenda, fanya, faa",
                "right": "Do"
              },
              {
                "left": "kuuliza",
                "right": "Ask"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-verbs-grammar-verbal-derivatives-8",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "tia",
            "source": "Put",
            "pronunciation": "tia"
          },
          {
            "target": "oza",
            "source": "Rot",
            "pronunciation": "o-za"
          },
          {
            "target": "sugua",
            "source": "Rub",
            "pronunciation": "su-gua"
          },
          {
            "target": "piga mbio, kimbia, (run away, of a slave) toroka",
            "source": "Run",
            "pronunciation": "pi-ga mbio kimb-ia"
          },
          {
            "target": "sema",
            "source": "Say",
            "pronunciation": "se-ma"
          },
          {
            "target": "ona, tazama",
            "source": "See",
            "pronunciation": "o-na ta-za-ma"
          },
          {
            "target": "weka, tia, (of the sun) chwa",
            "source": "Set",
            "pronunciation": "we-ka tia"
          },
          {
            "target": "shona",
            "source": "Sew",
            "pronunciation": "sho-na"
          },
          {
            "target": "panda",
            "source": "Sow",
            "pronunciation": "pand-a"
          }
        ],
        "sentences": [
          {
            "target": "tia — oza",
            "source": "Put — Rot."
          },
          {
            "target": "sugua — piga mbio, kimbia, toroka",
            "source": "Rub — Run."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"tia\" mean in English?",
            "correctAnswer": "Put",
            "options": [
              "Rot",
              "Rub",
              "Run",
              "Put"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Rot\"",
            "correctAnswer": "oza",
            "acceptedAnswers": [
              "oza",
              "oza"
            ],
            "hint": "Starts with \"oz\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"sugua\"",
            "correctAnswer": "Rub",
            "acceptedAnswers": [
              "Rub",
              "Rub"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "tia",
                "right": "Put"
              },
              {
                "left": "oza",
                "right": "Rot"
              },
              {
                "left": "sugua",
                "right": "Rub"
              },
              {
                "left": "piga mbio, kimbia, toroka",
                "right": "Run"
              },
              {
                "left": "sema",
                "right": "Say"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-9",
    "unitNumber": 9,
    "title": "Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Map",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-time-calendar-seasons-months-9",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "mwongo (pl. miongo)",
            "source": "Ten-Day Agricultural Decade",
            "pronunciation": "mwongo"
          },
          {
            "target": "Siku ya Mwaka (Nairuz)",
            "source": "Solar New Year Festival",
            "pronunciation": "si-ku ya mwa-ka"
          },
          {
            "target": "leo",
            "source": "Today",
            "pronunciation": "leo / ja-na / kesho"
          },
          {
            "target": "jana",
            "source": "Yesterday",
            "pronunciation": "leo / ja-na / kesho"
          },
          {
            "target": "kesho",
            "source": "Tomorrow",
            "pronunciation": "leo / ja-na / kesho"
          },
          {
            "target": "jioni",
            "source": "Evening",
            "pronunciation": "jio-ni / magha-ri-bi"
          },
          {
            "target": "magharibi",
            "source": "Sunset (6 p.m.)",
            "pronunciation": "jio-ni / magha-ri-bi"
          },
          {
            "target": "alasiri",
            "source": "Late Afternoon (3:30 p.m.)",
            "pronunciation": "a-la-si-ri"
          },
          {
            "target": "adhuhuri (mchana)",
            "source": "Noon / Midday",
            "pronunciation": "adhu-hu-ri"
          },
          {
            "target": "asubuhi",
            "source": "Morning (6 a.m. – noon)",
            "pronunciation": "a-su-bu-hi"
          },
          {
            "target": "alfajiri",
            "source": "Dawn",
            "pronunciation": "alfa-ji-ri / ma-pamba-zu-ko"
          },
          {
            "target": "mapambazuko",
            "source": "Daybreak",
            "pronunciation": "alfa-ji-ri / ma-pamba-zu-ko"
          },
          {
            "target": "síku",
            "source": "Day",
            "pronunciation": "siku"
          }
        ],
        "sentences": [
          {
            "target": "mwongo — Siku ya Mwaka",
            "source": "Ten-Day Agricultural Decade — Solar New Year Festival."
          },
          {
            "target": "leo — jioni",
            "source": "Today — Evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mwongo\" mean in English?",
            "correctAnswer": "Ten-Day Agricultural Decade",
            "options": [
              "Solar New Year Festival",
              "Today",
              "Ten-Day Agricultural Decade",
              "Evening"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Solar New Year Festival\"",
            "correctAnswer": "Siku ya Mwaka",
            "acceptedAnswers": [
              "Siku ya Mwaka (Nairuz)",
              "Siku ya Mwaka"
            ],
            "hint": "Starts with \"Si\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"leo\"",
            "correctAnswer": "Today",
            "acceptedAnswers": [
              "Today / Yesterday / Tomorrow",
              "Today"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mwongo",
                "right": "Ten-Day Agricultural Decade"
              },
              {
                "left": "Siku ya Mwaka",
                "right": "Solar New Year Festival"
              },
              {
                "left": "leo",
                "right": "Today"
              },
              {
                "left": "jioni",
                "right": "Evening"
              },
              {
                "left": "alasiri",
                "right": "Late Afternoon"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-time-calendar-journey-navigation-9",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "tangu siku kumi, leo siku kumi",
            "source": "Ten days ago",
            "pronunciation": "tangu si-ku ku-mi leo si-ku ku-mi"
          },
          {
            "target": "mchana kuchwa",
            "source": "All day",
            "pronunciation": "mcha-na kuchwa"
          },
          {
            "target": "Juma",
            "source": "Friday",
            "pronunciation": "ju-ma"
          },
          {
            "target": "baadaye, halafu yake",
            "source": "At a future time",
            "pronunciation": "baa-da-ye ha-la-fu ya-ke"
          },
          {
            "target": "saa",
            "source": "Hour",
            "pronunciation": "saa"
          },
          {
            "target": "saa ngapi?",
            "source": "What is the hour?",
            "pronunciation": "saa nga-pi"
          },
          {
            "target": "sása",
            "source": "Now",
            "pronunciation": "sasa"
          },
          {
            "target": "Sīku",
            "source": "Day",
            "pronunciation": "siku m-tsana"
          },
          {
            "target": "kisha",
            "source": "Then",
            "pronunciation": "kish-a"
          }
        ],
        "sentences": [
          {
            "target": "tangu siku kumi, leo siku kumi — mchana kuchwa",
            "source": "Ten days ago — All day."
          },
          {
            "target": "Juma — baadaye, halafu yake",
            "source": "Friday — At a future time."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"tangu siku kumi, leo siku kumi\" mean in English?",
            "correctAnswer": "Ten days ago",
            "options": [
              "All day",
              "Friday",
              "At a future time",
              "Ten days ago"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"All day\"",
            "correctAnswer": "mchana kuchwa",
            "acceptedAnswers": [
              "mchana kuchwa",
              "mchana kuchwa"
            ],
            "hint": "Starts with \"mc\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Juma\"",
            "correctAnswer": "Friday",
            "acceptedAnswers": [
              "Friday",
              "Friday"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "tangu siku kumi, leo siku kumi",
                "right": "Ten days ago"
              },
              {
                "left": "mchana kuchwa",
                "right": "All day"
              },
              {
                "left": "Juma",
                "right": "Friday"
              },
              {
                "left": "baadaye, halafu yake",
                "right": "At a future time"
              },
              {
                "left": "saa",
                "right": "Hour"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-10",
    "unitNumber": 10,
    "title": "Conversational Phrases, Idioms & Daily Dialogue",
    "description": "Master conversational phrases, idioms & daily dialogue in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "MessageCircle",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-phrases-idioms-everyday-dialogue-10",
        "title": "Everyday Conversational Phrases & Questions",
        "icon": "CheckCircle2",
        "description": "Practice authentic questions, answers, and idiomatic expressions from historical phrasebooks.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "Hujambo / Jambo (pl. Hamjambo)",
            "source": "Hello",
            "pronunciation": "hoo-jahm-boh"
          },
          {
            "target": "amani",
            "source": "Peace",
            "pronunciation": "a-ma-ni"
          },
          {
            "target": "shukuru",
            "source": "Thank",
            "pronunciation": "shu-ku-ru"
          },
          {
            "target": "salimía; sálimu",
            "source": "Greet",
            "pronunciation": "salimia"
          },
          {
            "target": "báriki",
            "source": "Bless",
            "pronunciation": "bariki"
          },
          {
            "target": "kupendeza",
            "source": "Please",
            "pronunciation": "ku-pende-za"
          },
          {
            "target": "salimia",
            "source": "Salute",
            "pronunciation": "sa-li-mia"
          },
          {
            "target": "samehe, achilia",
            "source": "Pardon",
            "pronunciation": "samehe"
          },
          {
            "target": "Kwaheri (pl. Kwaherini)",
            "source": "Goodbye",
            "pronunciation": "kwaheri"
          }
        ],
        "sentences": [
          {
            "target": "Hujambo — amani",
            "source": "Hello — Peace."
          },
          {
            "target": "shukuru — salimía",
            "source": "Thank — Greet."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Hujambo\" mean in English?",
            "correctAnswer": "Hello",
            "options": [
              "Peace",
              "Hello",
              "Thank",
              "Greet"
            ],
            "hint": "Core vocabulary in Everyday Conversational Phrases & Questions"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Peace\"",
            "correctAnswer": "amani",
            "acceptedAnswers": [
              "amani",
              "amani"
            ],
            "hint": "Starts with \"am\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"shukuru\"",
            "correctAnswer": "Thank",
            "acceptedAnswers": [
              "Thank",
              "Thank"
            ],
            "hint": "Review Everyday Conversational Phrases & Questions"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Everyday Conversational Phrases & Questions with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Hujambo",
                "right": "Hello"
              },
              {
                "left": "amani",
                "right": "Peace"
              },
              {
                "left": "shukuru",
                "right": "Thank"
              },
              {
                "left": "salimía",
                "right": "Greet"
              },
              {
                "left": "báriki",
                "right": "Bless"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-phrases-idioms-courtesy-discourse-10",
        "title": "Hospitality, Requests & Social Discourse",
        "icon": "Handshake",
        "description": "Converse naturally in home, village, market, and travel settings.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "pendeza, furahisha",
            "source": "Please",
            "pronunciation": "pend-e-za fu-ra-hish-a"
          },
          {
            "target": "ata; ondoléa gofiría",
            "source": "Pardon",
            "pronunciation": "a-ta"
          },
          {
            "target": "Kwaheri (pl. Kwaherini)",
            "source": "Goodbye",
            "pronunciation": "kwah-heh-ree"
          },
          {
            "target": "Karibu (pl. Karibuni)",
            "source": "Welcome",
            "pronunciation": "kah-ree-boo"
          },
          {
            "target": "samehe, achilia",
            "source": "Forgive",
            "pronunciation": "sa-me-he ach-i-lia"
          },
          {
            "target": "kua hẹri ya kuonána",
            "source": "Farewell",
            "pronunciation": "kua heri ya kuonana"
          },
          {
            "target": "Asante (Asante sana)",
            "source": "Thank you",
            "pronunciation": "ah-sahn-teh sah-nah"
          },
          {
            "target": "kua heri",
            "source": "Farewell!",
            "pronunciation": "kua he-ri"
          },
          {
            "target": "kunrathi, nipe hisa yangu",
            "source": "Pardon me",
            "pronunciation": "kun-rath-i ni-pe hi-sa yang-u"
          }
        ],
        "sentences": [
          {
            "target": "pendeza, furahisha — ata",
            "source": "Please — Pardon."
          },
          {
            "target": "Kwaheri — Karibu",
            "source": "Goodbye — Welcome."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"pendeza, furahisha\" mean in English?",
            "correctAnswer": "Please",
            "options": [
              "Pardon",
              "Please",
              "Goodbye",
              "Welcome"
            ],
            "hint": "Core vocabulary in Hospitality, Requests & Social Discourse"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Pardon\"",
            "correctAnswer": "ata",
            "acceptedAnswers": [
              "ata; ondoléa gofiría",
              "ata"
            ],
            "hint": "Starts with \"at\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Kwaheri\"",
            "correctAnswer": "Goodbye",
            "acceptedAnswers": [
              "Goodbye",
              "Goodbye"
            ],
            "hint": "Review Hospitality, Requests & Social Discourse"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Hospitality, Requests & Social Discourse with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "pendeza, furahisha",
                "right": "Please"
              },
              {
                "left": "ata",
                "right": "Pardon"
              },
              {
                "left": "Kwaheri",
                "right": "Goodbye"
              },
              {
                "left": "Karibu",
                "right": "Welcome"
              },
              {
                "left": "samehe, achilia",
                "right": "Forgive"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-11",
    "unitNumber": 11,
    "title": "Classical Proverbs, Riddles & Ethnographic Heritage",
    "description": "Master classical proverbs, riddles & ethnographic heritage in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Globe",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-oral-wisdom-literature-proverbs-riddles-11",
        "title": "Traditional Proverbs, Riddles & Aphorisms",
        "icon": "Award",
        "description": "Study verbatim oral wisdom, riddles, and moral aphorisms from the historical collections.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "wingi, tele",
            "source": "Abundance",
            "pronunciation": "wingi te-le"
          },
          {
            "target": "talasimu, plur. ma",
            "source": "Amulet",
            "pronunciation": "ta-la-si-mu"
          },
          {
            "target": "malaika",
            "source": "Angel",
            "pronunciation": "ma-lai-ka"
          },
          {
            "target": "chakula cha assubuhi, cha amsha kinwa, kifungua kinwa",
            "source": "Breakfast",
            "pronunciation": "cha-ku-la cha assu-bu-hi cha amsha kinwa ki-fungua kinwa"
          },
          {
            "target": "(magic) talasimu, hirizi",
            "source": "Charm",
            "pronunciation": "ta-la-si-mu hi-ri-zi"
          },
          {
            "target": "kanisa, plur. ma",
            "source": "Church",
            "pronunciation": "ka-ni-sa"
          },
          {
            "target": "baraza",
            "source": "Council",
            "pronunciation": "ba-ra-za"
          },
          {
            "target": "shetani, plur. ma-, pepo mbaya",
            "source": "Demon",
            "pronunciation": "she-ta-ni"
          },
          {
            "target": "tia utumwani",
            "source": "Enslave",
            "pronunciation": "tia u-tumwa-ni"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja talasimu nyumbani.",
            "source": "The elder mentioned amulet at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"wingi, tele\" in Kiswahili?",
            "correctAnswer": "Abundance",
            "options": [
              "Amulet",
              "Angel",
              "Breakfast",
              "Abundance"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"talasimu, plur. ma-\" in Kiswahili?",
            "correctAnswer": "Amulet",
            "options": [
              "Amulet",
              "Angel",
              "Breakfast",
              "Abundance"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"malaika\" in Kiswahili?",
            "correctAnswer": "Angel",
            "options": [
              "Breakfast",
              "Abundance",
              "Amulet",
              "Angel"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Angel\" in Kiswahili?",
            "correctAnswer": "malaika",
            "options": [
              "wingi",
              "talasimu",
              "chakula cha assubuhi",
              "malaika"
            ],
            "hint": "Starts with \"ma…\" (7 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Breakfast\" in Kiswahili?",
            "correctAnswer": "chakula cha assubuhi",
            "options": [
              "chakula cha assubuhi",
              "wingi",
              "talasimu",
              "malaika"
            ],
            "hint": "Starts with \"ch…\" (20 letters)",
            "acceptedAnswers": [
              "chakula cha assubuhi, cha amsha kinwa, kifungua kinwa",
              "chakula cha assubuhi"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "wingi, tele: Abundance",
            "pairs": [
              {
                "left": "wingi, tele",
                "right": "Abundance"
              },
              {
                "left": "talasimu, plur. ma-",
                "right": "Amulet"
              },
              {
                "left": "malaika",
                "right": "Angel"
              },
              {
                "left": "chakula cha assubuhi, cha amsha kinwa, kifungua kinwa",
                "right": "Breakfast"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"Charm\": ___",
            "correctAnswer": "talasimu",
            "options": [
              "talasimu",
              "wingi",
              "malaika",
              "chakula cha assubuhi"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)",
            "acceptedAnswers": [
              "(magic) talasimu, hirizi",
              "talasimu"
            ]
          }
        ]
      },
      {
        "id": "swahili-oral-wisdom-literature-ethnographic-lexicon-11",
        "title": "Customary Law, Rituals & Historical Lexicon",
        "icon": "ShieldCheck",
        "description": "Master specialized cultural, legal, musical, and historical vocabulary.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "upesi, hima",
            "source": "Fast",
            "pronunciation": "u-pe-si hi-ma"
          },
          {
            "target": "funga, kaza",
            "source": "Fasten",
            "pronunciation": "funga ka-za"
          },
          {
            "target": "mjoli",
            "source": "Fellow-slave",
            "pronunciation": "mjo-li"
          },
          {
            "target": "kuzika, kuzikani",
            "source": "Funeral",
            "pronunciation": "ku-zi-ka ku-zi-ka-ni"
          },
          {
            "target": "makokoto",
            "source": "Gravel",
            "pronunciation": "ma-ko-ko-to"
          },
          {
            "target": "leso",
            "source": "Handkerchief",
            "pronunciation": "le-so"
          },
          {
            "target": "urithi",
            "source": "Inheritance",
            "pronunciation": "u-rithi"
          },
          {
            "target": "mchawi, mganga",
            "source": "Magician",
            "pronunciation": "mcha-wi mganga"
          },
          {
            "target": "(harm) mathara, uharabu, (cunning) hila, ujanja",
            "source": "Mischief",
            "pronunciation": "matha-ra u-ha-ra-bu hi-la u-janja"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja funga nyumbani.",
            "source": "The elder mentioned fasten at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"upesi, hima\" in Kiswahili?",
            "correctAnswer": "Fast",
            "options": [
              "Fasten",
              "Fellow-slave",
              "Fast",
              "Funeral"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (adv.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"funga, kaza\" in Kiswahili?",
            "correctAnswer": "Fasten",
            "options": [
              "Fasten",
              "Fellow-slave",
              "Funeral",
              "Fast"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (v.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mjoli\" in Kiswahili?",
            "correctAnswer": "Fellow-slave",
            "options": [
              "Fellow-slave",
              "Funeral",
              "Fast",
              "Fasten"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fellow-slave\" in Kiswahili?",
            "correctAnswer": "mjoli",
            "options": [
              "mjoli",
              "upesi",
              "funga",
              "kuzika"
            ],
            "hint": "Starts with \"mj…\" (5 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Funeral\" in Kiswahili?",
            "correctAnswer": "kuzika",
            "options": [
              "kuzika",
              "upesi",
              "funga",
              "mjoli"
            ],
            "hint": "Starts with \"ku…\" (6 letters)",
            "acceptedAnswers": [
              "kuzika, kuzikani",
              "kuzika"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "upesi, hima: Fast",
            "pairs": [
              {
                "left": "upesi, hima",
                "right": "Fast"
              },
              {
                "left": "funga, kaza",
                "right": "Fasten"
              },
              {
                "left": "mjoli",
                "right": "Fellow-slave"
              },
              {
                "left": "kuzika, kuzikani",
                "right": "Funeral"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"Gravel\": ___",
            "correctAnswer": "makokoto",
            "options": [
              "upesi",
              "makokoto",
              "funga",
              "mjoli"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-12",
    "unitNumber": 12,
    "title": "Extended Historical Lexicon I: Crafts, Tools & Architecture",
    "description": "Master extended historical lexicon i: crafts, tools & architecture in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Layers",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-advanced-corpus-1-crafts-metallurgy-12",
        "title": "Ironworking, Pottery, Basketry & Ornaments",
        "icon": "Amphora",
        "description": "Learn terms for traditional smithing, pottery, weaving, and personal ornamentation.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "moskiti",
            "source": "Mosque",
            "pronunciation": "moski-ti"
          },
          {
            "target": "bora, -a daraja kuu",
            "source": "Noble",
            "pronunciation": "bo-ra a da-ra-ja kuu"
          },
          {
            "target": "mtu mkubwa, jumbe",
            "source": "Nobleman",
            "pronunciation": "mtu mkubwa jumbe"
          },
          {
            "target": "omba, sali",
            "source": "Pray",
            "pronunciation": "omba sa-li"
          },
          {
            "target": "(ask) taka, (intercede) ombea",
            "source": "Pray",
            "pronunciation": "ta-ka ombea"
          },
          {
            "target": "dini",
            "source": "Religion",
            "pronunciation": "di-ni"
          },
          {
            "target": "thabihu, kafara, sadaka",
            "source": "Sacrifice",
            "pronunciation": "tha-bi-hu ka-fa-ra sa-da-ka"
          },
          {
            "target": "utumwa",
            "source": "Slavery",
            "pronunciation": "u-tumwa"
          },
          {
            "target": "pepo, jini, plur. ma",
            "source": "Spirit",
            "pronunciation": "pe-po ji-ni"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja bora nyumbani.",
            "source": "The elder mentioned noble at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"moskiti\" in Kiswahili?",
            "correctAnswer": "Mosque",
            "options": [
              "Mosque",
              "Noble",
              "Nobleman",
              "Pray"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"bora, -a daraja kuu\" in Kiswahili?",
            "correctAnswer": "Noble",
            "options": [
              "Nobleman",
              "Pray",
              "Mosque",
              "Noble"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (a.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mtu mkubwa, jumbe\" in Kiswahili?",
            "correctAnswer": "Nobleman",
            "options": [
              "Nobleman",
              "Pray",
              "Mosque",
              "Noble"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nobleman\" in Kiswahili?",
            "correctAnswer": "mtu mkubwa",
            "options": [
              "moskiti",
              "mtu mkubwa",
              "bora",
              "omba"
            ],
            "hint": "Starts with \"mt…\" (10 letters)",
            "acceptedAnswers": [
              "mtu mkubwa, jumbe",
              "mtu mkubwa"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Pray\" in Kiswahili?",
            "correctAnswer": "omba",
            "options": [
              "moskiti",
              "bora",
              "mtu mkubwa",
              "omba"
            ],
            "hint": "Starts with \"om…\" (4 letters)",
            "acceptedAnswers": [
              "omba, sali",
              "omba"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "moskiti: Mosque",
            "pairs": [
              {
                "left": "moskiti",
                "right": "Mosque"
              },
              {
                "left": "bora, -a daraja kuu",
                "right": "Noble"
              },
              {
                "left": "mtu mkubwa, jumbe",
                "right": "Nobleman"
              },
              {
                "left": "omba, sali",
                "right": "Pray"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-advanced-corpus-1-homestead-architecture-12",
        "title": "Homestead Layout, Building & Domestic Implements",
        "icon": "Home",
        "description": "Describe traditional house construction, hearthstones, granaries, and utensils.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "(liquor) mvinyo",
            "source": "Spirits",
            "pronunciation": "mvinyo"
          },
          {
            "target": "furahi, furahiwa moyo",
            "source": "be in good Spirits",
            "pronunciation": "fu-ra-hi fu-ra-hi-wa mo-yo"
          },
          {
            "target": "hadithi, habari, kisa, (lie) uwongo",
            "source": "Story",
            "pronunciation": "ha-dithi ha-ba-ri ki-sa u-wongo"
          },
          {
            "target": "sumulia hadithi",
            "source": "Tell a story",
            "pronunciation": "su-mu-lia ha-dithi"
          },
          {
            "target": "sultani, seyidi, bwana",
            "source": "Sultan",
            "pronunciation": "sulta-ni se-yi-di bwa-na"
          },
          {
            "target": "hadithi, kisa, habari",
            "source": "Tale",
            "pronunciation": "ha-dithi ki-sa ha-ba-ri"
          },
          {
            "target": "chongea",
            "source": "Tell tales",
            "pronunciation": "chongea"
          },
          {
            "target": "mtu gani wee?",
            "source": "Of what tribe are you?",
            "pronunciation": "mtu ga-ni wee"
          },
          {
            "target": "Sultani Rum",
            "source": "Sultan of Turkey",
            "pronunciation": "sulta-ni rum"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja furahi nyumbani.",
            "source": "The elder mentioned be in good spirits at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"(liquor) mvinyo\" in Kiswahili?",
            "correctAnswer": "Spirits",
            "options": [
              "Story",
              "Spirits",
              "Tell a story",
              "Sultan"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"furahi, furahiwa moyo\" in Kiswahili?",
            "correctAnswer": "be in good Spirits",
            "options": [
              "Tell a story",
              "Tell tales",
              "be in good Spirits",
              "Of what tribe are you?"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (v.)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "(liquor) mvinyo: Spirits",
            "pairs": [
              {
                "left": "(liquor) mvinyo",
                "right": "Spirits"
              },
              {
                "left": "furahi, furahiwa moyo",
                "right": "be in good Spirits"
              },
              {
                "left": "hadithi, habari, kisa, (lie) uwongo",
                "right": "Story"
              },
              {
                "left": "sumulia hadithi",
                "right": "Tell a story"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-13",
    "unitNumber": 13,
    "title": "Extended Historical Lexicon II: Governance, Law & Oral",
    "description": "Master extended historical lexicon ii: governance, law & oral narrative in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Crown",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-advanced-corpus-2-councils-justice-13",
        "title": "Elders' Councils, Oaths, Covenants & Customary Justice",
        "icon": "Handshake",
        "description": "Explore indigenous governance, peace ceremonies, and legal terminology.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "fungua",
            "source": "Unfasten",
            "pronunciation": "fungua"
          },
          {
            "target": "mtu gani yeye?",
            "source": "Of what tribe is he?",
            "pronunciation": "mtu ga-ni ye-ye"
          },
          {
            "target": "mke mchawi",
            "source": "Diviner",
            "pronunciation": "mke mcha-wi"
          },
          {
            "target": "soéṣa; tía áda",
            "source": "Accustom",
            "pronunciation": "soe-sa"
          },
          {
            "target": "fánia utáwi",
            "source": "Bewitch",
            "pronunciation": "fa-nia u-ta-wi"
          },
          {
            "target": "ada",
            "source": "Custom",
            "pronunciation": "ada"
          },
          {
            "target": "tésa kua ku rúka",
            "source": "Dance",
            "pronunciation": "te-sa kua ku ru-ka"
          },
          {
            "target": "ṣetáni",
            "source": "Devil",
            "pronunciation": "se-ta-ni"
          },
          {
            "target": "ngóma",
            "source": "Drum",
            "pronunciation": "ngo-ma"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja mtu gani yeye? nyumbani.",
            "source": "The elder mentioned of what tribe is he? at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"fungua\" in Kiswahili?",
            "correctAnswer": "Unfasten",
            "options": [
              "Diviner",
              "Unfasten",
              "Accustom",
              "Bewitch"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (v.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mtu gani yeye?\" in Kiswahili?",
            "correctAnswer": "Of what tribe is he?",
            "options": [
              "Unfasten",
              "Of what tribe is he?",
              "Diviner",
              "Accustom"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (under What?)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mke mchawi\" in Kiswahili?",
            "correctAnswer": "Diviner",
            "options": [
              "Diviner",
              "Accustom",
              "Unfasten",
              "Bewitch"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Diviner\" in Kiswahili?",
            "correctAnswer": "mke mchawi",
            "options": [
              "mke mchawi",
              "fungua",
              "mtu gani yeye?",
              "soéṣa"
            ],
            "hint": "Starts with \"mk…\" (10 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Accustom\" in Kiswahili?",
            "correctAnswer": "soéṣa",
            "options": [
              "soéṣa",
              "fungua",
              "mtu gani yeye?",
              "mke mchawi"
            ],
            "hint": "Starts with \"so…\" (5 letters)",
            "acceptedAnswers": [
              "soéṣa; tía áda",
              "soéṣa"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "fungua: Unfasten",
            "pairs": [
              {
                "left": "fungua",
                "right": "Unfasten"
              },
              {
                "left": "mtu gani yeye?",
                "right": "Of what tribe is he?"
              },
              {
                "left": "mke mchawi",
                "right": "Diviner"
              },
              {
                "left": "soéṣa; tía áda",
                "right": "Accustom"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"Bewitch\": ___",
            "correctAnswer": "fánia utáwi",
            "options": [
              "fungua",
              "fánia utáwi",
              "mtu gani yeye?",
              "mke mchawi"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli v. a.)"
          }
        ]
      },
      {
        "id": "swahili-advanced-corpus-2-folktale-narrative-13",
        "title": "Folktale Discourse, Poetic Registers & Narrative Style",
        "icon": "ScrollText",
        "description": "Read and analyze classical narrative vocabulary and dialectal registers.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "fúnga (sc. kánoa)",
            "source": "Fast",
            "pronunciation": "funga"
          },
          {
            "target": "nóna; wánda",
            "source": "To be fast",
            "pronunciation": "no-na"
          },
          {
            "target": "táric̣i; kissa",
            "source": "History",
            "pronunciation": "ta-rikhi"
          },
          {
            "target": "pémbe",
            "source": "Horn",
            "pronunciation": "pembe"
          },
          {
            "target": "salla",
            "source": "Prayer",
            "pronunciation": "salla"
          },
          {
            "target": "salli; omba",
            "source": "Pray",
            "pronunciation": "salli"
          },
          {
            "target": "kítjo ja Mungu",
            "source": "Religion",
            "pronunciation": "kitjo ja mungu"
          },
          {
            "target": "sádaka; kitíndo",
            "source": "Sacrifice",
            "pronunciation": "sa-da-ka"
          },
          {
            "target": "mtúma",
            "source": "Slave",
            "pronunciation": "mtu-ma"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja nóna nyumbani.",
            "source": "The elder mentioned fast at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"fúnga (sc. kánoa)\" in Kiswahili?",
            "correctAnswer": "Fast",
            "options": [
              "Fast",
              "History",
              "Horn",
              "To be fast"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli)",
            "acceptedAnswers": [
              "Fast, vn",
              "Fast"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nóna; wánda\" in Kiswahili?",
            "correctAnswer": "Fast",
            "options": [
              "History",
              "Horn",
              "Fast",
              "To be fast"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli)",
            "acceptedAnswers": [
              "Fast, adj. to be-",
              "Fast"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"táric̣i; kissa\" in Kiswahili?",
            "correctAnswer": "History",
            "options": [
              "History",
              "Horn",
              "Fast",
              "To be fast"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"History\" in Kiswahili?",
            "correctAnswer": "táric̣i",
            "options": [
              "fúnga",
              "táric̣i",
              "nóna",
              "pémbe"
            ],
            "hint": "Starts with \"tá…\" (7 letters)",
            "acceptedAnswers": [
              "táric̣i; kissa",
              "táric̣i"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Horn\" in Kiswahili?",
            "correctAnswer": "pémbe",
            "options": [
              "pémbe",
              "fúnga",
              "nóna",
              "táric̣i"
            ],
            "hint": "Starts with \"pé…\" (5 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "fúnga (sc. kánoa): Fast, vn",
            "pairs": [
              {
                "left": "fúnga (sc. kánoa)",
                "right": "Fast, vn"
              },
              {
                "left": "nóna; wánda",
                "right": "Fast, adj. to be-"
              },
              {
                "left": "táric̣i; kissa",
                "right": "History"
              },
              {
                "left": "pémbe",
                "right": "Horn"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"Prayer\": ___",
            "correctAnswer": "salla",
            "options": [
              "fúnga",
              "nóna",
              "salla",
              "táric̣i"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-14",
    "unitNumber": 14,
    "title": "Extended Historical Lexicon III: Comparative Philology",
    "description": "Master extended historical lexicon iii: comparative philology & mastery in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Award",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-advanced-corpus-3-comparative-roots-14",
        "title": "Comparative Roots, Sound Shifts & Dialectal Nuances",
        "icon": "Volume2",
        "description": "Compare dialectal forms and historical sound correspondences documented before 1930.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "u-shinde",
            "source": "that thou mayst conquer",
            "pronunciation": "u-shinde"
          },
          {
            "target": "a-shinde",
            "source": "that he or she may conquer",
            "pronunciation": "a-shinde"
          },
          {
            "target": "tu-shinde",
            "source": "that we may conquer",
            "pronunciation": "tu-shinde"
          },
          {
            "target": "m-shinde",
            "source": "that ye may conquer",
            "pronunciation": "m-shinde"
          },
          {
            "target": "wa-shinde",
            "source": "that they may conquer",
            "pronunciation": "wa-shinde"
          },
          {
            "target": "si-shindi",
            "source": "I do not conquer",
            "pronunciation": "si-shindi"
          },
          {
            "target": "hu-shindi",
            "source": "thou dost not conquer",
            "pronunciation": "hu-shindi"
          },
          {
            "target": "ha-shindi",
            "source": "he or she does not conquer",
            "pronunciation": "ha-shindi"
          },
          {
            "target": "hatu-shindi",
            "source": "we do not conquer",
            "pronunciation": "hatu-shindi"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja a-shinde nyumbani.",
            "source": "The elder mentioned that he or she may conquer at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"u-shinde\" in Kiswahili?",
            "correctAnswer": "that thou mayst conquer",
            "options": [
              "that he or she may conquer",
              "that we may conquer",
              "that thou mayst conquer",
              "that ye may conquer"
            ],
            "hint": "Hinde (1904) — The Subjunctive"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"a-shinde\" in Kiswahili?",
            "correctAnswer": "that he or she may conquer",
            "options": [
              "that we may conquer",
              "that he or she may conquer",
              "that ye may conquer",
              "that thou mayst conquer"
            ],
            "hint": "Hinde (1904) — The Subjunctive"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"tu-shinde\" in Kiswahili?",
            "correctAnswer": "that we may conquer",
            "options": [
              "that ye may conquer",
              "that thou mayst conquer",
              "that he or she may conquer",
              "that we may conquer"
            ],
            "hint": "Hinde (1904) — The Subjunctive"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"that we may conquer\" in Kiswahili?",
            "correctAnswer": "tu-shinde",
            "options": [
              "u-shinde",
              "a-shinde",
              "m-shinde",
              "tu-shinde"
            ],
            "hint": "Starts with \"tu…\" (9 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"that ye may conquer\" in Kiswahili?",
            "correctAnswer": "m-shinde",
            "options": [
              "u-shinde",
              "a-shinde",
              "m-shinde",
              "tu-shinde"
            ],
            "hint": "Starts with \"m-…\" (8 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "u-shinde: that thou mayst conquer",
            "pairs": [
              {
                "left": "u-shinde",
                "right": "that thou mayst conquer"
              },
              {
                "left": "a-shinde",
                "right": "that he or she may conquer"
              },
              {
                "left": "tu-shinde",
                "right": "that we may conquer"
              },
              {
                "left": "m-shinde",
                "right": "that ye may conquer"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"that they may conquer\": ___",
            "correctAnswer": "wa-shinde",
            "options": [
              "u-shinde",
              "wa-shinde",
              "a-shinde",
              "tu-shinde"
            ],
            "hint": "Hinde (1904) — The Subjunctive"
          }
        ]
      },
      {
        "id": "swahili-advanced-corpus-3-corpus-mastery-14",
        "title": "Comprehensive Corpus Mastery & Idiomatic Fluency",
        "icon": "ScrollText",
        "description": "Synthesize advanced vocabulary, idioms, and grammatical structures across all primary sources.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "ham-shindi",
            "source": "you do not conquer",
            "pronunciation": "ham-shindi"
          },
          {
            "target": "hawa-shindi",
            "source": "they do not conquer",
            "pronunciation": "hawa-shindi"
          },
          {
            "target": "si-ku-shinda",
            "source": "I did not conquer",
            "pronunciation": "si-ku-shinda"
          },
          {
            "target": "hu-ku-shinda",
            "source": "thou didst not conquer",
            "pronunciation": "hu-ku-shinda"
          },
          {
            "target": "ha-ku-shinda",
            "source": "he or she did not conquer",
            "pronunciation": "ha-ku-shinda"
          },
          {
            "target": "hatu-ku-shinda",
            "source": "we did not conquer",
            "pronunciation": "hatu-ku-shinda"
          },
          {
            "target": "ham-ku-shinda",
            "source": "you did not conquer",
            "pronunciation": "ham-ku-shinda"
          },
          {
            "target": "hawa-ku-shinda",
            "source": "they did not conquer",
            "pronunciation": "hawa-ku-shinda"
          },
          {
            "target": "si-ta-shinda",
            "source": "I shall not conquer",
            "pronunciation": "si-ta-shinda"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja hawa-shindi nyumbani.",
            "source": "The elder mentioned they do not conquer at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ham-shindi\" in Kiswahili?",
            "correctAnswer": "you do not conquer",
            "options": [
              "they do not conquer",
              "I did not conquer",
              "thou didst not conquer",
              "you do not conquer"
            ],
            "hint": "Hinde (1904) — Negative Present"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"hawa-shindi\" in Kiswahili?",
            "correctAnswer": "they do not conquer",
            "options": [
              "I did not conquer",
              "they do not conquer",
              "thou didst not conquer",
              "you do not conquer"
            ],
            "hint": "Hinde (1904) — Negative Present"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"si-ku-shinda\" in Kiswahili?",
            "correctAnswer": "I did not conquer",
            "options": [
              "I did not conquer",
              "thou didst not conquer",
              "you do not conquer",
              "they do not conquer"
            ],
            "hint": "Hinde (1904) — Negative Past Perfect"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I did not conquer\" in Kiswahili?",
            "correctAnswer": "si-ku-shinda",
            "options": [
              "si-ku-shinda",
              "ham-shindi",
              "hawa-shindi",
              "hu-ku-shinda"
            ],
            "hint": "Starts with \"si…\" (12 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"thou didst not conquer\" in Kiswahili?",
            "correctAnswer": "hu-ku-shinda",
            "options": [
              "ham-shindi",
              "hu-ku-shinda",
              "hawa-shindi",
              "si-ku-shinda"
            ],
            "hint": "Starts with \"hu…\" (12 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "ham-shindi: you do not conquer",
            "pairs": [
              {
                "left": "ham-shindi",
                "right": "you do not conquer"
              },
              {
                "left": "hawa-shindi",
                "right": "they do not conquer"
              },
              {
                "left": "si-ku-shinda",
                "right": "I did not conquer"
              },
              {
                "left": "hu-ku-shinda",
                "right": "thou didst not conquer"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"he or she did not conquer\": ___",
            "correctAnswer": "ha-ku-shinda",
            "options": [
              "ha-ku-shinda",
              "ham-shindi",
              "hawa-shindi",
              "si-ku-shinda"
            ],
            "hint": "Hinde (1904) — Negative Past Perfect"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-15",
    "unitNumber": 15,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Swahili (Kiswahili) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-pd-corpus-15-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Swahili (Kiswahili) headwords and dialect forms extracted from primary public-domain monographs.",
        "words": [
          {
            "target": "Sezo",
            "source": "Adze",
            "pronunciation": "se-zo / she-zo / te-zo"
          },
          {
            "target": "Šezo",
            "source": "Kimvita",
            "pronunciation": "se-zo / she-zo / te-zo"
          },
          {
            "target": "Tezo",
            "source": "Kiamu-Kitikuu)",
            "pronunciation": "se-zo / she-zo / te-zo"
          },
          {
            "target": "M-shale",
            "source": "Arrow",
            "pronunciation": "m-shale / m-tale / m-cale"
          },
          {
            "target": "M-tale",
            "source": "Kiamu",
            "pronunciation": "m-shale / m-tale / m-cale"
          },
          {
            "target": "M-cale",
            "source": "Kitikuu)",
            "pronunciation": "m-shale / m-tale / m-cale"
          },
          {
            "target": "Ny-uni",
            "source": "Bird",
            "pronunciation": "ny-uni / n-dege"
          },
          {
            "target": "N-dege",
            "source": "Standard)",
            "pronunciation": "ny-uni / n-dege"
          },
          {
            "target": "Mw-atzi",
            "source": "Blood",
            "pronunciation": "mw-atzi / da-mu"
          },
          {
            "target": "Dāmu",
            "source": "Standard Kiswahili)",
            "pronunciation": "mw-atzi / da-mu"
          },
          {
            "target": "I-zūzū",
            "source": "Banana",
            "pronunciation": "i-zuzu / i-sita / n-dizi"
          },
          {
            "target": "I-sīta",
            "source": "Kitikuu-Bajuni",
            "pronunciation": "i-zuzu / i-sita / n-dizi"
          },
          {
            "target": "N-dizi",
            "source": "Standard)",
            "pronunciation": "i-zuzu / i-sita / n-dizi"
          },
          {
            "target": "Bakuli (pl. mabakuli)",
            "source": "Large earthenware basin or deep dish",
            "pronunciation": "ba-ku-li"
          },
          {
            "target": "Balamwezi",
            "source": "Moonlight",
            "pronunciation": "ba-lamwe-zi / mba-lamwe-zi"
          },
          {
            "target": "Mbalamwezi",
            "source": "full moonshine",
            "pronunciation": "ba-lamwe-zi / mba-lamwe-zi"
          },
          {
            "target": "Bamvua (pl. mabamvua)",
            "source": "Spring tide (syn. maji makuu)",
            "pronunciation": "bamvua"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja M-shale nyumbani.",
            "source": "The elder mentioned arrow at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Sezo\" in Kiswahili?",
            "correctAnswer": "Adze",
            "options": [
              "Arrow",
              "Bird",
              "Blood",
              "Adze"
            ],
            "hint": "Johnston (1919 #21–21e) & Stigand (1915)",
            "acceptedAnswers": [
              "Adze (Standard / Kimvita / Kiamu-Kitikuu)",
              "Adze"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Swahili (Kiswahili) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Sezo / Šezo / Tezo: Adze (Standard / Kimvita / Kiamu-Kitikuu)",
            "pairs": [
              {
                "left": "Sezo / Šezo / Tezo",
                "right": "Adze (Standard / Kimvita / Kiamu-Kitikuu)"
              },
              {
                "left": "M-shale / M-tale / M-cale",
                "right": "Arrow (Kimvita / Kiamu / Kitikuu)"
              },
              {
                "left": "Ny-uni / N-dege",
                "right": "Bird (Classical Kingozi & Kimvita / Standard)"
              },
              {
                "left": "Mw-atzi / Dāmu",
                "right": "Blood (Archaic Kingozi / Standard Kiswahili)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Swahili (Kiswahili) term for \"Banana\": ___",
            "correctAnswer": "I-zūzū",
            "options": [
              "Bakuli",
              "I-zūzū",
              "Sezo",
              "M-shale"
            ],
            "hint": "Johnston (1919 #21b–e)",
            "acceptedAnswers": [
              "I-zūzū / I-sīta / N-dizi",
              "I-zūzū"
            ]
          }
        ]
      },
      {
        "id": "swahili-pd-corpus-15-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Swahili (Kiswahili) ecological, kinship, and action vocabulary from the archival corpus.",
        "words": [
          {
            "target": "ku-tuma pesa kwa simu",
            "source": "To send money by mobile phone (M-Pesa)",
            "pronunciation": "ku-tuma pe-sa kwa si-mu"
          },
          {
            "target": "kituo cha afya cha jamii",
            "source": "Community health center / clinic",
            "pronunciation": "ki-tuo cha afya cha ja-mii"
          },
          {
            "target": "kilimo cha kisasa cha umwagiliaji",
            "source": "Modern irrigation agriculture",
            "pronunciation": "ki-li-mo cha ki-sa-sa cha umwa-gi-lia-ji"
          },
          {
            "target": "ku-tiririka",
            "source": "To flow",
            "pronunciation": "ku-tiririka / ku-elea"
          },
          {
            "target": "ku-elea",
            "source": "To float on water",
            "pronunciation": "ku-tiririka / ku-elea"
          },
          {
            "target": "ku-vuta",
            "source": "To pull",
            "pronunciation": "ku-vuta / ku-sukuma"
          },
          {
            "target": "ku-sukuma",
            "source": "To push",
            "pronunciation": "ku-vuta / ku-sukuma"
          },
          {
            "target": "ku-futa",
            "source": "To wipe",
            "pronunciation": "ku-futa / ku-pangusa"
          },
          {
            "target": "ku-pangusa",
            "source": "To dust off",
            "pronunciation": "ku-futa / ku-pangusa"
          },
          {
            "target": "ku-pasua",
            "source": "To split",
            "pronunciation": "ku-pasua / ku-atua"
          },
          {
            "target": "ku-atua",
            "source": "To cleave wood",
            "pronunciation": "ku-pasua / ku-atua"
          },
          {
            "target": "huduma za serikali mtandaoni",
            "source": "Online digital government services (eCitizen)",
            "pronunciation": "hu-du-ma za se-ri-ka-li mtandao-ni"
          }
        ],
        "sentences": [
          {
            "target": "ku-tuma pesa kwa simu",
            "source": "To send money by mobile phone (M-Pesa)."
          },
          {
            "target": "kituo cha afya cha jamii",
            "source": "Community health center / clinic."
          },
          {
            "target": "kilimo cha kisasa cha umwagiliaji",
            "source": "Modern irrigation agriculture."
          },
          {
            "target": "huduma za serikali mtandaoni",
            "source": "Online digital government services (eCitizen)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ku-tuma pesa kwa simu\" in Kiswahili?",
            "correctAnswer": "To send money by mobile phone",
            "options": [
              "To float on water",
              "To send money by mobile phone",
              "Online digital government services",
              "Community health center"
            ],
            "hint": "Kencorpus & Modern Kiswahili Corpus",
            "acceptedAnswers": [
              "To send money by mobile phone (M-Pesa)",
              "To send money by mobile phone"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Swahili (Kiswahili) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "ku-tuma pesa kwa simu: To send money by mobile phone (M-Pesa)",
            "pairs": [
              {
                "left": "ku-tuma pesa kwa simu",
                "right": "To send money by mobile phone (M-Pesa)"
              },
              {
                "left": "kituo cha afya cha jamii",
                "right": "Community health center / clinic"
              },
              {
                "left": "kilimo cha kisasa cha umwagiliaji",
                "right": "Modern irrigation agriculture"
              },
              {
                "left": "ku-tiririka / ku-elea",
                "right": "To flow / To float on water"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Swahili (Kiswahili) term for \"To pull\": ___",
            "correctAnswer": "ku-vuta",
            "options": [
              "ku-futa",
              "ku-tiririka",
              "ku-elea",
              "ku-vuta"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists",
            "acceptedAnswers": [
              "ku-vuta / ku-sukuma",
              "ku-vuta"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-16",
    "unitNumber": 16,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Swahili (Kiswahili) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-open-dataset-16-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Heart",
        "description": "Learn core Swahili (Kiswahili) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "words": [
          {
            "target": "Ngoma",
            "source": "A dance. This word is also widely used by up-country natives",
            "pronunciation": "ngo-ma"
          },
          {
            "target": "īva",
            "source": "To steal",
            "pronunciation": "iva"
          },
          {
            "target": "sūmāmā",
            "source": "To stand, stop, be erect",
            "pronunciation": "su-ma-ma"
          },
          {
            "target": "yālā",
            "source": "To sleep",
            "pronunciation": "ya-la"
          },
          {
            "target": "kāā",
            "source": "To sit, remain, abide",
            "pronunciation": "kaa"
          },
          {
            "target": "ōnā",
            "source": "To see",
            "pronunciation": "ona"
          },
          {
            "target": "pēndā, -tākā",
            "source": "To love, want",
            "pronunciation": "penda ta-ka"
          },
          {
            "target": "ācā",
            "source": "To leave off, cease",
            "pronunciation": "aca"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja īva nyumbani.",
            "source": "The elder mentioned to steal at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ngoma\" in Kiswahili?",
            "correctAnswer": "A dance. This word is also widely used by up-country natives",
            "options": [
              "A dance. This word is also widely used by up-country natives",
              "To steal",
              "To stand",
              "To sleep"
            ],
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"īva\" in Kiswahili?",
            "correctAnswer": "To steal",
            "options": [
              "To stand",
              "To sleep",
              "To steal",
              "To sit"
            ],
            "hint": "21b–d. Ki-amu / Ki-siu / Ki-pate (Lamu Archipelago) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sūmāmā\" in Kiswahili?",
            "correctAnswer": "To stand",
            "options": [
              "To sleep",
              "To stand",
              "To steal",
              "To sit"
            ],
            "hint": "21b–d. Ki-amu / Ki-siu / Ki-pate (Lamu Archipelago) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)",
            "acceptedAnswers": [
              "To stand, stop, be erect",
              "To stand"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To stand, stop, be erect\" in Kiswahili?",
            "correctAnswer": "sūmāmā",
            "options": [
              "Ngoma",
              "sūmāmā",
              "īva",
              "yālā"
            ],
            "hint": "soo-mah-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To sleep\" in Kiswahili?",
            "correctAnswer": "yālā",
            "options": [
              "Ngoma",
              "īva",
              "sūmāmā",
              "yālā"
            ],
            "hint": "yah-lah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "Ngoma: A dance. This word is also widely used by up-country natives",
            "pairs": [
              {
                "left": "Ngoma",
                "right": "A dance. This word is also widely used by up-country natives"
              },
              {
                "left": "īva",
                "right": "To steal"
              },
              {
                "left": "sūmāmā",
                "right": "To stand, stop, be erect"
              },
              {
                "left": "yālā",
                "right": "To sleep"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"To sit, remain, abide\": ___",
            "correctAnswer": "kāā",
            "options": [
              "Ngoma",
              "īva",
              "sūmāmā",
              "kāā"
            ],
            "hint": "21a. Ki-mvita (Mombasa) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          }
        ]
      },
      {
        "id": "swahili-open-dataset-16-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Swahili (Kiswahili) terms for agriculture, environment, social organization, and daily communication.",
        "words": [
          {
            "target": "cēkā",
            "source": "To laugh",
            "pronunciation": "ce-ka"
          },
          {
            "target": "yūā",
            "source": "To know",
            "pronunciation": "yua"
          },
          {
            "target": "ūlāgā, -ūā",
            "source": "To kill",
            "pronunciation": "u-la-ga ua"
          },
          {
            "target": "ēndā",
            "source": "To go",
            "pronunciation": "enda"
          },
          {
            "target": "pā",
            "source": "To give",
            "pronunciation": "pa"
          },
          {
            "target": "lā",
            "source": "To eat",
            "pronunciation": "la"
          },
          {
            "target": "fā",
            "source": "To die",
            "pronunciation": "fa"
          },
          {
            "target": "cēzā",
            "source": "To dance",
            "pronunciation": "ce-za"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja yūā nyumbani.",
            "source": "The elder mentioned to know at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"cēkā\" in Kiswahili?",
            "correctAnswer": "To laugh",
            "options": [
              "To know",
              "To kill",
              "To go",
              "To laugh"
            ],
            "hint": "21e. Ki-tikuu (Bajuni) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"yūā\" in Kiswahili?",
            "correctAnswer": "To know",
            "options": [
              "To kill",
              "To know",
              "To go",
              "To laugh"
            ],
            "hint": "21b–d. Ki-amu / Ki-siu / Ki-pate (Lamu Archipelago) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ūlāgā, -ūā\" in Kiswahili?",
            "correctAnswer": "To kill",
            "options": [
              "To kill",
              "To go",
              "To laugh",
              "To know"
            ],
            "hint": "21e. Ki-tikuu (Bajuni) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To kill\" in Kiswahili?",
            "correctAnswer": "ūlāgā",
            "options": [
              "cēkā",
              "yūā",
              "ēndā",
              "ūlāgā"
            ],
            "hint": "oo-lah-gah ooah",
            "acceptedAnswers": [
              "ūlāgā, -ūā",
              "ūlāgā"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To go\" in Kiswahili?",
            "correctAnswer": "ēndā",
            "options": [
              "ēndā",
              "cēkā",
              "yūā",
              "ūlāgā"
            ],
            "hint": "eh-ndah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "cēkā: To laugh",
            "pairs": [
              {
                "left": "cēkā",
                "right": "To laugh"
              },
              {
                "left": "yūā",
                "right": "To know"
              },
              {
                "left": "ūlāgā, -ūā",
                "right": "To kill"
              },
              {
                "left": "ēndā",
                "right": "To go"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"To give\": ___",
            "correctAnswer": "pā",
            "options": [
              "pā",
              "cēkā",
              "yūā",
              "ūlāgā"
            ],
            "hint": "21a. Ki-mvita (Mombasa) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-17",
    "unitNumber": 17,
    "title": "Krapf Suahili Dictionary — Outline of Grammar, 7",
    "description": "Master the complete grammatical, lexical, and ethnographic wealth of Rev. Dr. L. Krapf's 1882 'A Dictionary of the Suahili Language' (pp. i–xl, 1–431): the 7 Modes of Salutation (p. xx), 8 Noun Classes & Post-Prefixes, Kimvita verb paradigms & enclitic objects (-mi, -we, -e, -sui, -nui, -o), 12 Swahili & 12 Wanika Months, Siku ya Muaka (Nairuz), 24-hour time divisions, Marine & Lover's Songs, and coastal taxonomies.",
    "icon": "Compass",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-krapf-1882-salutations-grammar-calendar",
        "title": "Krapf 7 Salutations, Post-Prefixes, Enclitic Pronouns & Coastal",
        "icon": "MessageCircle",
        "description": "Learn the 7 hierarchical salutations (p. xx), Kimvita passive -oa and enclitic object suffixes (p. xxx), the 12 Swahili lunar months (pp. 223–224), 6 monsoon seasons (p. 248), and 24-hour time divisions (pp. 252–253, 318).",
        "words": [
          {
            "target": "Hu jambo?",
            "source": "Seven Modes of Salutation (Krapf 1882, p. xx): How art thou? — I am well",
            "pronunciation": "hu-jambo",
            "example": "Kua heri ya ku onana! — Amani ya Mungu! (Farewell till we meet again! — Peace of God! p. xx)"
          },
          {
            "target": "ni-pá-mi",
            "source": "Kimvita enclitic personal pronouns suffixed to the verb (Krapf 1882, p. xxx): give to me",
            "pronunciation": "ni-pá-mi",
            "example": "Ambai kuamba apenda / ambao kuamba wapenda (Analytic relative 'who loves / who love', p. xxv)"
          },
          {
            "target": "Ramatháni",
            "source": "11th",
            "pronunciation": "ramatháni"
          },
          {
            "target": "Hajji",
            "source": "12th",
            "pronunciation": "hajji"
          },
          {
            "target": "Masíka",
            "source": "Mar–May",
            "pronunciation": "masíka"
          },
          {
            "target": "Kipúpue",
            "source": "Jun–Aug",
            "pronunciation": "kipúpue"
          },
          {
            "target": "mafungulia ngombe",
            "source": "8 AM",
            "pronunciation": "mafungulia-ngombe"
          },
          {
            "target": "athóhuri",
            "source": "12 PM",
            "pronunciation": "athóhuri"
          },
          {
            "target": "elásiri",
            "source": "3:30 PM",
            "pronunciation": "elásiri"
          },
          {
            "target": "magháribi",
            "source": "6 PM",
            "pronunciation": "magháribi"
          },
          {
            "target": "esha",
            "source": "7–8 PM",
            "pronunciation": "esha"
          }
        ],
        "sentences": [
          {
            "target": "Mombása kúlā kua ku papassa, hakuna teári kama Unguja.",
            "source": "At Mombasa you eat by groping (hard toil), nothing is ready-made like at Zanzibar.",
            "pronunciation": "Mombasa | to-eat | by | groping | there-is-not | ready | like | Zanzibar"
          },
          {
            "target": "Ndaulía si ulinzi, bora ni ku enda muegniéwe; Neno ukatálo ndílo Mungu afaniálo.",
            "source": "'Look out for me' is no watching, it is better to go yourself; the thing thou refusest is the very thing God brings about.",
            "pronunciation": "look-for-me | is-not | watching | better | is | to-go | yourself"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Krapf's Outline of Grammar (1882, p. xx), what salutation does an inferior address to a superior, and what is the reply?",
            "correctAnswer": "Nashika miguu",
            "options": [
              "Nashika miguu",
              "Hodi! hodi!",
              "Kua heri",
              "Sumile!"
            ],
            "hint": "Literally 'I lay hold of thy feet' (Mode 5 of the 7 Salutations on p. xx).",
            "acceptedAnswers": [
              "Nashika miguu ('I clasp thy feet') — Reply: Marahaba! or Ahsanta!",
              "Nashika miguu"
            ]
          }
        ]
      },
      {
        "id": "swahili-krapf-1882-songs-taxonomies-topography",
        "title": "Krapf Marine & Lover's Songs, Coastal Taxonomies & Mombasa",
        "icon": "Compass",
        "description": "Explore the verbatim songs (Muakaje, Killefi, Mguáme, Simba ya Mungu), 5 coconut & 8 rice stages, 6 handful measures, 13 ornaments, and Mombasa/Rabai historical ethnography.",
        "words": [
          {
            "target": "1. kidáka • 2. kitále • 3. dafu • 4. kórŏma • 5. nasi (nazi)",
            "source": "Five Coconut Growth Stages from tiny bud on the pande stalk to fully ripe nut",
            "pronunciation": "ki-da-ka / ki-ta-le / da-fu / ko-ro-ma / na-zi",
            "example": "Ajábu ni mtáūsi, ku taúa nazi mbófu (The wonder is the fastidious chooser who picks a rotten coconut, p. 254)"
          },
          {
            "target": "1. óya",
            "source": "Six Handful & Fist Measures of Grain",
            "pronunciation": "o-ya / do-pa / ko-ffi / ko-nsi / m-gna-nda / ngu-mi",
            "example": "1 pishi = 4 kebába; 12 pishi = 72 rotteli (p. 316)"
          },
          {
            "target": "jánga",
            "source": "Thirteen Traditional Swahili Ornaments & Seven Bead Types",
            "pronunciation": "jánga",
            "example": "Wakamba watungíwa wao ushanga (For the Wakamba their beads are strung, p. 231)"
          },
          {
            "target": "Mvita",
            "source": "Shehe Mvita",
            "pronunciation": "mvita"
          },
          {
            "target": "Kongowéa",
            "source": "Makame iwe / Kiwemtu / Mku gnombe",
            "pronunciation": "kongowéa"
          },
          {
            "target": "Kiziwáni",
            "source": "Kin.",
            "pronunciation": "kiziwáni"
          },
          {
            "target": "Kidiamóni",
            "source": "Kik.",
            "pronunciation": "kidiamóni"
          },
          {
            "target": "Ngoméni",
            "source": "Kisamb.",
            "pronunciation": "ngoméni"
          },
          {
            "target": "Worra Mombása",
            "source": "Galla",
            "pronunciation": "worra-mombása"
          },
          {
            "target": "Mjūkū (grandchild) → Mtūkū / Kitūkū (great-grandchild) → Mlikū",
            "source": "Four Generations of Descendants in Swahili Kinship",
            "pronunciation": "m-ju-kuu / m-tu-kuu ki-tu-kuu / m-li-kuu",
            "example": "Mjómba (maternal uncle; pl. Wajomba = the Swahili, p. 230)"
          }
        ],
        "sentences": [
          {
            "target": "Atáni ku takábari! muangalie Mguáme... ulimengu una hadáa: sasa mti wa mnázi huangúka ukiináma.",
            "source": "Cease from pride! Behold Mguáme... the world is full of deceit: now the tall coconut tree falls bowing low."
          },
          {
            "target": "Killéfi mkáta jombo, mkata na mlingóte, azama na wátu wóte, hápŏni mtu mmója.",
            "source": "The Killefi breaker cuts up the vessel, cuts it up with the mast, and sinks with all hands, not a single person escapes."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each Mombasa inhabitant status or historical site in Krapf (1882) with its meaning:",
            "correctAnswer": "Kiwialía cha Mwita: Native-born citizen of Mombasa (p. 365)",
            "pairs": [
              {
                "left": "Kiwialía cha Mwita",
                "right": "Native-born citizen of Mombasa (p. 365)"
              },
              {
                "left": "Kikulía cha Mwita",
                "right": "Person brought up at Mombasa from youth (p. 365)"
              },
              {
                "left": "Teléa",
                "right": "Adult newcomer who settled at Mombasa later in life (p. 365)"
              },
              {
                "left": "Siyu (on Patta)",
                "right": "Chief seat of ancient Suahili learning (p. 343)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-18",
    "unitNumber": 18,
    "title": "Madan Zanzibar Swahili — Root Families, Dhow Navigation",
    "description": "Master Zanzibar Swahili morphological root families (-pend-, -shind-, -za-, -tu), Indian Ocean dhow navigation & tidal vocabulary, 4-generation kinship terms, and Nasal vs. Non-Nasal concords from A. C. Madan's 1902 Dictionary and 1905 Grammar.",
    "icon": "Compass",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-madan-roots-concords",
        "title": "Root Derivation Families (-pend-, -shind-, -za-) & Alliterative",
        "icon": "BookOpen",
        "description": "Learn how Zanzibar Swahili builds entire families of nouns and verbs from a single root and distinguishes Nasal (adjective) from Non-Nasal (pronoun/verb) concords (Madan 1902, pp. vii–xv & 1905, §§ 23–65).",
        "words": [
          {
            "target": "mpenda",
            "source": "lover",
            "pronunciation": "mpenda"
          },
          {
            "target": "mshinda",
            "source": "conqueror",
            "pronunciation": "mshinda"
          },
          {
            "target": "mshinde",
            "source": "vanquished one",
            "pronunciation": "mshinde"
          },
          {
            "target": "mshindani",
            "source": "competitor/rival",
            "pronunciation": "mshindani"
          },
          {
            "target": "ushindi",
            "source": "victory",
            "pronunciation": "ushindi"
          },
          {
            "target": "mashindano",
            "source": "competition/race",
            "pronunciation": "mashindano"
          },
          {
            "target": "mzazi",
            "source": "mzaa",
            "pronunciation": "mzazi"
          },
          {
            "target": "mzao",
            "source": "mazao",
            "pronunciation": "mzao"
          },
          {
            "target": "viendavyo na visivyokwenda",
            "source": "things movable and immovable (animate & inanimate)",
            "pronunciation": "viendavyo-na-visivyokwenda"
          },
          {
            "target": "bithaa zijazo na zitokazo",
            "source": "imports and exports",
            "pronunciation": "bithaa-zijazo-na-zitokazo"
          },
          {
            "target": "mimi",
            "source": "I",
            "pronunciation": "mimi"
          },
          {
            "target": "miye",
            "source": "me",
            "pronunciation": "mimi"
          },
          {
            "target": "nami",
            "source": "with me",
            "pronunciation": "mimi"
          },
          {
            "target": "ndimi • jinalo, nyumbaye, babazo",
            "source": "it is I",
            "pronunciation": "mimi"
          },
          {
            "target": "kujienda • kujiendea • kujikalia • kujiona • kujigonjweza",
            "source": "go off by itself",
            "pronunciation": "kujienda"
          }
        ],
        "sentences": [
          {
            "target": "Vitu vile vyangu vilivyo vizuri viwe vyako, vyote vinne.",
            "source": "All those four fine things of mine, let them be yours."
          },
          {
            "target": "Malezi halisi ni kumsitawisha killa mtu utu wake wote pamoja, akili, moyo, mwili, roho.",
            "source": "True education is to develop in every person their whole humanity together: intellect, heart, body, and spirit."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does the idiomatic reflexive verb 'kujigonjweza' mean in Madan's Grammar (1905, § 226)?",
            "correctAnswer": "To pretend to be ill",
            "options": [
              "To pretend to be ill",
              "To heal oneself",
              "To walk for one's own pleasure",
              "To cough unintentionally"
            ],
            "hint": "ji- (reflexive) + gonjw- (sick) + -eza (causal)",
            "acceptedAnswers": [
              "To pretend to be ill / feign sickness",
              "To pretend to be ill"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Zanzibar Swahili grammatical form from Madan (1902 & 1905) with its English meaning:",
            "correctAnswer": "viendavyo na visivyokwenda: Movables and immovables",
            "pairs": [
              {
                "left": "viendavyo na visivyokwenda",
                "right": "Movables and immovables"
              },
              {
                "left": "bithaa zijazo na zitokazo",
                "right": "Imports and exports"
              },
              {
                "left": "jinalo / nyumbaye",
                "right": "Thy name / his or her house"
              },
              {
                "left": "kujiendea",
                "right": "To walk for one's own pleasure"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-madan-maritime-kinship-customs",
        "title": "Zanzibar Dhow Navigation, Tidal Cycles, 4-Generation Kinship",
        "icon": "Anchor",
        "description": "Explore Indian Ocean dhow architecture, tacking & monsoon terms, spring vs. neap tides, four generations of descendants, and communal customs from Madan's 1902 English-Swahili Dictionary.",
        "words": [
          {
            "target": "Gubeti",
            "source": "omo",
            "pronunciation": "gubeti"
          },
          {
            "target": "Shetri",
            "source": "tezi",
            "pronunciation": "shetri"
          },
          {
            "target": "Upande wa goshini vs. Upande wa demani",
            "source": "Weather (windward) side vs. Lee side",
            "pronunciation": "upande-wa-goshini-vs"
          },
          {
            "target": "Maji ya bamvua vs. Maji mafu (maji ya mbande)",
            "source": "High spring tides vs. Low neap tides ('dead waters')",
            "pronunciation": "mah-jee yah bahm-voo-ah vs. mah-jee mah-foo"
          },
          {
            "target": "Mjukuu → Kijukuu → Kilembwe → Kining'ina",
            "source": "Grandchild → Great-grandchild → Great-great-grandchild → 5th-generation descendant",
            "pronunciation": "mjukuu-kijukuu-kilembwe-kining'ina"
          },
          {
            "target": "Pukusa",
            "source": "mapukusa",
            "pronunciation": "pukusa"
          },
          {
            "target": "Mbirambi zako! — Binuru!",
            "source": "Condolence salutation & reply",
            "pronunciation": "mbirambi-zako-binuru"
          },
          {
            "target": "Barua ya tanzia",
            "source": "Letter of condolence",
            "pronunciation": "barua-ya-tanzia"
          },
          {
            "target": "Hana",
            "source": "Mourning gathering",
            "pronunciation": "hana"
          }
        ],
        "sentences": [
          {
            "target": "Haba na haba hujaza kibaba; maji yaliyomwagika hayazoeleki.",
            "source": "Little by little fills the measure; spilt water cannot be gathered up."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each Zanzibar Swahili kinship or cultural term from Madan (1902) with its meaning:",
            "correctAnswer": "Kilembwe: Great-great-grandchild",
            "pairs": [
              {
                "left": "Kilembwe",
                "right": "Great-great-grandchild"
              },
              {
                "left": "Ndugu kunyonya",
                "right": "Foster-sibling (milk-brother/sister)"
              },
              {
                "left": "Pukusa",
                "right": "Goodwill bonus gift closing a bargain"
              },
              {
                "left": "Ujima",
                "right": "Neighbourly mutual-aid work bee"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-19",
    "unitNumber": 19,
    "title": "Taylor African Aphorisms — Archaic Tenses (Appendix A)",
    "description": "Master the 6 classical Swahili tenses of Appendix A (-kali, Sime-, -ngwa-, -meze-, Old Preterites, -siku-), the -ngwa Possessive Pronoun of Alienation (Appendix B), the 5 monsoon seasons, the 10 marks of beauty, and rare Kingozi/Kimvita vocabulary from Rev. W. E. Taylor's 1891 monograph.",
    "icon": "ScrollText",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-taylor-1891-appendix-a-b",
        "title": "Appendix A (Six Classical Tenses) & Appendix B (-ngwa Alienation)",
        "icon": "BookOpen",
        "description": "Learn the six classical Swahili verb tenses (pp. 164–166) and the enclitic possessive pronoun -ngwa ('somebody else's', pp. 166–167) documented by Rev. W. E. Taylor.",
        "words": [
          {
            "target": "nikalipo",
            "source": "near/rest",
            "pronunciation": "nikalipo"
          },
          {
            "target": "akaliko",
            "source": "far/goal",
            "pronunciation": "akaliko"
          },
          {
            "target": "nikalimo",
            "source": "within/upon",
            "pronunciation": "nikalimo"
          },
          {
            "target": "Mbona hukwenda?",
            "source": "Why did you not go? — Have I not gone? (= I have gone!)",
            "pronunciation": "si-me-kwen-da / ngwa-ku-pa / a-me-ze-twam-bi-a"
          },
          {
            "target": "zijile, yaanzile",
            "source": "they came, they began",
            "pronunciation": "zijile"
          },
          {
            "target": "Nalim'shauri mama asikunijibu neno",
            "source": "I consulted my mother without her answering me a word",
            "pronunciation": "na-lim-shau-ri ma-ma a-si-ku-ni-ji-bu ne-no"
          },
          {
            "target": "shokangwa • jembengwa • kitingwa • chanongwa • kinungwa",
            "source": "some other person's axe (shoka la wat'u)",
            "pronunciation": "shokangwa"
          }
        ],
        "sentences": [
          {
            "target": "K'ambiwa, 'Shokangwa ni shoka la wat'u: liate, lielekezwe.'",
            "source": "I was told, 'Shokangwa means somebody else's axe: leave it alone, let it be put away.'."
          },
          {
            "target": "Usitukane wakunga na uzazi ungalipo.",
            "source": "Insult not the midwives while childbearing still continues here."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each Swahili tense from Taylor (1891, Appendix A, pp. 164–166) with its grammatical function:",
            "correctAnswer": "-kali (nikalikwenda): The 'Yet' Tense (affirmative counterpart to -ja-)",
            "pairs": [
              {
                "left": "-kali (nikalikwenda)",
                "right": "The 'Yet' Tense (affirmative counterpart to -ja-)"
              },
              {
                "left": "Sime- (Simekwenda?)",
                "right": "Negative Perfect used in rhetorical retorts ('Have I not gone?')"
              },
              {
                "left": "-ngwa- (Ngwakupa!)",
                "right": "Precatory Tense ('May God give thee!')"
              },
              {
                "left": "-meze- (Bwana amezetwambia)",
                "right": "Poetical Perfect (< kumala) for octosyllabic metre"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-taylor-1891-rarer-words-history",
        "title": "Supplementary Indexes 1",
        "icon": "Award",
        "description": "Explore the 145 rarer Swahili words (pp. 175–177), the 5 monsoon/rain seasons (§ 128), the 10 marks of Swahili beauty (§ 425), and the 66 historical figures and places (pp. 179–180) in Taylor (1891).",
        "words": [
          {
            "target": "Kaskazi",
            "source": "Nov.–Mar.",
            "pronunciation": "kaskazi"
          },
          {
            "target": "Kusi",
            "source": "May–Oct.",
            "pronunciation": "kusi"
          },
          {
            "target": "Mchoo",
            "source": "Sept.",
            "pronunciation": "mchoo"
          },
          {
            "target": "Vuli",
            "source": "Oct.–Nov.",
            "pronunciation": "vuli"
          },
          {
            "target": "Shingo ya upanga",
            "source": "The 10 classical marks of Swahili female beauty",
            "pronunciation": "shingo-ya-upanga"
          },
          {
            "target": "wafalaguzi",
            "source": "sages",
            "pronunciation": "wafalaguzi"
          },
          {
            "target": "sambo",
            "source": "vessel",
            "pronunciation": "sambo"
          },
          {
            "target": "mwongo",
            "source": "company/guild",
            "pronunciation": "mwongo"
          },
          {
            "target": "kuuya",
            "source": "return",
            "pronunciation": "kuuya"
          },
          {
            "target": "k'ondo",
            "source": "war/strife",
            "pronunciation": "k'ondo"
          },
          {
            "target": "ago",
            "source": "camp",
            "pronunciation": "ago"
          },
          {
            "target": "kiselema",
            "source": "worn hoe",
            "pronunciation": "kiselema"
          },
          {
            "target": "Mwana Mkisi",
            "source": "Kongowea",
            "pronunciation": "mwana-mkisi"
          },
          {
            "target": "Bwana Mataka",
            "source": "Siu",
            "pronunciation": "bwana-mataka"
          }
        ],
        "sentences": [
          {
            "target": "Ahadi na miithaki, mwenyi kumpa mwenziwe, ni deni katika haki, na kulipa ijuziye.",
            "source": "A promise and a covenant, when one gives it to his fellow, is a debt in justice, and it behoves to pay it."
          },
          {
            "target": "Kilimia kikizama kwa jua huzuka kwa mvua; kikizama kwa mvua huzuka kwa jua.",
            "source": "When the Pleiades set in sunny weather they rise in rain; when they set in rain they rise in sun."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Taylor (1891, § 128 fn., p. 28), what are the five traditional Swahili agricultural and monsoon seasons?",
            "correctAnswer": "Kaskazi",
            "options": [
              "Jilal",
              "Chululu",
              "Kaskazi",
              "Shokangwa"
            ],
            "hint": "See footnote to Proverb § 128 (p. 28)",
            "acceptedAnswers": [
              "Kaskazi, Mwaka (Masika), Kusi, Mchoo, and Vuli",
              "Kaskazi"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each rare classical Swahili term from Taylor (1891, Supplementary Index 1, pp. 175–177) with its meaning:",
            "correctAnswer": "sambo (samboye): Vessel / dhow (Kingozi poetic word for chombo)",
            "pairs": [
              {
                "left": "sambo (samboye)",
                "right": "Vessel / dhow (Kingozi poetic word for chombo)"
              },
              {
                "left": "kuola (maoleo / k'olewa)",
                "right": "To write / ordain destiny (by God)"
              },
              {
                "left": "kuuya (akauya)",
                "right": "To return / go back (= kurudi)"
              },
              {
                "left": "kiselema",
                "right": "A worn-down, sharp-tempered hoe that outworks a new hoe"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-20",
    "unitNumber": 20,
    "title": "Madan English-Swahili Vocabulary — Bishop Steere's",
    "description": "Master Bishop Steere's 13 bilingual Swahili grammatical definitions (Sarufi, p. 11), reversive -ua verbs, marriage voice derivations, dhow/tide/coral taxonomies, calico grades, arithmetic terms, and 120+ conversational idioms from A. C. Madan's 1917 English-Swahili Vocabulary.",
    "icon": "BookOpen",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-madan-1917-sarufi-grammar-idioms-18-1",
        "title": "Bishop Steere's 13 Sarufi Definitions, Reversive '-ua' Verbs",
        "icon": "Sparkles",
        "description": "Study the 13 Swahili grammatical definitions from Steere's Grammar in Swahili (p. 11) and key morphological and syntactic idioms across Madan (1917, pp. 1–56).",
        "words": [
          {
            "target": "Rejeo",
            "source": "-ye, -o, -cho",
            "pronunciation": "rejeo"
          },
          {
            "target": "fungua",
            "source": "lock/tie",
            "pronunciation": "fungua"
          },
          {
            "target": "sindua",
            "source": "door",
            "pronunciation": "sindua"
          },
          {
            "target": "zibua",
            "source": "bottle",
            "pronunciation": "zibua"
          },
          {
            "target": "fumbua",
            "source": "eyes/mouth",
            "pronunciation": "fumbua"
          },
          {
            "target": "funua",
            "source": "cover",
            "pronunciation": "funua"
          },
          {
            "target": "shonua",
            "source": "sew",
            "pronunciation": "shonua"
          },
          {
            "target": "kunjua",
            "source": "fold",
            "pronunciation": "kunjua"
          },
          {
            "target": "fumua",
            "source": "unpick",
            "pronunciation": "fumua"
          },
          {
            "target": "oa",
            "source": "man",
            "pronunciation": "oa"
          },
          {
            "target": "olewa",
            "source": "woman",
            "pronunciation": "olewa"
          },
          {
            "target": "oana",
            "source": "couple",
            "pronunciation": "oana"
          },
          {
            "target": "kabla sijafa",
            "source": "Before I die",
            "pronunciation": "kabla-sijafa"
          }
        ],
        "sentences": [
          {
            "target": "Ni kiasi changu, kama nalikatiwa mimi. — Kuaheri ya kuonana!",
            "source": "It fits, as if it was cut for me. — Good-bye till we meet again!"
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each specialized Swahili reversive '-ua' verb from Madan (1917, Book pp. 33, 51–52) with its exact object/meaning:",
            "correctAnswer": "sindua: Open / unbar a door (p. 33)",
            "pairs": [
              {
                "left": "sindua",
                "right": "Open / unbar a door (p. 33)"
              },
              {
                "left": "zibua",
                "right": "Uncork / open a bottle (p. 33)"
              },
              {
                "left": "fumbua",
                "right": "Open the eyes or mouth (p. 33)"
              },
              {
                "left": "shonua / fumua",
                "right": "Unsew / unpick stitching (p. 52)"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-madan-1917-maritime-trade-arithmetic-18-2",
        "title": "Maritime Dhows, Tides, Coral, Trade Calicoes & Arithmetic",
        "icon": "Compass",
        "description": "Learn Madan's (1917, pp. 1–56) coastal vocabulary for Indian Ocean dhows, tides, coral, calico textiles, coconut/rice/citrus stages, and arithmetic.",
        "words": [
          {
            "target": "mtepe, betela, bágala, batili, bedeni & dau",
            "source": "Six coastal dhow/vessel types",
            "pronunciation": "mtepe"
          },
          {
            "target": "amerikano, ulayiti, kaniki, bafta & shiti",
            "source": "American, English unbleached, blue, fine & printed calico",
            "pronunciation": "amerikano"
          },
          {
            "target": "jumla",
            "source": "jumlisha",
            "pronunciation": "jumla"
          },
          {
            "target": "baki",
            "source": "kutoa",
            "pronunciation": "baki"
          },
          {
            "target": "tháruba",
            "source": "zidisha / saba fi saba",
            "pronunciation": "tháruba"
          },
          {
            "target": "Unguja, Mvita, Mafya, Mkuchyo, Anzwani & Bukini",
            "source": "Zanzibar, Mombasa, Mafia, Mogadishu, Anjouan (Johanna) & Madagascar",
            "pronunciation": "unguja"
          }
        ],
        "sentences": [
          {
            "target": "Maji yanajaa; kung'oa nanga, tweka matanga!",
            "source": "The tide is coming in; weigh anchor, set sail!"
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each coastal Swahili textile, coral, or maritime term from Madan (1917) with its English definition:",
            "correctAnswer": "ulayiti vs. kaniki vs. bafta: English unbleached calico vs. blue calico vs. fine calico (p. 7)",
            "pairs": [
              {
                "left": "ulayiti vs. kaniki vs. bafta",
                "right": "English unbleached calico vs. blue calico vs. fine calico (p. 7)"
              },
              {
                "left": "mtepe, betela, bágala, batili, bedeni",
                "right": "Five traditional Indian Ocean dhow types (p. 13)"
              },
              {
                "left": "maji yanajaa / maji yanakupwa / maji mafu",
                "right": "Coming-in (flood) tide / ebbing tide / neap tides (p. 49)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-21",
    "unitNumber": 21,
    "title": "Bishop Edward Steere's 'Swahili Tales, as Told",
    "description": "Master the complete oral narratives, 20 verbatim Mifano proverbs (pp. 191–195), 14 Vitendawili riddles (pp. 417–421 & p. 492), Kimvita vs. Kiunguja vs. Kingozi/Kiamu poetics, 37 italicized terms (p. 490), 103 ethnographic notes (pp. 490–503), and 12 corrigenda (p. 504) of Steere (1870).",
    "icon": "BookOpen",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-steere-1870-mifano-vitendawili-19-1",
        "title": "All 20 Verbatim Mifano & 14 Vitendawili",
        "icon": "Sparkles",
        "description": "Learn all 20 proverbs (Mifano #1–#20) and 14 riddles (Vitendawili #1–#14) dictated by Hamisi wa Kayi in Steere (1870).",
        "words": [
          {
            "target": "(1) Haraka, haraka, haina baraka",
            "source": "(1) Hurrying has no blessing",
            "pronunciation": "haraka"
          },
          {
            "target": "(6) Kazi mbi si mtezo mwema?",
            "source": "(6) Is not poor work good play?",
            "pronunciation": "kazi-mbi-si-mtezo"
          },
          {
            "target": "(14) Ndovu wawili wakisongana ziumiazo nyika",
            "source": "(14) When two elephants struggle it is the grass that suffers",
            "pronunciation": "ndovu-wawili-wakisongana-ziumiazo"
          },
          {
            "target": "Kitendawili!",
            "source": "Riddle challenge & prize-town protocol + all 14 riddle solutions: (1) Egg, (2)",
            "pronunciation": "kitendawili"
          }
        ],
        "sentences": [
          {
            "target": "Ndovu wawili wakisongana ziumiazo nyika; abadi, abadi, ukambaa watinda jiwe.",
            "source": "When two elephants struggle it is the grass that suffers; continually, continually, the well-cord cuts the stone."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each Swahili riddle (Kitendawili) from Steere (1870, pp. 417–421 & Note 6, p. 492) with its exact solution:",
            "correctAnswer": "Tandika kitanga, tule kunazi: Nyota (The stars — Riddle #3, p. 418)",
            "pairs": [
              {
                "left": "Tandika kitanga, tule kunazi",
                "right": "Nyota (The stars — Riddle #3, p. 418)"
              },
              {
                "left": "Watoto wangu wana vilemba, asio kilemba si mwanangu",
                "right": "Fuu (Fuu fruit in its calyx cup — Riddle #6, p. 418)"
              },
              {
                "left": "Parra hatta Maka / Ntipo mbili zavuka mto",
                "right": "Utelezi (Slipping) / Macho (The eyes — Riddles #12–#13, p. 420)"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-steere-1870-tales-liongo-gungu-notes-19-2",
        "title": "18 Prose Tales, Liongo Fumo & Gungu Poetics, 37 Italicized Words",
        "icon": "Award",
        "description": "Explore the 6 informants, Kimvita 'Kititi, na Fisi, na Simba', 'Hadithi ya Liongo', Kingozi–Kiunguja poetry, wedding/culinary/plantation notes, and 12 corrigenda.",
        "words": [
          {
            "target": "Kititi (Kimvita) = Sungura (Kiunguja)",
            "source": "Hare/rabbit",
            "pronunciation": "ki-ti-ti / ti-nya-ngo / ki-to-ka / m-ta-nga / ma-to / ti-ni"
          },
          {
            "target": "Liongo Fumo",
            "source": "Shanga / Ozi",
            "pronunciation": "liongo-fumo"
          },
          {
            "target": "Mashairi ya Liongo",
            "source": "Muyuweni",
            "pronunciation": "mashairi-ya-liongo"
          },
          {
            "target": "Kingozi / Kiamu → Kiunguja: Mja → Mtumwa",
            "source": "Servant/bondsman",
            "pronunciation": "kingozi"
          },
          {
            "target": "Fungate",
            "source": "Note 1",
            "pronunciation": "fungate"
          }
        ],
        "sentences": [
          {
            "target": "Ewe kijakazi nakutuma, ukatumike: kamwambie mama, mwana muinga amelimuka, afanye mkate, katikati tupa aike.",
            "source": "O slave-girl, I send you to be sent: go tell my mother her simple son has grown wise; let her make a loaf and put a file in the middle."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each archaic Kingozi/Kiamu or Kimvita term in Steere (1870, pp. 325–329, 455–483) with its Kiunguja equivalent and meaning:",
            "correctAnswer": "Kititi (Kimvita, p. 325): Sungura (Hare / rabbit)",
            "pairs": [
              {
                "left": "Kititi (Kimvita, p. 325)",
                "right": "Sungura (Hare / rabbit)"
              },
              {
                "left": "Mbwene (Kingozi, pp. 456, 474)",
                "right": "Nimeona (I have seen — archaic -ene perfect)"
              },
              {
                "left": "Tima & Mbasi (Kingozi, pp. 458, 474)",
                "right": "Moyo (Heart) & Rafiki (Friend)"
              },
              {
                "left": "Mja & Mwana (Kingozi, pp. 456, 474)",
                "right": "Mtumwa (Servant/bondsman) & Bibi (Noble lady)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-22",
    "unitNumber": 22,
    "title": "Steere & Madan — Complete Swahili Handbook",
    "description": "Master the complete grammatical, lexical, comparative, epistolary, interlinear, phraseological, and metrological corpus of Bishop Edward Steere & A. C. Madan's 'A Handbook of the Swahili Language, as Spoken at Zanzibar' (4th Ed., SPCK London, 1894, pp. i–xxii, 1–458 [PDF pp. 1–488]).",
    "icon": "Compass",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-steere-1894-part1-taxonomies",
        "title": "Part I Taxonomies",
        "icon": "Layers",
        "description": "Study the specialized cultural and technical vocabularies of Part I: the 26 coconut terms, 8 dhow types, 10 rice varieties, 7 evil spirits, lunar/solar calendars, and 16 dollar fractions.",
        "culturalNote": "Digitized from the University of Toronto Library copy (PL 8702 S724 1894, inscribed 'CHUO CHA KISWAHILI'), the 1894 Fourth Edition preserves manuscript marginalia on p. 6 (Arabic ligature امغزف for the Kilwa letter amekufa vs. amevuka), p. 429, and p. 453.",
        "words": [
          {
            "target": "upunga → kidaka → kitale → dafu → koroma → nazi → joya → mbata (pp. 33–34)",
            "source": "The 8 maturation stages of the coconut: flower-embryo → tiny nut → half-grown →",
            "pronunciation": "upunga-kidaka-kitale-dafu"
          },
          {
            "target": "Bágala (Bughala)",
            "source": "Large two-masted Arab dhow with mizzenmast (mlingote wa kalmi)",
            "pronunciation": "bágala"
          },
          {
            "target": "Awesia",
            "source": "Large lateen-rigged Arab dhow",
            "pronunciation": "awesia"
          },
          {
            "target": "Bora kupata",
            "source": "Better to get something than nothing",
            "pronunciation": "bora-kupata"
          },
          {
            "target": "Siku a mwaka",
            "source": "Kigunzi",
            "pronunciation": "siku-a-mwaka"
          },
          {
            "target": "Daakuu",
            "source": "2:30 A.M.",
            "pronunciation": "daakuu"
          },
          {
            "target": "Nuss ya themuni",
            "source": "1/16",
            "pronunciation": "nuss-ya-themuni"
          },
          {
            "target": "Zerenge",
            "source": "1/5",
            "pronunciation": "zerenge"
          },
          {
            "target": "Robo",
            "source": "1/4",
            "pronunciation": "robo"
          },
          {
            "target": "Nuss",
            "source": "1/2",
            "pronunciation": "nuss"
          },
          {
            "target": "Kassa robo",
            "source": "3/4",
            "pronunciation": "kassa-robo"
          },
          {
            "target": "Kassa themuni",
            "source": "7/8",
            "pronunciation": "kassa-themuni"
          },
          {
            "target": "Kassa nuss ya themuni",
            "source": "Fifteen-sixteenths (15/16)",
            "pronunciation": "kassa-nuss-ya-themuni"
          }
        ],
        "sentences": [
          {
            "target": "Kesho na kesho ni madanganya, ao ni makatazanya. — Si madanganya wala si makatazanya, ni mazuizanya.",
            "source": "To-morrow and to-morrow are deceivers, or are they forbidders? — They are not deceivers nor forbidders, they are hinderers."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each dollar fraction or time division in Steere & Madan (1894, pp. 75–77, 93) with its exact meaning:",
            "correctAnswer": "Nuss ya themuni & Kassa nuss ya themuni (p. 93): 1/16 of a dollar & 15/16 of a dollar ('less 1/16')",
            "pairs": [
              {
                "left": "Nuss ya themuni & Kassa nuss ya themuni (p. 93)",
                "right": "1/16 of a dollar & 15/16 of a dollar ('less 1/16')"
              },
              {
                "left": "Themuni (Ze'mni) & Zerenge (p. 93)",
                "right": "1/8 of a dollar & 1/5 of a dollar"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-steere-1894-part2-kanzu-mita",
        "title": "Part II Lexicon & Comparative Tables",
        "icon": "MapPin",
        "description": "Master the 9-language Bantu prefix table (p. 234), dialect sound correspondences (p. 243), the 18 named parts of a man's Kanzu (p. 299), and all 41 named Mita of Zanzibar Town (pp. 346–347).",
        "words": [
          {
            "target": "Badani",
            "source": "Kimo",
            "pronunciation": "badani"
          },
          {
            "target": "Kazi ya shingo",
            "source": "Tiki, Mrera, Viboko, Vinara",
            "pronunciation": "kazi-ya-shingo"
          },
          {
            "target": "Mjuzi",
            "source": "shararaji",
            "pronunciation": "mjuzi"
          },
          {
            "target": "Vipaji",
            "source": "viguu",
            "pronunciation": "vipaji"
          },
          {
            "target": "Kanzu ya ziki",
            "source": "White robe with narrow red-and-white neck braid",
            "pronunciation": "kanzu-ya-ziki"
          },
          {
            "target": "30 Peninsula Mita of Zanzibar Town: Shangani, Baghani, Gerezani",
            "source": "All 30 named quarters (Mita) on the Stone Town peninsula of Zanzibar documented",
            "pronunciation": "30-peninsula-mita-of"
          },
          {
            "target": "11 Ng'ambo Mita Across the Creek: Ng'ambo, Mchangani, Gulioni, Kwa",
            "source": "All 11 named quarters (Mita) on the other side of the creek at Ng'ambo in Zanzibar Town",
            "pronunciation": "11-ng'ambo-mita-across"
          },
          {
            "target": "Zanzibar ch = t (M.)",
            "source": "Steere's Coastal Dialect Sound-Correspondence Table linking Zanzibar (Kiunguja)",
            "pronunciation": "za-nzi-bar / mo-mba-sa / la-mu / me-ri-ma / pa-tta / o-zi"
          }
        ],
        "sentences": [
          {
            "target": "Kooo! — Mwigo! — Kooo! — Niagulie! — Kooo! — Kwema nendako? — Kooo!",
            "source": "Kooo! — You mwigo! — Kooo! — Prophesy for me! — Kooo! — Is it good where I am going? — Kooo!"
          }
        ]
      },
      {
        "id": "swahili-steere-1894-appendices-1-to-5",
        "title": "Appendices I",
        "icon": "Compass",
        "description": "Master Johari's 52 Merima Kinyume specimens (pp. 425–426), the 4 letters/poems (pp. 427–429), the interlinear tale of Sinébar (pp. 431–442), the 197 phrases (pp. 443–453), and Appendix V's weights, measures, and 32-Point Compass (pp. 455–458).",
        "words": [
          {
            "target": "Ng'ombe → Mbeng'o",
            "source": "Johari's 52 verbatim Merima-dialect Kinyume syllable-inversion pairs",
            "pronunciation": "ng'ombe-mbeng'o"
          },
          {
            "target": "Risala enda kwa hima / Kwa Edward Istira... (16 lines, p. 428)",
            "source": "16-line poetic epistle to Edward Steere & Pemba–Mombasa quatrain (Appendix II)",
            "pronunciation": "risala-enda-kwa-hima"
          },
          {
            "target": "47 dollars (reale) = 100 rupees (rupia)",
            "source": "Appendix V currency scale, walking-hour distances in Zanzibar, and regional",
            "pronunciation": "47-dollars-100-rupees"
          },
          {
            "target": "32-Point Compass (p. 458): North = Jaa",
            "source": "All 32 points of the Zanzibar mariner's star-compass in Appendix V",
            "pronunciation": "32-point-compass-north-jaa"
          }
        ],
        "sentences": [
          {
            "target": "Unayo haja tena? — Sina haja ila haja yangu uwe na afya. / Haja yangu ya kuishi wewe sana na furaha.",
            "source": "Is there anything else you want? — I want nothing save that I wish you health. / What I want is that you may live long and happily."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each bearing from the 32-Point Compass on p. 458 of Steere & Madan (1894) with its exact Swahili star-name:",
            "correctAnswer": "N. by E. / N.N.E. / N.E. by N. / N.E. (p. 458): Faragadi Matlai / Nash Matlai / Nagr Matlai / Luagr Matlai",
            "pairs": [
              {
                "left": "N. by E. / N.N.E. / N.E. by N. / N.E. (p. 458)",
                "right": "Faragadi Matlai / Nash Matlai / Nagr Matlai / Luagr Matlai"
              },
              {
                "left": "N.E. by E. / E.N.E. / E. by N. (p. 458)",
                "right": "Dayabu Matlai / Semak Matlai / Seria Matlai"
              },
              {
                "left": "E. by S. / E.S.E. / S.E. by E. / S.E. (p. 458)",
                "right": "Sosa Matlai / Tiri Matlai / Lakadiri Matlai / Lakarabu Matlai"
              },
              {
                "left": "S.E. by S. / S.S.E. / S. by E. / South (p. 458)",
                "right": "Hamareni Matlai / Seheli Matlai / Sonoobari Matlai / Kutubu"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-23",
    "unitNumber": 23,
    "title": "Mrs. F. Burt & Rev. W. E. Taylor — Mombasa (Ki-Mvita)",
    "description": "Master the complete Mombasa (Ki-Mvita) Swahili grammar, Rev. W. E. Taylor's Dialect Tables I–IV & Phonetic Exercises 1–21, all 21 Daily-Life Studies, 10 Noun Classes (including Class VI Monster Class), the 23-form kufunga derivative table, Mombasa Money/Weights/Measures, the 3 Mombasa Letters of A.H. 1324 (1906 CE), Synonym Groups, and all 44 Aspirated/Dental Homonym Groups from Mrs. F. Burt's 'Swahili Grammar and Vocabulary' (SPCK London, 1910).",
    "icon": "BookOpen",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-burt-1910-taylor-dialects-phonetics-21",
        "title": "Rev. W. E. Taylor's Dialect Tables I",
        "icon": "Volume2",
        "description": "Compare Southern (Ki-Unguja, Ki-P'emba, Ki-Mrima), Central (Ki-Mvita), and Northern (Ki-Amu, Ki-Pate, Ki-Gunya, Ki-ti-kuu) Swahili across Tables I–IV and master Taylor's 21 graded ear/voice exercises.",
        "culturalNote": "Drawn up by Mrs. F. Burt (signed A. E. B., Bourne End Parsonage, Boxmoor, 1910) on the Berlitz method, with Part I and the Syllabary contributed by Rev. W. E. Taylor, M.A. (author of African Aphorisms, 1891, and Giryama Vocabulary and Collections, 1891).",
        "words": [
          {
            "target": "ninakuja (Southern: Ki-Unguja) / naja (Central: Ki-Mvita) / niyao",
            "source": "I am coming (Table III Three-Way Dialect Divergence, p. 9)",
            "pronunciation": "ni-na-ku-ja / na-ja / ni-ya-o"
          },
          {
            "target": "nawapenda (Central & Northern) vs. ninakupendani",
            "source": "I love you [plural] (Table II Central & Northern vs. Southern, p. 9)",
            "pronunciation": "na-wa-pe-nda / ni-na-ku-pe-nda-ni"
          },
          {
            "target": "-akwe (Central: Ki-Mvita) vs. -ake (Southern & Northern, p. 9)",
            "source": "His / Her / Its",
            "pronunciation": "a-kwe / a-ke"
          },
          {
            "target": "au, ai!, oa, ua, aoa, aua, aoe, aue, aoae, uuao, uuae, auuae, uuuao",
            "source": "Exercise 4 All-Vowel Swahili Words",
            "pronunciation": "a-u / o-a / u-a / a-o-a / a-u-a / a-u-u-a-e"
          },
          {
            "target": "’a ’a",
            "source": "No!",
            "pronunciation": "a-a"
          },
          {
            "target": "’a ’a ’a",
            "source": "Not at all!",
            "pronunciation": "a-a-a"
          },
          {
            "target": "Mng’upe",
            "source": "Coastal marine fish species",
            "pronunciation": "mng-upe"
          }
        ],
        "sentences": [
          {
            "target": "Tua mto wako mtoni; mti huu utue na tini. Namtuma kutuma; natumia atumacho. (Exercises 19–20, p. 20)",
            "source": "Set down your pillow (mto, dental) by the river (mtoni, cerebral); let this tree settle down below. I send him to earn; I use what he earns."
          },
          {
            "target": "Kuthani, -dhani, dhambi, thalatha (Central Ki-Mvita) vs. kuzani, ramazani, zambi, selasa (Southern & Northern, Table IV, p. 9)",
            "source": "Central Swahili preserves true Arabic interdentals whereas Southern and Northern replace them with Z and S."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each item from Rev. W. E. Taylor's Part I (pp. 7–21) with its exact description:",
            "correctAnswer": "Ki-P'emba on the Emerald Isle (pp. 7–8): Supplies half the clove crop and substitutes 'fy' for 'sh'",
            "pairs": [
              {
                "left": "Ki-P'emba on the Emerald Isle (pp. 7–8)",
                "right": "Supplies half the clove crop and substitutes 'fy' for 'sh'"
              },
              {
                "left": "4 Arabic Words with Double 'll' (Exercise 12, p. 17)",
                "right": "Allahu, illa, illi, killa (or kulla)"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-burt-1910-studies-grammar-paradigms-21",
        "title": "Studies I–XXI, 10 Noun Classes (incl. Class VI Monster Class)",
        "icon": "Layers",
        "description": "Master the 21 thematic studies of daily Mombasa life, the 10-class concord system, contracted possessives, nasal-aspiration sound laws, and the 23 derivative forms of kufunga.",
        "culturalNote": "Studies I–XXI (pp. 24–131) and their complete bidirectional Exercise Keys (pp. 132–151) cover greetings, servants, teachers, house, table, kitchen, town, friendship, dress, market, shop, body, river/shore, plantation, safari, weather/time, up-country, animals, hospital, school, and religion.",
        "words": [
          {
            "target": "nyonge (pl. minyonge)",
            "source": "Lowly / humble person or thing",
            "pronunciation": "nyonge"
          },
          {
            "target": "nsha, unsha, ansha, tunsha, mnsha, wansha (p. 39 fn. 1)",
            "source": "Idiomatic Mombasa contracted perfect of kwisha",
            "pronunciation": "n-sha / u-n-sha / a-n-sha / tu-n-sha / m-n-sha / wa-n-sha"
          },
          {
            "target": "kupiga mstari, k’engele, ch’apa, k’elele, t’eke, fundo, magot’i, pasi",
            "source": "12 Idioms with kupiga",
            "pronunciation": "kupiga-mstari"
          },
          {
            "target": "shambani pa (near) / shambani kwa (to/at) / shambani mwa (inside)",
            "source": "Four-Way Locative Concord Distinction (Classes VIII PA, IX KU, and X MU)",
            "pronunciation": "sha-mba-ni pa / kwa / mwa / ma-sha-mba-ni mwa"
          },
          {
            "target": "kit’uche, jambole, vituvye, kufakwe, watumwaze",
            "source": "Contracted Enclitic Possessive Suffixes across Classes I–X",
            "pronunciation": "kituche"
          },
          {
            "target": "mbwa (ni wa)",
            "source": "He/she is of (Mombasa contracted copula)",
            "pronunciation": "mbwa"
          },
          {
            "target": "nda (ni ya)",
            "source": "It is of (Mombasa contracted copula)",
            "pronunciation": "nda"
          }
        ],
        "sentences": [
          {
            "target": "Zina Salehe [funguo]! (Study VII, p. 58 Note III)",
            "source": "Salehe has the keys! (emphatic subject-object inversion)."
          },
          {
            "target": "Mwana umleavyo, ndivyo akuavyo!",
            "source": "As you bring up a child, so he grows!"
          }
        ]
      },
      {
        "id": "swahili-burt-1910-letters-measures-synonyms-homonyms-21",
        "title": "Mombasa Money & Measures, 3 Letters (A.H. 1324), Calendar",
        "icon": "FileText",
        "description": "Master Mombasa coinage & capacity tables, the 3 letters of Rabiu l-Awwal 1324 A.H. (1906 CE), monsoon seasons, 14 synonym groups, and all 44 minimal-pair homonym groups.",
        "culturalNote": "Pages 154–161 preserve three authentic Mombasa letters dated Rabiu l-Awwal 1324 A.H. (1906 CE), the coastal monsoon calendar, 14 classified synonym groups, and 44 homonym groups contrasting aspiration and dental vs. cerebral stops.",
        "words": [
          {
            "target": "Roboo ya zamani (32 pice = ¼ riale) vs. Roboo rupia (16 pice)",
            "source": "Mombasa Riale vs. Rupee Quarter and Eighth Coinage Distinctions",
            "pronunciation": "ro-bo-o ya za-ma-ni / ro-bo-o ru-pi-a / thu-mu-ni"
          },
          {
            "target": "1 Kisaga",
            "source": "2 vibaba",
            "pronunciation": "1-kisaga"
          },
          {
            "target": "1 Pishi",
            "source": "2 visaga = 4 vibaba",
            "pronunciation": "1-pishi"
          },
          {
            "target": "1 Jizila",
            "source": "60 pishi",
            "pronunciation": "1-jizila"
          },
          {
            "target": "1 Ratili",
            "source": "1 lb.",
            "pronunciation": "1-ratili"
          },
          {
            "target": "Mani",
            "source": "Weight measure of 3 pounds (ratili)",
            "pronunciation": "ma-ni"
          },
          {
            "target": "Farasila",
            "source": "Weight measure of 36 pounds (ratili)",
            "pronunciation": "fa-ra-si-la"
          },
          {
            "target": "Walio mbali huonana kwa barua, na barua ni nusu ya kuonana",
            "source": "Those who are far apart see each other by letter, and a letter is half of meeting",
            "pronunciation": "wa-li-o m-ba-li hu-o-na-na kwa ba-ru-a"
          },
          {
            "target": "Kasikazi/Musimu (Nov.–Mar.), Maleleji (calms), Kusi (Apr.–Sept.)",
            "source": "Mombasa Monsoon Winds and Three Rainy Seasons (Swahili Calendar, pp. 157–158)",
            "pronunciation": "kasikazi"
          },
          {
            "target": "k’aa (crab) / kaa (ember) / kukaa (stay)",
            "source": "Minimal Pairs from the 44 Aspirated and Dental/Cerebral Homonym Groups (pp. 159–161)",
            "pronunciation": "k’a-a / ka-a / k’o-fi / ko-fi / m-t’u / m-tu / n-t’i / n-ti"
          },
          {
            "target": "Fungat’o haiumizi mkono",
            "source": "A firm clasp (or seven-day wedding feast) does not hurt the hand",
            "pronunciation": "fungato-haiumizi-mkono"
          },
          {
            "target": "Kisiwani",
            "source": "On the island (local name for Mombasa Island)",
            "pronunciation": "kisiwani"
          },
          {
            "target": "Kisauni",
            "source": "Mainland settlement across the creek from Mombasa",
            "pronunciation": "kisauni"
          },
          {
            "target": "Ughaibu",
            "source": "Distant region; spiced betel-chewing mixture",
            "pronunciation": "ughaibu"
          }
        ],
        "sentences": [
          {
            "target": "Kulla neno aletalo Mngu ndiyo kheri (Letter No. 2, p. 155, on the earthquake in Ulaya ya Paris killing watu alifu tano)",
            "source": "Every matter that God sends is for the best."
          },
          {
            "target": "Ko*t*o (mason's trowel)",
            "source": "Five-way minimal set contrasting aspiration (k' vs. k) and dental (*t*) vs. cerebral (t) articulation in Mombasa Swahili."
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-24",
    "unitNumber": 24,
    "title": "A. C. Madan — Swahili-English Dictionary",
    "description": "Master the complete grammatical, morphological, etymological, and ethnographic corpus of A. C. Madan's 'Swahili-English Dictionary' (Clarendon Press Oxford, 1903, pp. i–xix, 1–442): the 'Bantize rather than Arabize' principle & asterisk (*) loanword system, the 8 Principal Verb-Stem Forms (including 6 Causal & 5 Reciprocal varieties), Conspectus II of the 8 Noun Declensions (D 1–D 8), encyclopedic cultural taxonomies, and 65+ embedded proverbs and riddles.",
    "icon": "BookOpen",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-madan-1903-verb-stems-conspectus-22",
        "title": "Preface, 8 Principal Verb-Stem Forms",
        "icon": "Layers",
        "description": "Master Madan's 'Bantize rather than Arabize' principle, the asterisk (*) loanword convention, the 8 Principal Forms of Verb-Stem, and Conspectus II of the 8 Noun Declensions.",
        "culturalNote": "Published at the Clarendon Press, Oxford in July 1903 by Arthur Cornwallis Madan, M.A., Student of Christ Church, Oxford (UC Berkeley copy PL 8703 / M33 / 1903 / MAIN), this dictionary ranks Swahili among the twelve great languages of the modern world.",
        "words": [
          {
            "target": "1. Primary (Pr.)",
            "source": "The 8 Principal Forms of Verb-Stem in Madan (1903, Introduction, pp. xi–xiii)",
            "pronunciation": "1-primary"
          },
          {
            "target": "6 Varieties of Causal (Cs., pp. xii–xiii): 1. Simple (tazamisha)",
            "source": "Make look",
            "pronunciation": "6-varieties-of-causal"
          },
          {
            "target": "5 Aspects of Reciprocal (Rp. -an-, p. xiii): 1. Reciprocal (pigana)",
            "source": "Fight each other",
            "pronunciation": "pi-ga-na / to-ka-na na / e-nda-na / shi-ka-na / o-ne-ka-na"
          },
          {
            "target": "Decl. 1 (m/wa): mtu mwema huyu ampenda",
            "source": "Conspectus II: Complete 8-Declension Concord Table of the Zanzibar Swahili Noun",
            "pronunciation": "decl-1-mtu-mwema"
          },
          {
            "target": "A-aa vs. Aa-a",
            "source": "Intonation & pitch-lengthening rules and the three primary Bantu colour roots",
            "pronunciation": "a-aa / aa-a / ku-le-e-e / e-ku-ndu / e-u-pe / e-u-si"
          }
        ],
        "sentences": [
          {
            "target": "Njia hii yaendeka / yaendekana (Introduction, p. xii)",
            "source": "This road is passable / practicable (Neuter -ka / -kana)."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each Declension in Madan's Conspectus II (1903, pp. xvi–xvii) with its exact model concord sentence:",
            "correctAnswer": "Decl. 1 (Living beings, m/wa) & Decl. 2 (Plants, m/mi): mtu mwema huyu ampenda & mti mdogo huu waota",
            "pairs": [
              {
                "left": "Decl. 1 (Living beings, m/wa) & Decl. 2 (Plants, m/mi)",
                "right": "mtu mwema huyu ampenda & mti mdogo huu waota"
              },
              {
                "left": "Decl. 7 (Local mahali, pa) & Decl. 8 (Verbal, ku, kw)",
                "right": "mahali pembamba hapa pafaa & kufa kutukufu huku kwasifiwa"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-madan-1903-taxonomies-culture-22",
        "title": "Encyclopedic Cultural Taxonomies",
        "icon": "Compass",
        "description": "Explore Madan's classified articles on gifts/bribes (*Bakshishi), sticks (Bakora), guns (*Bunduki), dhows (Chombo), ropes (Kamba), ordeals (Kiapo), looms (Kitanda cha mfumi), doors (Mlango), and English loans (Manowari).",
        "words": [
          {
            "target": "29 Gift/Present/Bribe/Fee Terms under *Bakshishi (p. 21): zawadi, tunu",
            "source": "Complete classification of gifts, keepsakes, hospitality offerings, wedding/work",
            "pronunciation": "29-gift"
          },
          {
            "target": "ya mrao",
            "source": "matchlock",
            "pronunciation": "ya-mrao"
          },
          {
            "target": "ya viasi",
            "source": "cartridge gun",
            "pronunciation": "ya-viasi"
          },
          {
            "target": "10 Dhow Ropes & 6 Binding Fibres under Kamba (p. 128): amari, baraji",
            "source": "Cable, sheet, tie, bolt-rope, halyard, tackle, lee-sheet, tack-rope, tow-rope",
            "pronunciation": "10-dhow-ropes-6"
          },
          {
            "target": "cha mkate",
            "source": "dry bread",
            "pronunciation": "cha-mkate"
          },
          {
            "target": "cha sindano",
            "source": "red-hot needle through lip/ear",
            "pronunciation": "cha-sindano"
          },
          {
            "target": "cha mibano",
            "source": "wooden splints on temples",
            "pronunciation": "cha-mibano"
          },
          {
            "target": "cha mchele",
            "source": "chewing dry rice",
            "pronunciation": "cha-mchele"
          },
          {
            "target": "cha kibao",
            "source": "bread with Koran ink",
            "pronunciation": "cha-kibao"
          },
          {
            "target": "Kitanda cha mfumi (Loom, pp. 165–166): mdoshi (treadle), faraka/mfariki",
            "source": "Complete technical anatomy of the Zanzibari weaver's loom, bow-drill, water-pipe",
            "pronunciation": "kitanda-cha-mfumi-mdoshi"
          },
          {
            "target": "19 English Loanwords under Manowari (p. 207): manowari, boi, kala",
            "source": "Early English loanwords established in Zanzibar Swahili by 1903",
            "pronunciation": "19-english-loanwords-under"
          }
        ],
        "sentences": [
          {
            "target": "Kimbunga kikaangusha minazi na majumba yote (s.v. Kimbunga, pp. 153–154)",
            "source": "The typhoon  threw down all the coconut trees and houses."
          }
        ]
      },
      {
        "id": "swahili-madan-1903-proverbs-riddles-22",
        "title": "65+ Embedded Proverbs, Riddles & Semantic Contrasts in Madan",
        "icon": "Award",
        "description": "Study the 65+ Swahili proverbs, riddles (Vitendawili), and semantic distinctions (-kuu vs. -kubwa, *Badili vs. Geuza, *Maisha vs. Umri vs. Uzima vs. Roho) embedded across Madan (1903).",
        "words": [
          {
            "target": "Kidole kimoja hakivunji chawa",
            "source": "One finger alone cannot crush a louse",
            "pronunciation": "kidole-kimoja-hakivunji-chawa"
          },
          {
            "target": "Elimu ndio mwanga uongozao",
            "source": "Knowledge is the light that guides",
            "pronunciation": "elimu-ndio-mwanga-uongozao"
          },
          {
            "target": "Kufarakana hakuvunji kujuana",
            "source": "Parting does not end mutual acquaintance",
            "pronunciation": "kufarakana-hakuvunji-kujuana"
          },
          {
            "target": "Fumbo humfumba mjinga",
            "source": "A riddle mystifies only the unobservant",
            "pronunciation": "fumbo-humfumba-mjinga"
          },
          {
            "target": "Konzi ya maji haifumbatiki",
            "source": "A fistful of water cannot be held tight",
            "pronunciation": "konzi-ya-maji-haifumbatiki"
          },
          {
            "target": "Liandikwalo halifutiki",
            "source": "What is written cannot be erased",
            "pronunciation": "liandikwalo-halifutiki"
          },
          {
            "target": "Juhudi si pato",
            "source": "Effort alone does not guarantee gain",
            "pronunciation": "juhudi-si-pato"
          },
          {
            "target": "Ukukuu wa kamba si upya wa ukambaa & Mkamia maji hayanywi (p. 128)",
            "source": "Proverbs in Section K of Madan (1903, pp. 128–190)",
            "pronunciation": "ukukuu-wa-kamba-si"
          },
          {
            "target": "Haulambwi mkono mtupu",
            "source": "An empty hand is not licked",
            "pronunciation": "haulambwi-mkono-mtupu"
          },
          {
            "target": "Mapenzi hayana macho",
            "source": "Love has no eyes (Love is blind)",
            "pronunciation": "mapenzi-hayana-macho"
          },
          {
            "target": "Siogopi unene wa mbuyu",
            "source": "I do not fear the thickness of the baobab tree",
            "pronunciation": "siogopi-unene-wa-mbuyu"
          },
          {
            "target": "Mchuzi ni maji",
            "source": "Gravy is seasoned water",
            "pronunciation": "mchuzi-ni-maji"
          },
          {
            "target": "Mfinyanzi hulia gae",
            "source": "The potter eats from a broken potsherd",
            "pronunciation": "mfinyanzi-hulia-gae"
          },
          {
            "target": "Mkata hana kinyongo",
            "source": "A poor person cannot afford false pride",
            "pronunciation": "mkata-hana-kinyongo"
          },
          {
            "target": "Mlimwengu ni mwanawe",
            "source": "A person of the world is known through their child",
            "pronunciation": "mlimwengu-ni-mwanawe"
          }
        ],
        "sentences": [
          {
            "target": "Kitendawili! — Tega! Nyumba yangu kubwa, haina taa. — Kaburi",
            "source": "Here's a riddle! — Out with it! My house is large, but has no lamp. — The grave."
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-25",
    "unitNumber": 25,
    "title": "Mohamed Mwamzandi — The Pragmatics of Swahili Relative",
    "description": "Master all 20 pages (pp. 227–246) of Mohamed Mwamzandi's 2022 study 'The pragmatics of Swahili relative clauses' (in Sibanda, Ngonyani, Choti & Biersteker, eds., Language Science Press): the 3 RC strategies (tensed, amba, general), TAM & subject-postposing rules, Russell's (1992) disambiguation test, the 440-RC Helsinki Corpus of Swahili study, Figure 1 (restrictiveness), Table 1 (word length & adverbial fronting), Table 2 (grammatical role & continue vs. shift topic transitions), all 32 interlinear examples, 20 abbreviations, and 27 references.",
    "icon": "BookOpen",
    "color": "#10B981",
    "skills": [
      {
        "id": "swahili-mwamzandi-2022-three-relatives-morphosyntax-23",
        "title": "Three RC Strategies, Subject Postposing, Disambiguation & Complexity",
        "icon": "Layers",
        "description": "Learn the morphosyntactic structure of Swahili tensed, amba, and general relative clauses, TAM constraints (Keach 1985), subject postposing in object RCs, Russell's (1992) disambiguation account, and Keenan & Comrie's (1977) Accessibility Hierarchy across Examples (1)–(13).",
        "words": [
          {
            "target": "(1) Askari [a-li-ye-ki-ongoza kikosi] (Tensed RC)",
            "source": "The policeman who led the squad (Tensed & amba RCs)",
            "pronunciation": "askari"
          },
          {
            "target": "TAM Restriction (Keach 1985, p. 230): Tensed RCs only with past li",
            "source": "Morphosyntactic distribution of tensed vs. amba relative markers across Swahili",
            "pronunciation": "li / na / ta-ka / si / a-mba"
          },
          {
            "target": "(6) Kikosi [amba-cho Kisaka a-li-ki-ongoza] (preverbal subject) vs. (7)",
            "source": "The squad which Kisaka led",
            "pronunciation": "kikosi-vs"
          },
          {
            "target": "(8) Mwivi [a-li-ye-mw-ona mtoto] (ambiguous SVO/OVS)",
            "source": "The thief who saw the child / whom the child saw (Ex. 8)",
            "pronunciation": "mwivi"
          },
          {
            "target": "(12) Masanduku [amba-yo sisi watu wa-wili au wa-tatu ha-tu-wez-i]₁",
            "source": "Boxes which two or three of us cannot lift",
            "pronunciation": "masanduku"
          },
          {
            "target": "kikosi",
            "source": "Squad / unit",
            "pronunciation": "ki-ko-si"
          }
        ],
        "sentences": [
          {
            "target": "Askari [a-li-ye-ki-ongoza kikosi]",
            "source": "The policeman who led the squad."
          }
        ]
      },
      {
        "id": "swahili-mwamzandi-2022-corpus-restrictiveness-length-23",
        "title": "Helsinki Corpus Methodology, Restrictiveness (Figure 1) & RC",
        "icon": "BarChart2",
        "description": "Study Mwamzandi's (2022, pp. 233–238) methodology using the 25M-word Helsinki Corpus of Swahili (HCS 2.0) and Korp, the Chi-squared distribution of restrictive vs. non-restrictive RCs (Figure 1), ANOVA word-length results (Table 1), and fronted adverbial phrases across Examples (14)–(24).",
        "words": [
          {
            "target": "Helsinki Corpus of Swahili 2.0: N = 440 RCs",
            "source": "Primary corpus dataset of mid-20th-century to 2015 Swahili newspaper, literary",
            "pronunciation": "he-lsi-nki co-rpus / ko-rp"
          },
          {
            "target": "ambaye",
            "source": "Who",
            "pronunciation": "a-mba-ye"
          },
          {
            "target": "ambao",
            "source": "which (analytic relative pronoun)",
            "pronunciation": "a-mba-ye"
          },
          {
            "target": "(14) Bwana yule [a-na-ye-sinzia] (p. 234)",
            "source": "That man (over there) who is dozing (tensed restrictive)",
            "pronunciation": "bwana-yule"
          },
          {
            "target": "(17) A-li-kuwa a-me-va-li-a rubega nyeupe [amba-yo i-li-anza ku-poteza",
            "source": "He was wearing a white cloak that had started to lose its whiteness (amba non-restrictive)",
            "pronunciation": "a-li-kuwa-a-me-va-li-a-rubega-nyeupe"
          },
          {
            "target": "wananchi",
            "source": "Citizens / people of the nation",
            "pronunciation": "wa-na-nchi"
          },
          {
            "target": "(21) Wa-po wananchi [amba-o kwa makusudi wa-na-ziba mifereji] vs. (22)",
            "source": "There are some citizens who deliberately block taps",
            "pronunciation": "wa-po-wananchi-vs"
          }
        ],
        "sentences": [
          {
            "target": "A-li-kuwa a-me-va-li-a rubega nyeupe [amba-yo i-li-anza ku-poteza weupe wake]",
            "source": "He was wearing a white cloak that had started to lose its whiteness."
          }
        ]
      },
      {
        "id": "swahili-mwamzandi-2022-topic-transitions-table2-23",
        "title": "Information Structure, Grammatical Role & Continue vs. Shift",
        "icon": "Compass",
        "description": "Master Section 4.3 and Section 5 of Mwamzandi (2022, pp. 238–246): Table 2 (Head Noun grammatical role × topic status), continue transitions (HN = Subj, topic) vs. shift transitions (HN = Obj/PP, topic), Examples (25a–c)–(32), and all 27 scholarly references.",
        "words": [
          {
            "target": "(25a) Nyumba [a-li-yo-kaa Beneti]. (25b) I-li-kuwa ya Kiswahili kabisa",
            "source": "The house which Beneti stayed. It was a typical Swahili house, it looked old",
            "pronunciation": "nyumba-i-li-kuwa-ya-kiswahili"
          },
          {
            "target": "waandishi",
            "source": "Writers / authors",
            "pronunciation": "wa-a-ndi-shi"
          },
          {
            "target": "(27) Waandishi [wa-li-o-fuata] wa-me-ach-an-a na m-tindo huu",
            "source": "The writers who followed have abandoned this style (of writing)",
            "pronunciation": "waandishi-wa-me-ach-an-a-na-m-tindo"
          },
          {
            "target": "(29) Bali Rehema a-li-po-nyanyua macho ku-m-tazama Bikiza [a-li-ye-leta",
            "source": "But when Rehema raised her eyes to look at Bikiza who brought the message of death...",
            "pronunciation": "bali-rehema-a-li-po-nyanyua-macho"
          },
          {
            "target": "(31) A-li-ji-ona katika nyumba kubwa sana i-li-yo-kuwa n-zuri ajabu",
            "source": "He found himself in a very big house that was surprisingly beautiful",
            "pronunciation": "a-li-ji-ona-katika-nyumba-kubwa"
          }
        ],
        "sentences": [
          {
            "target": "Waandishi [wa-li-o-fuata] wa-me-ach-an-a na m-tindo huu",
            "source": "The writers who followed have abandoned this style (of writing)."
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-26",
    "unitNumber": 26,
    "title": "Beech 'Aids to the Study of Ki-Swahili' — Swahili",
    "description": "Master Mervyn W. H. Beech's 1918 'Aids to the Study of Ki-Swahili' line by line: Preface & Three Stages of Swahili Traditions (Thelatha Taifa, Tissa Taifa, Ki-Jezirati, Wa-ungwana vs. Mzalia), Study I (28-Letter Ajami Alphabet, 16 Letters, 6 Ki-Amu terms & the 4-stream Ki-Jizirat story), Study II (Banawasi, 8-Point Wind Compass, 7 Uses of -ka-, Past Tense Note & Fathili za Punda ni Mashuzi), Study III (67 Mafumbo, 4 Enigmas/Tambo & 30 Kitendawili), and Study IV (Magic in Pemba: Ngoma ya Pepo, Kikoa kia Wachawi & Sihiri).",
    "icon": "BookOpen",
    "color": "#0F766E",
    "skills": [
      {
        "id": "swahili-u24-m1-traditions-and-study1-ajami-letters",
        "title": "Swahili Traditions & Study I",
        "icon": "FileText",
        "description": "Learn the Three Stages of Swahili ethnogenesis, Mombasa's Thelatha & Tissa Taifa, the 28-letter Ajami alphabet, Letters 1–16 (incl. 6 Ki-Amu coconut-toddy terms), and 'Asiye hurumiwa ni Mngu usimhurumie'.",
        "words": [
          {
            "target": "Preface: Higher Standard Exam",
            "source": "Compiler's Preface, examination context, Ovid quotation, and five named Arab/Swahili",
            "pronunciation": "preface-higher-standard-exam"
          },
          {
            "target": "Waraka wa Kiarabu",
            "source": "Classical Swahili-Arabic manuscript letter",
            "pronunciation": "wa-ra-ka"
          },
          {
            "target": "masikini",
            "source": "freed in expiation of sins",
            "pronunciation": "masikini"
          },
          {
            "target": "Wa-ungwana",
            "source": "sg. Mu-ungwana < ku-ungana",
            "pronunciation": "wa-ungwana"
          },
          {
            "target": "28-Letter Alphabet (p. 5): Alifu, Bei, Tei, Thei, Jîmu, Hhei, Khei",
            "source": "Ki-Swahili 28-letter Ajami alphabet, left-to-right Arabic numerals, 10 epistolary",
            "pronunciation": "a-li-fu bei tei thei ji-mu / l-ha-thwa-rat l-je-nab l-mo-heb"
          },
          {
            "target": "Letters 1–16 (pp. 12–43) & 6 Ki-Amu Terms in Letter 16",
            "source": "All 16 original administrative/legal/personal letters, the 6 Lamu coconut-toddy",
            "pronunciation": "letters-116-6-ki-amu"
          }
        ],
        "sentences": [
          {
            "target": "Barua ni nussu ya kuonana (Letter 7, p. 25)",
            "source": "A letter is half of meeting face to face."
          }
        ]
      },
      {
        "id": "swahili-u24-m2-study2-banawasi-compass-fathili-za-punda",
        "title": "Study II: 'Banawasi', 8-Point Wind Compass, 7 Uses of -ka-",
        "icon": "Compass",
        "description": "Master the two Ki-Jizirat folktales told by Sharif Hasan bin Aloi of Pemba, their 145 footnotes, the 8-point wind compass (p. 69), the 7 uses of -ka- (p. 59), the Note on Past Tense Infixes (p. 85), and the smithy & time-of-day lexicons (pp. 93–95).",
        "words": [
          {
            "target": "Banawasi",
            "source": "Key vocabulary and idioms from Story 1 ('Banawasi', pp. 58–85)",
            "pronunciation": "banawasi"
          },
          {
            "target": "Kasikazi",
            "source": "North monsoon wind",
            "pronunciation": "ka-si-ka-zi"
          },
          {
            "target": "Kusi",
            "source": "South monsoon wind",
            "pronunciation": "ka-si-ka-zi"
          },
          {
            "target": "Matlai",
            "source": "East wind",
            "pronunciation": "ka-si-ka-zi"
          },
          {
            "target": "7 Uses of Connective -ka- (fn. 59-9): (a) Narrative (akaondoka akaenda)",
            "source": "Seven grammatical functions of the connective -ka- tense (fn. 59-9) and the Note on",
            "pronunciation": "a-ka-o-ndo-ka / n-na-kwe-nda / n-me-kwe-nda / ka-na"
          },
          {
            "target": "sabahe",
            "source": "6:30 a.m.",
            "pronunciation": "sabahe"
          },
          {
            "target": "alasiri",
            "source": "3 p.m.",
            "pronunciation": "alasiri"
          },
          {
            "target": "ahurubu shems",
            "source": "5:30 p.m.",
            "pronunciation": "ahurubu-shems"
          },
          {
            "target": "mangaribi",
            "source": "6 p.m.",
            "pronunciation": "mangaribi"
          },
          {
            "target": "liisha",
            "source": "7:30 p.m.",
            "pronunciation": "liisha"
          },
          {
            "target": "kiwanda",
            "source": "workshop",
            "pronunciation": "kiwanda"
          },
          {
            "target": "kweleo",
            "source": "tongs",
            "pronunciation": "kweleo"
          },
          {
            "target": "nyundo",
            "source": "hammer",
            "pronunciation": "nyundo"
          },
          {
            "target": "kiriba",
            "source": "skin bellows",
            "pronunciation": "kiriba"
          },
          {
            "target": "fuawe",
            "source": "anvil",
            "pronunciation": "fuawe"
          },
          {
            "target": "kalibu",
            "source": "clay nozzle",
            "pronunciation": "kalibu"
          },
          {
            "target": "ruwao",
            "source": "iron stirrup",
            "pronunciation": "ruwao"
          },
          {
            "target": "tindo",
            "source": "chisel",
            "pronunciation": "tindo"
          },
          {
            "target": "kuvukuta",
            "source": "blow bellows",
            "pronunciation": "kuvukuta"
          },
          {
            "target": "mkando",
            "source": "bar of iron/copper",
            "pronunciation": "mkando"
          },
          {
            "target": "chomwe",
            "source": "red-hot iron",
            "pronunciation": "chomwe"
          }
        ],
        "sentences": [
          {
            "target": "Hiyari hushinda utumwa",
            "source": "Freewill overcomes slavery (voluntary service beats forced labour)."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each metallurgical term from Footnote 95-3 of Beech (1918, p. 95) with its exact English meaning:",
            "correctAnswer": "fuawe & kalibu: Anvil & the clay nozzle/tuyere into which the skin bellows (kiriba) are fitted",
            "pairs": [
              {
                "left": "sonara vs. mjua chuma (or mfuaji)",
                "right": "Worker in gold and silver vs. blacksmith (worker in iron)"
              },
              {
                "left": "mkando, chomwe & macheche",
                "right": "Long bar of iron/copper, red-hot iron & flying sparks"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-u24-m3-study3-aphorisms-riddles-and-study4-pemba-magic",
        "title": "Study III: 67 Aphorisms, 4 Enigmas & 30 Kitendawili & Study IV",
        "icon": "Sparkles",
        "description": "Master all 67 Mafumbo, 4 Enigmas/Tambo, 30 Kitendawili, and the bilingual Ki-Jizirat treatise on Ngoma ya Pepo, Kikoa kia Wachawi, and Sihiri charms in Pemba.",
        "words": [
          {
            "target": "Study III Aphorisms: (1) Mpiga la kuanza hunyamaziwa / Mpiga la pili",
            "source": "Representative aphorisms across the 67 numbered Mafumbo in Ki-Jizirat and Ki-Mvita",
            "pronunciation": "study-iii-aphorisms-mpiga"
          },
          {
            "target": "4 Enigmas / Tambo in Ki-Mvita (pp. 126–128): (1) Kinyume: Mbarakita",
            "source": "All four Ki-Mvita Enigmas and Tambo puzzles in Study III (pp. 126–128)",
            "pronunciation": "4-enigmas"
          },
          {
            "target": "7 Ki-Jizirat & 23 Ki-Mvita Kitendawili (pp. 129–132): Ki-Jizirat (1)",
            "source": "Representative riddles across the 7 Ki-Jizirat and 23 Ki-Mvita Kitendawili in Study",
            "pronunciation": "7-ki-jizirat-23-ki-mvita"
          },
          {
            "target": "Study IV §1–§2 (pp. 134–149): Ngoma ya Pepo",
            "source": "Complete terminology of the Pemba Spirit-Dance (Ngoma ya Pepo) and Witches' Sabbath",
            "pronunciation": "study-iv-12-ngoma"
          },
          {
            "target": "Study IV §3–§5 (pp. 150–159): Sihiri Charms",
            "source": "All botanical, astrological, and talismanic Sihiri charms and true Pemba case",
            "pronunciation": "study-iv-35-sihiri"
          }
        ],
        "sentences": [
          {
            "target": "Ewe Ramli we nibainia haki usibaine batili",
            "source": "O Thou Oracle, show me the truth and do not show me falsehood!"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-27",
    "unitNumber": 27,
    "title": "Swahili Reversives & Kenyan Comedy Discourse",
    "description": "Master Deo Ngonyani & Nancy Jumwa Ngowa's (2016, Ch. 14, pp. 255–271) study of Standard Swahili reversives (-u/-o/-ul/-ol & -uk/-ok) at Pwani University (Kilifi) and Martha Michieka & Leonard Muaka's (2016, Ch. 28, pp. 559–576) linguistic analysis of Kenyan comedy from Vitimbi and Redykyulass to Churchill Show.",
    "icon": "BookOpen",
    "color": "#7C3AED",
    "skills": [
      {
        "id": "swahili-payne-2016-26-1-ngonyani-ngowa-reversive",
        "title": "Productivity of the Reversive Extension in Standard Swahili",
        "icon": "RefreshCw",
        "description": "Learn the 4 reversive allomorphs (-u, -o, -ul, -ol), fused stative -uk/-ok, semantic subclasses, and the Pwani University nonce-word and Helsinki Corpus acceptability experiments.",
        "words": [
          {
            "target": "ziba → zibua",
            "source": "block/plug → unblock",
            "pronunciation": "ziba-zibua"
          },
          {
            "target": "choma → chomoa",
            "source": "stick in → pull out",
            "pronunciation": "choma-chomoa"
          },
          {
            "target": "simba → simbua",
            "source": "dig → dig up",
            "pronunciation": "si-mbu-a / ta-nzu-a / ta-tu-a / vu-a / ka-mu-a / me-gu-a"
          },
          {
            "target": "Idiosyncratic & Fossilized: tamba → tambua",
            "source": "recognize, deface, skim",
            "pronunciation": "idiosyncratic-fossilized-tamba-tambua"
          },
          {
            "target": "Pwani Univ. Tests (Tables 1–4): kugola → kugoloa, kupeza → kupezua",
            "source": "Nonce-word coinage test (40 students) and SALAMA / Helsinki Corpus acceptability test",
            "pronunciation": "ku-go-lo-a / ku-pe-zu-a / ku-fa-nyu-a"
          }
        ],
        "sentences": [
          {
            "target": "Fundi a-me-zib-u-a bomba",
            "source": "The plumber has unplugged the pipe."
          }
        ]
      },
      {
        "id": "swahili-payne-2016-26-2-michieka-muaka-kenyan-comedy",
        "title": "Humor, Polysemy & Sheng in Kenyan Comedy",
        "icon": "Smile",
        "description": "Explore the linguistic mechanisms of Kenyan humor across Vitimbi, Redykyulass, and Churchill Show: polysemous punning (wizi wa mabavu), sociophonetic 'shrubbing' (sida, shitikashel), and face-saving strategies.",
        "words": [
          {
            "target": "Vitimbi",
            "source": "Historical evolution of Kenyan television and stand-up comedy from 1980s KBC Vitimbi",
            "pronunciation": "vi-ti-mbi / m-zee o-jwa-ng / ma-ma ka-ya-i / chu-rchi-ll"
          },
          {
            "target": "wizi wa mabavu",
            "source": "Bilingual Swahili–Meru polysemy pun and acronym incongruity in Churchill Show routines",
            "pronunciation": "wi-zi wa ma-ba-vu / m-ba-vu"
          },
          {
            "target": "Samahani, mteja wa nambari uliyopiga hapatikani kwa sasa",
            "source": "Safaricom customer-care politeness parody",
            "pronunciation": "samahani"
          },
          {
            "target": "Nyanza Prefixes vs. Central Suffixes",
            "source": "Morphological wordplay contrasting Nyanza academic titles (prefixes) with Central",
            "pronunciation": "mwa-ngi wa e-qui-ty / wa-nji-ku wa ma-ka-ra"
          },
          {
            "target": "Sheng 'shrubbing / srub' (Owago-Onyiro Ex. 13): sida (< shida)",
            "source": "Metalinguistic routine on [ʃ] ↔ [s] substitution ('shrubbing'), humorous claim that",
            "pronunciation": "si-da / shi-ti-ka-shel / a-i-shi-shi"
          }
        ],
        "sentences": [
          {
            "target": "Samahani, mteja wa nambari uliyopiga hapatikani kwa sasa",
            "source": "Sorry, the customer of the number you have dialed cannot be reached right now."
          }
        ]
      },
      {
        "id": "swahili-clem-2019-pesetsky-gould-scott-nurse-skill",
        "title": "Semantic Gender & Kinship Possessors, Relative Scope & Northern",
        "icon": "Sparkles",
        "description": "Master Jonathan Pesetsky's (2019, Ch. 29, pp. 555–570) analysis of Class 9/10 kinship possessor agreement, Isaac Gould & Tessa Scott's (2019, Ch. 23, pp. 441–462) Kenyan Swahili relative clause scope diagnostics, and Derek Nurse's (2019, Ch. 33, pp. 649–665) Northern Swahili–southern Somali contact study.",
        "words": [
          {
            "target": "N-dugu y-angu m-refu a-li-anguka vs. N-dugu m-refu w-angu a-li-anguka",
            "source": "Class 9/10 kinship possessor immunity when immediately post-nominal vs. Class 1/2",
            "pronunciation": "n-du-gu ya-ngu m-re-fu a-li-a-ngu-ka / w-a-ngu / za-ngu"
          },
          {
            "target": "kitabu amba-cho kila mwanafunzi a-li-(ki)-soma",
            "source": "Three Kenyan Swahili relative clause strategies and Object Marker (OM) scope",
            "pronunciation": "ki-ta-bu a-mba-cho / a-li-cho-ki-so-ma / a-ki-so-ma-cho"
          },
          {
            "target": "Northern Swahili ↔ Southern Somali",
            "source": "Historical phonological, morphological, and lexical contact along the Benadir",
            "pronunciation": "mwii-ni / ba-ju-ni / ti-kuu / si-u / pa-te / a-mu"
          }
        ],
        "sentences": [
          {
            "target": "Ndugu yangu mrefu alianguka",
            "source": "My tall sibling fell (Class 9 y-angu adjacent to ndugu vs. Class 1 w-angu after mrefu) ."
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-28",
    "unitNumber": 28,
    "title": "Indian Ocean Loanwords & Modern Kenyan Swahili",
    "description": "WOLD etymological vocabulary, coastal geography, and contemporary Kenyan civic & urban expressions from Kaikki.org and Kencorpus",
    "icon": "🌊",
    "color": "#2563EB",
    "skills": [
      {
        "id": "swahili-open-skill-1",
        "title": "Coastal Geography & Contemporary Swahili",
        "icon": "🧭",
        "description": "Natural world terminology and modern Kenyan professional & everyday nouns",
        "grammarTip": "Abstract nouns of profession, civic status, and quality in Swahili are productively formed in Class 11/14 with the prefix u- (e.g., ualimu 'teaching', uaminifu 'honesty', uananchi 'citizenship').",
        "culturalNote": "Compiled from Thilo Schadeberg's WOLD Swahili Vocabulary (CC-BY-4.0), Tatu Ylönen's Kaikki.org Swahili Dictionary (CC-BY-SA-4.0), and Kencorpus (CC-BY-4.0).",
        "words": [
          {
            "target": "ghuba",
            "source": "Bay or gulf",
            "pronunciation": "ghu-ba"
          },
          {
            "target": "wangwa",
            "source": "Coastal lagoon",
            "pronunciation": "wa-ngwa"
          },
          {
            "target": "kinamasi",
            "source": "Swamp or marshland",
            "pronunciation": "ki-na-ma-si"
          },
          {
            "target": "maporomoko ya maji",
            "source": "Waterfall",
            "pronunciation": "ma-po-ro-mo-ko ya ma-ji"
          },
          {
            "target": "mbuga",
            "source": "Savanna or game reserve",
            "pronunciation": "mbu-ga"
          },
          {
            "target": "tetemeko la ardhi",
            "source": "Earthquake",
            "pronunciation": "te-te-me-ko la ar-dhi"
          },
          {
            "target": "upinde wa mvua",
            "source": "Rainbow",
            "pronunciation": "u-pi-nde wa m-vu-a"
          },
          {
            "target": "uaminifu",
            "source": "Honesty and integrity",
            "pronunciation": "u-a-mi-ni-fu"
          },
          {
            "target": "uananchi",
            "source": "Citizenship",
            "pronunciation": "u-a-na-nchi"
          },
          {
            "target": "uanahabari",
            "source": "Journalism",
            "pronunciation": "u-a-na-ha-ba-ri"
          },
          {
            "target": "mama mboga",
            "source": "Neighborhood vegetable vendor",
            "pronunciation": "ma-ma mbo-ga"
          },
          {
            "target": "kichakata matini",
            "source": "Word processor",
            "pronunciation": "ki-cha-ka-ta ma-ti-ni"
          }
        ],
        "sentences": [
          {
            "target": "Maji ya kujaa na kupwa hubadilika kila siku pwani.",
            "source": "The high and low tides change every day along the coast."
          },
          {
            "target": "Uaminifu na bidii huleta mafanikio.",
            "source": "Honesty and hard work bring success."
          }
        ]
      },
      {
        "id": "swahili-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Swahili (Kiswahili) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "Kencorpus (KenCorpus_text, KenPOS, KenTrans, KenSwQuAD, KenSpeech Lexicon, CC-BY-4.0), Thiomi (CC-BY-4.0), Google SMOL/GATITOS (CC-BY-4.0), LughaGen (CC-BY-SA-4.0), Common Voice 25.0 (CC0-1.0), CLDF WOLD & Tsammalex (CC-BY-4.0), Kaikki.org (CC-BY-SA-4.0), Language Science Press (2016/2019/2022, CC-BY-4.0) & Public Domain & Peer-Reviewed Linguistic Lexicons (Krapf 1850/1882, Krapf, Rebmann & Sparshott 1887, Steere 1870/1894/1918, Taylor 1891, Bateman 1901, Madan 1903/1917, Hinde 1904, Burt 1910, Stigand 1915, Beech 1918, Werner 1918/1919/1933, Johnston 1919, Ngonyani & Ngowa 2016, Mwamzandi 2022 & Goldsmith/Mpiranya 2022).",
        "words": [
          {
            "target": "Hujambo",
            "source": "Hello",
            "pronunciation": "hoo-jahm-boh"
          },
          {
            "target": "amani",
            "source": "Peace",
            "pronunciation": "a-ma-ni"
          },
          {
            "target": "shukuru",
            "source": "Thank",
            "pronunciation": "shu-ku-ru"
          },
          {
            "target": "salimía",
            "source": "Greet",
            "pronunciation": "salimia"
          },
          {
            "target": "báriki",
            "source": "Bless",
            "pronunciation": "bariki"
          },
          {
            "target": "kupendeza",
            "source": "Please",
            "pronunciation": "ku-pende-za"
          },
          {
            "target": "salimia",
            "source": "Salute",
            "pronunciation": "sa-li-mia"
          },
          {
            "target": "samehe, achilia",
            "source": "Pardon",
            "pronunciation": "sa-me-he ach-i-lia"
          },
          {
            "target": "Kwaheri",
            "source": "Goodbye",
            "pronunciation": "kwah-heh-ree"
          },
          {
            "target": "Karibu",
            "source": "Welcome",
            "pronunciation": "kah-ree-boo"
          }
        ],
        "sentences": [
          {
            "target": "kunrathi, nipe hisa yangu",
            "source": "Pardon me."
          },
          {
            "target": "mizinga ya salama",
            "source": "Salute of cannon."
          },
          {
            "target": "Marahaba !",
            "source": ". Thank you ! it is well !"
          }
        ]
      },
      {
        "id": "swahili-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Swahili (Kiswahili) sentences for healthcare, transport, and community safety.",
        "culturalNote": "Kencorpus (KenCorpus_text, KenPOS, KenTrans, KenSwQuAD, KenSpeech Lexicon, CC-BY-4.0), Thiomi (CC-BY-4.0), Google SMOL/GATITOS (CC-BY-4.0), LughaGen (CC-BY-SA-4.0), Common Voice 25.0 (CC0-1.0), CLDF WOLD & Tsammalex (CC-BY-4.0), Kaikki.org (CC-BY-SA-4.0), Language Science Press (2016/2019/2022, CC-BY-4.0) & Public Domain & Peer-Reviewed Linguistic Lexicons (Krapf 1850/1882, Krapf, Rebmann & Sparshott 1887, Steere 1870/1894/1918, Taylor 1891, Bateman 1901, Madan 1903/1917, Hinde 1904, Burt 1910, Stigand 1915, Beech 1918, Werner 1918/1919/1933, Johnston 1919, Ngonyani & Ngowa 2016, Mwamzandi 2022 & Goldsmith/Mpiranya 2022).",
        "words": [
          {
            "target": "moja",
            "source": "One",
            "pronunciation": "mo-ja"
          },
          {
            "target": "sita",
            "source": "Six",
            "pronunciation": "si-ta"
          },
          {
            "target": "kumi",
            "source": "Ten",
            "pronunciation": "ku-mi"
          },
          {
            "target": "mbili",
            "source": "Two",
            "pronunciation": "mbi-li"
          },
          {
            "target": "wote wawili",
            "source": "Both",
            "pronunciation": "wo-te wa-wi-li"
          },
          {
            "target": "tano",
            "source": "Five",
            "pronunciation": "ta-no"
          },
          {
            "target": "'nne",
            "source": "Four",
            "pronunciation": "'nne"
          },
          {
            "target": "nusu",
            "source": "Half",
            "pronunciation": "nu-su"
          },
          {
            "target": "kenda, tissa",
            "source": "Nine",
            "pronunciation": "kenda tissa"
          },
          {
            "target": "mara moja",
            "source": "Once",
            "pronunciation": "ma-ra mo-ja"
          }
        ],
        "sentences": []
      }
    ]
  }
];
