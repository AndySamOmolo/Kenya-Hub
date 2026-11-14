import type {
  DictEntry,
  DictCategory,
  Dictionary,
  DictCategoryMeta,
  DictMeta,
} from "./types";

export type { DictEntry, DictCategory, Dictionary, DictCategoryMeta, DictMeta };

// ============================================================
// Dictionary Metadata Catalog & Category Index (22 Languages)
// ============================================================

export const ALL_DICT_METAS: DictMeta[] = [
  {
    "languageId": "swahili",
    "languageName": "Swahili (Kiswahili)",
    "family": "bantu",
    "nativeName": "Kiswahili",
    "script": "Latin",
    "speakerCount": 15000000,
    "counties": [
      "Mombasa",
      "Lamu",
      "Kilifi",
      "Kwale",
      "Tana River"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.1",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Swahili (Kiswahili: Kiunguja, Kimvita, Kiamu, Kitikuu, Kipate, Kingozi) vocabulary compiled from Rev. Dr. J. L. Krapf (1850, 1882), Bishop Edward Steere (1870, 1894, 1918), Rev. W. E. Taylor (1891), George W. Bateman (1901), A. C. Madan (1902, 1903, 1905, 1917 \"English-Swahili Vocabulary\", SPCK London, pp. 1–56 [PDF pp. 1–72]), Hildegarde Hinde (1904), Mrs. F. Burt (1910), Capt. C. H. Stigand (1915), Mervyn W. H. Beech (1918), Prof. Alice Werner (1918, 1919, 1933), Sir Harry H. Johnston (1919), Deo Ngonyani & Nancy Ngowa (2016), Mohamed Mwamzandi (2022), and John Goldsmith & Fidèle Mpiranya (2022).",
    "totalEntries": 17352,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 65
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 192
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 462
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 488
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 392
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 986
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 648
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 465
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 2710
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 378
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 526
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 461
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 357
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 406
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 8636
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 180
      }
    ]
  },
  {
    "languageId": "kikuyu",
    "languageName": "Kikuyu (Gĩkũyũ)",
    "family": "bantu",
    "nativeName": "Gĩkũyũ",
    "script": "Latin",
    "speakerCount": 8100000,
    "counties": [
      "Kiambu",
      "Murang'a",
      "Nyeri",
      "Kirinyaga",
      "Nyandarua"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.2",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Gĩkũyũ (Kikuyu) vocabulary compiled from Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902, 1919), Rev. Fr. A. Hémery, C.S.Sp. (1903 \"English-Kikuyu Hand-Book\", Zanzibar—Nairobi: Roman Catholic Mission, pp. 1–87 [PDF pp. 1–92]), Hildegarde Hinde (1904), Rev. A. W. McGregor (1904 \"English-Kikuyu Vocabulary\", C.M.S. / SPCK London, Fort Smith / Kabeti 1901–1902, pp. i–iv, 5–192 [PDF pp. 1–201]), W. Scoresby & Katherine Routledge (1910 \"With a Prehistoric People: The Akikúyu of British East Africa\", Edward Arnold London, pp. i–xxxii, 1–392, Plates I–CXXXVI), C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and BFBS (1921).",
    "totalEntries": 10707,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 30
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 116
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 246
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 408
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 256
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 482
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 338
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 312
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 822
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 357
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 161
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 95
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 148
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 223
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 3725
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 2988
      }
    ]
  },
  {
    "languageId": "luo",
    "languageName": "Dholuo (Luo)",
    "family": "nilotic",
    "nativeName": "Dholuo",
    "script": "Latin",
    "speakerCount": 5800000,
    "counties": [
      "Kisumu",
      "Siaya",
      "Homa Bay",
      "Migori"
    ],
    "hasAudio": true,
    "dictionaryVersion": "3.5",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Dholuo (Luo) vocabulary compiled from C. W. Hobley (1902 \"Eastern Uganda: An Ethnological Survey\" pp. 1–96 & 1903 \"Anthropological Studies in Kavirondo and Nandi\"), Sir Harry H. Johnston (1902), G. A. S. Northcote (1907), Rev. John Roscoe & Archdeacon J. J. Willis (1915 \"The Northern Bantu\", Ch. XXV & Kinship Table pp. 275–293), Some Fathers of St. Joseph's Society / Mill-Hill Fathers (1920–1921 \"A Handbook of the Kavirondo Language, Containing the Grammar and Phraseology\", Caxton Printing & Publishing Works, Nairobi), and BFBS (1921).",
    "totalEntries": 2755,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 25
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 57
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 140
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 125
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 168
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 144
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 122
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 146
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 348
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 75
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 42
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 21
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 36
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 105
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 857
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 344
      }
    ]
  },
  {
    "languageId": "kalenjin",
    "languageName": "Kalenjin",
    "family": "nilotic",
    "nativeName": "Kalenjin",
    "script": "Latin",
    "speakerCount": 6400000,
    "counties": [
      "Uasin Gishu",
      "Nandi",
      "Kericho",
      "Bomet",
      "Baringo",
      "Elgeyo-Marakwet",
      "Trans Nzoia",
      "West Pokot"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.4",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Kalenjin (Nandi / Kipsigis [Lumbwa / Il Kakesan] / Keiyo / Tugen [Kamasia: Kapteberewa & Nderois] / Marakwet & Endo [Chebleng] / Kabkamat [Olmo] / Sangwirr / Uasin Gishu [Moiven / Muttia / Il-Mokwan / I-Sirikwa] / Sabaot / Ogiek) vocabulary compiled from C. W. Hobley (1902 \"Eastern Uganda: An Ethnological Survey\" pp. 1–96, 1903 \"Anthropological Studies in Kavirondo and Nandi\", 1910), Sir Harry H. Johnston (1902), A. C. Hollis (1909 \"The Nandi: Their Language and Folk-Lore\"), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 49–72), BFBS (1921), Michael Diercks & Meghana Rao (2019), Meredith Landman (2019), and Joost Zwarts, Andrew Kipkosgei Chelimo & Prisca Jerono (2024).",
    "totalEntries": 4633,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 11
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 98
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 196
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 292
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 341
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 262
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 206
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 244
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 203
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 164
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 161
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 36
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 90
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 146
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 626
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 1557
      }
    ]
  },
  {
    "languageId": "luhya",
    "languageName": "Luhya (Luyia)",
    "family": "bantu",
    "nativeName": "Oluluyia",
    "script": "Latin",
    "speakerCount": 6800000,
    "counties": [
      "Kakamega",
      "Bungoma",
      "Vihiga",
      "Busia"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.4",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Luhya (Oluluyia: Luwanga, Lubukusu, Lumasaba, Lulogooli, Lusinga/Chula) vocabulary compiled from C. W. Hobley (1902 \"Eastern Uganda: An Ethnological Survey\" pp. 1–96 & 1903 \"Anthropological Studies in Kavirondo and Nandi\"), Sir Harry H. Johnston (1902, 1919 #5–6a), Rev. J. B. Purvis (1907, 1909 \"Through Uganda to Mount Elgon\"), Rev. John Roscoe (1915 \"The Northern Bantu\"), BFBS (1921), Rev. N. Stam (1929 \"The Bahanga\"), and Payne, Pacchiarotti & Bosire eds. (2016 \"Diversity in African Languages\", Chs. 9, 11, 12, 15).",
    "totalEntries": 3537,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 14
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 159
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 177
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 308
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 364
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 239
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 186
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 225
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 375
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 134
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 71
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 32
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 66
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 98
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 648
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 441
      }
    ]
  },
  {
    "languageId": "kamba",
    "languageName": "Kamba (Kĩkamba)",
    "family": "bantu",
    "nativeName": "Kĩkamba",
    "script": "Latin",
    "speakerCount": 4600000,
    "counties": [
      "Machakos",
      "Makueni",
      "Kitui"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Kamba (Kĩkamba) vocabulary compiled from Rev. Dr. J. L. Krapf (1850), J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), Sir Harry H. Johnston (1919 #12), Gerhard Lindblom (1920), BFBS (1921), and Patrick Jones & Jeremy Freyer (2019).",
    "totalEntries": 4076,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 16
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 54
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 114
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 165
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 187
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 190
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 131
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 151
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 172
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 135
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 138
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 57
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 73
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 115
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 2061
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 317
      }
    ]
  },
  {
    "languageId": "meru",
    "languageName": "Meru (Kĩmĩĩrũ)",
    "family": "bantu",
    "nativeName": "Kĩmĩĩrũ",
    "script": "Latin",
    "speakerCount": 2000000,
    "counties": [
      "Meru",
      "Tharaka-Nithi"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Meru (Kĩmĩĩrũ / Kĩtharaka / Kĩcuka / Kĩmwimbi) vocabulary compiled from C. W. Hobley (1910), Arthur M. Champion (1912 \"The Atharaka\"), Hon. Charles Dundas (1915 \"The Organization and Laws of Some Bantu Tribes in East Africa\"), Sir Harry H. Johnston (1919 #11–11a), Prof. Kithaka wa Mberia (2004 \"The Phonology of Borrowed Words in Kitharaka\"), and Unicode CLDR (mer.xml).",
    "totalEntries": 569,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 6
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 18
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 23
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 54
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 13
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 22
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 26
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 8
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 12
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 6
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 6
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 7
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 27
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 152
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 189
      }
    ]
  },
  {
    "languageId": "maasai",
    "languageName": "Maasai (Maa)",
    "family": "nilotic",
    "nativeName": "ɔl Maa",
    "script": "Latin",
    "speakerCount": 1200000,
    "counties": [
      "Narok",
      "Kajiado",
      "Samburu"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.2",
    "lastUpdated": "2026-11-13",
    "contributorNote": "Maasai (ɔl Maa) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), R. N. Cust (1883), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Hildegarde Hinde (1901 \"The Masai Language: Grammatical Notes Together with a Vocabulary\", Cambridge University Press, pp. i–xii, 1–75 [PDF pp. 1–98]: Preface critiquing Ehrhardt 1857 & Johnston, Errata slip, Grammatical Rules §§ 1–23, 9 Regular Plural Suffix Methods, Sexagesimal Base-60 Counting [īp = 60], 65 Verb Conjugation Paradigms, 340 Conversational Phrases, Salutations, 3 Songs, 3 Ethnonyms, 8 Kenyan Place-Names, 10 Curses & ~1,050-entry Vocabulary with 5 Footnotes), Sir Harry H. Johnston (1902), A. C. Hollis (1905 \"The Masai: Their Language and Folklore\", Oxford: Clarendon Press, pp. i–xxviii, 1–359: Part I Grammar with 6 Substantive Plural Classes, Kinship Terms, Finger-Counting 1–60, 27-Row Subject–Object Verb Prefix Table & 8 Derivative Verb Formations; Part II All 20 Masai Stories; Part III All 75 Proverbs & Sayings and All 24 Enigmas; Part IV 4 Clans, 2 Moieties, 19 Sub-Families, 5 Districts & 15 Ages 1791–1904; Part V Cosmology, Myths & Astronomy; Part VI Customs, Cattle Brands Il-mishiren & Il-ponot, 9-Generation 'L-oibonok Genealogy, 10 Divisions of the Day, 4 Seasons & 12 Lunar Months, 45+ Botanical Species & 8 Songs/Prayers), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 49–57), C. W. Hobley (1910, 1922), W. Scoresby & Katherine Routledge (1910, Appendix II pp. 344–349 & Plate CXXXVI), and BFBS (1921).",
    "totalEntries": 2346,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 9
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 55
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 163
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 151
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 202
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 130
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 126
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 105
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 123
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 100
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 31
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 15
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 54
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 67
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 402
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 613
      }
    ]
  },
  {
    "languageId": "kisii",
    "languageName": "Kisii (Ekegusii)",
    "family": "bantu",
    "nativeName": "Ekegusii",
    "script": "Latin",
    "speakerCount": 2700000,
    "counties": [
      "Kisii",
      "Nyamira"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.3",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Kisii (Ekegusii / Kossova) vocabulary compiled from C. W. Hobley (1902 \"Eastern Uganda: An Ethnological Survey\" pp. 8–9, 51, 86, 89–91) and Sir Harry H. Johnston (1902 \"The Uganda Protectorate, Vol. II\", 1919–1922 \"A Comparative Study of the Bantu and Semi-Bantu Languages\" #7 Ki-guzii & #7a Ki-koria).",
    "totalEntries": 1116,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 4
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 94
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 77
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 138
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 133
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 102
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 64
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 76
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 41
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 32
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 16
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 5
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 11
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 40
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 109
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 174
      }
    ]
  },
  {
    "languageId": "somali",
    "languageName": "Somali",
    "family": "cushitic",
    "nativeName": "Af-Soomaali",
    "script": "Latin",
    "speakerCount": 2400000,
    "counties": [
      "Garissa",
      "Wajir",
      "Mandera",
      "Isiolo"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.2",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Somali (Af-Soomaali) vocabulary compiled from R. N. Cust (1883), Rev. Fr. Evangelist de Larajasse (1897 \"Somali-English and English-Somali Dictionary\" — audited 100% line-by-line across Front Matter, Preface pp. v–xiii, 44 Abbreviations, 20-row Kenya Reference Table, and Full Two-Column Page Transcriptions of Book pp. 26, 123, 127, 242, 266 & 293), Sir Harry H. Johnston (1902), Lt. J. W. C. Kirk (1903 \"Notes on the Somali Language\", 1905 \"A Grammar of the Somali Language with Examples in Prose and Verse and an Account of the Yibir and Midgan Dialects\" — audited 100% line-by-line across §§ 1–289, Appendices I–III, Prose Stories I–XI, Songs I–XIV, and Yibir/Midgan Vocabularies), BFBS (1921), Morgan Nilsson (2016), Wendell Kimper et al. (2019), and Anna M. DiGarbo & Rose Stamp (2019).",
    "totalEntries": 2518,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 10
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 83
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 154
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 121
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 186
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 76
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 92
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 101
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 46
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 69
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 57
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 29
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 16
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 100
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 816
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 562
      }
    ]
  },
  {
    "languageId": "turkana",
    "languageName": "Turkana",
    "family": "nilotic",
    "nativeName": "Ng'aturukana",
    "script": "Latin",
    "speakerCount": 1100000,
    "counties": [
      "Turkana"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Turkana (Ng'aturkana) vocabulary compiled from Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909 \"Through Uganda to Mount Elgon\", Ch. XIII), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 66–70, Plates XVI–XVII), Mervyn W. H. Beech (1911), and Juxon Barton (1921).",
    "totalEntries": 2023,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 12
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 24
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 88
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 107
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 152
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 114
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 63
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 104
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 263
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 81
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 12
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 5
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 31
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 99
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 646
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 222
      }
    ]
  },
  {
    "languageId": "mijikenda",
    "languageName": "Mijikenda (Giriama)",
    "family": "bantu",
    "nativeName": "Kigiriama",
    "script": "Latin",
    "speakerCount": 2500000,
    "counties": [
      "Kilifi",
      "Kwale",
      "Mombasa"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Mijikenda (Kigiryama, Chidigo, Chiduruma, Kirabai) vocabulary compiled from Rev. Dr. J. L. Krapf (1850, 1882), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891), Prof. Alice Werner (1915), Sir Harry H. Johnston (1919 #16), BFBS (1921), and Steve Nicolle (2016).",
    "totalEntries": 7928,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 15
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 72
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 106
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 130
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 111
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 262
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 204
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 130
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 903
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 173
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 127
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 68
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 93
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 94
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 5131
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 309
      }
    ]
  },
  {
    "languageId": "teso",
    "languageName": "Teso (Ateso)",
    "family": "nilotic",
    "nativeName": "Ateso",
    "script": "Latin",
    "speakerCount": 468000,
    "counties": [
      "Busia"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.1",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Teso (Ateso / Elgumi / Wamia) vocabulary compiled from C. W. Hobley (1902 \"Eastern Uganda: An Ethnological Survey\" pp. 9, 46–47, 57, 92–95), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909 \"Through Uganda to Mount Elgon\"), Archdeacon A. L. Kitching (1915 \"A Handbook of the Ateso Language\"), Rev. John Roscoe (1915 \"The Northern Bantu\", Part V \"The Bateso\" & Kinship Table pp. 257–293), and BFBS (1921).",
    "totalEntries": 576,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 7
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 23
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 23
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 39
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 49
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 35
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 27
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 15
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 49
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 4
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 0
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 104
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 177
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 24
      }
    ]
  },
  {
    "languageId": "embu",
    "languageName": "Embu (Kĩembu)",
    "family": "bantu",
    "nativeName": "Kĩembu",
    "script": "Latin",
    "speakerCount": 580000,
    "counties": [
      "Embu"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Embu & Mbeere (Kĩembu / Kĩmbeere) vocabulary compiled from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915 \"The Organization and Laws of Some Bantu Tribes in East Africa\"), Sir Harry H. Johnston (1919 #11), and Unicode CLDR (ebu.xml).",
    "totalEntries": 571,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 8
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 18
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 27
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 47
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 37
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 86
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 30
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 59
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 7
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 1
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 4
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 196
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 14
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 36
      }
    ]
  },
  {
    "languageId": "taita",
    "languageName": "Taita (Kidawida)",
    "family": "bantu",
    "nativeName": "Kidaw'ida / Kisagala",
    "script": "Latin",
    "speakerCount": 410000,
    "counties": [
      "Taita-Taveta"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.4",
    "lastUpdated": "2026-11-11",
    "contributorNote": "Taita (Kidawida / Kisagala / Kikasigau) vocabulary compiled and verified line-by-line from Rev. Dr. J. L. Krapf (1850), Rev. A. Downes Shaw (1885), Rev. W. E. Taylor (1891), Rev. J. Alfred Wray (1894 \"An Elementary Introduction to the Taita Language, Eastern Equatorial Africa: Sagalla Dialect\", SPCK London — 100% of Preface pp. ii–iii, Part I Grammar pp. 5–76, and Part II English–Sagalla Vocabulary pp. 77–128), Prof. Alice Werner (1915), Sir Harry H. Johnston (1919 #14), and BFBS (1921).",
    "totalEntries": 3571,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 16
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 62
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 91
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 136
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 141
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 168
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 102
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 92
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 396
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 134
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 32
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 25
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 58
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 84
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 1015
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 1019
      }
    ]
  },
  {
    "languageId": "taveta",
    "languageName": "Taveta (Kitaveta)",
    "family": "bantu",
    "nativeName": "Kitaveta / Kituweta",
    "script": "Latin",
    "speakerCount": 25000,
    "counties": [
      "Taita-Taveta"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Taveta (Kitaveta / Kituweta) vocabulary compiled from Rev. A. R. Steggall (1892–1906), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), A. C. Hollis (1910–1911), Sir Harry H. Johnston (1919 #15), and BFBS (1921).",
    "totalEntries": 457,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 3
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 29
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 31
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 51
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 45
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 48
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 23
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 27
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 53
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 33
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 20
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 3
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 4
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 16
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 56
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 15
      }
    ]
  },
  {
    "languageId": "pokomo",
    "languageName": "Pokomo (Kipfokomo)",
    "family": "bantu",
    "nativeName": "Kipfokomo",
    "script": "Latin",
    "speakerCount": 120000,
    "counties": [
      "Tana River"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Pokomo (Kipfokomo / Kipokomo) dictionary compiled from Rev. Dr. J. L. Krapf (1850), Ferdinand Würtz (1895), Prof. Alice Werner (1913, 1915 \"The Bantu Coast Tribes of the East Africa Protectorate\", 1933 \"Myths and Legends of the Bantu\"), Sir Harry H. Johnston (1919 #13), BFBS (1921), and Mikael Samson & R. G. Darroch (1944 \"A History of the Pokomo [Vyuo vya Wapokomo]\", JRAI Vol. 73).",
    "totalEntries": 2303,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 14
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 28
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 46
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 70
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 38
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 122
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 52
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 42
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 91
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 65
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 81
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 41
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 44
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 40
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 1278
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 251
      }
    ]
  },
  {
    "languageId": "borana",
    "languageName": "Borana (Oromo)",
    "family": "cushitic",
    "nativeName": "Afaan Borana / Afaan Oromoo",
    "script": "Latin",
    "speakerCount": 550000,
    "counties": [
      "Marsabit",
      "Isiolo",
      "Moyale",
      "Tana River (Orma)",
      "Garissa"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.6",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Borana / Oromo (Afaan Borana / Orma / Kigalla) vocabulary compiled from Rev. J. L. Krapf & Rev. C. W. Isenberg (1840 \"An Imperfect Outline of the Elements of the Galla Language\", 1842 \"Vocabulary of the Galla Language\", 1850 \"Vocabulary of Six East-African Languages\"), Charles & Lawrence Tutschek (1844 \"Dictionary of the Galla Language / Lexicon der Galla Sprache\" Part I pp. I–LIX, 1–205; 1845 Part II pp. 1–126 & \"A Grammar of the Galla Language\" pp. I–VIII, 1–107, with Akafed'e Dalle of Hambo, Otshu Aga of Sibu, Bilile of Guma, Aman Gonda of Goma, and Duke Paul William of Württemberg), R. N. Cust (1883), E. C. Foot (1913), Prof. Alice Werner (1915), BFBS (1921), and Catherine Griefenow-Mewis (1996).",
    "totalEntries": 7663,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 32
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 74
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 142
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 213
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 213
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 330
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 168
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 208
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 850
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 189
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 132
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 91
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 117
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 120
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 4692
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 92
      }
    ]
  },
  {
    "languageId": "rendille",
    "languageName": "Rendille (Afi Ren'dille)",
    "family": "cushitic",
    "nativeName": "Afi Ren'dille",
    "script": "Latin",
    "speakerCount": 96000,
    "counties": [
      "Marsabit"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Rendille (Af-Rendille) vocabulary compiled from Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 51, 66), C. W. Hobley (1910 \"Ethnology of A-Kamba and Other East African Tribes\"), Harold C. Fleming (1964), and Bernd Heine (1976).",
    "totalEntries": 176,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 7
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 11
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 14
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 14
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 14
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 17
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 11
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 26
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 14
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 2
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 16
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 30
      }
    ]
  },
  {
    "languageId": "samburu",
    "languageName": "Samburu (Sampur)",
    "family": "nilotic",
    "nativeName": "Sampur / ɔl Maa",
    "script": "Latin",
    "speakerCount": 310000,
    "counties": [
      "Samburu",
      "Marsabit",
      "Isiolo",
      "Laikipia"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Samburu (Sampur / Northern Maa) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 49–55), C. W. Hobley (1910), and Rainer Vossen (1982).",
    "totalEntries": 684,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 6
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 23
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 20
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 43
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 45
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 78
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 18
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 22
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 51
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 1
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 342
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 35
      }
    ]
  },
  {
    "languageId": "ilchamus",
    "languageName": "Ilchamus (Njemps)",
    "family": "nilotic",
    "nativeName": "Ilchamus / Camus",
    "script": "Latin",
    "speakerCount": 35000,
    "counties": [
      "Baringo"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Ilchamus (Njemps / Njamus / Nyarusi / En-jemusi) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 49–55), Mervyn W. H. Beech (1911), and Bernd Heine (1980).",
    "totalEntries": 328,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 4
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 21
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 17
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 35
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 45
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 30
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 16
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 20
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 50
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 1
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 19
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 70
      }
    ]
  },
  {
    "languageId": "pokot",
    "languageName": "Pokot (Pökoot)",
    "family": "nilotic",
    "nativeName": "Pökoot / Kimukon",
    "script": "Latin",
    "speakerCount": 783000,
    "counties": [
      "West Pokot",
      "Baringo"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Pokot (Pökoot / Suk / Bawgott) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Sir Harry H. Johnston (1902), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 56–65, 72, Plates XV–XVII), Mervyn W. H. Beech (1911 \"The Suk: Their Language and Folklore\"), and Juxon Barton (1921).",
    "totalEntries": 2819,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 10
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 67
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 124
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 157
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 189
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 157
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 111
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 88
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 314
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 112
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 34
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 12
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 50
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 76
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 1083
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 235
      }
    ]
  },
  {
    "languageId": "daasanach",
    "languageName": "Daasanach (Dhaasanac)",
    "family": "cushitic",
    "nativeName": "'Af Dhaasanac",
    "script": "Latin",
    "speakerCount": 65000,
    "counties": [
      "Marsabit"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Daasanach ('Af Dhaasanac / Dasanech / Geleba / Reshiat) Lowland East Cushitic (Omo-Tana) dictionary compiled manually from Václav Blažek (2011) 'Dasanech Language: State-of-the-Art' (citing Mauro Tosco 2001 'The Dhaasanac Language', Hans-Jürgen Sasse 1974/1976, E. R. Shackleton 1933), Sumiyo Nishiguchi (2004) 'Consonant Assimilation and Sonority: A Case Study in Daasanach' (fieldwork at Ileret, Marsabit County, Kenya, 2003–2004), and Lieut. Ludwig von Höhnel (1894) 'Discovery of Lakes Rudolf and Stefanie' (Reshiat / Buma / Marle on the northeastern shore of Lake Turkana).",
    "totalEntries": 141,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 3
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 13
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 11
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 20
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 14
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 19
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 6
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 4
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 21
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 17
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 2
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 8
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 3
      }
    ]
  }
];

