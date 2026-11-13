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
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-11-12",
    "contributorNote": "Maasai (ɔl Maa) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), R. N. Cust (1883), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Hildegarde Hinde (1901), Sir Harry H. Johnston (1902), A. C. Hollis (1905), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 49–57), C. W. Hobley (1910, 1922), W. Scoresby & Katherine Routledge (1910, Appendix II pp. 344–349 & Plate CXXXVI), and BFBS (1921).",
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

// ============================================================
// Hon. Kenneth R. Dundas (1910) "Notes on the Tribes Inhabiting the Baringo District, East Africa Protectorate"
// (Journal of the Royal Anthropological Institute Vol. 40, Jan.–Jun. 1910, pp. 49–72, Plates XV–XVII — Public Domain)
// ============================================================
INITIAL_RANDOM_WORDS.push(
  {
    entry: {
      english: "The 3 Njamus (Nyarusi) Settlements, 16 Clans Across 6 Tribes, 11-Man Sirwa-Sheep Furrow Ceremony & 12-Month Lare / Ngolong Calendar",
      translation: "Njemps Liabori ('down stream'), Njemps Lekepir ('up stream') & Korvan (Logogwa) • 16 Clans (Laikipiak: Il Kabes, Loiborgishu, Il Barsegir; Samburu: Il Mayek, Ol Barasaero, Ol Ouara, Loimüsse; Il Doigio: Ol Doimal, El Gungwan, Ol Gesiani, Ol Murtanat, Ol Gessei; Kamasia: Masari; Uasin Gishu: Barsaina; Il Geroi: 'Ngang Lessamagan, 'Ngang Ngissegir) • Lare (Oäni-oingok to Lolrochorot) & Ngolong (Gulua, Rialbala, Arat)",
      pronunciation: "nya-ru-si / li-a-bo-ri / le-ke-pir / kor-van / il ma-yek / la-re / ngo-long",
      context: "Hon. K. R. Dundas, Notes on the Tribes Inhabiting the Baringo District, JRAI Vol. 40 (1910, pp. 49–55)",
      audioFile: null,
    },
    langName: "Ilchamus (Njemps)",
    langId: "ilchamus",
  },
  {
    entry: {
      english: "Bawgott (Suk) 11 Geographical Divisions, 24 Orten Clans & 14 Totems, 3 Gods (Ellap/Ellat, Mt. Alongol & Kerial), Verbatim Sick Prayer & 12-Month Kamei / Bengat Calendar",
      translation: "Bawgott • 24 Orten (sg. Oro) Clans • Ellap/Ellat, Mt. Alongol & Kerial ('If this sickness be of the rain or of the grass or of the earth, or if it be from yourself, take it away') • Kamei (Tabatch, Kapsatt, Kawgelyon, Kawgei, Mou, Terter) & Bengat (Bogogma, Regesa, Perrowa, Meluwon/Meldag, Sukuku, Mugeyon)",
      pronunciation: "baw-gott / or-ten / el-lap / a-lo-ngol / ke-ri-al / ka-mei / be-ngat",
      context: "Hon. K. R. Dundas, Notes on the Tribes Inhabiting the Baringo District, JRAI Vol. 40 (1910, pp. 56–65, 72 & Plates XV–XVII)",
      audioFile: null,
    },
    langName: "Pokot (Pökoot)",
    langId: "pokot",
  },
  {
    entry: {
      english: "Chebleng (13 Maragwetta & Ndo Sections, Clans & Totems), Kamasia (14 Kapteberewa & 6 Nderois Clans), Kabkamat (Olmo) & 5 Comparative Hill-Tribe Calendars",
      translation: "Chebleng (Kogai crow, Seran dikdik, Sirere kite, Saban elephant, Chepbogamwoi buffalo) • Kamasia (10 Sot sun clans, Tallai leopard, Kawbil sabet porcupine, Tungaw & Kirimos chesin hyena; Nderois: Kimoi, Mogei, Tallai, Sot, Kimwan, Terriki of Sessivi/Ararat) • Kamei / Kipgugen / Terrelaw vs. Sengartat / Uwawtgot / Uwawt",
      pronunciation: "che-ble-ng / ko-gai / se-ran / si-re-re / sot / sa-bet / che-sin / ol-mo",
      context: "Hon. K. R. Dundas, Notes on the Tribes Inhabiting the Baringo District, JRAI Vol. 40 (1910, pp. 57, 61–66, 72 & Plate XVII)",
      audioFile: null,
    },
    langName: "Kalenjin",
    langId: "kalenjin",
  },
  {
    entry: {
      english: "16 Principal Turkana Tribes, 19 Ngoitunya & Ngolio Attegir Clans (incl. Ngaruwo Rain-Makers), 6 Life Stages, Agipie & 12-Month Nakiborror / Nakamou / Nait Calendar",
      translation: "16 Tribes & 19 Attegir Clans • nidue → egile → kasikou (oppa) & apesur → aberu → agemat • asavanissia • Agipie • Nakiborror (Lomaruk, Tetimaru, Eliel, Loichoto, Loisoban, Loitiak) & Nakamou (Lolongo, Lopo, Lorara, Lomuk, Logwang, Lodunge; Aug–Oct = Nait)",
      pronunciation: "at-te-gir / nga-ru-wo / ni-du-e / e-gi-le / ka-si-kou / a-gi-pi-e / na-ki-bor-ror / na-ka-mou / nait",
      context: "Hon. K. R. Dundas, Notes on the Tribes Inhabiting the Baringo District, JRAI Vol. 40 (1910, pp. 66–70 & Plates XVI–XVII)",
      audioFile: null,
    },
    langName: "Turkana",
    langId: "turkana",
  }
);

