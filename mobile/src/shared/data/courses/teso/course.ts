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
  }
];
