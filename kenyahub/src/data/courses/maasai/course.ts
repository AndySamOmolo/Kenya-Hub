import type { CourseUnit, LanguageConfig } from "../types";

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
        "sentences": [],
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
        "sentences": [],
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
        "sentences": [],
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
        "sentences": [],
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
        "sentences": [],
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
  },
  {
    "id": "maasai-unit-johnston-1902-30-sentences-ethnography",
    "title": "Unit 13: Sir Harry Johnston (1902) All 30 Masai Conversational Sentences (pp. 925–926), Set 2 Lexicon & Ch. XIX Ethnography",
    "description": "Master all 30 words and conversational sentences in Masai from pp. 925–926 of Sir Harry Johnston's The Uganda Protectorate, Vol. II (1902), alongside the 4-God Creation Myth, Ol-aibon lineage, and Set 2 vocabulary.",
    "icon": "Flame",
    "skills": [
      {
        "id": "maasai-johnston-1902-30-sentences-skill",
        "title": "All 30 Masai Words & Conversational Sentences (pp. 925–926)",
        "icon": "MessageCircle",
        "description": "Practice every Masai greeting, command, question, and noun recorded on pp. 925–926 of Johnston (1902).",
        "tips": "In Johnston's 30 Masai items (pp. 925–926), masculine nouns take Ol- and feminine nouns take eñg- (Ol aṣe 'male calf' vs. eñgaṣe 'female calf'), while imperatives use T-/To- or Dumú! ('Lift it up'), Totóna enné! ('Sit here!'), and Tanyō nanu! ('Wait for me!').",
        "words": [
          {
            "target": "Sopai! — Eépa! • Asai! • Biado! • Baīya! • Āiya! • Ékĭnō! • Kálo? • Gīniñ?",
            "source": "Good morning! — Reply • Many thanks! • Goodbye! • Never mind! • Very well! • Truly! • Who's there? • Do you hear?",
            "pronunciation": "so-pai e-e-pa / a-sai / bi-a-do / bai-ya / ai-ya / e-ki-no / ka-lo / gi-ning",
            "hint": "Johnston (1902, Vol. II, pp. 925–926)"
          },
          {
            "target": "T'anyō! • Tanyō nanu! • Elotu taīsere • Totóna enné! • Tōtónna! • Ino! ṣōmō! • Wōu tāsīū! • Neningo!",
            "source": "Wait a bit! • Wait for me! • He will return to-morrow • Sit here! • Stand still! • Go away! • Come quickly! • Listen!",
            "pronunciation": "ta-nyo na-nu / e-lo-tu tai-se-re / to-to-na en-ne / i-no so-mo / wou ta-si-u / ne-ni-ngo",
            "hint": "Johnston (1902, Vol. II, pp. 925–926)"
          },
          {
            "target": "Emī damisso! • Dumú! • Injohi maōko! • Ndámăti! • Imīñāni iye! • Iwa! • Eñnoyik akīma • Yao el gēk • Ṣomo erriita ngiṣu!",
            "source": "Don't forget • Lift it up • Give me to drink • Take care • You're a fool! • Take away! • Make a fire • Bring firewood • Go and herd the cattle!",
            "pronunciation": "e-mi da-mis-so / du-mu / in-jo-hi ma-o-ko / nda-ma-ti / i-mi-nga-ni i-ye / i-wa / so-mo er-rii-ta ngi-su",
            "hint": "Johnston (1902, Vol. II, pp. 925–926)"
          },
          {
            "target": "Ol aṣe (m.), eñgaṣe (f.) • Ol airini • Ol bāhe • Ol canni • Anyorr • Ol giteñ oibor • Eñgaraiai • Entakolla • Endīto",
            "source": "Calf (m./f.) • Kidney • A barren woman • Medicine, trees • I love • White bullock • My child • Molar tooth • Young woman",
            "pronunciation": "ol a-se e-nga-se / ol ai-ri-ni / ol ba-he / ol chan-ni / a-nyorr / ol gi-teng oi-bor",
            "hint": "Johnston (1902, Vol. II, Set 2, pp. 914–926)"
          }
        ],
        "sentences": [
          {
            "target": "Sopai! — Eépa! Totóna enné! Injohi maōko! — Asai! Elotu taīsere. Biado!",
            "source": "Good morning! — Reply! Sit here! Give me to drink! — Many thanks! He will return to-morrow. Goodbye! (Johnston 1902, pp. 925–926)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Sir Harry Johnston's 'Additional Words and Sentences in Masai' (The Uganda Protectorate, Vol. II, 1902, pp. 925–926), what do 'Injohi maōko!', 'Yao el gēk', 'Eñnoyik akīma', and 'Ṣomo erriita ngiṣu!' mean?",
            "correctAnswer": "'Give me to drink', 'Bring firewood', 'Make a fire', and 'Go and herd the cattle'",
            "options": [
              "'Give me to drink', 'Bring firewood', 'Make a fire', and 'Go and herd the cattle'",
              "'Wait a bit!', 'Stand still!', 'Come quickly!', and 'You're a fool!'",
              "'Good morning!', 'Many thanks!', 'Goodbye!', and 'Never mind!'",
              "'Who's there?', 'Do you hear?', 'Don't forget', and 'Lift it up'"
            ],
            "hint": "See Johnston (1902, Vol. II, pp. 925–926)"
          }
        ]
      }
    ]
  }
];