// ============================================================
// Rev. Fr. Evangelist de Larajasse (1897) "Somali-English and English-Somali Dictionary"
// (Kegan Paul, Trench, Trübner & Co., London, 1897 — Public Domain)
// ============================================================
INITIAL_RANDOM_WORDS.push(
  {
    entry: {
      english: "De Larajasse (1897) Minimal Pairs (ader, sōr/kol, gūr/gur, maya), Ogaden/Darod Locution (wa debai), Swahili (sawaheli) & East African Antelopes (si‘g, garanug/lig, adéryo/godir, b‘e‘id, sagaro)",
      translation: "ader • sōr vs. kol • gūr vs. gur • maya • wa debai / wa i debai (Ogaden, Dulbanteh & Darod, p. 293) • sawaheli,—gi / sawahili,—gi (pp. 123, 242, 266) • daba galla,—hi (p. 26) • si‘g,—gi, garanug,—ti & lig,—gi, adéryo ‘ari,—gi & godir,—ki, b‘e‘id / bi‘‘id,—ki, sagaro / sakaro,—adi",
      pronunciation: "ah-dare / sore vs koll / goore vs goor / wa de-bai / sa-wa-he-li / ga-ra-nug / go-dir",
      context: "Rev. Fr. Evangelist de Larajasse, Somali-English and English-Somali Dictionary (London, 1897, pp. v–xiv, 4, 19, 26, 54, 56, 100, 118, 120, 123, 127, 221, 231, 242, 245, 266, 270, 293)",
      audioFile: null,
    },
    langName: "Somali",
    langId: "somali",
  }
);

// ============================================================
// W. Scoresby & Katherine Routledge (1910) "With a Prehistoric People: The Akikúyu of British East Africa"
// (Edward Arnold, London, 1910 — Public Domain, pp. i–xxxii, 1–392, Frontispiece + Plates I–CXXXVI + Map)
// ============================================================
INITIAL_RANDOM_WORDS.push(
  {
    entry: {
      english: "10 Ages (Man-jí-ri to Mu-i-run'-gu), 17 Initiation Years (1891 Ngan'do to 1907 Ka-ban'go), 13 Clans (i-ri-ka), 30-Item Wa-wer'-u Market List & 2 Ki-shan'-di Rattle Keys (47 & 38 Symbols)",
      translation: "Man-jí-ri (Mam'-ba & N'jí-ri) → Man-dó-ti → Chi-éra → Masaí → Ma-thá-thi → N'dé-mi → I-ré-gi → Ma-í-na → Mwan'gi → Mu-i-run'-gu • 1891 Ngan'do to 1907 Ka-ban'go • ku-i'-nya ki-shan'-di (47 & 38 symbols) • i-li'-ma, mu-hi'-ga, ke-li'-ha, ú-ta & rú-ga (ró-ga, ke-rá-si, n'gó-me) • 6-step chain ki-len-ge'-ri / mu-i-nor'-o",
      pronunciation: "man-ji-ri / ma-tha-thi / i-re-gi / ku-i-nya ki-shan-di / i-li-ma / ke-li-ha / ru-ga",
      context: "W. Scoresby & Katherine Routledge, With a Prehistoric People: The Akikúyu of British East Africa (London: Edward Arnold, 1910, pp. i–xxxii, 1–392, Plates I–CXXXVI)",
      audioFile: null,
    },
    langName: "Kikuyu (Gĩkũyũ)",
    langId: "kikuyu",
  },
  {
    entry: {
      english: "The Masaí Warrior Manyatta, Elected Legooran ('Colonel'), 5-Warrior Daily Ration (1 Sheep + Milk), Lion-Mane War Helmet, Blood Song & Arthi Plain Battle (>1,000 Dead)",
      translation: "manyatta • legooran ('colonel') • 1 sheep daily to 5 warriors + milk (neither beer nor tobacco allowed) • lion-mane war headdress (for killing a lion single-handed with spear) • Blood Song with spinning 4-ft spear • Arthi plain battle & removal to Lei-ki-pi-a",
      pronunciation: "ma-nyat-ta / le-goo-ran / ar-thi / lei-ki-pi-a",
      context: "W. Scoresby & Katherine Routledge, With a Prehistoric People: The Akikúyu of British East Africa (1910, Appendix II: The Masaí, pp. 344–349 & Plate CXXXVI)",
      audioFile: null,
    },
    langName: "Maasai (Maa)",
    langId: "maasai",
  }
);