export const DICT_META_MAP: Record<string, DictMeta> = Object.fromEntries(
  ALL_DICT_METAS.map((m) => [m.languageId, m])
);

export const ALL_CATEGORY_IDS: { id: string; name: string; icon: string }[] = [
  {
    "id": "greetings",
    "name": "Greetings & Farewells",
    "icon": "👋"
  },
  {
    "id": "numbers",
    "name": "Numbers & Counting",
    "icon": "🔢"
  },
  {
    "id": "family",
    "name": "Family, People & Kinship",
    "icon": "👨‍👩‍👧‍👦"
  },
  {
    "id": "body",
    "name": "Body Parts & Health",
    "icon": "🫁"
  },
  {
    "id": "animals",
    "name": "Animals, Livestock & Wildlife",
    "icon": "🦁"
  },
  {
    "id": "nature",
    "name": "Nature, Environment & Geography",
    "icon": "🌿"
  },
  {
    "id": "food",
    "name": "Food, Drink & Agriculture",
    "icon": "🍲"
  },
  {
    "id": "home",
    "name": "Home, Tools & Material Culture",
    "icon": "🏠"
  },
  {
    "id": "verbs",
    "name": "Core Verbs & Actions",
    "icon": "🏃"
  },
  {
    "id": "adjectives",
    "name": "Adjectives, Qualities & Grammar",
    "icon": "✨"
  },
  {
    "id": "travel",
    "name": "Travel, Directions & Navigation",
    "icon": "🚌"
  },
  {
    "id": "shopping",
    "name": "Trade, Money & Measures",
    "icon": "🛒"
  },
  {
    "id": "emergency",
    "name": "Health, Safety, Law & Conflict",
    "icon": "🚨"
  },
  {
    "id": "time",
    "name": "Time, Seasons & Calendar",
    "icon": "⏰"
  },
  {
    "id": "phrases",
    "name": "Common Expressions & Vocabulary",
    "icon": "🗣️"
  },
  {
    "id": "culture-history",
    "name": "Culture, Clans & Historical Corpus",
    "icon": "📜"
  }
];

