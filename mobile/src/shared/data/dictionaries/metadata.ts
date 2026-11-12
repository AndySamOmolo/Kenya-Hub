// Auto-generated lightweight dictionary metadata and on-demand loader with O(1) search indexing
export interface DictEntry {
  english: string;
  translation: string;
  pronunciation: string;
  context: string;
  audioFile?: string | null;
}

export interface DictCategory {
  id: string;
  name: string;
  icon?: string;
  entries: DictEntry[];
}

export interface Dictionary {
  languageId: string;
  languageName: string;
  family: string;
  nativeName: string;
  script: string;
  speakerCount: number;
  counties: string[];
  hasAudio: boolean;
  dictionaryVersion: string;
  lastUpdated: string;
  contributorNote: string;
  categories: DictCategory[];
}

export interface DictCategoryMeta {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface DictMeta {
  languageId: string;
  languageName: string;
  family: string;
  nativeName: string;
  script: string;
  speakerCount: number;
  counties: string[];
  hasAudio: boolean;
  dictionaryVersion: string;
  lastUpdated: string;
  contributorNote: string;
  totalEntries: number;
  categories: DictCategoryMeta[];
}

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
    "totalEntries": 17349,
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
        "count": 177
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
    "contributorNote": "Gĩkũyũ (Kikuyu) vocabulary compiled from Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902, 1919), Rev. Fr. A. Hémery, C.S.Sp. (1903 \"English-Kikuyu Hand-Book\", Zanzibar—Nairobi: Roman Catholic Mission, pp. 1–87 [PDF pp. 1–92]), Hildegarde Hinde (1904), Rev. A. W. McGregor (1904 \"English-Kikuyu Vocabulary\", C.M.S. / SPCK London, Fort Smith / Kabeti 1901–1902, pp. i–iv, 5–192 [PDF pp. 1–201]), W. Scoresby & Katherine Routledge (1910), C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and BFBS (1921).",
    "totalEntries": 10687,
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
        "count": 2968
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
    "contributorNote": "Kalenjin (Nandi / Kipsigis / Keyo / Tugen / Sabaot / Ogiek) vocabulary compiled from C. W. Hobley (1902 \"Eastern Uganda: An Ethnological Survey\" pp. 1–96, 1903 \"Anthropological Studies in Kavirondo and Nandi\", 1910), Sir Harry H. Johnston (1902), A. C. Hollis (1909 \"The Nandi: Their Language and Folk-Lore\"), Hon. K. R. Dundas (1910), BFBS (1921), Michael Diercks & Meghana Rao (2019), Meredith Landman (2019), and Joost Zwarts, Andrew Kipkosgei Chelimo & Prisca Jerono (2024).",
    "totalEntries": 4613,
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
        "count": 136
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
        "count": 1547
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
    "totalEntries": 4073,
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
        "count": 314
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
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Maasai (ɔl Maa) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), R. N. Cust (1883), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Hildegarde Hinde (1901), Sir Harry H. Johnston (1902), A. C. Hollis (1905), C. W. Hobley (1910, 1922), and BFBS (1921).",
    "totalEntries": 2341,
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
        "count": 608
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
    "dictionaryVersion": "3.1",
    "lastUpdated": "2026-11-11",
    "contributorNote": "Somali (Af-Soomaali) vocabulary compiled from R. N. Cust (1883), Rev. Fr. Evangelist de Larajasse (1897), Sir Harry H. Johnston (1902), Lt. J. W. C. Kirk (1903 \"Notes on the Somali Language\", 1905 \"A Grammar of the Somali Language with Examples in Prose and Verse and an Account of the Yibir and Midgan Dialects\" — audited 100% line-by-line across §§ 1–289, Appendices I–III, Prose Stories I–XI, Songs I–XIV, and Yibir/Midgan Vocabularies), BFBS (1921), Morgan Nilsson (2016), Wendell Kimper et al. (2019), and Anna M. DiGarbo & Rose Stamp (2019).",
    "totalEntries": 2500,
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
        "count": 544
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
    "lastUpdated": "2026-10-31",
    "contributorNote": "Turkana (Ng'aturkana) vocabulary compiled from Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909 \"Through Uganda to Mount Elgon\", Ch. XIII), Hon. K. R. Dundas (1910), Mervyn W. H. Beech (1911), and Juxon Barton (1921).",
    "totalEntries": 1998,
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
        "count": 84
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
        "count": 212
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
    "totalEntries": 7927,
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
        "count": 308
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
    "totalEntries": 3570,
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
        "count": 1018
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
    "totalEntries": 2302,
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
        "count": 250
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
    "totalEntries": 7647,
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
        "count": 76
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
    "lastUpdated": "2026-10-31",
    "contributorNote": "Rendille (Af-Rendille) vocabulary compiled from Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894), C. W. Hobley (1910 \"Ethnology of A-Kamba and Other East African Tribes\"), Harold C. Fleming (1964), and Bernd Heine (1976).",
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
    "lastUpdated": "2026-10-31",
    "contributorNote": "Samburu (Sampur / Northern Maa) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), C. W. Hobley (1910), and Rainer Vossen (1982).",
    "totalEntries": 678,
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
        "count": 336
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
    "lastUpdated": "2026-10-31",
    "contributorNote": "Ilchamus (Njemps / En-jemusi) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), Hon. K. R. Dundas (1910), Mervyn W. H. Beech (1911), and Bernd Heine (1980).",
    "totalEntries": 304,
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
        "count": 7
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 58
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
    "lastUpdated": "2026-10-31",
    "contributorNote": "Pokot (Pökoot / Suk) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Sir Harry H. Johnston (1902), Hon. K. R. Dundas (1910), Mervyn W. H. Beech (1911 \"The Suk: Their Language and Folklore\"), and Juxon Barton (1921).",
    "totalEntries": 2801,
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
        "count": 68
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
        "count": 163
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 113
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
        "count": 67
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
        "count": 217
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