INITIAL_RANDOM_WORDS.push(
  {
    entry: {
      english: "Rev. Dr. J. L. Krapf (1850) Preface (pp. iii–x) & Six-Column Comparative Vocabulary of Kisuáheli, Kiníka, Kikámba, Kipokómo, Kihiáu & Kigálla (pp. 1–64)",
      translation: "Kisuáheli (understood from Barawa 1½° N to Mosambic; spoken on Kiáma, Túla, Patta, Lámu, Káu, Mómbas, Tánga, Pémba, Sánsibar & Kiloa by 350,000–400,000 souls) • Makafiri vs. watu wa mrima • Patta vs. Malinde • Nilo-Hamitic or Nilotic [Bantu] family vs. Nigro-Hamitic stock • 5th Column Kihiáu (Wahiau E. of Lake Niassa / Moráwi, 1848 Mombas Kamanga informant after 1847 Mabiti raid)",
      pronunciation: "ki-su-a-he-li / ma-ka-fi-ri / wa-tu wa m-ri-ma / ki-hi-a-u / mo-ra-wi / ma-bi-ti",
      context: "Rev. Dr. J. L. Krapf, Vocabulary of Six East-African Languages (Kisuáheli, Kiníka, Kikámba, Kipokómo, Kihiáu, Kigálla) (Tübingen: Printed by Lud. Friedr. Fues, 1850, Preface pp. iii–x & Vocabulary pp. 1–64)",
      audioFile: null,
    },
    langName: "Swahili (Kiswahili)",
    langId: "swahili",
  },
  {
    entry: {
      english: "Rev. Dr. J. L. Krapf (1850) Preface on the Galla of the River Dana (Kigálla, pp. viii–x), 'Ormania' Etymology & 3-Point Proof on Shoan Amharic",
      translation: "Galla of the River Dana (Kigálla, 6th column of Krapf 1850): Berraráta tribe on the River Dána (Máro) • Coined 'Ormania' from Orma ('men' = brave men vs. morma 'neck', p. 30) • 3-point proof that Galla modified Shoan Amharic (tschamma = gama 'foot-sole', gasha 'shield', dshamma; verb-final syntax; ale/adarraga = Gede/Gode)",
      pronunciation: "ki-gal-la / or-ma / or-ma-ni-a / mor-ma / ga-ma / ga-sha / ge-de / go-de",
      context: "Rev. Dr. J. L. Krapf, Vocabulary of Six East-African Languages (Kisuáheli, Kiníka, Kikámba, Kipokómo, Kihiáu, Kigálla) (Tübingen: Printed by Lud. Friedr. Fues, 1850, Preface pp. viii–x & Vocabulary pp. 1–64)",
      audioFile: null,
    },
    langName: "Borana (Oromo)",
    langId: "borana",
  }
);

INITIAL_RANDOM_WORDS.push(
  {
    entry: {
      english: "Rev. J. L. Krapf & Rev. C. W. Isenberg (1842) Frontmatter, Mombasa/BMS Provenance, Preface (pp. i–ii) & Publisher's Advertisements (p. [43])",
      translation: "Title Page: Vocabulary of the Galla Language, by the Rev. J. L. Krapf (London: CMS / Richard Watts, 1842) • Provenance: Baptist Missionary Society Library No. P. 1. 5 & S. F. Hassan, Advocate, Mombasa (UCSB Library X-30265) • Rev. C. W. Isenberg's Preface (pp. i–ii): translated from Krapf's 1841 Shoa Galla-German MS, POS-tagged via St. Matthew & St. John, with Dankali, Somāli, Amharic, Ethiopic, Tigre, Arabic & Hebrew cognates",
      pronunciation: "krapf / i-sen-berg / sho-a / da-nka-li / so-ma-li",
      context: "Rev. J. L. Krapf & Rev. C. W. Isenberg, Vocabulary of the Galla Language (London: Church Missionary Society / Richard Watts, 1842, Frontmatter, Preface pp. i–ii & Colophon p. [43])",
      audioFile: null,
    },
    langName: "Borana (Oromo)",
    langId: "borana",
  }
);

INITIAL_RANDOM_WORDS.push(
  {
    entry: {
      english: "Hildegarde Hinde (1904) Preface (pp. v–viii), Alphabet (pp. ix–x) & Complete 12-Paradigm Verb Conjugation of Ku or Gu-tinda ('To Conquer', pp. xi–xviii)",
      translation: "Preface (Fort Hall, Sept. 1902): Ulu Kamba (Machakos to coast), Nganyawa Kamba (Kitui District), and Jogowini Kikuyu (Kenya Province) • 6 Plural Rules: Mukamba → Akamba & Mukikuyu → Akikuyu • 12-Paradigm Conjugation of Ku or gu-tinda (Past Perfect: Kamba ni-na-tind-ie vs. Kikuyu ni-tind-eri)",
      pronunciation: "mu-ka-mba a-ka-mba / mu-ki-ku-yu a-ki-ku-yu / ku-ti-nda gu-ti-nda",
      context: "Hildegarde Hinde, Vocabularies of the Kamba and Kikuyu Languages of East Africa (Cambridge: University Press, 1904, pp. v–xviii)",
      audioFile: null,
    },
    langName: "Kamba (Kĩkamba)",
    langId: "kamba",
  }
);

