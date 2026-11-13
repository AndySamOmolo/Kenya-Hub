import type { CourseUnit, LanguageConfig } from "../types";

// ============================================================
// Pokot (Pökoot) (Pökoot) Language Course Configuration & Units
// Declarative modular course definition (audit-ready, zero runtime mutations)
// ============================================================

export const POKOT_CONFIG: LanguageConfig = {
  "id": "pokot",
  "name": "Pokot (Pökoot)",
  "nativeName": "Pökoot",
  "family": "Nilotic",
  "counties": [
    "West Pokot",
    "Baringo",
    "Turkana"
  ],
  "speakers": "780K",
  "speechLocale": "sw-KE",
  "description": "The northern branch of the Highland (Southern) Nilotic Kalenjin family, spoken across West Pokot and Baringo counties by both agricultural hill-furrow engineers and pastoral plains communities. Grounded in Sir Harry Johnston (1902 Suk), Hon. K. R. Dundas (1910), and Mervyn W. H. Beech.",
  "color": "#7C3AED",
  "sources": [
    "johnston-uganda-protectorate-1902",
    "dundas-baringo-tribes-1910",
    "beech-suk-pokot-1911",
    "open-web-swadesh-comparative"
  ]
};

export const POKOT_UNITS: CourseUnit[] = [
  {
    "id": "pokot-unit-1",
    "title": "Unit 1: Pökoot Salutations (p. 91), Beech’s (1911) Suk Grammar, Quinary Numerals & Tiangoi! Riddles",
    "description": "Master Pökoot salutations, nouns, quinary numerals 1–100 (pp. 66–68), riddles (pp. 43–45), and the Hymn to Torôrut (p. 16) from Mervyn Beech (1911).",
    "icon": "Megaphone",
    "skills": [
      {
        "id": "pokot-beech-1911-lexicon",
        "title": "Salutations, Hill-Furrow & Pastoral Life, Quinary Numerals & Riddles",
        "icon": "Tractor",
        "description": "Learn Pökoot vocabulary, quinary numerals, and riddles from Mervyn W. H. Beech (1911).",
        "tips": "Mervyn W. H. Beech (1911, p. 43) records that Pökoot riddles begin with the challenge 'Tiangoi!', answered by 'Tia!' (and 'Donguch!' if guessed wrong). Beech (pp. 9, 15, 82, 112, 145) also documents the division between Hill Suk (Pi'-pa-pagh 'Seed-people', who build cliff-side irrigation ditches called ôr-a-pogh) and Pastoral Suk (Pi'-pa-tich 'Cattle-people'), and notes that Pökoot uses distinct verbs for drinking milk (lu) vs. drinking water (igh).",
        "culturalNote": "In Mervyn Beech (1911, p. 19), the elder Tiamolok describes the Suk celestial pantheon: Torôrut (Supreme winged Sky God whose wings flash lightning kerial and thunder kotil), his wife Seta (the Pleiades), his first-born son Arawaʻ (the Moon), his son Ilat (the Rain), his first-born daughter Topogh (the Evening Star), his younger brother Asis (the Sun), and his children Kokel (the Stars).",
        "words": [
          {
            "target": "Tokwes! Chamke-t! — Chamke-cha! — Chamke-kau! — Chamke-sapon! / Subai! (resp. Ērpa!) / Tapkwenya! (resp. Īgo!)",
            "source": "Elder greeting litany! / Male greeting! / Female greeting!",
            "pronunciation": "tokwes chamke-t — chamke-cha — chamke-kau — chamke-sapon / su-bai / tapkwenya",
            "hint": "Beech (1911, p. 91) Suk salutations"
          },
          {
            "target": "Sĕra! (Sĕre!) / Korôton! (resp. I-rôt-enyi!)",
            "source": "Thank you! / Good-bye! (lit. I have gone! — Thou art going!)",
            "pronunciation": "se-ra / ko-ro-ton",
            "hint": "Beech (1911, pp. 92, 96, 119, 143)"
          },
          {
            "target": "Torôrut • Seta • Arawaʻ • Ilat • Topogh • Asis • Kokel",
            "source": "Supreme Sky God • Pleiades (wife) • Moon (1st son) • Rain (son) • Evening Star (1st daughter) • Sun (younger brother) • Stars",
            "pronunciation": "to-ro-rut • se-ta • a-ra-wa' • i-lat • to-pogh • a-sis • ko-kel",
            "hint": "Beech (1911, p. 19) Suk celestial family"
          },
          {
            "target": "chi (pl. pich / pik) • muren • kôrkôʻ (pl. kôru) • Pĕch-on (pl. Pôkwut)",
            "source": "Person (pl. People) • Warrior • Woman (pl. Women) • Suk person (pl. Suk people)",
            "pronunciation": "chi • mu-ren • korko' • pech-on",
            "hint": "Beech (1911, pp. 1, 57, 61)"
          },
          {
            "target": "pogh • maʻ (mat, pl. môat) • ôr-a-pogh • kōkwa (pl. kokwo-ten)",
            "source": "Water • Fire • Irrigation ditch/furrow • Village council assembly place",
            "pronunciation": "pogh • ma' • or-a-pogh • kokwa",
            "hint": "Beech (1911, pp. 54, 61, 101, 112)"
          },
          {
            "target": "tainy (pl. tich) / teta (pl. toka) • cheghwa (verb: lu) • pagh / musong / matai",
            "source": "Cattle / Cow • Milk (lu = drink milk vs. igh = drink water) • Grain / Millet / Eleusine",
            "pronunciation": "tainy / te-ta • cheghwa • pagh / mu-song / ma-tai",
            "hint": "Beech (1911, pp. 4, 9, 51–52, 62, 112)"
          },
          {
            "target": "okoñgô",
            "source": "One (1)",
            "pronunciation": "o-konggo oghiengg so-mok anggwan mut",
            "hint": "Beech (1911, pp. 66–67) cardinals 1–5"
          },
          {
            "target": "oghieñg",
            "source": "Two (2)",
            "pronunciation": "o-konggo oghiengg so-mok anggwan mut",
            "hint": "Beech (1911, pp. 66–67) cardinals 1–5"
          },
          {
            "target": "somok",
            "source": "Three (3)",
            "pronunciation": "o-konggo oghiengg so-mok anggwan mut",
            "hint": "Beech (1911, pp. 66–67) cardinals 1–5"
          },
          {
            "target": "mut ngô okoñgô (akan-kapei)",
            "source": "6 (5+1)",
            "pronunciation": "mut ngo o-konggo mut ngo oghiengg mut ngo so-mok mut ngo anggwan ta-man",
            "hint": "Beech (1911, p. 67) quinary & Turkana-borrowed numerals 6–10"
          },
          {
            "target": "mut ngô oghieñg (akan-kare)",
            "source": "7 (5+2)",
            "pronunciation": "mut ngo o-konggo mut ngo oghiengg mut ngo so-mok mut ngo anggwan ta-man",
            "hint": "Beech (1911, p. 67) quinary & Turkana-borrowed numerals 6–10"
          },
          {
            "target": "mut ngô somok (akan-kowuni)",
            "source": "8 (5+3)",
            "pronunciation": "mut ngo o-konggo mut ngo oghiengg mut ngo so-mok mut ngo anggwan ta-man",
            "hint": "Beech (1911, p. 67) quinary & Turkana-borrowed numerals 6–10"
          },
          {
            "target": "Tiangoi! — Tia! Nyelnyel ma-ke-lany. — Sirim-nyon.",
            "source": "Riddle: Unstable so-it-may-not-be-climbed. — Answer: A chain (Beech 1911, p. 43, Riddle #1)",
            "pronunciation": "tiangoi — tia nyelnyel ma-ke-lany — sirim-nyon",
            "hint": "Mervyn Beech (1911, p. 43, Riddle #1)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Person (pl. People) • Warrior • Woman (pl. Women) • Suk person (pl. Suk people)\" in Pokot?",
            "correctAnswer": "chi (pl. pich / pik) • muren • kôrkôʻ (pl. kôru) • Pĕch-on (pl. Pôkwut)",
            "options": [
              "Tokwes! Chamke-t! — Chamke-cha! — Chamke-kau! — Chamke-sapon! / Subai! (resp. Ērpa!) / Tapkwenya! (resp. Īgo!)",
              "Sĕra! (Sĕre!) / Korôton! (resp. I-rôt-enyi!)",
              "Torôrut • Seta • Arawaʻ • Ilat • Topogh • Asis • Kokel",
              "chi (pl. pich / pik) • muren • kôrkôʻ (pl. kôru) • Pĕch-on (pl. Pôkwut)"
            ],
            "hint": "chee / peech / moo-rehn / kohr-koh / peh-chohn / poh-kwoot"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokot expression with its English meaning:",
            "correctAnswer": "Tokwes! Chamke-t! — Chamke-cha! — Chamke-kau! — Chamke-sapon! / Subai! (resp. Ērpa!) / Tapkwenya! (resp. Īgo!): Elder greeting litany! / Male greeting! / Female greeting!",
            "pairs": [
              {
                "left": "Tokwes! Chamke-t! — Chamke-cha! — Chamke-kau! — Chamke-sapon! / Subai! (resp. Ērpa!) / Tapkwenya! (resp. Īgo!)",
                "right": "Elder greeting litany! / Male greeting! / Female greeting!"
              },
              {
                "left": "Sĕra! (Sĕre!) / Korôton! (resp. I-rôt-enyi!)",
                "right": "Thank you! / Good-bye! (lit. I have gone! — Thou art going!)"
              },
              {
                "left": "Torôrut • Seta • Arawaʻ • Ilat • Topogh • Asis • Kokel",
                "right": "Supreme Sky God • Pleiades (wife) • Moon (1st son) • Rain (son) • Evening Star (1st daughter) • Sun (younger brother) • Stars"
              },
              {
                "left": "chi (pl. pich / pik) • muren • kôrkôʻ (pl. kôru) • Pĕch-on (pl. Pôkwut)",
                "right": "Person (pl. People) • Warrior • Woman (pl. Women) • Suk person (pl. Suk people)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot term for \"Water • Fire • Irrigation ditch/furrow • Village council assembly place\": ___",
            "correctAnswer": "pogh • maʻ (mat, pl. môat) • ôr-a-pogh • kōkwa (pl. kokwo-ten)",
            "options": [
              "Tokwes! Chamke-t! — Chamke-cha! — Chamke-kau! — Chamke-sapon! / Subai! (resp. Ērpa!) / Tapkwenya! (resp. Īgo!)",
              "Sĕra! (Sĕre!) / Korôton! (resp. I-rôt-enyi!)",
              "Torôrut • Seta • Arawaʻ • Ilat • Topogh • Asis • Kokel",
              "pogh • maʻ (mat, pl. môat) • ôr-a-pogh • kōkwa (pl. kokwo-ten)"
            ],
            "hint": "Beech (1911, pp. 54, 61, 101, 112)"
          }
        ]
      }
    ]
  },
  {
    "id": "pokot-unit-2",
    "title": "Unit 2: Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Pokot (Pökoot) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "Users",
    "skills": [
      {
        "id": "pokot-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "chito (pl. pich) / muren (warrior)",
            "source": "Man",
            "pronunciation": "chi-to / mu-ren",
            "hint": "Beech 1911 p. 61 & Johnston 1902 Suk"
          },
          {
            "target": "piich (sg. chii)",
            "source": "Person / People",
            "pronunciation": "piich",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "Pĕch-on (pl. Pôkwut)",
            "source": "Pokot person / Pokot people (Endonym)",
            "pronunciation": "pech-on",
            "hint": "Beech (1911, p. 1) — Origin of the Suk/Pokot ethnonym"
          },
          {
            "target": "Chep-bleñg",
            "source": "Endo (Marakwet escarpment) people",
            "pronunciation": "chep-blengg",
            "hint": "Beech (1911, p. 2) — The Suk: Their Language and Folklore"
          },
          {
            "target": "papa / kapo",
            "source": "Father",
            "pronunciation": "pa-pa / ka-po",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "yö / iye",
            "source": "Mother",
            "pronunciation": "yo / iye",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "korko (pl. korok)",
            "source": "Wife / Woman",
            "pronunciation": "korko",
            "hint": "Juxon Barton (1921) & Beech (1911) — Suk/Pokot"
          },
          {
            "target": "karachona (sg. karachonait)",
            "source": "Youth / Young man",
            "pronunciation": "ka-racho-na",
            "hint": "Juxon Barton (1921) & Beech (1911) — Suk/Pokot"
          },
          {
            "target": "moning' (pl. moning'is)",
            "source": "Child",
            "pronunciation": "mo-ning'",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"chito (pl. pich) / muren (warrior)\" in Pokot?",
            "correctAnswer": "Man",
            "options": [
              "Person / People",
              "Pokot person / Pokot people (Endonym)",
              "Endo (Marakwet escarpment) people",
              "Man"
            ],
            "hint": "Beech 1911 p. 61 & Johnston 1902 Suk"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"piich (sg. chii)\" in Pokot?",
            "correctAnswer": "Person / People",
            "options": [
              "Pokot person / Pokot people (Endonym)",
              "Endo (Marakwet escarpment) people",
              "Person / People",
              "Man"
            ],
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Pĕch-on (pl. Pôkwut)\" in Pokot?",
            "correctAnswer": "Pokot person / Pokot people (Endonym)",
            "options": [
              "Endo (Marakwet escarpment) people",
              "Pokot person / Pokot people (Endonym)",
              "Man",
              "Person / People"
            ],
            "hint": "Beech (1911, p. 1) — Origin of the Suk/Pokot ethnonym"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Pokot person / Pokot people (Endonym)\" in Pokot?",
            "correctAnswer": "Pĕch-on (pl. Pôkwut)",
            "options": [
              "Pĕch-on (pl. Pôkwut)",
              "chito (pl. pich) / muren (warrior)",
              "piich (sg. chii)",
              "Chep-bleñg"
            ],
            "hint": "pech-on / pok-wut"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Endo (Marakwet escarpment) people\" in Pokot?",
            "correctAnswer": "Chep-bleñg",
            "options": [
              "chito (pl. pich) / muren (warrior)",
              "piich (sg. chii)",
              "Pĕch-on (pl. Pôkwut)",
              "Chep-bleñg"
            ],
            "hint": "chep-bleng"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokot expression with its English meaning:",
            "correctAnswer": "chito (pl. pich) / muren (warrior): Man",
            "pairs": [
              {
                "left": "chito (pl. pich) / muren (warrior)",
                "right": "Man"
              },
              {
                "left": "piich (sg. chii)",
                "right": "Person / People"
              },
              {
                "left": "Pĕch-on (pl. Pôkwut)",
                "right": "Pokot person / Pokot people (Endonym)"
              },
              {
                "left": "Chep-bleñg",
                "right": "Endo (Marakwet escarpment) people"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot term for \"Father\": ___",
            "correctAnswer": "papa / kapo",
            "options": [
              "chito (pl. pich) / muren (warrior)",
              "piich (sg. chii)",
              "Pĕch-on (pl. Pôkwut)",
              "papa / kapo"
            ],
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          }
        ]
      },
      {
        "id": "pokot-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "Torôrut / Asiis",
            "source": "Supreme Sky God / Younger brother (the Sun)",
            "pronunciation": "to-ro-rut / a-siis",
            "hint": "Beech (1911, p. 19) — Suk Celestial Pantheon"
          },
          {
            "target": "Ki-ruwok-in (pl. Ki-ruwok-ik)",
            "source": "Council Adviser / Judge-Elder",
            "pronunciation": "ki-ruwok-in",
            "hint": "Beech (1911, p. 7) — Suk elder governance"
          },
          {
            "target": "ka̱ːyne̱ːt (kainet)",
            "source": "Name",
            "pronunciation": "kaynet",
            "hint": "Wikipedia Kalenjin_languages — van Otterloo (1979) East Pokot"
          },
          {
            "target": "iyu-nyan anga",
            "source": "Maternal aunt (my other mother)",
            "pronunciation": "iyu-nyan anga",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "mŭnuñg, pl. mūnuñg; my baby, monde-nyan, pl. mon-echan",
            "source": "Baby ( of either sex )",
            "pronunciation": "mu-nungg",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "weri, pl. werkoʻ",
            "source": "Brother",
            "pronunciation": "we-ri",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "ŏra (pl. ŏra-tin)",
            "source": "Brother-in-law / Sister-in-law",
            "pronunciation": "ora",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "ki-ruwok-in (pl. ki-ruwok-u)",
            "source": "Chief / Council adviser",
            "pronunciation": "ki-ruwok-in",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "ôr, pl. ôr-ten (vide Road ); pereris, pl. pereris-tin",
            "source": "Clan ( family )",
            "pronunciation": "or",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Torôrut / Asiis\" in Pokot (Pökoot)?",
            "correctAnswer": "Supreme Sky God / Younger brother (the Sun)",
            "options": [
              "Supreme Sky God / Younger brother (the Sun)",
              "Council Adviser / Judge-Elder",
              "Name",
              "Maternal aunt (my other mother)"
            ],
            "hint": "Beech (1911, p. 19) — Suk Celestial Pantheon"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Pokot (Pökoot) term to its English meaning:",
            "correctAnswer": "Torôrut / Asiis: Supreme Sky God / Younger brother (the Sun)",
            "pairs": [
              {
                "left": "Torôrut / Asiis",
                "right": "Supreme Sky God / Younger brother (the Sun)"
              },
              {
                "left": "Ki-ruwok-in (pl. Ki-ruwok-ik)",
                "right": "Council Adviser / Judge-Elder"
              },
              {
                "left": "ka̱ːyne̱ːt (kainet)",
                "right": "Name"
              },
              {
                "left": "iyu-nyan anga",
                "right": "Maternal aunt (my other mother)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot (Pökoot) term for \"Baby ( of either sex )\": ___",
            "correctAnswer": "mŭnuñg, pl. mūnuñg; my baby, monde-nyan, pl. mon-echan",
            "options": [
              "mŭnuñg, pl. mūnuñg; my baby, monde-nyan, pl. mon-echan",
              "Torôrut / Asiis",
              "Ki-ruwok-in (pl. Ki-ruwok-ik)",
              "ka̱ːyne̱ːt (kainet)"
            ],
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          }
        ]
      }
    ]
  },
  {
    "id": "pokot-unit-3",
    "title": "Unit 3: Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Pokot (Pökoot) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "Scale",
    "skills": [
      {
        "id": "pokot-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "àkɔ́ɔ́ŋkɔ̀ (akong'o / okongo)",
            "source": "One",
            "pronunciation": "a-koongko",
            "hint": "Beech (1911, pp. 66–68) & Wikipedia Nilotic_languages — Pökoot (Suk)"
          },
          {
            "target": "oɣë̀ë̀ŋ / òdë̀ë̀ŋ (oghien / odeng')",
            "source": "Two",
            "pronunciation": "o-ɣeeng / o-deeng",
            "hint": "Beech (1911, pp. 66–68) & Wikipedia Nilotic_languages — Pökoot (Suk)"
          },
          {
            "target": "sä́mä́k (somok)",
            "source": "Three",
            "pronunciation": "sa-mak",
            "hint": "Beech (1911, pp. 66–68) & Wikipedia Nilotic_languages — Pökoot (Suk)"
          },
          {
            "target": "àŋwân (ang'wan)",
            "source": "Four",
            "pronunciation": "angwan",
            "hint": "Beech (1911, pp. 66–68) & Wikipedia Nilotic_languages — Pökoot (Suk)"
          },
          {
            "target": "múut (muut)",
            "source": "Five",
            "pronunciation": "muut",
            "hint": "Beech (1911, pp. 66–68) & Wikipedia Nilotic_languages — Pökoot (Suk)"
          },
          {
            "target": "múut ŋɡɔ́ àkɔ́ɔ́ŋɔ̀ (mut ngô okongo, 5 + 1)",
            "source": "Six",
            "pronunciation": "muut ngɡo a-koongo",
            "hint": "Beech (1911, pp. 66–68) — Quinary finger-counting system"
          },
          {
            "target": "múut ŋɡɔ́ òdë̀ë̀ŋ (mut ngô oghien, 5 + 2)",
            "source": "Seven",
            "pronunciation": "muut ngɡo o-deeng",
            "hint": "Beech (1911, pp. 66–68) — Pökoot (Suk)"
          },
          {
            "target": "múut ŋɡɔ́ sä́mä́k (mut ngô somok, 5 + 3)",
            "source": "Eight",
            "pronunciation": "muut ngɡo sa-mak",
            "hint": "Beech (1911, pp. 66–68) — Pökoot (Suk)"
          },
          {
            "target": "múut ŋɡɔ́ àŋwân (mut ngô angwan, 5 + 4)",
            "source": "Nine",
            "pronunciation": "muut ngɡo angwan",
            "hint": "Beech (1911, pp. 66–68) — Pökoot (Suk)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"àkɔ́ɔ́ŋkɔ̀ (akong'o / okongo)\" in Pokot?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
            ],
            "hint": "Beech (1911, pp. 66–68) & Wikipedia Nilotic_languages — Pökoot (Suk)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"oɣë̀ë̀ŋ / òdë̀ë̀ŋ (oghien / odeng')\" in Pokot?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
              "One"
            ],
            "hint": "Beech (1911, pp. 66–68) & Wikipedia Nilotic_languages — Pökoot (Suk)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sä́mä́k (somok)\" in Pokot?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Beech (1911, pp. 66–68) & Wikipedia Nilotic_languages — Pökoot (Suk)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Pokot?",
            "correctAnswer": "sä́mä́k (somok)",
            "options": [
              "sä́mä́k (somok)",
              "àkɔ́ɔ́ŋkɔ̀ (akong'o / okongo)",
              "oɣë̀ë̀ŋ / òdë̀ë̀ŋ (oghien / odeng')",
              "àŋwân (ang'wan)"
            ],
            "hint": "sa-mak"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Pokot?",
            "correctAnswer": "àŋwân (ang'wan)",
            "options": [
              "àkɔ́ɔ́ŋkɔ̀ (akong'o / okongo)",
              "oɣë̀ë̀ŋ / òdë̀ë̀ŋ (oghien / odeng')",
              "sä́mä́k (somok)",
              "àŋwân (ang'wan)"
            ],
            "hint": "ang-wan"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokot expression with its English meaning:",
            "correctAnswer": "àkɔ́ɔ́ŋkɔ̀ (akong'o / okongo): One",
            "pairs": [
              {
                "left": "àkɔ́ɔ́ŋkɔ̀ (akong'o / okongo)",
                "right": "One"
              },
              {
                "left": "oɣë̀ë̀ŋ / òdë̀ë̀ŋ (oghien / odeng')",
                "right": "Two"
              },
              {
                "left": "sä́mä́k (somok)",
                "right": "Three"
              },
              {
                "left": "àŋwân (ang'wan)",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot term for \"Five\": ___",
            "correctAnswer": "múut (muut)",
            "options": [
              "àkɔ́ɔ́ŋkɔ̀ (akong'o / okongo)",
              "oɣë̀ë̀ŋ / òdë̀ë̀ŋ (oghien / odeng')",
              "sä́mä́k (somok)",
              "múut (muut)"
            ],
            "hint": "Beech (1911, pp. 66–68) & Wikipedia Nilotic_languages — Pökoot (Suk)"
          }
        ]
      },
      {
        "id": "pokot-numbers-measures-trade-measures-3",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "támàn (taman)",
            "source": "Ten",
            "pronunciation": "ta-man",
            "hint": "Beech (1911, pp. 66–68) — Pökoot (Suk)"
          },
          {
            "target": "tiptem / taman ut-oghieñg",
            "source": "Twenty (One complete man: all fingers and toes)",
            "pronunciation": "tiptem / ta-man ut-oghiengg",
            "hint": "Mervyn W. H. Beech (1911, p. 67) — Suk cardinals"
          },
          {
            "target": "pokol",
            "source": "One hundred",
            "pronunciation": "po-kol",
            "hint": "Beech (1911, pp. 66–68) — Pökoot (Suk)"
          },
          {
            "target": "Me-t-ei-nye oror oghieñg",
            "source": "It will not be as much as two months",
            "pronunciation": "me-t-ei-nye o-ror oghiengg",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Ocha karam ma-mi-nye",
            "source": "I am the best of all",
            "pronunciation": "ocha ka-ram ma-mi-nye",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Tukul-cha-bat!",
            "source": "That's all!",
            "pronunciation": "tukul-cha-bat",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Me-t-ei-nye taman",
            "source": "They don't amount to ten",
            "pronunciation": "me-t-ei-nye ta-man",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Mbe-ne se-me-ñgalan ñgala chuno pa-tagh?",
            "source": "Why didn't you say so at first?",
            "pronunciation": "mbe-ne se-me-nggalan ngga-la chu-no pa-tagh",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "tukul, tokol, lopai. Vide p. 74",
            "source": "All",
            "pronunciation": "tu-kul to-kol lo-pai",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          }
        ],
        "sentences": [
          {
            "target": "Me-t-ei-nye oror oghieñg",
            "source": "It will not be as much as two months"
          },
          {
            "target": "Ocha karam ma-mi-nye",
            "source": "I am the best of all"
          },
          {
            "target": "Me-t-ei-nye taman",
            "source": "They don't amount to ten"
          },
          {
            "target": "Mbe-ne se-me-ñgalan ñgala chuno pa-tagh?",
            "source": "Why didn't you say so at first?"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"támàn (taman)\" in Pokot?",
            "correctAnswer": "Ten",
            "options": [
              "Twenty (One complete man: all fingers and toes)",
              "One hundred",
              "It will not be as much as two months",
              "Ten"
            ],
            "hint": "Beech (1911, pp. 66–68) — Pökoot (Suk)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"tiptem / taman ut-oghieñg\" in Pokot?",
            "correctAnswer": "Twenty (One complete man: all fingers and toes)",
            "options": [
              "One hundred",
              "It will not be as much as two months",
              "Twenty (One complete man: all fingers and toes)",
              "Ten"
            ],
            "hint": "Mervyn W. H. Beech (1911, p. 67) — Suk cardinals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"pokol\" in Pokot?",
            "correctAnswer": "One hundred",
            "options": [
              "It will not be as much as two months",
              "One hundred",
              "Ten",
              "Twenty (One complete man: all fingers and toes)"
            ],
            "hint": "Beech (1911, pp. 66–68) — Pökoot (Suk)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"One hundred\" in Pokot?",
            "correctAnswer": "pokol",
            "options": [
              "pokol",
              "támàn (taman)",
              "tiptem / taman ut-oghieñg",
              "Me-t-ei-nye oror oghieñg"
            ],
            "hint": "po-kol"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"It will not be as much as two months\" in Pokot?",
            "correctAnswer": "Me-t-ei-nye oror oghieñg",
            "options": [
              "támàn (taman)",
              "tiptem / taman ut-oghieñg",
              "pokol",
              "Me-t-ei-nye oror oghieñg"
            ],
            "hint": "me-t-ei-nye oror oghieñg."
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokot expression with its English meaning:",
            "correctAnswer": "támàn (taman): Ten",
            "pairs": [
              {
                "left": "támàn (taman)",
                "right": "Ten"
              },
              {
                "left": "tiptem / taman ut-oghieñg",
                "right": "Twenty (One complete man: all fingers and toes)"
              },
              {
                "left": "pokol",
                "right": "One hundred"
              },
              {
                "left": "Me-t-ei-nye oror oghieñg",
                "right": "It will not be as much as two months"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot term for \"I am the best of all\": ___",
            "correctAnswer": "Ocha karam ma-mi-nye",
            "options": [
              "támàn (taman)",
              "tiptem / taman ut-oghieñg",
              "pokol",
              "Ocha karam ma-mi-nye"
            ],
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          }
        ]
      }
    ]
  },
  {
    "id": "pokot-unit-4",
    "title": "Unit 4: Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Pokot (Pökoot) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "Tractor",
    "skills": [
      {
        "id": "pokot-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "kipketin (kh'pketin)",
            "source": "Honey",
            "pronunciation": "kipke-tin",
            "hint": "CGSpace East Pokot traditional foodways & Beech (1911)"
          },
          {
            "target": "lowiana",
            "source": "Stingless bee honey",
            "pronunciation": "lo-wia-na",
            "hint": "CGSpace East Pokot traditional foodways"
          },
          {
            "target": "che (chego)",
            "source": "Milk",
            "pronunciation": "che",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "pany",
            "source": "Meat",
            "pronunciation": "pany",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "omisyö / matai",
            "source": "Food / Millet",
            "pronunciation": "o-misyo / ma-tai",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "nyaril, pl. nyaril-ech",
            "source": "Raw"
          },
          {
            "target": "Pogh-po-maʻ",
            "source": "Hot water. ( Lit. Water-of-fire.)",
            "pronunciation": "pogh-po-ma'",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "mwagh, pl. mwai'-tin; (ii) mwowon (coll.)",
            "source": "Fat",
            "pronunciation": "mwagh"
          },
          {
            "target": "mwagh, pl. mwai'-tin",
            "source": "Oil",
            "pronunciation": "mwagh"
          }
        ],
        "sentences": [
          {
            "target": "kipketin — lowiana",
            "source": "Honey — Stingless bee honey"
          },
          {
            "target": "che — pany",
            "source": "Milk — Meat"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kipketin\" mean in English?",
            "correctAnswer": "Honey",
            "options": [
              "Honey",
              "Stingless bee honey",
              "Milk",
              "Meat"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Stingless bee honey\"",
            "correctAnswer": "lowiana",
            "acceptedAnswers": [
              "lowiana",
              "lowiana"
            ],
            "hint": "Starts with \"lo\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"che\"",
            "correctAnswer": "Milk",
            "acceptedAnswers": [
              "Milk",
              "Milk"
            ],
            "hint": "Review Staple Foods, Cookery & Beverages"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Staple Foods, Cookery & Beverages with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kipketin",
                "right": "Honey"
              },
              {
                "left": "lowiana",
                "right": "Stingless bee honey"
              },
              {
                "left": "che",
                "right": "Milk"
              },
              {
                "left": "pany",
                "right": "Meat"
              },
              {
                "left": "omisyö",
                "right": "Food"
              }
            ]
          }
        ]
      },
      {
        "id": "pokot-food-agriculture-crops-livestock-4",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "Rir-ei oyu omisioʻ?",
            "source": "When will food be ready?",
            "pronunciation": "rir-ei oyu o-mi-sio'",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "wild, sasur-wa, pl. sasôr",
            "source": "Banana",
            "pronunciation": "wild sasur-wa",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "ñgwan, pl. ñgwan-ech",
            "source": "Bitter ( adj. )",
            "pronunciation": "nggwan",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "Vide under Cook",
            "source": "Boil ( trans. )",
            "pronunciation": "vi-de under cook",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "mwai'-pa-cheʻ, lit. fat of milk",
            "source": "Butter",
            "pronunciation": "mwai'-pa-che' lit fat of milk",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "sĕt, pl. sĕt-on",
            "source": "Calabash, a ( for water )",
            "pronunciation": "set",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "men-wa, pl. măn",
            "source": "Castor-oil plant",
            "pronunciation": "men-wa",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "rel, pl. rel-ech",
            "source": "Clear ( of water or sky )",
            "pronunciation": "rel",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "pagh (coll.)",
            "source": "Corn ( in general )",
            "pronunciation": "pagh",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          }
        ],
        "sentences": [
          {
            "target": "Rir-ei oyu omisioʻ?",
            "source": "When will food be ready?"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Rir-ei oyu omisioʻ?\" in Pokot?",
            "correctAnswer": "When will food be ready?",
            "options": [
              "Banana",
              "Bitter ( adj. )",
              "Boil ( trans. )",
              "When will food be ready?"
            ],
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"wild, sasur-wa, pl. sasôr\" in Pokot?",
            "correctAnswer": "Banana",
            "options": [
              "Bitter ( adj. )",
              "Boil ( trans. )",
              "Banana",
              "When will food be ready?"
            ],
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ñgwan, pl. ñgwan-ech\" in Pokot?",
            "correctAnswer": "Bitter ( adj. )",
            "options": [
              "Boil ( trans. )",
              "Bitter ( adj. )",
              "When will food be ready?",
              "Banana"
            ],
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bitter ( adj. )\" in Pokot?",
            "correctAnswer": "ñgwan, pl. ñgwan-ech",
            "options": [
              "ñgwan, pl. ñgwan-ech",
              "Rir-ei oyu omisioʻ?",
              "wild, sasur-wa, pl. sasôr",
              "Vide under Cook"
            ],
            "hint": "ñgwan, pl. ñgwan-ech"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Boil ( trans. )\" in Pokot?",
            "correctAnswer": "Vide under Cook",
            "options": [
              "Rir-ei oyu omisioʻ?",
              "wild, sasur-wa, pl. sasôr",
              "ñgwan, pl. ñgwan-ech",
              "Vide under Cook"
            ],
            "hint": "vide under cook"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokot expression with its English meaning:",
            "correctAnswer": "Rir-ei oyu omisioʻ?: When will food be ready?",
            "pairs": [
              {
                "left": "Rir-ei oyu omisioʻ?",
                "right": "When will food be ready?"
              },
              {
                "left": "wild, sasur-wa, pl. sasôr",
                "right": "Banana"
              },
              {
                "left": "ñgwan, pl. ñgwan-ech",
                "right": "Bitter ( adj. )"
              },
              {
                "left": "Vide under Cook",
                "right": "Boil ( trans. )"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot term for \"Butter\": ___",
            "correctAnswer": "mwai'-pa-cheʻ, lit. fat of milk",
            "options": [
              "Rir-ei oyu omisioʻ?",
              "wild, sasur-wa, pl. sasôr",
              "ñgwan, pl. ñgwan-ech",
              "mwai'-pa-cheʻ, lit. fat of milk"
            ],
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          }
        ]
      }
    ]
  },
  {
    "id": "pokot-unit-5",
    "title": "Unit 5: Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Pokot (Pökoot) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "PawPrint",
    "skills": [
      {
        "id": "pokot-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "peet (assis)",
            "source": "Day",
            "pronunciation": "peet",
            "hint": "Beech 1911 & Johnston 1902 Suk"
          },
          {
            "target": "yech (kwegh)",
            "source": "Night",
            "pronunciation": "yech",
            "hint": "Beech 1911 & Johnston 1902 Suk"
          },
          {
            "target": "kokel (pl. kokelik)",
            "source": "Star",
            "pronunciation": "ko-kel",
            "hint": "Beech 1911 & Johnston 1902 Suk"
          },
          {
            "target": "pʉːɣ (pogh / poy)",
            "source": "Water",
            "pronunciation": "pʉɣ",
            "hint": "Beech (1911) & van Otterloo (1979) East Pokot"
          },
          {
            "target": "keːt (ket)",
            "source": "Tree / Wood",
            "pronunciation": "ket",
            "hint": "Beech (1911) & van Otterloo (1979) East Pokot"
          },
          {
            "target": "asis (asista)",
            "source": "Sun",
            "pronunciation": "a-sis",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "araw (arawet)",
            "source": "Moon / Month (Son of Torôrut)",
            "pronunciation": "a-raw",
            "hint": "Beech (1911, p. 19) — The Suk: Their Language and Folklore"
          },
          {
            "target": "Ilat (Rain/Thunder) & Kokel (Stars)",
            "source": "Rain / Lightning-Spirit (Son of Torôrut) & Stars (Children of Torôrut)",
            "pronunciation": "i-lat & ko-kel",
            "hint": "Beech (1911, p. 19) — Suk Cosmology"
          },
          {
            "target": "hŏr, pl. hŏr-en",
            "source": "Ash",
            "pronunciation": "hor"
          }
        ],
        "sentences": [
          {
            "target": "peet — yech",
            "source": "Day — Night"
          },
          {
            "target": "kokel — pʉːɣ",
            "source": "Star — Water"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"peet\" mean in English?",
            "correctAnswer": "Day",
            "options": [
              "Day",
              "Night",
              "Star",
              "Water"
            ],
            "hint": "Core vocabulary in Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Night\"",
            "correctAnswer": "yech",
            "acceptedAnswers": [
              "yech (kwegh)",
              "yech"
            ],
            "hint": "Starts with \"ye\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kokel\"",
            "correctAnswer": "Star",
            "acceptedAnswers": [
              "Star",
              "Star"
            ],
            "hint": "Review Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Sky, Weather, Rivers & Landforms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "peet",
                "right": "Day"
              },
              {
                "left": "yech",
                "right": "Night"
              },
              {
                "left": "kokel",
                "right": "Star"
              },
              {
                "left": "pʉːɣ",
                "right": "Water"
              },
              {
                "left": "keːt",
                "right": "Tree"
              }
            ]
          }
        ]
      },
      {
        "id": "pokot-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "mat (maat)",
            "source": "Fire",
            "pronunciation": "mat",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "rop (ropta)",
            "source": "Rain",
            "pronunciation": "rop",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "tul (tulwet)",
            "source": "Mountain / Hill",
            "pronunciation": "tul",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "lalan (lalang')",
            "source": "River / Stream",
            "pronunciation": "la-lan",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "kogh (koghet)",
            "source": "Stone / Rock",
            "pronunciation": "kogh",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "kor (koret)",
            "source": "Earth / Country",
            "pronunciation": "kor",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "sus (suswek)",
            "source": "Grass",
            "pronunciation": "sus",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "lalyan (ainet)",
            "source": "River",
            "pronunciation": "lalyan",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "Kerio wal-nya-pôro",
            "source": "The lower reaches of the Kerio river",
            "pronunciation": "ke-rio wal-nya-poro",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          }
        ],
        "sentences": [
          {
            "target": "Kerio wal-nya-pôro",
            "source": "The lower reaches of the Kerio river"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mat (maat)\" in Pokot?",
            "correctAnswer": "Fire",
            "options": [
              "Rain",
              "Mountain / Hill",
              "River / Stream",
              "Fire"
            ],
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"rop (ropta)\" in Pokot?",
            "correctAnswer": "Rain",
            "options": [
              "Mountain / Hill",
              "River / Stream",
              "Rain",
              "Fire"
            ],
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"tul (tulwet)\" in Pokot?",
            "correctAnswer": "Mountain / Hill",
            "options": [
              "River / Stream",
              "Mountain / Hill",
              "Fire",
              "Rain"
            ],
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mountain / Hill\" in Pokot?",
            "correctAnswer": "tul (tulwet)",
            "options": [
              "tul (tulwet)",
              "mat (maat)",
              "rop (ropta)",
              "lalan (lalang')"
            ],
            "hint": "tul-wet"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"River / Stream\" in Pokot?",
            "correctAnswer": "lalan (lalang')",
            "options": [
              "mat (maat)",
              "rop (ropta)",
              "tul (tulwet)",
              "lalan (lalang')"
            ],
            "hint": "la-lan"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokot expression with its English meaning:",
            "correctAnswer": "mat (maat): Fire",
            "pairs": [
              {
                "left": "mat (maat)",
                "right": "Fire"
              },
              {
                "left": "rop (ropta)",
                "right": "Rain"
              },
              {
                "left": "tul (tulwet)",
                "right": "Mountain / Hill"
              },
              {
                "left": "lalan (lalang')",
                "right": "River / Stream"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot term for \"Stone / Rock\": ___",
            "correctAnswer": "kogh (koghet)",
            "options": [
              "mat (maat)",
              "rop (ropta)",
              "tul (tulwet)",
              "kogh (koghet)"
            ],
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          }
        ]
      }
    ]
  },
  {
    "id": "pokot-unit-6",
    "title": "Unit 6: The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Pokot (Pökoot) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "User",
    "skills": [
      {
        "id": "pokot-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "koːŋ (kong', pl. konyen)",
            "source": "Eye",
            "pronunciation": "kong",
            "hint": "Beech (1911, pp. 58–62, 99–149) & van Otterloo (1979)"
          },
          {
            "target": "yiːt (yit, pl. yitwen)",
            "source": "Ear",
            "pronunciation": "yit",
            "hint": "Beech (1911, pp. 58–62, 99–149) & van Otterloo (1979)"
          },
          {
            "target": "sa̱r̃ (sar, pl. sarin)",
            "source": "Nose",
            "pronunciation": "sar",
            "hint": "Beech (1911, pp. 58–62, 99–149) & van Otterloo (1979)"
          },
          {
            "target": "ke̱ːla̱t (kelat, pl. kelek)",
            "source": "Tooth",
            "pronunciation": "ke-lat",
            "hint": "Beech (1911, pp. 58–62, 99–149) & van Otterloo (1979)"
          },
          {
            "target": "ŋa̱lya̱p (ng'alyap)",
            "source": "Tongue",
            "pronunciation": "ngalyap",
            "hint": "Beech (1911, pp. 58–62, 99–149) & van Otterloo (1979)"
          },
          {
            "target": "ku̱ːt (kut, pl. kutin)",
            "source": "Mouth",
            "pronunciation": "kut",
            "hint": "Beech (1911, pp. 58–62, 99–149) & van Otterloo (1979)"
          },
          {
            "target": "kisʉn (kisun)",
            "source": "Blood",
            "pronunciation": "kisʉn",
            "hint": "Beech (1911) & van Otterloo (1979)"
          },
          {
            "target": "kaːwaʔ (kawa, pl. kawek)",
            "source": "Bone",
            "pronunciation": "ka-waʔ",
            "hint": "Beech (1911) & van Otterloo (1979)"
          },
          {
            "target": "met (metit, pl. metin)",
            "source": "Head",
            "pronunciation": "met",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"koːŋ (kong', pl. konyen)\" in Pokot?",
            "correctAnswer": "Eye",
            "options": [
              "Ear",
              "Nose",
              "Tooth",
              "Eye"
            ],
            "hint": "Beech (1911, pp. 58–62, 99–149) & van Otterloo (1979)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"yiːt (yit, pl. yitwen)\" in Pokot?",
            "correctAnswer": "Ear",
            "options": [
              "Nose",
              "Tooth",
              "Ear",
              "Eye"
            ],
            "hint": "Beech (1911, pp. 58–62, 99–149) & van Otterloo (1979)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sa̱r̃ (sar, pl. sarin)\" in Pokot?",
            "correctAnswer": "Nose",
            "options": [
              "Tooth",
              "Nose",
              "Eye",
              "Ear"
            ],
            "hint": "Beech (1911, pp. 58–62, 99–149) & van Otterloo (1979)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Pokot?",
            "correctAnswer": "sa̱r̃ (sar, pl. sarin)",
            "options": [
              "sa̱r̃ (sar, pl. sarin)",
              "koːŋ (kong', pl. konyen)",
              "yiːt (yit, pl. yitwen)",
              "ke̱ːla̱t (kelat, pl. kelek)"
            ],
            "hint": "sar"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tooth\" in Pokot?",
            "correctAnswer": "ke̱ːla̱t (kelat, pl. kelek)",
            "options": [
              "koːŋ (kong', pl. konyen)",
              "yiːt (yit, pl. yitwen)",
              "sa̱r̃ (sar, pl. sarin)",
              "ke̱ːla̱t (kelat, pl. kelek)"
            ],
            "hint": "kee-lat"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokot expression with its English meaning:",
            "correctAnswer": "koːŋ (kong', pl. konyen): Eye",
            "pairs": [
              {
                "left": "koːŋ (kong', pl. konyen)",
                "right": "Eye"
              },
              {
                "left": "yiːt (yit, pl. yitwen)",
                "right": "Ear"
              },
              {
                "left": "sa̱r̃ (sar, pl. sarin)",
                "right": "Nose"
              },
              {
                "left": "ke̱ːla̱t (kelat, pl. kelek)",
                "right": "Tooth"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot term for \"Tongue\": ___",
            "correctAnswer": "ŋa̱lya̱p (ng'alyap)",
            "options": [
              "koːŋ (kong', pl. konyen)",
              "yiːt (yit, pl. yitwen)",
              "sa̱r̃ (sar, pl. sarin)",
              "ŋa̱lya̱p (ng'alyap)"
            ],
            "hint": "Beech (1911, pp. 58–62, 99–149) & van Otterloo (1979)"
          }
        ]
      },
      {
        "id": "pokot-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "egh (eghit, pl. eghin)",
            "source": "Hand / Arm",
            "pronunciation": "egh",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "kel (kelyen)",
            "source": "Leg / Foot",
            "pronunciation": "kel",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "mo (moot)",
            "source": "Stomach / Belly",
            "pronunciation": "mo",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "Per-ana' met",
            "source": "My head aches",
            "pronunciation": "per-ana' met",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Atô-ke-sop kel",
            "source": "If my leg has got well",
            "pronunciation": "ato-ke-sop kel",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Ka-kowir-inyi kel kogh?",
            "source": "Did you hit your foot against a stone?",
            "pronunciation": "ka-kowir-inyi kel kogh",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "kôwô-monion, pl. kô-monion, koiyo-monion",
            "source": "Ankle(-bone)",
            "pronunciation": "kowo-monion",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "hegh, pl. hegh-w-un [gh almost surd]",
            "source": "Arm",
            "pronunciation": "hegh",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          },
          {
            "target": "korôt, pl. korôt-ai",
            "source": "Back ( of a human being or animal )",
            "pronunciation": "ko-rot",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)"
          }
        ],
        "sentences": [
          {
            "target": "Per-ana' met",
            "source": "My head aches"
          },
          {
            "target": "Atô-ke-sop kel",
            "source": "If my leg has got well"
          },
          {
            "target": "Ka-kowir-inyi kel kogh?",
            "source": "Did you hit your foot against a stone?"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"egh (eghit, pl. eghin)\" in Pokot?",
            "correctAnswer": "Hand / Arm",
            "options": [
              "Leg / Foot",
              "Stomach / Belly",
              "My head aches",
              "Hand / Arm"
            ],
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kel (kelyen)\" in Pokot?",
            "correctAnswer": "Leg / Foot",
            "options": [
              "Stomach / Belly",
              "My head aches",
              "Leg / Foot",
              "Hand / Arm"
            ],
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mo (moot)\" in Pokot?",
            "correctAnswer": "Stomach / Belly",
            "options": [
              "My head aches",
              "Stomach / Belly",
              "Hand / Arm",
              "Leg / Foot"
            ],
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Stomach / Belly\" in Pokot?",
            "correctAnswer": "mo (moot)",
            "options": [
              "mo (moot)",
              "egh (eghit, pl. eghin)",
              "kel (kelyen)",
              "Per-ana' met"
            ],
            "hint": "mo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"My head aches\" in Pokot?",
            "correctAnswer": "Per-ana' met",
            "options": [
              "egh (eghit, pl. eghin)",
              "kel (kelyen)",
              "mo (moot)",
              "Per-ana' met"
            ],
            "hint": "per-ana' met."
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokot expression with its English meaning:",
            "correctAnswer": "egh (eghit, pl. eghin): Hand / Arm",
            "pairs": [
              {
                "left": "egh (eghit, pl. eghin)",
                "right": "Hand / Arm"
              },
              {
                "left": "kel (kelyen)",
                "right": "Leg / Foot"
              },
              {
                "left": "mo (moot)",
                "right": "Stomach / Belly"
              },
              {
                "left": "Per-ana' met",
                "right": "My head aches"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot term for \"If my leg has got well\": ___",
            "correctAnswer": "Atô-ke-sop kel",
            "options": [
              "egh (eghit, pl. eghin)",
              "kel (kelyen)",
              "mo (moot)",
              "Atô-ke-sop kel"
            ],
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          }
        ]
      }
    ]
  },
  {
    "id": "pokot-unit-7",
    "title": "Unit 7: Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Pokot (Pökoot) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "pokot-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "keam",
            "source": "Eat",
            "pronunciation": "keam",
            "hint": "Beech (1911) & van Otterloo (1979) East Pokot"
          },
          {
            "target": "keigh (igh)",
            "source": "Drink",
            "pronunciation": "keigh",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "lima (kelim)",
            "source": "Hear / Understand",
            "pronunciation": "li-ma",
            "hint": "Juxon Barton (1921) & Beech (1911) — Suk/Pokot"
          },
          {
            "target": "kewe (we)",
            "source": "Go",
            "pronunciation": "ke-we",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "kechö (chö)",
            "source": "Come",
            "pronunciation": "kecho",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "kesor (sor)",
            "source": "See",
            "pronunciation": "ke-sor",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "keru (ru)",
            "source": "Sleep",
            "pronunciation": "ke-ru",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "keme (me)",
            "source": "Die",
            "pronunciation": "ke-me",
            "hint": "Beech (1911) — The Suk: Their Language and Folklore"
          },
          {
            "target": "ng'ala (ng'al)",
            "source": "Speak / Language",
            "pronunciation": "ng'a-la",
            "hint": "Wikipedia Pökoot_language & Beech (1911)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"keam\" in Pokot?",
            "correctAnswer": "Eat",
            "options": [
              "Drink",
              "Hear / Understand",
              "Go",
              "Eat"
            ],
            "hint": "Beech (1911) & van Otterloo (1979) East Pokot"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"lima (kelim)\" in Pokot?",
            "correctAnswer": "Hear / Understand",
            "options": [
              "Go",
              "Hear / Understand",
              "Eat",
              "Drink"
            ],
            "hint": "Juxon Barton (1921) & Beech (1911) — Suk/Pokot"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokot expression with its English meaning:",
            "correctAnswer": "keam: Eat",
            "pairs": [
              {
                "left": "keam",
                "right": "Eat"
              },
              {
                "left": "keigh (igh)",
                "right": "Drink"
              },
              {
                "left": "lima (kelim)",
                "right": "Hear / Understand"
              },
              {
                "left": "kewe (we)",
                "right": "Go"
              }
            ]
          }
        ]
      },
      {
        "id": "pokot-verbs-grammar-verbal-derivatives-7",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "kesow (sow)",
            "source": "To see",
            "pronunciation": "ke-sow",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "kelim (lim)",
            "source": "To hear",
            "pronunciation": "ke-lim",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "kesow (nget)",
            "source": "To know",
            "pronunciation": "ke-sow",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "kecham (cham)",
            "source": "To love / like",
            "pronunciation": "kecham",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "kô (kô-nech = give us)",
            "source": "To give",
            "pronunciation": "ko",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "kekwang'",
            "source": "To cook",
            "pronunciation": "kekwang'",
            "hint": "Verified comparative entry across Kenyan nilotic corpus"
          },
          {
            "target": "igh-isioʻ, pl. igh-isio-(y)ut",
            "source": "Work",
            "pronunciation": "igh-isio"
          },
          {
            "target": "piren-ei, pl. piron-sut",
            "source": "Play",
            "pronunciation": "piren-ei"
          },
          {
            "target": "păn, pl. pon-w-ai",
            "source": "Walk",
            "pronunciation": "pan"
          }
        ],
        "sentences": [
          {
            "target": "kesow — kelim",
            "source": "To see — To hear"
          },
          {
            "target": "kesow — kecham",
            "source": "To know — To love"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kesow\" mean in English?",
            "correctAnswer": "To see",
            "options": [
              "To see",
              "To hear",
              "To know",
              "To love / like"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"To hear\"",
            "correctAnswer": "kelim",
            "acceptedAnswers": [
              "kelim (lim)",
              "kelim"
            ],
            "hint": "Starts with \"ke\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kesow\"",
            "correctAnswer": "To know",
            "acceptedAnswers": [
              "To know",
              "To know"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kesow",
                "right": "To see"
              },
              {
                "left": "kelim",
                "right": "To hear"
              },
              {
                "left": "kesow",
                "right": "To know"
              },
              {
                "left": "kecham",
                "right": "To love"
              },
              {
                "left": "kô",
                "right": "To give"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pokot-unit-8",
    "title": "Unit 8: Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Pokot (Pökoot) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "Compass",
    "skills": [
      {
        "id": "pokot-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "yĕ. Introducing a fresh paragraph, kīleʻ",
            "source": "Now",
            "pronunciation": "ye intro-du-cing a fresh pa-ragraph ki-le'"
          },
          {
            "target": "asis, pl. ōsis",
            "source": "Day",
            "pronunciation": "a-sis"
          },
          {
            "target": "tôma-nye kio-meneñg",
            "source": "Soon",
            "pronunciation": "toma-nye kio-menengg"
          },
          {
            "target": "keny, kainy, pl. kainy-is",
            "source": "Time",
            "pronunciation": "keny kainy"
          },
          {
            "target": "kainy, pl. kainy-is",
            "source": "Year",
            "pronunciation": "kainy"
          },
          {
            "target": "kôrūn",
            "source": "Dawn",
            "pronunciation": "korun"
          },
          {
            "target": "asis-ei / asis-yetei / asis-ye (now: yē)",
            "source": "Today",
            "pronunciation": "ah-chehk"
          },
          {
            "target": "takwagha (= before day-break), kôrun; dawn, kiwasan",
            "source": "Early",
            "pronunciation": "takwagha"
          },
          {
            "target": "kainy-is tokol (with neg.)",
            "source": "Never",
            "pronunciation": "kainy-is tokol"
          }
        ],
        "sentences": [
          {
            "target": "yĕ. Introducing a fresh paragraph, kīleʻ — asis, pl. ōsis",
            "source": "Now — Day"
          },
          {
            "target": "tôma-nye kio-meneñg — keny, kainy, pl. kainy-is",
            "source": "Soon — Time"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"yĕ. Introducing a fresh paragraph, kīleʻ\" mean in English?",
            "correctAnswer": "Now",
            "options": [
              "Now",
              "Day",
              "Soon",
              "Time"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Day\"",
            "correctAnswer": "asis, pl. ōsis",
            "acceptedAnswers": [
              "asis, pl. ōsis",
              "asis, pl. ōsis"
            ],
            "hint": "Starts with \"as\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"tôma-nye kio-meneñg\"",
            "correctAnswer": "Soon",
            "acceptedAnswers": [
              "Soon",
              "Soon"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "yĕ. Introducing a fresh paragraph, kīleʻ",
                "right": "Now"
              },
              {
                "left": "asis, pl. ōsis",
                "right": "Day"
              },
              {
                "left": "tôma-nye kio-meneñg",
                "right": "Soon"
              },
              {
                "left": "keny, kainy, pl. kainy-is",
                "right": "Time"
              },
              {
                "left": "kainy, pl. kainy-is",
                "right": "Year"
              }
            ]
          }
        ]
      },
      {
        "id": "pokot-time-calendar-journey-navigation-8",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "osis-cha-chañg (lit. on many days)",
            "source": "Often",
            "pronunciation": "osis-cha-chang"
          },
          {
            "target": "kainy-is tokol (with neg)",
            "source": "Never",
            "pronunciation": "kainy is to-kol"
          },
          {
            "target": "ŏghaʻ",
            "source": "Night",
            "pronunciation": "ogha"
          },
          {
            "target": "again and again, ñgat: ñgat-ñgat",
            "source": "Again",
            "pronunciation": "a-gain and a-gain nggat nggat-nggat"
          },
          {
            "target": "ñgat",
            "source": "Still",
            "pronunciation": "ngat"
          },
          {
            "target": "suffix -yăʻ; o-wet-an (-ei)-yăʻ, I will come afterwards",
            "source": "After",
            "pronunciation": "suffix -ya"
          },
          {
            "target": "peñgat",
            "source": "Season",
            "pronunciation": "peng-at"
          },
          {
            "target": "mĕnūn",
            "source": "Evening",
            "pronunciation": "me-nun"
          },
          {
            "target": "kiwasan",
            "source": "Morning",
            "pronunciation": "ki-wa-san"
          }
        ],
        "sentences": [
          {
            "target": "osis-cha-chañg — kainy-is tokol",
            "source": "Often — Never"
          },
          {
            "target": "ŏghaʻ — again and again, ñgat: ñgat-ñgat",
            "source": "Night — Again"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"osis-cha-chañg\" mean in English?",
            "correctAnswer": "Often",
            "options": [
              "Often",
              "Never",
              "Night",
              "Again"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Never\"",
            "correctAnswer": "kainy-is tokol",
            "acceptedAnswers": [
              "kainy-is tokol (with neg)",
              "kainy-is tokol"
            ],
            "hint": "Starts with \"ka\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ŏghaʻ\"",
            "correctAnswer": "Night",
            "acceptedAnswers": [
              "Night",
              "Night"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "osis-cha-chañg",
                "right": "Often"
              },
              {
                "left": "kainy-is tokol",
                "right": "Never"
              },
              {
                "left": "ŏghaʻ",
                "right": "Night"
              },
              {
                "left": "again and again, ñgat: ñgat-ñgat",
                "right": "Again"
              },
              {
                "left": "ñgat",
                "right": "Still"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pokot-unit-9",
    "title": "Unit 9: Conversational Phrases, Idioms & Daily Dialogue",
    "description": "Master conversational phrases, idioms & daily dialogue in Pokot (Pökoot) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "MessageCircle",
    "skills": [
      {
        "id": "pokot-phrases-idioms-everyday-dialogue-9",
        "title": "Everyday Conversational Phrases & Questions",
        "icon": "CheckCircle2",
        "description": "Practice authentic questions, answers, and idiomatic expressions from historical phrasebooks.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "Tiangoi!",
            "source": "Riddle challenge formula ('A riddle!')",
            "pronunciation": "tiangoi",
            "hint": "Mervyn W. H. Beech (1911, pp. 44–46) — 18 Suk Riddles"
          },
          {
            "target": "amumūr, kedoñgô, & tum (initiation ceremony)",
            "source": "Traditional Suk dances",
            "pronunciation": "a-mu-mur ke-donggo & tum",
            "hint": "Mervyn W. H. Beech (1911, pp. 21–22)"
          },
          {
            "target": "kokwa",
            "source": "Village Council of Elders",
            "pronunciation": "kokwa",
            "hint": "Beech 1911 p. 22 Suk governance"
          },
          {
            "target": "Torôrut",
            "source": "Supreme Sky Deity",
            "pronunciation": "to-ro-rut",
            "hint": "Beech 1911 p. 19 Suk religion"
          },
          {
            "target": "Ilat",
            "source": "Rain Spirit",
            "pronunciation": "i-lat",
            "hint": "Beech 1911 p. 19 ('son/servant of Torôrut who carries water')"
          },
          {
            "target": "mīs",
            "source": "Peace",
            "pronunciation": "mis"
          },
          {
            "target": "kō-rôt-on! Ans. i-rôt-enyi!",
            "source": "Goodbye!",
            "pronunciation": "ko-rot-on ans i-rot-enyi"
          },
          {
            "target": "Sĕra! / Sĕre! (verb: o-soiyen-an) / Kanyul / Kongoi",
            "source": "Thank you",
            "pronunciation": "sera"
          },
          {
            "target": "r. takwes, pr. o-tokwes-an, -ei, p.p. ka-takwes-an",
            "source": "Greet, to",
            "pronunciation": "takwes"
          }
        ],
        "sentences": [
          {
            "target": "Tiangoi! — amumūr, kedoñgô, & tum",
            "source": "Riddle challenge formula — Traditional Suk dances"
          },
          {
            "target": "kokwa — Torôrut",
            "source": "Village Council of Elders — Supreme Sky Deity"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Tiangoi!\" mean in English?",
            "correctAnswer": "Riddle challenge formula ('A riddle!')",
            "options": [
              "Riddle challenge formula ('A riddle!')",
              "Traditional Suk dances",
              "Village Council of Elders",
              "Supreme Sky Deity"
            ],
            "hint": "Core vocabulary in Everyday Conversational Phrases & Questions"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Traditional Suk dances\"",
            "correctAnswer": "amumūr, kedoñgô, & tum",
            "acceptedAnswers": [
              "amumūr, kedoñgô, & tum (initiation ceremony)",
              "amumūr, kedoñgô, & tum"
            ],
            "hint": "Starts with \"am\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kokwa\"",
            "correctAnswer": "Village Council of Elders",
            "acceptedAnswers": [
              "Village Council of Elders",
              "Village Council of Elders"
            ],
            "hint": "Review Everyday Conversational Phrases & Questions"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Everyday Conversational Phrases & Questions with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Tiangoi!",
                "right": "Riddle challenge formula"
              },
              {
                "left": "amumūr, kedoñgô, & tum",
                "right": "Traditional Suk dances"
              },
              {
                "left": "kokwa",
                "right": "Village Council of Elders"
              },
              {
                "left": "Torôrut",
                "right": "Supreme Sky Deity"
              },
              {
                "left": "Ilat",
                "right": "Rain Spirit"
              }
            ]
          }
        ]
      },
      {
        "id": "pokot-phrases-idioms-courtesy-discourse-9",
        "title": "Hospitality, Requests & Social Discourse",
        "icon": "Handshake",
        "description": "Converse naturally in home, village, market, and travel settings.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "longet (pl. longok)",
            "source": "Shield",
            "pronunciation": "longet",
            "hint": "Beech 1911 & Johnston 1902 Suk"
          },
          {
            "target": "kwang (pl. kwangik)",
            "source": "Bow",
            "pronunciation": "kwang",
            "hint": "Beech 1911 & Johnston 1902 Suk"
          },
          {
            "target": "koto (pl. kotok)",
            "source": "Arrow",
            "pronunciation": "ko-to",
            "hint": "Beech 1911 & Johnston 1902 Suk"
          },
          {
            "target": "ng'echer",
            "source": "Headrest / Neck-stool",
            "pronunciation": "ng'echer",
            "hint": "Beech 1911 pastoral headrest"
          },
          {
            "target": "meril",
            "source": "Leopard",
            "pronunciation": "me-ril",
            "hint": "Beech 1911 & Johnston 1902 Suk"
          },
          {
            "target": "kipsang'an",
            "source": "Rhinoceros",
            "pronunciation": "kipsang'an",
            "hint": "Beech 1911 Suk fauna"
          },
          {
            "target": "tompolo",
            "source": "Camel",
            "pronunciation": "tompo-lo",
            "hint": "Beech 1911 Suk fauna"
          },
          {
            "target": "moroi",
            "source": "Snake",
            "pronunciation": "mo-roi",
            "hint": "Beech 1911 & Johnston 1902 Suk"
          },
          {
            "target": "r. soiyen, pr. o-soiyen-an, p.p. kô-soiyen-an",
            "source": "Thank, to",
            "pronunciation": "soi-yen"
          }
        ],
        "sentences": [
          {
            "target": "longet — kwang",
            "source": "Shield — Bow"
          },
          {
            "target": "koto — ng'echer",
            "source": "Arrow — Headrest"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"longet\" mean in English?",
            "correctAnswer": "Shield",
            "options": [
              "Shield",
              "Bow",
              "Arrow",
              "Headrest / Neck-stool"
            ],
            "hint": "Core vocabulary in Hospitality, Requests & Social Discourse"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Bow\"",
            "correctAnswer": "kwang",
            "acceptedAnswers": [
              "kwang (pl. kwangik)",
              "kwang"
            ],
            "hint": "Starts with \"kw\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"koto\"",
            "correctAnswer": "Arrow",
            "acceptedAnswers": [
              "Arrow",
              "Arrow"
            ],
            "hint": "Review Hospitality, Requests & Social Discourse"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Hospitality, Requests & Social Discourse with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "longet",
                "right": "Shield"
              },
              {
                "left": "kwang",
                "right": "Bow"
              },
              {
                "left": "koto",
                "right": "Arrow"
              },
              {
                "left": "ng'echer",
                "right": "Headrest"
              },
              {
                "left": "meril",
                "right": "Leopard"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pokot-unit-10",
    "title": "Unit 10: Classical Proverbs, Riddles & Ethnographic Heritage",
    "description": "Master classical proverbs, riddles & ethnographic heritage in Pokot (Pökoot) built directly from Sir Harry Johnston (1902), Hon.",
    "icon": "Globe",
    "skills": [
      {
        "id": "pokot-oral-wisdom-literature-proverbs-riddles-10",
        "title": "Traditional Proverbs, Riddles & Aphorisms",
        "icon": "Award",
        "description": "Study verbatim oral wisdom, riddles, and moral aphorisms from the historical collections.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "I-lend-ei-ne? / I-lend-enyi-ne?",
            "source": "What do you say?",
            "pronunciation": "i-lend-ei-ne / i-lend-enyi-ne",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Ka-len-j-i nyi ne?",
            "source": "What did he say to you?",
            "pronunciation": "ka-len-j-i nyi ne",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Tiangoi! — Tia! Nyelnyel ma-ke-lany. — Sirim-nyon.",
            "source": "Riddle (Tiangoi! — Tia!): What is the unstable thing (which is strong) so-it-may-not-be-climbed? — Answer: A chain (Sirim-nyon).",
            "hint": "Classical Pökoot riddle #1 recorded verbatim by Mervyn W. H. Beech (1911, p. 43), opened with the traditional challenge \"Tiangoi!\" and response \"Tia!\" (with \"Donguch!\" if guessed wrong)."
          },
          {
            "target": "Tiangoi! — Tia! O-wund-oi-a' soghoʻ. — Tŭl.",
            "source": "Riddle: When may I be said to be washing myself in a cup made of a goat’s horn? — Answer: A white-ant’s hill (Tŭl, when reaching inside a hollow termite mound to collect piyapai termites).",
            "hint": "Recorded verbatim by Mervyn W. H. Beech (1911, pp. 43–44, Riddle #2), comparing a hollow ten-foot termite mound to an inverted drinking-horn."
          },
          {
            "target": "Tiangoi! — Tia! Rel-e' ti'-chu lopai pirir kirokit. — Kelat ngô ñgaliep.",
            "source": "Riddle: White are all my cows, red is the bull. — Answer: The teeth and the tongue (Kelat ngô ñgaliep).",
            "hint": "Pastoral Pökoot riddle recorded verbatim by Mervyn W. H. Beech (1911, p. 44, Riddle #3)."
          },
          {
            "target": "Tiangoi! — Tia! Ko-choit-a' sirim-nyon kowoʻ kiau. — Ôr ny'o-wet-ei.",
            "source": "Riddle: I threw away a chain and it went far into the open plain. — Answer: The winding road which I shall take (Ôr ny’o-wet-ei).",
            "hint": "Recorded verbatim by Mervyn W. H. Beech (1911, p. 44, Riddle #5), comparing a winding path across the plain to the curves of a thrown iron chain."
          },
          {
            "target": "Tiangoi! — Tia! Ka-rat kwoañg. — Kuntopal.",
            "source": "Riddle: He has strung his bow. — Answer: The rainbow (Kuntopal).",
            "hint": "Recorded verbatim by Mervyn W. H. Beech (1911, p. 44, Riddle #6)."
          },
          {
            "target": "Tiangoi! — Tia! Ki-meriensi-oʻ. — Nekergh-is.",
            "source": "Riddle: They stood in a threatening attitude (facing one another without fighting). — Answer: The three cooking-pot hearthstones (Nekergh-is).",
            "hint": "Recorded verbatim by Mervyn W. H. Beech (1911, p. 44, Riddle #9): the three hearthstones face one another in a triangle to support the cooking-pot together."
          },
          {
            "target": "Tiangoi! — Tia! K-o-p-a' set-a-pogh ka-ma-iyit-an. — Krīsioʻ.",
            "source": "Riddle: I carried a jar of water and did not spill it. — Answer: An udder (Krīsioʻ).",
            "hint": "Pastoral riddle recorded verbatim by Mervyn W. H. Beech (1911, p. 45, Riddle #12)."
          }
        ],
        "sentences": [
          {
            "target": "I-lend-ei-ne? — Ka-len-j-i nyi ne?",
            "source": "What do you say? — What did he say to you?"
          },
          {
            "target": "Tiangoi! — Tia! Nyelnyel ma-ke-lany. — Sirim-nyon. — Tiangoi! — Tia! O-wund-oi-a' soghoʻ. — Tŭl.",
            "source": "Riddle: What is the unstable thing so-it-may-not-be-climbed? — Answer: A chain. — Riddle: When may I be said to be washing myself in a cup made of a goat’s horn? — Answer: A white-ant’s hill."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"I-lend-ei-ne?\" mean in English?",
            "correctAnswer": "What do you say?",
            "options": [
              "What do you say?",
              "What did he say to you?",
              "Riddle (Tiangoi! — Tia!): What is the unstable thing (which is strong) so-it-may-not-be-climbed? — Answer: A chain (Sirim-nyon).",
              "Riddle: When may I be said to be washing myself in a cup made of a goat’s horn? — Answer: A white-ant’s hill (Tŭl, when reaching inside a hollow termite mound to collect piyapai termites)."
            ],
            "hint": "Core vocabulary in Traditional Proverbs, Riddles & Aphorisms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"What did he say to you?\"",
            "correctAnswer": "Ka-len-j-i nyi ne?",
            "acceptedAnswers": [
              "Ka-len-j-i nyi ne?",
              "Ka-len-j-i nyi ne?"
            ],
            "hint": "Starts with \"Ka\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Tiangoi! — Tia! Nyelnyel ma-ke-lany. — Sirim-nyon.\"",
            "correctAnswer": "Riddle: What is the unstable thing so-it-may-not-be-climbed? — Answer: A chain.",
            "acceptedAnswers": [
              "Riddle (Tiangoi! — Tia!): What is the unstable thing (which is strong) so-it-may-not-be-climbed? — Answer: A chain (Sirim-nyon).",
              "Riddle: What is the unstable thing so-it-may-not-be-climbed? — Answer: A chain."
            ],
            "hint": "Review Traditional Proverbs, Riddles & Aphorisms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Traditional Proverbs, Riddles & Aphorisms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "I-lend-ei-ne?",
                "right": "What do you say?"
              },
              {
                "left": "Ka-len-j-i nyi ne?",
                "right": "What did he say to you?"
              },
              {
                "left": "Tiangoi! — Tia! Nyelnyel ma-ke-lany. — Sirim-nyon.",
                "right": "Riddle: What is the unstable thing so-it-may-not-be-climbed? — Answer: A chain."
              },
              {
                "left": "Tiangoi! — Tia! O-wund-oi-a' soghoʻ. — Tŭl.",
                "right": "Riddle: When may I be said to be washing myself in a cup made of a goat’s horn? — Answer: A white-ant’s hill."
              },
              {
                "left": "Tiangoi! — Tia! Rel-e' ti'-chu lopai pirir kirokit. — Kelat ngô ñgaliep.",
                "right": "Riddle: White are all my cows, red is the bull. — Answer: The teeth and the tongue."
              }
            ]
          }
        ]
      },
      {
        "id": "pokot-oral-wisdom-literature-ethnographic-lexicon-10",
        "title": "Customary Law, Rituals & Historical Lexicon",
        "icon": "ShieldCheck",
        "description": "Master specialized cultural, legal, musical, and historical vocabulary.",
        "tips": "Every lexical entry in this module is drawn verbatim from Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Pokot (Pökoot) (Pökoot / Kimukon) in Sir Harry Johnston (1902), Hon. K. R. Dundas (1910) & Mervyn W. H. Beech (1911 The Suk: Their Language and Folklore) preserves pre-1930 phonological, grammatical, and ethnographic usage across West Pokot, Baringo.",
        "words": [
          {
            "target": "Mwô-w-anan. / Mwô-chin-anan",
            "source": "Tell me",
            "pronunciation": "mwo-w-anan / mwo-chin-anan",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Mba ki-'no kô-nonsi-a' ka-legit-itu luk",
            "source": "That is why I thought the battle was imminent",
            "pronunciation": "mba ki-'no ko-nonsi-a' ka-legit-itu luk",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Me kue a-iyit",
            "source": "It is no good me counting",
            "pronunciation": "me kue a-iyit",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Me-nget-nye ekw'-oyu",
            "source": "He doesn't know when",
            "pronunciation": "me-nget-nye ekw'-oyu",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Anda ka-sow-a' blerkwa katô-m-o-wegh-an-nye",
            "source": "Had I seen the hare I should not have been afraid",
            "pronunciation": "anda ka-sow-a' blerkwa kato-m-o-wegh-an-nye",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Atô-ke-cham",
            "source": "If he likes",
            "pronunciation": "ato-ke-cham",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Ki-au-mwun atô-k-ômisi-an",
            "source": "He came while I was eating",
            "pronunciation": "ki-au-mwun ato-k-omisi-an",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Mbe-ne k-e-gh-enyi ki 'no?",
            "source": "What did you do that for?",
            "pronunciation": "mbe-ne k-e-gh-enyi ki 'no",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "target": "Wiy-a len-jin-a o-mech-inyi",
            "source": "Go and tell him I want him",
            "pronunciation": "wiy-a len-jin-a o-mech-inyi",
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          }
        ],
        "sentences": [
          {
            "target": "Mba ki-'no kô-nonsi-a' ka-legit-itu luk",
            "source": "That is why I thought the battle was imminent"
          },
          {
            "target": "Me kue a-iyit",
            "source": "It is no good me counting"
          },
          {
            "target": "Me-nget-nye ekw'-oyu",
            "source": "He doesn't know when"
          },
          {
            "target": "Anda ka-sow-a' blerkwa katô-m-o-wegh-an-nye",
            "source": "Had I seen the hare I should not have been afraid"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mwô-w-anan. / Mwô-chin-anan\" in Pokot?",
            "correctAnswer": "Tell me",
            "options": [
              "That is why I thought the battle was imminent",
              "It is no good me counting",
              "He doesn't know when",
              "Tell me"
            ],
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mba ki-'no kô-nonsi-a' ka-legit-itu luk\" in Pokot?",
            "correctAnswer": "That is why I thought the battle was imminent",
            "options": [
              "It is no good me counting",
              "He doesn't know when",
              "That is why I thought the battle was imminent",
              "Tell me"
            ],
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Me kue a-iyit\" in Pokot?",
            "correctAnswer": "It is no good me counting",
            "options": [
              "He doesn't know when",
              "It is no good me counting",
              "Tell me",
              "That is why I thought the battle was imminent"
            ],
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"It is no good me counting\" in Pokot?",
            "correctAnswer": "Me kue a-iyit",
            "options": [
              "Me kue a-iyit",
              "Mwô-w-anan. / Mwô-chin-anan",
              "Mba ki-'no kô-nonsi-a' ka-legit-itu luk",
              "Me-nget-nye ekw'-oyu"
            ],
            "hint": "me kue a-iyit."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"He doesn't know when\" in Pokot?",
            "correctAnswer": "Me-nget-nye ekw'-oyu",
            "options": [
              "Mwô-w-anan. / Mwô-chin-anan",
              "Mba ki-'no kô-nonsi-a' ka-legit-itu luk",
              "Me kue a-iyit",
              "Me-nget-nye ekw'-oyu"
            ],
            "hint": "me-nget-nye ekw'-oyu."
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Pokot expression with its English meaning:",
            "correctAnswer": "Mwô-w-anan. / Mwô-chin-anan: Tell me",
            "pairs": [
              {
                "left": "Mwô-w-anan. / Mwô-chin-anan",
                "right": "Tell me"
              },
              {
                "left": "Mba ki-'no kô-nonsi-a' ka-legit-itu luk",
                "right": "That is why I thought the battle was imminent"
              },
              {
                "left": "Me kue a-iyit",
                "right": "It is no good me counting"
              },
              {
                "left": "Me-nget-nye ekw'-oyu",
                "right": "He doesn't know when"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot term for \"Had I seen the hare I should not have been afraid\": ___",
            "correctAnswer": "Anda ka-sow-a' blerkwa katô-m-o-wegh-an-nye",
            "options": [
              "Mwô-w-anan. / Mwô-chin-anan",
              "Mba ki-'no kô-nonsi-a' ka-legit-itu luk",
              "Me kue a-iyit",
              "Anda ka-sow-a' blerkwa katô-m-o-wegh-an-nye"
            ],
            "hint": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)"
          }
        ]
      }
    ]
  },
  {
    "id": "pokot-unit-11-public-domain-corpus",
    "title": "Unit 11: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Pokot (Pökoot) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "skills": [
      {
        "id": "pokot-pd-corpus-11-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Pokot (Pökoot) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Pokot (Pökoot) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "che-marmar (pl. che-mŏr-mŏr)",
            "source": "Zebra",
            "pronunciation": "che-marmar",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "karachinin (pl. karachona)",
            "source": "Youth",
            "pronunciation": "ka-rachi-nin",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "nyeñgmwunyi (pl. chekunyi)",
            "source": "Your, yours",
            "pronunciation": "nyenggmwunyi",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "mērw-oʻ (pl. mērw-ai)",
            "source": "Young",
            "pronunciation": "merw-o'",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "nyī",
            "source": "You",
            "pronunciation": "nyi",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "omatu",
            "source": "Yesterday",
            "pronunciation": "o-ma-tu",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "kainy (pl. kainy-is)",
            "source": "Year",
            "pronunciation": "kainy",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "hegh (pl. hegh-w-un [gh almost surd])",
            "source": "Wrist",
            "pronunciation": "hegh",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"che-marmar (pl. che-mŏr-mŏr)\" in Pokot (Pökoot)?",
            "correctAnswer": "Zebra",
            "options": [
              "Zebra",
              "Youth",
              "Your, yours",
              "Young"
            ],
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Pokot (Pökoot) term to its English meaning:",
            "correctAnswer": "che-marmar (pl. che-mŏr-mŏr): Zebra",
            "pairs": [
              {
                "left": "che-marmar (pl. che-mŏr-mŏr)",
                "right": "Zebra"
              },
              {
                "left": "karachinin (pl. karachona)",
                "right": "Youth"
              },
              {
                "left": "nyeñgmwunyi (pl. chekunyi)",
                "right": "Your, yours"
              },
              {
                "left": "mērw-oʻ (pl. mērw-ai)",
                "right": "Young"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot (Pökoot) term for \"You\": ___",
            "correctAnswer": "nyī",
            "options": [
              "nyī",
              "che-marmar (pl. che-mŏr-mŏr)",
              "karachinin (pl. karachona)",
              "nyeñgmwunyi (pl. chekunyi)"
            ],
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          }
        ]
      },
      {
        "id": "pokot-pd-corpus-11-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Pokot (Pökoot) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Pokot (Pökoot) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "siñgir (pl. siñgir-ech)",
            "source": "Wrinkled",
            "pronunciation": "singgir",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "mô (pl. mô-y-oi)",
            "source": "Wound",
            "pronunciation": "mo",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "igh-isioʻ (pl. igh-isio-(y)ut)",
            "source": "Work",
            "pronunciation": "igh-isio' ut",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "ñgol-ion (pl. ñgal)",
            "source": "Word",
            "pronunciation": "nggol-ion",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "wu (pl. wu-tin)",
            "source": "Wood",
            "pronunciation": "wu",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "kôrkôʻ (pl. kôr, kôru)",
            "source": "Woman",
            "pronunciation": "korko'",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "pon-in (pl. pon-ŭ)",
            "source": "Wizard",
            "pronunciation": "pon-in",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "sow-in (pl. sow-ŭ)",
            "source": "Witness",
            "pronunciation": "sow-in",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"siñgir (pl. siñgir-ech)\" in Pokot (Pökoot)?",
            "correctAnswer": "Wrinkled",
            "options": [
              "Wrinkled",
              "Wound",
              "Work",
              "Word"
            ],
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Pokot (Pökoot) term to its English meaning:",
            "correctAnswer": "siñgir (pl. siñgir-ech): Wrinkled",
            "pairs": [
              {
                "left": "siñgir (pl. siñgir-ech)",
                "right": "Wrinkled"
              },
              {
                "left": "mô (pl. mô-y-oi)",
                "right": "Wound"
              },
              {
                "left": "igh-isioʻ (pl. igh-isio-(y)ut)",
                "right": "Work"
              },
              {
                "left": "ñgol-ion (pl. ñgal)",
                "right": "Word"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot (Pökoot) term for \"Wood\": ___",
            "correctAnswer": "wu (pl. wu-tin)",
            "options": [
              "wu (pl. wu-tin)",
              "siñgir (pl. siñgir-ech)",
              "mô (pl. mô-y-oi)",
              "igh-isioʻ (pl. igh-isio-(y)ut)"
            ],
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          }
        ]
      }
    ]
  },
  {
    "id": "pokot-unit-12-open-datasets-modern",
    "title": "Unit 12: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Pokot (Pökoot) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "skills": [
      {
        "id": "pokot-open-dataset-12-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "PawPrint",
        "description": "Learn core Pokot (Pökoot) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Pokot (Pökoot) dialects and everyday speech.",
        "words": [
          {
            "target": "kamwunai-yan (pl. kamwunai-tin)",
            "source": "Wire iron",
            "pronunciation": "kamwunai-yan",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "kapep (pl. kapep-oi)",
            "source": "Wing",
            "pronunciation": "ka-pep",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "sighin",
            "source": "Windpipe",
            "pronunciation": "sighin",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "yamat coll",
            "source": "Wind",
            "pronunciation": "ya-mat coll",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "opel-ion (pl. opel-tin)",
            "source": "Wilderness",
            "pronunciation": "opel-ion",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "tiony (pl. tiong-en)",
            "source": "Wild animal",
            "pronunciation": "tiony",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "mŏsŏk (pl. mŭsūk)",
            "source": "Widow",
            "pronunciation": "mo-sok",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "tepes (pl. tepes-ech)",
            "source": "Wide",
            "pronunciation": "te-pes",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kamwunai-yan (pl. kamwunai-tin)\" in Pokot (Pökoot)?",
            "correctAnswer": "Wire iron",
            "options": [
              "Wire iron",
              "Wing",
              "Windpipe",
              "Wind"
            ],
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Pokot (Pökoot) term to its English meaning:",
            "correctAnswer": "kamwunai-yan (pl. kamwunai-tin): Wire iron",
            "pairs": [
              {
                "left": "kamwunai-yan (pl. kamwunai-tin)",
                "right": "Wire iron"
              },
              {
                "left": "kapep (pl. kapep-oi)",
                "right": "Wing"
              },
              {
                "left": "sighin",
                "right": "Windpipe"
              },
              {
                "left": "yamat coll",
                "right": "Wind"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot (Pökoot) term for \"Wilderness\": ___",
            "correctAnswer": "opel-ion (pl. opel-tin)",
            "options": [
              "opel-ion (pl. opel-tin)",
              "kamwunai-yan (pl. kamwunai-tin)",
              "kapep (pl. kapep-oi)",
              "sighin"
            ],
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          }
        ]
      },
      {
        "id": "pokot-open-dataset-12-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Pokot (Pökoot) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Pokot (Pökoot) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "mokol (pl. mukul-ech)",
            "source": "Whole",
            "pronunciation": "mo-kol",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "nya (pl. pkonya-tin)",
            "source": "Who",
            "pronunciation": "nya",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "ril (pl. cha-le-meril-tin)",
            "source": "White",
            "pronunciation": "ril",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "oyu; ole with verb",
            "source": "When",
            "pronunciation": "oyu",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "man; nya-man",
            "source": "Well",
            "pronunciation": "man",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "sokon (pl. soko)",
            "source": "Weed",
            "pronunciation": "so-kon",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "acha",
            "source": "We",
            "pronunciation": "acha",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "target": "ôr (pl. ôr-ten (vide Road))",
            "source": "Way",
            "pronunciation": "or",
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mokol (pl. mukul-ech)\" in Pokot (Pökoot)?",
            "correctAnswer": "Whole",
            "options": [
              "Whole",
              "Who",
              "White",
              "When"
            ],
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Pokot (Pökoot) term to its English meaning:",
            "correctAnswer": "mokol (pl. mukul-ech): Whole",
            "pairs": [
              {
                "left": "mokol (pl. mukul-ech)",
                "right": "Whole"
              },
              {
                "left": "nya (pl. pkonya-tin)",
                "right": "Who"
              },
              {
                "left": "ril (pl. cha-le-meril-tin)",
                "right": "White"
              },
              {
                "left": "oyu; ole with verb",
                "right": "When"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Pokot (Pökoot) term for \"Well\": ___",
            "correctAnswer": "man; nya-man",
            "options": [
              "man; nya-man",
              "mokol (pl. mukul-ech)",
              "nya (pl. pkonya-tin)",
              "ril (pl. cha-le-meril-tin)"
            ],
            "hint": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford, 1911 — Public Domain)"
          }
        ]
      }
    ]
  },
  {
    "id": "pokot-unit-beech-1911-complete-monograph",
    "title": "Unit 11: Mervyn W. H. Beech (1911) — Salutations, Planting Hymn, 18 Tiangoi! Riddles, 55 Phrases & 2 Interlinear Stories",
    "description": "Master the greetings (Tokwes! / Chamke! / Korôton!), the Planting Hymn to Torôrut, the Potters' Chant, all 18 Tiangoi! riddles, 55 idiomatic phrases, and the 2 interlinear Suk stories from Mervyn W. H. Beech's 1911 monograph.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "pokot-beech-1911-salutations-hymns-riddles-phrases",
        "title": "Salutations, Sacred Chants, Tiangoi! Riddles & Idiomatic Phrases (Beech 1911)",
        "icon": "Sparkles",
        "description": "Practice authentic Pökoot greetings, ritual chants, riddles, and conversational sentences recorded with twenty Suk elders in Beech (1911).",
        "tips": "In Pökoot (Beech 1911, pp. 76–78, xx), transitive and intransitive verbs take both a subjective pronominal prefix and a subjective pronominal suffix: o-lim-an ('I hear'), i-lim-enyi ('thou hearest'), o-lim-ekwa ('ye hear'), while negatives wrap the verb in ma-/me-...-nye (e.g., m-o-nget-an-nye 'I do not know').",
        "words": [
          {
            "target": "Tokwes! — Eia! • Chamke! — Chamke, chamke! • Ka-rôt-on! (Korôton!) — I-rôt-enyi! • Sĕra! / Sĕre!",
            "source": "Hail! (entering village) — Yes! • Health to thee! • I have gone! (Good-bye!) — Thou art going! • Thank you!",
            "pronunciation": "tok-wes / ei-a / cham-ke / ka-rot-on / i-rot-enyi / se-ra",
            "hint": "Beech (1911, pp. 92, 96, 119, 125, 143)"
          },
          {
            "target": "Torôrut kun-e' mwagh / Ki-sop-'cha pich / Ki-sop sapon — Ny' anyin! • O-wei ter i-ker-ach mba maʻ, I-chi-nyi tiumbo kukoʻ!",
            "source": "God give us fat (fertility), that men may thrive, that life may thrive! — Which is sweet! • Go, pot, shut yourself in the fire, you are the vessel of our ancestors!",
            "pronunciation": "to-ro-rut ku-ne mwagh / ki-sop-cha pich / o-wei ter i-ker-ach mba ma",
            "hint": "Beech (1911, pp. 16–17)"
          },
          {
            "target": "Tiangoi! — Tia! — Donguch! • Rel-e' ti'-chu lopai, pirir kirokit → Kelat ngô ñgaliep • Kô-p-chii nya-ma-tiñget-nye kôkat → Rotin",
            "source": "A riddle! — Propound it! — We give it up! • All my cows are white, the bull is red → Teeth and tongue • A man's house without a door → An egg",
            "pronunciation": "ti-a-ngoi / ti-a / do-nguch / ke-lat ngo nga-liep / ro-tin",
            "hint": "Beech (1911, Ch. III, pp. 43–45, Riddles #3 & #8)"
          },
          {
            "target": "Ki-lend-e-ne kainat-nyeñgmwunyi? • I-gh-enyi-ne? • Mi-ne? • Tôma-ny'-'abkaʻ • Nyur-o se-kebe tukul!",
            "source": "What is your name? • What are you doing? • What is the matter? • He has not yet come • Let us come together!",
            "pronunciation": "ki-lend-e-ne kai-nat-nyeng-mwu-nyi / i-gh-enyi-ne / mi-ne / to-ma-ny'-ab-ka",
            "hint": "Beech (1911, Useful & Idiomatic Phrases, pp. 92–97)"
          }
        ],
        "sentences": [
          {
            "target": "Tokwes! — Eia! Chamke! Ki-lend-e-ne kainat-nyeñgmwunyi?",
            "source": "Hail! — Yes! Health to thee! What is your name? (Beech 1911, pp. 92–95)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Mervyn W. H. Beech's 'The Suk: Their Language and Folklore' (1911, p. 92), what is the traditional Suk greeting upon entering a village, the reply, and the parting farewell ('I have gone! — Thou art going!')?",
            "correctAnswer": "Entering village: 'Tokwes!' — Reply: 'Eia!'; Personal greeting: 'Chamke!'; Parting farewell: 'Ka-rôt-on! (Korôton!)' — Reply: 'I-rôt-enyi!'",
            "options": [
              "Entering village: 'Tokwes!' — Reply: 'Eia!'; Personal greeting: 'Chamke!'; Parting farewell: 'Ka-rôt-on! (Korôton!)' — Reply: 'I-rôt-enyi!'",
              "Entering village: 'Sopai!' — Reply: 'Eépa!'; Parting farewell: 'Biado!'",
              "Entering village: 'Tiamge!' — Reply: 'Otyamge!'; Parting farewell: 'Kātigē!'",
              "Entering village: 'Mata!' — Reply: 'Ii mata!'; Parting farewell: 'Mata ouwi!'"
            ],
            "hint": "See Beech (1911, p. 92)"
          }
        ]
      }
    ]
  }
];
