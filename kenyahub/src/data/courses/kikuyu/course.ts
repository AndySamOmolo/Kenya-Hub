// ============================================================
// Kikuyu (Gĩkũyũ) Language Course Configuration & Units
// Enriched with cultural proverbs from "1,000 Kikuyu Proverbs"
// by G. Barra (Consolata Catholic Mission, Nyeri)
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const KIKUYU_CONFIG: LanguageConfig = {
  id: 'kikuyu',
  name: 'Kikuyu',
  nativeName: 'Gĩkũyũ',
  family: 'Bantu',
  counties: ['Kiambu', "Murang'a", 'Nyeri', 'Kirinyaga', 'Nyandarua'],
  speakers: '8.1M',
  speechLocale: 'sw-KE',
  description: 'The most spoken ethnic language in Kenya, spoken across the fertile Central Highlands around Mount Kenya (Kĩrĩnyaga), renowned for its profound proverbial wisdom and rich cultural traditions.',
  color: '#2E7D32',
};

export const KIKUYU_UNITS: CourseUnit[] = [
  {
    id: 'kikuyu-unit-1',
    title: 'Unit 1: Foundations, Greetings & Numbers',
    description: 'Learn foundational greetings, time-of-day courtesies, and the counting system of Gĩkũyũ.',
    icon: '👋',
    skills: [
      {
        id: 'kikuyu-greetings',
        title: 'Greetings & Politeness',
        icon: 'Handshake',
        description: 'Master core greetings, polite inquiries, and daily salutations.',
        tips: "In Gĩkũyũ, 'Ũhoro waku?' means 'What is your news?' or 'How are you?'. A common reply is 'Ndĩ mwega' ('I am well/fine'). When asking if someone is well, say 'Wĩ mwega?'. 'Nĩ wega' literally means 'It is good' and functions as 'Thank you'. For parting, 'Tigwo na wega' is said to the one staying, while 'Thiĩ na wega' is said to the traveler.",
        culturalNote: "Greetings in Kikuyu culture reflect deep communal respect. Inquiring about one's family and health before getting to business is a hallmark of good upbringing (ũreri mwega). Traditional blessings often conclude with 'Thaai thayũ' (Peace and prosperity).",
        words: [
          { target: 'Wĩ mwega?', source: 'Are you well? / Hello', pronunciation: 'wee mweh-gah', hint: 'Universal greeting to one person', example: 'Wĩ mwega? — Ĩĩ, ndĩ mwega.' },
          { target: 'Ũhoro waku?', source: 'How are you? / What is your news?', pronunciation: 'oo-hoh-roh wah-koo', hint: 'Lit. "What is your news?"', example: 'Ũhoro waku, mũrata?' },
          { target: 'Ndĩ mwega', source: 'I am fine / well', pronunciation: 'n-dee mweh-gah', hint: 'Standard polite reply', example: 'Ndĩ mwega, nĩ wega.' },
          { target: 'Nĩ wega', source: 'Thank you', pronunciation: 'nee weh-gah', hint: 'Lit. "It is good"', example: 'Nĩ wega mũno.' },
          { target: 'Nĩ wega mũno', source: 'Thank you very much', pronunciation: 'nee weh-gah moo-noh', hint: "'Mũno' means very much", example: 'Nĩ wega mũno nĩ kũndeithia.' },
          { target: 'Tigwo na wega', source: 'Goodbye (stay well)', pronunciation: 'tee-gwoh nah weh-gah', hint: 'Said to the one staying behind' },
          { target: 'Thiĩ na wega', source: 'Goodbye (go well)', pronunciation: 'thee-ee nah weh-gah', hint: 'Said to the traveler departing' },
          { target: 'Ũhoro wa rũciinĩ', source: 'Good morning', pronunciation: 'oo-hoh-roh wah roo-chee-nee', hint: 'Lit. "News of the morning"' },
          { target: 'Ũhoro wa hwaĩ-inĩ', source: 'Good evening', pronunciation: 'oo-hoh-roh wah hwah-ee-nee', hint: 'Lit. "News of the evening"' },
          { target: 'Ĩĩ', source: 'Yes', pronunciation: 'ee-ee', hint: 'Affirmative response' },
          { target: 'Aca', source: 'No', pronunciation: 'ah-chah', hint: 'Negative response' }
        ],
        sentences: [
          { target: 'Wĩ mwega, mũrata wakwa?', source: 'Are you well, my friend?' },
          { target: 'Ndĩ mwega, nĩ wega mũno.', source: 'I am fine, thank you very much.' },
          { target: 'Thiĩ na wega, nĩtũkuona rũciũ.', source: 'Go well, we will see you tomorrow.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Thank you very much" in Gĩkũyũ?',
            correctAnswer: 'Nĩ wega mũno',
            options: ['Nĩ wega mũno', 'Tigwo na wega', 'Wĩ mwega?', 'Ũhoro waku?'],
            hint: "'Wega' means good and 'mũno' means very much"
          },
          {
            type: 'multiple_choice',
            prompt: 'What is the standard reply to "Ũhoro waku?" (How are you)?',
            correctAnswer: 'Ndĩ mwega',
            options: ['Ndĩ mwega', 'Aca', 'Thiĩ na wega', 'Ĩmwe'],
            hint: "Means 'I am fine / well'"
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Kikuyu greetings with their English meanings:',
            correctAnswer: 'Wĩ mwega?: Are you well?, Nĩ wega: Thank you, Thiĩ na wega: Go well, Aca: No',
            pairs: [
              { left: 'Wĩ mwega?', right: 'Are you well?' },
              { left: 'Nĩ wega', right: 'Thank you' },
              { left: 'Thiĩ na wega', right: 'Go well' },
              { left: 'Aca', right: 'No' }
            ]
          }
        ]
      },
      {
        id: 'kikuyu-numbers',
        title: 'Counting & Numbers',
        icon: 'Hash',
        description: 'Learn the cardinal counting system from one to a hundred in Gĩkũyũ.',
        tips: "Gĩkũyũ uses a base-10 counting system rooted in Bantu morphology. 1 is Ĩmwe, 2 is Igĩrĩ, 3 is Ithatũ, 4 is Inya, 5 is Ithano. 10 is Ikũmi, 20 is Mĩrongo ĩĩrĩ (two tens), 30 is Mĩrongo ĩtatũ (three tens), and 100 is Igana.",
        culturalNote: "Traditionally, counting livestock or children in Kikuyu was rarely done by direct tallying in the open due to a cultural belief against vanity and the evil eye. Numbers were often stated with reverent approximations or respectful idioms.",
        words: [
          { target: 'Ĩmwe', source: 'One', pronunciation: 'ee-mweh', hint: 'Numeral 1' },
          { target: 'Igĩrĩ', source: 'Two', pronunciation: 'ee-gee-ree', hint: 'Numeral 2' },
          { target: 'Ithatũ', source: 'Three', pronunciation: 'ee-thah-too', hint: 'Numeral 3' },
          { target: 'Inya', source: 'Four', pronunciation: 'ee-nyah', hint: 'Numeral 4' },
          { target: 'Ithano', source: 'Five', pronunciation: 'ee-thah-noh', hint: 'Numeral 5' },
          { target: 'Ithathatũ', source: 'Six', pronunciation: 'ee-thah-thah-too', hint: 'Numeral 6' },
          { target: 'Mũgwanja', source: 'Seven', pronunciation: 'moo-gwahn-jah', hint: 'Numeral 7' },
          { target: 'Inyanya', source: 'Eight', pronunciation: 'ee-nyah-nyah', hint: 'Numeral 8' },
          { target: 'Kenda', source: 'Nine', pronunciation: 'kehn-dah', hint: 'Numeral 9' },
          { target: 'Ikũmi', source: 'Ten', pronunciation: 'ee-koo-mee', hint: 'Numeral 10' },
          { target: 'Mĩrongo ĩĩrĩ', source: 'Twenty', pronunciation: 'mee-rohn-goh ee-ree', hint: 'Lit. "two tens"' },
          { target: 'Igana', source: 'Hundred', pronunciation: 'ee-gah-nah', hint: 'Numeral 100' }
        ],
        sentences: [
          { target: 'Ndĩ na ciana ithatũ.', source: 'I have three children.' },
          { target: 'He mbembe igĩrĩ.', source: 'Give me two cobs of maize.' },
          { target: 'Arata akwa nĩ ikũmi.', source: 'My friends are ten.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which number is "Ithano" in English?',
            correctAnswer: 'Five',
            options: ['Five', 'Three', 'Seven', 'Ten'],
            hint: 'The number after Inya (four)'
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Ten" in Gĩkũyũ?',
            correctAnswer: 'Ikũmi',
            options: ['Ikũmi', 'Igana', 'Kenda', 'Mũgwanja'],
            hint: 'Cognate to Kiswahili Kumi'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the numbers with their Kikuyu translations:',
            correctAnswer: 'Ĩmwe: One, Igĩrĩ: Two, Ithatũ: Three, Inya: Four',
            pairs: [
              { left: 'Ĩmwe', right: 'One' },
              { left: 'Igĩrĩ', right: 'Two' },
              { left: 'Ithatũ', right: 'Three' },
              { left: 'Inya', right: 'Four' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kikuyu-unit-2',
    title: 'Unit 2: Family, People & The Home',
    description: 'Learn terms for family members, relationships, traditional foods, and household life.',
    icon: '👨‍👩‍👧‍👦',
    skills: [
      {
        id: 'kikuyu-family',
        title: 'Family & Kinship',
        icon: 'Users',
        description: 'Learn terms for immediate and extended family in Gĩkũyũ.',
        tips: "Family terms in Gĩkũyũ carry affectionate closeness. 'Maitũ' means mother (lit. 'our mother'), while 'Baba' is father. A brother is 'Mũrũ wa maitũ' (son of our mother) and a sister is 'Mwarĩ wa maitũ' (daughter of our mother). 'Cũcũ' is grandmother and 'Gũka' is grandfather.",
        culturalNote: "The Kikuyu naming system follows strict patriarchal-matriarchal patterns: the first son is named after the paternal grandfather, the second son after the maternal grandfather; the first daughter after the paternal grandmother, and the second after the maternal grandmother.",
        words: [
          { target: 'Maitũ', source: 'Mother', pronunciation: 'mah-ee-too', hint: 'Affectionate term ("our mother")' },
          { target: 'Baba', source: 'Father', pronunciation: 'bah-bah', hint: 'Father' },
          { target: 'Kaana', source: 'Child', pronunciation: 'kah-ah-nah', hint: 'Plural: Ciana (children)' },
          { target: 'Mũrũ wa maitũ', source: 'Brother', pronunciation: 'moo-roo wah mah-ee-too', hint: 'Lit. "son of my mother"' },
          { target: 'Mwarĩ wa maitũ', source: 'Sister', pronunciation: 'mwah-ree wah mah-ee-too', hint: 'Lit. "daughter of my mother"' },
          { target: 'Cũcũ', source: 'Grandmother', pronunciation: 'choo-choo', hint: 'Beloved grandmother' },
          { target: 'Gũka', source: 'Grandfather', pronunciation: 'goo-kah', hint: 'Respected grandfather' },
          { target: 'Mũrata', source: 'Friend', pronunciation: 'moo-rah-tah', hint: 'Plural: Arata (friends)' },
          { target: 'Mũthuuri', source: 'Elder / Husband', pronunciation: 'moo-thoo-ree', hint: 'Respected man or husband' },
          { target: 'Mũtumia', source: 'Woman / Wife', pronunciation: 'moo-too-mee-ah', hint: 'Married woman or wife' }
        ],
        sentences: [
          { target: 'Maitũ nĩ mũrĩmi mwega.', source: 'My mother is a good farmer.' },
          { target: 'Cũcũ nĩ aikarĩte mũciĩ.', source: 'Grandmother is sitting at the homestead.' },
          { target: 'Mũrũ wa maitũ nĩ aroka.', source: 'My brother is coming.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Cũcũ" mean in English?',
            correctAnswer: 'Grandmother',
            options: ['Grandmother', 'Grandfather', 'Mother', 'Sister'],
            hint: 'A loving term for the elder matriarch'
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Brother" in Gĩkũyũ?',
            correctAnswer: 'Mũrũ wa maitũ',
            options: ['Mũrũ wa maitũ', 'Mwarĩ wa maitũ', 'Baba', 'Gũka'],
            hint: 'Literally means "son of our mother"'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the family terms with their English translations:',
            correctAnswer: 'Maitũ: Mother, Baba: Father, Cũcũ: Grandmother, Mũrata: Friend',
            pairs: [
              { left: 'Maitũ', right: 'Mother' },
              { left: 'Baba', right: 'Father' },
              { left: 'Cũcũ', right: 'Grandmother' },
              { left: 'Mũrata', right: 'Friend' }
            ]
          }
        ]
      },
      {
        id: 'kikuyu-food-home',
        title: 'Food, Drink & The Homestead',
        icon: 'Utensils',
        description: 'Explore traditional staples, food culture, and parts of the homestead.',
        tips: "'Irio' is the general word for food, and also the name of the celebrated dish of mashed potatoes, green peas/beans, and corn. 'Ngima' is traditional ugali. 'Maaĩ' is water and 'Iria' is milk. The family compound is known as 'Mũciĩ'.",
        culturalNote: "Food in Kikuyu culture is sacredly associated with hospitality and sharing. As recorded in ancient proverbs, 'Irio hĩũ itiumaga mbũri' (Cooked food is not sold for goats, but given freely to guests and neighbors).",
        words: [
          { target: 'Irio', source: 'Food', pronunciation: 'ee-ree-oh', hint: 'General food or the mashed potato dish' },
          { target: 'Ngima', source: 'Ugali', pronunciation: 'n-gee-mah', hint: 'Maize meal cake' },
          { target: 'Maaĩ', source: 'Water', pronunciation: 'mah-ah-ee', hint: 'Drinking water' },
          { target: 'Iria', source: 'Milk', pronunciation: 'ee-ree-ah', hint: 'Cow or goat milk' },
          { target: 'Nyama', source: 'Meat', pronunciation: 'nyah-mah', hint: 'Beef or goat meat' },
          { target: 'Waru', source: 'Potato', pronunciation: 'wah-roo', hint: 'Irish potato staple' },
          { target: 'Mboco', source: 'Beans', pronunciation: 'm-boh-choh', hint: 'Legumes' },
          { target: 'Mbembe', source: 'Maize', pronunciation: 'm-behm-beh', hint: 'Corn cobs' },
          { target: 'Mũciĩ', source: 'Home / Homestead', pronunciation: 'moo-chee-ee', hint: 'Family compound' },
          { target: 'Mũgũnda', source: 'Farm / Shamba', pronunciation: 'moo-goon-dah', hint: 'Cultivated land' }
        ],
        sentences: [
          { target: 'Tũrĩe irio na tũnyue maaĩ.', source: 'Let us eat food and drink water.' },
          { target: 'Maitũ nĩ araruga ngima na nyama.', source: 'Mother is cooking ugali and meat.' },
          { target: 'Mũgũnda witũ nĩ mũnene.', source: 'Our farm is big.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Water" in Gĩkũyũ?',
            correctAnswer: 'Maaĩ',
            options: ['Maaĩ', 'Iria', 'Irio', 'Nyama'],
            hint: 'Essential clear liquid for life'
          },
          {
            type: 'multiple_choice',
            prompt: 'What is the Gĩkũyũ word for "Homestead / Home"?',
            correctAnswer: 'Mũciĩ',
            options: ['Mũciĩ', 'Mũgũnda', 'Waru', 'Mboco'],
            hint: 'The family residential compound'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the food items with their translations:',
            correctAnswer: 'Irio: Food, Maaĩ: Water, Nyama: Meat, Ngima: Ugali',
            pairs: [
              { left: 'Irio', right: 'Food' },
              { left: 'Maaĩ', right: 'Water' },
              { left: 'Nyama', right: 'Meat' },
              { left: 'Ngima', right: 'Ugali' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kikuyu-unit-3',
    title: 'Unit 3: Verbs, Actions & Daily Life',
    description: 'Learn everyday action verbs, farming expressions, and conversational questions.',
    icon: '⚡',
    skills: [
      {
        id: 'kikuyu-verbs',
        title: 'Everyday Actions & Verbs',
        icon: 'Activity',
        description: 'Learn core action verbs in Gĩkũyũ for farming, working, and speaking.',
        tips: "Infinitive verbs in Gĩkũyũ start with the prefix 'Kũ-' or 'Gũ-' (e.g., Kũrĩma = to farm; Gũceera = to visit). The subject prefix for third-person singular ('he/she') is 'a-' (e.g., arĩma = he/she farms).",
        culturalNote: "Agriculture is celebrated as the cornerstone of Kikuyu livelihood. Hard work (wĩra) is deeply revered, while idleness (ũgũta) is strongly cautioned against in numerous proverbs.",
        words: [
          { target: 'Kũrĩma', source: 'To farm / cultivate', pronunciation: 'koo-ree-mah', hint: 'The foundation of highland life' },
          { target: 'Kũruta wĩra', source: 'To work', pronunciation: 'koo-roo-tah wee-rah', hint: 'Work or labor' },
          { target: 'Kwarĩria', source: 'To speak / talk', pronunciation: 'kwah-ree-ree-ah', hint: 'Engage in conversation' },
          { target: 'Kuona', source: 'To see', pronunciation: 'koo-oh-nah', hint: 'Visual perception' },
          { target: 'Kũmenya', source: 'To know / understand', pronunciation: 'koo-meh-nyah', hint: 'Knowledge and comprehension' },
          { target: 'Gũceera', source: 'To visit / walk', pronunciation: 'goo-cheh-eh-rah', hint: 'Traveling or visiting family' },
          { target: 'Gũaka', source: 'To build', pronunciation: 'gwah-kah', hint: 'Constructing houses or shelters' },
          { target: 'Kũhoya', source: 'To pray / ask', pronunciation: 'koo-hoh-yah', hint: 'Petition or pray to Ngai' }
        ],
        sentences: [
          { target: 'Andũ nĩ mararuta wĩra mũgũnda-inĩ.', source: 'People are working in the farm.' },
          { target: 'Nĩ ngũceera gwaku rũciũ.', source: 'I will visit your place tomorrow.' },
          { target: 'Nĩndĩramenya ũhoro ũcio.', source: 'I understand that matter.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Kũrĩma" mean in English?',
            correctAnswer: 'To farm / cultivate',
            options: ['To farm / cultivate', 'To build', 'To sleep', 'To drink'],
            hint: 'The traditional agricultural work of the highlands'
          },
          {
            type: 'multiple_choice',
            prompt: 'Which verb means "To know / understand"?',
            correctAnswer: 'Kũmenya',
            options: ['Kũmenya', 'Kuona', 'Gũaka', 'Kũhoya'],
            hint: 'Comprehending truth'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the verbs with their English meanings:',
            correctAnswer: 'Kũrĩma: To farm, Kuona: To see, Gũaka: To build, Kũhoya: To pray',
            pairs: [
              { left: 'Kũrĩma', right: 'To farm' },
              { left: 'Kuona', right: 'To see' },
              { left: 'Gũaka', right: 'To build' },
              { left: 'Kũhoya', right: 'To pray' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kikuyu-unit-4',
    title: 'Unit 4: Gĩkũyũ Proverbs & Wisdom (Thimo)',
    description: 'Immerse yourself in authentic Kikuyu proverbs from G. Barra’s historical collection.',
    icon: '📜',
    skills: [
      {
        id: 'kikuyu-proverbs-unity',
        title: 'Proverbs of Unity & Perseverance',
        icon: 'Shield',
        description: 'Learn proverbs that emphasize community cooperation, persistence, and strength.',
        tips: "Kikuyu wisdom is largely codified in 'Thimo' (proverbs). For example: 'Kaara kamwe gatingĩyũragĩra ndaa' (One finger does not kill a louse — Unity is strength). Another pillar is 'Mageria nomo mahota' (Persistent attempts bring success — Where there is a will there is a way).",
        culturalNote: "As Father G. Barra noted in 1939, proverbs were the code of laws and philosophy of the Kikuyu people for centuries. Elders settled lawsuits (ciira) using appropriate proverbs that summarized moral truths.",
        words: [
          { target: 'Thimo', source: 'Proverb / Maxim', pronunciation: 'thee-moh', hint: 'Plural: Thimo (proverbs of wisdom)' },
          { target: 'Kĩhooto', source: 'Truth / Justice', pronunciation: 'kee-hoh-oh-toh', hint: 'Moral right and fairness' },
          { target: 'Hinya', source: 'Strength / Power', pronunciation: 'heen-yah', hint: 'Energy and endurance' },
          { target: 'Ũrũmwe', source: 'Unity', pronunciation: 'oo-room-weh', hint: 'Standing together as one' },
          { target: 'Ũtonga', source: 'Wealth / Riches', pronunciation: 'oo-tohn-gah', hint: 'Material or spiritual prosperity' }
        ],
        sentences: [
          { target: 'Kaara kamwe gatingĩyũragĩra ndaa.', source: 'One finger does not kill a louse (Unity is strength).' },
          { target: 'Mageria nomo mahota.', source: 'Persistent trials mean success (Where there is a will there is a way).' },
          { target: 'Indo nĩ kũrĩmithanio.', source: 'Riches come from cultivating together (Many hands make light work).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the English proverb equivalent of "Mageria nomo mahota"?',
            correctAnswer: 'Where there is a will there is a way',
            options: ['Where there is a will there is a way', 'Too many cooks spoil the broth', 'Look before you leap', 'A stitch in time saves nine'],
            hint: 'Persistent trials and effort bring achievement'
          },
          {
            type: 'multiple_choice',
            prompt: 'What does "Kaara kamwe gatingĩyũragĩra ndaa" teach us?',
            correctAnswer: 'Unity is strength (Cooperation is necessary)',
            options: ['Unity is strength (Cooperation is necessary)', 'Haste makes waste', 'Silence is golden', 'Birds of a feather flock together'],
            hint: 'One finger alone cannot accomplish the task'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Kikuyu proverbs with their English equivalents:',
            correctAnswer: 'Mageria nomo mahota: Where there is a will there is a way, Indo nĩ kũrĩmithanio: Many hands make light work, Kĩhooto: Justice / Truth, Ũrũmwe: Unity',
            pairs: [
              { left: 'Mageria nomo mahota', right: 'Where there is a will there is a way' },
              { left: 'Indo nĩ kũrĩmithanio', right: 'Many hands make light work' },
              { left: 'Kĩhooto', right: 'Justice / Truth' },
              { left: 'Ũrũmwe', right: 'Unity' }
            ]
          }
        ]
      },
      {
        id: 'kikuyu-proverbs-wisdom',
        title: 'Proverbs of Truth & Character',
        icon: 'BookOpen',
        description: 'Explore classic maxims on truth, respect for elders, and discretion.',
        tips: "Respect for truth and history is captured in 'Kĩhooto gĩtĩkũragwo nĩ rũũĩ' (Justice and truth cannot be swept away by the river). Discretion in family matters is maintained through 'Cia mũciĩ itiumaga ndira' (Do not wash dirty linen in public).",
        culturalNote: "The proverb 'Kahiga gakũrũ gatiagararagwo nĩ maaĩ' (The river does not leap over an ancient stone) underlines the absolute respect due to elders and ancient traditions in traditional Kikuyu governance.",
        words: [
          { target: 'Ũũgĩ', source: 'Wisdom / Intelligence', pronunciation: 'oo-oo-gee', hint: 'Insight and sound judgement' },
          { target: 'Mĩtugo', source: 'Customs / Character', pronunciation: 'mee-too-goh', hint: 'Moral behavior and tradition' },
          { target: 'Kahiga', source: 'Small stone / Rock', pronunciation: 'kah-hee-gah', hint: 'Firm foundation' },
          { target: 'Rũũĩ', source: 'River', pronunciation: 'roo-oo-ee', hint: 'Flowing water' },
          { target: 'Ũhoro wa ma', source: 'The true story / Truth', pronunciation: 'oo-hoh-roh wah mah', hint: 'Verified truth' }
        ],
        sentences: [
          { target: 'Kahiga gakũrũ gatiagararagwo nĩ maaĩ.', source: 'The river does not jump over an ancient stone (Old age is honourable).' },
          { target: 'Cia mũciĩ itiumaga ndira.', source: 'Home affairs must not go into the open fields (Keep family matters private).' },
          { target: 'Mũũkĩrĩ tene acokaga tene.', source: 'He who wakes early returns early (The early bird catches the worm).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which proverb corresponds to "Old age is honourable"?',
            correctAnswer: 'Kahiga gakũrũ gatiagararagwo nĩ maai',
            options: [
              'Kahiga gakũrũ gatiagararagwo nĩ maai',
              'Cia mũciĩ itiumaga ndira',
              'Mageria nomo mahota',
              'Wĩ mwega?'
            ],
            hint: 'Refers to an ancient stone in the river'
          },
          {
            type: 'multiple_choice',
            prompt: 'What does "Cia mũciĩ itiumaga ndira" mean in practical life?',
            correctAnswer: 'Keep family matters private (Do not wash dirty linen in public)',
            options: [
              'Keep family matters private (Do not wash dirty linen in public)',
              'Always eat together outside',
              'Sell farm products quickly',
              'Wake up before sunrise'
            ],
            hint: 'Home affairs should stay within the family'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the proverbs with their English wisdom:',
            correctAnswer: 'Kahiga gakũrũ...: Old age is honourable, Cia mũciĩ...: Keep family affairs private, Mũũkĩrĩ tene...: The early bird catches the worm, Ũũgĩ: Wisdom',
            pairs: [
              { left: 'Kahiga gakũrũ...', right: 'Old age is honourable' },
              { left: 'Cia mũciĩ...', right: 'Keep family affairs private' },
              { left: 'Mũũkĩrĩ tene...', right: 'The early bird catches the worm' },
              { left: 'Ũũgĩ', right: 'Wisdom' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kikuyu-unit-5',
    title: 'Unit 5: Grammar Foundations from First Lessons',
    description: 'Use explicit examples from First Lessons in Kikuyu to recognize noun-class pairs and infinitive forms.',
    icon: '📚',
    skills: [
      {
        id: 'kikuyu-noun-class-pairs',
        title: 'Noun-Class Pairs',
        icon: 'Layers',
        description: 'Recognize common singular and plural pairs used in the textbook grammar sequence.',
        tips: 'First Lessons in Kikuyu introduces noun classes as agreement groups, not as biological genders. These examples are a study aid from the historical textbook and should be checked against contemporary Gĩkũyũ usage.',
        culturalNote: 'Noun classes organize agreement across a sentence. A learner should memorize the pair and listen for the matching agreement before trying to generalize a pattern.',
        words: [
          { target: 'Mũndũ', source: 'Person', hint: 'Human singular example' },
          { target: 'Andũ', source: 'People', hint: 'Human plural example' },
          { target: 'Mũtĩ', source: 'Tree', hint: 'Class 3 example' },
          { target: 'Mĩtĩ', source: 'Trees', hint: 'Class 4 plural example' },
          { target: 'Kĩama', source: 'Council', hint: 'Class 7 example' },
          { target: 'Ciama', source: 'Councils', hint: 'Class 8 plural example' }
        ],
        sentences: [
          { target: 'Mũndũ ũmwe nĩ aroka mũciĩ.', source: 'One person is coming home.' },
          { target: 'Mĩtĩ ĩno nĩ mĩraya mũno.', source: 'These trees are very tall.' },
          { target: 'Ciama ciothe nĩ ikũngano.', source: 'All councils are gathering.' }
        ],
        authoredExercises: [
          {
            type: 'match_pairs',
            prompt: 'Match the Gĩkũyũ noun-class examples:',
            correctAnswer: 'Mũndũ: Person, Andũ: People, Mũtĩ: Tree, Mĩtĩ: Trees',
            pairs: [
              { left: 'Mũndũ', right: 'Person' },
              { left: 'Andũ', right: 'People' },
              { left: 'Mũtĩ', right: 'Tree' },
              { left: 'Mĩtĩ', right: 'Trees' }
            ]
          }
        ]
      },
      {
        id: 'kikuyu-infinitives',
        title: 'Infinitives and Actions',
        icon: 'Activity',
        description: 'Identify the infinitive forms that introduce action verbs in the textbook examples.',
        tips: 'The textbook presents infinitives as a useful starting point for studying verb formation. Learn the complete form first; do not assume that an English verb maps to one form in every context.',
        words: [
          { target: 'Kũrĩma', source: 'To cultivate', hint: 'Agricultural action' },
          { target: 'Gũceera', source: 'To visit', hint: 'Movement or visiting' },
          { target: 'Kũmenya', source: 'To know', hint: 'Knowledge or understanding' },
          { target: 'Kũhoya', source: 'To pray / ask', hint: 'Prayer or asking' }
        ],
        sentences: [
          { target: 'Kũrĩma mũgũnda nĩ kũrĩ bata.', source: 'To cultivate the farm is important.' },
          { target: 'Nĩ wega kũmenya ũhoro wa ma.', source: 'It is good to know the true story.' },
          { target: 'Nĩtũgwĩciria gũceera gwaku.', source: 'We are planning to visit your place.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which form means “to cultivate” in this source-based lesson?',
            correctAnswer: 'Kũrĩma',
            options: ['Kũrĩma', 'Gũceera', 'Kũmenya', 'Kũhoya'],
            hint: 'It refers to working the land.'
          }
        ]
      }
    ]
  },
  
  // ── EXPANDED SOURCE-VERIFIED UNITS ──
  {
    "id": "kikuyu-unit-6-greetings",
    "title": "Unit 6: Greetings & Farewells",
    "description": "Comprehensive Kikuyu (Gĩkũyũ) curriculum for Greetings & Farewells, vetted from L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
    "icon": "Handshake",
    "skills": [
      {
        "id": "kikuyu-exp-greetings",
        "title": "Greetings & Farewells",
        "icon": "Handshake",
        "description": "Master Kikuyu (Gĩkũyũ) greetings & farewells vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Greetings & Farewells, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ũhoro wa mũthenya' (How is your afternoon?), 'Ũhana atĩa?' (How are you?), 'Ũkĩrĩte / Karibu' (Welcome / Come in), 'Thaai thayũ' (Peace to you).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Ũhoro wa mũthenya",
            "source": "How is your afternoon?",
            "pronunciation": "oo-hoh-roh wah moo-then-yah",
            "hint": "Afternoon greeting",
            "example": "Ũhoro wa mũthenya — How is your afternoon? (Afternoon greeting)"
          },
          {
            "target": "Ũhana atĩa?",
            "source": "How are you?",
            "pronunciation": "oo-hah-nah ah-tee-ah",
            "hint": "General greeting",
            "example": "Ũhana atĩa? — How are you? (General greeting)"
          },
          {
            "target": "Ũkĩrĩte / Karibu",
            "source": "Welcome / Come in",
            "pronunciation": "oo-kee-ree-teh / kah-ree-boo",
            "hint": "Hospitality invitation",
            "example": "Ũkĩrĩte / Karibu — Welcome / Come in (Hospitality invitation)"
          },
          {
            "target": "Thaai thayũ",
            "source": "Peace to you",
            "pronunciation": "thah-ah-ee thah-yoo",
            "hint": "Traditional blessing of peace (lit. 'Peace and life')",
            "example": "Thaai thayũ — Peace to you (Traditional blessing of peace (lit. 'Peace and life'))"
          },
          {
            "target": "Ũhoro wa rũciinĩ",
            "source": "How is your morning?",
            "pronunciation": "oo-hoh-roh wah roo-chee-nee",
            "hint": "Morning greeting",
            "example": "Ũhoro wa rũciinĩ — How is your morning? (Morning greeting)"
          },
          {
            "target": "Ũhoro wa hwaĩ-inĩ",
            "source": "How is your evening?",
            "pronunciation": "oo-hoh-roh wah hwah-ee-nee",
            "hint": "Evening greeting",
            "example": "Ũhoro wa hwaĩ-inĩ — How is your evening? (Evening greeting)"
          },
          {
            "target": "Ndĩ mwega",
            "source": "I am fine / well",
            "pronunciation": "n-dee mweh-gah",
            "hint": "Standard reply to 'Ũhana atĩa?'",
            "example": "Ndĩ mwega — I am fine / well (Standard reply to 'Ũhana atĩa?')"
          },
          {
            "target": "Wĩ mwega?",
            "source": "Hello / Are you well?",
            "pronunciation": "wee mweh-gah",
            "hint": "Casual: 'Are you well?' (Plural: Mũrĩ eega?)",
            "example": "Wĩ mwega? — Hello / Are you well? (Casual: 'Are you well?' (Plural: Mũrĩ eega?))"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mwega nĩ endaga andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Mũtĩ mũnene wĩ na mĩri mĩraaya.",
            "source": "A big tree has long roots."
          },
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ũhoro wa mũthenya\" mean in English?",
            "correctAnswer": "How is your afternoon?",
            "options": [
              "How are you?",
              "Welcome / Come in",
              "Peace to you",
              "How is your afternoon?"
            ],
            "hint": "Afternoon greeting"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ũhana atĩa?\" mean in English?",
            "correctAnswer": "How are you?",
            "options": [
              "Welcome / Come in",
              "Peace to you",
              "How are you?",
              "How is your afternoon?"
            ],
            "hint": "General greeting"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ũkĩrĩte / Karibu\" mean in English?",
            "correctAnswer": "Welcome / Come in",
            "options": [
              "Peace to you",
              "Welcome / Come in",
              "How is your afternoon?",
              "How are you?"
            ],
            "hint": "Hospitality invitation"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Welcome / Come in\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Ũkĩrĩte / Karibu",
            "options": [
              "Ũkĩrĩte / Karibu",
              "Ũhoro wa mũthenya",
              "Ũhana atĩa?",
              "Thaai thayũ"
            ],
            "hint": "oo-kee-ree-teh / kah-ree-boo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Peace to you\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Thaai thayũ",
            "options": [
              "Ũhoro wa mũthenya",
              "Ũhana atĩa?",
              "Ũkĩrĩte / Karibu",
              "Thaai thayũ"
            ],
            "hint": "thah-ah-ee thah-yoo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"How is your morning?\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Ũhoro wa rũciinĩ",
            "options": [
              "Ũhana atĩa?",
              "Ũkĩrĩte / Karibu",
              "Ũhoro wa rũciinĩ",
              "Ũhoro wa mũthenya"
            ],
            "hint": "oo-hoh-roh wah roo-chee-nee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Ũhoro wa mũthenya: How is your afternoon?, Ũhana atĩa?: How are you?, Ũkĩrĩte / Karibu: Welcome / Come in, Thaai thayũ: Peace to you",
            "pairs": [
              {
                "left": "Ũhoro wa mũthenya",
                "right": "How is your afternoon?"
              },
              {
                "left": "Ũhana atĩa?",
                "right": "How are you?"
              },
              {
                "left": "Ũkĩrĩte / Karibu",
                "right": "Welcome / Come in"
              },
              {
                "left": "Thaai thayũ",
                "right": "Peace to you"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"How is your afternoon?\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Ũhoro wa mũthenya",
            "options": [
              "Ũhoro wa mũthenya",
              "Ũhana atĩa?",
              "Ũkĩrĩte / Karibu",
              "Thaai thayũ"
            ],
            "hint": "oo-hoh-roh wah moo-then-yah"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-7-numbers",
    "title": "Unit 7: Numbers",
    "description": "Comprehensive Kikuyu (Gĩkũyũ) curriculum for Numbers, vetted from L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
    "icon": "Hash",
    "skills": [
      {
        "id": "kikuyu-exp-numbers",
        "title": "Numbers",
        "icon": "Hash",
        "description": "Master Kikuyu (Gĩkũyũ) numbers vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Numbers, pay special attention to pronunciation and morphological prefixes/suffixes: 'Mĩrongo ĩtatũ' (Thirty), 'Mĩrongo ĩnya' (Forty), 'Mĩrongo ĩthano' (Fifty), 'Nganga / Ngiri' (Thousand).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Mĩrongo ĩtatũ",
            "source": "Thirty",
            "pronunciation": "mee-rohn-goh ee-tah-too",
            "hint": "Three tens",
            "example": "Mĩrongo ĩtatũ — Thirty (Three tens)"
          },
          {
            "target": "Mĩrongo ĩnya",
            "source": "Forty",
            "pronunciation": "mee-rohn-goh ee-nyah",
            "hint": "Four tens",
            "example": "Mĩrongo ĩnya — Forty (Four tens)"
          },
          {
            "target": "Mĩrongo ĩthano",
            "source": "Fifty",
            "pronunciation": "mee-rohn-goh ee-thah-noh",
            "hint": "Five tens",
            "example": "Mĩrongo ĩthano — Fifty (Five tens)"
          },
          {
            "target": "Nganga / Ngiri",
            "source": "Thousand",
            "pronunciation": "n-gahn-gah / n-gee-ree",
            "example": "Nganga / Ngiri — Thousand"
          },
          {
            "target": "Ĩmwe",
            "source": "One",
            "pronunciation": "ee-mweh",
            "hint": "Stem: -mwe",
            "example": "Ĩmwe — One (Stem: -mwe)"
          },
          {
            "target": "Igĩrĩ",
            "source": "Two",
            "pronunciation": "ee-gee-ree",
            "hint": "Stem: -gĩrĩ / -ĩrĩ",
            "example": "Igĩrĩ — Two (Stem: -gĩrĩ / -ĩrĩ)"
          },
          {
            "target": "Ithatũ",
            "source": "Three",
            "pronunciation": "ee-thah-too",
            "hint": "Stem: -thatũ",
            "example": "Ithatũ — Three (Stem: -thatũ)"
          },
          {
            "target": "Inya",
            "source": "Four",
            "pronunciation": "ee-nyah",
            "hint": "Stem: -nya",
            "example": "Inya — Four (Stem: -nya)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mwega nĩ endaga andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Mũtĩ mũnene wĩ na mĩri mĩraaya.",
            "source": "A big tree has long roots."
          },
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mĩrongo ĩtatũ\" mean in English?",
            "correctAnswer": "Thirty",
            "options": [
              "Forty",
              "Fifty",
              "Thousand",
              "Thirty"
            ],
            "hint": "Three tens"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mĩrongo ĩnya\" mean in English?",
            "correctAnswer": "Forty",
            "options": [
              "Fifty",
              "Thousand",
              "Forty",
              "Thirty"
            ],
            "hint": "Four tens"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mĩrongo ĩthano\" mean in English?",
            "correctAnswer": "Fifty",
            "options": [
              "Thousand",
              "Fifty",
              "Thirty",
              "Forty"
            ],
            "hint": "Five tens"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fifty\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Mĩrongo ĩthano",
            "options": [
              "Mĩrongo ĩthano",
              "Mĩrongo ĩtatũ",
              "Mĩrongo ĩnya",
              "Nganga / Ngiri"
            ],
            "hint": "mee-rohn-goh ee-thah-noh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Thousand\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Nganga / Ngiri",
            "options": [
              "Mĩrongo ĩtatũ",
              "Mĩrongo ĩnya",
              "Mĩrongo ĩthano",
              "Nganga / Ngiri"
            ],
            "hint": "n-gahn-gah / n-gee-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"One\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Ĩmwe",
            "options": [
              "Mĩrongo ĩnya",
              "Mĩrongo ĩthano",
              "Ĩmwe",
              "Mĩrongo ĩtatũ"
            ],
            "hint": "ee-mweh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Mĩrongo ĩtatũ: Thirty, Mĩrongo ĩnya: Forty, Mĩrongo ĩthano: Fifty, Nganga / Ngiri: Thousand",
            "pairs": [
              {
                "left": "Mĩrongo ĩtatũ",
                "right": "Thirty"
              },
              {
                "left": "Mĩrongo ĩnya",
                "right": "Forty"
              },
              {
                "left": "Mĩrongo ĩthano",
                "right": "Fifty"
              },
              {
                "left": "Nganga / Ngiri",
                "right": "Thousand"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Thirty\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Mĩrongo ĩtatũ",
            "options": [
              "Mĩrongo ĩtatũ",
              "Mĩrongo ĩnya",
              "Mĩrongo ĩthano",
              "Nganga / Ngiri"
            ],
            "hint": "mee-rohn-goh ee-tah-too"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-8-family",
    "title": "Unit 8: Family & Relationships",
    "description": "Comprehensive Kikuyu (Gĩkũyũ) curriculum for Family & Relationships, vetted from L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
    "icon": "Users",
    "skills": [
      {
        "id": "kikuyu-exp-family",
        "title": "Family & Relationships",
        "icon": "Users",
        "description": "Master Kikuyu (Gĩkũyũ) family & relationships vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Family & Relationships, pay special attention to pronunciation and morphological prefixes/suffixes: 'Maitũ / Nyina' (Mother), 'Baba / Ithe' (Father), 'Kahĩĩ / Mũrũ' (Son / Boy), 'Mwarĩ / Mũirĩtu' (Daughter / Girl).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Maitũ / Nyina",
            "source": "Mother",
            "pronunciation": "mah-ee-too / nyee-nah",
            "hint": "'Maitũ' is affectionate ('our mother'); 'nyina' is formal ('his/her mother')",
            "example": "Maitũ / Nyina — Mother ('Maitũ' is affectionate ('our mother'); 'nyina' is formal ('his/her mother'))"
          },
          {
            "target": "Baba / Ithe",
            "source": "Father",
            "pronunciation": "bah-bah / ee-theh",
            "hint": "'Baba' = my father; 'ithe' = his/her father",
            "example": "Baba / Ithe — Father ('Baba' = my father; 'ithe' = his/her father)"
          },
          {
            "target": "Kahĩĩ / Mũrũ",
            "source": "Son / Boy",
            "pronunciation": "kah-hee-ee / moo-roo",
            "hint": "'Mũrũ wa...' = son of...; uninitiated boy: kĩhĩĩ",
            "example": "Kahĩĩ / Mũrũ — Son / Boy ('Mũrũ wa...' = son of...; uninitiated boy: kĩhĩĩ)"
          },
          {
            "target": "Mwarĩ / Mũirĩtu",
            "source": "Daughter / Girl",
            "pronunciation": "mwah-ree / moo-ee-ree-too",
            "hint": "'Mwarĩ wa...' = daughter of...; initiated maiden: mũirĩtu",
            "example": "Mwarĩ / Mũirĩtu — Daughter / Girl ('Mwarĩ wa...' = daughter of...; initiated maiden: mũirĩtu)"
          },
          {
            "target": "Mwanake",
            "source": "Young man / Warrior",
            "pronunciation": "mwah-nah-keh",
            "hint": "Plural: Anake (young initiated men)",
            "example": "Mwanake — Young man / Warrior (Plural: Anake (young initiated men))"
          },
          {
            "target": "Kaana",
            "source": "Child / Baby",
            "pronunciation": "kah-ah-nah",
            "hint": "Plural: Ciana (children)",
            "example": "Kaana — Child / Baby (Plural: Ciana (children))"
          },
          {
            "target": "Mũrũ wa maitũ",
            "source": "Brother",
            "pronunciation": "moo-roo wah mah-ee-too",
            "hint": "Literally 'son of our mother'",
            "example": "Mũrũ wa maitũ — Brother (Literally 'son of our mother')"
          },
          {
            "target": "Mwarĩ wa maitũ",
            "source": "Sister",
            "pronunciation": "mwah-ree wah mah-ee-too",
            "hint": "Literally 'daughter of our mother'",
            "example": "Mwarĩ wa maitũ — Sister (Literally 'daughter of our mother')"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mwega nĩ endaga andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Mũtĩ mũnene wĩ na mĩri mĩraaya.",
            "source": "A big tree has long roots."
          },
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Maitũ / Nyina\" mean in English?",
            "correctAnswer": "Mother",
            "options": [
              "Father",
              "Son / Boy",
              "Daughter / Girl",
              "Mother"
            ],
            "hint": "'Maitũ' is affectionate ('our mother'); 'nyina' is formal ('his/her mother')"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Baba / Ithe\" mean in English?",
            "correctAnswer": "Father",
            "options": [
              "Son / Boy",
              "Daughter / Girl",
              "Father",
              "Mother"
            ],
            "hint": "'Baba' = my father; 'ithe' = his/her father"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kahĩĩ / Mũrũ\" mean in English?",
            "correctAnswer": "Son / Boy",
            "options": [
              "Daughter / Girl",
              "Son / Boy",
              "Mother",
              "Father"
            ],
            "hint": "'Mũrũ wa...' = son of...; uninitiated boy: kĩhĩĩ"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Son / Boy\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Kahĩĩ / Mũrũ",
            "options": [
              "Kahĩĩ / Mũrũ",
              "Maitũ / Nyina",
              "Baba / Ithe",
              "Mwarĩ / Mũirĩtu"
            ],
            "hint": "kah-hee-ee / moo-roo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Daughter / Girl\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Mwarĩ / Mũirĩtu",
            "options": [
              "Maitũ / Nyina",
              "Baba / Ithe",
              "Kahĩĩ / Mũrũ",
              "Mwarĩ / Mũirĩtu"
            ],
            "hint": "mwah-ree / moo-ee-ree-too"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Young man / Warrior\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Mwanake",
            "options": [
              "Baba / Ithe",
              "Kahĩĩ / Mũrũ",
              "Mwanake",
              "Maitũ / Nyina"
            ],
            "hint": "mwah-nah-keh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Maitũ / Nyina: Mother, Baba / Ithe: Father, Kahĩĩ / Mũrũ: Son / Boy, Mwarĩ / Mũirĩtu: Daughter / Girl",
            "pairs": [
              {
                "left": "Maitũ / Nyina",
                "right": "Mother"
              },
              {
                "left": "Baba / Ithe",
                "right": "Father"
              },
              {
                "left": "Kahĩĩ / Mũrũ",
                "right": "Son / Boy"
              },
              {
                "left": "Mwarĩ / Mũirĩtu",
                "right": "Daughter / Girl"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Mother\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Maitũ / Nyina",
            "options": [
              "Maitũ / Nyina",
              "Baba / Ithe",
              "Kahĩĩ / Mũrũ",
              "Mwarĩ / Mũirĩtu"
            ],
            "hint": "mah-ee-too / nyee-nah"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-9-food",
    "title": "Unit 9: Food & Drink",
    "description": "Comprehensive Kikuyu (Gĩkũyũ) curriculum for Food & Drink, vetted from L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
    "icon": "Utensils",
    "skills": [
      {
        "id": "kikuyu-exp-food",
        "title": "Food & Drink",
        "icon": "Utensils",
        "description": "Master Kikuyu (Gĩkũyũ) food & drink vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Food & Drink, pay special attention to pronunciation and morphological prefixes/suffixes: 'Caai' (Tea), 'Irigũ' (Banana), 'Ngwacĩ' (Sweet Potato), 'Ũũkĩ' (Honey).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Caai",
            "source": "Tea",
            "pronunciation": "chah-ah-ee",
            "hint": "Tea cultivated extensively in Central Kenya Highlands",
            "example": "Caai — Tea (Tea cultivated extensively in Central Kenya Highlands)"
          },
          {
            "target": "Irigũ",
            "source": "Banana",
            "pronunciation": "ee-ree-goo",
            "hint": "Plural: Marigũ (staple crop in Gĩkũyũland)",
            "example": "Irigũ — Banana (Plural: Marigũ (staple crop in Gĩkũyũland))"
          },
          {
            "target": "Ngwacĩ",
            "source": "Sweet Potato",
            "pronunciation": "n-gwah-chee",
            "hint": "Traditional roasted or boiled sweet tuber",
            "example": "Ngwacĩ — Sweet Potato (Traditional roasted or boiled sweet tuber)"
          },
          {
            "target": "Ũũkĩ",
            "source": "Honey",
            "pronunciation": "oo-oo-kee",
            "hint": "Prized natural honey harvested from tree log hives",
            "example": "Ũũkĩ — Honey (Prized natural honey harvested from tree log hives)"
          },
          {
            "target": "Njohi",
            "source": "Traditional beer",
            "pronunciation": "n-joh-hee",
            "hint": "Fermented sugar cane or honey brew for elders' ceremonies",
            "example": "Njohi — Traditional beer (Fermented sugar cane or honey brew for elders' ceremonies)"
          },
          {
            "target": "Maaĩ",
            "source": "Water",
            "pronunciation": "mah-ah-ee",
            "hint": "Essential fresh water",
            "example": "Maaĩ — Water (Essential fresh water)"
          },
          {
            "target": "Irio",
            "source": "Food",
            "pronunciation": "ee-ree-oh",
            "hint": "Generic food, and the iconic mashed potato/corn/beans dish",
            "example": "Irio — Food (Generic food, and the iconic mashed potato/corn/beans dish)"
          },
          {
            "target": "Ngima",
            "source": "Ugali",
            "pronunciation": "n-gee-mah",
            "hint": "Traditional maize or millet meal cake",
            "example": "Ngima — Ugali (Traditional maize or millet meal cake)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mwega nĩ endaga andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Mũtĩ mũnene wĩ na mĩri mĩraaya.",
            "source": "A big tree has long roots."
          },
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Caai\" mean in English?",
            "correctAnswer": "Tea",
            "options": [
              "Banana",
              "Sweet Potato",
              "Honey",
              "Tea"
            ],
            "hint": "Tea cultivated extensively in Central Kenya Highlands"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Irigũ\" mean in English?",
            "correctAnswer": "Banana",
            "options": [
              "Sweet Potato",
              "Honey",
              "Banana",
              "Tea"
            ],
            "hint": "Plural: Marigũ (staple crop in Gĩkũyũland)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ngwacĩ\" mean in English?",
            "correctAnswer": "Sweet Potato",
            "options": [
              "Honey",
              "Sweet Potato",
              "Tea",
              "Banana"
            ],
            "hint": "Traditional roasted or boiled sweet tuber"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sweet Potato\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Ngwacĩ",
            "options": [
              "Ngwacĩ",
              "Caai",
              "Irigũ",
              "Ũũkĩ"
            ],
            "hint": "n-gwah-chee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Honey\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Ũũkĩ",
            "options": [
              "Caai",
              "Irigũ",
              "Ngwacĩ",
              "Ũũkĩ"
            ],
            "hint": "oo-oo-kee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Traditional beer\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Njohi",
            "options": [
              "Irigũ",
              "Ngwacĩ",
              "Njohi",
              "Caai"
            ],
            "hint": "n-joh-hee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Caai: Tea, Irigũ: Banana, Ngwacĩ: Sweet Potato, Ũũkĩ: Honey",
            "pairs": [
              {
                "left": "Caai",
                "right": "Tea"
              },
              {
                "left": "Irigũ",
                "right": "Banana"
              },
              {
                "left": "Ngwacĩ",
                "right": "Sweet Potato"
              },
              {
                "left": "Ũũkĩ",
                "right": "Honey"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Tea\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Caai",
            "options": [
              "Caai",
              "Irigũ",
              "Ngwacĩ",
              "Ũũkĩ"
            ],
            "hint": "chah-ah-ee"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-10-verbs",
    "title": "Unit 10: Verbs & Actions",
    "description": "Comprehensive Kikuyu (Gĩkũyũ) curriculum for Verbs & Actions, vetted from L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
    "icon": "Zap",
    "skills": [
      {
        "id": "kikuyu-exp-verbs",
        "title": "Verbs & Actions (Part 1)",
        "icon": "Zap",
        "description": "Master Kikuyu (Gĩkũyũ) verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Gũhota / Ũhoti' (To be able / Ability), 'Gũthĩtaka' (To accuse), 'Kwongerera' (To add to), 'Gũtaara' (To advise).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Gũhota / Ũhoti",
            "source": "To be able / Ability",
            "pronunciation": "goo-hoh-tah / oo-hoh-tee",
            "hint": "Verb stem -hota (be able), noun ũhoti (ability)",
            "example": "Gũhota / Ũhoti — To be able / Ability (Verb stem -hota (be able), noun ũhoti (ability))"
          },
          {
            "target": "Gũthĩtaka",
            "source": "To accuse",
            "pronunciation": "goo-thee-tah-kah",
            "hint": "Verb stem: -thĩtaka",
            "example": "Gũthĩtaka — To accuse (Verb stem: -thĩtaka)"
          },
          {
            "target": "Kwongerera",
            "source": "To add to",
            "pronunciation": "kwohn-geh-reh-rah",
            "hint": "Verb stem: -ongerera",
            "example": "Kwongerera — To add to (Verb stem: -ongerera)"
          },
          {
            "target": "Gũtaara",
            "source": "To advise",
            "pronunciation": "goo-tah-ah-rah",
            "hint": "Verb stem: -taara (give counsel)",
            "example": "Gũtaara — To advise (Verb stem: -taara (give counsel))"
          },
          {
            "target": "Kwĩtigĩra",
            "source": "To be afraid",
            "pronunciation": "kwee-tee-gee-rah",
            "hint": "Verb stem: -ĩtigĩra",
            "example": "Kwĩtigĩra — To be afraid (Verb stem: -ĩtigĩra)"
          },
          {
            "target": "Kwĩtĩkĩra / Kũiguana",
            "source": "To agree",
            "pronunciation": "kwee-tee-kee-rah / koo-ee-gwah-nah",
            "hint": "-ĩtĩkĩra = agree to; -iguana = agree together",
            "example": "Kwĩtĩkĩra / Kũiguana — To agree (-ĩtĩkĩra = agree to; -iguana = agree together)"
          },
          {
            "target": "Kũrakara",
            "source": "To be angry",
            "pronunciation": "koo-rah-kah-rah",
            "hint": "Verb stem: -rakara",
            "example": "Kũrakara — To be angry (Verb stem: -rakara)"
          },
          {
            "target": "Kũũria",
            "source": "To ask (question)",
            "pronunciation": "koo-oo-ree-ah",
            "hint": "Inquire; ask for something = kũhoya",
            "example": "Kũũria — To ask (question) (Inquire; ask for something = kũhoya)"
          },
          {
            "target": "Gũciara",
            "source": "To bear fruit / Give birth",
            "pronunciation": "goo-chee-ah-rah",
            "hint": "Verb stem: -ciara",
            "example": "Gũciara — To bear fruit / Give birth (Verb stem: -ciara)"
          },
          {
            "target": "Kũhũra",
            "source": "To beat / Strike",
            "pronunciation": "koo-hoo-rah",
            "hint": "Verb stem: -hũra",
            "example": "Kũhũra — To beat / Strike (Verb stem: -hũra)"
          },
          {
            "target": "Kwambĩrĩria",
            "source": "To begin",
            "pronunciation": "kwahm-bee-ree-ree-ah",
            "hint": "Verb stem: -ambĩrĩria",
            "example": "Kwambĩrĩria — To begin (Verb stem: -ambĩrĩria)"
          },
          {
            "target": "Kwĩtĩkia",
            "source": "To believe",
            "pronunciation": "kwee-tee-kee-ah",
            "hint": "Verb stem: -ĩtĩkia",
            "example": "Kwĩtĩkia — To believe (Verb stem: -ĩtĩkia)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mwega nĩ endaga andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Mũtĩ mũnene wĩ na mĩri mĩraaya.",
            "source": "A big tree has long roots."
          },
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Gũhota / Ũhoti\" mean in English?",
            "correctAnswer": "To be able / Ability",
            "options": [
              "To accuse",
              "To add to",
              "To advise",
              "To be able / Ability"
            ],
            "hint": "Verb stem -hota (be able), noun ũhoti (ability)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Gũthĩtaka\" mean in English?",
            "correctAnswer": "To accuse",
            "options": [
              "To add to",
              "To advise",
              "To accuse",
              "To be able / Ability"
            ],
            "hint": "Verb stem: -thĩtaka"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kwongerera\" mean in English?",
            "correctAnswer": "To add to",
            "options": [
              "To advise",
              "To add to",
              "To be able / Ability",
              "To accuse"
            ],
            "hint": "Verb stem: -ongerera"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To add to\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Kwongerera",
            "options": [
              "Kwongerera",
              "Gũhota / Ũhoti",
              "Gũthĩtaka",
              "Gũtaara"
            ],
            "hint": "kwohn-geh-reh-rah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To advise\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Gũtaara",
            "options": [
              "Gũhota / Ũhoti",
              "Gũthĩtaka",
              "Kwongerera",
              "Gũtaara"
            ],
            "hint": "goo-tah-ah-rah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To be afraid\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Kwĩtigĩra",
            "options": [
              "Gũthĩtaka",
              "Kwongerera",
              "Kwĩtigĩra",
              "Gũhota / Ũhoti"
            ],
            "hint": "kwee-tee-gee-rah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Gũhota / Ũhoti: To be able / Ability, Gũthĩtaka: To accuse, Kwongerera: To add to, Gũtaara: To advise",
            "pairs": [
              {
                "left": "Gũhota / Ũhoti",
                "right": "To be able / Ability"
              },
              {
                "left": "Gũthĩtaka",
                "right": "To accuse"
              },
              {
                "left": "Kwongerera",
                "right": "To add to"
              },
              {
                "left": "Gũtaara",
                "right": "To advise"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To be able / Ability\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Gũhota / Ũhoti",
            "options": [
              "Gũhota / Ũhoti",
              "Gũthĩtaka",
              "Kwongerera",
              "Gũtaara"
            ],
            "hint": "goo-hoh-tah / oo-hoh-tee"
          }
        ]
      },
      {
        "id": "kikuyu-exp-verbs-2",
        "title": "Verbs & Actions (Part 2)",
        "icon": "Zap",
        "description": "Master Kikuyu (Gĩkũyũ) verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Gũthika' (To bury), 'Kũgũra' (To buy), 'Gũkuua' (To carry), 'Kũruga' (To cook).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Gũthika",
            "source": "To bury",
            "pronunciation": "goo-thee-kah",
            "hint": "Verb stem: -thika",
            "example": "Gũthika — To bury (Verb stem: -thika)"
          },
          {
            "target": "Kũgũra",
            "source": "To buy",
            "pronunciation": "koo-goo-rah",
            "hint": "Verb stem: -gũra",
            "example": "Kũgũra — To buy (Verb stem: -gũra)"
          },
          {
            "target": "Gũkuua",
            "source": "To carry",
            "pronunciation": "goo-koo-oo-ah",
            "hint": "Transport loads or burdens",
            "example": "Gũkuua — To carry (Transport loads or burdens)"
          },
          {
            "target": "Kũruga",
            "source": "To cook",
            "pronunciation": "koo-roo-gah",
            "hint": "Preparing food over the fire",
            "example": "Kũruga — To cook (Preparing food over the fire)"
          },
          {
            "target": "Gũtema / Gũtinia",
            "source": "To cut",
            "pronunciation": "goo-teh-mah / goo-tee-nee-ah",
            "hint": "Gũtema = cut down/slash; gũtinia = sever/cut off",
            "example": "Gũtema / Gũtinia — To cut (Gũtema = cut down/slash; gũtinia = sever/cut off)"
          },
          {
            "target": "Gũkua",
            "source": "To die",
            "pronunciation": "goo-koo-ah",
            "hint": "Verb stem: -kua",
            "example": "Gũkua — To die (Verb stem: -kua)"
          },
          {
            "target": "Kwenja",
            "source": "To dig",
            "pronunciation": "kwehn-jah",
            "hint": "Verb stem: -enja",
            "example": "Kwenja — To dig (Verb stem: -enja)"
          },
          {
            "target": "Gũtaha maaĩ",
            "source": "To draw water",
            "pronunciation": "goo-tah-hah mah-ah-ee",
            "hint": "Fetching river or stream water",
            "example": "Gũtaha maaĩ — To draw water (Fetching river or stream water)"
          },
          {
            "target": "Kũnyua",
            "source": "To drink",
            "pronunciation": "koo-nyoo-ah",
            "hint": "Present: anyua (he/she drinks)",
            "example": "Kũnyua — To drink (Present: anyua (he/she drinks))"
          },
          {
            "target": "Kũrĩa",
            "source": "To eat",
            "pronunciation": "koo-ree-ah",
            "hint": "Present: arĩa (he/she eats)",
            "example": "Kũrĩa — To eat (Present: arĩa (he/she eats))"
          },
          {
            "target": "Kwendana / Kwenda",
            "source": "To love / Desire",
            "pronunciation": "kwehn-dah-nah / kwehn-dah",
            "hint": "Love, affection, preference",
            "example": "Kwendana / Kwenda — To love / Desire (Love, affection, preference)"
          },
          {
            "target": "Kuona / Kũmenya",
            "source": "To see / Understand",
            "pronunciation": "koo-oh-nah / koo-meh-nyah",
            "hint": "'Kuona' = see; 'kũmenya' = know / understand",
            "example": "Kuona / Kũmenya — To see / Understand ('Kuona' = see; 'kũmenya' = know / understand)"
          },
          {
            "target": "Kũina",
            "source": "To sing / Dance",
            "pronunciation": "koo-ee-nah",
            "hint": "Singing songs or participating in cultural dances",
            "example": "Kũina — To sing / Dance (Singing songs or participating in cultural dances)"
          },
          {
            "target": "Kwarĩria / Kũheana",
            "source": "To speak / Talk",
            "pronunciation": "kwah-ree-ree-ah / koo-heh-ah-nah",
            "hint": "Dialogue and discussion",
            "example": "Kwarĩria / Kũheana — To speak / Talk (Dialogue and discussion)"
          },
          {
            "target": "Kũrutana",
            "source": "To teach",
            "pronunciation": "koo-roo-tah-nah",
            "hint": "Imparting knowledge or skills",
            "example": "Kũrutana — To teach (Imparting knowledge or skills)"
          }
        ],
        "sentences": [
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          },
          {
            "target": "Ciana nĩ irathاكا nja ya nyũmba.",
            "source": "The children are playing outside the house."
          },
          {
            "target": "Wĩra wa mũgũnda nĩ wambĩrĩirie rũciinĩ.",
            "source": "The farm work started in the morning."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Gũthika\" mean in English?",
            "correctAnswer": "To bury",
            "options": [
              "To buy",
              "To carry",
              "To cook",
              "To bury"
            ],
            "hint": "Verb stem: -thika"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũgũra\" mean in English?",
            "correctAnswer": "To buy",
            "options": [
              "To carry",
              "To cook",
              "To buy",
              "To bury"
            ],
            "hint": "Verb stem: -gũra"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Gũkuua\" mean in English?",
            "correctAnswer": "To carry",
            "options": [
              "To cook",
              "To carry",
              "To bury",
              "To buy"
            ],
            "hint": "Transport loads or burdens"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To carry\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Gũkuua",
            "options": [
              "Gũkuua",
              "Gũthika",
              "Kũgũra",
              "Kũruga"
            ],
            "hint": "goo-koo-oo-ah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To cook\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Kũruga",
            "options": [
              "Gũthika",
              "Kũgũra",
              "Gũkuua",
              "Kũruga"
            ],
            "hint": "koo-roo-gah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To cut\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Gũtema / Gũtinia",
            "options": [
              "Kũgũra",
              "Gũkuua",
              "Gũtema / Gũtinia",
              "Gũthika"
            ],
            "hint": "goo-teh-mah / goo-tee-nee-ah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Gũthika: To bury, Kũgũra: To buy, Gũkuua: To carry, Kũruga: To cook",
            "pairs": [
              {
                "left": "Gũthika",
                "right": "To bury"
              },
              {
                "left": "Kũgũra",
                "right": "To buy"
              },
              {
                "left": "Gũkuua",
                "right": "To carry"
              },
              {
                "left": "Kũruga",
                "right": "To cook"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To bury\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Gũthika",
            "options": [
              "Gũthika",
              "Kũgũra",
              "Gũkuua",
              "Kũruga"
            ],
            "hint": "goo-thee-kah"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-11-nature",
    "title": "Unit 11: Nature & Environment",
    "description": "Comprehensive Kikuyu (Gĩkũyũ) curriculum for Nature & Environment, vetted from L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
    "icon": "Sun",
    "skills": [
      {
        "id": "kikuyu-exp-nature",
        "title": "Nature & Environment (Part 1)",
        "icon": "Sun",
        "description": "Master Kikuyu (Gĩkũyũ) nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Thĩ' (Earth / World), 'Tĩri' (Soil / Ground), 'Kĩrĩma' (Mountain / Hill), 'Mũgumo' (Sacred Fig Tree).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Thĩ",
            "source": "Earth / World",
            "pronunciation": "thee",
            "hint": "The earth or world under heaven",
            "example": "Thĩ — Earth / World (The earth or world under heaven)"
          },
          {
            "target": "Tĩri",
            "source": "Soil / Ground",
            "pronunciation": "tee-ree",
            "hint": "Fertile volcanic soil of the highlands",
            "example": "Tĩri — Soil / Ground (Fertile volcanic soil of the highlands)"
          },
          {
            "target": "Kĩrĩma",
            "source": "Mountain / Hill",
            "pronunciation": "kee-ree-mah",
            "hint": "Plural: Irĩma; Mount Kenya = Kĩrĩnyaga",
            "example": "Kĩrĩma — Mountain / Hill (Plural: Irĩma; Mount Kenya = Kĩrĩnyaga)"
          },
          {
            "target": "Mũgumo",
            "source": "Sacred Fig Tree",
            "pronunciation": "moo-goo-moh",
            "hint": "Venerated parasitic fig tree, focal point of traditional prayer",
            "example": "Mũgumo — Sacred Fig Tree (Venerated parasitic fig tree, focal point of traditional prayer)"
          },
          {
            "target": "Gĩthaka",
            "source": "Forest / Bush",
            "pronunciation": "gee-thah-kah",
            "hint": "Ancestral bushland or land estate",
            "example": "Gĩthaka — Forest / Bush (Ancestral bushland or land estate)"
          },
          {
            "target": "Mbura",
            "source": "Rain",
            "pronunciation": "m-boo-rah",
            "hint": "Precious life-sustaining rainfall",
            "example": "Mbura — Rain (Precious life-sustaining rainfall)"
          },
          {
            "target": "Rĩũa",
            "source": "Sun",
            "pronunciation": "ree-oo-ah",
            "hint": "Sun and daylight",
            "example": "Rĩũa — Sun (Sun and daylight)"
          },
          {
            "target": "Mweri",
            "source": "Moon / Month",
            "pronunciation": "mweh-ree",
            "hint": "Moon or lunar calendar month",
            "example": "Mweri — Moon / Month (Moon or lunar calendar month)"
          },
          {
            "target": "Njata",
            "source": "Star",
            "pronunciation": "n-jah-tah",
            "hint": "Night sky star",
            "example": "Njata — Star (Night sky star)"
          },
          {
            "target": "Rũhuho",
            "source": "Wind",
            "pronunciation": "roo-hoo-hoh",
            "hint": "Plural: 'Huho (breeze or strong wind)",
            "example": "Rũhuho — Wind (Plural: 'Huho (breeze or strong wind))"
          },
          {
            "target": "Itu",
            "source": "Cloud",
            "pronunciation": "ee-too",
            "hint": "Plural: Matu (rainclouds)",
            "example": "Itu — Cloud (Plural: Matu (rainclouds))"
          },
          {
            "target": "Mwaki",
            "source": "Fire",
            "pronunciation": "mwah-kee",
            "hint": "Hearth fire or burning wood",
            "example": "Mwaki — Fire (Hearth fire or burning wood)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mwega nĩ endaga andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Mũtĩ mũnene wĩ na mĩri mĩraaya.",
            "source": "A big tree has long roots."
          },
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Thĩ\" mean in English?",
            "correctAnswer": "Earth / World",
            "options": [
              "Soil / Ground",
              "Mountain / Hill",
              "Sacred Fig Tree",
              "Earth / World"
            ],
            "hint": "The earth or world under heaven"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Tĩri\" mean in English?",
            "correctAnswer": "Soil / Ground",
            "options": [
              "Mountain / Hill",
              "Sacred Fig Tree",
              "Soil / Ground",
              "Earth / World"
            ],
            "hint": "Fertile volcanic soil of the highlands"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kĩrĩma\" mean in English?",
            "correctAnswer": "Mountain / Hill",
            "options": [
              "Sacred Fig Tree",
              "Mountain / Hill",
              "Earth / World",
              "Soil / Ground"
            ],
            "hint": "Plural: Irĩma; Mount Kenya = Kĩrĩnyaga"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mountain / Hill\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Kĩrĩma",
            "options": [
              "Kĩrĩma",
              "Thĩ",
              "Tĩri",
              "Mũgumo"
            ],
            "hint": "kee-ree-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sacred Fig Tree\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Mũgumo",
            "options": [
              "Thĩ",
              "Tĩri",
              "Kĩrĩma",
              "Mũgumo"
            ],
            "hint": "moo-goo-moh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Forest / Bush\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Gĩthaka",
            "options": [
              "Tĩri",
              "Kĩrĩma",
              "Gĩthaka",
              "Thĩ"
            ],
            "hint": "gee-thah-kah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Thĩ: Earth / World, Tĩri: Soil / Ground, Kĩrĩma: Mountain / Hill, Mũgumo: Sacred Fig Tree",
            "pairs": [
              {
                "left": "Thĩ",
                "right": "Earth / World"
              },
              {
                "left": "Tĩri",
                "right": "Soil / Ground"
              },
              {
                "left": "Kĩrĩma",
                "right": "Mountain / Hill"
              },
              {
                "left": "Mũgumo",
                "right": "Sacred Fig Tree"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Earth / World\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Thĩ",
            "options": [
              "Thĩ",
              "Tĩri",
              "Kĩrĩma",
              "Mũgumo"
            ],
            "hint": "thee"
          }
        ]
      },
      {
        "id": "kikuyu-exp-nature-2",
        "title": "Nature & Environment (Part 2)",
        "icon": "Sun",
        "description": "Master Kikuyu (Gĩkũyũ) nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Mahiga' (Stones), 'Heho' (Coldness), 'Nyeki' (Grass), 'Nyamũ' (Animal / Wildlife).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Mahiga",
            "source": "Stones",
            "pronunciation": "mah-hee-gah",
            "hint": "Singular: Ihiga (hearth-stones / stones)",
            "example": "Mahiga — Stones (Singular: Ihiga (hearth-stones / stones))"
          },
          {
            "target": "Heho",
            "source": "Coldness",
            "pronunciation": "heh-hoh",
            "hint": "Highland chill or cool air",
            "example": "Heho — Coldness (Highland chill or cool air)"
          },
          {
            "target": "Nyeki",
            "source": "Grass",
            "pronunciation": "nyeh-kee",
            "hint": "Pasture grass for livestock",
            "example": "Nyeki — Grass (Pasture grass for livestock)"
          },
          {
            "target": "Nyamũ",
            "source": "Animal / Wildlife",
            "pronunciation": "nyah-moo",
            "hint": "General term for wildlife and animals",
            "example": "Nyamũ — Animal / Wildlife (General term for wildlife and animals)"
          },
          {
            "target": "Nyoni",
            "source": "Bird",
            "pronunciation": "nyoh-nee",
            "hint": "Class III noun for bird",
            "example": "Nyoni — Bird (Class III noun for bird)"
          },
          {
            "target": "Njũkĩ",
            "source": "Bee",
            "pronunciation": "n-joo-kee",
            "hint": "Honeybee",
            "example": "Njũkĩ — Bee (Honeybee)"
          },
          {
            "target": "Mũrũthi",
            "source": "Lion",
            "pronunciation": "moo-roo-thee",
            "hint": "Revered apex predator; promoted to Class II",
            "example": "Mũrũthi — Lion (Revered apex predator; promoted to Class II)"
          },
          {
            "target": "Ngarĩ",
            "source": "Leopard",
            "pronunciation": "n-gah-ree",
            "hint": "Spotted predator",
            "example": "Ngarĩ — Leopard (Spotted predator)"
          },
          {
            "target": "Njogu",
            "source": "Elephant",
            "pronunciation": "n-joh-goo",
            "hint": "Mighty forest and savanna elephant",
            "example": "Njogu — Elephant (Mighty forest and savanna elephant)"
          },
          {
            "target": "Mbogo",
            "source": "Buffalo",
            "pronunciation": "m-boh-goh",
            "hint": "Cape buffalo of the Aberdares and Mt. Kenya",
            "example": "Mbogo — Buffalo (Cape buffalo of the Aberdares and Mt. Kenya)"
          },
          {
            "target": "Ng'ombe",
            "source": "Cow / Cattle",
            "pronunciation": "n-gohm-beh",
            "hint": "Domestic bovine cattle",
            "example": "Ng'ombe — Cow / Cattle (Domestic bovine cattle)"
          },
          {
            "target": "Ndegwa",
            "source": "Bull / Ox",
            "pronunciation": "n-deh-gwah",
            "hint": "Male ox or bull",
            "example": "Ndegwa — Bull / Ox (Male ox or bull)"
          },
          {
            "target": "Mbũri",
            "source": "Goat",
            "pronunciation": "m-boo-ree",
            "hint": "Prized livestock animal",
            "example": "Mbũri — Goat (Prized livestock animal)"
          },
          {
            "target": "Ndũrũme",
            "source": "Sheep / Ram",
            "pronunciation": "n-doo-roo-meh",
            "hint": "Sacrificial male ram",
            "example": "Ndũrũme — Sheep / Ram (Sacrificial male ram)"
          }
        ],
        "sentences": [
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          },
          {
            "target": "Ciana nĩ irathاكا nja ya nyũmba.",
            "source": "The children are playing outside the house."
          },
          {
            "target": "Wĩra wa mũgũnda nĩ wambĩrĩirie rũciinĩ.",
            "source": "The farm work started in the morning."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mahiga\" mean in English?",
            "correctAnswer": "Stones",
            "options": [
              "Coldness",
              "Grass",
              "Animal / Wildlife",
              "Stones"
            ],
            "hint": "Singular: Ihiga (hearth-stones / stones)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Heho\" mean in English?",
            "correctAnswer": "Coldness",
            "options": [
              "Grass",
              "Animal / Wildlife",
              "Coldness",
              "Stones"
            ],
            "hint": "Highland chill or cool air"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nyeki\" mean in English?",
            "correctAnswer": "Grass",
            "options": [
              "Animal / Wildlife",
              "Grass",
              "Stones",
              "Coldness"
            ],
            "hint": "Pasture grass for livestock"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Grass\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Nyeki",
            "options": [
              "Nyeki",
              "Mahiga",
              "Heho",
              "Nyamũ"
            ],
            "hint": "nyeh-kee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Animal / Wildlife\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Nyamũ",
            "options": [
              "Mahiga",
              "Heho",
              "Nyeki",
              "Nyamũ"
            ],
            "hint": "nyah-moo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bird\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Nyoni",
            "options": [
              "Heho",
              "Nyeki",
              "Nyoni",
              "Mahiga"
            ],
            "hint": "nyoh-nee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Mahiga: Stones, Heho: Coldness, Nyeki: Grass, Nyamũ: Animal / Wildlife",
            "pairs": [
              {
                "left": "Mahiga",
                "right": "Stones"
              },
              {
                "left": "Heho",
                "right": "Coldness"
              },
              {
                "left": "Nyeki",
                "right": "Grass"
              },
              {
                "left": "Nyamũ",
                "right": "Animal / Wildlife"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Stones\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Mahiga",
            "options": [
              "Mahiga",
              "Heho",
              "Nyeki",
              "Nyamũ"
            ],
            "hint": "mah-hee-gah"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-12-body",
    "title": "Unit 12: Body Parts",
    "description": "Comprehensive Kikuyu (Gĩkũyũ) curriculum for Body Parts, vetted from L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
    "icon": "Heart",
    "skills": [
      {
        "id": "kikuyu-exp-body",
        "title": "Body Parts (Part 1)",
        "icon": "Heart",
        "description": "Master Kikuyu (Gĩkũyũ) body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Mwĩrĩ' (Living body), 'Mũtwe' (Head), 'Rĩitho' (Eye), 'Gũtũ' (Ear).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Mwĩrĩ",
            "source": "Living body",
            "pronunciation": "mwee-ree",
            "hint": "The living human body (corpse is kĩĩmba)",
            "example": "Mwĩrĩ — Living body (The living human body (corpse is kĩĩmba))"
          },
          {
            "target": "Mũtwe",
            "source": "Head",
            "pronunciation": "moo-tweh",
            "hint": "Plural: Mĩtwe",
            "example": "Mũtwe — Head (Plural: Mĩtwe)"
          },
          {
            "target": "Rĩitho",
            "source": "Eye",
            "pronunciation": "ree-ee-thoh",
            "hint": "Plural: Maitho",
            "example": "Rĩitho — Eye (Plural: Maitho)"
          },
          {
            "target": "Gũtũ",
            "source": "Ear",
            "pronunciation": "goo-too",
            "hint": "Plural: Matũ (Class VIII body noun)",
            "example": "Gũtũ — Ear (Plural: Matũ (Class VIII body noun))"
          },
          {
            "target": "Iniũrũ",
            "source": "Nose",
            "pronunciation": "ee-nee-oo-roo",
            "hint": "Plural: Maniũrũ",
            "example": "Iniũrũ — Nose (Plural: Maniũrũ)"
          },
          {
            "target": "Mũromo",
            "source": "Mouth",
            "pronunciation": "moo-roh-moh",
            "hint": "Plural: Mĩromo",
            "example": "Mũromo — Mouth (Plural: Mĩromo)"
          },
          {
            "target": "Igego",
            "source": "Tooth",
            "pronunciation": "ee-geh-goh",
            "hint": "Plural: Magego",
            "example": "Igego — Tooth (Plural: Magego)"
          },
          {
            "target": "Rũrĩmĩ",
            "source": "Tongue",
            "pronunciation": "roo-ree-mee",
            "hint": "Plural: Nĩmĩ (Class VI noun)",
            "example": "Rũrĩmĩ — Tongue (Plural: Nĩmĩ (Class VI noun))"
          },
          {
            "target": "Nderu",
            "source": "Beard",
            "pronunciation": "n-deh-roo",
            "hint": "Facial hair and whiskers",
            "example": "Nderu — Beard (Facial hair and whiskers)"
          },
          {
            "target": "Ngingo",
            "source": "Neck",
            "pronunciation": "n-geen-goh",
            "hint": "Anatomical neck",
            "example": "Ngingo — Neck (Anatomical neck)"
          },
          {
            "target": "Gĩthũri",
            "source": "Chest",
            "pronunciation": "gee-thoo-ree",
            "hint": "Plural: Ithũri",
            "example": "Gĩthũri — Chest (Plural: Ithũri)"
          },
          {
            "target": "Ngoro",
            "source": "Heart",
            "pronunciation": "n-goh-roh",
            "hint": "Physical heart and seat of feelings",
            "example": "Ngoro — Heart (Physical heart and seat of feelings)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mwega nĩ endaga andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Mũtĩ mũnene wĩ na mĩri mĩraaya.",
            "source": "A big tree has long roots."
          },
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mwĩrĩ\" mean in English?",
            "correctAnswer": "Living body",
            "options": [
              "Head",
              "Eye",
              "Ear",
              "Living body"
            ],
            "hint": "The living human body (corpse is kĩĩmba)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mũtwe\" mean in English?",
            "correctAnswer": "Head",
            "options": [
              "Eye",
              "Ear",
              "Head",
              "Living body"
            ],
            "hint": "Plural: Mĩtwe"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Rĩitho\" mean in English?",
            "correctAnswer": "Eye",
            "options": [
              "Ear",
              "Eye",
              "Living body",
              "Head"
            ],
            "hint": "Plural: Maitho"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eye\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Rĩitho",
            "options": [
              "Rĩitho",
              "Mwĩrĩ",
              "Mũtwe",
              "Gũtũ"
            ],
            "hint": "ree-ee-thoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ear\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Gũtũ",
            "options": [
              "Mwĩrĩ",
              "Mũtwe",
              "Rĩitho",
              "Gũtũ"
            ],
            "hint": "goo-too"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Iniũrũ",
            "options": [
              "Mũtwe",
              "Rĩitho",
              "Iniũrũ",
              "Mwĩrĩ"
            ],
            "hint": "ee-nee-oo-roo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Mwĩrĩ: Living body, Mũtwe: Head, Rĩitho: Eye, Gũtũ: Ear",
            "pairs": [
              {
                "left": "Mwĩrĩ",
                "right": "Living body"
              },
              {
                "left": "Mũtwe",
                "right": "Head"
              },
              {
                "left": "Rĩitho",
                "right": "Eye"
              },
              {
                "left": "Gũtũ",
                "right": "Ear"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Living body\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Mwĩrĩ",
            "options": [
              "Mwĩrĩ",
              "Mũtwe",
              "Rĩitho",
              "Gũtũ"
            ],
            "hint": "mwee-ree"
          }
        ]
      },
      {
        "id": "kikuyu-exp-body-2",
        "title": "Body Parts (Part 2)",
        "icon": "Heart",
        "description": "Master Kikuyu (Gĩkũyũ) body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Nda' (Stomach / Abdomen), 'Mũgongo' (Back), 'Guoko' (Arm / Hand), 'Kũgũrũ' (Leg / Foot).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Nda",
            "source": "Stomach / Abdomen",
            "pronunciation": "n-dah",
            "hint": "Stomach, belly, or pregnancy",
            "example": "Nda — Stomach / Abdomen (Stomach, belly, or pregnancy)"
          },
          {
            "target": "Mũgongo",
            "source": "Back",
            "pronunciation": "moo-gohn-goh",
            "hint": "Plural: Mĩgongo",
            "example": "Mũgongo — Back (Plural: Mĩgongo)"
          },
          {
            "target": "Guoko",
            "source": "Arm / Hand",
            "pronunciation": "gwah-koh",
            "hint": "Plural: Moko / Maoko (Class VIII body noun)",
            "example": "Guoko — Arm / Hand (Plural: Moko / Maoko (Class VIII body noun))"
          },
          {
            "target": "Kũgũrũ",
            "source": "Leg / Foot",
            "pronunciation": "koo-goo-roo",
            "hint": "Plural: Magũrũ (Class VIII body noun)",
            "example": "Kũgũrũ — Leg / Foot (Plural: Magũrũ (Class VIII body noun))"
          },
          {
            "target": "Thakame",
            "source": "Blood",
            "pronunciation": "thah-kah-meh",
            "hint": "Lifeblood",
            "example": "Thakame — Blood (Lifeblood)"
          },
          {
            "target": "Ihĩndĩ",
            "source": "Bone",
            "pronunciation": "ee-heen-dee",
            "hint": "Plural: Mahĩndĩ",
            "example": "Ihĩndĩ — Bone (Plural: Mahĩndĩ)"
          }
        ],
        "sentences": [
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          },
          {
            "target": "Ciana nĩ irathاكا nja ya nyũmba.",
            "source": "The children are playing outside the house."
          },
          {
            "target": "Wĩra wa mũgũnda nĩ wambĩrĩirie rũciinĩ.",
            "source": "The farm work started in the morning."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nda\" mean in English?",
            "correctAnswer": "Stomach / Abdomen",
            "options": [
              "Back",
              "Arm / Hand",
              "Leg / Foot",
              "Stomach / Abdomen"
            ],
            "hint": "Stomach, belly, or pregnancy"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mũgongo\" mean in English?",
            "correctAnswer": "Back",
            "options": [
              "Arm / Hand",
              "Leg / Foot",
              "Back",
              "Stomach / Abdomen"
            ],
            "hint": "Plural: Mĩgongo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Guoko\" mean in English?",
            "correctAnswer": "Arm / Hand",
            "options": [
              "Leg / Foot",
              "Arm / Hand",
              "Stomach / Abdomen",
              "Back"
            ],
            "hint": "Plural: Moko / Maoko (Class VIII body noun)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Arm / Hand\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Guoko",
            "options": [
              "Guoko",
              "Nda",
              "Mũgongo",
              "Kũgũrũ"
            ],
            "hint": "gwah-koh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leg / Foot\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Kũgũrũ",
            "options": [
              "Nda",
              "Mũgongo",
              "Guoko",
              "Kũgũrũ"
            ],
            "hint": "koo-goo-roo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Blood\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Thakame",
            "options": [
              "Mũgongo",
              "Guoko",
              "Thakame",
              "Nda"
            ],
            "hint": "thah-kah-meh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Nda: Stomach / Abdomen, Mũgongo: Back, Guoko: Arm / Hand, Kũgũrũ: Leg / Foot",
            "pairs": [
              {
                "left": "Nda",
                "right": "Stomach / Abdomen"
              },
              {
                "left": "Mũgongo",
                "right": "Back"
              },
              {
                "left": "Guoko",
                "right": "Arm / Hand"
              },
              {
                "left": "Kũgũrũ",
                "right": "Leg / Foot"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Stomach / Abdomen\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Nda",
            "options": [
              "Nda",
              "Mũgongo",
              "Guoko",
              "Kũgũrũ"
            ],
            "hint": "n-dah"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-13-culture",
    "title": "Unit 13: Culture & Heritage",
    "description": "Comprehensive Kikuyu (Gĩkũyũ) curriculum for Culture & Heritage, vetted from L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
    "icon": "Award",
    "skills": [
      {
        "id": "kikuyu-exp-culture",
        "title": "Culture & Heritage",
        "icon": "Award",
        "description": "Master Kikuyu (Gĩkũyũ) culture & heritage vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Culture & Heritage, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ngai' (God (The Creator)), 'Rũracio' (Dowry / Bride Gift), 'Ciira' (Lawsuit / Case), 'Ndĩrĩ' (Wooden Mortar).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Ngai",
            "source": "God (The Creator)",
            "pronunciation": "n-gah-ee",
            "hint": "Supreme deity dwelling atop Kĩrĩnyaga (Mount Kenya)",
            "example": "Ngai — God (The Creator) (Supreme deity dwelling atop Kĩrĩnyaga (Mount Kenya))"
          },
          {
            "target": "Rũracio",
            "source": "Dowry / Bride Gift",
            "pronunciation": "roo-rah-chee-oh",
            "hint": "Traditional matrimonial tokens uniting two families",
            "example": "Rũracio — Dowry / Bride Gift (Traditional matrimonial tokens uniting two families)"
          },
          {
            "target": "Ciira",
            "source": "Lawsuit / Case",
            "pronunciation": "chee-ee-rah",
            "hint": "Legal proceeding heard and decided by elders",
            "example": "Ciira — Lawsuit / Case (Legal proceeding heard and decided by elders)"
          },
          {
            "target": "Ndĩrĩ",
            "source": "Wooden Mortar",
            "pronunciation": "n-dee-ree",
            "hint": "Carved heavy hardwood mortar for pounding maize and grain",
            "example": "Ndĩrĩ — Wooden Mortar (Carved heavy hardwood mortar for pounding maize and grain)"
          },
          {
            "target": "Mwatũ",
            "source": "Beehive",
            "pronunciation": "mwah-too",
            "hint": "Hollowed cylindrical log beehive hung high in forest canopies",
            "example": "Mwatũ — Beehive (Hollowed cylindrical log beehive hung high in forest canopies)"
          },
          {
            "target": "Kĩnandu",
            "source": "Ceremonial Gourd",
            "pronunciation": "kee-nahn-doo",
            "hint": "Small ceremonial gourd kept for ritual castor oil",
            "example": "Kĩnandu — Ceremonial Gourd (Small ceremonial gourd kept for ritual castor oil)"
          },
          {
            "target": "Watho",
            "source": "Law / Commandment",
            "pronunciation": "wah-thoh",
            "hint": "Customary law and ordinances",
            "example": "Watho — Law / Commandment (Customary law and ordinances)"
          },
          {
            "target": "Mũtugo",
            "source": "Custom / Tradition",
            "pronunciation": "moo-too-goh",
            "hint": "Established cultural heritage and ancestral customs",
            "example": "Mũtugo — Custom / Tradition (Established cultural heritage and ancestral customs)"
          },
          {
            "target": "Kĩondo",
            "source": "Traditional woven bag",
            "pronunciation": "kee-ohn-doh",
            "hint": "Famous indigenous sisal woven carrying bag (skin bag is mondo)",
            "example": "Kĩondo — Traditional woven bag (Famous indigenous sisal woven carrying bag (skin bag is mondo))"
          },
          {
            "target": "Mũguĩ",
            "source": "Arrow",
            "pronunciation": "moo-gwee",
            "hint": "Quiver arrow (quiver = kĩano / thiaka)",
            "example": "Mũguĩ — Arrow (Quiver arrow (quiver = kĩano / thiaka))"
          },
          {
            "target": "Ithanwa",
            "source": "Ceremonial axe",
            "pronunciation": "ee-thahn-wah",
            "hint": "Traditional tanged axe-blade used for ritual purification",
            "example": "Ithanwa — Ceremonial axe (Traditional tanged axe-blade used for ritual purification)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mwega nĩ endaga andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Mũtĩ mũnene wĩ na mĩri mĩraaya.",
            "source": "A big tree has long roots."
          },
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ngai\" mean in English?",
            "correctAnswer": "God (The Creator)",
            "options": [
              "Dowry / Bride Gift",
              "Lawsuit / Case",
              "Wooden Mortar",
              "God (The Creator)"
            ],
            "hint": "Supreme deity dwelling atop Kĩrĩnyaga (Mount Kenya)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Rũracio\" mean in English?",
            "correctAnswer": "Dowry / Bride Gift",
            "options": [
              "Lawsuit / Case",
              "Wooden Mortar",
              "Dowry / Bride Gift",
              "God (The Creator)"
            ],
            "hint": "Traditional matrimonial tokens uniting two families"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ciira\" mean in English?",
            "correctAnswer": "Lawsuit / Case",
            "options": [
              "Wooden Mortar",
              "Lawsuit / Case",
              "God (The Creator)",
              "Dowry / Bride Gift"
            ],
            "hint": "Legal proceeding heard and decided by elders"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lawsuit / Case\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Ciira",
            "options": [
              "Ciira",
              "Ngai",
              "Rũracio",
              "Ndĩrĩ"
            ],
            "hint": "chee-ee-rah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Wooden Mortar\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Ndĩrĩ",
            "options": [
              "Ngai",
              "Rũracio",
              "Ciira",
              "Ndĩrĩ"
            ],
            "hint": "n-dee-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Beehive\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Mwatũ",
            "options": [
              "Rũracio",
              "Ciira",
              "Mwatũ",
              "Ngai"
            ],
            "hint": "mwah-too"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Ngai: God (The Creator), Rũracio: Dowry / Bride Gift, Ciira: Lawsuit / Case, Ndĩrĩ: Wooden Mortar",
            "pairs": [
              {
                "left": "Ngai",
                "right": "God (The Creator)"
              },
              {
                "left": "Rũracio",
                "right": "Dowry / Bride Gift"
              },
              {
                "left": "Ciira",
                "right": "Lawsuit / Case"
              },
              {
                "left": "Ndĩrĩ",
                "right": "Wooden Mortar"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"God (The Creator)\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Ngai",
            "options": [
              "Ngai",
              "Rũracio",
              "Ciira",
              "Ndĩrĩ"
            ],
            "hint": "n-gah-ee"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-14-proverbs",
    "title": "Unit 14: Proverbs & Wisdom (Thimo)",
    "description": "Comprehensive Kikuyu (Gĩkũyũ) curriculum for Proverbs & Wisdom (Thimo), vetted from L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "kikuyu-exp-proverbs",
        "title": "Proverbs & Wisdom (Thimo)",
        "icon": "BookOpen",
        "description": "Master Kikuyu (Gĩkũyũ) proverbs & wisdom (thimo) vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Proverbs & Wisdom (Thimo), pay special attention to pronunciation and morphological prefixes/suffixes: 'Indo nĩ kũrĩmithanio' (Many hands make light work), 'Kaara kamwe gatingĩyũragĩra ndaa' (United we stand, divided we fall), 'Kaana ka ngarĩ gakunyaga ta nyina' (Like father, like son), 'Mageria nomo mahota' (Where there is a will there is a way).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Indo nĩ kũrĩmithanio",
            "source": "Many hands make light work",
            "pronunciation": "een-doh nee koo-ree-mee-thah-nyoh",
            "hint": "Lit. 'Riches are found in cultivating together.' Community unity yields abundant harvest.",
            "example": "Indo nĩ kũrĩmithanio — Many hands make light work (Lit. 'Riches are found in cultivating together.' Community unity yields abundant harvest.)"
          },
          {
            "target": "Kaara kamwe gatingĩyũragĩra ndaa",
            "source": "United we stand, divided we fall",
            "pronunciation": "kah-ah-rah kah-mweh gah-teen-gee-yoo-rah-gee-rah n-dah-ah",
            "hint": "Lit. 'One finger does not kill a louse.' Teamwork and unity are essential for success.",
            "example": "Kaara kamwe gatingĩyũragĩra ndaa — United we stand, divided we fall (Lit. 'One finger does not kill a louse.' Teamwork and unity are essential for success.)"
          },
          {
            "target": "Kaana ka ngarĩ gakunyaga ta nyina",
            "source": "Like father, like son",
            "pronunciation": "kah-ah-nah kah n-gah-ree gah-koo-nyah-gah tah nyee-nah",
            "hint": "Lit. 'The cub of a leopard scratches like its mother.' Children inherit their parents' habits.",
            "example": "Kaana ka ngarĩ gakunyaga ta nyina — Like father, like son (Lit. 'The cub of a leopard scratches like its mother.' Children inherit their parents' habits.)"
          },
          {
            "target": "Mageria nomo mahota",
            "source": "Where there is a will there is a way",
            "pronunciation": "mah-geh-ree-ah noh-moh mah-hoh-tah",
            "hint": "Lit. 'Persistent trials mean success.' Continuous effort overcomes obstacles.",
            "example": "Mageria nomo mahota — Where there is a will there is a way (Lit. 'Persistent trials mean success.' Continuous effort overcomes obstacles.)"
          },
          {
            "target": "Kahiga gakũrũ gatiagararagwo nĩ maai",
            "source": "Old age is honourable",
            "pronunciation": "kah-hee-gah gah-koo-roo gah-tee-ah-gah-rah-rah-gwoh nee mah-ah-ee",
            "hint": "Lit. 'The stream does not jump over an ancient rock.' Respect for elders and history.",
            "example": "Kahiga gakũrũ gatiagararagwo nĩ maai — Old age is honourable (Lit. 'The stream does not jump over an ancient rock.' Respect for elders and history.)"
          },
          {
            "target": "Cia mũciĩ itiumaga ndira",
            "source": "Do not wash dirty linen in public",
            "pronunciation": "chee-ah moo-chee-ee ee-tee-oo-mah-gah n-dee-rah",
            "hint": "Lit. 'Home matters must not venture into the open fields.' Keep family matters private.",
            "example": "Cia mũciĩ itiumaga ndira — Do not wash dirty linen in public (Lit. 'Home matters must not venture into the open fields.' Keep family matters private.)"
          },
          {
            "target": "Gũkũra nĩ kũona, kũhũna ti gũtonga",
            "source": "A good name is better than riches",
            "pronunciation": "goo-koo-rah nee koo-oh-nah koo-hoo-nah tee goo-tohn-gah",
            "hint": "To grow old is to gain insight; mere fulness of belly is not lasting wealth.",
            "example": "Gũkũra nĩ kũona, kũhũna ti gũtonga — A good name is better than riches (To grow old is to gain insight; mere fulness of belly is not lasting wealth.)"
          },
          {
            "target": "Kĩhooto gĩtĩkũragwo nĩ rũũĩ",
            "source": "Truth will prevail",
            "pronunciation": "kee-hoh-oh-toh gee-tee-koo-rah-gwoh nee roo-oo-ee",
            "hint": "Lit. 'Justice / moral truth cannot be swept away by a river.' Truth stands firm forever.",
            "example": "Kĩhooto gĩtĩkũragwo nĩ rũũĩ — Truth will prevail (Lit. 'Justice / moral truth cannot be swept away by a river.' Truth stands firm forever.)"
          },
          {
            "target": "Mũũkĩrĩ tene acokaga tene",
            "source": "The early bird catches the worm",
            "pronunciation": "moo-oo-kee-ree teh-neh ah-choh-kah-gah teh-neh",
            "hint": "Lit. 'He who wakes early returns home early.' Promptness leads to success.",
            "example": "Mũũkĩrĩ tene acokaga tene — The early bird catches the worm (Lit. 'He who wakes early returns home early.' Promptness leads to success.)"
          },
          {
            "target": "Mũrata wa ma onekaga thĩĩna-inĩ",
            "source": "A friend in need is a friend indeed",
            "pronunciation": "moo-rah-tah wah mah oh-neh-kah-gah thee-ee-nah-ee-nee",
            "hint": "A genuine friend proves loyalty during days of hardship and difficulty.",
            "example": "Mũrata wa ma onekaga thĩĩna-inĩ — A friend in need is a friend indeed (A genuine friend proves loyalty during days of hardship and difficulty.)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mwega nĩ endaga andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Mũtĩ mũnene wĩ na mĩri mĩraaya.",
            "source": "A big tree has long roots."
          },
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Indo nĩ kũrĩmithanio\" mean in English?",
            "correctAnswer": "Many hands make light work",
            "options": [
              "United we stand, divided we fall",
              "Like father, like son",
              "Where there is a will there is a way",
              "Many hands make light work"
            ],
            "hint": "Lit. 'Riches are found in cultivating together.' Community unity yields abundant harvest."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kaara kamwe gatingĩyũragĩra ndaa\" mean in English?",
            "correctAnswer": "United we stand, divided we fall",
            "options": [
              "Like father, like son",
              "Where there is a will there is a way",
              "United we stand, divided we fall",
              "Many hands make light work"
            ],
            "hint": "Lit. 'One finger does not kill a louse.' Teamwork and unity are essential for success."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kaana ka ngarĩ gakunyaga ta nyina\" mean in English?",
            "correctAnswer": "Like father, like son",
            "options": [
              "Where there is a will there is a way",
              "Like father, like son",
              "Many hands make light work",
              "United we stand, divided we fall"
            ],
            "hint": "Lit. 'The cub of a leopard scratches like its mother.' Children inherit their parents' habits."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Like father, like son\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Kaana ka ngarĩ gakunyaga ta nyina",
            "options": [
              "Kaana ka ngarĩ gakunyaga ta nyina",
              "Indo nĩ kũrĩmithanio",
              "Kaara kamwe gatingĩyũragĩra ndaa",
              "Mageria nomo mahota"
            ],
            "hint": "kah-ah-nah kah n-gah-ree gah-koo-nyah-gah tah nyee-nah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where there is a will there is a way\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Mageria nomo mahota",
            "options": [
              "Indo nĩ kũrĩmithanio",
              "Kaara kamwe gatingĩyũragĩra ndaa",
              "Kaana ka ngarĩ gakunyaga ta nyina",
              "Mageria nomo mahota"
            ],
            "hint": "mah-geh-ree-ah noh-moh mah-hoh-tah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Old age is honourable\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Kahiga gakũrũ gatiagararagwo nĩ maai",
            "options": [
              "Kaara kamwe gatingĩyũragĩra ndaa",
              "Kaana ka ngarĩ gakunyaga ta nyina",
              "Kahiga gakũrũ gatiagararagwo nĩ maai",
              "Indo nĩ kũrĩmithanio"
            ],
            "hint": "kah-hee-gah gah-koo-roo gah-tee-ah-gah-rah-rah-gwoh nee mah-ah-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Indo nĩ kũrĩmithanio: Many hands make light work, Kaara kamwe gatingĩyũragĩra ndaa: United we stand, divided we fall, Kaana ka ngarĩ gakunyaga ta nyina: Like father, like son, Mageria nomo mahota: Where there is a will there is a way",
            "pairs": [
              {
                "left": "Indo nĩ kũrĩmithanio",
                "right": "Many hands make light work"
              },
              {
                "left": "Kaara kamwe gatingĩyũragĩra ndaa",
                "right": "United we stand, divided we fall"
              },
              {
                "left": "Kaana ka ngarĩ gakunyaga ta nyina",
                "right": "Like father, like son"
              },
              {
                "left": "Mageria nomo mahota",
                "right": "Where there is a will there is a way"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Many hands make light work\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Indo nĩ kũrĩmithanio",
            "options": [
              "Indo nĩ kũrĩmithanio",
              "Kaara kamwe gatingĩyũragĩra ndaa",
              "Kaana ka ngarĩ gakunyaga ta nyina",
              "Mageria nomo mahota"
            ],
            "hint": "een-doh nee koo-ree-mee-thah-nyoh"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-15-phrases",
    "title": "Unit 15: Common Phrases",
    "description": "Comprehensive Kikuyu (Gĩkũyũ) curriculum for Common Phrases, vetted from L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
    "icon": "MessageCircle",
    "skills": [
      {
        "id": "kikuyu-exp-phrases",
        "title": "Common Phrases (Part 1)",
        "icon": "MessageCircle",
        "description": "Master Kikuyu (Gĩkũyũ) common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ũrĩa Ngai / Pole' (Sorry / Sympathy), 'Wĩtagwo atĩa?' (What is your name?), 'Njitagwo...' (My name is...), 'Nĩngwendete' (I love you).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Ũrĩa Ngai / Pole",
            "source": "Sorry / Sympathy",
            "pronunciation": "oo-ree-ah n-gah-ee / poh-leh",
            "hint": "Expression of empathy or comfort",
            "example": "Ũrĩa Ngai / Pole — Sorry / Sympathy (Expression of empathy or comfort)"
          },
          {
            "target": "Wĩtagwo atĩa?",
            "source": "What is your name?",
            "pronunciation": "wee-tah-gwoh ah-tee-ah",
            "hint": "Polite introduction inquiry",
            "example": "Wĩtagwo atĩa? — What is your name? (Polite introduction inquiry)"
          },
          {
            "target": "Njitagwo...",
            "source": "My name is...",
            "pronunciation": "n-jee-tah-gwoh",
            "hint": "Response: 'I am called...'",
            "example": "Njitagwo... — My name is... (Response: 'I am called...')"
          },
          {
            "target": "Nĩngwendete",
            "source": "I love you",
            "pronunciation": "nee-n-gwehn-deh-teh",
            "hint": "Deep personal affection",
            "example": "Nĩngwendete — I love you (Deep personal affection)"
          },
          {
            "target": "Ũka haha",
            "source": "Come here",
            "pronunciation": "oo-kah hah-hah",
            "hint": "Friendly request to approach",
            "example": "Ũka haha — Come here (Friendly request to approach)"
          },
          {
            "target": "Ũrathiĩ kũ?",
            "source": "Where are you going?",
            "pronunciation": "oo-rah-thee-ee koo",
            "hint": "Common question to travelers",
            "example": "Ũrathiĩ kũ? — Where are you going? (Common question to travelers)"
          },
          {
            "target": "Gĩkĩ nĩ mbeca cigana?",
            "source": "How much is this?",
            "pronunciation": "gee-kee nee m-beh-chah chee-gah-nah",
            "hint": "Market price inquiry",
            "example": "Gĩkĩ nĩ mbeca cigana? — How much is this? (Market price inquiry)"
          },
          {
            "target": "Wega",
            "source": "Good / Well",
            "pronunciation": "weh-gah",
            "hint": "General approval or affirmation",
            "example": "Wega — Good / Well (General approval or affirmation)"
          },
          {
            "target": "Gũtĩrĩ na ũũru",
            "source": "All is well",
            "pronunciation": "goo-tee-ree nah oo-oo-roo",
            "hint": "Lit. 'There is no evil / trouble'",
            "example": "Gũtĩrĩ na ũũru — All is well (Lit. 'There is no evil / trouble')"
          },
          {
            "target": "Ũhoro",
            "source": "News / Affair",
            "pronunciation": "oo-hoh-roh",
            "hint": "Information, matter, or news",
            "example": "Ũhoro — News / Affair (Information, matter, or news)"
          },
          {
            "target": "Tene",
            "source": "Long ago / Ancient times",
            "pronunciation": "teh-neh",
            "hint": "Times of old / early",
            "example": "Tene — Long ago / Ancient times (Times of old / early)"
          },
          {
            "target": "Mĩarahũko-inĩ",
            "source": "In the afternoon",
            "pronunciation": "mee-ah-rah-hoo-koh-ee-nee",
            "hint": "Mĩarahũko = afternoon",
            "example": "Mĩarahũko-inĩ — In the afternoon (Mĩarahũko = afternoon)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mwega nĩ endaga andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Mũtĩ mũnene wĩ na mĩri mĩraaya.",
            "source": "A big tree has long roots."
          },
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ũrĩa Ngai / Pole\" mean in English?",
            "correctAnswer": "Sorry / Sympathy",
            "options": [
              "What is your name?",
              "My name is...",
              "I love you",
              "Sorry / Sympathy"
            ],
            "hint": "Expression of empathy or comfort"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Wĩtagwo atĩa?\" mean in English?",
            "correctAnswer": "What is your name?",
            "options": [
              "My name is...",
              "I love you",
              "What is your name?",
              "Sorry / Sympathy"
            ],
            "hint": "Polite introduction inquiry"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Njitagwo...\" mean in English?",
            "correctAnswer": "My name is...",
            "options": [
              "I love you",
              "My name is...",
              "Sorry / Sympathy",
              "What is your name?"
            ],
            "hint": "Response: 'I am called...'"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"My name is...\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Njitagwo...",
            "options": [
              "Njitagwo...",
              "Ũrĩa Ngai / Pole",
              "Wĩtagwo atĩa?",
              "Nĩngwendete"
            ],
            "hint": "n-jee-tah-gwoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I love you\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Nĩngwendete",
            "options": [
              "Ũrĩa Ngai / Pole",
              "Wĩtagwo atĩa?",
              "Njitagwo...",
              "Nĩngwendete"
            ],
            "hint": "nee-n-gwehn-deh-teh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Come here\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Ũka haha",
            "options": [
              "Wĩtagwo atĩa?",
              "Njitagwo...",
              "Ũka haha",
              "Ũrĩa Ngai / Pole"
            ],
            "hint": "oo-kah hah-hah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Ũrĩa Ngai / Pole: Sorry / Sympathy, Wĩtagwo atĩa?: What is your name?, Njitagwo...: My name is..., Nĩngwendete: I love you",
            "pairs": [
              {
                "left": "Ũrĩa Ngai / Pole",
                "right": "Sorry / Sympathy"
              },
              {
                "left": "Wĩtagwo atĩa?",
                "right": "What is your name?"
              },
              {
                "left": "Njitagwo...",
                "right": "My name is..."
              },
              {
                "left": "Nĩngwendete",
                "right": "I love you"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Sorry / Sympathy\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Ũrĩa Ngai / Pole",
            "options": [
              "Ũrĩa Ngai / Pole",
              "Wĩtagwo atĩa?",
              "Njitagwo...",
              "Nĩngwendete"
            ],
            "hint": "oo-ree-ah n-gah-ee / poh-leh"
          }
        ]
      },
      {
        "id": "kikuyu-exp-phrases-2",
        "title": "Common Phrases (Part 2)",
        "icon": "MessageCircle",
        "description": "Master Kikuyu (Gĩkũyũ) common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Kikuyu (Gĩkũyũ) skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Rĩngĩ' (Again), 'Igũrũ' (Above / Up), 'Thutha' (After / Behind), '-thaka' (Beautiful / Handsome).",
        "culturalNote": "Source attribution: L.S.B. Leakey (1959) 'First Lessons in Kikuyu', 'A Short Kikuyu Grammar', Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and Fr. G. Barra (1939) '1,000 Kikuyu Proverbs'.",
        "words": [
          {
            "target": "Rĩngĩ",
            "source": "Again",
            "pronunciation": "reen-gee",
            "hint": "Once more",
            "example": "Rĩngĩ — Again (Once more)"
          },
          {
            "target": "Igũrũ",
            "source": "Above / Up",
            "pronunciation": "ee-goo-roo",
            "hint": "Up high or in the heavens",
            "example": "Igũrũ — Above / Up (Up high or in the heavens)"
          },
          {
            "target": "Thutha",
            "source": "After / Behind",
            "pronunciation": "thoo-thah",
            "hint": "'Thutha wa...' = behind / after...",
            "example": "Thutha — After / Behind ('Thutha wa...' = behind / after...)"
          },
          {
            "target": "-thaka",
            "source": "Beautiful / Handsome",
            "pronunciation": "thah-kah",
            "hint": "Mũndũ mũthaka = handsome/beautiful person",
            "example": "-thaka — Beautiful / Handsome (Mũndũ mũthaka = handsome/beautiful person)"
          },
          {
            "target": "-ũru",
            "source": "Bad / Evil",
            "pronunciation": "oo-roo",
            "hint": "Ũhoro mũũru = bad news",
            "example": "-ũru — Bad / Evil (Ũhoro mũũru = bad news)"
          }
        ],
        "sentences": [
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          },
          {
            "target": "Ciana nĩ irathاكا nja ya nyũmba.",
            "source": "The children are playing outside the house."
          },
          {
            "target": "Wĩra wa mũgũnda nĩ wambĩrĩirie rũciinĩ.",
            "source": "The farm work started in the morning."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Rĩngĩ\" mean in English?",
            "correctAnswer": "Again",
            "options": [
              "Above / Up",
              "After / Behind",
              "Beautiful / Handsome",
              "Again"
            ],
            "hint": "Once more"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Igũrũ\" mean in English?",
            "correctAnswer": "Above / Up",
            "options": [
              "After / Behind",
              "Beautiful / Handsome",
              "Above / Up",
              "Again"
            ],
            "hint": "Up high or in the heavens"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Thutha\" mean in English?",
            "correctAnswer": "After / Behind",
            "options": [
              "Beautiful / Handsome",
              "After / Behind",
              "Again",
              "Above / Up"
            ],
            "hint": "'Thutha wa...' = behind / after..."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"After / Behind\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Thutha",
            "options": [
              "Thutha",
              "Rĩngĩ",
              "Igũrũ",
              "-thaka"
            ],
            "hint": "thoo-thah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Beautiful / Handsome\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "-thaka",
            "options": [
              "Rĩngĩ",
              "Igũrũ",
              "Thutha",
              "-thaka"
            ],
            "hint": "thah-kah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bad / Evil\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "-ũru",
            "options": [
              "Igũrũ",
              "Thutha",
              "-ũru",
              "Rĩngĩ"
            ],
            "hint": "oo-roo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Rĩngĩ: Again, Igũrũ: Above / Up, Thutha: After / Behind, -thaka: Beautiful / Handsome",
            "pairs": [
              {
                "left": "Rĩngĩ",
                "right": "Again"
              },
              {
                "left": "Igũrũ",
                "right": "Above / Up"
              },
              {
                "left": "Thutha",
                "right": "After / Behind"
              },
              {
                "left": "-thaka",
                "right": "Beautiful / Handsome"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Again\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Rĩngĩ",
            "options": [
              "Rĩngĩ",
              "Igũrũ",
              "Thutha",
              "-thaka"
            ],
            "hint": "reen-gee"
          }
        ]
      }
    ]
  },
  {
    "id": "kikuyu-unit-16-barra-thimo",
    "title": "Unit 16: Classical Thimo Anthology (G. Barra 1939)",
    "description": "Deepen your mastery of Gĩkũyũ eloquence and customary philosophy with proverbs from Fr. G. Barra's 1939 Nyeri collection.",
    "icon": "Award",
    "skills": [
      {
        "id": "kikuyu-barra-thimo-1",
        "title": "Barra's 1939 Thimo Anthology (Part 1)",
        "icon": "Award",
        "description": "Authentic Gĩkũyũ legal maxims and moral proverbs collected by Fr. G. Barra (1939).",
        "tips": "In traditional Agĩkũyũ councils of elders (Kĩama kĩa Athuri), proverbs ('Thimo') functioned as legal precedents and philosophical maxims.",
        "culturalNote": "Source: '1,000 Kikuyu Proverbs' by Fr. G. Barra, I.M.C. (Consolata Catholic Mission, Nyeri, 1939).",
        "words": [
          {
            "target": "Agikuyũ moi kũhitha ndia, matiũ kuhitha ũhoro",
            "source": "The Kikuyu know how to conceal their quiver, but do not know how to conceal their secrets.",
            "pronunciation": "Thimo #1 • community",
            "hint": "The Kikuyu know how to conceal their quiver, but do not know how to conceal their secrets.",
            "example": "The Kikuyu, though very clever in concealing their arms, cannot keep secrets from the members of their tribe."
          },
          {
            "target": "Ageni eri matirĩ ũtugire",
            "source": "Two guests (at the same time) have no welcome.",
            "pronunciation": "Thimo #2 • community",
            "hint": "Two guests (at the same time) have no welcome.",
            "example": "Two guests (at the same time) have no welcome."
          },
          {
            "target": "Ageni eri na karirũĩ kao",
            "source": "Every man has his hobby horse.",
            "pronunciation": "Thimo #3 • family",
            "hint": "Two guests love a different song.",
            "example": "When you receive two visitors at the same time, you cannot treat them in the same manner, because they have different tastes."
          },
          {
            "target": "Aikaragia mbia ta njũũ ngigi",
            "source": "Much wants more.",
            "pronunciation": "Thimo #4 • work-wealth",
            "hint": "He is a man that looks after money as ‘njũ’ looks after locusts.",
            "example": "‘Njũũ’ is a bird which accompanies migrating locusts to feed on them."
          },
          {
            "target": "Aka eri ni nyũngũ igĩrĩ cia ũrogi",
            "source": "Women’s jars breed men’s wars.",
            "pronunciation": "Thimo #5 • family",
            "hint": "Two wives are two pots full of poison.",
            "example": "The more women you have in your house, the more troubles you must expect."
          },
          {
            "target": "Aka matĩrĩ cia ndiiro no cia nyiniko",
            "source": "Women conceal all that they know not.",
            "pronunciation": "Thimo #6 • family",
            "hint": "Women have no upright words, but only crooked ones.",
            "example": "The Kikuyu use the proverb to say that women keep no secrets and seldom tell the truth."
          },
          {
            "target": "Aka na ng’ombe itĩri ndũgũ",
            "source": "Wives and oxen have no friends.",
            "pronunciation": "Thimo #7 • family",
            "hint": "Wives and oxen have no friends.",
            "example": "There are things which are not to be given to friends. A woman is to be from her house three times: when she is christened, married, and buried."
          },
          {
            "target": "Andũ maiganaine magithĩ na magiceera",
            "source": "Men are equal when they are going and walking.",
            "pronunciation": "Thimo #8 • work-wealth",
            "hint": "Men are equal when they are going and walking.",
            "example": "One can notice a difference between man and man when they, ‘exempli gratia’, are commanding or working, but not on the road where they look quite the same."
          },
          {
            "target": "Andũ matari ndundu mahũragwo na njũgũma ũmwe",
            "source": "Lack of union spells weakness.",
            "pronunciation": "Thimo #9 • community",
            "hint": "People who have no secret agreement are beaten by a single club.",
            "example": "A group of men not bound by a secret will be easily beaten by a single man."
          },
          {
            "target": "Andũ matĩĩ ngamini",
            "source": "One does not give without hope of return.",
            "pronunciation": "Thimo #10 • wisdom",
            "hint": "Men do not know liberality.",
            "example": "Men do not know liberality."
          },
          {
            "target": "Andũ matĩĩ ngũ, moi ithendũ",
            "source": "People put aside hard tasks and devote themselves only to easy ones.",
            "pronunciation": "Thimo #11 • community",
            "hint": "Men do not know hard firewood, but only lops.",
            "example": "Men do not know hard firewood, but only lops."
          },
          {
            "target": "Andũ me muoyo matiagaga wira",
            "source": "Life would be too smooth if it had no rubs in it.",
            "pronunciation": "Thimo #12 • work-wealth",
            "hint": "Live men do not lack work.",
            "example": "Live men do not lack work."
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mwega nĩ endaga andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Mũtĩ mũnene wĩ na mĩri mĩraaya.",
            "source": "A big tree has long roots."
          },
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Agikuyũ moi kũhitha ndia, matiũ kuhitha ũhoro\" mean in English?",
            "correctAnswer": "The Kikuyu know how to conceal their quiver, but do not know how to conceal their secrets.",
            "options": [
              "Two guests (at the same time) have no welcome.",
              "Every man has his hobby horse.",
              "Much wants more.",
              "The Kikuyu know how to conceal their quiver, but do not know how to conceal their secrets."
            ],
            "hint": "The Kikuyu know how to conceal their quiver, but do not know how to conceal their secrets."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ageni eri matirĩ ũtugire\" mean in English?",
            "correctAnswer": "Two guests (at the same time) have no welcome.",
            "options": [
              "Every man has his hobby horse.",
              "Much wants more.",
              "Two guests (at the same time) have no welcome.",
              "The Kikuyu know how to conceal their quiver, but do not know how to conceal their secrets."
            ],
            "hint": "Two guests (at the same time) have no welcome."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ageni eri na karirũĩ kao\" mean in English?",
            "correctAnswer": "Every man has his hobby horse.",
            "options": [
              "Much wants more.",
              "Every man has his hobby horse.",
              "The Kikuyu know how to conceal their quiver, but do not know how to conceal their secrets.",
              "Two guests (at the same time) have no welcome."
            ],
            "hint": "Two guests love a different song."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Every man has his hobby horse.\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Ageni eri na karirũĩ kao",
            "options": [
              "Ageni eri na karirũĩ kao",
              "Agikuyũ moi kũhitha ndia, matiũ kuhitha ũhoro",
              "Ageni eri matirĩ ũtugire",
              "Aikaragia mbia ta njũũ ngigi"
            ],
            "hint": "Thimo #3 • family"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Much wants more.\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Aikaragia mbia ta njũũ ngigi",
            "options": [
              "Agikuyũ moi kũhitha ndia, matiũ kuhitha ũhoro",
              "Ageni eri matirĩ ũtugire",
              "Ageni eri na karirũĩ kao",
              "Aikaragia mbia ta njũũ ngigi"
            ],
            "hint": "Thimo #4 • work-wealth"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Women’s jars breed men’s wars.\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Aka eri ni nyũngũ igĩrĩ cia ũrogi",
            "options": [
              "Ageni eri matirĩ ũtugire",
              "Ageni eri na karirũĩ kao",
              "Aka eri ni nyũngũ igĩrĩ cia ũrogi",
              "Agikuyũ moi kũhitha ndia, matiũ kuhitha ũhoro"
            ],
            "hint": "Thimo #5 • family"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Agikuyũ moi kũhitha ndia, matiũ kuhitha ũhoro: The Kikuyu know how to conceal their quiver, but do not know how to conceal their secrets., Ageni eri matirĩ ũtugire: Two guests (at the same time) have no welcome., Ageni eri na karirũĩ kao: Every man has his hobby horse., Aikaragia mbia ta njũũ ngigi: Much wants more.",
            "pairs": [
              {
                "left": "Agikuyũ moi kũhitha ndia, matiũ kuhitha ũhoro",
                "right": "The Kikuyu know how to conceal their quiver, but do not know how to conceal their secrets."
              },
              {
                "left": "Ageni eri matirĩ ũtugire",
                "right": "Two guests (at the same time) have no welcome."
              },
              {
                "left": "Ageni eri na karirũĩ kao",
                "right": "Every man has his hobby horse."
              },
              {
                "left": "Aikaragia mbia ta njũũ ngigi",
                "right": "Much wants more."
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"The Kikuyu know how to conceal their quiver, but do not know how to conceal their secrets.\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Agikuyũ moi kũhitha ndia, matiũ kuhitha ũhoro",
            "options": [
              "Agikuyũ moi kũhitha ndia, matiũ kuhitha ũhoro",
              "Ageni eri matirĩ ũtugire",
              "Ageni eri na karirũĩ kao",
              "Aikaragia mbia ta njũũ ngigi"
            ],
            "hint": "Thimo #1 • community"
          }
        ]
      },
      {
        "id": "kikuyu-barra-thimo-2",
        "title": "Barra's 1939 Thimo Anthology (Part 2)",
        "icon": "Award",
        "description": "Authentic Gĩkũyũ legal maxims and moral proverbs collected by Fr. G. Barra (1939).",
        "tips": "In traditional Agĩkũyũ councils of elders (Kĩama kĩa Athuri), proverbs ('Thimo') functioned as legal precedents and philosophical maxims.",
        "culturalNote": "Source: '1,000 Kikuyu Proverbs' by Fr. G. Barra, I.M.C. (Consolata Catholic Mission, Nyeri, 1939).",
        "words": [
          {
            "target": "Angimituriria na ũmirite ndangimionana rikii",
            "source": "Do not look for stolen goods in the robber's house.",
            "pronunciation": "Thimo #13 • justice",
            "hint": "He who seeks his goat with the man who ate it, is certain not to find it.",
            "example": "He who seeks his goat with the man who ate it, is certain not to find it."
          },
          {
            "target": "Arũme mari rwamba",
            "source": "Do evil and look for like.",
            "pronunciation": "Thimo #14 • caution",
            "hint": "Men have got quills.",
            "example": "Do not annoy others because they will respond by hurting."
          },
          {
            "target": "Bata ndũbatabataga",
            "source": "He that will have no trouble in this world must not be born in it.",
            "pronunciation": "Thimo #15 • wisdom",
            "hint": "Necessities never end.",
            "example": "Necessities never end."
          },
          {
            "target": "Cia athuri inyuagira thutha",
            "source": "Elderly people are not in such a hurry as young ones.",
            "pronunciation": "Thimo #16 • community",
            "hint": "The elders drink afterwards (i.e.",
            "example": "after the others)."
          },
          {
            "target": "Ciakorire wacũ mũgũnda",
            "source": "The food found Wacũ in the field.",
            "pronunciation": "Thimo #17 • family",
            "hint": "The food found Wacũ in the field.",
            "example": "The proverb originates in the legend of Wacũ, the most despised amongst the wives of a rich man who never"
          },
          {
            "target": "Cia kionje itigayagwo gitanakua",
            "source": "The reason is that he is unable to get anything more than he already possesses.",
            "pronunciation": "Thimo #18 • family",
            "hint": "The property of a helpless man must not be divided before his death.",
            "example": "The property of a helpless man must not be divided before his death."
          },
          {
            "target": "Cia mūciĩ itiumaga ndira",
            "source": "Do not wash dirty linen in public",
            "pronunciation": "Thimo #20 • family",
            "hint": "Home affairs must not go into the open.",
            "example": "Home affairs must not go into the open."
          },
          {
            "target": "Ciana cia ndigwa itiri maithori",
            "source": "The widow's sons have no tears.",
            "pronunciation": "Thimo #22 • family",
            "hint": "The widow's sons have no tears.",
            "example": "It means that they have been accustomed to suffer very early."
          },
          {
            "target": "Ciathanaga ikigũā, itiathanaga ikiũmbũka",
            "source": "Birds agree when flying down, but do not agree when flying up.",
            "pronunciation": "Thimo #23 • nature",
            "hint": "Birds agree when flying down, but do not agree when flying up.",
            "example": "Birds agree when flying down, but do not agree when flying up."
          },
          {
            "target": "Cia thũgũri itiyũraga ikũmbĩ",
            "source": "Do not hope to become rich without cultivating your fields.",
            "pronunciation": "Thimo #24 • work-wealth",
            "hint": "Bought things do not fill the granary.",
            "example": "Bought things do not fill the granary."
          },
          {
            "target": "Ciatura ngũyũ irĩaga ng'umo",
            "source": "If thou hast not a capon, feed on an onion.",
            "pronunciation": "Thimo #25 • work-wealth",
            "hint": "When there is shortage of figs, birds eat the fruits of the ‘mugumo’.",
            "example": "The tree called ‘mugumo’ by the natives bears little fruits that are not eaten by birds when there is plenty of other food."
          },
          {
            "target": "Cia ũthoni ciambaga nguhi",
            "source": "Great events have small beginnings.",
            "pronunciation": "Thimo #26 • family",
            "hint": "The buying of a wife begins from a little thing.",
            "example": "The buying of a wife begins from a little thing."
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mwega nĩ endaga andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Mũtĩ mũnene wĩ na mĩri mĩraaya.",
            "source": "A big tree has long roots."
          },
          {
            "target": "Rũũĩ rũrũ rũiyũire maĩ mega.",
            "source": "This river is full of clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Angimituriria na ũmirite ndangimionana rikii\" mean in English?",
            "correctAnswer": "Do not look for stolen goods in the robber's house.",
            "options": [
              "Do evil and look for like.",
              "He that will have no trouble in this world must not be born in it.",
              "Elderly people are not in such a hurry as young ones.",
              "Do not look for stolen goods in the robber's house."
            ],
            "hint": "He who seeks his goat with the man who ate it, is certain not to find it."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Arũme mari rwamba\" mean in English?",
            "correctAnswer": "Do evil and look for like.",
            "options": [
              "He that will have no trouble in this world must not be born in it.",
              "Elderly people are not in such a hurry as young ones.",
              "Do evil and look for like.",
              "Do not look for stolen goods in the robber's house."
            ],
            "hint": "Men have got quills."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Bata ndũbatabataga\" mean in English?",
            "correctAnswer": "He that will have no trouble in this world must not be born in it.",
            "options": [
              "Elderly people are not in such a hurry as young ones.",
              "He that will have no trouble in this world must not be born in it.",
              "Do not look for stolen goods in the robber's house.",
              "Do evil and look for like."
            ],
            "hint": "Necessities never end."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"He that will have no trouble in this world must not be born in it.\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Bata ndũbatabataga",
            "options": [
              "Bata ndũbatabataga",
              "Angimituriria na ũmirite ndangimionana rikii",
              "Arũme mari rwamba",
              "Cia athuri inyuagira thutha"
            ],
            "hint": "Thimo #15 • wisdom"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Elderly people are not in such a hurry as young ones.\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Cia athuri inyuagira thutha",
            "options": [
              "Angimituriria na ũmirite ndangimionana rikii",
              "Arũme mari rwamba",
              "Bata ndũbatabataga",
              "Cia athuri inyuagira thutha"
            ],
            "hint": "Thimo #16 • community"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"The food found Wacũ in the field.\" in Kikuyu (Gĩkũyũ)?",
            "correctAnswer": "Ciakorire wacũ mũgũnda",
            "options": [
              "Arũme mari rwamba",
              "Bata ndũbatabataga",
              "Ciakorire wacũ mũgũnda",
              "Angimituriria na ũmirite ndangimionana rikii"
            ],
            "hint": "Thimo #17 • family"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kikuyu (Gĩkũyũ) terms with their English meanings:",
            "correctAnswer": "Angimituriria na ũmirite ndangimionana rikii: Do not look for stolen goods in the robber's house., Arũme mari rwamba: Do evil and look for like., Bata ndũbatabataga: He that will have no trouble in this world must not be born in it., Cia athuri inyuagira thutha: Elderly people are not in such a hurry as young ones.",
            "pairs": [
              {
                "left": "Angimituriria na ũmirite ndangimionana rikii",
                "right": "Do not look for stolen goods in the robber's house."
              },
              {
                "left": "Arũme mari rwamba",
                "right": "Do evil and look for like."
              },
              {
                "left": "Bata ndũbatabataga",
                "right": "He that will have no trouble in this world must not be born in it."
              },
              {
                "left": "Cia athuri inyuagira thutha",
                "right": "Elderly people are not in such a hurry as young ones."
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Do not look for stolen goods in the robber's house.\" in Kikuyu (Gĩkũyũ).",
            "correctAnswer": "Angimituriria na ũmirite ndangimionana rikii",
            "options": [
              "Angimituriria na ũmirite ndangimionana rikii",
              "Arũme mari rwamba",
              "Bata ndũbatabataga",
              "Cia athuri inyuagira thutha"
            ],
            "hint": "Thimo #13 • justice"
          }
        ]
      }
    ]
  }
];
