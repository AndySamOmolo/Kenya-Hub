import type { CourseUnit, LanguageConfig, GrammarSection } from "./types";
// ============================================================
// Kenyan Cultural Wisdom, Proverbs & Oral Literature Corpus
// Strictly Public Domain & Open-Web Verified Oral Traditions:
// - W. E. Taylor (1891) "Giryama Vocabulary and Collections" (SPCK, London)
// - A. C. Hollis (1905) "The Masai: Their Language and Folklore" (Clarendon Press, Oxford)
// - A. C. Hollis & Sir Charles Eliot (1909) "The Nandi: Their Language and Folklore" (Oxford)
// - A. C. Hollis (1910) "Taveta Sayings and Proverbs" (Journal of the African Society 9: 255-266)
// - Gerhard Lindblom (1920) "The Akamba in British East Africa" (Uppsala)
// - Mill-Hill Fathers (1920) "A Handbook of the Kavirondo Language" (Kampala/London)
// - Juxon Barton (1921) "Turkana Grammatical Notes and Vocabulary" (JRAI Vol. 51)
// - C. W. Hobley (1922) "Bantu Beliefs and Magic" (H. F. & G. Witherby, London)
// - Marion S. Stevenson (1927) "Specimens of Kikuyu Proverbs" (Festschrift Meinhof)
// - Wikiquote & Wiktionary Swahili, Kikuyu, Kamba, Luhya, Kisii, Teso, Meru & Somali Proverbs
// ============================================================

export interface ProverbItem {
  id: string;
  languageId: string;
  languageName: string;
  indigenous: string;
  literalTranslation: string;
  meaning: string;
  englishEquivalent?: string;
  theme: 'unity' | 'patience' | 'wisdom' | 'hard-work' | 'humility' | 'family' | 'nature';
  sourceCitation: string;
}

export interface CulturalWisdomItem {
  id: string;
  languageId: string;
  nativeText: string;
  literalTranslation: string;
  meaning: string;
  englishEquivalent?: string;
  category: string;
  source: string;
}

