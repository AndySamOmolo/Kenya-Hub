import type { CourseUnit, LanguageConfig } from "../types";

// ============================================================
// Kalenjin (Kalenjin) Language Course Configuration & Units
// Declarative modular course definition (audit-ready, zero runtime mutations)
// ============================================================

export const KALENJIN_CONFIG: LanguageConfig = {
  "id": "kalenjin",
  "name": "Kalenjin",
  "nativeName": "Kalenjin",
  "family": "Nilotic",
  "counties": [
    "Uasin Gishu",
    "Nandi",
    "Kericho",
    "Bomet",
    "Elgeyo-Marakwet",
    "Baringo",
    "West Pokot",
    "Trans Nzoia"
  ],
  "speakers": "6.4M",
  "speechLocale": "sw-KE",
  "description": "A Highland (Southern) Nilotic macrolanguage uniting Nandi, Kipsigis, Keiyo, Tugen (Kamasia), Marakwet (Endo), Pokot, Sabaot (Elgon), Terik, and Okiek (Dorobo). Grounded in Hobley (1902, 1903, 1910), Johnston (1902), Hollis & Eliot (1909), Dundas (1910), and Beech (1911).",
  "color": "#9333EA",
  "sources": [
    "hobley-eastern-uganda-1902",
    "johnston-uganda-protectorate-1902",
    "hobley-kavirondo-nandi-1903",
    "hollis-nandi-1909",
    "dundas-baringo-tribes-1910",
    "hobley-akamba-ethnology-1910",
    "beech-suk-pokot-1911",
    "open-web-swadesh-comparative"
  ]
};

