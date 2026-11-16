import type { LanguageConfig, CourseUnit } from "../types";

export const KAMBA_CONFIG: LanguageConfig = {
  "id": "kamba",
  "name": "Kamba",
  "nativeName": "Kĩkamba",
  "family": "Bantu",
  "counties": [
    "Machakos",
    "Makueni",
    "Kitui"
  ],
  "speakers": "4.7M",
  "speechLocale": "sw-KE",
  "description": "An Eastern Bantu language spoken by the Akamba community in south-central Kenya, celebrated for wood carving, music, trade history, and rich proverbial wisdom.",
  "color": "#FF9800",
  "sources": [
    "kamba-grammar-last",
    "kamba-kikuyu-vocabularies",
    "hobley-akamba-ethnology-1910",
    "lindblom-akamba-1920",
    "bantu-beliefs",
    "clem-jenks-sande-theory-description-2019",
    "jones-freyer-kikamba-tone-2019",
    "payne-pacchiarotti-bosire-diversity-2016"
  ]
};

export const KAMBA_UNITS: CourseUnit[] = [
  {
    "id": "kamba-unit-1",
    "unitNumber": 1,
    "title": "Foundations, Greetings & Numbers",
    "description": "Learn foundational greetings, courtesies, and the cardinal counting system of Kĩkamba.",
    "icon": "Hash",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-greetings",
        "title": "Greetings & Politeness",
        "icon": "Handshake",
        "description": "Master core greetings, polite inquiries, and daily salutations.",
        "tips": "In Kĩkamba, a common casual greeting is 'Wĩmweo?' ('Are you well?'), to which one answers 'Nĩ nzeo' ('It is good/well') or 'Nĩmaseo'. When meeting someone for the first time, you can ask 'Ũvoo waku?' ('What is your news?'). To say goodbye, 'Tũtũtwonie' ('We shall see each other') or 'Thi na mũuo' ('Go in peace') is used.",
        "culturalNote": "Akamba greetings carry deep interpersonal warmth. Inquiring about children, livestock, and rains is traditional before turning to business or personal matters.",
        "words": [
          {
            "target": "Wĩmweo",
            "source": "Hello / Are you well?",
            "pronunciation": "wimweo",
            "hint": "Universal greeting"
          },
          {
            "target": "Nĩ nzeo",
            "source": "It is good / Fine",
            "pronunciation": "ni nzeo",
            "hint": "Polite affirmative reply"
          },
          {
            "target": "Ũvoo waku?",
            "source": "How is your news?",
            "pronunciation": "u-voo wa-ku",
            "hint": "Greeting inquiry"
          },
          {
            "target": "Nĩmaseo",
            "source": "I am good / well",
            "pronunciation": "ni-ma-seo",
            "hint": "Response: \"I am fine\""
          },
          {
            "target": "Ũvoo wa kĩoko",
            "source": "Good morning",
            "pronunciation": "u-voo wa kio-ko",
            "hint": "Morning greeting"
          },
          {
            "target": "Ũvoo wa wĩoo",
            "source": "Good evening",
            "pronunciation": "u-voo wa wioo",
            "hint": "Evening greeting"
          },
          {
            "target": "Wĩ mũseo?",
            "source": "Are you fine?",
            "pronunciation": "wi mu-seo",
            "hint": "Common polite check"
          },
          {
            "target": "Ũka haha",
            "source": "Come here",
            "pronunciation": "uka ha-ha",
            "hint": "Welcoming command"
          },
          {
            "target": "Ete maanzi",
            "source": "Bring water",
            "pronunciation": "ete maanzi",
            "hint": "Hospitality request"
          },
          {
            "target": "Ete lĩu",
            "source": "Bring food",
            "pronunciation": "ete liu",
            "hint": "Hospitality request"
          },
          {
            "target": "Ĩĩ",
            "source": "Yes",
            "pronunciation": "ii",
            "hint": "Affirmative response"
          },
          {
            "target": "Aiee",
            "source": "No",
            "pronunciation": "aiee",
            "hint": "Negative response"
          }
        ],
        "sentences": [
          {
            "target": "Wĩ mũseo, mũrata wakwa?",
            "source": "Are you well, my friend?"
          },
          {
            "target": "Nĩ nzeo mũno, ũvoo waku?",
            "source": "Very good, how is your news?"
          },
          {
            "target": "Ũka haha tũnye maanzi.",
            "source": "Come here so we drink water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Come here\" in Kĩkamba?",
            "correctAnswer": "Ũka haha",
            "options": [
              "Ete maanzi",
              "Ete lĩu",
              "Ũka haha",
              "Wĩmweo"
            ],
            "hint": "A welcoming direction"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the standard response to \"Ũvoo waku?\" (How is your news)?",
            "correctAnswer": "Nĩ nzeo",
            "options": [
              "Nĩ nzeo",
              "Aiee",
              "Ũka haha",
              "Wĩmweo"
            ],
            "hint": "Means \"it is good / fine\""
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba greeting phrases with their meanings:",
            "correctAnswer": "Wĩmweo: Hello, Nĩ nzeo: Fine, Ete maanzi: Bring water, Ete lĩu: Bring food",
            "pairs": [
              {
                "left": "Wĩmweo",
                "right": "Hello"
              },
              {
                "left": "Nĩ nzeo",
                "right": "Fine"
              },
              {
                "left": "Ete maanzi",
                "right": "Bring water"
              },
              {
                "left": "Ete lĩu",
                "right": "Bring food"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"Nĩ _____ mũno.\" (Very good.)",
            "correctAnswer": "nzeo",
            "options": [
              "aiee",
              "kĩoko",
              "wĩoo",
              "nzeo"
            ],
            "hint": "Kamba word for good / fine"
          }
        ]
      },
      {
        "id": "kamba-numbers",
        "title": "Numbers & Counting",
        "icon": "Hash",
        "description": "Master cardinal numbers from one to a hundred in Kĩkamba.",
        "tips": "Kĩkamba uses a Bantu decimal numeral system: 1 is Ĩmwe, 2 is Ilĩ, 3 is Itatũ, 4 is Inya, and 5 is Itano. 10 is Ĩkũmi, 20 is Mĩrongo ĩlĩ ('two tens'), and 100 is Ĩana (from Hinde 1904).",
        "culturalNote": "In traditional Akamba pastoral and farming life, counting cattle, beehives, or crops in the open was done discreetly to safeguard against vanity and malevolent eyes.",
        "words": [
          {
            "target": "Ĩmwe",
            "source": "One",
            "pronunciation": "imwe",
            "hint": "Numeral 1"
          },
          {
            "target": "Ilĩ",
            "source": "Two",
            "pronunciation": "ili",
            "hint": "Numeral 2"
          },
          {
            "target": "Itatũ",
            "source": "Three",
            "pronunciation": "i-ta-tu",
            "hint": "Numeral 3"
          },
          {
            "target": "Inya",
            "source": "Four",
            "pronunciation": "inya",
            "hint": "Numeral 4"
          },
          {
            "target": "Itano",
            "source": "Five",
            "pronunciation": "i-ta-no",
            "hint": "Numeral 5"
          },
          {
            "target": "Thanthatũ",
            "source": "Six",
            "pronunciation": "thantha-tu",
            "hint": "Numeral 6 (also Thandatũ)"
          },
          {
            "target": "Mũonza",
            "source": "Seven",
            "pronunciation": "muonza",
            "hint": "Numeral 7"
          },
          {
            "target": "Nyanya",
            "source": "Eight",
            "pronunciation": "nyanya",
            "hint": "Numeral 8"
          },
          {
            "target": "Kenda",
            "source": "Nine",
            "pronunciation": "kenda",
            "hint": "Numeral 9"
          },
          {
            "target": "Ĩkũmi",
            "source": "Ten",
            "pronunciation": "i-ku-mi",
            "hint": "Numeral 10"
          },
          {
            "target": "Mĩrongo ĩlĩ",
            "source": "Twenty",
            "pronunciation": "mi-rongo ili",
            "hint": "Lit. \"two tens\""
          },
          {
            "target": "Ĩana",
            "source": "Hundred",
            "pronunciation": "ia-na",
            "hint": "Numeral 100"
          }
        ],
        "sentences": [
          {
            "target": "Syana ilĩ nĩsyasoma.",
            "source": "Two children are reading."
          },
          {
            "target": "Ng'ombe itano nĩsyaithwa.",
            "source": "Five cows are grazed."
          },
          {
            "target": "Ĩana ya andũ nĩyokĩte.",
            "source": "A hundred people have come."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the numeral \"Three\" in Kĩkamba?",
            "correctAnswer": "Itatũ",
            "options": [
              "Itatũ",
              "Ĩmwe",
              "Ilĩ",
              "Itano"
            ],
            "hint": "Starts with \"It…\" (5 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Twenty\" in Kĩkamba?",
            "correctAnswer": "Mĩrongo ĩlĩ",
            "options": [
              "Ĩkũmi",
              "Ĩana",
              "Mĩrongo ĩlĩ",
              "Thanthatũ"
            ],
            "hint": "Literally means \"two tens\""
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba numbers with their values:",
            "correctAnswer": "Ĩmwe: One, Ilĩ: Two, Itano: Five, Ĩkũmi: Ten",
            "pairs": [
              {
                "left": "Ĩmwe",
                "right": "One"
              },
              {
                "left": "Ilĩ",
                "right": "Two"
              },
              {
                "left": "Itano",
                "right": "Five"
              },
              {
                "left": "Ĩkũmi",
                "right": "Ten"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-2",
    "unitNumber": 2,
    "title": "Family, Kinship & Society",
    "description": "Learn terms for immediate family, revered elders, and social community roles.",
    "icon": "Users",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-family",
        "title": "Family & Kinship",
        "icon": "Crown",
        "description": "Vocabulary for family members, lineage, and relatives.",
        "tips": "In Kĩkamba, human nouns belong to Noun Class 1 (singular prefix 'mũ-') and Class 2 (plural prefix 'a-'): 'Mũndũ' (person) -> 'Andũ' (people); 'Mũka' (woman/wife) -> 'Aka' (women/wives); 'Mũndũũme' (man/husband) -> 'Aũme' (men). Respectful address for parents is 'Ĩthe' (father) and 'Mwaitũ' (mother).",
        "culturalNote": "The clan (mbai) is the foundation of Akamba social identity. Grandparents ('Umau' and 'Usua') transmit tribal lore, clan genealogies, and riddle traditions around the evening hearth.",
        "words": [
          {
            "target": "Mwana",
            "source": "Child",
            "pronunciation": "mwa-na",
            "hint": "Plural: Syana (children)"
          },
          {
            "target": "Syana",
            "source": "Children",
            "pronunciation": "sya-na",
            "hint": "Plural of mwana"
          },
          {
            "target": "Mũndũũme",
            "source": "Man / Husband",
            "pronunciation": "munduu-me",
            "hint": "Plural: Aũme"
          },
          {
            "target": "Mũka",
            "source": "Woman / Wife",
            "pronunciation": "mu-ka",
            "hint": "Plural: Aka (women/wives)"
          },
          {
            "target": "Aka",
            "source": "Women / Wives",
            "pronunciation": "aka",
            "hint": "Plural of muka"
          },
          {
            "target": "Ĩthe",
            "source": "Father",
            "pronunciation": "ithe",
            "hint": "Paternal parent; also Asa"
          },
          {
            "target": "Mwaitũ",
            "source": "Mother",
            "pronunciation": "mwai-tu",
            "hint": "Maternal parent; lit. our mother"
          },
          {
            "target": "Mũtumĩa",
            "source": "Elder / Respected person",
            "pronunciation": "mu-tu-mia",
            "hint": "Plural: Atumĩa"
          },
          {
            "target": "Mũrata",
            "source": "Friend",
            "pronunciation": "mu-ra-ta",
            "hint": "Plural: Arata"
          },
          {
            "target": "Umau",
            "source": "Grandfather",
            "pronunciation": "u-mau",
            "hint": "Paternal or maternal grandfather"
          },
          {
            "target": "Usua",
            "source": "Grandmother",
            "pronunciation": "u-sua",
            "hint": "Paternal or maternal grandmother"
          }
        ],
        "sentences": [
          {
            "target": "Mwaitũ nĩũkĩte mũsyĩ.",
            "source": "Mother has arrived home."
          },
          {
            "target": "Syana syĩ na ĩthe.",
            "source": "The children are with father."
          },
          {
            "target": "Mũrata wakwa e vaa.",
            "source": "My friend is here."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mwaitũ\" mean in Kĩkamba?",
            "correctAnswer": "Mother",
            "options": [
              "Father",
              "Mother",
              "Child",
              "Friend"
            ],
            "hint": "Maternal term of reverence"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Children\" (plural) in Kĩkamba?",
            "correctAnswer": "Syana",
            "options": [
              "Mwana",
              "Aka",
              "Arata",
              "Syana"
            ],
            "hint": "Plural of Mwana"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba family terms:",
            "correctAnswer": "Ĩthe: Father, Mwaitũ: Mother, Mwana: Child, Mũrata: Friend",
            "pairs": [
              {
                "left": "Ĩthe",
                "right": "Father"
              },
              {
                "left": "Mwaitũ",
                "right": "Mother"
              },
              {
                "left": "Mwana",
                "right": "Child"
              },
              {
                "left": "Mũrata",
                "right": "Friend"
              }
            ]
          }
        ]
      },
      {
        "id": "kamba-people-roles",
        "title": "Community & Leaders",
        "icon": "Users",
        "description": "Terms for social age-grades, community roles, and traditional vocations.",
        "tips": "The Akamba governance system relies on councils of elders ('Kiama'). Respected elders ('Atumĩa ma kiama') deliberate community disputes under sacred trees, while skilled traders ('Athooya') historically organized long-distance trade caravans to the coast.",
        "culturalNote": "Pre-colonial Akamba caravan leaders were famous across East Africa for opening trade routes connecting Mount Kenya, Ukambani, and Mombasa.",
        "words": [
          {
            "target": "Mũndũ",
            "source": "Person",
            "pronunciation": "mundu",
            "hint": "Plural: Andũ (people)"
          },
          {
            "target": "Andũ",
            "source": "People",
            "pronunciation": "andu",
            "hint": "Plural of mundu"
          },
          {
            "target": "Akamba",
            "source": "Kamba people",
            "pronunciation": "a-kamba",
            "hint": "Plural ethnonym"
          },
          {
            "target": "Kĩkamba",
            "source": "Kamba language",
            "pronunciation": "ki-kamba",
            "hint": "Prefix kĩ- denotes language/manner"
          },
          {
            "target": "Mũsiani",
            "source": "Youth / Boy",
            "pronunciation": "mu-sia-ni",
            "hint": "Young unmarried male"
          },
          {
            "target": "Mwĩtũ",
            "source": "Girl / Young woman",
            "pronunciation": "mwi-tu",
            "hint": "Young unmarried female"
          },
          {
            "target": "Mũndũ mũgo",
            "source": "Traditional healer / Seer",
            "pronunciation": "mundu mu-go",
            "hint": "Spiritual practitioner and herbalist"
          },
          {
            "target": "Mũthooa",
            "source": "Trader",
            "pronunciation": "muthooa",
            "hint": "Merchant or caravan leader"
          }
        ],
        "sentences": [
          {
            "target": "Andũ ma mũsyĩ nĩaseo.",
            "source": "The people of the homestead are good."
          },
          {
            "target": "Athee ma kiama nĩmakomaanite.",
            "source": "The elders of the council have assembled."
          },
          {
            "target": "Mwĩtũ nĩũkũtaha maanzi.",
            "source": "The girl is fetching water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mũndũ\" in Kamba?",
            "correctAnswer": "Person",
            "options": [
              "People",
              "Kamba people",
              "Person",
              "Kamba language"
            ],
            "hint": "Plural: Andũ (people)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Andũ\" in Kamba?",
            "correctAnswer": "People",
            "options": [
              "Kamba people",
              "People",
              "Kamba language",
              "Person"
            ],
            "hint": "Plural of mundu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Akamba\" in Kamba?",
            "correctAnswer": "Kamba people",
            "options": [
              "Kamba language",
              "Kamba people",
              "Person",
              "People"
            ],
            "hint": "Plural ethnonym"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Kamba people\" in Kamba?",
            "correctAnswer": "Akamba",
            "options": [
              "Mũndũ",
              "Akamba",
              "Andũ",
              "Kĩkamba"
            ],
            "hint": "ah-kahm-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Kamba language\" in Kamba?",
            "correctAnswer": "Kĩkamba",
            "options": [
              "Kĩkamba",
              "Mũndũ",
              "Andũ",
              "Akamba"
            ],
            "hint": "kee-kahm-bah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kamba expression with its English meaning:",
            "correctAnswer": "Mũndũ: Person",
            "pairs": [
              {
                "left": "Mũndũ",
                "right": "Person"
              },
              {
                "left": "Andũ",
                "right": "People"
              },
              {
                "left": "Akamba",
                "right": "Kamba people"
              },
              {
                "left": "Kĩkamba",
                "right": "Kamba language"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kamba term for \"Youth / Boy\": ___",
            "correctAnswer": "Mũsiani",
            "options": [
              "Mũndũ",
              "Mũsiani",
              "Andũ",
              "Akamba"
            ],
            "hint": "Young unmarried male"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-3",
    "unitNumber": 3,
    "title": "Homestead, Nature & Pastoral Life",
    "description": "Explore the traditional homestead, geographic surroundings, and livestock herding.",
    "icon": "Tractor",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-homestead-nature",
        "title": "Homestead & Environment",
        "icon": "Coffee",
        "description": "Words for dwelling spaces, hills, trees, and water sources.",
        "tips": "In Kĩkamba, 'Mũsyĩ' refers to the family compound or village. 'Nyũmba' is the physical living house. Ukambani topography features dramatic rocky hills ('Kiima', pl. 'Iima') and seasonal sand rivers ('Rũũĩ / Ũwĩ').",
        "culturalNote": "Homesteads were often sited on elevated slopes for drainage, breezes, and strategic observation over the plains.",
        "words": [
          {
            "target": "Mũsyĩ",
            "source": "Homestead / Village",
            "pronunciation": "musyi",
            "hint": "Family compound or settlement"
          },
          {
            "target": "Nyũmba",
            "source": "House",
            "pronunciation": "nyumba",
            "hint": "Dwelling structure"
          },
          {
            "target": "Mũtĩ",
            "source": "Tree",
            "pronunciation": "mu-ti",
            "hint": "Plural: Mĩtĩ (trees)"
          },
          {
            "target": "Mĩtĩ",
            "source": "Trees",
            "pronunciation": "mi-ti",
            "hint": "Plural of muti"
          },
          {
            "target": "Kĩĩma",
            "source": "Hill / Mountain",
            "pronunciation": "kii-ma",
            "hint": "Plural: Iima (hills)"
          },
          {
            "target": "Maaĩ",
            "source": "Water",
            "pronunciation": "maai",
            "hint": "Essential life liquid (also Maanzi)"
          },
          {
            "target": "Ũta",
            "source": "Bow",
            "pronunciation": "uta",
            "hint": "Traditional hunting & defence weapon"
          },
          {
            "target": "Mavai",
            "source": "Arrows",
            "pronunciation": "ma-vai",
            "hint": "Quiver arrows (sing. Ũvai)"
          },
          {
            "target": "Kĩtheka",
            "source": "Bush / Wilderness",
            "pronunciation": "kithe-ka",
            "hint": "Savannah woodland or wild bush"
          },
          {
            "target": "Kĩsima",
            "source": "Well / Water spring",
            "pronunciation": "ki-si-ma",
            "hint": "Source for drinking water"
          }
        ],
        "sentences": [
          {
            "target": "Mũsyĩ witũ wĩ kĩĩmanĩ.",
            "source": "Our homestead is on the hill."
          },
          {
            "target": "Ete maanzi kuma kĩsimanĩ.",
            "source": "Bring water from the well."
          },
          {
            "target": "Mĩtĩ ĩno nĩ mũseo.",
            "source": "These trees are good."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mũsyĩ\" mean in Kĩkamba?",
            "correctAnswer": "Homestead",
            "options": [
              "Bow and arrow",
              "Wild bush",
              "Water well",
              "Homestead"
            ],
            "hint": "The family compound",
            "acceptedAnswers": [
              "Homestead / Village",
              "Homestead"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "Which word means \"Water\" in Kĩkamba?",
            "correctAnswer": "Maaĩ",
            "options": [
              "Maaĩ",
              "Mũtĩ",
              "Kĩĩma",
              "Ũta"
            ],
            "hint": "Starts with \"Ma…\" (4 letters)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match homestead and landscape terms:",
            "correctAnswer": "Mũsyĩ: Homestead, Nyũmba: House, Kĩĩma: Hill, Ũta: Bow",
            "pairs": [
              {
                "left": "Mũsyĩ",
                "right": "Homestead"
              },
              {
                "left": "Nyũmba",
                "right": "House"
              },
              {
                "left": "Kĩĩma",
                "right": "Hill"
              },
              {
                "left": "Ũta",
                "right": "Bow"
              }
            ]
          }
        ]
      },
      {
        "id": "kamba-animals-livestock",
        "title": "Livestock & Animals",
        "icon": "Tractor",
        "description": "Cattle, goats, chickens, and wildlife of the Ukambani plains.",
        "tips": "Livestock ('Mũitho') is a traditional store of wealth. In Kamba, 'Ng'ombe' is cattle/cow, 'Mbũi' is goat, and 'Nthenge' is the mature male he-goat used in community reconciliations.",
        "culturalNote": "Goats ('Mbũi') played a central role in pre-colonial dispute resolution and bride wealth agreements, carefully overseen by village councils.",
        "words": [
          {
            "target": "Ng'ombe",
            "source": "Cow / Cattle",
            "pronunciation": "ng'ombe",
            "hint": "Primary herd animal"
          },
          {
            "target": "Nthenge",
            "source": "He-goat / Billy-goat",
            "pronunciation": "nthenge",
            "hint": "Mature male goat"
          },
          {
            "target": "Mbũi",
            "source": "She-goat",
            "pronunciation": "mbui",
            "hint": "Caprine herd animal"
          },
          {
            "target": "Ĩvwi",
            "source": "Bull",
            "pronunciation": "ivwi",
            "hint": "Breeding male bovine"
          },
          {
            "target": "Mwana wa ng'ombe",
            "source": "Calf",
            "pronunciation": "mwa-na wa ng'ombe",
            "hint": "Young bovine"
          },
          {
            "target": "Ngũkũ",
            "source": "Chicken / Fowl",
            "pronunciation": "ngu-ku",
            "hint": "Domestic poultry"
          },
          {
            "target": "Kĩtui",
            "source": "Hyena",
            "pronunciation": "ki-tui",
            "hint": "Wild nocturnal predator"
          },
          {
            "target": "Munambo",
            "source": "Lion",
            "pronunciation": "mu-nambo",
            "hint": "Apex savanna carnivore"
          },
          {
            "target": "Mbĩva",
            "source": "Bird",
            "pronunciation": "mbi-va",
            "hint": "Winged creature"
          },
          {
            "target": "Mũnoo",
            "source": "Fish",
            "pronunciation": "mu-noo",
            "hint": "Freshwater catch"
          }
        ],
        "sentences": [
          {
            "target": "Ng'ombe syĩ nza ya mũsyĩ.",
            "source": "The cows are outside the homestead."
          },
          {
            "target": "Mbũi nĩsyĩĩthwa kĩthekanĩ.",
            "source": "The goats are grazed in the bush."
          },
          {
            "target": "Munambo e kĩthekanĩ kitheu.",
            "source": "The lion is in the open bush."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ng'ombe\" in Kamba?",
            "correctAnswer": "Cow",
            "options": [
              "He-goat",
              "Cow",
              "She-goat",
              "Bull"
            ],
            "hint": "Primary herd animal",
            "acceptedAnswers": [
              "Cow / Cattle",
              "Cow"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Nthenge\" in Kamba?",
            "correctAnswer": "He-goat",
            "options": [
              "She-goat",
              "He-goat",
              "Bull",
              "Cow"
            ],
            "hint": "Mature male goat",
            "acceptedAnswers": [
              "He-goat / Billy-goat",
              "He-goat"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mbũi\" in Kamba?",
            "correctAnswer": "She-goat",
            "options": [
              "Bull",
              "Cow",
              "He-goat",
              "She-goat"
            ],
            "hint": "Caprine herd animal"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"She-goat\" in Kamba?",
            "correctAnswer": "Mbũi",
            "options": [
              "Ng'ombe",
              "Nthenge",
              "Ĩvwi",
              "Mbũi"
            ],
            "hint": "m-boo-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bull\" in Kamba?",
            "correctAnswer": "Ĩvwi",
            "options": [
              "Ng'ombe",
              "Nthenge",
              "Mbũi",
              "Ĩvwi"
            ],
            "hint": "ee-vwee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kamba expression with its English meaning:",
            "correctAnswer": "Ng'ombe: Cow / Cattle",
            "pairs": [
              {
                "left": "Ng'ombe",
                "right": "Cow / Cattle"
              },
              {
                "left": "Nthenge",
                "right": "He-goat / Billy-goat"
              },
              {
                "left": "Mbũi",
                "right": "She-goat"
              },
              {
                "left": "Ĩvwi",
                "right": "Bull"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kamba term for \"Calf\": ___",
            "correctAnswer": "Mwana wa ng'ombe",
            "options": [
              "Ng'ombe",
              "Nthenge",
              "Mbũi",
              "Mwana wa ng'ombe"
            ],
            "hint": "Young bovine"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-4",
    "unitNumber": 4,
    "title": "Action Verbs & Daily Sentences",
    "description": "Master core verbal conjugations, infinitives, and conversational inquiry structures.",
    "icon": "Zap",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-verbs",
        "title": "Essential Action Verbs",
        "icon": "Zap",
        "description": "Key action verbs and infinitives derived from Hinde (1904).",
        "tips": "In Kĩkamba, the infinitive prefix is 'Kũ-' or 'Gũ-': 'Kũthi' (to go), 'Kũka' (to come), 'Kũya' (to eat), 'Kũnywa' (to drink), 'Kwona' (to see), and 'Kwenda' (to want/love). When forming first person present tense, 'Nĩngwenda' means 'I want'.",
        "culturalNote": "Working collaboratively in the fields was organized under the 'Mwethya' system—communal labor where neighbors united to plow, weed, and harvest together.",
        "words": [
          {
            "target": "Kũthi",
            "source": "To go / Walk",
            "pronunciation": "kuthi",
            "hint": "Movement away"
          },
          {
            "target": "Kũka",
            "source": "To come / Arrive",
            "pronunciation": "ku-ka",
            "hint": "Movement toward"
          },
          {
            "target": "Kũya",
            "source": "To eat",
            "pronunciation": "ku-ya",
            "hint": "Consuming food"
          },
          {
            "target": "Kũnywa",
            "source": "To drink",
            "pronunciation": "kunywa",
            "hint": "Consuming liquid"
          },
          {
            "target": "Kwona",
            "source": "To see",
            "pronunciation": "kwo-na",
            "hint": "Visual perception"
          },
          {
            "target": "Kwenda",
            "source": "To want / Love",
            "pronunciation": "kwenda",
            "hint": "Desire or affection"
          },
          {
            "target": "Kũthũkũma",
            "source": "To work / Labor",
            "pronunciation": "kuthu-ku-ma",
            "hint": "Performing labor"
          },
          {
            "target": "Kũmanya",
            "source": "To know / Understand",
            "pronunciation": "ku-manya",
            "hint": "Knowledge"
          },
          {
            "target": "Kũvoya",
            "source": "To pray / Request",
            "pronunciation": "ku-vo-ya",
            "hint": "Supplication or prayer"
          },
          {
            "target": "Kũthooa",
            "source": "To trade / Sell",
            "pronunciation": "kuthooa",
            "hint": "Commerce"
          }
        ],
        "sentences": [
          {
            "target": "Nĩngwenda kũthi mũsyĩ.",
            "source": "I want to go home."
          },
          {
            "target": "Nĩtũkũya lĩu mũseo.",
            "source": "We are eating good food."
          },
          {
            "target": "Nĩmanya ũvoo wa w'o.",
            "source": "I know the true story."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To eat\" in Kĩkamba?",
            "correctAnswer": "Kũya",
            "options": [
              "Kũnywa",
              "Kũthi",
              "Kũka",
              "Kũya"
            ],
            "hint": "Infinitive for consuming nourishment"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũthũkũma\" mean?",
            "correctAnswer": "To work",
            "options": [
              "To pray",
              "To drink",
              "To work",
              "To see"
            ],
            "hint": "Productive activity",
            "acceptedAnswers": [
              "To work / Labor",
              "To work"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba verbs:",
            "correctAnswer": "Kũthi: To go, Kũka: To come, Kũnywa: To drink, Kwona: To see",
            "pairs": [
              {
                "left": "Kũthi",
                "right": "To go"
              },
              {
                "left": "Kũka",
                "right": "To come"
              },
              {
                "left": "Kũnywa",
                "right": "To drink"
              },
              {
                "left": "Kwona",
                "right": "To see"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"Nĩngwenda _____ mũsyĩ.\" (I want to go home.)",
            "correctAnswer": "kũthi",
            "options": [
              "kũthi",
              "kũya",
              "kũnywa",
              "kũmanya"
            ],
            "hint": "Infinitive for to go"
          }
        ]
      },
      {
        "id": "kamba-daily-questions",
        "title": "Inquiries & Conversations",
        "icon": "MessageCircle",
        "description": "Question words and practical dialogue phrases recorded in Hinde (1904).",
        "tips": "Question words in Kamba often append to the verb: 'Wĩta wata?' ('What is your name?'), 'Ũthi naku?' ('Where are you going?'), 'Wĩndakĩ?' ('What do you want?'). 'Nĩ w'o' means 'It is true'.",
        "culturalNote": "When speaking with village elders, questions are voiced gently with deferential prefixes to maintain harmony and respect.",
        "words": [
          {
            "target": "Wĩta wata?",
            "source": "What is your name?",
            "pronunciation": "wi-ta wa-ta",
            "hint": "Name inquiry"
          },
          {
            "target": "Ũthi naku?",
            "source": "Where are you going?",
            "pronunciation": "uthi na-ku",
            "hint": "Destination inquiry"
          },
          {
            "target": "Wĩndakĩ?",
            "source": "What do you want?",
            "pronunciation": "winda-ki",
            "hint": "Desire inquiry"
          },
          {
            "target": "Ũumite va?",
            "source": "Where have you come from?",
            "pronunciation": "uu-mi-te va",
            "hint": "Origin inquiry"
          },
          {
            "target": "Wĩka ata?",
            "source": "What are you doing?",
            "pronunciation": "wi-ka ata",
            "hint": "Action inquiry"
          },
          {
            "target": "Nĩ ndĩa?",
            "source": "When?",
            "pronunciation": "ni ndia",
            "hint": "Time question"
          },
          {
            "target": "Nata?",
            "source": "How?",
            "pronunciation": "na-ta",
            "hint": "Manner question"
          },
          {
            "target": "Nũũ?",
            "source": "Who?",
            "pronunciation": "nuu",
            "hint": "Person question"
          },
          {
            "target": "Nĩ kĩ?",
            "source": "Why? / What for?",
            "pronunciation": "ni ki",
            "hint": "Reason question"
          }
        ],
        "sentences": [
          {
            "target": "Wĩta wata, mũndũ mũkaani?",
            "source": "What is your name, my friend?"
          },
          {
            "target": "Ũthi naku ũmũnthĩ?",
            "source": "Where are you going today?"
          },
          {
            "target": "Nĩngwenda kũmanya wĩo.",
            "source": "I want to know the truth."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Wĩta wata?\" in Kamba?",
            "correctAnswer": "What is your name?",
            "options": [
              "Where are you going?",
              "What do you want?",
              "Where have you come from?",
              "What is your name?"
            ],
            "hint": "Name inquiry"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ũthi naku?\" in Kamba?",
            "correctAnswer": "Where are you going?",
            "options": [
              "What do you want?",
              "Where are you going?",
              "Where have you come from?",
              "What is your name?"
            ],
            "hint": "Destination inquiry"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Wĩndakĩ?\" in Kamba?",
            "correctAnswer": "What do you want?",
            "options": [
              "What do you want?",
              "Where have you come from?",
              "What is your name?",
              "Where are you going?"
            ],
            "hint": "Desire inquiry"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"What do you want?\" in Kamba?",
            "correctAnswer": "Wĩndakĩ?",
            "options": [
              "Wĩndakĩ?",
              "Wĩta wata?",
              "Ũthi naku?",
              "Ũumite va?"
            ],
            "hint": "ween-dah-kee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where have you come from?\" in Kamba?",
            "correctAnswer": "Ũumite va?",
            "options": [
              "Wĩta wata?",
              "Ũthi naku?",
              "Ũumite va?",
              "Wĩndakĩ?"
            ],
            "hint": "oo-oo-mee-teh vah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kamba expression with its English meaning:",
            "correctAnswer": "Wĩta wata?: What is your name?",
            "pairs": [
              {
                "left": "Wĩta wata?",
                "right": "What is your name?"
              },
              {
                "left": "Ũthi naku?",
                "right": "Where are you going?"
              },
              {
                "left": "Wĩndakĩ?",
                "right": "What do you want?"
              },
              {
                "left": "Ũumite va?",
                "right": "Where have you come from?"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kamba term for \"What are you doing?\": ___",
            "correctAnswer": "Wĩka ata?",
            "options": [
              "Wĩta wata?",
              "Ũthi naku?",
              "Wĩndakĩ?",
              "Wĩka ata?"
            ],
            "hint": "Action inquiry"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-5",
    "unitNumber": 5,
    "title": "Cultural Wisdom, Shrines & Sacred Ecology",
    "description": "Explore the ancestral worldview, sacred Ithembo sanctuaries, and traditional restorative justice.",
    "icon": "Award",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-culture-sacred",
        "title": "Sacred Shrines & Oaths",
        "icon": "Handshake",
        "description": "Explore concepts of God, ancestral shrines, and peace covenants from Hobley (1922).",
        "tips": "In Akamba cosmology, God is known as 'Ngai' or 'Mũlũngũ'. Sacrificial sanctuaries under sacred trees are called 'Ithembo' (pl. 'Mathembo'). Solemn dispute resolutions were sealed with the inviolable 'Kĩthĩto' stone oath, invoking spiritual balance rather than punitive revenge.",
        "culturalNote": "The Ithembo sacred grove served as an environmental sanctuary where felling trees or harming wildlife was strictly forbidden ('Kũthata'), preserving essential biodiversity and water catchments across the hills.",
        "words": [
          {
            "target": "Mũlũngũ",
            "source": "God / Supreme Creator",
            "pronunciation": "mu-lungu",
            "hint": "Also known as Ngai"
          },
          {
            "target": "Ithembo",
            "source": "Sacred tree shrine / Sanctuary",
            "pronunciation": "ithembo",
            "hint": "Plural: Mathembo"
          },
          {
            "target": "Aimũ",
            "source": "Ancestral spirits",
            "pronunciation": "ai-mu",
            "hint": "Revered departed ancestors"
          },
          {
            "target": "Kĩthĩto",
            "source": "Sacred oath stone / Covenant",
            "pronunciation": "kithi-to",
            "hint": "Solemn traditional truth oath"
          },
          {
            "target": "Ũvoo wa w'o",
            "source": "Truth / Integrity",
            "pronunciation": "u-voo wa w'o",
            "hint": "Moral honesty"
          },
          {
            "target": "Kũvoya mbya",
            "source": "Prayer for rain",
            "pronunciation": "ku-vo-ya mbya",
            "hint": "Ceremonial supplication during drought"
          },
          {
            "target": "Kũthata",
            "source": "Sacred taboo / Prohibition",
            "pronunciation": "kutha-ta",
            "hint": "Spiritual conservation restriction"
          }
        ],
        "sentences": [
          {
            "target": "Athee nĩmavoya Ithembonĩ.",
            "source": "The elders pray at the sacred shrine."
          },
          {
            "target": "Mũlũngũ nĩwe ũnengana mbua.",
            "source": "God is the one who gives rain."
          },
          {
            "target": "Kĩthĩto kĩtĩvĩtw'e nĩ mũndũ wa ma.",
            "source": "The sacred oath is not broken by a person of truth."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is an \"Ithembo\" in Akamba spiritual ecology?",
            "correctAnswer": "Sacred tree shrine",
            "options": [
              "Trading market",
              "Hunting bow",
              "Iron forge",
              "Sacred tree shrine"
            ],
            "hint": "A protected grove dedicated to prayer and offerings",
            "acceptedAnswers": [
              "Sacred tree shrine / Sanctuary",
              "Sacred tree shrine"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "Which sacred covenant stone was sworn to seal truth in traditional disputes?",
            "correctAnswer": "Kĩthĩto",
            "options": [
              "Mavai",
              "Mũsyĩ",
              "Mũtĩ",
              "Kĩthĩto"
            ],
            "hint": "Solemn oath object documented by Hobley (1922)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the sacred ecological terms:",
            "correctAnswer": "Mũlũngũ: God, Ithembo: Sacred shrine, Aimũ: Ancestral spirits, Kĩthĩto: Oath stone",
            "pairs": [
              {
                "left": "Mũlũngũ",
                "right": "God"
              },
              {
                "left": "Ithembo",
                "right": "Sacred shrine"
              },
              {
                "left": "Aimũ",
                "right": "Ancestral spirits"
              },
              {
                "left": "Kĩthĩto",
                "right": "Oath stone"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-6",
    "unitNumber": 6,
    "title": "Greetings & Farewells",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Greetings & Farewells, built directly from Rev. Dr. J. L. Krapf (1850), Rev. J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), and Gerhard Lindblom (1920).",
    "icon": "BookOpen",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-exp-greetings",
        "title": "Greetings & Farewells",
        "icon": "Handshake",
        "description": "Master Kamba (Kĩkamba) greetings & farewells vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Greetings & Farewells, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ũvoo?' (How are you?), 'Nĩ mũseo' (I am fine), 'O voo' (Hello / Salutation), 'Wĩa?' (What's the news / What's up?).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Ũvoo?",
            "source": "How are you?",
            "pronunciation": "u-voo",
            "hint": "Standard greeting — literally 'News?'"
          },
          {
            "target": "Nĩ mũseo",
            "source": "I am fine",
            "pronunciation": "ni mu-seo",
            "hint": "Standard reply meaning 'I am well / good'"
          },
          {
            "target": "O voo",
            "source": "Hello / Salutation",
            "pronunciation": "o voo",
            "hint": "Traditional greeting recorded by Hinde (1904); Ulu: 'O voo', Reply: 'O voo nēza' / 'Nĩ mũseo'"
          },
          {
            "target": "Wĩa?",
            "source": "What's the news / What's up?",
            "pronunciation": "wia",
            "hint": "Casual colloquial greeting — 'What is the word?'"
          },
          {
            "target": "Wĩa mwau wa ũthukũ",
            "source": "Good morning",
            "pronunciation": "wia mwau wa uthu-ku",
            "hint": "Morning greeting"
          },
          {
            "target": "Nĩ vaa mũno",
            "source": "Thank you",
            "pronunciation": "ni vaa mu-no",
            "hint": "Expressing deep gratitude ('thank you very much')"
          },
          {
            "target": "Tũonane",
            "source": "Goodbye (we will meet)",
            "pronunciation": "tuo-na-ne",
            "hint": "Farewell — 'We will see each other again'"
          },
          {
            "target": "Wĩa mũseo",
            "source": "Welcome",
            "pronunciation": "wia mu-seo",
            "hint": "Welcoming a visitor or guest"
          },
          {
            "target": "Mũyo",
            "source": "Peace",
            "pronunciation": "mu-yo",
            "hint": "Traditional blessing of peace, contentment and happiness"
          },
          {
            "target": "Sova / Pole",
            "source": "Sorry",
            "pronunciation": "so-va / po-le",
            "hint": "Expression of empathy or comfort"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ũvoo?\" mean in English?",
            "correctAnswer": "How are you?",
            "options": [
              "I am fine",
              "Hello",
              "How are you?",
              "What's the news"
            ],
            "hint": "Standard greeting — literally 'News?'"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nĩ mũseo\" mean in English?",
            "correctAnswer": "I am fine",
            "options": [
              "Hello",
              "What's the news",
              "I am fine",
              "How are you?"
            ],
            "hint": "Standard reply meaning 'I am well / good'"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"O voo\" mean in English?",
            "correctAnswer": "Hello",
            "options": [
              "What's the news",
              "How are you?",
              "I am fine",
              "Hello"
            ],
            "hint": "Traditional greeting recorded by Hinde (1904); Ulu: 'O voo', Reply: 'O voo nēza' / 'Nĩ mũseo'",
            "acceptedAnswers": [
              "Hello / Salutation",
              "Hello"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hello / Salutation\" in Kamba?",
            "correctAnswer": "O voo",
            "options": [
              "Ũvoo?",
              "Nĩ mũseo",
              "O voo",
              "Wĩa?"
            ],
            "hint": "oh voh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"What's the news / What's up?\" in Kamba?",
            "correctAnswer": "Wĩa?",
            "options": [
              "Ũvoo?",
              "Nĩ mũseo",
              "O voo",
              "Wĩa?"
            ],
            "hint": "wee-ah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Good morning\" in Kamba?",
            "correctAnswer": "Wĩa mwau wa ũthukũ",
            "options": [
              "Nĩ mũseo",
              "Wĩa mwau wa ũthukũ",
              "O voo",
              "Nĩ vaa mũno"
            ],
            "hint": "wee-ah mwah-oo wah oo-thoo-koo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Ũvoo?: How are you?, Nĩ mũseo: I am fine, O voo: Hello / Salutation, Wĩa?: What's the news / What's up?",
            "pairs": [
              {
                "left": "Ũvoo?",
                "right": "How are you?"
              },
              {
                "left": "Nĩ mũseo",
                "right": "I am fine"
              },
              {
                "left": "O voo",
                "right": "Hello / Salutation"
              },
              {
                "left": "Wĩa?",
                "right": "What's the news / What's up?"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"How are you?\" in Kamba (Kĩkamba).",
            "correctAnswer": "Ũvoo?",
            "options": [
              "Nĩ mũseo",
              "O voo",
              "Wĩa?",
              "Ũvoo?"
            ],
            "hint": "oo-voh"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-7",
    "unitNumber": 7,
    "title": "Numbers",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Numbers, built directly from Rev. Dr. J. L. Krapf (1850), Rev. J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), and Gerhard Lindblom (1920).",
    "icon": "Compass",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-exp-numbers",
        "title": "Numbers",
        "icon": "BookOpen",
        "description": "Master Kamba (Kĩkamba) numbers vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Numbers, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ithano' (Five), 'Thanthantũ' (Six), 'Nyaanya' (Eight), 'Ĩkũmi na ĩmwe' (Eleven).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Ithano",
            "source": "Five",
            "pronunciation": "itha-no",
            "hint": "Ulu dialect: itanu; Nganyawa dialect: kitanu"
          },
          {
            "target": "Thanthantũ",
            "source": "Six",
            "pronunciation": "thanthantu",
            "hint": "Ulu dialect: thanthatu; Nganyawa dialect: thandatu"
          },
          {
            "target": "Nyaanya",
            "source": "Eight",
            "pronunciation": "nyaanya",
            "hint": "Ulu dialect: nyanya; Nganyawa dialect: nanya"
          },
          {
            "target": "Ĩkũmi na ĩmwe",
            "source": "Eleven",
            "pronunciation": "i-ku-mi na imwe",
            "hint": "Literally 'ten and one'"
          },
          {
            "target": "Mĩongo ĩlĩ",
            "source": "Twenty",
            "pronunciation": "miongo ili",
            "hint": "Hinde: miongoele ('two tens')"
          },
          {
            "target": "Mĩongo ĩtatũ",
            "source": "Thirty",
            "pronunciation": "miongo i-ta-tu",
            "hint": "Three tens"
          },
          {
            "target": "Mĩongo ĩnya",
            "source": "Forty",
            "pronunciation": "miongo inya",
            "hint": "Ulu: miongo enna; Nganyawa: miongo inya"
          },
          {
            "target": "Mĩongo ĩthano",
            "source": "Fifty",
            "pronunciation": "miongo itha-no",
            "hint": "Five tens (Ulu: miongo itanu; Nganyawa: miongo kitanu)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ithano\" mean in English?",
            "correctAnswer": "Five",
            "options": [
              "Six",
              "Eight",
              "Eleven",
              "Five"
            ],
            "hint": "Ulu dialect: itanu; Nganyawa dialect: kitanu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Thanthantũ\" mean in English?",
            "correctAnswer": "Six",
            "options": [
              "Eight",
              "Eleven",
              "Six",
              "Five"
            ],
            "hint": "Ulu dialect: thanthatu; Nganyawa dialect: thandatu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nyaanya\" mean in English?",
            "correctAnswer": "Eight",
            "options": [
              "Eleven",
              "Eight",
              "Five",
              "Six"
            ],
            "hint": "Ulu dialect: nyanya; Nganyawa dialect: nanya"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eight\" in Kamba?",
            "correctAnswer": "Nyaanya",
            "options": [
              "Ithano",
              "Thanthantũ",
              "Ĩkũmi na ĩmwe",
              "Nyaanya"
            ],
            "hint": "nyah-ah-nyah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eleven\" in Kamba?",
            "correctAnswer": "Ĩkũmi na ĩmwe",
            "options": [
              "Ithano",
              "Thanthantũ",
              "Ĩkũmi na ĩmwe",
              "Nyaanya"
            ],
            "hint": "ee-koo-mee nah ee-mweh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Twenty\" in Kamba?",
            "correctAnswer": "Mĩongo ĩlĩ",
            "options": [
              "Thanthantũ",
              "Nyaanya",
              "Ithano",
              "Mĩongo ĩlĩ"
            ],
            "hint": "mee-ohn-goh ee-lee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Ithano: Five, Thanthantũ: Six, Nyaanya: Eight, Ĩkũmi na ĩmwe: Eleven",
            "pairs": [
              {
                "left": "Ithano",
                "right": "Five"
              },
              {
                "left": "Thanthantũ",
                "right": "Six"
              },
              {
                "left": "Nyaanya",
                "right": "Eight"
              },
              {
                "left": "Ĩkũmi na ĩmwe",
                "right": "Eleven"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Five\" in Kamba (Kĩkamba).",
            "correctAnswer": "Ithano",
            "options": [
              "Ithano",
              "Thanthantũ",
              "Nyaanya",
              "Ĩkũmi na ĩmwe"
            ],
            "hint": "ee-thah-noh"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-8",
    "unitNumber": 8,
    "title": "Family & Relationships",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Family & Relationships, built directly from Rev. Dr. J. L. Krapf (1850), Rev. J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), and Gerhard Lindblom (1920).",
    "icon": "User",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-exp-family",
        "title": "Family & Relationships (Part 1)",
        "icon": "Users",
        "description": "Master Kamba (Kĩkamba) family & relationships vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Family & Relationships, pay special attention to pronunciation and morphological prefixes/suffixes: 'Asa / Tata' (Father), 'Mwaitũ / Ĩvaa' (Mother), 'Kaana' (Child), 'Kavĩsĩ' (Boy / Male youth).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Asa / Tata",
            "source": "Father",
            "pronunciation": "asa / ta-ta",
            "hint": "Dialects: Ulu uses 'Nau' or 'Asa'; Nganyawa uses 'Atsa' or 'Bata'"
          },
          {
            "target": "Mwaitũ / Ĩvaa",
            "source": "Mother",
            "pronunciation": "mwai-tu / i-vaa",
            "hint": "Hinde Ulu: 'Maiitu'; Nganyawa: 'Mwaitu'"
          },
          {
            "target": "Kaana",
            "source": "Child",
            "pronunciation": "kaa-na",
            "hint": "Plural: Twana (children)"
          },
          {
            "target": "Kavĩsĩ",
            "source": "Boy / Male youth",
            "pronunciation": "ka-vi-si",
            "hint": "Hinde Ulu: kabisi; Plural: Syavĩsĩ"
          },
          {
            "target": "Kelĩtu",
            "source": "Girl / Maiden",
            "pronunciation": "ke-li-tu",
            "hint": "Hinde Ulu: kēlletu; Nganyawa: kananga; Plural: Twelĩtu"
          },
          {
            "target": "Mũndũ mũme",
            "source": "Man / Male",
            "pronunciation": "mundu mu-me",
            "hint": "Plural: Andũ aume (Hinde: mundu mumiu / mume)"
          },
          {
            "target": "Mũndũ mũka",
            "source": "Woman / Female",
            "pronunciation": "mundu mu-ka",
            "hint": "Plural: Andũ aka (Hinde Ulu: mundu muka; Nganyawa: manamuka)"
          },
          {
            "target": "Mũtumia",
            "source": "Elder",
            "pronunciation": "mu-tu-mia",
            "hint": "Ulu: muku; Nganyawa: mtumia; Plural: Atumia"
          },
          {
            "target": "Umau / Guka",
            "source": "Grandfather",
            "pronunciation": "u-mau / gu-ka",
            "hint": "Ulu: umāā; Nganyawa: atza mnini"
          },
          {
            "target": "Mwaitũ mũkũũ / Ũsũũ",
            "source": "Grandmother",
            "pronunciation": "mwai-tu mu-kuu / u-suu",
            "hint": "Respectful elder mother; Hinde: inya"
          },
          {
            "target": "Mwananyanya",
            "source": "Brother",
            "pronunciation": "mwa-nanyanya",
            "hint": "Ulu: nindu; Nganyawa: mwinai"
          },
          {
            "target": "Mwĩtu wa mwaitũ",
            "source": "Sister",
            "pronunciation": "mwi-tu wa mwai-tu",
            "hint": "Literally 'daughter of our mother'; Hinde: mwtiaiya"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Asa / Tata\" mean in English?",
            "correctAnswer": "Father",
            "options": [
              "Mother",
              "Father",
              "Child",
              "Boy"
            ],
            "hint": "Dialects: Ulu uses 'Nau' or 'Asa'; Nganyawa uses 'Atsa' or 'Bata'"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mwaitũ / Ĩvaa\" mean in English?",
            "correctAnswer": "Mother",
            "options": [
              "Mother",
              "Child",
              "Boy",
              "Father"
            ],
            "hint": "Hinde Ulu: 'Maiitu'; Nganyawa: 'Mwaitu'"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kaana\" mean in English?",
            "correctAnswer": "Child",
            "options": [
              "Boy",
              "Father",
              "Mother",
              "Child"
            ],
            "hint": "Starts with \"Ch…\" (5 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Child\" in Kamba?",
            "correctAnswer": "Kaana",
            "options": [
              "Asa",
              "Kaana",
              "Mwaitũ",
              "Kavĩsĩ"
            ],
            "hint": "kah-ah-nah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Boy / Male youth\" in Kamba?",
            "correctAnswer": "Kavĩsĩ",
            "options": [
              "Asa",
              "Kavĩsĩ",
              "Mwaitũ",
              "Kaana"
            ],
            "hint": "kah-vee-see"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Girl / Maiden\" in Kamba?",
            "correctAnswer": "Kelĩtu",
            "options": [
              "Mwaitũ",
              "Kaana",
              "Kelĩtu",
              "Asa"
            ],
            "hint": "keh-lee-too"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Asa / Tata: Father, Mwaitũ / Ĩvaa: Mother, Kaana: Child, Kavĩsĩ: Boy / Male youth",
            "pairs": [
              {
                "left": "Asa / Tata",
                "right": "Father"
              },
              {
                "left": "Mwaitũ / Ĩvaa",
                "right": "Mother"
              },
              {
                "left": "Kaana",
                "right": "Child"
              },
              {
                "left": "Kavĩsĩ",
                "right": "Boy / Male youth"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Father\" in Kamba (Kĩkamba).",
            "correctAnswer": "Asa",
            "options": [
              "Mwaitũ",
              "Kaana",
              "Kavĩsĩ",
              "Asa"
            ],
            "hint": "ah-sah / tah-tah",
            "acceptedAnswers": [
              "Asa / Tata",
              "Asa"
            ]
          }
        ]
      },
      {
        "id": "kamba-exp-family-2",
        "title": "Family & Relationships (Part 2)",
        "icon": "User",
        "description": "Master Kamba (Kĩkamba) family & relationships vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Family & Relationships, pay special attention to pronunciation and morphological prefixes/suffixes: 'Mũnyanya' (Friend), 'Mũme' (Husband), 'Mũtanya' (Judge / Arbitrator), 'Mũtongoi' (Guide / Caravan leader).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Mũnyanya",
            "source": "Friend",
            "pronunciation": "munyanya",
            "hint": "Ulu: nendu; Nganyawa: mnyanya"
          },
          {
            "target": "Mũme",
            "source": "Husband",
            "pronunciation": "mu-me",
            "hint": "Hinde: mume akwa ('my husband')"
          },
          {
            "target": "Mũtongoi",
            "source": "Guide / Caravan leader",
            "pronunciation": "mu-tongoi",
            "hint": "Plural: Atongoi. Pathfinder or caravan leader recorded by J.T. Last (1885)"
          },
          {
            "target": "kabisi",
            "source": "Boy",
            "pronunciation": "ka-bi-si"
          },
          {
            "target": "mundu",
            "source": "Man",
            "pronunciation": "mundu"
          }
        ],
        "sentences": [
          {
            "target": "Mũnyanya — Mũme",
            "source": "Friend — Husband."
          },
          {
            "target": "Mũtongoi — kabisi",
            "source": "Guide — Boy."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mũnyanya\" mean in English?",
            "correctAnswer": "Friend",
            "options": [
              "Husband",
              "Guide",
              "Boy",
              "Friend"
            ],
            "hint": "Core vocabulary in Family & Relationships (Part 2)"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Husband\"",
            "correctAnswer": "Mũme",
            "acceptedAnswers": [
              "Mũme",
              "Mũme"
            ],
            "hint": "Starts with \"Mũ\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Mũtongoi\"",
            "correctAnswer": "Guide",
            "acceptedAnswers": [
              "Guide / Caravan leader",
              "Guide"
            ],
            "hint": "Review Family & Relationships (Part 2)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Family & Relationships (Part 2) with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Mũnyanya",
                "right": "Friend"
              },
              {
                "left": "Mũme",
                "right": "Husband"
              },
              {
                "left": "Mũtongoi",
                "right": "Guide"
              },
              {
                "left": "kabisi",
                "right": "Boy"
              },
              {
                "left": "mundu, pl. andu",
                "right": "Man"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-9",
    "unitNumber": 9,
    "title": "Nature & Environment",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Nature & Environment, built directly from Rev. Dr. J. L. Krapf (1850), Rev. J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), and Gerhard Lindblom (1920).",
    "icon": "TreePine",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-exp-nature",
        "title": "Nature & Environment (Part 1)",
        "icon": "TreePine",
        "description": "Master Kamba (Kĩkamba) nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Syũa' (Sun), 'Mwei' (Moon), 'Ndata' (Star), 'Ĩtu' (Sky / Cloud).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Syũa",
            "source": "Sun",
            "pronunciation": "syua",
            "hint": "Hinde Ulu: sua; Nganyawa: djua / thua"
          },
          {
            "target": "Mwei",
            "source": "Moon",
            "pronunciation": "mwei",
            "hint": "Hinde Ulu: mwei; Nganyawa: mbui; also means month"
          },
          {
            "target": "Ndata",
            "source": "Star",
            "pronunciation": "nda-ta",
            "hint": "Night sky star (Hinde: ndata)"
          },
          {
            "target": "Ĩtu",
            "source": "Sky / Cloud",
            "pronunciation": "itu",
            "hint": "Plural: Matu (clouds); Ulu: mwingo; Nganyawa: edu"
          },
          {
            "target": "Mbua",
            "source": "Rain",
            "pronunciation": "mbua",
            "hint": "Vital seasonal rains in Ukambani (Hinde: mbua)"
          },
          {
            "target": "Mbevo",
            "source": "Wind",
            "pronunciation": "mbe-vo",
            "hint": "Hinde: mbebo (wind, breeze, or atmospheric cold)"
          },
          {
            "target": "Ũsĩ",
            "source": "River",
            "pronunciation": "usi",
            "hint": "Hinde Ulu: ussi; Nganyawa: udzi"
          },
          {
            "target": "Nyekĩ",
            "source": "Grass",
            "pronunciation": "nye-ki",
            "hint": "Hinde Ulu: nyekki; Nganyawa: mathangu"
          },
          {
            "target": "Mwaki",
            "source": "Fire",
            "pronunciation": "mwa-ki",
            "hint": "Hinde Ulu: iko; Nganyawa: mwadgi / djuki"
          },
          {
            "target": "Manzĩ",
            "source": "Water",
            "pronunciation": "manzi",
            "hint": "Hinde: maanzi"
          },
          {
            "target": "Nthĩ",
            "source": "Soil / Earth / Ground",
            "pronunciation": "nthi",
            "hint": "Hinde Ulu: panthi; Nganyawa: itheo"
          },
          {
            "target": "Ĩvia",
            "source": "Stone",
            "pronunciation": "i-via",
            "hint": "Plural: Mavia (Hinde: ibia, pl. mavia)"
          },
          {
            "target": "Mwamba",
            "source": "Baobab tree",
            "pronunciation": "mwamba",
            "hint": "Iconic Ukambani dryland tree (Hinde: mwamba)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Syũa\" mean in English?",
            "correctAnswer": "Sun",
            "options": [
              "Sun",
              "Moon",
              "Star",
              "Sky"
            ],
            "hint": "Hinde Ulu: sua; Nganyawa: djua / thua"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mwei\" mean in English?",
            "correctAnswer": "Moon",
            "options": [
              "Star",
              "Moon",
              "Sky",
              "Sun"
            ],
            "hint": "Hinde Ulu: mwei; Nganyawa: mbui; also means month"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ndata\" mean in English?",
            "correctAnswer": "Star",
            "options": [
              "Sky",
              "Sun",
              "Star",
              "Moon"
            ],
            "hint": "Starts with \"St…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Star\" in Kamba?",
            "correctAnswer": "Ndata",
            "options": [
              "Ndata",
              "Syũa",
              "Mwei",
              "Ĩtu"
            ],
            "hint": "n-dah-tah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sky / Cloud\" in Kamba?",
            "correctAnswer": "Ĩtu",
            "options": [
              "Syũa",
              "Ĩtu",
              "Mwei",
              "Ndata"
            ],
            "hint": "ee-too"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Rain\" in Kamba?",
            "correctAnswer": "Mbua",
            "options": [
              "Mwei",
              "Ndata",
              "Syũa",
              "Mbua"
            ],
            "hint": "m-boo-ah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Syũa: Sun, Mwei: Moon, Ndata: Star, Ĩtu: Sky / Cloud",
            "pairs": [
              {
                "left": "Syũa",
                "right": "Sun"
              },
              {
                "left": "Mwei",
                "right": "Moon"
              },
              {
                "left": "Ndata",
                "right": "Star"
              },
              {
                "left": "Ĩtu",
                "right": "Sky / Cloud"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Sun\" in Kamba (Kĩkamba).",
            "correctAnswer": "Syũa",
            "options": [
              "Mwei",
              "Syũa",
              "Ndata",
              "Ĩtu"
            ],
            "hint": "syoo-ah"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-10",
    "unitNumber": 10,
    "title": "Animals & Wildlife",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Animals & Wildlife, built directly from Rev. Dr. J. L. Krapf (1850), Rev. J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), and Gerhard Lindblom (1920).",
    "icon": "PawPrint",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-exp-animals",
        "title": "Animals & Wildlife (Part 1)",
        "icon": "PawPrint",
        "description": "Master Kamba (Kĩkamba) animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ng'ombe' (Cow / Cattle), 'Nzao' (Bull), 'Mbuĩ' (Goat), 'Ĩlondu' (Sheep).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Ng'ombe",
            "source": "Cow / Cattle",
            "pronunciation": "ng'ombe",
            "hint": "Domestic cattle (Hinde: ngombe)"
          },
          {
            "target": "Nzao",
            "source": "Bull",
            "pronunciation": "nzao",
            "hint": "Hinde: nzao"
          },
          {
            "target": "Mbuĩ",
            "source": "Goat",
            "pronunciation": "mbui",
            "hint": "Plural: Mbuĩ (Hinde: mbuii)"
          },
          {
            "target": "Ĩlondu",
            "source": "Sheep",
            "pronunciation": "i-londu",
            "hint": "Hinde Ulu: ilondu; Nganyawa: ngoondu"
          },
          {
            "target": "Kĩtĩ / Ngiti",
            "source": "Dog",
            "pronunciation": "ki-ti / ngi-ti",
            "hint": "Hinde Ulu: solu; Nganyawa: ngiti"
          },
          {
            "target": "Nyũnyi",
            "source": "Bird",
            "pronunciation": "nyunyi",
            "hint": "Hinde Ulu: mbuungu; Nganyawa: nyunni"
          },
          {
            "target": "Nzũkĩ",
            "source": "Bee",
            "pronunciation": "nzu-ki",
            "hint": "Hinde Ulu: nsuki / kinyu; Nganyawa: nzuki"
          },
          {
            "target": "Nzowũ",
            "source": "Elephant",
            "pronunciation": "nzo-wu",
            "hint": "Hinde: unzōō"
          },
          {
            "target": "Mũnyambo",
            "source": "Lion",
            "pronunciation": "munyambo",
            "hint": "Hinde Ulu: munyambo; Nganyawa: thimba"
          },
          {
            "target": "Ngo",
            "source": "Leopard",
            "pronunciation": "ngo",
            "hint": "Hinde Ulu: ngoo; Nganyawa: engo"
          },
          {
            "target": "Mbĩtĩ",
            "source": "Hyena",
            "pronunciation": "mbi-ti",
            "hint": "Hinde: mbiti"
          },
          {
            "target": "Mbogo / Nyaĩ",
            "source": "Buffalo",
            "pronunciation": "mbo-go / nyai",
            "hint": "Hinde Ulu: niai; Nganyawa: mbo"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ng'ombe\" mean in English?",
            "correctAnswer": "Cow",
            "options": [
              "Bull",
              "Goat",
              "Sheep",
              "Cow"
            ],
            "hint": "Domestic cattle (Hinde: ngombe)",
            "acceptedAnswers": [
              "Cow / Cattle",
              "Cow"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nzao\" mean in English?",
            "correctAnswer": "Bull",
            "options": [
              "Goat",
              "Bull",
              "Sheep",
              "Cow"
            ],
            "hint": "Hinde: nzao"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mbuĩ\" mean in English?",
            "correctAnswer": "Goat",
            "options": [
              "Sheep",
              "Goat",
              "Cow",
              "Bull"
            ],
            "hint": "Plural: Mbuĩ (Hinde: mbuii)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Goat\" in Kamba?",
            "correctAnswer": "Mbuĩ",
            "options": [
              "Ng'ombe",
              "Nzao",
              "Ĩlondu",
              "Mbuĩ"
            ],
            "hint": "m-boo-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sheep\" in Kamba?",
            "correctAnswer": "Ĩlondu",
            "options": [
              "Ng'ombe",
              "Nzao",
              "Ĩlondu",
              "Mbuĩ"
            ],
            "hint": "ee-lohn-doo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Dog\" in Kamba?",
            "correctAnswer": "Kĩtĩ",
            "options": [
              "Nzao",
              "Mbuĩ",
              "Kĩtĩ",
              "Ng'ombe"
            ],
            "hint": "kee-tee / n-gee-tee",
            "acceptedAnswers": [
              "Kĩtĩ / Ngiti",
              "Kĩtĩ"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Ng'ombe: Cow / Cattle, Nzao: Bull, Mbuĩ: Goat, Ĩlondu: Sheep",
            "pairs": [
              {
                "left": "Ng'ombe",
                "right": "Cow / Cattle"
              },
              {
                "left": "Nzao",
                "right": "Bull"
              },
              {
                "left": "Mbuĩ",
                "right": "Goat"
              },
              {
                "left": "Ĩlondu",
                "right": "Sheep"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Cow / Cattle\" in Kamba (Kĩkamba).",
            "correctAnswer": "Ng'ombe",
            "options": [
              "Nzao",
              "Ng'ombe",
              "Mbuĩ",
              "Ĩlondu"
            ],
            "hint": "n-gohm-beh"
          }
        ]
      },
      {
        "id": "kamba-exp-animals-2",
        "title": "Animals & Wildlife (Part 2)",
        "icon": "Compass",
        "description": "Master Kamba (Kĩkamba) animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Nzaĩ' (Zebra), 'Ndia' (Giraffe), 'Kĩnyangĩ' (Crocodile), 'Ngũlĩ' (Baboon).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Nzaĩ",
            "source": "Zebra",
            "pronunciation": "nzai",
            "hint": "Hinde Ulu: nzaii; Nganyawa: mbuvu"
          },
          {
            "target": "Ndia",
            "source": "Giraffe",
            "pronunciation": "ndia",
            "hint": "Hinde: ndia"
          },
          {
            "target": "Kĩnyangĩ",
            "source": "Crocodile",
            "pronunciation": "kinyangi",
            "hint": "Hinde: kinyangi"
          },
          {
            "target": "Ngũlĩ",
            "source": "Baboon",
            "pronunciation": "ngu-li",
            "hint": "Hinde: ngulli"
          },
          {
            "target": "Nzoka",
            "source": "Snake",
            "pronunciation": "nzo-ka",
            "hint": "Hinde Ulu: enjoka; Nganyawa: mweanthi"
          },
          {
            "target": "Ĩkũyũ",
            "source": "Fish",
            "pronunciation": "i-ku-yu",
            "hint": "Plural: Makũyũ (Hinde: ikuyu, pl. makuyu)"
          },
          {
            "target": "Kavokoo",
            "source": "Hare",
            "pronunciation": "ka-vo-koo",
            "hint": "Hinde: kabokō (folk trickster figure)"
          }
        ],
        "sentences": [
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          },
          {
            "target": "Mũndũ mũka nũũkua kĩw'ũ na mbisu.",
            "source": "The woman is carrying water with a pot."
          },
          {
            "target": "Mũũnda witũ wĩ na mbemba mbingĩ.",
            "source": "Our farm has plenty of maize."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nzaĩ\" mean in English?",
            "correctAnswer": "Zebra",
            "options": [
              "Giraffe",
              "Crocodile",
              "Zebra",
              "Baboon"
            ],
            "hint": "Hinde Ulu: nzaii; Nganyawa: mbuvu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ndia\" mean in English?",
            "correctAnswer": "Giraffe",
            "options": [
              "Giraffe",
              "Crocodile",
              "Baboon",
              "Zebra"
            ],
            "hint": "Hinde: ndia"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kĩnyangĩ\" mean in English?",
            "correctAnswer": "Crocodile",
            "options": [
              "Baboon",
              "Zebra",
              "Crocodile",
              "Giraffe"
            ],
            "hint": "Hinde: kinyangi"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Crocodile\" in Kamba?",
            "correctAnswer": "Kĩnyangĩ",
            "options": [
              "Kĩnyangĩ",
              "Nzaĩ",
              "Ndia",
              "Ngũlĩ"
            ],
            "hint": "kee-nyahn-gee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Baboon\" in Kamba?",
            "correctAnswer": "Ngũlĩ",
            "options": [
              "Nzaĩ",
              "Ndia",
              "Ngũlĩ",
              "Kĩnyangĩ"
            ],
            "hint": "n-goo-lee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Snake\" in Kamba?",
            "correctAnswer": "Nzoka",
            "options": [
              "Ndia",
              "Nzoka",
              "Kĩnyangĩ",
              "Nzaĩ"
            ],
            "hint": "n-zoh-kah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Nzaĩ: Zebra, Ndia: Giraffe, Kĩnyangĩ: Crocodile, Ngũlĩ: Baboon",
            "pairs": [
              {
                "left": "Nzaĩ",
                "right": "Zebra"
              },
              {
                "left": "Ndia",
                "right": "Giraffe"
              },
              {
                "left": "Kĩnyangĩ",
                "right": "Crocodile"
              },
              {
                "left": "Ngũlĩ",
                "right": "Baboon"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Zebra\" in Kamba (Kĩkamba).",
            "correctAnswer": "Nzaĩ",
            "options": [
              "Ndia",
              "Kĩnyangĩ",
              "Ngũlĩ",
              "Nzaĩ"
            ],
            "hint": "Starts with \"Nz…\" (4 letters)"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-11",
    "unitNumber": 11,
    "title": "Food & Drink",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Food & Drink, built directly from Rev. Dr. J. L. Krapf (1850), Rev. J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), and Gerhard Lindblom (1920).",
    "icon": "Soup",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-exp-food",
        "title": "Food & Drink (Part 1)",
        "icon": "Soup",
        "description": "Master Kamba (Kĩkamba) food & drink vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Food & Drink, pay special attention to pronunciation and morphological prefixes/suffixes: 'Lĩu / Ĩlya' (Food), 'Ĩya' (Milk), 'Nyama' (Meat), 'Mbemba' (Maize).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Lĩu / Ĩlya",
            "source": "Food",
            "pronunciation": "liu / ilya",
            "hint": "Hinde Ulu: leū; Nganyawa: chakueer / kandu"
          },
          {
            "target": "Ĩya",
            "source": "Milk",
            "pronunciation": "iya",
            "hint": "Fresh milk (Hinde: iya); sour/buttermilk: kalia"
          },
          {
            "target": "Nyama",
            "source": "Meat",
            "pronunciation": "nya-ma",
            "hint": "Hinde Ulu: nyamma; Nganyawa: nama"
          },
          {
            "target": "Mbemba",
            "source": "Maize",
            "pronunciation": "mbemba",
            "hint": "Hinde: mbēmba"
          },
          {
            "target": "Nthoogo",
            "source": "Beans",
            "pronunciation": "nthoo-go / nthzuu",
            "hint": "Hinde: inthoogo; tree beans: nthzuu"
          },
          {
            "target": "Nthzũũ",
            "source": "pulses)",
            "pronunciation": "nthoo-go / nthzuu",
            "hint": "Hinde: inthoogo; tree beans: nthzuu"
          },
          {
            "target": "Maĩyũ",
            "source": "Banana",
            "pronunciation": "mai-yu",
            "hint": "Hinde: maĩyu"
          },
          {
            "target": "Makwasĩ",
            "source": "Sweet potato",
            "pronunciation": "makwa-si",
            "hint": "Hinde Ulu: makwasi; Nganyawa: makwatzi"
          },
          {
            "target": "Wũkĩ",
            "source": "Honey",
            "pronunciation": "wu-ki",
            "hint": "Renowned Ukambani honey (Hinde: ukki wa nzuki)"
          },
          {
            "target": "Mbeea",
            "source": "Millet",
            "pronunciation": "mbeea",
            "hint": "Traditional drought-resistant grain (Hinde: mbīa)"
          },
          {
            "target": "Mũwa",
            "source": "Sugar cane",
            "pronunciation": "mu-wa",
            "hint": "Hinde: iwa"
          },
          {
            "target": "Mũnyũ",
            "source": "Salt",
            "pronunciation": "munyu",
            "hint": "Hinde: munyu"
          },
          {
            "target": "Mauta",
            "source": "Butter / Oil / Fat",
            "pronunciation": "mau-ta",
            "hint": "Hinde: maota; clarified: mauta mavivia"
          },
          {
            "target": "Mũtu",
            "source": "Flour",
            "pronunciation": "mu-tu",
            "hint": "Milled grain flour (Hinde: mutu)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Lĩu / Ĩlya\" mean in English?",
            "correctAnswer": "Food",
            "options": [
              "Milk",
              "Meat",
              "Maize",
              "Food"
            ],
            "hint": "Hinde Ulu: leū; Nganyawa: chakueer / kandu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ĩya\" mean in English?",
            "correctAnswer": "Milk",
            "options": [
              "Milk",
              "Meat",
              "Maize",
              "Food"
            ],
            "hint": "Starts with \"Mi…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nyama\" mean in English?",
            "correctAnswer": "Meat",
            "options": [
              "Maize",
              "Food",
              "Meat",
              "Milk"
            ],
            "hint": "Hinde Ulu: nyamma; Nganyawa: nama"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Meat\" in Kamba?",
            "correctAnswer": "Nyama",
            "options": [
              "Nyama",
              "Lĩu",
              "Ĩya",
              "Mbemba"
            ],
            "hint": "nyah-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Maize\" in Kamba?",
            "correctAnswer": "Mbemba",
            "options": [
              "Lĩu",
              "Ĩya",
              "Mbemba",
              "Nyama"
            ],
            "hint": "m-behm-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Beans\" in Kamba?",
            "correctAnswer": "Nthoogo",
            "options": [
              "Ĩya",
              "Nyama",
              "Lĩu",
              "Nthoogo"
            ],
            "hint": "n-thoh-goh / n-thzoo",
            "acceptedAnswers": [
              "Nthoogo / Nthzũũ",
              "Nthoogo"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Lĩu / Ĩlya: Food, Ĩya: Milk, Nyama: Meat, Mbemba: Maize",
            "pairs": [
              {
                "left": "Lĩu / Ĩlya",
                "right": "Food"
              },
              {
                "left": "Ĩya",
                "right": "Milk"
              },
              {
                "left": "Nyama",
                "right": "Meat"
              },
              {
                "left": "Mbemba",
                "right": "Maize"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Food\" in Kamba (Kĩkamba).",
            "correctAnswer": "Lĩu",
            "options": [
              "Ĩya",
              "Lĩu",
              "Nyama",
              "Mbemba"
            ],
            "hint": "lee-oo / ee-lyah",
            "acceptedAnswers": [
              "Lĩu / Ĩlya",
              "Lĩu"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-12",
    "unitNumber": 12,
    "title": "Body Parts",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Body Parts, built directly from Rev. Dr. J. L. Krapf (1850), Rev. J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), and Gerhard Lindblom (1920).",
    "icon": "Activity",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-exp-body",
        "title": "Body Parts (Part 1)",
        "icon": "Activity",
        "description": "Master Kamba (Kĩkamba) body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Mwĩĩ' (Body), 'Mũtwe' (Head), 'Ĩtho' (Eye), 'Kũtũ' (Ear).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Mwĩĩ",
            "source": "Body",
            "pronunciation": "mwii",
            "hint": "Hinde Ulu: mwi; Nganyawa: mwili"
          },
          {
            "target": "Mũtwe",
            "source": "Head",
            "pronunciation": "mutwe",
            "hint": "Hinde: mutue"
          },
          {
            "target": "Ĩtho",
            "source": "Eye",
            "pronunciation": "itho",
            "hint": "Plural: Meetho (Hinde: itho, pl. meetho)"
          },
          {
            "target": "Kũtũ",
            "source": "Ear",
            "pronunciation": "ku-tu",
            "hint": "Hinde Ulu: matu (pl); Nganyawa: kutu"
          },
          {
            "target": "Ĩnyũ",
            "source": "Nose",
            "pronunciation": "inyu",
            "hint": "Hinde: inyu"
          },
          {
            "target": "Mũomo",
            "source": "Mouth",
            "pronunciation": "muo-mo",
            "hint": "Hinde: moomo"
          },
          {
            "target": "Ĩyo",
            "source": "Tooth",
            "pronunciation": "iyo",
            "hint": "Plural: Mayo (Hinde: maiyo)"
          },
          {
            "target": "Wĩmĩ / Kanywa",
            "source": "Tongue",
            "pronunciation": "wi-mi / kanywa",
            "hint": "Hinde Ulu: kanyua; Nganyawa: wimi"
          },
          {
            "target": "Kĩng'ee",
            "source": "Beard",
            "pronunciation": "king'ee",
            "hint": "Hinde Ulu: kingē; Nganyawa: kiaiu"
          },
          {
            "target": "Ngingo",
            "source": "Neck",
            "pronunciation": "ngingo",
            "hint": "Hinde Ulu: ngingo; Nganyawa: njingo"
          },
          {
            "target": "Kĩthũi",
            "source": "Chest",
            "pronunciation": "kithui",
            "hint": "Hinde: kithui"
          },
          {
            "target": "Ngoo / Ndeĩ",
            "source": "Heart",
            "pronunciation": "ngoo / ndei",
            "hint": "Hinde Ulu: ndei; Nganyawa: ethaiyu"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mwĩĩ\" mean in English?",
            "correctAnswer": "Body",
            "options": [
              "Head",
              "Body",
              "Eye",
              "Ear"
            ],
            "hint": "Hinde Ulu: mwi; Nganyawa: mwili"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mũtwe\" mean in English?",
            "correctAnswer": "Head",
            "options": [
              "Eye",
              "Ear",
              "Head",
              "Body"
            ],
            "hint": "Hinde: mutue"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ĩtho\" mean in English?",
            "correctAnswer": "Eye",
            "options": [
              "Eye",
              "Ear",
              "Body",
              "Head"
            ],
            "hint": "Plural: Meetho (Hinde: itho, pl. meetho)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eye\" in Kamba?",
            "correctAnswer": "Ĩtho",
            "options": [
              "Mwĩĩ",
              "Mũtwe",
              "Ĩtho",
              "Kũtũ"
            ],
            "hint": "Starts with \"Ĩt…\" (4 letters)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ear\" in Kamba?",
            "correctAnswer": "Kũtũ",
            "options": [
              "Mwĩĩ",
              "Mũtwe",
              "Kũtũ",
              "Ĩtho"
            ],
            "hint": "koo-too"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Kamba?",
            "correctAnswer": "Ĩnyũ",
            "options": [
              "Mũtwe",
              "Ĩtho",
              "Mwĩĩ",
              "Ĩnyũ"
            ],
            "hint": "ee-nyoo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Mwĩĩ: Body, Mũtwe: Head, Ĩtho: Eye, Kũtũ: Ear",
            "pairs": [
              {
                "left": "Mwĩĩ",
                "right": "Body"
              },
              {
                "left": "Mũtwe",
                "right": "Head"
              },
              {
                "left": "Ĩtho",
                "right": "Eye"
              },
              {
                "left": "Kũtũ",
                "right": "Ear"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Body\" in Kamba (Kĩkamba).",
            "correctAnswer": "Mwĩĩ",
            "options": [
              "Mũtwe",
              "Ĩtho",
              "Mwĩĩ",
              "Kũtũ"
            ],
            "hint": "mwee-ee"
          }
        ]
      },
      {
        "id": "kamba-exp-body-2",
        "title": "Body Parts (Part 2)",
        "icon": "Eye",
        "description": "Master Kamba (Kĩkamba) body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ĩvũ' (Stomach / Belly), 'Mũongo' (Back), 'Kwoko' (Arm / Hand), 'Kũũ' (Leg / Foot).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Ĩvũ",
            "source": "Stomach / Belly",
            "pronunciation": "ivu",
            "hint": "Hinde Ulu: ebŭ; Nganyawa: ibu"
          },
          {
            "target": "Mũongo",
            "source": "Back",
            "pronunciation": "muongo",
            "hint": "Hinde Ulu: muongo; Nganyawa: moongo"
          },
          {
            "target": "Kwoko",
            "source": "Arm / Hand",
            "pronunciation": "kwo-ko",
            "hint": "Hinde Ulu: kuoko; Nganyawa: ntha; Plural: Moko"
          },
          {
            "target": "Kũũ",
            "source": "Leg / Foot",
            "pronunciation": "kuu",
            "hint": "Hinde: kuu; Plural: Maũ"
          },
          {
            "target": "Ĩvĩndĩ",
            "source": "Bone",
            "pronunciation": "i-vindi",
            "hint": "Plural: Mavĩndĩ (Hinde: ivindi, pl. mavindi)"
          },
          {
            "target": "Nthakame",
            "source": "Blood",
            "pronunciation": "ntha-ka-me",
            "hint": "Hinde Ulu: nthakame; Nganyawa: ndagami"
          },
          {
            "target": "Kya",
            "source": "Finger",
            "pronunciation": "kya",
            "hint": "Plural: Syĩa / Thia (Hinde: kia, pl. thia)"
          },
          {
            "target": "Ĩu",
            "source": "Knee",
            "pronunciation": "iu",
            "hint": "Hinde: iyu; Plural: Mau"
          }
        ],
        "sentences": [
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          },
          {
            "target": "Mũndũ mũka nũũkua kĩw'ũ na mbisu.",
            "source": "The woman is carrying water with a pot."
          },
          {
            "target": "Mũũnda witũ wĩ na mbemba mbingĩ.",
            "source": "Our farm has plenty of maize."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ĩvũ\" mean in English?",
            "correctAnswer": "Stomach",
            "options": [
              "Back",
              "Arm",
              "Leg",
              "Stomach"
            ],
            "hint": "Hinde Ulu: ebŭ; Nganyawa: ibu",
            "acceptedAnswers": [
              "Stomach / Belly",
              "Stomach"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mũongo\" mean in English?",
            "correctAnswer": "Back",
            "options": [
              "Arm",
              "Leg",
              "Stomach",
              "Back"
            ],
            "hint": "Hinde Ulu: muongo; Nganyawa: moongo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kwoko\" mean in English?",
            "correctAnswer": "Arm",
            "options": [
              "Leg",
              "Arm",
              "Stomach",
              "Back"
            ],
            "hint": "Hinde Ulu: kuoko; Nganyawa: ntha; Plural: Moko",
            "acceptedAnswers": [
              "Arm / Hand",
              "Arm"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Arm / Hand\" in Kamba?",
            "correctAnswer": "Kwoko",
            "options": [
              "Ĩvũ",
              "Mũongo",
              "Kwoko",
              "Kũũ"
            ],
            "hint": "kwoh-koh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leg / Foot\" in Kamba?",
            "correctAnswer": "Kũũ",
            "options": [
              "Kũũ",
              "Ĩvũ",
              "Mũongo",
              "Kwoko"
            ],
            "hint": "koo-oo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bone\" in Kamba?",
            "correctAnswer": "Ĩvĩndĩ",
            "options": [
              "Mũongo",
              "Ĩvĩndĩ",
              "Kwoko",
              "Ĩvũ"
            ],
            "hint": "ee-veen-dee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Ĩvũ: Stomach / Belly, Mũongo: Back, Kwoko: Arm / Hand, Kũũ: Leg / Foot",
            "pairs": [
              {
                "left": "Ĩvũ",
                "right": "Stomach / Belly"
              },
              {
                "left": "Mũongo",
                "right": "Back"
              },
              {
                "left": "Kwoko",
                "right": "Arm / Hand"
              },
              {
                "left": "Kũũ",
                "right": "Leg / Foot"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Stomach / Belly\" in Kamba (Kĩkamba).",
            "correctAnswer": "Ĩvũ",
            "options": [
              "Ĩvũ",
              "Mũongo",
              "Kwoko",
              "Kũũ"
            ],
            "hint": "ee-voo"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-13",
    "unitNumber": 13,
    "title": "Tools & Household Objects",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Tools & Household Objects, built directly from Rev. Dr. J. L. Krapf (1850), Rev. J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), and Gerhard Lindblom (1920).",
    "icon": "Globe",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-exp-tools",
        "title": "Tools & Household Objects (Part 1)",
        "icon": "Hammer",
        "description": "Master Kamba (Kĩkamba) tools & household objects vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Tools & Household Objects, pay special attention to pronunciation and morphological prefixes/suffixes: 'Kaviu' (Knife), 'Mũsye' (Arrow), 'Thyaka' (Quiver (for arrows)), 'Ĩtũmũ' (Spear).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Kaviu",
            "source": "Knife",
            "pronunciation": "ka-viu",
            "hint": "Hinde Ulu: kabiu; Nganyawa: kaviu"
          },
          {
            "target": "Mũsye",
            "source": "Arrow",
            "pronunciation": "musye",
            "hint": "Hinde Ulu: musie; Nganyawa: mutchi"
          },
          {
            "target": "Thyaka",
            "source": "Quiver (for arrows)",
            "pronunciation": "thya-ka",
            "hint": "Hinde Ulu: thiaka; Nganyawa: ithiaga"
          },
          {
            "target": "Ĩtũmũ",
            "source": "Spear",
            "pronunciation": "i-tu-mu",
            "hint": "Hinde: itumu"
          },
          {
            "target": "Ngao",
            "source": "Shield",
            "pronunciation": "ngao",
            "hint": "Hinde: ningau"
          },
          {
            "target": "Ĩthoka",
            "source": "Axe",
            "pronunciation": "itho-ka",
            "hint": "Plural: Mathoka (Hinde: ithoka, pl. mathoka)"
          },
          {
            "target": "Chõõndo / Ngũsũ",
            "source": "Traditional woven bag",
            "pronunciation": "choondo / ngu-su",
            "hint": "Hinde Ulu: ngussu; Nganyawa: chõõndo; famous sisal woven bag"
          },
          {
            "target": "Kĩvĩla",
            "source": "Stool",
            "pronunciation": "ki-vi-la / ki-tumbi",
            "hint": "Hinde Ulu: kibilla; Nganyawa: kitumbi"
          },
          {
            "target": "Kĩtũmbĩ",
            "source": "Chair",
            "pronunciation": "ki-vi-la / ki-tumbi",
            "hint": "Hinde Ulu: kibilla; Nganyawa: kitumbi"
          },
          {
            "target": "Nyũngũ",
            "source": "Clay cooking pot",
            "pronunciation": "nyungu",
            "hint": "Hinde Ulu: nuungu; Nganyawa: ithillia / mbiitziu"
          },
          {
            "target": "Kĩkũũ",
            "source": "Calabash",
            "pronunciation": "ki-kuu / kithanzya",
            "hint": "Hinde Ulu: kikuu; Nganyawa: kithalzia"
          },
          {
            "target": "Kĩthanzya",
            "source": "Gourd",
            "pronunciation": "ki-kuu / kithanzya",
            "hint": "Hinde Ulu: kikuu; Nganyawa: kithalzia"
          },
          {
            "target": "Mwatũ",
            "source": "Beehive",
            "pronunciation": "mwa-tu",
            "hint": "Hinde: mwatu; traditional hollow log hive hung in trees"
          },
          {
            "target": "Kĩatũ",
            "source": "Sandal",
            "pronunciation": "kia-tu",
            "hint": "Plural: Iatũ (Hinde: kiatu, pl. iatu)"
          },
          {
            "target": "Ndĩĩ",
            "source": "Wooden Mortar",
            "pronunciation": "ndii",
            "hint": "Traditional heavy mortar used for pounding grain"
          },
          {
            "target": "Wenzĩ",
            "source": "Razor",
            "pronunciation": "wenzi",
            "hint": "Hinde: wenzi; traditional fine iron blade"
          },
          {
            "target": "Ũlĩ",
            "source": "Rope",
            "pronunciation": "uli / ndi",
            "hint": "Hinde Ulu: uli; Nganyawa: ndi"
          },
          {
            "target": "Ndi",
            "source": "Cord",
            "pronunciation": "uli / ndi",
            "hint": "Hinde Ulu: uli; Nganyawa: ndi"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kaviu\" mean in English?",
            "correctAnswer": "Knife",
            "options": [
              "Arrow",
              "Quiver",
              "Spear",
              "Knife"
            ],
            "hint": "Hinde Ulu: kabiu; Nganyawa: kaviu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mũsye\" mean in English?",
            "correctAnswer": "Arrow",
            "options": [
              "Quiver",
              "Spear",
              "Knife",
              "Arrow"
            ],
            "hint": "Hinde Ulu: musie; Nganyawa: mutchi"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Thyaka\" mean in English?",
            "correctAnswer": "Quiver",
            "options": [
              "Spear",
              "Quiver",
              "Knife",
              "Arrow"
            ],
            "hint": "Hinde Ulu: thiaka; Nganyawa: ithiaga",
            "acceptedAnswers": [
              "Quiver (for arrows)",
              "Quiver"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Quiver (for arrows)\" in Kamba?",
            "correctAnswer": "Thyaka",
            "options": [
              "Thyaka",
              "Kaviu",
              "Mũsye",
              "Ĩtũmũ"
            ],
            "hint": "thyah-kah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Spear\" in Kamba?",
            "correctAnswer": "Ĩtũmũ",
            "options": [
              "Kaviu",
              "Ĩtũmũ",
              "Mũsye",
              "Thyaka"
            ],
            "hint": "ee-too-moo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Shield\" in Kamba?",
            "correctAnswer": "Ngao",
            "options": [
              "Mũsye",
              "Ngao",
              "Thyaka",
              "Kaviu"
            ],
            "hint": "n-gah-oh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Kaviu: Knife, Mũsye: Arrow, Thyaka: Quiver (for arrows), Ĩtũmũ: Spear",
            "pairs": [
              {
                "left": "Kaviu",
                "right": "Knife"
              },
              {
                "left": "Mũsye",
                "right": "Arrow"
              },
              {
                "left": "Thyaka",
                "right": "Quiver (for arrows)"
              },
              {
                "left": "Ĩtũmũ",
                "right": "Spear"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Knife\" in Kamba (Kĩkamba).",
            "correctAnswer": "Kaviu",
            "options": [
              "Kaviu",
              "Mũsye",
              "Thyaka",
              "Ĩtũmũ"
            ],
            "hint": "kah-vee-oo"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-14",
    "unitNumber": 14,
    "title": "Verbs & Actions",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Verbs & Actions, built directly from Rev. Dr. J. L. Krapf (1850), Rev. J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), and Gerhard Lindblom (1920).",
    "icon": "Layers",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-exp-verbs",
        "title": "Verbs & Actions (Part 1)",
        "icon": "Soup",
        "description": "Master Kamba (Kĩkamba) verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Kũĩma' (To cultivate / farm), 'Kwaka' (To build), 'Kũua' (To cook), 'Kũona / Kũkĩĩtha' (To see).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Kũĩma",
            "source": "To cultivate / farm",
            "pronunciation": "kui-ma",
            "hint": "Hinde: kuimu"
          },
          {
            "target": "Kwaka",
            "source": "To build",
            "pronunciation": "kwa-ka",
            "hint": "Hinde: kuaka"
          },
          {
            "target": "Kũua",
            "source": "To cook",
            "pronunciation": "kuua",
            "hint": "Hinde Ulu: kuuer; Nganyawa: kūūē"
          },
          {
            "target": "Kũona / Kũkĩĩtha",
            "source": "To see",
            "pronunciation": "kuo-na / ku-kiitha",
            "hint": "Hinde: kukiitha / kuona"
          },
          {
            "target": "Kũneena",
            "source": "To speak / talk",
            "pronunciation": "ku-nee-na",
            "hint": "Hinde: kunēēna / gunēēna"
          },
          {
            "target": "Kũũa / Kũtho",
            "source": "To buy",
            "pronunciation": "kuua / kutho",
            "hint": "Hinde Ulu: kūer; Nganyawa: gutho"
          },
          {
            "target": "Kũthoosya",
            "source": "To sell",
            "pronunciation": "kuthoosya",
            "hint": "Hinde Ulu: guthozia; Nganyawa: kuta"
          },
          {
            "target": "Kũnenga",
            "source": "To give",
            "pronunciation": "ku-nenga",
            "hint": "Hinde: kumunenge"
          },
          {
            "target": "Kũkoma",
            "source": "To sleep",
            "pronunciation": "ku-ko-ma",
            "hint": "Hinde: kukoma"
          },
          {
            "target": "Kũrũta wĩa",
            "source": "To work",
            "pronunciation": "ku-ru-ta wia",
            "hint": "Hinde Ulu: uuia; Nganyawa: mawia"
          },
          {
            "target": "Kũkũlya",
            "source": "To ask",
            "pronunciation": "ku-kulya",
            "hint": "Hinde Ulu: gukulia; Nganyawa: kwibaja"
          },
          {
            "target": "Kwĩna",
            "source": "To sing",
            "pronunciation": "kwi-na",
            "hint": "Hinde Ulu: kwina; Nganyawa: kukwea"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũĩma\" mean in English?",
            "correctAnswer": "To cultivate",
            "options": [
              "To build",
              "To cook",
              "To cultivate",
              "To see"
            ],
            "hint": "Hinde: kuimu",
            "acceptedAnswers": [
              "To cultivate / farm",
              "To cultivate"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kwaka\" mean in English?",
            "correctAnswer": "To build",
            "options": [
              "To cook",
              "To see",
              "To build",
              "To cultivate"
            ],
            "hint": "Hinde: kuaka"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũua\" mean in English?",
            "correctAnswer": "To cook",
            "options": [
              "To cook",
              "To see",
              "To cultivate",
              "To build"
            ],
            "hint": "Hinde Ulu: kuuer; Nganyawa: kūūē"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To cook\" in Kamba?",
            "correctAnswer": "Kũua",
            "options": [
              "Kũĩma",
              "Kwaka",
              "Kũua",
              "Kũona"
            ],
            "hint": "koo-oo-ah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To see\" in Kamba?",
            "correctAnswer": "Kũona",
            "options": [
              "Kũĩma",
              "Kwaka",
              "Kũona",
              "Kũua"
            ],
            "hint": "koo-oh-nah / koo-kee-ee-thah",
            "acceptedAnswers": [
              "Kũona / Kũkĩĩtha",
              "Kũona"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To speak / talk\" in Kamba?",
            "correctAnswer": "Kũneena",
            "options": [
              "Kwaka",
              "Kũneena",
              "Kũua",
              "Kũĩma"
            ],
            "hint": "koo-neh-eh-nah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Kũĩma: To cultivate / farm, Kwaka: To build, Kũua: To cook, Kũona / Kũkĩĩtha: To see",
            "pairs": [
              {
                "left": "Kũĩma",
                "right": "To cultivate / farm"
              },
              {
                "left": "Kwaka",
                "right": "To build"
              },
              {
                "left": "Kũua",
                "right": "To cook"
              },
              {
                "left": "Kũona / Kũkĩĩtha",
                "right": "To see"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To cultivate / farm\" in Kamba (Kĩkamba).",
            "correctAnswer": "Kũĩma",
            "options": [
              "Kwaka",
              "Kũua",
              "Kũĩma",
              "Kũona"
            ],
            "hint": "koo-ee-mah"
          }
        ]
      },
      {
        "id": "kamba-exp-verbs-2",
        "title": "Verbs & Actions (Part 2)",
        "icon": "Zap",
        "description": "Master Kamba (Kĩkamba) verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Kũsemba' (To run), 'Kũkwa' (To die), 'Kũthamba' (To wash), 'Kũtheka' (To laugh).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Kũsemba",
            "source": "To run",
            "pronunciation": "ku-semba",
            "hint": "Hinde: sēēmba"
          },
          {
            "target": "Kũkwa",
            "source": "To die",
            "pronunciation": "kukwa",
            "hint": "Hinde Ulu: kwie; Nganyawa: kugua"
          },
          {
            "target": "Kũthamba",
            "source": "To wash",
            "pronunciation": "kuthamba",
            "hint": "Hinde: kuthamba"
          },
          {
            "target": "Kũtheka",
            "source": "To laugh",
            "pronunciation": "kuthe-ka",
            "hint": "Recorded by J.T. Last (1885): ku-theka; Hinde (1904): gutheka"
          },
          {
            "target": "Kwĩekana",
            "source": "To forgive / pardon",
            "pronunciation": "kwie-ka-na",
            "hint": "Recorded by J.T. Last (1885): kw-iekana"
          },
          {
            "target": "Kũkila",
            "source": "To surpass / excel",
            "pronunciation": "ku-ki-la",
            "hint": "Auxiliary comparative verb recorded by J.T. Last (1885): ku-kila"
          },
          {
            "target": "Kũthaima",
            "source": "To hunt / track game",
            "pronunciation": "kuthai-ma",
            "hint": "Recorded by J.T. Last (1885): ku-thaima"
          }
        ],
        "sentences": [
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          },
          {
            "target": "Mũndũ mũka nũũkua kĩw'ũ na mbisu.",
            "source": "The woman is carrying water with a pot."
          },
          {
            "target": "Mũũnda witũ wĩ na mbemba mbingĩ.",
            "source": "Our farm has plenty of maize."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũsemba\" mean in English?",
            "correctAnswer": "To run",
            "options": [
              "To die",
              "To wash",
              "To run",
              "To laugh"
            ],
            "hint": "Hinde: sēēmba"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũkwa\" mean in English?",
            "correctAnswer": "To die",
            "options": [
              "To die",
              "To wash",
              "To laugh",
              "To run"
            ],
            "hint": "Hinde Ulu: kwie; Nganyawa: kugua"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũthamba\" mean in English?",
            "correctAnswer": "To wash",
            "options": [
              "To wash",
              "To laugh",
              "To run",
              "To die"
            ],
            "hint": "Hinde: kuthamba"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To wash\" in Kamba?",
            "correctAnswer": "Kũthamba",
            "options": [
              "Kũsemba",
              "Kũkwa",
              "Kũthamba",
              "Kũtheka"
            ],
            "hint": "koo-thahm-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To laugh\" in Kamba?",
            "correctAnswer": "Kũtheka",
            "options": [
              "Kũsemba",
              "Kũkwa",
              "Kũtheka",
              "Kũthamba"
            ],
            "hint": "koo-theh-kah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To forgive / pardon\" in Kamba?",
            "correctAnswer": "Kwĩekana",
            "options": [
              "Kũkwa",
              "Kũthamba",
              "Kwĩekana",
              "Kũsemba"
            ],
            "hint": "kwee-eh-kah-nah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Kũsemba: To run, Kũkwa: To die, Kũthamba: To wash, Kũtheka: To laugh",
            "pairs": [
              {
                "left": "Kũsemba",
                "right": "To run"
              },
              {
                "left": "Kũkwa",
                "right": "To die"
              },
              {
                "left": "Kũthamba",
                "right": "To wash"
              },
              {
                "left": "Kũtheka",
                "right": "To laugh"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To run\" in Kamba (Kĩkamba).",
            "correctAnswer": "Kũsemba",
            "options": [
              "Kũkwa",
              "Kũthamba",
              "Kũtheka",
              "Kũsemba"
            ],
            "hint": "koo-sehm-bah"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-15",
    "unitNumber": 15,
    "title": "Common Phrases",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Common Phrases, built directly from Rev. Dr. J. L. Krapf (1850), Rev. J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), and Gerhard Lindblom (1920).",
    "icon": "Sparkles",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-exp-phrases",
        "title": "Common Phrases (Part 1)",
        "icon": "Coffee",
        "description": "Master Kamba (Kĩkamba) common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ĩĩ / Nĩw'o' (Yes), 'Aiee / Nde' (No), 'Wĩtawa ata?' (What is your name?), 'Nĩtawa...' (My name is...).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Ĩĩ / Nĩw'o",
            "source": "Yes",
            "pronunciation": "ii / niw'o",
            "hint": "Hinde Ulu: newua; Nganyawa: nigwo"
          },
          {
            "target": "Aiee / Nde",
            "source": "No",
            "pronunciation": "aiee / nde",
            "hint": "Hinde: ndi / aiyee"
          },
          {
            "target": "Wĩtawa ata?",
            "source": "What is your name?",
            "pronunciation": "wi-ta-wa ata",
            "hint": "Hinde Ulu: wita wata?"
          },
          {
            "target": "Nĩtawa...",
            "source": "My name is...",
            "pronunciation": "ni-ta-wa",
            "hint": "Response: 'I am called...'"
          },
          {
            "target": "Ũthĩ naku?",
            "source": "Where are you going?",
            "pronunciation": "uthi na-ku",
            "hint": "Hinde Ulu: uthi naku?"
          },
          {
            "target": "Wumĩte va?",
            "source": "Where do you come from?",
            "pronunciation": "wu-mi-te va",
            "hint": "Hinde Ulu: uomanakko?"
          },
          {
            "target": "Ũka vaa",
            "source": "Come here",
            "pronunciation": "uka vaa",
            "hint": "Hinde: uka haha / uka vaa"
          },
          {
            "target": "Ete manzĩ",
            "source": "Bring water",
            "pronunciation": "ete manzi",
            "hint": "Hinde Ulu: ete maanzi"
          },
          {
            "target": "Ndimanya",
            "source": "I do not know",
            "pronunciation": "ndi-manya",
            "hint": "Hinde Ulu: ndimanya"
          },
          {
            "target": "Nĩnkwendete",
            "source": "I love you",
            "pronunciation": "ninkwende-te",
            "hint": "Expression of deep love"
          },
          {
            "target": "Ngai / Mũlũngũ",
            "source": "God",
            "pronunciation": "ngai / mu-lungu",
            "hint": "Hinde Ulu: ngaii; Nganyawa: milungu"
          },
          {
            "target": "Mũseo",
            "source": "Good / Fine",
            "pronunciation": "mu-seo",
            "hint": "Hinde Ulu: -zeo; Nganyawa: -cheo"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ĩĩ / Nĩw'o\" mean in English?",
            "correctAnswer": "Yes",
            "options": [
              "No",
              "My name is...",
              "Yes",
              "Come here"
            ],
            "hint": "Hinde Ulu: newua; Nganyawa: nigwo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aiee / Nde\" mean in English?",
            "correctAnswer": "No",
            "options": [
              "My name is...",
              "No",
              "Yes",
              "Come here"
            ],
            "hint": "Hinde: ndi / aiyee"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Wĩtawa ata?\" mean in English?",
            "correctAnswer": "What is your name?",
            "options": [
              "My name is...",
              "Where are you going?",
              "What is your name?",
              "Where do you come from?"
            ],
            "hint": "Hinde Ulu: wita wata?"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"What is your name?\" in Kamba?",
            "correctAnswer": "Wĩtawa ata?",
            "options": [
              "Wĩtawa ata?",
              "Ĩĩ",
              "Aiee",
              "Nĩtawa..."
            ],
            "hint": "wee-tah-wah ah-tah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"My name is...\" in Kamba?",
            "correctAnswer": "Nĩtawa...",
            "options": [
              "Ĩĩ",
              "Nĩtawa...",
              "Aiee",
              "Wĩtawa ata?"
            ],
            "hint": "nee-tah-wah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where are you going?\" in Kamba?",
            "correctAnswer": "Ũthĩ naku?",
            "options": [
              "Aiee",
              "Ũthĩ naku?",
              "Wĩtawa ata?",
              "Ĩĩ"
            ],
            "hint": "oo-thee nah-koo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Ĩĩ / Nĩw'o: Yes, Aiee / Nde: No, Wĩtawa ata?: What is your name?, Nĩtawa...: My name is...",
            "pairs": [
              {
                "left": "Ĩĩ / Nĩw'o",
                "right": "Yes"
              },
              {
                "left": "Aiee / Nde",
                "right": "No"
              },
              {
                "left": "Wĩtawa ata?",
                "right": "What is your name?"
              },
              {
                "left": "Nĩtawa...",
                "right": "My name is..."
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Yes\" in Kamba (Kĩkamba).",
            "correctAnswer": "Ĩĩ",
            "options": [
              "Aiee",
              "Wĩtawa ata?",
              "Nĩtawa...",
              "Ĩĩ"
            ],
            "hint": "ee-ee / nee-woh",
            "acceptedAnswers": [
              "Ĩĩ / Nĩw'o",
              "Ĩĩ"
            ]
          }
        ]
      },
      {
        "id": "kamba-exp-phrases-2",
        "title": "Common Phrases (Part 2)",
        "icon": "Droplets",
        "description": "Master Kamba (Kĩkamba) common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Vindya' (Be quiet), 'Thi / Enda' (Go away / Leave), 'Kũtĩ ũthũku' (All is well), 'Ng'o yakwa' (Myself).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Vindya",
            "source": "Be quiet",
            "pronunciation": "vindya",
            "hint": "Hinde Ulu: pindia; Nganyawa: monakilongo"
          },
          {
            "target": "Thi",
            "source": "Go away",
            "pronunciation": "thi / enda",
            "hint": "Hinde Ulu: eenda or thi"
          },
          {
            "target": "Enda",
            "source": "Leave",
            "pronunciation": "thi / enda",
            "hint": "Hinde Ulu: eenda or thi"
          },
          {
            "target": "Kũtĩ ũthũku",
            "source": "All is well",
            "pronunciation": "ku-ti uthu-ku",
            "hint": "Literally 'there is no evil / trouble'"
          },
          {
            "target": "Ng'o yakwa",
            "source": "Myself",
            "pronunciation": "ng'o yakwa"
          },
          {
            "target": "Ng'o sitũ",
            "source": "Ourselves",
            "pronunciation": "ng'o si-tu"
          },
          {
            "target": "Kwa mũuo",
            "source": "Peacefully / Sweetly",
            "pronunciation": "kwa muuo"
          }
        ],
        "sentences": [
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          },
          {
            "target": "Mũndũ mũka nũũkua kĩw'ũ na mbisu.",
            "source": "The woman is carrying water with a pot."
          },
          {
            "target": "Mũũnda witũ wĩ na mbemba mbingĩ.",
            "source": "Our farm has plenty of maize."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Vindya\" mean in English?",
            "correctAnswer": "Be quiet",
            "options": [
              "Go away",
              "All is well",
              "Myself",
              "Be quiet"
            ],
            "hint": "Hinde Ulu: pindia; Nganyawa: monakilongo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Thi\" mean in English?",
            "correctAnswer": "Go away",
            "options": [
              "All is well",
              "Myself",
              "Be quiet",
              "Go away"
            ],
            "hint": "Hinde Ulu: eenda or thi",
            "acceptedAnswers": [
              "Go away / Leave",
              "Go away"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũtĩ ũthũku\" mean in English?",
            "correctAnswer": "All is well",
            "options": [
              "Myself",
              "Be quiet",
              "Go away",
              "All is well"
            ],
            "hint": "Literally 'there is no evil / trouble'"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"All is well\" in Kamba?",
            "correctAnswer": "Kũtĩ ũthũku",
            "options": [
              "Vindya",
              "Kũtĩ ũthũku",
              "Thi",
              "Ng'o yakwa"
            ],
            "hint": "koo-tee oo-thoo-koo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Myself\" in Kamba?",
            "correctAnswer": "Ng'o yakwa",
            "options": [
              "Vindya",
              "Thi",
              "Kũtĩ ũthũku",
              "Ng'o yakwa"
            ],
            "hint": "ngoh yah-kwah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ourselves\" in Kamba?",
            "correctAnswer": "Ng'o sitũ",
            "options": [
              "Thi",
              "Ng'o sitũ",
              "Kũtĩ ũthũku",
              "Vindya"
            ],
            "hint": "ngoh see-too"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Vindya: Be quiet, Thi / Enda: Go away / Leave, Kũtĩ ũthũku: All is well, Ng'o yakwa: Myself",
            "pairs": [
              {
                "left": "Vindya",
                "right": "Be quiet"
              },
              {
                "left": "Thi / Enda",
                "right": "Go away / Leave"
              },
              {
                "left": "Kũtĩ ũthũku",
                "right": "All is well"
              },
              {
                "left": "Ng'o yakwa",
                "right": "Myself"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Be quiet\" in Kamba (Kĩkamba).",
            "correctAnswer": "Vindya",
            "options": [
              "Vindya",
              "Thi",
              "Kũtĩ ũthũku",
              "Ng'o yakwa"
            ],
            "hint": "veen-dyah"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-16",
    "unitNumber": 16,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Kamba (Kĩkamba) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-pd-corpus-16-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Kamba (Kĩkamba) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Kamba (Kĩkamba) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "wa téne",
            "source": "Old",
            "pronunciation": "wa te-ne",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kikámba adj.)"
          },
          {
            "target": "mweu (nsau)",
            "source": "White / Pure",
            "pronunciation": "mweu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kikámba adj.)"
          },
          {
            "target": "téne",
            "source": "Ancient",
            "pronunciation": "te-ne",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kikámba adj.)"
          },
          {
            "target": "ūni (Ulu) / ōni (Nganyawa)",
            "source": "to-morrow",
            "pronunciation": "uni / oni",
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)"
          },
          {
            "target": "etēēla (Ulu) / killia (Nganyawa)",
            "source": "soon",
            "pronunciation": "e-tee-la / killia",
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)"
          },
          {
            "target": "muthenia miingi (Ulu) / mthee nyongi (Nganyawa)",
            "source": "often",
            "pronunciation": "muthe-nia miingi / mthee nyongi",
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)"
          },
          {
            "target": "oiyuyu (Ulu) / indino (Nganyawa)",
            "source": "now",
            "pronunciation": "oi-yu-yu / indi-no",
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)"
          },
          {
            "target": "kwatier (Ulu) / chioko (Nganyawa)",
            "source": "early",
            "pronunciation": "kwa-tier / chio-ko",
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"wa téne\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Old",
            "options": [
              "White",
              "Ancient",
              "to-morrow",
              "Old"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kikámba adj.)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kamba (Kĩkamba) term to its English meaning:",
            "correctAnswer": "wa téne: Old",
            "pairs": [
              {
                "left": "wa téne",
                "right": "Old"
              },
              {
                "left": "mweu (nsau)",
                "right": "White / Pure"
              },
              {
                "left": "téne",
                "right": "Ancient"
              },
              {
                "left": "ūni (Ulu) / ōni (Nganyawa)",
                "right": "to-morrow"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kamba (Kĩkamba) term for \"soon\": ___",
            "correctAnswer": "etēēla",
            "options": [
              "wa téne",
              "mweu",
              "téne",
              "etēēla"
            ],
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)",
            "acceptedAnswers": [
              "etēēla (Ulu) / killia (Nganyawa)",
              "etēēla"
            ]
          }
        ]
      },
      {
        "id": "kamba-pd-corpus-16-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Kamba (Kĩkamba) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Kamba (Kĩkamba) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "muthenia monthe (Ulu)",
            "source": "Always",
            "pronunciation": "muthe-nia monthe / ma-tu-ku onthe",
            "hint": "Hildegarde Hinde (1904) — Kamba"
          },
          {
            "target": "matuku onthe",
            "source": "Every day",
            "pronunciation": "muthe-nia monthe / ma-tu-ku onthe",
            "hint": "Hildegarde Hinde (1904) — Kamba"
          },
          {
            "target": "King'ole",
            "source": "Supreme communal tribunal assembly",
            "pronunciation": "king'o-le",
            "hint": "C. W. Hobley (1910) & Charles Dundas (1915)"
          },
          {
            "target": "Mbai ya Mu Tui (Mu Sii, Mu Mui)",
            "source": "Mu Tui ancestral clan and sub-clans",
            "pronunciation": "mbai ya mu tui",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 63"
          },
          {
            "target": "Wakia!",
            "source": "Greeting from an elder to a young girl (Muitu)",
            "pronunciation": "wa-kia",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 52"
          },
          {
            "target": "Oponiao!",
            "source": "Greeting from an elder to a young warrior (Anake)",
            "pronunciation": "o-po-niao",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 52"
          },
          {
            "target": "Nosio! — Ah!",
            "source": "Elder's greeting to a child and respectful reply",
            "pronunciation": "no-sio — ah",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 52"
          },
          {
            "target": "Waiya! — Waiya!",
            "source": "Mutual greeting between young warriors (Anake)",
            "pronunciation": "wai-ya — wai-ya",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 52"
          },
          {
            "target": "Umuvoo? — Inimuvoo!",
            "source": "How are you? — I am well! (Adult salutation)",
            "pronunciation": "u-mu-voo — i-ni-mu-voo",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 52"
          }
        ],
        "sentences": [
          {
            "target": "Umuvoo? — Inimuvoo!",
            "source": "How are you? — I am well!"
          },
          {
            "target": "Oponiao! — Ah! | Wakia! — Ah! | Waiya! — Waiya!",
            "source": "Elder to young warrior (Anake) — Reply | Elder to young girl (Muitu) — Reply | Mutual greeting between Anake."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"muthenia monthe\" in Kamba?",
            "correctAnswer": "Always",
            "options": [
              "Always",
              "Every day",
              "How are you?",
              "Supreme communal tribunal assembly"
            ],
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)",
            "acceptedAnswers": [
              "Always / Every day",
              "Always"
            ]
          },
          {
            "type": "multiple_choice",
            "prompt": "In C. W. Hobley's Ethnology of A-Kamba (1910, p. 64), which three sub-clans belong to the ancestral \"Mu Tui\" (iron-smith) clan?",
            "correctAnswer": "Mu Sii",
            "options": [
              "Wakia",
              "Mu Sii",
              "Kivisi",
              "Mwa"
            ],
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes, p. 64",
            "acceptedAnswers": [
              "Mu Sii, Mu Mui, and Mwa-Ithangwa",
              "Mu Sii"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kamba salutation or institution from Hobley (1910, pp. 52, 64, 78) with its meaning:",
            "correctAnswer": "Umuvoo? — Inimuvoo!: Adult salutation ('How are you? — I am well!')",
            "pairs": [
              {
                "left": "Umuvoo? — Inimuvoo!",
                "right": "Adult salutation ('How are you? — I am well!')"
              },
              {
                "left": "Wakia! — Ah!",
                "right": "Elder's greeting to a young girl (Muitu) and reply"
              },
              {
                "left": "Oponiao! — Ah!",
                "right": "Elder's greeting to a young warrior (Anake) and reply"
              },
              {
                "left": "Waiya! — Waiya!",
                "right": "Mutual salutation between young warriors (Anake)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kamba greeting spoken by an elder to a young warrior (Anake) in Hobley (1910, p. 52): ___",
            "correctAnswer": "Oponiao!",
            "options": [
              "muthenia monthe",
              "King'ole",
              "Oponiao!",
              "matuku onthe"
            ],
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes, p. 52"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-17",
    "unitNumber": 17,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Kamba (Kĩkamba) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-open-dataset-17-1",
        "title": "Social Grades (Kivisi to Atumia ma Ithembo) & Ecological Lexicon",
        "icon": "Home",
        "description": "Learn the eight traditional Akamba male and female life-stages (Hobley 1910, p. 49) and natural history terminology (pp. 22–26).",
        "tips": "In Chapter IX of Ethnology of A-Kamba (1910, p. 49), Hobley tabulates the parallel male and female life-stages from birth (Kana / Kahengi) through Kivisi/Muitu, Mwanake/Mundu mukaa, Nthele/Kipeti, and Mutumia to the senior Atumia ma Nzama and Atumia ma Ithembo.",
        "words": [
          {
            "target": "Kivisi (pl. Nisi)",
            "source": "Uncircumcised boy",
            "pronunciation": "ki-vi-si",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 49"
          },
          {
            "target": "Muitu (pl. Weitu)",
            "source": "Young unmarried girl",
            "pronunciation": "mui-tu / mu-ndu mu-kaa",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 49"
          },
          {
            "target": "Mundu mukaa",
            "source": "maiden",
            "pronunciation": "mui-tu / mu-ndu mu-kaa",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 49"
          },
          {
            "target": "Mwanake (pl. Anake)",
            "source": "Circumcised young man or warrior",
            "pronunciation": "mwa-na-ke",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 49"
          },
          {
            "target": "Nthele (pl. Anthele)",
            "source": "Married man with children (below elder council rank)",
            "pronunciation": "nthe-le",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 49"
          },
          {
            "target": "Kipeti (pl. Ipeti) vs. Ngungu",
            "source": "Married woman with children vs. childless married woman",
            "pronunciation": "ki-pe-ti / ngu-ngu",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 49"
          },
          {
            "target": "Mutumia wa Kisuka → Mutumia wa Nzama → Mutumia wa Ithembo (fem. Mukuu)",
            "source": "Junior elder (bereavement council) → Judicial council elder → Senior shrine elder",
            "pronunciation": "mu-tu-mia wa ki-su-ka / nza-ma / i-the-mbo / mu-kuu",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 49"
          },
          {
            "target": "Muthwa (queen: Munthai)",
            "source": "White ants / termites (and queen termite Munthai)",
            "pronunciation": "muthwa / mu-nthai",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 25"
          },
          {
            "target": "Nzuki (queen: Mulue)",
            "source": "Honeybees (and queen bee Mulue)",
            "pronunciation": "nzu-ki / mu-lue",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 25"
          }
        ],
        "sentences": [
          {
            "target": "Kivisi → Mwanake → Nthele → Mutumia wa Kisuka → Mutumia wa Nzama → Mutumia wa Ithembo.",
            "source": "Boy → Young warrior → Married householder → Bereavement-council elder → Judicial-council elder → Sacred grove elder ."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kamba (Kĩkamba) social grade or insect term from Hobley (1910, pp. 25, 49) to its English meaning:",
            "correctAnswer": "Kivisi (pl. Nisi): Uncircumcised boy",
            "pairs": [
              {
                "left": "Kivisi (pl. Nisi)",
                "right": "Uncircumcised boy"
              },
              {
                "left": "Mwanake (pl. Anake)",
                "right": "Young man or warrior"
              },
              {
                "left": "Nthele (pl. Anthele)",
                "right": "Married man with children"
              },
              {
                "left": "Muthwa (queen: Munthai)",
                "right": "White ants / termites (and queen termite)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kamba (Kĩkamba) term for the queen honeybee (\"Nzuki\") in Hobley (1910, p. 25): ___",
            "correctAnswer": "Mulue",
            "options": [
              "Mulue",
              "Munthai",
              "Kipeti",
              "Nthele"
            ],
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, p. 25"
          }
        ]
      },
      {
        "id": "kamba-open-dataset-17-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Kamba (Kĩkamba) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Kamba (Kĩkamba) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "Thingii",
            "source": "Black ants (ponera)",
            "pronunciation": "thingii",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes, p. 25"
          },
          {
            "target": "Nthuaku",
            "source": "Soldier ants (siafu)",
            "pronunciation": "nthua-ku",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes, p. 25"
          },
          {
            "target": "Ngia (hopper stage: Kititi)",
            "source": "Locusts (and immature hopper stage Kititi)",
            "pronunciation": "ngi-a / ki-ti-ti",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes, p. 25"
          },
          {
            "target": "Chambulutwa",
            "source": "Butterfly and Moth",
            "pronunciation": "chambu-lutwa",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes, p. 25"
          },
          {
            "target": "Yamu",
            "source": "Hairy caterpillar",
            "pronunciation": "ya-mu",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes, p. 25"
          },
          {
            "target": "Mangña (Ulu) / Maseo (Kitui)",
            "source": "Hagedash Ibis (sacred augury bird)",
            "pronunciation": "ma-ngnya / ma-se-o",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes, p. 24"
          },
          {
            "target": "Isau",
            "source": "Marabou stork",
            "pronunciation": "i-sau",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes, p. 24"
          },
          {
            "target": "Ngoto",
            "source": "Lesser bustard",
            "pronunciation": "ngo-to",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes, p. 24"
          }
        ],
        "sentences": [
          {
            "target": "Ngia (hopper stage: Kititi)",
            "source": "Locusts (and hopper stage Kititi)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Thingii\" in Kamba?",
            "correctAnswer": "Black ants",
            "options": [
              "Black ants",
              "Soldier ants",
              "Locusts",
              "Butterfly and Moth"
            ],
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes, p. 25",
            "acceptedAnswers": [
              "Black ants (ponera)",
              "Black ants"
            ]
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kamba (Kĩkamba) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Thingii: Black ants (ponera)",
            "pairs": [
              {
                "left": "Thingii",
                "right": "Black ants (ponera)"
              },
              {
                "left": "Nthuaku",
                "right": "Soldier ants (siafu)"
              },
              {
                "left": "Ngia (hopper stage: Kititi)",
                "right": "Locusts (and immature hopper stage Kititi)"
              },
              {
                "left": "Chambulutwa",
                "right": "Butterfly and Moth"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kamba (Kĩkamba) term for \"Hairy caterpillar\": ___",
            "correctAnswer": "Yamu",
            "options": [
              "Mangña",
              "Thingii",
              "Yamu",
              "Nthuaku"
            ],
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes, p. 25"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-18",
    "unitNumber": 18,
    "title": "Hobley Ethnology of A-Kamba",
    "description": "Master the complete cultural, artistic, calendar, and legal lexicon of C. W. Hobley's 'Ethnology of A-Kamba and Other East African Tribes' (Cambridge University Press, 1910).",
    "icon": "Sparkles",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-hobley-1910-crafts-calendar-riddles-18-1",
        "title": "Ibila Stools (8 Milia Patterns), 8 Musical Instruments, 11",
        "icon": "Music",
        "description": "Study the 5 stool woods, 8 wire-inlay patterns (Milia), 8 musical instruments, 11-month calendar, and 5 Kweta ndai riddles recorded by Hobley (1910, pp. 30–38, 52–55).",
        "tips": "In Chapter VII (pp. 35–38), Hobley documents how Kamba elders carve stools (Ibila, sg. Kivila) from 5 woods (Kiwazi/Muasi, Muinga, Kivuti, Mana, Mutungu) and inlay coiled brass and iron wire in 8 named symmetry patterns (Milia). In Chapter X (pp. 53–54), he records the 11 months (Mwa to Mubiu) and 5 Kweta ndai riddles.",
        "words": [
          {
            "target": "Ibila (sg. Kivila)",
            "source": "Carved three-legged stool",
            "pronunciation": "ibila"
          },
          {
            "target": "5 Woods: Kiwazi (Muasi), Muinga, Kivuti, Mana, Mutungu",
            "source": "5 traditional stool-carving woods",
            "pronunciation": "5-woods-kiwazi"
          },
          {
            "target": "8 Milia Patterns: Kithaitha, Vioo, Eumu, Kitui, Katungi, Keinga, Kizoro",
            "source": "Eight named brass/copper/iron wire-inlay designs on Kamba elders' stools",
            "pronunciation": "8-milia-patterns-kithaitha",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, Ch. VII, pp. 36–38"
          },
          {
            "target": "Mbebe, Soo, Nguli, Zomali, Kithembi, Ngutha, Engoma, Muvungu (Cha)",
            "source": "Eight Kamba musical instruments: horn, war horn, small horn, flute, drum, bow-lute",
            "pronunciation": "mbebe",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, Ch. VI, pp. 30–31"
          },
          {
            "target": "11 Months: 1. Mwa, 2. Wima, 3. Wiu, 4. Mweu, 5. Onkonono, 6. Thandatu",
            "source": "The 11 traditional Kamba months and the 2 rainy seasons (Oct–Dec & Mar–May)",
            "pronunciation": "11-months-1-mwa",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, Ch. X, p. 53"
          },
          {
            "target": "Kweta ndai: (1) Nduma — Muumbi",
            "source": "Five Kamba riddles: (1) Clouds hiding moon",
            "pronunciation": "kweta-ndai-nduma-muumbi"
          },
          {
            "target": "(2) O-Selia — Kimbu",
            "source": "(2) Chameleon",
            "pronunciation": "o-selia-kimbu"
          },
          {
            "target": "(3) Mwetu etiki — Kulotoi",
            "source": "(3) Mirage",
            "pronunciation": "mwetu-etiki-kulotoi"
          },
          {
            "target": "(4) Tuna Kwatana — Nzia na nzia",
            "source": "(4) Crossing paths",
            "pronunciation": "tuna-kwatana-nzia-na"
          },
          {
            "target": "(5) Wo wiwa — Kinto Kitheo",
            "source": "(5) Bare earth patch",
            "pronunciation": "wo-wiwa-kinto-kitheo"
          }
        ],
        "sentences": [
          {
            "target": "Kweta ndai! — O-Selia? — Kimbu. | Tuna Kwatana? — Nzia na nzia.",
            "source": "Tell a riddle! — What goes first forward and then backward? — The chameleon. | We take hold of one another? — One path crossing another."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each Kamba cultural set from Hobley (1910) with its exact definition:",
            "correctAnswer": "Kithaitha, Vioo, Eumu, Kitui, Katungi, Keinga, Kizoro: Named wire-inlay patterns (Milia) on elders' stools (pp. 36–38)",
            "pairs": [
              {
                "left": "Kithaitha, Vioo, Eumu, Kitui, Katungi, Keinga, Kizoro",
                "right": "Named wire-inlay patterns (Milia) on elders' stools (pp. 36–38)"
              },
              {
                "left": "Kiwazi (Muasi), Muinga, Kivuti, Mana, Mutungu",
                "right": "Five traditional woods used to carve Ibila stools (p. 36)"
              },
              {
                "left": "Mwa, Wima, Wiu, Mweu, Onkonono... Mubiu",
                "right": "The 11 traditional Kamba months (p. 53)"
              },
              {
                "left": "Mwetu etiki — Kulotoi",
                "right": "Riddle #3: A girl you cannot catch up with — A mirage (p. 54)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the answer to Kamba Riddle #4 in Hobley (1910, p. 54): \"Tuna Kwatana?\" ('We take hold of one another?') — ___",
            "correctAnswer": "Nzia na nzia",
            "options": [
              "Muumbi",
              "Kimbu",
              "Nzia na nzia",
              "Kulotoi"
            ],
            "hint": "One path crossing another (Hobley 1910, p. 54)"
          }
        ]
      },
      {
        "id": "kamba-hobley-1910-nzaiko-law-religion-18-2",
        "title": "Nzaiko Initiation (27 Secret Words & Musai Sticks), Kithito",
        "icon": "Scale",
        "description": "Master the ceremonial vocabulary of Nzaikonini, Nzaikoneni & Mbabani (pp. 68–76), Kamba customary law & blood-money (pp. 77–84), religion & medicine (pp. 85–105), and the 6 Wano folktales (pp. 107–118).",
        "tips": "During Nzaiko initiation (Ch. XIII, pp. 68–76), initiates learn 27 ceremonial code words (e.g., Muoi 'sun', Kielelo 'moon', Ngai 'water', Kioni 'eye', Kiweto 'bow') and interpret pictographic Musai sticks. In Ch. XIV (pp. 77–84) and Appendix (4) (p. 168), Hobley documents the Kithito oath and blood-compensation (Kiti).",
        "words": [
          {
            "target": "Nzaikonini → Nzaikoneni (Mbavani) → Mbabani",
            "source": "First, Second & Third Kamba initiations",
            "pronunciation": "nzaikonini-nzaikoneni-mbabani"
          },
          {
            "target": "Musai (pl. Misai)",
            "source": "Pictographic carved riddle-stick",
            "pronunciation": "musai"
          },
          {
            "target": "Nzaiko Secret Lexicon: Muoi (sun), Kielelo (moon), Ngai (water), Kioni",
            "source": "Ceremonial code words taught to initiates during the Nzaiko seclusion",
            "pronunciation": "nzaiko-secret-lexicon-muoi",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, Ch. XIII, pp. 71–72"
          },
          {
            "target": "Kiti (Blood-Money): 11 cows & 1 bull (man) / 4 cows & 1 bull (woman)",
            "source": "Traditional homicide blood-compensation and peace-reconciliation sacrifice",
            "pronunciation": "ki-ti / ndi-u",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba, Ch. XIV, pp. 78–80"
          },
          {
            "target": "Kithito vs. Ndundu",
            "source": "Supreme Kamba oath-fetish vs. personal ordeal oath",
            "pronunciation": "kithito-vs-ndundu"
          },
          {
            "target": "Kingñoli",
            "source": "Communal tribunal against habitual criminals",
            "pronunciation": "kingñoli"
          },
          {
            "target": "Engai / Mulungu",
            "source": "Supreme Creator",
            "pronunciation": "engai"
          },
          {
            "target": "Aiimu",
            "source": "Ancestral spirits & grove shrine",
            "pronunciation": "aiimu"
          },
          {
            "target": "Mundu Mue",
            "source": "Diviner-healer & casting gourd",
            "pronunciation": "mundu-mue"
          },
          {
            "target": "Makwa & Thabu (purified by Ngondu)",
            "source": "Ritual taboos & herbal purification",
            "pronunciation": "makwa-thabu"
          }
        ],
        "sentences": [
          {
            "target": "Ku-ringa Kithito: \"Ethiwa nusembie... Kithito kiu nikimwue!\"",
            "source": "Swearing on the Kithito upon seven stones: \"If he has lied or stolen... may this Kithito strike him!\" ."
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-19",
    "unitNumber": 19,
    "title": "Lindblom The Akamba in British East Africa",
    "description": "Master the complete ethnographic, legal, religious, artistic, and material-culture lexicon of Gerhard Lindblom's 607-page monograph 'The Akamba in British East Africa' (2nd Ed., Enlarged, Uppsala 1918–1920).",
    "icon": "BookOpen",
    "color": "#FF9800",
    "skills": [
      {
        "id": "kamba-lindblom-1920-dialects-nzaiko-nthoni-19-1",
        "title": "4 Dialects, 12 Ethnonyms, 3 Nžaīko Initiations",
        "icon": "Users",
        "description": "Study Ukamba's 4 regional divisions, 12 neighbour ethnonyms, childbirth rites, the 3 Nžaīko initiations, marriage, the 11 Kwiūa name-taboo pairs, 7 women's words, and kinship terms (pp. 1–110, 569–574).",
        "tips": "In Chapters I–VII (pp. 9–110) and Addenda (pp. 569–574), Lindblom documents the 4 divisions (Ulu/Yulu, Kitui/Aþaisu, Kīkumbuliu, Mumonī), the 3 Nžaīko degrees (Kaβīu, Mbusīa with Musaī sticks Figs. 1–8 & sand drawings Figs. 9–16, and secret men's Mbæβanī), and the 11 Kwiūa in-law avoidance substitutions.",
        "words": [
          {
            "target": "kīma kīa nžavī (Donyo Sabuk)",
            "source": "The nžavī bean mountain",
            "pronunciation": "kīma-kīa-nžaī"
          },
          {
            "target": "mutītu wa ndeī (Mtoto Andei)",
            "source": "The vulture forest",
            "pronunciation": "mutītu-wa-ndeī"
          },
          {
            "target": "Ulu, Kitui, Kīkumbuliu & Mumonī",
            "source": "The 4 Kamba divisions and dialects",
            "pronunciation": "ulu"
          },
          {
            "target": "aswī",
            "source": "kīswī / uswīnī",
            "pronunciation": "aswī"
          },
          {
            "target": "1. nžaīko īla nīnī (kavīu / īekondə) → 2. nžaīko īla nænə → 3. nžaīko",
            "source": "The 3 Kamba initiations: knife circumcision, 7-day rhinoceros-roar initiation",
            "pronunciation": "1-nžaīko-īla-nīnī",
            "hint": "Gerhard Lindblom (1920) The Akamba in British East Africa, Ch. III, pp. 42–71 & Figs. 1–16"
          },
          {
            "target": "nðonī",
            "source": "In-law avoidance, 11 married women's name-taboo substitutions (pp. 93–94), and 7",
            "pronunciation": "nðonī",
            "hint": "Gerhard Lindblom (1920) The Akamba in British East Africa, Ch. V pp. 89–98 & Addenda p. 574"
          },
          {
            "target": "naū/tata/asa (au, īthə)",
            "source": "Kinship terms, young bride (ŋga-) & mother teknonym (sīo-) prefixes, flexed",
            "pronunciation": "naū",
            "hint": "Gerhard Lindblom (1920) The Akamba in British East Africa, Chs. VI–VII, pp. 99–110"
          }
        ],
        "sentences": [
          {
            "target": "Ni matindu ma andu ala ma tænə. | Nīnīonīə nðakamə nīnaolulə kana.",
            "source": "It is a custom handed down from our fathers . | I saw blood, I turned the child (olula kana rite, p. 34)."
          },
          {
            "target": "Kīumbu kī, nītukīə ukuvoīa, utunæŋgə wumbu wa uīkīīa asīŋgī!",
            "source": "O sacred wild fig tree (mumbu), we have come to pray to thee; give us milky sap to smear the novices! (5th day of the 2nd nžaīko, p. 55)."
          }
        ]
      },
      {
        "id": "kamba-lindblom-1920-clans-law-warfare-19-2",
        "title": "25+ Mbaī Clans & Brands",
        "icon": "Shield",
        "description": "Master the 25+ Kamba clans, totems, taboos, cattle/arrow/beehive marks, 5 meat-sharing grades of Atumīa, blood-money, Kīthītū & Ndundu oaths, 6 ordeals, Kīŋgolə, and the 3 war divisions (pp. 111–205).",
        "tips": "In Chapters VIII–XII (pp. 113–205), Lindblom documents the 23 Machakos clans & sub-clans, the 5 meat-sharing promotions (kukula/kukusa), the 7-stone kīþītū oath (Fig. 52), the 6 judicial ordeals, kīŋgolə lynch-law, and the 3 tactical war divisions (muena, ŋgīla, īta).",
        "words": [
          {
            "target": "mbaī",
            "source": "niamu īaku nī īaū?",
            "pronunciation": "mbaī"
          },
          {
            "target": "aæī",
            "source": "never swing a child",
            "pronunciation": "aæī"
          },
          {
            "target": "kīo",
            "source": "cattle brands, Figs. 17–22",
            "pronunciation": "kīo"
          },
          {
            "target": "mwatū beehive marks",
            "source": "Figs. 39–51",
            "pronunciation": "mwatū-beehive-marks"
          },
          {
            "target": "Nsīlī Law: Ulu man = 11 cows + 1 bull; Ulu woman = 4–5 cows + 1 bull",
            "source": "Homicide blood-money schedule in Ulu and Kitui, widow's 'cow of the broken bow'",
            "pronunciation": "nsi-li / ngo-mbe ia ndu-lo-ta / ngo-mbe ia wu-mo / mu-ko-e",
            "hint": "Gerhard Lindblom (1920) The Akamba in British East Africa, Ch. XI, pp. 154–161"
          },
          {
            "target": "6 Ordeals",
            "source": "kīthītū kīa kīvīu, lip needle, kīuma, ŋgunīko, mbæŋgolo, burning basket",
            "pronunciation": "6-ordeals"
          },
          {
            "target": "4 kīumo curses",
            "source": "revoked by kīathīmo",
            "pronunciation": "4-kīumo-curses"
          },
          {
            "target": "3 War Divisions: 1. muena, 2. ŋgīla (seizing cattle), 3. īta",
            "source": "Three tactical attack divisions, gazelle-horn war-flute, weapon purification",
            "pronunciation": "3-war-divisions-1",
            "hint": "Gerhard Lindblom (1920) The Akamba in British East Africa, Ch. XII, pp. 186–205 & Figs. 53–54"
          }
        ],
        "sentences": [
          {
            "target": "Mukancæŋga ŋgombə īmwə; nīkīsīoka kwænda īngī ītīna, ŋgaīwa nī kīu!",
            "source": "You shall flay a cow for me; if I come back and demand more afterwards, may I be eaten by this [kīthītū]! (Oath formula on 7 stones, p. 169)."
          },
          {
            "target": "Aka-vī, aka-vī, mæ-kuka, mæ-kuka! | Nītusæuvīə uta wa mwana.",
            "source": "The Masai, the Masai, they are coming, they are coming! (blown on the ŋgulī war-flute, p. 192) | We shall purify our son's bow ."
          }
        ],
        "authoredExercises": [
          {
            "type": "fill_blank",
            "prompt": "According to Lindblom (1920, pp. 118, 124), members of the lion-totem clans \"asī\" and \"amuī\" must never eat or touch ___ ('liver'):",
            "correctAnswer": "ītema",
            "options": [
              "ītema",
              "kīænī",
              "mukoə",
              "kīathīmo"
            ],
            "hint": "Gerhard Lindblom (1920) The Akamba in British East Africa, Ch. VIII, pp. 118, 124"
          }
        ]
      },
      {
        "id": "kamba-lindblom-1920-religion-medicine-calendar-19-3",
        "title": "Religion (Aīmu, Īthæmbo & Muluŋgu/Mumbī/Mwatwaŋgagī), Kuausīa",
        "icon": "Sparkles",
        "description": "Learn Kamba soul/breath dualism, sacred grove sacrifices, foreign spirit exorcism, Supreme Creator epithets, divination, epidemic expulsion, 17 ŋgondu substances, 45+ medicinal plants, 9 famines, and the 3 11-month calendars (pp. 207–354).",
        "tips": "In Chapters XIII–XIX (pp. 209–354), Lindblom documents Muluŋgu/Ŋgaī's epithets Mumbī ('Potter') and Mwatwaŋgagī ('Cleaver'), bow-and-gourd divination (kuausīa, Fig. 60), the unīka/mwītano epidemic arch, 17 ŋgondu purification herbs, 9 named famines (1836–1909), and 3 lists of the 11-month calendar.",
        "words": [
          {
            "target": "kīu (soul/shadow) vs. thaīu / mīæva (breath/life)",
            "source": "Soul vs. breath, ancestral spirits & sacred groves, exorcism dances, and Supreme",
            "pronunciation": "kīu-vs-þaīu",
            "hint": "Gerhard Lindblom (1920) The Akamba in British East Africa, Ch. XIII, pp. 209–253 & Figs. 55–59"
          },
          {
            "target": "kuausīa",
            "source": "uta musical bow + kītītī gourd with mbu pebbles, Fig. 60",
            "pronunciation": "kuausīa"
          },
          {
            "target": "ŋgomakomī woodpecker augury",
            "source": "6 directions: mīsīa, ŋguŋguo, īna, vwathī wa aumə, womu, vwathī wa aka",
            "pronunciation": "ŋgomakomī-woodpecker-augury"
          },
          {
            "target": "Odd number taboo",
            "source": "mwa & 7",
            "pronunciation": "odd-number-taboo"
          },
          {
            "target": "9 Historical Famines (īoa): 1. malakwə (1908–09), 2. muvuŋga / ŋgalī",
            "source": "The 9 named historical famines (1836–1909), 3 regional lists of the 11-month",
            "pronunciation": "9-historical-famines-1",
            "hint": "Gerhard Lindblom (1920) The Akamba in British East Africa, Chs. XVII–XVIII, pp. 338–342"
          }
        ],
        "sentences": [
          {
            "target": "Mumbī, we umbīə mwana uyu, umuīkīə næsa! | Mwænə mwīmu, osa nusu!",
            "source": "O Fashioner (Mumbī), Thou who hast fashioned this child, keep it well!  | Owner of the spirit, take a half-rupee!"
          }
        ]
      },
      {
        "id": "kamba-lindblom-1920-arts-economy-addenda-19-4",
        "title": "Dress, Teeth-Chipping & Bone False Teeth, 11 Instruments",
        "icon": "Hammer",
        "description": "Master Kamba dress, teeth-chipping (kuseuvīa maīo) & pegged false teeth, 11 musical instruments, games, the 13-part nyumba floor plan, archery & 7 traps, 28 livestock terms, beekeeping, iron/chain-making, and Addenda (pp. 355–607).",
        "tips": "In Parts IV–VI and Addenda (pp. 355–607, Figs. 64–167), Lindblom documents the 700-cylinder brass apron (kīmæŋgo), bone false teeth pegged into tooth roots, 11 musical instruments, the 13-part hut plan (Fig. 125), 7 traps (Figs. 134–138), 28 livestock terms (pp. 486–487), munīo S-link chains (Fig. 159), and the 3 basic color roots (p. 580).",
        "words": [
          {
            "target": "ua",
            "source": "stretched on kīvao",
            "pronunciation": "ua"
          },
          {
            "target": "muthīta",
            "source": "rear bifurcated tail, Fig. 77",
            "pronunciation": "muþīta"
          },
          {
            "target": "kīmæŋgo",
            "source": "4.5-lb apron of 700 brass nžalī cylinders, Fig. 78",
            "pronunciation": "kīmæŋgo"
          },
          {
            "target": "kīūīśī",
            "source": "mancala with ŋgaīə seeds",
            "pronunciation": "kīūīśī"
          },
          {
            "target": "20-sec Fire-Drilling",
            "source": "male ulīndī + female kīka, Fig. 126",
            "pronunciation": "20-sec-fire-drilling"
          },
          {
            "target": "maŋgī bird-arrows",
            "source": "Fig. 129",
            "pronunciation": "maŋgī-bird-arrows"
          },
          {
            "target": "ukī beer",
            "source": "nde mortar, kīkælə strainer, mwatīnə sausage fruit",
            "pronunciation": "ukī-beer"
          }
        ],
        "sentences": [
          {
            "target": "Tali, talita, katali, mbonge, kasonzo, moli, kanyange, ngila, ngilili, mwitango!",
            "source": "10-word children's counting-out rhyme recorded verbatim by Lindblom ."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each Kamba craft, trap, or architectural term from Lindblom (1920, pp. 373, 438, 473, 531) with its description:",
            "correctAnswer": "kīmæŋgo (made of ~700 nžalī cylinders, Fig. 78): Girl's 4.5-lb Kikumbuliu apron of brass wire cylinders",
            "pairs": [
              {
                "left": "kīmæŋgo (made of ~700 nžalī cylinders, Fig. 78)",
                "right": "Girl's 4.5-lb Kikumbuliu apron of brass wire cylinders"
              },
              {
                "left": "ulīndī (male drill) & kīka (female hearth, Fig. 126)",
                "right": "Fire-sticks that produce glowing tinder in 20 seconds"
              },
              {
                "left": "kītatī / kīsuŋgula (Fig. 138)",
                "right": "Hollow wooden cylinder noose-trap set inside a mole burrow"
              }
            ]
          }
        ]
      },
      {
        "id": "kamba-jones-freyer-2019-tone-melodies",
        "title": "Kĩkamba Four-Level Surface Tone & Five Stem Melodies",
        "icon": "Sparkles",
        "description": "Master Patrick Jones & Jake Freyer's (2019, Ch. 10, pp. 177–198, DOI: 10.5281/zenodo.3367138) reanalysis of Kĩkamba's 4 surface tone heights (H, L, Super-High, Super-Low) and 5 primary verbal stem melodies.",
        "tips": "In Jones & Freyer (2019, pp. 177–198, Tables 1–7, Ex. 1–16), Roberts-Kohno's 10 Kikamba verb melodies reduce to 5 compositional stem melodies ({LFV}, {HFV}, {HV2}, {HV2+HFV}, {HV2+LFV}) interacting with Final H Lowering (3SG & object focus), Long Retraction (-éét-ɛ̀), Assertive phrasal boundary tone Lφ, and floating suffixal tones {LSuf} & {HSuf}.",
        "words": [
          {
            "target": "ko-konȁ vs. ko-konà ma-i.ò (non-final Low)",
            "source": "to hit vs. to hit bananas",
            "pronunciation": "ko-konȁ-vs-ko-konà-ma-iò"
          },
          {
            "target": "ko-tálȁ (H-stem infinitive)",
            "source": "to count",
            "pronunciation": "ko-tálȁ"
          },
          {
            "target": "to-í-kon-ááng-á-â vs. to-í-kon-ááng-á-a̋ ma-i.ò",
            "source": "we do not usually hit vs. we do not usually hit bananas",
            "pronunciation": "to-í-ko-náá-ngá-â / to-í-ko-náá-ngá-a̋ ma-i-ò",
            "hint": "Patrick Jones & Jake Freyer (2019, Ch. 10, pp. 180–181, Ex. 2)"
          },
          {
            "target": "ko-kon-éét-ɛ̀ (Long Retraction in perfective)",
            "source": "Five compositional stem melodies replacing the 10-melody stipulation in Kikamba",
            "pronunciation": "LFV / HFV / HV2 / e-e-tɛ",
            "hint": "Patrick Jones & Jake Freyer (2019, Ch. 10, pp. 182–196, Tables 3–7 & Fig. 1)"
          }
        ],
        "sentences": [
          {
            "target": "ko-konȁ vs. ko-konà ma-i.ò",
            "source": "to hit (Super-Low in isolation) vs. to hit bananas (Low non-finally)."
          }
        ]
      },
      {
        "id": "kamba-open-datasets-corpus",
        "title": "Modern Agriculture, Gratitude & Community Life",
        "icon": "Database",
        "description": "Practice contemporary Kĩkamba vocabulary and expressions from the Thiomi Dataset (89,504 pairs, CC-BY-4.0), Kikamba First Corpus (Kitui, CC-BY-4.0), and Kamba Emotions Corpus (MIT).",
        "culturalNote": "Modern open Kĩkamba corpora developed by the Kitui Translation Team (kndomboi/kikamba-first-corpus), the Thiomi Consortium (Mutisya, Mugane et al. 2026), and LughaGen preserve authentic Machakos, Kitui, and Makueni usage across agriculture, emotions, and civic life.",
        "grammarTip": "Notice the 1st person singular present progressive prefix Nĩ-ngũ- in Nĩngũtana mũno ('I am very joyful/grateful') and the infinitive prefix Kũ- in Kũsũvĩa kiw'ũ ('to conserve water').",
        "words": [
          {
            "target": "Ũtethyo mũseo",
            "source": "Kind assistance / Good help",
            "pronunciation": "oo-teh-thyoh moo-seh-oh"
          },
          {
            "target": "Kũtana",
            "source": "To be joyful / happy / grateful",
            "pronunciation": "koo-tah-nah"
          },
          {
            "target": "Kũsũvĩa kiw'ũ",
            "source": "To conserve / protect water",
            "pronunciation": "koo-soo-vee-ah kee-woo"
          },
          {
            "target": "Mĩũnda yitũ",
            "source": "Our farms / gardens",
            "pronunciation": "mee-oo-ndah yee-too"
          },
          {
            "target": "Ĩvindanĩ ya sua",
            "source": "During the dry / sunny season",
            "pronunciation": "ee-vee-ndah-nee yah soo-ah"
          },
          {
            "target": "Mũimi (pl. Aĩmi)",
            "source": "Farmer",
            "pronunciation": "moo-ee-mee"
          },
          {
            "target": "Ũĩmi wa kisasa",
            "source": "Modern agriculture",
            "pronunciation": "oo-ee-mee wah kee-sah-sah"
          },
          {
            "target": "Mũuo na wĩw'ano",
            "source": "Peace and harmony",
            "pronunciation": "moo-oo-oh nah wee-wah-noh"
          }
        ],
        "sentences": [
          {
            "target": "Nĩngũtana mũno nĩ ũndũ wa ũtethyo waku mũseo.",
            "source": "I am very joyful and grateful for your kind assistance."
          },
          {
            "target": "Kũsũvĩa kiw'ũ ĩvindanĩ ya sua nĩkũtethasya mĩũnda yitũ.",
            "source": "Conserving water in the dry season sustains our farms."
          }
        ]
      },
      {
        "id": "kamba-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Kamba (Kĩkamba) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "The Thiomi Dataset Kikamba (CC-BY-4.0), Kikamba First Corpus (CC-BY-4.0), LughaGen Kikamba (CC-BY-SA-4.0), Mich-Seth Owusu Kamba Emotions & Kamba–Kikuyu Parallel Corpora (MIT/CC-BY-4.0), Language Science Press Kikamba Tone Corpus (2019, CC-BY-4.0), CLDF ASJP v20 & BantuBVD (CC-BY-4.0) & Public Domain & Peer-Reviewed Lexicons (Krapf 1850, Last 1885, Krapf, Rebmann & Sparshott 1887, Hinde 1904, Hobley 1910/1922, Dundas 1915, Johnston 1919, Lindblom 1920 & Jones/Freyer 2019).",
        "words": [
          {
            "target": "Ũvoo?",
            "source": "Hello",
            "pronunciation": "uvoo"
          },
          {
            "target": "amanni",
            "source": "Peace",
            "pronunciation": "a-manni"
          },
          {
            "target": "kédia",
            "source": "Greet",
            "pronunciation": "kedia"
          },
          {
            "target": "nenga muwéa",
            "source": "Thank",
            "pronunciation": "nenga muwea"
          },
          {
            "target": "báliki",
            "source": "Bless",
            "pronunciation": "baliki"
          },
          {
            "target": "kwendua",
            "source": "Please",
            "pronunciation": "kwendua"
          },
          {
            "target": "eka",
            "source": "Pardon",
            "pronunciation": "e-ka"
          },
          {
            "target": "udi na uwó",
            "source": "Farewell",
            "pronunciation": "udi na uwo"
          },
          {
            "target": "Nĩ mũvea",
            "source": "Thank you",
            "pronunciation": "nee moo-veh-ah moo-noh"
          },
          {
            "target": "o voo",
            "source": "Salutation",
            "pronunciation": "o voo"
          }
        ],
        "sentences": [
          {
            "target": "Nĩ mũvea",
            "source": "Thank you."
          },
          {
            "target": "O voo",
            "source": "Hello / Salutation."
          },
          {
            "target": "Ũtethyo mũseo",
            "source": "Compassion / Kindness / Helpfulness."
          },
          {
            "target": "nenga muwéa",
            "source": "Thank, v."
          }
        ]
      },
      {
        "id": "kamba-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Kamba (Kĩkamba) sentences for healthcare, transport, and community safety.",
        "culturalNote": "The Thiomi Dataset Kikamba (CC-BY-4.0), Kikamba First Corpus (CC-BY-4.0), LughaGen Kikamba (CC-BY-SA-4.0), Mich-Seth Owusu Kamba Emotions & Kamba–Kikuyu Parallel Corpora (MIT/CC-BY-4.0), Language Science Press Kikamba Tone Corpus (2019, CC-BY-4.0), CLDF ASJP v20 & BantuBVD (CC-BY-4.0) & Public Domain & Peer-Reviewed Lexicons (Krapf 1850, Last 1885, Krapf, Rebmann & Sparshott 1887, Hinde 1904, Hobley 1910/1922, Dundas 1915, Johnston 1919, Lindblom 1920 & Jones/Freyer 2019).",
        "words": [
          {
            "target": "imwe",
            "source": "One",
            "pronunciation": "imwe"
          },
          {
            "target": "thanthatu",
            "source": "Six",
            "pronunciation": "thanthatu"
          },
          {
            "target": "ekumi",
            "source": "Ten",
            "pronunciation": "e-ku-mi"
          },
          {
            "target": "ile",
            "source": "Two",
            "pronunciation": "ile"
          },
          {
            "target": "itanu",
            "source": "Five",
            "pronunciation": "itanu"
          },
          {
            "target": "inna",
            "source": "Four",
            "pronunciation": "inna"
          },
          {
            "target": "nusu",
            "source": "Half",
            "pronunciation": "nu-su"
          },
          {
            "target": "kenda",
            "source": "Nine",
            "pronunciation": "kenda"
          },
          {
            "target": "kakamwe / kimwe",
            "source": "Once",
            "pronunciation": "ka-kamwe"
          },
          {
            "target": "éli",
            "source": "Both",
            "pronunciation": "eli"
          }
        ],
        "sentences": []
      }
    ]
  }
];
