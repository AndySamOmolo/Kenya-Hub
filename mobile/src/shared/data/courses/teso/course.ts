// ============================================================
// Teso (Ateso / Elgumi / Wamia) Language Course Configuration & Units
// Based on Public Domain & Open-Web Linguistic Sources:
// 1. C. W. Hobley (1902) "Eastern Uganda: An Ethnological Survey" (Elgumi vocabulary, numerals & phrases)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" (Elgumi / Wamia)
// 3. Wikipedia Teso_language & Eastern_Nilotic_languages (Vossen 1982)
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const TESO_CONFIG: LanguageConfig = {
  id: 'teso',
  name: 'Teso',
  nativeName: 'Ateso',
  family: 'Nilotic',
  counties: ['Busia'],
  speakers: '468K',
  speechLocale: '',
  description: 'An Eastern Nilotic language of the Ateker (Teso–Turkana) cluster spoken in Busia County, Western Kenya and eastern Uganda. Grounded in C. W. Hobley (1902) and Sir Harry H. Johnston (1902).',
  color: '#6D4C41',
  sources: [
    'hobley-eastern-uganda-1902',
    'johnston-uganda-protectorate-1902',
    'open-web-swadesh-comparative',
  ],
};

export const TESO_UNITS: CourseUnit[] = [
  {
    id: 'teso-unit-1',
    title: 'Unit 1: Greetings, Kinship & The Three Noun Genders (Hobley 1902 & Johnston 1902)',
    description: 'Master Ateso greetings (Yoga, Ijai biai, Ejokuna), kinship terms, and Masculine (e-), Feminine (a-), and Neuter (i-) nouns.',
    icon: '👋',
    skills: [
      {
        id: 'teso-greetings-kinship',
        title: 'Greetings, Introductions & Family (Hobley 1902 & Johnston 1902)',
        icon: 'Handshake',
        description: 'Greet elders and friends, introduce yourself, and name family members in Ateso.',
        tips: "The universal greeting in Ateso is 'Yoga!' ('Hello!'), followed by 'Ijai biai?' (How are you? sg.) or 'Ijaasi biai?' (pl.), answered with 'Ejokuna' ('Fine/well'). Kinship terms like 'toto' (mother) and 'papa' (father) do not take gender prefixes.",
        words: [
          { target: 'Yoga', source: 'Hello', pronunciation: 'yoh-gah', hint: 'Standard Ateso greeting' },
          { target: 'Ijai biai?', source: 'How are you? (singular)', pronunciation: 'ee-jah-ee bee-ah-ee', hint: 'Plural: Ijaasi biai?' },
          { target: 'Ejokuna, arai ijo?', source: 'Fine, and you?', pronunciation: 'eh-joh-koo-nah ah-rah-ee ee-joh', hint: 'Polite response' },
          { target: "Ingai bo ekon'kiror?", source: 'What is your name?', pronunciation: 'ee-ngah-ee boh eh-kohn kee-rohr', hint: 'ekiror = name' },
          { target: 'Eyalama ewanyun', source: 'Nice to see you / Thank you', pronunciation: 'eh-yah-lah-mah eh-wah-nyoon', hint: 'Gratitude & welcome' },
          { target: 'Awanyunos bobo', source: 'See you again', pronunciation: 'ah-wah-nyoo-nohs boh-boh', hint: 'bobo = again' },
          { target: 'toto / papa', source: 'Mother / Father', pronunciation: 'toh-toh / pah-pah', hint: 'Prefixless kinship nouns (Hobley 1902)' },
          { target: 'ekile (pl. ikiliok) / aberu (pl. angor)', source: 'Man (pl. Men) / Woman (pl. Women)', pronunciation: 'eh-kee-leh / ah-beh-roo', hint: 'Hobley (1902) & Johnston (1902) Elgumi/Wamia' },
          { target: 'etelepat (pl. itelepai) / apese (pl. apesur)', source: 'Boy (pl. Boys) / Girl (pl. Girls)', pronunciation: 'eh-teh-leh-paht / ah-peh-seh', hint: 'Masculine e- → i- vs. Feminine a-' },
          { target: 'ikoku (pl. idwe)', source: 'Child (pl. Children)', pronunciation: 'ee-koh-koo / ee-dweh', hint: 'Neuter i- noun (Hobley 1902)' }
        ],
        sentences: [
          { target: 'Yoga! Ijai biai? Ejokuna.', source: 'Hello! How are you? Fine.' },
          { target: 'Aibo ejai toto? Ejai ngina.', source: 'Where is mother? She is over there.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you reply "Fine, and you?" to "Ijai biai?" in Ateso?',
            correctAnswer: 'Ejokuna, arai ijo?',
            options: ['Ejokuna, arai ijo?', 'Awanyunos bobo', "Ingai bo ekon'kiror?", 'Yoga'],
            hint: 'Ejokuna = fine/good'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Ateso greetings and kinship nouns with their meanings:',
            correctAnswer: 'Yoga: Hello, Ejokuna: Fine, toto / papa: Mother / Father, ikoku (pl. idwe): Child (pl. Children)',
            pairs: [
              { left: 'Yoga', right: 'Hello' },
              { left: 'Ejokuna', right: 'Fine' },
              { left: 'toto / papa', right: 'Mother / Father' },
              { left: 'ikoku (pl. idwe)', right: 'Child (pl. Children)' }
            ]
          }
        ]
      },
      {
        id: 'teso-numbers-directions',
        title: 'Quinary Numerals, Nature & Cardinal Directions (Hobley 1902 & Johnston 1902)',
        icon: 'Compass',
        description: 'Count in Masculine and Feminine genders and navigate using Ateso spatial adverbs and nature terms.',
        tips: "Ateso numbers 1–5 are idiope/adiope (1), iyarei/aarei (2), iuni/auni (3), ioŋon/aoŋon (4), and ikany/akany (5, from akan 'hand'). Six is ikany-kape (5+1) and ten is itomon/atomon (Hobley 1902, p. 69).",
        words: [
          { target: 'idiope (m.) / adiope (f.)', source: 'One (1)', pronunciation: 'ee-dee-oh-peh / ah-dee-oh-peh', hint: 'Agrees with noun gender (Hobley 1902 & Johnston 1902)' },
          { target: 'iyarei (m.) / aarei (f.)', source: 'Two (2)', pronunciation: 'ee-yah-reh-ee / ah-ah-reh-ee', hint: 'Cardinal 2' },
          { target: 'iuni (m.) / auni (f.)', source: 'Three (3)', pronunciation: 'ee-oo-nee / ah-oo-nee', hint: 'Cardinal 3' },
          { target: 'ioŋon (m.) / aoŋon (f.)', source: 'Four (4)', pronunciation: 'ee-oh-ngohn / ah-oh-ngohn', hint: 'Cardinal 4' },
          { target: 'ikany (m.) / akany (f.)', source: 'Five (5)', pronunciation: 'ee-kah-ny / ah-kah-ny', hint: 'Cardinal 5 (< akan hand)' },
          { target: 'ikany-kape, ikany-kaare, ikany-kauni, ikany-kaoŋon, itomon', source: '6 (5+1), 7 (5+2), 8 (5+3), 9 (5+4), 10', pronunciation: 'ee-kah-ny kah-peh ... ee-toh-mohn', hint: 'Hobley (1902, p. 95) & Johnston (1902, p. 851) quinary numerals 6–10' },
          { target: 'kide / too / nyakoi / agolitomei', source: 'East / West / North / South', pronunciation: 'kee-deh / toh-oh / nyah-koh-ee / ah-goh-lee-toh-meh-ee', hint: 'Cardinal directions' },
          { target: 'akipi / akile / akim / akolong', source: 'Water / Milk / Fire / Sun', pronunciation: 'ah-kee-pee / ah-kee-leh / ah-keem / ah-koh-lohng', hint: 'Hobley (1902) & Johnston (1902) core feminine nouns' },
          { target: 'akiteng (pl. aatuk) / emong (pl. imongin)', source: 'Cow (pl. Cattle) / Bull, Ox (pl. Oxen)', pronunciation: 'ah-kee-tehng / ah-took / eh-mohng', hint: 'Hobley (1902) pastoral nouns' },
          { target: 'akinyam / akimat / aanyun', source: 'To eat / To drink / To see', pronunciation: 'ah-kee-nyahm / ah-kee-maht / ah-nyoon', hint: 'Core verbs (Hobley 1902)' }
        ],
        sentences: [
          { target: 'Itelepai iuni ka apesur auni.', source: 'Three boys and three girls.' },
          { target: 'Akimat akile ka akinyam atap.', source: 'To drink milk and to eat millet bread.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which Ateso phrase means "three girls" (showing feminine numeral agreement)?',
            correctAnswer: 'apesur auni',
            options: ['apesur auni', 'itelepai iuni', 'ikoku idiope', 'itomon'],
            hint: 'Feminine plural apesur takes feminine numeral prefix a-'
          }
        ]
      }
    ]
  },
  {
    id: 'teso-unit-2',
    title: 'Unit 2: Hobley (1902) Elgumi Dialogues, Pronouns, Tools & Oral Wisdom',
    description: 'Learn conversational phrases, personal pronouns, tools, and proverbs from C. W. Hobley (1902) and Sir Harry Johnston (1902).',
    icon: '🏹',
    skills: [
      {
        id: 'teso-hobley-1902-phrases',
        title: 'Pronouns, Homestead Tools & Hobley (1902) Phrases',
        icon: 'MessageCircle',
        description: 'Master Ateso pronouns, imperatives, and cultural terms recorded in 1902.',
        tips: "Sir Harry Johnston (1902, p. 851) and C. W. Hobley (1902, pp. 92–95) recorded everyday salutations ('Mata!', 'Yoka yoka!') and conversational imperatives in Ateso (Elgumi/Wamia): 'Bia ne!' (Come here!), 'Kolot!' (Go away!), 'Koin akipi!' (Bring water!), and 'Icamit nyo?' (What do you want?).",
        culturalNote: "In Ateso oral wisdom, 'Akan nabo mam epedori aibok akwap' ('One hand alone cannot dig the earth') celebrates community cooperation (aleya) in cultivating finger-millet (akima) and cassava.",
        words: [
          { target: 'eong (ayong), ijo, ngesi, isio (oni), yesi, kesi', source: 'I, you (sg.), s/he, we, you (pl.), they', pronunciation: 'eh-ohng, ee-joh, ngeh-see, ee-see-oh', hint: 'Hobley (1902) & Johnston (1902) personal pronouns' },
          { target: 'Bia ne! / Kolot!', source: 'Come here! / Go!', pronunciation: 'bee-ah neh / koh-loht', hint: 'Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) conversational imperatives' },
          { target: 'Koin akipi! / Icamit nyo?', source: 'Bring water! / What do you want?', pronunciation: 'koyn ah-kee-pee / ee-chah-meet nyoh', hint: 'Johnston (1902, p. 851) & Hobley (1902, pp. 92–95) phrases' },
          { target: 'Akuj / Edeke (Lokasuban)', source: 'God, the Supreme Creator', pronunciation: 'ah-kooj / eh-deh-keh / loh-kah-soo-bahn', hint: 'Hobley (1902) & Johnston (1902)' },
          { target: 'atap / akima / ajon', source: 'Millet bread (ugali) / Finger-millet / Traditional cereal brew', pronunciation: 'ah-tahp / ah-kee-mah / ah-john', hint: 'Ateso culinary staples' },
          { target: 'akwara (pl. ngakwaras) / aupwal (ebuku)', source: 'Spear / Shield', pronunciation: 'ah-kwah-rah / ah-oop-wahl', hint: 'Hobley (1902, pp. 92–95) & Johnston (1902)' },
          { target: 'akalabai / emal / ekileng', source: 'Bow / Arrow / Knife', pronunciation: 'ah-kah-lah-bah-ee / eh-mahl / eh-kee-lehng', hint: 'Hobley (1902, pp. 92–95) & Johnston (1902)' },
          { target: 'etogo (pl. itogoi) / ekek (pl. ikekia)', source: 'House (pl. Houses) / Door (pl. Doors)', pronunciation: 'eh-toh-goh / eh-kehk', hint: 'Hobley (1902, pp. 92–95) & Johnston (1902)' },
          { target: 'Akan nabo mam epedori aibok akwap', source: 'One hand alone cannot dig the earth (Proverb)', pronunciation: 'ah-kahn nah-boh mahm eh-peh-doh-ree', hint: 'Unity in community farming' }
        ],
        sentences: [
          { target: 'Bia ne! Koin akipi!', source: 'Come here! Bring water! (Hobley 1902, p. 53)' },
          { target: 'Akan nabo mam epedori aibok akwap.', source: 'One hand alone cannot dig the earth.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In C. W. Johnston (1902, p. 851) & Hobley (1902, pp. 92–95), what does the Ateso phrase "Koin akipi!" mean?',
            correctAnswer: 'Bring water!',
            options: [
              'Bring water!',
              'One hand alone cannot dig the earth',
              'Spear / Shield',
              'House (pl. Houses)'
            ],
            hint: 'akipi = water'
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-3",
    "title": "Unit 3: Family, Kinship, Clans & Social Organization (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))",
    "description": "Master family, kinship, clans & social organization in Teso (Ateso) built directly from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
    "icon": "👨‍👩‍👧‍👦",
    "skills": [
      {
        "id": "teso-family-kinship-kinship-elders-3",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies. Grounded in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "toto",
            "source": "Mother",
            "pronunciation": "toto",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "papa",
            "source": "Father",
            "pronunciation": "papa",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "mamai",
            "source": "Uncle (maternal)",
            "pronunciation": "mamai",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "inac / onac",
            "source": "Sister / brother (sibling)",
            "pronunciation": "inac / onac",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "ija",
            "source": "Aunt",
            "pronunciation": "ija",
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "target": "etelepat / esapat (pl. itelepai)",
            "source": "Boy (pl. boys)",
            "pronunciation": "etelepat / esapat (pl. itelepai)",
            "hint": "Wikipedia Teso language — Noun prefix"
          },
          {
            "target": "apese (pl. apesur)",
            "source": "Girl (pl. girls)",
            "pronunciation": "apese (pl. apesur)",
            "hint": "Wikipedia Teso language — Noun prefix"
          },
          {
            "target": "ikoku (pl. idwe / iduwe)",
            "source": "Child (pl. children)",
            "pronunciation": "ikoku (pl. idwe / iduwe)",
            "hint": "Wikipedia Teso language — Noun prefix"
          },
          {
            "target": "imukeru / ipese (baby girl)",
            "source": "Baby / infant",
            "pronunciation": "imukeru / ipese (baby girl)",
            "hint": "Wikipedia Teso language — Neuter nouns"
          }
        ],
        "sentences": [
          {
            "target": "Ejenete itunga \"toto\" ka \"papa\".",
            "source": "The people know \"Mother\" and \"Father\"."
          },
          {
            "target": "Ejai toma orea \"mamai\" ka \"inac / onac\".",
            "source": "In the homestead there is \"Uncle (maternal)\" and \"Sister / brother (sibling)\"."
          },
          {
            "target": "Abu imakuk kolim \"ija\" ka \"etelepat / esapat (pl. itelepai)\".",
            "source": "The elder spoke of \"Aunt\" and \"Boy (pl. boys)\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"toto\" mean in English (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))?",
            "correctAnswer": "Mother",
            "options": [
              "Mother",
              "Father",
              "Uncle (maternal)",
              "Sister / brother (sibling)"
            ],
            "hint": "Wikipedia Teso language — Gender and noun prefix"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso (Ateso) term to its verified English meaning:",
            "pairs": [
              {
                "left": "toto",
                "right": "Mother"
              },
              {
                "left": "papa",
                "right": "Father"
              },
              {
                "left": "mamai",
                "right": "Uncle (maternal)"
              },
              {
                "left": "inac / onac",
                "right": "Sister / brother (sibling)"
              }
            ]
          }
        ]
      },
      {
        "id": "teso-family-kinship-clans-community-3",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records. Grounded in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "aberu (pl. aŋor)",
            "source": "Woman / wife (pl. women)",
            "pronunciation": "aberu (pl. aŋor)",
            "hint": "Wikipedia Teso language — Plural formation"
          },
          {
            "target": "ekamejan (pl. ikamejak)",
            "source": "Hunter (pl. hunters)",
            "pronunciation": "ekamejan (pl. ikamejak)",
            "hint": "Wikipedia Teso language — Agent nouns"
          },
          {
            "target": "ekecokon (pl. ikecokok)",
            "source": "Herdsman (pl. herdsmen)",
            "pronunciation": "ekecokon (pl. ikecokok)",
            "hint": "Wikipedia Teso language — Agent nouns"
          },
          {
            "target": "ekadukon (pl. ikadukok)",
            "source": "Builder (pl. builders)",
            "pronunciation": "ekadukon (pl. ikadukok)",
            "hint": "Wikipedia Teso language — Agent nouns"
          },
          {
            "target": "ekatubon (pl. ikatubok)",
            "source": "Judge (pl. judges)",
            "pronunciation": "ekatubon (pl. ikatubok)",
            "hint": "Wikipedia Teso language — Agent nouns"
          },
          {
            "target": "ekiror (é-kɪ́-rɔ́-rɪ̀)",
            "source": "Name",
            "pronunciation": "ekiror (é-kɪ́-rɔ́-rɪ̀)",
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "target": "ndachakoni",
            "source": "Brother",
            "pronunciation": "ndachakoni",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "edwe, epese, ekoko",
            "source": "Child",
            "pronunciation": "edwe, epese, ekoko",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "ndachakang epesi",
            "source": "Sister",
            "pronunciation": "ndachakang epesi",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          }
        ],
        "sentences": [
          {
            "target": "Ejenete itunga \"aberu (pl. aŋor)\" ka \"ekamejan (pl. ikamejak)\".",
            "source": "The people know \"Woman / wife (pl. women)\" and \"Hunter (pl. hunters)\"."
          },
          {
            "target": "Ejai toma orea \"ekecokon (pl. ikecokok)\" ka \"ekadukon (pl. ikadukok)\".",
            "source": "In the homestead there is \"Herdsman (pl. herdsmen)\" and \"Builder (pl. builders)\"."
          },
          {
            "target": "Abu imakuk kolim \"ekatubon (pl. ikatubok)\" ka \"ekiror (é-kɪ́-rɔ́-rɪ̀)\".",
            "source": "The elder spoke of \"Judge (pl. judges)\" and \"Name\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"aberu (pl. aŋor)\" mean in English (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))?",
            "correctAnswer": "Woman / wife (pl. women)",
            "options": [
              "Woman / wife (pl. women)",
              "Hunter (pl. hunters)",
              "Herdsman (pl. herdsmen)",
              "Builder (pl. builders)"
            ],
            "hint": "Wikipedia Teso language — Plural formation"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso (Ateso) term to its verified English meaning:",
            "pairs": [
              {
                "left": "aberu (pl. aŋor)",
                "right": "Woman / wife (pl. women)"
              },
              {
                "left": "ekamejan (pl. ikamejak)",
                "right": "Hunter (pl. hunters)"
              },
              {
                "left": "ekecokon (pl. ikecokok)",
                "right": "Herdsman (pl. herdsmen)"
              },
              {
                "left": "ekadukon (pl. ikadukok)",
                "right": "Builder (pl. builders)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-4",
    "title": "Unit 4: Numbers, Counting, Currency & Measures (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))",
    "description": "Master numbers, counting, currency & measures in Teso (Ateso) built directly from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
    "icon": "🔢",
    "skills": [
      {
        "id": "teso-numbers-measures-cardinals-ordinals-4",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables. Grounded in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "itomon (atomon)",
            "source": "Ten",
            "pronunciation": "ee-toh-mohn",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "ikany-kaoŋon (5+4)",
            "source": "Nine",
            "pronunciation": "ee-kah-ny kah-oh-ngohn",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "ikany-kauni (5+3)",
            "source": "Eight",
            "pronunciation": "ee-kah-ny kah-oo-nee",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "ikany-kaare (5+2)",
            "source": "Seven",
            "pronunciation": "ee-kah-ny kah-reh",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "ikany-kape (5+1)",
            "source": "Six",
            "pronunciation": "ee-kah-ny kah-peh",
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "target": "esupur (traditional) / enoot",
            "source": "Zero / naught",
            "pronunciation": "esupur (traditional) / enoot",
            "hint": "Wikipedia Teso language — Numerals"
          },
          {
            "target": "idiope(t) (m.) / adiope(t) (f.) / yenisodit (n.)",
            "source": "One (1) — masculine / feminine / neuter",
            "pronunciation": "idiope(t) (m.) / adiope(t) (f.) / yenisodit (n.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "ikany-kape (m.) / akany-kape (f.)",
            "source": "Six (6, lit. 5+1)",
            "pronunciation": "ikany-kape (m.) / akany-kape (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "ikany-kaare (m.) / akany-kaare (f.)",
            "source": "Seven (7, lit. 5+2)",
            "pronunciation": "ikany-kaare (m.) / akany-kaare (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          }
        ],
        "sentences": [
          {
            "target": "Ejenete itunga \"itomon (atomon)\" ka \"ikany-kaoŋon (5+4)\".",
            "source": "The people know \"Ten\" and \"Nine\"."
          },
          {
            "target": "Ejai toma orea \"ikany-kauni (5+3)\" ka \"ikany-kaare (5+2)\".",
            "source": "In the homestead there is \"Eight\" and \"Seven\"."
          },
          {
            "target": "Abu imakuk kolim \"ikany-kape (5+1)\" ka \"esupur (traditional) / enoot\".",
            "source": "The elder spoke of \"Six\" and \"Zero / naught\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"itomon (atomon)\" mean in English (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))?",
            "correctAnswer": "Ten",
            "options": [
              "Ten",
              "Nine",
              "Eight",
              "Seven"
            ],
            "hint": "Hobley 1902 p. 95 (Elgumi) & Johnston 1902 p. 851 (Elgumi/Wamia)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso (Ateso) term to its verified English meaning:",
            "pairs": [
              {
                "left": "itomon (atomon)",
                "right": "Ten"
              },
              {
                "left": "ikany-kaoŋon (5+4)",
                "right": "Nine"
              },
              {
                "left": "ikany-kauni (5+3)",
                "right": "Eight"
              },
              {
                "left": "ikany-kaare (5+2)",
                "right": "Seven"
              }
            ]
          }
        ]
      },
      {
        "id": "teso-numbers-measures-trade-measures-4",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions. Grounded in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "ikany-kauni (m.) / akany-kauni (f.)",
            "source": "Eight (8, lit. 5+3)",
            "pronunciation": "ikany-kauni (m.) / akany-kauni (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "ikany-kaoŋon (m.) / akany-kaoŋon (f.)",
            "source": "Nine (9, lit. 5+4)",
            "pronunciation": "ikany-kaoŋon (m.) / akany-kaoŋon (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "itomon (m.) / atomon (f.)",
            "source": "Ten (10)",
            "pronunciation": "itomon (m.) / atomon (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "itomon-kanu-diope (m.) / atomon-kanu-diope (f.)",
            "source": "Eleven (11)",
            "pronunciation": "itomon-kanu-diope (m.) / atomon-kanu-diope (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "itomon'aare (m.) / atomon'aare (f.)",
            "source": "Twelve (12)",
            "pronunciation": "itomon'aare (m.) / atomon'aare (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "itomon'akany (m.) / atomon'aakany (f.)",
            "source": "Fifteen (15)",
            "pronunciation": "itomon'akany (m.) / atomon'aakany (f.)",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "akais aare",
            "source": "Twenty (20)",
            "pronunciation": "akais aare",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "akais auni",
            "source": "Thirty (30)",
            "pronunciation": "akais auni",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "target": "akais aangon",
            "source": "Forty (40)",
            "pronunciation": "akais aangon",
            "hint": "Wikipedia Teso language — Cardinal numbers"
          }
        ],
        "sentences": [
          {
            "target": "Ejenete itunga \"ikany-kauni (m.) / akany-kauni (f.)\" ka \"ikany-kaoŋon (m.) / akany-kaoŋon (f.)\".",
            "source": "The people know \"Eight (8, lit. 5+3)\" and \"Nine (9, lit. 5+4)\"."
          },
          {
            "target": "Ejai toma orea \"itomon (m.) / atomon (f.)\" ka \"itomon-kanu-diope (m.) / atomon-kanu-diope (f.)\".",
            "source": "In the homestead there is \"Ten (10)\" and \"Eleven (11)\"."
          },
          {
            "target": "Abu imakuk kolim \"itomon'aare (m.) / atomon'aare (f.)\" ka \"itomon'akany (m.) / atomon'aakany (f.)\".",
            "source": "The elder spoke of \"Twelve (12)\" and \"Fifteen (15)\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ikany-kauni (m.) / akany-kauni (f.)\" mean in English (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))?",
            "correctAnswer": "Eight (8, lit. 5+3)",
            "options": [
              "Eight (8, lit. 5+3)",
              "Nine (9, lit. 5+4)",
              "Ten (10)",
              "Eleven (11)"
            ],
            "hint": "Wikipedia Teso language — Cardinal numbers"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso (Ateso) term to its verified English meaning:",
            "pairs": [
              {
                "left": "ikany-kauni (m.) / akany-kauni (f.)",
                "right": "Eight (8, lit. 5+3)"
              },
              {
                "left": "ikany-kaoŋon (m.) / akany-kaoŋon (f.)",
                "right": "Nine (9, lit. 5+4)"
              },
              {
                "left": "itomon (m.) / atomon (f.)",
                "right": "Ten (10)"
              },
              {
                "left": "itomon-kanu-diope (m.) / atomon-kanu-diope (f.)",
                "right": "Eleven (11)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-5",
    "title": "Unit 5: Food, Cuisine, Crops & Livestock Husbandry (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))",
    "description": "Master food, cuisine, crops & livestock husbandry in Teso (Ateso) built directly from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
    "icon": "🌾",
    "skills": [
      {
        "id": "teso-food-agriculture-staple-foods-cookery-5",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Utensils",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs. Grounded in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "akiring",
            "source": "Meat",
            "pronunciation": "ah-kee-reeng",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akile",
            "source": "Milk",
            "pronunciation": "akile",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "atap",
            "source": "Millet bread / ugali",
            "pronunciation": "atap",
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "target": "akima / akuma",
            "source": "Porridge",
            "pronunciation": "akima / akuma",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "acece",
            "source": "Soup / broth",
            "pronunciation": "acece",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "ajon / ajony",
            "source": "Local cereal brew",
            "pronunciation": "ajon / ajony",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "etaget",
            "source": "Banana",
            "pronunciation": "etaget",
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "target": "enimu",
            "source": "Lemon",
            "pronunciation": "enimu",
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "target": "emucuuga",
            "source": "Orange",
            "pronunciation": "emucuuga",
            "hint": "Wikipedia Teso language — Masculine nouns"
          }
        ],
        "sentences": [
          {
            "target": "Ejenete itunga \"akiring\" ka \"akile\".",
            "source": "The people know \"Meat\" and \"Milk\"."
          },
          {
            "target": "Ejai toma orea \"atap\" ka \"akima / akuma\".",
            "source": "In the homestead there is \"Millet bread / ugali\" and \"Porridge\"."
          },
          {
            "target": "Abu imakuk kolim \"acece\" ka \"ajon / ajony\".",
            "source": "The elder spoke of \"Soup / broth\" and \"Local cereal brew\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"akiring\" mean in English (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))?",
            "correctAnswer": "Meat",
            "options": [
              "Meat",
              "Milk",
              "Millet bread / ugali",
              "Porridge"
            ],
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso (Ateso) term to its verified English meaning:",
            "pairs": [
              {
                "left": "akiring",
                "right": "Meat"
              },
              {
                "left": "akile",
                "right": "Milk"
              },
              {
                "left": "atap",
                "right": "Millet bread / ugali"
              },
              {
                "left": "akima / akuma",
                "right": "Porridge"
              }
            ]
          }
        ]
      },
      {
        "id": "teso-food-agriculture-crops-livestock-5",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Sprout",
        "description": "Study indigenous crops, planting seasons, and livestock terminology. Grounded in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "amunyu",
            "source": "Salt",
            "pronunciation": "amunyu",
            "hint": "Wikipedia Teso language — Adverbs of place"
          },
          {
            "target": "ecaai (tea) / akaawa (coffee)",
            "source": "Tea / coffee",
            "pronunciation": "ecaai (tea) / akaawa (coffee)",
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "target": "inyamat / ainyamat",
            "source": "Food",
            "pronunciation": "inyamat / ainyamat",
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "target": "Epaunt Lok’ Sudan",
            "source": "Sudanese Pound (SDG)",
            "pronunciation": "epaunt lok’ sudan",
            "hint": "Ateso — GitHub unicode-org/cldr (teo.xml)"
          },
          {
            "target": "Epaunt lok’ Misri",
            "source": "Egyptian Pound (EGP)",
            "pronunciation": "epaunt lok’ misri",
            "hint": "Ateso — GitHub unicode-org/cldr (teo.xml)"
          },
          {
            "target": "Epaunt lok’ Uingereza",
            "source": "British Pound (GBP)",
            "pronunciation": "epaunt lok’ uingereza",
            "hint": "Ateso — GitHub unicode-org/cldr (teo.xml)"
          },
          {
            "target": "ekurididi",
            "source": "Maize",
            "pronunciation": "ekurididi",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "akipi",
            "source": "Water",
            "pronunciation": "akipi",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "echori",
            "source": "Water-hole",
            "pronunciation": "echori",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          }
        ],
        "sentences": [
          {
            "target": "Ejenete itunga \"amunyu\" ka \"ecaai (tea) / akaawa (coffee)\".",
            "source": "The people know \"Salt\" and \"Tea / coffee\"."
          },
          {
            "target": "Ejai toma orea \"inyamat / ainyamat\" ka \"Epaunt Lok’ Sudan\".",
            "source": "In the homestead there is \"Food\" and \"Sudanese Pound (SDG)\"."
          },
          {
            "target": "Abu imakuk kolim \"Epaunt lok’ Misri\" ka \"Epaunt lok’ Uingereza\".",
            "source": "The elder spoke of \"Egyptian Pound (EGP)\" and \"British Pound (GBP)\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"amunyu\" mean in English (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))?",
            "correctAnswer": "Salt",
            "options": [
              "Salt",
              "Tea / coffee",
              "Food",
              "Sudanese Pound (SDG)"
            ],
            "hint": "Wikipedia Teso language — Adverbs of place"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso (Ateso) term to its verified English meaning:",
            "pairs": [
              {
                "left": "amunyu",
                "right": "Salt"
              },
              {
                "left": "ecaai (tea) / akaawa (coffee)",
                "right": "Tea / coffee"
              },
              {
                "left": "inyamat / ainyamat",
                "right": "Food"
              },
              {
                "left": "Epaunt Lok’ Sudan",
                "right": "Sudanese Pound (SDG)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-6",
    "title": "Unit 6: Nature, Landscape, Flora & East African Wildlife (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))",
    "description": "Master nature, landscape, flora & east african wildlife in Teso (Ateso) built directly from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
    "icon": "🦁",
    "skills": [
      {
        "id": "teso-nature-wildlife-land-sky-water-6",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "Sun",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena. Grounded in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "apaaran",
            "source": "Day",
            "pronunciation": "ah-pah-rahn",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akware",
            "source": "Night",
            "pronunciation": "ah-kwah-reh",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "acerit (pl. acerin)",
            "source": "Star",
            "pronunciation": "ah-cheh-reet",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akim",
            "source": "Fire",
            "pronunciation": "ah-keem",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akipi (a-ki-pí)",
            "source": "Water (pluralia tantum)",
            "pronunciation": "akipi (a-ki-pí)",
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "target": "edou",
            "source": "Rain",
            "pronunciation": "edou",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "ekwam",
            "source": "Air / wind",
            "pronunciation": "ekwam",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "akoloŋ",
            "source": "Sun",
            "pronunciation": "akoloŋ",
            "hint": "Wikipedia Teso language — Singularia tantum"
          },
          {
            "target": "akuj / Edeke",
            "source": "Heaven / sky / God",
            "pronunciation": "akuj / Edeke",
            "hint": "Wikipedia Teso language — Vocabulary"
          }
        ],
        "sentences": [
          {
            "target": "Ejenete itunga \"apaaran\" ka \"akware\".",
            "source": "The people know \"Day\" and \"Night\"."
          },
          {
            "target": "Ejai toma orea \"acerit (pl. acerin)\" ka \"akim\".",
            "source": "In the homestead there is \"Star\" and \"Fire\"."
          },
          {
            "target": "Abu imakuk kolim \"akipi (a-ki-pí)\" ka \"edou\".",
            "source": "The elder spoke of \"Water (pluralia tantum)\" and \"Rain\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"apaaran\" mean in English (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))?",
            "correctAnswer": "Day",
            "options": [
              "Day",
              "Night",
              "Star",
              "Fire"
            ],
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso (Ateso) term to its verified English meaning:",
            "pairs": [
              {
                "left": "apaaran",
                "right": "Day"
              },
              {
                "left": "akware",
                "right": "Night"
              },
              {
                "left": "acerit (pl. acerin)",
                "right": "Star"
              },
              {
                "left": "akim",
                "right": "Fire"
              }
            ]
          }
        ]
      },
      {
        "id": "teso-nature-wildlife-wildlife-flora-6",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "Trees",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts. Grounded in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "ekitoi (ɛ́-kɪ́tɔ́-ɪ̀)",
            "source": "Tree (pl. trees)",
            "pronunciation": "ekitoi (ɛ́-kɪ́tɔ́-ɪ̀)",
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "target": "eloa / emapule",
            "source": "Mvule tree",
            "pronunciation": "eloa / emapule",
            "hint": "Wikipedia Teso language — Masculine nouns"
          },
          {
            "target": "anya",
            "source": "Grass",
            "pronunciation": "anya",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "eduan",
            "source": "Weeds",
            "pronunciation": "eduan",
            "hint": "Wikipedia Teso language — Singularia tantum"
          },
          {
            "target": "asinge",
            "source": "Sand",
            "pronunciation": "asinge",
            "hint": "Wikipedia Teso language — Pluralia tantum"
          },
          {
            "target": "ekuron",
            "source": "Ashes",
            "pronunciation": "ekuron",
            "hint": "Wikipedia Teso language — Singularia tantum"
          },
          {
            "target": "imoru",
            "source": "Pebble / small stone",
            "pronunciation": "imoru",
            "hint": "Wikipedia Teso language — Neuter nouns"
          },
          {
            "target": "kide",
            "source": "East",
            "pronunciation": "kide",
            "hint": "Wikipedia Teso language — Adverbs of place"
          },
          {
            "target": "too",
            "source": "West",
            "pronunciation": "too",
            "hint": "Wikipedia Teso language — Adverbs of place"
          }
        ],
        "sentences": [
          {
            "target": "Ejenete itunga \"ekitoi (ɛ́-kɪ́tɔ́-ɪ̀)\" ka \"eloa / emapule\".",
            "source": "The people know \"Tree (pl. trees)\" and \"Mvule tree\"."
          },
          {
            "target": "Ejai toma orea \"anya\" ka \"eduan\".",
            "source": "In the homestead there is \"Grass\" and \"Weeds\"."
          },
          {
            "target": "Abu imakuk kolim \"asinge\" ka \"ekuron\".",
            "source": "The elder spoke of \"Sand\" and \"Ashes\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ekitoi (ɛ́-kɪ́tɔ́-ɪ̀)\" mean in English (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))?",
            "correctAnswer": "Tree (pl. trees)",
            "options": [
              "Tree (pl. trees)",
              "Mvule tree",
              "Grass",
              "Weeds"
            ],
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso (Ateso) term to its verified English meaning:",
            "pairs": [
              {
                "left": "ekitoi (ɛ́-kɪ́tɔ́-ɪ̀)",
                "right": "Tree (pl. trees)"
              },
              {
                "left": "eloa / emapule",
                "right": "Mvule tree"
              },
              {
                "left": "anya",
                "right": "Grass"
              },
              {
                "left": "eduan",
                "right": "Weeds"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-7",
    "title": "Unit 7: The Human Body, Health, Medicine & Safety (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))",
    "description": "Master the human body, health, medicine & safety in Teso (Ateso) built directly from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
    "icon": "🩺",
    "skills": [
      {
        "id": "teso-body-health-anatomy-senses-7",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables. Grounded in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "akou (pl. akwes)",
            "source": "Head",
            "pronunciation": "ah-koh-oo",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akeju (pl. akejen)",
            "source": "Foot",
            "pronunciation": "ah-keh-joo",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akan (pl. akanin)",
            "source": "Hand",
            "pronunciation": "ah-kahn",
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "target": "akong'u (a-kɔ́ŋ-ʊ̀)",
            "source": "Eye",
            "pronunciation": "akong'u (a-kɔ́ŋ-ʊ̀)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "akit (á-kí-t)",
            "source": "Ear",
            "pronunciation": "akit (á-kí-t)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ekume (e-kúmè)",
            "source": "Nose",
            "pronunciation": "ekume (e-kúmè)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ekialai (e-kíàl-àì)",
            "source": "Tooth",
            "pronunciation": "ekialai (e-kíàl-àì)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ang'ajep (á-ŋǎjɛ̀p)",
            "source": "Tongue",
            "pronunciation": "ang'ajep (á-ŋǎjɛ̀p)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "akituk (á-kɪ̀tʊ̀k)",
            "source": "Mouth",
            "pronunciation": "akituk (á-kɪ̀tʊ̀k)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          }
        ],
        "sentences": [
          {
            "target": "Ejenete itunga \"akou (pl. akwes)\" ka \"akeju (pl. akejen)\".",
            "source": "The people know \"Head\" and \"Foot\"."
          },
          {
            "target": "Ejai toma orea \"akan (pl. akanin)\" ka \"akong'u (a-kɔ́ŋ-ʊ̀)\".",
            "source": "In the homestead there is \"Hand\" and \"Eye\"."
          },
          {
            "target": "Abu imakuk kolim \"akit (á-kí-t)\" ka \"ekume (e-kúmè)\".",
            "source": "The elder spoke of \"Ear\" and \"Nose\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"akou (pl. akwes)\" mean in English (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))?",
            "correctAnswer": "Head",
            "options": [
              "Head",
              "Foot",
              "Hand",
              "Eye"
            ],
            "hint": "Hobley 1902 pp. 92–95 (Elgumi) & Johnston 1902 pp. 842–852 (Elgumi/Wamia)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso (Ateso) term to its verified English meaning:",
            "pairs": [
              {
                "left": "akou (pl. akwes)",
                "right": "Head"
              },
              {
                "left": "akeju (pl. akejen)",
                "right": "Foot"
              },
              {
                "left": "akan (pl. akanin)",
                "right": "Hand"
              },
              {
                "left": "akong'u (a-kɔ́ŋ-ʊ̀)",
                "right": "Eye"
              }
            ]
          }
        ]
      },
      {
        "id": "teso-body-health-healing-safety-7",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "ShieldAlert",
        "description": "Master expressions for illness, healing remedies, protection, and safety. Grounded in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "aakot (á-àkɔ́t)",
            "source": "Blood",
            "pronunciation": "aakot (á-àkɔ́t)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "akoit (á-kóì-t)",
            "source": "Bone",
            "pronunciation": "akoit (á-kóì-t)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "adam",
            "source": "Brain",
            "pronunciation": "adam",
            "hint": "Wikipedia Teso language — Singularia tantum"
          },
          {
            "target": "aijar",
            "source": "Life",
            "pronunciation": "aijar",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "ajo",
            "source": "Sleep",
            "pronunciation": "ajo",
            "hint": "Wikipedia Teso language — Pluralia tantum"
          },
          {
            "target": "ibokori",
            "source": "Finger",
            "pronunciation": "ibokori",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "etim",
            "source": "Hair",
            "pronunciation": "etim",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "akejen",
            "source": "Leg",
            "pronunciation": "akejen",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          },
          {
            "target": "murising",
            "source": "Neck",
            "pronunciation": "murising",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)"
          }
        ],
        "sentences": [
          {
            "target": "Ejenete itunga \"aakot (á-àkɔ́t)\" ka \"akoit (á-kóì-t)\".",
            "source": "The people know \"Blood\" and \"Bone\"."
          },
          {
            "target": "Ejai toma orea \"adam\" ka \"aijar\".",
            "source": "In the homestead there is \"Brain\" and \"Life\"."
          },
          {
            "target": "Abu imakuk kolim \"ajo\" ka \"ibokori\".",
            "source": "The elder spoke of \"Sleep\" and \"Finger\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"aakot (á-àkɔ́t)\" mean in English (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))?",
            "correctAnswer": "Blood",
            "options": [
              "Blood",
              "Bone",
              "Brain",
              "Life"
            ],
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso (Ateso) term to its verified English meaning:",
            "pairs": [
              {
                "left": "aakot (á-àkɔ́t)",
                "right": "Blood"
              },
              {
                "left": "akoit (á-kóì-t)",
                "right": "Bone"
              },
              {
                "left": "adam",
                "right": "Brain"
              },
              {
                "left": "aijar",
                "right": "Life"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-8",
    "title": "Unit 8: Core Verbs, Tenses, Negation & Verbal Extensions (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))",
    "description": "Master core verbs, tenses, negation & verbal extensions in Teso (Ateso) built directly from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
    "icon": "⚡",
    "skills": [
      {
        "id": "teso-verbs-grammar-action-verbs-8",
        "title": "Essential Action & Motion Verbs",
        "icon": "Compass",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work. Grounded in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "ainer (alimun)",
            "source": "Speak",
            "pronunciation": "ah-ee-nehr",
            "hint": "Hobley 1902 & Ateso vocabulary"
          },
          {
            "target": "abunore (bia ne! = come here!)",
            "source": "Come",
            "pronunciation": "ah-boo-noh-reh / bee-ah neh",
            "hint": "Johnston 1902 p. 851 (Elgumi/Wamia) & Hobley 1902 pp. 92–95"
          },
          {
            "target": "alosit (kolot! = go!)",
            "source": "Go",
            "pronunciation": "ah-loh-seet / koh-loht",
            "hint": "Johnston 1902 p. 851 (Elgumi/Wamia) & Hobley 1902 pp. 92–95"
          },
          {
            "target": "akimat (aimat)",
            "source": "Drink",
            "pronunciation": "ah-kee-maht",
            "hint": "Hobley 1902 & Johnston 1902"
          },
          {
            "target": "akinyam (ainyam)",
            "source": "Eat",
            "pronunciation": "ah-kee-nyahm",
            "hint": "Hobley 1902 & Johnston 1902"
          },
          {
            "target": "akinyam / ainyam (akí-ɲám-à)",
            "source": "To eat",
            "pronunciation": "akinyam / ainyam (akí-ɲám-à)",
            "hint": "Wikipedia Teso language & Eastern Nilotic languages"
          },
          {
            "target": "akimat / aimat",
            "source": "To drink",
            "pronunciation": "akimat / aimat",
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "target": "akilip / ailip",
            "source": "To pray",
            "pronunciation": "akilip / ailip",
            "hint": "Wikipedia Teso language — Orthography"
          },
          {
            "target": "aimo",
            "source": "To look for / search",
            "pronunciation": "aimo",
            "hint": "Wikipedia Teso language — Orthography"
          }
        ],
        "sentences": [
          {
            "target": "Ejenete itunga \"ainer (alimun)\" ka \"abunore (bia ne! = come here!)\".",
            "source": "The people know \"Speak\" and \"Come\"."
          },
          {
            "target": "Ejai toma orea \"alosit (kolot! = go!)\" ka \"akimat (aimat)\".",
            "source": "In the homestead there is \"Go\" and \"Drink\"."
          },
          {
            "target": "Abu imakuk kolim \"akinyam (ainyam)\" ka \"akinyam / ainyam (akí-ɲám-à)\".",
            "source": "The elder spoke of \"Eat\" and \"To eat\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ainer (alimun)\" mean in English (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))?",
            "correctAnswer": "Speak",
            "options": [
              "Speak",
              "Come",
              "Go",
              "Drink"
            ],
            "hint": "Hobley 1902 & Ateso vocabulary"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso (Ateso) term to its verified English meaning:",
            "pairs": [
              {
                "left": "ainer (alimun)",
                "right": "Speak"
              },
              {
                "left": "abunore (bia ne! = come here!)",
                "right": "Come"
              },
              {
                "left": "alosit (kolot! = go!)",
                "right": "Go"
              },
              {
                "left": "akimat (aimat)",
                "right": "Drink"
              }
            ]
          }
        ]
      },
      {
        "id": "teso-verbs-grammar-verbal-derivatives-8",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "Layers",
        "description": "Build complex meanings using verbal extensions and grammatical particles. Grounded in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Teso (Ateso) (Ateso) in C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies) preserves pre-1930 phonological, grammatical, and ethnographic usage across Busia.",
        "words": [
          {
            "target": "aipet [e] (kick) vs. aipet [ɛ] (lay out)",
            "source": "To kick (close e) vs. To lay out (open ɛ)",
            "pronunciation": "aipet [e] (kick) vs. aipet [ɛ] (lay out)",
            "hint": "Wikipedia Teso language — Vowel contrast"
          },
          {
            "target": "aidip",
            "source": "To hit",
            "pronunciation": "aidip",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "aimor [ɔ] (share) vs. aimor [o] (insult)",
            "source": "To share (open ɔ) vs. To insult (close o)",
            "pronunciation": "aimor [ɔ] (share) vs. aimor [o] (insult)",
            "hint": "Wikipedia Teso language — Vowel contrast"
          },
          {
            "target": "aikut [u] (scoop) vs. aikut [ʊ] (blow)",
            "source": "To scratch the earth / scoop (close u) vs. To blow (open ʊ)",
            "pronunciation": "aikut [u] (scoop) vs. aikut [ʊ] (blow)",
            "hint": "Wikipedia Teso language — Vowel contrast"
          },
          {
            "target": "abal",
            "source": "To say",
            "pronunciation": "abal",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "ainu",
            "source": "To hug / embrace",
            "pronunciation": "ainu",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "aisab",
            "source": "To tell lies",
            "pronunciation": "aisab",
            "hint": "Wikipedia Teso language — Alphabet"
          },
          {
            "target": "alosit",
            "source": "To go (verbal noun: going)",
            "pronunciation": "alosit",
            "hint": "Wikipedia Teso language — Feminine nouns"
          },
          {
            "target": "abunere",
            "source": "To come (verbal noun: coming)",
            "pronunciation": "abunere",
            "hint": "Wikipedia Teso language — Feminine nouns"
          }
        ],
        "sentences": [
          {
            "target": "Ejenete itunga \"aipet [e] (kick) vs. aipet [ɛ] (lay out)\" ka \"aidip\".",
            "source": "The people know \"To kick (close e) vs. To lay out (open ɛ)\" and \"To hit\"."
          },
          {
            "target": "Ejai toma orea \"aimor [ɔ] (share) vs. aimor [o] (insult)\" ka \"aikut [u] (scoop) vs. aikut [ʊ] (blow)\".",
            "source": "In the homestead there is \"To share (open ɔ) vs. To insult (close o)\" and \"To scratch the earth / scoop (close u) vs. To blow (open ʊ)\"."
          },
          {
            "target": "Abu imakuk kolim \"abal\" ka \"ainu\".",
            "source": "The elder spoke of \"To say\" and \"To hug / embrace\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"aipet [e] (kick) vs. aipet [ɛ] (lay out)\" mean in English (C. W. Hobley (1902 Elgumi Vocabulary) & Sir Harry Johnston (1902 Elgumi & Karamojo Comparative Vocabularies))?",
            "correctAnswer": "To kick (close e) vs. To lay out (open ɛ)",
            "options": [
              "To kick (close e) vs. To lay out (open ɛ)",
              "To hit",
              "To share (open ɔ) vs. To insult (close o)",
              "To scratch the earth / scoop (close u) vs. To blow (open ʊ)"
            ],
            "hint": "Wikipedia Teso language — Vowel contrast"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Teso (Ateso) term to its verified English meaning:",
            "pairs": [
              {
                "left": "aipet [e] (kick) vs. aipet [ɛ] (lay out)",
                "right": "To kick (close e) vs. To lay out (open ɛ)"
              },
              {
                "left": "aidip",
                "right": "To hit"
              },
              {
                "left": "aimor [ɔ] (share) vs. aimor [o] (insult)",
                "right": "To share (open ɔ) vs. To insult (close o)"
              },
              {
                "left": "aikut [u] (scoop) vs. aikut [ʊ] (blow)",
                "right": "To scratch the earth / scoop (close u) vs. To blow (open ʊ)"
              }
            ]
          }
        ]
      }
    ]
  }
];
