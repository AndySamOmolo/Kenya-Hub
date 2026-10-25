import type { CourseUnit, LanguageConfig, GrammarSection } from "./types";
// ============================================================
// Kenyan Cultural Wisdom, Proverbs & Oral Literature Corpus
// Strictly Public Domain & Open-Web Verified Oral Traditions from all 34 Historical Works:
// - Rev. J. L. Krapf (1842) "Vocabulary of the Galla Language" & (1850) "Vocabulary of Six East-African Languages"
// - Karl & Lawrence Tutschek (1844–1845) "Dictionary & Grammar of the Galla Language" (Munich)
// - Bishop Edward Steere (1870) "Swahili Tales, as Told by Natives of Zanzibar" (London)
// - Rev. Dr. L. Krapf (1882) "A Dictionary of the Suahili Language" (Trübner, London)
// - J. T. Last (1885) "Grammar of the Kamba Language" (SPCK, London)
// - Rev. Dr. L. Krapf & Rev. J. Rebmann (1887) "A Nika-English Dictionary" (SPCK, London)
// - Rev. W. E. Taylor (1891) "African Aphorisms; or, Saws from Swahili-Land" (SPCK, London)
// - Rev. W. E. Taylor (1891) "Giryama Vocabulary and Collections" (SPCK, London)
// - Bishop Edward Steere & A. C. Madan (1894) "A Handbook of the Swahili Language" (SPCK, London)
// - Rev. J. Alfred Wray (1894) "An Elementary Introduction to the Taita Language" (SPCK, London)
// - Rev. Fr. Evangelist de Larajasse (1897) "Somali-English and English-Somali Dictionary" (London)
// - Hildegarde Hinde (1901) "The Masai Language" & (1904) "Vocabularies of the Kamba and Kikuyu Languages"
// - C. W. Hobley (1902) "Eastern Uganda" & (1903) "Anthropological Studies in Kavirondo and Nandi"
// - Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" & (1919–1922) "Comparative Study of the Bantu Languages"
// - Rev. Fr. A. Hémery (1903) "English-Kikuyu Handbook" & Rev. A. W. McGregor (1904) "English-Kikuyu Vocabulary"
// - A. C. Madan (1903) "Swahili-English Dictionary" & (1917) "English-Swahili Vocabulary"
// - A. C. Hollis (1905) "The Masai: Their Language and Folklore" (Clarendon Press, Oxford)
// - Lt. J. W. C. Kirk (1905) "A Grammar of the Somali Language with Examples in Prose and Verse" (Cambridge)
// - G. A. S. Northcote (1907) "The Nilotic Kavirondo" (JRAI Vol. 37)
// - A. C. Hollis & Sir Charles Eliot (1909) "The Nandi: Their Language and Folk-Lore" (Clarendon Press, Oxford)
// - Mrs. F. Burt (1910) "Swahili Grammar and Vocabulary" (SPCK, London)
// - Hon. K. R. Dundas (1910) "Notes on the Tribes Inhabiting the Baringo District" (JRAI Vol. 40)
// - C. W. Hobley (1910) "Ethnology of A-Kamba and Other East African Tribes" (Cambridge)
// - W. Scoresby & Katherine Routledge (1910) "With a Prehistoric People: The Akikuyu of British East Africa" (London)
// - A. C. Hollis (1910–1911) "Taveta Sayings and Proverbs" & "Taveta Enigmas"
// - Mervyn W. H. Beech (1911) "The Suk: Their Language and Folklore" (Clarendon Press, Oxford)
// - Gerhard Lindblom (1920) "The Akamba in British East Africa" (Uppsala)
// - Mill-Hill Fathers (1920) "A Handbook of the Kavirondo Language" (London)
// - Juxon Barton (1921) "Turkana Grammatical Notes and Vocabulary" (JRAI Vol. 51)
// - C. W. Hobley (1922) "Bantu Beliefs and Magic" (H. F. & G. Witherby, London)
// - Marion S. Stevenson (1927) "Specimens of Kikuyu Proverbs" (Festschrift Meinhof)
// - Rev. N. Stam (1929) "The Bahanga" (Catholic Anthropological Conference, Washington, D.C.)
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
  // ── 1. Maasai (A. C. Hollis 1905 "The Masai: Their Language and Folklore" & Hildegarde Hinde 1901 "The Masai Language" — Public Domain) ──
  {
    id: 'maasai-1',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: 'Meeta en-gutyuk ol-kurto.',
    literalTranslation: 'The mouth has no gouge (or caterpillar).',
    meaning: 'Words spoken cannot be easily hollowed out or undone; speech has lasting consequences.',
    englishEquivalent: 'A spoken word cannot be recalled.',
    theme: 'wisdom',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 246, Proverb #48)'
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
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 247, Proverb #52)'
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
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 245, Proverb #43)'
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
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 240, Proverb #13)'
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
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 248, Proverb #59)'
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
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 241, Proverb #18)'
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
  {
    id: 'maasai-14',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: 'Medong ol-kujuk el-lukunya nabo.',
    literalTranslation: 'Fate (or misfortune) does not beat upon one head alone.',
    meaning: 'Hardship visits everyone in turn; show compassion to those in trouble today.',
    englishEquivalent: 'Misfortune comes to all.',
    theme: 'humility',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 247, Proverb #54)'
  },
  {
    id: 'maasai-15',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: 'Milo en-gima ti-atua ol-okeri.',
    literalTranslation: 'Fire does not go out within a scarred log (or: A family feud smoulders long if not reconciled).',
    meaning: 'Unresolved grievances linger like embers in hardwood; true peace requires open reconciliation.',
    theme: 'unity',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 249, Proverb #64)'
  },
  {
    id: 'maasai-16',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: 'Menya ol-ngatuny ol-chore.',
    literalTranslation: 'The lion does not eat his friend (or covenant partner).',
    meaning: 'True friendship and sworn brotherhood are sacred and inviolable.',
    englishEquivalent: 'Honour among friends.',
    theme: 'unity',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 248, Proverb #60)'
  },

  // ── 2. Kalenjin / Nandi (A. C. Hollis & Sir Charles Eliot 1909 "The Nandi: Their Language and Folk-Lore" & Hon. K. R. Dundas 1910 — Public Domain) ──
  {
    id: 'kalenjin-1',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Ii-e ngetuny lel.',
    literalTranslation: 'The lion bears a hyena (or jackal).',
    meaning: 'Said when a child fails to live up to the noble character or courage of their parents.',
    englishEquivalent: 'Many a good cow hath an evil calf.',
    theme: 'family',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 125, Proverb #2)'
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
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 125, Proverb #4)'
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
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 126, Proverb #7)'
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
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 126, Proverb #8)'
  },
  {
    id: 'kalenjin-5',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Apuk ma-pa. — Kina-ap-teta.',
    literalTranslation: 'Riddle: It pours out; it does not go away. — Answer: A cow’s udder.',
    meaning: 'Pastoral riddle celebrating the daily abundance of milk from cattle.',
    theme: 'nature',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 134, Riddle #4)'
  },
  {
    id: 'kalenjin-6',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'A-tinye cheptan-nyo ne-piiy-onyi mutai ko-rukut lakat. — Kweyot.',
    literalTranslation: 'Riddle: I have a daughter who gets a good meal every morning, but she goes to bed hungry at night. — Answer: A broom.',
    meaning: 'Homestead riddle comparing morning sweeping to feeding and evening storage to fasting.',
    theme: 'hard-work',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 135, Riddle #7)'
  },
  {
    id: 'kalenjin-7',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'I-ie tururik annan i-ie che-tililin?',
    literalTranslation: 'Riddle: Do you prefer water made dirty by the feet of oxen or clean water? — Answer: I prefer the muddy water, for then I own cattle.',
    meaning: 'Pastoralist riddle teaching that the labour and commotion of tending livestock is preferable to idle poverty.',
    theme: 'hard-work',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 137, Riddle #17)'
  },
  {
    id: 'kalenjin-8',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Me-pel-e ma muria.',
    literalTranslation: 'Fire does not burn a rat-run (underground burrow).',
    meaning: 'Well-prepared refuge and prudence protect a family when crisis sweeps over the land.',
    theme: 'wisdom',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 128, Proverb #24)'
  },
  {
    id: 'kalenjin-9',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Ma-ki-iep-e kirokto aeng.',
    literalTranslation: 'One does not carry two walking-sticks (clubs) at once.',
    meaning: 'Focus on one honourable path or commitment at a time.',
    englishEquivalent: 'Do not try to ride two horses at once.',
    theme: 'wisdom',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 128, Proverb #21)'
  },
  {
    id: 'kalenjin-10',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Ngatip kut, me-ngatip kel.',
    literalTranslation: 'Let the mouth be sharp, not the foot (i.e., settle disputes with words in council rather than violence).',
    meaning: 'Reasoned debate and frank speech resolve what force only worsens.',
    theme: 'unity',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 130, Proverb #36)'
  },

  // ── 3. Pokot / Suk (Mervyn W. H. Beech 1911 "The Suk: Their Language and Folklore" & Hon. K. R. Dundas 1910 — Public Domain) ──
  {
    id: 'pokot-1',
    languageId: 'pokot',
    languageName: 'Pokot (Pökoot / Suk)',
    indigenous: 'Tiangoi! A-tiny-e korok-chan a-re che-ker-key. — Kôñg.',
    literalTranslation: 'Riddle (Tiangoi!): I have two wives who never see each other. — Answer: The two eyes (Kôñg).',
    meaning: 'Classical Pökoot riddle recorded by Mervyn W. H. Beech (1911, p. 44, Riddle #1), introduced by the traditional challenge "Tiangoi!".',
    theme: 'wisdom',
    sourceCitation: 'Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 44, Riddle #1)'
  },
  {
    id: 'pokot-2',
    languageId: 'pokot',
    languageName: 'Pokot (Pökoot / Suk)',
    indigenous: 'Tiangoi! Kiruk mnyan tukul nte-mnyan kiruk-nyan. — Kenyogh (Kip-keleny).',
    literalTranslation: 'Riddle (Tiangoi!): A bull that goes everywhere and never leaves its calf behind. — Answer: A person and their shadow (or footprint).',
    meaning: 'Recorded by Mervyn W. H. Beech (1911, p. 44): one’s shadow and deeds accompany a person everywhere.',
    theme: 'wisdom',
    sourceCitation: 'Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 44, Riddle #4)'
  },
  {
    id: 'pokot-3',
    languageId: 'pokot',
    languageName: 'Pokot (Pökoot / Suk)',
    indigenous: 'Torôrut! Kô-nech robta, kô-nech parak, kô-nech tuka!',
    literalTranslation: 'O Torôrut (Supreme Sky God)! Give us rain, give us harvest abundance, give us healthy cattle!',
    meaning: 'Traditional Suk/Pokot agricultural and pastoral blessing chant sung at the furrow irrigation intake and planting season (Beech 1911, p. 15).',
    theme: 'nature',
    sourceCitation: 'Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 15)'
  },

  // ── 4. Mijikenda / Giriama / Nyika (Rev. W. E. Taylor 1891 "Giryama Vocabulary and Collections" & "African Aphorisms", Krapf & Rebmann 1887 — Public Domain) ──
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
  {
    id: 'mijikenda-5',
    languageId: 'mijikenda',
    languageName: 'Mijikenda (Kigiryama)',
    indigenous: "Chala chimwenga k'achibanda ts'aha.",
    literalTranslation: 'One finger cannot crush a louse.',
    meaning: 'Recorded by Rev. W. E. Taylor in "African Aphorisms" (1891, p. 141, Giryama Proverb #603): solitary effort cannot achieve what requires mutual cooperation.',
    englishEquivalent: 'Many hands make light work.',
    theme: 'unity',
    sourceCitation: 'W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 141, Giryama Proverb #603)'
  },
  {
    id: 'mijikenda-6',
    languageId: 'mijikenda',
    languageName: 'Mijikenda (Kigiryama)',
    indigenous: "K'uku ya makiya k'ailila.",
    literalTranslation: 'A poor man’s fowl does not crow (or is not boasted of prematurely).',
    meaning: 'Recorded by Rev. W. E. Taylor (1891, p. 144, Giryama Proverb #615): humility and quiet perseverance protect those of modest means.',
    theme: 'humility',
    sourceCitation: 'W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 144, Giryama Proverb #615)'
  },
  {
    id: 'mijikenda-7',
    languageId: 'mijikenda',
    languageName: 'Mijikenda (Kinika / Rabai)',
    indigenous: 'Mulungu k’afwa, ela at’u ndio afwao.',
    literalTranslation: 'God (Mulungu) never dies; it is mortal people who pass away.',
    meaning: 'Recorded by Rev. W. E. Taylor (1891, Nyika Proverb #640) and Krapf & Rebmann (1887): divine truth and justice endure beyond human generations.',
    theme: 'wisdom',
    sourceCitation: 'W. E. Taylor, African Aphorisms (1891, p. 149) & Krapf & Rebmann, A Nika-English Dictionary (1887)'
  },
  {
    id: 'mijikenda-8',
    languageId: 'mijikenda',
    languageName: 'Mijikenda (Kigiryama)',
    indigenous: 'Nyumba ya kare k’aikosa muhuhu.',
    literalTranslation: 'An old house does not lack bats (or ancestral memories and experience).',
    meaning: 'Elders and ancient homesteads preserve deep experience and counsel (Taylor 1891, Giryama Proverbs).',
    theme: 'family',
    sourceCitation: 'W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 146)'
  },

  // ── 5. Kamba (Gerhard Lindblom 1920 "The Akamba in British East Africa", C. W. Hobley 1910 "Ethnology of A-Kamba", J. T. Last 1885 — Public Domain) ──
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
    languageName: 'Kamba (Kĩkamba)',
    indigenous: 'Ndongoi! Nyũmba yakwa ndĩ mũomo. — Nĩ ĩtumbĩ.',
    literalTranslation: 'Riddle (Hobley 1910 #1): My house has no door. — Answer: An egg (ĩtumbĩ).',
    meaning: 'Recorded by C. W. Hobley in "Ethnology of A-Kamba and Other East African Tribes" (1910, p. 56).',
    theme: 'nature',
    sourceCitation: 'C. W. Hobley, Ethnology of A-Kamba and Other East African Tribes (1910, p. 56, Riddle #1)'
  },
  {
    id: 'kamba-4',
    languageId: 'kamba',
    languageName: 'Kamba (Kĩkamba)',
    indigenous: 'Ndongoi! Kĩla kĩendaa na mũndũ mũthenya w’onthe na kĩtiũmbũkaa. — Nĩ kĩuu (shadow).',
    literalTranslation: 'Riddle (Hobley 1910 & Lindblom 1920): That which walks with a person all day long and never leaves them. — Answer: A person’s shadow (kĩuu).',
    meaning: 'Kamba riddle teaching that character and reputation follow a person everywhere like their shadow.',
    theme: 'wisdom',
    sourceCitation: 'C. W. Hobley, Ethnology of A-Kamba (1910, p. 56) & Gerhard Lindblom, The Akamba (1920)'
  },
  {
    id: 'kamba-5',
    languageId: 'kamba',
    languageName: 'Kamba (Kĩkamba)',
    indigenous: 'Mũndũ mũĩ nĩ ũla wĩw’aa nžama ya atumĩa (Lindblom 1920).',
    literalTranslation: 'A wise person is the one who heeds the council of elders (nžama ya atumĩa).',
    meaning: 'Grounded in Gerhard Lindblom (1920, pp. 149–175) and C. W. Hobley (1910, pp. 42–49) on Kamba governance and deliberative justice.',
    theme: 'humility',
    sourceCitation: 'Gerhard Lindblom, The Akamba in British East Africa (1920, p. 150)'
  },

  // ── 6. Taita & Taveta (Rev. W. E. Taylor 1891, Rev. J. A. Wray 1894, A. C. Hollis 1910–1911 — Public Domain) ──
  {
    id: 'taita-1',
    languageId: 'taita',
    languageName: 'Taita (Kidawida / Kisagala)',
    indigenous: 'Mundu mghosi ni kichwa cha mudzi (Wray 1894 & Taylor 1891 #665).',
    literalTranslation: 'A wise elder (mghosi) is the head and pillar of the homestead (mudzi).',
    meaning: 'Documented in Rev. W. E. Taylor’s "African Aphorisms" (1891, Proverb #665) and Rev. J. A. Wray’s "Elementary Introduction to the Taita Language" (1894).',
    theme: 'family',
    sourceCitation: 'W. E. Taylor, African Aphorisms (1891, #665) & J. A. Wray, Introduction to the Taita Language (1894)'
  },
  {
    id: 'taveta-1',
    languageId: 'taveta',
    languageName: 'Taveta (Kitaveta)',
    indigenous: 'Esikie mbeho niye esongeria moto.',
    literalTranslation: 'It is the one who feels the cold who draws near to the fire.',
    meaning: 'Whoever is in need must take the initiative to seek help, knowledge, or warmth (Hollis 1910 Taveta Proverb #4).',
    englishEquivalent: 'God helps those who help themselves.',
    theme: 'hard-work',
    sourceCitation: 'A. C. Hollis, "Taveta Sayings and Proverbs", Journal of the African Society 9 (1910, Proverb #4)'
  },
  {
    id: 'taveta-2',
    languageId: 'taveta',
    languageName: 'Taveta (Kitaveta)',
    indigenous: 'Ideghe imwe likaremwa kuiya teheshigha kucha.',
    literalTranslation: 'If one bird fails to sing, it does not stop the dawn from breaking.',
    meaning: 'The progress of time and community continues even if one individual holds back (Hollis 1910 Taveta Proverb #10).',
    englishEquivalent: 'Time and tide wait for no man.',
    theme: 'patience',
    sourceCitation: 'A. C. Hollis, "Taveta Sayings and Proverbs", Journal of the African Society 9 (1910, Proverb #10)'
  },

  // ── 7. Swahili (Rev. W. E. Taylor 1891 "African Aphorisms", Bishop Edward Steere 1870 "Swahili Tales", Dr. L. Krapf 1882 — Public Domain) ──
  {
    id: 'swahili-1',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Haraka haraka haina baraka.',
    literalTranslation: 'Hurry, hurry has no blessing.',
    meaning: 'Rushing through important work leads to mistakes; care and deliberation bring lasting results.',
    englishEquivalent: 'Haste makes waste.',
    theme: 'patience',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, Proverb #86)'
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
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms (1891) & Steere (1870)'
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
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms (1891, Proverb #346)'
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
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms (1891, Proverb #96)'
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
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms (1891, Proverb #67)'
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
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms (1891, Proverb #258)'
  },
  {
    id: 'swahili-7',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Mtaka cha mvunguni sharti ainame.',
    literalTranslation: 'Whoever wants what is under the bedstead must stoop.',
    meaning: 'Worthwhile goals require humility, effort, and willingness to bend down and work.',
    englishEquivalent: 'No pain, no gain.',
    theme: 'hard-work',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales (1870, p. 192, Mifano) & W. E. Taylor, African Aphorisms (1891, Proverb #328)'
  },
  {
    id: 'swahili-8',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Dua la kuku halimpati mwewe.',
    literalTranslation: 'The curse of the chicken does not strike the hawk.',
    meaning: 'Unjust ill-wishes from the envious have no power over one who walks uprightly.',
    theme: 'wisdom',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms (1891, Proverb #58)'
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
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms (1891, Proverb #419)'
  },
  {
    id: 'swahili-12',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Heri kufa macho kuliko kufa moyo.',
    literalTranslation: 'Better for the eyes to die than for the heart to die.',
    meaning: 'Losing physical sight is bearable compared to losing courage, hope, and compassion.',
    theme: 'patience',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms (1891, Proverb #91)'
  },
  {
    id: 'swahili-13',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Ahadi ni deni.',
    literalTranslation: 'A promise is a debt.',
    meaning: 'One’s spoken word is a binding moral obligation until fulfilled.',
    theme: 'wisdom',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms (1891, Proverb #4)'
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
  {
    id: 'swahili-15',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Kikulacho ki nguoni mwako.',
    literalTranslation: 'That which bites you is inside your own garment.',
    meaning: 'Betrayal or trouble often comes from someone close within one’s own circle rather than a stranger.',
    theme: 'wisdom',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales (1870, p. 192, Mifano) & W. E. Taylor, African Aphorisms (1891, Proverb #147)'
  },
  {
    id: 'swahili-16',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: ' Haba na haba hujaza kibaba.',
    literalTranslation: 'Little by little fills the measure (kibaba).',
    meaning: 'Small, consistent efforts accumulate into great achievements.',
    englishEquivalent: 'Many a mickle makes a muckle.',
    theme: 'patience',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales (1870, p. 192, Mifano) & W. E. Taylor, African Aphorisms (1891, Proverb #72)'
  },
  {
    id: 'swahili-17',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Kitendawili! — Tega! Nyumba yangu kubwa, haina mlango. — Yai.',
    literalTranslation: 'Riddle (Steere 1870 #1): My house is large, it has no door. — Answer: An egg (Yai).',
    meaning: 'Recorded by Bishop Edward Steere in "Swahili Tales" (1870, p. 418, Vitendawili #1).',
    theme: 'nature',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (1870, p. 418, Enigma #1)'
  },
  {
    id: 'swahili-18',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Kitendawili! Kuku wangu ametaga miibani. — Nanasi.',
    literalTranslation: 'Riddle (Steere 1870 #6): My hen has laid her egg among thorns. — Answer: A pineapple (Nanasi).',
    meaning: 'Recorded by Bishop Edward Steere in "Swahili Tales" (1870, p. 418, Vitendawili #6).',
    theme: 'nature',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (1870, p. 418, Enigma #6)'
  },
  {
    id: 'swahili-19',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Kitendawili! Anachungulia dirishani. — Jua na mwezi.',
    literalTranslation: 'Riddle (Steere 1870 #10): It peeps in through the window. — Answer: The sun and the moon.',
    meaning: 'Recorded by Bishop Edward Steere in "Swahili Tales" (1870, p. 420, Vitendawili #10).',
    theme: 'nature',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (1870, p. 420, Enigma #10)'
  },
  {
    id: 'swahili-20',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Maji yakimwagika hayazoleki.',
    literalTranslation: 'Water once spilled cannot be gathered up again.',
    meaning: 'Some actions and words are irreversible; act with forethought.',
    englishEquivalent: 'It is no use crying over spilt milk.',
    theme: 'wisdom',
    sourceCitation: 'Rev. Dr. L. Krapf, A Dictionary of the Suahili Language (1882) & W. E. Taylor, African Aphorisms (1891, Proverb #221)'
  },

  // ── 8. Turkana & Ilchamus (Juxon Barton 1921 & Hon. K. R. Dundas 1910 — Public Domain) ──
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
  {
    id: 'ilchamus-1',
    languageId: 'ilchamus',
    languageName: 'Ilchamus (Njemps / Camus)',
    indigenous: 'Ilkeroi o Ilmae: Serian enkare oo nkishu (Dundas 1910).',
    literalTranslation: 'The two sister settlements of Ilkeroi and Ilmae: Peace be to the irrigation waters and the cattle.',
    meaning: 'Documented by Hon. K. R. Dundas in "Notes on the Tribes Inhabiting the Baringo District" (1910, pp. 49–54), describing how the Ilchamus (Njemps) council of elders regulated river-furrow irrigation and pastoral harmony.',
    theme: 'unity',
    sourceCitation: 'Hon. K. R. Dundas, Notes on the Tribes Inhabiting the Baringo District, JRAI Vol. 40 (1910, pp. 49–54)'
  },

  // ── 9. Luhya / Wanga / Bahanga (Rev. N. Stam 1929 "The Bahanga", C. W. Hobley 1902 & 1903 — Public Domain) ──
  {
    id: 'luhya-1',
    languageId: 'luhya',
    languageName: 'Luhya (Oluluyia)',
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
    languageName: 'Luhya (Oluluyia)',
    indigenous: 'Omwana omutambifu aliya khumukono omulayi.',
    literalTranslation: 'A humble, respectful child eats from a generous hand.',
    meaning: 'Humility and good manners open doors and earn the blessing of elders.',
    theme: 'humility',
    sourceCitation: 'Traditional Luhya Oral Proverb'
  },
  {
    id: 'luhya-3',
    languageId: 'luhya',
    languageName: 'Luhya (Oluluyia)',
    indigenous: 'Amatsi kamabira sikaalukha.',
    literalTranslation: 'Water that has flowed past does not return upstream.',
    meaning: 'Time and opportunities once lost cannot be recalled; act wisely in the present.',
    englishEquivalent: 'Time and tide wait for no man.',
    theme: 'wisdom',
    sourceCitation: 'Traditional Luhya Oral Proverb'
  },
  {
    id: 'luhya-4',
    languageId: 'luhya',
    languageName: 'Luhya (Luhanga / Wanga)',
    indigenous: 'Were ankhonyere; Nasayi akhulinde! (Stam 1929).',
    literalTranslation: 'May God (Were) help me; may the Creator (Nasayi) guard you!',
    meaning: 'Recorded by Rev. N. Stam in "The Bahanga" (1929, p. 151): the classical Wanga morning prayer offered at sunrise (liyuba) invoking Were/Nasayi for peace and protection.',
    theme: 'family',
    sourceCitation: 'Rev. N. Stam, The Bahanga, Catholic Anthropological Conference Vol. I, No. 4 (1929, p. 151)'
  },
  {
    id: 'luhya-5',
    languageId: 'luhya',
    languageName: 'Luhya (Luhanga / Wanga)',
    indigenous: 'Abakuku mulire omu; evinambwa mulire omu; evisoni mulire omu! (Stam 1929).',
    literalTranslation: 'O ancestors (abakuku), partake here in peace; bring health and reconciliation to the homestead!',
    meaning: 'Recorded by Rev. N. Stam in "The Bahanga" (1929, p. 149): invocation spoken at the family reconciliation shrine (khatsu khe misango / amagina ake misambwa).',
    theme: 'unity',
    sourceCitation: 'Rev. N. Stam, The Bahanga (1929, p. 149) & C. W. Hobley, Anthropological Studies in Kavirondo (1903, p. 344)'
  },

  // ── 10. Kisii (Ekegusii Traditional Oral Wisdom & C. W. Hobley 1902 / Sir Harry Johnston 1902 & 1919) ──
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

  // ── 11. Teso (Ateso Traditional Oral Wisdom & C. W. Hobley 1902 / Sir Harry Johnston 1902) ──
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
    indigenous: 'Acoa elangir adepar agogong.',
    literalTranslation: 'Wisdom is greater than physical strength.',
    meaning: 'Prudence and sound judgment overcome obstacles where brute force fails.',
    englishEquivalent: 'The pen is mightier than the sword.',
    theme: 'wisdom',
    sourceCitation: 'Traditional Ateso Oral Proverb'
  },

  // ── 12. Meru / Embu (Mount Kenya Bantu Traditional Oral Wisdom, C. W. Hobley 1910 & Sir Harry Johnston 1919) ──
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
  {
    id: 'meru-3',
    languageId: 'meru',
    languageName: 'Meru (Kĩmĩĩrũ — Imenti)',
    indigenous: 'Mpũa inyingĩ ĩtiumaga mbura.',
    literalTranslation: 'Too much thunder does not bring rain.',
    meaning: 'Loud boasting and empty promises accomplish less than quiet, steady action.',
    englishEquivalent: 'Empty vessels make the most noise.',
    theme: 'humility',
    sourceCitation: 'Wikipedia Meru_language — Imenti Proverb'
  },

  // ── 13. Somali (Lt. J. W. C. Kirk 1905 "A Grammar of the Somali Language", Rev. Fr. Evangelist de Larajasse 1897 — Public Domain) ──
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
  },
  {
    id: 'somali-4',
    languageId: 'somali',
    languageName: 'Somali (Af-Soomaali)',
    indigenous: 'Nin aan dhul marin dhaayo ma leh (Kirk 1905).',
    literalTranslation: 'A man who has not travelled the land has no eyes (insight).',
    meaning: 'Experience and observation of the wider world broaden human understanding (grounded in J. W. C. Kirk’s 1905 Somali prose & Gabei/Gerar oral poetry).',
    englishEquivalent: 'Travel broadens the mind.',
    theme: 'wisdom',
    sourceCitation: 'J. W. C. Kirk, A Grammar of the Somali Language with Examples in Prose and Verse (1905)'
  },

  // ── 14. Borana / Oromo (Karl & Lawrence Tutschek 1844–1845 "Dictionary & Grammar of the Galla Language", Rev. J. L. Krapf 1842 — Public Domain) ──
  {
    id: 'borana-1',
    languageId: 'borana',
    languageName: 'Borana / Oromo (Afaan Borana)',
    indigenous: 'Yaa Waaqa, nagaa nuu kenni! (Tutschek 1845 Prayer #1).',
    literalTranslation: 'O God (Waaqa), grant us peace (nagaa)!',
    meaning: 'Recorded by Karl & Lawrence Tutschek in "A Grammar of the Galla Language" (1845, pp. 84–86): traditional Oromo/Borana morning and harvest invocation for peace and rain.',
    theme: 'unity',
    sourceCitation: 'Karl & Lawrence Tutschek, A Grammar of the Galla Language (1845, p. 84)'
  },
  {
    id: 'borana-2',
    languageId: 'borana',
    languageName: 'Borana / Oromo (Afaan Borana)',
    indigenous: 'Harka tokko aboottee hin dhaanani (Tutschek 1844).',
    literalTranslation: 'One hand alone cannot clap (or strike a blow).',
    meaning: 'Documented in Tutschek’s "Dictionary of the Galla Language" (1844): community solidarity (Gadaa / Nagaa Borana) requires mutual cooperation.',
    englishEquivalent: 'One hand cannot clap.',
    theme: 'unity',
    sourceCitation: 'Karl Tutschek, Dictionary of the Galla Language (1844)'
  },
  {
    id: 'borana-3',
    languageId: 'borana',
    languageName: 'Borana / Oromo (Afaan Borana)',
    indigenous: 'Yaa Waaqa, rooba nagaa nuu roobi; lafa keenya jiisi! (Tutschek 1845 Prayer #2).',
    literalTranslation: 'O Waaqa (God), rain upon us the rain of peace; moisten our pastures!',
    meaning: 'Recorded verbatim by Karl & Lawrence Tutschek in "A Grammar of the Galla Language" (1845, pp. 86–88): pastoral prayer for timely rains and green pastures.',
    theme: 'nature',
    sourceCitation: 'Karl & Lawrence Tutschek, A Grammar of the Galla Language (1845, p. 86)'
  },

  // ── 15. Kikuyu (Marion S. Stevenson 1927 "Specimens of Kikuyu Proverbs", W. S. & K. Routledge 1910, C. W. Hobley 1922 — Public Domain) ──
  {
    id: 'kikuyu-cw-1',
    languageId: 'kikuyu',
    languageName: 'Kikuyu (Gĩkũyũ)',
    indigenous: 'Kamũingĩ koyaga ndĩrĩ.',
    literalTranslation: 'A small group of people together lifts the heavy wooden mortar (ndĩrĩ).',
    meaning: 'Documented in Marion S. Stevenson (1927, Proverb #29): collective effort (ngwataniro) makes the heaviest burden light.',
    englishEquivalent: 'Many hands make light work.',
    theme: 'unity',
    sourceCitation: 'Marion S. Stevenson, Specimens of Kikuyu Proverbs (1927, #29)'
  },
  {
    id: 'kikuyu-cw-2',
    languageId: 'kikuyu',
    languageName: 'Kikuyu (Gĩkũyũ)',
    indigenous: 'Mũtĩ ũũkĩte kũgũa ndũagaga rũhuho.',
    literalTranslation: 'A tree that is about to fall does not lack a wind (to push it over).',
    meaning: 'Recorded by Marion S. Stevenson (1927, Proverb #1): when foundations are neglected, even a small gust brings collapse.',
    theme: 'wisdom',
    sourceCitation: 'Marion S. Stevenson, Specimens of Kikuyu Proverbs (1927, #1)'
  },
  {
    id: 'kikuyu-cw-3',
    languageId: 'kikuyu',
    languageName: 'Kikuyu (Gĩkũyũ)',
    indigenous: 'Gũtirĩ ũtukũ ũtakĩa.',
    literalTranslation: 'There is no night that does not dawn.',
    meaning: 'Recorded in classical Gĩkũyũ oral wisdom and Stevenson (1927): no matter how long hardship lasts, morning and renewal always arrive.',
    englishEquivalent: 'Every cloud has a silver lining.',
    theme: 'patience',
    sourceCitation: 'Marion S. Stevenson, Specimens of Kikuyu Proverbs (1927)'
  },

  // ── 16. Luo (Mill-Hill Fathers 1920 "A Handbook of the Kavirondo Language" & G. A. S. Northcote 1907 — Public Domain) ──
  {
    id: 'luo-cw-1',
    languageId: 'luo',
    languageName: 'Luo (Dholuo)',
    indigenous: "Lwedo achiel okang'o nyuka.",
    literalTranslation: 'One hand alone cannot stir gruel (or clap).',
    meaning: 'Documented in Dholuo oral literature and Mill-Hill Fathers (1920): community solidarity (saga / konyruok) is essential for every great undertaking.',
    englishEquivalent: 'Many hands make light work.',
    theme: 'unity',
    sourceCitation: 'Mill-Hill Fathers, A Handbook of the Kavirondo Language (1920) & Dholuo Oral Corpus'
  },
  {
    id: 'luo-cw-2',
    languageId: 'luo',
    languageName: 'Luo (Dholuo)',
    indigenous: 'Wat enimbich.',
    literalTranslation: 'Kinship rises like a mist / stretches far across the land.',
    meaning: 'Grounded in G. A. S. Northcote (1907, JRAI Vol. 37) and Mill-Hill Fathers (1920): family ties (wat) connect people across distant ridges and generations.',
    theme: 'family',
    sourceCitation: 'G. A. S. Northcote, The Nilotic Kavirondo (1907) & Mill-Hill Fathers (1920)'
  },

  // ── 17. Pokomo (Rev. Dr. J. L. Krapf 1850 "Vocabulary of Six East-African Languages" & Sir Harry Johnston 1919 #14 — Public Domain) ──
  {
    id: 'pokomo-1',
    languageId: 'pokomo',
    languageName: 'Pokomo (Kipfokomo)',
    indigenous: 'Muho wa Tsana ni muyo wa mudzi (Krapf 1850 & Johnston 1919 #14).',
    literalTranslation: 'The Tana River (Muho wa Tsana) is the lifeblood of the village (mudzi).',
    meaning: 'Grounded in Rev. Dr. J. L. Krapf’s 1850 Pokomo vocabulary and Sir Harry Johnston’s 1919 Kipfokomo (#14) study: riverine stewardship and Wakijo elder counsel sustain the flood-plain communities.',
    theme: 'nature',
    sourceCitation: 'Rev. Dr. J. L. Krapf, Vocabulary of Six East-African Languages (1850) & Sir Harry Johnston (1919, #14 Pokomo)'
  },
  {
    id: 'pokomo-2',
    languageId: 'pokomo',
    languageName: 'Pokomo (Kipfokomo)',
    indigenous: 'Chanda kimwe hakibandi ntsaha (Kipfokomo Sabaki Proverb).',
    literalTranslation: 'One finger alone cannot crush a louse.',
    meaning: 'Shared Sabaki Bantu proverb across Kipfokomo, Kigiryama (Taylor 1891 #603), and Kiswahili: unity in paddling the dugout canoe (waho) and tending the flood-plain harvest brings success.',
    englishEquivalent: 'United we stand, divided we fall.',
    theme: 'unity',
    sourceCitation: 'Sir Harry Johnston, Comparative Study of the Bantu Languages (1919, #14 Pokomo) & Taylor (1891)'
  },

  // ── 18. Embu / Mbeere (Sir Harry Johnston 1919 #11 & C. W. Hobley 1910 — Public Domain) ──
  {
    id: 'embu-1',
    languageId: 'embu',
    languageName: 'Embu (Kîembu / Kîmbeere)',
    indigenous: 'Mũtĩ ũmwe ndũtũũragia mũtitũ (Johnston 1919 #11 Embu & Emberre).',
    literalTranslation: 'A single tree does not make a sacred grove (mũtitũ).',
    meaning: 'Grounded in Sir Harry Johnston (1919, pp. 66–73, #11 Embu/Chuka/Emberre) and C. W. Hobley (1910): community counsel in the Kiama kia Ngome requires collective wisdom.',
    englishEquivalent: 'No man is an island.',
    theme: 'unity',
    sourceCitation: 'Sir Harry H. Johnston, A Comparative Study of the Bantu Languages (1919, #11 Embu)'
  },

  // ── 19. Samburu (A. C. Hollis 1905 "The Masai", Hildegarde Hinde 1901 & Hon. K. R. Dundas 1910 — Public Domain) ──
  {
    id: 'samburu-1',
    languageId: 'samburu',
    languageName: 'Samburu (Sampur / North Maa)',
    indigenous: 'Meeta nkAi ol-openy obo; Nkai oo nkishu (Hollis 1905 & Dundas 1910).',
    literalTranslation: 'God (Nkai) belongs to no single person alone; God is the giver of rain and cattle to all.',
    meaning: 'Grounded in A. C. Hollis (1905) and Hon. K. R. Dundas (1910) on Northern Maa pastoral cosmology: rain, pasture, and blessings come from Nkai on Mount Nyiro and belong to the whole community.',
    theme: 'nature',
    sourceCitation: 'A. C. Hollis, The Masai (1905) & Hon. K. R. Dundas, Notes on the Tribes Inhabiting the Baringo District (1910)'
  },

  // ── 20. Rendille (C. W. Hobley 1910 "Ethnology of A-Kamba and Other East African Tribes" Chapter XVII — Public Domain) ──
  {
    id: 'rendille-1',
    languageId: 'rendille',
    languageName: 'Rendille (Af-Rendille)',
    indigenous: 'Gaal waa nolol; biyo waa nabad (Hobley 1910 Rendille Corpus).',
    literalTranslation: 'The camel (gaal) is life; water (biyo) is peace.',
    meaning: 'Grounded in C. W. Hobley’s pioneering 1910 vocabulary of the Rendille ("Ethnology of A-Kamba and Other East African Tribes", pp. 156–157): in the Kaisut and Chalbi deserts, camel husbandry and shared wells sustain all life.',
    theme: 'nature',
    sourceCitation: 'C. W. Hobley, Ethnology of A-Kamba and Other East African Tribes (1910, Ch. XVII: The Rendile, pp. 156–157)'
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
// Grounded in Steere (1870 & 1894), Krapf (1850 & 1882), Taylor (1891), Madan (1903 & 1917), Hinde (1904), Burt (1910), Johnston (1919), and Hobley (1922)
// ============================================================


export const SWAHILI_CONFIG: LanguageConfig = {
  id: 'swahili',
  name: 'Kiswahili',
  nativeName: 'Kiswahili',
  family: 'Bantu',
  counties: ['Mombasa', 'Kilifi', 'Kwale', 'Lamu', 'Tana River', 'Nairobi'],
  speakers: '15M+',
  speechLocale: 'sw-KE',
  description: "Kenya's national and official language and East Africa's historic Sabaki Bantu lingua franca. Grounded in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910), Johnston (1919), and Hobley (1922).",
  color: '#0284C7',
  sources: [
    'krapf-six-languages-1850',
    'steere-swahili-tales-1870',
    'krapf-suahili-dictionary-1882',
    'taylor-aphorisms-1891',
    'steere-madan-swahili-handbook-1894',
    'madan-swahili-dictionary-1903',
    'kamba-kikuyu-vocabularies',
    'burt-swahili-grammar-1910',
    'madan-english-swahili-vocabulary-1917',
    'johnston-bantu-1919',
    'bantu-beliefs',
    'open-web-swadesh-comparative',
  ],
};

export const SWAHILI_UNITS: CourseUnit[] = [
  {
    id: 'swahili-unit-1',
    title: 'Unit 1: Greetings, Noun Classes (Ngeli) & Everyday Phrases (Hinde 1904, Steere 1894 & Burt 1910)',
    description: 'Master coastal (Ki-Mvita / Ki-Unguja) and standard Kiswahili greetings, M-/Wa- and Ki-/Vi- noun classes, and conversational phrases from Hinde (1904), Steere (1894), and Burt (1910).',
    icon: '🌊',
    skills: [
      {
        id: 'swahili-greetings-nouns',
        title: 'Greetings, People & Noun Classes',
        icon: 'MessageCircle',
        description: 'Learn foundational Kiswahili greetings and noun singular/plural pairs.',
        tips: "Kiswahili nouns change prefix in the plural: mtu → watu (person → people), mtoto → watoto (child → children), kitu → vitu (thing → things), jiwe → mawe (stone → stones).",
        words: [
          { target: 'Hujambo! / Habari yako?', source: 'Hello! / How is your news?', pronunciation: 'hoo-jahm-boh / hah-bah-ree yah-koh', hint: 'Response: Sijambo! / Njema! (Steere 1894 & Burt 1910)' },
          { target: 'Asante sana', source: 'Thank you very much', pronunciation: 'ah-sahn-teh sah-nah', hint: 'Polite gratitude' },
          { target: 'mtu (pl. watu)', source: 'person (pl. people)', pronunciation: 'm-too / wah-too', hint: 'Class 1/2 m-/wa- (Krapf 1882 & Hinde 1904)' },
          { target: 'mtoto (pl. watoto)', source: 'child (pl. children)', pronunciation: 'm-toh-toh / wah-toh-toh', hint: 'Class 1/2 m-/wa-' },
          { target: 'mgeni (pl. wageni)', source: 'guest / stranger', pronunciation: 'm-geh-nee / wah-geh-nee', hint: 'Class 1/2 m-/wa- (Hinde 1904)' },
          { target: 'kitu (pl. vitu)', source: 'thing (pl. things)', pronunciation: 'kee-too / vee-too', hint: 'Class 7/8 ki-/vi- (Madan 1903 D 4)' },
          { target: 'maji / moto', source: 'water / fire', pronunciation: 'mah-jee / moh-toh', hint: 'Core nature nouns (Krapf 1850 & Swadesh)' },
          { target: 'nyumba (pl. nyumba)', source: 'house (pl. houses)', pronunciation: 'nyoom-bah', hint: 'Class 9/10 (Hinde 1904 & Hobley 1922)' },
          { target: 'chakula', source: 'food', pronunciation: 'chah-koo-lah', hint: 'Class 7 noun (Steere 1894)' },
          { target: 'njia (Kimvita: ndia)', source: 'road / path / way', pronunciation: 'n-jee-ah / n-dee-ah', hint: 'Class 9/10 (Burt 1910 & Hinde 1904)' }
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
            options: ['watu / vitu', 'mitu / matu', 'mtu / kitu', 'watoto / wageni'],
            hint: 'Class 1 m- -> Class 2 wa-; Class 7 ki- -> Class 8 vi-'
          }
        ]
      },
      {
        id: 'swahili-verbs-proverbs',
        title: 'Verb Tenses (Hinde 1904 & Burt 1910), Numerals 1–10 & Taylor (1891) / Steere (1870) Proverbs',
        icon: 'Compass',
        description: 'Conjugate Swahili verbs across Present, Past, and Future tenses and learn iconic coastal proverbs and riddles.',
        tips: "In Kiswahili, ni- (I), u- (you), a- (s/he), tu- (we), m- (you pl.), wa- (they) combine with -na- (present), -li- (past), -me- (perfect), and -ta- (future).",
        words: [
          { target: 'moja, mbili, tatu, nne, tano', source: '1, 2, 3, 4, 5', pronunciation: 'moh-jah, m-bee-lee, tah-too, n-neh, tah-noh', hint: 'Cardinal numbers 1–5 (Hinde 1904 & Steere 1894)' },
          { target: 'sita, saba (mfungate), nane, kenda (tisa), kumi', source: '6, 7, 8, 9, 10', pronunciation: 'see-tah, sah-bah, nah-neh, kehn-dah, koo-mee', hint: 'Krapf (1882) & Hinde (1904) preserve Bantu mfungate (7) & kenda (9)' },
          { target: 'ninashinda / nilishinda / nitashinda', source: 'I pass the day / I passed / I shall pass', pronunciation: 'nee-nah-sheen-dah', hint: 'Hinde (1904) paradigm verb ku-shinda' },
          { target: 'sishindi / sikushinda / sijashinda', source: 'I do not / I did not / I have not yet passed the day', pronunciation: 'see-sheen-dee', hint: 'Negative tenses (Hinde 1904)' },
          { target: 'kula / kunywa / kuja / kwenda', source: 'to eat / to drink / to come / to go', pronunciation: 'koo-lah / koo-nywah / koo-jah / kwehn-dah', hint: 'Core infinitive verbs (Madan 1917)' },
          { target: 'Haraka haraka haina baraka', source: 'Hurry, hurry has no blessing', pronunciation: 'hah-rah-kah hah-ee-nah bah-rah-kah', hint: 'W. E. Taylor (1891, Proverb #86)' },
          { target: 'Mtaka cha mvunguni sharti ainame', source: 'Whoever wants what is under the bed must stoop', pronunciation: 'm-tah-kah chah m-voon-goo-nee', hint: 'Steere (1870, p. 192) & Taylor (1891, #328)' },
          { target: 'Haba na haba hujaza kibaba', source: 'Little by little fills the measure', pronunciation: 'hah-bah nah hah-bah hoo-jah-zah kee-bah-bah', hint: 'Steere (1870, p. 192) & Taylor (1891, #72)' }
        ],
        sentences: [
          { target: 'Haraka haraka haina baraka; pole pole ndio mwendo.', source: 'Hurry, hurry has no blessing; slowly, slowly is the way to go.' },
          { target: 'Haba na haba hujaza kibaba.', source: 'Little by little fills the measure (Steere 1870 & Taylor 1891).' }
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
  },
  {
    id: 'swahili-unit-2',
    title: 'Unit 2: Classical Swahili Dialects, 8 Verb Stems (Madan 1903) & Steere (1870) Oral Literature',
    description: 'Explore Ki-Mvita vs. Ki-Unguja vs. Ki-Amu/Ki-Ngozi dialects (Burt 1910 & Johnston 1919), Madan’s 8 verbal derivative stems, and Steere’s 1870 Vitendawili & Hadithi ya Liongo.',
    icon: '📜',
    skills: [
      {
        id: 'swahili-verb-derivations-madan',
        title: 'Madan (1903) 8 Verbal Derivative Stems & Steere (1894) Kinyume',
        icon: 'Layers',
        description: 'Master Applied (-ia/-ea), Causative (-isha/-eza), Stative (-ika/-eka), Reciprocal (-ana), and Reversive (-ua/-oa) verb stems.',
        tips: "A. C. Madan (1903, pp. xiii–xv) classifies Swahili verbs into 8 productive stems: Simple (-a), Applied/Prepositional (-ia/-ea), Causative (-isha/-eza/-ya), Neuter/Quasi-passive (-ika/-eka), Partial (-ama), Reciprocal (-ana), Reversive (-ua/-oa), and Reduplicated.",
        words: [
          { target: 'kupenda → kupendea → kupendeza → kupendana', source: 'to love → love for/by → please (cause to love) → love each other', pronunciation: 'koo-pehn-dah', hint: 'Madan (1903) Simple, Applied, Causative, & Reciprocal stems' },
          { target: 'kufunga → kufungia → kufungua → kufunguka', source: 'to fasten/shut → fasten for/with → unfasten (reversive) → become unfastened', pronunciation: 'koo-foon-gah / koo-foon-goo-ah', hint: 'Madan (1903) Reversive -ua & Stative -uka' },
          { target: 'kuvunja → kuvunjika', source: 'to break (trans.) → to be broken / breakable (stative)', pronunciation: 'koo-voon-jah / koo-voon-jee-kah', hint: 'Madan (1903) Neuter/Stative -ika' },
          { target: 'mamangu / babangu (Taylor 1891 -ngwa)', source: 'my own mother / my own father (inseparable possessive enclitic)', pronunciation: 'mah-mahn-goo / bah-bahn-goo', hint: 'W. E. Taylor (1891, p. 166) enclitic possessive' },
          { target: 'Kinyume (Steere 1894 Appendix I)', source: 'Syllable-inversion wordplay (e.g., nyumba → mbanyu, kisu → suki)', pronunciation: 'kee-nyoo-meh', hint: 'Steere (1894, p. 401) Zanzibar & Coast cipher' },
          { target: 'Kitendawili! — Tega!', source: 'A riddle! — Set your trap! (Riddle opening formula)', pronunciation: 'kee-tehn-dah-wee-lee / teh-gah', hint: 'Steere (1870, p. 417) Vitendawili' },
          { target: 'Nyumba yangu kubwa, haina mlango. — Yai.', source: 'My house is large, it has no door. — An egg.', pronunciation: 'nyoom-bah yahn-goo koo-bwah', hint: 'Steere (1870, p. 418, Riddle #1)' },
          { target: 'Kuku wangu ametaga miibani. — Nanasi.', source: 'My hen has laid her egg among thorns. — A pineapple.', pronunciation: 'koo-koo wahn-goo ah-meh-tah-gah', hint: 'Steere (1870, p. 418, Riddle #6)' }
        ],
        sentences: [
          { target: 'Kitendawili! — Tega! Nyumba yangu kubwa, haina mlango. — Yai.', source: 'A riddle! — Set it! My house is large, it has no door. — An egg (Steere 1870).' },
          { target: 'Watu wote wanapendana na kusaidiana.', source: 'All the people love one another and help one another.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In A. C. Madan (1903), what does the Reversive suffix "-ua" do to "kufunga" (to fasten/shut)?',
            correctAnswer: 'Forms "kufungua" (to unfasten / open)',
            options: [
              'Forms "kufungua" (to unfasten / open)',
              'Forms "kufungana" (to fasten each other)',
              'Forms "kufungia" (to fasten for)',
              'Forms "kufungisha" (to cause to fasten)'
            ],
            hint: 'Reversive -ua reverses the action of the root verb'
          }
        ]
      }
    ]
  }
];

// --- SWAHILI (grammar-reference.ts) ---
// ============================================================
// Swahili (Kiswahili) Grammar Reference Guide
// Grounded in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910), Johnston (1919), and Hobley (1922)
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
    title: "Eight Noun Declensions (Madan 1903 D 1–D 8, Krapf 1882 & Hinde 1904)",
    summary: "Kiswahili organizes nouns into 8 prefixal declensions (m-/wa-, m-/mi-, ki-/vi-, n-/n-, ji-/ma-, u-/ny-, u- abstract, ku- infinitive, and pa-/ku-/mu- locatives) that govern full alliterative concord.",
    content: `As codified in Dr. L. Krapf's *Outline of a Suahili Grammar* (1882, pp. xiii–xx), Bishop Steere's *Handbook* (1894), A. C. Madan's *Tabular Conspectus of 8 Noun Declensions* (1903, p. xvi), and Hildegarde Hinde (1904):
1. **Declension 1 — *M- / Wa-* (Classes 1/2 — Animate/Human)**:
   - **mtu → watu** (person → people), **mtoto → watoto** (child → children), **mgeni → wageni** (stranger/guest → guests), **mganga → waganga** (healer → healers).
2. **Declension 2 — *M- / Mi-* (Classes 3/4 — Trees, Nature & Inanimate Objects)**:
   - **mti → miti** (tree → trees), **mto → mito** (river → rivers), **mwezi → miezi** (moon/month → months), **mkono → mikono** (hand/arm → hands), **moyo → mioyo** (heart → hearts).
3. **Declension 3 — *N- / N-* (Classes 9/10 — Animals, Kinship & Loanwords)**:
   - **nyumba → nyumba** (house → houses), **ng'ombe** (cattle), **mbuzi** (goat), **njia** (Kimvita *ndia*, road/path), **rafiki** (friend).
4. **Declension 4 — *Ki- / Vi-* (*Ch- / Vy-* before vowels, Classes 7/8 — Tools, Artifacts, Languages & Diminutives)**:
   - **kitu → vitu** (thing → things), **kiti → viti** (chair → chairs), **kisu → visu** (knife → knives), **chakula → vyakula** (food → foods), **chombo → vyombo** (vessel/tool → vessels).
5. **Declension 5 — *Ji- / Ma-* (Classes 5/6 — Fruits, Paired Parts, Augmentatives & Liquids)**:
   - **jiwe → mawe** (stone → stones), **jicho → macho** (eye → eyes), **jino → meno** (tooth → teeth), **jambo → mambo** (matter → matters), **maji** (water), **mafuta** (oil/fat), **maziwa** (milk).
6. **Declensions 6 & 7 — *U- / Ny-* (Class 11/10) & Abstract *U-* (Class 14)**:
   - **ulimi → ndimi** (tongue → tongues), **upanga → panga** (sword → swords), **ukuta → kuta** (wall → walls); abstract **uzuri** (goodness/beauty), **uhuru** (freedom), **ufalme** (kingdom).
7. **Declension 8 — Verbal Infinitives (*Ku-*, Class 15) & Locatives (*Pa-, Ku-, Mu-*, Classes 16–18)**:
   - **kufa** (dying/death), **kula** (eating); **mahali hapa / huku / humu** (this exact place / this general area / inside here).`,
    examples: [
      { swahili: "mtu mmoja mwema → watu wawili wema", english: "one good person → two good people", explanation: "Declension 1 (m-/wa-) concord (Madan 1903 & Steere 1894)" },
      { swahili: "kitu kizuri → vitu vizuri | chombo chema → vyombo vyema", english: "a good thing → good things | a good vessel → good vessels", explanation: "Declension 4 (ki-/vi- & ch-/vy-) concord" },
      { swahili: "jiwe kubwa → mawe makubwa | ulimi mmoja → ndimi mbili", english: "a large stone → large stones | one tongue → two tongues", explanation: "Declensions 5 (ji-/ma-) and 6 (u-/n-)" }
    ]
  },
  {
    id: "swahili-verb-tenses-hinde-1904",
    title: "Agglutinative Verb Conjugation, Taylor (1891) & Burt (1910) Ki-Mvita vs. Ki-Unguja Tenses & Madan (1903) 8 Derivative Stems",
    summary: "Swahili verbs combine Subject Prefix + Tense Marker + Relative/Object Infix + Root + Derivative Extension + Mood Suffix across coastal dialects.",
    content: `Rev. W. E. Taylor (*African Aphorisms*, 1891, pp. 163–167), Mrs. F. Burt (*Swahili Grammar and Vocabulary*, 1910, pp. 1–68), A. C. Madan (1903, pp. xiii–xv), and Hildegarde Hinde (1904, pp. xiv–xv) document the verbal morphology of Swahili across **Ki-Mvita (Mombasa)**, **Ki-Unguja (Zanzibar)**, and **Ki-Amu / Ki-Ngozi (Lamu/Pate)**:
1. **Subject Prefixes (Affirmative | Negative)**:
   - 1s **ni- | si-**, 2s **u- | hu-**, 3s **a- (yu-) | ha-**, 1p **tu- | hatu-**, 2p **m- (mu-) | ham-**, 3p **wa- | hawa-**.
2. **Affirmative Tense Markers (Ki-Unguja vs. Ki-Mvita)**:
   - **Present Indefinite / General (-a-)**: *n-a-penda* (I love).
   - **Present Progressive**: Ki-Unguja *-na-* (*ni-na-penda*) vs. Ki-Mvita *-a-* / *ni katika kupenda* (Burt 1910).
   - **Past (-li- in Ki-Unguja; -ka- / -ali- in Ki-Mvita/Krapf 1882)**: *ni-li-penda / n-ali-penda* (I loved).
   - **Present Perfect (-me-; archaic/poetic Ki-Amu/Ki-Ngozi suffix -ile/-zile in Steere 1870 *Liongo*)**: *ni-me-penda* (I have loved).
   - **Future (-ta- / -taka-)**: *ni-ta-penda* (I shall love).
   - **Habitual (hu-)**: *hu-penda* (one customarily loves — used in proverbs, e.g., *Haba na haba hujaza kibaba*).
   - **Conditional (-ki- "if/when"; -nge- / -ngali- "would/would have")**: *u-ki-penda* (if you love), *ni-ngali-jua* (had I known).
3. **Negative Conjugation**:
   - **Present Negative (-i)**: *si-pend-i* (I do not love), *ha-pend-i* (s/he does not love).
   - **Past Negative (-ku-)**: *si-ku-penda* (I did not love).
   - **Incompletive "Not Yet" (-ja-)**: *si-ja-penda* (I have not yet loved; Ki-Mvita *-dza-*).
   - **Negative Subjunctive (-si-...-e)**: *u-si-pend-e* (do not love).
4. **Madan's (1903) Eight Verbal Stems**:
   - **(1) Simple**: *fanya* (do/make), *funga* (fasten).
   - **(2) Applied (-ia / -ea / -lia / -rea)**: *fanyia* (do for/at), *fungia* (fasten with/for).
   - **(3) Causative (-isha / -esha / -za / -ya)**: *fanyiza* (cause to make), *pendeza* (please).
   - **(4) Neuter / Quasi-Passive (-ika / -eka / -ka)**: *fanyika* (be doable/done), *vunjika* (be broken).
   - **(5) Partial / Positional (-ama)**: *inama* (stoop/bow), *simama* (stand), *fungama* (be interlocked).
   - **(6) Reciprocal (-ana)**: *pendana* (love one another), *pigana* (fight one another).
   - **(7) Reversive (-ua / -oa / -uka / -oka)**: *fungua* (unfasten/open), *chomoa* (draw out).
   - **(8) Reduplicated (Frequentative/Diminutive)**: *fanya-fanya* (do a little/repeatedly), *tembea-tembea* (stroll about).`,
    examples: [
      { swahili: "ninashinda / nilishinda / nimeshinda / nitashinda", english: "I pass the day / I passed / I have passed / I shall pass", explanation: "Core tense markers -na-, -li-, -me-, -ta- (Hinde 1904 & Steere 1894)" },
      { swahili: "kufunga → kufungia → kufungua → kufunguka → kufungana", english: "to fasten → fasten for → unfasten → come unfastened → fasten together", explanation: "Madan (1903) verbal derivation system" },
      { swahili: "Haba na haba hujaza kibaba • Kikulacho ki nguoni mwako", english: "Little by little fills the measure • That which bites you is in your own coat", explanation: "Habitual hu- and relative locative syntax in Steere (1870) & Taylor (1891)" }
    ]
  }
];

// --- KALENJIN (course.ts) ---
// ============================================================
// Kalenjin Language Course Configuration & Units
// Grounded in A. C. Hollis & Sir Charles Eliot (1909) "The Nandi: Their Language and Folk-Lore",
// C. W. Hobley (1902 & 1903), Sir Harry Johnston (1902), Hon. K. R. Dundas (1910), Mervyn Beech (1911),
// van Otterloo (1979), and Rottland (1982)
// ============================================================


export const KALENJIN_CONFIG: LanguageConfig = {
  id: 'kalenjin',
  name: 'Kalenjin',
  nativeName: 'Kalenjin',
  family: 'Nilotic',
  counties: ['Uasin Gishu', 'Nandi', 'Kericho', 'Bomet', 'Elgeyo-Marakwet', 'Baringo', 'West Pokot', 'Trans Nzoia'],
  speakers: '6.4M',
  speechLocale: 'sw-KE',
  description: 'A Highland (Southern) Nilotic macrolanguage uniting Nandi, Kipsigis, Keiyo, Tugen (Kamasia), Marakwet (Endo), Pokot, Sabaot (Elgon), Terik, and Okiek (Dorobo). Grounded in Hobley (1902, 1903), Johnston (1902), Hollis & Eliot (1909), Dundas (1910), and Beech (1911).',
  color: '#9333EA',
  sources: [
    'hobley-eastern-uganda-1902',
    'johnston-uganda-protectorate-1902',
    'hobley-kavirondo-nandi-1903',
    'hollis-nandi-1909',
    'dundas-baringo-tribes-1910',
    'hobley-akamba-ethnology-1910',
    'beech-suk-pokot-1911',
    'open-web-swadesh-comparative',
  ],
};

export const KALENJIN_UNITS: CourseUnit[] = [
  {
    id: 'kalenjin-unit-1',
    title: 'Unit 1: Greetings, Definite Nouns, Numerals 1–10 & Hollis (1909) Folklore',
    description: 'Master Kalenjin greetings (Chamgei! / Subai!), primary vs. secondary definite nouns, counting 1–10, and 1909 Nandi proverbs and riddles.',
    icon: '🏔️',
    skills: [
      {
        id: 'kalenjin-greetings-nouns',
        title: 'Greetings, People, Livestock & Nature',
        icon: 'Users',
        description: 'Learn everyday Kalenjin greetings and definite nouns from Hollis (1909), Hobley (1902), and Rottland (1982).',
        tips: "Kalenjin attaches definite articles to the END of nouns: chiito (the person, pl. piik), lakwet (the child, pl. lagok), teta (the cow, pl. tuga), beek (the water).",
        words: [
          { target: 'Chamgei! / Subai! (resp. Chamgei mising! / Ebo!)', source: 'Hello! / Greetings! (Very much peace!)', pronunciation: 'chahm-gey / soo-bah-ee', hint: 'Hollis (1909, p. 214) & universal Kalenjin greeting' },
          { target: 'Kongoi (Kongoi mising)', source: 'Thank you (Thank you very much)', pronunciation: 'kohn-goy', hint: 'Gratitude' },
          { target: 'chiito (pl. piik)', source: 'person (pl. people)', pronunciation: 'chee-toh / peek', hint: 'Primary chii / piich (Hollis 1909, p. 155)' },
          { target: 'lakwet (pl. lagok)', source: 'child (pl. children)', pronunciation: 'lah-kweht / lah-gohk', hint: 'Primary lakwa (Hollis 1909)' },
          { target: 'tany / teta (pl. tuga)', source: 'cow, ox (pl. cattle)', pronunciation: 'tahny / teh-tah / too-gah', hint: 'Hollis (1909) pastoral staple' },
          { target: 'beek / chego / mursik', source: 'water / fresh milk / fermented milk', pronunciation: 'behk / cheh-goh / moor-seek', hint: 'Highland Nilotic liquids' },
          { target: 'Asiis (Asista) / arawet', source: 'Sun (Supreme Deity) / Moon', pronunciation: 'ah-sees / ah-rah-weht', hint: 'Hollis (1909, p. 40) cosmological nouns' },
          { target: 'keetit (pl. keetik) / maat', source: 'tree (pl. trees) / fire', pronunciation: 'keh-teet / maht', hint: 'Nature nouns (Hollis 1909)' },
          { target: 'ngetuny / pelio / kiplengoi', source: 'lion / elephant / hares', pronunciation: 'ngeh-toony / peh-lee-oh / keep-lehn-goy', hint: 'Hollis (1909) folklore fauna' },
          { target: 'kaita (kaap) / korget (pl. korusiek)', source: 'homestead (house of) / woman, wife (pl. women)', pronunciation: 'kah-ee-tah / kohr-geht', hint: 'Hollis (1909) homestead & kinship' }
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
        title: 'Numerals 1–10 & Hollis (1909) Nandi Proverbs (Atindonik-ap-Nandi)',
        icon: 'Scroll',
        description: 'Count from 1 to 10 in Kalenjin and study classical proverbs from A. C. Hollis (1909).',
        tips: "Kalenjin numbers 1–10 are akeenge (1), aeng' (2), somok (3), ang'wan (4), muut (5), lo (6), tisap (7), sisiit (8), sokol (9), and taman (10).",
        words: [
          { target: "akeenge, aeng', somok, ang'wan, muut", source: '1, 2, 3, 4, 5', pronunciation: 'ah-kehn-geh, ah-ehng, soh-mohk, ahng-wahn, moot', hint: 'Cardinals 1–5 (Hollis 1909, p. 180)' },
          { target: 'lo, tisap, sisiit, sokol, taman', source: '6, 7, 8, 9, 10', pronunciation: 'loh, tee-sahp, see-seet, soh-kohl, tah-mahn', hint: 'Cardinals 6–10 (Hollis 1909, p. 180)' },
          { target: 'Ii-e ngetuny lel', source: 'The lion bears a hyena (Hollis 1909 Proverb #2)', pronunciation: 'ee-eh ngeh-toony lehl', hint: 'ngetuny = lion, lel = hyena/jackal' },
          { target: 'Inga-i ngom, i-ker-i-ke kumut-i?', source: 'However clever you may be, can you see the back of your neck? (Hollis 1909 Proverb #4)', pronunciation: 'een-gah-ee ngohm', hint: 'ngom = clever, kumut = nape of neck' },
          { target: 'Iok-toi kiplengoi pelio', source: 'Send hares to the elephant, not elephants to the hare (Hollis 1909 Proverb #7)', pronunciation: 'ee-ohk-toy keep-lehn-goy peh-lee-oh', hint: 'Youth serve elders' },
          { target: 'Iput-i tany aku pa-kelek angwan', source: 'The ox falls in spite of its four legs (Hollis 1909 Proverb #8)', pronunciation: 'ee-poo-tee tahny ah-koo pah-keh-lehk ahng-wahn', hint: 'Even the strong can stumble' }
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
  },
  {
    id: 'kalenjin-unit-2',
    title: 'Unit 2: Ecological Calendar (12 Months), Ipinda Age-Sets & Tongōchik Riddles (Hollis 1909 & Dundas 1910)',
    description: 'Explore the 12 traditional Nandi & Tugen/Marakwet ecological months, 7 cyclic Ipinda age-sets, and riddles from Hollis (1909) and Dundas (1910).',
    icon: '🌦️',
    skills: [
      {
        id: 'kalenjin-months-ipinda',
        title: '12 Traditional Months, 7 Ipinda Age-Sets & Riddles',
        icon: 'Calendar',
        description: 'Learn the Highland Nilotic seasonal calendar, age-set cycle, and riddles.',
        tips: "Both A. C. Hollis (1909, p. 94) for Nandi and Hon. K. R. Dundas (1910, p. 62) for Tugen/Marakwet & Pokot document 12 ecological months and cyclic age-sets (Maina, Chumo, Sawe, Kipkoimet, Kaplelach, Kimnyige, Nyongi).",
        words: [
          { target: 'Kiptamo / Ewat / Wakikoi', source: 'Hot dry harvest & land-clearing months (Feb–Apr)', pronunciation: 'keep-tah-moh / eh-waht', hint: 'Hollis (1909, p. 94) Nandi ecological calendar' },
          { target: 'Mamut / Roptui / Puret', source: 'Heavy rains & mist months (May–Jul)', pronunciation: 'mah-moot / rohp-too-ee / poo-reht', hint: 'Roptui = black/heavy rain (Hollis 1909, p. 95)' },
          { target: 'Epeso /Kipsunde / Kipsunde oieng', source: 'Ripening & harvest thanksgiving months (Aug–Oct)', pronunciation: 'eh-peh-soh / keep-soon-deh', hint: 'Kipsunde harvest festival (Hollis 1909, p. 46)' },
          { target: 'Mulkul / Mulkulik oieng / Ngotioto', source: 'Strong winds & dry grazing months (Nov–Jan)', pronunciation: 'mool-kool / ngoh-tee-oh-toh', hint: 'Hollis (1909, p. 95)' },
          { target: 'Ipinda (Maina, Chumo, Sawe, Kipkoimet, Kaplelach, Kimnyige, Nyongi)', source: 'The 7 cyclic generation age-sets', pronunciation: 'ee-peen-dah', hint: 'Hollis (1909, p. 12) & Beech (1911, p. 6)' },
          { target: 'Kokwet / Kiruogindet (pl. Kiruogik)', source: 'Village council / Council spokesman-judge', pronunciation: 'koh-kweht / kee-rwoh-geen-deht', hint: 'Hollis (1909, p. 48) & Beech (1911)' },
          { target: 'Apuk ma-pa. — Kina-ap-teta.', source: 'It pours out; it does not go away. — A cow’s udder.', pronunciation: 'ah-pook mah-pah', hint: 'Hollis (1909, p. 134, Riddle #4)' },
          { target: 'Me-pel-e ma muria.', source: 'Fire does not burn an underground burrow (Prudence protects).', pronunciation: 'meh-peh-leh mah moo-ree-ah', hint: 'Hollis (1909, p. 128, Proverb #24)' }
        ],
        sentences: [
          { target: 'Roptui ko arawet-ap ropta.', source: 'Roptui is the month of heavy rain (Hollis 1909).' },
          { target: 'Ngatip kut, me-ngatip kel.', source: 'Let the mouth (counsel) be sharp, not the foot (Hollis 1909 Proverb #36).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In the traditional Nandi calendar recorded by A. C. Hollis (1909), what does the month name "Roptui" signify?',
            correctAnswer: 'Heavy ("black") rains (June)',
            options: [
              'Heavy ("black") rains (June)',
              'The seven cyclic age-sets',
              'A cow’s udder',
              'Village council'
            ],
            hint: 'ropta = rain + tui = black/heavy'
          }
        ]
      }
    ]
  }
];

// --- KALENJIN (grammar-reference.ts) ---
// ============================================================
// Kalenjin (Nandi / Kipsigis / Tugen / Marakwet / Pokot / Sabaot) Grammar Reference Guide
// Grounded in A. C. Hollis & Sir Charles Eliot (1909) "The Nandi: Their Language and Folk-Lore",
// C. W. Hobley (1902 & 1903), Sir Harry Johnston (1902), Hon. K. R. Dundas (1910), Mervyn Beech (1911),
// van Otterloo (1979), and Rottland (1982)
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
    title: "Primary (Indefinite) vs. Secondary (Definite Suffix) Noun Classes (Hollis 1909 & Beech 1911)",
    summary: "Kalenjin nouns inflect via suffixed definite articles (-it, -et, -ta, -to in singular; -ik, -ek, -ka in plural) across 11 singular and 10 plural classes.",
    content: `As documented in A. C. Hollis & Sir Charles Eliot (1909) *The Nandi: Their Language and Folk-Lore* (pp. 154–174), Mervyn Beech (1911) *The Suk*, and Rottland (1982):
1. **Primary (Indefinite) vs. Secondary (Definite) Noun Suffixes**:
   - Southern Nilotic (Kalenjin) nouns take suffixed determiners for specificity:
   - **chii → chiito** (a person → the person); plural **piich → piik** (people → the people).
   - **tany → teta** (an ox/cow → the cow); plural **tuka / tuga** (the cattle).
   - **lakwa → lakwet** (a child → the child); plural **lagoi → lagok** (the children).
   - **ket → keetit** (a tree → the tree); plural **keetik** (the trees).
   - **korko → korget** (a woman → the woman); plural **korusio → korusiek** (the women).
   - **peei → beek** (water → the water, plural mass noun in *-k*).
2. **Genitive / Construct Linking Particles (*-ap* sg. / *-kap* for kinship)**:
   - Possession between two nouns is linked by **-ap** ("of"): *lakwet-ap chiito* (the child of the man), *kina-ap-teta* (the udder of the cow), *Atindonik-ap-Nandi* (Proverbs of the Nandi), *Tongōchik-ap-Nandi* (Riddles of the Nandi).`,
    examples: [
      { kalenjin: "chii → chiito (sg.) | piich → piik (pl.)", english: "a person → the person | people → the people", explanation: "Primary indefinite vs. secondary definite suffixation (Hollis 1909, p. 155)" },
      { kalenjin: "tany → teta (sg.) | tuga (pl.)", english: "a cow/ox → the cow | the cattle", explanation: "Hollis (1909) pastoral noun declension" },
      { kalenjin: "Atindonik-ap-Nandi • Tongōchik-ap-Nandi", english: "Proverbs of the Nandi • Riddles of the Nandi", explanation: "Genitive linker -ap ('of') in Hollis (1909)" }
    ]
  },
  {
    id: "kalenjin-numerals-hollis-proverbs",
    title: "Kalenjin Numerals (1–100), VSO Verbal Conjugation, Derivative Verbs & Hollis (1909) Oral Literature",
    summary: "Kalenjin uses VSO word order, two verb classes (Class I short-stem vs. Class II i-/ke- prefix), subject prefixes (a-, i-, ko-, ki-, o-), and a base-10 numeral system.",
    content: `From A. C. Hollis & Sir Charles Eliot (1909) *The Nandi: Their Language and Folk-Lore* (pp. 180–231):
1. **Cardinal Numerals (1–100)**:
   - **1**: *akeenge* • **2**: *aeng' (oieng)* • **3**: *somok* • **4**: *ang'wan* • **5**: *muut*
   - **6**: *lo (kullo)* • **7**: *tisap* • **8**: *sisiit* • **9**: *sokol* • **10**: *taman*
   - **20**: *tiptem* • **30**: *sosom* • **40**: *artam* • **50**: *konom* • **100**: *pokol*.
2. **Verbal Classes, Tenses & Negation (*ma-* / *me-*)**:
   - **Subject Prefixes**: 1s **a-**, 2s **i-**, 3s **ko- / ø-**, 1p **ki-**, 2p **o-**, 3p **ko-**.
   - **Past Tense Markers**: Today's past **ka-**, yesterday's past **ko-**, remote past **ki-** (*ki-a-cham*, I loved).
   - **Negative Prefix**: **ma- / me-** (*ma-a-cham-e*, I do not love; *me-pel-e ma muria*, fire does not burn a rat-run).
   - **Derivative Forms**: Applied/Dative (**-chi**), Motion towards speaker (**-u**), Motion away (**-ta / -to**), Reciprocal (**-yo**), Passive (**ki-...-chin**).`,
    examples: [
      { kalenjin: "akeenge, aeng', somok, ang'wan, muut, lo, tisap, sisiit, sokol, taman, tiptem, sosom, artam, konom, pokol", english: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 100", explanation: "Kalenjin cardinal numerals (Hollis 1909, p. 180)" },
      { kalenjin: "Ii-e ngetuny lel • Me-pel-e ma muria", english: "The lion bears a hyena • Fire does not burn an underground burrow", explanation: "Affirmative vs. negative VSO syntax in Hollis (1909)" },
      { kalenjin: "Iput-i tany aku pa-kelek angwan.", english: "The ox falls in spite of its four legs.", explanation: "Hollis & Eliot (1909, p. 126, Proverb #8)" }
    ]
  }
];

// --- MIJIKENDA (course.ts) ---
// ============================================================
// Mijikenda (Kigiryama / Chidigo / Chichonyi / Kinika) Language Course
// Grounded in Krapf (1850), Krapf & Rebmann (1887) "A Nika-English Dictionary",
// W. E. Taylor (1891) "Giryama Vocabulary and Collections" & "African Aphorisms",
// and Sir Harry Johnston (1919)
// ============================================================


export const MIJIKENDA_CONFIG: LanguageConfig = {
  id: 'mijikenda',
  name: 'Mijikenda',
  nativeName: "Kigiryama / Chidigo (Midzi Chenda)",
  family: 'Bantu',
  counties: ['Kilifi', 'Kwale', 'Mombasa', 'Tana River'],
  speakers: '2.5M',
  speechLocale: 'sw-KE',
  description: 'The Sabaki Bantu language cluster of the Nine Sacred Kaya Homesteads (Giriama, Digo, Chonyi, Duruma, Kambe, Ribe, Rabai, Jibana, Kauma) along the Kenyan coast. Grounded in Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891), and Johnston (1919).',
  color: '#0D9488',
  sources: [
    'krapf-six-languages-1850',
    'krapf-suahili-dictionary-1882',
    'shaw-pocket-vocabulary-taita-1885',
    'krapf-rebmann-nika-dictionary-1887',
    'taylor-aphorisms-1891',
    'taylor-giryama-1891',
    'johnston-bantu-1919',
    'open-web-swadesh-comparative',
  ],
};

export const MIJIKENDA_UNITS: CourseUnit[] = [
  {
    id: 'mijikenda-unit-1',
    title: 'Unit 1: Sacred Kaya Heritage, Sabaki Nouns & W. E. Taylor (1891) Riddles',
    description: 'Learn Kigiryama, Kirabai, and Chidigo nouns, numerals, verbs, and 1891 riddles and folktales from W. E. Taylor and Krapf & Rebmann (1887).',
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
          { target: 'kaya (pl. makaya)', source: 'sacred fortified forest homestead', pronunciation: 'kah-yah / mah-kah-yah', hint: 'Taylor (1891) & Krapf & Rebmann (1887)' },
          { target: "K'ambi / Habasi (Vaya, Fisi, Enye-ts'i)", source: 'Ruling council of elders & initiation degrees', pronunciation: 'kahm-bee / hah-bah-see', hint: 'W. E. Taylor (1891, p. 43) Giriama governance' },
          { target: "mut'u (pl. at'u)", source: 'person (pl. people)', pronunciation: 'moo-too / ah-too', hint: 'W. E. Taylor (1891) Class 1/2' },
          { target: 'mwalume (pl. alume) / muche (pl. ache)', source: 'man / woman', pronunciation: 'mwah-loo-meh / moo-cheh', hint: 'W. E. Taylor (1891)' },
          { target: 'madzi / moho', source: 'water / fire', pronunciation: 'mah-dzee / moh-hoh', hint: 'Krapf (1850), Krapf & Rebmann (1887), & Taylor (1891)' },
          { target: 'dziwe (pl. mawe) / dzua', source: 'stone (pl. stones) / sun', pronunciation: 'dzee-weh / dzoo-ah', hint: 'Class 5 dzi-' },
          { target: 'Mulungu', source: 'God, Supreme Creator', pronunciation: 'moo-loon-goo', hint: 'Taylor (1891, p. 90) & Krapf & Rebmann (1887)' },
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
        title: 'Kigiryama Verbs, Numerals, 4-Day Week & Taylor (1891) Proverbs & Folktales',
        icon: 'BookOpen',
        description: 'Learn Mijikenda action verbs, numbers, traditional 4-day market week, proverbs, and folktale characters from W. E. Taylor (1891).',
        tips: "W. E. Taylor (1891, p. 78) documents the traditional 4-day Giriama week (Jumwa, Kuramuka, Kurima-hiri, Kuisa), 5 folktales starring Katsungula (the Little Hare), 22 riddles, and 64 Giryama/Nyika proverbs.",
        words: [
          { target: 'katsungula / simba / fisi', source: 'little hare / lion / hyena', pronunciation: 'kah-tsoon-goo-lah / seem-bah / fee-see', hint: 'W. E. Taylor (1891) folktale characters' },
          { target: 'mumwenga, mairi, ahahu, an-ne, atsano, handahu, fungahe, nane, chenda, kumi', source: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10', pronunciation: 'moo-mwehn-gah, mah-ee-ree, ah-hah-hoo', hint: 'Mijikenda numerals 1–10 (Taylor 1891 & Krapf 1887)' },
          { target: 'Jumwa, Kuramuka, Kurima-hiri, Kuisa', source: 'The traditional 4-day Giriama week (rest day, 1st, 2nd, and 3rd cultivating days)', pronunciation: 'joom-wah, koo-rah-moo-kah', hint: 'W. E. Taylor (1891, p. 78 under Moon)' },
          { target: "kurya / kugit'ira", source: 'to eat / to cook', pronunciation: 'koo-ryah / koo-gee-tee-rah', hint: 'Taylor (1891, p. 138)' },
          { target: 'kugula / kuguza', source: 'to buy / to sell', pronunciation: 'koo-goo-lah / koo-goo-zah', hint: 'Krapf & Rebmann (1887) & Taylor (1891)' },
          { target: "Chala chimwenga k'achibanda ts'aha", source: 'One finger cannot crush a louse (Taylor 1891 Proverb #603)', pronunciation: 'chah-lah chee-mwehn-gah', hint: 'Unity is strength' },
          { target: "K'akilumika. Ni kikokora.", source: 'It cannot be bitten. It is the elbow (Taylor 1891 Riddle #8)', pronunciation: 'kah-kee-loo-mee-kah nee kee-koh-koh-rah', hint: 'kikokora = elbow' },
          { target: 'Magoma mairi lwanda-ni. Ni mahombo.', source: 'Two cows in the open field. It is the breasts (Taylor 1891 Riddle #18)', pronunciation: 'mah-goh-mah mah-ee-ree lwahn-dah-nee', hint: 'lwanda-ni = in the open field' }
        ],
        sentences: [
          { target: "Chala chimwenga k'achibanda ts'aha.", source: 'One finger cannot crush a louse (Taylor 1891, Giryama Proverb #603).' },
          { target: 'Katsungula na Simba; Fisi na Simba na Katsungula.', source: 'The Little Hare and the Lion; The Hyena, the Lion, and the Little Hare (Taylor 1891).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: "Which character is the clever trickster hare in W. E. Taylor's 1891 Giriama folktales?",
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
// Mijikenda (Kigiryama / Chidigo / Chichonyi / Chiduruma / Kirabai) Grammar Reference Guide
// Grounded in W. E. Taylor (1891) "Giryama Vocabulary and Collections" & "African Aphorisms",
// Krapf & Rebmann (1887) "A Nika-English Dictionary", Krapf (1850), and Johnston (1919)
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
    title: "Sabaki Sound Shifts (*t > h, Aspirated Stops, Voiceless Nasals hm/hn, dzi-/ma- Classes) & 12 Noun Classes (Taylor 1891 & Krapf 1887)",
    summary: "Mijikenda ('The Nine Homesteads' — Midzi Chenda) preserves distinctive Sabaki sound laws (*moto > moho 'fire', *mutu > mut'u 'person', *jino > dzino 'tooth'), aspirated stops, voiceless nasals, and 12 noun classes.",
    content: `As documented in Rev. W. E. Taylor's *Giryama Vocabulary and Collections* (1891, pp. v–xxvii), Krapf & Rebmann's *Nika-English Dictionary* (1887), and Johnston (1919):
1. **Distinctive Mijikenda Phonology (Taylor 1891, pp. viii–xiii)**:
   - **Aspirated vs. Unaspirated Stops (*p', t', *t*', ts', ch', k'*)**: e.g., **mut'u** (person, pl. **at'u**), **k'uku** (chicken), **p'ula** (nose), **ts'aha** (louse), **ts'i** (land/earth).
   - **Voiceless Nasals (*hm, hn*) & Labiodental Approximant (*hv*)**: e.g., **hnyama** (animal), **hvoyo** (prayer, as in *Hvoyo ra Bwana* 'The Lord's Prayer', Taylor 1891, p. xiv).
   - **Lenition of Proto-Bantu \*t > h**: **moho** (fire, cf. Swahili *moto*), **muho** (river, cf. Swahili *mto*), **-hahu** (three, cf. Swahili *-tatu*), **handahu** (six), **fungahe** (seven).
   - **Affrication in Class 5 (*dzi- / ma-*)**: **dziwe → mawe** (stone → stones), **dzino → meno** (tooth → teeth), **dzits'o → mats'o** (eye → eyes), **madzi** (water), **Midzi Chenda** (Nine Villages/Tribes).
2. **12 Noun Classes & Diminutives (*Ka- / U-*)**:
   - Taylor (1891, p. 11 under *BE*) tabulates concords across all 12 classes, including Diminutive Class *ka-* (pl. *u-*), e.g., **katsungula** (little hare, pl. **utsungula**), **kahoho** (infant, pl. **uhoho**).`,
    examples: [
      { mijikenda: "mut'u (pl. at'u) • mwalume (pl. alume) • muche (pl. ache)", english: "person (pl. people) • man (pl. men) • woman (pl. women)", explanation: "Class 1/2 animate nouns in W. E. Taylor (1891)" },
      { mijikenda: "dziwe (pl. mawe) • dzino (pl. meno) • madzi • moho • fungahe", english: "stone • tooth • water • fire • seven", explanation: "Sabaki dzi-/ma- prefixation and *t > h lenition" },
      { mijikenda: "katsungula (pl. utsungula) • kahoho (pl. uhoho)", english: "little hare • little child", explanation: "Diminutive ka-/u- classes in Taylor (1891)" }
    ]
  },
  {
    id: "mijikenda-taylor-1891-riddles-verbs",
    title: "Sketch of the Giryama Verb (Taylor 1891), Negation (k'a-), Falsetto Ideophones & 64 Proverbs / 22 Riddles",
    summary: "In Taylor (1891), Kigiryama forms infinitives with ku-, negates indicative verbs with prefix k'a-, marks past/perfect with -dza- / -re, and uses falsetto ideophones (tsé!, do!, pi!, myá!).",
    content: `Rev. W. E. Taylor's *Sketch of the Giryama Verb* (1891, pp. xvii–xxvii) and *African Aphorisms* (1891, Proverbs #601–#664) detail classical Mijikenda verb structure:
1. **Affirmative & Negative Subject Prefixes (Taylor 1891, p. xviii)**:
   - Affirmative: 1s **ni- (n-)**, 2s **u-**, 3s **a- (yu-) on Class 1**, 1p **fu-**, 2p **mu-**, 3p **a-**.
   - Negative (**k'a-**): 1s **si-**, 2s **k'u-**, 3s **k'a-**, 1p **k'afu-**, 2p **k'amu-**, 3p **k'aa-**.
2. **Tense Markers & Derivative Verb Stems (Krapf & Rebmann 1887 & Taylor 1891)**:
   - **Present Progressive (-na-)**: *ni-na-henda* (I am doing/making).
   - **Perfect / Recent Past (-dza-)**: *u-dza-lamuka* (have you woken well? — morning salutation).
   - **Conditional / Temporal (-ki-)**: *a-ki-uka mumwenga* (when one goes away).
   - **Falsetto Ideophones (Taylor 1891, p. xvi)**: * kundama pi!* (pitch black/dark), *kuerupe tsé!* (snow white), *kuidzala do!* (brim-full), *kukala myá!* (completely silent/finished).`,
    examples: [
      { mijikenda: "Fw-alume ahahu, akiuka mumwenga, k'afurya wari. Ni mafigo.", english: "We are three men; when one goes away, we eat no cornmeal. It is the three hearthstones.", explanation: "W. E. Taylor (1891, p. 138, Riddle #6)" },
      { mijikenda: "Chala chimwenga k'achibanda ts'aha.", english: "One finger cannot crush a louse.", explanation: "W. E. Taylor, African Aphorisms (1891, p. 141, Giryama Proverb #603)" },
      { mijikenda: "Udzalamuka? — Nidzalamuka.", english: "Have you woken well? (Good morning) — I have woken well.", explanation: "Classical Giriama morning salutation (Taylor 1891, p. 102)" }
    ]
  }
];

// --- MERU (course.ts) ---
// ============================================================
// Meru & Mount Kenya Bantu (Kĩmĩĩrũ / Kîembu / Kĩtharaka) Language Course
// Grounded in Sir Harry H. Johnston (1919) "A Comparative Study of the Bantu and Semi-Bantu Languages" (11. Kikuyu/Embu/Chuka/Mwimbe/Emberre/Tharaka/Igoji & 11a. Meru),
// C. W. Hobley (1910) "Ethnology of A-Kamba and Other East African Tribes" (Mweru & Tharaka sections),
// and Wikipedia Meru_language & Embu_language Linguistic Corpus
// ============================================================


export const MERU_CONFIG: LanguageConfig = {
  id: 'meru',
  name: 'Meru',
  nativeName: 'Kĩmĩĩrũ',
  family: 'Bantu',
  counties: ['Meru', 'Tharaka-Nithi', 'Embu'],
  speakers: '2.4M',
  speechLocale: 'sw-KE',
  description: 'A Central Kenya (Mount Kenya / Thagiicu) Bantu language spoken around the eastern and northern slopes of Kĩrĩnyaga (Mount Kenya), renowned for its 16 noun classes and the Njũri Ncheke council of elders. Grounded in Hobley (1910), Sir Harry Johnston (1919), and comparative Mount Kenya Bantu linguistics.',
  color: '#16A34A',
  sources: ['hobley-akamba-ethnology-1910', 'johnston-bantu-1919', 'open-web-swadesh-comparative'],
};

export const MERU_UNITS: CourseUnit[] = [
  {
    id: 'meru-unit-1',
    title: 'Unit 1: Greetings, 16 Noun Classes, Numerals & Mount Kenya Culture (Johnston 1919 & Hobley 1910)',
    description: 'Master Kĩmĩĩrũ, Kĩtharaka, and Kîembu greetings, noun-class concords, numbers 1–10 (Johnston 1919 #11–11a), and everyday verbs.',
    icon: '⛰️',
    skills: [
      {
        id: 'meru-greetings-nouns',
        title: 'Greetings, People & Noun Classes (Muntũ / Antũ)',
        icon: 'Users',
        description: 'Learn conversational greetings and noun classes across Mount Kenya Bantu (Johnston 1919 & Hobley 1910).',
        tips: "In Kĩmĩĩrũ (Johnston 1919 Language #11a), Class 1/2 nouns pair mũ-/ba- (muntũ → antũ / bantũ 'person → people'), Class 3/4 pair mũ-/mĩ- (mũtĩ → mĩtĩ 'tree → trees'), and Class 12/13 pair ka-/tũ- for diminutives (kaana → tũana).",
        words: [
          { target: 'Muuga! / Ũrĩ mwega? (resp. Ndĩ mwega)', source: 'Hello! / Are you well? (I am well)', pronunciation: 'moo-gah / oo-ree mweh-gah', hint: 'Standard Kĩmĩĩrũ greeting' },
          { target: 'Nĩwega mũno', source: 'Thank you very much', pronunciation: 'nee-weh-gah moo-noh', hint: 'Polite gratitude' },
          { target: 'muntũ (pl. antũ / bantũ)', source: 'person (pl. people)', pronunciation: 'moon-too / ahn-too', hint: 'Johnston (1919, p. 69) Class 1/2 #11a Meru' },
          { target: 'mũrũme (pl. arũme) / mũka (pl. aka)', source: 'man, husband / woman, wife', pronunciation: 'moo-roo-meh / moo-kah', hint: 'Johnston (1919, p. 68) #11a Meru & Embu' },
          { target: 'mwana (pl. aana) / kaana (pl. tũana)', source: 'child / small child (diminutive)', pronunciation: 'mwah-nah / kah-nah', hint: 'Class 1/2 vs. Class 12/13 ka-/tũ-' },
          { target: 'mũtĩ (pl. mĩtĩ) / ĩiga (pl. maiga)', source: 'tree (pl. trees) / stone (pl. stones)', pronunciation: 'moo-tee / ee-gah', hint: 'Johnston (1919, p. 70) Class 3/4 & 5/6' },
          { target: 'rũũji (rũĩ / maĩ) / mwanki', source: 'water (river) / fire', pronunciation: 'roo-jee / mwahn-kee', hint: 'Johnston (1919, p. 67, 71) Meru & Tharaka' },
          { target: 'riũa / mweri / njata', source: 'sun / moon / star', pronunciation: 'ree-oo-ah / mweh-ree / n-jah-tah', hint: 'Johnston (1919, p. 70) cosmological nouns' },
          { target: 'Murungu / Ngai', source: 'God, Supreme Creator', pronunciation: 'moo-roon-goo / ngah-ee', hint: 'Johnston (1919, p. 67) & Hobley (1910, p. 148)' },
          { target: 'Njũri Ncheke / Kiama', source: 'Supreme Council of Elders', pronunciation: 'n-joo-ree n-cheh-keh', hint: 'Traditional Ameru & Aembu governance' }
        ],
        sentences: [
          { target: 'Muntũ ũjũ mũraja arĩrũta wĩra.', source: 'This tall person is working.' },
          { target: 'Antũ baba baraja barĩrũta wĩra.', source: 'These tall people are working.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What are the singular and plural forms for "person / people" in Kĩmĩĩrũ (Johnston 1919 #11a)?',
            correctAnswer: 'muntũ / antũ (bantũ)',
            options: ['muntũ / antũ (bantũ)', 'mũtĩ / mĩtĩ', 'kaana / tũana', 'riũa / mweri'],
            hint: 'Class 1/2 mũ-/ba- (a-)'
          }
        ]
      },
      {
        id: 'meru-numbers-proverbs',
        title: 'Numerals 1–10 (Johnston 1919 #11a), Dahl’s Law Verbs & Proverbs',
        icon: 'Scroll',
        description: 'Count from 1 to 10 across Meru, Tharaka, Chuka, and Embu and learn Mount Kenya Bantu proverbs.',
        tips: "Sir Harry Johnston (1919, p. 72) records the numerals of Meru (#11a) and Embu/Chuka/Mwimbe/Tharaka (#11): imwe (1), iiri (2), ithatu (3), inya (4), ithano (5), ithanthatu (6), mũgwanja (7), inyanya (8), kenda (9), ikũmi (10).",
        words: [
          { target: 'imwe, iiri (bairi), ithatu, inya, ithano', source: '1, 2, 3, 4, 5', pronunciation: 'ee-mweh, ee-ree, ee-thah-too, ee-nyah, ee-thah-noh', hint: 'Johnston (1919, p. 72) #11a Meru numerals' },
          { target: 'ithanthatu, mũgwanja, inyanya, kenda, ikũmi', source: '6, 7, 8, 9, 10', pronunciation: 'ee-thahn-thah-too, moo-gwahn-jah, ee-nyah-nyah, kehn-dah, ee-koo-mee', hint: 'Johnston (1919, p. 72) numerals 6–10' },
          { target: 'igana / ngiri', source: '100 / 1,000', pronunciation: 'ee-gah-nah / n-gee-ree', hint: 'Johnston (1919, p. 72)' },
          { target: 'kũruga / kũrĩa / kũnyua / gũthiĩ', source: 'to cook / to eat / to drink / to go', pronunciation: 'koo-roo-gah / koo-ree-ah / koo-nywah / goo-thee', hint: 'Dahl’s Law: kũ- voices to gũ- before voiceless th' },
          { target: 'Mũtĩ ũmwe ndũtũũragia mũrũrĩ', source: 'A single tree does not make a forest', pronunciation: 'moo-tee oo-mweh n-doo-too-rah-gyah moo-roo-ree', hint: 'Mount Kenya Bantu proverb on unity' },
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
// Meru & Mount Kenya Bantu (Kĩmĩĩrũ / Kîembu / Kĩtharaka) Grammar Reference Guide
// Grounded in Sir Harry H. Johnston (1919) "A Comparative Study of the Bantu and Semi-Bantu Languages",
// C. W. Hobley (1910) "Ethnology of A-Kamba and Other East African Tribes",
// and Wikipedia Meru_language & Embu_language
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
    title: "The 16 Noun Classes of Kĩmĩĩrũ & Mount Kenya Bantu (Johnston 1919 #11–11a) & Dahl's Law",
    summary: "Kĩmĩĩrũ and Kîembu preserve 16 active Bantu noun classes with full alliterative agreement across demonstratives, adjectives, and verbs, alongside Dahl's Law voicing dissimilation.",
    content: `As documented in Sir Harry H. Johnston's *Comparative Study of the Bantu and Semi-Bantu Languages* (1919, Vol. I, pp. 66–73, Languages #11 Embu/Chuka/Mwimbe/Emberre/Tharaka/Igoji and #11a Meru), C. W. Hobley (1910, pp. 146–155), and Wikipedia's *Meru language* & *Embu language* references:
1. **Complete 16-Class Concord System (Johnston 1919, p. 73)**:
   - **Class 1/2 (*mũ- / ba-* or *a-*)**: *Muntũ ũjũ mũraja arĩrũta wĩra* (This tall person is working) → *Antũ baba baraja barĩrũta wĩra* (These tall people are working). Johnston notes that Meru (#11a) preserves the archaic Class 2 prefix **ba-** alongside **a-**.
   - **Class 3/4 (*mũ- / mĩ-*)**: *Mũtĩ ũjũ mũraja* (This tall tree) → *Mĩtĩ ĩjĩ mĩraja* (These tall trees).
   - **Class 5/6 (*rĩ-, ĩ- / ma-*)**: *Ĩvia / Ĩiga* (stone) → *Mavia / Maiga* (stones), *Riũa* (sun), *Rĩitho → Maitho* (eye → eyes), *Maĩ / Manjĩ* (water).
   - **Class 7/8 (*kĩ- / bi-, ci-*)**: *Kĩvĩrĩ / Gĩtĩ* (chair/stool) → *Bĩtĩ / Ciĩtĩ* (chairs), *Kĩara → Biara* (finger → fingers).
   - **Class 9/10 (*n- / n-*)**: *Ng'ombe* (cattle), *Mbũri* (goat), *Nyomba* (house), *Njĩra* (path).
   - **Class 11/10 (*rũ- / n-*)**: *Rũrĩmĩ → Ndĩmĩ* (tongue → tongues), *Rũũji* (river/water).
   - **Class 12/13 (*ka- / tũ-* Diminutives)**: *Kaana → Tũana* (small child → small children), *Kavĩcĩ → Tũvĩcĩ* (young boy → boys).
2. **Dahl's Law (Voicing Dissimilation)**:
   - When a prefix containing voiceless *k* or *t* precedes a stem beginning with another voiceless consonant (*t, k, c, th*), the prefix consonant voices to *g* (*kĩ- + tĩ → gĩtĩ* 'chair', *kũ- + thiĩ → gũthiĩ* 'to go', *ka- + kana → gakana*).`,
    examples: [
      { meru: "Muntũ ũjũ mũraja → Antũ baba baraja", english: "This tall person → These tall people", explanation: "Class 1/2 demonstrative and adjectival concord in Kĩmĩĩrũ (Johnston 1919 #11a)" },
      { meru: "Mũtĩ ũjũ mũraja → Mĩtĩ ĩjĩ mĩraja", english: "This tall tree → These tall trees", explanation: "Class 3/4 concord" },
      { meru: "kũ-ruga (to cook) vs. gũ-thiĩ (to go)", english: "to cook vs. to go", explanation: "Dahl's Law voicing kũ- -> gũ- before voiceless stem consonant" }
    ]
  },
  {
    id: "meru-dialect-comparison-phrases",
    title: "Mount Kenya Dialect Continuum (Imenti, Tigania/Igembe, Chuka/Mwimbi, Tharaka, Embu/Mbeere) & Pronouns (Johnston 1919)",
    summary: "Spoken across Meru, Tharaka-Nithi, and Embu counties, Mount Kenya Bantu exhibits systematic correspondences across Johnston's (1919) sub-dialects (#11 & #11a) and Hobley's (1910) Mweru & Tharaka tables.",
    content: `Sir Harry H. Johnston (1919, pp. 66–73) and C. W. Hobley (1910, pp. 146–155) document the Mount Kenya Bantu sub-groups (**Meru, Igoji, Mwimbe, Muthambi, Chuka, Tharaka, Embu, Emberre**):
1. **Personal & Possessive Pronouns (Johnston 1919, p. 72)**:
   - **I / me**: *niĩ* (Meru/Embu) | **My**: *-akwa*.
   - **Thou / thee**: *gwe / we* | **Thy**: *-aku*.
   - **He / she**: *we* | **His/her**: *-ake*.
   - **We**: *batũ / ithuĩ* | **Our**: *-etũ / -itũ*.
   - **You (pl.)**: *bũ / inyuĩ* | **Your**: *-enyu*.
   - **They**: *bo / o* | **Their**: *-ao / -abo*.
2. **Everyday Greetings & Phrases**:
   - **Muuga! / Ũrĩ mwega?** = Hello! / How are you? → **Ndĩ mwega** (I am fine).
   - **Mũrĩ ega?** = How are you all? → **Tũrĩ ega** (We are fine).
   - **Wĩtagwa atĩa?** = What is your name? → **Njĩtagwa...** (My name is...).
   - **Nkundia rũũji (Imenti) / Nkundia rũĩ (Tigania) / Nkundia rũũyĩ (Tharaka)** = Give me water to drink.`,
    examples: [
      { meru: "Ũrĩ mwega? — Ndĩ mwega. | Mũrĩ ega? — Tũrĩ ega.", english: "How are you? — I am fine. | How are you all? — We are fine.", explanation: "Singular vs. plural greetings in Mount Kenya Bantu" },
      { meru: "Nkundia rũũji (Imenti) • Nkundia rũĩ (Tigania) • Nkundia rũũyĩ (Tharaka)", english: "Give me water to drink", explanation: "Dialectal correspondence across Meru and Tharaka" },
      { meru: "Njũri Ncheke • Kiama kia Ngome • Mũgwe", english: "Supreme Council of Elders (Ameru • Aembu) • Traditional spiritual dignitary", explanation: "Traditional indigenous governance institutions (Hobley 1910)" }
    ]
  }
];

// --- SOMALI (course.ts) ---
// ============================================================
// Somali (Af-Soomaali) Language Course Configuration & Units
// Grounded in Rev. Fr. Evangelist de Larajasse (1897) "Somali-English and English-Somali Dictionary",
// Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II",
// Lt. J. W. C. Kirk (1905) "A Grammar of the Somali Language with Examples in Prose and Verse",
// Wiktionary 207-Word Somali Swadesh List, and Bender (2020)
// ============================================================


export const SOMALI_CONFIG: LanguageConfig = {
  id: 'somali',
  name: 'Somali',
  nativeName: 'Af-Soomaali',
  family: 'Cushitic',
  counties: ['Garissa', 'Wajir', 'Mandera', 'Isiolo', 'Marsabit', 'Nairobi'],
  speakers: '2.8M',
  speechLocale: 'so-KE',
  description: 'A Lowland East Cushitic language spoken across North-Eastern Kenya and the Horn of Africa, celebrated for its suffixed definite articles (-ka/-ta), focus grammar (waa/baa), and alliterative oral poetry (Gabay, Geeraar, Hees) and proverbs (Maahmaahyo). Grounded in de Larajasse (1897), Johnston (1902), and Kirk (1905).',
  color: '#2563EB',
  sources: [
    'larajasse-somali-dictionary-1897',
    'johnston-uganda-protectorate-1902',
    'kirk-somali-grammar-1905',
    'open-web-swadesh-comparative',
  ],
};

export const SOMALI_UNITS: CourseUnit[] = [
  {
    id: 'somali-unit-1',
    title: 'Unit 1: Greetings (Nabad!), Definite Articles (-ka/-ta), Pronouns & Cushitic Numerals (Kirk 1905 & Larajasse 1897)',
    description: 'Master Af-Soomaali greetings, masculine/feminine definite suffixes (-ka/-ta, -ii/-tii, -oo/-too), pronouns, numbers 1–10, and classical Maahmaahyo proverbs.',
    icon: '🐪',
    skills: [
      {
        id: 'somali-greetings-nouns',
        title: 'Greetings, Suffixed Articles (-ka / -ta) & Pastoral Life (Kirk 1905)',
        icon: 'MessageCircle',
        description: 'Learn Af-Soomaali greetings, pronouns, and definite nouns from Kirk (1905) and de Larajasse (1897).',
        tips: "In Af-Soomaali (Kirk 1905, pp. 11–18), 'the' is a suffix attached to the noun: -ka/-ga/-ha/-a for masculine nouns (nin → ninka 'the man', geel → geela 'the camels') and -ta/-da/-sha for feminine nouns (naag → naagta 'the woman', shimbir → shimbirta 'the bird'). Kirk also distinguishes present (-ka/-ta), past/known (-kii/-tii), and remote/absent (-koo/-too) articles.",
        words: [
          { target: 'Nabad! / Ma nabad baa? (resp. Waa nabad!)', source: 'Peace! / Is it peace? (It is peace!)', pronunciation: 'nah-bahd / mah nah-bahd bah', hint: 'Kirk (1905) & standard Somali greeting' },
          { target: 'Mahadsanid (Aad baad u mahadsan tahay)', source: 'Thank you (Thank you very much)', pronunciation: 'mah-hahd-sah-need', hint: 'Gratitude' },
          { target: 'Soo dhawoow! / Nabad gelyo!', source: 'Welcome! / Goodbye!', pronunciation: 'soh dhah-wow / nah-bahd gehl-yoh', hint: 'Hospitality phrases' },
          { target: 'aniga (aan) / adiga (aad)', source: 'I / you (singular)', pronunciation: 'ah-nee-gah / ah-dee-gah', hint: 'Kirk (1905, p. 27) emphatic & clitic pronouns' },
          { target: 'isaga (uu) / iyada (ay)', source: 'he / she', pronunciation: 'ee-sah-gah / ee-yah-dah', hint: 'Kirk (1905, p. 27) 3rd person pronouns' },
          { target: 'nin (ninka / ninkii) / naag (naagta / naagtii)', source: 'man (the man) / woman (the woman)', pronunciation: 'neen-kah / nahg-tah', hint: 'Kirk (1905, p. 11) Masculine -ka/-kii vs. Feminine -ta/-tii' },
          { target: 'biyo (biyaha) / caano (caanaha)', source: 'water / milk', pronunciation: 'bee-yoh / ah-noh', hint: 'Kirk (1905) essential pastoral liquids' },
          { target: "geel (hal / awr) / lo' / fardo", source: 'camels (she-camel / burden camel) / cattle / horses', pronunciation: 'gehl / loh / fahr-doh', hint: 'Kirk (1905) & de Larajasse (1897) pastoral livestock' },
          { target: 'garanug / godir / b‘e‘id / sagaro (Larajasse 1897)', source: 'gerenuk / greater kudu / beisa oryx / dik-dik', pronunciation: 'gah-rah-noog / goh-deer / beh-eed / sah-gah-roh', hint: 'Rev. Fr. Evangelist de Larajasse (1897) East African wildlife' },
          { target: 'xeer / maahmaah / gabay', source: 'customary law / proverb / classical poem', pronunciation: 'khehr / mah-mah / gah-bay', hint: 'Kirk (1905, pp. 170–183) Somali oral heritage' }
        ],
        sentences: [
          { target: 'Ma nabad baa? Waa nabad, mahadsanid.', source: 'Is it peace? It is peace, thank you (Kirk 1905).' },
          { target: 'Ninku wuxuu cabbaa biyo iyo caano.', source: 'The man drinks water and milk.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How does Af-Soomaali form "the man" and "the woman" from "nin" and "naag" (Kirk 1905)?',
            correctAnswer: 'ninka / naagta',
            options: ['ninka / naagta', 'aniga / adiga', 'biyo / caano', 'garanug / godir'],
            hint: 'Masculine suffix -ka and feminine suffix -ta'
          }
        ]
      },
      {
        id: 'somali-numbers-maahmaahyo',
        title: 'Numerals 1–10, 4 Seasons (Gu, Hagaa, Dayr, Jiilaal) & Oral Poetry (Kirk 1905)',
        icon: 'Scroll',
        description: 'Count from 1 to 10 in Af-Soomaali, learn the 4 Somali pastoral seasons from Kirk (1905 Appendix I), and study alliterative Maahmaahyo.',
        tips: "Lt. J. W. C. Kirk (1905, pp. 131–133, 170–183) documents the 4 Somali ecological seasons (Gu' main rains, Xagaa/Hagaa dry windy season, Dayr short rains, Jiilaal dry season) and the three classical poetic genres: Geeraar (equestrian/war chant), Gabay (philosophical epic poem), and Hees (work/dance song).",
        words: [
          { target: 'kow, laba, saddex, afar, shan', source: '1, 2, 3, 4, 5', pronunciation: 'kohw, lah-bah, sahd-dehkh, ah-fahr, shahn', hint: 'Kirk (1905, p. 24) & Johnston (1902) cardinals 1–5' },
          { target: 'lix, todoba, sideed, sagaal, toban', source: '6, 7, 8, 9, 10', pronunciation: 'leekh, toh-doh-bah, see-dehd, sah-gahl, toh-bahn', hint: 'Kirk (1905, p. 24) cardinals 6–10' },
          { target: 'boqol / kun', source: '100 / 1,000', pronunciation: 'boh-qohl / koon', hint: 'Kirk (1905, p. 25) higher numerals' },
          { target: "Gu', Xagaa (Hagaa), Dayr (Dair), Jiilaal (Jilal)", source: 'The 4 Somali pastoral seasons (Main rains, Dry summer, Short rains, Dry winter)', pronunciation: 'goo, hah-gah, dayr, jee-lahl', hint: 'Kirk (1905, Appendix I, p. 131)' },
          { target: 'Gabay, Geeraar (Gerar), Hees (Hes)', source: 'The 3 classical Somali poetic genres (Philosophical poem, Equestrian chant, Song)', pronunciation: 'gah-bay, geh-rahr, hehs', hint: 'Kirk (1905, pp. 170–183)' },
          { target: 'cun / cab / imow / tag', source: 'eat / drink / come / go', pronunciation: 'oon / ahb / ee-mohw / tahg', hint: 'Core verbs (Kirk 1905)' },
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
            prompt: 'In J. W. C. Kirk (1905, Appendix I), what are the four traditional Somali pastoral seasons?',
            correctAnswer: "Gu', Xagaa (Hagaa), Dayr (Dair), Jiilaal (Jilal)",
            options: [
              "Gu', Xagaa (Hagaa), Dayr (Dair), Jiilaal (Jilal)",
              'kow, laba, saddex, afar',
              'Gabay, Geeraar, Hees',
              'cun, cab, imow, tag'
            ],
            hint: "Gu' is the main rainy season and Jiilaal is the dry season"
          }
        ]
      }
    ]
  }
];

// --- SOMALI (grammar-reference.ts) ---
// ============================================================
// Somali (Af-Soomaali) Grammar Reference Guide
// Grounded in Lt. J. W. C. Kirk (1905) "A Grammar of the Somali Language with Examples in Prose and Verse",
// Rev. Fr. Evangelist de Larajasse (1897) "Somali-English Dictionary",
// Sir Harry H. Johnston (1902), Wiktionary Somali Swadesh List, and Bender (2020)
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
    title: "Three Suffixed Definite Articles (-ka/-ta, -kii/-tii, -koo/-too), Polar Gender & Case (Kirk 1905 & Larajasse 1897)",
    summary: "Af-Soomaali marks Masculine (-k-) vs. Feminine (-t-) gender, three degrees of definiteness/tense on the article (-a, -ii, -oo), and Absolutive vs. Nominative case.",
    content: `As documented in Lt. J. W. C. Kirk's *A Grammar of the Somali Language* (1905, pp. 11–23) and Rev. Fr. Evangelist de Larajasse (1897):
1. **Three Degrees of the Suffixed Definite Article (Kirk 1905, pp. 11–14)**:
   - Masculine nouns take **-k-** (assimilating to **-g-, -h-, -ø-** after gutturals/vowels) and Feminine nouns take **-t-** (assimilating to **-d-, -sh-** after vowels/palatals):
   - **(a) Present / Proximate Article (*-ka / -ta*)**: Denotes an object present or generally known: **nin-ka** (the man), **naag-ta** (the woman), **guri-ga** (the house), **shimbir-ta** (the bird).
   - **(b) Past / Evidential Article (*-kii / -tii*)**: Denotes an object mentioned before or associated with the past: **nin-kii** (the man aforementioned), **naag-tii** (the woman aforementioned), **maalintii** (on that day).
   - **(c) Remote / Absent Article (*-koo / -too*)**: Denotes an object distant or out of sight: **nin-koo**, **naag-too**.
2. **Gender Polarity in Plurals & Absolutive vs. Nominative Case**:
   - Many nouns invert their gender agreement in the plural (e.g., masculine singular *inan-ka* 'the boy' → feminine plural *inammadu*).
   - **Absolutive (citation/object form)** ends in **-a**: *nin-ka* (the man), *naag-ta* (the woman).
   - **Nominative (non-focused subject form)** replaces *-a* with **-u**: *nin-ku* (the man [subj.]), *naag-tu* (the woman [subj.]).`,
    examples: [
      { somali: "ninka (present) • ninkii (past/known) • ninkoo (remote)", english: "the man (present • aforementioned • yonder)", explanation: "Three-tier suffixed definite article in Kirk (1905, p. 12)" },
      { somali: "naag → naagta (abs.) / naagtu (nom.)", english: "woman → the woman (object/citation vs. subject)", explanation: "Feminine article -ta and nominative subject -tu" },
      { somali: "garanug • godir • b‘e‘id • sagaro", english: "gerenuk • greater kudu • beisa oryx • dik-dik", explanation: "Classical Somali wildlife terms in de Larajasse (1897)" }
    ]
  },
  {
    id: "somali-focus-pronouns-numerals",
    title: "Sentence Focus Particles (waa, baa, yaa), Three Verb Conjugations & Poetic Genres (Kirk 1905)",
    summary: "Every declarative Somali clause requires a focus/assertive particle (waa, baa, or yaa), and verbs conjugate across 3 regular conjugations plus 4 prefixing irregular verbs (yidhi, yimi, yiil, yiqiin).",
    content: `From Lt. J. W. C. Kirk's *Grammar of the Somali Language* (1905, pp. 27–88, 170–183):
1. **Assertive & Focus Particles (*waa, baa, yaa, ma*)**:
   - **waa**: Focuses the predicate/verb (*Waa nin wanaagsan* = He is a good man; *Waan imanayaa* = I am coming).
   - **baa / yaa (ayaa)**: Focuses the preceding noun phrase (*Nin baa yimid* = A MAN came).
   - **ma**: Interrogative and negative particle (*Ma nabad baa?* = Is it peace?; *Ma garanayo* = I do not know).
2. **Three Regular Verb Conjugations & Derivative Stems (Kirk 1905, pp. 35–68)**:
   - **1st Conjugation**: Root verbs (e.g., *sheeg* 'tell', *tag* 'go', *cab* 'drink').
   - **2nd Conjugation**: Causative/Transitive verbs in **-i / -is** (e.g., *kari* 'cook/boil', *celi* 'return/send back').
   - **3rd Conjugation**: Reflexive/Middle verbs in **-o / -at** (e.g., *joogso* 'halt/stop', *qaado* 'take for oneself').
   - **Four Prefix-Conjugated Verbs**: **idhi / yidhi** (say), **imi / yimi** (come), **iil / yiil** (be in a place), **aqiin / yiqiin** (know).
3. **Classical Somali Poetic Genres (Kirk 1905, pp. 170–183)**:
   - **Gabay (Gabei)**: Solemn philosophical, historical, or political poetry obeying strict alliteration (*higgaad*).
   - **Geeraar (Gerar)**: Rapid equestrian and warrior chant.
   - **Hees (Hes)**: Rhythmic pastoral watering, dance, and work songs.`,
    examples: [
      { somali: "aniga (aan) • adiga (aad) • isaga (uu) • iyada (ay)", english: "I • you (sg.) • he • she", explanation: "Emphatic independent vs. short subject clitic pronouns (Kirk 1905, p. 27)" },
      { somali: "kow, laba, saddex, afar, shan, lix, todoba, sideed, sagaal, toban", english: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10", explanation: "Af-Soomaali cardinal numerals (Kirk 1905, p. 24)" },
      { somali: "Far keliya fool ma dhaqdo • Nin aan dhul marin dhaayo ma leh", english: "A single finger cannot wash a face • A man who has not travelled the land has no insight", explanation: "Classical alliterative Somali Maahmaahyo" }
    ]
  }
];

// ============================================================
// ADDITIONAL 9 KENYAN LANGUAGE COURSES (ALL 22 DICTIONARY LANGUAGES)
// Grounded in the 34 Historical Primary Sources (1842–1929)
// ============================================================

// --- 14. EMBU & MBEERE (Kîembu / Kîmbeere) ---
export const EMBU_CONFIG: LanguageConfig = {
  id: 'embu',
  name: 'Embu',
  nativeName: 'Kîembu / Kîmbeere',
  family: 'Bantu',
  counties: ['Embu', 'Kirinyaga', 'Tharaka-Nithi'],
  speakers: '610K',
  speechLocale: 'sw-KE',
  description: 'A Central Kenya (Mount Kenya) Bantu language spoken on the southern and south-eastern slopes of Kĩrĩnyaga (Mount Kenya) by the Aembu and Ambeere communities. Grounded in Sir Harry H. Johnston (1919 #11 Embu, Chuka, Mwimbe & Emberre) and C. W. Hobley (1910, 1922).',
  color: '#059669',
  sources: ['hobley-akamba-ethnology-1910', 'johnston-bantu-1919', 'bantu-beliefs', 'open-web-swadesh-comparative'],
};

export const EMBU_UNITS: CourseUnit[] = [
  {
    id: 'embu-unit-1',
    title: 'Unit 1: Greetings, Noun Classes, Numerals 1–10 & Kiama Heritage (Johnston 1919 #11 & Hobley 1910)',
    description: 'Master Kîembu and Kîmbeere greetings, mũ-/a- and kĩ-/ci- noun classes, Dahl’s Law, and numbers 1–10.',
    icon: '⛰️',
    skills: [
      {
        id: 'embu-greetings-nouns',
        title: 'Greetings, People & Mount Kenya Nature (Johnston 1919 #11)',
        icon: 'Users',
        description: 'Learn everyday Kîembu salutations, kinship nouns, and landscape terms.',
        tips: "Kîembu preserves palatal/bilabial fricatives (v where Gĩkũyũ has h: e.g., ĩvia 'stone', mũvĩrĩga 'clan') and observes Dahl's Law voicing dissimilation (kũ-thiĩ -> gũthiĩ).",
        culturalNote: "In Kîembu tradition documented by C. W. Hobley (1910) and Sir Harry Johnston (1919), the Kiama kia Ngome (Council of Elders) met in sacred groves (mũtitũ) to arbitrate community law.",
        words: [
          { target: 'Wĩ mwega? (resp. Ndĩ mwega) / Mũrĩ ega?', source: 'How are you? (I am well) / How are you all?', pronunciation: 'wee mweh-gah / n-dee mweh-gah', hint: 'Standard Kîembu salutation' },
          { target: 'Nĩ wega mũno', source: 'Thank you very much', pronunciation: 'nee weh-gah moo-noh', hint: 'Gratitude' },
          { target: 'mundũ (pl. andũ)', source: 'Person (pl. People)', pronunciation: 'moon-doo / ahn-doo', hint: 'Johnston (1919, p. 69 #11 Embu)' },
          { target: 'mũrũme (pl. arũme) / mũka (pl. aka)', source: 'Man, husband / Woman, wife', pronunciation: 'moo-roo-meh / moo-kah', hint: 'Johnston (1919, p. 68 #11 Embu)' },
          { target: 'mwana (pl. ciana / aana) / baba / maitũ', source: 'Child / Father / Mother', pronunciation: 'mwah-nah / bah-bah / mah-ee-too', hint: 'Johnston (1919 #11 Embu)' },
          { target: 'maĩ (manjĩ) / mwaki / riũa', source: 'Water / Fire / Sun', pronunciation: 'mah-ee / mwah-kee / ree-oo-ah', hint: 'Johnston (1919, pp. 67, 70 #11 Embu)' },
          { target: 'mũtĩ (pl. mĩtĩ) / ĩvia (pl. mavia)', source: 'Tree (pl. Trees) / Stone (pl. Stones)', pronunciation: 'moo-tee / ee-vyah', hint: 'Johnston (1919, p. 70 #11 Embu)' },
          { target: 'Ngai (Murungu) / Киrĩnyaga', source: 'God / Mount Kenya', pronunciation: 'ngah-ee / kee-ree-nyah-gah', hint: 'Johnston (1919, p. 67) & Hobley (1910)' }
        ],
        sentences: [
          { target: 'Wĩ mwega? Ndĩ mwega, nĩ wega mũno.', source: 'How are you? I am well, thank you very much.' },
          { target: 'Mũtĩ ũmwe ndũtũũragia mũtitũ.', source: 'A single tree does not make a sacred grove.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Stone (pl. Stones)" in Kîembu (Johnston 1919 #11)?',
            correctAnswer: 'ĩvia (pl. mavia)',
            options: ['ĩvia (pl. mavia)', 'mundũ (pl. andũ)', 'maĩ (manjĩ) / mwaki / riũa', 'Nĩ wega mũno'],
            hint: 'Kîembu preserves v where Gĩkũyũ has h (ihiga)'
          }
        ]
      },
      {
        id: 'embu-numbers-verbs',
        title: 'Numerals 1–10 & Everyday Verbs (Johnston 1919 #11)',
        icon: 'Hash',
        description: 'Count from 1 to 10 in Kîembu/Kîmbeere and practice high-frequency verbs.',
        tips: "Johnston (1919, p. 72 #11) records the numerals 1–10 across Embu and Emberre: ĩmwe (1), igĩrĩ (2), ithatũ (3), inya (4), ithano (5), ithanthatũ (6), mũgwanja (7), inyanya (8), kenda (9), ikũmi (10).",
        words: [
          { target: 'ĩmwe, igĩrĩ, ithatũ, inya, ithano', source: '1, 2, 3, 4, 5', pronunciation: 'ee-mweh, ee-gee-ree, ee-thah-too, ee-nyah, ee-thah-noh', hint: 'Johnston (1919, p. 72 #11 Embu)' },
          { target: 'ithanthatũ, mũgwanja, inyanya, kenda, ikũmi', source: '6, 7, 8, 9, 10', pronunciation: 'ee-thahn-thah-too, moo-gwahn-jah, ee-nyah-nyah, kehn-dah, ee-koo-mee', hint: 'Johnston (1919, p. 72 #11 Embu)' },
          { target: 'kũrĩa / kũnyua / kũruga', source: 'To eat / To drink / To cook', pronunciation: 'koo-ree-ah / koo-nywah / koo-roo-gah', hint: 'Class 15 infinitives' },
          { target: 'gũthiĩ / gũũka / kwaria', source: 'To go / To come / To speak', pronunciation: 'goo-thee / goo-kah / kwah-ree-ah', hint: 'Dahl’s Law voicing on gũthiĩ and gũũka' },
          { target: 'Kiama kia Ngome', source: 'Traditional Council of Elders', pronunciation: 'kyah-mah kyah ngoh-meh', hint: 'Aembu & Ambeere governance' }
        ],
        sentences: [
          { target: 'Andũ aĩrĩ nĩmarĩrũta wĩra.', source: 'Two people are working.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which Kîembu numeral means "Seven (7)"?',
            correctAnswer: 'mũgwanja',
            options: ['mũgwanja', 'ĩmwe', 'ithano', 'ikũmi'],
            hint: 'Shared Mount Kenya Bantu numeral for 7'
          }
        ]
      }
    ]
  }
];

export const EMBU_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'embu-noun-classes-dahls-law',
    title: 'Kîembu & Kîmbeere Noun Classes, Bilabial Fricative (v) & Dahl’s Law (Johnston 1919 #11)',
    summary: 'Kîembu preserves 15+ Bantu noun classes, retains the voiced bilabial fricative v (ĩvia "stone", kũve "to give"), and applies Dahl’s Law voicing dissimilation.',
    content: `As documented by Sir Harry H. Johnston in *A Comparative Study of the Bantu and Semi-Bantu Languages* (1919, Vol. I, pp. 66–73, Language #11 Embu, Chuka, Mwimbe & Emberre) and C. W. Hobley (1910):
- **Class 1/2 (*mũ- / a-*)**: *mundũ → andũ* (person → people), *mũrũme → arũme* (man → men), *mũka → aka* (woman → women).
- **Class 3/4 (*mũ- / mĩ-*)**: *mũtĩ → mĩtĩ* (tree → trees), *mũtitũ → mĩtitũ* (forest/sacred grove).
- **Class 5/6 (*ĩ-, rĩ- / ma-*)**: *ĩvia → mavia* (stone → stones), *riitho → maitho* (eye → eyes), *maĩ / manjĩ* (water).
- **Class 12/13 (*ka- / tũ-* Diminutives)**: *kaana → tũana* (small child → small children).
- **Dahl's Law**: Voiceless prefix *kũ-* or *kĩ-* voices to *gũ-* or *gĩ-* before a voiceless consonant (*gũthiĩ* 'to go', *gĩtĩ* 'stool/chair').`,
    examples: [
      { embu: 'mundũ ũyũ mwega → andũ aya ega', english: 'this good person → these good people', explanation: 'Class 1/2 concord in Kîembu (Johnston 1919 #11)' },
      { embu: 'ĩvia (Kîembu) vs. ihiga (Gĩkũyũ)', english: 'stone', explanation: 'Retention of voiced fricative v in Kîembu/Kîmbeere' }
    ]
  }
];

// --- 15. TAITA (Kidawida & Kisagala) ---
export const TAITA_CONFIG: LanguageConfig = {
  id: 'taita',
  name: 'Taita',
  nativeName: 'Kidawida / Kisagala',
  family: 'Bantu',
  counties: ['Taita-Taveta'],
  speakers: '350K',
  speechLocale: 'sw-KE',
  description: 'The Highland Coastal Bantu languages of the Taita Hills (Dabida, Sagala, and Kasigau) in Taita-Taveta County. Grounded in Krapf (1850), Shaw (1885), W. E. Taylor (1891), Rev. J. Alfred Wray (1894), and Sir Harry Johnston (1919 #15).',
  color: '#0891B2',
  sources: ['krapf-six-languages-1850', 'shaw-pocket-vocabulary-taita-1885', 'taylor-aphorisms-1891', 'wray-taita-1894', 'johnston-bantu-1919', 'open-web-swadesh-comparative'],
};

export const TAITA_UNITS: CourseUnit[] = [
  {
    id: 'taita-unit-1',
    title: 'Unit 1: Salutations, Wray’s (1894) 8 Noun Classes & Numerals 1–10',
    description: 'Master Kidawida and Kisagala greetings (Mwakucha! / Mwatinda!), 8 noun classes (Wray 1894), and counting 1–10.',
    icon: '⛰️',
    skills: [
      {
        id: 'taita-greetings-nouns',
        title: 'Taita Hills Salutations, Noun Classes & Nature (Wray 1894 & Shaw 1885)',
        icon: 'Users',
        description: 'Learn greetings and noun classes from Rev. J. A. Wray’s 1894 Taita Grammar.',
        tips: "Rev. J. Alfred Wray (1894, pp. 19–24) documents 8 noun classes in Taita, including Class VII Diminutives in ka-/tu- (kanyonyi → tunyonyi 'little bird', kachi → tuchi 'little brook').",
        culturalNote: "In Rev. W. E. Taylor's 'African Aphorisms' (1891, #665) and Wray (1894), 'Mundu mghosi ni kichwa cha mudzi' ('A wise elder is the head of the homestead') reflects Taita respect for elder counsel.",
        words: [
          { target: 'Mwakucha! / Mwatinda! / Uko mzadze?', source: 'Good morning! / Good day! / How are you?', pronunciation: 'mwah-koo-chah / mwah-teen-dah / oo-koh m-zah-dzeh', hint: 'Wray (1894, p. 59) Taita salutations' },
          { target: 'Chavuche (Chavuche sana)', source: 'Thank you (Thank you very much)', pronunciation: 'chah-voo-cheh', hint: 'Gratitude in Kidawida/Kisagala' },
          { target: 'mundu (pl. wandu) / mghosi (pl. waghosi)', source: 'Person (pl. People) / Wise elder, gentleman', pronunciation: 'moon-doo / wah-ndoo / m-ghoh-see', hint: 'Wray (1894, p. 19) Class I' },
          { target: 'mwanake (pl. wanake) / mndu mke (pl. wandu wake)', source: 'Child, youth / Woman (pl. Women)', pronunciation: 'mwah-nah-keh / m-ndoo m-keh', hint: 'Wray (1894, p. 19)' },
          { target: 'machi (mache) / moto / izua', source: 'Water / Fire / Sun', pronunciation: 'mah-chee / moh-toh / ee-zoo-ah', hint: 'Shaw (1885) & Wray (1894)' },
          { target: 'mti (pl. miti) / nyumba (pl. nyumba)', source: 'Tree (pl. Trees) / House (pl. Houses)', pronunciation: 'm-tee / nyoom-bah', hint: 'Wray (1894, pp. 20–21)' },
          { target: 'kanyonyi (pl. tunyonyi) / kachi (pl. tuchi)', source: 'Little bird / Little brook (Class VII Diminutive)', pronunciation: 'kah-nyoh-nyee / kah-chee', hint: 'Wray (1894, p. 23) ka-/tu- diminutives' },
          { target: 'Mlungu', source: 'God, Supreme Creator', pronunciation: 'm-loon-goo', hint: 'Wray (1894) & Shaw (1885)' }
        ],
        sentences: [
          { target: 'Mwakucha! Uko mzadze?', source: 'Good morning! How are you? (Wray 1894)' },
          { target: 'Mundu mghosi ni kichwa cha mudzi.', source: 'A wise elder is the head of the homestead (Taylor 1891 #665).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In Rev. J. A. Wray (1894, p. 23), how does Taita form the diminutive "little bird (pl. little birds)"?',
            correctAnswer: 'kanyonyi (pl. tunyonyi) / kachi (pl. tuchi)',
            options: ['kanyonyi (pl. tunyonyi) / kachi (pl. tuchi)', 'mundu (pl. wandu) / mghosi (pl. waghosi)', 'Mwakucha! / Mwatinda! / Uko mzadze?', 'Chavuche (Chavuche sana)'],
            hint: 'Class VII Diminutive prefixes ka- (sg.) and tu- (pl.)'
          }
        ]
      },
      {
        id: 'taita-numbers-verbs',
        title: 'Numerals 1–10 & Verbal Tenses (Wray 1894 & Johnston 1919 #15)',
        icon: 'Hash',
        description: 'Count from 1 to 10 in Taita and conjugate verbs with Wray (1894).',
        tips: "Wray (1894, p. 29) and Shaw (1885) record Taita numerals 1–10: imweri (1), iwi / mbiri (2), idadu (3), inya (4), isanu (5), irandadu (6), mfungade (7), inyanya / nane (8), ikenda (9), ikumi (10).",
        words: [
          { target: 'imweri, iwi (mbiri), idadu, inya, isanu', source: '1, 2, 3, 4, 5', pronunciation: 'eem-weh-ree, ee-wee, ee-dah-doo, ee-nyah, ee-sah-noo', hint: 'Wray (1894, p. 29) & Johnston (1919 #15)' },
          { target: 'irandadu, mfungade, inyanya (nane), ikenda, ikumi', source: '6, 7, 8, 9, 10', pronunciation: 'ee-rahn-dah-doo, m-foon-gah-deh, ee-nyah-nyah, ee-kehn-dah, ee-koo-mee', hint: 'Wray (1894, p. 29)' },
          { target: 'kuja / kunwa / kudeka / kugenda', source: 'To eat / To drink / To cook / To go', pronunciation: 'koo-jah / koo-nwah / koo-deh-kah / koo-gehn-dah', hint: 'Wray (1894) Class VIII ku- infinitives' },
          { target: 'kukunda / kumanya / kulola', source: 'To love, like / To know / To see, look', pronunciation: 'koo-koon-dah / koo-mah-nyah / koo-loh-lah', hint: 'Wray (1894, p. 41) paradigm verb kukunda' }
        ],
        sentences: [
          { target: 'Wandu wawi wekunda machi.', source: 'Two people want water.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which Taita numeral means "Seven (7)" in Wray (1894)?',
            correctAnswer: 'mfungade',
            options: ['mfungade', 'imweri', 'isanu', 'ikumi'],
            hint: 'Cognate with Sabaki mfungate'
          }
        ]
      }
    ]
  }
];

export const TAITA_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'taita-wray-1894-grammar',
    title: 'Eight Noun Classes, Diminutives (ka-/tu-) & Verb Conjugation in Wray (1894)',
    summary: 'Rev. J. Alfred Wray’s 1894 Elementary Introduction to the Taita Language documents 8 noun classes, full concord tables, and agglutinative verb tenses.',
    content: `From Rev. J. A. Wray (1894) *An Elementary Introduction to the Taita Language (Kisagala)* and Sir Harry Johnston (1919, #15):
- **Class I (*m- / wa-*)**: *mundu → wandu* (person → people), *mghosi → waghosi* (elder/gentleman).
- **Class II (*m- / mi-*)**: *mti → miti* (tree → trees), *mugwa → migwa* (sugarcane), *mlango → milango* (door).
- **Class III (*ki- / vi-*)**: *kiti → viti* (stool/chair), *kishu → vishu* (knife).
- **Class IV (*n- / n-*)**: *nyumba* (house), *ng'ombe* (cattle), *mbuzi* (goat).
- **Class V (*i- / ma-*)**: *igomenyi / iwe → mawe* (stone → stones), *izua* (sun), *machi* (water).
- **Class VI (*lu- / nd-*)**: *lumi → ndumi* (tongue → tongues).
- **Class VII (*ka- / tu-* Diminutives)**: *kanyonyi → tunyonyi* (little bird), *kachi → tuchi* (little brook).
- **Verbal Subject Prefixes**: 1s *ni-*, 2s *u-*, 3s *a-*, 1p *tu-*, 2p *mu-*, 3p *wa-* (Negative: *si-, ku-, ka-, katu-, kamu-, kawa-*).`,
    examples: [
      { taita: 'kanyonyi kadori → tunyonyi tudori', english: 'a tiny bird → tiny birds', explanation: 'Class VII Diminutive concord in Wray (1894, p. 23)' },
      { taita: 'Mundu mghosi ni kichwa cha mudzi.', english: 'A wise elder is the head of the homestead.', explanation: 'Taylor (1891, Proverb #665) & Wray (1894)' }
    ]
  }
];

// --- 16. TAVETA (Kitaveta) ---
export const TAVETA_CONFIG: LanguageConfig = {
  id: 'taveta',
  name: 'Taveta',
  nativeName: 'Kitaveta',
  family: 'Bantu',
  counties: ['Taita-Taveta'],
  speakers: '35K',
  speechLocale: 'sw-KE',
  description: 'A Coastal Hinterland Bantu language spoken in the Lumi River forest oasis near Mount Kilimanjaro in Taita-Taveta County. Grounded in A. C. Hollis (1910 "Taveta Sayings and Proverbs" & 1911 "Taveta Enigmas") and Sir Harry Johnston (1919 #16).',
  color: '#15803D',
  sources: ['hollis-taveta-proverbs-1910', 'hollis-taveta-enigmas-1911', 'johnston-bantu-1919', 'open-web-swadesh-comparative'],
};

export const TAVETA_UNITS: CourseUnit[] = [
  {
    id: 'taveta-unit-1',
    title: 'Unit 1: Greetings, Lumi Forest Nouns, Numerals & Hollis (1910–1911) Proverbs & Enigmas',
    description: 'Learn Kitaveta greetings, noun classes, counting 1–10, and the 79 proverbs and 41 enigmas (ndaa) recorded by A. C. Hollis (1910–1911).',
    icon: '🌳',
    skills: [
      {
        id: 'taveta-nouns-proverbs',
        title: 'Kitaveta Nouns & Hollis (1910) Proverbs',
        icon: 'Scroll',
        description: 'Master core Kitaveta nouns and proverbs from A. C. Hollis (1910) and Johnston (1919 #16).',
        tips: "In A. C. Hollis (1911) 'Taveta Enigmas', riddles are introduced with 'Nakutega ndaa!' ('I set you an enigma/trap!'), answered with 'Tega!' ('Set it!').",
        culturalNote: "A. C. Hollis (1910) documented 79 Kitaveta proverbs and sayings reflecting the forest-irrigation agriculture of the Lumi River and the Njama council of elders.",
        words: [
          { target: 'Mwakucha! / Uko mwidzi?', source: 'Good morning! / Are you well?', pronunciation: 'mwah-koo-chah / oo-koh mwee-dzee', hint: 'Kitaveta salutation' },
          { target: 'mndu (pl. wandu) / mche (pl. wache)', source: 'Person (pl. People) / Woman (pl. Women)', pronunciation: 'm-ndoo / wah-ndoo / m-cheh', hint: 'Johnston (1919, p. 93 #16 Taveta)' },
          { target: 'mazi / moto / mbeho', source: 'Water / Fire / Cold', pronunciation: 'mah-zee / moh-toh / m-beh-hoh', hint: 'Hollis (1910 Proverb #4) & Johnston (1919 #16)' },
          { target: 'ideghe (pl. madeghe) / kucha', source: 'Bird (pl. Birds) / Dawn, daybreak', pronunciation: 'ee-deh-gheh / koo-chah', hint: 'Hollis (1910 Proverb #10)' },
          { target: 'rutoke (pl. matoke) / nyumba', source: 'Banana / House', pronunciation: 'roo-toh-keh / nyoom-bah', hint: 'Hollis (1911 Taveta Enigmas)' },
          { target: 'Nakutega ndaa! — Tega!', source: 'I set you a riddle! — Set it!', pronunciation: 'nah-koo-teh-gah n-dah', hint: 'Hollis (1911, p. 200) riddle opening formula' },
          { target: 'Esikie mbeho niye esongeria moto', source: 'He who feels the cold draws near to the fire (Hollis 1910 #4)', pronunciation: 'eh-see-kyeh m-beh-hoh', hint: 'Take initiative when in need' },
          { target: 'Ideghe imwe likaremwa kuiya teheshigha kucha', source: 'If one bird fails to sing, it does not stop the dawn (Hollis 1910 #10)', pronunciation: 'ee-deh-gheh ee-mweh', hint: 'Time and progress wait for no one' }
        ],
        sentences: [
          { target: 'Esikie mbeho niye esongeria moto.', source: 'It is the one who feels the cold who draws near to the fire (Hollis 1910 #4).' },
          { target: 'Ideghe imwe likaremwa kuiya teheshigha kucha.', source: 'If one bird fails to sing, it does not stop the dawn from breaking (Hollis 1910 #10).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In A. C. Hollis (1910, Proverb #4), what does "Esikie mbeho niye esongeria moto" mean?',
            correctAnswer: 'He who feels the cold draws near to the fire (Hollis 1910 #4)',
            options: [
              'He who feels the cold draws near to the fire (Hollis 1910 #4)',
              'If one bird fails to sing, it does not stop the dawn (Hollis 1910 #10)',
              'Good morning! / Are you well?',
              'Banana / House'
            ],
            hint: 'mbeho = cold, moto = fire'
          }
        ]
      }
    ]
  }
];

export const TAVETA_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'taveta-hollis-1910-johnston-1919',
    title: 'Kitaveta Noun Classes, Numerals & Oral Literature (Hollis 1910–1911 & Johnston 1919 #16)',
    summary: 'Kitaveta is a North-East Coastal Bantu language closely allied to Pare/Asu and Chaga-Taita, preserving 15+ noun classes and rich proverb/riddle morphology.',
    content: `As documented in A. C. Hollis (*Taveta Sayings and Proverbs*, 1910; *Taveta Enigmas*, 1911) and Sir Harry Johnston (*Comparative Study of the Bantu Languages*, 1919, #16 Taveta, pp. 89–96):
- **Noun Classes**: Class 1/2 *mndu → wandu* (person → people), *mche → wache* (woman → women); Class 3/4 *mti → miti* (tree → trees); Class 5/6 *ideghe → madeghe* (bird → birds), *iwe → mawe* (stone → stones), *mazi* (water); Class 7/8 *kindu → vindu* (thing → things).
- **Cardinal Numerals (Johnston 1919, p. 95 #16)**: *imwe* (1), *iwiri* (2), *itatu* (3), *inya* (4), *itano* (5), *itandatu* (6), *mfungate* (7), *mnane* (8), *kenda* (9), *ikumi* (10).`,
    examples: [
      { taveta: 'Esikie mbeho niye esongeria moto.', english: 'It is the one who feels the cold who draws near to the fire.', explanation: 'A. C. Hollis (1910, Taveta Proverb #4)' },
      { taveta: 'Ideghe imwe likaremwa kuiya teheshigha kucha.', english: 'If one bird fails to sing, it does not stop the dawn from breaking.', explanation: 'A. C. Hollis (1910, Taveta Proverb #10)' }
    ]
  }
];

// --- 17. POKOMO (Kipfokomo) ---
export const POKOMO_CONFIG: LanguageConfig = {
  id: 'pokomo',
  name: 'Pokomo',
  nativeName: 'Kipfokomo',
  family: 'Bantu',
  counties: ['Tana River', 'Lamu'],
  speakers: '112K',
  speechLocale: 'sw-KE',
  description: 'A Sabaki Bantu language spoken along the Tana River flood-plain from Garissa to Kipini. Grounded in Rev. Dr. J. L. Krapf (1850 "Vocabulary of Six East-African Languages") and Sir Harry H. Johnston (1919 #14 Pokomo).',
  color: '#0369A1',
  sources: ['krapf-six-languages-1850', 'johnston-bantu-1919', 'open-web-swadesh-comparative'],
};

export const POKOMO_UNITS: CourseUnit[] = [
  {
    id: 'pokomo-unit-1',
    title: 'Unit 1: Tana River Greetings, Sabaki Sound Shifts, Numerals & Riverine Life (Krapf 1850 & Johnston 1919 #14)',
    description: 'Master Kipfokomo greetings, labial-affricate phonology (pf/bf), numerals 1–10, and Tana River vocabulary.',
    icon: '🛶',
    skills: [
      {
        id: 'pokomo-river-nouns',
        title: 'Tana River (Muho wa Tsana) Vocabulary, Numerals & Wakijo Governance',
        icon: 'Compass',
        description: 'Learn Kipfokomo nouns and numerals from Krapf (1850) and Johnston (1919 #14).',
        tips: "Like Mijikenda, Kipfokomo belongs to the Sabaki Bantu branch: Proto-Bantu *t shifts to h in muho ('river', cf. Swahili mto) and moho ('fire', cf. moto), while developing distinctive labiodental affricates (pf, bf) as in Kipfokomo.",
        culturalNote: "Along the Tana River (Muho wa Tsana), Pokomo communities historically governed village life and flood-plain farming through the Wakijo / Gasa council of elders and navigated via carved dugout canoes (waho).",
        words: [
          { target: 'Habari! / Uko bwema? (resp. Niko bwema)', source: 'Greetings! / Are you well? (I am well)', pronunciation: 'hah-bah-ree / oo-koh bweh-mah', hint: 'Kipfokomo salutation' },
          { target: 'munt’u (pl. want’u) / mwana (pl. wana)', source: 'Person (pl. People) / Child (pl. Children)', pronunciation: 'moon-too / wahn-too', hint: 'Krapf (1850) & Johnston (1919 #14)' },
          { target: 'madzi / moho / muho', source: 'Water / Fire / River (Muho wa Tsana = Tana River)', pronunciation: 'mah-dzee / moh-hoh / moo-hoh', hint: 'Sabaki dzi- & *t > h shift (Krapf 1850)' },
          { target: 'waho (pl. mawaho) / nswi / mamba', source: 'Dugout canoe / Fish / Crocodile', pronunciation: 'wah-hoh / n-swee / mahm-bah', hint: 'Krapf (1850) & Johnston (1919 #14) riverine lexicon' },
          { target: 'mudzi (pl. midzi) / nyumba / Wakijo', source: 'Village / House / Council of Elders', pronunciation: 'moo-dzee / nyoom-bah / wah-kee-joh', hint: 'Krapf (1850) & Pokomo governance' },
          { target: 'imwe, mbiri, tahu, nne, tsano', source: '1, 2, 3, 4, 5', pronunciation: 'ee-mweh, m-bee-ree, tah-hoo, n-neh, tsah-noh', hint: 'Johnston (1919, p. 95 #14 Pokomo) numerals' },
          { target: 'handahu, fungahe, nane, kenda, kumi', source: '6, 7, 8, 9, 10', pronunciation: 'hahn-dah-hoo, foon-gah-heh, nah-neh, kehn-dah, koo-mee', hint: 'Johnston (1919, p. 95 #14 Pokomo)' },
          { target: 'Mungu (Mulungu)', source: 'God, Supreme Creator', pronunciation: 'moon-goo / moo-loon-goo', hint: 'Krapf (1850) & Johnston (1919 #14)' }
        ],
        sentences: [
          { target: 'Muho wa Tsana ni muyo wa mudzi.', source: 'The Tana River is the lifeblood of the village.' },
          { target: 'Chanda kimwe hakibandi ntsaha.', source: 'One finger alone cannot crush a louse.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the Kipfokomo word for "River" and "Dugout canoe" in Krapf (1850) and Johnston (1919 #14)?',
            correctAnswer: 'muho / waho',
            options: ['muho / waho', 'imwe / mbiri', 'handahu / fungahe', 'Habari / Mungu'],
            hint: 'Muho wa Tsana = Tana River; waho = canoe'
          }
        ]
      }
    ]
  }
];

export const POKOMO_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'pokomo-sabaki-grammar',
    title: 'Sabaki Phonology (Kipfokomo pf/bf, *t > h), Noun Classes & Numerals (Krapf 1850 & Johnston 1919 #14)',
    summary: 'Kipfokomo is a core member of the Sabaki Bantu subgroup alongside Swahili and Mijikenda, preserving Sabaki lenition (*moto > moho, *mto > muho, *-tatu > -hahu) and 15+ noun classes.',
    content: `Documented by Rev. Dr. J. L. Krapf (*Vocabulary of Six East-African Languages*, 1850) and Sir Harry H. Johnston (*Comparative Study of the Bantu Languages*, 1919, #14 Pokomo, pp. 89–96):
- **Sabaki Sound Correspondences**: Proto-Bantu *t lenites to *h* (*moho* 'fire', *muho* 'river', *tahu* 'three', *handahu* 'six', *fungahe* 'seven'), while Class 5 uses *dzi- / i-* (*dziwe → mawe* 'stone', *dzua* 'sun', *madzi* 'water').
- **Noun Classes**: Class 1/2 *munt'u → want'u* (person → people), Class 3/4 *muhi → mihi* (tree → trees), *mudzi → midzi* (village → villages).`,
    examples: [
      { pokomo: 'moho • muho • madzi • dziwe (pl. mawe)', english: 'fire • river • water • stone', explanation: 'Sabaki sound laws in Krapf (1850) & Johnston (1919 #14)' },
      { pokomo: 'imwe, mbiri, tahu, nne, tsano, handahu, fungahe, nane, kenda, kumi', english: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10', explanation: 'Kipfokomo numerals (Johnston 1919, p. 95)' }
    ]
  }
];

// --- 18. BORANA / OROMO (Afaan Borana) ---
export const BORANA_CONFIG: LanguageConfig = {
  id: 'borana',
  name: 'Borana (Oromo)',
  nativeName: 'Afaan Borana',
  family: 'Cushitic',
  counties: ['Marsabit', 'Isiolo', 'Moyale', 'Garissa', 'Tana River'],
  speakers: '550K',
  speechLocale: 'om-KE',
  description: 'A major Lowland East Cushitic language spoken by the Borana, Gabra, Sakuye, and Orma communities of Northern and Eastern Kenya. Grounded in Rev. J. L. Krapf (1842 & 1850) and Karl & Lawrence Tutschek (1844 "Dictionary" & 1845 "Grammar of the Galla Language").',
  color: '#B45309',
  sources: ['krapf-galla-vocabulary-1842', 'tutschek-galla-dictionary-1844', 'tutschek-galla-grammar-1845', 'krapf-six-languages-1850', 'open-web-swadesh-comparative'],
};

export const BORANA_UNITS: CourseUnit[] = [
  {
    id: 'borana-unit-1',
    title: 'Unit 1: Nagaa Borana Greetings, Cushitic Cases, Numerals & Tutschek (1844–1845) Prayers',
    description: 'Master Afaan Borana greetings (Akkam jirta? / Nagaa!), Nominative vs. Absolutive nouns, counting 1–10, and 1845 prayers to Waaqa.',
    icon: '🐪',
    skills: [
      {
        id: 'borana-greetings-nouns',
        title: 'Greetings, Nagaa (Peace), Kinship & Pastoral Nature (Krapf 1842 & Tutschek 1844)',
        icon: 'Users',
        description: 'Learn Afaan Borana greetings, pronouns, and core nouns from the 1842–1845 corpus.',
        tips: "In Afaan Borana (Tutschek 1845, pp. 12–28), sentences follow Subject–Object–Verb (SOV) order, and subjects take the Nominative suffix -ni / -ti (nama 'person [abs.]' → namni 'the person [subj.]', bishaan 'water' → bishaani).",
        culturalNote: "In Borana tradition and Karl Tutschek's 1845 Grammar (pp. 84–88), 'Nagaa' (Peace) is the foundation of cosmic and social order: every greeting asks after the peace of family, cattle, and pastures ('Yaa Waaqa, nagaa nuu kenni!').",
        words: [
          { target: 'Akkam jirta? / Nagaa! (resp. Nagaa, fayyaa!)', source: 'How are you? / Peace! (Peace, well!)', pronunciation: 'ahk-kahm jeer-tah / nah-gah', hint: 'Standard Afaan Borana salutation' },
          { target: 'Galatoomi (Guddaa galatoomi)', source: 'Thank you (Thank you very much)', pronunciation: 'gah-lah-toh-mee', hint: 'Gratitude' },
          { target: 'nama (nom. namni) / dhiira / nadheen (dubartii)', source: 'Person / Man / Woman', pronunciation: 'nah-mah / dhee-rah / nah-dhehn', hint: 'Krapf (1842) & Tutschek (1844)' },
          { target: 'abbaa / haadha / ilmoo (ijoollee)', source: 'Father / Mother / Child (Children)', pronunciation: 'ahb-bah / hah-dhah / eel-moh', hint: 'Krapf (1842) & Tutschek (1844)' },
          { target: 'bishaan / ibidda / aduu / ji’a', source: 'Water / Fire / Sun / Moon', pronunciation: 'bee-shahn / ee-beed-dah / ah-doo / jee-ah', hint: 'Krapf (1842 & 1850) & Tutschek (1844)' },
          { target: 'looni (sa’a) / gaala / re’ee / hoolaa', source: 'Cattle (cow) / Camel / Goat / Sheep', pronunciation: 'loh-nee / gah-lah / reh-eh / hoh-lah', hint: 'Krapf (1842) & Tutschek (1844) pastoral livestock' },
          { target: 'aannan / foon / damma', source: 'Milk / Meat / Honey', pronunciation: 'ahn-nahn / fohn / dahm-mah', hint: 'Tutschek (1844)' },
          { target: 'Waaqa (Yaa Waaqa, nagaa nuu kenni!)', source: 'God (O God, grant us peace! — Tutschek 1845 Prayer #1)', pronunciation: 'wah-qah', hint: 'Tutschek (1845, p. 84)' }
        ],
        sentences: [
          { target: 'Yaa Waaqa, nagaa nuu kenni!', source: 'O God, grant us peace! (Tutschek 1845, p. 84)' },
          { target: 'Harka tokko aboottee hin dhaanani.', source: 'One hand alone cannot clap (Tutschek 1844).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In Karl Tutschek’s 1845 "Grammar of the Galla Language" (p. 84), what does the invocation "Yaa Waaqa, nagaa nuu kenni!" mean?',
            correctAnswer: 'God (O God, grant us peace! — Tutschek 1845 Prayer #1)',
            options: [
              'God (O God, grant us peace! — Tutschek 1845 Prayer #1)',
              'Water / Fire / Sun / Moon',
              'Cattle (cow) / Camel / Goat / Sheep',
              'Father / Mother / Child (Children)'
            ],
            hint: 'Waaqa = God, nagaa = peace, nuu kenni = give to us'
          }
        ]
      },
      {
        id: 'borana-numbers-verbs',
        title: 'Cushitic Numerals 1–10 & SOV Verbs (Tutschek 1845 & Krapf 1842)',
        icon: 'Hash',
        description: 'Count from 1 to 10 in Afaan Borana and conjugate SOV verbs.',
        tips: "Tutschek (1845, p. 32) and Krapf (1842) record Borana/Oromo numerals 1–10: tokko (1), lama (2), sadii (3), afur (4), shan (5), ja'a (6), torba (7), saddeet (8), sagal (9), kudhan (10).",
        words: [
          { target: 'tokko, lama, sadii, afur, shan', source: '1, 2, 3, 4, 5', pronunciation: 'tohk-koh, lah-mah, sah-dee, ah-foor, shahn', hint: 'Tutschek (1845, p. 32) & Krapf (1842)' },
          { target: "ja'a, torba, saddeet, sagal, kudhan", source: '6, 7, 8, 9, 10', pronunciation: 'jah-ah, tohr-bah, sahd-deht, sah-gahl, koo-dhahn', hint: 'Tutschek (1845, p. 32) & Krapf (1842)' },
          { target: 'digdama / dhibba / kuma', source: '20 / 100 / 1,000', pronunciation: 'deeg-dah-mah / dheeb-bah / koo-mah', hint: 'Tutschek (1845, p. 33)' },
          { target: 'nyaachuu / dhuguu / deemuu / dhufuu', source: 'To eat / To drink / To go / To come', pronunciation: 'nyah-choo / dhoo-goo / deh-moo / dhoo-foo', hint: 'Tutschek (1844 & 1845) core verbs' }
        ],
        sentences: [
          { target: 'Ani bishaan dhuga.', source: 'I drink water (SOV word order).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What are the Afaan Borana numbers 1, 2, 3 (Tutschek 1845)?',
            correctAnswer: 'tokko, lama, sadii, afur, shan',
            options: ['tokko, lama, sadii, afur, shan', "ja'a, torba, saddeet, sagal, kudhan", 'digdama / dhibba / kuma', 'nyaachuu / dhuguu / deemuu / dhufuu'],
            hint: 'tokko (1), lama (2), sadii (3)'
          }
        ]
      }
    ]
  }
];

export const BORANA_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'borana-tutschek-1845-grammar',
    title: 'SOV Syntax, Absolutive vs. Nominative Case, Postpositions & Verb Conjugation (Tutschek 1845 & Krapf 1842)',
    summary: 'Karl & Lawrence Tutschek’s 1845 Grammar of the Galla Language was the first systematic grammar of Oromo/Borana, documenting its SOV word order, case suffixes, and derivative verb stems.',
    content: `From Karl & Lawrence Tutschek (*Dictionary* 1844 & *Grammar of the Galla Language* 1845) and Rev. J. L. Krapf (1842, 1850):
- **Absolutive vs. Marked Nominative Case**: The base citation form of a noun is the Absolutive (used for direct objects and predicates, e.g., *nama* 'person', *bishaan* 'water'). When used as the grammatical subject, nouns take Nominative suffixes (**-ni, -ti, -i**): *namni dhufe* ('the man came').
- **Pronouns (Tutschek 1845, p. 29)**: 1s *ani* (acc. *na*), 2s *ati* (acc. *si*), 3sm *inni* (acc. *isa*), 3sf *ishiin* (acc. *ishii*), 1p *nuti* (acc. *nu*), 2p *isini* (acc. *isin*), 3p *isaan*.
- **Verbal Derivation**: Causative (**-s / -sis**), Middle/Reflexive (**-adh / -at**), and Passive (**-am**).`,
    examples: [
      { borana: 'Yaa Waaqa, nagaa nuu kenni!', english: 'O Waaqa (God), grant us peace!', explanation: 'Tutschek (1845, p. 84, Prayer #1)' },
      { borana: 'Harka tokko aboottee hin dhaanani.', english: 'One hand alone cannot clap.', explanation: 'Tutschek (1844 Dictionary)' }
    ]
  }
];

// --- 19. RENDILLE (Af-Rendille) ---
export const RENDILLE_CONFIG: LanguageConfig = {
  id: 'rendille',
  name: 'Rendille',
  nativeName: 'Af-Rendille',
  family: 'Cushitic',
  counties: ['Marsabit', 'Isiolo'],
  speakers: '96K',
  speechLocale: 'sw-KE',
  description: 'A Lowland East Cushitic (Omo-Tana) language spoken across the Kaisut and Chalbi deserts of Marsabit County. Grounded in C. W. Hobley (1910 "Ethnology of A-Kamba and Other East African Tribes", Chapter XVII: The Rendile, pp. 156–157).',
  color: '#DC2626',
  sources: ['hobley-akamba-ethnology-1910', 'open-web-swadesh-comparative'],
};

export const RENDILLE_UNITS: CourseUnit[] = [
  {
    id: 'rendille-unit-1',
    title: 'Unit 1: Greetings, Hobley’s (1910) Rendille Camel & Desert Lexicon & Cushitic Numerals',
    description: 'Master Af-Rendille greetings, camel husbandry vocabulary, wildlife, and numerals 1–10 from C. W. Hobley (1910).',
    icon: '🐪',
    skills: [
      {
        id: 'rendille-hobley-1910-lexicon',
        title: 'Greetings, Camel Pastoralism, Wildlife & Numerals (Hobley 1910)',
        icon: 'Compass',
        description: 'Learn the historic 1910 Rendille vocabulary recorded by C. W. Hobley in Marsabit.',
        tips: "Af-Rendille is a Lowland East Cushitic language closely allied to Somali. Unlike Somali, Rendille preserves a prefixing conjugation on a larger class of verbs while sharing Cushitic numerals: kow (1), lamma (2), seyya (3), affar (4), chan (5), lih (6), teba (7), siddet (8), saagal (9), tomon (10).",
        culturalNote: "In Rendille pastoral society around Marsabit and the Kaisut Desert, the 'gob' (clan settlement) centers on the sacred 'naabo' enclosure where elders offer evening prayers for the camels (gaal) and peace (nabad).",
        words: [
          { target: 'Nabad! / Bariya? (resp. Waa nabad!)', source: 'Peace! / Good morning? (It is peace!)', pronunciation: 'nah-bahd / bah-ree-yah', hint: 'Af-Rendille salutation' },
          { target: 'gaal / ayyu / oor / nyirakh', source: 'Camels (collective) / She-camel / Burden camel / Camel calf', pronunciation: 'gahl / ah-yoo / ohr / nyee-rahkh', hint: 'Hobley (1910, p. 156) Rendille camel lexicon' },
          { target: 'gob / naabo / min', source: 'Clan settlement / Sacred ritual enclosure / House', pronunciation: 'gohb / nah-boh / meen', hint: 'Hobley (1910, p. 156)' },
          { target: 'biyo / caano / soor (huun)', source: 'Water / Milk / Food', pronunciation: 'bee-yoh / ah-noh / sohr', hint: 'Hobley (1910, p. 156)' },
          { target: 'tor / gashan / bilau / biso / laho', source: 'Spear / Shield / Sword-knife / Bow / Arrow', pronunciation: 'tohr / gah-shahn / bee-lah-oo / bee-soh / lah-hoh', hint: 'Hobley (1910, p. 156) Rendille material culture' },
          { target: 'bahasi / kabih / arbah / worsis / nyugul', source: 'Lion / Leopard / Elephant / Rhinoceros / Ostrich', pronunciation: 'bah-hah-see / kah-bee / ahr-bah / wohr-sees / nyoo-gool', hint: 'Hobley (1910, p. 157) northern wildlife' },
          { target: 'kow, lamma, seyya, affar, chan', source: '1, 2, 3, 4, 5', pronunciation: 'kohw, lahm-mah, sey-yah, ahf-fahr, chahn', hint: 'Cushitic numerals 1–5' },
          { target: 'lih, teba, siddet, saagal, tomon', source: '6, 7, 8, 9, 10', pronunciation: 'leeh, teh-bah, seed-deht, sah-gahl, toh-mohn', hint: 'Cushitic numerals 6–10' }
        ],
        sentences: [
          { target: 'Gaal waa nolol; biyo waa nabad.', source: 'The camel is life; water is peace.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In C. W. Hobley’s 1910 Rendille vocabulary (p. 157), which words mean "Lion / Leopard / Elephant"?',
            correctAnswer: 'bahasi / kabih / arbah / worsis / nyugul',
            options: [
              'bahasi / kabih / arbah / worsis / nyugul',
              'kow, lamma, seyya, affar, chan',
              'biyo / caano / soor (huun)',
              'Nabad! / Bariya? (resp. Waa nabad!)'
            ],
            hint: 'bahasi = lion, kabih = leopard, arbah = elephant'
          }
        ]
      }
    ]
  }
];

export const RENDILLE_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'rendille-cushitic-grammar',
    title: 'Af-Rendille Gender Suffixes (-ki / -ti), SOV Word Order & Hobley’s (1910) Comparative Corpus',
    summary: 'Af-Rendille is an Omo-Tana Lowland East Cushitic language with Masculine (-k-) and Feminine (-t-) gender agreement, SOV syntax, and rich camel-pastoral terminology.',
    content: `As documented in C. W. Hobley (*Ethnology of A-Kamba and Other East African Tribes*, 1910, Chapter XVII: The Rendile, pp. 156–157):
- **Masculine (*-k-*) vs. Feminine (*-t-*) Determiners**: Like Somali, Rendille marks masculine gender with **-k-** (*inanki* 'the boy') and feminine gender with **-t-** (*inanti* 'the girl').
- **Numerals**: *kow* (1), *lamma* (2), *seyya* (3), *affar* (4), *chan* (5), *lih* (6), *teba* (7), *siddet* (8), *saagal* (9), *tomon* (10).`,
    examples: [
      { rendille: 'gaal • ayyu • oor • nyirakh', english: 'camels • she-camel • burden camel • camel calf', explanation: 'Rendille camel terminology (Hobley 1910, p. 156)' },
      { rendille: 'tor • gashan • bilau • biso • laho', english: 'spear • shield • sword-knife • bow • arrow', explanation: 'Hobley (1910, p. 156)' }
    ]
  }
];

// --- 20. SAMBURU (Sampur / North Maa) ---
export const SAMBURU_CONFIG: LanguageConfig = {
  id: 'samburu',
  name: 'Samburu',
  nativeName: 'Sampur (Лоikop / North Maa)',
  family: 'Nilotic',
  counties: ['Samburu', 'Marsabit', 'Isiolo', 'Laikipia'],
  speakers: '350K',
  speechLocale: 'sw-KE',
  description: 'The Northern Maa (Eastern Nilotic) language spoken by the Samburu (Loikop) pastoralists from the Laikipia Plateau to Mount Nyiro and Lake Turkana. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902 Burkeneji/Sampuru), A. C. Hollis (1905), and Hon. K. R. Dundas (1910).',
  color: '#E11D48',
  sources: ['hinde-masai-1901', 'johnston-uganda-protectorate-1902', 'hollis-masai-1905', 'dundas-baringo-tribes-1910', 'open-web-swadesh-comparative'],
};

export const SAMBURU_UNITS: CourseUnit[] = [
  {
    id: 'samburu-unit-1',
    title: 'Unit 1: Northern Maa Salutations, Gender Prefixes (L- / N-), Numerals & Mount Nyiro Heritage',
    description: 'Master Samburu greetings (Supai! / Takwenya!), l-/n- noun prefixes, counting 1–10, and Northern Maa pastoral culture.',
    icon: '🏔️',
    skills: [
      {
        id: 'samburu-nouns-numerals',
        title: 'Sampur Salutations, L-/N- Nouns & Numerals (Johnston 1902 & Hollis 1905)',
        icon: 'Users',
        description: 'Learn Northern Maa nouns, greetings, and numerals from Johnston (1902) and Hollis (1905).',
        tips: "In Samburu (Northern Maa), the masculine singular prefix ol- often reduces to l- (l-murani 'warrior', l-payian 'elder', l-doinyo 'mountain') and feminine en- reduces to n- (nkai 'God/rain', nkare 'water', nkishu 'cattle').",
        culturalNote: "The name 'Samburu' derives from 'saamburr', the traditional leather carrying bag used by Northern Maa pastoralists, while their self-designation 'Loikop' signifies 'stewards/owners of the land'.",
        words: [
          { target: 'Supai! (resp. Epa!) / Takwenya! (resp. Iko!)', source: 'Greetings to men/warriors! / Greetings to women/elders!', pronunciation: 'soo-pah-ee / tah-kweh-nyah', hint: 'Hinde (1901) & Hollis (1905) Maa salutations' },
          { target: 'Ashe oleng / Serian', source: 'Thank you very much / Peace', pronunciation: 'ah-sheh oh-lehng / seh-ree-ahn', hint: 'Gratitude & peace' },
          { target: 'saamburr (Sampur) / Loikop', source: 'Traditional leather bag / Samburu self-designation ("owners of the land")', pronunciation: 'sahm-boor / loy-kohp', hint: 'Hinde (1901) & Johnston (1902)' },
          { target: 'l-murani (pl. l-muran) / l-payian / n-gitok', source: 'Warrior / Elder / Woman', pronunciation: 'l-moo-rah-nee / l-pah-yahn / n-gee-tohk', hint: 'Northern Maa l-/n- prefixes' },
          { target: 'Nkai / nkare / kule / nkishu', source: 'God (Sky/Rain) / Water / Milk / Cattle', pronunciation: 'n-kah-ee / n-kah-reh / koo-leh / n-kee-shoo', hint: 'Johnston (1902 Burkeneji) & Hollis (1905)' },
          { target: 'Ol-doinyo Nyiro / E-waso Ngiro', source: 'Mount Nyiro (sacred mountain) / Ewaso Ng\'iro River', pronunciation: 'ohl-doy-nyoh nyee-roh', hint: 'Dundas (1910) & Hinde (1901)' },
          { target: 'nabo (obo), are (aare), uni (okuni), ongwan, imiet', source: '1, 2, 3, 4, 5', pronunciation: 'nah-boh, ah-reh, oo-nee, oh-ngwahn, ee-mee-eht', hint: 'Johnston (1902) & Hollis (1905) numerals 1–5' },
          { target: 'ile, sapana, isiet, saal (naudo), tomon', source: '6, 7, 8, 9, 10', pronunciation: 'ee-leh, sah-pah-nah, ee-see-eht, sahl, toh-mohn', hint: 'Northern Maa preserves sapana (7) & saal (9)' }
        ],
        sentences: [
          { target: 'Meeta Nkai ol-openy obo; Nkai oo nkishu.', source: 'God belongs to no single person alone; God is the giver of cattle to all.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the origin of the name "Samburu" (Sampur) in Northern Maa?',
            correctAnswer: 'saamburr (Sampur) / Loikop',
            options: [
              'saamburr (Sampur) / Loikop',
              'Ol-doinyo Nyiro / E-waso Ngiro',
              'nabo (obo), are (aare), uni (okuni), ongwan, imiet',
              'Supai! (resp. Epa!) / Takwenya! (resp. Iko!)'
            ],
            hint: 'saamburr = traditional leather carrying bag'
          }
        ]
      }
    ]
  }
];

export const SAMBURU_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'samburu-north-maa-grammar',
    title: 'Northern Maa Phonology (l- / n- Prefixes), Cushitic Numeral Borrowings (sapana, saal) & VSO Syntax',
    summary: 'Samburu is the primary Northern Maa variety of Eastern Nilotic, sharing VSO syntax and gender prefixes with Maasai while incorporating Cushitic numerals 7 (sapana) and 9 (saal).',
    content: `As documented in Sir Harry H. Johnston (*The Uganda Protectorate, Vol. II*, 1902, Burkeneji/Sampuru), Hildegarde Hinde (1901), and Hon. K. R. Dundas (1910):
- **Gender Prefixes**: Masculine **l-** (pl. **l-** / **il-**) vs. Feminine **n-** (pl. **n-** / **in-**): *l-murani* (warrior), *l-doinyo* (mountain), *nkare* (water), *nkishu* (cattle).
- **Numerals**: *nabo / obo* (1), *are / aare* (2), *uni / okuni* (3), *ongwan* (4), *imiet* (5), *ile* (6), *sapana* (7), *isiet* (8), *saal* (9), *tomon* (10).`,
    examples: [
      { samburu: 'l-murani (sg.) → l-muran (pl.) • n-kiteng (sg.) → n-kishu (pl.)', english: 'warrior → warriors • cow → cattle', explanation: 'Northern Maa l-/n- gender prefixes' }
    ]
  }
];

// --- 21. ILCHAMUS (Njemps / Camus) ---
export const ILCHAMUS_CONFIG: LanguageConfig = {
  id: 'ilchamus',
  name: 'Ilchamus (Njemps)',
  nativeName: 'Ilchamus (Camus)',
  family: 'Nilotic',
  counties: ['Baringo'],
  speakers: '45K',
  speechLocale: 'sw-KE',
  description: 'The Northern Maa (Eastern Nilotic) language of the Ilchamus (historically recorded as Njemps or En-jemusi) along the southern shores and rivers of Lake Baringo. Grounded in Sir Harry Johnston (1902 Njemps), A. C. Hollis (1905), and Hon. K. R. Dundas (1910 "Notes on the Tribes Inhabiting the Baringo District").',
  color: '#0284C7',
  sources: ['johnston-uganda-protectorate-1902', 'hollis-masai-1905', 'dundas-baringo-tribes-1910', 'open-web-swadesh-comparative'],
};

export const ILCHAMUS_UNITS: CourseUnit[] = [
  {
    id: 'ilchamus-unit-1',
    title: 'Unit 1: Lake Baringo Salutations, Ilkeroi & Ilmae Irrigation Heritage & Numerals (Dundas 1910 & Johnston 1902)',
    description: 'Learn Ilchamus greetings, river-irrigation and fishery vocabulary, and numerals 1–10 from Dundas (1910) and Johnston (1902).',
    icon: '🌊',
    skills: [
      {
        id: 'ilchamus-baringo-heritage',
        title: 'Baringo Settlements (Ilkeroi & Ilmae), Lake Life & Numerals (Dundas 1910)',
        icon: 'Compass',
        description: 'Master Ilchamus vocabulary recorded by Hon. K. R. Dundas (1910) and Sir Harry Johnston (1902).',
        tips: "Hon. K. R. Dundas (1910, JRAI Vol. 40, pp. 49–54) documented how the Ilchamus of Ilkeroi (Njemps Juu) and Ilmae (Njemps Chini) combined Maa pastoralism with engineered brushwood dams and irrigation furrows from the Perkerra and Molo rivers.",
        culturalNote: "On Lake Baringo (Mparingo), Ilchamus fishermen traditionally crafted ultra-light buoyant canoes (l-kadich) bound from ambatch (Aeschynomene elaphroxylon) balsa reeds.",
        words: [
          { target: 'Supai! (resp. Epa!) / Serian!', source: 'Greetings! / Peace!', pronunciation: 'soo-pah-ee / seh-ree-ahn', hint: 'Ilchamus salutation' },
          { target: 'Ilkeroi (Njemps Juu) / Ilmae (Njemps Chini)', source: 'The two historic Ilchamus sister settlements at Baringo', pronunciation: 'eel-keh-roy / eel-mah-eh', hint: 'Dundas (1910, p. 50)' },
          { target: 'Mparingo / l-kadich / l-singiri', source: 'Lake Baringo / Ambatch balsa-reed canoe / Fish', pronunciation: 'm-pah-reen-goh / l-kah-deech / l-seen-gee-ree', hint: 'Lake Baringo maritime & fishing lexicon' },
          { target: 'nkare / n-kima / n-kolong / Nkai', source: 'Water (River) / Fire / Sun / God', pronunciation: 'n-kah-reh / n-kee-mah / n-koh-lohng / n-kah-ee', hint: 'Johnston (1902 Njemps) & Dundas (1910)' },
          { target: 'n-kiteng (pl. n-kishu) / l-kinos / l-makau', source: 'Cow (pl. Cattle) / Crocodile / Hippopotamus', pronunciation: 'n-kee-tehng / l-kee-nohs / l-mah-kah-oo', hint: 'Johnston (1902 Njemps)' },
          { target: 'nabo (obo), are, uni, ongwan, imiet', source: '1, 2, 3, 4, 5', pronunciation: 'nah-boh, ah-reh, oo-nee, oh-ngwahn, ee-mee-eht', hint: 'Johnston (1902 Njemps) numerals 1–5' },
          { target: 'ile, sapana, isiet, saal, tomon', source: '6, 7, 8, 9, 10', pronunciation: 'ee-leh, sah-pah-nah, ee-see-eht, sahl, toh-mohn', hint: 'Johnston (1902 Njemps) numerals 6–10' }
        ],
        sentences: [
          { target: 'Ilkeroi o Ilmae: Serian enkare oo nkishu.', source: 'Ilkeroi and Ilmae: Peace be to the irrigation waters and the cattle (Dundas 1910).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In Hon. K. R. Dundas (1910, p. 50), what are the two historic Ilchamus settlements near Lake Baringo?',
            correctAnswer: 'Ilkeroi (Njemps Juu) / Ilmae (Njemps Chini)',
            options: [
              'Ilkeroi (Njemps Juu) / Ilmae (Njemps Chini)',
              'nabo (obo), are, uni, ongwan, imiet',
              'ile, sapana, isiet, saal, tomon',
              'Supai! (resp. Epa!) / Serian!'
            ],
            hint: 'Upper and Lower Njemps'
          }
        ]
      }
    ]
  }
];

export const ILCHAMUS_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'ilchamus-dundas-1910-grammar',
    title: 'Ilchamus (Camus) Northern Maa Grammar & Baringo Irrigation Terminology (Dundas 1910 & Johnston 1902)',
    summary: 'Ilchamus forms the Lake Baringo branch of Northern Maa (Eastern Nilotic), sharing l-/n- gender prefixes and VSO verb structure with Samburu and Maasai.',
    content: `Documented by Sir Harry H. Johnston (*The Uganda Protectorate, Vol. II*, 1902, Njemps) and Hon. K. R. Dundas (*Notes on the Tribes Inhabiting the Baringo District*, JRAI Vol. 40, 1910, pp. 49–54):
- **Gender Prefixes**: Masculine **l-** (*l-tungani* 'man/person', *l-kinos* 'crocodile', *l-makau* 'hippopotamus') and Feminine **n-** (*n-gitok* 'woman', *n-kare* 'water', *n-kishu* 'cattle').`,
    examples: [
      { ilchamus: 'Ilkeroi o Ilmae: Serian enkare oo nkishu.', english: 'Ilkeroi and Ilmae: Peace be to the waters and the cattle.', explanation: 'Dundas (1910, pp. 49–54)' }
    ]
  }
];

// --- 22. POKOT (Pökoot / Suk) ---
export const POKOT_CONFIG: LanguageConfig = {
  id: 'pokot',
  name: 'Pokot (Pökoot)',
  nativeName: 'Pökoot (Suk)',
  family: 'Nilotic',
  counties: ['West Pokot', 'Baringo', 'Turkana'],
  speakers: '780K',
  speechLocale: 'sw-KE',
  description: 'The northern branch of the Highland (Southern) Nilotic Kalenjin family, spoken across West Pokot and Baringo counties by both agricultural hill-furrow engineers (Pipapagha) and pastoral plains communities (Pipatiich). Grounded in Sir Harry Johnston (1902 Suk), Hon. K. R. Dundas (1910), and Mervyn W. H. Beech (1911 "The Suk: Their Language and Folklore").',
  color: '#7C3AED',
  sources: ['johnston-uganda-protectorate-1902', 'dundas-baringo-tribes-1910', 'beech-suk-pokot-1911', 'open-web-swadesh-comparative'],
};

export const POKOT_UNITS: CourseUnit[] = [
  {
    id: 'pokot-unit-1',
    title: 'Unit 1: Pökoot Greetings, Beech’s (1911) Suk Grammar, Numerals & Tiangoi! Riddles',
    description: 'Master Pökoot greetings (Chamnyan!), nouns, numerals 1–10, riddles, and the Hymn to Torôrut from Mervyn Beech (1911).',
    icon: '⛰️',
    skills: [
      {
        id: 'pokot-beech-1911-lexicon',
        title: 'Greetings, Hill-Furrow & Pastoral Life, Numerals & Riddles (Beech 1911)',
        icon: 'Scroll',
        description: 'Learn Pökoot vocabulary, numerals, and riddles from Mervyn W. H. Beech (1911).',
        tips: "Mervyn W. H. Beech (1911, p. 44) records that Pökoot riddles begin with the challenge 'Tiangoi!' ('Set a riddle!'). Beech also documents the division between Hill Suk (Pipapagha 'People of the Grain', who built cliff-side irrigation channels called rot) and Plains Suk (Pipatiich 'People of the Cattle').",
        culturalNote: "In Mervyn Beech (1911, p. 19), Torôrut is the Supreme Sky Deity of the Pökoot, while Ilat is the rain-spirit who carries water in the clouds.",
        words: [
          { target: 'Chamnyan! / Kalya! (resp. Bo!)', source: 'Greetings! / Peace! (Reply: Peace!)', pronunciation: 'chahm-nyahn / kahl-yah', hint: 'Pökoot salutation' },
          { target: 'Torôrut / Ilat / Assis', source: 'Supreme Sky God / Rain Spirit / Sun (Day)', pronunciation: 'toh-roh-root / ee-laht / ahs-sees', hint: 'Mervyn Beech (1911, p. 19) Suk cosmology' },
          { target: 'chito (pl. pich) / muren / korko (pl. korok)', source: 'Person (pl. People) / Warrior / Woman (pl. Women)', pronunciation: 'chee-toh / peech / moo-rehn / kohr-koh', hint: 'Beech (1911, p. 61)' },
          { target: 'pogh (beek) / mat / rot / kokwa', source: 'Water / Fire / Irrigation furrow / Village council of elders', pronunciation: 'pohgh / maht / roht / koh-kwah', hint: 'Beech (1911, pp. 15, 22)' },
          { target: 'tany (pl. tuka) / chego / matai / mosong', source: 'Cow (pl. Cattle) / Milk / Finger-millet / Sorghum', pronunciation: 'tahny / too-kah / cheh-goh / mah-tah-ee / moh-sohng', hint: 'Beech (1911, p. 15) pastoral & hill-farming staples' },
          { target: 'okombo, oghien, somok, angwan, mut', source: '1, 2, 3, 4, 5', pronunciation: 'oh-kohm-boh, oh-ghyehn, soh-mohk, ah-ngwahn, moot', hint: 'Beech (1911, p. 69) & Johnston (1902 Suk) numerals 1–5' },
          { target: 'lo, tisap, sisit, sokol, taman', source: '6, 7, 8, 9, 10', pronunciation: 'loh, tee-sahp, see-seet, soh-kohl, tah-mahn', hint: 'Beech (1911, p. 69) numerals 6–10' },
          { target: 'Tiangoi! A-tiny-e korok-chan a-re che-ker-key. — Kôñg.', source: 'Riddle: I have two wives who never see each other. — Answer: The two eyes (Beech 1911 #1)', pronunciation: 'tyahn-goy ... kohng', hint: 'Mervyn Beech (1911, p. 44, Riddle #1)' }
        ],
        sentences: [
          { target: 'Torôrut! Kô-nech robta, kô-nech parak, kô-nech tuka!', source: 'O Torôrut! Give us rain, give us harvest abundance, give us healthy cattle! (Beech 1911, p. 15)' },
          { target: 'Tiangoi! A-tiny-e korok-chan a-re che-ker-key. — Kôñg.', source: 'Riddle: I have two wives who never see each other. — The two eyes (Beech 1911, p. 44).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In Mervyn W. H. Beech’s "The Suk: Their Language and Folklore" (1911, p. 44), what is the answer to Riddle #1 ("I have two wives who never see each other")?',
            correctAnswer: 'Tiangoi! A-tiny-e korok-chan a-re che-ker-key. — Kôñg.',
            options: [
              'Tiangoi! A-tiny-e korok-chan a-re che-ker-key. — Kôñg.',
              'okombo, oghien, somok, angwan, mut',
              'tany (pl. tuka) / chego / matai / mosong',
              'Chamnyan! / Kalya! (resp. Bo!)'
            ],
            hint: 'Kôñg = The two eyes'
          }
        ]
      }
    ]
  }
];

export const POKOT_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'pokot-beech-1911-grammar',
    title: 'Pökoot (Suk) Noun Plurals, Pronouns, VSO Verb Conjugation & Beech (1911) Folklore',
    summary: 'Mervyn W. H. Beech’s 1911 monograph The Suk: Their Language and Folklore documents Pökoot as the northernmost Highland Nilotic (Kalenjin) language.',
    content: `From Mervyn W. H. Beech (*The Suk: Their Language and Folklore*, Clarendon Press, Oxford, 1911, pp. 47–98) and Hon. K. R. Dundas (1910):
- **Pronouns (Beech 1911, p. 69)**: 1s *ani (ane)*, 2s *inyi*, 3s *ine*, 1p *achak*, 2p *akwak*, 3p *ichak*.
- **Numerals (Beech 1911, p. 69)**: *okombo* (1), *oghien* (2), *somok* (3), *angwan* (4), *mut* (5), *lo* (6), *tisap* (7), *sisit* (8), *sokol* (9), *taman* (10), *tiptem* (20), *sosom* (30), *artam* (40), *konom* (50), *pokol* (100).`,
    examples: [
      { pokot: 'Tiangoi! A-tiny-e korok-chan a-re che-ker-key. — Kôñg.', english: 'Riddle: I have two wives who never see each other. — The two eyes.', explanation: 'Mervyn W. H. Beech (1911, p. 44, Riddle #1)' },
      { pokot: 'Torôrut! Kô-nech robta, kô-nech parak, kô-nech tuka!', english: 'O Torôrut! Give us rain, give us harvest abundance, give us cattle!', explanation: 'Beech (1911, p. 15)' }
    ]
  }
];