export const MAASAI_UNIT_14_HOLLIS_1905: CourseUnit = {
  "id": "maasai-unit-hollis-1905-stories-proverbs-clans-customs",
  "title": "Unit 14: A. C. Hollis (1905) Complete Monograph — 6 Noun Classes, Finger-Counting 1–60, 20 Stories, 75 Proverbs, 24 Enigmas, 4 Clans, 15 Ages, Myths, Customs, 45+ Trees & 8 Songs",
  "description": "Master the complete linguistic, literary, and ethnographic corpus of A. C. Hollis's 'The Masai: Their Language and Folklore' (Oxford: Clarendon Press, 1905, pp. i–xxviii, 1–359), dictated by Justin Ol-omeni.",
  "icon": "BookOpen",
  "skills": [
    {
      "id": "maasai-hollis-1905-grammar-classes-fingers",
      "title": "Part I Grammar: 6 Substantive Classes, 5 Finger Names, Finger-Counting 1–60 & 27 Verb Prefixes (pp. 1–102)",
      "icon": "BookOpen",
      "description": "Master the 6 substantive plural classes, kinship morphology, 5 finger names, finger-counting signs (1–60), 27 subject–object verb prefixes, and 8 derivative verb formations in Hollis (1905, pp. 1–102).",
      "tips": "In Hollis (1905, pp. 18–34), substantives are divided into 6 Plural Classes: Class I (drops -i/-ni or adds -i/-n/-o/-k), Class II (adds -a/-na/-ishi/-shi/-sin/-tin), Class III (-a/-o → -i, -i/-oi → -ok, -i → -on), Class IV (reduplicates final consonant before -i/-o/-u: ol-alem → il-alema, en-geju → in-gejek), Class V (collective plurals forming singulars in -i/-ni/-oi), and Class VI (irregular/suppletive plurals: en-giteng → in-gishu). Numerals (pp. 41–45) inflect for gender on 1, 2, 3, 4, 7, 8 (oisyet m. / isyet f.), and 9 (oudo m. / naaudo f.), while 5 (imiet), 6 (ile), and 10 (tomon) are invariable.",
      "culturalNote": "Hollis (1905, pp. 43–45) documents both the 5 Maasai finger names (ol-morijoi thumb, ol-le-'ng-ojine 'the hyena's finger' = index finger, ol-kimojino o-ado middle finger, ol-le-'n-gila ring finger, en-gildipet little finger) and the complete silent finger-counting sign system from 1 to 60 used alongside spoken numerals.",
      "words": [
        {
          "target": "Class I: ol-murani → il-muran • ol-tungani → il-tunganak • en-gerai → in-gera • ol-chorro → il-chorroi",
          "source": "Substantive Class I Plurals (Hollis 1905, pp. 18–20): warrior → warriors • man → men • child → children • spring → springs",
          "pronunciation": "ol-mu-ra-ni il-mu-ran / ol-tu-nga-ni il-tu-nga-nak / en-ge-rai in-ge-ra",
          "hint": "Drops singular -i/-ni or suffixes -i, -n, -o, -k (Hollis 1905, pp. 18–20)"
        },
        {
          "target": "Class II: ol-chore → il-choreta • eng-ang → ing-angitie • ol-apa → il-apaitin • e-wueji → i-wuejitin",
          "source": "Substantive Class II Plurals (Hollis 1905, pp. 21–24): friend → friends • kraal → kraals • moon/month → months • place → places",
          "pronunciation": "ol-cho-re il-cho-re-ta / eng-ang ing-a-ngi-tie / ol-a-pa il-a-pai-tin",
          "hint": "Suffixes -a/-na/-ta, -ishi/-shi/-itie, or -sin/-tin (Hollis 1905, pp. 21–24)"
        },
        {
          "target": "Class III: ol-dia → il-diei • ol-oiboni → il-oibonok • ol-karsis → il-karsisi • en-gerr → in-gerra",
          "source": "Substantive Class III Plurals (Hollis 1905, pp. 24–27): dog → dogs • medicine-man → medicine-men • rich man → rich men • sheep",
          "pronunciation": "ol-di-a il-di-ei / ol-oi-bo-ni il-oi-bo-nok / ol-kar-sis il-kar-si-si",
          "hint": "Changes final -a/-o → -i, -i/-oi → -ok, or -i → -on (Hollis 1905, pp. 24–27)"
        },
        {
          "target": "Class IV: ol-alem → il-alema • eng-aji → ing-ajijik • en-geju → in-gejek • en-goshoke → in-goshua",
          "source": "Substantive Class IV Plurals (Hollis 1905, pp. 27–28): sword → swords • hut → huts • leg/foot → legs/feet • stomach → stomachs",
          "pronunciation": "ol-a-lem il-a-le-ma / eng-a-ji ing-a-ji-jik / en-ge-ju in-ge-jek",
          "hint": "Reduplicates final consonant or mutates stem ending (Hollis 1905, pp. 27–28)"
        },
        {
          "target": "Class V & VI: il-Maasae (sg. ol-Maasani) • il-akir (sg. ol-akira) • en-giteng → in-gishu • ol-lee → il-lewa",
          "source": "Substantive Classes V & VI (Hollis 1905, pp. 28–34): Masai • stars • cow → cattle • man/male → men",
          "pronunciation": "il-maa-sae ol-maa-sa-ni / il-a-kir ol-a-ki-ra / en-gi-teng in-gi-shu",
          "hint": "Class V collective plurals vs. Class VI suppletive plurals (Hollis 1905, pp. 28–34)"
        },
        {
          "target": "ol-morijoi (1) • ol-le-'ng-ojine (2) • ol-kimojino o-ado (3) • ol-le-'n-gila (4) • en-gildipet (5)",
          "source": "The 5 Finger Names (Hollis 1905, p. 43): thumb • index finger ('hyena's finger') • middle finger • ring finger ('finger of the cloak') • little finger",
          "pronunciation": "ol-mo-ri-joi / ol-le-ng-o-ji-ne / ol-ki-mo-ji-no o-a-do / ol-le-n-gi-la / en-gil-di-pet",
          "hint": "Hollis (1905, p. 43) finger names & finger-counting 1–60 (pp. 43–45)"
        },
        {
          "target": "oisyet (m.) / isyet (f. & n.) • oudo (m.) / naaudo (f. & n.) • tomon (10) • tikitem (20) • o-som (30) • artam (40) • onom (50) • ntomoni-ile (60) • iip (100)",
          "source": "Gendered 8 & 9 and Tens 10–100 (Hollis 1905, pp. 41–43): eight (m./f.) • nine (m./f.) • 10 • 20 • 30 • 40 • 50 • 60 • 100",
          "pronunciation": "oi-syet i-syet / ou-do naa-u-do / to-mon ti-ki-tem o-som ar-tam o-nom iip",
          "hint": "Hollis (1905, pp. 41–43) cardinal numeral system"
        },
        {
          "target": "aa-suj ('I follow thee' OR 'he/they follow me') • ki-suj ('thou followest me', 'he/they follow thee' OR 'we follow him/them')",
          "source": "Portmanteau Subject–Object Verb Prefixes (Hollis 1905, pp. 51–55, 27-Row Prefix Table)",
          "pronunciation": "aa-suj / ki-suj",
          "hint": "Passive suffix -i resolves ambiguity when 3rd person acts on 1s/2s/1p/2p (Hollis 1905, pp. 51–55, 78–83)"
        }
      ],
      "sentences": [
        {
          "target": "Aa-suj nanu iyie, ne-ki-suj ninye iyie (Hollis 1905, pp. 51–55).",
          "source": "I follow thee, and he follows thee (illustrating portmanteau prefixes aa- and ki-)."
        },
        {
          "target": "Ol-morijoi, ol-le-'ng-ojine, ol-kimojino o-ado, ol-le-'n-gila, o en-gildipet (Hollis 1905, p. 43).",
          "source": "The thumb, the index finger ('hyena's finger'), the middle finger, the ring finger, and the little finger."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In A. C. Hollis's 'The Masai: Their Language and Folklore' (1905, p. 43), what are the five Masai finger names from thumb to little finger?",
          "correctAnswer": "ol-morijoi (thumb), ol-le-'ng-ojine (index, 'hyena's finger'), ol-kimojino o-ado (middle), ol-le-'n-gila (ring), and en-gildipet (little finger)",
          "options": [
            "ol-morijoi (thumb), ol-le-'ng-ojine (index, 'hyena's finger'), ol-kimojino o-ado (middle), ol-le-'n-gila (ring), and en-gildipet (little finger)",
            "nabo, are, uni, ongwan, and imiet",
            "tikitem, o-som, artam, onom, and iip",
            "'L-Aiser, Il-Meñgana, Il-Mokesen, and Il-Molelyan"
          ],
          "hint": "See Hollis (1905, p. 43)"
        },
        {
          "type": "multiple_choice",
          "prompt": "How many Substantive Plural Classes does Hollis (1905, pp. 18–34) establish for the Masai language?",
          "correctAnswer": "6 Substantive Plural Classes (Classes I–VI, from regular suffixation and stem-consonant reduplication to collective and suppletive plurals)",
          "options": [
            "6 Substantive Plural Classes (Classes I–VI, from regular suffixation and stem-consonant reduplication to collective and suppletive plurals)",
            "2 Noun Classes",
            "16 Bantu Noun Classes",
            "3 Suffixed Definite Article Classes"
          ],
          "hint": "See Hollis (1905, pp. 18–34)"
        }
      ]
    },
    {
      "id": "maasai-hollis-1905-20-stories-proverbs-enigmas",
      "title": "Parts II & III: All 20 Masai Stories ('N-Atinin), 75 Proverbs & 24 Enigmas (pp. 103–259)",
      "icon": "Award",
      "description": "Study the 20 interlinear Masai stories (pp. 103–237), all 75 proverbs and sayings (pp. 238–252), and all 24 riddles/enigmas (pp. 253–259) in Hollis (1905).",
      "tips": "In Part III of Hollis (1905, p. 253), every riddle contest opens with the call 'Oiyote!' ('Are you ready?') and the response 'E-euo!' ('It has come!'), or 'Ki-te-jo!' ('We have spoken — propound your riddle!').",
      "culturalNote": "Part II (pp. 103–237) preserves 20 complete interlinear stories dictated primarily by Justin Ol-omeni (with Story 18 dictated by a small boy at Naivasha and Story 20 by En-gandini of 'L-Uasinkishu), while Part III records 75 Proverbs & Sayings (Nos. 1–75, pp. 238–252) and 24 Enigmas (Nos. 1–24, pp. 253–259).",
      "words": [
        {
          "target": "Stories 1–5: En-gitojo oo 'l-tome (1) • 'L-omon loo-'l-muran o en-gukuu (2) • Ol-kurto oo 'l-changit (3) • E-ngoroyoni oo 'n-gera le-'l-ngaboli (4) • Ol-moruo o-ata ol-bitiro (5)",
          "source": "Stories 1–5 (Hollis 1905, pp. 103–133): The Hare & the Elephants • The Warriors & the Nine-Headed Devil (Ol-le-tepes-apau) • The Caterpillar & the Wild Beasts • The Woman & the Children of the Sycamore Tree • The Greed of the Old Man",
          "pronunciation": "en-gi-to-jo oo l-to-me / l-o-mon loo l-mu-ran o en-gu-kuu / ol-kur-to oo l-cha-ngit",
          "hint": "Hollis (1905, Part II, pp. 103–133)"
        },
        {
          "target": "Stories 6–10: Konyek o menye (6) • Ol-moruo o en-gungu enye (7) • En-dasat o es-singir (8) • Marogo o en-gukuu (9) • En-gitojo o ol-ngojine o eng-aji e-'n-gatuny (10)",
          "source": "Stories 6–10 (Hollis 1905, pp. 133–169): Konyek and His Father • The Old Man and His Knee (Tinik o Ngurenyi) • The Old Woman and the Carp • Marogo and the Devil • The Hare, the Hyena, and the Lioness's Cave",
          "pronunciation": "ko-nyek o me-nye / ol-mo-ruo o en-gu-ngu e-nye / en-da-sat o es-si-ngir / ma-ro-go o en-gu-kuu",
          "hint": "Hollis (1905, Part II, pp. 133–169)"
        },
        {
          "target": "Stories 11–15: En-dimani o ol-ayoni (11) • Il-kinyanguk o en-gitojo (12) • Ol-murani oo 'l-Lumbwa (13) • Ol-ayoni o ol-alashe ('E-itu-rup-aka en-Dambu ang') (14) • In-gitojon are (15)",
          "source": "Stories 11–15 (Hollis 1905, pp. 169–199): The Demon and the Boy • The Monkeys and the Hare • The Warrior and the Lumbwa • The Boy and His Brother and Their Song • The Two Hares",
          "pronunciation": "en-di-ma-ni o ol-a-yo-ni / il-ki-nya-nguk o en-gi-to-jo / ol-mu-ra-ni oo l-lum-bwa",
          "hint": "Hollis (1905, Part II, pp. 169–199)"
        },
        {
          "target": "Stories 16–20: Ol-toroboni o-inyang-ie en-gine (16) • Ol-kurok o-yam-aki e-ngoroyoni (17) • Ol-ngojine o em-barie (18) • In-gatiyok oo-'sidai o en-gatuny (19) • El-langat oo 'l-oidimani (20)",
          "source": "Stories 16–20 (Hollis 1905, pp. 199–237): The Cunning Dorobo • The Crow Who Married a Woman • The Greed of the Hyena & the Cunning of the Jackal • The Ostrich Chickens & the Lioness • The Ford and the Cannibals",
          "pronunciation": "ol-to-ro-bo-ni / ol-ku-rok / ol-ngo-ji-ne o em-ba-rie / el-la-ngat oo l-oi-di-ma-ni",
          "hint": "Hollis (1905, Part II, pp. 199–237)"
        },
        {
          "target": "Oiyote! — E-euo! (Ki-te-jo!) • En-gukuu le-me-eta e-wueji ne-m-e-re. — Ol-oidikidiki (Enigma #9) • Ana-ke-ra ninye tukul, n-e-nyor-i! — En-gila e-'n-gitok (Enigma #7)",
          "source": "Riddle Formula & Enigmas #7 & #9 (Hollis 1905, pp. 253–255): Are you ready? — It has come! • The devil which has no place he does not drive away (The flea) • Dirty though it be, all love it (A woman's greased garment)",
          "pronunciation": "oi-yo-te e-e-uo ki-te-jo / ol-oi-di-ki-di-ki / en-gi-la e-n-gi-tok",
          "hint": "Hollis (1905, Part III Enigmas, pp. 253–259)"
        }
      ],
      "sentences": [
        {
          "target": "Oiyote! — E-euo! E-muny-iny-a ol-kumbau kutuk-aji. — En-gume e-'ng-ashe (Hollis 1905, pp. 253–255, Enigma #8).",
          "source": "Are you ready? — It has come! The projecting rafter constantly moves at the entrance to the hut. — The calf's nose."
        },
        {
          "target": "Me-eta en-gutyuk ol-kurto. • Me-mut el-lughunya nabo eng-eno (Hollis 1905, p. 247, Proverbs #48 & #49).",
          "source": "The mouth has no gouge (caterpillar). • One head does not consume all knowledge."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Story 2 of Hollis (1905, pp. 108–116, \"'L-omon loo-'l-muran o en-gukuu\"), who slays the nine-headed, one-horned devil (e-mowuo nabo na-ata 'l-lughuny naaudo), and from what part of the monster do all the devoured people and cattle emerge?",
          "correctAnswer": "The warrior Ol-le-tepes-apau slays the nine-headed devil, and all the people, cattle, sheep, goats, and donkeys emerge alive when his swollen great toe (ol-kimojino kitok) is cut open",
          "options": [
            "The warrior Ol-le-tepes-apau slays the nine-headed devil, and all the people, cattle, sheep, goats, and donkeys emerge alive when his swollen great toe (ol-kimojino kitok) is cut open",
            "Konyek slays the devil and the people emerge from a sycamore tree",
            "Marogo slays the devil at Lake Naivasha",
            "Le-eyo slays the devil on Mount Kenya"
          ],
          "hint": "See Hollis (1905, Story 2, pp. 108–116)"
        },
        {
          "type": "multiple_choice",
          "prompt": "What is the traditional Masai call-and-response opening formula before propounding an enigma/riddle ('L-oyeti) in Hollis (1905, p. 253)?",
          "correctAnswer": "\"Oiyote!\" (\"Are you ready?\") — Reply: \"E-euo!\" (\"It has come!\") or \"Ki-te-jo!\" (\"We have spoken!\")",
          "options": [
            "\"Oiyote!\" (\"Are you ready?\") — Reply: \"E-euo!\" (\"It has come!\") or \"Ki-te-jo!\" (\"We have spoken!\")",
            "\"Tiangoi!\" — Reply: \"Tia!\"",
            "\"Chondoni!\" — Reply: \"Dekeha!\"",
            "\"Guso!\" — Reply: \"Tegwo!\""
          ],
          "hint": "See Hollis (1905, Part III, p. 253)"
        }
      ]
    },
    {
      "id": "maasai-hollis-1905-clans-ages-myths",
      "title": "Parts IV & V: 4 Clans & 19 Sub-Families, 5 Districts, 15 Ages (1791–1904) & Myths of Eng-ai and Le-eyo (pp. 260–281)",
      "icon": "Crown",
      "description": "Master the 4 Masai clans ('Orot), 19 sub-families (Il-gilat), 2 cattle-dividing moieties, 5 districts, 15 remembered generation ages (1791–1904), and cosmological myths of Eng-ai, Naiteru-kop, Le-eyo, and the stars.",
      "tips": "In Hollis (1905, pp. 260–261), the 4 Clans ('Orot oo-'l-Maasae) are 'L-Aiser (4 sub-families incl. 'N-Gidoñgi of the Oloiboni), Il-Meñgana (4 sub-families), Il-Mokesen (5 sub-families incl. Il-Kiporon snake-charmers/rain-makers), and Il-Molelyan (7 sub-families incl. Il-Kipuyoni smiths). When dividing raided cattle, 'L-Aiser + Il-Meñgana form 'L-oodo-kishu ('the blood-red cattle') and Il-Mokesen + Il-Molelyan form 'L-oorook-kishu ('the black cattle').",
      "culturalNote": "Part V (pp. 264–281) records the myths of Eng-ai Narok (Black God) vs. Eng-ai Nanyokye (Red God), Naiteru-kop ('The Beginner of the Earth'), Le-eyo and the Dorobo's arrow severing the sky-cord of cattle, Le-eyo's reversed chant bringing permanent death to humans while the moon (ol-apa) returns, the quarrel of the Sun (Eng-olong) and Moon (Ol-apa), and Masai star lore.",
      "words": [
        {
          "target": "'L-Aiser ('N-Gidoñgi, Il-Parkeneti, Il-Lughumae, Il-Partimaro) + Il-Meñgana ('L-Aitayok, 'Siria, Il-Marumae, Il-Makuperia) = 'L-oodo-kishu",
          "source": "Clans 1 & 2 forming the 'L-oodo-kishu ('Blood-Red Cattle') Moiety (Hollis 1905, p. 260)",
          "pronunciation": "l-ai-ser n-gi-do-ngi / il-me-nga-na / l-oo-do-ki-shu",
          "hint": "'N-Gidoñgi is the sub-clan of all chief medicine-men ('L-oibonok, Hollis 1905, pp. 260, 324)"
        },
        {
          "target": "Il-Mokesen (Il-Mokesen-aate, Il-Partalale, Il-Tarosero, Il-Kiporon, Il-Tanap-owaru) + Il-Molelyan (Il-Molelyan-aate, Il-Mamasita, Il-Pojos, Il-Kipuyoni, Il-Moshono, Il-Masañgua, Il-Mokorere) = 'L-oorook-kishu",
          "source": "Clans 3 & 4 forming the 'L-oorook-kishu ('Black Cattle') Moiety (Hollis 1905, pp. 260–261)",
          "pronunciation": "il-mo-ke-sen il-ki-po-ron / il-mo-le-lyan il-ki-pu-yo-ni / l-oo-rook-ki-shu",
          "hint": "Il-Kiporon = snake-charmers & rain-makers (p. 308n); Il-Kipuyoni = clan of the smiths (Il-kunono, p. 261)"
        },
        {
          "target": "Il-nyangusi (1791) → Il-merisho (1798) → Il-kidotu (1806) → Il-tiekere (1813) → Il-meshuki (1821) → Il-kisaruni (1828) → Il-kitoip (1836) → Il-kimirisho (1844) → Il-kujuka (1851) → Il-nyangusi II (1859) → 'L-aimer (1866) → Il-talala (1874) → Il-tuati (1881) → Il-kotiek (1889) → Il-kinyoyo / Il-merisho (1896–1904)",
          "source": "All 15 Remembered Masai Generation Ages ('L-poror, 1791–1904, Hollis 1905, pp. 261–263)",
          "pronunciation": "il-nya-ngu-si / il-me-ri-sho / l-ai-mer / il-ta-la-la / il-tu-a-ti / il-ko-tiek / il-ki-nyo-yo",
          "hint": "2 circumcisions (right-hand & left-hand, ~7.5 yrs each) form 1 generation (ol-poror, ~15 yrs, Hollis 1905, pp. 261–263)"
        },
        {
          "target": "\"Ol-tungani, ta-ua n-i-tumi! Ol-apa, ta-ua n-i-wuap!\" (Reversed by Le-eyo to: \"Ol-tungani, ta-ua n-i-wuap! Ol-apa, ta-ua n-i-tumi!\")",
          "source": "Le-eyo's Formula of Human Mortality vs. Lunar Renewal (Hollis 1905, pp. 271–272): \"Man, die and return! Moon, die and remain away!\"",
          "pronunciation": "ol-tu-nga-ni ta-u-a n-i-tu-mi / ol-a-pa ta-u-a n-i-wuap",
          "hint": "Hollis (1905, Part V Myths, pp. 271–272)"
        },
        {
          "target": "Ol-kokua (Pleiades) • Il-merer (Orion's Belt) • Eng-akakwai (Orion's Sword) • Ol-okira le-'n-gop & E-naibor-lukunya (Venus) • Il-baak (Jupiter) • 'L-oidimani (Milky Way) • Ol-kila le-'Ng-ai (Rainbow)",
          "source": "Masai Astronomy & Sky Lore (Hollis 1905, pp. 275–278): Pleiades • Orion's Belt ('running after the 6 widow-stars') • Orion's Sword ('old men'sloin-cloths') • Morning/Evening Star • Jupiter • Milky Way • Rainbow ('God's garment')",
          "pronunciation": "ol-ko-kua / il-me-rer / eng-a-ka-kwai / ol-o-ki-ra le-n-gop / il-baak / l-oi-di-ma-ni",
          "hint": "Hollis (1905, Part V Myths, pp. 275–278)"
        }
      ],
      "sentences": [
        {
          "target": "E-jo Eng-ai Nanyokye: \"To-joo m-a-ar!\" Ne-jo Eng-ai Narok: \"Ta-pala, m-i-ar, amu ki-ata te-'l-likai-ari!\" (Hollis 1905, pp. 264–265).",
          "source": "The Red God says: \"Say that I may slay them!\" And the Black God says: \"Leave them alone, slay them not, for we shall have them another year!\""
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Hollis (1905, pp. 260–261), how are the 4 Masai Clans ('L-Aiser, Il-Meñgana, Il-Mokesen, Il-Molelyan) paired when dividing raided cattle ('n-gishu naa-or-i)?",
          "correctAnswer": "'L-Aiser + Il-Meñgana form 'L-oodo-kishu ('the blood-red cattle'), and Il-Mokesen + Il-Molelyan form 'L-oorook-kishu ('the black cattle')",
          "options": [
            "'L-Aiser + Il-Meñgana form 'L-oodo-kishu ('the blood-red cattle'), and Il-Mokesen + Il-Molelyan form 'L-oorook-kishu ('the black cattle')",
            "'L-Aiser + Il-Mokesen form Il-Kaputiei, and Il-Meñgana + Il-Molelyan form Il-Kisonko",
            "All 4 clans belong to 'N-Gidoñgi",
            "They divide by the 12 lunar months"
          ],
          "hint": "See Hollis (1905, Part IV, pp. 260–261)"
        }
      ]
    },
    {
      "id": "maasai-hollis-1905-customs-botany-songs",
      "title": "Part VI: Masai Customs, Cattle Brands (Il-mishiren & Il-ponot), 'L-oibonok Genealogy, 10 Day-Divisions, 12 Months, 45+ Trees & 8 Songs (pp. 282–356)",
      "icon": "TreePine",
      "description": "Master Part VI of Hollis (1905, pp. 282–356): cattle brands & ear-slits, the 9-generation Oloiboni genealogy, customary restitution fines, 10 day-divisions, 4 seasons & 12 months, 45+ botanical species (Il-kak), and 8 songs & prayers ('Singolioitin).",
      "tips": "In Hollis (1905, p. 290), cattle hide fire-brands are Il-mishiren (sg. ol-mishire; action: em-barisho), ear-slits are Il-ponot (sg. ol-ponoto; action: em-bonoto), and hanging ear-flaps on sheep and donkeys are Il-kipulul (sg. ol-kipululi). Fire is drilled with the hard vertical drill (ol-piron) twirled into the soft horizontal hearth-board (en-dole, pp. 342–344).",
      "culturalNote": "Pages 324–330 record the 9-generation genealogy of the 'N-Gidoñgi chief medicine-men ('L-oibonok) from Ol-le-Mweiya (who came down from Heaven and was found on the Ngong Hills by Kieku of 'L-Aiser) through Kidongoi, Sitonik, Kipepete, Parnyombe, Subet, and Mbatiany (d. c. 1890) to Lenana and Sendeyo.",
      "words": [
        {
          "target": "Il-mishiren (sg. ol-mishire; em-barisho) • Il-ponot (sg. ol-ponoto; em-bonoto) • Il-kipulul (sg. ol-kipululi)",
          "source": "Cattle Hide Fire-Brands • Cattle Ear-Slits • Pendant Ear-Flaps on Sheep & Donkeys (Hollis 1905, p. 290)",
          "pronunciation": "il-mi-shi-ren ol-mi-shi-re / il-po-not ol-po-no-to / il-ki-pu-lul",
          "hint": "Each ol-gilata (sub-family) owns its primary brand and ear-slit pattern (Hollis 1905, p. 290)"
        },
        {
          "target": "Ol-le-Mweiya → Kidongoi → Sitonik → Kipepete → Parnyombe → Subet → Mbatiany → Lenana & Sendeyo",
          "source": "The 9-Generation Genealogy of the 'N-Gidoñgi Chief Medicine-Men ('L-oibonok, Hollis 1905, pp. 324–330)",
          "pronunciation": "ol-le-mwei-ya / ki-do-ngoi / si-to-nik / ki-pe-pe-te / par-nyom-be / su-bet / mba-ti-any / le-na-na sen-de-yo",
          "hint": "Hollis (1905, Part VI, pp. 324–330)"
        },
        {
          "target": "4 Seasons: Ol-tumerer (1–3: Ol-gisan, Ol-adalo, Ol-golua) • Eng-akwai (4–6: Le-erat, O-sarurungai, Oi-nxok) • Ol-ari (7–8: Ol-odoyiorie, O-lo-'n-gokua) • Ol-ameyu (9–12: Kara-obo, Kipisua, O-lo-'n-gushush, Narat)",
          "source": "The 4 Masai Seasons ('L-apaitin le-'n-gop) & All 12 Lunar Months (Hollis 1905, pp. 333–334)",
          "pronunciation": "ol-tu-me-rer / eng-a-kwai / ol-a-ri / ol-a-me-yu",
          "hint": "Ol-tumerer (rain), Eng-akwai (drizzling rain), Ol-ari (heavy rain), Ol-ameyu (dry/hunger season, pp. 333–334)"
        },
        {
          "target": "ol-piron (hard upper fire-drill: ol-okora, o-sinandei, ol-kiloriti, ol-oibor-benek) & en-dole (soft lower hearth: ol-ngaboli, o-reteti, ol-oponi, e-iti)",
          "source": "Masai Fire-Sticks & Sacred Trees (Il-kak, Hollis 1905, pp. 335–344, recording 45+ botanical species)",
          "pronunciation": "ol-pi-ron / en-do-le / ol-ki-lo-ri-ti / ol-nga-bo-li / o-re-te-ti",
          "hint": "Hollis (1905, Part VI, pp. 335–344)"
        },
        {
          "target": "\"Na-ai, ki-omon-o i-ye, k-i-njo-o iyiook e-ishoi! Na-ai, m-i-ar-aki iyiook in-gera ang o in-gishu ang!\" • \"Ol-kokua, taa e-na-ishi!\"",
          "source": "Women's Rain & Child Fertility Prayer to Eng-ai & Prayer to the Pleiades (Hollis 1905, Songs & Prayers Nos. 1–8, pp. 345–356)",
          "pronunciation": "na-ai ki-o-mo-no i-ye k-i-njo-o i-yiook e-i-shoi / ol-ko-kua taa e-na-i-shi",
          "hint": "All 8 Songs & Prayers ('Singolioitin, Hollis 1905, pp. 345–356)"
        }
      ],
      "sentences": [
        {
          "target": "Na-ai, ki-omon-o i-ye, k-i-njo-o iyiook e-ishoi! Ol-kokua, taa e-na-ishi! (Hollis 1905, pp. 346–351).",
          "source": "O God, we pray Thee, give us offspring! O Pleiades, be like honey-wine to us!"
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Hollis (1905, p. 290, \"'L-mishiren oo 'l-ponot loo-'n-gishu\"), what is the exact distinction between Il-mishiren, Il-ponot, and Il-kipulul?",
          "correctAnswer": "Il-mishiren (sg. ol-mishire) are cattle hide fire-brands (em-barisho), Il-ponot (sg. ol-ponoto) are ear-slits (em-bonoto), and Il-kipulul (sg. ol-kipululi) are small hanging ear-flaps on sheep and donkeys",
          "options": [
            "Il-mishiren (sg. ol-mishire) are cattle hide fire-brands (em-barisho), Il-ponot (sg. ol-ponoto) are ear-slits (em-bonoto), and Il-kipulul (sg. ol-kipululi) are small hanging ear-flaps on sheep and donkeys",
            "Il-mishiren are shields, Il-ponot are spears, and Il-kipulul are swords",
            "Il-mishiren are months, Il-ponot are seasons, and Il-kipulul are stars",
            "They are three grades of blacksmiths"
          ],
          "hint": "See Hollis (1905, Part VI, p. 290)"
        }
      ]
    }
  ]
};

// Apply line-by-line Hollis (1905) precision fixes to early units and register Unit 14
if (MAASAI_UNITS[0]?.skills?.[1]) {
  MAASAI_UNITS[0].skills[1].title = "Gendered Numerals 1–10 & Hollis (1905) Oral Wisdom (75 Proverbs & 24 Enigmas)";
  MAASAI_UNITS[0].skills[1].tips = "In Maa (Hollis 1905, pp. 41–45), numbers 1–4, 7, 8, and 9 change form for masculine vs. feminine/place nouns: nabo f. / obo m. / nebo pl. (1), are f. / aare m. (2), uni f. / okuni m. (3), ongwan f. / oongwan m. (4), naapishana f. / oopishana m. (7), isyet f. / oisyet m. (8), and naaudo f. / oudo m. (9), whereas 5 (imiet), 6 (ile), and 10 (tomon) are invariable.";
}
if (MAASAI_UNITS[1]?.skills?.[0]) {
  MAASAI_UNITS[1].skills[0].culturalNote = "In A. C. Hollis's 'The Masai: Their Language and Folklore' (1905, pp. 264–265), the Maasai distinguish two sky powers: Eng-ai Narok (the Benevolent Black God close to earth) and Eng-ai Nanyokye (the Malevolent Red God above). When the Red God flashes sharp lightning (Pel-pel-pel) crying 'To-joo m-a-ar!' ('Say that I may slay them!'), the Black God rumbles in distant thunder (Ruru-ruru-ruru): 'Ta-pala, m-i-ar, amu ki-ata te-\\'l-likai-ari!' ('Leave them alone, slay them not, for we shall have them another year!').";
}
if (MAASAI_UNITS[10]?.skills?.[1]?.sentences?.[1]) {
  MAASAI_UNITS[10].skills[1].sentences[1].target = "Ol-alem la-isho";
}
if (MAASAI_UNITS[11]?.skills?.[0]?.sentences?.[3]) {
  MAASAI_UNITS[11].skills[0].sentences[3].target = "Ol-tungani o-sapuk-u";
  MAASAI_UNITS[11].skills[0].sentences[3].source = "The man will become big (Hollis 1905, p. 38 fn. 4)";
}
MAASAI_UNITS.push(MAASAI_UNIT_14_HOLLIS_1905);

const MAASAI_UNIT_15_HINDE_1901: CourseUnit = {
  id: "maasai-unit-15",
  unitNumber: 15,
  title: "Hildegarde Hinde (1901): Grammatical Rules, 65 Verb Paradigms, 340 Phrases, Songs & Kenyan Place-Names",
  description:
    "Master the complete line-by-line corpus of Hildegarde Hinde's 'The Masai Language: Grammatical Notes Together with a Vocabulary' (Cambridge University Press, 1901, pp. i–xii, 1–75): Rules §§ 1–23, base-60 counting (īp = 60), 9 plural suffix methods, 65 verb conjugations, 340 phrases, salutations, 3 traditional songs, 8 Kenyan toponyms, 10 curses, and vocabulary footnotes.",
  icon: "🏔️",
  color: "#B45309",
  skills: [
    {
      id: "maasai-u15-s1",
      title: "Hinde (1901) Grammatical Rules (§§ 1–23), Base-60 Numerals (īp = 60), 9 Plural Suffixes & 65 Verb Paradigms",
      description:
        "Learn Hinde's 1901 grammatical rules (pp. 1–10), sexagesimal warrior-company counting (īp = 60), 9 regular noun plural suffix methods, singular vs. plural n- infinitives, and 65 verb conjugation tables (pp. 11–30).",
      icon: "📐",
      cefrBand: "C1",
      grammarFocus:
        "Negation prefixes (meti / mer / me / m / ete / etwa / etu), sexagesimal counting (īp = 60), 9 plural suffix methods, singular vs. plural n- infinitives (nadung / negidung), past marker edeba, and t- (sg.) vs. en- (pl.) imperatives.",
      tips: "In Hinde (1901, pp. 4–5), īp means 60 ('which equals our 100. The Masai count in sixties, and a company of warriors is composed of 60 men'), signaled in finger-counting by snapping the fingers of one hand!",
      culturalNote:
        "Compiled during two years among the Masai without interpreters (Preface pp. v–ix, dated British East Africa, 1900; Tipped-in Errata slip between pp. viii and ix; Editor's Note by E. C. M., p. xi), Hinde tested every rule across 20–30 parallel sentences and conjugated over 70 verbs (publishing 65 full tables on pp. 11–30 and 340 conversational phrases on pp. 31–40).",
      vocabulary: [
        {
          target: "nanu (I), iye (thou), nenye / ninyi (he/she/it), iog / eeog (we), ndai / iye (you), nenje / ninji (they)",
          source: "Personal Pronouns & Euphonic Conjunction o/oi: nan oiye ('you and I'), neny oiye ('you and he') (Hinde 1901, Rules 1 & 4, pp. 2–3)",
          pronunciation: "na-nu / i-ye / ne-nye / i-og / ndai / ne-nje",
          hint: "Rule (1) & Rule (4) in Hinde (1901, pp. 2–3)"
        },
        {
          target: "mer torono (not bad), mer gule (not milk) • me sidai (not good), me sabuk (not large) • maiu (I do not want), maiulu (I do not know) • etwaolo (I am not going), eteau (he will not bring)",
          source: "The 4 Negation Prefix Types: mer- (before consonants except s), me- (before s), m- (before vowels), and ete-/etwa-/etu- (Hinde 1901, Rule 3, pp. 2–3)",
          pronunciation: "mer to-ro-no / me si-dai / mai-u / mai-u-lu / e-twa-o-lo",
          hint: "Abbreviated from meti ('not', Rule 3, pp. 2–3)"
        },
        {
          target: "nabu (1), ari (2), ūni (3), ungwun (4), miet (5), elle (6), nabishāna (7), issiet (8), nawdu / endōrroi (9), tomon (10), tigitum (20), ossom (30), arrtam (40), orrnom (50), īp (60 = Masai '100'), īp ari (two sixties = 120)",
          source: "Sexagesimal Numerals & Finger-Counting Signs: closed fist = 5, two closed fists = 10, snapping fingers of one hand = 60 (īp, 1 warrior company) (Hinde 1901, Rules 9–10, pp. 4–5)",
          pronunciation: "na-bu / a-ri / u-ni / u-ngwun / miet / el-le / na-bi-sha-na / is-siet / naw-du / to-mon / ip",
          hint: "Arradua ngishu iīp = 'I see a hundred [60] cows' (p. 4)"
        },
        {
          target: "baba lai (my father) vs. minyi / menye (thy/his father) • yeyu ai (my mother, pl. noiyeyu) vs. ngutungy / ngotongy / nutun / notorn (thy/his/their mother)",
          source: "Possessive Adjectives & Kinship Suppletion Note (Hinde 1901, Rule 12 p. 6, Rule 19 p. 9 & Phrase Footnote * p. 35)",
          pronunciation: "ba-ba lai / mi-nyi / me-nye / ye-yu ai / noi-ye-yu / ngu-tu-ngy",
          hint: "baba and yeyu are never used in the 2nd or 3rd person (p. 35 fn. *)"
        },
        {
          target: "nadung (sg.) / negidung (pl.) 'to cut' • nebong (sg.) / negibong (pl.) 'to catch' • naisoja (sg.) / negasoja (pl.) 'to bathe' • tarranya! (sg.) / endarrain! (pl.) 'sing!'",
          source: "Singular vs. Plural Infinitives in n- (Rule 13), Past Prefix edeba (Rule 14) & Singular t- vs. Plural en- Imperatives (Rule 16, pp. 6–8)",
          pronunciation: "na-dung / ne-gi-dung / ne-bong / ne-gi-bong / tar-ra-nya / en-dar-rain",
          hint: "65 verb conjugation tables (54 regular, 4 irregular, 7 negative, pp. 11–30)"
        }
      ],
      sentences: [
        {
          target: "Arradua ngishu iīp. Eti enne ndari tomonoimiet.",
          source: "I see a hundred [sixty] cows. There are fifteen goats here. (Hinde 1901, pp. 4, 39)"
        },
        {
          target: "Ainyo berora? Aiyu nanu nalo, kaki maiu nanya.",
          source: "Why sleep? I want to go, but I do not want to eat. (Hinde 1901, pp. 2, 10, 31, 33)"
        }
      ],
      authoredExercises: [
        {
          type: "multiple_choice",
          prompt: "In Hildegarde Hinde's 'The Masai Language' (1901, Rules 9–10, pp. 4–5), what number does 'īp' (their '100') actually represent, why, and how is it signed on the hand?",
          correctAnswer: "60 — because the Masai count in sixties and a company of warriors is composed of 60 men; it is signed by snapping the fingers of one hand",
          options: [
            "60 — because the Masai count in sixties and a company of warriors is composed of 60 men; it is signed by snapping the fingers of one hand",
            "50 — because a herd of cattle has 50 cows; it is signed by raising both thumbs",
            "120 — because two warrior companies march together; it is signed by clapping twice",
            "40 — because forty days make a rainy season; it is signed by touching the forehead"
          ],
          hint: "See Hinde (1901, Rules 9–10, pp. 4–5)"
        }
      ]
    },
    {
      id: "maasai-u15-s2",
      title: "Hinde (1901) Salutations, 3 Songs, 3 Ethnonyms, 8 Geographical Place-Names, 10 Curses & Loanword Footnotes (pp. 41–75)",
      description:
        "Explore the salutations, 3 traditional songs (Children's Rain Song, Medicine Song to Mbatian, and Warriors' Song against Sendeyo), 3 ethnonyms, 8 Kenyan geographical names, 10 curses, and 5 vocabulary footnotes on pp. 41–75.",
      icon: "🎶",
      cefrBand: "C2",
      grammarFocus:
        "Ritual vocatives, compound place-name constructions (oldonyo + colour adjective; ngare / gwasso + modifier), and contact loanwords from Kikuyu and Swahili.",
      tips: "Notice how three major Rift Valley / Central Highlands mountains are named by colour on p. 42: Mt. Kenya = oldonyo gēri ('the striped mountain'), Kilimanjaro = oldonyo eborr ('the white mountain'), and Mt. Suswa = oldonyo kenyuki ('the red mountain').",
      culturalNote:
        "Page 42 of Hinde (1901) preserves three historic songs from the 1890s—including the Medicine Song invoking the great prophet Mbatian ('Aamon yi ngai, aamon m'Batian') and the Warriors' War-Song when marching against Mbatian's son Sendeyo ('Sendeyo manoloimoti tendeboi errakenja bonik oldash irremeta').",
      vocabulary: [
        {
          target: "tagwenia! (lit. 'laugh', pl. tagwenia bōōgi!) — Reply: īgo! • soboi! — Reply: eber! • nassak! (on shaking hands)",
          source: "Salutations to a Woman, to a Man, and on Shaking Hands (Hinde 1901, p. 41)",
          pronunciation: "ta-gwe-nia / i-go / so-boi / e-ber / nas-sak",
          hint: "Hinde (1901, p. 41)"
        },
        {
          target: "1. \"Siumbi aielisiumbi ngai kijaiga eo!\" • 2. \"Aamon yi ngai, aamon m'Batian.\" • 3. \"Sendeyo manoloimoti tendeboi errakenja bonik oldash irremeta.\"",
          source: "All 3 Traditional Songs on p. 42: Children's Rain Song ('God we sing, God rain we pray thee oh!'), Medicine Song ('We pray God, we pray Batian'), and Warriors' Song When Going to Fight Sendeyo",
          pronunciation: "si-um-bi ai-e-li-si-um-bi ngai / aa-mon yi ngai aa-mon m-ba-tian / sen-de-yo ma-no-loi-mo-ti",
          hint: "Recorded verbatim on p. 42 of Hinde (1901)"
        },
        {
          target: "Orrmāssani (pl. elmāsai, Masai) • olldōrrobon (pl. dōrrobo, Hunters) • orrgunoni (pl. elgunonu, Iron workers)",
          source: "The 3 Social & Occupational Group Ethnonyms (Hinde 1901, p. 42)",
          pronunciation: "orr-mas-sa-ni / el-ma-sai / oll-dor-ro-bon / orr-gu-no-ni / el-gu-no-nu",
          hint: "Pastoralists, forest hunters, and blacksmith caste (p. 42)"
        },
        {
          target: "oldonyo gēri (Mt. Kenya, 'striped mountain') • oldonyo eborr (Kilimanjaro, 'white mountain') • oldonyo kenyuki (Suswa, 'red mountain') • ngare nairobi ('cold water') • Ngongo bagas ('eye of the Spring') • Eldonyo sabuk ('big mountain') • Gwasso kidong ('river of ollokidong quiver trees') • Enaibasha ('great water or sea')",
          source: "All 8 Geographical Names & Etymologies Recorded on p. 42 of Hinde (1901)",
          pronunciation: "ol-do-nyo ge-ri / ol-do-nyo e-borr / ol-do-nyo ke-nyu-ki / nga-re nai-ro-bi / e-nai-ba-sha",
          hint: "Hinde (1901, p. 42)"
        },
        {
          target: "engiondo pl. engiondoni (Kikuyu basket, p. 48) • ngwashin (Kikuyu potato, p. 65) • ndudu (Swahili jigger, p. 59) • ngaioulu (syphilis, lit. 'God knows', p. 70)",
          source: "The 4 Lexical Loanword & Medical History Footnotes in Hinde's Vocabulary (1901, pp. 48, 59, 65, 70)",
          pronunciation: "en-gion-do / ngwa-shin / ndu-du / ngai-ou-lu",
          hint: "Kikuyu agricultural trade loans and Swahili caravan-era disease terms"
        }
      ],
      sentences: [
        {
          target: "Siumbi aielisiumbi ngai kijaiga eo! Aamon yi ngai, aamon m'Batian.",
          source: "God we sing, God rain we pray thee oh! We pray God, we pray Batian. (Hinde 1901, p. 42)"
        },
        {
          target: "Sendeyo manoloimoti tendeboi errakenja bonik oldash irremeta.",
          source: "Sendeyo has done evil, we were friends once but now we go to fight him with our spears, the big ones in front, the small behind. (Hinde 1901, p. 42)"
        }
      ],
      authoredExercises: [
        {
          type: "multiple_choice",
          prompt: "On page 42 of Hildegarde Hinde's 'The Masai Language' (1901), what are the exact Masai names and meanings given for Mount Kenya, Mount Kilimanjaro, Mount Suswa, and the Kedong River (Gwasso kidong)?",
          correctAnswer: "Mt. Kenya = oldonyo gēri ('the striped mountain'), Kilimanjaro = oldonyo eborr ('the white mountain'), Suswa = oldonyo kenyuki ('the red mountain'), and Gwasso kidong = 'the river of the ollokidong trees (the wood of which is used for making quivers)'",
          options: [
            "Mt. Kenya = oldonyo gēri ('the striped mountain'), Kilimanjaro = oldonyo eborr ('the white mountain'), Suswa = oldonyo kenyuki ('the red mountain'), and Gwasso kidong = 'the river of the ollokidong trees (the wood of which is used for making quivers)'",
            "Mt. Kenya = oldonyo eborr, Kilimanjaro = oldonyo kenyuki, Suswa = oldonyo sabuk, and Gwasso kidong = 'river of red stones'",
            "Mt. Kenya = Eldonyo sabuk, Kilimanjaro = Enaibasha, Suswa = Ngongo bagas, and Gwasso kidong = 'eye of the spring'",
            "They are all named after Masai medicine-men"
          ],
          hint: "See Hinde (1901, Geographical Names, p. 42)"
        }
      ]
    }
  ]
};

MAASAI_UNITS.push(MAASAI_UNIT_15_HINDE_1901);