export const TOTAL_DICTIONARY_ENTRIES: number = 78007;

export const INITIAL_RANDOM_WORDS: { entry: DictEntry; langName: string; langId: string }[] = [
  {
    "entry": {
      "english": "Goodbye",
      "translation": "Kwaheri (pl. Kwaherini)",
      "pronunciation": "kwah-heh-ree",
      "context": "Krapf 1882 & Steere 1894 parting salutation",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Welcome",
      "translation": "Karibu (pl. Karibuni)",
      "pronunciation": "kah-ree-boo",
      "context": "Steere 1894 & Madan 1903 hospitality greeting",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Asante (Asante sana)",
      "pronunciation": "ah-sahn-teh sah-nah",
      "context": "Steere 1894 & Madan 1903 expression of gratitude",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "How are you?",
      "translation": "Habari yako? / U hali gani?",
      "pronunciation": "hah-bah-ree yah-koh / oo hah-lee gah-nee",
      "context": "Burt 1910 Kimvita & Steere 1894 Kiunguja",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Good evening",
      "translation": "Habari za jioni? / Masalkheri",
      "pronunciation": "hah-bah-ree zah jee-oh-nee",
      "context": "Steere 1894 & Madan 1903 evening greeting",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Nĩ wega (Nĩ wega mũno)",
      "pronunciation": "nee weh-gah moo-noh",
      "context": "Hémery 1903 & McGregor 1904",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Good evening",
      "translation": "Wĩraire atĩa? / Hwaĩ-inĩ mwega",
      "pronunciation": "wee-rah-ee-reh ah-tee-ah",
      "context": "McGregor 1904 & Hinde 1904",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Good morning",
      "translation": "Wũkĩra atĩa? / Rũciinĩ rwega",
      "pronunciation": "woo-kee-rah ah-tee-ah",
      "context": "McGregor 1904 & Routledge 1910 morning greeting",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Hello",
      "translation": "Wĩ mwega? / Niatĩa? (pl. Mũrĩ ega?)",
      "pronunciation": "wee mweh-gah / nee-ah-tee-ah",
      "context": "Hémery 1903 & McGregor 1904 Gĩkũyũ salutation",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Friend",
      "translation": "muratta, munduitu",
      "pronunciation": "mu-ratta mundui-tu",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Erokamano (Erokamano ahinya)",
      "pronunciation": "eh-roh-kah-mah-noh",
      "context": "Mill-Hill Fathers 1920 Dholuo gratitude",
      "audioFile": null
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "Good evening",
      "translation": "Oimore (resp. Oimore ahinya)",
      "pronunciation": "oh-ee-moh-reh",
      "context": "Mill-Hill Fathers 1920 evening greeting",
      "audioFile": null
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "Welcome",
      "translation": "Rwako / Donjuru",
      "pronunciation": "rwa-ko / don-ju-ru",
      "context": "Welcome inside",
      "audioFile": null
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "Good night",
      "translation": "Oimore / Nind maber",
      "pronunciation": "oh-ee-moh-reh",
      "context": "Evening greeting / sleep well",
      "audioFile": null
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "Good morning",
      "translation": "Oyawore",
      "pronunciation": "oh-yah-woh-reh",
      "context": "Morning greeting",
      "audioFile": null
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "Kalyet",
      "pronunciation": "kahl-yeht",
      "context": "Hollis 1909 Nandi vocabulary",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Kongoi (Kongoi mising)",
      "pronunciation": "kohn-goy mee-seeng",
      "context": "Universal Kalenjin gratitude",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "Good evening",
      "translation": "Chamgei! / Koskoling!",
      "pronunciation": "chahm-gey / kohs-koh-leeng",
      "context": "Hollis 1909 evening salutation",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "Good morning",
      "translation": "Chamgei! / Koruun nee?",
      "pronunciation": "chahm-gey / koh-roon neh",
      "context": "Hollis 1909 Nandi morning salutation",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "Hello",
      "translation": "Chamgei! / Sopai! (resp. Chamgei mising! / Epa!)",
      "pronunciation": "chahm-gey / soo-bah-ee",
      "context": "Hollis (1909, pp. 90–91, 230) Nandi male salutation & universal Kalenjin greeting",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "Salutation",
      "translation": "murembi",
      "pronunciation": "mu-remb-i",
      "context": "Ketosh (Lubukusu / Masaba) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)",
      "audioFile": null
    },
    "langName": "Luhya (Luyia)",
    "langId": "luhya"
  },
  {
    "entry": {
      "english": "Salutation",
      "translation": "msawa, ekui",
      "pronunciation": "msa-wa e-kui",
      "context": "Lusinga / Chula (Suba-Luhya of Rusinga Island) — Hobley, Eastern Uganda (1902, pp. 92–95)",
      "audioFile": null
    },
    "langName": "Luhya (Luyia)",
    "langId": "luhya"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Orio (Orio muno) / Nasima",
      "pronunciation": "oh-ree-oh moo-noh / nah-see-mah",
      "context": "Hobley 1902 & Oluluyia gratitude",
      "audioFile": null
    },
    "langName": "Luhya (Luyia)",
    "langId": "luhya"
  },
  {
    "entry": {
      "english": "How are you?",
      "translation": "Oli mulayi? / Muli balayi?",
      "pronunciation": "oh-lee moo-lah-yee",
      "context": "Response: Ndi mulayi (I am well)",
      "audioFile": null
    },
    "langName": "Luhya (Luyia)",
    "langId": "luhya"
  },
  {
    "entry": {
      "english": "Good evening",
      "translation": "Bwairire bulayi!",
      "pronunciation": "bwah-ee-ree-reh boo-lah-yee",
      "context": "Oluluyia evening salutation",
      "audioFile": null
    },
    "langName": "Luhya (Luyia)",
    "langId": "luhya"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Nĩ mũvea (Nĩ mũvea mũno)",
      "pronunciation": "nee moo-veh-ah moo-noh",
      "context": "Kĩkamba gratitude expression",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Good evening",
      "translation": "Ũvoo wa wĩoo?",
      "pronunciation": "uvoo wa wioo",
      "context": "Last 1885 & Lindblom 1920",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Good morning",
      "translation": "Ũvoo wa kwakya? / Nĩ kũkya",
      "pronunciation": "uvoo wa kwakya",
      "context": "Last 1885 & Lindblom 1920",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Hello",
      "translation": "Ũvoo? / Wakya! (Elder greeting)",
      "pronunciation": "uvoo",
      "context": "Hobley 1910 & Lindblom 1920 Kĩkamba salutations",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Hello / Salutation",
      "translation": "O voo",
      "pronunciation": "oh voh",
      "context": "Traditional greeting recorded by Hinde (1904); Ulu: 'O voo', Reply: 'O voo nēza' / 'Nĩ mũseo'",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Nĩwega (Nĩwega mũno)",
      "pronunciation": "niwega",
      "context": "Kĩmĩĩrũ expression of gratitude",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "Good morning",
      "translation": "Ũrĩ mwega rũũciĩni? / Muuga!",
      "pronunciation": "uri mwega ruuciini",
      "context": "Kĩmĩĩrũ morning greeting",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "Hello",
      "translation": "Muuga! / Ũrĩ mwega? (resp. Ndĩ mwega)",
      "pronunciation": "muuga",
      "context": "Standard Kĩmĩĩrũ & Mount Kenya salutation",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "How are you? (Imenti, Chuka, Tharaka; Tigania: Muua)",
      "translation": "Muuga? / Nĩatĩa ũrĩ?",
      "pronunciation": "muuga",
      "context": "Wikipedia Meru language — Sample phrases & Dialects",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "How are you doing?",
      "translation": "Ũrĩ ũmwega?",
      "pronunciation": "uri umwega",
      "context": "Wikipedia Meru language — Sample phrases",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "Eserian (Serian)",
      "pronunciation": "eh-seh-ree-ahn",
      "context": "Hollis 1905 & Hinde 1901",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Ashe (Ashe oleng)",
      "pronunciation": "ah-sheh oh-lehng",
      "context": "Standard Maa expression of gratitude",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "How are you?",
      "translation": "Ira supat? / Kaa ng'ida?",
      "pronunciation": "ee-rah soo-paht",
      "context": "Hinde 1901 & Hollis 1905",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Good evening",
      "translation": "Eserian en-gewarie / Takwenya!",
      "pronunciation": "eh-seh-ree-ahn ehn-geh-wah-ree-eh",
      "context": "Hollis 1905 evening greeting",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Good morning",
      "translation": "Kasserian ingera? / Sopai!",
      "pronunciation": "kahs-seh-ree-ahn een-geh-rah",
      "context": "Hollis 1905 pastoral morning greeting ('Are the children at peace?')",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "Omorembe",
      "pronunciation": "oh-moh-rehm-beh",
      "context": "Hobley 1902 & Johnston 1919 #7",
      "audioFile": null
    },
    "langName": "Kisii (Ekegusii)",
    "langId": "kisii"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Mbuya mono (Obeire buya)",
      "pronunciation": "m-boo-yah moh-noh",
      "context": "Ekegusii expression of gratitude",
      "audioFile": null
    },
    "langName": "Kisii (Ekegusii)",
    "langId": "kisii"
  },
  {
    "entry": {
      "english": "Hello",
      "translation": "Bwakire! (morning) / Bwairire! (evening) / Mbuya mono!",
      "pronunciation": "bwah-kee-reh / m-boo-yah moh-noh",
      "context": "Standard Ekegusii salutations",
      "audioFile": null
    },
    "langName": "Kisii (Ekegusii)",
    "langId": "kisii"
  },
  {
    "entry": {
      "english": "Good morning",
      "translation": "Bwakire buya",
      "pronunciation": "bwa-ki-re bu-ya",
      "context": "Wikipedia Gusii language — Sample phrases",
      "audioFile": null
    },
    "langName": "Kisii (Ekegusii)",
    "langId": "kisii"
  },
  {
    "entry": {
      "english": "Good night",
      "translation": "Obotuko obuya",
      "pronunciation": "o-bo-tu-ko o-bu-ya",
      "context": "Wikipedia Gusii language — Sample phrases",
      "audioFile": null
    },
    "langName": "Kisii (Ekegusii)",
    "langId": "kisii"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "Nabad",
      "pronunciation": "nah-bahd",
      "context": "Kirk 1905 & Larajasse 1897",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Mahadsanid (Aad baad u mahadsan tahay)",
      "pronunciation": "mah-hahd-sah-need",
      "context": "Somali gratitude",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Good evening",
      "translation": "Galab wanaagsan / Habeen wanaagsan",
      "pronunciation": "gah-lahb wah-nahg-sahn",
      "context": "Kirk 1905 evening salutation",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Good morning",
      "translation": "Subax wanaagsan / Ma bariden? (resp. Wa nabad!)",
      "pronunciation": "soo-bahkh wah-nahg-sahn / mah bah-ree-dehn",
      "context": "Kirk 1905 § 102, p. 51 & p. 113 morning salutation (lit. Have you passed the night well?)",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Hello",
      "translation": "Nabad! / Ma nabad baa? (resp. Waa nabad!)",
      "pronunciation": "nah-bahd / mah nah-bahd bah",
      "context": "Kirk 1905 & Larajasse 1897 Somali greeting",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Alakara (Alakara noi)",
      "pronunciation": "ah-lah-kah-rah noy",
      "context": "Ng'aturkana gratitude expression",
      "audioFile": null
    },
    "langName": "Turkana",
    "langId": "turkana"
  },
  {
    "entry": {
      "english": "Health (Pastoral greeting enquiry)",
      "translation": "Mata",
      "pronunciation": "mah-tah",
      "context": "Traditional pastoral greeting inquiry between adults (lit. 'health'). Response: 'Ii mata'. (Barton 1921)",
      "audioFile": null
    },
    "langName": "Turkana",
    "langId": "turkana"
  },
  {
    "entry": {
      "english": "Health to you (Greeting reply)",
      "translation": "Ii mata",
      "pronunciation": "ee-ee mah-tah",
      "context": "Traditional response acknowledging health. (Barton 1921)",
      "audioFile": null
    },
    "langName": "Turkana",
    "langId": "turkana"
  },
  {
    "entry": {
      "english": "Health to your cattle",
      "translation": "Mata ng'atuk",
      "pronunciation": "mah-tah ngah-took",
      "context": "Pastoral greeting inquiring after cattle herds. Response: 'Mata ouwi' (health to your village). (Barton 1921)",
      "audioFile": null
    },
    "langName": "Turkana",
    "langId": "turkana"
  },
  {
    "entry": {
      "english": "Health to your village",
      "translation": "Mata ouwi",
      "pronunciation": "mah-tah oh-wee",
      "context": "Pastoral blessing wishing wellbeing upon the homestead and kraal. (Barton 1921)",
      "audioFile": null
    },
    "langName": "Turkana",
    "langId": "turkana"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "Dheri / Amani",
      "pronunciation": "dheh-ree",
      "context": "Krapf & Rebmann 1887 Nika Dictionary",
      "audioFile": null
    },
    "langName": "Mijikenda (Giriama)",
    "langId": "mijikenda"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Mwadima! Na-m'vera na-we! (also Asante / Ni wega)",
      "pronunciation": "mwah-dee-mah nah m-veh-rah nah-weh",
      "context": "Rev. W. E. Taylor (1891, p. 100 under Thank you) & Krapf & Rebmann (1887)",
      "audioFile": null
    },
    "langName": "Mijikenda (Giriama)",
    "langId": "mijikenda"
  },
  {
    "entry": {
      "english": "Farewell",
      "translation": "koḥeri",
      "pronunciation": "koheri",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka adv.)",
      "audioFile": null
    },
    "langName": "Mijikenda (Giriama)",
    "langId": "mijikenda"
  },
  {
    "entry": {
      "english": "Greet",
      "translation": "lamúsa",
      "pronunciation": "lamusa",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)",
      "audioFile": null
    },
    "langName": "Mijikenda (Giriama)",
    "langId": "mijikenda"
  },
  {
    "entry": {
      "english": "Good Morning",
      "translation": "uzizeréroa?",
      "pronunciation": "uzizereroa",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka)",
      "audioFile": null
    },
    "langName": "Mijikenda (Giriama)",
    "langId": "mijikenda"
  },
  {
    "entry": {
      "english": "Friend",
      "translation": "epapero (pl. ipapero)",
      "pronunciation": "eh-pah-peh-roh",
      "context": "Ateso friendship noun",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Eyalama (Eyalama noi)",
      "pronunciation": "eh-yah-lah-mah noy",
      "context": "Ateso gratitude",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "Hello",
      "translation": "Yoga",
      "pronunciation": "yo-ga",
      "context": "Wikipedia Teso language — Vocabulary",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "How are you? (singular)",
      "translation": "Ijai biai?",
      "pronunciation": "i-jai biai",
      "context": "Wikipedia Teso language — Vocabulary",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "How are you? (plural)",
      "translation": "Ijaasi biai?",
      "pronunciation": "i-jaa-si biai",
      "context": "Wikipedia Teso language — Vocabulary",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Nĩ wega (Nĩ wega mũno)",
      "pronunciation": "nee weh-gah moo-noh",
      "context": "Kîembu gratitude",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "Hello",
      "translation": "Wĩ mwega? (resp. Ndĩ mwega) / Niatĩa?",
      "pronunciation": "wee mweh-gah",
      "context": "Kîembu & Kîmbeere standard salutation",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "Peace / blessing",
      "translation": "Thayũ",
      "pronunciation": "thayu",
      "context": "Kîembu traditional greeting & blessing",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "Goodbye, be blessed",
      "translation": "Tigwa na wega / Tigwaa na thayũ",
      "pronunciation": "tigwa na wega / tigwaa na thayu",
      "context": "Wikipedia Embu_language — Sample phrases",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "Are you a friend?",
      "translation": "Wĩ mũrata?",
      "pronunciation": "wi murata",
      "context": "Wikipedia Embu_language — Sample phrases",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "Hello / How are you? (Dawida)",
      "translation": "Mwakucha / Uko wedi?",
      "pronunciation": "mwakucha / uko wedi",
      "context": "Taita (Kidawida) traditional greeting",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
  },
  {
    "entry": {
      "english": "I am fine / well",
      "translation": "Niko wedi",
      "pronunciation": "ni-ko we-di",
      "context": "Taita (Kidawida) greeting response",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
  },
  {
    "entry": {
      "english": "Good morning (Have you dawned well?)",
      "translation": "Mwakucha wedi?",
      "pronunciation": "mwakucha wedi",
      "context": "Taita (Kidawida) morning greeting",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Chavuche / Asante",
      "pronunciation": "chavuche",
      "context": "Taita (Kidawida) expression of gratitude",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
  },
  {
    "entry": {
      "english": "Peace / Goodness",
      "translation": "Wedi",
      "pronunciation": "we-di",
      "context": "Wray (1894) & Sakamoto (2003) — Kidawida / Kisagala",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
  },
  {
    "entry": {
      "english": "Friend",
      "translation": "mbuya (mwandani)",
      "pronunciation": "m-boo-yah",
      "context": "Hollis 1910 Taveta Proverbs",
      "audioFile": null
    },
    "langName": "Taveta (Kitaveta)",
    "langId": "taveta"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Ni wega / Chavuche",
      "pronunciation": "nee weh-gah / chah-voo-cheh",
      "context": "Kitaveta gratitude",
      "audioFile": null
    },
    "langName": "Taveta (Kitaveta)",
    "langId": "taveta"
  },
  {
    "entry": {
      "english": "Hello",
      "translation": "Jahako",
      "pronunciation": "ja-ha-ko",
      "context": "Wikipedia Taveta_language — Taveta greetings",
      "audioFile": null
    },
    "langName": "Taveta (Kitaveta)",
    "langId": "taveta"
  },
  {
    "entry": {
      "english": "Hello (Reply: Good, how are you?)",
      "translation": "Jedi yoko jahako",
      "pronunciation": "je-di yo-ko ja-ha-ko",
      "context": "Wikipedia Taveta_language — Taveta greetings",
      "audioFile": null
    },
    "langName": "Taveta (Kitaveta)",
    "langId": "taveta"
  },
  {
    "entry": {
      "english": "Good news / Gospel",
      "translation": "Sumu yedi",
      "pronunciation": "su-mu ye-di",
      "context": "Rev. A. R. Steggall (1892) & Wikipedia Taveta_language",
      "audioFile": null
    },
    "langName": "Taveta (Kitaveta)",
    "langId": "taveta"
  },
  {
    "entry": {
      "english": "Hello / How are you? (Tana River greeting)",
      "translation": "Hujambo / Habari za mudzi?",
      "pronunciation": "ha-ba-ri za mu-dzi",
      "context": "Kipfokomo (Sabaki Coastal Bantu) greeting",
      "audioFile": null
    },
    "langName": "Pokomo (Kipfokomo)",
    "langId": "pokomo"
  },
  {
    "entry": {
      "english": "Peace / Well-being",
      "translation": "Usalama / Kheri",
      "pronunciation": "u-sa-la-ma",
      "context": "Kipfokomo greeting",
      "audioFile": null
    },
    "langName": "Pokomo (Kipfokomo)",
    "langId": "pokomo"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Asante / Nashukuru",
      "pronunciation": "a-san-te",
      "context": "Kipfokomo",
      "audioFile": null
    },
    "langName": "Pokomo (Kipfokomo)",
    "langId": "pokomo"
  },
  {
    "entry": {
      "english": "Welcome",
      "translation": "Karibu mudzini",
      "pronunciation": "ka-ri-bu mu-dzi-ni",
      "context": "Kipfokomo ('Welcome to the village')",
      "audioFile": null
    },
    "langName": "Pokomo (Kipfokomo)",
    "langId": "pokomo"
  },
  {
    "entry": {
      "english": "Good morning! (Krapf 1850, p. 29)",
      "translation": "múya nágaia",
      "pronunciation": "mu-ya na-ga-ia",
      "context": "Rev. Dr. J. L. Krapf (1850) \"Vocabulary of Six East-African Languages\", p. 29",
      "audioFile": null
    },
    "langName": "Pokomo (Kipfokomo)",
    "langId": "pokomo"
  },
  {
    "entry": {
      "english": "Hello / Peace be with you",
      "translation": "Nagaa / Naga, naga! Fayaketi! / Baga nagaan dhufte",
      "pronunciation": "na-gaa / fa-ya-ke-ti",
      "context": "Borana / Oromo traditional greeting ('Peace, peace! Thy health!' — Tutschek 1845, p. 88, Aga's Letter)",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "How are you? (Do you have peace?)",
      "translation": "Nagaa qabdaa? / Akkam jirta? / Ati faya cabte?",
      "pronunciation": "na-gaa qab-daa / ak-kam jir-ta",
      "context": "Borana / Oromo greeting & Tutschek (1845, p. 88)",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "Peace / Everything is peaceful",
      "translation": "Nagaa / Naguma",
      "pronunciation": "na-gaa / na-gu-ma",
      "context": "Borana / Oromo response",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "Good morning (Did you spend the night in peace?)",
      "translation": "Bulte nagaa? / Akkam bulte? / Naga ambulte! (Krapf 1842)",
      "pronunciation": "bul-te na-gaa",
      "context": "Borana / Oromo morning greeting (Krapf 1842, p. 16: \"naga ambulte\" = Good morning!; cf. bula \"pass the night\", Tutschek 1845)",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "Good afternoon / Hast thou passed this day in peace?",
      "translation": "Oolte nagaa? / Akkam oolte? / Ati naga olte har'a?",
      "pronunciation": "ool-te na-gaa / a-ti na-ga ol-te har-a",
      "context": "Tutschek (1845, p. 88, Aga's Letter: 'Ati naga olte had'a?')",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "Friend",
      "translation": "arab (saaxiib)",
      "pronunciation": "ah-rahb",
      "context": "Rendille Cushitic vocabulary",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "Hello / Peace",
      "translation": "Nabad / Sooriyo",
      "pronunciation": "na-bad / soo-ri-yo",
      "context": "Rendille traditional greeting & blessing",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "How are you? (Is it peace?)",
      "translation": "Ma nabad?",
      "pronunciation": "ma na-bad",
      "context": "Rendille Cushitic greeting",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "It is peace / I am fine",
      "translation": "Aa nabad",
      "pronunciation": "aa na-bad",
      "context": "Rendille greeting reply",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "Thank you / Blessing",
      "translation": "Waaq a ku barikoy",
      "pronunciation": "waaq a ku ba-ri-koy",
      "context": "Rendille blessing ('May God bless you')",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "Hello / Greetings",
      "translation": "Sopa / Supa",
      "pronunciation": "soh-pah",
      "context": "Standard daily greeting among the Samburu (North Maa)",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "Hello (Reply)",
      "translation": "Epa / Ipa",
      "pronunciation": "eh-pah",
      "context": "Standard response to 'Sopa' in Samburu",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "Greetings to elders / Respectful greeting",
      "translation": "Chamge / Nabo",
      "pronunciation": "nah-boh",
      "context": "Samburu respectful address",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "How are you? (How are the children and cattle?)",
      "translation": "Kejaa ngera oo nkishu?",
      "pronunciation": "keh-jaa ngeh-rah oo nki-shu",
      "context": "Pastoral greeting inquiring after family and herds",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "Peace / Serenity",
      "translation": "Serian",
      "pronunciation": "seh-ri-an",
      "context": "North Maa greeting & blessing ('Peace')",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "Friend",
      "translation": "l-chore (pl. l-choreta)",
      "pronunciation": "l-choh-reh",
      "context": "Dundas 1910 & Maa Baringo corpus",
      "audioFile": null
    },
    "langName": "Ilchamus (Njemps)",
    "langId": "ilchamus"
  },
  {
    "entry": {
      "english": "Hello / Greetings",
      "translation": "Sopa / Supa",
      "pronunciation": "soh-pah",
      "context": "Ilchamus (Camus / North Maa) greeting",
      "audioFile": null
    },
    "langName": "Ilchamus (Njemps)",
    "langId": "ilchamus"
  },
  {
    "entry": {
      "english": "Hello (Reply)",
      "translation": "Epa / Ipa",
      "pronunciation": "eh-pah",
      "context": "Ilchamus greeting response",
      "audioFile": null
    },
    "langName": "Ilchamus (Njemps)",
    "langId": "ilchamus"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "Serian",
      "pronunciation": "seh-ri-an",
      "context": "Ilchamus (Camus) greeting & blessing",
      "audioFile": null
    },
    "langName": "Ilchamus (Njemps)",
    "langId": "ilchamus"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Ashe / Ashe oleng",
      "pronunciation": "ah-sheh",
      "context": "Ilchamus expression of gratitude",
      "audioFile": null
    },
    "langName": "Ilchamus (Njemps)",
    "langId": "ilchamus"
  },
  {
    "entry": {
      "english": "Friend",
      "translation": "theli-aʻ (pl. theli-ei) / weri",
      "pronunciation": "theli-a",
      "context": "Mervyn W. H. Beech (1911, pp. 54, 109, 117) Suk vocabulary",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "Hello / How are you?",
      "translation": "Chamnyan / Bo kalyon?",
      "pronunciation": "cham-nyan / bo kal-yon",
      "context": "Pokot (Pökoot) traditional greeting",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "Peace / All is well",
      "translation": "Kalyon / Kalya",
      "pronunciation": "kal-yon / kal-ya",
      "context": "Pokot (Pökoot) greeting response ('Peace')",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Sĕra! / Sĕre! (verb: o-soiyen-an) / Kanyul / Kongoi",
      "pronunciation": "sera",
      "context": "Mervyn W. H. Beech (1911, pp. 96, 143) & Pokot gratitude",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "Good-bye! / Parting salutation: I have gone! (Reply: Thou art going!)",
      "translation": "Korôton! / Ka-rôt-on! (Reply: I-rôt-enyi!)",
      "pronunciation": "koroton",
      "context": "Mervyn W. H. Beech (1911, pp. 92, 119, 125) — Suk farewells",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "Peace / Well-being",
      "translation": "nagaa / nagaay",
      "pronunciation": "nah-gaa / nah-gaay",
      "context": "Daasanach greeting of peace shared across the Omo–Turkana pastoral frontier (Tosco 2001 / Nishiguchi 2004)",
      "audioFile": null
    },
    "langName": "Daasanach (Dhaasanac)",
    "langId": "daasanach"
  },
  {
    "entry": {
      "english": "Is it peace? / Are you well?",
      "translation": "Ma nagaa?",
      "pronunciation": "mah nah-gaa",
      "context": "Standard Daasanach greeting in Ileret and North Horr, Marsabit County (Tosco 2001)",
      "audioFile": null
    },
    "langName": "Daasanach (Dhaasanac)",
    "langId": "daasanach"
  },
  {
    "entry": {
      "english": "It is peace / I am well",
      "translation": "Nagaa",
      "pronunciation": "nah-gaa",
      "context": "Standard response to 'Ma nagaa?' (Tosco 2001)",
      "audioFile": null
    },
    "langName": "Daasanach (Dhaasanac)",
    "langId": "daasanach"
  },
  {
    "entry": {
      "english": "Yes (affirmative)",
      "translation": "ee / ii",
      "pronunciation": "ee / ii",
      "context": "Daasanach affirmative particle (Tosco 2001 / Blažek 2011)",
      "audioFile": null
    },
    "langName": "Daasanach (Dhaasanac)",
    "langId": "daasanach"
  },
  {
    "entry": {
      "english": "No / Not (negative particle)",
      "translation": "ma / m'ning",
      "pronunciation": "mah / m-ning",
      "context": "Daasanach negative particle (Tosco 2001 / Blažek 2011)",
      "audioFile": null
    },
    "langName": "Daasanach (Dhaasanac)",
    "langId": "daasanach"
  }
];