// ============================================================
// Sir Harry Johnston (1902) "The Uganda Protectorate, Vol. II"
// (London: Hutchinson & Co., Paternoster Row, 1902, pp. i–xx, 471–1018 — Public Domain)
// ============================================================
INITIAL_RANDOM_WORDS.push(
  {
    entry: {
      english: "Sir Harry Johnston (1902) Ch. XVII Bantu Kavirondo & Masaba Ethnography (pp. 722–755, Figs. 383–403), Lukonde 16 Noun Prefixes (p. 1001) & Set 8 / Set 9 Vocabularies (pp. 980–1001)",
      translation: "16 Lukonde Prefixes: Umu-, Baba-, Gumu-, Gimi-, Ili-, Gama-, Ki-(Si-), Bibi-, In-, Zi-/Tsi-(Ci-), Lulu-, Ruru-(Tutu-), Kaka-, Bubu-, Kuku-(Gu-), Ha-(Wa-) • Kamagumi kabili (20), Kamagumi katatu (30), Kamagumi kanne (40), Kamagumi karano (50) • Akhana (pl. Ruana) • Iduasi • Racari • Olumutana / Sirkhanga / Obukanga • Injugu / Imbande • Ihumba • Mwieka • Ehei • Alia efu",
      pronunciation: "gu-mu ga-ma ba-ba bu-bu / ka-ma-gu-mi ka-ta-tu / a-kha-na / i-dua-si / ra-ca-ri / mwie-ka",
      context: "Sir Harry Johnston, The Uganda Protectorate, Vol. II (London: Hutchinson & Co., 1902, pp. 722–755, 889–901, 980–1001)",
      audioFile: null,
    },
    langName: "Luhya (Luyia)",
    langId: "luhya",
  },
  {
    entry: {
      english: "Sir Harry Johnston (1902) Ch. XVIII Ja-luo (Nyifwa) Ethnography (pp. 756–795, Figs. 428–438), Set 3 Vocabulary & Phonetic Footnotes [-11], [-12], [-13] (pp. 926–935)",
      translation: "Retc (fn. [-11]: pronounced 'Retch' = Fish) • Ratc (fn. [-12]: often sounds like 'Raty' = Bad) • Aciemo (fn. [-13]: c in Ja-luo is pronounced very like ty = I eat) • Ñama ñongo (Great man) • Kalīni (Ground-nut) • Nyapuñ lak (Tooth, molar) • Nyaluógono (Tooth, canine) • Ñutu (Woman, young) • Ukanamī (I give not) • Chieng, Nyaluo beads (1 cow/bead), Dema, Uvino (Yothetth), Jamkingo, Kiviri & Chief Odua's Prophecy",
      pronunciation: "retch / raty / a-tye-mo / nga-ma ngo-ngo / ka-li-ni / nya-pung lak / u-ka-na-mi",
      context: "Sir Harry Johnston, The Uganda Protectorate, Vol. II (London: Hutchinson & Co., 1902, pp. 756–795, 926–935)",
      audioFile: null,
    },
    langName: "Dholuo (Luo)",
    langId: "luo",
  },
  {
    entry: {
      english: "Sir Harry Johnston (1902) Ch. XIX Masai Ethnography (pp. 796–836, Plate 46, Figs. 439–463), Shrubsall Tables A–F (Nos. 69–76), 4-God Myth, Os-singolio Score (p. 834) & All 30 Additional Words and Sentences in Masai (pp. 925–926)",
      translation: "Sopai! — Eépa! • Asai! • T'anyō! / Tanyō nanu! • Elotu taīsere • Totóna enné! • Ino! ṣōmō! • Emī damisso! • Dumú! • Injohi maōko! • Ndámăti! • Wōu tāsīū! • Neningo! • Tōtónna! • Imīñāni iye! • Biado! • Baīya! • Āiya! • Ékĭnō! • Eñnoyik akīma • Kálo? • Gīniñ? • Iwa! • Ṣomo erriita ngiṣu! • Ol aṣe / eñgaṣe • Ol airini • Ol bāhe • Ol canni • Anyorr • Yao el gēk",
      pronunciation: "so-pai e-e-pa / a-sai / ta-nyo na-nu / e-lo-tu tai-se-re / in-jo-hi ma-o-ko / bi-a-do",
      context: "Sir Harry Johnston, The Uganda Protectorate, Vol. II (London: Hutchinson & Co., 1902, pp. 492–507, 796–836, 913–926)",
      audioFile: null,
    },
    langName: "Maasai (Maa)",
    langId: "maasai",
  },
  {
    entry: {
      english: "Sir Harry Johnston (1902) Ch. XIX Nandi, Kamásia, Elgeyo, Mutei, Elgonyi, Sabei & Andorobo Ethnography (pp. 855–884, Plates 47–48, Figs. 480–505), Shrubsall Tables A–F (Nos. 77–99) & All 19 Additional Words and Sentences in Nandi (p. 925)",
      translation: "Tiamge (sg.), Otyamge (pl.) • Ñgō ni? • Nyo cōk! • Kanyīte! • Kongoi, Eñgōñgōi! • Mweīcī ko ganyā • Ui! • Kātigē! • Iberber inye! • Ribge! • Cōriōnyo! • Meūtye! • Sūt! • Indōē! • Isubō! • Kasā! • istoge ēñor! • Toñonye! • Kōnō pek āē • Lakwen na nyu (My child) • Teta kigei (Milch cow) • Kejan (Many) • Kiebtó (Young woman, virgin)",
      pronunciation: "ti-am-ge o-tyam-ge / ko-ngoi / ka-ti-ge / cho-rio-nyo / ko-no pek a-e / lak-wen na nyu",
      context: "Sir Harry Johnston, The Uganda Protectorate, Vol. II (London: Hutchinson & Co., 1902, pp. 492–509, 855–884, 913–925)",
      audioFile: null,
    },
    langName: "Kalenjin",
    langId: "kalenjin",
  },
  {
    entry: {
      english: "Sir Harry Johnston (1902) Ch. XIX Sūk (Pokot) Ethnography (pp. 839–852, Figs. 472–477), Sūk Musical Score (p. 851), Shrubsall Tables A–F (Nos. 59–68) & Set 1 Sūk Vocabulary (pp. 903–912)",
      translation: "Ciebī, Cep (Child, female) • Ciēbē (Woman, young) • Ane aca karām (I am good) • Kiruokin (Chief) • Tuluo (Mountain) • Kūgū (Crocodile) • Kopau / Kopan (Rhinoceros) • Oluwăn / Koluanu / Ma manyḗ (I drink / drank / drank not) • Abkana kiama (I eat not) • Moñunanye (I come not) • Mongetanye (I know not)",
      pronunciation: "cie-bi cep / cie-be / a-ne a-ca ka-ram / ki-ruo-kin / tu-luo / ku-gu / mo-nge-ta-nye",
      context: "Sir Harry Johnston, The Uganda Protectorate, Vol. II (London: Hutchinson & Co., 1902, pp. 492–507, 839–852, 903–912)",
      audioFile: null,
    },
    langName: "Pokot (Pökoot)",
    langId: "pokot",
  },
  {
    entry: {
      english: "Sir Harry Johnston (1902) Set 2 Ngishu / Baringo Maa (Ilchamus & Samburu) Compound Tens 50–90 (p. 921) & Verbal Sentences (pp. 922–924)",
      translation: "Onnom (50) • Onnom otomon (60) • Onnom obikitam (70) • Onnom otomoni uni (80) • Onnom artam (90) • Ip (100) • Ip tomon (1,000) • Alotu / Ma lotu • Aiṣo 'yé / Aiṣō elle • Atara ninje • Etu gimirio • Keñworeta nanu • Eado te nano",
      pronunciation: "on-nom o-to-mon / on-nom o-bi-ki-tam / on-nom o-to-mo-ni u-ni / on-nom ar-tam / ip to-mon",
      context: "Sir Harry Johnston, The Uganda Protectorate, Vol. II (London: Hutchinson & Co., 1902, pp. 796–804, 913–924)",
      audioFile: null,
    },
    langName: "Ilchamus (Njemps)",
    langId: "ilchamus",
  },
  {
    entry: {
      english: "Sir Harry Johnston (1902) Set 9 Igizii (Ekegusii) & Ikuyu (Kikuyu) Comparative Vocabulary, Numerals & Pronouns (pp. 993–1001)",
      translation: "Igizii: Omundu (pl. Abanto), Engoro / Erioba, Amace, Omurero, Eritimo (pl. Amatimo), Enguba, Ngotenga (I dance), Nangire (I come not), Emuamu (Black), Aīya / Aiga (Here) • Ikuyu: Fisi → Hiti (hyena), Pa- → Ha- (Class 16), Mundu (pl. Andu), Ngai, Mai, Mwaki, Itimu, Ngo",
      pronunciation: "o-mu-ndu a-ba-nto / e-ngo-ro e-rio-ba / a-ma-ce / ngo-te-nga / na-ngi-re / hi-ti",
      context: "Sir Harry Johnston, The Uganda Protectorate, Vol. II (London: Hutchinson & Co., 1902, Set 9, pp. 993–1001)",
      audioFile: null,
    },
    langName: "Kisii (Ekegusii)",
    langId: "kisii",
  }
);


