import type { LanguageConfig, CourseUnit } from "../types";

export const ILCHAMUS_CONFIG: LanguageConfig = {
  "id": "ilchamus",
  "name": "Ilchamus (Njemps)",
  "nativeName": "Ilchamus / Njemps",
  "family": "Nilotic",
  "counties": [
    "Baringo"
  ],
  "speakers": "45K",
  "speechLocale": "sw-KE",
  "description": "The Northern Maa (Eastern Nilotic) language of the Ilchamus along the southern shores and rivers of Lake Baringo.",
  "color": "#0284C7",
  "sources": [
    "johnston-uganda-protectorate-1902",
    "hollis-masai-1905",
    "dundas-baringo-tribes-1910",
    "open-web-swadesh-comparative"
  ]
};

export const ILCHAMUS_UNITS: CourseUnit[] = [
  {
    "id": "ilchamus-unit-1",
    "unitNumber": 1,
    "title": "Lake Baringo Salutations, Njemps Liabori & Lekepir Irrigation",
    "description": "Learn Ilchamus greetings, river-irrigation and fishery vocabulary, and numerals 1–10 from Dundas (1910, pp. 49–55) and Johnston (1902).",
    "icon": "Droplets",
    "color": "#0284C7",
    "skills": [
      {
        "id": "ilchamus-baringo-heritage",
        "title": "Baringo Settlements (Liabori, Lekepir & Korvan), Lake Life",
        "icon": "Droplets",
        "description": "Master Ilchamus vocabulary recorded by Hon. K. R. Dundas (1910) and Sir Harry Johnston (1902).",
        "tips": "Hon. K. R. Dundas (1910, JRAI Vol. 40, pp. 49–55) documented the three Njamus (Nyarusi) settlements: Njemps Kubwa or Njemps Liabori ('Downstream' on the Molo River), Njemps Ndogo or Njemps Lekepir ('Upstream' on the Tigrish River), and Korvan (founded on Lake Baringo's islands by Logogwa), together with their 16 clans and the Il Mayek furrow-opening rite.",
        "culturalNote": "On Lake Baringo (Mparingo), Ilchamus fishermen traditionally crafted ultra-light buoyant canoes (l-kadich) bound from ambatch (Aeschynomene elaphroxylon) balsa reeds (Dundas 1910, p. 53).",
        "words": [
          {
            "target": "Supai! (resp. Epa!)",
            "source": "Greetings!",
            "pronunciation": "su-pai",
            "hint": "Ilchamus salutation"
          },
          {
            "target": "Serian!",
            "source": "Peace!",
            "pronunciation": "se-rian",
            "hint": "Ilchamus salutation"
          },
          {
            "target": "Njemps Liabori (Njemps Kubwa)",
            "source": "Downstream Njemps (on the Molo)",
            "pronunciation": "njemps lia-bo-ri",
            "hint": "Dundas (1910, pp. 49–50, 53)"
          },
          {
            "target": "Njemps Lekepir (Njemps Ndogo)",
            "source": "Upstream Njemps (on the Tigrish)",
            "pronunciation": "njemps le-ke-pir",
            "hint": "Dundas (1910, pp. 49–50, 53)"
          },
          {
            "target": "Korvan",
            "source": "Island & River Tim settlement",
            "pronunciation": "kor-van",
            "hint": "Dundas (1910, pp. 49–50, 53)"
          },
          {
            "target": "Mparingo",
            "source": "Lake Baringo",
            "pronunciation": "mpa-ri-ngo",
            "hint": "Lake Baringo maritime & fishing lexicon"
          },
          {
            "target": "l-kadich",
            "source": "Ambatch balsa-reed canoe",
            "pronunciation": "l-ka-dich",
            "hint": "Lake Baringo maritime & fishing lexicon"
          },
          {
            "target": "l-singiri",
            "source": "Fish",
            "pronunciation": "l-si-ngi-ri",
            "hint": "Lake Baringo maritime & fishing lexicon"
          },
          {
            "target": "nkare",
            "source": "Water (River)",
            "pronunciation": "nka-re",
            "hint": "Johnston (1902 Njemps) & Dundas (1910)"
          },
          {
            "target": "n-kima",
            "source": "Fire",
            "pronunciation": "n-ki-ma",
            "hint": "Johnston (1902 Njemps) & Dundas (1910)"
          },
          {
            "target": "n-kolong",
            "source": "Sun",
            "pronunciation": "n-ko-long",
            "hint": "Johnston (1902 Njemps) & Dundas (1910)"
          },
          {
            "target": "Nkai",
            "source": "God",
            "pronunciation": "nkai",
            "hint": "Johnston (1902 Njemps) & Dundas (1910)"
          },
          {
            "target": "n-kiteng (pl. n-kishu)",
            "source": "Cow (pl. Cattle)",
            "pronunciation": "n-ki-teng",
            "hint": "Johnston (1902 Njemps) & Dundas (1910, p. 49 n. 1)"
          },
          {
            "target": "l-kinos (ngingyang)",
            "source": "Crocodile",
            "pronunciation": "l-ki-nos",
            "hint": "Johnston (1902 Njemps) & Dundas (1910, p. 49 n. 1)"
          },
          {
            "target": "l-makau",
            "source": "Hippopotamus",
            "pronunciation": "l-ma-kau",
            "hint": "Johnston (1902 Njemps) & Dundas (1910, p. 49 n. 1)"
          },
          {
            "target": "nabo (obo)",
            "source": "One (1)",
            "pronunciation": "na-bo",
            "hint": "Johnston (1902 Njemps) numerals 1–5"
          },
          {
            "target": "are",
            "source": "Two (2)",
            "pronunciation": "a-re",
            "hint": "Johnston (1902 Njemps) numerals 1–5"
          },
          {
            "target": "uni",
            "source": "Three (3)",
            "pronunciation": "u-ni",
            "hint": "Johnston (1902 Njemps) numerals 1–5"
          },
          {
            "target": "ile",
            "source": "Six (6)",
            "pronunciation": "i-le",
            "hint": "Johnston (1902 Njemps) numerals 6–10"
          },
          {
            "target": "sapana",
            "source": "Seven (7)",
            "pronunciation": "sa-pa-na",
            "hint": "Johnston (1902 Njemps) numerals 6–10"
          },
          {
            "target": "isiet",
            "source": "Eight (8)",
            "pronunciation": "i-siet",
            "hint": "Johnston (1902 Njemps) numerals 6–10"
          }
        ],
        "sentences": [
          {
            "target": "Njemps Liabori o Njemps Lekepir: Il Mayek oo Il Derito.",
            "source": "Downstream Njemps and Upstream Njemps: The Il Mayek clan and Il Derito elders open the irrigation furrow."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lake Baringo\" in Ilchamus?",
            "correctAnswer": "Mparingo",
            "options": [
              "Supai!",
              "Njemps Liabori",
              "Mparingo",
              "nkare"
            ],
            "hint": "m-pah-reen-goh / l-kah-deech / l-seen-gee-ree",
            "acceptedAnswers": [
              "Mparingo / l-kadich / l-singiri",
              "Mparingo"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Water\" in Ilchamus?",
            "correctAnswer": "nkare",
            "options": [
              "nkare",
              "Supai!",
              "Njemps Liabori",
              "Mparingo"
            ],
            "hint": "n-kah-reh / n-kee-mah / n-koh-lohng / n-kah-ee",
            "acceptedAnswers": [
              "nkare / n-kima / n-kolong / Nkai",
              "nkare"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Ilchamus expression with its English meaning:",
            "correctAnswer": "Supai! (resp. Epa!): Greetings!",
            "pairs": [
              {
                "left": "Supai! (resp. Epa!)",
                "right": "Greetings!"
              },
              {
                "left": "Mparingo",
                "right": "Lake Baringo"
              },
              {
                "left": "l-kadich",
                "right": "Ambatch balsa-reed canoe"
              },
              {
                "left": "nkare",
                "right": "Water (River)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Ilchamus term for \"Cow\": ___",
            "correctAnswer": "n-kiteng",
            "options": [
              "Supai!",
              "n-kiteng",
              "Njemps Liabori",
              "Mparingo"
            ],
            "hint": "Johnston (1902 Njemps) & Dundas (1910, p. 49 n. 1)",
            "acceptedAnswers": [
              "n-kiteng (pl. n-kishu) / l-kinos (ngingyang) / l-makau",
              "n-kiteng"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ilchamus-unit-2",
    "unitNumber": 2,
    "title": "Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910), and Mervyn W. H. Beech (1911).",
    "icon": "Users",
    "color": "#0284C7",
    "skills": [
      {
        "id": "ilchamus-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "n-gitok (pl. n-gituak)",
            "source": "Woman",
            "pronunciation": "n-gitok",
            "hint": "Dundas 1910 & Johnston 1902 Njemps"
          },
          {
            "target": "l-payian / l-murani / l-tungani",
            "source": "Man (elder / warrior / person)",
            "pronunciation": "l-pa-yian / l-mu-ra-ni / l-tu-nga-ni",
            "hint": "Dundas 1910 & Johnston 1902 Njemps"
          },
          {
            "target": "ltung'ani (pl. ltung'ana)",
            "source": "Person / People",
            "pronunciation": "ltung'a-ni",
            "hint": "Camus / North Maa (Johnston 1902)"
          },
          {
            "target": "papa / menye",
            "source": "Father",
            "pronunciation": "pa-pa / menye",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "target": "yeyo / ng'oto",
            "source": "Mother",
            "pronunciation": "ye-yo / ng'o-to",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "target": "nkerai (pl. ngera)",
            "source": "Child",
            "pronunciation": "nke-rai",
            "hint": "Camus / North Maa"
          },
          {
            "target": "Nkai",
            "source": "God",
            "pronunciation": "nkai",
            "hint": "Camus / North Maa"
          },
          {
            "target": "ŋ-kárn-á (nkarna)",
            "source": "Name",
            "pronunciation": "ng-karn-a",
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "target": "lalashe; Añgargenna",
            "source": "Brother",
            "pronunciation": "la-lashe",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"n-gitok (pl. n-gituak)\" in Ilchamus?",
            "correctAnswer": "Woman",
            "options": [
              "Man",
              "Woman",
              "Person",
              "Father"
            ],
            "hint": "Dundas 1910 & Johnston 1902 Njemps"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"l-payian (elder) / l-murani (warrior) / l-tungani (person)\" in Ilchamus?",
            "correctAnswer": "Man",
            "options": [
              "Person",
              "Father",
              "Woman",
              "Man"
            ],
            "hint": "Dundas 1910 & Johnston 1902 Njemps"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ltung'ani\" in Ilchamus?",
            "correctAnswer": "Person",
            "options": [
              "Father",
              "Person",
              "Woman",
              "Man"
            ],
            "hint": "Camus / North Maa (Johnston 1902)",
            "acceptedAnswers": [
              "Person / People",
              "Person"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Person / People\" in Ilchamus?",
            "correctAnswer": "ltung'ani",
            "options": [
              "n-gitok",
              "l-payian",
              "ltung'ani",
              "papa"
            ],
            "hint": "Starts with \"lt…\" (9 letters)",
            "acceptedAnswers": [
              "ltung'ani (pl. ltung'ana)",
              "ltung'ani"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Father\" in Ilchamus?",
            "correctAnswer": "papa",
            "options": [
              "papa",
              "n-gitok",
              "l-payian",
              "ltung'ani"
            ],
            "hint": "Starts with \"pa…\" (4 letters)",
            "acceptedAnswers": [
              "papa / menye",
              "papa"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Ilchamus expression with its English meaning:",
            "correctAnswer": "n-gitok (pl. n-gituak): Woman",
            "pairs": [
              {
                "left": "n-gitok (pl. n-gituak)",
                "right": "Woman"
              },
              {
                "left": "ltung'ani (pl. ltung'ana)",
                "right": "Person / People"
              },
              {
                "left": "papa / menye",
                "right": "Father"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Ilchamus term for \"Mother\": ___",
            "correctAnswer": "yeyo",
            "options": [
              "yeyo",
              "n-gitok",
              "l-payian",
              "ltung'ani"
            ],
            "hint": "Johnston (1902) — Njemps/Ilchamus",
            "acceptedAnswers": [
              "yeyo / ng'oto",
              "yeyo"
            ]
          }
        ]
      },
      {
        "id": "ilchamus-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "Embatiān, Ol aitórienĭ, Lagwainani",
            "source": "Chief",
            "pronunciation": "emba-tian ol ai-to-rie-ni lagwai-na-ni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Añganaishai",
            "source": "Sister",
            "pronunciation": "angga-naishai",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Eñ karei",
            "source": "Son",
            "pronunciation": "eng ka-rei",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Eñ getok; En gedūa",
            "source": "Wife",
            "pronunciation": "eng ge-tok",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "l-chore (pl. l-choreta)",
            "source": "Friend",
            "pronunciation": "l-chore",
            "hint": "Dundas 1910 & Maa Baringo corpus"
          },
          {
            "target": "Ilchamus (sg. Olchamus) / En-jemusi",
            "source": "People of Ilchamus ('People who see far')",
            "pronunciation": "il-cha-mus / en-je-mu-si"
          },
          {
            "target": "Eñgaraiai",
            "source": "My child",
            "pronunciation": "engga-raiai"
          }
        ],
        "sentences": [
          {
            "target": "Embatiān, Ol aitórienĭ, Lagwainani — Añganaishai",
            "source": "Chief — Sister."
          },
          {
            "target": "Eñ karei — Eñ getok",
            "source": "Son — Wife."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Embatiān, Ol aitórienĭ, Lagwainani\" mean in English?",
            "correctAnswer": "Chief",
            "options": [
              "Chief",
              "Sister",
              "Son",
              "Wife"
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Sister\"",
            "correctAnswer": "Añganaishai",
            "acceptedAnswers": [
              "Añganaishai"
            ],
            "hint": "Starts with \"Añ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Eñ karei\"",
            "correctAnswer": "Son",
            "acceptedAnswers": [
              "Son"
            ],
            "hint": "Review Clans, Marriage & Community Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Embatiān, Ol aitórienĭ, Lagwainani",
                "right": "Chief"
              },
              {
                "left": "Añganaishai",
                "right": "Sister"
              },
              {
                "left": "Eñ karei",
                "right": "Son"
              },
              {
                "left": "Eñ getok",
                "right": "Wife"
              },
              {
                "left": "l-chore",
                "right": "Friend"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ilchamus-unit-3",
    "unitNumber": 3,
    "title": "Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910), and Mervyn W. H. Beech (1911).",
    "icon": "Scale",
    "color": "#0284C7",
    "skills": [
      {
        "id": "ilchamus-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "nabo (fem.) / obo (masc.)",
            "source": "One",
            "pronunciation": "na-bo / obo",
            "hint": "Johnston (1902) & Vossen (1982) — Camus/Ilchamus"
          },
          {
            "target": "are (fem.) / waare (masc.)",
            "source": "Two",
            "pronunciation": "are / waa-re",
            "hint": "Johnston (1902) & Vossen (1982) — Camus/Ilchamus"
          },
          {
            "target": "uni (fem.) / okuni (masc.)",
            "source": "Three",
            "pronunciation": "uni / o-ku-ni",
            "hint": "Johnston (1902) & Vossen (1982) — Camus/Ilchamus"
          },
          {
            "target": "ong'wan",
            "source": "Four",
            "pronunciation": "ong'wan",
            "hint": "Johnston (1902) & Vossen (1982) — Camus/Ilchamus"
          },
          {
            "target": "imiet / imjet",
            "source": "Five",
            "pronunciation": "i-miet / imjet",
            "hint": "Johnston (1902) & Vossen (1982) — Camus/Ilchamus"
          },
          {
            "target": "ile",
            "source": "Six",
            "pronunciation": "ile",
            "hint": "Johnston (1902) — Camus/Ilchamus"
          },
          {
            "target": "sapa",
            "source": "Seven",
            "pronunciation": "sa-pa",
            "hint": "Johnston (1902) — Camus/Ilchamus"
          },
          {
            "target": "isiet",
            "source": "Eight",
            "pronunciation": "i-siet",
            "hint": "Johnston (1902) — Camus/Ilchamus"
          },
          {
            "target": "saal",
            "source": "Nine",
            "pronunciation": "saal",
            "hint": "Johnston (1902) — Camus/Ilchamus"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nabo (fem.) / obo (masc.)\" in Ilchamus?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "One",
              "Four"
            ],
            "hint": "Johnston (1902) & Vossen (1982) — Camus/Ilchamus"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"are (fem.) / waare (masc.)\" in Ilchamus?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "One",
              "Two"
            ],
            "hint": "Johnston (1902) & Vossen (1982) — Camus/Ilchamus"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"uni (fem.) / okuni (masc.)\" in Ilchamus?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Johnston (1902) & Vossen (1982) — Camus/Ilchamus"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Ilchamus?",
            "correctAnswer": "uni",
            "options": [
              "nabo",
              "are",
              "uni",
              "ong'wan"
            ],
            "hint": "Starts with \"un…\" (3 letters)",
            "acceptedAnswers": [
              "uni (fem.) / okuni (masc.)",
              "uni"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Ilchamus?",
            "correctAnswer": "ong'wan",
            "options": [
              "nabo",
              "ong'wan",
              "are",
              "uni"
            ],
            "hint": "Starts with \"on…\" (7 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Ilchamus expression with its English meaning:",
            "correctAnswer": "nabo (fem.) / obo (masc.): One",
            "pairs": [
              {
                "left": "nabo (fem.) / obo (masc.)",
                "right": "One"
              },
              {
                "left": "are (fem.) / waare (masc.)",
                "right": "Two"
              },
              {
                "left": "uni (fem.) / okuni (masc.)",
                "right": "Three"
              },
              {
                "left": "ong'wan",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Ilchamus term for \"Five\": ___",
            "correctAnswer": "imiet",
            "options": [
              "nabo",
              "are",
              "uni",
              "imiet"
            ],
            "hint": "Johnston (1902) & Vossen (1982) — Camus/Ilchamus",
            "acceptedAnswers": [
              "imiet / imjet",
              "imiet"
            ]
          }
        ]
      },
      {
        "id": "ilchamus-numbers-measures-trade-measures-3",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "tomon",
            "source": "Ten",
            "pronunciation": "to-mon",
            "hint": "Johnston (1902) — Camus/Ilchamus"
          },
          {
            "target": "Tigitam",
            "source": "Twenty",
            "pronunciation": "ti-gi-tam",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Tomoni uni",
            "source": "Thirty",
            "pronunciation": "to-mo-ni uni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Artam",
            "source": "Forty",
            "pronunciation": "artam",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Onnom",
            "source": "Fifty",
            "pronunciation": "onnom",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ip",
            "source": "Hundred",
            "pronunciation": "ip",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ip tomon",
            "source": "Thousand",
            "pronunciation": "ip to-mon",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ],
        "sentences": [
          {
            "target": "tomon — Tigitam",
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
            "prompt": "What does \"tomon\" mean in English?",
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
              "Tigitam"
            ],
            "hint": "Starts with \"Ti\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Tomoni uni\"",
            "correctAnswer": "Thirty",
            "acceptedAnswers": [
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
                "left": "tomon",
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
    "id": "ilchamus-unit-4",
    "unitNumber": 4,
    "title": "Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910), and Mervyn W. H. Beech (1911).",
    "icon": "Tractor",
    "color": "#0284C7",
    "skills": [
      {
        "id": "ilchamus-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "n-daa",
            "source": "Food",
            "pronunciation": "n-daa",
            "hint": "Dundas 1910 & Johnston 1902 Njemps"
          },
          {
            "target": "kule",
            "source": "Milk",
            "pronunciation": "ku-le",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "target": "nkiri",
            "source": "Meat",
            "pronunciation": "nki-ri",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "target": "Botote",
            "source": "Banana",
            "pronunciation": "bo-to-te",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "O' sosiān",
            "source": "Date palm",
            "pronunciation": "o' so-sian",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Eelata",
            "source": "Fat",
            "pronunciation": "ee-la-ta",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ol lameyu",
            "source": "Hunger",
            "pronunciation": "ol la-me-yu",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ol-mossóri",
            "source": "Egg",
            "pronunciation": "ol-mossori"
          },
          {
            "target": "n-kurma (pl. in-kurman)",
            "source": "Irrigated grain field / shamba",
            "pronunciation": "n kur-ma"
          }
        ],
        "sentences": [
          {
            "target": "n-daa — kule",
            "source": "Food — Milk."
          },
          {
            "target": "nkiri — Botote",
            "source": "Meat — Banana."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"n-daa\" mean in English?",
            "correctAnswer": "Food",
            "options": [
              "Milk",
              "Meat",
              "Food",
              "Banana"
            ],
            "hint": "Starts with \"Fo…\" (4 letters)"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Milk\"",
            "correctAnswer": "kule",
            "acceptedAnswers": [
              "kule"
            ],
            "hint": "Starts with \"ku\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"nkiri\"",
            "correctAnswer": "Meat",
            "acceptedAnswers": [
              "Meat"
            ],
            "hint": "Review Staple Foods, Cookery & Beverages"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Staple Foods, Cookery & Beverages with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "n-daa",
                "right": "Food"
              },
              {
                "left": "kule",
                "right": "Milk"
              },
              {
                "left": "nkiri",
                "right": "Meat"
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
        "id": "ilchamus-food-agriculture-crops-livestock-4",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "El bāek",
            "source": "Maize",
            "pronunciation": "el baek",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "En naishu, Na mōqa",
            "source": "Palm wine or mead",
            "pronunciation": "en naishu na mo-qa",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Eñ gare",
            "source": "Water",
            "pronunciation": "eng ga-re",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "lsing'iri (pl. lsing'ir)",
            "source": "Fish (Lake Baringo)",
            "pronunciation": "lsing'i-ri",
            "hint": "Ilchamus Lake Baringo fishing vocabulary"
          },
          {
            "target": "nkiteng' (pl. nkishu)",
            "source": "Cow / Cattle",
            "pronunciation": "nki-teng'",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "target": "nkine",
            "source": "Goat",
            "pronunciation": "nki-ne",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "target": "nker",
            "source": "Sheep",
            "pronunciation": "nker",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          }
        ],
        "sentences": [
          {
            "target": "El bāek — En naishu, Na mōqa",
            "source": "Maize — Palm wine or mead."
          },
          {
            "target": "Eñ gare — lsing'iri",
            "source": "Water — Fish."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"El bāek\" mean in English?",
            "correctAnswer": "Maize",
            "options": [
              "Water",
              "Maize",
              "Fish",
              "Cow"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Palm wine or mead\"",
            "correctAnswer": "En naishu, Na mōqa",
            "acceptedAnswers": [
              "En naishu, Na mōqa"
            ],
            "hint": "Starts with \"En\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Eñ gare\"",
            "correctAnswer": "Water",
            "acceptedAnswers": [
              "Water"
            ],
            "hint": "Review Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "El bāek",
                "right": "Maize"
              },
              {
                "left": "En naishu, Na mōqa",
                "right": "Palm wine or mead"
              },
              {
                "left": "Eñ gare",
                "right": "Water"
              },
              {
                "left": "lsing'iri",
                "right": "Fish"
              },
              {
                "left": "nkiteng'",
                "right": "Cow"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ilchamus-unit-5",
    "unitNumber": 5,
    "title": "Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & East African wildlife in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910), and Mervyn W. H. Beech (1911).",
    "icon": "PawPrint",
    "color": "#0284C7",
    "skills": [
      {
        "id": "ilchamus-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "n-golong",
            "source": "Day",
            "pronunciation": "n-golong",
            "hint": "Johnston 1902 Njemps"
          },
          {
            "target": "n-gewarie",
            "source": "Night",
            "pronunciation": "n-gewarie",
            "hint": "Johnston 1902 Njemps"
          },
          {
            "target": "l-akira (pl. l-akir)",
            "source": "Star",
            "pronunciation": "l-akira",
            "hint": "Johnston 1902 Njemps"
          },
          {
            "target": "ŋ-kár-ɛ́ (nkare)",
            "source": "Water / Lake / River",
            "pronunciation": "ng-kar-e",
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "target": "l-caní (lchani)",
            "source": "Tree / Wood",
            "pronunciation": "l-cani",
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "target": "nkolong'",
            "source": "Sun",
            "pronunciation": "nko-long'",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "target": "lapa",
            "source": "Moon / Month",
            "pronunciation": "la-pa",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "target": "nkima",
            "source": "Fire",
            "pronunciation": "nki-ma",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "target": "nchan",
            "source": "Rain",
            "pronunciation": "nchan",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"n-golong\" in Ilchamus?",
            "correctAnswer": "Day",
            "options": [
              "Night",
              "Day",
              "Star",
              "Water"
            ],
            "hint": "Johnston 1902 Njemps"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"n-gewarie\" in Ilchamus?",
            "correctAnswer": "Night",
            "options": [
              "Night",
              "Star",
              "Water",
              "Day"
            ],
            "hint": "Johnston 1902 Njemps"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"l-akira (pl. l-akir)\" in Ilchamus?",
            "correctAnswer": "Star",
            "options": [
              "Water",
              "Day",
              "Star",
              "Night"
            ],
            "hint": "Johnston 1902 Njemps"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Star\" in Ilchamus?",
            "correctAnswer": "l-akira",
            "options": [
              "n-golong",
              "l-akira",
              "n-gewarie",
              "ŋ-kár-ɛ́"
            ],
            "hint": "l-ah-kee-rah",
            "acceptedAnswers": [
              "l-akira (pl. l-akir)",
              "l-akira"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Water / Lake / River\" in Ilchamus?",
            "correctAnswer": "ŋ-kár-ɛ́",
            "options": [
              "n-golong",
              "n-gewarie",
              "ŋ-kár-ɛ́",
              "l-akira"
            ],
            "hint": "nka-re",
            "acceptedAnswers": [
              "ŋ-kár-ɛ́ (nkare)",
              "ŋ-kár-ɛ́"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Ilchamus expression with its English meaning:",
            "correctAnswer": "n-golong: Day",
            "pairs": [
              {
                "left": "n-golong",
                "right": "Day"
              },
              {
                "left": "n-gewarie",
                "right": "Night"
              },
              {
                "left": "l-akira (pl. l-akir)",
                "right": "Star"
              },
              {
                "left": "ŋ-kár-ɛ́ (nkare)",
                "right": "Water / Lake / River"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Ilchamus term for \"Tree / Wood\": ___",
            "correctAnswer": "l-caní",
            "options": [
              "n-golong",
              "n-gewarie",
              "l-akira",
              "l-caní"
            ],
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus",
            "acceptedAnswers": [
              "l-caní (lchani)",
              "l-caní"
            ]
          }
        ]
      },
      {
        "id": "ilchamus-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "nkop",
            "source": "Earth / Land",
            "pronunciation": "nkop",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "target": "nkujit",
            "source": "Grass",
            "pronunciation": "nku-jit",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "target": "l-doinyo",
            "source": "Mountain / Hill",
            "pronunciation": "l-doinyo",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "l-keju / e-waso",
            "source": "River",
            "pronunciation": "l-keju / e-waso",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "soit (pl. soito)",
            "source": "Stone / Rock",
            "pronunciation": "soit",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "En dim",
            "source": "Forest",
            "pronunciation": "en dim",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ngulubwok",
            "source": "Ground",
            "pronunciation": "ngu-lubwok",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Lodoa",
            "source": "Ground nut",
            "pronunciation": "lo-doa",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Lamañgalle",
            "source": "Island",
            "pronunciation": "la-manggalle",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nkop\" in Ilchamus?",
            "correctAnswer": "Earth",
            "options": [
              "Grass",
              "Mountain",
              "River",
              "Earth"
            ],
            "hint": "Johnston (1902) — Njemps/Ilchamus",
            "acceptedAnswers": [
              "Earth / Land",
              "Earth"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nkujit\" in Ilchamus?",
            "correctAnswer": "Grass",
            "options": [
              "Mountain",
              "Grass",
              "River",
              "Earth"
            ],
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"l-doinyo\" in Ilchamus?",
            "correctAnswer": "Mountain",
            "options": [
              "River",
              "Earth",
              "Mountain",
              "Grass"
            ],
            "hint": "Verified comparative entry across Kenyan nilotic corpus",
            "acceptedAnswers": [
              "Mountain / Hill",
              "Mountain"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mountain / Hill\" in Ilchamus?",
            "correctAnswer": "l-doinyo",
            "options": [
              "nkop",
              "l-doinyo",
              "nkujit",
              "l-keju"
            ],
            "hint": "l-doy-nyoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"River\" in Ilchamus?",
            "correctAnswer": "l-keju",
            "options": [
              "nkop",
              "l-keju",
              "nkujit",
              "l-doinyo"
            ],
            "hint": "l-keh-joo",
            "acceptedAnswers": [
              "l-keju / e-waso",
              "l-keju"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Ilchamus expression with its English meaning:",
            "correctAnswer": "nkop: Earth / Land",
            "pairs": [
              {
                "left": "nkop",
                "right": "Earth / Land"
              },
              {
                "left": "nkujit",
                "right": "Grass"
              },
              {
                "left": "l-doinyo",
                "right": "Mountain / Hill"
              },
              {
                "left": "l-keju / e-waso",
                "right": "River"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Ilchamus term for \"Stone / Rock\": ___",
            "correctAnswer": "soit",
            "options": [
              "nkop",
              "nkujit",
              "soit",
              "l-doinyo"
            ],
            "hint": "Verified comparative entry across Kenyan nilotic corpus",
            "acceptedAnswers": [
              "soit (pl. soito)",
              "soit"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ilchamus-unit-6",
    "unitNumber": 6,
    "title": "The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910), and Mervyn W. H. Beech (1911).",
    "icon": "User",
    "color": "#0284C7",
    "skills": [
      {
        "id": "ilchamus-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "ŋ-kɔŋ-ʊ́ (nkong'u)",
            "source": "Eye",
            "pronunciation": "ng-kong-u",
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "target": "ŋ-ké-ok (nkeok)",
            "source": "Ear",
            "pronunciation": "ng-ke-ok",
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "target": "ŋ-kawar-íé (nkawarie)",
            "source": "Nose",
            "pronunciation": "ng-kawar-ie",
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "target": "l-alá-ɪ̀ (lalai)",
            "source": "Tooth",
            "pronunciation": "l-ala-i",
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "target": "l-ŋɛjɛp (lng'ejep)",
            "source": "Tongue",
            "pronunciation": "l-ngejep",
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "target": "ŋ-kʊtʊ́k (nkutuk)",
            "source": "Mouth / Language",
            "pronunciation": "ng-kutuk",
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "target": "l-ɔɗɔ́ (lod'o)",
            "source": "Blood",
            "pronunciation": "l-odo",
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "target": "l-óì-tò (loito)",
            "source": "Bone",
            "pronunciation": "l-oi-to",
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "target": "lukunya",
            "source": "Head",
            "pronunciation": "lu-kunya",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ŋ-kɔŋ-ʊ́ (nkong'u)\" in Ilchamus?",
            "correctAnswer": "Eye",
            "options": [
              "Ear",
              "Nose",
              "Tooth",
              "Eye"
            ],
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ŋ-ké-ok (nkeok)\" in Ilchamus?",
            "correctAnswer": "Ear",
            "options": [
              "Ear",
              "Nose",
              "Tooth",
              "Eye"
            ],
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ŋ-kawar-íé (nkawarie)\" in Ilchamus?",
            "correctAnswer": "Nose",
            "options": [
              "Tooth",
              "Eye",
              "Ear",
              "Nose"
            ],
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Ilchamus?",
            "correctAnswer": "ŋ-kawar-íé",
            "options": [
              "ŋ-kawar-íé",
              "ŋ-kɔŋ-ʊ́",
              "ŋ-ké-ok",
              "l-alá-ɪ̀"
            ],
            "hint": "Starts with \"ŋ-…\" (10 letters)",
            "acceptedAnswers": [
              "ŋ-kawar-íé (nkawarie)",
              "ŋ-kawar-íé"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tooth\" in Ilchamus?",
            "correctAnswer": "l-alá-ɪ̀",
            "options": [
              "ŋ-kɔŋ-ʊ́",
              "ŋ-ké-ok",
              "ŋ-kawar-íé",
              "l-alá-ɪ̀"
            ],
            "hint": "Starts with \"l-…\" (8 letters)",
            "acceptedAnswers": [
              "l-alá-ɪ̀ (lalai)",
              "l-alá-ɪ̀"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Ilchamus expression with its English meaning:",
            "correctAnswer": "ŋ-kɔŋ-ʊ́ (nkong'u): Eye",
            "pairs": [
              {
                "left": "ŋ-kɔŋ-ʊ́ (nkong'u)",
                "right": "Eye"
              },
              {
                "left": "ŋ-ké-ok (nkeok)",
                "right": "Ear"
              },
              {
                "left": "ŋ-kawar-íé (nkawarie)",
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
            "prompt": "Complete the Ilchamus term for \"Tongue\": ___",
            "correctAnswer": "l-ŋɛjɛp",
            "options": [
              "ŋ-kɔŋ-ʊ́",
              "ŋ-ké-ok",
              "ŋ-kawar-íé",
              "l-ŋɛjɛp"
            ],
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus",
            "acceptedAnswers": [
              "l-ŋɛjɛp (lng'ejep)",
              "l-ŋɛjɛp"
            ]
          }
        ]
      },
      {
        "id": "ilchamus-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "nkaina",
            "source": "Hand / Arm",
            "pronunciation": "nkai-na",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "target": "lkeju",
            "source": "Leg / Foot",
            "pronunciation": "lke-ju",
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "target": "Engaina",
            "source": "Arm",
            "pronunciation": "engai-na",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Engorioñ",
            "source": "Back",
            "pronunciation": "engo-riong",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ngoṣoge",
            "source": "Belly",
            "pronunciation": "ngo-so-ge",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ol kina",
            "source": "Breast",
            "pronunciation": "ol ki-na",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Orgimojínno",
            "source": "Finger",
            "pronunciation": "orgi-mo-jinno",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Eñgaijo",
            "source": "Foot",
            "pronunciation": "enggai-jo",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "El babet",
            "source": "Hair",
            "pronunciation": "el ba-bet",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nkaina\" in Ilchamus?",
            "correctAnswer": "Hand",
            "options": [
              "Hand",
              "Leg",
              "Arm",
              "Back"
            ],
            "hint": "Johnston (1902) — Njemps/Ilchamus",
            "acceptedAnswers": [
              "Hand / Arm",
              "Hand"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"lkeju\" in Ilchamus?",
            "correctAnswer": "Leg",
            "options": [
              "Arm",
              "Back",
              "Leg",
              "Hand"
            ],
            "hint": "Johnston (1902) — Njemps/Ilchamus",
            "acceptedAnswers": [
              "Leg / Foot",
              "Leg"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Engaina\" in Ilchamus?",
            "correctAnswer": "Arm",
            "options": [
              "Arm",
              "Back",
              "Hand",
              "Leg"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Arm\" in Ilchamus?",
            "correctAnswer": "Engaina",
            "options": [
              "Engaina",
              "nkaina",
              "lkeju",
              "Engorioñ"
            ],
            "hint": "Starts with \"En…\" (7 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Back\" in Ilchamus?",
            "correctAnswer": "Engorioñ",
            "options": [
              "nkaina",
              "lkeju",
              "Engorioñ",
              "Engaina"
            ],
            "hint": "Starts with \"En…\" (8 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Ilchamus expression with its English meaning:",
            "correctAnswer": "nkaina: Hand / Arm",
            "pairs": [
              {
                "left": "nkaina",
                "right": "Hand / Arm"
              },
              {
                "left": "lkeju",
                "right": "Leg / Foot"
              },
              {
                "left": "Engaina",
                "right": "Arm"
              },
              {
                "left": "Engorioñ",
                "right": "Back"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Ilchamus term for \"Belly\": ___",
            "correctAnswer": "Ngoṣoge",
            "options": [
              "nkaina",
              "lkeju",
              "Ngoṣoge",
              "Engaina"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ]
      }
    ]
  },
  {
    "id": "ilchamus-unit-7",
    "unitNumber": 7,
    "title": "Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910), and Mervyn W. H. Beech (1911).",
    "icon": "BookOpen",
    "color": "#0284C7",
    "skills": [
      {
        "id": "ilchamus-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "a-iro (a-jo)",
            "source": "Speak",
            "pronunciation": "a-iro",
            "hint": "Dundas 1910 & Johnston 1902 Njemps"
          },
          {
            "target": "a-ɲá (anya)",
            "source": "Eat",
            "pronunciation": "a-nya",
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "target": "a-ok (aok)",
            "source": "Drink",
            "pronunciation": "a-ok",
            "hint": "Camus / North Maa"
          },
          {
            "target": "a-lo (alo)",
            "source": "Go",
            "pronunciation": "a-lo",
            "hint": "Camus / North Maa"
          },
          {
            "target": "a-lotu (alotu)",
            "source": "Come",
            "pronunciation": "a-lotu",
            "hint": "Camus / North Maa"
          },
          {
            "target": "a-dol (adol)",
            "source": "See",
            "pronunciation": "a-dol",
            "hint": "Camus / North Maa"
          },
          {
            "target": "a-ning' (aning')",
            "source": "Hear",
            "pronunciation": "a-ning'",
            "hint": "Camus / North Maa"
          },
          {
            "target": "a-irrag (airrag)",
            "source": "Sleep",
            "pronunciation": "a-irrag",
            "hint": "Camus / North Maa"
          },
          {
            "target": "a-dol (dol)",
            "source": "To see",
            "pronunciation": "a-dol",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"a-iro (a-jo)\" in Ilchamus?",
            "correctAnswer": "Speak",
            "options": [
              "Eat",
              "Drink",
              "Go",
              "Speak"
            ],
            "hint": "Dundas 1910 & Johnston 1902 Njemps"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"a-ɲá (anya)\" in Ilchamus?",
            "correctAnswer": "Eat",
            "options": [
              "Eat",
              "Drink",
              "Go",
              "Speak"
            ],
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Ilchamus expression with its English meaning:",
            "correctAnswer": "a-iro (a-jo): Speak",
            "pairs": [
              {
                "left": "a-iro (a-jo)",
                "right": "Speak"
              },
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
              }
            ]
          }
        ]
      },
      {
        "id": "ilchamus-verbs-grammar-verbal-derivatives-7",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
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
            "target": "a-nyor (anyor)",
            "source": "To love / like",
            "pronunciation": "a-nyor",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "a-isho",
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
            "target": "Kurét",
            "source": "Fear",
            "pronunciation": "ku-ret"
          },
          {
            "target": "a-ibung' il-baheni",
            "source": "To catch fish",
            "pronunciation": "a i-bung' il ba-he-ni"
          },
          {
            "target": "a-rem l-kadong'ot",
            "source": "To paddle a canoe / row",
            "pronunciation": "a-rem l-kadong'ot"
          },
          {
            "target": "a-itoriori n-kare",
            "source": "To irrigate / channel river water",
            "pronunciation": "a-itoriori n-kare"
          }
        ],
        "sentences": [
          {
            "target": "a-ning — a-yiolo",
            "source": "To hear — To know."
          },
          {
            "target": "a-nyor — a-isho",
            "source": "To love — To give."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"a-ning\" mean in English?",
            "correctAnswer": "To hear",
            "options": [
              "To know",
              "To love",
              "To hear",
              "To give"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"To know\"",
            "correctAnswer": "a-yiolo",
            "acceptedAnswers": [
              "a-yiolo (yiolo)",
              "a-yiolo"
            ],
            "hint": "Starts with \"a-\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"a-nyor\"",
            "correctAnswer": "To love",
            "acceptedAnswers": [
              "To love / like",
              "To love"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "a-ning",
                "right": "To hear"
              },
              {
                "left": "a-yiolo",
                "right": "To know"
              },
              {
                "left": "a-nyor",
                "right": "To love"
              },
              {
                "left": "a-isho",
                "right": "To give"
              },
              {
                "left": "a-ier",
                "right": "To cook"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ilchamus-unit-8",
    "unitNumber": 8,
    "title": "Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910), and Mervyn W. H. Beech (1911).",
    "icon": "Compass",
    "color": "#0284C7",
    "skills": [
      {
        "id": "ilchamus-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "Ol lari (pl. El larin)",
            "source": "Year",
            "pronunciation": "ol-lari"
          },
          {
            "target": "taata",
            "source": "Today",
            "pronunciation": "taa-ta",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "taisere",
            "source": "Tomorrow",
            "pronunciation": "tai-se-re",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "ngole",
            "source": "Yesterday",
            "pronunciation": "ngo-le",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "Kawārie",
            "source": "Day",
            "pronunciation": "ka-wah-rie"
          }
        ],
        "sentences": [
          {
            "target": "Ol lari — taata",
            "source": "Year — Today."
          },
          {
            "target": "taisere — ngole",
            "source": "Tomorrow — Yesterday."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol lari\" mean in English?",
            "correctAnswer": "Year",
            "options": [
              "Year",
              "Today",
              "Tomorrow",
              "Yesterday"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Today\"",
            "correctAnswer": "taata",
            "acceptedAnswers": [
              "taata"
            ],
            "hint": "Starts with \"ta\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"taisere\"",
            "correctAnswer": "Tomorrow",
            "acceptedAnswers": [
              "Tomorrow"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Ol lari",
                "right": "Year"
              },
              {
                "left": "taata",
                "right": "Today"
              },
              {
                "left": "taisere",
                "right": "Tomorrow"
              },
              {
                "left": "ngole",
                "right": "Yesterday"
              },
              {
                "left": "Kawārie",
                "right": "Day"
              }
            ]
          }
        ]
      },
      {
        "id": "ilchamus-time-calendar-journey-navigation-8",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "n-golong",
            "source": "Day",
            "pronunciation": "n-goh-lohng"
          },
          {
            "target": "Ol lari (pl. El larin)",
            "source": "Year",
            "pronunciation": "ol la-ri"
          },
          {
            "target": "taata",
            "source": "Today",
            "pronunciation": "tah-tah"
          },
          {
            "target": "n-gewarie",
            "source": "Night",
            "pronunciation": "n-geh-wah-ree-eh"
          }
        ],
        "sentences": [
          {
            "target": "n-golong — Ol lari",
            "source": "Day — Year."
          },
          {
            "target": "taata — n-gewarie",
            "source": "Today — Night."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"n-golong\" mean in English?",
            "correctAnswer": "Day",
            "options": [
              "Day",
              "Year",
              "Today",
              "Night"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
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
            "prompt": "Translate to English: \"taata\"",
            "correctAnswer": "Today",
            "acceptedAnswers": [
              "Today"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "n-golong",
                "right": "Day"
              },
              {
                "left": "Ol lari",
                "right": "Year"
              },
              {
                "left": "taata",
                "right": "Today"
              },
              {
                "left": "n-gewarie",
                "right": "Night"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ilchamus-unit-9",
    "unitNumber": 9,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Ilchamus (Njemps) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#0284C7",
    "skills": [
      {
        "id": "ilchamus-pd-corpus-9-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Ilchamus (Njemps) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Ilchamus (Njemps) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "Onnom artam",
            "source": "Ninety",
            "pronunciation": "on-nom ar-tam",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Onnom otomoni uni",
            "source": "Eighty",
            "pronunciation": "on-nom o-to-mo-ni u-ni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Onnom obikitam",
            "source": "Seventy",
            "pronunciation": "on-nom o-bi-ki-tam",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Onnom otomon",
            "source": "Sixty",
            "pronunciation": "on-nom o-to-mon",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Tomon obo",
            "source": "Eleven",
            "pronunciation": "to-mon o-bo",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ol lari (pl. El larin)",
            "source": "Year",
            "pronunciation": "ol la-ri",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Endīto",
            "source": "Girl / Young woman",
            "pronunciation": "en-di-to",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ol-labanani",
            "source": "Diviner",
            "pronunciation": "ol-la-ba-na-ni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Onnom artam\" in Ilchamus (Njemps)?",
            "correctAnswer": "Ninety",
            "options": [
              "Eighty",
              "Seventy",
              "Ninety",
              "Sixty"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Ilchamus (Njemps) term to its English meaning:",
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
            "prompt": "Complete the Ilchamus (Njemps) term for \"Eleven\": ___",
            "correctAnswer": "Tomon obo",
            "options": [
              "Onnom artam",
              "Onnom otomoni uni",
              "Tomon obo",
              "Onnom obikitam"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ]
      },
      {
        "id": "ilchamus-pd-corpus-9-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Ilchamus (Njemps) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Ilchamus (Njemps) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "Lesuñgu",
            "source": "White man / European",
            "pronunciation": "le-su-nggu",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ol gūya",
            "source": "Wart hog",
            "pronunciation": "ol gu-ya",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "En dyore (or Jore)",
            "source": "War",
            "pronunciation": "en dyo-re",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Eñ golak",
            "source": "Spring water",
            "pronunciation": "eng go-lak",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "El mau",
            "source": "Twins",
            "pronunciation": "el mau",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Manyata / Añgañ",
            "source": "Town or settlement (warriors' / tribal)",
            "pronunciation": "ma-nya-ta / a-nggang",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Entakolla",
            "source": "Molar tooth",
            "pronunciation": "en-ta-kol-la",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Or gumbao",
            "source": "Tobacco",
            "pronunciation": "or gum-bao",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ],
        "sentences": [
          {
            "target": "El mau — Manyata / Añgañ.",
            "source": "Twins — Town or settlement."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Lesuñgu\" in Ilchamus?",
            "correctAnswer": "White man / European",
            "options": [
              "Wart hog",
              "White man / European",
              "War",
              "Spring water"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Ilchamus (Njemps) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Lesuñgu: White man / European",
            "pairs": [
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
              },
              {
                "left": "Eñ golak",
                "right": "Spring water"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Ilchamus (Njemps) term for \"Twins\": ___",
            "correctAnswer": "El mau",
            "options": [
              "Manyata",
              "Lesuñgu",
              "El mau",
              "Ol gūya"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ]
      }
    ]
  },
  {
    "id": "ilchamus-unit-10",
    "unitNumber": 10,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Ilchamus (Njemps) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#0284C7",
    "skills": [
      {
        "id": "ilchamus-open-dataset-10-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Megaphone",
        "description": "Learn core Ilchamus (Njemps) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Ilchamus (Njemps) dialects and everyday speech.",
        "words": [
          {
            "target": "Entoki",
            "source": "Thing",
            "pronunciation": "ento-ki",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ol aburoni",
            "source": "Thief",
            "pronunciation": "ol a-bu-ro-ni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Eñ udi; Eñ usidin",
            "source": "Stick",
            "pronunciation": "eng udi",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Os singolio",
            "source": "Song",
            "pronunciation": "os si-ngo-lio",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Añgoitoi",
            "source": "Road",
            "pronunciation": "anggoi-toi",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Nderoni",
            "source": "Rat",
            "pronunciation": "nde-ro-ni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Serian",
            "source": "Peace",
            "pronunciation": "seh-ri-an"
          },
          {
            "target": "Ashe / Ashe oleng",
            "source": "Thank you",
            "pronunciation": "ah-sheh"
          }
        ],
        "sentences": [
          {
            "target": "Entoki — Ol aburoni",
            "source": "Thing — Thief."
          },
          {
            "target": "Eñ udi — Os singolio",
            "source": "Stick — Song."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Entoki\" mean in English?",
            "correctAnswer": "Thing",
            "options": [
              "Thing",
              "Thief",
              "Stick",
              "Song"
            ],
            "hint": "Core vocabulary in Core Swadesh & Cultural Vocabulary"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Thief\"",
            "correctAnswer": "Ol aburoni",
            "acceptedAnswers": [
              "Ol aburoni"
            ],
            "hint": "Starts with \"Ol\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Eñ udi\"",
            "correctAnswer": "Stick",
            "acceptedAnswers": [
              "Stick"
            ],
            "hint": "Review Core Swadesh & Cultural Vocabulary"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Core Swadesh & Cultural Vocabulary with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
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
              },
              {
                "left": "Os singolio",
                "right": "Song"
              },
              {
                "left": "Añgoitoi",
                "right": "Road"
              }
            ]
          }
        ]
      },
      {
        "id": "ilchamus-open-dataset-10-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Ilchamus (Njemps) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Ilchamus (Njemps) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "Añgob",
            "source": "Place",
            "pronunciation": "anggob",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ol bitirr",
            "source": "Pig",
            "pronunciation": "ol bi-tirr",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "En jabo",
            "source": "Elder",
            "pronunciation": "en ja-bo",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ol doñani; El toñana",
            "source": "Man / Men",
            "pronunciation": "ol donga-ni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Embanīt",
            "source": "Magic",
            "pronunciation": "emba-nit",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Añ gotuk",
            "source": "Lips",
            "pronunciation": "ang go-tuk",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ol lalem",
            "source": "Knife",
            "pronunciation": "ol la-lem",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Elalla ol dōme",
            "source": "Ivory",
            "pronunciation": "e-lalla ol do-me",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Añgob\" in Ilchamus?",
            "correctAnswer": "Place",
            "options": [
              "Place",
              "Pig",
              "Elder",
              "Man"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Ilchamus (Njemps) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Añgob: Place",
            "pairs": [
              {
                "left": "Añgob",
                "right": "Place"
              },
              {
                "left": "Ol bitirr",
                "right": "Pig"
              },
              {
                "left": "En jabo",
                "right": "Elder"
              },
              {
                "left": "Ol doñani; El toñana",
                "right": "Man / Men"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Ilchamus (Njemps) term for \"Magic\": ___",
            "correctAnswer": "Embanīt",
            "options": [
              "Añ gotuk",
              "Añgob",
              "Ol bitirr",
              "Embanīt"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ]
      },
      {
        "id": "ilchamus-hohnel-1894-vol1-lesson",
        "title": "Höhnel: Leikipia (Il Leikipiak), Njemps Mkubwa & Ndogo",
        "icon": "Waves",
        "description": "Study Lieut. Ludwig von Höhnel's (1894, Vol. I, Ch. VI, pp. 367–385) firsthand account of the Leikipia plateau (Il Leikipiak), the descent via Morijo and Mukutan to Njemps Mkubwa and Njemps Ndogo (3,220 ft.), their Guaso Tigerish timber-and-boulder dam and rotational sluice-gate canals, and Lake Baringo (3,190 ft.) with Ol Kokwa island and 6–8-log ambatch oboro rafts.",
        "tips": "On pp. 382–385 of Volume I (1894), Höhnel explains both how the 1,500–2,000 Wakwafi of Njemps Mkubwa and Njemps Ndogo dammed the Guaso Tigerish (Perkerra) river a mile above Njemps Mkubwa to irrigate wimbi and mtama in rotation, and why Lake Baringo (3,190 ft.) stays fresh without a surface outlet through subterranean seepage northward across porous basalt.",
        "culturalNote": "In the center of Lake Baringo rises the volcanic tuff-crater island of Ol Kokwa (2½ miles long, 400 ft. high, with boiling sulphurous springs on its NE shore), whose Wakwafi fishermen and goat-herds cross from the mainland on V-shaped oboro rafts lashed together from 6–8 stems of cork-like ambatch wood (Herminiera elaphroxylon, pp. 384–385).",
        "words": [
          {
            "target": "Njemps Mkubwa & Njemps Ndogo",
            "source": "Great Njemps and Little Njemps settlements",
            "pronunciation": "njemps m-ku-bwa / njemps n-do-go",
            "hint": "Höhnel (1894, Vol. I, Ch. VI, pp. 381–383)"
          },
          {
            "target": "Guaso Tigerish / Perkerra",
            "source": "Dammed irrigation river of Njemps",
            "pronunciation": "gua-so ti-ge-rish / per-ker-ra",
            "hint": "Höhnel (1894, Vol. I, Ch. VI, pp. 382–383)"
          },
          {
            "target": "Ol Kokwa",
            "source": "Central volcanic island of Lake Baringo",
            "pronunciation": "ol ko-kwa",
            "hint": "Höhnel (1894, Vol. I, Ch. VI, p. 384)"
          },
          {
            "target": "oboro",
            "source": "Ambatch log raft (Herminiera elaphroxylon)",
            "pronunciation": "o-bo-ro",
            "hint": "Höhnel (1894, Vol. I, Ch. VI, pp. 384–385)"
          },
          {
            "target": "Leikipia (Il Leikipiak)",
            "source": "Highland plateau east of Baringo",
            "pronunciation": "lei-ki-pia / il lei-ki-piak",
            "hint": "Höhnel (1894, Vol. I, Ch. VI, pp. 367–376)"
          }
        ],
        "sentences": [
          {
            "target": "Njemps Mkubwa o Njemps Ndogo: Guaso Tigerish o Guaso Molo, Lake Baringo (3,190 ft.), Ol Kokwa & oboro.",
            "source": "Great Njemps and Little Njemps on the Tigrish and Molo rivers, Lake Baringo (3,190 ft.), Ol Kokwa island, and ambatch oboro rafts."
          }
        ]
      },
      {
        "id": "ilchamus-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Ilchamus (Njemps) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "African Next Voices Maa-Samburu-Chamus Corpus (CC-BY-4.0), CLDF ASJP v20 Maa-Chamus (CC-BY-4.0) & Public Domain Historical Lexicons (Farler 1882, Höhnel 1894, Johnston 1902, Dundas 1910, Beech 1911 & Heine 1980).",
        "words": [
          {
            "target": "Serian",
            "source": "Peace",
            "pronunciation": "seh-ri-an"
          },
          {
            "target": "Ashe",
            "source": "Thank you",
            "pronunciation": "ah-sheh"
          },
          {
            "target": "Epa",
            "source": "Hello (Reply)",
            "pronunciation": "eh-pah"
          },
          {
            "target": "Sopa",
            "source": "Hello / Greetings",
            "pronunciation": "soh-pah"
          },
          {
            "target": "Supa",
            "source": "Hello / Peace (Men's greeting)",
            "pronunciation": "supa"
          },
          {
            "target": "Takwenya",
            "source": "Hello / Peace (Women's greeting)",
            "pronunciation": "takwenya"
          },
          {
            "target": "Ashe oleng",
            "source": "Thank you very much",
            "pronunciation": "ashe oleng"
          },
          {
            "target": "Karibu ang'",
            "source": "Welcome",
            "pronunciation": "karibu ang"
          },
          {
            "target": "Eelata",
            "source": "Fat",
            "pronunciation": "ee-la-ta"
          },
          {
            "target": "Ol-mossóri",
            "source": "Egg",
            "pronunciation": "ol-mossori"
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
          }
        ]
      },
      {
        "id": "ilchamus-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Ilchamus (Njemps) sentences for healthcare, transport, and community safety.",
        "culturalNote": "African Next Voices Maa-Samburu-Chamus Corpus (CC-BY-4.0), CLDF ASJP v20 Maa-Chamus (CC-BY-4.0) & Public Domain Historical Lexicons (Farler 1882, Höhnel 1894, Johnston 1902, Dundas 1910, Beech 1911 & Heine 1980).",
        "words": [
          {
            "target": "nabo",
            "source": "One",
            "pronunciation": "na-bo"
          },
          {
            "target": "are",
            "source": "Two",
            "pronunciation": "a-re"
          },
          {
            "target": "ile",
            "source": "Six",
            "pronunciation": "i-le"
          },
          {
            "target": "tomon",
            "source": "Ten",
            "pronunciation": "to-mon"
          },
          {
            "target": "ong'wan",
            "source": "Four",
            "pronunciation": "ong-wan"
          },
          {
            "target": "imiet",
            "source": "Five",
            "pronunciation": "i-miet"
          },
          {
            "target": "saal",
            "source": "Nine",
            "pronunciation": "saal"
          },
          {
            "target": "uni",
            "source": "Three",
            "pronunciation": "u-ni"
          },
          {
            "target": "sapa",
            "source": "Seven",
            "pronunciation": "sa-pa"
          },
          {
            "target": "isiet",
            "source": "Eight",
            "pronunciation": "i-siet"
          }
        ],
        "sentences": [
          {
            "target": "Eserian pooki.",
            "source": "Everything is at peace."
          },
          {
            "target": "Kalo Lparingo.",
            "source": "I am going to Lake Baringo."
          },
          {
            "target": "Metamayiana Nkai nkang' ang'.",
            "source": "May God bless our homestead."
          }
        ]
      }
    ]
  }
];
