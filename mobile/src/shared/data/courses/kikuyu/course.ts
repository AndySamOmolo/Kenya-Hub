// ============================================================
// Kikuyu (Gĩkũyũ) Language Course Configuration & Units
// Based 100% on Public Domain Sources:
// 1. Hildegarde Hinde (1904) "Vocabularies of the Kamba and Kikuyu Languages of East Africa" (Cambridge Univ. Press)
// 2. C. W. Hobley (1922) "Bantu Beliefs and Customary Institutions" (H. F. & G. Witherby, London)
// 3. Wiktionary Appendix:Bantu Swadesh lists (Zone E20 Kikuyu core lexical roots)
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
  description: 'The most widely spoken ethnic language in Kenya, spoken across the fertile Central Highlands around Mount Kenya (Kĩrĩnyaga). Grounded in Hildegarde Hinde (1904) and C. W. Hobley (1922).',
  color: '#2E7D32',
  sources: ['johnston-uganda-protectorate-1902', 'hemery-kikuyu-1903', 'kamba-kikuyu-vocabularies', 'mcgregor-kikuyu-1904', 'routledge-kikuyu-1910', 'hobley-akamba-ethnology-1910', 'johnston-bantu-1919', 'bantu-beliefs', 'open-web-swadesh-comparative'],
};

