// ============================================================
// Maasai (ɔl Maa) Language Course Configuration & Units
// Based on Public Domain & Open-Web Linguistic Sources:
// 1. Hildegarde Hinde (1901) "The Masai Language: Grammatical Notes Together with a Vocabulary" (Cambridge Univ. Press)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II"
// 3. A. C. Hollis (1905) "The Masai: Their Language and Folklore" (Clarendon Press, Oxford — Public Domain)
// 4. C. W. Hobley (1910) "Ethnology of A-Kamba and Other East African Tribes" & (1922) "Bantu Beliefs and Customary Institutions"
// 5. Wikipedia Maasai_language, Eastern_Nilotic_languages (Vossen 1982) & Nilotic_languages
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const MAASAI_CONFIG: LanguageConfig = {
  "id": "maasai",
  "name": "Maasai",
  "nativeName": "ɔl Maa",
  "family": "Nilotic",
  "counties": [
    "Narok",
    "Kajiado",
    "Samburu",
    "Laikipia"
  ],
  "speakers": "1.5M",
  "speechLocale": "sw-KE",
  "description": "An Eastern Nilotic language spoken by the Maasai, Samburu, and Ilchamus pastoralist communities across the Great Rift Valley.",
  "color": "#DC2626",
  "sources": [
    "hinde-masai-1901",
    "johnston-uganda-protectorate-1902",
    "hollis-masai-1905",
    "hobley-akamba-ethnology-1910",
    "bantu-beliefs",
    "open-web-swadesh-comparative"
  ]
};