// Complete Northcote (1907) Lexical & Ethnographic Highlights (JRAI Vol. 37, pp. 58-66)
export const NORTHCOTE_1907_LEXICAL_HIGHLIGHTS = [
  { word: 'Jaluo', translation: 'Proper name of the Nilotic Kavirondo (related to Dinka, Aluri, and Acholi near Wadilai)', language: 'luo', page: 58 },
  { word: 'askari', translation: 'Retainer, page, or poor relation in a family village; policeman (Swahili loanword)', language: 'luo', page: 60 },
  { word: 'shamba', translation: 'Individually tilled agricultural plot within communal clan land (Swahili loanword)', language: 'luo', page: 60 },
  { word: 'mtama', translation: 'Millet offered to the sun-god at wedding feasts and in the nickname obele (Swahili loanword)', language: 'luo', page: 62 },
  { word: 'onyango', translation: 'Born in the morning (time-of-day birth name)', language: 'luo', page: 62 },
  { word: 'oching', translation: 'Born at noon (time-of-day birth name; Ochieng)', language: 'luo', page: 62 },
  { word: 'odiambo', translation: 'Born in the afternoon (time-of-day birth name; Odhiambo)', language: 'luo', page: 62 },
  { word: 'otieno', translation: 'Born at night (time-of-day birth name)', language: 'luo', page: 62 },
  { word: 'obele', translation: '"The man who owned much mtama [millet]" (hereditary nickname)', language: 'luo', page: 62 },
  { word: 'oliech', translation: '"The man who killed an elephant" (hereditary nickname)', language: 'luo', page: 62 },
  { word: 'obonyo', translation: '"The man like a locust" (hereditary nickname)', language: 'luo', page: 62 },
  { word: 'Bwana', translation: 'Colonial official / magistrate (rain-maker summons anecdote)', language: 'luo', page: 64 }
] as const;