export const TOTAL_DICTIONARY_ENTRIES: number = 78168;

const _swahiliMeta = ALL_DICT_METAS.find((m) => m.languageId === "swahili");
if (_swahiliMeta) {
  _swahiliMeta.contributorNote =
    'Swahili (Kiswahili: Kiunguja, Kimvita, Kiamu, Kitikuu, Kipate, Kingozi) vocabulary compiled from Rev. Dr. J. L. Krapf (1850, 1882), Bishop Edward Steere (1870, 1894, 1918), Rev. W. E. Taylor (1891), George W. Bateman (1901), A. C. Madan (1902, 1903, 1905, 1917 "English-Swahili Vocabulary", SPCK London, pp. 1–56 [PDF pp. 1–72]), Hildegarde Hinde (1904), Mrs. F. Burt (1910), Capt. C. H. Stigand (1915), Mervyn W. H. Beech (1918), Prof. Alice Werner (1918, 1919, 1933), Sir Harry H. Johnston (1919), Deo Ngonyani & Nancy Ngowa (2016), Mohamed Mwamzandi (2022 "The pragmatics of Swahili relative clauses", in Galen Sibanda, Deo Ngonyani, Jonathan Choti & Ann Biersteker, eds., Descriptive and theoretical approaches to African linguistics: Selected papers from the 49th Annual Conference on African Linguistics, Berlin: Language Science Press, Ch. 13, pp. 227–246, DOI: 10.5281/zenodo.6393758 — 440 RCs from the 25M-word Helsinki Corpus of Swahili 2.0, Examples 1–32, Figure 1 & Tables 1–2), and John Goldsmith & Fidèle Mpiranya (2022).';
}