export const KIKUYU_UNITS: CourseUnit[] = [
  {
    id: 'kikuyu-unit-1',
    title: 'Unit 1: Greetings, Courtesies & Everyday Inquiries (Hinde 1904)',
    description: 'Master traditional Gĩkũyũ salutations, polite replies, and essential conversational questions recorded by Hildegarde Hinde (1904).',
    icon: '👋',
    skills: [
      {
        id: 'kikuyu-greetings-1',
        title: 'Salutations & Welcoming Guests',
        icon: 'Handshake',
        description: 'Learn traditional salutations, responses, and welcoming hospitality phrases from Hinde (1904).',
        tips: "In Hildegarde Hinde's 1904 vocabulary, the foundational salutation is 'Mwohoro?' ('What is the news/peace?'), answered with 'Mwohoro mwēga' ('Good news/peace') or 'Mwēga munnu' ('Very good'). Welcoming a visitor home involves 'Uka haha' ('Come here') and offering water ('Rehe maii').",
        culturalNote: "Among the Agĩkũyũ of the Central Highlands, inquiring after the peace ('mwohoro') of the homestead, children, and herds precedes any formal conversation.",
        words: [
          { target: 'Mwohoro', source: 'Salutation / How is the news?', pronunciation: 'mwoh-hoh-roh', hint: 'Hinde (1904) p. 67 salutation' },
          { target: 'Mwohoro mwēga', source: 'Good news / Fine', pronunciation: 'mwoh-hoh-roh mweh-gah', hint: 'Hinde (1904) p. 67 reply' },
          { target: 'Mwēga munnu', source: 'Very good / Very well', pronunciation: 'mweh-gah moo-noo', hint: 'Hinde (1904) p. 67 emphatic reply' },
          { target: 'Nimwega', source: 'I am good / well', pronunciation: 'nee-mweh-gah', hint: 'Hinde (1904) p. 64' },
          { target: 'Uka haha', source: 'Come here', pronunciation: 'oo-kah hah-hah', hint: 'Hinde (1904) p. 65' },
          { target: 'Rehe maii', source: 'Bring water', pronunciation: 'reh-heh mah-ee', hint: 'Hinde (1904) p. 65' },
          { target: 'Reherria', source: 'Bring food', pronunciation: 'reh-heh-rri-ah', hint: 'Hinde (1904) p. 65' },
          { target: 'Aca', source: 'No', pronunciation: 'ah-chah', hint: 'Core negative particle' }
        ],
        sentences: [
          { target: 'Mwohoro? Mwohoro mwēga munnu.', source: 'How is the news? Very good news.' },
          { target: 'Uka haha, rehe maii.', source: 'Come here, bring water.' },
          { target: 'Nimwega, reherria.', source: 'I am well, bring food.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the traditional Kikuyu salutation recorded by Hildegarde Hinde (1904)?',
            correctAnswer: 'Mwohoro',
            options: ['Mwohoro', 'Uka haha', 'Rehe maii', 'Aca'],
            hint: 'Literally asks after the news/peace'
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Bring water" in Kikuyu (Hinde 1904)?',
            correctAnswer: 'Rehe maii',
            options: ['Rehe maii', 'Uka haha', 'Mwohoro mwēga', 'Nimwega'],
            hint: 'maii = water'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Kikuyu hospitality phrases from Hinde (1904) with their English meanings:',
            correctAnswer: 'Mwohoro: Salutation, Mwēga munnu: Very good, Uka haha: Come here, Rehe maii: Bring water',
            pairs: [
              { left: 'Mwohoro', right: 'Salutation' },
              { left: 'Mwēga munnu', right: 'Very good' },
              { left: 'Uka haha', right: 'Come here' },
              { left: 'Rehe maii', right: 'Bring water' }
            ]
          }
        ]
      },
      {
        id: 'kikuyu-questions-1',
        title: 'Essential Questions & Conversational Replies',
        icon: 'MessageCircle',
        description: 'Ask names, origins, destinations, and intentions using Hinde (1904) phraseology.',
        tips: "Question words in Gĩkũyũ typically stand at the end of the clause or attach as interrogative enclitics: '-atia?' (how?), '-ku?' (where?), '-ki?' (what?), as in 'Wita gwatia?' (What is your name?) and 'Wathiiku?' (Where are you going?).",
        words: [
          { target: 'Wita gwatia?', source: 'What is your name?', pronunciation: 'wee-tah gwah-ti-ah', hint: 'Hinde (1904) p. 64' },
          { target: 'Wathiiku?', source: 'Where are you going?', pronunciation: 'wah-thee-koo', hint: 'Hinde (1904) p. 64' },
          { target: 'Ukwendakki?', source: 'What do you want?', pronunciation: 'oo-kwen-dah-kee', hint: 'Hinde (1904) p. 64' },
          { target: 'Umaku?', source: 'Where do you come from?', pronunciation: 'oo-mah-koo', hint: 'Hinde (1904) p. 64' },
          { target: 'Uguikatia?', source: 'What are you doing?', pronunciation: 'oo-goo-ee-kah-ti-ah', hint: 'Hinde (1904) p. 64' },
          { target: 'Nikkigekki?', source: 'What is this?', pronunciation: 'nee-kee-geh-kee', hint: 'Hinde (1904) p. 64' },
          { target: 'Meku maii?', source: 'Where is the water?', pronunciation: 'meh-koo mah-ee', hint: 'Hinde (1904) p. 64' },
          { target: 'Ndiui', source: 'I do not know', pronunciation: 'ndee-oo-ee', hint: 'Hinde (1904) p. 64 (also ndikumenya)' }
        ],
        sentences: [
          { target: 'Wita gwatia? Umaku?', source: 'What is your name? Where do you come from?' },
          { target: 'Wathiiku? Ukwendakki?', source: 'Where are you going? What do you want?' },
          { target: 'Meku maii? Ndiui.', source: 'Where is the water? I do not know.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you ask "Where are you going?" in Kikuyu (Hinde 1904)?',
            correctAnswer: 'Wathiiku?',
            options: ['Wathiiku?', 'Wita gwatia?', 'Ndiui', 'Meku maii?'],
            hint: 'Contains the verb root -thi (go) + -ku (where)'
          },
          {
            type: 'fill_blank',
            prompt: 'Complete the question: "Meku _____?" (Where is the water?)',
            correctAnswer: 'maii',
            options: ['maii', 'haha', 'mwaki', 'nyumba'],
            hint: 'Kikuyu word for water'
          }
        ]
      }
    ]
  },
  {
    id: 'kikuyu-unit-2',
    title: 'Unit 2: Numbers, Counting & Multipliers (Hinde 1904)',
    description: 'Learn the decimal counting system from 1 to 100, ordinals, and frequency multipliers from Hinde (1904).',
    icon: '🔢',
    skills: [
      {
        id: 'kikuyu-numbers-1-10',
        title: 'Cardinal Numbers 1 to 10',
        icon: 'Hash',
        description: 'Count from 1 (imue) to 10 (ikumi) in Gĩkũyũ.',
        tips: "In Hinde (1904, p. 62), Kikuyu cardinal numbers 1–10 are: imue (1), igiri (2), ithatu (3), inya (4), ithanu (5), thanthatu (6), muguanja (7), inyanya (8), ikenda (9), and ikumi (10).",
        words: [
          { target: 'Imue', source: 'One (1)', pronunciation: 'ee-mweh', hint: 'Hinde (1904) p. 62 (modern: ĩmwe)' },
          { target: 'Igiri', source: 'Two (2)', pronunciation: 'ee-gee-ree', hint: 'Hinde (1904) p. 62 (modern: igĩrĩ)' },
          { target: 'Ithatu', source: 'Three (3)', pronunciation: 'ee-thah-too', hint: 'Hinde (1904) p. 62 (modern: ithatũ)' },
          { target: 'Inya', source: 'Four (4)', pronunciation: 'ee-nyah', hint: 'Hinde (1904) p. 62' },
          { target: 'Ithanu', source: 'Five (5)', pronunciation: 'ee-thah-noo', hint: 'Hinde (1904) p. 62 (modern: ithano)' },
          { target: 'Thanthatu', source: 'Six (6)', pronunciation: 'thahn-thah-too', hint: 'Hinde (1904) p. 62' },
          { target: 'Muguanja', source: 'Seven (7)', pronunciation: 'moo-gwah-njah', hint: 'Hinde (1904) p. 62' },
          { target: 'Inyanya', source: 'Eight (8)', pronunciation: 'ee-nyah-nyah', hint: 'Hinde (1904) p. 62' },
          { target: 'Ikenda', source: 'Nine (9)', pronunciation: 'ee-ken-dah', hint: 'Hinde (1904) p. 62' },
          { target: 'Ikumi', source: 'Ten (10)', pronunciation: 'ee-koo-mee', hint: 'Hinde (1904) p. 62' }
        ],
        sentences: [
          { target: 'Ikumi na imwe', source: 'Eleven (ten and one)' },
          { target: 'Miti ithatu na mahiga inya', source: 'Three trees and four stones' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the Kikuyu word for "Seven (7)"?',
            correctAnswer: 'Muguanja',
            options: ['Muguanja', 'Thanthatu', 'Inyanya', 'Ikenda'],
            hint: 'Between thanthatu (6) and inyanya (8)'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Kikuyu numbers 1–4 with their English values:',
            correctAnswer: 'Imue: One, Igiri: Two, Ithatu: Three, Inya: Four',
            pairs: [
              { left: 'Imue', right: 'One' },
              { left: 'Igiri', right: 'Two' },
              { left: 'Ithatu', right: 'Three' },
              { left: 'Inya', right: 'Four' }
            ]
          }
        ]
      },
      {
        id: 'kikuyu-numbers-tens-multipliers',
        title: 'Tens (Mirongo), Hundreds & Multipliers',
        icon: 'Calculator',
        description: 'Count by tens from 20 to 100 and express "once, twice, thrice, first, last".',
        tips: "Tens are formed with 'mirongo' + the unit numeral: mirongoiri (20), mirongo itatu (30), mirongo inya (40), mirongo ithanu (50), up to igana (100). Frequency multipliers prefix ka-/kĩ-: kirrimue (once), kēēri (twice), kathatu (thrice).",
        words: [
          { target: 'Mirongoiri', source: 'Twenty (20)', pronunciation: 'mee-roh-ngoh-ee-ree', hint: 'Hinde (1904) p. 62' },
          { target: 'Mirongo itatu', source: 'Thirty (30)', pronunciation: 'mee-roh-ngoh ee-thah-too', hint: 'Hinde (1904) p. 62' },
          { target: 'Mirongo inya', source: 'Forty (40)', pronunciation: 'mee-roh-ngoh ee-nyah', hint: 'Hinde (1904) p. 62' },
          { target: 'Mirongo ithanu', source: 'Fifty (50)', pronunciation: 'mee-roh-ngoh ee-thah-noo', hint: 'Hinde (1904) p. 62' },
          { target: 'Igana', source: 'One hundred (100)', pronunciation: 'ee-gah-nah', hint: 'Hinde (1904) p. 63' },
          { target: 'Kirrimue', source: 'Once (one time)', pronunciation: 'kee-rree-mweh', hint: 'Hinde (1904) p. 63' },
          { target: 'Kēēri', source: 'Twice (two times)', pronunciation: 'keh-eh-ree', hint: 'Hinde (1904) p. 63' },
          { target: 'Kathatu', source: 'Thrice (three times)', pronunciation: 'kah-thah-too', hint: 'Hinde (1904) p. 63' },
          { target: 'Kuambirrira', source: 'First', pronunciation: 'kwahm-bee-rree-rah', hint: 'Hinde (1904) p. 63' },
          { target: 'Kurrigillia', source: 'Last', pronunciation: 'koo-rree-gee-lli-ah', hint: 'Hinde (1904) p. 63' }
        ],
        sentences: [
          { target: 'Mirongoiri na imue', source: 'Twenty-one (twenty and one)' },
          { target: 'Kirrimue, kēēri, kathatu', source: 'Once, twice, thrice' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Igana" mean in Kikuyu?',
            correctAnswer: 'One hundred (100)',
            options: ['One hundred (100)', 'Twenty (20)', 'Fifty (50)', 'Once (one time)'],
            hint: 'Hinde (1904) p. 63'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Kikuyu tens and multipliers with their meanings:',
            correctAnswer: 'Mirongoiri: Twenty (20), Mirongo ithanu: Fifty (50), Kēēri: Twice, Kathatu: Thrice',
            pairs: [
              { left: 'Mirongoiri', right: 'Twenty (20)' },
              { left: 'Mirongo ithanu', right: 'Fifty (50)' },
              { left: 'Kēēri', right: 'Twice' },
              { left: 'Kathatu', right: 'Thrice' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kikuyu-unit-3',
    title: 'Unit 3: Family, Kinship & Social Ranks (Hinde 1904 & Hobley 1922)',
    description: 'Learn terms for family members, life stages, and possessives from Hinde (1904) and Hobley (1922).',
    icon: '👨‍👩‍👧‍👦',
    skills: [
      {
        id: 'kikuyu-family-kinship',
        title: 'Parents, Children & Homestead Kin',
        icon: 'Users',
        description: 'Master core kinship nouns and possessive phrases.',
        tips: "Class 1 animate nouns replace 'mu-' with 'a-' in the plural (mundu → andu, muka → aka), while diminutive 'kana' (child) becomes 'twana' or 'siana' (children).",
        words: [
          { target: 'Baba wiitu', source: 'Our father', pronunciation: 'bah-bah wee-too', hint: 'Hinde (1904) p. 65' },
          { target: 'Nyina wiitu', source: 'Our mother', pronunciation: 'nyee-nah wee-too', hint: 'Hinde (1904) p. 65 (also Mwaitu)' },
          { target: 'Mwana wakua', source: 'My child', pronunciation: 'mwah-nah wah-kwah', hint: 'Hinde (1904) p. 65' },
          { target: 'Siana siaku', source: 'Your children', pronunciation: 'see-ah-nah see-ah-koo', hint: 'Hinde (1904) p. 65' },
          { target: 'Mundu (pl. Andu)', source: 'Person (pl. People)', pronunciation: 'moo-ndoo / ah-ndoo', hint: 'Hinde (1904) p. vi' },
          { target: 'Muka (pl. Aka)', source: 'Woman / Wife (pl. Women / Wives)', pronunciation: 'moo-kah / ah-kah', hint: 'Hinde (1904) p. vi' },
          { target: 'Mwanake (pl. Anake)', source: 'Warrior / Young man (pl. Warriors)', pronunciation: 'mwah-nah-keh / ah-nah-keh', hint: 'Hobley (1922) p. 305' },
          { target: 'Muiritu (pl. Airitu)', source: 'Maiden / Unmarried girl', pronunciation: 'moo-ee-ree-too', hint: 'Hobley (1922) p. 306' },
          { target: 'Mutumia (pl. Atumia)', source: 'Elder of the community', pronunciation: 'moo-too-mee-ah', hint: 'Hobley (1922) p. 307' }
        ],
        sentences: [
          { target: 'Ninakana. Kana kani kiega.', source: 'I have a child. A good child.' },
          { target: 'Twana tothe tunini.', source: 'All the children are small.' },
          { target: 'Mundu nimuwega; andu anega.', source: 'A good man; good men.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the plural of "Muka" (woman/wife) according to Hinde (1904)?',
            correctAnswer: 'Aka',
            options: ['Aka', 'Mika', 'Twana', 'Atumia'],
            hint: 'Animate Class 1 nouns change mu- to a-'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Kikuyu kinship phrases from Hinde (1904) with their meanings:',
            correctAnswer: 'Baba wiitu: Our father, Nyina wiitu: Our mother, Mwana wakua: My child, Siana siaku: Your children',
            pairs: [
              { left: 'Baba wiitu', right: 'Our father' },
              { left: 'Nyina wiitu', right: 'Our mother' },
              { left: 'Mwana wakua', right: 'My child' },
              { left: 'Siana siaku', right: 'Your children' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kikuyu-unit-4',
    title: 'Unit 4: Homestead, Food, Livestock & Daily Sustenance (Hinde 1904)',
    description: 'Talk about food, milk, hunger, cattle, and household items using Hinde (1904).',
    icon: '🍲',
    skills: [
      {
        id: 'kikuyu-food-homestead',
        title: 'Food, Milk, Fire & Homestead Life',
        icon: 'Utensils',
        description: 'Express hunger, request milk and food, and name household items.',
        tips: "Notice the locative suffix '-ini / -eni' in 'nyumbani' (in the house) and the concord on 'nyumba ninene' (a big house) vs. 'ruhiu rwega' (a good knife).",
        words: [
          { target: 'Nihūtie', source: 'I am hungry', pronunciation: 'nee-hoo-ti-eh', hint: 'Hinde (1904) p. 64' },
          { target: 'Ningwenda irria', source: 'I want milk', pronunciation: 'nee-ngwen-dah ee-rri-ah', hint: 'Hinde (1904) p. 64' },
          { target: 'Ugika kurria?', source: 'Do you want to eat?', pronunciation: 'oo-gee-kah koo-rri-ah', hint: 'Hinde (1904) p. 65' },
          { target: 'Ngombe siake', source: 'His cows / cattle', pronunciation: 'ngoh-mbeh see-ah-keh', hint: 'Hinde (1904) p. 65' },
          { target: 'Nyumba ninene', source: 'A big house', pronunciation: 'nyoo-mbah nee-neh-neh', hint: 'Hinde (1904) p. 65' },
          { target: 'Mwitzi wiitu', source: 'Our village / homestead', pronunciation: 'mwee-tzee wee-too', hint: 'Hinde (1904) p. 65 (modern: mũciĩ witũ)' },
          { target: 'Akiamwaki', source: 'Make a fire', pronunciation: 'ah-ki-ah mwah-kee', hint: 'Hinde (1904) p. 65' },
          { target: 'Ruhiu rwega', source: 'A good knife / sword', pronunciation: 'roo-hee-oo rweh-gah', hint: 'Hinde (1904) p. 66' },
          { target: 'Kiratu (pl. Iratu)', source: 'Sandal / shoe (pl. Sandals)', pronunciation: 'kee-rah-too / ee-rah-too', hint: 'Hinde (1904) p. vii' }
        ],
        sentences: [
          { target: 'Nihūtie; ningwenda irria.', source: 'I am hungry; I want milk.' },
          { target: 'Akiamwaki nyumbani.', source: 'Make a fire in the house.' },
          { target: 'Ngombe siake na mwitzi wiitu.', source: 'His cows and our village.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "I want milk" in Kikuyu (Hinde 1904)?',
            correctAnswer: 'Ningwenda irria',
            options: ['Ningwenda irria', 'Nihūtie', 'Akiamwaki', 'Nyumba ninene'],
            hint: 'irria = milk'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Kikuyu homestead phrases with their English translations:',
            correctAnswer: 'Nihūtie: I am hungry, Akiamwaki: Make a fire, Nyumba ninene: A big house, Ngombe siake: His cows',
            pairs: [
              { left: 'Nihūtie', right: 'I am hungry' },
              { left: 'Akiamwaki', right: 'Make a fire' },
              { left: 'Nyumba ninene', right: 'A big house' },
              { left: 'Ngombe siake', right: 'His cows' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kikuyu-unit-5',
    title: 'Unit 5: Verbs, Tenses & Negation (Hinde 1904)',
    description: 'Master affirmative and negative verb conjugations, imperatives, and everyday actions from Hinde (1904).',
    icon: '⚡',
    skills: [
      {
        id: 'kikuyu-verbs-actions',
        title: 'Everyday Verbs, Commands & Negatives',
        icon: 'Activity',
        description: 'Express going, returning, bringing, seeing, and negative statements.',
        tips: "Affirmative future uses -ka-/-ga- ('ningathi' = I will go; 'ningashōka' = I will return), while negative verbs prefix nd-/ndi- ('ndithie / ndikathie' = I will not go; 'ndionna' = I do not see).",
        words: [
          { target: 'Ningathi', source: 'I will go', pronunciation: 'nee-ngah-thee', hint: 'Hinde (1904) p. 64' },
          { target: 'Ndikathie', source: 'I will not go', pronunciation: 'ndee-kah-thee-eh', hint: 'Hinde (1904) p. 64' },
          { target: 'Ndingihotta kuthi', source: 'I cannot go', pronunciation: 'ndee-ngee-hoh-ttah koo-thee', hint: 'Hinde (1904) p. 64' },
          { target: 'Ningashōka', source: 'I will return', pronunciation: 'nee-ngah-shoh-kah', hint: 'Hinde (1904) p. 64' },
          { target: 'Ndikwenda', source: 'I do not want', pronunciation: 'ndee-kwen-dah', hint: 'Hinde (1904) p. 64' },
          { target: 'Ndionna', source: 'I do not see', pronunciation: 'ndee-oh-nnah', hint: 'Hinde (1904) p. 64' },
          { target: 'Nikurehe', source: 'I bring', pronunciation: 'nee-koo-reh-heh', hint: 'Hinde (1904) p. 64' },
          { target: 'Aniuka', source: 'He has come', pronunciation: 'ah-nee-oo-kah', hint: 'Hinde (1904) p. 65' },
          { target: 'Udikuka', source: 'Do not come', pronunciation: 'oo-dee-koo-kah', hint: 'Hinde (1904) p. 66' },
          { target: 'Kirra', source: 'Be quiet', pronunciation: 'kee-rrah', hint: 'Hinde (1904) p. 65' }
        ],
        sentences: [
          { target: 'Ningathi; ningashōka.', source: 'I will go; I will return.' },
          { target: 'Ndikwenda kuthi; ndingihotta kuthi.', source: 'I do not want to go; I cannot go.' },
          { target: 'Aniuka; ithui kurehe.', source: 'He has come; we bring.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "I will return" in Kikuyu (Hinde 1904)?',
            correctAnswer: 'Ningashōka',
            options: ['Ningashōka', 'Ningathi', 'Ndionna', 'Udikuka'],
            hint: 'Future prefix ninga- + -shōka (return)'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the affirmative and negative Kikuyu verb forms from Hinde (1904):',
            correctAnswer: 'Ningathi: I will go, Ndikathie: I will not go, Aniuka: He has come, Udikuka: Do not come',
            pairs: [
              { left: 'Ningathi', right: 'I will go' },
              { left: 'Ndikathie', right: 'I will not go' },
              { left: 'Aniuka', right: 'He has come' },
              { left: 'Udikuka', right: 'Do not come' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kikuyu-unit-6',
    title: 'Unit 6: Nature, Body Parts & Cultural Heritage (Hinde 1904 & Hobley 1922)',
    description: 'Explore natural landscapes, anatomy, and classical Agĩkũyũ cultural institutions from Hinde (1904) and Hobley (1922).',
    icon: '🏔️',
    skills: [
      {
        id: 'kikuyu-nature-body',
        title: 'Nature, Anatomy & Locatives',
        icon: 'Sun',
        description: 'Name features of the highland landscape and parts of the body.',
        tips: "Class 3/4 trees ('muti → miti'), Class 5/6 stones ('ihiga → mahiga'), and Class 7/8 mountains ('kirima → irima') illustrate the core inanimate noun classes.",
        words: [
          { target: 'Muti (pl. Miti)', source: 'Tree (pl. Trees)', pronunciation: 'moo-tee / mee-tee', hint: 'Hinde (1904) p. vi' },
          { target: 'Ihiga (pl. Mahiga)', source: 'Stone (pl. Stones)', pronunciation: 'ee-hee-gah / mah-hee-gah', hint: 'Hinde (1904) p. vi' },
          { target: 'Kirima (pl. Irima)', source: 'Mountain / Hill (pl. Mountains)', pronunciation: 'kee-ree-mah / ee-ree-mah', hint: 'Hinde (1904) & Swadesh' },
          { target: 'Ruui', source: 'River / Stream', pronunciation: 'roo-oo-ee', hint: 'Hinde (1904) & Swadesh' },
          { target: 'Mbura', source: 'Rain', pronunciation: 'mboo-rah', hint: 'Hinde (1904) & Swadesh' },
          { target: 'Kiara (pl. Shiara)', source: 'Finger (pl. Fingers)', pronunciation: 'kee-ah-rah / shee-ah-rah', hint: 'Hinde (1904) p. vii' },
          { target: 'Uwoko wake', source: 'His hand / arm', pronunciation: 'oo-woh-koh wah-keh', hint: 'Hinde (1904) p. 65' },
          { target: 'Mtueni', source: 'In the head', pronunciation: 'mtoo-eh-nee', hint: 'Hinde (1904) p. 67' }
        ],
        sentences: [
          { target: 'Mti unwega; miti moni mijega.', source: 'A good tree; good trees.' },
          { target: 'Mitini na nyumbani.', source: 'In the trees and in the house.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the plural of "Ihiga" (stone) in Kikuyu (Hinde 1904)?',
            correctAnswer: 'Mahiga',
            options: ['Mahiga', 'Mihiga', 'Shihiga', 'Ahiga'],
            hint: 'Class 5/6 changes initial i- to ma-'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the singular and plural Kikuyu nouns from Hinde (1904):',
            correctAnswer: 'Muti: Miti (Trees), Ihiga: Mahiga (Stones), Kiratu: Iratu (Sandals), Kiara: Shiara (Fingers)',
            pairs: [
              { left: 'Muti', right: 'Miti (Trees)' },
              { left: 'Ihiga', right: 'Mahiga (Stones)' },
              { left: 'Kiratu', right: 'Iratu (Sandals)' },
              { left: 'Kiara', right: 'Shiara (Fingers)' }
            ]
          }
        ]
      },
      {
        id: 'kikuyu-culture-hobley',
        title: 'Agĩkũyũ Council, Age-Sets & Sacred Heritage (Hobley 1922)',
        icon: 'Landmark',
        description: 'Learn the institutional vocabulary of the Kiama council, Itwika generational transfer, and sacred Mugumo tree from C. W. Hobley (1922).',
        tips: "C. W. Hobley's 1922 Glossary documents how Agĩkũyũ governance revolved around the 'Kiama' (council of elders), 'Chira' (deliberation/lawsuit), and the alternating generational moieties 'Maina' and 'Mwangi' who transferred authority at the 'Itwika' ceremony.",
        words: [
          { target: 'Ngai', source: 'God, the Supreme Creator', pronunciation: 'ngah-ee', hint: 'Hobley (1922) p. 305' },
          { target: 'Mugumo', source: 'Sacred wild fig tree (shrine of sacrifice)', pronunciation: 'moo-goo-moh', hint: 'Hobley (1922) p. 306' },
          { target: 'Kiama', source: 'Council of elders', pronunciation: 'kee-ah-mah', hint: 'Hobley (1922) p. 306' },
          { target: 'Chira', source: 'Lawsuit / council deliberation', pronunciation: 'chee-rah', hint: 'Hobley (1922) p. 305' },
          { target: 'Rika (pl. Marika)', source: 'Circumcision age-set cohort', pronunciation: 'ree-kah', hint: 'Hobley (1922) p. 307' },
          { target: 'Itwika', source: 'Generational handing-over ceremony', pronunciation: 'ee-twee-kah', hint: 'Hobley (1922) p. 306' },
          { target: 'Muhiriga', source: 'Primary clan', pronunciation: 'moo-hee-ree-gah', hint: 'Hobley (1922) p. 306' },
          { target: 'Mbari', source: 'Sub-clan / ridge lineage', pronunciation: 'mbah-ree', hint: 'Hobley (1922) p. 306' },
          { target: 'Mundu Mugo', source: 'Traditional healer and diviner', pronunciation: 'moo-ndoo moo-goh', hint: 'Hobley (1922) p. 306' }
        ],
        sentences: [
          { target: 'Atumia a Kiama na chira.', source: 'The elders of the Council and the deliberation.' },
          { target: 'Mugumo ni muti wa Ngai.', source: 'The Mugumo fig is the sacred tree of God.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In C. W. Hobley (1922), what is the "Itwika"?',
            correctAnswer: 'Generational handing-over ceremony',
            options: ['Generational handing-over ceremony', 'Sacred wild fig tree', 'Sub-clan or ridge lineage', 'Lawsuit before the elders'],
            hint: 'Held every 30–35 years between the Maina and Mwangi generations'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the classical Kikuyu institutional terms from Hobley (1922):',
            correctAnswer: 'Kiama: Council of elders, Mugumo: Sacred wild fig tree, Muhiriga: Primary clan, Rika: Age-set cohort',
            pairs: [
              { left: 'Kiama', right: 'Council of elders' },
              { left: 'Mugumo', right: 'Sacred wild fig tree' },
              { left: 'Muhiriga', right: 'Primary clan' },
              { left: 'Rika', right: 'Age-set cohort' }
            ]
          }
        ]
      }
    ]
  }
];
