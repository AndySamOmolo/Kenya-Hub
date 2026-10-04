// ============================================================
// Kamba (Kĩkamba) Language Course Configuration & Units
// Based on "Grammar of the Kamba Language" by J.T. Last (CMS, 1885),
// "Vocabularies of the Kamba and Kikuyu Languages"
// by Hildegarde Hinde (Cambridge University Press, 1904),
// and "Bantu Beliefs and Magic" by C.W. Hobley (1922).
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const KAMBA_CONFIG: LanguageConfig = {
  id: 'kamba',
  name: 'Kamba',
  nativeName: 'Kĩkamba',
  family: 'Bantu',
  counties: ['Machakos', 'Makueni', 'Kitui'],
  speakers: '4.7M',
  speechLocale: 'sw-KE',
  description: 'An Eastern Bantu language spoken by the Akamba community in south-central Kenya, celebrated for wood carving, music, trade history, and rich proverbial wisdom.',
  color: '#FF9800',
  sources: ['kamba-grammar-last', 'kamba-kikuyu-vocabularies', 'bantu-beliefs'],
};

export const KAMBA_UNITS: CourseUnit[] = [
  {
    id: 'kamba-unit-1',
    title: 'Unit 1: Foundations, Greetings & Numbers',
    description: 'Learn foundational greetings, courtesies, and the cardinal counting system of Kĩkamba.',
    icon: '👋',
    skills: [
      {
        id: 'kamba-greetings',
        title: 'Greetings & Politeness',
        icon: 'Handshake',
        description: 'Master core greetings, polite inquiries, and daily salutations.',
        tips: "In Kĩkamba, a common casual greeting is 'Wĩmweo?' ('Are you well?'), to which one answers 'Nĩ nzeo' ('It is good/well') or 'Nĩmaseo'. When meeting someone for the first time, you can ask 'Ũvoo waku?' ('What is your news?'). To say goodbye, 'Tũtũtwonie' ('We shall see each other') or 'Thi na mũuo' ('Go in peace') is used.",
        culturalNote: "Akamba greetings carry deep interpersonal warmth. Inquiring about children, livestock, and rains is traditional before turning to business or personal matters.",
        words: [
          { target: 'Wĩmweo', source: 'Hello / Are you well?', pronunciation: 'wee-mweh-oh', hint: 'Universal greeting' },
          { target: 'Nĩ nzeo', source: 'It is good / Fine', pronunciation: 'nee n-zeh-oh', hint: 'Polite affirmative reply' },
          { target: 'Ũvoo waku?', source: 'How is your news?', pronunciation: 'oo-voh wah-koo', hint: 'Greeting inquiry' },
          { target: 'Nĩmaseo', source: 'I am good / well', pronunciation: 'nee-mah-seh-oh', hint: 'Response: "I am fine"' },
          { target: 'Ũvoo wa kĩoko', source: 'Good morning', pronunciation: 'oo-voh wah kee-oh-koh', hint: 'Morning greeting' },
          { target: 'Ũvoo wa wĩoo', source: 'Good evening', pronunciation: 'oo-voh wah wee-oh-oh', hint: 'Evening greeting' },
          { target: 'Wĩ mũseo?', source: 'Are you fine?', pronunciation: 'wee moo-seh-oh', hint: 'Common polite check' },
          { target: 'Ũka haha', source: 'Come here', pronunciation: 'oo-kah hah-hah', hint: 'Welcoming command' },
          { target: 'Ete maanzi', source: 'Bring water', pronunciation: 'eh-teh mah-ahn-zee', hint: 'Hospitality request' },
          { target: 'Ete lĩu', source: 'Bring food', pronunciation: 'eh-teh lee-oo', hint: 'Hospitality request' },
          { target: 'Ĩĩ', source: 'Yes', pronunciation: 'ee-ee', hint: 'Affirmative response' },
          { target: 'Aiee', source: 'No', pronunciation: 'ah-ee-eh-eh', hint: 'Negative response' }
        ],
        sentences: [
          { target: 'Wĩ mũseo, mũrata wakwa?', source: 'Are you well, my friend?' },
          { target: 'Nĩ nzeo mũno, ũvoo waku?', source: 'Very good, how is your news?' },
          { target: 'Ũka haha tũnye maanzi.', source: 'Come here so we drink water.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Come here" in Kĩkamba?',
            correctAnswer: 'Ũka haha',
            options: ['Ũka haha', 'Ete maanzi', 'Ete lĩu', 'Wĩmweo'],
            hint: 'A welcoming direction'
          },
          {
            type: 'multiple_choice',
            prompt: 'What is the standard response to "Ũvoo waku?" (How is your news)?',
            correctAnswer: 'Nĩ nzeo',
            options: ['Nĩ nzeo', 'Aiee', 'Ũka haha', 'Wĩmweo'],
            hint: 'Means "it is good / fine"'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Kamba greeting phrases with their meanings:',
            correctAnswer: 'Wĩmweo: Hello, Nĩ nzeo: Fine, Ete maanzi: Bring water, Ete lĩu: Bring food',
            pairs: [
              { left: 'Wĩmweo', right: 'Hello' },
              { left: 'Nĩ nzeo', right: 'Fine' },
              { left: 'Ete maanzi', right: 'Bring water' },
              { left: 'Ete lĩu', right: 'Bring food' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "Nĩ _____ mũno." (Very good.)',
            correctAnswer: 'nzeo',
            options: ['nzeo', 'aiee', 'kĩoko', 'wĩoo'],
            hint: 'Kamba word for good / fine'
          }
        ]
      },
      {
        id: 'kamba-numbers',
        title: 'Numbers & Counting',
        icon: 'Hash',
        description: 'Master cardinal numbers from one to a hundred in Kĩkamba.',
        tips: "Kĩkamba uses a Bantu decimal numeral system: 1 is Ĩmwe, 2 is Ilĩ, 3 is Itatũ, 4 is Inya, and 5 is Itano. 10 is Ĩkũmi, 20 is Mĩrongo ĩlĩ ('two tens'), and 100 is Ĩana (from Hinde 1904).",
        culturalNote: "In traditional Akamba pastoral and farming life, counting cattle, beehives, or crops in the open was done discreetly to safeguard against vanity and malevolent eyes.",
        words: [
          { target: 'Ĩmwe', source: 'One', pronunciation: 'ee-mweh', hint: 'Numeral 1' },
          { target: 'Ilĩ', source: 'Two', pronunciation: 'ee-lee', hint: 'Numeral 2' },
          { target: 'Itatũ', source: 'Three', pronunciation: 'ee-tah-too', hint: 'Numeral 3' },
          { target: 'Inya', source: 'Four', pronunciation: 'ee-nyah', hint: 'Numeral 4' },
          { target: 'Itano', source: 'Five', pronunciation: 'ee-tah-noh', hint: 'Numeral 5' },
          { target: 'Thanthatũ', source: 'Six', pronunciation: 'thahn-thah-too', hint: 'Numeral 6 (also Thandatũ)' },
          { target: 'Mũonza', source: 'Seven', pronunciation: 'moo-ohn-zah', hint: 'Numeral 7' },
          { target: 'Nyanya', source: 'Eight', pronunciation: 'nyah-nyah', hint: 'Numeral 8' },
          { target: 'Kenda', source: 'Nine', pronunciation: 'kehn-dah', hint: 'Numeral 9' },
          { target: 'Ĩkũmi', source: 'Ten', pronunciation: 'ee-koo-mee', hint: 'Numeral 10' },
          { target: 'Mĩrongo ĩlĩ', source: 'Twenty', pronunciation: 'mee-rohn-goh ee-lee', hint: 'Lit. "two tens"' },
          { target: 'Ĩana', source: 'Hundred', pronunciation: 'ee-ah-nah', hint: 'Numeral 100' }
        ],
        sentences: [
          { target: 'Syana ilĩ nĩsyasoma.', source: 'Two children are reading.' },
          { target: 'Ng\'ombe itano nĩsyaithwa.', source: 'Five cows are grazed.' },
          { target: 'Ĩana ya andũ nĩyokĩte.', source: 'A hundred people have come.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the numeral "Three" in Kĩkamba?',
            correctAnswer: 'Itatũ',
            options: ['Itatũ', 'Ĩmwe', 'Ilĩ', 'Itano'],
            hint: 'Cognate with Swahili tatu'
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Twenty" in Kĩkamba?',
            correctAnswer: 'Mĩrongo ĩlĩ',
            options: ['Mĩrongo ĩlĩ', 'Ĩkũmi', 'Ĩana', 'Thanthatũ'],
            hint: 'Literally means "two tens"'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Kamba numbers with their values:',
            correctAnswer: 'Ĩmwe: One, Ilĩ: Two, Itano: Five, Ĩkũmi: Ten',
            pairs: [
              { left: 'Ĩmwe', right: 'One' },
              { left: 'Ilĩ', right: 'Two' },
              { left: 'Itano', right: 'Five' },
              { left: 'Ĩkũmi', right: 'Ten' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kamba-unit-2',
    title: 'Unit 2: Family, Kinship & Society',
    description: 'Learn terms for immediate family, revered elders, and social community roles.',
    icon: '👥',
    skills: [
      {
        id: 'kamba-family',
        title: 'Family & Kinship',
        icon: 'Users',
        description: 'Vocabulary for family members, lineage, and relatives.',
        tips: "In Kĩkamba, human nouns belong to Noun Class 1 (singular prefix 'mũ-') and Class 2 (plural prefix 'a-'): 'Mũndũ' (person) -> 'Andũ' (people); 'Mũka' (woman/wife) -> 'Aka' (women/wives); 'Mũndũũme' (man/husband) -> 'Aũme' (men). Respectful address for parents is 'Ĩthe' (father) and 'Mwaitũ' (mother).",
        culturalNote: "The clan (mbai) is the foundation of Akamba social identity. Grandparents ('Umau' and 'Usua') transmit tribal lore, clan genealogies, and riddle traditions around the evening hearth.",
        words: [
          { target: 'Mwana', source: 'Child', pronunciation: 'mwah-nah', hint: 'Plural: Syana (children)' },
          { target: 'Syana', source: 'Children', pronunciation: 'syah-nah', hint: 'Plural of mwana' },
          { target: 'Mũndũũme', source: 'Man / Husband', pronunciation: 'moo-n-doo-oo-meh', hint: 'Plural: Aũme' },
          { target: 'Mũka', source: 'Woman / Wife', pronunciation: 'moo-kah', hint: 'Plural: Aka (women/wives)' },
          { target: 'Aka', source: 'Women / Wives', pronunciation: 'ah-kah', hint: 'Plural of muka' },
          { target: 'Ĩthe', source: 'Father', pronunciation: 'ee-theh', hint: 'Paternal parent; also Asa' },
          { target: 'Mwaitũ', source: 'Mother', pronunciation: 'mwah-ee-too', hint: 'Maternal parent; lit. our mother' },
          { target: 'Mũtumĩa', source: 'Elder / Respected person', pronunciation: 'moo-too-mee-ah', hint: 'Plural: Atumĩa' },
          { target: 'Mũrata', source: 'Friend', pronunciation: 'moo-rah-tah', hint: 'Plural: Arata' },
          { target: 'Umau', source: 'Grandfather', pronunciation: 'oo-mah-oo', hint: 'Paternal or maternal grandfather' },
          { target: 'Usua', source: 'Grandmother', pronunciation: 'oo-soo-ah', hint: 'Paternal or maternal grandmother' }
        ],
        sentences: [
          { target: 'Mwaitũ nĩũkĩte mũsyĩ.', source: 'Mother has arrived home.' },
          { target: 'Syana syĩ na ĩthe.', source: 'The children are with father.' },
          { target: 'Mũrata wakwa e vaa.', source: 'My friend is here.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Mwaitũ" mean in Kĩkamba?',
            correctAnswer: 'Mother',
            options: ['Mother', 'Father', 'Child', 'Friend'],
            hint: 'Maternal term of reverence'
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Children" (plural) in Kĩkamba?',
            correctAnswer: 'Syana',
            options: ['Syana', 'Mwana', 'Aka', 'Arata'],
            hint: 'Plural of Mwana'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Kamba family terms:',
            correctAnswer: 'Ĩthe: Father, Mwaitũ: Mother, Mwana: Child, Mũrata: Friend',
            pairs: [
              { left: 'Ĩthe', right: 'Father' },
              { left: 'Mwaitũ', right: 'Mother' },
              { left: 'Mwana', right: 'Child' },
              { left: 'Mũrata', right: 'Friend' }
            ]
          }
        ]
      },
      {
        id: 'kamba-people-roles',
        title: 'Community & Leaders',
        icon: 'Shield',
        description: 'Terms for social age-grades, community roles, and traditional vocations.',
        tips: "The Akamba governance system relies on councils of elders ('Kiama'). Respected elders ('Atumĩa ma kiama') deliberate community disputes under sacred trees, while skilled traders ('Athooya') historically organized long-distance trade caravans to the coast.",
        culturalNote: "Pre-colonial Akamba caravan leaders were famous across East Africa for opening trade routes connecting Mount Kenya, Ukambani, and Mombasa.",
        words: [
          { target: 'Mũndũ', source: 'Person', pronunciation: 'moo-n-doo', hint: 'Plural: Andũ (people)' },
          { target: 'Andũ', source: 'People', pronunciation: 'ahn-doo', hint: 'Plural of mundu' },
          { target: 'Akamba', source: 'Kamba people', pronunciation: 'ah-kahm-bah', hint: 'Plural ethnonym' },
          { target: 'Kĩkamba', source: 'Kamba language', pronunciation: 'kee-kahm-bah', hint: 'Prefix kĩ- denotes language/manner' },
          { target: 'Mũsiani', source: 'Youth / Boy', pronunciation: 'moo-see-ah-nee', hint: 'Young unmarried male' },
          { target: 'Mwĩtũ', source: 'Girl / Young woman', pronunciation: 'mwee-too', hint: 'Young unmarried female' },
          { target: 'Mũndũ mũgo', source: 'Traditional healer / Seer', pronunciation: 'moo-n-doo moo-goh', hint: 'Spiritual practitioner and herbalist' },
          { target: 'Mũthooa', source: 'Trader', pronunciation: 'moo-thoh-oh-ah', hint: 'Merchant or caravan leader' }
        ],
        sentences: [
          { target: 'Andũ ma mũsyĩ nĩaseo.', source: 'The people of the homestead are good.' },
          { target: 'Athee ma kiama nĩmakomaanite.', source: 'The elders of the council have assembled.' },
          { target: 'Mwĩtũ nĩũkũtaha maanzi.', source: 'The girl is fetching water.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Mũndũ mũgo" denote in Kamba tradition?',
            correctAnswer: 'Traditional healer / Seer',
            options: ['Traditional healer / Seer', 'Young warrior', 'Caravan trader', 'Council boy'],
            hint: 'A respected healer and spiritual diviner'
          },
          {
            type: 'match_pairs',
            prompt: 'Match community terms in Kĩkamba:',
            correctAnswer: 'Mũndũ: Person, Andũ: People, Akamba: Kamba people, Mũthooa: Trader',
            pairs: [
              { left: 'Mũndũ', right: 'Person' },
              { left: 'Andũ', right: 'People' },
              { left: 'Akamba', right: 'Kamba people' },
              { left: 'Mũthooa', right: 'Trader' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kamba-unit-3',
    title: 'Unit 3: Homestead, Nature & Pastoral Life',
    description: 'Explore the traditional homestead, geographic surroundings, and livestock herding.',
    icon: '🏡',
    skills: [
      {
        id: 'kamba-homestead-nature',
        title: 'Homestead & Environment',
        icon: 'Home',
        description: 'Words for dwelling spaces, hills, trees, and water sources.',
        tips: "In Kĩkamba, 'Mũsyĩ' refers to the family compound or village. 'Nyũmba' is the physical living house. Ukambani topography features dramatic rocky hills ('Kiima', pl. 'Iima') and seasonal sand rivers ('Rũũĩ / Ũwĩ').",
        culturalNote: "Homesteads were often sited on elevated slopes for drainage, breezes, and strategic observation over the plains.",
        words: [
          { target: 'Mũsyĩ', source: 'Homestead / Village', pronunciation: 'moo-syee', hint: 'Family compound or settlement' },
          { target: 'Nyũmba', source: 'House', pronunciation: 'nyoom-bah', hint: 'Dwelling structure' },
          { target: 'Mũtĩ', source: 'Tree', pronunciation: 'moo-tee', hint: 'Plural: Mĩtĩ (trees)' },
          { target: 'Mĩtĩ', source: 'Trees', pronunciation: 'mee-tee', hint: 'Plural of muti' },
          { target: 'Kĩĩma', source: 'Hill / Mountain', pronunciation: 'kee-ee-mah', hint: 'Plural: Iima (hills)' },
          { target: 'Maaĩ', source: 'Water', pronunciation: 'mah-ah-ee', hint: 'Essential life liquid (also Maanzi)' },
          { target: 'Ũta', source: 'Bow', pronunciation: 'oo-tah', hint: 'Traditional hunting & defence weapon' },
          { target: 'Mavai', source: 'Arrows', pronunciation: 'mah-vah-ee', hint: 'Quiver arrows (sing. Ũvai)' },
          { target: 'Kĩtheka', source: 'Bush / Wilderness', pronunciation: 'kee-theh-kah', hint: 'Savannah woodland or wild bush' },
          { target: 'Kĩsima', source: 'Well / Water spring', pronunciation: 'kee-see-mah', hint: 'Source for drinking water' }
        ],
        sentences: [
          { target: 'Mũsyĩ witũ wĩ kĩĩmanĩ.', source: 'Our homestead is on the hill.' },
          { target: 'Ete maanzi kuma kĩsimanĩ.', source: 'Bring water from the well.' },
          { target: 'Mĩtĩ ĩno nĩ mũseo.', source: 'These trees are good.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Mũsyĩ" mean in Kĩkamba?',
            correctAnswer: 'Homestead / Village',
            options: ['Homestead / Village', 'Bow and arrow', 'Wild bush', 'Water well'],
            hint: 'The family compound'
          },
          {
            type: 'multiple_choice',
            prompt: 'Which word means "Water" in Kĩkamba?',
            correctAnswer: 'Maaĩ',
            options: ['Maaĩ', 'Mũtĩ', 'Kĩĩma', 'Ũta'],
            hint: 'Pronounced mah-ah-ee, also maanzi'
          },
          {
            type: 'match_pairs',
            prompt: 'Match homestead and landscape terms:',
            correctAnswer: 'Mũsyĩ: Homestead, Nyũmba: House, Kĩĩma: Hill, Ũta: Bow',
            pairs: [
              { left: 'Mũsyĩ', right: 'Homestead' },
              { left: 'Nyũmba', right: 'House' },
              { left: 'Kĩĩma', right: 'Hill' },
              { left: 'Ũta', right: 'Bow' }
            ]
          }
        ]
      },
      {
        id: 'kamba-animals-livestock',
        title: 'Livestock & Animals',
        icon: 'Footprints',
        description: 'Cattle, goats, chickens, and wildlife of the Ukambani plains.',
        tips: "Livestock ('Mũitho') is a traditional store of wealth. In Kamba, 'Ng'ombe' is cattle/cow, 'Mbũi' is goat, and 'Nthenge' is the mature male he-goat used in community reconciliations.",
        culturalNote: "Goats ('Mbũi') played a central role in pre-colonial dispute resolution and bride wealth agreements, carefully overseen by village councils.",
        words: [
          { target: 'Ng\'ombe', source: 'Cow / Cattle', pronunciation: 'ng-ohm-beh', hint: 'Primary herd animal' },
          { target: 'Nthenge', source: 'He-goat / Billy-goat', pronunciation: 'n-thehn-geh', hint: 'Mature male goat' },
          { target: 'Mbũi', source: 'She-goat', pronunciation: 'm-boo-ee', hint: 'Caprine herd animal' },
          { target: 'Ĩvwi', source: 'Bull', pronunciation: 'ee-vwee', hint: 'Breeding male bovine' },
          { target: 'Mwana wa ng\'ombe', source: 'Calf', pronunciation: 'mwah-nah wah ng-ohm-beh', hint: 'Young bovine' },
          { target: 'Ngũkũ', source: 'Chicken / Fowl', pronunciation: 'ng-oo-koo', hint: 'Domestic poultry' },
          { target: 'Kĩtui', source: 'Hyena', pronunciation: 'kee-too-ee', hint: 'Wild nocturnal predator' },
          { target: 'Munambo', source: 'Lion', pronunciation: 'moo-nahm-boh', hint: 'Apex savanna carnivore' },
          { target: 'Mbĩva', source: 'Bird', pronunciation: 'm-bee-vah', hint: 'Winged creature' },
          { target: 'Mũnoo', source: 'Fish', pronunciation: 'moo-noh-oh', hint: 'Freshwater catch' }
        ],
        sentences: [
          { target: 'Ng\'ombe syĩ nza ya mũsyĩ.', source: 'The cows are outside the homestead.' },
          { target: 'Mbũi nĩsyĩĩthwa kĩthekanĩ.', source: 'The goats are grazed in the bush.' },
          { target: 'Munambo e kĩthekanĩ kitheu.', source: 'The lion is in the open bush.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does "Nthenge" mean in Kĩkamba?',
            correctAnswer: 'He-goat / Billy-goat',
            options: ['He-goat / Billy-goat', 'Lion', 'Chicken', 'Cow'],
            hint: 'A male goat used in traditional reconciliation'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the animals with their Kamba names:',
            correctAnswer: 'Ng\'ombe: Cow, Mbũi: She-goat, Ngũkũ: Chicken, Munambo: Lion',
            pairs: [
              { left: 'Ng\'ombe', right: 'Cow' },
              { left: 'Mbũi', right: 'She-goat' },
              { left: 'Ngũkũ', right: 'Chicken' },
              { left: 'Munambo', right: 'Lion' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kamba-unit-4',
    title: 'Unit 4: Action Verbs & Daily Sentences',
    description: 'Master core verbal conjugations, infinitives, and conversational inquiry structures.',
    icon: '⚡',
    skills: [
      {
        id: 'kamba-verbs',
        title: 'Essential Action Verbs',
        icon: 'Activity',
        description: 'Key action verbs and infinitives derived from Hinde (1904).',
        tips: "In Kĩkamba, the infinitive prefix is 'Kũ-' or 'Gũ-': 'Kũthi' (to go), 'Kũka' (to come), 'Kũya' (to eat), 'Kũnywa' (to drink), 'Kwona' (to see), and 'Kwenda' (to want/love). When forming first person present tense, 'Nĩngwenda' means 'I want'.",
        culturalNote: "Working collaboratively in the fields was organized under the 'Mwethya' system—communal labor where neighbors united to plow, weed, and harvest together.",
        words: [
          { target: 'Kũthi', source: 'To go / Walk', pronunciation: 'koo-thee', hint: 'Movement away' },
          { target: 'Kũka', source: 'To come / Arrive', pronunciation: 'koo-kah', hint: 'Movement toward' },
          { target: 'Kũya', source: 'To eat', pronunciation: 'koo-yah', hint: 'Consuming food' },
          { target: 'Kũnywa', source: 'To drink', pronunciation: 'koo-nywah', hint: 'Consuming liquid' },
          { target: 'Kwona', source: 'To see', pronunciation: 'kwoh-nah', hint: 'Visual perception' },
          { target: 'Kwenda', source: 'To want / Love', pronunciation: 'kwehn-dah', hint: 'Desire or affection' },
          { target: 'Kũthũkũma', source: 'To work / Labor', pronunciation: 'koo-thoo-koo-mah', hint: 'Performing labor' },
          { target: 'Kũmanya', source: 'To know / Understand', pronunciation: 'koo-mah-nyah', hint: 'Knowledge' },
          { target: 'Kũvoya', source: 'To pray / Request', pronunciation: 'koo-voh-yah', hint: 'Supplication or prayer' },
          { target: 'Kũthooa', source: 'To trade / Sell', pronunciation: 'koo-thoh-oh-ah', hint: 'Commerce' }
        ],
        sentences: [
          { target: 'Nĩngwenda kũthi mũsyĩ.', source: 'I want to go home.' },
          { target: 'Nĩtũkũya lĩu mũseo.', source: 'We are eating good food.' },
          { target: 'Nĩmanya ũvoo wa w\'o.', source: 'I know the true story.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "To eat" in Kĩkamba?',
            correctAnswer: 'Kũya',
            options: ['Kũya', 'Kũnywa', 'Kũthi', 'Kũka'],
            hint: 'Infinitive for consuming nourishment'
          },
          {
            type: 'multiple_choice',
            prompt: 'What does "Kũthũkũma" mean?',
            correctAnswer: 'To work / Labor',
            options: ['To work / Labor', 'To pray', 'To drink', 'To see'],
            hint: 'Productive activity'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Kamba verbs:',
            correctAnswer: 'Kũthi: To go, Kũka: To come, Kũnywa: To drink, Kwona: To see',
            pairs: [
              { left: 'Kũthi', right: 'To go' },
              { left: 'Kũka', right: 'To come' },
              { left: 'Kũnywa', right: 'To drink' },
              { left: 'Kwona', right: 'To see' }
            ]
          },
          {
            type: 'fill_blank',
            prompt: 'Complete: "Nĩngwenda _____ mũsyĩ." (I want to go home.)',
            correctAnswer: 'kũthi',
            options: ['kũthi', 'kũya', 'kũnywa', 'kũmanya'],
            hint: 'Infinitive for to go'
          }
        ]
      },
      {
        id: 'kamba-daily-questions',
        title: 'Inquiries & Conversations',
        icon: 'MessageSquare',
        description: 'Question words and practical dialogue phrases recorded in Hinde (1904).',
        tips: "Question words in Kamba often append to the verb: 'Wĩta wata?' ('What is your name?'), 'Ũthi naku?' ('Where are you going?'), 'Wĩndakĩ?' ('What do you want?'). 'Nĩ w'o' means 'It is true'.",
        culturalNote: "When speaking with village elders, questions are voiced gently with deferential prefixes to maintain harmony and respect.",
        words: [
          { target: 'Wĩta wata?', source: 'What is your name?', pronunciation: 'wee-tah wah-tah', hint: 'Name inquiry' },
          { target: 'Ũthi naku?', source: 'Where are you going?', pronunciation: 'oo-thee nah-koo', hint: 'Destination inquiry' },
          { target: 'Wĩndakĩ?', source: 'What do you want?', pronunciation: 'ween-dah-kee', hint: 'Desire inquiry' },
          { target: 'Ũumite va?', source: 'Where have you come from?', pronunciation: 'oo-oo-mee-teh vah', hint: 'Origin inquiry' },
          { target: 'Wĩka ata?', source: 'What are you doing?', pronunciation: 'wee-kah ah-tah', hint: 'Action inquiry' },
          { target: 'Nĩ ndĩa?', source: 'When?', pronunciation: 'nee n-dee-ah', hint: 'Time question' },
          { target: 'Nata?', source: 'How?', pronunciation: 'nah-tah', hint: 'Manner question' },
          { target: 'Nũũ?', source: 'Who?', pronunciation: 'noo-oo', hint: 'Person question' },
          { target: 'Nĩ kĩ?', source: 'Why? / What for?', pronunciation: 'nee kee', hint: 'Reason question' }
        ],
        sentences: [
          { target: 'Wĩta wata, mũndũ mũkaani?', source: 'What is your name, my friend?' },
          { target: 'Ũthi naku ũmũnthĩ?', source: 'Where are you going today?' },
          { target: 'Nĩngwenda kũmanya wĩo.', source: 'I want to know the truth.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you ask "Where are you going?" in Kĩkamba?',
            correctAnswer: 'Ũthi naku?',
            options: ['Ũthi naku?', 'Wĩta wata?', 'Wĩndakĩ?', 'Wĩka ata?'],
            hint: 'From the verb kũthi (to go)'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the question phrases:',
            correctAnswer: 'Wĩta wata?: What is your name?, Wĩndakĩ?: What do you want?, Nũũ?: Who?, Nata?: How?',
            pairs: [
              { left: 'Wĩta wata?', right: 'What is your name?' },
              { left: 'Wĩndakĩ?', right: 'What do you want?' },
              { left: 'Nũũ?', right: 'Who?' },
              { left: 'Nata?', right: 'How?' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kamba-unit-5',
    title: 'Unit 5: Cultural Wisdom, Shrines & Sacred Ecology',
    description: 'Explore the ancestral worldview, sacred Ithembo sanctuaries, and traditional restorative justice.',
    icon: '🌳',
    skills: [
      {
        id: 'kamba-culture-sacred',
        title: 'Sacred Shrines & Oaths',
        icon: 'BookOpen',
        description: 'Explore concepts of God, ancestral shrines, and peace covenants from Hobley (1922).',
        tips: "In Akamba cosmology, God is known as 'Ngai' or 'Mũlũngũ'. Sacrificial sanctuaries under sacred trees are called 'Ithembo' (pl. 'Mathembo'). Solemn dispute resolutions were sealed with the inviolable 'Kĩthĩto' stone oath, invoking spiritual balance rather than punitive revenge.",
        culturalNote: "The Ithembo sacred grove served as an environmental sanctuary where felling trees or harming wildlife was strictly forbidden ('Kũthata'), preserving essential biodiversity and water catchments across the hills.",
        words: [
          { target: 'Mũlũngũ', source: 'God / Supreme Creator', pronunciation: 'moo-loo-ngoo', hint: 'Also known as Ngai' },
          { target: 'Ithembo', source: 'Sacred tree shrine / Sanctuary', pronunciation: 'ee-thehm-boh', hint: 'Plural: Mathembo' },
          { target: 'Aimũ', source: 'Ancestral spirits', pronunciation: 'ah-ee-moo', hint: 'Revered departed ancestors' },
          { target: 'Kĩthĩto', source: 'Sacred oath stone / Covenant', pronunciation: 'kee-thee-toh', hint: 'Solemn traditional truth oath' },
          { target: 'Ũvoo wa w\'o', source: 'Truth / Integrity', pronunciation: 'oo-voh wah woh', hint: 'Moral honesty' },
          { target: 'Kũvoya mbya', source: 'Prayer for rain', pronunciation: 'koo-voh-yah m-byah', hint: 'Ceremonial supplication during drought' },
          { target: 'Kũthata', source: 'Sacred taboo / Prohibition', pronunciation: 'koo-thah-tah', hint: 'Spiritual conservation restriction' }
        ],
        sentences: [
          { target: 'Athee nĩmavoya Ithembonĩ.', source: 'The elders pray at the sacred shrine.' },
          { target: 'Mũlũngũ nĩwe ũnengana mbua.', source: 'God is the one who gives rain.' },
          { target: 'Kĩthĩto kĩtĩvĩtw\'e nĩ mũndũ wa ma.', source: 'The sacred oath is not broken by a person of truth.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is an "Ithembo" in Akamba spiritual ecology?',
            correctAnswer: 'Sacred tree shrine / Sanctuary',
            options: ['Sacred tree shrine / Sanctuary', 'Trading market', 'Hunting bow', 'Iron forge'],
            hint: 'A protected grove dedicated to prayer and offerings'
          },
          {
            type: 'multiple_choice',
            prompt: 'Which sacred covenant stone was sworn to seal truth in traditional disputes?',
            correctAnswer: 'Kĩthĩto',
            options: ['Kĩthĩto', 'Mavai', 'Mũsyĩ', 'Mũtĩ'],
            hint: 'Solemn oath object documented by Hobley (1922)'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the sacred ecological terms:',
            correctAnswer: 'Mũlũngũ: God, Ithembo: Sacred shrine, Aimũ: Ancestral spirits, Kĩthĩto: Oath stone',
            pairs: [
              { left: 'Mũlũngũ', right: 'God' },
              { left: 'Ithembo', right: 'Sacred shrine' },
              { left: 'Aimũ', right: 'Ancestral spirits' },
              { left: 'Kĩthĩto', right: 'Oath stone' }
            ]
          }
        ]
      }
    ]
  }
];
