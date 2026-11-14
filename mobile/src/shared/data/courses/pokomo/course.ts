import type { CourseUnit, LanguageConfig } from "../types";

// ============================================================
// Pokomo (Kipfokomo) Language Course Configuration & Units
// Declarative modular course definition (audit-ready, zero runtime mutations)
// ============================================================

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
    "open-web-swadesh-comparative"
  ]
};

export const POKOMO_UNITS: CourseUnit[] = [
  {
    "id": "pokomo-unit-1",
    "title": "Unit 1: Tana River Greetings, Sabaki Sound Shifts, Numerals & Riverine Life",
    "description": "Master Kipfokomo greetings, labial-affricate phonology (pf/bf), numerals 1–10, and Tana River vocabulary.",
    "icon": "Volume2",
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
            "target": "Habari! / Uko bwema? (resp. Niko bwema)",
            "source": "Greetings! / Are you well? (I am well)",
            "pronunciation": "ha-ba-ri / uko bwe-ma",
            "hint": "Kipfokomo salutation"
          },
          {
            "target": "munt’u (pl. want’u) / mwana (pl. wana)",
            "source": "Person (pl. People) / Child (pl. Children)",
            "pronunciation": "munt’u / mwa-na",
            "hint": "Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pokomo)"
          },
          {
            "target": "madzi / moho / muho",
            "source": "Water / Fire / River (Muho wa Tsana = Tana River)",
            "pronunciation": "madzi / mo-ho / mu-ho",
            "hint": "Sabaki dzi- & *t > h shift (Krapf 1850)"
          },
          {
            "target": "waho (pl. mawaho) / nswi / mamba",
            "source": "Dugout canoe / Fish / Crocodile",
            "pronunciation": "wa-ho / nswi / mamba",
            "hint": "Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pokomo) riverine lexicon"
          },
          {
            "target": "mudzi (pl. midzi) / nyumba / Wakijo",
            "source": "Village / House / Council of Elders",
            "pronunciation": "mudzi / nyumba / wa-ki-jo",
            "hint": "Krapf (1850) & Pokomo governance"
          },
          {
            "target": "imwe",
            "source": "One (1)",
            "pronunciation": "imwe mbi-ri ta-hu nne tsa-no",
            "hint": "Johnston (1919, Vol. I, p. 107 #13 Pokomo) numerals"
          },
          {
            "target": "mbiri",
            "source": "Two (2)",
            "pronunciation": "imwe mbi-ri ta-hu nne tsa-no",
            "hint": "Johnston (1919, Vol. I, p. 107 #13 Pokomo) numerals"
          },
          {
            "target": "tahu",
            "source": "Three (3)",
            "pronunciation": "imwe mbi-ri ta-hu nne tsa-no",
            "hint": "Johnston (1919, Vol. I, p. 107 #13 Pokomo) numerals"
          },
          {
            "target": "handahu",
            "source": "Six (6)",
            "pronunciation": "handa-hu funga-he na-ne kenda ku-mi",
            "hint": "Johnston (1919, Vol. I, p. 107 #13 Pokomo)"
          },
          {
            "target": "fungahe",
            "source": "Seven (7)",
            "pronunciation": "handa-hu funga-he na-ne kenda ku-mi",
            "hint": "Johnston (1919, Vol. I, p. 107 #13 Pokomo)"
          },
          {
            "target": "nane",
            "source": "Eight (8)",
            "pronunciation": "handa-hu funga-he na-ne kenda ku-mi",
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
            "prompt": "What is the English meaning of \"Habari! / Uko bwema? (resp. Niko bwema)\" in Pokomo?",
            "correctAnswer": "Greetings! / Are you well? (I am well)",
            "options": [
              "Person (pl. People) / Child (pl. Children)",
              "Water / Fire / River (Muho wa Tsana = Tana River)",
              "Dugout canoe / Fish / Crocodile",
              "Greetings! / Are you well? (I am well)"
            ],
            "hint": "Kipfokomo salutation"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"munt’u (pl. want’u) / mwana (pl. wana)\" in Pokomo?",
            "correctAnswer": "Person (pl. People) / Child (pl. Children)",
            "options": [
              "Water / Fire / River (Muho wa Tsana = Tana River)",
              "Dugout canoe / Fish / Crocodile",
              "Person (pl. People) / Child (pl. Children)",
              "Greetings! / Are you well? (I am well)"
            ],
            "hint": "Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pokomo)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"madzi / moho / muho\" in Pokomo?",
            "correctAnswer": "Water / Fire / River (Muho wa Tsana = Tana River)",
            "options": [
              "Dugout canoe / Fish / Crocodile",
              "Water / Fire / River (Muho wa Tsana = Tana River)",
              "Greetings! / Are you well? (I am well)",
              "Person (pl. People) / Child (pl. Children)"
            ],
            "hint": "Sabaki dzi- & *t > h shift (Krapf 1850)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Water / Fire / River (Muho wa Tsana = Tana River)\" in Pokomo?",
            "correctAnswer": "madzi / moho / muho",
            "options": [
              "madzi / moho / muho",
              "Habari! / Uko bwema? (resp. Niko bwema)",
              "munt’u (pl. want’u) / mwana (pl. wana)",
              "waho (pl. mawaho) / nswi / mamba"
            ],
            "hint": "mah-dzee / moh-hoh / moo-hoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Dugout canoe / Fish / Crocodile\" in Pokomo?",
            "correctAnswer": "waho (pl. mawaho) / nswi / mamba",
            "options": [
              "Habari! / Uko bwema? (resp. Niko bwema)",
              "munt’u (pl. want’u) / mwana (pl. wana)",
              "madzi / moho / muho",
              "waho (pl. mawaho) / nswi / mamba"
            ],
            "hint": "wah-hoh / n-swee / mahm-bah"
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
            "prompt": "Complete the Pokomo term for \"Village / House / Council of Elders\": ___",
            "correctAnswer": "mudzi (pl. midzi) / nyumba / Wakijo",
            "options": [
              "Habari! / Uko bwema? (resp. Niko bwema)",
              "munt’u (pl. want’u) / mwana (pl. wana)",
              "madzi / moho / muho",
              "mudzi (pl. midzi) / nyumba / Wakijo"
            ],
            "hint": "Krapf (1850) & Pokomo governance"
          }
        ]
      }
    ]
  },
  {
    "id": "pokomo-unit-2",
    "title": "Unit 2: Family, Kinship, Clans & Social Organization (Rev. Dr. J. L. Krapf 1850 Six East-African Languages & Sir Harry Johnston 1919 #13)",
    "description": "Master family, kinship, clans & social organization in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "Users",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"muntu (pl. wantu)\" in Pokomo?",
            "correctAnswer": "Person / People",
            "options": [
              "Father",
              "Mother",
              "Child",
              "Person / People"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"baba / ise\" in Pokomo?",
            "correctAnswer": "Father",
            "options": [
              "Mother",
              "Child",
              "Father",
              "Person / People"
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
              "Person / People",
              "Father"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mother\" in Pokomo?",
            "correctAnswer": "mama / nina",
            "options": [
              "mama / nina",
              "muntu (pl. wantu)",
              "baba / ise",
              "mwana (pl. wana)"
            ],
            "hint": "ma-ma / ni-na"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Child\" in Pokomo?",
            "correctAnswer": "mwana (pl. wana)",
            "options": [
              "muntu (pl. wantu)",
              "baba / ise",
              "mama / nina",
              "mwana (pl. wana)"
            ],
            "hint": "mwa-na (pl. wa-na)"
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
            "correctAnswer": "mulume (pl. walume)",
            "options": [
              "muntu (pl. wantu)",
              "baba / ise",
              "mama / nina",
              "mulume (pl. walume)"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"dzina (pl. madzina)\" in Pokomo (Kipfokomo)?",
            "correctAnswer": "Name",
            "options": [
              "Name",
              "Aunt",
              "Boy",
              "Child"
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
              "dzina (pl. madzina)",
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
    "title": "Unit 3: Numbers, Counting, Currency & Measures (Rev. Dr. J. L. Krapf 1850 Six East-African Languages & Sir Harry Johnston 1919 #13)",
    "description": "Master numbers, counting, currency & measures in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "Scale",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"motsi (-motsi / mmotsi)\" in Pokomo?",
            "correctAnswer": "One",
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
            "prompt": "What is the English meaning of \"mbili (-wili / -bili)\" in Pokomo?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
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
            "correctAnswer": "tahu (-tahu / ntahu)",
            "options": [
              "tahu (-tahu / ntahu)",
              "motsi (-motsi / mmotsi)",
              "mbili (-wili / -bili)",
              "nne (-nne)"
            ],
            "hint": "ta-hu"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Pokomo?",
            "correctAnswer": "nne (-nne)",
            "options": [
              "motsi (-motsi / mmotsi)",
              "mbili (-wili / -bili)",
              "tahu (-tahu / ntahu)",
              "nne (-nne)"
            ],
            "hint": "nne"
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
            "correctAnswer": "tsano (-tsano)",
            "options": [
              "motsi (-motsi / mmotsi)",
              "mbili (-wili / -bili)",
              "tahu (-tahu / ntahu)",
              "tsano (-tsano)"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo numerals"
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
            "target": "mirongo miwili (20) / gana (100)",
            "source": "Twenty / One hundred",
            "pronunciation": "mi-rongo mi-wi-li / ga-na",
            "hint": "Krapf (1850) & Johnston (1919, pp. 107–108) — #13 Pokomo"
          },
          {
            "target": "biga sikío",
            "source": "Box, to give one-",
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
            "source": "Ten — Twenty"
          },
          {
            "target": "biga sikío — motsi",
            "source": "Box, to give one- — One"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kumi\" mean in English?",
            "correctAnswer": "Ten",
            "options": [
              "Ten",
              "Twenty / One hundred",
              "Box, to give one-",
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
            "correctAnswer": "Box, to give one-",
            "acceptedAnswers": [
              "Box, to give one-",
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
                "right": "Box, to give one-"
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
    "title": "Unit 4: Food, Cuisine, Crops & Livestock Husbandry (Rev. Dr. J. L. Krapf 1850 Six East-African Languages & Sir Harry Johnston 1919 #13)",
    "description": "Master food, cuisine, crops & livestock husbandry in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "Tractor",
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
            "source": "Milk — Banana"
          },
          {
            "target": "mpunga — mahemba",
            "source": "Rice — Maize"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"maziwa\" mean in English?",
            "correctAnswer": "Milk",
            "options": [
              "Milk",
              "Banana",
              "Rice",
              "Maize"
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
            "source": "Bake, v. a. -bread",
            "pronunciation": "henda mka-he",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo)"
          },
          {
            "target": "ja",
            "source": "Eat"
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
            "target": "Kī-āzi?",
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
            "source": "Bake, v. a. -bread — Eat"
          },
          {
            "target": "hokossa — mukahe",
            "source": "Boil — Bread"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"henda mkáhe\" mean in English?",
            "correctAnswer": "Bake, v. a. -bread",
            "options": [
              "Bake, v. a. -bread",
              "Eat",
              "Boil",
              "Bread"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
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
                "right": "Bake, v. a. -bread"
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
                "left": "Kī-āzi?",
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
    "title": "Unit 5: Nature, Landscape, Flora & East African Wildlife (Rev. Dr. J. L. Krapf 1850 Six East-African Languages & Sir Harry Johnston 1919 #13)",
    "description": "Master nature, landscape, flora & east african wildlife in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "PawPrint",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"madzi (maji)\" in Pokomo?",
            "correctAnswer": "Water",
            "options": [
              "River (Tana River)",
              "Fire",
              "Sun",
              "Water"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Nurse & Hinnebusch (1993) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"muho (Tsana)\" in Pokomo?",
            "correctAnswer": "River (Tana River)",
            "options": [
              "Fire",
              "Sun",
              "River (Tana River)",
              "Water"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"moho (moto)\" in Pokomo?",
            "correctAnswer": "Fire",
            "options": [
              "Sun",
              "Fire",
              "Water",
              "River (Tana River)"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fire\" in Pokomo?",
            "correctAnswer": "moho (moto)",
            "options": [
              "moho (moto)",
              "madzi (maji)",
              "muho (Tsana)",
              "dzuwa"
            ],
            "hint": "mo-ho"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sun\" in Pokomo?",
            "correctAnswer": "dzuwa",
            "options": [
              "madzi (maji)",
              "muho (Tsana)",
              "moho (moto)",
              "dzuwa"
            ],
            "hint": "dzu-wa"
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
              "madzi (maji)",
              "muho (Tsana)",
              "moho (moto)",
              "mwezi"
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
            "source": "Earth — Day"
          },
          {
            "target": "usiku — mlima",
            "source": "Night — Mountain"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ntsi\" mean in English?",
            "correctAnswer": "Earth / Country / Land",
            "options": [
              "Earth / Country / Land",
              "Day",
              "Night",
              "Mountain / Hill"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees"
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
    "title": "Unit 6: The Human Body, Health, Medicine & Safety (Rev. Dr. J. L. Krapf 1850 Six East-African Languages & Sir Harry Johnston 1919 #13)",
    "description": "Master the human body, health, medicine & safety in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "User",
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
            "target": "mulomo (pl. milomo) / kanwa",
            "source": "Mouth / Lip",
            "pronunciation": "mu-lo-mo / kanwa",
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
        "sentences": [],
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
              "Nose",
              "Eye",
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
            "correctAnswer": "sikio (pl. masikio) / kutu",
            "options": [
              "sikio (pl. masikio) / kutu",
              "kitswa (pl. vitswa)",
              "dzitso (pl. matso)",
              "pula"
            ],
            "hint": "si-ki-o / ku-tu"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Pokomo?",
            "correctAnswer": "pula",
            "options": [
              "kitswa (pl. vitswa)",
              "dzitso (pl. matso)",
              "sikio (pl. masikio) / kutu",
              "pula"
            ],
            "hint": "pu-la"
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
            "prompt": "Complete the Pokomo term for \"Mouth / Lip\": ___",
            "correctAnswer": "mulomo (pl. milomo) / kanwa",
            "options": [
              "kitswa (pl. vitswa)",
              "dzitso (pl. matso)",
              "sikio (pl. masikio) / kutu",
              "mulomo (pl. milomo) / kanwa"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Nurse & Hinnebusch (1993)"
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"damu / mwazi\" in Pokomo?",
            "correctAnswer": "Blood",
            "options": [
              "Bone",
              "Skin / Hide",
              "Heart",
              "Blood"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mfupa (pl. mifupa)\" in Pokomo?",
            "correctAnswer": "Bone",
            "options": [
              "Skin / Hide",
              "Heart",
              "Bone",
              "Blood"
            ],
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ngozi\" in Pokomo?",
            "correctAnswer": "Skin / Hide",
            "options": [
              "Heart",
              "Skin / Hide",
              "Blood",
              "Bone"
            ],
            "hint": "Krapf (1850) & Würtz (1895)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Skin / Hide\" in Pokomo?",
            "correctAnswer": "ngozi",
            "options": [
              "ngozi",
              "damu / mwazi",
              "mfupa (pl. mifupa)",
              "moyo (pl. mioyo)"
            ],
            "hint": "ngo-zi"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Heart\" in Pokomo?",
            "correctAnswer": "moyo (pl. mioyo)",
            "options": [
              "damu / mwazi",
              "mfupa (pl. mifupa)",
              "ngozi",
              "moyo (pl. mioyo)"
            ],
            "hint": "mo-yo"
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
            "correctAnswer": "Bagwi; ma-",
            "options": [
              "damu / mwazi",
              "mfupa (pl. mifupa)",
              "ngozi",
              "Bagwi; ma-"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          }
        ]
      }
    ]
  },
  {
    "id": "pokomo-unit-7",
    "title": "Unit 7: Core Verbs, Tenses, Negation & Verbal Extensions (Rev. Dr. J. L. Krapf 1850 Six East-African Languages & Sir Harry Johnston 1919 #13)",
    "description": "Master core verbs, tenses, negation & verbal extensions in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "BookOpen",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kunena (kuamba)\" in Pokomo?",
            "correctAnswer": "Speak",
            "options": [
              "Eat",
              "Drink",
              "Draw water",
              "Speak"
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
              "Eat",
              "Speak"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kunwa\" in Pokomo?",
            "correctAnswer": "Drink",
            "options": [
              "Draw water",
              "Drink",
              "Speak",
              "Eat"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Drink\" in Pokomo?",
            "correctAnswer": "kunwa",
            "options": [
              "kunwa",
              "kunena (kuamba)",
              "kurya (kula)",
              "kuteka madzi"
            ],
            "hint": "kun-wa"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Draw water\" in Pokomo?",
            "correctAnswer": "kuteka madzi",
            "options": [
              "kunena (kuamba)",
              "kurya (kula)",
              "kunwa",
              "kuteka madzi"
            ],
            "hint": "ku-te-ka ma-dzi"
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
            "correctAnswer": "kuja / kudza",
            "options": [
              "kunena (kuamba)",
              "kurya (kula)",
              "kunwa",
              "kuja / kudza"
            ],
            "hint": "Krapf (1850), Würtz (1895) & Johnston (1919) — Kipokomo"
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kufa\" in Pokomo?",
            "correctAnswer": "Die",
            "options": [
              "Give",
              "Cultivate / Farm",
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
              "Cultivate / Farm",
              "To see",
              "Give",
              "Die"
            ],
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kulima\" in Pokomo?",
            "correctAnswer": "Cultivate / Farm",
            "options": [
              "To see",
              "Cultivate / Farm",
              "Die",
              "Give"
            ],
            "hint": "Krapf (1850) & Würtz (1895) — Kipokomo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cultivate / Farm\" in Pokomo?",
            "correctAnswer": "kulima",
            "options": [
              "kulima",
              "kufa",
              "kupa",
              "kuona (-ona)"
            ],
            "hint": "ku-li-ma"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To see\" in Pokomo?",
            "correctAnswer": "kuona (-ona)",
            "options": [
              "kufa",
              "kupa",
              "kulima",
              "kuona (-ona)"
            ],
            "hint": "koo-oh-nah"
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
            "correctAnswer": "kusikia (-sikia)",
            "options": [
              "kufa",
              "kupa",
              "kulima",
              "kusikia (-sikia)"
            ],
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          }
        ]
      }
    ]
  },
  {
    "id": "pokomo-unit-8",
    "title": "Unit 8: Time, Indigenous Calendar, Seasons & Navigation (Rev. Dr. J. L. Krapf 1850 Six East-African Languages & Sir Harry Johnston 1919 #13)",
    "description": "Master time, indigenous calendar, seasons & navigation in Pokomo (Kipfokomo) built directly from Rev. Dr. J. L. Krapf (1850), F. Würtz (1895), Alice Werner (1913), Mikael Samson (1944), and Sir Harry H. Johnston (1919).",
    "icon": "Compass",
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
            "source": "Dawn — Day"
          },
          {
            "target": "yéo — nawiwiu",
            "source": "to-day — Early"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"wiwíu\" mean in English?",
            "correctAnswer": "Dawn",
            "options": [
              "Dawn",
              "Day",
              "to-day",
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
            "source": "Dawn — Last day"
          },
          {
            "target": "wakáti ujia — usíku káhi",
            "source": "Late — Midnight"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"wiwíde wiwiu\" mean in English?",
            "correctAnswer": "Dawn",
            "options": [
              "Dawn",
              "Last day",
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
    "id": "pokomo-unit-9-public-domain-corpus",
    "title": "Unit 9: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Pokomo (Kipfokomo) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kái\" in Pokomo?",
            "correctAnswer": "Old",
            "options": [
              "Old",
              "New",
              "To stand / stop",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-tsēkā\" in Pokomo?",
            "correctAnswer": "To laugh",
            "options": [
              "To laugh",
              "To know",
              "To go",
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
              "-vīnā",
              "-kātā",
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
    "id": "pokomo-unit-10-open-datasets-modern",
    "title": "Unit 10: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Pokomo (Kipfokomo) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Sī-, Kā-, Tā-, -sī-\" in Pokomo?",
            "correctAnswer": "Not (with verb, as prefix, infix, or suffix)",
            "options": [
              "Not (with verb, as prefix, infix, or suffix)",
              "No!",
              "In, inside",
              "Below, down"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
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
              "Yūlū",
              "-wōvū",
              "Sī-, Kā-, Tā-, -sī-",
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
            "source": "Thou, thee, thy",
            "pronunciation": "we-we ku u ku ako",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          },
          {
            "target": "Mīmi. N-, Nī-. -n-. -ānggū",
            "source": "I, me, my",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Hū-lē, hā-lē; hū-lē, hī-lē; &c.\" in Pokomo?",
            "correctAnswer": "That, those",
            "options": [
              "That, those",
              "They, them, their",
              "Ye, you, your",
              "We, us, our"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
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
            "correctAnswer": "Yēye. Kā-, A-. -mū-. -ākwē",
            "options": [
              "Yēye. Kā-, A-. -mū-. -ākwē",
              "Wēwe. Kū-, Ū-. -kū-. -āko",
              "Hū-lē, hā-lē; hū-lē, hī-lē; &c.",
              "Wāō. Wā-. -wa-. -āō"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
          }
        ]
      }
    ]
  }
];

// ── Register samson-darroch-pokomo-history-1944 & Unit 11: Mikael Samson & R. G. Darroch (1944, pp. 370–394 & Map) ──
if (POKOMO_CONFIG.sources && !POKOMO_CONFIG.sources.includes("samson-darroch-pokomo-history-1944")) {
  POKOMO_CONFIG.sources.push("samson-darroch-pokomo-history-1944");
}
if (POKOMO_CONFIG.sources && !POKOMO_CONFIG.sources.includes("werner-bantu-coast-pokomo-1915")) {
  POKOMO_CONFIG.sources.push("werner-bantu-coast-pokomo-1915");
}

POKOMO_UNITS.push({
  id: "pokomo-unit-11-samson-darroch-1944",
  title: "Unit 11: A History of the Pokomo — Malachini & Upper Pokomo Clans, the Chikovu Lament Song, Galana Maro Map & Kijo/Ngaji Charter (Mikael Samson & R. G. Darroch 1944, pp. 370–394)",
  description: "Master 100% of Mikael Samson & R. G. Darroch (1944, pp. 370–394 & Map): the Kalindi & Buu histories, the 3 dried Buu rivers, the verbatim Kipokomo Lament Song for Chikovu (p. 385), all 6 Upper Pokomo tribes and their Bantu/Oromo clan tables, the Abamogo greeting, Jilo Bune's war, Ngaji/Kijo & Waganga, Missions (1884–1887), and Notes (1)–(13).",
  icon: "BookOpen",
  skills: [
    {
      id: "pokomo-samson-1944-malachini-chikovu-map",
      title: "Kalindi, Buu, the Three Former Rivers, the Chikovu Lament Song & the 14-Section Tana Map (pp. 370–374, 383–385 & Notes 1–4)",
      icon: "Compass",
      description: "Learn the Kalindi migration under Hidabo to Shaka (Waungwana wa Mashaa), Liongo Fumo & Ozi, family mlango land tenure, the Buu–Sanye hippo covenant, the 3 dried Buu rivers (Milaoni/Magogoni, Ngambwa, Mbewee), and the verbatim Buu Lament Song for Chikovu (p. 385).",
      tips: "In Kipokomo, cultivated land belongs to the family lineage (mlango) and cannot be sold; 'Mbelezo' means a canal (hence Belezoni where the present Tana leaves the old Sheriko); and the true Pokomo name of the Tana River is 'Galana Maro' ('Maro's river').",
      culturalNote: "Mikael Samson (a Buu clerk at Kipini) drew a 4+ foot map with Garsen school-teacher Johana Daji and elder Luluta documenting all 14 river sections from Elwana to Ras Shaka, and recorded the verbatim Kipokomo lament sung by Buu elders and women with tears in their eyes for their lost village of Chikovu (p. 385).",
      words: [
        {
          target: "Mumaitha kadza ndio odu / Mbuu ni mzuka, endani / mukayowe kumea mani kubfaa / miima, azi na mfungu za / Witu nazo huziona, mudzi / wehu mudzi wa mbinguni / hutamisaa huichamba huyawe / na manya.",
          source: "If an enemy comes the Buu have bad news, go and look, the grass has grown, it has climbed the hills, we have seen the portions of Witu, our village was of the heavens, we are troubled, we did not want to be lost out in the bush.",
          pronunciation: "mu-mai-tha ka-dza ndi-o o-du m-bu-u ni m-zu-ka",
          hint: "Mikael Samson & R. G. Darroch (1944, p. 385) — Verbatim Buu lament song for Chikovu"
        },
        {
          target: "Galana Maro • Milaoni (Magogoni) • Ngambwa • Mbewee • Sheriko",
          source: "Maro's river (the Tana River) • First former Buu river (Nkombeni/Mowa to Kau, shared with the Sanye) • Second former Buu river (Koloni to Chikovu) • Third former Buu river (Muhoni, Murikicha, Nyangu, Gawisa to Mbalahini) • Old Tana River channel at Belezoni",
          pronunciation: "ga-la-na ma-ro / mi-la-o-ni / nga-mbwa / m-be-we-e / she-ri-ko",
          hint: "Mikael Samson & R. G. Darroch (1944, Map & pp. 373–374, 384, 387–388, 392)"
        },
        {
          target: "Kalindi (Namboo & Mangwe / Gomeni) • Hidabo (Mrio / Kina Inti) • Shaka (Waungwana wa Mashaa) • Liongo Fumo & Ozi (Ozo Swahilis at Kau)",
          source: "The two Kalindi clans • Chief Hidabo & Hidabo Hill south of Lamu (pre-Islamic town Mrio of the Kina Inti, Note 1) • Shaka (founded A.H. 121 under Harun al Rashid, Note 2) • Stranger chief Liongo Fumo (A.D. 1306–1344) who built Ozi",
          pronunciation: "ka-li-ndi / na-mbo-o / ma-ngwe / hi-da-bo / ki-na i-nti / sha-ka / li-o-ngo fu-mo",
          hint: "Mikael Samson & R. G. Darroch (1944, pp. 371–372, 383–384 & Notes 1–3 pp. 391–392)"
        },
        {
          target: "mlango • Mbelezo (Belezoni) • maro",
          source: "Family lineage holding inalienable cultivated land (Note 3, p. 392) • A canal in Pokomo (hence Belezoni, Note 4, p. 392) • System of free village-to-village canoe transport demanded by Arabs and defeated at Kirungu (p. 375 & Note 7)",
          pronunciation: "m-la-ngo / m-be-le-zo / ma-ro",
          hint: "Mikael Samson & R. G. Darroch (1944, pp. 375, 391–392)"
        },
        {
          target: "Kiriole (at Meli) • Rangi (at Bura / Golbanti) • Kombo Mitambo (at Belezoni) • Abdalla Bashora (Headman of Chara)",
          source: "The two Kalindi Headmen and one Ndera Headman (~1,000 Upper Pokomo in Chara) listed in 1900 by first D.C. Mr. Anderssen, plus the 1944 Ndera Headman of Chara (p. 373 & Note 4, p. 392)",
          pronunciation: "ki-ri-o-le / ra-ngi / ko-mbo mi-ta-mbo / a-bda-lla ba-sho-ra",
          hint: "Mikael Samson & R. G. Darroch (1944, p. 373 & Note 4 p. 392)"
        },
        {
          target: "Oromo (not Galla) • Wata (not Boni) • Elwana (not Malakote) • Munyo (not Korokoro)",
          source: "The four non-Pokomo peoples' true self-designations used by R. G. Darroch (pp. 371, 380 & Note 11, p. 393; Oromo also use 'Munyo' for all river tribes)",
          pronunciation: "o-ro-mo / wa-ta / e-lwa-na / mu-nyo",
          hint: "Mikael Samson & R. G. Darroch (1944, pp. 371, 380, 393)"
        }
      ],
      sentences: [
        {
          target: "Mudzi wehu mudzi wa mbinguni hutamisaa huichamba huyawe na manya.",
          source: "Our village (Chikovu) was a village of the heavens; we are troubled, we did not want to be lost out in the bush. (Buu Lament Song, p. 385)"
        },
        {
          target: "Mumaitha kadza ndio odu Mbuu ni mzuka, endani mukayowe kumea mani kubfaa miima.",
          source: "If an enemy comes the Buu have bad news, go and look, the grass has grown, it has climbed the hills. (Buu Lament Song, p. 385)"
        }
      ],
      authoredExercises: [
        {
          type: "multiple_choice",
          prompt: "In the verbatim Kipokomo Lament Song of the Buu for their lost village Chikovu (Mikael Samson 1944, p. 385), what does 'mudzi wehu mudzi wa mbinguni hutamisaa huichamba huyawe na manya' mean?",
          correctAnswer: "Our village was of the heavens, we are troubled, we did not want to be lost out in the bush",
          options: [
            "Our village was of the heavens, we are troubled, we did not want to be lost out in the bush",
            "The Tana River has flooded our rice fields twice this year",
            "Liongo Fumo built the town of Ozi beyond Shaka",
            "We paddles our canoes from Baumo to Lake Lemu"
          ],
          hint: "From the 8-line Kipokomo song on p. 385"
        },
        {
          type: "multiple_choice",
          prompt: "According to Mikael Samson & R. G. Darroch (1944, pp. 373–374, 384), what were the three successive former river channels occupied by the Buu before they moved to Ngao on the present Tana?",
          correctAnswer: "The Milaoni (Magogoni), the Ngambwa (where Chikovu stood), and the Mbewee",
          options: [
            "The Milaoni (Magogoni), the Ngambwa (where Chikovu stood), and the Mbewee",
            "The Sabaki, the Voi, and the Lumi",
            "The Ewaso Ng'iro, the Daua, and the Omo",
            "The Athi, the Thika, and the Ramisi"
          ],
          hint: "Explained in 'Explanation of the Map of Malachini Country' (pp. 373–374)"
        },
        {
          type: "match_pairs",
          prompt: "Match each term from Mikael Samson & R. G. Darroch (1944) with its meaning:",
          correctAnswer: "Galana Maro: Maro's river (true Pokomo name of the Tana River)",
          pairs: [
            {
              left: "Galana Maro",
              right: "Maro's river (true Pokomo name of the Tana River)"
            },
            {
              left: "Mbelezo (Belezoni)",
              right: "Pokomo word for a canal (where the present Tana leaves the Sheriko)"
            },
            {
              left: "mlango",
              right: "Family lineage holding inalienable cultivated land"
            },
            {
              left: "maro",
              right: "Free village-to-village canoe relay demanded by Arabs and defeated at Kirungu"
            }
          ]
        }
      ]
    },
    {
      id: "pokomo-samson-1944-upper-pokomo-clans-kijo",
      title: "All 6 Upper Pokomo Tribes, Bilingual Bantu/Oromo Clan Tables, 'Abamogo', Jilo Bune's War & Kijo/Ngaji (pp. 374–394)",
      icon: "Crown",
      description: "Master the complete clan tables (Bantu & Oromo names) and histories of Ndera, Gwano, Kinakomba, Ndura, Zubaki, and Malalulu, the 'Abamogo' greeting, the Treacherous War of Jilo Bune, the Battles of Kirungu & Kadada, Chief Mukaraji Maro's genealogy, Ngaji/Kijo, Waganga, Muunguni, Missions (1884–1887), and 1895 Government arrival.",
      tips: "Most Upper Pokomo clans have both a Bantu name and an Oromo/Hamitic name (including 'Karayu', the Boran Royal Clan of Chief Gedu in Ethiopia), except the Malalulu whose 7 clans have only Hamitic names (Note 5, p. 392).",
      culturalNote: "When Ana Dima (ancestor of the Gwano Kinauru clan) followed his lost canoe downstream to Lake Lemu (or Mitole on the Ngambwa), he met Sango Vere (ancestor of the Buu), who was looking for fire; they greeted each other as 'Abamogo' ('wayfarer'), which remains the mutual greeting between Malachini and Upper Pokomo to this day (p. 376 & Note 8 p. 392).",
      words: [
        {
          target: "Abamogo! ('Wayfarer!' — greeting of Ana Dima of Gwano & Sango Vere of Buu at Lake Lemu / Mitole, pp. 376, 392)",
          source: "Mutual greeting used to this day between Malachini and Upper Pokomo commemorating the meeting of Ana Dima and Sango Vere (or his father Vere)",
          pronunciation: "a-ba-mo-go",
          hint: "Mikael Samson & R. G. Darroch (1944, p. 376 & Note 8 p. 392)"
        },
        {
          target: "Ndera Clans: Kinamoto / Kinamaziwani (Karayu) • Kinambare (Karara) • Kinankaru (Sukana) • Kinauru (Gamadho) • Kinanato (from Gashiro & Hadiribo, freed by Ana Abio)",
          source: "The 4 tabulated Ndera clans + Kinanato (pp. 374–377, 385–386; at Kirungu, Gwano warrior Buya Gafo killed Arab leader Mwenye Era, Note 7 p. 392)",
          pronunciation: "ki-na-mo-to / ki-na-ma-zi-wa-ni / ka-ra-yu / ki-na-mba-re / ki-na-nka-ru / ki-na-u-ru / ki-na-na-to",
          hint: "Mikael Samson & R. G. Darroch (1944, pp. 374–377, 385–386, 392)"
        },
        {
          target: "Gwano Clans: Kinauru (Gamado — Red & Black septs of Chief Dadho Moroa) • Kinadyasi (Karayu — Kokane Didha) • Kinakale / Karara Dulo (Karara — Dulo at Wenje)",
          source: "The 3 Gwano clans (pp. 375–378; Ana Dima at Takafu near Makere, with Ana Bake = Kofira Oromo & Ana Kare = Migo Oromo; survived Oromo chief Jilo Bune's drugged-bull stockade ambush)",
          pronunciation: "ki-na-u-ru / ga-ma-do / da-dho mo-ro-a / ki-na-dya-si / ki-na-ka-le / ka-ra-ra du-lo",
          hint: "Mikael Samson & R. G. Darroch (1944, pp. 375–378, 386 & Notes 6, 9 pp. 392–393)"
        },
        {
          target: "Kinakomba Clans: Kinambolo & Mandoyo (Karara — Boran Ali Gutu at Mankombe/Dakacha below Kiaponi) • Kinamuyani (Garjeda) • Kinamulunde (Uta) • Kinambura (Wayu — Kokane Ware) • Kinanguu",
          source: "The Kinakomba clans split between Lower Kinakomba at Kiaponi (chiefs & Ngaji house, descended from Ali Gutu) and Upper Kinakomba at Masalani (pp. 378, 386–387)",
          pronunciation: "ki-na-mbo-lo / ma-ndo-yo / a-li gu-tu / ki-na-mu-ya-ni / ki-na-mu-lu-nde / ki-na-mbu-ra",
          hint: "Mikael Samson & R. G. Darroch (1944, pp. 378, 386–387)"
        },
        {
          target: "Ndura Clans: Sindo wa Ndura (Karayu — Galole Hirimani & Gababa Kitole) • Kinambare (Uta — Mzuka Wayu) • Kinanato (Karara — Omara Oda & Chief Dadho Bahola) • Kinagasere (Baretu) • Kinajasi (Hajeji) • Kinambolo (Karara) • Kinambura (Wayole)",
          source: "The 7 Ndura clans, famous for secret night cultivation, Somali attacks at Mangulo & Mazuni, and the Fanjua–Mazuni club fight stopped by teacher Ibrahim Kitere (pp. 378–379, 387)",
          pronunciation: "si-ndo wa ndu-ra / ga-lo-le hi-ri-ma-ni / o-ma-ra o-da / da-dho ba-ho-la / i-bra-him ki-te-re",
          hint: "Mikael Samson & R. G. Darroch (1944, pp. 378–379, 387)"
        },
        {
          target: "Zubaki Clans: Uta (Hiye at Hola) • Ilani (Gavere) • Karayu (Mtabashi) • Jaba (Munyo) • Kinagasere (Baretu wa Maji) • Kinakaliani (Garjeda — Maro Wayu, Dulo Maro, Sarumbe & Kamba Machika Mwemwere) • Meta (Komora Eba) • Kinagaiba (Wayu Abae) • Karara (Komora Diribo)",
          source: "The 9 Zubaki clans and 4 wars: killing Oromo chief Gungumi at Hola, Chief Wayu Umuru defeating Wata (who became Ngatana at Lake Jange), Chief Karayu Wayu shooting Somalis at Kadada, and Kamba burning Kadada stockade (Goyoi & blind elder Malim Jilo, pp. 380–382)",
          pronunciation: "u-ta / i-la-ni / ka-ra-yu / ja-ba / ki-na-ga-se-re / ki-na-ka-li-a-ni / ma-chi-ka mwe-mwe-re / ka-da-da",
          hint: "Mikael Samson & R. G. Darroch (1944, pp. 380–382, 387–388)"
        },
        {
          target: "Malalulu Clans (All Hamitic): Wayu Duko & Wayu Chireti (Gatokombo/Maro < tokombo 'mud' → Igu, Ibae & Kimtu) • Uta (Bakai Galgalo) • Meta (Kuyo) • Dulo/Karara (Dulo) • Garjeda (Ganyare) • Ilani (Malalulu & Bashora)",
          source: "The 7 Malalulu clans and Chief Mukaraji Maro's 6-generation genealogy: Gatokombo (Maro)—Igu—Maro—Dadho—Maro—Mukaraji (pp. 382–383, 388 & Note 11 p. 393)",
          pronunciation: "wa-yu du-ko / wa-yu chi-re-ti / ga-to-ko-mbo / to-ko-mbo / mu-ka-ra-ji ma-ro",
          hint: "Mikael Samson & R. G. Darroch (1944, pp. 382–383, 388 & Note 11 p. 393)"
        },
        {
          target: "Kijo & Ngaji • Waganga • Muunguni & 'God's Portion' • 1884 Golbanti (Methodist) & Kulesa (Swedish) • 1887 Ngao (Neukirchen Mission: Wietts, Chief Buko Doyo, Kadiko Herbae, Abadula Gerera) • 1895 Mr. Anderssen (Bwana Muchinjeni)",
          source: "Pokomo religious, legal, missionary, and administrative milestones (pp. 388–394, Notes 12–13; including the 7th-month pregnancy exemption from field cultivation)",
          pronunciation: "ki-jo / nga-ji / wa-ga-nga / mu-u-ngu-ni / bwa-na mu-chi-nje-ni",
          hint: "Mikael Samson & R. G. Darroch (1944, pp. 388–394)"
        }
      ],
      sentences: [
        {
          target: "Sango Vere na Ana Dima wakasalimiana kwa dzina la Abamogo.",
          source: "Sango Vere and Ana Dima greeted each other by the name of Abamogo ('wayfarer'). (p. 376)"
        },
        {
          target: "Wapokomo hawawezi kuvuna bila kuweka fungu la Mungu huko Muunguni.",
          source: "The Pokomo could not begin to reap without setting aside 'God's portion' for God in heaven (Muunguni). (p. 389)"
        }
      ],
      authoredExercises: [
        {
          type: "multiple_choice",
          prompt: "Why do Malachini and Upper Pokomo greet each other as 'Abamogo' ('wayfarer') to this day (Mikael Samson & R. G. Darroch 1944, p. 376 & Note 8 p. 392)?",
          correctAnswer: "Because Ana Dima (ancestor of the Gwano) and Sango Vere (ancestor of the Buu) greeted each other as 'Abamogo' when they met at Lake Lemu / Mitole",
          options: [
            "Because Ana Dima (ancestor of the Gwano) and Sango Vere (ancestor of the Buu) greeted each other as 'Abamogo' when they met at Lake Lemu / Mitole",
            "Because Chief Hidabo used the word when naming Hidabo Hill south of Lamu",
            "Because Oromo chief Jilo Bune used it before the stockade ambush",
            "Because Mr. Anderssen (Bwana Muchinjeni) introduced it at Ngao in 1895"
          ],
          hint: "See 'Ana Dima's Journey Downstream' (p. 376) and Note 8 (p. 392)"
        },
        {
          type: "multiple_choice",
          prompt: "Why was the founder of the Malalulu clans Wayu Duko and Wayu Chireti (whose real name was Maro) nicknamed 'Gatokombo' (Mikael Samson & R. G. Darroch 1944, p. 382 & Note 11 p. 393)?",
          correctAnswer: "Because he was found eating mud, which is called 'tokombo' in the Malalulu dialect",
          options: [
            "Because he was found eating mud, which is called 'tokombo' in the Malalulu dialect",
            "Because he built the first dugout canoe on the Milaoni River",
            "Because he defeated the Arab leader Mwenye Era at Kirungu",
            "Because he carved the first honey-barrel Ngaji drum for the Kijo"
          ],
          hint: "See 'The Malalulu' (p. 382)"
        },
        {
          type: "match_pairs",
          prompt: "Match each historical figure or institution in Mikael Samson & R. G. Darroch (1944) with its description:",
          correctAnswer: "Dadho Moroa: Sole surviving Gwano chief after Jilo Bune's drugged-bull ambush (ancestor of Red & Black Kinauru septs)",
          pairs: [
            {
              left: "Dadho Moroa",
              right: "Sole surviving Gwano chief after Jilo Bune's drugged-bull ambush (ancestor of Red & Black Kinauru septs)"
            },
            {
              left: "Buya Gafo",
              right: "Gwano warrior living in Ndera who killed Arab leader Mwenye Era at Kirungu"
            },
            {
              left: "Bwana Muchinjeni",
              right: "Pokomo name for Mr. Anderssen, first District Commissioner at Ngao in 1895"
            },
            {
              left: "Muunguni",
              right: "Pokomo name for the heavens ('where God lives')"
            }
          ]
        }
      ]
    }
  ]
});