export const KALENJIN_UNITS: CourseUnit[] = [
  {
    "id": "kalenjin-unit-1",
    "title": "Unit 1: Salutations (pp. 90–91, 230), Definite Nouns, Numerals 1–10 & Hollis (1909) Folklore",
    "description": "Master Kalenjin greetings (Chamgei! / Sopai! / Takwenya!), primary vs. secondary definite nouns, counting 1–10, and 1909 Nandi proverbs and riddles.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "kalenjin-greetings-nouns",
        "title": "Salutations, People, Livestock & Nature",
        "icon": "Users",
        "description": "Learn everyday Kalenjin and Nandi salutations and definite nouns from Hollis (1909, pp. 90–91, 158–180, 230), Hobley (1902), and Rottland (1982).",
        "tips": "Kalenjin attaches definite articles to the END of nouns: chiito (the person, pl. piik), lakwet (the child, pl. lakōk/lagok), teta (the cow, pl. tuka/tuga), peik/beek (the water). Note also Hollis (1909, p. 163, 178): a man calls his house ka / kaita, whereas a woman calls it ko / kot.",
        "words": [
          {
            "target": "Chamgei! / Sopai! (resp. Chamgei mising! / Epa!)",
            "source": "Hello! / Male greeting! (Very much peace! / Epa!)",
            "pronunciation": "chamgei / so-pai",
            "hint": "Hollis (1909, pp. 90–91, 230) & universal Kalenjin greeting"
          },
          {
            "target": "Takwenya! (resp. Igo!) / Saiseri! (A-'kot-in)",
            "source": "Greeting to women, elders & warriors on war-path! / Good-bye! (I salute thee)",
            "pronunciation": "takwenya / sai-se-ri",
            "hint": "Hollis (1909, pp. 43, 90–91, 230–231)"
          },
          {
            "target": "chiito (indef. chi, pl. piik / pich)",
            "source": "the person (pl. the people)",
            "pronunciation": "chii-to",
            "hint": "Class I irregular noun (Hollis 1909, pp. 160, 168)"
          },
          {
            "target": "lakwet (indef. lakwa, pl. lakōk / lagok)",
            "source": "the child (pl. the children)",
            "pronunciation": "lakwet",
            "hint": "Class II noun (Hollis 1909, p. 169)"
          },
          {
            "target": "teta (indef. tany, pl. tuka / tuga)",
            "source": "the cow, ox (pl. the cattle)",
            "pronunciation": "te-ta",
            "hint": "Class XI irregular noun (Hollis 1909, p. 180)"
          },
          {
            "target": "peik / beek • cheko / chego • mursik",
            "source": "water • fresh milk • fermented milk",
            "pronunciation": "peik / beek • che-ko / che-go • mursik",
            "hint": "Plural liquid mass nouns in -k (Hollis 1909, pp. 24, 179)"
          },
          {
            "target": "Asista (Asis) • arawet (pl. arawek)",
            "source": "the Sun (Supreme Deity) • the Moon / month",
            "pronunciation": "a-sista • a-ra-wet",
            "hint": "Hollis (1909, pp. 40, 94, 169) cosmological nouns"
          },
          {
            "target": "ketit (indef. ket, pl. ketik) • mat (indef. ma, pl. mostinuek)",
            "source": "the tree (pl. trees) • the fire (pl. fires/age-subdivisions)",
            "pronunciation": "ke-tit • mat",
            "hint": "Hollis (1909, pp. 12, 167, 173)"
          },
          {
            "target": "ñgetundo (indef. ñgetuny) • pēliot (indef. pēlio) • kiplengwet (pl. kiplengoi)",
            "source": "the lion • the elephant • the hare (pl. hares)",
            "pronunciation": "ngge-tundo • pe-liot • kiplengwet",
            "hint": "Hollis (1909, pp. 124–125, 169, 179) folklore fauna"
          },
          {
            "target": "kaita (indef. ka, man speaking) vs. kot (indef. ko, woman speaking; pl. korik)",
            "source": "the house / homestead (gendered speaker forms)",
            "pronunciation": "kai-ta vs kot",
            "hint": "Hollis (1909, pp. 163, 178, 275) gender-indexed noun"
          }
        ],
        "sentences": [
          {
            "target": "Cham-ke sapon, cham-ke lakōk, cham-ke tuka, cham-ke ka.",
            "source": "May your health be good, and may the children, cattle, and all at home be well (Hollis 1909, p. 91)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Chamgei! / Sopai! (resp. Chamgei mising! / Epa!)\" in Kalenjin?",
            "correctAnswer": "Hello! / Male greeting! (Very much peace! / Epa!)",
            "options": [
              "Greeting to women, elders & warriors on war-path! / Good-bye! (I salute thee)",
              "the person (pl. the people)",
              "the child (pl. the children)",
              "Hello! / Male greeting! (Very much peace! / Epa!)"
            ],
            "hint": "Hollis (1909, pp. 90–91, 230) & universal Kalenjin greeting"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Takwenya! (resp. Igo!) / Saiseri! (A-'kot-in)\" in Kalenjin?",
            "correctAnswer": "Greeting to women, elders & warriors on war-path! / Good-bye! (I salute thee)",
            "options": [
              "the person (pl. the people)",
              "the child (pl. the children)",
              "Greeting to women, elders & warriors on war-path! / Good-bye! (I salute thee)",
              "Hello! / Male greeting! (Very much peace! / Epa!)"
            ],
            "hint": "Hollis (1909, pp. 43, 90–91, 230–231)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"chiito (indef. chi, pl. piik / pich)\" in Kalenjin?",
            "correctAnswer": "the person (pl. the people)",
            "options": [
              "the child (pl. the children)",
              "the person (pl. the people)",
              "Hello! / Male greeting! (Very much peace! / Epa!)",
              "Greeting to women, elders & warriors on war-path! / Good-bye! (I salute thee)"
            ],
            "hint": "Class I irregular noun (Hollis 1909, pp. 160, 168)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"the person (pl. the people)\" in Kalenjin?",
            "correctAnswer": "chiito (indef. chi, pl. piik / pich)",
            "options": [
              "chiito (indef. chi, pl. piik / pich)",
              "Chamgei! / Sopai! (resp. Chamgei mising! / Epa!)",
              "Takwenya! (resp. Igo!) / Saiseri! (A-'kot-in)",
              "lakwet (indef. lakwa, pl. lakōk / lagok)"
            ],
            "hint": "chee-toh / peek"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"the child (pl. the children)\" in Kalenjin?",
            "correctAnswer": "lakwet (indef. lakwa, pl. lakōk / lagok)",
            "options": [
              "Chamgei! / Sopai! (resp. Chamgei mising! / Epa!)",
              "Takwenya! (resp. Igo!) / Saiseri! (A-'kot-in)",
              "chiito (indef. chi, pl. piik / pich)",
              "lakwet (indef. lakwa, pl. lakōk / lagok)"
            ],
            "hint": "lah-kweht / lah-gohk"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kalenjin expression with its English meaning:",
            "correctAnswer": "Chamgei! / Sopai! (resp. Chamgei mising! / Epa!): Hello! / Male greeting! (Very much peace! / Epa!)",
            "pairs": [
              {
                "left": "Chamgei! / Sopai! (resp. Chamgei mising! / Epa!)",
                "right": "Hello! / Male greeting! (Very much peace! / Epa!)"
              },
              {
                "left": "Takwenya! (resp. Igo!) / Saiseri! (A-'kot-in)",
                "right": "Greeting to women, elders & warriors on war-path! / Good-bye! (I salute thee)"
              },
              {
                "left": "chiito (indef. chi, pl. piik / pich)",
                "right": "the person (pl. the people)"
              },
              {
                "left": "lakwet (indef. lakwa, pl. lakōk / lagok)",
                "right": "the child (pl. the children)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kalenjin term for \"the cow, ox (pl. the cattle)\": ___",
            "correctAnswer": "teta (indef. tany, pl. tuka / tuga)",
            "options": [
              "Chamgei! / Sopai! (resp. Chamgei mising! / Epa!)",
              "Takwenya! (resp. Igo!) / Saiseri! (A-'kot-in)",
              "chiito (indef. chi, pl. piik / pich)",
              "teta (indef. tany, pl. tuka / tuga)"
            ],
            "hint": "Class XI irregular noun (Hollis 1909, p. 180)"
          }
        ]
      },
      {
        "id": "kalenjin-numbers-proverbs",
        "title": "Numerals 1–10 (pp. 88–89, 183–184) & Nandi Proverbs (Atindonik-ap-Nandi, pp. 124–132)",
        "icon": "Hash",
        "description": "Count from 1 to 10 in Kalenjin and study classical proverbs from A. C. Hollis (1909, pp. 124–132).",
        "tips": "Kalenjin numbers 1–10 (Hollis 1909, pp. 88–89, 183–184) are akeng (akeenge, 1), oieñg (aeng', 2), somok (3), angwan (ang'wan, 4), mut (muut, 5), illok / kullo (lo, 6), tisap (7), sisiit (8), sokol (9), and taman (10).",
        "words": [
          {
            "target": "akeenge (akeng)",
            "source": "One (1)",
            "pronunciation": "a-keenge aeng' so-mok ang'wan muut",
            "hint": "Cardinals 1–5 (Hollis 1909, pp. 88, 183)"
          },
          {
            "target": "aeng' (oieñg)",
            "source": "Two (2)",
            "pronunciation": "a-keenge aeng' so-mok ang'wan muut",
            "hint": "Cardinals 1–5 (Hollis 1909, pp. 88, 183)"
          },
          {
            "target": "somok",
            "source": "Three (3)",
            "pronunciation": "a-keenge aeng' so-mok ang'wan muut",
            "hint": "Cardinals 1–5 (Hollis 1909, pp. 88, 183)"
          },
          {
            "target": "lo (illok / kullo), tisap, sisiit, sokol, taman",
            "source": "6, 7, 8, 9, 10",
            "pronunciation": "lo ti-sap si-siit so-kol ta-man",
            "hint": "Cardinals 6–10 (Hollis 1909, pp. 88, 183)"
          },
          {
            "target": "Ii-e ñgetuny lel",
            "source": "The lion bears a hyena/jackal (Hollis 1909, p. 124, Proverb #2)",
            "pronunciation": "ii-e ngge-tuny lel",
            "hint": "ñgetuny = lion, lel = jackal/hyena"
          },
          {
            "target": "Inga-i ñgom, i-ker-i-ke kumut-i?",
            "source": "However clever you may be, can you see the back of your neck? (Hollis 1909, p. 125, Proverb #4)",
            "pronunciation": "inga-i nggom i-ker-i-ke kumut-i",
            "hint": "ñgom = clever, kumut = nape of neck"
          },
          {
            "target": "Iok-toi kiplengoi pelio",
            "source": "Send hares to the elephant, not elephants to the hare (Hollis 1909, p. 125, Proverb #7)",
            "pronunciation": "iok-toi kiplengoi pe-lio",
            "hint": "Youth serve elders"
          },
          {
            "target": "Iput-i tany aku pa-kelek angwan",
            "source": "The ox falls in spite of its four legs (Hollis 1909, p. 125, Proverb #8)",
            "pronunciation": "iput-i tany aku pa-kelek angwan",
            "hint": "Even the strong can stumble"
          }
        ],
        "sentences": [
          {
            "target": "Iput-i tany aku pa-kelek angwan.",
            "source": "The ox falls in spite of its four legs (Hollis 1909, p. 125, Proverb #8)."
          },
          {
            "target": "Inga-i ñgom, i-ker-i-ke kumut-i?",
            "source": "However clever you may be, can you see the back of your neck? (Hollis 1909, p. 125, Proverb #4)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akeenge (akeng), aeng' (oieñg), somok, ang'wan, muut (mut)\" in Kalenjin?",
            "correctAnswer": "1, 2, 3, 4, 5",
            "options": [
              "6, 7, 8, 9, 10",
              "The lion bears a hyena/jackal (Hollis 1909, p. 124, Proverb #2)",
              "However clever you may be, can you see the back of your neck? (Hollis 1909, p. 125, Proverb #4)",
              "1, 2, 3, 4, 5"
            ],
            "hint": "Cardinals 1–5 (Hollis 1909, pp. 88, 183)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"lo (illok / kullo), tisap, sisiit, sokol, taman\" in Kalenjin?",
            "correctAnswer": "6, 7, 8, 9, 10",
            "options": [
              "The lion bears a hyena/jackal (Hollis 1909, p. 124, Proverb #2)",
              "However clever you may be, can you see the back of your neck? (Hollis 1909, p. 125, Proverb #4)",
              "6, 7, 8, 9, 10",
              "1, 2, 3, 4, 5"
            ],
            "hint": "Cardinals 6–10 (Hollis 1909, pp. 88, 183)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ii-e ñgetuny lel\" in Kalenjin?",
            "correctAnswer": "The lion bears a hyena/jackal (Hollis 1909, p. 124, Proverb #2)",
            "options": [
              "However clever you may be, can you see the back of your neck? (Hollis 1909, p. 125, Proverb #4)",
              "The lion bears a hyena/jackal (Hollis 1909, p. 124, Proverb #2)",
              "1, 2, 3, 4, 5",
              "6, 7, 8, 9, 10"
            ],
            "hint": "ñgetuny = lion, lel = jackal/hyena"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"The lion bears a hyena/jackal (Hollis 1909, p. 124, Proverb #2)\" in Kalenjin?",
            "correctAnswer": "Ii-e ñgetuny lel",
            "options": [
              "Ii-e ñgetuny lel",
              "akeenge (akeng), aeng' (oieñg), somok, ang'wan, muut (mut)",
              "lo (illok / kullo), tisap, sisiit, sokol, taman",
              "Inga-i ñgom, i-ker-i-ke kumut-i?"
            ],
            "hint": "ee-eh ngeh-toony lehl"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"However clever you may be, can you see the back of your neck? (Hollis 1909, p. 125, Proverb #4)\" in Kalenjin?",
            "correctAnswer": "Inga-i ñgom, i-ker-i-ke kumut-i?",
            "options": [
              "akeenge (akeng), aeng' (oieñg), somok, ang'wan, muut (mut)",
              "lo (illok / kullo), tisap, sisiit, sokol, taman",
              "Ii-e ñgetuny lel",
              "Inga-i ñgom, i-ker-i-ke kumut-i?"
            ],
            "hint": "een-gah-ee ngohm"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kalenjin expression with its English meaning:",
            "correctAnswer": "akeenge (akeng), aeng' (oieñg), somok, ang'wan, muut (mut): 1, 2, 3, 4, 5",
            "pairs": [
              {
                "left": "akeenge (akeng), aeng' (oieñg), somok, ang'wan, muut (mut)",
                "right": "1, 2, 3, 4, 5"
              },
              {
                "left": "lo (illok / kullo), tisap, sisiit, sokol, taman",
                "right": "6, 7, 8, 9, 10"
              },
              {
                "left": "Ii-e ñgetuny lel",
                "right": "The lion bears a hyena/jackal (Hollis 1909, p. 124, Proverb #2)"
              },
              {
                "left": "Inga-i ñgom, i-ker-i-ke kumut-i?",
                "right": "However clever you may be, can you see the back of your neck? (Hollis 1909, p. 125, Proverb #4)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kalenjin term for \"Send hares to the elephant, not elephants to the hare (Hollis 1909, p. 125, Proverb #7)\": ___",
            "correctAnswer": "Iok-toi kiplengoi pelio",
            "options": [
              "akeenge (akeng), aeng' (oieñg), somok, ang'wan, muut (mut)",
              "lo (illok / kullo), tisap, sisiit, sokol, taman",
              "Ii-e ñgetuny lel",
              "Iok-toi kiplengoi pelio"
            ],
            "hint": "Youth serve elders"
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-2",
    "title": "Unit 2: Ecological Calendar (12 Months, pp. 94–95), Ipinda Age-Sets & Tongōchik Enigmas",
    "description": "Explore the 2 seasons (Iwotet & Kemēut), 12 Nandi ecological months (pp. 94–95), 7 cyclic Ipinda age-sets (p. 12), and riddles/proverbs from Hollis (1909).",
    "icon": "Baby",
    "skills": [
      {
        "id": "kalenjin-months-ipinda",
        "title": "12 Nandi Months (Arawek), 7 Ipinda Age-Sets & Folklore",
        "icon": "Baby",
        "description": "Learn the Highland Nilotic seasonal calendar, age-set cycle, and oral literature.",
        "tips": "A. C. Hollis (1909, pp. 94–95) documents two seasons (Olt'-ap-iwot / Iwotet = Wet Season, Mar–Aug; Olt'-ap-keme / Kemēut = Dry Season, Sep–Feb) and 12 Nandi months: Kiptamo, Iwat-kut, Wake, Ñgei, Rob-tui, Puret, Epeso, Kipsunde, Kipsunde oieñg, Mulkul, Mulkulik oieñg, and Ñgotioto.",
        "words": [
          {
            "target": "Kiptamo (Feb) • Iwat-kut (Mar) • Wake (Apr)",
            "source": "Hot in the fields (Feb) • Rain in showers (Mar) • April",
            "pronunciation": "kipta-mo • iwat-kut • wa-ke",
            "hint": "Hollis (1909, pp. 94–95) Nandi months 1–3"
          },
          {
            "target": "Ñgei (May) • Rob-tui (Jun) • Puret (Jul)",
            "source": "Heart pushed aside by hunger (May) • Black rain/clouds (Jun) • Mist (Jul)",
            "pronunciation": "nggei • rob-tui • pu-ret",
            "hint": "Hollis (1909, p. 95) Nandi months 4–6"
          },
          {
            "target": "Epeso (Aug) • Kipsunde (Sep) • Kipsunde oieñg (Oct)",
            "source": "August • First offering to God in corn-fields (Sep) • Second harvest offering (Oct)",
            "pronunciation": "e-pe-so • kipsunde • kipsunde oiengg",
            "hint": "Hollis (1909, pp. 46–47, 95) Nandi months 7–9"
          },
          {
            "target": "Mulkul (Nov) • Mulkulik oieñg (Dec) • Ñgotioto (Jan)",
            "source": "Strong wind (Nov) • Second strong wind (Dec) • Brunsvigia Kirkii pincushion plant (Jan)",
            "pronunciation": "mulkul • mulku-lik oiengg • nggo-tio-to",
            "hint": "Hollis (1909, p. 95) Nandi months 10–12"
          },
          {
            "target": "Ipinda (Maina, Nyonge, Kimnyike, Kâplelach, Kipkoiimet, Sowe, Juma)",
            "source": "The 7 cyclic generation age-sets (~53-year cycle, Saket-ap-eito every 7.5 years)",
            "pronunciation": "i-pinda",
            "hint": "Hollis (1909, pp. 12–13) & Beech (1911, p. 6)"
          },
          {
            "target": "Kiruogindet (pl. Kiruogik) • Maotiot (pl. Maotik) • Orkoiyot (pl. Orkoiik)",
            "source": "People’s council spokesman-judge • Orkoiyot’s representative • Supreme ritual prophet",
            "pronunciation": "ki-ruo-gindet • mao-tiot • orkoi-yot",
            "hint": "Hollis (1909, pp. 48–52) Nandi governance"
          },
          {
            "target": "Tongoch! — Cho! Apuk ma-pa. — Kin'-ap-teta.",
            "source": "Enigma: It pours out; it does not go away. — A cow's udder.",
            "pronunciation": "tongoch — cho a-puk ma-pa — kin'-ap-teta",
            "hint": "Hollis (1909, pp. 133–134, Enigma #4)"
          },
          {
            "target": "Ma-ki-met-toi mokoiyo ne-mi-i 'ngoiny a-ki-sor ne-mi-i parak.",
            "source": "Don't throw away the figs at the bottom of the tree to pick those at the top.",
            "pronunciation": "ma-ki-met-toi mo-koi-yo ne-mi-i 'ngoiny a-ki-sor ne-mi-i pa-rak",
            "hint": "Hollis (1909, p. 127, Proverb #24)"
          }
        ],
        "sentences": [
          {
            "target": "'Ñgi-'om-e-chi pôton kel-ok.",
            "source": "Let us put our trembling legs together in one place, and we shall obtain support one from the other (Hollis 1909, p. 131, Proverb #49)."
          },
          {
            "target": "'Ñgo-samis-it muria kwa ko.",
            "source": "If a rat stinks, it goes home; and if a man is ill, he goes to his relations to be attended to (Hollis 1909, p. 132, Proverb #54)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Kiptamo (Feb) • Iwat-kut (Mar) • Wake (Apr)\" in Kalenjin?",
            "correctAnswer": "Hot in the fields (Feb) • Rain in showers (Mar) • April",
            "options": [
              "Heart pushed aside by hunger (May) • Black rain/clouds (Jun) • Mist (Jul)",
              "August • First offering to God in corn-fields (Sep) • Second harvest offering (Oct)",
              "Strong wind (Nov) • Second strong wind (Dec) • Brunsvigia Kirkii pincushion plant (Jan)",
              "Hot in the fields (Feb) • Rain in showers (Mar) • April"
            ],
            "hint": "Hollis (1909, pp. 94–95) Nandi months 1–3"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ñgei (May) • Rob-tui (Jun) • Puret (Jul)\" in Kalenjin?",
            "correctAnswer": "Heart pushed aside by hunger (May) • Black rain/clouds (Jun) • Mist (Jul)",
            "options": [
              "August • First offering to God in corn-fields (Sep) • Second harvest offering (Oct)",
              "Strong wind (Nov) • Second strong wind (Dec) • Brunsvigia Kirkii pincushion plant (Jan)",
              "Heart pushed aside by hunger (May) • Black rain/clouds (Jun) • Mist (Jul)",
              "Hot in the fields (Feb) • Rain in showers (Mar) • April"
            ],
            "hint": "Hollis (1909, p. 95) Nandi months 4–6"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Epeso (Aug) • Kipsunde (Sep) • Kipsunde oieñg (Oct)\" in Kalenjin?",
            "correctAnswer": "August • First offering to God in corn-fields (Sep) • Second harvest offering (Oct)",
            "options": [
              "Strong wind (Nov) • Second strong wind (Dec) • Brunsvigia Kirkii pincushion plant (Jan)",
              "August • First offering to God in corn-fields (Sep) • Second harvest offering (Oct)",
              "Hot in the fields (Feb) • Rain in showers (Mar) • April",
              "Heart pushed aside by hunger (May) • Black rain/clouds (Jun) • Mist (Jul)"
            ],
            "hint": "Hollis (1909, pp. 46–47, 95) Nandi months 7–9"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"August • First offering to God in corn-fields (Sep) • Second harvest offering (Oct)\" in Kalenjin?",
            "correctAnswer": "Epeso (Aug) • Kipsunde (Sep) • Kipsunde oieñg (Oct)",
            "options": [
              "Epeso (Aug) • Kipsunde (Sep) • Kipsunde oieñg (Oct)",
              "Kiptamo (Feb) • Iwat-kut (Mar) • Wake (Apr)",
              "Ñgei (May) • Rob-tui (Jun) • Puret (Jul)",
              "Mulkul (Nov) • Mulkulik oieñg (Dec) • Ñgotioto (Jan)"
            ],
            "hint": "eh-peh-soh / keep-soon-deh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Strong wind (Nov) • Second strong wind (Dec) • Brunsvigia Kirkii pincushion plant (Jan)\" in Kalenjin?",
            "correctAnswer": "Mulkul (Nov) • Mulkulik oieñg (Dec) • Ñgotioto (Jan)",
            "options": [
              "Kiptamo (Feb) • Iwat-kut (Mar) • Wake (Apr)",
              "Ñgei (May) • Rob-tui (Jun) • Puret (Jul)",
              "Epeso (Aug) • Kipsunde (Sep) • Kipsunde oieñg (Oct)",
              "Mulkul (Nov) • Mulkulik oieñg (Dec) • Ñgotioto (Jan)"
            ],
            "hint": "mool-kool / ngoh-tee-oh-toh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kalenjin expression with its English meaning:",
            "correctAnswer": "Kiptamo (Feb) • Iwat-kut (Mar) • Wake (Apr): Hot in the fields (Feb) • Rain in showers (Mar) • April",
            "pairs": [
              {
                "left": "Kiptamo (Feb) • Iwat-kut (Mar) • Wake (Apr)",
                "right": "Hot in the fields (Feb) • Rain in showers (Mar) • April"
              },
              {
                "left": "Ñgei (May) • Rob-tui (Jun) • Puret (Jul)",
                "right": "Heart pushed aside by hunger (May) • Black rain/clouds (Jun) • Mist (Jul)"
              },
              {
                "left": "Epeso (Aug) • Kipsunde (Sep) • Kipsunde oieñg (Oct)",
                "right": "August • First offering to God in corn-fields (Sep) • Second harvest offering (Oct)"
              },
              {
                "left": "Mulkul (Nov) • Mulkulik oieñg (Dec) • Ñgotioto (Jan)",
                "right": "Strong wind (Nov) • Second strong wind (Dec) • Brunsvigia Kirkii pincushion plant (Jan)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kalenjin term for \"The 7 cyclic generation age-sets (~53-year cycle, Saket-ap-eito every 7.5 years)\": ___",
            "correctAnswer": "Ipinda (Maina, Nyonge, Kimnyike, Kâplelach, Kipkoiimet, Sowe, Juma)",
            "options": [
              "Kiptamo (Feb) • Iwat-kut (Mar) • Wake (Apr)",
              "Ñgei (May) • Rob-tui (Jun) • Puret (Jul)",
              "Epeso (Aug) • Kipsunde (Sep) • Kipsunde oieñg (Oct)",
              "Ipinda (Maina, Nyonge, Kimnyike, Kâplelach, Kipkoiimet, Sowe, Juma)"
            ],
            "hint": "Hollis (1909, pp. 12–13) & Beech (1911, p. 6)"
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-3",
    "title": "Unit 3: Family, Kinship, Clans & Social Organization C. W. Hobley",
    "description": "Master family, kinship, clans & social organization in Kalenjin built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), A. C. Hollis (1909), and Hon. K. R. Dundas (1910).",
    "icon": "Users",
    "skills": [
      {
        "id": "kalenjin-family-kinship-kinship-elders-3",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "chorwet (pl. chonget)",
            "source": "Friend",
            "pronunciation": "chorwet",
            "hint": "Hollis 1909 Nandi vocabulary"
          },
          {
            "target": "lakwet (pl. lagok)",
            "source": "Child",
            "pronunciation": "lakwet",
            "hint": "Hollis 1909 p. 155"
          },
          {
            "target": "korget (pl. korusiek)",
            "source": "Woman",
            "pronunciation": "korget",
            "hint": "Hollis 1909 p. 156"
          },
          {
            "target": "murenet (pl. murenik) / chiito",
            "source": "Man",
            "pronunciation": "mu-re-net / chii-to",
            "hint": "Hollis 1909 & Hobley 1902"
          },
          {
            "target": "kaamet / eiyo (korket)",
            "source": "Mother",
            "pronunciation": "kaa-met / ei-yo",
            "hint": "Hollis 1909 & Hobley 1902 Nandi kinship"
          },
          {
            "target": "kwaan / abba (papa)",
            "source": "Father",
            "pronunciation": "kwaan / abba",
            "hint": "Hollis 1909 & Hobley 1902 Nandi kinship"
          },
          {
            "target": "lakwa (lakwet), pl. lakoi (lakōk)",
            "source": "Son",
            "pronunciation": "lakwa"
          },
          {
            "target": "ñgeta (ñgetet), pl. ñget (ñgetik)",
            "source": "Boy",
            "pronunciation": "ngeta"
          },
          {
            "target": "or. (See Road .)",
            "source": "Clan",
            "pronunciation": "or"
          }
        ],
        "sentences": [
          {
            "target": "chorwet — lakwet",
            "source": "Friend — Child"
          },
          {
            "target": "korget — murenet",
            "source": "Woman — Man"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"chorwet\" mean in English?",
            "correctAnswer": "Friend",
            "options": [
              "Friend",
              "Child",
              "Woman",
              "Man"
            ],
            "hint": "Core vocabulary in Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Child\"",
            "correctAnswer": "lakwet",
            "acceptedAnswers": [
              "lakwet (pl. lagok)",
              "lakwet"
            ],
            "hint": "Starts with \"la\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"korget\"",
            "correctAnswer": "Woman",
            "acceptedAnswers": [
              "Woman",
              "Woman"
            ],
            "hint": "Review Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Kinship Terms, Elders & Household Roles with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "chorwet",
                "right": "Friend"
              },
              {
                "left": "lakwet",
                "right": "Child"
              },
              {
                "left": "korget",
                "right": "Woman"
              },
              {
                "left": "murenet",
                "right": "Man"
              },
              {
                "left": "kaamet",
                "right": "Mother"
              }
            ]
          }
        ]
      },
      {
        "id": "kalenjin-family-kinship-clans-community-3",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "chiito (indef. chii, pl. piik)",
            "source": "person (pl. people)",
            "pronunciation": "chii-to",
            "hint": "Nandi / Kipsigis"
          },
          {
            "target": "kwondo (pl. kwonyik)",
            "source": "woman, wife",
            "pronunciation": "kwondo",
            "hint": "Nandi / Kipsigis"
          },
          {
            "target": "cherere (chereret), pl. chereren (chererēnik)",
            "source": "Baby",
            "pronunciation": "che-re-re",
            "hint": "A. C. Hollis (1909) The Nandi: Their Language and Folk-Lore (English-Nandi Vocabulary)"
          },
          {
            "target": "ñget-ap-kamet, pl. akut-ñget-ip-kamet (or akut-ñget-ip-kametuak)",
            "source": "Brother",
            "pronunciation": "ngget-ap-kamet",
            "hint": "A. C. Hollis (1909) The Nandi: Their Language and Folk-Lore (English-Nandi Vocabulary)"
          },
          {
            "target": "kâp-yukoi (kâp-yukoiit)",
            "source": "Brother-in-law (wife's brother)",
            "pronunciation": "kap-yukoi",
            "hint": "A. C. Hollis (1909) The Nandi: Their Language and Folk-Lore (English-Nandi Vocabulary)"
          },
          {
            "target": "kwany (kwando), pl. kwanyin (kwanyik)",
            "source": "Wife",
            "pronunciation": "kwany"
          },
          {
            "target": "kogo",
            "source": "Aunt",
            "pronunciation": "ko-go"
          },
          {
            "target": "tie (chepto), pl. tipin (tīpīk)",
            "source": "Girl",
            "pronunciation": "tie"
          },
          {
            "target": "oo, pl. echen",
            "source": "Elder",
            "pronunciation": "or eldest oo"
          }
        ],
        "sentences": [
          {
            "target": "chiito — kwondo",
            "source": "person — woman, wife"
          },
          {
            "target": "cherere, pl. chereren — ñget-ap-kamet, pl. akut-ñget-ip-kamet",
            "source": "Baby — Brother"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"chiito\" mean in English?",
            "correctAnswer": "person (pl. people)",
            "options": [
              "person (pl. people)",
              "woman, wife",
              "Baby",
              "Brother"
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"woman, wife\"",
            "correctAnswer": "kwondo",
            "acceptedAnswers": [
              "kwondo (pl. kwonyik)",
              "kwondo"
            ],
            "hint": "Starts with \"kw\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"cherere, pl. chereren\"",
            "correctAnswer": "Baby",
            "acceptedAnswers": [
              "Baby",
              "Baby"
            ],
            "hint": "Review Clans, Marriage & Community Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "chiito",
                "right": "person"
              },
              {
                "left": "kwondo",
                "right": "woman, wife"
              },
              {
                "left": "cherere, pl. chereren",
                "right": "Baby"
              },
              {
                "left": "ñget-ap-kamet, pl. akut-ñget-ip-kamet",
                "right": "Brother"
              },
              {
                "left": "kâp-yukoi",
                "right": "Brother-in-law"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-4",
    "title": "Unit 4: Numbers, Counting, Currency & Measures C. W. Hobley",
    "description": "Master numbers, counting, currency & measures in Kalenjin built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), A. C. Hollis (1909), and Hon. K. R. Dundas (1910).",
    "icon": "Scale",
    "skills": [
      {
        "id": "kalenjin-numbers-measures-cardinals-ordinals-4",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "akeenge (Nandi/Keiyo/Kipsigis/Tugen/Sabaot)",
            "source": "One",
            "pronunciation": "a-keenge",
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          },
          {
            "target": "aeng' / ayeeng' (Nandi/Keiyo/Kipsigis/Tugen/Sabaot)",
            "source": "Two",
            "pronunciation": "aeng' / a-yeeng'",
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          },
          {
            "target": "somok (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)",
            "source": "Three",
            "pronunciation": "so-mok",
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          },
          {
            "target": "ang'wan (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)",
            "source": "Four",
            "pronunciation": "ang'wan",
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          },
          {
            "target": "muut (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)",
            "source": "Five",
            "pronunciation": "muut",
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          },
          {
            "target": "lo (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Marakwet)",
            "source": "Six",
            "pronunciation": "lo",
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          },
          {
            "target": "tisap (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Marakwet)",
            "source": "Seven",
            "pronunciation": "ti-sap",
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          },
          {
            "target": "sisiit (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Marakwet)",
            "source": "Eight",
            "pronunciation": "si-siit",
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          },
          {
            "target": "sokol / sogool (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Marakwet)",
            "source": "Nine",
            "pronunciation": "so-kol / so-gool",
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akeenge (Nandi/Keiyo/Kipsigis/Tugen/Sabaot)\" in Kalenjin?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
            ],
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aeng' / ayeeng' (Nandi/Keiyo/Kipsigis/Tugen/Sabaot)\" in Kalenjin?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
              "One"
            ],
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"somok (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)\" in Kalenjin?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Kalenjin?",
            "correctAnswer": "somok (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)",
            "options": [
              "somok (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)",
              "akeenge (Nandi/Keiyo/Kipsigis/Tugen/Sabaot)",
              "aeng' / ayeeng' (Nandi/Keiyo/Kipsigis/Tugen/Sabaot)",
              "ang'wan (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)"
            ],
            "hint": "somok (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Kalenjin?",
            "correctAnswer": "ang'wan (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)",
            "options": [
              "akeenge (Nandi/Keiyo/Kipsigis/Tugen/Sabaot)",
              "aeng' / ayeeng' (Nandi/Keiyo/Kipsigis/Tugen/Sabaot)",
              "somok (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)",
              "ang'wan (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)"
            ],
            "hint": "ang'wan (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kalenjin expression with its English meaning:",
            "correctAnswer": "akeenge (Nandi/Keiyo/Kipsigis/Tugen/Sabaot): One",
            "pairs": [
              {
                "left": "akeenge (Nandi/Keiyo/Kipsigis/Tugen/Sabaot)",
                "right": "One"
              },
              {
                "left": "aeng' / ayeeng' (Nandi/Keiyo/Kipsigis/Tugen/Sabaot)",
                "right": "Two"
              },
              {
                "left": "somok (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)",
                "right": "Three"
              },
              {
                "left": "ang'wan (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kalenjin term for \"Five\": ___",
            "correctAnswer": "muut (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)",
            "options": [
              "akeenge (Nandi/Keiyo/Kipsigis/Tugen/Sabaot)",
              "aeng' / ayeeng' (Nandi/Keiyo/Kipsigis/Tugen/Sabaot)",
              "somok (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)",
              "muut (Nandi/Keiyo/Kipsigis/Tugen/Sabaot/Pokot)"
            ],
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          }
        ]
      },
      {
        "id": "kalenjin-numbers-measures-trade-measures-4",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "taman (All Kalenjin dialects)",
            "source": "Ten",
            "pronunciation": "ta-man",
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          },
          {
            "target": "artam / tamanwogik ang'wan",
            "source": "forty (40)",
            "pronunciation": "artam / ta-manwo-gik ang'wan",
            "hint": "Kalenjin"
          },
          {
            "target": "konom / tamanwogik muut",
            "source": "fifty (50)",
            "pronunciation": "ko-nom / ta-manwo-gik muut",
            "hint": "Kalenjin"
          },
          {
            "target": "pokol",
            "source": "one hundred (100)",
            "pronunciation": "po-kol",
            "hint": "Kalenjin"
          },
          {
            "target": "Sekondit",
            "source": "Second (time unit)",
            "pronunciation": "se-kondit",
            "hint": "Kalenjin — GitHub unicode-org/cldr (kln.xml), Common Voice CC0 & PanLex CC0"
          },
          {
            "target": "tukul",
            "source": "All",
            "pronunciation": "tu-kul",
            "hint": "A. C. Hollis (1909) The Nandi: Their Language and Folk-Lore (English-Nandi Vocabulary)"
          },
          {
            "target": "kip-akenge; tukul kip-akenge",
            "source": "All at once, all together",
            "pronunciation": "kip-akenge",
            "hint": "A. C. Hollis (1909) The Nandi: Their Language and Folk-Lore (English-Nandi Vocabulary)"
          },
          {
            "target": "tukul ko-somok",
            "source": "All three",
            "pronunciation": "tu-kul ko-somok",
            "hint": "A. C. Hollis (1909) The Nandi: Their Language and Folk-Lore (English-Nandi Vocabulary)"
          },
          {
            "target": "irot-ie (pr. a-'rot-tos-i, p.p. ka-a-'rot-ie)",
            "source": "Bet with some one",
            "pronunciation": "irot-ie",
            "hint": "A. C. Hollis (1909) The Nandi: Their Language and Folk-Lore (English-Nandi Vocabulary)"
          }
        ],
        "sentences": [
          {
            "target": "tukul ko-somok",
            "source": "All three"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"taman (All Kalenjin dialects)\" in Kalenjin?",
            "correctAnswer": "Ten",
            "options": [
              "forty (40)",
              "fifty (50)",
              "one hundred (100)",
              "Ten"
            ],
            "hint": "Wikipedia Nilotic languages — Kalenjin numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"artam / tamanwogik ang'wan\" in Kalenjin?",
            "correctAnswer": "forty (40)",
            "options": [
              "fifty (50)",
              "one hundred (100)",
              "forty (40)",
              "Ten"
            ],
            "hint": "Kalenjin"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"konom / tamanwogik muut\" in Kalenjin?",
            "correctAnswer": "fifty (50)",
            "options": [
              "one hundred (100)",
              "fifty (50)",
              "Ten",
              "forty (40)"
            ],
            "hint": "Kalenjin"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"fifty (50)\" in Kalenjin?",
            "correctAnswer": "konom / tamanwogik muut",
            "options": [
              "konom / tamanwogik muut",
              "taman (All Kalenjin dialects)",
              "artam / tamanwogik ang'wan",
              "pokol"
            ],
            "hint": "konom / tamanwogik muut"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"one hundred (100)\" in Kalenjin?",
            "correctAnswer": "pokol",
            "options": [
              "taman (All Kalenjin dialects)",
              "artam / tamanwogik ang'wan",
              "konom / tamanwogik muut",
              "pokol"
            ],
            "hint": "pokol"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kalenjin expression with its English meaning:",
            "correctAnswer": "taman (All Kalenjin dialects): Ten",
            "pairs": [
              {
                "left": "taman (All Kalenjin dialects)",
                "right": "Ten"
              },
              {
                "left": "artam / tamanwogik ang'wan",
                "right": "forty (40)"
              },
              {
                "left": "konom / tamanwogik muut",
                "right": "fifty (50)"
              },
              {
                "left": "pokol",
                "right": "one hundred (100)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kalenjin term for \"Second (time unit)\": ___",
            "correctAnswer": "Sekondit",
            "options": [
              "taman (All Kalenjin dialects)",
              "artam / tamanwogik ang'wan",
              "konom / tamanwogik muut",
              "Sekondit"
            ],
            "hint": "Kalenjin — GitHub unicode-org/cldr (kln.xml), Common Voice CC0 & PanLex CC0"
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-5",
    "title": "Unit 5: Food, Cuisine, Crops & Livestock Husbandry C. W. Hobley",
    "description": "Master food, cuisine, crops & livestock husbandry in Kalenjin built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), A. C. Hollis (1909), and Hon. K. R. Dundas (1910).",
    "icon": "Tractor",
    "skills": [
      {
        "id": "kalenjin-food-agriculture-staple-foods-cookery-5",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "ng'ororiet (pl. ng'ororik) / artet",
            "source": "Goat",
            "pronunciation": "ng'o-ro-riet / artet",
            "hint": "Hollis 1909 & Hobley 1902"
          },
          {
            "target": "teta / tany (pl. tuga)",
            "source": "Cow",
            "pronunciation": "te-ta / tany",
            "hint": "Hollis 1909 & Hobley 1902"
          },
          {
            "target": "koii (koita), pl. koii (koiik)",
            "source": "Egg",
            "pronunciation": "koii"
          },
          {
            "target": "mwaita",
            "source": "Oil",
            "pronunciation": "mwai-ta"
          },
          {
            "target": "yakanyat, yakanek",
            "source": "Yam",
            "pronunciation": "ya-kany-at ya-ka-nek"
          },
          {
            "target": "kām",
            "source": "Eat",
            "pronunciation": "kah"
          },
          {
            "target": "Mwaitā",
            "source": "Fat",
            "pronunciation": "mwai-tah"
          },
          {
            "target": "isus (pr. a-'sus-i, p.p. ka-a-'sus)",
            "source": "Fry",
            "pronunciation": "isus"
          },
          {
            "target": "tuon",
            "source": "Raw",
            "pronunciation": "tuon"
          }
        ],
        "sentences": [
          {
            "target": "ng'ororiet — teta",
            "source": "Goat — Cow"
          },
          {
            "target": "koii. — mwaita",
            "source": "Egg — Oil"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ng'ororiet\" mean in English?",
            "correctAnswer": "Goat",
            "options": [
              "Goat",
              "Cow",
              "Egg",
              "Oil"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Cow\"",
            "correctAnswer": "teta",
            "acceptedAnswers": [
              "teta / tany (pl. tuga)",
              "teta"
            ],
            "hint": "Starts with \"te\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"koii.\"",
            "correctAnswer": "Egg",
            "acceptedAnswers": [
              "Egg",
              "Egg"
            ],
            "hint": "Review Staple Foods, Cookery & Beverages"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Staple Foods, Cookery & Beverages with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ng'ororiet",
                "right": "Goat"
              },
              {
                "left": "teta",
                "right": "Cow"
              },
              {
                "left": "koii.",
                "right": "Egg"
              },
              {
                "left": "mwaita",
                "right": "Oil"
              },
              {
                "left": "yakanyat, yakanek",
                "right": "Yam"
              }
            ]
          }
        ]
      },
      {
        "id": "kalenjin-food-agriculture-crops-livestock-5",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "komek (komda)",
            "source": "Honey",
            "pronunciation": "ko-mek",
            "hint": "Hollis 1909 & Dundas 1910"
          },
          {
            "target": "pendo (peny)",
            "source": "Meat",
            "pronunciation": "pendo",
            "hint": "Hollis 1909 & Hobley 1902"
          },
          {
            "target": "chego (mursik = fermented milk)",
            "source": "Milk",
            "pronunciation": "che-go",
            "hint": "Hollis 1909 & Hobley 1902"
          },
          {
            "target": "amitwogik (kimyet = ugali)",
            "source": "Food",
            "pronunciation": "a-mitwo-gik",
            "hint": "Hollis 1909 Nandi vocabulary"
          },
          {
            "target": "keam (am)",
            "source": "Eat",
            "pronunciation": "keh-ahm / ahm"
          },
          {
            "target": "undir (undiriet), pl. undir (undirik)",
            "source": "Boil",
            "pronunciation": "und-ir"
          },
          {
            "target": "iyoiise",
            "source": "Cook",
            "pronunciation": "i-yoii-se"
          },
          {
            "target": "munyek",
            "source": "Salt",
            "pronunciation": "muny-ek"
          },
          {
            "target": "ngwanin",
            "source": "Sour",
            "pronunciation": "ngwa-nin"
          }
        ],
        "sentences": [
          {
            "target": "komek — pendo",
            "source": "Honey — Meat"
          },
          {
            "target": "chego — amitwogik",
            "source": "Milk — Food"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"komek\" mean in English?",
            "correctAnswer": "Honey",
            "options": [
              "Honey",
              "Meat",
              "Milk",
              "Food"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Meat\"",
            "correctAnswer": "pendo",
            "acceptedAnswers": [
              "pendo (peny)",
              "pendo"
            ],
            "hint": "Starts with \"pe\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"chego\"",
            "correctAnswer": "Milk",
            "acceptedAnswers": [
              "Milk",
              "Milk"
            ],
            "hint": "Review Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "komek",
                "right": "Honey"
              },
              {
                "left": "pendo",
                "right": "Meat"
              },
              {
                "left": "chego",
                "right": "Milk"
              },
              {
                "left": "amitwogik",
                "right": "Food"
              },
              {
                "left": "keam",
                "right": "Eat"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-6",
    "title": "Unit 6: Nature, Landscape, Flora & East African Wildlife C. W. Hobley",
    "description": "Master nature, landscape, flora & east african wildlife in Kalenjin built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), A. C. Hollis (1909), and Hon. K. R. Dundas (1910).",
    "icon": "PawPrint",
    "skills": [
      {
        "id": "kalenjin-nature-wildlife-land-sky-water-6",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "keetit / keet (Nandi, Kipsigis, Keiyo, Tugen, Sabaot, Pokot)",
            "source": "Tree",
            "pronunciation": "kee-tit / keet",
            "hint": "Wikipedia Kalenjin languages — Comparative vocabulary (van Otterloo 1979)"
          },
          {
            "target": "murwaket",
            "source": "Snail (Elgon/Terik Kalenjin)",
            "pronunciation": "murwa-ket",
            "hint": "Wikipedia Terik language — Elgon Kalenjin lexicon"
          },
          {
            "target": "musempet",
            "source": "Sheep's tail (Elgon/Terik Kalenjin)",
            "pronunciation": "mu-sempet",
            "hint": "Wikipedia Terik language — Elgon Kalenjin lexicon"
          },
          {
            "target": "ngetuny",
            "source": "lion",
            "pronunciation": "nge-tuny",
            "hint": "Nandi / Kalenjin (Hollis 1909, p. 152) — e.g. Ii-e ngetuny lel. (The lion bears a hyena/jackal Hollis 1909 Proverb #2)."
          },
          {
            "target": "lel / kimaget",
            "source": "hyena, jackal",
            "pronunciation": "lel / ki-ma-get",
            "hint": "Nandi (Hollis 1909, p. 152)"
          },
          {
            "target": "pelio (peliot)",
            "source": "elephant",
            "pronunciation": "pe-lio",
            "hint": "Nandi / Kalenjin (Hollis 1909, p. 152)"
          },
          {
            "target": "ng'okto (pl. ng'okik) / seset",
            "source": "Dog",
            "pronunciation": "ngohk-toh / seh-seht"
          },
          {
            "target": "asista (asis)",
            "source": "Sun",
            "pronunciation": "ah-sees-tah"
          },
          {
            "target": "oria (oriat), pl. or (orek)",
            "source": "Ash",
            "pronunciation": "oria"
          }
        ],
        "sentences": [
          {
            "target": "keetit — murwaket",
            "source": "Tree — Snail"
          },
          {
            "target": "musempet — ngetuny",
            "source": "Sheep's tail — lion"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"keetit\" mean in English?",
            "correctAnswer": "Tree",
            "options": [
              "Tree",
              "Snail (Elgon/Terik Kalenjin)",
              "Sheep's tail (Elgon/Terik Kalenjin)",
              "lion"
            ],
            "hint": "Core vocabulary in Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Snail (Elgon/Terik Kalenjin)\"",
            "correctAnswer": "murwaket",
            "acceptedAnswers": [
              "murwaket",
              "murwaket"
            ],
            "hint": "Starts with \"mu\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"musempet\"",
            "correctAnswer": "Sheep's tail",
            "acceptedAnswers": [
              "Sheep's tail (Elgon/Terik Kalenjin)",
              "Sheep's tail"
            ],
            "hint": "Review Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Sky, Weather, Rivers & Landforms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "keetit",
                "right": "Tree"
              },
              {
                "left": "murwaket",
                "right": "Snail"
              },
              {
                "left": "musempet",
                "right": "Sheep's tail"
              },
              {
                "left": "ngetuny",
                "right": "lion"
              },
              {
                "left": "lel",
                "right": "hyena, jackal"
              }
            ]
          }
        ]
      },
      {
        "id": "kalenjin-nature-wildlife-wildlife-flora-6",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "roopta",
            "source": "rain",
            "pronunciation": "roopta",
            "hint": "Nandi / Kipsigis"
          },
          {
            "target": "igoondiit",
            "source": "horn, ceremonial horn",
            "pronunciation": "i-goondiit",
            "hint": "Kipsigis / Nandi"
          },
          {
            "target": "arawet",
            "source": "moon, month",
            "pronunciation": "a-ra-wet",
            "hint": "Nandi / Kipsigis"
          },
          {
            "target": "rewo (rewot)",
            "source": "Dew",
            "pronunciation": "rewo"
          },
          {
            "target": "kipurienge (kipurienget)",
            "source": "Fog",
            "pronunciation": "kipurienge"
          },
          {
            "target": "lapcha (lapchat)",
            "source": "Mud",
            "pronunciation": "lapcha"
          },
          {
            "target": "nianja. (See Lake .)",
            "source": "Sea",
            "pronunciation": "nianja"
          },
          {
            "target": "parak. (See Heaven .)",
            "source": "Sky",
            "pronunciation": "parak"
          },
          {
            "target": "asisto",
            "source": "Sun",
            "pronunciation": "a-sis-to"
          }
        ],
        "sentences": [
          {
            "target": "roopta — igoondiit",
            "source": "rain — horn, ceremonial horn"
          },
          {
            "target": "arawet — rewo",
            "source": "moon, month — Dew"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"roopta\" mean in English?",
            "correctAnswer": "rain",
            "options": [
              "rain",
              "horn, ceremonial horn",
              "moon, month",
              "Dew"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"horn, ceremonial horn\"",
            "correctAnswer": "igoondiit",
            "acceptedAnswers": [
              "igoondiit",
              "igoondiit"
            ],
            "hint": "Starts with \"ig\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"arawet\"",
            "correctAnswer": "moon, month",
            "acceptedAnswers": [
              "moon, month",
              "moon, month"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "roopta",
                "right": "rain"
              },
              {
                "left": "igoondiit",
                "right": "horn, ceremonial horn"
              },
              {
                "left": "arawet",
                "right": "moon, month"
              },
              {
                "left": "rewo",
                "right": "Dew"
              },
              {
                "left": "kipurienge",
                "right": "Fog"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-7",
    "title": "Unit 7: The Human Body, Health, Medicine & Safety C. W. Hobley",
    "description": "Master the human body, health, medicine & safety in Kalenjin built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), A. C. Hollis (1909), and Hon. K. R. Dundas (1910).",
    "icon": "User",
    "skills": [
      {
        "id": "kalenjin-body-health-anatomy-senses-7",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "ē (ēut), pl. ēun (ēunek)",
            "source": "Arm",
            "pronunciation": "e"
          },
          {
            "target": "koñg (konda), pl. konyan (konyek)",
            "source": "Eye",
            "pronunciation": "kong"
          },
          {
            "target": "ingorai (ingoraiet), pl. ingoraiin (ingoraiīnik)",
            "source": "Hip",
            "pronunciation": "ingorai"
          },
          {
            "target": "takilkil (takilkiliet), pl. takilkil (takilkilik)",
            "source": "Jaw",
            "pronunciation": "takilkil"
          },
          {
            "target": "kel (keldo), pl. kelien (keliek)",
            "source": "Leg",
            "pronunciation": "kel"
          },
          {
            "target": "iririot-ap-kutit",
            "source": "Lip",
            "pronunciation": "iririot-ap-kutit"
          },
          {
            "target": "karas (karasta), pl. korosua (korosuek)",
            "source": "Rib",
            "pronunciation": "karas"
          },
          {
            "target": "mornet-ap-keldo",
            "source": "Toe",
            "pronunciation": "mornet-ap-keldo"
          },
          {
            "target": "itit",
            "source": "Ear",
            "pronunciation": "i-tit"
          }
        ],
        "sentences": [
          {
            "target": "ē, pl. ēun — koñg, pl. konyan",
            "source": "Arm — Eye"
          },
          {
            "target": "ingorai, pl. ingoraiin — takilkil, pl. takilkil",
            "source": "Hip — Jaw"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ē, pl. ēun\" mean in English?",
            "correctAnswer": "Arm",
            "options": [
              "Arm",
              "Eye",
              "Hip",
              "Jaw"
            ],
            "hint": "Core vocabulary in Parts of the Body & Physical Senses"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Eye\"",
            "correctAnswer": "koñg, pl. konyan",
            "acceptedAnswers": [
              "koñg (konda), pl. konyan (konyek)",
              "koñg, pl. konyan"
            ],
            "hint": "Starts with \"ko\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ingorai, pl. ingoraiin\"",
            "correctAnswer": "Hip",
            "acceptedAnswers": [
              "Hip",
              "Hip"
            ],
            "hint": "Review Parts of the Body & Physical Senses"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Parts of the Body & Physical Senses with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ē, pl. ēun",
                "right": "Arm"
              },
              {
                "left": "koñg, pl. konyan",
                "right": "Eye"
              },
              {
                "left": "ingorai, pl. ingoraiin",
                "right": "Hip"
              },
              {
                "left": "takilkil, pl. takilkil",
                "right": "Jaw"
              },
              {
                "left": "kel, pl. kelien",
                "right": "Leg"
              }
            ]
          }
        ]
      },
      {
        "id": "kalenjin-body-health-healing-safety-7",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "konda",
            "source": "Eye",
            "pronunciation": "kond-a"
          },
          {
            "target": "tamnet",
            "source": "Jaw",
            "pronunciation": "tam-net"
          },
          {
            "target": "kielto",
            "source": "Leg",
            "pronunciation": "kiel-to"
          },
          {
            "target": "kotit",
            "source": "Lip",
            "pronunciation": "ko-tit"
          },
          {
            "target": "mori kaikelto",
            "source": "Toe",
            "pronunciation": "mo-ri kai-kel-to"
          },
          {
            "target": "Ewūt, Eūt; Eūnek (pl.)",
            "source": "Arm",
            "pronunciation": "ewut eut"
          },
          {
            "target": "Idit; Itik (pl.)",
            "source": "Ear",
            "pronunciation": "i-dit"
          },
          {
            "target": "muk'-ap-ker",
            "source": "Heel",
            "pronunciation": "mu-k' ap ker"
          },
          {
            "target": "por (porto), pl. porua (poruek)",
            "source": "Body",
            "pronunciation": "por"
          }
        ],
        "sentences": [
          {
            "target": "konda — tamnet",
            "source": "Eye — Jaw"
          },
          {
            "target": "kielto — kotit",
            "source": "Leg — Lip"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"konda\" mean in English?",
            "correctAnswer": "Eye",
            "options": [
              "Eye",
              "Jaw",
              "Leg",
              "Lip"
            ],
            "hint": "Core vocabulary in Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Jaw\"",
            "correctAnswer": "tamnet",
            "acceptedAnswers": [
              "tamnet",
              "tamnet"
            ],
            "hint": "Starts with \"ta\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kielto\"",
            "correctAnswer": "Leg",
            "acceptedAnswers": [
              "Leg",
              "Leg"
            ],
            "hint": "Review Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Health, Traditional Medicine & Emergency Terms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "konda",
                "right": "Eye"
              },
              {
                "left": "tamnet",
                "right": "Jaw"
              },
              {
                "left": "kielto",
                "right": "Leg"
              },
              {
                "left": "kotit",
                "right": "Lip"
              },
              {
                "left": "mori kaikelto",
                "right": "Toe"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-8",
    "title": "Unit 8: Core Verbs, Tenses, Negation & Verbal Extensions C. W. Hobley",
    "description": "Master core verbs, tenses, negation & verbal extensions in Kalenjin built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), A. C. Hollis (1909), and Hon. K. R. Dundas (1910).",
    "icon": "Compass",
    "skills": [
      {
        "id": "kalenjin-verbs-grammar-action-verbs-8",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "keng'alal (mwai)",
            "source": "Speak",
            "pronunciation": "keng'a-lal",
            "hint": "Hollis 1909 & Hobley 1902"
          },
          {
            "target": "keru (ru)",
            "source": "Sleep",
            "pronunciation": "ke-ru",
            "hint": "Hollis 1909 & Hobley 1902"
          },
          {
            "target": "kenyone (nyon!)",
            "source": "Come",
            "pronunciation": "kenyo-ne",
            "hint": "Hollis 1909 & Hobley 1902"
          },
          {
            "target": "kewe (ui)",
            "source": "Go",
            "pronunciation": "ke-we",
            "hint": "Hollis 1909 & Hobley 1902"
          },
          {
            "target": "tep (pr. a-tep-e, p.p. ka-a-tep)",
            "source": "Ask",
            "pronunciation": "tep"
          },
          {
            "target": "som (pr. a-som-e, p.p. ka-a-som)",
            "source": "Beg",
            "pronunciation": "som"
          },
          {
            "target": "chor (pr. a-chor-e, p.p. ka-a-chor)",
            "source": "Rob",
            "pronunciation": "chor"
          },
          {
            "target": "pir (pr. a-pir-e, p.p. ka-a-pir)",
            "source": "Beat",
            "pronunciation": "pir"
          },
          {
            "target": "ker (pr. a-ker-e, p.p. ka-a-ker)",
            "source": "Shut",
            "pronunciation": "ker"
          }
        ],
        "sentences": [
          {
            "target": "keng'alal — keru",
            "source": "Speak — Sleep"
          },
          {
            "target": "kenyone — kewe",
            "source": "Come — Go"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"keng'alal\" mean in English?",
            "correctAnswer": "Speak",
            "options": [
              "Speak",
              "Sleep",
              "Come",
              "Go"
            ],
            "hint": "Core vocabulary in Essential Action & Motion Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Sleep\"",
            "correctAnswer": "keru",
            "acceptedAnswers": [
              "keru (ru)",
              "keru"
            ],
            "hint": "Starts with \"ke\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kenyone\"",
            "correctAnswer": "Come",
            "acceptedAnswers": [
              "Come",
              "Come"
            ],
            "hint": "Review Essential Action & Motion Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Essential Action & Motion Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "keng'alal",
                "right": "Speak"
              },
              {
                "left": "keru",
                "right": "Sleep"
              },
              {
                "left": "kenyone",
                "right": "Come"
              },
              {
                "left": "kewe",
                "right": "Go"
              },
              {
                "left": "tep",
                "right": "Ask"
              }
            ]
          }
        ]
      },
      {
        "id": "kalenjin-verbs-grammar-verbal-derivatives-8",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "lima nyaman",
            "source": "Understand / hear thoroughly (Suk/Pokot comparative note in Barton 1921)",
            "pronunciation": "li-ma nya-man",
            "hint": "Juxon Barton (1921) — Suk/Pokot comparative note"
          },
          {
            "target": "i-ker-i-ke (ke-keer)",
            "source": "can you see for yourself (to see, look at)",
            "pronunciation": "i-ker-i-ke",
            "hint": "Nandi / Kalenjin (Hollis 1909, p. 152)"
          },
          {
            "target": "Kapkugo",
            "source": "ancestral homeland (lit. place of our grandfathers, Mount Elgon)",
            "pronunciation": "kapku-go",
            "hint": "Sabaot / Kalenjin"
          },
          {
            "target": "mugerat",
            "source": "Open",
            "pronunciation": "mu-ge-rat"
          },
          {
            "target": "rat (pr. a-rot-e, p.p. ka-a-rat)",
            "source": "Bind",
            "pronunciation": "rat"
          },
          {
            "target": "lapat (pr. a-lopot-i, p.p. ka-a-lapat)",
            "source": "Flee",
            "pronunciation": "lapat"
          },
          {
            "target": "par (pr. a-por-e, p.p. ka-a-par)",
            "source": "Kill",
            "pronunciation": "par"
          },
          {
            "target": "ñgêt (pr. a-ñgêt-e, p.p. ka-a-ñgêt)",
            "source": "Arise",
            "pronunciation": "nget"
          },
          {
            "target": "ñgêt / kas (pr. a-ñgêt-e, p.p. ka-a-ñgêt)",
            "source": "Awake",
            "pronunciation": "ngget"
          }
        ],
        "sentences": [
          {
            "target": "lima nyaman — i-ker-i-ke",
            "source": "Understand — can you see for yourself"
          },
          {
            "target": "Kapkugo — mugerat",
            "source": "ancestral homeland — Open"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"lima nyaman\" mean in English?",
            "correctAnswer": "Understand / hear thoroughly (Suk/Pokot comparative note in Barton 1921)",
            "options": [
              "Understand / hear thoroughly (Suk/Pokot comparative note in Barton 1921)",
              "can you see for yourself (to see, look at)",
              "ancestral homeland (lit. place of our grandfathers, Mount Elgon)",
              "Open"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"can you see for yourself (to see, look at)\"",
            "correctAnswer": "i-ker-i-ke",
            "acceptedAnswers": [
              "i-ker-i-ke (ke-keer)",
              "i-ker-i-ke"
            ],
            "hint": "Starts with \"i-\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Kapkugo\"",
            "correctAnswer": "ancestral homeland",
            "acceptedAnswers": [
              "ancestral homeland (lit. place of our grandfathers, Mount Elgon)",
              "ancestral homeland"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "lima nyaman",
                "right": "Understand"
              },
              {
                "left": "i-ker-i-ke",
                "right": "can you see for yourself"
              },
              {
                "left": "Kapkugo",
                "right": "ancestral homeland"
              },
              {
                "left": "mugerat",
                "right": "Open"
              },
              {
                "left": "rat",
                "right": "Bind"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-9",
    "title": "Unit 9: Time, Indigenous Calendar, Seasons & Navigation C. W. Hobley",
    "description": "Master time, indigenous calendar, seasons & navigation in Kalenjin built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), A. C. Hollis (1909), and Hon. K. R. Dundas (1910).",
    "icon": "Map",
    "skills": [
      {
        "id": "kalenjin-time-calendar-seasons-months-9",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "Kotisap (Kts)",
            "source": "Sunday (Day of the week)",
            "pronunciation": "ko-ti-sap",
            "hint": "Kalenjin — GitHub unicode-org/cldr (kln.xml), Common Voice CC0 & PanLex CC0"
          },
          {
            "target": "nguno; rani (to-day); nguni (at once)",
            "source": "Now",
            "pronunciation": "nguno"
          },
          {
            "target": "petōt",
            "source": "Day",
            "pronunciation": "pe-toh"
          },
          {
            "target": "korirun (korirunet)",
            "source": "Dawn",
            "pronunciation": "korirun"
          },
          {
            "target": "ek-chi (pr. oi-ek-chi-ni, p.p. koi-ek-chi)",
            "source": "Late",
            "pronunciation": "ek-chi"
          },
          {
            "target": "toma kitegin",
            "source": "Soon",
            "pronunciation": "to-ma ki-te-gin"
          },
          {
            "target": "oii (olto), pl. oltōs (oltōsiek)",
            "source": "Time",
            "pronunciation": "oii"
          },
          {
            "target": "keny (kenyīt), pl. kenyīs (kenyīsiek)",
            "source": "Year",
            "pronunciation": "keny"
          },
          {
            "target": "bēt",
            "source": "Noon",
            "pronunciation": "bet"
          }
        ],
        "sentences": [
          {
            "target": "Kotisap — nguno",
            "source": "Sunday — Now"
          },
          {
            "target": "petōt — korirun",
            "source": "Day — Dawn"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kotisap\" mean in English?",
            "correctAnswer": "Sunday (Day of the week)",
            "options": [
              "Sunday (Day of the week)",
              "Now",
              "Day",
              "Dawn"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Now\"",
            "correctAnswer": "nguno",
            "acceptedAnswers": [
              "nguno; rani (to-day); nguni (at once)",
              "nguno"
            ],
            "hint": "Starts with \"ng\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"petōt\"",
            "correctAnswer": "Day",
            "acceptedAnswers": [
              "Day",
              "Day"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Kotisap",
                "right": "Sunday"
              },
              {
                "left": "nguno",
                "right": "Now"
              },
              {
                "left": "petōt",
                "right": "Day"
              },
              {
                "left": "korirun",
                "right": "Dawn"
              },
              {
                "left": "ek-chi",
                "right": "Late"
              }
            ]
          }
        ]
      },
      {
        "id": "kalenjin-time-calendar-journey-navigation-9",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "Kotaai (Kot)",
            "source": "Monday (Day of the week)",
            "pronunciation": "ko-taai",
            "hint": "Kalenjin — GitHub unicode-org/cldr (kln.xml), Common Voice CC0 & PanLex CC0"
          },
          {
            "target": "Koaeng’ (Koo)",
            "source": "Tuesday (Day of the week)",
            "pronunciation": "koaeng’",
            "hint": "Kalenjin — GitHub unicode-org/cldr (kln.xml), Common Voice CC0 & PanLex CC0"
          },
          {
            "target": "Kosomok (Kos)",
            "source": "Wednesday (Day of the week)",
            "pronunciation": "ko-so-mok",
            "hint": "Kalenjin — GitHub unicode-org/cldr (kln.xml), Common Voice CC0 & PanLex CC0"
          },
          {
            "target": "Koang’wan (Koa)",
            "source": "Thursday (Day of the week)",
            "pronunciation": "koang’wan",
            "hint": "Kalenjin — GitHub unicode-org/cldr (kln.xml), Common Voice CC0 & PanLex CC0"
          },
          {
            "target": "Komuut (Kom)",
            "source": "Friday (Day of the week)",
            "pronunciation": "ko-muut",
            "hint": "Kalenjin — GitHub unicode-org/cldr (kln.xml), Common Voice CC0 & PanLex CC0"
          },
          {
            "target": "Kolo (Kol)",
            "source": "Saturday (Day of the week)",
            "pronunciation": "ko-lo",
            "hint": "Kalenjin — GitHub unicode-org/cldr (kln.xml), Common Voice CC0 & PanLex CC0"
          },
          {
            "target": "koron",
            "source": "Dawn",
            "pronunciation": "ko-ron"
          },
          {
            "target": "kaietita",
            "source": "Time",
            "pronunciation": "kaie-ti-ta"
          },
          {
            "target": "kenyit",
            "source": "Year",
            "pronunciation": "keny-it"
          }
        ],
        "sentences": [
          {
            "target": "Kotaai — Koaeng’",
            "source": "Monday — Tuesday"
          },
          {
            "target": "Kosomok — Koang’wan",
            "source": "Wednesday — Thursday"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kotaai\" mean in English?",
            "correctAnswer": "Monday (Day of the week)",
            "options": [
              "Monday (Day of the week)",
              "Tuesday (Day of the week)",
              "Wednesday (Day of the week)",
              "Thursday (Day of the week)"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Tuesday (Day of the week)\"",
            "correctAnswer": "Koaeng’",
            "acceptedAnswers": [
              "Koaeng’ (Koo)",
              "Koaeng’"
            ],
            "hint": "Starts with \"Ko\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Kosomok\"",
            "correctAnswer": "Wednesday",
            "acceptedAnswers": [
              "Wednesday (Day of the week)",
              "Wednesday"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Kotaai",
                "right": "Monday"
              },
              {
                "left": "Koaeng’",
                "right": "Tuesday"
              },
              {
                "left": "Kosomok",
                "right": "Wednesday"
              },
              {
                "left": "Koang’wan",
                "right": "Thursday"
              },
              {
                "left": "Komuut",
                "right": "Friday"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-10",
    "title": "Unit 10: Conversational Phrases, Idioms & Daily Dialogue C. W. Hobley",
    "description": "Master conversational phrases, idioms & daily dialogue in Kalenjin built directly from C. W. Hobley (1902), Sir Harry H. Johnston (1902), A. C. Hollis (1909), and Hon. K. R. Dundas (1910).",
    "icon": "MessageCircle",
    "skills": [
      {
        "id": "kalenjin-phrases-idioms-everyday-dialogue-10",
        "title": "Everyday Conversational Phrases & Questions",
        "icon": "CheckCircle2",
        "description": "Practice authentic questions, answers, and idiomatic expressions from historical phrasebooks.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "Ibinta",
            "source": "Era / historical age",
            "pronunciation": "i-binta",
            "hint": "Kalenjin — GitHub unicode-org/cldr (kln.xml), Common Voice CC0 & PanLex CC0"
          },
          {
            "target": "Betutab wikit",
            "source": "Day of the week",
            "pronunciation": "be-tu-tab wi-kit",
            "hint": "Kalenjin — GitHub unicode-org/cldr (kln.xml), Common Voice CC0 & PanLex CC0"
          },
          {
            "target": "Kalyet",
            "source": "Peace",
            "pronunciation": "kahl-yeht"
          },
          {
            "target": "Chamgei! / Sopai! (resp. Chamgei mising! / Epa!)",
            "source": "Hello",
            "pronunciation": "chahm-gey / soo-bah-ee"
          },
          {
            "target": "ikat (pr. a-'kot-i, p.p. ka-a-'kat)",
            "source": "Greet",
            "pronunciation": "ikat"
          }
        ],
        "sentences": [
          {
            "target": "Ibinta — Betutab wikit",
            "source": "Era — Day of the week"
          },
          {
            "target": "Kalyet — Chamgei!",
            "source": "Peace — Hello"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ibinta\" mean in English?",
            "correctAnswer": "Era / historical age",
            "options": [
              "Era / historical age",
              "Day of the week",
              "Peace",
              "Hello"
            ],
            "hint": "Core vocabulary in Everyday Conversational Phrases & Questions"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Day of the week\"",
            "correctAnswer": "Betutab wikit",
            "acceptedAnswers": [
              "Betutab wikit",
              "Betutab wikit"
            ],
            "hint": "Starts with \"Be\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Kalyet\"",
            "correctAnswer": "Peace",
            "acceptedAnswers": [
              "Peace",
              "Peace"
            ],
            "hint": "Review Everyday Conversational Phrases & Questions"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Everyday Conversational Phrases & Questions with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Ibinta",
                "right": "Era"
              },
              {
                "left": "Betutab wikit",
                "right": "Day of the week"
              },
              {
                "left": "Kalyet",
                "right": "Peace"
              },
              {
                "left": "Chamgei!",
                "right": "Hello"
              },
              {
                "left": "ikat",
                "right": "Greet"
              }
            ]
          }
        ]
      },
      {
        "id": "kalenjin-phrases-idioms-courtesy-discourse-10",
        "title": "Hospitality, Requests & Social Discourse",
        "icon": "Handshake",
        "description": "Converse naturally in home, village, market, and travel settings.",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Kalenjin (Kalenjin) in C. W. Hobley (1902, 1903), Sir Harry Johnston (1902), A. C. Hollis & Sir Charles Eliot (1909) & Hon. K. R. Dundas (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Uasin Gishu, Nandi, Kericho.",
        "words": [
          {
            "target": "ile-chi kongoi",
            "source": "Thank",
            "pronunciation": "ile-chi kongoi"
          },
          {
            "target": "inyol-chi (pr. inyol-chi-n, p.p. ka-inyol-chi)",
            "source": "Please",
            "pronunciation": "inyol-chi"
          },
          {
            "target": "Kongoi (Kongoi mising)",
            "source": "Thank you",
            "pronunciation": "kohn-goy mee-seeng"
          },
          {
            "target": "mwaete",
            "source": "Pardon, to",
            "pronunciation": "mwae-te"
          },
          {
            "target": "torokte",
            "source": "Salute, to",
            "pronunciation": "to-rokte"
          },
          {
            "target": "kale",
            "source": "Forgive, to",
            "pronunciation": "ka-le"
          },
          {
            "target": "kongoi; asai",
            "source": "Thank you, thanks",
            "pronunciation": "kongoi a-sai"
          },
          {
            "target": "Kalyet",
            "source": "Peace"
          },
          {
            "target": "pirir (ne-pirir)",
            "source": "Red",
            "pronunciation": "pee-reer"
          }
        ],
        "sentences": [
          {
            "target": "ile-chi kongoi — inyol-chi",
            "source": "Thank — Please"
          },
          {
            "target": "Kongoi — mwaete",
            "source": "Thank you — Pardon, to"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ile-chi kongoi\" mean in English?",
            "correctAnswer": "Thank",
            "options": [
              "Thank",
              "Please",
              "Thank you",
              "Pardon, to"
            ],
            "hint": "Core vocabulary in Hospitality, Requests & Social Discourse"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Please\"",
            "correctAnswer": "inyol-chi",
            "acceptedAnswers": [
              "inyol-chi (pr. inyol-chi-n, p.p. ka-inyol-chi)",
              "inyol-chi"
            ],
            "hint": "Starts with \", \""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Kongoi\"",
            "correctAnswer": "Thank you",
            "acceptedAnswers": [
              "Thank you",
              "Thank you"
            ],
            "hint": "Review Hospitality, Requests & Social Discourse"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Hospitality, Requests & Social Discourse with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ile-chi kongoi",
                "right": "Thank"
              },
              {
                "left": "inyol-chi",
                "right": "Please"
              },
              {
                "left": "Kongoi",
                "right": "Thank you"
              },
              {
                "left": "mwaete",
                "right": "Pardon, to"
              },
              {
                "left": "torokte",
                "right": "Salute, to"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-11-public-domain-corpus",
    "title": "Unit 11: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Kalenjin vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "skills": [
      {
        "id": "kalenjin-pd-corpus-11-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Kalenjin headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Kalenjin linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "oloitigo (oloitiget) (pl. oloitigōs (oloitigōsiek))",
            "source": "Zebra",
            "pronunciation": "o-loi-ti-go",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "neñgwañg (pl. chekwok)",
            "source": "Yours",
            "pronunciation": "nenggwangg",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "ñgwañg (pl. kwok)",
            "source": "Your",
            "pronunciation": "nggwangg",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "mining (pl. mingech)",
            "source": "Younger",
            "pronunciation": "mi-ning",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "amut; amt",
            "source": "Yesterday",
            "pronunciation": "a-mut",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "wei; weis",
            "source": "Yes",
            "pronunciation": "wei",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "keny (kenyīt) (pl. kenyīs (kenyīsiek))",
            "source": "Year",
            "pronunciation": "keny",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "ime (pr. a-'me-i, p.p. ka-a-'me)",
            "source": "Yawn",
            "pronunciation": "ime",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"oloitigo (oloitiget) (pl. oloitigōs (oloitigōsiek))\" in Kalenjin?",
            "correctAnswer": "Zebra",
            "options": [
              "Zebra",
              "Yours",
              "Your",
              "Younger"
            ],
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kalenjin term to its English meaning:",
            "correctAnswer": "oloitigo (oloitiget) (pl. oloitigōs (oloitigōsiek)): Zebra",
            "pairs": [
              {
                "left": "oloitigo (oloitiget) (pl. oloitigōs (oloitigōsiek))",
                "right": "Zebra"
              },
              {
                "left": "neñgwañg (pl. chekwok)",
                "right": "Yours"
              },
              {
                "left": "ñgwañg (pl. kwok)",
                "right": "Your"
              },
              {
                "left": "mining (pl. mingech)",
                "right": "Younger"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kalenjin term for \"Yesterday\": ___",
            "correctAnswer": "amut; amt",
            "options": [
              "amut; amt",
              "oloitigo (oloitiget) (pl. oloitigōs (oloitigōsiek))",
              "neñgwañg (pl. chekwok)",
              "ñgwañg (pl. kwok)"
            ],
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          }
        ]
      },
      {
        "id": "kalenjin-pd-corpus-11-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Kalenjin ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Kalenjin transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "akania (akaniat) (pl. akan (akanek))",
            "source": "Yam",
            "pronunciation": "a-ka-nia",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "nyulnyul-ke (pr. a-nyulnyul-i-ke, p.p. ka-a-nyulnyul-ke)",
            "source": "Writhe",
            "pronunciation": "nyulnyul-ke",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "sir (pr. a-sir-e, p.p. ka-a-sir)",
            "source": "Write",
            "pronunciation": "sir",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "walel (waleldo) (pl. waleluag (waleluagik))",
            "source": "Wrist",
            "pronunciation": "wa-lel",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "siriny (pr. a-siriny-i, p.p. ka-a-siriny)",
            "source": "Wrinkle",
            "pronunciation": "si-riny",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "yem-ak-e (pr. a-yem-at, p.p. ka-a-yem-ak-e)",
            "source": "Wriggle",
            "pronunciation": "yem-ak-e",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "o-kwet-ke (pr. ki-kwet-i-ke, p.p. ka-ki-kwet-ke)",
            "source": "Wrestle",
            "pronunciation": "o-kwet-ke",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "mô",
            "source": "Wound",
            "pronunciation": "mo",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"akania (akaniat) (pl. akan (akanek))\" in Kalenjin?",
            "correctAnswer": "Yam",
            "options": [
              "Yam",
              "Writhe",
              "Write",
              "Wrist"
            ],
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kalenjin term to its English meaning:",
            "correctAnswer": "akania (akaniat) (pl. akan (akanek)): Yam",
            "pairs": [
              {
                "left": "akania (akaniat) (pl. akan (akanek))",
                "right": "Yam"
              },
              {
                "left": "nyulnyul-ke (pr. a-nyulnyul-i-ke, p.p. ka-a-nyulnyul-ke)",
                "right": "Writhe"
              },
              {
                "left": "sir (pr. a-sir-e, p.p. ka-a-sir)",
                "right": "Write"
              },
              {
                "left": "walel (waleldo) (pl. waleluag (waleluagik))",
                "right": "Wrist"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kalenjin term for \"Wrinkle\": ___",
            "correctAnswer": "siriny (pr. a-siriny-i, p.p. ka-a-siriny)",
            "options": [
              "siriny (pr. a-siriny-i, p.p. ka-a-siriny)",
              "akania (akaniat) (pl. akan (akanek))",
              "nyulnyul-ke (pr. a-nyulnyul-i-ke, p.p. ka-a-nyulnyul-ke)",
              "sir (pr. a-sir-e, p.p. ka-a-sir)"
            ],
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-12-open-datasets-modern",
    "title": "Unit 12: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Kalenjin vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "skills": [
      {
        "id": "kalenjin-open-dataset-12-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Zap",
        "description": "Learn core Kalenjin verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Kalenjin dialects and everyday speech.",
        "words": [
          {
            "target": "iim (pr. a-iim-i, p.p. kâ-iim)",
            "source": "Worry",
            "pronunciation": "iim",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "kia (kiet) (pl. kias (kiasiek))",
            "source": "World",
            "pronunciation": "kia",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "poiisio (poiisiet) (pl. poiision (poiisionik))",
            "source": "Work",
            "pronunciation": "poii-sio",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "ñgolio (ñgoliot) (pl. ñgal (ñgalek))",
            "source": "Word",
            "pronunciation": "nggo-lio",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "tañgany (pr. a-toñgony-i, p.p. ka-a-tañgany)",
            "source": "Wonder",
            "pronunciation": "tanggany",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "korko (korket) (pl. korusio (korusiek))",
            "source": "Woman",
            "pronunciation": "korko",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "ponin",
            "source": "Wizard",
            "pronunciation": "po-nin",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "paorio (paoriot) (pl. paorin (paorīnik))",
            "source": "Witness",
            "pronunciation": "pao-rio",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"iim (pr. a-iim-i, p.p. kâ-iim)\" in Kalenjin?",
            "correctAnswer": "Worry",
            "options": [
              "Worry",
              "World",
              "Work",
              "Word"
            ],
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kalenjin term to its English meaning:",
            "correctAnswer": "iim (pr. a-iim-i, p.p. kâ-iim): Worry",
            "pairs": [
              {
                "left": "iim (pr. a-iim-i, p.p. kâ-iim)",
                "right": "Worry"
              },
              {
                "left": "kia (kiet) (pl. kias (kiasiek))",
                "right": "World"
              },
              {
                "left": "poiisio (poiisiet) (pl. poiision (poiisionik))",
                "right": "Work"
              },
              {
                "left": "ñgolio (ñgoliot) (pl. ñgal (ñgalek))",
                "right": "Word"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kalenjin term for \"Wonder\": ___",
            "correctAnswer": "tañgany (pr. a-toñgony-i, p.p. ka-a-tañgany)",
            "options": [
              "tañgany (pr. a-toñgony-i, p.p. ka-a-tañgany)",
              "iim (pr. a-iim-i, p.p. kâ-iim)",
              "kia (kiet) (pl. kias (kiasiek))",
              "poiisio (poiisiet) (pl. poiision (poiisionik))"
            ],
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          }
        ]
      },
      {
        "id": "kalenjin-open-dataset-12-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Kalenjin terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Kalenjin roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "imelel (pr. a-'melel-i, p.p. ka-a-'melel)",
            "source": "Withhold from",
            "pronunciation": "i-me-lel",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "res (pr. a-res-e, p.p. ka-a-res)",
            "source": "Wither",
            "pronunciation": "res",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "ponin (ponindet) (pl. pon (ponik))",
            "source": "Diviner",
            "pronunciation": "po-nin",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "mach (pr. a-moch-e, p.p. ka-a-mach)",
            "source": "Wish",
            "pronunciation": "mach",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "ipuch (pr. a-'puch-i, p.p. ka-a-'puch)",
            "source": "Wipe",
            "pronunciation": "i-puch",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "ñgwech (pr. a-ñgwech-e, p.p. ka-a-ñgwech)",
            "source": "Wink",
            "pronunciation": "nggwech",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "kepep (kepepchet) (pl. kepepai (kepepaiik))",
            "source": "Wing",
            "pronunciation": "ke-pep",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "target": "cheporor (chepororet) (pl. chepororōs (chepororōsiek))",
            "source": "Wind-pipe",
            "pronunciation": "che-po-ror",
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          }
        ],
        "sentences": [
          {
            "target": "imelel (pr. a-'melel-i, p.p. ka-a-'melel)",
            "source": "Withhold from"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"imelel (pr. a-'melel-i, p.p. ka-a-'melel)\" in Kalenjin?",
            "correctAnswer": "Withhold from",
            "options": [
              "Withhold from",
              "Wither",
              "Diviner",
              "Wish"
            ],
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kalenjin term to its English meaning:",
            "correctAnswer": "imelel (pr. a-'melel-i, p.p. ka-a-'melel): Withhold from",
            "pairs": [
              {
                "left": "imelel (pr. a-'melel-i, p.p. ka-a-'melel)",
                "right": "Withhold from"
              },
              {
                "left": "res (pr. a-res-e, p.p. ka-a-res)",
                "right": "Wither"
              },
              {
                "left": "ponin (ponindet) (pl. pon (ponik))",
                "right": "Diviner"
              },
              {
                "left": "mach (pr. a-moch-e, p.p. ka-a-mach)",
                "right": "Wish"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kalenjin term for \"Wipe\": ___",
            "correctAnswer": "ipuch (pr. a-'puch-i, p.p. ka-a-'puch)",
            "options": [
              "ipuch (pr. a-'puch-i, p.p. ka-a-'puch)",
              "imelel (pr. a-'melel-i, p.p. ka-a-'melel)",
              "res (pr. a-res-e, p.p. ka-a-res)",
              "ponin (ponindet) (pl. pon (ponik))"
            ],
            "hint": "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford, 1909 — Public Domain)"
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-12-hobley-1903",
    "title": "Unit 12: Hobley (1903) 8 Nandi Totems, Charms, Mika Ceremony & Ilet on Tinderet",
    "description": "Master the 8 Nandi totems, Lako/Savei migration from Mount Kamalinga, Solanum peace medicine, nditos pregnancy charms, the Mika ceremony, and the Kamililo legend of Ilet on Mount Tinderet from C. W. Hobley (1903).",
    "icon": "Sparkles",
    "skills": [
      {
        "id": "kalenjin-hobley-1903-12-1",
        "title": "8 Nandi Totems, Tinderet Ilet Legend & Customary Rites",
        "icon": "Shield",
        "description": "Learn the 8 Nandi totems (Magetiet to Beliot), the legend of Ilet on Mount Tinderet, and Nandi/Guasangishu charms and ceremonies recorded by Hobley (1903).",
        "tips": "C. W. Hobley (1903, pp. 332, 342–359) records the 8 Nandi totems (Magetiet, Leluot, Chebineret, Chebkukusiot, Chebkukuchet, Nyeretiat, Kungonyot, Beliot), the patronymic Arab ('son of', as in Arab Kibosone, Arab Kibei, Arabtalum, Arab Katum), the Oggiek hunters wounding the lightning spirit Ilet on Mount Tinderet, and the Lako/Savei traditions of Mount Kamalinga and Mount Elgon.",
        "words": [
          {
            "target": "Magetiet • Leluot • Chebineret • Chebkukusiot",
            "source": "Hyæna • Jackal • Kite • Buzzard (Nandi totems #1–4)",
            "pronunciation": "ma-ge-ti-et / le-lu-ot / che-bi-ne-ret / cheb-ku-ku-si-ot",
            "hint": "Hobley (1903, p. 348)"
          },
          {
            "target": "Chebkukuchet • Nyeretiat • Kungonyot • Beliot",
            "source": "Water tortoise • Chameleon • Crested crane • Elephant (Nandi totems #5–8; elephant may be eaten)",
            "pronunciation": "cheb-ku-ku-chet / nye-re-ti-at / ku-ngo-nyot / be-li-ot",
            "hint": "Hobley (1903, p. 348)"
          },
          {
            "target": "Ilet (Tinderet) • Oggiek (Wandorobbo) • Arab Kibosone",
            "source": "Spirit of lightning in the Mount Tinderet cave • Forest hunters who shot Ilet with poisoned arrows • Country where Ilet died (Arab = 'son of')",
            "pronunciation": "i-let / ti-nde-ret / og-gi-ek / a-rab ki-bo-so-ne",
            "hint": "Hobley (1903, p. 359 — Kamililo Nandi legend)"
          },
          {
            "target": "Lako & Savei (Kamalinga) • Nditos • Mika",
            "source": "Mount Elgon tribes migrated from Mount Kamalinga • Unmarried girls who lend leather tassels to a newly pregnant wife • Full-moon ceremony with miniature 3-ft Solanum huts",
            "pronunciation": "la-ko / sa-ve-i / ka-ma-li-nga / ndi-tos / mi-ka",
            "hint": "Hobley (1903, pp. 332, 345, 351–352)"
          },
          {
            "target": "Kerombas • Arab Kibei • Arabtalum • Arab Katum • Jenjoria",
            "source": "Five Nandi heads of families recorded in Hobley’s 1903 demographic census (15 wives, 39 children, 31 surviving)",
            "pronunciation": "ke-ro-mbas / a-rab ki-be-i / a-rab-ta-lum / a-rab ka-tum / je-njo-ri-a",
            "hint": "Hobley (1903, p. 356)"
          }
        ],
        "sentences": [
          {
            "target": "Arab Kibosone (Arab = lakwet-ap / son of).",
            "source": "Son of Kibosone — country where the lightning spirit Ilet died after being wounded by the Oggiek on Mount Tinderet (Hobley 1903, p. 359)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In the Kamililo Nandi legend recorded by C. W. Hobley (1903, p. 359), who descended in human form into a cave on Mount Tinderet causing incessant rain until wounded by the Oggiek (Wandorobbo) with poisoned arrows?",
            "correctAnswer": "Ilet (the spirit of lightning, who fled and died in Arab Kibosone's country)",
            "options": [
              "Ilet (the spirit of lightning, who fled and died in Arab Kibosone's country)",
              "Apōdtho (who descended to Ramogi Hill)",
              "Mgahanya (the rain-maker of Nyole)",
              "Muima (chief of Manga Hill)"
            ],
            "hint": "Hobley (1903, p. 359)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Nandi totem recorded by C. W. Hobley (1903, p. 348) with its English meaning:",
            "correctAnswer": "Magetiet: Hyæna",
            "pairs": [
              {
                "left": "Magetiet",
                "right": "Hyæna"
              },
              {
                "left": "Chebkukuchet",
                "right": "Water tortoise"
              },
              {
                "left": "Nyeretiat",
                "right": "Chameleon"
              },
              {
                "left": "Kungonyot",
                "right": "Crested crane"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-johnston-1902-nandi-kamasia-dorobo",
    "title": "Unit 14: Sir Harry Johnston (1902) Nandi, Kamásia & Dorobo — All 19 Conversational Sentences (p. 925), Set 2 Lexicon & Highland Ethnography",
    "description": "Master all 19 Nandi conversational sentences from p. 925 of Sir Harry Johnston's The Uganda Protectorate, Vol. II (1902), alongside Set 2 Nandi/Kamásia/Dorobo vocabulary (pp. 913–924) and Chapter XIX ethnography (pp. 855–884).",
    "icon": "Shield",
    "skills": [
      {
        "id": "kalenjin-johnston-1902-nandi-sentences-skill",
        "title": "All 19 Nandi Conversational Sentences (p. 925) & Set 2 Vocabulary",
        "icon": "MessageCircle",
        "description": "Practice every Nandi greeting, imperative, and conversational expression recorded on p. 925 of Johnston (1902).",
        "tips": "Notice how Nandi distinguishes singular and plural imperatives and salutations: Tiamge! (singular 'How do you do?') vs. Otyamge! (plural, with 2nd person plural prefix O-), and attaches reflexive -ge in Ribge! ('Take care!') and istoge ēñor! ('Get out of the road!').",
        "words": [
          {
            "target": "Tiamge (sg.), Otyamge (pl.) • Kongoi, Eñgōñgōi! • Kātigē! • Cōriōnyo! • Ñgō ni?",
            "source": "How do you do? (sg./pl.) • Thank you! • Goodbye! • My good friend! • Who is there?",
            "pronunciation": "ti-am-ge / o-tyam-ge / ko-ngoi / e-ngo-ngoi / ka-ti-ge / cho-rio-nyo / ngo ni",
            "hint": "Johnston (1902, Vol. II, p. 925)"
          },
          {
            "target": "Nyo cōk! • Kanyīte! • Mweīcī ko ganyā • Ui! • Iberber inye! • Ribge!",
            "source": "Come quickly! • Wait a bit! • Tell him to wait for me • Go away! • You're a fool! • Take care!",
            "pronunciation": "nyo chok / ka-nyi-te / mwei-chi ko ga-nya / ui / i-ber-ber i-nye / rib-ge",
            "hint": "Johnston (1902, Vol. II, p. 925)"
          },
          {
            "target": "Meūtye! • Sūt! • Indōē! • Isubō! • Kasā! • istoge ēñor! • Toñonye! • Kōnō pek āē",
            "source": "Don't forget • Lift it up • Go ahead! • Come behind me • Listen to me! • Get out of the road! • Stand still! • Give me water to drink",
            "pronunciation": "meu-tye / sut / in-do-e / i-su-bo / ka-sa / is-to-ge e-ngor / to-ngo-nye / ko-no pek a-e",
            "hint": "Johnston (1902, Vol. II, p. 925)"
          },
          {
            "target": "Lakwen na nyu • Teta kigei • Kejan • Kiebtó (virgin)",
            "source": "My child • Milch cow • Many • Young woman (virgin)",
            "pronunciation": "lak-wen na nyu / te-ta ki-gei / ke-jan / kieb-to",
            "hint": "Johnston (1902, Vol. II, Set 2, pp. 914–919)"
          }
        ],
        "sentences": [
          {
            "target": "Tiamge, Cōriōnyo! Kanyīte — kōnō pek āē. Kongoi, Eñgōñgōi! Kātigē!",
            "source": "How do you do, my good friend! Wait a bit — give me water to drink. Thank you! Goodbye! (Johnston 1902, p. 925)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Sir Harry Johnston's 'Additional Words and Sentences in Nandi' (The Uganda Protectorate, Vol. II, 1902, p. 925), how do you say 'Give me water to drink' and 'Tell him to wait for me'?",
            "correctAnswer": "'Kōnō pek āē' (Give me water to drink) and 'Mweīcī ko ganyā' (Tell him to wait for me)",
            "options": [
              "'Kōnō pek āē' (Give me water to drink) and 'Mweīcī ko ganyā' (Tell him to wait for me)",
              "'Injohi maōko!' and 'Tanyō nanu!'",
              "'istoge ēñor!' and 'Iberber inye!'",
              "'Toñonye!' and 'Meūtye!'"
            ],
            "hint": "See Johnston (1902, Vol. II, p. 925)"
          }
        ]
      }
    ]
  },
  {
    "id": "kalenjin-unit-hollis-1909-complete-monograph",
    "title": "Unit 15: A. C. Hollis & Sir Charles Eliot (1909) — Salutations, 17 Clans, 12 Months, 57 Proverbs, 76 Enigmas & 5 Interlinear Stories",
    "description": "Master Nandi salutations (Sopai! / Takwenya!), the 6 Emet counties, 15 Pororiet districts, 17 Oret clans, 7 Ipinda age-sets, 12 ecological months, 57 Atindonik proverbs, 76 Tongōchik enigmas, and 5 interlinear Nandi stories from A. C. Hollis (1909).",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "kalenjin-hollis-1909-monograph-mastery-skill",
        "title": "Salutations, Enigmas, Clans, Calendar & Interlinear Texts",
        "icon": "Sparkles",
        "description": "Practice authentic Nandi greetings, riddle formulas, clan names, calendar months, and verbs from Hollis (1909).",
        "tips": "In Nandi, men greet each other with 'Sopai!' (reply 'Eiko!'), whereas women and girls are greeted with 'Takwenya!' (reply 'Igo!'). For 'house', a man says 'ka / kaita' while a woman says 'ko / kot'.",
        "words": [
          {
            "target": "Sopai! — Eiko! • Takwenya! — Igo! • Kongoi! / Asai!",
            "source": "Men's greeting ('Greetings! — Reply!') • Women's greeting ('Greetings! — Reply!') • Thank you!",
            "pronunciation": "so-pai / ei-ko / ta-kwe-nya / i-go / ko-ngoi / a-sai",
            "hint": "Hollis (1909, pp. 84, 164, 229)"
          },
          {
            "target": "Tongoj! — Choo! / Ta-tuñguch! — Ki-sir-to; kōn-ech pororiet!",
            "source": "A riddle! — Say it! — We are defeated; give us a pororiet district!",
            "pronunciation": "to-ngoj / choo / ta-tu-nguch / ki-sir-to ko-nech po-ro-riet",
            "hint": "Hollis (1909, Tongōchik-ap-Nandi, p. 133)"
          },
          {
            "target": "Kiptamo, Iwat-kut, Wake, Ñgei, Rob-tui, Puret, Epeso, Kipsunde, Kipsunde oieng, Mulkul, Mulkulik oieng, Ñgotioto",
            "source": "The 12 Nandi ecological months (February to January)",
            "pronunciation": "kip-ta-mo / i-wat-kut / wa-ke / ngei / rob-tui / pu-ret / e-pe-so / kip-sun-de / mul-kul / ngo-tio-to",
            "hint": "Hollis (1909, pp. 94–95)"
          },
          {
            "target": "Maina, Nyonge, Kimnyike, Kâplelach, Kipkoiimet, Sowe, Juma (3 Fires: Changen-opir, Kipal-koñg, Kiptoito)",
            "source": "The 7 cyclic Nandi age-sets (Ipinda) and 3 warrior fires (Mostinuek)",
            "pronunciation": "mai-na / nyo-nge / kim-nyi-ke / kap-le-lach / kip-koii-met / so-we / ju-ma",
            "hint": "Hollis (1909, pp. 11–13)"
          }
        ],
        "sentences": [
          {
            "target": "Sopai, murén-ju! Takwenya, chepiosō-chu! Asis! kōn-ech sapon, ak tuka, ak cheko, ak lakōk!",
            "source": "Greetings, O warriors! Greetings, O women! O God (Asis), give us health, and cattle, and milk, and children! (Hollis 1909, pp. 41, 164)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In A. C. Hollis's 'The Nandi: Their Language and Folk-Lore' (1909, pp. 133, 163–164), what is the Nandi riddle challenge formula, and how do men vs. women say 'the house'?",
            "correctAnswer": "Riddle formula: 'Tongoj!' — 'Choo! / Ta-tuñguch!' — 'Ki-sir-to; kōn-ech pororiet!'; 'the house' is 'kaita' (spoken by a man) vs. 'kot' (spoken by a woman)",
            "options": [
              "Riddle formula: 'Tongoj!' — 'Choo! / Ta-tuñguch!' — 'Ki-sir-to; kōn-ech pororiet!'; 'the house' is 'kaita' (spoken by a man) vs. 'kot' (spoken by a woman)",
              "Riddle formula: 'Tiangoi!' — 'Tia!' — 'Donguch!'; 'the house' is 'manyatta' for both",
              "Riddle formula: 'Kweta ndai!' — 'Ndai!'; 'the house' is 'musi' for both",
              "Riddle formula: 'Kitendawili!' — 'Tega!'; 'the house' is 'nyumba' for both"
            ],
            "hint": "See Hollis (1909, pp. 133, 163)"
          }
        ]
      }
    ]
  }
];

// ── Unit 16: Complete Line-by-Line Integration of Joost Zwarts, Andrew Chelimo & Prisca Jerono's "The reflexive in Kalenjin: Its syntactic status and semantic functions" (Language Science Press, 2024, Ch. 21, pp. 539–556, DOI: 10.5281/zenodo.11210482) ──
if (KALENJIN_CONFIG.sources && !KALENJIN_CONFIG.sources.includes("zwarts-chelimo-jerono-kalenjin-reflexive-2024")) {
  KALENJIN_CONFIG.sources.push("zwarts-chelimo-jerono-kalenjin-reflexive-2024");
}

KALENJIN_UNITS.push({
  "id": "kalenjin-unit-16-zwarts-chelimo-jerono-2024",
  "title": "Unit 16: Zwarts, Chelimo & Jerono (2024) — The Reflexive in Kalenjin: Syntactic Status & Semantic Functions of kee(y) (pp. 539–556, Examples 1–24)",
  "description": "Master all 18 pages (pp. 539–556) of Joost Zwarts, Andrew Chelimo & Prisca Jerono's 2024 study 'The reflexive in Kalenjin: Its syntactic status and semantic functions' across Endo-Marakwet (1,815 NT tokens), Keiyo, Tugen, Pökoot, Nandi, Kipsigis, and Cherang'any: enclitic vs. suffix status, ATR opacity, nominal/prepositional/pronoun uses, middle voice & inanimate anticausatives, arity reduction, and three-way typological polysemy.",
  "icon": "BookOpen",
  "skills": [
    {
      "id": "kalenjin-zwarts-2024-enclitic-nonverbal-16-1",
      "title": "Syntactic Status of kee(y): Enclitic, ATR Opacity, Lexicalisation & Non-Verbal Uses (§§1–4, pp. 539–546, Examples 1–10)",
      "icon": "Layers",
      "description": "Learn why Kalenjin kee(y) ([kɛː], [kɛːj], Pökoot [kɛːx]) is a separate enclitic word rather than a verbal suffix, how it behaves in the 1,815-token Endo-Marakwet New Testament corpus, and how it combines with nominalisations, nouns, the preposition po, and pronouns across Examples (1)–(10).",
      "tips": "Two facts prove kee(y) is not a verbal suffix: (1) adverbs and subject pronouns can intervene between the verb and kee(y) (kaa-kee-syaak nyuun keey, Ex. 1a; a-kuskuus aneen keey, Ex. 1b), and (2) kee(y) is opaque to +ATR vowel harmony (toorēt keey vs. 1PL object suffix toorēt-ēēch, p. 542).",
      "words": [
        {
          "target": "(1a) kaa-kee-syaak nyuun keey • (1b) a-kuskuus aneen keey (Endo-Marakwet, p. 542)",
          "source": "we judged ourselves then (adverb nyuun intervenes) • I make myself weak (subject pronoun aneen intervenes)",
          "pronunciation": "kaa-kee-sya-ak nyu-un ke-ey / a-ku-sku-us a-ne-en ke-ey",
          "hint": "Zwarts, Chelimo & Jerono (2024, §3, p. 542, Example 1a–b)"
        },
        {
          "target": "ATR Opacity (p. 542): neet-eech ('teach us') vs. toorēt-ēēch ('help us') • neet keey & toorēt keey • Contemporative +ATR -yō / -sōōt: ng'eet ('stand up') → ng'ēētyō, ng'ēētsōōt",
          "source": "1PL suffix -eech and contemporative -yō/-sōōt harmonise in +ATR, whereas enclitic keey remains −ATR like pronominals in (2a–c) (āmāraa, kichāmēēchaan, āchāmēēkwaan, keemwaanyēēn; wēēchiikwaak, mālāktiing'waang', koonēētiisyeenyiin; kookeelyaanoonēē, taapukeechoochēē, paannyēēnyi)",
          "pronunciation": "ne-et-e-ech / too-rē-t-ē-ēch / ne-et ke-ey / too-rēt ke-ey / ng'ē-ēt-yō",
          "hint": "Zwarts, Chelimo & Jerono (2024, §3, pp. 542–543, Example 2a–c; citing Lodge 1995, Rottland 1982: 229 & Zwarts et al. 2023)"
        },
        {
          "target": "Lexicalised Stems (pp. 541, 543) & (3) i-kerkeéy keè laak-o-chu (Keiyo, p. 543) • (4a) Ki-ng'war ng'oo cheepyoos-ee? Ki-ng'war kee. • (4b) Ki-iim ng'oo piichooto? Ki-iim kee. (Keiyo, p. 544)",
          "source": "karkeey ('be like' → karkayiit, kārkēēyin), cheepaykeey(aan) ('prostitute'), peerkeey(aan) ('virgin'), kimekeyaan / kipekeyaan ('selfish person') • (3) These kids are copying each other (to look the same) • (4a–b) Who did the lady scratch? (She scratched) herself • Who did those people annoy? (They annoyed) each other",
          "pronunciation": "i-ker-ke-ey ke-e laa-ko-chu / ki-ng'war kee / ki-iim kee",
          "hint": "Zwarts, Chelimo & Jerono (2024, §§2–3, pp. 541, 543–544, Examples 3–4)"
        },
        {
          "target": "(5a) las-at-aa keey • (5b) riip-ot-oo keey (Endo-Marakwet) • (5c) toorēt-ēēt-aap keey • (5d) wiirun-ēēt-aap keey • (6) las-keey-nat-ēēt (Tugen, pp. 544–545)",
          "source": "(5a) praise of oneself, i.e. pride • (5b) guarding of oneself, self-control • (5c) the helping of each other, collaboration • (5d) the falling, lit. throwing of oneself • (6) praise of oneself, i.e. pride (internal lexicalised stem)",
          "pronunciation": "la-sa-taa ke-ey / rii-po-too ke-ey / too-rē-tē-ē-taap ke-ey / wii-ru-nē-ē-taap ke-ey / las-ke-ey-na-tē-ēt",
          "hint": "Zwarts, Chelimo & Jerono (2024, §4, pp. 544–545, Examples 5–6)"
        },
        {
          "target": "(7) ki-sooman Kiptuum ak Kipēēt kitaapuu-syek-aap keey (Tugen) • (8) ma-po keey chii (Tugen) • (9a) a-riir-ee keey ākōō laak-ōō-k-wook vs. (9b) *a-riir-ee laak-ōō-k-wook ākōō keey • (10a) inyēēn keey • (10b) a-ku-ng'ālool-chi akwaaneek keey (Endo-Marakwet, pp. 545–546)",
          "source": "(7) Kiptum and Kibet read their own/each other's books • (8) No man is an island (lit. of himself) • (9a) Weep about yourself and your children • (10a) (Who came?) Only him • (10b) and he spoke to them privately",
          "pronunciation": "ki-soo-man kip-tuum ak ki-pē-ēt ki-taa-puu-syek-aap ke-ey / ma-po ke-ey chii / i-nyē-ēn ke-ey",
          "hint": "Zwarts, Chelimo & Jerono (2024, §4, pp. 545–546, Examples 7–10)"
        }
      ],
      "sentences": [
        {
          "target": "kaa-kee-syaak nyuun keey (p. 542) • ma-po keey chii (p. 545) • las-at-aa keey & riip-ot-oo keey (p. 544)",
          "source": "We judged ourselves then • No man is an island (lit. of himself) • Praise of oneself (pride) & guarding of oneself (self-control)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Joost Zwarts, Andrew Chelimo & Prisca Jerono (2024, §§2–3, pp. 541–544), what are the two primary morphosyntactic arguments showing that Kalenjin 'kee(y)' is not a verbal suffix, and how many occurrences were found in the Endo-Marakwet New Testament?",
          "correctAnswer": "(1) Words such as adverbs ('nyuun' in Ex. 1a) and subject pronouns ('aneen' in Ex. 1b) can intervene between the verb and 'kee(y)', and (2) 'kee(y)' is opaque to +ATR vowel harmony ('toorēt keey' vs. 'toorēt-ēēch'); out of 1,815 occurrences in the Endo-Marakwet NT, 1,653 are written as a separate word and 162 occur in the lexicalised stems 'karkeey', 'cheepaykeey', and 'peerkeey'",
          "options": [
            "(1) Words such as adverbs ('nyuun' in Ex. 1a) and subject pronouns ('aneen' in Ex. 1b) can intervene between the verb and 'kee(y)', and (2) 'kee(y)' is opaque to +ATR vowel harmony ('toorēt keey' vs. 'toorēt-ēēch'); out of 1,815 occurrences in the Endo-Marakwet NT, 1,653 are written as a separate word and 162 occur in the lexicalised stems 'karkeey', 'cheepaykeey', and 'peerkeey'",
            "'kee(y)' always precedes the verb at the start of a sentence and harmonises in +ATR with every verb root",
            "'kee(y)' only occurs with nouns and never with verbs in the Endo-Marakwet New Testament",
            "'kee(y)' can stand alone as a single-word fragment answer to a 'who' question"
          ],
          "hint": "See Zwarts, Chelimo & Jerono (2024, §§2–3, pp. 541–544)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each non-verbal or enclitic example from Sections 3–4 of Zwarts, Chelimo & Jerono (2024, pp. 542–546) with its exact English translation:",
          "correctAnswer": "(1a) kaa-kee-syaak nyuun keey (Endo-Marakwet, p. 542): 'we judged ourselves then'",
          "pairs": [
            {
              "left": "(1a) kaa-kee-syaak nyuun keey (Endo-Marakwet, p. 542)",
              "right": "'we judged ourselves then'"
            },
            {
              "left": "(3) i-kerkeéy keè laak-o-chu (Keiyo, p. 543)",
              "right": "'These kids are copying each other (to look the same)'"
            },
            {
              "left": "(5b) riip-ot-oo keey (Endo-Marakwet) & (5c) toorēt-ēēt-aap keey (Tugen, p. 544)",
              "right": "'guarding of oneself, self-control' & 'the helping of each other, collaboration'"
            },
            {
              "left": "(8) ma-po keey chii (Tugen, p. 545)",
              "right": "'No man is an island (lit. of himself)'"
            }
          ]
        }
      ]
    },
    {
      "id": "kalenjin-zwarts-2024-middle-arity-intensifier-16-2",
      "title": "Middle Voice, Inanimate Anticausatives, Arity Reduction & Pronoun Intensification (§§5–7, pp. 546–556, Examples 11–24)",
      "icon": "Compass",
      "description": "Master the middle voice categories of kee(y) (Kemmer 1993), inanimate anticausatives (Ex. 15), contemporative natural reciprocals (-yō / -sōōt, Ex. 16–17), syntactic arity reduction (Ex. 18–22), pronoun intensification (Ex. 23–24), and the typological conclusions of Zwarts, Chelimo & Jerono (2024).",
      "tips": "In Kalenjin, kee(y) expresses both direct reflexive/reciprocal and Kemmer (1993) middle meanings—including inanimate anticausatives like roong' kee kārātiik ('the blood gushed') and choor kee asiis ('the sun rose')—AND acts as an intensifying adjunct on pronouns (Ā-ām-iisyēy ani-kee 'I am eating by myself/alone'), counterexemplifying König & Siemund (2000: 59) and Kemmer (1993: 196).",
      "words": [
        {
          "target": "(11a) ā-ng'ālool-ēē keey ('I am talking about myself') • (11b) a-taakwees keey ('greet each other!') • neet keey ('teach oneself' → 'learn', pp. 546–547)",
          "source": "Reflexive, reciprocal, and cognitive middle uses of keey in Endo-Marakwet",
          "pronunciation": "ā-ng'ā-loo-lē-ē ke-ey / a-taa-kwe-es ke-ey / ne-et ke-ey",
          "hint": "Zwarts, Chelimo & Jerono (2024, §5, pp. 546–547, Example 11)"
        },
        {
          "target": "(13a–f) Endo-Marakwet Middle Categories (p. 547): Spontaneous: takus keey ('drown'), wiiru keey ('fall') • Collective: rum keey, ruruuk keey, tuuyo keey ('gather'), pēēsyō keey ('separate') • Non-translational motion: walak keey ('turn'), ng'uruuk keey ('bend') • Translational motion: wēēchi keey ('go'), ng'unta keey ('walk quickly') • Emotion: iim keey ('worry'), las keey ('boast') • Grooming: uun keey ('wash'), laak keey ('dress')",
          "source": "Complete classification of Endo-Marakwet middle voice constructions with keey following Kemmer (1993)",
          "pronunciation": "ta-kus ke-ey / wii-ru ke-ey / rum ke-ey / wa-lak ke-ey / ng'u-ru-uk ke-ey / wē-ē-chi ke-ey / u-un ke-ey / la-ak ke-ey",
          "hint": "Zwarts, Chelimo & Jerono (2024, §5, p. 547, Example 13a–f)"
        },
        {
          "target": "(14a–b) Keiyo Posture & Body Activity (p. 548): tēēp kee ('sit down'), teleel kee ('stand up') • sus kee ('[body] itch'), liil kee ('[teeth] ache') | (15a–d) Keiyo Inanimate Anticausatives (p. 548): (15a) roong' kee kārātiik • (15b) choor kee asiis • (15c) tum kee pēy • (15d) mil kee koyin",
          "source": "(14a–b) Sit down, stand up • itch, ache | (15a) the blood gushed • (15b) the sun rose • (15c) water poured • (15d) stones fell",
          "pronunciation": "tē-ēp kee / te-le-el kee / ro-ong' kee kā-rā-ti-ik / cho-or kee a-si-is / tum kee pēy / mil kee ko-yin",
          "hint": "Zwarts, Chelimo & Jerono (2024, §5, p. 548, Examples 14–15)"
        },
        {
          "target": "(16) Contemporative -yō Natural Reciprocals (p. 549): choomnyō ('reconcile'), chuunchuunnyō ('disagree'), tuupchō ('be brothers'), pēēsyō ('disperse'), pooryō ('fight'), tēēniityō ('be equal'), tuuyō ('meet') • (17a) si-mē-ē-tēēniit-yō keey nkōō chiitō aka • (17b) kii nēē kaa-kuu-tuu-yō keey pi-choochēē",
          "source": "Natural reciprocal verbs in -yō (Rottland 1982: 127) and their causative/anticausative alternants with keey: (17a) 'so that you do not compare yourself with somebody else' • (17b) 'when those people had assembled'",
          "pronunciation": "cho-om-nyō / tu-up-chō / pē-ēs-yō / po-or-yō / tē-ē-ni-it-yō / tu-u-yō",
          "hint": "Zwarts, Chelimo & Jerono (2024, §5, pp. 548–549, Examples 16–17)"
        },
        {
          "target": "(18a) si-ku-ng'ālool-chi keey • (18b) ku-ung'-a keey akwaaneek • (18c) chēēr-ēēn-ook keey • (19a) a-ku-wēē-chi keey • (19b) paani kaa-ku-pēē-chi keey saang' vs. (19c) ku-pa saang' • (20a) ki-ng'wār-chin-i kee John patay • (20b) ng'wār-chin-i kee pātooy (pp. 549–551)",
          "source": "(18a) so that he talks to himself • (18b) he hid himself for them • (18c) strengthen oneself with you • (19a) and he went away • (19b) when they had gone outside • (20a) John was scratching his own back • (20b) They were scratching each other's backs",
          "pronunciation": "si-ku-ng'ā-lool-chi ke-ey / ku-u-ng'a ke-ey a-kwaa-ne-ek / ki-ng'wār-chi-ni kee john pa-tay",
          "hint": "Zwarts, Chelimo & Jerono (2024, §6, pp. 549–551, Examples 18–20)"
        },
        {
          "target": "(21a–c) ki-chām-ē keey acheek eng' acheek / o-chām-ē keey okweek eng' okweek / chām-ē keey icheek eng' icheek • (22) ak o-tēpii eng' kaalyeet okweeke eng' okweeke • (23) Ā-ām-iisyēy ani-kee • (24a) Ki-mwoo-chi Mary tiip-ik akopo ichee-keey • (24b) ki-sooman kitapuu-syek-aap ichee-keey (pp. 551–553)",
          "source": "(21a–c) We / You / They love each other • (22) and stay in peace with one another • (23) I am eating by myself/alone/without help • (24a) Mary told the girls about themselves • (24b) They read each other's books",
          "pronunciation": "ki-chā-mē ke-ey a-che-ek eng' a-che-ek / ā-ā-mii-syēy a-ni-ke-e / i-che-e-ke-ey",
          "hint": "Zwarts, Chelimo & Jerono (2024, §6, pp. 551–553, Examples 21–24; plus fn. 11 p. 552 contrasting demonstrative Cherang'any kɛy / Endo-Marakwet kay and §7 p. 554 competing emphatics kipaat & ākityōōn)"
        }
      ],
      "sentences": [
        {
          "target": "roong' kee kārātiik • choor kee asiis • tum kee pēy • mil kee koyin (Keiyo, p. 548) • Ā-ām-iisyēy ani-kee (Keiyo, p. 552)",
          "source": "The blood gushed • The sun rose • Water poured • Stones fell (inanimate anticausatives) • I am eating by myself/alone/without help (pronoun intensifier)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "Why does the polysemy of Kalenjin 'kee(y)' documented by Zwarts, Chelimo & Jerono (2024, §7, p. 553) challenge the typological generalisations of König & Siemund (2000: 59) and Kemmer (1993: 196)?",
          "correctAnswer": "Because König & Siemund (2000: 59) and Kemmer (1993: 196) claim that a language may have either emphatic/direct-reflexive polysemy or direct-reflexive/middle polysemy, but not a three-way polysemy combining intensifier (emphatic), reflexive/reciprocal, and derived-intransitivity (middle) functions—all three of which are united in Kalenjin 'kee(y)'",
          "options": [
            "Because König & Siemund (2000: 59) and Kemmer (1993: 196) claim that a language may have either emphatic/direct-reflexive polysemy or direct-reflexive/middle polysemy, but not a three-way polysemy combining intensifier (emphatic), reflexive/reciprocal, and derived-intransitivity (middle) functions—all three of which are united in Kalenjin 'kee(y)'",
            "Because Kalenjin has no middle voice or reciprocal constructions",
            "Because 'kee(y)' only occurs with inanimate subjects",
            "Because 'kee(y)' inflects for singular, dual, and plural number in all Kalenjin dialects"
          ],
          "hint": "See Zwarts, Chelimo & Jerono (2024, §7, p. 553)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each Keiyo, Tugen, or Endo-Marakwet example from Sections 5–6 of Zwarts, Chelimo & Jerono (2024, pp. 547–553) with its exact translation and semantic function:",
          "correctAnswer": "(15a) roong' kee kārātiik & (15b) choor kee asiis (Keiyo, p. 548): 'the blood gushed' & 'the sun rose' — inanimate anticausative middle",
          "pairs": [
            {
              "left": "(15a) roong' kee kārātiik & (15b) choor kee asiis (Keiyo, p. 548)",
              "right": "'the blood gushed' & 'the sun rose' — inanimate anticausative middle"
            },
            {
              "left": "(16) choomnyō, chuunchuunnyō, tuupchō, pēēsyō, pooryō, tēēniityō, tuuyō (Endo-Marakwet, p. 549)",
              "right": "'reconcile, disagree, be brothers, disperse, fight, be equal, meet' — natural reciprocals in contemporative -yō"
            },
            {
              "left": "(20a) ki-ng'wār-chin-i kee John patay (Keiyo, p. 551)",
              "right": "'John was scratching his own back' — external possessor saturated via dative -chi"
            },
            {
              "left": "(23) Ā-ām-iisyēy ani-kee (Keiyo, p. 552)",
              "right": "'I am eating by myself/alone/without help' — non-arity-reducing pronoun intensifier"
            }
          ]
        }
      ]
    }
  ]
});
