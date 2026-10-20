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
  description: 'A major Western Bantu language spoken across Western Kenya, featuring rich noun class morphology, verbal extensions, and vibrant proverbs across 17+ varieties including Bukusu, Wanga, and Maragoli.',
  color: '#2FA463',
  sources: ['luyia-grammar', 'wanga-english', 'bukusu-dictionary-marlo'],
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
        tips: "In Luhya culture, 'Mulembe' is the universal greeting meaning 'peace'. When greeting one person say 'Mulembe', and to multiple people say 'Milembe'. The question 'Oli orie?' ('How are you?') is answered with 'Endi bulayi' ('I am fine') or 'Ee, endi omulamu' ('Yes, I am healthy'). 'Bushieele!' (in Bukusu: 'Bwaasyeele!') announces dawn, and thanks is 'Orio muno' (in Bukusu: 'Oryo muno').",
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
  },
  
  // ── EXPANDED SOURCE-VERIFIED UNITS ──
  {
    "id": "luhya-unit-5-greetings",
    "title": "Unit 5: Greetings & Farewells",
    "description": "Comprehensive Luhya (Luyia) curriculum for Greetings & Farewells, vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Handshake",
    "skills": [
      {
        "id": "luhya-exp-greetings",
        "title": "Greetings & Farewells",
        "icon": "Handshake",
        "description": "Master Luhya (Luyia) greetings & farewells vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Greetings & Farewells, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ee, endi omulamu' (Yes, I am well), 'Bwakheele / Bwileele' (Good afternoon / evening), 'Olindwe / Khulolebwe' (Goodbye), 'Menya bulayi' (Stay well).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Ee, endi omulamu",
            "source": "Yes, I am well",
            "pronunciation": "eh-eh ehn-dee oh-moo-lah-moo",
            "hint": "Affirmative health confirmation",
            "example": "Ee, endi omulamu — Yes, I am well (Affirmative health confirmation)"
          },
          {
            "target": "Bwakheele / Bwileele",
            "source": "Good afternoon / evening",
            "pronunciation": "bwah-kheh-leh / bwee-leh-leh",
            "hint": "Salutation used when afternoon or dusk approaches",
            "example": "Bwakheele / Bwileele — Good afternoon / evening (Salutation used when afternoon or dusk approaches)"
          },
          {
            "target": "Olindwe / Khulolebwe",
            "source": "Goodbye",
            "pronunciation": "oh-leen-dweh / khoo-loh-leh-bweh",
            "hint": "Parting blessing: 'May you be preserved' / 'We shall see each other'",
            "example": "Olindwe / Khulolebwe — Goodbye (Parting blessing: 'May you be preserved' / 'We shall see each other')"
          },
          {
            "target": "Menya bulayi",
            "source": "Stay well",
            "pronunciation": "meh-nyah boo-lah-yee",
            "hint": "Said by departing traveler to hosts (Plural: Mumenye bulayi)",
            "example": "Menya bulayi — Stay well (Said by departing traveler to hosts (Plural: Mumenye bulayi))"
          },
          {
            "target": "Karibu / Ingira",
            "source": "Welcome",
            "pronunciation": "kah-ree-boo / een-gee-rah",
            "hint": "'Ingira' = enter / come inside",
            "example": "Karibu / Ingira — Welcome ('Ingira' = enter / come inside)"
          },
          {
            "target": "Sundwa / Pole",
            "source": "Sorry / Sympathy",
            "pronunciation": "soon-dwah / poh-leh",
            "hint": "Expression of empathy or apology",
            "example": "Sundwa / Pole — Sorry / Sympathy (Expression of empathy or apology)"
          },
          {
            "target": "Shiesia abeingo",
            "source": "Greet those at home",
            "pronunciation": "shee-eh-see-ah ah-beh-een-goh",
            "hint": "Warm courteous farewell message for family",
            "example": "Shiesia abeingo — Greet those at home (Warm courteous farewell message for family)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ee, endi omulamu\" mean in English?",
            "correctAnswer": "Yes, I am well",
            "options": [
              "Good afternoon / evening",
              "Goodbye",
              "Stay well",
              "Yes, I am well"
            ],
            "hint": "Affirmative health confirmation"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Bwakheele / Bwileele\" mean in English?",
            "correctAnswer": "Good afternoon / evening",
            "options": [
              "Goodbye",
              "Stay well",
              "Good afternoon / evening",
              "Yes, I am well"
            ],
            "hint": "Salutation used when afternoon or dusk approaches"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Olindwe / Khulolebwe\" mean in English?",
            "correctAnswer": "Goodbye",
            "options": [
              "Stay well",
              "Goodbye",
              "Yes, I am well",
              "Good afternoon / evening"
            ],
            "hint": "Parting blessing: 'May you be preserved' / 'We shall see each other'"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Goodbye\" in Luhya (Luyia)?",
            "correctAnswer": "Olindwe / Khulolebwe",
            "options": [
              "Olindwe / Khulolebwe",
              "Ee, endi omulamu",
              "Bwakheele / Bwileele",
              "Menya bulayi"
            ],
            "hint": "oh-leen-dweh / khoo-loh-leh-bweh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Stay well\" in Luhya (Luyia)?",
            "correctAnswer": "Menya bulayi",
            "options": [
              "Ee, endi omulamu",
              "Bwakheele / Bwileele",
              "Olindwe / Khulolebwe",
              "Menya bulayi"
            ],
            "hint": "meh-nyah boo-lah-yee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Welcome\" in Luhya (Luyia)?",
            "correctAnswer": "Karibu / Ingira",
            "options": [
              "Bwakheele / Bwileele",
              "Olindwe / Khulolebwe",
              "Karibu / Ingira",
              "Ee, endi omulamu"
            ],
            "hint": "kah-ree-boo / een-gee-rah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Ee, endi omulamu: Yes, I am well, Bwakheele / Bwileele: Good afternoon / evening, Olindwe / Khulolebwe: Goodbye, Menya bulayi: Stay well",
            "pairs": [
              {
                "left": "Ee, endi omulamu",
                "right": "Yes, I am well"
              },
              {
                "left": "Bwakheele / Bwileele",
                "right": "Good afternoon / evening"
              },
              {
                "left": "Olindwe / Khulolebwe",
                "right": "Goodbye"
              },
              {
                "left": "Menya bulayi",
                "right": "Stay well"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Yes, I am well\" in Luhya (Luyia).",
            "correctAnswer": "Ee, endi omulamu",
            "options": [
              "Ee, endi omulamu",
              "Bwakheele / Bwileele",
              "Olindwe / Khulolebwe",
              "Menya bulayi"
            ],
            "hint": "eh-eh ehn-dee oh-moo-lah-moo"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-6-numbers",
    "title": "Unit 6: Numbers",
    "description": "Comprehensive Luhya (Luyia) curriculum for Numbers, vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Hash",
    "skills": [
      {
        "id": "luhya-exp-numbers",
        "title": "Numbers (Part 1)",
        "icon": "Hash",
        "description": "Master Luhya (Luyia) numbers vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Numbers, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ndala / Mulala' (One), 'Tsibili / Babili' (Two), 'Tsitaru / Bataru' (Three), 'Tsine / Bane' (Four).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Ndala / Mulala",
            "source": "One",
            "pronunciation": "ndah-lah / moo-lah-lah",
            "hint": "Root: -lala; 'ndala' (Class 9/10), 'mulala' (person, Class 1)",
            "example": "Ndala / Mulala — One (Root: -lala; 'ndala' (Class 9/10), 'mulala' (person, Class 1))"
          },
          {
            "target": "Tsibili / Babili",
            "source": "Two",
            "pronunciation": "tsee-bee-lee / bah-bee-lee",
            "hint": "Root: -bili; 'babili' (people), 'tsibili' (animals/objects)",
            "example": "Tsibili / Babili — Two (Root: -bili; 'babili' (people), 'tsibili' (animals/objects))"
          },
          {
            "target": "Tsitaru / Bataru",
            "source": "Three",
            "pronunciation": "tsee-tah-roo / bah-tah-roo",
            "hint": "Root: -taru; 'bataru' (people), 'tsitaru' (things)",
            "example": "Tsitaru / Bataru — Three (Root: -taru; 'bataru' (people), 'tsitaru' (things))"
          },
          {
            "target": "Tsine / Bane",
            "source": "Four",
            "pronunciation": "tsee-neh / bah-neh",
            "hint": "Root: -ne; 'bane' (people), 'tsine' (objects)",
            "example": "Tsine / Bane — Four (Root: -ne; 'bane' (people), 'tsine' (objects))"
          },
          {
            "target": "Tsirano / Baraano",
            "source": "Five",
            "pronunciation": "tsee-rah-noh / bah-rah-ah-noh",
            "hint": "Root: -raano; 'baraano' (people), 'tsirano' (things)",
            "example": "Tsirano / Baraano — Five (Root: -raano; 'baraano' (people), 'tsirano' (things))"
          },
          {
            "target": "Sasaba / Bisasaba",
            "source": "Six",
            "pronunciation": "sah-sah-bah / bee-sah-sah-bah",
            "hint": "Traditional Bantu numeral; also 'sita'",
            "example": "Sasaba / Bisasaba — Six (Traditional Bantu numeral; also 'sita')"
          },
          {
            "target": "Musaafo / Saba",
            "source": "Seven",
            "pronunciation": "moo-sah-ah-foh / sah-bah",
            "hint": "Traditional Luyia number; also 'saba'",
            "example": "Musaafo / Saba — Seven (Traditional Luyia number; also 'saba')"
          },
          {
            "target": "Shienda / Tisa",
            "source": "Nine",
            "pronunciation": "shee-ehn-dah / tee-sah",
            "hint": "Traditional Luyia 9; also 'fisa'",
            "example": "Shienda / Tisa — Nine (Traditional Luyia 9; also 'fisa')"
          },
          {
            "target": "Likhumi / Ekhumi",
            "source": "Ten",
            "pronunciation": "lee-khoo-mee / eh-khoo-mee",
            "hint": "Plural: Amakhumi (tens)",
            "example": "Likhumi / Ekhumi — Ten (Plural: Amakhumi (tens))"
          },
          {
            "target": "Likhumi na ndala",
            "source": "Eleven",
            "pronunciation": "lee-khoo-mee nah ndah-lah",
            "hint": "Lit. 'ten and one'",
            "example": "Likhumi na ndala — Eleven (Lit. 'ten and one')"
          },
          {
            "target": "Likhumi na tsibili",
            "source": "Twelve",
            "pronunciation": "lee-khoo-mee nah tsee-bee-lee",
            "hint": "Lit. 'ten and two'",
            "example": "Likhumi na tsibili — Twelve (Lit. 'ten and two')"
          },
          {
            "target": "Amakhumi kabili",
            "source": "Twenty",
            "pronunciation": "ah-mah-khoo-mee kah-bee-lee",
            "hint": "Lit. 'two tens'",
            "example": "Amakhumi kabili — Twenty (Lit. 'two tens')"
          },
          {
            "target": "Amakhumi kataru",
            "source": "Thirty",
            "pronunciation": "ah-mah-khoo-mee kah-tah-roo",
            "hint": "Lit. 'three tens'",
            "example": "Amakhumi kataru — Thirty (Lit. 'three tens')"
          },
          {
            "target": "Egana / Eshikana",
            "source": "Hundred",
            "pronunciation": "eh-gah-nah / eh-shee-kah-nah",
            "hint": "Cardinal 100",
            "example": "Egana / Eshikana — Hundred (Cardinal 100)"
          },
          {
            "target": "Elufu",
            "source": "Thousand",
            "pronunciation": "eh-loo-foo",
            "hint": "Cardinal 1,000",
            "example": "Elufu — Thousand (Cardinal 1,000)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ndala / Mulala\" mean in English?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
            ],
            "hint": "Root: -lala; 'ndala' (Class 9/10), 'mulala' (person, Class 1)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Tsibili / Babili\" mean in English?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
              "One"
            ],
            "hint": "Root: -bili; 'babili' (people), 'tsibili' (animals/objects)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Tsitaru / Bataru\" mean in English?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Root: -taru; 'bataru' (people), 'tsitaru' (things)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Luhya (Luyia)?",
            "correctAnswer": "Tsitaru / Bataru",
            "options": [
              "Tsitaru / Bataru",
              "Ndala / Mulala",
              "Tsibili / Babili",
              "Tsine / Bane"
            ],
            "hint": "tsee-tah-roo / bah-tah-roo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Luhya (Luyia)?",
            "correctAnswer": "Tsine / Bane",
            "options": [
              "Ndala / Mulala",
              "Tsibili / Babili",
              "Tsitaru / Bataru",
              "Tsine / Bane"
            ],
            "hint": "tsee-neh / bah-neh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Five\" in Luhya (Luyia)?",
            "correctAnswer": "Tsirano / Baraano",
            "options": [
              "Tsibili / Babili",
              "Tsitaru / Bataru",
              "Tsirano / Baraano",
              "Ndala / Mulala"
            ],
            "hint": "tsee-rah-noh / bah-rah-ah-noh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Ndala / Mulala: One, Tsibili / Babili: Two, Tsitaru / Bataru: Three, Tsine / Bane: Four",
            "pairs": [
              {
                "left": "Ndala / Mulala",
                "right": "One"
              },
              {
                "left": "Tsibili / Babili",
                "right": "Two"
              },
              {
                "left": "Tsitaru / Bataru",
                "right": "Three"
              },
              {
                "left": "Tsine / Bane",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"One\" in Luhya (Luyia).",
            "correctAnswer": "Ndala / Mulala",
            "options": [
              "Ndala / Mulala",
              "Tsibili / Babili",
              "Tsitaru / Bataru",
              "Tsine / Bane"
            ],
            "hint": "ndah-lah / moo-lah-lah"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-7-family",
    "title": "Unit 7: Family & Relationships",
    "description": "Comprehensive Luhya (Luyia) curriculum for Family & Relationships, vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Users",
    "skills": [
      {
        "id": "luhya-exp-family",
        "title": "Family & Relationships",
        "icon": "Users",
        "description": "Master Luhya (Luyia) family & relationships vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Family & Relationships, pay special attention to pronunciation and morphological prefixes/suffixes: 'Papa / Taata' (Father), 'Mama / Mayi' (Mother), 'Omwitsa / Omwina' (Friend), 'Gogo' (Grandmother).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Papa / Taata",
            "source": "Father",
            "pronunciation": "pah-pah / tah-ah-tah",
            "hint": "Also 'Seefwe' (our father)",
            "example": "Papa / Taata — Father (Also 'Seefwe' (our father))"
          },
          {
            "target": "Mama / Mayi",
            "source": "Mother",
            "pronunciation": "mah-mah / mah-yee",
            "hint": "Also 'Neefwe' (our mother)",
            "example": "Mama / Mayi — Mother (Also 'Neefwe' (our mother))"
          },
          {
            "target": "Omwitsa / Omwina",
            "source": "Friend",
            "pronunciation": "ohm-wee-tsah / ohm-wee-nah",
            "hint": "Plural: Abeetsa / Abalina (friends / companions)",
            "example": "Omwitsa / Omwina — Friend (Plural: Abeetsa / Abalina (friends / companions))"
          },
          {
            "target": "Gogo",
            "source": "Grandmother",
            "pronunciation": "goh-goh",
            "hint": "Grandmother or revered matriarch",
            "example": "Gogo — Grandmother (Grandmother or revered matriarch)"
          },
          {
            "target": "Mbotswa",
            "source": "Sibling (opposite sex)",
            "pronunciation": "mboh-tswah",
            "hint": "Brother to female speaker; sister to male speaker",
            "example": "Mbotswa — Sibling (opposite sex) (Brother to female speaker; sister to male speaker)"
          },
          {
            "target": "Mulamwa",
            "source": "In-law",
            "pronunciation": "moo-lahm-wah",
            "hint": "Brother-in-law or sister-in-law",
            "example": "Mulamwa — In-law (Brother-in-law or sister-in-law)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Papa / Taata\" mean in English?",
            "correctAnswer": "Father",
            "options": [
              "Mother",
              "Friend",
              "Grandmother",
              "Father"
            ],
            "hint": "Also 'Seefwe' (our father)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mama / Mayi\" mean in English?",
            "correctAnswer": "Mother",
            "options": [
              "Friend",
              "Grandmother",
              "Mother",
              "Father"
            ],
            "hint": "Also 'Neefwe' (our mother)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Omwitsa / Omwina\" mean in English?",
            "correctAnswer": "Friend",
            "options": [
              "Grandmother",
              "Friend",
              "Father",
              "Mother"
            ],
            "hint": "Plural: Abeetsa / Abalina (friends / companions)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Friend\" in Luhya (Luyia)?",
            "correctAnswer": "Omwitsa / Omwina",
            "options": [
              "Omwitsa / Omwina",
              "Papa / Taata",
              "Mama / Mayi",
              "Gogo"
            ],
            "hint": "ohm-wee-tsah / ohm-wee-nah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Grandmother\" in Luhya (Luyia)?",
            "correctAnswer": "Gogo",
            "options": [
              "Papa / Taata",
              "Mama / Mayi",
              "Omwitsa / Omwina",
              "Gogo"
            ],
            "hint": "goh-goh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sibling (opposite sex)\" in Luhya (Luyia)?",
            "correctAnswer": "Mbotswa",
            "options": [
              "Mama / Mayi",
              "Omwitsa / Omwina",
              "Mbotswa",
              "Papa / Taata"
            ],
            "hint": "mboh-tswah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Papa / Taata: Father, Mama / Mayi: Mother, Omwitsa / Omwina: Friend, Gogo: Grandmother",
            "pairs": [
              {
                "left": "Papa / Taata",
                "right": "Father"
              },
              {
                "left": "Mama / Mayi",
                "right": "Mother"
              },
              {
                "left": "Omwitsa / Omwina",
                "right": "Friend"
              },
              {
                "left": "Gogo",
                "right": "Grandmother"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Father\" in Luhya (Luyia).",
            "correctAnswer": "Papa / Taata",
            "options": [
              "Papa / Taata",
              "Mama / Mayi",
              "Omwitsa / Omwina",
              "Gogo"
            ],
            "hint": "pah-pah / tah-ah-tah"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-8-food",
    "title": "Unit 8: Food & Dining",
    "description": "Comprehensive Luhya (Luyia) curriculum for Food & Dining, vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Utensils",
    "skills": [
      {
        "id": "luhya-exp-food",
        "title": "Food & Dining",
        "icon": "Utensils",
        "description": "Master Luhya (Luyia) food & dining vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Food & Dining, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ebiakhulia' (Food), 'Amatsi / Amanji' (Water), 'Ifula / Eshisutu' (Fish), 'Tsimbindi / Tsisaka' (Traditional greens).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Ebiakhulia",
            "source": "Food",
            "pronunciation": "eh-bee-ah-khoo-lee-ah",
            "hint": "Also 'Kumakula' (provisions / foodstuffs)",
            "example": "Ebiakhulia — Food (Also 'Kumakula' (provisions / foodstuffs))"
          },
          {
            "target": "Amatsi / Amanji",
            "source": "Water",
            "pronunciation": "ah-mah-tsee / ah-mahn-jee",
            "hint": "Plural noun in Class 6 (essential staple)",
            "example": "Amatsi / Amanji — Water (Plural noun in Class 6 (essential staple))"
          },
          {
            "target": "Ifula / Eshisutu",
            "source": "Fish",
            "pronunciation": "ee-foo-lah / eh-shee-soo-too",
            "hint": "Freshwater river or lake fish",
            "example": "Ifula / Eshisutu — Fish (Freshwater river or lake fish)"
          },
          {
            "target": "Tsimbindi / Tsisaka",
            "source": "Traditional greens",
            "pronunciation": "tseem-been-dee / tsee-sah-kah",
            "hint": "Indigenous leafy vegetables (cowpeas, spider plant)",
            "example": "Tsimbindi / Tsisaka — Traditional greens (Indigenous leafy vegetables (cowpeas, spider plant))"
          },
          {
            "target": "Obuchi",
            "source": "Honey",
            "pronunciation": "oh-boo-chee",
            "hint": "Pure wild beehive honey",
            "example": "Obuchi — Honey (Pure wild beehive honey)"
          },
          {
            "target": "Eliyai / Liyai",
            "source": "Egg",
            "pronunciation": "eh-lee-yah-yee / lee-yah-yee",
            "hint": "Plural: Amayai (or amabuyu)",
            "example": "Eliyai / Liyai — Egg (Plural: Amayai (or amabuyu))"
          },
          {
            "target": "Lirabu / Litoro",
            "source": "Banana / Plantain",
            "pronunciation": "lee-rah-boo / lee-toh-roh",
            "hint": "Plural: Amarabu / Amatore",
            "example": "Lirabu / Litoro — Banana / Plantain (Plural: Amarabu / Amatore)"
          },
          {
            "target": "Amapwoni",
            "source": "Sweet potatoes",
            "pronunciation": "ah-mah-pwoh-nee",
            "hint": "Tubers harvested from village shambas",
            "example": "Amapwoni — Sweet potatoes (Tubers harvested from village shambas)"
          },
          {
            "target": "Obusera",
            "source": "Porridge",
            "pronunciation": "oh-boo-seh-rah",
            "hint": "Nutritious breakfast or convalescent drink",
            "example": "Obusera — Porridge (Nutritious breakfast or convalescent drink)"
          },
          {
            "target": "Lichaai",
            "source": "Tea",
            "pronunciation": "lee-chah-ah-ee",
            "hint": "Steaming spiced Kenyan tea",
            "example": "Lichaai — Tea (Steaming spiced Kenyan tea)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ebiakhulia\" mean in English?",
            "correctAnswer": "Food",
            "options": [
              "Water",
              "Fish",
              "Traditional greens",
              "Food"
            ],
            "hint": "Also 'Kumakula' (provisions / foodstuffs)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Amatsi / Amanji\" mean in English?",
            "correctAnswer": "Water",
            "options": [
              "Fish",
              "Traditional greens",
              "Water",
              "Food"
            ],
            "hint": "Plural noun in Class 6 (essential staple)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ifula / Eshisutu\" mean in English?",
            "correctAnswer": "Fish",
            "options": [
              "Traditional greens",
              "Fish",
              "Food",
              "Water"
            ],
            "hint": "Freshwater river or lake fish"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fish\" in Luhya (Luyia)?",
            "correctAnswer": "Ifula / Eshisutu",
            "options": [
              "Ifula / Eshisutu",
              "Ebiakhulia",
              "Amatsi / Amanji",
              "Tsimbindi / Tsisaka"
            ],
            "hint": "ee-foo-lah / eh-shee-soo-too"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Traditional greens\" in Luhya (Luyia)?",
            "correctAnswer": "Tsimbindi / Tsisaka",
            "options": [
              "Ebiakhulia",
              "Amatsi / Amanji",
              "Ifula / Eshisutu",
              "Tsimbindi / Tsisaka"
            ],
            "hint": "tseem-been-dee / tsee-sah-kah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Honey\" in Luhya (Luyia)?",
            "correctAnswer": "Obuchi",
            "options": [
              "Amatsi / Amanji",
              "Ifula / Eshisutu",
              "Obuchi",
              "Ebiakhulia"
            ],
            "hint": "oh-boo-chee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Ebiakhulia: Food, Amatsi / Amanji: Water, Ifula / Eshisutu: Fish, Tsimbindi / Tsisaka: Traditional greens",
            "pairs": [
              {
                "left": "Ebiakhulia",
                "right": "Food"
              },
              {
                "left": "Amatsi / Amanji",
                "right": "Water"
              },
              {
                "left": "Ifula / Eshisutu",
                "right": "Fish"
              },
              {
                "left": "Tsimbindi / Tsisaka",
                "right": "Traditional greens"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Food\" in Luhya (Luyia).",
            "correctAnswer": "Ebiakhulia",
            "options": [
              "Ebiakhulia",
              "Amatsi / Amanji",
              "Ifula / Eshisutu",
              "Tsimbindi / Tsisaka"
            ],
            "hint": "eh-bee-ah-khoo-lee-ah"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-9-animals",
    "title": "Unit 9: Animals & Pastoralism",
    "description": "Comprehensive Luhya (Luyia) curriculum for Animals & Pastoralism, vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Compass",
    "skills": [
      {
        "id": "luhya-exp-animals",
        "title": "Animals & Pastoralism",
        "icon": "Compass",
        "description": "Master Luhya (Luyia) animals & pastoralism vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Animals & Pastoralism, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ing'ombe' (Cow), 'Indume / Inyikwasi' (Bull), 'Likhondi' (Sheep), 'Inzokha' (Snake).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Ing'ombe",
            "source": "Cow",
            "pronunciation": "eeng-ohm-beh",
            "hint": "Plural: Tsing'ombe (cattle / herd)",
            "example": "Ing'ombe — Cow (Plural: Tsing'ombe (cattle / herd))"
          },
          {
            "target": "Indume / Inyikwasi",
            "source": "Bull",
            "pronunciation": "een-doo-meh / een-yee-kwah-see",
            "hint": "Prized breeding or draft bull",
            "example": "Indume / Inyikwasi — Bull (Prized breeding or draft bull)"
          },
          {
            "target": "Likhondi",
            "source": "Sheep",
            "pronunciation": "lee-khohn-dee",
            "hint": "Plural: Amakhondi",
            "example": "Likhondi — Sheep (Plural: Amakhondi)"
          },
          {
            "target": "Inzokha",
            "source": "Snake",
            "pronunciation": "een-zoh-khah",
            "hint": "Plural: Tsinzokha",
            "example": "Inzokha — Snake (Plural: Tsinzokha)"
          },
          {
            "target": "Inyoni",
            "source": "Bird",
            "pronunciation": "een-yoh-nee",
            "hint": "Plural: Tsinyoni",
            "example": "Inyoni — Bird (Plural: Tsinyoni)"
          },
          {
            "target": "Ekhutu",
            "source": "Tortoise",
            "pronunciation": "eh-khoo-too",
            "hint": "Plural: Tsikhutu (frequent character in folklore)",
            "example": "Ekhutu — Tortoise (Plural: Tsikhutu (frequent character in folklore))"
          },
          {
            "target": "Ingwe",
            "source": "Leopard",
            "pronunciation": "eeng-weh",
            "hint": "Revered symbol of royalty and bravery",
            "example": "Ingwe — Leopard (Revered symbol of royalty and bravery)"
          },
          {
            "target": "Itarakhu / Enengo",
            "source": "Lion",
            "pronunciation": "ee-tah-rah-khoo / eh-nehn-goh",
            "hint": "The king of beasts",
            "example": "Itarakhu / Enengo — Lion (The king of beasts)"
          },
          {
            "target": "Imbiti",
            "source": "Hyena",
            "pronunciation": "eem-bee-tee",
            "hint": "Plural: Tsimbiti",
            "example": "Imbiti — Hyena (Plural: Tsimbiti)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ing'ombe\" mean in English?",
            "correctAnswer": "Cow",
            "options": [
              "Bull",
              "Sheep",
              "Snake",
              "Cow"
            ],
            "hint": "Plural: Tsing'ombe (cattle / herd)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Indume / Inyikwasi\" mean in English?",
            "correctAnswer": "Bull",
            "options": [
              "Sheep",
              "Snake",
              "Bull",
              "Cow"
            ],
            "hint": "Prized breeding or draft bull"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Likhondi\" mean in English?",
            "correctAnswer": "Sheep",
            "options": [
              "Snake",
              "Sheep",
              "Cow",
              "Bull"
            ],
            "hint": "Plural: Amakhondi"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sheep\" in Luhya (Luyia)?",
            "correctAnswer": "Likhondi",
            "options": [
              "Likhondi",
              "Ing'ombe",
              "Indume / Inyikwasi",
              "Inzokha"
            ],
            "hint": "lee-khohn-dee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Snake\" in Luhya (Luyia)?",
            "correctAnswer": "Inzokha",
            "options": [
              "Ing'ombe",
              "Indume / Inyikwasi",
              "Likhondi",
              "Inzokha"
            ],
            "hint": "een-zoh-khah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bird\" in Luhya (Luyia)?",
            "correctAnswer": "Inyoni",
            "options": [
              "Indume / Inyikwasi",
              "Likhondi",
              "Inyoni",
              "Ing'ombe"
            ],
            "hint": "een-yoh-nee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Ing'ombe: Cow, Indume / Inyikwasi: Bull, Likhondi: Sheep, Inzokha: Snake",
            "pairs": [
              {
                "left": "Ing'ombe",
                "right": "Cow"
              },
              {
                "left": "Indume / Inyikwasi",
                "right": "Bull"
              },
              {
                "left": "Likhondi",
                "right": "Sheep"
              },
              {
                "left": "Inzokha",
                "right": "Snake"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Cow\" in Luhya (Luyia).",
            "correctAnswer": "Ing'ombe",
            "options": [
              "Ing'ombe",
              "Indume / Inyikwasi",
              "Likhondi",
              "Inzokha"
            ],
            "hint": "eeng-ohm-beh"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-10-nature",
    "title": "Unit 10: Nature & Environment",
    "description": "Comprehensive Luhya (Luyia) curriculum for Nature & Environment, vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Sun",
    "skills": [
      {
        "id": "luhya-exp-nature",
        "title": "Nature & Environment",
        "icon": "Sun",
        "description": "Master Luhya (Luyia) nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Nyasaye / Wele' (God), 'Enyanga / Eliuba' (Sun), 'Eloba' (Earth / Land / Soil), 'Omusaala' (Tree).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Nyasaye / Wele",
            "source": "God",
            "pronunciation": "nyah-sah-yeh / weh-leh",
            "hint": "The Almighty Supreme Creator",
            "example": "Nyasaye / Wele — God (The Almighty Supreme Creator)"
          },
          {
            "target": "Enyanga / Eliuba",
            "source": "Sun",
            "pronunciation": "ehn-yahn-gah / eh-lee-oo-bah",
            "hint": "Also signifies daylight or daytime",
            "example": "Enyanga / Eliuba — Sun (Also signifies daylight or daytime)"
          },
          {
            "target": "Eloba",
            "source": "Earth / Land / Soil",
            "pronunciation": "eh-loh-bah",
            "hint": "Also 'Elwanyi' (outside ground / open country)",
            "example": "Eloba — Earth / Land / Soil (Also 'Elwanyi' (outside ground / open country))"
          },
          {
            "target": "Omusaala",
            "source": "Tree",
            "pronunciation": "oh-moo-sah-ah-lah",
            "hint": "Plural: Emisaala (also means medicinal wood/cure)",
            "example": "Omusaala — Tree (Plural: Emisaala (also means medicinal wood/cure))"
          },
          {
            "target": "Oluche / Omuchela",
            "source": "River / Stream",
            "pronunciation": "oh-loo-cheh / oh-moo-cheh-lah",
            "hint": "Plural: Tsinje / Emichela",
            "example": "Oluche / Omuchela — River / Stream (Plural: Tsinje / Emichela)"
          },
          {
            "target": "Eshikulu",
            "source": "Hill / Mountain",
            "pronunciation": "eh-shee-koo-loo",
            "hint": "Plural: Ebikulu (e.g. Kakamega / Maragoli hills)",
            "example": "Eshikulu — Hill / Mountain (Plural: Ebikulu (e.g. Kakamega / Maragoli hills))"
          },
          {
            "target": "Imbweela / Omukhuuka",
            "source": "Wind / Air",
            "pronunciation": "eem-bweh-eh-lah / oh-moo-khoo-oo-kah",
            "hint": "Gentle breeze or rushing wind",
            "example": "Imbweela / Omukhuuka — Wind / Air (Gentle breeze or rushing wind)"
          },
          {
            "target": "Likulu",
            "source": "Sky / Heaven",
            "pronunciation": "lee-koo-loo",
            "hint": "The expansive heavens above",
            "example": "Likulu — Sky / Heaven (The expansive heavens above)"
          },
          {
            "target": "Bwile / Eshilu",
            "source": "Night / Darkness",
            "pronunciation": "bwee-leh / eh-shee-loo",
            "hint": "Nighttime period",
            "example": "Bwile / Eshilu — Night / Darkness (Nighttime period)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nyasaye / Wele\" mean in English?",
            "correctAnswer": "God",
            "options": [
              "Sun",
              "Earth / Land / Soil",
              "Tree",
              "God"
            ],
            "hint": "The Almighty Supreme Creator"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Enyanga / Eliuba\" mean in English?",
            "correctAnswer": "Sun",
            "options": [
              "Earth / Land / Soil",
              "Tree",
              "Sun",
              "God"
            ],
            "hint": "Also signifies daylight or daytime"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eloba\" mean in English?",
            "correctAnswer": "Earth / Land / Soil",
            "options": [
              "Tree",
              "Earth / Land / Soil",
              "God",
              "Sun"
            ],
            "hint": "Also 'Elwanyi' (outside ground / open country)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Earth / Land / Soil\" in Luhya (Luyia)?",
            "correctAnswer": "Eloba",
            "options": [
              "Eloba",
              "Nyasaye / Wele",
              "Enyanga / Eliuba",
              "Omusaala"
            ],
            "hint": "eh-loh-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tree\" in Luhya (Luyia)?",
            "correctAnswer": "Omusaala",
            "options": [
              "Nyasaye / Wele",
              "Enyanga / Eliuba",
              "Eloba",
              "Omusaala"
            ],
            "hint": "oh-moo-sah-ah-lah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"River / Stream\" in Luhya (Luyia)?",
            "correctAnswer": "Oluche / Omuchela",
            "options": [
              "Enyanga / Eliuba",
              "Eloba",
              "Oluche / Omuchela",
              "Nyasaye / Wele"
            ],
            "hint": "oh-loo-cheh / oh-moo-cheh-lah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Nyasaye / Wele: God, Enyanga / Eliuba: Sun, Eloba: Earth / Land / Soil, Omusaala: Tree",
            "pairs": [
              {
                "left": "Nyasaye / Wele",
                "right": "God"
              },
              {
                "left": "Enyanga / Eliuba",
                "right": "Sun"
              },
              {
                "left": "Eloba",
                "right": "Earth / Land / Soil"
              },
              {
                "left": "Omusaala",
                "right": "Tree"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"God\" in Luhya (Luyia).",
            "correctAnswer": "Nyasaye / Wele",
            "options": [
              "Nyasaye / Wele",
              "Enyanga / Eliuba",
              "Eloba",
              "Omusaala"
            ],
            "hint": "nyah-sah-yeh / weh-leh"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-11-home",
    "title": "Unit 11: Home & Village",
    "description": "Comprehensive Luhya (Luyia) curriculum for Home & Village, vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Home",
    "skills": [
      {
        "id": "luhya-exp-home",
        "title": "Home & Village",
        "icon": "Home",
        "description": "Master Luhya (Luyia) home & village vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Home & Village, pay special attention to pronunciation and morphological prefixes/suffixes: 'Enju / Enyumba' (House), 'Hango / Ingo' (Home / Homestead), 'Omuhanda / Injila' (Road / Path), 'Eshitanda' (Bed).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Enju / Enyumba",
            "source": "House",
            "pronunciation": "ehn-joo / ehn-yoom-bah",
            "hint": "Plural: Tsinju / Tsinyumba",
            "example": "Enju / Enyumba — House (Plural: Tsinju / Tsinyumba)"
          },
          {
            "target": "Hango / Ingo",
            "source": "Home / Homestead",
            "pronunciation": "hahn-goh / een-goh",
            "hint": "'Abeingo' = family members at home",
            "example": "Hango / Ingo — Home / Homestead ('Abeingo' = family members at home)"
          },
          {
            "target": "Omuhanda / Injila",
            "source": "Road / Path",
            "pronunciation": "oh-moo-hahn-dah / een-jee-lah",
            "hint": "Plural: Emihanda / Tsinjila",
            "example": "Omuhanda / Injila — Road / Path (Plural: Emihanda / Tsinjila)"
          },
          {
            "target": "Eshitanda",
            "source": "Bed",
            "pronunciation": "eh-shee-tahn-dah",
            "hint": "Plural: Ebitanda",
            "example": "Eshitanda — Bed (Plural: Ebitanda)"
          },
          {
            "target": "Eshisaala",
            "source": "Chair / Stool",
            "pronunciation": "eh-shee-sah-ah-lah",
            "hint": "Plural: Ebisaala",
            "example": "Eshisaala — Chair / Stool (Plural: Ebisaala)"
          },
          {
            "target": "Emessa",
            "source": "Table",
            "pronunciation": "eh-meh-sah",
            "hint": "Plural: Tsimessa",
            "example": "Emessa — Table (Plural: Tsimessa)"
          },
          {
            "target": "Eshichiko",
            "source": "Spoon",
            "pronunciation": "eh-shee-chee-koh",
            "hint": "Plural: Ebichiko",
            "example": "Eshichiko — Spoon (Plural: Ebichiko)"
          },
          {
            "target": "Eshikombe",
            "source": "Cup",
            "pronunciation": "eh-shee-kohm-beh",
            "hint": "Plural: Ebikombe",
            "example": "Eshikombe — Cup (Plural: Ebikombe)"
          },
          {
            "target": "Eshikosi / Inyungu",
            "source": "Cooking pot",
            "pronunciation": "eh-shee-koh-see / een-yoon-goo",
            "hint": "Earthenware or metal cooking vessel",
            "example": "Eshikosi / Inyungu — Cooking pot (Earthenware or metal cooking vessel)"
          },
          {
            "target": "Eshitabo",
            "source": "Book",
            "pronunciation": "eh-shee-tah-boh",
            "hint": "Plural: Ebitabo",
            "example": "Eshitabo — Book (Plural: Ebitabo)"
          },
          {
            "target": "Olwiji",
            "source": "Door",
            "pronunciation": "ohl-wee-jee",
            "hint": "Plural: Tsinjiji",
            "example": "Olwiji — Door (Plural: Tsinjiji)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Enju / Enyumba\" mean in English?",
            "correctAnswer": "House",
            "options": [
              "Home / Homestead",
              "Road / Path",
              "Bed",
              "House"
            ],
            "hint": "Plural: Tsinju / Tsinyumba"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Hango / Ingo\" mean in English?",
            "correctAnswer": "Home / Homestead",
            "options": [
              "Road / Path",
              "Bed",
              "Home / Homestead",
              "House"
            ],
            "hint": "'Abeingo' = family members at home"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Omuhanda / Injila\" mean in English?",
            "correctAnswer": "Road / Path",
            "options": [
              "Bed",
              "Road / Path",
              "House",
              "Home / Homestead"
            ],
            "hint": "Plural: Emihanda / Tsinjila"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Road / Path\" in Luhya (Luyia)?",
            "correctAnswer": "Omuhanda / Injila",
            "options": [
              "Omuhanda / Injila",
              "Enju / Enyumba",
              "Hango / Ingo",
              "Eshitanda"
            ],
            "hint": "oh-moo-hahn-dah / een-jee-lah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bed\" in Luhya (Luyia)?",
            "correctAnswer": "Eshitanda",
            "options": [
              "Enju / Enyumba",
              "Hango / Ingo",
              "Omuhanda / Injila",
              "Eshitanda"
            ],
            "hint": "eh-shee-tahn-dah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Chair / Stool\" in Luhya (Luyia)?",
            "correctAnswer": "Eshisaala",
            "options": [
              "Hango / Ingo",
              "Omuhanda / Injila",
              "Eshisaala",
              "Enju / Enyumba"
            ],
            "hint": "eh-shee-sah-ah-lah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Enju / Enyumba: House, Hango / Ingo: Home / Homestead, Omuhanda / Injila: Road / Path, Eshitanda: Bed",
            "pairs": [
              {
                "left": "Enju / Enyumba",
                "right": "House"
              },
              {
                "left": "Hango / Ingo",
                "right": "Home / Homestead"
              },
              {
                "left": "Omuhanda / Injila",
                "right": "Road / Path"
              },
              {
                "left": "Eshitanda",
                "right": "Bed"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"House\" in Luhya (Luyia).",
            "correctAnswer": "Enju / Enyumba",
            "options": [
              "Enju / Enyumba",
              "Hango / Ingo",
              "Omuhanda / Injila",
              "Eshitanda"
            ],
            "hint": "ehn-joo / ehn-yoom-bah"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-12-phrases",
    "title": "Unit 12: Common Phrases",
    "description": "Comprehensive Luhya (Luyia) curriculum for Common Phrases, vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "MessageCircle",
    "skills": [
      {
        "id": "luhya-exp-phrases",
        "title": "Common Phrases (Part 1)",
        "icon": "MessageCircle",
        "description": "Master Luhya (Luyia) common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ee / Yii' (Yes), 'Tawe / Seee' (No), 'Lisina lyoo ni wina?' (What is your name?), 'Lisina lianje ni...' (My name is...).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Ee / Yii",
            "source": "Yes",
            "pronunciation": "eh-eh / yee-ee",
            "hint": "Standard affirmative agreement",
            "example": "Ee / Yii — Yes (Standard affirmative agreement)"
          },
          {
            "target": "Tawe / Seee",
            "source": "No",
            "pronunciation": "tah-weh / seh-eh",
            "hint": "Standard negative response",
            "example": "Tawe / Seee — No (Standard negative response)"
          },
          {
            "target": "Lisina lyoo ni wina?",
            "source": "What is your name?",
            "pronunciation": "lee-see-nah lyoh-oh nee wee-nah",
            "hint": "Courteous introduction inquiry",
            "example": "Lisina lyoo ni wina? — What is your name? (Courteous introduction inquiry)"
          },
          {
            "target": "Lisina lianje ni...",
            "source": "My name is...",
            "pronunciation": "lee-see-nah lee-ahn-jeh nee",
            "hint": "Introduction statement",
            "example": "Lisina lianje ni... — My name is... (Introduction statement)"
          },
          {
            "target": "Nakhukunda / Enzanza",
            "source": "I love you",
            "pronunciation": "nah-khoo-koon-dah / ehn-zahn-zah",
            "hint": "Expression of deep affection",
            "example": "Nakhukunda / Enzanza — I love you (Expression of deep affection)"
          },
          {
            "target": "Khusaba",
            "source": "Please",
            "pronunciation": "khoo-sah-bah",
            "hint": "Lit. 'we ask / appeal politely'",
            "example": "Khusaba — Please (Lit. 'we ask / appeal politely')"
          },
          {
            "target": "Shimanyile tawe",
            "source": "I don't know",
            "pronunciation": "shee-mah-nyee-leh tah-weh",
            "hint": "Lit. 'I have not known'",
            "example": "Shimanyile tawe — I don't know (Lit. 'I have not known')"
          },
          {
            "target": "Mmanyile",
            "source": "I know / understand",
            "pronunciation": "m-mah-nyee-leh",
            "hint": "Comprehension affirmation",
            "example": "Mmanyile — I know / understand (Comprehension affirmation)"
          },
          {
            "target": "Otsia heena?",
            "source": "Where are you going?",
            "pronunciation": "oh-tsee-ah heh-eh-nah",
            "hint": "Question to someone on the move (Plural: Mutsia heena?)",
            "example": "Otsia heena? — Where are you going? (Question to someone on the move (Plural: Mutsia heena?))"
          },
          {
            "target": "Enzia ingo",
            "source": "I am going home",
            "pronunciation": "ehn-zee-ah een-goh",
            "hint": "Common destination statement",
            "example": "Enzia ingo — I am going home (Common destination statement)"
          },
          {
            "target": "Shino ni shiina?",
            "source": "What is this?",
            "pronunciation": "shee-noh nee shee-ee-nah",
            "hint": "Question identifying an object",
            "example": "Shino ni shiina? — What is this? (Question identifying an object)"
          },
          {
            "target": "Oyo ni wina?",
            "source": "Who is that?",
            "pronunciation": "oh-yoh nee wee-nah",
            "hint": "Inquiring about an individual",
            "example": "Oyo ni wina? — Who is that? (Inquiring about an individual)"
          },
          {
            "target": "Shino ni shinga?",
            "source": "How much is this?",
            "pronunciation": "shee-noh nee sheen-gah",
            "hint": "Price inquiry at markets",
            "example": "Shino ni shinga? — How much is this? (Price inquiry at markets)"
          },
          {
            "target": "Nkhoonya",
            "source": "Help me",
            "pronunciation": "n-khoh-ohn-yah",
            "hint": "Direct polite appeal for assistance",
            "example": "Nkhoonya — Help me (Direct polite appeal for assistance)"
          },
          {
            "target": "Itsa hano",
            "source": "Come here",
            "pronunciation": "ee-tsah hah-noh",
            "hint": "Invitation to approach",
            "example": "Itsa hano — Come here (Invitation to approach)"
          },
          {
            "target": "Ikhala hasi",
            "source": "Sit down",
            "pronunciation": "ee-khah-lah hah-see",
            "hint": "Courteous hospitality command",
            "example": "Ikhala hasi — Sit down (Courteous hospitality command)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ee / Yii\" mean in English?",
            "correctAnswer": "Yes",
            "options": [
              "No",
              "What is your name?",
              "My name is...",
              "Yes"
            ],
            "hint": "Standard affirmative agreement"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Tawe / Seee\" mean in English?",
            "correctAnswer": "No",
            "options": [
              "What is your name?",
              "My name is...",
              "No",
              "Yes"
            ],
            "hint": "Standard negative response"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Lisina lyoo ni wina?\" mean in English?",
            "correctAnswer": "What is your name?",
            "options": [
              "My name is...",
              "What is your name?",
              "Yes",
              "No"
            ],
            "hint": "Courteous introduction inquiry"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"What is your name?\" in Luhya (Luyia)?",
            "correctAnswer": "Lisina lyoo ni wina?",
            "options": [
              "Lisina lyoo ni wina?",
              "Ee / Yii",
              "Tawe / Seee",
              "Lisina lianje ni..."
            ],
            "hint": "lee-see-nah lyoh-oh nee wee-nah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"My name is...\" in Luhya (Luyia)?",
            "correctAnswer": "Lisina lianje ni...",
            "options": [
              "Ee / Yii",
              "Tawe / Seee",
              "Lisina lyoo ni wina?",
              "Lisina lianje ni..."
            ],
            "hint": "lee-see-nah lee-ahn-jeh nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I love you\" in Luhya (Luyia)?",
            "correctAnswer": "Nakhukunda / Enzanza",
            "options": [
              "Tawe / Seee",
              "Lisina lyoo ni wina?",
              "Nakhukunda / Enzanza",
              "Ee / Yii"
            ],
            "hint": "nah-khoo-koon-dah / ehn-zahn-zah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Ee / Yii: Yes, Tawe / Seee: No, Lisina lyoo ni wina?: What is your name?, Lisina lianje ni...: My name is...",
            "pairs": [
              {
                "left": "Ee / Yii",
                "right": "Yes"
              },
              {
                "left": "Tawe / Seee",
                "right": "No"
              },
              {
                "left": "Lisina lyoo ni wina?",
                "right": "What is your name?"
              },
              {
                "left": "Lisina lianje ni...",
                "right": "My name is..."
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Yes\" in Luhya (Luyia).",
            "correctAnswer": "Ee / Yii",
            "options": [
              "Ee / Yii",
              "Tawe / Seee",
              "Lisina lyoo ni wina?",
              "Lisina lianje ni..."
            ],
            "hint": "eh-eh / yee-ee"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-13-body",
    "title": "Unit 13: Body & Health",
    "description": "Comprehensive Luhya (Luyia) curriculum for Body & Health, vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Heart",
    "skills": [
      {
        "id": "luhya-exp-body",
        "title": "Body & Health",
        "icon": "Heart",
        "description": "Master Luhya (Luyia) body & health vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Body & Health, pay special attention to pronunciation and morphological prefixes/suffixes: 'Omwoyo' (Heart / Soul), 'Omurwe' (Head), 'Elisho' (Eye), 'Elirwi' (Ear).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Omwoyo",
            "source": "Heart / Soul",
            "pronunciation": "ohm-woh-yoh",
            "hint": "Plural: Emioyo",
            "example": "Omwoyo — Heart / Soul (Plural: Emioyo)"
          },
          {
            "target": "Omurwe",
            "source": "Head",
            "pronunciation": "oh-moo-rweh",
            "hint": "Plural: Emirwe",
            "example": "Omurwe — Head (Plural: Emirwe)"
          },
          {
            "target": "Elisho",
            "source": "Eye",
            "pronunciation": "eh-lee-shoh",
            "hint": "Plural: Tsimoni / Amoni",
            "example": "Elisho — Eye (Plural: Tsimoni / Amoni)"
          },
          {
            "target": "Elirwi",
            "source": "Ear",
            "pronunciation": "eh-lee-rwee",
            "hint": "Plural: Amarwi",
            "example": "Elirwi — Ear (Plural: Amarwi)"
          },
          {
            "target": "Eliino",
            "source": "Tooth",
            "pronunciation": "eh-lee-ee-noh",
            "hint": "Plural: Ameeno",
            "example": "Eliino — Tooth (Plural: Ameeno)"
          },
          {
            "target": "Omukhono",
            "source": "Hand / Arm",
            "pronunciation": "oh-moo-khoh-noh",
            "hint": "Plural: Emikhono",
            "example": "Omukhono — Hand / Arm (Plural: Emikhono)"
          },
          {
            "target": "Olukulu",
            "source": "Leg / Foot",
            "pronunciation": "oh-loo-koo-loo",
            "hint": "Plural: Tsikulu",
            "example": "Olukulu — Leg / Foot (Plural: Tsikulu)"
          },
          {
            "target": "Amatsaai",
            "source": "Blood",
            "pronunciation": "ah-mah-tsah-ah-ee",
            "hint": "Life liquid",
            "example": "Amatsaai — Blood (Life liquid)"
          },
          {
            "target": "Amaani",
            "source": "Strength / Power",
            "pronunciation": "ah-mah-ah-nee",
            "hint": "Bodily strength or capability",
            "example": "Amaani — Strength / Power (Bodily strength or capability)"
          },
          {
            "target": "Obulamu",
            "source": "Health / Life",
            "pronunciation": "oh-boo-lah-moo",
            "hint": "Vitality, wellbeing, and breath",
            "example": "Obulamu — Health / Life (Vitality, wellbeing, and breath)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Omwoyo\" mean in English?",
            "correctAnswer": "Heart / Soul",
            "options": [
              "Head",
              "Eye",
              "Ear",
              "Heart / Soul"
            ],
            "hint": "Plural: Emioyo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Omurwe\" mean in English?",
            "correctAnswer": "Head",
            "options": [
              "Eye",
              "Ear",
              "Head",
              "Heart / Soul"
            ],
            "hint": "Plural: Emirwe"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Elisho\" mean in English?",
            "correctAnswer": "Eye",
            "options": [
              "Ear",
              "Eye",
              "Heart / Soul",
              "Head"
            ],
            "hint": "Plural: Tsimoni / Amoni"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eye\" in Luhya (Luyia)?",
            "correctAnswer": "Elisho",
            "options": [
              "Elisho",
              "Omwoyo",
              "Omurwe",
              "Elirwi"
            ],
            "hint": "eh-lee-shoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ear\" in Luhya (Luyia)?",
            "correctAnswer": "Elirwi",
            "options": [
              "Omwoyo",
              "Omurwe",
              "Elisho",
              "Elirwi"
            ],
            "hint": "eh-lee-rwee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tooth\" in Luhya (Luyia)?",
            "correctAnswer": "Eliino",
            "options": [
              "Omurwe",
              "Elisho",
              "Eliino",
              "Omwoyo"
            ],
            "hint": "eh-lee-ee-noh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Omwoyo: Heart / Soul, Omurwe: Head, Elisho: Eye, Elirwi: Ear",
            "pairs": [
              {
                "left": "Omwoyo",
                "right": "Heart / Soul"
              },
              {
                "left": "Omurwe",
                "right": "Head"
              },
              {
                "left": "Elisho",
                "right": "Eye"
              },
              {
                "left": "Elirwi",
                "right": "Ear"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Heart / Soul\" in Luhya (Luyia).",
            "correctAnswer": "Omwoyo",
            "options": [
              "Omwoyo",
              "Omurwe",
              "Elisho",
              "Elirwi"
            ],
            "hint": "ohm-woh-yoh"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-14-time",
    "title": "Unit 14: Time & Calendar",
    "description": "Comprehensive Luhya (Luyia) curriculum for Time & Calendar, vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Clock",
    "skills": [
      {
        "id": "luhya-exp-time",
        "title": "Time & Calendar",
        "icon": "Clock",
        "description": "Master Luhya (Luyia) time & calendar vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Time & Calendar, pay special attention to pronunciation and morphological prefixes/suffixes: 'Leelo' (Today), 'Mgolobe' (Yesterday), 'Muchuli' (Tomorrow), 'Mutsuli / Mukamba' (Morning).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Leelo",
            "source": "Today",
            "pronunciation": "leh-eh-loh",
            "hint": "Present day",
            "example": "Leelo — Today (Present day)"
          },
          {
            "target": "Mgolobe",
            "source": "Yesterday",
            "pronunciation": "m-goh-loh-beh",
            "hint": "Day before today",
            "example": "Mgolobe — Yesterday (Day before today)"
          },
          {
            "target": "Muchuli",
            "source": "Tomorrow",
            "pronunciation": "moo-choo-lee",
            "hint": "Day after today",
            "example": "Muchuli — Tomorrow (Day after today)"
          },
          {
            "target": "Mutsuli / Mukamba",
            "source": "Morning",
            "pronunciation": "moo-tsoo-lee / moo-kahm-bah",
            "hint": "Early morning hours",
            "example": "Mutsuli / Mukamba — Morning (Early morning hours)"
          },
          {
            "target": "Mubasu / Eshiteere",
            "source": "Noon / Midday",
            "pronunciation": "moo-bah-soo / eh-shee-teh-eh-reh",
            "hint": "Peak sunlight hours",
            "example": "Mubasu / Eshiteere — Noon / Midday (Peak sunlight hours)"
          },
          {
            "target": "Mukolooba",
            "source": "Evening",
            "pronunciation": "moo-koh-loh-oh-bah",
            "hint": "Dusk and sunset time",
            "example": "Mukolooba — Evening (Dusk and sunset time)"
          },
          {
            "target": "Omwaka",
            "source": "Year",
            "pronunciation": "ohm-wah-kah",
            "hint": "Plural: Emiaka",
            "example": "Omwaka — Year (Plural: Emiaka)"
          },
          {
            "target": "Khatstoto / Buli lwosi",
            "source": "Always",
            "pronunciation": "khah-tstoh-toh / boo-lee lwoh-see",
            "hint": "Ever continually",
            "example": "Khatstoto / Buli lwosi — Always (Ever continually)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Leelo\" mean in English?",
            "correctAnswer": "Today",
            "options": [
              "Yesterday",
              "Tomorrow",
              "Morning",
              "Today"
            ],
            "hint": "Present day"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mgolobe\" mean in English?",
            "correctAnswer": "Yesterday",
            "options": [
              "Tomorrow",
              "Morning",
              "Yesterday",
              "Today"
            ],
            "hint": "Day before today"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Muchuli\" mean in English?",
            "correctAnswer": "Tomorrow",
            "options": [
              "Morning",
              "Tomorrow",
              "Today",
              "Yesterday"
            ],
            "hint": "Day after today"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tomorrow\" in Luhya (Luyia)?",
            "correctAnswer": "Muchuli",
            "options": [
              "Muchuli",
              "Leelo",
              "Mgolobe",
              "Mutsuli / Mukamba"
            ],
            "hint": "moo-choo-lee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Morning\" in Luhya (Luyia)?",
            "correctAnswer": "Mutsuli / Mukamba",
            "options": [
              "Leelo",
              "Mgolobe",
              "Muchuli",
              "Mutsuli / Mukamba"
            ],
            "hint": "moo-tsoo-lee / moo-kahm-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Noon / Midday\" in Luhya (Luyia)?",
            "correctAnswer": "Mubasu / Eshiteere",
            "options": [
              "Mgolobe",
              "Muchuli",
              "Mubasu / Eshiteere",
              "Leelo"
            ],
            "hint": "moo-bah-soo / eh-shee-teh-eh-reh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Leelo: Today, Mgolobe: Yesterday, Muchuli: Tomorrow, Mutsuli / Mukamba: Morning",
            "pairs": [
              {
                "left": "Leelo",
                "right": "Today"
              },
              {
                "left": "Mgolobe",
                "right": "Yesterday"
              },
              {
                "left": "Muchuli",
                "right": "Tomorrow"
              },
              {
                "left": "Mutsuli / Mukamba",
                "right": "Morning"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Today\" in Luhya (Luyia).",
            "correctAnswer": "Leelo",
            "options": [
              "Leelo",
              "Mgolobe",
              "Muchuli",
              "Mutsuli / Mukamba"
            ],
            "hint": "leh-eh-loh"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-15-verbs",
    "title": "Unit 15: Verbs & Actions",
    "description": "Comprehensive Luhya (Luyia) curriculum for Verbs & Actions, vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Zap",
    "skills": [
      {
        "id": "luhya-exp-verbs",
        "title": "Verbs & Actions",
        "icon": "Zap",
        "description": "Master Luhya (Luyia) verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Okhwechesia' (To teach), 'Okhuchenda' (To travel / walk), 'Okhuula' (To arrive), 'Okhukula' (To buy).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Okhwechesia",
            "source": "To teach",
            "pronunciation": "oh-khweh-cheh-see-ah",
            "hint": "Present: awechesia (he/she teaches)",
            "example": "Okhwechesia — To teach (Present: awechesia (he/she teaches))"
          },
          {
            "target": "Okhuchenda",
            "source": "To travel / walk",
            "pronunciation": "oh-khoo-chehn-dah",
            "hint": "Present: achenda (he/she walks)",
            "example": "Okhuchenda — To travel / walk (Present: achenda (he/she walks))"
          },
          {
            "target": "Okhuula",
            "source": "To arrive",
            "pronunciation": "oh-khoo-oo-lah",
            "hint": "Present: aula (he/she arrives)",
            "example": "Okhuula — To arrive (Present: aula (he/she arrives))"
          },
          {
            "target": "Okhukula",
            "source": "To buy",
            "pronunciation": "oh-khoo-koo-lah",
            "hint": "Present: akula (he/she buys)",
            "example": "Okhukula — To buy (Present: akula (he/she buys))"
          },
          {
            "target": "Okhukusia",
            "source": "To sell",
            "pronunciation": "oh-khoo-koo-see-ah",
            "hint": "Present: akusia (he/she sells)",
            "example": "Okhukusia — To sell (Present: akusia (he/she sells))"
          },
          {
            "target": "Okhunywa",
            "source": "To drink",
            "pronunciation": "oh-khoo-nywah",
            "hint": "Present: anywa (he/she drinks)",
            "example": "Okhunywa — To drink (Present: anywa (he/she drinks))"
          },
          {
            "target": "Okhukona",
            "source": "To sleep",
            "pronunciation": "oh-khoo-koh-nah",
            "hint": "Present: akona (he/she sleeps)",
            "example": "Okhukona — To sleep (Present: akona (he/she sleeps))"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Okhwechesia\" mean in English?",
            "correctAnswer": "To teach",
            "options": [
              "To travel / walk",
              "To arrive",
              "To buy",
              "To teach"
            ],
            "hint": "Present: awechesia (he/she teaches)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Okhuchenda\" mean in English?",
            "correctAnswer": "To travel / walk",
            "options": [
              "To arrive",
              "To buy",
              "To travel / walk",
              "To teach"
            ],
            "hint": "Present: achenda (he/she walks)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Okhuula\" mean in English?",
            "correctAnswer": "To arrive",
            "options": [
              "To buy",
              "To arrive",
              "To teach",
              "To travel / walk"
            ],
            "hint": "Present: aula (he/she arrives)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To arrive\" in Luhya (Luyia)?",
            "correctAnswer": "Okhuula",
            "options": [
              "Okhuula",
              "Okhwechesia",
              "Okhuchenda",
              "Okhukula"
            ],
            "hint": "oh-khoo-oo-lah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To buy\" in Luhya (Luyia)?",
            "correctAnswer": "Okhukula",
            "options": [
              "Okhwechesia",
              "Okhuchenda",
              "Okhuula",
              "Okhukula"
            ],
            "hint": "oh-khoo-koo-lah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To sell\" in Luhya (Luyia)?",
            "correctAnswer": "Okhukusia",
            "options": [
              "Okhuchenda",
              "Okhuula",
              "Okhukusia",
              "Okhwechesia"
            ],
            "hint": "oh-khoo-koo-see-ah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Okhwechesia: To teach, Okhuchenda: To travel / walk, Okhuula: To arrive, Okhukula: To buy",
            "pairs": [
              {
                "left": "Okhwechesia",
                "right": "To teach"
              },
              {
                "left": "Okhuchenda",
                "right": "To travel / walk"
              },
              {
                "left": "Okhuula",
                "right": "To arrive"
              },
              {
                "left": "Okhukula",
                "right": "To buy"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To teach\" in Luhya (Luyia).",
            "correctAnswer": "Okhwechesia",
            "options": [
              "Okhwechesia",
              "Okhuchenda",
              "Okhuula",
              "Okhukula"
            ],
            "hint": "oh-khweh-cheh-see-ah"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-16-kinship-community",
    "title": "Unit 16: Kinship & Community (Olushiwanga)",
    "description": "Comprehensive Luhya (Luyia) curriculum for Kinship & Community (Olushiwanga), vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Users",
    "skills": [
      {
        "id": "luhya-exp-kinship-community",
        "title": "Kinship & Community (Olushiwanga) (Part 1)",
        "icon": "Users",
        "description": "Master Luhya (Luyia) kinship & community (olushiwanga) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Kinship & Community (Olushiwanga), pay special attention to pronunciation and morphological prefixes/suffixes: 'Abakuka' (Ancestors / Forefathers), 'Abakulo' (Grandparents), 'Abana' (Children), 'Abarye' (Parents).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Abakuka",
            "source": "Ancestors / Forefathers",
            "pronunciation": "ah-bah-koo-kah",
            "hint": "(n. pl., cl. 2, sg. kuka) Grandfathers, forefathers, ancestors in Wanga tradition",
            "example": "Abakuka — Ancestors / Forefathers ((n. pl., cl. 2, sg. kuka) Grandfathers, forefathers, ancestors in Wanga tradition)"
          },
          {
            "target": "Abakulo",
            "source": "Grandparents",
            "pronunciation": "ah-bah-koo-loh",
            "hint": "(n. pl., cl. 2) Grandparents, with whom a child can speak freely without the taboo associated with parents",
            "example": "Abakulo — Grandparents ((n. pl., cl. 2) Grandparents, with whom a child can speak freely without the taboo associated with parents)"
          },
          {
            "target": "Abana",
            "source": "Children",
            "pronunciation": "ah-bah-nah",
            "hint": "(n. pl., cl. 2, sg. omwana) Children, offspring, descendants",
            "example": "Abana — Children ((n. pl., cl. 2, sg. omwana) Children, offspring, descendants)"
          },
          {
            "target": "Abarye",
            "source": "Parents",
            "pronunciation": "ah-bah-ryeh",
            "hint": "(n. pl., cl. 2, sg. omurye) Parents, to whom a child must show formal respect, deference, and honor",
            "example": "Abarye — Parents ((n. pl., cl. 2, sg. omurye) Parents, to whom a child must show formal respect, deference, and honor)"
          },
          {
            "target": "Akhasi",
            "source": "Cousin",
            "pronunciation": "ah-khah-see",
            "hint": "(n., cl. 12) Cousin, child of maternal uncle or paternal aunt",
            "example": "Akhasi — Cousin ((n., cl. 12) Cousin, child of maternal uncle or paternal aunt)"
          },
          {
            "target": "Omusatsa",
            "source": "Man / Husband",
            "pronunciation": "oh-moo-sah-tsah",
            "hint": "(n., cl. 1, pl. abasatsa) Man, adult male, husband (omusatsa wanje = my husband)",
            "example": "Omusatsa — Man / Husband ((n., cl. 1, pl. abasatsa) Man, adult male, husband (omusatsa wanje = my husband))"
          },
          {
            "target": "Omuluyia",
            "source": "Luhya person / Clan member",
            "pronunciation": "oh-moo-loo-yee-ah",
            "hint": "(n., cl. 1, pl. Abaluyia) Person belonging to the Luyia nation; lit. member of the same hearth/clan",
            "example": "Omuluyia — Luhya person / Clan member ((n., cl. 1, pl. Abaluyia) Person belonging to the Luyia nation; lit. member of the same hearth/clan)"
          },
          {
            "target": "Nabongo",
            "source": "King (Wanga monarch)",
            "pronunciation": "nah-bohn-goh",
            "hint": "(n., cl. 1) Hereditary king and paramount ruler of the historic Kingdom of Wanga",
            "example": "Nabongo — King (Wanga monarch) ((n., cl. 1) Hereditary king and paramount ruler of the historic Kingdom of Wanga)"
          },
          {
            "target": "Omukhulundu",
            "source": "Elder / Senior leader",
            "pronunciation": "oh-moo-khoo-loon-doo",
            "hint": "(n., cl. 1, pl. abakhulundu) Elder, senior, family head with customary authority",
            "example": "Omukhulundu — Elder / Senior leader ((n., cl. 1, pl. abakhulundu) Elder, senior, family head with customary authority)"
          },
          {
            "target": "Nyina",
            "source": "Mother",
            "pronunciation": "nyee-nah",
            "hint": "(n., cl. 1) Mother (nyinefwe = our mother; mama = my mother; mawo = your mother)",
            "example": "Nyina — Mother ((n., cl. 1) Mother (nyinefwe = our mother; mama = my mother; mawo = your mother))"
          },
          {
            "target": "Omukulo",
            "source": "Playmate / Peer",
            "pronunciation": "oh-moo-koo-loh",
            "hint": "(n., cl. 1) Equal peer with whom one shares joking familiarity, contrasted with omurye",
            "example": "Omukulo — Playmate / Peer ((n., cl. 1) Equal peer with whom one shares joking familiarity, contrasted with omurye)"
          },
          {
            "target": "Omukhwi",
            "source": "Bridegroom / Son-in-law",
            "pronunciation": "oh-moo-khwee",
            "hint": "(n., cl. 1, pl. abakhwi) Bridegroom, one paying dowry, son-in-law",
            "example": "Omukhwi — Bridegroom / Son-in-law ((n., cl. 1, pl. abakhwi) Bridegroom, one paying dowry, son-in-law)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Abakuka\" mean in English?",
            "correctAnswer": "Ancestors / Forefathers",
            "options": [
              "Grandparents",
              "Children",
              "Parents",
              "Ancestors / Forefathers"
            ],
            "hint": "(n. pl., cl. 2, sg. kuka) Grandfathers, forefathers, ancestors in Wanga tradition"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Abakulo\" mean in English?",
            "correctAnswer": "Grandparents",
            "options": [
              "Children",
              "Parents",
              "Grandparents",
              "Ancestors / Forefathers"
            ],
            "hint": "(n. pl., cl. 2) Grandparents, with whom a child can speak freely without the taboo associated with parents"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Abana\" mean in English?",
            "correctAnswer": "Children",
            "options": [
              "Parents",
              "Children",
              "Ancestors / Forefathers",
              "Grandparents"
            ],
            "hint": "(n. pl., cl. 2, sg. omwana) Children, offspring, descendants"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Children\" in Luhya (Luyia)?",
            "correctAnswer": "Abana",
            "options": [
              "Abana",
              "Abakuka",
              "Abakulo",
              "Abarye"
            ],
            "hint": "ah-bah-nah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Parents\" in Luhya (Luyia)?",
            "correctAnswer": "Abarye",
            "options": [
              "Abakuka",
              "Abakulo",
              "Abana",
              "Abarye"
            ],
            "hint": "ah-bah-ryeh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cousin\" in Luhya (Luyia)?",
            "correctAnswer": "Akhasi",
            "options": [
              "Abakulo",
              "Abana",
              "Akhasi",
              "Abakuka"
            ],
            "hint": "ah-khah-see"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Abakuka: Ancestors / Forefathers, Abakulo: Grandparents, Abana: Children, Abarye: Parents",
            "pairs": [
              {
                "left": "Abakuka",
                "right": "Ancestors / Forefathers"
              },
              {
                "left": "Abakulo",
                "right": "Grandparents"
              },
              {
                "left": "Abana",
                "right": "Children"
              },
              {
                "left": "Abarye",
                "right": "Parents"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Ancestors / Forefathers\" in Luhya (Luyia).",
            "correctAnswer": "Abakuka",
            "options": [
              "Abakuka",
              "Abakulo",
              "Abana",
              "Abarye"
            ],
            "hint": "ah-bah-koo-kah"
          }
        ]
      },
      {
        "id": "luhya-exp-kinship-community-2",
        "title": "Kinship & Community (Olushiwanga) (Part 2)",
        "icon": "Users",
        "description": "Master Luhya (Luyia) kinship & community (olushiwanga) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Kinship & Community (Olushiwanga), pay special attention to pronunciation and morphological prefixes/suffixes: 'Omweha' (Bride), 'Abomunzu ndala' (Full siblings / Children of one mother), 'Obwikho' (Kinship / Clan relation), 'Omurende' (Foreigner / Neighbouring person).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Omweha",
            "source": "Bride",
            "pronunciation": "oh-mweh-hah",
            "hint": "(n., cl. 1, pl. abeeha / abeeya) Bride, newly wed woman",
            "example": "Omweha — Bride ((n., cl. 1, pl. abeeha / abeeya) Bride, newly wed woman)"
          },
          {
            "target": "Abomunzu ndala",
            "source": "Full siblings / Children of one mother",
            "pronunciation": "ah-boh-moon-zoo ndah-lah",
            "hint": "(np., cl. 2) Full brothers and sisters; lit. 'children born of one house'",
            "example": "Abomunzu ndala — Full siblings / Children of one mother ((np., cl. 2) Full brothers and sisters; lit. 'children born of one house')"
          },
          {
            "target": "Obwikho",
            "source": "Kinship / Clan relation",
            "pronunciation": "oh-bwee-khoh",
            "hint": "(n., cl. 14) Kinship, blood relation, clan connection",
            "example": "Obwikho — Kinship / Clan relation ((n., cl. 14) Kinship, blood relation, clan connection)"
          },
          {
            "target": "Omurende",
            "source": "Foreigner / Neighbouring person",
            "pronunciation": "oh-moo-rehn-deh",
            "hint": "(n., cl. 1, pl. abarende) Person of a neighboring tribe, foreigner, neighbor",
            "example": "Omurende — Foreigner / Neighbouring person ((n., cl. 1, pl. abarende) Person of a neighboring tribe, foreigner, neighbor)"
          },
          {
            "target": "Omukhasi omukhulundu",
            "source": "Senior first wife",
            "pronunciation": "oh-moo-khah-see oh-moo-khoo-loon-doo",
            "hint": "(np., cl. 1) First wife holding supreme domestic authority in the compound",
            "example": "Omukhasi omukhulundu — Senior first wife ((np., cl. 1) First wife holding supreme domestic authority in the compound)"
          },
          {
            "target": "Omulaame",
            "source": "Heir / Designated successor",
            "pronunciation": "oh-moo-lah-ah-meh",
            "hint": "(n., cl. 1, pl. abalaame) Heir, designated inheritor receiving father's blessing (okhulaama)",
            "example": "Omulaame — Heir / Designated successor ((n., cl. 1, pl. abalaame) Heir, designated inheritor receiving father's blessing (okhulaama))"
          },
          {
            "target": "Abeirumbi",
            "source": "Initiation candidates",
            "pronunciation": "ah-beh-ee-room-bee",
            "hint": "(n. pl., cl. 2) Young men secluded in the circumcision lodge during initiation",
            "example": "Abeirumbi — Initiation candidates ((n. pl., cl. 2) Young men secluded in the circumcision lodge during initiation)"
          }
        ],
        "sentences": [
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          },
          {
            "target": "Omوخasi ateekha obusuma obulayi.",
            "source": "The woman cooks good ugali."
          },
          {
            "target": "Efwe khuloma oluluyia obulayi.",
            "source": "We speak Luyia well."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Omweha\" mean in English?",
            "correctAnswer": "Bride",
            "options": [
              "Full siblings / Children of one mother",
              "Kinship / Clan relation",
              "Foreigner / Neighbouring person",
              "Bride"
            ],
            "hint": "(n., cl. 1, pl. abeeha / abeeya) Bride, newly wed woman"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Abomunzu ndala\" mean in English?",
            "correctAnswer": "Full siblings / Children of one mother",
            "options": [
              "Kinship / Clan relation",
              "Foreigner / Neighbouring person",
              "Full siblings / Children of one mother",
              "Bride"
            ],
            "hint": "(np., cl. 2) Full brothers and sisters; lit. 'children born of one house'"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Obwikho\" mean in English?",
            "correctAnswer": "Kinship / Clan relation",
            "options": [
              "Foreigner / Neighbouring person",
              "Kinship / Clan relation",
              "Bride",
              "Full siblings / Children of one mother"
            ],
            "hint": "(n., cl. 14) Kinship, blood relation, clan connection"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Kinship / Clan relation\" in Luhya (Luyia)?",
            "correctAnswer": "Obwikho",
            "options": [
              "Obwikho",
              "Omweha",
              "Abomunzu ndala",
              "Omurende"
            ],
            "hint": "oh-bwee-khoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Foreigner / Neighbouring person\" in Luhya (Luyia)?",
            "correctAnswer": "Omurende",
            "options": [
              "Omweha",
              "Abomunzu ndala",
              "Obwikho",
              "Omurende"
            ],
            "hint": "oh-moo-rehn-deh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Senior first wife\" in Luhya (Luyia)?",
            "correctAnswer": "Omukhasi omukhulundu",
            "options": [
              "Abomunzu ndala",
              "Obwikho",
              "Omukhasi omukhulundu",
              "Omweha"
            ],
            "hint": "oh-moo-khah-see oh-moo-khoo-loon-doo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Omweha: Bride, Abomunzu ndala: Full siblings / Children of one mother, Obwikho: Kinship / Clan relation, Omurende: Foreigner / Neighbouring person",
            "pairs": [
              {
                "left": "Omweha",
                "right": "Bride"
              },
              {
                "left": "Abomunzu ndala",
                "right": "Full siblings / Children of one mother"
              },
              {
                "left": "Obwikho",
                "right": "Kinship / Clan relation"
              },
              {
                "left": "Omurende",
                "right": "Foreigner / Neighbouring person"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Bride\" in Luhya (Luyia).",
            "correctAnswer": "Omweha",
            "options": [
              "Omweha",
              "Abomunzu ndala",
              "Obwikho",
              "Omurende"
            ],
            "hint": "oh-mweh-hah"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-17-nature-animals",
    "title": "Unit 17: Nature & Animals (Olushiwanga)",
    "description": "Comprehensive Luhya (Luyia) curriculum for Nature & Animals (Olushiwanga), vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Sun",
    "skills": [
      {
        "id": "luhya-exp-nature-animals",
        "title": "Nature & Animals (Olushiwanga) (Part 1)",
        "icon": "Sun",
        "description": "Master Luhya (Luyia) nature & animals (olushiwanga) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Nature & Animals (Olushiwanga), pay special attention to pronunciation and morphological prefixes/suffixes: 'Akhamuna' (Ground squirrel / Folk trickster hero), 'Akhameme' (Kid / Young goat), 'Eliruba' (Sun), 'Omweli' (Moon / Lunar month).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Akhamuna",
            "source": "Ground squirrel / Folk trickster hero",
            "pronunciation": "ah-khah-moo-nah",
            "hint": "(n., cl. 12; also eshimuna) Ground squirrel; famed hero of Luyia folklore tales (Anakhamuna)",
            "example": "Akhamuna — Ground squirrel / Folk trickster hero ((n., cl. 12; also eshimuna) Ground squirrel; famed hero of Luyia folklore tales (Anakhamuna))"
          },
          {
            "target": "Akhameme",
            "source": "Kid / Young goat",
            "pronunciation": "ah-khah-meh-meh",
            "hint": "(n., cl. 12; also eshimeme, cl. 7) Kid, young goat",
            "example": "Akhameme — Kid / Young goat ((n., cl. 12; also eshimeme, cl. 7) Kid, young goat)"
          },
          {
            "target": "Eliruba",
            "source": "Sun",
            "pronunciation": "eh-lee-roo-bah",
            "hint": "(n., cl. 5; also eliuba / elyuba) Sun, daylight source (elyuba liumire = midday)",
            "example": "Eliruba — Sun ((n., cl. 5; also eliuba / elyuba) Sun, daylight source (elyuba liumire = midday))"
          },
          {
            "target": "Omweli",
            "source": "Moon / Lunar month",
            "pronunciation": "oh-mweh-lee",
            "hint": "(n., cl. 3, pl. emieli; also omwesi) Moon, calendar month",
            "example": "Omweli — Moon / Lunar month ((n., cl. 3, pl. emieli; also omwesi) Moon, calendar month)"
          },
          {
            "target": "Inyondo",
            "source": "Hammer",
            "pronunciation": "een-yohn-doh",
            "hint": "(n., cl. 9, pl. tsinyondo) Iron hammer, traditional blacksmith's forging tool",
            "example": "Inyondo — Hammer ((n., cl. 9, pl. tsinyondo) Iron hammer, traditional blacksmith's forging tool)"
          },
          {
            "target": "Italanyi",
            "source": "Lion",
            "pronunciation": "ee-tah-lah-nyee",
            "hint": "(n., cl. 9, pl. tsitalanyi) Lion, king of wild beasts",
            "example": "Italanyi — Lion ((n., cl. 9, pl. tsitalanyi) Lion, king of wild beasts)"
          },
          {
            "target": "Likondi",
            "source": "Sheep",
            "pronunciation": "lee-kohn-dee",
            "hint": "(n., cl. 5, pl. amakondi) Sheep",
            "example": "Likondi — Sheep ((n., cl. 5, pl. amakondi) Sheep)"
          },
          {
            "target": "Itaywa",
            "source": "Rooster / Cock",
            "pronunciation": "ee-tah-ywah",
            "hint": "(n., cl. 9, pl. tsitaywa) Rooster, cockerel whose crow heralds the dawn",
            "example": "Itaywa — Rooster / Cock ((n., cl. 9, pl. tsitaywa) Rooster, cockerel whose crow heralds the dawn)"
          },
          {
            "target": "Inyeni",
            "source": "Fish",
            "pronunciation": "een-yeh-nee",
            "hint": "(n., cl. 9, pl. tsinyeni) Fish, caught with hook (omulobo) or net",
            "example": "Inyeni — Fish ((n., cl. 9, pl. tsinyeni) Fish, caught with hook (omulobo) or net)"
          },
          {
            "target": "Inzushi",
            "source": "Honeybee / Swarm",
            "pronunciation": "een-zoo-shee",
            "hint": "(n., cl. 9, pl. tsinzushi) Honeybee, producer of honey (obushi)",
            "example": "Inzushi — Honeybee / Swarm ((n., cl. 9, pl. tsinzushi) Honeybee, producer of honey (obushi))"
          },
          {
            "target": "Ifula",
            "source": "Rain",
            "pronunciation": "ee-foo-lah",
            "hint": "(n., cl. 9) Rain; life-giving precipitation (irotso = main rainy season)",
            "example": "Ifula — Rain ((n., cl. 9) Rain; life-giving precipitation (irotso = main rainy season))"
          },
          {
            "target": "Omwalo",
            "source": "River / Stream",
            "pronunciation": "oh-mwah-loh",
            "hint": "(n., cl. 3, pl. emyalo) River, natural flowing watercourse",
            "example": "Omwalo — River / Stream ((n., cl. 3, pl. emyalo) River, natural flowing watercourse)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akhamuna\" mean in English?",
            "correctAnswer": "Ground squirrel / Folk trickster hero",
            "options": [
              "Kid / Young goat",
              "Sun",
              "Moon / Lunar month",
              "Ground squirrel / Folk trickster hero"
            ],
            "hint": "(n., cl. 12; also eshimuna) Ground squirrel; famed hero of Luyia folklore tales (Anakhamuna)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akhameme\" mean in English?",
            "correctAnswer": "Kid / Young goat",
            "options": [
              "Sun",
              "Moon / Lunar month",
              "Kid / Young goat",
              "Ground squirrel / Folk trickster hero"
            ],
            "hint": "(n., cl. 12; also eshimeme, cl. 7) Kid, young goat"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eliruba\" mean in English?",
            "correctAnswer": "Sun",
            "options": [
              "Moon / Lunar month",
              "Sun",
              "Ground squirrel / Folk trickster hero",
              "Kid / Young goat"
            ],
            "hint": "(n., cl. 5; also eliuba / elyuba) Sun, daylight source (elyuba liumire = midday)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sun\" in Luhya (Luyia)?",
            "correctAnswer": "Eliruba",
            "options": [
              "Eliruba",
              "Akhamuna",
              "Akhameme",
              "Omweli"
            ],
            "hint": "eh-lee-roo-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Moon / Lunar month\" in Luhya (Luyia)?",
            "correctAnswer": "Omweli",
            "options": [
              "Akhamuna",
              "Akhameme",
              "Eliruba",
              "Omweli"
            ],
            "hint": "oh-mweh-lee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hammer\" in Luhya (Luyia)?",
            "correctAnswer": "Inyondo",
            "options": [
              "Akhameme",
              "Eliruba",
              "Inyondo",
              "Akhamuna"
            ],
            "hint": "een-yohn-doh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Akhamuna: Ground squirrel / Folk trickster hero, Akhameme: Kid / Young goat, Eliruba: Sun, Omweli: Moon / Lunar month",
            "pairs": [
              {
                "left": "Akhamuna",
                "right": "Ground squirrel / Folk trickster hero"
              },
              {
                "left": "Akhameme",
                "right": "Kid / Young goat"
              },
              {
                "left": "Eliruba",
                "right": "Sun"
              },
              {
                "left": "Omweli",
                "right": "Moon / Lunar month"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Ground squirrel / Folk trickster hero\" in Luhya (Luyia).",
            "correctAnswer": "Akhamuna",
            "options": [
              "Akhamuna",
              "Akhameme",
              "Eliruba",
              "Omweli"
            ],
            "hint": "ah-khah-moo-nah"
          }
        ]
      },
      {
        "id": "luhya-exp-nature-animals-2",
        "title": "Nature & Animals (Olushiwanga) (Part 2)",
        "icon": "Sun",
        "description": "Master Luhya (Luyia) nature & animals (olushiwanga) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Nature & Animals (Olushiwanga), pay special attention to pronunciation and morphological prefixes/suffixes: 'Inyanza' (Lake / Inland sea), 'Isulwe' (Bright star / Morning star), 'Olwanda' (Rock / Boulder), 'Omuyeka' (Wind / Breeze).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Inyanza",
            "source": "Lake / Inland sea",
            "pronunciation": "een-yahn-zah",
            "hint": "(n., cl. 9) Lake, large lake (e.g. Lake Victoria / Nyanza)",
            "example": "Inyanza — Lake / Inland sea ((n., cl. 9) Lake, large lake (e.g. Lake Victoria / Nyanza))"
          },
          {
            "target": "Isulwe",
            "source": "Bright star / Morning star",
            "pronunciation": "ee-sool-weh",
            "hint": "(n., cl. 9, pl. tsisulwe) Bright morning or evening star",
            "example": "Isulwe — Bright star / Morning star ((n., cl. 9, pl. tsisulwe) Bright morning or evening star)"
          },
          {
            "target": "Olwanda",
            "source": "Rock / Boulder",
            "pronunciation": "ohl-wahn-dah",
            "hint": "(n., cl. 11, pl. tsinyanda) Rock, large stone cliff or outcrop",
            "example": "Olwanda — Rock / Boulder ((n., cl. 11, pl. tsinyanda) Rock, large stone cliff or outcrop)"
          },
          {
            "target": "Omuyeka",
            "source": "Wind / Breeze",
            "pronunciation": "oh-moo-yeh-kah",
            "hint": "(n., cl. 3) Wind, air current, breeze",
            "example": "Omuyeka — Wind / Breeze ((n., cl. 3) Wind, air current, breeze)"
          },
          {
            "target": "Imboko",
            "source": "Buffalo",
            "pronunciation": "eem-boh-koh",
            "hint": "(n., cl. 9, pl. tsimboko) Wild African buffalo",
            "example": "Imboko — Buffalo ((n., cl. 9, pl. tsimboko) Wild African buffalo)"
          }
        ],
        "sentences": [
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          },
          {
            "target": "Omوخasi ateekha obusuma obulayi.",
            "source": "The woman cooks good ugali."
          },
          {
            "target": "Efwe khuloma oluluyia obulayi.",
            "source": "We speak Luyia well."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Inyanza\" mean in English?",
            "correctAnswer": "Lake / Inland sea",
            "options": [
              "Bright star / Morning star",
              "Rock / Boulder",
              "Wind / Breeze",
              "Lake / Inland sea"
            ],
            "hint": "(n., cl. 9) Lake, large lake (e.g. Lake Victoria / Nyanza)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Isulwe\" mean in English?",
            "correctAnswer": "Bright star / Morning star",
            "options": [
              "Rock / Boulder",
              "Wind / Breeze",
              "Bright star / Morning star",
              "Lake / Inland sea"
            ],
            "hint": "(n., cl. 9, pl. tsisulwe) Bright morning or evening star"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Olwanda\" mean in English?",
            "correctAnswer": "Rock / Boulder",
            "options": [
              "Wind / Breeze",
              "Rock / Boulder",
              "Lake / Inland sea",
              "Bright star / Morning star"
            ],
            "hint": "(n., cl. 11, pl. tsinyanda) Rock, large stone cliff or outcrop"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Rock / Boulder\" in Luhya (Luyia)?",
            "correctAnswer": "Olwanda",
            "options": [
              "Olwanda",
              "Inyanza",
              "Isulwe",
              "Omuyeka"
            ],
            "hint": "ohl-wahn-dah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Wind / Breeze\" in Luhya (Luyia)?",
            "correctAnswer": "Omuyeka",
            "options": [
              "Inyanza",
              "Isulwe",
              "Olwanda",
              "Omuyeka"
            ],
            "hint": "oh-moo-yeh-kah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Buffalo\" in Luhya (Luyia)?",
            "correctAnswer": "Imboko",
            "options": [
              "Isulwe",
              "Olwanda",
              "Imboko",
              "Inyanza"
            ],
            "hint": "eem-boh-koh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Inyanza: Lake / Inland sea, Isulwe: Bright star / Morning star, Olwanda: Rock / Boulder, Omuyeka: Wind / Breeze",
            "pairs": [
              {
                "left": "Inyanza",
                "right": "Lake / Inland sea"
              },
              {
                "left": "Isulwe",
                "right": "Bright star / Morning star"
              },
              {
                "left": "Olwanda",
                "right": "Rock / Boulder"
              },
              {
                "left": "Omuyeka",
                "right": "Wind / Breeze"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Lake / Inland sea\" in Luhya (Luyia).",
            "correctAnswer": "Inyanza",
            "options": [
              "Inyanza",
              "Isulwe",
              "Olwanda",
              "Omuyeka"
            ],
            "hint": "een-yahn-zah"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-18-wanga-verbs",
    "title": "Unit 18: Actions & Verbs (Olushiwanga)",
    "description": "Comprehensive Luhya (Luyia) curriculum for Actions & Verbs (Olushiwanga), vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Zap",
    "skills": [
      {
        "id": "luhya-exp-wanga-verbs",
        "title": "Actions & Verbs (Olushiwanga) (Part 1)",
        "icon": "Zap",
        "description": "Master Luhya (Luyia) actions & verbs (olushiwanga) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Actions & Verbs (Olushiwanga), pay special attention to pronunciation and morphological prefixes/suffixes: 'Okhukora' (To do / To make / To work), 'Okhutsia' (To go / To proceed), 'Okhwicha' (To come), 'Okhureba' (To ask (a question)).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Okhukora",
            "source": "To do / To make / To work",
            "pronunciation": "oh-khoo-koh-rah",
            "hint": "(v.tr.; also okhukhola) To do, make, execute work, accomplish a task",
            "example": "Okhukora — To do / To make / To work ((v.tr.; also okhukhola) To do, make, execute work, accomplish a task)"
          },
          {
            "target": "Okhutsia",
            "source": "To go / To proceed",
            "pronunciation": "oh-khoo-tsee-ah",
            "hint": "(v.int.; also okhutsya) To go, walk away, proceed on a journey",
            "example": "Okhutsia — To go / To proceed ((v.int.; also okhutsya) To go, walk away, proceed on a journey)"
          },
          {
            "target": "Okhwicha",
            "source": "To come",
            "pronunciation": "oh-khwee-chah",
            "hint": "(v.int.; also okhwitsa) To come, approach, arrive here",
            "example": "Okhwicha — To come ((v.int.; also okhwitsa) To come, approach, arrive here)"
          },
          {
            "target": "Okhureba",
            "source": "To ask (a question)",
            "pronunciation": "oh-khoo-reh-bah",
            "hint": "(v.tr./int.) To ask a question, inquire, examine through questions",
            "example": "Okhureba — To ask (a question) ((v.tr./int.) To ask a question, inquire, examine through questions)"
          },
          {
            "target": "Okhwaama",
            "source": "To come from / To originate",
            "pronunciation": "oh-khwah-ah-mah",
            "hint": "(v.int.; also okhurula) To come from, originate at, emerge from",
            "example": "Okhwaama — To come from / To originate ((v.int.; also okhurula) To come from, originate at, emerge from)"
          },
          {
            "target": "Okhulaama",
            "source": "To pray / To bless / To bequeath",
            "pronunciation": "oh-khoo-lah-ah-mah",
            "hint": "(v.tr./int.; also okhulama) To pray, bless, invoke favor, bequeath inheritance",
            "example": "Okhulaama — To pray / To bless / To bequeath ((v.tr./int.; also okhulama) To pray, bless, invoke favor, bequeath inheritance)"
          },
          {
            "target": "Okhuloma",
            "source": "To speak / To converse",
            "pronunciation": "oh-khoo-loh-mah",
            "hint": "(v.tr./int.) To speak, utter words, talk with someone",
            "example": "Okhuloma — To speak / To converse ((v.tr./int.) To speak, utter words, talk with someone)"
          },
          {
            "target": "Okhuulira",
            "source": "To hear / To listen / To obey",
            "pronunciation": "oh-khoo-oo-lee-rah",
            "hint": "(v.tr.; also okhuhulila) To hear, listen attentively, perceive, obey",
            "example": "Okhuulira — To hear / To listen / To obey ((v.tr.; also okhuhulila) To hear, listen attentively, perceive, obey)"
          },
          {
            "target": "Okhwumbakha",
            "source": "To build / To erect",
            "pronunciation": "oh-khwoom-bah-khah",
            "hint": "(v.tr.; also okhumbakha) To build a house or traditional structure",
            "example": "Okhwumbakha — To build / To erect ((v.tr.; also okhumbakha) To build a house or traditional structure)"
          },
          {
            "target": "Okhulima",
            "source": "To cultivate / To farm / To dig",
            "pronunciation": "oh-khoo-lee-mah",
            "hint": "(v.tr./int.) To till soil, cultivate crops, dig with hoe (imbako)",
            "example": "Okhulima — To cultivate / To farm / To dig ((v.tr./int.) To till soil, cultivate crops, dig with hoe (imbako))"
          },
          {
            "target": "Okhumanya",
            "source": "To know / To understand",
            "pronunciation": "oh-khoo-mah-nyah",
            "hint": "(v.tr.) To know, acquire knowledge, comprehend (emanyire = I know)",
            "example": "Okhumanya — To know / To understand ((v.tr.) To know, acquire knowledge, comprehend (emanyire = I know))"
          },
          {
            "target": "Okhuwa",
            "source": "To give / To bestow",
            "pronunciation": "oh-khoo-wah",
            "hint": "(v.tr.; also okhuha / okhuhaana) To give, bestow, hand over a gift",
            "example": "Okhuwa — To give / To bestow ((v.tr.; also okhuha / okhuhaana) To give, bestow, hand over a gift)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Okhukora\" mean in English?",
            "correctAnswer": "To do / To make / To work",
            "options": [
              "To go / To proceed",
              "To come",
              "To ask (a question)",
              "To do / To make / To work"
            ],
            "hint": "(v.tr.; also okhukhola) To do, make, execute work, accomplish a task"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Okhutsia\" mean in English?",
            "correctAnswer": "To go / To proceed",
            "options": [
              "To come",
              "To ask (a question)",
              "To go / To proceed",
              "To do / To make / To work"
            ],
            "hint": "(v.int.; also okhutsya) To go, walk away, proceed on a journey"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Okhwicha\" mean in English?",
            "correctAnswer": "To come",
            "options": [
              "To ask (a question)",
              "To come",
              "To do / To make / To work",
              "To go / To proceed"
            ],
            "hint": "(v.int.; also okhwitsa) To come, approach, arrive here"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To come\" in Luhya (Luyia)?",
            "correctAnswer": "Okhwicha",
            "options": [
              "Okhwicha",
              "Okhukora",
              "Okhutsia",
              "Okhureba"
            ],
            "hint": "oh-khwee-chah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To ask (a question)\" in Luhya (Luyia)?",
            "correctAnswer": "Okhureba",
            "options": [
              "Okhukora",
              "Okhutsia",
              "Okhwicha",
              "Okhureba"
            ],
            "hint": "oh-khoo-reh-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To come from / To originate\" in Luhya (Luyia)?",
            "correctAnswer": "Okhwaama",
            "options": [
              "Okhutsia",
              "Okhwicha",
              "Okhwaama",
              "Okhukora"
            ],
            "hint": "oh-khwah-ah-mah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Okhukora: To do / To make / To work, Okhutsia: To go / To proceed, Okhwicha: To come, Okhureba: To ask (a question)",
            "pairs": [
              {
                "left": "Okhukora",
                "right": "To do / To make / To work"
              },
              {
                "left": "Okhutsia",
                "right": "To go / To proceed"
              },
              {
                "left": "Okhwicha",
                "right": "To come"
              },
              {
                "left": "Okhureba",
                "right": "To ask (a question)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To do / To make / To work\" in Luhya (Luyia).",
            "correctAnswer": "Okhukora",
            "options": [
              "Okhukora",
              "Okhutsia",
              "Okhwicha",
              "Okhureba"
            ],
            "hint": "oh-khoo-koh-rah"
          }
        ]
      },
      {
        "id": "luhya-exp-wanga-verbs-2",
        "title": "Actions & Verbs (Olushiwanga) (Part 2)",
        "icon": "Zap",
        "description": "Master Luhya (Luyia) actions & verbs (olushiwanga) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Actions & Verbs (Olushiwanga), pay special attention to pronunciation and morphological prefixes/suffixes: 'Okhwirukha' (To run / To sprint), 'Okhwisinga' (To bathe / To wash oneself), 'Okhwimba' (To sing), 'Okhushina' (To dance).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Okhwirukha",
            "source": "To run / To sprint",
            "pronunciation": "oh-khwee-roo-khah",
            "hint": "(v.int.) To run fast, dash, flee from danger",
            "example": "Okhwirukha — To run / To sprint ((v.int.) To run fast, dash, flee from danger)"
          },
          {
            "target": "Okhwisinga",
            "source": "To bathe / To wash oneself",
            "pronunciation": "oh-khwee-seen-gah",
            "hint": "(v.refl.) To wash one's whole body, take a bath",
            "example": "Okhwisinga — To bathe / To wash oneself ((v.refl.) To wash one's whole body, take a bath)"
          },
          {
            "target": "Okhwimba",
            "source": "To sing",
            "pronunciation": "oh-khweem-bah",
            "hint": "(v.tr./int.) To sing a traditional song or melody",
            "example": "Okhwimba — To sing ((v.tr./int.) To sing a traditional song or melody)"
          },
          {
            "target": "Okhushina",
            "source": "To dance",
            "pronunciation": "oh-khoo-shee-nah",
            "hint": "(v.int.; also okhwibinza) To dance to drumming and singing",
            "example": "Okhushina — To dance ((v.int.; also okhwibinza) To dance to drumming and singing)"
          },
          {
            "target": "Okhutsekha",
            "source": "To laugh",
            "pronunciation": "oh-khoo-tseh-khah",
            "hint": "(v.int.) To laugh, chuckle with amusement",
            "example": "Okhutsekha — To laugh ((v.int.) To laugh, chuckle with amusement)"
          },
          {
            "target": "Okhulira",
            "source": "To weep / To cry",
            "pronunciation": "oh-khoo-lee-rah",
            "hint": "(v.int.) To weep, lament, shed tears",
            "example": "Okhulira — To weep / To cry ((v.int.) To weep, lament, shed tears)"
          },
          {
            "target": "Okhureera",
            "source": "To bring / To fetch",
            "pronunciation": "oh-khoo-reh-eh-rah",
            "hint": "(v.tr.; also okhurera / okhwenda) To bring, fetch, deliver to",
            "example": "Okhureera — To bring / To fetch ((v.tr.; also okhurera / okhwenda) To bring, fetch, deliver to)"
          },
          {
            "target": "Okhulinda",
            "source": "To guard / To look after",
            "pronunciation": "oh-khoo-leen-dah",
            "hint": "(v.tr./int.) To wait, guard, protect, watch over cattle or family",
            "example": "Okhulinda — To guard / To look after ((v.tr./int.) To wait, guard, protect, watch over cattle or family)"
          },
          {
            "target": "Okhwenya",
            "source": "To love / To desire",
            "pronunciation": "oh-khweh-nyah",
            "hint": "(v.tr.; also okhuera / okhuheela) To want, love, cherish, desire",
            "example": "Okhwenya — To love / To desire ((v.tr.; also okhuera / okhuheela) To want, love, cherish, desire)"
          },
          {
            "target": "Okhwibula",
            "source": "To give birth / To bear offspring",
            "pronunciation": "oh-khwee-boo-lah",
            "hint": "(v.tr./int.) To give birth, bear a child, beget children",
            "example": "Okhwibula — To give birth / To bear offspring ((v.tr./int.) To give birth, bear a child, beget children)"
          },
          {
            "target": "Okhuteeshia",
            "source": "To marry a wife",
            "pronunciation": "oh-khoo-teh-eh-shee-ah",
            "hint": "(v.tr.; also okhureera omukhasi) To marry (of a man taking a bride)",
            "example": "Okhuteeshia — To marry a wife ((v.tr.; also okhureera omukhasi) To marry (of a man taking a bride))"
          }
        ],
        "sentences": [
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          },
          {
            "target": "Omوخasi ateekha obusuma obulayi.",
            "source": "The woman cooks good ugali."
          },
          {
            "target": "Efwe khuloma oluluyia obulayi.",
            "source": "We speak Luyia well."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Okhwirukha\" mean in English?",
            "correctAnswer": "To run / To sprint",
            "options": [
              "To bathe / To wash oneself",
              "To sing",
              "To dance",
              "To run / To sprint"
            ],
            "hint": "(v.int.) To run fast, dash, flee from danger"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Okhwisinga\" mean in English?",
            "correctAnswer": "To bathe / To wash oneself",
            "options": [
              "To sing",
              "To dance",
              "To bathe / To wash oneself",
              "To run / To sprint"
            ],
            "hint": "(v.refl.) To wash one's whole body, take a bath"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Okhwimba\" mean in English?",
            "correctAnswer": "To sing",
            "options": [
              "To dance",
              "To sing",
              "To run / To sprint",
              "To bathe / To wash oneself"
            ],
            "hint": "(v.tr./int.) To sing a traditional song or melody"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To sing\" in Luhya (Luyia)?",
            "correctAnswer": "Okhwimba",
            "options": [
              "Okhwimba",
              "Okhwirukha",
              "Okhwisinga",
              "Okhushina"
            ],
            "hint": "oh-khweem-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To dance\" in Luhya (Luyia)?",
            "correctAnswer": "Okhushina",
            "options": [
              "Okhwirukha",
              "Okhwisinga",
              "Okhwimba",
              "Okhushina"
            ],
            "hint": "oh-khoo-shee-nah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To laugh\" in Luhya (Luyia)?",
            "correctAnswer": "Okhutsekha",
            "options": [
              "Okhwisinga",
              "Okhwimba",
              "Okhutsekha",
              "Okhwirukha"
            ],
            "hint": "oh-khoo-tseh-khah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Okhwirukha: To run / To sprint, Okhwisinga: To bathe / To wash oneself, Okhwimba: To sing, Okhushina: To dance",
            "pairs": [
              {
                "left": "Okhwirukha",
                "right": "To run / To sprint"
              },
              {
                "left": "Okhwisinga",
                "right": "To bathe / To wash oneself"
              },
              {
                "left": "Okhwimba",
                "right": "To sing"
              },
              {
                "left": "Okhushina",
                "right": "To dance"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To run / To sprint\" in Luhya (Luyia).",
            "correctAnswer": "Okhwirukha",
            "options": [
              "Okhwirukha",
              "Okhwisinga",
              "Okhwimba",
              "Okhushina"
            ],
            "hint": "oh-khwee-roo-khah"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-19-descriptive-adjectives",
    "title": "Unit 19: Adjectives & Descriptive Terms (Olushiwanga)",
    "description": "Comprehensive Luhya (Luyia) curriculum for Adjectives & Descriptive Terms (Olushiwanga), vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Palette",
    "skills": [
      {
        "id": "luhya-exp-descriptive-adjectives",
        "title": "Adjectives & Descriptive Terms (Olushiwanga) (Part 1)",
        "icon": "Palette",
        "description": "Master Luhya (Luyia) adjectives & descriptive terms (olushiwanga) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Adjectives & Descriptive Terms (Olushiwanga), pay special attention to pronunciation and morphological prefixes/suffixes: 'Abachesi' (Clever / Wise / Bright), 'Ababi' (Bad / Evil / Ugly / Unpleasant), 'Abalayi' (Good / Beautiful / Fine), 'Abatieri' (True / Truthful / Correct).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Abachesi",
            "source": "Clever / Wise / Bright",
            "pronunciation": "ah-bah-cheh-see",
            "hint": "(adj. pl., cl. 2, sg. omuchesi, stem -chesi) Clever, wise, intelligent, sharp-minded",
            "example": "Abachesi — Clever / Wise / Bright ((adj. pl., cl. 2, sg. omuchesi, stem -chesi) Clever, wise, intelligent, sharp-minded)"
          },
          {
            "target": "Ababi",
            "source": "Bad / Evil / Ugly / Unpleasant",
            "pronunciation": "ah-bah-bee",
            "hint": "(adj. pl., cl. 2, sg. omubi, stem -bi) Bad, wrongful, immoral, ugly, offensive",
            "example": "Ababi — Bad / Evil / Ugly / Unpleasant ((adj. pl., cl. 2, sg. omubi, stem -bi) Bad, wrongful, immoral, ugly, offensive)"
          },
          {
            "target": "Abalayi",
            "source": "Good / Beautiful / Fine",
            "pronunciation": "ah-bah-lah-yee",
            "hint": "(adj. pl., cl. 2, sg. omulayi, stem -layi) Good, handsome, beautiful, righteous",
            "example": "Abalayi — Good / Beautiful / Fine ((adj. pl., cl. 2, sg. omulayi, stem -layi) Good, handsome, beautiful, righteous)"
          },
          {
            "target": "Abatieri",
            "source": "True / Truthful / Correct",
            "pronunciation": "ah-bah-tee-eh-ree",
            "hint": "(adj. pl., cl. 2, stem -atieri) Honest, truthful, right, authentic",
            "example": "Abatieri — True / Truthful / Correct ((adj. pl., cl. 2, stem -atieri) Honest, truthful, right, authentic)"
          },
          {
            "target": "Abatiti",
            "source": "Little / Small / Few",
            "pronunciation": "ah-bah-tee-tee",
            "hint": "(adj. pl., cl. 2, sg. omutiti, stem -titi) Small in size, little, few in number",
            "example": "Abatiti — Little / Small / Few ((adj. pl., cl. 2, sg. omutiti, stem -titi) Small in size, little, few in number)"
          },
          {
            "target": "Abakhongo",
            "source": "Big / Large / Senior",
            "pronunciation": "ah-bah-khohn-goh",
            "hint": "(adj. pl., cl. 2, sg. omukhongo, stem -khongo) Big, grand, important, eminent",
            "example": "Abakhongo — Big / Large / Senior ((adj. pl., cl. 2, sg. omukhongo, stem -khongo) Big, grand, important, eminent)"
          },
          {
            "target": "Abesikwa",
            "source": "Trustworthy / Faithful / Reliable",
            "pronunciation": "ah-beh-see-kwah",
            "hint": "(adj. pl., cl. 2, sg. omwisikwa, stem -isikwa) Dependable, faithful, loyal",
            "example": "Abesikwa — Trustworthy / Faithful / Reliable ((adj. pl., cl. 2, sg. omwisikwa, stem -isikwa) Dependable, faithful, loyal)"
          },
          {
            "target": "Abacheni",
            "source": "Foreign / Novel / Unusual",
            "pronunciation": "ah-bah-cheh-nee",
            "hint": "(adj. pl., cl. 2, stem -cheni) Foreign, strange, novel, unfamiliar",
            "example": "Abacheni — Foreign / Novel / Unusual ((adj. pl., cl. 2, stem -cheni) Foreign, strange, novel, unfamiliar)"
          },
          {
            "target": "Abahalaba",
            "source": "Fierce / Bad-tempered",
            "pronunciation": "ah-bah-hah-lah-bah",
            "hint": "(adj. pl., cl. 2, stem -halaba) Fierce, quick-tempered, scolding disposition",
            "example": "Abahalaba — Fierce / Bad-tempered ((adj. pl., cl. 2, stem -halaba) Fierce, quick-tempered, scolding disposition)"
          },
          {
            "target": "Abatofu",
            "source": "Lazy / Weak",
            "pronunciation": "ah-bah-toh-foo",
            "hint": "(adj. pl., cl. 2, stem -tofu) Lazy, lacking endurance or willpower",
            "example": "Abatofu — Lazy / Weak ((adj. pl., cl. 2, stem -tofu) Lazy, lacking endurance or willpower)"
          },
          {
            "target": "Abembikiti",
            "source": "Short",
            "pronunciation": "ah-behm-bee-kee-tee",
            "hint": "(adj. pl., cl. 2, sg. omwimbikiti, stem -imbikiti) Short in height or stature",
            "example": "Abembikiti — Short ((adj. pl., cl. 2, sg. omwimbikiti, stem -imbikiti) Short in height or stature)"
          },
          {
            "target": "Abarambi",
            "source": "Tall / Long / High",
            "pronunciation": "ah-bah-rahm-bee",
            "hint": "(adj. pl., cl. 2, sg. omurambi, stem -rambi) Tall, long, deep, high",
            "example": "Abarambi — Tall / Long / High ((adj. pl., cl. 2, sg. omurambi, stem -rambi) Tall, long, deep, high)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Abachesi\" mean in English?",
            "correctAnswer": "Clever / Wise / Bright",
            "options": [
              "Bad / Evil / Ugly / Unpleasant",
              "Good / Beautiful / Fine",
              "True / Truthful / Correct",
              "Clever / Wise / Bright"
            ],
            "hint": "(adj. pl., cl. 2, sg. omuchesi, stem -chesi) Clever, wise, intelligent, sharp-minded"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ababi\" mean in English?",
            "correctAnswer": "Bad / Evil / Ugly / Unpleasant",
            "options": [
              "Good / Beautiful / Fine",
              "True / Truthful / Correct",
              "Bad / Evil / Ugly / Unpleasant",
              "Clever / Wise / Bright"
            ],
            "hint": "(adj. pl., cl. 2, sg. omubi, stem -bi) Bad, wrongful, immoral, ugly, offensive"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Abalayi\" mean in English?",
            "correctAnswer": "Good / Beautiful / Fine",
            "options": [
              "True / Truthful / Correct",
              "Good / Beautiful / Fine",
              "Clever / Wise / Bright",
              "Bad / Evil / Ugly / Unpleasant"
            ],
            "hint": "(adj. pl., cl. 2, sg. omulayi, stem -layi) Good, handsome, beautiful, righteous"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Good / Beautiful / Fine\" in Luhya (Luyia)?",
            "correctAnswer": "Abalayi",
            "options": [
              "Abalayi",
              "Abachesi",
              "Ababi",
              "Abatieri"
            ],
            "hint": "ah-bah-lah-yee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"True / Truthful / Correct\" in Luhya (Luyia)?",
            "correctAnswer": "Abatieri",
            "options": [
              "Abachesi",
              "Ababi",
              "Abalayi",
              "Abatieri"
            ],
            "hint": "ah-bah-tee-eh-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Little / Small / Few\" in Luhya (Luyia)?",
            "correctAnswer": "Abatiti",
            "options": [
              "Ababi",
              "Abalayi",
              "Abatiti",
              "Abachesi"
            ],
            "hint": "ah-bah-tee-tee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Abachesi: Clever / Wise / Bright, Ababi: Bad / Evil / Ugly / Unpleasant, Abalayi: Good / Beautiful / Fine, Abatieri: True / Truthful / Correct",
            "pairs": [
              {
                "left": "Abachesi",
                "right": "Clever / Wise / Bright"
              },
              {
                "left": "Ababi",
                "right": "Bad / Evil / Ugly / Unpleasant"
              },
              {
                "left": "Abalayi",
                "right": "Good / Beautiful / Fine"
              },
              {
                "left": "Abatieri",
                "right": "True / Truthful / Correct"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Clever / Wise / Bright\" in Luhya (Luyia).",
            "correctAnswer": "Abachesi",
            "options": [
              "Abachesi",
              "Ababi",
              "Abalayi",
              "Abatieri"
            ],
            "hint": "ah-bah-cheh-see"
          }
        ]
      },
      {
        "id": "luhya-exp-descriptive-adjectives-2",
        "title": "Adjectives & Descriptive Terms (Olushiwanga) (Part 2)",
        "icon": "Palette",
        "description": "Master Luhya (Luyia) adjectives & descriptive terms (olushiwanga) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Adjectives & Descriptive Terms (Olushiwanga), pay special attention to pronunciation and morphological prefixes/suffixes: 'Abalafu' (White / Clean / Pure / Holy), 'Abamali' (Black / Dark-complexioned), 'Abalamu' (Alive / Living / Healthy), 'Amalulu' (Fierce / Bitter / Sharp).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Abalafu",
            "source": "White / Clean / Pure / Holy",
            "pronunciation": "ah-bah-lah-foo",
            "hint": "(adj. pl., cl. 2, sg. omulafu, stem -lafu) White, clean, pure, spotless; holy saints",
            "example": "Abalafu — White / Clean / Pure / Holy ((adj. pl., cl. 2, sg. omulafu, stem -lafu) White, clean, pure, spotless; holy saints)"
          },
          {
            "target": "Abamali",
            "source": "Black / Dark-complexioned",
            "pronunciation": "ah-bah-mah-lee",
            "hint": "(adj. pl., cl. 2, sg. omumali, stem -mali) Black, dark in shade or complexion",
            "example": "Abamali — Black / Dark-complexioned ((adj. pl., cl. 2, sg. omumali, stem -mali) Black, dark in shade or complexion)"
          },
          {
            "target": "Abalamu",
            "source": "Alive / Living / Healthy",
            "pronunciation": "ah-bah-lah-moo",
            "hint": "(adj. pl., cl. 2, sg. omulamu, stem -lamu) Alive, healthy, full of life",
            "example": "Abalamu — Alive / Living / Healthy ((adj. pl., cl. 2, sg. omulamu, stem -lamu) Alive, healthy, full of life)"
          },
          {
            "target": "Amalulu",
            "source": "Fierce / Bitter / Sharp",
            "pronunciation": "ah-mah-loo-loo",
            "hint": "(adj. pl., cl. 6, stem -lulu) Sharp, bitter, fierce, severe",
            "example": "Amalulu — Fierce / Bitter / Sharp ((adj. pl., cl. 6, stem -lulu) Sharp, bitter, fierce, severe)"
          },
          {
            "target": "Amenjefu",
            "source": "Ripe / Matured",
            "pronunciation": "ah-mehn-jeh-foo",
            "hint": "(adj. pl., cl. 6, stem -enjefu) Ripe, ready for eating, fully matured",
            "example": "Amenjefu — Ripe / Matured ((adj. pl., cl. 6, stem -enjefu) Ripe, ready for eating, fully matured)"
          },
          {
            "target": "Amachishi",
            "source": "Unripe / Green",
            "pronunciation": "ah-mah-chee-shee",
            "hint": "(adj. pl., cl. 6, stem -chishi) Unripe, immature, green",
            "example": "Amachishi — Unripe / Green ((adj. pl., cl. 6, stem -chishi) Unripe, immature, green)"
          },
          {
            "target": "Amayu",
            "source": "Warm / Fresh",
            "pronunciation": "ah-mah-yoo",
            "hint": "(adj. pl., cl. 6) Warm, fresh (e.g. amabeere amayu = fresh warm milk)",
            "example": "Amayu — Warm / Fresh ((adj. pl., cl. 6) Warm, fresh (e.g. amabeere amayu = fresh warm milk))"
          },
          {
            "target": "Eshinyifu",
            "source": "Cold / Damp",
            "pronunciation": "eh-shee-nyee-foo",
            "hint": "(adj., cl. 7, stem -nyifu) Cold, chilly, damp to the touch",
            "example": "Eshinyifu — Cold / Damp ((adj., cl. 7, stem -nyifu) Cold, chilly, damp to the touch)"
          },
          {
            "target": "Eshiyakha",
            "source": "New / Modern / Recent",
            "pronunciation": "eh-shee-yah-khah",
            "hint": "(adj., cl. 7, stem -yakha; also efiya) Brand new, novel, recent",
            "example": "Eshiyakha — New / Modern / Recent ((adj., cl. 7, stem -yakha; also efiya) Brand new, novel, recent)"
          },
          {
            "target": "Akhakhanyu",
            "source": "Red / Reddish-brown",
            "pronunciation": "ah-khah-khah-nyoo",
            "hint": "(adj., cl. 12, stem -akhanyu) Red, scarlet, orange, brownish-red",
            "example": "Akhakhanyu — Red / Reddish-brown ((adj., cl. 12, stem -akhanyu) Red, scarlet, orange, brownish-red)"
          },
          {
            "target": "Bukala",
            "source": "Whole / Complete / Undivided",
            "pronunciation": "boo-kah-lah",
            "hint": "(adv./adj.) Whole, complete, unbroken, intact",
            "example": "Bukala — Whole / Complete / Undivided ((adv./adj.) Whole, complete, unbroken, intact)"
          },
          {
            "target": "Obutinyu",
            "source": "Firm / Hard / Tough",
            "pronunciation": "oh-boo-teen-yoo",
            "hint": "(adj./n., cl. 14, stem -tinyu) Hard, tough, resolute, unyielding",
            "example": "Obutinyu — Firm / Hard / Tough ((adj./n., cl. 14, stem -tinyu) Hard, tough, resolute, unyielding)"
          }
        ],
        "sentences": [
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          },
          {
            "target": "Omوخasi ateekha obusuma obulayi.",
            "source": "The woman cooks good ugali."
          },
          {
            "target": "Efwe khuloma oluluyia obulayi.",
            "source": "We speak Luyia well."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Abalafu\" mean in English?",
            "correctAnswer": "White / Clean / Pure / Holy",
            "options": [
              "Black / Dark-complexioned",
              "Alive / Living / Healthy",
              "Fierce / Bitter / Sharp",
              "White / Clean / Pure / Holy"
            ],
            "hint": "(adj. pl., cl. 2, sg. omulafu, stem -lafu) White, clean, pure, spotless; holy saints"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Abamali\" mean in English?",
            "correctAnswer": "Black / Dark-complexioned",
            "options": [
              "Alive / Living / Healthy",
              "Fierce / Bitter / Sharp",
              "Black / Dark-complexioned",
              "White / Clean / Pure / Holy"
            ],
            "hint": "(adj. pl., cl. 2, sg. omumali, stem -mali) Black, dark in shade or complexion"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Abalamu\" mean in English?",
            "correctAnswer": "Alive / Living / Healthy",
            "options": [
              "Fierce / Bitter / Sharp",
              "Alive / Living / Healthy",
              "White / Clean / Pure / Holy",
              "Black / Dark-complexioned"
            ],
            "hint": "(adj. pl., cl. 2, sg. omulamu, stem -lamu) Alive, healthy, full of life"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Alive / Living / Healthy\" in Luhya (Luyia)?",
            "correctAnswer": "Abalamu",
            "options": [
              "Abalamu",
              "Abalafu",
              "Abamali",
              "Amalulu"
            ],
            "hint": "ah-bah-lah-moo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fierce / Bitter / Sharp\" in Luhya (Luyia)?",
            "correctAnswer": "Amalulu",
            "options": [
              "Abalafu",
              "Abamali",
              "Abalamu",
              "Amalulu"
            ],
            "hint": "ah-mah-loo-loo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ripe / Matured\" in Luhya (Luyia)?",
            "correctAnswer": "Amenjefu",
            "options": [
              "Abamali",
              "Abalamu",
              "Amenjefu",
              "Abalafu"
            ],
            "hint": "ah-mehn-jeh-foo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Abalafu: White / Clean / Pure / Holy, Abamali: Black / Dark-complexioned, Abalamu: Alive / Living / Healthy, Amalulu: Fierce / Bitter / Sharp",
            "pairs": [
              {
                "left": "Abalafu",
                "right": "White / Clean / Pure / Holy"
              },
              {
                "left": "Abamali",
                "right": "Black / Dark-complexioned"
              },
              {
                "left": "Abalamu",
                "right": "Alive / Living / Healthy"
              },
              {
                "left": "Amalulu",
                "right": "Fierce / Bitter / Sharp"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"White / Clean / Pure / Holy\" in Luhya (Luyia).",
            "correctAnswer": "Abalafu",
            "options": [
              "Abalafu",
              "Abamali",
              "Abalamu",
              "Amalulu"
            ],
            "hint": "ah-bah-lah-foo"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-20-culture-traditions",
    "title": "Unit 20: Cultural & Traditional Life (Olushiwanga)",
    "description": "Comprehensive Luhya (Luyia) curriculum for Cultural & Traditional Life (Olushiwanga), vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Award",
    "skills": [
      {
        "id": "luhya-exp-culture-traditions",
        "title": "Cultural & Traditional Life (Olushiwanga) (Part 1)",
        "icon": "Award",
        "description": "Master Luhya (Luyia) cultural & traditional life (olushiwanga) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Cultural & Traditional Life (Olushiwanga), pay special attention to pronunciation and morphological prefixes/suffixes: 'Alwanyi' (Village courtyard / Communal open space), 'Eshilolero' (Sign / Symbol / Miraculous mark), 'Akhandamwa' (Woven traditional basket), 'Obubwoni' (Peace / Tranquility / Wellbeing).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Alwanyi",
            "source": "Village courtyard / Communal open space",
            "pronunciation": "ahl-wah-nyee",
            "hint": "(n./adv.) Open space in the center of the village; communal gathering courtyard",
            "example": "Alwanyi — Village courtyard / Communal open space ((n./adv.) Open space in the center of the village; communal gathering courtyard)"
          },
          {
            "target": "Eshilolero",
            "source": "Sign / Symbol / Miraculous mark",
            "pronunciation": "eh-shee-loh-leh-roh",
            "hint": "(n., cl. 7, pl. ebilolero; also akhalolero) Sign, symbol, brand mark, wonder",
            "example": "Eshilolero — Sign / Symbol / Miraculous mark ((n., cl. 7, pl. ebilolero; also akhalolero) Sign, symbol, brand mark, wonder)"
          },
          {
            "target": "Akhandamwa",
            "source": "Woven traditional basket",
            "pronunciation": "ah-khahn-dah-mwah",
            "hint": "(n., cl. 12, pl. obundamwa) Fine woven grain basket used for serving flour and meals",
            "example": "Akhandamwa — Woven traditional basket ((n., cl. 12, pl. obundamwa) Fine woven grain basket used for serving flour and meals)"
          },
          {
            "target": "Obubwoni",
            "source": "Peace / Tranquility / Wellbeing",
            "pronunciation": "oh-boo-bwoh-nee",
            "hint": "(n., cl. 14; also obwihotseresi) Peace, serene tranquility, communal wellbeing",
            "example": "Obubwoni — Peace / Tranquility / Wellbeing ((n., cl. 14; also obwihotseresi) Peace, serene tranquility, communal wellbeing)"
          },
          {
            "target": "Omulembe",
            "source": "Universal peace / Blessing salutation",
            "pronunciation": "oh-moo-lehm-beh",
            "hint": "(n., cl. 3) Peace, wellness; root of the sacred greeting 'Mulembe' across all Luhya",
            "example": "Omulembe — Universal peace / Blessing salutation ((n., cl. 3) Peace, wellness; root of the sacred greeting 'Mulembe' across all Luhya)"
          },
          {
            "target": "Litaala",
            "source": "Ancestral homestead / Village compound",
            "pronunciation": "lee-tah-ah-lah",
            "hint": "(n., cl. 5, pl. amataala) Traditional kraal, fortified homestead, family village",
            "example": "Litaala — Ancestral homestead / Village compound ((n., cl. 5, pl. amataala) Traditional kraal, fortified homestead, family village)"
          },
          {
            "target": "Inzu",
            "source": "Traditional home / House",
            "pronunciation": "een-zoo",
            "hint": "(n., cl. 9, pl. tsinzu; also ingo = at home) Family dwelling, house, home sanctuary",
            "example": "Inzu — Traditional home / House ((n., cl. 9, pl. tsinzu; also ingo = at home) Family dwelling, house, home sanctuary)"
          },
          {
            "target": "Olukano",
            "source": "Folktale / Traditional fable",
            "pronunciation": "oh-loo-kah-noh",
            "hint": "(n., cl. 11, pl. tsinkano) Story, fable, legend passed down orally through generations",
            "example": "Olukano — Folktale / Traditional fable ((n., cl. 11, pl. tsinkano) Story, fable, legend passed down orally through generations)"
          },
          {
            "target": "Oluchero",
            "source": "Proverb / Parable of wisdom",
            "pronunciation": "oh-loo-cheh-roh",
            "hint": "(n., cl. 11, pl. tsinchero) Parable, philosophical proverb encapsulating tribal wisdom",
            "example": "Oluchero — Proverb / Parable of wisdom ((n., cl. 11, pl. tsinchero) Parable, philosophical proverb encapsulating tribal wisdom)"
          },
          {
            "target": "Olwimbo",
            "source": "Traditional song / Melodic chant",
            "pronunciation": "ohl-weem-boh",
            "hint": "(n., cl. 11, pl. tsimbimbo) Song, festive melody, ceremonial chorus",
            "example": "Olwimbo — Traditional song / Melodic chant ((n., cl. 11, pl. tsimbimbo) Song, festive melody, ceremonial chorus)"
          },
          {
            "target": "Eshiremba",
            "source": "Warrior funeral dance",
            "pronunciation": "eh-shee-rehm-bah",
            "hint": "(n., cl. 7) Prestigious funeral dance performed by armed men honoring an eminent elder",
            "example": "Eshiremba — Warrior funeral dance ((n., cl. 7) Prestigious funeral dance performed by armed men honoring an eminent elder)"
          },
          {
            "target": "Irumbi",
            "source": "Circumcision lodge / Initiation rite",
            "pronunciation": "ee-room-bee",
            "hint": "(n., cl. 5) Circumcision retreat where initiates receive ancestral teachings",
            "example": "Irumbi — Circumcision lodge / Initiation rite ((n., cl. 5) Circumcision retreat where initiates receive ancestral teachings)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Alwanyi\" mean in English?",
            "correctAnswer": "Village courtyard / Communal open space",
            "options": [
              "Sign / Symbol / Miraculous mark",
              "Woven traditional basket",
              "Peace / Tranquility / Wellbeing",
              "Village courtyard / Communal open space"
            ],
            "hint": "(n./adv.) Open space in the center of the village; communal gathering courtyard"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eshilolero\" mean in English?",
            "correctAnswer": "Sign / Symbol / Miraculous mark",
            "options": [
              "Woven traditional basket",
              "Peace / Tranquility / Wellbeing",
              "Sign / Symbol / Miraculous mark",
              "Village courtyard / Communal open space"
            ],
            "hint": "(n., cl. 7, pl. ebilolero; also akhalolero) Sign, symbol, brand mark, wonder"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Akhandamwa\" mean in English?",
            "correctAnswer": "Woven traditional basket",
            "options": [
              "Peace / Tranquility / Wellbeing",
              "Woven traditional basket",
              "Village courtyard / Communal open space",
              "Sign / Symbol / Miraculous mark"
            ],
            "hint": "(n., cl. 12, pl. obundamwa) Fine woven grain basket used for serving flour and meals"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Woven traditional basket\" in Luhya (Luyia)?",
            "correctAnswer": "Akhandamwa",
            "options": [
              "Akhandamwa",
              "Alwanyi",
              "Eshilolero",
              "Obubwoni"
            ],
            "hint": "ah-khahn-dah-mwah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Peace / Tranquility / Wellbeing\" in Luhya (Luyia)?",
            "correctAnswer": "Obubwoni",
            "options": [
              "Alwanyi",
              "Eshilolero",
              "Akhandamwa",
              "Obubwoni"
            ],
            "hint": "oh-boo-bwoh-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Universal peace / Blessing salutation\" in Luhya (Luyia)?",
            "correctAnswer": "Omulembe",
            "options": [
              "Eshilolero",
              "Akhandamwa",
              "Omulembe",
              "Alwanyi"
            ],
            "hint": "oh-moo-lehm-beh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Alwanyi: Village courtyard / Communal open space, Eshilolero: Sign / Symbol / Miraculous mark, Akhandamwa: Woven traditional basket, Obubwoni: Peace / Tranquility / Wellbeing",
            "pairs": [
              {
                "left": "Alwanyi",
                "right": "Village courtyard / Communal open space"
              },
              {
                "left": "Eshilolero",
                "right": "Sign / Symbol / Miraculous mark"
              },
              {
                "left": "Akhandamwa",
                "right": "Woven traditional basket"
              },
              {
                "left": "Obubwoni",
                "right": "Peace / Tranquility / Wellbeing"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Village courtyard / Communal open space\" in Luhya (Luyia).",
            "correctAnswer": "Alwanyi",
            "options": [
              "Alwanyi",
              "Eshilolero",
              "Akhandamwa",
              "Obubwoni"
            ],
            "hint": "ahl-wah-nyee"
          }
        ]
      },
      {
        "id": "luhya-exp-culture-traditions-2",
        "title": "Cultural & Traditional Life (Olushiwanga) (Part 2)",
        "icon": "Award",
        "description": "Master Luhya (Luyia) cultural & traditional life (olushiwanga) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Cultural & Traditional Life (Olushiwanga), pay special attention to pronunciation and morphological prefixes/suffixes: 'Ikhwe' (Dowry / Marriage customs), 'Amalwa' (Fermented millet beer), 'Eshiribwa' (Clan gateway / Lineage branch), 'Omulukha' (Traditional ritual / Sacred custom).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Ikhwe",
            "source": "Dowry / Marriage customs",
            "pronunciation": "ee-khweh",
            "hint": "(n., cl. 9; also obukhwe) Dowry payment in cattle cementing marriage alliances",
            "example": "Ikhwe — Dowry / Marriage customs ((n., cl. 9; also obukhwe) Dowry payment in cattle cementing marriage alliances)"
          },
          {
            "target": "Amalwa",
            "source": "Fermented millet beer",
            "pronunciation": "ah-mahl-wah",
            "hint": "(n. pl., cl. 6) Traditional communal millet beer enjoyed via reeds during ceremonies",
            "example": "Amalwa — Fermented millet beer ((n. pl., cl. 6) Traditional communal millet beer enjoyed via reeds during ceremonies)"
          },
          {
            "target": "Eshiribwa",
            "source": "Clan gateway / Lineage branch",
            "pronunciation": "eh-shee-ree-bwah",
            "hint": "(n., cl. 7, pl. ebiribwa) Main homestead entrance; branch of a clan descended from one son",
            "example": "Eshiribwa — Clan gateway / Lineage branch ((n., cl. 7, pl. ebiribwa) Main homestead entrance; branch of a clan descended from one son)"
          },
          {
            "target": "Omulukha",
            "source": "Traditional ritual / Sacred custom",
            "pronunciation": "oh-moo-loo-khah",
            "hint": "(n., cl. 3, pl. emilukha) Customary ritual order, sacred communal observance",
            "example": "Omulukha — Traditional ritual / Sacred custom ((n., cl. 3, pl. emilukha) Customary ritual order, sacred communal observance)"
          },
          {
            "target": "Omusambwa",
            "source": "Ancestral spirit",
            "pronunciation": "oh-moo-sahm-bwah",
            "hint": "(n., cl. 3, pl. emisambwa) Guardian ancestral spirit venerated by descendants",
            "example": "Omusambwa — Ancestral spirit ((n., cl. 3, pl. emisambwa) Guardian ancestral spirit venerated by descendants)"
          },
          {
            "target": "Obulaami",
            "source": "Traditional prayer / Blessing ceremony",
            "pronunciation": "oh-boo-lah-ah-mee",
            "hint": "(n., cl. 14, verb: okhulaama) Prayer, sacred blessing invoking God and ancestors",
            "example": "Obulaami — Traditional prayer / Blessing ceremony ((n., cl. 14, verb: okhulaama) Prayer, sacred blessing invoking God and ancestors)"
          },
          {
            "target": "Eshitwoli",
            "source": "Evening campfire council",
            "pronunciation": "eh-shee-twoh-lee",
            "hint": "(n., cl. 7) Campfire outside where men and elders gather to discuss clan affairs",
            "example": "Eshitwoli — Evening campfire council ((n., cl. 7) Campfire outside where men and elders gather to discuss clan affairs)"
          },
          {
            "target": "Omufumu",
            "source": "Traditional healer / Herbal doctor",
            "pronunciation": "oh-moo-foo-moo",
            "hint": "(n., cl. 1, pl. abafumu) Traditional medicine doctor, herbalist, spiritual healer",
            "example": "Omufumu — Traditional healer / Herbal doctor ((n., cl. 1, pl. abafumu) Traditional medicine doctor, herbalist, spiritual healer)"
          },
          {
            "target": "Omusango",
            "source": "Sacred sacrifice / Reconciling offering",
            "pronunciation": "oh-moo-sahn-goh",
            "hint": "(n., cl. 3, pl. emisango) Ceremonial sacrifice offered to reconcile spirits and bless homestead",
            "example": "Omusango — Sacred sacrifice / Reconciling offering ((n., cl. 3, pl. emisango) Ceremonial sacrifice offered to reconcile spirits and bless homestead)"
          },
          {
            "target": "Omusiro",
            "source": "Clan totem animal / Sacred prohibition",
            "pronunciation": "oh-moo-see-roh",
            "hint": "(n., cl. 3, pl. emisiro) Totem animal forbidden to be harmed or eaten by clan members",
            "example": "Omusiro — Clan totem animal / Sacred prohibition ((n., cl. 3, pl. emisiro) Totem animal forbidden to be harmed or eaten by clan members)"
          },
          {
            "target": "Omuruli",
            "source": "Traditional master blacksmith",
            "pronunciation": "oh-moo-roo-lee",
            "hint": "(n., cl. 1, pl. abaruli) Master ironworker forging hoes, knives, and weapons",
            "example": "Omuruli — Traditional master blacksmith ((n., cl. 1, pl. abaruli) Master ironworker forging hoes, knives, and weapons)"
          },
          {
            "target": "Omulonji",
            "source": "Potter / Clay artisan",
            "pronunciation": "oh-moo-lohn-jee",
            "hint": "(n., cl. 1, pl. abalonji) Traditional artisan molding earthenware pots and water jars",
            "example": "Omulonji — Potter / Clay artisan ((n., cl. 1, pl. abalonji) Traditional artisan molding earthenware pots and water jars)"
          }
        ],
        "sentences": [
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          },
          {
            "target": "Omوخasi ateekha obusuma obulayi.",
            "source": "The woman cooks good ugali."
          },
          {
            "target": "Efwe khuloma oluluyia obulayi.",
            "source": "We speak Luyia well."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ikhwe\" mean in English?",
            "correctAnswer": "Dowry / Marriage customs",
            "options": [
              "Fermented millet beer",
              "Clan gateway / Lineage branch",
              "Traditional ritual / Sacred custom",
              "Dowry / Marriage customs"
            ],
            "hint": "(n., cl. 9; also obukhwe) Dowry payment in cattle cementing marriage alliances"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Amalwa\" mean in English?",
            "correctAnswer": "Fermented millet beer",
            "options": [
              "Clan gateway / Lineage branch",
              "Traditional ritual / Sacred custom",
              "Fermented millet beer",
              "Dowry / Marriage customs"
            ],
            "hint": "(n. pl., cl. 6) Traditional communal millet beer enjoyed via reeds during ceremonies"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eshiribwa\" mean in English?",
            "correctAnswer": "Clan gateway / Lineage branch",
            "options": [
              "Traditional ritual / Sacred custom",
              "Clan gateway / Lineage branch",
              "Dowry / Marriage customs",
              "Fermented millet beer"
            ],
            "hint": "(n., cl. 7, pl. ebiribwa) Main homestead entrance; branch of a clan descended from one son"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Clan gateway / Lineage branch\" in Luhya (Luyia)?",
            "correctAnswer": "Eshiribwa",
            "options": [
              "Eshiribwa",
              "Ikhwe",
              "Amalwa",
              "Omulukha"
            ],
            "hint": "eh-shee-ree-bwah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Traditional ritual / Sacred custom\" in Luhya (Luyia)?",
            "correctAnswer": "Omulukha",
            "options": [
              "Ikhwe",
              "Amalwa",
              "Eshiribwa",
              "Omulukha"
            ],
            "hint": "oh-moo-loo-khah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ancestral spirit\" in Luhya (Luyia)?",
            "correctAnswer": "Omusambwa",
            "options": [
              "Amalwa",
              "Eshiribwa",
              "Omusambwa",
              "Ikhwe"
            ],
            "hint": "oh-moo-sahm-bwah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Ikhwe: Dowry / Marriage customs, Amalwa: Fermented millet beer, Eshiribwa: Clan gateway / Lineage branch, Omulukha: Traditional ritual / Sacred custom",
            "pairs": [
              {
                "left": "Ikhwe",
                "right": "Dowry / Marriage customs"
              },
              {
                "left": "Amalwa",
                "right": "Fermented millet beer"
              },
              {
                "left": "Eshiribwa",
                "right": "Clan gateway / Lineage branch"
              },
              {
                "left": "Omulukha",
                "right": "Traditional ritual / Sacred custom"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Dowry / Marriage customs\" in Luhya (Luyia).",
            "correctAnswer": "Ikhwe",
            "options": [
              "Ikhwe",
              "Amalwa",
              "Eshiribwa",
              "Omulukha"
            ],
            "hint": "ee-khweh"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-21-bukusu-greetings",
    "title": "Unit 21: Greetings & Social Etiquette (Lubukusu)",
    "description": "Comprehensive Luhya (Luyia) curriculum for Greetings & Social Etiquette (Lubukusu), vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Handshake",
    "skills": [
      {
        "id": "luhya-exp-bukusu-greetings",
        "title": "Greetings & Social Etiquette (Lubukusu)",
        "icon": "Handshake",
        "description": "Master Luhya (Luyia) greetings & social etiquette (lubukusu) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Greetings & Social Etiquette (Lubukusu), pay special attention to pronunciation and morphological prefixes/suffixes: 'Bwaasyeele!' (Good morning!), 'Ke.akoloba!' (Good evening!), 'Karyé?' (How are things? / How are you?), 'Oryo!' (Thank you).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Bwaasyeele!",
            "source": "Good morning!",
            "pronunciation": "bwah-syeh-leh",
            "hint": "[Bukusu] Morning greeting at dawn (around 5 a.m.) recorded in Marlo et al. (2008)",
            "example": "Bwaasyeele! — Good morning! ([Bukusu] Morning greeting at dawn (around 5 a.m.) recorded in Marlo et al. (2008))"
          },
          {
            "target": "Ke.akoloba!",
            "source": "Good evening!",
            "pronunciation": "keh-ah-koh-loh-bah",
            "hint": "[Bukusu] Evening salutation as dusk approaches",
            "example": "Ke.akoloba! — Good evening! ([Bukusu] Evening salutation as dusk approaches)"
          },
          {
            "target": "Karyé?",
            "source": "How are things? / How are you?",
            "pronunciation": "kah-ryeh",
            "hint": "[Bukusu] Conversational greeting inquiry: 'How is it?'",
            "example": "Karyé? — How are things? / How are you? ([Bukusu] Conversational greeting inquiry: 'How is it?')"
          },
          {
            "target": "Oryo!",
            "source": "Thank you",
            "pronunciation": "oh-ryoh",
            "hint": "[Bukusu] Universal expression of thanks and gratitude",
            "example": "Oryo! — Thank you ([Bukusu] Universal expression of thanks and gratitude)"
          },
          {
            "target": "Oryo muno!",
            "source": "Thank you very much",
            "pronunciation": "oh-ryoh moo-noh",
            "hint": "[Bukusu] Deep heartfelt appreciation",
            "example": "Oryo muno! — Thank you very much ([Bukusu] Deep heartfelt appreciation)"
          },
          {
            "target": "Ákhuliinde!",
            "source": "Goodbye / May you be protected",
            "pronunciation": "ah-khoo-leen-deh",
            "hint": "[Bukusu] Protective parting blessing: 'May He keep you'",
            "example": "Ákhuliinde! — Goodbye / May you be protected ([Bukusu] Protective parting blessing: 'May He keep you')"
          },
          {
            "target": "Ókóne.o!",
            "source": "Sleep well / Stay safely",
            "pronunciation": "oh-koh-neh-oh",
            "hint": "[Bukusu] Parting blessing used day or night ('Sleep/rest well there')",
            "example": "Ókóne.o! — Sleep well / Stay safely ([Bukusu] Parting blessing used day or night ('Sleep/rest well there'))"
          },
          {
            "target": "Kumuleembe",
            "source": "Peace / Tranquility",
            "pronunciation": "koo-moo-lehm-beh",
            "hint": "[Bukusu] State of peace, blessing, and communal concord",
            "example": "Kumuleembe — Peace / Tranquility ([Bukusu] State of peace, blessing, and communal concord)"
          },
          {
            "target": "Luukoosi",
            "source": "Affection / Goodwill / Respect",
            "pronunciation": "loo-oh-koh-see",
            "hint": "[Bukusu] Dignity, grace, fellowship, and mutual goodwill",
            "example": "Luukoosi — Affection / Goodwill / Respect ([Bukusu] Dignity, grace, fellowship, and mutual goodwill)"
          },
          {
            "target": "Baboola si?",
            "source": "What is the news?",
            "pronunciation": "bah-boh-lah see",
            "hint": "[Bukusu] Lit. 'What are they saying?' — news inquiry",
            "example": "Baboola si? — What is the news? ([Bukusu] Lit. 'What are they saying?' — news inquiry)"
          },
          {
            "target": "Ábweene",
            "source": "Truly / Exactly",
            "pronunciation": "ah-bweh-neh",
            "hint": "[Bukusu] Plainly, correctly, exactly, truly",
            "example": "Ábweene — Truly / Exactly ([Bukusu] Plainly, correctly, exactly, truly)"
          },
          {
            "target": "Á búlafu",
            "source": "In broad daylight",
            "pronunciation": "ah boo-lah-foo",
            "hint": "[Bukusu] In the open / in plain sight",
            "example": "Á búlafu — In broad daylight ([Bukusu] In the open / in plain sight)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Bwaasyeele!\" mean in English?",
            "correctAnswer": "Good morning!",
            "options": [
              "Good evening!",
              "How are things? / How are you?",
              "Thank you",
              "Good morning!"
            ],
            "hint": "[Bukusu] Morning greeting at dawn (around 5 a.m.) recorded in Marlo et al. (2008)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ke.akoloba!\" mean in English?",
            "correctAnswer": "Good evening!",
            "options": [
              "How are things? / How are you?",
              "Thank you",
              "Good evening!",
              "Good morning!"
            ],
            "hint": "[Bukusu] Evening salutation as dusk approaches"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Karyé?\" mean in English?",
            "correctAnswer": "How are things? / How are you?",
            "options": [
              "Thank you",
              "How are things? / How are you?",
              "Good morning!",
              "Good evening!"
            ],
            "hint": "[Bukusu] Conversational greeting inquiry: 'How is it?'"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"How are things? / How are you?\" in Luhya (Luyia)?",
            "correctAnswer": "Karyé?",
            "options": [
              "Karyé?",
              "Bwaasyeele!",
              "Ke.akoloba!",
              "Oryo!"
            ],
            "hint": "kah-ryeh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Thank you\" in Luhya (Luyia)?",
            "correctAnswer": "Oryo!",
            "options": [
              "Bwaasyeele!",
              "Ke.akoloba!",
              "Karyé?",
              "Oryo!"
            ],
            "hint": "oh-ryoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Thank you very much\" in Luhya (Luyia)?",
            "correctAnswer": "Oryo muno!",
            "options": [
              "Ke.akoloba!",
              "Karyé?",
              "Oryo muno!",
              "Bwaasyeele!"
            ],
            "hint": "oh-ryoh moo-noh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Bwaasyeele!: Good morning!, Ke.akoloba!: Good evening!, Karyé?: How are things? / How are you?, Oryo!: Thank you",
            "pairs": [
              {
                "left": "Bwaasyeele!",
                "right": "Good morning!"
              },
              {
                "left": "Ke.akoloba!",
                "right": "Good evening!"
              },
              {
                "left": "Karyé?",
                "right": "How are things? / How are you?"
              },
              {
                "left": "Oryo!",
                "right": "Thank you"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Good morning!\" in Luhya (Luyia).",
            "correctAnswer": "Bwaasyeele!",
            "options": [
              "Bwaasyeele!",
              "Ke.akoloba!",
              "Karyé?",
              "Oryo!"
            ],
            "hint": "bwah-syeh-leh"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-22-bukusu-people-kinship",
    "title": "Unit 22: People, Kinship & Community (Lubukusu)",
    "description": "Comprehensive Luhya (Luyia) curriculum for People, Kinship & Community (Lubukusu), vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Users",
    "skills": [
      {
        "id": "luhya-exp-bukusu-people-kinship",
        "title": "People, Kinship & Community (Lubukusu) (Part 1)",
        "icon": "Users",
        "description": "Master Luhya (Luyia) people, kinship & community (lubukusu) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering People, Kinship & Community (Lubukusu), pay special attention to pronunciation and morphological prefixes/suffixes: 'Báábukusu' (Bukusu people), 'Babaandu' (People / Humans), 'Báákhulu' (Elders / Seniors), 'Bábaana' (Children).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Báábukusu",
            "source": "Bukusu people",
            "pronunciation": "bah-ah-boo-koo-soo",
            "hint": "[Bukusu] (n., cl. 2, sing. Omubukusu) The Bukusu people of Mount Elgon and Bungoma",
            "example": "Báábukusu — Bukusu people ([Bukusu] (n., cl. 2, sing. Omubukusu) The Bukusu people of Mount Elgon and Bungoma)"
          },
          {
            "target": "Babaandu",
            "source": "People / Humans",
            "pronunciation": "bah-bah-ahn-doo",
            "hint": "[Bukusu] (n., cl. 2, sing. Omwaandu) Human beings / people",
            "example": "Babaandu — People / Humans ([Bukusu] (n., cl. 2, sing. Omwaandu) Human beings / people)"
          },
          {
            "target": "Báákhulu",
            "source": "Elders / Seniors",
            "pronunciation": "bah-ah-khoo-loo",
            "hint": "[Bukusu] (n., cl. 2, sing. Omukhulu) Respected community leaders and elders",
            "example": "Báákhulu — Elders / Seniors ([Bukusu] (n., cl. 2, sing. Omukhulu) Respected community leaders and elders)"
          },
          {
            "target": "Bábaana",
            "source": "Children",
            "pronunciation": "bah-bah-ah-nah",
            "hint": "[Bukusu] (n., cl. 2, sing. Omwaana) Children / young ones",
            "example": "Bábaana — Children ([Bukusu] (n., cl. 2, sing. Omwaana) Children / young ones)"
          },
          {
            "target": "Bákúúka",
            "source": "Grandfathers / Forefathers",
            "pronunciation": "bah-koo-oo-kah",
            "hint": "[Bukusu] (n., cl. 2, sing. Kúúka) Ancestors and grandfathers",
            "example": "Bákúúka — Grandfathers / Forefathers ([Bukusu] (n., cl. 2, sing. Kúúka) Ancestors and grandfathers)"
          },
          {
            "target": "Bákuukhu",
            "source": "Grandmothers",
            "pronunciation": "bah-koo-oo-khoo",
            "hint": "[Bukusu] (n., cl. 2, sing. Kuukhu) Maternal or paternal grandmothers",
            "example": "Bákuukhu — Grandmothers ([Bukusu] (n., cl. 2, sing. Kuukhu) Maternal or paternal grandmothers)"
          },
          {
            "target": "Bámaayi",
            "source": "Mothers",
            "pronunciation": "bah-mah-ah-yee",
            "hint": "[Bukusu] (n., cl. 2, sing. Maayi) Mothers and maternal aunts",
            "example": "Bámaayi — Mothers ([Bukusu] (n., cl. 2, sing. Maayi) Mothers and maternal aunts)"
          },
          {
            "target": "Bápaapa",
            "source": "Fathers",
            "pronunciation": "bah-pah-ah-pah",
            "hint": "[Bukusu] (n., cl. 2, sing. Paapa) Fathers and paternal uncles",
            "example": "Bápaapa — Fathers ([Bukusu] (n., cl. 2, sing. Paapa) Fathers and paternal uncles)"
          },
          {
            "target": "Báakhasi",
            "source": "Women / Wives",
            "pronunciation": "bah-ah-khah-see",
            "hint": "[Bukusu] (n., cl. 2, sing. Omukhaasi) Women / wives",
            "example": "Báakhasi — Women / Wives ([Bukusu] (n., cl. 2, sing. Omukhaasi) Women / wives)"
          },
          {
            "target": "Báseecha",
            "source": "Husbands",
            "pronunciation": "bah-seh-eh-chah",
            "hint": "[Bukusu] (n., cl. 2, sing. Omuseecha) Married men / husbands",
            "example": "Báseecha — Husbands ([Bukusu] (n., cl. 2, sing. Omuseecha) Married men / husbands)"
          },
          {
            "target": "Báwaanda",
            "source": "Brothers",
            "pronunciation": "bah-wah-ahn-dah",
            "hint": "[Bukusu] (n., cl. 2) Male siblings or cousins",
            "example": "Báwaanda — Brothers ([Bukusu] (n., cl. 2) Male siblings or cousins)"
          },
          {
            "target": "Báyaaya",
            "source": "Sisters",
            "pronunciation": "bah-yah-ah-yah",
            "hint": "[Bukusu] (n., cl. 2) Female siblings or cousins",
            "example": "Báyaaya — Sisters ([Bukusu] (n., cl. 2) Female siblings or cousins)"
          },
          {
            "target": "Bééngo",
            "source": "Family / Household",
            "pronunciation": "beh-eh-ngoh",
            "hint": "[Bukusu] Those of the home / household members",
            "example": "Bééngo — Family / Household ([Bukusu] Those of the home / household members)"
          },
          {
            "target": "Báafulu / Béémwiikóómbe",
            "source": "Initiates (Circumcision cohort)",
            "pronunciation": "bah-ah-foo-loo",
            "hint": "[Bukusu] Youth undergoing the sacred Bukusu biennial rite of passage",
            "example": "Báafulu / Béémwiikóómbe — Initiates (Circumcision cohort) ([Bukusu] Youth undergoing the sacred Bukusu biennial rite of passage)"
          },
          {
            "target": "Omukaambisi",
            "source": "Peacemaker / Mediator",
            "pronunciation": "oh-moo-kah-ahm-bee-see",
            "hint": "[Bukusu] (n., cl. 1, pl. baakaambisi) Go-between, reconciler, and comforter",
            "example": "Omukaambisi — Peacemaker / Mediator ([Bukusu] (n., cl. 1, pl. baakaambisi) Go-between, reconciler, and comforter)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Báábukusu\" mean in English?",
            "correctAnswer": "Bukusu people",
            "options": [
              "People / Humans",
              "Elders / Seniors",
              "Children",
              "Bukusu people"
            ],
            "hint": "[Bukusu] (n., cl. 2, sing. Omubukusu) The Bukusu people of Mount Elgon and Bungoma"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Babaandu\" mean in English?",
            "correctAnswer": "People / Humans",
            "options": [
              "Elders / Seniors",
              "Children",
              "People / Humans",
              "Bukusu people"
            ],
            "hint": "[Bukusu] (n., cl. 2, sing. Omwaandu) Human beings / people"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Báákhulu\" mean in English?",
            "correctAnswer": "Elders / Seniors",
            "options": [
              "Children",
              "Elders / Seniors",
              "Bukusu people",
              "People / Humans"
            ],
            "hint": "[Bukusu] (n., cl. 2, sing. Omukhulu) Respected community leaders and elders"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Elders / Seniors\" in Luhya (Luyia)?",
            "correctAnswer": "Báákhulu",
            "options": [
              "Báákhulu",
              "Báábukusu",
              "Babaandu",
              "Bábaana"
            ],
            "hint": "bah-ah-khoo-loo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Children\" in Luhya (Luyia)?",
            "correctAnswer": "Bábaana",
            "options": [
              "Báábukusu",
              "Babaandu",
              "Báákhulu",
              "Bábaana"
            ],
            "hint": "bah-bah-ah-nah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Grandfathers / Forefathers\" in Luhya (Luyia)?",
            "correctAnswer": "Bákúúka",
            "options": [
              "Babaandu",
              "Báákhulu",
              "Bákúúka",
              "Báábukusu"
            ],
            "hint": "bah-koo-oo-kah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Báábukusu: Bukusu people, Babaandu: People / Humans, Báákhulu: Elders / Seniors, Bábaana: Children",
            "pairs": [
              {
                "left": "Báábukusu",
                "right": "Bukusu people"
              },
              {
                "left": "Babaandu",
                "right": "People / Humans"
              },
              {
                "left": "Báákhulu",
                "right": "Elders / Seniors"
              },
              {
                "left": "Bábaana",
                "right": "Children"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Bukusu people\" in Luhya (Luyia).",
            "correctAnswer": "Báábukusu",
            "options": [
              "Báábukusu",
              "Babaandu",
              "Báákhulu",
              "Bábaana"
            ],
            "hint": "bah-ah-boo-koo-soo"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-23-bukusu-pastoral-nature",
    "title": "Unit 23: Livestock, Food & Nature (Lubukusu)",
    "description": "Comprehensive Luhya (Luyia) curriculum for Livestock, Food & Nature (Lubukusu), vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Compass",
    "skills": [
      {
        "id": "luhya-exp-bukusu-pastoral-nature",
        "title": "Livestock, Food & Nature (Lubukusu) (Part 1)",
        "icon": "Compass",
        "description": "Master Luhya (Luyia) livestock, food & nature (lubukusu) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Livestock, Food & Nature (Lubukusu), pay special attention to pronunciation and morphological prefixes/suffixes: 'Eekhaafu' (Cow / Bull), 'Chiikhaafu' (Cattle / Cows), 'Eembusi' (Goat), 'Liikheese' (Sheep).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Eekhaafu",
            "source": "Cow / Bull",
            "pronunciation": "eh-eh-khah-ah-foo",
            "hint": "[Bukusu] (n., cl. 9, pl. chiikhaafu) Bovine animal; cattle herd",
            "example": "Eekhaafu — Cow / Bull ([Bukusu] (n., cl. 9, pl. chiikhaafu) Bovine animal; cattle herd)"
          },
          {
            "target": "Chiikhaafu",
            "source": "Cattle / Cows",
            "pronunciation": "chee-ee-khah-ah-foo",
            "hint": "[Bukusu] (n., cl. 10) Livestock herd",
            "example": "Chiikhaafu — Cattle / Cows ([Bukusu] (n., cl. 10) Livestock herd)"
          },
          {
            "target": "Eembusi",
            "source": "Goat",
            "pronunciation": "ehm-boo-see",
            "hint": "[Bukusu] (n., cl. 9, pl. chiimbusi) Female or male goat",
            "example": "Eembusi — Goat ([Bukusu] (n., cl. 9, pl. chiimbusi) Female or male goat)"
          },
          {
            "target": "Liikheese",
            "source": "Sheep",
            "pronunciation": "lee-ee-kheh-eh-seh",
            "hint": "[Bukusu] (n., cl. 5, pl. kamakheese) Sheep / ewe",
            "example": "Liikheese — Sheep ([Bukusu] (n., cl. 5, pl. kamakheese) Sheep / ewe)"
          },
          {
            "target": "Kameechi",
            "source": "Water",
            "pronunciation": "kah-meh-eh-chee",
            "hint": "[Bukusu] (n., cl. 6) Water for domestic use or livestock",
            "example": "Kameechi — Water ([Bukusu] (n., cl. 6) Water for domestic use or livestock)"
          },
          {
            "target": "Kamabeele",
            "source": "Milk",
            "pronunciation": "kah-mah-beh-eh-leh",
            "hint": "[Bukusu] (n., cl. 6) Fresh cow milk",
            "example": "Kamabeele — Milk ([Bukusu] (n., cl. 6) Fresh cow milk)"
          },
          {
            "target": "Liitaala",
            "source": "Homestead / Kraal",
            "pronunciation": "lee-ee-tah-ah-lah",
            "hint": "[Bukusu] (n., cl. 5) Village, family kraal enclosure, and cattle compound",
            "example": "Liitaala — Homestead / Kraal ([Bukusu] (n., cl. 5) Village, family kraal enclosure, and cattle compound)"
          },
          {
            "target": "Eenju",
            "source": "House / Dwelling",
            "pronunciation": "eh-eh-n-joo",
            "hint": "[Bukusu] (n., cl. 9, pl. chiinju) Traditional family house",
            "example": "Eenju — House / Dwelling ([Bukusu] (n., cl. 9, pl. chiinju) Traditional family house)"
          },
          {
            "target": "Áluya / Áanje",
            "source": "Courtyard / Village green",
            "pronunciation": "ah-loo-yah / ah-ahn-jeh",
            "hint": "[Bukusu] Central open meeting space of the homestead",
            "example": "Áluya / Áanje — Courtyard / Village green ([Bukusu] Central open meeting space of the homestead)"
          },
          {
            "target": "Kumuuka",
            "source": "Sun / Daylight",
            "pronunciation": "koo-moo-oo-kah",
            "hint": "[Bukusu] (n., cl. 3) Sun, daytime brightness, sunshine",
            "example": "Kumuuka — Sun / Daylight ([Bukusu] (n., cl. 3) Sun, daytime brightness, sunshine)"
          },
          {
            "target": "Kumweesi",
            "source": "Moon / Month",
            "pronunciation": "koo-mweh-eh-see",
            "hint": "[Bukusu] (n., cl. 3) Moon and calendar month",
            "example": "Kumweesi — Moon / Month ([Bukusu] (n., cl. 3) Moon and calendar month)"
          },
          {
            "target": "Kumuliro",
            "source": "Fire",
            "pronunciation": "koo-moo-lee-roh",
            "hint": "[Bukusu] (n., cl. 3) Hearth fire / flames",
            "example": "Kumuliro — Fire ([Bukusu] (n., cl. 3) Hearth fire / flames)"
          },
          {
            "target": "Áasi / Siloba",
            "source": "Earth / Ground",
            "pronunciation": "ah-ah-see / see-loh-bah",
            "hint": "[Bukusu] Soil, earth, ground beneath",
            "example": "Áasi / Siloba — Earth / Ground ([Bukusu] Soil, earth, ground beneath)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eekhaafu\" mean in English?",
            "correctAnswer": "Cow / Bull",
            "options": [
              "Cattle / Cows",
              "Goat",
              "Sheep",
              "Cow / Bull"
            ],
            "hint": "[Bukusu] (n., cl. 9, pl. chiikhaafu) Bovine animal; cattle herd"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Chiikhaafu\" mean in English?",
            "correctAnswer": "Cattle / Cows",
            "options": [
              "Goat",
              "Sheep",
              "Cattle / Cows",
              "Cow / Bull"
            ],
            "hint": "[Bukusu] (n., cl. 10) Livestock herd"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eembusi\" mean in English?",
            "correctAnswer": "Goat",
            "options": [
              "Sheep",
              "Goat",
              "Cow / Bull",
              "Cattle / Cows"
            ],
            "hint": "[Bukusu] (n., cl. 9, pl. chiimbusi) Female or male goat"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Goat\" in Luhya (Luyia)?",
            "correctAnswer": "Eembusi",
            "options": [
              "Eembusi",
              "Eekhaafu",
              "Chiikhaafu",
              "Liikheese"
            ],
            "hint": "ehm-boo-see"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sheep\" in Luhya (Luyia)?",
            "correctAnswer": "Liikheese",
            "options": [
              "Eekhaafu",
              "Chiikhaafu",
              "Eembusi",
              "Liikheese"
            ],
            "hint": "lee-ee-kheh-eh-seh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Water\" in Luhya (Luyia)?",
            "correctAnswer": "Kameechi",
            "options": [
              "Chiikhaafu",
              "Eembusi",
              "Kameechi",
              "Eekhaafu"
            ],
            "hint": "kah-meh-eh-chee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Eekhaafu: Cow / Bull, Chiikhaafu: Cattle / Cows, Eembusi: Goat, Liikheese: Sheep",
            "pairs": [
              {
                "left": "Eekhaafu",
                "right": "Cow / Bull"
              },
              {
                "left": "Chiikhaafu",
                "right": "Cattle / Cows"
              },
              {
                "left": "Eembusi",
                "right": "Goat"
              },
              {
                "left": "Liikheese",
                "right": "Sheep"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Cow / Bull\" in Luhya (Luyia).",
            "correctAnswer": "Eekhaafu",
            "options": [
              "Eekhaafu",
              "Chiikhaafu",
              "Eembusi",
              "Liikheese"
            ],
            "hint": "eh-eh-khah-ah-foo"
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-24-bukusu-actions",
    "title": "Unit 24: Core Verbs & Actions (Lubukusu)",
    "description": "Comprehensive Luhya (Luyia) curriculum for Core Verbs & Actions (Lubukusu), vetted from L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
    "icon": "Zap",
    "skills": [
      {
        "id": "luhya-exp-bukusu-actions",
        "title": "Core Verbs & Actions (Lubukusu)",
        "icon": "Zap",
        "description": "Master Luhya (Luyia) core verbs & actions (lubukusu) vocabulary and expressions from verified historical sources.",
        "tips": "In this Luhya (Luyia) skill covering Core Verbs & Actions (Lubukusu), pay special attention to pronunciation and morphological prefixes/suffixes: 'Khúúlya' (To eat), 'Khúúnywa' (To drink), 'Khuukeenda' (To walk / travel), 'Khuukona' (To sleep / rest).",
        "culturalNote": "Source attribution: L.L. Appleby 'A First Luyia Grammar', Alfred Anangwe & Michael R. Marlo (2008) 'Wanga-English Dictionary', and Michael Marlo, Adrian Sifuna & Aggrey Wasike (2008) 'Bukusu-English Dictionary'.",
        "words": [
          {
            "target": "Khúúlya",
            "source": "To eat",
            "pronunciation": "khoo-oo-lyah",
            "hint": "[Bukusu] (v.) To consume food",
            "example": "Khúúlya — To eat ([Bukusu] (v.) To consume food)"
          },
          {
            "target": "Khúúnywa",
            "source": "To drink",
            "pronunciation": "khoo-oo-nywah",
            "hint": "[Bukusu] (v.) To drink water, milk, or beverage",
            "example": "Khúúnywa — To drink ([Bukusu] (v.) To drink water, milk, or beverage)"
          },
          {
            "target": "Khuukeenda",
            "source": "To walk / travel",
            "pronunciation": "khoo-oo-kehn-dah",
            "hint": "[Bukusu] (v.) To journey, walk, or conduct oneself morally",
            "example": "Khuukeenda — To walk / travel ([Bukusu] (v.) To journey, walk, or conduct oneself morally)"
          },
          {
            "target": "Khuukona",
            "source": "To sleep / rest",
            "pronunciation": "khoo-oo-koh-nah",
            "hint": "[Bukusu] (v.) To lie down, sleep, or rest",
            "example": "Khuukona — To sleep / rest ([Bukusu] (v.) To lie down, sleep, or rest)"
          },
          {
            "target": "Khuulola",
            "source": "To see / observe",
            "pronunciation": "khoo-oo-loh-lah",
            "hint": "[Bukusu] (v.) To behold, look at, or witness",
            "example": "Khuulola — To see / observe ([Bukusu] (v.) To behold, look at, or witness)"
          },
          {
            "target": "Khuuulila",
            "source": "To hear / feel",
            "pronunciation": "khoo-oo-lee-lah",
            "hint": "[Bukusu] (v.) To perceive by ear or sense",
            "example": "Khuuulila — To hear / feel ([Bukusu] (v.) To perceive by ear or sense)"
          },
          {
            "target": "Khukhwiicha",
            "source": "To come",
            "pronunciation": "khoo-khwee-ee-chah",
            "hint": "[Bukusu] (v.) To arrive or approach",
            "example": "Khukhwiicha — To come ([Bukusu] (v.) To arrive or approach)"
          },
          {
            "target": "Khúúrura",
            "source": "To go out / emerge",
            "pronunciation": "khoo-oo-roo-rah",
            "hint": "[Bukusu] (v.) To depart, step outside, or appear (e.g. sun)",
            "example": "Khúúrura — To go out / emerge ([Bukusu] (v.) To depart, step outside, or appear (e.g. sun))"
          },
          {
            "target": "Khuusiima",
            "source": "To appreciate / praise",
            "pronunciation": "khoo-oo-see-ee-mah",
            "hint": "[Bukusu] (v.) To thank, cheer, or express happiness",
            "example": "Khuusiima — To appreciate / praise ([Bukusu] (v.) To thank, cheer, or express happiness)"
          },
          {
            "target": "Khuuombakha",
            "source": "To build / construct",
            "pronunciation": "khoo-oo-ohm-bah-khah",
            "hint": "[Bukusu] (v.) To erect a house or structure",
            "example": "Khuuombakha — To build / construct ([Bukusu] (v.) To erect a house or structure)"
          },
          {
            "target": "Khuuboola",
            "source": "To speak / declare",
            "pronunciation": "khoo-oo-boh-oh-lah",
            "hint": "[Bukusu] (v.) To utter words or state an opinion",
            "example": "Khuuboola — To speak / declare ([Bukusu] (v.) To utter words or state an opinion)"
          },
          {
            "target": "Khuulima",
            "source": "To cultivate / farm",
            "pronunciation": "khoo-oo-lee-mah",
            "hint": "[Bukusu] (v.) To till soil and grow crops",
            "example": "Khuulima — To cultivate / farm ([Bukusu] (v.) To till soil and grow crops)"
          }
        ],
        "sentences": [
          {
            "target": "Omundu omulayi ahenza abandu.",
            "source": "A good person loves people."
          },
          {
            "target": "Abana bosi batsia esukulu.",
            "source": "All the children go to school."
          },
          {
            "target": "Ing'ombe yanje ili mu bwayi.",
            "source": "My cow is in the grazing field."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Khúúlya\" mean in English?",
            "correctAnswer": "To eat",
            "options": [
              "To drink",
              "To walk / travel",
              "To sleep / rest",
              "To eat"
            ],
            "hint": "[Bukusu] (v.) To consume food"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Khúúnywa\" mean in English?",
            "correctAnswer": "To drink",
            "options": [
              "To walk / travel",
              "To sleep / rest",
              "To drink",
              "To eat"
            ],
            "hint": "[Bukusu] (v.) To drink water, milk, or beverage"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Khuukeenda\" mean in English?",
            "correctAnswer": "To walk / travel",
            "options": [
              "To sleep / rest",
              "To walk / travel",
              "To eat",
              "To drink"
            ],
            "hint": "[Bukusu] (v.) To journey, walk, or conduct oneself morally"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To walk / travel\" in Luhya (Luyia)?",
            "correctAnswer": "Khuukeenda",
            "options": [
              "Khuukeenda",
              "Khúúlya",
              "Khúúnywa",
              "Khuukona"
            ],
            "hint": "khoo-oo-kehn-dah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To sleep / rest\" in Luhya (Luyia)?",
            "correctAnswer": "Khuukona",
            "options": [
              "Khúúlya",
              "Khúúnywa",
              "Khuukeenda",
              "Khuukona"
            ],
            "hint": "khoo-oo-koh-nah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To see / observe\" in Luhya (Luyia)?",
            "correctAnswer": "Khuulola",
            "options": [
              "Khúúnywa",
              "Khuukeenda",
              "Khuulola",
              "Khúúlya"
            ],
            "hint": "khoo-oo-loh-lah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Luhya (Luyia) terms with their English meanings:",
            "correctAnswer": "Khúúlya: To eat, Khúúnywa: To drink, Khuukeenda: To walk / travel, Khuukona: To sleep / rest",
            "pairs": [
              {
                "left": "Khúúlya",
                "right": "To eat"
              },
              {
                "left": "Khúúnywa",
                "right": "To drink"
              },
              {
                "left": "Khuukeenda",
                "right": "To walk / travel"
              },
              {
                "left": "Khuukona",
                "right": "To sleep / rest"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To eat\" in Luhya (Luyia).",
            "correctAnswer": "Khúúlya",
            "options": [
              "Khúúlya",
              "Khúúnywa",
              "Khuukeenda",
              "Khuukona"
            ],
            "hint": "khoo-oo-lyah"
          }
        ]
      }
    ]
  }
];
