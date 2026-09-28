// ============================================================
// Kisii (Ekegusii) Language Course Configuration & Units
// Based on "A Practical Introduction to Gusii"
// by W.H. Whiteley (East African Literature Bureau, 1956)
// and standard highland Ekegusii linguistic references.
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const KISII_CONFIG: LanguageConfig = {
  id: 'kisii',
  name: 'Kisii',
  nativeName: 'Ekegusii',
  family: 'Bantu',
  counties: ['Kisii', 'Nyamira'],
  speakers: '2.7M',
  speechLocale: 'sw-KE',
  description: 'A Highland Bantu language spoken across the fertile green hills of Kisii and Nyamira counties in Western Kenya, celebrated for its 7-vowel phonology, soapstone arts, and rich agricultural traditions.',
  color: '#D97706',
};

export const KISII_UNITS: CourseUnit[] = [
  {
    id: 'kisii-unit-1',
    title: 'Unit 1: Foundations, Greetings & Numbers',
    description: 'Learn foundational greetings, daily salutations, and the cardinal counting system of Ekegusii.',
    icon: '👋',
    skills: [
      {
        id: 'kisii-greetings',
        title: 'Greetings & Politeness',
        icon: 'Handshake',
        description: 'Master core greetings, polite inquiries, and daily salutations.',
        tips: "In Ekegusii, morning greetings begin with 'Bwakiire' (lit. 'How did you wake up?'). The standard respectful response is 'Mbuya mono' ('Very well' or 'Good'). For afternoon and evening, 'Bwairire' is used. When asking how someone is, say 'Naki ase?'. To say goodbye, say 'Togokoana' ('We will see each other') or 'Genda buya' ('Go well').",
        culturalNote: "Greetings in Gusii culture carry deep warmth. Inquiring about one's family, the farm (omogondo), and health is essential before discussing business. Elders are addressed with reverent titles like 'Omogaaka' (elder father) and 'Omong'ina' (elder mother).",
        words: [
          { target: 'Bwakiire', source: 'Good morning / Hello', pronunciation: 'bwah-kee-reh', hint: 'Morning greeting (lit. "how did you wake?")', example: 'Bwakiire, tata! — Mbuya mono.' },
          { target: 'Mbuya mono', source: 'Very well / Good', pronunciation: 'm-boo-yah moh-noh', hint: 'Standard polite reply to greetings', example: 'Ndi botire, mbuya mono.' },
          { target: 'Bwairire', source: 'Good afternoon / evening', pronunciation: 'bwah-ee-ree-reh', hint: 'Salutation used from midday onwards' },
          { target: 'Naki ase?', source: 'How are you?', pronunciation: 'nah-kee ah-seh', hint: 'Common conversational greeting', example: 'Naki ase, osomwabo?' },
          { target: 'Ndi botire', source: 'I am fine', pronunciation: 'n-dee boh-tee-reh', hint: 'Affirmative response: "I am fine"' },
          { target: 'Orogoro', source: 'Good morning (Daylight)', pronunciation: 'oh-roh-goh-roh', hint: 'Salutation honoring the early morning sunlight' },
          { target: 'Ase mono', source: 'Thank you very much', pronunciation: 'ah-seh moh-noh', hint: "'Ase' means thanks; 'mono' means very much", example: 'Ase mono nigo oindeitie.' },
          { target: 'Togokoana', source: 'Goodbye (we shall meet)', pronunciation: 'toh-goh-koh-ah-nah', hint: 'Parting phrase: we shall see each other' },
          { target: 'Genda buya', source: 'Goodbye (go well)', pronunciation: 'gehn-dah boo-yah', hint: 'Spoken to the person departing' },
          { target: 'Manya buya', source: 'Goodbye (stay well)', pronunciation: 'mah-nyah boo-yah', hint: 'Spoken by traveler to host staying behind' },
          { target: 'Ee', source: 'Yes', pronunciation: 'eh-eh', hint: 'Affirmative' },
          { target: 'Yaya', source: 'No', pronunciation: 'yah-yah', hint: 'Negative' }
        ],
        sentences: [
          { target: 'Bwakiire, naki ase?', source: 'Good morning, how are you?' },
          { target: 'Ndi botire, mbuya mono.', source: 'I am fine, very well.' },
          { target: 'Genda buya, togokoana naende.', source: 'Go well, we will see each other again.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you reply to "Bwakiire" (Good morning) in Ekegusii?',
            correctAnswer: 'Mbuya mono',
            options: ['Mbuya mono', 'Yaya', 'Genda buya', 'Naki ase?'],
            hint: 'Means "very well / good"'
          },
          {
            type: 'multiple_choice',
            prompt: 'What does "Togokoana" mean?',
            correctAnswer: 'Goodbye (we shall meet)',
            options: ['Goodbye (we shall meet)', 'Thank you', 'Good morning', 'How are you?'],
            hint: 'Said when parting'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Gusii greetings with their English meanings:',
            correctAnswer: 'Bwakiire: Good morning, Mbuya mono: Very well, Ase mono: Thank you very much, Yaya: No',
            pairs: [
              { left: 'Bwakiire', right: 'Good morning' },
              { left: 'Mbuya mono', right: 'Very well' },
              { left: 'Ase mono', right: 'Thank you very much' },
              { left: 'Yaya', right: 'No' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "Ndi botire, _____ mono." (I am fine, very well.)',
            correctAnswer: 'mbuya',
            options: ['mbuya', 'yaya', 'orogoro', 'bwairire'],
            hint: 'Ekegusii word for good / well'
          }
        ]
      },
      {
        id: 'kisii-numbers',
        title: 'Counting & Numbers',
        icon: 'Hash',
        description: 'Learn the cardinal numbers from one to a hundred in Ekegusii.',
        tips: "Ekegusii counting is based on Bantu numerals: 1 is Emwe, 2 is Ebere, 3 is Eshato (or Etato), 4 is Ene, and 5 is Etano. 10 is Ekoome, 20 is Amakoome abere (two tens), and 100 is Egana.",
        culturalNote: "When counting cattle or livestock, Gusii pastoralists traditionally used respectful terms or grouping by color and age rather than blunt tallies to avoid bad fortune.",
        words: [
          { target: 'Emwe', source: 'One', pronunciation: 'ehm-weh', hint: 'Numeral 1' },
          { target: 'Ebere', source: 'Two', pronunciation: 'eh-beh-reh', hint: 'Numeral 2' },
          { target: 'Eshato', source: 'Three', pronunciation: 'eh-shah-toh', hint: 'Numeral 3 (also Etato)' },
          { target: 'Ene', source: 'Four', pronunciation: 'eh-neh', hint: 'Numeral 4' },
          { target: 'Etano', source: 'Five', pronunciation: 'eh-tah-noh', hint: 'Numeral 5' },
          { target: 'Esita', source: 'Six', pronunciation: 'eh-see-tah', hint: 'Numeral 6' },
          { target: 'Esobaa', source: 'Seven', pronunciation: 'eh-soh-bah', hint: 'Numeral 7 (also Musaafo)' },
          { target: 'Enane', source: 'Eight', pronunciation: 'eh-nah-neh', hint: 'Numeral 8' },
          { target: 'Engenda', source: 'Nine', pronunciation: 'ehn-gehn-dah', hint: 'Numeral 9' },
          { target: 'Ekoome', source: 'Ten', pronunciation: 'eh-koh-meh', hint: 'Numeral 10' },
          { target: 'Amakoome abere', source: 'Twenty', pronunciation: 'ah-mah-koh-meh ah-beh-reh', hint: 'Lit. "two tens"' },
          { target: 'Egana', source: 'Hundred', pronunciation: 'eh-gah-nah', hint: 'Numeral 100' }
        ],
        sentences: [
          { target: 'Ndi na abaana bashato.', source: 'I have three children.' },
          { target: 'Mbe amatoke abere.', source: 'Give me two bananas.' },
          { target: 'Ching\'ombe chikoome chiria.', source: 'Those ten cows.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Three" in Ekegusii?',
            correctAnswer: 'Eshato',
            options: ['Eshato', 'Ebere', 'Etano', 'Ene'],
            hint: 'Cognate to Bantu tatũ'
          },
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Ten"?',
            correctAnswer: 'Ekoome',
            options: ['Ekoome', 'Emwe', 'Egana', 'Enane'],
            hint: 'Cognate to kũmi'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the numbers to their Ekegusii words:',
            correctAnswer: 'Emwe: One, Ebere: Two, Eshato: Three, Etano: Five',
            pairs: [
              { left: 'Emwe', right: 'One' },
              { left: 'Ebere', right: 'Two' },
              { left: 'Eshato', right: 'Three' },
              { left: 'Etano', right: 'Five' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kisii-unit-2',
    title: 'Unit 2: People, Family & Society',
    description: 'Learn terms for family members, social kinship, and leadership roles in Gusii society.',
    icon: '👨‍👩‍👧‍👦',
    skills: [
      {
        id: 'kisii-family',
        title: 'Family & Kinship',
        icon: 'Users',
        description: 'Master terms for immediate and extended family in Ekegusii.',
        tips: "In Ekegusii, 'Omonto' means person (plural 'Abanto'). 'Tata' is father, 'Omong'ina' is mother (or revered elder woman). 'Omwana' is child (plural 'Abaana'). 'Omosaacha' is husband/man, and 'Omokungu' is wife/woman.",
        culturalNote: "The Abagusii family system is organized around patrilineal homesteads. Respect for parents and elders is cardinal, reflected in respectful greeting rituals and filial care.",
        words: [
          { target: 'Omonto', source: 'Person / Human being', pronunciation: 'oh-mohn-toh', hint: 'Plural: Abanto (people)', example: 'Omonto oyo nigo arigeti.' },
          { target: 'Abanto', source: 'People', pronunciation: 'ah-bahn-toh', hint: 'Plural of omonto', example: 'Abanto banto nigo bamenyete.' },
          { target: 'Tata', source: 'Father', pronunciation: 'tah-tah', hint: 'Biological father or paternal uncle', example: 'Tata ali mogondo.' },
          { target: 'Omong\'ina', source: 'Mother / Elder woman', pronunciation: 'oh-moh-ngee-nah', hint: 'Mother or matriarch (plural: Abang\'ina)', example: 'Omong\'ina ateekire.' },
          { target: 'Omwana', source: 'Child', pronunciation: 'ohm-wah-nah', hint: 'Plural: Abaana', example: 'Omwana asomete.' },
          { target: 'Abaana', source: 'Children', pronunciation: 'ah-bah-ah-nah', hint: 'Plural of omwana', example: 'Abaana bare aiga.' },
          { target: 'Omosaacha', source: 'Man / Husband', pronunciation: 'oh-moh-sah-ah-chah', hint: 'Plural: Abasaacha', example: 'Omosaacha nigo akorire.' },
          { target: 'Omokungu', source: 'Woman / Wife', pronunciation: 'oh-moh-koon-goo', hint: 'Plural: Abakungu', example: 'Omokungu omwega.' },
          { target: 'Omochokoro', source: 'Grandchild', pronunciation: 'oh-moh-choh-koh-roh', hint: 'Plural: Abachokoro' },
          { target: 'Omogaaka', source: 'Elder / Old man', pronunciation: 'oh-moh-gah-ah-kah', hint: 'Plural: Abagaaka (title of great honor)' }
        ],
        sentences: [
          { target: 'Omosaacha nomokungu bamenyete aiga.', source: 'The man and woman live here.' },
          { target: 'Tata nomong\'ina bare mogondo.', source: 'Father and mother are at the farm.' },
          { target: 'Abaana bano nigo basomete.', source: 'These children are studying.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the plural of "omwana" (child) in Ekegusii?',
            correctAnswer: 'Abaana',
            options: ['Abaana', 'Abanto', 'Abasaacha', 'Abachokoro'],
            hint: 'Class 2 plural prefix aba-'
          },
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Person"?',
            correctAnswer: 'Omonto',
            options: ['Omonto', 'Omote', 'Omoyio', 'Tata'],
            hint: 'Plural is abanto'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the family members to their Gusii words:',
            correctAnswer: 'Tata: Father, Omong\'ina: Mother, Omwana: Child, Omosaacha: Husband',
            pairs: [
              { left: 'Tata', right: 'Father' },
              { left: "Omong'ina", right: 'Mother' },
              { left: 'Omwana', right: 'Child' },
              { left: 'Omosaacha', right: 'Husband' }
            ]
          }
        ]
      },
      {
        id: 'kisii-roles',
        title: 'Youth & Community Roles',
        icon: 'Crown',
        description: 'Terms for youth, leaders, and community roles in Gusii life.',
        tips: "'Omomura' refers to a young man / circumcised youth (plural 'Abamura'). 'Omoiseke' is a young maiden (plural 'Abaiseke'). 'Omogambi' is a chief or respected community spokesperson.",
        culturalNote: "Circumcision age-sets (ebisarate) historically bonded Gusii youths into brotherhoods responsible for guarding cattle and defending the highlands.",
        words: [
          { target: 'Omomura', source: 'Young man / Warrior', pronunciation: 'oh-moh-moo-rah', hint: 'Plural: Abamura (youth/warrior)', example: 'Omomura omoeneri.' },
          { target: 'Omoiseke', source: 'Young woman / Maiden', pronunciation: 'oh-moh-ee-seh-keh', hint: 'Plural: Abaiseke', example: 'Omoiseke omuya.' },
          { target: 'Omogambi', source: 'Chief / Leader / Judge', pronunciation: 'oh-moh-gahm-bee', hint: 'Plural: Abagambi (customary adjudicator)', example: 'Omogambi nigo arigeti.' },
          { target: 'Omorimi', source: 'Farmer / Cultivator', pronunciation: 'oh-moh-ree-mee', hint: 'Plural: Abarimi (from gokora mogondo)' },
          { target: 'Osomwabo', source: 'Friend / Companion', pronunciation: 'oh-sohm-wah-boh', hint: 'Comrade or trusted peer' }
        ],
        sentences: [
          { target: 'Abamura nigo bare aiga.', source: 'The young men are here.' },
          { target: 'Omogambi nigo atebire buya.', source: 'The chief has spoken well.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Omogambi" mean?',
            correctAnswer: 'Chief / Leader',
            options: ['Chief / Leader', 'Farmer', 'Child', 'Water'],
            hint: 'The one who adjudicates disputes'
          }
        ]
      }
    ]
  },
  {
    id: 'kisii-unit-3',
    title: 'Unit 3: Food, Farm & Highland Nature',
    description: 'Vocabulary for staple foods, farming, domestic homestead items, and the lush nature of Gusii hills.',
    icon: '🌿',
    skills: [
      {
        id: 'kisii-home-food',
        title: 'Food & Homestead',
        icon: 'Utensils',
        description: 'Terms for highland meals, crops, and household items.',
        tips: "'Amatoke' (green bananas / plantains) are the supreme culinary staple of the Gusii highlands. 'Amaanche' means water, 'Amabwere' is fresh milk, and 'Enyomba' is a house.",
        culturalNote: "The Kisii Highlands enjoy rich volcanic soils and high rainfall. Bananas, tea, coffee, and maize form the backbone of household prosperity.",
        words: [
          { target: 'Amatoke', source: 'Bananas / Plantains', pronunciation: 'ah-mah-toh-keh', hint: 'Singular: Ritoke (central staple food)', example: 'Amatoke aya amaya mono.' },
          { target: 'Amaanche', source: 'Water', pronunciation: 'ah-mah-ahn-cheh', hint: 'Essential drinking and cooking water', example: 'Mbe amaanche nywe.' },
          { target: 'Amabwere', source: 'Milk', pronunciation: 'ah-mah-bweh-reh', hint: 'Fresh cow milk' },
          { target: 'Enyomba', source: 'House / Home', pronunciation: 'ehn-yohm-bah', hint: 'Plural: Chinyomba', example: 'Enyomba yane eri aiga.' },
          { target: 'Omogondo', source: 'Farm / Shamba', pronunciation: 'oh-moh-gohn-doh', hint: 'Plural: Emegondo (cultivated land)', example: 'Genda mogondo.' },
          { target: 'Omobero', source: 'Fire / Hearth', pronunciation: 'oh-moh-beh-roh', hint: 'Domestic fire' },
          { target: 'Ekerogo', source: 'Chair / Stool', pronunciation: 'eh-keh-roh-goh', hint: 'Plural: Ebirogo' },
          { target: 'Omoyio', source: 'Knife', pronunciation: 'oh-moh-yee-oh', hint: 'Plural: Emeyio' },
          { target: 'Ritimo', source: 'Spear', pronunciation: 'ree-tee-moh', hint: 'Plural: Amatimo (traditional weapon)' }
        ],
        sentences: [
          { target: 'Mbe amaanche manywe.', source: 'Give me water to drink.' },
          { target: 'Amatoke aya nigo arierwe.', source: 'These bananas are eaten.' },
          { target: 'Omogondo oyio nigo orimire.', source: 'That farm is cultivated.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Bananas" in Ekegusii?',
            correctAnswer: 'Amatoke',
            options: ['Amatoke', 'Amaanche', 'Amabwere', 'Omobero'],
            hint: 'The premier Gusii staple crop'
          },
          {
            type: 'multiple_choice',
            prompt: 'What does "Amaanche" mean?',
            correctAnswer: 'Water',
            options: ['Water', 'Milk', 'Fire', 'House'],
            hint: 'Essential liquid'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the homestead terms with their meanings:',
            correctAnswer: 'Amatoke: Bananas, Amaanche: Water, Enyomba: House, Omogondo: Farm',
            pairs: [
              { left: 'Amatoke', right: 'Bananas' },
              { left: 'Amaanche', right: 'Water' },
              { left: 'Enyomba', right: 'House' },
              { left: 'Omogondo', right: 'Farm' }
            ]
          }
        ]
      },
      {
        id: 'kisii-nature-animals',
        title: 'Nature & Livestock',
        icon: 'Leaf',
        description: 'Terms for animals, livestock, and elements of nature.',
        tips: "In Ekegusii, 'Omote' is a tree (plural 'Emete'). 'Embura' is rain, and 'Rioba' is the sun. Cattle are 'Eng'ombe' (plural 'Ching'ombe').",
        culturalNote: "Pastoral agriculture is deeply woven into Gusii life. Cattle provide bride-wealth (enyangi) and milk, while the sun (Rioba) and rain (Embura) signify life and divine blessing.",
        words: [
          { target: 'Omote', source: 'Tree', pronunciation: 'oh-moh-teh', hint: 'Plural: Emete', example: 'Omote oyo omunene.' },
          { target: 'Embura', source: 'Rain', pronunciation: 'ehm-boo-rah', hint: 'Abundant highland rainfall', example: 'Embura nigo egwa.' },
          { target: 'Rioba', source: 'Sun / Daylight', pronunciation: 'ree-oh-bah', hint: 'The sun shining above' },
          { target: 'Eng\'ombe', source: 'Cow / Cattle', pronunciation: 'ehng-ohm-beh', hint: 'Plural: Ching\'ombe', example: 'Eng\'ombe nigo echete.' },
          { target: 'Embori', source: 'Goat', pronunciation: 'ehm-boh-ree', hint: 'Plural: Chimbori' },
          { target: 'Engoko', source: 'Chicken', pronunciation: 'ehn-goh-koh', hint: 'Plural: Chingoko' },
          { target: 'Nyasae', source: 'God / Supreme Creator', pronunciation: 'nyah-sah-eh', hint: 'Also Engoro (Almighty God)' }
        ],
        sentences: [
          { target: 'Embura nigo egwa leelo.', source: 'Rain is falling today.' },
          { target: 'Ching\'ombe chiri mogondo.', source: 'The cows are at the farm.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Rain" in Ekegusii?',
            correctAnswer: 'Embura',
            options: ['Embura', 'Rioba', 'Omote', 'Embori'],
            hint: 'Rainfall that nurtures crops'
          }
        ]
      }
    ]
  },
  {
    id: 'kisii-unit-4',
    title: 'Unit 4: Verbs & Daily Conversation',
    description: 'Learn foundational verbs, question words, and common phrases for everyday dialogue in Ekegusii.',
    icon: '💬',
    skills: [
      {
        id: 'kisii-verbs-dialogue',
        title: 'Verbs & Everyday Phrases',
        icon: 'MessageSquare',
        description: 'Key action verbs and question words for everyday interactions.',
        tips: "Infinitive verbs in Ekegusii typically begin with 'Go-' or 'Ko-': 'Gokora' (to work/do), 'Gochia' (to go), 'Gocha' (to come), 'Gotagera' (to want/need), 'Komanya' (to know), and 'Gokunda' (to love). 'Inka?' means 'Where?'.",
        culturalNote: "When speaking with elders, young people use softened phrasing and respectful question words to maintain decorum.",
        words: [
          { target: 'Gokora', source: 'To work / do', pronunciation: 'goh-koh-rah', hint: 'Infinitive verb', example: 'Gokora obuya.' },
          { target: 'Gochia', source: 'To go / depart', pronunciation: 'goh-chee-ah', hint: 'Infinitive: to go', example: 'Ngochia mogondo.' },
          { target: 'Gocha', source: 'To come / arrive', pronunciation: 'goh-chah', hint: 'Infinitive: to come', example: 'Incha aiga.' },
          { target: 'Gotagera', source: 'To want / need', pronunciation: 'goh-tah-geh-rah', hint: 'Infinitive: to desire', example: 'Nintagete amatoke.' },
          { target: 'Komanya', source: 'To know / understand', pronunciation: 'koh-mah-nyah', hint: 'Infinitive: to know' },
          { target: 'Gosomia', source: 'To read / teach', pronunciation: 'goh-soh-mee-ah', hint: 'Infinitive: to read' },
          { target: 'Gokunda', source: 'To love / like', pronunciation: 'goh-koon-dah', hint: 'Nkogokunda = I love you' },
          { target: 'Inka?', source: 'Where?', pronunciation: 'een-kah', hint: 'Question: location', example: 'Inka ogochia?' },
          { target: 'Naki?', source: 'How?', pronunciation: 'nah-kee', hint: 'Question: manner' },
          { target: 'Ning\'o?', source: 'Who?', pronunciation: 'neeng-oh', hint: 'Question: person' }
        ],
        sentences: [
          { target: 'Inka ogochia leelo?', source: 'Where are you going today?' },
          { target: 'Nkogokunda mono, mama.', source: 'I love you very much, mother.' },
          { target: 'Incha aiga torye ebiokuria.', source: 'Come here so we eat food.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "I love you" in Ekegusii?',
            correctAnswer: 'Nkogokunda',
            options: ['Nkogokunda', 'Genda buya', 'Naki ase', 'Gokora'],
            hint: 'From the verb gokunda'
          },
          {
            type: 'multiple_choice',
            prompt: 'What does "Inka ogochia?" mean?',
            correctAnswer: 'Where are you going?',
            options: ['Where are you going?', 'Who is coming?', 'How are you?', 'What do you want?'],
            hint: 'Inka means where'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Gusii verbs to their English meanings:',
            correctAnswer: 'Gokora: To work, Gochia: To go, Gocha: To come, Gokunda: To love',
            pairs: [
              { left: 'Gokora', right: 'To work' },
              { left: 'Gochia', right: 'To go' },
              { left: 'Gocha', right: 'To come' },
              { left: 'Gokunda', right: 'To love' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "_____ ogochia?" (Where are you going?)',
            correctAnswer: 'Inka',
            options: ['Inka', 'Yaya', 'Ee', 'Tata'],
            hint: 'Ekegusii word for "Where"'
          }
        ]
      }
    ]
  }
];