const _kalenjinMeta = ALL_DICT_METAS.find((m) => m.languageId === "kalenjin");
if (_kalenjinMeta) {
  _kalenjinMeta.contributorNote =
    'Kalenjin (Nandi / Kipsigis [Lumbwa / Il Kakesan] / Keiyo / Tugen [Kamasia: Kapteberewa & Nderois] / Marakwet & Endo [Chebleng] / Cherang\'any / Kabkamat [Olmo] / Sangwirr / Uasin Gishu [Moiven / Muttia / Il-Mokwan / I-Sirikwa] / Sabaot / Pökoot / Ogiek) vocabulary compiled from C. W. Hobley (1902 "Eastern Uganda: An Ethnological Survey" pp. 1–96, 1903 "Anthropological Studies in Kavirondo and Nandi", 1910), Sir Harry H. Johnston (1902), A. C. Hollis (1909 "The Nandi: Their Language and Folk-Lore"), Hon. K. R. Dundas (1910 "Notes on the Tribes Inhabiting the Baringo District", JRAI Vol. 40, pp. 49–72), Mervyn W. H. Beech (1911), BFBS (1921), Franz Rottland (1982), Chet A. Creider & Jane Tapsubei Creider (1983, 1989), Taaitta Toweett (1979), Angelika Mietzner (2016), Prisca Jerono (2018), Dinah Jepkorir Sitienei Jepkoech (2018), Michael Diercks & Meghana Rao (2019), Meredith Landman (2019), Maria Kouneli (2021), and Joost Zwarts, Andrew Chelimo & Prisca Jerono (2023, 2024 "The reflexive in Kalenjin: Its syntactic status and semantic functions", in Yaqian Huang, Nina Hagen Kaldhol, Jun Jie Lim, Sharon Rose & Anthony Struthers-Young, eds., ACAL in SoCAL: Selected papers from the 53rd Annual Conference on African Linguistics, Berlin: Language Science Press, Ch. 21, pp. 539–556, DOI: 10.5281/zenodo.11210482 — 1,815 Endo-Marakwet NT occurrences of keey, Examples 1–24, Footnotes 1–12, 5 Abbreviations & 17 References).';
}

