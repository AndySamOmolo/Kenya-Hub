// ============================================================
// Kamba (Kĩkamba) Language Course Configuration & Units
// Based on "Grammar of the Kamba Language" by J.T. Last (CMS, 1885),
// "Vocabularies of the Kamba and Kikuyu Languages"
// by Hildegarde Hinde (Cambridge University Press, 1904),
// and "Bantu Beliefs and Customary Institutions" by C.W. Hobley (1922).
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
  },
  
  // ── EXPANDED SOURCE-VERIFIED UNITS ──
  {
    "id": "kamba-unit-6-greetings",
    "title": "Unit 6: Greetings & Farewells",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Greetings & Farewells, vetted from J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
    "icon": "Handshake",
    "skills": [
      {
        "id": "kamba-exp-greetings",
        "title": "Greetings & Farewells",
        "icon": "Handshake",
        "description": "Master Kamba (Kĩkamba) greetings & farewells vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Greetings & Farewells, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ũvoo?' (How are you?), 'Nĩ mũseo' (I am fine), 'O voo' (Hello / Salutation), 'Wĩa?' (What's the news / What's up?).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Ũvoo?",
            "source": "How are you?",
            "pronunciation": "oo-voh",
            "hint": "Standard greeting — literally 'News?'",
            "example": "Ũvoo? — How are you? (Standard greeting — literally 'News?')"
          },
          {
            "target": "Nĩ mũseo",
            "source": "I am fine",
            "pronunciation": "nee moo-seh-oh",
            "hint": "Standard reply meaning 'I am well / good'",
            "example": "Nĩ mũseo — I am fine (Standard reply meaning 'I am well / good')"
          },
          {
            "target": "O voo",
            "source": "Hello / Salutation",
            "pronunciation": "oh voh",
            "hint": "Traditional greeting recorded by Hinde (1904); Ulu: 'O voo', Reply: 'O voo nēza' / 'Nĩ mũseo'",
            "example": "O voo — Hello / Salutation (Traditional greeting recorded by Hinde (1904); Ulu: 'O voo', Reply: 'O voo nēza' / 'Nĩ mũseo')"
          },
          {
            "target": "Wĩa?",
            "source": "What's the news / What's up?",
            "pronunciation": "wee-ah",
            "hint": "Casual colloquial greeting — 'What is the word?'",
            "example": "Wĩa? — What's the news / What's up? (Casual colloquial greeting — 'What is the word?')"
          },
          {
            "target": "Wĩa mwau wa ũthukũ",
            "source": "Good morning",
            "pronunciation": "wee-ah mwah-oo wah oo-thoo-koo",
            "hint": "Morning greeting",
            "example": "Wĩa mwau wa ũthukũ — Good morning (Morning greeting)"
          },
          {
            "target": "Nĩ vaa mũno",
            "source": "Thank you",
            "pronunciation": "nee vah-ah moo-noh",
            "hint": "Expressing deep gratitude ('thank you very much')",
            "example": "Nĩ vaa mũno — Thank you (Expressing deep gratitude ('thank you very much'))"
          },
          {
            "target": "Tũonane",
            "source": "Goodbye (we will meet)",
            "pronunciation": "too-oh-nah-neh",
            "hint": "Farewell — 'We will see each other again'",
            "example": "Tũonane — Goodbye (we will meet) (Farewell — 'We will see each other again')"
          },
          {
            "target": "Wĩa mũseo",
            "source": "Welcome",
            "pronunciation": "wee-ah moo-seh-oh",
            "hint": "Welcoming a visitor or guest",
            "example": "Wĩa mũseo — Welcome (Welcoming a visitor or guest)"
          },
          {
            "target": "Mũyo",
            "source": "Peace",
            "pronunciation": "moo-yoh",
            "hint": "Traditional blessing of peace, contentment and happiness",
            "example": "Mũyo — Peace (Traditional blessing of peace, contentment and happiness)"
          },
          {
            "target": "Sova / Pole",
            "source": "Sorry",
            "pronunciation": "soh-vah / poh-leh",
            "hint": "Expression of empathy or comfort",
            "example": "Sova / Pole — Sorry (Expression of empathy or comfort)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ũvoo?\" mean in English?",
            "correctAnswer": "How are you?",
            "options": [
              "I am fine",
              "Hello / Salutation",
              "What's the news / What's up?",
              "How are you?"
            ],
            "hint": "Standard greeting — literally 'News?'"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nĩ mũseo\" mean in English?",
            "correctAnswer": "I am fine",
            "options": [
              "Hello / Salutation",
              "What's the news / What's up?",
              "I am fine",
              "How are you?"
            ],
            "hint": "Standard reply meaning 'I am well / good'"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"O voo\" mean in English?",
            "correctAnswer": "Hello / Salutation",
            "options": [
              "What's the news / What's up?",
              "Hello / Salutation",
              "How are you?",
              "I am fine"
            ],
            "hint": "Traditional greeting recorded by Hinde (1904); Ulu: 'O voo', Reply: 'O voo nēza' / 'Nĩ mũseo'"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Hello / Salutation\" in Kamba (Kĩkamba)?",
            "correctAnswer": "O voo",
            "options": [
              "O voo",
              "Ũvoo?",
              "Nĩ mũseo",
              "Wĩa?"
            ],
            "hint": "oh voh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"What's the news / What's up?\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Wĩa?",
            "options": [
              "Ũvoo?",
              "Nĩ mũseo",
              "O voo",
              "Wĩa?"
            ],
            "hint": "wee-ah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Good morning\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Wĩa mwau wa ũthukũ",
            "options": [
              "Nĩ mũseo",
              "O voo",
              "Wĩa mwau wa ũthukũ",
              "Ũvoo?"
            ],
            "hint": "wee-ah mwah-oo wah oo-thoo-koo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Ũvoo?: How are you?, Nĩ mũseo: I am fine, O voo: Hello / Salutation, Wĩa?: What's the news / What's up?",
            "pairs": [
              {
                "left": "Ũvoo?",
                "right": "How are you?"
              },
              {
                "left": "Nĩ mũseo",
                "right": "I am fine"
              },
              {
                "left": "O voo",
                "right": "Hello / Salutation"
              },
              {
                "left": "Wĩa?",
                "right": "What's the news / What's up?"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"How are you?\" in Kamba (Kĩkamba).",
            "correctAnswer": "Ũvoo?",
            "options": [
              "Ũvoo?",
              "Nĩ mũseo",
              "O voo",
              "Wĩa?"
            ],
            "hint": "oo-voh"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-7-numbers",
    "title": "Unit 7: Numbers",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Numbers, vetted from J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
    "icon": "Hash",
    "skills": [
      {
        "id": "kamba-exp-numbers",
        "title": "Numbers",
        "icon": "Hash",
        "description": "Master Kamba (Kĩkamba) numbers vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Numbers, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ithano' (Five), 'Thanthantũ' (Six), 'Nyaanya' (Eight), 'Ĩkũmi na ĩmwe' (Eleven).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Ithano",
            "source": "Five",
            "pronunciation": "ee-thah-noh",
            "hint": "Ulu dialect: itanu; Nganyawa dialect: kitanu",
            "example": "Ithano — Five (Ulu dialect: itanu; Nganyawa dialect: kitanu)"
          },
          {
            "target": "Thanthantũ",
            "source": "Six",
            "pronunciation": "thahn-thahn-too",
            "hint": "Ulu dialect: thanthatu; Nganyawa dialect: thandatu",
            "example": "Thanthantũ — Six (Ulu dialect: thanthatu; Nganyawa dialect: thandatu)"
          },
          {
            "target": "Nyaanya",
            "source": "Eight",
            "pronunciation": "nyah-ah-nyah",
            "hint": "Ulu dialect: nyanya; Nganyawa dialect: nanya",
            "example": "Nyaanya — Eight (Ulu dialect: nyanya; Nganyawa dialect: nanya)"
          },
          {
            "target": "Ĩkũmi na ĩmwe",
            "source": "Eleven",
            "pronunciation": "ee-koo-mee nah ee-mweh",
            "hint": "Literally 'ten and one'",
            "example": "Ĩkũmi na ĩmwe — Eleven (Literally 'ten and one')"
          },
          {
            "target": "Mĩongo ĩlĩ",
            "source": "Twenty",
            "pronunciation": "mee-ohn-goh ee-lee",
            "hint": "Hinde: miongoele ('two tens')",
            "example": "Mĩongo ĩlĩ — Twenty (Hinde: miongoele ('two tens'))"
          },
          {
            "target": "Mĩongo ĩtatũ",
            "source": "Thirty",
            "pronunciation": "mee-ohn-goh ee-tah-too",
            "hint": "Three tens",
            "example": "Mĩongo ĩtatũ — Thirty (Three tens)"
          },
          {
            "target": "Mĩongo ĩnya",
            "source": "Forty",
            "pronunciation": "mee-ohn-goh ee-nyah",
            "hint": "Ulu: miongo enna; Nganyawa: miongo inya",
            "example": "Mĩongo ĩnya — Forty (Ulu: miongo enna; Nganyawa: miongo inya)"
          },
          {
            "target": "Mĩongo ĩthano",
            "source": "Fifty",
            "pronunciation": "mee-ohn-goh ee-thah-noh",
            "hint": "Five tens (Ulu: miongo itanu; Nganyawa: miongo kitanu)",
            "example": "Mĩongo ĩthano — Fifty (Five tens (Ulu: miongo itanu; Nganyawa: miongo kitanu))"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ithano\" mean in English?",
            "correctAnswer": "Five",
            "options": [
              "Six",
              "Eight",
              "Eleven",
              "Five"
            ],
            "hint": "Ulu dialect: itanu; Nganyawa dialect: kitanu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Thanthantũ\" mean in English?",
            "correctAnswer": "Six",
            "options": [
              "Eight",
              "Eleven",
              "Six",
              "Five"
            ],
            "hint": "Ulu dialect: thanthatu; Nganyawa dialect: thandatu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nyaanya\" mean in English?",
            "correctAnswer": "Eight",
            "options": [
              "Eleven",
              "Eight",
              "Five",
              "Six"
            ],
            "hint": "Ulu dialect: nyanya; Nganyawa dialect: nanya"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eight\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Nyaanya",
            "options": [
              "Nyaanya",
              "Ithano",
              "Thanthantũ",
              "Ĩkũmi na ĩmwe"
            ],
            "hint": "nyah-ah-nyah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eleven\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Ĩkũmi na ĩmwe",
            "options": [
              "Ithano",
              "Thanthantũ",
              "Nyaanya",
              "Ĩkũmi na ĩmwe"
            ],
            "hint": "ee-koo-mee nah ee-mweh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Twenty\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Mĩongo ĩlĩ",
            "options": [
              "Thanthantũ",
              "Nyaanya",
              "Mĩongo ĩlĩ",
              "Ithano"
            ],
            "hint": "mee-ohn-goh ee-lee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Ithano: Five, Thanthantũ: Six, Nyaanya: Eight, Ĩkũmi na ĩmwe: Eleven",
            "pairs": [
              {
                "left": "Ithano",
                "right": "Five"
              },
              {
                "left": "Thanthantũ",
                "right": "Six"
              },
              {
                "left": "Nyaanya",
                "right": "Eight"
              },
              {
                "left": "Ĩkũmi na ĩmwe",
                "right": "Eleven"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Five\" in Kamba (Kĩkamba).",
            "correctAnswer": "Ithano",
            "options": [
              "Ithano",
              "Thanthantũ",
              "Nyaanya",
              "Ĩkũmi na ĩmwe"
            ],
            "hint": "ee-thah-noh"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-8-family",
    "title": "Unit 8: Family & Relationships",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Family & Relationships, vetted from J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
    "icon": "Users",
    "skills": [
      {
        "id": "kamba-exp-family",
        "title": "Family & Relationships (Part 1)",
        "icon": "Users",
        "description": "Master Kamba (Kĩkamba) family & relationships vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Family & Relationships, pay special attention to pronunciation and morphological prefixes/suffixes: 'Asa / Tata' (Father), 'Mwaitũ / Ĩvaa' (Mother), 'Kaana' (Child), 'Kavĩsĩ' (Boy / Male youth).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Asa / Tata",
            "source": "Father",
            "pronunciation": "ah-sah / tah-tah",
            "hint": "Dialects: Ulu uses 'Nau' or 'Asa'; Nganyawa uses 'Atsa' or 'Bata'",
            "example": "Asa / Tata — Father (Dialects: Ulu uses 'Nau' or 'Asa'; Nganyawa uses 'Atsa' or 'Bata')"
          },
          {
            "target": "Mwaitũ / Ĩvaa",
            "source": "Mother",
            "pronunciation": "mwah-ee-too / ee-vah",
            "hint": "Hinde Ulu: 'Maiitu'; Nganyawa: 'Mwaitu'",
            "example": "Mwaitũ / Ĩvaa — Mother (Hinde Ulu: 'Maiitu'; Nganyawa: 'Mwaitu')"
          },
          {
            "target": "Kaana",
            "source": "Child",
            "pronunciation": "kah-ah-nah",
            "hint": "Plural: Twana (children)",
            "example": "Kaana — Child (Plural: Twana (children))"
          },
          {
            "target": "Kavĩsĩ",
            "source": "Boy / Male youth",
            "pronunciation": "kah-vee-see",
            "hint": "Hinde Ulu: kabisi; Plural: Syavĩsĩ",
            "example": "Kavĩsĩ — Boy / Male youth (Hinde Ulu: kabisi; Plural: Syavĩsĩ)"
          },
          {
            "target": "Kelĩtu",
            "source": "Girl / Maiden",
            "pronunciation": "keh-lee-too",
            "hint": "Hinde Ulu: kēlletu; Nganyawa: kananga; Plural: Twelĩtu",
            "example": "Kelĩtu — Girl / Maiden (Hinde Ulu: kēlletu; Nganyawa: kananga; Plural: Twelĩtu)"
          },
          {
            "target": "Mũndũ mũme",
            "source": "Man / Male",
            "pronunciation": "moon-doo moo-meh",
            "hint": "Plural: Andũ aume (Hinde: mundu mumiu / mume)",
            "example": "Mũndũ mũme — Man / Male (Plural: Andũ aume (Hinde: mundu mumiu / mume))"
          },
          {
            "target": "Mũndũ mũka",
            "source": "Woman / Female",
            "pronunciation": "moon-doo moo-kah",
            "hint": "Plural: Andũ aka (Hinde Ulu: mundu muka; Nganyawa: manamuka)",
            "example": "Mũndũ mũka — Woman / Female (Plural: Andũ aka (Hinde Ulu: mundu muka; Nganyawa: manamuka))"
          },
          {
            "target": "Mũtumia",
            "source": "Elder",
            "pronunciation": "moo-too-mee-ah",
            "hint": "Ulu: muku; Nganyawa: mtumia; Plural: Atumia",
            "example": "Mũtumia — Elder (Ulu: muku; Nganyawa: mtumia; Plural: Atumia)"
          },
          {
            "target": "Umau / Guka",
            "source": "Grandfather",
            "pronunciation": "oo-mah-oo / goo-kah",
            "hint": "Ulu: umāā; Nganyawa: atza mnini",
            "example": "Umau / Guka — Grandfather (Ulu: umāā; Nganyawa: atza mnini)"
          },
          {
            "target": "Mwaitũ mũkũũ / Ũsũũ",
            "source": "Grandmother",
            "pronunciation": "mwah-ee-too moo-koo-oo / oo-soo-oo",
            "hint": "Respectful elder mother; Hinde: inya",
            "example": "Mwaitũ mũkũũ / Ũsũũ — Grandmother (Respectful elder mother; Hinde: inya)"
          },
          {
            "target": "Mwananyanya",
            "source": "Brother",
            "pronunciation": "mwah-nah-nyah-nyah",
            "hint": "Ulu: nindu; Nganyawa: mwinai",
            "example": "Mwananyanya — Brother (Ulu: nindu; Nganyawa: mwinai)"
          },
          {
            "target": "Mwĩtu wa mwaitũ",
            "source": "Sister",
            "pronunciation": "mwee-too wah mwah-ee-too",
            "hint": "Literally 'daughter of our mother'; Hinde: mwtiaiya",
            "example": "Mwĩtu wa mwaitũ — Sister (Literally 'daughter of our mother'; Hinde: mwtiaiya)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Asa / Tata\" mean in English?",
            "correctAnswer": "Father",
            "options": [
              "Mother",
              "Child",
              "Boy / Male youth",
              "Father"
            ],
            "hint": "Dialects: Ulu uses 'Nau' or 'Asa'; Nganyawa uses 'Atsa' or 'Bata'"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mwaitũ / Ĩvaa\" mean in English?",
            "correctAnswer": "Mother",
            "options": [
              "Child",
              "Boy / Male youth",
              "Mother",
              "Father"
            ],
            "hint": "Hinde Ulu: 'Maiitu'; Nganyawa: 'Mwaitu'"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kaana\" mean in English?",
            "correctAnswer": "Child",
            "options": [
              "Boy / Male youth",
              "Child",
              "Father",
              "Mother"
            ],
            "hint": "Plural: Twana (children)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Child\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kaana",
            "options": [
              "Kaana",
              "Asa / Tata",
              "Mwaitũ / Ĩvaa",
              "Kavĩsĩ"
            ],
            "hint": "kah-ah-nah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Boy / Male youth\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kavĩsĩ",
            "options": [
              "Asa / Tata",
              "Mwaitũ / Ĩvaa",
              "Kaana",
              "Kavĩsĩ"
            ],
            "hint": "kah-vee-see"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Girl / Maiden\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kelĩtu",
            "options": [
              "Mwaitũ / Ĩvaa",
              "Kaana",
              "Kelĩtu",
              "Asa / Tata"
            ],
            "hint": "keh-lee-too"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Asa / Tata: Father, Mwaitũ / Ĩvaa: Mother, Kaana: Child, Kavĩsĩ: Boy / Male youth",
            "pairs": [
              {
                "left": "Asa / Tata",
                "right": "Father"
              },
              {
                "left": "Mwaitũ / Ĩvaa",
                "right": "Mother"
              },
              {
                "left": "Kaana",
                "right": "Child"
              },
              {
                "left": "Kavĩsĩ",
                "right": "Boy / Male youth"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Father\" in Kamba (Kĩkamba).",
            "correctAnswer": "Asa / Tata",
            "options": [
              "Asa / Tata",
              "Mwaitũ / Ĩvaa",
              "Kaana",
              "Kavĩsĩ"
            ],
            "hint": "ah-sah / tah-tah"
          }
        ]
      },
      {
        "id": "kamba-exp-family-2",
        "title": "Family & Relationships (Part 2)",
        "icon": "Users",
        "description": "Master Kamba (Kĩkamba) family & relationships vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Family & Relationships, pay special attention to pronunciation and morphological prefixes/suffixes: 'Mũnyanya' (Friend), 'Mũme' (Husband), 'Mũtanya' (Judge / Arbitrator), 'Mũtongoi' (Guide / Caravan leader).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Mũnyanya",
            "source": "Friend",
            "pronunciation": "moo-nyah-nyah",
            "hint": "Ulu: nendu; Nganyawa: mnyanya",
            "example": "Mũnyanya — Friend (Ulu: nendu; Nganyawa: mnyanya)"
          },
          {
            "target": "Mũme",
            "source": "Husband",
            "pronunciation": "moo-meh",
            "hint": "Hinde: mume akwa ('my husband')",
            "example": "Mũme — Husband (Hinde: mume akwa ('my husband'))"
          },
          {
            "target": "Mũtanya",
            "source": "Judge / Arbitrator",
            "pronunciation": "moo-tahn-yah",
            "hint": "Plural: Atanya. Historical judicial council arbitrator recorded by J.T. Last (1885)",
            "example": "Mũtanya — Judge / Arbitrator (Plural: Atanya. Historical judicial council arbitrator recorded by J.T. Last (1885))"
          },
          {
            "target": "Mũtongoi",
            "source": "Guide / Caravan leader",
            "pronunciation": "moo-toh-ngoh-ee",
            "hint": "Plural: Atongoi. Pathfinder or caravan leader recorded by J.T. Last (1885)",
            "example": "Mũtongoi — Guide / Caravan leader (Plural: Atongoi. Pathfinder or caravan leader recorded by J.T. Last (1885))"
          },
          {
            "target": "Mwĩmi",
            "source": "Farmer / Agriculturist",
            "pronunciation": "mwee-mee",
            "hint": "Plural: Aimi. Cultivator of the land recorded by J.T. Last (1885): mwimi / aimi",
            "example": "Mwĩmi — Farmer / Agriculturist (Plural: Aimi. Cultivator of the land recorded by J.T. Last (1885): mwimi / aimi)"
          }
        ],
        "sentences": [
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          },
          {
            "target": "Mũndũ mũka nũũkua kĩw'ũ na mbisu.",
            "source": "The woman is carrying water with a pot."
          },
          {
            "target": "Mũũnda witũ wĩ na mbemba mbingĩ.",
            "source": "Our farm has plenty of maize."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mũnyanya\" mean in English?",
            "correctAnswer": "Friend",
            "options": [
              "Husband",
              "Judge / Arbitrator",
              "Guide / Caravan leader",
              "Friend"
            ],
            "hint": "Ulu: nendu; Nganyawa: mnyanya"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mũme\" mean in English?",
            "correctAnswer": "Husband",
            "options": [
              "Judge / Arbitrator",
              "Guide / Caravan leader",
              "Husband",
              "Friend"
            ],
            "hint": "Hinde: mume akwa ('my husband')"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mũtanya\" mean in English?",
            "correctAnswer": "Judge / Arbitrator",
            "options": [
              "Guide / Caravan leader",
              "Judge / Arbitrator",
              "Friend",
              "Husband"
            ],
            "hint": "Plural: Atanya. Historical judicial council arbitrator recorded by J.T. Last (1885)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Judge / Arbitrator\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Mũtanya",
            "options": [
              "Mũtanya",
              "Mũnyanya",
              "Mũme",
              "Mũtongoi"
            ],
            "hint": "moo-tahn-yah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Guide / Caravan leader\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Mũtongoi",
            "options": [
              "Mũnyanya",
              "Mũme",
              "Mũtanya",
              "Mũtongoi"
            ],
            "hint": "moo-toh-ngoh-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Farmer / Agriculturist\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Mwĩmi",
            "options": [
              "Mũme",
              "Mũtanya",
              "Mwĩmi",
              "Mũnyanya"
            ],
            "hint": "mwee-mee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Mũnyanya: Friend, Mũme: Husband, Mũtanya: Judge / Arbitrator, Mũtongoi: Guide / Caravan leader",
            "pairs": [
              {
                "left": "Mũnyanya",
                "right": "Friend"
              },
              {
                "left": "Mũme",
                "right": "Husband"
              },
              {
                "left": "Mũtanya",
                "right": "Judge / Arbitrator"
              },
              {
                "left": "Mũtongoi",
                "right": "Guide / Caravan leader"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Friend\" in Kamba (Kĩkamba).",
            "correctAnswer": "Mũnyanya",
            "options": [
              "Mũnyanya",
              "Mũme",
              "Mũtanya",
              "Mũtongoi"
            ],
            "hint": "moo-nyah-nyah"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-9-nature",
    "title": "Unit 9: Nature & Environment",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Nature & Environment, vetted from J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
    "icon": "Sun",
    "skills": [
      {
        "id": "kamba-exp-nature",
        "title": "Nature & Environment (Part 1)",
        "icon": "Sun",
        "description": "Master Kamba (Kĩkamba) nature & environment vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Nature & Environment, pay special attention to pronunciation and morphological prefixes/suffixes: 'Syũa' (Sun), 'Mwei' (Moon), 'Ndata' (Star), 'Ĩtu' (Sky / Cloud).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Syũa",
            "source": "Sun",
            "pronunciation": "syoo-ah",
            "hint": "Hinde Ulu: sua; Nganyawa: djua / thua",
            "example": "Syũa — Sun (Hinde Ulu: sua; Nganyawa: djua / thua)"
          },
          {
            "target": "Mwei",
            "source": "Moon",
            "pronunciation": "mweh-ee",
            "hint": "Hinde Ulu: mwei; Nganyawa: mbui; also means month",
            "example": "Mwei — Moon (Hinde Ulu: mwei; Nganyawa: mbui; also means month)"
          },
          {
            "target": "Ndata",
            "source": "Star",
            "pronunciation": "n-dah-tah",
            "hint": "Night sky star (Hinde: ndata)",
            "example": "Ndata — Star (Night sky star (Hinde: ndata))"
          },
          {
            "target": "Ĩtu",
            "source": "Sky / Cloud",
            "pronunciation": "ee-too",
            "hint": "Plural: Matu (clouds); Ulu: mwingo; Nganyawa: edu",
            "example": "Ĩtu — Sky / Cloud (Plural: Matu (clouds); Ulu: mwingo; Nganyawa: edu)"
          },
          {
            "target": "Mbua",
            "source": "Rain",
            "pronunciation": "m-boo-ah",
            "hint": "Vital seasonal rains in Ukambani (Hinde: mbua)",
            "example": "Mbua — Rain (Vital seasonal rains in Ukambani (Hinde: mbua))"
          },
          {
            "target": "Mbevo",
            "source": "Wind",
            "pronunciation": "m-beh-voh",
            "hint": "Hinde: mbebo (wind, breeze, or atmospheric cold)",
            "example": "Mbevo — Wind (Hinde: mbebo (wind, breeze, or atmospheric cold))"
          },
          {
            "target": "Ũsĩ",
            "source": "River",
            "pronunciation": "oo-see",
            "hint": "Hinde Ulu: ussi; Nganyawa: udzi",
            "example": "Ũsĩ — River (Hinde Ulu: ussi; Nganyawa: udzi)"
          },
          {
            "target": "Nyekĩ",
            "source": "Grass",
            "pronunciation": "nyeh-kee",
            "hint": "Hinde Ulu: nyekki; Nganyawa: mathangu",
            "example": "Nyekĩ — Grass (Hinde Ulu: nyekki; Nganyawa: mathangu)"
          },
          {
            "target": "Mwaki",
            "source": "Fire",
            "pronunciation": "mwah-kee",
            "hint": "Hinde Ulu: iko; Nganyawa: mwadgi / djuki",
            "example": "Mwaki — Fire (Hinde Ulu: iko; Nganyawa: mwadgi / djuki)"
          },
          {
            "target": "Manzĩ",
            "source": "Water",
            "pronunciation": "mahn-zee",
            "hint": "Hinde: maanzi",
            "example": "Manzĩ — Water (Hinde: maanzi)"
          },
          {
            "target": "Nthĩ",
            "source": "Soil / Earth / Ground",
            "pronunciation": "n-thee",
            "hint": "Hinde Ulu: panthi; Nganyawa: itheo",
            "example": "Nthĩ — Soil / Earth / Ground (Hinde Ulu: panthi; Nganyawa: itheo)"
          },
          {
            "target": "Ĩvia",
            "source": "Stone",
            "pronunciation": "ee-vee-ah",
            "hint": "Plural: Mavia (Hinde: ibia, pl. mavia)",
            "example": "Ĩvia — Stone (Plural: Mavia (Hinde: ibia, pl. mavia))"
          },
          {
            "target": "Mwamba",
            "source": "Baobab tree",
            "pronunciation": "mwahm-bah",
            "hint": "Iconic Ukambani dryland tree (Hinde: mwamba)",
            "example": "Mwamba — Baobab tree (Iconic Ukambani dryland tree (Hinde: mwamba))"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Syũa\" mean in English?",
            "correctAnswer": "Sun",
            "options": [
              "Moon",
              "Star",
              "Sky / Cloud",
              "Sun"
            ],
            "hint": "Hinde Ulu: sua; Nganyawa: djua / thua"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mwei\" mean in English?",
            "correctAnswer": "Moon",
            "options": [
              "Star",
              "Sky / Cloud",
              "Moon",
              "Sun"
            ],
            "hint": "Hinde Ulu: mwei; Nganyawa: mbui; also means month"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ndata\" mean in English?",
            "correctAnswer": "Star",
            "options": [
              "Sky / Cloud",
              "Star",
              "Sun",
              "Moon"
            ],
            "hint": "Night sky star (Hinde: ndata)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Star\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Ndata",
            "options": [
              "Ndata",
              "Syũa",
              "Mwei",
              "Ĩtu"
            ],
            "hint": "n-dah-tah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sky / Cloud\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Ĩtu",
            "options": [
              "Syũa",
              "Mwei",
              "Ndata",
              "Ĩtu"
            ],
            "hint": "ee-too"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Rain\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Mbua",
            "options": [
              "Mwei",
              "Ndata",
              "Mbua",
              "Syũa"
            ],
            "hint": "m-boo-ah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Syũa: Sun, Mwei: Moon, Ndata: Star, Ĩtu: Sky / Cloud",
            "pairs": [
              {
                "left": "Syũa",
                "right": "Sun"
              },
              {
                "left": "Mwei",
                "right": "Moon"
              },
              {
                "left": "Ndata",
                "right": "Star"
              },
              {
                "left": "Ĩtu",
                "right": "Sky / Cloud"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Sun\" in Kamba (Kĩkamba).",
            "correctAnswer": "Syũa",
            "options": [
              "Syũa",
              "Mwei",
              "Ndata",
              "Ĩtu"
            ],
            "hint": "syoo-ah"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-10-animals",
    "title": "Unit 10: Animals & Wildlife",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Animals & Wildlife, vetted from J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
    "icon": "Compass",
    "skills": [
      {
        "id": "kamba-exp-animals",
        "title": "Animals & Wildlife (Part 1)",
        "icon": "Compass",
        "description": "Master Kamba (Kĩkamba) animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ng'ombe' (Cow / Cattle), 'Nzao' (Bull), 'Mbuĩ' (Goat), 'Ĩlondu' (Sheep).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Ng'ombe",
            "source": "Cow / Cattle",
            "pronunciation": "n-gohm-beh",
            "hint": "Domestic cattle (Hinde: ngombe)",
            "example": "Ng'ombe — Cow / Cattle (Domestic cattle (Hinde: ngombe))"
          },
          {
            "target": "Nzao",
            "source": "Bull",
            "pronunciation": "n-zah-oh",
            "hint": "Hinde: nzao",
            "example": "Nzao — Bull (Hinde: nzao)"
          },
          {
            "target": "Mbuĩ",
            "source": "Goat",
            "pronunciation": "m-boo-ee",
            "hint": "Plural: Mbuĩ (Hinde: mbuii)",
            "example": "Mbuĩ — Goat (Plural: Mbuĩ (Hinde: mbuii))"
          },
          {
            "target": "Ĩlondu",
            "source": "Sheep",
            "pronunciation": "ee-lohn-doo",
            "hint": "Hinde Ulu: ilondu; Nganyawa: ngoondu",
            "example": "Ĩlondu — Sheep (Hinde Ulu: ilondu; Nganyawa: ngoondu)"
          },
          {
            "target": "Kĩtĩ / Ngiti",
            "source": "Dog",
            "pronunciation": "kee-tee / n-gee-tee",
            "hint": "Hinde Ulu: solu; Nganyawa: ngiti",
            "example": "Kĩtĩ / Ngiti — Dog (Hinde Ulu: solu; Nganyawa: ngiti)"
          },
          {
            "target": "Nyũnyi",
            "source": "Bird",
            "pronunciation": "nyoo-nyee",
            "hint": "Hinde Ulu: mbuungu; Nganyawa: nyunni",
            "example": "Nyũnyi — Bird (Hinde Ulu: mbuungu; Nganyawa: nyunni)"
          },
          {
            "target": "Nzũkĩ",
            "source": "Bee",
            "pronunciation": "n-zoo-kee",
            "hint": "Hinde Ulu: nsuki / kinyu; Nganyawa: nzuki",
            "example": "Nzũkĩ — Bee (Hinde Ulu: nsuki / kinyu; Nganyawa: nzuki)"
          },
          {
            "target": "Nzowũ",
            "source": "Elephant",
            "pronunciation": "n-zoh-woo",
            "hint": "Hinde: unzōō",
            "example": "Nzowũ — Elephant (Hinde: unzōō)"
          },
          {
            "target": "Mũnyambo",
            "source": "Lion",
            "pronunciation": "moo-nyahm-boh",
            "hint": "Hinde Ulu: munyambo; Nganyawa: thimba",
            "example": "Mũnyambo — Lion (Hinde Ulu: munyambo; Nganyawa: thimba)"
          },
          {
            "target": "Ngo",
            "source": "Leopard",
            "pronunciation": "n-goh",
            "hint": "Hinde Ulu: ngoo; Nganyawa: engo",
            "example": "Ngo — Leopard (Hinde Ulu: ngoo; Nganyawa: engo)"
          },
          {
            "target": "Mbĩtĩ",
            "source": "Hyena",
            "pronunciation": "m-bee-tee",
            "hint": "Hinde: mbiti",
            "example": "Mbĩtĩ — Hyena (Hinde: mbiti)"
          },
          {
            "target": "Mbogo / Nyaĩ",
            "source": "Buffalo",
            "pronunciation": "m-boh-goh / nyah-ee",
            "hint": "Hinde Ulu: niai; Nganyawa: mbo",
            "example": "Mbogo / Nyaĩ — Buffalo (Hinde Ulu: niai; Nganyawa: mbo)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ng'ombe\" mean in English?",
            "correctAnswer": "Cow / Cattle",
            "options": [
              "Bull",
              "Goat",
              "Sheep",
              "Cow / Cattle"
            ],
            "hint": "Domestic cattle (Hinde: ngombe)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nzao\" mean in English?",
            "correctAnswer": "Bull",
            "options": [
              "Goat",
              "Sheep",
              "Bull",
              "Cow / Cattle"
            ],
            "hint": "Hinde: nzao"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mbuĩ\" mean in English?",
            "correctAnswer": "Goat",
            "options": [
              "Sheep",
              "Goat",
              "Cow / Cattle",
              "Bull"
            ],
            "hint": "Plural: Mbuĩ (Hinde: mbuii)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Goat\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Mbuĩ",
            "options": [
              "Mbuĩ",
              "Ng'ombe",
              "Nzao",
              "Ĩlondu"
            ],
            "hint": "m-boo-ee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sheep\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Ĩlondu",
            "options": [
              "Ng'ombe",
              "Nzao",
              "Mbuĩ",
              "Ĩlondu"
            ],
            "hint": "ee-lohn-doo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Dog\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kĩtĩ / Ngiti",
            "options": [
              "Nzao",
              "Mbuĩ",
              "Kĩtĩ / Ngiti",
              "Ng'ombe"
            ],
            "hint": "kee-tee / n-gee-tee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Ng'ombe: Cow / Cattle, Nzao: Bull, Mbuĩ: Goat, Ĩlondu: Sheep",
            "pairs": [
              {
                "left": "Ng'ombe",
                "right": "Cow / Cattle"
              },
              {
                "left": "Nzao",
                "right": "Bull"
              },
              {
                "left": "Mbuĩ",
                "right": "Goat"
              },
              {
                "left": "Ĩlondu",
                "right": "Sheep"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Cow / Cattle\" in Kamba (Kĩkamba).",
            "correctAnswer": "Ng'ombe",
            "options": [
              "Ng'ombe",
              "Nzao",
              "Mbuĩ",
              "Ĩlondu"
            ],
            "hint": "n-gohm-beh"
          }
        ]
      },
      {
        "id": "kamba-exp-animals-2",
        "title": "Animals & Wildlife (Part 2)",
        "icon": "Compass",
        "description": "Master Kamba (Kĩkamba) animals & wildlife vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Animals & Wildlife, pay special attention to pronunciation and morphological prefixes/suffixes: 'Nzaĩ' (Zebra), 'Ndia' (Giraffe), 'Kĩnyangĩ' (Crocodile), 'Ngũlĩ' (Baboon).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Nzaĩ",
            "source": "Zebra",
            "pronunciation": "n-zah-ee",
            "hint": "Hinde Ulu: nzaii; Nganyawa: mbuvu",
            "example": "Nzaĩ — Zebra (Hinde Ulu: nzaii; Nganyawa: mbuvu)"
          },
          {
            "target": "Ndia",
            "source": "Giraffe",
            "pronunciation": "n-dee-ah",
            "hint": "Hinde: ndia",
            "example": "Ndia — Giraffe (Hinde: ndia)"
          },
          {
            "target": "Kĩnyangĩ",
            "source": "Crocodile",
            "pronunciation": "kee-nyahn-gee",
            "hint": "Hinde: kinyangi",
            "example": "Kĩnyangĩ — Crocodile (Hinde: kinyangi)"
          },
          {
            "target": "Ngũlĩ",
            "source": "Baboon",
            "pronunciation": "n-goo-lee",
            "hint": "Hinde: ngulli",
            "example": "Ngũlĩ — Baboon (Hinde: ngulli)"
          },
          {
            "target": "Nzoka",
            "source": "Snake",
            "pronunciation": "n-zoh-kah",
            "hint": "Hinde Ulu: enjoka; Nganyawa: mweanthi",
            "example": "Nzoka — Snake (Hinde Ulu: enjoka; Nganyawa: mweanthi)"
          },
          {
            "target": "Ĩkũyũ",
            "source": "Fish",
            "pronunciation": "ee-koo-yoo",
            "hint": "Plural: Makũyũ (Hinde: ikuyu, pl. makuyu)",
            "example": "Ĩkũyũ — Fish (Plural: Makũyũ (Hinde: ikuyu, pl. makuyu))"
          },
          {
            "target": "Kavokoo",
            "source": "Hare",
            "pronunciation": "kah-voh-koh",
            "hint": "Hinde: kabokō (folk trickster figure)",
            "example": "Kavokoo — Hare (Hinde: kabokō (folk trickster figure))"
          }
        ],
        "sentences": [
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          },
          {
            "target": "Mũndũ mũka nũũkua kĩw'ũ na mbisu.",
            "source": "The woman is carrying water with a pot."
          },
          {
            "target": "Mũũnda witũ wĩ na mbemba mbingĩ.",
            "source": "Our farm has plenty of maize."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nzaĩ\" mean in English?",
            "correctAnswer": "Zebra",
            "options": [
              "Giraffe",
              "Crocodile",
              "Baboon",
              "Zebra"
            ],
            "hint": "Hinde Ulu: nzaii; Nganyawa: mbuvu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ndia\" mean in English?",
            "correctAnswer": "Giraffe",
            "options": [
              "Crocodile",
              "Baboon",
              "Giraffe",
              "Zebra"
            ],
            "hint": "Hinde: ndia"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kĩnyangĩ\" mean in English?",
            "correctAnswer": "Crocodile",
            "options": [
              "Baboon",
              "Crocodile",
              "Zebra",
              "Giraffe"
            ],
            "hint": "Hinde: kinyangi"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Crocodile\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kĩnyangĩ",
            "options": [
              "Kĩnyangĩ",
              "Nzaĩ",
              "Ndia",
              "Ngũlĩ"
            ],
            "hint": "kee-nyahn-gee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Baboon\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Ngũlĩ",
            "options": [
              "Nzaĩ",
              "Ndia",
              "Kĩnyangĩ",
              "Ngũlĩ"
            ],
            "hint": "n-goo-lee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Snake\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Nzoka",
            "options": [
              "Ndia",
              "Kĩnyangĩ",
              "Nzoka",
              "Nzaĩ"
            ],
            "hint": "n-zoh-kah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Nzaĩ: Zebra, Ndia: Giraffe, Kĩnyangĩ: Crocodile, Ngũlĩ: Baboon",
            "pairs": [
              {
                "left": "Nzaĩ",
                "right": "Zebra"
              },
              {
                "left": "Ndia",
                "right": "Giraffe"
              },
              {
                "left": "Kĩnyangĩ",
                "right": "Crocodile"
              },
              {
                "left": "Ngũlĩ",
                "right": "Baboon"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Zebra\" in Kamba (Kĩkamba).",
            "correctAnswer": "Nzaĩ",
            "options": [
              "Nzaĩ",
              "Ndia",
              "Kĩnyangĩ",
              "Ngũlĩ"
            ],
            "hint": "n-zah-ee"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-11-food",
    "title": "Unit 11: Food & Drink",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Food & Drink, vetted from J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
    "icon": "Utensils",
    "skills": [
      {
        "id": "kamba-exp-food",
        "title": "Food & Drink (Part 1)",
        "icon": "Utensils",
        "description": "Master Kamba (Kĩkamba) food & drink vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Food & Drink, pay special attention to pronunciation and morphological prefixes/suffixes: 'Lĩu / Ĩlya' (Food), 'Ĩya' (Milk), 'Nyama' (Meat), 'Mbemba' (Maize).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Lĩu / Ĩlya",
            "source": "Food",
            "pronunciation": "lee-oo / ee-lyah",
            "hint": "Hinde Ulu: leū; Nganyawa: chakueer / kandu",
            "example": "Lĩu / Ĩlya — Food (Hinde Ulu: leū; Nganyawa: chakueer / kandu)"
          },
          {
            "target": "Ĩya",
            "source": "Milk",
            "pronunciation": "ee-yah",
            "hint": "Fresh milk (Hinde: iya); sour/buttermilk: kalia",
            "example": "Ĩya — Milk (Fresh milk (Hinde: iya); sour/buttermilk: kalia)"
          },
          {
            "target": "Nyama",
            "source": "Meat",
            "pronunciation": "nyah-mah",
            "hint": "Hinde Ulu: nyamma; Nganyawa: nama",
            "example": "Nyama — Meat (Hinde Ulu: nyamma; Nganyawa: nama)"
          },
          {
            "target": "Mbemba",
            "source": "Maize",
            "pronunciation": "m-behm-bah",
            "hint": "Hinde: mbēmba",
            "example": "Mbemba — Maize (Hinde: mbēmba)"
          },
          {
            "target": "Nthoogo / Nthzũũ",
            "source": "Beans (pigeon peas / pulses)",
            "pronunciation": "n-thoh-goh / n-thzoo",
            "hint": "Hinde: inthoogo; tree beans: nthzuu",
            "example": "Nthoogo / Nthzũũ — Beans (pigeon peas / pulses) (Hinde: inthoogo; tree beans: nthzuu)"
          },
          {
            "target": "Maĩyũ",
            "source": "Banana",
            "pronunciation": "mah-ee-yoo",
            "hint": "Hinde: maĩyu",
            "example": "Maĩyũ — Banana (Hinde: maĩyu)"
          },
          {
            "target": "Makwasĩ",
            "source": "Sweet potato",
            "pronunciation": "mah-kwah-see",
            "hint": "Hinde Ulu: makwasi; Nganyawa: makwatzi",
            "example": "Makwasĩ — Sweet potato (Hinde Ulu: makwasi; Nganyawa: makwatzi)"
          },
          {
            "target": "Wũkĩ",
            "source": "Honey",
            "pronunciation": "woo-kee",
            "hint": "Renowned Ukambani honey (Hinde: ukki wa nzuki)",
            "example": "Wũkĩ — Honey (Renowned Ukambani honey (Hinde: ukki wa nzuki))"
          },
          {
            "target": "Mbeea",
            "source": "Millet",
            "pronunciation": "m-beh-eh-ah",
            "hint": "Traditional drought-resistant grain (Hinde: mbīa)",
            "example": "Mbeea — Millet (Traditional drought-resistant grain (Hinde: mbīa))"
          },
          {
            "target": "Mũwa",
            "source": "Sugar cane",
            "pronunciation": "moo-wah",
            "hint": "Hinde: iwa",
            "example": "Mũwa — Sugar cane (Hinde: iwa)"
          },
          {
            "target": "Mũnyũ",
            "source": "Salt",
            "pronunciation": "moo-nyoo",
            "hint": "Hinde: munyu",
            "example": "Mũnyũ — Salt (Hinde: munyu)"
          },
          {
            "target": "Mauta",
            "source": "Butter / Oil / Fat",
            "pronunciation": "mah-oo-tah",
            "hint": "Hinde: maota; clarified: mauta mavivia",
            "example": "Mauta — Butter / Oil / Fat (Hinde: maota; clarified: mauta mavivia)"
          },
          {
            "target": "Mũtu",
            "source": "Flour",
            "pronunciation": "moo-too",
            "hint": "Milled grain flour (Hinde: mutu)",
            "example": "Mũtu — Flour (Milled grain flour (Hinde: mutu))"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Lĩu / Ĩlya\" mean in English?",
            "correctAnswer": "Food",
            "options": [
              "Milk",
              "Meat",
              "Maize",
              "Food"
            ],
            "hint": "Hinde Ulu: leū; Nganyawa: chakueer / kandu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ĩya\" mean in English?",
            "correctAnswer": "Milk",
            "options": [
              "Meat",
              "Maize",
              "Milk",
              "Food"
            ],
            "hint": "Fresh milk (Hinde: iya); sour/buttermilk: kalia"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nyama\" mean in English?",
            "correctAnswer": "Meat",
            "options": [
              "Maize",
              "Meat",
              "Food",
              "Milk"
            ],
            "hint": "Hinde Ulu: nyamma; Nganyawa: nama"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Meat\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Nyama",
            "options": [
              "Nyama",
              "Lĩu / Ĩlya",
              "Ĩya",
              "Mbemba"
            ],
            "hint": "nyah-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Maize\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Mbemba",
            "options": [
              "Lĩu / Ĩlya",
              "Ĩya",
              "Nyama",
              "Mbemba"
            ],
            "hint": "m-behm-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Beans (pigeon peas / pulses)\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Nthoogo / Nthzũũ",
            "options": [
              "Ĩya",
              "Nyama",
              "Nthoogo / Nthzũũ",
              "Lĩu / Ĩlya"
            ],
            "hint": "n-thoh-goh / n-thzoo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Lĩu / Ĩlya: Food, Ĩya: Milk, Nyama: Meat, Mbemba: Maize",
            "pairs": [
              {
                "left": "Lĩu / Ĩlya",
                "right": "Food"
              },
              {
                "left": "Ĩya",
                "right": "Milk"
              },
              {
                "left": "Nyama",
                "right": "Meat"
              },
              {
                "left": "Mbemba",
                "right": "Maize"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Food\" in Kamba (Kĩkamba).",
            "correctAnswer": "Lĩu / Ĩlya",
            "options": [
              "Lĩu / Ĩlya",
              "Ĩya",
              "Nyama",
              "Mbemba"
            ],
            "hint": "lee-oo / ee-lyah"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-12-body",
    "title": "Unit 12: Body Parts",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Body Parts, vetted from J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
    "icon": "Heart",
    "skills": [
      {
        "id": "kamba-exp-body",
        "title": "Body Parts (Part 1)",
        "icon": "Heart",
        "description": "Master Kamba (Kĩkamba) body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Mwĩĩ' (Body), 'Mũtwe' (Head), 'Ĩtho' (Eye), 'Kũtũ' (Ear).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Mwĩĩ",
            "source": "Body",
            "pronunciation": "mwee-ee",
            "hint": "Hinde Ulu: mwi; Nganyawa: mwili",
            "example": "Mwĩĩ — Body (Hinde Ulu: mwi; Nganyawa: mwili)"
          },
          {
            "target": "Mũtwe",
            "source": "Head",
            "pronunciation": "moo-tweh",
            "hint": "Hinde: mutue",
            "example": "Mũtwe — Head (Hinde: mutue)"
          },
          {
            "target": "Ĩtho",
            "source": "Eye",
            "pronunciation": "ee-thoh",
            "hint": "Plural: Meetho (Hinde: itho, pl. meetho)",
            "example": "Ĩtho — Eye (Plural: Meetho (Hinde: itho, pl. meetho))"
          },
          {
            "target": "Kũtũ",
            "source": "Ear",
            "pronunciation": "koo-too",
            "hint": "Hinde Ulu: matu (pl); Nganyawa: kutu",
            "example": "Kũtũ — Ear (Hinde Ulu: matu (pl); Nganyawa: kutu)"
          },
          {
            "target": "Ĩnyũ",
            "source": "Nose",
            "pronunciation": "ee-nyoo",
            "hint": "Hinde: inyu",
            "example": "Ĩnyũ — Nose (Hinde: inyu)"
          },
          {
            "target": "Mũomo",
            "source": "Mouth",
            "pronunciation": "moo-oh-moh",
            "hint": "Hinde: moomo",
            "example": "Mũomo — Mouth (Hinde: moomo)"
          },
          {
            "target": "Ĩyo",
            "source": "Tooth",
            "pronunciation": "ee-yoh",
            "hint": "Plural: Mayo (Hinde: maiyo)",
            "example": "Ĩyo — Tooth (Plural: Mayo (Hinde: maiyo))"
          },
          {
            "target": "Wĩmĩ / Kanywa",
            "source": "Tongue",
            "pronunciation": "wee-mee / kah-nywah",
            "hint": "Hinde Ulu: kanyua; Nganyawa: wimi",
            "example": "Wĩmĩ / Kanywa — Tongue (Hinde Ulu: kanyua; Nganyawa: wimi)"
          },
          {
            "target": "Kĩng'ee",
            "source": "Beard",
            "pronunciation": "kee-ngeh-eh",
            "hint": "Hinde Ulu: kingē; Nganyawa: kiaiu",
            "example": "Kĩng'ee — Beard (Hinde Ulu: kingē; Nganyawa: kiaiu)"
          },
          {
            "target": "Ngingo",
            "source": "Neck",
            "pronunciation": "n-geen-goh",
            "hint": "Hinde Ulu: ngingo; Nganyawa: njingo",
            "example": "Ngingo — Neck (Hinde Ulu: ngingo; Nganyawa: njingo)"
          },
          {
            "target": "Kĩthũi",
            "source": "Chest",
            "pronunciation": "kee-thoo-ee",
            "hint": "Hinde: kithui",
            "example": "Kĩthũi — Chest (Hinde: kithui)"
          },
          {
            "target": "Ngoo / Ndeĩ",
            "source": "Heart",
            "pronunciation": "n-goh-oh / n-deh-ee",
            "hint": "Hinde Ulu: ndei; Nganyawa: ethaiyu",
            "example": "Ngoo / Ndeĩ — Heart (Hinde Ulu: ndei; Nganyawa: ethaiyu)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mwĩĩ\" mean in English?",
            "correctAnswer": "Body",
            "options": [
              "Head",
              "Eye",
              "Ear",
              "Body"
            ],
            "hint": "Hinde Ulu: mwi; Nganyawa: mwili"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mũtwe\" mean in English?",
            "correctAnswer": "Head",
            "options": [
              "Eye",
              "Ear",
              "Head",
              "Body"
            ],
            "hint": "Hinde: mutue"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ĩtho\" mean in English?",
            "correctAnswer": "Eye",
            "options": [
              "Ear",
              "Eye",
              "Body",
              "Head"
            ],
            "hint": "Plural: Meetho (Hinde: itho, pl. meetho)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Eye\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Ĩtho",
            "options": [
              "Ĩtho",
              "Mwĩĩ",
              "Mũtwe",
              "Kũtũ"
            ],
            "hint": "ee-thoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ear\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kũtũ",
            "options": [
              "Mwĩĩ",
              "Mũtwe",
              "Ĩtho",
              "Kũtũ"
            ],
            "hint": "koo-too"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nose\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Ĩnyũ",
            "options": [
              "Mũtwe",
              "Ĩtho",
              "Ĩnyũ",
              "Mwĩĩ"
            ],
            "hint": "ee-nyoo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Mwĩĩ: Body, Mũtwe: Head, Ĩtho: Eye, Kũtũ: Ear",
            "pairs": [
              {
                "left": "Mwĩĩ",
                "right": "Body"
              },
              {
                "left": "Mũtwe",
                "right": "Head"
              },
              {
                "left": "Ĩtho",
                "right": "Eye"
              },
              {
                "left": "Kũtũ",
                "right": "Ear"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Body\" in Kamba (Kĩkamba).",
            "correctAnswer": "Mwĩĩ",
            "options": [
              "Mwĩĩ",
              "Mũtwe",
              "Ĩtho",
              "Kũtũ"
            ],
            "hint": "mwee-ee"
          }
        ]
      },
      {
        "id": "kamba-exp-body-2",
        "title": "Body Parts (Part 2)",
        "icon": "Heart",
        "description": "Master Kamba (Kĩkamba) body parts vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Body Parts, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ĩvũ' (Stomach / Belly), 'Mũongo' (Back), 'Kwoko' (Arm / Hand), 'Kũũ' (Leg / Foot).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Ĩvũ",
            "source": "Stomach / Belly",
            "pronunciation": "ee-voo",
            "hint": "Hinde Ulu: ebŭ; Nganyawa: ibu",
            "example": "Ĩvũ — Stomach / Belly (Hinde Ulu: ebŭ; Nganyawa: ibu)"
          },
          {
            "target": "Mũongo",
            "source": "Back",
            "pronunciation": "moo-ohn-goh",
            "hint": "Hinde Ulu: muongo; Nganyawa: moongo",
            "example": "Mũongo — Back (Hinde Ulu: muongo; Nganyawa: moongo)"
          },
          {
            "target": "Kwoko",
            "source": "Arm / Hand",
            "pronunciation": "kwoh-koh",
            "hint": "Hinde Ulu: kuoko; Nganyawa: ntha; Plural: Moko",
            "example": "Kwoko — Arm / Hand (Hinde Ulu: kuoko; Nganyawa: ntha; Plural: Moko)"
          },
          {
            "target": "Kũũ",
            "source": "Leg / Foot",
            "pronunciation": "koo-oo",
            "hint": "Hinde: kuu; Plural: Maũ",
            "example": "Kũũ — Leg / Foot (Hinde: kuu; Plural: Maũ)"
          },
          {
            "target": "Ĩvĩndĩ",
            "source": "Bone",
            "pronunciation": "ee-veen-dee",
            "hint": "Plural: Mavĩndĩ (Hinde: ivindi, pl. mavindi)",
            "example": "Ĩvĩndĩ — Bone (Plural: Mavĩndĩ (Hinde: ivindi, pl. mavindi))"
          },
          {
            "target": "Nthakame",
            "source": "Blood",
            "pronunciation": "n-thah-kah-meh",
            "hint": "Hinde Ulu: nthakame; Nganyawa: ndagami",
            "example": "Nthakame — Blood (Hinde Ulu: nthakame; Nganyawa: ndagami)"
          },
          {
            "target": "Kya",
            "source": "Finger",
            "pronunciation": "kyah",
            "hint": "Plural: Syĩa / Thia (Hinde: kia, pl. thia)",
            "example": "Kya — Finger (Plural: Syĩa / Thia (Hinde: kia, pl. thia))"
          },
          {
            "target": "Ĩu",
            "source": "Knee",
            "pronunciation": "ee-oo",
            "hint": "Hinde: iyu; Plural: Mau",
            "example": "Ĩu — Knee (Hinde: iyu; Plural: Mau)"
          }
        ],
        "sentences": [
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          },
          {
            "target": "Mũndũ mũka nũũkua kĩw'ũ na mbisu.",
            "source": "The woman is carrying water with a pot."
          },
          {
            "target": "Mũũnda witũ wĩ na mbemba mbingĩ.",
            "source": "Our farm has plenty of maize."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ĩvũ\" mean in English?",
            "correctAnswer": "Stomach / Belly",
            "options": [
              "Back",
              "Arm / Hand",
              "Leg / Foot",
              "Stomach / Belly"
            ],
            "hint": "Hinde Ulu: ebŭ; Nganyawa: ibu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mũongo\" mean in English?",
            "correctAnswer": "Back",
            "options": [
              "Arm / Hand",
              "Leg / Foot",
              "Back",
              "Stomach / Belly"
            ],
            "hint": "Hinde Ulu: muongo; Nganyawa: moongo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kwoko\" mean in English?",
            "correctAnswer": "Arm / Hand",
            "options": [
              "Leg / Foot",
              "Arm / Hand",
              "Stomach / Belly",
              "Back"
            ],
            "hint": "Hinde Ulu: kuoko; Nganyawa: ntha; Plural: Moko"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Arm / Hand\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kwoko",
            "options": [
              "Kwoko",
              "Ĩvũ",
              "Mũongo",
              "Kũũ"
            ],
            "hint": "kwoh-koh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Leg / Foot\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kũũ",
            "options": [
              "Ĩvũ",
              "Mũongo",
              "Kwoko",
              "Kũũ"
            ],
            "hint": "koo-oo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bone\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Ĩvĩndĩ",
            "options": [
              "Mũongo",
              "Kwoko",
              "Ĩvĩndĩ",
              "Ĩvũ"
            ],
            "hint": "ee-veen-dee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Ĩvũ: Stomach / Belly, Mũongo: Back, Kwoko: Arm / Hand, Kũũ: Leg / Foot",
            "pairs": [
              {
                "left": "Ĩvũ",
                "right": "Stomach / Belly"
              },
              {
                "left": "Mũongo",
                "right": "Back"
              },
              {
                "left": "Kwoko",
                "right": "Arm / Hand"
              },
              {
                "left": "Kũũ",
                "right": "Leg / Foot"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Stomach / Belly\" in Kamba (Kĩkamba).",
            "correctAnswer": "Ĩvũ",
            "options": [
              "Ĩvũ",
              "Mũongo",
              "Kwoko",
              "Kũũ"
            ],
            "hint": "ee-voo"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-13-tools",
    "title": "Unit 13: Tools & Household Objects",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Tools & Household Objects, vetted from J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
    "icon": "Wrench",
    "skills": [
      {
        "id": "kamba-exp-tools",
        "title": "Tools & Household Objects (Part 1)",
        "icon": "Wrench",
        "description": "Master Kamba (Kĩkamba) tools & household objects vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Tools & Household Objects, pay special attention to pronunciation and morphological prefixes/suffixes: 'Kaviu' (Knife), 'Mũsye' (Arrow), 'Thyaka' (Quiver (for arrows)), 'Ĩtũmũ' (Spear).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Kaviu",
            "source": "Knife",
            "pronunciation": "kah-vee-oo",
            "hint": "Hinde Ulu: kabiu; Nganyawa: kaviu",
            "example": "Kaviu — Knife (Hinde Ulu: kabiu; Nganyawa: kaviu)"
          },
          {
            "target": "Mũsye",
            "source": "Arrow",
            "pronunciation": "moo-syeh",
            "hint": "Hinde Ulu: musie; Nganyawa: mutchi",
            "example": "Mũsye — Arrow (Hinde Ulu: musie; Nganyawa: mutchi)"
          },
          {
            "target": "Thyaka",
            "source": "Quiver (for arrows)",
            "pronunciation": "thyah-kah",
            "hint": "Hinde Ulu: thiaka; Nganyawa: ithiaga",
            "example": "Thyaka — Quiver (for arrows) (Hinde Ulu: thiaka; Nganyawa: ithiaga)"
          },
          {
            "target": "Ĩtũmũ",
            "source": "Spear",
            "pronunciation": "ee-too-moo",
            "hint": "Hinde: itumu",
            "example": "Ĩtũmũ — Spear (Hinde: itumu)"
          },
          {
            "target": "Ngao",
            "source": "Shield",
            "pronunciation": "n-gah-oh",
            "hint": "Hinde: ningau",
            "example": "Ngao — Shield (Hinde: ningau)"
          },
          {
            "target": "Ĩthoka",
            "source": "Axe",
            "pronunciation": "ee-thoh-kah",
            "hint": "Plural: Mathoka (Hinde: ithoka, pl. mathoka)",
            "example": "Ĩthoka — Axe (Plural: Mathoka (Hinde: ithoka, pl. mathoka))"
          },
          {
            "target": "Chõõndo / Ngũsũ",
            "source": "Traditional woven bag",
            "pronunciation": "chohn-doh / n-goo-soo",
            "hint": "Hinde Ulu: ngussu; Nganyawa: chõõndo; famous sisal woven bag",
            "example": "Chõõndo / Ngũsũ — Traditional woven bag (Hinde Ulu: ngussu; Nganyawa: chõõndo; famous sisal woven bag)"
          },
          {
            "target": "Kĩvĩla / Kĩtũmbĩ",
            "source": "Stool / Chair",
            "pronunciation": "kee-vee-lah / kee-toom-bee",
            "hint": "Hinde Ulu: kibilla; Nganyawa: kitumbi",
            "example": "Kĩvĩla / Kĩtũmbĩ — Stool / Chair (Hinde Ulu: kibilla; Nganyawa: kitumbi)"
          },
          {
            "target": "Nyũngũ",
            "source": "Clay cooking pot",
            "pronunciation": "nyoon-goo",
            "hint": "Hinde Ulu: nuungu; Nganyawa: ithillia / mbiitziu",
            "example": "Nyũngũ — Clay cooking pot (Hinde Ulu: nuungu; Nganyawa: ithillia / mbiitziu)"
          },
          {
            "target": "Kĩkũũ / Kĩthanzya",
            "source": "Calabash / Gourd",
            "pronunciation": "kee-koo-oo / kee-thahn-zyah",
            "hint": "Hinde Ulu: kikuu; Nganyawa: kithalzia",
            "example": "Kĩkũũ / Kĩthanzya — Calabash / Gourd (Hinde Ulu: kikuu; Nganyawa: kithalzia)"
          },
          {
            "target": "Mwatũ",
            "source": "Beehive",
            "pronunciation": "mwah-too",
            "hint": "Hinde: mwatu; traditional hollow log hive hung in trees",
            "example": "Mwatũ — Beehive (Hinde: mwatu; traditional hollow log hive hung in trees)"
          },
          {
            "target": "Kĩatũ",
            "source": "Sandal",
            "pronunciation": "kee-ah-too",
            "hint": "Plural: Iatũ (Hinde: kiatu, pl. iatu)",
            "example": "Kĩatũ — Sandal (Plural: Iatũ (Hinde: kiatu, pl. iatu))"
          },
          {
            "target": "Ndĩĩ",
            "source": "Wooden Mortar",
            "pronunciation": "n-dee-ee",
            "hint": "Traditional heavy mortar used for pounding grain",
            "example": "Ndĩĩ — Wooden Mortar (Traditional heavy mortar used for pounding grain)"
          },
          {
            "target": "Wenzĩ",
            "source": "Razor",
            "pronunciation": "wehn-zee",
            "hint": "Hinde: wenzi; traditional fine iron blade",
            "example": "Wenzĩ — Razor (Hinde: wenzi; traditional fine iron blade)"
          },
          {
            "target": "Ũlĩ / Ndi",
            "source": "Rope / Cord",
            "pronunciation": "oo-lee / n-dee",
            "hint": "Hinde Ulu: uli; Nganyawa: ndi",
            "example": "Ũlĩ / Ndi — Rope / Cord (Hinde Ulu: uli; Nganyawa: ndi)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kaviu\" mean in English?",
            "correctAnswer": "Knife",
            "options": [
              "Arrow",
              "Quiver (for arrows)",
              "Spear",
              "Knife"
            ],
            "hint": "Hinde Ulu: kabiu; Nganyawa: kaviu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Mũsye\" mean in English?",
            "correctAnswer": "Arrow",
            "options": [
              "Quiver (for arrows)",
              "Spear",
              "Arrow",
              "Knife"
            ],
            "hint": "Hinde Ulu: musie; Nganyawa: mutchi"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Thyaka\" mean in English?",
            "correctAnswer": "Quiver (for arrows)",
            "options": [
              "Spear",
              "Quiver (for arrows)",
              "Knife",
              "Arrow"
            ],
            "hint": "Hinde Ulu: thiaka; Nganyawa: ithiaga"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Quiver (for arrows)\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Thyaka",
            "options": [
              "Thyaka",
              "Kaviu",
              "Mũsye",
              "Ĩtũmũ"
            ],
            "hint": "thyah-kah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Spear\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Ĩtũmũ",
            "options": [
              "Kaviu",
              "Mũsye",
              "Thyaka",
              "Ĩtũmũ"
            ],
            "hint": "ee-too-moo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Shield\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Ngao",
            "options": [
              "Mũsye",
              "Thyaka",
              "Ngao",
              "Kaviu"
            ],
            "hint": "n-gah-oh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Kaviu: Knife, Mũsye: Arrow, Thyaka: Quiver (for arrows), Ĩtũmũ: Spear",
            "pairs": [
              {
                "left": "Kaviu",
                "right": "Knife"
              },
              {
                "left": "Mũsye",
                "right": "Arrow"
              },
              {
                "left": "Thyaka",
                "right": "Quiver (for arrows)"
              },
              {
                "left": "Ĩtũmũ",
                "right": "Spear"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Knife\" in Kamba (Kĩkamba).",
            "correctAnswer": "Kaviu",
            "options": [
              "Kaviu",
              "Mũsye",
              "Thyaka",
              "Ĩtũmũ"
            ],
            "hint": "kah-vee-oo"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-14-verbs",
    "title": "Unit 14: Verbs & Actions",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Verbs & Actions, vetted from J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
    "icon": "Zap",
    "skills": [
      {
        "id": "kamba-exp-verbs",
        "title": "Verbs & Actions (Part 1)",
        "icon": "Zap",
        "description": "Master Kamba (Kĩkamba) verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Kũĩma' (To cultivate / farm), 'Kwaka' (To build), 'Kũua' (To cook), 'Kũona / Kũkĩĩtha' (To see).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Kũĩma",
            "source": "To cultivate / farm",
            "pronunciation": "koo-ee-mah",
            "hint": "Hinde: kuimu",
            "example": "Kũĩma — To cultivate / farm (Hinde: kuimu)"
          },
          {
            "target": "Kwaka",
            "source": "To build",
            "pronunciation": "kwah-kah",
            "hint": "Hinde: kuaka",
            "example": "Kwaka — To build (Hinde: kuaka)"
          },
          {
            "target": "Kũua",
            "source": "To cook",
            "pronunciation": "koo-oo-ah",
            "hint": "Hinde Ulu: kuuer; Nganyawa: kūūē",
            "example": "Kũua — To cook (Hinde Ulu: kuuer; Nganyawa: kūūē)"
          },
          {
            "target": "Kũona / Kũkĩĩtha",
            "source": "To see",
            "pronunciation": "koo-oh-nah / koo-kee-ee-thah",
            "hint": "Hinde: kukiitha / kuona",
            "example": "Kũona / Kũkĩĩtha — To see (Hinde: kukiitha / kuona)"
          },
          {
            "target": "Kũneena",
            "source": "To speak / talk",
            "pronunciation": "koo-neh-eh-nah",
            "hint": "Hinde: kunēēna / gunēēna",
            "example": "Kũneena — To speak / talk (Hinde: kunēēna / gunēēna)"
          },
          {
            "target": "Kũũa / Kũtho",
            "source": "To buy",
            "pronunciation": "koo-oo-ah / koo-thoh",
            "hint": "Hinde Ulu: kūer; Nganyawa: gutho",
            "example": "Kũũa / Kũtho — To buy (Hinde Ulu: kūer; Nganyawa: gutho)"
          },
          {
            "target": "Kũthoosya",
            "source": "To sell",
            "pronunciation": "koo-thoh-oh-syah",
            "hint": "Hinde Ulu: guthozia; Nganyawa: kuta",
            "example": "Kũthoosya — To sell (Hinde Ulu: guthozia; Nganyawa: kuta)"
          },
          {
            "target": "Kũnenga",
            "source": "To give",
            "pronunciation": "koo-nehn-gah",
            "hint": "Hinde: kumunenge",
            "example": "Kũnenga — To give (Hinde: kumunenge)"
          },
          {
            "target": "Kũkoma",
            "source": "To sleep",
            "pronunciation": "koo-koh-mah",
            "hint": "Hinde: kukoma",
            "example": "Kũkoma — To sleep (Hinde: kukoma)"
          },
          {
            "target": "Kũrũta wĩa",
            "source": "To work",
            "pronunciation": "koo-roo-tah wee-ah",
            "hint": "Hinde Ulu: uuia; Nganyawa: mawia",
            "example": "Kũrũta wĩa — To work (Hinde Ulu: uuia; Nganyawa: mawia)"
          },
          {
            "target": "Kũkũlya",
            "source": "To ask",
            "pronunciation": "koo-koo-lyah",
            "hint": "Hinde Ulu: gukulia; Nganyawa: kwibaja",
            "example": "Kũkũlya — To ask (Hinde Ulu: gukulia; Nganyawa: kwibaja)"
          },
          {
            "target": "Kwĩna",
            "source": "To sing",
            "pronunciation": "kwee-nah",
            "hint": "Hinde Ulu: kwina; Nganyawa: kukwea",
            "example": "Kwĩna — To sing (Hinde Ulu: kwina; Nganyawa: kukwea)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũĩma\" mean in English?",
            "correctAnswer": "To cultivate / farm",
            "options": [
              "To build",
              "To cook",
              "To see",
              "To cultivate / farm"
            ],
            "hint": "Hinde: kuimu"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kwaka\" mean in English?",
            "correctAnswer": "To build",
            "options": [
              "To cook",
              "To see",
              "To build",
              "To cultivate / farm"
            ],
            "hint": "Hinde: kuaka"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũua\" mean in English?",
            "correctAnswer": "To cook",
            "options": [
              "To see",
              "To cook",
              "To cultivate / farm",
              "To build"
            ],
            "hint": "Hinde Ulu: kuuer; Nganyawa: kūūē"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To cook\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kũua",
            "options": [
              "Kũua",
              "Kũĩma",
              "Kwaka",
              "Kũona / Kũkĩĩtha"
            ],
            "hint": "koo-oo-ah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To see\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kũona / Kũkĩĩtha",
            "options": [
              "Kũĩma",
              "Kwaka",
              "Kũua",
              "Kũona / Kũkĩĩtha"
            ],
            "hint": "koo-oh-nah / koo-kee-ee-thah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To speak / talk\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kũneena",
            "options": [
              "Kwaka",
              "Kũua",
              "Kũneena",
              "Kũĩma"
            ],
            "hint": "koo-neh-eh-nah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Kũĩma: To cultivate / farm, Kwaka: To build, Kũua: To cook, Kũona / Kũkĩĩtha: To see",
            "pairs": [
              {
                "left": "Kũĩma",
                "right": "To cultivate / farm"
              },
              {
                "left": "Kwaka",
                "right": "To build"
              },
              {
                "left": "Kũua",
                "right": "To cook"
              },
              {
                "left": "Kũona / Kũkĩĩtha",
                "right": "To see"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To cultivate / farm\" in Kamba (Kĩkamba).",
            "correctAnswer": "Kũĩma",
            "options": [
              "Kũĩma",
              "Kwaka",
              "Kũua",
              "Kũona / Kũkĩĩtha"
            ],
            "hint": "koo-ee-mah"
          }
        ]
      },
      {
        "id": "kamba-exp-verbs-2",
        "title": "Verbs & Actions (Part 2)",
        "icon": "Zap",
        "description": "Master Kamba (Kĩkamba) verbs & actions vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Verbs & Actions, pay special attention to pronunciation and morphological prefixes/suffixes: 'Kũsemba' (To run), 'Kũkwa' (To die), 'Kũthamba' (To wash), 'Kũtheka' (To laugh).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Kũsemba",
            "source": "To run",
            "pronunciation": "koo-sehm-bah",
            "hint": "Hinde: sēēmba",
            "example": "Kũsemba — To run (Hinde: sēēmba)"
          },
          {
            "target": "Kũkwa",
            "source": "To die",
            "pronunciation": "koo-kwah",
            "hint": "Hinde Ulu: kwie; Nganyawa: kugua",
            "example": "Kũkwa — To die (Hinde Ulu: kwie; Nganyawa: kugua)"
          },
          {
            "target": "Kũthamba",
            "source": "To wash",
            "pronunciation": "koo-thahm-bah",
            "hint": "Hinde: kuthamba",
            "example": "Kũthamba — To wash (Hinde: kuthamba)"
          },
          {
            "target": "Kũtheka",
            "source": "To laugh",
            "pronunciation": "koo-theh-kah",
            "hint": "Recorded by J.T. Last (1885): ku-theka; Hinde (1904): gutheka",
            "example": "Kũtheka — To laugh (Recorded by J.T. Last (1885): ku-theka; Hinde (1904): gutheka)"
          },
          {
            "target": "Kwĩekana",
            "source": "To forgive / pardon",
            "pronunciation": "kwee-eh-kah-nah",
            "hint": "Recorded by J.T. Last (1885): kw-iekana",
            "example": "Kwĩekana — To forgive / pardon (Recorded by J.T. Last (1885): kw-iekana)"
          },
          {
            "target": "Kũkila",
            "source": "To surpass / excel",
            "pronunciation": "koo-kee-lah",
            "hint": "Auxiliary comparative verb recorded by J.T. Last (1885): ku-kila",
            "example": "Kũkila — To surpass / excel (Auxiliary comparative verb recorded by J.T. Last (1885): ku-kila)"
          },
          {
            "target": "Kũthaima",
            "source": "To hunt / track game",
            "pronunciation": "koo-thah-ee-mah",
            "hint": "Recorded by J.T. Last (1885): ku-thaima",
            "example": "Kũthaima — To hunt / track game (Recorded by J.T. Last (1885): ku-thaima)"
          }
        ],
        "sentences": [
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          },
          {
            "target": "Mũndũ mũka nũũkua kĩw'ũ na mbisu.",
            "source": "The woman is carrying water with a pot."
          },
          {
            "target": "Mũũnda witũ wĩ na mbemba mbingĩ.",
            "source": "Our farm has plenty of maize."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũsemba\" mean in English?",
            "correctAnswer": "To run",
            "options": [
              "To die",
              "To wash",
              "To laugh",
              "To run"
            ],
            "hint": "Hinde: sēēmba"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũkwa\" mean in English?",
            "correctAnswer": "To die",
            "options": [
              "To wash",
              "To laugh",
              "To die",
              "To run"
            ],
            "hint": "Hinde Ulu: kwie; Nganyawa: kugua"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũthamba\" mean in English?",
            "correctAnswer": "To wash",
            "options": [
              "To laugh",
              "To wash",
              "To run",
              "To die"
            ],
            "hint": "Hinde: kuthamba"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To wash\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kũthamba",
            "options": [
              "Kũthamba",
              "Kũsemba",
              "Kũkwa",
              "Kũtheka"
            ],
            "hint": "koo-thahm-bah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To laugh\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kũtheka",
            "options": [
              "Kũsemba",
              "Kũkwa",
              "Kũthamba",
              "Kũtheka"
            ],
            "hint": "koo-theh-kah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To forgive / pardon\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kwĩekana",
            "options": [
              "Kũkwa",
              "Kũthamba",
              "Kwĩekana",
              "Kũsemba"
            ],
            "hint": "kwee-eh-kah-nah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Kũsemba: To run, Kũkwa: To die, Kũthamba: To wash, Kũtheka: To laugh",
            "pairs": [
              {
                "left": "Kũsemba",
                "right": "To run"
              },
              {
                "left": "Kũkwa",
                "right": "To die"
              },
              {
                "left": "Kũthamba",
                "right": "To wash"
              },
              {
                "left": "Kũtheka",
                "right": "To laugh"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"To run\" in Kamba (Kĩkamba).",
            "correctAnswer": "Kũsemba",
            "options": [
              "Kũsemba",
              "Kũkwa",
              "Kũthamba",
              "Kũtheka"
            ],
            "hint": "koo-sehm-bah"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-15-phrases",
    "title": "Unit 15: Common Phrases",
    "description": "Comprehensive Kamba (Kĩkamba) curriculum for Common Phrases, vetted from J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
    "icon": "MessageCircle",
    "skills": [
      {
        "id": "kamba-exp-phrases",
        "title": "Common Phrases (Part 1)",
        "icon": "MessageCircle",
        "description": "Master Kamba (Kĩkamba) common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Ĩĩ / Nĩw'o' (Yes), 'Aiee / Nde' (No), 'Wĩtawa ata?' (What is your name?), 'Nĩtawa...' (My name is...).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Ĩĩ / Nĩw'o",
            "source": "Yes",
            "pronunciation": "ee-ee / nee-woh",
            "hint": "Hinde Ulu: newua; Nganyawa: nigwo",
            "example": "Ĩĩ / Nĩw'o — Yes (Hinde Ulu: newua; Nganyawa: nigwo)"
          },
          {
            "target": "Aiee / Nde",
            "source": "No",
            "pronunciation": "ah-ee-eh-eh / n-deh",
            "hint": "Hinde: ndi / aiyee",
            "example": "Aiee / Nde — No (Hinde: ndi / aiyee)"
          },
          {
            "target": "Wĩtawa ata?",
            "source": "What is your name?",
            "pronunciation": "wee-tah-wah ah-tah",
            "hint": "Hinde Ulu: wita wata?",
            "example": "Wĩtawa ata? — What is your name? (Hinde Ulu: wita wata?)"
          },
          {
            "target": "Nĩtawa...",
            "source": "My name is...",
            "pronunciation": "nee-tah-wah",
            "hint": "Response: 'I am called...'",
            "example": "Nĩtawa... — My name is... (Response: 'I am called...')"
          },
          {
            "target": "Ũthĩ naku?",
            "source": "Where are you going?",
            "pronunciation": "oo-thee nah-koo",
            "hint": "Hinde Ulu: uthi naku?",
            "example": "Ũthĩ naku? — Where are you going? (Hinde Ulu: uthi naku?)"
          },
          {
            "target": "Wumĩte va?",
            "source": "Where do you come from?",
            "pronunciation": "woo-mee-teh vah",
            "hint": "Hinde Ulu: uomanakko?",
            "example": "Wumĩte va? — Where do you come from? (Hinde Ulu: uomanakko?)"
          },
          {
            "target": "Ũka vaa",
            "source": "Come here",
            "pronunciation": "oo-kah vah-ah",
            "hint": "Hinde: uka haha / uka vaa",
            "example": "Ũka vaa — Come here (Hinde: uka haha / uka vaa)"
          },
          {
            "target": "Ete manzĩ",
            "source": "Bring water",
            "pronunciation": "eh-teh mahn-zee",
            "hint": "Hinde Ulu: ete maanzi",
            "example": "Ete manzĩ — Bring water (Hinde Ulu: ete maanzi)"
          },
          {
            "target": "Ndimanya",
            "source": "I do not know",
            "pronunciation": "n-dee-mah-nyah",
            "hint": "Hinde Ulu: ndimanya",
            "example": "Ndimanya — I do not know (Hinde Ulu: ndimanya)"
          },
          {
            "target": "Nĩnkwendete",
            "source": "I love you",
            "pronunciation": "neen-kwehn-deh-teh",
            "hint": "Expression of deep love",
            "example": "Nĩnkwendete — I love you (Expression of deep love)"
          },
          {
            "target": "Ngai / Mũlũngũ",
            "source": "God",
            "pronunciation": "n-gah-ee / moo-loo-ngoo",
            "hint": "Hinde Ulu: ngaii; Nganyawa: milungu",
            "example": "Ngai / Mũlũngũ — God (Hinde Ulu: ngaii; Nganyawa: milungu)"
          },
          {
            "target": "Mũseo",
            "source": "Good / Fine",
            "pronunciation": "moo-seh-oh",
            "hint": "Hinde Ulu: -zeo; Nganyawa: -cheo",
            "example": "Mũseo — Good / Fine (Hinde Ulu: -zeo; Nganyawa: -cheo)"
          }
        ],
        "sentences": [
          {
            "target": "Mũndũ mũseo nũendete andũ.",
            "source": "A good person loves people."
          },
          {
            "target": "Syana syonthe nĩsyathi sukulu.",
            "source": "All the children have gone to school."
          },
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Ĩĩ / Nĩw'o\" mean in English?",
            "correctAnswer": "Yes",
            "options": [
              "No",
              "What is your name?",
              "My name is...",
              "Yes"
            ],
            "hint": "Hinde Ulu: newua; Nganyawa: nigwo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Aiee / Nde\" mean in English?",
            "correctAnswer": "No",
            "options": [
              "What is your name?",
              "My name is...",
              "No",
              "Yes"
            ],
            "hint": "Hinde: ndi / aiyee"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Wĩtawa ata?\" mean in English?",
            "correctAnswer": "What is your name?",
            "options": [
              "My name is...",
              "What is your name?",
              "Yes",
              "No"
            ],
            "hint": "Hinde Ulu: wita wata?"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"What is your name?\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Wĩtawa ata?",
            "options": [
              "Wĩtawa ata?",
              "Ĩĩ / Nĩw'o",
              "Aiee / Nde",
              "Nĩtawa..."
            ],
            "hint": "wee-tah-wah ah-tah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"My name is...\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Nĩtawa...",
            "options": [
              "Ĩĩ / Nĩw'o",
              "Aiee / Nde",
              "Wĩtawa ata?",
              "Nĩtawa..."
            ],
            "hint": "nee-tah-wah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Where are you going?\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Ũthĩ naku?",
            "options": [
              "Aiee / Nde",
              "Wĩtawa ata?",
              "Ũthĩ naku?",
              "Ĩĩ / Nĩw'o"
            ],
            "hint": "oo-thee nah-koo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Ĩĩ / Nĩw'o: Yes, Aiee / Nde: No, Wĩtawa ata?: What is your name?, Nĩtawa...: My name is...",
            "pairs": [
              {
                "left": "Ĩĩ / Nĩw'o",
                "right": "Yes"
              },
              {
                "left": "Aiee / Nde",
                "right": "No"
              },
              {
                "left": "Wĩtawa ata?",
                "right": "What is your name?"
              },
              {
                "left": "Nĩtawa...",
                "right": "My name is..."
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Yes\" in Kamba (Kĩkamba).",
            "correctAnswer": "Ĩĩ / Nĩw'o",
            "options": [
              "Ĩĩ / Nĩw'o",
              "Aiee / Nde",
              "Wĩtawa ata?",
              "Nĩtawa..."
            ],
            "hint": "ee-ee / nee-woh"
          }
        ]
      },
      {
        "id": "kamba-exp-phrases-2",
        "title": "Common Phrases (Part 2)",
        "icon": "MessageCircle",
        "description": "Master Kamba (Kĩkamba) common phrases vocabulary and expressions from verified historical sources.",
        "tips": "In this Kamba (Kĩkamba) skill covering Common Phrases, pay special attention to pronunciation and morphological prefixes/suffixes: 'Vindya' (Be quiet), 'Thi / Enda' (Go away / Leave), 'Kũtĩ ũthũku' (All is well), 'Ng'o yakwa' (Myself).",
        "culturalNote": "Source attribution: J.T. Last (1885) 'Grammar of the Kamba Language', Hildegarde Hinde (1904) 'Vocabularies of the Kamba and Kikuyu Languages', and C.W. Hobley (1922) 'Bantu Beliefs and Customary Institutions'.",
        "words": [
          {
            "target": "Vindya",
            "source": "Be quiet",
            "pronunciation": "veen-dyah",
            "hint": "Hinde Ulu: pindia; Nganyawa: monakilongo",
            "example": "Vindya — Be quiet (Hinde Ulu: pindia; Nganyawa: monakilongo)"
          },
          {
            "target": "Thi / Enda",
            "source": "Go away / Leave",
            "pronunciation": "thee / ehn-dah",
            "hint": "Hinde Ulu: eenda or thi",
            "example": "Thi / Enda — Go away / Leave (Hinde Ulu: eenda or thi)"
          },
          {
            "target": "Kũtĩ ũthũku",
            "source": "All is well",
            "pronunciation": "koo-tee oo-thoo-koo",
            "hint": "Literally 'there is no evil / trouble'",
            "example": "Kũtĩ ũthũku — All is well (Literally 'there is no evil / trouble')"
          },
          {
            "target": "Ng'o yakwa",
            "source": "Myself",
            "pronunciation": "ngoh yah-kwah",
            "hint": "Literally 'my heart' — classical 1885 reflexive recorded by J.T. Last",
            "example": "Ng'o yakwa — Myself (Literally 'my heart' — classical 1885 reflexive recorded by J.T. Last)"
          },
          {
            "target": "Ng'o sitũ",
            "source": "Ourselves",
            "pronunciation": "ngoh see-too",
            "hint": "Literally 'our hearts' — collective reflexive recorded by J.T. Last (1885)",
            "example": "Ng'o sitũ — Ourselves (Literally 'our hearts' — collective reflexive recorded by J.T. Last (1885))"
          },
          {
            "target": "Kwa mũuo",
            "source": "Peacefully / Sweetly",
            "pronunciation": "kwah moo-oo-oh",
            "hint": "Manner adverb for peaceful action recorded by J.T. Last (1885)",
            "example": "Kwa mũuo — Peacefully / Sweetly (Manner adverb for peaceful action recorded by J.T. Last (1885))"
          }
        ],
        "sentences": [
          {
            "target": "Ng'ombe syakwa syĩ kĩw'ũnĩ.",
            "source": "My cattle are at the water."
          },
          {
            "target": "Mũndũ mũka nũũkua kĩw'ũ na mbisu.",
            "source": "The woman is carrying water with a pot."
          },
          {
            "target": "Mũũnda witũ wĩ na mbemba mbingĩ.",
            "source": "Our farm has plenty of maize."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Vindya\" mean in English?",
            "correctAnswer": "Be quiet",
            "options": [
              "Go away / Leave",
              "All is well",
              "Myself",
              "Be quiet"
            ],
            "hint": "Hinde Ulu: pindia; Nganyawa: monakilongo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Thi / Enda\" mean in English?",
            "correctAnswer": "Go away / Leave",
            "options": [
              "All is well",
              "Myself",
              "Go away / Leave",
              "Be quiet"
            ],
            "hint": "Hinde Ulu: eenda or thi"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does \"Kũtĩ ũthũku\" mean in English?",
            "correctAnswer": "All is well",
            "options": [
              "Myself",
              "All is well",
              "Be quiet",
              "Go away / Leave"
            ],
            "hint": "Literally 'there is no evil / trouble'"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"All is well\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Kũtĩ ũthũku",
            "options": [
              "Kũtĩ ũthũku",
              "Vindya",
              "Thi / Enda",
              "Ng'o yakwa"
            ],
            "hint": "koo-tee oo-thoo-koo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Myself\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Ng'o yakwa",
            "options": [
              "Vindya",
              "Thi / Enda",
              "Kũtĩ ũthũku",
              "Ng'o yakwa"
            ],
            "hint": "ngoh yah-kwah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ourselves\" in Kamba (Kĩkamba)?",
            "correctAnswer": "Ng'o sitũ",
            "options": [
              "Thi / Enda",
              "Kũtĩ ũthũku",
              "Ng'o sitũ",
              "Vindya"
            ],
            "hint": "ngoh see-too"
          },
          {
            "type": "match_pairs",
            "prompt": "Match the Kamba (Kĩkamba) terms with their English meanings:",
            "correctAnswer": "Vindya: Be quiet, Thi / Enda: Go away / Leave, Kũtĩ ũthũku: All is well, Ng'o yakwa: Myself",
            "pairs": [
              {
                "left": "Vindya",
                "right": "Be quiet"
              },
              {
                "left": "Thi / Enda",
                "right": "Go away / Leave"
              },
              {
                "left": "Kũtĩ ũthũku",
                "right": "All is well"
              },
              {
                "left": "Ng'o yakwa",
                "right": "Myself"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete: \"_____\" means \"Be quiet\" in Kamba (Kĩkamba).",
            "correctAnswer": "Vindya",
            "options": [
              "Vindya",
              "Thi / Enda",
              "Kũtĩ ũthũku",
              "Ng'o yakwa"
            ],
            "hint": "veen-dyah"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-16-public-domain-corpus",
    "title": "Unit 16: Newly Integrated Public-Domain Monograph & Comparative Lexicon",
    "description": "Master newly extracted Kamba (Kĩkamba) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "kamba-pd-corpus-16-1",
        "title": "Historical Monograph & Comparative Roots I (Kamba (Kĩkamba))",
        "icon": "Scroll",
        "description": "Study verified Kamba (Kĩkamba) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Kamba (Kĩkamba) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "wa téne",
            "source": "Old",
            "pronunciation": "wa t ne",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kikámba adj.)"
          },
          {
            "target": "nsáu",
            "source": "New",
            "pronunciation": "ns u",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kikámba adj.)"
          },
          {
            "target": "téne",
            "source": "Ancient",
            "pronunciation": "t ne",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kikámba adj.)"
          },
          {
            "target": "ūni (Ulu) / ōni (Nganyawa)",
            "source": "to-morrow",
            "pronunciation": "ūni",
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)"
          },
          {
            "target": "etēēla (Ulu) / killia (Nganyawa)",
            "source": "soon",
            "pronunciation": "etēēla",
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)"
          },
          {
            "target": "muthenia miingi (Ulu) / mthee nyongi (Nganyawa)",
            "source": "often",
            "pronunciation": "muthenia miingi",
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)"
          },
          {
            "target": "oiyuyu (Ulu) / indino (Nganyawa)",
            "source": "now",
            "pronunciation": "oiyuyu",
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)"
          },
          {
            "target": "kwatier (Ulu) / chioko (Nganyawa)",
            "source": "early",
            "pronunciation": "kwatier",
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)"
          }
        ],
        "sentences": [
          {
            "target": "wa téne — nsáu.",
            "source": "Old — New."
          },
          {
            "target": "téne • ūni (Ulu) / ōni (Nganyawa).",
            "source": "Ancient • to-morrow."
          },
          {
            "target": "etēēla (Ulu) / killia (Nganyawa) (muthenia miingi (Ulu) / mthee nyongi (Nganyawa)).",
            "source": "soon (often)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"wa téne\" in Kamba (Kĩkamba) (Krapf (1850) Vocabulary of Six East-African Languages (Kikámba adj.))?",
            "correctAnswer": "Old",
            "options": [
              "Old",
              "New",
              "Ancient",
              "to-morrow"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kikámba adj.)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kamba (Kĩkamba) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "wa téne: Old",
            "pairs": [
              {
                "left": "wa téne",
                "right": "Old"
              },
              {
                "left": "nsáu",
                "right": "New"
              },
              {
                "left": "téne",
                "right": "Ancient"
              },
              {
                "left": "ūni (Ulu) / ōni (Nganyawa)",
                "right": "to-morrow"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kamba (Kĩkamba) term for \"soon\": ___",
            "correctAnswer": "etēēla (Ulu) / killia (Nganyawa)",
            "options": [
              "etēēla (Ulu) / killia (Nganyawa)",
              "muthenia miingi (Ulu) / mthee nyongi (Nganyawa)",
              "wa téne",
              "nsáu"
            ],
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)"
          }
        ]
      },
      {
        "id": "kamba-pd-corpus-16-2",
        "title": "Historical Monograph & Comparative Roots II (Kamba (Kĩkamba))",
        "icon": "Compass",
        "description": "Expand your command of Kamba (Kĩkamba) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Kamba (Kĩkamba) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "muthenia monthe (Ulu) / matuk oonde (Nganyawa)",
            "source": "always",
            "pronunciation": "muthenia monthe",
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)"
          },
          {
            "target": "Nominal Damages",
            "source": "Injury / Offence",
            "pronunciation": "nominal damages",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Mu Sii. Mu Mui. Mwa-Ithangwa.",
            "source": "Mu Tui.",
            "pronunciation": "mu sii. mu mui. mwa-ithangwa.",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Wakia.",
            "source": "A man to a girl (Muitu) will say",
            "pronunciation": "wakia.",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Oponiao.",
            "source": "A man to a youth (Anake) will say",
            "pronunciation": "oponiao.",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Ah.",
            "source": "The reply will be",
            "pronunciation": "ah.",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Waiya.",
            "source": "A young man (Anake) to another young man will say",
            "pronunciation": "waiya.",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Inimuvoo.",
            "source": "The woman will reply",
            "pronunciation": "inimuvoo.",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          }
        ],
        "sentences": [
          {
            "target": "muthenia monthe (Ulu) / matuk oonde (Nganyawa) — Nominal Damages.",
            "source": "always — Injury / Offence."
          },
          {
            "target": "Mu Sii. Mu Mui. Mwa-Ithangwa. • Wakia..",
            "source": "Mu Tui. • A man to a girl (Muitu) will say."
          },
          {
            "target": "Oponiao. (Ah.).",
            "source": "A man to a youth (Anake) will say (The reply will be)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"muthenia monthe (Ulu) / matuk oonde (Nganyawa)\" in Kamba (Kĩkamba) (Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects))?",
            "correctAnswer": "always",
            "options": [
              "always",
              "Injury / Offence",
              "Mu Tui.",
              "A man to a girl (Muitu) will say"
            ],
            "hint": "Hildegarde Hinde (1904) — Kamba (Ulu & Nganyawa dialects)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kamba (Kĩkamba) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "muthenia monthe (Ulu) / matuk oonde (Nganyawa): always",
            "pairs": [
              {
                "left": "muthenia monthe (Ulu) / matuk oonde (Nganyawa)",
                "right": "always"
              },
              {
                "left": "Nominal Damages",
                "right": "Injury / Offence"
              },
              {
                "left": "Mu Sii. Mu Mui. Mwa-Ithangwa.",
                "right": "Mu Tui."
              },
              {
                "left": "Wakia.",
                "right": "A man to a girl (Muitu) will say"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kamba (Kĩkamba) term for \"A man to a youth (Anake) will say\": ___",
            "correctAnswer": "Oponiao.",
            "options": [
              "Oponiao.",
              "Ah.",
              "muthenia monthe (Ulu) / matuk oonde (Nganyawa)",
              "Nominal Damages"
            ],
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          }
        ]
      }
    ]
  },
  {
    "id": "kamba-unit-17-open-datasets-modern",
    "title": "Unit 17: Open-Dataset Vocabulary, Swadesh Core & Everyday Domains",
    "description": "Master Kamba (Kĩkamba) vocabulary and expressions from open-licensed datasets (Wiktionary Swadesh, CLDR, Kencorpus, Anv-ke & thinkKenya) alongside deep archival lexicon.",
    "icon": "Globe",
    "skills": [
      {
        "id": "kamba-open-dataset-17-1",
        "title": "Swadesh Core & Cultural Lexicon (Kamba (Kĩkamba))",
        "icon": "Layers",
        "description": "Learn core Kamba (Kĩkamba) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Kamba (Kĩkamba) dialects and everyday speech.",
        "words": [
          {
            "target": "Umuvoo.",
            "source": "A man to a woman will say",
            "pronunciation": "umuvoo.",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Salutation / Reply",
            "source": "Speaker / Addressee",
            "pronunciation": "salutation / reply",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Old man, headman of his own village only",
            "source": "Childless woman (Ngungu)",
            "pronunciation": "old man, headman of his own village only",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba (Crops & Agriculture)"
          },
          {
            "target": "Old man",
            "source": "Old woman (Mukuu)",
            "pronunciation": "old man",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba (Crops & Agriculture)"
          },
          {
            "target": "Young man or warrior",
            "source": "Unmarried girl (Mundu mukaa)",
            "pronunciation": "young man or warrior",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba (Crops & Agriculture)"
          },
          {
            "target": "Muthwa, queen ant Munthai",
            "source": "White ants (termites)",
            "pronunciation": "muthwa, queen ant munthai",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Nzuki, queen bee Mulue",
            "source": "Bees",
            "pronunciation": "nzuki, queen bee mulue",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Marri",
            "source": "Hornets with paper nest",
            "pronunciation": "marri",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          }
        ],
        "sentences": [
          {
            "target": "Umuvoo. — Salutation / Reply.",
            "source": "A man to a woman will say — Speaker / Addressee."
          },
          {
            "target": "Old man, headman of his own village only • Old man.",
            "source": "Childless woman (Ngungu) • Old woman (Mukuu)."
          },
          {
            "target": "Young man or warrior (Muthwa, queen ant Munthai).",
            "source": "Unmarried girl (Mundu mukaa) (White ants (termites))."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Umuvoo.\" in Kamba (Kĩkamba) (C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes)?",
            "correctAnswer": "A man to a woman will say",
            "options": [
              "A man to a woman will say",
              "Speaker / Addressee",
              "Childless woman (Ngungu)",
              "Old woman (Mukuu)"
            ],
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kamba (Kĩkamba) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Umuvoo.: A man to a woman will say",
            "pairs": [
              {
                "left": "Umuvoo.",
                "right": "A man to a woman will say"
              },
              {
                "left": "Salutation / Reply",
                "right": "Speaker / Addressee"
              },
              {
                "left": "Old man, headman of his own village only",
                "right": "Childless woman (Ngungu)"
              },
              {
                "left": "Old man",
                "right": "Old woman (Mukuu)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kamba (Kĩkamba) term for \"Unmarried girl (Mundu mukaa)\": ___",
            "correctAnswer": "Young man or warrior",
            "options": [
              "Young man or warrior",
              "Muthwa, queen ant Munthai",
              "Umuvoo.",
              "Salutation / Reply"
            ],
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba (Crops & Agriculture)"
          }
        ]
      },
      {
        "id": "kamba-open-dataset-17-2",
        "title": "Agriculture, Community & Everyday Life (Kamba (Kĩkamba))",
        "icon": "Sparkles",
        "description": "Practice Kamba (Kĩkamba) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Kamba (Kĩkamba) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "Thingii",
            "source": "Black ants (ponera)",
            "pronunciation": "thingii",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Nthuaku",
            "source": "Soldier ants (siafu)",
            "pronunciation": "nthuaku",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Ngia—in the hopper stage—Kititi",
            "source": "Locusts",
            "pronunciation": "ngia—in the hopper stage—kititi",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Chambulutwa",
            "source": "Butterfly and Moth",
            "pronunciation": "chambulutwa",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Yamu",
            "source": "Hairy caterpillar",
            "pronunciation": "yamu",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Mangña—in Ulu Maseo—in Kitui",
            "source": "Hagadash Ibis",
            "pronunciation": "mangña—in ulu maseo—in kitui",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Isau",
            "source": "Marabou stork",
            "pronunciation": "isau",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "target": "Ngoto",
            "source": "Lesser bustard",
            "pronunciation": "ngoto",
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          }
        ],
        "sentences": [
          {
            "target": "Thingii — Nthuaku.",
            "source": "Black ants (ponera) — Soldier ants (siafu)."
          },
          {
            "target": "Ngia—in the hopper stage—Kititi • Chambulutwa.",
            "source": "Locusts • Butterfly and Moth."
          },
          {
            "target": "Yamu (Mangña—in Ulu Maseo—in Kitui).",
            "source": "Hairy caterpillar (Hagadash Ibis)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Thingii\" in Kamba (Kĩkamba) (C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes)?",
            "correctAnswer": "Black ants (ponera)",
            "options": [
              "Black ants (ponera)",
              "Soldier ants (siafu)",
              "Locusts",
              "Butterfly and Moth"
            ],
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Kamba (Kĩkamba) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Thingii: Black ants (ponera)",
            "pairs": [
              {
                "left": "Thingii",
                "right": "Black ants (ponera)"
              },
              {
                "left": "Nthuaku",
                "right": "Soldier ants (siafu)"
              },
              {
                "left": "Ngia—in the hopper stage—Kititi",
                "right": "Locusts"
              },
              {
                "left": "Chambulutwa",
                "right": "Butterfly and Moth"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kamba (Kĩkamba) term for \"Hairy caterpillar\": ___",
            "correctAnswer": "Yamu",
            "options": [
              "Yamu",
              "Mangña—in Ulu Maseo—in Kitui",
              "Thingii",
              "Nthuaku"
            ],
            "hint": "C. W. Hobley (1910) Ethnology of A-Kamba and Other East African Tribes"
          }
        ]
      }
    ]
  }
];
