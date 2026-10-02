// ============================================================
// Turkana (Ng'aturukana) Language Course Configuration & Units
// Based on "A Classified Vocabulary of the Turkana in Northwestern Kenya"
// by Itaru Ohta (Kyoto University, 1989)
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const TURKANA_CONFIG: LanguageConfig = {
  id: 'turkana',
  name: 'Turkana',
  nativeName: "Ng'aturukana",
  family: 'Nilotic',
  counties: ['Turkana'],
  speakers: '1.1M',
  speechLocale: '',
  description: 'An Eastern Nilotic (Plains Nilotic) language spoken across the vast savannahs and Rift Valley of Turkana County in northwestern Kenya.',
  color: '#00897B',
};

export const TURKANA_UNITS: CourseUnit[] = [
  {
    id: 'turkana-unit-1',
    title: 'Unit 1: Foundations & Greetings',
    description: 'Master core greetings, politeness, and the base-5 numeral system of the Turkana.',
    icon: '👋',
    skills: [
      {
        id: 'turkana-greetings',
        title: 'Greetings & Politeness',
        icon: 'Handshake',
        description: 'Learn universal greetings, daily salutations, and courtesy in Turkana.',
        tips: "In Turkana culture, greetings are warm and comprehensive. The universal greeting 'Ejok?' literally asks 'Is it good?' and is answered with 'Ejok noi' ('Very good'). Greetings often enquire about health, people, and herds.",
        culturalNote: "When meeting elders, greetings are exchanged with deep respect, often accompanied by enquiries about the peace of the homestead (awi) and wellbeing of the cattle.",
        words: [
          { target: 'Ejok?', source: 'Hello / How are you?', pronunciation: 'eh-johk', hint: 'Universal greeting, lit. "Is it good?"', example: 'Ejok? — Ejok noi.' },
          { target: 'Ejok noi', source: 'I am fine / Very good', pronunciation: 'eh-johk noh-ee', hint: 'Standard polite reply', example: 'Ejok noi, eyalama.' },
          { target: 'Kiperobo', source: 'Good morning', pronunciation: 'kee-peh-roh-boh', hint: 'Morning salutation (lit. may you walk well)' },
          { target: 'Toperirobo', source: 'Good night / Sleep well', pronunciation: 'toh-peh-ree-roh-boh', hint: 'Evening departure wishing peaceful sleep' },
          { target: 'Eyalama', source: 'Thank you', pronunciation: 'eh-yah-lah-mah', hint: 'Widely used appreciation expression', example: 'Eyalama noi!' },
          { target: 'Lokitoe', source: 'Goodbye / Go well', pronunciation: 'loh-kee-toh-eh', hint: 'Spoken to someone who is traveling or leaving' },
          { target: 'Aai', source: 'Pardon me / Excuse me', pronunciation: 'ah-ah-ee', hint: 'Courteous interjection' },
          { target: 'Torimokakithai', source: 'Forgive me / Please help me', pronunciation: 'toh-ree-moh-kah-kee-thah-ee', hint: 'Appeal for mercy or assistance' }
        ],
        sentences: [
          { target: 'Ejok akolong na.', source: 'This day is good.' },
          { target: 'Eyalama noi, papa.', source: 'Thank you very much, father.' },
          { target: 'Kiperobo, toto.', source: 'Good morning, mother.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Hello / How are you?" in Turkana?',
            correctAnswer: 'Ejok?',
            options: ['Ejok?', 'Eyalama', 'Lokitoe', 'Aai'],
            hint: 'Literally means "Is it good?"'
          },
          {
            type: 'multiple_choice',
            prompt: 'What is the correct response to "Ejok?"?',
            correctAnswer: 'Ejok noi',
            options: ['Ejok noi', 'Lokitoe', 'Aai', 'Kiperobo'],
            hint: "'Noi' means very or extremely"
          },
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Thank you"?',
            correctAnswer: 'Eyalama',
            options: ['Eyalama', 'Ejok', 'Lokitoe', 'Torimokakithai'],
            hint: 'Expresses gratitude'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Turkana greeting to its English meaning:',
            correctAnswer: 'Ejok: Hello, Eyalama: Thank you, Lokitoe: Goodbye, Kiperobo: Good morning',
            pairs: [
              { left: 'Ejok', right: 'Hello / How are you?' },
              { left: 'Eyalama', right: 'Thank you' },
              { left: 'Lokitoe', right: 'Goodbye' },
              { left: 'Kiperobo', right: 'Good morning' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Complete the morning salutation: "_____ noi, eyalama."',
            correctAnswer: 'Ejok',
            options: ['Ejok', 'Lokitoe', 'Aai', 'Toperirobo'],
            hint: 'Standard word for good'
          }
        ]
      },
      {
        id: 'turkana-numbers',
        title: 'Numbers & Counting',
        icon: 'Hash',
        description: 'Learn the base-5 (quinary) counting system from 1 to 10 and beyond.',
        tips: "Turkana uses a base-5 numeral system. The word for five ('ngakan') literally means 'hands' (from akan = hand). Numbers 6 through 9 are built systematically as: 5+1 (ngakanikapei), 5+2 (ngakanikaarei), 5+3 (ngakanikauni), and 5+4 (ngakanikaomon).",
        culturalNote: "Counting cattle and small stock is a daily ritual for herders returning to the manyatta kraal at sunset to ensure no animal went astray.",
        words: [
          { target: 'Apei', source: 'One', pronunciation: 'ah-peh-ee', hint: 'Single unit (Feminine: Apei, Masculine: Epei; Barton 1921)' },
          { target: 'Ngaarei', source: 'Two', pronunciation: 'ngah-ah-reh-ee', hint: 'Pair' },
          { target: 'Ngauni', source: 'Three', pronunciation: 'ngah-oo-nee', hint: 'Cardinal 3' },
          { target: 'Ngaomon', source: 'Four', pronunciation: 'ngah-oh-mohn', hint: 'Cardinal 4' },
          { target: 'Ngakan', source: 'Five', pronunciation: 'ngah-kahn', hint: 'Literally "hands"' },
          { target: 'Ngakanikapei', source: 'Six', pronunciation: 'ngah-kah-nee-kah-peh-ee', hint: '5 + 1' },
          { target: 'Ngakanikaarei', source: 'Seven', pronunciation: 'ngah-kah-nee-kah-ah-reh-ee', hint: '5 + 2' },
          { target: 'Ngakanikauni', source: 'Eight', pronunciation: 'ngah-kah-nee-kah-oo-nee', hint: '5 + 3' },
          { target: 'Ngakanikaomon', source: 'Nine', pronunciation: 'ngah-kah-nee-kah-oh-mohn', hint: '5 + 4' },
          { target: 'Ngatomon', source: 'Ten', pronunciation: 'ngah-toh-mohn', hint: 'Cardinal 10' }
        ],
        sentences: [
          { target: 'Ngidwe ngaarei.', source: 'Two children.' },
          { target: 'Ngaatuk ngatomon.', source: 'Ten cows.' },
          { target: 'Aite apei.', source: 'One cow.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the Turkana word for "Five"?',
            correctAnswer: 'Ngakan',
            options: ['Ngakan', 'Apei', 'Ngaarei', 'Ngatomon'],
            hint: 'Related to the word for hand (akan)'
          },
          {
            type: 'multiple_choice',
            prompt: 'What does "Ngakanikapei" mean?',
            correctAnswer: 'Six',
            options: ['Six', 'Seven', 'Eight', 'Five'],
            hint: 'Built as ngakan (5) + apei (1)'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the numbers:',
            correctAnswer: 'Apei: 1, Ngaarei: 2, Ngauni: 3, Ngatomon: 10',
            pairs: [
              { left: 'Apei', right: '1 (One)' },
              { left: 'Ngaarei', right: '2 (Two)' },
              { left: 'Ngauni', right: '3 (Three)' },
              { left: 'Ngatomon', right: '10 (Ten)' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Count in order: Apei, Ngaarei, _____, Ngaomon, Ngakan.',
            correctAnswer: 'Ngauni',
            options: ['Ngauni', 'Ngatomon', 'Ngakanikapei', 'Been'],
            hint: 'Number three'
          }
        ]
      }
    ]
  },
  {
    id: 'turkana-unit-2',
    title: 'Unit 2: Family & Community',
    description: 'Learn terms for family relationships, elders, age-sets, and social life.',
    icon: '👨‍👩‍👧‍👦',
    skills: [
      {
        id: 'turkana-family',
        title: 'Family & Kinship',
        icon: 'Users',
        description: 'Words for mother, father, siblings, children, and spouses.',
        tips: "Kinship terms frequently append personal possessives: -kang (my), -kon (your), -keng (his/her). 'Apa kang' is my father, 'ito kang' is my mother. Notice the gender prefixes: 'e-' for male (ekile) and 'a-' for female (aberu).",
        culturalNote: "The traditional Turkana household (ekaale) forms the social anchor of pastoral life, with distinct duties divided among age groups.",
        words: [
          { target: 'Apa kang', source: 'My father', pronunciation: 'ah-pah kahng', hint: 'Vocative: Papa' },
          { target: 'Ito kang', source: 'My mother', pronunciation: 'ee-toh kahng', hint: 'Vocative: Toto' },
          { target: 'Lokang', source: 'My brother', pronunciation: 'loh-kahng', hint: 'Lit. male of mine' },
          { target: 'Nakang', source: 'My sister', pronunciation: 'nah-kahng', hint: 'Lit. female of mine' },
          { target: 'Ekile', source: 'Man / Husband', pronunciation: 'eh-kee-leh', hint: 'Plural: Ngikilyok' },
          { target: 'Aberu', source: 'Woman / Wife', pronunciation: 'ah-beh-roo', hint: 'Plural: Ngaangorin' },
          { target: 'Ikoku', source: 'Child', pronunciation: 'ee-koh-koo', hint: 'Plural: Ngidwe' },
          { target: 'Ekaale', source: 'Family / Household', pronunciation: 'eh-kah-ah-leh', hint: 'Plural: Ngikaalei' }
        ],
        sentences: [
          { target: 'Ejok apa kang.', source: 'My father is well.' },
          { target: 'Ikoku kang ngesi.', source: 'He/she is my child.' },
          { target: 'Ekaale lokajokon.', source: 'A good family.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "My mother" in Turkana?',
            correctAnswer: 'Ito kang',
            options: ['Ito kang', 'Apa kang', 'Lokang', 'Aberu'],
            hint: 'Ito means mother, kang means my'
          },
          {
            type: 'multiple_choice',
            prompt: 'What does "Ekile" mean?',
            correctAnswer: 'Man / Husband',
            options: ['Man / Husband', 'Woman / Wife', 'Child', 'Father'],
            hint: 'Masculine singular noun beginning with e-'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the family terms:',
            correctAnswer: 'Apa kang: My father, Ito kang: My mother, Ikoku: Child, Aberu: Woman / Wife',
            pairs: [
              { left: 'Apa kang', right: 'My father' },
              { left: 'Ito kang', right: 'My mother' },
              { left: 'Ikoku', right: 'Child' },
              { left: 'Aberu', right: 'Woman / Wife' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Fill in the blank: "_____ kang ngesi." (She is my sister)',
            correctAnswer: 'Nakang',
            options: ['Nakang', 'Lokang', 'Ekile', 'Emaanik'],
            hint: 'Feminine sibling prefix na-'
          }
        ]
      },
      {
        id: 'turkana-community',
        title: 'People & Society',
        icon: 'Crown',
        description: 'Words for community members, elders, warriors, and prophets.',
        tips: "Turkana society is organized through age-sets (asapan) and territorial sections. Respected elders (ngikasuko) lead council discussions under shade trees (akiriket), while diviners (ngimurok) provide spiritual guidance.",
        culturalNote: "The Turkana call themselves Ngiturukana and their ancestral language Ngaturukana.",
        words: [
          { target: 'Itwan', source: 'Person', pronunciation: 'eet-wahn', hint: 'Plural: Ngitunga (Barton 1921: Etunganan)' },
          { target: 'Ngiturukana', source: 'Turkana people', pronunciation: 'ngee-too-roo-kah-nah', hint: 'Plural ethnonym' },
          { target: 'Ngaturukana', source: 'Turkana language', pronunciation: 'ngah-too-roo-kah-nah', hint: 'Feminine/language prefix nga-' },
          { target: 'Ekasukout', source: 'Elder', pronunciation: 'eh-kah-soo-koh-oot', hint: 'Plural: Ngikasuko' },
          { target: 'Esorokit', source: 'Youth / Young warrior', pronunciation: 'eh-soh-roh-keet', hint: 'Plural: Ngisorok' },
          { target: 'Emuron', source: 'Diviner / Medicine man', pronunciation: 'eh-moo-rohn', hint: 'Plural: Ngimurok' },
          { target: 'Epaton', source: 'Friend', pronunciation: 'eh-pah-tohn', hint: 'Plural: Ngipato' }
        ],
        sentences: [
          { target: 'Ngooni Ngiturukana.', source: 'We are Turkana people.' },
          { target: 'Epotok ngikasuko.', source: 'The elders are great/respected.' },
          { target: 'Epaton kang ngesi.', source: 'He is my friend.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the native name of the Turkana language?',
            correctAnswer: 'Ngaturukana',
            options: ['Ngaturukana', 'Ngiturukana', 'Ekasukout', 'Itwan'],
            hint: 'Begins with the feminine prefix nga-'
          },
          {
            type: 'multiple_choice',
            prompt: 'What does "Emuron" mean?',
            correctAnswer: 'Diviner / Medicine man',
            options: ['Diviner / Medicine man', 'Friend', 'Child', 'Cow'],
            hint: 'A respected traditional seer and spiritual healer'
          },
          {
            type: 'match_pairs',
            prompt: 'Match people and roles:',
            correctAnswer: 'Itwan: Person, Ekasukout: Elder, Esorokit: Youth / Warrior, Epaton: Friend',
            pairs: [
              { left: 'Itwan', right: 'Person' },
              { left: 'Ekasukout', right: 'Elder' },
              { left: 'Esorokit', right: 'Youth / Warrior' },
              { left: 'Epaton', right: 'Friend' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'turkana-unit-3',
    title: 'Unit 3: Pastoral Life & Herding',
    description: 'Explore the heart of Turkana culture: cattle, camels, milking, and livestock kraals.',
    icon: '🐄',
    skills: [
      {
        id: 'turkana-livestock',
        title: 'Livestock & Animals',
        icon: 'Shield',
        description: 'Core animals of the pastoral herd: cattle, camels, goats, and sheep.',
        tips: "Cattle (ngaatuk) and camels (ngikaala) represent wealth, nourishment, and ceremonial exchange. Notice irregular plurals: aite (one cow) becomes ngaatuk (cows/cattle).",
        culturalNote: "Every pastoralist animal is known individually by its coat color, horn formation, and maternal lineage.",
        words: [
          { target: 'Aite', source: 'Cow', pronunciation: 'ah-ee-teh', hint: 'Plural: Ngaatuk (cattle)' },
          { target: 'Emaanik', source: 'Bull', pronunciation: 'eh-mah-ah-neek', hint: 'Plural: Ngimaaniko' },
          { target: 'Itaok', source: 'Calf', pronunciation: 'ee-tah-ohk', hint: 'Plural: Ngitak' },
          { target: 'Ekaal', source: 'Camel', pronunciation: 'eh-kah-ahl', hint: 'Plural: Ngikaala' },
          { target: 'Angine', source: 'Goat / She-goat', pronunciation: 'ah-ngee-neh', hint: 'Plural: Nganginei' },
          { target: 'Ekoroi', source: 'He-goat', pronunciation: 'eh-koh-roh-ee', hint: 'Plural: Ngikora' },
          { target: 'Emeseek', source: 'Sheep', pronunciation: 'eh-meh-seh-ehk', hint: 'Plural: Ngimezekin' },
          { target: 'Esikiria', source: 'Donkey', pronunciation: 'eh-see-kee-ree-ah', hint: 'Plural: Ngisikirya' }
        ],
        sentences: [
          { target: 'Epol ekaal logo.', source: 'This camel is big.' },
          { target: 'Elal ngaatuk keng.', source: 'His cattle are many.' },
          { target: 'Nganginei ka ngimezekin.', source: 'Goats and sheep.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the Turkana word for "Camel"?',
            correctAnswer: 'Ekaal',
            options: ['Ekaal', 'Aite', 'Angine', 'Esikiria'],
            hint: 'Desert livestock with plural ngikaala'
          },
          {
            type: 'multiple_choice',
            prompt: 'What is the plural of "Aite" (cow)?',
            correctAnswer: 'Ngaatuk',
            options: ['Ngaatuk', 'Ngikaala', 'Ngitak', 'Ngikora'],
            hint: 'Collective term for cattle'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the animals:',
            correctAnswer: 'Aite: Cow, Ekaal: Camel, Angine: Goat, Esikiria: Donkey',
            pairs: [
              { left: 'Aite', right: 'Cow' },
              { left: 'Ekaal', right: 'Camel' },
              { left: 'Angine', right: 'Goat' },
              { left: 'Esikiria', right: 'Donkey' }
            ]
          }
        ]
      },
      {
        id: 'turkana-milking',
        title: 'Milking & Pastoral Routines',
        icon: 'Compass',
        description: 'Terms for milking, fresh and cultured milk, cowbells, and kraals.',
        tips: "'Ngakile' (milk) is the lifeblood of the Turkana diet. 'Akilep' is the verb to milk (Class 2 KI-verb), and the carved wooden milking jug is 'elepit'.",
        culturalNote: "Milk is enjoyed fresh (nalepan), fermented into rich curds (nakibuk), or churned into butter oil (akimet) stored for dry spells.",
        words: [
          { target: 'Ngakile', source: 'Milk', pronunciation: 'ngah-kee-leh', hint: 'Staple food' },
          { target: 'Akilep', source: 'To milk', pronunciation: 'ah-kee-lehp', hint: 'Verb class /TO' },
          { target: 'Elepit', source: 'Milking jug / Wooden pot', pronunciation: 'eh-leh-peet', hint: 'Carved wooden vessel' },
          { target: 'Anok', source: 'Kraal / Enclosure', pronunciation: 'ah-nohk', hint: 'Thorn barrier for livestock' },
          { target: 'Ekaadongot', source: 'Cowbell', pronunciation: 'eh-kah-ah-doh-ngoht', hint: 'Lead bell for herds' },
          { target: 'Akiyok', source: 'To herd livestock', pronunciation: 'ah-kee-yohk', hint: 'Verb class /KO' },
          { target: 'Akimet', source: 'Ghee / Butter oil', pronunciation: 'ah-kee-meht', hint: 'Clarified pastoral butter' }
        ],
        sentences: [
          { target: 'Elepi aberu aite.', source: 'The woman is milking the cow.' },
          { target: 'Ejok ngakile.', source: 'The milk is good.' },
          { target: 'Eyoki ekile ngaatuk.', source: 'The man is herding the cattle.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Ngakile" mean?',
            correctAnswer: 'Milk',
            options: ['Milk', 'Water', 'Meat', 'Blood'],
            hint: 'The essential dairy staple'
          },
          {
            type: 'multiple_choice',
            prompt: 'Which vessel is specifically used for milking?',
            correctAnswer: 'Elepit',
            options: ['Elepit', 'Anok', 'Ekaadongot', 'Egec'],
            hint: 'Carved wooden milking pot'
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "_____ aberu aite." (The woman milks the cow)',
            correctAnswer: 'Elepi',
            options: ['Elepi', 'Enyami', 'Emat', 'Elosi'],
            hint: '3rd person singular of akilep'
          }
        ]
      }
    ]
  },
  {
    id: 'turkana-unit-4',
    title: 'Unit 4: Sustenance & Homestead',
    description: 'Learn food, water, fire, traditional dwellings (awi), and daily essentials.',
    icon: '🍲',
    skills: [
      {
        id: 'turkana-food',
        title: 'Food, Water & Fire',
        icon: 'Utensils',
        description: 'Vocabulary for water, grains, meat, porridge, and cooking fire.',
        tips: "Water ('ngakipi') is an inherent plural noun. 'Akinyam' means to eat, while 'akimat' means to drink.",
        culturalNote: "Water sources like sand river wells (ngakar) are vital shared communal points across Turkana rangelands.",
        words: [
          { target: 'Akimuj', source: 'Food', pronunciation: 'ah-kee-mooj', hint: 'General sustenance' },
          { target: 'Ngakipi', source: 'Water', pronunciation: 'ngah-kee-pee', hint: 'Essential plural noun' },
          { target: 'Akinyam', source: 'To eat', pronunciation: 'ah-kee-nyahm', hint: 'Verb class /TA' },
          { target: 'Akimat', source: 'To drink', pronunciation: 'ah-kee-maht', hint: 'Verb class /TA' },
          { target: 'Akiring', source: 'Meat', pronunciation: 'ah-kee-reeng', hint: 'Plural: Ngakiryo' },
          { target: 'Atap', source: 'Stiff porridge / Ugali', pronunciation: 'ah-tahp', hint: 'Millet or maize ugali' },
          { target: 'Akim', source: 'Fire', pronunciation: 'ah-keem', hint: 'Cooking and night fire' }
        ],
        sentences: [
          { target: 'Mata ngakipi.', source: 'Drink water.' },
          { target: 'Nyama akiring na.', source: 'Eat this meat.' },
          { target: 'Emonat akim.', source: 'The fire is hot.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is "Water" in Turkana?',
            correctAnswer: 'Ngakipi',
            options: ['Ngakipi', 'Ngakile', 'Akiring', 'Atap'],
            hint: 'Begins with nga-'
          },
          {
            type: 'multiple_choice',
            prompt: 'What does "Akinyam" mean?',
            correctAnswer: 'To eat',
            options: ['To eat', 'To drink', 'To sleep', 'To run'],
            hint: 'Verb relating to food'
          },
          {
            type: 'match_pairs',
            prompt: 'Match food and drink terms:',
            correctAnswer: 'Ngakipi: Water, Akiring: Meat, Atap: Porridge / Ugali, Akim: Fire',
            pairs: [
              { left: 'Ngakipi', right: 'Water' },
              { left: 'Akiring', right: 'Meat' },
              { left: 'Atap', right: 'Porridge / Ugali' },
              { left: 'Akim', right: 'Fire' }
            ]
          }
        ]
      },
      {
        id: 'turkana-dwelling',
        title: 'The Homestead & Daily Objects',
        icon: 'Home',
        description: 'Traditional dwellings: the manyatta, sleeping huts, sandals, and headrests.',
        tips: "A Turkana homestead is called 'awi'. It includes sleeping huts ('akai') and daytime shade arbors ('ekoli'). Men famously carry an 'ekicholong' (wooden stool/headrest).",
        culturalNote: "The ekicholong is both an ergonomic neckrest protecting elaborate clay-and-feather coiffures and a convenient portable stool.",
        words: [
          { target: 'Awi', source: 'Homestead / Manyatta', pronunciation: 'ah-wee', hint: 'Plural: Ngawiyoi' },
          { target: 'Akai', source: 'Sleeping hut / House', pronunciation: 'ah-kah-ee', hint: 'Plural: Ngakais' },
          { target: 'Ekoli', source: 'Daytime shade hut', pronunciation: 'eh-koh-lee', hint: 'Plural: Ngikolya' },
          { target: 'Ekidori', source: 'Homestead gate', pronunciation: 'eh-kee-doh-ree', hint: 'Entrance to the enclosure' },
          { target: 'Ekicholong', source: 'Headrest / Stool', pronunciation: 'eh-kee-choh-lohng', hint: 'Portable wooden stool' },
          { target: 'Amukat', source: 'Sandals / Shoes', pronunciation: 'ah-moo-kaht', hint: 'Plural: Ngamuk' },
          { target: 'Eworu', source: 'Cloth / Wrap', pronunciation: 'eh-woh-roo', hint: 'Plural: Ngiworui' }
        ],
        sentences: [
          { target: 'Awi keng naga.', source: 'This is his/her homestead.' },
          { target: 'Lotu nawi.', source: 'Go to the homestead.' },
          { target: 'Ejok ekicholong logo.', source: 'This stool is good.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is a traditional Turkana homestead or manyatta called?',
            correctAnswer: 'Awi',
            options: ['Awi', 'Akai', 'Ekoli', 'Anok'],
            hint: 'Two-letter word for the family compound'
          },
          {
            type: 'multiple_choice',
            prompt: 'What is an "Ekicholong"?',
            correctAnswer: 'Headrest / Stool',
            options: ['Headrest / Stool', 'Shoe', 'Cloth', 'Door'],
            hint: 'Hand-carved wooden personal accessory'
          },
          {
            type: 'match_pairs',
            prompt: 'Match homestead terms:',
            correctAnswer: 'Awi: Homestead, Akai: Sleeping hut, Ekidori: Gate, Amukat: Sandals',
            pairs: [
              { left: 'Awi', right: 'Homestead' },
              { left: 'Akai', right: 'Sleeping hut' },
              { left: 'Ekidori', right: 'Gate' },
              { left: 'Amukat', right: 'Sandals' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'turkana-unit-5',
    title: 'Unit 5: Nature, Time & Movement',
    description: 'Describe the weather, day-night cycles, and master essential action verbs.',
    icon: '🌍',
    skills: [
      {
        id: 'turkana-time',
        title: 'Time & Natural Cycles',
        icon: 'Sun',
        description: 'Sun, moon, wind, rain, and time expressions throughout the day.',
        tips: "'Akolong' means both the physical sun and day. 'Ataparac' is morning, 'aparan' is daytime, 'ebong' is evening, and 'akware' is night.",
        culturalNote: "The movement of the sun and celestial constellations guides travelers navigating across dry river basins at night.",
        words: [
          { target: 'Akolong', source: 'Sun / Day', pronunciation: 'ah-koh-lohng', hint: 'Celestial body & daylight' },
          { target: 'Elap', source: 'Moon / Month', pronunciation: 'eh-lahp', hint: 'Plural: Ngilapyo' },
          { target: 'Ekwam', source: 'Wind', pronunciation: 'eh-kwahm', hint: 'Rift valley breeze' },
          { target: 'Akiru', source: 'Rain', pronunciation: 'ah-kee-roo', hint: 'Bringer of life and pasture' },
          { target: 'Ataparac', source: 'Morning', pronunciation: 'ah-tah-pah-rahch', hint: 'Early hours before heat' },
          { target: 'Aparan', source: 'Daytime / Midday', pronunciation: 'ah-pah-rahn', hint: 'Sunlight hours' },
          { target: 'Ebong', source: 'Evening', pronunciation: 'eh-bohng', hint: 'Dusk when herds return' },
          { target: 'Akware', source: 'Night', pronunciation: 'ah-kwah-reh', hint: 'Hours of darkness' }
        ],
        sentences: [
          { target: 'Emonat akolong.', source: 'The sun is hot.' },
          { target: 'Ebuni akiru.', source: 'Rain is coming.' },
          { target: 'Ejok ataparac.', source: 'Morning is pleasant.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Akolong" mean?',
            correctAnswer: 'Sun / Day',
            options: ['Sun / Day', 'Moon', 'Rain', 'Wind'],
            hint: 'The solar body and daytime'
          },
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Night"?',
            correctAnswer: 'Akware',
            options: ['Akware', 'Ataparac', 'Aparan', 'Ebong'],
            hint: 'Hours after sunset'
          },
          {
            type: 'match_pairs',
            prompt: 'Match times of day:',
            correctAnswer: 'Ataparac: Morning, Aparan: Daytime, Ebong: Evening, Akware: Night',
            pairs: [
              { left: 'Ataparac', right: 'Morning' },
              { left: 'Aparan', right: 'Daytime' },
              { left: 'Ebong', right: 'Evening' },
              { left: 'Akware', right: 'Night' }
            ]
          }
        ]
      },
      {
        id: 'turkana-actions',
        title: 'Actions & Movement Verbs',
        icon: 'Footprints',
        description: 'Vital movement and perceptual verbs: go, come, see, hear, and pronouns.',
        tips: "Turkana verbs take subject prefix markers. For example: alosit (to go) -> Elosi ngesi (He/she goes). In imperatives: Tolotu! (Go!), Tobu! (Come!).",
        culturalNote: "Pastoral mobility is a core survival strategy, moving herds between wet season lowland pastures and dry season highland plateaus.",
        words: [
          { target: 'Alosit', source: 'To go / Walk', pronunciation: 'ah-loh-seet', hint: 'Class 1 TO-verb. Imperative: Tolotu!' },
          { target: 'Abunere', source: 'To come', pronunciation: 'ah-boo-neh-reh', hint: 'Class 1 TO-verb. Imperative: Tobu!' },
          { target: 'Aanyun', source: 'To see / Find', pronunciation: 'ah-ahn-yoon', hint: 'Perception verb' },
          { target: 'Apupokin', source: 'To hear / Listen', pronunciation: 'ah-poo-poh-keen', hint: 'Class 1 TO-verb' },
          { target: 'Akirot', source: 'Word / Message', pronunciation: 'ah-kee-roht', hint: 'Plural: Ngakiro' },
          { target: 'Ayong', source: 'I / Me', pronunciation: 'ah-yohng', hint: '1st person pronoun' },
          { target: 'Iyong', source: 'You (singular)', pronunciation: 'ee-yohng', hint: '2nd person pronoun' },
          { target: 'Ngesi', source: 'He / She / It', pronunciation: 'ngeh-see', hint: '3rd person pronoun' }
        ],
        sentences: [
          { target: 'Elosi ayong nawi.', source: 'I am going to the homestead.' },
          { target: 'Tobu nege!', source: 'Come here!' },
          { target: 'Aanyut ayong aite.', source: 'I have seen the cow.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which verb means "To go / Walk"?',
            correctAnswer: 'Alosit',
            options: ['Alosit', 'Abunere', 'Akinyam', 'Aperu'],
            hint: 'Imperative is Tolotu!'
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you say "I / Me" in Turkana?',
            correctAnswer: 'Ayong',
            options: ['Ayong', 'Iyong', 'Ngesi', 'Ngooni'],
            hint: '1st person singular pronoun'
          },
          {
            type: 'match_pairs',
            prompt: 'Match pronouns and verbs:',
            correctAnswer: 'Ayong: I / Me, Iyong: You, Alosit: To go, Abunere: To come',
            pairs: [
              { left: 'Ayong', right: 'I / Me' },
              { left: 'Iyong', right: 'You' },
              { left: 'Alosit', right: 'To go / Walk' },
              { left: 'Abunere', right: 'To come' }
            ]
          }
        ]
      }
    ]
  }
];
