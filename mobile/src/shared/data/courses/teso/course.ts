// ============================================================
// Teso (Ateso) Language Course Configuration & Units
// Based on "An Introduction to the Ateso Language"
// by J.H. Hilders and J.C.D. Lawrence (Eagle Press, 1957)
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
  description: 'A Nilotic language of the Teso-Turkana group, spoken in parts of Busia County, Kenya and widely across eastern Uganda. Related to Turkana and Karamojong.',
  color: '#6D4C41',
};

export const TESO_UNITS: CourseUnit[] = [
  {
    id: 'teso-unit-1',
    title: 'Unit 1: Foundations & Greetings',
    description: 'Learn core greetings, daily salutations, and the counting system of Ateso.',
    icon: '👋',
    skills: [
      {
        id: 'teso-greetings',
        title: 'Greetings & Politeness',
        icon: 'Handshake',
        description: 'Master everyday greetings, polite expressions, and farewells in Ateso.',
        tips: "In Ateso, the universal greeting is 'Yoga' (literally 'Peace'), answered with 'Yoga noi' ('Much peace') or simply 'Ejok' ('Good'). Greetings are essential in Teso culture — it is considered rude to begin any conversation without proper salutations.",
        culturalNote: "The Iteso people value communal living and hospitality. When visiting a homestead, one must greet everyone present, starting with the eldest. The greeting ritual often includes inquiries about family, health, and livestock.",
        words: [
          { target: 'Yoga', source: 'Hello / Peace', pronunciation: 'yoh-gah', hint: 'Universal greeting, lit. "Peace"', example: 'Yoga! — Yoga noi.' },
          { target: 'Yoga noi', source: 'Much peace / Very well', pronunciation: 'yoh-gah noh-ee', hint: 'Standard reply to Yoga' },
          { target: 'Ejok', source: 'Good / Fine', pronunciation: 'eh-jok', hint: 'Affirmative response meaning "good"', example: 'Bo ejok? — Ejok.' },
          { target: 'Bo ejok?', source: 'Are you well?', pronunciation: 'boh eh-jok', hint: 'Common inquiry about wellbeing' },
          { target: 'Eyalama', source: 'Thank you', pronunciation: 'eh-yah-lah-mah', hint: 'Expression of gratitude', example: 'Eyalama noi!' },
          { target: 'Eyalama noi', source: 'Thank you very much', pronunciation: 'eh-yah-lah-mah noh-ee', hint: "'Noi' intensifies the thanks" },
          { target: 'Ee', source: 'Yes', pronunciation: 'eh-eh', hint: 'Affirmative' },
          { target: 'Mam', source: 'No', pronunciation: 'mahm', hint: 'Negative' },
          { target: 'Adio', source: 'Goodbye', pronunciation: 'ah-dee-oh', hint: 'Farewell expression' },
          { target: 'Ijai', source: 'Come', pronunciation: 'ee-jah-ee', hint: 'Invitation or command to approach' }
        ],
        sentences: [
          { target: 'Yoga, bo ejok?', source: 'Hello, are you well?' },
          { target: 'Ejok noi, eyalama.', source: 'Very well, thank you.' },
          { target: 'Adio, yoga noi.', source: 'Goodbye, peace be with you.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you greet someone in Ateso?',
            correctAnswer: 'Yoga',
            options: ['Yoga', 'Ejok', 'Mam', 'Adio'],
            hint: 'Means "Peace"'
          },
          {
            type: 'multiple_choice',
            prompt: 'What does "Eyalama" mean?',
            correctAnswer: 'Thank you',
            options: ['Thank you', 'Goodbye', 'Hello', 'Yes'],
            hint: 'Expression of gratitude'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Ateso words with their English meanings:',
            correctAnswer: 'Yoga: Hello, Ejok: Good, Eyalama: Thank you, Mam: No',
            pairs: [
              { left: 'Yoga', right: 'Hello / Peace' },
              { left: 'Ejok', right: 'Good / Fine' },
              { left: 'Eyalama', right: 'Thank you' },
              { left: 'Mam', right: 'No' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "_____ noi, eyalama." (Very well, thank you.)',
            correctAnswer: 'Ejok',
            options: ['Ejok', 'Mam', 'Yoga', 'Adio'],
            hint: 'Ateso word for good'
          }
        ]
      },
      {
        id: 'teso-numbers',
        title: 'Numbers & Counting',
        icon: 'Hash',
        description: 'Learn the cardinal numbers from one to ten in Ateso.',
        tips: "Ateso uses a base-5 counting system similar to Turkana. The numbers 6–9 are formed by adding 1–4 to 5 (akan). For example, 6 is 'akankacel' (5+1) and 7 is 'akankaare' (5+2). Ten is 'atomon'.",
        culturalNote: "Counting livestock is an important daily activity among the Iteso. Cattle, goats, and chickens are counted carefully each evening when they return to the homestead.",
        words: [
          { target: 'Epei', source: 'One', pronunciation: 'eh-peh-ee', hint: 'Cardinal 1 (or Ediope)' },
          { target: 'Aare', source: 'Two', pronunciation: 'ah-reh', hint: 'Cardinal 2' },
          { target: 'Auni', source: 'Three', pronunciation: 'ah-oo-nee', hint: 'Cardinal 3' },
          { target: 'Aongon', source: 'Four', pronunciation: 'ah-ohn-gohn', hint: 'Cardinal 4' },
          { target: 'Akan', source: 'Five', pronunciation: 'ah-kahn', hint: 'Cardinal 5 (lit. "hand")' },
          { target: 'Akankacel', source: 'Six', pronunciation: 'ah-kahn-kah-chel', hint: '5 + 1' },
          { target: 'Akankaare', source: 'Seven', pronunciation: 'ah-kahn-kah-reh', hint: '5 + 2' },
          { target: 'Akankauni', source: 'Eight', pronunciation: 'ah-kahn-kah-oo-nee', hint: '5 + 3' },
          { target: 'Akankaongon', source: 'Nine', pronunciation: 'ah-kahn-kah-ohn-gohn', hint: '5 + 4' },
          { target: 'Atomon', source: 'Ten', pronunciation: 'ah-toh-mohn', hint: 'Cardinal 10' }
        ],
        sentences: [
          { target: 'Ikoku aare', source: 'Two children' },
          { target: 'Aituk akan', source: 'Five cows' },
          { target: 'Atomon ka aare', source: 'Twelve (ten and two)' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is "Five" in Ateso?',
            correctAnswer: 'Akan',
            options: ['Akan', 'Auni', 'Epei', 'Atomon'],
            hint: 'Related to the word for "hand"'
          },
          {
            type: 'multiple_choice',
            prompt: 'How is "Six" formed in Ateso?',
            correctAnswer: '5 + 1 (Akankacel)',
            options: ['5 + 1 (Akankacel)', '3 + 3 (Auniauni)', '4 + 2 (Aongonare)', '10 - 4 (Atomonaongon)'],
            hint: 'Ateso uses a base-5 system'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Ateso numbers with their values:',
            correctAnswer: 'Epei: One, Aare: Two, Akan: Five, Atomon: Ten',
            pairs: [
              { left: 'Epei', right: 'One' },
              { left: 'Aare', right: 'Two' },
              { left: 'Akan', right: 'Five' },
              { left: 'Atomon', right: 'Ten' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'teso-unit-2',
    title: 'Unit 2: People, Family & Daily Life',
    description: 'Learn words for family members, common nouns, and everyday expressions.',
    icon: '👨‍👩‍👧‍👦',
    skills: [
      {
        id: 'teso-family',
        title: 'Family & People',
        icon: 'Users',
        description: 'Learn the Ateso words for family members and people.',
        tips: "In Ateso, 'Toto' means mother and 'Papa' means father. 'Itunganan' means person (plural 'itunga' or 'itunanak'). 'Ekile' is man / husband, and 'Aberu' is woman / wife. The Iteso have a patrilineal clan system with extended family playing a central role.",
        culturalNote: "The Iteso family structure is built around the extended family (ere). Respect for elders (ikauriak) is paramount, and children are raised communally by the entire clan.",
        words: [
          { target: 'Toto', source: 'Mother', pronunciation: 'toh-toh', hint: 'Maternal parent' },
          { target: 'Papa', source: 'Father', pronunciation: 'pah-pah', hint: 'Paternal parent' },
          { target: 'Ikoku', source: 'Child / Children', pronunciation: 'ee-koh-koo', hint: 'Young person(s)' },
          { target: 'Itunganan', source: 'Person / Human being', pronunciation: 'ee-toong-ah-nahn', hint: 'Plural: Itunga / Itunanak' },
          { target: 'Itunanak', source: 'People', pronunciation: 'ee-too-nah-nahk', hint: 'Plural of person' },
          { target: 'Aberu', source: 'Woman / Wife', pronunciation: 'ah-beh-roo', hint: 'Adult female; plural: Angor (Hilders & Lawrence 1957)' },
          { target: 'Ekile', source: 'Man / Husband', pronunciation: 'eh-kee-leh', hint: 'Adult male; plural: Ikilyok (Hilders & Lawrence 1957)' },
          { target: 'Tata', source: 'Grandfather', pronunciation: 'tah-tah', hint: 'Paternal or maternal grandfather' },
          { target: 'Kaakaa', source: 'Grandmother', pronunciation: 'kah-kah', hint: 'Paternal or maternal grandmother' },
          { target: 'Ere', source: 'Home / Homestead', pronunciation: 'eh-reh', hint: 'Family compound' }
        ],
        sentences: [
          { target: 'Toto ejok.', source: 'Mother is well.' },
          { target: 'Ikoku aare kede papa.', source: 'Two children with father.' },
          { target: 'Ere kang ejok noi.', source: 'My home is very good.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Toto" mean in Ateso?',
            correctAnswer: 'Mother',
            options: ['Mother', 'Father', 'Child', 'Grandmother'],
            hint: 'Maternal parent'
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Home" in Ateso?',
            correctAnswer: 'Ere',
            options: ['Ere', 'Itunganan', 'Ikoku', 'Aberu'],
            hint: 'Family compound or homestead'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Ateso family words:',
            correctAnswer: 'Toto: Mother, Papa: Father, Ikoku: Child, Tata: Grandfather',
            pairs: [
              { left: 'Toto', right: 'Mother' },
              { left: 'Papa', right: 'Father' },
              { left: 'Ikoku', right: 'Child' },
              { left: 'Tata', right: 'Grandfather' }
            ]
          }
        ]
      },
      {
        id: 'teso-daily',
        title: 'Daily Life & Common Words',
        icon: 'Sun',
        description: 'Essential everyday vocabulary for food, water, and daily activities.',
        tips: "Key survival words: 'Akipi' (water), 'Akimuj' (food), 'Akuj' or 'Edeke' (God/sky). The Iteso are traditionally agro-pastoralists, so words related to farming and livestock are central to daily conversation.",
        culturalNote: "The Iteso traditionally grow millet (akima), sorghum, and groundnuts. Cattle (aituk) are a measure of wealth and are central to bride price (akonya) negotiations.",
        words: [
          { target: 'Akipi', source: 'Water', pronunciation: 'ah-kee-pee', hint: 'Essential liquid' },
          { target: 'Akimuj', source: 'Food', pronunciation: 'ah-kee-mooj', hint: 'General term for food' },
          { target: 'Aituk', source: 'Cow / Cattle', pronunciation: 'ah-ee-took', hint: 'Central to Iteso wealth' },
          { target: 'Akuj', source: 'God / Sky / Rain', pronunciation: 'ah-kooj', hint: 'Supreme being; also means sky and rain' },
          { target: 'Akolong', source: 'Sun / Day', pronunciation: 'ah-koh-long', hint: 'The sun; also means daytime' },
          { target: 'Akwap', source: 'Land / Country', pronunciation: 'ah-kwahp', hint: 'Territory or homeland' },
          { target: 'Erot', source: 'Path / Road', pronunciation: 'eh-roht', hint: 'Way or route' },
          { target: 'Ekek', source: 'Tree', pronunciation: 'eh-kehk', hint: 'Woody plant' },
          { target: 'Amacar', source: 'Fire', pronunciation: 'ah-mah-char', hint: 'Used for cooking and warmth' },
          { target: 'Edeke', source: 'God (alternative)', pronunciation: 'eh-deh-keh', hint: 'Another name for the supreme being' }
        ],
        sentences: [
          { target: 'Akipi ejok.', source: 'The water is good.' },
          { target: 'Aituk akan kede ikoku.', source: 'Five cows and children.' },
          { target: 'Akolong ejok noi.', source: 'The day is very good.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Akipi" mean?',
            correctAnswer: 'Water',
            options: ['Water', 'Food', 'Fire', 'Land'],
            hint: 'Essential for life'
          },
          {
            type: 'multiple_choice',
            prompt: 'What does "Akuj" refer to in Ateso?',
            correctAnswer: 'God / Sky / Rain',
            options: ['God / Sky / Rain', 'Sun / Day', 'Fire', 'Land'],
            hint: 'Has multiple related meanings'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Ateso daily words:',
            correctAnswer: 'Akipi: Water, Akimuj: Food, Aituk: Cow, Amacar: Fire',
            pairs: [
              { left: 'Akipi', right: 'Water' },
              { left: 'Akimuj', right: 'Food' },
              { left: 'Aituk', right: 'Cow / Cattle' },
              { left: 'Amacar', right: 'Fire' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "_____ ejok noi." (The day is very good.)',
            correctAnswer: 'Akolong',
            options: ['Akolong', 'Akipi', 'Akuj', 'Aituk'],
            hint: 'Ateso word for sun/day'
          }
        ]
      }
    ]
  },
  {
    id: 'teso-unit-3',
    title: 'Unit 3: Body, Nature & Actions',
    description: 'Learn body parts, nature vocabulary, and basic verbs.',
    icon: '🌍',
    skills: [
      {
        id: 'teso-body',
        title: 'Body Parts',
        icon: 'Heart',
        description: 'Learn the Ateso names for parts of the body.',
        tips: "Body part vocabulary is essential for health communication. In Ateso, 'akwi' means head, 'akongu' means eye, and 'akan' means hand/arm. Note that 'akan' also means five — reflecting the five fingers.",
        words: [
          { target: 'Akwi', source: 'Head', pronunciation: 'ah-kwee', hint: 'Top of the body' },
          { target: 'Akongu', source: 'Eye', pronunciation: 'ah-kohn-goo', hint: 'Organ of sight' },
          { target: 'Aitit', source: 'Ear', pronunciation: 'ah-ee-teet', hint: 'Organ of hearing' },
          { target: 'Akuun', source: 'Nose', pronunciation: 'ah-koon', hint: 'Organ of smell' },
          { target: 'Akou', source: 'Mouth', pronunciation: 'ah-koh-oo', hint: 'Used for eating and speaking' },
          { target: 'Akan', source: 'Hand / Arm', pronunciation: 'ah-kahn', hint: 'Also means "five"' },
          { target: 'Akeny', source: 'Foot / Leg', pronunciation: 'ah-kehn-y', hint: 'Lower limb' },
          { target: 'Aipud', source: 'Stomach / Belly', pronunciation: 'ah-ee-pood', hint: 'Abdominal area' },
          { target: 'Akiring', source: 'Bone', pronunciation: 'ah-kee-ring', hint: 'Skeletal structure' },
          { target: 'Aremor', source: 'Blood', pronunciation: 'ah-reh-mohr', hint: 'Life fluid' }
        ],
        sentences: [
          { target: 'Akwi eong ejai.', source: 'My head is bad (hurts).' },
          { target: 'Akongu aare.', source: 'Two eyes.' },
          { target: 'Akan ejok.', source: 'The hand is good.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Akwi" mean?',
            correctAnswer: 'Head',
            options: ['Head', 'Hand', 'Eye', 'Foot'],
            hint: 'Top of the body'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Ateso body parts:',
            correctAnswer: 'Akwi: Head, Akongu: Eye, Akan: Hand, Akeny: Foot',
            pairs: [
              { left: 'Akwi', right: 'Head' },
              { left: 'Akongu', right: 'Eye' },
              { left: 'Akan', right: 'Hand / Arm' },
              { left: 'Akeny', right: 'Foot / Leg' }
            ]
          }
        ]
      },
      {
        id: 'teso-verbs',
        title: 'Basic Verbs & Actions',
        icon: 'Zap',
        description: 'Learn essential action words in Ateso.',
        tips: "Ateso verbs typically begin with 'a-' or 'ai-' in the infinitive form. For example, 'alosit' (to go), 'abun' (to come), 'akinyam' (to eat), 'aimat' (to drink). The verb system uses prefixes to indicate tense and person.",
        culturalNote: "Storytelling (etale) is a cherished tradition among the Iteso. Elders use action-rich narratives to teach moral lessons to children around the evening fire.",
        words: [
          { target: 'Alosit', source: 'To go', pronunciation: 'ah-loh-seet', hint: 'Movement away' },
          { target: 'Abun', source: 'To come', pronunciation: 'ah-boon', hint: 'Movement toward' },
          { target: 'Akinyam', source: 'To eat', pronunciation: 'ah-kee-nyahm', hint: 'Infinitive (Hilders & Lawrence 1957)' },
          { target: 'Aimat', source: 'To drink', pronunciation: 'ah-ee-maht', hint: 'Infinitive (Hilders & Lawrence 1957)' },
          { target: 'Aenep', source: 'To sleep', pronunciation: 'ah-eh-nehp', hint: 'Resting at night' },
          { target: 'Aijam', source: 'To work', pronunciation: 'ah-ee-jahm', hint: 'Performing labor' },
          { target: 'Aswam', source: 'To speak / To say', pronunciation: 'ah-swahm', hint: 'Verbal communication' },
          { target: 'Aenun', source: 'To see', pronunciation: 'ah-eh-noon', hint: 'Visual perception' },
          { target: 'Aiboisit', source: 'To sit', pronunciation: 'ah-ee-boh-ee-seet', hint: 'Being seated' },
          { target: 'Akirot', source: 'To walk', pronunciation: 'ah-kee-roht', hint: 'Moving on foot' }
        ],
        sentences: [
          { target: 'Alosit ere.', source: 'Go home.' },
          { target: 'Abun ijai.', source: 'Come here.' },
          { target: 'Akinyam akimuj ka aimat akipi.', source: 'Eat food and drink water.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Alosit" mean?',
            correctAnswer: 'To go',
            options: ['To go', 'To come', 'To eat', 'To sleep'],
            hint: 'Movement away from a place'
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you say "To eat" in Ateso?',
            correctAnswer: 'Akinyam',
            options: ['Akinyam', 'Aimat', 'Abun', 'Aswam'],
            hint: 'Consuming food'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Ateso verbs:',
            correctAnswer: 'Alosit: To go, Abun: To come, Akinyam: To eat, Aenep: To sleep',
            pairs: [
              { left: 'Alosit', right: 'To go' },
              { left: 'Abun', right: 'To come' },
              { left: 'Akinyam', right: 'To eat' },
              { left: 'Aenep', right: 'To sleep' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'teso-unit-4',
    title: 'Unit 4: Grammar Map from the Ateso Textbook',
    description: 'Build a map of the tense, mood, and verb patterns introduced in Hilders and Lawrence.',
    icon: '📚',
    skills: [
      {
        id: 'teso-tense-mood-map',
        title: 'Tense and Mood Map',
        icon: 'Clock3',
        description: 'Recognize the grammar areas covered by the Ateso textbook before practicing individual paradigms.',
        tips: 'The source distinguishes present, future, past, perfect, habitual, and not-yet meanings, as well as imperative, subjunctive, conditional, and derived verb forms. This course map is a guide to those chapters, not a substitute for a fluent speaker’s correction.',
        culturalNote: 'The textbook was produced primarily in an East African context that includes Uganda; Kenyan Iteso learners should compare forms with current local speakers.',
        words: [
          { target: 'Alosit', source: 'To go', hint: 'Infinitive used to anchor verb examples' },
          { target: 'Abun', source: 'To come', hint: 'Infinitive used to anchor verb examples' },
          { target: 'Akinyam', source: 'To eat', hint: 'Infinitive used to anchor verb examples' },
          { target: 'Aimat', source: 'To drink', hint: 'Infinitive used to anchor verb examples' }
        ],
        sentences: [
          { target: 'Eong alosit ere.', source: 'I am going home.' },
          { target: 'Edakit aberu ikoku.', source: 'The woman carries the child.' },
          { target: 'Akituk auni kede ekile.', source: 'Three cows with the man.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which group belongs to the Ateso textbook grammar map?',
            correctAnswer: 'Present, future, past, perfect, habitual, and not-yet forms',
            options: [
              'Present, future, past, perfect, habitual, and not-yet forms',
              'Only greetings and numbers',
              'Only animal names',
              'Only borrowed Swahili words'
            ],
            hint: 'The source is a full learner grammar, not only a word list.'
          }
        ]
      },
      {
        id: 'teso-derived-verbs',
        title: 'Derived Verb Patterns',
        icon: 'GitBranch',
        description: 'Preview the source chapters on reflexive, reciprocal, passive, and related verb formations.',
        tips: 'Derived verbs change how an action relates to its participants. The source treats these as grammatical patterns; do not infer a correct modern form by mechanically attaching an English suffix.',
        words: [
          { target: 'Alosit', source: 'To go', hint: 'Base verb for pattern study' },
          { target: 'Abun', source: 'To come', hint: 'Base verb for pattern study' },
          { target: 'Aswam', source: 'To speak / say', hint: 'Base verb for pattern study' },
          { target: 'Akirot', source: 'To walk', hint: 'Base verb for pattern study' }
        ],
        sentences: [
          { target: 'Akinyam akimuj ka aimat akipi.', source: 'To eat food and to drink water.' },
          { target: 'Ijo ilipi aberu.', source: 'You ask the woman.' },
          { target: 'Itunga aarei abun ijai.', source: 'Two people come here.' }
        ],
        authoredExercises: [
          {
            type: 'match_pairs',
            prompt: 'Match the source grammar topics with their focus:',
            correctAnswer: 'Reflexive: action returns to the subject, Reciprocal: participants act on one another, Passive: focus shifts to the affected participant',
            pairs: [
              { left: 'Reflexive', right: 'Action returns to the subject' },
              { left: 'Reciprocal', right: 'Participants act on one another' },
              { left: 'Passive', right: 'Focus shifts to the affected participant' }
            ]
          }
        ]
      }
    ]
  },
  
  // ── EXPANDED SOURCE-VERIFIED UNITS ──
  {
    "id": "teso-unit-5-greetings",
    "title": "Unit 5: Greetings & Farewells",
    "description": "Comprehensive Teso (Ateso) curriculum for Greetings & Farewells, vetted from J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
    "icon": "Handshake",
    "skills": [
      {
        "id": "teso-exp-greetings",
        "title": "Greetings & Farewells",
        "icon": "Handshake",
        "description": "Master Teso (Ateso) greetings & farewells vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Greetings & Farewells, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ibiya?' (How are you? / How do you spend the day?), 'Ejok noi' (Very fine / All is very well), 'Erai bo?' (Is that so? / Really?), 'Kolot ejok' (Go well / Go in peace).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Ibiya?",
            "source": "How are you? / How do you spend the day?",
            "pronunciation": "ee-bee-yah",
            "hint": "Friendly enquiry into one's condition, from 'aiboi' (to stay/dwell).",
            "example": "Ibiya? — How are you? / How do you spend the day? (Friendly enquiry into one's condition, from 'aiboi' (to stay/dwell).)"
          },
          {
            "target": "Ejok noi",
            "source": "Very fine / All is very well",
            "pronunciation": "eh-johk noh-ee",
            "hint": "Enthusiastic reply to greeting; 'noi' = very much.",
            "example": "Ejok noi — Very fine / All is very well (Enthusiastic reply to greeting; 'noi' = very much.)"
          },
          {
            "target": "Erai bo?",
            "source": "Is that so? / Really?",
            "pronunciation": "eh-rah-ee boh",
            "hint": "Conversational reply of interest; 'erai' = it is, 'bo' = interrogative particle.",
            "example": "Erai bo? — Is that so? / Really? (Conversational reply of interest; 'erai' = it is, 'bo' = interrogative particle.)"
          },
          {
            "target": "Kolot ejok",
            "source": "Go well / Go in peace",
            "pronunciation": "koh-loht eh-johk",
            "hint": "Parting blessing addressed to the one departing; from 'alosit' (to go) and 'ejok' (well).",
            "example": "Kolot ejok — Go well / Go in peace (Parting blessing addressed to the one departing; from 'alosit' (to go) and 'ejok' (well).)"
          },
          {
            "target": "Kiboi ejok",
            "source": "Stay well / Peaceful stay",
            "pronunciation": "kee-boh-ee eh-johk",
            "hint": "Parting blessing addressed to the one remaining; from 'aiboi' (to stay/dwell).",
            "example": "Kiboi ejok — Stay well / Peaceful stay (Parting blessing addressed to the one remaining; from 'aiboi' (to stay/dwell).)"
          },
          {
            "target": "Toloma",
            "source": "Welcome / Come in",
            "pronunciation": "toh-loh-mah",
            "hint": "Imperative welcome; from 'alomun' (to come in). Plural: Tolomatu.",
            "example": "Toloma — Welcome / Come in (Imperative welcome; from 'alomun' (to come in). Plural: Tolomatu.)"
          },
          {
            "target": "Karibu",
            "source": "Welcome (borrowed)",
            "pronunciation": "kah-ree-boo",
            "hint": "Swahili loan widely understood across East Africa.",
            "example": "Karibu — Welcome (borrowed) (Swahili loan widely understood across East Africa.)"
          },
          {
            "target": "Eebo / Ee",
            "source": "Yes",
            "pronunciation": "eh-eh-boh",
            "hint": "Affirmative response.",
            "example": "Eebo / Ee — Yes (Affirmative response.)"
          },
          {
            "target": "Aanyun moi",
            "source": "See you tomorrow",
            "pronunciation": "ah-ahn-yoon moh-ee",
            "hint": "Parting phrase; 'aanyun' = to see, 'moi' = tomorrow.",
            "example": "Aanyun moi — See you tomorrow (Parting phrase; 'aanyun' = to see, 'moi' = tomorrow.)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok etunganan lo noi.",
            "source": "This person is very good."
          },
          {
            "target": "Elosete idwe osomero.",
            "source": "The children are going to school."
          },
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ibiya?\" mean in English?",
            "correctAnswer": "How are you? / How do you spend the day?",
            "options": [
              "Very fine / All is very well",
              "Is that so? / Really?",
              "Go well / Go in peace",
              "How are you? / How do you spend the day?"
            ],
            "hint": "Friendly enquiry into one's condition, from 'aiboi' (to stay/dwell)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ejok noi\" mean in English?",
            "correctAnswer": "Very fine / All is very well",
            "options": [
              "Is that so? / Really?",
              "Go well / Go in peace",
              "Very fine / All is very well",
              "How are you? / How do you spend the day?"
            ],
            "hint": "Enthusiastic reply to greeting; 'noi' = very much."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Erai bo?\" mean in English?",
            "correctAnswer": "Is that so? / Really?",
            "options": [
              "Go well / Go in peace",
              "Is that so? / Really?",
              "How are you? / How do you spend the day?",
              "Very fine / All is very well"
            ],
            "hint": "Conversational reply of interest; 'erai' = it is, 'bo' = interrogative particle."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Is that so? / Really?\" in Teso (Ateso)?",
            "correctAnswer": "Erai bo?",
            "options": [
              "Erai bo?",
              "Ibiya?",
              "Ejok noi",
              "Kolot ejok"
            ],
            "hint": "eh-rah-ee boh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Go well / Go in peace\" in Teso (Ateso)?",
            "correctAnswer": "Kolot ejok",
            "options": [
              "Ibiya?",
              "Ejok noi",
              "Erai bo?",
              "Kolot ejok"
            ],
            "hint": "koh-loht eh-johk"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Stay well / Peaceful stay\" in Teso (Ateso)?",
            "correctAnswer": "Kiboi ejok",
            "options": [
              "Ejok noi",
              "Erai bo?",
              "Kiboi ejok",
              "Ibiya?"
            ],
            "hint": "kee-boh-ee eh-johk"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Ibiya?: How are you? / How do you spend the day?, Ejok noi: Very fine / All is very well, Erai bo?: Is that so? / Really?, Kolot ejok: Go well / Go in peace",
            "pairs": [
              {
                "left": "Ibiya?",
                "right": "How are you? / How do you spend the day?"
              },
              {
                "left": "Ejok noi",
                "right": "Very fine / All is very well"
              },
              {
                "left": "Erai bo?",
                "right": "Is that so? / Really?"
              },
              {
                "left": "Kolot ejok",
                "right": "Go well / Go in peace"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"How are you? / How do you spend the day?\" in Teso (Ateso).",
            "correctAnswer": "Ibiya?",
            "options": [
              "Ibiya?",
              "Ejok noi",
              "Erai bo?",
              "Kolot ejok"
            ],
            "hint": "ee-bee-yah"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-6-numbers",
    "title": "Unit 6: Numbers",
    "description": "Comprehensive Teso (Ateso) curriculum for Numbers, vetted from J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
    "icon": "Hash",
    "skills": [
      {
        "id": "teso-exp-numbers",
        "title": "Numbers (Part 1)",
        "icon": "Hash",
        "description": "Master Teso (Ateso) numbers vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Numbers, pay special attention to pronunciation and morphological prefixes/suffixes: 'Epei / Ediope (fem. Adiope)' (One), 'Aarei (masc. Iarei)' (Two), 'Auni (masc. Iuni)' (Three), 'Aoŋon (masc. Ioŋon)' (Four).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Epei / Ediope (fem. Adiope)",
            "source": "One",
            "pronunciation": "eh-pay / ah-dee-oh-peh",
            "hint": "Masculine: epei or ediope; feminine: adiope. Ediope can precede the noun: adiopeberu (one woman).",
            "example": "Epei / Ediope (fem. Adiope) — One (Masculine: epei or ediope; feminine: adiope. Ediope can precede the noun: adiopeberu (one woman).)"
          },
          {
            "target": "Aarei (masc. Iarei)",
            "source": "Two",
            "pronunciation": "ah-ah-reh-ee",
            "hint": "Feminine: aarei; masculine: iarei. e.g. aŋor aarei (two women), imoŋin iarei (two bulls).",
            "example": "Aarei (masc. Iarei) — Two (Feminine: aarei; masculine: iarei. e.g. aŋor aarei (two women), imoŋin iarei (two bulls).)"
          },
          {
            "target": "Auni (masc. Iuni)",
            "source": "Three",
            "pronunciation": "ah-oo-nee",
            "hint": "Feminine: auni; masculine: iuni. e.g. akituk auni (three cows), imoŋin iuni (three bulls).",
            "example": "Auni (masc. Iuni) — Three (Feminine: auni; masculine: iuni. e.g. akituk auni (three cows), imoŋin iuni (three bulls).)"
          },
          {
            "target": "Aoŋon (masc. Ioŋon)",
            "source": "Four",
            "pronunciation": "ah-oh-ngohn",
            "hint": "Feminine: aoŋon; masculine: ioŋon.",
            "example": "Aoŋon (masc. Ioŋon) — Four (Feminine: aoŋon; masculine: ioŋon.)"
          },
          {
            "target": "Akan (masc. Ikan)",
            "source": "Five",
            "pronunciation": "ah-kahn",
            "hint": "Feminine: akan; masculine: ikan. Cognate with 'akan' (hand).",
            "example": "Akan (masc. Ikan) — Five (Feminine: akan; masculine: ikan. Cognate with 'akan' (hand).)"
          },
          {
            "target": "Akankapei / Akany kape",
            "source": "Six",
            "pronunciation": "ah-kahn-kah-pay",
            "hint": "Literally 'five and one'. Masculine: ikankapei / ikany kape.",
            "example": "Akankapei / Akany kape — Six (Literally 'five and one'. Masculine: ikankapei / ikany kape.)"
          },
          {
            "target": "Akankaare / Akany kaarei",
            "source": "Seven",
            "pronunciation": "ah-kahn-kah-ah-reh",
            "hint": "Literally 'five and two'. Masculine: ikankaare / ikany kaarei.",
            "example": "Akankaare / Akany kaarei — Seven (Literally 'five and two'. Masculine: ikankaare / ikany kaarei.)"
          },
          {
            "target": "Akankauni / Akany kauni",
            "source": "Eight",
            "pronunciation": "ah-kahn-kah-oo-nee",
            "hint": "Literally 'five and three'. Masculine: ikankauni / ikany kauni.",
            "example": "Akankauni / Akany kauni — Eight (Literally 'five and three'. Masculine: ikankauni / ikany kauni.)"
          },
          {
            "target": "Akankaongon / Akany kaoŋon",
            "source": "Nine",
            "pronunciation": "ah-kahn-kah-ohn-gohn",
            "hint": "Literally 'five and four'. Masculine: ikankaongon / ikany kaoŋon.",
            "example": "Akankaongon / Akany kaoŋon — Nine (Literally 'five and four'. Masculine: ikankaongon / ikany kaoŋon.)"
          },
          {
            "target": "Atomon (masc. Itomon)",
            "source": "Ten",
            "pronunciation": "ah-toh-mohn",
            "hint": "Feminine: atomon; masculine: itomon.",
            "example": "Atomon (masc. Itomon) — Ten (Feminine: atomon; masculine: itomon.)"
          },
          {
            "target": "Atomon kanadiope",
            "source": "Eleven",
            "pronunciation": "ah-toh-mohn kah-nah-dee-oh-peh",
            "hint": "Literally 'ten and one' (feminine concord). Masculine: itomon kalodiope.",
            "example": "Atomon kanadiope — Eleven (Literally 'ten and one' (feminine concord). Masculine: itomon kalodiope.)"
          },
          {
            "target": "Atomon kanuarei",
            "source": "Twelve",
            "pronunciation": "ah-toh-mohn kah-noo-ah-reh-ee",
            "hint": "Literally 'ten and two' (feminine concord). Masculine: itomon kaluarei.",
            "example": "Atomon kanuarei — Twelve (Literally 'ten and two' (feminine concord). Masculine: itomon kaluarei.)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok etunganan lo noi.",
            "source": "This person is very good."
          },
          {
            "target": "Elosete idwe osomero.",
            "source": "The children are going to school."
          },
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Epei / Ediope (fem. Adiope)\" mean in English?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
            ],
            "hint": "Masculine: epei or ediope; feminine: adiope. Ediope can precede the noun: adiopeberu (one woman)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aarei (masc. Iarei)\" mean in English?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
              "One"
            ],
            "hint": "Feminine: aarei; masculine: iarei. e.g. aŋor aarei (two women), imoŋin iarei (two bulls)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Auni (masc. Iuni)\" mean in English?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Feminine: auni; masculine: iuni. e.g. akituk auni (three cows), imoŋin iuni (three bulls)."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Teso (Ateso)?",
            "correctAnswer": "Auni (masc. Iuni)",
            "options": [
              "Auni (masc. Iuni)",
              "Epei / Ediope (fem. Adiope)",
              "Aarei (masc. Iarei)",
              "Aoŋon (masc. Ioŋon)"
            ],
            "hint": "ah-oo-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Teso (Ateso)?",
            "correctAnswer": "Aoŋon (masc. Ioŋon)",
            "options": [
              "Epei / Ediope (fem. Adiope)",
              "Aarei (masc. Iarei)",
              "Auni (masc. Iuni)",
              "Aoŋon (masc. Ioŋon)"
            ],
            "hint": "ah-oh-ngohn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Five\" in Teso (Ateso)?",
            "correctAnswer": "Akan (masc. Ikan)",
            "options": [
              "Aarei (masc. Iarei)",
              "Auni (masc. Iuni)",
              "Akan (masc. Ikan)",
              "Epei / Ediope (fem. Adiope)"
            ],
            "hint": "ah-kahn"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Epei / Ediope (fem. Adiope): One, Aarei (masc. Iarei): Two, Auni (masc. Iuni): Three, Aoŋon (masc. Ioŋon): Four",
            "pairs": [
              {
                "left": "Epei / Ediope (fem. Adiope)",
                "right": "One"
              },
              {
                "left": "Aarei (masc. Iarei)",
                "right": "Two"
              },
              {
                "left": "Auni (masc. Iuni)",
                "right": "Three"
              },
              {
                "left": "Aoŋon (masc. Ioŋon)",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"One\" in Teso (Ateso).",
            "correctAnswer": "Epei / Ediope (fem. Adiope)",
            "options": [
              "Epei / Ediope (fem. Adiope)",
              "Aarei (masc. Iarei)",
              "Auni (masc. Iuni)",
              "Aoŋon (masc. Ioŋon)"
            ],
            "hint": "eh-pay / ah-dee-oh-peh"
          }
        ]
      },
      {
        "id": "teso-exp-numbers-2",
        "title": "Numbers (Part 2)",
        "icon": "Hash",
        "description": "Master Teso (Ateso) numbers vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Numbers, pay special attention to pronunciation and morphological prefixes/suffixes: 'Atomon kanuuni' (Thirteen), 'Atomon kanuoŋon' (Fourteen), 'Atomon kanukany' (Fifteen), 'Atomon kanukany kape' (Sixteen).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Atomon kanuuni",
            "source": "Thirteen",
            "pronunciation": "ah-toh-mohn kah-noo-oo-nee",
            "hint": "Literally 'ten and three' (feminine concord).",
            "example": "Atomon kanuuni — Thirteen (Literally 'ten and three' (feminine concord).)"
          },
          {
            "target": "Atomon kanuoŋon",
            "source": "Fourteen",
            "pronunciation": "ah-toh-mohn kah-noo-oh-ngohn",
            "hint": "Literally 'ten and four' (feminine concord).",
            "example": "Atomon kanuoŋon — Fourteen (Literally 'ten and four' (feminine concord).)"
          },
          {
            "target": "Atomon kanukany",
            "source": "Fifteen",
            "pronunciation": "ah-toh-mohn kah-noo-kahn-y",
            "hint": "Literally 'ten and five' (feminine concord).",
            "example": "Atomon kanukany — Fifteen (Literally 'ten and five' (feminine concord).)"
          },
          {
            "target": "Atomon kanukany kape",
            "source": "Sixteen",
            "pronunciation": "ah-toh-mohn kah-noo-kahn-y kah-peh",
            "hint": "Literally 'ten and six' (feminine concord). Masculine: itomon kalukany kape.",
            "example": "Atomon kanukany kape — Sixteen (Literally 'ten and six' (feminine concord). Masculine: itomon kalukany kape.)"
          },
          {
            "target": "Akais aarei",
            "source": "Twenty",
            "pronunciation": "ah-kah-ees ah-ah-reh-ee",
            "hint": "Literally 'two houses (tens)'. Akais is a feminine noun.",
            "example": "Akais aarei — Twenty (Literally 'two houses (tens)'. Akais is a feminine noun.)"
          },
          {
            "target": "Akais aarei kanadiope",
            "source": "Twenty-one",
            "pronunciation": "ah-kah-ees ah-ah-reh-ee kah-nah-dee-oh-peh",
            "hint": "Compound numeral: twenty and one.",
            "example": "Akais aarei kanadiope — Twenty-one (Compound numeral: twenty and one.)"
          },
          {
            "target": "Akais auni",
            "source": "Thirty",
            "pronunciation": "ah-kah-ees ah-oo-nee",
            "hint": "Literally 'three houses (tens)'.",
            "example": "Akais auni — Thirty (Literally 'three houses (tens)'.)"
          },
          {
            "target": "Akwatat (pl. Akwat)",
            "source": "One hundred",
            "pronunciation": "ah-kwah-taht",
            "hint": "Feminine noun; plural akwat. e.g. akwat auni (300).",
            "example": "Akwatat (pl. Akwat) — One hundred (Feminine noun; plural akwat. e.g. akwat auni (300).)"
          },
          {
            "target": "Akwat aarei",
            "source": "Two hundred",
            "pronunciation": "ah-kwaht ah-ah-reh-ee",
            "hint": "Feminine concord with akwat (hundreds).",
            "example": "Akwat aarei — Two hundred (Feminine concord with akwat (hundreds).)"
          },
          {
            "target": "Elukumit (pl. Ilukumin) / Arita",
            "source": "One thousand",
            "pronunciation": "eh-loo-koo-meet",
            "hint": "Masculine noun: elukumit ediope (1,000); plural: ilukumin ikany (5,000). Also 'arita'.",
            "example": "Elukumit (pl. Ilukumin) / Arita — One thousand (Masculine noun: elukumit ediope (1,000); plural: ilukumin ikany (5,000). Also 'arita'.)"
          },
          {
            "target": "Losodit (fem. Nasodit)",
            "source": "First",
            "pronunciation": "loh-soh-deet",
            "hint": "Ordinal numeral: masculine losodit, feminine nasodit.",
            "example": "Losodit (fem. Nasodit) — First (Ordinal numeral: masculine losodit, feminine nasodit.)"
          },
          {
            "target": "Lokiareit (fem. Nakiareit)",
            "source": "Second",
            "pronunciation": "loh-kee-ah-reh-eet",
            "hint": "Ordinal numeral: masculine lokiareit, feminine nakiareit.",
            "example": "Lokiareit (fem. Nakiareit) — Second (Ordinal numeral: masculine lokiareit, feminine nakiareit.)"
          },
          {
            "target": "Lokiuniet (fem. Nakiuniet)",
            "source": "Third",
            "pronunciation": "loh-kee-oo-nee-eet",
            "hint": "Ordinal numeral: masculine lokiuniet, feminine nakiuniet.",
            "example": "Lokiuniet (fem. Nakiuniet) — Third (Ordinal numeral: masculine lokiuniet, feminine nakiuniet.)"
          },
          {
            "target": "Lokitomonet (fem. Nakitomonet)",
            "source": "Tenth",
            "pronunciation": "loh-kee-toh-moh-neht",
            "hint": "Ordinal numeral: masculine lokitomonet, feminine nakitomonet.",
            "example": "Lokitomonet (fem. Nakitomonet) — Tenth (Ordinal numeral: masculine lokitomonet, feminine nakitomonet.)"
          },
          {
            "target": "Irwan atipet",
            "source": "Once / One time",
            "pronunciation": "eer-wahn ah-tee-peht",
            "hint": "Multiplication prefix 'irwan' (times) + 'atipet' (once).",
            "example": "Irwan atipet — Once / One time (Multiplication prefix 'irwan' (times) + 'atipet' (once).)"
          },
          {
            "target": "Irwan aarei",
            "source": "Twice / Two times",
            "pronunciation": "eer-wahn ah-ah-reh-ee",
            "hint": "Multiplication with feminine numeral: irwan aarei.",
            "example": "Irwan aarei — Twice / Two times (Multiplication with feminine numeral: irwan aarei.)"
          }
        ],
        "sentences": [
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          },
          {
            "target": "Ejai akipi toma amot.",
            "source": "There is water inside the pot."
          },
          {
            "target": "Anyami aberu akimuj.",
            "source": "The woman is eating food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atomon kanuuni\" mean in English?",
            "correctAnswer": "Thirteen",
            "options": [
              "Fourteen",
              "Fifteen",
              "Sixteen",
              "Thirteen"
            ],
            "hint": "Literally 'ten and three' (feminine concord)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atomon kanuoŋon\" mean in English?",
            "correctAnswer": "Fourteen",
            "options": [
              "Fifteen",
              "Sixteen",
              "Fourteen",
              "Thirteen"
            ],
            "hint": "Literally 'ten and four' (feminine concord)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atomon kanukany\" mean in English?",
            "correctAnswer": "Fifteen",
            "options": [
              "Sixteen",
              "Fifteen",
              "Thirteen",
              "Fourteen"
            ],
            "hint": "Literally 'ten and five' (feminine concord)."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fifteen\" in Teso (Ateso)?",
            "correctAnswer": "Atomon kanukany",
            "options": [
              "Atomon kanukany",
              "Atomon kanuuni",
              "Atomon kanuoŋon",
              "Atomon kanukany kape"
            ],
            "hint": "ah-toh-mohn kah-noo-kahn-y"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sixteen\" in Teso (Ateso)?",
            "correctAnswer": "Atomon kanukany kape",
            "options": [
              "Atomon kanuuni",
              "Atomon kanuoŋon",
              "Atomon kanukany",
              "Atomon kanukany kape"
            ],
            "hint": "ah-toh-mohn kah-noo-kahn-y kah-peh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Twenty\" in Teso (Ateso)?",
            "correctAnswer": "Akais aarei",
            "options": [
              "Atomon kanuoŋon",
              "Atomon kanukany",
              "Akais aarei",
              "Atomon kanuuni"
            ],
            "hint": "ah-kah-ees ah-ah-reh-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Atomon kanuuni: Thirteen, Atomon kanuoŋon: Fourteen, Atomon kanukany: Fifteen, Atomon kanukany kape: Sixteen",
            "pairs": [
              {
                "left": "Atomon kanuuni",
                "right": "Thirteen"
              },
              {
                "left": "Atomon kanuoŋon",
                "right": "Fourteen"
              },
              {
                "left": "Atomon kanukany",
                "right": "Fifteen"
              },
              {
                "left": "Atomon kanukany kape",
                "right": "Sixteen"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Thirteen\" in Teso (Ateso).",
            "correctAnswer": "Atomon kanuuni",
            "options": [
              "Atomon kanuuni",
              "Atomon kanuoŋon",
              "Atomon kanukany",
              "Atomon kanukany kape"
            ],
            "hint": "ah-toh-mohn kah-noo-oo-nee"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-7-phrases",
    "title": "Unit 7: Common Phrases",
    "description": "Comprehensive Teso (Ateso) curriculum for Common Phrases, vetted from J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
    "icon": "MessageCircle",
    "skills": [
      {
        "id": "teso-exp-phrases",
        "title": "Common Phrases (Part 1)",
        "icon": "MessageCircle",
        "description": "Master Teso (Ateso) common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Iŋai ekirorkon?' (What is your name?), 'Ekirorka erai...' (My name is...), 'Ai ibunit ijo?' (Where do you come from?), 'Abuni eoŋ ko...' (I come from...).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Iŋai ekirorkon?",
            "source": "What is your name?",
            "pronunciation": "ee-ngah-ee eh-kee-rohr-kohn",
            "hint": "Literally 'Who is your name?'; 'ekiror' = name, '-kon' = your (singular).",
            "example": "Iŋai ekirorkon? — What is your name? (Literally 'Who is your name?'; 'ekiror' = name, '-kon' = your (singular).)"
          },
          {
            "target": "Ekirorka erai...",
            "source": "My name is...",
            "pronunciation": "eh-kee-rohr-kah eh-rah-ee",
            "hint": "'Ekirorka' = my name; 'erai' = is (verb to be quality form).",
            "example": "Ekirorka erai... — My name is... ('Ekirorka' = my name; 'erai' = is (verb to be quality form).)"
          },
          {
            "target": "Ai ibunit ijo?",
            "source": "Where do you come from?",
            "pronunciation": "ah-ee ee-boo-neet ee-joh",
            "hint": "'ai' = where, 'abunere' = to come (present: ibuni), 'ijo' = you.",
            "example": "Ai ibunit ijo? — Where do you come from? ('ai' = where, 'abunere' = to come (present: ibuni), 'ijo' = you.)"
          },
          {
            "target": "Abuni eoŋ ko...",
            "source": "I come from...",
            "pronunciation": "ah-boo-nee eh-ohng koh",
            "hint": "'abuni' = I come, 'eoŋ' = I/me, 'ko-' = locative prefix from/at.",
            "example": "Abuni eoŋ ko... — I come from... ('abuni' = I come, 'eoŋ' = I/me, 'ko-' = locative prefix from/at.)"
          },
          {
            "target": "Ai ilosi ijo?",
            "source": "Where are you going?",
            "pronunciation": "ah-ee ee-loh-see ee-joh",
            "hint": "'alosit' = to go; 2nd person singular present: ilosi.",
            "example": "Ai ilosi ijo? — Where are you going? ('alosit' = to go; 2nd person singular present: ilosi.)"
          },
          {
            "target": "Alosi eoŋ ore",
            "source": "I am going home",
            "pronunciation": "ah-loh-see eh-ohng oh-reh",
            "hint": "'alosi' = I go, 'ore' = at home (homestead locative).",
            "example": "Alosi eoŋ ore — I am going home ('alosi' = I go, 'ore' = at home (homestead locative).)"
          },
          {
            "target": "Inyo ikoto ijo?",
            "source": "What do you want?",
            "pronunciation": "een-yoh ee-koh-toh ee-joh",
            "hint": "'inyo' = what, 'akot' = to want (continuous verb: ikoto).",
            "example": "Inyo ikoto ijo? — What do you want? ('inyo' = what, 'akot' = to want (continuous verb: ikoto).)"
          },
          {
            "target": "Akoto eoŋ akipi",
            "source": "I want water",
            "pronunciation": "ah-koh-toh eh-ohng ah-kee-pee",
            "hint": "'akoto' = I want, 'akipi' = water.",
            "example": "Akoto eoŋ akipi — I want water ('akoto' = I want, 'akipi' = water.)"
          },
          {
            "target": "Kiŋarakai eoŋ",
            "source": "Please help me",
            "pronunciation": "kee-ngah-rah-kah-ee eh-ohng",
            "hint": "Imperative of 'aiŋarakin' (to help) with 1st person contained object.",
            "example": "Kiŋarakai eoŋ — Please help me (Imperative of 'aiŋarakin' (to help) with 1st person contained object.)"
          },
          {
            "target": "Inyo bo yen?",
            "source": "What is this?",
            "pronunciation": "een-yoh boh yen",
            "hint": "'inyo' = what, 'bo' = interrogative particle, 'yen' = this (neuter).",
            "example": "Inyo bo yen? — What is this? ('inyo' = what, 'bo' = interrogative particle, 'yen' = this (neuter).)"
          },
          {
            "target": "Iŋai bo ŋol?",
            "source": "Who is that?",
            "pronunciation": "ee-ngah-ee boh ngohl",
            "hint": "'iŋai' = who, 'ŋol' = that (masculine).",
            "example": "Iŋai bo ŋol? — Who is that? ('iŋai' = who, 'ŋol' = that (masculine).)"
          },
          {
            "target": "Imwaas ai?",
            "source": "How much is it? / How many?",
            "pronunciation": "eem-wah-ahs ah-ee",
            "hint": "From 'amwaus' (verb to be in numerical quantity) + 'ai?' (how many).",
            "example": "Imwaas ai? — How much is it? / How many? (From 'amwaus' (verb to be in numerical quantity) + 'ai?' (how many).)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok etunganan lo noi.",
            "source": "This person is very good."
          },
          {
            "target": "Elosete idwe osomero.",
            "source": "The children are going to school."
          },
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Iŋai ekirorkon?\" mean in English?",
            "correctAnswer": "What is your name?",
            "options": [
              "My name is...",
              "Where do you come from?",
              "I come from...",
              "What is your name?"
            ],
            "hint": "Literally 'Who is your name?'; 'ekiror' = name, '-kon' = your (singular)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekirorka erai...\" mean in English?",
            "correctAnswer": "My name is...",
            "options": [
              "Where do you come from?",
              "I come from...",
              "My name is...",
              "What is your name?"
            ],
            "hint": "'Ekirorka' = my name; 'erai' = is (verb to be quality form)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ai ibunit ijo?\" mean in English?",
            "correctAnswer": "Where do you come from?",
            "options": [
              "I come from...",
              "Where do you come from?",
              "What is your name?",
              "My name is..."
            ],
            "hint": "'ai' = where, 'abunere' = to come (present: ibuni), 'ijo' = you."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where do you come from?\" in Teso (Ateso)?",
            "correctAnswer": "Ai ibunit ijo?",
            "options": [
              "Ai ibunit ijo?",
              "Iŋai ekirorkon?",
              "Ekirorka erai...",
              "Abuni eoŋ ko..."
            ],
            "hint": "ah-ee ee-boo-neet ee-joh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I come from...\" in Teso (Ateso)?",
            "correctAnswer": "Abuni eoŋ ko...",
            "options": [
              "Iŋai ekirorkon?",
              "Ekirorka erai...",
              "Ai ibunit ijo?",
              "Abuni eoŋ ko..."
            ],
            "hint": "ah-boo-nee eh-ohng koh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where are you going?\" in Teso (Ateso)?",
            "correctAnswer": "Ai ilosi ijo?",
            "options": [
              "Ekirorka erai...",
              "Ai ibunit ijo?",
              "Ai ilosi ijo?",
              "Iŋai ekirorkon?"
            ],
            "hint": "ah-ee ee-loh-see ee-joh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Iŋai ekirorkon?: What is your name?, Ekirorka erai...: My name is..., Ai ibunit ijo?: Where do you come from?, Abuni eoŋ ko...: I come from...",
            "pairs": [
              {
                "left": "Iŋai ekirorkon?",
                "right": "What is your name?"
              },
              {
                "left": "Ekirorka erai...",
                "right": "My name is..."
              },
              {
                "left": "Ai ibunit ijo?",
                "right": "Where do you come from?"
              },
              {
                "left": "Abuni eoŋ ko...",
                "right": "I come from..."
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"What is your name?\" in Teso (Ateso).",
            "correctAnswer": "Iŋai ekirorkon?",
            "options": [
              "Iŋai ekirorkon?",
              "Ekirorka erai...",
              "Ai ibunit ijo?",
              "Abuni eoŋ ko..."
            ],
            "hint": "ee-ngah-ee eh-kee-rohr-kohn"
          }
        ]
      },
      {
        "id": "teso-exp-phrases-2",
        "title": "Common Phrases (Part 2)",
        "icon": "MessageCircle",
        "description": "Master Teso (Ateso) common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Mam ajeni' (I don't know), 'Ajeni eoŋ' (I know), 'Apupi eoŋ' (I understand / I hear), 'Mam apupi' (I don't understand).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Mam ajeni",
            "source": "I don't know",
            "pronunciation": "mahm ah-jeh-nee",
            "hint": "'mam' = not, 'aijen' = to know (1st pers: ajeni).",
            "example": "Mam ajeni — I don't know ('mam' = not, 'aijen' = to know (1st pers: ajeni).)"
          },
          {
            "target": "Ajeni eoŋ",
            "source": "I know",
            "pronunciation": "ah-jeh-nee eh-ohng",
            "hint": "From 'aijen' (to know); 'eoŋ' = I.",
            "example": "Ajeni eoŋ — I know (From 'aijen' (to know); 'eoŋ' = I.)"
          },
          {
            "target": "Apupi eoŋ",
            "source": "I understand / I hear",
            "pronunciation": "ah-poo-pee eh-ohng",
            "hint": "From 'aipup' (to hear / understand).",
            "example": "Apupi eoŋ — I understand / I hear (From 'aipup' (to hear / understand).)"
          },
          {
            "target": "Mam apupi",
            "source": "I don't understand",
            "pronunciation": "mahm ah-poo-pee",
            "hint": "Negative construction with 'mam'.",
            "example": "Mam apupi — I don't understand (Negative construction with 'mam'.)"
          },
          {
            "target": "Kobu kane!",
            "source": "Come here!",
            "pronunciation": "koh-boo kah-neh",
            "hint": "Imperative singular of 'abunere' (to come); 'kane' = here. Plural: Kopotu kane!",
            "example": "Kobu kane! — Come here! (Imperative singular of 'abunere' (to come); 'kane' = here. Plural: Kopotu kane!)"
          },
          {
            "target": "Kolot!",
            "source": "Go!",
            "pronunciation": "koh-loht",
            "hint": "Imperative singular of 'alosit' (to go). Plural: Kolototo!",
            "example": "Kolot! — Go! (Imperative singular of 'alosit' (to go). Plural: Kolototo!)"
          },
          {
            "target": "Kopup!",
            "source": "Listen!",
            "pronunciation": "koh-poop",
            "hint": "Imperative singular of 'aipup' (to hear/listen). Plural: Kopupoto!",
            "example": "Kopup! — Listen! (Imperative singular of 'aipup' (to hear/listen). Plural: Kopupoto!)"
          },
          {
            "target": "Kiner!",
            "source": "Speak!",
            "pronunciation": "kee-nehr",
            "hint": "Imperative singular of 'einer' (to speak). Plural: Kineras!",
            "example": "Kiner! — Speak! (Imperative singular of 'einer' (to speak). Plural: Kineras!)"
          },
          {
            "target": "Atipet",
            "source": "Quickly",
            "pronunciation": "ah-tee-peht",
            "hint": "Common adverb of speed and promptness.",
            "example": "Atipet — Quickly (Common adverb of speed and promptness.)"
          },
          {
            "target": "Epatana",
            "source": "Slowly / Gently / Peaceful",
            "pronunciation": "eh-pah-tah-nah",
            "hint": "Quality verb used adverbially: gentle, peaceful, easy.",
            "example": "Epatana — Slowly / Gently / Peaceful (Quality verb used adverbially: gentle, peaceful, easy.)"
          },
          {
            "target": "Kwana",
            "source": "Now",
            "pronunciation": "kwah-nah",
            "hint": "Adverb of time: now; emphatic: kwapekwana.",
            "example": "Kwana — Now (Adverb of time: now; emphatic: kwapekwana.)"
          },
          {
            "target": "Lolo",
            "source": "Today",
            "pronunciation": "loh-loh",
            "hint": "Adverb of time: today.",
            "example": "Lolo — Today (Adverb of time: today.)"
          }
        ],
        "sentences": [
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          },
          {
            "target": "Ejai akipi toma amot.",
            "source": "There is water inside the pot."
          },
          {
            "target": "Anyami aberu akimuj.",
            "source": "The woman is eating food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mam ajeni\" mean in English?",
            "correctAnswer": "I don't know",
            "options": [
              "I know",
              "I understand / I hear",
              "I don't understand",
              "I don't know"
            ],
            "hint": "'mam' = not, 'aijen' = to know (1st pers: ajeni)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ajeni eoŋ\" mean in English?",
            "correctAnswer": "I know",
            "options": [
              "I understand / I hear",
              "I don't understand",
              "I know",
              "I don't know"
            ],
            "hint": "From 'aijen' (to know); 'eoŋ' = I."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Apupi eoŋ\" mean in English?",
            "correctAnswer": "I understand / I hear",
            "options": [
              "I don't understand",
              "I understand / I hear",
              "I don't know",
              "I know"
            ],
            "hint": "From 'aipup' (to hear / understand)."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I understand / I hear\" in Teso (Ateso)?",
            "correctAnswer": "Apupi eoŋ",
            "options": [
              "Apupi eoŋ",
              "Mam ajeni",
              "Ajeni eoŋ",
              "Mam apupi"
            ],
            "hint": "ah-poo-pee eh-ohng"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I don't understand\" in Teso (Ateso)?",
            "correctAnswer": "Mam apupi",
            "options": [
              "Mam ajeni",
              "Ajeni eoŋ",
              "Apupi eoŋ",
              "Mam apupi"
            ],
            "hint": "mahm ah-poo-pee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Come here!\" in Teso (Ateso)?",
            "correctAnswer": "Kobu kane!",
            "options": [
              "Ajeni eoŋ",
              "Apupi eoŋ",
              "Kobu kane!",
              "Mam ajeni"
            ],
            "hint": "koh-boo kah-neh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Mam ajeni: I don't know, Ajeni eoŋ: I know, Apupi eoŋ: I understand / I hear, Mam apupi: I don't understand",
            "pairs": [
              {
                "left": "Mam ajeni",
                "right": "I don't know"
              },
              {
                "left": "Ajeni eoŋ",
                "right": "I know"
              },
              {
                "left": "Apupi eoŋ",
                "right": "I understand / I hear"
              },
              {
                "left": "Mam apupi",
                "right": "I don't understand"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"I don't know\" in Teso (Ateso).",
            "correctAnswer": "Mam ajeni",
            "options": [
              "Mam ajeni",
              "Ajeni eoŋ",
              "Apupi eoŋ",
              "Mam apupi"
            ],
            "hint": "mahm ah-jeh-nee"
          }
        ]
      },
      {
        "id": "teso-exp-phrases-3",
        "title": "Common Phrases (Part 3)",
        "icon": "MessageCircle",
        "description": "Master Teso (Ateso) common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Moi' (Tomorrow), 'Bian' (Yesterday), 'Erono' (Bad / Wicked), 'Epol' (Big / Large).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Moi",
            "source": "Tomorrow",
            "pronunciation": "moh-ee",
            "hint": "Adverb of time: tomorrow; the day after tomorrow = 'moi kace'.",
            "example": "Moi — Tomorrow (Adverb of time: tomorrow; the day after tomorrow = 'moi kace'.)"
          },
          {
            "target": "Bian",
            "source": "Yesterday",
            "pronunciation": "bee-ahn",
            "hint": "Adverb of time: yesterday.",
            "example": "Bian — Yesterday (Adverb of time: yesterday.)"
          },
          {
            "target": "Erono",
            "source": "Bad / Wicked",
            "pronunciation": "eh-roh-noh",
            "hint": "Quality verb: be bad/spoiled; plural: eroko.",
            "example": "Erono — Bad / Wicked (Quality verb: be bad/spoiled; plural: eroko.)"
          },
          {
            "target": "Epol",
            "source": "Big / Large",
            "pronunciation": "eh-pohl",
            "hint": "Quality verb: be big/great; plural: epolok.",
            "example": "Epol — Big / Large (Quality verb: be big/great; plural: epolok.)"
          },
          {
            "target": "Edit",
            "source": "Small / Little",
            "pronunciation": "eh-deet",
            "hint": "Quality verb: be small/young; plural: edisiak.",
            "example": "Edit — Small / Little (Quality verb: be small/young; plural: edisiak.)"
          },
          {
            "target": "Egogoŋ",
            "source": "Strong / Firm",
            "pronunciation": "eh-goh-gohng",
            "hint": "Quality verb: be strong, firm, durable; plural: egogoŋ.",
            "example": "Egogoŋ — Strong / Firm (Quality verb: be strong, firm, durable; plural: egogoŋ.)"
          },
          {
            "target": "Ededeŋ",
            "source": "Fierce / Severe",
            "pronunciation": "eh-deh-dehng",
            "hint": "Quality verb: be fierce, sharp, harsh; plural: ededeŋ.",
            "example": "Ededeŋ — Fierce / Severe (Quality verb: be fierce, sharp, harsh; plural: ededeŋ.)"
          },
          {
            "target": "Itet",
            "source": "New / Fresh",
            "pronunciation": "ee-teht",
            "hint": "Quality verb: be new; plural: itetiak.",
            "example": "Itet — New / Fresh (Quality verb: be new; plural: itetiak.)"
          },
          {
            "target": "Emojoŋ",
            "source": "Old / Aged",
            "pronunciation": "eh-moh-johng",
            "hint": "Quality verb: be elderly/old; plural: emojoŋitos.",
            "example": "Emojoŋ — Old / Aged (Quality verb: be elderly/old; plural: emojoŋitos.)"
          },
          {
            "target": "Naarai / Kanuka",
            "source": "Because",
            "pronunciation": "nah-ah-rah-ee / kah-noo-kah",
            "hint": "Conjunctions of cause and reasoning.",
            "example": "Naarai / Kanuka — Because (Conjunctions of cause and reasoning.)"
          },
          {
            "target": "Kere",
            "source": "All / Whole",
            "pronunciation": "keh-reh",
            "hint": "Invariable adjective: all, whole, every; e.g. ituŋa kere (all people).",
            "example": "Kere — All / Whole (Invariable adjective: all, whole, every; e.g. ituŋa kere (all people).)"
          }
        ],
        "sentences": [
          {
            "target": "Anyami aberu akimuj.",
            "source": "The woman is eating food."
          },
          {
            "target": "Ajeni eong ateso cut.",
            "source": "I know the Ateso language very well."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Moi\" mean in English?",
            "correctAnswer": "Tomorrow",
            "options": [
              "Yesterday",
              "Bad / Wicked",
              "Big / Large",
              "Tomorrow"
            ],
            "hint": "Adverb of time: tomorrow; the day after tomorrow = 'moi kace'."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Bian\" mean in English?",
            "correctAnswer": "Yesterday",
            "options": [
              "Bad / Wicked",
              "Big / Large",
              "Yesterday",
              "Tomorrow"
            ],
            "hint": "Adverb of time: yesterday."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Erono\" mean in English?",
            "correctAnswer": "Bad / Wicked",
            "options": [
              "Big / Large",
              "Bad / Wicked",
              "Tomorrow",
              "Yesterday"
            ],
            "hint": "Quality verb: be bad/spoiled; plural: eroko."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bad / Wicked\" in Teso (Ateso)?",
            "correctAnswer": "Erono",
            "options": [
              "Erono",
              "Moi",
              "Bian",
              "Epol"
            ],
            "hint": "eh-roh-noh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Big / Large\" in Teso (Ateso)?",
            "correctAnswer": "Epol",
            "options": [
              "Moi",
              "Bian",
              "Erono",
              "Epol"
            ],
            "hint": "eh-pohl"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Small / Little\" in Teso (Ateso)?",
            "correctAnswer": "Edit",
            "options": [
              "Bian",
              "Erono",
              "Edit",
              "Moi"
            ],
            "hint": "eh-deet"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Moi: Tomorrow, Bian: Yesterday, Erono: Bad / Wicked, Epol: Big / Large",
            "pairs": [
              {
                "left": "Moi",
                "right": "Tomorrow"
              },
              {
                "left": "Bian",
                "right": "Yesterday"
              },
              {
                "left": "Erono",
                "right": "Bad / Wicked"
              },
              {
                "left": "Epol",
                "right": "Big / Large"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Tomorrow\" in Teso (Ateso).",
            "correctAnswer": "Moi",
            "options": [
              "Moi",
              "Bian",
              "Erono",
              "Epol"
            ],
            "hint": "moh-ee"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-8-family",
    "title": "Unit 8: Family & Society",
    "description": "Comprehensive Teso (Ateso) curriculum for Family & Society, vetted from J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
    "icon": "Users",
    "skills": [
      {
        "id": "teso-exp-family",
        "title": "Family & Society (Part 1)",
        "icon": "Users",
        "description": "Master Teso (Ateso) family & society vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Family & Society, pay special attention to pronunciation and morphological prefixes/suffixes: 'Etuŋanan (pl. Ituŋa)' (Person / Human being), 'Ekiliokit / Ekile (pl. Ikiliok)' (Man (male person)), 'Aberu (pl. Aŋor)' (Woman), 'Ikoku (pl. Idwe)' (Child).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Etuŋanan (pl. Ituŋa)",
            "source": "Person / Human being",
            "pronunciation": "eh-too-ngah-nahn",
            "hint": "Plural: ituŋa (people); generic plural: ituŋasinei (mankind).",
            "example": "Etuŋanan (pl. Ituŋa) — Person / Human being (Plural: ituŋa (people); generic plural: ituŋasinei (mankind).)"
          },
          {
            "target": "Ekiliokit / Ekile (pl. Ikiliok)",
            "source": "Man (male person)",
            "pronunciation": "eh-kee-lee-oh-keet / eh-kee-leh",
            "hint": "Masculine gender prefix e-; plural: ikiliok (men).",
            "example": "Ekiliokit / Ekile (pl. Ikiliok) — Man (male person) (Masculine gender prefix e-; plural: ikiliok (men).)"
          },
          {
            "target": "Aberu (pl. Aŋor)",
            "source": "Woman",
            "pronunciation": "ah-beh-roo",
            "hint": "Feminine prefix a-; plural: aŋor (women), irregular plural root.",
            "example": "Aberu (pl. Aŋor) — Woman (Feminine prefix a-; plural: aŋor (women), irregular plural root.)"
          },
          {
            "target": "Ikoku (pl. Idwe)",
            "source": "Child",
            "pronunciation": "ee-koh-koo",
            "hint": "Diminutive/neuter prefix i-; plural: idwe (children).",
            "example": "Ikoku (pl. Idwe) — Child (Diminutive/neuter prefix i-; plural: idwe (children).)"
          },
          {
            "target": "Etelepat (pl. Itelepai)",
            "source": "Boy",
            "pronunciation": "eh-teh-leh-paht",
            "hint": "Masculine noun; plural: itelepai (boys).",
            "example": "Etelepat (pl. Itelepai) — Boy (Masculine noun; plural: itelepai (boys).)"
          },
          {
            "target": "Apese (pl. Apesur)",
            "source": "Girl",
            "pronunciation": "ah-peh-seh",
            "hint": "Feminine noun; plural: apesur (girls). Diminutive: ipese (baby girl).",
            "example": "Apese (pl. Apesur) — Girl (Feminine noun; plural: apesur (girls). Diminutive: ipese (baby girl).)"
          },
          {
            "target": "Ipesen / Ikoku yenikidioko",
            "source": "Baby / Infant",
            "pronunciation": "ee-peh-sehn",
            "hint": "Neuter diminutive form; plural: idwe luikidioko.",
            "example": "Ipesen / Ikoku yenikidioko — Baby / Infant (Neuter diminutive form; plural: idwe luikidioko.)"
          },
          {
            "target": "Papa (pl. Lukapapa)",
            "source": "Father",
            "pronunciation": "pah-pah",
            "hint": "Kinship noun taking no prefix in singular; plural: lukapapa.",
            "example": "Papa (pl. Lukapapa) — Father (Kinship noun taking no prefix in singular; plural: lukapapa.)"
          },
          {
            "target": "Toto (pl. Nukatoto)",
            "source": "Mother",
            "pronunciation": "toh-toh",
            "hint": "Kinship noun taking no prefix in singular; plural: nukatoto.",
            "example": "Toto (pl. Nukatoto) — Mother (Kinship noun taking no prefix in singular; plural: nukatoto.)"
          },
          {
            "target": "Ekale (pl. Ikalia)",
            "source": "Family / Household",
            "pronunciation": "eh-kah-leh",
            "hint": "Masculine noun; plural: ikalia (families, extended households).",
            "example": "Ekale (pl. Ikalia) — Family / Household (Masculine noun; plural: ikalia (families, extended households).)"
          },
          {
            "target": "Onace (pl. Imina)",
            "source": "Brother / Sibling",
            "pronunciation": "oh-nah-cheh",
            "hint": "Plural: imina (brothers, siblings).",
            "example": "Onace (pl. Imina) — Brother / Sibling (Plural: imina (brothers, siblings).)"
          },
          {
            "target": "Inace (pl. Anacenei)",
            "source": "Sister",
            "pronunciation": "ee-nah-cheh",
            "hint": "Female sibling; feminine kinship term.",
            "example": "Inace (pl. Anacenei) — Sister (Female sibling; feminine kinship term.)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok etunganan lo noi.",
            "source": "This person is very good."
          },
          {
            "target": "Elosete idwe osomero.",
            "source": "The children are going to school."
          },
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Etuŋanan (pl. Ituŋa)\" mean in English?",
            "correctAnswer": "Person / Human being",
            "options": [
              "Man (male person)",
              "Woman",
              "Child",
              "Person / Human being"
            ],
            "hint": "Plural: ituŋa (people); generic plural: ituŋasinei (mankind)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekiliokit / Ekile (pl. Ikiliok)\" mean in English?",
            "correctAnswer": "Man (male person)",
            "options": [
              "Woman",
              "Child",
              "Man (male person)",
              "Person / Human being"
            ],
            "hint": "Masculine gender prefix e-; plural: ikiliok (men)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aberu (pl. Aŋor)\" mean in English?",
            "correctAnswer": "Woman",
            "options": [
              "Child",
              "Woman",
              "Person / Human being",
              "Man (male person)"
            ],
            "hint": "Feminine prefix a-; plural: aŋor (women), irregular plural root."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Woman\" in Teso (Ateso)?",
            "correctAnswer": "Aberu (pl. Aŋor)",
            "options": [
              "Aberu (pl. Aŋor)",
              "Etuŋanan (pl. Ituŋa)",
              "Ekiliokit / Ekile (pl. Ikiliok)",
              "Ikoku (pl. Idwe)"
            ],
            "hint": "ah-beh-roo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Child\" in Teso (Ateso)?",
            "correctAnswer": "Ikoku (pl. Idwe)",
            "options": [
              "Etuŋanan (pl. Ituŋa)",
              "Ekiliokit / Ekile (pl. Ikiliok)",
              "Aberu (pl. Aŋor)",
              "Ikoku (pl. Idwe)"
            ],
            "hint": "ee-koh-koo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Boy\" in Teso (Ateso)?",
            "correctAnswer": "Etelepat (pl. Itelepai)",
            "options": [
              "Ekiliokit / Ekile (pl. Ikiliok)",
              "Aberu (pl. Aŋor)",
              "Etelepat (pl. Itelepai)",
              "Etuŋanan (pl. Ituŋa)"
            ],
            "hint": "eh-teh-leh-paht"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Etuŋanan (pl. Ituŋa): Person / Human being, Ekiliokit / Ekile (pl. Ikiliok): Man (male person), Aberu (pl. Aŋor): Woman, Ikoku (pl. Idwe): Child",
            "pairs": [
              {
                "left": "Etuŋanan (pl. Ituŋa)",
                "right": "Person / Human being"
              },
              {
                "left": "Ekiliokit / Ekile (pl. Ikiliok)",
                "right": "Man (male person)"
              },
              {
                "left": "Aberu (pl. Aŋor)",
                "right": "Woman"
              },
              {
                "left": "Ikoku (pl. Idwe)",
                "right": "Child"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Person / Human being\" in Teso (Ateso).",
            "correctAnswer": "Etuŋanan (pl. Ituŋa)",
            "options": [
              "Etuŋanan (pl. Ituŋa)",
              "Ekiliokit / Ekile (pl. Ikiliok)",
              "Aberu (pl. Aŋor)",
              "Ikoku (pl. Idwe)"
            ],
            "hint": "eh-too-ngah-nahn"
          }
        ]
      },
      {
        "id": "teso-exp-family-2",
        "title": "Family & Society (Part 2)",
        "icon": "Users",
        "description": "Master Teso (Ateso) family & society vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Family & Society, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ekile (pl. Ikiliok)' (Husband), 'Ekasikout (pl. Ikasikou)' (Elder / Old man), 'Amukatat (pl. Amukatan)' (Elderly woman), 'Etesot (pl. Iteso)' (Teso person).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Ekile (pl. Ikiliok)",
            "source": "Husband",
            "pronunciation": "eh-kee-leh",
            "hint": "Also means male person; plural: ikiliok.",
            "example": "Ekile (pl. Ikiliok) — Husband (Also means male person; plural: ikiliok.)"
          },
          {
            "target": "Ekasikout (pl. Ikasikou)",
            "source": "Elder / Old man",
            "pronunciation": "eh-kah-see-koh-oot",
            "hint": "Respected male elder in Teso community.",
            "example": "Ekasikout (pl. Ikasikou) — Elder / Old man (Respected male elder in Teso community.)"
          },
          {
            "target": "Amukatat (pl. Amukatan)",
            "source": "Elderly woman",
            "pronunciation": "ah-moo-kah-taht",
            "hint": "Respected elder woman; plural: amukatan.",
            "example": "Amukatat (pl. Amukatan) — Elderly woman (Respected elder woman; plural: amukatan.)"
          },
          {
            "target": "Etesot (pl. Iteso)",
            "source": "Teso person",
            "pronunciation": "eh-teh-soht",
            "hint": "A person of the Teso nation; feminine: Atesot; language: Ateso.",
            "example": "Etesot (pl. Iteso) — Teso person (A person of the Teso nation; feminine: Atesot; language: Ateso.)"
          },
          {
            "target": "Ekamejan (pl. Ikamejak)",
            "source": "Hunter",
            "pronunciation": "eh-kah-meh-jahn",
            "hint": "Agent noun derived from 'amej' (to hunt); plural: ikamejak.",
            "example": "Ekamejan (pl. Ikamejak) — Hunter (Agent noun derived from 'amej' (to hunt); plural: ikamejak.)"
          },
          {
            "target": "Ekecokon (pl. Ikecokok)",
            "source": "Herdsman",
            "pronunciation": "eh-keh-choh-kohn",
            "hint": "Agent noun derived from 'acok' (to herd livestock); plural: ikecokok.",
            "example": "Ekecokon (pl. Ikecokok) — Herdsman (Agent noun derived from 'acok' (to herd livestock); plural: ikecokok.)"
          },
          {
            "target": "Esirikalet (pl. Isirikalei)",
            "source": "Soldier",
            "pronunciation": "eh-see-ree-kah-leht",
            "hint": "Plural: isirikalei; borrowed term fully integrated into Ateso noun classes.",
            "example": "Esirikalet (pl. Isirikalei) — Soldier (Plural: isirikalei; borrowed term fully integrated into Ateso noun classes.)"
          },
          {
            "target": "Ekadukon (pl. Ikadukok)",
            "source": "Builder",
            "pronunciation": "eh-kah-doo-kohn",
            "hint": "Agent noun derived from 'aiduk' (to build); plural: ikadukok.",
            "example": "Ekadukon (pl. Ikadukok) — Builder (Agent noun derived from 'aiduk' (to build); plural: ikadukok.)"
          },
          {
            "target": "Ekesisianakinan (pl. Ikesisianakinak)",
            "source": "Teacher",
            "pronunciation": "eh-keh-see-see-ah-nah-kee-nahn",
            "hint": "Agent noun derived from 'aisisianakin' (to teach).",
            "example": "Ekesisianakinan (pl. Ikesisianakinak) — Teacher (Agent noun derived from 'aisisianakin' (to teach).)"
          },
          {
            "target": "Epakasit (pl. Ipakasin)",
            "source": "Labourer / Porter",
            "pronunciation": "eh-pah-kah-seet",
            "hint": "Plural: ipakasin; manual worker or porter.",
            "example": "Epakasit (pl. Ipakasin) — Labourer / Porter (Plural: ipakasin; manual worker or porter.)"
          },
          {
            "target": "Ekasabat (pl. Ikasabak)",
            "source": "Liar",
            "pronunciation": "eh-kah-sah-baht",
            "hint": "Habitual agent noun derived from 'aisab' (to tell lies).",
            "example": "Ekasabat (pl. Ikasabak) — Liar (Habitual agent noun derived from 'aisab' (to tell lies).)"
          }
        ],
        "sentences": [
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          },
          {
            "target": "Ejai akipi toma amot.",
            "source": "There is water inside the pot."
          },
          {
            "target": "Anyami aberu akimuj.",
            "source": "The woman is eating food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekile (pl. Ikiliok)\" mean in English?",
            "correctAnswer": "Husband",
            "options": [
              "Elder / Old man",
              "Elderly woman",
              "Teso person",
              "Husband"
            ],
            "hint": "Also means male person; plural: ikiliok."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekasikout (pl. Ikasikou)\" mean in English?",
            "correctAnswer": "Elder / Old man",
            "options": [
              "Elderly woman",
              "Teso person",
              "Elder / Old man",
              "Husband"
            ],
            "hint": "Respected male elder in Teso community."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Amukatat (pl. Amukatan)\" mean in English?",
            "correctAnswer": "Elderly woman",
            "options": [
              "Teso person",
              "Elderly woman",
              "Husband",
              "Elder / Old man"
            ],
            "hint": "Respected elder woman; plural: amukatan."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Elderly woman\" in Teso (Ateso)?",
            "correctAnswer": "Amukatat (pl. Amukatan)",
            "options": [
              "Amukatat (pl. Amukatan)",
              "Ekile (pl. Ikiliok)",
              "Ekasikout (pl. Ikasikou)",
              "Etesot (pl. Iteso)"
            ],
            "hint": "ah-moo-kah-taht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Teso person\" in Teso (Ateso)?",
            "correctAnswer": "Etesot (pl. Iteso)",
            "options": [
              "Ekile (pl. Ikiliok)",
              "Ekasikout (pl. Ikasikou)",
              "Amukatat (pl. Amukatan)",
              "Etesot (pl. Iteso)"
            ],
            "hint": "eh-teh-soht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hunter\" in Teso (Ateso)?",
            "correctAnswer": "Ekamejan (pl. Ikamejak)",
            "options": [
              "Ekasikout (pl. Ikasikou)",
              "Amukatat (pl. Amukatan)",
              "Ekamejan (pl. Ikamejak)",
              "Ekile (pl. Ikiliok)"
            ],
            "hint": "eh-kah-meh-jahn"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Ekile (pl. Ikiliok): Husband, Ekasikout (pl. Ikasikou): Elder / Old man, Amukatat (pl. Amukatan): Elderly woman, Etesot (pl. Iteso): Teso person",
            "pairs": [
              {
                "left": "Ekile (pl. Ikiliok)",
                "right": "Husband"
              },
              {
                "left": "Ekasikout (pl. Ikasikou)",
                "right": "Elder / Old man"
              },
              {
                "left": "Amukatat (pl. Amukatan)",
                "right": "Elderly woman"
              },
              {
                "left": "Etesot (pl. Iteso)",
                "right": "Teso person"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Husband\" in Teso (Ateso).",
            "correctAnswer": "Ekile (pl. Ikiliok)",
            "options": [
              "Ekile (pl. Ikiliok)",
              "Ekasikout (pl. Ikasikou)",
              "Amukatat (pl. Amukatan)",
              "Etesot (pl. Iteso)"
            ],
            "hint": "eh-kee-leh"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-9-animals",
    "title": "Unit 9: Animals & Livestock",
    "description": "Comprehensive Teso (Ateso) curriculum for Animals & Livestock, vetted from J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
    "icon": "Compass",
    "skills": [
      {
        "id": "teso-exp-animals",
        "title": "Animals & Livestock (Part 1)",
        "icon": "Compass",
        "description": "Master Teso (Ateso) animals & livestock vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Animals & Livestock, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akiteŋ (pl. Akituk / Akitiok)' (Cow), 'Emoŋ (pl. Imoŋin)' (Bull / Ox), 'Ibaren (sing. Ebarasit)' (Livestock / Cattle), 'Ekiŋok (pl. Iŋokwo)' (Dog (male)).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Akiteŋ (pl. Akituk / Akitiok)",
            "source": "Cow",
            "pronunciation": "ah-kee-tehng",
            "hint": "Plural: akituk; female cow, the cornerstone of Teso economic and cultural life.",
            "example": "Akiteŋ (pl. Akituk / Akitiok) — Cow (Plural: akituk; female cow, the cornerstone of Teso economic and cultural life.)"
          },
          {
            "target": "Emoŋ (pl. Imoŋin)",
            "source": "Bull / Ox",
            "pronunciation": "eh-mohng",
            "hint": "Plural: imoŋin; draft animal used in ox-ploughing and cultural ceremonies.",
            "example": "Emoŋ (pl. Imoŋin) — Bull / Ox (Plural: imoŋin; draft animal used in ox-ploughing and cultural ceremonies.)"
          },
          {
            "target": "Ibaren (sing. Ebarasit)",
            "source": "Livestock / Cattle",
            "pronunciation": "ee-bah-rehn",
            "hint": "Collective noun for cattle, livestock herds, and familial wealth.",
            "example": "Ibaren (sing. Ebarasit) — Livestock / Cattle (Collective noun for cattle, livestock herds, and familial wealth.)"
          },
          {
            "target": "Ekiŋok (pl. Iŋokwo)",
            "source": "Dog (male)",
            "pronunciation": "eh-kee-ngohk",
            "hint": "Masculine noun; plural: iŋokwo.",
            "example": "Ekiŋok (pl. Iŋokwo) — Dog (male) (Masculine noun; plural: iŋokwo.)"
          },
          {
            "target": "Akiŋok (pl. Aŋokwo)",
            "source": "Bitch (female dog)",
            "pronunciation": "ah-kee-ngohk",
            "hint": "Feminine noun form; plural: aŋokwo.",
            "example": "Akiŋok (pl. Aŋokwo) — Bitch (female dog) (Feminine noun form; plural: aŋokwo.)"
          },
          {
            "target": "Ikiŋok (pl. Iŋokwei)",
            "source": "Puppy",
            "pronunciation": "ee-kee-ngohk",
            "hint": "Diminutive neuter form for young dog.",
            "example": "Ikiŋok (pl. Iŋokwei) — Puppy (Diminutive neuter form for young dog.)"
          },
          {
            "target": "Akokor (pl. Akokorei)",
            "source": "Hen / Domestic fowl",
            "pronunciation": "ah-koh-kohr",
            "hint": "Feminine noun; plural: akokorei (domestic fowls).",
            "example": "Akokor (pl. Akokorei) — Hen / Domestic fowl (Feminine noun; plural: akokorei (domestic fowls).)"
          },
          {
            "target": "Imiot (pl. Imioi)",
            "source": "Chicken / Chick",
            "pronunciation": "ee-mee-oht",
            "hint": "Plural: imioi; small chicken or chick.",
            "example": "Imiot (pl. Imioi) — Chicken / Chick (Plural: imioi; small chicken or chick.)"
          },
          {
            "target": "Epege (pl. Ipegei)",
            "source": "Pig",
            "pronunciation": "eh-peh-geh",
            "hint": "Masculine noun; plural: ipegei.",
            "example": "Epege (pl. Ipegei) — Pig (Masculine noun; plural: ipegei.)"
          },
          {
            "target": "Emir (pl. Imirio)",
            "source": "Rat / Mouse",
            "pronunciation": "eh-meer",
            "hint": "Masculine noun; plural: imirio.",
            "example": "Emir (pl. Imirio) — Rat / Mouse (Masculine noun; plural: imirio.)"
          },
          {
            "target": "Etome (pl. Itomei)",
            "source": "Elephant",
            "pronunciation": "eh-toh-meh",
            "hint": "Masculine noun; plural: itomei.",
            "example": "Etome (pl. Itomei) — Elephant (Masculine noun; plural: itomei.)"
          },
          {
            "target": "Esirut (pl. Isiruto)",
            "source": "Mosquito",
            "pronunciation": "eh-see-root",
            "hint": "Masculine noun; plural: isiruto.",
            "example": "Esirut (pl. Isiruto) — Mosquito (Masculine noun; plural: isiruto.)"
          },
          {
            "target": "Eŋatunyo (pl. Iŋatunyoi)",
            "source": "Lion",
            "pronunciation": "eh-ngah-toon-yoh",
            "hint": "Masculine noun; plural: iŋatunyoi.",
            "example": "Eŋatunyo (pl. Iŋatunyoi) — Lion (Masculine noun; plural: iŋatunyoi.)"
          },
          {
            "target": "Ekweny (pl. Ikwenyi)",
            "source": "Bird",
            "pronunciation": "eh-kwehny",
            "hint": "Masculine noun; plural: ikwenyi.",
            "example": "Ekweny (pl. Ikwenyi) — Bird (Masculine noun; plural: ikwenyi.)"
          },
          {
            "target": "Akine (pl. Akyinei)",
            "source": "Goat",
            "pronunciation": "ah-kee-neh",
            "hint": "Feminine noun; plural: akyinei.",
            "example": "Akine (pl. Akyinei) — Goat (Feminine noun; plural: akyinei.)"
          },
          {
            "target": "Amerekek (pl. Amerekekin)",
            "source": "Sheep",
            "pronunciation": "ah-meh-reh-kehk",
            "hint": "Feminine noun; plural: amerekekin.",
            "example": "Amerekek (pl. Amerekekin) — Sheep (Feminine noun; plural: amerekekin.)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok etunganan lo noi.",
            "source": "This person is very good."
          },
          {
            "target": "Elosete idwe osomero.",
            "source": "The children are going to school."
          },
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akiteŋ (pl. Akituk / Akitiok)\" mean in English?",
            "correctAnswer": "Cow",
            "options": [
              "Bull / Ox",
              "Livestock / Cattle",
              "Dog (male)",
              "Cow"
            ],
            "hint": "Plural: akituk; female cow, the cornerstone of Teso economic and cultural life."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emoŋ (pl. Imoŋin)\" mean in English?",
            "correctAnswer": "Bull / Ox",
            "options": [
              "Livestock / Cattle",
              "Dog (male)",
              "Bull / Ox",
              "Cow"
            ],
            "hint": "Plural: imoŋin; draft animal used in ox-ploughing and cultural ceremonies."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ibaren (sing. Ebarasit)\" mean in English?",
            "correctAnswer": "Livestock / Cattle",
            "options": [
              "Dog (male)",
              "Livestock / Cattle",
              "Cow",
              "Bull / Ox"
            ],
            "hint": "Collective noun for cattle, livestock herds, and familial wealth."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Livestock / Cattle\" in Teso (Ateso)?",
            "correctAnswer": "Ibaren (sing. Ebarasit)",
            "options": [
              "Ibaren (sing. Ebarasit)",
              "Akiteŋ (pl. Akituk / Akitiok)",
              "Emoŋ (pl. Imoŋin)",
              "Ekiŋok (pl. Iŋokwo)"
            ],
            "hint": "ee-bah-rehn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Dog (male)\" in Teso (Ateso)?",
            "correctAnswer": "Ekiŋok (pl. Iŋokwo)",
            "options": [
              "Akiteŋ (pl. Akituk / Akitiok)",
              "Emoŋ (pl. Imoŋin)",
              "Ibaren (sing. Ebarasit)",
              "Ekiŋok (pl. Iŋokwo)"
            ],
            "hint": "eh-kee-ngohk"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bitch (female dog)\" in Teso (Ateso)?",
            "correctAnswer": "Akiŋok (pl. Aŋokwo)",
            "options": [
              "Emoŋ (pl. Imoŋin)",
              "Ibaren (sing. Ebarasit)",
              "Akiŋok (pl. Aŋokwo)",
              "Akiteŋ (pl. Akituk / Akitiok)"
            ],
            "hint": "ah-kee-ngohk"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Akiteŋ (pl. Akituk / Akitiok): Cow, Emoŋ (pl. Imoŋin): Bull / Ox, Ibaren (sing. Ebarasit): Livestock / Cattle, Ekiŋok (pl. Iŋokwo): Dog (male)",
            "pairs": [
              {
                "left": "Akiteŋ (pl. Akituk / Akitiok)",
                "right": "Cow"
              },
              {
                "left": "Emoŋ (pl. Imoŋin)",
                "right": "Bull / Ox"
              },
              {
                "left": "Ibaren (sing. Ebarasit)",
                "right": "Livestock / Cattle"
              },
              {
                "left": "Ekiŋok (pl. Iŋokwo)",
                "right": "Dog (male)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Cow\" in Teso (Ateso).",
            "correctAnswer": "Akiteŋ (pl. Akituk / Akitiok)",
            "options": [
              "Akiteŋ (pl. Akituk / Akitiok)",
              "Emoŋ (pl. Imoŋin)",
              "Ibaren (sing. Ebarasit)",
              "Ekiŋok (pl. Iŋokwo)"
            ],
            "hint": "ah-kee-tehng"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-10-nature",
    "title": "Unit 10: Nature & Environment",
    "description": "Comprehensive Teso (Ateso) curriculum for Nature & Environment, vetted from J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
    "icon": "Sun",
    "skills": [
      {
        "id": "teso-exp-nature",
        "title": "Nature & Environment (Part 1)",
        "icon": "Sun",
        "description": "Master Teso (Ateso) nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akoloŋ' (Sun / Sunlight), 'Elap (pl. Ilapio)' (Moon / Month), 'Edou (pl. Idouon)' (Rain / Cloud), 'Akwap (pl. Akwapin)' (Earth / Land / World).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Akoloŋ",
            "source": "Sun / Sunlight",
            "pronunciation": "ah-koh-lohng",
            "hint": "Feminine singular noun; sunlight, daytime sun.",
            "example": "Akoloŋ — Sun / Sunlight (Feminine singular noun; sunlight, daytime sun.)"
          },
          {
            "target": "Elap (pl. Ilapio)",
            "source": "Moon / Month",
            "pronunciation": "eh-lahp",
            "hint": "Masculine noun; plural: ilapio; moon or calendar month.",
            "example": "Elap (pl. Ilapio) — Moon / Month (Masculine noun; plural: ilapio; moon or calendar month.)"
          },
          {
            "target": "Edou (pl. Idouon)",
            "source": "Rain / Cloud",
            "pronunciation": "eh-doh-oo",
            "hint": "Masculine noun; plural: idouon; rain cloud, rainstorm.",
            "example": "Edou (pl. Idouon) — Rain / Cloud (Masculine noun; plural: idouon; rain cloud, rainstorm.)"
          },
          {
            "target": "Akwap (pl. Akwapin)",
            "source": "Earth / Land / World",
            "pronunciation": "ah-kwahp",
            "hint": "Feminine noun; plural: akwapin; 'akwapisinei' = the whole world / universe.",
            "example": "Akwap (pl. Akwapin) — Earth / Land / World (Feminine noun; plural: akwapin; 'akwapisinei' = the whole world / universe.)"
          },
          {
            "target": "Amoru (pl. Amor)",
            "source": "Stone / Rock",
            "pronunciation": "ah-moh-roo",
            "hint": "Feminine noun; plural: amor; rock, boulder, stone.",
            "example": "Amoru (pl. Amor) — Stone / Rock (Feminine noun; plural: amor; rock, boulder, stone.)"
          },
          {
            "target": "Imoru (pl. Imor)",
            "source": "Pebble",
            "pronunciation": "ee-moh-roo",
            "hint": "Diminutive neuter form: small stone or gravel.",
            "example": "Imoru (pl. Imor) — Pebble (Diminutive neuter form: small stone or gravel.)"
          },
          {
            "target": "Akitoi (pl. Akitoi / Akito)",
            "source": "Tree / Pole / Wood",
            "pronunciation": "ah-kee-toh-ee",
            "hint": "Feminine noun; tree, timber, wooden building pole. Also masculine 'ekitoi'.",
            "example": "Akitoi (pl. Akitoi / Akito) — Tree / Pole / Wood (Feminine noun; tree, timber, wooden building pole. Also masculine 'ekitoi'.)"
          },
          {
            "target": "Eloa (pl. Iloai)",
            "source": "Mvule tree",
            "pronunciation": "eh-loh-ah",
            "hint": "Valued indigenous hardwood timber tree (Chlorophora excelsa).",
            "example": "Eloa (pl. Iloai) — Mvule tree (Valued indigenous hardwood timber tree (Chlorophora excelsa).)"
          },
          {
            "target": "Anyait (pl. Anya)",
            "source": "Grass (blade)",
            "pronunciation": "ahn-yah-eet",
            "hint": "Singular: anyait (blade); plural: anya (grass, pasture).",
            "example": "Anyait (pl. Anya) — Grass (blade) (Singular: anyait (blade); plural: anya (grass, pasture).)"
          },
          {
            "target": "Eduan",
            "source": "Weeds",
            "pronunciation": "eh-dwahn",
            "hint": "Masculine collective singular; agricultural weeds.",
            "example": "Eduan — Weeds (Masculine collective singular; agricultural weeds.)"
          },
          {
            "target": "Esamai (pl. Isama)",
            "source": "Swamp / Marsh",
            "pronunciation": "eh-sah-mah-ee",
            "hint": "Masculine noun; plural: isama; marsh, river swamp.",
            "example": "Esamai (pl. Isama) — Swamp / Marsh (Masculine noun; plural: isama; marsh, river swamp.)"
          },
          {
            "target": "Atan (pl. Atanin)",
            "source": "Spring / Well",
            "pronunciation": "ah-tahn",
            "hint": "Feminine noun; plural: atanin; natural water spring or dug well.",
            "example": "Atan (pl. Atanin) — Spring / Well (Feminine noun; plural: atanin; natural water spring or dug well.)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok etunganan lo noi.",
            "source": "This person is very good."
          },
          {
            "target": "Elosete idwe osomero.",
            "source": "The children are going to school."
          },
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akoloŋ\" mean in English?",
            "correctAnswer": "Sun / Sunlight",
            "options": [
              "Moon / Month",
              "Rain / Cloud",
              "Earth / Land / World",
              "Sun / Sunlight"
            ],
            "hint": "Feminine singular noun; sunlight, daytime sun."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Elap (pl. Ilapio)\" mean in English?",
            "correctAnswer": "Moon / Month",
            "options": [
              "Rain / Cloud",
              "Earth / Land / World",
              "Moon / Month",
              "Sun / Sunlight"
            ],
            "hint": "Masculine noun; plural: ilapio; moon or calendar month."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Edou (pl. Idouon)\" mean in English?",
            "correctAnswer": "Rain / Cloud",
            "options": [
              "Earth / Land / World",
              "Rain / Cloud",
              "Sun / Sunlight",
              "Moon / Month"
            ],
            "hint": "Masculine noun; plural: idouon; rain cloud, rainstorm."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Rain / Cloud\" in Teso (Ateso)?",
            "correctAnswer": "Edou (pl. Idouon)",
            "options": [
              "Edou (pl. Idouon)",
              "Akoloŋ",
              "Elap (pl. Ilapio)",
              "Akwap (pl. Akwapin)"
            ],
            "hint": "eh-doh-oo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Earth / Land / World\" in Teso (Ateso)?",
            "correctAnswer": "Akwap (pl. Akwapin)",
            "options": [
              "Akoloŋ",
              "Elap (pl. Ilapio)",
              "Edou (pl. Idouon)",
              "Akwap (pl. Akwapin)"
            ],
            "hint": "ah-kwahp"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Stone / Rock\" in Teso (Ateso)?",
            "correctAnswer": "Amoru (pl. Amor)",
            "options": [
              "Elap (pl. Ilapio)",
              "Edou (pl. Idouon)",
              "Amoru (pl. Amor)",
              "Akoloŋ"
            ],
            "hint": "ah-moh-roo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Akoloŋ: Sun / Sunlight, Elap (pl. Ilapio): Moon / Month, Edou (pl. Idouon): Rain / Cloud, Akwap (pl. Akwapin): Earth / Land / World",
            "pairs": [
              {
                "left": "Akoloŋ",
                "right": "Sun / Sunlight"
              },
              {
                "left": "Elap (pl. Ilapio)",
                "right": "Moon / Month"
              },
              {
                "left": "Edou (pl. Idouon)",
                "right": "Rain / Cloud"
              },
              {
                "left": "Akwap (pl. Akwapin)",
                "right": "Earth / Land / World"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Sun / Sunlight\" in Teso (Ateso).",
            "correctAnswer": "Akoloŋ",
            "options": [
              "Akoloŋ",
              "Elap (pl. Ilapio)",
              "Edou (pl. Idouon)",
              "Akwap (pl. Akwapin)"
            ],
            "hint": "ah-koh-lohng"
          }
        ]
      },
      {
        "id": "teso-exp-nature-2",
        "title": "Nature & Environment (Part 2)",
        "icon": "Sun",
        "description": "Master Teso (Ateso) nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Aipany (pl. Aipanya)' (Hole / Pit), 'Ekuron' (Ashes), 'Aparit / Aparan (pl. Aparasia)' (Day), 'Paran' (Daytime).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Aipany (pl. Aipanya)",
            "source": "Hole / Pit",
            "pronunciation": "ah-ee-pahn-y",
            "hint": "Feminine noun; plural: aipanya; hole excavated in ground.",
            "example": "Aipany (pl. Aipanya) — Hole / Pit (Feminine noun; plural: aipanya; hole excavated in ground.)"
          },
          {
            "target": "Ekuron",
            "source": "Ashes",
            "pronunciation": "eh-koo-rohn",
            "hint": "Masculine singular noun; fireplace ashes.",
            "example": "Ekuron — Ashes (Masculine singular noun; fireplace ashes.)"
          },
          {
            "target": "Aparit / Aparan (pl. Aparasia)",
            "source": "Day",
            "pronunciation": "ah-pah-reet / ah-pah-rahn",
            "hint": "Feminine noun; plural: aparasia; 24-hour day.",
            "example": "Aparit / Aparan (pl. Aparasia) — Day (Feminine noun; plural: aparasia; 24-hour day.)"
          },
          {
            "target": "Paran",
            "source": "Daytime",
            "pronunciation": "pah-rahn",
            "hint": "Adverbial noun: by day, during daylight hours.",
            "example": "Paran — Daytime (Adverbial noun: by day, during daylight hours.)"
          },
          {
            "target": "Kware",
            "source": "Night / Nighttime",
            "pronunciation": "kwah-reh",
            "hint": "Adverbial noun: by night, darkness.",
            "example": "Kware — Night / Nighttime (Adverbial noun: by night, darkness.)"
          },
          {
            "target": "Tupuruc",
            "source": "Morning / Early",
            "pronunciation": "too-poo-rooch",
            "hint": "Adverb of time: in the morning, early at dawn.",
            "example": "Tupuruc — Morning / Early (Adverb of time: in the morning, early at dawn.)"
          },
          {
            "target": "Lokasuban / Edeke / Akuj",
            "source": "God / The Creator",
            "pronunciation": "loh-kah-soo-bahn / eh-deh-keh / ah-kooj",
            "hint": "'Lokasuban' = The Creator (from aisub - create); 'Edeke' / 'Akuj' = God / Supreme Divine Being.",
            "example": "Lokasuban / Edeke / Akuj — God / The Creator ('Lokasuban' = The Creator (from aisub - create); 'Edeke' / 'Akuj' = God / Supreme Divine Being.)"
          }
        ],
        "sentences": [
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          },
          {
            "target": "Ejai akipi toma amot.",
            "source": "There is water inside the pot."
          },
          {
            "target": "Anyami aberu akimuj.",
            "source": "The woman is eating food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aipany (pl. Aipanya)\" mean in English?",
            "correctAnswer": "Hole / Pit",
            "options": [
              "Ashes",
              "Day",
              "Daytime",
              "Hole / Pit"
            ],
            "hint": "Feminine noun; plural: aipanya; hole excavated in ground."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekuron\" mean in English?",
            "correctAnswer": "Ashes",
            "options": [
              "Day",
              "Daytime",
              "Ashes",
              "Hole / Pit"
            ],
            "hint": "Masculine singular noun; fireplace ashes."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aparit / Aparan (pl. Aparasia)\" mean in English?",
            "correctAnswer": "Day",
            "options": [
              "Daytime",
              "Day",
              "Hole / Pit",
              "Ashes"
            ],
            "hint": "Feminine noun; plural: aparasia; 24-hour day."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Day\" in Teso (Ateso)?",
            "correctAnswer": "Aparit / Aparan (pl. Aparasia)",
            "options": [
              "Aparit / Aparan (pl. Aparasia)",
              "Aipany (pl. Aipanya)",
              "Ekuron",
              "Paran"
            ],
            "hint": "ah-pah-reet / ah-pah-rahn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Daytime\" in Teso (Ateso)?",
            "correctAnswer": "Paran",
            "options": [
              "Aipany (pl. Aipanya)",
              "Ekuron",
              "Aparit / Aparan (pl. Aparasia)",
              "Paran"
            ],
            "hint": "pah-rahn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Night / Nighttime\" in Teso (Ateso)?",
            "correctAnswer": "Kware",
            "options": [
              "Ekuron",
              "Aparit / Aparan (pl. Aparasia)",
              "Kware",
              "Aipany (pl. Aipanya)"
            ],
            "hint": "kwah-reh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Aipany (pl. Aipanya): Hole / Pit, Ekuron: Ashes, Aparit / Aparan (pl. Aparasia): Day, Paran: Daytime",
            "pairs": [
              {
                "left": "Aipany (pl. Aipanya)",
                "right": "Hole / Pit"
              },
              {
                "left": "Ekuron",
                "right": "Ashes"
              },
              {
                "left": "Aparit / Aparan (pl. Aparasia)",
                "right": "Day"
              },
              {
                "left": "Paran",
                "right": "Daytime"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Hole / Pit\" in Teso (Ateso).",
            "correctAnswer": "Aipany (pl. Aipanya)",
            "options": [
              "Aipany (pl. Aipanya)",
              "Ekuron",
              "Aparit / Aparan (pl. Aparasia)",
              "Paran"
            ],
            "hint": "ah-ee-pahn-y"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-11-body",
    "title": "Unit 11: Body & Health",
    "description": "Comprehensive Teso (Ateso) curriculum for Body & Health, vetted from J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
    "icon": "Heart",
    "skills": [
      {
        "id": "teso-exp-body",
        "title": "Body & Health (Part 1)",
        "icon": "Heart",
        "description": "Master Teso (Ateso) body & health vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Body & Health, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akan (pl. Akanin)' (Hand / Arm), 'Akoŋu (pl. Akoŋ)' (Eye), 'Aokot' (Blood), 'Adam' (Brain / Intellect).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Akan (pl. Akanin)",
            "source": "Hand / Arm",
            "pronunciation": "ah-kahn",
            "hint": "Feminine noun; plural: akanin (hands/arms). Root of numeral 5.",
            "example": "Akan (pl. Akanin) — Hand / Arm (Feminine noun; plural: akanin (hands/arms). Root of numeral 5.)"
          },
          {
            "target": "Akoŋu (pl. Akoŋ)",
            "source": "Eye",
            "pronunciation": "ah-koh-ngoo",
            "hint": "Feminine noun; plural: akoŋ; 'akonyekec' = their eyes.",
            "example": "Akoŋu (pl. Akoŋ) — Eye (Feminine noun; plural: akoŋ; 'akonyekec' = their eyes.)"
          },
          {
            "target": "Aokot",
            "source": "Blood",
            "pronunciation": "ah-oh-koht",
            "hint": "Feminine plural noun; physical lifeblood.",
            "example": "Aokot — Blood (Feminine plural noun; physical lifeblood.)"
          },
          {
            "target": "Adam",
            "source": "Brain / Intellect",
            "pronunciation": "ah-dahm",
            "hint": "Feminine singular noun; anatomical brain, intelligence.",
            "example": "Adam — Brain / Intellect (Feminine singular noun; anatomical brain, intelligence.)"
          },
          {
            "target": "Emukule (pl. Imukulen)",
            "source": "Skin / Animal hide",
            "pronunciation": "eh-moo-koo-leh",
            "hint": "Masculine noun; plural: imukulen; animal hide or tanned leather.",
            "example": "Emukule (pl. Imukulen) — Skin / Animal hide (Masculine noun; plural: imukulen; animal hide or tanned leather.)"
          },
          {
            "target": "Akoit (pl. Akoi)",
            "source": "Bone",
            "pronunciation": "ah-koh-eet",
            "hint": "Feminine noun; plural: akoi; skeletal bone.",
            "example": "Akoit (pl. Akoi) — Bone (Feminine noun; plural: akoi; skeletal bone.)"
          },
          {
            "target": "Akwan (pl. Akwanis)",
            "source": "Body",
            "pronunciation": "ah-kwahn",
            "hint": "Feminine noun; plural: akwanis; physical human or animal body.",
            "example": "Akwan (pl. Akwanis) — Body (Feminine noun; plural: akwanis; physical human or animal body.)"
          },
          {
            "target": "Aŋale / Aŋaleu",
            "source": "Health / Wholeness",
            "pronunciation": "ah-ngah-leh",
            "hint": "Abstract noun of quality from 'aŋale' (to be healthy); 'aŋaleun' = recover.",
            "example": "Aŋale / Aŋaleu — Health / Wholeness (Abstract noun of quality from 'aŋale' (to be healthy); 'aŋaleun' = recover.)"
          },
          {
            "target": "Adeka (pl. Adekasinei)",
            "source": "Illness / Disease",
            "pronunciation": "ah-deh-kah",
            "hint": "Abstract noun from 'adeka' (to be sick); ailment or disease.",
            "example": "Adeka (pl. Adekasinei) — Illness / Disease (Abstract noun from 'adeka' (to be sick); ailment or disease.)"
          },
          {
            "target": "Ekia (pl. Ikee)",
            "source": "Medicine / Charm",
            "pronunciation": "eh-kee-ah",
            "hint": "Masculine noun; plural: ikee; healing medicine, herbal remedy.",
            "example": "Ekia (pl. Ikee) — Medicine / Charm (Masculine noun; plural: ikee; healing medicine, herbal remedy.)"
          },
          {
            "target": "Eteŋe",
            "source": "Hunger",
            "pronunciation": "eh-teh-ngeh",
            "hint": "Masculine singular noun; physical hunger or famine.",
            "example": "Eteŋe — Hunger (Masculine singular noun; physical hunger or famine.)"
          },
          {
            "target": "Akure",
            "source": "Thirst",
            "pronunciation": "ah-koo-reh",
            "hint": "Feminine singular noun; thirst for water.",
            "example": "Akure — Thirst (Feminine singular noun; thirst for water.)"
          },
          {
            "target": "Ileic",
            "source": "Shame / Embarrassment",
            "pronunciation": "ee-leh-eech",
            "hint": "Neuter plural noun; modesty, shame, embarrassment.",
            "example": "Ileic — Shame / Embarrassment (Neuter plural noun; modesty, shame, embarrassment.)"
          },
          {
            "target": "Ajo",
            "source": "Sleep",
            "pronunciation": "ah-joh",
            "hint": "Feminine plural noun; sleep, slumber.",
            "example": "Ajo — Sleep (Feminine plural noun; sleep, slumber.)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok etunganan lo noi.",
            "source": "This person is very good."
          },
          {
            "target": "Elosete idwe osomero.",
            "source": "The children are going to school."
          },
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akan (pl. Akanin)\" mean in English?",
            "correctAnswer": "Hand / Arm",
            "options": [
              "Eye",
              "Blood",
              "Brain / Intellect",
              "Hand / Arm"
            ],
            "hint": "Feminine noun; plural: akanin (hands/arms). Root of numeral 5."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akoŋu (pl. Akoŋ)\" mean in English?",
            "correctAnswer": "Eye",
            "options": [
              "Blood",
              "Brain / Intellect",
              "Eye",
              "Hand / Arm"
            ],
            "hint": "Feminine noun; plural: akoŋ; 'akonyekec' = their eyes."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aokot\" mean in English?",
            "correctAnswer": "Blood",
            "options": [
              "Brain / Intellect",
              "Blood",
              "Hand / Arm",
              "Eye"
            ],
            "hint": "Feminine plural noun; physical lifeblood."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Blood\" in Teso (Ateso)?",
            "correctAnswer": "Aokot",
            "options": [
              "Aokot",
              "Akan (pl. Akanin)",
              "Akoŋu (pl. Akoŋ)",
              "Adam"
            ],
            "hint": "ah-oh-koht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Brain / Intellect\" in Teso (Ateso)?",
            "correctAnswer": "Adam",
            "options": [
              "Akan (pl. Akanin)",
              "Akoŋu (pl. Akoŋ)",
              "Aokot",
              "Adam"
            ],
            "hint": "ah-dahm"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Skin / Animal hide\" in Teso (Ateso)?",
            "correctAnswer": "Emukule (pl. Imukulen)",
            "options": [
              "Akoŋu (pl. Akoŋ)",
              "Aokot",
              "Emukule (pl. Imukulen)",
              "Akan (pl. Akanin)"
            ],
            "hint": "eh-moo-koo-leh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Akan (pl. Akanin): Hand / Arm, Akoŋu (pl. Akoŋ): Eye, Aokot: Blood, Adam: Brain / Intellect",
            "pairs": [
              {
                "left": "Akan (pl. Akanin)",
                "right": "Hand / Arm"
              },
              {
                "left": "Akoŋu (pl. Akoŋ)",
                "right": "Eye"
              },
              {
                "left": "Aokot",
                "right": "Blood"
              },
              {
                "left": "Adam",
                "right": "Brain / Intellect"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Hand / Arm\" in Teso (Ateso).",
            "correctAnswer": "Akan (pl. Akanin)",
            "options": [
              "Akan (pl. Akanin)",
              "Akoŋu (pl. Akoŋ)",
              "Aokot",
              "Adam"
            ],
            "hint": "ah-kahn"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-12-food",
    "title": "Unit 12: Food & Drink",
    "description": "Comprehensive Teso (Ateso) curriculum for Food & Drink, vetted from J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
    "icon": "Utensils",
    "skills": [
      {
        "id": "teso-exp-food",
        "title": "Food & Drink",
        "icon": "Utensils",
        "description": "Master Teso (Ateso) food & drink vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Food & Drink, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akimuj / Inyamat' (Food (edibles)), 'Akiriŋ' (Meat), 'Akile' (Milk), 'Ajon' (Traditional Beer).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Akimuj / Inyamat",
            "source": "Food (edibles)",
            "pronunciation": "ah-kee-mooj / ee-nyah-maht",
            "hint": "'Akimuj' = food (verbal noun); 'Inyamat' = plural only, food / victuals from 'ainyam' (to eat).",
            "example": "Akimuj / Inyamat — Food (edibles) ('Akimuj' = food (verbal noun); 'Inyamat' = plural only, food / victuals from 'ainyam' (to eat).)"
          },
          {
            "target": "Akiriŋ",
            "source": "Meat",
            "pronunciation": "ah-kee-reeng",
            "hint": "Feminine singular noun; meat, flesh.",
            "example": "Akiriŋ — Meat (Feminine singular noun; meat, flesh.)"
          },
          {
            "target": "Akile",
            "source": "Milk",
            "pronunciation": "ah-kee-leh",
            "hint": "Feminine plural noun; cow's milk.",
            "example": "Akile — Milk (Feminine plural noun; cow's milk.)"
          },
          {
            "target": "Ajon",
            "source": "Traditional Beer",
            "pronunciation": "ah-john",
            "hint": "Feminine plural noun; traditional millet beer, drank socially through long reed tubes.",
            "example": "Ajon — Traditional Beer (Feminine plural noun; traditional millet beer, drank socially through long reed tubes.)"
          },
          {
            "target": "Akimait (pl. Akima)",
            "source": "Finger Millet",
            "pronunciation": "ah-kee-mah-eet",
            "hint": "Singular: akimait (stalk); plural collective: akima (finger millet grain, staple food).",
            "example": "Akimait (pl. Akima) — Finger Millet (Singular: akimait (stalk); plural collective: akima (finger millet grain, staple food).)"
          },
          {
            "target": "Emaido",
            "source": "Groundnuts / Peanuts",
            "pronunciation": "eh-mah-ee-doh",
            "hint": "Masculine collective noun; groundnuts.",
            "example": "Emaido — Groundnuts / Peanuts (Masculine collective noun; groundnuts.)"
          },
          {
            "target": "Amunyu",
            "source": "Salt",
            "pronunciation": "ah-moo-nyoo",
            "hint": "Feminine noun; table salt or cattle salt-lick.",
            "example": "Amunyu — Salt (Feminine noun; table salt or cattle salt-lick.)"
          },
          {
            "target": "Akinyet",
            "source": "Fat / Oil / Grease",
            "pronunciation": "ah-kee-nyeht",
            "hint": "Feminine singular noun; butter fat, animal grease, cooking oil, paraffin.",
            "example": "Akinyet — Fat / Oil / Grease (Feminine singular noun; butter fat, animal grease, cooking oil, paraffin.)"
          },
          {
            "target": "Ecai",
            "source": "Tea",
            "pronunciation": "eh-chah-ee",
            "hint": "Masculine noun; borrowed beverage.",
            "example": "Ecai — Tea (Masculine noun; borrowed beverage.)"
          },
          {
            "target": "Ekawa",
            "source": "Coffee",
            "pronunciation": "eh-kah-wah",
            "hint": "Masculine noun; borrowed beverage.",
            "example": "Ekawa — Coffee (Masculine noun; borrowed beverage.)"
          },
          {
            "target": "Enimu (pl. Inimun)",
            "source": "Lemon / Citrus",
            "pronunciation": "eh-nee-moo",
            "hint": "Masculine noun; lemon or citrus fruit.",
            "example": "Enimu (pl. Inimun) — Lemon / Citrus (Masculine noun; lemon or citrus fruit.)"
          },
          {
            "target": "Akipi nuimatat",
            "source": "Drinking water",
            "pronunciation": "ah-kee-pee noo-ee-mah-taht",
            "hint": "Potable water; literally 'water to be drunk', from 'aimat' (to drink).",
            "example": "Akipi nuimatat — Drinking water (Potable water; literally 'water to be drunk', from 'aimat' (to drink).)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok etunganan lo noi.",
            "source": "This person is very good."
          },
          {
            "target": "Elosete idwe osomero.",
            "source": "The children are going to school."
          },
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akimuj / Inyamat\" mean in English?",
            "correctAnswer": "Food (edibles)",
            "options": [
              "Meat",
              "Milk",
              "Traditional Beer",
              "Food (edibles)"
            ],
            "hint": "'Akimuj' = food (verbal noun); 'Inyamat' = plural only, food / victuals from 'ainyam' (to eat)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akiriŋ\" mean in English?",
            "correctAnswer": "Meat",
            "options": [
              "Milk",
              "Traditional Beer",
              "Meat",
              "Food (edibles)"
            ],
            "hint": "Feminine singular noun; meat, flesh."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akile\" mean in English?",
            "correctAnswer": "Milk",
            "options": [
              "Traditional Beer",
              "Milk",
              "Food (edibles)",
              "Meat"
            ],
            "hint": "Feminine plural noun; cow's milk."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Milk\" in Teso (Ateso)?",
            "correctAnswer": "Akile",
            "options": [
              "Akile",
              "Akimuj / Inyamat",
              "Akiriŋ",
              "Ajon"
            ],
            "hint": "ah-kee-leh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Traditional Beer\" in Teso (Ateso)?",
            "correctAnswer": "Ajon",
            "options": [
              "Akimuj / Inyamat",
              "Akiriŋ",
              "Akile",
              "Ajon"
            ],
            "hint": "ah-john"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Finger Millet\" in Teso (Ateso)?",
            "correctAnswer": "Akimait (pl. Akima)",
            "options": [
              "Akiriŋ",
              "Akile",
              "Akimait (pl. Akima)",
              "Akimuj / Inyamat"
            ],
            "hint": "ah-kee-mah-eet"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Akimuj / Inyamat: Food (edibles), Akiriŋ: Meat, Akile: Milk, Ajon: Traditional Beer",
            "pairs": [
              {
                "left": "Akimuj / Inyamat",
                "right": "Food (edibles)"
              },
              {
                "left": "Akiriŋ",
                "right": "Meat"
              },
              {
                "left": "Akile",
                "right": "Milk"
              },
              {
                "left": "Ajon",
                "right": "Traditional Beer"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Food (edibles)\" in Teso (Ateso).",
            "correctAnswer": "Akimuj / Inyamat",
            "options": [
              "Akimuj / Inyamat",
              "Akiriŋ",
              "Akile",
              "Ajon"
            ],
            "hint": "ah-kee-mooj / ee-nyah-maht"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-13-home",
    "title": "Unit 13: Home & Daily Life",
    "description": "Comprehensive Teso (Ateso) curriculum for Home & Daily Life, vetted from J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
    "icon": "Home",
    "skills": [
      {
        "id": "teso-exp-home",
        "title": "Home & Daily Life (Part 1)",
        "icon": "Home",
        "description": "Master Teso (Ateso) home & daily life vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Home & Daily Life, pay special attention to pronunciation and morphological prefixes/suffixes: 'Etogo (pl. Itogoi)' (House / Building), 'Ore / Ere (pl. Iria)' (Home / Homestead / Village), 'Aujo (pl. Aujoi)' (Cattle kraal / Enclosure), 'Emanikor (pl. Imanikoria)' (Garden plot / Farm).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Etogo (pl. Itogoi)",
            "source": "House / Building",
            "pronunciation": "eh-toh-goh",
            "hint": "Masculine noun; plural: itogoi; residential dwelling house.",
            "example": "Etogo (pl. Itogoi) — House / Building (Masculine noun; plural: itogoi; residential dwelling house.)"
          },
          {
            "target": "Ore / Ere (pl. Iria)",
            "source": "Home / Homestead / Village",
            "pronunciation": "oh-reh / eh-reh",
            "hint": "'ore' = at home (locative adverb); 'ere' = homestead or village compound.",
            "example": "Ore / Ere (pl. Iria) — Home / Homestead / Village ('ore' = at home (locative adverb); 'ere' = homestead or village compound.)"
          },
          {
            "target": "Aujo (pl. Aujoi)",
            "source": "Cattle kraal / Enclosure",
            "pronunciation": "ah-oo-joh",
            "hint": "Feminine noun; plural: aujoi; secure thorn corral for livestock.",
            "example": "Aujo (pl. Aujoi) — Cattle kraal / Enclosure (Feminine noun; plural: aujoi; secure thorn corral for livestock.)"
          },
          {
            "target": "Emanikor (pl. Imanikoria)",
            "source": "Garden plot / Farm",
            "pronunciation": "eh-mah-nee-kohr",
            "hint": "Masculine noun; plural: imanikoria; agricultural garden plot.",
            "example": "Emanikor (pl. Imanikoria) — Garden plot / Farm (Masculine noun; plural: imanikoria; agricultural garden plot.)"
          },
          {
            "target": "Ekitada (pl. Ikitadan)",
            "source": "Bed",
            "pronunciation": "eh-kee-tah-dah",
            "hint": "Masculine noun; plural: ikitadan; sleeping bed.",
            "example": "Ekitada (pl. Ikitadan) — Bed (Masculine noun; plural: ikitadan; sleeping bed.)"
          },
          {
            "target": "Emesa (pl. Imesan)",
            "source": "Table",
            "pronunciation": "eh-meh-sah",
            "hint": "Masculine noun; plural: imesan; wooden furniture table (borrowed).",
            "example": "Emesa (pl. Imesan) — Table (Masculine noun; plural: imesan; wooden furniture table (borrowed).)"
          },
          {
            "target": "Ekek (pl. Ikekia)",
            "source": "Door / Gateway",
            "pronunciation": "eh-kehk",
            "hint": "Masculine noun; plural: ikekia; doorway, entryway, compound gate.",
            "example": "Ekek (pl. Ikekia) — Door / Gateway (Masculine noun; plural: ikekia; doorway, entryway, compound gate.)"
          },
          {
            "target": "Ekileŋ (pl. Ikileŋa)",
            "source": "Knife",
            "pronunciation": "eh-kee-lehng",
            "hint": "Masculine noun; plural: ikileŋa; cutting knife.",
            "example": "Ekileŋ (pl. Ikileŋa) — Knife (Masculine noun; plural: ikileŋa; cutting knife.)"
          },
          {
            "target": "Ekijiko (pl. Ikijikoi)",
            "source": "Spoon",
            "pronunciation": "eh-kee-jee-koh",
            "hint": "Masculine noun; eating spoon utensil.",
            "example": "Ekijiko (pl. Ikijikoi) — Spoon (Masculine noun; eating spoon utensil.)"
          },
          {
            "target": "Asanit (pl. Asanin)",
            "source": "Plate / Dish",
            "pronunciation": "ah-sah-neet",
            "hint": "Feminine noun; plural: asanin; eating plate or dish.",
            "example": "Asanit (pl. Asanin) — Plate / Dish (Feminine noun; plural: asanin; eating plate or dish.)"
          },
          {
            "target": "Ecupa (pl. Icupai)",
            "source": "Bottle",
            "pronunciation": "eh-choo-pah",
            "hint": "Masculine noun; plural: icupai; glass or ceramic bottle.",
            "example": "Ecupa (pl. Icupai) — Bottle (Masculine noun; plural: icupai; glass or ceramic bottle.)"
          },
          {
            "target": "Amukat (pl. Amuk)",
            "source": "Shoe / Sandal",
            "pronunciation": "ah-moo-kaht",
            "hint": "Feminine noun; plural: amuk; traditional hide sandal or modern shoe.",
            "example": "Amukat (pl. Amuk) — Shoe / Sandal (Feminine noun; plural: amuk; traditional hide sandal or modern shoe.)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok etunganan lo noi.",
            "source": "This person is very good."
          },
          {
            "target": "Elosete idwe osomero.",
            "source": "The children are going to school."
          },
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Etogo (pl. Itogoi)\" mean in English?",
            "correctAnswer": "House / Building",
            "options": [
              "Home / Homestead / Village",
              "Cattle kraal / Enclosure",
              "Garden plot / Farm",
              "House / Building"
            ],
            "hint": "Masculine noun; plural: itogoi; residential dwelling house."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ore / Ere (pl. Iria)\" mean in English?",
            "correctAnswer": "Home / Homestead / Village",
            "options": [
              "Cattle kraal / Enclosure",
              "Garden plot / Farm",
              "Home / Homestead / Village",
              "House / Building"
            ],
            "hint": "'ore' = at home (locative adverb); 'ere' = homestead or village compound."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aujo (pl. Aujoi)\" mean in English?",
            "correctAnswer": "Cattle kraal / Enclosure",
            "options": [
              "Garden plot / Farm",
              "Cattle kraal / Enclosure",
              "House / Building",
              "Home / Homestead / Village"
            ],
            "hint": "Feminine noun; plural: aujoi; secure thorn corral for livestock."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cattle kraal / Enclosure\" in Teso (Ateso)?",
            "correctAnswer": "Aujo (pl. Aujoi)",
            "options": [
              "Aujo (pl. Aujoi)",
              "Etogo (pl. Itogoi)",
              "Ore / Ere (pl. Iria)",
              "Emanikor (pl. Imanikoria)"
            ],
            "hint": "ah-oo-joh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Garden plot / Farm\" in Teso (Ateso)?",
            "correctAnswer": "Emanikor (pl. Imanikoria)",
            "options": [
              "Etogo (pl. Itogoi)",
              "Ore / Ere (pl. Iria)",
              "Aujo (pl. Aujoi)",
              "Emanikor (pl. Imanikoria)"
            ],
            "hint": "eh-mah-nee-kohr"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bed\" in Teso (Ateso)?",
            "correctAnswer": "Ekitada (pl. Ikitadan)",
            "options": [
              "Ore / Ere (pl. Iria)",
              "Aujo (pl. Aujoi)",
              "Ekitada (pl. Ikitadan)",
              "Etogo (pl. Itogoi)"
            ],
            "hint": "eh-kee-tah-dah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Etogo (pl. Itogoi): House / Building, Ore / Ere (pl. Iria): Home / Homestead / Village, Aujo (pl. Aujoi): Cattle kraal / Enclosure, Emanikor (pl. Imanikoria): Garden plot / Farm",
            "pairs": [
              {
                "left": "Etogo (pl. Itogoi)",
                "right": "House / Building"
              },
              {
                "left": "Ore / Ere (pl. Iria)",
                "right": "Home / Homestead / Village"
              },
              {
                "left": "Aujo (pl. Aujoi)",
                "right": "Cattle kraal / Enclosure"
              },
              {
                "left": "Emanikor (pl. Imanikoria)",
                "right": "Garden plot / Farm"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"House / Building\" in Teso (Ateso).",
            "correctAnswer": "Etogo (pl. Itogoi)",
            "options": [
              "Etogo (pl. Itogoi)",
              "Ore / Ere (pl. Iria)",
              "Aujo (pl. Aujoi)",
              "Emanikor (pl. Imanikoria)"
            ],
            "hint": "eh-toh-goh"
          }
        ]
      },
      {
        "id": "teso-exp-home-2",
        "title": "Home & Daily Life (Part 2)",
        "icon": "Home",
        "description": "Master Teso (Ateso) home & daily life vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Home & Daily Life, pay special attention to pronunciation and morphological prefixes/suffixes: 'Egoye (pl. Igoyen)' (Clothing / Cloth), 'Asabuni' (Soap), 'Elacet (pl. Ilaceta)' (Key), 'Arapetait (pl. Arapeta)' (Lid / Cover).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Egoye (pl. Igoyen)",
            "source": "Clothing / Cloth",
            "pronunciation": "eh-goh-yeh",
            "hint": "Masculine noun; plural: igoyen; cloth, attire, garment.",
            "example": "Egoye (pl. Igoyen) — Clothing / Cloth (Masculine noun; plural: igoyen; cloth, attire, garment.)"
          },
          {
            "target": "Asabuni",
            "source": "Soap",
            "pronunciation": "ah-sah-boo-nee",
            "hint": "Feminine singular noun; laundry or bathing soap.",
            "example": "Asabuni — Soap (Feminine singular noun; laundry or bathing soap.)"
          },
          {
            "target": "Elacet (pl. Ilaceta)",
            "source": "Key",
            "pronunciation": "eh-lah-cheht",
            "hint": "Masculine instrument noun from 'ailac' (to loosen/untie); plural: ilaceta.",
            "example": "Elacet (pl. Ilaceta) — Key (Masculine instrument noun from 'ailac' (to loosen/untie); plural: ilaceta.)"
          },
          {
            "target": "Arapetait (pl. Arapeta)",
            "source": "Lid / Cover",
            "pronunciation": "ah-rah-peh-tah-eet",
            "hint": "Feminine instrument noun; plural: arapeta; covering lid for basket or pot.",
            "example": "Arapetait (pl. Arapeta) — Lid / Cover (Feminine instrument noun; plural: arapeta; covering lid for basket or pot.)"
          },
          {
            "target": "Ebela (pl. Ibelai)",
            "source": "Walking stick / Cane",
            "pronunciation": "eh-beh-lah",
            "hint": "Masculine noun; plural: ibelai; herder's cane, wooden staff.",
            "example": "Ebela (pl. Ibelai) — Walking stick / Cane (Masculine noun; plural: ibelai; herder's cane, wooden staff.)"
          },
          {
            "target": "Ekitabo (pl. Ikitabon)",
            "source": "Book",
            "pronunciation": "eh-kee-tah-boh",
            "hint": "Masculine noun; plural: ikitabon; reading book.",
            "example": "Ekitabo (pl. Ikitabon) — Book (Masculine noun; plural: ikitabon; reading book.)"
          },
          {
            "target": "Ekalamu (pl. Ikalamun)",
            "source": "Pen / Pencil",
            "pronunciation": "eh-kah-lah-moo",
            "hint": "Masculine noun; plural: ikalamun; writing implement.",
            "example": "Ekalamu (pl. Ikalamun) — Pen / Pencil (Masculine noun; plural: ikalamun; writing implement.)"
          },
          {
            "target": "Abalua / Ebalua (pl. Abaluan)",
            "source": "Letter / Epistle",
            "pronunciation": "ah-bah-lwah",
            "hint": "Feminine or masculine noun: written letter, mail.",
            "example": "Abalua / Ebalua (pl. Abaluan) — Letter / Epistle (Feminine or masculine noun: written letter, mail.)"
          },
          {
            "target": "Esirigi (pl. Isirigin)",
            "source": "Money / Shilling",
            "pronunciation": "eh-see-ree-gee",
            "hint": "Masculine noun; plural: isirigin; coin, shilling currency.",
            "example": "Esirigi (pl. Isirigin) — Money / Shilling (Masculine noun; plural: isirigin; coin, shilling currency.)"
          },
          {
            "target": "Eropit (pl. Iropito)",
            "source": "Wage / Salary",
            "pronunciation": "eh-roh-peet",
            "hint": "Masculine noun; plural: iropito; pay or wage for labor.",
            "example": "Eropit (pl. Iropito) — Wage / Salary (Masculine noun; plural: iropito; pay or wage for labor.)"
          },
          {
            "target": "Aswam (pl. Aswamisinei)",
            "source": "Work / Labor / Task",
            "pronunciation": "ah-swahm",
            "hint": "Feminine noun; plural: aswamisinei; daily work, duties.",
            "example": "Aswam (pl. Aswamisinei) — Work / Labor / Task (Feminine noun; plural: aswamisinei; daily work, duties.)"
          },
          {
            "target": "Esomero (pl. Isomeroi)",
            "source": "School",
            "pronunciation": "eh-soh-meh-roh",
            "hint": "Masculine noun; plural: isomeroi; schoolhouse.",
            "example": "Esomero (pl. Isomeroi) — School (Masculine noun; plural: isomeroi; schoolhouse.)"
          }
        ],
        "sentences": [
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          },
          {
            "target": "Ejai akipi toma amot.",
            "source": "There is water inside the pot."
          },
          {
            "target": "Anyami aberu akimuj.",
            "source": "The woman is eating food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Egoye (pl. Igoyen)\" mean in English?",
            "correctAnswer": "Clothing / Cloth",
            "options": [
              "Soap",
              "Key",
              "Lid / Cover",
              "Clothing / Cloth"
            ],
            "hint": "Masculine noun; plural: igoyen; cloth, attire, garment."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Asabuni\" mean in English?",
            "correctAnswer": "Soap",
            "options": [
              "Key",
              "Lid / Cover",
              "Soap",
              "Clothing / Cloth"
            ],
            "hint": "Feminine singular noun; laundry or bathing soap."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Elacet (pl. Ilaceta)\" mean in English?",
            "correctAnswer": "Key",
            "options": [
              "Lid / Cover",
              "Key",
              "Clothing / Cloth",
              "Soap"
            ],
            "hint": "Masculine instrument noun from 'ailac' (to loosen/untie); plural: ilaceta."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Key\" in Teso (Ateso)?",
            "correctAnswer": "Elacet (pl. Ilaceta)",
            "options": [
              "Elacet (pl. Ilaceta)",
              "Egoye (pl. Igoyen)",
              "Asabuni",
              "Arapetait (pl. Arapeta)"
            ],
            "hint": "eh-lah-cheht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lid / Cover\" in Teso (Ateso)?",
            "correctAnswer": "Arapetait (pl. Arapeta)",
            "options": [
              "Egoye (pl. Igoyen)",
              "Asabuni",
              "Elacet (pl. Ilaceta)",
              "Arapetait (pl. Arapeta)"
            ],
            "hint": "ah-rah-peh-tah-eet"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Walking stick / Cane\" in Teso (Ateso)?",
            "correctAnswer": "Ebela (pl. Ibelai)",
            "options": [
              "Asabuni",
              "Elacet (pl. Ilaceta)",
              "Ebela (pl. Ibelai)",
              "Egoye (pl. Igoyen)"
            ],
            "hint": "eh-beh-lah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Egoye (pl. Igoyen): Clothing / Cloth, Asabuni: Soap, Elacet (pl. Ilaceta): Key, Arapetait (pl. Arapeta): Lid / Cover",
            "pairs": [
              {
                "left": "Egoye (pl. Igoyen)",
                "right": "Clothing / Cloth"
              },
              {
                "left": "Asabuni",
                "right": "Soap"
              },
              {
                "left": "Elacet (pl. Ilaceta)",
                "right": "Key"
              },
              {
                "left": "Arapetait (pl. Arapeta)",
                "right": "Lid / Cover"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Clothing / Cloth\" in Teso (Ateso).",
            "correctAnswer": "Egoye (pl. Igoyen)",
            "options": [
              "Egoye (pl. Igoyen)",
              "Asabuni",
              "Elacet (pl. Ilaceta)",
              "Arapetait (pl. Arapeta)"
            ],
            "hint": "eh-goh-yeh"
          }
        ]
      }
    ]
  },
  {
    "id": "teso-unit-14-verbs",
    "title": "Unit 14: Common Verbs",
    "description": "Comprehensive Teso (Ateso) curriculum for Common Verbs, vetted from J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
    "icon": "Zap",
    "skills": [
      {
        "id": "teso-exp-verbs",
        "title": "Common Verbs (Part 1)",
        "icon": "Zap",
        "description": "Master Teso (Ateso) common verbs vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Common Verbs, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ainyam / Akinyam' (To eat), 'Abunere' (To come), 'Aanyun' (To see), 'Aipup' (To hear / listen).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Ainyam / Akinyam",
            "source": "To eat",
            "pronunciation": "ah-ee-nyahm",
            "hint": "ko-class verb; 1st person present: anyami eoŋ; imperative: konyam!",
            "example": "Ainyam / Akinyam — To eat (ko-class verb; 1st person present: anyami eoŋ; imperative: konyam!)"
          },
          {
            "target": "Abunere",
            "source": "To come",
            "pronunciation": "ah-boo-neh-reh",
            "hint": "ko-class irregular verb; 1st pers: abuni; imperative singular: kobu!, plural: kopotu!",
            "example": "Abunere — To come (ko-class irregular verb; 1st pers: abuni; imperative singular: kobu!, plural: kopotu!)"
          },
          {
            "target": "Aanyun",
            "source": "To see",
            "pronunciation": "ah-ahn-yoon",
            "hint": "ko-class verb; 1st person: aanyuni eoŋ; imperative: koanyu!",
            "example": "Aanyun — To see (ko-class verb; 1st person: aanyuni eoŋ; imperative: koanyu!)"
          },
          {
            "target": "Aipup",
            "source": "To hear / listen",
            "pronunciation": "ah-ee-poop",
            "hint": "ko-class verb; 1st person: apupi eoŋ; imperative: kopup!",
            "example": "Aipup — To hear / listen (ko-class verb; 1st person: apupi eoŋ; imperative: kopup!)"
          },
          {
            "target": "Ailip",
            "source": "To pray / ask / beg",
            "pronunciation": "ah-ee-leep",
            "hint": "ki-class verb; 1st person: elipi eoŋ; imperative: kilip!",
            "example": "Ailip — To pray / ask / beg (ki-class verb; 1st person: elipi eoŋ; imperative: kilip!)"
          },
          {
            "target": "Einer",
            "source": "To speak",
            "pronunciation": "eh-ee-nehr",
            "hint": "ki-class continuous verb; 1st person: enera eoŋ; imperative: kiner!",
            "example": "Einer — To speak (ki-class continuous verb; 1st person: enera eoŋ; imperative: kiner!)"
          },
          {
            "target": "Aiduk",
            "source": "To build",
            "pronunciation": "ah-ee-dook",
            "hint": "ko-class model verb; 1st person: aduki eoŋ; imperative: koduk!",
            "example": "Aiduk — To build (ko-class model verb; 1st person: aduki eoŋ; imperative: koduk!)"
          },
          {
            "target": "Aswam / Aiswama",
            "source": "To work",
            "pronunciation": "ah-swahm",
            "hint": "ki-class irregular verb; 1st person: eswamai eoŋ; imperative: kiswama!",
            "example": "Aswam / Aiswama — To work (ki-class irregular verb; 1st person: eswamai eoŋ; imperative: kiswama!)"
          },
          {
            "target": "Aiŋarakin",
            "source": "To help",
            "pronunciation": "ah-ee-ngah-rah-keen",
            "hint": "ki-class action-for verb; 1st pers: eŋarakini; imperative: kiŋarakik!",
            "example": "Aiŋarakin — To help (ki-class action-for verb; 1st pers: eŋarakini; imperative: kiŋarakik!)"
          },
          {
            "target": "Akot",
            "source": "To want / desire",
            "pronunciation": "ah-koht",
            "hint": "ko-class continuous verb; 1st person: akoto eoŋ; 3rd person: ekoto.",
            "example": "Akot — To want / desire (ko-class continuous verb; 1st person: akoto eoŋ; 3rd person: ekoto.)"
          },
          {
            "target": "Amin",
            "source": "To love",
            "pronunciation": "ah-meen",
            "hint": "ko-class continuous verb; 1st person: amina eoŋ; imperative: komina!",
            "example": "Amin — To love (ko-class continuous verb; 1st person: amina eoŋ; imperative: komina!)"
          },
          {
            "target": "Akor",
            "source": "To cultivate / farm",
            "pronunciation": "ah-kohr",
            "hint": "ko-class irregular verb; 1st person: akoriei eoŋ; imperative: kokor!",
            "example": "Akor — To cultivate / farm (ko-class irregular verb; 1st person: akoriei eoŋ; imperative: kokor!)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok etunganan lo noi.",
            "source": "This person is very good."
          },
          {
            "target": "Elosete idwe osomero.",
            "source": "The children are going to school."
          },
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ainyam / Akinyam\" mean in English?",
            "correctAnswer": "To eat",
            "options": [
              "To come",
              "To see",
              "To hear / listen",
              "To eat"
            ],
            "hint": "ko-class verb; 1st person present: anyami eoŋ; imperative: konyam!"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Abunere\" mean in English?",
            "correctAnswer": "To come",
            "options": [
              "To see",
              "To hear / listen",
              "To come",
              "To eat"
            ],
            "hint": "ko-class irregular verb; 1st pers: abuni; imperative singular: kobu!, plural: kopotu!"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aanyun\" mean in English?",
            "correctAnswer": "To see",
            "options": [
              "To hear / listen",
              "To see",
              "To eat",
              "To come"
            ],
            "hint": "ko-class verb; 1st person: aanyuni eoŋ; imperative: koanyu!"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To see\" in Teso (Ateso)?",
            "correctAnswer": "Aanyun",
            "options": [
              "Aanyun",
              "Ainyam / Akinyam",
              "Abunere",
              "Aipup"
            ],
            "hint": "ah-ahn-yoon"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To hear / listen\" in Teso (Ateso)?",
            "correctAnswer": "Aipup",
            "options": [
              "Ainyam / Akinyam",
              "Abunere",
              "Aanyun",
              "Aipup"
            ],
            "hint": "ah-ee-poop"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To pray / ask / beg\" in Teso (Ateso)?",
            "correctAnswer": "Ailip",
            "options": [
              "Abunere",
              "Aanyun",
              "Ailip",
              "Ainyam / Akinyam"
            ],
            "hint": "ah-ee-leep"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Ainyam / Akinyam: To eat, Abunere: To come, Aanyun: To see, Aipup: To hear / listen",
            "pairs": [
              {
                "left": "Ainyam / Akinyam",
                "right": "To eat"
              },
              {
                "left": "Abunere",
                "right": "To come"
              },
              {
                "left": "Aanyun",
                "right": "To see"
              },
              {
                "left": "Aipup",
                "right": "To hear / listen"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To eat\" in Teso (Ateso).",
            "correctAnswer": "Ainyam / Akinyam",
            "options": [
              "Ainyam / Akinyam",
              "Abunere",
              "Aanyun",
              "Aipup"
            ],
            "hint": "ah-ee-nyahm"
          }
        ]
      },
      {
        "id": "teso-exp-verbs-2",
        "title": "Common Verbs (Part 2)",
        "icon": "Zap",
        "description": "Master Teso (Ateso) common verbs vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Common Verbs, pay special attention to pronunciation and morphological prefixes/suffixes: 'Agwel' (To buy), 'Agwelar' (To sell), 'Ayaun' (To bring), 'Aibwok' (To carry).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Agwel",
            "source": "To buy",
            "pronunciation": "ah-gwehl",
            "hint": "ko-class verb; 1st person: agweli eoŋ; imperative: kogwel!",
            "example": "Agwel — To buy (ko-class verb; 1st person: agweli eoŋ; imperative: kogwel!)"
          },
          {
            "target": "Agwelar",
            "source": "To sell",
            "pronunciation": "ah-gweh-lahr",
            "hint": "ko-class motion-away verb from agwel; imperative: kogwela!",
            "example": "Agwelar — To sell (ko-class motion-away verb from agwel; imperative: kogwela!)"
          },
          {
            "target": "Ayaun",
            "source": "To bring",
            "pronunciation": "ah-yah-oon",
            "hint": "ko-class motion-towards verb; imperative: koyau!",
            "example": "Ayaun — To bring (ko-class motion-towards verb; imperative: koyau!)"
          },
          {
            "target": "Aibwok",
            "source": "To carry",
            "pronunciation": "ah-ee-bwohk",
            "hint": "ki-class verb; 1st person: ebwoki eoŋ; imperative: kibwok!",
            "example": "Aibwok — To carry (ki-class verb; 1st person: ebwoki eoŋ; imperative: kibwok!)"
          },
          {
            "target": "Ailot",
            "source": "To wash (clothes)",
            "pronunciation": "ah-ee-loht",
            "hint": "ki-class verb; 1st person: eloti eoŋ; imperative: kilot!",
            "example": "Ailot — To wash (clothes) (ki-class verb; 1st person: eloti eoŋ; imperative: kilot!)"
          },
          {
            "target": "Ailoŋ",
            "source": "To bathe (oneself)",
            "pronunciation": "ah-ee-lohng",
            "hint": "ki-class reflexive verb; 1st person: eloŋi; imperative: kiloŋ!",
            "example": "Ailoŋ — To bathe (oneself) (ki-class reflexive verb; 1st person: eloŋi; imperative: kiloŋ!)"
          },
          {
            "target": "Aijen",
            "source": "To know",
            "pronunciation": "ah-ee-jehn",
            "hint": "ko-class verb; 1st person: ajeni eoŋ; negative: mam ajeni.",
            "example": "Aijen — To know (ko-class verb; 1st person: ajeni eoŋ; negative: mam ajeni.)"
          },
          {
            "target": "Aiwadik",
            "source": "To write",
            "pronunciation": "ah-ee-wah-deek",
            "hint": "ki-class verb; 1st person: ewadikai eoŋ; imperative: kiwadik!",
            "example": "Aiwadik — To write (ki-class verb; 1st person: ewadikai eoŋ; imperative: kiwadik!)"
          },
          {
            "target": "Aisiom",
            "source": "To read / study",
            "pronunciation": "ah-ee-see-ohm",
            "hint": "ko-class verb; 1st person: asiomi eoŋ; imperative: kosiom!",
            "example": "Aisiom — To read / study (ko-class verb; 1st person: asiomi eoŋ; imperative: kosiom!)"
          },
          {
            "target": "Aisisia",
            "source": "To learn",
            "pronunciation": "ah-ee-see-see-ah",
            "hint": "ki-class verb; 1st person: esisiai eoŋ; imperative: kisisia!",
            "example": "Aisisia — To learn (ki-class verb; 1st person: esisiai eoŋ; imperative: kisisia!)"
          },
          {
            "target": "Aisisianakin",
            "source": "To teach",
            "pronunciation": "ah-ee-see-see-ah-nah-keen",
            "hint": "ki-class causative action-for verb; imperative: kisisianakik!",
            "example": "Aisisianakin — To teach (ki-class causative action-for verb; imperative: kisisianakik!)"
          },
          {
            "target": "Apedor",
            "source": "To be able / can",
            "pronunciation": "ah-peh-dohr",
            "hint": "ko-class verb of ability; 1st pers: apedori; 3rd pers: epedori.",
            "example": "Apedor — To be able / can (ko-class verb of ability; 1st pers: apedori; 3rd pers: epedori.)"
          }
        ],
        "sentences": [
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          },
          {
            "target": "Ejai akipi toma amot.",
            "source": "There is water inside the pot."
          },
          {
            "target": "Anyami aberu akimuj.",
            "source": "The woman is eating food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Agwel\" mean in English?",
            "correctAnswer": "To buy",
            "options": [
              "To sell",
              "To bring",
              "To carry",
              "To buy"
            ],
            "hint": "ko-class verb; 1st person: agweli eoŋ; imperative: kogwel!"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Agwelar\" mean in English?",
            "correctAnswer": "To sell",
            "options": [
              "To bring",
              "To carry",
              "To sell",
              "To buy"
            ],
            "hint": "ko-class motion-away verb from agwel; imperative: kogwela!"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ayaun\" mean in English?",
            "correctAnswer": "To bring",
            "options": [
              "To carry",
              "To bring",
              "To buy",
              "To sell"
            ],
            "hint": "ko-class motion-towards verb; imperative: koyau!"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To bring\" in Teso (Ateso)?",
            "correctAnswer": "Ayaun",
            "options": [
              "Ayaun",
              "Agwel",
              "Agwelar",
              "Aibwok"
            ],
            "hint": "ah-yah-oon"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To carry\" in Teso (Ateso)?",
            "correctAnswer": "Aibwok",
            "options": [
              "Agwel",
              "Agwelar",
              "Ayaun",
              "Aibwok"
            ],
            "hint": "ah-ee-bwohk"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To wash (clothes)\" in Teso (Ateso)?",
            "correctAnswer": "Ailot",
            "options": [
              "Agwelar",
              "Ayaun",
              "Ailot",
              "Agwel"
            ],
            "hint": "ah-ee-loht"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Agwel: To buy, Agwelar: To sell, Ayaun: To bring, Aibwok: To carry",
            "pairs": [
              {
                "left": "Agwel",
                "right": "To buy"
              },
              {
                "left": "Agwelar",
                "right": "To sell"
              },
              {
                "left": "Ayaun",
                "right": "To bring"
              },
              {
                "left": "Aibwok",
                "right": "To carry"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To buy\" in Teso (Ateso).",
            "correctAnswer": "Agwel",
            "options": [
              "Agwel",
              "Agwelar",
              "Ayaun",
              "Aibwok"
            ],
            "hint": "ah-gwehl"
          }
        ]
      },
      {
        "id": "teso-exp-verbs-3",
        "title": "Common Verbs (Part 3)",
        "icon": "Zap",
        "description": "Master Teso (Ateso) common verbs vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Common Verbs, pay special attention to pronunciation and morphological prefixes/suffixes: 'Aiar' (To kill), 'Ainom' (To beat / hit), 'Aiŋit' (To ask / inquire), 'Anyaraun' (To call).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Aiar",
            "source": "To kill",
            "pronunciation": "ah-ee-ahr",
            "hint": "ko-class verb; 1st person: aari; imperative: koar!",
            "example": "Aiar — To kill (ko-class verb; 1st person: aari; imperative: koar!)"
          },
          {
            "target": "Ainom",
            "source": "To beat / hit",
            "pronunciation": "ah-ee-nohm",
            "hint": "ki-class verb; 1st person: enomi eoŋ; imperative: kinom!",
            "example": "Ainom — To beat / hit (ki-class verb; 1st person: enomi eoŋ; imperative: kinom!)"
          },
          {
            "target": "Aiŋit",
            "source": "To ask / inquire",
            "pronunciation": "ah-ee-ngeet",
            "hint": "ki-class verb; 1st person: eŋiti; imperative: kiŋit!",
            "example": "Aiŋit — To ask / inquire (ki-class verb; 1st person: eŋiti; imperative: kiŋit!)"
          },
          {
            "target": "Anyaraun",
            "source": "To call",
            "pronunciation": "ahn-yah-rah-oon",
            "hint": "ko-class motion-towards verb; imperative: konyarau!",
            "example": "Anyaraun — To call (ko-class motion-towards verb; imperative: konyarau!)"
          },
          {
            "target": "Alimokin",
            "source": "To tell / inform",
            "pronunciation": "ah-lee-moh-keen",
            "hint": "ko-class action-for verb; imperative: kolimok!",
            "example": "Alimokin — To tell / inform (ko-class action-for verb; imperative: kolimok!)"
          },
          {
            "target": "Aiboikin",
            "source": "To sit down / stay",
            "pronunciation": "ah-ee-boh-ee-keen",
            "hint": "ki-class reflexive verb; imperative: kiboikin!",
            "example": "Aiboikin — To sit down / stay (ki-class reflexive verb; imperative: kiboikin!)"
          },
          {
            "target": "Aibok",
            "source": "To dig",
            "pronunciation": "ah-ee-bohk",
            "hint": "ko-class verb; 1st person: aboki eoŋ; imperative: kobok!",
            "example": "Aibok — To dig (ko-class verb; 1st person: aboki eoŋ; imperative: kobok!)"
          },
          {
            "target": "Aitub",
            "source": "To cut",
            "pronunciation": "ah-ee-toob",
            "hint": "ko-class verb; 1st person: atubi eoŋ; imperative: kotub!",
            "example": "Aitub — To cut (ko-class verb; 1st person: atubi eoŋ; imperative: kotub!)"
          },
          {
            "target": "Aimony",
            "source": "To cry / weep",
            "pronunciation": "ah-ee-mohn-y",
            "hint": "ko-class verb; 1st person: amonyi eoŋ; imperative: komony!",
            "example": "Aimony — To cry / weep (ko-class verb; 1st person: amonyi eoŋ; imperative: komony!)"
          },
          {
            "target": "Adaun",
            "source": "To finish / end",
            "pronunciation": "ah-dah-oon",
            "hint": "ko-class verb; completed aspect: adau eoŋ (I finished).",
            "example": "Adaun — To finish / end (ko-class verb; completed aspect: adau eoŋ (I finished).)"
          },
          {
            "target": "Aibuk",
            "source": "To pour",
            "pronunciation": "ah-ee-book",
            "hint": "ko-class verb; 'abukor' = pour away.",
            "example": "Aibuk — To pour (ko-class verb; 'abukor' = pour away.)"
          },
          {
            "target": "Aicak",
            "source": "To throw",
            "pronunciation": "ah-ee-chahk",
            "hint": "ko-class verb; 'acakun' = throw towards, 'acakakin' = throw down.",
            "example": "Aicak — To throw (ko-class verb; 'acakun' = throw towards, 'acakakin' = throw down.)"
          }
        ],
        "sentences": [
          {
            "target": "Anyami aberu akimuj.",
            "source": "The woman is eating food."
          },
          {
            "target": "Ajeni eong ateso cut.",
            "source": "I know the Ateso language very well."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aiar\" mean in English?",
            "correctAnswer": "To kill",
            "options": [
              "To beat / hit",
              "To ask / inquire",
              "To call",
              "To kill"
            ],
            "hint": "ko-class verb; 1st person: aari; imperative: koar!"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ainom\" mean in English?",
            "correctAnswer": "To beat / hit",
            "options": [
              "To ask / inquire",
              "To call",
              "To beat / hit",
              "To kill"
            ],
            "hint": "ki-class verb; 1st person: enomi eoŋ; imperative: kinom!"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aiŋit\" mean in English?",
            "correctAnswer": "To ask / inquire",
            "options": [
              "To call",
              "To ask / inquire",
              "To kill",
              "To beat / hit"
            ],
            "hint": "ki-class verb; 1st person: eŋiti; imperative: kiŋit!"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To ask / inquire\" in Teso (Ateso)?",
            "correctAnswer": "Aiŋit",
            "options": [
              "Aiŋit",
              "Aiar",
              "Ainom",
              "Anyaraun"
            ],
            "hint": "ah-ee-ngeet"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To call\" in Teso (Ateso)?",
            "correctAnswer": "Anyaraun",
            "options": [
              "Aiar",
              "Ainom",
              "Aiŋit",
              "Anyaraun"
            ],
            "hint": "ahn-yah-rah-oon"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To tell / inform\" in Teso (Ateso)?",
            "correctAnswer": "Alimokin",
            "options": [
              "Ainom",
              "Aiŋit",
              "Alimokin",
              "Aiar"
            ],
            "hint": "ah-lee-moh-keen"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Aiar: To kill, Ainom: To beat / hit, Aiŋit: To ask / inquire, Anyaraun: To call",
            "pairs": [
              {
                "left": "Aiar",
                "right": "To kill"
              },
              {
                "left": "Ainom",
                "right": "To beat / hit"
              },
              {
                "left": "Aiŋit",
                "right": "To ask / inquire"
              },
              {
                "left": "Anyaraun",
                "right": "To call"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To kill\" in Teso (Ateso).",
            "correctAnswer": "Aiar",
            "options": [
              "Aiar",
              "Ainom",
              "Aiŋit",
              "Anyaraun"
            ],
            "hint": "ah-ee-ahr"
          }
        ]
      },
      {
        "id": "teso-exp-verbs-4",
        "title": "Common Verbs (Part 4)",
        "icon": "Zap",
        "description": "Master Teso (Ateso) common verbs vocabulary and expressions from verified historical sources.",
        "tips": "In this Teso (Ateso) skill covering Common Verbs, pay special attention to pronunciation and morphological prefixes/suffixes: 'Alomun' (To enter / come in), 'Alomar' (To exit / go out), 'Aidar' (To look after / guard), 'Atamakin' (To try / attempt).",
        "culturalNote": "Source attribution: J.H. Hilders & J.C.D. Lawrance (1957) 'An Introduction to the Ateso Language' (Eagle Press / East African Literature Bureau).",
        "words": [
          {
            "target": "Alomun",
            "source": "To enter / come in",
            "pronunciation": "ah-loh-moon",
            "hint": "ko-class motion-towards verb; imperative: kolomun! / toloma!",
            "example": "Alomun — To enter / come in (ko-class motion-towards verb; imperative: kolomun! / toloma!)"
          },
          {
            "target": "Alomar",
            "source": "To exit / go out",
            "pronunciation": "ah-loh-mahr",
            "hint": "ko-class motion-away verb; imperative: koloma!",
            "example": "Alomar — To exit / go out (ko-class motion-away verb; imperative: koloma!)"
          },
          {
            "target": "Aidar",
            "source": "To look after / guard",
            "pronunciation": "ah-ee-dahr",
            "hint": "ki-class verb; 1st person: edari; imperative: kidar!",
            "example": "Aidar — To look after / guard (ki-class verb; 1st person: edari; imperative: kidar!)"
          },
          {
            "target": "Atamakin",
            "source": "To try / attempt",
            "pronunciation": "ah-tah-mah-keen",
            "hint": "ko-class action-for verb; imperative: kotamak!",
            "example": "Atamakin — To try / attempt (ko-class action-for verb; imperative: kotamak!)"
          },
          {
            "target": "Ainyekin",
            "source": "To stop / leave alone",
            "pronunciation": "ah-ee-nyeh-keen",
            "hint": "ki-class verb used in prohibition; imperative: kinyek!",
            "example": "Ainyekin — To stop / leave alone (ki-class verb used in prohibition; imperative: kinyek!)"
          },
          {
            "target": "Acok",
            "source": "To herd (cattle)",
            "pronunciation": "ah-chohk",
            "hint": "ko-class irregular verb; 1st person: acokie; imperative: kocok!",
            "example": "Acok — To herd (cattle) (ko-class irregular verb; 1st person: acokie; imperative: kocok!)"
          },
          {
            "target": "Aur",
            "source": "To give birth / bring forth",
            "pronunciation": "ah-oor",
            "hint": "ko-class irregular verb; 1st person: aurie; imperative: kour!",
            "example": "Aur — To give birth / bring forth (ko-class irregular verb; 1st person: aurie; imperative: kour!)"
          },
          {
            "target": "Aomoom",
            "source": "To think over / ponder",
            "pronunciation": "ah-oh-moh-ohm",
            "hint": "ko-class verb; 1st person: aomoomoi eoŋ.",
            "example": "Aomoom — To think over / ponder (ko-class verb; 1st person: aomoomoi eoŋ.)"
          },
          {
            "target": "Aiswap",
            "source": "To thatch (house)",
            "pronunciation": "ah-ee-swahp",
            "hint": "ki-class verb; imperative: kiswap!",
            "example": "Aiswap — To thatch (house) (ki-class verb; imperative: kiswap!)"
          },
          {
            "target": "Aitep",
            "source": "To rain",
            "pronunciation": "ah-ee-tehp",
            "hint": "ko-class verb; 3rd person: edou etepi (it is raining).",
            "example": "Aitep — To rain (ko-class verb; 3rd person: edou etepi (it is raining).)"
          }
        ],
        "sentences": [
          {
            "target": "Ejok etunganan lo noi.",
            "source": "This person is very good."
          },
          {
            "target": "Elosete idwe osomero.",
            "source": "The children are going to school."
          },
          {
            "target": "Emina ekiliokit akoru.",
            "source": "The man loves farming."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alomun\" mean in English?",
            "correctAnswer": "To enter / come in",
            "options": [
              "To exit / go out",
              "To look after / guard",
              "To try / attempt",
              "To enter / come in"
            ],
            "hint": "ko-class motion-towards verb; imperative: kolomun! / toloma!"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alomar\" mean in English?",
            "correctAnswer": "To exit / go out",
            "options": [
              "To look after / guard",
              "To try / attempt",
              "To exit / go out",
              "To enter / come in"
            ],
            "hint": "ko-class motion-away verb; imperative: koloma!"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aidar\" mean in English?",
            "correctAnswer": "To look after / guard",
            "options": [
              "To try / attempt",
              "To look after / guard",
              "To enter / come in",
              "To exit / go out"
            ],
            "hint": "ki-class verb; 1st person: edari; imperative: kidar!"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To look after / guard\" in Teso (Ateso)?",
            "correctAnswer": "Aidar",
            "options": [
              "Aidar",
              "Alomun",
              "Alomar",
              "Atamakin"
            ],
            "hint": "ah-ee-dahr"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To try / attempt\" in Teso (Ateso)?",
            "correctAnswer": "Atamakin",
            "options": [
              "Alomun",
              "Alomar",
              "Aidar",
              "Atamakin"
            ],
            "hint": "ah-tah-mah-keen"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To stop / leave alone\" in Teso (Ateso)?",
            "correctAnswer": "Ainyekin",
            "options": [
              "Alomar",
              "Aidar",
              "Ainyekin",
              "Alomun"
            ],
            "hint": "ah-ee-nyeh-keen"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Teso (Ateso) terms with their English meanings:",
            "correctAnswer": "Alomun: To enter / come in, Alomar: To exit / go out, Aidar: To look after / guard, Atamakin: To try / attempt",
            "pairs": [
              {
                "left": "Alomun",
                "right": "To enter / come in"
              },
              {
                "left": "Alomar",
                "right": "To exit / go out"
              },
              {
                "left": "Aidar",
                "right": "To look after / guard"
              },
              {
                "left": "Atamakin",
                "right": "To try / attempt"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To enter / come in\" in Teso (Ateso).",
            "correctAnswer": "Alomun",
            "options": [
              "Alomun",
              "Alomar",
              "Aidar",
              "Atamakin"
            ],
            "hint": "ah-loh-moon"
          }
        ]
      }
    ]
  }
];
