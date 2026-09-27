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
          { target: 'Wĩ mwega, mũrata waku?', source: 'Are you well, my friend?' },
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
        culturalNote: "The proverb 'Kahiga gakũrũ gatiagararagwo nĩ maai' (The river does not leap over an ancient stone) underlines the absolute respect due to elders and ancient traditions in traditional Kikuyu governance.",
        words: [
          { target: 'Ũũgĩ', source: 'Wisdom / Intelligence', pronunciation: 'oo-oo-gee', hint: 'Insight and sound judgement' },
          { target: 'Mĩtugo', source: 'Customs / Character', pronunciation: 'mee-too-goh', hint: 'Moral behavior and tradition' },
          { target: 'Kahiga', source: 'Small stone / Rock', pronunciation: 'kah-hee-gah', hint: 'Firm foundation' },
          { target: 'Rũũĩ', source: 'River', pronunciation: 'roo-oo-ee', hint: 'Flowing water' },
          { target: 'Ũhoro wa ma', source: 'The true story / Truth', pronunciation: 'oo-hoh-roh wah mah', hint: 'Verified truth' }
        ],
        sentences: [
          { target: 'Kahiga gakũrũ gatiagararagwo nĩ maai.', source: 'The river does not jump over an ancient stone (Old age is honourable).' },
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
  }
];
