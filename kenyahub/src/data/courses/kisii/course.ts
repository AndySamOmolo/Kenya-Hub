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
        tips: "Infinitive verbs in Ekegusii typically begin with 'Go-' or 'Ko-': 'Gokora' (to work/do), 'Gosoma' (to read/study), 'Gotaaha' (to draw water/enter), 'Gochia' (to go), 'Gocha' (to come), 'Gotagera' (to want/need), 'Komanya' (to know), and 'Gokunda' (to love). 'Inka?' means 'Where?'.",
        culturalNote: "When speaking with elders, young people use softened phrasing and respectful question words to maintain decorum.",
        words: [
          { target: 'Gokora', source: 'To work / do', pronunciation: 'goh-koh-rah', hint: 'Infinitive verb', example: 'Gokora obuya.' },
          { target: 'Gosoma', source: 'To read / study', pronunciation: 'goh-soh-mah', hint: 'Infinitive verb from Whiteley (1956)', example: 'Gosoma ebitabu.' },
          { target: 'Gotaaha', source: 'To draw water / enter', pronunciation: 'goh-tah-ah-hah', hint: 'Whiteley (1956) model verb: draw water', example: 'Gotaaha amaanche.' },
          { target: 'Gochia', source: 'To go / depart', pronunciation: 'goh-chee-ah', hint: 'Infinitive: to go', example: 'Ngochia mogondo.' },
          { target: 'Gocha', source: 'To come / arrive', pronunciation: 'goh-chah', hint: 'Infinitive: to come', example: 'Incha aiga.' },
          { target: 'Gotagera', source: 'To want / need', pronunciation: 'goh-tah-geh-rah', hint: 'Infinitive: to desire', example: 'Nintagete amatoke.' },
          { target: 'Komanya', source: 'To know / understand', pronunciation: 'koh-mah-nyah', hint: 'Infinitive: to know' },
          { target: 'Gokunda', source: 'To love / like', pronunciation: 'goh-koon-dah', hint: 'Nkogokunda = I love you' },
          { target: 'Inka?', source: 'Where?', pronunciation: 'een-kah', hint: 'Question: location', example: 'Inka ogochia?' },
          { target: 'Naki?', source: 'How?', pronunciation: 'nah-kee', hint: 'Question: manner' },
          { target: 'Ning\'o?', source: 'Who?', pronunciation: 'neeng-oh', hint: 'Question: person' }
        ],
        sentences: [
          { target: 'Inka ogochia leelo?', source: 'Where are you going today?' },
          { target: 'Nkogokunda mono, mama.', source: 'I love you very much, mother.' },
          { target: 'Incha aiga torye ebiokuria.', source: 'Come here so we eat food.' },
          { target: 'Omwana nigo agotaaha amaanche.', source: 'The child is fetching water.' }
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
  },
  
  // ── EXPANDED SOURCE-VERIFIED UNITS ──
  {
    "id": "kisii-unit-5-greetings",
    "title": "Unit 5: Greetings & Farewells",
    "description": "Comprehensive Kisii (Ekegusii) curriculum for Greetings & Farewells, vetted from Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
    "icon": "Handshake",
    "skills": [
      {
        "id": "kisii-exp-greetings",
        "title": "Greetings & Farewells",
        "icon": "Handshake",
        "description": "Master Kisii (Ekegusii) greetings & farewells vocabulary and expressions from verified historical sources.",
        "tips": "In this Kisii (Ekegusii) skill covering Greetings & Farewells, pay special attention to pronunciation and morphological prefixes/suffixes: 'Mbuya omuerio' (Good morning), 'Mbuya omotienyi' (Good afternoon), 'Mbuya mogari' (Good evening), 'Oyagore' (Welcome / Hello).",
        "culturalNote": "Source attribution: Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
        "words": [
          {
            "target": "Mbuya omuerio",
            "source": "Good morning",
            "pronunciation": "m-boo-yah oh-mweh-ree-oh",
            "hint": "Traditional morning greeting wishing a good morning",
            "example": "Mbuya omuerio — Good morning (Traditional morning greeting wishing a good morning)"
          },
          {
            "target": "Mbuya omotienyi",
            "source": "Good afternoon",
            "pronunciation": "m-boo-yah oh-moh-tee-ehn-yee",
            "hint": "Afternoon greeting (lit. 'good daylight/sun period')",
            "example": "Mbuya omotienyi — Good afternoon (Afternoon greeting (lit. 'good daylight/sun period'))"
          },
          {
            "target": "Mbuya mogari",
            "source": "Good evening",
            "pronunciation": "m-boo-yah moh-gah-ree",
            "hint": "Evening greeting as dusk approaches",
            "example": "Mbuya mogari — Good evening (Evening greeting as dusk approaches)"
          },
          {
            "target": "Oyagore",
            "source": "Welcome / Hello",
            "pronunciation": "oh-yah-goh-reh",
            "hint": "Warm welcoming salutation to guests",
            "example": "Oyagore — Welcome / Hello (Warm welcoming salutation to guests)"
          },
          {
            "target": "Ase mono / Buya mono",
            "source": "Thank you",
            "pronunciation": "ah-seh moh-noh / boo-yah moh-noh",
            "hint": "'Ase mono' = thank you very much",
            "example": "Ase mono / Buya mono — Thank you ('Ase mono' = thank you very much)"
          },
          {
            "target": "Bwakiire",
            "source": "Hello / Morning greeting",
            "pronunciation": "bwah-kee-reh",
            "hint": "Universal morning salutation (lit. 'How did it dawn?')",
            "example": "Bwakiire — Hello / Morning greeting (Universal morning salutation (lit. 'How did it dawn?'))"
          },
          {
            "target": "Bwairire",
            "source": "Goodnight / Evening greeting",
            "pronunciation": "bwah-ee-ree-reh",
            "hint": "Salutation used from midday onwards and into dusk / night",
            "example": "Bwairire — Goodnight / Evening greeting (Salutation used from midday onwards and into dusk / night)"
          },
          {
            "target": "Mbuya mono",
            "source": "Response: I am well",
            "pronunciation": "m-boo-yah moh-noh",
            "hint": "Standard reply to Bwakiire ('Very well / good')",
            "example": "Mbuya mono — Response: I am well (Standard reply to Bwakiire ('Very well / good'))"
          }
        ],
        "sentences": [
          {
            "target": "Omonto oyo n'omuya mono.",
            "source": "This person is very good."
          },
          {
            "target": "Abana bonsi bagenda esukuru.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Amache aya n'amaya okonywa.",
            "source": "This water is good for drinking."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mbuya omuerio\" mean in English?",
            "correctAnswer": "Good morning",
            "options": [
              "Good afternoon",
              "Good evening",
              "Welcome / Hello",
              "Good morning"
            ],
            "hint": "Traditional morning greeting wishing a good morning"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mbuya omotienyi\" mean in English?",
            "correctAnswer": "Good afternoon",
            "options": [
              "Good evening",
              "Welcome / Hello",
              "Good afternoon",
              "Good morning"
            ],
            "hint": "Afternoon greeting (lit. 'good daylight/sun period')"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mbuya mogari\" mean in English?",
            "correctAnswer": "Good evening",
            "options": [
              "Welcome / Hello",
              "Good evening",
              "Good morning",
              "Good afternoon"
            ],
            "hint": "Evening greeting as dusk approaches"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Good evening\" in Kisii (Ekegusii)?",
            "correctAnswer": "Mbuya mogari",
            "options": [
              "Mbuya mogari",
              "Mbuya omuerio",
              "Mbuya omotienyi",
              "Oyagore"
            ],
            "hint": "m-boo-yah moh-gah-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Welcome / Hello\" in Kisii (Ekegusii)?",
            "correctAnswer": "Oyagore",
            "options": [
              "Mbuya omuerio",
              "Mbuya omotienyi",
              "Mbuya mogari",
              "Oyagore"
            ],
            "hint": "oh-yah-goh-reh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Thank you\" in Kisii (Ekegusii)?",
            "correctAnswer": "Ase mono / Buya mono",
            "options": [
              "Mbuya omotienyi",
              "Mbuya mogari",
              "Ase mono / Buya mono",
              "Mbuya omuerio"
            ],
            "hint": "ah-seh moh-noh / boo-yah moh-noh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kisii (Ekegusii) terms with their English meanings:",
            "correctAnswer": "Mbuya omuerio: Good morning, Mbuya omotienyi: Good afternoon, Mbuya mogari: Good evening, Oyagore: Welcome / Hello",
            "pairs": [
              {
                "left": "Mbuya omuerio",
                "right": "Good morning"
              },
              {
                "left": "Mbuya omotienyi",
                "right": "Good afternoon"
              },
              {
                "left": "Mbuya mogari",
                "right": "Good evening"
              },
              {
                "left": "Oyagore",
                "right": "Welcome / Hello"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Good morning\" in Kisii (Ekegusii).",
            "correctAnswer": "Mbuya omuerio",
            "options": [
              "Mbuya omuerio",
              "Mbuya omotienyi",
              "Mbuya mogari",
              "Oyagore"
            ],
            "hint": "m-boo-yah oh-mweh-ree-oh"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-6-numbers",
    "title": "Unit 6: Numbers",
    "description": "Comprehensive Kisii (Ekegusii) curriculum for Numbers, vetted from Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
    "icon": "Hash",
    "skills": [
      {
        "id": "kisii-exp-numbers",
        "title": "Numbers",
        "icon": "Hash",
        "description": "Master Kisii (Ekegusii) numbers vocabulary and expressions from verified historical sources.",
        "tips": "In this Kisii (Ekegusii) skill covering Numbers, pay special attention to pronunciation and morphological prefixes/suffixes: 'Emwe / Eyemo' (One), 'Ebere / Ibere' (Two), 'Isatu / Etato' (Three), 'Inye / Ene' (Four).",
        "culturalNote": "Source attribution: Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
        "words": [
          {
            "target": "Emwe / Eyemo",
            "source": "One",
            "pronunciation": "ehm-weh / eh-yeh-moh",
            "hint": "Numeral 1 (Adjective stem: -mo)",
            "example": "Emwe / Eyemo — One (Numeral 1 (Adjective stem: -mo))"
          },
          {
            "target": "Ebere / Ibere",
            "source": "Two",
            "pronunciation": "eh-beh-reh / ee-beh-reh",
            "hint": "Numeral 2 (Adjective stem: -bere)",
            "example": "Ebere / Ibere — Two (Numeral 2 (Adjective stem: -bere))"
          },
          {
            "target": "Isatu / Etato",
            "source": "Three",
            "pronunciation": "ee-sah-too / eh-tah-toh",
            "hint": "Numeral 3 (Adjective stem: -tatu / -shato)",
            "example": "Isatu / Etato — Three (Numeral 3 (Adjective stem: -tatu / -shato))"
          },
          {
            "target": "Inye / Ene",
            "source": "Four",
            "pronunciation": "een-yeh / eh-neh",
            "hint": "Numeral 4 (Adjective stem: -ne)",
            "example": "Inye / Ene — Four (Numeral 4 (Adjective stem: -ne))"
          },
          {
            "target": "Isaano / Etano",
            "source": "Five",
            "pronunciation": "ee-sah-ah-noh / eh-tah-noh",
            "hint": "Numeral 5 (Adjective stem: -taano)",
            "example": "Isaano / Etano — Five (Numeral 5 (Adjective stem: -taano))"
          },
          {
            "target": "Esobaa / Musaafo",
            "source": "Seven",
            "pronunciation": "eh-soh-bah / moo-sah-ah-foh",
            "hint": "Numeral 7",
            "example": "Esobaa / Musaafo — Seven (Numeral 7)"
          },
          {
            "target": "Amakoome atato",
            "source": "Thirty",
            "pronunciation": "ah-mah-koh-meh ah-tah-toh",
            "hint": "Lit. 'three tens'",
            "example": "Amakoome atato — Thirty (Lit. 'three tens')"
          },
          {
            "target": "Amakoome ataano",
            "source": "Fifty",
            "pronunciation": "ah-mah-koh-meh ah-tah-ah-noh",
            "hint": "Lit. 'five tens'",
            "example": "Amakoome ataano — Fifty (Lit. 'five tens')"
          },
          {
            "target": "Egana / Rigana",
            "source": "Hundred",
            "pronunciation": "eh-gah-nah / ree-gah-nah",
            "hint": "Numeral 100 (also Emerongo ekomi)",
            "example": "Egana / Rigana — Hundred (Numeral 100 (also Emerongo ekomi))"
          }
        ],
        "sentences": [
          {
            "target": "Omonto oyo n'omuya mono.",
            "source": "This person is very good."
          },
          {
            "target": "Abana bonsi bagenda esukuru.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Amache aya n'amaya okonywa.",
            "source": "This water is good for drinking."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emwe / Eyemo\" mean in English?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
            ],
            "hint": "Numeral 1 (Adjective stem: -mo)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ebere / Ibere\" mean in English?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
              "One"
            ],
            "hint": "Numeral 2 (Adjective stem: -bere)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Isatu / Etato\" mean in English?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Numeral 3 (Adjective stem: -tatu / -shato)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Kisii (Ekegusii)?",
            "correctAnswer": "Isatu / Etato",
            "options": [
              "Isatu / Etato",
              "Emwe / Eyemo",
              "Ebere / Ibere",
              "Inye / Ene"
            ],
            "hint": "ee-sah-too / eh-tah-toh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Kisii (Ekegusii)?",
            "correctAnswer": "Inye / Ene",
            "options": [
              "Emwe / Eyemo",
              "Ebere / Ibere",
              "Isatu / Etato",
              "Inye / Ene"
            ],
            "hint": "een-yeh / eh-neh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Five\" in Kisii (Ekegusii)?",
            "correctAnswer": "Isaano / Etano",
            "options": [
              "Ebere / Ibere",
              "Isatu / Etato",
              "Isaano / Etano",
              "Emwe / Eyemo"
            ],
            "hint": "ee-sah-ah-noh / eh-tah-noh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kisii (Ekegusii) terms with their English meanings:",
            "correctAnswer": "Emwe / Eyemo: One, Ebere / Ibere: Two, Isatu / Etato: Three, Inye / Ene: Four",
            "pairs": [
              {
                "left": "Emwe / Eyemo",
                "right": "One"
              },
              {
                "left": "Ebere / Ibere",
                "right": "Two"
              },
              {
                "left": "Isatu / Etato",
                "right": "Three"
              },
              {
                "left": "Inye / Ene",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"One\" in Kisii (Ekegusii).",
            "correctAnswer": "Emwe / Eyemo",
            "options": [
              "Emwe / Eyemo",
              "Ebere / Ibere",
              "Isatu / Etato",
              "Inye / Ene"
            ],
            "hint": "ehm-weh / eh-yeh-moh"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-7-family",
    "title": "Unit 7: Family & Kinship",
    "description": "Comprehensive Kisii (Ekegusii) curriculum for Family & Kinship, vetted from Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
    "icon": "Users",
    "skills": [
      {
        "id": "kisii-exp-family",
        "title": "Family & Kinship (Part 1)",
        "icon": "Users",
        "description": "Master Kisii (Ekegusii) family & kinship vocabulary and expressions from verified historical sources.",
        "tips": "In this Kisii (Ekegusii) skill covering Family & Kinship, pay special attention to pronunciation and morphological prefixes/suffixes: 'So / Iso' (Your father), 'Ise' (His/her father), 'Baba / Baaba' (My mother), 'Nyoko' (Your mother).",
        "culturalNote": "Source attribution: Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
        "words": [
          {
            "target": "So / Iso",
            "source": "Your father",
            "pronunciation": "soh / ee-soh",
            "hint": "Your father (2nd person singular kinship)",
            "example": "So / Iso — Your father (Your father (2nd person singular kinship))"
          },
          {
            "target": "Ise",
            "source": "His/her father",
            "pronunciation": "ee-seh",
            "hint": "His or her father (3rd person singular kinship)",
            "example": "Ise — His/her father (His or her father (3rd person singular kinship))"
          },
          {
            "target": "Baba / Baaba",
            "source": "My mother",
            "pronunciation": "bah-bah / bah-ah-bah",
            "hint": "My mother (Whiteley Ch. 48, p. 90)",
            "example": "Baba / Baaba — My mother (My mother (Whiteley Ch. 48, p. 90))"
          },
          {
            "target": "Nyoko",
            "source": "Your mother",
            "pronunciation": "nyoh-koh",
            "hint": "Your mother (2nd person maternal kinship)",
            "example": "Nyoko — Your mother (Your mother (2nd person maternal kinship))"
          },
          {
            "target": "Ngina / Ng'ina",
            "source": "His/her mother",
            "pronunciation": "ngee-nah / ng-ee-nah",
            "hint": "His or her mother (3rd person maternal kinship)",
            "example": "Ngina / Ng'ina — His/her mother (His or her mother (3rd person maternal kinship))"
          },
          {
            "target": "Omongina / Omong'ina",
            "source": "Elderly woman",
            "pronunciation": "oh-moh-ngee-nah",
            "hint": "Revered elder woman (Class 1/2, pl: Abang'ina)",
            "example": "Omongina / Omong'ina — Elderly woman (Revered elder woman (Class 1/2, pl: Abang'ina))"
          },
          {
            "target": "Omochakoro / Omochokoro",
            "source": "Ancestor / Grandchild",
            "pronunciation": "oh-moh-chah-koh-roh",
            "hint": "Lineage forebear, ancestor, or grandchild (Class 1/2, pl: Abachokoro)",
            "example": "Omochakoro / Omochokoro — Ancestor / Grandchild (Lineage forebear, ancestor, or grandchild (Class 1/2, pl: Abachokoro))"
          },
          {
            "target": "Mwana'nto / Momura ominto",
            "source": "Brother / Sister (Sibling)",
            "pronunciation": "mwah-nah-n-toh / moh-moo-rah oh-meen-toh",
            "hint": "'Mwana'nto' = sibling; 'Momura ominto' = my/our brother",
            "example": "Mwana'nto / Momura ominto — Brother / Sister (Sibling) ('Mwana'nto' = sibling; 'Momura ominto' = my/our brother)"
          },
          {
            "target": "Moiseke ominto",
            "source": "Sister (my/our sister)",
            "pronunciation": "moh-ee-seh-keh oh-meen-toh",
            "hint": "My/our unmarried sister (for married sister: Mosubaati ominto)",
            "example": "Moiseke ominto — Sister (my/our sister) (My/our unmarried sister (for married sister: Mosubaati ominto))"
          },
          {
            "target": "Omoisia",
            "source": "Young boy",
            "pronunciation": "oh-moh-ee-see-ah",
            "hint": "Young uncircumcised boy (Class 1/2, pl: Abaisia)",
            "example": "Omoisia — Young boy (Young uncircumcised boy (Class 1/2, pl: Abaisia))"
          },
          {
            "target": "Sokoro",
            "source": "Grandfather",
            "pronunciation": "soh-koh-roh",
            "hint": "Grandfather on either side (pl: Chisokoro)",
            "example": "Sokoro — Grandfather (Grandfather on either side (pl: Chisokoro))"
          },
          {
            "target": "Maagokoro",
            "source": "Grandmother",
            "pronunciation": "mah-ah-goh-koh-roh",
            "hint": "Grandmother on either side (pl: Abamaagokoro)",
            "example": "Maagokoro — Grandmother (Grandmother on either side (pl: Abamaagokoro))"
          },
          {
            "target": "Maame",
            "source": "Maternal uncle",
            "pronunciation": "mah-ah-meh",
            "hint": "Mother's brother (Class 1/2, pl: Abamaame)",
            "example": "Maame — Maternal uncle (Mother's brother (Class 1/2, pl: Abamaame))"
          },
          {
            "target": "Omosaani / Osomwabo",
            "source": "Friend / Comrade",
            "pronunciation": "oh-moh-sah-ah-nee / oh-sohm-wah-boh",
            "hint": "Friend or trusted companion (Class 1/2)",
            "example": "Omosaani / Osomwabo — Friend / Comrade (Friend or trusted companion (Class 1/2))"
          }
        ],
        "sentences": [
          {
            "target": "Omonto oyo n'omuya mono.",
            "source": "This person is very good."
          },
          {
            "target": "Abana bonsi bagenda esukuru.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Amache aya n'amaya okonywa.",
            "source": "This water is good for drinking."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"So / Iso\" mean in English?",
            "correctAnswer": "Your father",
            "options": [
              "His/her father",
              "My mother",
              "Your mother",
              "Your father"
            ],
            "hint": "Your father (2nd person singular kinship)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ise\" mean in English?",
            "correctAnswer": "His/her father",
            "options": [
              "My mother",
              "Your mother",
              "His/her father",
              "Your father"
            ],
            "hint": "His or her father (3rd person singular kinship)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Baba / Baaba\" mean in English?",
            "correctAnswer": "My mother",
            "options": [
              "Your mother",
              "My mother",
              "Your father",
              "His/her father"
            ],
            "hint": "My mother (Whiteley Ch. 48, p. 90)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"My mother\" in Kisii (Ekegusii)?",
            "correctAnswer": "Baba / Baaba",
            "options": [
              "Baba / Baaba",
              "So / Iso",
              "Ise",
              "Nyoko"
            ],
            "hint": "bah-bah / bah-ah-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Your mother\" in Kisii (Ekegusii)?",
            "correctAnswer": "Nyoko",
            "options": [
              "So / Iso",
              "Ise",
              "Baba / Baaba",
              "Nyoko"
            ],
            "hint": "nyoh-koh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"His/her mother\" in Kisii (Ekegusii)?",
            "correctAnswer": "Ngina / Ng'ina",
            "options": [
              "Ise",
              "Baba / Baaba",
              "Ngina / Ng'ina",
              "So / Iso"
            ],
            "hint": "ngee-nah / ng-ee-nah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kisii (Ekegusii) terms with their English meanings:",
            "correctAnswer": "So / Iso: Your father, Ise: His/her father, Baba / Baaba: My mother, Nyoko: Your mother",
            "pairs": [
              {
                "left": "So / Iso",
                "right": "Your father"
              },
              {
                "left": "Ise",
                "right": "His/her father"
              },
              {
                "left": "Baba / Baaba",
                "right": "My mother"
              },
              {
                "left": "Nyoko",
                "right": "Your mother"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Your father\" in Kisii (Ekegusii).",
            "correctAnswer": "So / Iso",
            "options": [
              "So / Iso",
              "Ise",
              "Baba / Baaba",
              "Nyoko"
            ],
            "hint": "soh / ee-soh"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-8-nature",
    "title": "Unit 8: Nature & Environment",
    "description": "Comprehensive Kisii (Ekegusii) curriculum for Nature & Environment, vetted from Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
    "icon": "Sun",
    "skills": [
      {
        "id": "kisii-exp-nature",
        "title": "Nature & Environment (Part 1)",
        "icon": "Sun",
        "description": "Master Kisii (Ekegusii) nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Kisii (Ekegusii) skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Erioba / Omobaso' (Sun / Sunlight), 'Amache / Amaache' (Water), 'Embura / Enyaroka' (Rain), 'Emondo / Rire' (Cloud).",
        "culturalNote": "Source attribution: Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
        "words": [
          {
            "target": "Erioba / Omobaso",
            "source": "Sun / Sunlight",
            "pronunciation": "eh-ree-oh-bah / oh-moh-bah-soh",
            "hint": "The sun or daylight (Class 5/6 Rioba; Class 3/4 Omobaso)",
            "example": "Erioba / Omobaso — Sun / Sunlight (The sun or daylight (Class 5/6 Rioba; Class 3/4 Omobaso))"
          },
          {
            "target": "Amache / Amaache",
            "source": "Water",
            "pronunciation": "ah-mah-cheh / ah-mah-ah-cheh",
            "hint": "Water (Class 6 plural liquid noun)",
            "example": "Amache / Amaache — Water (Water (Class 6 plural liquid noun))"
          },
          {
            "target": "Embura / Enyaroka",
            "source": "Rain",
            "pronunciation": "ehm-boo-rah / ehn-yah-roh-kah",
            "hint": "Rain (Class 9/10; verb: -twa = to rain)",
            "example": "Embura / Enyaroka — Rain (Rain (Class 9/10; verb: -twa = to rain))"
          },
          {
            "target": "Emondo / Rire",
            "source": "Cloud",
            "pronunciation": "eh-mohn-doh / ree-reh",
            "hint": "Cloud in the sky (Class 5/6 Rire, pl: Amare)",
            "example": "Emondo / Rire — Cloud (Cloud in the sky (Class 5/6 Rire, pl: Amare))"
          },
          {
            "target": "Egetutu / Orosaana",
            "source": "Forest / Woodland",
            "pronunciation": "eh-geh-too-too / oh-roh-sah-ah-nah",
            "hint": "Forest or wooded area (Class 7/8 Egetutu; Class 11/10a Orosaana; also Rinani)",
            "example": "Egetutu / Orosaana — Forest / Woodland (Forest or wooded area (Class 7/8 Egetutu; Class 11/10a Orosaana; also Rinani))"
          },
          {
            "target": "Oroche / Orooche",
            "source": "River",
            "pronunciation": "oh-roh-cheh / oh-roh-oh-cheh",
            "hint": "River or stream (Class 11/10a, pl: Chindoche)",
            "example": "Oroche / Orooche — River (River or stream (Class 11/10a, pl: Chindoche))"
          },
          {
            "target": "Emotwe / Egetunwa",
            "source": "Mountain / Hill",
            "pronunciation": "eh-moh-tweh / eh-geh-toon-wah",
            "hint": "Hill or mountain (Class 7/8 Egetunwa, pl: Ebitunwa)",
            "example": "Emotwe / Egetunwa — Mountain / Hill (Hill or mountain (Class 7/8 Egetunwa, pl: Ebitunwa))"
          },
          {
            "target": "Omorero",
            "source": "Fire",
            "pronunciation": "oh-moh-reh-roh",
            "hint": "Fire or flames (Class 3/4, pl: Emerero)",
            "example": "Omorero — Fire (Fire or flames (Class 3/4, pl: Emerero))"
          },
          {
            "target": "Omotienyi",
            "source": "Moon / Month",
            "pronunciation": "oh-moh-tee-ehn-yee",
            "hint": "Moon or calendar month (Class 3/4, pl: Emetienyi)",
            "example": "Omotienyi — Moon / Month (Moon or calendar month (Class 3/4, pl: Emetienyi))"
          },
          {
            "target": "Obonyansi",
            "source": "Grass",
            "pronunciation": "oh-boh-nyahn-see",
            "hint": "Grass or pasture (Class 14/6; Dry grass: Rise)",
            "example": "Obonyansi — Grass (Grass or pasture (Class 14/6; Dry grass: Rise))"
          },
          {
            "target": "Embeo",
            "source": "Wind",
            "pronunciation": "ehm-beh-oh",
            "hint": "Wind or cool breeze (Class 9/10)",
            "example": "Embeo — Wind (Wind or cool breeze (Class 9/10))"
          },
          {
            "target": "Enyancha",
            "source": "Lake / Sea",
            "pronunciation": "ehn-yahn-chah",
            "hint": "Lake Victoria or open sea (Class 9/10)",
            "example": "Enyancha — Lake / Sea (Lake Victoria or open sea (Class 9/10))"
          }
        ],
        "sentences": [
          {
            "target": "Omonto oyo n'omuya mono.",
            "source": "This person is very good."
          },
          {
            "target": "Abana bonsi bagenda esukuru.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Amache aya n'amaya okonywa.",
            "source": "This water is good for drinking."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Erioba / Omobaso\" mean in English?",
            "correctAnswer": "Sun / Sunlight",
            "options": [
              "Water",
              "Rain",
              "Cloud",
              "Sun / Sunlight"
            ],
            "hint": "The sun or daylight (Class 5/6 Rioba; Class 3/4 Omobaso)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Amache / Amaache\" mean in English?",
            "correctAnswer": "Water",
            "options": [
              "Rain",
              "Cloud",
              "Water",
              "Sun / Sunlight"
            ],
            "hint": "Water (Class 6 plural liquid noun)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Embura / Enyaroka\" mean in English?",
            "correctAnswer": "Rain",
            "options": [
              "Cloud",
              "Rain",
              "Sun / Sunlight",
              "Water"
            ],
            "hint": "Rain (Class 9/10; verb: -twa = to rain)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Rain\" in Kisii (Ekegusii)?",
            "correctAnswer": "Embura / Enyaroka",
            "options": [
              "Embura / Enyaroka",
              "Erioba / Omobaso",
              "Amache / Amaache",
              "Emondo / Rire"
            ],
            "hint": "ehm-boo-rah / ehn-yah-roh-kah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cloud\" in Kisii (Ekegusii)?",
            "correctAnswer": "Emondo / Rire",
            "options": [
              "Erioba / Omobaso",
              "Amache / Amaache",
              "Embura / Enyaroka",
              "Emondo / Rire"
            ],
            "hint": "eh-mohn-doh / ree-reh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Forest / Woodland\" in Kisii (Ekegusii)?",
            "correctAnswer": "Egetutu / Orosaana",
            "options": [
              "Amache / Amaache",
              "Embura / Enyaroka",
              "Egetutu / Orosaana",
              "Erioba / Omobaso"
            ],
            "hint": "eh-geh-too-too / oh-roh-sah-ah-nah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kisii (Ekegusii) terms with their English meanings:",
            "correctAnswer": "Erioba / Omobaso: Sun / Sunlight, Amache / Amaache: Water, Embura / Enyaroka: Rain, Emondo / Rire: Cloud",
            "pairs": [
              {
                "left": "Erioba / Omobaso",
                "right": "Sun / Sunlight"
              },
              {
                "left": "Amache / Amaache",
                "right": "Water"
              },
              {
                "left": "Embura / Enyaroka",
                "right": "Rain"
              },
              {
                "left": "Emondo / Rire",
                "right": "Cloud"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Sun / Sunlight\" in Kisii (Ekegusii).",
            "correctAnswer": "Erioba / Omobaso",
            "options": [
              "Erioba / Omobaso",
              "Amache / Amaache",
              "Embura / Enyaroka",
              "Emondo / Rire"
            ],
            "hint": "eh-ree-oh-bah / oh-moh-bah-soh"
          }
        ]
      },
      {
        "id": "kisii-exp-nature-2",
        "title": "Nature & Environment (Part 2)",
        "icon": "Sun",
        "description": "Master Kisii (Ekegusii) nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Kisii (Ekegusii) skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Rigena' (Stone / Rock), 'Rituko' (Day / Daylight), 'Obotuko' (Night), 'Erioki' (Smoke).",
        "culturalNote": "Source attribution: Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
        "words": [
          {
            "target": "Rigena",
            "source": "Stone / Rock",
            "pronunciation": "ree-geh-nah",
            "hint": "Stone (Class 5/6, pl: Amagena; small pebble: Akagena)",
            "example": "Rigena — Stone / Rock (Stone (Class 5/6, pl: Amagena; small pebble: Akagena))"
          },
          {
            "target": "Rituko",
            "source": "Day / Daylight",
            "pronunciation": "ree-too-koh",
            "hint": "Day (Class 5/6, pl: Amatuko; daytime: Mobaso)",
            "example": "Rituko — Day / Daylight (Day (Class 5/6, pl: Amatuko; daytime: Mobaso))"
          },
          {
            "target": "Obotuko",
            "source": "Night",
            "pronunciation": "oh-boh-too-koh",
            "hint": "Night (Class 14/6; Botuko = during the night)",
            "example": "Obotuko — Night (Night (Class 14/6; Botuko = during the night))"
          },
          {
            "target": "Erioki",
            "source": "Smoke",
            "pronunciation": "eh-ree-oh-kee",
            "hint": "Smoke from fire (Class 5/6, pl: Amarioki)",
            "example": "Erioki — Smoke (Smoke from fire (Class 5/6, pl: Amarioki))"
          },
          {
            "target": "Omochanga / Omokenye",
            "source": "Sand",
            "pronunciation": "oh-moh-chahn-gah / oh-moh-keh-nyeh",
            "hint": "Sand (Class 3/4)",
            "example": "Omochanga / Omokenye — Sand (Sand (Class 3/4))"
          },
          {
            "target": "Engoro / Nyasae",
            "source": "God (Supreme Creator)",
            "pronunciation": "ehn-goh-roh / nyah-sah-eh",
            "hint": "Supreme Deity (Engoro is classical Gusii; Nyasae assimilated)",
            "example": "Engoro / Nyasae — God (Supreme Creator) (Supreme Deity (Engoro is classical Gusii; Nyasae assimilated))"
          }
        ],
        "sentences": [
          {
            "target": "Amache aya n'amaya okonywa.",
            "source": "This water is good for drinking."
          },
          {
            "target": "Chiombe chionsi chiri ase obori.",
            "source": "All the cattle are in the pasture."
          },
          {
            "target": "Omogondo oito omenyete egetamo.",
            "source": "Our farm is situated near the river."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Rigena\" mean in English?",
            "correctAnswer": "Stone / Rock",
            "options": [
              "Day / Daylight",
              "Night",
              "Smoke",
              "Stone / Rock"
            ],
            "hint": "Stone (Class 5/6, pl: Amagena; small pebble: Akagena)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Rituko\" mean in English?",
            "correctAnswer": "Day / Daylight",
            "options": [
              "Night",
              "Smoke",
              "Day / Daylight",
              "Stone / Rock"
            ],
            "hint": "Day (Class 5/6, pl: Amatuko; daytime: Mobaso)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Obotuko\" mean in English?",
            "correctAnswer": "Night",
            "options": [
              "Smoke",
              "Night",
              "Stone / Rock",
              "Day / Daylight"
            ],
            "hint": "Night (Class 14/6; Botuko = during the night)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Night\" in Kisii (Ekegusii)?",
            "correctAnswer": "Obotuko",
            "options": [
              "Obotuko",
              "Rigena",
              "Rituko",
              "Erioki"
            ],
            "hint": "oh-boh-too-koh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Smoke\" in Kisii (Ekegusii)?",
            "correctAnswer": "Erioki",
            "options": [
              "Rigena",
              "Rituko",
              "Obotuko",
              "Erioki"
            ],
            "hint": "eh-ree-oh-kee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sand\" in Kisii (Ekegusii)?",
            "correctAnswer": "Omochanga / Omokenye",
            "options": [
              "Rituko",
              "Obotuko",
              "Omochanga / Omokenye",
              "Rigena"
            ],
            "hint": "oh-moh-chahn-gah / oh-moh-keh-nyeh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kisii (Ekegusii) terms with their English meanings:",
            "correctAnswer": "Rigena: Stone / Rock, Rituko: Day / Daylight, Obotuko: Night, Erioki: Smoke",
            "pairs": [
              {
                "left": "Rigena",
                "right": "Stone / Rock"
              },
              {
                "left": "Rituko",
                "right": "Day / Daylight"
              },
              {
                "left": "Obotuko",
                "right": "Night"
              },
              {
                "left": "Erioki",
                "right": "Smoke"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Stone / Rock\" in Kisii (Ekegusii).",
            "correctAnswer": "Rigena",
            "options": [
              "Rigena",
              "Rituko",
              "Obotuko",
              "Erioki"
            ],
            "hint": "ree-geh-nah"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-9-animals",
    "title": "Unit 9: Animals & Wildlife",
    "description": "Comprehensive Kisii (Ekegusii) curriculum for Animals & Wildlife, vetted from Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
    "icon": "Compass",
    "skills": [
      {
        "id": "kisii-exp-animals",
        "title": "Animals & Wildlife (Part 1)",
        "icon": "Compass",
        "description": "Master Kisii (Ekegusii) animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Kisii (Ekegusii) skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Eng'ombe' (Cow / Cattle), 'Embene / Embori' (Goat), 'Embwa / Ese' (Dog), 'Etuko / Eng'uko' (Mole / Badger).",
        "culturalNote": "Source attribution: Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
        "words": [
          {
            "target": "Eng'ombe",
            "source": "Cow / Cattle",
            "pronunciation": "ehng-ohm-beh",
            "hint": "Cow or cattle (Class 9/10, pl: Ching'ombe)",
            "example": "Eng'ombe — Cow / Cattle (Cow or cattle (Class 9/10, pl: Ching'ombe))"
          },
          {
            "target": "Embene / Embori",
            "source": "Goat",
            "pronunciation": "ehm-beh-neh / ehm-boh-ree",
            "hint": "Goat (Class 9/10, pl: Chimbene / Chimbori)",
            "example": "Embene / Embori — Goat (Goat (Class 9/10, pl: Chimbene / Chimbori))"
          },
          {
            "target": "Embwa / Ese",
            "source": "Dog",
            "pronunciation": "ehm-bwah / eh-seh",
            "hint": "Domestic dog (Class 9/10, pl: Chise)",
            "example": "Embwa / Ese — Dog (Domestic dog (Class 9/10, pl: Chise))"
          },
          {
            "target": "Etuko / Eng'uko",
            "source": "Mole / Badger",
            "pronunciation": "eh-too-koh / ehng-oo-koh",
            "hint": "Mole or burrowing creature (featured in Gusii folk stories, Class 9/10)",
            "example": "Etuko / Eng'uko — Mole / Badger (Mole or burrowing creature (featured in Gusii folk stories, Class 9/10))"
          },
          {
            "target": "Engwe",
            "source": "Leopard",
            "pronunciation": "ehn-gweh",
            "hint": "Leopard (Class 9/10, pl: Chingwe)",
            "example": "Engwe — Leopard (Leopard (Class 9/10, pl: Chingwe))"
          },
          {
            "target": "Entaare / Endo",
            "source": "Lion",
            "pronunciation": "ehn-tah-ah-reh / ehn-doh",
            "hint": "Lion (Class 9/10, pl: Chintaare / Chindo)",
            "example": "Entaare / Endo — Lion (Lion (Class 9/10, pl: Chintaare / Chindo))"
          },
          {
            "target": "Enchogu",
            "source": "Elephant",
            "pronunciation": "ehn-choh-goo",
            "hint": "Elephant (Class 9/10, pl: Chinchogu)",
            "example": "Enchogu — Elephant (Elephant (Class 9/10, pl: Chinchogu))"
          },
          {
            "target": "Eng'ondi / Endaiga",
            "source": "Sheep",
            "pronunciation": "ehng-ohn-dee / ehn-dah-ee-gah",
            "hint": "Sheep (Class 9/10, pl: Ching'ondi / Chindaiga)",
            "example": "Eng'ondi / Endaiga — Sheep (Sheep (Class 9/10, pl: Ching'ondi / Chindaiga))"
          },
          {
            "target": "Emoori",
            "source": "Calf / Heifer",
            "pronunciation": "eh-moh-oh-ree",
            "hint": "Calf or young heifer (Class 9/10, pl: Chimoori)",
            "example": "Emoori — Calf / Heifer (Calf or young heifer (Class 9/10, pl: Chimoori))"
          },
          {
            "target": "Enyoni",
            "source": "Bird",
            "pronunciation": "ehn-yoh-nee",
            "hint": "Bird (Class 9/10, pl: Chinyoni)",
            "example": "Enyoni — Bird (Bird (Class 9/10, pl: Chinyoni))"
          },
          {
            "target": "Enswe",
            "source": "Fish",
            "pronunciation": "ehn-sweh",
            "hint": "Fish (Class 9/10, pl: Chinswe)",
            "example": "Enswe — Fish (Fish (Class 9/10, pl: Chinswe))"
          },
          {
            "target": "Egesusu",
            "source": "Hare",
            "pronunciation": "eh-geh-soo-soo",
            "hint": "Hare (Class 7/8, pl: Ebisusu)",
            "example": "Egesusu — Hare (Hare (Class 7/8, pl: Ebisusu))"
          },
          {
            "target": "Eeeri",
            "source": "Bull",
            "pronunciation": "eh-eh-eh-ree",
            "hint": "Bull (Class 9/10, pl: Chieeri)",
            "example": "Eeeri — Bull (Bull (Class 9/10, pl: Chieeri))"
          },
          {
            "target": "Eng'iti",
            "source": "Wild beast / Snake",
            "pronunciation": "ehng-ee-tee",
            "hint": "General term for wild animal or snake (Class 9/10, pl: Ching'iti)",
            "example": "Eng'iti — Wild beast / Snake (General term for wild animal or snake (Class 9/10, pl: Ching'iti))"
          }
        ],
        "sentences": [
          {
            "target": "Omonto oyo n'omuya mono.",
            "source": "This person is very good."
          },
          {
            "target": "Abana bonsi bagenda esukuru.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Amache aya n'amaya okonywa.",
            "source": "This water is good for drinking."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eng'ombe\" mean in English?",
            "correctAnswer": "Cow / Cattle",
            "options": [
              "Goat",
              "Dog",
              "Mole / Badger",
              "Cow / Cattle"
            ],
            "hint": "Cow or cattle (Class 9/10, pl: Ching'ombe)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Embene / Embori\" mean in English?",
            "correctAnswer": "Goat",
            "options": [
              "Dog",
              "Mole / Badger",
              "Goat",
              "Cow / Cattle"
            ],
            "hint": "Goat (Class 9/10, pl: Chimbene / Chimbori)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Embwa / Ese\" mean in English?",
            "correctAnswer": "Dog",
            "options": [
              "Mole / Badger",
              "Dog",
              "Cow / Cattle",
              "Goat"
            ],
            "hint": "Domestic dog (Class 9/10, pl: Chise)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Dog\" in Kisii (Ekegusii)?",
            "correctAnswer": "Embwa / Ese",
            "options": [
              "Embwa / Ese",
              "Eng'ombe",
              "Embene / Embori",
              "Etuko / Eng'uko"
            ],
            "hint": "ehm-bwah / eh-seh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mole / Badger\" in Kisii (Ekegusii)?",
            "correctAnswer": "Etuko / Eng'uko",
            "options": [
              "Eng'ombe",
              "Embene / Embori",
              "Embwa / Ese",
              "Etuko / Eng'uko"
            ],
            "hint": "eh-too-koh / ehng-oo-koh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leopard\" in Kisii (Ekegusii)?",
            "correctAnswer": "Engwe",
            "options": [
              "Embene / Embori",
              "Embwa / Ese",
              "Engwe",
              "Eng'ombe"
            ],
            "hint": "ehn-gweh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kisii (Ekegusii) terms with their English meanings:",
            "correctAnswer": "Eng'ombe: Cow / Cattle, Embene / Embori: Goat, Embwa / Ese: Dog, Etuko / Eng'uko: Mole / Badger",
            "pairs": [
              {
                "left": "Eng'ombe",
                "right": "Cow / Cattle"
              },
              {
                "left": "Embene / Embori",
                "right": "Goat"
              },
              {
                "left": "Embwa / Ese",
                "right": "Dog"
              },
              {
                "left": "Etuko / Eng'uko",
                "right": "Mole / Badger"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Cow / Cattle\" in Kisii (Ekegusii).",
            "correctAnswer": "Eng'ombe",
            "options": [
              "Eng'ombe",
              "Embene / Embori",
              "Embwa / Ese",
              "Etuko / Eng'uko"
            ],
            "hint": "ehng-ohm-beh"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-10-food",
    "title": "Unit 10: Food & Household",
    "description": "Comprehensive Kisii (Ekegusii) curriculum for Food & Household, vetted from Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
    "icon": "Utensils",
    "skills": [
      {
        "id": "kisii-exp-food",
        "title": "Food & Household (Part 1)",
        "icon": "Utensils",
        "description": "Master Kisii (Ekegusii) food & household vocabulary and expressions from verified historical sources.",
        "tips": "In this Kisii (Ekegusii) skill covering Food & Household, pay special attention to pronunciation and morphological prefixes/suffixes: 'Obokima' (Ugali / Porridge), 'Amabere / Amabeere' (Milk), 'Enyama' (Meat), 'Chindagera / Endaagera' (Food).",
        "culturalNote": "Source attribution: Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
        "words": [
          {
            "target": "Obokima",
            "source": "Ugali / Porridge",
            "pronunciation": "oh-boh-kee-mah",
            "hint": "Highland staple ugali / stiff grain porridge (Class 14/6)",
            "example": "Obokima — Ugali / Porridge (Highland staple ugali / stiff grain porridge (Class 14/6))"
          },
          {
            "target": "Amabere / Amabeere",
            "source": "Milk",
            "pronunciation": "ah-mah-beh-reh / ah-mah-beh-eh-reh",
            "hint": "Fresh cow milk (Class 6 plural liquid noun)",
            "example": "Amabere / Amabeere — Milk (Fresh cow milk (Class 6 plural liquid noun))"
          },
          {
            "target": "Enyama",
            "source": "Meat",
            "pronunciation": "ehn-yah-mah",
            "hint": "Meat (Class 9/10, pl: Chinyama)",
            "example": "Enyama — Meat (Meat (Class 9/10, pl: Chinyama))"
          },
          {
            "target": "Chindagera / Endaagera",
            "source": "Food",
            "pronunciation": "cheen-dah-geh-rah / ehn-dah-ah-geh-rah",
            "hint": "Food or sustenance (Class 9/10, derived from verb -raagera)",
            "example": "Chindagera / Endaagera — Food (Food or sustenance (Class 9/10, derived from verb -raagera))"
          },
          {
            "target": "Ritooke / Ritoke",
            "source": "Banana / Matoke",
            "pronunciation": "ree-toh-oh-keh / ree-toh-keh",
            "hint": "Banana or cooking plantain (Class 5/6, pl: Amatooke)",
            "example": "Ritooke / Ritoke — Banana / Matoke (Banana or cooking plantain (Class 5/6, pl: Amatooke))"
          },
          {
            "target": "Egetuuma / Ebando",
            "source": "Maize / Corn",
            "pronunciation": "eh-geh-too-oo-mah / eh-bahn-doh",
            "hint": "Maize cobs or grain (Class 7/8 Egetuuma; Class 9/10 Ebando)",
            "example": "Egetuuma / Ebando — Maize / Corn (Maize cobs or grain (Class 7/8 Egetuuma; Class 9/10 Ebando))"
          },
          {
            "target": "Ching'ende",
            "source": "Beans",
            "pronunciation": "cheen-gehn-deh",
            "hint": "Cooked or harvested beans (Class 10 plural of Eng'ende)",
            "example": "Ching'ende — Beans (Cooked or harvested beans (Class 10 plural of Eng'ende))"
          },
          {
            "target": "Enyeni / Nyeni",
            "source": "Vegetables / Greens",
            "pronunciation": "ehn-yeh-nee / nyeh-nee",
            "hint": "Edible green vegetables (Class 9/10, pl: Chinyeni; also Orweni)",
            "example": "Enyeni / Nyeni — Vegetables / Greens (Edible green vegetables (Class 9/10, pl: Chinyeni; also Orweni))"
          },
          {
            "target": "Obosie",
            "source": "Flour",
            "pronunciation": "oh-boh-see-eh",
            "hint": "Milled flour for preparing porridge (Class 14/6)",
            "example": "Obosie — Flour (Milled flour for preparing porridge (Class 14/6))"
          },
          {
            "target": "Obori",
            "source": "Millet",
            "pronunciation": "oh-boh-ree",
            "hint": "Bulrush millet, traditional ancestral grain (Class 14)",
            "example": "Obori — Millet (Bulrush millet, traditional ancestral grain (Class 14))"
          },
          {
            "target": "Amaemba / Riemba",
            "source": "Sorghum",
            "pronunciation": "ah-mah-ehm-bah / ree-ehm-bah",
            "hint": "Sorghum grain (Class 5/6, usually plural Amaemba)",
            "example": "Amaemba / Riemba — Sorghum (Sorghum grain (Class 5/6, usually plural Amaemba))"
          },
          {
            "target": "Omoonyo",
            "source": "Salt",
            "pronunciation": "oh-moh-ohn-yoh",
            "hint": "Salt for seasoning (Class 3/4)",
            "example": "Omoonyo — Salt (Salt for seasoning (Class 3/4))"
          },
          {
            "target": "Amaguta",
            "source": "Cooking fat / Oil",
            "pronunciation": "ah-mah-goo-tah",
            "hint": "Fat, butter, or cooking oil (Class 6)",
            "example": "Amaguta — Cooking fat / Oil (Fat, butter, or cooking oil (Class 6))"
          },
          {
            "target": "Omwogo",
            "source": "Cassava",
            "pronunciation": "ohm-woh-goh",
            "hint": "Cassava tuber (Class 3/4, pl: Emiogo)",
            "example": "Omwogo — Cassava (Cassava tuber (Class 3/4, pl: Emiogo))"
          },
          {
            "target": "Erongoori",
            "source": "Gruel / Porridge",
            "pronunciation": "eh-rohn-goh-oh-ree",
            "hint": "Thin gruel / porridge drink (Class 9/10)",
            "example": "Erongoori — Gruel / Porridge (Thin gruel / porridge drink (Class 9/10))"
          },
          {
            "target": "Rigena ri'engoko",
            "source": "Egg",
            "pronunciation": "ree-geh-nah ree-ehn-goh-koh",
            "hint": "Egg (lit. 'stone of a chicken', Class 5/6, pl: Amagena y'engoko)",
            "example": "Rigena ri'engoko — Egg (Egg (lit. 'stone of a chicken', Class 5/6, pl: Amagena y'engoko))"
          }
        ],
        "sentences": [
          {
            "target": "Omonto oyo n'omuya mono.",
            "source": "This person is very good."
          },
          {
            "target": "Abana bonsi bagenda esukuru.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Amache aya n'amaya okonywa.",
            "source": "This water is good for drinking."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Obokima\" mean in English?",
            "correctAnswer": "Ugali / Porridge",
            "options": [
              "Milk",
              "Meat",
              "Food",
              "Ugali / Porridge"
            ],
            "hint": "Highland staple ugali / stiff grain porridge (Class 14/6)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Amabere / Amabeere\" mean in English?",
            "correctAnswer": "Milk",
            "options": [
              "Meat",
              "Food",
              "Milk",
              "Ugali / Porridge"
            ],
            "hint": "Fresh cow milk (Class 6 plural liquid noun)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Enyama\" mean in English?",
            "correctAnswer": "Meat",
            "options": [
              "Food",
              "Meat",
              "Ugali / Porridge",
              "Milk"
            ],
            "hint": "Meat (Class 9/10, pl: Chinyama)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Meat\" in Kisii (Ekegusii)?",
            "correctAnswer": "Enyama",
            "options": [
              "Enyama",
              "Obokima",
              "Amabere / Amabeere",
              "Chindagera / Endaagera"
            ],
            "hint": "ehn-yah-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Food\" in Kisii (Ekegusii)?",
            "correctAnswer": "Chindagera / Endaagera",
            "options": [
              "Obokima",
              "Amabere / Amabeere",
              "Enyama",
              "Chindagera / Endaagera"
            ],
            "hint": "cheen-dah-geh-rah / ehn-dah-ah-geh-rah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Banana / Matoke\" in Kisii (Ekegusii)?",
            "correctAnswer": "Ritooke / Ritoke",
            "options": [
              "Amabere / Amabeere",
              "Enyama",
              "Ritooke / Ritoke",
              "Obokima"
            ],
            "hint": "ree-toh-oh-keh / ree-toh-keh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kisii (Ekegusii) terms with their English meanings:",
            "correctAnswer": "Obokima: Ugali / Porridge, Amabere / Amabeere: Milk, Enyama: Meat, Chindagera / Endaagera: Food",
            "pairs": [
              {
                "left": "Obokima",
                "right": "Ugali / Porridge"
              },
              {
                "left": "Amabere / Amabeere",
                "right": "Milk"
              },
              {
                "left": "Enyama",
                "right": "Meat"
              },
              {
                "left": "Chindagera / Endaagera",
                "right": "Food"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Ugali / Porridge\" in Kisii (Ekegusii).",
            "correctAnswer": "Obokima",
            "options": [
              "Obokima",
              "Amabere / Amabeere",
              "Enyama",
              "Chindagera / Endaagera"
            ],
            "hint": "oh-boh-kee-mah"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-11-home",
    "title": "Unit 11: Home & Village",
    "description": "Comprehensive Kisii (Ekegusii) curriculum for Home & Village, vetted from Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
    "icon": "Home",
    "skills": [
      {
        "id": "kisii-exp-home",
        "title": "Home & Village",
        "icon": "Home",
        "description": "Master Kisii (Ekegusii) home & village vocabulary and expressions from verified historical sources.",
        "tips": "In this Kisii (Ekegusii) skill covering Home & Village, pay special attention to pronunciation and morphological prefixes/suffixes: 'Egetanda / Oborere' (Bed), 'Enyongo' (Cooking pot), 'Obokombe' (Hoe), 'Egetonga' (Basket).",
        "culturalNote": "Source attribution: Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
        "words": [
          {
            "target": "Egetanda / Oborere",
            "source": "Bed",
            "pronunciation": "eh-geh-tahn-dah / oh-boh-reh-reh",
            "hint": "Bed (Class 7/8 Egetanda; Class 14/6 Oborere)",
            "example": "Egetanda / Oborere — Bed (Bed (Class 7/8 Egetanda; Class 14/6 Oborere))"
          },
          {
            "target": "Enyongo",
            "source": "Cooking pot",
            "pronunciation": "ehn-yohn-goh",
            "hint": "Clay cooking pot (Class 9/10, pl: Chinyongo)",
            "example": "Enyongo — Cooking pot (Clay cooking pot (Class 9/10, pl: Chinyongo))"
          },
          {
            "target": "Obokombe",
            "source": "Hoe",
            "pronunciation": "oh-boh-kohm-beh",
            "hint": "Agricultural hoe (Class 14/6, pl: Amakombe)",
            "example": "Obokombe — Hoe (Agricultural hoe (Class 14/6, pl: Amakombe))"
          },
          {
            "target": "Egetonga",
            "source": "Basket",
            "pronunciation": "eh-geh-tohn-gah",
            "hint": "Storage or carrying basket (Class 7/8, pl: Ebitonga)",
            "example": "Egetonga — Basket (Storage or carrying basket (Class 7/8, pl: Ebitonga))"
          },
          {
            "target": "Ekerandi",
            "source": "Gourd / Calabash",
            "pronunciation": "eh-keh-rahn-dee",
            "hint": "Gourd container (Class 7/8, pl: Ebirandi)",
            "example": "Ekerandi — Gourd / Calabash (Gourd container (Class 7/8, pl: Ebirandi))"
          },
          {
            "target": "Omochie",
            "source": "Village / Homestead",
            "pronunciation": "oh-moh-chee-eh",
            "hint": "Village, homestead, or settlement (Class 3/4, pl: Emechie)",
            "example": "Omochie — Village / Homestead (Village, homestead, or settlement (Class 3/4, pl: Emechie))"
          },
          {
            "target": "Egesieri",
            "source": "Door (family entrance)",
            "pronunciation": "eh-geh-see-eh-ree",
            "hint": "Everyday entrance door (Class 7/8, pl: Ebisieri)",
            "example": "Egesieri — Door (family entrance) (Everyday entrance door (Class 7/8, pl: Ebisieri))"
          },
          {
            "target": "Orobago",
            "source": "Fence",
            "pronunciation": "oh-roh-bah-goh",
            "hint": "Garden or compound fence (Class 11/10a, pl: Chimbago)",
            "example": "Orobago — Fence (Garden or compound fence (Class 11/10a, pl: Chimbago))"
          },
          {
            "target": "Ekiage",
            "source": "Granary",
            "pronunciation": "eh-kee-ah-geh",
            "hint": "Cereal storage granary (Class 7/8, pl: Ebiage)",
            "example": "Ekiage — Granary (Cereal storage granary (Class 7/8, pl: Ebiage))"
          },
          {
            "target": "Oroko",
            "source": "Firewood",
            "pronunciation": "oh-roh-koh",
            "hint": "Stick of firewood (Class 11/10a, pl: Chinko)",
            "example": "Oroko — Firewood (Stick of firewood (Class 11/10a, pl: Chinko))"
          },
          {
            "target": "Ekeoreri",
            "source": "Courtyard",
            "pronunciation": "eh-keh-oh-reh-ree",
            "hint": "Homestead forecourt or courtyard (Class 7/8, pl: Ebioreri)",
            "example": "Ekeoreri — Courtyard (Homestead forecourt or courtyard (Class 7/8, pl: Ebioreri))"
          },
          {
            "target": "Obweeri",
            "source": "Cattle byre",
            "pronunciation": "oh-bweh-eh-ree",
            "hint": "Enclosure for livestock (Class 14/6, pl: Ameeri)",
            "example": "Obweeri — Cattle byre (Enclosure for livestock (Class 14/6, pl: Ameeri))"
          }
        ],
        "sentences": [
          {
            "target": "Omonto oyo n'omuya mono.",
            "source": "This person is very good."
          },
          {
            "target": "Abana bonsi bagenda esukuru.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Amache aya n'amaya okonywa.",
            "source": "This water is good for drinking."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Egetanda / Oborere\" mean in English?",
            "correctAnswer": "Bed",
            "options": [
              "Cooking pot",
              "Hoe",
              "Basket",
              "Bed"
            ],
            "hint": "Bed (Class 7/8 Egetanda; Class 14/6 Oborere)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Enyongo\" mean in English?",
            "correctAnswer": "Cooking pot",
            "options": [
              "Hoe",
              "Basket",
              "Cooking pot",
              "Bed"
            ],
            "hint": "Clay cooking pot (Class 9/10, pl: Chinyongo)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Obokombe\" mean in English?",
            "correctAnswer": "Hoe",
            "options": [
              "Basket",
              "Hoe",
              "Bed",
              "Cooking pot"
            ],
            "hint": "Agricultural hoe (Class 14/6, pl: Amakombe)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hoe\" in Kisii (Ekegusii)?",
            "correctAnswer": "Obokombe",
            "options": [
              "Obokombe",
              "Egetanda / Oborere",
              "Enyongo",
              "Egetonga"
            ],
            "hint": "oh-boh-kohm-beh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Basket\" in Kisii (Ekegusii)?",
            "correctAnswer": "Egetonga",
            "options": [
              "Egetanda / Oborere",
              "Enyongo",
              "Obokombe",
              "Egetonga"
            ],
            "hint": "eh-geh-tohn-gah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Gourd / Calabash\" in Kisii (Ekegusii)?",
            "correctAnswer": "Ekerandi",
            "options": [
              "Enyongo",
              "Obokombe",
              "Ekerandi",
              "Egetanda / Oborere"
            ],
            "hint": "eh-keh-rahn-dee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kisii (Ekegusii) terms with their English meanings:",
            "correctAnswer": "Egetanda / Oborere: Bed, Enyongo: Cooking pot, Obokombe: Hoe, Egetonga: Basket",
            "pairs": [
              {
                "left": "Egetanda / Oborere",
                "right": "Bed"
              },
              {
                "left": "Enyongo",
                "right": "Cooking pot"
              },
              {
                "left": "Obokombe",
                "right": "Hoe"
              },
              {
                "left": "Egetonga",
                "right": "Basket"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Bed\" in Kisii (Ekegusii).",
            "correctAnswer": "Egetanda / Oborere",
            "options": [
              "Egetanda / Oborere",
              "Enyongo",
              "Obokombe",
              "Egetonga"
            ],
            "hint": "eh-geh-tahn-dah / oh-boh-reh-reh"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-12-body",
    "title": "Unit 12: Body Parts",
    "description": "Comprehensive Kisii (Ekegusii) curriculum for Body Parts, vetted from Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
    "icon": "Heart",
    "skills": [
      {
        "id": "kisii-exp-body",
        "title": "Body Parts (Part 1)",
        "icon": "Heart",
        "description": "Master Kisii (Ekegusii) body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Kisii (Ekegusii) skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Omotwe' (Head), 'Omobere' (Body), 'Riiso' (Eye), 'Riino' (Tooth).",
        "culturalNote": "Source attribution: Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
        "words": [
          {
            "target": "Omotwe",
            "source": "Head",
            "pronunciation": "oh-moh-tweh",
            "hint": "Head (Class 3/4, pl: Emetwe)",
            "example": "Omotwe — Head (Head (Class 3/4, pl: Emetwe))"
          },
          {
            "target": "Omobere",
            "source": "Body",
            "pronunciation": "oh-moh-beh-reh",
            "hint": "Human body (Class 3/4, pl: Emebere)",
            "example": "Omobere — Body (Human body (Class 3/4, pl: Emebere))"
          },
          {
            "target": "Riiso",
            "source": "Eye",
            "pronunciation": "ree-ee-soh",
            "hint": "Eye (Class 5/6, pl: Amaiso)",
            "example": "Riiso — Eye (Eye (Class 5/6, pl: Amaiso))"
          },
          {
            "target": "Riino",
            "source": "Tooth",
            "pronunciation": "ree-ee-noh",
            "hint": "Tooth (Class 5/6, pl: Amaino)",
            "example": "Riino — Tooth (Tooth (Class 5/6, pl: Amaino))"
          },
          {
            "target": "Okutu / Ogoto",
            "source": "Ear",
            "pronunciation": "oh-koo-too / oh-goh-toh",
            "hint": "Ear (Class 15/6, pl: Amatwi / Amagoto)",
            "example": "Okutu / Ogoto — Ear (Ear (Class 15/6, pl: Amatwi / Amagoto))"
          },
          {
            "target": "Okoboko",
            "source": "Hand / Arm",
            "pronunciation": "oh-koh-boh-koh",
            "hint": "Arm or hand (Class 15/6, pl: Amaboko)",
            "example": "Okoboko — Hand / Arm (Arm or hand (Class 15/6, pl: Amaboko))"
          },
          {
            "target": "Okogoro",
            "source": "Leg / Foot",
            "pronunciation": "oh-koh-goh-roh",
            "hint": "Leg or foot (Class 15/6, pl: Amagoro)",
            "example": "Okogoro — Leg / Foot (Leg or foot (Class 15/6, pl: Amagoro))"
          },
          {
            "target": "Engoro",
            "source": "Heart / Conscience",
            "pronunciation": "ehn-goh-roh",
            "hint": "Heart or soul (Class 9/10)",
            "example": "Engoro — Heart / Conscience (Heart or soul (Class 9/10))"
          },
          {
            "target": "Amanyinga",
            "source": "Blood",
            "pronunciation": "ah-mah-nyeen-gah",
            "hint": "Blood (Class 6 plural)",
            "example": "Amanyinga — Blood (Blood (Class 6 plural))"
          },
          {
            "target": "Ekiara",
            "source": "Finger",
            "pronunciation": "eh-kee-ah-rah",
            "hint": "Finger (Class 7/8, pl: Ebiara)",
            "example": "Ekiara — Finger (Finger (Class 7/8, pl: Ebiara))"
          },
          {
            "target": "Obosio",
            "source": "Forehead",
            "pronunciation": "oh-boh-see-oh",
            "hint": "Forehead (Class 14/6)",
            "example": "Obosio — Forehead (Forehead (Class 14/6))"
          },
          {
            "target": "Ekiyeni",
            "source": "Face",
            "pronunciation": "eh-kee-yeh-nee",
            "hint": "Face, appearance (Class 7/8, pl: Ebiyeni)",
            "example": "Ekiyeni — Face (Face, appearance (Class 7/8, pl: Ebiyeni))"
          },
          {
            "target": "Riuga",
            "source": "Bone",
            "pronunciation": "ree-oo-gah",
            "hint": "Bone (Class 5/6, pl: Amauga)",
            "example": "Riuga — Bone (Bone (Class 5/6, pl: Amauga))"
          }
        ],
        "sentences": [
          {
            "target": "Omonto oyo n'omuya mono.",
            "source": "This person is very good."
          },
          {
            "target": "Abana bonsi bagenda esukuru.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Amache aya n'amaya okonywa.",
            "source": "This water is good for drinking."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Omotwe\" mean in English?",
            "correctAnswer": "Head",
            "options": [
              "Body",
              "Eye",
              "Tooth",
              "Head"
            ],
            "hint": "Head (Class 3/4, pl: Emetwe)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Omobere\" mean in English?",
            "correctAnswer": "Body",
            "options": [
              "Eye",
              "Tooth",
              "Body",
              "Head"
            ],
            "hint": "Human body (Class 3/4, pl: Emebere)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Riiso\" mean in English?",
            "correctAnswer": "Eye",
            "options": [
              "Tooth",
              "Eye",
              "Head",
              "Body"
            ],
            "hint": "Eye (Class 5/6, pl: Amaiso)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eye\" in Kisii (Ekegusii)?",
            "correctAnswer": "Riiso",
            "options": [
              "Riiso",
              "Omotwe",
              "Omobere",
              "Riino"
            ],
            "hint": "ree-ee-soh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tooth\" in Kisii (Ekegusii)?",
            "correctAnswer": "Riino",
            "options": [
              "Omotwe",
              "Omobere",
              "Riiso",
              "Riino"
            ],
            "hint": "ree-ee-noh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ear\" in Kisii (Ekegusii)?",
            "correctAnswer": "Okutu / Ogoto",
            "options": [
              "Omobere",
              "Riiso",
              "Okutu / Ogoto",
              "Omotwe"
            ],
            "hint": "oh-koo-too / oh-goh-toh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kisii (Ekegusii) terms with their English meanings:",
            "correctAnswer": "Omotwe: Head, Omobere: Body, Riiso: Eye, Riino: Tooth",
            "pairs": [
              {
                "left": "Omotwe",
                "right": "Head"
              },
              {
                "left": "Omobere",
                "right": "Body"
              },
              {
                "left": "Riiso",
                "right": "Eye"
              },
              {
                "left": "Riino",
                "right": "Tooth"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Head\" in Kisii (Ekegusii).",
            "correctAnswer": "Omotwe",
            "options": [
              "Omotwe",
              "Omobere",
              "Riiso",
              "Riino"
            ],
            "hint": "oh-moh-tweh"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-13-verbs",
    "title": "Unit 13: Verbs & Actions",
    "description": "Comprehensive Kisii (Ekegusii) curriculum for Verbs & Actions, vetted from Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
    "icon": "Zap",
    "skills": [
      {
        "id": "kisii-exp-verbs",
        "title": "Verbs & Actions (Part 1)",
        "icon": "Zap",
        "description": "Master Kisii (Ekegusii) verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Kisii (Ekegusii) skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Gogenda' (To go), 'Goseka' (To laugh), 'Koria' (To eat), 'Konywa' (To drink).",
        "culturalNote": "Source attribution: Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
        "words": [
          {
            "target": "Gogenda",
            "source": "To go",
            "pronunciation": "goh-gehn-dah",
            "hint": "Infinitive verb: to go, depart (Stem: -genda; also Gochia)",
            "example": "Gogenda — To go (Infinitive verb: to go, depart (Stem: -genda; also Gochia))"
          },
          {
            "target": "Goseka",
            "source": "To laugh",
            "pronunciation": "goh-seh-kah",
            "hint": "Infinitive verb: to laugh (Stem: -seka)",
            "example": "Goseka — To laugh (Infinitive verb: to laugh (Stem: -seka))"
          },
          {
            "target": "Koria",
            "source": "To eat",
            "pronunciation": "koh-ree-ah",
            "hint": "Infinitive verb: to consume food (Stem: -ria; also -raagera)",
            "example": "Koria — To eat (Infinitive verb: to consume food (Stem: -ria; also -raagera))"
          },
          {
            "target": "Konywa",
            "source": "To drink",
            "pronunciation": "koh-nywah",
            "hint": "Infinitive verb: to drink liquids (Stem: -nywa)",
            "example": "Konywa — To drink (Infinitive verb: to drink liquids (Stem: -nywa))"
          },
          {
            "target": "Korora",
            "source": "To see",
            "pronunciation": "koh-roh-rah",
            "hint": "Infinitive verb: to see, look, behold (Stem: -rora)",
            "example": "Korora — To see (Infinitive verb: to see, look, behold (Stem: -rora))"
          },
          {
            "target": "Koigwa",
            "source": "To hear / feel",
            "pronunciation": "koh-ee-gwah",
            "hint": "Infinitive verb: to hear, perceive, feel (Stem: -iigwa)",
            "example": "Koigwa — To hear / feel (Infinitive verb: to hear, perceive, feel (Stem: -iigwa))"
          },
          {
            "target": "Gotiga",
            "source": "To leave / abandon",
            "pronunciation": "goh-tee-gah",
            "hint": "Infinitive verb: to leave behind, abandon (Stem: -tiga)",
            "example": "Gotiga — To leave / abandon (Infinitive verb: to leave behind, abandon (Stem: -tiga))"
          },
          {
            "target": "Gokunda / Kwanche",
            "source": "To love / like",
            "pronunciation": "goh-koon-dah / kwahn-cheh",
            "hint": "Infinitive verb: to love, like, care for (Stem: -kunda / -ancha)",
            "example": "Gokunda / Kwanche — To love / like (Infinitive verb: to love, like, care for (Stem: -kunda / -ancha))"
          },
          {
            "target": "Gokoana",
            "source": "To speak / converse",
            "pronunciation": "goh-koh-ah-nah",
            "hint": "Infinitive verb: to speak, talk, converse (Stem: -kwana)",
            "example": "Gokoana — To speak / converse (Infinitive verb: to speak, talk, converse (Stem: -kwana))"
          },
          {
            "target": "Goruga",
            "source": "To cook",
            "pronunciation": "goh-roo-gah",
            "hint": "Infinitive verb: to cook porridge (Stem: -ruga; -yeka = to boil/stew)",
            "example": "Goruga — To cook (Infinitive verb: to cook porridge (Stem: -ruga; -yeka = to boil/stew))"
          },
          {
            "target": "Gorema",
            "source": "To cultivate",
            "pronunciation": "goh-reh-mah",
            "hint": "Infinitive verb: to hoe, dig, farm (Stem: -rema)",
            "example": "Gorema — To cultivate (Infinitive verb: to hoe, dig, farm (Stem: -rema))"
          },
          {
            "target": "Goraara",
            "source": "To sleep",
            "pronunciation": "goh-rah-ah-rah",
            "hint": "Infinitive verb: to sleep, rest (Stem: -raara)",
            "example": "Goraara — To sleep (Infinitive verb: to sleep, rest (Stem: -raara))"
          }
        ],
        "sentences": [
          {
            "target": "Omonto oyo n'omuya mono.",
            "source": "This person is very good."
          },
          {
            "target": "Abana bonsi bagenda esukuru.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Amache aya n'amaya okonywa.",
            "source": "This water is good for drinking."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Gogenda\" mean in English?",
            "correctAnswer": "To go",
            "options": [
              "To laugh",
              "To eat",
              "To drink",
              "To go"
            ],
            "hint": "Infinitive verb: to go, depart (Stem: -genda; also Gochia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Goseka\" mean in English?",
            "correctAnswer": "To laugh",
            "options": [
              "To eat",
              "To drink",
              "To laugh",
              "To go"
            ],
            "hint": "Infinitive verb: to laugh (Stem: -seka)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Koria\" mean in English?",
            "correctAnswer": "To eat",
            "options": [
              "To drink",
              "To eat",
              "To go",
              "To laugh"
            ],
            "hint": "Infinitive verb: to consume food (Stem: -ria; also -raagera)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To eat\" in Kisii (Ekegusii)?",
            "correctAnswer": "Koria",
            "options": [
              "Koria",
              "Gogenda",
              "Goseka",
              "Konywa"
            ],
            "hint": "koh-ree-ah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To drink\" in Kisii (Ekegusii)?",
            "correctAnswer": "Konywa",
            "options": [
              "Gogenda",
              "Goseka",
              "Koria",
              "Konywa"
            ],
            "hint": "koh-nywah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To see\" in Kisii (Ekegusii)?",
            "correctAnswer": "Korora",
            "options": [
              "Goseka",
              "Koria",
              "Korora",
              "Gogenda"
            ],
            "hint": "koh-roh-rah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kisii (Ekegusii) terms with their English meanings:",
            "correctAnswer": "Gogenda: To go, Goseka: To laugh, Koria: To eat, Konywa: To drink",
            "pairs": [
              {
                "left": "Gogenda",
                "right": "To go"
              },
              {
                "left": "Goseka",
                "right": "To laugh"
              },
              {
                "left": "Koria",
                "right": "To eat"
              },
              {
                "left": "Konywa",
                "right": "To drink"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To go\" in Kisii (Ekegusii).",
            "correctAnswer": "Gogenda",
            "options": [
              "Gogenda",
              "Goseka",
              "Koria",
              "Konywa"
            ],
            "hint": "goh-gehn-dah"
          }
        ]
      },
      {
        "id": "kisii-exp-verbs-2",
        "title": "Verbs & Actions (Part 2)",
        "icon": "Zap",
        "description": "Master Kisii (Ekegusii) verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Kisii (Ekegusii) skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Goteera' (To sing), 'Gogora' (To buy), 'Geesibia' (To wash / bathe), 'Gominyoka / Gotama' (To run).",
        "culturalNote": "Source attribution: Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
        "words": [
          {
            "target": "Goteera",
            "source": "To sing",
            "pronunciation": "goh-teh-eh-rah",
            "hint": "Infinitive verb: to sing (Stem: -teera)",
            "example": "Goteera — To sing (Infinitive verb: to sing (Stem: -teera))"
          },
          {
            "target": "Gogora",
            "source": "To buy",
            "pronunciation": "goh-goh-rah",
            "hint": "Infinitive verb: to buy or trade (Stem: -gora)",
            "example": "Gogora — To buy (Infinitive verb: to buy or trade (Stem: -gora))"
          },
          {
            "target": "Geesibia",
            "source": "To wash / bathe",
            "pronunciation": "geh-eh-see-bee-ah",
            "hint": "Infinitive reflexive: to wash oneself, bathe (Stem: -eesibia)",
            "example": "Geesibia — To wash / bathe (Infinitive reflexive: to wash oneself, bathe (Stem: -eesibia))"
          },
          {
            "target": "Gominyoka / Gotama",
            "source": "To run",
            "pronunciation": "goh-mee-nyoh-kah / goh-tah-mah",
            "hint": "Infinitive verb: to run, flee (Stem: -minyoka / -tama)",
            "example": "Gominyoka / Gotama — To run (Infinitive verb: to run, flee (Stem: -minyoka / -tama))"
          },
          {
            "target": "Gokoonya",
            "source": "To help / assist",
            "pronunciation": "goh-koh-ohn-yah",
            "hint": "Infinitive verb: to aid, assist (Stem: -koonya)",
            "example": "Gokoonya — To help / assist (Infinitive verb: to aid, assist (Stem: -koonya))"
          }
        ],
        "sentences": [
          {
            "target": "Amache aya n'amaya okonywa.",
            "source": "This water is good for drinking."
          },
          {
            "target": "Chiombe chionsi chiri ase obori.",
            "source": "All the cattle are in the pasture."
          },
          {
            "target": "Omogondo oito omenyete egetamo.",
            "source": "Our farm is situated near the river."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Goteera\" mean in English?",
            "correctAnswer": "To sing",
            "options": [
              "To buy",
              "To wash / bathe",
              "To run",
              "To sing"
            ],
            "hint": "Infinitive verb: to sing (Stem: -teera)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Gogora\" mean in English?",
            "correctAnswer": "To buy",
            "options": [
              "To wash / bathe",
              "To run",
              "To buy",
              "To sing"
            ],
            "hint": "Infinitive verb: to buy or trade (Stem: -gora)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Geesibia\" mean in English?",
            "correctAnswer": "To wash / bathe",
            "options": [
              "To run",
              "To wash / bathe",
              "To sing",
              "To buy"
            ],
            "hint": "Infinitive reflexive: to wash oneself, bathe (Stem: -eesibia)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To wash / bathe\" in Kisii (Ekegusii)?",
            "correctAnswer": "Geesibia",
            "options": [
              "Geesibia",
              "Goteera",
              "Gogora",
              "Gominyoka / Gotama"
            ],
            "hint": "geh-eh-see-bee-ah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To run\" in Kisii (Ekegusii)?",
            "correctAnswer": "Gominyoka / Gotama",
            "options": [
              "Goteera",
              "Gogora",
              "Geesibia",
              "Gominyoka / Gotama"
            ],
            "hint": "goh-mee-nyoh-kah / goh-tah-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To help / assist\" in Kisii (Ekegusii)?",
            "correctAnswer": "Gokoonya",
            "options": [
              "Gogora",
              "Geesibia",
              "Gokoonya",
              "Goteera"
            ],
            "hint": "goh-koh-ohn-yah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kisii (Ekegusii) terms with their English meanings:",
            "correctAnswer": "Goteera: To sing, Gogora: To buy, Geesibia: To wash / bathe, Gominyoka / Gotama: To run",
            "pairs": [
              {
                "left": "Goteera",
                "right": "To sing"
              },
              {
                "left": "Gogora",
                "right": "To buy"
              },
              {
                "left": "Geesibia",
                "right": "To wash / bathe"
              },
              {
                "left": "Gominyoka / Gotama",
                "right": "To run"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To sing\" in Kisii (Ekegusii).",
            "correctAnswer": "Goteera",
            "options": [
              "Goteera",
              "Gogora",
              "Geesibia",
              "Gominyoka / Gotama"
            ],
            "hint": "goh-teh-eh-rah"
          }
        ]
      }
    ]
  },
  {
    "id": "kisii-unit-14-phrases",
    "title": "Unit 14: Common Expressions",
    "description": "Comprehensive Kisii (Ekegusii) curriculum for Common Expressions, vetted from Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
    "icon": "MessageCircle",
    "skills": [
      {
        "id": "kisii-exp-phrases",
        "title": "Common Expressions (Part 1)",
        "icon": "MessageCircle",
        "description": "Master Kisii (Ekegusii) common expressions vocabulary and expressions from verified historical sources.",
        "tips": "In this Kisii (Ekegusii) skill covering Common Expressions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Eee / Ee' (Yes), 'Yaya / Yaaya' (No), 'Nkogokunda / Nkwanchire' (I love you), 'Inka ogochia?' (Where are you going?).",
        "culturalNote": "Source attribution: Wilfred H. Whiteley (1956) 'A Practical Introduction to Gusii' and Whiteley (1960) 'The Tense System of Gusii' (East African Literature Bureau).",
        "words": [
          {
            "target": "Eee / Ee",
            "source": "Yes",
            "pronunciation": "eh-eh",
            "hint": "Universal affirmative particle ('Yes!')",
            "example": "Eee / Ee — Yes (Universal affirmative particle ('Yes!'))"
          },
          {
            "target": "Yaya / Yaaya",
            "source": "No",
            "pronunciation": "yah-yah",
            "hint": "Universal negative particle ('No!')",
            "example": "Yaya / Yaaya — No (Universal negative particle ('No!'))"
          },
          {
            "target": "Nkogokunda / Nkwanchire",
            "source": "I love you",
            "pronunciation": "n-koh-goh-koon-dah / n-kwahn-chee-reh",
            "hint": "Expression of love and affection",
            "example": "Nkogokunda / Nkwanchire — I love you (Expression of love and affection)"
          },
          {
            "target": "Inka ogochia?",
            "source": "Where are you going?",
            "pronunciation": "een-kah oh-goh-chee-ah",
            "hint": "Everyday inquiry to travelers ('Where are you heading?')",
            "example": "Inka ogochia? — Where are you going? (Everyday inquiry to travelers ('Where are you heading?'))"
          },
          {
            "target": "Incha aiga / Nchuo aiga",
            "source": "Come here",
            "pronunciation": "een-chah ah-ee-gah / n-choo-oh ah-ee-gah",
            "hint": "Direct imperative command ('Come here!')",
            "example": "Incha aiga / Nchuo aiga — Come here (Direct imperative command ('Come here!'))"
          },
          {
            "target": "Rieta riao ningo?",
            "source": "What is your name?",
            "pronunciation": "ree-eh-tah ree-ah-oh neen-goh",
            "hint": "Courteous question asking for someone's name",
            "example": "Rieta riao ningo? — What is your name? (Courteous question asking for someone's name)"
          },
          {
            "target": "Erieta riane nere...",
            "source": "My name is...",
            "pronunciation": "eh-ree-eh-tah ree-ah-neh neh-reh",
            "hint": "Standard self-introduction ('My name is...')",
            "example": "Erieta riane nere... — My name is... (Standard self-introduction ('My name is...'))"
          },
          {
            "target": "Bono",
            "source": "Now",
            "pronunciation": "boh-noh",
            "hint": "Temporal adverb: at present, now",
            "example": "Bono — Now (Temporal adverb: at present, now)"
          },
          {
            "target": "Reero",
            "source": "Today",
            "pronunciation": "reh-eh-roh",
            "hint": "Temporal adverb: today",
            "example": "Reero — Today (Temporal adverb: today)"
          },
          {
            "target": "Ankio",
            "source": "Tomorrow",
            "pronunciation": "ahn-kee-oh",
            "hint": "Temporal adverb: tomorrow (Ankiende = day after tomorrow)",
            "example": "Ankio — Tomorrow (Temporal adverb: tomorrow (Ankiende = day after tomorrow))"
          },
          {
            "target": "Ekiaagera",
            "source": "Because",
            "pronunciation": "eh-kee-ah-ah-geh-rah",
            "hint": "Conjunction stating cause or reason",
            "example": "Ekiaagera — Because (Conjunction stating cause or reason)"
          },
          {
            "target": "Ekero",
            "source": "When",
            "pronunciation": "eh-keh-roh",
            "hint": "Temporal conjunction ('when / at the time that')",
            "example": "Ekero — When (Temporal conjunction ('when / at the time that'))"
          },
          {
            "target": "Korende",
            "source": "But",
            "pronunciation": "koh-rehn-deh",
            "hint": "Adversative conjunction ('but / however')",
            "example": "Korende — But (Adversative conjunction ('but / however'))"
          },
          {
            "target": "Nki kiaagera?",
            "source": "Why?",
            "pronunciation": "n-kee kee-ah-ah-geh-rah",
            "hint": "Interrogative expression ('What caused it? / Why?')",
            "example": "Nki kiaagera? — Why? (Interrogative expression ('What caused it? / Why?'))"
          },
          {
            "target": "Ng'o?",
            "source": "Who?",
            "pronunciation": "ng-oh",
            "hint": "Interrogative pronoun ('Who?')",
            "example": "Ng'o? — Who? (Interrogative pronoun ('Who?'))"
          }
        ],
        "sentences": [
          {
            "target": "Omonto oyo n'omuya mono.",
            "source": "This person is very good."
          },
          {
            "target": "Abana bonsi bagenda esukuru.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Amache aya n'amaya okonywa.",
            "source": "This water is good for drinking."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eee / Ee\" mean in English?",
            "correctAnswer": "Yes",
            "options": [
              "No",
              "I love you",
              "Where are you going?",
              "Yes"
            ],
            "hint": "Universal affirmative particle ('Yes!')"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Yaya / Yaaya\" mean in English?",
            "correctAnswer": "No",
            "options": [
              "I love you",
              "Where are you going?",
              "No",
              "Yes"
            ],
            "hint": "Universal negative particle ('No!')"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nkogokunda / Nkwanchire\" mean in English?",
            "correctAnswer": "I love you",
            "options": [
              "Where are you going?",
              "I love you",
              "Yes",
              "No"
            ],
            "hint": "Expression of love and affection"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I love you\" in Kisii (Ekegusii)?",
            "correctAnswer": "Nkogokunda / Nkwanchire",
            "options": [
              "Nkogokunda / Nkwanchire",
              "Eee / Ee",
              "Yaya / Yaaya",
              "Inka ogochia?"
            ],
            "hint": "n-koh-goh-koon-dah / n-kwahn-chee-reh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where are you going?\" in Kisii (Ekegusii)?",
            "correctAnswer": "Inka ogochia?",
            "options": [
              "Eee / Ee",
              "Yaya / Yaaya",
              "Nkogokunda / Nkwanchire",
              "Inka ogochia?"
            ],
            "hint": "een-kah oh-goh-chee-ah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Come here\" in Kisii (Ekegusii)?",
            "correctAnswer": "Incha aiga / Nchuo aiga",
            "options": [
              "Yaya / Yaaya",
              "Nkogokunda / Nkwanchire",
              "Incha aiga / Nchuo aiga",
              "Eee / Ee"
            ],
            "hint": "een-chah ah-ee-gah / n-choo-oh ah-ee-gah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kisii (Ekegusii) terms with their English meanings:",
            "correctAnswer": "Eee / Ee: Yes, Yaya / Yaaya: No, Nkogokunda / Nkwanchire: I love you, Inka ogochia?: Where are you going?",
            "pairs": [
              {
                "left": "Eee / Ee",
                "right": "Yes"
              },
              {
                "left": "Yaya / Yaaya",
                "right": "No"
              },
              {
                "left": "Nkogokunda / Nkwanchire",
                "right": "I love you"
              },
              {
                "left": "Inka ogochia?",
                "right": "Where are you going?"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Yes\" in Kisii (Ekegusii).",
            "correctAnswer": "Eee / Ee",
            "options": [
              "Eee / Ee",
              "Yaya / Yaaya",
              "Nkogokunda / Nkwanchire",
              "Inka ogochia?"
            ],
            "hint": "eh-eh"
          }
        ]
      }
    ]
  }
];