// ============================================================
// Mervyn W. H. Beech & Sir Charles Eliot (1911) "The Suk: Their Language and Folklore"
// (Oxford: At the Clarendon Press, 1911, pp. i–xxiv, 1–151, Plates I–XXIV, Maps I–III — Public Domain)
// ============================================================
INITIAL_RANDOM_WORDS.push(
  {
    entry: {
      english: "Mervyn W. H. Beech (1911) Chs. I–III & Part II: 8 Suk Divisions, 8 Cyclic Age-Sets (Pĕn), Tiamolok's Pantheon (Torôrut, Seta, Arawaʻ, Ilat, Kokel, Topogh, Asis), Planting Hymn, Potters' Chant, 18 Tiangoi! Riddles & 2 Interlinear Stories",
      translation: "Pôkwut (sg. Pĕch-on) • Tokwes! — Eia! • Chamke! • Korôton! — I-rôt-enyi! • Planting Hymn: Torôrut kun-e' mwagh / Ki-sop-'cha pich / Ki-sop sapon — Ny' anyin! • Potter's Chant: O-wei ter i-ker-ach mba maʻ, I-chi-nyi tiumbo kukoʻ! • Curse: Ke-sasi-anan ter-e-nyan ko-sasi-nyi Torôrut! • Bee-Swarm: Hei-Hei-Hei ka-rat sakam kôt! • Tiangoi! — Tia! — Donguch! • Kip-kokech ngô Ki-blerkwa & Kechir ngô Ñgaror",
      pronunciation: "po-kwut / tok-wes / cham-ke / ko-ro-ton / to-ro-rut / ti-a-ngoi",
      context: "Mervyn W. H. Beech & Sir Charles Eliot, The Suk: Their Language and Folklore (Oxford: Clarendon Press, 1911, pp. i–xxiv, 1–151, Plates I–XXIV, Maps I–III)",
      audioFile: null,
    },
    langName: "Pokot (Pökoot)",
    langId: "pokot",
  },
  {
    entry: {
      english: "Sir Charles Eliot (1911, pp. xi–xxiv): 21 Suk–Nandi Guttural 'gh' Cognates, 'r/l' Interchange, 13 Movable 'i-' Prefix Verbs & Endo (Chep-bleñg) Kaptapar Rock-Pillar Legend",
      translation: "21 'gh' Cognates: ghaʻ/ya, egh/ei, hegh/ē, nagh/naite, tagh/tae, siegh/sie, togh/tui, ghet/etio, maugh/moi, nyagh/nye, segh/siiya, ñgoghom/ñgom, ghogh/ioi, ogh/oi-iye, meghat/myat, ghiet/ete, igh/ie, mwagh/mwai, nyagh/ñga, sighin/siin, kogh/koi • rel/lel, karual/kalual, nyaril/inyalil • Endo (Chep-bleñg) Chiefs Lōseron, Lotiram, Wiraporoa & Kapkornis • Nov. 1909 Cheptulel Peace Oath (i-mēgh!)",
      pronunciation: "gha / ya • egh / ei • rel / lel • chep-bleng / lo-se-ron / i-megh",
      context: "Sir Charles Eliot & Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford: Clarendon Press, 1911, pp. xi–xxiv, 3, 17, 19 fn. 1, 27–37)",
      audioFile: null,
    },
    langName: "Kalenjin",
    langId: "kalenjin",
  },
  {
    entry: {
      english: "Mervyn W. H. Beech (1911, pp. 7–9, 21, 27–37, 150–151): 25 Turkana–Suk Comparative Cognates, Chief Aijigwa's Turkana Legal Code, Lemurok vs. Lekatuknok & 30-Ft Tree-Fork Granaries",
      translation: "25 Cognates: Adaru, Adiñgo, Akul, Alakam, Aloket, Alöit (10-elephant/day spring-noose trap), Amumūr, Anañga (enanga), Apapai, Aparparat, Arobet, Atērdĭü, Atekēr, Atoros, Aturo, Aturpopo, Kalacha, Kedoñgô, Koliko, Legetioʻ, Loñgô, Muren (ngi-muren), Ñgechĕr (e-kicholông / ngicholong), Rungu, Siolip • Chief Aijigwa (Naudu & Salali) • Hereditary Lemurok vs. Lekatuknok • Turkana Dorobo 30-ft tree-fork granaries at En-gabotoʻ",
      pronunciation: "a-da-ru / a-kul / a-lo-it / a-te-ker / si-o-lip / le-mu-rok / le-ka-tuk-nok",
      context: "Mervyn W. H. Beech & Sir Charles Eliot, The Suk: Their Language and Folklore (Oxford: Clarendon Press, 1911, pp. xxiii–xxiv, 7–9, 21, 27–37, 150–151)",
      audioFile: null,
    },
    langName: "Turkana",
    langId: "turkana",
  },
  {
    entry: {
      english: "Mervyn W. H. Beech (1911, pp. 4, 19 fn. 1, 27–37): En-jemusi Sky-God (En-Gai) & Earth-God (En-Gop) and Chief Launjali's Customary Law Code",
      translation: "En-Gai (Sky-God) & En-Gop (Earth-God; Sun and Moon are husband and wife, p. 19 fn. 1) • Chief Launjali (p. 27) • Homicide: 10–20 cows • Theft: 3× restitution per thief (9 cows for 3 thieves stealing 1 cow) • Bride-price: 6 goats • Slander of elder: 1 bullock",
      pronunciation: "en-gai / en-gop / lau-nja-li / en-je-mu-si",
      context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (Oxford: Clarendon Press, 1911, pp. 4, 19 fn. 1, 27–37)",
      audioFile: null,
    },
    langName: "Ilchamus (Njemps)",
    langId: "ilchamus",
  }
);

