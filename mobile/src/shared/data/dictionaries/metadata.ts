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
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Swahili (Kiswahili: Kiunguja, Kimvita, Kiamu, Kitikuu, Kipate, Kingozi) vocabulary compiled from Rev. Dr. J. L. Krapf (1850, 1882), Bishop Edward Steere (1870, 1894, 1918), Rev. W. E. Taylor (1891), George W. Bateman (1901), A. C. Madan (1902, 1903, 1905, 1917), Hildegarde Hinde (1904), Mrs. F. Burt (1910), Capt. C. H. Stigand (1915), Mervyn W. H. Beech (1918), Prof. Alice Werner (1918, 1919, 1933), Sir Harry H. Johnston (1919), Deo Ngonyani & Nancy Ngowa (2016), Mohamed Mwamzandi (2022), and John Goldsmith & Fidèle Mpiranya (2022).",
    "totalEntries": 17507,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 81
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 505
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 486
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 481
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 389
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 1278
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 788
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 455
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 3413
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 439
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🚌",
        "count": 505
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 451
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 590
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 374
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 7113
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 159
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
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Gĩkũyũ (Kikuyu) vocabulary compiled from Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902, 1919), Rev. Fr. A. Hémery (1903), Hildegarde Hinde (1904), Rev. A. W. McGregor (1904), W. Scoresby & Katherine Routledge (1910), C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and BFBS (1921).",
    "totalEntries": 10786,
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
        "count": 212
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 250
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🧍",
        "count": 436
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 248
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 522
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 357
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 309
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 2918
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 1212
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 152
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
        "count": 143
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 150
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 743
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 3007
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
    "hasAudio": false,
    "dictionaryVersion": "3.2",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Dholuo (Luo) vocabulary compiled from C. W. Hobley (1902, 1903), Sir Harry H. Johnston (1902), G. A. S. Northcote (1907), Rev. John Roscoe & Archdeacon J. J. Willis (1915 \"The Northern Bantu\", Ch. XXV & Kinship Table pp. 275–293), Mill-Hill Fathers (1920), and BFBS (1921).",
    "totalEntries": 2516,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 50
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
        "count": 129
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 134
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 166
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 160
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 123
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 138
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 466
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 70
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
        "count": 16
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 27
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 85
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 460
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 386
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
    "dictionaryVersion": "3.2",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Kalenjin (Nandi / Kipsigis / Keyo / Tugen) vocabulary compiled from C. W. Hobley (1902, 1903, 1910), Sir Harry H. Johnston (1902), A. C. Hollis (1909 \"The Nandi: Their Language and Folk-Lore\"), Hon. K. R. Dundas (1910), BFBS (1921), Michael Diercks & Meghana Rao (2019), Meredith Landman (2019), and Joost Zwarts, Andrew Kipkosgei Chelimo & Prisca Jerono (2024).",
    "totalEntries": 5184,
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
        "count": 135
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 231
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 321
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 405
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 463
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 173
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 291
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 371
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 196
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 169
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 43
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 122
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 113
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 314
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 1812
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
    "dictionaryVersion": "3.2",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Luhya (Oluluyia: Luwanga, Lubukusu, Lumasaba, Lulogooli) vocabulary compiled from C. W. Hobley (1902, 1903), Sir Harry H. Johnston (1902, 1919 #5–6a), Rev. J. B. Purvis (1907, 1909 \"Through Uganda to Mount Elgon\"), Rev. John Roscoe (1915 \"The Northern Bantu\"), BFBS (1921), Rev. N. Stam (1929 \"The Bahanga\"), and Payne, Pacchiarotti & Bosire eds. (2016 \"Diversity in African Languages\", Chs. 9, 11, 12, 15).",
    "totalEntries": 3553,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 294
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 169
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 176
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 319
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 355
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌳",
        "count": 257
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 187
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏡",
        "count": 212
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 656
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 132
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 56
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
        "count": 71
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 74
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 140
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 423
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
    "totalEntries": 4118,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 24
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 164
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 131
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🧍",
        "count": 189
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐾",
        "count": 188
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 309
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 174
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 145
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 209
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 139
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 124
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 54
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🏥",
        "count": 117
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏳",
        "count": 286
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 1545
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 320
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
    "totalEntries": 677,
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
        "count": 21
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 212
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 177
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 234
      },
      {
        "id": "shopping",
        "name": "shopping",
        "icon": "📜",
        "count": 2
      },
      {
        "id": "home",
        "name": "home",
        "icon": "📜",
        "count": 4
      },
      {
        "id": "time",
        "name": "time",
        "icon": "📜",
        "count": 2
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
    "totalEntries": 2366,
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
        "count": 92
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 160
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 158
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 201
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 166
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 130
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
        "icon": "⚡",
        "count": 181
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 108
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 27
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
        "count": 67
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 38
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 275
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 628
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
    "dictionaryVersion": "3.2",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Kisii (Ekegusii) vocabulary compiled from C. W. Hobley (1902 \"Eastern Uganda\") and Sir Harry H. Johnston (1902 \"The Uganda Protectorate, Vol. II\", 1919–1922 \"A Comparative Study of the Bantu and Semi-Bantu Languages\" #7 Ki-guzii & #7a Ki-koria).",
    "totalEntries": 1135,
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
        "count": 96
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 78
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🧠",
        "count": 143
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 133
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
        "count": 67
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
        "icon": "⚡",
        "count": 39
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 31
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
        "count": 19
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 21
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 91
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 187
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
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Somali (Af-Soomaali) vocabulary compiled from R. N. Cust (1883), Rev. Fr. Evangelist de Larajasse (1897), Sir Harry H. Johnston (1902), Lt. J. W. C. Kirk (1903 \"Notes on the Somali Language\", 1905 \"A Grammar of the Somali Language\"), BFBS (1921), Morgan Nilsson (2016), Wendell Kimper et al. (2019), and Anna M. DiGarbo & Rose Stamp (2019).",
    "totalEntries": 2497,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 22
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 188
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 273
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
        "count": 166
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 75
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 82
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
        "count": 27
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 67
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 36
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 24
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 37
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 82
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 668
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 524
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
    "totalEntries": 2019,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 27
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 63
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👥",
        "count": 101
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "👁️",
        "count": 124
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐾",
        "count": 154
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 141
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 62
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
        "icon": "⚡",
        "count": 532
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 78
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
        "count": 9
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 47
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 343
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
    "contributorNote": "Mijikenda (Kigiryama, Chidigo, Chiduruma, Kirabai) vocabulary compiled from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891), Prof. Alice Werner (1915), Sir Harry H. Johnston (1919 #16), BFBS (1921), and Steve Nicolle (2016).",
    "totalEntries": 11206,
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
        "count": 230
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 126
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 126
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 110
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🦁",
        "count": 524
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 278
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 128
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 1465
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
        "count": 136
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 79
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🏥",
        "count": 192
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏳",
        "count": 114
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 7176
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 301
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
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Teso (Ateso / Elgumi) vocabulary compiled from C. W. Hobley (1902), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909 \"Through Uganda to Mount Elgon\"), Archdeacon A. L. Kitching (1915 \"A Handbook of the Ateso Language\"), Rev. John Roscoe (1915 \"The Northern Bantu\", Part V \"The Bateso\" & Kinship Table pp. 257–293), and BFBS (1921).",
    "totalEntries": 573,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 20
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 33
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👥",
        "count": 26
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "👤",
        "count": 41
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐾",
        "count": 49
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 59
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 28
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
        "icon": "⚡",
        "count": 69
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 59
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
    "totalEntries": 578,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 26
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
        "count": 17
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 40
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 37
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 218
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 29
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 50
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 130
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 13
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
    "dictionaryVersion": "3.2",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Taita (Kidawida / Kisagala / Kikasigau) vocabulary compiled from Rev. Dr. J. L. Krapf (1850), Rev. A. Downes Shaw (1885), Rev. W. E. Taylor (1891), Rev. J. Alfred Wray (1894), Prof. Alice Werner (1915), Sir Harry H. Johnston (1919 #14), and BFBS (1921).",
    "totalEntries": 3389,
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
        "count": 66
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 86
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 123
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 135
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 188
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 94
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
        "count": 1307
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 90
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
        "count": 24
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 47
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 48
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 26
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 1022
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
    "totalEntries": 687,
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
        "count": 16
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 16
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 45
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 37
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 111
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 12
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 16
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 79
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 340
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
    "dictionaryVersion": "3.4",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Borana / Oromo (Afaan Borana / Orma / Kigalla) vocabulary compiled from Rev. J. L. Krapf & Rev. C. W. Isenberg (1840 \"An Imperfect Outline of the Elements of the Galla Language\", 1842 \"Vocabulary of the Galla Language\", 1850 \"Vocabulary of Six East-African Languages\"), Karl & Lawrence Tutschek (1844–1845), R. N. Cust (1883), E. C. Foot (1913), Prof. Alice Werner (1915), BFBS (1921), and Catherine Griefenow-Mewis (1996).",
    "totalEntries": 7711,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 35
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 139
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 156
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 215
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 201
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 411
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 195
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 184
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 2166
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 174
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 122
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 88
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🏥",
        "count": 168
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏳",
        "count": 1487
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 1927
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 43
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
        "count": 21
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
        "count": 15
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 13
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 14
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 21
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 12
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 25
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 7
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 37
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
    "totalEntries": 2324,
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
        "count": 85
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 59
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 64
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 34
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 205
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 80
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 36
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 104
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 67
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 72
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 37
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🏥",
        "count": 99
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏳",
        "count": 100
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 999
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 253
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
    "totalEntries": 309,
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
        "count": 16
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
        "icon": "🫀",
        "count": 30
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 37
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 30
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 16
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 17
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 74
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 59
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
    "totalEntries": 3215,
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
        "count": 55
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 99
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 126
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 160
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 145
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 81
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 115
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 1118
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 847
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 40
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
        "count": 33
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 34
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 100
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
    "totalEntries": 466,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 20
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 22
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 16
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 31
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 29
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 36
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 23
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 23
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 11
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 255
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
        "count": 10
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 15
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 7
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
        "count": 20
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
        "count": 4
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

export const TOTAL_DICTIONARY_ENTRIES: number = 83133;

export const INITIAL_RANDOM_WORDS: { entry: DictEntry; langName: string; langId: string }[] = [
  {
    "entry": {
      "english": "Welcome",
      "translation": "Baga nagaan dhufte",
      "pronunciation": "ba-ga na-gaan dhuf-te",
      "context": "Borana / Oromo welcome",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "Tomorrow",
      "translation": "bori / boru",
      "pronunciation": "boh-ree / boh-roo",
      "context": "Tutschek (1845, pp. 89–90)",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "Salute",
      "translation": "hófu dáme",
      "pronunciation": "hofu dame",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "Thank",
      "translation": "gelatéfate",
      "pronunciation": "gelatefate",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "News",
      "translation": "ódu",
      "pronunciation": "odu",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "You are educated",
      "translation": "Wĩ mũthomũ",
      "pronunciation": "wi muthomu",
      "context": "Wikipedia Embu_language — Sample phrases",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "Stop the nonsense",
      "translation": "Tiga wana / Tigana na ũrimũ",
      "pronunciation": "tiga wana",
      "context": "Wikipedia Embu_language — Sample phrases",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "Give me some money",
      "translation": "Mve mbeca / Mva mbia",
      "pronunciation": "mve mbeca / mva mbia",
      "context": "Wikipedia Embu_language — Sample phrases",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "God is good",
      "translation": "Ngai nĩ mwaro",
      "pronunciation": "ngai ni mwaro",
      "context": "Wikipedia Embu_language — Sample phrases",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "I am blessed",
      "translation": "Nĩmũrathime",
      "pronunciation": "nimurathime",
      "context": "Wikipedia Embu_language — Sample phrases",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
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
      "english": "Today",
      "translation": "taata",
      "pronunciation": "tah-tah",
      "context": "Verified comparative entry across Kenyan nilotic corpus",
      "audioFile": null
    },
    "langName": "Ilchamus (Njemps)",
    "langId": "ilchamus"
  },
  {
    "entry": {
      "english": "Tomorrow",
      "translation": "taisere",
      "pronunciation": "tah-ee-seh-reh",
      "context": "Verified comparative entry across Kenyan nilotic corpus",
      "audioFile": null
    },
    "langName": "Ilchamus (Njemps)",
    "langId": "ilchamus"
  },
  {
    "entry": {
      "english": "Yesterday",
      "translation": "ngole",
      "pronunciation": "ngoh-leh",
      "context": "Verified comparative entry across Kenyan nilotic corpus",
      "audioFile": null
    },
    "langName": "Ilchamus (Njemps)",
    "langId": "ilchamus"
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
      "english": "Evening, nightfall",
      "translation": "lakat",
      "pronunciation": "lakat",
      "context": "Nandi / Kalenjin (Hollis 1909, p. 153)",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "Thank",
      "translation": "ile-chi kongoi",
      "pronunciation": "ile-chi kongoi",
      "context": "A. C. Hollis (1909) The Nandi: Their Language and Folk-Lore (English-Nandi Vocabulary)",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "Pardon, to",
      "translation": "mwaete",
      "pronunciation": "mwaete",
      "context": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Nandi)",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "All",
      "translation": "tukul",
      "pronunciation": "tukul",
      "context": "A. C. Hollis (1909) The Nandi: Their Language and Folk-Lore (English-Nandi Vocabulary)",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "Evening",
      "translation": "wio",
      "pronunciation": "wio",
      "context": "Hildegarde Hinde (1904) — Kamba",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Morning",
      "translation": "mthenia",
      "pronunciation": "mthenia",
      "context": "Hildegarde Hinde (1904) — Kamba",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "amanni",
      "pronunciation": "amanni",
      "context": "Hildegarde Hinde (1904) — Kamba",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Please",
      "translation": "kwendua",
      "pronunciation": "kwendua",
      "context": "Hildegarde Hinde (1904) — Kamba",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Salutation",
      "translation": "o voo",
      "pronunciation": "o voo",
      "context": "Hildegarde Hinde (1904) — Kamba (Ulu dialect)",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Evening",
      "translation": "waiini",
      "pronunciation": "waiini",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Friend",
      "translation": "muratta, munduitu",
      "pronunciation": "muratta, munduitu",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Morning",
      "translation": "mthenya",
      "pronunciation": "mthenya",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "naiita",
      "pronunciation": "naiita",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Please",
      "translation": "kuenda",
      "pronunciation": "kuenda",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
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
      "english": "Good morning",
      "translation": "Bwakire buya",
      "pronunciation": "Bwakire buya",
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
      "pronunciation": "Obotuko obuya",
      "context": "Wikipedia Gusii language — Sample phrases",
      "audioFile": null
    },
    "langName": "Kisii (Ekegusii)",
    "langId": "kisii"
  },
  {
    "entry": {
      "english": "Evening",
      "translation": "mogoroba",
      "pronunciation": "mogoroba",
      "context": "Wikipedia Gusii language — Sample phrases",
      "audioFile": null
    },
    "langName": "Kisii (Ekegusii)",
    "langId": "kisii"
  },
  {
    "entry": {
      "english": "One",
      "translation": "-mu, -mo / -mo, -mwe",
      "pronunciation": "-mu, -mo / -mo, -mwe",
      "context": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)",
      "audioFile": null
    },
    "langName": "Kisii (Ekegusii)",
    "langId": "kisii"
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
      "english": "Bowels",
      "translation": "Ama-la / Kama-la",
      "pronunciation": "ama-la / kama-la",
      "context": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)",
      "audioFile": null
    },
    "langName": "Luhya (Luyia)",
    "langId": "luhya"
  },
  {
    "entry": {
      "english": "Gun",
      "translation": "Ωmu-rondo / Mundu. Kumu-rundu",
      "pronunciation": "mu-rondo",
      "context": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)",
      "audioFile": null
    },
    "langName": "Luhya (Luyia)",
    "langId": "luhya"
  },
  {
    "entry": {
      "english": "Place",
      "translation": "A-handu / Esi-fo. Aha / Handu",
      "pronunciation": "a-handu / esi-fo. aha / handu",
      "context": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)",
      "audioFile": null
    },
    "langName": "Luhya (Luyia)",
    "langId": "luhya"
  },
  {
    "entry": {
      "english": "Elder",
      "translation": "Jaduong'",
      "pronunciation": "jah-dwong",
      "context": "Respected elder",
      "audioFile": "https://archive.org/download/handbook_kavirondo3_1203/kavirondo3_01_millhill_128kb.mp3"
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "Chief",
      "translation": "Ruoth / Jatelo",
      "pronunciation": "rwohth / jah-teh-loh",
      "context": "Chief or leader",
      "audioFile": "https://archive.org/download/handbook_kavirondo3_1203/kavirondo3_01_millhill_128kb.mp3"
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "King",
      "translation": "Ruoth",
      "pronunciation": "rwohth",
      "context": "King, lord, or sovereign",
      "audioFile": "https://archive.org/download/handbook_kavirondo3_1203/kavirondo3_01_millhill_128kb.mp3"
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "Work",
      "translation": "Tich",
      "pronunciation": "teech",
      "context": "Work or labor (noun); Tiyo (to work)",
      "audioFile": "https://archive.org/download/handbook_kavirondo3_1203/kavirondo3_01_millhill_128kb.mp3"
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "Market",
      "translation": "Chiro",
      "pronunciation": "chee-roh",
      "context": "Marketplace",
      "audioFile": "https://archive.org/download/handbook_kavirondo3_1203/kavirondo3_01_millhill_128kb.mp3"
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "Many black goats",
      "translation": "kumuk ndari nārok",
      "pronunciation": "kumuk ndari nārok",
      "context": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Many red cows",
      "translation": "ngishu nyainyuki kumuk",
      "pronunciation": "ngishu nyainyuki kumuk",
      "context": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Two big men",
      "translation": "sabuki orrldongana ari",
      "pronunciation": "sabuki orrldongana ari",
      "context": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Four good children",
      "translation": "supati konengera ungwun",
      "pronunciation": "supati konengera ungwun",
      "context": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Five large cows",
      "translation": "sabuki ngishu miet",
      "pronunciation": "sabuki ngishu miet",
      "context": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Thank you very much",
      "translation": "Nĩwega mũno",
      "pronunciation": "nĩwega mũno",
      "context": "Kîembu / Kĩmĩĩrũ",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "Nine",
      "translation": "kenda",
      "pronunciation": "kehn-dah",
      "context": "Johnston 1919 p. 72 #11a Meru",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "Eight",
      "translation": "inyanya",
      "pronunciation": "ee-nyah-nyah",
      "context": "Johnston 1919 p. 72 #11a Meru",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "Seven",
      "translation": "mũgwanja",
      "pronunciation": "moo-gwahn-jah",
      "context": "Johnston 1919 p. 72 #11a Meru",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "Six",
      "translation": "ithanthatu",
      "pronunciation": "ee-thahn-thah-too",
      "context": "Johnston 1919 p. 72 #11a Meru",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
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
      "english": "Thank",
      "translation": "pa mumvéra",
      "pronunciation": "pa mumvera",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)",
      "audioFile": null
    },
    "langName": "Mijikenda (Giriama)",
    "langId": "mijikenda"
  },
  {
    "entry": {
      "english": "News",
      "translation": "c̣ábari",
      "pronunciation": "c abari",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)",
      "audioFile": null
    },
    "langName": "Mijikenda (Giriama)",
    "langId": "mijikenda"
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
      "english": "Yesterday",
      "translation": "dzana",
      "pronunciation": "dzah-nah",
      "context": "Verified comparative entry across Kenyan bantu corpus",
      "audioFile": null
    },
    "langName": "Pokomo (Kipfokomo)",
    "langId": "pokomo"
  },
  {
    "entry": {
      "english": "Farewell",
      "translation": "mungu kahúve nágĕa",
      "pronunciation": "mungu kahuve nagea",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo adv.)",
      "audioFile": null
    },
    "langName": "Pokomo (Kipfokomo)",
    "langId": "pokomo"
  },
  {
    "entry": {
      "english": "Greet",
      "translation": "kedéria",
      "pronunciation": "kederia",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo v. a.)",
      "audioFile": null
    },
    "langName": "Pokomo (Kipfokomo)",
    "langId": "pokomo"
  },
  {
    "entry": {
      "english": "Very fierce",
      "translation": "Korom nyaman",
      "pronunciation": "ko-rom nya-man",
      "context": "Juxon Barton (1921) & Beech (1911) — Suk/Pokot",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "mīs",
      "pronunciation": "mīs",
      "context": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "One hundred",
      "translation": "pokol",
      "pronunciation": "po-kol",
      "context": "Beech (1911, pp. 66–68) — Pökoot (Suk)",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "I am the best of all.",
      "translation": "Ocha karam ma-mi-nye.",
      "pronunciation": "ocha karam ma-mi-nye.",
      "context": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "They don't amount to ten.",
      "translation": "Me-t-ei-nye taman.",
      "pronunciation": "me-t-ei-nye taman.",
      "context": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "Yes",
      "translation": "Aa",
      "pronunciation": "aa",
      "context": "Bernd Heine (1976) — Notes on the Rendille Language",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "Tomorrow",
      "translation": "barri",
      "pronunciation": "bahr-ree",
      "context": "Verified comparative entry across Kenyan cushitic corpus",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "Yesterday",
      "translation": "shale",
      "pronunciation": "shah-leh",
      "context": "Verified comparative entry across Kenyan cushitic corpus",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "Two",
      "translation": "láma",
      "pronunciation": "la-ma",
      "context": "Bernd Heine (1976) — Notes on the Rendille Language",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "Three",
      "translation": "séyyah",
      "pronunciation": "sey-yah",
      "context": "Bernd Heine (1976) — Notes on the Rendille Language",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Ashe / Ashe oleng",
      "pronunciation": "ah-sheh oh-leng",
      "context": "Samburu expression of gratitude",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "Five",
      "translation": "ímɟêt / ímʄêt",
      "pronunciation": "im-jet",
      "context": "Wikipedia Nilotic_languages — Samburu numerals",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "Six",
      "translation": "ílê",
      "pronunciation": "i-le",
      "context": "Wikipedia Nilotic_languages — Samburu numerals",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "Seven",
      "translation": "sápâ",
      "pronunciation": "sa-pa",
      "context": "Wikipedia Nilotic_languages — Samburu numerals",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "Eight",
      "translation": "ísɟêt / ísʄêt",
      "pronunciation": "is-jet",
      "context": "Wikipedia Nilotic_languages — Samburu numerals",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
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
      "english": "Carry, bring",
      "translation": "sid",
      "pronunciation": "sid",
      "context": "Rev. Fr. Evangelist de Larajasse (1897) Somali-English and English-Somali Dictionary [v.tr.]",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Thank God",
      "translation": "Illàhhi maháddi",
      "pronunciation": "illàhhi maháddi",
      "context": "Lt. J. W. C. Kirk (1905) A Grammar of the Somali Language",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Give news of yourself",
      "translation": "'ss ka wárran",
      "pronunciation": "'ss ka wárran",
      "context": "Lt. J. W. C. Kirk (1905) A Grammar of the Somali Language",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Give news of the place",
      "translation": "mèsha ka wárran",
      "pronunciation": "mèsha ka wárran",
      "context": "Lt. J. W. C. Kirk (1905) A Grammar of the Somali Language",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Evening",
      "translation": "jioni",
      "pronunciation": "jioni",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Friend",
      "translation": "rafiki, pl. marafiki",
      "pronunciation": "rafiki",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Morning",
      "translation": "subui, assubui",
      "pronunciation": "subui, assubui",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "amani",
      "pronunciation": "amani",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Please",
      "translation": "kupendeza",
      "pronunciation": "kupendeza",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
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
      "english": "Yes",
      "translation": "Ee / Haya",
      "pronunciation": "ee / haya",
      "context": "Wray (1894) — Taita",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
  },
  {
    "entry": {
      "english": "No",
      "translation": "Ndu / A'a",
      "pronunciation": "ndu",
      "context": "Wray (1894) — Taita",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
  },
  {
    "entry": {
      "english": "News",
      "translation": "uvoro, ilago",
      "pronunciation": "uvoro, ilago",
      "context": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
  },
  {
    "entry": {
      "english": "Pardon",
      "translation": "ku-sigo",
      "pronunciation": "ku-sigo",
      "context": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
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
      "english": "Yesterday",
      "translation": "igolo",
      "pronunciation": "ee-goh-loh",
      "context": "Verified comparative entry across Kenyan bantu corpus",
      "audioFile": null
    },
    "langName": "Taveta (Kitaveta)",
    "langId": "taveta"
  },
  {
    "entry": {
      "english": "Three",
      "translation": "itatu",
      "pronunciation": "i-ta-tu",
      "context": "Johnston (1919) — Kitaveta numerals",
      "audioFile": null
    },
    "langName": "Taveta (Kitaveta)",
    "langId": "taveta"
  },
  {
    "entry": {
      "english": "Four",
      "translation": "ina",
      "pronunciation": "i-na",
      "context": "Johnston (1919) — Kitaveta numerals",
      "audioFile": null
    },
    "langName": "Taveta (Kitaveta)",
    "langId": "taveta"
  },
  {
    "entry": {
      "english": "Hello",
      "translation": "Yoga",
      "pronunciation": "Yoga",
      "context": "Wikipedia Teso language — Vocabulary",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "My name is",
      "translation": "Eka'kiror",
      "pronunciation": "Eka'kiror...",
      "context": "Wikipedia Teso language — Vocabulary",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "See you again",
      "translation": "Awanyunos bobo",
      "pronunciation": "Awanyunos bobo",
      "context": "Wikipedia Teso language — Vocabulary",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "ekinok",
      "pronunciation": "ekinok",
      "context": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "Thank you very much",
      "translation": "Eyalama noi",
      "pronunciation": "e-ya-la-ma noi",
      "context": "Rev. A. L. Kitching, A Handbook of the Ateso Language (1915)",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
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
      "english": "Health to your children",
      "translation": "Mata ng'idwi",
      "pronunciation": "mah-tah ngee-dwee",
      "context": "Pastoral blessing for family and children. Response: 'Mata ariama'. (Barton 1921)",
      "audioFile": null
    },
    "langName": "Turkana",
    "langId": "turkana"
  },
  {
    "entry": {
      "english": "Health to our meetings",
      "translation": "Mata ariama",
      "pronunciation": "mah-tah ah-ree-ah-mah",
      "context": "Greeting reply wishing health and prosperity to repeated gatherings and fellowship. (Barton 1921)",
      "audioFile": null
    },
    "langName": "Turkana",
    "langId": "turkana"
  },
  {
    "entry": {
      "english": "Health to your property",
      "translation": "Mata ng'ebarin",
      "pronunciation": "mah-tah ngeh-bah-reen",
      "context": "Greeting inquiring after livestock wealth and possessions. Response: 'Mata ng'abero'. (Barton 1921)",
      "audioFile": null
    },
    "langName": "Turkana",
    "langId": "turkana"
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
