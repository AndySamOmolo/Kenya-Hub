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
  },
  
  // ── EXPANDED SOURCE-VERIFIED UNITS ──
  {
    "id": "maasai-unit-6-greetings",
    "title": "Unit 6: Greetings & Farewells",
    "description": "Comprehensive Maasai (Maa) curriculum for Greetings & Farewells, vetted from Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
    "icon": "Handshake",
    "skills": [
      {
        "id": "maasai-exp-greetings",
        "title": "Greetings & Farewells",
        "icon": "Handshake",
        "description": "Master Maasai (Maa) greetings & farewells vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Greetings & Farewells, pay special attention to pronunciation and morphological prefixes/suffixes: 'Sopa, Supai' (Hello (to a man)), 'Takwenya (Yeyo takwenya)' (Hello (to a woman)), 'Paapa' (Hello (to an elder)), 'Takwenya (pl. Entakwenya)' (Hello (to children / young people)).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Sopa, Supai",
            "source": "Hello (to a man)",
            "pronunciation": "soh-pah, soo-pah-ee",
            "hint": "Traditional greeting to a man. He replies 'Epa'",
            "example": "Sopa, Supai — Hello (to a man) (Traditional greeting to a man. He replies 'Epa')"
          },
          {
            "target": "Takwenya (Yeyo takwenya)",
            "source": "Hello (to a woman)",
            "pronunciation": "tah-kwehn-yah",
            "hint": "Traditional greeting to a woman. She replies 'Iko'",
            "example": "Takwenya (Yeyo takwenya) — Hello (to a woman) (Traditional greeting to a woman. She replies 'Iko')"
          },
          {
            "target": "Paapa",
            "source": "Hello (to an elder)",
            "pronunciation": "pah-pah",
            "hint": "Respectful greeting to an elder man. Elder replies 'Epa'",
            "example": "Paapa — Hello (to an elder) (Respectful greeting to an elder man. Elder replies 'Epa')"
          },
          {
            "target": "Takwenya (pl. Entakwenya)",
            "source": "Hello (to children / young people)",
            "pronunciation": "tah-kwehn-yah / ehn-tah-kwehn-yah",
            "hint": "Greeting to young people. They reply 'Iko'",
            "example": "Takwenya (pl. Entakwenya) — Hello (to children / young people) (Greeting to young people. They reply 'Iko')"
          },
          {
            "target": "Keishtai?",
            "source": "How are you?",
            "pronunciation": "kay-ee-shtah-ee",
            "hint": "General inquiry: How are things with you?",
            "example": "Keishtai? — How are you? (General inquiry: How are things with you?)"
          },
          {
            "target": "Sidai / Supat",
            "source": "I am fine / It is good",
            "pronunciation": "see-dah-ee / soo-paht",
            "hint": "Common response: All is well / good",
            "example": "Sidai / Supat — I am fine / It is good (Common response: All is well / good)"
          },
          {
            "target": "Aiya sere / Sere",
            "source": "Goodbye / Farewell",
            "pronunciation": "eye-yah seh-reh",
            "hint": "Peaceful parting farewell",
            "example": "Aiya sere / Sere — Goodbye / Farewell (Peaceful parting farewell)"
          },
          {
            "target": "Karibu",
            "source": "Welcome",
            "pronunciation": "kah-ree-boo",
            "hint": "Welcome (borrowed from Swahili; traditional Maa: wou / wotu = come)",
            "example": "Karibu — Welcome (Welcome (borrowed from Swahili; traditional Maa: wou / wotu = come))"
          },
          {
            "target": "Eserian / Serian",
            "source": "Peace",
            "pronunciation": "eh-seh-ree-ahn",
            "hint": "Blessing of peacefulness and safety",
            "example": "Eserian / Serian — Peace (Blessing of peacefulness and safety)"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Sopa, Supai\" mean in English?",
            "correctAnswer": "Hello (to a man)",
            "options": [
              "Hello (to a woman)",
              "Hello (to an elder)",
              "Hello (to children / young people)",
              "Hello (to a man)"
            ],
            "hint": "Traditional greeting to a man. He replies 'Epa'"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Takwenya (Yeyo takwenya)\" mean in English?",
            "correctAnswer": "Hello (to a woman)",
            "options": [
              "Hello (to an elder)",
              "Hello (to children / young people)",
              "Hello (to a woman)",
              "Hello (to a man)"
            ],
            "hint": "Traditional greeting to a woman. She replies 'Iko'"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Paapa\" mean in English?",
            "correctAnswer": "Hello (to an elder)",
            "options": [
              "Hello (to children / young people)",
              "Hello (to an elder)",
              "Hello (to a man)",
              "Hello (to a woman)"
            ],
            "hint": "Respectful greeting to an elder man. Elder replies 'Epa'"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hello (to an elder)\" in Maasai (Maa)?",
            "correctAnswer": "Paapa",
            "options": [
              "Paapa",
              "Sopa, Supai",
              "Takwenya (Yeyo takwenya)",
              "Takwenya (pl. Entakwenya)"
            ],
            "hint": "pah-pah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hello (to children / young people)\" in Maasai (Maa)?",
            "correctAnswer": "Takwenya (pl. Entakwenya)",
            "options": [
              "Sopa, Supai",
              "Takwenya (Yeyo takwenya)",
              "Paapa",
              "Takwenya (pl. Entakwenya)"
            ],
            "hint": "tah-kwehn-yah / ehn-tah-kwehn-yah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"How are you?\" in Maasai (Maa)?",
            "correctAnswer": "Keishtai?",
            "options": [
              "Takwenya (Yeyo takwenya)",
              "Paapa",
              "Keishtai?",
              "Sopa, Supai"
            ],
            "hint": "kay-ee-shtah-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Sopa, Supai: Hello (to a man), Takwenya (Yeyo takwenya): Hello (to a woman), Paapa: Hello (to an elder), Takwenya (pl. Entakwenya): Hello (to children / young people)",
            "pairs": [
              {
                "left": "Sopa, Supai",
                "right": "Hello (to a man)"
              },
              {
                "left": "Takwenya (Yeyo takwenya)",
                "right": "Hello (to a woman)"
              },
              {
                "left": "Paapa",
                "right": "Hello (to an elder)"
              },
              {
                "left": "Takwenya (pl. Entakwenya)",
                "right": "Hello (to children / young people)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Hello (to a man)\" in Maasai (Maa).",
            "correctAnswer": "Sopa, Supai",
            "options": [
              "Sopa, Supai",
              "Takwenya (Yeyo takwenya)",
              "Paapa",
              "Takwenya (pl. Entakwenya)"
            ],
            "hint": "soh-pah, soo-pah-ee"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-7-numbers",
    "title": "Unit 7: Numbers",
    "description": "Comprehensive Maasai (Maa) curriculum for Numbers, vetted from Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
    "icon": "Hash",
    "skills": [
      {
        "id": "maasai-exp-numbers",
        "title": "Numbers",
        "icon": "Hash",
        "description": "Master Maasai (Maa) numbers vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Numbers, pay special attention to pronunciation and morphological prefixes/suffixes: 'Nabo / Obo' (One), 'Are / Aare' (Two), 'Uni / Okuni' (Three), 'Onguan / Ungwan' (Four).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Nabo / Obo",
            "source": "One",
            "pronunciation": "nah-boh / oh-boh",
            "hint": "Feminine: nabo; Masculine: obo",
            "example": "Nabo / Obo — One (Feminine: nabo; Masculine: obo)"
          },
          {
            "target": "Are / Aare",
            "source": "Two",
            "pronunciation": "ah-reh / ah-ah-reh",
            "hint": "Feminine: are; Masculine: aare",
            "example": "Are / Aare — Two (Feminine: are; Masculine: aare)"
          },
          {
            "target": "Uni / Okuni",
            "source": "Three",
            "pronunciation": "oo-nee / oh-koo-nee",
            "hint": "Feminine: uni; Masculine: okuni",
            "example": "Uni / Okuni — Three (Feminine: uni; Masculine: okuni)"
          },
          {
            "target": "Onguan / Ungwan",
            "source": "Four",
            "pronunciation": "ohn-goo-ahn / oong-wahn",
            "hint": "Base numeral four",
            "example": "Onguan / Ungwan — Four (Base numeral four)"
          },
          {
            "target": "Naapishana / Obishana",
            "source": "Seven",
            "pronunciation": "nah-pee-shah-nah / oh-bee-shah-nah",
            "hint": "Feminine: naapishana; Masculine: obishana",
            "example": "Naapishana / Obishana — Seven (Feminine: naapishana; Masculine: obishana)"
          },
          {
            "target": "Naudo / Oudo",
            "source": "Nine",
            "pronunciation": "now-doh / oh-oo-doh",
            "hint": "Feminine: naudo; Masculine: oudo",
            "example": "Naudo / Oudo — Nine (Feminine: naudo; Masculine: oudo)"
          },
          {
            "target": "Tomon o obo",
            "source": "Eleven",
            "pronunciation": "toh-mohn oh oh-boh",
            "hint": "Ten and one",
            "example": "Tomon o obo — Eleven (Ten and one)"
          },
          {
            "target": "Tomon o are",
            "source": "Twelve",
            "pronunciation": "toh-mohn oh ah-reh",
            "hint": "Ten and two",
            "example": "Tomon o are — Twelve (Ten and two)"
          },
          {
            "target": "Tomoni uni / Osom",
            "source": "Thirty",
            "pronunciation": "toh-moh-nee oo-nee",
            "hint": "Three tens",
            "example": "Tomoni uni / Osom — Thirty (Three tens)"
          },
          {
            "target": "Artam",
            "source": "Forty",
            "pronunciation": "ahr-tahm",
            "hint": "Cardinal forty",
            "example": "Artam — Forty (Cardinal forty)"
          },
          {
            "target": "Onom",
            "source": "Fifty",
            "pronunciation": "oh-nohm",
            "hint": "Cardinal fifty",
            "example": "Onom — Fifty (Cardinal fifty)"
          },
          {
            "target": "Iip tomon / Alfa",
            "source": "Thousand",
            "pronunciation": "ee-eep toh-mohn",
            "hint": "Ten hundreds",
            "example": "Iip tomon / Alfa — Thousand (Ten hundreds)"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nabo / Obo\" mean in English?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
            ],
            "hint": "Feminine: nabo; Masculine: obo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Are / Aare\" mean in English?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
              "One"
            ],
            "hint": "Feminine: are; Masculine: aare"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Uni / Okuni\" mean in English?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Feminine: uni; Masculine: okuni"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Maasai (Maa)?",
            "correctAnswer": "Uni / Okuni",
            "options": [
              "Uni / Okuni",
              "Nabo / Obo",
              "Are / Aare",
              "Onguan / Ungwan"
            ],
            "hint": "oo-nee / oh-koo-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Maasai (Maa)?",
            "correctAnswer": "Onguan / Ungwan",
            "options": [
              "Nabo / Obo",
              "Are / Aare",
              "Uni / Okuni",
              "Onguan / Ungwan"
            ],
            "hint": "ohn-goo-ahn / oong-wahn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Seven\" in Maasai (Maa)?",
            "correctAnswer": "Naapishana / Obishana",
            "options": [
              "Are / Aare",
              "Uni / Okuni",
              "Naapishana / Obishana",
              "Nabo / Obo"
            ],
            "hint": "nah-pee-shah-nah / oh-bee-shah-nah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Nabo / Obo: One, Are / Aare: Two, Uni / Okuni: Three, Onguan / Ungwan: Four",
            "pairs": [
              {
                "left": "Nabo / Obo",
                "right": "One"
              },
              {
                "left": "Are / Aare",
                "right": "Two"
              },
              {
                "left": "Uni / Okuni",
                "right": "Three"
              },
              {
                "left": "Onguan / Ungwan",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"One\" in Maasai (Maa).",
            "correctAnswer": "Nabo / Obo",
            "options": [
              "Nabo / Obo",
              "Are / Aare",
              "Uni / Okuni",
              "Onguan / Ungwan"
            ],
            "hint": "nah-boh / oh-boh"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-8-phrases",
    "title": "Unit 8: Common Phrases",
    "description": "Comprehensive Maasai (Maa) curriculum for Common Phrases, vetted from Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
    "icon": "MessageCircle",
    "skills": [
      {
        "id": "maasai-exp-phrases",
        "title": "Common Phrases (Part 1)",
        "icon": "MessageCircle",
        "description": "Master Maasai (Maa) common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Mme' (No), 'Amoni' (Please), 'Palaki' (Excuse me / Pardon me), 'Kaji ilo?' (Where are you going?).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Mme",
            "source": "No",
            "pronunciation": "m-meh",
            "hint": "Direct negation",
            "example": "Mme — No (Direct negation)"
          },
          {
            "target": "Amoni",
            "source": "Please",
            "pronunciation": "ah-moh-nee",
            "hint": "Polite request; from verb a-omon (to pray / request)",
            "example": "Amoni — Please (Polite request; from verb a-omon (to pray / request))"
          },
          {
            "target": "Palaki",
            "source": "Excuse me / Pardon me",
            "pronunciation": "pah-lah-kee",
            "hint": "Asking pardon or forbearance",
            "example": "Palaki — Excuse me / Pardon me (Asking pardon or forbearance)"
          },
          {
            "target": "Kaji ilo?",
            "source": "Where are you going?",
            "pronunciation": "kah-jee ee-loh",
            "hint": "Common travel inquiry",
            "example": "Kaji ilo? — Where are you going? (Common travel inquiry)"
          },
          {
            "target": "Wou ene",
            "source": "Come here",
            "pronunciation": "woh-oo eh-neh",
            "hint": "Directional command: come here",
            "example": "Wou ene — Come here (Directional command: come here)"
          },
          {
            "target": "Kanyi arna ino?",
            "source": "What is your name?",
            "pronunciation": "kahn-yee ahr-nah ee-noh",
            "hint": "Inquiring about personal identity",
            "example": "Kanyi arna ino? — What is your name? (Inquiring about personal identity)"
          },
          {
            "target": "Eng-arna ai naa...",
            "source": "My name is...",
            "pronunciation": "ehng-ahr-nah eye nah",
            "hint": "Introducing oneself",
            "example": "Eng-arna ai naa... — My name is... (Introducing oneself)"
          },
          {
            "target": "Kaja nainosie?",
            "source": "How much is it?",
            "pronunciation": "kah-jah nah-ee-noh-see-eh",
            "hint": "Asking price or value",
            "example": "Kaja nainosie? — How much is it? (Asking price or value)"
          },
          {
            "target": "Aiyou",
            "source": "I want / I desire",
            "pronunciation": "eye-yoh-oo",
            "hint": "Expressing need or intention",
            "example": "Aiyou — I want / I desire (Expressing need or intention)"
          },
          {
            "target": "Maniyolo",
            "source": "I don't know",
            "pronunciation": "mah-nee-yoh-loh",
            "hint": "Expressing lack of knowledge",
            "example": "Maniyolo — I don't know (Expressing lack of knowledge)"
          },
          {
            "target": "Anyu engiti kata",
            "source": "Wait a moment",
            "pronunciation": "ahn-yoo ehn-gee-tee kah-tah",
            "hint": "Requesting a brief pause",
            "example": "Anyu engiti kata — Wait a moment (Requesting a brief pause)"
          },
          {
            "target": "Matwo",
            "source": "Let's go",
            "pronunciation": "mah-twoh",
            "hint": "Cohortative: let us move / depart",
            "example": "Matwo — Let's go (Cohortative: let us move / depart)"
          },
          {
            "target": "E-sidai",
            "source": "It is good / beautiful",
            "pronunciation": "eh-see-dah-ee",
            "hint": "Affirmation of goodness or beauty",
            "example": "E-sidai — It is good / beautiful (Affirmation of goodness or beauty)"
          },
          {
            "target": "E-torono",
            "source": "It is bad / evil",
            "pronunciation": "eh-toh-roh-noh",
            "hint": "Describing poor quality or misfortune",
            "example": "E-torono — It is bad / evil (Describing poor quality or misfortune)"
          },
          {
            "target": "Shomo te serian",
            "source": "Go in peace",
            "pronunciation": "shoh-moh teh seh-ree-ahn",
            "hint": "Parting blessing of safe travels",
            "example": "Shomo te serian — Go in peace (Parting blessing of safe travels)"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mme\" mean in English?",
            "correctAnswer": "No",
            "options": [
              "Please",
              "Excuse me / Pardon me",
              "Where are you going?",
              "No"
            ],
            "hint": "Direct negation"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Amoni\" mean in English?",
            "correctAnswer": "Please",
            "options": [
              "Excuse me / Pardon me",
              "Where are you going?",
              "Please",
              "No"
            ],
            "hint": "Polite request; from verb a-omon (to pray / request)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Palaki\" mean in English?",
            "correctAnswer": "Excuse me / Pardon me",
            "options": [
              "Where are you going?",
              "Excuse me / Pardon me",
              "No",
              "Please"
            ],
            "hint": "Asking pardon or forbearance"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Excuse me / Pardon me\" in Maasai (Maa)?",
            "correctAnswer": "Palaki",
            "options": [
              "Palaki",
              "Mme",
              "Amoni",
              "Kaji ilo?"
            ],
            "hint": "pah-lah-kee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where are you going?\" in Maasai (Maa)?",
            "correctAnswer": "Kaji ilo?",
            "options": [
              "Mme",
              "Amoni",
              "Palaki",
              "Kaji ilo?"
            ],
            "hint": "kah-jee ee-loh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Come here\" in Maasai (Maa)?",
            "correctAnswer": "Wou ene",
            "options": [
              "Amoni",
              "Palaki",
              "Wou ene",
              "Mme"
            ],
            "hint": "woh-oo eh-neh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Mme: No, Amoni: Please, Palaki: Excuse me / Pardon me, Kaji ilo?: Where are you going?",
            "pairs": [
              {
                "left": "Mme",
                "right": "No"
              },
              {
                "left": "Amoni",
                "right": "Please"
              },
              {
                "left": "Palaki",
                "right": "Excuse me / Pardon me"
              },
              {
                "left": "Kaji ilo?",
                "right": "Where are you going?"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"No\" in Maasai (Maa).",
            "correctAnswer": "Mme",
            "options": [
              "Mme",
              "Amoni",
              "Palaki",
              "Kaji ilo?"
            ],
            "hint": "m-meh"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-9-animals",
    "title": "Unit 9: Animals & Wildlife",
    "description": "Comprehensive Maasai (Maa) curriculum for Animals & Wildlife, vetted from Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
    "icon": "Compass",
    "skills": [
      {
        "id": "maasai-exp-animals",
        "title": "Animals & Wildlife (Part 1)",
        "icon": "Compass",
        "description": "Master Maasai (Maa) animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Engwes' (Animal), 'Ol-sowan' (Buffalo), 'Ol-bungae' (Young bull), 'Ol-arus' (Spotted / Patterned bull).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Engwes",
            "source": "Animal",
            "pronunciation": "ehng-wehs",
            "hint": "Plural: ingwesi / ingwesin. Wild animal or game (also ol-changito)",
            "example": "Engwes — Animal (Plural: ingwesi / ingwesin. Wild animal or game (also ol-changito))"
          },
          {
            "target": "Ol-sowan",
            "source": "Buffalo",
            "pronunciation": "ohl-soh-wahn",
            "hint": "Plural: il-sowani. Cape buffalo; also ol-aro (pl. il-aroi)",
            "example": "Ol-sowan — Buffalo (Plural: il-sowani. Cape buffalo; also ol-aro (pl. il-aroi))"
          },
          {
            "target": "Ol-bungae",
            "source": "Young bull",
            "pronunciation": "ohl-boong-ah-eh",
            "hint": "Plural: il-bungaiko. Young uncastrated bull",
            "example": "Ol-bungae — Young bull (Plural: il-bungaiko. Young uncastrated bull)"
          },
          {
            "target": "Ol-arus",
            "source": "Spotted / Patterned bull",
            "pronunciation": "ohl-ah-roos",
            "hint": "Patterned black-and-white bull with cultural naming significance",
            "example": "Ol-arus — Spotted / Patterned bull (Patterned black-and-white bull with cultural naming significance)"
          },
          {
            "target": "Eng-ashe",
            "source": "Calf (female)",
            "pronunciation": "ehng-ah-sheh",
            "hint": "Plural: ing-asho. Young heifer calf",
            "example": "Eng-ashe — Calf (female) (Plural: ing-asho. Young heifer calf)"
          },
          {
            "target": "En-giteng",
            "source": "Cow",
            "pronunciation": "ehn-gee-tehng",
            "hint": "Plural: in-gishu. Central animal to Maasai economy, culture, and life",
            "example": "En-giteng — Cow (Plural: in-gishu. Central animal to Maasai economy, culture, and life)"
          },
          {
            "target": "Ol-mongi",
            "source": "Ox / Steer",
            "pronunciation": "ohl-mohng-gee",
            "hint": "Plural: il-mongen / il-mongi. Castrated draught or beef animal",
            "example": "Ol-mongi — Ox / Steer (Plural: il-mongen / il-mongi. Castrated draught or beef animal)"
          },
          {
            "target": "En-dauo",
            "source": "Heifer",
            "pronunciation": "ehn-dah-woh",
            "hint": "Plural: in-daua. Young cow that has not yet calved",
            "example": "En-dauo — Heifer (Plural: in-daua. Young cow that has not yet calved)"
          },
          {
            "target": "Ol-oroi",
            "source": "He-goat / Billy goat",
            "pronunciation": "ohl-oh-roh-ee",
            "hint": "Plural: il-oroishi. Adult male goat (also ol-merigeshi)",
            "example": "Ol-oroi — He-goat / Billy goat (Plural: il-oroishi. Adult male goat (also ol-merigeshi))"
          },
          {
            "target": "Ol-mereguesh",
            "source": "Ram",
            "pronunciation": "ohl-meh-reh-gwehsh",
            "hint": "Plural: il-meregueshi. Adult male sheep",
            "example": "Ol-mereguesh — Ram (Plural: il-meregueshi. Adult male sheep)"
          },
          {
            "target": "Ol-guo",
            "source": "Lamb",
            "pronunciation": "ohl-gwoh",
            "hint": "Plural: il-guon. Young sheep",
            "example": "Ol-guo — Lamb (Plural: il-guon. Young sheep)"
          },
          {
            "target": "Ol-ng'atuny",
            "source": "Lion",
            "pronunciation": "ohl-ngah-toony",
            "hint": "Plural: il-ng'atunyo. Iconic apex predator of the savanna (also ol-owuaru-kitok)",
            "example": "Ol-ng'atuny — Lion (Plural: il-ng'atunyo. Iconic apex predator of the savanna (also ol-owuaru-kitok))"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Engwes\" mean in English?",
            "correctAnswer": "Animal",
            "options": [
              "Buffalo",
              "Young bull",
              "Spotted / Patterned bull",
              "Animal"
            ],
            "hint": "Plural: ingwesi / ingwesin. Wild animal or game (also ol-changito)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-sowan\" mean in English?",
            "correctAnswer": "Buffalo",
            "options": [
              "Young bull",
              "Spotted / Patterned bull",
              "Buffalo",
              "Animal"
            ],
            "hint": "Plural: il-sowani. Cape buffalo; also ol-aro (pl. il-aroi)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-bungae\" mean in English?",
            "correctAnswer": "Young bull",
            "options": [
              "Spotted / Patterned bull",
              "Young bull",
              "Animal",
              "Buffalo"
            ],
            "hint": "Plural: il-bungaiko. Young uncastrated bull"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Young bull\" in Maasai (Maa)?",
            "correctAnswer": "Ol-bungae",
            "options": [
              "Ol-bungae",
              "Engwes",
              "Ol-sowan",
              "Ol-arus"
            ],
            "hint": "ohl-boong-ah-eh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Spotted / Patterned bull\" in Maasai (Maa)?",
            "correctAnswer": "Ol-arus",
            "options": [
              "Engwes",
              "Ol-sowan",
              "Ol-bungae",
              "Ol-arus"
            ],
            "hint": "ohl-ah-roos"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Calf (female)\" in Maasai (Maa)?",
            "correctAnswer": "Eng-ashe",
            "options": [
              "Ol-sowan",
              "Ol-bungae",
              "Eng-ashe",
              "Engwes"
            ],
            "hint": "ehng-ah-sheh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Engwes: Animal, Ol-sowan: Buffalo, Ol-bungae: Young bull, Ol-arus: Spotted / Patterned bull",
            "pairs": [
              {
                "left": "Engwes",
                "right": "Animal"
              },
              {
                "left": "Ol-sowan",
                "right": "Buffalo"
              },
              {
                "left": "Ol-bungae",
                "right": "Young bull"
              },
              {
                "left": "Ol-arus",
                "right": "Spotted / Patterned bull"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Animal\" in Maasai (Maa).",
            "correctAnswer": "Engwes",
            "options": [
              "Engwes",
              "Ol-sowan",
              "Ol-bungae",
              "Ol-arus"
            ],
            "hint": "ehng-wehs"
          }
        ]
      },
      {
        "id": "maasai-exp-animals-2",
        "title": "Animals & Wildlife (Part 2)",
        "icon": "Compass",
        "description": "Master Maasai (Maa) animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ol-ng'atuny lepong' (Lioness), 'Ol-owuaru' (Wild beast / Carnivore), 'Ol-owuaru geri' (Leopard), 'Ol-orau' (Cheetah).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Ol-ng'atuny lepong",
            "source": "Lioness",
            "pronunciation": "ohl-ngah-toony leh-pohng",
            "hint": "Plural: il-ng'atunyo leponget. Female lion",
            "example": "Ol-ng'atuny lepong — Lioness (Plural: il-ng'atunyo leponget. Female lion)"
          },
          {
            "target": "Ol-owuaru",
            "source": "Wild beast / Carnivore",
            "pronunciation": "ohl-oh-woo-ah-roo",
            "hint": "Plural: il-owuarak. Predatory carnivore or beast of prey",
            "example": "Ol-owuaru — Wild beast / Carnivore (Plural: il-owuarak. Predatory carnivore or beast of prey)"
          },
          {
            "target": "Ol-owuaru geri",
            "source": "Leopard",
            "pronunciation": "ohl-oh-woo-ah-roo geh-ree",
            "hint": "Plural: il-owuarak gerin. Spotted predator",
            "example": "Ol-owuaru geri — Leopard (Plural: il-owuarak gerin. Spotted predator)"
          },
          {
            "target": "Ol-orau",
            "source": "Cheetah",
            "pronunciation": "ohl-oh-rah-oo",
            "hint": "Plural: il-orauishi. Fast hunting cat of open plains",
            "example": "Ol-orau — Cheetah (Plural: il-orauishi. Fast hunting cat of open plains)"
          },
          {
            "target": "Ol-ng'ojine",
            "source": "Hyena (spotted)",
            "pronunciation": "ohl-ngoh-jee-neh",
            "hint": "Plural: il-ng'ojinia. Spotted scavenger (Richmond: ol-ngokine)",
            "example": "Ol-ng'ojine — Hyena (spotted) (Plural: il-ng'ojinia. Spotted scavenger (Richmond: ol-ngokine))"
          },
          {
            "target": "Ol-otonu",
            "source": "Hyena (striped)",
            "pronunciation": "ohl-oh-toh-noo",
            "hint": "Plural: il-otonak. Striped nocturnal hyena",
            "example": "Ol-otonu — Hyena (striped) (Plural: il-otonak. Striped nocturnal hyena)"
          },
          {
            "target": "Ol-le'ngaina",
            "source": "Elephant",
            "pronunciation": "ohl-leh-ngah-ee-nah",
            "hint": "Plural: il-lo'ngaik (literally 'the one with the hand'). Also ol-tome (pl. il-tomia)",
            "example": "Ol-le'ngaina — Elephant (Plural: il-lo'ngaik (literally 'the one with the hand'). Also ol-tome (pl. il-tomia))"
          },
          {
            "target": "Ol-oado-giragata",
            "source": "Giraffe",
            "pronunciation": "ohl-oh-ah-doh gee-rah-gah-tah",
            "hint": "Plural: il-oado-giragat (literally 'the tall one that steps high'). Also ol-meuti (pl. il-meut)",
            "example": "Ol-oado-giragata — Giraffe (Plural: il-oado-giragat (literally 'the tall one that steps high'). Also ol-meuti (pl. il-meut))"
          },
          {
            "target": "Ol-oitiko",
            "source": "Zebra",
            "pronunciation": "ohl-oh-ee-tee-koh",
            "hint": "Plural: il-oitikoishi. Common plains zebra",
            "example": "Ol-oitiko — Zebra (Plural: il-oitikoishi. Common plains zebra)"
          },
          {
            "target": "E-muny",
            "source": "Rhinoceros",
            "pronunciation": "eh-moony",
            "hint": "Plural: i-munyi. Black or white rhino",
            "example": "E-muny — Rhinoceros (Plural: i-munyi. Black or white rhino)"
          },
          {
            "target": "Ol-makau",
            "source": "Hippopotamus",
            "pronunciation": "ohl-mah-kah-oo",
            "hint": "Plural: il-makaun (Richmond: ol-magau). River mammal",
            "example": "Ol-makau — Hippopotamus (Plural: il-makaun (Richmond: ol-magau). River mammal)"
          },
          {
            "target": "O-suyai",
            "source": "Wild dog",
            "pronunciation": "oh-soo-yah-ee",
            "hint": "Plural: i-suyan. African painted hunting dog",
            "example": "O-suyai — Wild dog (Plural: i-suyan. African painted hunting dog)"
          }
        ],
        "sentences": [
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          },
          {
            "target": "Eshomo inkera enkang'.",
            "source": "The children have gone to the homestead."
          },
          {
            "target": "Etaa enkop nanyori.",
            "source": "The land has become green."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-ng'atuny lepong\" mean in English?",
            "correctAnswer": "Lioness",
            "options": [
              "Wild beast / Carnivore",
              "Leopard",
              "Cheetah",
              "Lioness"
            ],
            "hint": "Plural: il-ng'atunyo leponget. Female lion"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-owuaru\" mean in English?",
            "correctAnswer": "Wild beast / Carnivore",
            "options": [
              "Leopard",
              "Cheetah",
              "Wild beast / Carnivore",
              "Lioness"
            ],
            "hint": "Plural: il-owuarak. Predatory carnivore or beast of prey"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-owuaru geri\" mean in English?",
            "correctAnswer": "Leopard",
            "options": [
              "Cheetah",
              "Leopard",
              "Lioness",
              "Wild beast / Carnivore"
            ],
            "hint": "Plural: il-owuarak gerin. Spotted predator"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leopard\" in Maasai (Maa)?",
            "correctAnswer": "Ol-owuaru geri",
            "options": [
              "Ol-owuaru geri",
              "Ol-ng'atuny lepong",
              "Ol-owuaru",
              "Ol-orau"
            ],
            "hint": "ohl-oh-woo-ah-roo geh-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cheetah\" in Maasai (Maa)?",
            "correctAnswer": "Ol-orau",
            "options": [
              "Ol-ng'atuny lepong",
              "Ol-owuaru",
              "Ol-owuaru geri",
              "Ol-orau"
            ],
            "hint": "ohl-oh-rah-oo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hyena (spotted)\" in Maasai (Maa)?",
            "correctAnswer": "Ol-ng'ojine",
            "options": [
              "Ol-owuaru",
              "Ol-owuaru geri",
              "Ol-ng'ojine",
              "Ol-ng'atuny lepong"
            ],
            "hint": "ohl-ngoh-jee-neh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Ol-ng'atuny lepong: Lioness, Ol-owuaru: Wild beast / Carnivore, Ol-owuaru geri: Leopard, Ol-orau: Cheetah",
            "pairs": [
              {
                "left": "Ol-ng'atuny lepong",
                "right": "Lioness"
              },
              {
                "left": "Ol-owuaru",
                "right": "Wild beast / Carnivore"
              },
              {
                "left": "Ol-owuaru geri",
                "right": "Leopard"
              },
              {
                "left": "Ol-orau",
                "right": "Cheetah"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Lioness\" in Maasai (Maa).",
            "correctAnswer": "Ol-ng'atuny lepong",
            "options": [
              "Ol-ng'atuny lepong",
              "Ol-owuaru",
              "Ol-owuaru geri",
              "Ol-orau"
            ],
            "hint": "ohl-ngah-toony leh-pohng"
          }
        ]
      },
      {
        "id": "maasai-exp-animals-3",
        "title": "Animals & Wildlife (Part 3)",
        "icon": "Compass",
        "description": "Master Maasai (Maa) animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ol-dia' (Domestic dog), 'En-dia' (Bitch (female dog)), 'Em-barie' (Jackal), 'O-sigiria' (Donkey).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Ol-dia",
            "source": "Domestic dog",
            "pronunciation": "ohl-dee-ah",
            "hint": "Plural: il-dien. Camp guardian dog",
            "example": "Ol-dia — Domestic dog (Plural: il-dien. Camp guardian dog)"
          },
          {
            "target": "En-dia",
            "source": "Bitch (female dog)",
            "pronunciation": "ehn-dee-ah",
            "hint": "Plural: in-dian",
            "example": "En-dia — Bitch (female dog) (Plural: in-dian)"
          },
          {
            "target": "Em-barie",
            "source": "Jackal",
            "pronunciation": "ehm-bah-ree-eh",
            "hint": "Plural: im-barietin. Also en-darash (pl. in-darashin)",
            "example": "Em-barie — Jackal (Plural: im-barietin. Also en-darash (pl. in-darashin))"
          },
          {
            "target": "O-sigiria",
            "source": "Donkey",
            "pronunciation": "oh-see-gee-ree-ah",
            "hint": "Plural: i-sirgon. Pack donkey used for transporting water and camp loads",
            "example": "O-sigiria — Donkey (Plural: i-sirgon. Pack donkey used for transporting water and camp loads)"
          },
          {
            "target": "Ol-amamuiye",
            "source": "Donkey (male)",
            "pronunciation": "ohl-ah-mah-moo-ee-yeh",
            "hint": "Plural: il-amuiyeishi. Male donkey",
            "example": "Ol-amamuiye — Donkey (male) (Plural: il-amuiyeishi. Male donkey)"
          },
          {
            "target": "En-dames",
            "source": "Camel",
            "pronunciation": "ehn-dah-mehs",
            "hint": "Plural: in-damesin. Also en-gauri (pl. in-gaurin)",
            "example": "En-dames — Camel (Plural: in-damesin. Also en-gauri (pl. in-gaurin))"
          },
          {
            "target": "Em-baka",
            "source": "Cat",
            "pronunciation": "ehm-bah-kah",
            "hint": "Plural: im-bakai. Domestic cat",
            "example": "Em-baka — Cat (Plural: im-bakai. Domestic cat)"
          },
          {
            "target": "Ol-otimi",
            "source": "Baboon",
            "pronunciation": "ohl-oh-tee-mee",
            "hint": "Plural: il-otimi. Olive baboon (also ol-galdes)",
            "example": "Ol-otimi — Baboon (Plural: il-otimi. Olive baboon (also ol-galdes))"
          },
          {
            "target": "Ol-goroi",
            "source": "Colobus Monkey",
            "pronunciation": "ohl-goh-roh-ee",
            "hint": "Plural: il-goroin. Black-and-white colobus monkey",
            "example": "Ol-goroi — Colobus Monkey (Plural: il-goroin. Black-and-white colobus monkey)"
          },
          {
            "target": "En-dere",
            "source": "Vervet Monkey",
            "pronunciation": "ehn-deh-reh",
            "hint": "Plural: in-derei. Small grey monkey",
            "example": "En-dere — Vervet Monkey (Plural: in-derei. Small grey monkey)"
          },
          {
            "target": "Ol-olubo",
            "source": "Impala",
            "pronunciation": "ohl-oh-loo-boh",
            "hint": "Plural: il-olubo. Graceful savanna antelope",
            "example": "Ol-olubo — Impala (Plural: il-olubo. Graceful savanna antelope)"
          },
          {
            "target": "Ol-wargas",
            "source": "Grant's Gazelle",
            "pronunciation": "ohl-wahr-gahs",
            "hint": "Plural: il-wargasin. Large gazelle species",
            "example": "Ol-wargas — Grant's Gazelle (Plural: il-wargasin. Large gazelle species)"
          }
        ],
        "sentences": [
          {
            "target": "Etaa enkop nanyori.",
            "source": "The land has become green."
          },
          {
            "target": "Enkai naisho iyiook enkishon.",
            "source": "It is God who gives us life and cattle."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-dia\" mean in English?",
            "correctAnswer": "Domestic dog",
            "options": [
              "Bitch (female dog)",
              "Jackal",
              "Donkey",
              "Domestic dog"
            ],
            "hint": "Plural: il-dien. Camp guardian dog"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-dia\" mean in English?",
            "correctAnswer": "Bitch (female dog)",
            "options": [
              "Jackal",
              "Donkey",
              "Bitch (female dog)",
              "Domestic dog"
            ],
            "hint": "Plural: in-dian"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Em-barie\" mean in English?",
            "correctAnswer": "Jackal",
            "options": [
              "Donkey",
              "Jackal",
              "Domestic dog",
              "Bitch (female dog)"
            ],
            "hint": "Plural: im-barietin. Also en-darash (pl. in-darashin)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Jackal\" in Maasai (Maa)?",
            "correctAnswer": "Em-barie",
            "options": [
              "Em-barie",
              "Ol-dia",
              "En-dia",
              "O-sigiria"
            ],
            "hint": "ehm-bah-ree-eh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Donkey\" in Maasai (Maa)?",
            "correctAnswer": "O-sigiria",
            "options": [
              "Ol-dia",
              "En-dia",
              "Em-barie",
              "O-sigiria"
            ],
            "hint": "oh-see-gee-ree-ah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Donkey (male)\" in Maasai (Maa)?",
            "correctAnswer": "Ol-amamuiye",
            "options": [
              "En-dia",
              "Em-barie",
              "Ol-amamuiye",
              "Ol-dia"
            ],
            "hint": "ohl-ah-mah-moo-ee-yeh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Ol-dia: Domestic dog, En-dia: Bitch (female dog), Em-barie: Jackal, O-sigiria: Donkey",
            "pairs": [
              {
                "left": "Ol-dia",
                "right": "Domestic dog"
              },
              {
                "left": "En-dia",
                "right": "Bitch (female dog)"
              },
              {
                "left": "Em-barie",
                "right": "Jackal"
              },
              {
                "left": "O-sigiria",
                "right": "Donkey"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Domestic dog\" in Maasai (Maa).",
            "correctAnswer": "Ol-dia",
            "options": [
              "Ol-dia",
              "En-dia",
              "Em-barie",
              "O-sigiria"
            ],
            "hint": "ohl-dee-ah"
          }
        ]
      },
      {
        "id": "maasai-exp-animals-4",
        "title": "Animals & Wildlife (Part 4)",
        "icon": "Compass",
        "description": "Master Maasai (Maa) animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ol-oilii' (Thomson's Gazelle), 'O-sirua' (Eland), 'O-engat' (Wildebeest), 'Ol-maalo' (Greater Kudu).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Ol-oilii",
            "source": "Thomson's Gazelle",
            "pronunciation": "ohl-oh-ee-lee-ee",
            "hint": "Plural: il-oiliin. Small gazelle with dark flank band",
            "example": "Ol-oilii — Thomson's Gazelle (Plural: il-oiliin. Small gazelle with dark flank band)"
          },
          {
            "target": "O-sirua",
            "source": "Eland",
            "pronunciation": "oh-see-roo-ah",
            "hint": "Plural: i-surai. Largest antelope of the savanna",
            "example": "O-sirua — Eland (Plural: i-surai. Largest antelope of the savanna)"
          },
          {
            "target": "O-engat",
            "source": "Wildebeest",
            "pronunciation": "oh-ehn-gaht",
            "hint": "Plural: i-engatin. White-bearded gnu",
            "example": "O-engat — Wildebeest (Plural: i-engatin. White-bearded gnu)"
          },
          {
            "target": "Ol-maalo",
            "source": "Greater Kudu",
            "pronunciation": "ohl-mah-ah-loh",
            "hint": "Plural: il-maalon. Spiral-horned woodland antelope",
            "example": "Ol-maalo — Greater Kudu (Plural: il-maalon. Spiral-horned woodland antelope)"
          },
          {
            "target": "Ol-gibulege",
            "source": "Waterbuck",
            "pronunciation": "ohl-gee-boo-leh-geh",
            "hint": "Plural: il-gibulegen. Riverine antelope",
            "example": "Ol-gibulege — Waterbuck (Plural: il-gibulegen. Riverine antelope)"
          },
          {
            "target": "Ol-bua",
            "source": "Bushbuck",
            "pronunciation": "ohl-boo-ah",
            "hint": "Plural: il-buan",
            "example": "Ol-bua — Bushbuck (Plural: il-buan)"
          },
          {
            "target": "En-gijipuruk",
            "source": "Reedbuck",
            "pronunciation": "ehn-gee-jee-poo-rook",
            "hint": "Plural: in-gijipuruki",
            "example": "En-gijipuruk — Reedbuck (Plural: in-gijipuruki)"
          },
          {
            "target": "En-kitojo",
            "source": "Hare / Rabbit",
            "pronunciation": "ehn-kee-toh-joh",
            "hint": "Plural: in-kitojon (Richmond: en-gitojo)",
            "example": "En-kitojo — Hare / Rabbit (Plural: in-kitojon (Richmond: en-gitojo))"
          },
          {
            "target": "Ol-bitiro",
            "source": "Warthog / Wild boar",
            "pronunciation": "ohl-bee-tee-roh",
            "hint": "Plural: il-bitir. Savanna wild pig",
            "example": "Ol-bitiro — Warthog / Wild boar (Plural: il-bitir. Savanna wild pig)"
          },
          {
            "target": "Ol-kinos",
            "source": "Crocodile",
            "pronunciation": "ohl-kee-nohs",
            "hint": "Plural: il-kinosin. Also ol-kinyang (pl. il-kinyangin)",
            "example": "Ol-kinos — Crocodile (Plural: il-kinosin. Also ol-kinyang (pl. il-kinyangin))"
          },
          {
            "target": "Ol-asurai",
            "source": "Snake",
            "pronunciation": "ohl-ah-soo-rah-ee",
            "hint": "Plural: il-asuria. Serpent",
            "example": "Ol-asurai — Snake (Plural: il-asuria. Serpent)"
          },
          {
            "target": "En-durbubwa",
            "source": "Puff adder",
            "pronunciation": "ehn-door-boob-wah",
            "hint": "Plural: in-durbubwani. Dangerous viper",
            "example": "En-durbubwa — Puff adder (Plural: in-durbubwani. Dangerous viper)"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-oilii\" mean in English?",
            "correctAnswer": "Thomson's Gazelle",
            "options": [
              "Eland",
              "Wildebeest",
              "Greater Kudu",
              "Thomson's Gazelle"
            ],
            "hint": "Plural: il-oiliin. Small gazelle with dark flank band"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"O-sirua\" mean in English?",
            "correctAnswer": "Eland",
            "options": [
              "Wildebeest",
              "Greater Kudu",
              "Eland",
              "Thomson's Gazelle"
            ],
            "hint": "Plural: i-surai. Largest antelope of the savanna"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"O-engat\" mean in English?",
            "correctAnswer": "Wildebeest",
            "options": [
              "Greater Kudu",
              "Wildebeest",
              "Thomson's Gazelle",
              "Eland"
            ],
            "hint": "Plural: i-engatin. White-bearded gnu"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Wildebeest\" in Maasai (Maa)?",
            "correctAnswer": "O-engat",
            "options": [
              "O-engat",
              "Ol-oilii",
              "O-sirua",
              "Ol-maalo"
            ],
            "hint": "oh-ehn-gaht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Greater Kudu\" in Maasai (Maa)?",
            "correctAnswer": "Ol-maalo",
            "options": [
              "Ol-oilii",
              "O-sirua",
              "O-engat",
              "Ol-maalo"
            ],
            "hint": "ohl-mah-ah-loh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Waterbuck\" in Maasai (Maa)?",
            "correctAnswer": "Ol-gibulege",
            "options": [
              "O-sirua",
              "O-engat",
              "Ol-gibulege",
              "Ol-oilii"
            ],
            "hint": "ohl-gee-boo-leh-geh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Ol-oilii: Thomson's Gazelle, O-sirua: Eland, O-engat: Wildebeest, Ol-maalo: Greater Kudu",
            "pairs": [
              {
                "left": "Ol-oilii",
                "right": "Thomson's Gazelle"
              },
              {
                "left": "O-sirua",
                "right": "Eland"
              },
              {
                "left": "O-engat",
                "right": "Wildebeest"
              },
              {
                "left": "Ol-maalo",
                "right": "Greater Kudu"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Thomson's Gazelle\" in Maasai (Maa).",
            "correctAnswer": "Ol-oilii",
            "options": [
              "Ol-oilii",
              "O-sirua",
              "O-engat",
              "Ol-maalo"
            ],
            "hint": "ohl-oh-ee-lee-ee"
          }
        ]
      },
      {
        "id": "maasai-exp-animals-5",
        "title": "Animals & Wildlife (Part 5)",
        "icon": "Compass",
        "description": "Master Maasai (Maa) animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ol-oikuma' (Tortoise), 'En-dua' (Frog), 'Ol-dua' (Bullfrog), 'Ol-oiriri' (Lizard).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Ol-oikuma",
            "source": "Tortoise",
            "pronunciation": "ohl-oh-ee-koo-mah",
            "hint": "Plural: il-oikumaishi",
            "example": "Ol-oikuma — Tortoise (Plural: il-oikumaishi)"
          },
          {
            "target": "En-dua",
            "source": "Frog",
            "pronunciation": "ehn-doo-ah",
            "hint": "Plural: in-duan",
            "example": "En-dua — Frog (Plural: in-duan)"
          },
          {
            "target": "Ol-dua",
            "source": "Bullfrog",
            "pronunciation": "ohl-doo-ah",
            "hint": "Plural: il-duan",
            "example": "Ol-dua — Bullfrog (Plural: il-duan)"
          },
          {
            "target": "Ol-oiriri",
            "source": "Lizard",
            "pronunciation": "ohl-oh-ee-ree-ree",
            "hint": "Plural: il-oirir",
            "example": "Ol-oiriri — Lizard (Plural: il-oirir)"
          },
          {
            "target": "Ol-motonye",
            "source": "Bird (large)",
            "pronunciation": "ohl-moh-toh-nyeh",
            "hint": "Plural: il-motonye. Large bird or raptor",
            "example": "Ol-motonye — Bird (large) (Plural: il-motonye. Large bird or raptor)"
          },
          {
            "target": "En-daritiki",
            "source": "Bird (small)",
            "pronunciation": "ehn-dah-ree-tee-kee",
            "hint": "Plural: in-datitik. Small songbird / sparrow",
            "example": "En-daritiki — Bird (small) (Plural: in-datitik. Small songbird / sparrow)"
          },
          {
            "target": "Ol-kilit",
            "source": "Eagle",
            "pronunciation": "ohl-kee-leet",
            "hint": "Plural: il-kilili",
            "example": "Ol-kilit — Eagle (Plural: il-kilili)"
          },
          {
            "target": "Ol-kilil",
            "source": "Hawk",
            "pronunciation": "ohl-kee-leel",
            "hint": "Plural: il-kilili",
            "example": "Ol-kilil — Hawk (Plural: il-kilili)"
          },
          {
            "target": "En-diamorgusi",
            "source": "Marabou Stork",
            "pronunciation": "ehn-dee-ah-mohr-goo-see",
            "hint": "Plural: in-diamorgus",
            "example": "En-diamorgusi — Marabou Stork (Plural: in-diamorgus)"
          },
          {
            "target": "Ol-kuruk",
            "source": "Crow / Raven",
            "pronunciation": "ohl-koo-rook",
            "hint": "Plural: il-kuruki",
            "example": "Ol-kuruk — Crow / Raven (Plural: il-kuruki)"
          },
          {
            "target": "Ol-geresure",
            "source": "Guinea fowl",
            "pronunciation": "ohl-geh-reh-soo-reh",
            "hint": "Plural: il-geresureni",
            "example": "Ol-geresure — Guinea fowl (Plural: il-geresureni)"
          },
          {
            "target": "En-turkulu",
            "source": "Dove / Pigeon",
            "pronunciation": "ehn-toor-koo-loo",
            "hint": "Plural: in-turkuluni",
            "example": "En-turkulu — Dove / Pigeon (Plural: in-turkuluni)"
          }
        ],
        "sentences": [
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          },
          {
            "target": "Eshomo inkera enkang'.",
            "source": "The children have gone to the homestead."
          },
          {
            "target": "Etaa enkop nanyori.",
            "source": "The land has become green."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-oikuma\" mean in English?",
            "correctAnswer": "Tortoise",
            "options": [
              "Frog",
              "Bullfrog",
              "Lizard",
              "Tortoise"
            ],
            "hint": "Plural: il-oikumaishi"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-dua\" mean in English?",
            "correctAnswer": "Frog",
            "options": [
              "Bullfrog",
              "Lizard",
              "Frog",
              "Tortoise"
            ],
            "hint": "Plural: in-duan"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-dua\" mean in English?",
            "correctAnswer": "Bullfrog",
            "options": [
              "Lizard",
              "Bullfrog",
              "Tortoise",
              "Frog"
            ],
            "hint": "Plural: il-duan"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bullfrog\" in Maasai (Maa)?",
            "correctAnswer": "Ol-dua",
            "options": [
              "Ol-dua",
              "Ol-oikuma",
              "En-dua",
              "Ol-oiriri"
            ],
            "hint": "ohl-doo-ah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lizard\" in Maasai (Maa)?",
            "correctAnswer": "Ol-oiriri",
            "options": [
              "Ol-oikuma",
              "En-dua",
              "Ol-dua",
              "Ol-oiriri"
            ],
            "hint": "ohl-oh-ee-ree-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bird (large)\" in Maasai (Maa)?",
            "correctAnswer": "Ol-motonye",
            "options": [
              "En-dua",
              "Ol-dua",
              "Ol-motonye",
              "Ol-oikuma"
            ],
            "hint": "ohl-moh-toh-nyeh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Ol-oikuma: Tortoise, En-dua: Frog, Ol-dua: Bullfrog, Ol-oiriri: Lizard",
            "pairs": [
              {
                "left": "Ol-oikuma",
                "right": "Tortoise"
              },
              {
                "left": "En-dua",
                "right": "Frog"
              },
              {
                "left": "Ol-dua",
                "right": "Bullfrog"
              },
              {
                "left": "Ol-oiriri",
                "right": "Lizard"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Tortoise\" in Maasai (Maa).",
            "correctAnswer": "Ol-oikuma",
            "options": [
              "Ol-oikuma",
              "En-dua",
              "Ol-dua",
              "Ol-oiriri"
            ],
            "hint": "ohl-oh-ee-koo-mah"
          }
        ]
      },
      {
        "id": "maasai-exp-animals-6",
        "title": "Animals & Wildlife (Part 6)",
        "icon": "Compass",
        "description": "Master Maasai (Maa) animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ol-motorok' (Duck), 'El-lukungu' (Chicken / Fowl), 'O-senger' (Fish), 'Ol-otoroki' (Honeybee).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Ol-motorok",
            "source": "Duck",
            "pronunciation": "ohl-moh-toh-rohk",
            "hint": "Plural: il-motoroki",
            "example": "Ol-motorok — Duck (Plural: il-motoroki)"
          },
          {
            "target": "El-lukungu",
            "source": "Chicken / Fowl",
            "pronunciation": "ehl-loo-koon-goo",
            "hint": "Plural: il-lukunguni",
            "example": "El-lukungu — Chicken / Fowl (Plural: il-lukunguni)"
          },
          {
            "target": "O-senger",
            "source": "Fish",
            "pronunciation": "oh-sehn-gehr",
            "hint": "Plural: i-sengeri (fish was traditionally taboo food among pastoralists)",
            "example": "O-senger — Fish (Plural: i-sengeri (fish was traditionally taboo food among pastoralists))"
          },
          {
            "target": "Ol-otoroki",
            "source": "Honeybee",
            "pronunciation": "ohl-oh-toh-roh-kee",
            "hint": "Plural: il-otorok. Honey producer; also ol-otoro",
            "example": "Ol-otoroki — Honeybee (Plural: il-otorok. Honey producer; also ol-otoro)"
          },
          {
            "target": "E-mus",
            "source": "Swarm of bees",
            "pronunciation": "eh-moos",
            "hint": "Plural: i-musi",
            "example": "E-mus — Swarm of bees (Plural: i-musi)"
          },
          {
            "target": "Ol-ojongani",
            "source": "Fly",
            "pronunciation": "ohl-oh-johng-gah-nee",
            "hint": "Plural: il-ojonga",
            "example": "Ol-ojongani — Fly (Plural: il-ojonga)"
          },
          {
            "target": "Eng-ojingani",
            "source": "Mosquito",
            "pronunciation": "ehng-oh-jeeng-gah-nee",
            "hint": "Plural: ing-ojonga",
            "example": "Eng-ojingani — Mosquito (Plural: ing-ojonga)"
          },
          {
            "target": "En-toroboni",
            "source": "Tsetse fly",
            "pronunciation": "ehn-toh-roh-boh-nee",
            "hint": "Plural: in-torobo. Vector of nagana cattle disease",
            "example": "En-toroboni — Tsetse fly (Plural: in-torobo. Vector of nagana cattle disease)"
          },
          {
            "target": "Eng-alaoni",
            "source": "Ant (tiny)",
            "pronunciation": "ehng-ah-lah-oh-nee",
            "hint": "Plural: ing-alao. Very small ant (fixed from corrupt entry)",
            "example": "Eng-alaoni — Ant (tiny) (Plural: ing-alao. Very small ant (fixed from corrupt entry))"
          },
          {
            "target": "En-dirango",
            "source": "Safari ant (siafu)",
            "pronunciation": "ehn-dee-rahng-goh",
            "hint": "Plural: in-dirangoni. Aggressive biting red ant",
            "example": "En-dirango — Safari ant (siafu) (Plural: in-dirangoni. Aggressive biting red ant)"
          },
          {
            "target": "Ol-kedi",
            "source": "Spider",
            "pronunciation": "ohl-keh-dee",
            "hint": "Plural: il-kedi",
            "example": "Ol-kedi — Spider (Plural: il-kedi)"
          },
          {
            "target": "En-golopa",
            "source": "Scorpion",
            "pronunciation": "ehn-goh-loh-pah",
            "hint": "Plural: il-golopan",
            "example": "En-golopa — Scorpion (Plural: il-golopan)"
          },
          {
            "target": "Ol-maati",
            "source": "Locust",
            "pronunciation": "ohl-mah-ah-tee",
            "hint": "Plural: il-maat",
            "example": "Ol-maati — Locust (Plural: il-maat)"
          },
          {
            "target": "En-dargeti",
            "source": "Grasshopper",
            "pronunciation": "ehn-dahr-geh-tee",
            "hint": "Plural: in-darget",
            "example": "En-dargeti — Grasshopper (Plural: in-darget)"
          },
          {
            "target": "Ol-masheri",
            "source": "Tick",
            "pronunciation": "ohl-mah-sheh-ree",
            "hint": "Plural: il-mashet. Cattle parasite",
            "example": "Ol-masheri — Tick (Plural: il-mashet. Cattle parasite)"
          }
        ],
        "sentences": [
          {
            "target": "Etaa enkop nanyori.",
            "source": "The land has become green."
          },
          {
            "target": "Enkai naisho iyiook enkishon.",
            "source": "It is God who gives us life and cattle."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-motorok\" mean in English?",
            "correctAnswer": "Duck",
            "options": [
              "Chicken / Fowl",
              "Fish",
              "Honeybee",
              "Duck"
            ],
            "hint": "Plural: il-motoroki"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"El-lukungu\" mean in English?",
            "correctAnswer": "Chicken / Fowl",
            "options": [
              "Fish",
              "Honeybee",
              "Chicken / Fowl",
              "Duck"
            ],
            "hint": "Plural: il-lukunguni"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"O-senger\" mean in English?",
            "correctAnswer": "Fish",
            "options": [
              "Honeybee",
              "Fish",
              "Duck",
              "Chicken / Fowl"
            ],
            "hint": "Plural: i-sengeri (fish was traditionally taboo food among pastoralists)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fish\" in Maasai (Maa)?",
            "correctAnswer": "O-senger",
            "options": [
              "O-senger",
              "Ol-motorok",
              "El-lukungu",
              "Ol-otoroki"
            ],
            "hint": "oh-sehn-gehr"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Honeybee\" in Maasai (Maa)?",
            "correctAnswer": "Ol-otoroki",
            "options": [
              "Ol-motorok",
              "El-lukungu",
              "O-senger",
              "Ol-otoroki"
            ],
            "hint": "ohl-oh-toh-roh-kee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Swarm of bees\" in Maasai (Maa)?",
            "correctAnswer": "E-mus",
            "options": [
              "El-lukungu",
              "O-senger",
              "E-mus",
              "Ol-motorok"
            ],
            "hint": "eh-moos"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Ol-motorok: Duck, El-lukungu: Chicken / Fowl, O-senger: Fish, Ol-otoroki: Honeybee",
            "pairs": [
              {
                "left": "Ol-motorok",
                "right": "Duck"
              },
              {
                "left": "El-lukungu",
                "right": "Chicken / Fowl"
              },
              {
                "left": "O-senger",
                "right": "Fish"
              },
              {
                "left": "Ol-otoroki",
                "right": "Honeybee"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Duck\" in Maasai (Maa).",
            "correctAnswer": "Ol-motorok",
            "options": [
              "Ol-motorok",
              "El-lukungu",
              "O-senger",
              "Ol-otoroki"
            ],
            "hint": "ohl-moh-toh-rohk"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-10-nature",
    "title": "Unit 10: Nature & Environment",
    "description": "Comprehensive Maasai (Maa) curriculum for Nature & Environment, vetted from Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
    "icon": "Sun",
    "skills": [
      {
        "id": "maasai-exp-nature",
        "title": "Nature & Environment (Part 1)",
        "icon": "Sun",
        "description": "Master Maasai (Maa) nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'En-kaik' (Stars), 'Ol-agira le'ngakenya' (Morning star), 'Ol-agira le'nteiba' (Evening star), 'Ol-agira lo'lkidongoi' (Comet).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "En-kaik",
            "source": "Stars",
            "pronunciation": "ehn-kah-eek",
            "hint": "Singular: ol-agira / ol-agera; plural: il-ager / in-kaik",
            "example": "En-kaik — Stars (Singular: ol-agira / ol-agera; plural: il-ager / in-kaik)"
          },
          {
            "target": "Ol-agira le'ngakenya",
            "source": "Morning star",
            "pronunciation": "ohl-ah-gee-rah leh-ngah-kehn-yah",
            "hint": "The star that heralds the dawn",
            "example": "Ol-agira le'ngakenya — Morning star (The star that heralds the dawn)"
          },
          {
            "target": "Ol-agira le'nteiba",
            "source": "Evening star",
            "pronunciation": "ohl-ah-gee-rah leh-nteh-ee-bah",
            "hint": "The star visible at dusk",
            "example": "Ol-agira le'nteiba — Evening star (The star visible at dusk)"
          },
          {
            "target": "Ol-agira lo'lkidongoi",
            "source": "Comet",
            "pronunciation": "ohl-ah-gee-rah lohl-kee-dohng-goh-ee",
            "hint": "Literally 'star with a tail'",
            "example": "Ol-agira lo'lkidongoi — Comet (Literally 'star with a tail')"
          },
          {
            "target": "Eng-ai",
            "source": "Sky / Heavens",
            "pronunciation": "ehng-ah-ee",
            "hint": "The upper firmament, domain of Enkai (God)",
            "example": "Eng-ai — Sky / Heavens (The upper firmament, domain of Enkai (God))"
          },
          {
            "target": "En-keper",
            "source": "Height / Firmament",
            "pronunciation": "ehn-keh-pehr",
            "hint": "Celestial zenith / upper realm",
            "example": "En-keper — Height / Firmament (Celestial zenith / upper realm)"
          },
          {
            "target": "En-gop",
            "source": "Earth / Land",
            "pronunciation": "ehn-gohp",
            "hint": "Plural: in-gwapi. Earth, soil, country, territory",
            "example": "En-gop — Earth / Land (Plural: in-gwapi. Earth, soil, country, territory)"
          },
          {
            "target": "Ol-doinyo",
            "source": "Mountain",
            "pronunciation": "ohl-doh-ee-nyoh",
            "hint": "Plural: il-doinyo. High peak (e.g., Ol Doinyo Lengai)",
            "example": "Ol-doinyo — Mountain (Plural: il-doinyo. High peak (e.g., Ol Doinyo Lengai))"
          },
          {
            "target": "En-doinyo",
            "source": "Hill",
            "pronunciation": "ehn-doh-ee-nyoh",
            "hint": "Plural: in-doinyo. Smaller rise or ridge",
            "example": "En-doinyo — Hill (Plural: in-doinyo. Smaller rise or ridge)"
          },
          {
            "target": "Ol-Doinyo Keri",
            "source": "Mount Kenya",
            "pronunciation": "ohl-doh-ee-nyoh keh-ree",
            "hint": "Literally 'the striped / spotted mountain'",
            "example": "Ol-Doinyo Keri — Mount Kenya (Literally 'the striped / spotted mountain')"
          },
          {
            "target": "Ol-Doinyo Oibor",
            "source": "Mount Kilimanjaro",
            "pronunciation": "ohl-doh-ee-nyoh oh-ee-bohr",
            "hint": "Literally 'the shining white / snow-capped mountain'",
            "example": "Ol-Doinyo Oibor — Mount Kilimanjaro (Literally 'the shining white / snow-capped mountain')"
          },
          {
            "target": "Ol-keju",
            "source": "River",
            "pronunciation": "ohl-keh-joo",
            "hint": "Plural: il-kejek. Flowing river; also e-guaso (pl. i-guason)",
            "example": "Ol-keju — River (Plural: il-kejek. Flowing river; also e-guaso (pl. i-guason))"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-kaik\" mean in English?",
            "correctAnswer": "Stars",
            "options": [
              "Morning star",
              "Evening star",
              "Comet",
              "Stars"
            ],
            "hint": "Singular: ol-agira / ol-agera; plural: il-ager / in-kaik"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-agira le'ngakenya\" mean in English?",
            "correctAnswer": "Morning star",
            "options": [
              "Evening star",
              "Comet",
              "Morning star",
              "Stars"
            ],
            "hint": "The star that heralds the dawn"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-agira le'nteiba\" mean in English?",
            "correctAnswer": "Evening star",
            "options": [
              "Comet",
              "Evening star",
              "Stars",
              "Morning star"
            ],
            "hint": "The star visible at dusk"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Evening star\" in Maasai (Maa)?",
            "correctAnswer": "Ol-agira le'nteiba",
            "options": [
              "Ol-agira le'nteiba",
              "En-kaik",
              "Ol-agira le'ngakenya",
              "Ol-agira lo'lkidongoi"
            ],
            "hint": "ohl-ah-gee-rah leh-nteh-ee-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Comet\" in Maasai (Maa)?",
            "correctAnswer": "Ol-agira lo'lkidongoi",
            "options": [
              "En-kaik",
              "Ol-agira le'ngakenya",
              "Ol-agira le'nteiba",
              "Ol-agira lo'lkidongoi"
            ],
            "hint": "ohl-ah-gee-rah lohl-kee-dohng-goh-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sky / Heavens\" in Maasai (Maa)?",
            "correctAnswer": "Eng-ai",
            "options": [
              "Ol-agira le'ngakenya",
              "Ol-agira le'nteiba",
              "Eng-ai",
              "En-kaik"
            ],
            "hint": "ehng-ah-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "En-kaik: Stars, Ol-agira le'ngakenya: Morning star, Ol-agira le'nteiba: Evening star, Ol-agira lo'lkidongoi: Comet",
            "pairs": [
              {
                "left": "En-kaik",
                "right": "Stars"
              },
              {
                "left": "Ol-agira le'ngakenya",
                "right": "Morning star"
              },
              {
                "left": "Ol-agira le'nteiba",
                "right": "Evening star"
              },
              {
                "left": "Ol-agira lo'lkidongoi",
                "right": "Comet"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Stars\" in Maasai (Maa).",
            "correctAnswer": "En-kaik",
            "options": [
              "En-kaik",
              "Ol-agira le'ngakenya",
              "Ol-agira le'nteiba",
              "Ol-agira lo'lkidongoi"
            ],
            "hint": "ehn-kah-eek"
          }
        ]
      },
      {
        "id": "maasai-exp-nature-2",
        "title": "Nature & Environment (Part 2)",
        "icon": "Sun",
        "description": "Master Maasai (Maa) nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'E-guaso' (Stream / Brook), 'Ol-kekun' (River bank), 'En-naiuroo' (Waterfall), 'Ol-balbal' (Lake).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "E-guaso",
            "source": "Stream / Brook",
            "pronunciation": "eh-gwah-soh",
            "hint": "Plural: i-guason. Flowing tributary or stream",
            "example": "E-guaso — Stream / Brook (Plural: i-guason. Flowing tributary or stream)"
          },
          {
            "target": "Ol-kekun",
            "source": "River bank",
            "pronunciation": "ohl-keh-koon",
            "hint": "Plural: il-kekuno",
            "example": "Ol-kekun — River bank (Plural: il-kekuno)"
          },
          {
            "target": "En-naiuroo",
            "source": "Waterfall",
            "pronunciation": "ehn-nah-ee-oo-roh-oh",
            "hint": "Falling cascade of water",
            "example": "En-naiuroo — Waterfall (Falling cascade of water)"
          },
          {
            "target": "Ol-balbal",
            "source": "Lake",
            "pronunciation": "ohl-bahl-bahl",
            "hint": "Plural: il-balbali. Lake or depression; also en-aiposha",
            "example": "Ol-balbal — Lake (Plural: il-balbali. Lake or depression; also en-aiposha)"
          },
          {
            "target": "Eng-atamboi",
            "source": "Cloud",
            "pronunciation": "ehng-ah-tahm-boh-ee",
            "hint": "Plural: ing-atambo",
            "example": "Eng-atamboi — Cloud (Plural: ing-atambo)"
          },
          {
            "target": "En-gisuisui",
            "source": "Wind",
            "pronunciation": "ehn-gee-soo-ee-soo-ee",
            "hint": "Plural: in-gisuisuot. Breeze or gust",
            "example": "En-gisuisui — Wind (Plural: in-gisuisuot. Breeze or gust)"
          },
          {
            "target": "Ol-limwa",
            "source": "Whirlwind",
            "pronunciation": "ohl-leem-wah",
            "hint": "Plural: il-limwain. Dust devil or whirlwind",
            "example": "Ol-limwa — Whirlwind (Plural: il-limwain. Dust devil or whirlwind)"
          },
          {
            "target": "En-kikurukuroto",
            "source": "Thunder",
            "pronunciation": "ehn-kee-koo-roo-koo-roh-toh",
            "hint": "Plural: in-kikurukurot. Sound of storms",
            "example": "En-kikurukuroto — Thunder (Plural: in-kikurukurot. Sound of storms)"
          },
          {
            "target": "En-giwangata",
            "source": "Lightning",
            "pronunciation": "ehn-gee-wahng-gah-tah",
            "hint": "Plural: in-giwangat. Flash of light",
            "example": "En-giwangata — Lightning (Plural: in-giwangat. Flash of light)"
          },
          {
            "target": "En-gima",
            "source": "Fire",
            "pronunciation": "ehn-gee-mah",
            "hint": "Plural: in-gimaite. Domestic hearth and warmth",
            "example": "En-gima — Fire (Plural: in-gimaite. Domestic hearth and warmth)"
          },
          {
            "target": "Ol-chata",
            "source": "Firewood",
            "pronunciation": "ohl-chah-tah",
            "hint": "Plural: il-kek (Richmond: ol-jata, il-gek)",
            "example": "Ol-chata — Firewood (Plural: il-kek (Richmond: ol-jata, il-gek))"
          },
          {
            "target": "Em-buruo",
            "source": "Smoke",
            "pronunciation": "ehm-boo-roo-oh",
            "hint": "Plural: im-buruoishi",
            "example": "Em-buruo — Smoke (Plural: im-buruoishi)"
          }
        ],
        "sentences": [
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          },
          {
            "target": "Eshomo inkera enkang'.",
            "source": "The children have gone to the homestead."
          },
          {
            "target": "Etaa enkop nanyori.",
            "source": "The land has become green."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"E-guaso\" mean in English?",
            "correctAnswer": "Stream / Brook",
            "options": [
              "River bank",
              "Waterfall",
              "Lake",
              "Stream / Brook"
            ],
            "hint": "Plural: i-guason. Flowing tributary or stream"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-kekun\" mean in English?",
            "correctAnswer": "River bank",
            "options": [
              "Waterfall",
              "Lake",
              "River bank",
              "Stream / Brook"
            ],
            "hint": "Plural: il-kekuno"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-naiuroo\" mean in English?",
            "correctAnswer": "Waterfall",
            "options": [
              "Lake",
              "Waterfall",
              "Stream / Brook",
              "River bank"
            ],
            "hint": "Falling cascade of water"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Waterfall\" in Maasai (Maa)?",
            "correctAnswer": "En-naiuroo",
            "options": [
              "En-naiuroo",
              "E-guaso",
              "Ol-kekun",
              "Ol-balbal"
            ],
            "hint": "ehn-nah-ee-oo-roh-oh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Lake\" in Maasai (Maa)?",
            "correctAnswer": "Ol-balbal",
            "options": [
              "E-guaso",
              "Ol-kekun",
              "En-naiuroo",
              "Ol-balbal"
            ],
            "hint": "ohl-bahl-bahl"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cloud\" in Maasai (Maa)?",
            "correctAnswer": "Eng-atamboi",
            "options": [
              "Ol-kekun",
              "En-naiuroo",
              "Eng-atamboi",
              "E-guaso"
            ],
            "hint": "ehng-ah-tahm-boh-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "E-guaso: Stream / Brook, Ol-kekun: River bank, En-naiuroo: Waterfall, Ol-balbal: Lake",
            "pairs": [
              {
                "left": "E-guaso",
                "right": "Stream / Brook"
              },
              {
                "left": "Ol-kekun",
                "right": "River bank"
              },
              {
                "left": "En-naiuroo",
                "right": "Waterfall"
              },
              {
                "left": "Ol-balbal",
                "right": "Lake"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Stream / Brook\" in Maasai (Maa).",
            "correctAnswer": "E-guaso",
            "options": [
              "E-guaso",
              "Ol-kekun",
              "En-naiuroo",
              "Ol-balbal"
            ],
            "hint": "eh-gwah-soh"
          }
        ]
      },
      {
        "id": "maasai-exp-nature-3",
        "title": "Nature & Environment (Part 3)",
        "icon": "Sun",
        "description": "Master Maasai (Maa) nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'En-kukuu' (Ashes), 'En-gukuo' (Charcoal), 'En-dim' (Forest / Bush), 'E-shoo' (Pasture / Grazing field).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "En-kukuu",
            "source": "Ashes",
            "pronunciation": "ehn-koo-koo-oo",
            "hint": "Plural: in-kuk. Also en-guruoni (pl. in-guruon)",
            "example": "En-kukuu — Ashes (Plural: in-kuk. Also en-guruoni (pl. in-guruon))"
          },
          {
            "target": "En-gukuo",
            "source": "Charcoal",
            "pronunciation": "ehn-goo-koo-oh",
            "hint": "Plural: in-guk",
            "example": "En-gukuo — Charcoal (Plural: in-guk)"
          },
          {
            "target": "En-dim",
            "source": "Forest / Bush",
            "pronunciation": "ehn-deem",
            "hint": "Plural: in-dimi. Woodland or wilderness (also o-sero)",
            "example": "En-dim — Forest / Bush (Plural: in-dimi. Woodland or wilderness (also o-sero))"
          },
          {
            "target": "E-shoo",
            "source": "Pasture / Grazing field",
            "pronunciation": "eh-shoh-oh",
            "hint": "Designated grazing land for livestock",
            "example": "E-shoo — Pasture / Grazing field (Designated grazing land for livestock)"
          },
          {
            "target": "O-soit",
            "source": "Stone",
            "pronunciation": "oh-soh-eet",
            "hint": "Plural: i-soito",
            "example": "O-soit — Stone (Plural: i-soito)"
          },
          {
            "target": "Ol-totoi",
            "source": "Rock / Boulder",
            "pronunciation": "ohl-toh-toh-ee",
            "hint": "Plural: il-toto",
            "example": "Ol-totoi — Rock / Boulder (Plural: il-toto)"
          },
          {
            "target": "O-senyai",
            "source": "Sand",
            "pronunciation": "oh-sehn-yah-ee",
            "hint": "Plural: i-senya",
            "example": "O-senyai — Sand (Plural: i-senya)"
          },
          {
            "target": "En-kulupuok",
            "source": "Soil / Earth",
            "pronunciation": "ehn-koo-loo-pwohk",
            "hint": "Tilled earth or dirt (Richmond: en-gulupuok)",
            "example": "En-kulupuok — Soil / Earth (Tilled earth or dirt (Richmond: en-gulupuok))"
          },
          {
            "target": "En-nongoto",
            "source": "Valley / Ravine",
            "pronunciation": "ehn-nohng-goh-toh",
            "hint": "Plural: in-nongot. Also o-riet (pl. i-rieta)",
            "example": "En-nongoto — Valley / Ravine (Plural: in-nongot. Also o-riet (pl. i-rieta))"
          },
          {
            "target": "Eng-apune",
            "source": "Cave",
            "pronunciation": "ehng-ah-poo-neh",
            "hint": "Plural: ing-apunia",
            "example": "Eng-apune — Cave (Plural: ing-apunia)"
          },
          {
            "target": "En-joro",
            "source": "Spring (water)",
            "pronunciation": "ehn-joh-roh",
            "hint": "Plural: in-joroi. Natural water well or spring",
            "example": "En-joro — Spring (water) (Plural: in-joroi. Natural water well or spring)"
          },
          {
            "target": "Ol-ameiyu",
            "source": "Drought",
            "pronunciation": "ohl-ah-meh-ee-yoo",
            "hint": "Prolonged dry season with scarcity of grass and water",
            "example": "Ol-ameiyu — Drought (Prolonged dry season with scarcity of grass and water)"
          }
        ],
        "sentences": [
          {
            "target": "Etaa enkop nanyori.",
            "source": "The land has become green."
          },
          {
            "target": "Enkai naisho iyiook enkishon.",
            "source": "It is God who gives us life and cattle."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-kukuu\" mean in English?",
            "correctAnswer": "Ashes",
            "options": [
              "Charcoal",
              "Forest / Bush",
              "Pasture / Grazing field",
              "Ashes"
            ],
            "hint": "Plural: in-kuk. Also en-guruoni (pl. in-guruon)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-gukuo\" mean in English?",
            "correctAnswer": "Charcoal",
            "options": [
              "Forest / Bush",
              "Pasture / Grazing field",
              "Charcoal",
              "Ashes"
            ],
            "hint": "Plural: in-guk"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-dim\" mean in English?",
            "correctAnswer": "Forest / Bush",
            "options": [
              "Pasture / Grazing field",
              "Forest / Bush",
              "Ashes",
              "Charcoal"
            ],
            "hint": "Plural: in-dimi. Woodland or wilderness (also o-sero)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Forest / Bush\" in Maasai (Maa)?",
            "correctAnswer": "En-dim",
            "options": [
              "En-dim",
              "En-kukuu",
              "En-gukuo",
              "E-shoo"
            ],
            "hint": "ehn-deem"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Pasture / Grazing field\" in Maasai (Maa)?",
            "correctAnswer": "E-shoo",
            "options": [
              "En-kukuu",
              "En-gukuo",
              "En-dim",
              "E-shoo"
            ],
            "hint": "eh-shoh-oh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Stone\" in Maasai (Maa)?",
            "correctAnswer": "O-soit",
            "options": [
              "En-gukuo",
              "En-dim",
              "O-soit",
              "En-kukuu"
            ],
            "hint": "oh-soh-eet"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "En-kukuu: Ashes, En-gukuo: Charcoal, En-dim: Forest / Bush, E-shoo: Pasture / Grazing field",
            "pairs": [
              {
                "left": "En-kukuu",
                "right": "Ashes"
              },
              {
                "left": "En-gukuo",
                "right": "Charcoal"
              },
              {
                "left": "En-dim",
                "right": "Forest / Bush"
              },
              {
                "left": "E-shoo",
                "right": "Pasture / Grazing field"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Ashes\" in Maasai (Maa).",
            "correctAnswer": "En-kukuu",
            "options": [
              "En-kukuu",
              "En-gukuo",
              "En-dim",
              "E-shoo"
            ],
            "hint": "ehn-koo-koo-oo"
          }
        ]
      },
      {
        "id": "maasai-exp-nature-4",
        "title": "Nature & Environment (Part 4)",
        "icon": "Sun",
        "description": "Master Maasai (Maa) nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Em-pusel' (Desert / Plain), 'En-tadegenya' (Morning), 'E-kenyu' (Dawn / Daybreak), 'En-aipirrie eng-olong' (Midday / Noon).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Em-pusel",
            "source": "Desert / Plain",
            "pronunciation": "ehm-poo-sehl",
            "hint": "Plural: im-puseli. Open arid savannah",
            "example": "Em-pusel — Desert / Plain (Plural: im-puseli. Open arid savannah)"
          },
          {
            "target": "En-tadegenya",
            "source": "Morning",
            "pronunciation": "ehn-tah-deh-gehn-yah",
            "hint": "Plural: in-tadegenyaritin",
            "example": "En-tadegenya — Morning (Plural: in-tadegenyaritin)"
          },
          {
            "target": "E-kenyu",
            "source": "Dawn / Daybreak",
            "pronunciation": "eh-kehn-yoo",
            "hint": "First morning light",
            "example": "E-kenyu — Dawn / Daybreak (First morning light)"
          },
          {
            "target": "En-aipirrie eng-olong",
            "source": "Midday / Noon",
            "pronunciation": "ehn-ah-ee-peer-ree-eh ehng-oh-lohng",
            "hint": "When the sun reaches zenith",
            "example": "En-aipirrie eng-olong — Midday / Noon (When the sun reaches zenith)"
          },
          {
            "target": "En-teiba",
            "source": "Evening",
            "pronunciation": "ehn-teh-ee-bah",
            "hint": "Time around sunset and dusk",
            "example": "En-teiba — Evening (Time around sunset and dusk)"
          },
          {
            "target": "En-kewarie",
            "source": "Night",
            "pronunciation": "ehn-keh-wah-ree-eh",
            "hint": "Plural: in-kewarieitin. Darkness of night",
            "example": "En-kewarie — Night (Plural: in-kewarieitin. Darkness of night)"
          },
          {
            "target": "Ol-ari",
            "source": "Season / Year",
            "pronunciation": "ohl-ah-ree",
            "hint": "Plural: il-arin. Annual calendar cycle",
            "example": "Ol-ari — Season / Year (Plural: il-arin. Annual calendar cycle)"
          },
          {
            "target": "Ol-tarakwai",
            "source": "Cedar tree",
            "pronunciation": "ohl-tah-rah-kwah-ee",
            "hint": "Plural: il-tarakwa. Sacred African pencil cedar",
            "example": "Ol-tarakwai — Cedar tree (Plural: il-tarakwa. Sacred African pencil cedar)"
          },
          {
            "target": "Ol-kiloriti",
            "source": "Acacia tree (red thorn)",
            "pronunciation": "ohl-kee-loh-ree-tee",
            "hint": "Vachellia nilotica / Acacia",
            "example": "Ol-kiloriti — Acacia tree (red thorn) (Vachellia nilotica / Acacia)"
          },
          {
            "target": "Ol-lerai",
            "source": "Acacia tree (fever tree)",
            "pronunciation": "ohl-leh-rah-ee",
            "hint": "Yellow-barked riparian acacia",
            "example": "Ol-lerai — Acacia tree (fever tree) (Yellow-barked riparian acacia)"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Em-pusel\" mean in English?",
            "correctAnswer": "Desert / Plain",
            "options": [
              "Morning",
              "Dawn / Daybreak",
              "Midday / Noon",
              "Desert / Plain"
            ],
            "hint": "Plural: im-puseli. Open arid savannah"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-tadegenya\" mean in English?",
            "correctAnswer": "Morning",
            "options": [
              "Dawn / Daybreak",
              "Midday / Noon",
              "Morning",
              "Desert / Plain"
            ],
            "hint": "Plural: in-tadegenyaritin"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"E-kenyu\" mean in English?",
            "correctAnswer": "Dawn / Daybreak",
            "options": [
              "Midday / Noon",
              "Dawn / Daybreak",
              "Desert / Plain",
              "Morning"
            ],
            "hint": "First morning light"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Dawn / Daybreak\" in Maasai (Maa)?",
            "correctAnswer": "E-kenyu",
            "options": [
              "E-kenyu",
              "Em-pusel",
              "En-tadegenya",
              "En-aipirrie eng-olong"
            ],
            "hint": "eh-kehn-yoo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Midday / Noon\" in Maasai (Maa)?",
            "correctAnswer": "En-aipirrie eng-olong",
            "options": [
              "Em-pusel",
              "En-tadegenya",
              "E-kenyu",
              "En-aipirrie eng-olong"
            ],
            "hint": "ehn-ah-ee-peer-ree-eh ehng-oh-lohng"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Evening\" in Maasai (Maa)?",
            "correctAnswer": "En-teiba",
            "options": [
              "En-tadegenya",
              "E-kenyu",
              "En-teiba",
              "Em-pusel"
            ],
            "hint": "ehn-teh-ee-bah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Em-pusel: Desert / Plain, En-tadegenya: Morning, E-kenyu: Dawn / Daybreak, En-aipirrie eng-olong: Midday / Noon",
            "pairs": [
              {
                "left": "Em-pusel",
                "right": "Desert / Plain"
              },
              {
                "left": "En-tadegenya",
                "right": "Morning"
              },
              {
                "left": "E-kenyu",
                "right": "Dawn / Daybreak"
              },
              {
                "left": "En-aipirrie eng-olong",
                "right": "Midday / Noon"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Desert / Plain\" in Maasai (Maa).",
            "correctAnswer": "Em-pusel",
            "options": [
              "Em-pusel",
              "En-tadegenya",
              "E-kenyu",
              "En-aipirrie eng-olong"
            ],
            "hint": "ehm-poo-sehl"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-11-body",
    "title": "Unit 11: Body Parts",
    "description": "Comprehensive Maasai (Maa) curriculum for Body Parts, vetted from Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
    "icon": "Heart",
    "skills": [
      {
        "id": "maasai-exp-body",
        "title": "Body Parts (Part 1)",
        "icon": "Heart",
        "description": "Master Maasai (Maa) body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'O-sesen' (Body), 'En-dokoya' (Head), 'Ol-babita' (Hair), 'Ol-daiga' (Warrior's braided hair).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "O-sesen",
            "source": "Body",
            "pronunciation": "oh-seh-sehn",
            "hint": "Plural: i-seseni",
            "example": "O-sesen — Body (Plural: i-seseni)"
          },
          {
            "target": "En-dokoya",
            "source": "Head",
            "pronunciation": "ehn-doh-koh-yah",
            "hint": "Plural: in-dokoyani. Also el-lugunya (pl. il-luguny)",
            "example": "En-dokoya — Head (Plural: in-dokoyani. Also el-lugunya (pl. il-luguny))"
          },
          {
            "target": "Ol-babita",
            "source": "Hair",
            "pronunciation": "ohl-bah-bee-tah",
            "hint": "Plural: il-babit. Hair of the head or body",
            "example": "Ol-babita — Hair (Plural: il-babit. Hair of the head or body)"
          },
          {
            "target": "Ol-daiga",
            "source": "Warrior's braided hair",
            "pronunciation": "ohl-dah-ee-gah",
            "hint": "Plural: il-daigan. Ochred warrior hair braids",
            "example": "Ol-daiga — Warrior's braided hair (Plural: il-daigan. Ochred warrior hair braids)"
          },
          {
            "target": "Eng-omom",
            "source": "Face",
            "pronunciation": "ehng-oh-mohm",
            "hint": "Plural: ing-omomite",
            "example": "Eng-omom — Face (Plural: ing-omomite)"
          },
          {
            "target": "Eng-ongu",
            "source": "Eye",
            "pronunciation": "ehng-ohng-goo",
            "hint": "Plural: ing-onyek. Organ of sight",
            "example": "Eng-ongu — Eye (Plural: ing-onyek. Organ of sight)"
          },
          {
            "target": "Ol-babit le'ngongu",
            "source": "Eyebrow",
            "pronunciation": "ohl-bah-beet leh-ngohng-goo",
            "hint": "Plural: i-suaten o'ngonyek",
            "example": "Ol-babit le'ngongu — Eyebrow (Plural: i-suaten o'ngonyek)"
          },
          {
            "target": "En-giok",
            "source": "Ear",
            "pronunciation": "ehn-gee-ohk",
            "hint": "Plural: in-giyaa",
            "example": "En-giok — Ear (Plural: in-giyaa)"
          },
          {
            "target": "E-segatua",
            "source": "Ear lobe",
            "pronunciation": "eh-seh-gah-too-ah",
            "hint": "Plural: i-segaruani. Traditionally elongated for beaded ornaments",
            "example": "E-segatua — Ear lobe (Plural: i-segaruani. Traditionally elongated for beaded ornaments)"
          },
          {
            "target": "En-gume",
            "source": "Nose",
            "pronunciation": "ehn-goo-meh",
            "hint": "Plural: in-gumeshi (fixed from corrupt entry)",
            "example": "En-gume — Nose (Plural: in-gumeshi (fixed from corrupt entry))"
          },
          {
            "target": "En-gotiek",
            "source": "Cheek",
            "pronunciation": "ehn-goh-tee-ehk",
            "hint": "Singular: en-dagola (pl. in-dagol / en-gotiek)",
            "example": "En-gotiek — Cheek (Singular: en-dagola (pl. in-dagol / en-gotiek))"
          },
          {
            "target": "En-gutuk",
            "source": "Mouth",
            "pronunciation": "ehn-goo-took",
            "hint": "Plural: in-gutukie",
            "example": "En-gutuk — Mouth (Plural: in-gutukie)"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"O-sesen\" mean in English?",
            "correctAnswer": "Body",
            "options": [
              "Head",
              "Hair",
              "Warrior's braided hair",
              "Body"
            ],
            "hint": "Plural: i-seseni"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-dokoya\" mean in English?",
            "correctAnswer": "Head",
            "options": [
              "Hair",
              "Warrior's braided hair",
              "Head",
              "Body"
            ],
            "hint": "Plural: in-dokoyani. Also el-lugunya (pl. il-luguny)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-babita\" mean in English?",
            "correctAnswer": "Hair",
            "options": [
              "Warrior's braided hair",
              "Hair",
              "Body",
              "Head"
            ],
            "hint": "Plural: il-babit. Hair of the head or body"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hair\" in Maasai (Maa)?",
            "correctAnswer": "Ol-babita",
            "options": [
              "Ol-babita",
              "O-sesen",
              "En-dokoya",
              "Ol-daiga"
            ],
            "hint": "ohl-bah-bee-tah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Warrior's braided hair\" in Maasai (Maa)?",
            "correctAnswer": "Ol-daiga",
            "options": [
              "O-sesen",
              "En-dokoya",
              "Ol-babita",
              "Ol-daiga"
            ],
            "hint": "ohl-dah-ee-gah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Face\" in Maasai (Maa)?",
            "correctAnswer": "Eng-omom",
            "options": [
              "En-dokoya",
              "Ol-babita",
              "Eng-omom",
              "O-sesen"
            ],
            "hint": "ehng-oh-mohm"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "O-sesen: Body, En-dokoya: Head, Ol-babita: Hair, Ol-daiga: Warrior's braided hair",
            "pairs": [
              {
                "left": "O-sesen",
                "right": "Body"
              },
              {
                "left": "En-dokoya",
                "right": "Head"
              },
              {
                "left": "Ol-babita",
                "right": "Hair"
              },
              {
                "left": "Ol-daiga",
                "right": "Warrior's braided hair"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Body\" in Maasai (Maa).",
            "correctAnswer": "O-sesen",
            "options": [
              "O-sesen",
              "En-dokoya",
              "Ol-babita",
              "Ol-daiga"
            ],
            "hint": "oh-seh-sehn"
          }
        ]
      },
      {
        "id": "maasai-exp-body-2",
        "title": "Body Parts (Part 2)",
        "icon": "Heart",
        "description": "Master Maasai (Maa) body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Eng-onito e'ngutuk' (Lip), 'Ol-alai' (Tooth), 'Ol-ngejep' (Tongue), 'Ol-bony' (Jaw / Chin).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Eng-onito e'ngutuk",
            "source": "Lip",
            "pronunciation": "ehng-oh-nee-toh eh-ngoo-took",
            "hint": "Plural: ing-onit",
            "example": "Eng-onito e'ngutuk — Lip (Plural: ing-onit)"
          },
          {
            "target": "Ol-alai",
            "source": "Tooth",
            "pronunciation": "ohl-ah-lah-ee",
            "hint": "Plural: il-ala",
            "example": "Ol-alai — Tooth (Plural: il-ala)"
          },
          {
            "target": "Ol-ngejep",
            "source": "Tongue",
            "pronunciation": "ohl-ngeh-jehp",
            "hint": "Plural: il-ngejepa",
            "example": "Ol-ngejep — Tongue (Plural: il-ngejepa)"
          },
          {
            "target": "Ol-bony",
            "source": "Jaw / Chin",
            "pronunciation": "ohl-bohny",
            "hint": "Plural: il-bonyo",
            "example": "Ol-bony — Jaw / Chin (Plural: il-bonyo)"
          },
          {
            "target": "Ol-munyei",
            "source": "Beard",
            "pronunciation": "ohl-moon-yeh-ee",
            "hint": "Plural: il-munyo. Elders' facial whiskers",
            "example": "Ol-munyei — Beard (Plural: il-munyo. Elders' facial whiskers)"
          },
          {
            "target": "E-murt",
            "source": "Neck",
            "pronunciation": "eh-moort",
            "hint": "Plural: i-murto",
            "example": "E-murt — Neck (Plural: i-murto)"
          },
          {
            "target": "Ol-gos",
            "source": "Throat",
            "pronunciation": "ohl-gohs",
            "hint": "Plural: il-goso",
            "example": "Ol-gos — Throat (Plural: il-goso)"
          },
          {
            "target": "Ol-oilelai",
            "source": "Shoulder",
            "pronunciation": "ohl-oh-ee-leh-lah-ee",
            "hint": "Plural: il-oilela. Also e-ronyi",
            "example": "Ol-oilelai — Shoulder (Plural: il-oilela. Also e-ronyi)"
          },
          {
            "target": "Ol-goo",
            "source": "Chest",
            "pronunciation": "ohl-goh-oh",
            "hint": "Plural: il-goite / il-goon. Anatomical chest / breast",
            "example": "Ol-goo — Chest (Plural: il-goite / il-goon. Anatomical chest / breast)"
          },
          {
            "target": "Ol-kina",
            "source": "Breasts (female)",
            "pronunciation": "ohl-kee-nah",
            "hint": "Plural: il-kii. Maternal breasts",
            "example": "Ol-kina — Breasts (female) (Plural: il-kii. Maternal breasts)"
          },
          {
            "target": "Ol-tau",
            "source": "Heart",
            "pronunciation": "ohl-tah-oo",
            "hint": "Plural: il-tauja. Center of soul, spirit, and emotion",
            "example": "Ol-tau — Heart (Plural: il-tauja. Center of soul, spirit, and emotion)"
          },
          {
            "target": "Eng-oshoke",
            "source": "Stomach / Abdomen",
            "pronunciation": "ehng-oh-shoh-keh",
            "hint": "Plural: ing-oshua. Also en-koshoke / en-giludye",
            "example": "Eng-oshoke — Stomach / Abdomen (Plural: ing-oshua. Also en-koshoke / en-giludye)"
          }
        ],
        "sentences": [
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          },
          {
            "target": "Eshomo inkera enkang'.",
            "source": "The children have gone to the homestead."
          },
          {
            "target": "Etaa enkop nanyori.",
            "source": "The land has become green."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eng-onito e'ngutuk\" mean in English?",
            "correctAnswer": "Lip",
            "options": [
              "Tooth",
              "Tongue",
              "Jaw / Chin",
              "Lip"
            ],
            "hint": "Plural: ing-onit"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-alai\" mean in English?",
            "correctAnswer": "Tooth",
            "options": [
              "Tongue",
              "Jaw / Chin",
              "Tooth",
              "Lip"
            ],
            "hint": "Plural: il-ala"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-ngejep\" mean in English?",
            "correctAnswer": "Tongue",
            "options": [
              "Jaw / Chin",
              "Tongue",
              "Lip",
              "Tooth"
            ],
            "hint": "Plural: il-ngejepa"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tongue\" in Maasai (Maa)?",
            "correctAnswer": "Ol-ngejep",
            "options": [
              "Ol-ngejep",
              "Eng-onito e'ngutuk",
              "Ol-alai",
              "Ol-bony"
            ],
            "hint": "ohl-ngeh-jehp"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Jaw / Chin\" in Maasai (Maa)?",
            "correctAnswer": "Ol-bony",
            "options": [
              "Eng-onito e'ngutuk",
              "Ol-alai",
              "Ol-ngejep",
              "Ol-bony"
            ],
            "hint": "ohl-bohny"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Beard\" in Maasai (Maa)?",
            "correctAnswer": "Ol-munyei",
            "options": [
              "Ol-alai",
              "Ol-ngejep",
              "Ol-munyei",
              "Eng-onito e'ngutuk"
            ],
            "hint": "ohl-moon-yeh-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Eng-onito e'ngutuk: Lip, Ol-alai: Tooth, Ol-ngejep: Tongue, Ol-bony: Jaw / Chin",
            "pairs": [
              {
                "left": "Eng-onito e'ngutuk",
                "right": "Lip"
              },
              {
                "left": "Ol-alai",
                "right": "Tooth"
              },
              {
                "left": "Ol-ngejep",
                "right": "Tongue"
              },
              {
                "left": "Ol-bony",
                "right": "Jaw / Chin"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Lip\" in Maasai (Maa).",
            "correctAnswer": "Eng-onito e'ngutuk",
            "options": [
              "Eng-onito e'ngutuk",
              "Ol-alai",
              "Ol-ngejep",
              "Ol-bony"
            ],
            "hint": "ehng-oh-nee-toh eh-ngoo-took"
          }
        ]
      },
      {
        "id": "maasai-exp-body-3",
        "title": "Body Parts (Part 3)",
        "icon": "Heart",
        "description": "Master Maasai (Maa) body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'O-sararua' (Navel), 'Eng-oriong' (Back), 'En-giji' (Spine / Backbone), 'Ol-arasi' (Rib).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "O-sararua",
            "source": "Navel",
            "pronunciation": "oh-sah-rah-roo-ah",
            "hint": "Plural: i-sararuani",
            "example": "O-sararua — Navel (Plural: i-sararuani)"
          },
          {
            "target": "Eng-oriong",
            "source": "Back",
            "pronunciation": "ehng-oh-ree-ohng",
            "hint": "Plural: ing-orongi / ing-oriongita. Anatomical back",
            "example": "Eng-oriong — Back (Plural: ing-orongi / ing-oriongita. Anatomical back)"
          },
          {
            "target": "En-giji",
            "source": "Spine / Backbone",
            "pronunciation": "ehn-gee-jee",
            "hint": "Vertebral column",
            "example": "En-giji — Spine / Backbone (Vertebral column)"
          },
          {
            "target": "Ol-arasi",
            "source": "Rib",
            "pronunciation": "ohl-ah-rah-see",
            "hint": "Plural: il-aras",
            "example": "Ol-arasi — Rib (Plural: il-aras)"
          },
          {
            "target": "Eng-aina",
            "source": "Arm / Hand",
            "pronunciation": "ehng-ah-ee-nah",
            "hint": "Plural: ing-aik. Arm or hand (also en-kaik)",
            "example": "Eng-aina — Arm / Hand (Plural: ing-aik. Arm or hand (also en-kaik))"
          },
          {
            "target": "En-dagule",
            "source": "Forearm",
            "pronunciation": "ehn-dah-goo-leh",
            "hint": "Plural: il-dagulen",
            "example": "En-dagule — Forearm (Plural: il-dagulen)"
          },
          {
            "target": "Ol-oidoloki",
            "source": "Elbow",
            "pronunciation": "ohl-oh-ee-doh-loh-kee",
            "hint": "Plural: il-oidolok",
            "example": "Ol-oidoloki — Elbow (Plural: il-oidolok)"
          },
          {
            "target": "E-robat e'ngaina",
            "source": "Wrist",
            "pronunciation": "eh-roh-baht eh-ngah-ee-nah",
            "hint": "Joint of the arm",
            "example": "E-robat e'ngaina — Wrist (Joint of the arm)"
          },
          {
            "target": "En-dap",
            "source": "Palm / Sole",
            "pronunciation": "ehn-dahp",
            "hint": "Plural: in-dapi. Palm of hand or sole of foot (fixed from corrupt title)",
            "example": "En-dap — Palm / Sole (Plural: in-dapi. Palm of hand or sole of foot (fixed from corrupt title))"
          },
          {
            "target": "Ol-kimojino",
            "source": "Finger",
            "pronunciation": "ohl-kee-moh-jee-noh",
            "hint": "Plural: il-kimojik",
            "example": "Ol-kimojino — Finger (Plural: il-kimojik)"
          },
          {
            "target": "Ol-kimojino sapok",
            "source": "Thumb",
            "pronunciation": "ohl-kee-moh-jee-noh sah-pohk",
            "hint": "Literally 'big finger'",
            "example": "Ol-kimojino sapok — Thumb (Literally 'big finger')"
          },
          {
            "target": "Ol-oisoto",
            "source": "Fingernail / Claw",
            "pronunciation": "ohl-oh-ee-soh-toh",
            "hint": "Plural: il-oisotok",
            "example": "Ol-oisoto — Fingernail / Claw (Plural: il-oisotok)"
          }
        ],
        "sentences": [
          {
            "target": "Etaa enkop nanyori.",
            "source": "The land has become green."
          },
          {
            "target": "Enkai naisho iyiook enkishon.",
            "source": "It is God who gives us life and cattle."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"O-sararua\" mean in English?",
            "correctAnswer": "Navel",
            "options": [
              "Back",
              "Spine / Backbone",
              "Rib",
              "Navel"
            ],
            "hint": "Plural: i-sararuani"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eng-oriong\" mean in English?",
            "correctAnswer": "Back",
            "options": [
              "Spine / Backbone",
              "Rib",
              "Back",
              "Navel"
            ],
            "hint": "Plural: ing-orongi / ing-oriongita. Anatomical back"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-giji\" mean in English?",
            "correctAnswer": "Spine / Backbone",
            "options": [
              "Rib",
              "Spine / Backbone",
              "Navel",
              "Back"
            ],
            "hint": "Vertebral column"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Spine / Backbone\" in Maasai (Maa)?",
            "correctAnswer": "En-giji",
            "options": [
              "En-giji",
              "O-sararua",
              "Eng-oriong",
              "Ol-arasi"
            ],
            "hint": "ehn-gee-jee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Rib\" in Maasai (Maa)?",
            "correctAnswer": "Ol-arasi",
            "options": [
              "O-sararua",
              "Eng-oriong",
              "En-giji",
              "Ol-arasi"
            ],
            "hint": "ohl-ah-rah-see"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Arm / Hand\" in Maasai (Maa)?",
            "correctAnswer": "Eng-aina",
            "options": [
              "Eng-oriong",
              "En-giji",
              "Eng-aina",
              "O-sararua"
            ],
            "hint": "ehng-ah-ee-nah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "O-sararua: Navel, Eng-oriong: Back, En-giji: Spine / Backbone, Ol-arasi: Rib",
            "pairs": [
              {
                "left": "O-sararua",
                "right": "Navel"
              },
              {
                "left": "Eng-oriong",
                "right": "Back"
              },
              {
                "left": "En-giji",
                "right": "Spine / Backbone"
              },
              {
                "left": "Ol-arasi",
                "right": "Rib"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Navel\" in Maasai (Maa).",
            "correctAnswer": "O-sararua",
            "options": [
              "O-sararua",
              "Eng-oriong",
              "En-giji",
              "Ol-arasi"
            ],
            "hint": "oh-sah-rah-roo-ah"
          }
        ]
      },
      {
        "id": "maasai-exp-body-4",
        "title": "Body Parts (Part 4)",
        "icon": "Heart",
        "description": "Master Maasai (Maa) body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'En-gubis' (Thigh), 'En-gungu' (Knee), 'Ol-oreshet' (Calf of leg), 'En-dudunyo' (Heel).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "En-gubis",
            "source": "Thigh",
            "pronunciation": "ehn-goo-bees",
            "hint": "Plural: in-gubisin. Upper leg",
            "example": "En-gubis — Thigh (Plural: in-gubisin. Upper leg)"
          },
          {
            "target": "En-gungu",
            "source": "Knee",
            "pronunciation": "ehn-goong-goo",
            "hint": "Plural: in-gung",
            "example": "En-gungu — Knee (Plural: in-gung)"
          },
          {
            "target": "Ol-oreshet",
            "source": "Calf of leg",
            "pronunciation": "ohl-oh-reh-sheht",
            "hint": "Plural: il-oresheta. Muscle of the lower leg (moved from animals category)",
            "example": "Ol-oreshet — Calf of leg (Plural: il-oresheta. Muscle of the lower leg (moved from animals category))"
          },
          {
            "target": "En-dudunyo",
            "source": "Heel",
            "pronunciation": "ehn-doo-doon-yoh",
            "hint": "Plural: in-duduny",
            "example": "En-dudunyo — Heel (Plural: in-duduny)"
          },
          {
            "target": "Ol-oiure",
            "source": "Ankle",
            "pronunciation": "ohl-oh-ee-oo-reh",
            "hint": "Plural: il-oiuri",
            "example": "Ol-oiure — Ankle (Plural: il-oiuri)"
          },
          {
            "target": "Ol-oito",
            "source": "Bone",
            "pronunciation": "ohl-oh-ee-toh",
            "hint": "Plural: il-oik",
            "example": "Ol-oito — Bone (Plural: il-oik)"
          },
          {
            "target": "O-sarge",
            "source": "Blood",
            "pronunciation": "oh-sahr-geh",
            "hint": "Plural: i-sargeta. Sacred living fluid",
            "example": "O-sarge — Blood (Plural: i-sargeta. Sacred living fluid)"
          },
          {
            "target": "Eng-ony",
            "source": "Blood vessel / Vein",
            "pronunciation": "ehng-ohny",
            "hint": "Plural: ing-onyo",
            "example": "Eng-ony — Blood vessel / Vein (Plural: ing-onyo)"
          },
          {
            "target": "En-joni",
            "source": "Skin / Hide",
            "pronunciation": "ehn-joh-nee",
            "hint": "Plural: in-jonito",
            "example": "En-joni — Skin / Hide (Plural: in-jonito)"
          },
          {
            "target": "E-muinyua",
            "source": "Liver",
            "pronunciation": "eh-moo-een-yoo-ah",
            "hint": "Plural: i-muinyuaishi",
            "example": "E-muinyua — Liver (Plural: i-muinyuaishi)"
          },
          {
            "target": "Ol-kipiei",
            "source": "Lung",
            "pronunciation": "ohl-kee-pee-eh-ee",
            "hint": "Plural: il-kipie",
            "example": "Ol-kipiei — Lung (Plural: il-kipie)"
          },
          {
            "target": "Ol-airakuji",
            "source": "Kidney",
            "pronunciation": "ohl-ah-ee-rah-koo-jee",
            "hint": "Plural: il-airakuj",
            "example": "Ol-airakuji — Kidney (Plural: il-airakuj)"
          },
          {
            "target": "Ol-gulet",
            "source": "Bladder",
            "pronunciation": "ohl-goo-leht",
            "hint": "Plural: il-guleti",
            "example": "Ol-gulet — Bladder (Plural: il-guleti)"
          },
          {
            "target": "E-monyita",
            "source": "Intestines / Entrails",
            "pronunciation": "eh-mohn-yee-tah",
            "hint": "Plural: i-monyit",
            "example": "E-monyita — Intestines / Entrails (Plural: i-monyit)"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-gubis\" mean in English?",
            "correctAnswer": "Thigh",
            "options": [
              "Knee",
              "Calf of leg",
              "Heel",
              "Thigh"
            ],
            "hint": "Plural: in-gubisin. Upper leg"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-gungu\" mean in English?",
            "correctAnswer": "Knee",
            "options": [
              "Calf of leg",
              "Heel",
              "Knee",
              "Thigh"
            ],
            "hint": "Plural: in-gung"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-oreshet\" mean in English?",
            "correctAnswer": "Calf of leg",
            "options": [
              "Heel",
              "Calf of leg",
              "Thigh",
              "Knee"
            ],
            "hint": "Plural: il-oresheta. Muscle of the lower leg (moved from animals category)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Calf of leg\" in Maasai (Maa)?",
            "correctAnswer": "Ol-oreshet",
            "options": [
              "Ol-oreshet",
              "En-gubis",
              "En-gungu",
              "En-dudunyo"
            ],
            "hint": "ohl-oh-reh-sheht"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Heel\" in Maasai (Maa)?",
            "correctAnswer": "En-dudunyo",
            "options": [
              "En-gubis",
              "En-gungu",
              "Ol-oreshet",
              "En-dudunyo"
            ],
            "hint": "ehn-doo-doon-yoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ankle\" in Maasai (Maa)?",
            "correctAnswer": "Ol-oiure",
            "options": [
              "En-gungu",
              "Ol-oreshet",
              "Ol-oiure",
              "En-gubis"
            ],
            "hint": "ohl-oh-ee-oo-reh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "En-gubis: Thigh, En-gungu: Knee, Ol-oreshet: Calf of leg, En-dudunyo: Heel",
            "pairs": [
              {
                "left": "En-gubis",
                "right": "Thigh"
              },
              {
                "left": "En-gungu",
                "right": "Knee"
              },
              {
                "left": "Ol-oreshet",
                "right": "Calf of leg"
              },
              {
                "left": "En-dudunyo",
                "right": "Heel"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Thigh\" in Maasai (Maa).",
            "correctAnswer": "En-gubis",
            "options": [
              "En-gubis",
              "En-gungu",
              "Ol-oreshet",
              "En-dudunyo"
            ],
            "hint": "ehn-goo-bees"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-12-food",
    "title": "Unit 12: Food & Drink",
    "description": "Comprehensive Maasai (Maa) curriculum for Food & Drink, vetted from Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
    "icon": "Utensils",
    "skills": [
      {
        "id": "maasai-exp-food",
        "title": "Food & Drink (Part 1)",
        "icon": "Utensils",
        "description": "Master Maasai (Maa) food & drink vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Food & Drink, pay special attention to pronunciation and morphological prefixes/suffixes: 'Kule na-irowua' (Fresh milk), 'Kule na-oto' (Sour / Fermented milk), 'En-kiring'o' (Meat), 'En-kiring'o na-peji' (Roast meat).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Kule na-irowua",
            "source": "Fresh milk",
            "pronunciation": "koo-leh nah-ee-roh-woo-ah",
            "hint": "Warm, sweet milk fresh from milking",
            "example": "Kule na-irowua — Fresh milk (Warm, sweet milk fresh from milking)"
          },
          {
            "target": "Kule na-oto",
            "source": "Sour / Fermented milk",
            "pronunciation": "koo-leh nah-oh-toh",
            "hint": "Curdled milk seasoned in smoke-cured calabashes",
            "example": "Kule na-oto — Sour / Fermented milk (Curdled milk seasoned in smoke-cured calabashes)"
          },
          {
            "target": "En-kiring'o",
            "source": "Meat",
            "pronunciation": "ehn-kee-reeng-oh",
            "hint": "Plural: in-kiri (Richmond: en-giringo). Beef, mutton, or goat meat",
            "example": "En-kiring'o — Meat (Plural: in-kiri (Richmond: en-giringo). Beef, mutton, or goat meat)"
          },
          {
            "target": "En-kiring'o na-peji",
            "source": "Roast meat",
            "pronunciation": "ehn-kee-reeng-oh nah-peh-jee",
            "hint": "Meat roasted over open wood embers",
            "example": "En-kiring'o na-peji — Roast meat (Meat roasted over open wood embers)"
          },
          {
            "target": "E-saroi",
            "source": "Milk and blood beverage",
            "pronunciation": "eh-sah-roh-ee",
            "hint": "Traditional energizing drink for warriors and recuperating mothers",
            "example": "E-saroi — Milk and blood beverage (Traditional energizing drink for warriors and recuperating mothers)"
          },
          {
            "target": "E-motori",
            "source": "Medicinal broth / Soup",
            "pronunciation": "eh-moh-toh-ree",
            "hint": "Nutritious herbal soup prepared with roots and bark",
            "example": "E-motori — Medicinal broth / Soup (Nutritious herbal soup prepared with roots and bark)"
          },
          {
            "target": "E-ilata",
            "source": "Animal fat / Tallow",
            "pronunciation": "eh-ee-lah-tah",
            "hint": "Plural: i-ila. Rendered fat used in cooking and body conditioning (fixed from corrupt 'v.' entry)",
            "example": "E-ilata — Animal fat / Tallow (Plural: i-ila. Rendered fat used in cooking and body conditioning (fixed from corrupt 'v.' entry))"
          },
          {
            "target": "Eng-orno",
            "source": "Butter",
            "pronunciation": "ehng-ohr-noh",
            "hint": "Plural: ing-orn. Churned cow butter",
            "example": "Eng-orno — Butter (Plural: ing-orn. Churned cow butter)"
          },
          {
            "target": "Ol-osho",
            "source": "Flour / Meal",
            "pronunciation": "ohl-oh-shoh",
            "hint": "Plural: il-oshon. Also en-guruma (maize flour)",
            "example": "Ol-osho — Flour / Meal (Plural: il-oshon. Also en-guruma (maize flour))"
          },
          {
            "target": "En-daa",
            "source": "Food",
            "pronunciation": "ehn-dah-ah",
            "hint": "Plural: in-daiki. General sustenance",
            "example": "En-daa — Food (Plural: in-daiki. General sustenance)"
          },
          {
            "target": "Ol-paiki",
            "source": "Maize / Corn",
            "pronunciation": "ohl-pah-ee-kee",
            "hint": "Plural: il-paik. Grain maize",
            "example": "Ol-paiki — Maize / Corn (Plural: il-paik. Grain maize)"
          },
          {
            "target": "En-aisho",
            "source": "Honey",
            "pronunciation": "ehn-ah-ee-shoh",
            "hint": "Raw wild honey prized for energy, ceremonies, and brewing",
            "example": "En-aisho — Honey (Raw wild honey prized for energy, ceremonies, and brewing)"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kule na-irowua\" mean in English?",
            "correctAnswer": "Fresh milk",
            "options": [
              "Sour / Fermented milk",
              "Meat",
              "Roast meat",
              "Fresh milk"
            ],
            "hint": "Warm, sweet milk fresh from milking"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kule na-oto\" mean in English?",
            "correctAnswer": "Sour / Fermented milk",
            "options": [
              "Meat",
              "Roast meat",
              "Sour / Fermented milk",
              "Fresh milk"
            ],
            "hint": "Curdled milk seasoned in smoke-cured calabashes"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-kiring'o\" mean in English?",
            "correctAnswer": "Meat",
            "options": [
              "Roast meat",
              "Meat",
              "Fresh milk",
              "Sour / Fermented milk"
            ],
            "hint": "Plural: in-kiri (Richmond: en-giringo). Beef, mutton, or goat meat"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Meat\" in Maasai (Maa)?",
            "correctAnswer": "En-kiring'o",
            "options": [
              "En-kiring'o",
              "Kule na-irowua",
              "Kule na-oto",
              "En-kiring'o na-peji"
            ],
            "hint": "ehn-kee-reeng-oh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Roast meat\" in Maasai (Maa)?",
            "correctAnswer": "En-kiring'o na-peji",
            "options": [
              "Kule na-irowua",
              "Kule na-oto",
              "En-kiring'o",
              "En-kiring'o na-peji"
            ],
            "hint": "ehn-kee-reeng-oh nah-peh-jee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Milk and blood beverage\" in Maasai (Maa)?",
            "correctAnswer": "E-saroi",
            "options": [
              "Kule na-oto",
              "En-kiring'o",
              "E-saroi",
              "Kule na-irowua"
            ],
            "hint": "eh-sah-roh-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Kule na-irowua: Fresh milk, Kule na-oto: Sour / Fermented milk, En-kiring'o: Meat, En-kiring'o na-peji: Roast meat",
            "pairs": [
              {
                "left": "Kule na-irowua",
                "right": "Fresh milk"
              },
              {
                "left": "Kule na-oto",
                "right": "Sour / Fermented milk"
              },
              {
                "left": "En-kiring'o",
                "right": "Meat"
              },
              {
                "left": "En-kiring'o na-peji",
                "right": "Roast meat"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Fresh milk\" in Maasai (Maa).",
            "correctAnswer": "Kule na-irowua",
            "options": [
              "Kule na-irowua",
              "Kule na-oto",
              "En-kiring'o",
              "En-kiring'o na-peji"
            ],
            "hint": "koo-leh nah-ee-roh-woo-ah"
          }
        ]
      },
      {
        "id": "maasai-exp-food-2",
        "title": "Food & Drink (Part 2)",
        "icon": "Utensils",
        "description": "Master Maasai (Maa) food & drink vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Food & Drink, pay special attention to pronunciation and morphological prefixes/suffixes: 'En-koroma' (Porridge), 'E-makat' (Salt), 'E-mala' (Milk calabash / Gourd), 'Ol-guguri' (Small milk gourd).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "En-koroma",
            "source": "Porridge",
            "pronunciation": "ehn-koh-roh-mah",
            "hint": "Cooked flour porridge (also porrigi)",
            "example": "En-koroma — Porridge (Cooked flour porridge (also porrigi))"
          },
          {
            "target": "E-makat",
            "source": "Salt",
            "pronunciation": "eh-mah-kaht",
            "hint": "Plural: i-makati. Mineral salt",
            "example": "E-makat — Salt (Plural: i-makati. Mineral salt)"
          },
          {
            "target": "E-mala",
            "source": "Milk calabash / Gourd",
            "pronunciation": "eh-mah-lah",
            "hint": "Plural: i-malasin. Large calabash cured with embers of the oloirien tree",
            "example": "E-mala — Milk calabash / Gourd (Plural: i-malasin. Large calabash cured with embers of the oloirien tree)"
          },
          {
            "target": "Ol-guguri",
            "source": "Small milk gourd",
            "pronunciation": "ohl-goo-goo-ree",
            "hint": "Plural: il-guguri. Individual carrying gourd",
            "example": "Ol-guguri — Small milk gourd (Plural: il-guguri. Individual carrying gourd)"
          },
          {
            "target": "E-moti",
            "source": "Cooking pot",
            "pronunciation": "eh-moh-tee",
            "hint": "Plural: i-motio. Earthenware or iron pot",
            "example": "E-moti — Cooking pot (Plural: i-motio. Earthenware or iron pot)"
          },
          {
            "target": "En-gure",
            "source": "Thirst",
            "pronunciation": "ehn-goo-reh",
            "hint": "Need for water",
            "example": "En-gure — Thirst (Need for water)"
          }
        ],
        "sentences": [
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          },
          {
            "target": "Eshomo inkera enkang'.",
            "source": "The children have gone to the homestead."
          },
          {
            "target": "Etaa enkop nanyori.",
            "source": "The land has become green."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-koroma\" mean in English?",
            "correctAnswer": "Porridge",
            "options": [
              "Salt",
              "Milk calabash / Gourd",
              "Small milk gourd",
              "Porridge"
            ],
            "hint": "Cooked flour porridge (also porrigi)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"E-makat\" mean in English?",
            "correctAnswer": "Salt",
            "options": [
              "Milk calabash / Gourd",
              "Small milk gourd",
              "Salt",
              "Porridge"
            ],
            "hint": "Plural: i-makati. Mineral salt"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"E-mala\" mean in English?",
            "correctAnswer": "Milk calabash / Gourd",
            "options": [
              "Small milk gourd",
              "Milk calabash / Gourd",
              "Porridge",
              "Salt"
            ],
            "hint": "Plural: i-malasin. Large calabash cured with embers of the oloirien tree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Milk calabash / Gourd\" in Maasai (Maa)?",
            "correctAnswer": "E-mala",
            "options": [
              "E-mala",
              "En-koroma",
              "E-makat",
              "Ol-guguri"
            ],
            "hint": "eh-mah-lah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Small milk gourd\" in Maasai (Maa)?",
            "correctAnswer": "Ol-guguri",
            "options": [
              "En-koroma",
              "E-makat",
              "E-mala",
              "Ol-guguri"
            ],
            "hint": "ohl-goo-goo-ree"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cooking pot\" in Maasai (Maa)?",
            "correctAnswer": "E-moti",
            "options": [
              "E-makat",
              "E-mala",
              "E-moti",
              "En-koroma"
            ],
            "hint": "eh-moh-tee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "En-koroma: Porridge, E-makat: Salt, E-mala: Milk calabash / Gourd, Ol-guguri: Small milk gourd",
            "pairs": [
              {
                "left": "En-koroma",
                "right": "Porridge"
              },
              {
                "left": "E-makat",
                "right": "Salt"
              },
              {
                "left": "E-mala",
                "right": "Milk calabash / Gourd"
              },
              {
                "left": "Ol-guguri",
                "right": "Small milk gourd"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Porridge\" in Maasai (Maa).",
            "correctAnswer": "En-koroma",
            "options": [
              "En-koroma",
              "E-makat",
              "E-mala",
              "Ol-guguri"
            ],
            "hint": "ehn-koh-roh-mah"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-13-family",
    "title": "Unit 13: Family & Society",
    "description": "Comprehensive Maasai (Maa) curriculum for Family & Society, vetted from Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
    "icon": "Users",
    "skills": [
      {
        "id": "maasai-exp-family",
        "title": "Family & Society (Part 1)",
        "icon": "Users",
        "description": "Master Maasai (Maa) family & society vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Family & Society, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ol-moruo' (Old man / Senior elder), 'En-tasat' (Old woman), 'En-tomononi' (Woman / Mother), 'En-dito' (Girl / Young maiden).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Ol-moruo",
            "source": "Old man / Senior elder",
            "pronunciation": "ohl-moh-roo-oh",
            "hint": "Plural: il-moruak. Sage elder of the council",
            "example": "Ol-moruo — Old man / Senior elder (Plural: il-moruak. Sage elder of the council)"
          },
          {
            "target": "En-tasat",
            "source": "Old woman",
            "pronunciation": "ehn-tah-saht",
            "hint": "Plural: in-tasati. Respected senior matriarch",
            "example": "En-tasat — Old woman (Plural: in-tasati. Respected senior matriarch)"
          },
          {
            "target": "En-tomononi",
            "source": "Woman / Mother",
            "pronunciation": "ehn-toh-moh-noh-nee",
            "hint": "Plural: in-tomonok. Married woman with children",
            "example": "En-tomononi — Woman / Mother (Plural: in-tomonok. Married woman with children)"
          },
          {
            "target": "En-dito",
            "source": "Girl / Young maiden",
            "pronunciation": "ehn-dee-toh",
            "hint": "Plural: in-doiye. Uncircumcised young woman",
            "example": "En-dito — Girl / Young maiden (Plural: in-doiye. Uncircumcised young woman)"
          },
          {
            "target": "En-kerai kiti",
            "source": "Baby / Infant",
            "pronunciation": "ehn-keh-rah-ee kee-tee",
            "hint": "Little child / infant. Also en-katurana",
            "example": "En-kerai kiti — Baby / Infant (Little child / infant. Also en-katurana)"
          },
          {
            "target": "Ol-murani",
            "source": "Warrior",
            "pronunciation": "ohl-moo-rah-nee",
            "hint": "Plural: il-muran. Member of the warrior age-set (moran)",
            "example": "Ol-murani — Warrior (Plural: il-muran. Member of the warrior age-set (moran))"
          },
          {
            "target": "Ol-bornoti",
            "source": "Junior warrior",
            "pronunciation": "ohl-bohr-noh-tee",
            "hint": "Newly initiated warrior",
            "example": "Ol-bornoti — Junior warrior (Newly initiated warrior)"
          },
          {
            "target": "Ol-le-seriani",
            "source": "Friend / Peaceful ally",
            "pronunciation": "ohl-leh-seh-ree-ah-nee",
            "hint": "Literally 'man of peace'. Also ol-jore (pl. il-jorueta) or ol-enjola",
            "example": "Ol-le-seriani — Friend / Peaceful ally (Literally 'man of peace'. Also ol-jore (pl. il-jorueta) or ol-enjola)"
          },
          {
            "target": "Ol-lee",
            "source": "Man / Male",
            "pronunciation": "ohl-leh-eh",
            "hint": "Plural: il-lewa. Adult male",
            "example": "Ol-lee — Man / Male (Plural: il-lewa. Adult male)"
          },
          {
            "target": "Eng-aini",
            "source": "Co-wife / Second wife",
            "pronunciation": "ehng-ah-ee-nee",
            "hint": "Second wife in a polygynous boma",
            "example": "Eng-aini — Co-wife / Second wife (Second wife in a polygynous boma)"
          },
          {
            "target": "Ol-akwi",
            "source": "Grandfather",
            "pronunciation": "ohl-ah-kwee",
            "hint": "Plural: il-akwiak",
            "example": "Ol-akwi — Grandfather (Plural: il-akwiak)"
          },
          {
            "target": "Eng-ogho",
            "source": "Grandmother",
            "pronunciation": "ehng-oh-goh",
            "hint": "Plural: ing-oghoi",
            "example": "Eng-ogho — Grandmother (Plural: ing-oghoi)"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-moruo\" mean in English?",
            "correctAnswer": "Old man / Senior elder",
            "options": [
              "Old woman",
              "Woman / Mother",
              "Girl / Young maiden",
              "Old man / Senior elder"
            ],
            "hint": "Plural: il-moruak. Sage elder of the council"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-tasat\" mean in English?",
            "correctAnswer": "Old woman",
            "options": [
              "Woman / Mother",
              "Girl / Young maiden",
              "Old woman",
              "Old man / Senior elder"
            ],
            "hint": "Plural: in-tasati. Respected senior matriarch"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-tomononi\" mean in English?",
            "correctAnswer": "Woman / Mother",
            "options": [
              "Girl / Young maiden",
              "Woman / Mother",
              "Old man / Senior elder",
              "Old woman"
            ],
            "hint": "Plural: in-tomonok. Married woman with children"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Woman / Mother\" in Maasai (Maa)?",
            "correctAnswer": "En-tomononi",
            "options": [
              "En-tomononi",
              "Ol-moruo",
              "En-tasat",
              "En-dito"
            ],
            "hint": "ehn-toh-moh-noh-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Girl / Young maiden\" in Maasai (Maa)?",
            "correctAnswer": "En-dito",
            "options": [
              "Ol-moruo",
              "En-tasat",
              "En-tomononi",
              "En-dito"
            ],
            "hint": "ehn-dee-toh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Baby / Infant\" in Maasai (Maa)?",
            "correctAnswer": "En-kerai kiti",
            "options": [
              "En-tasat",
              "En-tomononi",
              "En-kerai kiti",
              "Ol-moruo"
            ],
            "hint": "ehn-keh-rah-ee kee-tee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Ol-moruo: Old man / Senior elder, En-tasat: Old woman, En-tomononi: Woman / Mother, En-dito: Girl / Young maiden",
            "pairs": [
              {
                "left": "Ol-moruo",
                "right": "Old man / Senior elder"
              },
              {
                "left": "En-tasat",
                "right": "Old woman"
              },
              {
                "left": "En-tomononi",
                "right": "Woman / Mother"
              },
              {
                "left": "En-dito",
                "right": "Girl / Young maiden"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Old man / Senior elder\" in Maasai (Maa).",
            "correctAnswer": "Ol-moruo",
            "options": [
              "Ol-moruo",
              "En-tasat",
              "En-tomononi",
              "En-dito"
            ],
            "hint": "ohl-moh-roo-oh"
          }
        ]
      },
      {
        "id": "maasai-exp-family-2",
        "title": "Family & Society (Part 2)",
        "icon": "Users",
        "description": "Master Maasai (Maa) family & society vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Family & Society, pay special attention to pronunciation and morphological prefixes/suffixes: 'En-kerai o'ltoiyu' (Grandchild), 'Ol-apulaiyani' (Uncle), 'Eng-apulaiyani' (Aunt), 'Ol-aputani' (Father-in-law).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "En-kerai o'ltoiyu",
            "source": "Grandchild",
            "pronunciation": "ehn-keh-rah-ee ohl-toh-ee-yoo",
            "hint": "Child of one's offspring",
            "example": "En-kerai o'ltoiyu — Grandchild (Child of one's offspring)"
          },
          {
            "target": "Ol-apulaiyani",
            "source": "Uncle",
            "pronunciation": "ohl-ah-poo-lah-ee-yah-nee",
            "hint": "Plural: il-apulaiyak. Maternal uncle",
            "example": "Ol-apulaiyani — Uncle (Plural: il-apulaiyak. Maternal uncle)"
          },
          {
            "target": "Eng-apulaiyani",
            "source": "Aunt",
            "pronunciation": "ehng-ah-poo-lah-ee-yah-nee",
            "hint": "Plural: ing-apulaiyak. Paternal/maternal aunt",
            "example": "Eng-apulaiyani — Aunt (Plural: ing-apulaiyak. Paternal/maternal aunt)"
          },
          {
            "target": "Ol-aputani",
            "source": "Father-in-law",
            "pronunciation": "ohl-ah-poo-tah-nee",
            "hint": "Plural: il-aputak. Male in-law",
            "example": "Ol-aputani — Father-in-law (Plural: il-aputak. Male in-law)"
          },
          {
            "target": "Eng-aputani",
            "source": "Mother-in-law",
            "pronunciation": "ehng-ah-poo-tah-nee",
            "hint": "Plural: ing-aputak. Female in-law",
            "example": "Eng-aputani — Mother-in-law (Plural: ing-aputak. Female in-law)"
          },
          {
            "target": "Ol-marei",
            "source": "Family / Household",
            "pronunciation": "ohl-mah-reh-ee",
            "hint": "Plural: il-mareita. Domestic family unit",
            "example": "Ol-marei — Family / Household (Plural: il-mareita. Domestic family unit)"
          },
          {
            "target": "En-gishomi",
            "source": "Clan",
            "pronunciation": "ehn-gee-shoh-mee",
            "hint": "Plural: in-gishomin. Clan line, literally 'gateway of the kraal'",
            "example": "En-gishomi — Clan (Plural: in-gishomin. Clan line, literally 'gateway of the kraal')"
          },
          {
            "target": "E-manyatta",
            "source": "Warrior village",
            "pronunciation": "eh-mahn-yaht-tah",
            "hint": "Plural: i-manyat. Specialized camp for morans during training",
            "example": "E-manyatta — Warrior village (Plural: i-manyat. Specialized camp for morans during training)"
          },
          {
            "target": "En-kerai o'kishin",
            "source": "Orphan",
            "pronunciation": "ehn-keh-rah-ee oh-kee-sheen",
            "hint": "Child without living parents",
            "example": "En-kerai o'kishin — Orphan (Child without living parents)"
          },
          {
            "target": "Eng-apiani",
            "source": "Widow",
            "pronunciation": "ehng-ah-pee-ah-nee",
            "hint": "Plural: ing-apiak",
            "example": "Eng-apiani — Widow (Plural: ing-apiak)"
          },
          {
            "target": "En-giama",
            "source": "Marriage",
            "pronunciation": "ehn-gee-ah-mah",
            "hint": "Plural: in-giamat. Marital alliance uniting families",
            "example": "En-giama — Marriage (Plural: in-giamat. Marital alliance uniting families)"
          }
        ],
        "sentences": [
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          },
          {
            "target": "Eshomo inkera enkang'.",
            "source": "The children have gone to the homestead."
          },
          {
            "target": "Etaa enkop nanyori.",
            "source": "The land has become green."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-kerai o'ltoiyu\" mean in English?",
            "correctAnswer": "Grandchild",
            "options": [
              "Uncle",
              "Aunt",
              "Father-in-law",
              "Grandchild"
            ],
            "hint": "Child of one's offspring"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-apulaiyani\" mean in English?",
            "correctAnswer": "Uncle",
            "options": [
              "Aunt",
              "Father-in-law",
              "Uncle",
              "Grandchild"
            ],
            "hint": "Plural: il-apulaiyak. Maternal uncle"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eng-apulaiyani\" mean in English?",
            "correctAnswer": "Aunt",
            "options": [
              "Father-in-law",
              "Aunt",
              "Grandchild",
              "Uncle"
            ],
            "hint": "Plural: ing-apulaiyak. Paternal/maternal aunt"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Aunt\" in Maasai (Maa)?",
            "correctAnswer": "Eng-apulaiyani",
            "options": [
              "Eng-apulaiyani",
              "En-kerai o'ltoiyu",
              "Ol-apulaiyani",
              "Ol-aputani"
            ],
            "hint": "ehng-ah-poo-lah-ee-yah-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Father-in-law\" in Maasai (Maa)?",
            "correctAnswer": "Ol-aputani",
            "options": [
              "En-kerai o'ltoiyu",
              "Ol-apulaiyani",
              "Eng-apulaiyani",
              "Ol-aputani"
            ],
            "hint": "ohl-ah-poo-tah-nee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Mother-in-law\" in Maasai (Maa)?",
            "correctAnswer": "Eng-aputani",
            "options": [
              "Ol-apulaiyani",
              "Eng-apulaiyani",
              "Eng-aputani",
              "En-kerai o'ltoiyu"
            ],
            "hint": "ehng-ah-poo-tah-nee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "En-kerai o'ltoiyu: Grandchild, Ol-apulaiyani: Uncle, Eng-apulaiyani: Aunt, Ol-aputani: Father-in-law",
            "pairs": [
              {
                "left": "En-kerai o'ltoiyu",
                "right": "Grandchild"
              },
              {
                "left": "Ol-apulaiyani",
                "right": "Uncle"
              },
              {
                "left": "Eng-apulaiyani",
                "right": "Aunt"
              },
              {
                "left": "Ol-aputani",
                "right": "Father-in-law"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Grandchild\" in Maasai (Maa).",
            "correctAnswer": "En-kerai o'ltoiyu",
            "options": [
              "En-kerai o'ltoiyu",
              "Ol-apulaiyani",
              "Eng-apulaiyani",
              "Ol-aputani"
            ],
            "hint": "ehn-keh-rah-ee ohl-toh-ee-yoo"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-14-warfare",
    "title": "Unit 14: Warfare & Weapons",
    "description": "Comprehensive Maasai (Maa) curriculum for Warfare & Weapons, vetted from Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
    "icon": "Shield",
    "skills": [
      {
        "id": "maasai-exp-warfare",
        "title": "Warfare & Weapons (Part 1)",
        "icon": "Shield",
        "description": "Master Maasai (Maa) warfare & weapons vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Warfare & Weapons, pay special attention to pronunciation and morphological prefixes/suffixes: 'E-remet' (Spear), 'Ol-ngorat' (Spear butt / counterweight), 'E-long'o' (War shield), 'Ol-alem' (Short sword).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "E-remet",
            "source": "Spear",
            "pronunciation": "eh-reh-meht",
            "hint": "Plural: i-remeta. Long heavy spear carried by morans",
            "example": "E-remet — Spear (Plural: i-remeta. Long heavy spear carried by morans)"
          },
          {
            "target": "Ol-ngorat",
            "source": "Spear butt / counterweight",
            "pronunciation": "ohl-ngoh-raht",
            "hint": "Spiked iron base of spear used to stand it upright in earth",
            "example": "Ol-ngorat — Spear butt / counterweight (Spiked iron base of spear used to stand it upright in earth)"
          },
          {
            "target": "E-long'o",
            "source": "War shield",
            "pronunciation": "eh-lohng-goh",
            "hint": "Plural: i-long'oi. Buffalo-hide shield with heraldic clan markings",
            "example": "E-long'o — War shield (Plural: i-long'oi. Buffalo-hide shield with heraldic clan markings)"
          },
          {
            "target": "Ol-alem",
            "source": "Short sword",
            "pronunciation": "ohl-ah-lehm",
            "hint": "Plural: il-alema. Double-edged warrior broadsword (simi)",
            "example": "Ol-alem — Short sword (Plural: il-alema. Double-edged warrior broadsword (simi))"
          },
          {
            "target": "En-jashur",
            "source": "Sword scabbard / Sheath",
            "pronunciation": "ehn-jah-shoor",
            "hint": "Plural: in-jashurin. Red ochred leather sheath worn at hip",
            "example": "En-jashur — Sword scabbard / Sheath (Plural: in-jashurin. Red ochred leather sheath worn at hip)"
          },
          {
            "target": "Ol-kuma",
            "source": "War club / Knobkerrie",
            "pronunciation": "ohl-koo-mah",
            "hint": "Plural: il-kuman. Hardwood throwing or striking club (rungu)",
            "example": "Ol-kuma — War club / Knobkerrie (Plural: il-kuman. Hardwood throwing or striking club (rungu))"
          },
          {
            "target": "Eng-auo",
            "source": "Archery bow",
            "pronunciation": "ehng-ah-woo-oh",
            "hint": "Plural: ing-ai. Traditional hunting and defensive bow",
            "example": "Eng-auo — Archery bow (Plural: ing-ai. Traditional hunting and defensive bow)"
          },
          {
            "target": "Em-bae",
            "source": "Arrow",
            "pronunciation": "ehm-bah-eh",
            "hint": "Plural: im-baa. Arrow with poisoned tip or iron point",
            "example": "Em-bae — Arrow (Plural: im-baa. Arrow with poisoned tip or iron point)"
          },
          {
            "target": "Ol-ngoreta",
            "source": "Blocked bleeding arrow",
            "pronunciation": "ohl-ngoh-reh-tah",
            "hint": "Plural: il-ngoret. Blunt-shouldered arrow for tapping cattle blood",
            "example": "Ol-ngoreta — Blocked bleeding arrow (Plural: il-ngoret. Blunt-shouldered arrow for tapping cattle blood)"
          },
          {
            "target": "En-gidong",
            "source": "Quiver",
            "pronunciation": "ehn-gee-dohng",
            "hint": "Plural: in-gidongi. Leather arrow-case",
            "example": "En-gidong — Quiver (Plural: in-gidongi. Leather arrow-case)"
          },
          {
            "target": "Ol-mairutye",
            "source": "Ostrich feather headdress",
            "pronunciation": "ohl-mah-ee-roo-tyeh",
            "hint": "Plural: il-mairutien. Tall warrior headdress worn into battle",
            "example": "Ol-mairutye — Ostrich feather headdress (Plural: il-mairutien. Tall warrior headdress worn into battle)"
          },
          {
            "target": "Ol-lawaru",
            "source": "Lion mane war headdress",
            "pronunciation": "ohl-lah-wah-roo",
            "hint": "Prized headdress worn only by morans who slew a lion single-handed",
            "example": "Ol-lawaru — Lion mane war headdress (Prized headdress worn only by morans who slew a lion single-handed)"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"E-remet\" mean in English?",
            "correctAnswer": "Spear",
            "options": [
              "Spear butt / counterweight",
              "War shield",
              "Short sword",
              "Spear"
            ],
            "hint": "Plural: i-remeta. Long heavy spear carried by morans"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ol-ngorat\" mean in English?",
            "correctAnswer": "Spear butt / counterweight",
            "options": [
              "War shield",
              "Short sword",
              "Spear butt / counterweight",
              "Spear"
            ],
            "hint": "Spiked iron base of spear used to stand it upright in earth"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"E-long'o\" mean in English?",
            "correctAnswer": "War shield",
            "options": [
              "Short sword",
              "War shield",
              "Spear",
              "Spear butt / counterweight"
            ],
            "hint": "Plural: i-long'oi. Buffalo-hide shield with heraldic clan markings"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"War shield\" in Maasai (Maa)?",
            "correctAnswer": "E-long'o",
            "options": [
              "E-long'o",
              "E-remet",
              "Ol-ngorat",
              "Ol-alem"
            ],
            "hint": "eh-lohng-goh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Short sword\" in Maasai (Maa)?",
            "correctAnswer": "Ol-alem",
            "options": [
              "E-remet",
              "Ol-ngorat",
              "E-long'o",
              "Ol-alem"
            ],
            "hint": "ohl-ah-lehm"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sword scabbard / Sheath\" in Maasai (Maa)?",
            "correctAnswer": "En-jashur",
            "options": [
              "Ol-ngorat",
              "E-long'o",
              "En-jashur",
              "E-remet"
            ],
            "hint": "ehn-jah-shoor"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "E-remet: Spear, Ol-ngorat: Spear butt / counterweight, E-long'o: War shield, Ol-alem: Short sword",
            "pairs": [
              {
                "left": "E-remet",
                "right": "Spear"
              },
              {
                "left": "Ol-ngorat",
                "right": "Spear butt / counterweight"
              },
              {
                "left": "E-long'o",
                "right": "War shield"
              },
              {
                "left": "Ol-alem",
                "right": "Short sword"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Spear\" in Maasai (Maa).",
            "correctAnswer": "E-remet",
            "options": [
              "E-remet",
              "Ol-ngorat",
              "E-long'o",
              "Ol-alem"
            ],
            "hint": "eh-reh-meht"
          }
        ]
      },
      {
        "id": "maasai-exp-warfare-2",
        "title": "Warfare & Weapons (Part 2)",
        "icon": "Shield",
        "description": "Master Maasai (Maa) warfare & weapons vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Warfare & Weapons, pay special attention to pronunciation and morphological prefixes/suffixes: 'E-mouo' (War horn), 'En-jore' (Cattle raid / Expedition), 'En-ara' (Battle / Combat), 'Em-puata' (Warrior company / Troop).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "E-mouo",
            "source": "War horn",
            "pronunciation": "eh-moh-woo-oh",
            "hint": "Plural: i-mouarak. Kudu or buffalo horn blown to summon warriors",
            "example": "E-mouo — War horn (Plural: i-mouarak. Kudu or buffalo horn blown to summon warriors)"
          },
          {
            "target": "En-jore",
            "source": "Cattle raid / Expedition",
            "pronunciation": "ehn-joh-reh",
            "hint": "Plural: in-joreitin / in-jorin. Organized cattle-recovery foray",
            "example": "En-jore — Cattle raid / Expedition (Plural: in-joreitin / in-jorin. Organized cattle-recovery foray)"
          },
          {
            "target": "En-ara",
            "source": "Battle / Combat",
            "pronunciation": "ehn-ah-rah",
            "hint": "Plural: in-arat. Clashing of forces in war",
            "example": "En-ara — Battle / Combat (Plural: in-arat. Clashing of forces in war)"
          },
          {
            "target": "Em-puata",
            "source": "Warrior company / Troop",
            "pronunciation": "ehm-poo-ah-tah",
            "hint": "Regiment or organized detachment of morans",
            "example": "Em-puata — Warrior company / Troop (Regiment or organized detachment of morans)"
          },
          {
            "target": "Ol-mangatinda",
            "source": "Enemy / Adversary",
            "pronunciation": "ohl-mahn-gah-teen-dah",
            "hint": "Plural: il-mangati. Hostile combatant",
            "example": "Ol-mangatinda — Enemy / Adversary (Plural: il-mangati. Hostile combatant)"
          },
          {
            "target": "Ol-ariponi",
            "source": "Guard / Sentinel",
            "pronunciation": "ohl-ah-ree-poh-nee",
            "hint": "Plural: il-aripok. Sentinel on night watch",
            "example": "Ol-ariponi — Guard / Sentinel (Plural: il-aripok. Sentinel on night watch)"
          },
          {
            "target": "Ol-bae",
            "source": "Wound / Battle scar",
            "pronunciation": "ohl-bah-eh",
            "hint": "Plural: il-baa. Battle injury or wound",
            "example": "Ol-bae — Wound / Battle scar (Plural: il-baa. Battle injury or wound)"
          },
          {
            "target": "En-gitimirata",
            "source": "Victory",
            "pronunciation": "ehn-gee-tee-mee-rah-tah",
            "hint": "Overcoming opponents in war",
            "example": "En-gitimirata — Victory (Overcoming opponents in war)"
          }
        ],
        "sentences": [
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          },
          {
            "target": "Eshomo inkera enkang'.",
            "source": "The children have gone to the homestead."
          },
          {
            "target": "Etaa enkop nanyori.",
            "source": "The land has become green."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"E-mouo\" mean in English?",
            "correctAnswer": "War horn",
            "options": [
              "Cattle raid / Expedition",
              "Battle / Combat",
              "Warrior company / Troop",
              "War horn"
            ],
            "hint": "Plural: i-mouarak. Kudu or buffalo horn blown to summon warriors"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-jore\" mean in English?",
            "correctAnswer": "Cattle raid / Expedition",
            "options": [
              "Battle / Combat",
              "Warrior company / Troop",
              "Cattle raid / Expedition",
              "War horn"
            ],
            "hint": "Plural: in-joreitin / in-jorin. Organized cattle-recovery foray"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-ara\" mean in English?",
            "correctAnswer": "Battle / Combat",
            "options": [
              "Warrior company / Troop",
              "Battle / Combat",
              "War horn",
              "Cattle raid / Expedition"
            ],
            "hint": "Plural: in-arat. Clashing of forces in war"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Battle / Combat\" in Maasai (Maa)?",
            "correctAnswer": "En-ara",
            "options": [
              "En-ara",
              "E-mouo",
              "En-jore",
              "Em-puata"
            ],
            "hint": "ehn-ah-rah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Warrior company / Troop\" in Maasai (Maa)?",
            "correctAnswer": "Em-puata",
            "options": [
              "E-mouo",
              "En-jore",
              "En-ara",
              "Em-puata"
            ],
            "hint": "ehm-poo-ah-tah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Enemy / Adversary\" in Maasai (Maa)?",
            "correctAnswer": "Ol-mangatinda",
            "options": [
              "En-jore",
              "En-ara",
              "Ol-mangatinda",
              "E-mouo"
            ],
            "hint": "ohl-mahn-gah-teen-dah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "E-mouo: War horn, En-jore: Cattle raid / Expedition, En-ara: Battle / Combat, Em-puata: Warrior company / Troop",
            "pairs": [
              {
                "left": "E-mouo",
                "right": "War horn"
              },
              {
                "left": "En-jore",
                "right": "Cattle raid / Expedition"
              },
              {
                "left": "En-ara",
                "right": "Battle / Combat"
              },
              {
                "left": "Em-puata",
                "right": "Warrior company / Troop"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"War horn\" in Maasai (Maa).",
            "correctAnswer": "E-mouo",
            "options": [
              "E-mouo",
              "En-jore",
              "En-ara",
              "Em-puata"
            ],
            "hint": "eh-moh-woo-oh"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-15-culture",
    "title": "Unit 15: Culture & Traditions",
    "description": "Comprehensive Maasai (Maa) curriculum for Culture & Traditions, vetted from Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
    "icon": "Award",
    "skills": [
      {
        "id": "maasai-exp-culture",
        "title": "Culture & Traditions (Part 1)",
        "icon": "Award",
        "description": "Master Maasai (Maa) culture & traditions vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Culture & Traditions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Enkai Narok' (Benevolent God (Black God)), 'Enkai Nanyokie' (Fiery God (Red God)), 'En-ganyit' (Respect / Reverence), 'E-muratare' (Circumcision rite of passage).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "Enkai Narok",
            "source": "Benevolent God (Black God)",
            "pronunciation": "ehn-kah-ee nah-rohk",
            "hint": "Manifestation of Enkai bringing gentle rain, peace, and abundance",
            "example": "Enkai Narok — Benevolent God (Black God) (Manifestation of Enkai bringing gentle rain, peace, and abundance)"
          },
          {
            "target": "Enkai Nanyokie",
            "source": "Fiery God (Red God)",
            "pronunciation": "ehn-kah-ee nah-nyoh-kee-eh",
            "hint": "Manifestation of Enkai associated with thunder, drought, and lightning",
            "example": "Enkai Nanyokie — Fiery God (Red God) (Manifestation of Enkai associated with thunder, drought, and lightning)"
          },
          {
            "target": "En-ganyit",
            "source": "Respect / Reverence",
            "pronunciation": "ehn-gahn-yeet",
            "hint": "Cornerstone Maasai moral virtue governing all social conduct and deference",
            "example": "En-ganyit — Respect / Reverence (Cornerstone Maasai moral virtue governing all social conduct and deference)"
          },
          {
            "target": "E-muratare",
            "source": "Circumcision rite of passage",
            "pronunciation": "eh-moo-rah-tah-reh",
            "hint": "Fundamental initiation into manhood and warrior status",
            "example": "E-muratare — Circumcision rite of passage (Fundamental initiation into manhood and warrior status)"
          },
          {
            "target": "O-sipolioi",
            "source": "Newly circumcised initiate",
            "pronunciation": "oh-see-poh-lee-oh-ee",
            "hint": "Plural: i-sipolio. Initiates wearing black cloaks and ostrich feathers",
            "example": "O-sipolioi — Newly circumcised initiate (Plural: i-sipolio. Initiates wearing black cloaks and ostrich feathers)"
          },
          {
            "target": "E-barnoto",
            "source": "Ceremonial head shaving",
            "pronunciation": "eh-bahr-noh-toh",
            "hint": "Ritual shaving of a moran's long hair by his mother at Eunoto",
            "example": "E-barnoto — Ceremonial head shaving (Ritual shaving of a moran's long hair by his mother at Eunoto)"
          },
          {
            "target": "En-kiguana",
            "source": "Elder council / Deliberation",
            "pronunciation": "ehn-kee-gwah-nah",
            "hint": "Plural: in-kiguanat. Democratic assembly where elders resolve disputes",
            "example": "En-kiguana — Elder council / Deliberation (Plural: in-kiguanat. Democratic assembly where elders resolve disputes)"
          },
          {
            "target": "Ol-deketa",
            "source": "Curse / Sanction",
            "pronunciation": "ohl-deh-keh-tah",
            "hint": "Plural: il-deket. Solemn pronouncement of retribution for breaking sacred taboos",
            "example": "Ol-deketa — Curse / Sanction (Plural: il-deket. Solemn pronouncement of retribution for breaking sacred taboos)"
          },
          {
            "target": "Ol-asar",
            "source": "Sacrifice / Offering",
            "pronunciation": "ohl-ah-sahr",
            "hint": "Plural: il-asari. Animal offering dedicated to Enkai",
            "example": "Ol-asar — Sacrifice / Offering (Plural: il-asari. Animal offering dedicated to Enkai)"
          },
          {
            "target": "Ol-abaani",
            "source": "Traditional healer / Doctor",
            "pronunciation": "ohl-ah-bah-ah-nee",
            "hint": "Plural: il-abaak. Healer who treats fractures, wounds, and illness",
            "example": "Ol-abaani — Traditional healer / Doctor (Plural: il-abaak. Healer who treats fractures, wounds, and illness)"
          },
          {
            "target": "E-ranyata",
            "source": "Song / Chanting",
            "pronunciation": "eh-rahn-yah-tah",
            "hint": "Plural: i-ranyat. Traditional rhythmic vocal chanting (also o-singolio)",
            "example": "E-ranyata — Song / Chanting (Plural: i-ranyat. Traditional rhythmic vocal chanting (also o-singolio))"
          },
          {
            "target": "En-kipaata",
            "source": "Ceremonial jumping dance",
            "pronunciation": "ehn-kee-pah-ah-tah",
            "hint": "Iconic high-leaping dance (adumu) performed by morans",
            "example": "En-kipaata — Ceremonial jumping dance (Iconic high-leaping dance (adumu) performed by morans)"
          },
          {
            "target": "En-diuni",
            "source": "Custom / Ancestral way",
            "pronunciation": "ehn-dee-oo-nee",
            "hint": "Ancestral custom and cultural tradition (also ororei li apa)",
            "example": "En-diuni — Custom / Ancestral way (Ancestral custom and cultural tradition (also ororei li apa))"
          },
          {
            "target": "Ol-mishere",
            "source": "Cattle brand / Ear-mark",
            "pronunciation": "ohl-mee-sheh-reh",
            "hint": "Plural: il-misherin. Clan heraldic brand placed on cattle",
            "example": "Ol-mishere — Cattle brand / Ear-mark (Plural: il-misherin. Clan heraldic brand placed on cattle)"
          },
          {
            "target": "O-segerai",
            "source": "Cowrie shell beadwork",
            "pronunciation": "oh-seh-geh-rah-ee",
            "hint": "Plural: i-segera. White cowrie shells sewn onto ceremonial leather collars",
            "example": "O-segerai — Cowrie shell beadwork (Plural: i-segera. White cowrie shells sewn onto ceremonial leather collars)"
          },
          {
            "target": "Il-omimyi",
            "source": "Ancestral spirits",
            "pronunciation": "eel-oh-meem-yee",
            "hint": "The departed fathers and ancestral lineage",
            "example": "Il-omimyi — Ancestral spirits (The departed fathers and ancestral lineage)"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Enkai Narok\" mean in English?",
            "correctAnswer": "Benevolent God (Black God)",
            "options": [
              "Fiery God (Red God)",
              "Respect / Reverence",
              "Circumcision rite of passage",
              "Benevolent God (Black God)"
            ],
            "hint": "Manifestation of Enkai bringing gentle rain, peace, and abundance"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Enkai Nanyokie\" mean in English?",
            "correctAnswer": "Fiery God (Red God)",
            "options": [
              "Respect / Reverence",
              "Circumcision rite of passage",
              "Fiery God (Red God)",
              "Benevolent God (Black God)"
            ],
            "hint": "Manifestation of Enkai associated with thunder, drought, and lightning"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"En-ganyit\" mean in English?",
            "correctAnswer": "Respect / Reverence",
            "options": [
              "Circumcision rite of passage",
              "Respect / Reverence",
              "Benevolent God (Black God)",
              "Fiery God (Red God)"
            ],
            "hint": "Cornerstone Maasai moral virtue governing all social conduct and deference"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Respect / Reverence\" in Maasai (Maa)?",
            "correctAnswer": "En-ganyit",
            "options": [
              "En-ganyit",
              "Enkai Narok",
              "Enkai Nanyokie",
              "E-muratare"
            ],
            "hint": "ehn-gahn-yeet"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Circumcision rite of passage\" in Maasai (Maa)?",
            "correctAnswer": "E-muratare",
            "options": [
              "Enkai Narok",
              "Enkai Nanyokie",
              "En-ganyit",
              "E-muratare"
            ],
            "hint": "eh-moo-rah-tah-reh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Newly circumcised initiate\" in Maasai (Maa)?",
            "correctAnswer": "O-sipolioi",
            "options": [
              "Enkai Nanyokie",
              "En-ganyit",
              "O-sipolioi",
              "Enkai Narok"
            ],
            "hint": "oh-see-poh-lee-oh-ee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "Enkai Narok: Benevolent God (Black God), Enkai Nanyokie: Fiery God (Red God), En-ganyit: Respect / Reverence, E-muratare: Circumcision rite of passage",
            "pairs": [
              {
                "left": "Enkai Narok",
                "right": "Benevolent God (Black God)"
              },
              {
                "left": "Enkai Nanyokie",
                "right": "Fiery God (Red God)"
              },
              {
                "left": "En-ganyit",
                "right": "Respect / Reverence"
              },
              {
                "left": "E-muratare",
                "right": "Circumcision rite of passage"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Benevolent God (Black God)\" in Maasai (Maa).",
            "correctAnswer": "Enkai Narok",
            "options": [
              "Enkai Narok",
              "Enkai Nanyokie",
              "En-ganyit",
              "E-muratare"
            ],
            "hint": "ehn-kah-ee nah-rohk"
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-16-verbs",
    "title": "Unit 16: Actions & Verbs",
    "description": "Comprehensive Maasai (Maa) curriculum for Actions & Verbs, vetted from Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
    "icon": "Zap",
    "skills": [
      {
        "id": "maasai-exp-verbs",
        "title": "Actions & Verbs (Part 1)",
        "icon": "Zap",
        "description": "Master Maasai (Maa) actions & verbs vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Actions & Verbs, pay special attention to pronunciation and morphological prefixes/suffixes: 'A-inos' (To eat), 'A-many' (To dwell / To live), 'A-ton' (To sit / To remain), 'A-itashe' (To stand).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "A-inos",
            "source": "To eat",
            "pronunciation": "ah-ee-nohs",
            "hint": "Infinitive: a-inos. Past: a-tamoso. To eat food (also a-nya)",
            "example": "A-inos — To eat (Infinitive: a-inos. Past: a-tamoso. To eat food (also a-nya))"
          },
          {
            "target": "A-many",
            "source": "To dwell / To live",
            "pronunciation": "ah-mahny",
            "hint": "Infinitive: a-many. Past: a-tamanya. To dwell in a place / inhabit a boma",
            "example": "A-many — To dwell / To live (Infinitive: a-many. Past: a-tamanya. To dwell in a place / inhabit a boma)"
          },
          {
            "target": "A-ton",
            "source": "To sit / To remain",
            "pronunciation": "ah-tohn",
            "hint": "Infinitive: a-ton. Past: a-to-tona. To sit down / remain (also a-bik)",
            "example": "A-ton — To sit / To remain (Infinitive: a-ton. Past: a-to-tona. To sit down / remain (also a-bik))"
          },
          {
            "target": "A-itashe",
            "source": "To stand",
            "pronunciation": "ah-ee-tah-sheh",
            "hint": "Infinitive: a-itashe. Past: a-itasheye. To stand upright",
            "example": "A-itashe — To stand (Infinitive: a-itashe. Past: a-itasheye. To stand upright)"
          },
          {
            "target": "A-limu",
            "source": "To tell / To inform",
            "pronunciation": "ah-lee-moo",
            "hint": "Infinitive: a-limu. Past: a-to-limuo. To tell news / relate a story",
            "example": "A-limu — To tell / To inform (Infinitive: a-limu. Past: a-to-limuo. To tell news / relate a story)"
          },
          {
            "target": "A-iyolo",
            "source": "To know / To understand",
            "pronunciation": "ah-ee-yoh-loh",
            "hint": "Infinitive: a-iyolo. To know / comprehend",
            "example": "A-iyolo — To know / To understand (Infinitive: a-iyolo. To know / comprehend)"
          },
          {
            "target": "A-as",
            "source": "To do / To work",
            "pronunciation": "ah-ahs",
            "hint": "Infinitive: a-as. Past: a-ta-asa. To perform work / do",
            "example": "A-as — To do / To work (Infinitive: a-as. Past: a-ta-asa. To perform work / do)"
          },
          {
            "target": "A-isho",
            "source": "To give",
            "pronunciation": "ah-ee-shoh",
            "hint": "Infinitive: a-isho. Past: a-t-ishoo. Imperative: injoo (give!)",
            "example": "A-isho — To give (Infinitive: a-isho. Past: a-t-ishoo. Imperative: injoo (give!))"
          },
          {
            "target": "A-ibung",
            "source": "To take / To seize",
            "pronunciation": "ah-ee-boong",
            "hint": "Infinitive: a-ibung. Past: a-t-ibunga. To catch / hold",
            "example": "A-ibung — To take / To seize (Infinitive: a-ibung. Past: a-t-ibunga. To catch / hold)"
          },
          {
            "target": "A-iyau",
            "source": "To bring / To fetch",
            "pronunciation": "ah-ee-yah-oo",
            "hint": "Infinitive: a-iyau. Past: a-t-iyauo. To bring / retrieve",
            "example": "A-iyau — To bring / To fetch (Infinitive: a-iyau. Past: a-t-iyauo. To bring / retrieve)"
          },
          {
            "target": "A-loilo",
            "source": "To walk",
            "pronunciation": "ah-loh-ee-loh",
            "hint": "Infinitive: a-loilo. Past: a-to-loilo. To walk / stroll",
            "example": "A-loilo — To walk (Infinitive: a-loilo. Past: a-to-loilo. To walk / stroll)"
          },
          {
            "target": "A-irag",
            "source": "To sleep / To lie down",
            "pronunciation": "ah-ee-rahg",
            "hint": "Infinitive: a-irag. Past: a-t-iraga. To lie down / sleep (also a-rora)",
            "example": "A-irag — To sleep / To lie down (Infinitive: a-irag. Past: a-t-iraga. To lie down / sleep (also a-rora))"
          }
        ],
        "sentences": [
          {
            "target": "Sidai olosho le Maa.",
            "source": "The Maasai community and land are good."
          },
          {
            "target": "Elo olmorani ang'.",
            "source": "The warrior goes home to the kraal."
          },
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"A-inos\" mean in English?",
            "correctAnswer": "To eat",
            "options": [
              "To dwell / To live",
              "To sit / To remain",
              "To stand",
              "To eat"
            ],
            "hint": "Infinitive: a-inos. Past: a-tamoso. To eat food (also a-nya)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"A-many\" mean in English?",
            "correctAnswer": "To dwell / To live",
            "options": [
              "To sit / To remain",
              "To stand",
              "To dwell / To live",
              "To eat"
            ],
            "hint": "Infinitive: a-many. Past: a-tamanya. To dwell in a place / inhabit a boma"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"A-ton\" mean in English?",
            "correctAnswer": "To sit / To remain",
            "options": [
              "To stand",
              "To sit / To remain",
              "To eat",
              "To dwell / To live"
            ],
            "hint": "Infinitive: a-ton. Past: a-to-tona. To sit down / remain (also a-bik)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To sit / To remain\" in Maasai (Maa)?",
            "correctAnswer": "A-ton",
            "options": [
              "A-ton",
              "A-inos",
              "A-many",
              "A-itashe"
            ],
            "hint": "ah-tohn"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To stand\" in Maasai (Maa)?",
            "correctAnswer": "A-itashe",
            "options": [
              "A-inos",
              "A-many",
              "A-ton",
              "A-itashe"
            ],
            "hint": "ah-ee-tah-sheh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To tell / To inform\" in Maasai (Maa)?",
            "correctAnswer": "A-limu",
            "options": [
              "A-many",
              "A-ton",
              "A-limu",
              "A-inos"
            ],
            "hint": "ah-lee-moo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "A-inos: To eat, A-many: To dwell / To live, A-ton: To sit / To remain, A-itashe: To stand",
            "pairs": [
              {
                "left": "A-inos",
                "right": "To eat"
              },
              {
                "left": "A-many",
                "right": "To dwell / To live"
              },
              {
                "left": "A-ton",
                "right": "To sit / To remain"
              },
              {
                "left": "A-itashe",
                "right": "To stand"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To eat\" in Maasai (Maa).",
            "correctAnswer": "A-inos",
            "options": [
              "A-inos",
              "A-many",
              "A-ton",
              "A-itashe"
            ],
            "hint": "ah-ee-nohs"
          }
        ]
      },
      {
        "id": "maasai-exp-verbs-2",
        "title": "Actions & Verbs (Part 2)",
        "icon": "Zap",
        "description": "Master Maasai (Maa) actions & verbs vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Actions & Verbs, pay special attention to pronunciation and morphological prefixes/suffixes: 'A-inyo' (To arise / To wake up), 'A-nyor' (To love / To like), 'A-iba' (To hate), 'A-ure' (To fear / To be afraid).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "A-inyo",
            "source": "To arise / To wake up",
            "pronunciation": "ah-een-yoh",
            "hint": "Infinitive: a-inyo. Past: a-t-inyoyo. To stand up / awaken",
            "example": "A-inyo — To arise / To wake up (Infinitive: a-inyo. Past: a-t-inyoyo. To stand up / awaken)"
          },
          {
            "target": "A-nyor",
            "source": "To love / To like",
            "pronunciation": "ah-nyohr",
            "hint": "Infinitive: a-nyor. Past: a-to-nyora. To love / cherish",
            "example": "A-nyor — To love / To like (Infinitive: a-nyor. Past: a-to-nyora. To love / cherish)"
          },
          {
            "target": "A-iba",
            "source": "To hate",
            "pronunciation": "ah-ee-bah",
            "hint": "Infinitive: a-iba. Past: a-to-ibaa. To detest / abhor",
            "example": "A-iba — To hate (Infinitive: a-iba. Past: a-to-ibaa. To detest / abhor)"
          },
          {
            "target": "A-ure",
            "source": "To fear / To be afraid",
            "pronunciation": "ah-oo-reh",
            "hint": "Infinitive: a-ure. Past: a-t-uriwo. To fear / be timid",
            "example": "A-ure — To fear / To be afraid (Infinitive: a-ure. Past: a-t-uriwo. To fear / be timid)"
          },
          {
            "target": "A-ye",
            "source": "To die",
            "pronunciation": "ah-yeh",
            "hint": "Infinitive: a-ye (a-ea). Past: a-tua (died)",
            "example": "A-ye — To die (Infinitive: a-ye (a-ea). Past: a-tua (died))"
          },
          {
            "target": "A-ar",
            "source": "To strike / To kill",
            "pronunciation": "ah-ahr",
            "hint": "Infinitive: a-ar. Past: a-to-ara. To beat / kill (a-ar metua)",
            "example": "A-ar — To strike / To kill (Infinitive: a-ar. Past: a-to-ara. To beat / kill (a-ar metua))"
          },
          {
            "target": "A-arare",
            "source": "To fight",
            "pronunciation": "ah-ah-rah-reh",
            "hint": "Infinitive: a-arare. Past: a-to-arare. To battle / quarrel",
            "example": "A-arare — To fight (Infinitive: a-arare. Past: a-to-arare. To battle / quarrel)"
          },
          {
            "target": "A-ikilikwan",
            "source": "To ask / To inquire",
            "pronunciation": "ah-ee-kee-leek-wahn",
            "hint": "Infinitive: a-ikilikwan. Past: a-t-ikilikwana. To ask a question",
            "example": "A-ikilikwan — To ask / To inquire (Infinitive: a-ikilikwan. Past: a-t-ikilikwana. To ask a question)"
          },
          {
            "target": "A-inyangu",
            "source": "To buy",
            "pronunciation": "ah-een-yahn-goo",
            "hint": "Infinitive: a-inyangu. Past: a-t-inyangua. To purchase goods",
            "example": "A-inyangu — To buy (Infinitive: a-inyangu. Past: a-t-inyangua. To purchase goods)"
          },
          {
            "target": "A-mir",
            "source": "To sell",
            "pronunciation": "ah-meer",
            "hint": "Infinitive: a-mir. Past: a-to-miro. To sell / trade",
            "example": "A-mir — To sell (Infinitive: a-mir. Past: a-to-miro. To sell / trade)"
          },
          {
            "target": "A-yer",
            "source": "To cook / To boil",
            "pronunciation": "ah-yehr",
            "hint": "Infinitive: a-yer. Past: a-to-yero. To boil / prepare food",
            "example": "A-yer — To cook / To boil (Infinitive: a-yer. Past: a-to-yero. To boil / prepare food)"
          },
          {
            "target": "A-pej",
            "source": "To roast / To burn",
            "pronunciation": "ah-pehj",
            "hint": "Infinitive: a-pej. Past: a-to-pejo. To roast meat / ignite fire",
            "example": "A-pej — To roast / To burn (Infinitive: a-pej. Past: a-to-pejo. To roast meat / ignite fire)"
          }
        ],
        "sentences": [
          {
            "target": "Enyor inkishu enkare.",
            "source": "The cattle love water."
          },
          {
            "target": "Eshomo inkera enkang'.",
            "source": "The children have gone to the homestead."
          },
          {
            "target": "Etaa enkop nanyori.",
            "source": "The land has become green."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"A-inyo\" mean in English?",
            "correctAnswer": "To arise / To wake up",
            "options": [
              "To love / To like",
              "To hate",
              "To fear / To be afraid",
              "To arise / To wake up"
            ],
            "hint": "Infinitive: a-inyo. Past: a-t-inyoyo. To stand up / awaken"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"A-nyor\" mean in English?",
            "correctAnswer": "To love / To like",
            "options": [
              "To hate",
              "To fear / To be afraid",
              "To love / To like",
              "To arise / To wake up"
            ],
            "hint": "Infinitive: a-nyor. Past: a-to-nyora. To love / cherish"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"A-iba\" mean in English?",
            "correctAnswer": "To hate",
            "options": [
              "To fear / To be afraid",
              "To hate",
              "To arise / To wake up",
              "To love / To like"
            ],
            "hint": "Infinitive: a-iba. Past: a-to-ibaa. To detest / abhor"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To hate\" in Maasai (Maa)?",
            "correctAnswer": "A-iba",
            "options": [
              "A-iba",
              "A-inyo",
              "A-nyor",
              "A-ure"
            ],
            "hint": "ah-ee-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To fear / To be afraid\" in Maasai (Maa)?",
            "correctAnswer": "A-ure",
            "options": [
              "A-inyo",
              "A-nyor",
              "A-iba",
              "A-ure"
            ],
            "hint": "ah-oo-reh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To die\" in Maasai (Maa)?",
            "correctAnswer": "A-ye",
            "options": [
              "A-nyor",
              "A-iba",
              "A-ye",
              "A-inyo"
            ],
            "hint": "ah-yeh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "A-inyo: To arise / To wake up, A-nyor: To love / To like, A-iba: To hate, A-ure: To fear / To be afraid",
            "pairs": [
              {
                "left": "A-inyo",
                "right": "To arise / To wake up"
              },
              {
                "left": "A-nyor",
                "right": "To love / To like"
              },
              {
                "left": "A-iba",
                "right": "To hate"
              },
              {
                "left": "A-ure",
                "right": "To fear / To be afraid"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To arise / To wake up\" in Maasai (Maa).",
            "correctAnswer": "A-inyo",
            "options": [
              "A-inyo",
              "A-nyor",
              "A-iba",
              "A-ure"
            ],
            "hint": "ah-een-yoh"
          }
        ]
      },
      {
        "id": "maasai-exp-verbs-3",
        "title": "Actions & Verbs (Part 3)",
        "icon": "Zap",
        "description": "Master Maasai (Maa) actions & verbs vocabulary and expressions from verified historical sources.",
        "tips": "In this Maasai (Maa) skill covering Actions & Verbs, pay special attention to pronunciation and morphological prefixes/suffixes: 'A-lep' (To milk), 'A-dung' (To cut), 'A-rem' (To pierce / To spear), 'A-rany' (To sing).",
        "culturalNote": "Source attribution: Charles Richmond 'Maasai Dictionary' and classical Maa grammatical descriptions.",
        "words": [
          {
            "target": "A-lep",
            "source": "To milk",
            "pronunciation": "ah-lehp",
            "hint": "Infinitive: a-lep. Past: a-to-lepo. To milk cows or goats",
            "example": "A-lep — To milk (Infinitive: a-lep. Past: a-to-lepo. To milk cows or goats)"
          },
          {
            "target": "A-dung",
            "source": "To cut",
            "pronunciation": "ah-doong",
            "hint": "Infinitive: a-dung. Past: a-to-dungo. To sever with a knife",
            "example": "A-dung — To cut (Infinitive: a-dung. Past: a-to-dungo. To sever with a knife)"
          },
          {
            "target": "A-rem",
            "source": "To pierce / To spear",
            "pronunciation": "ah-rehm",
            "hint": "Infinitive: a-rem. Past: a-to-remo. To stab with a spear",
            "example": "A-rem — To pierce / To spear (Infinitive: a-rem. Past: a-to-remo. To stab with a spear)"
          },
          {
            "target": "A-rany",
            "source": "To sing",
            "pronunciation": "ah-rahny",
            "hint": "Infinitive: a-rany. Past: a-to-ranyo. To sing / chant",
            "example": "A-rany — To sing (Infinitive: a-rany. Past: a-to-ranyo. To sing / chant)"
          },
          {
            "target": "A-puk",
            "source": "To dance / To leap",
            "pronunciation": "ah-pook",
            "hint": "Infinitive: a-puk / a-itiam. To leap high in traditional dance",
            "example": "A-puk — To dance / To leap (Infinitive: a-puk / a-itiam. To leap high in traditional dance)"
          },
          {
            "target": "A-maiyan",
            "source": "To bless",
            "pronunciation": "ah-mah-ee-yahn",
            "hint": "Infinitive: a-maiyan. Past: a-to-maiyano. To invoke divine favor",
            "example": "A-maiyan — To bless (Infinitive: a-maiyan. Past: a-to-maiyano. To invoke divine favor)"
          },
          {
            "target": "A-omon",
            "source": "To pray / To beg",
            "pronunciation": "ah-oh-mohn",
            "hint": "Infinitive: a-omon. Past: a-to-omono. To pray to Enkai / petition",
            "example": "A-omon — To pray / To beg (Infinitive: a-omon. Past: a-to-omono. To pray to Enkai / petition)"
          },
          {
            "target": "A-kweni",
            "source": "To laugh",
            "pronunciation": "ah-kweh-nee",
            "hint": "Infinitive: a-kweni. Past: a-to-kwenia. To laugh",
            "example": "A-kweni — To laugh (Infinitive: a-kweni. Past: a-to-kwenia. To laugh)"
          },
          {
            "target": "A-ishir",
            "source": "To cry / To weep",
            "pronunciation": "ah-ee-sheer",
            "hint": "Infinitive: a-ishir. Past: a-t-ishira. To weep or wail",
            "example": "A-ishir — To cry / To weep (Infinitive: a-ishir. Past: a-t-ishira. To weep or wail)"
          },
          {
            "target": "A-isuj",
            "source": "To wash",
            "pronunciation": "ah-ee-sooj",
            "hint": "Infinitive: a-isuj. Past: a-t-isujo. To wash with water (also a-itukuo)",
            "example": "A-isuj — To wash (Infinitive: a-isuj. Past: a-t-isujo. To wash with water (also a-itukuo))"
          },
          {
            "target": "A-rip",
            "source": "To guard / To protect",
            "pronunciation": "ah-reep",
            "hint": "Infinitive: a-rip. Past: a-to-ripo. To guard cattle / protect boma",
            "example": "A-rip — To guard / To protect (Infinitive: a-rip. Past: a-to-ripo. To guard cattle / protect boma)"
          },
          {
            "target": "A-bol",
            "source": "To open",
            "pronunciation": "ah-bohl",
            "hint": "Infinitive: a-bol. Past: a-to-bolo. To uncover / open doorway",
            "example": "A-bol — To open (Infinitive: a-bol. Past: a-to-bolo. To uncover / open doorway)"
          },
          {
            "target": "A-iken",
            "source": "To shut / To close",
            "pronunciation": "ah-ee-kehn",
            "hint": "Infinitive: a-iken. Past: a-t-ikeno. To close door / fasten",
            "example": "A-iken — To shut / To close (Infinitive: a-iken. Past: a-t-ikeno. To close door / fasten)"
          },
          {
            "target": "A-shet",
            "source": "To build",
            "pronunciation": "ah-sheht",
            "hint": "Infinitive: a-shet. Past: a-to-sheto. To construct a house or boma",
            "example": "A-shet — To build (Infinitive: a-shet. Past: a-to-sheto. To construct a house or boma)"
          }
        ],
        "sentences": [
          {
            "target": "Etaa enkop nanyori.",
            "source": "The land has become green."
          },
          {
            "target": "Enkai naisho iyiook enkishon.",
            "source": "It is God who gives us life and cattle."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"A-lep\" mean in English?",
            "correctAnswer": "To milk",
            "options": [
              "To cut",
              "To pierce / To spear",
              "To sing",
              "To milk"
            ],
            "hint": "Infinitive: a-lep. Past: a-to-lepo. To milk cows or goats"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"A-dung\" mean in English?",
            "correctAnswer": "To cut",
            "options": [
              "To pierce / To spear",
              "To sing",
              "To cut",
              "To milk"
            ],
            "hint": "Infinitive: a-dung. Past: a-to-dungo. To sever with a knife"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"A-rem\" mean in English?",
            "correctAnswer": "To pierce / To spear",
            "options": [
              "To sing",
              "To pierce / To spear",
              "To milk",
              "To cut"
            ],
            "hint": "Infinitive: a-rem. Past: a-to-remo. To stab with a spear"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To pierce / To spear\" in Maasai (Maa)?",
            "correctAnswer": "A-rem",
            "options": [
              "A-rem",
              "A-lep",
              "A-dung",
              "A-rany"
            ],
            "hint": "ah-rehm"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To sing\" in Maasai (Maa)?",
            "correctAnswer": "A-rany",
            "options": [
              "A-lep",
              "A-dung",
              "A-rem",
              "A-rany"
            ],
            "hint": "ah-rahny"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To dance / To leap\" in Maasai (Maa)?",
            "correctAnswer": "A-puk",
            "options": [
              "A-dung",
              "A-rem",
              "A-puk",
              "A-lep"
            ],
            "hint": "ah-pook"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Maasai (Maa) terms with their English meanings:",
            "correctAnswer": "A-lep: To milk, A-dung: To cut, A-rem: To pierce / To spear, A-rany: To sing",
            "pairs": [
              {
                "left": "A-lep",
                "right": "To milk"
              },
              {
                "left": "A-dung",
                "right": "To cut"
              },
              {
                "left": "A-rem",
                "right": "To pierce / To spear"
              },
              {
                "left": "A-rany",
                "right": "To sing"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To milk\" in Maasai (Maa).",
            "correctAnswer": "A-lep",
            "options": [
              "A-lep",
              "A-dung",
              "A-rem",
              "A-rany"
            ],
            "hint": "ah-lehp"
          }
        ]
      }
    ]
  }
];