const _pokomoMeta = ALL_DICT_METAS.find((m) => m.languageId === "pokomo");
if (_pokomoMeta) {
  _pokomoMeta.contributorNote =
    'Pokomo (Kipfokomo / Kipokomo: Malachini [Kalindi, Buu, Yunda/Dzunza, Ngatana, Kulesa, Mwina] & Upper Pokomo [Ndera, Gwano, Kinakomba, Ndura, Zubaki, Malalulu]) dictionary compiled from Rev. Dr. J. L. Krapf (1850 "Vocabulary of Six East-African Languages"), Ferdinand Würtz (1895 "Wörterbuch des Ki-Tikuu und des Ki-Pokomo", 1896 "Grammatik des Pokomo"), Prof. Alice Werner (1913, 1915 "The Bantu Coast Tribes of the East Africa Protectorate", 1933 "Myths and Legends of the Bantu"), Sir Harry H. Johnston (1919–1922 #13 Pωkωmω), BFBS (1921), and Mikael Samson & R. G. Darroch (1944 "A History of the Pokomo by Mikael Samson — Continued, with an Introduction and Notes by R. G. Darroch", Journal of the East Africa Natural History Society, Vol. XVII, Nos. 5 & 6 [79–80], pp. 370–394 & Full-Page Sketch Map — audited 100% line-by-line across all 14 map sections, Kalindi & Buu histories, the verbatim 8-line Chikovu lament song on p. 385, all 6 Upper Pokomo tribes and their Bantu/Oromo clan tables, the Abamogo greeting, Jilo Bune\'s war, Kirungu & Kadada battles, Ngaji/Kijo, Waganga, Muunguni, Missions 1884–1887, 1895 Government arrival & Notes 1–13).';
}

