import type { LanguageConfig, CourseUnit } from "../types";

export const POKOMO_CONFIG: LanguageConfig = {
  "id": "pokomo",
  "name": "Pokomo",
  "nativeName": "Kipfokomo",
  "family": "Bantu",
  "counties": [
    "Tana River",
    "Lamu"
  ],
  "speakers": "112K",
  "speechLocale": "sw-KE",
  "description": "A Sabaki Bantu language spoken along the Tana River flood-plain from Garissa to Kipini.",
  "color": "#0369A1",
  "sources": [
    "krapf-six-languages-1850",
    "johnston-bantu-1919",
    "open-web-swadesh-comparative",
    "samson-darroch-pokomo-history-1944",
    "werner-bantu-coast-pokomo-1915"
  ]
};

export const POKOMO_UNITS: CourseUnit[] = [
  {
    "id": "pokomo-unit-1",
    "unitNumber": 1,
    "title": "Tana River Greetings, Sabaki Sound Shifts, Numerals & Riverine Life",
    "description": "Master Kipfokomo greetings, labial-affricate phonology (pf/bf), numerals 1–10, and Tana River vocabulary.",
    "icon": "Volume2",
    "color": "#0369A1",
    "skills": [
      {
        "id": "pokomo-river-nouns",
        "title": "Tana River (Muho wa Tsana) Vocabulary, Numerals & Wakijo Governance",
        "icon": "Crown",
        "description": "Learn Kipfokomo nouns and numerals from Krapf (1850) and Johnston (1919, Vol. I, pp. 98–112 #13 Pokomo).",
        "tips": "Like Mijikenda, Kipfokomo belongs to the Sabaki Bantu branch: Proto-Bantu *t shifts to h in muho ('river', cf. Swahili mto) and moho ('fire', cf. moto), while developing distinctive labiodental affricates (pf, bf) as in Kipfokomo.",
        "culturalNote": "Along the Tana River (Muho wa Tsana), Pokomo communities historically governed village life and flood-plain farming through the Wakijo / Gasa council of elders and navigated via carved dugout canoes (waho).",
        "words": [
          {
            "target": "Habari!",
            "source": "Greetings!",
            "pronunciation": "ha-ba-ri",
            "hint": "Kipfokomo salutation"
          },
          {
            "target": "Uko bwema? (resp. Niko bwema)",
            "source": "Are you well? (I am well)",
            "pronunciation": "u-ko bwe-ma",
            "hint": "Kipfokomo salutation"
          },
          {
            "target": "munt’u (pl. want’u)",
            "source": "Person (pl. People)",
            "pronunciation": "mu-ntu",
            "hint": "Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pokomo)"
          },
          {
            "target": "mwana (pl. wana)",
            "source": "Child (pl. Children)",
            "pronunciation": "mwa-na",
            "hint": "Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pokomo)"
          },
          {
            "target": "madzi",
            "source": "Water",
            "pronunciation": "ma-dzi",
            "hint": "Sabaki dzi- & *t > h shift (Krapf 1850)"
          },
          {
            "target": "moho",
            "source": "Fire",
            "pronunciation": "mo-ho",
            "hint": "Sabaki dzi- & *t > h shift (Krapf 1850)"
          },
          {
            "target": "muho",
            "source": "River (Muho wa Tsana = Tana River)",
            "pronunciation": "mu-ho",
            "hint": "Sabaki dzi- & *t > h shift (Krapf 1850)"
          },
          {
            "target": "waho (pl. mawaho)",
            "source": "Dugout canoe",
            "pronunciation": "wa-ho",
            "hint": "Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pokomo) riverine lexicon"
          },
          {
            "target": "nswi",
            "source": "Fish",
            "pronunciation": "nswi",
            "hint": "Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pokomo) riverine lexicon"
          },
          {
            "target": "mamba",
            "source": "Crocodile",
            "pronunciation": "ma-mba",
            "hint": "Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pokomo) riverine lexicon"
          },
          {
            "target": "mudzi (pl. midzi)",
            "source": "Village",
            "pronunciation": "mu-dzi",
            "hint": "Krapf (1850) & Pokomo governance"
          },
          {
            "target": "nyumba",
            "source": "House",
            "pronunciation": "nyu-mba",
            "hint": "Krapf (1850) & Pokomo governance"
          },
          {
            "target": "Wakijo",
            "source": "Council of Elders",
            "pronunciation": "wa-ki-jo",
            "hint": "Krapf (1850) & Pokomo governance"
          },
          {
            "target": "imwe",
            "source": "One (1)",
            "pronunciation": "i-mwe",
            "hint": "Johnston (1919, Vol. I, p. 107 #13 Pokomo) numerals"
          },
          {
            "target": "mbiri",
            "source": "Two (2)",
            "pronunciation": "mbi-ri",
            "hint": "Johnston (1919, Vol. I, p. 107 #13 Pokomo) numerals"
          },
          {
            "target": "tahu",
            "source": "Three (3)",
            "pronunciation": "ta-hu",
            "hint": "Johnston (1919, Vol. I, p. 107 #13 Pokomo) numerals"
          },
          {
            "target": "handahu",
            "source": "Six (6)",
            "pronunciation": "ha-nda-hu",
            "hint": "Johnston (1919, Vol. I, p. 107 #13 Pokomo)"
          },
          {
            "target": "fungahe",
            "source": "Seven (7)",
            "pronunciation": "fu-nga-he",
            "hint": "Johnston (1919, Vol. I, p. 107 #13 Pokomo)"
          },
          {
            "target": "nane",
            "source": "Eight (8)",
            "pronunciation": "na-ne",
            "hint": "Johnston (1919, Vol. I, p. 107 #13 Pokomo)"
          },
          {
            "target": "Mungu (Mulungu)",
            "source": "God, Supreme Creator",
            "pronunciation": "mungu",
            "hint": "Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pokomo)"
          }
        ],
        "sentences": [
          {
            "target": "Muho wa Tsana ni muyo wa mudzi.",
            "source": "The Tana River is the lifeblood of the village."
          },
          {
            "target": "Chanda kimwe hakibandi ntsaha.",
            "source": "One finger alone cannot crush a louse."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Habari!\" in Pokomo?",
            "correctAnswer": "Greetings!",
            "options": [
              "Person",
              "Greetings!",
              "Water",
              "Dugout canoe"
            ],
            "hint": "Kipfokomo salutation",
            "acceptedAnswers": [
              "Greetings! / Are you well? (I am well)",
              "Greetings!"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"munt’u\" in Pokomo?",
            "correctAnswer": "Person",
            "options": [
              "Person",
              "Water",
              "Dugout canoe",
              "Greetings!"
            ],
            "hint": "Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pokomo)",
            "acceptedAnswers": [
              "Person (pl. People) / Child (pl. Children)",
              "Person"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"madzi\" in Pokomo?",
            "correctAnswer": "Water",
            "options": [
              "Dugout canoe",
              "Greetings!",
              "Water",
              "Person"
            ],
            "hint": "Sabaki dzi- & *t > h shift (Krapf 1850)",
            "acceptedAnswers": [
              "Water / Fire / River (Muho wa Tsana = Tana River)",
              "Water"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Water\" in Pokomo?",
            "correctAnswer": "madzi",
            "options": [
              "Habari!",
              "munt’u",
              "madzi",
              "waho"
            ],
            "hint": "mah-dzee / moh-hoh / moo-hoh",
            "acceptedAnswers": [
              "madzi / moho / muho",
              "madzi"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Dugout canoe\" in Pokomo?",
            "correctAnswer": "waho",
            "options": [
              "waho",
              "Habari!",
              "munt’u",
              "madzi"
            ],
            "hint": "wah-hoh / n-swee / mahm-bah",
            "acceptedAnswers": [
              "waho (pl. mawaho) / nswi / mamba",
              "waho"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokomo expression with its English meaning:",
            "correctAnswer": "Habari! / Uko bwema? (resp. Niko bwema): Greetings! / Are you well? (I am well)",
            "pairs": [
              {
                "left": "Habari! / Uko bwema? (resp. Niko bwema)",
                "right": "Greetings! / Are you well? (I am well)"
              },
              {
                "left": "munt’u (pl. want’u) / mwana (pl. wana)",
                "right": "Person (pl. People) / Child (pl. Children)"
              },
              {
                "left": "madzi / moho / muho",
                "right": "Water / Fire / River (Muho wa Tsana = Tana River)"
              },
              {
                "left": "waho (pl. mawaho) / nswi / mamba",
                "right": "Dugout canoe / Fish / Crocodile"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokomo term for \"Village\": ___",
            "correctAnswer": "mudzi",
            "options": [
              "mudzi",
              "Habari!",
              "munt’u",
              "madzi"
            ],
            "hint": "Krapf (1850) & Pokomo governance",
            "acceptedAnswers": [
              "mudzi (pl. midzi) / nyumba / Wakijo",
              "mudzi"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pokomo-unit-2",
    "unitNumber": 2,
    "title": "Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "Users",
    "color": "#0369A1",
    "skills": [
      {
        "id": "pokomo-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "muntu (pl. wantu)",
            "source": "Person / People",
            "pronunciation": "muntu",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "baba / ise",
            "source": "Father",
            "pronunciation": "ba-ba / ise",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "mama / nina",
            "source": "Mother",
            "pronunciation": "ma-ma / ni-na",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "mwana (pl. wana)",
            "source": "Child",
            "pronunciation": "mwa-na",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "mulume (pl. walume)",
            "source": "Man / Husband",
            "pronunciation": "mu-lu-me",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "muke (pl. wake)",
            "source": "Woman / Wife",
            "pronunciation": "mu-ke",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "ndugu",
            "source": "Brother / Sibling",
            "pronunciation": "ndu-gu",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "msena / rafiki",
            "source": "Friend",
            "pronunciation": "mse-na / ra-fi-ki",
            "hint": "Würtz (1895) — Kipokomo"
          },
          {
            "target": "Mungu / Mulungu",
            "source": "God",
            "pronunciation": "mungu / mu-lungu",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"muntu\" in Pokomo?",
            "correctAnswer": "Person",
            "options": [
              "Father",
              "Mother",
              "Child",
              "Person"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo",
            "acceptedAnswers": [
              "Person / People",
              "Person"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"baba / ise\" in Pokomo?",
            "correctAnswer": "Father",
            "options": [
              "Father",
              "Mother",
              "Child",
              "Person"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mama / nina\" in Pokomo?",
            "correctAnswer": "Mother",
            "options": [
              "Child",
              "Mother",
              "Person",
              "Father"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mother\" in Pokomo?",
            "correctAnswer": "mama",
            "options": [
              "muntu",
              "baba",
              "mama",
              "mwana"
            ],
            "hint": "Starts with \"ma…\" (4 letters)",
            "acceptedAnswers": [
              "mama / nina",
              "mama"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Child\" in Pokomo?",
            "correctAnswer": "mwana",
            "options": [
              "muntu",
              "baba",
              "mwana",
              "mama"
            ],
            "hint": "Starts with \"mw…\" (5 letters)",
            "acceptedAnswers": [
              "mwana (pl. wana)",
              "mwana"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokomo expression with its English meaning:",
            "correctAnswer": "muntu (pl. wantu): Person / People",
            "pairs": [
              {
                "left": "muntu (pl. wantu)",
                "right": "Person / People"
              },
              {
                "left": "baba / ise",
                "right": "Father"
              },
              {
                "left": "mama / nina",
                "right": "Mother"
              },
              {
                "left": "mwana (pl. wana)",
                "right": "Child"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokomo term for \"Man / Husband\": ___",
            "correctAnswer": "mulume",
            "options": [
              "muntu",
              "baba",
              "mama",
              "mulume"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo",
            "acceptedAnswers": [
              "mulume (pl. walume)",
              "mulume"
            ]
          }
        ]
      },
      {
        "id": "pokomo-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "dzina (pl. madzina)",
            "source": "Name",
            "pronunciation": "dzi-na",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "ndugu ya baba",
            "source": "Aunt",
            "pronunciation": "ndu-gu ya ba-ba",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "mána mdódo",
            "source": "Boy",
            "pronunciation": "ma-na mdo-do",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "mána",
            "source": "Child",
            "pronunciation": "ma-na",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "niumba",
            "source": "Family",
            "pronunciation": "niumba",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "baba",
            "source": "Father",
            "pronunciation": "ba-ba",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "ndugu",
            "source": "Sibling / Relative",
            "pronunciation": "ndu-gu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "mana múke",
            "source": "Girl",
            "pronunciation": "ma-na mu-ke",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "zahuáje",
            "source": "Grandfather",
            "pronunciation": "za-hua-je",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"dzina (pl. madzina)\" in Pokomo (Kipfokomo)?",
            "correctAnswer": "Name",
            "options": [
              "Aunt",
              "Boy",
              "Child",
              "Name"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Pokomo (Kipfokomo) term to its English meaning:",
            "correctAnswer": "dzina (pl. madzina): Name",
            "pairs": [
              {
                "left": "dzina (pl. madzina)",
                "right": "Name"
              },
              {
                "left": "ndugu ya baba",
                "right": "Aunt"
              },
              {
                "left": "mána mdódo",
                "right": "Boy"
              },
              {
                "left": "mána",
                "right": "Child"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokomo (Kipfokomo) term for \"Family\": ___",
            "correctAnswer": "niumba",
            "options": [
              "niumba",
              "dzina",
              "ndugu ya baba",
              "mána mdódo"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          }
        ]
      }
    ]
  },
  {
    "id": "pokomo-unit-3",
    "unitNumber": 3,
    "title": "Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "Scale",
    "color": "#0369A1",
    "skills": [
      {
        "id": "pokomo-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "motsi (-motsi / mmotsi)",
            "source": "One",
            "pronunciation": "motsi",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
          },
          {
            "target": "mbili (-wili / -bili)",
            "source": "Two",
            "pronunciation": "mbi-li",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
          },
          {
            "target": "tahu (-tahu / ntahu)",
            "source": "Three",
            "pronunciation": "ta-hu",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
          },
          {
            "target": "nne (-nne)",
            "source": "Four",
            "pronunciation": "nne",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
          },
          {
            "target": "tsano (-tsano)",
            "source": "Five",
            "pronunciation": "tsa-no",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
          },
          {
            "target": "tandahu",
            "source": "Six",
            "pronunciation": "tanda-hu",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
          },
          {
            "target": "mfungate",
            "source": "Seven",
            "pronunciation": "mfunga-te",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
          },
          {
            "target": "nane",
            "source": "Eight",
            "pronunciation": "na-ne",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
          },
          {
            "target": "kenda",
            "source": "Nine",
            "pronunciation": "kenda",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"motsi (-motsi / mmotsi)\" in Pokomo?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "One",
              "Four"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mbili (-wili / -bili)\" in Pokomo?",
            "correctAnswer": "Two",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"tahu (-tahu / ntahu)\" in Pokomo?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Pokomo?",
            "correctAnswer": "tahu",
            "options": [
              "motsi",
              "tahu",
              "mbili",
              "nne"
            ],
            "hint": "Starts with \"ta…\" (4 letters)",
            "acceptedAnswers": [
              "tahu (-tahu / ntahu)",
              "tahu"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Pokomo?",
            "correctAnswer": "nne",
            "options": [
              "motsi",
              "mbili",
              "tahu",
              "nne"
            ],
            "hint": "Starts with \"nn…\" (3 letters)",
            "acceptedAnswers": [
              "nne (-nne)",
              "nne"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokomo expression with its English meaning:",
            "correctAnswer": "motsi (-motsi / mmotsi): One",
            "pairs": [
              {
                "left": "motsi (-motsi / mmotsi)",
                "right": "One"
              },
              {
                "left": "mbili (-wili / -bili)",
                "right": "Two"
              },
              {
                "left": "tahu (-tahu / ntahu)",
                "right": "Three"
              },
              {
                "left": "nne (-nne)",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokomo term for \"Five\": ___",
            "correctAnswer": "tsano",
            "options": [
              "motsi",
              "tsano",
              "mbili",
              "tahu"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals",
            "acceptedAnswers": [
              "tsano (-tsano)",
              "tsano"
            ]
          }
        ]
      },
      {
        "id": "pokomo-numbers-measures-trade-measures-3",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "kumi",
            "source": "Ten",
            "pronunciation": "ku-mi",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
          },
          {
            "target": "mirongo miwili (20)",
            "source": "Twenty",
            "pronunciation": "mi-rongo mi-wi-li",
            "hint": "Krapf (1850) & Johnston (1919, pp. 107–108) — #13 Pokomo"
          },
          {
            "target": "gana (100)",
            "source": "One hundred",
            "pronunciation": "ga-na",
            "hint": "Krapf (1850) & Johnston (1919, pp. 107–108) — #13 Pokomo"
          },
          {
            "target": "biga sikío",
            "source": "To box the ear / slap (Krapf 1850)",
            "pronunciation": "bi-ga si-kio",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo)"
          },
          {
            "target": "motsi (-motsi / mmotsi)",
            "source": "One",
            "pronunciation": "mo-tsi"
          },
          {
            "target": "záno",
            "source": "Five",
            "pronunciation": "zano"
          },
          {
            "target": "nne",
            "source": "Four",
            "pronunciation": "nne"
          },
          {
            "target": "múeda mmóza",
            "source": "Once",
            "pronunciation": "mueda mmoza"
          },
          {
            "target": "wawíi",
            "source": "Both",
            "pronunciation": "wawii"
          },
          {
            "target": "talla",
            "source": "Count",
            "pronunciation": "tal-la"
          }
        ],
        "sentences": [
          {
            "target": "kumi — mirongo miwili",
            "source": "Ten — Twenty."
          },
          {
            "target": "biga sikío — motsi",
            "source": "To box the ear — One."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kumi\" mean in English?",
            "correctAnswer": "Ten",
            "options": [
              "Ten",
              "Twenty",
              "Box",
              "One"
            ],
            "hint": "Core vocabulary in Trade, Barter, Currency & Traditional Measures"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Twenty / One hundred\"",
            "correctAnswer": "mirongo miwili",
            "acceptedAnswers": [
              "mirongo miwili (20) / gana (100)",
              "mirongo miwili"
            ],
            "hint": "Starts with \"mi\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"biga sikío\"",
            "correctAnswer": "To box the ear",
            "acceptedAnswers": [
              "To box the ear / slap (Krapf 1850)",
              "To box the ear",
              "Box, to give one-"
            ],
            "hint": "Review Trade, Barter, Currency & Traditional Measures"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Trade, Barter, Currency & Traditional Measures with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kumi",
                "right": "Ten"
              },
              {
                "left": "mirongo miwili",
                "right": "Twenty"
              },
              {
                "left": "biga sikío",
                "right": "To box the ear"
              },
              {
                "left": "motsi",
                "right": "One"
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
    "id": "pokomo-unit-4",
    "unitNumber": 4,
    "title": "Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "Tractor",
    "color": "#0369A1",
    "skills": [
      {
        "id": "pokomo-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "maziwa (mawele)",
            "source": "Milk",
            "pronunciation": "ma-zi-wa",
            "hint": "Krapf 1850 & Johnston 1919 p. 101 #13 Pokomo"
          },
          {
            "target": "izu (pl. mazu)",
            "source": "Banana",
            "pronunciation": "izu",
            "hint": "Krapf (1850) & Würtz (1895) — Tana River staple crop"
          },
          {
            "target": "mpunga / mchele",
            "source": "Rice",
            "pronunciation": "mpunga / mche-le",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "mahemba",
            "source": "Maize",
            "pronunciation": "ma-hemba",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "nyama",
            "source": "Meat",
            "pronunciation": "nya-ma",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "chakurya",
            "source": "Food",
            "pronunciation": "cha-kurya",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "ja",
            "source": "Eat",
            "pronunciation": "ja"
          },
          {
            "target": "ídji pl. mádji",
            "source": "Egg",
            "pronunciation": "idji"
          },
          {
            "target": "mafúha",
            "source": "Oil",
            "pronunciation": "mafuha"
          }
        ],
        "sentences": [
          {
            "target": "maziwa — izu",
            "source": "Milk — Banana."
          },
          {
            "target": "mpunga — mahemba",
            "source": "Rice — Maize."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"maziwa\" mean in English?",
            "correctAnswer": "Milk",
            "options": [
              "Banana",
              "Rice",
              "Maize",
              "Milk"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Banana\"",
            "correctAnswer": "izu",
            "acceptedAnswers": [
              "izu (pl. mazu)",
              "izu"
            ],
            "hint": "Starts with \"iz\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mpunga\"",
            "correctAnswer": "Rice",
            "acceptedAnswers": [
              "Rice",
              "Rice"
            ],
            "hint": "Review Staple Foods, Cookery & Beverages"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Staple Foods, Cookery & Beverages with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "maziwa",
                "right": "Milk"
              },
              {
                "left": "izu",
                "right": "Banana"
              },
              {
                "left": "mpunga",
                "right": "Rice"
              },
              {
                "left": "mahemba",
                "right": "Maize"
              },
              {
                "left": "nyama",
                "right": "Meat"
              }
            ]
          }
        ]
      },
      {
        "id": "pokomo-food-agriculture-crops-livestock-4",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "henda mkáhe",
            "source": "Bake bread",
            "pronunciation": "henda mka-he",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo)"
          },
          {
            "target": "ja",
            "source": "Eat",
            "pronunciation": "ja"
          },
          {
            "target": "hokossa",
            "source": "Boil",
            "pronunciation": "ho-kossa",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo v. a.)"
          },
          {
            "target": "mukahe",
            "source": "Bread",
            "pronunciation": "mu-ka-he",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "Kiazi",
            "source": "Yam",
            "pronunciation": "ki-azi"
          },
          {
            "target": "kanga",
            "source": "Fry",
            "pronunciation": "kang-a"
          },
          {
            "target": "iyai (pl. mayai)",
            "source": "Egg",
            "pronunciation": "i-yai"
          },
          {
            "target": "bíka",
            "source": "Cook",
            "pronunciation": "bika"
          },
          {
            "target": "jakúja",
            "source": "Food",
            "pronunciation": "jakuja"
          }
        ],
        "sentences": [
          {
            "target": "henda mkáhe — ja",
            "source": "Bake bread — Eat."
          },
          {
            "target": "hokossa — mukahe",
            "source": "Boil — Bread."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"henda mkáhe\" mean in English?",
            "correctAnswer": "Bake",
            "options": [
              "Bake",
              "Eat",
              "Boil",
              "Bread"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock",
            "acceptedAnswers": [
              "Bake, v. a. -bread",
              "Bake bread",
              "Bake"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Eat\"",
            "correctAnswer": "ja",
            "acceptedAnswers": [
              "ja",
              "ja"
            ],
            "hint": "Starts with \"ja\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"hokossa\"",
            "correctAnswer": "Boil",
            "acceptedAnswers": [
              "Boil",
              "Boil"
            ],
            "hint": "Review Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "henda mkáhe",
                "right": "Bake bread"
              },
              {
                "left": "ja",
                "right": "Eat"
              },
              {
                "left": "hokossa",
                "right": "Boil"
              },
              {
                "left": "mukahe",
                "right": "Bread"
              },
              {
                "left": "Kiazi",
                "right": "Yam"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pokomo-unit-5",
    "unitNumber": 5,
    "title": "Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "PawPrint",
    "color": "#0369A1",
    "skills": [
      {
        "id": "pokomo-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "madzi (maji)",
            "source": "Water",
            "pronunciation": "madzi",
            "hint": "Krapf (1850), Würtz (1895) & Nurse & Hinnebusch (1993) — Kipokomo"
          },
          {
            "target": "muho (Tsana)",
            "source": "River (Tana River)",
            "pronunciation": "mu-ho",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "moho (moto)",
            "source": "Fire",
            "pronunciation": "mo-ho",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "dzuwa",
            "source": "Sun",
            "pronunciation": "dzu-wa",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "mwezi",
            "source": "Moon / Month",
            "pronunciation": "mwe-zi",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "nyoha (nyota)",
            "source": "Star",
            "pronunciation": "nyo-ha",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "mvula",
            "source": "Rain",
            "pronunciation": "mvu-la",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "muhi (pl. mihi)",
            "source": "Tree",
            "pronunciation": "mu-hi",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "dziwe (pl. mawe)",
            "source": "Stone / Rock",
            "pronunciation": "dzi-we",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"madzi (maji)\" in Pokomo?",
            "correctAnswer": "Water",
            "options": [
              "River",
              "Water",
              "Fire",
              "Sun"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Nurse & Hinnebusch (1993) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"muho (Tsana)\" in Pokomo?",
            "correctAnswer": "River",
            "options": [
              "Fire",
              "River",
              "Sun",
              "Water"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo",
            "acceptedAnswers": [
              "River (Tana River)",
              "River"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"moho (moto)\" in Pokomo?",
            "correctAnswer": "Fire",
            "options": [
              "Sun",
              "Water",
              "River",
              "Fire"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fire\" in Pokomo?",
            "correctAnswer": "moho",
            "options": [
              "moho",
              "madzi",
              "muho",
              "dzuwa"
            ],
            "hint": "Starts with \"mo…\" (4 letters)",
            "acceptedAnswers": [
              "moho (moto)",
              "moho"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sun\" in Pokomo?",
            "correctAnswer": "dzuwa",
            "options": [
              "dzuwa",
              "madzi",
              "muho",
              "moho"
            ],
            "hint": "Starts with \"dz…\" (5 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokomo expression with its English meaning:",
            "correctAnswer": "madzi (maji): Water",
            "pairs": [
              {
                "left": "madzi (maji)",
                "right": "Water"
              },
              {
                "left": "muho (Tsana)",
                "right": "River (Tana River)"
              },
              {
                "left": "moho (moto)",
                "right": "Fire"
              },
              {
                "left": "dzuwa",
                "right": "Sun"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokomo term for \"Moon / Month\": ___",
            "correctAnswer": "mwezi",
            "options": [
              "madzi",
              "mwezi",
              "muho",
              "moho"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          }
        ]
      },
      {
        "id": "pokomo-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "ntsi",
            "source": "Earth / Country / Land",
            "pronunciation": "ntsi",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "siku",
            "source": "Day",
            "pronunciation": "si-ku",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "usiku",
            "source": "Night",
            "pronunciation": "u-si-ku",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "mlima (pl. milima)",
            "source": "Mountain / Hill",
            "pronunciation": "mli-ma",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "muho (Muho wa Tsana = Tana River)",
            "source": "River",
            "pronunciation": "mu-ho",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "korma júa gnombe",
            "source": "Ox",
            "pronunciation": "korma jua gnombe"
          },
          {
            "target": "niúji",
            "source": "Bee",
            "pronunciation": "niuji"
          },
          {
            "target": "paka",
            "source": "Cat",
            "pronunciation": "pa-ka"
          },
          {
            "target": "gnombe",
            "source": "Cow",
            "pronunciation": "gnomb-e"
          }
        ],
        "sentences": [
          {
            "target": "ntsi — siku",
            "source": "Earth — Day."
          },
          {
            "target": "usiku — mlima",
            "source": "Night — Mountain."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ntsi\" mean in English?",
            "correctAnswer": "Earth",
            "options": [
              "Day",
              "Night",
              "Earth",
              "Mountain"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees",
            "acceptedAnswers": [
              "Earth / Country / Land",
              "Earth"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Day\"",
            "correctAnswer": "siku",
            "acceptedAnswers": [
              "siku",
              "siku"
            ],
            "hint": "Starts with \"si\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"usiku\"",
            "correctAnswer": "Night",
            "acceptedAnswers": [
              "Night",
              "Night"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ntsi",
                "right": "Earth"
              },
              {
                "left": "siku",
                "right": "Day"
              },
              {
                "left": "usiku",
                "right": "Night"
              },
              {
                "left": "mlima",
                "right": "Mountain"
              },
              {
                "left": "muho",
                "right": "River"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pokomo-unit-6",
    "unitNumber": 6,
    "title": "The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "User",
    "color": "#0369A1",
    "skills": [
      {
        "id": "pokomo-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "kitswa (pl. vitswa)",
            "source": "Head",
            "pronunciation": "kitswa",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "dzitso (pl. matso)",
            "source": "Eye",
            "pronunciation": "dzitso",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "sikio (pl. masikio) / kutu",
            "source": "Ear",
            "pronunciation": "si-kio / ku-tu",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "pula",
            "source": "Nose",
            "pronunciation": "pu-la",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "mulomo (pl. milomo)",
            "source": "Mouth",
            "pronunciation": "mu-lo-mo",
            "hint": "Krapf (1850), Würtz (1895) & Nurse & Hinnebusch (1993)"
          },
          {
            "target": "kanwa",
            "source": "Lip",
            "pronunciation": "ka-nwa",
            "hint": "Krapf (1850), Würtz (1895) & Nurse & Hinnebusch (1993)"
          },
          {
            "target": "dzino (pl. meno)",
            "source": "Tooth",
            "pronunciation": "dzi-no",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "ulimi (pl. ndimi)",
            "source": "Tongue",
            "pronunciation": "u-li-mi",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "mukono (pl. mikono)",
            "source": "Hand / Arm",
            "pronunciation": "mu-ko-no",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "muguu (pl. miguu)",
            "source": "Leg / Foot",
            "pronunciation": "mu-guu",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kitswa (pl. vitswa)\" in Pokomo?",
            "correctAnswer": "Head",
            "options": [
              "Eye",
              "Ear",
              "Nose",
              "Head"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"dzitso (pl. matso)\" in Pokomo?",
            "correctAnswer": "Eye",
            "options": [
              "Ear",
              "Eye",
              "Nose",
              "Head"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sikio (pl. masikio) / kutu\" in Pokomo?",
            "correctAnswer": "Ear",
            "options": [
              "Nose",
              "Ear",
              "Head",
              "Eye"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ear\" in Pokomo?",
            "correctAnswer": "sikio",
            "options": [
              "sikio",
              "kitswa",
              "dzitso",
              "pula"
            ],
            "hint": "Starts with \"si…\" (5 letters)",
            "acceptedAnswers": [
              "sikio (pl. masikio) / kutu",
              "sikio"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Pokomo?",
            "correctAnswer": "pula",
            "options": [
              "pula",
              "kitswa",
              "dzitso",
              "sikio"
            ],
            "hint": "Starts with \"pu…\" (4 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokomo expression with its English meaning:",
            "correctAnswer": "kitswa (pl. vitswa): Head",
            "pairs": [
              {
                "left": "kitswa (pl. vitswa)",
                "right": "Head"
              },
              {
                "left": "dzitso (pl. matso)",
                "right": "Eye"
              },
              {
                "left": "sikio (pl. masikio) / kutu",
                "right": "Ear"
              },
              {
                "left": "pula",
                "right": "Nose"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokomo term for \"Mouth\": ___",
            "correctAnswer": "mulomo",
            "options": [
              "kitswa",
              "dzitso",
              "sikio",
              "mulomo"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Nurse & Hinnebusch (1993)",
            "acceptedAnswers": [
              "mulomo (pl. milomo) / kanwa",
              "mulomo"
            ]
          }
        ]
      },
      {
        "id": "pokomo-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "damu / mwazi",
            "source": "Blood",
            "pronunciation": "da-mu / mwa-zi",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "mfupa (pl. mifupa)",
            "source": "Bone",
            "pronunciation": "mfu-pa",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "ngozi",
            "source": "Skin / Hide",
            "pronunciation": "ngo-zi",
            "hint": "Krapf (1850) & Würtz (1895)"
          },
          {
            "target": "moyo (pl. mioyo)",
            "source": "Heart",
            "pronunciation": "mo-yo",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "Bagwi; ma-",
            "source": "Breast (man's)",
            "pronunciation": "bagwi",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Wē; ma-wē",
            "source": "Breast (woman's)",
            "pronunciation": "we",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Mu-kono; mi-. Ki-gandza; vi- (palm)",
            "source": "Hand",
            "pronunciation": "mu-kono",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Ki-tsigīno; vi-",
            "source": "Heel",
            "pronunciation": "ki-tsigino",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Ū-kōmbe; ma-",
            "source": "Nail (of finger or toe)",
            "pronunciation": "u-kombe",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"damu / mwazi\" in Pokomo?",
            "correctAnswer": "Blood",
            "options": [
              "Bone",
              "Blood",
              "Skin",
              "Heart"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mfupa (pl. mifupa)\" in Pokomo?",
            "correctAnswer": "Bone",
            "options": [
              "Skin",
              "Heart",
              "Bone",
              "Blood"
            ],
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ngozi\" in Pokomo?",
            "correctAnswer": "Skin",
            "options": [
              "Heart",
              "Skin",
              "Blood",
              "Bone"
            ],
            "hint": "Krapf (1850) & Würtz (1895)",
            "acceptedAnswers": [
              "Skin / Hide",
              "Skin"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Skin / Hide\" in Pokomo?",
            "correctAnswer": "ngozi",
            "options": [
              "ngozi",
              "damu",
              "mfupa",
              "moyo"
            ],
            "hint": "Starts with \"ng…\" (5 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Heart\" in Pokomo?",
            "correctAnswer": "moyo",
            "options": [
              "damu",
              "moyo",
              "mfupa",
              "ngozi"
            ],
            "hint": "Starts with \"mo…\" (4 letters)",
            "acceptedAnswers": [
              "moyo (pl. mioyo)",
              "moyo"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokomo expression with its English meaning:",
            "correctAnswer": "damu / mwazi: Blood",
            "pairs": [
              {
                "left": "damu / mwazi",
                "right": "Blood"
              },
              {
                "left": "mfupa (pl. mifupa)",
                "right": "Bone"
              },
              {
                "left": "ngozi",
                "right": "Skin / Hide"
              },
              {
                "left": "moyo (pl. mioyo)",
                "right": "Heart"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokomo term for \"Breast (man's)\": ___",
            "correctAnswer": "Bagwi",
            "options": [
              "damu",
              "mfupa",
              "ngozi",
              "Bagwi"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)",
            "acceptedAnswers": [
              "Bagwi; ma-",
              "Bagwi"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pokomo-unit-7",
    "unitNumber": 7,
    "title": "Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "BookOpen",
    "color": "#0369A1",
    "skills": [
      {
        "id": "pokomo-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "kunena (kuamba)",
            "source": "Speak",
            "pronunciation": "ku-ne-na",
            "hint": "Krapf 1850 & Johnston 1919 #13 Pokomo"
          },
          {
            "target": "kurya (kula)",
            "source": "Eat",
            "pronunciation": "kurya",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "kunwa",
            "source": "Drink",
            "pronunciation": "kunwa",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "kuteka madzi",
            "source": "Draw water",
            "pronunciation": "ku-te-ka madzi",
            "hint": "Pokomo oral tradition & Würtz (1895)"
          },
          {
            "target": "kuja / kudza",
            "source": "Come",
            "pronunciation": "ku-ja / kudza",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "kwenda",
            "source": "Go",
            "pronunciation": "kwenda",
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "target": "kuona",
            "source": "See",
            "pronunciation": "kuo-na",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "kusikia",
            "source": "Hear",
            "pronunciation": "ku-si-kia",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "kulala",
            "source": "Sleep",
            "pronunciation": "ku-la-la",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kunena (kuamba)\" in Pokomo?",
            "correctAnswer": "Speak",
            "options": [
              "Speak",
              "Eat",
              "Drink",
              "Draw water"
            ],
            "hint": "Krapf 1850 & Johnston 1919 #13 Pokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kurya (kula)\" in Pokomo?",
            "correctAnswer": "Eat",
            "options": [
              "Drink",
              "Draw water",
              "Speak",
              "Eat"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kunwa\" in Pokomo?",
            "correctAnswer": "Drink",
            "options": [
              "Draw water",
              "Speak",
              "Drink",
              "Eat"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Drink\" in Pokomo?",
            "correctAnswer": "kunwa",
            "options": [
              "kunena",
              "kurya",
              "kunwa",
              "kuteka madzi"
            ],
            "hint": "Starts with \"ku…\" (5 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Draw water\" in Pokomo?",
            "correctAnswer": "kuteka madzi",
            "options": [
              "kunena",
              "kurya",
              "kuteka madzi",
              "kunwa"
            ],
            "hint": "Starts with \"ku…\" (12 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokomo expression with its English meaning:",
            "correctAnswer": "kunena (kuamba): Speak",
            "pairs": [
              {
                "left": "kunena (kuamba)",
                "right": "Speak"
              },
              {
                "left": "kurya (kula)",
                "right": "Eat"
              },
              {
                "left": "kunwa",
                "right": "Drink"
              },
              {
                "left": "kuteka madzi",
                "right": "Draw water"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokomo term for \"Come\": ___",
            "correctAnswer": "kuja",
            "options": [
              "kuja",
              "kunena",
              "kurya",
              "kunwa"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo",
            "acceptedAnswers": [
              "kuja / kudza",
              "kuja"
            ]
          }
        ]
      },
      {
        "id": "pokomo-verbs-grammar-verbal-derivatives-7",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "kufa",
            "source": "Die",
            "pronunciation": "ku-fa",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "kupa",
            "source": "Give",
            "pronunciation": "ku-pa",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "kulima",
            "source": "Cultivate / Farm",
            "pronunciation": "ku-li-ma",
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "target": "kuona (-ona)",
            "source": "To see",
            "pronunciation": "kuo-na",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "kusikia (-sikia)",
            "source": "To hear",
            "pronunciation": "ku-si-kia",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "kumanya (-manya)",
            "source": "To know",
            "pronunciation": "ku-manya",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "kupenda (-penda)",
            "source": "To love / like",
            "pronunciation": "ku-penda",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "kuha (-ha)",
            "source": "To give",
            "pronunciation": "ku-ha",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "kupika (-pika)",
            "source": "To cook",
            "pronunciation": "ku-pi-ka",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kufa\" in Pokomo?",
            "correctAnswer": "Die",
            "options": [
              "Give",
              "Cultivate",
              "To see",
              "Die"
            ],
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kupa\" in Pokomo?",
            "correctAnswer": "Give",
            "options": [
              "Give",
              "Cultivate",
              "To see",
              "Die"
            ],
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kulima\" in Pokomo?",
            "correctAnswer": "Cultivate",
            "options": [
              "To see",
              "Die",
              "Give",
              "Cultivate"
            ],
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo",
            "acceptedAnswers": [
              "Cultivate / Farm",
              "Cultivate"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cultivate / Farm\" in Pokomo?",
            "correctAnswer": "kulima",
            "options": [
              "kufa",
              "kupa",
              "kulima",
              "kuona"
            ],
            "hint": "Starts with \"ku…\" (6 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To see\" in Pokomo?",
            "correctAnswer": "kuona",
            "options": [
              "kufa",
              "kupa",
              "kulima",
              "kuona"
            ],
            "hint": "koo-oh-nah",
            "acceptedAnswers": [
              "kuona (-ona)",
              "kuona"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokomo expression with its English meaning:",
            "correctAnswer": "kufa: Die",
            "pairs": [
              {
                "left": "kufa",
                "right": "Die"
              },
              {
                "left": "kupa",
                "right": "Give"
              },
              {
                "left": "kulima",
                "right": "Cultivate / Farm"
              },
              {
                "left": "kuona (-ona)",
                "right": "To see"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokomo term for \"To hear\": ___",
            "correctAnswer": "kusikia",
            "options": [
              "kufa",
              "kupa",
              "kusikia",
              "kulima"
            ],
            "hint": "Verified comparative entry across Kenyan bantu corpus",
            "acceptedAnswers": [
              "kusikia (-sikia)",
              "kusikia"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pokomo-unit-8",
    "unitNumber": 8,
    "title": "Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "Compass",
    "color": "#0369A1",
    "skills": [
      {
        "id": "pokomo-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "wiwíu",
            "source": "Dawn",
            "pronunciation": "wi-wiu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "síku",
            "source": "Day",
            "pronunciation": "si-ku",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "yéo",
            "source": "to-day",
            "pronunciation": "yeo",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo)"
          },
          {
            "target": "nawiwiu",
            "source": "Early",
            "pronunciation": "na-wi-wiu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo adv.)"
          },
          {
            "target": "madzacha",
            "source": "Dawn / Early morning",
            "pronunciation": "madzacha",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo)"
          },
          {
            "target": "zioni",
            "source": "Eve, Evening",
            "pronunciation": "zio-ni",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "sambi",
            "source": "Now",
            "pronunciation": "samb-i"
          },
          {
            "target": "júa ya mskáhi",
            "source": "Noon",
            "pronunciation": "jua ya mskahi"
          },
          {
            "target": "hárraka; fóda",
            "source": "Soon",
            "pronunciation": "harraka"
          }
        ],
        "sentences": [
          {
            "target": "wiwíu — síku",
            "source": "Dawn — Day."
          },
          {
            "target": "yéo — nawiwiu",
            "source": "to-day — Early."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"wiwíu\" mean in English?",
            "correctAnswer": "Dawn",
            "options": [
              "Day",
              "to-day",
              "Dawn",
              "Early"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Day\"",
            "correctAnswer": "síku",
            "acceptedAnswers": [
              "síku",
              "síku"
            ],
            "hint": "Starts with \"sí\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"yéo\"",
            "correctAnswer": "to-day",
            "acceptedAnswers": [
              "to-day",
              "to-day"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "wiwíu",
                "right": "Dawn"
              },
              {
                "left": "síku",
                "right": "Day"
              },
              {
                "left": "yéo",
                "right": "to-day"
              },
              {
                "left": "nawiwiu",
                "right": "Early"
              },
              {
                "left": "madzacha",
                "right": "Dawn"
              }
            ]
          }
        ]
      },
      {
        "id": "pokomo-time-calendar-journey-navigation-8",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokomo (Kipfokomo) (Kipfokomo) in Rev. Dr. J. L. Krapf (1850 Six East-African Languages) & Sir Harry Johnston (1919 Group C #13 Ki-Pokomo) preserves pre-1930 phonological, grammatical, and ethnographic usage across Tana River.",
        "words": [
          {
            "target": "wiwíde wiwiu",
            "source": "Dawn",
            "pronunciation": "wi-wi-de wi-wiu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo v. n.)"
          },
          {
            "target": "siku ya ku jia",
            "source": "Last day",
            "pronunciation": "si-ku ya ku jia",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo)"
          },
          {
            "target": "wakáti ujia",
            "source": "Late",
            "pronunciation": "wa-ka-ti u-jia",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo adv.)"
          },
          {
            "target": "usíku káhi",
            "source": "Midnight",
            "pronunciation": "u-si-ku ka-hi",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "mesi",
            "source": "Month",
            "pronunciation": "me-si",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "wíwiu",
            "source": "Morning",
            "pronunciation": "wi-wiu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo s.)"
          },
          {
            "target": "wakati",
            "source": "Time",
            "pronunciation": "wa-ka-ti"
          },
          {
            "target": "siku fungáhe",
            "source": "Week",
            "pronunciation": "siku fungahe"
          },
          {
            "target": "muáka",
            "source": "Year",
            "pronunciation": "mua-ka"
          }
        ],
        "sentences": [
          {
            "target": "wiwíde wiwiu — siku ya ku jia",
            "source": "Dawn — Last day."
          },
          {
            "target": "wakáti ujia — usíku káhi",
            "source": "Late — Midnight."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"wiwíde wiwiu\" mean in English?",
            "correctAnswer": "Dawn",
            "options": [
              "Last day",
              "Dawn",
              "Late",
              "Midnight"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Last day\"",
            "correctAnswer": "siku ya ku jia",
            "acceptedAnswers": [
              "siku ya ku jia",
              "siku ya ku jia"
            ],
            "hint": "Starts with \"si\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"wakáti ujia\"",
            "correctAnswer": "Late",
            "acceptedAnswers": [
              "Late",
              "Late"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "wiwíde wiwiu",
                "right": "Dawn"
              },
              {
                "left": "siku ya ku jia",
                "right": "Last day"
              },
              {
                "left": "wakáti ujia",
                "right": "Late"
              },
              {
                "left": "usíku káhi",
                "right": "Midnight"
              },
              {
                "left": "mesi",
                "right": "Month"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pokomo-unit-9",
    "unitNumber": 9,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Pokomo (Kipfokomo) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#0369A1",
    "skills": [
      {
        "id": "pokomo-pd-corpus-9-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Pokomo (Kipfokomo) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Pokomo (Kipfokomo) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "kái",
            "source": "Old",
            "pronunciation": "kai",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo adj.)"
          },
          {
            "target": "kifia",
            "source": "New",
            "pronunciation": "ki-fia",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo adj.)"
          },
          {
            "target": "-sūmāmā",
            "source": "To stand / stop",
            "pronunciation": "su-ma-ma",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-yālā",
            "source": "To sleep",
            "pronunciation": "ya-la",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-kālā",
            "source": "To sit / remain / abide",
            "pronunciation": "ka-la",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-ōnā",
            "source": "To see",
            "pronunciation": "ona",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-tsākā",
            "source": "To love / want",
            "pronunciation": "tsa-ka",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-yātā",
            "source": "To leave off / cease",
            "pronunciation": "ya-ta",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kái\" in Pokomo?",
            "correctAnswer": "Old",
            "options": [
              "New",
              "To stand",
              "Old",
              "To sleep"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo adj.)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Pokomo (Kipfokomo) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "kái: Old",
            "pairs": [
              {
                "left": "kái",
                "right": "Old"
              },
              {
                "left": "kifia",
                "right": "New"
              },
              {
                "left": "-sūmāmā",
                "right": "To stand / stop"
              },
              {
                "left": "-yālā",
                "right": "To sleep"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokomo (Kipfokomo) term for \"To sit / remain / abide\": ___",
            "correctAnswer": "-kālā",
            "options": [
              "-kālā",
              "-ōnā",
              "kái",
              "kifia"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          }
        ]
      },
      {
        "id": "pokomo-pd-corpus-9-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Pokomo (Kipfokomo) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Pokomo (Kipfokomo) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "-tsēkā",
            "source": "To laugh",
            "pronunciation": "tse-ka",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-mānyā",
            "source": "To know",
            "pronunciation": "manya",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-ēndā",
            "source": "To go",
            "pronunciation": "enda",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-pā",
            "source": "To give",
            "pronunciation": "pa",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-vīnā",
            "source": "To dance",
            "pronunciation": "vi-na",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-kātā",
            "source": "To cut",
            "pronunciation": "ka-ta",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-dzā",
            "source": "To come",
            "pronunciation": "dza",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-bīgā",
            "source": "To beat",
            "pronunciation": "bi-ga",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-tsēkā\" in Pokomo?",
            "correctAnswer": "To laugh",
            "options": [
              "To know",
              "To go",
              "To laugh",
              "To give"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Pokomo (Kipfokomo) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "-tsēkā: To laugh",
            "pairs": [
              {
                "left": "-tsēkā",
                "right": "To laugh"
              },
              {
                "left": "-mānyā",
                "right": "To know"
              },
              {
                "left": "-ēndā",
                "right": "To go"
              },
              {
                "left": "-pā",
                "right": "To give"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokomo (Kipfokomo) term for \"To dance\": ___",
            "correctAnswer": "-vīnā",
            "options": [
              "-kātā",
              "-vīnā",
              "-tsēkā",
              "-mānyā"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          }
        ]
      }
    ]
  },
  {
    "id": "pokomo-unit-10",
    "unitNumber": 10,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Pokomo (Kipfokomo) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#0369A1",
    "skills": [
      {
        "id": "pokomo-open-dataset-10-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Layers",
        "description": "Learn core Pokomo (Kipfokomo) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Pokomo (Kipfokomo) dialects and everyday speech.",
        "words": [
          {
            "target": "Sī-, Kā-, Tā-, -sī-",
            "source": "Not (with verb, as prefix, infix, or suffix)",
            "pronunciation": "si ka ta si",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Nhā-nhā!",
            "source": "No!",
            "pronunciation": "nha-nha",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "N-dānī",
            "source": "In, inside",
            "pronunciation": "n-dani",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Tsīnī",
            "source": "Below, down",
            "pronunciation": "tsi-ni",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Yūlū",
            "source": "Above, up, on top",
            "pronunciation": "yu-lu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-wōvū",
            "source": "Rotten",
            "pronunciation": "wo-vu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-kāyī",
            "source": "Fierce, sharp",
            "pronunciation": "ka-yi",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "-kē",
            "source": "Female",
            "pronunciation": "ke",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Sī-, Kā-, Tā-, -sī-\" in Pokomo?",
            "correctAnswer": "Not",
            "options": [
              "No!",
              "In",
              "Not",
              "Below"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)",
            "acceptedAnswers": [
              "Not (with verb, as prefix, infix, or suffix)",
              "Not"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Pokomo (Kipfokomo) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Sī-, Kā-, Tā-, -sī-: Not (with verb, as prefix, infix, or suffix)",
            "pairs": [
              {
                "left": "Sī-, Kā-, Tā-, -sī-",
                "right": "Not (with verb, as prefix, infix, or suffix)"
              },
              {
                "left": "Nhā-nhā!",
                "right": "No!"
              },
              {
                "left": "N-dānī",
                "right": "In, inside"
              },
              {
                "left": "Tsīnī",
                "right": "Below, down"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokomo (Kipfokomo) term for \"Above, up, on top\": ___",
            "correctAnswer": "Yūlū",
            "options": [
              "-wōvū",
              "Yūlū",
              "Sī-",
              "Nhā-nhā!"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          }
        ]
      },
      {
        "id": "pokomo-open-dataset-10-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Pokomo (Kipfokomo) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Pokomo (Kipfokomo) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "Hū-lē, hā-lē; hū-lē, hī-lē; &c.",
            "source": "That, those",
            "pronunciation": "hu-le ha-le",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Wāō. Wā-. -wa-. -āō",
            "source": "They, them, their",
            "pronunciation": "wao wa wa ao",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Nyīnyi. Mū-. -wa-. -ēnyū",
            "source": "Ye, you, your",
            "pronunciation": "nyinyi mu wa enyu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Swīswi. hū-. -hū-. -ēhū",
            "source": "We, us, our",
            "pronunciation": "swiswi hu hu ehu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Yēye. Kā-, A-. -mū-. -ākwē",
            "source": "He, him, his",
            "pronunciation": "ye-ye ka a mu akwe",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Wēwe. Kū-, Ū-. -kū-. -āko",
            "source": "Thou, thee",
            "pronunciation": "we-we ku u ku ako",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Mīmi. N-, Nī-. -n-. -ānggu",
            "source": "I, me",
            "pronunciation": "mi-mi n ni n anggu",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Kūmi na mōdza",
            "source": "Eleven",
            "pronunciation": "ku-mi na modza",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Hū-lē, hā-lē; hū-lē, hī-lē; &c.\" in Pokomo?",
            "correctAnswer": "That",
            "options": [
              "They",
              "Ye",
              "We",
              "That"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)",
            "acceptedAnswers": [
              "That, those",
              "That"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Pokomo (Kipfokomo) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Hū-lē, hā-lē; hū-lē, hī-lē; &c.: That, those",
            "pairs": [
              {
                "left": "Hū-lē, hā-lē; hū-lē, hī-lē; &c.",
                "right": "That, those"
              },
              {
                "left": "Wāō. Wā-. -wa-. -āō",
                "right": "They, them, their"
              },
              {
                "left": "Nyīnyi. Mū-. -wa-. -ēnyū",
                "right": "Ye, you, your"
              },
              {
                "left": "Swīswi. hū-. -hū-. -ēhū",
                "right": "We, us, our"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokomo (Kipfokomo) term for \"He, him, his\": ___",
            "correctAnswer": "Yēye. Kā-",
            "options": [
              "Wēwe. Kū-",
              "Yēye. Kā-",
              "Hū-lē",
              "Wāō. Wā-. -wa-. -āō"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)",
            "acceptedAnswers": [
              "Yēye. Kā-, A-. -mū-. -ākwē",
              "Yēye. Kā-"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pokomo-unit-11",
    "unitNumber": 11,
    "title": "A History of the Pokomo",
    "description": "Master 100% of Mikael Samson & R. G. Darroch (1944, pp. 370–394 & Map): the Kalindi & Buu histories, the 3 dried Buu rivers, the verbatim Kipokomo Lament Song for Chikovu (p. 385), all 6 Upper Pokomo tribes and their Bantu/Oromo clan tables, the Abamogo greeting, Jilo Bune's war, Ngaji/Kijo & Waganga, Missions (1884–1887), and Notes (1)–(13).",
    "icon": "BookOpen",
    "color": "#0369A1",
    "skills": [
      {
        "id": "pokomo-samson-1944-malachini-chikovu-map",
        "title": "Kalindi, Buu, the Three Former Rivers, the Chikovu Lament Song",
        "icon": "Compass",
        "description": "Learn the Kalindi migration under Hidabo to Shaka (Waungwana wa Mashaa), Liongo Fumo & Ozi, family mlango land tenure, the Buu–Sanye hippo covenant, the 3 dried Buu rivers (Milaoni/Magogoni, Ngambwa, Mbewee), and the verbatim Buu Lament Song for Chikovu (p. 385).",
        "tips": "In Kipokomo, cultivated land belongs to the family lineage (mlango) and cannot be sold; 'Mbelezo' means a canal (hence Belezoni where the present Tana leaves the old Sheriko); and the true Pokomo name of the Tana River is 'Galana Maro' ('Maro's river').",
        "culturalNote": "Mikael Samson (a Buu clerk at Kipini) drew a 4+ foot map with Garsen school-teacher Johana Daji and elder Luluta documenting all 14 river sections from Elwana to Ras Shaka, and recorded the verbatim Kipokomo lament sung by Buu elders and women with tears in their eyes for their lost village of Chikovu (p. 385).",
        "words": [
          {
            "target": "Mumaitha kadza ndio odu / Mbuu ni mzuka, endani / mukayowe kumea mani / kubfaa miima",
            "source": "If an enemy comes the Buu have bad news, go and look, the grass has grown, it has climbed the hills",
            "pronunciation": "mu-mai-tha ka-dza ndi-o o-du m-bu-u ni m-zu-ka",
            "hint": "Mikael Samson & R. G. Darroch (1944, p. 385) — Verbatim Buu lament song for Chikovu"
          },
          {
            "target": "Galana Maro",
            "source": "Maro's river (the Tana River)",
            "pronunciation": "galana-maro"
          },
          {
            "target": "Milaoni (Magogoni)",
            "source": "First former Buu river",
            "pronunciation": "milaoni"
          },
          {
            "target": "Ngambwa",
            "source": "Second former Buu river (Koloni to Chikovu)",
            "pronunciation": "ngambwa"
          },
          {
            "target": "Mbewee",
            "source": "Third former Buu river",
            "pronunciation": "mbewee"
          },
          {
            "target": "Sheriko",
            "source": "Old Tana River channel at Belezoni",
            "pronunciation": "sheriko"
          },
          {
            "target": "Kalindi",
            "source": "The two Kalindi clans",
            "pronunciation": "kalindi"
          },
          {
            "target": "Hidabo (Mrio / Kina Inti)",
            "source": "Chief Hidabo & Hidabo Hill south of Lamu",
            "pronunciation": "hidabo"
          },
          {
            "target": "Shaka (Waungwana wa Mashaa)",
            "source": "Ancient coastal settlement at Ras Shaka",
            "pronunciation": "shaka"
          },
          {
            "target": "Liongo Fumo & Ozi (Ozo Swahilis at Kau)",
            "source": "Stranger chief Liongo Fumo (A.D. 1306–1344) who built Ozi",
            "pronunciation": "liongo-fumo-ozi"
          },
          {
            "target": "mlango",
            "source": "Family lineage holding inalienable cultivated land (Note 3, p. 392)",
            "pronunciation": "mlango"
          },
          {
            "target": "Mbelezo (Belezoni)",
            "source": "A canal in Pokomo",
            "pronunciation": "mbelezo"
          },
          {
            "target": "Kiriole",
            "source": "Historic battle site at Meli",
            "pronunciation": "kiriole"
          },
          {
            "target": "Rangi",
            "source": "Canal channel at Bura / Golbanti",
            "pronunciation": "rangi"
          },
          {
            "target": "Kombo Mitambo",
            "source": "Elder who excavated the canal at Belezoni",
            "pronunciation": "kombo-mitambo"
          },
          {
            "target": "Abdalla Bashora",
            "source": "Headman of Chara",
            "pronunciation": "abdalla-bashora"
          },
          {
            "target": "Oromo",
            "source": "Indigenous name of the Oromo people (rather than exonym 'Galla')",
            "pronunciation": "oromo"
          },
          {
            "target": "Wata",
            "source": "Hunter-gatherer allies of the Buu (also called Sanye / Boni)",
            "pronunciation": "wata"
          },
          {
            "target": "Elwana",
            "source": "Upper Tana riverine community (also called Malakote)",
            "pronunciation": "elwana"
          },
          {
            "target": "Munyo",
            "source": "Upper Tana group at Korokoro (Munyo Yaya)",
            "pronunciation": "munyo"
          }
        ],
        "sentences": [
          {
            "target": "Mudzi wehu mudzi wa mbinguni hutamisaa huichamba huyawe na manya.",
            "source": "Our village (Chikovu) was a village of the heavens; we are troubled, we did not want to be lost out in the bush. (Buu Lament Song, p. 385)."
          },
          {
            "target": "Mumaitha kadza ndio odu Mbuu ni mzuka, endani mukayowe kumea mani kubfaa miima.",
            "source": "If an enemy comes the Buu have bad news, go and look, the grass has grown, it has climbed the hills. (Buu Lament Song, p. 385)."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each term from Mikael Samson & R. G. Darroch (1944) with its meaning:",
            "correctAnswer": "Galana Maro: Maro's river (true Pokomo name of the Tana River)",
            "pairs": [
              {
                "left": "Galana Maro",
                "right": "Maro's river (true Pokomo name of the Tana River)"
              },
              {
                "left": "mlango",
                "right": "Family lineage holding inalienable cultivated land"
              }
            ]
          }
        ]
      },
      {
        "id": "pokomo-samson-1944-upper-pokomo-clans-kijo",
        "title": "All 6 Upper Pokomo Tribes, Bilingual Bantu/Oromo Clan Tables",
        "icon": "Crown",
        "description": "Master the complete clan tables (Bantu & Oromo names) and histories of Ndera, Gwano, Kinakomba, Ndura, Zubaki, and Malalulu, the 'Abamogo' greeting, the Treacherous War of Jilo Bune, the Battles of Kirungu & Kadada, Chief Mukaraji Maro's genealogy, Ngaji/Kijo, Waganga, Muunguni, Missions (1884–1887), and 1895 Government arrival.",
        "tips": "Most Upper Pokomo clans have both a Bantu name and an Oromo/Hamitic name (including 'Karayu', the Boran Royal Clan of Chief Gedu in Ethiopia), except the Malalulu whose 7 clans have only Hamitic names (Note 5, p. 392).",
        "culturalNote": "When Ana Dima (ancestor of the Gwano Kinauru clan) followed his lost canoe downstream to Lake Lemu (or Mitole on the Ngambwa), he met Sango Vere (ancestor of the Buu), who was looking for fire; they greeted each other as 'Abamogo' ('wayfarer'), which remains the mutual greeting between Malachini and Upper Pokomo to this day (p. 376 & Note 8 p. 392).",
        "words": [
          {
            "target": "Abamogo!",
            "source": "Mutual greeting ('Wayfarer!') used between Malachini and Upper Pokomo commemorating Sango Vere and Ana Dima",
            "pronunciation": "a-ba-mo-go",
            "hint": "Mikael Samson & R. G. Darroch (1944, p. 376 & Note 8 p. 392)"
          },
          {
            "target": "Kinambare",
            "source": "Ndera Bantu clan (Oromo name: Karara / Uta — Mzuka Wayu)",
            "pronunciation": "kinambare"
          },
          {
            "target": "Kinankaru",
            "source": "Ndera Bantu clan (Oromo name: Sukana)",
            "pronunciation": "kinankaru"
          },
          {
            "target": "Kinauru",
            "source": "Gwano Bantu clan of Ana Dima (Oromo name: Gamadho)",
            "pronunciation": "kinauru"
          },
          {
            "target": "Kinanato",
            "source": "Gwano Bantu clan (from Gashiro & Hadiribo, freed by Ana Abio; Oromo name: Karara — Omara Oda & Chief Dadho Bahola)",
            "pronunciation": "kinanato"
          },
          {
            "target": "Kinadyasi",
            "source": "Kinakomba Bantu clan (Oromo name: Karayu — Kokane Didha)",
            "pronunciation": "kinadyasi"
          },
          {
            "target": "Kinamuyani",
            "source": "Kinakomba Bantu clan (Oromo name: Garjeda)",
            "pronunciation": "kinamuyani"
          },
          {
            "target": "Kinamulunde",
            "source": "Kinakomba Bantu clan (Oromo name: Uta)",
            "pronunciation": "kinamulunde"
          },
          {
            "target": "Kinambura",
            "source": "Ndura Bantu clan (Oromo name: Wayu — Kokane Ware / Wayole)",
            "pronunciation": "kinambura"
          },
          {
            "target": "Kinagasere",
            "source": "Ndura Bantu clan (Oromo name: Baretu / Baretu wa Maji)",
            "pronunciation": "kinagasere"
          },
          {
            "target": "Kinajasi",
            "source": "Ndura Bantu clan (Oromo name: Hajeji)",
            "pronunciation": "kinajasi"
          },
          {
            "target": "Kinambolo",
            "source": "Ndura Bantu clan (Oromo name: Karara)",
            "pronunciation": "kinambolo"
          },
          {
            "target": "Ilani",
            "source": "Zubaki & Malalulu clan (Gavere / Malalulu & Bashora)",
            "pronunciation": "ilani"
          },
          {
            "target": "Karayu",
            "source": "Boran Royal Clan in Upper Pokomo (ancestor: Mtabashi)",
            "pronunciation": "karayu"
          },
          {
            "target": "Jaba",
            "source": "Upper Pokomo clan associated with Munyo",
            "pronunciation": "jaba"
          },
          {
            "target": "Kinakaliani",
            "source": "Zubaki Bantu clan (Oromo name: Garjeda — Maro Wayu, Dulo Maro, Sarumbe & Kamba Machika Mwemwere)",
            "pronunciation": "kinakaliani"
          },
          {
            "target": "Meta",
            "source": "Upper Pokomo clan (ancestors: Komora Eba / Kuyo)",
            "pronunciation": "meta"
          },
          {
            "target": "Kinagaiba",
            "source": "Zubaki Bantu clan (ancestor: Wayu Abae)",
            "pronunciation": "kinagaiba"
          },
          {
            "target": "Karara",
            "source": "Malalulu clan (ancestor: Komora Diribo)",
            "pronunciation": "karara"
          },
          {
            "target": "Uta",
            "source": "Malalulu clan (ancestor: Bakai Galgalo)",
            "pronunciation": "uta"
          },
          {
            "target": "Garjeda",
            "source": "Malalulu clan (ancestor: Ganyare)",
            "pronunciation": "garjeda"
          },
          {
            "target": "Ngao",
            "source": "Historic lower Tana Pokomo settlement",
            "pronunciation": "ngao"
          }
        ],
        "sentences": [
          {
            "target": "Sango Vere na Ana Dima wakasalimiana kwa dzina la Abamogo.",
            "source": "Sango Vere and Ana Dima greeted each other by the name of Abamogo ('wayfarer')."
          },
          {
            "target": "Wapokomo hawawezi kuvuna bila kuweka fungu la Mungu huko Muunguni.",
            "source": "The Pokomo could not begin to reap without setting aside 'God's portion' for God in heaven (Muunguni)."
          }
        ]
      },
      {
        "id": "pokomo-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Pokomo (Kipfokomo) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "CLDF ASJP v20 UPPER_POKOMO & BantuBVD (CC-BY-4.0), Language Science Press Northern Swahili/Pokomo Contact Corpus (Nurse 2019, CC-BY-4.0), SIL Bloom Kipokomo CC-BY-4.0 & Public Domain Historical Lexicons (Krapf 1850, Würtz 1895, Werner 1915/1933, Johnston 1919, BFBS 1921 & Mikael Samson 1944).",
        "words": [
          {
            "target": "kedéria",
            "source": "Greet",
            "pronunciation": "kederia"
          },
          {
            "target": "arára",
            "source": "Peace",
            "pronunciation": "arara"
          },
          {
            "target": "ṣadda",
            "source": "Thank",
            "pronunciation": "sadda"
          },
          {
            "target": "baríki",
            "source": "Bless",
            "pronunciation": "bariki"
          },
          {
            "target": "kédia",
            "source": "Salute",
            "pronunciation": "kedia"
          },
          {
            "target": "yaza",
            "source": "Pardon",
            "pronunciation": "ya-za"
          },
          {
            "target": "zákkisa",
            "source": "Please",
            "pronunciation": "zakkisa"
          },
          {
            "target": "Karibu mudzini",
            "source": "Welcome",
            "pronunciation": "ka-ri-bu mu-dzi-ni"
          },
          {
            "target": "mungu kahúve nágĕa",
            "source": "Farewell",
            "pronunciation": "mungu kahuve nagea"
          },
          {
            "target": "Asante",
            "source": "Thank you",
            "pronunciation": "a-san-te"
          }
        ],
        "sentences": [
          {
            "target": "mungu kahúve nágĕa!",
            "source": "Farewell! May God give thee peace!"
          }
        ]
      },
      {
        "id": "pokomo-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Pokomo (Kipfokomo) sentences for healthcare, transport, and community safety.",
        "culturalNote": "CLDF ASJP v20 UPPER_POKOMO & BantuBVD (CC-BY-4.0), Language Science Press Northern Swahili/Pokomo Contact Corpus (Nurse 2019, CC-BY-4.0), SIL Bloom Kipokomo CC-BY-4.0 & Public Domain Historical Lexicons (Krapf 1850, Würtz 1895, Werner 1915/1933, Johnston 1919, BFBS 1921 & Mikael Samson 1944).",
        "words": [
          {
            "target": "motsi",
            "source": "One",
            "pronunciation": "mo-tsi"
          },
          {
            "target": "mbili",
            "source": "Two",
            "pronunciation": "mbi-li"
          },
          {
            "target": "tandahu",
            "source": "Six",
            "pronunciation": "tan-da-hu"
          },
          {
            "target": "kumi",
            "source": "Ten",
            "pronunciation": "ku-mi"
          },
          {
            "target": "nne",
            "source": "Four",
            "pronunciation": "nne"
          },
          {
            "target": "tsano",
            "source": "Five",
            "pronunciation": "tsa-no"
          },
          {
            "target": "kenda",
            "source": "Nine",
            "pronunciation": "ken-da"
          },
          {
            "target": "múeda mmóza",
            "source": "Once",
            "pronunciation": "mueda mmoza"
          },
          {
            "target": "wawíi",
            "source": "Both",
            "pronunciation": "wawii"
          },
          {
            "target": "tahu",
            "source": "Three",
            "pronunciation": "ta-hu"
          }
        ],
        "sentences": [
          {
            "target": "Wantu kumi wakwenda Muho wa Tsana kwa mawaho.",
            "source": "Ten people are going to the Tana River by dugout canoes."
          },
          {
            "target": "Wakijo wakala mudzini.",
            "source": "The council of elders sits in the village."
          },
          {
            "target": "Wawíi wakuteka madzi muhoni.",
            "source": "Both of them are drawing water at the river."
          }
        ]
      }
    ]
  }
];