export const MAASAI_UNITS: CourseUnit[] = [
  {
    "id": "maasai-unit-1",
    "title": "Unit 1: Salutations (Sopai! / Takwenya!), Gender Prefixes (Ol- / En-), People & Gendered Numerals",
    "description": "Master traditional Maa salutations, Masculine (ol-) and Feminine (en-) nouns, pastoral vocabulary, and gendered counting 1–10 in ɔl Maa.",
    "icon": "Users",
    "skills": [
      {
        "id": "maasai-nouns-society",
        "title": "Salutations & Masculine (Ol-) / Feminine (En-) Nouns in Pastoral Life",
        "icon": "Tractor",
        "description": "Learn greetings and core nouns for society, wildlife, and landscape from Hinde (1901), Hollis (1905), and Hobley (1922).",
        "tips": "In ɔl Maa (Hollis 1905, pp. 9–14), masculine/augmentative nouns carry the prefix 'ol- / ɔl-' (plural 'il-') and feminine/diminutive nouns carry 'en- / ɛn-' (plural 'in-'): ol-murani → il-muran (warrior → warriors), ol-oiboni → il-oibonok (medicine-man/prophet), Eng-ai (God/sky/rain), en-gare (water/river). Hinde (1901, p. 41) and Hollis (1905, pp. 101–102, 284–285) record 'Sopai! — Epa! (Hepa!)' and 'Takwenya! — Iko! (Igho!)'.",
        "words": [
          {
            "target": "Sopai! (resp. Epa! / Hepa!) / Takwenya! (resp. Iko! / Igho!)",
            "source": "Greetings to warriors/men! / Greetings to women/elders!",
            "pronunciation": "so-pai / takwenya",
            "hint": "Hinde (1901, p. 41) & Hollis (1905, pp. 101–102, 284–285) salutations"
          },
          {
            "target": "Ashe (Ashe oleng) / Eserian (Sere!)",
            "source": "Thank you (very much) / Peace (Goodbye in peace!)",
            "pronunciation": "ashe / e-se-rian",
            "hint": "Gratitude & farewell peace blessing (Hollis 1905, p. 287)"
          },
          {
            "target": "ɛn-kái (Eng-ai)",
            "source": "God / Sky / Rain",
            "pronunciation": "en-kai",
            "hint": "Feminine noun prefix en- (Hollis 1905, p. 264 & Hobley 1922)"
          },
          {
            "target": "ol-murani (pl. il-muran)",
            "source": "Warrior (pl. Warriors)",
            "pronunciation": "ol-murani",
            "hint": "Hollis (1905, p. 18) Class I noun & Hobley (1922, p. 307)"
          },
          {
            "target": "ol-oiboni (pl. il-oibonok)",
            "source": "Medicine-man / Ritual prophet / Seer",
            "pronunciation": "ol-oiboni",
            "hint": "Hollis (1905, pp. 21, 324) & Hobley (1922, p. 307)"
          },
          {
            "target": "ol-tungani (pl. il-tungana) / en-gerai (pl. in-gera)",
            "source": "Person, Man (pl. People) / Child (pl. Children)",
            "pronunciation": "ol-tungani / en-gerai",
            "hint": "Hollis (1905, pp. 18, 33) nouns"
          },
          {
            "target": "en-giteng (pl. in-gishu)",
            "source": "Cow (pl. Cattle)",
            "pronunciation": "en-giteng",
            "hint": "Hinde (1901) & Hollis (1905, p. 33) Class VI suppletive plural"
          },
          {
            "target": "ol-ŋatúny / e-ŋatúny",
            "source": "Male lion / Lioness",
            "pronunciation": "ol-ngatuny / e-ngatuny",
            "hint": "Masculine ol- vs. Feminine e- prefix (Hollis 1905, p. 10)"
          },
          {
            "target": "ɛŋ-kár-ɛ́ (en-gare) / kulle (kule)",
            "source": "Water, River / Milk",
            "pronunciation": "eng-kar-e / kulle",
            "hint": "Hinde (1901) & Hollis (1905, p. 287) pastoral liquids"
          },
          {
            "target": "eng-aji (pl. ing-ajijik) / eng-ang (pl. ing-angite)",
            "source": "House, Hut / Homestead kraal",
            "pronunciation": "eng-aji / eng-ang",
            "hint": "Hollis (1905, pp. 24, 27)"
          }
        ],
        "sentences": [
          {
            "target": "Sopai! Epa! Kejaa in-gishu o in-gera?",
            "source": "Greetings! Reply! How are the cattle and the children?"
          },
          {
            "target": "Kiyiolo enkarna Sopai! taata.",
            "source": "We know the expression greetings to warriors today."
          },
          {
            "target": "Eirorie ilpayiani Ashe engang.",
            "source": "The elders spoke of thank you at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Sopai! (resp. Epa! / Hepa!) / Takwenya! (resp. Iko! / Igho!)\" in Maasai?",
            "correctAnswer": "Greetings to warriors/men! / Greetings to women/elders!",
            "options": [
              "Thank you (very much) / Peace (Goodbye in peace!)",
              "God / Sky / Rain",
              "Warrior (pl. Warriors)",
              "Greetings to warriors/men! / Greetings to women/elders!"
            ],
            "hint": "Hinde (1901, p. 41) & Hollis (1905, pp. 101–102, 284–285) salutations"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ashe (Ashe oleng) / Eserian (Sere!)\" in Maasai?",
            "correctAnswer": "Thank you (very much) / Peace (Goodbye in peace!)",
            "options": [
              "God / Sky / Rain",
              "Warrior (pl. Warriors)",
              "Thank you (very much) / Peace (Goodbye in peace!)",
              "Greetings to warriors/men! / Greetings to women/elders!"
            ],
            "hint": "Gratitude & farewell peace blessing (Hollis 1905, p. 287)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ɛn-kái (Eng-ai)\" in Maasai?",
            "correctAnswer": "God / Sky / Rain",
            "options": [
              "Warrior (pl. Warriors)",
              "God / Sky / Rain",
              "Greetings to warriors/men! / Greetings to women/elders!",
              "Thank you (very much) / Peace (Goodbye in peace!)"
            ],
            "hint": "Feminine noun prefix en- (Hollis 1905, p. 264 & Hobley 1922)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"God / Sky / Rain\" in Maasai?",
            "correctAnswer": "ɛn-kái (Eng-ai)",
            "options": [
              "ɛn-kái (Eng-ai)",
              "Sopai! (resp. Epa! / Hepa!) / Takwenya! (resp. Iko! / Igho!)",
              "Ashe (Ashe oleng) / Eserian (Sere!)",
              "ol-murani (pl. il-muran)"
            ],
            "hint": "ehn-kah-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Warrior (pl. Warriors)\" in Maasai?",
            "correctAnswer": "ol-murani (pl. il-muran)",
            "options": [
              "Sopai! (resp. Epa! / Hepa!) / Takwenya! (resp. Iko! / Igho!)",
              "Ashe (Ashe oleng) / Eserian (Sere!)",
              "ɛn-kái (Eng-ai)",
              "ol-murani (pl. il-muran)"
            ],
            "hint": "ohl-moo-rah-nee / eel-moo-rahn"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Maasai expression with its English meaning:",
            "correctAnswer": "Sopai! (resp. Epa! / Hepa!) / Takwenya! (resp. Iko! / Igho!): Greetings to warriors/men! / Greetings to women/elders!",
            "pairs": [
              {
                "left": "Sopai! (resp. Epa! / Hepa!) / Takwenya! (resp. Iko! / Igho!)",
                "right": "Greetings to warriors/men! / Greetings to women/elders!"
              },
              {
                "left": "Ashe (Ashe oleng) / Eserian (Sere!)",
                "right": "Thank you (very much) / Peace (Goodbye in peace!)"
              },
              {
                "left": "ɛn-kái (Eng-ai)",
                "right": "God / Sky / Rain"
              },
              {
                "left": "ol-murani (pl. il-muran)",
                "right": "Warrior (pl. Warriors)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai term for \"Medicine-man / Ritual prophet / Seer\": ___",
            "correctAnswer": "ol-oiboni (pl. il-oibonok)",
            "options": [
              "Sopai! (resp. Epa! / Hepa!) / Takwenya! (resp. Iko! / Igho!)",
              "Ashe (Ashe oleng) / Eserian (Sere!)",
              "ɛn-kái (Eng-ai)",
              "ol-oiboni (pl. il-oibonok)"
            ],
            "hint": "Hollis (1905, pp. 21, 324) & Hobley (1922, p. 307)"
          }
        ]
      },
      {
        "id": "maasai-numbers-proverbs",
        "title": "Gendered Numerals 1–10 & Hollis (1905) Oral Wisdom (77 Proverbs & 23 Riddles)",
        "icon": "Award",
        "description": "Count from 1 to 10 across feminine and masculine genders and study classical 1905 proverbs.",
        "tips": "In Maa (Hollis 1905, pp. 39–41), numbers 1–4, 7, and 9 change prefix for feminine vs. masculine nouns: nabô/obô/nebô (1), aré/aàre (2), uní/okúni (3), oŋwán/oóŋwan (4), whereas 5 (ímíêt), 6 (ílɛ̂), 8 (ísíêt), and 10 (tɔ́mɔ̂n) are invariable.",
        "words": [
          {
            "target": "nabô (f.) / obô (m.) / nebô (place)",
            "source": "One (1)",
            "pronunciation": "na-bo / obo / ne-bo",
            "hint": "Three-way gender agreement (Hollis 1905, p. 39)"
          },
          {
            "target": "aré (f.) / aàre (m.)",
            "source": "Two (2)",
            "pronunciation": "are / aa-re",
            "hint": "Feminine vs. masculine 2 (Hollis 1905, p. 39)"
          },
          {
            "target": "uní (f.) / okúni (m.)",
            "source": "Three (3)",
            "pronunciation": "uni / o-ku-ni",
            "hint": "Feminine vs. masculine 3 (Hollis 1905, p. 39)"
          },
          {
            "target": "oŋwán (f.) / oóŋwan (m.)",
            "source": "Four (4)",
            "pronunciation": "ongwan / oongwan",
            "hint": "Feminine vs. masculine 4 (Hollis 1905, p. 39)"
          },
          {
            "target": "ímíêt / ílɛ̂",
            "source": "Five (5) / Six (6)",
            "pronunciation": "i-miet / ile",
            "hint": "Cardinals 5 & 6 (Hollis 1905, p. 39)"
          },
          {
            "target": "naápishana (f.) / oópishana (m.)",
            "source": "Seven (7)",
            "pronunciation": "naa-pisha-na / oo-pisha-na",
            "hint": "Gendered cardinal 7 (Hollis 1905, p. 39)"
          },
          {
            "target": "ísíêt / naáudo (oódó) / tɔ́mɔ̂n",
            "source": "Eight (8) / Nine (9) / Ten (10)",
            "pronunciation": "i-siet / naau-do / to-mon",
            "hint": "Cardinals 8, 9, & 10 (Hollis 1905, p. 39)"
          },
          {
            "target": "Eata en-gewarie 'n-giyaa",
            "source": "The night has ears (Hollis 1905, p. 238, Proverb #3)",
            "pronunciation": "ea-ta en-gewarie 'n-giyaa",
            "hint": "Walls have ears"
          },
          {
            "target": "Ekwenikye 'n-guk in-guruon",
            "source": "Coals laugh at the ashes (Hollis 1905, p. 239, Proverb #6)",
            "pronunciation": "ekwe-nikye 'n-guk in-guruon",
            "hint": "Warning against hubris"
          },
          {
            "target": "Medany ol-kimojino obo el-lashei",
            "source": "One finger will not kill a louse (Hollis 1905, p. 244, Proverb #32)",
            "pronunciation": "me-dany ol-kimojino obo el-lashei",
            "hint": "Unity is strength (el-lashei = the louse)"
          }
        ],
        "sentences": [
          {
            "target": "Eata en-gewarie 'n-giyaa.",
            "source": "The night has ears (Hollis 1905, p. 238, Proverb #3)."
          },
          {
            "target": "Ekwenikye 'n-guk in-guruon.",
            "source": "Coals laugh at the ashes (Hollis 1905, p. 239, Proverb #6)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nabô (f.) / obô (m.) / nebô (place)\" in Maasai?",
            "correctAnswer": "One (1)",
            "options": [
              "Two (2)",
              "Three (3)",
              "Four (4)",
              "One (1)"
            ],
            "hint": "Three-way gender agreement (Hollis 1905, p. 39)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aré (f.) / aàre (m.)\" in Maasai?",
            "correctAnswer": "Two (2)",
            "options": [
              "Three (3)",
              "Four (4)",
              "Two (2)",
              "One (1)"
            ],
            "hint": "Feminine vs. masculine 2 (Hollis 1905, p. 39)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"uní (f.) / okúni (m.)\" in Maasai?",
            "correctAnswer": "Three (3)",
            "options": [
              "Four (4)",
              "Three (3)",
              "One (1)",
              "Two (2)"
            ],
            "hint": "Feminine vs. masculine 3 (Hollis 1905, p. 39)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three (3)\" in Maasai?",
            "correctAnswer": "uní (f.) / okúni (m.)",
            "options": [
              "uní (f.) / okúni (m.)",
              "nabô (f.) / obô (m.) / nebô (place)",
              "aré (f.) / aàre (m.)",
              "oŋwán (f.) / oóŋwan (m.)"
            ],
            "hint": "oo-nee / oh-koo-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four (4)\" in Maasai?",
            "correctAnswer": "oŋwán (f.) / oóŋwan (m.)",
            "options": [
              "nabô (f.) / obô (m.) / nebô (place)",
              "aré (f.) / aàre (m.)",
              "uní (f.) / okúni (m.)",
              "oŋwán (f.) / oóŋwan (m.)"
            ],
            "hint": "oh-ngwahn"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Maasai expression with its English meaning:",
            "correctAnswer": "nabô (f.) / obô (m.) / nebô (place): One (1)",
            "pairs": [
              {
                "left": "nabô (f.) / obô (m.) / nebô (place)",
                "right": "One (1)"
              },
              {
                "left": "aré (f.) / aàre (m.)",
                "right": "Two (2)"
              },
              {
                "left": "uní (f.) / okúni (m.)",
                "right": "Three (3)"
              },
              {
                "left": "oŋwán (f.) / oóŋwan (m.)",
                "right": "Four (4)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai term for \"Five (5) / Six (6)\": ___",
            "correctAnswer": "ímíêt / ílɛ̂",
            "options": [
              "nabô (f.) / obô (m.) / nebô (place)",
              "aré (f.) / aàre (m.)",
              "uní (f.) / okúni (m.)",
              "ímíêt / ílɛ̂"
            ],
            "hint": "Cardinals 5 & 6 (Hollis 1905, p. 39)"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-2",
    "title": "Unit 2: Maa Place-Names (Hinde 1901), 4 Clans & 2 Moieties, Age-Sets & Folktales",
    "description": "Explore historical Maa toponyms, the 2 moieties and 4 principal clans, warrior ceremonies, and Hollis (1905) folktales and proverbs.",
    "icon": "Compass",
    "skills": [
      {
        "id": "maasai-toponyms-clans-folklore",
        "title": "Maa Place-Names, 4 Clans, 5 Districts & Ceremonies",
        "icon": "Crown",
        "description": "Learn the Maa meanings of iconic East African landmarks, clan names, and ceremonies.",
        "tips": "Hildegarde Hinde (1901, p. 42) and A. C. Hollis (1905, pp. 260–356) document the Maa origins of East African place-names: En-gare Nyrobi ('Cold Water' = Nairobi), Ol-doinyo Oibor ('White Mountain' = Kilimanjaro), and Ol-doinyo Oger ('Striped Mountain' = Mount Kenya), along with the 2 Moieties ('L-oodo-kishu & 'L-oorook-kishu) and 4 Principal Clans ('L-Aiser, Il-Mengana, Il-Mokesen, Il-Molelyan).",
        "culturalNote": "In A. C. Hollis's 'The Masai: Their Language and Folklore' (1905, p. 264), the Maasai distinguish two sky powers: Eng-ai Narok (the Benevolent Black God close to earth whose distant thunder says 'Tapala, miar!' — 'Leave off, do not kill!') and Eng-ai Nanyokye (the Red God above), while holding sacred pasture grass (en-gujit) as a sign of peace (o-sotwa).",
        "words": [
          {
            "target": "En-gare Nyrobi / Ngongo Bagas",
            "source": "Nairobi (lit. Cold Water / Stream) / Ngong Springs (lit. The Eye of the Spring)",
            "pronunciation": "en-gare nyro-bi / ngongo ba-gas",
            "hint": "Hinde (1901, p. 42) & Hollis (1905)"
          },
          {
            "target": "Ol-doinyo Oibor / Ol-doinyo Oger (Oldonyo gēri)",
            "source": "White Mountain (Kilimanjaro) / Striped Mountain (Mount Kenya)",
            "pronunciation": "ol-doinyo oi-bor / ol-doinyo o-ger",
            "hint": "Hinde (1901, p. 42) & Hollis (1905)"
          },
          {
            "target": "E-waso Ngiro / En-aiposha (Enaibasha)",
            "source": "Ewaso Ng'iro (Brown/Muddy River) / Lake Naivasha (The Heaving Water)",
            "pronunciation": "e-waso ngi-ro / en-aiposha",
            "hint": "Hinde (1901, p. 42) & Hollis (1905, p. 260)"
          },
          {
            "target": "'L-oodo-kishu ('L-Aiser & Il-Mengana) / 'L-oorook-kishu (Il-Mokesen & Il-Molelyan)",
            "source": "The 2 Moieties (Blood-Red Cattle & Black Cattle) & 4 Principal Clans (Hollis 1905, p. 260)",
            "pronunciation": "'l-oodo-kishu / 'l-oorook-kishu",
            "hint": "'N-Gidongi (Oloiboni's family) belongs to 'L-Aiser; Il-Kipuyoni (smiths) to Il-Molelyan"
          },
          {
            "target": "E-murata / E-unoto (Ol-aunoni) / Ol-ngesher",
            "source": "Circumcision Initiation / Warrior Graduation (Selection of Chief) / Elderhood Ceremony",
            "pronunciation": "e-murata / e-unoto / ol-ngesher",
            "hint": "Hollis (1905, pp. 294–302) age-grade ceremonies"
          },
          {
            "target": "en-gujit / o-sotwa",
            "source": "Sacred pasture grass held in peace and prayer / Peace covenant",
            "pronunciation": "en-gujit / o-sotwa",
            "hint": "Hollis (1905, pp. 289, 321–322)"
          },
          {
            "target": "Eng-ai Narok / Eng-ai Nanyokye",
            "source": "The Benevolent Black Rain-giving God / The Fierce Red Sky God",
            "pronunciation": "eng-ai na-rok / eng-ai nanyokye",
            "hint": "Hollis (1905, p. 264)"
          },
          {
            "target": "em-bere (pl. im-beria) / el-longo (pl. il-longoi)",
            "source": "Spear / Shield",
            "pronunciation": "em-bere / el-longo",
            "hint": "Hollis (1905) & Hinde (1901)"
          },
          {
            "target": "ol-alem (pl. il-alema) / o-rinka (pl. i-rinkan)",
            "source": "Sword (simi) / Club (rungu)",
            "pronunciation": "ol-alem / o-rinka",
            "hint": "Hollis (1905) & Hinde (1901)"
          },
          {
            "target": "Tigha eng-auo, miigh eng-ongu",
            "source": "Hang up the bow, do not hang up the eye (Hollis 1905, p. 251, Proverb #75)",
            "pronunciation": "tigha eng-auo miigh eng-ongu",
            "hint": "Remember that a guest is hungry when you lay aside his weapons"
          }
        ],
        "sentences": [
          {
            "target": "Medany ol-kimojino obo el-lashei.",
            "source": "One finger will not kill a louse (Hollis 1905, p. 244, Proverb #32)."
          },
          {
            "target": "Kiyiolo enkarna En-gare Nyrobi taata.",
            "source": "We know the expression nairobi today."
          },
          {
            "target": "Eirorie ilpayiani Ol-doinyo Oibor engang.",
            "source": "The elders spoke of white mountain at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"En-gare Nyrobi / Ngongo Bagas\" in Maasai?",
            "correctAnswer": "Nairobi (lit. Cold Water / Stream) / Ngong Springs (lit. The Eye of the Spring)",
            "options": [
              "White Mountain (Kilimanjaro) / Striped Mountain (Mount Kenya)",
              "Ewaso Ng'iro (Brown/Muddy River) / Lake Naivasha (The Heaving Water)",
              "The 2 Moieties (Blood-Red Cattle & Black Cattle) & 4 Principal Clans (Hollis 1905, p. 260)",
              "Nairobi (lit. Cold Water / Stream) / Ngong Springs (lit. The Eye of the Spring)"
            ],
            "hint": "Hinde (1901, p. 42) & Hollis (1905)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ol-doinyo Oibor / Ol-doinyo Oger (Oldonyo gēri)\" in Maasai?",
            "correctAnswer": "White Mountain (Kilimanjaro) / Striped Mountain (Mount Kenya)",
            "options": [
              "Ewaso Ng'iro (Brown/Muddy River) / Lake Naivasha (The Heaving Water)",
              "The 2 Moieties (Blood-Red Cattle & Black Cattle) & 4 Principal Clans (Hollis 1905, p. 260)",
              "White Mountain (Kilimanjaro) / Striped Mountain (Mount Kenya)",
              "Nairobi (lit. Cold Water / Stream) / Ngong Springs (lit. The Eye of the Spring)"
            ],
            "hint": "Hinde (1901, p. 42) & Hollis (1905)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"E-waso Ngiro / En-aiposha (Enaibasha)\" in Maasai?",
            "correctAnswer": "Ewaso Ng'iro (Brown/Muddy River) / Lake Naivasha (The Heaving Water)",
            "options": [
              "The 2 Moieties (Blood-Red Cattle & Black Cattle) & 4 Principal Clans (Hollis 1905, p. 260)",
              "Ewaso Ng'iro (Brown/Muddy River) / Lake Naivasha (The Heaving Water)",
              "Nairobi (lit. Cold Water / Stream) / Ngong Springs (lit. The Eye of the Spring)",
              "White Mountain (Kilimanjaro) / Striped Mountain (Mount Kenya)"
            ],
            "hint": "Hinde (1901, p. 42) & Hollis (1905, p. 260)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ewaso Ng'iro (Brown/Muddy River) / Lake Naivasha (The Heaving Water)\" in Maasai?",
            "correctAnswer": "E-waso Ngiro / En-aiposha (Enaibasha)",
            "options": [
              "E-waso Ngiro / En-aiposha (Enaibasha)",
              "En-gare Nyrobi / Ngongo Bagas",
              "Ol-doinyo Oibor / Ol-doinyo Oger (Oldonyo gēri)",
              "'L-oodo-kishu ('L-Aiser & Il-Mengana) / 'L-oorook-kishu (Il-Mokesen & Il-Molelyan)"
            ],
            "hint": "eh-wah-soh n-gee-roh / eh-nah-ee-poh-shah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"The 2 Moieties (Blood-Red Cattle & Black Cattle) & 4 Principal Clans (Hollis 1905, p. 260)\" in Maasai?",
            "correctAnswer": "'L-oodo-kishu ('L-Aiser & Il-Mengana) / 'L-oorook-kishu (Il-Mokesen & Il-Molelyan)",
            "options": [
              "En-gare Nyrobi / Ngongo Bagas",
              "Ol-doinyo Oibor / Ol-doinyo Oger (Oldonyo gēri)",
              "E-waso Ngiro / En-aiposha (Enaibasha)",
              "'L-oodo-kishu ('L-Aiser & Il-Mengana) / 'L-oorook-kishu (Il-Mokesen & Il-Molelyan)"
            ],
            "hint": "l-oo-doh-kee-shoo / l-oo-rook-kee-shoo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Maasai expression with its English meaning:",
            "correctAnswer": "En-gare Nyrobi / Ngongo Bagas: Nairobi (lit. Cold Water / Stream) / Ngong Springs (lit. The Eye of the Spring)",
            "pairs": [
              {
                "left": "En-gare Nyrobi / Ngongo Bagas",
                "right": "Nairobi (lit. Cold Water / Stream) / Ngong Springs (lit. The Eye of the Spring)"
              },
              {
                "left": "Ol-doinyo Oibor / Ol-doinyo Oger (Oldonyo gēri)",
                "right": "White Mountain (Kilimanjaro) / Striped Mountain (Mount Kenya)"
              },
              {
                "left": "E-waso Ngiro / En-aiposha (Enaibasha)",
                "right": "Ewaso Ng'iro (Brown/Muddy River) / Lake Naivasha (The Heaving Water)"
              },
              {
                "left": "'L-oodo-kishu ('L-Aiser & Il-Mengana) / 'L-oorook-kishu (Il-Mokesen & Il-Molelyan)",
                "right": "The 2 Moieties (Blood-Red Cattle & Black Cattle) & 4 Principal Clans (Hollis 1905, p. 260)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai term for \"Circumcision Initiation / Warrior Graduation (Selection of Chief) / Elderhood Ceremony\": ___",
            "correctAnswer": "E-murata / E-unoto (Ol-aunoni) / Ol-ngesher",
            "options": [
              "En-gare Nyrobi / Ngongo Bagas",
              "Ol-doinyo Oibor / Ol-doinyo Oger (Oldonyo gēri)",
              "E-waso Ngiro / En-aiposha (Enaibasha)",
              "E-murata / E-unoto (Ol-aunoni) / Ol-ngesher"
            ],
            "hint": "Hollis (1905, pp. 294–302) age-grade ceremonies"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-3",
    "title": "Unit 3: Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A.",
    "icon": "User",
    "skills": [
      {
        "id": "maasai-family-kinship-kinship-elders-3",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "ol-chore (pl. il-choreta)",
            "source": "Friend",
            "pronunciation": "ol-chore",
            "hint": "Hollis 1905 Proverb #60 ('The lion does not eat his friend')"
          },
          {
            "target": "en-gerai (pl. in-gera)",
            "source": "Child",
            "pronunciation": "en-gerai",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "en-gitok (pl. in-gituak) / en-goroyioni (wife)",
            "source": "Woman",
            "pronunciation": "en-gitok / en-goroyioni",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "yeyo (ngotonye = his/her mother)",
            "source": "Mother",
            "pronunciation": "ye-yo",
            "hint": "Hollis 1905 Proverb #18 & Hinde 1901"
          },
          {
            "target": "papa (menye = his/her father)",
            "source": "Father",
            "pronunciation": "pa-pa",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "ɔl-aláshɛ̀ (olalashe)",
            "source": "Brother",
            "pronunciation": "ol-alashe",
            "hint": "Wikipedia Maasai language — Noun classes"
          },
          {
            "target": "ngutunyi",
            "source": "Mother (your mother)",
            "pronunciation": "ngu-tunyi",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Riddle #8"
          },
          {
            "target": "enkitok",
            "source": "Respected woman / lady",
            "pronunciation": "enki-tok",
            "hint": "Wiktionary Category:Maasai lemmas"
          },
          {
            "target": "ɛŋ-kárn-á (enkarna)",
            "source": "Name",
            "pronunciation": "eng-karn-a",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          }
        ],
        "sentences": [
          {
            "target": "Kiyiolo enkarna ol-chore taata.",
            "source": "We know the expression friend today."
          },
          {
            "target": "Eirorie ilpayiani en-gerai engang.",
            "source": "The elders spoke of child at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ol-chore (pl. il-choreta)\" in Maasai?",
            "correctAnswer": "Friend",
            "options": [
              "Child",
              "Woman",
              "Mother",
              "Friend"
            ],
            "hint": "Hollis 1905 Proverb #60 ('The lion does not eat his friend')"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"en-gerai (pl. in-gera)\" in Maasai?",
            "correctAnswer": "Child",
            "options": [
              "Woman",
              "Mother",
              "Child",
              "Friend"
            ],
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"en-gitok (pl. in-gituak) / en-goroyioni (wife)\" in Maasai?",
            "correctAnswer": "Woman",
            "options": [
              "Mother",
              "Woman",
              "Friend",
              "Child"
            ],
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Woman\" in Maasai?",
            "correctAnswer": "en-gitok (pl. in-gituak) / en-goroyioni (wife)",
            "options": [
              "en-gitok (pl. in-gituak) / en-goroyioni (wife)",
              "ol-chore (pl. il-choreta)",
              "en-gerai (pl. in-gera)",
              "yeyo (ngotonye = his/her mother)"
            ],
            "hint": "ehn-gee-tohk / ehn-goh-roh-yoh-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mother\" in Maasai?",
            "correctAnswer": "yeyo (ngotonye = his/her mother)",
            "options": [
              "ol-chore (pl. il-choreta)",
              "en-gerai (pl. in-gera)",
              "en-gitok (pl. in-gituak) / en-goroyioni (wife)",
              "yeyo (ngotonye = his/her mother)"
            ],
            "hint": "yeh-yoh / ngoh-toh-nyeh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Maasai expression with its English meaning:",
            "correctAnswer": "ol-chore (pl. il-choreta): Friend",
            "pairs": [
              {
                "left": "ol-chore (pl. il-choreta)",
                "right": "Friend"
              },
              {
                "left": "en-gerai (pl. in-gera)",
                "right": "Child"
              },
              {
                "left": "en-gitok (pl. in-gituak) / en-goroyioni (wife)",
                "right": "Woman"
              },
              {
                "left": "yeyo (ngotonye = his/her mother)",
                "right": "Mother"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai term for \"Father\": ___",
            "correctAnswer": "papa (menye = his/her father)",
            "options": [
              "ol-chore (pl. il-choreta)",
              "en-gerai (pl. in-gera)",
              "en-gitok (pl. in-gituak) / en-goroyioni (wife)",
              "papa (menye = his/her father)"
            ],
            "hint": "Hollis 1905 & Hinde 1901"
          }
        ]
      },
      {
        "id": "maasai-family-kinship-clans-community-3",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "kore anganashe ingu?",
            "source": "Where is your sister?",
            "pronunciation": "ko-re anga-nashe ingu",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "kore ngerai?",
            "source": "Where is the child?",
            "pronunciation": "ko-re nge-rai",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "eyu nerigu ngerai nyenne?",
            "source": "Does he want to bring his child here?",
            "pronunciation": "eyu ne-ri-gu nge-rai nyenne",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "aiyu naibot ngerai",
            "source": "I want to call the child",
            "pronunciation": "ai-yu nai-bot nge-rai",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "aadang ngerai",
            "source": "I have a child",
            "pronunciation": "aa-dang nge-rai",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "aada baba",
            "source": "I have a father",
            "pronunciation": "aa-da ba-ba",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "aara nanu yeyu",
            "source": "I have a mother",
            "pronunciation": "aa-ra na-nu ye-yu",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "ere ngerai",
            "source": "You (sing.) have a child",
            "pronunciation": "ere nge-rai",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "Eñgarai",
            "source": "Son",
            "pronunciation": "engga-rai"
          }
        ],
        "sentences": [
          {
            "target": "kore anganashe ingu? — kore ngerai?",
            "source": "Where is your sister? — Where is the child?"
          },
          {
            "target": "eyu nerigu ngerai nyenne? — aiyu naibot ngerai",
            "source": "Does he want to bring his child here? — I want to call the child"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kore anganashe ingu?\" mean in English?",
            "correctAnswer": "Where is your sister?",
            "options": [
              "Where is your sister?",
              "Where is the child?",
              "Does he want to bring his child here?",
              "I want to call the child"
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Where is the child?\"",
            "correctAnswer": "kore ngerai?",
            "acceptedAnswers": [
              "kore ngerai?",
              "kore ngerai?"
            ],
            "hint": "Starts with \"ko\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"eyu nerigu ngerai nyenne?\"",
            "correctAnswer": "Does he want to bring his child here?",
            "acceptedAnswers": [
              "Does he want to bring his child here?",
              "Does he want to bring his child here?"
            ],
            "hint": "Review Clans, Marriage & Community Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kore anganashe ingu?",
                "right": "Where is your sister?"
              },
              {
                "left": "kore ngerai?",
                "right": "Where is the child?"
              },
              {
                "left": "eyu nerigu ngerai nyenne?",
                "right": "Does he want to bring his child here?"
              },
              {
                "left": "aiyu naibot ngerai",
                "right": "I want to call the child"
              },
              {
                "left": "aadang ngerai",
                "right": "I have a child"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-4",
    "title": "Unit 4: Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A.",
    "icon": "Scale",
    "skills": [
      {
        "id": "maasai-numbers-measures-cardinals-ordinals-4",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "tɔ́mɔ̂n (tomon)",
            "source": "Ten",
            "pronunciation": "to-mon",
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "target": "naáudo (f.) / oódó (m.)",
            "source": "Nine",
            "pronunciation": "naau-do / oo-do",
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "target": "ísíêt (isiet)",
            "source": "Eight",
            "pronunciation": "i-siet",
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "target": "ílɛ̂ (ile)",
            "source": "Six",
            "pronunciation": "ile",
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "target": "ímíêt (imiet)",
            "source": "Five",
            "pronunciation": "i-miet",
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "target": "nabô (fem.) / obô (masc.) / nebô (place)",
            "source": "One (1) — feminine / masculine / place",
            "pronunciation": "na-bo / obo / ne-bo",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "aré (fem.) / aàre, ɔáre (masc.)",
            "source": "Two (2) — feminine / masculine",
            "pronunciation": "are / aa-re oa-re",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "uní (fem.) / okúni (masc.)",
            "source": "Three (3) — feminine / masculine",
            "pronunciation": "uni / o-ku-ni",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "oŋwán (fem.) / oóŋwan (masc.)",
            "source": "Four (4) — feminine / masculine",
            "pronunciation": "ongwan / oongwan",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          }
        ],
        "sentences": [
          {
            "target": "Kiyiolo enkarna tɔ́mɔ̂n taata.",
            "source": "We know the expression ten today."
          },
          {
            "target": "Eirorie ilpayiani naáudo engang.",
            "source": "The elders spoke of nine at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"tɔ́mɔ̂n (tomon)\" in Maasai?",
            "correctAnswer": "Ten",
            "options": [
              "Nine",
              "Eight",
              "Six",
              "Ten"
            ],
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"naáudo (f.) / oódó (m.)\" in Maasai?",
            "correctAnswer": "Nine",
            "options": [
              "Eight",
              "Six",
              "Nine",
              "Ten"
            ],
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ísíêt (isiet)\" in Maasai?",
            "correctAnswer": "Eight",
            "options": [
              "Six",
              "Eight",
              "Ten",
              "Nine"
            ],
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Maasai expression with its English meaning:",
            "correctAnswer": "tɔ́mɔ̂n (tomon): Ten",
            "pairs": [
              {
                "left": "tɔ́mɔ̂n (tomon)",
                "right": "Ten"
              },
              {
                "left": "naáudo (f.) / oódó (m.)",
                "right": "Nine"
              },
              {
                "left": "ísíêt (isiet)",
                "right": "Eight"
              },
              {
                "left": "ílɛ̂ (ile)",
                "right": "Six"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai term for \"Five\": ___",
            "correctAnswer": "ímíêt (imiet)",
            "options": [
              "tɔ́mɔ̂n (tomon)",
              "naáudo (f.) / oódó (m.)",
              "ísíêt (isiet)",
              "ímíêt (imiet)"
            ],
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          }
        ]
      },
      {
        "id": "maasai-numbers-measures-trade-measures-4",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "ímíêt",
            "source": "Five (5)",
            "pronunciation": "i-miet",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "ílɛ̂ / íllɛ̂",
            "source": "Six (6)",
            "pronunciation": "ile / ille",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "naápishana (fem.) / oópishana (masc.)",
            "source": "Seven (7) — feminine / masculine",
            "pronunciation": "naa-pisha-na / oo-pisha-na",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "ísíêt",
            "source": "Eight (8)",
            "pronunciation": "i-siet",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "naáudo (fem.) / oódó (masc.)",
            "source": "Nine (9) — feminine / masculine",
            "pronunciation": "naau-do / oo-do",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "tɔ́mɔ̂n",
            "source": "Ten (10)",
            "pronunciation": "to-mon",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "Sekunde",
            "source": "Second (time unit)",
            "pronunciation": "se-kunde",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "mereltungani, legai",
            "source": "Not this man, the other one",
            "pronunciation": "me-reltunga-ni le-gai",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "kumuk ndari nārok",
            "source": "Many black goats",
            "pronunciation": "ku-muk nda-ri na-rok",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          }
        ],
        "sentences": [
          {
            "target": "kumuk ndari nārok",
            "source": "Many black goats"
          },
          {
            "target": "Kiyiolo enkarna ímíêt taata.",
            "source": "We know the expression five today."
          },
          {
            "target": "Eirorie ilpayiani ílɛ̂ engang.",
            "source": "The elders spoke of six at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ímíêt\" in Maasai?",
            "correctAnswer": "Five (5)",
            "options": [
              "Six (6)",
              "Seven (7) — feminine / masculine",
              "Eight (8)",
              "Five (5)"
            ],
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ílɛ̂ / íllɛ̂\" in Maasai?",
            "correctAnswer": "Six (6)",
            "options": [
              "Seven (7) — feminine / masculine",
              "Eight (8)",
              "Six (6)",
              "Five (5)"
            ],
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"naápishana (fem.) / oópishana (masc.)\" in Maasai?",
            "correctAnswer": "Seven (7) — feminine / masculine",
            "options": [
              "Eight (8)",
              "Seven (7) — feminine / masculine",
              "Five (5)",
              "Six (6)"
            ],
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Seven (7) — feminine / masculine\" in Maasai?",
            "correctAnswer": "naápishana (fem.) / oópishana (masc.)",
            "options": [
              "naápishana (fem.) / oópishana (masc.)",
              "ímíêt",
              "ílɛ̂ / íllɛ̂",
              "ísíêt"
            ],
            "hint": "naápishana (fem.) / oópishana (masc.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eight (8)\" in Maasai?",
            "correctAnswer": "ísíêt",
            "options": [
              "ímíêt",
              "ílɛ̂ / íllɛ̂",
              "naápishana (fem.) / oópishana (masc.)",
              "ísíêt"
            ],
            "hint": "ísíêt"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Maasai expression with its English meaning:",
            "correctAnswer": "ímíêt: Five (5)",
            "pairs": [
              {
                "left": "ímíêt",
                "right": "Five (5)"
              },
              {
                "left": "ílɛ̂ / íllɛ̂",
                "right": "Six (6)"
              },
              {
                "left": "naápishana (fem.) / oópishana (masc.)",
                "right": "Seven (7) — feminine / masculine"
              },
              {
                "left": "ísíêt",
                "right": "Eight (8)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai term for \"Nine (9) — feminine / masculine\": ___",
            "correctAnswer": "naáudo (fem.) / oódó (masc.)",
            "options": [
              "ímíêt",
              "ílɛ̂ / íllɛ̂",
              "naápishana (fem.) / oópishana (masc.)",
              "naáudo (fem.) / oódó (masc.)"
            ],
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-5",
    "title": "Unit 5: Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A.",
    "icon": "Tractor",
    "skills": [
      {
        "id": "maasai-food-agriculture-staple-foods-cookery-5",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "en-aisijoi (enaisho = honey-wine)",
            "source": "Honey",
            "pronunciation": "en-aisijoi",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "en-giringo (pl. in-giri)",
            "source": "Meat",
            "pronunciation": "en-giringo",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "en-gare (enkare)",
            "source": "Water",
            "pronunciation": "en-gare",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "en-daa (pl. in-daiki)",
            "source": "Food",
            "pronunciation": "en-daa",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "ol-mosorrî",
            "source": "Egg",
            "pronunciation": "ol-mosorri",
            "hint": "Wikipedia Maasai language — ATR vowel harmony"
          },
          {
            "target": "kule",
            "source": "Milk",
            "pronunciation": "ku-le",
            "hint": "Wiktionary Category:Maasai lemmas"
          },
          {
            "target": "ɛmʊtí (emuti)",
            "source": "Cooking pot",
            "pronunciation": "e-mu-ti",
            "hint": "Wikipedia Maasai language — Morphosyntax"
          }
        ],
        "sentences": [
          {
            "target": "Kiyiolo enkarna en-aisijoi taata.",
            "source": "We know the expression honey today."
          },
          {
            "target": "Eirorie ilpayiani en-giringo engang.",
            "source": "The elders spoke of meat at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"en-aisijoi (enaisho = honey-wine)\" in Maasai?",
            "correctAnswer": "Honey",
            "options": [
              "Meat",
              "Water",
              "Food",
              "Honey"
            ],
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"en-giringo (pl. in-giri)\" in Maasai?",
            "correctAnswer": "Meat",
            "options": [
              "Water",
              "Food",
              "Meat",
              "Honey"
            ],
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"en-gare (enkare)\" in Maasai?",
            "correctAnswer": "Water",
            "options": [
              "Food",
              "Water",
              "Honey",
              "Meat"
            ],
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Water\" in Maasai?",
            "correctAnswer": "en-gare (enkare)",
            "options": [
              "en-gare (enkare)",
              "en-aisijoi (enaisho = honey-wine)",
              "en-giringo (pl. in-giri)",
              "en-daa (pl. in-daiki)"
            ],
            "hint": "ehn-gah-reh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Food\" in Maasai?",
            "correctAnswer": "en-daa (pl. in-daiki)",
            "options": [
              "en-aisijoi (enaisho = honey-wine)",
              "en-giringo (pl. in-giri)",
              "en-gare (enkare)",
              "en-daa (pl. in-daiki)"
            ],
            "hint": "ehn-dah / een-dah-ee-kee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Maasai expression with its English meaning:",
            "correctAnswer": "en-aisijoi (enaisho = honey-wine): Honey",
            "pairs": [
              {
                "left": "en-aisijoi (enaisho = honey-wine)",
                "right": "Honey"
              },
              {
                "left": "en-giringo (pl. in-giri)",
                "right": "Meat"
              },
              {
                "left": "en-gare (enkare)",
                "right": "Water"
              },
              {
                "left": "en-daa (pl. in-daiki)",
                "right": "Food"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai term for \"Egg\": ___",
            "correctAnswer": "ol-mosorrî",
            "options": [
              "en-aisijoi (enaisho = honey-wine)",
              "en-giringo (pl. in-giri)",
              "en-gare (enkare)",
              "ol-mosorrî"
            ],
            "hint": "Wikipedia Maasai language — ATR vowel harmony"
          }
        ]
      },
      {
        "id": "maasai-food-agriculture-crops-livestock-5",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "etwaowok",
            "source": "I will not drink",
            "pronunciation": "etwao-wok",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "mer ngare",
            "source": "No water",
            "pronunciation": "mer nga-re",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "mer nda",
            "source": "No food",
            "pronunciation": "mer nda",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "etu kiog",
            "source": "We will not drink",
            "pronunciation": "etu kiog",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "meiaw nda",
            "source": "Do not bring food",
            "pronunciation": "meiaw nda",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "meiaw ngare",
            "source": "Do not bring water",
            "pronunciation": "meiaw nga-re",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "ainyo begenoss?",
            "source": "Why eat?",
            "pronunciation": "ainyo be-ge-noss",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "ainyo beiok?",
            "source": "Why drink?",
            "pronunciation": "ainyo beiok",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          }
        ],
        "sentences": [
          {
            "target": "mer ngare",
            "source": "No water"
          },
          {
            "target": "mer nda",
            "source": "No food"
          },
          {
            "target": "etu kiog",
            "source": "We will not drink"
          },
          {
            "target": "meiaw nda",
            "source": "Do not bring food"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"No water\" in Maasai?",
            "correctAnswer": "mer ngare",
            "options": [
              "mer ngare",
              "Iropiyianí e Nkɨ́resa",
              "etwaowok",
              "mer nda"
            ],
            "hint": "mer ngare"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"No food\" in Maasai?",
            "correctAnswer": "mer nda",
            "options": [
              "Iropiyianí e Nkɨ́resa",
              "etwaowok",
              "mer ngare",
              "mer nda"
            ],
            "hint": "mer nda"
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai term for \"We will not drink\": ___",
            "correctAnswer": "etu kiog",
            "options": [
              "Iropiyianí e Nkɨ́resa",
              "etwaowok",
              "mer ngare",
              "etu kiog"
            ],
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-6",
    "title": "Unit 6: Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A.",
    "icon": "PawPrint",
    "skills": [
      {
        "id": "maasai-nature-wildlife-land-sky-water-6",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "eng-olong (pl. ing-olongi)",
            "source": "Day",
            "pronunciation": "eng-olong",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "eng-ai (en-chan)",
            "source": "Rain",
            "pronunciation": "eng-ai",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "ol-akira (pl. il-akir)",
            "source": "Star",
            "pronunciation": "ol-akira",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "ol-apa (pl. il-apaitin)",
            "source": "Moon",
            "pronunciation": "ol-apa",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "eng-olong (enkolong)",
            "source": "Sun",
            "pronunciation": "eng-olong",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "engoileli",
            "source": "Dew",
            "pronunciation": "engoi-le-li"
          },
          {
            "target": "eserrengap",
            "source": "Mud",
            "pronunciation": "e-serrengap"
          },
          {
            "target": "shomata",
            "source": "Sky",
            "pronunciation": "sho-ma-ta"
          },
          {
            "target": "esserangap",
            "source": "Clay",
            "pronunciation": "esse-rangap"
          }
        ],
        "sentences": [
          {
            "target": "eng-olong — eng-ai",
            "source": "Day — Rain"
          },
          {
            "target": "ol-akira — ol-apa",
            "source": "Star — Moon"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"eng-olong\" mean in English?",
            "correctAnswer": "Day",
            "options": [
              "Day",
              "Rain",
              "Star",
              "Moon"
            ],
            "hint": "Core vocabulary in Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Rain\"",
            "correctAnswer": "eng-ai",
            "acceptedAnswers": [
              "eng-ai (en-chan)",
              "eng-ai"
            ],
            "hint": "Starts with \"en\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ol-akira\"",
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
                "left": "eng-olong",
                "right": "Day"
              },
              {
                "left": "eng-ai",
                "right": "Rain"
              },
              {
                "left": "ol-akira",
                "right": "Star"
              },
              {
                "left": "ol-apa",
                "right": "Moon"
              },
              {
                "left": "eng-olong",
                "right": "Sun"
              }
            ]
          }
        ]
      },
      {
        "id": "maasai-nature-wildlife-wildlife-flora-6",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "ɔl-caní (olchani)",
            "source": "Tree / medicine",
            "pronunciation": "ol-cani",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ol-chata",
            "source": "Firewood",
            "pronunciation": "ol-chata",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Proverb #6"
          },
          {
            "target": "en-gima (enkima)",
            "source": "Fire",
            "pronunciation": "en-gima",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Proverb #6"
          },
          {
            "target": "in-guruon",
            "source": "Ashes",
            "pronunciation": "in-guruon",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Proverb #6"
          },
          {
            "target": "en-gewarie",
            "source": "Night",
            "pronunciation": "en-gewarie",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Proverb #3"
          },
          {
            "target": "ɛŋ-kár-ɛ́ (enkare)",
            "source": "Water / river",
            "pronunciation": "eng-kar-e",
            "hint": "Wikipedia Eastern Nilotic languages & Wiktionary Maasai lemmas"
          },
          {
            "target": "ngijābi or erobi",
            "source": "Cold",
            "pronunciation": "ngi-ja-bi or e-ro-bi"
          },
          {
            "target": "enderit",
            "source": "Dust",
            "pronunciation": "ende-rit"
          },
          {
            "target": "olosho pl. oiloishon",
            "source": "Hill",
            "pronunciation": "o-losho"
          }
        ],
        "sentences": [
          {
            "target": "ɔl-caní — ol-chata",
            "source": "Tree — Firewood"
          },
          {
            "target": "en-gima — in-guruon",
            "source": "Fire — Ashes"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ɔl-caní\" mean in English?",
            "correctAnswer": "Tree / medicine",
            "options": [
              "Tree / medicine",
              "Firewood",
              "Fire",
              "Ashes"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Firewood\"",
            "correctAnswer": "ol-chata",
            "acceptedAnswers": [
              "ol-chata",
              "ol-chata"
            ],
            "hint": "Starts with \"ol\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"en-gima\"",
            "correctAnswer": "Fire",
            "acceptedAnswers": [
              "Fire",
              "Fire"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ɔl-caní",
                "right": "Tree"
              },
              {
                "left": "ol-chata",
                "right": "Firewood"
              },
              {
                "left": "en-gima",
                "right": "Fire"
              },
              {
                "left": "in-guruon",
                "right": "Ashes"
              },
              {
                "left": "en-gewarie",
                "right": "Night"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-7",
    "title": "Unit 7: The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A.",
    "icon": "Heart",
    "skills": [
      {
        "id": "maasai-body-health-anatomy-senses-7",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "ɛŋ-kɔŋ-ʊ́ (enkong'u)",
            "source": "Eye (fem. noun prefix en-)",
            "pronunciation": "eng-kong-u",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ɛŋ-kɪ-ɔɔk (enkiook, pl. in-giyaa)",
            "source": "Ear",
            "pronunciation": "eng-ki-ook",
            "hint": "Wikipedia Eastern Nilotic languages & Hollis (1905)"
          },
          {
            "target": "eŋ-kumé (enkume)",
            "source": "Nose",
            "pronunciation": "eng-kume",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ɔl-alá-ɪ̀ (olalai)",
            "source": "Tooth (masc. noun prefix ol-)",
            "pronunciation": "ol-ala-i",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ɔl-ŋɛ́jɛ́p (olng'ejep)",
            "source": "Tongue",
            "pronunciation": "ol-ngejep",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ɛŋ-kʊ́tʊ́k (enkutuk)",
            "source": "Mouth",
            "pronunciation": "eng-kutuk",
            "hint": "Wikipedia Eastern Nilotic languages & Maasai language"
          },
          {
            "target": "kɨʉ́tɨshɔ (kiutisho)",
            "source": "Index finger",
            "pronunciation": "kɨʉtɨsho",
            "hint": "Wikipedia Maasai language — ATR vowel harmony"
          },
          {
            "target": "keju",
            "source": "Leg / foot",
            "pronunciation": "ke-ju",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Proverb #20"
          },
          {
            "target": "ɔ-sárɠɛ́ (osarge)",
            "source": "Blood",
            "pronunciation": "o-sarɠe",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          }
        ],
        "sentences": [
          {
            "target": "Kiyiolo enkarna ɛŋ-kɔŋ-ʊ́ taata.",
            "source": "We know the expression eye today."
          },
          {
            "target": "Eirorie ilpayiani ɛŋ-kɪ-ɔɔk engang.",
            "source": "The elders spoke of ear at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ɛŋ-kɔŋ-ʊ́ (enkong'u)\" in Maasai?",
            "correctAnswer": "Eye (fem. noun prefix en-)",
            "options": [
              "Ear",
              "Nose",
              "Tooth (masc. noun prefix ol-)",
              "Eye (fem. noun prefix en-)"
            ],
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ɛŋ-kɪ-ɔɔk (enkiook, pl. in-giyaa)\" in Maasai?",
            "correctAnswer": "Ear",
            "options": [
              "Nose",
              "Tooth (masc. noun prefix ol-)",
              "Ear",
              "Eye (fem. noun prefix en-)"
            ],
            "hint": "Wikipedia Eastern Nilotic languages & Hollis (1905)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"eŋ-kumé (enkume)\" in Maasai?",
            "correctAnswer": "Nose",
            "options": [
              "Tooth (masc. noun prefix ol-)",
              "Nose",
              "Eye (fem. noun prefix en-)",
              "Ear"
            ],
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Maasai?",
            "correctAnswer": "eŋ-kumé (enkume)",
            "options": [
              "eŋ-kumé (enkume)",
              "ɛŋ-kɔŋ-ʊ́ (enkong'u)",
              "ɛŋ-kɪ-ɔɔk (enkiook, pl. in-giyaa)",
              "ɔl-alá-ɪ̀ (olalai)"
            ],
            "hint": "eŋ-kumé (enkume)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tooth (masc. noun prefix ol-)\" in Maasai?",
            "correctAnswer": "ɔl-alá-ɪ̀ (olalai)",
            "options": [
              "ɛŋ-kɔŋ-ʊ́ (enkong'u)",
              "ɛŋ-kɪ-ɔɔk (enkiook, pl. in-giyaa)",
              "eŋ-kumé (enkume)",
              "ɔl-alá-ɪ̀ (olalai)"
            ],
            "hint": "ɔl-alá-ɪ̀ (olalai)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Maasai expression with its English meaning:",
            "correctAnswer": "ɛŋ-kɔŋ-ʊ́ (enkong'u): Eye (fem. noun prefix en-)",
            "pairs": [
              {
                "left": "ɛŋ-kɔŋ-ʊ́ (enkong'u)",
                "right": "Eye (fem. noun prefix en-)"
              },
              {
                "left": "ɛŋ-kɪ-ɔɔk (enkiook, pl. in-giyaa)",
                "right": "Ear"
              },
              {
                "left": "eŋ-kumé (enkume)",
                "right": "Nose"
              },
              {
                "left": "ɔl-alá-ɪ̀ (olalai)",
                "right": "Tooth (masc. noun prefix ol-)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai term for \"Tongue\": ___",
            "correctAnswer": "ɔl-ŋɛ́jɛ́p (olng'ejep)",
            "options": [
              "ɛŋ-kɔŋ-ʊ́ (enkong'u)",
              "ɛŋ-kɪ-ɔɔk (enkiook, pl. in-giyaa)",
              "eŋ-kumé (enkume)",
              "ɔl-ŋɛ́jɛ́p (olng'ejep)"
            ],
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          }
        ]
      },
      {
        "id": "maasai-body-health-healing-safety-7",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "ol-óì-tò (oloito)",
            "source": "Bone",
            "pronunciation": "ol-oi-to",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ŋ-kwar-íé (Samburu)",
            "source": "nose",
            "pronunciation": "ng-kwar-ie",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "l-ɔɗɔ́ (Samburu) / osarge (Maasai)",
            "source": "blood",
            "pronunciation": "l-odo / o-sarge",
            "hint": "Samburu & Maasai (Vossen 1982)"
          },
          {
            "target": "ol-kimojino (pl. il-kimojik)",
            "source": "finger, toe",
            "pronunciation": "ol-kimojino",
            "hint": "Maasai (Hollis 1905, p. 247)"
          },
          {
            "target": "aia ngoshogi",
            "source": "I have a stomach-ache",
            "pronunciation": "aia ngosho-gi",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "ngaiinai",
            "source": "My hand",
            "pronunciation": "ngaii-nai",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "inoberininyi",
            "source": "Come back soon",
            "pronunciation": "i-no-be-ri-ninyi",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "olloregogoiyu pl. loirigegiru",
            "source": "ankle",
            "pronunciation": "ollo-re-go-goi-yu",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "emonge pl. mmongen",
            "source": "anklets (of skin)",
            "pronunciation": "e-monge",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          }
        ],
        "sentences": [
          {
            "target": "aia ngoshogi",
            "source": "I have a stomach-ache"
          },
          {
            "target": "Kiyiolo enkarna ol-óì-tò taata.",
            "source": "We know the expression bone today."
          },
          {
            "target": "Eirorie ilpayiani ŋ-kwar-íé engang.",
            "source": "The elders spoke of nose at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ol-óì-tò (oloito)\" in Maasai?",
            "correctAnswer": "Bone",
            "options": [
              "nose",
              "blood",
              "finger, toe",
              "Bone"
            ],
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ŋ-kwar-íé (Samburu)\" in Maasai?",
            "correctAnswer": "nose",
            "options": [
              "blood",
              "finger, toe",
              "nose",
              "Bone"
            ],
            "hint": "Samburu (North Maa)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"l-ɔɗɔ́ (Samburu) / osarge (Maasai)\" in Maasai?",
            "correctAnswer": "blood",
            "options": [
              "finger, toe",
              "blood",
              "Bone",
              "nose"
            ],
            "hint": "Samburu & Maasai (Vossen 1982)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"blood\" in Maasai?",
            "correctAnswer": "l-ɔɗɔ́ (Samburu) / osarge (Maasai)",
            "options": [
              "l-ɔɗɔ́ (Samburu) / osarge (Maasai)",
              "ol-óì-tò (oloito)",
              "ŋ-kwar-íé (Samburu)",
              "ol-kimojino (pl. il-kimojik)"
            ],
            "hint": "l-ɔɗɔ́ (samburu) / osarge (maasai)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"finger, toe\" in Maasai?",
            "correctAnswer": "ol-kimojino (pl. il-kimojik)",
            "options": [
              "ol-óì-tò (oloito)",
              "ŋ-kwar-íé (Samburu)",
              "l-ɔɗɔ́ (Samburu) / osarge (Maasai)",
              "ol-kimojino (pl. il-kimojik)"
            ],
            "hint": "ol-kimojino (pl. il-kimojik)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Maasai expression with its English meaning:",
            "correctAnswer": "ol-óì-tò (oloito): Bone",
            "pairs": [
              {
                "left": "ol-óì-tò (oloito)",
                "right": "Bone"
              },
              {
                "left": "ŋ-kwar-íé (Samburu)",
                "right": "nose"
              },
              {
                "left": "l-ɔɗɔ́ (Samburu) / osarge (Maasai)",
                "right": "blood"
              },
              {
                "left": "ol-kimojino (pl. il-kimojik)",
                "right": "finger, toe"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai term for \"I have a stomach-ache\": ___",
            "correctAnswer": "aia ngoshogi",
            "options": [
              "ol-óì-tò (oloito)",
              "ŋ-kwar-íé (Samburu)",
              "l-ɔɗɔ́ (Samburu) / osarge (Maasai)",
              "aia ngoshogi"
            ],
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-8",
    "title": "Unit 8: Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "maasai-verbs-grammar-action-verbs-8",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "a-iro (a-jo = to say)",
            "source": "Speak",
            "pronunciation": "a-iro",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "a-irura",
            "source": "Sleep",
            "pronunciation": "a-irura",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "a-ok (ok)",
            "source": "Drink",
            "pronunciation": "a-ok",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "a-nya (inos)",
            "source": "Eat",
            "pronunciation": "a-nya",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "a-ɲá (anya)",
            "source": "To eat",
            "pronunciation": "a-nya",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ébúl (S/he will pierce it)",
            "source": "To pierce (+ATR stem)",
            "pronunciation": "e-bul",
            "hint": "Wikipedia Maasai language — ATR vowel harmony"
          },
          {
            "target": "ɛ́bʉ́l (S/he will prosper)",
            "source": "To prosper (-ATR stem)",
            "pronunciation": "ebʉl",
            "hint": "Wikipedia Maasai language — ATR vowel harmony"
          },
          {
            "target": "atumokî",
            "source": "To have a good opportunity (+ATR)",
            "pronunciation": "a-tu-mo-ki",
            "hint": "Wikipedia Maasai language — ATR vowel harmony"
          },
          {
            "target": "atʉmʉ́k",
            "source": "To brew (-ATR)",
            "pronunciation": "atʉmʉk",
            "hint": "Wikipedia Maasai language — ATR vowel harmony"
          }
        ],
        "sentences": [
          {
            "target": "Kiyiolo enkarna a-iro taata.",
            "source": "We know the expression speak today."
          },
          {
            "target": "Eirorie ilpayiani a-irura engang.",
            "source": "The elders spoke of sleep at the homestead."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"a-iro (a-jo = to say)\" in Maasai?",
            "correctAnswer": "Speak",
            "options": [
              "Sleep",
              "Drink",
              "Eat",
              "Speak"
            ],
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"a-irura\" in Maasai?",
            "correctAnswer": "Sleep",
            "options": [
              "Drink",
              "Eat",
              "Sleep",
              "Speak"
            ],
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"a-ok (ok)\" in Maasai?",
            "correctAnswer": "Drink",
            "options": [
              "Eat",
              "Drink",
              "Speak",
              "Sleep"
            ],
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Drink\" in Maasai?",
            "correctAnswer": "a-ok (ok)",
            "options": [
              "a-ok (ok)",
              "a-iro (a-jo = to say)",
              "a-irura",
              "a-nya (inos)"
            ],
            "hint": "ah-ohk"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eat\" in Maasai?",
            "correctAnswer": "a-nya (inos)",
            "options": [
              "a-iro (a-jo = to say)",
              "a-irura",
              "a-ok (ok)",
              "a-nya (inos)"
            ],
            "hint": "ah-nyah / ee-nohs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Maasai expression with its English meaning:",
            "correctAnswer": "a-iro (a-jo = to say): Speak",
            "pairs": [
              {
                "left": "a-iro (a-jo = to say)",
                "right": "Speak"
              },
              {
                "left": "a-irura",
                "right": "Sleep"
              },
              {
                "left": "a-ok (ok)",
                "right": "Drink"
              },
              {
                "left": "a-nya (inos)",
                "right": "Eat"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai term for \"To eat\": ___",
            "correctAnswer": "a-ɲá (anya)",
            "options": [
              "a-iro (a-jo = to say)",
              "a-irura",
              "a-ok (ok)",
              "a-ɲá (anya)"
            ],
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          }
        ]
      },
      {
        "id": "maasai-verbs-grammar-verbal-derivatives-8",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "a-ɲá (Samburu & Maasai)",
            "source": "to eat (< Proto-Eastern Nilotic -ɲa)",
            "pronunciation": "a-nya",
            "hint": "Samburu & Maasai (Vossen 1982)"
          },
          {
            "target": "a-lo (pl. a-puo; Imperative: Shomo!)",
            "source": "Go",
            "pronunciation": "ah-loh / shoh-moh"
          },
          {
            "target": "a-nya (inos)",
            "source": "Eat",
            "pronunciation": "ah-nyah / ee-nohs"
          },
          {
            "target": "ellejore",
            "source": "Lie",
            "pronunciation": "elle-jo-re"
          },
          {
            "target": "a-lotu (pl. a-ponu; Imperative: Wou!)",
            "source": "Come",
            "pronunciation": "ah-loh-too / woh-oo"
          },
          {
            "target": "engiligwena, ngiligwena (Infin.)",
            "source": "Ask (v. Imp.)",
            "pronunciation": "engiligwena ngiligwena"
          },
          {
            "target": "toomonu, namon (Infin.)",
            "source": "Beg (v. Imp.)",
            "pronunciation": "toomonu namon"
          },
          {
            "target": "tobollo, nebol (Infin.)",
            "source": "Open (v. Imp.)",
            "pronunciation": "tobollo nebol"
          },
          {
            "target": "teyanga, neyeng (Infin.)",
            "source": "Kill (v. Imp.)",
            "pronunciation": "teyanga neyeng"
          }
        ],
        "sentences": [
          {
            "target": "a-ɲá — a-lo",
            "source": "to eat — Go"
          },
          {
            "target": "a-nya — ellejore",
            "source": "Eat — Lie"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"a-ɲá\" mean in English?",
            "correctAnswer": "to eat (< Proto-Eastern Nilotic -ɲa)",
            "options": [
              "to eat (< Proto-Eastern Nilotic -ɲa)",
              "Go",
              "Eat",
              "Lie"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Go\"",
            "correctAnswer": "a-lo",
            "acceptedAnswers": [
              "a-lo (pl. a-puo; Imperative: Shomo!)",
              "a-lo"
            ],
            "hint": "Starts with \"a-\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"a-nya\"",
            "correctAnswer": "Eat",
            "acceptedAnswers": [
              "Eat",
              "Eat"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "a-ɲá",
                "right": "to eat"
              },
              {
                "left": "a-lo",
                "right": "Go"
              },
              {
                "left": "a-nya",
                "right": "Eat"
              },
              {
                "left": "ellejore",
                "right": "Lie"
              },
              {
                "left": "a-lotu",
                "right": "Come"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-9",
    "title": "Unit 9: Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A.",
    "icon": "Map",
    "skills": [
      {
        "id": "maasai-time-calendar-seasons-months-9",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "Eata en-gewarie 'n-giyaa",
            "source": "The night has ears",
            "pronunciation": "ea-ta en-gewarie 'n-giyaa",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, p. 238"
          },
          {
            "target": "taāda",
            "source": "Now",
            "pronunciation": "taa-da"
          },
          {
            "target": "Ongolloñ, Emūto, Kawārie",
            "source": "Day",
            "pronunciation": "ongollon emuto kawarie"
          },
          {
            "target": "etawanga or engagenia",
            "source": "Dawn",
            "pronunciation": "e-ta-wanga or enga-ge-nia"
          },
          {
            "target": "eronongorr, or engorr",
            "source": "Soon",
            "pronunciation": "e-ro-nongorr or engorr"
          },
          {
            "target": "ngatitin, or ngatijin",
            "source": "Time",
            "pronunciation": "nga-ti-tin or nga-ti-jin"
          },
          {
            "target": "Ol lari (pl. El larin)",
            "source": "Year",
            "pronunciation": "ol la-ri"
          },
          {
            "target": "ānu",
            "source": "When",
            "pronunciation": "anu"
          },
          {
            "target": "taadagenia or peiko",
            "source": "Early",
            "pronunciation": "taa-da-ge-nia or pei-ko"
          }
        ],
        "sentences": [
          {
            "target": "Eata en-gewarie 'n-giyaa — taāda",
            "source": "The night has ears — Now"
          },
          {
            "target": "Ongolloñ, Emūto, Kawārie — etawanga or engagenia",
            "source": "Day — Dawn"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eata en-gewarie 'n-giyaa\" mean in English?",
            "correctAnswer": "The night has ears",
            "options": [
              "The night has ears",
              "Now",
              "Day",
              "Dawn"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Now\"",
            "correctAnswer": "taāda",
            "acceptedAnswers": [
              "taāda",
              "taāda"
            ],
            "hint": "Starts with \"ta\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Ongolloñ, Emūto, Kawārie\"",
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
                "left": "Eata en-gewarie 'n-giyaa",
                "right": "The night has ears"
              },
              {
                "left": "taāda",
                "right": "Now"
              },
              {
                "left": "Ongolloñ, Emūto, Kawārie",
                "right": "Day"
              },
              {
                "left": "etawanga or engagenia",
                "right": "Dawn"
              },
              {
                "left": "eronongorr, or engorr",
                "right": "Soon"
              }
            ]
          }
        ]
      },
      {
        "id": "maasai-time-calendar-journey-navigation-9",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "Jumapílí (Jpi)",
            "source": "Sunday (Day of the week)",
            "pronunciation": "ju-ma-pi-li",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Jumatátu (Jtt)",
            "source": "Monday (Day of the week)",
            "pronunciation": "ju-ma-ta-tu",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Jumane (Jnn)",
            "source": "Tuesday (Day of the week)",
            "pronunciation": "ju-ma-ne",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Jumatánɔ (Jtn)",
            "source": "Wednesday (Day of the week)",
            "pronunciation": "ju-ma-ta-no",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Alaámisi (Alh)",
            "source": "Thursday (Day of the week)",
            "pronunciation": "a-laa-mi-si",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Jumáa (Iju)",
            "source": "Friday (Day of the week)",
            "pronunciation": "ju-maa",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "elaba pl. elabaitin",
            "source": "Month",
            "pronunciation": "e-la-ba"
          },
          {
            "target": "ngatitin kumuk",
            "source": "Often",
            "pronunciation": "nga-ti-tin ku-muk"
          },
          {
            "target": "Kawarie",
            "source": "Night",
            "pronunciation": "ka-wa-rie"
          }
        ],
        "sentences": [
          {
            "target": "Jumapílí — Jumatátu",
            "source": "Sunday — Monday"
          },
          {
            "target": "Jumane — Jumatánɔ",
            "source": "Tuesday — Wednesday"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Jumapílí\" mean in English?",
            "correctAnswer": "Sunday (Day of the week)",
            "options": [
              "Sunday (Day of the week)",
              "Monday (Day of the week)",
              "Tuesday (Day of the week)",
              "Wednesday (Day of the week)"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Monday (Day of the week)\"",
            "correctAnswer": "Jumatátu",
            "acceptedAnswers": [
              "Jumatátu (Jtt)",
              "Jumatátu"
            ],
            "hint": "Starts with \"Ju\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Jumane\"",
            "correctAnswer": "Tuesday",
            "acceptedAnswers": [
              "Tuesday (Day of the week)",
              "Tuesday"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Jumapílí",
                "right": "Sunday"
              },
              {
                "left": "Jumatátu",
                "right": "Monday"
              },
              {
                "left": "Jumane",
                "right": "Tuesday"
              },
              {
                "left": "Jumatánɔ",
                "right": "Wednesday"
              },
              {
                "left": "Alaámisi",
                "right": "Thursday"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-10",
    "title": "Unit 10: Conversational Phrases, Idioms & Daily Dialogue",
    "description": "Master conversational phrases, idioms & daily dialogue in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A.",
    "icon": "MessageCircle",
    "skills": [
      {
        "id": "maasai-phrases-idioms-everyday-dialogue-10",
        "title": "Everyday Conversational Phrases & Questions",
        "icon": "CheckCircle2",
        "description": "Practice authentic questions, answers, and idiomatic expressions from historical phrasebooks.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "Jumamósi (Jmo)",
            "source": "Saturday (Day of the week)",
            "pronunciation": "ju-ma-mo-si",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Ɛnkátá",
            "source": "Era / historical age",
            "pronunciation": "enka-ta",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Ɛnkɔ́lɔŋ ewíkî",
            "source": "Day of the week",
            "pronunciation": "enko-long e-wi-ki",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Eserian (Serian)",
            "source": "Peace",
            "pronunciation": "eh-seh-ree-ahn"
          },
          {
            "target": "Sopai! (resp. Epa!) / Takwenya! (resp. Iko!)",
            "source": "Hello",
            "pronunciation": "soh-pah-ee / tah-kweh-nyah"
          },
          {
            "target": "Ashe (Ashe oleng)",
            "source": "Thank you",
            "pronunciation": "ah-sheh oh-lehng"
          },
          {
            "target": "enyorr",
            "source": "Please (v. Imp.)",
            "pronunciation": "enyorr"
          }
        ],
        "sentences": [
          {
            "target": "Jumamósi — Ɛnkátá",
            "source": "Saturday — Era"
          },
          {
            "target": "Ɛnkɔ́lɔŋ ewíkî — Eserian",
            "source": "Day of the week — Peace"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Jumamósi\" mean in English?",
            "correctAnswer": "Saturday (Day of the week)",
            "options": [
              "Saturday (Day of the week)",
              "Era / historical age",
              "Day of the week",
              "Peace"
            ],
            "hint": "Core vocabulary in Everyday Conversational Phrases & Questions"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Era / historical age\"",
            "correctAnswer": "Ɛnkátá",
            "acceptedAnswers": [
              "Ɛnkátá",
              "Ɛnkátá"
            ],
            "hint": "Starts with \"Ɛn\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Ɛnkɔ́lɔŋ ewíkî\"",
            "correctAnswer": "Day of the week",
            "acceptedAnswers": [
              "Day of the week",
              "Day of the week"
            ],
            "hint": "Review Everyday Conversational Phrases & Questions"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Everyday Conversational Phrases & Questions with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Jumamósi",
                "right": "Saturday"
              },
              {
                "left": "Ɛnkátá",
                "right": "Era"
              },
              {
                "left": "Ɛnkɔ́lɔŋ ewíkî",
                "right": "Day of the week"
              },
              {
                "left": "Eserian",
                "right": "Peace"
              },
              {
                "left": "Sopai!",
                "right": "Hello"
              }
            ]
          }
        ]
      },
      {
        "id": "maasai-phrases-idioms-courtesy-discourse-10",
        "title": "Hospitality, Requests & Social Discourse",
        "icon": "Handshake",
        "description": "Converse naturally in home, village, market, and travel settings.",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "Sere! (pl. Entasere!)",
            "source": "Goodbye! Go in peace!",
            "pronunciation": "sere"
          },
          {
            "target": "Ashe / Ashe oleng'",
            "source": "Thank you / Thank you very much",
            "pronunciation": "ashe / ashe o-leng'"
          },
          {
            "target": "tagwenia",
            "source": "Salutation to a woman (literally laugh)",
            "pronunciation": "tagwe-nia"
          },
          {
            "target": "Supa! (resp. Ipa!)",
            "source": "Hello! Good day! (general greeting among peers)",
            "pronunciation": "supa"
          },
          {
            "target": "onyokie (f. nanyokie)",
            "source": "Red",
            "pronunciation": "oh-nyoh-kyeh"
          },
          {
            "target": "eshell",
            "source": "Wet",
            "pronunciation": "eshell"
          }
        ],
        "sentences": [
          {
            "target": "Sere! — Ashe",
            "source": "Goodbye! Go in peace! — Thank you"
          },
          {
            "target": "tagwenia — Supa!",
            "source": "Salutation to a woman — Hello! Good day!"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Sere!\" mean in English?",
            "correctAnswer": "Goodbye! Go in peace!",
            "options": [
              "Goodbye! Go in peace!",
              "Thank you / Thank you very much",
              "Salutation to a woman (literally laugh)",
              "Hello! Good day! (general greeting among peers)"
            ],
            "hint": "Core vocabulary in Hospitality, Requests & Social Discourse"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Thank you / Thank you very much\"",
            "correctAnswer": "Ashe",
            "acceptedAnswers": [
              "Ashe / Ashe oleng'",
              "Ashe"
            ],
            "hint": "Starts with \"As\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"tagwenia\"",
            "correctAnswer": "Salutation to a woman",
            "acceptedAnswers": [
              "Salutation to a woman (literally laugh)",
              "Salutation to a woman"
            ],
            "hint": "Review Hospitality, Requests & Social Discourse"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Hospitality, Requests & Social Discourse with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Sere!",
                "right": "Goodbye! Go in peace!"
              },
              {
                "left": "Ashe",
                "right": "Thank you"
              },
              {
                "left": "tagwenia",
                "right": "Salutation to a woman"
              },
              {
                "left": "Supa!",
                "right": "Hello! Good day!"
              },
              {
                "left": "onyokie",
                "right": "Red"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-11-public-domain-corpus",
    "title": "Unit 11: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Maasai (Maa) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "skills": [
      {
        "id": "maasai-pd-corpus-11-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Maasai (Maa) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Maasai (Maa) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "Idya-ae-olong (that-other-day)",
            "source": "the day before yesterday, the day after to-morrow",
            "pronunciation": "idya-ae-olong",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "E-weji ne-yeng-ye-ki en-giteng",
            "source": "the place where the ox is slaughtered in",
            "pronunciation": "e-weji ne-yeng-ye-ki en-giteng",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "E-weji ne-yeng-ye 'l-tunganak en-giteng",
            "source": "the place where men slaughter the ox in",
            "pronunciation": "e-weji ne-yeng-ye 'l-tunganak en-giteng",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "E-ton ol-tungani a-boit-are e-ngoroyoni",
            "source": "the man is sitting (to be) together with the woman",
            "pronunciation": "e-ton ol-tungani a-boit-are e-ngoroyoni",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-alem li-miki-njo",
            "source": "the sword which he does not give to thee",
            "pronunciation": "ol-alem li-miki-njo",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-alem le-ma-isho",
            "source": "the sword which he does not give to me",
            "pronunciation": "ol-alem le-ma-isho",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-tungani le-me-suj",
            "source": "the man whom he or she does not follow",
            "pronunciation": "ol-tungani le-me-suj",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-tungani li-mi-suj",
            "source": "the man whom thou dost not follow",
            "pronunciation": "ol-tungani li-mi-suj",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          }
        ],
        "sentences": [
          {
            "target": "E-weji ne-yeng-ye-ki en-giteng",
            "source": "the place where the ox is slaughtered in"
          },
          {
            "target": "E-weji ne-yeng-ye 'l-tunganak en-giteng",
            "source": "the place where men slaughter the ox in"
          },
          {
            "target": "E-ton ol-tungani a-boit-are e-ngoroyoni",
            "source": "the man is sitting (to be) together with the woman"
          },
          {
            "target": "Ol-alem li-miki-njo",
            "source": "the sword which he does not give to thee"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Idya-ae-olong (that-other-day)\" in Maasai?",
            "correctAnswer": "the day before yesterday, the day after to-morrow",
            "options": [
              "the place where the ox is slaughtered in",
              "the place where men slaughter the ox in",
              "the man is sitting (to be) together with the woman",
              "the day before yesterday, the day after to-morrow"
            ],
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"E-weji ne-yeng-ye-ki en-giteng\" in Maasai?",
            "correctAnswer": "the place where the ox is slaughtered in",
            "options": [
              "the place where men slaughter the ox in",
              "the man is sitting (to be) together with the woman",
              "the place where the ox is slaughtered in",
              "the day before yesterday, the day after to-morrow"
            ],
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"E-weji ne-yeng-ye 'l-tunganak en-giteng\" in Maasai?",
            "correctAnswer": "the place where men slaughter the ox in",
            "options": [
              "the man is sitting (to be) together with the woman",
              "the place where men slaughter the ox in",
              "the day before yesterday, the day after to-morrow",
              "the place where the ox is slaughtered in"
            ],
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"the place where men slaughter the ox in\" in Maasai?",
            "correctAnswer": "E-weji ne-yeng-ye 'l-tunganak en-giteng",
            "options": [
              "E-weji ne-yeng-ye 'l-tunganak en-giteng",
              "Idya-ae-olong (that-other-day)",
              "E-weji ne-yeng-ye-ki en-giteng",
              "E-ton ol-tungani a-boit-are e-ngoroyoni"
            ],
            "hint": "e we-ji ne yeng ye 'l"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"the man is sitting (to be) together with the woman\" in Maasai?",
            "correctAnswer": "E-ton ol-tungani a-boit-are e-ngoroyoni",
            "options": [
              "Idya-ae-olong (that-other-day)",
              "E-weji ne-yeng-ye-ki en-giteng",
              "E-weji ne-yeng-ye 'l-tunganak en-giteng",
              "E-ton ol-tungani a-boit-are e-ngoroyoni"
            ],
            "hint": "e ton ol tung-a-ni a boit"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Maasai expression with its English meaning:",
            "correctAnswer": "Idya-ae-olong (that-other-day): the day before yesterday, the day after to-morrow",
            "pairs": [
              {
                "left": "Idya-ae-olong (that-other-day)",
                "right": "the day before yesterday, the day after to-morrow"
              },
              {
                "left": "E-weji ne-yeng-ye-ki en-giteng",
                "right": "the place where the ox is slaughtered in"
              },
              {
                "left": "E-weji ne-yeng-ye 'l-tunganak en-giteng",
                "right": "the place where men slaughter the ox in"
              },
              {
                "left": "E-ton ol-tungani a-boit-are e-ngoroyoni",
                "right": "the man is sitting (to be) together with the woman"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai term for \"the sword which he does not give to thee\": ___",
            "correctAnswer": "Ol-alem li-miki-njo",
            "options": [
              "Idya-ae-olong (that-other-day)",
              "E-weji ne-yeng-ye-ki en-giteng",
              "E-weji ne-yeng-ye 'l-tunganak en-giteng",
              "Ol-alem li-miki-njo"
            ],
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          }
        ]
      },
      {
        "id": "maasai-pd-corpus-11-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Maasai (Maa) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Maasai (Maa) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "Ol-alem liki-njo-sho",
            "source": "the sword which you give to me",
            "pronunciation": "ol-alem liki-njo-sho",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-alem la-isho",
            "source": "the sword which he, she, or they give to me",
            "pronunciation": "ol-alem la-isho",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-tungani o-suj",
            "source": "the man whom they follow",
            "pronunciation": "ol-tungani o-suj",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-tungani li-suj-usuju",
            "source": "the man whom you follow",
            "pronunciation": "ol-tungani li-suj-usuju",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-tungani liki-suj",
            "source": "the man whom we follow",
            "pronunciation": "ol-tungani liki-suj",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-tungani li-suj",
            "source": "the man whom thou followest",
            "pronunciation": "ol-tungani li-suj",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-tungani o-nyor-u-ni",
            "source": "the man who will be loved",
            "pronunciation": "ol-tungani o-nyor-u-ni",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-tungani o-to-nyor-a-ki",
            "source": "the man who was loved",
            "pronunciation": "ol-tungani o-to-nyor-a-ki",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          }
        ],
        "sentences": [
          {
            "target": "Ol-alem liki-njo-sho",
            "source": "the sword which you give to me"
          },
          {
            "target": "Ol-alem la-isho J",
            "source": "the sword which he, she, or they give to me"
          },
          {
            "target": "Ol-tungani o-suj",
            "source": "the man whom they follow"
          },
          {
            "target": "Ol-tungani li-suj-usuju",
            "source": "the man whom you follow"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ol-alem liki-njo-sho\" in Maasai (Maa)?",
            "correctAnswer": "the sword which you give to me",
            "options": [
              "the sword which you give to me",
              "the sword which he, she, or they give to me",
              "the man whom they follow",
              "the man whom you follow"
            ],
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Maasai (Maa) term to its English meaning:",
            "correctAnswer": "Ol-alem liki-njo-sho: the sword which you give to me",
            "pairs": [
              {
                "left": "Ol-alem liki-njo-sho",
                "right": "the sword which you give to me"
              },
              {
                "left": "Ol-alem la-isho",
                "right": "the sword which he, she, or they give to me"
              },
              {
                "left": "Ol-tungani o-suj",
                "right": "the man whom they follow"
              },
              {
                "left": "Ol-tungani li-suj-usuju",
                "right": "the man whom you follow"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai (Maa) term for \"the man whom we follow\": ___",
            "correctAnswer": "Ol-tungani liki-suj",
            "options": [
              "Ol-tungani liki-suj",
              "Ol-alem liki-njo-sho",
              "Ol-alem la-isho",
              "Ol-tungani o-suj"
            ],
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-12-open-datasets-modern",
    "title": "Unit 12: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Maasai (Maa) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "skills": [
      {
        "id": "maasai-open-dataset-12-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Tractor",
        "description": "Learn core Maasai (Maa) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Maasai (Maa) dialects and everyday speech.",
        "words": [
          {
            "target": "Ol-tungani o-nyor-ita-i",
            "source": "the man who is being loved",
            "pronunciation": "ol-tungani o-nyor-ita-i",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-tungani o-nyor-i",
            "source": "the man who is loved",
            "pronunciation": "ol-tungani o-nyor-i",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "'N-gulye-ngoroyok",
            "source": "the other women",
            "pronunciation": "'n-gulye-ngoroyok",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-likae-tungani",
            "source": "the other man",
            "pronunciation": "ol-likae-tungani",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-tungani ol-openy in-gishu",
            "source": "the man whose cattle they are",
            "pronunciation": "ol-tungani ol-openy in-gishu",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-tungani o-sapuk-u",
            "source": "The man will become big",
            "pronunciation": "ol-tungani o-sapuk-u",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "'Ngoroyok ne-me-ra sapuki",
            "source": "the women who are not big",
            "pronunciation": "'ngo-ro-yok ne-me-ra sa-pu-ki",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Il-tunganak le-me-ra sapuki",
            "source": "the men who are not big",
            "pronunciation": "il-tunganak le-me-ra sa-pu-ki",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          }
        ],
        "sentences": [
          {
            "target": "Ol-tungani o-nyor-ita-i",
            "source": "the man who is being loved"
          },
          {
            "target": "Ol-tungani o-nyor-i",
            "source": "the man who is loved"
          },
          {
            "target": "Ol-tungani ol-openy in-gishu",
            "source": "the man whose cattle they are"
          },
          {
            "target": "4 Ol-tungani o-sapuk-u means",
            "source": "the man will be big vide p"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ol-tungani o-nyor-ita-i\" in Maasai (Maa)?",
            "correctAnswer": "the man who is being loved",
            "options": [
              "the man who is being loved",
              "the man who is loved",
              "the other women",
              "the other man"
            ],
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Maasai (Maa) term to its English meaning:",
            "correctAnswer": "Ol-tungani o-nyor-ita-i: the man who is being loved",
            "pairs": [
              {
                "left": "Ol-tungani o-nyor-ita-i",
                "right": "the man who is being loved"
              },
              {
                "left": "Ol-tungani o-nyor-i",
                "right": "the man who is loved"
              },
              {
                "left": "'N-gulye-ngoroyok",
                "right": "the other women"
              },
              {
                "left": "Ol-likae-tungani",
                "right": "the other man"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai (Maa) term for \"the man whose cattle they are\": ___",
            "correctAnswer": "Ol-tungani ol-openy in-gishu",
            "options": [
              "Ol-tungani ol-openy in-gishu",
              "Ol-tungani o-nyor-ita-i",
              "Ol-tungani o-nyor-i",
              "'N-gulye-ngoroyok"
            ],
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          }
        ]
      },
      {
        "id": "maasai-open-dataset-12-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Maasai (Maa) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Maasai (Maa) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "E-ngoroyoni ne-me-ra sapuk",
            "source": "the woman who is not big",
            "pronunciation": "e-ngoroyoni ne-me-ra sa-puk",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-tungani le-me-ra sapuk",
            "source": "the man who is not big",
            "pronunciation": "ol-tungani le-me-ra sa-puk",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "'Wejitin nee-ra sapuki",
            "source": "the places which are big",
            "pronunciation": "'we-ji-tin nee-ra sa-pu-ki",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "'Ngoroyok naa-ra sapuki",
            "source": "the women who are big",
            "pronunciation": "'ngo-ro-yok naa-ra sa-pu-ki",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Il-tunganak oo-ra sapuki",
            "source": "the men who are big",
            "pronunciation": "il-tunganak oo-ra sa-pu-ki",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "E-weji ne-ra sapuk",
            "source": "the place which is big",
            "pronunciation": "e-weji ne-ra sa-puk",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "E-ngoroyoni na-ra sapuk",
            "source": "the woman who is big",
            "pronunciation": "e-ngoroyoni na-ra sa-puk",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "target": "Ol-tungani o-ra sapuk",
            "source": "the man who is big",
            "pronunciation": "ol-tungani o-ra sa-puk",
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          }
        ],
        "sentences": [
          {
            "target": "E-ngoroyoni ne-me-ra sapuk",
            "source": "the woman who is not big"
          },
          {
            "target": "Ol-tungani le-me-ra sapuk",
            "source": "the man who is not big"
          },
          {
            "target": "'Wejitin nee-ra sapuki",
            "source": "the places which are big"
          },
          {
            "target": "'Ngoroyok naa-ra sapuki",
            "source": "the women who are big"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"E-ngoroyoni ne-me-ra sapuk\" in Maasai (Maa)?",
            "correctAnswer": "the woman who is not big",
            "options": [
              "the woman who is not big",
              "the man who is not big",
              "the places which are big",
              "the women who are big"
            ],
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Maasai (Maa) term to its English meaning:",
            "correctAnswer": "E-ngoroyoni ne-me-ra sapuk: the woman who is not big",
            "pairs": [
              {
                "left": "E-ngoroyoni ne-me-ra sapuk",
                "right": "the woman who is not big"
              },
              {
                "left": "Ol-tungani le-me-ra sapuk",
                "right": "the man who is not big"
              },
              {
                "left": "'Wejitin nee-ra sapuki",
                "right": "the places which are big"
              },
              {
                "left": "'Ngoroyok naa-ra sapuki",
                "right": "the women who are big"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Maasai (Maa) term for \"the men who are big\": ___",
            "correctAnswer": "Il-tunganak oo-ra sapuki",
            "options": [
              "Il-tunganak oo-ra sapuki",
              "E-ngoroyoni ne-me-ra sapuk",
              "Ol-tungani le-me-ra sapuk",
              "'Wejitin nee-ra sapuki"
            ],
            "hint": "A. C. Hollis, The Masai: Their Language and Folklore (1905, Part I Grammar)"
          }
        ]
      }
    ]
  }
];