export const BEECH_1911_LEXICAL_HIGHLIGHTS = [
  { word: 'Pôkwut (sg. Pĕch-on)', translation: 'Indigenous autonym of the Suk nation ("Suk" being the Masai name, ? from hill short-sword chŭk / chôk)', language: 'pokot', page: 1 },
  { word: 'Torôrut, Seta, Arawaʻ, Ilat, Kokel, Topogh & Asis', translation: 'Tiamolok\'s celestial pantheon: Supreme winged God Torôrut, wife Seta (Pleiades), eldest son Arawaʻ (Moon), younger son Ilat (Rain), children Kokel (Stars), daughter Topogh (Evening Star), and younger brother Asis (Sun)', language: 'pokot', page: 19 },
  { word: 'Ki-ruwok-in (pl. Ki-ruwok-u)', translation: 'Influential elder/adviser presiding over a cluster of villages (Lowelan, Kamuta, Karôle, Latanyale) alongside elected Mainaʻ (Nerkau) war-leaders (Kidarile, Lôrimo)', language: 'pokot', page: 6 },
  { word: 'Kamar (pl. kamar-tin)', translation: 'Sacred raid-ox with one horn pointing forward and one backward, bedecked with ostrich feathers', language: 'pokot', page: 8 },
  { word: 'Lu vs. Igh & Muk-a vs. Set', translation: 'To drink milk (lu) vs. to drink water (igh); milk calabash (muk-a) vs. water calabash (set)', language: 'pokot', page: 8 },
  { word: 'Tiangoi! — Tia! — Donguch!', translation: 'Riddle challenge ("A riddle!"), listener response ("Propound it!"), and surrender ("We give it up!") across all 18 Suk riddles', language: 'pokot', page: 44 },
  { word: 'Tokwes! — Eia! / Chamke! / Korôton! — I-rôt-enyi!', translation: 'Village entry greeting ("Hail! — Yes!"), personal greeting ("Health to thee!"), and parting farewell ("I have gone! — Thou art going!")', language: 'pokot', page: 92 },
  { word: 'Chep-bleñg (Endo) & Kaptapar', translation: 'Indigenous Suk name for the Endo people of the Elgeyo escarpment, who migrated from Kaptapar ("beyond Sirgoi") after a bird warned them before a sacred rock-pillar split', language: 'kalenjin', page: 3 },
  { word: 'Lemurok vs. Lekatuknok', translation: 'Hereditary Turkana medicine-men/chiefs (Lemurok) vs. non-hereditary elders/advisers (Lekatuknok) recorded from Chief Aijigwa', language: 'turkana', page: 36 },
  { word: 'En-Gai & En-Gop', translation: 'En-jemusi (Ilchamus) Sky-God and Earth-God, with Sun and Moon held to be husband and wife', language: 'ilchamus', page: 19 }
] as const;

// ============================================================
// A. C. Hollis & Sir Charles Eliot (1909) "The Nandi: Their Language and Folk-Lore"
// (Oxford: At the Clarendon Press, 1909, pp. i–xl, 1–328, Plates I–XLIV, Figs. 1–53, Map — Public Domain)
// ============================================================
INITIAL_RANDOM_WORDS.push(
  {
    entry: {
      english: "A. C. Hollis (1909) Part I & II: 6 Informants (Oriare, Matang, Ar-ap-Sirtoi, Ar-ap-Kuna, Ar-ap-Chepsiet, Kipchomber), 6 Emet Counties, 15 Pororiet Districts, 17 Oret Clans, 7 Ipinda Age-Sets, 57 Proverbs, 76 Enigmas & 83 Botanical Species",
      translation: "Sopai! — Eiko! • Takwenya! — Igo! • Tongoj! — Choo! / Ta-tuñguch! — Ki-sir-to; kōn-ech pororiet! • 6 Emet: Wareñg, Masop, Soiin/Pelkut, Aldai, Chesume, Em-gwen • 7 Ipinda: Maina, Nyonge, Kimnyike, Kâplelach, Kipkoiimet, Sowe, Juma (3 Fires: Changen-opir, Kipal-koñg, Kiptoito) • Orkoiyot: Kipsegun → Kopokoii → Turukat → Kimnyole → Kipchomber, Koitalel/Samwei & Kipeles/Tamasun • 12 Months: Kiptamo to Ñgotioto",
      pronunciation: "so-pai ei-ko / ta-kwe-nya i-go / to-ngoj choo / wa-reng ma-sop / mai-na nyo-nge",
      context: "A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, pp. i–xl, 1–328, Plates I–XLIV, Figs. 1–53, Map)",
      audioFile: null,
    },
    langName: "Kalenjin",
    langId: "kalenjin",
  },
  {
    entry: {
      english: "Sir Charles Eliot (1909, pp. xxvii–xxxiii): Lake Natron Dorobo Dialect, Rift Valley Nandi Toponyms (Morendat & Suswa) & Taveta-Collected Turkana Grammatical Sketch",
      translation: "Lake Natron Dorobo: arko (he), tichee/ndichee (they), ar-a-mach-a ('I wanted'), ar-ke-mach-a ('I am wanted'), kuyanda (bow), pelyandee (elephant), puniandee (enemy), muyare (salt), taamuye (beard), maae (belly), kaawe (bone), Vanda (journey), vaiyaa (old man) • Morendat (< marandut 'footprint') & Suswa (< susuo 'grass') • Turkana: nye-takho/ñgi-takh, nya-takho/ñga-takh, Ayoñg/Iyoñg/nyezi, A-cham-it, ka-cham-it, ki-cham-it, ny-a-cham-it",
      pronunciation: "ar-ko / ti-chee / ar-a-ma-cha / mo-ren-dat / su-swa / nye-ta-kho / a-cham-it",
      context: "Sir Charles Eliot, Introduction to A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, pp. xxvii–xxxiii)",
      audioFile: null,
    },
    langName: "Turkana",
    langId: "turkana",
  },
  {
    entry: {
      english: "A. C. Hollis & Sir Charles Eliot (1909, pp. xxxiii, 44, 50): 150-Word Kunōno (Masai Smiths) Dialect Study (4 Unique Metallurgical Terms), Uasin Gishu Orkoiyot Genealogy & 'Kambakta' Masai War-Song",
      translation: "4 Unique Kunōno Forge Words: e-samereita (iron), o-siota (knife), en-gandiit (spear), e-wuyuwuyu (axe) (+ >100 Masai words & 12 Nandi cognates) • Masai war-song sung by Nandi circumcision novices at Labet-ap-eun: kambakta",
      pronunciation: "e-sa-me-rei-ta / o-sio-ta / en-gan-diit / e-wu-yu-wu-yu / kam-bak-ta",
      context: "Sir Charles Eliot & A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, pp. xxxiii, 44, 50)",
      audioFile: null,
    },
    langName: "Maasai (Maa)",
    langId: "maasai",
  }
);