const _boranaMeta = ALL_DICT_METAS.find((m) => m.languageId === "borana");
if (_boranaMeta) {
  _boranaMeta.contributorNote =
    'Borana / Oromo (Afaan Borana / Orma / Kigalla) vocabulary compiled from Rev. J. L. Krapf & Rev. C. W. Isenberg (1840 "An Imperfect Outline of the Elements of the Galla Language", 1842 "Vocabulary of the Galla Language", 1850 "Vocabulary of Six East-African Languages"), Charles & Lawrence Tutschek (1844 "Dictionary of the Galla Language / Lexicon der Galla Sprache" Part I pp. I–LIX, 1–205; 1845 Part II pp. 1–126 & "A Grammar of the Galla Language" pp. I–VIII, 1–107, with Akafed\'e Dalle of Hambo, Otshu Aga of Sibu, Bilile of Guma, Aman Gonda of Goma, and Duke Paul William of Württemberg), Robert Needham Cust (1883 "A Sketch of the Modern Languages of Africa, Accompanied by a Language-Map", Vol. I, London: Trübner & Co., pp. [i]–xvi, 1–287 [PDF pp. 1–340] — audited 100% line-by-line across Portrait Plates I–VI [31 portraits], Chs. I–XI, and Ch. IX.C.II "Galla or Orómo" pp. 122–125: 5–6 million speakers from 10° N to the Dana/Tana River mouth near Mombása, Huma royal dynasty of Uganda/Unyoro/Karagwe, 5 Chief Dialects incl. the Equatorial/Tana River dialect studied by Wakefield at Ribé & Krapf 1850, Charles New\'s Wata "Helot Races", Cust\'s hand-copied MS of Krapf\'s 1840 Elements sent to Wakefield at Ribé, Newman, Bleek, Massaia, Tutschek, Enaréa & Lango/Kidi), E. C. Foot (1913), Prof. Alice Werner (1915), BFBS (1921), Mikael Samson & R. G. Darroch (1944, pp. 370–394), and Catherine Griefenow-Mewis (1996).';
}

