// ============================================================
// Luhya (Oluluyia) Language Course Configuration & Units
// Based on "A First Course in Luyia Grammar"
// by G. Donohew (Kima, 1962) with cross-dialect standard orthography
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const LUHYA_CONFIG: LanguageConfig = {
  id: 'luhya',
  name: 'Luhya',
  nativeName: 'Oluluyia',
  family: 'Bantu',
  counties: ['Kakamega', 'Bungoma', 'Vihiga', 'Busia'],
  speakers: '6.8M',
  speechLocale: 'sw-KE',
  description: 'A major Western Bantu language spoken across Western Kenya, featuring rich noun class morphology, verbal extensions, and vibrant proverbs.',
  color: '#2FA463',
};

export const LUHYA_UNITS: CourseUnit[] = [
  {
    id: 'luhya-unit-1',
    title: 'Unit 1: Foundations, Greetings & Numbers',
    description: 'Master core greetings, polite courtesies, and the counting system of Oluluyia.',
    icon: '👋',
    skills: [
      {
        id: 'luhya-greetings',
        title: 'Greetings & Politeness',
        icon: 'Handshake',
        description: 'Learn universal greetings, daily salutations, and courtesy in Oluluyia.',
        tips: "In Luhya culture, 'Mulembe' is the universal greeting meaning 'peace'. When greeting one person say 'Mulembe', and to multiple people say 'Milembe'. The question 'Oli orie?' ('How are you?') is answered with 'Endi bulayi' ('I am fine') or 'Ee, endi omulamu' ('Yes, I am healthy'). 'Bushieele!' literally announces that dawn has broken.",
        culturalNote: "Greetings in Western Kenya are thorough and warm. Rushing a greeting without asking about family and health is considered impolite. Elders are greeted with hands clasped or a respectful bow.",
        words: [
          { target: 'Mulembe', source: 'Hello / Peace', pronunciation: 'moo-lehm-beh', hint: 'Universal greeting to one person (lit. "peace")', example: 'Mulembe, omwami! — Mulembe.' },
          { target: 'Milembe', source: 'Hello (to many)', pronunciation: 'mee-lehm-beh', hint: 'Plural greeting to a group of people', example: 'Milembe, abeetsa!' },
          { target: 'Oli orie?', source: 'How are you?', pronunciation: 'oh-lee oh-ree-eh', hint: 'Singular inquiry (Plural: Muli murie?)', example: 'Oli orie? — Endi bulayi.' },
          { target: 'Endi bulayi', source: 'I am fine / well', pronunciation: 'ehn-dee boo-lah-yee', hint: 'Standard polite reply (Plural: Khuli bulayi)', example: 'Endi bulayi, orio muno.' },
          { target: 'Oli omulamu?', source: 'Are you well / healthy?', pronunciation: 'oh-lee oh-moo-lah-moo', hint: 'Lit. "Are you with life/health?"', example: 'Oli omulamu? — Ee, endi omulamu.' },
          { target: 'Bushieele!', source: 'Good morning!', pronunciation: 'boo-shee-eh-leh', hint: 'Lit. "It has become light / dawn has arrived"', example: 'Bushieele, mama!' },
          { target: 'Bwakheele', source: 'Good afternoon / evening', pronunciation: 'bwah-kheh-leh', hint: 'Greeting used as the day progresses into evening' },
          { target: 'Orio muno', source: 'Thank you very much', pronunciation: 'oh-ree-oh moo-noh', hint: "'Orio' = thanks; 'muno' = very much (Plural: Murio muno)", example: 'Orio muno khulwa obukhoonyi.' },
          { target: 'Olindwe', source: 'Goodbye / Stay safe', pronunciation: 'oh-leen-dweh', hint: 'Parting blessing to one person (Plural: Mulindwe)' },
          { target: 'Tsia bulayi', source: 'Go well', pronunciation: 'tsee-ah boo-lah-yee', hint: 'Said to someone departing (Plural: Mutsie bulayi)' }
        ],
        sentences: [
          { target: 'Mulembe, oli orie?', source: 'Hello, how are you?' },
          { target: 'Endi bulayi, orio muno.', source: 'I am fine, thank you very much.' },
          { target: 'Bushieele, papa, oli omulamu?', source: 'Good morning, father, are you well?' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Hello" in Oluluyia to one person?',
            correctAnswer: 'Mulembe',
            options: ['Mulembe', 'Bushieele', 'Olindwe', 'Orio'],
            hint: 'Literally means "peace"'
          },
          {
            type: 'multiple_choice',
            prompt: 'What is the standard reply to "Oli orie?" (How are you)?',
            correctAnswer: 'Endi bulayi',
            options: ['Endi bulayi', 'Tawe', 'Milembe', 'Bushieele'],
            hint: 'Means "I am fine / well"'
          },
          {
            type: 'multiple_choice',
            prompt: 'Which phrase means "Thank you very much"?',
            correctAnswer: 'Orio muno',
            options: ['Orio muno', 'Mulembe', 'Tsia bulayi', 'Oli orie?'],
            hint: "'Orio' means thanks and 'muno' means very much"
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Luhya greetings with their English meanings:',
            correctAnswer: 'Mulembe: Hello, Endi bulayi: I am fine, Bushieele: Good morning, Olindwe: Goodbye',
            pairs: [
              { left: 'Mulembe', right: 'Hello' },
              { left: 'Endi bulayi', right: 'I am fine' },
              { left: 'Bushieele', right: 'Good morning' },
              { left: 'Olindwe', right: 'Goodbye' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Complete the morning greeting: "_____, papa, oli orie?"',
            correctAnswer: 'Bushieele',
            options: ['Bushieele', 'Olindwe', 'Tawe', 'Amatsi'],
            hint: 'Morning greeting meaning dawn has arrived'
          }
        ]
      },
      {
        id: 'luhya-numbers',
        title: 'Numbers & Counting',
        icon: 'Hash',
        description: 'Learn counting in Oluluyia from one to ten and cardinal multiples.',
        tips: "Luhya numbers take agreement prefixes depending on what is being counted. The base stems are: -lala (1), -bili (2), -taru (3), -ne (4), -raano (5). Numbers 6 to 10 are Sasaba (6), Musaafo (7), Munaane (8), Shienda (9), and Likhumi/Ekhumi (10). Multiples of ten are formed with 'Amakhumi': Amakhumi kabili = 20, Amakhumi kataru = 30.",
        culturalNote: "Counting cattle, goats, and bags of maize at the market is a foundational skill in the agrarian communities of Kakamega, Bungoma, and Vihiga.",
        words: [
          { target: 'Ndala', source: 'One', pronunciation: 'ndah-lah', hint: 'Stem -lala; also "mulala" for people', example: 'Ing\'ombe ndala.' },
          { target: 'Tsibili', source: 'Two', pronunciation: 'tsee-bee-lee', hint: 'Stem -bili; "babili" for people', example: 'Abaana babili.' },
          { target: 'Tsitaru', source: 'Three', pronunciation: 'tsee-tah-roo', hint: 'Stem -taru; "bataru" for people', example: 'Tsing\'ombe tsitaru.' },
          { target: 'Tsine', source: 'Four', pronunciation: 'tsee-neh', hint: 'Stem -ne; "bane" for people', example: 'Abasaatsa bane.' },
          { target: 'Tsirano', source: 'Five', pronunciation: 'tsee-rah-noh', hint: 'Stem -raano; "baraano" for people', example: 'Ebikombe tsirano.' },
          { target: 'Sasaba', source: 'Six', pronunciation: 'sah-sah-bah', hint: 'Numeral six; also "bisasaba" or "sita"' },
          { target: 'Musaafo', source: 'Seven', pronunciation: 'moo-sah-ah-foh', hint: 'Numeral seven; also "saba"' },
          { target: 'Munaane', source: 'Eight', pronunciation: 'moo-nah-ah-neh', hint: 'Numeral eight across western Bantu' },
          { target: 'Shienda', source: 'Nine', pronunciation: 'shee-ehn-dah', hint: 'Numeral nine; also "tisa"' },
          { target: 'Likhumi', source: 'Ten', pronunciation: 'lee-khoo-mee', hint: 'Ten; plural is Amakhumi (tens)', example: 'Likhumi na ndala (eleven).' }
        ],
        sentences: [
          { target: 'Abaana babili bali ingo.', source: 'Two children are at home.' },
          { target: 'Tsing\'ombe tsitaru tsili khumukunda.', source: 'Three cows are on the farm.' },
          { target: 'Amakhumi kabili namulala.', source: 'Twenty-one.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the word for "Ten" in Oluluyia?',
            correctAnswer: 'Likhumi',
            options: ['Likhumi', 'Tsirano', 'Munaane', 'Ndala'],
            hint: 'Plural form is amakhumi'
          },
          {
            type: 'multiple_choice',
            prompt: 'What is "Two" when referring to people (e.g. abaana)?',
            correctAnswer: 'Babili',
            options: ['Babili', 'Ndala', 'Bane', 'Tsitaru'],
            hint: 'Uses the people prefix ba- with stem -bili'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the numbers to their Luhya names:',
            correctAnswer: 'Ndala: 1, Tsibili: 2, Tsitaru: 3, Likhumi: 10',
            pairs: [
              { left: 'Ndala', right: '1 (One)' },
              { left: 'Tsibili', right: '2 (Two)' },
              { left: 'Tsitaru', right: '3 (Three)' },
              { left: 'Likhumi', right: '10 (Ten)' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Count in sequence: Ndala, Tsibili, _____, Tsine, Tsirano.',
            correctAnswer: 'Tsitaru',
            options: ['Tsitaru', 'Munaane', 'Likhumi', 'Shienda'],
            hint: 'Numeral for three'
          }
        ]
      }
    ]
  },
  {
    id: 'luhya-unit-2',
    title: 'Unit 2: Family, People & Society',
    description: 'Learn terms for family kinship, social hierarchy, and Class 1/2 person nouns.',
    icon: '👨‍👩‍👧‍👦',
    skills: [
      {
        id: 'luhya-family',
        title: 'Family & Kinship',
        icon: 'Users',
        description: 'Vocabulary for immediate family, elders, and kinship bonds.',
        tips: "In Oluluyia, human beings belong to Noun Class 1 (singular prefix 'omu-') and Class 2 (plural prefix 'aba-'). For example: 'omwana' (child) -> 'abaana' (children); 'omukhasi' (woman/wife) -> 'abakhasi' (women); 'omusaatsa' (man) -> 'abasaatsa' (men). Respect terms include 'Papa' (father) and 'Mama' (mother).",
        culturalNote: "The extended family is rooted in the ancestral homestead ('hango'). Grandparents ('kuuka' and 'gogo') hold revered positions, transmitting folklore ('tsinkano') and clan wisdom to youths around the evening hearth.",
        words: [
          { target: 'Papa', source: 'Father', pronunciation: 'pah-pah', hint: 'Also "Taata" or "Seefwe" (our father)', example: 'Papa ali ingo.' },
          { target: 'Mama', source: 'Mother', pronunciation: 'mah-mah', hint: 'Also "Mayi" or "Neefwe" (our mother)', example: 'Mama ateekha obusuma.' },
          { target: 'Omwana', source: 'Child', pronunciation: 'ohm-wah-nah', hint: 'Plural: Abaana (Wanga: Abana)', example: 'Omwana akona.' },
          { target: 'Abaana', source: 'Children', pronunciation: 'ah-bah-ah-nah', hint: 'Plural of omwana (Wanga: abana)', example: 'Abaana bano basoma.' },
          { target: 'Omusaatsa', source: 'Man / Husband', pronunciation: 'oh-moo-sah-ah-tsah', hint: 'Plural: Abasaatsa', example: 'Omusaatsa akhola.' },
          { target: 'Omukhasi', source: 'Woman / Wife', pronunciation: 'oh-moo-khah-see', hint: 'Plural: Abakhasi', example: 'Omukhasi akhoonya omwana.' },
          { target: 'Omusiani', source: 'Boy / Young man', pronunciation: 'oh-moo-see-ah-nee', hint: 'Plural: Abasiani', example: 'Omusiani achenda.' },
          { target: 'Omukhaana', source: 'Girl / Young woman', pronunciation: 'oh-moo-khah-ah-nah', hint: 'Plural: Abakhaana', example: 'Omukhaana ateekha.' },
          { target: 'Omwitsa', source: 'Friend', pronunciation: 'ohm-wee-tsah', hint: 'Plural: Abeetsa (friends); also "omwina"', example: 'Omwitsa wanje ali hano.' },
          { target: 'Kuuka', source: 'Grandfather', pronunciation: 'koo-oo-kah', hint: 'Elder patriarch; plural: Abakuka (ancestors/grandfathers in Wanga)' }
        ],
        sentences: [
          { target: 'Papa nomukhasi bali ingo.', source: 'Father and mother/wife are at home.' },
          { target: 'Omwana alola omusaatsa.', source: 'The child sees the man.' },
          { target: 'Abaana basoma eshitabo.', source: 'The children read the book.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the plural of "omwana" (child) in Oluluyia?',
            correctAnswer: 'Abaana',
            options: ['Abaana', 'Abasaatsa', 'Abakhasi', 'Abasiani'],
            hint: 'Class 2 plural prefix aba- coalesces with stem to abaana'
          },
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Friend"?',
            correctAnswer: 'Omwitsa',
            options: ['Omwitsa', 'Omusiani', 'Omwami', 'Omwechi'],
            hint: 'Plural is abeetsa'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the family members to their Luhya translations:',
            correctAnswer: 'Papa: Father, Mama: Mother, Omwana: Child, Omwitsa: Friend',
            pairs: [
              { left: 'Papa', right: 'Father' },
              { left: 'Mama', right: 'Mother' },
              { left: 'Omwana', right: 'Child' },
              { left: 'Omwitsa', right: 'Friend' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "_____ ateekha obusuma." (Mother cooks ugali.)',
            correctAnswer: 'Mama',
            options: ['Mama', 'Omusiani', 'Kuuka', 'Ing\'ombe'],
            hint: 'Luhya term for mother'
          }
        ]
      },
      {
        id: 'luhya-people-roles',
        title: 'Community & Roles',
        icon: 'Crown',
        description: 'Terms for leadership, elders, learners, and community occupations.',
        tips: "Nouns in the person class represent social roles and duties. 'Omwami' designates a chief or distinguished leader. 'Omwechesia' is a teacher (from okhwechesia, to teach), while 'omwechi' is a student or pupil. 'Omuteeshi' is a cook (from okhuteekha, to cook).",
        culturalNote: "The Wanga Kingdom (headed by the Nabongo) and clan councils headed by an 'Omuruchi' or 'Omwami' (plural Abaruchi / Abaami) have historically given community leaders deep political and spiritual significance in resolving disputes, distributing land, and presiding over assemblies.",
        words: [
          { target: 'Omundu', source: 'Person / Human being', pronunciation: 'oh-moon-doo', hint: 'Plural: Abandu (people)', example: 'Omundu uno amenya bulayi.' },
          { target: 'Abandu', source: 'People', pronunciation: 'ah-bahn-doo', hint: 'Human beings / community members', example: 'Abandu bano nabalayi.' },
          { target: 'Omwami', source: 'Chief / Leader', pronunciation: 'ohm-wah-mee', hint: 'Plural: Abaami', example: 'Omwami areeba abandu.' },
          { target: 'Omuruchi', source: 'Ruler / Clan Governor', pronunciation: 'oh-moo-roo-chee', hint: 'Plural: Abaruchi (clan leader from Appleby 1961)', example: 'Omuruchi areeba abandu.' },
          { target: 'Omulimi', source: 'Farmer / Cultivator', pronunciation: 'oh-moo-lee-mee', hint: 'Plural: Abalimi (from okhulima)', example: 'Omulimi akhola mushirima.' },
          { target: 'Omwechesia', source: 'Teacher', pronunciation: 'ohm-weh-cheh-see-ah', hint: 'Plural: Abeechesia', example: 'Omwechesia awechesia bulayi.' },
          { target: 'Omwechi', source: 'Pupil / Student', pronunciation: 'ohm-weh-chee', hint: 'Plural: Abeechi', example: 'Omwechi asoma eshitabo.' },
          { target: 'Omuteeshi', source: 'Cook', pronunciation: 'oh-moo-teh-eh-shee', hint: 'Plural: Abateeshi (from okhuteekha)' },
          { target: 'Omushiele', source: 'Elderly woman / Matron', pronunciation: 'oh-moo-shee-eh-leh', hint: 'Plural: Abashiele (term of great respect)' },
          { target: 'Omukhaye', source: 'Respected lady / Wife', pronunciation: 'oh-moo-khah-yeh', hint: 'Plural: Abakhaye' }
        ],
        sentences: [
          { target: 'Omwechesia awechesia abeechi.', source: 'The teacher teaches the pupils.' },
          { target: 'Omwami areeba abandu bano.', source: 'The chief asks these people.' },
          { target: 'Abandu bamenya halala.', source: 'The people live together.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Omwami" mean in Oluluyia?',
            correctAnswer: 'Chief / Leader',
            options: ['Chief / Leader', 'Teacher', 'Cook', 'Child'],
            hint: 'Traditional title of authority'
          },
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Teacher"?',
            correctAnswer: 'Omwechesia',
            options: ['Omwechesia', 'Omwechi', 'Omuteeshi', 'Omushiele'],
            hint: 'Derived from the verb okhwechesia (to teach)'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the roles to their English definitions:',
            correctAnswer: 'Omundu: Person, Omwami: Chief / Leader, Omwechesia: Teacher, Omwechi: Pupil / Student',
            pairs: [
              { left: 'Omundu', right: 'Person' },
              { left: 'Omwami', right: 'Chief / Leader' },
              { left: 'Omwechesia', right: 'Teacher' },
              { left: 'Omwechi', right: 'Pupil / Student' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Fill in the blank: "_____ awechesia abeechi bulayi." (The teacher teaches the pupils well.)',
            correctAnswer: 'Omwechesia',
            options: ['Omwechesia', 'Omulilo', 'Amatsi', 'Inyama'],
            hint: 'Word for teacher'
          }
        ]
      }
    ]
  },
  {
    id: 'luhya-unit-3',
    title: 'Unit 3: Verbs & Daily Sentences',
    description: 'Learn present tense verb conjugations, question construction, and conversational phrasing.',
    icon: '⚡',
    skills: [
      {
        id: 'luhya-verbs-present',
        title: 'Present Tense Verbs',
        icon: 'Flame',
        description: 'Understand verb roots, subject prefixes, and present continuous action.',
        tips: "Infinitives in Oluluyia take the prefix 'okhu-': okhulola (to see), okhuboola (to say), okhuteekha (to cook). In the present tense, subject prefixes attach directly to the verb stem: en- (I) -> endola (I see); o- (you) -> olola (you see); a- (he/she) -> alola (he/she sees); khu- (we) -> khulola (we see); ba- (they) -> balola (they see).",
        culturalNote: "Oral communication and debate are highly appreciated in village barazas. Speaking persuasively ('okhuboola bulayi') is considered a mark of maturity and wisdom.",
        words: [
          { target: 'Okhuboola', source: 'To speak / say', pronunciation: 'oh-khoo-boh-oh-lah', hint: 'Present: alola / aboola', example: 'Aboola bulayi (He speaks well).' },
          { target: 'Okhulia', source: 'To eat', pronunciation: 'oh-khoo-lee-ah', hint: 'Wanga: okhulia (Present: elia / alia)', example: 'Alia obusuma.' },
          { target: 'Okhuteekha', source: 'To cook', pronunciation: 'oh-khoo-teh-eh-khah', hint: 'Present: endekha (I cook), ateekha', example: 'Ateekha obusuma.' },
          { target: 'Okhumenya', source: 'To live / reside', pronunciation: 'oh-khoo-meh-nyah', hint: 'Present: emenya (I live), amenya', example: 'Amenya ingo.' },
          { target: 'Okhulola', source: 'To see / look', pronunciation: 'oh-khoo-loh-lah', hint: 'Present: endola (I see), alola', example: 'Endola omwana.' },
          { target: 'Okhukhoonya', source: 'To help', pronunciation: 'oh-khoo-khoh-ohn-yah', hint: 'Present: akhoonya', example: 'Akhoonya abashiele.' },
          { target: 'Okhureeba', source: 'To ask / question', pronunciation: 'oh-khoo-reh-eh-bah', hint: 'Present: endeeba (I ask), areeba', example: 'Areeba omusiani.' },
          { target: 'Okhukhola', source: 'To do / work / make', pronunciation: 'oh-khoo-khoh-lah', hint: 'Present: akhola', example: 'Akhola bulayi.' },
          { target: 'Okhubala', source: 'To count', pronunciation: 'oh-khoo-bah-lah', hint: 'Present: abala', example: 'Abala abandu.' },
          { target: 'Okhunyala', source: 'To be able / can', pronunciation: 'oh-khoo-nyah-lah', hint: 'Present: enyala (I can), anyala', example: 'Enyala okhukhoonya.' },
          { target: 'Okhusoma', source: 'To read / study', pronunciation: 'oh-khoo-soh-mah', hint: 'Present: asoma', example: 'Asoma eshitabo.' }
        ],
        sentences: [
          { target: 'Endola omwana nomusaatsa.', source: 'I see the child and the man.' },
          { target: 'Enyala okhuteekha bulayi.', source: 'I can cook well.' },
          { target: 'Abandu bamenya halala.', source: 'The people live together.' },
          { target: 'Omwana alia obusuma bulano.', source: 'The child eats ugali now.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Okhuteekha" mean in Oluluyia?',
            correctAnswer: 'To cook',
            options: ['To cook', 'To read', 'To see', 'To speak'],
            hint: 'Action done in the kitchen with obusuma'
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you say "I see the child"?',
            correctAnswer: 'Endola omwana',
            options: ['Endola omwana', 'Endekha omwana', 'Amenya omwana', 'Asoma omwana'],
            hint: 'First person subject prefix en- with verb stem lola'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the verbs to their meanings:',
            correctAnswer: 'Okhuboola: To speak, Okhuteekha: To cook, Okhulola: To see, Okhukhoonya: To help',
            pairs: [
              { left: 'Okhuboola', right: 'To speak' },
              { left: 'Okhuteekha', right: 'To cook' },
              { left: 'Okhulola', right: 'To see' },
              { left: 'Okhukhoonya', right: 'To help' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "Enyala okhu_____ bulayi." (I can cook well.)',
            correctAnswer: 'teekha',
            options: ['teekha', 'mulembe', 'amatsi', 'papa'],
            hint: 'Infinitive verb root for cook'
          }
        ]
      },
      {
        id: 'luhya-daily-speech',
        title: 'Conversations & Questions',
        icon: 'MessageSquare',
        description: 'Ask questions, give directions, and converse naturally in daily situations.',
        tips: "Key question interrogatives in Oluluyia include: 'Heena?' (where?), 'Wina?' (who?), 'Shiina?' (what?), and 'Orie?' (how?). Sentences connect with 'nende' (and/with) or the prefix 'na-'. 'Bulano' means now, 'hatiiti' means a little, and 'muno' means very much.",
        culturalNote: "When greeting strangers traveling on western Kenyan paths, it is common to ask 'Otsia heena?' (Where are you heading?) or 'Orulile heena?' (Where have you come from?) as an expression of hospitality and communal care.",
        words: [
          { target: 'Ee', source: 'Yes', pronunciation: 'eh-eh', hint: 'Affirmation; also "Yii"' },
          { target: 'Tawe', source: 'No', pronunciation: 'tah-weh', hint: 'Negative; also "Seee"' },
          { target: 'Heena?', source: 'Where?', pronunciation: 'heh-eh-nah', hint: 'Locative question word', example: 'Otsia heena?' },
          { target: 'Wina?', source: 'Who? (singular)', pronunciation: 'wee-nah', hint: 'Plural: Beena?', example: 'Oyo ni wina?' },
          { target: 'Shiina?', source: 'What?', pronunciation: 'shee-ee-nah', hint: 'Question for things', example: 'Shino ni shiina?' },
          { target: 'Orie?', source: 'How? (singular)', pronunciation: 'oh-ree-eh', hint: 'Plural: Murie?', example: 'Oli orie?' },
          { target: 'Nende', source: 'And / With', pronunciation: 'nehn-deh', hint: 'Conjunction connecting nouns', example: 'Papa nende mama.' },
          { target: 'Bulano', source: 'Now', pronunciation: 'boo-lah-noh', hint: 'At the present moment', example: 'Atsia bulano.' },
          { target: 'Hatiiti', source: 'A little', pronunciation: 'hah-tee-ee-tee', hint: 'Small quantity', example: 'Ateekha hatiiti.' },
          { target: 'Muno', source: 'Very much / Greatly', pronunciation: 'moo-noh', hint: 'Intensifier', example: 'Orio muno.' }
        ],
        sentences: [
          { target: 'Otsia heena? — Enzia ingo.', source: 'Where are you going? — I am going home.' },
          { target: 'Oyo ni wina? — Ni omwitsa wanje.', source: 'Who is that? — It is my friend.' },
          { target: 'Shino ni shiina? — Neshitabo.', source: 'What is this? — It is a book.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you ask "Where are you going?" in Oluluyia?',
            correctAnswer: 'Otsia heena?',
            options: ['Otsia heena?', 'Oli orie?', 'Oyo ni wina?', 'Shino ni shiina?'],
            hint: "'Heena' means where"
          },
          {
            type: 'multiple_choice',
            prompt: 'Which word means "No"?',
            correctAnswer: 'Tawe',
            options: ['Tawe', 'Ee', 'Bulano', 'Muno'],
            hint: 'Standard negative particle'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the question words:',
            correctAnswer: 'Heena?: Where?, Wina?: Who?, Shiina?: What?, Orie?: How?',
            pairs: [
              { left: 'Heena?', right: 'Where?' },
              { left: 'Wina?', right: 'Who?' },
              { left: 'Shiina?', right: 'What?' },
              { left: 'Orie?', right: 'How?' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Translate "I am going home": "Enzia _____."',
            correctAnswer: 'ingo',
            options: ['ingo', 'amatsi', 'tawe', 'bulano'],
            hint: 'Word meaning home or homestead'
          }
        ]
      }
    ]
  },
  {
    id: 'luhya-unit-4',
    title: 'Unit 4: Food, Nature & Pastoral Life',
    description: 'Learn vocabulary for traditional culinary delicacies, homesteads, cattle, and the environment.',
    icon: '🍲',
    skills: [
      {
        id: 'luhya-food-home',
        title: 'Food & Homestead',
        icon: 'Utensils',
        description: 'Staple culinary terms, homestead spaces, and meals.',
        tips: "In Oluluyia, 'Obusuma' is the central staple stiff porridge (ugali). 'Amatsi' (water) is a plural noun in Class 6. 'Ingokho' (chicken) holds the highest culinary honor. Homestead terms include 'enju' (house), 'hango' (homestead), and 'omukunda' (shamba / farm field).",
        culturalNote: "Serving a guest 'Ingokho nende Obusuma' (chicken and ugali) accompanied by traditional leafy greens ('tsisaka' or 'tsimbindi') is the ultimate expression of western Kenyan warmth and respect.",
        words: [
          { target: 'Obusuma', source: 'Ugali / Maize meal', pronunciation: 'oh-boo-soo-mah', hint: 'The core staple food of western Kenya', example: 'Ateekha obusuma.' },
          { target: 'Amatsi', source: 'Water', pronunciation: 'ah-mah-tsee', hint: 'Class 6 plural noun; also "amanji"', example: 'Khunywa amatsi.' },
          { target: 'Inyama', source: 'Meat', pronunciation: 'een-yah-mah', hint: 'Beef, goat meat, or mutton', example: 'Alia inyama.' },
          { target: 'Ingokho', source: 'Chicken', pronunciation: 'een-goh-khoh', hint: 'Premier feast bird', example: 'Ateekha ingokho.' },
          { target: 'Amabeele', source: 'Milk', pronunciation: 'ah-mah-beh-eh-leh', hint: 'Fresh cow or goat milk' },
          { target: 'Omunyu', source: 'Salt', pronunciation: 'oh-moo-nyoo', hint: 'Seasoning salt' },
          { target: 'Tsimbindi', source: 'Cowpea leaves / Traditional greens', pronunciation: 'tseem-been-dee', hint: 'Beloved indigenous vegetable stew' },
          { target: 'Enju', source: 'House', pronunciation: 'ehn-joo', hint: 'Plural: Tsinju; also "enyumba"', example: 'Amenya munju.' },
          { target: 'Hango', source: 'Home / Homestead', pronunciation: 'hahn-goh', hint: 'Also "ingo" (at home)', example: 'Bali hango.' },
          { target: 'Omukunda', source: 'Farm / Garden / Shamba', pronunciation: 'oh-moo-koon-dah', hint: 'Plural: Emikunda', example: 'Akhola khumukunda.' }
        ],
        sentences: [
          { target: 'Ateekha obusuma nende ingokho.', source: 'He/she cooks ugali and chicken.' },
          { target: 'Khunywa amatsi amalayi.', source: 'We drink good water.' },
          { target: 'Abeingo bali munju.', source: 'The family is in the house.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the Luhya word for "Ugali"?',
            correctAnswer: 'Obusuma',
            options: ['Obusuma', 'Inyama', 'Amatsi', 'Enju'],
            hint: 'The staple maize meal'
          },
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Water"?',
            correctAnswer: 'Amatsi',
            options: ['Amatsi', 'Ingokho', 'Hango', 'Omunyu'],
            hint: 'Class 6 plural liquid noun'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the foods with their English translations:',
            correctAnswer: 'Obusuma: Ugali, Amatsi: Water, Inyama: Meat, Ingokho: Chicken',
            pairs: [
              { left: 'Obusuma', right: 'Ugali' },
              { left: 'Amatsi', right: 'Water' },
              { left: 'Inyama', right: 'Meat' },
              { left: 'Ingokho', right: 'Chicken' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "Khunywa _____ amalayi." (We drink good water.)',
            correctAnswer: 'amatsi',
            options: ['amatsi', 'obusuma', 'inyama', 'enju'],
            hint: 'Word for water'
          }
        ]
      },
      {
        id: 'luhya-animals-nature',
        title: 'Nature & Animals',
        icon: 'Trees',
        description: 'Livestock, wildlife, weather elements, and natural features.',
        tips: "Animals in Class 9/10 use the prefix 'in-' or 'tsin-': 'ing'ombe' (one cow) -> 'tsing'ombe' (cows); 'imbusi' (goat) -> 'tsimbusi' (goats); 'embwa' (dog) -> 'tsimbwa' (dogs). Key environmental terms include 'Nyasaye' or 'Wele' (God/Creator), 'enyanga' (sun/day), 'omwesi' (moon/month), and 'omulilo' (fire).",
        culturalNote: "The rolling green hills of Western Kenya, dotted with indigenous trees ('emisaala') and fertile red soils ('eloba'), are supported by generous rainfall ('imbula'), sustaining agricultural and pastoral pride.",
        words: [
          { target: "Ing'ombe", source: 'Cow', pronunciation: 'eeng-ohm-beh', hint: "Plural: Tsing'ombe (cattle / herd)", example: "Ing'ombe yalia obunyasi." },
          { target: "Tsing'ombe", source: 'Cows / Cattle', pronunciation: 'tseeng-ohm-beh', hint: 'Plural of cow', example: "Tsing'ombe tsili khumukunda." },
          { target: 'Imbusi', source: 'Goat', pronunciation: 'eem-boo-see', hint: 'Plural: Tsimbusi', example: 'Imbusi ndala.' },
          { target: 'Embwa', source: 'Dog', pronunciation: 'ehm-bwah', hint: 'Plural: Tsimbwa' },
          { target: 'Inzofu', source: 'Elephant', pronunciation: 'een-zoh-foo', hint: 'Plural: Tsinzofu' },
          { target: 'Nyasaye', source: 'God / Creator', pronunciation: 'nyah-sah-yeh', hint: 'The Almighty; also "Wele"', example: 'Nyasaye ni omulayi.' },
          { target: 'Enyanga', source: 'Sun / Daytime', pronunciation: 'ehn-yahn-gah', hint: 'Also "eliuba"', example: 'Enyanga yamalile okhurula.' },
          { target: 'Omwesi', source: 'Moon / Month', pronunciation: 'ohm-weh-see', hint: 'Plural: Emiesi', example: 'Omwesi kwola.' },
          { target: 'Omulilo', source: 'Fire', pronunciation: 'oh-moo-lee-loh', hint: 'Plural: Emililo', example: 'Omulilo kwaka.' },
          { target: 'Imbula', source: 'Rain', pronunciation: 'eem-boo-lah', hint: 'Precipitation', example: 'Imbula yikwa leelo.' }
        ],
        sentences: [
          { target: "Tsing'ombe tsili khumukunda.", source: 'The cows are on the farm.' },
          { target: 'Imbula yikwa leelo.', source: 'Rain falls today.' },
          { target: 'Nyasaye ni omulayi.', source: 'God is good.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: "What is the Luhya word for \"Cow\"?",
            correctAnswer: "Ing'ombe",
            options: ["Ing'ombe", 'Imbusi', 'Embwa', 'Inzofu'],
            hint: 'Plural is tsing\'ombe'
          },
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Rain"?',
            correctAnswer: 'Imbula',
            options: ['Imbula', 'Omulilo', 'Enyanga', 'Omwesi'],
            hint: 'Essential rainfall'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the animals and natural elements:',
            correctAnswer: "Ing'ombe: Cow, Imbusi: Goat, Omulilo: Fire, Imbula: Rain",
            pairs: [
              { left: "Ing'ombe", right: 'Cow' },
              { left: 'Imbusi', right: 'Goat' },
              { left: 'Omulilo', right: 'Fire' },
              { left: 'Imbula', right: 'Rain' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "_____ ni omulayi." (God is good.)',
            correctAnswer: 'Nyasaye',
            options: ['Nyasaye', 'Embwa', 'Omulilo', 'Tawe'],
            hint: 'Name for God in western Kenya'
          }
        ]
      }
    ]
  }
];