export const KENYAN_PROVERBS: ProverbItem[] = [
  // ── 1. Maasai (A. C. Hollis, "The Masai: Their Language and Folklore", Oxford, 1905 — Public Domain) ──
  {
    id: 'maasai-1',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: 'Meeta en-gutyuk ol-kurto.',
    literalTranslation: 'The mouth has no gouge (or caterpillar).',
    meaning: 'Words spoken cannot be easily hollowed out or undone; speech has lasting consequences.',
    englishEquivalent: 'A spoken word cannot be recalled.',
    theme: 'wisdom',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 246)'
  },
  {
    id: 'maasai-2',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: 'Medany ol-kimojino obo el-lughunya.',
    literalTranslation: 'One finger does not split (kill) a louse.',
    meaning: 'A single person acting alone cannot accomplish what requires the cooperation of two or more people.',
    englishEquivalent: 'Many hands make light work.',
    theme: 'unity',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 247)'
  },
  {
    id: 'maasai-3',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: 'Meishaa en-gima o en-gare.',
    literalTranslation: 'Fire and water do not agree (cannot dwell together).',
    meaning: 'Two opposing forces or irreconcilable natures cannot coexist in the same space.',
    englishEquivalent: 'Oil and water do not mix.',
    theme: 'nature',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 245)'
  },
  {
    id: 'maasai-4',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: 'Eitu elang ol-owaru ol-jekut.',
    literalTranslation: 'The beast of prey does not cross over the herdsman.',
    meaning: 'A vigilant guardian protects what is entrusted to their care.',
    englishEquivalent: 'Eternal vigilance is the price of safety.',
    theme: 'hard-work',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 240)'
  },
  {
    id: 'maasai-5',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: 'Memut el-lukunya nabo eng-eno.',
    literalTranslation: 'One head does not consume (exhaust) all wisdom.',
    meaning: 'No single individual possesses all knowledge; wise decisions require counsel.',
    englishEquivalent: 'Two heads are better than one.',
    theme: 'humility',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 248)'
  },
  {
    id: 'maasai-6',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: 'Enyokie en-gerai ngotonye.',
    literalTranslation: 'The child strives to be like its mother.',
    meaning: 'Character and habits are shaped by the example set within the home.',
    englishEquivalent: 'Like mother, like child.',
    theme: 'family',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 241)'
  },
  {
    id: 'maasai-7',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Eata en-gewarie 'n-giyaa.",
    literalTranslation: 'The night has ears.',
    meaning: 'Even in darkness and secrecy, spoken words travel and may be overheard.',
    englishEquivalent: 'Walls have ears.',
    theme: 'wisdom',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 238, Proverb #3)'
  },
  {
    id: 'maasai-8',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: 'Eitu-kidol ti-oreren en-gerr sambu.',
    literalTranslation: 'There is no such thing in the world as a sheep of many (more than three) colours.',
    meaning: 'Used to express healthy skepticism toward an exaggerated or improbable tale.',
    englishEquivalent: 'Take tall tales with a grain of salt.',
    theme: 'wisdom',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 239, Proverb #5)'
  },
  {
    id: 'maasai-9',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Ekwenikye 'n-guk in-guruon.",
    literalTranslation: 'Coals laugh at the ashes (or: The cut firewood laughs at that which is burning in the fire).',
    meaning: 'Do not mock another person’s misfortune or old age, forgetting that the same fate awaits all.',
    englishEquivalent: 'People who live in glass houses should not throw stones.',
    theme: 'humility',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 239, Proverb #6)'
  },
  {
    id: 'maasai-10',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: 'Etejo ol-ngojine: Mme ake amunyak, keju nemaagol.',
    literalTranslation: 'The hyena said: It is not only that I have luck, my leg is also strong.',
    meaning: 'Good fortune alone is not enough; endurance and hard work are required to succeed.',
    englishEquivalent: 'God helps those who help themselves.',
    theme: 'hard-work',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 241, Proverb #20)'
  },
  {
    id: 'maasai-11',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Aata 'l-muran lainei kumok, naa obo oipungoki 'n-gishu. — Il-loom le-'ng-aji.",
    literalTranslation: 'Riddle: I have many warriors, and only one goes out to watch the cattle. — Answer: The rafters of the hut (all hidden except one protruding over the door).',
    meaning: 'Traditional Maasai architectural riddle celebrating homestead vigilance and pastoral life.',
    theme: 'family',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 252, Riddle #2)'
  },
  {
    id: 'maasai-12',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Aata 'n-dapan ainei are naarisyo. — Eng-ai o en-gap.",
    literalTranslation: 'Riddle: I have two skins of equal size, one to lie on and the other to cover myself with. — Answer: The bare ground and the sky.',
    meaning: 'Pastoralist cosmological riddle comparing earth and sky to two sleeping hides.',
    theme: 'nature',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 253, Riddle #5)'
  },
  {
    id: 'maasai-13',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Anake eado ngutunyi nemebaiki e-nyawa e-'n-gerr? — Eng-oitoi.",
    literalTranslation: 'Riddle: Why is your mother so long and yet she does not reach up to a sheep’s udder? — Answer: The road / path.',
    meaning: 'Classic travel riddle contrasting horizontal distance with vertical height.',
    theme: 'patience',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 254, Riddle #8)'
  },

  // ── 2. Kalenjin / Nandi (A. C. Hollis & Sir Charles Eliot, "The Nandi: Their Language and Folklore", Oxford, 1909 — Public Domain) ──
  {
    id: 'kalenjin-1',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Ii-e ngetuny lel.',
    literalTranslation: 'The lion bears a hyena (or jackal).',
    meaning: 'Said when a child fails to live up to the noble character or courage of their parents.',
    englishEquivalent: 'Many a good cow hath an evil calf.',
    theme: 'family',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folklore (1909, p. 152, Proverb #2)'
  },
  {
    id: 'kalenjin-2',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Inga-i ngom, i-ker-i-ke kumut-i?',
    literalTranslation: 'However clever you may be, can you see the back of your neck?',
    meaning: 'Even the wisest person has blind spots and needs the perspective and counsel of others.',
    englishEquivalent: 'No one is infallible.',
    theme: 'humility',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folklore (1909, p. 152, Proverb #4)'
  },
  {
    id: 'kalenjin-3',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Iok-toi kiplengoi pelio.',
    literalTranslation: 'Send hares to the elephant, not elephants to the hare.',
    meaning: 'It is the duty of the young to run errands for and honour elders, not elders to wait on youth.',
    englishEquivalent: 'Respect your elders.',
    theme: 'family',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folklore (1909, p. 152, Proverb #7)'
  },
  {
    id: 'kalenjin-4',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Iput-i tany aku pa-kelek angwan.',
    literalTranslation: 'The ox falls in spite of its four legs.',
    meaning: 'Even a strong, experienced, or intelligent person can stumble and make a mistake.',
    englishEquivalent: 'A horse stumbles that has four legs / To err is human.',
    theme: 'humility',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folklore (1909, p. 231)'
  },
  {
    id: 'kalenjin-5',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Apuk ma-pa. — Kina-ap-teta.',
    literalTranslation: 'Riddle: It pours out; it does not go away. — Answer: A cow’s udder.',
    meaning: 'Pastoral riddle celebrating the daily abundance of milk from cattle.',
    theme: 'nature',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folklore (1909, p. 153, Riddle #4)'
  },
  {
    id: 'kalenjin-6',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'A-tinye cheptan-nyo ne-piiy-onyi mutai ko-rukut lakat. — Kweyot.',
    literalTranslation: 'Riddle: I have a daughter who gets a good meal every morning, but she goes to bed hungry at night. — Answer: A broom.',
    meaning: 'Homestead riddle comparing morning sweeping to feeding and evening storage to fasting.',
    theme: 'hard-work',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folklore (1909, p. 153, Riddle #7)'
  },
  {
    id: 'kalenjin-7',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'I-ie tururik annan i-ie che-tililin?',
    literalTranslation: 'Riddle: Do you prefer water made dirty by the feet of oxen or clean water? — Answer: I prefer the muddy water, for then I own cattle.',
    meaning: 'Pastoralist riddle teaching that the labour and commotion of tending livestock is preferable to idle poverty.',
    theme: 'hard-work',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folklore (1909, p. 153, Riddle #17)'
  },

  // ── 3. Mijikenda / Giriama (W. E. Taylor, "Giryama Vocabulary and Collections", SPCK London, 1891 — Public Domain) ──
  {
    id: 'mijikenda-1',
    languageId: 'mijikenda',
    languageName: 'Mijikenda (Kigiryama)',
    indigenous: "Fw-alume ahahu, akiuka mumwenga, k'afurya wari. — Ni mafigo.",
    literalTranslation: 'Riddle: We are three men, but when one of us goes away, we get no cornmeal (wari) to eat. — Answer: The three stones of the cooking hearth (mafigo).',
    meaning: 'When one of the three cooking stones is missing, a person cannot balance the pot to cook food—teaching that community stability depends on every member doing their part.',
    englishEquivalent: 'United we stand, divided we fall.',
    theme: 'unity',
    sourceCitation: 'W. E. Taylor, Giryama Vocabulary and Collections (1891, p. 138, Riddle #6)'
  },
  {
    id: 'mijikenda-2',
    languageId: 'mijikenda',
    languageName: 'Mijikenda (Kigiryama)',
    indigenous: "K'akilumika. — Ni kikokora.",
    literalTranslation: 'Riddle: It cannot be bitten. — Answer: It is the elbow (kikokora).',
    meaning: 'No matter how flexible a person is, one cannot bite one’s own elbow—reminding us of human limits and the need for others.',
    englishEquivalent: 'No one is self-sufficient.',
    theme: 'humility',
    sourceCitation: 'W. E. Taylor, Giryama Vocabulary and Collections (1891, p. 139, Riddle #8)'
  },
  {
    id: 'mijikenda-3',
    languageId: 'mijikenda',
    languageName: 'Mijikenda (Kigiryama)',
    indigenous: 'Magoma mairi lwanda-ni. — Ni mahombo.',
    literalTranslation: 'Riddle: Two cows in the open field. — Answer: The breasts (mahombo).',
    meaning: 'Classical Giriama riddle comparing maternal nourishment to prized cattle.',
    theme: 'family',
    sourceCitation: 'W. E. Taylor, Giryama Vocabulary and Collections (1891, p. 140, Riddle #18)'
  },
  {
    id: 'mijikenda-4',
    languageId: 'mijikenda',
    languageName: 'Mijikenda (Kigiryama)',
    indigenous: 'Katsungula na Simba (Fisi na Simba na Katsungula).',
    literalTranslation: 'The Little Hare and the Lion (The Hyena, the Lion, and the Little Hare).',
    meaning: 'In Giriama oral literature recorded by W. E. Taylor (1891), Katsungula (the Little Hare) triumphs over the fierce Lion (Simba) and greedy Hyena (Fisi) through quick wit and discernment.',
    englishEquivalent: 'Wisdom is better than strength.',
    theme: 'wisdom',
    sourceCitation: 'W. E. Taylor, Giryama Vocabulary and Collections (1891, Folktales #1–2)'
  },

  // ── 4. Kamba (Gerhard Lindblom 1920, J. T. Last 1885, A. C. Hollis 1910 Coastal/Taveta Parallels — Public Domain) ──
  {
    id: 'kamba-1',
    languageId: 'kamba',
    languageName: 'Kamba (Kĩkamba)',
    indigenous: 'Kĩaa kĩmwe kĩtiũaa ndaa.',
    literalTranslation: 'One finger does not kill a louse.',
    meaning: 'Mutual aid and community solidarity (mwethya) are essential to solve difficult problems.',
    englishEquivalent: 'Many hands make light work.',
    theme: 'unity',
    sourceCitation: 'Gerhard Lindblom, The Akamba in British East Africa (1920, p. 582)'
  },
  {
    id: 'kamba-2',
    languageId: 'kamba',
    languageName: 'Kamba (Kĩkamba)',
    indigenous: "Mundu ula mweo ku-kila onthe.",
    literalTranslation: 'A person who surpasses all others in goodness and wisdom (Last 1885 comparative construction).',
    meaning: 'True greatness is measured by character and service to the community rather than wealth alone.',
    theme: 'wisdom',
    sourceCitation: 'J. T. Last, Grammar of the Kamba Language (1885, p. 15)'
  },
  {
    id: 'kamba-3',
    languageId: 'kamba',
    languageName: 'Kamba / Taveta (Coastal & Eastern Bantu)',
    indigenous: 'Mti ukiwa mrefu sana, ndege watatua juu yake (cf. Hollis 1910 Taveta Proverb #4).',
    literalTranslation: 'When a tree grows tall and fruitful, birds gather upon its branches.',
    meaning: 'A generous elder or prosperous homestead naturally attracts guests and dependents.',
    theme: 'family',
    sourceCitation: 'A. C. Hollis, "Taveta Sayings and Proverbs", Journal of the African Society 9 (1910, pp. 255–266)'
  },

  // ── 5. Swahili (Wikiquote, Wiktionary & Early 1900s Mombasa Kanga Sayings — Public Domain) ──
  {
    id: 'swahili-1',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Haraka haraka haina baraka.',
    literalTranslation: 'Hurry, hurry has no blessing.',
    meaning: 'Rushing through important work leads to mistakes; care and deliberation bring lasting results.',
    englishEquivalent: 'Haste makes waste.',
    theme: 'patience',
    sourceCitation: 'Classical East African Swahili Proverb (Wikiquote / Wiktionary)'
  },
  {
    id: 'swahili-2',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Pole pole ndio mwendo.',
    literalTranslation: 'Slowly, slowly is indeed the way to walk.',
    meaning: 'Steady, persistent progress reaches the destination surely.',
    englishEquivalent: 'Slow and steady wins the race.',
    theme: 'patience',
    sourceCitation: 'Classical Swahili Proverb (Wikiquote)'
  },
  {
    id: 'swahili-3',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Mtu ni watu.',
    literalTranslation: 'A person is people.',
    meaning: 'A human being realizes their humanity only in fellowship and mutual care with others.',
    englishEquivalent: 'No man is an island.',
    theme: 'unity',
    sourceCitation: 'Classical Swahili Proverb (Wikiquote)'
  },
  {
    id: 'swahili-4',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Hisani haiozi.',
    literalTranslation: 'Kindness does not rot.',
    meaning: 'A generous deed is remembered across generations and never loses its value.',
    englishEquivalent: 'One good turn deserves another.',
    theme: 'family',
    sourceCitation: 'Classical Swahili Proverb (Wikiquote)'
  },
  {
    id: 'swahili-5',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Fuata nyuki ule asali.',
    literalTranslation: 'Follow the bees so that you may eat honey.',
    meaning: 'Associate with wise, industrious people and you will share in their wisdom and success.',
    englishEquivalent: 'Keep good company and you shall be of the number.',
    theme: 'wisdom',
    sourceCitation: 'Classical Swahili Proverb (Wikiquote)'
  },
  {
    id: 'swahili-6',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Mchumia juani hulia kivulini.',
    literalTranslation: 'Whoever toils in the sun eats in the shade.',
    meaning: 'Diligent labour during the season of work brings peace and comfort in the season of rest.',
    englishEquivalent: 'Make hay while the sun shines.',
    theme: 'hard-work',
    sourceCitation: 'Classical Swahili Proverb (Wikiquote / Wiktionary)'
  },
  {
    id: 'swahili-7',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Mtaka cha mvunguni sharti ainame.',
    literalTranslation: 'Whoever wants what is under the bed must stoop.',
    meaning: 'Worthwhile goals require humility, effort, and willingness to bend down and work.',
    englishEquivalent: 'No pain, no gain.',
    theme: 'hard-work',
    sourceCitation: 'Classical Swahili Proverb (Wiktionary)'
  },
  {
    id: 'swahili-8',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Dua la kuku halimpati mwewe.',
    literalTranslation: 'The curse of the chicken does not strike the hawk.',
    meaning: 'Unjust ill-wishes from the envious have no power over one who walks uprightly.',
    theme: 'wisdom',
    sourceCitation: 'Classical Swahili Proverb (Wikiquote)'
  },
  {
    id: 'swahili-9',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Dhamiri safi ni tandiko laini.',
    literalTranslation: 'A clean conscience is a soft mattress.',
    meaning: 'Honesty and integrity bring peaceful sleep.',
    englishEquivalent: 'A clear conscience is a soft pillow.',
    theme: 'wisdom',
    sourceCitation: 'Classical Swahili Proverb (Wikiquote)'
  },
  {
    id: 'swahili-10',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Msinji ukiinama hauna nguvu; usiushtaki ukuta ukianguka.',
    literalTranslation: 'If the foundation slopes it has no strength; do not blame the wall when it falls.',
    meaning: 'Sound character and preparation at the beginning determine the stability of the outcome.',
    theme: 'wisdom',
    sourceCitation: 'Classical Swahili Proverb (Wikiquote)'
  },
  {
    id: 'swahili-11',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Njia mbili zilimshinda fisi.',
    literalTranslation: 'Two roads defeated the hyena.',
    meaning: 'Trying to pursue two conflicting paths at once leads to failure.',
    englishEquivalent: 'No man can serve two masters.',
    theme: 'wisdom',
    sourceCitation: 'Classical Swahili Proverb (Wikiquote)'
  },
  {
    id: 'swahili-12',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Heri kufa macho kuliko kufa moyo.',
    literalTranslation: 'Better for the eyes to die than for the heart to die.',
    meaning: 'Losing physical sight is bearable compared to losing courage, hope, and compassion.',
    theme: 'patience',
    sourceCitation: 'Classical Swahili Proverb (Wiktionary)'
  },
  {
    id: 'swahili-13',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Ahadi ni deni.',
    literalTranslation: 'A promise is a debt.',
    meaning: 'One’s spoken word is a binding moral obligation until fulfilled.',
    theme: 'wisdom',
    sourceCitation: 'Classical Swahili Proverb (Wiktionary)'
  },
  {
    id: 'swahili-14',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Wazazi ni dhahabu, kuwatunza ni thawabu.',
    literalTranslation: 'Parents are gold; caring for them is a divine reward.',
    meaning: 'Honouring and supporting one’s parents is among the highest virtues (traditional Mombasa Kanga saying).',
    theme: 'family',
    sourceCitation: 'Traditional Coastal Swahili Kanga Proverb (Wikipedia Kanga)'
  },

  // ── 6. Turkana (Juxon Barton, "Turkana Grammatical Notes and Vocabulary", JRAI Vol. 51, 1921 — Public Domain) ──
  {
    id: 'turkana-1',
    languageId: 'turkana',
    languageName: "Turkana (Ng'aturkana)",
    indigenous: "Mata ng'atuk! — Mata ouwi! — Mata ng'idwi! — Mata ariama!",
    literalTranslation: 'Health to your cattle! — Health to your homestead! — Health to your children! — Health to our constant meetings!',
    meaning: 'In Turkana pastoral tradition recorded by Barton (1921), true peace (mata) encompasses livestock, family, children, and enduring community fellowship.',
    theme: 'unity',
    sourceCitation: 'Juxon Barton, Turkana Grammatical Notes and Vocabulary (1921, p. 69)'
  },
  {
    id: 'turkana-2',
    languageId: 'turkana',
    languageName: "Turkana (Ng'aturkana)",
    indigenous: 'Anangi akilari vs. Atiri akidakari.',
    literalTranslation: 'To have the knowledge/ability to walk (anangi) vs. to have the physical strength to wrestle (atiri).',
    meaning: 'Turkana grammar distinguishes mental/situational capability (anangi) from raw physical might (atiri)—teaching that wisdom and strength are distinct gifts.',
    theme: 'wisdom',
    sourceCitation: 'Juxon Barton, Turkana Grammatical Notes and Vocabulary (1921, p. 68)'
  },

  // ── 7. Luhya (Great Lakes Bantu / Zone J30 Traditional Oral Wisdom) ──
  {
    id: 'luhya-1',
    languageId: 'luhya',
    languageName: 'Luhya (Oluhya)',
    indigenous: 'Olulimi olulayi lwakha inzu.',
    literalTranslation: 'A gentle tongue builds a house.',
    meaning: 'Kind, respectful speech brings harmony to a family and community.',
    englishEquivalent: 'A soft answer turns away wrath.',
    theme: 'family',
    sourceCitation: 'Traditional Luhya (Zone J30) Oral Proverb'
  },
  {
    id: 'luhya-2',
    languageId: 'luhya',
    languageName: 'Luhya (Oluhya)',
    indigenous: 'Omwana omutambifu aliya khumukono omulayi.',
    literalTranslation: 'A humble, respectful child eats from a generous hand.',
    meaning: 'Humility and good manners open doors and earn the blessing of elders.',
    theme: 'humility',
    sourceCitation: 'Traditional Luhya Oral Proverb'
  },
  {
    id: 'luhya-3',
    languageId: 'luhya',
    languageName: 'Luhya (Oluhya)',
    indigenous: 'Amatsi kamabira sikaalukha.',
    literalTranslation: 'Water that has flowed past does not return upstream.',
    meaning: 'Time and opportunities once lost cannot be recalled; act wisely in the present.',
    englishEquivalent: 'Time and tide wait for no man.',
    theme: 'wisdom',
    sourceCitation: 'Traditional Luhya Oral Proverb'
  },

  // ── 8. Kisii (Ekegusii Traditional Oral Wisdom) ──
  {
    id: 'kisii-1',
    languageId: 'kisii',
    languageName: 'Kisii (Ekegusii)',
    indigenous: 'Omwana omonyakige ogokina na abagaka.',
    literalTranslation: 'A child who listens and washes their hands sits with elders (abagaka).',
    meaning: 'Respect, cleanliness of character, and attentiveness elevate a young person to the counsel of elders.',
    theme: 'humility',
    sourceCitation: 'Traditional Ekegusii Oral Proverb'
  },
  {
    id: 'kisii-2',
    languageId: 'kisii',
    languageName: 'Kisii (Ekegusii)',
    indigenous: 'Enyomba entang’ani n’omogaka n’omong’ina.',
    literalTranslation: 'The foundation of the home is the wise elder and mother.',
    meaning: 'Family unity and elder guidance anchor the Gusii homestead (omochie).',
    theme: 'family',
    sourceCitation: 'Traditional Ekegusii Oral Proverb'
  },
  {
    id: 'kisii-3',
    languageId: 'kisii',
    languageName: 'Kisii (Ekegusii)',
    indigenous: 'Amaboko abere nigo agokora egesieri.',
    literalTranslation: 'Two hands together build the doorway.',
    meaning: 'Cooperation (risaga) accomplishes what no solitary worker can finish alone.',
    englishEquivalent: 'Many hands make light work.',
    theme: 'unity',
    sourceCitation: 'Traditional Ekegusii Oral Proverb'
  },

  // ── 9. Teso (Ateso Traditional Oral Wisdom) ──
  {
    id: 'teso-1',
    languageId: 'teso',
    languageName: 'Teso (Ateso)',
    indigenous: 'Akan nabo mam epedori aibok akwap.',
    literalTranslation: 'One hand alone cannot dig the earth.',
    meaning: 'Community cooperation is essential in farming and life.',
    englishEquivalent: 'One hand cannot clap.',
    theme: 'unity',
    sourceCitation: 'Traditional Ateso Oral Proverb'
  },
  {
    id: 'teso-2',
    languageId: 'teso',
    languageName: 'Teso (Ateso)',
    indigenous: 'acoa elangir adepar agogong.',
    literalTranslation: 'Wisdom is greater than physical strength.',
    meaning: 'Prudence and sound judgment overcome obstacles where brute force fails.',
    englishEquivalent: 'The pen is mightier than the sword.',
    theme: 'wisdom',
    sourceCitation: 'Traditional Ateso Oral Proverb'
  },

  // ── 10. Meru / Embu (Mount Kenya Bantu Traditional Oral Wisdom) ──
  {
    id: 'meru-1',
    languageId: 'meru',
    languageName: 'Meru (Kĩmĩĩrũ / Kîembu)',
    indigenous: 'Mũtĩ ũmwe ndũtũũragia mũrũrĩ.',
    literalTranslation: 'A single tree does not make a forest.',
    meaning: 'Community strength (Njũri Ncheke / Kiama) arises from many people standing together.',
    englishEquivalent: 'One swallow does not make a summer.',
    theme: 'unity',
    sourceCitation: 'Traditional Mount Kenya Bantu (Kĩmĩĩrũ / Kîembu) Proverb'
  },
  {
    id: 'meru-2',
    languageId: 'meru',
    languageName: 'Meru (Kĩmĩĩrũ)',
    indigenous: 'Kũmenya njĩra nĩ kũũria.',
    literalTranslation: 'To know the path is to ask.',
    meaning: 'Asking questions is not ignorance; it is the surest way to avoid getting lost.',
    englishEquivalent: 'He who asks a question is a fool for five minutes; he who does not ask remains a fool forever.',
    theme: 'humility',
    sourceCitation: 'Traditional Kĩmĩĩrũ Oral Proverb'
  },

  // ── 11. Somali (Af-Soomaali Traditional Maahmaahyo — Public Domain Oral Tradition) ──
  {
    id: 'somali-1',
    languageId: 'somali',
    languageName: 'Somali (Af-Soomaali)',
    indigenous: 'Far keliya fool ma dhaqdo.',
    literalTranslation: 'A single finger cannot wash a face.',
    meaning: 'Cooperation and unity are indispensable; no individual can succeed entirely alone.',
    englishEquivalent: 'One hand cannot wash itself.',
    theme: 'unity',
    sourceCitation: 'Traditional Somali Maahmaah (Public Domain Oral Proverb)'
  },
  {
    id: 'somali-2',
    languageId: 'somali',
    languageName: 'Somali (Af-Soomaali)',
    indigenous: 'Aqoon la’aani waa iftiin la’aan.',
    literalTranslation: 'Lack of knowledge is lack of light.',
    meaning: 'Education and wisdom illuminate life like a lamp in the dark.',
    englishEquivalent: 'Knowledge is light.',
    theme: 'wisdom',
    sourceCitation: 'Traditional Somali Maahmaah (Public Domain Oral Proverb)'
  },
  {
    id: 'somali-3',
    languageId: 'somali',
    languageName: 'Somali (Af-Soomaali)',
    indigenous: 'Geel laba jir soo wada mar.',
    literalTranslation: 'Every camel was once two years old.',
    meaning: 'Every master or elder was once a beginner; be patient with learners and humble in success.',
    englishEquivalent: 'Every oak was once an acorn.',
    theme: 'patience',
    sourceCitation: 'Traditional Somali Maahmaah (Public Domain Oral Proverb)'
  }
];

export const CULTURAL_WISDOM: CulturalWisdomItem[] = KENYAN_PROVERBS.map((item) => ({
  id: item.id,
  languageId: item.languageId,
  nativeText: item.indigenous,
  literalTranslation: item.literalTranslation,
  meaning: item.meaning,
  englishEquivalent: item.englishEquivalent,
  category: item.theme,
  source: item.sourceCitation,
}));

export function getCulturalWisdomForLanguage(languageId: string): CulturalWisdomItem[] {
  const norm = languageId.trim().toLowerCase();
  return CULTURAL_WISDOM.filter((item) => item.languageId === norm);
}

// --- SWAHILI (course.ts) ---
// ============================================================
// Swahili (Kiswahili) Language Course Configuration & Units
// Grounded in Hildegarde Hinde (1904), C. W. Hobley (1922), Wiktionary Zone G40 Swadesh List & Classical Proverbs
// ============================================================


export const SWAHILI_CONFIG: LanguageConfig = {
  id: 'swahili',
  name: 'Kiswahili',
  nativeName: 'Kiswahili',
  family: 'Bantu',
  counties: ['Mombasa', 'Kilifi', 'Kwale', 'Lamu', 'Tana River', 'Nairobi'],
  speakers: '15M+',
  speechLocale: 'sw-KE',
  description: "Kenya's national and official language and East Africa's historic Sabaki Bantu lingua franca. Grounded in Hildegarde Hinde (1904), C. W. Hobley (1922), and the 207-word Swadesh corpus.",
  color: '#0284C7',
  sources: ['kamba-kikuyu-vocabularies', 'bantu-beliefs', 'open-web-swadesh-comparative'],
};

export const SWAHILI_UNITS: CourseUnit[] = [
  {
    id: 'swahili-unit-1',
    title: 'Unit 1: Greetings, Noun Classes (Ngeli) & Everyday Phrases (Hinde 1904)',
    description: 'Master coastal and standard Kiswahili greetings, M-/Wa- and Ki-/Vi- noun classes, and conversational phrases from Hinde (1904).',
    icon: '🌊',
    skills: [
      {
        id: 'swahili-greetings-nouns',
        title: 'Greetings, People & Noun Classes',
        icon: 'MessageCircle',
        description: 'Learn foundational Kiswahili greetings and noun singular/plural pairs.',
        tips: "Kiswahili nouns change prefix in the plural: mtu → watu (person → people), mtoto → watoto (child → children), kitu → vitu (thing → things), jiwe → mawe (stone → stones).",
        words: [
          { target: 'Hujambo! / Habari yako?', source: 'Hello! / How is your news?', pronunciation: 'hoo-jahm-boh / hah-bah-ree yah-koh', hint: 'Response: Sijambo! / Nzuri sana!' },
          { target: 'Asante sana', source: 'Thank you very much', pronunciation: 'ah-sahn-teh sah-nah', hint: 'Polite gratitude' },
          { target: 'mtu (pl. watu)', source: 'person (pl. people)', pronunciation: 'm-too / wah-too', hint: 'Class 1/2 m-/wa- (Hinde 1904)' },
          { target: 'mtoto (pl. watoto)', source: 'child (pl. children)', pronunciation: 'm-toh-toh / wah-toh-toh', hint: 'Class 1/2 m-/wa-' },
          { target: 'mgeni (pl. wageni)', source: 'guest / stranger', pronunciation: 'm-geh-nee / wah-geh-nee', hint: 'Class 1/2 m-/wa- (Hinde 1904)' },
          { target: 'kitu (pl. vitu)', source: 'thing (pl. things)', pronunciation: 'kee-too / vee-too', hint: 'Class 7/8 ki-/vi-' },
          { target: 'maji / moto', source: 'water / fire', pronunciation: 'mah-jee / moh-toh', hint: 'Core nature nouns (Swadesh)' },
          { target: 'nyumba (pl. nyumba)', source: 'house (pl. houses)', pronunciation: 'nyoom-bah', hint: 'Class 9/10 (Hinde 1904 & Hobley 1922)' },
          { target: 'chakula', source: 'food', pronunciation: 'chah-koo-lah', hint: 'Class 7 noun' },
          { target: 'njia', source: 'road / path / way', pronunciation: 'n-jee-ah', hint: 'Class 9/10 (Hinde 1904)' }
        ],
        sentences: [
          { target: 'Mgeni amefika nyumbani.', source: 'The guest has arrived at the house.' },
          { target: 'Watu wanakunywa maji safi.', source: 'The people are drinking clean water.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the plural of "mtu" (person) and "kitu" (thing) in Kiswahili?',
            correctAnswer: 'watu / vitu',
            options: ['watu / vitu', 'mitu / matu', 'mtu / kitu', 'watoto /wageni'],
            hint: 'Class 1 m- -> Class 2 wa-; Class 7 ki- -> Class 8 vi-'
          }
        ]
      },
      {
        id: 'swahili-verbs-proverbs',
        title: 'Verb Tenses (Hinde 1904), Numerals 1–10 & Classical Proverbs',
        icon: 'Compass',
        description: 'Conjugate Swahili verbs across Present, Past, and Future tenses and learn iconic coastal proverbs.',
        tips: "In Kiswahili, ni- (I), u- (you), a- (s/he), tu- (we), m- (you pl.), wa- (they) combine with -na- (present), -li- (past), -me- (perfect), and -ta- (future).",
        words: [
          { target: ' moja, mbili, tatu, nne, tano', source: '1, 2, 3, 4, 5', pronunciation: 'moh-jah, m-bee-lee, tah-too, n-neh, tah-noh', hint: 'Cardinal numbers 1–5 (Hinde 1904)' },
          { target: 'sita, saba, nane, kenda (tisa), kumi', source: '6, 7, 8, 9, 10', pronunciation: 'see-tah, sah-bah, nah-neh, kehn-dah, koo-mee', hint: 'Hinde (1904) preserves classical Bantu kenda (9)' },
          { target: 'ninashinda / nilishinda / nitashinda', source: 'I pass the day / I passed / I shall pass', pronunciation: 'nee-nah-sheen-dah', hint: 'Hinde (1904) paradigm verb ku-shinda' },
          { target: 'sishindi / sikushinda / sijashinda', source: 'I do not / I did not / I have not yet passed the day', pronunciation: 'see-sheen-dee', hint: 'Negative tenses (Hinde 1904)' },
          { target: 'kula / kunywa / kuja / kwenda', source: 'to eat / to drink / to come / to go', pronunciation: 'koo-lah / koo-nywah / koo-jah / kwehn-dah', hint: 'Core infinitive verbs' },
          { target: 'Haraka haraka haina baraka', source: 'Hurry, hurry has no blessing', pronunciation: 'hah-rah-kah hah-ee-nah bah-rah-kah', hint: 'Classical Swahili proverb' },
          { target: 'Pole pole ndio mwendo', source: 'Slowly, slowly is the way to go', pronunciation: 'poh-leh poh-leh n-dee-oh mwehn-doh', hint: 'Classical Swahili proverb' },
          { target: 'Mtu ni watu', source: 'A person is people (humanity is community)', pronunciation: 'm-too nee wah-too', hint: 'Classical Swahili proverb' }
        ],
        sentences: [
          { target: 'Haraka haraka haina baraka; pole pole ndio mwendo.', source: 'Hurry, hurry has no blessing; slowly, slowly is the way to go.' },
          { target: 'Mchumia juani hulia kivulini.', source: 'Whoever toils in the sun eats in the shade.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which Swahili verb form from Hinde (1904) means "I have not yet passed the day"?',
            correctAnswer: 'sijashinda',
            options: ['sijashinda', 'ninashinda', 'nilishinda', 'nitashinda'],
            hint: 'Negative prefix si- + incompletive marker -ja-'
          }
        ]
      }
    ]
  }
];

// --- SWAHILI (grammar-reference.ts) ---
// ============================================================
// Swahili (Kiswahili) Grammar Reference Guide
// Grounded in Hildegarde Hinde (1904) "Vocabularies of the Kamba and Kikuyu Languages of East Africa",
// C. W. Hobley (1922) "Bantu Beliefs and Magic", and Wiktionary Zone G40 Swahili Swadesh Corpus
// ============================================================

export interface SwahiliGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { swahili: string; english: string; explanation?: string }[];
}

export const SWAHILI_GRAMMAR_SECTIONS: SwahiliGrammarSection[] = [
  {
    id: "swahili-noun-classes-hinde-1904",
    title: "Bantu Noun Classes (Ngeli za Nomino) & Hinde (1904) Comparative Pluralization",
    summary: "Kiswahili organizes nouns into prefixal singular/plural pairs (m-/wa-, m-/mi-, ki-/vi-, n-/n-, ji-/ma-, u-) that govern subject, adjective, and possessive agreement.",
    content: `In *Vocabularies of the Kamba and Kikuyu Languages of East Africa* (1904), Hildegarde Hinde uses Coast/Zanzibar Swahili as the comparative baseline for East African Bantu noun classes:
1. **M-/WA- Class (Classes 1/2 — Animate/Human)**:
   - **mtu → watu** (person → people), **mtoto → watoto** (child → children), **mgeni → wageni** (stranger/guest → guests), **mganga → waganga** (healer → healers).
2. **M-/MI- Class (Classes 3/4 — Trees, Nature & Inanimate Objects)**:
   - **mti → miti** (tree → trees), **mto → mito** (river → rivers), **mwezi → miezi** (moon/month → months), **mkono → mikono** (hand/arm → hands).
3. **JI-/MA- Class (Classes 5/6 — Fruits, Paired Parts & Liquids)**:
   - **jiwe → mawe** (stone → stones), **jicho → macho** (eye → eyes), **jino → meno** (tooth → teeth), **maji** (water, Class 6 mass noun), **mafuta** (oil/fat).
4. **KI-/VI- Class (Classes 7/8 — Tools, Artifacts & Diminutives)**:
   - **kitu → vitu** (thing → things), **kiti → viti** (chair → chairs), **kisu → visu** (knife → knives), **kikombe → vikombe** (cup → cups).
5. **N-/N- Class (Classes 9/10 — Animals, Kinship & Everyday Nouns)**:
   - **nyumba → nyumba** (house → houses), **ng'ombe** (cattle), **mbuzi** (goat), **njia** (road/path).`,
    examples: [
      { swahili: "mtu mmoja → watu wawili", english: "one person → two people", explanation: "Class 1/2 m-/wa- noun and numeral agreement" },
      { swahili: "kitu kizuri → vitu vizuri", english: "a good thing → good things", explanation: "Class 7/8 ki-/vi- noun and adjectival agreement" },
      { swahili: "jiwe kubwa → mawe makubwa", english: "a large stone → large stones", explanation: "Class 5/6 ji-/ma- alternation (Hinde 1904)" }
    ]
  },
  {
    id: "swahili-verb-tenses-hinde-1904",
    title: "Agglutinative Verb Conjugation: Present (-na-/-a-), Past (-li-), Perfect (-me-), Future (-ta-) & Negation",
    summary: "Swahili verbs combine Subject Prefix + Tense Marker + Object Infix + Root + Mood Suffix, as systematically contrasted across 10 paradigms by Hinde (1904).",
    content: `Hildegarde Hinde (1904, pp. xiv–xv) documents ten affirmative and negative verb paradigms using **ku-shinda** ("to pass the day / overcome"):
1. **Subject Prefixes (Affirmative | Negative)**:
   - 1s **ni- | si-**, 2s **u- | hu-**, 3s **a- | ha-**, 1p **tu- | hatu-**, 2p **m- | ham-**, 3p **wa- | hawa-**.
2. **Core Affirmative Tense Markers**:
   - **Present (-na- / -a-)**: *ni-na-shinda / n-a-shinda* (I pass the day).
   - **Past (-li-)**: *ni-li-shinda* (I passed the day).
   - **Present Perfect (-me-)**: *ni-me-shinda* (I have passed the day).
   - **Future (-ta-)**: *ni-ta-shinda* (I shall pass the day).
   - **Narrative Consecutive (-ka-)**: *ni-ka-shinda* (and I passed the day).
3. **Negative Conjugation**:
   - **Present Negative**: Negative Subject Prefix + Root ending in **-i**: *si-shind-i* (I do not pass the day), *ha-shind-i* (he/she does not).
   - **Past Negative (-ku-)**: *si-ku-shinda* (I did not pass the day).
   - **Not Yet (-ja-)**: *si-ja-shinda* (I have not yet passed the day).
   - **Future Negative (-ta-)**: *si-ta-shinda* (I shall not pass the day).`,
    examples: [
      { swahili: "ninashinda / nilishinda / nitashinda", english: "I pass the day / I passed the day / I shall pass the day", explanation: "Present -na-, Past -li-, and Future -ta- (Hinde 1904)" },
      { swahili: "sishindi / sikushinda / sijashinda", english: "I do not pass the day / I did not / I have not yet", explanation: "Present -i, Past -ku-, and Incompletive -ja- negatives (Hinde 1904)" },
      { swahili: "Mtu ni watu • Haraka haraka haina baraka", english: "A person is people • Hurry, hurry has no blessing", explanation: "Classical Swahili proverbial syntax" }
    ]
  }
];

// --- KALENJIN (course.ts) ---
// ============================================================
// Kalenjin Language Course Configuration & Units
// Grounded in A. C. Hollis & Sir Charles Eliot (1909) "The Nandi: Their Language and Folklore",
// van Otterloo (1979), Rottland (1982), and Gerrit J. Dimmendaal (1988)
// ============================================================


export const KALENJIN_CONFIG: LanguageConfig = {
  id: 'kalenjin',
  name: 'Kalenjin',
  nativeName: 'Kalenjin',
  family: 'Nilotic',
  counties: ['Uasin Gishu', 'Nandi', 'Kericho', 'Bomet', 'Elgeyo-Marakwet', 'Baringo', 'West Pokot', 'Trans Nzoia'],
  speakers: '5.1M',
  speechLocale: 'sw-KE',
  description: 'A Highland (Southern) Nilotic macrolanguage uniting Nandi, Kipsigis, Keiyo, Tugen, Marakwet, Pokot, Sabaot, Terik, and Okiek. Grounded in A. C. Hollis & Sir Charles Eliot (1909) and comparative Nilotic linguistics.',
  color: '#9333EA',
  sources: ['hollis-nandi-1909', 'open-web-swadesh-comparative'],
};

export const KALENJIN_UNITS: CourseUnit[] = [
  {
    id: 'kalenjin-unit-1',
    title: 'Unit 1: Greetings, Definite Nouns, Numerals 1–10 & Hollis (1909) Folklore',
    description: 'Master Kalenjin greetings (Chamgei!), primary vs. secondary definite nouns, counting 1–10, and 1909 Nandi proverbs.',
    icon: '🏔️',
    skills: [
      {
        id: 'kalenjin-greetings-nouns',
        title: 'Greetings, People, Livestock & Nature',
        icon: 'Users',
        description: 'Learn everyday Kalenjin greetings and definite nouns from Hollis (1909) and Rottland (1982).',
        tips: "Kalenjin attaches definite articles to the END of nouns: chiito (the person, pl. piik), lakwet (the child, pl. lagok), teta (the cow, pl. tuga), beek (the water).",
        words: [
          { target: 'Chamgei! (resp. Chamgei mising!)', source: 'Hello! / Greetings! (Very much peace!)', pronunciation: 'chahm-gey / chahm-gey mee-seeng', hint: 'Universal Kalenjin greeting' },
          { target: 'Kongoi (Kongoi mising)', source: 'Thank you (Thank you very much)', pronunciation: 'kohn-goy', hint: 'Gratitude' },
          { target: 'chiito (pl. piik)', source: 'person (pl. people)', pronunciation: 'chee-toh / peek', hint: 'Primary chii / piich' },
          { target: 'lakwet (pl. lagok)', source: 'child (pl. children)', pronunciation: 'lah-kweht / lah-gohk', hint: 'Primary lakwa' },
          { target: 'tany / teta (pl. tuga)', source: 'cow, ox (pl. cattle)', pronunciation: 'tahny / teh-tah / too-gah', hint: 'Hollis (1909) pastoral staple' },
          { target: 'beek / chego / mursik', source: 'water / fresh milk / fermented milk', pronunciation: 'behk / cheh-goh / moor-seek', hint: 'Highland Nilotic liquids' },
          { target: 'Asiis (Asista) / arawet', source: 'Sun / Moon', pronunciation: 'ah-sees / ah-rah-weht', hint: 'Cosmological nouns' },
          { target: 'keetit (pl. keetik) / maat', source: 'tree (pl. trees) / fire', pronunciation: 'keh-teet / maht', hint: 'Nature nouns' },
          { target: 'ngetuny / pelio / kiplengoi', source: 'lion / elephant / hares', pronunciation: 'ngeh-toony / peh-lee-oh / keep-lehn-goy', hint: 'Hollis (1909) folklore fauna' },
          { target: 'Kaap / Kapkugo', source: 'homestead of / ancestral homeland', pronunciation: 'kahp / kahp-koo-goh', hint: 'Locative prefix Kaap-' }
        ],
        sentences: [
          { target: 'Chamgei! Kongoi mising.', source: 'Greetings! Thank you very much.' },
          { target: 'I-ie tururik annan i-ie che-tililin?', source: 'Do you drink water stirred by cattle hooves or clean water? (Hollis 1909 Riddle #17)' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What are the singular and plural definite forms for "person / people" in Kalenjin?',
            correctAnswer: 'chiito / piik',
            options: ['chiito / piik', 'teta / tuga', 'keetit / keetik', 'Chamgei / Kongoi'],
            hint: 'chii -> chiito (sg.), piich -> piik (pl.)'
          }
        ]
      },
      {
        id: 'kalenjin-numbers-proverbs',
        title: 'Numerals 1–10 & Hollis (1909) Nandi Proverbs',
        icon: 'Scroll',
        description: 'Count from 1 to 10 in Kalenjin and study classical proverbs from A. C. Hollis (1909).',
        tips: "Kalenjin numbers 1–10 are akeenge (1), aeng' (2), somok (3), ang'wan (4), muut (5), lo (6), tisap (7), sisiit (8), sokol (9), and taman (10).",
        words: [
          { target: "akeenge, aeng', somok, ang'wan, muut", source: '1, 2, 3, 4, 5', pronunciation: 'ah-kehn-geh, ah-ehng, soh-mohk, ahng-wahn, moot', hint: 'Cardinals 1–5' },
          { target: 'lo, tisap, sisiit, sokol, taman', source: '6, 7, 8, 9, 10', pronunciation: 'loh, tee-sahp, see-seet, soh-kohl, tah-mahn', hint: 'Cardinals 6–10' },
          { target: 'Ii-e ngetuny lel', source: 'The lion bears a hyena (Hollis 1909 Proverb #2)', pronunciation: 'ee-eh ngeh-toony lehl', hint: 'ngetuny = lion, lel = hyena/jackal' },
          { target: 'Inga-i ngom, i-ker-i-ke kumut-i?', source: 'However clever you may be, can you see the back of your neck? (Hollis 1909 Proverb #4)', pronunciation: 'een-gah-ee ngohm', hint: 'ngom = clever, kumut = nape of neck' },
          { target: 'Iok-toi kiplengoi pelio', source: 'Send hares to the elephant, not elephants to the hare (Hollis 1909 Proverb #7)', pronunciation: 'ee-ohk-toy keep-lehn-goy peh-lee-oh', hint: 'Youth serve elders' },
          { target: 'Iput-i tany aku pa-kelek angwan', source: 'The ox falls in spite of its four legs (Hollis 1909, p. 231)', pronunciation: 'ee-poo-tee tahny ah-koo pah-keh-lehk ahng-wahn', hint: 'Even the strong can stumble' }
        ],
        sentences: [
          { target: 'Iput-i tany aku pa-kelek angwan.', source: 'The ox falls in spite of its four legs (Hollis 1909).' },
          { target: 'Inga-i ngom, i-ker-i-ke kumut-i?', source: 'However clever you may be, can you see the back of your neck? (Hollis 1909).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In the 1909 Nandi proverb "Iput-i tany aku pa-kelek angwan" (Hollis 1909), what does "angwan" mean?',
            correctAnswer: 'Four (4)',
            options: ['Four (4)', 'One (1)', 'Ten (10)', 'Lion'],
            hint: 'pa-kelek angwan = having four legs'
          }
        ]
      }
    ]
  }
];

// --- KALENJIN (grammar-reference.ts) ---
// ============================================================
// Kalenjin (Nandi / Kipsigis / Pokot / Sabaot) Grammar Reference Guide
// Grounded in A. C. Hollis & Sir Charles Eliot (1909) "The Nandi: Their Language and Folklore",
// van Otterloo (1979), Rottland (1982), and Gerrit J. Dimmendaal (1988) Proto-Nilotic
// ============================================================

export interface KalenjinGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { kalenjin: string; english: string; explanation?: string }[];
}

export const KALENJIN_GRAMMAR_SECTIONS: KalenjinGrammarSection[] = [
  {
    id: "kalenjin-primary-secondary-nouns",
    title: "Primary (Indefinite) vs. Secondary (Definite Suffix) Noun Forms & Dialectal Unity",
    summary: "Kalenjin nouns inflect via suffixed definite articles (-it, -et, -ta, -to in singular; -ik, -ek, -ka in plural) rather than Bantu-style prefixes.",
    content: `As documented in A. C. Hollis & Sir Charles Eliot (1909) *The Nandi: Their Language and Folklore*, Rottland (1982), and van Otterloo (1979):
1. **Primary (Indefinite) vs. Secondary (Definite) Noun Suffixes**:
   - Southern Nilotic (Kalenjin) nouns take suffixed determiners for specificity:
   - **chii → chiito** (a person → the person); plural **piich → piik** (people → the people).
   - **tany → teta** (an ox/cow → the cow); plural **tuka / tuga** (the cattle).
   - **lakwa → lakwet** (a child → the child); plural **lagok** (the children).
   - **ket → keetit** (a tree → the tree); plural **keetik** (the trees).
   - **peei → beek** (water → the water, plural mass noun in *-k*).
2. **Cross-Dialectal Correspondences (van Otterloo 1979 & Rottland 1982)**:
   - Core vocabulary is shared across **Nandi, Kipsigis, Keiyo, Tugen, Terik, Sabaot, Marakwet (Endo), Cherang'any, Pokot, and Okiek**: e.g., *metit* (head), *koong'* (eye), *iitiit* (ear), *koot* (mouth), *korotiik* (blood), *maat* (fire), *Asiis / Asista* (sun).`,
    examples: [
      { kalenjin: "chii → chiito (sg.) | piich → piik (pl.)", english: "a person → the person | people → the people", explanation: "Primary indefinite vs. secondary definite suffixation" },
      { kalenjin: "tany → teta (sg.) | tuga (pl.)", english: "a cow/ox → the cow | the cattle", explanation: "Hollis (1909) pastoral noun declension" },
      { kalenjin: "beek • chego • mursik • kimyet", english: "water • fresh milk • fermented milk • cornmeal (ugali)", explanation: "Mass nouns with plural definite suffix -k / -t" }
    ]
  },
  {
    id: "kalenjin-numerals-hollis-proverbs",
    title: "Kalenjin Numerals (1–100), VSO Syntax & Hollis (1909) Oral Literature",
    summary: "Kalenjin uses VSO word order, subject prefixes (a-, i-, ko-, ki-, o-), and a base-10 numeral system (akeenge to taman and pokol).",
    content: `From A. C. Hollis & Sir Charles Eliot (1909) *The Nandi: Their Language and Folklore*:
1. **Cardinal Numerals (1–10 & Higher)**:
   - **1**: *akeenge* • **2**: *aeng'* • **3**: *somok* • **4**: *ang'wan* • **5**: *muut*
   - **6**: *lo* • **7**: *tisap* • **8**: *sisiit* • **9**: *sokol* • **10**: *taman*
   - **40**: *artam* • **50**: *konom* • **100**: *pokol*.
2. **Verb-Initial (VSO) Syntax & Pronominal Prefixes**:
   - Verbs precede the subject noun in neutral clauses:
   - **Ii-e ngetuny lel** = *Bears (ii-e) the-lion (ngetuny) a-hyena (lel)* ("The lion bears a hyena", Hollis 1909 Proverb #2).
   - **Iput-i tany aku pa-kelek angwan** = *Falls (iput-i) the-ox (tany) though having-legs (pa-kelek) four (angwan)* ("The ox falls in spite of its four legs", Hollis 1909, p. 231).`,
    examples: [
      { kalenjin: "akeenge, aeng', somok, ang'wan, muut, lo, tisap, sisiit, sokol, taman", english: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10", explanation: "Kalenjin cardinal numerals 1–10" },
      { kalenjin: "Ii-e ngetuny lel.", english: "The lion bears a hyena.", explanation: "Hollis & Eliot (1909, p. 152, Proverb #2)" },
      { kalenjin: "Iput-i tany aku pa-kelek angwan.", english: "The ox falls in spite of its four legs.", explanation: "Hollis & Eliot (1909, p. 231)" }
    ]
  }
];

// --- MIJIKENDA (course.ts) ---
// ============================================================
// Mijikenda (Kigiryama / Chidigo / Chichonyi) Language Course
// Grounded in W. E. Taylor (1891) "Giryama Vocabulary and Collections" (SPCK, London — Public Domain)
// and Sabaki Comparative Linguistics
// ============================================================


export const MIJIKENDA_CONFIG: LanguageConfig = {
  id: 'mijikenda',
  name: 'Mijikenda',
  nativeName: "Kigiryama /Chidigo (Midzi Chenda)",
  family: 'Bantu',
  counties: ['Kilifi', 'Kwale', 'Mombasa', 'Tana River'],
  speakers: '2.5M',
  speechLocale: 'sw-KE',
  description: 'The Sabaki Bantu language cluster of the Nine Sacred Kaya Homesteads (Giriama, Digo, Chonyi, Duruma, Kambe, Ribe, Rabai, Jibana, Kauma) along the Kenyan coast. Grounded in Rev. W. E. Taylor (1891) and Proto-Sabaki linguistics.',
  color: '#0D9488',
  sources: ['taylor-giryama-1891', 'open-web-swadesh-comparative'],
};

export const MIJIKENDA_UNITS: CourseUnit[] = [
  {
    id: 'mijikenda-unit-1',
    title: 'Unit 1: Sacred Kaya Heritage, Sabaki Nouns & W. E. Taylor (1891) Riddles',
    description: 'Learn Kigiryama and Chidigo nouns, numerals, verbs, and 1891 riddles and folktales from W. E. Taylor.',
    icon: '🌴',
    skills: [
      {
        id: 'mijikenda-kaya-nouns',
        title: 'Midzi Chenda (Nine Homesteads), People & Nature',
        icon: 'Home',
        description: 'Master core Mijikenda nouns for society, nature, and sacred Kaya institutions.',
        tips: "Mijikenda ('Midzi Chenda' = Nine Villages) shifts Proto-Bantu *t to h (moho = fire, muho = river, -hahu = three) and uses dzi-/ma- in Class 5/6 (dziwe = stone, madzi = water).",
        words: [
          { target: 'Midzi Chenda', source: 'The Nine Homesteads / Mijikenda', pronunciation: 'mee-dzee chehn-dah', hint: 'midzi (villages) + chenda (nine)' },
          { target: 'kaya (pl. makaya)', source: 'sacred fortified forest homestead', pronunciation: 'kah-yah / mah-kah-yah', hint: 'UNESCO World Heritage Mijikenda shrines' },
          { target: 'Kambi / atumia', source: 'council of elders / senior elders', pronunciation: 'kahm-bee / ah-too-mee-ah', hint: 'Giriama & Chonyi elder governance' },
          { target: "mut'u (pl. at'u)", source: 'person (pl. people)', pronunciation: 'moo-too / ah-too', hint: 'W. E. Taylor (1891) Class 1/2' },
          { target: 'mwalume (pl. alume) / muche (pl. ache)', source: 'man / woman', pronunciation: 'mwah-loo-meh / moo-cheh', hint: 'W. E. Taylor (1891)' },
          { target: 'madzi / moho', source: 'water / fire', pronunciation: 'mah-dzee / moh-hoh', hint: 'Sabaki dzi- and *t > h shift' },
          { target: 'dziwe (pl. mawe) / dzua', source: 'stone (pl. stones) / sun', pronunciation: 'dzee-weh / dzoo-ah', hint: 'Class 5 dzi-' },
          { target: 'Mulungu / Mulingu', source: 'God, Supreme Creator', pronunciation: 'moo-loon-goo', hint: 'Shared coastal & eastern Bantu name' },
          { target: 'chakurya / wari', source: 'food / cooked cornmeal (ugali)', pronunciation: 'chah-koo-ryah / wah-ree', hint: 'W. E. Taylor (1891, p. 138)' },
          { target: 'mafigo', source: 'three cooking stones of the hearth', pronunciation: 'mah-fee-goh', hint: 'W. E. Taylor (1891 Riddle #6)' }
        ],
        sentences: [
          { target: "Fw-alume ahahu, akiuka mumwenga, k'afurya wari. Ni mafigo.", source: 'We are three men; when one goes away, we eat no cornmeal. It is the three hearthstones (Taylor 1891).' },
          { target: 'Mut’u k’aadima kugit’ira chakurya.', source: 'A person cannot cook food (with only two hearthstones — Taylor 1891).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In W. E. Taylor (1891) Riddle #6, what are the "three men" (alume ahahu) without whom no cornmeal (wari) can be cooked?',
            correctAnswer: 'mafigo (three cooking stones of the hearth)',
            options: ['mafigo (three cooking stones of the hearth)', 'madzi / moho', 'Midzi Chenda', 'kaya (pl. makaya)'],
            hint: 'Ni mafigo = It is the three hearthstones'
          }
        ]
      },
      {
        id: 'mijikenda-verbs-folklore',
        title: 'Kigiryama Verbs, Numerals & Taylor (1891) Folktale Fauna',
        icon: 'BookOpen',
        description: 'Learn Mijikenda action verbs, numbers, and folktale characters from W. E. Taylor (1891).',
        tips: "In Kigiryama, Katsungula (the Little Hare) is the clever hero of traditional stories alongside Simba (the Lion), Fisi (the Hyena), and K'uku (the Fowl).",
        words: [
          { target: 'katsungula / simba / fisi', source: 'little hare / lion / hyena', pronunciation: 'kah-tsoon-goo-lah / seem-bah / fee-see', hint: 'W. E. Taylor (1891) folktale characters' },
          { target: 'mumwenga, mairi, ahahu, chenda, kumi', source: '1, 2, 3, 9, 10', pronunciation: 'moo-mwehn-gah, mah-ee-ree, ah-hah-hoo, chehn-dah, koo-mee', hint: 'Mijikenda numerals (Taylor 1891)' },
          { target: "kurya / kugit'ira", source: 'to eat / to cook', pronunciation: 'koo-ryah / koo-gee-tee-rah', hint: 'Taylor (1891, p. 138)' },
          { target: 'kugula / kuguza', source: 'to buy / to sell', pronunciation: 'koo-goo-lah / koo-goo-zah', hint: 'Proto-Sabaki commercial verbs' },
          { target: 'kutsimba / kudzenga', source: 'to dig / to build', pronunciation: 'koo-tseem-bah / koo-dzehn-gah', hint: 'Proto-Sabaki verbs' },
          { target: "K'akilumika. Ni kikokora.", source: 'It cannot be bitten. It is the elbow (Taylor 1891 Riddle #8)', pronunciation: 'kah-kee-loo-mee-kah nee kee-koh-koh-rah', hint: 'kikokora = elbow' },
          { target: 'Magoma mairi lwanda-ni. Ni mahombo.', source: 'Two cows in the open field. It is the breasts (Taylor 1891 Riddle #18)', pronunciation: 'mah-goh-mah mah-ee-ree lwahn-dah-nee', hint: 'lwanda-ni = in the open field' }
        ],
        sentences: [
          { target: 'Katsungula na Simba; Fisi na Simba na Katsungula.', source: 'The Little Hare and the Lion; The Hyena, the Lion, and the Little Hare (Taylor 1891).' },
          { target: "K'akilumika. Ni kikokora.", source: 'It cannot be bitten. It is the elbow (Taylor 1891).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which character is the clever trickster hare in W. E. Taylor's 1891 Giriama folktales?',
            correctAnswer: 'katsungula',
            options: ['katsungula', 'simba', 'fisi', 'kikokora'],
            hint: 'Katsungula na Simba = The Little Hare and the Lion'
          }
        ]
      }
    ]
  }
];

// --- MIJIKENDA (grammar-reference.ts) ---
// ============================================================
// Mijikenda (Kigiryama / Chidigo / Chichonyi / Chiduruma) Grammar Reference Guide
// Grounded in W. E. Taylor (1891) "Giryama Vocabulary and Collections" (SPCK, London — Public Domain)
// and Sabaki / North-East Coast Bantu Comparative Linguistics
// ============================================================

export interface MijikendaGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { mijikenda: string; english: string; explanation?: string }[];
}

export const MIJIKENDA_GRAMMAR_SECTIONS: MijikendaGrammarSection[] = [
  {
    id: "mijikenda-phonology-noun-classes",
    title: "Sabaki Sound Shifts (*t > h, dzi-/ma- Classes) & Nine Kaya Dialects",
    summary: "Mijikenda ('The Nine Homesteads' — Midzi Chenda) preserves distinctive Sabaki sound laws (such as *moto > moho 'fire', *mutu > mut'u 'person', *jino > dzino 'tooth') across Kigiryama, Chidigo, Chichonyi, and Chiduruma.",
    content: `As documented in W. E. Taylor's *Giryama Vocabulary and Collections* (1891) and Wikipedia's *Sabaki languages* / *Digo language* references:
1. **Distinctive Mijikenda Phonology & Sound Correspondences**:
   - **Aspirated voiceless stops (*t', k', p'*)**: e.g., **mut'u** (person, pl. **at'u**), **k'uku** (chicken), **p'ula** (nose).
   - **Lenition of Proto-Bantu \*t > h**: e.g., **moho** (fire, cf. Swahili *moto*), **muho** (river, cf. Swahili *mto*), **-hahu** (three, cf. Swahili *-tatu*), **mahahu** (three).
   - **Affrication in Class 5 (*dzi- / ma-*)**: **dziwe → mawe** (stone → stones), **dzino → meno** (tooth → teeth), **dzits'o → mats'o** (eye → eyes), **madzi** (water), **Midzi Chenda** (Nine Villages/Tribes).
2. **Giryama *ki-* vs. Chonyi/Digo *chi-* (Class 7/8)**:
   - Class 7 nouns take **ki-** in Kigiryama (**kihi** 'chair', **kikokora** 'elbow', **chakurya** 'food') and **chi-** in Chichonyi/Chidigo (**chihi** 'chair').`,
    examples: [
      { mijikenda: "mut'u (pl. at'u) • mwalume (pl. alume) • muche (pl. ache)", english: "person (pl. people) • man (pl. men) • woman (pl. women)", explanation: "Class 1/2 animate nouns in W. E. Taylor (1891)" },
      { mijikenda: "dziwe (pl. mawe) • dzino (pl. meno) • madzi • moho", english: "stone • tooth • water • fire", explanation: "Sabaki dzi-/ma- prefixation and *t > h lenition" },
      { mijikenda: "kihi (Kigiryama) / chihi (Chichonyi)", english: "chair, stool", explanation: "Class 7 dialectal alternation across Mijikenda" }
    ]
  },
  {
    id: "mijikenda-taylor-1891-riddles-verbs",
    title: "W. E. Taylor (1891) Verbal Morphology, Negation (k'a-) & Classical Giriama Riddles",
    summary: "In Taylor (1891), Kigiryama forms infinitives with ku-, negates indicative verbs with prefix k'a-, and uses conditional/temporal -ki- ('when/if').",
    content: `W. E. Taylor (1891) *Giryama Vocabulary and Collections* illustrates classical Kigiryama verb structure through riddles and folktales:
1. **Infinitive & Everyday Verbs (*ku-*)**:
   - **kurya** (to eat), **kugit'ira** (to cook), **kuadima** (to be able), **kuuka** (to depart/go away), **kulumika** (to be bitten), **kugula / kuguza** (to buy / to sell), **kutsimba** (to dig), **kudzenga** (to build).
2. **Negative Prefix (*k'a-*) & Conditional Infix (*-ki-*)**:
   - In Riddle #6 (Taylor 1891, p. 138): *"Fw-alume ahahu, a-ki-uka mumwenga, k'a-furya wari. Ni mafigo."*
   - **a-ki-uka mumwenga** = "when one goes away" (*-ki-* = temporal/conditional 'when').
   - **k'a-furya wari** = "we do not eat cornmeal" (*k'a-* = negative prefix).
   - **k'a-adima kugit'ira chakurya** = "(a person) cannot cook food".
   - In Riddle #8 (p. 139): **"K'a-ki-lumika. Ni kikokora."** = "It (Class 7 *ki-*) cannot be bitten. It is the elbow."`,
    examples: [
      { mijikenda: "Fw-alume ahahu, akiuka mumwenga, k'afurya wari. Ni mafigo.", english: "We are three men; when one goes away, we eat no cornmeal. It is the three hearthstones.", explanation: "W. E. Taylor (1891, p. 138, Riddle #6)" },
      { mijikenda: "K'akilumika. Ni kikokora.", english: "It cannot be bitten. It is the elbow.", explanation: "W. E. Taylor (1891, p. 139, Riddle #8)" },
      { mijikenda: "Magoma mairi lwanda-ni. Ni mahombo.", english: "Two cows in the open field. It is the breasts.", explanation: "W. E. Taylor (1891, p. 140, Riddle #18)" }
    ]
  }
];

// --- MERU (course.ts) ---
// ============================================================
// Meru & Mount Kenya Bantu (Kĩmĩĩrũ / Kîembu) Language Course
// Grounded in Wikipedia Meru_language & Embu_language Linguistic Corpus
// ============================================================


export const MERU_CONFIG: LanguageConfig = {
  id: 'meru',
  name: 'Meru',
  nativeName: 'Kĩmĩĩrũ',
  family: 'Bantu',
  counties: ['Meru', 'Tharaka-Nithi', 'Embu'],
  speakers: '2.4M',
  speechLocale: 'sw-KE',
  description: 'A Central Kenya (Mount Kenya / Thagiicu) Bantu language spoken around the eastern and northern slopes of Kĩrĩnyaga (Mount Kenya), renowned for its 16 noun classes and the Njũri Ncheke council of elders.',
  color: '#16A34A',
  sources: ['open-web-swadesh-comparative'],
};

export const MERU_UNITS: CourseUnit[] = [
  {
    id: 'meru-unit-1',
    title: 'Unit 1: Greetings, 16 Noun Classes, Numerals & Mount Kenya Culture',
    description: 'Master Kĩmĩĩrũ and Kîembu greetings, noun-class concords, numbers 1–10, and everyday verbs.',
    icon: '⛰️',
    skills: [
      {
        id: 'meru-greetings-nouns',
        title: 'Greetings, People & Noun Classes (Muntũ / Antũ)',
        icon: 'Users',
        description: 'Learn conversational greetings and noun classes across Mount Kenya Bantu.',
        tips: "In Kĩmĩĩrũ, Class 1/2 nouns pair mũ-/ba- (muntũ → antũ 'person → people'), Class 3/4 pair mũ-/mĩ- (mũtĩ → mĩtĩ 'tree → trees'), and Class 12/13 pair ka-/tũ- for diminutives (kaana → tũana).",
        words: [
          { target: 'Ũrĩ mwega? (resp. Nĩ mwega)', source: 'How are you? (I am fine)', pronunciation: 'oo-ree mweh-gah / nee mweh-gah', hint: 'Singular greeting' },
          { target: 'Mũrĩ ega? (resp. Tũrĩ ega)', source: 'How are you all? (We are fine)', pronunciation: 'moo-ree eh-gah / too-ree eh-gah', hint: 'Plural greeting' },
          { target: 'Wĩtagwa atĩa? (resp. Njĩtagwa...)', source: 'What is your name? (My name is...)', pronunciation: 'wee-tah-gwah ah-tee-ah', hint: 'Introductions' },
          { target: 'Nĩwega mũno', source: 'Thank you very much', pronunciation: 'nee-weh-gah moo-noh', hint: 'Gratitude' },
          { target: 'muntũ (pl. antũ) / mũndũ (pl. andũ)', source: 'person (pl. people)', pronunciation: 'moon-too / ahn-too', hint: 'Class 1/2' },
          { target: 'mwana (pl. aana / ciana)', source: 'child (pl. children)', pronunciation: 'mwah-nah', hint: 'Class 1/2' },
          { target: 'mũtĩ (pl. mĩtĩ)', source: 'tree (pl. trees)', pronunciation: 'moo-tee / mee-tee', hint: 'Class 3/4' },
          { target: 'maĩ / manjĩ • mwaki', source: 'water • fire', pronunciation: 'mah-ee / mwah-kee', hint: 'Core nature nouns' },
          { target: 'irio • ĩria • nyama', source: 'food • milk • meat', pronunciation: 'ee-ree-oh / ee-ree-ah / nyah-mah', hint: 'Food staples' },
          { target: 'Njũri Ncheke', source: 'Supreme traditional council of elders of the Ameru', pronunciation: 'n-joo-ree n-cheh-keh', hint: 'Indigenous governance' }
        ],
        sentences: [
          { target: 'Muntũ ũjũ mũraja arĩrũta wĩra.', source: 'This tall person is working.' },
          { target: 'Antũ baba baraja barĩrũta wĩra.', source: 'These tall people are working.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "These tall people" in Kĩmĩĩrũ (plural of "Muntũ ũjũ mũraja")?',
            correctAnswer: 'Antũ baba baraja',
            options: ['Antũ baba baraja', 'Mĩtĩ ĩjĩ mĩraja', 'Muntũ ũjũ mũraja', 'Tũrĩ ega'],
            hint: 'Class 2 plural concord ba-'
          }
        ]
      },
      {
        id: 'meru-numbers-verbs',
        title: 'Numerals 1–10, Dahl’s Law Verbs & Proverbs',
        icon: 'Hash',
        description: 'Count from 1 to 10 and use core Mount Kenya Bantu verbs.',
        tips: "Notice Dahl's Law in infinitive verbs: kũ-ruga (to cook), kũ-rĩa (to eat), kũ-nyua (to drink), but gũ-thiĩ (to go) and gũ-ikara (to sit) where kũ- voices to gũ- before a voiceless consonant.",
        words: [
          { target: 'ĩmwe, igĩrĩ, ithatũ, inya, ithano', source: '1, 2, 3, 4, 5', pronunciation: 'ee-mweh, ee-gee-ree, ee-thah-too, ee-nyah, ee-thah-noh', hint: 'Cardinals 1–5' },
          { target: 'ithathatũ, mũgwanja, inyanya, kenda, ikũmi', source: '6, 7, 8, 9, 10', pronunciation: 'ee-thah-thah-too, moo-gwahn-jah, ee-nyah-nyah, kehn-dah, ee-koo-mee', hint: 'Cardinals 6–10' },
          { target: 'kũrĩa / kũnyua / kũruga', source: 'to eat / to drink / to cook', pronunciation: 'koo-ree-ah / koo-nyoo-ah / koo-roo-gah', hint: 'Class 15 infinitives' },
          { target: 'gũthiĩ / kwĩja (gũũka)', source: 'to go / to come', pronunciation: 'goo-thee-ee / kwee-jah', hint: "Dahl's Law gũthiĩ" },
          { target: 'kwaria / kũmenya / kwenda', source: 'to speak / to know / to love', pronunciation: 'kwah-ree-ah / koo-meh-nyah / kwehn-dah', hint: 'Everyday verbs' },
          { target: 'Mũtĩ ũmwe ndũtũũragia mũrũrĩ', source: 'A single tree does not make a forest', pronunciation: 'moo-tee oo-mweh', hint: 'Mount Kenya Bantu unity proverb' },
          { target: 'Kũmenya njĩra nĩ kũũria', source: 'To know the path is to ask', pronunciation: 'koo-meh-nyah n-jee-rah nee koo-ree-ah', hint: 'Proverb on humility and learning' }
        ],
        sentences: [
          { target: 'Mũtĩ ũmwe ndũtũũragia mũrũrĩ.', source: 'A single tree does not make a forest.' },
          { target: 'Kũmenya njĩra nĩ kũũria.', source: 'To know the path is to ask.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does the Kĩmĩĩrũ proverb "Kũmenya njĩra nĩ kũũria" mean?',
            correctAnswer: 'To know the path is to ask',
            options: ['To know the path is to ask', 'A single tree does not make a forest', '1, 2, 3, 4, 5', 'Thank you very much'],
            hint: 'kũmenya = to know, njĩra = path, kũũria = to ask'
          }
        ]
      }
    ]
  }
];

// --- MERU (grammar-reference.ts) ---
// ============================================================
// Meru & Mount Kenya Bantu (Kĩmĩĩrũ / Kîembu) Grammar Reference Guide
// Grounded in Wikipedia Meru_language (16 Noun Classes, 4 Dialect Clusters)
// and Wikipedia Embu_language (150-Word Lexicon & 16 Parallel Phrases)
// ============================================================

export interface MeruGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { meru: string; english: string; explanation?: string }[];
}

export const MERU_GRAMMAR_SECTIONS: MeruGrammarSection[] = [
  {
    id: "meru-16-noun-classes-concord",
    title: "The 16 Noun Classes of Kĩmĩĩrũ, Adjectival/Demonstrative Concord & Dahl's Law",
    summary: "Kĩmĩĩrũ preserves 16 active Bantu noun classes with full alliterative agreement across demonstratives, adjectives, and verbs, alongside Dahl's Law voicing dissimilation.",
    content: `As documented in Wikipedia's *Meru language* and *Embu language* linguistic references:
1. **Complete 16-Class Concord System**:
   - **Class 1/2 (*mũ- / a-* or *ba-*)**: *Muntũ ũjũ mũraja arĩrũta wĩra* (This tall person is working) → *Antũ baba baraja barĩrũta wĩra* (These tall people are working).
   - **Class 3/4 (*mũ- / mĩ-*)**: *Mũtĩ ũjũ mũraja* (This tall tree) → *Mĩtĩ ĩjĩ mĩraja* (These tall trees).
   - **Class 5/6 (*rĩ-, ĩ- / ma-*)**: *Ĩvia / Ĩiga* (stone) → *Mavia / Maiga* (stones), *Maĩ / Manjĩ* (water).
   - **Class 7/8 (*kĩ- / bi-, ci-*)**: *Kĩvĩrĩ / Gĩtĩ* (chair) → *Bĩtĩ / Ciĩtĩ* (chairs).
   - **Class 9/10 (*n- / n-*)**: *Ng'ombe* (cattle), *Mbũri* (goat), *Nyomba* (house).
   - **Class 12/13 (*ka- / tũ-* Diminutives)**: *Kaana → Tũana* (small child → small children), *Kavĩcĩ → Tũvĩcĩ* (young boy → boys).
2. **Dahl's Law (Voicing Dissimilation)**:
   - When a prefix containing voiceless *k* or *t* precedes a stem beginning with another voiceless stop (*t, k, c*), the prefix consonant voices to *g* (*kĩ- + tĩ → gĩtĩ* 'chair', *kũ- + thiĩ → gũthiĩ* 'to go').`,
    examples: [
      { meru: "Muntũ ũjũ mũraja → Antũ baba baraja", english: "This tall person → These tall people", explanation: "Class 1/2 demonstrative and adjectival concord in Kĩmĩĩrũ" },
      { meru: "Mũtĩ ũjũ mũraja → Mĩtĩ ĩjĩ mĩraja", english: "This tall tree → These tall trees", explanation: "Class 3/4 concord" },
      { meru: "kũ-ruga (to cook) vs. gũ-thiĩ (to go)", english: "to cook vs. to go", explanation: "Dahl's Law voicing kũ- -> gũ- before voiceless stem consonant" }
    ]
  },
  {
    id: "meru-dialect-comparison-phrases",
    title: "Four Kĩmĩĩrũ Dialect Clusters & Parallel Mount Kenya Bantu Conversational Phrases",
    summary: "Spoken across Meru, Tharaka-Nithi, and Embu counties, Mount Kenya Bantu exhibits systematic dialectal variations across Imenti, Tigania/Igembe, Chuka/Mwimbi/Muthambi, Tharaka, and Kîembu.",
    content: `Wikipedia's *Meru language* and *Embu language* tables compare everyday phrases across the Mount Kenya dialects:
1. **Four Kĩmĩĩrũ Dialect Clusters**:
   - **Imenti**: *Mpũa inyingĩ ĩtiumaga mbura* (Too much thunder does not bring rain).
   - **Chuka / Mwimbi / Muthambi**: Preserves conservative phonological distinctions along the southern slopes of Mount Kenya.
   - **Tigania / Igembe**: Spoken in northern Meru (Nyambene Hills).
   - **Tharaka**: Spoken in the eastern lowlands of Tharaka-Nithi.
2. **Everyday Greetings & Phrases**:
   - **Muuga! / Ũrĩ mwega?** = Hello! / How are you? → **Nĩ mwega** (I am fine).
   - **Mũrĩ ega?** = How are you all? → **Tũrĩ ega** (We are fine).
   - **Wĩtagwa atĩa?** = What is your name? → **Njĩtagwa...** (My name is...).
   - **Nĩwega mũno** = Thank you very much.`,
    examples: [
      { meru: "Ũrĩ mwega? — Nĩ mwega. | Mũrĩ ega? — Tũrĩ ega.", english: "How are you? — I am fine. | How are you all? — We are fine.", explanation: "Singular vs. plural greetings in Mount Kenya Bantu" },
      { meru: "Wĩtagwa atĩa? — Njĩtagwa...", english: "What is your name? — My name is...", explanation: "Passive verb -ĩtagwa ('to be called')" },
      { meru: "Njũri Ncheke • Kiama kia Ngome", english: "Supreme Council of Elders (Ameru • Aembu)", explanation: "Traditional indigenous governance institutions" }
    ]
  }
];

// --- SOMALI (course.ts) ---
// ============================================================
// Somali (Af-Soomaali) Language Course Configuration & Units
// Grounded in Wiktionary 207-Word Somali Swadesh List, Wikipedia Somali_grammar & Bender (2020)
// ============================================================


export const SOMALI_CONFIG: LanguageConfig = {
  id: 'somali',
  name: 'Somali',
  nativeName: 'Af-Soomaali',
  family: 'Cushitic',
  counties: ['Garissa', 'Wajir', 'Mandera', 'Isiolo', 'Marsabit', 'Nairobi'],
  speakers: '2.8M',
  speechLocale: 'so-KE',
  description: 'A Lowland East Cushitic language spoken across North-Eastern Kenya and the Horn of Africa, celebrated for its suffixed definite articles (-ka/-ta), focus grammar (waa/baa), and alliterative oral poetry (Gabay) and proverbs (Maahmaahyo).',
  color: '#2563EB',
  sources: ['open-web-swadesh-comparative'],
};

export const SOMALI_UNITS: CourseUnit[] = [
  {
    id: 'somali-unit-1',
    title: 'Unit 1: Greetings (Nabad!), Definite Articles (-ka/-ta), Pronouns & Cushitic Numerals',
    description: 'Master Af-Soomaali greetings, masculine/feminine definite suffixes, pronouns, numbers 1–10, and classical Maahmaahyo proverbs.',
    icon: '🐪',
    skills: [
      {
        id: 'somali-greetings-nouns',
        title: 'Greetings, Suffixed Articles (-ka / -ta) & Pastoral Life',
        icon: 'MessageCircle',
        description: 'Learn Af-Soomaali greetings, pronouns, and definite nouns from the Swadesh and Cushitic corpus.',
        tips: "In Af-Soomaali, 'the' is a suffix attached to the noun: -ka/-ga/-ha for masculine nouns (nin → ninka 'the man', geel → geela 'the camels') and -ta/-da/-sha for feminine nouns (naag → naagta 'the woman', shimbir → shimbirta 'the bird').",
        words: [
          { target: 'Nabad! / Sidee tahay?', source: 'Peace! / How are you?', pronunciation: 'nah-bahd / see-deh tah-hay', hint: 'Standard Somali greeting' },
          { target: 'Mahadsanid (Aad baad u mahadsan tahay)', source: 'Thank you (Thank you very much)', pronunciation: 'mah-hahd-sah-need', hint: 'Gratitude' },
          { target: 'Soo dhawoow! / Nabad gelyo!', source: 'Welcome! / Goodbye!', pronunciation: 'soh dhah-wow / nah-bahd gehl-yoh', hint: 'Hospitality phrases' },
          { target: 'aniga (aan) / adiga (aad)', source: 'I / you (singular)', pronunciation: 'ah-nee-gah / ah-dee-gah', hint: 'Emphatic & clitic pronouns' },
          { target: 'isaga (uu) / iyada (ay)', source: 'he / she', pronunciation: 'ee-sah-gah / ee-yah-dah', hint: '3rd person pronouns' },
          { target: 'nin (ninka) / naag (naagta)', source: 'man (the man) / woman (the woman)', pronunciation: 'neen-kah / nahg-tah', hint: 'Masculine -ka vs. Feminine -ta' },
          { target: 'biyo (biyaha) / caano (caanaha)', source: 'water / milk', pronunciation: 'bee-yoh / ah-noh', hint: 'Essential pastoral liquids' },
          { target: "geel / lo' / shimbir", source: 'camels / cattle / bird', pronunciation: 'gehl / loh / sheem-beer', hint: 'Proto-East Cushitic fauna (Bender 2020)' },
          { target: 'qorrax / dayax / roob', source: 'sun / moon / rain', pronunciation: 'qohr-rahkh / dah-yahkh / rohb', hint: 'Swadesh nature nouns' },
          { target: 'xeer / maahmaah', source: 'customary law / proverb', pronunciation: 'khehr / mah-mah', hint: 'Somali oral heritage' }
        ],
        sentences: [
          { target: 'Nabad! Soo dhawoow, mahadsanid.', source: 'Peace! Welcome, thank you.' },
          { target: 'Ninku wuxuu cabbaa biyo iyo caano.', source: 'The man drinks water and milk.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How does Af-Soomaali form "the man" and "the woman" from "nin" and "naag"?',
            correctAnswer: 'ninka / naagta',
            options: ['ninka / naagta', 'aniga / adiga', 'biyo / caano', 'qorrax / dayax'],
            hint: 'Masculine suffix -ka and feminine suffix -ta'
          }
        ]
      },
      {
        id: 'somali-numbers-maahmaahyo',
        title: 'Numerals 1–10, Verbs & Classical Maahmaahyo Proverbs',
        icon: 'Scroll',
        description: 'Count from 1 to 10 in Af-Soomaali and learn alliterative Somali proverbs.',
        tips: "Somali proverbs (Maahmaahyo) use poetic alliteration (higgaad), such as 'Far keliya fool ma dhaqdo' (alliterating in F: Far / fool).",
        words: [
          { target: 'kow, laba, saddex, afar, shan', source: '1, 2, 3, 4, 5', pronunciation: 'kohw, lah-bah, sahd-dehkh, ah-fahr, shahn', hint: 'East Cushitic cardinals 1–5' },
          { target: 'lix, todoba, sideed, sagaal, toban', source: '6, 7, 8, 9, 10', pronunciation: 'leekh, toh-doh-bah, see-dehd, sah-gahl, toh-bahn', hint: 'East Cushitic cardinals 6–10' },
          { target: 'boqol / kun', source: '100 / 1,000', pronunciation: 'boh-qohl / koon', hint: 'Higher numerals' },
          { target: 'cun / cab / imow / tag', source: 'eat / drink / come / go', pronunciation: 'oon / ahb / ee-mohw / tahg', hint: 'Core Swadesh verbs' },
          { target: 'arag / maqal / ogow / hadal', source: 'see / hear / know / speak', pronunciation: 'ah-rahg / mah-qahl / oh-gohw / hah-dahl', hint: 'Perception & speech verbs' },
          { target: 'Far keliya fool ma dhaqdo', source: 'A single finger cannot wash a face (Unity is strength)', pronunciation: 'fahr keh-lee-yah fohl mah dhahq-doh', hint: 'Classical Somali proverb' },
          { target: "Aqoon la'aani waa iftiin la'aan", source: 'Lack of knowledge is lack of light', pronunciation: 'ah-qohn lah-ah-nee wah eef-teen lah-ahn', hint: 'Classical Somali proverb' }
        ],
        sentences: [
          { target: 'Far keliya fool ma dhaqdo.', source: 'A single finger cannot wash a face.' },
          { target: "Aqoon la'aani waa iftiin la'aan.", source: 'Lack of knowledge is lack of light.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does the Somali proverb "Far keliya fool ma dhaqdo" mean?',
            correctAnswer: 'A single finger cannot wash a face (Unity is strength)',
            options: [
              'A single finger cannot wash a face (Unity is strength)',
              'Lack of knowledge is lack of light',
              '1, 2, 3, 4, 5',
              '100 / 1,000'
            ],
            hint: 'far = finger, keliya = single/alone, fool = face, ma dhaqdo = does not wash'
          }
        ]
      }
    ]
  }
];

// --- SOMALI (grammar-reference.ts) ---
// ============================================================
// Somali (Af-Soomaali) Grammar Reference Guide
// Grounded in Wikipedia Somali_grammar, Wiktionary 207-Word Somali Swadesh List,
// and M. Lionel Bender (2020) Proto-East Cushitic Comparative Linguistics
// ============================================================

export interface SomaliGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { somali: string; english: string; explanation?: string }[];
}

export const SOMALI_GRAMMAR_SECTIONS: SomaliGrammarSection[] = [
  {
    id: "somali-articles-gender-case",
    title: "Suffixed Definite Articles (-ka / -ta), Polar Gender & Nominative Case (-ku / -tu)",
    summary: "Af-Soomaali is an East Cushitic language where grammatical gender (Masculine -ka vs. Feminine -ta) and grammatical case (Absolutive -a vs. Nominative -u) are marked by suffixed articles.",
    content: `As documented in Wikipedia's *Somali grammar* and M. Lionel Bender (2020):
1. **Suffixed Definite Articles & Grammatical Gender**:
   - Masculine singular nouns take the definite suffix **-ka** (assimilating to **-ga, -ha, -a** after gutturals/vowels): **nin → ninka** (man → the man), **libaax → libaaxa** (lion → the lion), **guriga** (the house).
   - Feminine singular nouns take **-ta** (assimilating to **-da, -sha**): **naag → naagta** (woman → the woman), **shimbir → shimbirta** (bird → the bird), **magaalada** (the town).
   - **Gender Polarity in Plurals**: Many nouns invert their gender agreement in the plural!
2. **Absolutive vs. Nominative Case Marking**:
   - **Absolutive (citation/object form)** ends in **-a**: *nin-ka* (the man), *naag-ta* (the woman).
   - **Nominative (non-focused subject form)** replaces *-a* with **-u**: *nin-ku* (the man [subj.]), *naag-tu* (the woman [subj.]).`,
    examples: [
      { somali: "nin → ninka (abs.) / ninku (nom.)", english: "man → the man (object/citation vs. subject)", explanation: "Masculine article -ka and nominative subject -ku" },
      { somali: "naag → naagta (abs.) / naagtu (nom.)", english: "woman → the woman (object/citation vs. subject)", explanation: "Feminine article -ta and nominative subject -tu" },
      { somali: "biyo (biyaha) • caano (caanaha) • geel (geela)", english: "water • milk • camels", explanation: "Core Cushitic pastoral nouns" }
    ]
  },
  {
    id: "somali-focus-pronouns-numerals",
    title: "Mandatory Sentence Focus Markers (waa, baa, ayaa, waxaa), Dual Pronouns & Cushitic Numerals",
    summary: "Every declarative Somali sentence requires a focus particle (waa for verbs; baa, ayaa, or waxaa for nouns) and pairs emphatic independent pronouns with short verbal clitics.",
    content: `From Wikipedia's *Somali grammar*, Wiktionary's *Somali Swadesh list*, and Bender (2020):
1. **Focus Particles (*waa, baa, ayaa, waxaa*)**:
   - **waa**: Focuses the predicate/verb (*Waa macallin* = He is a teacher; *Waan imanayaa* = I am coming).
   - **baa / ayaa**: Focuses the preceding noun phrase (*Nin baa yimid* = A MAN came).
   - **waxaa**: Focuses a post-verbal noun phrase.
2. **Emphatic Independent vs. Short Subject Clitic Pronouns**:
   - 1s **aniga | aan**, 2s **adiga | aad**, 3s.m **isaga | uu**, 3s.f **iyada | ay**, 1p.incl **innaga | aynu**, 1p.excl **annaga | aannu**, 2p **idinka | aad**, 3p **iyaga | ay**.
3. **East Cushitic Cardinal Numerals (1–10, 100, 1000)**:
   - **1**: *kow*, **2**: *laba*, **3**: *saddex*, **4**: *afar*, **5**: *shan*, **6**: *lix*, **7**: *todoba*, **8**: *sideed*, **9**: *sagaal*, **10**: *toban*, **100**: *boqol*, **1000**: *kun*.`,
    examples: [
      { somali: "aniga (aan) • adiga (aad) • isaga (uu) • iyada (ay)", english: "I • you (sg.) • he • she", explanation: "Emphatic independent vs. short subject clitic pronouns" },
      { somali: "kow, laba, saddex, afar, shan, lix, todoba, sideed, sagaal, toban", english: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10", explanation: "Af-Soomaali cardinal numerals (Bender 2020)" },
      { somali: "Far keliya fool ma dhaqdo.", english: "A single finger cannot wash a face.", explanation: "Classical alliterative Somali proverb (Maahmaah)" }
    ]
  }
];
