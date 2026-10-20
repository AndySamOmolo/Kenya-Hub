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
  },
  
  // ── EXPANDED SOURCE-VERIFIED UNITS ──
  {
    "id": "turkana-unit-6-greetings",
    "title": "Unit 6: Greetings & Farewells",
    "description": "Comprehensive Turkana curriculum for Greetings & Farewells, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
    "icon": "Handshake",
    "skills": [
      {
        "id": "turkana-exp-greetings",
        "title": "Greetings & Farewells (Part 1)",
        "icon": "Handshake",
        "description": "Master Turkana greetings & farewells vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Greetings & Farewells, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ejok' (Hello), 'Akiyar akwan / Ejok noi' (I am well), 'Kibirobo' (Good afternoon), 'Ebong ejok' (Good evening).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ejok",
            "source": "Hello",
            "pronunciation": "eh-johk",
            "hint": "Universal greeting. Literally 'Is it good?'. Plural: Iejokete?",
            "example": "Ejok — Hello (Universal greeting. Literally 'Is it good?'. Plural: Iejokete?)"
          },
          {
            "target": "Akiyar akwan / Ejok noi",
            "source": "I am well",
            "pronunciation": "ah-kee-yahr ah-kwahn / eh-johk noh-ee",
            "hint": "Formal health acknowledgement. Lit. 'The body is alive'.",
            "example": "Akiyar akwan / Ejok noi — I am well (Formal health acknowledgement. Lit. 'The body is alive'.)"
          },
          {
            "target": "Kibirobo",
            "source": "Good afternoon",
            "pronunciation": "kee-bee-roh-boh",
            "hint": "Daytime greeting (lit. 'May you sit/stay well').",
            "example": "Kibirobo — Good afternoon (Daytime greeting (lit. 'May you sit/stay well').)"
          },
          {
            "target": "Ebong ejok",
            "source": "Good evening",
            "pronunciation": "eh-bohng eh-johk",
            "hint": "Evening greeting. Ebong = evening.",
            "example": "Ebong ejok — Good evening (Evening greeting. Ebong = evening.)"
          },
          {
            "target": "Tolotu nawi / Tolos",
            "source": "Welcome",
            "pronunciation": "toh-loh-too nah-wee / toh-lohs",
            "hint": "Lit. 'Enter into the homestead'.",
            "example": "Tolotu nawi / Tolos — Welcome (Lit. 'Enter into the homestead'.)"
          },
          {
            "target": "Eyalama noi",
            "source": "Thank you very much",
            "pronunciation": "eh-yah-lah-mah noh-ee",
            "hint": "Heartfelt appreciation.",
            "example": "Eyalama noi — Thank you very much (Heartfelt appreciation.)"
          },
          {
            "target": "Torimokakithai / Pole",
            "source": "Sorry",
            "pronunciation": "toh-ree-moh-kah-kee-thah-ee",
            "hint": "Apology or sympathy.",
            "example": "Torimokakithai / Pole — Sorry (Apology or sympathy.)"
          },
          {
            "target": "Ee / Ee robo",
            "source": "Yes",
            "pronunciation": "eh-eh / eh-eh roh-boh",
            "hint": "'Ee robo' = yes indeed, of course.",
            "example": "Ee / Ee robo — Yes ('Ee robo' = yes indeed, of course.)"
          },
          {
            "target": "Mam / Meere",
            "source": "No",
            "pronunciation": "mahm / meh-eh-reh",
            "hint": "'Mam' = none / no; 'meere' = is not.",
            "example": "Mam / Meere — No ('Mam' = none / no; 'meere' = is not.)"
          },
          {
            "target": "Mata",
            "source": "Health (Pastoral greeting enquiry)",
            "pronunciation": "mah-tah",
            "hint": "Traditional pastoral greeting inquiry between adults (lit. 'health'). Response: 'Ii mata'. (Barton 1921)",
            "example": "Mata — Health (Pastoral greeting enquiry) (Traditional pastoral greeting inquiry between adults (lit. 'health'). Response: 'Ii mata'. (Barton 1921))"
          },
          {
            "target": "Ii mata",
            "source": "Health to you (Greeting reply)",
            "pronunciation": "ee-ee mah-tah",
            "hint": "Traditional response acknowledging health. (Barton 1921)",
            "example": "Ii mata — Health to you (Greeting reply) (Traditional response acknowledging health. (Barton 1921))"
          },
          {
            "target": "Mata ng'atuk",
            "source": "Health to your cattle",
            "pronunciation": "mah-tah ngah-took",
            "hint": "Pastoral greeting inquiring after cattle herds. Response: 'Mata ouwi' (health to your village). (Barton 1921)",
            "example": "Mata ng'atuk — Health to your cattle (Pastoral greeting inquiring after cattle herds. Response: 'Mata ouwi' (health to your village). (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ejok\" mean in English?",
            "correctAnswer": "Hello",
            "options": [
              "I am well",
              "Good afternoon",
              "Good evening",
              "Hello"
            ],
            "hint": "Universal greeting. Literally 'Is it good?'. Plural: Iejokete?"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akiyar akwan / Ejok noi\" mean in English?",
            "correctAnswer": "I am well",
            "options": [
              "Good afternoon",
              "Good evening",
              "I am well",
              "Hello"
            ],
            "hint": "Formal health acknowledgement. Lit. 'The body is alive'."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kibirobo\" mean in English?",
            "correctAnswer": "Good afternoon",
            "options": [
              "Good evening",
              "Good afternoon",
              "Hello",
              "I am well"
            ],
            "hint": "Daytime greeting (lit. 'May you sit/stay well')."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Good afternoon\" in Turkana?",
            "correctAnswer": "Kibirobo",
            "options": [
              "Kibirobo",
              "Ejok",
              "Akiyar akwan / Ejok noi",
              "Ebong ejok"
            ],
            "hint": "kee-bee-roh-boh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Good evening\" in Turkana?",
            "correctAnswer": "Ebong ejok",
            "options": [
              "Ejok",
              "Akiyar akwan / Ejok noi",
              "Kibirobo",
              "Ebong ejok"
            ],
            "hint": "eh-bohng eh-johk"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Welcome\" in Turkana?",
            "correctAnswer": "Tolotu nawi / Tolos",
            "options": [
              "Akiyar akwan / Ejok noi",
              "Kibirobo",
              "Tolotu nawi / Tolos",
              "Ejok"
            ],
            "hint": "toh-loh-too nah-wee / toh-lohs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ejok: Hello, Akiyar akwan / Ejok noi: I am well, Kibirobo: Good afternoon, Ebong ejok: Good evening",
            "pairs": [
              {
                "left": "Ejok",
                "right": "Hello"
              },
              {
                "left": "Akiyar akwan / Ejok noi",
                "right": "I am well"
              },
              {
                "left": "Kibirobo",
                "right": "Good afternoon"
              },
              {
                "left": "Ebong ejok",
                "right": "Good evening"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Hello\" in Turkana.",
            "correctAnswer": "Ejok",
            "options": [
              "Ejok",
              "Akiyar akwan / Ejok noi",
              "Kibirobo",
              "Ebong ejok"
            ],
            "hint": "eh-johk"
          }
        ]
      },
      {
        "id": "turkana-exp-greetings-2",
        "title": "Greetings & Farewells (Part 2)",
        "icon": "Handshake",
        "description": "Master Turkana greetings & farewells vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Greetings & Farewells, pay special attention to pronunciation and morphological prefixes/suffixes: 'Mata ouwi' (Health to your village), 'Mata ng'idwi' (Health to your children), 'Mata ariama' (Health to our meetings), 'Mata ng'ebarin' (Health to your property).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Mata ouwi",
            "source": "Health to your village",
            "pronunciation": "mah-tah oh-wee",
            "hint": "Pastoral blessing wishing wellbeing upon the homestead and kraal. (Barton 1921)",
            "example": "Mata ouwi — Health to your village (Pastoral blessing wishing wellbeing upon the homestead and kraal. (Barton 1921))"
          },
          {
            "target": "Mata ng'idwi",
            "source": "Health to your children",
            "pronunciation": "mah-tah ngee-dwee",
            "hint": "Pastoral blessing for family and children. Response: 'Mata ariama'. (Barton 1921)",
            "example": "Mata ng'idwi — Health to your children (Pastoral blessing for family and children. Response: 'Mata ariama'. (Barton 1921))"
          },
          {
            "target": "Mata ariama",
            "source": "Health to our meetings",
            "pronunciation": "mah-tah ah-ree-ah-mah",
            "hint": "Greeting reply wishing health and prosperity to repeated gatherings and fellowship. (Barton 1921)",
            "example": "Mata ariama — Health to our meetings (Greeting reply wishing health and prosperity to repeated gatherings and fellowship. (Barton 1921))"
          },
          {
            "target": "Mata ng'ebarin",
            "source": "Health to your property",
            "pronunciation": "mah-tah ngeh-bah-reen",
            "hint": "Greeting inquiring after livestock wealth and possessions. Response: 'Mata ng'abero'. (Barton 1921)",
            "example": "Mata ng'ebarin — Health to your property (Greeting inquiring after livestock wealth and possessions. Response: 'Mata ng'abero'. (Barton 1921))"
          },
          {
            "target": "Mata ng'abero",
            "source": "Health to your women",
            "pronunciation": "mah-tah ngah-beh-roh",
            "hint": "Greeting response wishing peace and health to household women. (Barton 1921)",
            "example": "Mata ng'abero — Health to your women (Greeting response wishing peace and health to household women. (Barton 1921))"
          },
          {
            "target": "Mata ejik",
            "source": "Complete health",
            "pronunciation": "mah-tah eh-jeek",
            "hint": "Spoken together by both parties at the close of greetings; signifies total wellbeing and absolute peace. (Barton 1921)",
            "example": "Mata ejik — Complete health (Spoken together by both parties at the close of greetings; signifies total wellbeing and absolute peace. (Barton 1921))"
          },
          {
            "target": "Na? / Baiya",
            "source": "Traditional salutation",
            "pronunciation": "nah / bah-ee-yah",
            "hint": "Ancient reciprocal salutation repeated three times between speakers. (Barton 1921)",
            "example": "Na? / Baiya — Traditional salutation (Ancient reciprocal salutation repeated three times between speakers. (Barton 1921))"
          },
          {
            "target": "Tolot-ion / Ejok alothi",
            "source": "Farewell exchange",
            "pronunciation": "toh-loht-ee-ohn / eh-johk ah-loh-thee",
            "hint": "'Go thou' answered by 'Good, I go'. (Barton 1921)",
            "example": "Tolot-ion / Ejok alothi — Farewell exchange ('Go thou' answered by 'Good, I go'. (Barton 1921))"
          },
          {
            "target": "Abe / Ii",
            "source": "Goodbye (Parting)",
            "pronunciation": "ah-beh / ee-ee",
            "hint": "Simple parting farewell 'Abe' answered with affirmative 'Ii'. (Barton 1921)",
            "example": "Abe / Ii — Goodbye (Parting) (Simple parting farewell 'Abe' answered with affirmative 'Ii'. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mata ouwi\" mean in English?",
            "correctAnswer": "Health to your village",
            "options": [
              "Health to your children",
              "Health to our meetings",
              "Health to your property",
              "Health to your village"
            ],
            "hint": "Pastoral blessing wishing wellbeing upon the homestead and kraal. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mata ng'idwi\" mean in English?",
            "correctAnswer": "Health to your children",
            "options": [
              "Health to our meetings",
              "Health to your property",
              "Health to your children",
              "Health to your village"
            ],
            "hint": "Pastoral blessing for family and children. Response: 'Mata ariama'. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mata ariama\" mean in English?",
            "correctAnswer": "Health to our meetings",
            "options": [
              "Health to your property",
              "Health to our meetings",
              "Health to your village",
              "Health to your children"
            ],
            "hint": "Greeting reply wishing health and prosperity to repeated gatherings and fellowship. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Health to our meetings\" in Turkana?",
            "correctAnswer": "Mata ariama",
            "options": [
              "Mata ariama",
              "Mata ouwi",
              "Mata ng'idwi",
              "Mata ng'ebarin"
            ],
            "hint": "mah-tah ah-ree-ah-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Health to your property\" in Turkana?",
            "correctAnswer": "Mata ng'ebarin",
            "options": [
              "Mata ouwi",
              "Mata ng'idwi",
              "Mata ariama",
              "Mata ng'ebarin"
            ],
            "hint": "mah-tah ngeh-bah-reen"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Health to your women\" in Turkana?",
            "correctAnswer": "Mata ng'abero",
            "options": [
              "Mata ng'idwi",
              "Mata ariama",
              "Mata ng'abero",
              "Mata ouwi"
            ],
            "hint": "mah-tah ngah-beh-roh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Mata ouwi: Health to your village, Mata ng'idwi: Health to your children, Mata ariama: Health to our meetings, Mata ng'ebarin: Health to your property",
            "pairs": [
              {
                "left": "Mata ouwi",
                "right": "Health to your village"
              },
              {
                "left": "Mata ng'idwi",
                "right": "Health to your children"
              },
              {
                "left": "Mata ariama",
                "right": "Health to our meetings"
              },
              {
                "left": "Mata ng'ebarin",
                "right": "Health to your property"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Health to your village\" in Turkana.",
            "correctAnswer": "Mata ouwi",
            "options": [
              "Mata ouwi",
              "Mata ng'idwi",
              "Mata ariama",
              "Mata ng'ebarin"
            ],
            "hint": "mah-tah oh-wee"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-7-numbers",
    "title": "Unit 7: Numbers",
    "description": "Comprehensive Turkana curriculum for Numbers, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
    "icon": "Hash",
    "skills": [
      {
        "id": "turkana-exp-numbers",
        "title": "Numbers (Part 1)",
        "icon": "Hash",
        "description": "Master Turkana numbers vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Numbers, pay special attention to pronunciation and morphological prefixes/suffixes: 'Apei / Epei' (One), 'Ngaarei / Ngiarei (Ari)' (Two), 'Ngauni / Ngiuni (Uni)' (Three), 'Ngaomon / Ngiomon (Omwon)' (Four).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Apei / Epei",
            "source": "One",
            "pronunciation": "ah-peh-ee / eh-peh-ee",
            "hint": "Cardinal 1 (Apei fem., Epei masc.). (Barton 1921)",
            "example": "Apei / Epei — One (Cardinal 1 (Apei fem., Epei masc.). (Barton 1921))"
          },
          {
            "target": "Ngaarei / Ngiarei (Ari)",
            "source": "Two",
            "pronunciation": "ngah-ah-reh-ee / ah-ree",
            "hint": "Cardinal 2 (Ngaarei fem., Ngiarei masc.; Ari). (Barton 1921)",
            "example": "Ngaarei / Ngiarei (Ari) — Two (Cardinal 2 (Ngaarei fem., Ngiarei masc.; Ari). (Barton 1921))"
          },
          {
            "target": "Ngauni / Ngiuni (Uni)",
            "source": "Three",
            "pronunciation": "ngah-oo-nee / oo-nee",
            "hint": "Cardinal 3 (Ngauni fem., Ngiuni masc.; Uni). (Barton 1921)",
            "example": "Ngauni / Ngiuni (Uni) — Three (Cardinal 3 (Ngauni fem., Ngiuni masc.; Uni). (Barton 1921))"
          },
          {
            "target": "Ngaomon / Ngiomon (Omwon)",
            "source": "Four",
            "pronunciation": "ngah-oh-mohn / ohm-wohn",
            "hint": "Cardinal 4 (Ngaomon fem., Ngiomon masc.; Omwon). (Barton 1921)",
            "example": "Ngaomon / Ngiomon (Omwon) — Four (Cardinal 4 (Ngaomon fem., Ngiomon masc.; Omwon). (Barton 1921))"
          },
          {
            "target": "Ngakan / Akhan",
            "source": "Five",
            "pronunciation": "ngah-kahn / ah-khahn",
            "hint": "Cardinal 5. Literally 'hand' (akan). (Barton 1921)",
            "example": "Ngakan / Akhan — Five (Cardinal 5. Literally 'hand' (akan). (Barton 1921))"
          },
          {
            "target": "Ngakanikapei / Akhan ka pei",
            "source": "Six",
            "pronunciation": "ngah-kah-nee-kah-peh-ee",
            "hint": "5 + 1. (Barton 1921)",
            "example": "Ngakanikapei / Akhan ka pei — Six (5 + 1. (Barton 1921))"
          },
          {
            "target": "Ngakanikaarei / Akhan ka ari",
            "source": "Seven",
            "pronunciation": "ngah-kah-nee-kah-ah-reh-ee",
            "hint": "5 + 2. (Barton 1921)",
            "example": "Ngakanikaarei / Akhan ka ari — Seven (5 + 2. (Barton 1921))"
          },
          {
            "target": "Ngakanikauni / Akhan ka uni",
            "source": "Eight",
            "pronunciation": "ngah-kah-nee-kah-oo-nee",
            "hint": "5 + 3. (Barton 1921)",
            "example": "Ngakanikauni / Akhan ka uni — Eight (5 + 3. (Barton 1921))"
          },
          {
            "target": "Ngakanikaomon / Akhan ka omwon",
            "source": "Nine",
            "pronunciation": "ngah-kah-nee-kah-oh-mohn",
            "hint": "5 + 4. (Barton 1921)",
            "example": "Ngakanikaomon / Akhan ka omwon — Nine (5 + 4. (Barton 1921))"
          },
          {
            "target": "Tomon / Ng'tomon",
            "source": "Ten",
            "pronunciation": "toh-mohn",
            "hint": "Cardinal 10. (Barton 1921)",
            "example": "Tomon / Ng'tomon — Ten (Cardinal 10. (Barton 1921))"
          },
          {
            "target": "Tomon ka pei",
            "source": "Eleven",
            "pronunciation": "toh-mohn kah peh-ee",
            "hint": "10 + 1. (Barton 1921)",
            "example": "Tomon ka pei — Eleven (10 + 1. (Barton 1921))"
          },
          {
            "target": "Tomon ka ari / Tomon kangaarei",
            "source": "Twelve",
            "pronunciation": "toh-mohn kah ah-ree",
            "hint": "10 + 2. (Barton 1921)",
            "example": "Tomon ka ari / Tomon kangaarei — Twelve (10 + 2. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Apei / Epei\" mean in English?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
            ],
            "hint": "Cardinal 1 (Apei fem., Epei masc.). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ngaarei / Ngiarei (Ari)\" mean in English?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
              "One"
            ],
            "hint": "Cardinal 2 (Ngaarei fem., Ngiarei masc.; Ari). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ngauni / Ngiuni (Uni)\" mean in English?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Cardinal 3 (Ngauni fem., Ngiuni masc.; Uni). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Turkana?",
            "correctAnswer": "Ngauni / Ngiuni (Uni)",
            "options": [
              "Ngauni / Ngiuni (Uni)",
              "Apei / Epei",
              "Ngaarei / Ngiarei (Ari)",
              "Ngaomon / Ngiomon (Omwon)"
            ],
            "hint": "ngah-oo-nee / oo-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Turkana?",
            "correctAnswer": "Ngaomon / Ngiomon (Omwon)",
            "options": [
              "Apei / Epei",
              "Ngaarei / Ngiarei (Ari)",
              "Ngauni / Ngiuni (Uni)",
              "Ngaomon / Ngiomon (Omwon)"
            ],
            "hint": "ngah-oh-mohn / ohm-wohn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Five\" in Turkana?",
            "correctAnswer": "Ngakan / Akhan",
            "options": [
              "Ngaarei / Ngiarei (Ari)",
              "Ngauni / Ngiuni (Uni)",
              "Ngakan / Akhan",
              "Apei / Epei"
            ],
            "hint": "ngah-kahn / ah-khahn"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Apei / Epei: One, Ngaarei / Ngiarei (Ari): Two, Ngauni / Ngiuni (Uni): Three, Ngaomon / Ngiomon (Omwon): Four",
            "pairs": [
              {
                "left": "Apei / Epei",
                "right": "One"
              },
              {
                "left": "Ngaarei / Ngiarei (Ari)",
                "right": "Two"
              },
              {
                "left": "Ngauni / Ngiuni (Uni)",
                "right": "Three"
              },
              {
                "left": "Ngaomon / Ngiomon (Omwon)",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"One\" in Turkana.",
            "correctAnswer": "Apei / Epei",
            "options": [
              "Apei / Epei",
              "Ngaarei / Ngiarei (Ari)",
              "Ngauni / Ngiuni (Uni)",
              "Ngaomon / Ngiomon (Omwon)"
            ],
            "hint": "ah-peh-ee / eh-peh-ee"
          }
        ]
      },
      {
        "id": "turkana-exp-numbers-2",
        "title": "Numbers (Part 2)",
        "icon": "Hash",
        "description": "Master Turkana numbers vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Numbers, pay special attention to pronunciation and morphological prefixes/suffixes: 'Tomon ari / Ngatomona arei' (Twenty), 'Tomon uni' (Thirty), 'Tomon omwon' (Forty), 'Tomon akhan / Ngatomona akan' (Fifty).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Tomon ari / Ngatomona arei",
            "source": "Twenty",
            "pronunciation": "toh-mohn ah-ree",
            "hint": "20 (two tens). (Barton 1921)",
            "example": "Tomon ari / Ngatomona arei — Twenty (20 (two tens). (Barton 1921))"
          },
          {
            "target": "Tomon uni",
            "source": "Thirty",
            "pronunciation": "toh-mohn oo-nee",
            "hint": "30 (three tens). (Barton 1921)",
            "example": "Tomon uni — Thirty (30 (three tens). (Barton 1921))"
          },
          {
            "target": "Tomon omwon",
            "source": "Forty",
            "pronunciation": "toh-mohn ohm-wohn",
            "hint": "40 (four tens). (Barton 1921)",
            "example": "Tomon omwon — Forty (40 (four tens). (Barton 1921))"
          },
          {
            "target": "Tomon akhan / Ngatomona akan",
            "source": "Fifty",
            "pronunciation": "toh-mohn ah-khahn",
            "hint": "50 (five tens). (Barton 1921)",
            "example": "Tomon akhan / Ngatomona akan — Fifty (50 (five tens). (Barton 1921))"
          },
          {
            "target": "Tomon akhan ka pei",
            "source": "Sixty",
            "pronunciation": "toh-mohn ah-khahn kah peh-ee",
            "hint": "60 (six tens). (Barton 1921)",
            "example": "Tomon akhan ka pei — Sixty (60 (six tens). (Barton 1921))"
          },
          {
            "target": "Tomon akhan ka ari",
            "source": "Seventy",
            "pronunciation": "toh-mohn ah-khahn kah ah-ree",
            "hint": "70 (seven tens). (Barton 1921)",
            "example": "Tomon akhan ka ari — Seventy (70 (seven tens). (Barton 1921))"
          },
          {
            "target": "Tomon akhan ka uni",
            "source": "Eighty",
            "pronunciation": "toh-mohn ah-khahn kah oo-nee",
            "hint": "80 (eight tens). (Barton 1921)",
            "example": "Tomon akhan ka uni — Eighty (80 (eight tens). (Barton 1921))"
          },
          {
            "target": "Tomon akhan ka omwon",
            "source": "Ninety",
            "pronunciation": "toh-mohn ah-khahn kah ohm-wohn",
            "hint": "90 (nine tens). (Barton 1921)",
            "example": "Tomon akhan ka omwon — Ninety (90 (nine tens). (Barton 1921))"
          },
          {
            "target": "Tomon tomon / Amiet",
            "source": "One hundred",
            "pronunciation": "toh-mohn toh-mohn / ah-mee-eht",
            "hint": "100 (ten tens). (Barton 1921)",
            "example": "Tomon tomon / Amiet — One hundred (100 (ten tens). (Barton 1921))"
          },
          {
            "target": "Tomon tomon ithia ari",
            "source": "Two hundred",
            "pronunciation": "toh-mohn toh-mohn ee-thee-ah ah-ree",
            "hint": "200. (Barton 1921)",
            "example": "Tomon tomon ithia ari — Two hundred (200. (Barton 1921))"
          },
          {
            "target": "Abungi",
            "source": "Small herd count (250–300)",
            "pronunciation": "ah-boon-gee",
            "hint": "Traditional pastoral counting unit denoting a small herd of 250 to 300 livestock. (Barton 1921)",
            "example": "Abungi — Small herd count (250–300) (Traditional pastoral counting unit denoting a small herd of 250 to 300 livestock. (Barton 1921))"
          },
          {
            "target": "Ouriman / Alip",
            "source": "Large herd count (500–1000)",
            "pronunciation": "oh-ree-mahn / ah-leep",
            "hint": "Traditional pastoral counting unit denoting a large herd of 500 to 1,000 cattle. (Barton 1921)",
            "example": "Ouriman / Alip — Large herd count (500–1000) (Traditional pastoral counting unit denoting a large herd of 500 to 1,000 cattle. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Tomon ari / Ngatomona arei\" mean in English?",
            "correctAnswer": "Twenty",
            "options": [
              "Thirty",
              "Forty",
              "Fifty",
              "Twenty"
            ],
            "hint": "20 (two tens). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Tomon uni\" mean in English?",
            "correctAnswer": "Thirty",
            "options": [
              "Forty",
              "Fifty",
              "Thirty",
              "Twenty"
            ],
            "hint": "30 (three tens). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Tomon omwon\" mean in English?",
            "correctAnswer": "Forty",
            "options": [
              "Fifty",
              "Forty",
              "Twenty",
              "Thirty"
            ],
            "hint": "40 (four tens). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Forty\" in Turkana?",
            "correctAnswer": "Tomon omwon",
            "options": [
              "Tomon omwon",
              "Tomon ari / Ngatomona arei",
              "Tomon uni",
              "Tomon akhan / Ngatomona akan"
            ],
            "hint": "toh-mohn ohm-wohn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fifty\" in Turkana?",
            "correctAnswer": "Tomon akhan / Ngatomona akan",
            "options": [
              "Tomon ari / Ngatomona arei",
              "Tomon uni",
              "Tomon omwon",
              "Tomon akhan / Ngatomona akan"
            ],
            "hint": "toh-mohn ah-khahn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sixty\" in Turkana?",
            "correctAnswer": "Tomon akhan ka pei",
            "options": [
              "Tomon uni",
              "Tomon omwon",
              "Tomon akhan ka pei",
              "Tomon ari / Ngatomona arei"
            ],
            "hint": "toh-mohn ah-khahn kah peh-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Tomon ari / Ngatomona arei: Twenty, Tomon uni: Thirty, Tomon omwon: Forty, Tomon akhan / Ngatomona akan: Fifty",
            "pairs": [
              {
                "left": "Tomon ari / Ngatomona arei",
                "right": "Twenty"
              },
              {
                "left": "Tomon uni",
                "right": "Thirty"
              },
              {
                "left": "Tomon omwon",
                "right": "Forty"
              },
              {
                "left": "Tomon akhan / Ngatomona akan",
                "right": "Fifty"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Twenty\" in Turkana.",
            "correctAnswer": "Tomon ari / Ngatomona arei",
            "options": [
              "Tomon ari / Ngatomona arei",
              "Tomon uni",
              "Tomon omwon",
              "Tomon akhan / Ngatomona akan"
            ],
            "hint": "toh-mohn ah-ree"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-8-calendar-seasons",
    "title": "Unit 8: Calendar & Seasons",
    "description": "Comprehensive Turkana curriculum for Calendar & Seasons, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
    "icon": "Calendar",
    "skills": [
      {
        "id": "turkana-exp-calendar-seasons",
        "title": "Calendar & Seasons (Part 1)",
        "icon": "Calendar",
        "description": "Master Turkana calendar & seasons vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Calendar & Seasons, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ageboro' (Rainy season), 'Akamu' (Dry season), 'Lodungi' (January), 'Lomoruk' (February).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ageboro",
            "source": "Rainy season",
            "pronunciation": "ah-geh-boh-roh",
            "hint": "The traditional rainy season in the Turkana pastoral cycle. (Barton 1921)",
            "example": "Ageboro — Rainy season (The traditional rainy season in the Turkana pastoral cycle. (Barton 1921))"
          },
          {
            "target": "Akamu",
            "source": "Dry season",
            "pronunciation": "ah-kah-moo",
            "hint": "The dry season, demanding seasonal herd migrations to mountain grazing reserves. (Barton 1921)",
            "example": "Akamu — Dry season (The dry season, demanding seasonal herd migrations to mountain grazing reserves. (Barton 1921))"
          },
          {
            "target": "Lodungi",
            "source": "January",
            "pronunciation": "loh-doon-gee",
            "hint": "1st month of the Turkana traditional calendar; begins approx. 22 January. (Barton 1921)",
            "example": "Lodungi — January (1st month of the Turkana traditional calendar; begins approx. 22 January. (Barton 1921))"
          },
          {
            "target": "Lomoruk",
            "source": "February",
            "pronunciation": "loh-moh-rook",
            "hint": "2nd month of the traditional Turkana calendar. (Barton 1921)",
            "example": "Lomoruk — February (2nd month of the traditional Turkana calendar. (Barton 1921))"
          },
          {
            "target": "Loichoto",
            "source": "March",
            "pronunciation": "loh-ee-choh-toh",
            "hint": "3rd month of the traditional Turkana calendar; heralds wet season preparations. (Barton 1921)",
            "example": "Loichoto — March (3rd month of the traditional Turkana calendar; heralds wet season preparations. (Barton 1921))"
          },
          {
            "target": "Titima",
            "source": "April",
            "pronunciation": "tee-tee-mah",
            "hint": "4th month of the traditional Turkana calendar; marks wet season rains and lush grass. (Barton 1921)",
            "example": "Titima — April (4th month of the traditional Turkana calendar; marks wet season rains and lush grass. (Barton 1921))"
          },
          {
            "target": "Yeliyel",
            "source": "May",
            "pronunciation": "yeh-lee-yehl",
            "hint": "5th month of the traditional Turkana calendar; peak milk and calving season. (Barton 1921)",
            "example": "Yeliyel — May (5th month of the traditional Turkana calendar; peak milk and calving season. (Barton 1921))"
          },
          {
            "target": "Lopo",
            "source": "June",
            "pronunciation": "loh-poh",
            "hint": "6th month of the traditional Turkana calendar; end of rainy season. (Barton 1921)",
            "example": "Lopo — June (6th month of the traditional Turkana calendar; end of rainy season. (Barton 1921))"
          },
          {
            "target": "Lotiak",
            "source": "July",
            "pronunciation": "loh-tee-ahk",
            "hint": "7th month of the traditional Turkana calendar; onset of dry season. (Barton 1921)",
            "example": "Lotiak — July (7th month of the traditional Turkana calendar; onset of dry season. (Barton 1921))"
          },
          {
            "target": "Lolingachunu",
            "source": "August",
            "pronunciation": "loh-leen-gah-choo-noo",
            "hint": "8th month of the traditional Turkana calendar; mid dry season. (Barton 1921)",
            "example": "Lolingachunu — August (8th month of the traditional Turkana calendar; mid dry season. (Barton 1921))"
          },
          {
            "target": "Lothaban",
            "source": "September",
            "pronunciation": "loh-thah-bahn",
            "hint": "9th month of the traditional Turkana calendar. (Barton 1921)",
            "example": "Lothaban — September (9th month of the traditional Turkana calendar. (Barton 1921))"
          },
          {
            "target": "Lolongu",
            "source": "October",
            "pronunciation": "loh-lohn-goo",
            "hint": "10th month of the traditional Turkana calendar. (Barton 1921)",
            "example": "Lolongu — October (10th month of the traditional Turkana calendar. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ageboro\" mean in English?",
            "correctAnswer": "Rainy season",
            "options": [
              "Dry season",
              "January",
              "February",
              "Rainy season"
            ],
            "hint": "The traditional rainy season in the Turkana pastoral cycle. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akamu\" mean in English?",
            "correctAnswer": "Dry season",
            "options": [
              "January",
              "February",
              "Dry season",
              "Rainy season"
            ],
            "hint": "The dry season, demanding seasonal herd migrations to mountain grazing reserves. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Lodungi\" mean in English?",
            "correctAnswer": "January",
            "options": [
              "February",
              "January",
              "Rainy season",
              "Dry season"
            ],
            "hint": "1st month of the Turkana traditional calendar; begins approx. 22 January. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"January\" in Turkana?",
            "correctAnswer": "Lodungi",
            "options": [
              "Lodungi",
              "Ageboro",
              "Akamu",
              "Lomoruk"
            ],
            "hint": "loh-doon-gee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"February\" in Turkana?",
            "correctAnswer": "Lomoruk",
            "options": [
              "Ageboro",
              "Akamu",
              "Lodungi",
              "Lomoruk"
            ],
            "hint": "loh-moh-rook"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"March\" in Turkana?",
            "correctAnswer": "Loichoto",
            "options": [
              "Akamu",
              "Lodungi",
              "Loichoto",
              "Ageboro"
            ],
            "hint": "loh-ee-choh-toh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ageboro: Rainy season, Akamu: Dry season, Lodungi: January, Lomoruk: February",
            "pairs": [
              {
                "left": "Ageboro",
                "right": "Rainy season"
              },
              {
                "left": "Akamu",
                "right": "Dry season"
              },
              {
                "left": "Lodungi",
                "right": "January"
              },
              {
                "left": "Lomoruk",
                "right": "February"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Rainy season\" in Turkana.",
            "correctAnswer": "Ageboro",
            "options": [
              "Ageboro",
              "Akamu",
              "Lodungi",
              "Lomoruk"
            ],
            "hint": "ah-geh-boh-roh"
          }
        ]
      },
      {
        "id": "turkana-exp-calendar-seasons-2",
        "title": "Calendar & Seasons (Part 2)",
        "icon": "Calendar",
        "description": "Master Turkana calendar & seasons vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Calendar & Seasons, pay special attention to pronunciation and morphological prefixes/suffixes: 'Lorarrar' (November), 'Lugwan' (December), 'Ekaru (pl. ngaro)' (Year), 'Elap (pl. ngelapio)' (Month / Moon).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Lorarrar",
            "source": "November",
            "pronunciation": "loh-rah-rahr",
            "hint": "11th month of the traditional Turkana calendar. (Barton 1921)",
            "example": "Lorarrar — November (11th month of the traditional Turkana calendar. (Barton 1921))"
          },
          {
            "target": "Lugwan",
            "source": "December",
            "pronunciation": "loog-wahn",
            "hint": "12th month of the traditional Turkana calendar. (Barton 1921)",
            "example": "Lugwan — December (12th month of the traditional Turkana calendar. (Barton 1921))"
          },
          {
            "target": "Ekaru (pl. ngaro)",
            "source": "Year",
            "pronunciation": "eh-kah-roo",
            "hint": "Year or annual cycle. This year: 'Ekaru lo'; next year: 'Ekaru echi'; last year: 'Ekaru ye'. (Barton 1921)",
            "example": "Ekaru (pl. ngaro) — Year (Year or annual cycle. This year: 'Ekaru lo'; next year: 'Ekaru echi'; last year: 'Ekaru ye'. (Barton 1921))"
          },
          {
            "target": "Elap (pl. ngelapio)",
            "source": "Month / Moon",
            "pronunciation": "eh-lahp",
            "hint": "Lunar month or moon. (Barton 1921)",
            "example": "Elap (pl. ngelapio) — Month / Moon (Lunar month or moon. (Barton 1921))"
          },
          {
            "target": "Erwait (pl. ngurwa)",
            "source": "Day",
            "pronunciation": "ehr-wah-eet",
            "hint": "Daytime or daylight period. (Barton 1921)",
            "example": "Erwait (pl. ngurwa) — Day (Daytime or daylight period. (Barton 1921))"
          },
          {
            "target": "Akuari (pl. ngakuaretha)",
            "source": "Night",
            "pronunciation": "ah-kwah-ree",
            "hint": "Night-time darkness. (Barton 1921)",
            "example": "Akuari (pl. ngakuaretha) — Night (Night-time darkness. (Barton 1921))"
          },
          {
            "target": "Ataparach",
            "source": "Dawn / Early morning",
            "pronunciation": "ah-tah-pah-rahch",
            "hint": "First light of dawn and early morning. (Barton 1921)",
            "example": "Ataparach — Dawn / Early morning (First light of dawn and early morning. (Barton 1921))"
          },
          {
            "target": "Ethimakunyak / Taparach",
            "source": "Morning",
            "pronunciation": "eh-thee-mah-koon-yahk",
            "hint": "Morning hours before intense heat. (Barton 1921)",
            "example": "Ethimakunyak / Taparach — Morning (Morning hours before intense heat. (Barton 1921))"
          },
          {
            "target": "Naparan / Ewi akolon",
            "source": "Midday / Noon",
            "pronunciation": "nah-pah-rahn",
            "hint": "Midday when the sun is directly overhead. (Barton 1921)",
            "example": "Naparan / Ewi akolon — Midday / Noon (Midday when the sun is directly overhead. (Barton 1921))"
          },
          {
            "target": "Ebon / Ebong",
            "source": "Afternoon / Evening",
            "pronunciation": "eh-bohng",
            "hint": "Late afternoon approaching dusk. (Barton 1921)",
            "example": "Ebon / Ebong — Afternoon / Evening (Late afternoon approaching dusk. (Barton 1921))"
          },
          {
            "target": "Alomo akolon",
            "source": "Sunrise (6 a.m.)",
            "pronunciation": "ah-loh-moh ah-koh-lohn",
            "hint": "The sun appearing over the horizon at dawn. (Barton 1921)",
            "example": "Alomo akolon — Sunrise (6 a.m.) (The sun appearing over the horizon at dawn. (Barton 1921))"
          },
          {
            "target": "Achou akolon",
            "source": "Morning sun (7 a.m.)",
            "pronunciation": "ah-choh-oo ah-koh-lohn",
            "hint": "Morning sun ascending. (Barton 1921)",
            "example": "Achou akolon — Morning sun (7 a.m.) (Morning sun ascending. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Lorarrar\" mean in English?",
            "correctAnswer": "November",
            "options": [
              "December",
              "Year",
              "Month / Moon",
              "November"
            ],
            "hint": "11th month of the traditional Turkana calendar. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Lugwan\" mean in English?",
            "correctAnswer": "December",
            "options": [
              "Year",
              "Month / Moon",
              "December",
              "November"
            ],
            "hint": "12th month of the traditional Turkana calendar. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekaru (pl. ngaro)\" mean in English?",
            "correctAnswer": "Year",
            "options": [
              "Month / Moon",
              "Year",
              "November",
              "December"
            ],
            "hint": "Year or annual cycle. This year: 'Ekaru lo'; next year: 'Ekaru echi'; last year: 'Ekaru ye'. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Year\" in Turkana?",
            "correctAnswer": "Ekaru (pl. ngaro)",
            "options": [
              "Ekaru (pl. ngaro)",
              "Lorarrar",
              "Lugwan",
              "Elap (pl. ngelapio)"
            ],
            "hint": "eh-kah-roo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Month / Moon\" in Turkana?",
            "correctAnswer": "Elap (pl. ngelapio)",
            "options": [
              "Lorarrar",
              "Lugwan",
              "Ekaru (pl. ngaro)",
              "Elap (pl. ngelapio)"
            ],
            "hint": "eh-lahp"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Day\" in Turkana?",
            "correctAnswer": "Erwait (pl. ngurwa)",
            "options": [
              "Lugwan",
              "Ekaru (pl. ngaro)",
              "Erwait (pl. ngurwa)",
              "Lorarrar"
            ],
            "hint": "ehr-wah-eet"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Lorarrar: November, Lugwan: December, Ekaru (pl. ngaro): Year, Elap (pl. ngelapio): Month / Moon",
            "pairs": [
              {
                "left": "Lorarrar",
                "right": "November"
              },
              {
                "left": "Lugwan",
                "right": "December"
              },
              {
                "left": "Ekaru (pl. ngaro)",
                "right": "Year"
              },
              {
                "left": "Elap (pl. ngelapio)",
                "right": "Month / Moon"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"November\" in Turkana.",
            "correctAnswer": "Lorarrar",
            "options": [
              "Lorarrar",
              "Lugwan",
              "Ekaru (pl. ngaro)",
              "Elap (pl. ngelapio)"
            ],
            "hint": "loh-rah-rahr"
          }
        ]
      },
      {
        "id": "turkana-exp-calendar-seasons-3",
        "title": "Calendar & Seasons (Part 3)",
        "icon": "Calendar",
        "description": "Master Turkana calendar & seasons vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Calendar & Seasons, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ewi akolon' (Overhead sun (12 p.m.)), 'Athom akolon' (Mid-afternoon sun (2 p.m.)), 'Aloma akolon' (Sunset (6 p.m.)), 'Tete / Akolon itina' (Today).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ewi akolon",
            "source": "Overhead sun (12 p.m.)",
            "pronunciation": "eh-wee ah-koh-lohn",
            "hint": "Peak noon sun directly above. (Barton 1921)",
            "example": "Ewi akolon — Overhead sun (12 p.m.) (Peak noon sun directly above. (Barton 1921))"
          },
          {
            "target": "Athom akolon",
            "source": "Mid-afternoon sun (2 p.m.)",
            "pronunciation": "ah-thohm ah-koh-lohn",
            "hint": "Declining afternoon sun. (Barton 1921)",
            "example": "Athom akolon — Mid-afternoon sun (2 p.m.) (Declining afternoon sun. (Barton 1921))"
          },
          {
            "target": "Aloma akolon",
            "source": "Sunset (6 p.m.)",
            "pronunciation": "ah-loh-mah ah-koh-lohn",
            "hint": "The sun setting into twilight. (Barton 1921)",
            "example": "Aloma akolon — Sunset (6 p.m.) (The sun setting into twilight. (Barton 1921))"
          },
          {
            "target": "Tete / Akolon itina",
            "source": "Today",
            "pronunciation": "teh-teh",
            "hint": "The present day. (Barton 1921)",
            "example": "Tete / Akolon itina — Today (The present day. (Barton 1921))"
          },
          {
            "target": "Mui",
            "source": "Tomorrow",
            "pronunciation": "moo-ee",
            "hint": "The following day. Tomorrow morning: 'Mui ataparach'. (Barton 1921)",
            "example": "Mui — Tomorrow (The following day. Tomorrow morning: 'Mui ataparach'. (Barton 1921))"
          },
          {
            "target": "Mui echi akolon",
            "source": "Day after tomorrow",
            "pronunciation": "moo-ee eh-chee ah-koh-lohn",
            "hint": "Two days forward. (Barton 1921)",
            "example": "Mui echi akolon — Day after tomorrow (Two days forward. (Barton 1921))"
          },
          {
            "target": "Beyen / Ngon",
            "source": "Yesterday",
            "pronunciation": "beh-yehn / ngohn",
            "hint": "The previous day. (Barton 1921)",
            "example": "Beyen / Ngon — Yesterday (The previous day. (Barton 1921))"
          },
          {
            "target": "Ngon echi akolon",
            "source": "Day before yesterday",
            "pronunciation": "ngohn eh-chee ah-koh-lohn",
            "hint": "Two days ago. (Barton 1921)",
            "example": "Ngon echi akolon — Day before yesterday (Two days ago. (Barton 1921))"
          },
          {
            "target": "Tokona",
            "source": "Now",
            "pronunciation": "toh-koh-nah",
            "hint": "At the present moment. Instantly: 'Tokona-tokona'. (Barton 1921)",
            "example": "Tokona — Now (At the present moment. Instantly: 'Tokona-tokona'. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          },
          {
            "target": "Epolok ngikiliok lu.",
            "source": "These men are strong and great."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ewi akolon\" mean in English?",
            "correctAnswer": "Overhead sun (12 p.m.)",
            "options": [
              "Mid-afternoon sun (2 p.m.)",
              "Sunset (6 p.m.)",
              "Today",
              "Overhead sun (12 p.m.)"
            ],
            "hint": "Peak noon sun directly above. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Athom akolon\" mean in English?",
            "correctAnswer": "Mid-afternoon sun (2 p.m.)",
            "options": [
              "Sunset (6 p.m.)",
              "Today",
              "Mid-afternoon sun (2 p.m.)",
              "Overhead sun (12 p.m.)"
            ],
            "hint": "Declining afternoon sun. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aloma akolon\" mean in English?",
            "correctAnswer": "Sunset (6 p.m.)",
            "options": [
              "Today",
              "Sunset (6 p.m.)",
              "Overhead sun (12 p.m.)",
              "Mid-afternoon sun (2 p.m.)"
            ],
            "hint": "The sun setting into twilight. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sunset (6 p.m.)\" in Turkana?",
            "correctAnswer": "Aloma akolon",
            "options": [
              "Aloma akolon",
              "Ewi akolon",
              "Athom akolon",
              "Tete / Akolon itina"
            ],
            "hint": "ah-loh-mah ah-koh-lohn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Today\" in Turkana?",
            "correctAnswer": "Tete / Akolon itina",
            "options": [
              "Ewi akolon",
              "Athom akolon",
              "Aloma akolon",
              "Tete / Akolon itina"
            ],
            "hint": "teh-teh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tomorrow\" in Turkana?",
            "correctAnswer": "Mui",
            "options": [
              "Athom akolon",
              "Aloma akolon",
              "Mui",
              "Ewi akolon"
            ],
            "hint": "moo-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ewi akolon: Overhead sun (12 p.m.), Athom akolon: Mid-afternoon sun (2 p.m.), Aloma akolon: Sunset (6 p.m.), Tete / Akolon itina: Today",
            "pairs": [
              {
                "left": "Ewi akolon",
                "right": "Overhead sun (12 p.m.)"
              },
              {
                "left": "Athom akolon",
                "right": "Mid-afternoon sun (2 p.m.)"
              },
              {
                "left": "Aloma akolon",
                "right": "Sunset (6 p.m.)"
              },
              {
                "left": "Tete / Akolon itina",
                "right": "Today"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Overhead sun (12 p.m.)\" in Turkana.",
            "correctAnswer": "Ewi akolon",
            "options": [
              "Ewi akolon",
              "Athom akolon",
              "Aloma akolon",
              "Tete / Akolon itina"
            ],
            "hint": "eh-wee ah-koh-lohn"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-9-family",
    "title": "Unit 9: Family & People",
    "description": "Comprehensive Turkana curriculum for Family & People, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
    "icon": "Users",
    "skills": [
      {
        "id": "turkana-exp-family",
        "title": "Family & People (Part 1)",
        "icon": "Users",
        "description": "Master Turkana family & people vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Family & People, pay special attention to pronunciation and morphological prefixes/suffixes: 'Etunganan / Etonganan (pl. ngitunga)' (Person / Mankind), 'Ekili / E'kili (pl. ngiliok)' (Man / Male), 'Abero / A'bero (pl. ngabero)' (Woman / Female), 'Baba / Papa (pl. tababa / ngipapao)' (Father).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Etunganan / Etonganan (pl. ngitunga)",
            "source": "Person / Mankind",
            "pronunciation": "eh-toong-ah-nahn",
            "hint": "Human being or person. Plural: Ngitunga (people). (Barton 1921)",
            "example": "Etunganan / Etonganan (pl. ngitunga) — Person / Mankind (Human being or person. Plural: Ngitunga (people). (Barton 1921))"
          },
          {
            "target": "Ekili / E'kili (pl. ngiliok)",
            "source": "Man / Male",
            "pronunciation": "eh-kee-lee",
            "hint": "Adult male or warrior. Plural: Ngiliok. (Barton 1921)",
            "example": "Ekili / E'kili (pl. ngiliok) — Man / Male (Adult male or warrior. Plural: Ngiliok. (Barton 1921))"
          },
          {
            "target": "Abero / A'bero (pl. ngabero)",
            "source": "Woman / Female",
            "pronunciation": "ah-beh-roh",
            "hint": "Adult female or woman. Plural: Ngabero. (Barton 1921)",
            "example": "Abero / A'bero (pl. ngabero) — Woman / Female (Adult female or woman. Plural: Ngabero. (Barton 1921))"
          },
          {
            "target": "Baba / Papa (pl. tababa / ngipapao)",
            "source": "Father",
            "pronunciation": "bah-bah / pah-pah",
            "hint": "Father or paternal head. (Barton 1921)",
            "example": "Baba / Papa (pl. tababa / ngipapao) — Father (Father or paternal head. (Barton 1921))"
          },
          {
            "target": "Toto / Iyoo (pl. tatoto / ngiyootin)",
            "source": "Mother",
            "pronunciation": "toh-toh",
            "hint": "Mother. (Barton 1921)",
            "example": "Toto / Iyoo (pl. tatoto / ngiyootin) — Mother (Mother. (Barton 1921))"
          },
          {
            "target": "Ikoku / Ikoko (pl. ngidwe / ngedwi)",
            "source": "Child",
            "pronunciation": "ee-koh-koo",
            "hint": "Child or baby offspring. (Barton 1921)",
            "example": "Ikoku / Ikoko (pl. ngidwe / ngedwi) — Child (Child or baby offspring. (Barton 1921))"
          },
          {
            "target": "Edit / Lokoku (pl. ngedithok / ngidwe)",
            "source": "Son / Young boy",
            "pronunciation": "eh-deet",
            "hint": "Male child or youth. (Barton 1921)",
            "example": "Edit / Lokoku (pl. ngedithok / ngidwe) — Son / Young boy (Male child or youth. (Barton 1921))"
          },
          {
            "target": "Apethe / Apese (pl. ngapethur / ngapesur)",
            "source": "Daughter / Girl",
            "pronunciation": "ah-peh-theh",
            "hint": "Girl or unmarried daughter. (Barton 1921)",
            "example": "Apethe / Apese (pl. ngapethur / ngapesur) — Daughter / Girl (Girl or unmarried daughter. (Barton 1921))"
          },
          {
            "target": "Lokadokan / Ekaato (pl. ngalokadokon / ngikaatoka)",
            "source": "Brother",
            "pronunciation": "loh-kah-doh-kahn",
            "hint": "Brother or male kin. (Barton 1921)",
            "example": "Lokadokan / Ekaato (pl. ngalokadokon / ngikaatoka) — Brother (Brother or male kin. (Barton 1921))"
          },
          {
            "target": "Lokadokan / Nakaato (pl. ngaitotui / ngakaatoka)",
            "source": "Sister",
            "pronunciation": "loh-kah-doh-kahn",
            "hint": "Sister or female kin. (Barton 1921)",
            "example": "Lokadokan / Nakaato (pl. ngaitotui / ngakaatoka) — Sister (Sister or female kin. (Barton 1921))"
          },
          {
            "target": "Lokiliakan / Ekile (pl. ngiliokoka / ngikilyok)",
            "source": "Husband",
            "pronunciation": "loh-kee-lee-ah-kahn",
            "hint": "Married partner / husband (lit. 'my man'). (Barton 1921)",
            "example": "Lokiliakan / Ekile (pl. ngiliokoka / ngikilyok) — Husband (Married partner / husband (lit. 'my man'). (Barton 1921))"
          },
          {
            "target": "Abero / Aberu (pl. ngabero / ngaberu)",
            "source": "Wife",
            "pronunciation": "ah-beh-roh",
            "hint": "Married woman / wife. (Barton 1921)",
            "example": "Abero / Aberu (pl. ngabero / ngaberu) — Wife (Married woman / wife. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Etunganan / Etonganan (pl. ngitunga)\" mean in English?",
            "correctAnswer": "Person / Mankind",
            "options": [
              "Man / Male",
              "Woman / Female",
              "Father",
              "Person / Mankind"
            ],
            "hint": "Human being or person. Plural: Ngitunga (people). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekili / E'kili (pl. ngiliok)\" mean in English?",
            "correctAnswer": "Man / Male",
            "options": [
              "Woman / Female",
              "Father",
              "Man / Male",
              "Person / Mankind"
            ],
            "hint": "Adult male or warrior. Plural: Ngiliok. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Abero / A'bero (pl. ngabero)\" mean in English?",
            "correctAnswer": "Woman / Female",
            "options": [
              "Father",
              "Woman / Female",
              "Person / Mankind",
              "Man / Male"
            ],
            "hint": "Adult female or woman. Plural: Ngabero. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Woman / Female\" in Turkana?",
            "correctAnswer": "Abero / A'bero (pl. ngabero)",
            "options": [
              "Abero / A'bero (pl. ngabero)",
              "Etunganan / Etonganan (pl. ngitunga)",
              "Ekili / E'kili (pl. ngiliok)",
              "Baba / Papa (pl. tababa / ngipapao)"
            ],
            "hint": "ah-beh-roh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Father\" in Turkana?",
            "correctAnswer": "Baba / Papa (pl. tababa / ngipapao)",
            "options": [
              "Etunganan / Etonganan (pl. ngitunga)",
              "Ekili / E'kili (pl. ngiliok)",
              "Abero / A'bero (pl. ngabero)",
              "Baba / Papa (pl. tababa / ngipapao)"
            ],
            "hint": "bah-bah / pah-pah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mother\" in Turkana?",
            "correctAnswer": "Toto / Iyoo (pl. tatoto / ngiyootin)",
            "options": [
              "Ekili / E'kili (pl. ngiliok)",
              "Abero / A'bero (pl. ngabero)",
              "Toto / Iyoo (pl. tatoto / ngiyootin)",
              "Etunganan / Etonganan (pl. ngitunga)"
            ],
            "hint": "toh-toh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Etunganan / Etonganan (pl. ngitunga): Person / Mankind, Ekili / E'kili (pl. ngiliok): Man / Male, Abero / A'bero (pl. ngabero): Woman / Female, Baba / Papa (pl. tababa / ngipapao): Father",
            "pairs": [
              {
                "left": "Etunganan / Etonganan (pl. ngitunga)",
                "right": "Person / Mankind"
              },
              {
                "left": "Ekili / E'kili (pl. ngiliok)",
                "right": "Man / Male"
              },
              {
                "left": "Abero / A'bero (pl. ngabero)",
                "right": "Woman / Female"
              },
              {
                "left": "Baba / Papa (pl. tababa / ngipapao)",
                "right": "Father"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Person / Mankind\" in Turkana.",
            "correctAnswer": "Etunganan / Etonganan (pl. ngitunga)",
            "options": [
              "Etunganan / Etonganan (pl. ngitunga)",
              "Ekili / E'kili (pl. ngiliok)",
              "Abero / A'bero (pl. ngabero)",
              "Baba / Papa (pl. tababa / ngipapao)"
            ],
            "hint": "eh-toong-ah-nahn"
          }
        ]
      },
      {
        "id": "turkana-exp-family-2",
        "title": "Family & People (Part 2)",
        "icon": "Users",
        "description": "Master Turkana family & people vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Family & People, pay special attention to pronunciation and morphological prefixes/suffixes: 'Apa (pl. ngapapai)' (Grandfather / Male ancestor), 'Tata (pl. ngatubai)' (Grandmother / Female ancestor), 'Eya (pl. ngaiyayai)' (Aunt), 'Baba / Mama (pl. ngebabai)' (Uncle).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Apa (pl. ngapapai)",
            "source": "Grandfather / Male ancestor",
            "pronunciation": "ah-pah",
            "hint": "Paternal or maternal grandfather / ancestor. (Barton 1921)",
            "example": "Apa (pl. ngapapai) — Grandfather / Male ancestor (Paternal or maternal grandfather / ancestor. (Barton 1921))"
          },
          {
            "target": "Tata (pl. ngatubai)",
            "source": "Grandmother / Female ancestor",
            "pronunciation": "tah-tah",
            "hint": "Paternal or maternal grandmother / ancestress. (Barton 1921)",
            "example": "Tata (pl. ngatubai) — Grandmother / Female ancestor (Paternal or maternal grandmother / ancestress. (Barton 1921))"
          },
          {
            "target": "Eya (pl. ngaiyayai)",
            "source": "Aunt",
            "pronunciation": "eh-yah",
            "hint": "Maternal or paternal aunt. (Barton 1921)",
            "example": "Eya (pl. ngaiyayai) — Aunt (Maternal or paternal aunt. (Barton 1921))"
          },
          {
            "target": "Baba / Mama (pl. ngebabai)",
            "source": "Uncle",
            "pronunciation": "bah-bah",
            "hint": "Paternal or maternal uncle. (Barton 1921)",
            "example": "Baba / Mama (pl. ngebabai) — Uncle (Paternal or maternal uncle. (Barton 1921))"
          },
          {
            "target": "Akamuranika (pl. ngamurak)",
            "source": "Father-in-law",
            "pronunciation": "ah-kah-moo-rah-nee-kah",
            "hint": "Father-in-law. (Barton 1921)",
            "example": "Akamuranika (pl. ngamurak) — Father-in-law (Father-in-law. (Barton 1921))"
          },
          {
            "target": "Akamuran (pl. ngamurak)",
            "source": "In-law (Brother/Sister-in-law)",
            "pronunciation": "ah-kah-moo-rahn",
            "hint": "Affinal relative through marriage. (Barton 1921)",
            "example": "Akamuran (pl. ngamurak) — In-law (Brother/Sister-in-law) (Affinal relative through marriage. (Barton 1921))"
          },
          {
            "target": "Ekasiko / Akasikot (pl. ngasikot / ngikasiko)",
            "source": "Old man / Elder",
            "pronunciation": "eh-kah-see-koh",
            "hint": "Respected elder in traditional age-set hierarchy. (Barton 1921)",
            "example": "Ekasiko / Akasikot (pl. ngasikot / ngikasiko) — Old man / Elder (Respected elder in traditional age-set hierarchy. (Barton 1921))"
          },
          {
            "target": "Akimat (pl. ngakimat)",
            "source": "Old woman",
            "pronunciation": "ah-kee-maht",
            "hint": "Elderly respected woman. (Barton 1921)",
            "example": "Akimat (pl. ngakimat) — Old woman (Elderly respected woman. (Barton 1921))"
          },
          {
            "target": "Akarachonait / Ekasurani (pl. ngarachona / ngikasurak)",
            "source": "Young warrior / Youth",
            "pronunciation": "ah-kah-rah-choh-nah-eet",
            "hint": "Initiated young pastoral warrior of the age-grade. (Barton 1921)",
            "example": "Akarachonait / Ekasurani (pl. ngarachona / ngikasurak) — Young warrior / Youth (Initiated young pastoral warrior of the age-grade. (Barton 1921))"
          },
          {
            "target": "Epay / Ekone (pl. ngepaylon / ngikonei)",
            "source": "Friend",
            "pronunciation": "eh-pah-ee",
            "hint": "Close friend or peer. (Barton 1921)",
            "example": "Epay / Ekone (pl. ngepaylon / ngikonei) — Friend (Close friend or peer. (Barton 1921))"
          },
          {
            "target": "Egayokon / Ekeyokon (pl. ngeyoko / ngikeyoko)",
            "source": "Herdsman / Shepherd",
            "pronunciation": "eh-gah-yoh-kohn",
            "hint": "Pastoralist herding cattle or small stock. (Barton 1921)",
            "example": "Egayokon / Ekeyokon (pl. ngeyoko / ngikeyoko) — Herdsman / Shepherd (Pastoralist herding cattle or small stock. (Barton 1921))"
          },
          {
            "target": "Emuron (pl. ngemurok)",
            "source": "Diviner / Traditional doctor",
            "pronunciation": "eh-moo-rohn",
            "hint": "Prophet, ritual diviner, and traditional physician. (Barton 1921)",
            "example": "Emuron (pl. ngemurok) — Diviner / Traditional doctor (Prophet, ritual diviner, and traditional physician. (Barton 1921))"
          },
          {
            "target": "Eirkatungan / Erotoit (pl. ngatukok / ngerotoitin)",
            "source": "Chief / Leader",
            "pronunciation": "eh-eer-kah-toong-ahn",
            "hint": "Community leader, raid scout, or prominent elder. (Barton 1921)",
            "example": "Eirkatungan / Erotoit (pl. ngatukok / ngerotoitin) — Chief / Leader (Community leader, raid scout, or prominent elder. (Barton 1921))"
          },
          {
            "target": "Ebayunan / Epeyonon (pl. ngebayok / ngipeyok)",
            "source": "Guest / Stranger",
            "pronunciation": "eh-bah-yoo-nahn",
            "hint": "Traveller or visiting guest hosted at the kraal. (Barton 1921)",
            "example": "Ebayunan / Epeyonon (pl. ngebayok / ngipeyok) — Guest / Stranger (Traveller or visiting guest hosted at the kraal. (Barton 1921))"
          },
          {
            "target": "Emoit (pl. ngemoi)",
            "source": "Enemy",
            "pronunciation": "eh-moh-eet",
            "hint": "Adversary or hostile tribal raider. (Barton 1921)",
            "example": "Emoit (pl. ngemoi) — Enemy (Adversary or hostile tribal raider. (Barton 1921))"
          },
          {
            "target": "Epolisit / Ekerimon (pl. ngipolisi / ngerimo)",
            "source": "Police / Guard",
            "pronunciation": "eh-poh-lee-seet",
            "hint": "Security guard or police officer. (Barton 1921)",
            "example": "Epolisit / Ekerimon (pl. ngipolisi / ngerimo) — Police / Guard (Security guard or police officer. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Apa (pl. ngapapai)\" mean in English?",
            "correctAnswer": "Grandfather / Male ancestor",
            "options": [
              "Grandmother / Female ancestor",
              "Aunt",
              "Uncle",
              "Grandfather / Male ancestor"
            ],
            "hint": "Paternal or maternal grandfather / ancestor. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Tata (pl. ngatubai)\" mean in English?",
            "correctAnswer": "Grandmother / Female ancestor",
            "options": [
              "Aunt",
              "Uncle",
              "Grandmother / Female ancestor",
              "Grandfather / Male ancestor"
            ],
            "hint": "Paternal or maternal grandmother / ancestress. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eya (pl. ngaiyayai)\" mean in English?",
            "correctAnswer": "Aunt",
            "options": [
              "Uncle",
              "Aunt",
              "Grandfather / Male ancestor",
              "Grandmother / Female ancestor"
            ],
            "hint": "Maternal or paternal aunt. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Aunt\" in Turkana?",
            "correctAnswer": "Eya (pl. ngaiyayai)",
            "options": [
              "Eya (pl. ngaiyayai)",
              "Apa (pl. ngapapai)",
              "Tata (pl. ngatubai)",
              "Baba / Mama (pl. ngebabai)"
            ],
            "hint": "eh-yah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Uncle\" in Turkana?",
            "correctAnswer": "Baba / Mama (pl. ngebabai)",
            "options": [
              "Apa (pl. ngapapai)",
              "Tata (pl. ngatubai)",
              "Eya (pl. ngaiyayai)",
              "Baba / Mama (pl. ngebabai)"
            ],
            "hint": "bah-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Father-in-law\" in Turkana?",
            "correctAnswer": "Akamuranika (pl. ngamurak)",
            "options": [
              "Tata (pl. ngatubai)",
              "Eya (pl. ngaiyayai)",
              "Akamuranika (pl. ngamurak)",
              "Apa (pl. ngapapai)"
            ],
            "hint": "ah-kah-moo-rah-nee-kah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Apa (pl. ngapapai): Grandfather / Male ancestor, Tata (pl. ngatubai): Grandmother / Female ancestor, Eya (pl. ngaiyayai): Aunt, Baba / Mama (pl. ngebabai): Uncle",
            "pairs": [
              {
                "left": "Apa (pl. ngapapai)",
                "right": "Grandfather / Male ancestor"
              },
              {
                "left": "Tata (pl. ngatubai)",
                "right": "Grandmother / Female ancestor"
              },
              {
                "left": "Eya (pl. ngaiyayai)",
                "right": "Aunt"
              },
              {
                "left": "Baba / Mama (pl. ngebabai)",
                "right": "Uncle"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Grandfather / Male ancestor\" in Turkana.",
            "correctAnswer": "Apa (pl. ngapapai)",
            "options": [
              "Apa (pl. ngapapai)",
              "Tata (pl. ngatubai)",
              "Eya (pl. ngaiyayai)",
              "Baba / Mama (pl. ngebabai)"
            ],
            "hint": "ah-pah"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-10-animals",
    "title": "Unit 10: Animals & Wildlife",
    "description": "Comprehensive Turkana curriculum for Animals & Wildlife, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
    "icon": "Compass",
    "skills": [
      {
        "id": "turkana-exp-animals",
        "title": "Animals & Wildlife (Part 1)",
        "icon": "Compass",
        "description": "Master Turkana animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ng'atuk / Ngatuk (sing. Ate / Atāka)' (Cattle (Herds)), 'Atāka / Aite (pl. ngatak / ngatuk)' (Cow), 'Emanik (pl. ngemaniko)' (Bull), 'Emon (pl. ngemongin)' (Bullock / Ox).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ng'atuk / Ngatuk (sing. Ate / Atāka)",
            "source": "Cattle (Herds)",
            "pronunciation": "ngah-took",
            "hint": "Plural collective for cattle herds, central to Turkana identity and sustenance. (Barton 1921)",
            "example": "Ng'atuk / Ngatuk (sing. Ate / Atāka) — Cattle (Herds) (Plural collective for cattle herds, central to Turkana identity and sustenance. (Barton 1921))"
          },
          {
            "target": "Atāka / Aite (pl. ngatak / ngatuk)",
            "source": "Cow",
            "pronunciation": "ah-tah-kah",
            "hint": "Adult cow providing milk and blood. (Barton 1921)",
            "example": "Atāka / Aite (pl. ngatak / ngatuk) — Cow (Adult cow providing milk and blood. (Barton 1921))"
          },
          {
            "target": "Emanik (pl. ngemaniko)",
            "source": "Bull",
            "pronunciation": "eh-mah-neek",
            "hint": "Breeding herd sire bull. (Barton 1921)",
            "example": "Emanik (pl. ngemaniko) — Bull (Breeding herd sire bull. (Barton 1921))"
          },
          {
            "target": "Emon (pl. ngemongin)",
            "source": "Bullock / Ox",
            "pronunciation": "eh-mohn",
            "hint": "Castrated ox; central to ceremonial display, bell-wearing, and praise poetry. (Barton 1921)",
            "example": "Emon (pl. ngemongin) — Bullock / Ox (Castrated ox; central to ceremonial display, bell-wearing, and praise poetry. (Barton 1921))"
          },
          {
            "target": "Atou / Ataok (pl. ngatak / ngataokin)",
            "source": "Heifer",
            "pronunciation": "ah-toh-oo",
            "hint": "Young female cow before first calf. (Barton 1921)",
            "example": "Atou / Ataok (pl. ngatak / ngataokin) — Heifer (Young female cow before first calf. (Barton 1921))"
          },
          {
            "target": "Manangit (pl. ngemanan)",
            "source": "Small calf",
            "pronunciation": "mah-nahn-geet",
            "hint": "Very young suckling calf. (Barton 1921)",
            "example": "Manangit (pl. ngemanan) — Small calf (Very young suckling calf. (Barton 1921))"
          },
          {
            "target": "Etak (pl. ngetak)",
            "source": "Large calf",
            "pronunciation": "eh-tahk",
            "hint": "Weaned growing calf. (Barton 1921)",
            "example": "Etak (pl. ngetak) — Large calf (Weaned growing calf. (Barton 1921))"
          },
          {
            "target": "Akine / Akini (pl. ngakinei / ngakini)",
            "source": "Goat",
            "pronunciation": "ah-kee-neh",
            "hint": "Domestic goat. Plural: Ngakinei. (Barton 1921)",
            "example": "Akine / Akini (pl. ngakinei / ngakini) — Goat (Domestic goat. Plural: Ngakinei. (Barton 1921))"
          },
          {
            "target": "Akorai (pl. ngora)",
            "source": "He-goat",
            "pronunciation": "ah-koh-rah-ee",
            "hint": "Male billy goat. (Barton 1921)",
            "example": "Akorai (pl. ngora) — He-goat (Male billy goat. (Barton 1921))"
          },
          {
            "target": "Ekali (pl. ngali)",
            "source": "Kid (young goat)",
            "pronunciation": "eh-kah-lee",
            "hint": "Young goat or lamb. (Barton 1921)",
            "example": "Ekali (pl. ngali) — Kid (young goat) (Young goat or lamb. (Barton 1921))"
          },
          {
            "target": "Amethek / Amesek (pl. ngamethekin / ngamesekin)",
            "source": "Sheep",
            "pronunciation": "ah-meh-thehk",
            "hint": "Indigenous fat-tailed sheep. (Barton 1921)",
            "example": "Amethek / Amesek (pl. ngamethekin / ngamesekin) — Sheep (Indigenous fat-tailed sheep. (Barton 1921))"
          },
          {
            "target": "Egetipan (pl. ngetipaka)",
            "source": "Ram",
            "pronunciation": "eh-geh-tee-pahn",
            "hint": "Male breeding ram. (Barton 1921)",
            "example": "Egetipan (pl. ngetipaka) — Ram (Male breeding ram. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ng'atuk / Ngatuk (sing. Ate / Atāka)\" mean in English?",
            "correctAnswer": "Cattle (Herds)",
            "options": [
              "Cow",
              "Bull",
              "Bullock / Ox",
              "Cattle (Herds)"
            ],
            "hint": "Plural collective for cattle herds, central to Turkana identity and sustenance. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atāka / Aite (pl. ngatak / ngatuk)\" mean in English?",
            "correctAnswer": "Cow",
            "options": [
              "Bull",
              "Bullock / Ox",
              "Cow",
              "Cattle (Herds)"
            ],
            "hint": "Adult cow providing milk and blood. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emanik (pl. ngemaniko)\" mean in English?",
            "correctAnswer": "Bull",
            "options": [
              "Bullock / Ox",
              "Bull",
              "Cattle (Herds)",
              "Cow"
            ],
            "hint": "Breeding herd sire bull. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bull\" in Turkana?",
            "correctAnswer": "Emanik (pl. ngemaniko)",
            "options": [
              "Emanik (pl. ngemaniko)",
              "Ng'atuk / Ngatuk (sing. Ate / Atāka)",
              "Atāka / Aite (pl. ngatak / ngatuk)",
              "Emon (pl. ngemongin)"
            ],
            "hint": "eh-mah-neek"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bullock / Ox\" in Turkana?",
            "correctAnswer": "Emon (pl. ngemongin)",
            "options": [
              "Ng'atuk / Ngatuk (sing. Ate / Atāka)",
              "Atāka / Aite (pl. ngatak / ngatuk)",
              "Emanik (pl. ngemaniko)",
              "Emon (pl. ngemongin)"
            ],
            "hint": "eh-mohn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Heifer\" in Turkana?",
            "correctAnswer": "Atou / Ataok (pl. ngatak / ngataokin)",
            "options": [
              "Atāka / Aite (pl. ngatak / ngatuk)",
              "Emanik (pl. ngemaniko)",
              "Atou / Ataok (pl. ngatak / ngataokin)",
              "Ng'atuk / Ngatuk (sing. Ate / Atāka)"
            ],
            "hint": "ah-toh-oo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ng'atuk / Ngatuk (sing. Ate / Atāka): Cattle (Herds), Atāka / Aite (pl. ngatak / ngatuk): Cow, Emanik (pl. ngemaniko): Bull, Emon (pl. ngemongin): Bullock / Ox",
            "pairs": [
              {
                "left": "Ng'atuk / Ngatuk (sing. Ate / Atāka)",
                "right": "Cattle (Herds)"
              },
              {
                "left": "Atāka / Aite (pl. ngatak / ngatuk)",
                "right": "Cow"
              },
              {
                "left": "Emanik (pl. ngemaniko)",
                "right": "Bull"
              },
              {
                "left": "Emon (pl. ngemongin)",
                "right": "Bullock / Ox"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Cattle (Herds)\" in Turkana.",
            "correctAnswer": "Ng'atuk / Ngatuk (sing. Ate / Atāka)",
            "options": [
              "Ng'atuk / Ngatuk (sing. Ate / Atāka)",
              "Atāka / Aite (pl. ngatak / ngatuk)",
              "Emanik (pl. ngemaniko)",
              "Emon (pl. ngemongin)"
            ],
            "hint": "ngah-took"
          }
        ]
      },
      {
        "id": "turkana-exp-animals-2",
        "title": "Animals & Wildlife (Part 2)",
        "icon": "Compass",
        "description": "Master Turkana animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Esikirya / E'sikiriya (pl. ngisikirya)' (Donkey), 'Akāl / Ekaal (pl. ngāl / ngikaala)' (Camel), 'Etom / E'tome (pl. ngetom / ngitomei)' (Elephant), 'Angatuin / Engatun (pl. ngatuino / ngingatunyo)' (Lion).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Esikirya / E'sikiriya (pl. ngisikirya)",
            "source": "Donkey",
            "pronunciation": "eh-see-kee-ryah",
            "hint": "Pack donkey, indispensable for transporting household goods on migration. (Barton 1921)",
            "example": "Esikirya / E'sikiriya (pl. ngisikirya) — Donkey (Pack donkey, indispensable for transporting household goods on migration. (Barton 1921))"
          },
          {
            "target": "Akāl / Ekaal (pl. ngāl / ngikaala)",
            "source": "Camel",
            "pronunciation": "ah-kahl",
            "hint": "Dromedary camel, vital milk source during severe drought. (Barton 1921)",
            "example": "Akāl / Ekaal (pl. ngāl / ngikaala) — Camel (Dromedary camel, vital milk source during severe drought. (Barton 1921))"
          },
          {
            "target": "Etom / E'tome (pl. ngetom / ngitomei)",
            "source": "Elephant",
            "pronunciation": "eh-tohm",
            "hint": "African savanna elephant. (Barton 1921)",
            "example": "Etom / E'tome (pl. ngetom / ngitomei) — Elephant (African savanna elephant. (Barton 1921))"
          },
          {
            "target": "Angatuin / Engatun (pl. ngatuino / ngingatunyo)",
            "source": "Lion",
            "pronunciation": "ahn-gah-too-een",
            "hint": "Apex predator lion. (Barton 1921)",
            "example": "Angatuin / Engatun (pl. ngatuino / ngingatunyo) — Lion (Apex predator lion. (Barton 1921))"
          },
          {
            "target": "Eris (pl. ngerise / ngirisa)",
            "source": "Leopard",
            "pronunciation": "eh-rees",
            "hint": "Leopard. (Barton 1921)",
            "example": "Eris (pl. ngerise / ngirisa) — Leopard (Leopard. (Barton 1921))"
          },
          {
            "target": "Arrara (pl. ngarrarai)",
            "source": "Cheetah",
            "pronunciation": "ah-rah-rah",
            "hint": "Cheetah. (Barton 1921)",
            "example": "Arrara (pl. ngarrarai) — Cheetah (Cheetah. (Barton 1921))"
          },
          {
            "target": "Ebu / Ebuu (pl. ngebui / ngibuwin)",
            "source": "Hyena",
            "pronunciation": "eh-boo",
            "hint": "Spotted hyena. (Barton 1921)",
            "example": "Ebu / Ebuu (pl. ngebui / ngibuwin) — Hyena (Spotted hyena. (Barton 1921))"
          },
          {
            "target": "Epiot (pl. ngepioto)",
            "source": "Wild dog",
            "pronunciation": "eh-pee-oht",
            "hint": "African wild dog / painted dog. (Barton 1921)",
            "example": "Epiot (pl. ngepioto) — Wild dog (African wild dog / painted dog. (Barton 1921))"
          },
          {
            "target": "Ekui (pl. ngekui)",
            "source": "Jackal",
            "pronunciation": "eh-koo-ee",
            "hint": "Jackal. (Barton 1921)",
            "example": "Ekui (pl. ngekui) — Jackal (Jackal. (Barton 1921))"
          },
          {
            "target": "Yekori / Ekori (pl. ngikorio)",
            "source": "Giraffe",
            "pronunciation": "yeh-koh-ree",
            "hint": "Reticulated giraffe. (Barton 1921)",
            "example": "Yekori / Ekori (pl. ngikorio) — Giraffe (Reticulated giraffe. (Barton 1921))"
          },
          {
            "target": "Ekothuan / Ekosowan (pl. ngekothua / ngikosowani)",
            "source": "Buffalo",
            "pronunciation": "eh-koh-thoo-ahn",
            "hint": "Cape buffalo whose hide was prized for heavy shields. (Barton 1921)",
            "example": "Ekothuan / Ekosowan (pl. ngekothua / ngikosowani) — Buffalo (Cape buffalo whose hide was prized for heavy shields. (Barton 1921))"
          },
          {
            "target": "Amothi / Emosik (pl. ngamothingok / ngimosiko)",
            "source": "Rhinoceros",
            "pronunciation": "ah-moh-thee",
            "hint": "Black rhinoceros. (Barton 1921)",
            "example": "Amothi / Emosik (pl. ngamothingok / ngimosiko) — Rhinoceros (Black rhinoceros. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Esikirya / E'sikiriya (pl. ngisikirya)\" mean in English?",
            "correctAnswer": "Donkey",
            "options": [
              "Camel",
              "Elephant",
              "Lion",
              "Donkey"
            ],
            "hint": "Pack donkey, indispensable for transporting household goods on migration. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akāl / Ekaal (pl. ngāl / ngikaala)\" mean in English?",
            "correctAnswer": "Camel",
            "options": [
              "Elephant",
              "Lion",
              "Camel",
              "Donkey"
            ],
            "hint": "Dromedary camel, vital milk source during severe drought. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Etom / E'tome (pl. ngetom / ngitomei)\" mean in English?",
            "correctAnswer": "Elephant",
            "options": [
              "Lion",
              "Elephant",
              "Donkey",
              "Camel"
            ],
            "hint": "African savanna elephant. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Elephant\" in Turkana?",
            "correctAnswer": "Etom / E'tome (pl. ngetom / ngitomei)",
            "options": [
              "Etom / E'tome (pl. ngetom / ngitomei)",
              "Esikirya / E'sikiriya (pl. ngisikirya)",
              "Akāl / Ekaal (pl. ngāl / ngikaala)",
              "Angatuin / Engatun (pl. ngatuino / ngingatunyo)"
            ],
            "hint": "eh-tohm"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lion\" in Turkana?",
            "correctAnswer": "Angatuin / Engatun (pl. ngatuino / ngingatunyo)",
            "options": [
              "Esikirya / E'sikiriya (pl. ngisikirya)",
              "Akāl / Ekaal (pl. ngāl / ngikaala)",
              "Etom / E'tome (pl. ngetom / ngitomei)",
              "Angatuin / Engatun (pl. ngatuino / ngingatunyo)"
            ],
            "hint": "ahn-gah-too-een"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leopard\" in Turkana?",
            "correctAnswer": "Eris (pl. ngerise / ngirisa)",
            "options": [
              "Akāl / Ekaal (pl. ngāl / ngikaala)",
              "Etom / E'tome (pl. ngetom / ngitomei)",
              "Eris (pl. ngerise / ngirisa)",
              "Esikirya / E'sikiriya (pl. ngisikirya)"
            ],
            "hint": "eh-rees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Esikirya / E'sikiriya (pl. ngisikirya): Donkey, Akāl / Ekaal (pl. ngāl / ngikaala): Camel, Etom / E'tome (pl. ngetom / ngitomei): Elephant, Angatuin / Engatun (pl. ngatuino / ngingatunyo): Lion",
            "pairs": [
              {
                "left": "Esikirya / E'sikiriya (pl. ngisikirya)",
                "right": "Donkey"
              },
              {
                "left": "Akāl / Ekaal (pl. ngāl / ngikaala)",
                "right": "Camel"
              },
              {
                "left": "Etom / E'tome (pl. ngetom / ngitomei)",
                "right": "Elephant"
              },
              {
                "left": "Angatuin / Engatun (pl. ngatuino / ngingatunyo)",
                "right": "Lion"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Donkey\" in Turkana.",
            "correctAnswer": "Esikirya / E'sikiriya (pl. ngisikirya)",
            "options": [
              "Esikirya / E'sikiriya (pl. ngisikirya)",
              "Akāl / Ekaal (pl. ngāl / ngikaala)",
              "Etom / E'tome (pl. ngetom / ngitomei)",
              "Angatuin / Engatun (pl. ngatuino / ngingatunyo)"
            ],
            "hint": "eh-see-kee-ryah"
          }
        ]
      },
      {
        "id": "turkana-exp-animals-3",
        "title": "Animals & Wildlife (Part 3)",
        "icon": "Compass",
        "description": "Master Turkana animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Epir (pl. ngipirin)' (Hippopotamus), 'Etugo / Etuko (pl. ngetugoi / ngitukoi)' (Zebra), 'Uwabet (pl. nguawabeto)' (Eland), 'Eder (pl. ngederin)' (Oryx).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Epir (pl. ngipirin)",
            "source": "Hippopotamus",
            "pronunciation": "eh-peer",
            "hint": "Hippopotamus of Lake Turkana. (Barton 1921)",
            "example": "Epir (pl. ngipirin) — Hippopotamus (Hippopotamus of Lake Turkana. (Barton 1921))"
          },
          {
            "target": "Etugo / Etuko (pl. ngetugoi / ngitukoi)",
            "source": "Zebra",
            "pronunciation": "eh-too-goh",
            "hint": "Plains zebra. (Barton 1921)",
            "example": "Etugo / Etuko (pl. ngetugoi / ngitukoi) — Zebra (Plains zebra. (Barton 1921))"
          },
          {
            "target": "Uwabet (pl. nguawabeto)",
            "source": "Eland",
            "pronunciation": "oo-wah-beht",
            "hint": "Giant eland antelope. (Barton 1921)",
            "example": "Uwabet (pl. nguawabeto) — Eland (Giant eland antelope. (Barton 1921))"
          },
          {
            "target": "Eder (pl. ngederin)",
            "source": "Oryx",
            "pronunciation": "eh-dehr",
            "hint": "Beisa oryx; horns used for tobacco containers and horns. (Barton 1921)",
            "example": "Eder (pl. ngederin) — Oryx (Beisa oryx; horns used for tobacco containers and horns. (Barton 1921))"
          },
          {
            "target": "Emakak (pl. ngemakaka)",
            "source": "Greater Kudu",
            "pronunciation": "eh-mah-kahk",
            "hint": "Greater kudu. (Barton 1921)",
            "example": "Emakak (pl. ngemakaka) — Greater Kudu (Greater kudu. (Barton 1921))"
          },
          {
            "target": "Asarich (pl. ngasarich)",
            "source": "Lesser Kudu",
            "pronunciation": "ah-sah-reech",
            "hint": "Lesser kudu. (Barton 1921)",
            "example": "Asarich (pl. ngasarich) — Lesser Kudu (Lesser kudu. (Barton 1921))"
          },
          {
            "target": "Akoloba / E'koloba (pl. ngalobai)",
            "source": "Impala",
            "pronunciation": "ah-koh-loh-bah",
            "hint": "Impala antelope. Buck: 'Ekoloba-emanik'; doe: 'Ekoloba-abero'. (Barton 1921)",
            "example": "Akoloba / E'koloba (pl. ngalobai) — Impala (Impala antelope. Buck: 'Ekoloba-emanik'; doe: 'Ekoloba-abero'. (Barton 1921))"
          },
          {
            "target": "Ethuro (pl. ngetheroi)",
            "source": "Dik-dik",
            "pronunciation": "eh-thoo-roh",
            "hint": "Kirk's dik-dik dwarf antelope. (Barton 1921)",
            "example": "Ethuro (pl. ngetheroi) — Dik-dik (Kirk's dik-dik dwarf antelope. (Barton 1921))"
          },
          {
            "target": "Akokorait (pl. ngokorai)",
            "source": "Waterbuck",
            "pronunciation": "ah-koh-koh-rah-eet",
            "hint": "Waterbuck antelope. (Barton 1921)",
            "example": "Akokorait (pl. ngokorai) — Waterbuck (Waterbuck antelope. (Barton 1921))"
          },
          {
            "target": "Adarit (pl. ngadarita)",
            "source": "Bushbuck",
            "pronunciation": "ah-dah-reet",
            "hint": "Bushbuck antelope. (Barton 1921)",
            "example": "Adarit (pl. ngadarita) — Bushbuck (Bushbuck antelope. (Barton 1921))"
          },
          {
            "target": "Epigi / Eputir (pl. ngapigi / ngiputiro)",
            "source": "Warthog",
            "pronunciation": "eh-pee-gee",
            "hint": "Warthog. (Barton 1921)",
            "example": "Epigi / Eputir (pl. ngapigi / ngiputiro) — Warthog (Warthog. (Barton 1921))"
          },
          {
            "target": "Echom (pl. ngechomin)",
            "source": "Baboon",
            "pronunciation": "eh-chohm",
            "hint": "Olive baboon. (Barton 1921)",
            "example": "Echom (pl. ngechomin) — Baboon (Olive baboon. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          },
          {
            "target": "Epolok ngikiliok lu.",
            "source": "These men are strong and great."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Epir (pl. ngipirin)\" mean in English?",
            "correctAnswer": "Hippopotamus",
            "options": [
              "Zebra",
              "Eland",
              "Oryx",
              "Hippopotamus"
            ],
            "hint": "Hippopotamus of Lake Turkana. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Etugo / Etuko (pl. ngetugoi / ngitukoi)\" mean in English?",
            "correctAnswer": "Zebra",
            "options": [
              "Eland",
              "Oryx",
              "Zebra",
              "Hippopotamus"
            ],
            "hint": "Plains zebra. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Uwabet (pl. nguawabeto)\" mean in English?",
            "correctAnswer": "Eland",
            "options": [
              "Oryx",
              "Eland",
              "Hippopotamus",
              "Zebra"
            ],
            "hint": "Giant eland antelope. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eland\" in Turkana?",
            "correctAnswer": "Uwabet (pl. nguawabeto)",
            "options": [
              "Uwabet (pl. nguawabeto)",
              "Epir (pl. ngipirin)",
              "Etugo / Etuko (pl. ngetugoi / ngitukoi)",
              "Eder (pl. ngederin)"
            ],
            "hint": "oo-wah-beht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Oryx\" in Turkana?",
            "correctAnswer": "Eder (pl. ngederin)",
            "options": [
              "Epir (pl. ngipirin)",
              "Etugo / Etuko (pl. ngetugoi / ngitukoi)",
              "Uwabet (pl. nguawabeto)",
              "Eder (pl. ngederin)"
            ],
            "hint": "eh-dehr"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Greater Kudu\" in Turkana?",
            "correctAnswer": "Emakak (pl. ngemakaka)",
            "options": [
              "Etugo / Etuko (pl. ngetugoi / ngitukoi)",
              "Uwabet (pl. nguawabeto)",
              "Emakak (pl. ngemakaka)",
              "Epir (pl. ngipirin)"
            ],
            "hint": "eh-mah-kahk"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Epir (pl. ngipirin): Hippopotamus, Etugo / Etuko (pl. ngetugoi / ngitukoi): Zebra, Uwabet (pl. nguawabeto): Eland, Eder (pl. ngederin): Oryx",
            "pairs": [
              {
                "left": "Epir (pl. ngipirin)",
                "right": "Hippopotamus"
              },
              {
                "left": "Etugo / Etuko (pl. ngetugoi / ngitukoi)",
                "right": "Zebra"
              },
              {
                "left": "Uwabet (pl. nguawabeto)",
                "right": "Eland"
              },
              {
                "left": "Eder (pl. ngederin)",
                "right": "Oryx"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Hippopotamus\" in Turkana.",
            "correctAnswer": "Epir (pl. ngipirin)",
            "options": [
              "Epir (pl. ngipirin)",
              "Etugo / Etuko (pl. ngetugoi / ngitukoi)",
              "Uwabet (pl. nguawabeto)",
              "Eder (pl. ngederin)"
            ],
            "hint": "eh-peer"
          }
        ]
      },
      {
        "id": "turkana-exp-animals-4",
        "title": "Animals & Wildlife (Part 4)",
        "icon": "Compass",
        "description": "Master Turkana animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akodokon (pl. ngadokoi)' (Monkey), 'Akinyan / Akinyang (pl. ngakinyanga)' (Crocodile), 'Ebokok (pl. ngebokoka)' (Tortoise), 'Emun (pl. ngemun)' (Snake).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Akodokon (pl. ngadokoi)",
            "source": "Monkey",
            "pronunciation": "ah-koh-doh-kohn",
            "hint": "Vervet / Sykes monkey. (Barton 1921)",
            "example": "Akodokon (pl. ngadokoi) — Monkey (Vervet / Sykes monkey. (Barton 1921))"
          },
          {
            "target": "Akinyan / Akinyang (pl. ngakinyanga)",
            "source": "Crocodile",
            "pronunciation": "ah-keen-yahn",
            "hint": "Nile crocodile, abundant in Lake Turkana. (Barton 1921)",
            "example": "Akinyan / Akinyang (pl. ngakinyanga) — Crocodile (Nile crocodile, abundant in Lake Turkana. (Barton 1921))"
          },
          {
            "target": "Ebokok (pl. ngebokoka)",
            "source": "Tortoise",
            "pronunciation": "eh-boh-kohk",
            "hint": "Leopard tortoise. (Barton 1921)",
            "example": "Ebokok (pl. ngebokoka) — Tortoise (Leopard tortoise. (Barton 1921))"
          },
          {
            "target": "Emun (pl. ngemun)",
            "source": "Snake",
            "pronunciation": "eh-moon",
            "hint": "General serpent / snake. (Barton 1921)",
            "example": "Emun (pl. ngemun) — Snake (General serpent / snake. (Barton 1921))"
          },
          {
            "target": "Akipom (pl. ngapomia)",
            "source": "Puff adder",
            "pronunciation": "ah-kee-pohm",
            "hint": "Venomous puff adder. (Barton 1921)",
            "example": "Akipom (pl. ngapomia) — Puff adder (Venomous puff adder. (Barton 1921))"
          },
          {
            "target": "Emorotot (pl. ngemorotota)",
            "source": "Python",
            "pronunciation": "eh-moh-roh-toht",
            "hint": "African rock python. (Barton 1921)",
            "example": "Emorotot (pl. ngemorotota) — Python (African rock python. (Barton 1921))"
          },
          {
            "target": "Ereu (pl. ngarewa)",
            "source": "Spitting cobra",
            "pronunciation": "eh-reh-oo",
            "hint": "Spitting cobra. (Barton 1921)",
            "example": "Ereu (pl. ngarewa) — Spitting cobra (Spitting cobra. (Barton 1921))"
          },
          {
            "target": "Ikenit / Ikoni (pl. ngken / ngiken)",
            "source": "Bird",
            "pronunciation": "ee-keh-neet",
            "hint": "Wild bird. (Barton 1921)",
            "example": "Ikenit / Ikoni (pl. ngken / ngiken) — Bird (Wild bird. (Barton 1921))"
          },
          {
            "target": "Akalis (pl. ngaliso)",
            "source": "Ostrich",
            "pronunciation": "ah-kah-lees",
            "hint": "Somali ostrich; feathers used for warriors' ceremonial headdresses. (Barton 1921)",
            "example": "Akalis (pl. ngaliso) — Ostrich (Somali ostrich; feathers used for warriors' ceremonial headdresses. (Barton 1921))"
          },
          {
            "target": "Atorokot (pl. ngatorok)",
            "source": "Vulture",
            "pronunciation": "ah-toh-roh-koht",
            "hint": "Scavenger vulture. (Barton 1921)",
            "example": "Atorokot (pl. ngatorok) — Vulture (Scavenger vulture. (Barton 1921))"
          },
          {
            "target": "Ejili (pl. ngaijilili)",
            "source": "Hawk",
            "pronunciation": "eh-jee-lee",
            "hint": "Bird of prey / raptor. (Barton 1921)",
            "example": "Ejili (pl. ngaijilili) — Hawk (Bird of prey / raptor. (Barton 1921))"
          },
          {
            "target": "Akorup (pl. ngoroka)",
            "source": "Crow",
            "pronunciation": "ah-koh-roop",
            "hint": "Pied crow. (Barton 1921)",
            "example": "Akorup (pl. ngoroka) — Crow (Pied crow. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akodokon (pl. ngadokoi)\" mean in English?",
            "correctAnswer": "Monkey",
            "options": [
              "Crocodile",
              "Tortoise",
              "Snake",
              "Monkey"
            ],
            "hint": "Vervet / Sykes monkey. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akinyan / Akinyang (pl. ngakinyanga)\" mean in English?",
            "correctAnswer": "Crocodile",
            "options": [
              "Tortoise",
              "Snake",
              "Crocodile",
              "Monkey"
            ],
            "hint": "Nile crocodile, abundant in Lake Turkana. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ebokok (pl. ngebokoka)\" mean in English?",
            "correctAnswer": "Tortoise",
            "options": [
              "Snake",
              "Tortoise",
              "Monkey",
              "Crocodile"
            ],
            "hint": "Leopard tortoise. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tortoise\" in Turkana?",
            "correctAnswer": "Ebokok (pl. ngebokoka)",
            "options": [
              "Ebokok (pl. ngebokoka)",
              "Akodokon (pl. ngadokoi)",
              "Akinyan / Akinyang (pl. ngakinyanga)",
              "Emun (pl. ngemun)"
            ],
            "hint": "eh-boh-kohk"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Snake\" in Turkana?",
            "correctAnswer": "Emun (pl. ngemun)",
            "options": [
              "Akodokon (pl. ngadokoi)",
              "Akinyan / Akinyang (pl. ngakinyanga)",
              "Ebokok (pl. ngebokoka)",
              "Emun (pl. ngemun)"
            ],
            "hint": "eh-moon"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Puff adder\" in Turkana?",
            "correctAnswer": "Akipom (pl. ngapomia)",
            "options": [
              "Akinyan / Akinyang (pl. ngakinyanga)",
              "Ebokok (pl. ngebokoka)",
              "Akipom (pl. ngapomia)",
              "Akodokon (pl. ngadokoi)"
            ],
            "hint": "ah-kee-pohm"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Akodokon (pl. ngadokoi): Monkey, Akinyan / Akinyang (pl. ngakinyanga): Crocodile, Ebokok (pl. ngebokoka): Tortoise, Emun (pl. ngemun): Snake",
            "pairs": [
              {
                "left": "Akodokon (pl. ngadokoi)",
                "right": "Monkey"
              },
              {
                "left": "Akinyan / Akinyang (pl. ngakinyanga)",
                "right": "Crocodile"
              },
              {
                "left": "Ebokok (pl. ngebokoka)",
                "right": "Tortoise"
              },
              {
                "left": "Emun (pl. ngemun)",
                "right": "Snake"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Monkey\" in Turkana.",
            "correctAnswer": "Akodokon (pl. ngadokoi)",
            "options": [
              "Akodokon (pl. ngadokoi)",
              "Akinyan / Akinyang (pl. ngakinyanga)",
              "Ebokok (pl. ngebokoka)",
              "Emun (pl. ngemun)"
            ],
            "hint": "ah-koh-doh-kohn"
          }
        ]
      },
      {
        "id": "turkana-exp-animals-5",
        "title": "Animals & Wildlife (Part 5)",
        "icon": "Compass",
        "description": "Master Turkana animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Atapen (pl. ngatapeno)' (Guineafowl), 'Ekuri (pl. ngokori)' (Dove), 'Atapeng / Akukor (pl. ngatapengo / ngakukoroi)' (Chicken / Fowl), 'Apoo (pl. ngapooi)' (Hare / Rabbit).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Atapen (pl. ngatapeno)",
            "source": "Guineafowl",
            "pronunciation": "ah-tah-pehn",
            "hint": "Helmeted guineafowl. (Barton 1921)",
            "example": "Atapen (pl. ngatapeno) — Guineafowl (Helmeted guineafowl. (Barton 1921))"
          },
          {
            "target": "Ekuri (pl. ngokori)",
            "source": "Dove",
            "pronunciation": "eh-koo-ree",
            "hint": "African dove. (Barton 1921)",
            "example": "Ekuri (pl. ngokori) — Dove (African dove. (Barton 1921))"
          },
          {
            "target": "Atapeng / Akukor (pl. ngatapengo / ngakukoroi)",
            "source": "Chicken / Fowl",
            "pronunciation": "ah-tah-pehng",
            "hint": "Domestic poultry.",
            "example": "Atapeng / Akukor (pl. ngatapengo / ngakukoroi) — Chicken / Fowl (Domestic poultry.)"
          },
          {
            "target": "Apoo (pl. ngapooi)",
            "source": "Hare / Rabbit",
            "pronunciation": "ah-poh-oh",
            "hint": "Savanna hare.",
            "example": "Apoo (pl. ngapooi) — Hare / Rabbit (Savanna hare.)"
          },
          {
            "target": "Ekolia (pl. ngolia)",
            "source": "Fish",
            "pronunciation": "eh-koh-lee-ah",
            "hint": "Fish harvested by fishing communities along Lake Turkana. (Barton 1921)",
            "example": "Ekolia (pl. ngolia) — Fish (Fish harvested by fishing communities along Lake Turkana. (Barton 1921))"
          },
          {
            "target": "Ingok (pl. ngoko / ngingokwo)",
            "source": "Dog",
            "pronunciation": "een-gohk",
            "hint": "Domestic camp guard dog. (Barton 1921)",
            "example": "Ingok (pl. ngoko / ngingokwo) — Dog (Domestic camp guard dog. (Barton 1921))"
          },
          {
            "target": "Lorutoit (pl. lokutucha)",
            "source": "Wild cat",
            "pronunciation": "loh-roo-toh-eet",
            "hint": "African wild cat. (Barton 1921)",
            "example": "Lorutoit (pl. lokutucha) — Wild cat (African wild cat. (Barton 1921))"
          },
          {
            "target": "Ejulin (pl. ngejuluno)",
            "source": "Rat",
            "pronunciation": "eh-joo-leen",
            "hint": "Rodent / rat. (Barton 1921)",
            "example": "Ejulin (pl. ngejuluno) — Rat (Rodent / rat. (Barton 1921))"
          },
          {
            "target": "Emathi (pl. ngemathia)",
            "source": "Locust",
            "pronunciation": "eh-mah-thee",
            "hint": "Migratory desert locust. (Barton 1921)",
            "example": "Emathi (pl. ngemathia) — Locust (Migratory desert locust. (Barton 1921))"
          },
          {
            "target": "Etherot (pl. ngesorro)",
            "source": "Mosquito",
            "pronunciation": "eh-theh-roht",
            "hint": "Mosquito insect. (Barton 1921)",
            "example": "Etherot (pl. ngesorro) — Mosquito (Mosquito insect. (Barton 1921))"
          },
          {
            "target": "Emadan (pl. ngamadan)",
            "source": "Tick",
            "pronunciation": "eh-mah-dahn",
            "hint": "Livestock tick. (Barton 1921)",
            "example": "Emadan (pl. ngamadan) — Tick (Livestock tick. (Barton 1921))"
          },
          {
            "target": "Oūū (coll. bees)",
            "source": "Bee",
            "pronunciation": "oh-oo-oo",
            "hint": "Wild honeybee swarms. (Barton 1921)",
            "example": "Oūū (coll. bees) — Bee (Wild honeybee swarms. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atapen (pl. ngatapeno)\" mean in English?",
            "correctAnswer": "Guineafowl",
            "options": [
              "Dove",
              "Chicken / Fowl",
              "Hare / Rabbit",
              "Guineafowl"
            ],
            "hint": "Helmeted guineafowl. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekuri (pl. ngokori)\" mean in English?",
            "correctAnswer": "Dove",
            "options": [
              "Chicken / Fowl",
              "Hare / Rabbit",
              "Dove",
              "Guineafowl"
            ],
            "hint": "African dove. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atapeng / Akukor (pl. ngatapengo / ngakukoroi)\" mean in English?",
            "correctAnswer": "Chicken / Fowl",
            "options": [
              "Hare / Rabbit",
              "Chicken / Fowl",
              "Guineafowl",
              "Dove"
            ],
            "hint": "Domestic poultry."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Chicken / Fowl\" in Turkana?",
            "correctAnswer": "Atapeng / Akukor (pl. ngatapengo / ngakukoroi)",
            "options": [
              "Atapeng / Akukor (pl. ngatapengo / ngakukoroi)",
              "Atapen (pl. ngatapeno)",
              "Ekuri (pl. ngokori)",
              "Apoo (pl. ngapooi)"
            ],
            "hint": "ah-tah-pehng"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hare / Rabbit\" in Turkana?",
            "correctAnswer": "Apoo (pl. ngapooi)",
            "options": [
              "Atapen (pl. ngatapeno)",
              "Ekuri (pl. ngokori)",
              "Atapeng / Akukor (pl. ngatapengo / ngakukoroi)",
              "Apoo (pl. ngapooi)"
            ],
            "hint": "ah-poh-oh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fish\" in Turkana?",
            "correctAnswer": "Ekolia (pl. ngolia)",
            "options": [
              "Ekuri (pl. ngokori)",
              "Atapeng / Akukor (pl. ngatapengo / ngakukoroi)",
              "Ekolia (pl. ngolia)",
              "Atapen (pl. ngatapeno)"
            ],
            "hint": "eh-koh-lee-ah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Atapen (pl. ngatapeno): Guineafowl, Ekuri (pl. ngokori): Dove, Atapeng / Akukor (pl. ngatapengo / ngakukoroi): Chicken / Fowl, Apoo (pl. ngapooi): Hare / Rabbit",
            "pairs": [
              {
                "left": "Atapen (pl. ngatapeno)",
                "right": "Guineafowl"
              },
              {
                "left": "Ekuri (pl. ngokori)",
                "right": "Dove"
              },
              {
                "left": "Atapeng / Akukor (pl. ngatapengo / ngakukoroi)",
                "right": "Chicken / Fowl"
              },
              {
                "left": "Apoo (pl. ngapooi)",
                "right": "Hare / Rabbit"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Guineafowl\" in Turkana.",
            "correctAnswer": "Atapen (pl. ngatapeno)",
            "options": [
              "Atapen (pl. ngatapeno)",
              "Ekuri (pl. ngokori)",
              "Atapeng / Akukor (pl. ngatapengo / ngakukoroi)",
              "Apoo (pl. ngapooi)"
            ],
            "hint": "ah-tah-pehn"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-11-nature",
    "title": "Unit 11: Nature & Environment",
    "description": "Comprehensive Turkana curriculum for Nature & Environment, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
    "icon": "Sun",
    "skills": [
      {
        "id": "turkana-exp-nature",
        "title": "Nature & Environment (Part 1)",
        "icon": "Sun",
        "description": "Master Turkana nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ng'akipi / Agipi (pl. ngagipi)' (Water), 'Angalul / Angolul (pl. ngangolulio)' (River / Stream), 'Ayonay (pl. ngiyonay)' (Dry riverbed (Laga)), 'Emoro / Emor (pl. ngemor)' (Mountain).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ng'akipi / Agipi (pl. ngagipi)",
            "source": "Water",
            "pronunciation": "ngah-kee-pee / ah-gee-pee",
            "hint": "Vital pastoral resource. Fresh water: 'Agipi kalimok'; dirty water: 'Agipi eloth'. (Barton 1921)",
            "example": "Ng'akipi / Agipi (pl. ngagipi) — Water (Vital pastoral resource. Fresh water: 'Agipi kalimok'; dirty water: 'Agipi eloth'. (Barton 1921))"
          },
          {
            "target": "Angalul / Angolul (pl. ngangolulio)",
            "source": "River / Stream",
            "pronunciation": "ahn-gah-lool",
            "hint": "Permanent or seasonal river channel. (Barton 1921)",
            "example": "Angalul / Angolul (pl. ngangolulio) — River / Stream (Permanent or seasonal river channel. (Barton 1921))"
          },
          {
            "target": "Ayonay (pl. ngiyonay)",
            "source": "Dry riverbed (Laga)",
            "pronunciation": "ah-yoh-nah-ee",
            "hint": "Sandy dry river course that surges during seasonal flash floods. (Barton 1921)",
            "example": "Ayonay (pl. ngiyonay) — Dry riverbed (Laga) (Sandy dry river course that surges during seasonal flash floods. (Barton 1921))"
          },
          {
            "target": "Emoro / Emor (pl. ngemor)",
            "source": "Mountain",
            "pronunciation": "eh-moh-roh",
            "hint": "Rocky mountain or hill peak. (Barton 1921)",
            "example": "Emoro / Emor (pl. ngemor) — Mountain (Rocky mountain or hill peak. (Barton 1921))"
          },
          {
            "target": "Aukot (pl. ngoukon)",
            "source": "Mountain range",
            "pronunciation": "ah-oo-koht",
            "hint": "Highland mountain range. (Barton 1921)",
            "example": "Aukot (pl. ngoukon) — Mountain range (Highland mountain range. (Barton 1921))"
          },
          {
            "target": "Amukora (pl. ngemokor)",
            "source": "Hill",
            "pronunciation": "ah-moo-koh-rah",
            "hint": "Rocky knoll or hillock. (Barton 1921)",
            "example": "Amukora (pl. ngemokor) — Hill (Rocky knoll or hillock. (Barton 1921))"
          },
          {
            "target": "Aro / Etot (pl. ngaroitin / ngatotin)",
            "source": "Plain / Savannah",
            "pronunciation": "ah-roh",
            "hint": "Vast open arid plain. (Barton 1921)",
            "example": "Aro / Etot (pl. ngaroitin / ngatotin) — Plain / Savannah (Vast open arid plain. (Barton 1921))"
          },
          {
            "target": "Amoni (pl. nyamoniek)",
            "source": "Forest / Acacia bushland",
            "pronunciation": "ah-moh-nee",
            "hint": "Dense riverine thorn forest or thicket. (Barton 1921)",
            "example": "Amoni (pl. nyamoniek) — Forest / Acacia bushland (Dense riverine thorn forest or thicket. (Barton 1921))"
          },
          {
            "target": "Akitela (pl. ngateai)",
            "source": "Wilderness / Open country",
            "pronunciation": "ah-kee-teh-lah",
            "hint": "Uninhabited wilderness expanse. (Barton 1921)",
            "example": "Akitela (pl. ngateai) — Wilderness / Open country (Uninhabited wilderness expanse. (Barton 1921))"
          },
          {
            "target": "Akolon / Akolong (pl. ngakolon)",
            "source": "Sun",
            "pronunciation": "ah-koh-lohn",
            "hint": "The sun; also governs diurnal timekeeping. (Barton 1921)",
            "example": "Akolon / Akolong (pl. ngakolon) — Sun (The sun; also governs diurnal timekeeping. (Barton 1921))"
          },
          {
            "target": "Kanyerit (pl. nganyer)",
            "source": "Star",
            "pronunciation": "kahn-yeh-reet",
            "hint": "Night sky star. (Barton 1921)",
            "example": "Kanyerit (pl. nganyer) — Star (Night sky star. (Barton 1921))"
          },
          {
            "target": "Etup",
            "source": "Morning star",
            "pronunciation": "eh-toop",
            "hint": "Bright morning planet Venus visible before sunrise. (Barton 1921)",
            "example": "Etup — Morning star (Bright morning planet Venus visible before sunrise. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ng'akipi / Agipi (pl. ngagipi)\" mean in English?",
            "correctAnswer": "Water",
            "options": [
              "River / Stream",
              "Dry riverbed (Laga)",
              "Mountain",
              "Water"
            ],
            "hint": "Vital pastoral resource. Fresh water: 'Agipi kalimok'; dirty water: 'Agipi eloth'. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Angalul / Angolul (pl. ngangolulio)\" mean in English?",
            "correctAnswer": "River / Stream",
            "options": [
              "Dry riverbed (Laga)",
              "Mountain",
              "River / Stream",
              "Water"
            ],
            "hint": "Permanent or seasonal river channel. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ayonay (pl. ngiyonay)\" mean in English?",
            "correctAnswer": "Dry riverbed (Laga)",
            "options": [
              "Mountain",
              "Dry riverbed (Laga)",
              "Water",
              "River / Stream"
            ],
            "hint": "Sandy dry river course that surges during seasonal flash floods. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Dry riverbed (Laga)\" in Turkana?",
            "correctAnswer": "Ayonay (pl. ngiyonay)",
            "options": [
              "Ayonay (pl. ngiyonay)",
              "Ng'akipi / Agipi (pl. ngagipi)",
              "Angalul / Angolul (pl. ngangolulio)",
              "Emoro / Emor (pl. ngemor)"
            ],
            "hint": "ah-yoh-nah-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mountain\" in Turkana?",
            "correctAnswer": "Emoro / Emor (pl. ngemor)",
            "options": [
              "Ng'akipi / Agipi (pl. ngagipi)",
              "Angalul / Angolul (pl. ngangolulio)",
              "Ayonay (pl. ngiyonay)",
              "Emoro / Emor (pl. ngemor)"
            ],
            "hint": "eh-moh-roh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mountain range\" in Turkana?",
            "correctAnswer": "Aukot (pl. ngoukon)",
            "options": [
              "Angalul / Angolul (pl. ngangolulio)",
              "Ayonay (pl. ngiyonay)",
              "Aukot (pl. ngoukon)",
              "Ng'akipi / Agipi (pl. ngagipi)"
            ],
            "hint": "ah-oo-koht"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ng'akipi / Agipi (pl. ngagipi): Water, Angalul / Angolul (pl. ngangolulio): River / Stream, Ayonay (pl. ngiyonay): Dry riverbed (Laga), Emoro / Emor (pl. ngemor): Mountain",
            "pairs": [
              {
                "left": "Ng'akipi / Agipi (pl. ngagipi)",
                "right": "Water"
              },
              {
                "left": "Angalul / Angolul (pl. ngangolulio)",
                "right": "River / Stream"
              },
              {
                "left": "Ayonay (pl. ngiyonay)",
                "right": "Dry riverbed (Laga)"
              },
              {
                "left": "Emoro / Emor (pl. ngemor)",
                "right": "Mountain"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Water\" in Turkana.",
            "correctAnswer": "Ng'akipi / Agipi (pl. ngagipi)",
            "options": [
              "Ng'akipi / Agipi (pl. ngagipi)",
              "Angalul / Angolul (pl. ngangolulio)",
              "Ayonay (pl. ngiyonay)",
              "Emoro / Emor (pl. ngemor)"
            ],
            "hint": "ngah-kee-pee / ah-gee-pee"
          }
        ]
      },
      {
        "id": "turkana-exp-nature-2",
        "title": "Nature & Environment (Part 2)",
        "icon": "Sun",
        "description": "Master Turkana nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akuich / Akuj' (Sky / Heaven), 'Edu (pl. ngeduon)' (Cloud), 'Atorot / Ekuwam (pl. ngatorot / ngikuwamin)' (Wind), 'Ekwam (pl. ngakwama)' (Whirlwind / Dust devil).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Akuich / Akuj",
            "source": "Sky / Heaven",
            "pronunciation": "ah-koo-eech",
            "hint": "The vault of heaven and celestial abode of God. (Barton 1921)",
            "example": "Akuich / Akuj — Sky / Heaven (The vault of heaven and celestial abode of God. (Barton 1921))"
          },
          {
            "target": "Edu (pl. ngeduon)",
            "source": "Cloud",
            "pronunciation": "eh-doo",
            "hint": "Rain cloud. (Barton 1921)",
            "example": "Edu (pl. ngeduon) — Cloud (Rain cloud. (Barton 1921))"
          },
          {
            "target": "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
            "source": "Wind",
            "pronunciation": "ah-toh-roht",
            "hint": "Breeze or wind across the plains. (Barton 1921)",
            "example": "Atorot / Ekuwam (pl. ngatorot / ngikuwamin) — Wind (Breeze or wind across the plains. (Barton 1921))"
          },
          {
            "target": "Ekwam (pl. ngakwama)",
            "source": "Whirlwind / Dust devil",
            "pronunciation": "eh-kwahm",
            "hint": "Spiraling desert dust whirlwind. (Barton 1921)",
            "example": "Ekwam (pl. ngakwama) — Whirlwind / Dust devil (Spiraling desert dust whirlwind. (Barton 1921))"
          },
          {
            "target": "Egiru (pl. ngakiro)",
            "source": "Thunder",
            "pronunciation": "eh-gee-roo",
            "hint": "Thunder resounding during seasonal storms. (Barton 1921)",
            "example": "Egiru (pl. ngakiro) — Thunder (Thunder resounding during seasonal storms. (Barton 1921))"
          },
          {
            "target": "Emilia",
            "source": "Lightning",
            "pronunciation": "eh-mee-lee-ah",
            "hint": "Flash of lightning. (Barton 1921)",
            "example": "Emilia — Lightning (Flash of lightning. (Barton 1921))"
          },
          {
            "target": "Elup / Ngalup",
            "source": "Earth / Soil / Ground",
            "pronunciation": "eh-loop / ngah-loop",
            "hint": "Soil and ground surface. (Barton 1921)",
            "example": "Elup / Ngalup — Earth / Soil / Ground (Soil and ground surface. (Barton 1921))"
          },
          {
            "target": "Athinuin / Asinik",
            "source": "Sand",
            "pronunciation": "ah-thee-noo-een",
            "hint": "Desert and riverbed sand. (Barton 1921)",
            "example": "Athinuin / Asinik — Sand (Desert and riverbed sand. (Barton 1921))"
          },
          {
            "target": "Amoro (pl. ngamur)",
            "source": "Stone / Rock",
            "pronunciation": "ah-moh-roh",
            "hint": "Stone or boulder. White quartz: 'Amoro ekwan'. (Barton 1921)",
            "example": "Amoro (pl. ngamur) — Stone / Rock (Stone or boulder. White quartz: 'Amoro ekwan'. (Barton 1921))"
          },
          {
            "target": "Ebur / Ejwa (pl. ngiburin / ngejowi)",
            "source": "Rock pool / Spring",
            "pronunciation": "eh-boor",
            "hint": "Natural rock pool or perennial freshwater spring. (Barton 1921)",
            "example": "Ebur / Ejwa (pl. ngiburin / ngejowi) — Rock pool / Spring (Natural rock pool or perennial freshwater spring. (Barton 1921))"
          },
          {
            "target": "Akar (pl. ngakari)",
            "source": "Well",
            "pronunciation": "ah-kahr",
            "hint": "Hand-dug sand river well where livestock water. (Barton 1921)",
            "example": "Akar (pl. ngakari) — Well (Hand-dug sand river well where livestock water. (Barton 1921))"
          },
          {
            "target": "Echoto",
            "source": "Mud",
            "pronunciation": "eh-choh-toh",
            "hint": "Rain mud or river silt. (Barton 1921)",
            "example": "Echoto — Mud (Rain mud or river silt. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akuich / Akuj\" mean in English?",
            "correctAnswer": "Sky / Heaven",
            "options": [
              "Cloud",
              "Wind",
              "Whirlwind / Dust devil",
              "Sky / Heaven"
            ],
            "hint": "The vault of heaven and celestial abode of God. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Edu (pl. ngeduon)\" mean in English?",
            "correctAnswer": "Cloud",
            "options": [
              "Wind",
              "Whirlwind / Dust devil",
              "Cloud",
              "Sky / Heaven"
            ],
            "hint": "Rain cloud. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atorot / Ekuwam (pl. ngatorot / ngikuwamin)\" mean in English?",
            "correctAnswer": "Wind",
            "options": [
              "Whirlwind / Dust devil",
              "Wind",
              "Sky / Heaven",
              "Cloud"
            ],
            "hint": "Breeze or wind across the plains. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Wind\" in Turkana?",
            "correctAnswer": "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
            "options": [
              "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
              "Akuich / Akuj",
              "Edu (pl. ngeduon)",
              "Ekwam (pl. ngakwama)"
            ],
            "hint": "ah-toh-roht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Whirlwind / Dust devil\" in Turkana?",
            "correctAnswer": "Ekwam (pl. ngakwama)",
            "options": [
              "Akuich / Akuj",
              "Edu (pl. ngeduon)",
              "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
              "Ekwam (pl. ngakwama)"
            ],
            "hint": "eh-kwahm"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Thunder\" in Turkana?",
            "correctAnswer": "Egiru (pl. ngakiro)",
            "options": [
              "Edu (pl. ngeduon)",
              "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
              "Egiru (pl. ngakiro)",
              "Akuich / Akuj"
            ],
            "hint": "eh-gee-roo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Akuich / Akuj: Sky / Heaven, Edu (pl. ngeduon): Cloud, Atorot / Ekuwam (pl. ngatorot / ngikuwamin): Wind, Ekwam (pl. ngakwama): Whirlwind / Dust devil",
            "pairs": [
              {
                "left": "Akuich / Akuj",
                "right": "Sky / Heaven"
              },
              {
                "left": "Edu (pl. ngeduon)",
                "right": "Cloud"
              },
              {
                "left": "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
                "right": "Wind"
              },
              {
                "left": "Ekwam (pl. ngakwama)",
                "right": "Whirlwind / Dust devil"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Sky / Heaven\" in Turkana.",
            "correctAnswer": "Akuich / Akuj",
            "options": [
              "Akuich / Akuj",
              "Edu (pl. ngeduon)",
              "Atorot / Ekuwam (pl. ngatorot / ngikuwamin)",
              "Ekwam (pl. ngakwama)"
            ],
            "hint": "ah-koo-eech"
          }
        ]
      },
      {
        "id": "turkana-exp-nature-3",
        "title": "Nature & Environment (Part 3)",
        "icon": "Sun",
        "description": "Master Turkana nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akitoi / E'kitoi (pl. ngakito)' (Tree), 'Ateni (pl. ngateni)' (Tree branch), 'Akobuket (pl. ngabuk)' (Tree bark), 'Akui (pl. ngakui)' (Leaf).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Akitoi / E'kitoi (pl. ngakito)",
            "source": "Tree",
            "pronunciation": "ah-kee-toh-ee",
            "hint": "Living tree or medicinal wood. Plural: Ngakito. (Barton 1921)",
            "example": "Akitoi / E'kitoi (pl. ngakito) — Tree (Living tree or medicinal wood. Plural: Ngakito. (Barton 1921))"
          },
          {
            "target": "Ateni (pl. ngateni)",
            "source": "Tree branch",
            "pronunciation": "ah-teh-nee",
            "hint": "Branch or bough of a tree. (Barton 1921)",
            "example": "Ateni (pl. ngateni) — Tree branch (Branch or bough of a tree. (Barton 1921))"
          },
          {
            "target": "Akobuket (pl. ngabuk)",
            "source": "Tree bark",
            "pronunciation": "ah-koh-boo-keht",
            "hint": "Bark stripped from trees for rope and medicinal uses. (Barton 1921)",
            "example": "Akobuket (pl. ngabuk) — Tree bark (Bark stripped from trees for rope and medicinal uses. (Barton 1921))"
          },
          {
            "target": "Akui (pl. ngakui)",
            "source": "Leaf",
            "pronunciation": "ah-koo-ee",
            "hint": "Tree foliage or medicinal leaf. (Barton 1921)",
            "example": "Akui (pl. ngakui) — Leaf (Tree foliage or medicinal leaf. (Barton 1921))"
          },
          {
            "target": "Atagorot (pl. ngatagor)",
            "source": "Root",
            "pronunciation": "ah-tah-goh-roht",
            "hint": "Plant or tree root used in healing concoctions. (Barton 1921)",
            "example": "Atagorot (pl. ngatagor) — Root (Plant or tree root used in healing concoctions. (Barton 1921))"
          },
          {
            "target": "Amel / Amelu",
            "source": "Grass / Pasture",
            "pronunciation": "ah-mehl",
            "hint": "Fresh tender pasture for cattle and sheep. (Barton 1921)",
            "example": "Amel / Amelu — Grass / Pasture (Fresh tender pasture for cattle and sheep. (Barton 1921))"
          },
          {
            "target": "Akokai (pl. ngoka)",
            "source": "Thorn",
            "pronunciation": "ah-koh-kah-ee",
            "hint": "Thorn used in defensive kraal fencing. (Barton 1921)",
            "example": "Akokai (pl. ngoka) — Thorn (Thorn used in defensive kraal fencing. (Barton 1921))"
          },
          {
            "target": "Anam / Nam (pl. nganamin)",
            "source": "Lake",
            "pronunciation": "ah-nahm",
            "hint": "Large inland sea or lake, referring specifically to Lake Turkana.",
            "example": "Anam / Nam (pl. nganamin) — Lake (Large inland sea or lake, referring specifically to Lake Turkana.)"
          },
          {
            "target": "Akuj / Akuich",
            "source": "God",
            "pronunciation": "ah-kooj / ah-koo-eech",
            "hint": "Supreme Creator deity who dwells in the high heavens. (Barton 1921)",
            "example": "Akuj / Akuich — God (Supreme Creator deity who dwells in the high heavens. (Barton 1921))"
          },
          {
            "target": "Akwap / Akwop (pl. ngakwapa)",
            "source": "Land / Country",
            "pronunciation": "ah-kwahp",
            "hint": "Ancestral homeland or territory. (Barton 1921)",
            "example": "Akwap / Akwop (pl. ngakwapa) — Land / Country (Ancestral homeland or territory. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          },
          {
            "target": "Epolok ngikiliok lu.",
            "source": "These men are strong and great."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akitoi / E'kitoi (pl. ngakito)\" mean in English?",
            "correctAnswer": "Tree",
            "options": [
              "Tree branch",
              "Tree bark",
              "Leaf",
              "Tree"
            ],
            "hint": "Living tree or medicinal wood. Plural: Ngakito. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ateni (pl. ngateni)\" mean in English?",
            "correctAnswer": "Tree branch",
            "options": [
              "Tree bark",
              "Leaf",
              "Tree branch",
              "Tree"
            ],
            "hint": "Branch or bough of a tree. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akobuket (pl. ngabuk)\" mean in English?",
            "correctAnswer": "Tree bark",
            "options": [
              "Leaf",
              "Tree bark",
              "Tree",
              "Tree branch"
            ],
            "hint": "Bark stripped from trees for rope and medicinal uses. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tree bark\" in Turkana?",
            "correctAnswer": "Akobuket (pl. ngabuk)",
            "options": [
              "Akobuket (pl. ngabuk)",
              "Akitoi / E'kitoi (pl. ngakito)",
              "Ateni (pl. ngateni)",
              "Akui (pl. ngakui)"
            ],
            "hint": "ah-koh-boo-keht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leaf\" in Turkana?",
            "correctAnswer": "Akui (pl. ngakui)",
            "options": [
              "Akitoi / E'kitoi (pl. ngakito)",
              "Ateni (pl. ngateni)",
              "Akobuket (pl. ngabuk)",
              "Akui (pl. ngakui)"
            ],
            "hint": "ah-koo-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Root\" in Turkana?",
            "correctAnswer": "Atagorot (pl. ngatagor)",
            "options": [
              "Ateni (pl. ngateni)",
              "Akobuket (pl. ngabuk)",
              "Atagorot (pl. ngatagor)",
              "Akitoi / E'kitoi (pl. ngakito)"
            ],
            "hint": "ah-tah-goh-roht"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Akitoi / E'kitoi (pl. ngakito): Tree, Ateni (pl. ngateni): Tree branch, Akobuket (pl. ngabuk): Tree bark, Akui (pl. ngakui): Leaf",
            "pairs": [
              {
                "left": "Akitoi / E'kitoi (pl. ngakito)",
                "right": "Tree"
              },
              {
                "left": "Ateni (pl. ngateni)",
                "right": "Tree branch"
              },
              {
                "left": "Akobuket (pl. ngabuk)",
                "right": "Tree bark"
              },
              {
                "left": "Akui (pl. ngakui)",
                "right": "Leaf"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Tree\" in Turkana.",
            "correctAnswer": "Akitoi / E'kitoi (pl. ngakito)",
            "options": [
              "Akitoi / E'kitoi (pl. ngakito)",
              "Ateni (pl. ngateni)",
              "Akobuket (pl. ngabuk)",
              "Akui (pl. ngakui)"
            ],
            "hint": "ah-kee-toh-ee"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-12-body",
    "title": "Unit 12: Body Parts",
    "description": "Comprehensive Turkana curriculum for Body Parts, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
    "icon": "Heart",
    "skills": [
      {
        "id": "turkana-exp-body",
        "title": "Body Parts (Part 1)",
        "icon": "Heart",
        "description": "Master Turkana body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ako / Akou (pl. nyakis / ngakouō)' (Head), 'Atimat / Ngetim (pl. ngatim)' (Hair), 'Akon / Akong (pl. ngakonyan)' (Eye), 'Agit / Akit (pl. nyagi / ngaki)' (Ear).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ako / Akou (pl. nyakis / ngakouō)",
            "source": "Head",
            "pronunciation": "ah-koh / ah-koh-oo",
            "hint": "Head. Plural: Nyakis / Ngakouo. (Barton 1921)",
            "example": "Ako / Akou (pl. nyakis / ngakouō) — Head (Head. Plural: Nyakis / Ngakouo. (Barton 1921))"
          },
          {
            "target": "Atimat / Ngetim (pl. ngatim)",
            "source": "Hair",
            "pronunciation": "ah-tee-maht",
            "hint": "Human hair. (Barton 1921)",
            "example": "Atimat / Ngetim (pl. ngatim) — Hair (Human hair. (Barton 1921))"
          },
          {
            "target": "Akon / Akong (pl. ngakonyan)",
            "source": "Eye",
            "pronunciation": "ah-kohn",
            "hint": "Eye. Plural: Ngakonyan. (Barton 1921)",
            "example": "Akon / Akong (pl. ngakonyan) — Eye (Eye. Plural: Ngakonyan. (Barton 1921))"
          },
          {
            "target": "Agit / Akit (pl. nyagi / ngaki)",
            "source": "Ear",
            "pronunciation": "ah-geet / ah-keet",
            "hint": "Ear. Plural: Nyagi / Ngaki. (Barton 1921)",
            "example": "Agit / Akit (pl. nyagi / ngaki) — Ear (Ear. Plural: Nyagi / Ngaki. (Barton 1921))"
          },
          {
            "target": "Ekumi (pl. ngikumith / ngikumes)",
            "source": "Nose",
            "pronunciation": "eh-koo-mee",
            "hint": "Nose. Plural: Ngikumith. (Barton 1921)",
            "example": "Ekumi (pl. ngikumith / ngikumes) — Nose (Nose. Plural: Ngikumith. (Barton 1921))"
          },
          {
            "target": "Akitok (pl. ngakituka)",
            "source": "Mouth",
            "pronunciation": "ah-kee-tohk",
            "hint": "Mouth. Plural: Ngakituka. (Barton 1921)",
            "example": "Akitok (pl. ngakituka) — Mouth (Mouth. Plural: Ngakituka. (Barton 1921))"
          },
          {
            "target": "Akitok (pl. ngakutoka)",
            "source": "Lip",
            "pronunciation": "ah-koo-toh-kah",
            "hint": "Lips. (Barton 1921)",
            "example": "Akitok (pl. ngakutoka) — Lip (Lips. (Barton 1921))"
          },
          {
            "target": "Agelai / Ekelai (pl. ngelai / ngikelai)",
            "source": "Tooth",
            "pronunciation": "ah-geh-lah-ee",
            "hint": "Tooth. Plural: Ngelai. (Barton 1921)",
            "example": "Agelai / Ekelai (pl. ngelai / ngikelai) — Tooth (Tooth. Plural: Ngelai. (Barton 1921))"
          },
          {
            "target": "Aliep / Angajep (pl. ngaliep / ngangajepa)",
            "source": "Tongue",
            "pronunciation": "ah-lee-ehp",
            "hint": "Tongue. (Barton 1921)",
            "example": "Aliep / Angajep (pl. ngaliep / ngangajepa) — Tongue (Tongue. (Barton 1921))"
          },
          {
            "target": "Edokoli (pl. ngadokoli)",
            "source": "Throat",
            "pronunciation": "eh-doh-koh-lee",
            "hint": "Throat and larynx. (Barton 1921)",
            "example": "Edokoli (pl. ngadokoli) — Throat (Throat and larynx. (Barton 1921))"
          },
          {
            "target": "Emotherin / Emosingo (pl. ngemotheringa / ngimosingo)",
            "source": "Neck",
            "pronunciation": "eh-moh-theh-reen",
            "hint": "Neck. Plural: Ngemotheringa. (Barton 1921)",
            "example": "Emotherin / Emosingo (pl. ngemotheringa / ngimosingo) — Neck (Neck. Plural: Ngemotheringa. (Barton 1921))"
          },
          {
            "target": "Ebenek (pl. ngebeneka)",
            "source": "Beard",
            "pronunciation": "eh-beh-nehk",
            "hint": "Facial beard or chin whiskers. (Barton 1921)",
            "example": "Ebenek (pl. ngebeneka) — Beard (Facial beard or chin whiskers. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ako / Akou (pl. nyakis / ngakouō)\" mean in English?",
            "correctAnswer": "Head",
            "options": [
              "Hair",
              "Eye",
              "Ear",
              "Head"
            ],
            "hint": "Head. Plural: Nyakis / Ngakouo. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atimat / Ngetim (pl. ngatim)\" mean in English?",
            "correctAnswer": "Hair",
            "options": [
              "Eye",
              "Ear",
              "Hair",
              "Head"
            ],
            "hint": "Human hair. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akon / Akong (pl. ngakonyan)\" mean in English?",
            "correctAnswer": "Eye",
            "options": [
              "Ear",
              "Eye",
              "Head",
              "Hair"
            ],
            "hint": "Eye. Plural: Ngakonyan. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eye\" in Turkana?",
            "correctAnswer": "Akon / Akong (pl. ngakonyan)",
            "options": [
              "Akon / Akong (pl. ngakonyan)",
              "Ako / Akou (pl. nyakis / ngakouō)",
              "Atimat / Ngetim (pl. ngatim)",
              "Agit / Akit (pl. nyagi / ngaki)"
            ],
            "hint": "ah-kohn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ear\" in Turkana?",
            "correctAnswer": "Agit / Akit (pl. nyagi / ngaki)",
            "options": [
              "Ako / Akou (pl. nyakis / ngakouō)",
              "Atimat / Ngetim (pl. ngatim)",
              "Akon / Akong (pl. ngakonyan)",
              "Agit / Akit (pl. nyagi / ngaki)"
            ],
            "hint": "ah-geet / ah-keet"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Turkana?",
            "correctAnswer": "Ekumi (pl. ngikumith / ngikumes)",
            "options": [
              "Atimat / Ngetim (pl. ngatim)",
              "Akon / Akong (pl. ngakonyan)",
              "Ekumi (pl. ngikumith / ngikumes)",
              "Ako / Akou (pl. nyakis / ngakouō)"
            ],
            "hint": "eh-koo-mee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ako / Akou (pl. nyakis / ngakouō): Head, Atimat / Ngetim (pl. ngatim): Hair, Akon / Akong (pl. ngakonyan): Eye, Agit / Akit (pl. nyagi / ngaki): Ear",
            "pairs": [
              {
                "left": "Ako / Akou (pl. nyakis / ngakouō)",
                "right": "Head"
              },
              {
                "left": "Atimat / Ngetim (pl. ngatim)",
                "right": "Hair"
              },
              {
                "left": "Akon / Akong (pl. ngakonyan)",
                "right": "Eye"
              },
              {
                "left": "Agit / Akit (pl. nyagi / ngaki)",
                "right": "Ear"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Head\" in Turkana.",
            "correctAnswer": "Ako / Akou (pl. nyakis / ngakouō)",
            "options": [
              "Ako / Akou (pl. nyakis / ngakouō)",
              "Atimat / Ngetim (pl. ngatim)",
              "Akon / Akong (pl. ngakonyan)",
              "Agit / Akit (pl. nyagi / ngaki)"
            ],
            "hint": "ah-koh / ah-koh-oo"
          }
        ]
      },
      {
        "id": "turkana-exp-body-2",
        "title": "Body Parts (Part 2)",
        "icon": "Heart",
        "description": "Master Turkana body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Eret (pl. ngeretin)' (Face), 'Ethiket / Ekeget (pl. ngethiketa / ngikegeta)' (Shoulder), 'Etorob (pl. ngatorobio)' (Chest), 'Ethigina / Ekidi (pl. ngethigin)' (Breast).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Eret (pl. ngeretin)",
            "source": "Face",
            "pronunciation": "eh-reht",
            "hint": "Face or brow. (Barton 1921)",
            "example": "Eret (pl. ngeretin) — Face (Face or brow. (Barton 1921))"
          },
          {
            "target": "Ethiket / Ekeget (pl. ngethiketa / ngikegeta)",
            "source": "Shoulder",
            "pronunciation": "eh-thee-keht",
            "hint": "Shoulder. Plural: Ngethiketa. (Barton 1921)",
            "example": "Ethiket / Ekeget (pl. ngethiketa / ngikegeta) — Shoulder (Shoulder. Plural: Ngethiketa. (Barton 1921))"
          },
          {
            "target": "Etorob (pl. ngatorobio)",
            "source": "Chest",
            "pronunciation": "eh-toh-rohb",
            "hint": "Chest. Plural: Ngatorobio. (Barton 1921)",
            "example": "Etorob (pl. ngatorobio) — Chest (Chest. Plural: Ngatorobio. (Barton 1921))"
          },
          {
            "target": "Ethigina / Ekidi (pl. ngethigin)",
            "source": "Breast",
            "pronunciation": "eh-thee-gee-nah",
            "hint": "Breast. Plural: Ngethigin. (Barton 1921)",
            "example": "Ethigina / Ekidi (pl. ngethigin) — Breast (Breast. Plural: Ngethigin. (Barton 1921))"
          },
          {
            "target": "Etou / Etau (pl. ngetai / ngitai)",
            "source": "Heart",
            "pronunciation": "eh-toh-oo / eh-tah-oo",
            "hint": "Anatomical heart and locus of courage. (Barton 1921)",
            "example": "Etou / Etau (pl. ngetai / ngitai) — Heart (Anatomical heart and locus of courage. (Barton 1921))"
          },
          {
            "target": "Akok (pl. akokis)",
            "source": "Abdomen / Belly",
            "pronunciation": "ah-kohk",
            "hint": "Abdomen. Plural: Akokis. (Barton 1921)",
            "example": "Akok (pl. akokis) — Abdomen / Belly (Abdomen. Plural: Akokis. (Barton 1921))"
          },
          {
            "target": "Eboi (pl. ngaboyo)",
            "source": "Stomach",
            "pronunciation": "eh-boh-ee",
            "hint": "Internal stomach organ. (Barton 1921)",
            "example": "Eboi (pl. ngaboyo) — Stomach (Internal stomach organ. (Barton 1921))"
          },
          {
            "target": "Egur / Eguur (pl. ngurai / ngiguur)",
            "source": "Back",
            "pronunciation": "eh-goor",
            "hint": "Human back. (Barton 1921)",
            "example": "Egur / Eguur (pl. ngurai / ngiguur) — Back (Human back. (Barton 1921))"
          },
          {
            "target": "Akan (pl. ngakanin)",
            "source": "Arm / Hand",
            "pronunciation": "ah-kahn",
            "hint": "Hand or whole arm. Plural: Ngakanin. (Barton 1921)",
            "example": "Akan (pl. ngakanin) — Arm / Hand (Hand or whole arm. Plural: Ngakanin. (Barton 1921))"
          },
          {
            "target": "Etou ya akan (pl. ngetou ya ngakanin)",
            "source": "Palm of hand",
            "pronunciation": "eh-toh-oo yah ah-kahn",
            "hint": "Inner palm of hand. (Barton 1921)",
            "example": "Etou ya akan (pl. ngetou ya ngakanin) — Palm of hand (Inner palm of hand. (Barton 1921))"
          },
          {
            "target": "Ekimoin (pl. ngemoyo / ngimoyin)",
            "source": "Finger",
            "pronunciation": "eh-kee-moh-een",
            "hint": "Finger. Plural: Ngemoyo. (Barton 1921)",
            "example": "Ekimoin (pl. ngemoyo / ngimoyin) — Finger (Finger. Plural: Ngemoyo. (Barton 1921))"
          },
          {
            "target": "Ekimoin labuloi / nabolon",
            "source": "Thumb",
            "pronunciation": "eh-kee-moh-een lah-boo-loh-ee",
            "hint": "Thumb (lit. 'big finger'). (Barton 1921)",
            "example": "Ekimoin labuloi / nabolon — Thumb (Thumb (lit. 'big finger'). (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eret (pl. ngeretin)\" mean in English?",
            "correctAnswer": "Face",
            "options": [
              "Shoulder",
              "Chest",
              "Breast",
              "Face"
            ],
            "hint": "Face or brow. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ethiket / Ekeget (pl. ngethiketa / ngikegeta)\" mean in English?",
            "correctAnswer": "Shoulder",
            "options": [
              "Chest",
              "Breast",
              "Shoulder",
              "Face"
            ],
            "hint": "Shoulder. Plural: Ngethiketa. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Etorob (pl. ngatorobio)\" mean in English?",
            "correctAnswer": "Chest",
            "options": [
              "Breast",
              "Chest",
              "Face",
              "Shoulder"
            ],
            "hint": "Chest. Plural: Ngatorobio. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Chest\" in Turkana?",
            "correctAnswer": "Etorob (pl. ngatorobio)",
            "options": [
              "Etorob (pl. ngatorobio)",
              "Eret (pl. ngeretin)",
              "Ethiket / Ekeget (pl. ngethiketa / ngikegeta)",
              "Ethigina / Ekidi (pl. ngethigin)"
            ],
            "hint": "eh-toh-rohb"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Breast\" in Turkana?",
            "correctAnswer": "Ethigina / Ekidi (pl. ngethigin)",
            "options": [
              "Eret (pl. ngeretin)",
              "Ethiket / Ekeget (pl. ngethiketa / ngikegeta)",
              "Etorob (pl. ngatorobio)",
              "Ethigina / Ekidi (pl. ngethigin)"
            ],
            "hint": "eh-thee-gee-nah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Heart\" in Turkana?",
            "correctAnswer": "Etou / Etau (pl. ngetai / ngitai)",
            "options": [
              "Ethiket / Ekeget (pl. ngethiketa / ngikegeta)",
              "Etorob (pl. ngatorobio)",
              "Etou / Etau (pl. ngetai / ngitai)",
              "Eret (pl. ngeretin)"
            ],
            "hint": "eh-toh-oo / eh-tah-oo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Eret (pl. ngeretin): Face, Ethiket / Ekeget (pl. ngethiketa / ngikegeta): Shoulder, Etorob (pl. ngatorobio): Chest, Ethigina / Ekidi (pl. ngethigin): Breast",
            "pairs": [
              {
                "left": "Eret (pl. ngeretin)",
                "right": "Face"
              },
              {
                "left": "Ethiket / Ekeget (pl. ngethiketa / ngikegeta)",
                "right": "Shoulder"
              },
              {
                "left": "Etorob (pl. ngatorobio)",
                "right": "Chest"
              },
              {
                "left": "Ethigina / Ekidi (pl. ngethigin)",
                "right": "Breast"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Face\" in Turkana.",
            "correctAnswer": "Eret (pl. ngeretin)",
            "options": [
              "Eret (pl. ngeretin)",
              "Ethiket / Ekeget (pl. ngethiketa / ngikegeta)",
              "Etorob (pl. ngatorobio)",
              "Ethigina / Ekidi (pl. ngethigin)"
            ],
            "hint": "eh-reht"
          }
        ]
      },
      {
        "id": "turkana-exp-body-3",
        "title": "Body Parts (Part 3)",
        "icon": "Heart",
        "description": "Master Turkana body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Emargoit / Emagarit (pl. ngemagor)' (Fingernail / Claw), 'Akeju (pl. ngakeju)' (Leg), 'Akun / Akung (pl. ngakungin)' (Knee), 'Adapal akeju / Etou ya keju' (Foot / Sole).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Emargoit / Emagarit (pl. ngemagor)",
            "source": "Fingernail / Claw",
            "pronunciation": "eh-mahr-goh-eet",
            "hint": "Fingernail, claw, or animal hoof. (Barton 1921)",
            "example": "Emargoit / Emagarit (pl. ngemagor) — Fingernail / Claw (Fingernail, claw, or animal hoof. (Barton 1921))"
          },
          {
            "target": "Akeju (pl. ngakeju)",
            "source": "Leg",
            "pronunciation": "ah-keh-joo",
            "hint": "Leg or foot. Plural: Ngakeju. (Barton 1921)",
            "example": "Akeju (pl. ngakeju) — Leg (Leg or foot. Plural: Ngakeju. (Barton 1921))"
          },
          {
            "target": "Akun / Akung (pl. ngakungin)",
            "source": "Knee",
            "pronunciation": "ah-koon",
            "hint": "Knee joint. Plural: Ngakungin. (Barton 1921)",
            "example": "Akun / Akung (pl. ngakungin) — Knee (Knee joint. Plural: Ngakungin. (Barton 1921))"
          },
          {
            "target": "Adapal akeju / Etou ya keju",
            "source": "Foot / Sole",
            "pronunciation": "ah-dah-pahl ah-keh-joo",
            "hint": "Sole of foot. (Barton 1921)",
            "example": "Adapal akeju / Etou ya keju — Foot / Sole (Sole of foot. (Barton 1921))"
          },
          {
            "target": "Akimoin akejo (pl. ngakimmoio ngakeju)",
            "source": "Toe",
            "pronunciation": "eh-kee-moh-een ah-keh-joh",
            "hint": "Toe of the foot. (Barton 1921)",
            "example": "Akimoin akejo (pl. ngakimmoio ngakeju) — Toe (Toe of the foot. (Barton 1921))"
          },
          {
            "target": "Akoit (pl. ngakoiyo)",
            "source": "Bone",
            "pronunciation": "ah-koh-eet",
            "hint": "Bone. Plural: Ngakoiyo. (Barton 1921)",
            "example": "Akoit (pl. ngakoiyo) — Bone (Bone. Plural: Ngakoiyo. (Barton 1921))"
          },
          {
            "target": "Nakot / Ngakoot",
            "source": "Blood",
            "pronunciation": "nah-koht",
            "hint": "Living blood; also tapped as pastoral sustenance. (Barton 1921)",
            "example": "Nakot / Ngakoot — Blood (Living blood; also tapped as pastoral sustenance. (Barton 1921))"
          },
          {
            "target": "Akwan (pl. ngouwat) / Akirin (pl. ngakir)",
            "source": "Body / Flesh",
            "pronunciation": "ah-kwahn",
            "hint": "Human body or flesh. (Barton 1921)",
            "example": "Akwan (pl. ngouwat) / Akirin (pl. ngakir) — Body / Flesh (Human body or flesh. (Barton 1921))"
          },
          {
            "target": "Emun-ya / Ejim (pl. ngemunya / ngijimyo)",
            "source": "Skin",
            "pronunciation": "eh-moon-yah",
            "hint": "Human skin or dressed animal pelt. (Barton 1921)",
            "example": "Emun-ya / Ejim (pl. ngemunya / ngijimyo) — Skin (Human skin or dressed animal pelt. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          },
          {
            "target": "Epolok ngikiliok lu.",
            "source": "These men are strong and great."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emargoit / Emagarit (pl. ngemagor)\" mean in English?",
            "correctAnswer": "Fingernail / Claw",
            "options": [
              "Leg",
              "Knee",
              "Foot / Sole",
              "Fingernail / Claw"
            ],
            "hint": "Fingernail, claw, or animal hoof. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akeju (pl. ngakeju)\" mean in English?",
            "correctAnswer": "Leg",
            "options": [
              "Knee",
              "Foot / Sole",
              "Leg",
              "Fingernail / Claw"
            ],
            "hint": "Leg or foot. Plural: Ngakeju. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akun / Akung (pl. ngakungin)\" mean in English?",
            "correctAnswer": "Knee",
            "options": [
              "Foot / Sole",
              "Knee",
              "Fingernail / Claw",
              "Leg"
            ],
            "hint": "Knee joint. Plural: Ngakungin. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Knee\" in Turkana?",
            "correctAnswer": "Akun / Akung (pl. ngakungin)",
            "options": [
              "Akun / Akung (pl. ngakungin)",
              "Emargoit / Emagarit (pl. ngemagor)",
              "Akeju (pl. ngakeju)",
              "Adapal akeju / Etou ya keju"
            ],
            "hint": "ah-koon"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Foot / Sole\" in Turkana?",
            "correctAnswer": "Adapal akeju / Etou ya keju",
            "options": [
              "Emargoit / Emagarit (pl. ngemagor)",
              "Akeju (pl. ngakeju)",
              "Akun / Akung (pl. ngakungin)",
              "Adapal akeju / Etou ya keju"
            ],
            "hint": "ah-dah-pahl ah-keh-joo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Toe\" in Turkana?",
            "correctAnswer": "Akimoin akejo (pl. ngakimmoio ngakeju)",
            "options": [
              "Akeju (pl. ngakeju)",
              "Akun / Akung (pl. ngakungin)",
              "Akimoin akejo (pl. ngakimmoio ngakeju)",
              "Emargoit / Emagarit (pl. ngemagor)"
            ],
            "hint": "eh-kee-moh-een ah-keh-joh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Emargoit / Emagarit (pl. ngemagor): Fingernail / Claw, Akeju (pl. ngakeju): Leg, Akun / Akung (pl. ngakungin): Knee, Adapal akeju / Etou ya keju: Foot / Sole",
            "pairs": [
              {
                "left": "Emargoit / Emagarit (pl. ngemagor)",
                "right": "Fingernail / Claw"
              },
              {
                "left": "Akeju (pl. ngakeju)",
                "right": "Leg"
              },
              {
                "left": "Akun / Akung (pl. ngakungin)",
                "right": "Knee"
              },
              {
                "left": "Adapal akeju / Etou ya keju",
                "right": "Foot / Sole"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Fingernail / Claw\" in Turkana.",
            "correctAnswer": "Emargoit / Emagarit (pl. ngemagor)",
            "options": [
              "Emargoit / Emagarit (pl. ngemagor)",
              "Akeju (pl. ngakeju)",
              "Akun / Akung (pl. ngakungin)",
              "Adapal akeju / Etou ya keju"
            ],
            "hint": "eh-mahr-goh-eet"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-13-food",
    "title": "Unit 13: Food & Drink",
    "description": "Comprehensive Turkana curriculum for Food & Drink, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
    "icon": "Utensils",
    "skills": [
      {
        "id": "turkana-exp-food",
        "title": "Food & Drink (Part 1)",
        "icon": "Utensils",
        "description": "Master Turkana food & drink vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Food & Drink, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akirin (pl. ngakerin / ngakir)' (Meat), 'Akili / Ngakile' (Milk), 'Alepan' (Fresh milk), 'Ngakikok' (Curdled milk).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Akirin (pl. ngakerin / ngakir)",
            "source": "Meat",
            "pronunciation": "ah-kee-reen",
            "hint": "Meat from slaughtered livestock. (Barton 1921)",
            "example": "Akirin (pl. ngakerin / ngakir) — Meat (Meat from slaughtered livestock. (Barton 1921))"
          },
          {
            "target": "Akili / Ngakile",
            "source": "Milk",
            "pronunciation": "ah-kee-lee / ngah-kee-leh",
            "hint": "Fresh cow, camel, or goat milk. (Barton 1921)",
            "example": "Akili / Ngakile — Milk (Fresh cow, camel, or goat milk. (Barton 1921))"
          },
          {
            "target": "Alepan",
            "source": "Fresh milk",
            "pronunciation": "ah-leh-pahn",
            "hint": "Warm milk fresh from milking. (Barton 1921)",
            "example": "Alepan — Fresh milk (Warm milk fresh from milking. (Barton 1921))"
          },
          {
            "target": "Ngakikok",
            "source": "Curdled milk",
            "pronunciation": "ngah-kee-kohk",
            "hint": "Sour fermented milk curd, a dietary staple. (Barton 1921)",
            "example": "Ngakikok — Curdled milk (Sour fermented milk curd, a dietary staple. (Barton 1921))"
          },
          {
            "target": "Akimet (pl. ngakajonon / ngameta)",
            "source": "Butter / Ghee / Fat",
            "pronunciation": "ah-kee-meht",
            "hint": "Clarified butter or melted fat. (Barton 1921)",
            "example": "Akimet (pl. ngakajonon / ngameta) — Butter / Ghee / Fat (Clarified butter or melted fat. (Barton 1921))"
          },
          {
            "target": "Nyesik / Nadaka",
            "source": "Honey",
            "pronunciation": "nyeh-seek",
            "hint": "Wild bush honey collected from cliff and tree hives. (Barton 1921)",
            "example": "Nyesik / Nadaka — Honey (Wild bush honey collected from cliff and tree hives. (Barton 1921))"
          },
          {
            "target": "Ngapok",
            "source": "Soup / Broth",
            "pronunciation": "ngah-pohk",
            "hint": "Rich broth made by boiling meat and marrow bones. (Barton 1921)",
            "example": "Ngapok — Soup / Broth (Rich broth made by boiling meat and marrow bones. (Barton 1921))"
          },
          {
            "target": "Mumwa / Ngimumwa",
            "source": "Millet / Sorghum (grain)",
            "pronunciation": "moom-wah",
            "hint": "Drought-hardy sorghum grain cultivated in river floodplains. (Barton 1921)",
            "example": "Mumwa / Ngimumwa — Millet / Sorghum (grain) (Drought-hardy sorghum grain cultivated in river floodplains. (Barton 1921))"
          },
          {
            "target": "Ngakima",
            "source": "Eleusine / Finger millet",
            "pronunciation": "ngah-kee-mah",
            "hint": "Finger millet grain. (Barton 1921)",
            "example": "Ngakima — Eleusine / Finger millet (Finger millet grain. (Barton 1921))"
          },
          {
            "target": "Nyepepe / Ekabur",
            "source": "Maize",
            "pronunciation": "nyeh-peh-peh",
            "hint": "Corn / maize cobs. (Barton 1921)",
            "example": "Nyepepe / Ekabur — Maize (Corn / maize cobs. (Barton 1921))"
          },
          {
            "target": "Ngamari",
            "source": "Beans",
            "pronunciation": "ngah-mah-ree",
            "hint": "Cultivated beans. (Barton 1921)",
            "example": "Ngamari — Beans (Cultivated beans. (Barton 1921))"
          },
          {
            "target": "Ngakiriyek / Ngakirio",
            "source": "Flour",
            "pronunciation": "ngah-kee-ree-yehk",
            "hint": "Ground stone flour used for atap porridge. (Barton 1921)",
            "example": "Ngakiriyek / Ngakirio — Flour (Ground stone flour used for atap porridge. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akirin (pl. ngakerin / ngakir)\" mean in English?",
            "correctAnswer": "Meat",
            "options": [
              "Milk",
              "Fresh milk",
              "Curdled milk",
              "Meat"
            ],
            "hint": "Meat from slaughtered livestock. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akili / Ngakile\" mean in English?",
            "correctAnswer": "Milk",
            "options": [
              "Fresh milk",
              "Curdled milk",
              "Milk",
              "Meat"
            ],
            "hint": "Fresh cow, camel, or goat milk. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alepan\" mean in English?",
            "correctAnswer": "Fresh milk",
            "options": [
              "Curdled milk",
              "Fresh milk",
              "Meat",
              "Milk"
            ],
            "hint": "Warm milk fresh from milking. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fresh milk\" in Turkana?",
            "correctAnswer": "Alepan",
            "options": [
              "Alepan",
              "Akirin (pl. ngakerin / ngakir)",
              "Akili / Ngakile",
              "Ngakikok"
            ],
            "hint": "ah-leh-pahn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Curdled milk\" in Turkana?",
            "correctAnswer": "Ngakikok",
            "options": [
              "Akirin (pl. ngakerin / ngakir)",
              "Akili / Ngakile",
              "Alepan",
              "Ngakikok"
            ],
            "hint": "ngah-kee-kohk"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Butter / Ghee / Fat\" in Turkana?",
            "correctAnswer": "Akimet (pl. ngakajonon / ngameta)",
            "options": [
              "Akili / Ngakile",
              "Alepan",
              "Akimet (pl. ngakajonon / ngameta)",
              "Akirin (pl. ngakerin / ngakir)"
            ],
            "hint": "ah-kee-meht"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Akirin (pl. ngakerin / ngakir): Meat, Akili / Ngakile: Milk, Alepan: Fresh milk, Ngakikok: Curdled milk",
            "pairs": [
              {
                "left": "Akirin (pl. ngakerin / ngakir)",
                "right": "Meat"
              },
              {
                "left": "Akili / Ngakile",
                "right": "Milk"
              },
              {
                "left": "Alepan",
                "right": "Fresh milk"
              },
              {
                "left": "Ngakikok",
                "right": "Curdled milk"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Meat\" in Turkana.",
            "correctAnswer": "Akirin (pl. ngakerin / ngakir)",
            "options": [
              "Akirin (pl. ngakerin / ngakir)",
              "Akili / Ngakile",
              "Alepan",
              "Ngakikok"
            ],
            "hint": "ah-kee-reen"
          }
        ]
      },
      {
        "id": "turkana-exp-food-2",
        "title": "Food & Drink (Part 2)",
        "icon": "Utensils",
        "description": "Master Turkana food & drink vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Food & Drink, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akimoich / Akimuj (pl. ngimocha)' (Food (provisions)), 'Ng'akipi / Agipi' (Drinking water), 'Edot (pl. ngedotin)' (Salt / Salt-lick), 'Enyakait (pl. nganyakaita)' (Chewing tobacco).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Akimoich / Akimuj (pl. ngimocha)",
            "source": "Food (provisions)",
            "pronunciation": "ah-kee-moh-eech",
            "hint": "Food and subsistence sustenance. (Barton 1921)",
            "example": "Akimoich / Akimuj (pl. ngimocha) — Food (provisions) (Food and subsistence sustenance. (Barton 1921))"
          },
          {
            "target": "Ng'akipi / Agipi",
            "source": "Drinking water",
            "pronunciation": "ngah-kee-pee",
            "hint": "Drinking water drawn from wells. (Barton 1921)",
            "example": "Ng'akipi / Agipi — Drinking water (Drinking water drawn from wells. (Barton 1921))"
          },
          {
            "target": "Edot (pl. ngedotin)",
            "source": "Salt / Salt-lick",
            "pronunciation": "eh-doht",
            "hint": "Mineral-rich soil and salt ingested by stock. (Barton 1921)",
            "example": "Edot (pl. ngedotin) — Salt / Salt-lick (Mineral-rich soil and salt ingested by stock. (Barton 1921))"
          },
          {
            "target": "Enyakait (pl. nganyakaita)",
            "source": "Chewing tobacco",
            "pronunciation": "eh-nyah-kah-eet",
            "hint": "Traditional cured tobacco chewed with ash. (Barton 1921)",
            "example": "Enyakait (pl. nganyakaita) — Chewing tobacco (Traditional cured tobacco chewed with ash. (Barton 1921))"
          },
          {
            "target": "Etaba ekumi (pl. ngetabin ekumi)",
            "source": "Snuff tobacco",
            "pronunciation": "eh-tah-bah eh-koo-mee",
            "hint": "Aromatic fine snuff powder. (Barton 1921)",
            "example": "Etaba ekumi (pl. ngetabin ekumi) — Snuff tobacco (Aromatic fine snuff powder. (Barton 1921))"
          },
          {
            "target": "Eparani / Ngagwe",
            "source": "Traditional beer",
            "pronunciation": "eh-pah-rah-nee",
            "hint": "Locally fermented grain and honey beer brewed for ceremonies.",
            "example": "Eparani / Ngagwe — Traditional beer (Locally fermented grain and honey beer brewed for ceremonies.)"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akimoich / Akimuj (pl. ngimocha)\" mean in English?",
            "correctAnswer": "Food (provisions)",
            "options": [
              "Drinking water",
              "Salt / Salt-lick",
              "Chewing tobacco",
              "Food (provisions)"
            ],
            "hint": "Food and subsistence sustenance. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ng'akipi / Agipi\" mean in English?",
            "correctAnswer": "Drinking water",
            "options": [
              "Salt / Salt-lick",
              "Chewing tobacco",
              "Drinking water",
              "Food (provisions)"
            ],
            "hint": "Drinking water drawn from wells. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Edot (pl. ngedotin)\" mean in English?",
            "correctAnswer": "Salt / Salt-lick",
            "options": [
              "Chewing tobacco",
              "Salt / Salt-lick",
              "Food (provisions)",
              "Drinking water"
            ],
            "hint": "Mineral-rich soil and salt ingested by stock. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Salt / Salt-lick\" in Turkana?",
            "correctAnswer": "Edot (pl. ngedotin)",
            "options": [
              "Edot (pl. ngedotin)",
              "Akimoich / Akimuj (pl. ngimocha)",
              "Ng'akipi / Agipi",
              "Enyakait (pl. nganyakaita)"
            ],
            "hint": "eh-doht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Chewing tobacco\" in Turkana?",
            "correctAnswer": "Enyakait (pl. nganyakaita)",
            "options": [
              "Akimoich / Akimuj (pl. ngimocha)",
              "Ng'akipi / Agipi",
              "Edot (pl. ngedotin)",
              "Enyakait (pl. nganyakaita)"
            ],
            "hint": "eh-nyah-kah-eet"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Snuff tobacco\" in Turkana?",
            "correctAnswer": "Etaba ekumi (pl. ngetabin ekumi)",
            "options": [
              "Ng'akipi / Agipi",
              "Edot (pl. ngedotin)",
              "Etaba ekumi (pl. ngetabin ekumi)",
              "Akimoich / Akimuj (pl. ngimocha)"
            ],
            "hint": "eh-tah-bah eh-koo-mee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Akimoich / Akimuj (pl. ngimocha): Food (provisions), Ng'akipi / Agipi: Drinking water, Edot (pl. ngedotin): Salt / Salt-lick, Enyakait (pl. nganyakaita): Chewing tobacco",
            "pairs": [
              {
                "left": "Akimoich / Akimuj (pl. ngimocha)",
                "right": "Food (provisions)"
              },
              {
                "left": "Ng'akipi / Agipi",
                "right": "Drinking water"
              },
              {
                "left": "Edot (pl. ngedotin)",
                "right": "Salt / Salt-lick"
              },
              {
                "left": "Enyakait (pl. nganyakaita)",
                "right": "Chewing tobacco"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Food (provisions)\" in Turkana.",
            "correctAnswer": "Akimoich / Akimuj (pl. ngimocha)",
            "options": [
              "Akimoich / Akimuj (pl. ngimocha)",
              "Ng'akipi / Agipi",
              "Edot (pl. ngedotin)",
              "Enyakait (pl. nganyakaita)"
            ],
            "hint": "ah-kee-moh-eech"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-14-home",
    "title": "Unit 14: Home & Material Culture",
    "description": "Comprehensive Turkana curriculum for Home & Material Culture, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
    "icon": "Home",
    "skills": [
      {
        "id": "turkana-exp-home",
        "title": "Home & Material Culture (Part 1)",
        "icon": "Home",
        "description": "Master Turkana home & material culture vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Home & Material Culture, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ouwi / Nawi (pl. ngouwi / ngawiyoi)' (Homestead / Village), 'Akie / Akai (pl. ngakiyis / ngkais)' (House / Family hut), 'Akidor (pl. ngidorin / ngikidoria)' (Door / Kraal gate), 'Anuk / Anok (pl. nganukim / ngokin)' (Cattle kraal / Enclosure).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ouwi / Nawi (pl. ngouwi / ngawiyoi)",
            "source": "Homestead / Village",
            "pronunciation": "oh-wee / nah-wee",
            "hint": "Nomadic pastoral kraal and family settlement. (Barton 1921)",
            "example": "Ouwi / Nawi (pl. ngouwi / ngawiyoi) — Homestead / Village (Nomadic pastoral kraal and family settlement. (Barton 1921))"
          },
          {
            "target": "Akie / Akai (pl. ngakiyis / ngkais)",
            "source": "House / Family hut",
            "pronunciation": "ah-kee-eh / ah-kah-ee",
            "hint": "Domed sleeping shelter framed with bent branches and thatched. (Barton 1921)",
            "example": "Akie / Akai (pl. ngakiyis / ngkais) — House / Family hut (Domed sleeping shelter framed with bent branches and thatched. (Barton 1921))"
          },
          {
            "target": "Akidor (pl. ngidorin / ngikidoria)",
            "source": "Door / Kraal gate",
            "pronunciation": "ah-kee-dohr",
            "hint": "Entrance gate in the thorn bush perimeter of the kraal. (Barton 1921)",
            "example": "Akidor (pl. ngidorin / ngikidoria) — Door / Kraal gate (Entrance gate in the thorn bush perimeter of the kraal. (Barton 1921))"
          },
          {
            "target": "Anuk / Anok (pl. nganukim / ngokin)",
            "source": "Cattle kraal / Enclosure",
            "pronunciation": "ah-nook",
            "hint": "Thorn barrier enclosing livestock overnight. (Barton 1921)",
            "example": "Anuk / Anok (pl. nganukim / ngokin) — Cattle kraal / Enclosure (Thorn barrier enclosing livestock overnight. (Barton 1921))"
          },
          {
            "target": "Achokor (pl. ngachokoritho)",
            "source": "Grazing ground",
            "pronunciation": "ah-choh-kohr",
            "hint": "Designated pasture territory for herds. (Barton 1921)",
            "example": "Achokor (pl. ngachokoritho) — Grazing ground (Designated pasture territory for herds. (Barton 1921))"
          },
          {
            "target": "Ipem / Epem (pl. nyepemin / ngapemiok)",
            "source": "Bed / Sleeping mat",
            "pronunciation": "ee-pehm / eh-pehm",
            "hint": "Raised wooden platform bed. (Barton 1921)",
            "example": "Ipem / Epem (pl. nyepemin / ngapemiok) — Bed / Sleeping mat (Raised wooden platform bed. (Barton 1921))"
          },
          {
            "target": "Ekijolon / Ekicholong (pl. ngijolona / ngikicholonga)",
            "source": "Carved headrest / Stool",
            "pronunciation": "eh-kee-joh-lohn / eh-kee-choh-lohng",
            "hint": "Iconic carved wooden headrest carried everywhere by Turkana men. (Barton 1921)",
            "example": "Ekijolon / Ekicholong (pl. ngijolona / ngikicholonga) — Carved headrest / Stool (Iconic carved wooden headrest carried everywhere by Turkana men. (Barton 1921))"
          },
          {
            "target": "Emaguk (pl. ngemogaka)",
            "source": "Sitting stool",
            "pronunciation": "eh-mah-gook",
            "hint": "Low wooden stool for resting in the compound. (Barton 1921)",
            "example": "Emaguk (pl. ngemogaka) — Sitting stool (Low wooden stool for resting in the compound. (Barton 1921))"
          },
          {
            "target": "Etu / Itu (pl. ngetuel / ngetui)",
            "source": "Calabash / Milk gourd",
            "pronunciation": "eh-too",
            "hint": "Dried gourd vessel used for churning and drinking milk. (Barton 1921)",
            "example": "Etu / Itu (pl. ngetuel / ngetui) — Calabash / Milk gourd (Dried gourd vessel used for churning and drinking milk. (Barton 1921))"
          },
          {
            "target": "Edera / Eboli (pl. ngaderai / ngibolai)",
            "source": "Half gourd / Drinking cup",
            "pronunciation": "eh-deh-rah",
            "hint": "Hemispherical gourd cup. (Barton 1921)",
            "example": "Edera / Eboli (pl. ngaderai / ngibolai) — Half gourd / Drinking cup (Hemispherical gourd cup. (Barton 1921))"
          },
          {
            "target": "Elipit (pl. ngilipai)",
            "source": "Wooden milk bowl",
            "pronunciation": "eh-lee-peet",
            "hint": "Carved wooden bowl for sipping milk. (Barton 1921)",
            "example": "Elipit (pl. ngilipai) — Wooden milk bowl (Carved wooden bowl for sipping milk. (Barton 1921))"
          },
          {
            "target": "Emwut (pl. ngemwuti)",
            "source": "Large water jar",
            "pronunciation": "eh-mwoot",
            "hint": "Water storage container. (Barton 1921)",
            "example": "Emwut (pl. ngemwuti) — Large water jar (Water storage container. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ouwi / Nawi (pl. ngouwi / ngawiyoi)\" mean in English?",
            "correctAnswer": "Homestead / Village",
            "options": [
              "House / Family hut",
              "Door / Kraal gate",
              "Cattle kraal / Enclosure",
              "Homestead / Village"
            ],
            "hint": "Nomadic pastoral kraal and family settlement. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akie / Akai (pl. ngakiyis / ngkais)\" mean in English?",
            "correctAnswer": "House / Family hut",
            "options": [
              "Door / Kraal gate",
              "Cattle kraal / Enclosure",
              "House / Family hut",
              "Homestead / Village"
            ],
            "hint": "Domed sleeping shelter framed with bent branches and thatched. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akidor (pl. ngidorin / ngikidoria)\" mean in English?",
            "correctAnswer": "Door / Kraal gate",
            "options": [
              "Cattle kraal / Enclosure",
              "Door / Kraal gate",
              "Homestead / Village",
              "House / Family hut"
            ],
            "hint": "Entrance gate in the thorn bush perimeter of the kraal. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Door / Kraal gate\" in Turkana?",
            "correctAnswer": "Akidor (pl. ngidorin / ngikidoria)",
            "options": [
              "Akidor (pl. ngidorin / ngikidoria)",
              "Ouwi / Nawi (pl. ngouwi / ngawiyoi)",
              "Akie / Akai (pl. ngakiyis / ngkais)",
              "Anuk / Anok (pl. nganukim / ngokin)"
            ],
            "hint": "ah-kee-dohr"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cattle kraal / Enclosure\" in Turkana?",
            "correctAnswer": "Anuk / Anok (pl. nganukim / ngokin)",
            "options": [
              "Ouwi / Nawi (pl. ngouwi / ngawiyoi)",
              "Akie / Akai (pl. ngakiyis / ngkais)",
              "Akidor (pl. ngidorin / ngikidoria)",
              "Anuk / Anok (pl. nganukim / ngokin)"
            ],
            "hint": "ah-nook"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Grazing ground\" in Turkana?",
            "correctAnswer": "Achokor (pl. ngachokoritho)",
            "options": [
              "Akie / Akai (pl. ngakiyis / ngkais)",
              "Akidor (pl. ngidorin / ngikidoria)",
              "Achokor (pl. ngachokoritho)",
              "Ouwi / Nawi (pl. ngouwi / ngawiyoi)"
            ],
            "hint": "ah-choh-kohr"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ouwi / Nawi (pl. ngouwi / ngawiyoi): Homestead / Village, Akie / Akai (pl. ngakiyis / ngkais): House / Family hut, Akidor (pl. ngidorin / ngikidoria): Door / Kraal gate, Anuk / Anok (pl. nganukim / ngokin): Cattle kraal / Enclosure",
            "pairs": [
              {
                "left": "Ouwi / Nawi (pl. ngouwi / ngawiyoi)",
                "right": "Homestead / Village"
              },
              {
                "left": "Akie / Akai (pl. ngakiyis / ngkais)",
                "right": "House / Family hut"
              },
              {
                "left": "Akidor (pl. ngidorin / ngikidoria)",
                "right": "Door / Kraal gate"
              },
              {
                "left": "Anuk / Anok (pl. nganukim / ngokin)",
                "right": "Cattle kraal / Enclosure"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Homestead / Village\" in Turkana.",
            "correctAnswer": "Ouwi / Nawi (pl. ngouwi / ngawiyoi)",
            "options": [
              "Ouwi / Nawi (pl. ngouwi / ngawiyoi)",
              "Akie / Akai (pl. ngakiyis / ngkais)",
              "Akidor (pl. ngidorin / ngikidoria)",
              "Anuk / Anok (pl. nganukim / ngokin)"
            ],
            "hint": "oh-wee / nah-wee"
          }
        ]
      },
      {
        "id": "turkana-exp-home-2",
        "title": "Home & Material Culture (Part 2)",
        "icon": "Home",
        "description": "Master Turkana home & material culture vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Home & Material Culture, pay special attention to pronunciation and morphological prefixes/suffixes: 'Amut (pl. ngamuti)' (Cooking pot), 'Akolopoich (pl. ngolopoicha)' (Traditional wooden spoon), 'Eteker / Etuba (pl. ngatekera / ngatubai)' (Watering trough), 'Akim (pl. ngakimia)' (Fire).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Amut (pl. ngamuti)",
            "source": "Cooking pot",
            "pronunciation": "ah-moot",
            "hint": "Earthen pot set over hearth stones. (Barton 1921)",
            "example": "Amut (pl. ngamuti) — Cooking pot (Earthen pot set over hearth stones. (Barton 1921))"
          },
          {
            "target": "Akolopoich (pl. ngolopoicha)",
            "source": "Traditional wooden spoon",
            "pronunciation": "ah-koh-loh-poh-eech",
            "hint": "Carved wooden spoon. (Barton 1921)",
            "example": "Akolopoich (pl. ngolopoicha) — Traditional wooden spoon (Carved wooden spoon. (Barton 1921))"
          },
          {
            "target": "Eteker / Etuba (pl. ngatekera / ngatubai)",
            "source": "Watering trough",
            "pronunciation": "eh-teh-kehr",
            "hint": "Carved wooden log trough into which well water is poured for cattle. (Barton 1921)",
            "example": "Eteker / Etuba (pl. ngatekera / ngatubai) — Watering trough (Carved wooden log trough into which well water is poured for cattle. (Barton 1921))"
          },
          {
            "target": "Akim (pl. ngakimia)",
            "source": "Fire",
            "pronunciation": "ah-keem",
            "hint": "Homestead fire providing light and predator defense. (Barton 1921)",
            "example": "Akim (pl. ngakimia) — Fire (Homestead fire providing light and predator defense. (Barton 1921))"
          },
          {
            "target": "Akitoi (pl. ngakito)",
            "source": "Firewood",
            "pronunciation": "ah-kee-toh-ee",
            "hint": "Dry firewood branches. (Barton 1921)",
            "example": "Akitoi (pl. ngakito) — Firewood (Dry firewood branches. (Barton 1921))"
          },
          {
            "target": "Akikoi akim (pl. ngakitoi akim)",
            "source": "Fire-making stick",
            "pronunciation": "ah-kee-koh-ee ah-keem",
            "hint": "Friction stick pair spun by hand to produce embers. (Barton 1921)",
            "example": "Akikoi akim (pl. ngakitoi akim) — Fire-making stick (Friction stick pair spun by hand to produce embers. (Barton 1921))"
          },
          {
            "target": "Apurru / Apuru",
            "source": "Smoke",
            "pronunciation": "ah-poo-roo",
            "hint": "Hearth smoke that repels biting flies. (Barton 1921)",
            "example": "Apurru / Apuru — Smoke (Hearth smoke that repels biting flies. (Barton 1921))"
          },
          {
            "target": "Amukat (pl. ngamuk)",
            "source": "Leather sandals",
            "pronunciation": "ah-moo-kaht",
            "hint": "Thick hide or tire sandals protecting feet from thorns and scorching sand. (Barton 1921)",
            "example": "Amukat (pl. ngamuk) — Leather sandals (Thick hide or tire sandals protecting feet from thorns and scorching sand. (Barton 1921))"
          },
          {
            "target": "Erwaro / Ouoro (pl. ngerwaroi / ngouario)",
            "source": "Cloth wrap",
            "pronunciation": "ehr-wah-roh",
            "hint": "Woven cloth garment. (Barton 1921)",
            "example": "Erwaro / Ouoro (pl. ngerwaroi / ngouario) — Cloth wrap (Woven cloth garment. (Barton 1921))"
          },
          {
            "target": "Elo (pl. ngeloue)",
            "source": "Hide garment",
            "pronunciation": "eh-loh",
            "hint": "Traditional leather skin garment. (Barton 1921)",
            "example": "Elo (pl. ngeloue) — Hide garment (Traditional leather skin garment. (Barton 1921))"
          },
          {
            "target": "Asowat (pl. ngathua)",
            "source": "Iron bracelet",
            "pronunciation": "ah-soh-waht",
            "hint": "Forged iron bracelet. (Barton 1921)",
            "example": "Asowat (pl. ngathua) — Iron bracelet (Forged iron bracelet. (Barton 1921))"
          },
          {
            "target": "Maritoit (pl. maritoi)",
            "source": "Brass bracelet",
            "pronunciation": "mah-ree-toh-eet",
            "hint": "Ornamental brass jewelry bracelet. (Barton 1921)",
            "example": "Maritoit (pl. maritoi) — Brass bracelet (Ornamental brass jewelry bracelet. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Amut (pl. ngamuti)\" mean in English?",
            "correctAnswer": "Cooking pot",
            "options": [
              "Traditional wooden spoon",
              "Watering trough",
              "Fire",
              "Cooking pot"
            ],
            "hint": "Earthen pot set over hearth stones. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akolopoich (pl. ngolopoicha)\" mean in English?",
            "correctAnswer": "Traditional wooden spoon",
            "options": [
              "Watering trough",
              "Fire",
              "Traditional wooden spoon",
              "Cooking pot"
            ],
            "hint": "Carved wooden spoon. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eteker / Etuba (pl. ngatekera / ngatubai)\" mean in English?",
            "correctAnswer": "Watering trough",
            "options": [
              "Fire",
              "Watering trough",
              "Cooking pot",
              "Traditional wooden spoon"
            ],
            "hint": "Carved wooden log trough into which well water is poured for cattle. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Watering trough\" in Turkana?",
            "correctAnswer": "Eteker / Etuba (pl. ngatekera / ngatubai)",
            "options": [
              "Eteker / Etuba (pl. ngatekera / ngatubai)",
              "Amut (pl. ngamuti)",
              "Akolopoich (pl. ngolopoicha)",
              "Akim (pl. ngakimia)"
            ],
            "hint": "eh-teh-kehr"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fire\" in Turkana?",
            "correctAnswer": "Akim (pl. ngakimia)",
            "options": [
              "Amut (pl. ngamuti)",
              "Akolopoich (pl. ngolopoicha)",
              "Eteker / Etuba (pl. ngatekera / ngatubai)",
              "Akim (pl. ngakimia)"
            ],
            "hint": "ah-keem"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Firewood\" in Turkana?",
            "correctAnswer": "Akitoi (pl. ngakito)",
            "options": [
              "Akolopoich (pl. ngolopoicha)",
              "Eteker / Etuba (pl. ngatekera / ngatubai)",
              "Akitoi (pl. ngakito)",
              "Amut (pl. ngamuti)"
            ],
            "hint": "ah-kee-toh-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Amut (pl. ngamuti): Cooking pot, Akolopoich (pl. ngolopoicha): Traditional wooden spoon, Eteker / Etuba (pl. ngatekera / ngatubai): Watering trough, Akim (pl. ngakimia): Fire",
            "pairs": [
              {
                "left": "Amut (pl. ngamuti)",
                "right": "Cooking pot"
              },
              {
                "left": "Akolopoich (pl. ngolopoicha)",
                "right": "Traditional wooden spoon"
              },
              {
                "left": "Eteker / Etuba (pl. ngatekera / ngatubai)",
                "right": "Watering trough"
              },
              {
                "left": "Akim (pl. ngakimia)",
                "right": "Fire"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Cooking pot\" in Turkana.",
            "correctAnswer": "Amut (pl. ngamuti)",
            "options": [
              "Amut (pl. ngamuti)",
              "Akolopoich (pl. ngolopoicha)",
              "Eteker / Etuba (pl. ngatekera / ngatubai)",
              "Akim (pl. ngakimia)"
            ],
            "hint": "ah-moot"
          }
        ]
      },
      {
        "id": "turkana-exp-home-3",
        "title": "Home & Material Culture (Part 3)",
        "icon": "Home",
        "description": "Master Turkana home & material culture vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Home & Material Culture, pay special attention to pronunciation and morphological prefixes/suffixes: 'Amedok (pl. ngemedoi)' (Mud head-dress), 'Eburiangan (pl. ngeburianganga)' (Tobacco box), 'Echui (pl. ngechuin)' (Skin pouch / Bag), 'Echiro (pl. ngichiroi)' (Market).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Amedok (pl. ngemedoi)",
            "source": "Mud head-dress",
            "pronunciation": "ah-meh-dohk",
            "hint": "Sculpted clay and blue-pigment coiffure worn by initiated Turkana men. (Barton 1921)",
            "example": "Amedok (pl. ngemedoi) — Mud head-dress (Sculpted clay and blue-pigment coiffure worn by initiated Turkana men. (Barton 1921))"
          },
          {
            "target": "Eburiangan (pl. ngeburianganga)",
            "source": "Tobacco box",
            "pronunciation": "eh-boo-ree-ahn-gahn",
            "hint": "Carved horn container holding tobacco. (Barton 1921)",
            "example": "Eburiangan (pl. ngeburianganga) — Tobacco box (Carved horn container holding tobacco. (Barton 1921))"
          },
          {
            "target": "Echui (pl. ngechuin)",
            "source": "Skin pouch / Bag",
            "pronunciation": "eh-choo-ee",
            "hint": "Leather carrying pouch. (Barton 1921)",
            "example": "Echui (pl. ngechuin) — Skin pouch / Bag (Leather carrying pouch. (Barton 1921))"
          },
          {
            "target": "Echiro (pl. ngichiroi)",
            "source": "Market",
            "pronunciation": "eh-chee-roh",
            "hint": "Trading market center.",
            "example": "Echiro (pl. ngichiroi) — Market (Trading market center.)"
          },
          {
            "target": "Edukan (pl. ngidukano)",
            "source": "Shop",
            "pronunciation": "eh-doo-kahn",
            "hint": "Trading store.",
            "example": "Edukan (pl. ngidukano) — Shop (Trading store.)"
          },
          {
            "target": "Eosipitoli / Akai a ngidekei",
            "source": "Hospital",
            "pronunciation": "eh-oh-see-pee-toh-lee",
            "hint": "Medical clinic (lit. 'house of illnesses').",
            "example": "Eosipitoli / Akai a ngidekei — Hospital (Medical clinic (lit. 'house of illnesses').)"
          }
        ],
        "sentences": [
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          },
          {
            "target": "Epolok ngikiliok lu.",
            "source": "These men are strong and great."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Amedok (pl. ngemedoi)\" mean in English?",
            "correctAnswer": "Mud head-dress",
            "options": [
              "Tobacco box",
              "Skin pouch / Bag",
              "Market",
              "Mud head-dress"
            ],
            "hint": "Sculpted clay and blue-pigment coiffure worn by initiated Turkana men. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eburiangan (pl. ngeburianganga)\" mean in English?",
            "correctAnswer": "Tobacco box",
            "options": [
              "Skin pouch / Bag",
              "Market",
              "Tobacco box",
              "Mud head-dress"
            ],
            "hint": "Carved horn container holding tobacco. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Echui (pl. ngechuin)\" mean in English?",
            "correctAnswer": "Skin pouch / Bag",
            "options": [
              "Market",
              "Skin pouch / Bag",
              "Mud head-dress",
              "Tobacco box"
            ],
            "hint": "Leather carrying pouch. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Skin pouch / Bag\" in Turkana?",
            "correctAnswer": "Echui (pl. ngechuin)",
            "options": [
              "Echui (pl. ngechuin)",
              "Amedok (pl. ngemedoi)",
              "Eburiangan (pl. ngeburianganga)",
              "Echiro (pl. ngichiroi)"
            ],
            "hint": "eh-choo-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Market\" in Turkana?",
            "correctAnswer": "Echiro (pl. ngichiroi)",
            "options": [
              "Amedok (pl. ngemedoi)",
              "Eburiangan (pl. ngeburianganga)",
              "Echui (pl. ngechuin)",
              "Echiro (pl. ngichiroi)"
            ],
            "hint": "eh-chee-roh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Shop\" in Turkana?",
            "correctAnswer": "Edukan (pl. ngidukano)",
            "options": [
              "Eburiangan (pl. ngeburianganga)",
              "Echui (pl. ngechuin)",
              "Edukan (pl. ngidukano)",
              "Amedok (pl. ngemedoi)"
            ],
            "hint": "eh-doo-kahn"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Amedok (pl. ngemedoi): Mud head-dress, Eburiangan (pl. ngeburianganga): Tobacco box, Echui (pl. ngechuin): Skin pouch / Bag, Echiro (pl. ngichiroi): Market",
            "pairs": [
              {
                "left": "Amedok (pl. ngemedoi)",
                "right": "Mud head-dress"
              },
              {
                "left": "Eburiangan (pl. ngeburianganga)",
                "right": "Tobacco box"
              },
              {
                "left": "Echui (pl. ngechuin)",
                "right": "Skin pouch / Bag"
              },
              {
                "left": "Echiro (pl. ngichiroi)",
                "right": "Market"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Mud head-dress\" in Turkana.",
            "correctAnswer": "Amedok (pl. ngemedoi)",
            "options": [
              "Amedok (pl. ngemedoi)",
              "Eburiangan (pl. ngeburianganga)",
              "Echui (pl. ngechuin)",
              "Echiro (pl. ngichiroi)"
            ],
            "hint": "ah-meh-dohk"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-15-weapons-tools",
    "title": "Unit 15: Weapons & Tools",
    "description": "Comprehensive Turkana curriculum for Weapons & Tools, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
    "icon": "Shield",
    "skills": [
      {
        "id": "turkana-exp-weapons-tools",
        "title": "Weapons & Tools (Part 1)",
        "icon": "Shield",
        "description": "Master Turkana weapons & tools vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Weapons & Tools, pay special attention to pronunciation and morphological prefixes/suffixes: 'Akwara / A'kwara (pl. ngakwarath / ngawarath)' (Spear), 'Emorok (pl. ngemorkin)' (Spear shaft), 'Akuraro (pl. ngakuraroi)' (Spear sheath), 'Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)' (Shield).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Akwara / A'kwara (pl. ngakwarath / ngawarath)",
            "source": "Spear",
            "pronunciation": "ah-kwah-rah",
            "hint": "Long slender iron spear carried by warriors and elders for defense. (Barton 1921)",
            "example": "Akwara / A'kwara (pl. ngakwarath / ngawarath) — Spear (Long slender iron spear carried by warriors and elders for defense. (Barton 1921))"
          },
          {
            "target": "Emorok (pl. ngemorkin)",
            "source": "Spear shaft",
            "pronunciation": "eh-moh-rohk",
            "hint": "Polished hardwood shaft connecting spear blade and iron butt. (Barton 1921)",
            "example": "Emorok (pl. ngemorkin) — Spear shaft (Polished hardwood shaft connecting spear blade and iron butt. (Barton 1921))"
          },
          {
            "target": "Akuraro (pl. ngakuraroi)",
            "source": "Spear sheath",
            "pronunciation": "ah-koo-rah-roh",
            "hint": "Decorated leather cap shielding the spearhead tip. (Barton 1921)",
            "example": "Akuraro (pl. ngakuraroi) — Spear sheath (Decorated leather cap shielding the spearhead tip. (Barton 1921))"
          },
          {
            "target": "Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)",
            "source": "Shield",
            "pronunciation": "oh-pwohl / eh-gwoh",
            "hint": "Elongated battle shield formed of thick cured buffalo or giraffe leather. (Barton 1921)",
            "example": "Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi) — Shield (Elongated battle shield formed of thick cured buffalo or giraffe leather. (Barton 1921))"
          },
          {
            "target": "Ekileng / A'kileng (pl. ngakilengya / ngilenya)",
            "source": "Knife",
            "pronunciation": "eh-kee-lehng",
            "hint": "Iron knife used for utility and defense. (Barton 1921)",
            "example": "Ekileng / A'kileng (pl. ngakilengya / ngilenya) — Knife (Iron knife used for utility and defense. (Barton 1921))"
          },
          {
            "target": "Abarait (pl. ngibara)",
            "source": "Wrist knife (Abarait)",
            "pronunciation": "ah-bah-rah-eet",
            "hint": "Famous circular razor-sharp steel blade worn on the wrist for hand combat and daily tasks. (Barton 1921)",
            "example": "Abarait (pl. ngibara) — Wrist knife (Abarait) (Famous circular razor-sharp steel blade worn on the wrist for hand combat and daily tasks. (Barton 1921))"
          },
          {
            "target": "Akoli (pl. ngakoli)",
            "source": "Finger knife",
            "pronunciation": "ah-koh-lee",
            "hint": "Small curved iron hook knife worn on a finger. (Barton 1921)",
            "example": "Akoli (pl. ngakoli) — Finger knife (Small curved iron hook knife worn on a finger. (Barton 1921))"
          },
          {
            "target": "Ebiro (pl. ngiberoi)",
            "source": "Fighting club / Rungu",
            "pronunciation": "eh-bee-roh",
            "hint": "Weighted heavy wooden throwing club. (Barton 1921)",
            "example": "Ebiro (pl. ngiberoi) — Fighting club / Rungu (Weighted heavy wooden throwing club. (Barton 1921))"
          },
          {
            "target": "Ebelebel (pl. ngebelebellai)",
            "source": "Curved throwing stick",
            "pronunciation": "eh-beh-leh-behl",
            "hint": "Flat curved throwing weapon used in hunting and close combat. (Barton 1921)",
            "example": "Ebelebel (pl. ngebelebellai) — Curved throwing stick (Flat curved throwing weapon used in hunting and close combat. (Barton 1921))"
          },
          {
            "target": "Ebela (pl. ngabellai)",
            "source": "Shepherd's stick",
            "pronunciation": "eh-beh-lah",
            "hint": "Long walking stick carried by shepherds to guide stock. (Barton 1921)",
            "example": "Ebela (pl. ngabellai) — Shepherd's stick (Long walking stick carried by shepherds to guide stock. (Barton 1921))"
          },
          {
            "target": "Akou (pl. ngakouō)",
            "source": "Bow",
            "pronunciation": "ah-koh-oo",
            "hint": "Hunting bow strung with animal sinew. (Barton 1921)",
            "example": "Akou (pl. ngakouō) — Bow (Hunting bow strung with animal sinew. (Barton 1921))"
          },
          {
            "target": "Akoiyet (pl. ngoi)",
            "source": "Arrow",
            "pronunciation": "ah-koh-ee-yeht",
            "hint": "Iron-barbed arrow. (Barton 1921)",
            "example": "Akoiyet (pl. ngoi) — Arrow (Iron-barbed arrow. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akwara / A'kwara (pl. ngakwarath / ngawarath)\" mean in English?",
            "correctAnswer": "Spear",
            "options": [
              "Spear shaft",
              "Spear sheath",
              "Shield",
              "Spear"
            ],
            "hint": "Long slender iron spear carried by warriors and elders for defense. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emorok (pl. ngemorkin)\" mean in English?",
            "correctAnswer": "Spear shaft",
            "options": [
              "Spear sheath",
              "Shield",
              "Spear shaft",
              "Spear"
            ],
            "hint": "Polished hardwood shaft connecting spear blade and iron butt. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akuraro (pl. ngakuraroi)\" mean in English?",
            "correctAnswer": "Spear sheath",
            "options": [
              "Shield",
              "Spear sheath",
              "Spear",
              "Spear shaft"
            ],
            "hint": "Decorated leather cap shielding the spearhead tip. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Spear sheath\" in Turkana?",
            "correctAnswer": "Akuraro (pl. ngakuraroi)",
            "options": [
              "Akuraro (pl. ngakuraroi)",
              "Akwara / A'kwara (pl. ngakwarath / ngawarath)",
              "Emorok (pl. ngemorkin)",
              "Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)"
            ],
            "hint": "ah-koo-rah-roh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Shield\" in Turkana?",
            "correctAnswer": "Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)",
            "options": [
              "Akwara / A'kwara (pl. ngakwarath / ngawarath)",
              "Emorok (pl. ngemorkin)",
              "Akuraro (pl. ngakuraroi)",
              "Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)"
            ],
            "hint": "oh-pwohl / eh-gwoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Knife\" in Turkana?",
            "correctAnswer": "Ekileng / A'kileng (pl. ngakilengya / ngilenya)",
            "options": [
              "Emorok (pl. ngemorkin)",
              "Akuraro (pl. ngakuraroi)",
              "Ekileng / A'kileng (pl. ngakilengya / ngilenya)",
              "Akwara / A'kwara (pl. ngakwarath / ngawarath)"
            ],
            "hint": "eh-kee-lehng"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Akwara / A'kwara (pl. ngakwarath / ngawarath): Spear, Emorok (pl. ngemorkin): Spear shaft, Akuraro (pl. ngakuraroi): Spear sheath, Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi): Shield",
            "pairs": [
              {
                "left": "Akwara / A'kwara (pl. ngakwarath / ngawarath)",
                "right": "Spear"
              },
              {
                "left": "Emorok (pl. ngemorkin)",
                "right": "Spear shaft"
              },
              {
                "left": "Akuraro (pl. ngakuraroi)",
                "right": "Spear sheath"
              },
              {
                "left": "Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)",
                "right": "Shield"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Spear\" in Turkana.",
            "correctAnswer": "Akwara / A'kwara (pl. ngakwarath / ngawarath)",
            "options": [
              "Akwara / A'kwara (pl. ngakwarath / ngawarath)",
              "Emorok (pl. ngemorkin)",
              "Akuraro (pl. ngakuraroi)",
              "Oupwol / E'gwoe / Egwo (pl. ngoupwala / ngigwoi)"
            ],
            "hint": "ah-kwah-rah"
          }
        ]
      },
      {
        "id": "turkana-exp-weapons-tools-2",
        "title": "Weapons & Tools (Part 2)",
        "icon": "Shield",
        "description": "Master Turkana weapons & tools vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Weapons & Tools, pay special attention to pronunciation and morphological prefixes/suffixes: 'Atom (pl. ngetom)' (Rifle / Gun), 'Atom (pl. ngatom)' (War horn / Trumpet), 'Akuta (pl. ngakuta)' (Wooden digging stick), 'Ameleko (pl. ngemelakoi)' (Iron hoe).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Atom (pl. ngetom)",
            "source": "Rifle / Gun",
            "pronunciation": "ah-tohm",
            "hint": "Firearm; named historically from early trade linked with elephant hunting. (Barton 1921)",
            "example": "Atom (pl. ngetom) — Rifle / Gun (Firearm; named historically from early trade linked with elephant hunting. (Barton 1921))"
          },
          {
            "target": "Atom (pl. ngatom)",
            "source": "War horn / Trumpet",
            "pronunciation": "ah-tohm",
            "hint": "Carved wood or oryx horn trumpet blown to signal assemblies or alarms. (Barton 1921)",
            "example": "Atom (pl. ngatom) — War horn / Trumpet (Carved wood or oryx horn trumpet blown to signal assemblies or alarms. (Barton 1921))"
          },
          {
            "target": "Akuta (pl. ngakuta)",
            "source": "Wooden digging stick",
            "pronunciation": "ah-koo-tah",
            "hint": "Hardwood pointed digging stick for seasonal gardening and digging wells. (Barton 1921)",
            "example": "Akuta (pl. ngakuta) — Wooden digging stick (Hardwood pointed digging stick for seasonal gardening and digging wells. (Barton 1921))"
          },
          {
            "target": "Ameleko (pl. ngemelakoi)",
            "source": "Iron hoe",
            "pronunciation": "ah-meh-leh-koh",
            "hint": "Forged iron cultivating hoe. (Barton 1921)",
            "example": "Ameleko (pl. ngemelakoi) — Iron hoe (Forged iron cultivating hoe. (Barton 1921))"
          },
          {
            "target": "Eyap (pl. ngaiyapai)",
            "source": "Axe",
            "pronunciation": "eh-yahp",
            "hint": "Small wood-cutting axe used to gather acacia boma fencing. (Barton 1921)",
            "example": "Eyap (pl. ngaiyapai) — Axe (Small wood-cutting axe used to gather acacia boma fencing. (Barton 1921))"
          },
          {
            "target": "Emoto (pl. ngemotoin)",
            "source": "Needle / Awl",
            "pronunciation": "eh-moh-toh",
            "hint": "Sharp piercing needle for sewing leather garments and footwear. (Barton 1921)",
            "example": "Emoto (pl. ngemotoin) — Needle / Awl (Sharp piercing needle for sewing leather garments and footwear. (Barton 1921))"
          },
          {
            "target": "Akobito (pl. ngakobit)",
            "source": "Fiber rope / Cord",
            "pronunciation": "ah-koh-bee-toh",
            "hint": "Strong twisted fiber cord used for tying livestock. (Barton 1921)",
            "example": "Akobito (pl. ngakobit) — Fiber rope / Cord (Strong twisted fiber cord used for tying livestock. (Barton 1921))"
          },
          {
            "target": "Ewuno / Aloit (pl. ngounui / ngaloito)",
            "source": "Animal snare / Trap",
            "pronunciation": "eh-woo-noh",
            "hint": "Noose snare or pitfall trap for wild game. (Barton 1921)",
            "example": "Ewuno / Aloit (pl. ngounui / ngaloito) — Animal snare / Trap (Noose snare or pitfall trap for wild game. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atom (pl. ngetom)\" mean in English?",
            "correctAnswer": "Rifle / Gun",
            "options": [
              "War horn / Trumpet",
              "Wooden digging stick",
              "Iron hoe",
              "Rifle / Gun"
            ],
            "hint": "Firearm; named historically from early trade linked with elephant hunting. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Atom (pl. ngatom)\" mean in English?",
            "correctAnswer": "War horn / Trumpet",
            "options": [
              "Wooden digging stick",
              "Iron hoe",
              "War horn / Trumpet",
              "Rifle / Gun"
            ],
            "hint": "Carved wood or oryx horn trumpet blown to signal assemblies or alarms. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akuta (pl. ngakuta)\" mean in English?",
            "correctAnswer": "Wooden digging stick",
            "options": [
              "Iron hoe",
              "Wooden digging stick",
              "Rifle / Gun",
              "War horn / Trumpet"
            ],
            "hint": "Hardwood pointed digging stick for seasonal gardening and digging wells. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Wooden digging stick\" in Turkana?",
            "correctAnswer": "Akuta (pl. ngakuta)",
            "options": [
              "Akuta (pl. ngakuta)",
              "Atom (pl. ngetom)",
              "Atom (pl. ngatom)",
              "Ameleko (pl. ngemelakoi)"
            ],
            "hint": "ah-koo-tah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Iron hoe\" in Turkana?",
            "correctAnswer": "Ameleko (pl. ngemelakoi)",
            "options": [
              "Atom (pl. ngetom)",
              "Atom (pl. ngatom)",
              "Akuta (pl. ngakuta)",
              "Ameleko (pl. ngemelakoi)"
            ],
            "hint": "ah-meh-leh-koh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Axe\" in Turkana?",
            "correctAnswer": "Eyap (pl. ngaiyapai)",
            "options": [
              "Atom (pl. ngatom)",
              "Akuta (pl. ngakuta)",
              "Eyap (pl. ngaiyapai)",
              "Atom (pl. ngetom)"
            ],
            "hint": "eh-yahp"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Atom (pl. ngetom): Rifle / Gun, Atom (pl. ngatom): War horn / Trumpet, Akuta (pl. ngakuta): Wooden digging stick, Ameleko (pl. ngemelakoi): Iron hoe",
            "pairs": [
              {
                "left": "Atom (pl. ngetom)",
                "right": "Rifle / Gun"
              },
              {
                "left": "Atom (pl. ngatom)",
                "right": "War horn / Trumpet"
              },
              {
                "left": "Akuta (pl. ngakuta)",
                "right": "Wooden digging stick"
              },
              {
                "left": "Ameleko (pl. ngemelakoi)",
                "right": "Iron hoe"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Rifle / Gun\" in Turkana.",
            "correctAnswer": "Atom (pl. ngetom)",
            "options": [
              "Atom (pl. ngetom)",
              "Atom (pl. ngatom)",
              "Akuta (pl. ngakuta)",
              "Ameleko (pl. ngemelakoi)"
            ],
            "hint": "ah-tohm"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-16-verbs",
    "title": "Unit 16: Verbs & Actions",
    "description": "Comprehensive Turkana curriculum for Verbs & Actions, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
    "icon": "Zap",
    "skills": [
      {
        "id": "turkana-exp-verbs",
        "title": "Verbs & Actions (Part 1)",
        "icon": "Zap",
        "description": "Master Turkana verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Emugi / Akimuji' (To eat), 'Emathi / Akimati' (To drink), 'Aperi / Topper' (To sleep), 'Alothi / Tolot' (To go).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Emugi / Akimuji",
            "source": "To eat",
            "pronunciation": "eh-moo-gee / ah-kee-moo-jee",
            "hint": "Consume food. Present 1st person: 'Emugi ayon' (I eat). (Barton 1921)",
            "example": "Emugi / Akimuji — To eat (Consume food. Present 1st person: 'Emugi ayon' (I eat). (Barton 1921))"
          },
          {
            "target": "Emathi / Akimati",
            "source": "To drink",
            "pronunciation": "eh-mah-thee / ah-kee-mah-tee",
            "hint": "Drink liquid, water, or milk. (Barton 1921)",
            "example": "Emathi / Akimati — To drink (Drink liquid, water, or milk. (Barton 1921))"
          },
          {
            "target": "Aperi / Topper",
            "source": "To sleep",
            "pronunciation": "ah-peh-ree",
            "hint": "Rest or sleep. Imperative: 'Toperirobo' (sleep well!). (Barton 1921)",
            "example": "Aperi / Topper — To sleep (Rest or sleep. Imperative: 'Toperirobo' (sleep well!). (Barton 1921))"
          },
          {
            "target": "Alothi / Tolot",
            "source": "To go",
            "pronunciation": "ah-loh-thee / toh-loht",
            "hint": "Depart or travel. Imperative: 'Tolot!' (go!), pl. 'Tolotto!'. (Barton 1921)",
            "example": "Alothi / Tolot — To go (Depart or travel. Imperative: 'Tolot!' (go!), pl. 'Tolotto!'. (Barton 1921))"
          },
          {
            "target": "Abuni / Bwa",
            "source": "To come",
            "pronunciation": "ah-boo-nee / bwah",
            "hint": "Approach. Imperative: 'Bwa!' (come!), pl. 'Potto!'. (Barton 1921)",
            "example": "Abuni / Bwa — To come (Approach. Imperative: 'Bwa!' (come!), pl. 'Potto!'. (Barton 1921))"
          },
          {
            "target": "Akeri / Kibirr",
            "source": "To run",
            "pronunciation": "ah-keh-ree / kee-beer",
            "hint": "Run quickly. Imperative: 'Kibirr!'. (Barton 1921)",
            "example": "Akeri / Kibirr — To run (Run quickly. Imperative: 'Kibirr!'. (Barton 1921))"
          },
          {
            "target": "Ainua / Ainu",
            "source": "To see",
            "pronunciation": "ah-ee-noo-ah",
            "hint": "Perceive with vision. Imperative: 'Tainu!' (see!). (Barton 1921)",
            "example": "Ainua / Ainu — To see (Perceive with vision. Imperative: 'Tainu!' (see!). (Barton 1921))"
          },
          {
            "target": "Erari / Era",
            "source": "To hear / listen",
            "pronunciation": "eh-rah-ree / eh-rah",
            "hint": "Listen or perceive sound. Present: 'Erari ayon' (I hear). (Barton 1921)",
            "example": "Erari / Era — To hear / listen (Listen or perceive sound. Present: 'Erari ayon' (I hear). (Barton 1921))"
          },
          {
            "target": "Erworo / Akirwor",
            "source": "To speak / talk",
            "pronunciation": "ehr-woh-roh",
            "hint": "Speak in words or talk together. (Barton 1921)",
            "example": "Erworo / Akirwor — To speak / talk (Speak in words or talk together. (Barton 1921))"
          },
          {
            "target": "Akilari / Elari",
            "source": "To walk",
            "pronunciation": "ah-kee-lah-ree",
            "hint": "Travel on foot. (Barton 1921)",
            "example": "Akilari / Elari — To walk (Travel on foot. (Barton 1921))"
          },
          {
            "target": "Ouwei / Towoyo",
            "source": "To stand",
            "pronunciation": "oh-weh-ee / toh-woh-yoh",
            "hint": "Stand stationary or halt. (Barton 1921)",
            "example": "Ouwei / Towoyo — To stand (Stand stationary or halt. (Barton 1921))"
          },
          {
            "target": "Eboigini / Aboikini",
            "source": "To sit / dwell",
            "pronunciation": "eh-boh-ee-gee-nee",
            "hint": "Sit down or settle in an area. (Barton 1921)",
            "example": "Eboigini / Aboikini — To sit / dwell (Sit down or settle in an area. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emugi / Akimuji\" mean in English?",
            "correctAnswer": "To eat",
            "options": [
              "To drink",
              "To sleep",
              "To go",
              "To eat"
            ],
            "hint": "Consume food. Present 1st person: 'Emugi ayon' (I eat). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Emathi / Akimati\" mean in English?",
            "correctAnswer": "To drink",
            "options": [
              "To sleep",
              "To go",
              "To drink",
              "To eat"
            ],
            "hint": "Drink liquid, water, or milk. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aperi / Topper\" mean in English?",
            "correctAnswer": "To sleep",
            "options": [
              "To go",
              "To sleep",
              "To eat",
              "To drink"
            ],
            "hint": "Rest or sleep. Imperative: 'Toperirobo' (sleep well!). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To sleep\" in Turkana?",
            "correctAnswer": "Aperi / Topper",
            "options": [
              "Aperi / Topper",
              "Emugi / Akimuji",
              "Emathi / Akimati",
              "Alothi / Tolot"
            ],
            "hint": "ah-peh-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To go\" in Turkana?",
            "correctAnswer": "Alothi / Tolot",
            "options": [
              "Emugi / Akimuji",
              "Emathi / Akimati",
              "Aperi / Topper",
              "Alothi / Tolot"
            ],
            "hint": "ah-loh-thee / toh-loht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To come\" in Turkana?",
            "correctAnswer": "Abuni / Bwa",
            "options": [
              "Emathi / Akimati",
              "Aperi / Topper",
              "Abuni / Bwa",
              "Emugi / Akimuji"
            ],
            "hint": "ah-boo-nee / bwah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Emugi / Akimuji: To eat, Emathi / Akimati: To drink, Aperi / Topper: To sleep, Alothi / Tolot: To go",
            "pairs": [
              {
                "left": "Emugi / Akimuji",
                "right": "To eat"
              },
              {
                "left": "Emathi / Akimati",
                "right": "To drink"
              },
              {
                "left": "Aperi / Topper",
                "right": "To sleep"
              },
              {
                "left": "Alothi / Tolot",
                "right": "To go"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To eat\" in Turkana.",
            "correctAnswer": "Emugi / Akimuji",
            "options": [
              "Emugi / Akimuji",
              "Emathi / Akimati",
              "Aperi / Topper",
              "Alothi / Tolot"
            ],
            "hint": "eh-moo-gee / ah-kee-moo-jee"
          }
        ]
      },
      {
        "id": "turkana-exp-verbs-2",
        "title": "Verbs & Actions (Part 2)",
        "icon": "Zap",
        "description": "Master Turkana verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Anyouni' (To rise / get up), 'Ainagini / Akini' (To give), 'Alemari / Atachi' (To take / receive), 'Arami / Karam' (To hit / beat).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Anyouni",
            "source": "To rise / get up",
            "pronunciation": "ahn-yoh-oo-nee",
            "hint": "Awaken and rise up. (Barton 1921)",
            "example": "Anyouni — To rise / get up (Awaken and rise up. (Barton 1921))"
          },
          {
            "target": "Ainagini / Akini",
            "source": "To give",
            "pronunciation": "ah-ee-nah-gee-nee",
            "hint": "Offer or deliver an item. (Barton 1921)",
            "example": "Ainagini / Akini — To give (Offer or deliver an item. (Barton 1921))"
          },
          {
            "target": "Alemari / Atachi",
            "source": "To take / receive",
            "pronunciation": "ah-leh-mah-ree",
            "hint": "Pick up or accept. (Barton 1921)",
            "example": "Alemari / Atachi — To take / receive (Pick up or accept. (Barton 1921))"
          },
          {
            "target": "Arami / Karam",
            "source": "To hit / beat",
            "pronunciation": "ah-rah-mee / kah-rahm",
            "hint": "Strike with club or stick. Passive: 'Karamitai ayon' (I am struck). (Barton 1921)",
            "example": "Arami / Karam — To hit / beat (Strike with club or stick. Passive: 'Karamitai ayon' (I am struck). (Barton 1921))"
          },
          {
            "target": "Ari",
            "source": "To kill",
            "pronunciation": "ah-ree",
            "hint": "Kill or dispatch an animal. (Barton 1921)",
            "example": "Ari — To kill (Kill or dispatch an animal. (Barton 1921))"
          },
          {
            "target": "Achomi / Echomi",
            "source": "To spear / stab",
            "pronunciation": "ah-choh-mee",
            "hint": "Strike with spear blade. (Barton 1921)",
            "example": "Achomi / Echomi — To spear / stab (Strike with spear blade. (Barton 1921))"
          },
          {
            "target": "Igi / Ajori",
            "source": "To fight",
            "pronunciation": "ee-gee / ah-joh-ree",
            "hint": "Fight in combat or cattle defense. (Barton 1921)",
            "example": "Igi / Ajori — To fight (Fight in combat or cattle defense. (Barton 1921))"
          },
          {
            "target": "Aduki",
            "source": "To build / construct",
            "pronunciation": "ah-doo-kee",
            "hint": "Build a shelter or fence. (Barton 1921)",
            "example": "Aduki — To build / construct (Build a shelter or fence. (Barton 1921))"
          },
          {
            "target": "Adungi / Adongai",
            "source": "To cut / chop",
            "pronunciation": "ah-doon-gee",
            "hint": "Cut. Reduplicative: 'Adungi-dungi' (chop into small pieces). (Barton 1921)",
            "example": "Adungi / Adongai — To cut / chop (Cut. Reduplicative: 'Adungi-dungi' (chop into small pieces). (Barton 1921))"
          },
          {
            "target": "Elatari / Alotari",
            "source": "To wash / clean",
            "pronunciation": "eh-lah-tah-ree",
            "hint": "Wash with water. 'Elatari ngakan' (wash hands). (Barton 1921)",
            "example": "Elatari / Alotari — To wash / clean (Wash with water. 'Elatari ngakan' (wash hands). (Barton 1921))"
          },
          {
            "target": "Edoroki",
            "source": "To cook",
            "pronunciation": "eh-doh-roh-kee",
            "hint": "Boil or prepare food at the fire. (Barton 1921)",
            "example": "Edoroki — To cook (Boil or prepare food at the fire. (Barton 1921))"
          },
          {
            "target": "Enokogini",
            "source": "To burn",
            "pronunciation": "eh-noh-koh-gee-nee",
            "hint": "Kindle or catch fire. (Barton 1921)",
            "example": "Enokogini — To burn (Kindle or catch fire. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Anyouni\" mean in English?",
            "correctAnswer": "To rise / get up",
            "options": [
              "To give",
              "To take / receive",
              "To hit / beat",
              "To rise / get up"
            ],
            "hint": "Awaken and rise up. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ainagini / Akini\" mean in English?",
            "correctAnswer": "To give",
            "options": [
              "To take / receive",
              "To hit / beat",
              "To give",
              "To rise / get up"
            ],
            "hint": "Offer or deliver an item. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alemari / Atachi\" mean in English?",
            "correctAnswer": "To take / receive",
            "options": [
              "To hit / beat",
              "To take / receive",
              "To rise / get up",
              "To give"
            ],
            "hint": "Pick up or accept. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To take / receive\" in Turkana?",
            "correctAnswer": "Alemari / Atachi",
            "options": [
              "Alemari / Atachi",
              "Anyouni",
              "Ainagini / Akini",
              "Arami / Karam"
            ],
            "hint": "ah-leh-mah-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To hit / beat\" in Turkana?",
            "correctAnswer": "Arami / Karam",
            "options": [
              "Anyouni",
              "Ainagini / Akini",
              "Alemari / Atachi",
              "Arami / Karam"
            ],
            "hint": "ah-rah-mee / kah-rahm"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To kill\" in Turkana?",
            "correctAnswer": "Ari",
            "options": [
              "Ainagini / Akini",
              "Alemari / Atachi",
              "Ari",
              "Anyouni"
            ],
            "hint": "ah-ree"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Anyouni: To rise / get up, Ainagini / Akini: To give, Alemari / Atachi: To take / receive, Arami / Karam: To hit / beat",
            "pairs": [
              {
                "left": "Anyouni",
                "right": "To rise / get up"
              },
              {
                "left": "Ainagini / Akini",
                "right": "To give"
              },
              {
                "left": "Alemari / Atachi",
                "right": "To take / receive"
              },
              {
                "left": "Arami / Karam",
                "right": "To hit / beat"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To rise / get up\" in Turkana.",
            "correctAnswer": "Anyouni",
            "options": [
              "Anyouni",
              "Ainagini / Akini",
              "Alemari / Atachi",
              "Arami / Karam"
            ],
            "hint": "ahn-yoh-oo-nee"
          }
        ]
      },
      {
        "id": "turkana-exp-verbs-3",
        "title": "Verbs & Actions (Part 3)",
        "icon": "Zap",
        "description": "Master Turkana verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ayeni' (To tie / bind), 'Alachari / Alakari' (To untie / loosen), 'Alepa' (To milk), 'Aiyoki / Eyogi' (To graze / herd).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ayeni",
            "source": "To tie / bind",
            "pronunciation": "ah-yeh-nee",
            "hint": "Fasten with cord or tether. (Barton 1921)",
            "example": "Ayeni — To tie / bind (Fasten with cord or tether. (Barton 1921))"
          },
          {
            "target": "Alachari / Alakari",
            "source": "To untie / loosen",
            "pronunciation": "ah-lah-chah-ree",
            "hint": "Release or untie. (Barton 1921)",
            "example": "Alachari / Alakari — To untie / loosen (Release or untie. (Barton 1921))"
          },
          {
            "target": "Alepa",
            "source": "To milk",
            "pronunciation": "ah-leh-pah",
            "hint": "Milk cows, camels, or goats into a gourd. (Barton 1921)",
            "example": "Alepa — To milk (Milk cows, camels, or goats into a gourd. (Barton 1921))"
          },
          {
            "target": "Aiyoki / Eyogi",
            "source": "To graze / herd",
            "pronunciation": "ah-ee-yoh-kee",
            "hint": "Drive stock out to pasture. (Barton 1921)",
            "example": "Aiyoki / Eyogi — To graze / herd (Drive stock out to pasture. (Barton 1921))"
          },
          {
            "target": "Aiyeni",
            "source": "To know",
            "pronunciation": "ah-ee-yeh-nee",
            "hint": "Possess knowledge. Negative: 'Mam ayeni' (I don't know). (Barton 1921)",
            "example": "Aiyeni — To know (Possess knowledge. Negative: 'Mam ayeni' (I don't know). (Barton 1921))"
          },
          {
            "target": "Atami",
            "source": "To understand / think",
            "pronunciation": "ah-tah-mee",
            "hint": "Reflect, comprehend, or meditate. Imperative: 'Kitam!'. (Barton 1921)",
            "example": "Atami — To understand / think (Reflect, comprehend, or meditate. Imperative: 'Kitam!'. (Barton 1921))"
          },
          {
            "target": "Achami / Achemi",
            "source": "To like / love / accept",
            "pronunciation": "ah-chah-mee",
            "hint": "Assent, like, love, or desire. (Barton 1921)",
            "example": "Achami / Achemi — To like / love / accept (Assent, like, love, or desire. (Barton 1921))"
          },
          {
            "target": "Angeri",
            "source": "To refuse / dislike",
            "pronunciation": "ahn-geh-ree",
            "hint": "Reject or refuse an offer. (Barton 1921)",
            "example": "Angeri — To refuse / dislike (Reject or refuse an offer. (Barton 1921))"
          },
          {
            "target": "Athaki",
            "source": "To seek / look for",
            "pronunciation": "ah-thah-kee",
            "hint": "Search for stray livestock or tracking spoor. (Barton 1921)",
            "example": "Athaki — To seek / look for (Search for stray livestock or tracking spoor. (Barton 1921))"
          },
          {
            "target": "Edonga",
            "source": "To dance",
            "pronunciation": "eh-dohn-gah",
            "hint": "Dance in traditional celebrations or warrior dances. (Barton 1921)",
            "example": "Edonga — To dance (Dance in traditional celebrations or warrior dances. (Barton 1921))"
          },
          {
            "target": "Eruko",
            "source": "To sing",
            "pronunciation": "eh-roo-koh",
            "hint": "Sing ox praise songs and historic epics. (Barton 1921)",
            "example": "Eruko — To sing (Sing ox praise songs and historic epics. (Barton 1921))"
          },
          {
            "target": "Atona",
            "source": "To die",
            "pronunciation": "ah-toh-nah",
            "hint": "Pass away or perish. (Barton 1921)",
            "example": "Atona — To die (Pass away or perish. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          },
          {
            "target": "Epolok ngikiliok lu.",
            "source": "These men are strong and great."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ayeni\" mean in English?",
            "correctAnswer": "To tie / bind",
            "options": [
              "To untie / loosen",
              "To milk",
              "To graze / herd",
              "To tie / bind"
            ],
            "hint": "Fasten with cord or tether. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alachari / Alakari\" mean in English?",
            "correctAnswer": "To untie / loosen",
            "options": [
              "To milk",
              "To graze / herd",
              "To untie / loosen",
              "To tie / bind"
            ],
            "hint": "Release or untie. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alepa\" mean in English?",
            "correctAnswer": "To milk",
            "options": [
              "To graze / herd",
              "To milk",
              "To tie / bind",
              "To untie / loosen"
            ],
            "hint": "Milk cows, camels, or goats into a gourd. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To milk\" in Turkana?",
            "correctAnswer": "Alepa",
            "options": [
              "Alepa",
              "Ayeni",
              "Alachari / Alakari",
              "Aiyoki / Eyogi"
            ],
            "hint": "ah-leh-pah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To graze / herd\" in Turkana?",
            "correctAnswer": "Aiyoki / Eyogi",
            "options": [
              "Ayeni",
              "Alachari / Alakari",
              "Alepa",
              "Aiyoki / Eyogi"
            ],
            "hint": "ah-ee-yoh-kee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To know\" in Turkana?",
            "correctAnswer": "Aiyeni",
            "options": [
              "Alachari / Alakari",
              "Alepa",
              "Aiyeni",
              "Ayeni"
            ],
            "hint": "ah-ee-yeh-nee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ayeni: To tie / bind, Alachari / Alakari: To untie / loosen, Alepa: To milk, Aiyoki / Eyogi: To graze / herd",
            "pairs": [
              {
                "left": "Ayeni",
                "right": "To tie / bind"
              },
              {
                "left": "Alachari / Alakari",
                "right": "To untie / loosen"
              },
              {
                "left": "Alepa",
                "right": "To milk"
              },
              {
                "left": "Aiyoki / Eyogi",
                "right": "To graze / herd"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To tie / bind\" in Turkana.",
            "correctAnswer": "Ayeni",
            "options": [
              "Ayeni",
              "Alachari / Alakari",
              "Alepa",
              "Aiyoki / Eyogi"
            ],
            "hint": "ah-yeh-nee"
          }
        ]
      }
    ]
  },
  {
    "id": "turkana-unit-17-phrases",
    "title": "Unit 17: Common Phrases",
    "description": "Comprehensive Turkana curriculum for Common Phrases, vetted from Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
    "icon": "MessageCircle",
    "skills": [
      {
        "id": "turkana-exp-phrases",
        "title": "Common Phrases (Part 1)",
        "icon": "MessageCircle",
        "description": "Master Turkana common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ngai akero ekon? / Ngai ekiro kon?' (What is your name?), 'Ekiro kang erai...' (My name is...), 'Alothi ai? / Ilotit iwon ai?' (Where are you going?), 'Eyyey ngeth? / Ali ngeth?' (Where is he / she?).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Ngai akero ekon? / Ngai ekiro kon?",
            "source": "What is your name?",
            "pronunciation": "ngah-ee ah-keh-roh eh-kohn",
            "hint": "Enquiring someone's identity. (Barton 1921)",
            "example": "Ngai akero ekon? / Ngai ekiro kon? — What is your name? (Enquiring someone's identity. (Barton 1921))"
          },
          {
            "target": "Ekiro kang erai...",
            "source": "My name is...",
            "pronunciation": "eh-kee-roh kahng eh-rah-ee",
            "hint": "Stating one's name in response.",
            "example": "Ekiro kang erai... — My name is... (Stating one's name in response.)"
          },
          {
            "target": "Alothi ai? / Ilotit iwon ai?",
            "source": "Where are you going?",
            "pronunciation": "ah-loh-thee ah-ee",
            "hint": "Enquiring traveller's destination. (Barton 1921)",
            "example": "Alothi ai? / Ilotit iwon ai? — Where are you going? (Enquiring traveller's destination. (Barton 1921))"
          },
          {
            "target": "Eyyey ngeth? / Ali ngeth?",
            "source": "Where is he / she?",
            "pronunciation": "eh-ee-yeh-ee ngehth",
            "hint": "Asking the location of a person. (Barton 1921)",
            "example": "Eyyey ngeth? / Ali ngeth? — Where is he / she? (Asking the location of a person. (Barton 1921))"
          },
          {
            "target": "Bwa nege! / Tobwo nege!",
            "source": "Come here",
            "pronunciation": "bwah neh-geh",
            "hint": "Command to approach. (Barton 1921)",
            "example": "Bwa nege! / Tobwo nege! — Come here (Command to approach. (Barton 1921))"
          },
          {
            "target": "Tenyu! / Tolot!",
            "source": "Go away",
            "pronunciation": "tehn-yoo / toh-loht",
            "hint": "Command to leave. (Barton 1921)",
            "example": "Tenyu! / Tolot! — Go away (Command to leave. (Barton 1921))"
          },
          {
            "target": "Ngolik! / Engolikini!",
            "source": "Look out! / Take care!",
            "pronunciation": "ngoh-leek",
            "hint": "Warning to be watchful. (Barton 1921)",
            "example": "Ngolik! / Engolikini! — Look out! / Take care! (Warning to be watchful. (Barton 1921))"
          },
          {
            "target": "Towoyo nege!",
            "source": "Stop here",
            "pronunciation": "toh-woh-yoh neh-geh",
            "hint": "Instruction to halt.",
            "example": "Towoyo nege! — Stop here (Instruction to halt.)"
          },
          {
            "target": "Darun adojigi / Todar wadio",
            "source": "Wait a little",
            "pronunciation": "dah-roon ah-doh-jee-gee",
            "hint": "Requesting brief patience. (Barton 1921)",
            "example": "Darun adojigi / Todar wadio — Wait a little (Requesting brief patience. (Barton 1921))"
          },
          {
            "target": "Towa thik!",
            "source": "Leave it alone!",
            "pronunciation": "toh-wah theek",
            "hint": "Instruction not to touch or disturb. (Barton 1921)",
            "example": "Towa thik! — Leave it alone! (Instruction not to touch or disturb. (Barton 1921))"
          },
          {
            "target": "Kilotu / Wolotu",
            "source": "Let's go",
            "pronunciation": "kee-loh-too",
            "hint": "Urging group departure.",
            "example": "Kilotu / Wolotu — Let's go (Urging group departure.)"
          },
          {
            "target": "Nyo lo?",
            "source": "What is this?",
            "pronunciation": "nyoh loh",
            "hint": "Asking what an object is. (Barton 1921)",
            "example": "Nyo lo? — What is this? (Asking what an object is. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ngai akero ekon? / Ngai ekiro kon?\" mean in English?",
            "correctAnswer": "What is your name?",
            "options": [
              "My name is...",
              "Where are you going?",
              "Where is he / she?",
              "What is your name?"
            ],
            "hint": "Enquiring someone's identity. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ekiro kang erai...\" mean in English?",
            "correctAnswer": "My name is...",
            "options": [
              "Where are you going?",
              "Where is he / she?",
              "My name is...",
              "What is your name?"
            ],
            "hint": "Stating one's name in response."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alothi ai? / Ilotit iwon ai?\" mean in English?",
            "correctAnswer": "Where are you going?",
            "options": [
              "Where is he / she?",
              "Where are you going?",
              "What is your name?",
              "My name is..."
            ],
            "hint": "Enquiring traveller's destination. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where are you going?\" in Turkana?",
            "correctAnswer": "Alothi ai? / Ilotit iwon ai?",
            "options": [
              "Alothi ai? / Ilotit iwon ai?",
              "Ngai akero ekon? / Ngai ekiro kon?",
              "Ekiro kang erai...",
              "Eyyey ngeth? / Ali ngeth?"
            ],
            "hint": "ah-loh-thee ah-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where is he / she?\" in Turkana?",
            "correctAnswer": "Eyyey ngeth? / Ali ngeth?",
            "options": [
              "Ngai akero ekon? / Ngai ekiro kon?",
              "Ekiro kang erai...",
              "Alothi ai? / Ilotit iwon ai?",
              "Eyyey ngeth? / Ali ngeth?"
            ],
            "hint": "eh-ee-yeh-ee ngehth"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Come here\" in Turkana?",
            "correctAnswer": "Bwa nege! / Tobwo nege!",
            "options": [
              "Ekiro kang erai...",
              "Alothi ai? / Ilotit iwon ai?",
              "Bwa nege! / Tobwo nege!",
              "Ngai akero ekon? / Ngai ekiro kon?"
            ],
            "hint": "bwah neh-geh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Ngai akero ekon? / Ngai ekiro kon?: What is your name?, Ekiro kang erai...: My name is..., Alothi ai? / Ilotit iwon ai?: Where are you going?, Eyyey ngeth? / Ali ngeth?: Where is he / she?",
            "pairs": [
              {
                "left": "Ngai akero ekon? / Ngai ekiro kon?",
                "right": "What is your name?"
              },
              {
                "left": "Ekiro kang erai...",
                "right": "My name is..."
              },
              {
                "left": "Alothi ai? / Ilotit iwon ai?",
                "right": "Where are you going?"
              },
              {
                "left": "Eyyey ngeth? / Ali ngeth?",
                "right": "Where is he / she?"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"What is your name?\" in Turkana.",
            "correctAnswer": "Ngai akero ekon? / Ngai ekiro kon?",
            "options": [
              "Ngai akero ekon? / Ngai ekiro kon?",
              "Ekiro kang erai...",
              "Alothi ai? / Ilotit iwon ai?",
              "Eyyey ngeth? / Ali ngeth?"
            ],
            "hint": "ngah-ee ah-keh-roh eh-kohn"
          }
        ]
      },
      {
        "id": "turkana-exp-phrases-2",
        "title": "Common Phrases (Part 2)",
        "icon": "MessageCircle",
        "description": "Master Turkana common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Esagin nyo? / Isagin nyo?' (What do you want?), 'Ali tela kon?' (What is your tribe?), 'Ngeyai? / Nyeyai? / Erai ngiai?' (How much? / How many?), 'Ikwani?' (Why?).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Esagin nyo? / Isagin nyo?",
            "source": "What do you want?",
            "pronunciation": "eh-sah-geen nyoh",
            "hint": "Asking someone's intent or need. (Barton 1921)",
            "example": "Esagin nyo? / Isagin nyo? — What do you want? (Asking someone's intent or need. (Barton 1921))"
          },
          {
            "target": "Ali tela kon?",
            "source": "What is your tribe?",
            "pronunciation": "ah-lee teh-lah kohn",
            "hint": "Enquiring someone's ethnic section or clan. (Barton 1921)",
            "example": "Ali tela kon? — What is your tribe? (Enquiring someone's ethnic section or clan. (Barton 1921))"
          },
          {
            "target": "Ngeyai? / Nyeyai? / Erai ngiai?",
            "source": "How much? / How many?",
            "pronunciation": "ngeh-yah-ee",
            "hint": "Asking quantity, headcount, or price. (Barton 1921)",
            "example": "Ngeyai? / Nyeyai? / Erai ngiai? — How much? / How many? (Asking quantity, headcount, or price. (Barton 1921))"
          },
          {
            "target": "Ikwani?",
            "source": "Why?",
            "pronunciation": "ee-kwah-nee",
            "hint": "Asking reason or motive. (Barton 1921)",
            "example": "Ikwani? — Why? (Asking reason or motive. (Barton 1921))"
          },
          {
            "target": "Wurre?",
            "source": "When?",
            "pronunciation": "woo-reh",
            "hint": "Asking about time. (Barton 1921)",
            "example": "Wurre? — When? (Asking about time. (Barton 1921))"
          },
          {
            "target": "Mam ayeni / Aiye",
            "source": "I don't know",
            "pronunciation": "mahm ah-yeh-nee",
            "hint": "Expressing lack of knowledge. 'Aiye' = Who knows? (Barton 1921)",
            "example": "Mam ayeni / Aiye — I don't know (Expressing lack of knowledge. 'Aiye' = Who knows? (Barton 1921))"
          },
          {
            "target": "Mam erar ayong",
            "source": "I don't understand",
            "pronunciation": "mahm eh-rahr ah-yohng",
            "hint": "Expressing lack of comprehension.",
            "example": "Mam erar ayong — I don't understand (Expressing lack of comprehension.)"
          },
          {
            "target": "Kirworo kiyapak",
            "source": "Speak slowly",
            "pronunciation": "kee-rwoh-roh kee-yah-pahk",
            "hint": "Asking someone to speak slower. (Barton 1921)",
            "example": "Kirworo kiyapak — Speak slowly (Asking someone to speak slower. (Barton 1921))"
          },
          {
            "target": "Kere / Iteni robo",
            "source": "It is true",
            "pronunciation": "keh-reh / ee-teh-nee roh-boh",
            "hint": "Affirmation of truth. (Barton 1921)",
            "example": "Kere / Iteni robo — It is true (Affirmation of truth. (Barton 1921))"
          },
          {
            "target": "Alioko nguna",
            "source": "That is a lie",
            "pronunciation": "ah-lee-oh-koh ngoo-nah",
            "hint": "Refuting falsehood (alioko = lies). (Barton 1921)",
            "example": "Alioko nguna — That is a lie (Refuting falsehood (alioko = lies). (Barton 1921))"
          },
          {
            "target": "Ejok (pl. ngejokok)",
            "source": "Good / Beautiful",
            "pronunciation": "eh-johk",
            "hint": "Describing good or beautiful quality. (Barton 1921)",
            "example": "Ejok (pl. ngejokok) — Good / Beautiful (Describing good or beautiful quality. (Barton 1921))"
          },
          {
            "target": "Arono (pl. ngaroko)",
            "source": "Bad / Ugly",
            "pronunciation": "ah-roh-noh",
            "hint": "Describing bad or harmful quality. (Barton 1921)",
            "example": "Arono (pl. ngaroko) — Bad / Ugly (Describing bad or harmful quality. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          },
          {
            "target": "Ecamit apese akipi.",
            "source": "The girl wants water."
          },
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Esagin nyo? / Isagin nyo?\" mean in English?",
            "correctAnswer": "What do you want?",
            "options": [
              "What is your tribe?",
              "How much? / How many?",
              "Why?",
              "What do you want?"
            ],
            "hint": "Asking someone's intent or need. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ali tela kon?\" mean in English?",
            "correctAnswer": "What is your tribe?",
            "options": [
              "How much? / How many?",
              "Why?",
              "What is your tribe?",
              "What do you want?"
            ],
            "hint": "Enquiring someone's ethnic section or clan. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ngeyai? / Nyeyai? / Erai ngiai?\" mean in English?",
            "correctAnswer": "How much? / How many?",
            "options": [
              "Why?",
              "How much? / How many?",
              "What do you want?",
              "What is your tribe?"
            ],
            "hint": "Asking quantity, headcount, or price. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"How much? / How many?\" in Turkana?",
            "correctAnswer": "Ngeyai? / Nyeyai? / Erai ngiai?",
            "options": [
              "Ngeyai? / Nyeyai? / Erai ngiai?",
              "Esagin nyo? / Isagin nyo?",
              "Ali tela kon?",
              "Ikwani?"
            ],
            "hint": "ngeh-yah-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Why?\" in Turkana?",
            "correctAnswer": "Ikwani?",
            "options": [
              "Esagin nyo? / Isagin nyo?",
              "Ali tela kon?",
              "Ngeyai? / Nyeyai? / Erai ngiai?",
              "Ikwani?"
            ],
            "hint": "ee-kwah-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"When?\" in Turkana?",
            "correctAnswer": "Wurre?",
            "options": [
              "Ali tela kon?",
              "Ngeyai? / Nyeyai? / Erai ngiai?",
              "Wurre?",
              "Esagin nyo? / Isagin nyo?"
            ],
            "hint": "woo-reh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Esagin nyo? / Isagin nyo?: What do you want?, Ali tela kon?: What is your tribe?, Ngeyai? / Nyeyai? / Erai ngiai?: How much? / How many?, Ikwani?: Why?",
            "pairs": [
              {
                "left": "Esagin nyo? / Isagin nyo?",
                "right": "What do you want?"
              },
              {
                "left": "Ali tela kon?",
                "right": "What is your tribe?"
              },
              {
                "left": "Ngeyai? / Nyeyai? / Erai ngiai?",
                "right": "How much? / How many?"
              },
              {
                "left": "Ikwani?",
                "right": "Why?"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"What do you want?\" in Turkana.",
            "correctAnswer": "Esagin nyo? / Isagin nyo?",
            "options": [
              "Esagin nyo? / Isagin nyo?",
              "Ali tela kon?",
              "Ngeyai? / Nyeyai? / Erai ngiai?",
              "Ikwani?"
            ],
            "hint": "eh-sah-geen nyoh"
          }
        ]
      },
      {
        "id": "turkana-exp-phrases-3",
        "title": "Common Phrases (Part 3)",
        "icon": "MessageCircle",
        "description": "Master Turkana common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Epol (pl. ngepolok)' (Big / Great), 'Edit (pl. ngedithok)' (Small / Little), 'Noi / Kere' (Very / Truly), 'Ayari / Akiyar akwan' (I am well).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Epol (pl. ngepolok)",
            "source": "Big / Great",
            "pronunciation": "eh-pohl",
            "hint": "Large stature or high importance. (Barton 1921)",
            "example": "Epol (pl. ngepolok) — Big / Great (Large stature or high importance. (Barton 1921))"
          },
          {
            "target": "Edit (pl. ngedithok)",
            "source": "Small / Little",
            "pronunciation": "eh-deet",
            "hint": "Small size or youth. (Barton 1921)",
            "example": "Edit (pl. ngedithok) — Small / Little (Small size or youth. (Barton 1921))"
          },
          {
            "target": "Noi / Kere",
            "source": "Very / Truly",
            "pronunciation": "noh-ee / keh-reh",
            "hint": "Intensifier adverb denoting thoroughly or very. (Barton 1921)",
            "example": "Noi / Kere — Very / Truly (Intensifier adverb denoting thoroughly or very. (Barton 1921))"
          },
          {
            "target": "Ayari / Akiyar akwan",
            "source": "I am well",
            "pronunciation": "ah-yah-ree",
            "hint": "Affirming health and physical life. (Barton 1921)",
            "example": "Ayari / Akiyar akwan — I am well (Affirming health and physical life. (Barton 1921))"
          },
          {
            "target": "Adiaka ayon / Adyaka ayong",
            "source": "I am sick",
            "pronunciation": "ah-dyah-kah ah-yohng",
            "hint": "Stating illness. (Barton 1921)",
            "example": "Adiaka ayon / Adyaka ayong — I am sick (Stating illness. (Barton 1921))"
          },
          {
            "target": "Ayon akoro",
            "source": "I am hungry",
            "pronunciation": "ah-yohn ah-koh-roh",
            "hint": "Expressing hunger (akoro = famine/hunger). (Barton 1921)",
            "example": "Ayon akoro — I am hungry (Expressing hunger (akoro = famine/hunger). (Barton 1921))"
          },
          {
            "target": "Akori ayon",
            "source": "I am thirsty",
            "pronunciation": "ah-koh-ree ah-yohn",
            "hint": "Expressing thirst for water. (Barton 1921)",
            "example": "Akori ayon — I am thirsty (Expressing thirst for water. (Barton 1921))"
          },
          {
            "target": "Erika",
            "source": "It is finished",
            "pronunciation": "eh-ree-kah",
            "hint": "Expressing completion. (Barton 1921)",
            "example": "Erika — It is finished (Expressing completion. (Barton 1921))"
          },
          {
            "target": "Da dan / Dadan",
            "source": "All together",
            "pronunciation": "dah dahn",
            "hint": "Totally / collectively. (Barton 1921)",
            "example": "Da dan / Dadan — All together (Totally / collectively. (Barton 1921))"
          },
          {
            "target": "Erot / Eerot (pl. ngerotin)",
            "source": "Road / Path",
            "pronunciation": "eh-roht",
            "hint": "Path, road, or pastoral cattle route. (Barton 1921)",
            "example": "Erot / Eerot (pl. ngerotin) — Road / Path (Path, road, or pastoral cattle route. (Barton 1921))"
          },
          {
            "target": "Elwana",
            "source": "Far",
            "pronunciation": "eh-lwah-nah",
            "hint": "Long distance away. (Barton 1921)",
            "example": "Elwana — Far (Long distance away. (Barton 1921))"
          },
          {
            "target": "Epii / Api",
            "source": "Near",
            "pronunciation": "eh-pee-ee / ah-pee",
            "hint": "Close proximity. (Barton 1921)",
            "example": "Epii / Api — Near (Close proximity. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Alomari akolong nakware.",
            "source": "The sun sets in the evening."
          },
          {
            "target": "Epolok ngikiliok lu.",
            "source": "These men are strong and great."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Epol (pl. ngepolok)\" mean in English?",
            "correctAnswer": "Big / Great",
            "options": [
              "Small / Little",
              "Very / Truly",
              "I am well",
              "Big / Great"
            ],
            "hint": "Large stature or high importance. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Edit (pl. ngedithok)\" mean in English?",
            "correctAnswer": "Small / Little",
            "options": [
              "Very / Truly",
              "I am well",
              "Small / Little",
              "Big / Great"
            ],
            "hint": "Small size or youth. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Noi / Kere\" mean in English?",
            "correctAnswer": "Very / Truly",
            "options": [
              "I am well",
              "Very / Truly",
              "Big / Great",
              "Small / Little"
            ],
            "hint": "Intensifier adverb denoting thoroughly or very. (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Very / Truly\" in Turkana?",
            "correctAnswer": "Noi / Kere",
            "options": [
              "Noi / Kere",
              "Epol (pl. ngepolok)",
              "Edit (pl. ngedithok)",
              "Ayari / Akiyar akwan"
            ],
            "hint": "noh-ee / keh-reh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I am well\" in Turkana?",
            "correctAnswer": "Ayari / Akiyar akwan",
            "options": [
              "Epol (pl. ngepolok)",
              "Edit (pl. ngedithok)",
              "Noi / Kere",
              "Ayari / Akiyar akwan"
            ],
            "hint": "ah-yah-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I am sick\" in Turkana?",
            "correctAnswer": "Adiaka ayon / Adyaka ayong",
            "options": [
              "Edit (pl. ngedithok)",
              "Noi / Kere",
              "Adiaka ayon / Adyaka ayong",
              "Epol (pl. ngepolok)"
            ],
            "hint": "ah-dyah-kah ah-yohng"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Epol (pl. ngepolok): Big / Great, Edit (pl. ngedithok): Small / Little, Noi / Kere: Very / Truly, Ayari / Akiyar akwan: I am well",
            "pairs": [
              {
                "left": "Epol (pl. ngepolok)",
                "right": "Big / Great"
              },
              {
                "left": "Edit (pl. ngedithok)",
                "right": "Small / Little"
              },
              {
                "left": "Noi / Kere",
                "right": "Very / Truly"
              },
              {
                "left": "Ayari / Akiyar akwan",
                "right": "I am well"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Big / Great\" in Turkana.",
            "correctAnswer": "Epol (pl. ngepolok)",
            "options": [
              "Epol (pl. ngepolok)",
              "Edit (pl. ngedithok)",
              "Noi / Kere",
              "Ayari / Akiyar akwan"
            ],
            "hint": "eh-pohl"
          }
        ]
      },
      {
        "id": "turkana-exp-phrases-4",
        "title": "Common Phrases (Part 4)",
        "icon": "MessageCircle",
        "description": "Master Turkana common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Turkana skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Kidyeny' (Left), 'Teten' (Right), 'Ngeselekin / Pesa' (Money), 'Togangai! / Torimokakithai!' (Help!).",
        "culturalNote": "Source attribution: Juxon Barton (1921) 'Turkana Grammatical Notes and Vocabulary' (Bulletin of the School of Oriental Studies) and 'A Classified Vocabulary of Turkana'.",
        "words": [
          {
            "target": "Kidyeny",
            "source": "Left",
            "pronunciation": "kee-dyehn-y",
            "hint": "Direction left (akan na lo kidyeny = left hand).",
            "example": "Kidyeny — Left (Direction left (akan na lo kidyeny = left hand).)"
          },
          {
            "target": "Teten",
            "source": "Right",
            "pronunciation": "teh-tehn",
            "hint": "Direction right (akan na lo teten = right hand). (Barton 1921)",
            "example": "Teten — Right (Direction right (akan na lo teten = right hand). (Barton 1921))"
          },
          {
            "target": "Ngeselekin / Pesa",
            "source": "Money",
            "pronunciation": "ngeh-seh-leh-keen",
            "hint": "Currency / cash coins.",
            "example": "Ngeselekin / Pesa — Money (Currency / cash coins.)"
          },
          {
            "target": "Togangai! / Torimokakithai!",
            "source": "Help!",
            "pronunciation": "toh-gah-ngah-ee",
            "hint": "Urgent cry for assistance.",
            "example": "Togangai! / Torimokakithai! — Help! (Urgent cry for assistance.)"
          },
          {
            "target": "Akim!",
            "source": "Fire!",
            "pronunciation": "ah-keem",
            "hint": "Urgent warning of fire danger. (Barton 1921)",
            "example": "Akim! — Fire! (Urgent warning of fire danger. (Barton 1921))"
          },
          {
            "target": "Ekalapatan",
            "source": "Danger",
            "pronunciation": "eh-kah-lah-pah-tahn",
            "hint": "Hazardous condition.",
            "example": "Ekalapatan — Danger (Hazardous condition.)"
          },
          {
            "target": "Ekakolon! / Akokolon!",
            "source": "Thief!",
            "pronunciation": "eh-kah-koh-lohn",
            "hint": "Alarm alerting that cattle or property is being stolen. (Barton 1921)",
            "example": "Ekakolon! / Akokolon! — Thief! (Alarm alerting that cattle or property is being stolen. (Barton 1921))"
          }
        ],
        "sentences": [
          {
            "target": "Ejok akwap na a Turkana.",
            "source": "This land of Turkana is good."
          },
          {
            "target": "Eyakasi ngatuk nawi.",
            "source": "The cattle are in the homestead kraal."
          },
          {
            "target": "Elosi ekile akimuj.",
            "source": "The man goes for food."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kidyeny\" mean in English?",
            "correctAnswer": "Left",
            "options": [
              "Right",
              "Money",
              "Help!",
              "Left"
            ],
            "hint": "Direction left (akan na lo kidyeny = left hand)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Teten\" mean in English?",
            "correctAnswer": "Right",
            "options": [
              "Money",
              "Help!",
              "Right",
              "Left"
            ],
            "hint": "Direction right (akan na lo teten = right hand). (Barton 1921)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ngeselekin / Pesa\" mean in English?",
            "correctAnswer": "Money",
            "options": [
              "Help!",
              "Money",
              "Left",
              "Right"
            ],
            "hint": "Currency / cash coins."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Money\" in Turkana?",
            "correctAnswer": "Ngeselekin / Pesa",
            "options": [
              "Ngeselekin / Pesa",
              "Kidyeny",
              "Teten",
              "Togangai! / Torimokakithai!"
            ],
            "hint": "ngeh-seh-leh-keen"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Help!\" in Turkana?",
            "correctAnswer": "Togangai! / Torimokakithai!",
            "options": [
              "Kidyeny",
              "Teten",
              "Ngeselekin / Pesa",
              "Togangai! / Torimokakithai!"
            ],
            "hint": "toh-gah-ngah-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fire!\" in Turkana?",
            "correctAnswer": "Akim!",
            "options": [
              "Teten",
              "Ngeselekin / Pesa",
              "Akim!",
              "Kidyeny"
            ],
            "hint": "ah-keem"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Turkana terms with their English meanings:",
            "correctAnswer": "Kidyeny: Left, Teten: Right, Ngeselekin / Pesa: Money, Togangai! / Torimokakithai!: Help!",
            "pairs": [
              {
                "left": "Kidyeny",
                "right": "Left"
              },
              {
                "left": "Teten",
                "right": "Right"
              },
              {
                "left": "Ngeselekin / Pesa",
                "right": "Money"
              },
              {
                "left": "Togangai! / Torimokakithai!",
                "right": "Help!"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Left\" in Turkana.",
            "correctAnswer": "Kidyeny",
            "options": [
              "Kidyeny",
              "Teten",
              "Ngeselekin / Pesa",
              "Togangai! / Torimokakithai!"
            ],
            "hint": "kee-dyehn-y"
          }
        ]
      }
    ]
  }
];