const _somaliMeta = ALL_DICT_METAS.find((m) => m.languageId === "somali");
if (_somaliMeta) {
  _somaliMeta.contributorNote =
    'Somali (Af-Soomaali) vocabulary compiled from Robert Needham Cust (1883 "A Sketch of the Modern Languages of Africa", Vol. I, Ch. IX.C.I "Somáli", pp. 119, 121: Reinisch\'s First Hamitic Cluster [Bishári, Saho, Dankálí, Somáli, Galla], Regio Aromatifera from Bab el Mandal & Cape Guardafui to the Bantu frontier, Rigby 1850/1866, Burton 1856, Hunter 1880, Van der Decken, Prætorius, Revoil & Krapf), Rev. Fr. Evangelist de Larajasse (1897 "Somali-English and English-Somali Dictionary" — audited 100% line-by-line across Front Matter, Preface pp. v–xiii, 44 Abbreviations, 20-row Kenya Reference Table, and Full Two-Column Page Transcriptions of Book pp. 26, 123, 127, 242, 266 & 293), Sir Harry H. Johnston (1902), Lt. J. W. C. Kirk (1903 "Notes on the Somali Language", 1905 "A Grammar of the Somali Language with Examples in Prose and Verse and an Account of the Yibir and Midgan Dialects" — audited 100% line-by-line across §§ 1–289, Appendices I–III, Prose Stories I–XI, Songs I–XIV, and Yibir/Midgan Vocabularies), BFBS (1921), Morgan Nilsson (2016), Wendell Kimper et al. (2019), and Anna M. DiGarbo & Rose Stamp (2019).';
}