// ============================================================
// Rev. W. E. Taylor (1891) "African Aphorisms; or, Saws from Swahili-Land"
// Grammatical & Lexical Highlights (pp. i–xii, 1–182)
// ============================================================
INITIAL_RANDOM_WORDS.push(
  {
    entry: {
      english: "Some other person's axe / hoe / stool / platter / mortar (Possessive Pronoun of Alienation -ngwa = -a wat'u)",
      translation: "shokangwa • jembengwa • kitingwa • chanongwa • kinungwa",
      pronunciation: "sho-kang-wa / jem-beng-wa / ki-ting-wa / cha-nong-wa / ki-nung-wa",
      context: "Rev. W. E. Taylor (1891) African Aphorisms, Appendix B, pp. 166–167 & §§ 93, 127, 165a, 540",
      audioFile: null,
    },
    langName: "Swahili (Kiswahili)",
    langId: "swahili",
  },
  {
    entry: {
      english: "The 'Yet' Tense (-kali), Negative Perfect (Sime-), Precatory (-ngwa-), Poetical Perfect (-meze-), and '-siku-' Resultant",
      translation: "nikalikwenda (nikalipo/akaliko/nikalimo) • Simekwenda? • Ngwakupa! • amezetwambia • asikunijibu neno",
      pronunciation: "ni-ka-li-kwen-da / si-me-kwen-da / ngwa-ku-pa / a-me-ze-twam-bi-a / a-si-ku-ni-ji-bu",
      context: "Rev. W. E. Taylor (1891) African Aphorisms, Appendix A (I–VI), pp. 164–166",
      audioFile: null,
    },
    langName: "Swahili (Kiswahili)",
    langId: "swahili",
  },
  {
    entry: {
      english: "Close your eyes and hew down the candelabra euphorbia! (Proverb on tackling an unpleasant task with due precaution)",
      translation: "Finya matso uteme mwatsa! (mikulugo = potstirrers made from its inner wood)",
      pronunciation: "fi-nya ma-tso u-te-me mwa-tsa",
      context: "Rev. W. E. Taylor (1891) African Aphorisms, Nyika Proverb § 635aa, pp. 146–147",
      audioFile: null,
    },
    langName: "Mijikenda (Giriama)",
    langId: "mijikenda",
  },
  {
    entry: {
      english: "Two occupations were too heavy for the hyena (Taita Proverb on divided purpose)",
      translation: "Kazi mbili zam'lema fisi",
      pronunciation: "ka-zi mbi-li zam-le-ma fi-si",
      context: "Rev. W. E. Taylor (1891) African Aphorisms, Taita Proverb § 665, p. 160",
      audioFile: null,
    },
    langName: "Taita (Kidawida)",
    langId: "taita",
  }
);