export const HOLLIS_1909_LEXICAL_HIGHLIGHTS = [
  { word: 'Chemñgal (sg. Chemñgalindet) / Nandi (sg. Nandiindet, pl. Nandiik)', translation: 'Original endonym Chemñgal vs. Swahili-derived name Nandi (from mnandi "cormorant", applied to raiders swooping down like cormorants)', language: 'kalenjin', page: 4 },
  { word: 'Oriare, Matang, Ar-ap-Sirtoi, Ar-ap-Kuna, Ar-ap-Chepsiet & Kipchomber (Ar-ap-Koileke)', translation: 'The 5 Nandi warrior informants and the Kipsikīs/Lumbwa Chief Medicine Man (with his son Sonaiet / Ar-ap-Kipchomber) credited in Hollis\'s Preface', language: 'kalenjin', page: 10 },
  { word: '6 Emet, 15 Pororiet & 17 Oret', translation: 'The 6 Counties (Wareñg, Masop, Soiin/Pelkut, Aldai, Chesume, Em-gwen), 15 Districts (Kâmelilo to Tuken), and 17 Exogamous Clans (Kipoiis to Chemur) with women\'s names, totems, and Appendix II etymologies', language: 'kalenjin', page: 4 },
  { word: '7 Ipinda, 3 Mostinuek & Saket-ap-eito', translation: 'The 7 cyclic age-sets (Maina, Nyonge, Kimnyike, Kâplelach, Kipkoiimet, Sowe, Juma), 3 warrior fires (Changen-opir, Kipal-koñg, Kiptoito), and the ~7½-year handing-over ceremony', language: 'kalenjin', page: 11 },
  { word: 'Kaita (m.) vs. Kot (f.) & 13 Teret Pot Types', translation: 'Speaker-gendered noun for "house" (men say ka/kaita, women say ko/kot) with 24 architectural parts, and 13 distinct earthenware pot types crafted by women potters', language: 'kalenjin', page: 14 },
  { word: 'Kipsegun → Kopokoii → Turukat → Kimnyole → Kipchomber, Koitalel (Samwei) & Kipeles (Tamasun)', translation: 'Genealogy of the hereditary Nandi Orkoiyot dynasty of Uasin Gishu Masai origin (Talai clan)', language: 'kalenjin', page: 50 },
  { word: 'Tongoj! — Choo! / Ta-tuñguch! — Ki-sir-to; kōn-ech pororiet!', translation: 'Formula opening the 76 Nandi Enigmas (Tongōchik-ap-Nandi, pp. 133–151) alongside the 57 Proverbs (Atindonik-ap-Nandi, pp. 124–132) and 18 Folk-Tales (pp. 101–123)', language: 'kalenjin', page: 133 },
  { word: 'arko, tichee/ndichee, ar-a-mach-a, kuyanda, pelyandee • Morendat & Suswa', translation: 'Lake Natron Dorobo dialect pronouns/prefixes and Rift Valley Nandi place-names (Morendat < marandut "footprint", Suswa < susuo "grass") in Sir Charles Eliot\'s Introduction', language: 'kalenjin', page: 27 },
  { word: 'nye-takho / ñgi-takh, nya-takho / ñga-takh, A-cham-it, ka-cham-it, ki-cham-it', translation: 'Turkana gender articles, noun plurals, and combined subject-object verb prefixes in Sir Charles Eliot\'s Taveta-collected Turkana sketch (pp. xxix–xxxiii)', language: 'turkana', page: 29 },
  { word: 'e-samereita, o-siota, en-gandiit & e-wuyuwuyu', translation: 'The 4 unique metallurgical words (iron, knife, spear, axe) peculiar to the Kunōno (Masai Smiths) caste in Hollis\'s 150-word vocabulary (p. xxxiii)', language: 'maasai', page: 33 }
] as const;
