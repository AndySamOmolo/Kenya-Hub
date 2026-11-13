import type { CourseUnit, LanguageConfig } from "../types";

// ============================================================
// Daasanach (Dhaasanac) ('Af Dhaasanac) Language Course Configuration & Units
// Declarative modular course definition (audit-ready, zero runtime mutations)
// ============================================================

export const DAASANACH_CONFIG: LanguageConfig = {
  "id": "daasanach",
  "name": "Daasanach (Dhaasanac)",
  "nativeName": "'Af Dhaasanac",
  "family": "Cushitic",
  "counties": [
    "Marsabit"
  ],
  "speakers": "65K",
  "speechLocale": "om-KE",
  "description": "Lowland East Cushitic (Western Omo-Tana) language spoken by the Daasanach agropastoral and fishing community around Ileret on the northeastern shore of Lake Turkana.",
  "color": "#991B1B",
  "sources": [
    "blazek-dasanech-2011",
    "nishiguchi-daasanach-2004",
    "hohnel-lakes-rudolf-stefanie-1894"
  ]
};

export const DAASANACH_UNITS: CourseUnit[] = [
  {
    "id": "daasanach-unit-1",
    "title": "Unit 1: Greetings, Clusivity Pronouns & Numerals (1–1,000)",
    "description": "Master Daasanach ('Af Dhaasanac) greetings in Ileret, inclusive vs. exclusive 'we' pronouns (múu vs. nyíni), and numerals from Blažek (2011) & Tosco (2001).",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "daasanach-greetings-pronouns",
        "title": "Greetings & Inclusive/Exclusive Pronouns",
        "icon": "Users",
        "description": "Learn essential Daasanach greetings and the Cushitic distinction between inclusive and exclusive 1st person plural pronouns.",
        "tips": "Daasanach distinguishes inclusive 'we' (múu = 'you and I') from exclusive 'we' (nyíni = 'we without you').",
        "culturalNote": "Spoken around Ileret on the northeastern shore of Lake Turkana (Marsabit County) and the Omo River delta, Daasanach ('Af Dhaasanac, called Reshiat by Lieut. Ludwig von Höhnel in 1888) shares the greeting 'Ma nagaa? — Nagaa' across the northern pastoral frontier.",
        "words": [
          {
            "target": "Ma nagaa? — Nagaa",
            "source": "Is it peace? (Are you well?) — It is peace",
            "pronunciation": "mah nah-gaa — nah-gaa",
            "hint": "Tosco (2001) & Nishiguchi (2004, Ileret fieldwork)"
          },
          {
            "target": "yáa (obj. yú)",
            "source": "I / me",
            "pronunciation": "yaa / yuu",
            "hint": "Blažek (2011, p. 3, Table of Pronouns, citing Tosco 2001 pp. 210–211)"
          },
          {
            "target": "kúu (obj. kú / kuo)",
            "source": "You (singular)",
            "pronunciation": "kuu / kuo",
            "hint": "Blažek (2011, p. 3, Table of Pronouns)"
          },
          {
            "target": "múu (obj. mú / muo)",
            "source": "We (inclusive: you and I)",
            "pronunciation": "muu / muo",
            "hint": "Blažek (2011, p. 3) & Sasse (1976, p. 208)"
          },
          {
            "target": "nyíni (obj. nyí)",
            "source": "We (exclusive: we without you)",
            "pronunciation": "nyee-nee / nyee",
            "hint": "Blažek (2011, p. 3) & Tosco (2001, p. 210)"
          },
          {
            "target": "'ítíni (obj. 'ití)",
            "source": "You (plural)",
            "pronunciation": "ee-tee-nee / ee-tee",
            "hint": "Blažek (2011, p. 3, Table of Pronouns)"
          }
        ],
        "sentences": [
          {
            "target": "Ma nagaa? — Nagaa",
            "source": "Is it peace? — It is peace"
          },
          {
            "target": "múu vs. nyíni",
            "source": "we (inclusive) vs. we (exclusive)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "Which Daasanach pronoun means 'we (inclusive: you and I)'?",
            "correctAnswer": "múu (obj. mú / muo)",
            "options": [
              "múu (obj. mú / muo)",
              "nyíni (obj. nyí)",
              "yáa (obj. yú)",
              "'ítíni (obj. 'ití)"
            ],
            "hint": "Blažek (2011, p. 3) & Tosco (2001, p. 210)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach pronoun or greeting to its English meaning:",
            "correctAnswer": "yáa (obj. yú): I / me",
            "pairs": [
              {
                "left": "yáa (obj. yú)",
                "right": "I / me"
              },
              {
                "left": "kúu (obj. kú / kuo)",
                "right": "You (singular)"
              },
              {
                "left": "múu (obj. mú / muo)",
                "right": "We (inclusive: you and I)"
              },
              {
                "left": "nyíni (obj. nyí)",
                "right": "We (exclusive: we without you)"
              }
            ]
          }
        ]
      },
      {
        "id": "daasanach-numerals-counting",
        "title": "Numerals & Counting (1–1,000)",
        "icon": "Hash",
        "description": "Count from 1 (tákàch) to 1,000 (kúùm) in Daasanach.",
        "tips": "Compound teens use the noun 'áf ('mouth'): tòmòn àf tákàch ('ten mouth one' = 11).",
        "culturalNote": "Václav Blažek (2011, p. 4) compares the Daasanach numerals recorded by Shackleton (1933), Sasse (1976), and Tosco (2001), showing Lowland East Cushitic cognates across Omo-Tana (Rendille, Somali, Arbore, Elmolo) and Oromo loans for 100 (dììb) and 1,000 (kúùm).",
        "words": [
          {
            "target": "tákàch",
            "source": "One (1)",
            "pronunciation": "tah-kach, naa-mah, sed-dee, af-foor, chen",
            "hint": "Blažek (2011, p. 4, citing Tosco 2001 p. 207)"
          },
          {
            "target": "nààmà",
            "source": "Two (2)",
            "pronunciation": "tah-kach, naa-mah, sed-dee, af-foor, chen",
            "hint": "Blažek (2011, p. 4, citing Tosco 2001 p. 207)"
          },
          {
            "target": "sèddí",
            "source": "Three (3)",
            "pronunciation": "tah-kach, naa-mah, sed-dee, af-foor, chen",
            "hint": "Blažek (2011, p. 4, citing Tosco 2001 p. 207)"
          },
          {
            "target": "líh",
            "source": "Six (6)",
            "pronunciation": "leeh, teey-yah, seet, saal, toh-mohn",
            "hint": "Blažek (2011, p. 4, citing Tosco 2001 p. 207)"
          },
          {
            "target": "tìyyà",
            "source": "Seven (7)",
            "pronunciation": "leeh, teey-yah, seet, saal, toh-mohn",
            "hint": "Blažek (2011, p. 4, citing Tosco 2001 p. 207)"
          },
          {
            "target": "sììt",
            "source": "Eight (8)",
            "pronunciation": "leeh, teey-yah, seet, saal, toh-mohn",
            "hint": "Blažek (2011, p. 4, citing Tosco 2001 p. 207)"
          },
          {
            "target": "tòmòn àf tákàch",
            "source": "Eleven (11, lit. 'ten mouth one')",
            "pronunciation": "toh-mohn ahf tah-kach",
            "hint": "Blažek (2011, p. 4)"
          },
          {
            "target": "tòmòná nààmà • dììb • kúùm",
            "source": "Twenty (20) • One hundred (100) • One thousand (1,000)",
            "pronunciation": "toh-moh-naa naa-mah • deeb • kuum",
            "hint": "Blažek (2011, p. 4)"
          }
        ],
        "sentences": [
          {
            "target": "tákàch, nààmà, sèddí, 'àffúr, chén",
            "source": "One, two, three, four, five"
          },
          {
            "target": "líh, tìyyà, sììt, sààl, tòmòn",
            "source": "Six, seven, eight, nine, ten"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "How do you say '1, 2, 3, 4, 5' in Daasanach?",
            "correctAnswer": "tákàch, nààmà, sèddí, 'àffúr, chén",
            "options": [
              "tákàch, nààmà, sèddí, 'àffúr, chén",
              "líh, tìyyà, sììt, sààl, tòmòn",
              "tòmòn àf tákàch",
              "tòmòná nààmà • dììb • kúùm"
            ],
            "hint": "Blažek (2011, p. 4)"
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-2",
    "title": "Unit 2: Pastoral Ecology, Body Parts, Verbs & Sonority Assimilation",
    "description": "Explore Daasanach nouns, Lake Turkana & Omo delta ecology, and sonority-driven consonant assimilation from Nishiguchi (2004) and Blažek (2011).",
    "icon": "Compass",
    "skills": [
      {
        "id": "daasanach-ecology-nouns-verbs",
        "title": "People, Livestock, Nature & Verbs",
        "icon": "TreePine",
        "description": "Master core Daasanach nouns and verbs with singulative/plurative suffixes and consonant assimilation.",
        "tips": "When a suffix beginning with /t/ (such as 2s/3f imperfective -ta) attaches to a verb stem ending in a nasal or liquid (m, n, l, r, f), /t/ assimilates completely: kom + -ta -> kon-na ('she eats'), maal + -ta -> maal-la ('she hears'), fur + -ta -> fur-ra ('she opens').",
        "culturalNote": "Sumiyo Nishiguchi's 2004 study conducted in Ileret (Marsabit County) demonstrates how the sonority hierarchy governs progressive and regressive consonant assimilation across Daasanach noun plurals and verb inflections.",
        "words": [
          {
            "target": "'íl (pl. 'íllí)",
            "source": "Eye",
            "pronunciation": "eel / eel-lee"
          },
          {
            "target": "nèèt (pl. nèèttí)",
            "source": "Ear",
            "pronunciation": "neet / neet-tee"
          },
          {
            "target": "mé (pl. méddí)",
            "source": "Head",
            "pronunciation": "meh / med-dee"
          },
          {
            "target": "són (pl. sóonú)",
            "source": "Nose",
            "pronunciation": "sohn / soo-nuu"
          },
          {
            "target": "lúùt (pl. lúùttí)",
            "source": "Neck",
            "pronunciation": "luut / luut-tee"
          }
        ],
        "sentences": [
          {
            "target": "'íl — nèèt",
            "source": "Eye — Ear"
          },
          {
            "target": "mé — són",
            "source": "Head — Nose"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"'íl\" mean in English?",
            "correctAnswer": "Eye",
            "options": [
              "Eye",
              "Ear",
              "Head",
              "Nose"
            ],
            "hint": "Core vocabulary in People, Livestock, Nature & Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Ear\"",
            "correctAnswer": "nèèt",
            "acceptedAnswers": [
              "nèèt (pl. nèèttí)",
              "nèèt"
            ],
            "hint": "Starts with \"nè\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mé\"",
            "correctAnswer": "Head",
            "acceptedAnswers": [
              "Head",
              "Head"
            ],
            "hint": "Review People, Livestock, Nature & Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from People, Livestock, Nature & Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "'íl",
                "right": "Eye"
              },
              {
                "left": "nèèt",
                "right": "Ear"
              },
              {
                "left": "mé",
                "right": "Head"
              },
              {
                "left": "són",
                "right": "Nose"
              },
              {
                "left": "lúùt",
                "right": "Neck"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-3",
    "title": "Unit 3: Family, Kinship & the Eight Territorial Sections (Shir)",
    "description": "Learn Daasanach kinship terms, human nouns, and the eight endogamous territorial moieties (shir) from Tosco (2001), Nishiguchi (2004), and Almagor (1978).",
    "icon": "Users",
    "skills": [
      {
        "id": "daasanach-family-kinship",
        "title": "People, Family & Household Members",
        "icon": "Users",
        "description": "Master words for person, man/husband, woman/wife, child, and guest in Daasanach.",
        "tips": "Many core human nouns in Daasanach have irregular or suppletive plurals: màà ('person') -> pl. mààddí / gál ('people'); mìnní ('woman/wife') -> pl. kààddí ('women/wives').",
        "culturalNote": "In Daasanach ('Af Dhaasanac) hospitality around Ileret and Omorate, a guest or traveller (koydo, pl. koyda) is welcomed with milk ('éèn), water (bíyé), and the peace greeting 'Ma nagaa?'.",
        "words": [
          {
            "target": "Dhaasanac",
            "source": "Daasanach person / Daasanach people",
            "pronunciation": "dhaa-sah-nach",
            "hint": "Indigenous autonym (Tosco 2001)"
          },
          {
            "target": "màà (pl. mààddí / gál)",
            "source": "Person / Human being (pl. people)",
            "pronunciation": "maa / maad-dee / gahl",
            "hint": "Blažek (2011, p. 8, #51 & #63)"
          },
          {
            "target": "màà dhií (pl. gál dhiíddí)",
            "source": "Man / Husband (male person)",
            "pronunciation": "maa dhee / gahl dheed-dee",
            "hint": "Blažek (2011, p. 8, #51)"
          },
          {
            "target": "mìnní (pl. kààddí)",
            "source": "Woman / Wife (pl. women / wives)",
            "pronunciation": "min-nee / kaad-dee",
            "hint": "Blažek (2011, p. 11, #99)"
          },
          {
            "target": "múù / 'íny (pl. 'íyyí)",
            "source": "Child / Offspring (pl. children)",
            "pronunciation": "muu / eeny / eey-yee",
            "hint": "Nishiguchi (2004, p. 6: iny)"
          },
          {
            "target": "koydo (pl. koyda)",
            "source": "Guest / Visitor / Stranger",
            "pronunciation": "koy-doh / koy-dah",
            "hint": "Nishiguchi (2004, p. 13)"
          }
        ],
        "sentences": [
          {
            "target": "màà dhií — mìnní",
            "source": "Man / husband — Woman / wife"
          },
          {
            "target": "koydo (pl. koyda)",
            "source": "Guest (pl. guests)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the Daasanach word for 'Woman / Wife' (pl. kààddí)?",
            "correctAnswer": "mìnní (pl. kààddí)",
            "options": [
              "mìnní (pl. kààddí)",
              "màà dhií (pl. gál dhiíddí)",
              "koydo (pl. koyda)",
              "múù / 'íny (pl. 'íyyí)"
            ],
            "hint": "Blažek (2011, p. 11, #99)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach human noun with its English meaning:",
            "correctAnswer": "màà: Person / Human being",
            "pairs": [
              {
                "left": "màà",
                "right": "Person / Human being"
              },
              {
                "left": "mìnní",
                "right": "Woman / Wife"
              },
              {
                "left": "'íny",
                "right": "Child / Offspring"
              },
              {
                "left": "koydo",
                "right": "Guest / Visitor"
              }
            ]
          }
        ]
      },
      {
        "id": "daasanach-shir-dimi-heritage",
        "title": "The Eight Tribal Sections (Shir) & Dimi Festival",
        "icon": "Crown",
        "description": "Explore the eight territorial sections (shir) of the Daasanach nation and the Dimi blessing ceremony.",
        "tips": "The Daasanach nation is organized into eight territorial sections (shir), each with its own settlement rights and age-set responsibilities along the Omo River delta and northeastern Lake Turkana.",
        "words": [
          {
            "target": "Dímì",
            "source": "Annual paternal blessing ceremony for daughters and age-set elders",
            "pronunciation": "dee-mee",
            "hint": "Almagor (1978) & Tosco (2001)"
          },
          {
            "target": "'Ínkoria & Nààríc",
            "source": "The two largest Daasanach territorial sections (Shir) along the Omo and Ileret shore",
            "pronunciation": "een-koh-ree-ah & naa-reech",
            "hint": "Tosco (2001)"
          },
          {
            "target": "Ràndál & Koro",
            "source": "Daasanach sections of historic Rendille and Samburu origin",
            "pronunciation": "rahn-dahl & koh-roh",
            "hint": "Almagor (1978) & Tosco (2001)"
          },
          {
            "target": "'Órò, Ríìlè, Ngólòbò & 'Éléle",
            "source": "Riverine and delta territorial sections of the Daasanach",
            "pronunciation": "oh-roh, ree-leh, ngoh-loh-boh, eh-leh-leh",
            "hint": "Tosco (2001)"
          },
          {
            "target": "Reshiat, Buma & Marle",
            "source": "1888 historical names recorded by Lieut. Ludwig von Höhnel at northern Lake Rudolf",
            "pronunciation": "reh-shee-aht, boo-mah, mahr-leh",
            "hint": "Höhnel (1894, Vol. I, pp. 161–175)"
          },
          {
            "target": "géléb",
            "source": "Traditional Daasanach dome-hut village / pastoral kraal",
            "pronunciation": "geh-leb",
            "hint": "Höhnel (1894) & Tosco (2001)"
          }
        ],
        "sentences": [
          {
            "target": "Dímì: gáàl, sé, 'áyyì, súùb, bún",
            "source": "The Dimi ceremony: camels, cattle, small stock, butter, and coffee beans"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the name of the major annual Daasanach festival in which fathers bless their daughters for marriage and elders are anointed with butter (súùb)?",
            "correctAnswer": "Dímì",
            "options": [
              "Dímì",
              "géléb",
              "koydo",
              "Reshiat"
            ],
            "hint": "Almagor (1978) & Tosco (2001)"
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-4",
    "title": "Unit 4: Complete Anatomical Lexicon & Body Care",
    "description": "Master 15 additional Daasanach anatomical nouns from Václav Blažek's (2011) 100-word Swadesh reconstruction and Mauro Tosco (2001).",
    "icon": "Heart",
    "skills": [
      {
        "id": "daasanach-body-limbs-organs",
        "title": "Limbs, Organs & Internal Anatomy",
        "icon": "Heart",
        "description": "Learn Daasanach nouns for hand/arm, foot/leg, knee, bone, heart, liver, and blood.",
        "tips": "Notice how coronal sibilant stems like gàs ('foot/leg') form their plural in gàsú (or gac-cu in Ileret speech, Nishiguchi 2004, p. 3).",
        "words": [
          {
            "target": "gíl (pl. gíllí)",
            "source": "Hand / Arm",
            "pronunciation": "geel / geel-lee",
            "hint": "Blažek (2011, p. 7, #37)"
          },
          {
            "target": "gàs (pl. gàsú)",
            "source": "Foot / Leg",
            "pronunciation": "gahs / gah-suu",
            "hint": "Blažek (2011, p. 7, #30)"
          },
          {
            "target": "kúrr (pl. kúrrú)",
            "source": "Knee",
            "pronunciation": "kurr / kur-ruu",
            "hint": "Blažek (2011, p. 7, #43)"
          },
          {
            "target": "láf (pl. láffú / láfù)",
            "source": "Bone",
            "pronunciation": "lahf / lahf-fuu",
            "hint": "Blažek (2011, p. 5, #10)"
          },
          {
            "target": "wàzàn (pl. wàzànnú)",
            "source": "Heart",
            "pronunciation": "wah-zahn / wah-zahn-nuu",
            "hint": "Blažek (2011, p. 7, #40)"
          },
          {
            "target": "tír (pl. tírrí)",
            "source": "Liver",
            "pronunciation": "teer / teer-ree",
            "hint": "Blažek (2011, p. 7, #47)"
          },
          {
            "target": "fáàg (pl. fáàggú)",
            "source": "Blood",
            "pronunciation": "faag / faag-guu",
            "hint": "Blažek (2011, p. 5, #9)"
          }
        ],
        "sentences": [
          {
            "target": "gíl — gàs — kúrr",
            "source": "Hand/arm — Foot/leg — Knee"
          },
          {
            "target": "wàzàn — tír — láf",
            "source": "Heart — Liver — Bone"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "Which Daasanach noun means 'Heart' (< East Cushitic *wadan-)?",
            "correctAnswer": "wàzàn (pl. wàzànnú)",
            "options": [
              "wàzàn (pl. wàzànnú)",
              "tír (pl. tírrí)",
              "láf (pl. láffú / láfù)",
              "gíl (pl. gíllí)"
            ],
            "hint": "Blažek (2011, p. 7, #40)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach anatomical term with its English translation:",
            "correctAnswer": "gíl: Hand / Arm",
            "pairs": [
              {
                "left": "gíl",
                "right": "Hand / Arm"
              },
              {
                "left": "gàs",
                "right": "Foot / Leg"
              },
              {
                "left": "kúrr",
                "right": "Knee"
              },
              {
                "left": "láf",
                "right": "Bone"
              }
            ]
          }
        ]
      },
      {
        "id": "daasanach-mouth-skin-speech",
        "title": "Mouth, Speech, Skin & Surface Anatomy",
        "icon": "BookOpen",
        "description": "Learn Daasanach terms for mouth/language ('áf), tongue, tooth, skin, hair/feather, and belly.",
        "tips": "Just as in Somali (Af-Soomaali) and Rendille (Af-Rendille), the noun 'áf means both 'mouth' and 'language' ('Af Dhaasanac = 'the Daasanach language').",
        "words": [
          {
            "target": "'áf (pl. 'áffú)",
            "source": "Mouth / Language",
            "pronunciation": "ahf / ahf-fuu",
            "hint": "Blažek (2011, p. 8, #55)"
          },
          {
            "target": "'érré (pl. 'érréddí)",
            "source": "Tongue",
            "pronunciation": "er-reh / er-red-dee",
            "hint": "Blažek (2011, p. 10, #89)"
          },
          {
            "target": "kììkìt (pl. kììkù)",
            "source": "Tooth (pl. teeth)",
            "pronunciation": "kee-kit / kee-kuu",
            "hint": "Blažek (2011, p. 10, #90)"
          },
          {
            "target": "góng (pl. góngú)",
            "source": "Skin / Hide",
            "pronunciation": "gohng / gohng-uu",
            "hint": "Blažek (2011, p. 9, #75)"
          },
          {
            "target": "zúùr (pl. zúùrrí)",
            "source": "Hair / Feather",
            "pronunciation": "zuur / zuur-ree",
            "hint": "Blažek (2011, pp. 6–7, #27 & #36)"
          },
          {
            "target": "géèr (pl. géèrrí)",
            "source": "Belly / Abdomen",
            "pronunciation": "geer / geer-ree",
            "hint": "Blažek (2011, p. 5, #5)"
          },
          {
            "target": "fàrr (pl. fàrrú)",
            "source": "Finger (pl. fingers)",
            "pronunciation": "farr / far-ruu",
            "hint": "Nishiguchi (2004, p. 6)"
          }
        ],
        "sentences": [
          {
            "target": "'Af Dhaasanac",
            "source": "The Daasanach language (lit. 'Mouth of the Daasanach')"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does the Daasanach noun \"'áf\" mean?",
            "correctAnswer": "Mouth / Language",
            "options": [
              "Mouth / Language",
              "Tongue",
              "Tooth (pl. teeth)",
              "Skin / Hide"
            ],
            "hint": "Appears in the language name 'Af Dhaasanac"
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-5",
    "title": "Unit 5: Pastoral Livestock, Lake Turkana Fisheries & Wildlife",
    "description": "Master the Daasanach pastoral lexicon (cattle, camels, goats, donkeys) and Lake Turkana aquatic/savanna fauna.",
    "icon": "Compass",
    "skills": [
      {
        "id": "daasanach-pastoral-herds",
        "title": "Pastoral Herds: Cattle, Camels, Goats & Donkeys",
        "icon": "Star",
        "description": "Learn the core livestock vocabulary of the Daasanach pastoral economy in Marsabit County.",
        "tips": "Like other East Cushitic languages, 'cow' (sé) has a suppletive collective plural gùù ('cattle'), while gáàl ('camel') forms its plural by liquid gemination: gáàllí ('camels', Nishiguchi 2004, p. 6).",
        "words": [
          {
            "target": "sé (pl. gùù)",
            "source": "Cow (pl. cattle)",
            "pronunciation": "seh / guu",
            "hint": "Blažek (2011, p. 6, #18)"
          },
          {
            "target": "gáàl (pl. gáàllí)",
            "source": "Camel (pl. camels)",
            "pronunciation": "gaal / gaal-lee",
            "hint": "Nishiguchi (2004, p. 6)"
          },
          {
            "target": "'áyyì / rí (pl. ríddí)",
            "source": "Goat / Sheep and goats (small stock)",
            "pronunciation": "ahy-yee / ree / reed-dee",
            "hint": "Nishiguchi (2004, p. 11) & Tosco (2001)"
          },
          {
            "target": "'ólò (pl. 'ólòddí)",
            "source": "Donkey (pl. donkeys)",
            "pronunciation": "oh-loh / oh-lod-dee",
            "hint": "Höhnel (1894, p. 166) & Tosco (2001)"
          },
          {
            "target": "chér (pl. chérrí)",
            "source": "Dog (pl. dogs)",
            "pronunciation": "cher / cher-ree",
            "hint": "Blažek (2011, p. 6, #19)"
          },
          {
            "target": "gáàs (pl. gáàsú)",
            "source": "Horn (of cattle or antelope)",
            "pronunciation": "gaas / gaa-suu",
            "hint": "Blažek (2011, p. 7, #41)"
          },
          {
            "target": "hèèk (pl. hèèkkú)",
            "source": "Tail",
            "pronunciation": "heek / heek-kuu",
            "hint": "Blažek (2011, p. 10, #85)"
          }
        ],
        "sentences": [
          {
            "target": "sé (pl. gùù) — gáàl (pl. gáàllí)",
            "source": "Cow (cattle) — Camel (camels)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "How do you say 'Camel (pl. camels)' in Daasanach?",
            "correctAnswer": "gáàl (pl. gáàllí)",
            "options": [
              "gáàl (pl. gáàllí)",
              "sé (pl. gùù)",
              "chér (pl. chérrí)",
              "'ólò (pl. 'ólòddí)"
            ],
            "hint": "Nishiguchi (2004, p. 6)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach livestock noun with its English meaning:",
            "correctAnswer": "sé: Cow (pl. cattle)",
            "pairs": [
              {
                "left": "sé",
                "right": "Cow (pl. cattle)"
              },
              {
                "left": "gáàl",
                "right": "Camel"
              },
              {
                "left": "'ólò",
                "right": "Donkey"
              },
              {
                "left": "chér",
                "right": "Dog"
              }
            ]
          }
        ]
      },
      {
        "id": "daasanach-turkana-wildlife-fish",
        "title": "Lake Turkana Fish, Crocodiles, Birds & Savanna Wildlife",
        "icon": "TreePine",
        "description": "Learn Daasanach three-way number marking (collective, singulative -ti, plurative -u) across fish, birds, and wildlife.",
        "tips": "Transnumeral collectives like bêèch ('fish') and kìdìny ('birds') add singulative -tì for a single individual (bêèch-tì 'one fish', kìdìny-tì 'one bird') and plurative -ù for multiple individuals (bêèch-ù, kìdìny-ù).",
        "words": [
          {
            "target": "bêèch (sg. bêèch-tì, pl. bêèch-ù)",
            "source": "Fish (collective -> a single fish -> fishes)",
            "pronunciation": "beech / beech-tee / beech-uu",
            "hint": "Blažek (2011, p. 6, #29)"
          },
          {
            "target": "kìdìny (sg. kìdìny-tì, pl. kìdìny-ù)",
            "source": "Bird (collective -> a single bird -> birds)",
            "pronunciation": "kee-deeny / kee-deeny-tee",
            "hint": "Blažek (2011, p. 5, #7)"
          },
          {
            "target": "nyáàng (pl. nyáàngú)",
            "source": "Crocodile (of Lake Turkana and the Omo River)",
            "pronunciation": "nyaang / nyaang-uu",
            "hint": "Nishiguchi (2004, p. 4)"
          },
          {
            "target": "lúùb (pl. lúùbbú)",
            "source": "Lion",
            "pronunciation": "luub / luub-buu",
            "hint": "Nishiguchi (2004, p. 4)"
          },
          {
            "target": "'árb (pl. 'árbú)",
            "source": "Elephant",
            "pronunciation": "ahrb / ahr-buu",
            "hint": "Nishiguchi (2004, p. 3)"
          },
          {
            "target": "tóòr (pl. tóòrrí)",
            "source": "Snake",
            "pronunciation": "toor / toor-ree",
            "hint": "Nishiguchi (2004, p. 6)"
          },
          {
            "target": "'íngìr (sg. 'íngìr-tì)",
            "source": "Louse",
            "pronunciation": "een-geer / een-geer-tee",
            "hint": "Blažek (2011, p. 8, #49)"
          }
        ],
        "sentences": [
          {
            "target": "bêèch → bêèch-tì → bêèch-ù",
            "source": "fish (coll.) → a fish (sg.) → fishes (pl.)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "Which Daasanach noun refers to the Nile crocodile of Lake Turkana and the Omo River?",
            "correctAnswer": "nyáàng (pl. nyáàngú)",
            "options": [
              "nyáàng (pl. nyáàngú)",
              "lúùb (pl. lúùbbú)",
              "'árb (pl. 'árbú)",
              "tóòr (pl. tóòrrí)"
            ],
            "hint": "Nishiguchi (2004, p. 4)"
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-6",
    "title": "Unit 6: Omo Delta & Lake Turkana Ecology, Sky & Elements",
    "description": "Explore water, river/lake, sun, moon, stars, rain, trees, and genitive compounds (-iet) in Daasanach.",
    "icon": "Sun",
    "skills": [
      {
        "id": "daasanach-water-sky-weather",
        "title": "Water, River/Lake, Sun, Moon & Rain",
        "icon": "Sun",
        "description": "Learn core environmental and celestial nouns from Blažek (2011) and Tosco (2001).",
        "tips": "Like Somali biyo and Rendilleiche, Daasanach bíyé ('water') is grammatically plural in origin (< Omo-Tana *biy-).",
        "words": [
          {
            "target": "bíyé",
            "source": "Water",
            "pronunciation": "bee-yeh",
            "hint": "Blažek (2011, p. 10, #94)"
          },
          {
            "target": "nóòg (pl. nóòggú)",
            "source": "River / Lake (the Omo River & Lake Turkana)",
            "pronunciation": "noog / noog-guu",
            "hint": "Tosco (2001)"
          },
          {
            "target": "'áázù",
            "source": "Sun / Daytime",
            "pronunciation": "aa-zuu",
            "hint": "Blažek (2011, p. 10, #83)"
          },
          {
            "target": "gùùr (pl. gùùrrí)",
            "source": "Moon / Month",
            "pronunciation": "guur / guur-ree",
            "hint": "Blažek (2011, p. 8, #53)"
          },
          {
            "target": "hìzìn (sg. hìzìn-tì, pl. hìzìn-ù)",
            "source": "Star (pl. stars)",
            "pronunciation": "hee-zeen / hee-zeen-tee",
            "hint": "Blažek (2011, p. 10, #81)"
          },
          {
            "target": "'írr (or Wáàg)",
            "source": "Rain / Sky (Wáàg = God / Supreme Sky Deity)",
            "pronunciation": "eerr / waag",
            "hint": "Blažek (2011, p. 9, #64)"
          },
          {
            "target": "kúùr (pl. kúùrrí)",
            "source": "Cloud",
            "pronunciation": "kuur / kuur-ree",
            "hint": "Blažek (2011, p. 5, #15)"
          },
          {
            "target": "chúùr (pl. chúùrrí)",
            "source": "Night",
            "pronunciation": "chuur / chuur-ree",
            "hint": "Blažek (2011, p. 8, #58b)"
          }
        ],
        "sentences": [
          {
            "target": "bíyé nóòg-iet",
            "source": "The water of the river/lake"
          },
          {
            "target": "'áázù — chúùr — gùùr",
            "source": "Sun/day — Night — Moon"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the Daasanach word for 'Water'?",
            "correctAnswer": "bíyé",
            "options": [
              "bíyé",
              "'áázù",
              "gùùr (pl. gùùrrí)",
              "chúùr (pl. chúùrrí)"
            ],
            "hint": "Cognate with Somali biyo (Blažek 2011, p. 10, #94)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach nature or sky word with its English meaning:",
            "correctAnswer": "bíyé: Water",
            "pairs": [
              {
                "left": "bíyé",
                "right": "Water"
              },
              {
                "left": "'áázù",
                "right": "Sun / Daytime"
              },
              {
                "left": "gùùr",
                "right": "Moon / Month"
              },
              {
                "left": "chúùr",
                "right": "Night"
              }
            ]
          }
        ]
      },
      {
        "id": "daasanach-trees-earth-fire",
        "title": "Trees, Earth, Stones, Fire & Genitive Compounds (-iet)",
        "icon": "TreePine",
        "description": "Master botanical terms, fire/ash, and how Daasanach builds genitive compounds like 'leaf' ('ear of tree').",
        "tips": "In Daasanach, genitive/possessive compounds attach -iet to the possessor noun: góng kór-iet ('skin of tree' = bark), nèèt kór-iet ('ear of tree' = leaf).",
        "words": [
          {
            "target": "kór (sg. kór-tì, pl. kór-rì)",
            "source": "Tree / Wood / Medicine",
            "pronunciation": "kohr / kohr-tee / kohr-ree",
            "hint": "Blažek (2011, p. 10, #91)"
          },
          {
            "target": "nèèt kór-iet",
            "source": "Leaf (lit. 'ear of tree')",
            "pronunciation": "neet kohr-yet",
            "hint": "Blažek (2011, p. 7, #45)"
          },
          {
            "target": "góng kór-iet",
            "source": "Bark of tree (lit. 'skin of tree')",
            "pronunciation": "gohng kohr-yet",
            "hint": "Blažek (2011, p. 5, #4)"
          },
          {
            "target": "hìz (pl. hìzú) & rúùb (sg. rúùb-tì)",
            "source": "Root & Seed / Sorghum grain",
            "pronunciation": "heez & ruub",
            "hint": "Blažek (2011, p. 9, #67 & #73)"
          },
          {
            "target": "bìì (pl. bììddí) & nyáàr",
            "source": "Earth / Soil / Land & Sand",
            "pronunciation": "bee & nyaar",
            "hint": "Blažek (2011, pp. 6, 9)"
          },
          {
            "target": "jáàr (sg. jáàr-tì) & wáàr (pl. wáàrrí)",
            "source": "Stone / Rock & Mountain / Hill",
            "pronunciation": "jaar & waar",
            "hint": "Blažek (2011, pp. 8, 10)"
          },
          {
            "target": "gíè (pl. gíèddí), 'érr & 'éèg",
            "source": "Fire, Smoke & Ashes",
            "pronunciation": "gee-eh, err, eeg",
            "hint": "Blažek (2011, pp. 5, 6, 9)"
          }
        ],
        "sentences": [
          {
            "target": "nèèt kór-iet • góng kór-iet",
            "source": "leaf ('ear of tree') • bark ('skin of tree')"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "How does Daasanach express 'Leaf' as a genitive compound?",
            "correctAnswer": "nèèt kór-iet",
            "options": [
              "nèèt kór-iet",
              "góng kór-iet",
              "jáàr (sg. jáàr-tì) & wáàr (pl. wáàrrí)",
              "gíè (pl. gíèddí), 'érr & 'éèg"
            ],
            "hint": "Literally 'ear (nèèt) of tree (kór-iet)'"
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-7",
    "title": "Unit 7: Food, Canoe Navigation & Core Action Verbs",
    "description": "Learn Daasanach dietary staples, Lake Turkana dugout canoes (góngò), and consonant-assimilating action verbs.",
    "icon": "Zap",
    "skills": [
      {
        "id": "daasanach-food-home-canoe",
        "title": "Pastoral Diet, Flood-Recession Sorghum & Canoes",
        "icon": "BookOpen",
        "description": "Master vocabulary for milk, meat, butter/oil, eggs, sorghum, houses, roads, and Lake Turkana canoes.",
        "tips": "The noun bíl ('house/hut') forms its plural via liquid gemination: bíllí ('houses', Nishiguchi 2004, p. 4).",
        "words": [
          {
            "target": "'éèn (pl. 'éènnú)",
            "source": "Milk",
            "pronunciation": "een / een-nuu",
            "hint": "Nishiguchi (2004, p. 4)"
          },
          {
            "target": "só (pl. sóddí)",
            "source": "Meat / Flesh",
            "pronunciation": "soh / sod-dee",
            "hint": "Blažek (2011, p. 6, #29)"
          },
          {
            "target": "súùb (pl. súùbbú)",
            "source": "Butter / Fat / Ghee",
            "pronunciation": "suub / suub-buu",
            "hint": "Blažek (2011, p. 7, #34)"
          },
          {
            "target": "góngòl (sg. góngòl-tì, pl. góngòl-ù)",
            "source": "Egg",
            "pronunciation": "gohn-gohl / gohn-gohl-tee",
            "hint": "Blažek (2011, p. 6, #24)"
          },
          {
            "target": "bún & rúùb",
            "source": "Ritual roasted coffee beans & Flood-recession sorghum grain",
            "pronunciation": "boon & ruub",
            "hint": "Höhnel (1894, pp. 166–167)"
          },
          {
            "target": "bíl (pl. bíllí) & géric (pl. géric-u)",
            "source": "House / Dome-hut & Road / Path",
            "pronunciation": "beel / beel-lee & geh-rich",
            "hint": "Nishiguchi (2004, p. 4) & Blažek (2011, p. 9)"
          },
          {
            "target": "góngò",
            "source": "Dugout canoe used for fishing on Lake Turkana and the Omo River",
            "pronunciation": "gohn-goh",
            "hint": "Höhnel (1894, p. 165) & Tosco (2001)"
          }
        ],
        "sentences": [
          {
            "target": "'éèn — só — súùb",
            "source": "Milk — Meat — Butter/ghee"
          },
          {
            "target": "bíl (pl. bíllí) — góngò",
            "source": "House (houses) — Dugout canoe"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the Daasanach word for 'Milk' (< East Cushitic *'aan-)?",
            "correctAnswer": "'éèn (pl. 'éènnú)",
            "options": [
              "'éèn (pl. 'éènnú)",
              "só (pl. sóddí)",
              "súùb (pl. súùbbú)",
              "góngò"
            ],
            "hint": "Nishiguchi (2004, p. 4)"
          }
        ]
      },
      {
        "id": "daasanach-verbs-assimilation",
        "title": "Core Action Verbs & Sonority Assimilation",
        "icon": "Zap",
        "description": "Practice 12 high-frequency Daasanach verbs and their 2s/3f imperfective consonant assimilation patterns.",
        "tips": "Remember Nishiguchi's (2004) sonority law: stem-final /m, n/ + -ta -> -nna (kóm -> kón-nà 'eats', gíìn -> gíìn-nà 'bites'); stem-final /l, r/ + -ta -> -lla / -rra (máàl -> máàl-là 'hears', fúr -> fúr-rà 'opens', báàr -> báàr-rà 'flies'); stem-final /f/ + -ta -> -ffa (ríf -> ríf-fà 'sleeps').",
        "words": [
          {
            "target": "kóm (Imperf. 2s/3f kón-nà)",
            "source": "To eat (you eat / she eats)",
            "pronunciation": "kohm / kohn-nah",
            "hint": "Nishiguchi (2004, p. 9)"
          },
          {
            "target": "'íik (Perf. 'íiyyì, Imperf. 'íik-à)",
            "source": "To drink",
            "pronunciation": "eek / eey-yee / ee-kah",
            "hint": "Blažek (2011, p. 6, #20)"
          },
          {
            "target": "máàl (Imperf. 2s/3f máàl-là)",
            "source": "To hear / listen",
            "pronunciation": "maal / maal-lah",
            "hint": "Nishiguchi (2004, p. 8)"
          },
          {
            "target": "'árg & 'éèg",
            "source": "To see & To know",
            "pronunciation": "ahrg & eeg",
            "hint": "Blažek (2011, pp. 7, 9)"
          },
          {
            "target": "sédh (2s/3f sété) & yììdh",
            "source": "To walk / go & To come",
            "pronunciation": "sedh / seh-teh & yeedh",
            "hint": "Blažek (2011, pp. 5, 10)"
          },
          {
            "target": "ríf (2s/3f ríf-fà) & táà (kíì)",
            "source": "To sleep / lie down & To sit / stay",
            "pronunciation": "reef / reef-fah & taa",
            "hint": "Nishiguchi (2004, p. 7) & Blažek (2011, p. 9)"
          },
          {
            "target": "fúr (2s/3f fúr-rà) & kót (2s/3f kóttà)",
            "source": "To open & To dig",
            "pronunciation": "foor / foor-rah & koht / koht-tah",
            "hint": "Nishiguchi (2004, pp. 7–8)"
          },
          {
            "target": "léè (dhéè) & shíì ('úùb)",
            "source": "To say / speak & To give",
            "pronunciation": "lee & shee",
            "hint": "Blažek (2011, pp. 7, 9)"
          },
          {
            "target": "báàr (2s/3f báàr-rà) & zààk",
            "source": "To fly & To swim",
            "pronunciation": "baar / baar-rah & zaak",
            "hint": "Blažek (2011, pp. 6, 10)"
          }
        ],
        "sentences": [
          {
            "target": "kóm → kón-nà • máàl → máàl-là • fúr → fúr-rà • ríf → ríf-fà",
            "source": "eat → she eats • hear → she hears • open → she opens • sleep → she sleeps"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "When the 2s/3f imperfective suffix -ta attaches to the Daasanach verb kóm ('to eat'), what form results via nasal assimilation (Nishiguchi 2004, p. 9)?",
            "correctAnswer": "kóm (Imperf. 2s/3f kón-nà)",
            "options": [
              "kóm (Imperf. 2s/3f kón-nà)",
              "máàl (Imperf. 2s/3f máàl-là)",
              "fúr (2s/3f fúr-rà) & kót (2s/3f kóttà)",
              "ríf (2s/3f ríf-fà) & táà (kíì)"
            ],
            "hint": "/kom + -ta/ -> kón-nà"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach verb with its English meaning:",
            "correctAnswer": "kóm: To eat",
            "pairs": [
              {
                "left": "kóm",
                "right": "To eat"
              },
              {
                "left": "'íik",
                "right": "To drink"
              },
              {
                "left": "máàl",
                "right": "To hear"
              },
              {
                "left": "ríf",
                "right": "To sleep"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-8",
    "title": "Unit 8: Adjectives, Colors, Demonstratives & Interrogatives",
    "description": "Complete your Daasanach foundation with descriptive adjectives, livestock coat colors, demonstratives, and question words.",
    "icon": "Sparkles",
    "skills": [
      {
        "id": "daasanach-adjectives-colors",
        "title": "Descriptive Adjectives, Sizes & Colors",
        "icon": "Sparkles",
        "description": "Learn Daasanach adjectives for good, big, small, long/tall, new, dry, warm, cold, and primary colors.",
        "tips": "Adjectives in Daasanach follow the noun they modify: e.g., bíl gùddá ('big house'), bíyé dhéèb ('cold water').",
        "words": [
          {
            "target": "mììdhá (or déè)",
            "source": "Good / Fine / Beautiful",
            "pronunciation": "mee-dhaa / dee",
            "hint": "Blažek (2011, p. 7, #33)"
          },
          {
            "target": "gùddá (or wòl) vs. nììní",
            "source": "Big / Large vs. Small / Little",
            "pronunciation": "good-daa vs. nee-nee",
            "hint": "Blažek (2011, pp. 5, 9)"
          },
          {
            "target": "dhéèr & múùl",
            "source": "Long / Tall & Round",
            "pronunciation": "dheer & muul",
            "hint": "Blažek (2011, pp. 7, 9)"
          },
          {
            "target": "káàyà, gógà & múùg",
            "source": "New, Dry & Full",
            "pronunciation": "kaa-yah, goh-gah, muug",
            "hint": "Blažek (2011, pp. 6–8)"
          },
          {
            "target": "kúùl vs. dhéèb (qábà)",
            "source": "Warm / Hot vs. Cold",
            "pronunciation": "kuul vs. dheeb",
            "hint": "Blažek (2011, pp. 5, 10)"
          },
          {
            "target": "'éèz, 'úrù & búùr",
            "source": "White / Bright, Black / Dark & Red",
            "pronunciation": "eez, oo-ruu, buur",
            "hint": "Blažek (2011, pp. 5, 9, 10)"
          },
          {
            "target": "nyíìr & cháàr",
            "source": "Green / Wet & Yellow / Light brown",
            "pronunciation": "nyeer & chaar",
            "hint": "Blažek (2011, pp. 7, 11)"
          },
          {
            "target": "lábà & búr",
            "source": "All / Whole & Many / Much",
            "pronunciation": "lah-bah & boor",
            "hint": "Blažek (2011, pp. 5, 8)"
          }
        ],
        "sentences": [
          {
            "target": "'éèz (white) • 'úrù (black) • búùr (red) • nyíìr (green) • cháàr (yellow)",
            "source": "Core Daasanach color terms (Blažek 2011)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "Which pair of Daasanach adjectives means 'Big / Large vs. Small / Little'?",
            "correctAnswer": "gùddá (or wòl) vs. nììní",
            "options": [
              "gùddá (or wòl) vs. nììní",
              "kúùl vs. dhéèb (qábà)",
              "'éèz, 'úrù & búùr",
              "lábà & búr"
            ],
            "hint": "Blažek (2011, pp. 5, 9)"
          }
        ]
      },
      {
        "id": "daasanach-demonstratives-questions",
        "title": "Demonstratives, Negation & Question Words",
        "icon": "Lightbulb",
        "description": "Master proximal/distal demonstratives (gender-marked hé/té vs. híl/tíl), yes/no particles, and interrogatives.",
        "tips": "Demonstratives agree in grammatical gender with the noun: masculine proximal hé ('this') vs. feminine té ('this'); masculine distal híl ('that') vs. feminine tíl ('that').",
        "words": [
          {
            "target": "hé (fem. té, pl. kú)",
            "source": "This / These (proximal demonstrative)",
            "pronunciation": "heh / teh / kuu",
            "hint": "Blažek (2011, p. 10, #87)"
          },
          {
            "target": "híl (fem. tíl)",
            "source": "That (distal demonstrative)",
            "pronunciation": "heel / teel",
            "hint": "Blažek (2011, p. 10, #86)"
          },
          {
            "target": "máà? / yáà?",
            "source": "Who? (interrogative pronoun)",
            "pronunciation": "maa / yaa",
            "hint": "Blažek (2011, p. 10, #98)"
          },
          {
            "target": "méè? / míì?",
            "source": "What? (interrogative pronoun)",
            "pronunciation": "mee",
            "hint": "Blažek (2011, p. 10, #96)"
          },
          {
            "target": "ee / ii vs. ma / m'ning",
            "source": "Yes (affirmative) vs. No / Not (negative)",
            "pronunciation": "ee / ii vs. mah / m-ning",
            "hint": "Tosco (2001)"
          },
          {
            "target": "mé (pl. méddí)",
            "source": "Name",
            "pronunciation": "meh / med-dee",
            "hint": "Blažek (2011, p. 8, #56 < Cushitic *magac-)"
          }
        ],
        "sentences": [
          {
            "target": "hé (masc.) / té (fem.) vs. híl (masc.) / tíl (fem.)",
            "source": "this (masc./fem.) vs. that (masc./fem.)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "How does Daasanach distinguish masculine and feminine for the proximal demonstrative 'This'?",
            "correctAnswer": "hé (fem. té, pl. kú)",
            "options": [
              "hé (fem. té, pl. kú)",
              "híl (fem. tíl)",
              "máà? / yáà?",
              "méè? / míì?"
            ],
            "hint": "Blažek (2011, p. 10, #87)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach grammatical particle or pronoun with its meaning:",
            "correctAnswer": "hé / té: This (masc. / fem.)",
            "pairs": [
              {
                "left": "hé / té",
                "right": "This (masc. / fem.)"
              },
              {
                "left": "híl / tíl",
                "right": "That (masc. / fem.)"
              },
              {
                "left": "máà? / yáà?",
                "right": "Who?"
              },
              {
                "left": "méè? / míì?",
                "right": "What?"
              }
            ]
          }
        ]
      }
    ]
  }
];