const _maasaiMeta = ALL_DICT_METAS.find((m) => m.languageId === "maasai");
if (_maasaiMeta) {
  _maasaiMeta.contributorNote =
    'Maasai (ɔl Maa) vocabulary compiled from Rev. Dr. J. L. Krapf (1854 "Vocabulary of the Engútuk Eloikób, or the Language of the Khwáfi Tribe in East Africa", Tübingen), Rev. J. Erhardt & Dr. L. Krapf (1857 "Vocabulary of the Enguduk Iloigob", Württemberg), Ven. J. P. Farler & Rev. T. Wakefield (1882), Robert Needham Cust (1883 "A Sketch of the Modern Languages of Africa", Vol. I, Ch. X.A.V–VI "Kwáfi" & "Masai", pp. 149–152: autonyms Loikób/Eloikób "Men", J. T. Last\'s 6,000-word Humba vocabulary at Mamboia, Arúsha & Ndorobo "Helot Races", Joseph Thomson\'s 1883 RGS expedition supplied by Cust, and Lepsius\'s 1880 6 structural features), Lieut. Ludwig von Höhnel (1894 "Discovery of Lakes Rudolf and Stefanie"), Hildegarde Hinde (1901 "The Masai Language: Grammatical Notes Together with a Vocabulary", Cambridge University Press, pp. i–xii, 1–75 [PDF pp. 1–98]), Sir Harry H. Johnston (1902), A. C. Hollis (1905 "The Masai: Their Language and Folklore", Oxford: Clarendon Press, pp. i–xxviii, 1–359), Hon. K. R. Dundas (1910), C. W. Hobley (1910, 1922), W. Scoresby & Katherine Routledge (1910, Appendix II pp. 344–349 & Plate CXXXVI), and BFBS (1921).';
}

const _luoMeta = ALL_DICT_METAS.find((m) => m.languageId === "luo");
if (_luoMeta) {
  _luoMeta.contributorNote =
    'Dholuo (Luo / Kavirondo) vocabulary compiled from Rev. Charles New (1873 "Life, Wanderings, and Labours in Eastern Africa"), Rev. Thomas Wakefield & Robert Needham Cust (1883 "A Sketch of the Modern Languages of Africa", Vol. I, Ch. XI.D "Nile Sub-Group", pp. 273–287: XXI. Kavirondo on Victoria Nyanza pp. 284–285, Wakefield\'s MS Kavirondo Vocabulary from a Swahíli caravan traveller, and comparative proof of marked affinity with I. Shilluk/Dyur [Luoh/Lwo, Bellanda & Dembo] pp. 275–276, XVIII. Lúr [Luoh] pp. 282–283 & XX. Shúli [Gani/Shefalu] pp. 283–284), C. W. Hobley (1902 "Eastern Uganda: An Ethnological Survey" pp. 1–96 & 1903 "Anthropological Studies in Kavirondo and Nandi"), Sir Harry H. Johnston (1902), G. A. S. Northcote (1907), Rev. John Roscoe & Archdeacon J. J. Willis (1915 "The Northern Bantu", Ch. XXV & Kinship Table pp. 275–293), Some Fathers of St. Joseph\'s Society / Mill-Hill Fathers (1920–1921 "A Handbook of the Kavirondo Language"), and BFBS (1921).';
}
