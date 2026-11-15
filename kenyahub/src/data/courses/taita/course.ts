import type { LanguageConfig, CourseUnit } from "../types";

export const TAITA_CONFIG: LanguageConfig = {
  "id": "taita",
  "name": "Taita",
  "nativeName": "Kidawida / Kisagala",
  "family": "Bantu",
  "counties": [
    "Taita-Taveta"
  ],
  "speakers": "350K",
  "speechLocale": "sw-KE",
  "description": "The Highland Coastal Bantu languages of the Taita Hills (Dabida, Sagala, and Kasigau) in Taita-Taveta County.",
  "color": "#0891B2",
  "sources": [
    "krapf-six-languages-1850",
    "shaw-pocket-vocabulary-taita-1885",
    "taylor-aphorisms-1891",
    "wray-taita-1894",
    "johnston-bantu-1919",
    "open-web-swadesh-comparative"
  ]
};

export const TAITA_UNITS: CourseUnit[] = [
  {
    "id": "taita-unit-1",
    "unitNumber": 1,
    "title": "Salutations, Wray’s 9 Noun Classes & Numerals 1–1,000",
    "description": "Master Kisagala and Kidawida salutations (Una maana? / Hodi! / Voro! Mzima? / Mwakucha!), Wray’s 9 noun classes (pp. 9–13), and counting 1–1,000 (pp. 20–24).",
    "icon": "BookOpen",
    "color": "#0891B2",
    "skills": [
      {
        "id": "taita-greetings-nouns",
        "title": "Taita Hills Salutations, 9 Noun Classes & Nature",
        "icon": "TreePine",
        "description": "Learn greetings and the 9 noun classes from Rev. J. A. Wray’s 1894 Taita Grammar (pp. 9–13, 115–116).",
        "tips": "Rev. J. Alfred Wray (1894, pp. 9–13) documents 9 noun classes in Kisagala, including Class VII Diminutives where both ka- and tu- are singular prefixes making their plural in vi- (kanyumba → vinyumba 'little house', tunguku → vinguku 'little fowl', tumwana → viwana 'little child'), whereas Johnston (1919 #14) records ka-/tu- (kanyonyi → tunyonyi) in Kidawida.",
        "culturalNote": "In Rev. J. Alfred Wray's 'An Elementary Introduction to the Taita Language' (1894, pp. 93, 114, 115–116), the complete Kisagala village salutation ('Hodi? — Hodi! karibu! Uka kitembo. Ufuma kwihi? — Nafuma kisirani. — Uvoro wa kisirani? — Ni 'gwaloli / Sikwesi. — Una maana? — Na maana. — Kukeja maana? — Kweja maana'), morning ('Walamsaje? — Nalamuka banana'), evening ('Wasindaje? — Nasinda banana'), and parting ('Ko mbole — Haya ko mbole, genda banana') greetings are recorded alongside the baobab-pod riddle 'Wada na wada—mwanangu agendele ujombani ela sauja. — Kilamba' and Shaw's (1885) 'Voro! — Voro! Mzima? — Mzima. — Ndo vidzo!'",
        "words": [
          {
            "target": "Una maana? — Na maana",
            "source": "Are you well? — I am well",
            "pronunciation": "una-maana-na-maana"
          },
          {
            "target": "Walamsaje? — Nalamuka banana",
            "source": "How did you wake? — I awoke well",
            "pronunciation": "walamsaje-nalamuka-banana"
          },
          {
            "target": "Wasindaje? — Nasinda banana",
            "source": "How have you spent the day? — I have spent it well",
            "pronunciation": "wasindaje-nasinda-banana"
          },
          {
            "target": "Ko mbole — Haya ko mbole, genda banana",
            "source": "Good-bye — All right, good-bye, go in peace",
            "pronunciation": "ko-mbole-haya-ko"
          },
          {
            "target": "Nagala ndam kalle maana — Aya! nawe gale banana",
            "source": "Goodbye, stay well — Yes! go well too (Parting salutations)",
            "pronunciation": "nagala-ndam-kalle-maana"
          },
          {
            "target": "mundu / mdu (pl. wandu) / m'gosi (pl. wa'gosi)",
            "source": "Person (pl. People) / Old man, elder, gentleman",
            "pronunciation": "mundu / mdu / m'go-si",
            "hint": "Wray (1894, pp. 9, 97, 108) Class I (m-/wa-)"
          },
          {
            "target": "mwanake (pl. waanake) / mchana (pl. wachana) / mtawana (pl. watawana)",
            "source": "Child / Young woman / Young man",
            "pronunciation": "mwa-na-ke / mcha-na / mta-wa-na",
            "hint": "Wray (1894, p. 9) Class I"
          },
          {
            "target": "meji (machi) / moto / ijua (pl. majua)",
            "source": "Water / Fire / Sun (or day)",
            "pronunciation": "me-ji / mo-to / i-jua",
            "hint": "Wray (1894, pp. 11–12) Class V"
          },
          {
            "target": "mwiti (pl. mīti) / nyumba (loc. nyumbeni kwangu)",
            "source": "Tree (pl. Trees) / House (in my house)",
            "pronunciation": "mwi-ti / nyumba",
            "hint": "Wray (1894, pp. 9–10, 13) Class II, III & Locative"
          },
          {
            "target": "kanyumba (pl. vinyumba) / tunguku (pl. vinguku) / tumwana (pl. viwana)",
            "source": "Little house / Little fowl / Little child (Class VII Diminutives)",
            "pronunciation": "kanyumba / tungu-ku / tumwa-na",
            "hint": "Wray (1894, pp. 12–13) ka- & tu- sg. → vi- pl. (Kidawida: kanyonyi → tunyonyi)"
          },
          {
            "target": "Mlungu",
            "source": "God, Supreme Creator",
            "pronunciation": "mlungu",
            "hint": "Wray (1894, p. 98) & Shaw (1885)"
          }
        ],
        "sentences": [
          {
            "target": "Hodi? — Hodi! karibu! Uka kitembo. Ufuma kwihi? — Nafuma kisirani. — Uvoro wa kisirani? — Ni 'gwaloli.",
            "source": "May I come in? — Come in! Come near! Sit down. Where do you come from? — I come from the hill-top. — What is the news from the hill-top? — It is"
          },
          {
            "target": "Wada na wada—mwanangu agendele ujombani ela sauja. — Kilamba.",
            "source": "A riddle, a riddle—my son went to the coast, he has not yet come back. — The seed vessel of the baobab tree (Wray 1894, pp. 93, 114)."
          }
        ]
      },
      {
        "id": "taita-numbers-verbs",
        "title": "Numerals 1–1,000, 7 Verb Derivatives & 13 Ideophones",
        "icon": "Hash",
        "description": "Count from 1 to 1,000 in Kisagala & Kidawida and master Wray’s 7 derivative verb stems (pp. 60–62) and 13 ideophones (pp. 75–76).",
        "tips": "Wray (1894, pp. 20–24) records Kisagala cardinals mosi/-moju (1), pili/mbili/-ili (2), tatu/ndatu (3), ine/-ne (4), sano (5), tandatu/ndandatu (6), mfungate (7), nane (8), ikenda (9), ikumi or afwa (10), mirongo miili or koruja (20/score), i'gana (100), and ma'gana ikumi (1,000), alongside all 13 adverbial enclitics (chwi, chululu, buu, lu, pi/fi, tse, doo, go, ku, tuku, ng'a, ng'we, ng'o, pp. 75–76).",
        "words": [
          {
            "target": "mosi (-moju), pili (mbili), tatu (ndatu), ine (-ne), sano",
            "source": "1, 2, 3, 4, 5",
            "pronunciation": "mo-si pi-li ta-tu ine sa-no",
            "hint": "Wray (1894, pp. 20–21) Kisagala & Johnston (1919 #14 Taita) Kidawida"
          },
          {
            "target": "tandatu (ndandatu), mfungate, nane, ikenda, ikumi / afwa",
            "source": "6, 7, 8, 9, 10 (mbuzi afwa = 10 goats)",
            "pronunciation": "tanda-tu mfunga-te na-ne i-kenda i-ku-mi / afwa",
            "hint": "Wray (1894, pp. 20–22)"
          },
          {
            "target": "-a hambiri (1st), -a kaili (2nd), -a katatu (3rd), -a mbale (last)",
            "source": "Ordinals & Adverbial Numerals",
            "pronunciation": "a hambi-ri a kai-li a ka-ta-tu a mba-le • ka-mo-ju kai-li",
            "hint": "Wray (1894, p. 23)"
          },
          {
            "target": "kushaia (to love) / kugora (to speak) / kudea (to do) / kulima (to",
            "source": "Core Class IX ku- Infinitive Verbs",
            "pronunciation": "kushaia / ku-go-ra / ku-dea / ku-li-ma",
            "hint": "Wray (1894, pp. 13, 27–62) paradigm verb kushaia"
          },
          {
            "target": "Nyamala chwi! / Mkundu lu / Onyilu pi (fi) / Omnyangi tse / Ikumi",
            "source": "Dead silent! / Bright red / Jet black / Snow white / Ten and only ten / Bone dry /",
            "pronunciation": "nyamala-chwi",
            "hint": "Wray (1894, pp. 75–76) 13 Ideophonic adverbial enclitics"
          }
        ],
        "sentences": [
          {
            "target": "Ta-na-dea’ga kazi; wa-na-lima’ga mgunda.",
            "source": "We do work continually; they are in the habit of cultivating the garden (Wray 1894, p. 60 Frequentative -na-...-a’ga)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"tandatu (ndandatu), mfungate, nane, ikenda, ikumi / afwa (Kidawida: irandadu, mfungade, wunyanya)\" in Taita?",
            "correctAnswer": "6, 7, 8, 9, 10 (mbuzi afwa = 10 goats)",
            "options": [
              "Ordinals & Adverbial Numerals",
              "Core Class IX ku- Infinitive Verbs",
              "6, 7, 8, 9, 10 (mbuzi afwa = 10 goats)",
              "1, 2, 3, 4, 5"
            ],
            "hint": "Wray (1894, pp. 20–22)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-a hambiri (1st), -a kaili (2nd), -a katatu (3rd), -a mbale (last) • kamoju (once), kaili (twice)\" in Taita?",
            "correctAnswer": "Ordinals & Adverbial Numerals",
            "options": [
              "Core Class IX ku- Infinitive Verbs",
              "Ordinals & Adverbial Numerals",
              "1, 2, 3, 4, 5",
              "6, 7, 8, 9, 10 (mbuzi afwa = 10 goats)"
            ],
            "hint": "Wray (1894, p. 23)"
          }
        ]
      }
    ]
  },
  {
    "id": "taita-unit-2",
    "unitNumber": 2,
    "title": "Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Taita (Kidawida) built directly from Rev. J. Alfred Wray (1894), Rev. A. Downes Shaw (1885), C. W. Hobley (1895), and Sir Harry H. Johnston (1919).",
    "icon": "Users",
    "color": "#0891B2",
    "skills": [
      {
        "id": "taita-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taita (Kidawida) (Kidaw'ida / Kisagala) in Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "mundu (pl. wandu)",
            "source": "Person / Human being",
            "pronunciation": "mundu",
            "hint": "Wray (1894), Shaw (1885) & Sakamoto (2003)"
          },
          {
            "target": "aba / baba",
            "source": "Father",
            "pronunciation": "aba / ba-ba",
            "hint": "Wray (1894) & Shaw (1885) — Ki-Taita"
          },
          {
            "target": "mao / mamo",
            "source": "Mother",
            "pronunciation": "mao / ma-mo",
            "hint": "Wray (1894) & Shaw (1885) — Ki-Taita"
          },
          {
            "target": "mwana (pl. wana)",
            "source": "Child",
            "pronunciation": "mwa-na",
            "hint": "Wray (1894) & Sakamoto (2003)"
          },
          {
            "target": "mume (pl. waume)",
            "source": "Man / Husband",
            "pronunciation": "mu-me",
            "hint": "Wray (1894) & Shaw (1885) — Ki-Taita"
          },
          {
            "target": "muka (pl. waka)",
            "source": "Woman / Wife",
            "pronunciation": "mu-ka",
            "hint": "Wray (1894) & Shaw (1885) — Ki-Taita"
          },
          {
            "target": "mghosi (pl. waghosi)",
            "source": "Elder",
            "pronunciation": "mgho-si",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "mbuya",
            "source": "Friend",
            "pronunciation": "mbu-ya",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "Mumbi (pl. Wambi)",
            "source": "Creator / Potter",
            "pronunciation": "mumbi",
            "hint": "Sakamoto (2003) — Kidawida"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mundu (pl. wandu)\" in Taita?",
            "correctAnswer": "Person / Human being",
            "options": [
              "Father",
              "Mother",
              "Child",
              "Person / Human being"
            ],
            "hint": "Wray (1894), Shaw (1885) & Sakamoto (2003)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"aba / baba\" in Taita?",
            "correctAnswer": "Father",
            "options": [
              "Mother",
              "Child",
              "Father",
              "Person / Human being"
            ],
            "hint": "Wray (1894) & Shaw (1885) — Ki-Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mao / mamo\" in Taita?",
            "correctAnswer": "Mother",
            "options": [
              "Child",
              "Mother",
              "Person / Human being",
              "Father"
            ],
            "hint": "Wray (1894) & Shaw (1885) — Ki-Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mother\" in Taita?",
            "correctAnswer": "mao / mamo",
            "options": [
              "mao / mamo",
              "mundu (pl. wandu)",
              "aba / baba",
              "mwana (pl. wana)"
            ],
            "hint": "mao / mamo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Child\" in Taita?",
            "correctAnswer": "mwana (pl. wana)",
            "options": [
              "mundu (pl. wandu)",
              "aba / baba",
              "mao / mamo",
              "mwana (pl. wana)"
            ],
            "hint": "mwana (pl. wana)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taita expression with its English meaning:",
            "correctAnswer": "mundu (pl. wandu): Person / Human being",
            "pairs": [
              {
                "left": "mundu (pl. wandu)",
                "right": "Person / Human being"
              },
              {
                "left": "aba / baba",
                "right": "Father"
              },
              {
                "left": "mao / mamo",
                "right": "Mother"
              },
              {
                "left": "mwana (pl. wana)",
                "right": "Child"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taita term for \"Man / Husband\": ___",
            "correctAnswer": "mume (pl. waume)",
            "options": [
              "mundu (pl. wandu)",
              "aba / baba",
              "mao / mamo",
              "mume (pl. waume)"
            ],
            "hint": "Wray (1894) & Shaw (1885) — Ki-Taita"
          }
        ]
      },
      {
        "id": "taita-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taita (Kidawida) (Kidaw'ida / Kisagala) in Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "zina (pl. mazina)",
            "source": "Name",
            "pronunciation": "zi-na",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "malasa",
            "source": "Adornment [for a bride]",
            "pronunciation": "ma-la-sa",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "mama",
            "source": "Aunt [the father's sister]",
            "pronunciation": "ma-ma",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "mwana mkoo",
            "source": "Baby",
            "pronunciation": "mwa-na mkoo",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "mwali",
            "source": "Bride",
            "pronunciation": "mwa-li",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "mlam",
            "source": "Brother-in-law",
            "pronunciation": "mlam",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "mzuri, mdu mbwaa",
            "source": "Chief",
            "pronunciation": "mzu-ri mdu mbwaa",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "kichuku, lukolo",
            "source": "Clan",
            "pronunciation": "kichu-ku lu-ko-lo",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "mchana",
            "source": "Daughter",
            "pronunciation": "mcha-na",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"zina (pl. mazina)\" in Taita?",
            "correctAnswer": "Name",
            "options": [
              "Adornment [for a bride]",
              "Aunt [the father's sister]",
              "Baby",
              "Name"
            ],
            "hint": "Wray (1894) — Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"malasa\" in Taita?",
            "correctAnswer": "Adornment [for a bride]",
            "options": [
              "Aunt [the father's sister]",
              "Baby",
              "Adornment [for a bride]",
              "Name"
            ],
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mama\" in Taita?",
            "correctAnswer": "Aunt [the father's sister]",
            "options": [
              "Baby",
              "Aunt [the father's sister]",
              "Name",
              "Adornment [for a bride]"
            ],
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Aunt [the father's sister]\" in Taita?",
            "correctAnswer": "mama",
            "options": [
              "mama",
              "zina (pl. mazina)",
              "malasa",
              "mwana mkoo"
            ],
            "hint": "mama"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Baby\" in Taita?",
            "correctAnswer": "mwana mkoo",
            "options": [
              "zina (pl. mazina)",
              "malasa",
              "mama",
              "mwana mkoo"
            ],
            "hint": "mwana mkoo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taita expression with its English meaning:",
            "correctAnswer": "zina (pl. mazina): Name",
            "pairs": [
              {
                "left": "zina (pl. mazina)",
                "right": "Name"
              },
              {
                "left": "malasa",
                "right": "Adornment [for a bride]"
              },
              {
                "left": "mama",
                "right": "Aunt [the father's sister]"
              },
              {
                "left": "mwana mkoo",
                "right": "Baby"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taita term for \"Bride\": ___",
            "correctAnswer": "mwali",
            "options": [
              "zina (pl. mazina)",
              "malasa",
              "mama",
              "mwali"
            ],
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          }
        ]
      }
    ]
  },
  {
    "id": "taita-unit-3",
    "unitNumber": 3,
    "title": "Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Taita (Kidawida) built directly from Rev. J. Alfred Wray (1894), Rev. A. Downes Shaw (1885), C. W. Hobley (1895), and Sir Harry H. Johnston (1919).",
    "icon": "Scale",
    "color": "#0891B2",
    "skills": [
      {
        "id": "taita-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taita (Kidawida) (Kidaw'ida / Kisagala) in Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "ikenda (Kisagala & Kidawida)",
            "source": "Nine",
            "pronunciation": "i-kenda",
            "hint": "Wray (1894, pp. 20–21) Kisagala & Johnston (1919 #14) / Sakamoto (2003) Kidawida"
          },
          {
            "target": "ikumi / afwa (e.g., mbuzi afwa ten goats, Wray 1894 p. 22)",
            "source": "Ten",
            "pronunciation": "i-ku-mi / afwa",
            "hint": "Wray (1894, pp. 20–22) Kisagala & Kidawida"
          },
          {
            "target": "ikumi na imweri",
            "source": "Eleven",
            "pronunciation": "i-ku-mi na imwe-ri",
            "hint": "CLDR (dav.xml) & Sakamoto (2003)"
          },
          {
            "target": "ikumi na iwi",
            "source": "Twelve",
            "pronunciation": "i-ku-mi na iwi",
            "hint": "CLDR (dav.xml) & Sakamoto (2003)"
          },
          {
            "target": "mosi / -moju (Kisagala) • imweri / -mweri (Kidawida)",
            "source": "One",
            "pronunciation": "mosi"
          },
          {
            "target": "pili / mbili / -ili (Kisagala) • iwi / -wi (Kidawida)",
            "source": "Two",
            "pronunciation": "pili"
          },
          {
            "target": "-ose, putu",
            "source": "All",
            "pronunciation": "ose pu-tu",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "irandadu",
            "source": "Kidawida",
            "pronunciation": "irandadu"
          },
          {
            "target": "-ose -ile",
            "source": "Both",
            "pronunciation": "ose ile",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          }
        ],
        "sentences": [
          {
            "target": "ikenda — ikumi",
            "source": "Nine — Ten"
          },
          {
            "target": "ikumi na imweri — ikumi na iwi",
            "source": "Eleven — Twelve"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ikenda\" mean in English?",
            "correctAnswer": "Nine",
            "options": [
              "Nine",
              "Ten",
              "Eleven",
              "Twelve"
            ],
            "hint": "Core vocabulary in Cardinal & Ordinal Numerals"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Ten\"",
            "correctAnswer": "ikumi",
            "acceptedAnswers": [
              "ikumi / afwa (e.g., mbuzi afwa ten goats, Wray 1894 p. 22)",
              "ikumi"
            ],
            "hint": "Starts with \"ik\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ikumi na imweri\"",
            "correctAnswer": "Eleven",
            "acceptedAnswers": [
              "Eleven",
              "Eleven"
            ],
            "hint": "Review Cardinal & Ordinal Numerals"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Cardinal & Ordinal Numerals with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ikenda",
                "right": "Nine"
              },
              {
                "left": "ikumi",
                "right": "Ten"
              },
              {
                "left": "ikumi na imweri",
                "right": "Eleven"
              },
              {
                "left": "ikumi na iwi",
                "right": "Twelve"
              },
              {
                "left": "mosi",
                "right": "One"
              }
            ]
          }
        ]
      },
      {
        "id": "taita-numbers-measures-trade-measures-3",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taita (Kidawida) (Kidaw'ida / Kisagala) in Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "-chache",
            "source": "Few",
            "pronunciation": "chache",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "mirongo misano",
            "source": "Fifty",
            "pronunciation": "mi-rongo mi-sa-no",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "mafiga",
            "source": "Fire-place, the three stones which support the pan",
            "pronunciation": "ma-fi-ga",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "mirongo mine",
            "source": "Forty",
            "pronunciation": "mi-rongo mi-ne",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "nusu, mbeo",
            "source": "Half",
            "pronunciation": "nu-su mbeo",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "i'gana",
            "source": "Hundred",
            "pronunciation": "i'ga-na",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "-ngi",
            "source": "Many",
            "pronunciation": "ngi",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "katatu",
            "source": "Third",
            "pronunciation": "ka-ta-tu",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "mirongo miili",
            "source": "Twenty",
            "pronunciation": "mi-rongo mii-li",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"-chache\" in Taita?",
            "correctAnswer": "Few",
            "options": [
              "Fifty",
              "Fire-place, the three stones which support the pan",
              "Forty",
              "Few"
            ],
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mirongo misano\" in Taita?",
            "correctAnswer": "Fifty",
            "options": [
              "Fire-place, the three stones which support the pan",
              "Forty",
              "Fifty",
              "Few"
            ],
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mafiga\" in Taita?",
            "correctAnswer": "Fire-place, the three stones which support the pan",
            "options": [
              "Forty",
              "Fire-place, the three stones which support the pan",
              "Few",
              "Fifty"
            ],
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fire-place, the three stones which support the pan\" in Taita?",
            "correctAnswer": "mafiga",
            "options": [
              "mafiga",
              "-chache",
              "mirongo misano",
              "mirongo mine"
            ],
            "hint": "mafiga"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Forty\" in Taita?",
            "correctAnswer": "mirongo mine",
            "options": [
              "-chache",
              "mirongo misano",
              "mafiga",
              "mirongo mine"
            ],
            "hint": "mirongo mine"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taita expression with its English meaning:",
            "correctAnswer": "-chache: Few",
            "pairs": [
              {
                "left": "-chache",
                "right": "Few"
              },
              {
                "left": "mirongo misano",
                "right": "Fifty"
              },
              {
                "left": "mafiga",
                "right": "Fire-place, the three stones which support the pan"
              },
              {
                "left": "mirongo mine",
                "right": "Forty"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taita term for \"Half\": ___",
            "correctAnswer": "nusu, mbeo",
            "options": [
              "-chache",
              "mirongo misano",
              "mafiga",
              "nusu, mbeo"
            ],
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          }
        ]
      }
    ]
  },
  {
    "id": "taita-unit-4",
    "unitNumber": 4,
    "title": "Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Taita (Kidawida) built directly from Rev. J. Alfred Wray (1894), Rev. A. Downes Shaw (1885), C. W. Hobley (1895), and Sir Harry H. Johnston (1919).",
    "icon": "Tractor",
    "color": "#0891B2",
    "skills": [
      {
        "id": "taita-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taita (Kidawida) (Kidaw'ida / Kisagala) in Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "kajo / chakuria",
            "source": "Food",
            "pronunciation": "ka-jo / cha-ku-ria",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "nyama",
            "source": "Meat",
            "pronunciation": "nya-ma",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "maziwa / mabela",
            "source": "Milk",
            "pronunciation": "ma-zi-wa / ma-be-la",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "iru (pl. maru)",
            "source": "Banana",
            "pronunciation": "iru",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "mabemba",
            "source": "Maize",
            "pronunciation": "ma-bemba",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "-rifu, ndifu, with nouns of the third class",
            "source": "Fat",
            "pronunciation": "ri-fu ndi-fu with nouns of the third class"
          },
          {
            "target": "-ishi; makes mbishi with nouns of the third class",
            "source": "Raw",
            "pronunciation": "ishi ma-kes mbishi with nouns of the third class"
          },
          {
            "target": "igi",
            "source": "Egg",
            "pronunciation": "igi"
          },
          {
            "target": "Ki-kwa; vi-kwa",
            "source": "Yam",
            "pronunciation": "ki kwa"
          }
        ],
        "sentences": [
          {
            "target": "kajo — nyama",
            "source": "Food — Meat"
          },
          {
            "target": "maziwa — iru",
            "source": "Milk — Banana"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kajo\" mean in English?",
            "correctAnswer": "Food",
            "options": [
              "Food",
              "Meat",
              "Milk",
              "Banana"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Meat\"",
            "correctAnswer": "nyama",
            "acceptedAnswers": [
              "nyama",
              "nyama"
            ],
            "hint": "Starts with \"ny\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"maziwa\"",
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
                "left": "kajo",
                "right": "Food"
              },
              {
                "left": "nyama",
                "right": "Meat"
              },
              {
                "left": "maziwa",
                "right": "Milk"
              },
              {
                "left": "iru",
                "right": "Banana"
              },
              {
                "left": "mabemba",
                "right": "Maize"
              }
            ]
          }
        ]
      },
      {
        "id": "taita-food-agriculture-crops-livestock-4",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous Taita crops (7 banana varieties, 9 sweet potato varieties, 5 sugar-cane varieties, maize & sorghum growth stages), cookery, and livestock terminology from Wray (1894).",
        "tips": "Wray (1894, pp. 80, 81, 87–88, 91, 96, 100, 111, 121) documents named Kisagala varieties of bananas (irugu / ndembo: kisukari, ilalyi, mzuu, chiana, mrabalu, kigulugulu, ikono lya njovu), sweet potatoes (ikaji, pl. makaji: Kipapa, Munjisoka, Nyagali, Kifumbe, Mserere, Marungura, Kisagai, Kitojo, Murizandata), sugar-cane (mugwa: Mcharo, Mkonokono, Nyamulambo, Nyakasoti, Muizu), and 9–10 growth stages of maize (ibemba) and sorghum (mwemba).",
        "culturalNote": "In Rev. J. Alfred Wray (1894, pp. 81, 91, 100, 125), boiled maize-meal bread is 'kinolo' and sorghum bread is 'kinaburi', native honey ('uki') comprises liquid honey ('ulonzi'), beeswax ('isungu'), brood ('mwana'), and underground stingless-bee honey ('mzata'), while traditional drinks include sugar-cane liquor ('mabangwa / njovi'), unfermented cane juice ('ulindi'), boiled sour milk ('maziwa, kivulala'), and maize gruel ('musa').",
        "words": [
          {
            "target": "irugu",
            "source": "Banana & 7 Taita banana varieties",
            "pronunciation": "i-ru-gu / ndembo",
            "hint": "Wray (1894, p. 80) Banana fruit, plant & 7 named varieties"
          },
          {
            "target": "nyama ya ng'ombe",
            "source": "Beef",
            "pronunciation": "nya-ma ya ng'ombe",
            "hint": "Wray (1894, p. 80) Beef"
          },
          {
            "target": "njovi / mabangwa",
            "source": "Beer & traditional Taita drinks",
            "pronunciation": "njo-vi / ma-bangwa / ma-ra-mi / u-lindi / mu-sa",
            "hint": "Wray (1894, pp. 80, 91) Beer & Drinks"
          },
          {
            "target": "ku-teleka, ku-isha (to boil over: ku-fura)",
            "source": "Boil, to (cook by boiling)",
            "pronunciation": "ku-teleka / ku-isha / ku-fura",
            "hint": "Wray (1894, p. 81) Boil, to"
          },
          {
            "target": "kishori",
            "source": "Bottle, water (calabash gourd)",
            "pronunciation": "kisho-ri",
            "hint": "Wray (1894, p. 81) Bottle, water"
          },
          {
            "target": "kinolo; from Kaffir corn [sorghum], kinaburi",
            "source": "Bread, from Indian meal boiled (or sorghum)",
            "pronunciation": "ki-no-lo / ki-na-bu-ri",
            "hint": "Wray (1894, p. 81) Bread"
          },
          {
            "target": "mafuta 'ga ng'ombe",
            "source": "Butter",
            "pronunciation": "ma-fu-ta 'ga ng'ombe",
            "hint": "Wray (1894, p. 82) Butter"
          },
          {
            "target": "manga",
            "source": "Cassava",
            "pronunciation": "manga"
          },
          {
            "target": "ikaji, pl. makaji",
            "source": "Sweet potato & 9 Taita varieties",
            "pronunciation": "ikaji"
          },
          {
            "target": "-ishi; makes mbishi with nouns of the third class",
            "source": "Raw, unripe, uncooked",
            "pronunciation": "ish-i / mbish-i",
            "hint": "Wray (1894, pp. 14, 113) Raw"
          }
        ],
        "sentences": [
          {
            "target": "Mabemba 'gafunya mguchu, 'gafuma, 'gadea kiala, 'gafahasa, 'ganyaza sombe, 'gafirihisa, 'galasa ndoo, 'gapuhura, 'gaoma.",
            "source": "Indian corn (maize) sprouts, the blade appears, forms a stalk, silk dries, and ripens fully through 9 stages (Wray 1894, pp. 87–88)."
          },
          {
            "target": "Kinolo ni leu lya mabemba; kinaburi ni leu lya mwemba.",
            "source": "Kinolo is boiled maize-meal bread; kinaburi is sorghum bread (Wray 1894, p. 81)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"irugu (plant: ndembo — kisukari, ilalyi, mzuu, chiana, mrabalu, kigulugulu, ikono lya njovu)\" mean in English?",
            "correctAnswer": "Banana & 7 Taita banana varieties",
            "options": [
              "Banana & 7 Taita banana varieties",
              "Beef",
              "Beer & traditional Taita drinks",
              "Boil, to (cook by boiling)"
            ],
            "hint": "Wray (1894, p. 80) Banana fruit, plant & 7 named varieties"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Beef\"",
            "correctAnswer": "nyama ya ng'ombe",
            "acceptedAnswers": [
              "nyama ya ng'ombe"
            ],
            "hint": "Starts with \"ny\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ku-teleka, ku-isha\"",
            "correctAnswer": "Boil, to (cook by boiling)",
            "acceptedAnswers": [
              "Boil, to (cook by boiling)",
              "Boil, to"
            ],
            "hint": "Wray (1894, p. 81)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "irugu (ndembo)",
                "right": "Banana & banana plant"
              },
              {
                "left": "nyama ya ng'ombe",
                "right": "Beef"
              },
              {
                "left": "njovi / mabangwa",
                "right": "Beer & sugar-cane liquor"
              },
              {
                "left": "ku-teleka, ku-isha",
                "right": "Boil, to (cook by boiling)"
              },
              {
                "left": "kinolo; kinaburi",
                "right": "Boiled maize & sorghum bread"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "taita-unit-5",
    "unitNumber": 5,
    "title": "Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Taita (Kidawida) built directly from Rev. J. Alfred Wray (1894), Rev. A. Downes Shaw (1885), C. W. Hobley (1895), and Sir Harry H. Johnston (1919).",
    "icon": "PawPrint",
    "color": "#0891B2",
    "skills": [
      {
        "id": "taita-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taita (Kidawida) (Kidaw'ida / Kisagala) in Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "mazi / machi",
            "source": "Water",
            "pronunciation": "ma-zi / machi",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "mdo / moto",
            "source": "Fire",
            "pronunciation": "mdo / mo-to",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "izuwa",
            "source": "Sun",
            "pronunciation": "i-zu-wa",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "mori (pl. miori)",
            "source": "Moon / Month",
            "pronunciation": "mo-ri",
            "hint": "CLDR (dav.xml) & Wray (1894)"
          },
          {
            "target": "nyota / ndondwa",
            "source": "Star",
            "pronunciation": "nyo-ta / ndondwa",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "mvula",
            "source": "Rain",
            "pronunciation": "mvu-la",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "mbeho",
            "source": "Wind / Cold",
            "pronunciation": "mbe-ho",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "mgondi / mlima",
            "source": "Mountain / Hill",
            "pronunciation": "mgondi / mli-ma",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "mdi (pl. midi)",
            "source": "Tree",
            "pronunciation": "mdi",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mazi / machi\" in Taita?",
            "correctAnswer": "Water",
            "options": [
              "Fire",
              "Sun",
              "Moon / Month",
              "Water"
            ],
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mdo / moto\" in Taita?",
            "correctAnswer": "Fire",
            "options": [
              "Sun",
              "Moon / Month",
              "Fire",
              "Water"
            ],
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"izuwa\" in Taita?",
            "correctAnswer": "Sun",
            "options": [
              "Moon / Month",
              "Sun",
              "Water",
              "Fire"
            ],
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sun\" in Taita?",
            "correctAnswer": "izuwa",
            "options": [
              "izuwa",
              "mazi / machi",
              "mdo / moto",
              "mori (pl. miori)"
            ],
            "hint": "izuwa"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Moon / Month\" in Taita?",
            "correctAnswer": "mori (pl. miori)",
            "options": [
              "mazi / machi",
              "mdo / moto",
              "izuwa",
              "mori (pl. miori)"
            ],
            "hint": "mori (pl. miori)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taita expression with its English meaning:",
            "correctAnswer": "mazi / machi: Water",
            "pairs": [
              {
                "left": "mazi / machi",
                "right": "Water"
              },
              {
                "left": "mdo / moto",
                "right": "Fire"
              },
              {
                "left": "izuwa",
                "right": "Sun"
              },
              {
                "left": "mori (pl. miori)",
                "right": "Moon / Month"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taita term for \"Star\": ___",
            "correctAnswer": "nyota / ndondwa",
            "options": [
              "mazi / machi",
              "mdo / moto",
              "izuwa",
              "nyota / ndondwa"
            ],
            "hint": "Wray (1894) — Taita"
          }
        ]
      },
      {
        "id": "taita-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taita (Kidawida) (Kidaw'ida / Kisagala) in Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "ighwe (pl. maghwe)",
            "source": "Stone / Rock",
            "pronunciation": "ighwe",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "isi / ntsi",
            "source": "Earth / Country",
            "pronunciation": "isi / ntsi",
            "hint": "Wray (1894) & CLDR (dav.xml)"
          },
          {
            "target": "ituku (pl. matuku)",
            "source": "Day",
            "pronunciation": "i-tu-ku",
            "hint": "CLDR (dav.xml) & Wray (1894)"
          },
          {
            "target": "kilo",
            "source": "Night",
            "pronunciation": "ki-lo",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "mto / mfereji",
            "source": "River / Stream",
            "pronunciation": "mto / mfe-re-ji",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "manena",
            "source": "Dew",
            "pronunciation": "ma-ne-na"
          },
          {
            "target": "tlyara",
            "source": "Fog",
            "pronunciation": "tlya-ra"
          },
          {
            "target": "mabodo",
            "source": "Mud",
            "pronunciation": "ma-bo-do"
          },
          {
            "target": "bahari",
            "source": "Sea",
            "pronunciation": "ba-ha-ri"
          }
        ],
        "sentences": [
          {
            "target": "ighwe — isi",
            "source": "Stone — Earth"
          },
          {
            "target": "ituku — kilo",
            "source": "Day — Night"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ighwe\" mean in English?",
            "correctAnswer": "Stone / Rock",
            "options": [
              "Stone / Rock",
              "Earth / Country",
              "Day",
              "Night"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Earth / Country\"",
            "correctAnswer": "isi",
            "acceptedAnswers": [
              "isi / ntsi",
              "isi"
            ],
            "hint": "Starts with \"is\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ituku\"",
            "correctAnswer": "Day",
            "acceptedAnswers": [
              "Day",
              "Day"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ighwe",
                "right": "Stone"
              },
              {
                "left": "isi",
                "right": "Earth"
              },
              {
                "left": "ituku",
                "right": "Day"
              },
              {
                "left": "kilo",
                "right": "Night"
              },
              {
                "left": "mto",
                "right": "River"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "taita-unit-6",
    "unitNumber": 6,
    "title": "The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Taita (Kidawida) built directly from Rev. J. Alfred Wray (1894), Rev. A. Downes Shaw (1885), C. W. Hobley (1895), and Sir Harry H. Johnston (1919).",
    "icon": "User",
    "color": "#0891B2",
    "skills": [
      {
        "id": "taita-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taita (Kidawida) (Kidaw'ida / Kisagala) in Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "chongo (pl. vyongo) / mtwe",
            "source": "Head",
            "pronunciation": "chongo / mtwe",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "righo / izo (pl. meso)",
            "source": "Eye",
            "pronunciation": "righo / izo",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "kutu (pl. matu)",
            "source": "Ear",
            "pronunciation": "ku-tu",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "mbula",
            "source": "Nose",
            "pronunciation": "mbu-la",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "momu / mlomo",
            "source": "Mouth",
            "pronunciation": "mo-mu / mlo-mo",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "igego (pl. magego)",
            "source": "Tooth",
            "pronunciation": "i-ge-go",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "lumi (pl. ndumi)",
            "source": "Tongue",
            "pronunciation": "lu-mi",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "mkono (pl. mikono)",
            "source": "Hand / Arm",
            "pronunciation": "mko-no",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "kighulu (pl. vighulu)",
            "source": "Leg / Foot",
            "pronunciation": "kighu-lu",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"chongo (pl. vyongo) / mtwe\" in Taita?",
            "correctAnswer": "Head",
            "options": [
              "Eye",
              "Ear",
              "Nose",
              "Head"
            ],
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"righo / izo (pl. meso)\" in Taita?",
            "correctAnswer": "Eye",
            "options": [
              "Ear",
              "Nose",
              "Eye",
              "Head"
            ],
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kutu (pl. matu)\" in Taita?",
            "correctAnswer": "Ear",
            "options": [
              "Nose",
              "Ear",
              "Head",
              "Eye"
            ],
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ear\" in Taita?",
            "correctAnswer": "kutu (pl. matu)",
            "options": [
              "kutu (pl. matu)",
              "chongo (pl. vyongo) / mtwe",
              "righo / izo (pl. meso)",
              "mbula"
            ],
            "hint": "kutu (pl. matu)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Taita?",
            "correctAnswer": "mbula",
            "options": [
              "chongo (pl. vyongo) / mtwe",
              "righo / izo (pl. meso)",
              "kutu (pl. matu)",
              "mbula"
            ],
            "hint": "mbula"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taita expression with its English meaning:",
            "correctAnswer": "chongo (pl. vyongo) / mtwe: Head",
            "pairs": [
              {
                "left": "chongo (pl. vyongo) / mtwe",
                "right": "Head"
              },
              {
                "left": "righo / izo (pl. meso)",
                "right": "Eye"
              },
              {
                "left": "kutu (pl. matu)",
                "right": "Ear"
              },
              {
                "left": "mbula",
                "right": "Nose"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taita term for \"Mouth\": ___",
            "correctAnswer": "momu / mlomo",
            "options": [
              "chongo (pl. vyongo) / mtwe",
              "righo / izo (pl. meso)",
              "kutu (pl. matu)",
              "momu / mlomo"
            ],
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          }
        ]
      },
      {
        "id": "taita-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taita (Kidawida) (Kidaw'ida / Kisagala) in Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "ngolo",
            "source": "Heart",
            "pronunciation": "ngo-lo",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "baga / sakame",
            "source": "Blood",
            "pronunciation": "ba-ga / sa-ka-me",
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "target": "ifindi (pl. mafindi)",
            "source": "Bone",
            "pronunciation": "i-findi",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "nda /kifu",
            "source": "Stomach / Belly",
            "pronunciation": "nda / ki-fu",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "ungo 'gwa kigulu",
            "source": "Ankle",
            "pronunciation": "ungo 'gwa ki-gu-lu",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "mundu 'gwa iziso",
            "source": "Apple of the eye",
            "pronunciation": "mundu 'gwa i-zi-so",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "mkono; — under part of the, tsikila",
            "source": "Arm",
            "pronunciation": "mko-no",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "mgongo",
            "source": "Back",
            "pronunciation": "mgongo",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          },
          {
            "target": "kiri",
            "source": "Back of the head",
            "pronunciation": "ki-ri",
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ngolo\" in Taita?",
            "correctAnswer": "Heart",
            "options": [
              "Blood",
              "Bone",
              "Stomach / Belly",
              "Heart"
            ],
            "hint": "Wray (1894) — Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"baga / sakame\" in Taita?",
            "correctAnswer": "Blood",
            "options": [
              "Bone",
              "Stomach / Belly",
              "Blood",
              "Heart"
            ],
            "hint": "Shaw (1885) & Wray (1894) — Ki-Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ifindi (pl. mafindi)\" in Taita?",
            "correctAnswer": "Bone",
            "options": [
              "Stomach / Belly",
              "Bone",
              "Heart",
              "Blood"
            ],
            "hint": "Wray (1894) — Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bone\" in Taita?",
            "correctAnswer": "ifindi (pl. mafindi)",
            "options": [
              "ifindi (pl. mafindi)",
              "ngolo",
              "baga / sakame",
              "nda /kifu"
            ],
            "hint": "ifindi (pl. mafindi)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Stomach / Belly\" in Taita?",
            "correctAnswer": "nda /kifu",
            "options": [
              "ngolo",
              "baga / sakame",
              "ifindi (pl. mafindi)",
              "nda /kifu"
            ],
            "hint": "nda / kifu"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taita expression with its English meaning:",
            "correctAnswer": "ngolo: Heart",
            "pairs": [
              {
                "left": "ngolo",
                "right": "Heart"
              },
              {
                "left": "baga / sakame",
                "right": "Blood"
              },
              {
                "left": "ifindi (pl. mafindi)",
                "right": "Bone"
              },
              {
                "left": "nda /kifu",
                "right": "Stomach / Belly"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taita term for \"Ankle\": ___",
            "correctAnswer": "ungo 'gwa kigulu",
            "options": [
              "ngolo",
              "baga / sakame",
              "ifindi (pl. mafindi)",
              "ungo 'gwa kigulu"
            ],
            "hint": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)"
          }
        ]
      }
    ]
  },
  {
    "id": "taita-unit-7",
    "unitNumber": 7,
    "title": "Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Taita (Kidawida) built directly from Rev. J. Alfred Wray (1894), Rev. A. Downes Shaw (1885), C. W. Hobley (1895), and Sir Harry H. Johnston (1919).",
    "icon": "Compass",
    "color": "#0891B2",
    "skills": [
      {
        "id": "taita-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taita (Kidawida) (Kidaw'ida / Kisagala) in Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "kuja / kula",
            "source": "Eat",
            "pronunciation": "ku-ja / ku-la",
            "hint": "Wray (1894) & Sakamoto (2005) — Kidawida"
          },
          {
            "target": "kunwa",
            "source": "Drink",
            "pronunciation": "kunwa",
            "hint": "Wray (1894) & Sakamoto (2005) — Kidawida"
          },
          {
            "target": "kugenda",
            "source": "Go",
            "pronunciation": "ku-genda",
            "hint": "Wray (1894) & Sakamoto (2005) — Kidawida"
          },
          {
            "target": "kucha",
            "source": "Come",
            "pronunciation": "kucha",
            "hint": "Wray (1894) & Sakamoto (2005) — Kidawida"
          },
          {
            "target": "kuona / kulola",
            "source": "See",
            "pronunciation": "kuo-na / ku-lo-la",
            "hint": "Wray (1894) & Sakamoto (2005) — Kidawida"
          },
          {
            "target": "kusikira",
            "source": "Hear",
            "pronunciation": "ku-si-ki-ra",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "kugamba / kuteta",
            "source": "Speak / Say",
            "pronunciation": "ku-gamba / ku-te-ta",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "kulala",
            "source": "Sleep",
            "pronunciation": "ku-la-la",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "kufa",
            "source": "Die",
            "pronunciation": "ku-fa",
            "hint": "Wray (1894) — Taita"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kuja / kula\" in Taita?",
            "correctAnswer": "Eat",
            "options": [
              "Drink",
              "Go",
              "Come",
              "Eat"
            ],
            "hint": "Wray (1894) & Sakamoto (2005) — Kidawida"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kunwa\" in Taita?",
            "correctAnswer": "Drink",
            "options": [
              "Go",
              "Come",
              "Drink",
              "Eat"
            ],
            "hint": "Wray (1894) & Sakamoto (2005) — Kidawida"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kugenda\" in Taita?",
            "correctAnswer": "Go",
            "options": [
              "Come",
              "Go",
              "Eat",
              "Drink"
            ],
            "hint": "Wray (1894) & Sakamoto (2005) — Kidawida"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Go\" in Taita?",
            "correctAnswer": "kugenda",
            "options": [
              "kugenda",
              "kuja / kula",
              "kunwa",
              "kucha"
            ],
            "hint": "kugenda"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Come\" in Taita?",
            "correctAnswer": "kucha",
            "options": [
              "kuja / kula",
              "kunwa",
              "kugenda",
              "kucha"
            ],
            "hint": "kucha"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taita expression with its English meaning:",
            "correctAnswer": "kuja / kula: Eat",
            "pairs": [
              {
                "left": "kuja / kula",
                "right": "Eat"
              },
              {
                "left": "kunwa",
                "right": "Drink"
              },
              {
                "left": "kugenda",
                "right": "Go"
              },
              {
                "left": "kucha",
                "right": "Come"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taita term for \"See\": ___",
            "correctAnswer": "kuona / kulola",
            "options": [
              "kuja / kula",
              "kunwa",
              "kugenda",
              "kuona / kulola"
            ],
            "hint": "Wray (1894) & Sakamoto (2005) — Kidawida"
          }
        ]
      },
      {
        "id": "taita-verbs-grammar-verbal-derivatives-7",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taita (Kidawida) (Kidaw'ida / Kisagala) in Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "kuneka",
            "source": "Give",
            "pronunciation": "ku-ne-ka",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "kukunda",
            "source": "Love / Want",
            "pronunciation": "ku-kunda",
            "hint": "Wray (1894) & Sakamoto (2005) — Kidawida"
          },
          {
            "target": "kumanya",
            "source": "Know",
            "pronunciation": "ku-manya",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "kuimba / kubora",
            "source": "Sing",
            "pronunciation": "kuimba / ku-bo-ra",
            "hint": "Sakamoto (2003) — Kidawida"
          },
          {
            "target": "kulima / kudeka",
            "source": "Work / Cultivate",
            "pronunciation": "ku-li-ma / ku-de-ka",
            "hint": "Wray (1894) — Taita"
          },
          {
            "target": "kusikila (-sikila)",
            "source": "To hear",
            "pronunciation": "ku-si-ki-la",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "kumanya (-manya)",
            "source": "To know",
            "pronunciation": "ku-manya",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "kukunda (-kunda)",
            "source": "To love / like",
            "pronunciation": "ku-kunda",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          },
          {
            "target": "kuinka (-inka)",
            "source": "To give",
            "pronunciation": "kuinka",
            "hint": "Verified comparative entry across Kenyan bantu corpus"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kuneka\" in Taita?",
            "correctAnswer": "Give",
            "options": [
              "Love / Want",
              "Know",
              "Sing",
              "Give"
            ],
            "hint": "Wray (1894) — Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kukunda\" in Taita?",
            "correctAnswer": "Love / Want",
            "options": [
              "Know",
              "Sing",
              "Love / Want",
              "Give"
            ],
            "hint": "Wray (1894) & Sakamoto (2005) — Kidawida"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kumanya\" in Taita?",
            "correctAnswer": "Know",
            "options": [
              "Sing",
              "Know",
              "Give",
              "Love / Want"
            ],
            "hint": "Wray (1894) — Taita"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Know\" in Taita?",
            "correctAnswer": "kumanya",
            "options": [
              "kumanya",
              "kuneka",
              "kukunda",
              "kuimba / kubora"
            ],
            "hint": "kumanya"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sing\" in Taita?",
            "correctAnswer": "kuimba / kubora",
            "options": [
              "kuneka",
              "kukunda",
              "kumanya",
              "kuimba / kubora"
            ],
            "hint": "kubora"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Taita expression with its English meaning:",
            "correctAnswer": "kuneka: Give",
            "pairs": [
              {
                "left": "kuneka",
                "right": "Give"
              },
              {
                "left": "kukunda",
                "right": "Love / Want"
              },
              {
                "left": "kumanya",
                "right": "Know"
              },
              {
                "left": "kuimba / kubora",
                "right": "Sing"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taita term for \"Work / Cultivate\": ___",
            "correctAnswer": "kulima / kudeka",
            "options": [
              "kuneka",
              "kukunda",
              "kumanya",
              "kulima / kudeka"
            ],
            "hint": "Wray (1894) — Taita"
          }
        ]
      }
    ]
  },
  {
    "id": "taita-unit-8",
    "unitNumber": 8,
    "title": "Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Taita (Kidawida) built directly from Rev. J. Alfred Wray (1894), Rev. A. Downes Shaw (1885), C. W. Hobley (1895), and Sir Harry H. Johnston (1919).",
    "icon": "Map",
    "color": "#0891B2",
    "skills": [
      {
        "id": "taita-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Taita (Kidawida) (Kidaw'ida / Kisagala) in Rev. W. E. Taylor (1891 #665), Rev. J. Alfred Wray (1894 Elementary Introduction to Taita) & Sir Harry Johnston (1919 #14) preserves pre-1930 phonological, grammatical, and ethnographic usage across Taita-Taveta.",
        "words": [
          {
            "target": "Mwakucha wedi?",
            "source": "Good morning (Have you dawned well?)",
            "pronunciation": "mwa-kucha we-di",
            "hint": "Taita (Kidawida) morning greeting"
          },
          {
            "target": "Ki-lavu; vi-. M-si. I-dime (daylight)",
            "source": "Day",
            "pronunciation": "ki la-vu"
          },
          {
            "target": "saa",
            "source": "Hour",
            "pronunciation": "saa"
          },
          {
            "target": "msenya 'gati, ijua chongoni",
            "source": "Noon",
            "pronunciation": "msenya 'ga-ti i-jua chongo-ni"
          },
          {
            "target": "kafwani, ndakwēn",
            "source": "Soon",
            "pronunciation": "kafwani ndakwen"
          },
          {
            "target": "mwaka",
            "source": "Year",
            "pronunciation": "mwa-ka"
          },
          {
            "target": "mwezi",
            "source": "Month",
            "pronunciation": "mwe-zi"
          },
          {
            "target": "hatta kale na kale",
            "source": "Never",
            "pronunciation": "hatta ka-le na ka-le"
          },
          {
            "target": "kingi; [very often], majua 'gose",
            "source": "Often",
            "pronunciation": "kingi"
          }
        ],
        "sentences": [
          {
            "target": "Mwakucha wedi? — Ki-lavu",
            "source": "Good morning — Day"
          },
          {
            "target": "saa — msenya 'gati, ijua chongoni",
            "source": "Hour — Noon"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mwakucha wedi?\" mean in English?",
            "correctAnswer": "Good morning (Have you dawned well?)",
            "options": [
              "Good morning (Have you dawned well?)",
              "Day",
              "Hour",
              "Noon"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Day\"",
            "correctAnswer": "Ki-lavu",
            "acceptedAnswers": [
              "Ki-lavu; vi-. M-si. I-dime (daylight)",
              "Ki-lavu"
            ],
            "hint": "Starts with \"Ki\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"saa\"",
            "correctAnswer": "Hour",
            "acceptedAnswers": [
              "Hour",
              "Hour"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Mwakucha wedi?",
                "right": "Good morning"
              },
              {
                "left": "Ki-lavu",
                "right": "Day"
              },
              {
                "left": "saa",
                "right": "Hour"
              },
              {
                "left": "msenya 'gati, ijua chongoni",
                "right": "Noon"
              },
              {
                "left": "kafwani, ndakwēn",
                "right": "Soon"
              }
            ]
          }
        ]
      },
      {
        "id": "taita-time-calendar-journey-navigation-8",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes from Wray (1894).",
        "tips": "Wray (1894, pp. 82, 83, 89, 92, 96, 97–98, 102, 110, 114, 122, 125) documents Kisagala travel and directional vocabulary: ngila (road/path), mvori (cattle-track), charo, pl. varo (journey/caravan), mtambi / mcharo (traveller), mchukuzi / mtwali msigo (porter), kilongozi (guide), chengo (camp), kiambuko / andu kuambuka (ford/crossing), andu ijua lyifuma (East, where the sun rises), mfumingovi (West, where the sun sets), and ku-genda (with 18 directional verb phrases on pp. 97–98).",
        "culturalNote": "In Rev. J. Alfred Wray (1894, pp. 98, 99, 108, 122), Taita travellers crossing the plains between Ndara, Sagalla, Dabida, Kasigau, Rabai, and Mombasa observed road omens ('ndege ya kwita / ndege ya kuuya', p. 108) and cast stones onto wayside cairns ('mfingiri', p. 99: 'a heap of stones by the roadside where every passer-by throws a stone on the heap').",
        "words": [
          {
            "target": "ngila (cattle-track: mvori; crossway: ngila ya mkingamo)",
            "source": "Road, path, way",
            "pronunciation": "ngi-la / mvo-ri / mkinga-mo",
            "hint": "Wray (1894, pp. 89, 110, 114, 126) Road, Path & Crossway"
          },
          {
            "target": "charo (pl. varo)",
            "source": "Journey, caravan",
            "pronunciation": "charo"
          },
          {
            "target": "mtambi, mcharo",
            "source": "Traveller",
            "pronunciation": "mtambi"
          },
          {
            "target": "mchukuzi, mtwali msigo",
            "source": "Porter, carrier",
            "pronunciation": "mchukuzi"
          },
          {
            "target": "kilongozi",
            "source": "Guide, leader",
            "pronunciation": "kilongozi"
          },
          {
            "target": "chengo",
            "source": "Camp",
            "pronunciation": "chengo"
          },
          {
            "target": "kiambuko, andu kuambuka (bridge: ulalo)",
            "source": "Ford, river crossing (bridge)",
            "pronunciation": "kiambuko"
          },
          {
            "target": "andu ijua lyifuma (East)",
            "source": "East (where the sun rises)",
            "pronunciation": "andu-ijua-lyifuma"
          },
          {
            "target": "mfumingovi",
            "source": "West (where the sun sets)",
            "pronunciation": "mfumingovi"
          },
          {
            "target": "ku-genda",
            "source": "To go (to return; to follow; to precede)",
            "pronunciation": "ku-genda / ku-gala / ku-uya / ku-irima / ku-kaiai",
            "hint": "Wray (1894, pp. 97–98) Go, to"
          },
          {
            "target": "ku-joka, ku-kwela (to go up)",
            "source": "To ascend / climb",
            "pronunciation": "ku-joka"
          },
          {
            "target": "ku-selela, ku-jika (to go down)",
            "source": "To descend",
            "pronunciation": "ku-selela"
          },
          {
            "target": "ku-ambuka (to cross over)",
            "source": "To cross over",
            "pronunciation": "ku-ambuka"
          },
          {
            "target": "hambiri (in front, before)",
            "source": "In front / before",
            "pronunciation": "hambiri"
          },
          {
            "target": "nyuma (behind, after)",
            "source": "Behind / after",
            "pronunciation": "nyuma"
          },
          {
            "target": "kulele, sa ndigi (far)",
            "source": "Far away",
            "pronunciation": "kulele"
          },
          {
            "target": "avui na (near)",
            "source": "Near to",
            "pronunciation": "avui-na"
          },
          {
            "target": "mfingiri",
            "source": "Roadside stone cairn where every passer-by throws a stone",
            "pronunciation": "mfi-ngi-ri",
            "hint": "Wray (1894, p. 99 under Heap) Wayside cairn"
          },
          {
            "target": "ndege",
            "source": "Bird omen consulted by travellers on the road",
            "pronunciation": "nde-ge ya kwi-ta / nde-ge ya ku-uya",
            "hint": "Wray (1894, p. 108 under Omen)"
          }
        ],
        "sentences": [
          {
            "target": "Nagenda nyumbani; Nagenda Mombasani; Nagenda Rabai; Genda kwa bwana.",
            "source": "I go to the house; I go to Mombasa; I go to Rabai; Go to the master (Wray 1894, p. 123)."
          },
          {
            "target": "Ufuma kwihi? — Nafuma kisirani; nagenda ngila ya chengo.",
            "source": "Where do you come from? — I come from the hill-top; I am going along the camp road (Wray 1894, pp. 82, 114, 115)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ngila (cattle-track: mvori; crossway: ngila ya mkingamo)\" mean in English?",
            "correctAnswer": "Road, path, way",
            "options": [
              "Road, path, way",
              "Journey, caravan • Traveller • Porter, carrier",
              "Guide, leader • Camp • Ford, river crossing (bridge)",
              "East (where the sun rises) • West (where the sun sets)"
            ],
            "hint": "Wray (1894, pp. 89, 110, 114, 126) Road, Path & Crossway"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Roadside stone cairn where every passer-by throws a stone\"",
            "correctAnswer": "mfingiri",
            "acceptedAnswers": [
              "mfingiri"
            ],
            "hint": "Starts with \"mf\" (Wray 1894, p. 99)"
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"andu ijua lyifuma (East) • mfumingovi (West, where the sun sets)\"",
            "correctAnswer": "East (where the sun rises) • West (where the sun sets)",
            "acceptedAnswers": [
              "East (where the sun rises) • West (where the sun sets)"
            ],
            "hint": "Wray (1894, pp. 92, 122)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ngila (mvori)",
                "right": "Road, path (cattle-track)"
              },
              {
                "left": "charo (pl. varo)",
                "right": "Journey, caravan"
              },
              {
                "left": "kilongozi",
                "right": "Guide, leader"
              },
              {
                "left": "mfumingovi",
                "right": "West (where the sun sets)"
              },
              {
                "left": "mfingiri",
                "right": "Roadside stone cairn"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "taita-unit-9",
    "unitNumber": 9,
    "title": "Conversational Phrases, Idioms & Daily Dialogue",
    "description": "Master conversational phrases, salutations, interrogatives, narrative idioms & daily dialogue in Taita (Kisagala & Kidawida) built directly from Rev. J. Alfred Wray (1894, pp. 38–42, 58–59, 66, 73–76, 115–116) and Rev. A. Downes Shaw (1885).",
    "icon": "MessageCircle",
    "color": "#0891B2",
    "skills": [
      {
        "id": "taita-phrases-idioms-everyday-dialogue-9",
        "title": "Everyday Conversational Phrases, Questions & Salutations",
        "icon": "CheckCircle2",
        "description": "Practice Wray’s verbatim village salutations, interrogative constructions, and emphatic conversational replies (pp. 39–42, 58–59, 66, 115–116).",
        "tips": "Wray (1894, pp. 39–42, 58–59, 66, 74–75, 115–116) documents how Kisagala forms questions using enclitic -ba ('Wandu-ba? Are they men?', 'Waloli-ba? Are they good?', 'Walima-ba? Do they cultivate?'), proclitic ke- ('Ke-wa'gamba? Then why do you say so?'), relative clefts with niko ('Niko wakojele uyu? Who is it that cured this man?'), and emphatic negative-to-affirmative -e ('Si-gend-e! Oh yes, I am going!').",
        "culturalNote": "When visiting a Taita homestead (Wray 1894, pp. 115–116 under 'Salutation, kurogoa'), the visitor calls 'Hodi?' ('May I come in?') and the host replies 'Hodi! karibu! Uka kitembo' ('Come in! Come near! Sit down'), followed by inquiries after the news of the hill-top ('Uvoro wa kisirani? — Ni 'gwaloli / Sikwesi') and mutual village health ('Una maana? — Na maana. — Kukeja maana? — Kweja maana').",
        "words": [
          {
            "target": "Hodi? — Hodi! karibu! Uka kitembo",
            "source": "May I come in? — Come in! Come near! Sit down",
            "pronunciation": "ho-di — ho-di ka-ri-bu u-ka ki-tembo",
            "hint": "Wray (1894, p. 115) Village arrival salutation"
          },
          {
            "target": "Ufuma kwihi? — Nafuma kisirani",
            "source": "Where do you come from? — I come from the hill-top",
            "pronunciation": "ufuma-kwihi-nafuma-kisirani"
          },
          {
            "target": "Uvoro wa kisirani? — Ni 'gwaloli (or Sikwesi)",
            "source": "What is the news from the hill-top? — It is good (or There is none)",
            "pronunciation": "uvoro-wa-kisirani-ni"
          },
          {
            "target": "Una maana? — Na maana",
            "source": "Are you well? — I am well",
            "pronunciation": "una-maana-na-maana"
          },
          {
            "target": "Kukeja maana? — Kweja maana",
            "source": "Are they well at your village? — It is well",
            "pronunciation": "kukeja-maana-kweja-maana"
          },
          {
            "target": "Walamsaje? — Nalamuka banana",
            "source": "How did you wake? — I awoke well",
            "pronunciation": "walamsaje-nalamuka-banana"
          },
          {
            "target": "Wasindaje? — Nasinda banana",
            "source": "How have you spent the day? — I have spent it well",
            "pronunciation": "wasindaje-nasinda-banana"
          },
          {
            "target": "Ko mbole — Haya ko mbole, genda banana",
            "source": "Good-bye — All right, good-bye, go in peace",
            "pronunciation": "ko mbo-le — ha-ya ko mbo-le genda ba-na-na",
            "hint": "Wray (1894, p. 116) Parting salutation"
          },
          {
            "target": "Washaiani? (Udeshani?)",
            "source": "What do you want?",
            "pronunciation": "washaiani"
          },
          {
            "target": "Izina lyako u ani?",
            "source": "What (who) is your name?",
            "pronunciation": "izina-lyako-u-ani"
          },
          {
            "target": "Mdu uyu ni wani?",
            "source": "Whose man is this?",
            "pronunciation": "mdu-uyu-ni-wani"
          },
          {
            "target": "Ushaia chihi?",
            "source": "Which thing do you want?",
            "pronunciation": "ushaia-chihi"
          },
          {
            "target": "Mwiti u'gu ni 'gwa kulonga ije?",
            "source": "What is this pole for?",
            "pronunciation": "mwiti-u'gu-ni-'gwa"
          },
          {
            "target": "Mbulani weja aha? (Wejila-ni aha?)",
            "source": "Why have you come here?",
            "pronunciation": "mbulani-weja-aha"
          },
          {
            "target": "Si-gend-e! (Su-gend-e! / Sa-gend-e! / Si-shaie!)",
            "source": "Oh yes, I am going! — Emphatic affirmative from negative",
            "pronunciation": "si-gende / su-gende / sa-gende / si-shaie",
            "hint": "Wray (1894, pp. 58–59) Negative present + final -e for emphatic affirmation"
          },
          {
            "target": "Weja-kugora n'ini?",
            "source": "Why did you speak?",
            "pronunciation": "weja-kugora-n'ini"
          },
          {
            "target": "Ke-wa'gamba?",
            "source": "Then why do you say so?",
            "pronunciation": "ke-wa'gamba"
          },
          {
            "target": "Wandu-ba? Waloli-ba? Walima-ba?",
            "source": "Are they men? Are they good? Do they cultivate?",
            "pronunciation": "wandu-ba-waloli-ba-walima-ba"
          }
        ],
        "sentences": [
          {
            "target": "Hodi? — Hodi! karibu! Uka kitembo. Ufuma kwihi? — Nafuma kisirani.",
            "source": "May I come in? — Come in! Come near! Sit down. Where do you come from? — I come from the hill-top (Wray 1894, p. 115)."
          },
          {
            "target": "Mbulani ukwita mwanake uyu? (Ukwitilani mwanake uyu?) — Keja-kukwito n'ini?",
            "source": "Why do you beat this child? — Why should he be beaten? (Wray 1894, pp. 61, 66)."
          }
        ],
        "authoredExercises": [
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Good-bye — All right, good-bye, go in peace\"",
            "correctAnswer": "Ko mbole — Haya ko mbole, genda banana",
            "acceptedAnswers": [
              "Ko mbole — Haya ko mbole, genda banana",
              "Ko mbole"
            ],
            "hint": "Starts with \"Ko mbole\" (Wray 1894, p. 116)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Everyday Conversational Phrases, Questions & Salutations with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Uka kitembo",
                "right": "Sit down"
              },
              {
                "left": "Ufuma kwihi? — Nafuma kisirani",
                "right": "Where do you come from? — From the hill-top"
              },
              {
                "left": "Walamsaje? — Nalamuka banana",
                "right": "How did you wake? — I awoke well"
              },
              {
                "left": "Wasindaje? — Nasinda banana",
                "right": "How have you spent the day? — I spent it well"
              },
              {
                "left": "Si-gend-e!",
                "right": "Oh yes, I am going!"
              }
            ]
          }
        ]
      },
      {
        "id": "taita-phrases-idioms-courtesy-discourse-9",
        "title": "Narrative Idioms, Interjections, Enclitics & Social Discourse",
        "icon": "Handshake",
        "description": "Master Wray’s narrative idioms (Ando kungi... nikotū, Angoije?), interjections, enclitics (-ri, -ba, -'ga, -ima), and 13 ideophonic intensifiers (pp. 59, 73–76).",
        "tips": "Wray (1894, pp. 59, 73–76) highlights two signature Kisagala narrative idioms—(1) 'Ando kungi... nikotū' ('Wait a bit and you will hear...', e.g., 'Ando kungigenda aho mbele nikotū kuwona nyamandu') and (2) rhetorical 'Angoije?' ('Is it not so?')—alongside 18 interjections and 4 enclitics (-ri 'only/not very', -ba '?', -'ga 'habitual/soon', -ima/-ma 'do!').",
        "culturalNote": "In Wray (1894, pp. 73–76, 107), Kisagala speakers enrich conversation with expressive interjections ('Ola! Behold!', 'Ati! I say!', 'Atigo / Atigoni! Truly!', 'Ado! Speak well!', 'Sumilani! Make way!', 'Mai! Mother! [surprise]', 'Kumba! Look out!', 'Sumba! Nonsense!', 'Usi!Don't make a noise!', 'Chubwi! Gone!') and distinguish 'Eee' ('Yes') from nasal 'Ēēē' ('No', or 'A-a / Bai').",
        "words": [
          {
            "target": "Ando kungigenda aho mbele nikotū kuwona nyamandu",
            "source": "Wait a bit and you will hear that on my going forward a little I saw a beast",
            "pronunciation": "ando kungi-genda a-ho mbe-le ni-ko-tu ku-wo-na nya-mandu",
            "hint": "Wray (1894, p. 59) Narrative idiom #1: Ando kungi... nikotū"
          },
          {
            "target": "Angoije?",
            "source": "Is it not so? (You beat him, didn't you? / The master spoke much, didn't he?)",
            "pronunciation": "ango-i-je",
            "hint": "Wray (1894, p. 59) Narrative idiom #2: Angoije?"
          },
          {
            "target": "Eee (Yes)",
            "source": "Yes",
            "pronunciation": "eee"
          },
          {
            "target": "A-a / Bai / nasal Ēēē (No)",
            "source": "No",
            "pronunciation": "a-a"
          },
          {
            "target": "N'ikweli, Atigoni! (Truly! Indeed!)",
            "source": "Truly! Indeed!",
            "pronunciation": "n'ikweli"
          },
          {
            "target": "Ola! (Behold!)",
            "source": "Behold!",
            "pronunciation": "ola"
          },
          {
            "target": "Ado! (Speak well!)",
            "source": "Speak well!",
            "pronunciation": "ado"
          },
          {
            "target": "Sumilani! (Make way!)",
            "source": "Make way!",
            "pronunciation": "sumilani"
          },
          {
            "target": "Usi! (Be quiet!)",
            "source": "Don't make a noise!",
            "pronunciation": "usi"
          },
          {
            "target": "Chubwi! (Gone!)",
            "source": "Gone!",
            "pronunciation": "chubwi"
          },
          {
            "target": "kaleri (only a little), kaileri (only twice), kichacheri (not very",
            "source": "Diminutive/restrictive enclitic -ri ('only / not very')",
            "pronunciation": "ka-le-ri / kai-le-ri / ki-chache-ri / mo-jo-ri",
            "hint": "Wray (1894, p. 74) Enclitic -ri"
          },
          {
            "target": "Letema! (Do bring!)",
            "source": "Emphatic imperative enclitic -ima/-ma & irregular imperative of kuja",
            "pronunciation": "le-te-ma / genda-ma / cho / cho-ni",
            "hint": "Wray (1894, pp. 43, 63, 74) Imperatives"
          },
          {
            "target": "Chanuka buu (smells horridly)",
            "source": "Ideophones: buu (foul smell)",
            "pronunciation": "chanuka-buu"
          },
          {
            "target": "Chakesua doo (fading red)",
            "source": "doo (fading red)",
            "pronunciation": "chakesua-doo"
          },
          {
            "target": "Nagora go (said all)",
            "source": "go (completely)",
            "pronunciation": "nagora-go"
          },
          {
            "target": "Chanakulile ku (very hard)",
            "source": "ku (very hard)",
            "pronunciation": "chanakulile-ku"
          },
          {
            "target": "Chamanga tuku (very firm)",
            "source": "tuku (very firm)",
            "pronunciation": "chamanga-tuku"
          },
          {
            "target": "Kamba wejile igulo mangu wekeona nyamandu",
            "source": "If you had come yesterday you would have seen a beast",
            "pronunciation": "kamba we-ji-le i-gu-lo mangu we-ke-o-na nya-mandu",
            "hint": "Wray (1894, p. 54) Contingent conditional tense"
          },
          {
            "target": "Si-na-kaile ku-shaia",
            "source": "I do not yet love",
            "pronunciation": "si-na-kaile-ku-shaia"
          },
          {
            "target": "Si-kaile ku-shaia",
            "source": "I had not yet loved",
            "pronunciation": "si-kaile-ku-shaia"
          }
        ],
        "sentences": [
          {
            "target": "Niko wa-onire kitasi changu? — Niko wakojele uyu?",
            "source": "Who is it that saw my basket? — Who is it that cured this man? (Wray 1894, p. 38 relative niko)."
          },
          {
            "target": "Kamba wejile igulo mangu wekeona nyamandu.",
            "source": "If you had come yesterday you would have seen a beast (Wray 1894, p. 54)."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each Taita expression from Wray (1894) with its English meaning:",
            "correctAnswer": "Angoije?: Is it not so?",
            "pairs": [
              {
                "left": "Angoije?",
                "right": "Is it not so?"
              },
              {
                "left": "Ola! • Sumilani!",
                "right": "Behold! • Make way!"
              },
              {
                "left": "kaleri • mojori",
                "right": "Only a little • One only (-ri)"
              },
              {
                "left": "Letema! • Gendama!",
                "right": "Do bring! • Do go away! (-ma)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "taita-unit-10",
    "unitNumber": 10,
    "title": "Classical Proverbs, Riddles & Ethnographic Heritage",
    "description": "Master classical proverbs, riddles, war-cries, trade currencies, seasons & ethnographic heritage in Taita (Kisagala & Kidawida) built directly from Rev. J. Alfred Wray (1894), Rev. W. E. Taylor (1891), and Rev. A. Downes Shaw (1885).",
    "icon": "Globe",
    "color": "#0891B2",
    "skills": [
      {
        "id": "taita-oral-wisdom-literature-proverbs-riddles-10",
        "title": "Traditional Proverbs, Riddles, War-Cries & Oral Wisdom",
        "icon": "Award",
        "description": "Study verbatim oral wisdom, riddles (Wada na wada), war-cries (Mwasasi wome), and nicknames from Wray (1894), Taylor (1891), and Shaw (1885).",
        "tips": "Wray (1894, pp. 89, 93, 107, 114, 115–116) records the Kisagala baobab riddle ('Wada na wada—mwanangu agendele ujombani ela sauja. — Kilamba'), the forfeit custom of offering towns when a riddle is unguessed, the war-cry ('Mwasasi, mwasasi wome, mwana wa ng'anya mbareni ngolo, mwasasi wome', p. 89), and descriptive nicknames ('izina lya kudaria', p. 107).",
        "culturalNote": "In Taita oral tradition, riddles open with the challenge 'Wada!' and response 'Na wada!' (Wray 1894, pp. 93, 114; Shaw 1885). When a listener cannot solve the riddle, they ceremonially grant the riddler the choice of several hilltop villages ('muzi') before the answer ('Kilamba', the baobab seed pod, or 'Igi', an egg) is revealed.",
        "words": [
          {
            "target": "Kazi mbili zam'lema fisi.",
            "source": "Two occupations were too many (heavy) for the hyena.",
            "pronunciation": "ka-zi mbi-li zam-le-ma fi-si",
            "hint": "Taylor (1891, p. 160, Taita Proverb #665)"
          },
          {
            "target": "Wada na wada—mwanangu agendele ujombani ela sauja. — Kilamba.",
            "source": "A riddle, a riddle—my son went to the coast, he has not yet come back. — The seed",
            "pronunciation": "wada-na-wadamwanangu-agendele",
            "hint": "Wray (1894, pp. 93 & 114, Enigma / Riddle)"
          },
          {
            "target": "Wada!",
            "source": "Riddle! — Come on! My house has no door? — Give me a town. — An egg.",
            "pronunciation": "wada",
            "hint": "Shaw (1885) & Wray (1894, pp. 93, 114) Taita riddle & town-forfeit ceremony"
          },
          {
            "target": "Mwasasi, mwasasi wome, mwana wa ng'anya mbareni ngolo, mwasasi wome!",
            "source": "Traditional Kisagala war-cry rallying the clan (under 'Cry, a, kilio')",
            "pronunciation": "mwasasi",
            "hint": "Wray (1894, p. 89 under Cry)"
          },
          {
            "target": "Voro!",
            "source": "Peace/Greeting! — Greeting! Are you well? — I am well. — That is good! — I do not",
            "pronunciation": "vo-ro — vo-ro mzi-ma — mzi-ma — ndo vidzo",
            "hint": "Rev. A. Downes Shaw (1885) Pocket Vocabulary of Ki-Taita"
          },
          {
            "target": "izina lya kudaria: mekupe (blinks eyes), metukurya (thin), mefinju",
            "source": "Nickname & 5 traditional Taita descriptive nicknames",
            "pronunciation": "izina-lya-kudaria-mekupe",
            "hint": "Wray (1894, p. 107 under Nickname)"
          },
          {
            "target": "lumbo (pl. nyumbo)",
            "source": "Song (pl. Songs)",
            "pronunciation": "lumbo"
          },
          {
            "target": "mboze",
            "source": "Music",
            "pronunciation": "mboze"
          },
          {
            "target": "ngoma",
            "source": "Drum or dance",
            "pronunciation": "ngoma"
          },
          {
            "target": "mbari, kikuku (kichuku), lukolo",
            "source": "Tribe, clan, lineage, kindred",
            "pronunciation": "mba-ri / ki-ku-ku / lu-ko-lo",
            "hint": "Wray (1894, pp. 78, 94, 124) Akin, Family & Tribe"
          },
          {
            "target": "wawa",
            "source": "reciprocal grandfather & grandchild address",
            "pronunciation": "wawa"
          },
          {
            "target": "ake",
            "source": "reciprocal grandmother & grandchild address",
            "pronunciation": "ake"
          }
        ],
        "sentences": [
          {
            "target": "Wada na wada—mwanangu agendele ujombani ela sauja. — Kilamba.",
            "source": "A riddle, a riddle—my son went to the coast, he has not yet come back. — The seed vessel of the baobab tree (Wray 1894, pp. 93, 114)."
          },
          {
            "target": "Mwasasi, mwasasi wome, mwana wa ng'anya mbareni ngolo, mwasasi wome!",
            "source": "Traditional Taita war-cry rallying the clan in defense of the hills (Wray 1894, p. 89)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the answer to Wray's (1894, pp. 93, 114) Kisagala riddle \"Wada na wada—mwanangu agendele ujombani ela sauja\"?",
            "correctAnswer": "Kilamba (the seed vessel of the baobab tree)",
            "options": [
              "Kilamba (the seed vessel of the baobab tree)",
              "Fisi (the hyena)",
              "Mekupe (one who blinks his eyes)",
              "Mfingiri (the roadside stone heap)"
            ],
            "hint": "Wray (1894, pp. 93 & 114 under Enigma and Riddle)"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Two occupations were too many (heavy) for the hyena.\"",
            "correctAnswer": "Kazi mbili zam'lema fisi.",
            "acceptedAnswers": [
              "Kazi mbili zam'lema fisi.",
              "Kazi mbili zamlema fisi"
            ],
            "hint": "Taylor (1891, p. 160 #665)"
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mbari, kikuku (kichuku), lukolo\"",
            "correctAnswer": "Tribe, clan, lineage, kindred",
            "acceptedAnswers": [
              "Tribe, clan, lineage, kindred",
              "Tribe"
            ],
            "hint": "Wray (1894, pp. 78, 94, 124)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Traditional Proverbs, Riddles, War-Cries & Oral Wisdom with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Kazi mbili zam'lema fisi.",
                "right": "Two occupations were too many for the hyena."
              },
              {
                "left": "Kilamba",
                "right": "Seed vessel of the baobab tree (riddle answer)"
              },
              {
                "left": "Mwasasi, mwasasi wome!",
                "right": "Traditional Kisagala war-cry"
              },
              {
                "left": "izina lya kudaria",
                "right": "Descriptive nickname"
              },
              {
                "left": "wawa • ake",
                "right": "Reciprocal grandfather & grandmother titles"
              }
            ]
          }
        ]
      },
      {
        "id": "taita-oral-wisdom-literature-ethnographic-lexicon-10",
        "title": "Customary Law, Ancestral Skull Caves, Trade Currencies & Seasons",
        "icon": "ShieldCheck",
        "description": "Master Wray’s ethnographic entries on ancestral skull caves (ngomeni), cloth & bead currency exchange, ivory tusk grades, hair styles, and seasons (pp. 80, 85, 91, 99, 102, 104, 113, 116, 118, 123).",
        "tips": "Wray (1894) documents Taita customary institutions in detail: ancestral skull caves ('ngoma / ngomeni', p. 118), cattle/goat partnership ('ngaru, mbuzi ya ngaru', p. 87) and agistment loans ('ng'ombe ya wada', p. 104), 9 bead types (p. 80), cloth & bead currency standards (' lupande, shuka, doti, jora, koruja / kaba, fundo', p. 85), 4 ivory tusk grades ('Kibori, Tofwa, Tofwa shagangi, Isange', p. 102), 4 seasons (p. 116), and 12 times of day (p. 123).",
        "culturalNote": "Under 'Skull, ngoma' (p. 118), Wray records: 'It is a custom among the Wa-taita to exhume the skulls of their dead and put them in caves directly all the flesh has left the bones; the grave is then levelled stage by stage, so that all trace of it is quickly lost; a place of skulls, ngomeni.'",
        "words": [
          {
            "target": "ngoma (place of skulls: ngomeni)",
            "source": "Exhumed ancestral skull & sacred skull cave (ngomeni)",
            "pronunciation": "ngo-ma / ngo-me-ni",
            "hint": "Wray (1894, p. 118 under Skull)"
          },
          {
            "target": "usanga",
            "source": "Beads & 9 traditional Taita bead varieties",
            "pronunciation": "u-sanga / kamsanga / sa-mi-sa-mi / ma-se-re",
            "hint": "Wray (1894, p. 80 under Beads)"
          },
          {
            "target": "nguo: lupande (1 yd), shuka, doti (4 yds = 4 strings), jora (30 yds),",
            "source": "Cloth & bead trade currency measures (Merikani, Kaniki, Bandira, Bafta,uli)",
            "pronunciation": "lu-pande / shu-ka / do-ti / jo-ra / ko-ru-ja / ka-ba / fundo",
            "hint": "Wray (1894, p. 85 under Cloth)"
          },
          {
            "target": "njovu, lwembe lwa njovu: Kibori (~7 lbs, 2 hands), Tofwa (3½ hands),",
            "source": "Ivory tusk & 4 traditional Taita weight/length grades",
            "pronunciation": "njo-vu / ki-bo-ri / tofwa / tofwa sha-gangi / i-sange",
            "hint": "Wray (1894, p. 102 under Ivory)"
          },
          {
            "target": "mavalo: mshuru (small front apron), kisorori (regulation apron), kizema",
            "source": "Traditional woman's dress articles",
            "pronunciation": "ma-va-lo: mshu-ru / ki-so-ro-ri / ki-ze-ma",
            "hint": "Wray (1894, p. 91 under Dress)"
          },
          {
            "target": "juiri, pl. majuiri: kidole (front tuft), kishungi (crown tuft), mabutu,",
            "source": "Hair & 4 traditional Taita coiffures",
            "pronunciation": "jui-ri: ki-do-le / kishungi / ma-bu-tu / ma-vo-re",
            "hint": "Wray (1894, p. 99 under Hair)"
          },
          {
            "target": "ng'ombe ya wada",
            "source": "cow placed on agistment loan",
            "pronunciation": "ng'ombe-ya-wada"
          },
          {
            "target": "Isika, Kwalazi (Oct–Dec rains), Kaskazi, Kifuku",
            "source": "The 4 Taita seasons of the year (mwaka)",
            "pronunciation": "i-si-ka / kwa-la-zi / kaska-zi / ki-fu-ku",
            "hint": "Wray (1894, pp. 113 & 116 under Rain and Seasons)"
          },
          {
            "target": "makeo (4 am), madioro (5 am), ikesho (6 am), nyang'alamu (8 am),",
            "source": "Traditional Taita divisions of the day & night",
            "pronunciation": "makeo",
            "hint": "Wray (1894, p. 123 under Time)"
          }
        ],
        "sentences": [
          {
            "target": "Mbuzi ya ngaru ni mbuzi ya wandu waili; ng'ombe ya wada ni ng'ombe ya kurisa.",
            "source": "A company goat (mbuzi ya ngaru) is a goat held by two or more persons; a wada cow is a cow lent out to be herded (Wray 1894, pp. 87, 104)."
          },
          {
            "target": "Mwaka unesi isika, kwalazi, kaskazi, na kifuku.",
            "source": "The year has the cold foggy season (isika), the lesser rains (kwalazi), the hot season (kaskazi), and the heavy rains (kifuku) (Wray 1894, p. 116)."
          }
        ],
        "authoredExercises": [
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"The 4 Taita seasons of the year (mwaka)\"",
            "correctAnswer": "Isika, Kwalazi, Kaskazi, Kifuku",
            "acceptedAnswers": [
              "Isika (cold foggy season, May–Sept), Kwalazi (Oct–Dec rains), Kaskazi (hot clear season, Jan–Feb), Kifuku (heavy rains, Mar–Apr)",
              "Isika, Kwalazi, Kaskazi, Kifuku"
            ],
            "hint": "Wray (1894, p. 116)"
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ngaru (mbuzi ya ngaru) • ng'ombe ya wada\"",
            "correctAnswer": "Shared livestock partnership (ngaru) & cattle agistment loan (wada)",
            "acceptedAnswers": [
              "Shared livestock partnership (ngaru) & cattle agistment loan (wada)",
              "Company goat and loan cow"
            ],
            "hint": "Wray (1894, pp. 87, 104)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each ethnographic term from Wray (1894) with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ngomeni",
                "right": "Ancestral skull cave"
              },
              {
                "left": "Kibori • Tofwa • Isange",
                "right": "Ivory tusk weight/length grades"
              },
              {
                "left": "lupande • shuka • doti • fundo",
                "right": "Cloth & bead currency measures"
              },
              {
                "left": "Isika • Kwalazi • Kaskazi • Kifuku",
                "right": "The 4 seasons of the Taita year"
              },
              {
                "left": "mshuru • kisorori • kizema",
                "right": "Articles of a woman's dress"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "taita-unit-11",
    "unitNumber": 11,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master verified Taita (Kisagala & Kidawida) vocabulary, transitive vs. intransitive verb pairs, and literal etymologies from Rev. J. Alfred Wray’s 1894 English–Sagalla Vocabulary (pp. 77–128).",
    "icon": "ScrollText",
    "color": "#0891B2",
    "skills": [
      {
        "id": "taita-pd-corpus-11-1",
        "title": "Transitive vs. Intransitive Verb Pairs & Literal Idioms (W–Y)",
        "icon": "Baby",
        "description": "Study complete, unabridged headwords, literal idioms, and transitive/intransitive verb pairs from Wray (1894, pp. 126–128).",
        "tips": "In Wray (1894, Part II), transitive ('T.') and intransitive ('I.') verb stems are systematically distinguished via causative (-isa/-isha/-za) vs. simple/neuter (-ka/-oka) suffixes (e.g., ku-sirimisha T. 'to worry' vs. ku-sirimika I. 'to be worried'; ku-nyaza T. 'to wither' vs. ku-nyala I.; ku-funya T. 'to withdraw' vs. ku-fuma I.).",
        "words": [
          {
            "target": "-koo (young); mwanake mkoo (a young child)",
            "source": "Young",
            "pronunciation": "koo / mwa-na-ke mkoo",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 128)"
          },
          {
            "target": "-ako (thy, your sg.); -enyu / -enu (your pl.)",
            "source": "Your",
            "pronunciation": "a-ko / e-nyu / e-nu"
          },
          {
            "target": "igulo; [the day before yesterday], ijuzi",
            "source": "Yesterday (and the day before yesterday)",
            "pronunciation": "i-gu-lo / i-ju-zi",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 128)"
          },
          {
            "target": "ku-fweni [lit. to be fitting]",
            "source": "Worthy, to be",
            "pronunciation": "ku-fweni",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 128)"
          },
          {
            "target": "ku-sirimisha, T.; ku-sirimika, I.",
            "source": "Worry, to (transitive & intransitive)",
            "pronunciation": "ku-si-ri-misha / ku-si-ri-mika",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 128)"
          },
          {
            "target": "vilambo [lit. things of distress]",
            "source": "Woe",
            "pronunciation": "vi-lambo",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 128)"
          },
          {
            "target": "ku-nyaza, T.; ku-nyala, I.",
            "source": "Wither, to (transitive & intransitive)",
            "pronunciation": "ku-nyaza / ku-nyala",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 128)"
          },
          {
            "target": "ku-funya, T.; ku-fuma, I.",
            "source": "Withdraw, to (transitive & intransitive)",
            "pronunciation": "ku-funya / ku-fuma",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 128)"
          }
        ],
        "sentences": [
          {
            "target": "Kamba wejile igulo mangu wekeona nyamandu; nejile ijuzi.",
            "source": "If you had come yesterday you would have seen a beast; I came the day before yesterday (Wray 1894, pp. 54, 128)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ku-nyaza, T.; ku-nyala, I.\" in Taita (Wray 1894, p. 128)?",
            "correctAnswer": "Wither, to (transitive & intransitive)",
            "options": [
              "Wither, to (transitive & intransitive)",
              "Worry, to (transitive & intransitive)",
              "Withdraw, to (transitive & intransitive)",
              "Worthy, to be"
            ],
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 128)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Taita (Kisagala) term from Wray (1894, p. 128) to its English meaning:",
            "correctAnswer": "-koo (young); mwanake mkoo (a young child): Young",
            "pairs": [
              {
                "left": "-koo",
                "right": "Young"
              },
              {
                "left": "igulo; ijuzi",
                "right": "Yesterday; the day before yesterday"
              },
              {
                "left": "ku-fweni [lit. to be fitting]",
                "right": "Worthy, to be"
              },
              {
                "left": "vilambo [lit. things of distress]",
                "right": "Woe"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taita (Kisagala) transitive & intransitive pair for \"Worry, to\": ___",
            "correctAnswer": "ku-sirimisha, T.; ku-sirimika, I.",
            "options": [
              "ku-sirimisha, T.; ku-sirimika, I.",
              "vilambo [lit. things of distress]",
              "-koo",
              "-ako"
            ],
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 128)"
          }
        ]
      },
      {
        "id": "taita-pd-corpus-11-2",
        "title": "Qualities, Nature & Action Verbs (W)",
        "icon": "Users",
        "description": "Expand your command of Taita (Kisagala) ecological, descriptive, and action vocabulary from Wray (1894, pp. 126–128).",
        "tips": "Notice Wray's exact descriptive qualifiers in brackets, such as '-mnyangi; [the white neck of a raven], ikombe' under White (p. 127) and 'ku-nola, ku-kabanya [lit. to strike knives together]' under Whet, to (p. 127).",
        "words": [
          {
            "target": "ku-riga, T.; ku-rigika, I.",
            "source": "Wind, to (wrap/coil, transitive & intransitive)",
            "pronunciation": "ku-riga / ku-rigika",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 128)"
          },
          {
            "target": "-a sakeni (lit. of the bush/forest)",
            "source": "Wild",
            "pronunciation": "a sa-ke-ni",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 127)"
          },
          {
            "target": "-shabwa",
            "source": "Wide, broad",
            "pronunciation": "shabwa",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 127)"
          },
          {
            "target": "-a lagelage, -chache",
            "source": "Wicked, bad",
            "pronunciation": "a la-ge-la-ge / cha-che",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 127)"
          },
          {
            "target": "-mnyangi (mnynge); [the white neck of a raven], ikombe",
            "source": "White (and the white collar of a raven)",
            "pronunciation": "mnyangi / i-kombe"
          },
          {
            "target": "ku-nola, ku-kabanya [lit. to strike knives together]",
            "source": "Whet, to (sharpen a blade)",
            "pronunciation": "ku-nola / ku-kabanya",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 127)"
          },
          {
            "target": "ku-soa ndigi [lit. to lack strength], ku-nyongeka",
            "source": "Weak, to be",
            "pronunciation": "ku-soa ndi-gi / ku-nyonge-ka",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 126)"
          },
          {
            "target": "meji; [fresh water], meji 'ga pepo; [warm water], meji 'ga moto",
            "source": "Water (fresh cold water & warm water)",
            "pronunciation": "me-ji 'ga pe-po / me-ji 'ga mo-to",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 126)"
          }
        ],
        "sentences": [
          {
            "target": "Nyamandu wa sakeni; nguo ino ni omnyangi tse.",
            "source": "A wild animal of the bush; this cloth is snow-white (Wray 1894, pp. 75, 127)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ku-nola, ku-kabanya [lit. to strike knives together]\" in Taita?",
            "correctAnswer": "Whet, to (sharpen a blade)",
            "options": [
              "Whet, to (sharpen a blade)",
              "Wind, to (wrap/coil, transitive & intransitive)",
              "Weak, to be",
              "Wild"
            ],
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 127)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Taita (Kisagala) term from Wray (1894, pp. 126–128) to its English meaning:",
            "correctAnswer": "ku-riga, T.; ku-rigika, I.: Wind, to (wrap/coil, transitive & intransitive)",
            "pairs": [
              {
                "left": "ku-riga, T.; ku-rigika, I.",
                "right": "Wind, to (transitive & intransitive)"
              },
              {
                "left": "-a sakeni",
                "right": "Wild (of the bush)"
              },
              {
                "left": "-shabwa",
                "right": "Wide, broad"
              },
              {
                "left": "ku-soa ndigi",
                "right": "Weak, to be (lit. to lack strength)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taita (Kisagala) term for \"White (and the white collar of a raven)\": ___",
            "correctAnswer": "-mnyangi (mnynge); [the white neck of a raven], ikombe",
            "options": [
              "-mnyangi (mnynge); [the white neck of a raven], ikombe",
              "ku-nola, ku-kabanya [lit. to strike knives together]",
              "ku-riga, T.; ku-rigika, I.",
              "-a sakeni"
            ],
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, pp. 75, 127)"
          }
        ]
      }
    ]
  },
  {
    "id": "taita-unit-12",
    "unitNumber": 12,
    "title": "Core Verbs, Body & Community Vocabulary",
    "description": "Master unabridged Taita (Kisagala) verbs, nouns, and literal idioms from Rev. J. Alfred Wray’s 1894 Vocabulary (pp. 123–126).",
    "icon": "Landmark",
    "color": "#0891B2",
    "skills": [
      {
        "id": "taita-open-dataset-12-1",
        "title": "Action Verbs, Vows & Anatomical Terms (U–W)",
        "icon": "BookOpen",
        "description": "Learn unabridged Taita (Kisagala) verbs, nouns, and literal glosses from Wray (1894, pp. 125–126).",
        "tips": "Pay attention to Wray's literal explanations in brackets, such as 'ku-gorera [lit. to speak for]' ('to warn'), 'mguli [lit. a string or rope]' ('vow'), 'hasi [lit. muscle]' ('vein'), and 'ku-fungula [lit. to unfasten]' ('to undo').",
        "words": [
          {
            "target": "ku-gorera [lit. to speak for], ku-amwira",
            "source": "Warn, to",
            "pronunciation": "ku-go-re-ra / ku-amwi-ra",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 126)"
          },
          {
            "target": "ku-ukisa, T.; ku-lamuka, I.",
            "source": "Wake, to (transitive & intransitive)",
            "pronunciation": "ku-u-ki-sa / ku-la-mu-ka",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 126)"
          },
          {
            "target": "mguli [lit. a string or rope]",
            "source": "Vow",
            "pronunciation": "mgu-li",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 126)"
          },
          {
            "target": "hasi [lit. muscle]",
            "source": "Vein, tendon, muscle",
            "pronunciation": "ha-si",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 125)"
          },
          {
            "target": "-a bule, bule",
            "source": "Vain, in (gratis, for nothing)",
            "pronunciation": "a bu-le",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 125)"
          },
          {
            "target": "-a lugulu",
            "source": "Uppermost",
            "pronunciation": "a lu-gu-lu",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 125)"
          },
          {
            "target": "ku-kunjula, T.; ku-kunjuka, I.",
            "source": "Unfold, to (transitive & intransitive)",
            "pronunciation": "ku-kunju-la / ku-kunju-ka",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 125)"
          },
          {
            "target": "ku-fungula [lit. to unfasten]",
            "source": "Undo, to",
            "pronunciation": "ku-fungu-la",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 125)"
          }
        ],
        "sentences": [
          {
            "target": "Walamsaje? — Nalamuka banana; mwanake amuukisa wawa wake.",
            "source": "How did you wake? — I awoke well; the child woke his grandfather (Wray 1894, pp. 116, 126)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ku-gorera [lit. to speak for], ku-amwira\" in Taita?",
            "correctAnswer": "Warn, to",
            "options": [
              "Warn, to",
              "Wake, to (transitive & intransitive)",
              "Vow",
              "Vein, tendon, muscle"
            ],
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 126)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Taita (Kisagala) term from Wray (1894, pp. 125–126) to its English meaning:",
            "correctAnswer": "ku-gorera [lit. to speak for], ku-amwira: Warn, to",
            "pairs": [
              {
                "left": "ku-gorera [lit. to speak for]",
                "right": "Warn, to"
              },
              {
                "left": "ku-ukisa, T.; ku-lamuka, I.",
                "right": "Wake, to (transitive & intransitive)"
              },
              {
                "left": "mguli [lit. a string or rope]",
                "right": "Vow"
              },
              {
                "left": "hasi [lit. muscle]",
                "right": "Vein, tendon, muscle"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taita (Kisagala) term for \"Vain, in (gratis, for nothing)\": ___",
            "correctAnswer": "-a bule, bule",
            "options": [
              "-a bule, bule",
              "-a lugulu",
              "ku-gorera [lit. to speak for]",
              "ku-ukisa, T.; ku-lamuka, I."
            ],
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 125)"
          }
        ]
      },
      {
        "id": "taita-open-dataset-12-2",
        "title": "Cognition, Numerals, Kinship & Household Terms (T–U)",
        "icon": "TreePine",
        "description": "Practice unabridged Taita (Kisagala) terms for cognition, counting, social organization, and household life from Wray (1894, pp. 124–125).",
        "tips": "Review Wray's complete definitions for 'ku-sikila [lit. to hear]' ('to understand'), 'ku-galula, T.; ku-galuka, I.' ('to turn'), 'ku-lolila [lit. to look to]' ('to trust'), and 'nguo ya ku-kuagila [lit. a cloth for wiping]' ('towel').",
        "words": [
          {
            "target": "ku-sikila [lit. to hear], ku-manya",
            "source": "Understand, to",
            "pronunciation": "ku-si-ki-la / ku-ma-nya",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 125)"
          },
          {
            "target": "pili, -ili; with nouns of the third class, mbili",
            "source": "Two",
            "pronunciation": "pi-li / i-li / mbi-li"
          },
          {
            "target": "ikumi na mbili",
            "source": "Twelve",
            "pronunciation": "i-ku-mi na mbi-li"
          },
          {
            "target": "ku-galula, T.; ku-galuka, I.; [round], ku-zungulusha, T.; ku-zunguluka, I.",
            "source": "Turn, to (and to turn round, transitive & intransitive)",
            "pronunciation": "ku-ga-lu-la / ku-ga-lu-ka / ku-zungu-lu-sha",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 125)"
          },
          {
            "target": "ku-lolila [lit. to look to]",
            "source": "Trust, to",
            "pronunciation": "ku-lo-li-la",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 124)"
          },
          {
            "target": "mbari, kikuku, lukolo",
            "source": "Tribe, clan, lineage",
            "pronunciation": "mba-ri / ki-ku-ku / lu-ko-lo",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 124)"
          },
          {
            "target": "mwiti (pl. mīti)",
            "source": "Tree (pl. Trees)",
            "pronunciation": "mwi-ti / mi-ti"
          },
          {
            "target": "nguo ya ku-kuagila [lit. a cloth for wiping]",
            "source": "Towel",
            "pronunciation": "nguo ya ku-kua-gi-la",
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 124)"
          }
        ],
        "sentences": [
          {
            "target": "Ijua lyagaluka; wandu wa mbari yetu wanasikila Kisagala.",
            "source": "The sun has turned (2 p.m.); the people of our clan understand Kisagala (Wray 1894, pp. 123, 124, 125)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ku-sikila [lit. to hear], ku-manya\" in Taita?",
            "correctAnswer": "Understand, to",
            "options": [
              "Understand, to",
              "Two",
              "Twelve",
              "Turn, to (and to turn round, transitive & intransitive)"
            ],
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 125)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Taita (Kisagala) term from Wray (1894, pp. 124–125) to its English meaning:",
            "correctAnswer": "ku-sikila [lit. to hear], ku-manya: Understand, to",
            "pairs": [
              {
                "left": "ku-sikila [lit. to hear], ku-manya",
                "right": "Understand, to"
              },
              {
                "left": "ku-galula, T.; ku-galuka, I.",
                "right": "Turn, to (transitive & intransitive)"
              },
              {
                "left": "ku-lolila [lit. to look to]",
                "right": "Trust, to"
              },
              {
                "left": "nguo ya ku-kuagila [lit. a cloth for wiping]",
                "right": "Towel"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Taita (Kisagala) term for \"Trust, to\": ___",
            "correctAnswer": "ku-lolila [lit. to look to]",
            "options": [
              "ku-lolila [lit. to look to]",
              "mbari, kikuku, lukolo",
              "ku-sikila [lit. to hear], ku-manya",
              "pili, -ili; with nouns of the third class, mbili"
            ],
            "hint": "Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (SPCK London, 1894, p. 124)"
          }
        ]
      },
      {
        "id": "taita-open-datasets-thinkkenya",
        "title": "Community Unity, Hillside Farming & Peace",
        "icon": "Database",
        "description": "Practice Kidaw'ida (Taita) parallel sentences from ThinkKenya / Waleghwa (26,662 pairs, CC-BY-4.0) and Mozilla Common Voice 25.0 (31,892 CC0 sentences).",
        "culturalNote": "Kidaw'ida (Taita) is one of Kenya's best-represented coastal-hinterland Bantu languages in open NLP thanks to Prof. Audrey Mbogho and the ThinkKenya team's 26,662 Kidaw'ida–Kiswahili parallel sentences and 31,892 CC0-1.0 sentences on Common Voice 25.0.",
        "grammarTip": "Compare Class 2 plural prefix wa- in wandru wose ('all people') with Class 7 prefix ch- in chawia cha kudighana ('peaceful cooperation').",
        "words": [
          {
            "target": "Wandru wa Wughanga",
            "source": "People of Taita",
            "pronunciation": "wah-ndroo wah woo-ghah-ngah"
          },
          {
            "target": "Mbuwa",
            "source": "Farms / Cultivated fields",
            "pronunciation": "mboo-wah"
          },
          {
            "target": "Chawia cha kudighana",
            "source": "Peaceful cooperation",
            "pronunciation": "chah-wee-ah chah koo-dee-ghah-nah"
          },
          {
            "target": "Wandru wose",
            "source": "All people",
            "pronunciation": "wah-ndroo woh-seh"
          },
          {
            "target": "Wumoja",
            "source": "Unity / Togetherness",
            "pronunciation": "woo-moh-jah"
          },
          {
            "target": "Kulima",
            "source": "To cultivate / farm",
            "pronunciation": "koo-lee-mah"
          },
          {
            "target": "Chuo",
            "source": "School / Place of learning",
            "pronunciation": "choo-oh"
          },
          {
            "target": "Machi",
            "source": "Water",
            "pronunciation": "mah-chee"
          }
        ],
        "sentences": [
          {
            "target": "Wandru wa Wughanga wanalima mbuwa jawo kwa wumoja.",
            "source": "The people of Taita cultivate their farms in unity."
          },
          {
            "target": "Chawia cha kudighana ni chuo cha wandru wose.",
            "source": "Peaceful cooperation is the school of all people."
          }
        ]
      },
      {
        "id": "taita-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Taita (Kidawida) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "ThinkKenya/Waleghwa Kidaw'ida Parallel Corpus (26,662 pairs, CC-BY-4.0), Mozilla Common Voice 25.0 Kidaw'ida (CC0-1.0), CLDF ASJP v20 TAITA & BantuBVD (CC-BY-4.0) & Public Domain Historical Lexicons (Krapf 1850, Shaw 1885, Taylor 1891, Wray 1894, Werner 1915, Johnston 1919 & BFBS 1921)",
        "words": [
                {
                        "target": "ku-rogoa, ku-lamusa",
                        "source": "Salute, to",
                        "pronunciation": "ku-rogoa ku-lamusa"
                },
                {
                        "target": "ku-siga",
                        "source": "Pardon / Forgive, to",
                        "pronunciation": "ku si-ga lit"
                },
                {
                        "target": "ku-siga [lit. to leave alone]",
                        "source": "Forgive / Remit, to [to pardon]",
                        "pronunciation": "ku-siga"
                },
                {
                        "target": "Wedi",
                        "source": "Peace / Goodness",
                        "pronunciation": "we-di"
                },
                {
                        "target": "Mwakucha / Uko wedi?",
                        "source": "Hello / How are you? (Dawida)",
                        "pronunciation": "mwakucha / uko wedi"
                },
                {
                        "target": "Kusesa",
                        "source": "To make peace",
                        "pronunciation": "kusesa"
                },
                {
                        "target": "Dunarinda itsango magondini ga Dawida",
                        "source": "We keep brass wire in Taita Hills",
                        "pronunciation": "dunarinda itsango magondini ga dawida"
                },
                {
                        "target": "Dunarinda nguo ya chunu magondini ga Dawida",
                        "source": "We keep loin-cloth in Taita Hills",
                        "pronunciation": "dunarinda nguo ya chunu magondini ga dawida"
                },
                {
                        "target": "Dunarinda nyungu magondini ga Dawida",
                        "source": "We keep cooking-pot in Taita Hills",
                        "pronunciation": "dunarinda nyungu magondini ga dawida"
                }
        ],
        "sentences": [
                {
                        "target": "Ni kuboie ku-lola kula matuku",
                        "source": "It is good to behold every day"
                },
                {
                        "target": "Duzaka ku-goshaose",
                        "source": "We want to borrow together"
                },
                {
                        "target": "Ni kuboie ku-gosha kula matuku",
                        "source": "It is good to borrow every day"
                },
                {
                        "target": "Duzaka ku-sagulaose",
                        "source": "We want to choose together"
                },
                {
                        "target": "Ni kuboie ku-sagula kula matuku",
                        "source": "It is good to choose every day"
                },
                {
                        "target": "Duzaka ku-umbaose",
                        "source": "We want to create together"
                },
                {
                        "target": "Ni kuboie ku-umba kula matuku",
                        "source": "It is good to create every day"
                },
                {
                        "target": "Duzaka ku-gendaose",
                        "source": "We want to depart together"
                },
                {
                        "target": "Ni kuboie ku-genda kula matuku",
                        "source": "It is good to depart every day"
                },
                {
                        "target": "Duzaka ku-shaiaose",
                        "source": "We want to desire together"
                },
                {
                        "target": "Ni kuboie ku-shaia kula matuku",
                        "source": "It is good to desire every day"
                },
                {
                        "target": "Duzaka ku-kilaose",
                        "source": "We want to escape together"
                }
        ]
},
      {
        "id": "taita-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Taita (Kidawida) sentences for healthcare, transport, and community safety.",
        "culturalNote": "ThinkKenya/Waleghwa Kidaw'ida Parallel Corpus (26,662 pairs, CC-BY-4.0), Mozilla Common Voice 25.0 Kidaw'ida (CC0-1.0), CLDF ASJP v20 TAITA & BantuBVD (CC-BY-4.0) & Public Domain Historical Lexicons (Krapf 1850, Shaw 1885, Taylor 1891, Wray 1894, Werner 1915, Johnston 1919 & BFBS 1921)",
        "words": [
                {
                        "target": "Dunarinda kitundu magondini ga Dawida",
                        "source": "We keep store-house in Taita Hills",
                        "pronunciation": "dunarinda kitundu magondini ga dawida"
                },
                {
                        "target": "Dunarinda nguo ya meza magondini ga Dawida",
                        "source": "We keep table-cloth in Taita Hills",
                        "pronunciation": "dunarinda nguo ya meza magondini ga dawida"
                },
                {
                        "target": "Dunarinda kinengele magondini ga Dawida",
                        "source": "We keep string of beads in Taita Hills",
                        "pronunciation": "dunarinda kinengele magondini ga dawida"
                },
                {
                        "target": "Dunarinda garo magondini ga Dawida",
                        "source": "We keep bachelor's house in Taita Hills",
                        "pronunciation": "dunarinda garo magondini ga dawida"
                },
                {
                        "target": "M-nānya, I-nānya",
                        "source": "Eight",
                        "pronunciation": "m-nanya i-nanya"
                },
                {
                        "target": "Mī-rōnggo mī-nā",
                        "source": "Forty",
                        "pronunciation": "mee roh-ngoh mee nah"
                }
        ],
        "sentences": [
                {
                        "target": "Ni kuboie ku-kila kula matuku",
                        "source": "It is good to escape every day"
                },
                {
                        "target": "Duzaka ku-fungaose",
                        "source": "We want to fasten together"
                },
                {
                        "target": "Ni kuboie ku-funga kula matuku",
                        "source": "It is good to fasten every day"
                },
                {
                        "target": "Dunarinda kitundu magondini ga Dawida",
                        "source": "We keep store-house in Taita Hills"
                }
        ]
}
    ]
  }
];
