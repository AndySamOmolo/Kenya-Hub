// ============================================================
// Maasai (Maa) Language Course Configuration & Units
// Based on "Maasai Dictionary" by Charles Richmond (circa 1940,
// Humboldt State University Press edition) and classical Maa oral records.
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const MAASAI_CONFIG: LanguageConfig = {
  id: 'maasai',
  name: 'Maasai',
  nativeName: 'Maa',
  family: 'Nilotic',
  counties: ['Narok', 'Kajiado', 'Samburu', 'Laikipia'],
  speakers: '1.5M',
  speechLocale: 'sw-KE',
  description: 'An Eastern Nilotic language spoken by the pastoralist Maasai and Samburu communities across the Great Rift Valley, celebrated for its age-set system, beadwork, oral poetry, and deep reverence for cattle and Enkai.',
  color: '#DC2626',
};

export const MAASAI_UNITS: CourseUnit[] = [
  {
    id: 'maasai-unit-1',
    title: 'Unit 1: Foundations, Greetings & Numbers',
    description: 'Learn gendered greetings, courtesies, peace invocations, and cardinal numbers in Maa.',
    icon: '👋',
    skills: [
      {
        id: 'maasai-greetings',
        title: 'Greetings & Courtesies',
        icon: 'Handshake',
        description: 'Master everyday greetings, responses, and expressions of gratitude in Maa.',
        tips: "In Maa, greetings differ by gender and age: To greet a man or boy, say 'Sopa' (replied with 'Epa' or 'Hepa'). To greet a woman or girl, say 'Takwenya' (replied with 'Iko'). For multiple people, say 'Enda sopa' or 'Entakwenya'. To express gratitude, say 'Ashe' or 'Ashe oleng' ('Thank you very much').",
        culturalNote: "Maasai greetings are rooted in 'E-serian' (peace) and 'O-sotua' (covenant/kinship). Elders touch children gently on the head when greeting them, bestowing goodwill.",
        words: [
          { target: 'Sopa', source: 'Hello (to a male)', pronunciation: 'soh-pah', hint: 'Greeting spoken to a man or boy' },
          { target: 'Epa', source: 'Hello (response to Sopa)', pronunciation: 'eh-pah', hint: 'Reply given to Sopa' },
          { target: 'Takwenya', source: 'Hello (to a female)', pronunciation: 'tahk-wehn-yah', hint: 'Greeting spoken to a woman or girl' },
          { target: 'Iko', source: 'Hello (response to Takwenya)', pronunciation: 'ee-koh', hint: 'Reply given to Takwenya' },
          { target: 'Ashe', source: 'Thank you', pronunciation: 'ah-sheh', hint: 'Word of gratitude' },
          { target: 'Ashe oleng', source: 'Thank you very much', pronunciation: 'ah-sheh oh-lehng', hint: 'Heartfelt gratitude' },
          { target: 'Sidai', source: 'Good / Beautiful', pronunciation: 'see-dah-ee', hint: 'Approbation and beauty' },
          { target: 'Supat', source: 'Fine / Well', pronunciation: 'soo-paht', hint: 'Good or upright' },
          { target: 'E-serian', source: 'Peace / Calm', pronunciation: 'eh-seh-ree-ahn', hint: 'State of tranquility' },
          { target: 'O-sotua', source: 'Peace / Covenant', pronunciation: 'oh-soh-too-ah', hint: 'Sacred bond of kinship and peace' },
          { target: 'Ee', source: 'Yes', pronunciation: 'eh-eh', hint: 'Affirmation' },
          { target: 'Meitu', source: 'No / Not yet', pronunciation: 'may-too', hint: 'Negative or not yet' }
        ],
        sentences: [
          { target: 'Sopa, ol-chore lai?', source: 'Hello, my friend?' },
          { target: 'Epa, erai sidai.', source: 'Hello, it is good.' },
          { target: 'Ashe oleng te sotua.', source: 'Thank you very much in peace.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you greet a man or boy in Maa?',
            correctAnswer: 'Sopa',
            options: ['Sopa', 'Takwenya', 'Iko', 'Meitu'],
            hint: 'Elders and warriors answer this with "Epa"'
          },
          {
            type: 'multiple_choice',
            prompt: 'What is the correct response when greeted with "Takwenya"?',
            correctAnswer: 'Iko',
            options: ['Iko', 'Epa', 'Ashe', 'Meitu'],
            hint: 'The traditional feminine greeting reply'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Maa greeting terms with their meanings:',
            correctAnswer: 'Sopa: Hello (to male), Takwenya: Hello (to female), Ashe oleng: Thank you very much, E-serian: Peace',
            pairs: [
              { left: 'Sopa', right: 'Hello (to male)' },
              { left: 'Takwenya', right: 'Hello (to female)' },
              { left: 'Ashe oleng', right: 'Thank you very much' },
              { left: 'E-serian', right: 'Peace' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Complete the sentence: "Ashe _____." (Thank you very much.)',
            correctAnswer: 'oleng',
            options: ['oleng', 'sopa', 'iko', 'supat'],
            hint: 'Maa word meaning "very much"'
          }
        ]
      },
      {
        id: 'maasai-numbers',
        title: 'Numbers & Counting',
        icon: 'Hash',
        description: 'Learn the cardinal numerals from one to one hundred in Maa.',
        tips: "Maa numbers feature gender harmony: 1 is 'Nabo' (feminine) or 'Obo' (masculine), 2 is 'Aare', 3 is 'Okuni' (masc) or 'Uni' (fem), 4 is 'Ongwan', and 5 is 'Imiet'. 10 is 'Tomon', 20 is 'Tigitam', 30 is 'Osom', and 100 is 'Iip'.",
        culturalNote: "When counting cattle or livestock, pastoralists often tally in silent gestures or couplets to prevent ostentation and preserve the prosperity of the herd.",
        words: [
          { target: 'Nabo', source: 'One', pronunciation: 'nah-boh', hint: 'Numeral 1 (feminine)' },
          { target: 'Aare', source: 'Two', pronunciation: 'ah-reh', hint: 'Numeral 2' },
          { target: 'Okuni', source: 'Three', pronunciation: 'oh-koo-nee', hint: 'Numeral 3' },
          { target: 'Ongwan', source: 'Four', pronunciation: 'ohng-wahn', hint: 'Numeral 4' },
          { target: 'Imiet', source: 'Five', pronunciation: 'ee-myeh-t', hint: 'Numeral 5' },
          { target: 'Ile', source: 'Six', pronunciation: 'ee-leh', hint: 'Numeral 6' },
          { target: 'Naapishana', source: 'Seven', pronunciation: 'nah-pee-shah-nah', hint: 'Numeral 7' },
          { target: 'Isiet', source: 'Eight', pronunciation: 'ee-syeh-t', hint: 'Numeral 8' },
          { target: 'Naudo', source: 'Nine', pronunciation: 'nah-oo-doh', hint: 'Numeral 9' },
          { target: 'Tomon', source: 'Ten', pronunciation: 'toh-mohn', hint: 'Numeral 10' },
          { target: 'Tigitam', source: 'Twenty', pronunciation: 'tee-gee-tahm', hint: 'Numeral 20' },
          { target: 'Iip', source: 'One hundred', pronunciation: 'ee-eep', hint: 'Numeral 100' }
        ],
        sentences: [
          { target: 'In-kishu tomon', source: 'Ten cows' },
          { target: 'Il-moran aare', source: 'Two warriors' },
          { target: 'Iip tomon', source: 'One thousand' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the number "Five" in Maa?',
            correctAnswer: 'Imiet',
            options: ['Imiet', 'Tomon', 'Ongwan', 'Aare'],
            hint: 'Follows ongwan (four)'
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Ten" in Maa?',
            correctAnswer: 'Tomon',
            options: ['Tomon', 'Tigitam', 'Nabo', 'Isiet'],
            hint: 'Foundational decade number'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Maa numerals with their English equivalents:',
            correctAnswer: 'Nabo: One, Aare: Two, Okuni: Three, Tomon: Ten',
            pairs: [
              { left: 'Nabo', right: 'One' },
              { left: 'Aare', right: 'Two' },
              { left: 'Okuni', right: 'Three' },
              { left: 'Tomon', right: 'Ten' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'maasai-unit-2',
    title: 'Unit 2: People, Kinship & Age-Sets',
    description: 'Learn terms for family, community roles, warriors, and the revered age-set system.',
    icon: '👥',
    skills: [
      {
        id: 'maasai-family',
        title: 'Family & Kinship',
        icon: 'Users',
        description: 'Understand core relational terms and household members.',
        tips: "In Maa, nouns almost always carry an initial gender prefix: 'Ol-' for masculine singular (pl. 'Il-'), and 'En-' or 'Eng-' for feminine singular (pl. 'In-'). For example: 'Ol-tungani' (a man/person) vs 'En-gitok' (a woman/wife).",
        culturalNote: "The Maasai homestead is structured around mutual family respect and age cohorts. Children are cherished as the continuity of the community and blessings from Enkai.",
        words: [
          { target: 'Ol-tungani', source: 'Person / Man', pronunciation: 'ohl-toohn-gah-nee', hint: 'Masculine singular for person (pl. Il-tungana)' },
          { target: 'En-gitok', source: 'Woman / Wife', pronunciation: 'ehn-gee-tohk', hint: 'Feminine singular for woman (pl. In-gituak)' },
          { target: 'En-kerai', source: 'Child', pronunciation: 'ehn-keh-rah-ee', hint: 'Feminine singular for child (pl. In-kera)' },
          { target: 'Ol-aiyoni', source: 'Boy', pronunciation: 'ohl-ah-ee-yoh-nee', hint: 'Uncircumcised youth (pl. Il-aiyok)' },
          { target: 'En-tito', source: 'Girl', pronunciation: 'ehn-tee-toh', hint: 'Maiden or young woman (pl. In-toyie)' },
          { target: 'Ol-payian', source: 'Elder / Husband', pronunciation: 'ohl-pah-yee-ahn', hint: 'Respected elder (pl. Il-payiani)' },
          { target: 'Papa', source: 'Father', pronunciation: 'pah-pah', hint: 'Paternal address' },
          { target: 'Yeyo', source: 'Mother', pronunciation: 'yeh-yoh', hint: 'Maternal address' },
          { target: 'Ol-alashe', source: 'Brother', pronunciation: 'ohl-ah-lah-sheh', hint: 'Male sibling (pl. Il-alashera)' },
          { target: 'Eng-anashe', source: 'Sister', pronunciation: 'ehng-ah-nah-sheh', hint: 'Female sibling (pl. Ing-anashera)' }
        ],
        sentences: [
          { target: 'Ol-payian kitok', source: 'The great elder' },
          { target: 'Yeyo en-e-manyata', source: 'Mother of the manyatta' },
          { target: 'In-kera sidain', source: 'Good children' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Child" in Maa?',
            correctAnswer: 'En-kerai',
            options: ['En-kerai', 'Ol-alashe', 'Ol-tungani', 'Yeyo'],
            hint: 'Starts with the feminine prefix En-'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the family members with their English translations:',
            correctAnswer: 'Papa: Father, Yeyo: Mother, Ol-alashe: Brother, Eng-anashe: Sister',
            pairs: [
              { left: 'Papa', right: 'Father' },
              { left: 'Yeyo', right: 'Mother' },
              { left: 'Ol-alashe', right: 'Brother' },
              { left: 'Eng-anashe', right: 'Sister' }
            ]
          }
        ]
      },
      {
        id: 'maasai-warriors',
        title: 'Warriors & Age-Sets',
        icon: 'Shield',
        description: 'Explore the social institutions of Moranhood, leadership councils, and community values.',
        tips: "An 'Ol-morani' (warrior, plural 'Il-moran') belongs to an 'Ol-poror' (age-set). Leadership is exercised through consensus: the 'Ol-aigwanani' is the elected council spokesman and leader who arbitrates matters alongside elders.",
        culturalNote: "Morans undergo rites of passage such as Eunoto to graduate into junior elders. Bravery, defense of the community and herds, and unyielding solidarity characterize this life stage.",
        words: [
          { target: 'Ol-morani', source: 'Warrior (Moran)', pronunciation: 'ohl-moh-rah-nee', hint: 'Initiated young man (pl. Il-moran)' },
          { target: 'Ol-poror', source: 'Age-set', pronunciation: 'ohl-poh-rohr', hint: 'Age-grade cohort bound for life' },
          { target: 'Ol-aigwanani', source: 'Council spokesman / Chief', pronunciation: 'ohl-ah-eeg-wah-nah-nee', hint: 'Elected leader and orator (pl. Il-aigwenak)' },
          { target: 'Ol-oiboni', source: 'Spiritual seer / Healer', pronunciation: 'ohl-oh-ee-boh-nee', hint: 'Prophet, medicine holder, and ritual guide' },
          { target: 'Ol-chore', source: 'Friend / Companion', pronunciation: 'ohl-choh-reh', hint: 'Comrade in age-set or journey (pl. Il-choreta)' },
          { target: 'Eng-anyit', source: 'Respect / Reverence', pronunciation: 'ehng-ahn-yeet', hint: 'Foundational moral virtue in Maa culture' },
          { target: 'E-unoto', source: 'Moran graduation ceremony', pronunciation: 'eh-oo-noh-toh', hint: 'Sacred transition of morans into elderhood' }
        ],
        sentences: [
          { target: 'Il-moran le maa', source: 'The warriors of Maa' },
          { target: 'E-iro ol-aigwanani.', source: 'The spokesman is speaking.' },
          { target: 'Eng-anyit na-melok', source: 'Sweet and honourable respect' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the role of an "Ol-aigwanani"?',
            correctAnswer: 'Council spokesman / Chief',
            options: ['Council spokesman / Chief', 'Junior child', 'Herd animal', 'Blacksmith'],
            hint: 'A chosen leader praised for wisdom and eloquence'
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "Il-_____ le maa." (The warriors of Maa.)',
            correctAnswer: 'moran',
            options: ['moran', 'tungana', 'aiyok', 'payiani'],
            hint: 'Plural form of Ol-morani'
          }
        ]
      }
    ]
  },
  {
    id: 'maasai-unit-3',
    title: 'Unit 3: Pastoral Kraal & Livestock',
    description: 'Learn the foundational vocabulary of cattle, herding, milk, and homestead architecture.',
    icon: '🐄',
    skills: [
      {
        id: 'maasai-livestock',
        title: 'The Sacred Herd',
        icon: 'Milk',
        description: 'Explore words for cattle, small stock, milk, and grazing.',
        tips: "In Maa cosmology, cattle ('In-kishu') are Enkai's gift to humanity. A single cow is 'En-kiteng', a bull is 'Ol-oingoni', and a calf is 'Ol-ashe'. Fresh milk is 'Kule', while water is 'Eng-are'.",
        culturalNote: "Pastoralists identify individual cattle by intricate coat color patterns, horn shapes, and ancestral lineage chants. Cattle are central to weddings, peace pacts, and social bonds.",
        words: [
          { target: 'En-kiteng', source: 'Cow', pronunciation: 'ehn-kee-tehng', hint: 'Singular cow (pl. In-kishu)' },
          { target: 'In-kishu', source: 'Cattle / Cows (plural)', pronunciation: 'een-kee-shoo', hint: 'The livestock herd' },
          { target: 'Ol-oingoni', source: 'Bull', pronunciation: 'ohl-oh-eeng-oh-nee', hint: 'Breeding bull (pl. Il-oingok)' },
          { target: 'Ol-ashe', source: 'Calf', pronunciation: 'ohl-ah-sheh', hint: 'Young calf (pl. Il-asho)' },
          { target: 'En-kine', source: 'Goat', pronunciation: 'ehn-kee-neh', hint: 'Female goat (pl. In-kineji)' },
          { target: 'En-ker', source: 'Sheep', pronunciation: 'ehn-kehr', hint: 'Ewe or sheep (pl. In-kera)' },
          { target: 'Kule', source: 'Milk', pronunciation: 'koo-leh', hint: 'Primary nourishment of pastoralists' },
          { target: 'Eng-are', source: 'Water', pronunciation: 'ehng-ah-reh', hint: 'Lifegiving water (pl. Ing-ariak)' },
          { target: 'En-gojit', source: 'Grass / Pasture', pronunciation: 'ehn-goh-jeet', hint: 'Grazing feed for herds' }
        ],
        sentences: [
          { target: 'A-ok kule na-rowua.', source: 'I drink warm milk.' },
          { target: 'In-kishu te ngojit', source: 'Cattle in the pasture' },
          { target: 'Etejo ol-ashe kule.', source: 'The calf needs milk.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the Maa word for "Cow"?',
            correctAnswer: 'En-kiteng',
            options: ['En-kiteng', 'Kule', 'Eng-are', 'En-gojit'],
            hint: 'Plural is In-kishu'
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Milk" in Maa?',
            correctAnswer: 'Kule',
            options: ['Kule', 'Eng-are', 'En-ker', 'Ol-ashe'],
            hint: 'The staple beverage of pastoral life'
          },
          {
            type: 'match_pairs',
            prompt: 'Match pastoral terms with their meanings:',
            correctAnswer: 'En-kiteng: Cow, Kule: Milk, Eng-are: Water, En-gojit: Grass',
            pairs: [
              { left: 'En-kiteng', right: 'Cow' },
              { left: 'Kule', right: 'Milk' },
              { left: 'Eng-are', right: 'Water' },
              { left: 'En-gojit', right: 'Grass' }
            ]
          }
        ]
      },
      {
        id: 'maasai-kraal',
        title: 'Homestead & Kraal',
        icon: 'Home',
        description: 'Learn terms for the family homestead, house, and thorn fence enclosure.',
        tips: "'Eng-ang' is the family kraal or village containing several households. 'Eng-aji' is an individual house constructed of poles, mud, cow dung, and grass thatch. 'Ol-ale' is the thorn-fenced cattle pen inside the homestead.",
        culturalNote: "The thorn fence ('Ol-gerenget') protects livestock from lions and hyenas at night. Women traditionally architect and construct the family houses.",
        words: [
          { target: 'Eng-ang', source: 'Homestead / Kraal village', pronunciation: 'ehng-ahng', hint: 'Family compound (pl. Ing-angitie)' },
          { target: 'Eng-aji', source: 'House', pronunciation: 'ehng-ah-jee', hint: 'Traditional home (pl. Ing-ajijik)' },
          { target: 'Emanyata', source: 'Ceremonial village / Settlement', pronunciation: 'eh-mahn-yah-tah', hint: 'Special village for warriors or celebrations' },
          { target: 'Ol-ale', source: 'Livestock enclosure', pronunciation: 'ohl-ah-leh', hint: 'Central night corral for cattle' },
          { target: 'Ol-gerenget', source: 'Thorn barrier / Fence', pronunciation: 'ohl-geh-rehn-geht', hint: 'Protective perimeter around kraal' }
        ],
        sentences: [
          { target: 'Atii eng-aji ai.', source: 'I am in my house.' },
          { target: 'Entumo te manyata.', source: 'Gather at the ceremonial village.' },
          { target: 'In-kishu ti atua ol-ale.', source: 'The cattle are inside the kraal.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the Maa word for "House"?',
            correctAnswer: 'Eng-aji',
            options: ['Eng-aji', 'Ol-ale', 'Ol-gerenget', 'Eng-ang'],
            hint: 'A family dwelling built by women'
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "In-kishu ti atua ol-_____." (The cattle are inside the corral.)',
            correctAnswer: 'ale',
            options: ['ale', 'gerenget', 'aji', 'kine'],
            hint: 'The central enclosure for livestock'
          }
        ]
      }
    ]
  },
  {
    id: 'maasai-unit-4',
    title: 'Unit 4: Nature, Movement & Action Verbs',
    description: 'Learn about the natural environment and master foundational action verbs.',
    icon: '🌿',
    skills: [
      {
        id: 'maasai-nature',
        title: 'Landscape & Nature',
        icon: 'Sun',
        description: 'Explore words for sun, moon, stars, rain, and the expansive plains.',
        tips: "'Eng-olong' means both 'sun' and 'day'. 'Ol-apa' means both 'moon' and 'month'. 'Eng-ai' means both 'rain' and 'God', reflecting how life-giving rain manifests divine benevolence.",
        culturalNote: "The Maasai live in close observation of astronomical movements and bird songs to anticipate rain cycles and plan seasonal pasture rotations.",
        words: [
          { target: 'En-kop', source: 'Earth / Land', pronunciation: 'ehn-kohp', hint: 'The soil and land (pl. In-gwapi)' },
          { target: 'Eng-olong', source: 'Sun / Day', pronunciation: 'ehng-oh-lohng', hint: 'Sun and diurnal cycle (pl. Ing-olongi)' },
          { target: 'Ol-apa', source: 'Moon / Month', pronunciation: 'ohl-ah-pah', hint: 'Moon and calendar unit' },
          { target: 'Ol-agira', source: 'Star', pronunciation: 'ohl-ah-gee-rah', hint: 'Luminous heavenly body (pl. Il-ager)' },
          { target: 'Ol-chani', source: 'Tree / Plant / Medicine', pronunciation: 'ohl-chah-nee', hint: 'Wood, tree, or herbal remedy (pl. Il-keek)' },
          { target: 'En-chan', source: 'Rain', pronunciation: 'ehn-chahn', hint: 'Precipitation and seasonal blessing' }
        ],
        sentences: [
          { target: 'E-ilep eng-olong.', source: 'The sun rises.' },
          { target: 'E-sha en-chan.', source: 'The rain is falling.' },
          { target: 'Ol-apa sidai', source: 'A beautiful moon' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Sun" and "Day" in Maa?',
            correctAnswer: 'Eng-olong',
            options: ['Eng-olong', 'Ol-apa', 'En-kop', 'Ol-chani'],
            hint: 'The daylight star'
          },
          {
            type: 'match_pairs',
            prompt: 'Match natural elements with their meanings:',
            correctAnswer: 'Eng-olong: Sun, Ol-apa: Moon, Ol-agira: Star, En-chan: Rain',
            pairs: [
              { left: 'Eng-olong', right: 'Sun' },
              { left: 'Ol-apa', right: 'Moon' },
              { left: 'Ol-agira', right: 'Star' },
              { left: 'En-chan', right: 'Rain' }
            ]
          }
        ]
      },
      {
        id: 'maasai-verbs',
        title: 'Action & Daily Verbs',
        icon: 'Footprints',
        description: 'Master everyday action verbs with the 1st person prefix A-.',
        tips: "In Maa, regular verbs in the first-person singular indicative take the prefix 'A-': 'A-lo' (I go), 'A-lotu' (I come), 'A-nya' (I eat), 'A-ok' (I drink), 'A-dol' (I see), 'A-ning' (I hear), 'A-irrag' (I sleep/lie down), and 'A-ramat' (I care for/shepherd).",
        culturalNote: "'A-ramat' is a central philosophical concept in Maa culture: it means not just physically feeding herds, but exercising custodial responsibility and stewardship over family, land, and cattle.",
        words: [
          { target: 'A-lo', source: 'I go / To go', pronunciation: 'ah-loh', hint: 'Movement away' },
          { target: 'A-lotu', source: 'I come / To come', pronunciation: 'ah-loh-too', hint: 'Movement toward' },
          { target: 'A-nya', source: 'I eat / To eat', pronunciation: 'ah-nyah', hint: 'Consuming food' },
          { target: 'A-ok', source: 'I drink / To drink', pronunciation: 'ah-ohk', hint: 'Drinking fluids' },
          { target: 'A-dol', source: 'I see / To see', pronunciation: 'ah-dohl', hint: 'Vision and perception' },
          { target: 'A-ning', source: 'I hear / To hear', pronunciation: 'ah-neeng', hint: 'Hearing and understanding' },
          { target: 'A-irrag', source: 'I sleep / To lie down', pronunciation: 'ah-eer-rahg', hint: 'Resting for the night' },
          { target: 'A-ramat', source: 'I care for / To shepherd', pronunciation: 'ah-rah-maht', hint: 'Pastoral stewardship and tending' },
          { target: 'A-kwet', source: 'I run / To run', pronunciation: 'ah-kweht', hint: 'Rapid running' },
          { target: 'A-iro', source: 'I speak / To speak', pronunciation: 'ah-ee-roh', hint: 'Uttering words' }
        ],
        sentences: [
          { target: 'A-lo ang.', source: 'I am going home.' },
          { target: 'A-ramat in-kishu.', source: 'I am caring for the cattle.' },
          { target: 'A-ning ol-oinguanani.', source: 'I hear the council leader.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "I am caring for / tending the herd" in Maa?',
            correctAnswer: 'A-ramat in-kishu',
            options: ['A-ramat in-kishu', 'A-lo ang', 'A-nya kule', 'A-kwet en-kop'],
            hint: 'Uses the stewardship verb A-ramat'
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "A-_____ ang." (I am going home.)',
            correctAnswer: 'lo',
            options: ['lo', 'nya', 'ok', 'ning'],
            hint: 'Maa verb root for going'
          }
        ]
      }
    ]
  },
  {
    id: 'maasai-unit-5',
    title: 'Unit 5: Cultural Values & Blessings',
    description: 'Learn expressions of sacred harmony, communal blessings, and moral integrity.',
    icon: '✨',
    skills: [
      {
        id: 'maasai-values',
        title: 'Blessings & Sacred Harmony',
        icon: 'Sparkles',
        description: 'Understand invocations of Enkai, community blessings, and ethical uprightness.',
        tips: "'Enkai' (or 'Eng-ai') is the supreme creator and guardian of life. Invocations often conclude with 'Na-ai' ('O God') or 'E-maiyanata' (a solemn blessing). Elders bless the community by calling 'Meisho Enkai e-serian' ('May Enkai grant peace').",
        culturalNote: "During blessings, elders hold fresh green sprigs of grass ('en-gojit') or invoke goodwill with blessed words. Sincerity of heart ('o-ltau obo' - of one heart) is required in all communal prayers.",
        words: [
          { target: 'Enkai', source: 'God / Supreme Creator', pronunciation: 'ehn-kah-ee', hint: 'The one God, source of life and rain' },
          { target: 'E-maiyanata', source: 'Blessing', pronunciation: 'eh-mah-ee-yah-nah-tah', hint: 'Invocation of divine goodwill' },
          { target: 'E-sepata', source: 'Truth / Righteousness', pronunciation: 'eh-seh-pah-tah', hint: 'Upright and truthful conduct' },
          { target: 'E-supatisho', source: 'Goodness / Virtue', pronunciation: 'eh-soo-pah-tee-shoh', hint: 'Kindness and moral excellence' },
          { target: 'Meishu', source: 'May they live long (Blessing)', pronunciation: 'may-ee-shoo', hint: 'Traditional prayer for life and wellbeing' },
          { target: 'O-ltau obo', source: 'One heart / Harmony', pronunciation: 'ohl-tah-oo oh-boh', hint: 'Unity and unanimity of purpose' }
        ],
        sentences: [
          { target: 'E-maiyan Enkai iyiook.', source: 'May God bless us.' },
          { target: 'M-eishu in-kera.', source: 'May the children live long.' },
          { target: 'To-soma te sotua.', source: 'Learn together in peace.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Who is the Supreme Creator and giver of rain in Maa culture?',
            correctAnswer: 'Enkai',
            options: ['Enkai', 'Ol-aigwanani', 'Ol-morani', 'Ol-apa'],
            hint: 'Revered in prayer and dawn blessings'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the cultural concepts with their translations:',
            correctAnswer: 'Enkai: God, E-maiyanata: Blessing, E-sepata: Truth, O-ltau obo: One heart',
            pairs: [
              { left: 'Enkai', right: 'God' },
              { left: 'E-maiyanata', right: 'Blessing' },
              { left: 'E-sepata', right: 'Truth' },
              { left: 'O-ltau obo', right: 'One heart' }
            ]
          }
        ]
      }
    ]
  }
];