// ============================================================
// Sir Harry H. Johnston (1919–1922) "A Comparative Study of the Bantu and Semi-Bantu Languages"
// (Clarendon Press, Oxford, Vol. I [1919] & Vol. II [1922] — Public Domain)
// ============================================================
INITIAL_RANDOM_WORDS.push(
  {
    entry: {
      english: "Disyllabic Preprefixes (Kumu-/Gumu-, Kimi-/Gimi-, Kama-/Gama-, Baba-, Gugu-) & Addenda (p. 757: Omu-mali, Omu-kωfu, Nya-saye, Ama-khuwa, Ωxu-buta)",
      translation: "Kumu-kono → Kimi-kono • Baba-ndu • Kama-lasiri • Gugu-bwa • Omu-mali • Omu-kωfu • Nya-saye • Ama-khuwa • Ωxu-buta",
      pronunciation: "ku-mu-ko-no / ba-ba-ndu / ka-ma-la-si-ri / o-mu-ma-li / nya-sa-ye / o-khu-bu-ta",
      context: "Sir Harry H. Johnston (1919, Vol. I, pp. 7, 19, 73–85, 757 & 1922, Vol. II, pp. 22–24 — Sub-group A 5 #5–6a)",
      audioFile: null,
    },
    langName: "Luhya (Luyia)",
    langId: "luhya",
  },
  {
    entry: {
      english: "Complete 15-Part Conjugation of Ωku-rora ('To See') in #7 Ki-guzii & #7a Ki-kωria (Vol. II, pp. 497–498)",
      translation: "Rora! → Rore! • N-dora, O-rora, A-rora • Ni-n-dora • Ndozire • Ṅ-ka-rora • N-da-rora • Ti-n-dora / Ti-n-dozire",
      pronunciation: "ro-ra / n-do-ra / ni-n-do-ra / n-do-zi-re / n-ka-ro-ra / ti-n-do-ra",
      context: "Sir Harry H. Johnston (1922, Vol. II, pp. 497–498 — Sub-group A 6 #7 Ki-guzii & #7a Ki-kωria)",
      audioFile: null,
    },
    langName: "Kisii (Ekegusii)",
    langId: "kisii",
  },
  {
    entry: {
      english: "Wahadimu (Ki-hadimu h. from Windi & Śaṅgani) & Archaic Ki-ṅgωzi (g.) Coastal Lexicon (Vol. II, pp. 39–40)",
      translation: "Miye, Weye, Yeye, Siye, Nyiye, Waω • M-bura • M-wana-kerekwe • Ku-lawa (h.) • M-lala, M-lumbe, Ma-te, Sī (g.)",
      pronunciation: "mi-ye we-ye / m-bu-ra / ku-la-wa / m-la-la m-lu-mbe ma-te",
      context: "Sir Harry H. Johnston (1919, Vol. I, pp. 131–140 & 1922, Vol. II, pp. 38–41 — Group F #21–21g & Miss Dora Abdy 1915)",
      audioFile: null,
    },
    langName: "Swahili (Kiswahili)",
    langId: "swahili",
  }
);

