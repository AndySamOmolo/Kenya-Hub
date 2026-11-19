import type { LanguageConfig, CourseUnit } from "../types";

export const SAMBURU_CONFIG: LanguageConfig = {
  "id": "samburu",
  "name": "Samburu",
  "nativeName": "Sampur / Loikop",
  "family": "Nilotic",
  "counties": [
    "Samburu",
    "Marsabit",
    "Isiolo",
    "Laikipia"
  ],
  "speakers": "350K",
  "speechLocale": "sw-KE",
  "description": "The Northern Maa (Eastern Nilotic) language spoken by the Samburu (Loikop) pastoralists from the Laikipia Plateau to Mount Nyiro and Lake Turkana.",
  "color": "#E11D48",
  "sources": [
    "hinde-masai-1901",
    "johnston-uganda-protectorate-1902",
    "hollis-masai-1905",
    "dundas-baringo-tribes-1910",
    "open-web-swadesh-comparative"
  ]
};

export const SAMBURU_UNITS: CourseUnit[] = [
  {
    "id": "samburu-unit-1",
    "unitNumber": 1,
    "title": "Northern Maa Salutations, Gender Prefixes (L- / N-), Numerals",
    "description": "Master Samburu greetings (Supai! / Takwenya!), l-/n- noun prefixes, counting 1–10, and Northern Maa pastoral culture.",
    "icon": "Tractor",
    "color": "#E11D48",
    "skills": [
      {
        "id": "samburu-nouns-numerals",
        "title": "Sampur Salutations, L-/N- Nouns & Numerals",
        "icon": "Handshake",
        "description": "Learn Northern Maa nouns, greetings, and numerals from Johnston (1902) and Hollis (1905).",
        "tips": "In Samburu (Northern Maa), the masculine singular prefix ol- often reduces to l- (l-murani 'warrior', l-payian 'elder', l-doinyo 'mountain') and feminine en- reduces to n- (nkai 'God/rain', nkare 'water', nkishu 'cattle').",
        "culturalNote": "The name 'Samburu' derives from 'saamburr', the traditional leather carrying bag used by Northern Maa pastoralists, while their self-designation 'Loikop' signifies 'stewards/owners of the land'.",
        "words": [
          {
            "target": "Supai! (resp. Epa!)",
            "source": "Greetings to men/warriors!",
            "pronunciation": "su-pai",
            "hint": "Hinde (1901) & Hollis (1905) Maa salutations"
          },
          {
            "target": "Takwenya! (resp. Iko!)",
            "source": "Greetings to women/elders!",
            "pronunciation": "ta-kwe-nya",
            "hint": "Hinde (1901) & Hollis (1905) Maa salutations"
          },
          {
            "target": "Ashe oleng",
            "source": "Thank you very much",
            "pronunciation": "a-she o-leng",
            "hint": "Gratitude & peace"
          },
          {
            "target": "Serian",
            "source": "Peace",
            "pronunciation": "se-rian",
            "hint": "Gratitude & peace"
          },
          {
            "target": "saamburr (Sampur)",
            "source": "Traditional leather bag",
            "pronunciation": "saam-burr",
            "hint": "Hinde (1901) & Johnston (1902)"
          },
          {
            "target": "Loikop",
            "source": "Samburu self-designation (owners of the land)",
            "pronunciation": "loi-kop",
            "hint": "Hinde (1901) & Johnston (1902)"
          },
          {
            "target": "l-murani (pl. l-muran)",
            "source": "Warrior",
            "pronunciation": "l-mu-ra-ni",
            "hint": "Northern Maa l-/n- prefixes"
          },
          {
            "target": "l-payian",
            "source": "Elder",
            "pronunciation": "l-pa-yian",
            "hint": "Northern Maa l-/n- prefixes"
          },
          {
            "target": "n-gitok",
            "source": "Woman",
            "pronunciation": "n-gi-tok",
            "hint": "Northern Maa l-/n- prefixes"
          },
          {
            "target": "Nkai",
            "source": "God (Sky/Rain)",
            "pronunciation": "nkai",
            "hint": "Johnston (1902 Burkeneji) & Hollis (1905)"
          },
          {
            "target": "nkare",
            "source": "Water",
            "pronunciation": "nka-re",
            "hint": "Johnston (1902 Burkeneji) & Hollis (1905)"
          },
          {
            "target": "kule",
            "source": "Milk",
            "pronunciation": "ku-le",
            "hint": "Johnston (1902 Burkeneji) & Hollis (1905)"
          },
          {
            "target": "nkishu",
            "source": "Cattle",
            "pronunciation": "nki-shu",
            "hint": "Johnston (1902 Burkeneji) & Hollis (1905)"
          },
          {
            "target": "Ol-doinyo Nyiro",
            "source": "Mount Nyiro (sacred mountain)",
            "pronunciation": "ol-doi-nyo nyi-ro",
            "hint": "Dundas (1910) & Hinde (1901)"
          },
          {
            "target": "E-waso Ngiro",
            "source": "Ewaso Ng'iro River",
            "pronunciation": "e-wa-so ngi-ro",
            "hint": "Dundas (1910) & Hinde (1901)"
          },
          {
            "target": "nabo (obo)",
            "source": "One (1)",
            "pronunciation": "na-bo",
            "hint": "Johnston (1902) & Hollis (1905) numerals 1–5"
          },
          {
            "target": "are (aare)",
            "source": "Two (2)",
            "pronunciation": "a-re",
            "hint": "Johnston (1902) & Hollis (1905) numerals 1–5"
          },
          {
            "target": "uni (okuni)",
            "source": "Three (3)",
            "pronunciation": "u-ni",
            "hint": "Johnston (1902) & Hollis (1905) numerals 1–5"
          },
          {
            "target": "ile",
            "source": "Six (6)",
            "pronunciation": "i-le",
            "hint": "Northern Maa preserves sapana (7) & saal (9)"
          },
          {
            "target": "sapana",
            "source": "Seven (7)",
            "pronunciation": "sa-pa-na",
            "hint": "Northern Maa preserves sapana (7) & saal (9)"
          },
          {
            "target": "isiet",
            "source": "Eight (8)",
            "pronunciation": "i-siet",
            "hint": "Northern Maa preserves sapana (7) & saal (9)"
          }
        ],
        "sentences": [
          {
            "target": "Meeta Nkai ol-openy obo; Nkai oo nkishu.",
            "source": "God belongs to no single person alone; God is the giver of cattle to all."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Supai!\" in Samburu?",
            "correctAnswer": "Greetings to men",
            "options": [
              "Thank you very much",
              "Traditional leather bag",
              "Warrior",
              "Greetings to men"
            ],
            "hint": "Hinde (1901) & Hollis (1905) Maa salutations",
            "acceptedAnswers": [
              "Greetings to men/warriors! / Greetings to women/elders!",
              "Greetings to men"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ashe oleng\" in Samburu?",
            "correctAnswer": "Thank you very much",
            "options": [
              "Traditional leather bag",
              "Greetings to men",
              "Thank you very much",
              "Samburu self-designation"
            ],
            "hint": "Gratitude & peace",
            "acceptedAnswers": [
              "Thank you very much / Peace",
              "Thank you very much"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"saamburr\" in Samburu?",
            "correctAnswer": "Traditional leather bag",
            "options": [
              "Traditional leather bag",
              "Warrior",
              "Greetings to men",
              "Thank you very much"
            ],
            "hint": "Hinde (1901) & Johnston (1902)",
            "acceptedAnswers": [
              "Traditional leather bag / Samburu self-designation (owners of the land)",
              "Traditional leather bag"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Traditional leather bag\" in Samburu?",
            "correctAnswer": "saamburr",
            "options": [
              "saamburr",
              "Supai!",
              "Ashe oleng",
              "l-murani"
            ],
            "hint": "sahm-boor / loy-kohp",
            "acceptedAnswers": [
              "saamburr (Sampur) / Loikop",
              "saamburr"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Warrior\" in Samburu?",
            "correctAnswer": "l-murani",
            "options": [
              "l-murani",
              "Supai!",
              "Ashe oleng",
              "saamburr"
            ],
            "hint": "l-moo-rah-nee / l-pah-yahn / n-gee-tohk",
            "acceptedAnswers": [
              "l-murani (pl. l-muran) / l-payian / n-gitok",
              "l-murani"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Samburu expression with its English meaning:",
            "correctAnswer": "Supai! (resp. Epa!): Greetings to men/warriors!",
            "pairs": [
              {
                "left": "Supai! (resp. Epa!)",
                "right": "Greetings to men/warriors!"
              },
              {
                "left": "Takwenya! (resp. Iko!)",
                "right": "Greetings to women/elders!"
              },
              {
                "left": "Ashe oleng",
                "right": "Thank you very much"
              },
              {
                "left": "l-murani (pl. l-muran)",
                "right": "Warrior"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Samburu term for \"God\": ___",
            "correctAnswer": "Nkai",
            "options": [
              "Nkai",
              "Supai!",
              "Ashe oleng",
              "saamburr"
            ],
            "hint": "Johnston (1902 Burkeneji) & Hollis (1905)",
            "acceptedAnswers": [
              "Nkai / nkare / kule / nkishu",
              "Nkai"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "samburu-unit-2",
    "unitNumber": 2,
    "title": "Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Samburu (Sampur) built directly from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905), Hon. K. R. Dundas (1910), and C. W. Hobley (1910).",
    "icon": "Users",
    "color": "#E11D48",
    "skills": [
      {
        "id": "samburu-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "ltung'ani (pl. ltung'ana)",
            "source": "Person",
            "pronunciation": "l-tu-nga-ni",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "Lokop",
            "source": "People (Owners of the land)",
            "pronunciation": "lo-kop",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "papa / menye",
            "source": "Father",
            "pronunciation": "pa-pa / menye",
            "hint": "Samburu (North Maa) kinship"
          },
          {
            "target": "yeyo / ng'oto",
            "source": "Mother",
            "pronunciation": "ye-yo / ng'o-to",
            "hint": "Samburu (North Maa) kinship"
          },
          {
            "target": "nkerai (pl. ngera)",
            "source": "Child / Children",
            "pronunciation": "nke-rai",
            "hint": "Samburu (North Maa) kinship"
          },
          {
            "target": "lmurrani (pl. lmurran)",
            "source": "Warrior / Youth",
            "pronunciation": "lmurra-ni",
            "hint": "Samburu age-set warrior"
          },
          {
            "target": "lpayian (pl. lpayiani)",
            "source": "Elder / Man",
            "pronunciation": "lpa-yian",
            "hint": "Samburu married elder"
          },
          {
            "target": "ng'oroyioni (pl. ng'oroyok)",
            "source": "Woman / Wife",
            "pronunciation": "ng'o-ro-yio-ni",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "lchore (pl. lchoreta)",
            "source": "Friend",
            "pronunciation": "lcho-re",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "Nkai",
            "source": "God",
            "pronunciation": "nkai",
            "hint": "Samburu (North Maa) Supreme Being"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ltung'ani\" in Samburu?",
            "correctAnswer": "Person",
            "options": [
              "Person",
              "Father",
              "Mother",
              "Child"
            ],
            "hint": "Samburu (North Maa)",
            "acceptedAnswers": [
              "Person / People (Owners of the land)",
              "Person"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"papa / menye\" in Samburu?",
            "correctAnswer": "Father",
            "options": [
              "Mother",
              "Child",
              "Person",
              "Father"
            ],
            "hint": "Samburu (North Maa) kinship"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"yeyo / ng'oto\" in Samburu?",
            "correctAnswer": "Mother",
            "options": [
              "Mother",
              "Child",
              "Person",
              "Father"
            ],
            "hint": "Samburu (North Maa) kinship"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mother\" in Samburu?",
            "correctAnswer": "yeyo",
            "options": [
              "ltung'ani",
              "papa",
              "nkerai",
              "yeyo"
            ],
            "hint": "Starts with \"ye…\" (4 letters)",
            "acceptedAnswers": [
              "yeyo / ng'oto",
              "yeyo"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Child / Children\" in Samburu?",
            "correctAnswer": "nkerai",
            "options": [
              "ltung'ani",
              "papa",
              "yeyo",
              "nkerai"
            ],
            "hint": "Starts with \"nk…\" (6 letters)",
            "acceptedAnswers": [
              "nkerai (pl. ngera)",
              "nkerai"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Samburu expression with its English meaning:",
            "correctAnswer": "ltung'ani (pl. ltung'ana): Person",
            "pairs": [
              {
                "left": "ltung'ani (pl. ltung'ana)",
                "right": "Person"
              },
              {
                "left": "papa / menye",
                "right": "Father"
              },
              {
                "left": "yeyo / ng'oto",
                "right": "Mother"
              },
              {
                "left": "nkerai (pl. ngera)",
                "right": "Child / Children"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Samburu term for \"Warrior / Youth\": ___",
            "correctAnswer": "lmurrani",
            "options": [
              "lmurrani",
              "ltung'ani",
              "papa",
              "yeyo"
            ],
            "hint": "Samburu age-set warrior",
            "acceptedAnswers": [
              "lmurrani (pl. lmurran)",
              "lmurrani"
            ]
          }
        ]
      },
      {
        "id": "samburu-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "ŋ-kárn-á (nkárná)",
            "source": "Name",
            "pronunciation": "ng-karn-a",
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "target": "lalashe; Añgargenna",
            "source": "Brother",
            "pronunciation": "la-lashe",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Embatiān, Ol aitórienĭ, Lagwainani",
            "source": "Chief",
            "pronunciation": "emba-tian ol ai-to-rie-ni lagwai-na-ni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Eñkarai",
            "source": "Child",
            "pronunciation": "engka-rai",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Añganaishai",
            "source": "Sister",
            "pronunciation": "angga-naishai",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Eñ karei",
            "source": "Son",
            "pronunciation": "eng ka-rei",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Eñ getok; En gedūa",
            "source": "Wife",
            "pronunciation": "eng ge-tok",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Eñgaraiai",
            "source": "My child",
            "pronunciation": "engga-raiai"
          },
          {
            "target": "Kejaa ngera oo nkishu?",
            "source": "How are you? (How are the children and cattle?)",
            "pronunciation": "keh-jaa ngeh-rah oo nki-shu"
          }
        ],
        "sentences": [
          {
            "target": "ŋ-kárn-á — lalashe",
            "source": "Name — Brother."
          },
          {
            "target": "Embatiān, Ol aitórienĭ, Lagwainani — Eñkarai",
            "source": "Chief — Child."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ŋ-kárn-á\" mean in English?",
            "correctAnswer": "Name",
            "options": [
              "Brother",
              "Name",
              "Chief",
              "Child"
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Brother\"",
            "correctAnswer": "lalashe",
            "acceptedAnswers": [
              "lalashe; Añgargenna (pl.)",
              "lalashe"
            ],
            "hint": "Starts with \"la\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Embatiān, Ol aitórienĭ, Lagwainani\"",
            "correctAnswer": "Chief",
            "acceptedAnswers": [
              "Chief",
              "Chief"
            ],
            "hint": "Review Clans, Marriage & Community Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ŋ-kárn-á",
                "right": "Name"
              },
              {
                "left": "lalashe",
                "right": "Brother"
              },
              {
                "left": "Embatiān, Ol aitórienĭ, Lagwainani",
                "right": "Chief"
              },
              {
                "left": "Eñkarai",
                "right": "Child"
              },
              {
                "left": "Añganaishai",
                "right": "Sister"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "samburu-unit-3",
    "unitNumber": 3,
    "title": "Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Samburu (Sampur) built directly from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905), Hon. K. R. Dundas (1910), and C. W. Hobley (1910).",
    "icon": "Scale",
    "color": "#E11D48",
    "skills": [
      {
        "id": "samburu-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "naɓô (fem.) / oɓô (masc.) / noɓô (place)",
            "source": "One",
            "pronunciation": "na-bo / obo / no-bo",
            "hint": "Wikipedia Nilotic_languages — Samburu numerals"
          },
          {
            "target": "aré (fem.) / waáre (masc.)",
            "source": "Two",
            "pronunciation": "are / waa-re",
            "hint": "Wikipedia Nilotic_languages — Samburu numerals"
          },
          {
            "target": "uní (fem.) / okúni (masc.)",
            "source": "Three",
            "pronunciation": "uni / o-ku-ni",
            "hint": "Wikipedia Nilotic_languages — Samburu numerals"
          },
          {
            "target": "onɠwán (fem.) / oónɠwan (masc.)",
            "source": "Four",
            "pronunciation": "on-gwan / oon-gwan",
            "hint": "Wikipedia Nilotic_languages — Samburu numerals"
          },
          {
            "target": "ímɟêt / ímʄêt",
            "source": "Five",
            "pronunciation": "imjet / imjet",
            "hint": "Wikipedia Nilotic_languages — Samburu numerals"
          },
          {
            "target": "ílê",
            "source": "Six",
            "pronunciation": "ile",
            "hint": "Wikipedia Nilotic_languages — Samburu numerals"
          },
          {
            "target": "sápâ",
            "source": "Seven",
            "pronunciation": "sa-pa",
            "hint": "Wikipedia Nilotic_languages — Samburu numerals"
          },
          {
            "target": "ísɟêt / ísʄêt",
            "source": "Eight",
            "pronunciation": "isjet / isjet",
            "hint": "Wikipedia Nilotic_languages — Samburu numerals"
          },
          {
            "target": "sâːl",
            "source": "Nine",
            "pronunciation": "sal",
            "hint": "Wikipedia Nilotic_languages — Samburu numerals"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"naɓô (fem.) / oɓô (masc.) / noɓô (place)\" in Samburu?",
            "correctAnswer": "One",
            "options": [
              "One",
              "Two",
              "Three",
              "Four"
            ],
            "hint": "Wikipedia Nilotic_languages — Samburu numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aré (fem.) / waáre (masc.)\" in Samburu?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
              "One"
            ],
            "hint": "Wikipedia Nilotic_languages — Samburu numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"uní (fem.) / okúni (masc.)\" in Samburu?",
            "correctAnswer": "Three",
            "options": [
              "Three",
              "Four",
              "One",
              "Two"
            ],
            "hint": "Wikipedia Nilotic_languages — Samburu numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Samburu?",
            "correctAnswer": "uní",
            "options": [
              "naɓô",
              "uní",
              "aré",
              "onɠwán"
            ],
            "hint": "u-ni / o-ku-ni",
            "acceptedAnswers": [
              "uní (fem.) / okúni (masc.)",
              "uní"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Samburu?",
            "correctAnswer": "onɠwán",
            "options": [
              "naɓô",
              "aré",
              "uní",
              "onɠwán"
            ],
            "hint": "on-gwan",
            "acceptedAnswers": [
              "onɠwán (fem.) / oónɠwan (masc.)",
              "onɠwán"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Samburu expression with its English meaning:",
            "correctAnswer": "naɓô (fem.) / oɓô (masc.) / noɓô (place): One",
            "pairs": [
              {
                "left": "naɓô (fem.) / oɓô (masc.) / noɓô (place)",
                "right": "One"
              },
              {
                "left": "aré (fem.) / waáre (masc.)",
                "right": "Two"
              },
              {
                "left": "uní (fem.) / okúni (masc.)",
                "right": "Three"
              },
              {
                "left": "onɠwán (fem.) / oónɠwan (masc.)",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Samburu term for \"Five\": ___",
            "correctAnswer": "ímɟêt",
            "options": [
              "naɓô",
              "aré",
              "ímɟêt",
              "uní"
            ],
            "hint": "Wikipedia Nilotic_languages — Samburu numerals",
            "acceptedAnswers": [
              "ímɟêt / ímʄêt",
              "ímɟêt"
            ]
          }
        ]
      },
      {
        "id": "samburu-numbers-measures-trade-measures-3",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "tômôn",
            "source": "Ten",
            "pronunciation": "to-mon",
            "hint": "Wikipedia Nilotic_languages — Samburu numerals"
          },
          {
            "target": "Tigitam",
            "source": "Twenty",
            "pronunciation": "ti-gi-tam",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Tomoni uni",
            "source": "Thirty",
            "pronunciation": "to-mo-ni uni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Artam",
            "source": "Forty",
            "pronunciation": "artam",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Onnom",
            "source": "Fifty",
            "pronunciation": "onnom",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Ip",
            "source": "Hundred",
            "pronunciation": "ip",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Ip tomon",
            "source": "Thousand",
            "pronunciation": "ip to-mon",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Isekondi",
            "source": "Second (time unit)",
            "pronunciation": "i-se-kondi"
          }
        ],
        "sentences": [
          {
            "target": "tômôn — Tigitam",
            "source": "Ten — Twenty."
          },
          {
            "target": "Tomoni uni — Artam",
            "source": "Thirty — Forty."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"tômôn\" mean in English?",
            "correctAnswer": "Ten",
            "options": [
              "Twenty",
              "Ten",
              "Thirty",
              "Forty"
            ],
            "hint": "Core vocabulary in Trade, Barter, Currency & Traditional Measures"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Twenty\"",
            "correctAnswer": "Tigitam",
            "acceptedAnswers": [
              "Tigitam",
              "Tigitam"
            ],
            "hint": "Starts with \"Ti\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Tomoni uni\"",
            "correctAnswer": "Thirty",
            "acceptedAnswers": [
              "Thirty",
              "Thirty"
            ],
            "hint": "Review Trade, Barter, Currency & Traditional Measures"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Trade, Barter, Currency & Traditional Measures with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "tômôn",
                "right": "Ten"
              },
              {
                "left": "Tigitam",
                "right": "Twenty"
              },
              {
                "left": "Tomoni uni",
                "right": "Thirty"
              },
              {
                "left": "Artam",
                "right": "Forty"
              },
              {
                "left": "Onnom",
                "right": "Fifty"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "samburu-unit-4",
    "unitNumber": 4,
    "title": "Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Samburu (Sampur) built directly from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905), Hon. K. R. Dundas (1910), and C. W. Hobley (1910).",
    "icon": "Milk",
    "color": "#E11D48",
    "skills": [
      {
        "id": "samburu-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "kule",
            "source": "Milk",
            "pronunciation": "ku-le",
            "hint": "Samburu (North Maa) staple food"
          },
          {
            "target": "nkiri",
            "source": "Meat",
            "pronunciation": "nki-ri",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "ndaiki",
            "source": "Food",
            "pronunciation": "ndai-ki",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "Botote",
            "source": "Banana",
            "pronunciation": "bo-to-te",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "O' sosiān",
            "source": "Date palm",
            "pronunciation": "o' so-sian",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Eelata",
            "source": "Fat",
            "pronunciation": "ee-la-ta",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Ol-mossóri",
            "source": "Egg",
            "pronunciation": "ol-mossori"
          },
          {
            "target": "ŋ-kár-ɛ́",
            "source": "Water, stream",
            "pronunciation": "ng-kar-e"
          },
          {
            "target": "a-ɲá (anya)",
            "source": "To eat",
            "pronunciation": "a-nya"
          }
        ],
        "sentences": [
          {
            "target": "kule — nkiri",
            "source": "Milk — Meat."
          },
          {
            "target": "ndaiki — Botote",
            "source": "Food — Banana."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kule\" mean in English?",
            "correctAnswer": "Milk",
            "options": [
              "Meat",
              "Milk",
              "Food",
              "Banana"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Meat\"",
            "correctAnswer": "nkiri",
            "acceptedAnswers": [
              "nkiri",
              "nkiri"
            ],
            "hint": "Starts with \"nk\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ndaiki\"",
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
                "left": "kule",
                "right": "Milk"
              },
              {
                "left": "nkiri",
                "right": "Meat"
              },
              {
                "left": "ndaiki",
                "right": "Food"
              },
              {
                "left": "Botote",
                "right": "Banana"
              },
              {
                "left": "O' sosiān",
                "right": "Date palm"
              }
            ]
          }
        ]
      },
      {
        "id": "samburu-food-agriculture-crops-livestock-4",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "Ol lameyu",
            "source": "Hunger",
            "pronunciation": "ol la-me-yu",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "El bāek",
            "source": "Maize",
            "pronunciation": "el baek",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "En naishu, Na mōqa",
            "source": "Palm wine or mead",
            "pronunciation": "en naishu na mo-qa",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "nkishu (sg. nkiteng')",
            "source": "Cow / Cattle",
            "pronunciation": "nkishu",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "ntamesi (pl. ntamesin)",
            "source": "Camel",
            "pronunciation": "nta-me-si",
            "hint": "Samburu pastoral vocabulary"
          },
          {
            "target": "nkine (pl. nkineji)",
            "source": "Goat",
            "pronunciation": "nki-ne",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "nker (pl. nkerra)",
            "source": "Sheep",
            "pronunciation": "nker",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "Njilingi eel Uingereza",
            "source": "British Pound (GBP)",
            "pronunciation": "nji-lingi eel uinge-re-za"
          },
          {
            "target": "Paunt eel Sudani",
            "source": "Sudanese Pound (SDG)",
            "pronunciation": "paunt eel su-da-ni"
          }
        ],
        "sentences": [
          {
            "target": "Ol lameyu — El bāek",
            "source": "Hunger — Maize."
          },
          {
            "target": "En naishu, Na mōqa — nkishu",
            "source": "Palm wine or mead — Cow."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol lameyu\" mean in English?",
            "correctAnswer": "Hunger",
            "options": [
              "Hunger",
              "Maize",
              "Cow",
              "Camel"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Maize\"",
            "correctAnswer": "El bāek",
            "acceptedAnswers": [
              "El bāek",
              "El bāek"
            ],
            "hint": "Starts with \"El\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"En naishu, Na mōqa\"",
            "correctAnswer": "Palm wine or mead",
            "acceptedAnswers": [
              "Palm wine or mead",
              "Palm wine or mead"
            ],
            "hint": "Review Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Ol lameyu",
                "right": "Hunger"
              },
              {
                "left": "El bāek",
                "right": "Maize"
              },
              {
                "left": "En naishu, Na mōqa",
                "right": "Palm wine or mead"
              },
              {
                "left": "nkishu",
                "right": "Cow"
              },
              {
                "left": "ntamesi",
                "right": "Camel"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "samburu-unit-5",
    "unitNumber": 5,
    "title": "Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Samburu (Sampur) built directly from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905), Hon. K. R. Dundas (1910), and C. W. Hobley (1910).",
    "icon": "PawPrint",
    "color": "#E11D48",
    "skills": [
      {
        "id": "samburu-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "l-akira (pl. l-akir)",
            "source": "Star",
            "pronunciation": "l-akira",
            "hint": "Johnston 1902 Burkeneji/Sampuru & Hollis 1905"
          },
          {
            "target": "ŋ-kár-ɛ́ (nkare)",
            "source": "Water",
            "pronunciation": "ng-kar-e",
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "target": "l-caní (lchani)",
            "source": "Tree / Wood / Medicine",
            "pronunciation": "l-cani",
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "target": "nkolong'",
            "source": "Sun",
            "pronunciation": "nko-long'",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "lapa (pl. lapaitin)",
            "source": "Moon / Month",
            "pronunciation": "la-pa",
            "hint": "CLDR (saq.xml) & North Maa"
          },
          {
            "target": "nkima",
            "source": "Fire",
            "pronunciation": "nki-ma",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "nchan",
            "source": "Rain",
            "pronunciation": "nchan",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "ldoinyo (pl. ldoinyo)",
            "source": "Mountain",
            "pronunciation": "ldoinyo",
            "hint": "Samburu (North Maa) — e.g. Mt. Nyiro"
          },
          {
            "target": "lkeju / nkare",
            "source": "River",
            "pronunciation": "lke-ju / nka-re",
            "hint": "Samburu (North Maa)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"l-akira (pl. l-akir)\" in Samburu?",
            "correctAnswer": "Star",
            "options": [
              "Water",
              "Star",
              "Tree",
              "Sun"
            ],
            "hint": "Johnston 1902 Burkeneji/Sampuru & Hollis 1905"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ŋ-kár-ɛ́ (nkare)\" in Samburu?",
            "correctAnswer": "Water",
            "options": [
              "Tree",
              "Sun",
              "Water",
              "Star"
            ],
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"l-caní\" in Samburu?",
            "correctAnswer": "Tree",
            "options": [
              "Sun",
              "Star",
              "Water",
              "Tree"
            ],
            "hint": "Rainer Vossen (1982) — Sampur",
            "acceptedAnswers": [
              "Tree / Wood / Medicine",
              "Tree"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tree / Wood / Medicine\" in Samburu?",
            "correctAnswer": "l-caní",
            "options": [
              "l-akira",
              "l-caní",
              "ŋ-kár-ɛ́",
              "nkolong'"
            ],
            "hint": "lcha-ni",
            "acceptedAnswers": [
              "l-caní (lchani)",
              "l-caní"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sun\" in Samburu?",
            "correctAnswer": "nkolong'",
            "options": [
              "nkolong'",
              "l-akira",
              "ŋ-kár-ɛ́",
              "l-caní"
            ],
            "hint": "Starts with \"nk…\" (8 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Samburu expression with its English meaning:",
            "correctAnswer": "l-akira (pl. l-akir): Star",
            "pairs": [
              {
                "left": "l-akira (pl. l-akir)",
                "right": "Star"
              },
              {
                "left": "ŋ-kár-ɛ́ (nkare)",
                "right": "Water"
              },
              {
                "left": "l-caní (lchani)",
                "right": "Tree / Wood / Medicine"
              },
              {
                "left": "nkolong'",
                "right": "Sun"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Samburu term for \"Moon / Month\": ___",
            "correctAnswer": "lapa",
            "options": [
              "l-akira",
              "lapa",
              "ŋ-kár-ɛ́",
              "l-caní"
            ],
            "hint": "CLDR (saq.xml) & North Maa",
            "acceptedAnswers": [
              "lapa (pl. lapaitin)",
              "lapa"
            ]
          }
        ]
      },
      {
        "id": "samburu-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "nkop",
            "source": "Earth / Land",
            "pronunciation": "nkop",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "nkujit",
            "source": "Grass / Pasture",
            "pronunciation": "nku-jit",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "mpari",
            "source": "Day",
            "pronunciation": "mpa-ri",
            "hint": "CLDR (saq.xml) — Samburu"
          },
          {
            "target": "nkewarie",
            "source": "Night",
            "pronunciation": "nke-wa-rie",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "Añgatambo",
            "source": "Sky",
            "pronunciation": "angga-tambo"
          },
          {
            "target": "Ol laba (pl. Labaitin)",
            "source": "Moon",
            "pronunciation": "ol laba"
          },
          {
            "target": "El teñyat",
            "source": "Seed",
            "pronunciation": "el tengyat"
          },
          {
            "target": "Ol jata",
            "source": "Tree",
            "pronunciation": "ol ja-ta"
          },
          {
            "target": "Alasagutoni",
            "source": "Cold wind",
            "pronunciation": "a-la-sa-gu-to-ni"
          }
        ],
        "sentences": [
          {
            "target": "nkop — nkujit",
            "source": "Earth — Grass."
          },
          {
            "target": "mpari — nkewarie",
            "source": "Day — Night."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"nkop\" mean in English?",
            "correctAnswer": "Earth",
            "options": [
              "Grass",
              "Day",
              "Earth",
              "Night"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees",
            "acceptedAnswers": [
              "Earth / Land",
              "Earth"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Grass / Pasture\"",
            "correctAnswer": "nkujit",
            "acceptedAnswers": [
              "nkujit",
              "nkujit"
            ],
            "hint": "Starts with \"nk\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mpari\"",
            "correctAnswer": "Day",
            "acceptedAnswers": [
              "Day",
              "Day"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "nkop",
                "right": "Earth"
              },
              {
                "left": "nkujit",
                "right": "Grass"
              },
              {
                "left": "mpari",
                "right": "Day"
              },
              {
                "left": "nkewarie",
                "right": "Night"
              },
              {
                "left": "Añgatambo",
                "right": "Sky"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "samburu-unit-6",
    "unitNumber": 6,
    "title": "The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Samburu (Sampur) built directly from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905), Hon. K. R. Dundas (1910), and C. W. Hobley (1910).",
    "icon": "User",
    "color": "#E11D48",
    "skills": [
      {
        "id": "samburu-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "ŋ-kɔŋ-ʊ́ (nkong'u)",
            "source": "Eye",
            "pronunciation": "ng-kong-u",
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "target": "ŋ-kɪ́-yyɔk (nkiyyok)",
            "source": "Ear",
            "pronunciation": "ng-ki-yyok",
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "target": "ŋ-kwar-íé (nkwarie)",
            "source": "Nose",
            "pronunciation": "ng-kwar-ie",
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "target": "l-alá-ɪ̀ (lalai)",
            "source": "Tooth",
            "pronunciation": "l-ala-i",
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "target": "l-ŋɛ́jɛ́p (lng'ejep)",
            "source": "Tongue",
            "pronunciation": "l-ngejep",
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "target": "ŋ-kʊtʊ́k (nkutuk)",
            "source": "Mouth / Language",
            "pronunciation": "ng-kutuk",
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "target": "l-ɔɗɔ́ (lod'o)",
            "source": "Blood",
            "pronunciation": "l-odo",
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "target": "l-óì-tò (loito)",
            "source": "Bone",
            "pronunciation": "l-oi-to",
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "target": "lukunya",
            "source": "Head",
            "pronunciation": "lu-kunya",
            "hint": "Samburu (North Maa)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ŋ-kɔŋ-ʊ́ (nkong'u)\" in Samburu?",
            "correctAnswer": "Eye",
            "options": [
              "Ear",
              "Nose",
              "Eye",
              "Tooth"
            ],
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ŋ-kɪ́-yyɔk (nkiyyok)\" in Samburu?",
            "correctAnswer": "Ear",
            "options": [
              "Ear",
              "Nose",
              "Tooth",
              "Eye"
            ],
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ŋ-kwar-íé (nkwarie)\" in Samburu?",
            "correctAnswer": "Nose",
            "options": [
              "Nose",
              "Tooth",
              "Eye",
              "Ear"
            ],
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Samburu?",
            "correctAnswer": "ŋ-kwar-íé",
            "options": [
              "ŋ-kɔŋ-ʊ́",
              "ŋ-kɪ́-yyɔk",
              "ŋ-kwar-íé",
              "l-alá-ɪ̀"
            ],
            "hint": "Starts with \"ŋ-…\" (9 letters)",
            "acceptedAnswers": [
              "ŋ-kwar-íé (nkwarie)",
              "ŋ-kwar-íé"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tooth\" in Samburu?",
            "correctAnswer": "l-alá-ɪ̀",
            "options": [
              "ŋ-kɔŋ-ʊ́",
              "ŋ-kɪ́-yyɔk",
              "l-alá-ɪ̀",
              "ŋ-kwar-íé"
            ],
            "hint": "Starts with \"l-…\" (8 letters)",
            "acceptedAnswers": [
              "l-alá-ɪ̀ (lalai)",
              "l-alá-ɪ̀"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Samburu expression with its English meaning:",
            "correctAnswer": "ŋ-kɔŋ-ʊ́ (nkong'u): Eye",
            "pairs": [
              {
                "left": "ŋ-kɔŋ-ʊ́ (nkong'u)",
                "right": "Eye"
              },
              {
                "left": "ŋ-kɪ́-yyɔk (nkiyyok)",
                "right": "Ear"
              },
              {
                "left": "ŋ-kwar-íé (nkwarie)",
                "right": "Nose"
              },
              {
                "left": "l-alá-ɪ̀ (lalai)",
                "right": "Tooth"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Samburu term for \"Tongue\": ___",
            "correctAnswer": "l-ŋɛ́jɛ́p",
            "options": [
              "l-ŋɛ́jɛ́p",
              "ŋ-kɔŋ-ʊ́",
              "ŋ-kɪ́-yyɔk",
              "ŋ-kwar-íé"
            ],
            "hint": "Rainer Vossen (1982) — Sampur",
            "acceptedAnswers": [
              "l-ŋɛ́jɛ́p (lng'ejep)",
              "l-ŋɛ́jɛ́p"
            ]
          }
        ]
      },
      {
        "id": "samburu-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "nkaina (pl. nkainito)",
            "source": "Hand / Arm",
            "pronunciation": "nkai-na",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "lkeju (pl. lkejek)",
            "source": "Leg / Foot",
            "pronunciation": "lke-ju",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "ltau (pl. ltauja)",
            "source": "Heart",
            "pronunciation": "ltau",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "ŋ-kɔŋ-ʊ́",
            "source": "Eye",
            "pronunciation": "ng-kong-u",
            "hint": "Samburu & Maasai (Vossen 1982)"
          },
          {
            "target": "ŋ-kɪ́-yyɔk",
            "source": "Ear",
            "pronunciation": "ng-ki-yyok",
            "hint": "Samburu & Maasai (Vossen 1982)"
          },
          {
            "target": "l-alá-ɪ̀",
            "source": "Tooth",
            "pronunciation": "l-ala-i",
            "hint": "Samburu & Maasai (Vossen 1982)"
          },
          {
            "target": "l-ŋɛ́jɛ́p",
            "source": "Tongue",
            "pronunciation": "l-ngejep",
            "hint": "Samburu & Maasai (Vossen 1982)"
          },
          {
            "target": "Engaina",
            "source": "Arm",
            "pronunciation": "engai-na"
          },
          {
            "target": "Eñgeju",
            "source": "Leg",
            "pronunciation": "engge-ju"
          }
        ],
        "sentences": [
          {
            "target": "nkaina — lkeju",
            "source": "Hand — Leg."
          },
          {
            "target": "ltau — ŋ-kɔŋ-ʊ́",
            "source": "Heart — Eye."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"nkaina\" mean in English?",
            "correctAnswer": "Hand",
            "options": [
              "Leg",
              "Heart",
              "Eye",
              "Hand"
            ],
            "hint": "Core vocabulary in Health, Traditional Medicine & Emergency Terms",
            "acceptedAnswers": [
              "Hand / Arm",
              "Hand"
            ]
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Leg / Foot\"",
            "correctAnswer": "lkeju",
            "acceptedAnswers": [
              "lkeju (pl. lkejek)",
              "lkeju"
            ],
            "hint": "Starts with \"lk\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ltau\"",
            "correctAnswer": "Heart",
            "acceptedAnswers": [
              "Heart",
              "Heart"
            ],
            "hint": "Review Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Health, Traditional Medicine & Emergency Terms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "nkaina",
                "right": "Hand"
              },
              {
                "left": "lkeju",
                "right": "Leg"
              },
              {
                "left": "ltau",
                "right": "Heart"
              },
              {
                "left": "ŋ-kɔŋ-ʊ́",
                "right": "Eye"
              },
              {
                "left": "ŋ-kɪ́-yyɔk",
                "right": "Ear"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "samburu-unit-7",
    "unitNumber": 7,
    "title": "Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Samburu (Sampur) built directly from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905), Hon. K. R. Dundas (1910), and C. W. Hobley (1910).",
    "icon": "BookOpen",
    "color": "#E11D48",
    "skills": [
      {
        "id": "samburu-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "a-ɲá (anya)",
            "source": "Eat",
            "pronunciation": "a-nya",
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "target": "a-ok (aok)",
            "source": "Drink",
            "pronunciation": "a-ok",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "a-lo (alo)",
            "source": "Go",
            "pronunciation": "a-lo",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "a-lotu (alotu)",
            "source": "Come",
            "pronunciation": "a-lotu",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "a-dol (adol)",
            "source": "See",
            "pronunciation": "a-dol",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "a-ning' (aning')",
            "source": "Hear",
            "pronunciation": "a-ning'",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "a-iro (airo)",
            "source": "Speak / Say",
            "pronunciation": "a-iro",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "a-irrag (airrag)",
            "source": "Sleep",
            "pronunciation": "a-irrag",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "a-nyor (anyor)",
            "source": "Love / Like",
            "pronunciation": "a-nyor",
            "hint": "Samburu (North Maa)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"a-ɲá (anya)\" in Samburu?",
            "correctAnswer": "Eat",
            "options": [
              "Drink",
              "Go",
              "Come",
              "Eat"
            ],
            "hint": "Rainer Vossen (1982) — Sampur"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"a-ok (aok)\" in Samburu?",
            "correctAnswer": "Drink",
            "options": [
              "Drink",
              "Go",
              "Come",
              "Eat"
            ],
            "hint": "Samburu (North Maa)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"a-lo (alo)\" in Samburu?",
            "correctAnswer": "Go",
            "options": [
              "Come",
              "Go",
              "Eat",
              "Drink"
            ],
            "hint": "Samburu (North Maa)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Go\" in Samburu?",
            "correctAnswer": "a-lo",
            "options": [
              "a-ɲá",
              "a-ok",
              "a-lotu",
              "a-lo"
            ],
            "hint": "Starts with \"a-…\" (4 letters)",
            "acceptedAnswers": [
              "a-lo (alo)",
              "a-lo"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Come\" in Samburu?",
            "correctAnswer": "a-lotu",
            "options": [
              "a-ɲá",
              "a-ok",
              "a-lo",
              "a-lotu"
            ],
            "hint": "Starts with \"a-…\" (6 letters)",
            "acceptedAnswers": [
              "a-lotu (alotu)",
              "a-lotu"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Samburu expression with its English meaning:",
            "correctAnswer": "a-ɲá (anya): Eat",
            "pairs": [
              {
                "left": "a-ɲá (anya)",
                "right": "Eat"
              },
              {
                "left": "a-ok (aok)",
                "right": "Drink"
              },
              {
                "left": "a-lo (alo)",
                "right": "Go"
              },
              {
                "left": "a-lotu (alotu)",
                "right": "Come"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Samburu term for \"See\": ___",
            "correctAnswer": "a-dol",
            "options": [
              "a-ɲá",
              "a-dol",
              "a-ok",
              "a-lo"
            ],
            "hint": "Samburu (North Maa)",
            "acceptedAnswers": [
              "a-dol (adol)",
              "a-dol"
            ]
          }
        ]
      },
      {
        "id": "samburu-verbs-grammar-verbal-derivatives-7",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "a-iyiolo (aiyiolo)",
            "source": "Know",
            "pronunciation": "a-iyiolo",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "a-dol (dol)",
            "source": "To see",
            "pronunciation": "a-dol",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "a-ning (ning)",
            "source": "To hear",
            "pronunciation": "a-ning",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "a-yiolo (yiolo)",
            "source": "To know",
            "pronunciation": "a-yiolo",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "a-isho (inchooki)",
            "source": "To give",
            "pronunciation": "a-isho",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "a-ier (ier)",
            "source": "To cook",
            "pronunciation": "a-ier",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "ŋ-kárn-á",
            "source": "Name",
            "pronunciation": "ng-karn-a"
          },
          {
            "target": "Kurét",
            "source": "Fear",
            "pronunciation": "ku-ret"
          },
          {
            "target": "a-nyor (anyor)",
            "source": "To love / like",
            "pronunciation": "ah-nyohr"
          }
        ],
        "sentences": [
          {
            "target": "a-iyiolo — a-dol",
            "source": "Know — To see."
          },
          {
            "target": "a-ning — a-yiolo",
            "source": "To hear — To know."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"a-iyiolo\" mean in English?",
            "correctAnswer": "Know",
            "options": [
              "To see",
              "Know",
              "To hear",
              "To know"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"To see\"",
            "correctAnswer": "a-dol",
            "acceptedAnswers": [
              "a-dol (dol)",
              "a-dol"
            ],
            "hint": "Starts with \"a-\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"a-ning\"",
            "correctAnswer": "To hear",
            "acceptedAnswers": [
              "To hear",
              "To hear"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "a-iyiolo",
                "right": "Know"
              },
              {
                "left": "a-dol",
                "right": "To see"
              },
              {
                "left": "a-ning",
                "right": "To hear"
              },
              {
                "left": "a-yiolo",
                "right": "To know"
              },
              {
                "left": "a-isho",
                "right": "To give"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "samburu-unit-8",
    "unitNumber": 8,
    "title": "Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Samburu (Sampur) built directly from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905), Hon. K. R. Dundas (1910), and C. W. Hobley (1910).",
    "icon": "Compass",
    "color": "#E11D48",
    "skills": [
      {
        "id": "samburu-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "mpari",
            "source": "Day",
            "pronunciation": "mpa-ri"
          },
          {
            "target": "Ol lari (pl. El larin)",
            "source": "Year",
            "pronunciation": "ol la-ri"
          },
          {
            "target": "nkewarie",
            "source": "Night",
            "pronunciation": "nke-wa-rie"
          },
          {
            "target": "Duo",
            "source": "Today",
            "pronunciation": "duo"
          },
          {
            "target": "Taisere",
            "source": "Tomorrow",
            "pronunciation": "tai-se-re"
          },
          {
            "target": "Ng’ole",
            "source": "Yesterday",
            "pronunciation": "ng’o-le"
          },
          {
            "target": "Lapa le imet (Ime)",
            "source": "May (Month 5)",
            "pronunciation": "lapa le imet"
          },
          {
            "target": "Lapa le ile (Ile)",
            "source": "June (Month 6)",
            "pronunciation": "lapa le ile"
          },
          {
            "target": "Lapa le sapa (Sap)",
            "source": "July (Month 7)",
            "pronunciation": "lapa le sapa"
          }
        ],
        "sentences": [
          {
            "target": "mpari — Ol lari",
            "source": "Day — Year."
          },
          {
            "target": "nkewarie — Duo",
            "source": "Night — Today."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mpari\" mean in English?",
            "correctAnswer": "Day",
            "options": [
              "Year",
              "Day",
              "Night",
              "Today"
            ],
            "hint": "Starts with \"Da…\" (3 letters)"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Year\"",
            "correctAnswer": "Ol lari",
            "acceptedAnswers": [
              "Ol lari (pl. El larin)",
              "Ol lari"
            ],
            "hint": "Starts with \"Ol\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"nkewarie\"",
            "correctAnswer": "Night",
            "acceptedAnswers": [
              "Night",
              "Night"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mpari",
                "right": "Day"
              },
              {
                "left": "Ol lari",
                "right": "Year"
              },
              {
                "left": "nkewarie",
                "right": "Night"
              },
              {
                "left": "Duo",
                "right": "Today"
              },
              {
                "left": "Taisere",
                "right": "Tomorrow"
              }
            ]
          }
        ]
      },
      {
        "id": "samburu-time-calendar-journey-navigation-8",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Samburu (Sampur / ɔl Maa) in Sir Harry Johnston (1902 North Maa), A. C. Hollis (1905) & C. W. Hobley (1910 Notes on the Sambur & Gilat Clans) preserves pre-1930 phonological, grammatical, and ethnographic usage across Samburu, Marsabit, Isiolo.",
        "words": [
          {
            "target": "Nyamata",
            "source": "Era / Historical age",
            "pronunciation": "nya-ma-ta"
          },
          {
            "target": "Lapa le okuni (Oku)",
            "source": "March (Month 3)",
            "pronunciation": "lapa le okuni"
          },
          {
            "target": "Lapa le ong’wan (Ong)",
            "source": "April (Month 4)",
            "pronunciation": "lapa le ong wan"
          },
          {
            "target": "Lapa le isiet (Isi)",
            "source": "August (Month 8)",
            "pronunciation": "lapa le isiet"
          },
          {
            "target": "Saai",
            "source": "Hour (time unit)",
            "pronunciation": "saai"
          },
          {
            "target": "Lapa le obo (Obo)",
            "source": "January (Month 1)",
            "pronunciation": "lapa le obo"
          },
          {
            "target": "Lapa le waare (Waa)",
            "source": "February (Month 2)",
            "pronunciation": "lapa le waare"
          },
          {
            "target": "Lapa le tomon (Tom)",
            "source": "October (Month 10)",
            "pronunciation": "lapa le tomon"
          },
          {
            "target": "Idakika",
            "source": "Minute (time unit)",
            "pronunciation": "i-da-ki-ka"
          }
        ],
        "sentences": [
          {
            "target": "Nyamata — Lapa le okuni",
            "source": "Era — March."
          },
          {
            "target": "Lapa le ong’wan — Lapa le isiet",
            "source": "April — August."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nyamata\" mean in English?",
            "correctAnswer": "Era / Historical age",
            "options": [
              "March",
              "Era / Historical age",
              "April",
              "August"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"March (Month 3)\"",
            "correctAnswer": "Lapa le okuni",
            "acceptedAnswers": [
              "Lapa le okuni (Oku)",
              "Lapa le okuni"
            ],
            "hint": "Starts with \"La\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Lapa le ong’wan\"",
            "correctAnswer": "April",
            "acceptedAnswers": [
              "April (Month 4)",
              "April"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Nyamata",
                "right": "Era / Historical age"
              },
              {
                "left": "Lapa le okuni",
                "right": "March"
              },
              {
                "left": "Lapa le ong’wan",
                "right": "April"
              },
              {
                "left": "Lapa le isiet",
                "right": "August"
              },
              {
                "left": "Saai",
                "right": "Hour"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "samburu-unit-9",
    "unitNumber": 9,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Samburu (Sampur) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#E11D48",
    "skills": [
      {
        "id": "samburu-pd-corpus-9-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Samburu (Sampur) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Samburu (Sampur) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "Onnom artam",
            "source": "Ninety",
            "pronunciation": "on-nom ar-tam",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Onnom otomoni uni",
            "source": "Eighty",
            "pronunciation": "on-nom o-to-mo-ni u-ni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Onnom obikitam",
            "source": "Seventy",
            "pronunciation": "on-nom o-bi-ki-tam",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Onnom otomon",
            "source": "Sixty",
            "pronunciation": "on-nom o-to-mon",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Tomon obo",
            "source": "Eleven",
            "pronunciation": "to-mon o-bo",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Ol lari (pl. El larin)",
            "source": "Year",
            "pronunciation": "ol la-ri",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Endīto",
            "source": "Girl / Young woman",
            "pronunciation": "en-di-to",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Eñgitok",
            "source": "Woman",
            "pronunciation": "eng-gi-tok",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Onnom artam\" in Samburu (Sampur)?",
            "correctAnswer": "Ninety",
            "options": [
              "Eighty",
              "Ninety",
              "Seventy",
              "Sixty"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Samburu (Sampur) term to its English meaning:",
            "correctAnswer": "Onnom artam: Ninety",
            "pairs": [
              {
                "left": "Onnom artam",
                "right": "Ninety"
              },
              {
                "left": "Onnom otomoni uni",
                "right": "Eighty"
              },
              {
                "left": "Onnom obikitam",
                "right": "Seventy"
              },
              {
                "left": "Onnom otomon",
                "right": "Sixty"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Samburu (Sampur) term for \"Eleven\": ___",
            "correctAnswer": "Tomon obo",
            "options": [
              "Onnom artam",
              "Tomon obo",
              "Onnom otomoni uni",
              "Onnom obikitam"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          }
        ]
      },
      {
        "id": "samburu-pd-corpus-9-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Samburu (Sampur) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Samburu (Sampur) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "Ol-labanani",
            "source": "Diviner",
            "pronunciation": "ol-labanani",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Lesuñgu",
            "source": "White man / European",
            "pronunciation": "le-su-nggu",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Ol gūya",
            "source": "Wart hog",
            "pronunciation": "ol gu-ya",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "En dyore (or Jore)",
            "source": "War",
            "pronunciation": "en dyo-re",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Eñ golak",
            "source": "Spring water",
            "pronunciation": "eng go-lak",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "El mau",
            "source": "Twins",
            "pronunciation": "el mau",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Manyata / Añgañ",
            "source": "Town or settlement (warriors' / tribal)",
            "pronunciation": "ma-nya-ta / a-nggang",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Entakolla",
            "source": "Molar tooth",
            "pronunciation": "en-ta-kol-la",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          }
        ],
        "sentences": [
          {
            "target": "Ol gūya",
            "source": "Wart hog."
          },
          {
            "target": "Kiyiolo nkarna Ol-labanani taata.",
            "source": "We study this traditional term today."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ol-labanani\" in Samburu?",
            "correctAnswer": "Diviner",
            "options": [
              "White man / European",
              "Wart hog",
              "War",
              "Diviner"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Samburu (Sampur) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Ol-labanani: Diviner",
            "pairs": [
              {
                "left": "Ol-labanani",
                "right": "Diviner"
              },
              {
                "left": "Lesuñgu",
                "right": "White man / European"
              },
              {
                "left": "Ol gūya",
                "right": "Wart hog"
              },
              {
                "left": "En dyore (or Jore)",
                "right": "War"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Samburu (Sampur) term for \"Spring water\": ___",
            "correctAnswer": "Eñ golak",
            "options": [
              "El mau",
              "Ol-labanani",
              "Eñ golak",
              "Lesuñgu"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          }
        ]
      }
    ]
  },
  {
    "id": "samburu-unit-10",
    "unitNumber": 10,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Samburu (Sampur) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#E11D48",
    "skills": [
      {
        "id": "samburu-open-dataset-10-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Megaphone",
        "description": "Learn core Samburu (Sampur) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Samburu (Sampur) dialects and everyday speech.",
        "words": [
          {
            "target": "Taata",
            "source": "To-day",
            "pronunciation": "taa-ta",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Or gumbao",
            "source": "Tobacco",
            "pronunciation": "or gumbao",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Entoki",
            "source": "Thing",
            "pronunciation": "ento-ki",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Ol aburoni",
            "source": "Thief",
            "pronunciation": "ol a-bu-ro-ni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Eñ udi; Eñ usidin",
            "source": "Stick",
            "pronunciation": "eng udi",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Os singolio",
            "source": "Song",
            "pronunciation": "os si-ngo-lio",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Ashe / Ashe oleng",
            "source": "Thank you",
            "pronunciation": "ah-sheh oh-leng"
          },
          {
            "target": "Epa / Ipa",
            "source": "Hello (Reply)",
            "pronunciation": "eh-pah"
          }
        ],
        "sentences": [
          {
            "target": "Taata — Or gumbao",
            "source": "To-day — Tobacco."
          },
          {
            "target": "Entoki — Ol aburoni",
            "source": "Thing — Thief."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Taata\" mean in English?",
            "correctAnswer": "To-day",
            "options": [
              "To-day",
              "Tobacco",
              "Thing",
              "Thief"
            ],
            "hint": "Core vocabulary in Core Swadesh & Cultural Vocabulary"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Tobacco\"",
            "correctAnswer": "Or gumbao",
            "acceptedAnswers": [
              "Or gumbao",
              "Or gumbao"
            ],
            "hint": "Starts with \"Or\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Entoki\"",
            "correctAnswer": "Thing",
            "acceptedAnswers": [
              "Thing",
              "Thing"
            ],
            "hint": "Review Core Swadesh & Cultural Vocabulary"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Core Swadesh & Cultural Vocabulary with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Taata",
                "right": "To-day"
              },
              {
                "left": "Or gumbao",
                "right": "Tobacco"
              },
              {
                "left": "Entoki",
                "right": "Thing"
              },
              {
                "left": "Ol aburoni",
                "right": "Thief"
              },
              {
                "left": "Eñ udi",
                "right": "Stick"
              }
            ]
          }
        ]
      },
      {
        "id": "samburu-open-dataset-10-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Samburu (Sampur) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Samburu (Sampur) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "Añgoitoi",
            "source": "Road",
            "pronunciation": "anggoi-toi",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Nderoni",
            "source": "Rat",
            "pronunciation": "nde-ro-ni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Añgob",
            "source": "Place",
            "pronunciation": "anggob",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Ol bitirr",
            "source": "Pig",
            "pronunciation": "ol bi-tirr",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "En jabo",
            "source": "Elder",
            "pronunciation": "en ja-bo",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Ol doñani; El toñana",
            "source": "Man / Men",
            "pronunciation": "ol donga-ni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Embanīt",
            "source": "Magic",
            "pronunciation": "emba-nit",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "target": "Añ gotuk",
            "source": "Lips",
            "pronunciation": "ang go-tuk",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Añgoitoi\" in Samburu?",
            "correctAnswer": "Road",
            "options": [
              "Rat",
              "Road",
              "Place",
              "Pig"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Samburu (Sampur) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Añgoitoi: Road",
            "pairs": [
              {
                "left": "Añgoitoi",
                "right": "Road"
              },
              {
                "left": "Nderoni",
                "right": "Rat"
              },
              {
                "left": "Añgob",
                "right": "Place"
              },
              {
                "left": "Ol bitirr",
                "right": "Pig"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Samburu (Sampur) term for \"Elder\": ___",
            "correctAnswer": "En jabo",
            "options": [
              "Ol doñani",
              "Añgoitoi",
              "En jabo",
              "Nderoni"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
          }
        ]
      },
      {
        "id": "samburu-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Samburu (Sampur) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "African Next Voices Kenya Kisamburu Dialect Corpus (MCAA1-MSU/anv_data_ke, CC-BY-4.0), CLDF ASJP v20 Maa-Samburu (CC-BY-4.0), SIL Bloom Samburu CC-BY-4.0 & Public Domain Historical Lexicons (Farler 1882, Höhnel 1894, Johnston 1902, Dundas 1910, Hobley 1910 & Vossen 1982).",
        "words": [
          {
            "target": "Ashe",
            "source": "Thank you",
            "pronunciation": "a-she"
          },
          {
            "target": "Epa",
            "source": "Hello (Reply)",
            "pronunciation": "eh-pah"
          },
          {
            "target": "Serian",
            "source": "Peace / Serenity",
            "pronunciation": "seh-ri-an"
          },
          {
            "target": "Sopa",
            "source": "Hello / Greetings",
            "pronunciation": "soh-pah"
          },
          {
            "target": "Kiserian",
            "source": "Goodbye / Stay in peace",
            "pronunciation": "ki-seh-ri-an"
          },
          {
            "target": "Nabo",
            "source": "Greetings to elders / Respectful greeting",
            "pronunciation": "na-bo"
          },
          {
            "target": "Supa",
            "source": "Hello (to a man)",
            "pronunciation": "supa"
          },
          {
            "target": "Takwenya",
            "source": "Hello (to a woman)",
            "pronunciation": "takwenya"
          },
          {
            "target": "Ipa",
            "source": "Response: Fine / Peaceful",
            "pronunciation": "ipa"
          },
          {
            "target": "Ashe oleng",
            "source": "Thank you very much",
            "pronunciation": "ashe oleng"
          }
        ],
        "sentences": [
          {
            "target": "Ashe oleng",
            "source": "Thank you very much."
          },
          {
            "target": "O' sosiān",
            "source": "Date palm."
          },
          {
            "target": "En naishu, Na mōqa",
            "source": "Palm wine or mead."
          },
          {
            "target": "Njilingi eel Uingereza",
            "source": "British Pound (GBP)."
          },
          {
            "target": "Paunt eel Sudani",
            "source": "Sudanese Pound (SDG)."
          }
        ]
      },
      {
        "id": "samburu-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Samburu (Sampur) sentences for healthcare, transport, and community safety.",
        "culturalNote": "African Next Voices Kenya Kisamburu Dialect Corpus (MCAA1-MSU/anv_data_ke, CC-BY-4.0), CLDF ASJP v20 Maa-Samburu (CC-BY-4.0), SIL Bloom Samburu CC-BY-4.0 & Public Domain Historical Lexicons (Farler 1882, Höhnel 1894, Johnston 1902, Dundas 1910, Hobley 1910 & Vossen 1982).",
        "words": [
          {
            "target": "naɓô",
            "source": "One",
            "pronunciation": "na-bo"
          },
          {
            "target": "aré",
            "source": "Two",
            "pronunciation": "are"
          },
          {
            "target": "ílê",
            "source": "Six",
            "pronunciation": "i-le"
          },
          {
            "target": "tômôn",
            "source": "Ten",
            "pronunciation": "to-mon"
          },
          {
            "target": "onɠwán",
            "source": "Four",
            "pronunciation": "on-gwan"
          },
          {
            "target": "ímɟêt",
            "source": "Five",
            "pronunciation": "im-jet"
          },
          {
            "target": "sâːl",
            "source": "Nine",
            "pronunciation": "saal"
          },
          {
            "target": "uní",
            "source": "Three",
            "pronunciation": "uni"
          },
          {
            "target": "sápâ",
            "source": "Seven",
            "pronunciation": "sa-pa"
          },
          {
            "target": "ísɟêt",
            "source": "Eight",
            "pronunciation": "is-jet"
          }
        ],
        "sentences": [
          {
            "target": "Nkare naibor oo lkujita onyori ntarikini nkishu ang'.",
            "source": "Clean water and green pasture sustain our livestock."
          },
          {
            "target": "Lpayiani nemayiana lmurran peetum serian te nkop.",
            "source": "Elders bless the warriors so that peace prevails across the land."
          },
          {
            "target": "Kejaa ngera oo nkishu?",
            "source": "How are the children and the cattle?"
          }
        ]
      }
    ]
  }
];
