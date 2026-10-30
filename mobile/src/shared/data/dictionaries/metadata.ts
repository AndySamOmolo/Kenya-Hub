// Auto-generated lightweight dictionary metadata and on-demand loaderwith O(1) search indexing
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
    "lastUpdated": "2026-10-30",
    "contributorNote": "Swahili (Kiswahili) public-domain vocabulary compiled from Rev. Dr. J. L. Krapf (1850, 1882 \"A Dictionary of the Suahili Language\"), Bishop Edward Steere (1870, 1894), Rev. W. E. Taylor (1891), A. C. Madan (1903, 1917), Hildegarde Hinde (1904), Mrs. F. Burt (1910), and Sir Harry H. Johnston (1919).",
    "totalEntries": 18228,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 83
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 588
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 509
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 516
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 404
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 1345
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 841
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 503
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 3450
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 435
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🚌",
        "count": 533
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 469
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 602
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 434
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 7303
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 213
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Gĩkũyũ (Kikuyu) public-domain vocabulary compiled from Sir Harry H. Johnston (1902/1919), Rev. Fr. A. Hémery (1903), Hildegarde Hinde (1904) \"Vocabularies of the Kamba and Kikuyu Languages of East Africa\", A. W. McGregor (1904) \"English–Kikuyu Vocabulary\", W. Scoresby & Katherine Routledge (1910), and C. W. Hobley (1910/1922).",
    "totalEntries": 10921,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 33
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 231
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 256
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🧍",
        "count": 445
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 251
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 538
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 371
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 313
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 2925
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 1216
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 153
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 97
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 144
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 153
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 756
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 3039
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Dholuo public-domain vocabulary compiled from 'A Handbook of the Kavirondo Language' by the Fathers of St. Joseph's Society (Mill-Hill, London / Kisumu, 1920).",
    "totalEntries": 2588,
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
        "count": 85
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 153
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
        "count": 169
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 161
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 124
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 139
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 469
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
        "count": 33
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
        "count": 91
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 466
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 396
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Kalenjin (Nandi / Kipsigis / Keyo / Tugen) public-domain vocabulary compiled from C. W. Hobley (1902, 1903, 1910), Sir Harry H. Johnston (1902) \"The Uganda Protectorate, Vol. II\", A. C. Hollis (1909) \"The Nandi: Their Language and Folk-Lore\", and Hon. K. R. Dundas (1910).",
    "totalEntries": 6289,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 29
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 165
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 259
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 357
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 417
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 516
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 222
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 314
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 450
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 218
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 196
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 60
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 161
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 125
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 541
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 2259
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Luhya (Oluluyia / Luwanga / Luhanga / Lubukusu) public-domain vocabulary compiled strictly from C. W. Hobley (1902) 'Eastern Uganda: An Ethnological Survey', Sir Harry H. Johnston (1902) 'The Uganda Protectorate, Vol. II', C. W. Hobley (1903) 'British East Africa: Anthropological Studies in Kavirondo and Nandi' (JAI Vol. 33), Sir Harry H. Johnston (1919–1922) 'A Comparative Study of the Bantu and Semi-Bantu Languages' (#5–6a), and Rev. N. Stam (1929) 'The Bahanga' (Publications of the Catholic Anthropological Conference, Vol. I, No. 4, pp. 143–179).",
    "totalEntries": 3633,
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
        "count": 183
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
        "icon": "🫀",
        "count": 323
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 360
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌳",
        "count": 262
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
        "count": 222
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 659
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
        "count": 72
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 75
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 148
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 448
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
    "lastUpdated": "2026-10-30",
    "contributorNote": "Kamba (Kĩkamba) public-domain vocabulary compiled strictly from \"Vocabulary of Six East-African Languages\" by Rev. Dr. J. L. Krapf (Tübingen, 1850), \"Grammar of the Kamba Language\" by J. T. Last (SPCK London, 1885), \"Vocabularies of the Kamba and Kikuyu Languages of East Africa\" by Hildegarde Hinde (Cambridge University Press, 1904), \"Ethnology of A-Kamba and Other East African Tribes\" by C. W. Hobley (Cambridge University Press, 1910), \"A Comparative Study of the Bantu and Semi-Bantu Languages\" by Sir Harry H. Johnston (Clarendon Press, 1919–1922, #12 Kamba), and \"The Akamba in British East Africa: An Ethnological Monograph\" by Gerhard Lindblom (Archives d’Études Orientales Vol. 17, Uppsala, 1920).",
    "totalEntries": 4268,
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
        "count": 178
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
        "count": 192
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐾",
        "count": 190
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 310
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 175
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 149
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 216
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 140
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
        "count": 350
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 1566
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 349
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Meru (Kĩmĩĩrũ) public-domain vocabulary compiled from C. W. Hobley (1910) \"Ethnology of A-Kamba and Other East African Tribes\", Sir Harry H. Johnston (1919) \"A Comparative Study of the Bantu and Semi-Bantu Languages\", and Unicode CLDR (mer.xml).",
    "totalEntries": 693,
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
        "count": 22
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 222
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 191
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 233
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Maasai (ɔl Maa) public-domain vocabulary compiled strictly from Hildegarde Hinde (1901) 'The Masai Language: Grammatical Notes Together with a Vocabulary' (Cambridge University Press), Sir Harry H. Johnston (1902) 'The Uganda Protectorate, Vol. II', A. C. Hollis (1905) 'The Masai: Their Language and Folklore' (Clarendon Press, Oxford), and C. W. Hobley (1910) 'Ethnology of A-Kamba and Other East African Tribes' (Cambridge University Press).",
    "totalEntries": 2464,
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
        "count": 106
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 164
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 160
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 204
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
        "count": 202
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 109
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
        "count": 68
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
        "count": 304
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 651
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Kisii (Ekegusii) public-domain vocabulary compiled from C. W. Hobley (1902) \"Eastern Uganda: An Ethnological Survey\" and Sir Harry H. Johnston (1902 \"The Uganda Protectorate, Vol. II\" & 1919 \"A Comparative Study of the Bantu and Semi-Bantu Languages\").",
    "totalEntries": 1173,
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
        "count": 103
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 79
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
        "count": 125
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 68
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 79
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 38
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 35
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
        "count": 22
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
        "count": 196
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Somali (Af-Soomaali) public-domain vocabulary compiled from Fr. Evangeliste de Larajasse (1897) \"Somali–English and English–Somali Dictionary\", Sir Harry H. Johnston (1902), and J. W. C. Kirk (1905) \"A Grammar of the Somali Language\".",
    "totalEntries": 2740,
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
        "count": 202
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 299
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 133
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 174
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 79
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 86
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 111
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
        "count": 69
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 39
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 33
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 39
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
        "count": 701
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 641
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Turkana (Ng'aturukana) public-domain vocabulary compiled strictly from 'Turkana Grammatical Notes and Vocabulary' by Juxon Barton (Journal of the Royal Anthropological Institute, Vol. 51, 1921).",
    "totalEntries": 2114,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 28
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
        "icon": "👥",
        "count": 103
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "👁️",
        "count": 127
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐾",
        "count": 204
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 145
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
        "count": 101
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 549
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
        "count": 48
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 347
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 223
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
    "lastUpdated": "2026-10-30",
    "contributorNote": "Mijikenda (Kigiriama / Kinika / Kidigo) public-domain vocabulary compiled from Rev. Dr. J. L. Krapf (1850), Rev. Dr. L. Krapf & Rev. J. Rebmann (1887) \"A Nika–English Dictionary\", Rev. W. E. Taylor (1891) \"Girijama Vocabulary and Collections\", and Sir Harry H. Johnston (1919).",
    "totalEntries": 16530,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 38
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 285
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 145
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 155
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 134
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🦁",
        "count": 592
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 340
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 152
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 1519
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 245
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 150
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 84
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🏥",
        "count": 209
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
        "count": 12038
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 330
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Teso (Ateso) public-domain vocabulary compiled from C. W. Hobley (1902) \"Eastern Uganda: An Ethnological Survey\" and Sir Harry H. Johnston (1902) \"The Uganda Protectorate, Vol. II\".",
    "totalEntries": 606,
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
        "count": 42
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👥",
        "count": 21
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
        "count": 30
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 18
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 85
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 63
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 178
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Embu (Kĩembu / Kimbeere) dictionary compiled from the Wikipedia Embu_language 150-word lexicon and conversational phrase table, Unicode CLDR (ebu.xml), and PanLex CC0.",
    "totalEntries": 590,
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
        "count": 229
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
        "count": 14
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Taita (Kidaw'ida & Kisagala) dictionary compiled from Rev. J. A. Wray ('An Elementary Introduction to the Taita Language', SPCK London, 1894 — Public Domain), A. Downes Shaw ('A Pocket Vocabulary of the Ki-Swahili, Ki-Nyika, Ki-Taita, and Ki-Kamba Languages', 1885 — Public Domain), Kunihiko Sakamoto (2003–2005), and Unicode CLDR (dav.xml).",
    "totalEntries": 3615,
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
        "count": 70
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
        "icon": "🫀",
        "count": 126
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 137
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 203
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 104
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 94
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 1449
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 92
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
        "count": 49
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 52
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 33
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 1045
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Samburu (Sampur / North Maa) dictionary compiled from Rainer Vossen ('The Eastern Nilotes: Linguistic and Historical Reconstructions', 1982), Wikipedia Nilotic & Eastern Nilotic comparative tables, and Unicode CLDR (saq.xml).",
    "totalEntries": 716,
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
        "count": 48
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
        "count": 135
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
        "count": 342
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
    "lastUpdated": "2026-10-30",
    "contributorNote": "Borana / Oromo (Afaan Borana / Afaan Oromoo) dictionary compiled and verified line-by-line from Rev. J. L. Krapf & Rev. C. W. Isenberg (\"Vocabulary of the Galla Language\", London, CMS, 1842, pp. i–ii, 1–42 & \"Vocabulary of Six East-African Languages\", Tübingen, 1850 — Public Domain), Karl & Lawrence Tutschek (\"Dictionary of the Galla Language, Part I: Galla–English–German [Munich, 1844, pp. i–lix, 1–205] & Part II: English–Galla [Munich, 1845, pp. 1–126]\" & \"A Grammar of the Galla Language\", Munich, 1845, pp. i–viii, 1–92 — Public Domain), Wiktionary's Afroasiatic Swadesh list, and Wikipedia's Oromo language grammatical & lexical tables.",
    "totalEntries": 8132,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 38
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 151
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 172
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 225
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 208
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 430
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 203
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 188
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 2250
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 194
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
        "count": 91
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🏥",
        "count": 175
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏳",
        "count": 1645
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 1977
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 61
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Rendille (Afi Ren'dille) dictionary compiled from C. W. Hobley ('Ethnology of A-Kamba and Other East African Tribes', Cambridge University Press, 1910 — Public Domain, pp. 136–160 including Rendille 7-day week & Mogogodo/Yaaku Cushitic lexicon), Bernd Heine ('Notes on the Rendille Language', Afrika und Übersee 59, 1976 & 'Proto-Baz', 1979), Harold C. Fleming ('Baiso and Rendille', 1964), and Wikipedia Rendille_language.",
    "totalEntries": 179,
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
        "count": 40
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
    "lastUpdated": "2026-10-30",
    "contributorNote": "Pokomo (Kipfokomo) dictionary compiled line-by-line from Rev. Dr. J. L. Krapf ('Vocabulary of Six East-African Languages', Tübingen, 1850 — Public Domain), Ferdinand Würtz ('Wörterbuch des Ki-Tikuu und des Ki-Pokomo', 1895 — Public Domain), Sir Harry H. Johnston ('A Comparative Study of the Bantu and Semi-Bantu Languages', Vol. I, pp. 98–112 & Vol. II, pp. 31–32, #13 Pωkωmω (Pfωkωmω), 1919 — Public Domain), and Nurse & Hinnebusch (1993).",
    "totalEntries": 2369,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 33
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 87
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 63
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 68
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 38
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 210
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 84
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 38
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 116
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
        "count": 73
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 38
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
        "count": 101
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 1005
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 247
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Ilchamus (Camus / Njemps / En-jemusi) dictionary compiled from Hon. K. R. Dundas ('Notes on the Tribes Inhabiting the Baringo District', JRAI Vol. 40, 1910 — Public Domain), Sir Harry H. Johnston ('The Uganda Protectorate, Vol. II', 1902 — Public Domain), Mervyn W. H. Beech ('The Suk: Their Language and Folklore', 1911 — Public Domain), and Rainer Vossen ('The Eastern Nilotes', 1982).",
    "totalEntries": 315,
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
        "count": 65
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Pokot (Pökoot / Suk) and Endo (Chep-bleñg) dictionary compiled line-by-line from Mervyn W. H. Beech ('The Suk: Their Language and Folklore', Clarendon Press Oxford, 1911 — Public Domain), Hon. K. R. Dundas ('Notes on the Tribes Inhabiting the Baringo District', JRAI Vol. 40, 1910 — Public Domain), Sir Harry H. Johnston ('The Uganda Protectorate, Vol. II', 1902 — Public Domain), Juxon Barton (1921 — Public Domain), and Roger van Otterloo (1979).",
    "totalEntries": 3436,
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
        "count": 58
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 108
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 129
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 165
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 151
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 85
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 120
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 1219
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 910
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
        "count": 17
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 35
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 36
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 101
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
    "lastUpdated": "2026-10-25",
    "contributorNote": "Taveta (Kitaveta / Kituweta) dictionary compiled line-by-line from Sir Harry H. Johnston ('A Comparative Study of the Bantu and Semi-Bantu Languages', Vol. I, pp. 98–112 & Vol. II, pp. 33–34, #15 Taveita, 1919 — Public Domain), A. C. Hollis ('Taveta Sayings and Proverbs', Journal of the African Society 9, 1910 & 'Taveta Enigmas', Vol. 10, 1911 — Public Domain), Rev. A. R. Steggall (1892–1906 CMS Taveta translations — Public Domain), and Wikipedia Taveta_language.",
    "totalEntries": 466,
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
        "count": 37
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
        "count": 253
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

export const TOTAL_DICTIONARY_ENTRIES: number = 92065;

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
      "english": "at once",
      "translation": "mara moja",
      "pronunciation": "mara moja",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "eight",
      "translation": "nane",
      "pronunciation": "nane",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "the state or condition of an Mshinde, vanquished person. Note that many passive verbals terminate in -e: cp. mafumbe (yaliyofumbwa), mpambe",
      "translation": "ushinde",
      "pronunciation": "ushinde",
      "context": "Taylor (1891) African Aphorisms, Note [33_1]",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "with unaspirated t) = -ot'e, all (aspirated t), + s, the subjective prefix of the personal pronoun of the 1st person plural. The aspirate in",
      "translation": "sote",
      "pronunciation": "sote",
      "context": "Taylor (1891) African Aphorisms, Note [501_1]",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Bone",
      "translation": "mfúpa",
      "pronunciation": "mf pa",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "arm (the whole)",
      "translation": "mkono, pl. mikono",
      "pronunciation": "mkono, pl. mikono",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "udder",
      "translation": "kiwele",
      "pronunciation": "kiwele",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Ass",
      "translation": "punda",
      "pronunciation": "pund-a",
      "context": "Madan (1917) English-Swahili Vocabulary (s.)",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Stone",
      "translation": "jiwe, pl. máwe",
      "pronunciation": "ji-we pl m we",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Cave",
      "translation": "paango, plur. ma-",
      "pronunciation": "paang-o plur ma",
      "context": "Madan (1917) English-Swahili Vocabulary (s.)",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Honey",
      "translation": "ásali ya nióki",
      "pronunciation": "sa-li ya ni ki",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "grain, seed ; (adj.), a little, a few",
      "translation": "T'embe",
      "pronunciation": "t'embe",
      "context": "Mrs. F. Burt (1910) — Mombasa (Kimvita) Vocabulary [n. 3]",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Hide oneself",
      "translation": "jifita",
      "pronunciation": "ji-fi-ta",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli)",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "A big house",
      "translation": "nyumba kubwa",
      "pronunciation": "nyumba kubwa",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "To count",
      "translation": "kuhesabu",
      "pronunciation": "kuhesabu",
      "context": "Wiktionary Appendix:Swahili Swadesh list",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Begone",
      "translation": "enda sáko! toka!",
      "pronunciation": "end-a s ko to-ka",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli interj.)",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "all",
      "translation": "-ote",
      "pronunciation": "-ote",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "many",
      "translation": "-ingi",
      "pronunciation": "-ingi",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "all right",
      "translation": "vema",
      "pronunciation": "vema",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Low country",
      "translation": "nti tambarāre; nti iliotengeléa",
      "pronunciation": "nti tamb-a-rah-re",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli)",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "his money",
      "translation": "fedayákwe",
      "pronunciation": "fe-day kwe",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli)",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "1910 Mombasa Money, Dry Measures & Weights",
      "translation": "Money Table (p. 152): Silver rupia = 16 anna = 64 bronze pesa (pice); nusu rupia = 8 annas = 32 pice; roboo rupia = 4 annas = 16 pice (vs. old roboo ya riale = quarter dollar = 8 annas = 32 pice)...",
      "pronunciation": "ru-pi-a • ki-sa-ga • ji-zi-la • ma-ni • fa-ra-si-la • ha-mi-li li ba-ru-a",
      "context": "Mani = 3 lbs, Farasila = 36 lbs) & Three Specimen Letters Dated A.H. 1324 (Burt 1910, pp. 152–158 — Mrs. F. Burt (1910) 'Swahili Grammar and Vocabulary' (SPCK, London), Appendices, pp. 152–158 | Additional items: Length Measures (p. 153): shubiri (thumb-to...",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "They [the trees] are almost all dead",
      "translation": "Kama kwamba iliokufa yote.",
      "pronunciation": "ka-ma kwamb-a i-lio-ku-fa yo-te",
      "context": "Steere & Madan (1894) Handbook Appendix IV: Useful & Idiomatic Phrase #164",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "truth",
      "translation": "kweli",
      "pronunciation": "kweli",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Often",
      "translation": "marra nengi",
      "pronunciation": "mar-ra neng-i",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli adv.)",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "(strongly negative), never, not at all",
      "translation": "Kamwe",
      "pronunciation": "kamwe",
      "context": "Mrs. F. Burt (1910) — Mombasa (Kimvita) Vocabulary [adv.]",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "After, conj. exg. after he was gone",
      "translation": "alípo kuenénda",
      "pronunciation": "al po kuen nda",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli)",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "We will both go",
      "translation": "tutakwenda wote wawili",
      "pronunciation": "tutakwenda wote wawili",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "The 8 Historical Swahili Dialect Varieties Documented by Johnston (1919 #21–21g), Burt (1910) & Krapf (1882)",
      "translation": "Ki-Ngozi (archaic poetic), Ki-Tikuu / Ki-Bajuni (#21g), Ki-Siu (#21e), Ki-Pate (#21f), Ki-Amu (#21d Lamu), Ki-Mvita (#21c Mombasa), Ki-Unguja (#21 Zanzibar), Ki-Mrima / Ki-Hadimu (#21a)",
      "pronunciation": "ki-ngo-zi, ki-ti-kuu, ki-si-u, ki-pa-te, ki-a-mu, ki-mvi-ta, ki-un-gu-ja",
      "context": "Sir Harry Johnston (1919, Vol. I, pp. 122–134), Mrs. F. Burt & Rev. W. E. Taylor (1910, pp. 7–10), & Dr. L. Krapf (1882)",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "The Possessive Pronoun of Alienation (-ngwa = -a wat'u, 'someone else's') Recorded by Rev. W. E. Taylor (1891 Appendix B, pp. 166–167)",
      "translation": "shokangwa (= shoka la wat'u, someone else's axe), jembengwa (= jembe la wat'u, someone else's hoe), kitingwa (= kiti cha wat'u, someone else's stool), chanongwa (= chano cha wat'u",
      "pronunciation": "sho-kan-gwa / jem-ben-gwa / ki-tin-gwa / cha-non-gwa / ki-nun-gwa",
      "context": "Rev. W. E. Taylor (1891) 'African Aphorisms; or, Saws from Swahili-Land', Appendix B, pp. 166–167 — someone else's platter), kinungwa (= kinu cha wat'u, someone else's mortar)",
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
      "english": "Six",
      "translation": "Ithathatũ",
      "pronunciation": "ee-thah-thah-too",
      "context": "Hinde: thanthatu",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "all right",
      "translation": "-wēga",
      "pronunciation": "-wēga",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Blacksmith",
      "translation": "mũturi (pl. aturi)",
      "pronunciation": "moo-too-ree",
      "context": "Routledge 1910 pp. 79–96 & Hobley 1922",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "boy",
      "translation": "kahi",
      "pronunciation": "kahi",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "abdomen",
      "translation": "nda",
      "pronunciation": "nda",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "arm (the whole)",
      "translation": "wuoko",
      "pronunciation": "wuoko",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "udder",
      "translation": "nyondo",
      "pronunciation": "nyondo",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Ass, s.",
      "translation": "Ndigiri",
      "pronunciation": "ndigiri",
      "context": "Rev. Fr. A. Hémery (1903) English-Kikuyu Hand-Book (Zanzibar/Nairobi)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Hyena",
      "translation": "hiti",
      "pronunciation": "hee-tee",
      "context": "Hémery 1903, McGregor 1904 & Routledge 1910",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "ant (small black)",
      "translation": "thigirriri",
      "pronunciation": "thigirriri",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  }
];