// ============================================================
// Rev. Dr. L. Krapf, Rev. J. Rebmann & Rev. T. H. Sparshott (1887)
// "A Nika-English Dictionary" (SPCK London, Book pp. [i]–vii, 1–391 — Public Domain)
// ============================================================
INITIAL_RANDOM_WORDS.push(
  {
    entry: {
      english: "Six Verbs for 'To Answer' (3 Negative-Only vs. 3 Affirmative/Negative, p. 126), Seven Harvesting Verbs (p. 93) & Four Pounding Verbs (pp. 127, 384)",
      translation: "Ku hongoza, Ku runga, Ku shudia (neg.) vs. Ku lungukiza, Ku udzikiza, Ku udzira • Ku funa, Ku guha, Ku tola, Ku poa, Ku hunda, Ku kwachula, Ku kopa • Ku bonda, Ku vonda, Ku huaga, Ku pura",
      pronunciation: "ku ho-ngo-za / ku lu-ngu-ki-za / ku fu-na / ku vo-nda / ku hua-ga",
      context: "Rev. Dr. L. Krapf, Rev. J. Rebmann & Rev. T. H. Sparshott, A Nika-English Dictionary (SPCK London, 1887, Book pp. 93, 126–127, 384)",
      audioFile: null,
    },
    langName: "Mijikenda (Giriama)",
    langId: "mijikenda",
  },
  {
    entry: {
      english: "Nine Graded Calabash Sizes (Kibaria → Dunda, pp. 151–152), M'oro Assembly Formulas (pp. 259–260, 347), Kore Blood-Money (pp. 192, 339) & Five Mulungu Prayers (p. 284)",
      translation: "Kibaria → Kirea → Tumbi → Ndzoma → Ndundu → Kipazi → Muvunda → M'ololo → Dunda • Similani kambi! — Hai! • Kula Abegnania! — Hosi nahu kule! • Kore (2 anafiale for kifurifuri shadow)",
      pronunciation: "ki-ba-ri-a / du-nda / si-mi-la-ni ka-mbi / ko-re / ki-fu-ri-fu-ri",
      context: "Rev. Dr. L. Krapf, Rev. J. Rebmann & Rev. T. H. Sparshott, A Nika-English Dictionary (SPCK London, 1887, Book pp. 151–152, 192, 259–260, 284, 339, 347)",
      audioFile: null,
    },
    langName: "Mijikenda (Giriama)",
    langId: "mijikenda",
  }
);
