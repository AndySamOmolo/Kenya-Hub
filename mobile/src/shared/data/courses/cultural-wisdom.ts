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
    indigenous: "Meoki o-inoti 'n-gipa ol-otisinyunye ake.",
    literalTranslation: "The foster-son (or slave) is not drunk the vernix caseosa, only he who is without blemish.",
    meaning: "Recorded verbatim by A. C. Hollis (1905, p. 246, Proverb #48): What does it matter whether a person is one's own child or somebody else's as long as he does his duty?",
    englishEquivalent: "Handsome is that handsome does.",
    theme: 'wisdom',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 246, Proverb #48)'
  },
  {
    id: 'maasai-2',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Medany ol-kimojino obo el-lashei (#32) • Merep eng-aboboki o-'l-chani likae-shani (#52).",
    literalTranslation: "One finger will not kill a louse (#32) • The bark of one tree will not adhere to another tree (#52).",
    meaning: "Recorded verbatim by A. C. Hollis (1905, p. 244 Proverb #32 & p. 247 Proverb #52): a single person acting alone cannot accomplish what requires the cooperation of two or more people, and each person belongs to their own nature and community.",
    englishEquivalent: "Many hands make light work.",
    theme: 'unity',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 244 Proverb #32 & p. 247 Proverb #52)'
  },
  {
    id: 'maasai-3',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Melang ol-ambu en-nongoto (#43) • Meishaa 'mulugi en-dap, meishaa el-lejare en-dap (#35).",
    literalTranslation: "The boaster will not cross the valley (#43) • A bargain cannot be held in the palm of the hand; a lie cannot fill the palm (#35).",
    meaning: "Recorded verbatim by A. C. Hollis (1905, p. 245 Proverb #43 & p. 244 Proverb #35): boastful pride fails before the test of action, and empty deceit cannot replace honest dealing.",
    englishEquivalent: "Pride goes before a fall.",
    theme: 'humility',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 245 Proverb #43 & p. 244 Proverb #35)'
  },
  {
    id: 'maasai-4',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Erishunye anaa en-gaa o-'sighiria obo (#13) • Meiyopoo ol-owaru ol-kujita (#41).",
    literalTranslation: "He separates himself from his friends like a sick (or dead) donkey (#13) • The grass does not hide a beast of prey forever (#41).",
    meaning: "Recorded verbatim by A. C. Hollis (1905, p. 240 Proverb #13 & p. 245 Proverb #41): isolating oneself from companions brings peril, and hidden danger or wrongdoing eventually comes to light.",
    englishEquivalent: "Murder will out.",
    theme: 'nature',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 240 Proverb #13 & p. 245 Proverb #41)'
  },
  {
    id: 'maasai-5',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Milo angata miata ol-le-'swama (#59) • Kinder ol-le-'modai, pe kindoki ol-le-'ngeno (#29).",
    literalTranslation: "Don't go to the plain without somebody to take the dust out of your eye (#59) • We begin by being foolish, and we become wise by experience (#29).",
    meaning: "Recorded verbatim by A. C. Hollis (1905, p. 248 Proverb #59 & p. 243 Proverb #29): never journey or undertake hard tasks without a trusted companion, and remember that wisdom is gained step by step through experience.",
    englishEquivalent: "Two heads are better than one; experience is the best teacher.",
    theme: 'humility',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 248 Proverb #59 & p. 243 Proverb #29)'
  },
  {
    id: 'maasai-6',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Etejo en-giteng: 'Mikindaya, injooyoki' (#18) • Etejo en-giteng: 'Tipikaki o-rorei obana 'l-papit lo-'sesen' (#19).",
    literalTranslation: "The cow said: 'Do not lend me, give me away' (#18) • The cow said: 'Say as many words about me as I have hairs in my body' (#19).",
    meaning: "Recorded verbatim by A. C. Hollis (1905, p. 241, Proverbs #18 & #19): cattle are the heart of Maasai pastoral life and legal covenants—gifts should be clear and wholehearted, and cattle agreements require thorough deliberation.",
    englishEquivalent: "Give wholeheartedly or not at all.",
    theme: 'family',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 241, Proverbs #18 & #19)'
  },
  {
    id: 'maasai-7',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Eata en-gewarie 'n-giyaa.",
    literalTranslation: "The night has ears.",
    meaning: "Even in darkness and secrecy, spoken words travel far and may be overheard.",
    englishEquivalent: "Walls have ears.",
    theme: 'wisdom',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 238, Proverb #3)'
  },
  {
    id: 'maasai-8',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Eitu-kidol ti-oreren en-gerr sambu.",
    literalTranslation: "There is no such thing in the world as a sheep of many (more than three) colours.",
    meaning: "Used to express healthy skepticism toward an exaggerated or improbable tale.",
    englishEquivalent: "Take tall tales with a grain of salt.",
    theme: 'wisdom',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 239, Proverb #5)'
  },
  {
    id: 'maasai-9',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Ekwenikye 'n-guk in-guruon. (Il-keek ootijinga en-gima: ekwenikye obo likae.)",
    literalTranslation: "Coals laugh at the ashes. (The firewood which has been cut ready for the burning laughs at that which is already being consumed.)",
    meaning: "Do not mock another person’s misfortune or old age, forgetting that the same fate awaits all.",
    englishEquivalent: "People who live in glass houses should not throw stones.",
    theme: 'humility',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 239, Proverb #6)'
  },
  {
    id: 'maasai-10',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Etejo ol-ngojine: 'Mme ake amunyak, keju nemaagol.'",
    literalTranslation: "The hyena said: 'It is not only that I have luck, my leg is also strong.'",
    meaning: "Good fortune alone is not enough; endurance and hard work are required to succeed.",
    englishEquivalent: "God helps those who help themselves.",
    theme: 'hard-work',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 241, Proverb #20)'
  },
  {
    id: 'maasai-11',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Oiyote? — E-euo! Aata 'l-muran lainei kumok, naa obo oipungoki 'n-gishu. — Il-loom le-'ng-aji.",
    literalTranslation: "Are you ready? — He has come! Riddle: I have many warriors, and only one goes out to watch the cattle. — Answer: The rafters of the hut (all hidden except one protruding over the door).",
    meaning: "Traditional Maasai architectural riddle celebrating homestead vigilance and pastoral life, opened with the dialogic formula 'Oiyote? — E-euo!' (Hollis 1905, p. 253).",
    theme: 'family',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 253, Riddle #2)'
  },
  {
    id: 'maasai-12',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Aata 'n-dapan ainei are naarisyo. — Eng-ai o en-gop.",
    literalTranslation: "Riddle: I have two skins of equal size (one to lie on and the other to cover myself with). — Answer: The sky and the bare ground (earth).",
    meaning: "Pastoralist cosmological riddle comparing earth (en-gop) and sky (Eng-ai) to two sleeping hides.",
    theme: 'nature',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 254, Riddle #5)'
  },
  {
    id: 'maasai-13',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Anake eado ngutunyi nemebaiki e-nyawa e-'n-gerr? — Eng-oitoi.",
    literalTranslation: "Riddle: Why is your mother so tall (long) and yet she does not reach up to a sheep’s udder? — Answer: The road / path.",
    meaning: "Classic travel riddle contrasting horizontal distance with vertical height.",
    theme: 'patience',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 255, Riddle #8)'
  },
  {
    id: 'maasai-14',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Merisyo 'nyuat oo 'n-gidimat, 'nyuat in-gumok (#54) • Metii oidipa, ol-doinyo ake oidipa otunokine e-weji nemedotunye (#55).",
    literalTranslation: "Persevering to accomplish an end and being able to do a thing are not the same: perseverance is greater (#54) • Nobody can say he is settled anywhere forever; it is only the mountains which do not move from their places (#55).",
    meaning: "Recorded verbatim by A. C. Hollis (1905, pp. 247–248, Proverbs #54 & #55): steady perseverance surpasses mere talent, and human fortunes are ever-changing compared to the enduring mountains.",
    englishEquivalent: "Perseverance conquers all.",
    theme: 'patience',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, pp. 247–248, Proverbs #54 & #55)'
  },
  {
    id: 'maasai-15',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Miroro e-ngape anaa ol-moruo obore ayok (#64) • Menyaanyuk in-gishu o-'l-tungani, kake enyanyuk il-tungana (#51).",
    literalTranslation: "Don't tread on the door-post (don't be proud) like the father of many sons (#64) • Cattle are not alike to a man, though men are alike (#51).",
    meaning: "Recorded verbatim by A. C. Hollis (1905, p. 249 Proverb #64 & p. 247 Proverb #51): warns against arrogance in prosperity and notes how a pastoralist knows every individual animal in his herd.",
    theme: 'humility',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 249 Proverb #64 & p. 247 Proverb #51)'
  },
  {
    id: 'maasai-16',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Tigha eng-auo, miigh eng-ongu (#75) • Mindadol ol-kilil eng-auo, meipiri (#60).",
    literalTranslation: "Hang up the bow, do not hang up the eye (#75) • Do not show the hawk your bow, or he will fly away (#60).",
    meaning: "Recorded verbatim by A. C. Hollis (1905, p. 251 Proverb #75 & p. 248 Proverb #60): when a guest arrives and you hang up his weapons, do not forget to look after his hunger with hospitality; and exercise discretion when planning action.",
    englishEquivalent: "Hospitality remembers the guest's need; forewarned is forearmed.",
    theme: 'unity',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, p. 251 Proverb #75 & p. 248 Proverb #60)'
  },
  {
    id: 'maasai-17',
    languageId: 'maasai',
    languageName: 'Maasai (ɔl Maa)',
    indigenous: "Na-omon-ai! Na-ai aomon to-'l-tau lai! — Hoo! ... Ol-orosion li-oriong ang! Apa topiu! / Eng-olong topiu!",
    literalTranslation: "O Thou who art prayed to! O God, I pray to Thee from my heart! — Hoo! ... The Hateful One behind our backs! Moon, return to life! / Sun, return to life!",
    meaning: "Recorded verbatim by A. C. Hollis (1905, pp. 345–356 & pp. 274–275): women's sacred prayer songs to Eng-ai (holding en-gujit grass tied in their garments while an elder pours milk and honey-wine) and the traditional eclipse chant.",
    theme: 'nature',
    sourceCitation: 'A. C. Hollis, The Masai: Their Language and Folklore (1905, pp. 274–275, 345–356)'
  },

  // ── 2. Kalenjin / Nandi (A. C. Hollis & Sir Charles Eliot 1909 "The Nandi: Their Language and Folk-Lore" & Hon. K. R. Dundas 1910 — Public Domain) ──
  {
    id: 'kalenjin-1',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Ma-me tany ko-ner tany ake.',
    literalTranslation: 'A cow does not die because another cow is fat.',
    meaning: 'Another person’s prosperity or good fortune does not diminish your own; avoid envy.',
    theme: 'wisdom',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 124, Proverb #1)'
  },
  {
    id: 'kalenjin-2',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Ii-e ñgetuny lel.',
    literalTranslation: 'The lion bears a hyena (or jackal).',
    meaning: 'Said when a child fails to live up to the noble character or courage of their parents.',
    englishEquivalent: 'Many a good cow hath an evil calf.',
    theme: 'family',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 124, Proverb #2)'
  },
  {
    id: 'kalenjin-3',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Inga-i ñgom, i-ker-i-ke kumut-i?',
    literalTranslation: 'However clever you may be, can you see the back of your neck?',
    meaning: 'Even the wisest person has blind spots and needs the perspective and counsel of others.',
    englishEquivalent: 'No one is infallible.',
    theme: 'humility',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 125, Proverb #4)'
  },
  {
    id: 'kalenjin-4',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Iok-toi kiplengoi pelio.',
    literalTranslation: 'Send hares to the elephant, not elephants to the hare.',
    meaning: 'It is the duty of the young to run errands for and honour elders, not elders to wait on youth.',
    englishEquivalent: 'Respect your elders.',
    theme: 'family',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 125, Proverb #7)'
  },
  {
    id: 'kalenjin-5',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Iput-i tany aku pa-kelek angwan.',
    literalTranslation: 'The ox falls in spite of its four legs.',
    meaning: 'Even a strong, experienced, or intelligent person can stumble and make a mistake.',
    englishEquivalent: 'A horse stumbles that has four legs / To err is human.',
    theme: 'humility',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 125, Proverb #8)'
  },
  {
    id: 'kalenjin-6',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Ia-chin-ke kipkeleny tulwa.',
    literalTranslation: 'The sloth takes five years to climb a tree, and while coming down hits the ground with its stomach (saying: Look what hurry has done!).',
    meaning: 'Slow and steady deliberation accomplishes more than rash haste.',
    englishEquivalent: 'More haste, less speed.',
    theme: 'patience',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 124, Proverb #3)'
  },
  {
    id: 'kalenjin-7',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: "Ma-ki-met-toi mokoiyo ne-mi-i 'ngoiny a-ki-sor ne-mi-i parak.",
    literalTranslation: 'Do not throw away the figs which grow at the bottom of the tree and hasten to pick those which grow at the top.',
    meaning: 'Do not abandon what is certain and within reach to chase distant, uncertain things.',
    englishEquivalent: 'A bird in the hand is worth two in the bush.',
    theme: 'wisdom',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 127, Proverb #24)'
  },
  {
    id: 'kalenjin-8',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Ma-ki-mon-doi karna ma.',
    literalTranslation: 'Do not despise a piece of iron in the fire (it may be forged into a spear or sword).',
    meaning: 'Never look down on a humble youth or a small beginning, for great strength may come of it.',
    theme: 'humility',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 127, Proverb #25)'
  },
  {
    id: 'kalenjin-9',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: "Ma-ki-te-chin 'ngatip ma.",
    literalTranslation: 'Do not place a sharp-pointed pole in the fire (or its point will burn away instead of being hardened).',
    meaning: 'Use the right measure and care when testing or training something valuable.',
    theme: 'wisdom',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 128, Proverb #31)'
  },
  {
    id: 'kalenjin-10',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'Ma-mi-i myat ake ne-rom-chin ake pei.',
    literalTranslation: 'One death does not draw water for another death.',
    meaning: 'Every person must bear their own ultimate accountability and mortal lot.',
    theme: 'wisdom',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 129, Proverb #36)'
  },
  {
    id: 'kalenjin-11',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: "'Ñgi-'om-e-chi pôton kel-ok.",
    literalTranslation: 'Let us put our trembling legs together in one place (and we shall obtain support one from the other).',
    meaning: 'Even those who are weak alone become steadfast when they stand together in mutual support.',
    englishEquivalent: 'Union is strength.',
    theme: 'unity',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 131, Proverb #49)'
  },
  {
    id: 'kalenjin-12',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: "'Ñgi-rep-e lakwa rotua ke-ken-ji ket.",
    literalTranslation: 'If you take a knife away from a child, give him a piece of wood instead.',
    meaning: 'When correcting or removing something harmful, offer a gentle, constructive substitute.',
    theme: 'family',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 131, Proverb #50)'
  },
  {
    id: 'kalenjin-13',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: "'Ñgo-samis-it muria kwa ko.",
    literalTranslation: 'If a rat stinks, it goes home (to its burrow); and if a man is ill, he goes to his relations to be attended to.',
    meaning: 'In times of sickness or distress, family and home remain one’s true refuge.',
    englishEquivalent: 'Blood is thicker than water.',
    theme: 'family',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 132, Proverb #54)'
  },
  {
    id: 'kalenjin-14',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: "Tongoch! — Cho! Apuk ma-pa. — Kin'-ap-teta.",
    literalTranslation: "Enigma (Tongoch! — Cho!): It pours out; it does not go away. — Answer: A cow's udder.",
    meaning: 'Pastoral riddle celebrating the daily abundance of milk from cattle, opened with the traditional formula "Tongoch! — Cho!".',
    theme: 'nature',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, pp. 133–134, Enigma #4)'
  },
  {
    id: 'kalenjin-15',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'A-tinye cheptan-nyo ne-piiy-onyi mutai ko-rukut lakat. — Kweyot.',
    literalTranslation: 'Enigma: I have a daughter who gets a good meal every morning, but she goes to bed hungry at night. — Answer: A broom.',
    meaning: 'Homestead riddle comparing morning sweeping to feeding and evening storage to fasting.',
    theme: 'hard-work',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 135, Enigma #7)'
  },
  {
    id: 'kalenjin-16',
    languageId: 'kalenjin',
    languageName: 'Kalenjin (Nandi)',
    indigenous: 'I-ie tururik annan i-ie che-tililin? — A-ie tururik amu a-tinye tuka.',
    literalTranslation: 'Enigma: Do you prefer water made dirty by the feet of oxen or clean water? — Answer: I prefer the muddy water, for then I own cattle.',
    meaning: 'Pastoralist riddle teaching that the labour and commotion of tending livestock is preferable to idle poverty.',
    theme: 'hard-work',
    sourceCitation: 'A. C. Hollis & Sir Charles Eliot, The Nandi: Their Language and Folk-Lore (1909, p. 137, Enigma #17)'
  },

  // ── 3. Pokot / Suk (Mervyn W. H. Beech 1911 "The Suk: Their Language and Folklore" & Hon. K. R. Dundas 1910 — Public Domain) ──
  {
    id: 'pokot-1',
    languageId: 'pokot',
    languageName: 'Pokot (Pökoot / Suk)',
    indigenous: 'Tiangoi! — Tia! Nyelnyel ma-ke-lany. — Sirim-nyon.',
    literalTranslation: 'Riddle (Tiangoi! — Tia!): What is the unstable thing (which is strong) so-it-may-not-be-climbed? — Answer: A chain (Sirim-nyon).',
    meaning: 'Classical Pökoot riddle #1 recorded verbatim by Mervyn W. H. Beech (1911, p. 43), opened with the traditional challenge "Tiangoi!" and response "Tia!" (with "Donguch!" if guessed wrong).',
    theme: 'wisdom',
    sourceCitation: 'Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 43, Riddle #1)'
  },
  {
    id: 'pokot-2',
    languageId: 'pokot',
    languageName: 'Pokot (Pökoot / Suk)',
    indigenous: "Tiangoi! — Tia! O-wund-oi-a' soghoʻ. — Tŭl.",
    literalTranslation: 'Riddle: When may I be said to be washing myself in a cup made of a goat’s horn? — Answer: A white-ant’s hill (Tŭl, when reaching inside a hollow termite mound to collect piyapai termites).',
    meaning: 'Recorded verbatim by Mervyn W. H. Beech (1911, pp. 43–44, Riddle #2), comparing a hollow ten-foot termite mound to an inverted drinking-horn.',
    theme: 'nature',
    sourceCitation: 'Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, pp. 43–44, Riddle #2)'
  },
  {
    id: 'pokot-3',
    languageId: 'pokot',
    languageName: 'Pokot (Pökoot / Suk)',
    indigenous: "Tiangoi! — Tia! Rel-e' ti'-chu lopai pirir kirokit. — Kelat ngô ñgaliep.",
    literalTranslation: 'Riddle: White are all my cows, red is the bull. — Answer: The teeth and the tongue (Kelat ngô ñgaliep).',
    meaning: 'Pastoral Pökoot riddle recorded verbatim by Mervyn W. H. Beech (1911, p. 44, Riddle #3).',
    theme: 'wisdom',
    sourceCitation: 'Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 44, Riddle #3)'
  },
  {
    id: 'pokot-4',
    languageId: 'pokot',
    languageName: 'Pokot (Pökoot / Suk)',
    indigenous: "Tiangoi! — Tia! Ko-choit-a' sirim-nyon kowoʻ kiau. — Ôr ny'o-wet-ei.",
    literalTranslation: 'Riddle: I threw away a chain and it went far into the open plain. — Answer: The winding road which I shall take (Ôr ny’o-wet-ei).',
    meaning: 'Recorded verbatim by Mervyn W. H. Beech (1911, p. 44, Riddle #5), comparing a winding path across the plain to the curves of a thrown iron chain.',
    theme: 'patience',
    sourceCitation: 'Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 44, Riddle #5)'
  },
  {
    id: 'pokot-5',
    languageId: 'pokot',
    languageName: 'Pokot (Pökoot / Suk)',
    indigenous: 'Tiangoi! — Tia! Ka-rat kwoañg. — Kuntopal.',
    literalTranslation: 'Riddle: He has strung his bow. — Answer: The rainbow (Kuntopal).',
    meaning: 'Recorded verbatim by Mervyn W. H. Beech (1911, p. 44, Riddle #6).',
    theme: 'nature',
    sourceCitation: 'Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 44, Riddle #6)'
  },
  {
    id: 'pokot-6',
    languageId: 'pokot',
    languageName: 'Pokot (Pökoot / Suk)',
    indigenous: 'Tiangoi! — Tia! Ki-meriensi-oʻ. — Nekergh-is.',
    literalTranslation: 'Riddle: They stood in a threatening attitude (facing one another without fighting). — Answer: The three cooking-pot hearthstones (Nekergh-is).',
    meaning: 'Recorded verbatim by Mervyn W. H. Beech (1911, p. 44, Riddle #9): the three hearthstones face one another in a triangle to support the cooking-pot together.',
    theme: 'unity',
    sourceCitation: 'Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 44, Riddle #9)'
  },
  {
    id: 'pokot-7',
    languageId: 'pokot',
    languageName: 'Pokot (Pökoot / Suk)',
    indigenous: "Tiangoi! — Tia! K-o-p-a' set-a-pogh ka-ma-iyit-an. — Krīsioʻ.",
    literalTranslation: 'Riddle: I carried a jar of water and did not spill it. — Answer: An udder (Krīsioʻ).',
    meaning: 'Pastoral riddle recorded verbatim by Mervyn W. H. Beech (1911, p. 45, Riddle #12).',
    theme: 'nature',
    sourceCitation: 'Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 45, Riddle #12)'
  },
  {
    id: 'pokot-8',
    languageId: 'pokot',
    languageName: 'Pokot (Pökoot / Suk)',
    indigenous: 'Tiangoi! — Tia! O-cha pertat ma-mi-nye chi nya-nyuru-acha. — Konyen.',
    literalTranslation: 'Riddle: Swift I am so that no one can catch me. — Answer: The eyes (Konyen).',
    meaning: 'Recorded verbatim by Mervyn W. H. Beech (1911, p. 45, Riddle #14).',
    theme: 'wisdom',
    sourceCitation: 'Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 45, Riddle #14)'
  },
  {
    id: 'pokot-9',
    languageId: 'pokot',
    languageName: 'Pokot (Pökoot / Suk)',
    indigenous: "Tiangoi! — Tia! O-mwuich-a' tuku'-lopai. — Ñgaliep.",
    literalTranslation: 'Riddle: I am able for everything (I am lord of all). — Answer: The tongue (Ñgaliep).',
    meaning: 'Recorded verbatim by Mervyn W. H. Beech (1911, p. 45, Riddle #17) on the power of speech.',
    theme: 'wisdom',
    sourceCitation: 'Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 45, Riddle #17)'
  },
  {
    id: 'pokot-10',
    languageId: 'pokot',
    languageName: 'Pokot (Pökoot / Suk)',
    indigenous: "Torôrut kun-e' mwagh / Ki-sop-'cha pich / Ki-sop sapon — Ny' anyin! • O-wei ter i-ker-ach mba maʻ, / I-chi-nyi tiumbo kukoʻ.",
    literalTranslation: 'God give-us fatness (rain/prosperity) / And we thy people shall be well; / We shall be well with health — That is sweet! • O pot last-thou-for us on the fire, / Thou art a vessel of my grandsire.',
    meaning: 'Verbatim Suk irrigation-furrow planting hymn to Torôrut (Beech 1911, p. 16) and the potter’s consecration chant over a newly fired clay pot (koko-ter, p. 18).',
    theme: 'nature',
    sourceCitation: 'Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, pp. 16, 18)'
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
    indigenous: "Mulume ni kuzhala-dze? — 'Aka! he zho mulume k'azhala! Sidzasikira kwamba ng'ombe-yo yázhala?",
    literalTranslation: "How should a male bear a child? — Oho! is it so then that a male never bears? Have I not just heard that your bull bore a calf?",
    meaning: "Climax of W. E. Taylor's Giriama Folktale II ('Fisi na Simba na Katsungula', 1891, pp. 132–134; also told in I 'Katsungula na Simba', III 'K'uku na Katsungula', IV.1 'Kuononga kwa Muche', and IV.2 'Kuandika kwa Kufwa', closing with the traditional formula 'Ngano yangu igomera haha: Mwehu nyumba-ni muna ts'azi ya nyaa'): Katsungula traps the Lion into refuting his own unjust claim over the Hyena's calf.",
    englishEquivalent: 'Out of thine own mouth will I judge thee / Wisdom is better than strength.',
    theme: 'wisdom',
    sourceCitation: 'W. E. Taylor, Giryama Vocabulary and Collections (1891, pp. 129–138, Ngano za Kigiryama #1–5)'
  },
  {
    id: 'mijikenda-5',
    languageId: 'mijikenda',
    languageName: 'Mijikenda (Kigiryama)',
    indigenous: 'Bandzu, bandzu rámala gogo; T\'embe na t\'embe ni mukahe.',
    literalTranslation: 'Chip, chip finished the block (§ 602); grain and grain makes a cake (§ 630).',
    meaning: 'Recorded verbatim by Rev. W. E. Taylor in "African Aphorisms" (1891, pp. 136, 142, Giryama Proverbs #602 & #630): steady, incremental effort overcomes the largest obstacle and builds lasting abundance.',
    englishEquivalent: 'Many a mickle makes a muckle.',
    theme: 'patience',
    sourceCitation: 'W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, pp. 136, 142, Giryama Proverbs #602 & #630)'
  },
  {
    id: 'mijikenda-6',
    languageId: 'mijikenda',
    languageName: 'Mijikenda (Kigiryama)',
    indigenous: "Chuwo k'akina mumwenga; Chuwo k'akina m'zhere tututu.",
    literalTranslation: 'Counsel is not of one person alone (#602a); counsel is not of the aged elder only (#602b).',
    meaning: 'Recorded verbatim by Rev. W. E. Taylor in "African Aphorisms" (1891, p. 136, Giryama Proverbs #602a & #602b, cf. Swahili #43 "Bamba na waume bamba; hakuna bamba la mume"): true wisdom comes from shared deliberation across the community.',
    englishEquivalent: 'In the multitude of counsellors there is safety.',
    theme: 'unity',
    sourceCitation: 'W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 136, Giryama Proverbs #602a & #602b)'
  },
  {
    id: 'mijikenda-7',
    languageId: 'mijikenda',
    languageName: 'Mijikenda (Kigiryama)',
    indigenous: "Fisi rikirya m'kongo, m'zima funga nyumba.",
    literalTranslation: 'When the hyena eats the sick man, do you shut up your house while you are yet well.',
    meaning: 'Recorded verbatim by Rev. W. E. Taylor in "African Aphorisms" (1891, p. 136, Giryama Proverb #603): learn prudence from a neighbour’s misfortune and take timely precautions.',
    englishEquivalent: 'Forewarned is forearmed.',
    theme: 'wisdom',
    sourceCitation: 'W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 136, Giryama Proverb #603)'
  },
  {
    id: 'mijikenda-8',
    languageId: 'mijikenda',
    languageName: 'Mijikenda (Kigiryama & Kinika)',
    indigenous: 'Maneno madzo gausa ndzovu m\'nda-ni (#611) • Usena ukira udugu (#660).',
    literalTranslation: 'Fair speeches turn elephants out of the garden-patch (#611) • Friendship surpasses blood-relationship (#660).',
    meaning: 'Recorded verbatim by Rev. W. E. Taylor in "African Aphorisms" (1891, p. 138 Giryama Proverb #611 & p. 159 Nyika Proverb #660, citing Rebmann 1887 p. 41b): gentle diplomacy resolves what force cannot, and loyal friendship outshines distant kinship.',
    englishEquivalent: 'A soft answer turns away wrath.',
    theme: 'family',
    sourceCitation: 'W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 138 #611 & p. 159 #660)'
  },

  {
    id: "mijikenda-9",
    languageId: "mijikenda",
    languageName: "Mijikenda (Kinika / Kirabai)",
    indigenous: "Angue nduguye ni ulongo; kikulu ni ku ona megnie na madzo • Bandu na bandu ya mala gogo (Batubatu rinamala gogo / Diekudieku rinamala pinda).",
    literalTranslation: "The brother of 'it-is-said' (hearsay) is a lie; the great thing is to see for oneself with one’s own eyes (pp. 8, 171) • Chip and chip finishes the log / Taking out little by little finishes the bag (pp. 10, 12, 40).",
    meaning: "Recorded verbatim by Rev. Dr. L. Krapf and Rev. J. Rebmann at Rabai (Kisulutini) in 'A Nika-English Dictionary' (1887, pp. 8, 10, 12, 40, 171): firsthand verification is far more reliable than rumour, and persistent small efforts accomplish great tasks.",
    englishEquivalent: "Seeing is believing; little strokes fell great oaks.",
    theme: "wisdom",
    sourceCitation: "Rev. Dr. L. Krapf & Rev. J. Rebmann, A Nika-English Dictionary (1887, pp. 8, 10, 12, 40, 171)"
  },
  {
    id: "mijikenda-10",
    languageId: "mijikenda",
    languageName: "Mijikenda (Kinika / Kirabai)",
    indigenous: "Dzahasi ni menga, ela kula mutu yuna kidumbache mumo; be fugula kivindacho, ela usifugule cha muyao (p. 54) • Muhi ukibua u-ekemera muyawe (pp. 71, 214).",
    literalTranslation: "The dhow (dzahasi) is one, yet every person has their own bag in it; untie your own bag, and do not untie your neighbour’s (p. 54) • When a tree falls, it leans upon its neighbour (pp. 71, 214).",
    meaning: "Recorded verbatim by Krapf & Rebmann in 'A Nika-English Dictionary' (1887, pp. 54, 71, 214): within a shared community, respect personal property and boundaries while standing ready to support neighbours in times of calamity.",
    englishEquivalent: "Good fences make good neighbours; no man is an island.",
    theme: "unity",
    sourceCitation: "Rev. Dr. L. Krapf & Rev. J. Rebmann, A Nika-English Dictionary (1887, pp. 54, 71, 214)"
  },
  {
    id: "mijikenda-11",
    languageId: "mijikenda",
    languageName: "Mijikenda (Kinika / Kirabai)",
    indigenous: "Muifi kaeleliua, sudi mu guire na kisuche (pp. 71, 361) • Gancheganche ra mganga rinalasa mukongo na damaa (pp. 101, 160) • Muana akignierera kiga, ka-ki-katua; Udugu ka-u-okua ukadzuka (pp. 104, 364).",
    literalTranslation: "A thief is not convicted by mere suspicion; you must catch him with the ear of corn (pp. 71, 361) • The gentle encouragement of the healer lets the sick person sleep with hope (pp. 101, 160) • If a child soils your thigh, the thigh is not cut off; kinship cannot be washed off in a bath (pp. 104, 364).",
    meaning: "Recorded verbatim by Krapf & Rebmann (1887, pp. 71, 101, 104, 160, 361, 364): teaches evidentiary justice in kaya courts (mioro), the healing power of hopeful words, and the permanence of family bonds.",
    englishEquivalent: "Blood is thicker than water.",
    theme: "family",
    sourceCitation: "Rev. Dr. L. Krapf & Rev. J. Rebmann, A Nika-English Dictionary (1887, pp. 71, 101, 104, 160, 361, 364)"
  },
  {
    id: "mijikenda-12",
    languageId: "mijikenda",
    languageName: "Mijikenda (Kinika / Kirabai)",
    indigenous: "Kilagane ni kilagane, Dzimba kamala mbala (p. 171) • Ka-ku-na mbira ya mrandu; Muanadzi kafunsadzi (pp. 260, 262) • Murea uchi ni ku leuka, ela murea mali kaleuka (p. 327) • Ndagisua si urinsi, urinsi ni m'egnie; Arie mbere ndiye ausuaye pindilo (pp. 299, 323) • Vidzo ka-vi-ola; Muana musikisi yuria chakue na cha muyawe (pp. 292, 381).",
    literalTranslation: "An agreement is an agreement; the lion never finishes a whole bushbuck alone (p. 171) • There is no grave of a debtor; a child of the land does not ruin the land (pp. 260, 262) • He who is drunk with palm-wine sobers up, but he who is drunk with wealth never sobers up (p. 327) • Entrusting to another is not true watching—true watching is the owner himself; he who walks in front clears the bent grass (pp. 299, 323) • Good deeds do not rot; an obedient child eats both their own share and their companion’s (pp. 292, 381).",
    meaning: "Recorded verbatim by Krapf & Rebmann in 'A Nika-English Dictionary' (1887, pp. 171, 260, 262, 292, 299, 323, 327, 381), alongside the four etiological fables of the Bat (Nundu, p. 314) and the Shrewmouse, Fowl, and Green Dove (Pingi, Kuku, Ninga, p. 323).",
    englishEquivalent: "Honour your covenants, stay humble in prosperity, and guard your own work.",
    theme: "humility",
    sourceCitation: "Rev. Dr. L. Krapf & Rev. J. Rebmann, A Nika-English Dictionary (1887, pp. 171, 260, 262, 292, 299, 314, 323, 327, 381)"
  },

  // ── 5. Kamba (Gerhard Lindblom 1920 "The Akamba in British East Africa", C. W. Hobley 1910 "Ethnology of A-Kamba", J. T. Last 1885 — Public Domain) ──
  {
    id: 'kamba-1',
    languageId: 'kamba',
    languageName: 'Kamba (Kĩkamba)',
    indigenous: 'Kĩaa kĩmwe kĩtiũaa ndaa • Nðkwanī yanīwa manžī ("The lawsuit has drunk water").',
    literalTranslation: 'One finger does not kill a louse • The lawsuit has drunk water (i.e., the dispute is reconciled and settled in peace).',
    meaning: 'Mutual aid and community solidarity (mwethya) solve difficult problems, and when elders of the nžama settle a lawsuit (nðkwanī), both parties drink together so no rancour remains (Lindblom 1920, p. 153).',
    englishEquivalent: 'Many hands make light work.',
    theme: 'unity',
    sourceCitation: 'Gerhard Lindblom, The Akamba in British East Africa (1920, Ch. XI, p. 153)'
  },
  {
    id: 'kamba-2',
    languageId: 'kamba',
    languageName: 'Kamba (Kĩkamba)',
    indigenous: "Mundu yuyu mucheo, kuakila andu aondi (Mundu yunai kiliku).",
    literalTranslation: 'This person is good, surpassing all the people (a person having wisdom — Last 1885 superlative & quality constructions).',
    meaning: 'Recorded verbatim by J. T. Last in "Grammar of the Kamba Language" (1885, pp. 11, 13): true greatness is measured by surpassing goodness (ucheo) and wisdom (kiliku).',
    theme: 'wisdom',
    sourceCitation: 'J. T. Last, Grammar of the Kamba Language (1885, pp. 11, 13)'
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
  {
    id: 'kamba-6',
    languageId: 'kamba',
    languageName: 'Kamba (Kĩkamba)',
    indigenous: 'Wakia, aþæ! — Aa, wakia, aþæ! • "Yuwaumīlīlə kīīma kīa Nžauī na makīna ma nīaī syoo me ībīanī" (Lindblom 1920).',
    literalTranslation: 'Greeting, Elder! — Yea, greeting, Elder! (pp. 101–102) • "They came forth upon Mount Nzaui and the footprints of their feet are in the rock" (pp. 125, 252).',
    meaning: 'Recorded by Gerhard Lindblom in "The Akamba in British East Africa" (1920, pp. 101–102, 125, 252, 425–426): combines the classical Akamba elder salutation, the creation tradition of the first ancestors on Mt. Nzaui, the river-crossing riddle of the leopard (ŋgo), goat (mbuī), and sweet-potatoes (makwasī, p. 425), and the children's 10-word counting-out rhyme "tali, talita, kaonda, mnaso, mbli, katumo, kēēti, muno, mnanda, mwitango" (p. 426).',
    theme: 'family',
    sourceCitation: 'Gerhard Lindblom, The Akamba in British East Africa (1920, pp. 101–102, 125, 252, 425–426)'
  },

  // ── 6. Taita & Taveta (Rev. W. E. Taylor 1891, Rev. J. A. Wray 1894, A. C. Hollis 1910–1911 — Public Domain) ──
  {
    id: 'taita-1',
    languageId: 'taita',
    languageName: 'Taita (Kidawida / Kisagala)',
    indigenous: "Kazi mbili zam'lema fisi.",
    literalTranslation: 'Two occupations were too many (heavy) for the hyena.',
    meaning: 'Recorded verbatim by Rev. W. E. Taylor in "African Aphorisms; or, Saws from Swahili-Land" (1891, p. 160, Taita Proverb #665; cf. Swahili #409 "Ndia mbili zilimshinda mzee fisi" & Nyika #647b "Njira mbiri k\'azituwika, záremeza fisi"): divided purpose leads to failure.',
    englishEquivalent: 'No man can serve two masters.',
    theme: 'wisdom',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 160, Taita Proverb #665)'
  },
  {
    id: 'taita-2',
    languageId: 'taita',
    languageName: 'Taita (Kisagala)',
    indigenous: 'Wada! — Na wada! Nyumba yangu siiwesi mjango? — Ni-hawe muzi. — Igi.',
    literalTranslation: 'Riddle challenge: "Wada!" — Response: "Na wada!" — Riddle: "My house has no door?" — If unguessed: "Give me a town (muzi)." — Answer: "An egg (Igi)."',
    meaning: 'Recorded verbatim by Rev. J. Alfred Wray in "An Elementary Introduction to the Taita Language" (1894, p. 93 under "Enigma"): the traditional Kisagala riddle-telling ceremony and classic egg enigma.',
    theme: 'nature',
    sourceCitation: 'Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (1894, p. 93, Enigma)'
  },
  {
    id: 'taita-3',
    languageId: 'taita',
    languageName: 'Taita (Kisagala & Kidawida)',
    indigenous: 'Voro! — Voro! Mzima? — Mzima. — Ndo vidzo! — Simanya uwe. — A! nami ni mzima. — Ndo vidzo.',
    literalTranslation: 'Peace/Greeting! — Greeting! Are you well? — I am well. — That is good! — I do not know about you. — Ah! I also am well. — That is good.',
    meaning: 'Recorded verbatim by Rev. J. Alfred Wray in "An Elementary Introduction to the Taita Language" (1894, p. 115 under "Salutation / kurogoa"): traditional Taita dialogic greeting affirming mutual health and community peace before any business is discussed.',
    theme: 'unity',
    sourceCitation: 'Rev. J. Alfred Wray, An Elementary Introduction to the Taita Language (1894, p. 115, Salutation)'
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
    indigenous: 'Haraka, haraka, haina mbaraka (archaic: Kakakaka haina baraka).',
    literalTranslation: 'Hurry, hurry has no blessing.',
    meaning: 'Rushing through important work leads to mistakes; care and deliberation bring lasting results (Taylor 1891, p. 16, § 86).',
    englishEquivalent: 'Haste makes waste.',
    theme: 'patience',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 16, Proverb #86)'
  },
  {
    id: 'swahili-2',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: "Mvita nda mwenda-p'ole, mwenda kwa haraka hukuwaa dole (#360) • P'olep'ole ya kobe humfisha mbali (#462a).",
    literalTranslation: 'Mombasa (Mvita) belongs to the one who goes gently; he who goes in haste stubs his toe (#360) • The slow gait of the tortoise takes him far (#462a).',
    meaning: 'Steady, patient progress reaches the destination safely (Taylor 1891, p. 80 § 360 & p. 109 § 462a).',
    englishEquivalent: 'Slow and steady wins the race.',
    theme: 'patience',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 80 #360 & p. 109 #462a)'
  },
  {
    id: 'swahili-3',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: "Mtu ni watu • Muata-mwongo ni muongo (aliyetoka katika miyongo ya wat'u hawi mt'u).",
    literalTranslation: 'A person is people • He who forsakes human fellowship makes a mistake (he who leaves the company of people is no longer a person).',
    meaning: 'A human being realizes their humanity only in fellowship and mutual care with others (Taylor 1891, p. 162, Addendum § [355a]).',
    englishEquivalent: 'No man is an island.',
    theme: 'unity',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 162, Addendum #[355a])'
  },
  {
    id: 'swahili-4',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Vyema haviozi; Wema hauozi (#572) • Hishima ya kiungwana, hujua atendewayo (#96).',
    literalTranslation: 'Good actions decay not; kindness does not rot (#572) • It is the honour of the gentle-born that he recognizes benefits done for him (#96).',
    meaning: 'A generous deed is remembered across generations and never loses its value (Taylor 1891, p. 19 § 96 & p. 131 § 572).',
    englishEquivalent: 'One good turn deserves another.',
    theme: 'family',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 19 #96 & p. 131 #572)'
  },
  {
    id: 'swahili-5',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Ilimu ndiyo muanga yongozayo kulla shani (#110) • Akili mali (#7).',
    literalTranslation: 'Learning is the light that leads into everything lovely (#110) • Wits are wealth (#7).',
    meaning: 'Recorded verbatim by Rev. W. E. Taylor in "African Aphorisms" (1891, p. 2 § 7 & p. 22 § 110): wisdom and education illuminate every noble path.',
    englishEquivalent: 'Knowledge is power.',
    theme: 'wisdom',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 2 #7 & p. 22 #110)'
  },
  {
    id: 'swahili-6',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: "Mgaagaa na up'wa hali wali mtupu (#259) • Mt'u mume ni kazi (#344).",
    literalTranslation: 'He who toils along the tidal shore does not eat dry rice without relish (#259) • A man is work (#344).',
    meaning: 'Diligent effort along the shore or field always earns sustenance and dignity (Taylor 1891, p. 59 § 259 & p. 77 § 344).',
    englishEquivalent: 'Make hay while the sun shines.',
    theme: 'hard-work',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 59 #259 & p. 77 #344)'
  },
  {
    id: 'swahili-7',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Mtaka cha mvunguni huinama (Steere 1870: sharti ainame).',
    literalTranslation: 'Whoever wants what is under the bedstead must stoop.',
    meaning: 'Worthwhile goals require humility, effort, and willingness to bend down and work (Steere 1870, p. 192 & Taylor 1891, p. 71 § 316).',
    englishEquivalent: 'No pain, no gain.',
    theme: 'hard-work',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales (1870, p. 192) & W. E. Taylor, African Aphorisms (1891, p. 71, Proverb #316)'
  },
  {
    id: 'swahili-8',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Ada ya mja, hunena: muungwana ni kitendo (#1) • Mambo maarifa, si nguvu (#236).',
    literalTranslation: 'The custom of a bondsman is to talk; with the noble-hearted, it is action (#1) • Matters are managed by skill/science, not brute force (#236).',
    meaning: 'Recorded by Rev. W. E. Taylor (1891, p. 1 § 1 & p. 54 § 236): integrity is proven by deeds and thoughtful skill rather than boastful words or violence.',
    englishEquivalent: 'Actions speak louder than words.',
    theme: 'wisdom',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 1 #1 & p. 54 #236)'
  },
  {
    id: 'swahili-9',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Kimya kingi kina mshindo mkuu (#151) • Mche mnyamavu: yuna ngoma za miomo (#253).',
    literalTranslation: 'Much silence has a mighty noise (#151) • Respect the silent person: they have whole concerts of drums behind their lips (#253).',
    meaning: 'Immortalized in Bwana Muyaka bin Haji’s poem in Taylor (1891, pp. 32–33 § 151 & p. 58 § 253): quiet reflection carries deeper weight than loud chatter.',
    englishEquivalent: 'Still waters run deep.',
    theme: 'wisdom',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, pp. 32–33 #151 & p. 58 #253)'
  },
  {
    id: 'swahili-10',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Usipoziba ufa utajenga ukuta (#557) • Usiweke msingi muovu (#558a).',
    literalTranslation: 'Unless you stop the crack, you will have to build a whole wall (#557) • Do not lay a bad foundation (#558a).',
    meaning: 'Recorded verbatim by Rev. W. E. Taylor (1891, p. 128, §§ 557 & 558a): address small flaws and precedents early before they cause collapse.',
    englishEquivalent: 'A stitch in time saves nine.',
    theme: 'wisdom',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 128, Proverbs #557 & #558a)'
  },
  {
    id: 'swahili-11',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Ndia mbili zilimshinda mzee fisi (#409) • Mpanda-farasi wawili hupasuka msamba (#304).',
    literalTranslation: 'Two roads defeated old Hyena (#409) • The rider of two horses splits asunder (#304).',
    meaning: 'Trying to pursue two conflicting paths at once leads to failure (Taylor 1891, p. 69 § 304 & p. 97 § 409).',
    englishEquivalent: 'No man can serve two masters.',
    theme: 'wisdom',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 69 #304 & p. 97 #409)'
  },
  {
    id: 'swahili-12',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Heri kukuwaa kidole kama kukuwaa ulimi (#90) • Kweli iliyo utungu si uwongo ulo tamu (#209).',
    literalTranslation: 'Better to stumble with the toe than to stumble with the tongue (#90) • Bitter truth is better than sweet falsehood (#209).',
    meaning: 'A slip of the foot heals quickly, whereas reckless or deceitful speech inflicts lasting harm (Taylor 1891, p. 17 § 90 & p. 48 § 209).',
    theme: 'patience',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 17 #90 & p. 48 #209)'
  },
  {
    id: 'swahili-13',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Ahadi ni deni.',
    literalTranslation: 'A promise is a debt.',
    meaning: 'Celebrated in Bwana Muyaka’s stanza in Taylor (1891, p. 2, § 6: "Ahadi na miithaki mwenyi kumpa mwenziwe / Ni deni katika haki na kulipa ijuziye"): one’s spoken word is a binding moral obligation.',
    theme: 'wisdom',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 2, Proverb #6)'
  },
  {
    id: 'swahili-14',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: "Mt'u mamae ni Mngu wakwe wa pili (#343) • Radhi ni k'ubwa zaidi ya mali (#463).",
    literalTranslation: 'A person’s mother is their second God (#343) • A parent’s blessing (radhi) is far greater than wealth (#463).',
    meaning: 'Honouring and caring for one’s mother and parents is among the highest virtues in Swahili ethics (Taylor 1891, p. 77 § 343 & p. 110 § 463).',
    theme: 'family',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 77 #343 & p. 110 #463)'
  },
  {
    id: 'swahili-15',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Kikulacho ki nguoni mwako.',
    literalTranslation: 'That which bites you is inside your own garment.',
    meaning: 'Betrayal or trouble often comes from someone close within one’s own circle rather than a stranger (Steere 1870, p. 192 & Taylor 1891, p. 31 § 146 & p. 118 § 502).',
    theme: 'wisdom',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales (1870, p. 192) & W. E. Taylor, African Aphorisms (1891, p. 31, Proverb #146)'
  },
  {
    id: 'swahili-16',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Haba na haba hujaza kibaba (#70) • Bandu, bandu,—humala gogo (#44).',
    literalTranslation: 'Little by little fills the measure (#70) • Chip, chip finishes the log (#44).',
    meaning: 'Small, consistent efforts accumulate into great achievements (Steere 1870, p. 192 & Taylor 1891, p. 9 § 44, p. 13 § 70, p. 118 § 503).',
    englishEquivalent: 'Many a mickle makes a muckle.',
    theme: 'patience',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales (1870, p. 192) & W. E. Taylor, African Aphorisms (1891, p. 13, Proverb #70)'
  },
  {
    id: 'swahili-17',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Kitendawili! — Tega! (1) Nyumba yangu kubwa, haina mlango. — Yayi. (2) Kuku wangu akazalia miibani. — Nanasi. (3) Tandika kitanga, tule kunazi. — Nyota. (4) Anatoka kutembea, anakuja nyumbani, anamwambia, mama nieleke. — Kitanda. (5) Kombe ya sultani i wazi. — Kisima.',
    literalTranslation: 'Riddle! — Set your trap! (1) My house is large, it has no door — An egg (Yayi). (2) My hen has laid among thorns — A pineapple (Nanasi). (3) Spread the mat, and let us eat jujube fruit (kunazi) — The stars (Nyota). (4) He goes out walking, comes home, and says "Mother, take me on your back" — A bedstead (Kitanda). (5) The Sultan’s bowl is open — A well (Kisima).',
    meaning: 'Recorded verbatim by Bishop Edward Steere from Hamisi wa Kayi in "Swahili Tales, as Told by Natives of Zanzibar" (1870, pp. 417–419, Vitendawili #1–#5).',
    theme: 'nature',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (1870, pp. 417–419, Enigmas #1–#5)'
  },
  {
    id: 'swahili-18',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: "Kitendawili! (6) Watoto wangu wana vilemba, asio kilemba si mwanangu. — Fuu. (7) Kafunua jicho kundu. — Jua. (8) Nikitoka kutembea, nikashika ng'ombe mkia. — Kata. (9) Nyama ya reale haijai kikombe. — Mkufu. (10) Hausimiki, hausimami. — Mkufu.",
    literalTranslation: '(6) My children have turbans; he who has no turban is no child of mine — A fuu fruit (in its calyx cup). (7) He opened a red eye — The sun (Jua). (8) Going out to walk, I laid hold of the cow’s tail — A long-handled coconut ladle (Kata). (9) A dollar’s worth of meat does not fill a cup — A metal chain (Mkufu). (10) It is not set up, and does not stand of itself — A chain (Mkufu).',
    meaning: 'Recorded verbatim by Bishop Edward Steere in "Swahili Tales" (1870, pp. 418–421, Vitendawili #6–#10).',
    theme: 'nature',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (1870, pp. 418–421, Enigmas #6–#10)'
  },
  {
    id: 'swahili-19',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Kitendawili! (11) Nimepanda koonde yangu kubwa, nimevuna, haujai mkono. — Nyele. (12) Parra hatta Maka. — Utelezi. (13) Ntipo mbili zavuka mto. — Macho. (14) Nimekwenda njiani, nimeona kisuto; mwenyi kisuto sikumwona. — Mate ya tambuu.',
    literalTranslation: '(11) I sowed my great field and reaped it, and my hand is not full — Hair (Nyele). (12) A scrape/slide all the way to Mecca — Slipping (Utelezi). (13) Two nuts cross a river — The eyes (Macho). (14) I went on the road and saw a woman’s red cloth (kisuto), but the wearer I did not see — Red spittle of betel-leaf (Mate ya tambuu).',
    meaning: 'Recorded verbatim by Bishop Edward Steere in "Swahili Tales" (1870, pp. 420–421, Vitendawili #11–#13, and Note 6, p. 492).',
    theme: 'nature',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (1870, pp. 420–421, Enigmas #11–#13 & Note 6, p. 492)'
  },
  {
    id: 'swahili-20',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: 'Maji yaliyomwaika hayazoeleki (Maji yakimwagika hayazoleki).',
    literalTranslation: 'Water once spilled cannot be scooped up again.',
    meaning: 'Some actions and words are irreversible; act with forethought (Taylor 1891, p. 53 § 231 & Krapf 1882).',
    englishEquivalent: 'It is no use crying over spilt milk.',
    theme: 'wisdom',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms (1891, p. 53, Proverb #231) & Rev. Dr. L. Krapf (1882)'
  },
  {
    id: 'swahili-21',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili)',
    indigenous: "Kidole kimoja hakivundi t'awa (#139) • Kinga na kinga, ndipo moto uwakapo (#152).",
    literalTranslation: 'One finger does not crush a louse (#139) • Firebrand with firebrand, that is when the fire blazes (#152).',
    meaning: 'Recorded verbatim by Rev. W. E. Taylor in "African Aphorisms" (1891, p. 30 § 139 & p. 33 § 152): solitary effort is powerless without cooperation and fellowship.',
    englishEquivalent: 'United we stand, divided we fall.',
    theme: 'unity',
    sourceCitation: 'Rev. W. E. Taylor, African Aphorisms; or, Saws from Swahili-Land (1891, p. 30 #139 & p. 33 #152)'
  },
  {
    id: 'swahili-22',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili — Steere 1870 Mifano)',
    indigenous: '(1) Kufaa hakufaiki. (2) Ulimi hauna mfupa. (3) Mvumbika changa hula mbovu. (4) Kitu kipya ki chema, ingawa kidonda. (5) Mbio za sakafuni zikoma ukingoni. (6) Kulla ndege huruka kwa bawa lakwe. (7) Kamba hukatikia pembamba. (8) Nazi mbovu harabu ya nzima. (9) Mstahimilivu hula mbivu. (10) Mpanda ngazi hushuka.',
    literalTranslation: '(1) Being of use does not profit oneself. (2) The tongue has no bone (Note 62, p. 499). (3) He who stores unripe fruit eats rotten ones. (4) A new thing is good, though it be a sore (Note 63, p. 499). (5) Running on a flat stone roof ends at the edge (Note 64, p. 499). (6) Every bird flies with its own wing. (7) The rope breaks at its thinnest place. (8) A rotten coconut spoils the sound ones. (9) The patient person eats ripe fruit. (10) He who climbs a ladder comes down again.',
    meaning: 'First ten of the twenty verbatim Swahili proverbs (Mifano) recorded by Bishop Edward Steere in "Swahili Tales, as Told by Natives of Zanzibar" (1870, pp. 191–193 & Notes 62–64, p. 499).',
    englishEquivalent: 'Everything comes to him who waits; pride goes before a fall.',
    theme: 'patience',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (1870, pp. 191–193, Mifano #1–#10)'
  },
  {
    id: 'swahili-23',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili — Steere 1870 Mifano)',
    indigenous: '(11) Mwenyi kisu kikali ndiye atakayekula nyama. (12) Kikulacho ki nguoni mwako. (13) Mtaka cha mvunguni sharti ainame. (14) Haba na haba hujaza kibaba. (15) Kucha Mungu si kilemba cheupe. (16) Kawaida ni kama sheria. (17) Kazi mbi si mchezo mwema? (18) Chururu si ndo! ndo! ndo! (19) Kulla mwenyi kusubiri hupata mwisho mwema. (20) Amekula nini hatta ameingia kisimani?',
    literalTranslation: '(11) He who has a sharp knife is the one who will eat meat. (12) That which bites you is inside your clothes. (13) He who wants what is under the bedstead must stoop. (14) Little and little fills the measure. (15) Fearing God is not wearing a white turban. (16) Custom is like law. (17) Is not bad work better than good play? (18) A trickle is not drop! drop! drop! (19) Everyone who is patient gets a good end. (20) What has he eaten that he has fallen into a well (got into a scrape, Note 66, p. 499)?',
    meaning: 'Second ten of the twenty verbatim Swahili proverbs (Mifano) recorded by Bishop Edward Steere in "Swahili Tales" (1870, pp. 192–195 & Notes 65–66, p. 499).',
    englishEquivalent: 'The cowl does not make the monk; custom is second nature.',
    theme: 'hard-work',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (1870, pp. 192–195, Mifano #11–#20)'
  },
  {
    id: 'swahili-24',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili — Steere 1870 Narrative Proverbs)',
    indigenous: 'Atendaye mema humtendea nafusi yake (p. 22) • Killa kitu kwa kiasi chakwe (p. 40) • Mume ni kazi, mke ni nguo (p. 48) • Nzi kufa tuini (kidondani) si hasara (p. 90 & Note 43, p. 497) • Bilisi wa mtu ni mtu (p. 114) • Ulimwenguni ni mawili, ni kuwa mzima na kufa (p. 274).',
    literalTranslation: 'He who does good does it to himself (p. 22) • Everything in its proper measure (p. 40) • A husband is work, a wife is clothes (p. 48) • For a fly to die in coconut cream (or on a sore) is no loss (p. 90 & Note 43, p. 497) • The devil/tempter of a person is a person (p. 114) • In the world there are two things: living and dying (p. 274).',
    meaning: 'Proverbs embedded in the narratives of "Sultani Darai" and "Sultani Majnuni" in Bishop Edward Steere’s "Swahili Tales" (1870, pp. 22, 40, 48, 90, 114, 244, 274, 497).',
    englishEquivalent: 'Moderation in all things; virtue is its own reward.',
    theme: 'wisdom',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (1870, pp. 22, 40, 48, 90, 114, 274, 497)'
  },
  {
    id: 'swahili-25',
    languageId: 'swahili',
    languageName: 'Swahili (Kiswahili — Kimvita & Mrima Tales in Steere 1870)',
    indigenous: 'Asiyojua maana, haambiwi maana; Akataaye witwa hakataa aitiwalo (pp. 296, 304) • Nawaza yale mawe mawili, moja kubwa na moja dogo, lile dogo halendi juu, wala lile kubwa halendi tini; Siwezi kuja kukula upande wa mbeleni, mato yaona haya (pp. 326, 328) • Niponye wa jua nitakuponya wa mvua (pp. 402, 424).',
    literalTranslation: 'He who does not know the meaning will not be told the meaning; he who refuses to be called refuses what he is called for (pp. 296, 304) • I am thinking about those two stones, one big and one little; the little one [earth] does not go up, nor does the big one [sky] go down; I cannot come eating you in front, the eyes feel shame (Kimvita tale "Kititi, na Fisi, na Simba", pp. 326, 328) • Save me from the sun, and I will save you from the rain ("Ao Rathi, Ao Mali" & "Nyani, na Simba, na Nyoka", pp. 402, 424).',
    meaning: 'Recorded verbatim by Bishop Edward Steere in "Swahili Tales" (1870, pp. 296, 304, 326–328, 402, 424): combines the maxims of "Uza Ghali", the Mombasa (Kimvita) philosophical riddles and proverb of "Kititi, na Fisi, na Simba" told by Kathi Mohammed bin Abd en Nuri (grandson of Sheikh Muhyiddin of Mombasa), and the gratitude refrain of "Ao Rathi, Ao Mali" and Munyi Khatibu’s "Nyani, na Simba, na Nyoka".',
    englishEquivalent: 'One good turn deserves another.',
    theme: 'family',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (1870, pp. 296, 304, 326–328, 402, 424)'
  },
  {
    id: 'swahili-26',
    languageId: 'swahili',
    languageName: 'Swahili (Kingozi / Kiamu & Kimvita — Steere 1870 Poetry)',
    indigenous: 'Kushindwa na mashujaa si unyonge (p. xiii) • Ni upi mchayi kicho chakwe kimokoao? Na mjasiri umurie upunguwao? ... Bolewe mchayi mcha kufa hapati heshima (Mashairi ya Liongo, pp. 464–469) • Si simba mikia wameao vuzi na singa; simba mashujaa wasahili ngozi na nyama (p. 468).',
    literalTranslation: 'To be beaten by heroes is no mean thing (p. xiii) • Who that fears has been saved by his fear? Or what bold man’s life has been shortened by courage? ... Woe to the coward, he who fears death gets no honour (pp. 464–465) • They are not lions with tails and hair growing on neck and back; true lions are heroes who care not for skins and flesh (pp. 468–469).',
    meaning: 'Heroic epigram and classical Kingozi/Kiamu 5-line takhmisi stanzas from "Mashairi ya Liongo" (composed by Sheikh Abdallah bin Ali bin Nasir Muyuweni concerning Liongo Fumo of Shanga and Ozi on the Kenyan coast) in Bishop Edward Steere’s "Swahili Tales" (1870, pp. xiii, 439–471).',
    englishEquivalent: 'Cowards die many times before their deaths; the valiant never taste of death but once.',
    theme: 'wisdom',
    sourceCitation: 'Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (1870, Preface p. xiii & Mashairi ya Liongo, pp. 455–471)'
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
    indigenous: 'Njemps Liabori (Kubwa) o Njemps Lekepir (Ndogo) o Korvan: Il Mayek oo Il Derito (Dundas 1910, pp. 49–55).',
    literalTranslation: 'Downstream Njemps (on the Molo) and Upstream Njemps (on the Tigrish) and Korvan: The Il Mayek ritual officiant and the ten Il Derito elders open the irrigation furrow.',
    meaning: 'Documented by Hon. K. R. Dundas in "Notes on the Tribes Inhabiting the Baringo District" (1910, pp. 49–55): ten elders of the Il Derito age-set (preceding Il Merishu) assist a member of the Il Mayek clan in sacrificing a sirwa sheep to open the irrigation ditch—teaching that communal harmony with the Il Mayek keeps the life-giving waters flowing.',
    theme: 'unity',
    sourceCitation: 'Hon. K. R. Dundas, Notes on the Tribes Inhabiting the Baringo District, JRAI Vol. 40 (1910, pp. 49–55)'
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
    literalTranslation: 'God (Were) has helped me (upon returning from a journey); may God (Nasayi, "the one adored") protect you (upon taking leave)!',
    meaning: 'Recorded verbatim by Rev. N. Stam in "The Bahanga" (1929, p. 160): the classical Buhanga thanksgiving and farewell blessings invoking Were / Nasayi, alongside spitting toward the morning sun (liyuba, pp. 160–161) because spittle is the sign of life given by God.',
    theme: 'family',
    sourceCitation: 'Rev. N. Stam, The Bahanga, Catholic Anthropological Conference Vol. I, No. 4 (1929, pp. 160–161)'
  },
  {
    id: 'luhya-5',
    languageId: 'luhya',
    languageName: 'Luhya (Luhanga / Wanga)',
    indigenous: 'Abakuku mulire omu; evinambwa mulire omu; evisoni mulire omu! (Stam 1929).',
    literalTranslation: 'Grandfathers (abakuku), eat here; great-grandfathers (evinambwa), eat here; great-great-grandfathers (evisoni), eat here!',
    meaning: 'Recorded verbatim by Rev. N. Stam in "The Bahanga" (1929, p. 155): the three-generational ancestral invocation spoken by the homestead sacrificer (omumali owe misango) before the lusiola/lusambwa pole and ancestral stones (amagina ake misambwa) and the first wife's miniature shrine-hut (khatsu khe misango).',
    theme: 'unity',
    sourceCitation: 'Rev. N. Stam, The Bahanga (1929, pp. 152–155) & C. W. Hobley, Anthropological Studies in Kavirondo (1903, pp. 342–343)'
  },
  {
    id: 'luhya-6',
    languageId: 'luhya',
    languageName: 'Luhya (Luhanga / Ama-Wanga)',
    indigenous: 'Murembe (Erythrina tomentosa) — "When I told you to cut the poor wimbi grain, you refused... in future you will not again despise the grain, even if it is not of the best."',
    literalTranslation: 'Murembe means "Peace" (named after the sacred coral tree under which peace covenants are ratified) • Moral of the Ama-Wanga Fable of the Man and the Foolish Woman (Hobley 1903, pp. 338, 343–344).',
    meaning: 'Recorded by C. W. Hobley in "Anthropological Studies in Kavirondo and Nandi" (1903, pp. 338, 343–344): teaches foresight, gratitude for humble provisions stored before famine, and peacemaking under the Murembe tree.',
    englishEquivalent: 'Waste not, want not.',
    theme: 'hard-work',
    sourceCitation: 'C. W. Hobley, British East Africa: Anthropological Studies in Kavirondo and Nandi, JAI Vol. 33 (1903, pp. 338, 343–344)'
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
    languageName: 'Kisii (Ekegusii / Igizii)',
    indigenous: 'Amaboko abere nigo agokora egesieri • Abantu baya; Enyumba yane, Omuji uitu (Johnston 1902 #49 Igizii).',
    literalTranslation: 'Two hands together build the doorway (gesie / ekige) • Good people; my house, our homestead/town (Johnston 1902, pp. 995, 999–1000).',
    meaning: 'Cooperation (risaga) accomplishes what no solitary worker can finish alone, grounded in Sir Harry Johnston’s 1902 Igizii (Kósova) corpus.',
    englishEquivalent: 'Many hands make light work.',
    theme: 'unity',
    sourceCitation: 'Sir Harry H. Johnston, The Uganda Protectorate, Vol. II (1902, pp. 993–1000, #49 Igizii) & Traditional Ekegusii Proverb'
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
  {
    id: 'somali-5',
    languageId: 'somali',
    languageName: 'Somali (Af-Soomaali)',
    indigenous: 'Hawl adun ma đamáto ninba wa intis.',
    literalTranslation: 'The work of the world finishes not; each man has his share.',
    meaning: 'Recorded verbatim by Lt. J. W. C. Kirk in "A Grammar of the Somali Language" (1905, § 227, p. 111): human labour is unending, so each person should faithfully fulfil their own portion.',
    englishEquivalent: 'Do your own part faithfully.',
    theme: 'hard-work',
    sourceCitation: 'Lt. J. W. C. Kirk, A Grammar of the Somali Language (1905, § 227, p. 111)'
  },
  {
    id: 'somali-6',
    languageId: 'somali',
    languageName: 'Somali (Af-Soomaali)',
    indigenous: 'Tollimòno ka dòrne, o sàmir bannu dèdallei — O war, tollo, inna daya!',
    literalTranslation: 'We must choose brotherhood as one tribe, and strive for peace — O ye tribes, desist from strife!',
    meaning: 'Recorded verbatim by Lt. J. W. C. Kirk in "A Grammar of the Somali Language" (1905, Song IV, p. 176): classical Geeraar peace appeal urging clans to choose kinship (tollimòno) and patience/peace (sàmir) over feud.',
    theme: 'unity',
    sourceCitation: 'Lt. J. W. C. Kirk, A Grammar of the Somali Language (1905, Song IV: Appeal for Peace, p. 176)'
  },
  {
    id: 'somali-7',
    languageId: 'somali',
    languageName: 'Somali (Af-Soomaali)',
    indigenous: 'Gerar wa bogholal, wa bađwein iyo môjad, wa babùrki sidìsa.',
    literalTranslation: 'Geeraar songs are in hundreds, like the great ocean and its waves, like the ships.',
    meaning: 'Recorded verbatim by Lt. J. W. C. Kirk in "A Grammar of the Somali Language" (1905, Song VIII, p. 178): celebrates the boundless depth of Somali oral poetry.',
    theme: 'wisdom',
    sourceCitation: 'Lt. J. W. C. Kirk, A Grammar of the Somali Language (1905, Song VIII, p. 178)'
  },

  // ── 14. Borana / Oromo (Karl & Lawrence Tutschek 1844–1845 "Dictionary & Grammar of the Galla Language", Rev. J. L. Krapf 1842 — Public Domain) ──
  {
    id: 'borana-1',
    languageId: 'borana',
    languageName: 'Borana / Oromo (Afaan Borana)',
    indigenous: 'Ya Waca nagan na bultshite nagan na oltshi; ede inand\'aca karakora kan naga naf god\'te, ya Waca, milkiko na gadyêlzi.',
    literalTranslation: 'O God (Waca), thou hast let me pass the night in peace, let me pass the day in peace; wherever I may go upon my way which thou madest peaceable for me, O God, lead my steps.',
    meaning: 'Recorded verbatim by Karl & Lawrence Tutschek in "A Grammar of the Galla Language" (1845, pp. 87–88, Morning Prayer): traditional Oromo/Borana morning invocation for peace (nagaa) and guidance.',
    theme: 'unity',
    sourceCitation: 'Karl & Lawrence Tutschek, A Grammar of the Galla Language (1845, pp. 87–88, Morning Prayer)'
  },
  {
    id: 'borana-2',
    languageId: 'borana',
    languageName: 'Borana / Oromo (Afaan Borana)',
    indigenous: 'D\'ad\'an ibidti bue hindebiu.',
    literalTranslation: 'Butter fallen into the fire does not come back.',
    meaning: 'Quoted by Akafed\'e Dalle in his letter of October 21, 1840 in Tutschek’s "A Grammar of the Galla Language" (1845, p. 90): some losses cannot be undone as they were before, yet patience and hope endure.',
    englishEquivalent: 'It is no use crying over spilt milk.',
    theme: 'patience',
    sourceCitation: 'Karl & Lawrence Tutschek, A Grammar of the Galla Language (1845, p. 90, Akafed\'e Dalle\'s Letter)'
  },
  {
    id: 'borana-3',
    languageId: 'borana',
    languageName: 'Borana / Oromo (Afaan Borana)',
    indigenous: 'Wacayo laftana, goftako! Ho haman nati d\'ufe, aka mukni adu narra cabu, ati hama nati cabi, goftako, gadiza na tai!',
    literalTranslation: 'Good God of this earth, my Lord! When misfortune comes to me, as a tree keeps off the sun from me, mayest thou keep off misfortune; my Lord, be thou my shadow!',
    meaning: 'Recorded verbatim by Karl & Lawrence Tutschek in "A Grammar of the Galla Language" (1845, p. 84, Prayer 1 vv. 1–2): Akafed\'e’s prayer after the war between Hambo and Hamaya.',
    theme: 'nature',
    sourceCitation: 'Karl & Lawrence Tutschek, A Grammar of the Galla Language (1845, p. 84, Prayer 1 vv. 1–2)'
  },
  {
    id: 'borana-4',
    languageId: 'borana',
    languageName: 'Borana / Oromo (Afaan Borana)',
    indigenous: 'Ya Waca nagan na oltshite, nagan na bultshi, gofta goftan cabne; harkake dyaladan ola, harkake dyaladan bula, had\'ikozi, abankozi.',
    literalTranslation: 'O God, thou hast let me pass the day in peace, let me pass the night in peace, O Lord who hast no Lord; under thy hand I pass the day, under thy hand I pass the night, thou art my mother, thou my father.',
    meaning: 'Recorded verbatim in Karl & Lawrence Tutschek’s "A Grammar of the Galla Language" (1845, p. 88, Evening Prayer).',
    theme: 'family',
    sourceCitation: 'Karl & Lawrence Tutschek, A Grammar of the Galla Language (1845, p. 88, Evening Prayer)'
  },
  {
    id: 'borana-5',
    languageId: 'borana',
    languageName: 'Borana / Oromo (Afaan Borana)',
    indigenous: 'Bagila ñad\'u, malif d\'aka lakize? — Zoba dibad\'u, malif naca lakize?',
    literalTranslation: 'He who chews hard beans, why does he leave stones? — He who lies and anoints his head with butter, why does he omit woman’s foot-rings?',
    meaning: 'Recorded by Karl & Lawrence Tutschek in "A Grammar of the Galla Language" (1845, § 249.2, p. 77): satirical quatrain rebuking those who boast of unearned honour or claim exploits they did not perform.',
    englishEquivalent: 'Empty vessels make the most noise.',
    theme: 'humility',
    sourceCitation: 'Karl & Lawrence Tutschek, A Grammar of the Galla Language (1845, § 249.2, p. 77)'
  },
  {
    id: 'borana-6',
    languageId: 'borana',
    languageName: 'Borana / Oromo (Afaan Borana / Shoa Galla)',
    indigenous: "Kuni ormōda! Naga ambulte! — Wak' nagaia si kakennu! • Makmaksa, arāra (kan ararsu), kaku • Sanbata gudda, hutshi dura, hutshi lamafa, rōbi, kāmis, tshimāta, sanbata tenna.",
    literalTranslation: 'This is an Oromo/Galla! Good morning! — Farewell! May God give thee peace! • Proverb/fable (makmaksa), reconciliation (arāra; kan ararsu = peacemaker), covenant oath (kaku) • Sunday, Monday ("first work-day"), Tuesday ("second work-day"), Wednesday, Thursday, Friday, Saturday ("little Sabbath").',
    meaning: 'Recorded verbatim by Rev. J. L. Krapf & Rev. C. W. Isenberg in "Vocabulary of the Galla Language" (London, CMS, 1842, pp. i–ii, 1–42): documents the Oromo autonym (ormo / pl. orma), daily salutations and blessings of peace (nagaia), peacemaking (arāra), oral proverbs and fables (makmaksa), governance (moti, abadula, kaletsha, Abba korritsha, tshawa), age-grades (kondāla / dergegēsa = 17-year-old youth, tsharsa / tsharti = elders), and the 7-day week.',
    theme: 'wisdom',
    sourceCitation: 'Rev. J. L. Krapf & Rev. C. W. Isenberg, Vocabulary of the Galla Language (London, CMS, 1842, pp. i–ii, 1–42)'
  },
  {
    id: 'borana-7',
    languageId: 'borana',
    languageName: 'Borana / Oromo (Afaan Borana)',
    indigenous: "Idya Wacᵃ kaba ura; hadarinza kaba ura (pp. 27, 190) • Uma Wacayoti hinkolfin! (p. 28) • Mukni Wacᵃ careṅ domu (p. 102) • Tchaba ati murte Naman bad'z'izin; — Liqi ati fud'te Naman bazizin (p. 72).",
    literalTranslation: "The eye of God penetrates the wall; His wisdom penetrates a wall (pp. 27, 190) • Do thou not laugh at any of God's works! (p. 28) • The edge of the spear of God is not blunted (p. 102) • The wood which thou didst hew, let nobody carry; — The loan which thou didst take, let nobody pay (p. 72).",
    meaning: "Recorded verbatim by Karl & Lawrence Tutschek in 'Dictionary of the Galla Language' (Part I, Munich, 1844, pp. 27–28, 72, 102, 190): teaches reverence for Wacayo's omniscience and creation, and personal accountability for one's own burdens and debts.",
    englishEquivalent: "Nothing is hidden from God's eye; bear your own burden and pay your own debt.",
    theme: 'wisdom',
    sourceCitation: 'Karl & Lawrence Tutschek, Dictionary of the Galla Language, Part I (Munich, 1844, pp. 27–28, 72, 102, 190)'
  },
  {
    id: 'borana-8',
    languageId: 'borana',
    languageName: 'Borana / Oromo (Afaan Borana)',
    indigenous: "Ilkanin namni gitᵃumtu fira (pp. 20, 121) • Tchitinif ibida waliṅ gain; biçanif ibidi wali ha gau (p. 74) • Ibidif biçan hirmiṅ cabu, fulif gongon d'okzaṅ cabu (p. 114) • Namni ho bola lit'e hadaroma (p. 190).",
    literalTranslation: "By the teeth all men are related/friends (pp. 20, 121) • Chaff and fire shall not come near each other; water and fire may approach each other (p. 74) • Fire and water have no prohibition, face and throat have no concealment (p. 114) • When a man has fallen into the pit, he becomes wise (p. 190).",
    meaning: "Recorded verbatim by Karl & Lawrence Tutschek in 'Dictionary of the Galla Language' (Part I, Munich, 1844, pp. 20, 74, 114, 121, 190): warns against trusting every smiling face, urges peacemakers to bring water rather than chaff to a quarrel, affirms that water and fire must never be denied to a stranger, and notes how adversity teaches wisdom.",
    englishEquivalent: "All that glitters is not gold; a soft answer turns away wrath; experience teaches fools.",
    theme: 'unity',
    sourceCitation: 'Karl & Lawrence Tutschek, Dictionary of the Galla Language, Part I (Munich, 1844, pp. 20, 74, 114, 121, 190)'
  },
  {
    id: 'borana-9',
    languageId: 'borana',
    languageName: 'Borana / Oromo (Afaan Borana)',
    indigenous: "Koromin wal ate, Latshu gugurod'a; — Nadeṅ wal arate, Latshu muzurod'a (p. 1) • Ombo z'an bared'a, Maf baretu d'abe? Dyalalti d'ukuba, Maf arera d'abe? (p. 10) • Galani na ñad'e, Giben na gezize; — Ano d'ufa djenan, D'iben na tezize (p. 61).",
    literalTranslation: "Bulls gore each other, both are black; — Women altercate, both are newly married (p. 1) • Ombo z'an is handsome, why does he not find a fair maiden? Love is an illness, why does it not find medicine [arera]? (p. 10) • The river devoured me and carried me to the Gibe lake; — I said 'I shall come', but an obstacle detained me (p. 61).",
    meaning: "Verbatim traditional Galla songs (wetu) recorded by Karl & Lawrence Tutschek in 'Dictionary of the Galla Language' (Part I, Munich, 1844, pp. 1, 10, 61, 117–118, 127, 148, 158) from Akafed'e Dalle, Otshu Aga, Aman Gonda, and Bilile, alongside the storytelling call 'rago rag!' (p. 152) and riddle call 'hibo hib!' (p. 198).",
    theme: 'family',
    sourceCitation: 'Karl & Lawrence Tutschek, Dictionary of the Galla Language, Part I (Munich, 1844, pp. 1, 10, 61, 117–118, 127, 148, 152, 158, 198)'
  },
  {
    id: 'borana-10',
    languageId: 'borana',
    languageName: 'Borana / Orma (Dana River Kigálla)',
    indigenous: 'Nagaia bulte? — Wakne nágaia si kennu! • Nágaia & arára (ka arársu); tába & makmáksa; soda Wakáti (Krapf 1850).',
    literalTranslation: 'Hast thou passed the night in peace (Good morning)? — Farewell! May God (Wāka) give thee peace! • Peace and reconciliation (ka arársu = mediator/peacemaker); story and proverb (makmáksa); reverence for God (soda Wakáti).',
    meaning: 'Recorded verbatim by Rev. Dr. J. L. Krapf in "Vocabulary of Six East-African Languages" (Tübingen, 1850, pp. viii–ix, 20, 23–24, 33, 36, 39) from the Dana (Tana) River Galla (Orma) near Berraráta in 1845: proves the unity of Southern Kenyan Oromo (Orma/Borana) with Northern Shoan Oromo and highlights the centrality of peace (nágaia), mediation (arára), and covenant oaths (kákăno).',
    theme: 'unity',
    sourceCitation: 'Rev. Dr. J. L. Krapf, Vocabulary of Six East-African Languages (Tübingen, 1850, pp. viii–ix, 1–64)'
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
  {
    id: 'kikuyu-cw-4',
    languageId: 'kikuyu',
    languageName: 'Kikuyu (Gĩkũyũ)',
    indigenous: 'Guso ("Do you hear?")! — (1) "What hangs down?" — "Bananas." (2) "Why do I hear a noise?" — "The birds are in the shamba." (3) "What takes a winding course?" — "An N\'doróbo on the road." (4) "The young men go, the old men stay?" — "The ashes are poured out, the hearth-stones remain." (5) "What goes from hill to hill?" — "The foot."',
    literalTranslation: 'Five verbatim Akikúyu Guso riddles and the boys\' rapid-fire Q&A game ("What did you eat yesterday, little N\'doróbo? — Ou-thi...") recorded by W. Scoresby & Katherine Routledge (1910, pp. 191–192).',
    meaning: 'Recorded verbatim in W. S. & K. Routledge, "With a Prehistoric People: The Akikuyu of British East Africa" (1910, pp. 191–192): illustrates how Akikúyu elders and youth sharpen memory and observation through evening riddle contests around the homestead hearthstones (ma-hí-ga).',
    englishEquivalent: 'Youth passes like ashes swept away, while the ancestral hearthstones endure.',
    theme: 'wisdom',
    sourceCitation: 'W. Scoresby & Katherine Routledge, With a Prehistoric People: The Akikuyu of British East Africa (1910, pp. 191–192)'
  },
  {
    id: 'kikuyu-cw-5',
    languageId: 'kikuyu',
    languageName: 'Kikuyu (Gĩkũyũ)',
    indigenous: '"O N\'gaí / Mwi-nin-ya-ga! Give us health, give us children, give us rich increase of our flocks and herds and of the fruits of the earth!" — Responses: "N\'ga-na!" ("So be it / Amen!") & "Sa-i! Sa-i!" ("Hear, hear!") • Purification: "Ta-hí-ka thá-hu! Ta-hí-ka ki-ú-ru! Ni-da-ni-na thá-hu wa-ku."',
    literalTranslation: 'Chief Mungé\'s verbatim prayer at the eight-shrub Mu-gú-mu sacrifice to N\'gaí / Mwi-nin-ya-ga ("Possessor of Whiteness" on Ki-ri-nya-ga / Ki-re-í-ra) and the beer-offering responses "N\'ga-na!" and "Sa-i! Sa-i!" (pp. 230–235), alongside the Mundu Mugo\'s purification formulas "Vomit the sin! Expel what is bad! I have purged your sin" (pp. 262–263).',
    meaning: 'Recorded verbatim by W. Scoresby & Katherine Routledge in "With a Prehistoric People" (1910, pp. 225–236, 256–263): documents communal thanksgiving and rain-prayer beneath the sacred Mu-gú-mu fig tree, the distinction between living soul (N\'gor\'o) and ancestral spirit (N\'góma in Mi-i-ri-ni-ya Mi-kon-go-i), and ritual reconciliation of the 29 causes of Thá-hu.',
    theme: 'unity',
    sourceCitation: 'W. Scoresby & Katherine Routledge, With a Prehistoric People: The Akikuyu of British East Africa (1910, pp. 225–236, 256–263)'
  },
  {
    id: 'kikuyu-cw-6',
    languageId: 'kikuyu',
    languageName: 'Kikuyu (Gĩkũyũ)',
    indigenous: 'Ro-gá-no (pl. N\'gá-no): Wanjíru (The Maiden Sacrificed for Rain) • Wagacharaíbu & M\'wer\'u (The Lost Sister) • Kacham\'bi & the Kaniónikan\'ga Bird • Mukun\'ga M\'bura (The Giant of the Great Water) • M\'wambía & the Two-Mouthed N\'jengé (Routledge 1910, pp. 285–328).',
    literalTranslation: 'The 13 traditional Akikúyu folktales (N\'gá-no) and creation myths (Mam\'ba & N\'jí-ri in the age of Man-jí-ri; Sun, Moon & Mu-ti-ru-m\'we-ri) recorded by W. Scoresby & Katherine Routledge (1910, pp. 9, 283–328).',
    meaning: 'Recorded in Part IV of W. S. & K. Routledge (1910, pp. 283–328): these 13 fireside narratives teach loyalty to siblings (Wagacharaíbu rescuing M\'wer\'u; Washúma rescuing Wadúa; Washíshi rescuing Moiréwanyína), humility on the journey (in contrast to the Four Boastful Warriors), kindness to the mistreated (Wanjíru & the du-tu-ra doves), and courage over greed and monsters (Kacham\'bi, M\'wambía, and Sungúra the Hare).',
    theme: 'family',
    sourceCitation: 'W. Scoresby & Katherine Routledge, With a Prehistoric People: The Akikuyu of British East Africa (1910, Part IV: Folk-Lore, pp. 283–328)'
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
    indigenous: "Wat enimbich • Nying' mag kinde: onyango (morning), oching (noon), odiambo (afternoon), otieno (night) • Nying' mag pak: obele (much mtama), oliech (elephant-slayer), obonyo (locust) (Northcote 1907).",
    literalTranslation: 'Kinship stretches far across the land • Verbatim time-of-day birth names: onyango (morning), oching (noon), odiambo (afternoon), otieno (night) • Hereditary nicknames: obele (owner of much mtama millet), oliech (slayer of an elephant), obonyo (man like a locust).',
    meaning: 'Grounded in G. A. S. Northcote (1907, JRAI Vol. 37, pp. 58–66) and Mill-Hill Fathers (1920): documents Jaluo kinship with the Dinka, Aluri (Alur), and Acholi near Wadilai, strict clan exogamy, first-wife chieftaincy succession, the 3-goat fine for touching a married woman’s grass tassel (chieno), pre-1883 (20 cattle) vs. 1907 (7 cattle or 1 heifer and 1 bull) bride-wealth, recumbent in-hut burial (6-day mourning for a chief, 3 days for a commoner), rain-making with a hollow reed under the sacred tree, 4-pronged wooden fish-spears, and the 8-stringed harp.',
    theme: 'family',
    sourceCitation: 'G. A. S. Northcote, The Nilotic Kavirondo, JRAI Vol. 37 (1907, pp. 58–66) & Mill-Hill Fathers (1920)'
  },
  {
    id: 'luo-cw-3',
    languageId: 'luo',
    languageName: 'Luo (Dholuo)',
    indigenous: 'Simbi abūr (Simbi Nyaima) • Apōdtho kod Ramogi (Hobley 1903).',
    literalTranslation: 'The Crater Lake of Simbi (abūr = hole/pit) • Apōdtho and Ramogi, founders of the Ja-Luo.',
    meaning: 'Recorded by C. W. Hobley in "Anthropological Studies in Kavirondo and Nandi" (1903, pp. 326–331, 349–350): the legend of Simbi abūr in Karachuonyo warns against turning away a hungry stranger, as only the compassionate household that shared food and water was saved before the village was submerged.',
    englishEquivalent: 'Be not forgetful to entertain strangers.',
    theme: 'humility',
    sourceCitation: 'C. W. Hobley, British East Africa: Anthropological Studies in Kavirondo and Nandi, JAI Vol. 33 (1903, pp. 326–331, 349–350)'
  },

  // ── 17. Pokomo (Rev. Dr. J. L. Krapf 1850 "Vocabulary of Six East-African Languages" & Sir Harry Johnston 1919 #13 Pωkωmω — Public Domain) ──
  {
    id: 'pokomo-1',
    languageId: 'pokomo',
    languageName: 'Pokomo (Kipfokomo)',
    indigenous: 'Muho wa Tsana ni muyo wa mudzi (Krapf 1850 & Johnston 1919 #13 Pωkωmω).',
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
  {
    id: 'pokomo-3',
    languageId: 'pokomo',
    languageName: 'Pokomo (Kipokómo — Lower Tana / Kalindi)',
    indigenous: 'Ku dsáka ni ku dsáka, ku Bféni ni ku Bféni! • Muáka wa bfúla (Krapf 1850).',
    literalTranslation: 'Going downstream (southward to the coast) is ku dsáka; going upstream (northward up the Pokómo / Dána River) is ku Bféni! • The season of rain and flood (muáka wa bfúla).',
    meaning: 'Recorded verbatim by Rev. Dr. J. L. Krapf in "Vocabulary of Six East-African Languages" (Tübingen, 1850, pp. vii–viii, 1–64) from Hadji Omar, exiled brother of Chief Bonnaia Dadia of Kalindi: documents how Pokomo directional orientation, trade (exchanging mpunga rice and mahindi maize with the Galla of Berraráta for ivory), and governance by elders (msée / muana Bféni) are anchored to the flow of the Tana River (called Pokómo by the Pokomo and Máro by the Galla).',
    theme: 'nature',
    sourceCitation: 'Rev. Dr. J. L. Krapf, Vocabulary of Six East-African Languages (Tübingen, 1850, pp. vii–viii, 1–64)'
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
          { target: 'Mtaka cha mvunguni huinama (sharti ainame)', source: 'Whoever wants what is under the bed must stoop', pronunciation: 'm-tah-kah chah m-voon-goo-nee', hint: 'Steere (1870, p. 192) & Taylor (1891, p. 71 #316)' },
          { target: 'Haba na haba hujaza kibaba', source: 'Little by little fills the measure', pronunciation: 'hah-bah nah hah-bah hoo-jah-zah kee-bah-bah', hint: 'Steere (1870, p. 192) & Taylor (1891, p. 13 #70)' }
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
          { target: 'shokangwa / jembengwa / kitingwa (Taylor 1891 -ngwa)', source: "someone else's axe / hoe / stool (possessive pronoun of alienation = -a wat'u)", pronunciation: 'sho-kan-gwa / jem-ben-gwa / ki-tin-gwa', hint: 'W. E. Taylor (1891, Appendix B, pp. 166–167) altruistic possessive -ngwa' },
          { target: 'Kinyume (Steere 1894 Appendix I, pp. 425–426)', source: 'Syllable-inversion wordplay written out by Johari (e.g., nyumba → mbanyu, ng\'ombe → mbeng\'o, kitabu → bukita)', pronunciation: 'kee-nyoo-meh', hint: 'Steere & Madan (1894, pp. 425–426) 52 Merima-dialect Kinyume specimens' },
          { target: 'Kitendawili! — Tega!', source: 'A riddle! — Set your trap! (Riddle opening formula)', pronunciation: 'kee-tehn-dah-wee-lee / teh-gah', hint: 'Steere (1870, p. 417) Vitendawili' },
          { target: 'Nyumba yangu kubwa, haina mlango. — Yai.', source: 'My house is large, it has no door. — An egg.', pronunciation: 'nyoom-bah yahn-goo koo-bwah', hint: 'Steere (1870, p. 418, Riddle #1)' },
          { target: 'Kuku wangu akazalia miibani. — Nanasi.', source: 'My hen has laid among thorns. — A pineapple.', pronunciation: 'koo-koo wahn-goo ah-kah-zah-lee-ah', hint: 'Steere (1870, p. 418, Riddle #2)' }
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
1. **Declension 1 (`D 1`) — *M- / Wa-* (Classes 1/2 — Living Beings; adj. *m, mw / wa, w*; pron. *huyu, yule / hawa, wao*; verb *ni, u, a / tu, m, wa*)**:
   - **mtu → watu** (person → people), **mtoto → watoto** (child → children), **mgeni → wageni** (stranger/guest → guests), **mganga → waganga** (healer → healers).
2. **Declension 2 (`D 2`) — *M- / Mi-* (Classes 3/4 — Plants & Trees; adj. *m, mw / mi, m*; pron. *huu, ule / hii, ile*; verb *u, w / i, y*)**:
   - **mti → miti** (tree → trees), **mto → mito** (river → rivers), **mwezi → miezi** (moon/month → months), **mkono → mikono** (hand/arm → hands), **moyo → mioyo** (heart → hearts).
3. **Declension 3 (`D 3`) — *Ki- / Vi-* (*Ch- / Vy-* before vowels, Classes 7/8 — Diminutives, Tools & Languages; adj. *ki, ch / vi, vy*; pron. *hiki, kile / hivi, vile*)**:
   - **kitu → vitu** (thing → things), **kiti → viti** (chair → chairs), **kisu → visu** (knife → knives), **chakula → vyakula** (food → foods), **chombo → vyombo** (vessel/tool → vessels); emphatic diminutive **ka-** (*katoto* tiny child, *kajiwe* tiny stone, *kadogo* infinitesimally small, pp. 123, 125).
4. **Declension 4 (`D 4`) — *U-, W- / Ny-* (Classes 11/10 & Abstract Class 14; adj. *m, mw / n*; pron. *huu, ule / hizi, zile*; verb *u, w / zi*)**:
   - **uimbo → nyimbo** (song → songs), **ulimi → ndimi** (tongue → tongues), **upanga → panga** (sword → swords), **ukuta → kuta** (wall → walls); abstract **uzuri** (beauty), **uhuru** (freedom), **ufalme** (kingdom).
5. **Declension 5 (`D 5`) — *— (Ji-) / Ma-* (Classes 5/6 — Amplificatives, Paired Parts, Liquids & Foreign Words; adj. *— (j-) / ma, m*; pron. *hili, lile / haya, yale*; verb *li, l / ya*)**:
   - **kasha → makasha** (box → boxes), **jiwe → mawe** (stone → stones), **jicho → macho** (eye → eyes), **jino → meno** (tooth → teeth), **jiko → meko** (hearth → three cooking-stones), **jambo → mambo** (matter → matters), **maji** (water), **mafuta** (oil/fat), **maziwa** (milk); size-shifting across declensions: **kipete** (`D 3`, small ring) → **pete** (`D 6`, ordinary ring) → **pete / mapete** (`D 5`, large ring, pp. 138, 200).
6. **Declension 6 (`D 6`) — *— / — (N-)* (Classes 9/10 — Foreign Words, Animals & Kinship; adj. *n*; pron. *hii, ile / hizi, zile*; verb *i, y / zi*)**:
   - **kazi → kazi** (work), **nyumba → nyumba** (house → houses), **ng'ombe** (cattle), **mbuzi** (goat), **njia** (Kimvita *ndia*, road/path), **rafiki** (friend).
7. **Declensions 7 & 8 (`D 7` & `D 8`) — Local *Mahali* (`D 7`, Class 16 *pa, p / hapa, pale*) & Verbal Infinitive *Ku-* (`D 8`, Class 15 *ku, kw / huku, kule*)**:
   - **mahali / pahali** (`D 7`, the *only* noun in this declension, Madan 1903 p. xvii & p. 203: *mahali hapa pazuri*); **kufa** (`D 8`, dying/death, *kufa huku kuzuri*), **kula** (eating), plus interior/general locatives **humu / mle** (`m-`) and **huku / kule** (`ku-`).
8. **Krapf's (1882, pp. xiv–xxi) Threefold Division & "Post-Prefixes"**:
   - Krapf groups his 8 classes into **(A) Prefixed** (I *m-/wa-*, II *m-/mi-*), **(B) In Part-prefixed** (III *-/Ø niumba*, IV *-/ma- neno/maneno*, V *ch-, ki-/vi-*, VI *u-/Ø, ni-, ma-, mb-, nd-*), and **(C) Non-prefixed** (VII *máhali*, VIII *ku-*), and coins **"post-prefix"** for the genitive particle (*wa, ya, la, cha, via, za, pa, mua, kua*, derived from *ku-a* "to be", p. xxi).
9. **Mrs. F. Burt & Rev. W. E. Taylor's (1910, pp. 26–27, 94–95, 129–131) Ten-Class Kimvita System (including Class VI "Monster Class")**:
   - Burt & Taylor classify Mombasa (*Ki-Mvita*) nouns into **10 Classes**: Class I **MT'U** (*m'-/wa-*), Class II **MTI** (*m'-/mi-*), Class III **N** (*n-/n-*), Class IV **KI** (*ki-/vi-*), Class V **(MA)** (*(ji-)/ma-*), **Class VI (JI) or "Monster Class"** (singular *ji- / ø-*, plural **mi-** with Class II *u-/i-* concord, expressing gigantic, ungainly, or monstrous size: *jit'u → mijit'u* "huge/ill-conditioned person", *jana → mijana* "big hulking lad", *jombo → mijombo* "huge vessel", *dude → midude* "bulky thing-um-a-bob", *mijuto* "great swollen rivers", pp. 94–95, 130), Class VII **U** (*u-/nyu-* & abstracts), Class VIII **PA** (*pahali*, *pa*), Class IX **KU** (*kufa*, *ku*), and Class X **MU** (*mwahali*, *mu*).
10. **Bishop Steere & A. C. Madan's (1894, pp. 16–23, 234–235) Comparative 9-Language Bantu Prefix Table & Locative Concords**:
   - Steere's *Handbook* (pp. 234–235) tabulates his 8 Swahili Noun Classes and the variable preposition *-a* alongside **8 cognate Bantu languages** (*Shambala, [Ki]Nyika, [Ki]Kamba, Nyamwezi, Yao, Kafir, [Se]Chuana, [Otyi]Herero*), demonstrating the unity of Class I (*m-/wa-*, *mu-/va-*, *umu-/aba-*), Class II (*m-/mi-*), Class III (*n-/zi-*), Class IV (*ki-/vi-*, *ch-/v-*, *isi-/izi-*), Class V (*ji-/ma-*, *i-/ma-*), Class VI (*u-/ny-*, *lu-/n-*), Class VII (*pa-*), and Class VIII (*ku-*), and codifies the three-way `-ni` locative concord (`mw-` interior, `p-` proximate, `kw-` directional/distal, p. 19).`,
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
    content: `Rev. W. E. Taylor (*African Aphorisms*, 1891, pp. 163–167), Mrs. F. Burt & Rev. W. E. Taylor (*Swahili Grammar and Vocabulary*, 1910, pp. 7–161), A. C. Madan (1903, pp. xiii–xv), and Hildegarde Hinde (1904, pp. xiv–xv) document the verbal morphology of Swahili across **Ki-Mvita (Mombasa)**, **Ki-Unguja (Zanzibar)**, and **Ki-Amu / Ki-Ngozi (Lamu/Pate)**:
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
4. **Madan's (1903, pp. xi–xiii) Eight Verb-Stems & Voices (`Act., Ps. -w-, Nt. -ik-/-ek-/-k-`)**:
   - **(1) Primary (`Pr.`)**: *fanya* (make/do), *funga* (fasten); each stem has Active, Passive (`-w-`), and Neuter/Quasi-Passive (`Nt. -ika / -eka / -ka`, e.g., *fanyika* be doable, *vunjika* be broken) voices.
   - **(2) Applied (`Ap.`, `-i- / -e-`, `-li- / -le-`, and doubled `-ili- / -ele-`)**: *fanyia* (do for/at), *fungia* (fasten with/for), *ishiliza* (wait to the end of for a special purpose, p. 109), *kimbilia* (run to/take refuge with vs. *kimbia* run away from, p. 153).
   - **(3) Causal (`Cs.`, `-z- / -sh- / -s- / -y-`) — 6 Varieties of Causation (pp. xi–xii)**: (a) Simple causation (*jaa → jaza* fill), (b) Compulsive (*lipa → lipiza* make pay), (c) Permissive (*ingia → ingiza* let come in), (d) Suasive (*omba → ombesha* induce to beg), (e) Passive (*acha → achisha* let oneself be left), and (f) Consequential (*ogopa → ogofya* cause to fear by being terrible), plus Intensive (*kata → katiza* cut short/interrupt).
   - **(4) Reciprocal (`Rp.`, `-an-`) — 5 Aspects (p. xii)**: (a) Reciprocal proper (*pendana* love each other), (b) Connected/serial (*fuatana* follow in order), (c) Combined/concerted (*fanyana shauri* deliberate together), (d) Interaction of parts (*fungamana* be interlaced, *ungamana*), and (e) Potential `-kana` (*patikana, wezekana, onekana, julikana*).
   - **(5) Reflexive (`Rf.`, `ji-`, p. xii & p. 116)**: Simple reflexive (*jiua* commit suicide, *jificha* hide oneself) or nuanced shades of automatic action, pleasure, pretence, or conceit (*jienda* go of itself, *jiendea* stroll for pleasure, *jigonjweza* sham sickness, *jiona* be conceited, *jikohoza* give a significant cough).
   - **(6) Reduplicated (`Rd.`, p. xii)**: Repetition, continuity, intensity, or diminution (*endaenda* go on and on, *engaenga* coddle/pet, *kipakupaku* speckled).
   - **(7) Reversive (`Rv.`, `-u- / -o-`, `Nt. -uk- / -ok-`, p. xii)**: Reversing the root action (*funga → fungua* unfasten, *fuma → fumua* unravel, *fumba → fumbua* unclose, *funda → fundua* untie a knot, *jenga → jengua* demolish, *ezeka → ezua* strip thatch).
   - **(8) Stative (`St.`, `-am-` / `-aman-`, p. xiii & p. 200)**: Denoting a relatively permanent state or posture (*inama* stoop/bow, *simama* stand, *egama* recline propped on elbow, *gandama* coagulate/adhere, *tuama* settle, *lowama* be steeped).
   - **Krapf's (1882, pp. xxiii–xxx) Kimvita Conjugation Features**: 6 derivative stems (Simple *ku penda*, Causative *-sa/-za/-sha*, Objective/Dative *-ia/-ea*, Reflexive *ji-*, Reciprocal *-na*, Iterative *-le-/-li-*), Kimvita passive **-oa** (*ku pendoa* vs. Kiunguja *kupendwa*), 1st sg. future **tapenda** (for *nitapenda*), enclitic object suffixes (**-mi, -we, -e, -sui, -nui, -o**, e.g., *ni-pá-mi*, *na-wa-pendá-nui*), and analytic relatives with **ambai kuamba**.
   - **Burt & Taylor's (1910, pp. 7–119) Kimvita Phonology, Passive Agent *ni*, Contractions & Idioms**:
     - **Three Dialect Groups (Tables I–IV, pp. 7–10)**: Southern (*Ki-Unguja*, *Ki-P'emba* where *sh → fy*, *Ki-Mrima* where cerebral *t → r*), Northern (*Ki-Amu*, *Ki-Pate*, *Ki-Gunya*, *Ki-ti-kuu* where *t → ch*, *j → y*, *z → dh*, *w → v*, *vi- → zi-*, *m- → n-*, and universal relative *-o*), and Central (*Ki-Mvita*, preserving dental ***t*, *d*** vs. cerebral **t, d**, oral aspirates **ch', k', p', t', *t*'**, 2nd pl. object *nawapen*d*a*, and 3rd sg. possessive *-akwe*).
     - **Passive Agent Preposition *ni* ("by", pp. 69, 109–110, 180, 243, 250)**: In Kimvita, the agent after a passive verb is introduced by **ni** (never *na*, which denotes the instrument "with"): *kuumwa ni* (to be bitten/hurt by), *kuwiwa ni* (to owe/be in debt to), *kujawa ni / kujazwa ni* (to be filled with), *waitwa ni kipofu huyu* (you are called by this blind man).
     - **Morphological Contractions & Idioms (pp. 39, 58, 91, 93, 236)**: Narrative/conditional contractions *nika- → nka- → k'a- → ha-*, *niki- → nki- → k'i- → hi-*, *niku- → nku- → k'u- → hu-* (habitual *hu-*), *ni*t*a- → n'*t*a- → *t*'a-*; copular contractions *mbwa = ni wa* (*mbwako, mbwao*) and *n*d*a = ni ya* (*n*d*angu, n*d*ako*); idiomatic *-nsha-* perfect (*nsha, unsha, ansha* < *kwisha*, p. 39 fn. 1); subject-object inversions *zina Salehe (funguo)* ("Salehe has the keys", p. 58) and *Mji unangia mara*dh*i* ("An epidemic has entered the town", p. 91 fn. 9); enclitic **-t'o** of thoroughness (*Fungat'o haiumizi mkono*, *fanyet'o*, p. 236).`,
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
// C. W. Hobley (1902, 1903 & 1910), Sir Harry Johnston (1902), Hon. K. R. Dundas (1910), Mervyn Beech (1911),
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
  description: 'A Highland (Southern) Nilotic macrolanguage uniting Nandi, Kipsigis, Keiyo, Tugen (Kamasia), Marakwet (Endo), Pokot, Sabaot (Elgon), Terik, and Okiek (Dorobo). Grounded in Hobley (1902, 1903, 1910), Johnston (1902), Hollis & Eliot (1909), Dundas (1910), and Beech (1911).',
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
    title: 'Unit 1: Salutations (pp. 90–91, 230), Definite Nouns, Numerals 1–10 & Hollis (1909) Folklore',
    description: 'Master Kalenjin greetings (Chamgei! / Sopai! / Takwenya!), primary vs. secondary definite nouns, counting 1–10, and 1909 Nandi proverbs and riddles.',
    icon: '🏔️',
    skills: [
      {
        id: 'kalenjin-greetings-nouns',
        title: 'Salutations, People, Livestock & Nature',
        icon: 'Users',
        description: 'Learn everyday Kalenjin and Nandi salutations and definite nouns from Hollis (1909, pp. 90–91, 158–180, 230), Hobley (1902), and Rottland (1982).',
        tips: "Kalenjin attaches definite articles to the END of nouns: chiito (the person, pl. piik), lakwet (the child, pl. lakōk/lagok), teta (the cow, pl. tuka/tuga), peik/beek (the water). Note also Hollis (1909, p. 163, 178): a man calls his house ka / kaita, whereas a woman calls it ko / kot.",
        words: [
          { target: 'Chamgei! / Sopai! (resp. Chamgei mising! / Epa!)', source: 'Hello! / Male greeting! (Very much peace! / Epa!)', pronunciation: 'chahm-gey / soh-pah-ee / eh-pah', hint: 'Hollis (1909, pp. 90–91, 230) & universal Kalenjin greeting' },
          { target: 'Takwenya! (resp. Igo!) / Saiseri! (A-'kot-in)', source: 'Greeting to women, elders & warriors on war-path! / Good-bye! (I salute thee)', pronunciation: 'tah-kweh-nyah / ee-goh / sah-ee-seh-ree', hint: 'Hollis (1909, pp. 43, 90–91, 230–231)' },
          { target: 'chiito (indef. chi, pl. piik / pich)', source: 'the person (pl. the people)', pronunciation: 'chee-toh / peek', hint: 'Class I irregular noun (Hollis 1909, pp. 160, 168)' },
          { target: 'lakwet (indef. lakwa, pl. lakōk / lagok)', source: 'the child (pl. the children)', pronunciation: 'lah-kweht / lah-gohk', hint: 'Class II noun (Hollis 1909, p. 169)' },
          { target: 'teta (indef. tany, pl. tuka / tuga)', source: 'the cow, ox (pl. the cattle)', pronunciation: 'teh-tah / tahny / too-gah', hint: 'Class XI irregular noun (Hollis 1909, p. 180)' },
          { target: 'peik / beek • cheko / chego • mursik', source: 'water • fresh milk • fermented milk', pronunciation: 'peyk / cheh-goh / moor-seek', hint: 'Plural liquid mass nouns in -k (Hollis 1909, pp. 24, 179)' },
          { target: 'Asista (Asis) • arawet (pl. arawek)', source: 'the Sun (Supreme Deity) • the Moon / month', pronunciation: 'ah-sees-tah / ah-rah-weht', hint: 'Hollis (1909, pp. 40, 94, 169) cosmological nouns' },
          { target: 'ketit (indef. ket, pl. ketik) • mat (indef. ma, pl. mostinuek)', source: 'the tree (pl. trees) • the fire (pl. fires/age-subdivisions)', pronunciation: 'keh-teet / maht', hint: 'Hollis (1909, pp. 12, 167, 173)' },
          { target: 'ñgetundo (indef. ñgetuny) • pēliot (indef. pēlio) • kiplengwet (pl. kiplengoi)', source: 'the lion • the elephant • the hare (pl. hares)', pronunciation: 'ngeh-toon-doh / peh-lee-oht / keep-lehn-gweht', hint: 'Hollis (1909, pp. 124–125, 169, 179) folklore fauna' },
          { target: 'kaita (indef. ka, man speaking) vs. kot (indef. ko, woman speaking; pl. korik)', source: 'the house / homestead (gendered speaker forms)', pronunciation: 'kah-ee-tah / koht / koh-reek', hint: 'Hollis (1909, pp. 163, 178, 275) gender-indexed noun' }
        ],
        sentences: [
          { target: 'Cham-ke sapon, cham-ke lakōk, cham-ke tuka, cham-ke ka.', source: 'May your health be good, and may the children, cattle, and all at home be well (Hollis 1909, p. 91).' },
          { target: 'I-ie tururik annan i-ie che-tililin? — A-ie tururik amu a-tinye tuka.', source: 'Do you drink water stirred by cattle hooves or clean water? — I drink the muddy water, for then I own cattle (Hollis 1909, p. 137, Enigma #17).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'According to A. C. Hollis (1909, pp. 90–91, 230), what is the traditional Nandi response to the male greeting "Sopai!"?',
            correctAnswer: 'Epa!',
            options: ['Epa!', 'tuka', 'ketik', 'kiplengoi'],
            hint: 'Sopai! -> Epa! (while Takwenya! -> Igo!)'
          }
        ]
      },
      {
        id: 'kalenjin-numbers-proverbs',
        title: 'Numerals 1–10 (pp. 88–89, 183–184) & Nandi Proverbs (Atindonik-ap-Nandi, pp. 124–132)',
        icon: 'Scroll',
        description: 'Count from 1 to 10 in Kalenjin and study classical proverbs from A. C. Hollis (1909, pp. 124–132).',
        tips: "Kalenjin numbers 1–10 (Hollis 1909, pp. 88–89, 183–184) are akeng (akeenge, 1), oieñg (aeng', 2), somok (3), angwan (ang'wan, 4), mut (muut, 5), illok / kullo (lo, 6), tisap (7), sisiit (8), sokol (9), and taman (10).",
        words: [
          { target: "akeenge (akeng), aeng' (oieñg), somok, ang'wan, muut (mut)", source: '1, 2, 3, 4, 5', pronunciation: 'ah-kehn-geh, ah-ehng, soh-mohk, ahng-wahn, moot', hint: 'Cardinals 1–5 (Hollis 1909, pp. 88, 183)' },
          { target: 'lo (illok / kullo), tisap, sisiit, sokol, taman', source: '6, 7, 8, 9, 10', pronunciation: 'loh, tee-sahp, see-seet, soh-kohl, tah-mahn', hint: 'Cardinals 6–10 (Hollis 1909, pp. 88, 183)' },
          { target: 'Ii-e ñgetuny lel', source: 'The lion bears a hyena/jackal (Hollis 1909, p. 124, Proverb #2)', pronunciation: 'ee-eh ngeh-toony lehl', hint: 'ñgetuny = lion, lel = jackal/hyena' },
          { target: 'Inga-i ñgom, i-ker-i-ke kumut-i?', source: 'However clever you may be, can you see the back of your neck? (Hollis 1909, p. 125, Proverb #4)', pronunciation: 'een-gah-ee ngohm', hint: 'ñgom = clever, kumut = nape of neck' },
          { target: 'Iok-toi kiplengoi pelio', source: 'Send hares to the elephant, not elephants to the hare (Hollis 1909, p. 125, Proverb #7)', pronunciation: 'ee-ohk-toy keep-lehn-goy peh-lee-oh', hint: 'Youth serve elders' },
          { target: 'Iput-i tany aku pa-kelek angwan', source: 'The ox falls in spite of its four legs (Hollis 1909, p. 125, Proverb #8)', pronunciation: 'ee-poo-tee tahny ah-koo pah-keh-lehk ahng-wahn', hint: 'Even the strong can stumble' }
        ],
        sentences: [
          { target: 'Iput-i tany aku pa-kelek angwan.', source: 'The ox falls in spite of its four legs (Hollis 1909, p. 125, Proverb #8).' },
          { target: 'Inga-i ñgom, i-ker-i-ke kumut-i?', source: 'However clever you may be, can you see the back of your neck? (Hollis 1909, p. 125, Proverb #4).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In the 1909 Nandi proverb "Iput-i tany aku pa-kelek angwan" (Hollis 1909, p. 125, Proverb #8), what does "angwan" mean?',
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
    title: 'Unit 2: Ecological Calendar (12 Months, pp. 94–95), Ipinda Age-Sets & Tongōchik Enigmas',
    description: 'Explore the 2 seasons (Iwotet & Kemēut), 12 Nandi ecological months (pp. 94–95), 7 cyclic Ipinda age-sets (p. 12), and riddles/proverbs from Hollis (1909).',
    icon: '🌦️',
    skills: [
      {
        id: 'kalenjin-months-ipinda',
        title: '12 Nandi Months (Arawek), 7 Ipinda Age-Sets & Folklore',
        icon: 'Calendar',
        description: 'Learn the Highland Nilotic seasonal calendar, age-set cycle, and oral literature.',
        tips: "A. C. Hollis (1909, pp. 94–95) documents two seasons (Olt'-ap-iwot / Iwotet = Wet Season, Mar–Aug; Olt'-ap-keme / Kemēut = Dry Season, Sep–Feb) and 12 Nandi months: Kiptamo, Iwat-kut, Wake, Ñgei, Rob-tui, Puret, Epeso, Kipsunde, Kipsunde oieñg, Mulkul, Mulkulik oieñg, and Ñgotioto.",
        words: [
          { target: 'Kiptamo (Feb) • Iwat-kut (Mar) • Wake (Apr)', source: 'Hot in the fields (Feb) • Rain in showers (Mar) • April', pronunciation: 'keep-tah-moh / ee-waht-koot / wah-keh', hint: 'Hollis (1909, pp. 94–95) Nandi months 1–3' },
          { target: 'Ñgei (May) • Rob-tui (Jun) • Puret (Jul)', source: 'Heart pushed aside by hunger (May) • Black rain/clouds (Jun) • Mist (Jul)', pronunciation: 'ngey / rohp-too-ee / poo-reht', hint: 'Hollis (1909, p. 95) Nandi months 4–6' },
          { target: 'Epeso (Aug) • Kipsunde (Sep) • Kipsunde oieñg (Oct)', source: 'August • First offering to God in corn-fields (Sep) • Second harvest offering (Oct)', pronunciation: 'eh-peh-soh / keep-soon-deh', hint: 'Hollis (1909, pp. 46–47, 95) Nandi months 7–9' },
          { target: 'Mulkul (Nov) • Mulkulik oieñg (Dec) • Ñgotioto (Jan)', source: 'Strong wind (Nov) • Second strong wind (Dec) • Brunsvigia Kirkii pincushion plant (Jan)', pronunciation: 'mool-kool / ngoh-tee-oh-toh', hint: 'Hollis (1909, p. 95) Nandi months 10–12' },
          { target: 'Ipinda (Maina, Nyonge, Kimnyike, Kâplelach, Kipkoiimet, Sowe, Juma)', source: 'The 7 cyclic generation age-sets (~53-year cycle, Saket-ap-eito every 7.5 years)', pronunciation: 'ee-peen-dah / sah-keht-ahp-ey-toh', hint: 'Hollis (1909, pp. 12–13) & Beech (1911, p. 6)' },
          { target: 'Kiruogindet (pl. Kiruogik) • Maotiot (pl. Maotik) • Orkoiyot (pl. Orkoiik)', source: 'People’s council spokesman-judge • Orkoiyot’s representative • Supreme ritual prophet', pronunciation: 'kee-rwoh-geen-deht / mah-oh-tee-oht / ohr-koy-yoht', hint: 'Hollis (1909, pp. 48–52) Nandi governance' },
          { target: "Tongoch! — Cho! Apuk ma-pa. — Kin'-ap-teta.", source: "Enigma: It pours out; it does not go away. — A cow's udder.", pronunciation: 'tohn-gohch choh / ah-pook mah-pah', hint: 'Hollis (1909, pp. 133–134, Enigma #4)' },
          { target: "Ma-ki-met-toi mokoiyo ne-mi-i 'ngoiny a-ki-sor ne-mi-i parak.", source: "Don't throw away the figs at the bottom of the tree to pick those at the top.", pronunciation: 'mah-kee-meht-toy moh-koy-yoh', hint: 'Hollis (1909, p. 127, Proverb #24)' }
        ],
        sentences: [
          { target: "'Ñgi-'om-e-chi pôton kel-ok.", source: 'Let us put our trembling legs together in one place, and we shall obtain support one from the other (Hollis 1909, p. 131, Proverb #49).' },
          { target: "'Ñgo-samis-it muria kwa ko.", source: 'If a rat stinks, it goes home; and if a man is ill, he goes to his relations to be attended to (Hollis 1909, p. 132, Proverb #54).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In the traditional Nandi calendar recorded by A. C. Hollis (1909, p. 95), what does the month name "Rob-tui" signify?',
            correctAnswer: 'Black rain or black clouds (June)',
            options: [
              'Black rain or black clouds (June)',
              'The seven cyclic age-sets',
              'A cow’s udder',
              'Strong wind (November)'
            ],
            hint: 'robta = rain + tui = black'
          }
        ]
      }
    ]
  }
];

// --- KALENJIN (grammar-reference.ts) ---
// ============================================================
// Kalenjin (Nandi / Kipsigis / Tugen / Marakwet / Pokot / Sabaot) Grammar Reference Guide
// Grounded in A. C. Hollis & Sir Charles Eliot (1909) "The Nandi: Their Language and Folk-Lore" (Part II: Ñgalek-ap-Nandi, pp. 152–231),
// C. W. Hobley (1902, 1903 & 1910), Sir Harry Johnston (1902), Hon. K. R. Dundas (1910), Mervyn Beech (1911),
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
    title: "Phonology, Gender Prefixes, Definite Articles, 3 Genitives & 11 Noun Classes (Hollis 1909, pp. 152–180)",
    summary: "Nandi/Kalenjin nouns distinguish indefinite (primary) and definite (secondary: sg. -t/-ta/-to/-da/-do, pl. -k/-ik/-ek/-ōk/-ka/-ko) forms across 11 plural classes, gender prefixes (kip-/chep-), and 3 genitive constructions.",
    content: `As documented in A. C. Hollis & Sir Charles Eliot (1909) *The Nandi: Their Language and Folk-Lore* (Part II: *Ñgalek-ap-Nandi*, pp. 152–180), Mervyn Beech (1911) *The Suk*, and Rottland (1982):
1. **Phonology, Consonant Sandhi & Gender Prefixes (pp. 152–159)**:
   - Consonants **p, t, k** regularly soften to **b/v, d, g** intervocalically or after nasals (*konda* eye, *tuga/tuka* cattle, *ñgomnotet → ñgomnoden-nyo* my wisdom).
   - **Gender Prefixes (pp. 158–159)**: Masculine **kip- / kim- / ki-** ("man of / characterized by", e.g., *kiplengwet* hare, *kimaketyet* hyena) vs. Feminine **chep- / chem- / che-** (*cheptirgichet* duiker, *chepkōkōsiot* buzzard). Kinship/proper-name plural prefixes are **akut-** (m., e.g. *akut-ñgô?* who pl., *akut-apa* fathers) and **angut-** (f., e.g. *angut-koko* grandmothers).
   - **Speaker-Gendered Noun (pp. 163, 178, 275)**: For "house / home", a **man** says **ka** (definite **kaita**), whereas a **woman** says **ko** (definite **kot**, pl. *korik*).
2. **Definite Article Suffixes & Demonstrative/Possessive Sandhi (pp. 160–164)**:
   - Singular definite: **-t, -it, -et, -iet, -ta, -to, -da, -do** (*chi → chito* the person, *lakwa → lakwet* the child, *tany → teta* the cow, *koñg → konda* the eye, *kel → keldo* the foot).
   - Plural definite: **-k, -ik, -ek, -ōk, -ka, -ko** (*pich → piik* the people, *lakoi → lakōk* the children, *tuka* the cattle, *kelek* the feet/teeth, *korusio → korusiek* the women).
   - Before demonstratives and possessives, singular *-t* assimilates or drops (*chito → chin-ni* this man, *lakwet → lakwan-ni* this child, *kaita → kain-nyo* my house [m.], *kot → kon-nyo* my house [f.]), and plural *-k* shifts to **-ch-** before *chu/cho* (*piik → pich-chu* these people) or **-chok** before possessives (*tuk-chok-chuk* my cattle).
3. **Vocative & 3 Genitive Constructions (pp. 164–166)**:
   - **Vocative (p. 164)**: Suffixes **-ni / -i** (sg.) and **-chu** (pl.), or drop the article (*Sopai, murén-ju!* Greetings, O warriors!; *Takwenya, chepiosō-chu!* Greetings, O old women!).
   - **First Genitive (pp. 164–165)**: Particle **ap** ("of", softening to **am** before *m-*: *konda am metit*), **kâp** ("house/village of": *kâp-kiptalam*), **kwamba** ("father of"), **kopot** ("mother of"), and patronymic **Ar-ap** ("son of": *Ar-ap-Koileke*).
   - **Second Genitive (pp. 165–166)**: Relative possessive **nepo** (sg.) / **chepo** (pl.) ("which is of": *rotwet nepo chito*).
   - **Third Genitive (p. 166)**: Compound status prefix **pa- / po-** ("having/of": *pa-kelek angwan* having four legs, *kip-po-tuka* cattle-owner).
4. **The 11 Noun Plural Classes (pp. 166–180)**:
   - **Class I** (*-in/-indet → -ik*): *Nandiindet → Nandiik*, *orkoiyot → orkoiik*, *murenet → murenik*, *chito → piik*.
   - **Class II** (*-et/-it/-iet → -ōk/-ok/-ak*): *lakwet → lakōk*, *kiplengwet → kiplengok*, *pēliot → pēliok*.
   - **Class III** (*-et/-it → -aiik/-oiik/-iik*): *ruandet → ruandoiik* (stones), *sumpet → sumpoiik* (baskets).
   - **Class IV** (*-et → -ōsiek/-usiek*): *korget → korusiek* (women), *pororiet → pororōsiek* (districts).
   - **Class V** (*-et/-it → -utik*): *kiruoget → kiruogutik* (councils), *kaset → kasutik*.
   - **Class VI** (*-et/-it/-at → -inuek/-tinuek*): *oret → ortinuek* (roads/clans), *emet → emotinuek* (counties), *mat → mostinuek* (fires).
   - **Class VII** (*-et/-it/-iet → -ek/-ik*): *ketit → ketik* (trees), *tarityet → taritik* (birds), *kechet → kechīrek* (sheep).
   - **Class VIII** (*-ta/-to/-da/-do → -ek/-ik*): *keldo → kelek* (feet), *koita → koiik* (stones), *rotwet/rotwa →rotoik* (knives).
   - **Class IX** (*-ta/-to/-da/-do → -wek/-wōk/-uōk*): *konda → konyek* (eyes), *iito → iitwek* (ears), *serut → serunek* (noses).
   - **Class X** (*-wa/-wo → -nōk*): *tulwet → tulonōk* (mountains).
   - **Class XI (Irregulars, pp. 178–180)**: *teta → tuka* (cattle), *artet → nēko* (goats/sheep), *seset → sesēnik* (dogs), *ñgetundo → ñgetunyik* (lions), plus pluralia tantum liquids *peik* (water), *cheko* (milk), *korotik* (blood), *komek* (honey-wine).`,
    examples: [
      { kalenjin: "chi → chito (sg.) | pich → piik (pl.) • ka/kaita (m.) vs. ko/kot (f., pl. korik)", english: "a person → the person | people → the people • house (man vs. woman speaking)", explanation: "Primary vs. secondary suffixation & speaker-gendered nouns (Hollis 1909, pp. 160, 163, 168, 178)" },
      { kalenjin: "tany → teta (sg.) | tuka (pl.) • artet (sg.) | nēko (pl.)", english: "a cow/ox → the cow | the cattle • a sheep/goat → goats/sheep", explanation: "Class XI irregular pastoral nouns (Hollis 1909, pp. 179–180)" },
      { kalenjin: "Atindonik-ap-Nandi • Tongōchik-ap-Nandi • pa-kelek angwan", english: "Proverbs of the Nandi • Enigmas of the Nandi • having four legs", explanation: "1st Genitive (-ap) & 3rd Genitive (pa-) in Hollis (1909, pp. 124, 133, 164–166)" }
    ]
  },
  {
    id: "kalenjin-numerals-hollis-proverbs",
    title: "Adjectives, Numerals (1–100), Pronouns, VSO Verbs & 9 Derivative Forms (Hollis 1909, pp. 180–227)",
    summary: "Nandi uses 4 comparative constructions, base-10 numerals with finger-counting gestures, 4 demonstrative classes, Class I vs. Class II (i-) verbs, and 9 verbal derivative suffixes.",
    content: `From A. C. Hollis & Sir Charles Eliot (1909) *The Nandi: Their Language and Folk-Lore* (pp. 88–89, 180–227):
1. **Adjectives & 4 Degrees of Comparison (pp. 180–183)**:
   - Attributive adjectives take the relative prefix **ne-** (sg.) / **che-** (pl.) (*chito ne-mie* a good man, *piik che-miach* good people; *ne-oo / che-echen* big; *ne-miñgin / che-mengech* small; *ne-lel* white; *ne-tui* black; *ne-pirir* red).
   - **4 Comparative Constructions (pp. 182–183)**: (a) **ko-sir** ("it surpasses"), (b) **lâtit** ("the intervals/difference"), (c) **kitegin** ("a little more"), (d) **tamne / mirit** ("surpassing").
2. **Cardinal Numerals (1–100) & Finger-Counting (pp. 88–89, 183–184)**:
   - **1**: *akeng (akeenge)* • **2**: *oieñg (aeng')* • **3**: *somok* • **4**: *angwan* • **5**: *mut* • **6**: *illok / kullo (lo)* • **7**: *tisap* • **8**: *sisiit* • **9**: *sokol* • **10**: *taman*
   - **11**: *taman ak akeng* • **20**: *tiptem* • **30**: *sosom* • **40**: *artam* • **50**: *konom* (also *onom*, p. 263) • **60**: *ntamanoik illok* • **100**: *pokol*.
3. **Pronouns & 4 Demonstrative Classes (pp. 184–189)**:
   - **Personal**: *ane* (I), *inye* (thou), *ine* (he/she), *achek* (we), *okwek* (ye), *ichek* (they).
   - **4 Demonstratives**: Near speaker **ni / chu** (this/these), Near addressee **nin / chon**, Yonder **no / cho**, Reference/past **non / chon** (and for *olto* place: *yu/uli, yun/ulin, yo/ulo, yon/ulon*, p. 187).
4. **Verbal Classes (Class I vs. Class II *i-*), Tenses & 9 Derivative Forms (pp. 189–227)**:
   - **Class I (Root Verbs)** vs. **Class II (*i-* Prefix Verbs, p. 189)**: e.g. *cham* (to love) vs. *i-kat* (to salute), *i-put* (to fall).
   - **Subject Prefixes**: 1s **a-**, 2s **i-**, 3s **ko- / ø-**, 1p **ki- / ke-**, 2p **o-**, 3p **ko-**.
   - **Object Suffixes (p. 185)**: 1s **-a / -o**, 2s **-n / -in**, 3s **ø**, 1p **-ech**, 2p **-ak / -ok**, 3p **ø** (*a-'kot-in* I salute thee, *a-'kot-ok* I salute you pl.).
   - **Tenses**: Present (*a-cham-e*), Today's Perfect **ka-** (*ka-a-cham*), Yesterday's Past **kwo-...amt** (*kwo-a-cham amt*), Remote Past **ki-** (*ki-a-cham*), Future **ip- / inyo-** (*ip-a-cham*), Conditional **ingo-nga / añg-nya**, Contingent **takoraki- / ta-ki-**, Passive **ki- / ke-**, Negative **ma- / me-** (*ma-a-cham-e*).
   - **9 Derivative Verb Forms (pp. 222–227)**:
     1. *Motion Hither*: **-u** (*ip* carry → *ip-u* bring hither).
     2. *Motion Thither*: **-toi / -te / -to** (*ip-to* take away).
     3. *Dative / Applied ("for/to")*: **-chi / -chini** (*ip-chi* take to).
     4. *Instrumental / Applied ("with/at")*: **-e / -i**.
     5. *Reflexive*: **-ke** (*i-ker-i-ke* see for oneself, *cham-ke* be well together).
     6. *Reciprocal*: **-tosi / -ie / -io**.
     7. *Intransitive*: **-se / -isie** (*am* eat tr. → *am-isie* eat intr.).
     8. *Causative*: **i-...-e** (transfers Class I to Class II).
     9. *Neuter / Quasi-Passive*: **-at / -ot / -ake** (plus deadjectival inchoative **-itu**, e.g. *oo-itu* grow big, *samis-it* become foul-smelling, and stem reduplication).`,
    examples: [
      { kalenjin: "akeng, oieñg, somok, angwan, mut, illok (kullo), tisap, sisiit, sokol, taman, tiptem, sosom, artam, konom, pokol", english: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 100", explanation: "Nandi cardinal numerals (Hollis 1909, pp. 88–89, 183–184)" },
      { kalenjin: "ip → ip-u (hither) → ip-to (thither) → ip-chi (dative) • am → am-isie (intransitive)", english: "carry → bring hither → take away → carry to • eat (tr.) → feed/eat (intr.)", explanation: "Derivative verb suffixes in Hollis (1909, pp. 222–227)" },
      { kalenjin: "'Ñgi-'om-e-chi pôton kel-ok • 'Ñgo-samis-it muria kwa ko", english: "Let us put our trembling legs together in one place • If a rat stinks, it goes home", explanation: "Conditional 'ñgi-/'ñgo-, dative -chi, and deadjectival -it in Hollis (1909, pp. 131–132, Proverbs #49 & #54)" }
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
          { target: "Bandzu, bandzu rámala gogo (#602) • Chuwo k'akina mumwenga (#602a)", source: 'Chip, chip finished the block • Counsel is not of one alone (Taylor 1891)', pronunciation: 'bahn-dzoo bahn-dzoo / choo-woh', hint: 'W. E. Taylor (1891, p. 136, Giryama Proverbs #602 & #602a)' },
          { target: "K'akilumika. Ni kikokora.", source: 'It cannot be bitten. It is the elbow (Taylor 1891 Riddle #8)', pronunciation: 'kah-kee-loo-mee-kah nee kee-koh-koh-rah', hint: 'kikokora = elbow' },
          { target: 'Magoma mairi lwanda-ni. Ni mahombo.', source: 'Two cows in the open field. It is the breasts (Taylor 1891 Riddle #18)', pronunciation: 'mah-goh-mah mah-ee-ree lwahn-dah-nee', hint: 'lwanda-ni = in the open field' }
        ],
        sentences: [
          { target: "Bandzu, bandzu rámala gogo; Chuwo k'akina mumwenga.", source: 'Chip, chip finished the block; Counsel is not of one alone (Taylor 1891, Giryama Proverbs #602 & #602a).' },
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
          { target: 'muntũ (pl. antũ / bantũ)', source: 'person (pl. people)', pronunciation: 'moon-too / ahn-too', hint: 'Johnston (1919, Vol. I, p. 101) Class 1/2 #11a Meru' },
          { target: 'mũrũme (pl. arũme) / mũka (pl. aka)', source: 'man, husband / woman, wife', pronunciation: 'moo-roo-meh / moo-kah', hint: 'Johnston (1919, Vol. I, pp. 100, 106) #11a Meru & Embu' },
          { target: 'mwana (pl. aana) / kaana (pl. tũana)', source: 'child / small child (diminutive)', pronunciation: 'mwah-nah / kah-nah', hint: 'Class 1/2 vs. Class 12/13 ka-/tũ-' },
          { target: 'mũtĩ (pl. mĩtĩ) / ĩiga (pl. maiga)', source: 'tree (pl. trees) / stone (pl. stones)', pronunciation: 'moo-tee / ee-gah', hint: 'Johnston (1919, Vol. I, pp. 104–105) Class 3/4 & 5/6' },
          { target: 'rũũji (rũĩ / maĩ) / mwanki', source: 'water (river) / fire', pronunciation: 'roo-jee / mwahn-kee', hint: 'Johnston (1919, Vol. I, pp. 99, 106) Meru & Tharaka' },
          { target: 'riũa / mweri / njata', source: 'sun / moon / star', pronunciation: 'ree-oo-ah / mweh-ree / n-jah-tah', hint: 'Johnston (1919, Vol. I, pp. 101, 104) cosmological nouns' },
          { target: 'Murungu / Ngai', source: 'God, Supreme Creator', pronunciation: 'moo-roon-goo / ngah-ee', hint: 'Johnston (1919, Vol. I, p. 100) & Hobley (1910, p. 157)' },
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
        tips: "Sir Harry Johnston (1919, Vol. I, p. 107) records the numerals of Meru (#11a) and Embu/Chuka/Mwimbe/Tharaka (#11): imwe (1), iiri (2), ithatu (3), inya (4), ithano (5), ithanthatu (6), mũgwanja (7), inyanya (8), kenda (9), ikũmi (10).",
        words: [
          { target: 'imwe, iiri (bairi), ithatu, inya, ithano', source: '1, 2, 3, 4, 5', pronunciation: 'ee-mweh, ee-ree, ee-thah-too, ee-nyah, ee-thah-noh', hint: 'Johnston (1919, Vol. I, p. 107) #11a Meru numerals' },
          { target: 'ithanthatu, mũgwanja, inyanya, kenda, ikũmi', source: '6, 7, 8, 9, 10', pronunciation: 'ee-thahn-thah-too, moo-gwahn-jah, ee-nyah-nyah, kehn-dah, ee-koo-mee', hint: 'Johnston (1919, Vol. I, p. 107) numerals 6–10' },
          { target: 'igana / ngiri', source: '100 / 1,000', pronunciation: 'ee-gah-nah / n-gee-ree', hint: 'Johnston (1919, Vol. I, p. 107)' },
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
    content: `As documented in Sir Harry H. Johnston's *Comparative Study of the Bantu and Semi-Bantu Languages* (1919, Vol. I, pp. 98–112 & Vol. II, pp. 28–30, Languages #11 Kikuyu/Embu/Cuka/Mwimbe/Emberre/Þeraka/Igωji and #11a Meru), C. W. Hobley (1910, pp. 156–158, 169), and Wikipedia's *Meru language* & *Embu language* references:
1. **Complete 16-Class Concord System (Johnston 1919, Vol. I, p. 111)**:
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
    content: `Sir Harry H. Johnston (1919, Vol. I, pp. 98–112) and C. W. Hobley (1910, pp. 156–158, 169) document the Mount Kenya Bantu sub-groups (**Meru, Igoji, Mwimbe, Muthambi, Chuka, Tharaka, Embu, Emberre**):
1. **Personal & Possessive Pronouns (Johnston 1919, Vol. I, pp. 107–108)**:
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
    title: 'Unit 1: Greetings (Nabad!), Definite Articles (-ki/-ka/-ku & -ti/-ta/-tu), Pronouns & Cushitic Numerals (Kirk 1905 & Larajasse 1897)',
    description: 'Master Af-Soomaali greetings, Kirk’s three suffixed article vowels (-i, -a, -u) and four demonstratives (kan, kèr, kas, kò), inclusive/exclusive pronouns, numerals, fractions, and classical Maahmaahyo.',
    icon: '🐪',
    skills: [
      {
        id: 'somali-greetings-nouns',
        title: 'Greetings, Three Article Vowels (-i, -a, -u) & Pastoral Life (Kirk 1905)',
        icon: 'MessageCircle',
        description: 'Learn Af-Soomaali greetings, inclusive/exclusive pronouns, and definite nouns from Kirk (1905) and de Larajasse (1897).',
        tips: "In Af-Soomaali (Kirk 1905, §§ 23, 28–29, 150–154, pp. 16–18, 79–81), the definite article is suffixed to the noun with masculine linking consonants -k-, -g-, -h-, -‘- (ninki, ninka, ninku) and feminine linking consonants -t-, -d-, -sh- (nàgti, nàgta, nàgtu; hal-ti → hashi 'the she-camel'). Kirk documents three article vowels: -i (general, past, or absent/remote), -a (present, proximate, or with possessive suffixes), and -u (well-known or aforementioned subject), distinct from the four demonstratives: kan/tan (this near), kèr/tèr (that near), kas/tas (that further), and kò/tò (that yonder, § 63, p. 33).",
        words: [
          { target: 'Nabad! / Ma nabad baa? / Ma bariden? (resp. Wa nabad!)', source: 'Peace! / Is it peace? / Have you passed the night well? (It is peace!)', pronunciation: 'nah-bahd / mah bah-ree-dehn', hint: 'Kirk (1905, § 102, p. 51 & p. 113) morning & general greeting' },
          { target: 'Mahadsanid (Aad baad u mahadsan tahay)', source: 'Thank you (Thank you very much)', pronunciation: 'mah-hahd-sah-need', hint: 'Gratitude' },
          { target: 'Soo dhawoow! / Nabad gelyo!', source: 'Welcome! / Goodbye!', pronunciation: 'soh dhah-wow / nah-bahd gehl-yoh', hint: 'Hospitality phrases' },
          { target: 'aniga (an) / adiga (ad) • ínnagu (-einu incl.) / ánnagu (-annu excl.)', source: 'I / you (sg.) • we (inclusive vs. exclusive)', pronunciation: 'ah-nee-gah / een-nah-goo / ahn-nah-goo', hint: 'Kirk (1905, §§ 32, 53–55, pp. 19, 29–30) emphatic & clitic pronouns' },
          { target: 'isaga (u) / iyada (ai) / iyaga (ai)', source: 'he / she / they', pronunciation: 'ee-sah-gah / ee-yah-dah / ee-yah-gah', hint: 'Kirk (1905, § 53, p. 29) 3rd person pronouns' },
          { target: 'nin (ninki / ninka / ninku) • nàg (nàgti / nàgta / nàgtu)', source: 'man (the man: past/remote -i, present -a, known subject -u) • woman (the woman)', pronunciation: 'neen-kee, neen-kah, neen-koo / nahg-tee, nahg-tah, nahg-too', hint: 'Kirk (1905, §§ 23, 150–154) three definite article vowels' },
          { target: 'biyo (biyaha) / ‘àno (‘anaha)', source: 'water / milk', pronunciation: 'bee-yoh / ah-noh', hint: 'Kirk (1905) essential pastoral liquids' },
          { target: "gèl (hal → hashi / aur → aurki) • lo‘ • fardo (sg. faras)", source: 'camels (she-camel / burden camel) • cattle • horses', pronunciation: 'gehl / hah-shee / awr-kee / loh / fahr-doh', hint: 'Kirk (1905, § 29, p. 17) & de Larajasse (1897) pastoral livestock' },
          { target: 'garanug / godir / b‘e‘id / sagaro (Kirk 1905 & Larajasse 1897)', source: 'gerenuk / greater kudu / beisa oryx / dik-dik', pronunciation: 'gah-rah-noog / goh-deer / beh-eed / sah-gah-roh', hint: 'Kirk (1905, p. 194) & de Larajasse (1897) East African wildlife' },
          { target: 'Anas (Af-Yibir) & Alowa (Af-Midgan)', source: 'Yibir & Midgan guild registers documented in Kirk (1905, pp. 184–214)', pronunciation: 'ah-nahs / ah-loh-wah', hint: 'Kirk (1905, pp. 184–214) comparative vocabularies' }
        ],
        sentences: [
          { target: 'Ma bariden? Wa nabad, mahadsanid.', source: 'Have you passed the night well? It is peace, thank you (Kirk 1905, § 102, p. 51).' },
          { target: 'Hawl adun ma đamáto ninba wa intis.', source: 'The work of the world finishes not, each man has his share (Kirk 1905, § 227, p. 111).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In Lt. J. W. C. Kirk (1905, §§ 23, 150–154), what are the three suffixed definite article vowels on masculine "nin" (man) and feminine "nàg" (woman)?',
            correctAnswer: '-i (ninki/nàgti), -a (ninka/nàgta), and -u (ninku/nàgtu)',
            options: [
              '-i (ninki/nàgti), -a (ninka/nàgta), and -u (ninku/nàgtu)',
              'aniga, adiga, and isaga',
              'biyo, ‘àno, and soor',
              'garanug, godir, and sagaro'
            ],
            hint: 'Masculine linking -k- and feminine linking -t- take the three vowels -i, -a, -u'
          }
        ]
      },
      {
        id: 'somali-numbers-maahmaahyo',
        title: 'Numerals, Fractions, 4 Seasons, 12 Lunar Months & Oral Poetry (Kirk 1905)',
        icon: 'Scroll',
        description: 'Count in Af-Soomaali (including subtractive 19/29/99 and fractions), learn the 4 seasons and 12 lunar months from Kirk (1905 Appendix I), and study Gabei, Gerar, and Hes poetry.',
        tips: "Lt. J. W. C. Kirk (1905, §§ 46–52, pp. 26–28; Appendix I, pp. 134–136; pp. 170–183) documents Somali cardinals, subtractive numerals (labàton midla = 19, 'twenty lacking one'), fractions (bađ 1/2, dalòl 1/3, wahh 1/4, fallad 1/8, rima 1/16), the 4 seasons (Jilal, Gù, Hagar/Karif, Dair, plus the windless Kalil interval), the 12 lunar months (Dago, Durahh hore, Durahh dambe, Rajal hore, Rajal dehhe, Rajal dambe, Sà buha, Wà barìs, Sòn/Soukad, Sòn fur, Sidatal, Arafo), and 14 traditional songs across Hes, Gerar, and Gabei.",
        words: [
          { target: 'kô (mid), lába, sádehh, áfar, shan', source: '1, 2, 3, 4, 5', pronunciation: 'koh, lah-bah, sah-dehh, ah-far, shan', hint: 'Kirk (1905, § 46, p. 26) cardinals 1–5' },
          { target: 'lehh, todòba, sidèd, sagàl, tòban', source: '6, 7, 8, 9, 10', pronunciation: 'lehh, to-do-ba, si-ded, sa-gal, to-ban', hint: 'Kirk (1905, § 46, p. 26) cardinals 6–10' },
          { target: 'labàton (20), sóddon (30), afárton (40), kónton (50), bóghol (100), kun (1,000)', source: '20, 30, 40, 50, 100, 1,000 (19 = labàton midla)', pronunciation: 'la-ba-ton, sod-don, a-far-ton, kon-ton, bo-ghol, kun', hint: 'Kirk (1905, § 46, pp. 26–27) tens & subtractive numerals' },
          { target: 'bađ-ki (1/2), dalòl-ki (1/3), wahh-di (1/4), fallad-di (1/8), rima-di (1/16)', source: 'Fractions: 1/2, 1/3, 1/4, 1/8, 1/16', pronunciation: 'badh-ki, da-lol-ki, wahh-di, fal-lad-di, ri-ma-di', hint: 'Kirk (1905, § 52, p. 28) Somali fractions' },
          { target: "Jilal (Jiilaal), Kalil, Gù (Gu'), Hagar (Xagaa / Karif), Dair (Dayr)", source: 'The 4 Somali pastoral seasons + Kalil calm interval before rains', pronunciation: 'ji-lal, ka-lil, gu, ha-gar, dair', hint: 'Kirk (1905, Appendix I, p. 134)' },
          { target: 'Dago, Durahh hore, Durahh dambe, Rajal (hore/dehhe/dambe), Sà buha, Wà barìs, Sòn (Soukad), Sòn fur, Sidatal, Arafo', source: 'The 12 traditional Somali lunar months (Muharram to Dhu al-Hijjah)', pronunciation: 'da-go, du-rahh, ra-jal, sa bu-ha, wa ba-ris, son, si-da-tal, a-ra-fo', hint: 'Kirk (1905, Appendix I, p. 135)' },
          { target: 'Gabei (Gabay), Gerar (Geeraar), Hes (Hees)', source: 'The 3 classical Somali poetic genres (Philosophical poem, Equestrian/war chant, Pastoral/dance song)', pronunciation: 'ga-bei, ge-rar, hes', hint: 'Kirk (1905, pp. 170–183, Songs I–XIV)' },
          { target: 'Far keliya fool ma dhaqdo', source: 'A single finger cannot wash a face (Unity is strength)', pronunciation: 'fahr keh-lee-yah fohl mah dhahq-doh', hint: 'Classical Somali proverb' }
        ],
        sentences: [
          { target: 'Tollimòno ka dòrne, o sàmir bannu dèdallei — O war, tollo, inna daya!', source: 'We must choose to be of one tribe, and wish for peace — O ye tribes, desist! (Kirk 1905, Song IV, p. 176).' },
          { target: 'Gerar wa bogholal, wa bađwein iyo môjad, wa babùrki sidìsa.', source: 'Songs (Geeraar) are in hundreds, like the great sea and waves, like the ships (Kirk 1905, Song VIII, p. 178).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In J. W. C. Kirk (1905, Appendix I, pp. 134–135), what are the first three traditional Somali lunar months?',
            correctAnswer: 'Dago, Durahh hore, Durahh dambe',
            options: [
              'Dago, Durahh hore, Durahh dambe',
              'kô, lába, sádehh',
              'Gabei, Gerar, Hes',
              'bađ, dalòl, wahh'
            ],
            hint: 'Dago corresponds to Muharram, followed by Durahh hore and Durahh dambe'
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
    title: "Three Definite Article Vowels (-i, -a, -u), Four Demonstratives & Six Plural Classes with Gender Polarity (Kirk 1905)",
    summary: "Af-Soomaali suffixes Masculine (-k-, -g-, -h-, -‘-) and Feminine (-t-, -d-, -sh-) articles with three vowel grades (-i, -a, -u), four demonstrative degrees (kan, kèr, kas, kò), and six plural classes with polar gender inversion.",
    content: `As documented in Lt. J. W. C. Kirk's *A Grammar of the Somali Language* (1905, §§ 23–45, 63, 150–168, pp. 16–24, 33, 79–87) and Rev. Fr. Evangelist de Larajasse (1897):
1. **Three Suffixed Definite Article Vowels & Euphonic Consonants (Kirk 1905, §§ 23, 28–29, 150–154)**:
   - **Masculine linking consonant *-k-*** assimilates to **-g-** after *g, i, y, w* (*guri-gi* 'the house'), **-h-** after *e, o* (*àba-hi* 'the father'), and **-‘-** (glottal/zero) after *a, u, gh, kh, h, hh, ‘* (*libahh-i* 'the lion', *gèl-i* 'the camels').
   - **Feminine linking consonant *-t-*** assimilates to **-d-** after vowels, *d, đ, ‘, h, kh, w, y* (*hòyo-di* 'the mother', *bađ-di* 'the sea'), and coalesces with preceding *-l* into **-sh-** (*hal-ti → hashi* 'the she-camel', *mèl-ti → mèshi* 'the place').
   - **(a) Vowel *-i* (*ninki, nàgti*)**: Used in a general sense or when the object is past, absent, or distant.
   - **(b) Vowel *-a* (*ninka, nàgta*)**: Used when the object is actually present, proximate, or combined with possessive suffixes (*faraskaigi* 'my horse').
   - **(c) Vowel *-u* (*ninku, nàgtu*)**: Used when the noun is the subject of the sentence and already well-known or mentioned before.
2. **Four Degrees of Demonstrative Pronouns (Kirk 1905, § 63, p. 33)**:
   - **kan / tan** (pl. *kuan / tuan*): "this" (near me).
   - **kèr / tèr** (pl. *kuèr / tuèr*): "that" (near).
   - **kas / tas** (pl. *kuas / tuas*): "that" (further off).
   - **kò / tò** (pl. *kuò / tuò*): "that yonder" (distant or out of sight).
3. **Six Plural Classes & Polar Gender Inversion (Kirk 1905, §§ 34–42, 164–168)**:
   - **Class (i)**: Masculine monosyllables reduplicating the final consonant after *-a-* retain masculine gender (*dab-ki → dabab-ki* 'fires', *nin-ki → niman-ki* 'men').
   - **Classes (ii)–(vi) invert their gender article in the plural**: (ii) *-o* (*kab-ti → kabo-hi* 'shoes', *waran-ki → warmo-di* 'spears'), (iii) *-yo* (*bùr-ti → bùryo-hi* 'mountains'), (iv) *-i → -io* (*guri-gi → gurio-di* 'houses'), (v) *-o → -oyin* (*hòyo-di → hoyòyin-ki* 'mothers'), (vi) *-a/-e → -ayal* (*abà-hi → abayál-shi* 'fathers').`,
    examples: [
      { somali: "ninki (past/absent) • ninka (present) • ninku (known subject)", english: "the man (three article vowels -i, -a, -u)", explanation: "Kirk (1905, §§ 23, 150–154) vs. demonstratives kan, kèr, kas, kò (§ 63)" },
      { somali: "hal + -ti → hashi • waran-ki (m.) → warmo-di (f. pl.) • kab-ti (f.) → kabo-hi (m. pl.)", english: "the she-camel • the spear → the spears • the shoe → the shoes", explanation: "Palatal coalescence (l+t → sh) and plural gender polarity (Kirk 1905, §§ 29, 42)" },
      { somali: "ínnagu (-einu / -èn) vs. ánnagu (-annu / -aya)", english: "we/our [inclusive of listener] vs. we/our [exclusive of listener]", explanation: "First-person plural clusivity across emphatic, clitic, and possessive pronouns (Kirk 1905, §§ 32, 53–55)" }
    ]
  },
  {
    id: "somali-focus-pronouns-numerals",
    title: "Sentence Focus Particles (wa, ba, ya), Three Regular Conjugations, Seven Prefix/Irregular Verbs & Oral Literature (Kirk 1905)",
    summary: "Every declarative Somali clause requires an assertive/focus particle (wa, ba, or ya), and verbs conjugate across 3 regular conjugations (sheg, gùrso, samèi) plus 7 irregular/prefixing verbs (oll, imo, ođo, ogho, aho, laho, wah).",
    content: `From Lt. J. W. C. Kirk's *Grammar of the Somali Language* (1905, §§ 46–149, Appendices I–III, pp. 26–183):
1. **Assertive & Focus Particles (*wa, ba, ya, ma*) (Kirk 1905, §§ 74, 211–227)**:
   - **wa (waa)**: Focuses the verb/predicate (*Adiga wa imàneysa* = You are coming).
   - **ba (baa) / ya (ayaa)**: Focuses the preceding substantive or pronoun (*Aniga ba imàneya* = It is I who am coming).
   - **ma**: Interrogative and negative particle (*Ma bariden?* = Have you slept well?; *Ma garanayo* = I do not know).
2. **Three Regular Conjugations & Seven Irregular/Prefixing Verbs (Kirk 1905, §§ 76–118)**:
   - **1st Conjugation (*sheg* 'tell')**: Root stems (*shega / shegeya / shegei*).
   - **2nd Conjugation (*gùrso* 'marry')**: Reflexive/Middle stems in **-o / -at** (*gùrsada / gùrsadei*).
   - **3rd Conjugation (*samèi* 'make')**: Causative/Transitive stems in **-èi / -is** (*samèya / samèyei*).
   - **Seven Irregular & Prefixing Verbs**: **oll** (dwell/be in a place: pres. *al, tal, yal, nal*, past *il, til, yil, nil*, § 100), **imo** (come, imp. *kàli*: *imàda / imi*, § 106), **ođo** (say, imp. *đeh*: *iđahhda / iđi*, § 106), **ogho** (know: *aghán / ighín*, § 106), **aho** (be: *ahai, tahai, yahai, nahai, tihin, yihin*, § 110), **laho** (possess: *lehahai*, § 115), **wah** (fail/lack: *wahya / wai*, § 117).
3. **Pastoral Calendar, Currency & Oral Literature (Kirk 1905, pp. 134–214)**:
   - **Seasons & Lunar Months (Appendix I, pp. 134–136)**: *Jilal*, *Kalil*, *Gù*, *Hagar (Karif)*, *Dair*; 12 lunar months from *Dago* and *Durahh hore/dambe* to *Sidatal* and *Arafo*; 18 divisions of the day/night (*wà beri, bargháddi, hađki, fìdki, aweisinki, sakhđi dehh*).
   - **Classical Poetic Genres & Guild Registers (pp. 170–214)**: **Hes** (work/watering/dance songs), **Gerar** (equestrian/warrior chants), **Gabei** (solemn alliterative poetry), plus the **Yibir (*Anas*)** and **Midgan (*Alowa*)** guild vocabularies.`,
    examples: [
      { somali: "kô, lába, sádehh, áfar, shan, lehh, todòba, sidèd, sagàl, tòban • labàton midla (19)", english: "1–10 • 19 ('twenty lacking one')", explanation: "Cardinals & subtractive numerals; fractions bađ (1/2), dalòl (1/3), wahh (1/4), fallad (1/8), rima (1/16) (Kirk 1905, §§ 46–52)" },
      { somali: "Dago, Durahh hore, Durahh dambe, Rajal (hore/dehhe/dambe), Sà buha, Wà barìs, Sòn (Soukad), Sòn fur, Sidatal, Arafo", english: "The 12 traditional Somali lunar months", explanation: "Kirk (1905, Appendix I, p. 135)" },
      { somali: "Hawl adun ma đamáto ninba wa intis • Tollimòno ka dòrne, o sàmir bannu dèdallei", english: "The work of the world finishes not, each man has his share • We must choose brotherhood and strive for peace", explanation: "Verbatim proverb (§ 227, p. 111) and Geeraar verse (Song IV, p. 176) in Kirk (1905)" }
    ]
  }
];

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
          { target: 'mundũ (pl. andũ)', source: 'Person (pl. People)', pronunciation: 'moon-doo / ahn-doo', hint: 'Johnston (1919, Vol. I, p. 101 #11 Embu)' },
          { target: 'mũrũme (pl. arũme) / mũka (pl. aka)', source: 'Man, husband / Woman, wife', pronunciation: 'moo-roo-meh / moo-kah', hint: 'Johnston (1919, Vol. I, pp. 100, 106 #11 Embu)' },
          { target: 'mwana (pl. ciana / aana) / baba / maitũ', source: 'Child / Father / Mother', pronunciation: 'mwah-nah / bah-bah / mah-ee-too', hint: 'Johnston (1919 #11 Embu)' },
          { target: 'maĩ (manjĩ) / mwaki / riũa', source: 'Water / Fire / Sun', pronunciation: 'mah-ee / mwah-kee / ree-oo-ah', hint: 'Johnston (1919, Vol. I, pp. 99, 104, 106 #11 Embu)' },
          { target: 'mũtĩ (pl. mĩtĩ) / ĩvia (pl. mavia)', source: 'Tree (pl. Trees) / Stone (pl. Stones)', pronunciation: 'moo-tee / ee-vyah', hint: 'Johnston (1919, Vol. I, pp. 104–105 #11 Embu)' },
          { target: 'Ngai (Murungu) / Kĩrĩnyaga', source: 'God / Mount Kenya', pronunciation: 'ngah-ee / kee-ree-nyah-gah', hint: 'Johnston (1919, Vol. I, p. 100 #11) & Hobley (1910)' }
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
        tips: "Johnston (1919, Vol. I, p. 107 #11) records the numerals 1–10 across Embu and Emberre: ĩmwe (1), igĩrĩ (2), ithatũ (3), inya (4), ithano (5), ithanthatũ (6), mũgwanja (7), inyanya (8), kenda (9), ikũmi (10).",
        words: [
          { target: 'ĩmwe, igĩrĩ, ithatũ, inya, ithano', source: '1, 2, 3, 4, 5', pronunciation: 'ee-mweh, ee-gee-ree, ee-thah-too, ee-nyah, ee-thah-noh', hint: 'Johnston (1919, Vol. I, p. 107 #11 Embu)' },
          { target: 'ithanthatũ, mũgwanja, inyanya, kenda, ikũmi', source: '6, 7, 8, 9, 10', pronunciation: 'ee-thahn-thah-too, moo-gwahn-jah, ee-nyah-nyah, kehn-dah, ee-koo-mee', hint: 'Johnston (1919, Vol. I, p. 107 #11 Embu)' },
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
    content: `As documented by Sir Harry H. Johnston in *A Comparative Study of the Bantu and Semi-Bantu Languages* (1919, Vol. I, pp. 98–112 & Vol. II, pp. 28–30, Language #11 Kikuyu, Embu, Cuka, Mwimbe, Emberre, Þeraka & Igωji) and C. W. Hobley (1910):
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
  description: 'The Highland Coastal Bantu languages of the Taita Hills (Dabida, Sagala, and Kasigau) in Taita-Taveta County. Grounded in Krapf (1850), Shaw (1885), W. E. Taylor (1891), Rev. J. Alfred Wray (1894), and Sir Harry Johnston (1919 #14 Taita).',
  color: '#0891B2',
  sources: ['krapf-six-languages-1850', 'shaw-pocket-vocabulary-taita-1885', 'taylor-aphorisms-1891', 'wray-taita-1894', 'johnston-bantu-1919', 'open-web-swadesh-comparative'],
};

export const TAITA_UNITS: CourseUnit[] = [
  {
    id: 'taita-unit-1',
    title: 'Unit 1: Salutations (p. 115), Wray’s (1894) 9 Noun Classes & Numerals 1–10',
    description: 'Master Kisagala and Kidawida salutations (Voro! Mzima? / Mwakucha!), Wray’s 9 noun classes (pp. 9–13), and counting 1–10 (pp. 20–23).',
    icon: '⛰️',
    skills: [
      {
        id: 'taita-greetings-nouns',
        title: 'Taita Hills Salutations, 9 Noun Classes & Nature (Wray 1894 & Shaw 1885)',
        icon: 'Users',
        description: 'Learn greetings and the 9 noun classes from Rev. J. A. Wray’s 1894 Taita Grammar.',
        tips: "Rev. J. Alfred Wray (1894, pp. 9–13) documents 9 noun classes in Kisagala, including Class VII Diminutives where both ka- and tu- are singular prefixes making their plural in vi- (kanyumba → vinyumba 'little house', tunguku → vinguku 'little fowl', tumwana → viwana 'little child'), whereas Johnston (1919 #14 Taita) records ka-/tu- (kanyonyi → tunyonyi) in Kidawida.",
        culturalNote: "In Rev. W. E. Taylor's 'African Aphorisms' (1891, p. 160 #665), the Taita proverb 'Kazi mbili zam\'lema fisi' ('Two occupations were too heavy for the hyena') warns against divided purpose, while Wray (1894, p. 93 & p. 115) records the dialogic salutation 'Voro! Mzima?' and the riddle formula 'Wada! — Na wada! Nyumba yangu siiwesi mjango? — Igi.'",
        words: [
          { target: 'Voro! Mzima? — Mzima. — Ndo vidzo! (Kidawida: Mwakucha! / Mwatinda!)', source: 'Greeting! Are you well? — I am well. — That is good! (Good morning! / Good day!)', pronunciation: 'vo-ro m-zi-ma ndo vi-dzo / mwah-koo-chah', hint: 'Wray (1894, p. 115) Taita salutations (kurogoa)' },
          { target: 'Nagala ndam kalle maana (banana) — Aya! nawe gale banana', source: 'Goodbye, stay well — Yes! go well too (Parting salutation)', pronunciation: 'na-ga-la ndam kal-le ma-a-na', hint: 'Wray (1894, p. 115) Parting salutation' },
          { target: 'mundu (pl. wandu) / mghosi (pl. waghosi)', source: 'Person (pl. People) / Wise elder, gentleman', pronunciation: 'moon-doo / wah-ndoo / m-ghoh-see', hint: 'Wray (1894, p. 9) Class I (m-/wa-)' },
          { target: 'mwanake (pl. waanake) / mchana (pl. wachana) / mtawana (pl. watawana)', source: 'Child / Young woman / Young man', pronunciation: 'mwa-na-ke / m-cha-na / m-ta-wa-na', hint: 'Wray (1894, p. 9) Class I' },
          { target: 'meji (machi) / moto / ijua (pl. majua)', source: 'Water / Fire / Sun', pronunciation: 'me-ji / moh-toh / i-ju-a', hint: 'Wray (1894, pp. 11–12) Class V' },
          { target: 'mwiti (pl. mīti) / nyumba (loc. nyumbeni kwangu)', source: 'Tree (pl. Trees) / House (in my house)', pronunciation: 'mwi-ti / mi-ti / nyoom-bah', hint: 'Wray (1894, pp. 9–10, 13) Class II, III & Locative' },
          { target: 'kanyumba (pl. vinyumba) / tunguku (pl. vinguku) / tumwana (pl. viwana)', source: 'Little house / Little fowl / Little child (Class VII Diminutives)', pronunciation: 'ka-nyum-ba / vi-nyum-ba / tu-ngu-ku / vi-ngu-ku', hint: 'Wray (1894, pp. 12–13) ka- & tu- sg. → vi- pl. (Kidawida: kanyonyi → tunyonyi)' },
          { target: 'Mlungu', source: 'God, Supreme Creator', pronunciation: 'm-loon-goo', hint: 'Wray (1894, p. 99) & Shaw (1885)' }
        ],
        sentences: [
          { target: 'Voro! Mzima? — Mzima. — Ndo vidzo! Simanya uwe.', source: 'Greeting! Are you well? — I am well. — That is good! I do not know about you (Wray 1894, p. 115).' },
          { target: "Kazi mbili zam'lema fisi.", source: 'Two occupations were too many for the hyena (Taylor 1891, p. 160, Taita Proverb #665).' },
          { target: 'Wada! — Na wada! Nyumba yangu siiwesi mjango? — Ni-hawe muzi. — Igi.', source: 'Riddle! — Come on! My house has no door? — Give me a town. — An egg (Wray 1894, p. 93).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In Rev. J. A. Wray (1894, pp. 12–13), how does Kisagala (Taita) form the Class VII Diminutive plurals of kanyumba ("little house"), tunguku ("little fowl"), and tumwana ("little child")?',
            correctAnswer: 'kanyumba (pl. vinyumba) / tunguku (pl. vinguku) / tumwana (pl. viwana)',
            options: [
              'kanyumba (pl. vinyumba) / tunguku (pl. vinguku) / tumwana (pl. viwana)',
              'mundu (pl. wandu) / mghosi (pl. waghosi)',
              'Voro! Mzima? — Mzima. — Ndo vidzo! (Kidawida: Mwakucha! / Mwatinda!)',
              'Nagala ndam kalle maana (banana) — Aya! nawe gale banana'
            ],
            hint: 'Both ka- and tu- are singular diminutive prefixes in Wray (1894, pp. 12–13), and both take vi- in the plural'
          }
        ]
      },
      {
        id: 'taita-numbers-verbs',
        title: 'Numerals 1–10, 7 Verb Derivatives & 12 Ideophones (Wray 1894)',
        icon: 'Hash',
        description: 'Count from 1 to 10 in Kisagala & Kidawida and master Wray’s 7 derivative verb stems (pp. 60–62) and 12 ideophones (pp. 75–76).',
        tips: "Wray (1894, pp. 20–23) records Kisagala cardinals mosi/-moju (1), pili/mbili/-ili (2), tatu/ndatu (3), ine/-ne (4), sano (5), tandatu/ndandatu (6), mfungate (7), nane (8), ikenda (9), ikumi or afwa (10), koruja (20/score), and i'gana (100), alongside Kidawida imweri, iwi, idadu, ina, isanu, irandadu, mfungade, wunyanya, ikenda, ikumi.",
        words: [
          { target: 'mosi (-moju), pili (mbili), tatu (ndatu), ine (-ne), sano (Kidawida: imweri, iwi, idadu, ina, isanu)', source: '1, 2, 3, 4, 5', pronunciation: 'mo-si, pi-li, ta-tu, i-ne, sa-no', hint: 'Wray (1894, pp. 20–21) Kisagala & Johnston (1919 #14 Taita) Kidawida' },
          { target: 'tandatu (ndandatu), mfungate, nane, ikenda, ikumi / afwa (Kidawida: irandadu, mfungade, wunyanya)', source: '6, 7, 8, 9, 10 (mbuzi afwa = 10 goats)', pronunciation: 'tan-da-tu, m-fun-ga-te, na-ne, i-ken-da, i-ku-mi / a-fwa', hint: 'Wray (1894, pp. 20–22)' },
          { target: '-a hambiri (1st), -a kaili (2nd), -a katatu (3rd), -a mbale (last) • kamoju (once), kaili (twice)', source: 'Ordinals & Adverbial Numerals', pronunciation: '-a ham-bi-ri, -a ka-i-li, -a m-ba-le, ka-mo-ju', hint: 'Wray (1894, p. 23)' },
          { target: 'kushaia (to love) / kugora (to speak) / kudea (to do) / kulima (to cultivate)', source: 'Core Class IX ku- Infinitive Verbs', pronunciation: 'ku-sha-i-a / ku-go-ra / ku-de-a / ku-li-ma', hint: 'Wray (1894, pp. 13, 27–62) paradigm verb kushaia' },
          { target: 'Nyamala chwi! / Mkundu lu / Onyilu pi / Omnyangi tse / Ikumi chululu', source: 'Dead silent! / Bright red / Jet black / Snow white / Ten and only ten', pronunciation: 'nya-ma-la chwi / m-kun-du lu / o-nyi-lu pi / o-mnyan-gi tse', hint: 'Wray (1894, pp. 75–76) Ideophonic adverbial enclitics' }
        ],
        sentences: [
          { target: 'Mbuzi afwa (Mbuzi ikumi chululu).', source: 'Ten goats — ten and only ten (Wray 1894, p. 22 & p. 75).' },
          { target: 'Ta-na-dea’ga kazi; wa-na-lima’ga mgunda.', source: 'We do work continually; they are in the habit of cultivating the garden (Wray 1894, p. 60 Frequentative -na-...-a’ga).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which Taita numeral means "Seven (7)" in Wray (1894, p. 20) and Johnston (1919 #14 Taita)?',
            correctAnswer: 'mfungate (Kidawida: mfungade)',
            options: ['mfungate (Kidawida: mfungade)', 'mosi (imweri)', 'sano (isanu)', 'ikumi (afwa)'],
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
    title: 'Nine Noun Classes, Diminutives (ka-, tu- → vi-), 7 Verb Derivatives & 12 Ideophones in Wray (1894)',
    summary: 'Rev. J. Alfred Wray’s 1894 Elementary Introduction to the Taita Language documents 9 noun classes, locative -eni/-ni with kwa- concord, 7 derivative verb forms, and 12 ideophonic adverbial enclitics.',
    content: `From Rev. J. Alfred Wray (1894) *An Elementary Introduction to the Taita Language (Kisagala)* and Sir Harry Johnston (1919, #14–15):
- **Class I (*m-, mu-, mw- / wa-* — Concords *yu-, wa- / wa-*)**: *mundu → wandu* (person → people), *msunye → wasunye* (slave), *mchana → wachana* (young woman), *mtawana → watawana* (young man), *mwanake → waanake* (child), *mwēn → wēn* (self), *mghosi → waghosi* (elder).
- **Class II (*m-, mu-, mw- / mi-* — Concords *'gu-, 'gwa- / i-, ya-*)**: *mlomo → milomo* (mouth), *mgunda → migunda* (garden), *mwiti → mīti* (tree), *mwezi → mēzi* (moon), *mwia → mīa* (thorn), *mweta → mēta* (river).
- **Class III (*n-* unchanged in plural — Concords *i-, ya- / zi-, za-*)**: *nyumba* (house), *mbuzi* (goat), *ngila* (path), *mbeyu* (seed), *nguku* (fowl), *ngunde* (bean).
- **Class IV (*ki-, cha-, cho-, chu- / vi-, va-, vo-, vu-* — Concords *chi-, cha- / vi-, va-*)**: *kituli → vituli* (mortar), *kitasi → vitasi* (bag), *chala → vala* (finger → fingers), *charo → varo* (caravan), *chongo → vongo* (head → heads), *chuma → vuma* (iron); note *kisikilo → masikilo* (ear).
- **Class V (Plurals in *ma- / mau-* — Concords *li-, lya- / 'ga-*)**: (a) *i- → ma-* (*iwano → mawano* arrow, *ijua → majua* sun, *ijilo → majilo* bundle, *ije'go → maje'go* tooth, *i'gembe → ma'gembe* hoe, *iziso → meso* eye); (b) zero → *ma-* (*dau → madau* bag, *gafa → magafa* beard, *leu → maleu* food); (c) *u- → ma-* (*ufwa → mafwa* inheritance, *ukongo → makongo* sickness, *uganga → maganga* medicine, *uengu → maengu* cloud); (d) *u- → mau-* (*ulili → maulili* bed, *ushu → maushu* face, *uta → mauta* bow, *uki → mauki* honey); (e) collectives (*mazia* milk, *mavuta* butter, *meji* water).
- **Class VI (*lu- / nyu-* — Concords *lu-, lwa- / zi-, za-* or *nyu-*)**: *lumbo → nyumbo* (song), *lwaio → nywaio* (footprint/sole), *lwaka → nywaka* (voice), *luzi → nyuzi* (thread).
- **Class VII (Diminutives, Wray 1894 pp. 12–13)**: Both ***ka-* and *tu-* are singular diminutive prefixes**, and **both form their plural in *vi-*** (*kanyumba → vinyumba* 'a little house → little houses', *tunguku → vinguku* 'a little fowl → little fowls', *tumwana → viwana* 'a little child → little children'). In Kidawida (Johnston 1919 #15), *ka-* (sg.) pairs with *tu-* (pl.): *kanyonyi → tunyonyi* (little bird), *kachi → tuchi* (little brook).
- **Class VIII (*andu* 'place' — Concord *ku-, kwa-*, p. 13)**: *andu kwangu* (my place), *andu kwaloli* (a nice place), *andu kuzima* (another place).
- **Class IX (Verbal Infinitives in *ku-* — Concord *ku-, kwa-*, p. 13)**: *kuvala kwake* (his bearing), *kugora kwako* (your talking), *kulwana kwao* (their fighting), *kuimba kwaloli* (good singing).
- **Locative Case (*-a → -eni / -ni* + *kwa-* concord, p. 13)**: *nyumbeni kwangu* (in my house), *mbueni* (in the garden), *boroni* (in the cattle-fold), *ngileni kwake* (in his way), *chongoni kwetu* (in our heads).
- **7 Derivative Verb Forms (Wray 1894, pp. 60–62)**: (1) **Frequentative** (*-na-...-a'ga*: *ta-na-dea'ga* 'we do continually', *wa-na-lima'ga*); (2) **Applied** (*-ila/-ela*: *kudeila, kulimila, kuletela*); (3) **Causative** (*-isa/-isha/-sa*: *kududugisha, kugalisha, kuujisa*); (4) **Neuter/Feasible** (*-ka/-ika/-oka*: *kuvunjika, kugoloka, kudeika, kukamika*); (5) **Reflexive** (*-ku-...-ēn*: *na-ku-kwita mw-ēn* 'I beat myself'); (6) **Reciprocal** (*-ana/-anya*: *kushaiana, kulwanana, kugendanya*); (7) **Strengthened/Reduplicated** (*kupasa-pasa, kuhada-hada*).
- **12 Ideophonic Adverbial Enclitics (Wray 1894, pp. 75–76)**: *Nyamala chwi* (very silent), *Ikumi chululu* (ten and only ten), *Chanuka buu* (smells horridly), *Mkundu lu* (very red), *Onyilu pi/fi* (very black), *Omnyangi tse* (very white), *Chakesua doo* (fading red/yellow), *Nagora go* (said all), *Chanakulile ku* (very hard), *Chamanga tuku* (very firm), *Chaoma ng'we ng'a* (very dry), *Si-shaia ng'o* (not love at all).`,
    examples: [
      { taita: 'kanyumba kake kadodori → vinyumba vake vidodori', english: 'his tiny house → his tiny houses', explanation: 'Class VII Diminutive concord in Wray (1894, pp. 12–13, 18)' },
      { taita: 'Nyamala chwi! • Omnyangi tse • Onyilu pi • Mkundu lu', english: 'Be dead silent! • Snow-white • Pitch-black • Bright red', explanation: 'Ideophonic adverbial enclitics in Wray (1894, pp. 75–76)' },
      { taita: "Kazi mbili zam'lema fisi.", english: 'Two occupations were too many for the hyena.', explanation: 'Taylor (1891, p. 160, Taita Proverb #665)' }
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
  description: 'A Coastal Hinterland Bantu language spoken in the Lumi River forest oasis near Mount Kilimanjaro in Taita-Taveta County. Grounded in A. C. Hollis (1910 "Taveta Sayings and Proverbs" & 1911 "Taveta Enigmas") and Sir Harry Johnston (1919, Vol. I, pp. 98–112 #15 Taveita).',
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
        description: 'Master core Kitaveta nouns and proverbs from A. C. Hollis (1910) and Johnston (1919, Vol. I, pp. 98–112 #15 Taveita).',
        tips: "In A. C. Hollis (1911) 'Taveta Enigmas', riddles are introduced with 'Nakutega ndaa!' ('I set you an enigma/trap!'), answered with 'Tega!' ('Set it!').",
        culturalNote: "A. C. Hollis (1910) documented 79 Kitaveta proverbs and sayings reflecting the forest-irrigation agriculture of the Lumi River and the Njama council of elders.",
        words: [
          { target: 'Mwakucha! / Uko mwidzi?', source: 'Good morning! / Are you well?', pronunciation: 'mwah-koo-chah / oo-koh mwee-dzee', hint: 'Kitaveta salutation' },
          { target: 'mndu (pl. wandu) / mche (pl. wache)', source: 'Person (pl. People) / Woman (pl. Women)', pronunciation: 'm-ndoo / wah-ndoo / m-cheh', hint: 'Johnston (1919, Vol. I, pp. 101, 106 #15 Taveita)' },
          { target: 'mazi / moto / mbeho', source: 'Water / Fire / Cold', pronunciation: 'mah-zee / moh-toh / m-beh-hoh', hint: 'Hollis (1910 Proverb #4) & Johnston (1919, Vol. I, pp. 98–112 #15 Taveita)' },
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
    title: 'Kitaveta Noun Classes, Numerals & Oral Literature (Hollis 1910–1911 & Johnston 1919 #15 Taveita)',
    summary: 'Kitaveta is a North-East Coastal Bantu language closely allied to Pare/Asu and Chaga-Taita, preserving 15+ noun classes and rich proverb/riddle morphology.',
    content: `As documented in A. C. Hollis (*Taveta Sayings and Proverbs*, 1910; *Taveta Enigmas*, 1911) and Sir Harry Johnston (*Comparative Study of the Bantu Languages*, 1919, #16 Taveta, pp. 89–96):
- **Noun Classes**: Class 1/2 *mndu → wandu* (person → people), *mche → wache* (woman → women); Class 3/4 *mti → miti* (tree → trees); Class 5/6 *ideghe → madeghe* (bird → birds), *iwe → mawe* (stone → stones), *mazi* (water); Class 7/8 *kindu → vindu* (thing → things).
- **Cardinal Numerals (Johnston 1919, Vol. I, p. 107 #15 Taveita)**: *imwe* (1), *iwiri* (2), *itatu* (3), *inya* (4), *itano* (5), *itandatu* (6), *mfungate* (7), *mnane* (8), *kenda* (9), *ikumi* (10).`,
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
  description: 'A Sabaki Bantu language spoken along the Tana River flood-plain from Garissa to Kipini. Grounded in Rev. Dr. J. L. Krapf (1850 "Vocabulary of Six East-African Languages") and Sir Harry H. Johnston (1919, Vol. I, pp. 98–112 #13 Pωkωmω).',
  color: '#0369A1',
  sources: ['krapf-six-languages-1850', 'johnston-bantu-1919', 'open-web-swadesh-comparative'],
};

export const POKOMO_UNITS: CourseUnit[] = [
  {
    id: 'pokomo-unit-1',
    title: 'Unit 1: Tana River Greetings, Sabaki Sound Shifts, Numerals & Riverine Life (Krapf 1850 & Johnston 1919 #13 Pωkωmω)',
    description: 'Master Kipfokomo greetings, labial-affricate phonology (pf/bf), numerals 1–10, and Tana River vocabulary.',
    icon: '🛶',
    skills: [
      {
        id: 'pokomo-river-nouns',
        title: 'Tana River (Muho wa Tsana) Vocabulary, Numerals & Wakijo Governance',
        icon: 'Compass',
        description: 'Learn Kipfokomo nouns and numerals from Krapf (1850) and Johnston (1919, Vol. I, pp. 98–112 #13 Pωkωmω).',
        tips: "Like Mijikenda, Kipfokomo belongs to the Sabaki Bantu branch: Proto-Bantu *t shifts to h in muho ('river', cf. Swahili mto) and moho ('fire', cf. moto), while developing distinctive labiodental affricates (pf, bf) as in Kipfokomo.",
        culturalNote: "Along the Tana River (Muho wa Tsana), Pokomo communities historically governed village life and flood-plain farming through the Wakijo / Gasa council of elders and navigated via carved dugout canoes (waho).",
        words: [
          { target: 'Habari! / Uko bwema? (resp. Niko bwema)', source: 'Greetings! / Are you well? (I am well)', pronunciation: 'hah-bah-ree / oo-koh bweh-mah', hint: 'Kipfokomo salutation' },
          { target: 'munt’u (pl. want’u) / mwana (pl. wana)', source: 'Person (pl. People) / Child (pl. Children)', pronunciation: 'moon-too / wahn-too', hint: 'Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pωkωmω)' },
          { target: 'madzi / moho / muho', source: 'Water / Fire / River (Muho wa Tsana = Tana River)', pronunciation: 'mah-dzee / moh-hoh / moo-hoh', hint: 'Sabaki dzi- & *t > h shift (Krapf 1850)' },
          { target: 'waho (pl. mawaho) / nswi / mamba', source: 'Dugout canoe / Fish / Crocodile', pronunciation: 'wah-hoh / n-swee / mahm-bah', hint: 'Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pωkωmω) riverine lexicon' },
          { target: 'mudzi (pl. midzi) / nyumba / Wakijo', source: 'Village / House / Council of Elders', pronunciation: 'moo-dzee / nyoom-bah / wah-kee-joh', hint: 'Krapf (1850) & Pokomo governance' },
          { target: 'imwe, mbiri, tahu, nne, tsano', source: '1, 2, 3, 4, 5', pronunciation: 'ee-mweh, m-bee-ree, tah-hoo, n-neh, tsah-noh', hint: 'Johnston (1919, Vol. I, p. 107 #13 Pωkωmω) numerals' },
          { target: 'handahu, fungahe, nane, kenda, kumi', source: '6, 7, 8, 9, 10', pronunciation: 'hahn-dah-hoo, foon-gah-heh, nah-neh, kehn-dah, koo-mee', hint: 'Johnston (1919, Vol. I, p. 107 #13 Pωkωmω)' },
          { target: 'Mungu (Mulungu)', source: 'God, Supreme Creator', pronunciation: 'moon-goo / moo-loon-goo', hint: 'Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pωkωmω)' }
        ],
        sentences: [
          { target: 'Muho wa Tsana ni muyo wa mudzi.', source: 'The Tana River is the lifeblood of the village.' },
          { target: 'Chanda kimwe hakibandi ntsaha.', source: 'One finger alone cannot crush a louse.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the Kipfokomo word for "River" and "Dugout canoe" in Krapf (1850) and Johnston (1919, Vol. I, pp. 98–112 #13 Pωkωmω)?',
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
    title: 'Sabaki Phonology (Kipfokomo pf/bf, *t > h), Noun Classes & Numerals (Krapf 1850 & Johnston 1919 #13 Pωkωmω)',
    summary: 'Kipfokomo is a core member of the Sabaki Bantu subgroup alongside Swahili and Mijikenda, preserving Sabaki lenition (*moto > moho, *mto > muho, *-tatu > -hahu) and 15+ noun classes.',
    content: `Documented by Rev. Dr. J. L. Krapf (*Vocabulary of Six East-African Languages*, 1850) and Sir Harry H. Johnston (*Comparative Study of the Bantu Languages*, 1919, #14 Pokomo, pp. 89–96):
- **Sabaki Sound Correspondences**: Proto-Bantu *t lenites to *h* (*moho* 'fire', *muho* 'river', *tahu* 'three', *handahu* 'six', *fungahe* 'seven'), while Class 5 uses *dzi- / i-* (*dziwe → mawe* 'stone', *dzua* 'sun', *madzi* 'water').
- **Noun Classes**: Class 1/2 *munt'u → want'u* (person → people), Class 3/4 *muhi → mihi* (tree → trees), *mudzi → midzi* (village → villages).`,
    examples: [
      { pokomo: 'moho • muho • madzi • dziwe (pl. mawe)', english: 'fire • river • water • stone', explanation: 'Sabaki sound laws in Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pωkωmω)' },
      { pokomo: 'imwe, mbiri, tahu, nne, tsano, handahu, fungahe, nane, kenda, kumi', english: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10', explanation: 'Kipfokomo numerals (Johnston 1919, Vol. I, p. 107 #13 Pωkωmω)' }
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
  sources: ['krapf-galla-vocab-1842', 'tutschek-galla-oromo-1844', 'tutschek-galla-grammar-1845', 'krapf-six-languages-1850', 'open-web-swadesh-comparative'],
};

export const BORANA_UNITS: CourseUnit[] = [
  {
    id: 'borana-unit-1',
    title: 'Unit 1: Nagaa Borana Greetings, Cushitic Cases, Numerals & Tutschek (1844–1845) Prayers',
    description: 'Master Afaan Borana greetings (Akkam jirta? / Nagaa!), Nominative vs. Absolutive nouns, counting 1–10 (plus ordinals in -tiana, social numerals in -anu, and amole fractions), and the 1845 prayers and letters.',
    icon: '🐪',
    skills: [
      {
        id: 'borana-greetings-nouns',
        title: 'Greetings, Nagaa (Peace), Kinship & Tutschek (1845) Prayers',
        icon: 'Users',
        description: 'Learn Afaan Borana greetings, pronouns, core nouns, and verbatim prayers from the 1842–1845 corpus.',
        tips: "In Afaan Borana (Tutschek 1845, §§ 183–191, pp. 55–57), the Accusative/Absolutive is the citation form (nama 'person', lafa 'earth', muka 'tree', boka 'rain'), while grammatical subjects take Nominative suffixes (namni, lafti, mukni, bokeñi).",
        culturalNote: "In Karl & Lawrence Tutschek's 1845 Grammar (pp. 84–91), three prayers (Prayer after the War of Hambo and Hamaya, Morning Prayer, and Evening Prayer) and two 1840 letters between Otshu Aga and Akafed'e Dalle preserve authentic 19th-century Oromo/Borana devotion to Waaqa (Wacayo) and Nagaa (Peace).",
        words: [
          { target: 'Akkam jirta? / Naga, naga! Fayaketi!', source: 'How are you? / Peace, peace! Thy health!', pronunciation: 'ahk-kahm jeer-tah / nah-gah fa-ya-ke-ti', hint: 'Tutschek (1845, p. 88, Aga’s Letter) & Borana salutation' },
          { target: 'Galatoomi / Wacayon iza ha tolu', source: 'Thank you / May God do good to him', pronunciation: 'gah-lah-toh-mee / wa-ca-yon i-za ha to-lu', hint: 'Tutschek (1845, p. 90, Akafed’e’s Letter)' },
          { target: 'nama (nom. namni) / dhiira (d\'ira) / dubartii (niti)', source: 'Person / Man / Woman, wife', pronunciation: 'nah-mah / dhee-rah / doo-bahr-tee', hint: 'Tutschek (1845, §§ 184, 191, 231) & Krapf (1842)' },
          { target: 'abbaa (nom. aban) / haadha (had\'a, nom. had\'i) / mutsha (pl. hidjole)', source: 'Father / Mother / Child (pl. collective children)', pronunciation: 'ahb-bah / hah-dhah / moo-chah', hint: 'Tutschek (1845, §§ 180, 184, 186)' },
          { target: 'bishaan (biz\'an) / ibidda (ibida) / aduu (biftu) / baatii (bati)', source: 'Water / Fire / Sun / Moon', pronunciation: 'bee-shahn / ee-beed-dah / ah-doo / bah-tee', hint: 'Tutschek (1845, §§ 184, 254, Prayer 1)' },
          { target: 'loon (godiyo) / gaala / reeʿ (pl. rooda / rooni) / farda (pl. faratoni)', source: 'Cattle / Camel / Goat / Horse', pronunciation: 'lohn / gah-lah / reh-eh / fahr-dah', hint: 'Tutschek (1845, §§ 181–182, p. 86)' },
          { target: 'Ya Waca nagan na bultshite nagan na oltshi', source: 'O God, thou hast let me pass the night in peace, let me pass the day in peace (Morning Prayer)', pronunciation: 'yah wah-ca nah-gan na bul-tshi-te', hint: 'Tutschek (1845, p. 87, Morning Prayer)' },
          { target: 'D\'ad\'an ibidti bue hindebiu', source: 'Butter fallen into the fire comes not back (Proverb in Akafed\'e\'s Letter)', pronunciation: 'd\'a-d\'an i-bid-ti bu-e hin-de-bi-u', hint: 'Tutschek (1845, p. 90, Letter 5)' }
        ],
        sentences: [
          { target: 'Ya Waca nagan na bultshite nagan na oltshi.', source: 'O God, thou hast let me pass the night in peace, let me pass the day in peace (Tutschek 1845, p. 87).' },
          { target: 'D\'ad\'an ibidti bue hindebiu.', source: 'Butter fallen into the fire comes not back (Tutschek 1845, p. 90).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In Karl & Lawrence Tutschek’s 1845 "Grammar of the Galla Language" (p. 90), what does the proverb "D\'ad\'an ibidti bue hindebiu" mean?',
            correctAnswer: 'Butter fallen into the fire comes not back (Proverb in Akafed\'e\'s Letter)',
            options: [
              'Butter fallen into the fire comes not back (Proverb in Akafed\'e\'s Letter)',
              'Water / Fire / Sun / Moon',
              'Cattle / Camel / Goat / Horse',
              'Father / Mother / Child (pl. collective children)'
            ],
            hint: "d'ad'an = butter, ibidti = into the fire, bue = fallen, hindebiu = does not return"
          }
        ]
      },
      {
        id: 'borana-numbers-verbs',
        title: 'Numerals, Ordinals (-tiana), Amole Fractions & 8 Verbal Forms (Tutschek 1845)',
        icon: 'Hash',
        description: 'Count in Afaan Borana and master Tutschek’s (1845) ordinals, social numbers, salt-bar fractions, and 8 derived verb stems.',
        tips: "Tutschek (1845, §§ 201–215, pp. 58–63) documents cardinals 1–100,000, ordinals formed with -tiana (tokotiana '2nd', lamatiana '3rd', while '1st' is ini dura or hangafa), social numbers in -anu (latshanu '2 together', zadanu '3 together', arfanu '4 together'), and fractions of the amole salt-bar: tchabnana (1/2), karmana (1/4), gimaz'i (3/4), gedele (1/8).",
        words: [
          { target: 'tokko (toko), lama, sadii (zadi), afur (afuri), shan (z\'ani)', source: '1, 2, 3, 4, 5', pronunciation: 'tohk-koh, lah-mah, sah-dee, ah-foor, shahn', hint: 'Tutschek (1845, § 201, p. 58) & Krapf (1842)' },
          { target: 'ja\'a (dya), torba (torban = week), saddeet (zadeta), sagal (zagala), kudhan (kudani; kurna = 10-day period)', source: '6, 7, 8, 9, 10', pronunciation: 'jah-ah, tohr-bah, sahd-deht, sah-gahl, koo-dhahn', hint: 'Tutschek (1845, §§ 201, 203, pp. 58–59)' },
          { target: 'digdama (digetama = 20), sodoma (zodoma = 30), dhibba (d\'iba = 100), kuma (1,000), kuntuma (100,000)', source: '20, 30, 100, 1,000, 100,000', pronunciation: 'deeg-dah-mah / soh-doh-mah / dheeb-bah / koo-mah', hint: 'Tutschek (1845, §§ 203–204, pp. 59–60)' },
          { target: 'ini dura / hangafa (1st), tokotiana (2nd), lamatiana (3rd), zaditiana (4th)', source: 'First (first-born), Second, Third, Fourth', pronunciation: 'ee-nee doo-rah / tohk-koh-tee-ah-nah', hint: 'Tutschek (1845, §§ 207–208, pp. 60–61)' },
          { target: 'latshanu (2 together), zadanu (3 together), arfanu (4 together); ladz\'u (both)', source: 'Social numerals: two, three, four together; both', pronunciation: 'laht-shah-noo / zah-dah-noo / ahr-fah-noo', hint: 'Tutschek (1845, §§ 209–210, p. 61)' },
          { target: 'amole: tchabnana (1/2), karmana (1/4), gimaz\'i (3/4), gedele (1/8)', source: 'Salt-bar currency & its fractions: 1/2, 1/4, 3/4, 1/8', pronunciation: 'ah-moh-leh / tchahb-nah-nah / kahr-mah-nah', hint: 'Tutschek (1845, § 212, p. 62)' },
          { target: 'bâ → bad\'a → baza → bafad\'a → baziza → bazifad\'a → baziziza → bazizifad\'a', source: 'The 8 derived verbal forms of bâ (go out → middle → causative → middle-causative)', pronunciation: 'bah -> bah-d\'ah -> bah-zah -> bah-fah-d\'ah', hint: 'Tutschek (1845, § 44, p. 11)' },
          { target: 'dida (refuse) / bad\'a (neglect) / d\'aba (lack power) / ola (pass by)', source: 'The 4 negative auxiliary verbs in Galla/Borana', pronunciation: 'dee-dah / bah-d\'ah / d\'ah-bah / oh-lah', hint: 'Tutschek (1845, § 176, pp. 52–53)' }
        ],
        sentences: [
          { target: 'Nu arfanu teñeti walwadjin kana hazofna.', source: 'There are four of us sitting and conversing together (Tutschek 1845, p. 91).' },
          { target: 'Wacayo mid\'an magarziza.', source: 'God causes the grain to grow (Tutschek 1845, § 84, p. 22).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In Karl & Lawrence Tutschek (1845, § 212, p. 62), what are the four fractional divisions of the "amole" rock-salt bar?',
            correctAnswer: 'amole: tchabnana (1/2), karmana (1/4), gimaz\'i (3/4), gedele (1/8)',
            options: [
              'amole: tchabnana (1/2), karmana (1/4), gimaz\'i (3/4), gedele (1/8)',
              'tokko (toko), lama, sadii (zadi), afur (afuri), shan (z\'ani)',
              'latshanu (2 together), zadanu (3 together), arfanu (4 together); ladz\'u (both)',
              'dida (refuse) / bad\'a (neglect) / d\'aba (lack power) / ola (pass by)'
            ],
            hint: 'tchabnana (from tchaba "to break") = 1/2, karmana = 1/4, gimaz\'i = 3/4, gedele = 1/8'
          }
        ]
      }
    ]
  }
];

export const BORANA_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'borana-tutschek-1845-grammar',
    title: '30-Letter Phonology, 8 Derived Verbal Forms, 3 Conjugations, 6 Modes & 4 Negative Verbs (Tutschek 1845)',
    summary: 'Karl & Lawrence Tutschek’s 1845 Grammar of the Galla Language codifies the 30-character sound system, 8-link verbal derivation chain, 3 conjugations, 6 modal suffixes, and 3 negation mechanisms.',
    content: `From Karl & Lawrence Tutschek (*A Grammar of the Galla Language*, Munich, 1845, §§ 1–176, pp. 1–53):
1. **Phonology & T-Sound Contrast (§§ 1–37, pp. 1–9)**:
   - Distinguishes 4 dental/palatal/implosive T-sounds (**t, t', d, d'**) illustrated by the minimal quintuplet (§ 21): **duta** (thou diest, from *dua*), **duda** (deaf), **d'ud'ã** (I devour), **tuta** (crowd/heap), **t'ut'a** (I smoke), plus palatal **c/q** vs. **k** vs. **g** (**caca** 'soot', **gaga** 'wax', **kaka** 'oath').
2. **Eight Derived Verbal Forms (§§ 43–110, pp. 10–32)**:
   - **I. Root**: *bâ* (go out), *bua* (descend), *mara* (turn), *gala* (go home).
   - **II. Middle (-ad'a)**: *bad'a*, *buad'a*, *marad'a*, *galad'a* (do for oneself).
   - **III. Causative (-za / -ziza / -tsha / -eza)**: *baza* (drive out/forgive/pay), *buza* (overthrow), *marza*, *galtsha* (bring home). Seven liquid-stem verbs (§ 83) undergo consonant metathesis: *arga → 2s argita/agarta → III agarziza* (show), *elma → elemziza* (milk), *kolfa → kofalziza* (laugh), *darba → dabarza* (pass), *falma → falamziza* (dispute), *marga → magarza* (grow), *zirba → ziribziza* (dance).
   - **IV. Causative-Middle (-fad'a)**: *bafad'a*, *bufad'a* (lie down), *marfad'a*, *galfad'a*.
   - **V–VIII. Double/Triple Causatives & Middles**: *baziza → bazifad'a → baziziza → bazizifad'a*.
   - **IX. Passive (-ama)** & **Deadjectival Inchoative (-oma)**: *caba → cabama*, *mara → marfama*; *gari → garoma* (become fair), *tola → toloma* (become good), *hieza → hioma* (become poor), *dula → duloma* (grow old).
3. **Three Conjugations, Four Tenses & Six Modal Constructions (§§ 111–156, pp. 32–47)**:
   - **Conjugation I** (*adema, 2s ademta*), **Conjugation II** (*tshiza, 2s tshifta*; *lakã, 2s lakofta*), **Conjugation III** (*tà, 2s teza, 1p teña*; *boa, 2s boza, 1p boña*).
   - **Four Tenses**: Present (*adema*), I Preterit/Aorist (*ademe*), II Preterit/Perfect (*ademera = ademe dyira*), Future (*ademufandyira*, plus 4 proximate future degrees with *gà*: *d'ufu gaufdyira, d'ufu gà, d'ufu gae, d'ufu gaera*).
   - **Subjunctive in -u & Five Affixed Particle Modes**: **-re** (affirmative interrogative: *malif ani zi egare?*), **-mi** (negative interrogative *nonne*: *ani zin djenemi?*), **-ti** (with *hama/aka*: *t'uri haman ani d'ufuti*), **-yi** (with *oto* 'while': *oto ati muka dyala tezuyi*), **-ni** (with *oto* + negative 'without': *oto izan homa hiñad'ini galani*).
4. **Three Negation Mechanisms (§§ 173–176, pp. 51–53)**:
   - **(a) Verbal prefix *hin-* (*n'*)**: Present in *-u* (*ani hintchabzu*), Preterit in *-ne/-ine* (*ani hintchabzine*), Imperative in *hin-...-in* (*hindubad'in*).
   - **(b) Nominal/Adjectival copula negative *-miti***: *ani ilmakemiti* (am I not thy son?), *ini garimiti* (he is not handsome).
   - **(c) Four Negative Auxiliary Verbs**: *ini oad'z'udide* (he refused to answer), *ini oad'z'ubad'te* (he neglected/forgot to answer), *ini oad'z'u d'abe* (he was unable to answer), and *ola* (pass by / fail to keep).`,
    examples: [
      { borana: 'bâ → bad\'a → baza → bafad\'a → baziza → bazifad\'a → baziziza → bazizifad\'a', english: 'go out → for oneself → drive out → drive out for oneself → cause to drive out...', explanation: 'Tutschek (1845, § 44, p. 11) 8-link verbal derivation chain' },
      { borana: 'ini oad\'z\'udide • ini oad\'z\'ubad\'te • ini oad\'z\'u d\'abe', english: 'he refused to answer • he neglected to answer • he was unable to answer', explanation: 'Tutschek (1845, § 176, p. 53) three-way negative auxiliary distinction' }
    ]
  },
  {
    id: 'borana-nouns-numerals-pronouns-1845',
    title: 'Collective Feminine Nouns, Cases, Ordinals (-tiana), Social Numerals (-anu), Amole Fractions & Pronouns (Tutschek 1845)',
    summary: 'Chapter II of Tutschek (1845, pp. 54–81) details collective feminine agreement, Accusative-first declension, numerals, amole salt-bar fractions, and emphatic/reflexive/reciprocal pronouns.',
    content: `From Karl & Lawrence Tutschek (*A Grammar of the Galla Language*, Munich, 1845, §§ 177–255, pp. 54–83):
1. **Collective Feminine Agreement & Declension (§§ 177–191, pp. 54–57)**:
   - Collective nouns (**dargago** 'youth', **mangudo** 'judge/elders', **hatu** 'thief', **hidjole** 'children') and plural nouns (*faratoni d'êd'ti* 'the horses graze') govern 3rd person feminine singular verbs unless individualized by *toko* or singulative suffixes (**-eza, -itsha / -iti, -tu / -titi**).
   - The **Accusative/Absolutive** is the unmarked base form (*mut'ut'e, bati, ramo, adu, lafa, muka, boka*); the **Nominative** suffixes **-n, -i, -fni** (for nouns in *-iza/-awa*: *kaniza → kanifni* 'bee', *barziza → barzifni* 'teacher', *gawa → gofni* 'hole'), or **-ti / -ni** (*lafa → lafti*, *muka → mukni*, *boka → bokeñi*).
2. **Numerals, Ordinals, Social Numbers & Amole Fractions (§§ 201–215, pp. 58–63)**:
   - **Cardinals**: *toko* (1), *lama* (2), *zadi* (3), *afuri* (4), *z'ani* (5), *dya* (6), *torba* (7; *torban* = week), *zadeta* (8), *zagala* (9), *kudani* (10; *kurna* = decade / 10-day period), *digetama* (20), *zodoma* (30), *afurtama* (40) ... *d'iba* (100), *kuma* (1,000), *kuntuma* (100,000).
   - **Ordinals**: 1st *ini dura* or *hangafa* (first-born/best, opposite to *gudiru* youngest child and *ini boda* last); 2nd *tokotiana*, 3rd *lamatiana*, 4th *zaditiana*, 5th *afuritiana*, etc. (from *-ti* + *ana* 'hang on').
   - **Social Numerals (-anu)**: *latshanu* (2 together), *zadanu* (3 together), *arfanu* (4 together), *z'ananu* (5 together), *kurnanu* (10 together); *ladz'u* (both).
   - **Amole Salt-Bar Fractions (§ 212, p. 62)**: **tchabnana** ($\frac{1}{2}$), **karmana** ($\frac{1}{4}$), **gimaz'i** ($\frac{3}{4}$), **gedele / gadele** ($\frac{1}{8}$).
3. **Pronouns (§§ 216–251, pp. 63–81)**:
   - **Personal (Nom. | Acc. | Emphatic -tu)**: 1s *ani | ana, na | anatu*; 2s *ati | zi | zitu*; 3sm *ini | iza | izatu*; 3sf *iz'in | iz'i | iz'itu*; 1p *nu (unu) | nutu*; 2p *izin | izintu*; 3p *izan | izantu* (Emphatic *-tu* takes 3s verb: *zitu beka* 'thou knowest').
   - **Affixed Possessives**: *-ko* (my), *-ke* (thy), *-za* (his), *-z'i* (her), *-keña* (our), *-kezani* (your), *-zani* (their), plus affectionate contractions *abo / had'o* (my father / mother), *abe / had'e* (thy father / mother), *indallo* (my girl).
   - **Reflexive & Reciprocal**: *ufi / uf* (self, *ipse*; *uffad'a* 'dress oneself') and *wali / wal* (each other: *waliti, walwadjin, walkeza, walaka* 'middle').`,
    examples: [
      { borana: 'ini dura / hangafa (1st) • tokotiana (2nd) • lamatiana (3rd) • latshanu (2 together) • arfanu (4 together)', english: 'first • second • third • two together • four together', explanation: 'Tutschek (1845, §§ 207–209, pp. 60–61)' },
      { borana: 'amole: tchabnana (1/2) • karmana (1/4) • gimaz\'i (3/4) • gedele (1/8)', english: 'salt-bar currency fractions: half • quarter • three-quarters • eighth', explanation: 'Tutschek (1845, § 212, p. 62)' }
    ]
  },
  {
    id: 'borana-tutschek-1844-dictionary-ethnography',
    title: '5 Gadaa Circumcision Tribes, Governance, Adoption, Oaths, Calendar & Cattle Classification (Tutschek 1844–1845)',
    summary: 'Karl & Lawrence Tutschek’s Dictionary of the Galla Language (Part I: Galla–English–German, 1844; Part II: English–Galla, 1845) documents the 5 circumcision tribes, political & judicial offices, adoption & peace rites, calendar, currency, cattle taxonomy, and 22 verbatim proverbs & songs.',
    content: `From Karl & Lawrence Tutschek (*Dictionary of the Galla Language*, Part I, Munich, 1844, pp. i–lix, 1–205; Part II, Munich, 1845, pp. 1–126):
1. **Four Historical Informants, Autonyms & Sects (Part I Preface, pp. xii–xiv, 24, 78, 147, 200)**:
   - **Akafed'e Dalle** (Boranna Galla from *Botchi* in *Hambo*, province of *Liban*, d. May 17, 1841), **Otshu Aga** (from *Urgeza* in *Sibu*, who also transmitted songs from **Bilile** of *Guma*, d. Oct. 27, 1840), and **Aman Gonda** (from *Hibi* in *Goma*, of the **wadjo / watcho** subdivision of the *Boranna* sect, son of an **aba fuño** judicial officer). Autonyms: **oromo** (p. 24) and **himata** ("orthodox believer", p. 200); religious sects: **Boranna** (subdivision *wadjo*, p. 147) vs. **djarzo** (p. 78).
2. **The Five Galla Tribes / *Gadaa* Circumcision Rank Orders (pp. 34, 73, 78, 104, 155, 169, 203)**:
   - **1st**: **horad'a** (p. 203) → **2nd**: **midjile** (p. 169) → **3rd**: **robale** (p. 155) → **4th**: **kilole** (p. 34) → **5th**: **dulo** (p. 104); plus **djara** (surgical circumcision feast held two years after the *Gada / Buta* festival, p. 78), **tchala** (circumcision priests, p. 73), and **cori naga** (ceremonial *Buta* dish, p. 48).
3. **Political & Judicial Hierarchy, Adoption, Oaths & Heroic Distinctions**:
   - **Hierarchy**: **moti** (king, fem. *meti*, palace *mazara*, concubines *zadjeda / birmad'u*, groom *nao* leading war-horse *farta lola* or courser *djolle*), **zoreza / zalgana / momoti** (princes/nobles), **aba ganda** (town governor), **aba lafa** (landlord; settled vassals *gubziza*), **mangudo / bera** (senate/judges sitting at *gude dubi* or *yai dyidu*), **aba fuño** ("master of the cord", judicial officer), **cuge** (sergeant/tipstaff), **cabi** (distrainer), **erada** (bailiff), **gindo** (leg-stocks prison), **findja Lali** (execution waterfall in *Hambo*), and **guma** (homicide blood-money / ransom).
   - **Adoption (*gada / balfad'a*)**: **gada guda** (complete adoption) vs. **gada t'ina** (incomplete adoption, p. 53), **gubifad'a** (adopting when already having children, p. 68), and **balfad'a** (solemn single-file procession *waliti ananiti* carrying green **Meeça** twigs to deliver the adoptive son **baldja**, pp. 94, 131).
   - **Oaths & Peacemaking**: **kalatcha** (oath-staff wreathed with *meeça* under the *lafto Michaila* tree, licked before the priest *Gadyo* with the oath *"hori ani cabu Wacayo géekoti ha mut'ad'u ha balʿezu!"*, pp. 31–32), **t'wu — aki — t'wu — tili!** (spitting chewed *tila* grass to ratify a promise, p. 91), **mora wal cabad'a** (holding sacrificial fat together to ratify peace, pp. 43, 172), and **cote wal cabad'u** (hooking the little fingers *moge* together to wager, pp. 47, 66).
   - **Heroic Distinctions**: **gondala** (hero who has slain an enemy, elephant, lion, or buffalo and anoints his head with butter, fixing the **zariti** thorn in his hair during the **gerara** triumphal song and wearing the ivory armlet **ilbora**, earring **d'ugo**, chain pendant **loti**, and bracelet **gudidja**, pp. 20, 66–67, 116, 159, 182) vs. **gurgudu** (unblooded man, p. 69).
4. **Calendar, Currency & Complete Cattle Classification (*Lon*)**:
   - **7 Days of the Week**: *1. Gifti (Kamiza), 2. Djimada/Djimata, 3. Zambata t'ina (preceded by cadame), 4. Zambata guda, 5. Zaño, 6. Maczaño (Tafno), 7. Arbi*; **4 Seasons**: *birra* (spring, ushered in when the yellow **kelo** flower blooms at the **Magzala** feast), *bona* (summer), *arfaza* (autumn), *ganna* (winter/rains); **Months**: *1st hadoleza (hadami), 2nd hagayo, 3rd wadabadji, furma*; **5-Year Sequence**: *barrakan → barrengata → barrana → barragere → barratchanu*.
   - **Currency**: **amole** rock-salt bar (*mogor* = 2, *tchabnana* = 1/2, *kurmana* = 1/4, *gimaz'i* = 1/8, *gedele / fotoqe* = 1/12, *zanaga / çarmama* = bound broken bar) and **biri** (Maria Theresa silver dollar = 20–23 *amole*, p. 135).
   - **Cattle (*lon*, p. 160 & Pt. II p. 20)**: Male *tshabi → djibitcha → gorba (3 yrs) → wofana → godiyo (plough-ox) → korma (bull: korma bordeda vs. korma gurra) → ulfin → zanga (fattened ox)*; Female *tshabi → rad'a (2-yr heifer) → goromza → zã/zawa (zilga = pregnant/milk cow; gua = dried-up cow) → dulatcha (aged cow)*.`,
    examples: [
      { borana: "1. Horad'a • 2. Midjile • 3. Robale • 4. Kilole • 5. Dulo (djara & tchala)", english: "The 5 Galla tribes/grades by circumcision order (plus surgical circumcision feast & officiating priests)", explanation: "Tutschek (1844, Part I, pp. 34, 73, 78, 104, 155, 169, 203)" },
      { borana: "Gifti (Kamiza), Djimata, Zambata t'ina, Zambata guda, Zaño, Maczaño (Tafno), Arbi • barrakan, barrengata, barrana, barragere, barratchanu", english: "The 7 days of the week • The 5-year relative sequence (2 yrs ago → last yr → this yr → next yr → in 2 yrs)", explanation: "Tutschek (1844, Part I, pp. 11, 60, 80, 85, 131, 161, 183)" },
      { borana: "tshabi → djibitcha → gorba → wofana → godiyo → korma → ulfin → zanga | rad'a → goromza → zawa (zilga / gua) → dulatcha", english: "Complete male & female cattle age-grade classification under lon (loni)", explanation: "Tutschek (1844, Part I, p. 160 & Part II, 1845, p. 20)" }
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
    title: 'Unit 1: Lake Baringo Salutations, Njemps Liabori & Lekepir Irrigation Heritage & Numerals (Dundas 1910 & Johnston 1902)',
    description: 'Learn Ilchamus greetings, river-irrigation and fishery vocabulary, and numerals 1–10 from Dundas (1910, pp. 49–55) and Johnston (1902).',
    icon: '🌊',
    skills: [
      {
        id: 'ilchamus-baringo-heritage',
        title: 'Baringo Settlements (Liabori, Lekepir & Korvan), Lake Life & Numerals (Dundas 1910)',
        icon: 'Compass',
        description: 'Master Ilchamus vocabulary recorded by Hon. K. R. Dundas (1910) and Sir Harry Johnston (1902).',
        tips: "Hon. K. R. Dundas (1910, JRAI Vol. 40, pp. 49–55) documented the three Njamus (Nyarusi) settlements: Njemps Kubwa or Njemps Liabori ('Downstream' on the Molo River), Njemps Ndogo or Njemps Lekepir ('Upstream' on the Tigrish River), and Korvan (founded on Lake Baringo's islands by Logogwa), together with their 16 clans and the Il Mayek furrow-opening rite.",
        culturalNote: "On Lake Baringo (Mparingo), Ilchamus fishermen traditionally crafted ultra-light buoyant canoes (l-kadich) bound from ambatch (Aeschynomene elaphroxylon) balsa reeds (Dundas 1910, p. 53).",
        words: [
          { target: 'Supai! (resp. Epa!) / Serian!', source: 'Greetings! / Peace!', pronunciation: 'soo-pah-ee / seh-ree-ahn', hint: 'Ilchamus salutation' },
          { target: 'Njemps Liabori (Njemps Kubwa) / Njemps Lekepir (Njemps Ndogo) / Korvan', source: 'Downstream Njemps (on the Molo) / Upstream Njemps (on the Tigrish) / Island & Tim River settlement', pronunciation: 'n-jeh-mps lee-ah-boh-ree / leh-keh-peer / kohr-vahn', hint: 'Dundas (1910, pp. 49–50, 53)' },
          { target: 'Mparingo / l-kadich / l-singiri', source: 'Lake Baringo / Ambatch balsa-reed canoe / Fish', pronunciation: 'm-pah-reen-goh / l-kah-deech / l-seen-gee-ree', hint: 'Lake Baringo maritime & fishing lexicon' },
          { target: 'nkare / n-kima / n-kolong / Nkai', source: 'Water (River) / Fire / Sun / God', pronunciation: 'n-kah-reh / n-kee-mah / n-koh-lohng / n-kah-ee', hint: 'Johnston (1902 Njemps) & Dundas (1910)' },
          { target: 'n-kiteng (pl. n-kishu) / l-kinos (ngingyang) / l-makau', source: 'Cow (pl. Cattle) / Crocodile / Hippopotamus', pronunciation: 'n-kee-tehng / l-kee-nohs / l-mah-kah-oo', hint: 'Johnston (1902 Njemps) & Dundas (1910, p. 49 n. 1)' },
          { target: 'nabo (obo), are, uni, ongwan, imiet', source: '1, 2, 3, 4, 5', pronunciation: 'nah-boh, ah-reh, oo-nee, oh-ngwahn, ee-mee-eht', hint: 'Johnston (1902 Njemps) numerals 1–5' },
          { target: 'ile, sapana, isiet, saal, tomon', source: '6, 7, 8, 9, 10', pronunciation: 'ee-leh, sah-pah-nah, ee-see-eht, sahl, toh-mohn', hint: 'Johnston (1902 Njemps) numerals 6–10' }
        ],
        sentences: [
          { target: 'Njemps Liabori o Njemps Lekepir: Il Mayek oo Il Derito.', source: 'Downstream Njemps and Upstream Njemps: The Il Mayek clan and Il Derito elders open the irrigation furrow (Dundas 1910, pp. 49–54).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In Hon. K. R. Dundas (1910, pp. 49–50, 53), what are the three historic Njamus (Ilchamus) settlements near Lake Baringo?',
            correctAnswer: 'Njemps Liabori (Njemps Kubwa) / Njemps Lekepir (Njemps Ndogo) / Korvan',
            options: [
              'Njemps Liabori (Njemps Kubwa) / Njemps Lekepir (Njemps Ndogo) / Korvan',
              'nabo (obo), are, uni, ongwan, imiet',
              'ile, sapana, isiet, saal, tomon',
              'Supai! (resp. Epa!) / Serian!'
            ],
            hint: 'Liabori ("Downstream" on the Molo), Lekepir ("Upstream" on the Tigrish), and Korvan'
          }
        ]
      }
    ]
  }
];

export const ILCHAMUS_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'ilchamus-dundas-1910-grammar',
    title: 'Ilchamus (Njamus / Nyarusi) Northern Maa Grammar, 16 Clans, Irrigation Rituals & Lare/Ngolong Calendar (Dundas 1910 & Johnston 1902)',
    summary: 'Ilchamus forms the Lake Baringo branch of Northern Maa (Eastern Nilotic), sharing l-/n- gender prefixes and VSO verb structure with Samburu and Maasai.',
    content: `Documented by Sir Harry H. Johnston (*The Uganda Protectorate, Vol. II*, 1902, Njemps) and Hon. K. R. Dundas (*Notes on the Tribes Inhabiting the Baringo District*, JRAI Vol. 40, 1910, pp. 49–55):
- **Gender Prefixes**: Masculine **l-** (*l-tungani* 'man/person', *l-kinos / ngingyang* 'crocodile', *l-makau* 'hippopotamus') and Feminine **n-** (*n-gitok* 'woman', *n-kare* 'water', *n-kishu* 'cattle').
- **3 Settlements & 16 Clans (Dundas 1910, pp. 49–53)**: *Njemps Kubwa / Njemps Liabori* ("Downstream" on the Molo River), *Njemps Ndogo / Njemps Lekepir* ("Upstream" on the Tigrish River), and *Korvan* (founded on Lake Baringo islands by *Logogwa*); 16 clans across 6 ancestral groups: *Laikipiak* (*Il Kabes, Loiborgishu, Il Barsegir*), *Samburu* (*Il Mayek, Ol Barasaero, Ol Ouara, Loimüsse*), *Il Doigio* (*Ol Doimal, El Gungwan, Ol Gesiani, Ol Murtanat, Ol Gessei*), *Kamasia* (*Masari*), *Uasin Gishu / Moiven* (*Barsaina*), and aboriginal *Il Geroi* (*'Ngang Lessamagan, 'Ngang Ngissegir / Lebarkilenya*).
- **Irrigation Furrow Ceremony & Calendar (pp. 54–55)**: 10 *Il Derito* elders assist 1 *Il Mayek* officiant in sacrificing a *sirwa* sheep at the furrow mouth (observing 6 game taboos: waterbuck, eland, oryx, zebra, rhino, hippo). Calendar divided into **Lare** (Wet season: *Oäni-oingok* [Mar], *Borgola* [Apr], *Loo-'n Gokwa* [May], *Lorigine* [Jun], *Lakodakol* [Jul], *Lekepirn* [Aug], *Lolrochorot* [Sep–Nov]) and **Ngolong** (Hot season: *Gulua* [Dec], *Rialbala* [Jan], *Arat* [Feb]).`,
    examples: [
      { ilchamus: 'Njemps Liabori (Molo) • Njemps Lekepir (Tigrish) • Korvan (Tim/Islands)', english: 'Downstream Njemps • Upstream Njemps • Korvan Island/Mainland settlement', explanation: 'Dundas (1910, pp. 49–50, 53)' },
      { ilchamus: 'Lare: Oäni-oingok, Borgola, Loo-'n Gokwa, Lorigine, Lakodakol, Lekepirn, Lolrochorot • Ngolong: Gulua, Rialbala, Arat', english: 'Wet season (Mar–Nov) & Hot season (Dec–Feb) months', explanation: 'Njamus 12-month calendar in Dundas (1910, p. 55)' }
    ]
  }
];

// --- 22. POKOT (Pökoot / Suk) ---
export const POKOT_CONFIG: LanguageConfig = {
  id: 'pokot',
  name: 'Pokot (Pökoot)',
  nativeName: 'Pökoot (Pôkwut / Suk)',
  family: 'Nilotic',
  counties: ['West Pokot', 'Baringo', 'Turkana'],
  speakers: '780K',
  speechLocale: 'sw-KE',
  description: 'The northern branch of the Highland (Southern) Nilotic Kalenjin family, spoken across West Pokot and Baringo counties by both agricultural hill-furrow engineers (Pi-pa-pagh "Seed/Grain People") and pastoral plains communities (Pi-pa-tich "Cattle People"). Grounded in Sir Harry Johnston (1902 Suk), Hon. K. R. Dundas (1910), and Mervyn W. H. Beech (1911 "The Suk: Their Language and Folklore").',
  color: '#7C3AED',
  sources: ['johnston-uganda-protectorate-1902', 'dundas-baringo-tribes-1910', 'beech-suk-pokot-1911', 'open-web-swadesh-comparative'],
};

export const POKOT_UNITS: CourseUnit[] = [
  {
    id: 'pokot-unit-1',
    title: 'Unit 1: Pökoot Salutations (p. 91), Beech’s (1911) Suk Grammar, Quinary Numerals & Tiangoi! Riddles',
    description: 'Master Pökoot salutations (Tokwes! / Chamke-t! / Subai! / Tapkwenya!), nouns, quinary numerals 1–100 (pp. 66–68), riddles (pp. 43–45), and the Hymn to Torôrut (p. 16) from Mervyn Beech (1911).',
    icon: '⛰️',
    skills: [
      {
        id: 'pokot-beech-1911-lexicon',
        title: 'Salutations, Hill-Furrow & Pastoral Life, Quinary Numerals & Riddles (Beech 1911)',
        icon: 'Scroll',
        description: 'Learn Pökoot vocabulary, quinary numerals, and riddles from Mervyn W. H. Beech (1911).',
        tips: "Mervyn W. H. Beech (1911, p. 43) records that Pökoot riddles begin with the challenge 'Tiangoi!', answered by 'Tia!' (and 'Donguch!' if guessed wrong). Beech (pp. 9, 15, 82, 112, 145) also documents the division between Hill Suk (Pi'-pa-pagh 'Seed-people', who build cliff-side irrigation ditches called ôr-a-pogh) and Pastoral Suk (Pi'-pa-tich 'Cattle-people'), and notes that Pökoot uses distinct verbs for drinking milk (lu) vs. drinking water (igh).",
        culturalNote: "In Mervyn Beech (1911, p. 19), the elder Tiamolok describes the Suk celestial pantheon: Torôrut (Supreme winged Sky God whose wings flash lightning kerial and thunder kotil), his wife Seta (the Pleiades), his first-born son Arawaʻ (the Moon), his son Ilat (the Rain), his first-born daughter Topogh (the Evening Star), his younger brother Asis (the Sun), and his children Kokel (the Stars).",
        words: [
          { target: 'Tokwes! Chamke-t! — Chamke-cha! — Chamke-kau! — Chamke-sapon! / Subai! (resp. Ērpa!) / Tapkwenya! (resp. Īgo!)', source: 'Elder greeting litany! / Male greeting! / Female greeting!', pronunciation: 'tohk-wehs / chahm-keht / soo-bah-ee / tahp-kweh-nyah', hint: 'Beech (1911, p. 91) Suk salutations' },
          { target: 'Sĕra! (Sĕre!) / Korôton! (resp. I-rôt-enyi!)', source: 'Thank you! / Good-bye! (lit. I have gone! — Thou art going!)', pronunciation: 'seh-rah / koh-roh-tohn', hint: 'Beech (1911, pp. 92, 96, 119, 143)' },
          { target: 'Torôrut • Seta • Arawaʻ • Ilat • Topogh • Asis • Kokel', source: 'Supreme Sky God • Pleiades (wife) • Moon (1st son) • Rain (son) • Evening Star (1st daughter) • Sun (younger brother) • Stars', pronunciation: 'toh-roh-root / seh-tah / ah-rah-wah / ee-laht / toh-pohgh', hint: 'Beech (1911, p. 19) Suk celestial family' },
          { target: 'chi (pl. pich / pik) • muren • kôrkôʻ (pl. kôru) • Pĕch-on (pl. Pôkwut)', source: 'Person (pl. People) • Warrior • Woman (pl. Women) • Suk person (pl. Suk people)', pronunciation: 'chee / peech / moo-rehn / kohr-koh / peh-chohn / poh-kwoot', hint: 'Beech (1911, pp. 1, 57, 61)' },
          { target: 'pogh • maʻ (mat, pl. môat) • ôr-a-pogh • kōkwa (pl. kokwo-ten)', source: 'Water • Fire • Irrigation ditch/furrow • Village council assembly place', pronunciation: 'pohgh / maht / ohr-ah-pohgh / koh-kwah', hint: 'Beech (1911, pp. 54, 61, 101, 112)' },
          { target: 'tainy (pl. tich) / teta (pl. toka) • cheghwa (verb: lu) • pagh / musong / matai', source: 'Cattle / Cow • Milk (lu = drink milk vs. igh = drink water) • Grain / Millet / Eleusine', pronunciation: 'tah-eeny / teh-tah / cheh-gwah / pahgh / moo-sohng / mah-tah-ee', hint: 'Beech (1911, pp. 4, 9, 51–52, 62, 112)' },
          { target: 'okoñgô, oghieñg, somok, añgwan, mūt', source: '1, 2, 3, 4, 5', pronunciation: 'oh-kohn-goh, oh-ghyehng, soh-mohk, ahn-gwahn, moot', hint: 'Beech (1911, pp. 66–67) cardinals 1–5' },
          { target: 'mut ngô okoñgô (akan-kapei), mut ngô oghieñg (akan-kare), mut ngô somok (akan-kowuni), mut ngô añgwan (akan-ko-mwan), taman', source: '6 (5+1), 7 (5+2), 8 (5+3), 9 (5+4), 10', pronunciation: 'moot ngoh oh-kohn-goh ... tah-mahn', hint: 'Beech (1911, p. 67) quinary & Turkana-borrowed numerals 6–10' },
          { target: 'Tiangoi! — Tia! Nyelnyel ma-ke-lany. — Sirim-nyon.', source: 'Riddle: Unstable so-it-may-not-be-climbed. — Answer: A chain (Beech 1911, p. 43, Riddle #1)', pronunciation: 'tyahn-goy — tyah! nyehl-nyehl mah-keh-lahny — see-reem-nyohn', hint: 'Mervyn Beech (1911, p. 43, Riddle #1)' }
        ],
        sentences: [
          { target: "Torôrut kun-e' mwagh, ki-sop-'cha pich, ki-sop sapon — Ny' anyin!", source: 'God give-us fatness, and we thy people shall be well; we shall be well with health — That is sweet! (Beech 1911, p. 16)' },
          { target: "Rel-e' ti'-chu lopai pirir kirokit. — Kelat ngô ñgaliep.", source: 'Riddle: White are all my cows, red is the bull. — The teeth and the tongue (Beech 1911, p. 44, Riddle #3).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In Mervyn W. H. Beech’s "The Suk: Their Language and Folklore" (1911, p. 43), what is the verbatim Suk text and answer for Riddle #1?',
            correctAnswer: 'Tiangoi! — Tia! Nyelnyel ma-ke-lany. — Sirim-nyon.',
            options: [
              'Tiangoi! — Tia! Nyelnyel ma-ke-lany. — Sirim-nyon.',
              'okoñgô, oghieñg, somok, añgwan, mūt',
              'tainy (pl. tich) / teta (pl. toka) • cheghwa (verb: lu) • pagh / musong / matai',
              'Sĕra! (Sĕre!) / Korôton! (resp. I-rôt-enyi!)'
            ],
            hint: 'Nyelnyel ma-ke-lany ("Unstable so-it-may-not-be-climbed") — Sirim-nyon ("A chain")'
          }
        ]
      }
    ]
  }
];

export const POKOT_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'pokot-beech-1911-grammar',
    title: 'Pökoot (Suk) Phonology, Absence of Definite Article, 8 Noun Classes, Quinary Numerals & Dual-Affix Verbs (Beech 1911, pp. 46–98)',
    summary: 'Mervyn W. H. Beech’s 1911 monograph The Suk: Their Language and Folklore (with Sir Charles Eliot’s comparative Introduction, pp. xi–xxiv) documents Pökoot phonetics (ghain & hamzah), 8 noun classes without definite articles, quinary numerals, and prefix+suffix verbal conjugation.',
    content: `From Mervyn W. H. Beech (*The Suk: Their Language and Folklore*, Clarendon Press, Oxford, 1911, pp. xi–xxiv, 46–98):
- **Phonology & Comparison with Nandi (pp. xvi–xxiv, 46–50)**:
  - Possesses guttural **gh** (Arabic *ghain*, often corresponding to Nandi *y/i*: Suk *ghaʻ* vs. Nandi *ya* 'bad', *egh* vs. *ei* 'bullock', *hegh* vs. *e* 'hand', *togh* vs. *tui* 'black', *maugh* vs. *moi* 'calf', *igh* vs. *ie* 'drink') and glottal stop **ʻ** (Arabic *hamzah*, e.g. *omisioʻ* 'food', *kôrkôʻ* 'woman'). Suk *r* often corresponds to Nandi *l* (*rel* vs. *lel* 'white/new', *karual* vs. *kalual* 'grey hair').
  - **Absence of Functional Definite Article (pp. xvi–xvii, 51–52)**: Unlike Nandi, Suk has no functional definite article, though fossilized Nandi *-t/-to* singulars (*teta* cow, *mat* fire, *pendoʻ* meat, *kainat* name, *chepto* girl) and Turkana *nya-/nye-* prefixes (*añgoli* horse < *nya-ñgole*, *akori* giraffe < *nye-kori*, *nimur-ion* cooking-stone < *nya-muro*) survive in noun stems.
- **Cases, Gender & 8 Noun Classes (pp. 50–63)**:
  - **Vocative (p. 53)**: Suffixes **-ni** (sg.) and **-chu** (pl.) (*kôrkôʻ-ni!* O woman!, *kôru-chu!* O women!, *Torôru'-ni!* O Supreme God!), plus *wērno!* (pl. *wēr-chara!*) 'I say, you there!'.
  - **Genitive (pp. 53–54)**: (1) Preposition **pa / po** ('of': *pi' pa Merich*, *po' pa maʻ* hot water) or **to** for kinship (*bapu to Logwomeri*, *wero-Laiamale* son of Laiamale), or (2) Direct juxtaposition (*rotwa-kôrkôʻ* the woman's knife).
  - **8 Substantive Classes (pp. 54–63)**:
    - *Class I (Singulatives from Collectives)*: Ethnonymic **-in / -on** (*Pĕch-on → Pôkwut*, *Chemwel-in → Chemwel* Nandi, *Ketŏk-in → Ketŏch* Kavirondo) and singulative **-won / -yon / -ian / -ion / -nyon** (*kokel-ian → kokel* stars, *sus-won → sus* grass, *poi-yon → poi* elders, *werkoi-yon → werkoi* medicine-men). Derived verbal nouns take **-ei → -sut** (*miôn-ei → miôn-sut* sick person), agent **-in → -ŭ** (*sōm-in → somŭ* beggar, *chur-in → chur-u* thief), and abstract **-isioʻ** (*om-isioʻ* food, *igh-isioʻ* work).
    - *Class II*: Plural in **-tin / -in / -n / -ten** (*kuki → kuki-tin* dogs, *yit → yit-in* ears, *egh → egh-in* bullocks, *ôr → ôr-ten* clans/roads, *lalua → lalua-ten* rivers).
    - *Class III*: Plural in **-ei / -ai / -oi** (*kutuñg → kutuñg-ai* hills/knees, *theli-aʻ → theli-ei* comrades, *sigir-ioʻ → sigir-ei* donkeys, *blerkw-aʻ → blerkw-oi* hares).
    - *Class IV (Internal Vowel/Accent Alternation)*: *moser → mosôr* (heifers), *ñgáliep → ñgaliĕ́p* (tongues), *tarĭ́t → tarít* (birds), *kôkăt → kukŏ́t* (doors), *ñgĕ́chĕr → ngechér* (head-stools), *maugh → mōgh* (calves).
    - *Class V*: Plural in **-ut / -ot / -yut** (*kainat → kainat-ut* names, *moroi → moroi-yut* snakes, *kepen → kepen-ot* caves).
    - *Class VI*: Plural in **-is** (*kainy → kainy-is* years, *kalach-a → kalach-is* skin capes, *aloket → aloket-is* head-dress wire tails).
    - *Class VII (Nandi Cognate Plurals)*: *ki/kue → tukun* (things), *koñg → konyen* (eyes), *kel → kel-ien* (feet), *chi → pich/pik* (people), *arawaʻ → oror* (moons/months), *ngôt → ngôt-ua* (spears), *kech → kech-ir* (sheep).
    - *Class VIII (Collectives & Irregulars)*: *pogh* (water), *cheghwa* (milk), *keleloʻ* (curdled milk), *komat* (honey), *koman* (honey-wine), *pagh* (grain), *musong* (millet), *matai* (eleusine); irregular *aran/aretan → ñgaror* (goats), *hegh → he'-wun* (hands), *kau/ka → kiston* (villages).
- **Adjectives, Pronouns & Quinary Numerals (pp. 63–75)**:
  - Attributive adjectives require the relative **nya** (sg.) / **cha** (pl.) and form plurals in **-ech** (*chi nya karam → pi' cha karam-ech* good, *ghaʻ → ghach* bad, *togh → tu-w-ech* black, *ril/rel → rel-ech* white, *pirir → pirech* red) or **-e/-i/-ei** (*pertat → pertat-i* swift; irregular *wō → echen* big, *meneñg → mingech* small). Comparison uses **mba** ('rather than') or **mwañgwa** ('more so'), and superlative uses **nyaman / kōchĭu** or **ma-mi-nye** ('there is none [finer]').
  - **Quinary Numerals (pp. 66–68)**: *okoñgô* (1), *oghieñg* (2), *somok* (3), *añgwan* (4), *mūt* (5), *mut ngô okoñgô / akan-kapei* (6 = 5+1), *mut ngô oghieñg / akan-kare* (7 = 5+2), *mut ngô somok / akan-kowuni* (8 = 5+3), *mut ngô añgwan / akan-ko-mwan* (9 = 5+4), *taman* (10), *tiptem / taman ut-oghieñg* (20), *sosom* (30), *artam* (40), *konom* (50), *konom ngô taman* (60), *konom ngô tiptem / listam* (70), *pokol* (100).
  - **Pronouns (pp. 69–75)**: Personal: *ani* (1s), *nyī* (2s), *nyende / nye* (3s), *acha* (1p), *akwa* (2p), *chane / cha* (3p); Emphatic: *ande, nyinde, nyende (nya-kegh), achane, akwane, chane (cha-kegh)* (+ *ungit* sg. / *open* pl. 'by oneself'); Possessive suffixes: *-nyan / -chan* (my), *-ñgmwu / -ku* (thy), *-nyi / -chi* (his/her), *-nja / -cha* (our), *-ñgmwa / -kwa* (your/their); Demonstratives: *nyĭ / chu* (this/these), *nyino / chuno* (that/those near), *nyara / chara* (that/those yonder).
- **Verbal Conjugation & Complex Derivative Affixes (pp. 75–89)**:
  - **Dual Prefix + Suffix Indexing (pp. 75–77)**: 1s **o-...-an** (obj. *-anan*), 2s **i-...-enyi** (obj. *-inyi*), 3s/3p **ø-...-ei** (no pronoun affix), 1p **ki-...-echa** (obj. *-acha*), 2p **o-...-ekwa** (obj. *-akwa/-okwa*); e.g., *o-lim-an / o-lim-ei* (I hear), *k-a-lim-an* (Present Perfect: I have heard), *ki-a-lim-an* (Past Perfect: I heard), *atô-lim-an* (Conditional: if I hear), *a-lim / e-lim / ko-lim / ke-lim* (Subjunctive), *lim-a! / a-lim-a!* (Imperative), *komuny-anan* (Passive **ko-**: I am struck).
  - **Bipartite Negation *ma-...-nye* (pp. 77–80)**: Combines prefix **m- / ma- / me-** with enclitic **-nye** (*m'o-lim-an-nye* I do not hear, *ka-m-a-lim-an-nye* I have not heard).
  - **Derivative Verb Affixes (pp. 83–86)**: (1) **-oi** (motion from / prepositional: *o-wirt-oi-an* I fling from me), (2) **-soi / -sut** (present) & **-i / -ioʻ** (past) (Reciprocal: *o-pôr-soi-an → ko-pôr-i-an* I fight with), (3) **-chin / -jin** (present) & **-chi / -ji** (past) (Dative: *o-mwô-chin-an / o-len-jin-an* I tell to), (4) **-itun** (present) & **-itu** (past) (Inchoative/Quasi-Passive: *o-terus-itun-an* I become fat), (5) **-un / -in** (Motion hither: *o-let-un-an* I come behind), (6) **-it** (Causative/Transitive: *sop* recover → *o-sop-it-an* I cure, *wegh* fear → *o-wegh-it-an* I frighten), (7) **-isi** (Continuous/Intransitive: *o-l-an* I sell → *o-l-isi-an* I trade, *o-m-an* I eat → *o-m-isi-an* I take food).`,
    examples: [
      { pokot: 'o-lim-an (-ei), i-lim-enyi (-ei), lim-ei, ki-lim-echa (-ei), o-lim-ekwa (-ei), lim-ei • m'o-lim-an-nye', english: 'I hear, thou hearest, he hears, we hear, ye hear, they hear • I do not hear', explanation: 'Dual prefix+suffix person indexing and ma-...-nye negation (Beech 1911, pp. 76–77)' },
      { pokot: 'okoñgô, oghieñg, somok, añgwan, mūt, mut ngô okoñgô (akan-kapei), taman, tiptem, sosom, artam, konom, pokol', english: '1, 2, 3, 4, 5, 6 (5+1), 10, 20, 30, 40, 50, 100', explanation: 'Suk quinary numerals and Turkana loan-numerals (Beech 1911, pp. 66–67)' },
      { pokot: 'o-pôr-soi-an (rec.) • o-mwô-chin-an (dat.) • o-terus-itun-an (inch.) • o-sop-it-an (caus.) • o-m-isi-an (cont.)', english: 'I fight with • I tell to • I become fat • I cure • I take food', explanation: 'Complex verbal derivative suffixes in Beech (1911, pp. 83–86)' }
    ]
  }
];
