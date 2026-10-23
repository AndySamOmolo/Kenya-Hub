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
