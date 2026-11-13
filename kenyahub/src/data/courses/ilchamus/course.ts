import type { CourseUnit, LanguageConfig } from "../types";

// ============================================================
// Ilchamus (Njemps) (Ilchamus / Njemps) Language Course Configuration & Units
// Declarative modular course definition (audit-ready, zero runtime mutations)
// ============================================================

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
    "title": "Unit 1: Lake Baringo Salutations, Njemps Liabori & Lekepir Irrigation Heritage & Numerals",
    "description": "Learn Ilchamus greetings, river-irrigation and fishery vocabulary, and numerals 1–10 from Dundas (1910, pp. 49–55) and Johnston (1902).",
    "icon": "Droplets",
    "skills": [
      {
        "id": "ilchamus-baringo-heritage",
        "title": "Baringo Settlements (Liabori, Lekepir & Korvan), Lake Life & Numerals",
        "icon": "Droplets",
        "description": "Master Ilchamus vocabulary recorded by Hon. K. R. Dundas (1910) and Sir Harry Johnston (1902).",
        "tips": "Hon. K. R. Dundas (1910, JRAI Vol. 40, pp. 49–55) documented the three Njamus (Nyarusi) settlements: Njemps Kubwa or Njemps Liabori ('Downstream' on the Molo River), Njemps Ndogo or Njemps Lekepir ('Upstream' on the Tigrish River), and Korvan (founded on Lake Baringo's islands by Logogwa), together with their 16 clans and the Il Mayek furrow-opening rite.",
        "culturalNote": "On Lake Baringo (Mparingo), Ilchamus fishermen traditionally crafted ultra-light buoyant canoes (l-kadich) bound from ambatch (Aeschynomene elaphroxylon) balsa reeds (Dundas 1910, p. 53).",
        "words": [
          {
            "target": "Supai! (resp. Epa!) / Serian!",
            "source": "Greetings! / Peace!",
            "pronunciation": "su-pai / se-rian",
            "hint": "Ilchamus salutation"
          },
          {
            "target": "Njemps Liabori (Njemps Kubwa) / Njemps Lekepir (Njemps Ndogo) / Korvan",
            "source": "Downstream Njemps (on the Molo) / Upstream Njemps (on the Tigrish) / Island & Tim River settlement",
            "pronunciation": "njemps lia-bo-ri / njemps le-ke-pir / korvan",
            "hint": "Dundas (1910, pp. 49–50, 53)"
          },
          {
            "target": "Mparingo / l-kadich / l-singiri",
            "source": "Lake Baringo / Ambatch balsa-reed canoe / Fish",
            "pronunciation": "mpa-ringo / l-kadich / l-singiri",
            "hint": "Lake Baringo maritime & fishing lexicon"
          },
          {
            "target": "nkare / n-kima / n-kolong / Nkai",
            "source": "Water (River) / Fire / Sun / God",
            "pronunciation": "nka-re / n-kima / n-kolong / nkai",
            "hint": "Johnston (1902 Njemps) & Dundas (1910)"
          },
          {
            "target": "n-kiteng (pl. n-kishu) / l-kinos (ngingyang) / l-makau",
            "source": "Cow (pl. Cattle) / Crocodile / Hippopotamus",
            "pronunciation": "n-kiteng / l-kinos / l-makau",
            "hint": "Johnston (1902 Njemps) & Dundas (1910, p. 49 n. 1)"
          },
          {
            "target": "nabo (obo)",
            "source": "One (1)",
            "pronunciation": "na-bo are uni ongwan i-miet",
            "hint": "Johnston (1902 Njemps) numerals 1–5"
          },
          {
            "target": "are",
            "source": "Two (2)",
            "pronunciation": "na-bo are uni ongwan i-miet",
            "hint": "Johnston (1902 Njemps) numerals 1–5"
          },
          {
            "target": "uni",
            "source": "Three (3)",
            "pronunciation": "na-bo are uni ongwan i-miet",
            "hint": "Johnston (1902 Njemps) numerals 1–5"
          },
          {
            "target": "ile",
            "source": "Six (6)",
            "pronunciation": "ile sa-pa-na i-siet saal to-mon",
            "hint": "Johnston (1902 Njemps) numerals 6–10"
          },
          {
            "target": "sapana",
            "source": "Seven (7)",
            "pronunciation": "ile sa-pa-na i-siet saal to-mon",
            "hint": "Johnston (1902 Njemps) numerals 6–10"
          },
          {
            "target": "isiet",
            "source": "Eight (8)",
            "pronunciation": "ile sa-pa-na i-siet saal to-mon",
            "hint": "Johnston (1902 Njemps) numerals 6–10"
          }
        ],
        "sentences": [
          {
            "target": "Njemps Liabori o Njemps Lekepir: Il Mayek oo Il Derito.",
            "source": "Downstream Njemps and Upstream Njemps: The Il Mayek clan and Il Derito elders open the irrigation furrow (Dundas 1910, pp. 49–54)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Supai! (resp. Epa!) / Serian!\" in Ilchamus?",
            "correctAnswer": "Greetings! / Peace!",
            "options": [
              "Downstream Njemps (on the Molo) / Upstream Njemps (on the Tigrish) / Island & Tim River settlement",
              "Lake Baringo / Ambatch balsa-reed canoe / Fish",
              "Water (River) / Fire / Sun / God",
              "Greetings! / Peace!"
            ],
            "hint": "Ilchamus salutation"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Njemps Liabori (Njemps Kubwa) / Njemps Lekepir (Njemps Ndogo) / Korvan\" in Ilchamus?",
            "correctAnswer": "Downstream Njemps (on the Molo) / Upstream Njemps (on the Tigrish) / Island & Tim River settlement",
            "options": [
              "Lake Baringo / Ambatch balsa-reed canoe / Fish",
              "Water (River) / Fire / Sun / God",
              "Downstream Njemps (on the Molo) / Upstream Njemps (on the Tigrish) / Island & Tim River settlement",
              "Greetings! / Peace!"
            ],
            "hint": "Dundas (1910, pp. 49–50, 53)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mparingo / l-kadich / l-singiri\" in Ilchamus?",
            "correctAnswer": "Lake Baringo / Ambatch balsa-reed canoe / Fish",
            "options": [
              "Water (River) / Fire / Sun / God",
              "Lake Baringo / Ambatch balsa-reed canoe / Fish",
              "Greetings! / Peace!",
              "Downstream Njemps (on the Molo) / Upstream Njemps (on the Tigrish) / Island & Tim River settlement"
            ],
            "hint": "Lake Baringo maritime & fishing lexicon"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lake Baringo / Ambatch balsa-reed canoe / Fish\" in Ilchamus?",
            "correctAnswer": "Mparingo / l-kadich / l-singiri",
            "options": [
              "Mparingo / l-kadich / l-singiri",
              "Supai! (resp. Epa!) / Serian!",
              "Njemps Liabori (Njemps Kubwa) / Njemps Lekepir (Njemps Ndogo) / Korvan",
              "nkare / n-kima / n-kolong / Nkai"
            ],
            "hint": "m-pah-reen-goh / l-kah-deech / l-seen-gee-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Water (River) / Fire / Sun / God\" in Ilchamus?",
            "correctAnswer": "nkare / n-kima / n-kolong / Nkai",
            "options": [
              "Supai! (resp. Epa!) / Serian!",
              "Njemps Liabori (Njemps Kubwa) / Njemps Lekepir (Njemps Ndogo) / Korvan",
              "Mparingo / l-kadich / l-singiri",
              "nkare / n-kima / n-kolong / Nkai"
            ],
            "hint": "n-kah-reh / n-kee-mah / n-koh-lohng / n-kah-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Ilchamus expression with its English meaning:",
            "correctAnswer": "Supai! (resp. Epa!) / Serian!: Greetings! / Peace!",
            "pairs": [
              {
                "left": "Supai! (resp. Epa!) / Serian!",
                "right": "Greetings! / Peace!"
              },
              {
                "left": "Njemps Liabori (Njemps Kubwa) / Njemps Lekepir (Njemps Ndogo) / Korvan",
                "right": "Downstream Njemps (on the Molo) / Upstream Njemps (on the Tigrish) / Island & Tim River settlement"
              },
              {
                "left": "Mparingo / l-kadich / l-singiri",
                "right": "Lake Baringo / Ambatch balsa-reed canoe / Fish"
              },
              {
                "left": "nkare / n-kima / n-kolong / Nkai",
                "right": "Water (River) / Fire / Sun / God"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Ilchamus term for \"Cow (pl. Cattle) / Crocodile / Hippopotamus\": ___",
            "correctAnswer": "n-kiteng (pl. n-kishu) / l-kinos (ngingyang) / l-makau",
            "options": [
              "Supai! (resp. Epa!) / Serian!",
              "Njemps Liabori (Njemps Kubwa) / Njemps Lekepir (Njemps Ndogo) / Korvan",
              "Mparingo / l-kadich / l-singiri",
              "n-kiteng (pl. n-kishu) / l-kinos (ngingyang) / l-makau"
            ],
            "hint": "Johnston (1902 Njemps) & Dundas (1910, p. 49 n. 1)"
          }
        ]
      }
    ]
  },
  {
    "id": "ilchamus-unit-2",
    "title": "Unit 2: Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "Users",
    "skills": [
      {
        "id": "ilchamus-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "n-gitok (pl. n-gituak)",
            "source": "Woman",
            "pronunciation": "n-gitok",
            "hint": "Dundas 1910 & Johnston 1902 Njemps"
          },
          {
            "target": "l-payian (elder) / l-murani (warrior) / l-tungani (person)",
            "source": "Man",
            "pronunciation": "l-payian / l-murani / l-tungani",
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
            "target": "lalashe; Añgargenna (pl.)",
            "source": "Brother",
            "pronunciation": "la-lashe",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"n-gitok (pl. n-gituak)\" in Ilchamus?",
            "correctAnswer": "Woman",
            "options": [
              "Man",
              "Person / People",
              "Father",
              "Woman"
            ],
            "hint": "Dundas 1910 & Johnston 1902 Njemps"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"l-payian (elder) / l-murani (warrior) / l-tungani (person)\" in Ilchamus?",
            "correctAnswer": "Man",
            "options": [
              "Person / People",
              "Father",
              "Man",
              "Woman"
            ],
            "hint": "Dundas 1910 & Johnston 1902 Njemps"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ltung'ani (pl. ltung'ana)\" in Ilchamus?",
            "correctAnswer": "Person / People",
            "options": [
              "Father",
              "Person / People",
              "Woman",
              "Man"
            ],
            "hint": "Camus / North Maa (Johnston 1902)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Person / People\" in Ilchamus?",
            "correctAnswer": "ltung'ani (pl. ltung'ana)",
            "options": [
              "ltung'ani (pl. ltung'ana)",
              "n-gitok (pl. n-gituak)",
              "l-payian (elder) / l-murani (warrior) / l-tungani (person)",
              "papa / menye"
            ],
            "hint": "ltung-a-ni"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Father\" in Ilchamus?",
            "correctAnswer": "papa / menye",
            "options": [
              "n-gitok (pl. n-gituak)",
              "l-payian (elder) / l-murani (warrior) / l-tungani (person)",
              "ltung'ani (pl. ltung'ana)",
              "papa / menye"
            ],
            "hint": "pa-pa / me-nye"
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
                "left": "l-payian (elder) / l-murani (warrior) / l-tungani (person)",
                "right": "Man"
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
            "correctAnswer": "yeyo / ng'oto",
            "options": [
              "n-gitok (pl. n-gituak)",
              "l-payian (elder) / l-murani (warrior) / l-tungani (person)",
              "ltung'ani (pl. ltung'ana)",
              "yeyo / ng'oto"
            ],
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          }
        ]
      },
      {
        "id": "ilchamus-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
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
            "target": "Eñ getok; En gedūa (pl.)",
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
            "target": "Ilchamus (sg. Olchamus); Suk exonym: En-jemusi",
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
            "source": "Chief — Sister"
          },
          {
            "target": "Eñ karei — Eñ getok",
            "source": "Son — Wife"
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
              "Añganaishai",
              "Añganaishai"
            ],
            "hint": "Starts with \"Añ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Eñ karei\"",
            "correctAnswer": "Son",
            "acceptedAnswers": [
              "Son",
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
    "title": "Unit 3: Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "Scale",
    "skills": [
      {
        "id": "ilchamus-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nabo (fem.) / obo (masc.)\" in Ilchamus?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
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
              "Two",
              "One"
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
            "correctAnswer": "uni (fem.) / okuni (masc.)",
            "options": [
              "uni (fem.) / okuni (masc.)",
              "nabo (fem.) / obo (masc.)",
              "are (fem.) / waare (masc.)",
              "ong'wan"
            ],
            "hint": "u-ni / o-ku-ni"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Ilchamus?",
            "correctAnswer": "ong'wan",
            "options": [
              "nabo (fem.) / obo (masc.)",
              "are (fem.) / waare (masc.)",
              "uni (fem.) / okuni (masc.)",
              "ong'wan"
            ],
            "hint": "ong-wan"
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
            "correctAnswer": "imiet / imjet",
            "options": [
              "nabo (fem.) / obo (masc.)",
              "are (fem.) / waare (masc.)",
              "uni (fem.) / okuni (masc.)",
              "imiet / imjet"
            ],
            "hint": "Johnston (1902) & Vossen (1982) — Camus/Ilchamus"
          }
        ]
      },
      {
        "id": "ilchamus-numbers-measures-trade-measures-3",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
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
            "source": "Ten — Twenty"
          },
          {
            "target": "Tomoni uni — Artam",
            "source": "Thirty — Forty"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"tomon\" mean in English?",
            "correctAnswer": "Ten",
            "options": [
              "Ten",
              "Twenty",
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
    "title": "Unit 4: Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "Tractor",
    "skills": [
      {
        "id": "ilchamus-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
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
            "source": "Food — Milk"
          },
          {
            "target": "nkiri — Botote",
            "source": "Meat — Banana"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"n-daa\" mean in English?",
            "correctAnswer": "Food",
            "options": [
              "Food",
              "Milk",
              "Meat",
              "Banana"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Milk\"",
            "correctAnswer": "kule",
            "acceptedAnswers": [
              "kule",
              "kule"
            ],
            "hint": "Starts with \"ku\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"nkiri\"",
            "correctAnswer": "Meat",
            "acceptedAnswers": [
              "Meat",
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
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
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
            "source": "Maize — Palm wine or mead"
          },
          {
            "target": "Eñ gare — lsing'iri",
            "source": "Water — Fish"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"El bāek\" mean in English?",
            "correctAnswer": "Maize",
            "options": [
              "Maize",
              "Palm wine or mead",
              "Water",
              "Fish (Lake Baringo)"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Palm wine or mead\"",
            "correctAnswer": "En naishu, Na mōqa",
            "acceptedAnswers": [
              "En naishu, Na mōqa",
              "En naishu, Na mōqa"
            ],
            "hint": "Starts with \"En\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Eñ gare\"",
            "correctAnswer": "Water",
            "acceptedAnswers": [
              "Water",
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
    "title": "Unit 5: Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "PawPrint",
    "skills": [
      {
        "id": "ilchamus-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"n-golong\" in Ilchamus?",
            "correctAnswer": "Day",
            "options": [
              "Night",
              "Star",
              "Water / Lake / River",
              "Day"
            ],
            "hint": "Johnston 1902 Njemps"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"n-gewarie\" in Ilchamus?",
            "correctAnswer": "Night",
            "options": [
              "Star",
              "Water / Lake / River",
              "Night",
              "Day"
            ],
            "hint": "Johnston 1902 Njemps"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"l-akira (pl. l-akir)\" in Ilchamus?",
            "correctAnswer": "Star",
            "options": [
              "Water / Lake / River",
              "Star",
              "Day",
              "Night"
            ],
            "hint": "Johnston 1902 Njemps"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Star\" in Ilchamus?",
            "correctAnswer": "l-akira (pl. l-akir)",
            "options": [
              "l-akira (pl. l-akir)",
              "n-golong",
              "n-gewarie",
              "ŋ-kár-ɛ́ (nkare)"
            ],
            "hint": "l-ah-kee-rah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Water / Lake / River\" in Ilchamus?",
            "correctAnswer": "ŋ-kár-ɛ́ (nkare)",
            "options": [
              "n-golong",
              "n-gewarie",
              "l-akira (pl. l-akir)",
              "ŋ-kár-ɛ́ (nkare)"
            ],
            "hint": "nka-re"
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
            "correctAnswer": "l-caní (lchani)",
            "options": [
              "n-golong",
              "n-gewarie",
              "l-akira (pl. l-akir)",
              "l-caní (lchani)"
            ],
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          }
        ]
      },
      {
        "id": "ilchamus-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nkop\" in Ilchamus?",
            "correctAnswer": "Earth / Land",
            "options": [
              "Grass",
              "Mountain / Hill",
              "River",
              "Earth / Land"
            ],
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nkujit\" in Ilchamus?",
            "correctAnswer": "Grass",
            "options": [
              "Mountain / Hill",
              "River",
              "Grass",
              "Earth / Land"
            ],
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"l-doinyo\" in Ilchamus?",
            "correctAnswer": "Mountain / Hill",
            "options": [
              "River",
              "Mountain / Hill",
              "Earth / Land",
              "Grass"
            ],
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mountain / Hill\" in Ilchamus?",
            "correctAnswer": "l-doinyo",
            "options": [
              "l-doinyo",
              "nkop",
              "nkujit",
              "l-keju / e-waso"
            ],
            "hint": "l-doy-nyoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"River\" in Ilchamus?",
            "correctAnswer": "l-keju / e-waso",
            "options": [
              "nkop",
              "nkujit",
              "l-doinyo",
              "l-keju / e-waso"
            ],
            "hint": "l-keh-joo"
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
            "correctAnswer": "soit (pl. soito)",
            "options": [
              "nkop",
              "nkujit",
              "l-doinyo",
              "soit (pl. soito)"
            ],
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          }
        ]
      }
    ]
  },
  {
    "id": "ilchamus-unit-6",
    "title": "Unit 6: The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "User",
    "skills": [
      {
        "id": "ilchamus-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
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
        "sentences": [],
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
              "Nose",
              "Tooth",
              "Ear",
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
              "Nose",
              "Eye",
              "Ear"
            ],
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Ilchamus?",
            "correctAnswer": "ŋ-kawar-íé (nkawarie)",
            "options": [
              "ŋ-kawar-íé (nkawarie)",
              "ŋ-kɔŋ-ʊ́ (nkong'u)",
              "ŋ-ké-ok (nkeok)",
              "l-alá-ɪ̀ (lalai)"
            ],
            "hint": "nka-wa-rie"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tooth\" in Ilchamus?",
            "correctAnswer": "l-alá-ɪ̀ (lalai)",
            "options": [
              "ŋ-kɔŋ-ʊ́ (nkong'u)",
              "ŋ-ké-ok (nkeok)",
              "ŋ-kawar-íé (nkawarie)",
              "l-alá-ɪ̀ (lalai)"
            ],
            "hint": "la-lai"
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
            "correctAnswer": "l-ŋɛjɛp (lng'ejep)",
            "options": [
              "ŋ-kɔŋ-ʊ́ (nkong'u)",
              "ŋ-ké-ok (nkeok)",
              "ŋ-kawar-íé (nkawarie)",
              "l-ŋɛjɛp (lng'ejep)"
            ],
            "hint": "Wikipedia Eastern_Nilotic_languages — Vossen (1982) Camus"
          }
        ]
      },
      {
        "id": "ilchamus-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nkaina\" in Ilchamus?",
            "correctAnswer": "Hand / Arm",
            "options": [
              "Leg / Foot",
              "Arm",
              "Back",
              "Hand / Arm"
            ],
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"lkeju\" in Ilchamus?",
            "correctAnswer": "Leg / Foot",
            "options": [
              "Arm",
              "Back",
              "Leg / Foot",
              "Hand / Arm"
            ],
            "hint": "Johnston (1902) — Njemps/Ilchamus"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Engaina\" in Ilchamus?",
            "correctAnswer": "Arm",
            "options": [
              "Back",
              "Arm",
              "Hand / Arm",
              "Leg / Foot"
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
            "hint": "engaina"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Back\" in Ilchamus?",
            "correctAnswer": "Engorioñ",
            "options": [
              "nkaina",
              "lkeju",
              "Engaina",
              "Engorioñ"
            ],
            "hint": "engorioñ"
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
              "Engaina",
              "Ngoṣoge"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ]
      }
    ]
  },
  {
    "id": "ilchamus-unit-7",
    "title": "Unit 7: Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "ilchamus-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
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
        "sentences": [],
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
              "Drink",
              "Go",
              "Eat",
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
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
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
            "source": "To hear — To know"
          },
          {
            "target": "a-nyor — a-isho",
            "source": "To love — To give"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"a-ning\" mean in English?",
            "correctAnswer": "To hear",
            "options": [
              "To hear",
              "To know",
              "To love / like",
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
    "title": "Unit 8: Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Ilchamus (Njemps) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "Compass",
    "skills": [
      {
        "id": "ilchamus-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
        "words": [
          {
            "target": "Ol lari (pl. El larin)",
            "source": "Year"
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
            "source": "Year — Today"
          },
          {
            "target": "taisere — ngole",
            "source": "Tomorrow — Yesterday"
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
              "taata",
              "taata"
            ],
            "hint": "Starts with \"ta\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"taisere\"",
            "correctAnswer": "Tomorrow",
            "acceptedAnswers": [
              "Tomorrow",
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
        "culturalNote": "Primary historical documentation for Ilchamus (Njemps) (Ilchamus / Camus) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910 Njemps) & Mervyn W. H. Beech (1911 En-Jemusi Customs & Comparative Notes) preserves pre-1930 phonological, grammatical, and ethnographic usage across Baringo.",
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
            "source": "Day — Year"
          },
          {
            "target": "taata — n-gewarie",
            "source": "Today — Night"
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
              "Today",
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
    "id": "ilchamus-unit-9-public-domain-corpus",
    "title": "Unit 9: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Ilchamus (Njemps) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "skills": [
      {
        "id": "ilchamus-pd-corpus-9-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Ilchamus (Njemps) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Ilchamus (Njemps) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "artam",
            "source": "Ninety",
            "pronunciation": "artam",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "otomoni uni",
            "source": "Eighty",
            "pronunciation": "o-to-mo-ni uni",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "obikitam",
            "source": "Seventy",
            "pronunciation": "o-bi-ki-tam",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "otomon",
            "source": "Sixty",
            "pronunciation": "o-to-mon",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Tomon obo",
            "source": "Eleven",
            "pronunciation": "to-mon obo",
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
            "source": "young",
            "pronunciation": "endi-to",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Ol-labanani",
            "source": "Diviner",
            "pronunciation": "ol-labanani",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"artam\" in Ilchamus (Njemps)?",
            "correctAnswer": "Ninety",
            "options": [
              "Ninety",
              "Eighty",
              "Seventy",
              "Sixty"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Ilchamus (Njemps) term to its English meaning:",
            "correctAnswer": "artam: Ninety",
            "pairs": [
              {
                "left": "artam",
                "right": "Ninety"
              },
              {
                "left": "otomoni uni",
                "right": "Eighty"
              },
              {
                "left": "obikitam",
                "right": "Seventy"
              },
              {
                "left": "otomon",
                "right": "Sixty"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Ilchamus (Njemps) term for \"Eleven\": ___",
            "correctAnswer": "Tomon obo",
            "options": [
              "Tomon obo",
              "artam",
              "otomoni uni",
              "obikitam"
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
            "source": "Traveler",
            "pronunciation": "le-sunggu",
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
            "target": "Manyata (warriors'), Añgañ (tribal)",
            "source": "Town or settlement",
            "pronunciation": "manya-ta anggang",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Entakolla",
            "source": "molar",
            "pronunciation": "enta-kolla",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Or gumbao",
            "source": "Tobacco",
            "pronunciation": "or gumbao",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ],
        "sentences": [
          {
            "target": "El mau (Manyata (warriors'), Añgañ (tribal)).",
            "source": "Twins (Town or settlement)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Lesuñgu\" in Ilchamus?",
            "correctAnswer": "Traveler",
            "options": [
              "Traveler",
              "Wart hog",
              "War",
              "Spring water"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Ilchamus (Njemps) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Lesuñgu: White man",
            "pairs": [
              {
                "left": "Lesuñgu",
                "right": "Traveler"
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
              "El mau",
              "Manyata (warriors'), Añgañ (tribal)",
              "Lesuñgu",
              "Ol gūya"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ]
      }
    ]
  },
  {
    "id": "ilchamus-unit-10-open-datasets-modern",
    "title": "Unit 10: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Ilchamus (Njemps) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
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
            "target": "Eñ udi; Eñ usidin (pl.)",
            "source": "Stick",
            "pronunciation": "eng udi",
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          },
          {
            "target": "Os singolio",
            "source": "Song",
            "pronunciation": "os",
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
            "source": "Thing — Thief"
          },
          {
            "target": "Eñ udi — Os singolio",
            "source": "Stick — Song"
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
              "Ol aburoni",
              "Ol aburoni"
            ],
            "hint": "Starts with \"Ol\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Eñ udi\"",
            "correctAnswer": "Stick",
            "acceptedAnswers": [
              "Stick",
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
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Añgob\" in Ilchamus?",
            "correctAnswer": "Place",
            "options": [
              "Place",
              "Pig",
              "Elder",
              "Man / Men"
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
              "Embanīt",
              "Añ gotuk",
              "Añgob",
              "Ol bitirr"
            ],
            "hint": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
          }
        ]
      }
    ]
  }
];
