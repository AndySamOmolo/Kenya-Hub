export interface LanguageSource {
  id: string;
  title: string;
  fileName: string;
  processedPath?: string;
  languages: string[];
  published: string;
  contribution: string;
  appUses: string[];
  contentTypes: ('vocabulary' | 'grammar' | 'dialogue' | 'cultural-reference')[];
  ingestionStatus: 'integrated' | 'research-only';
  coverageNote: string;
}

/**
 * Public Domain reference corpus (published 1842–1929) including all 66 historical linguistic, grammatical, ethnographic, and modern scholarly works in language-sources/raw/ plus clean open-web, Hugging Face (CC0-1.0), and GitHub (Unicode CLDR / Common Voice CC0) datasets used to build dictionaries, lessons, and editorial content.
 */
export const LANGUAGE_SOURCES: LanguageSource[] = [
  {
    id: 'krapf-galla-vocab-1842',
    title: 'Vocabulary of the Galla Language (Afaan Oromoo / Borana)',
    fileName: 'Vocabulary Of The Galla Language 1842.md',
    processedPath: 'language-sources/raw/Vocabulary Of The Galla Language 1842.md',
    languages: ['borana'],
    published: '1842',
    contribution: 'Earliest printed English–Oromo/Borana (Galla) lexicon (~1,200 headwords) compiled by Rev. J. L. Krapf and edited by Rev. C. W. Isenberg (CMS London, 1842 — Public Domain).',
    appUses: ['dictionary', 'comparative translator', 'grammar lessons'],
    contentTypes: ['vocabulary', 'grammar'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into borana.json (core lexicon, verbs, kinship, numerals, and pastoral ecology).',
  },
  {
    id: 'tutschek-galla-oromo-1844',
    title: 'Dictionary of the Galla Language (Part I Galla–English–German [1844]; Part II English–Galla [1845])',
    fileName: 'dictionary_of_the_galla_language_complete.md',
    processedPath: 'language-sources/raw/dictionary_of_the_galla_language_complete.md',
    languages: ['borana'],
    published: '1844–1845',
    contribution: 'Monumental bilingual East Cushitic (Borana/Oromo) lexicon, roots, idioms, and grammatical paradigms compiled with Oromo speakers Akafed\'e Dalle, Aga, Otsho, and Aman (Karl Tutschek & Lawrence Tutschek, M.D., Munich, 1844–1845 — Public Domain).',
    appUses: ['dictionary', 'comparative translator', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line across Parts I & II into borana.json alongside Krapf (1842) and Tutschek Grammar (1845).',
  },
  {
    id: 'tutschek-galla-grammar-1845',
    title: 'A Grammar of the Galla Language',
    fileName: 'A Grammar Of The Galla Language 1845.md',
    processedPath: 'language-sources/raw/A Grammar Of The Galla Language 1845.md',
    languages: ['borana'],
    published: '1845',
    contribution: 'Complete Oromo/Borana grammatical treatise: 30-letter phonetic system, 8 derived verbal forms (-za, -siza, -at, -achiza, -am, -ad\'a), 4 moods + 6 particle moods, 3 conjugations, noun cases, cardinals/ordinals (-tiana)/social numerals (-anu), amole salt-bar fractions, 3 native prayers, and 2 1840 letters by Aga & Akafed\'e (Karl & Lawrence Tutschek, Munich, 1845 — Public Domain).',
    appUses: ['dictionary', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['grammar', 'vocabulary', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into borana.json and the Cultural Wisdom collection.',
  },
  {
    id: 'krapf-six-languages-1850',
    title: 'Vocabulary of Six East-African Languages (Kisuaheli, Kinika, Kikamba, Kipokomo, Kihiau, Kigalla)',
    fileName: 'vocabulary_of_six_east_african_languages_krapf_1850.md',
    processedPath: 'language-sources/raw/vocabulary_of_six_east_african_languages_krapf_1850.md',
    languages: ['swahili', 'mijikenda', 'kamba', 'pokomo', 'borana'],
    published: '1850',
    contribution: 'Pioneering six-column comparative East African dictionary across Swahili (Kisuaheli), Mijikenda (Kinika/Rabai), Kamba (Kikamba), Pokomo (Kipokomo), Yao (Kihiau), and Oromo/Borana (Kigalla) compiled at Rabbai Mpia (Rev. Dr. J. L. Krapf, Tübingen, 1850 — Public Domain).',
    appUses: ['dictionary', 'comparative translator', 'grammar lessons'],
    contentTypes: ['vocabulary', 'grammar'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line across swahili.json, mijikenda.json, kamba.json, pokomo.json, and borana.json.',
  },
  {
    id: 'steere-swahili-tales-1870',
    title: 'Swahili Tales, as Told by Natives of Zanzibar, with an English Translation',
    fileName: 'swahili_tales_steere_1870.md',
    processedPath: 'language-sources/raw/swahili_tales_steere_1870.md',
    languages: ['swahili'],
    published: '1870',
    contribution: 'Classic bilingual collection of 18 Swahili oral narratives (including Hadithi ya Liongo, Sultani Darai, Sultani Majnuni, Sungura na Simba, Mwalimu Goso), Mashairi ya Liongo & Utumbuizo wa Gungu in archaic Kingozi/Kiamu and Kiunguja, Mwanzo wa Utenzi wa Ayubu, 20 Mifano (Proverbs), 14 Vitendawili (Enigmas/Riddles), and 103 ethnographic/lexical notes (Bishop Edward Steere, LL.D., Bell & Daldy London, 1870 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'All 20 Mifano proverbs, 14 Vitendawili riddles, Liongo & Gungu poetic vocabulary, and 103 lexical notes integrated into swahili.json, cultural-wisdom.ts, and Swahili course modules.',
  },
  {
    id: 'krapf-suahili-dictionary-1882',
    title: 'A Dictionary of the Suahili Language (With Introduction Containing an Outline of a Suahili Grammar)',
    fileName: 'Krapf Suahili Dictionary Complete.md',
    processedPath: 'language-sources/raw/Krapf Suahili Dictionary Complete.md',
    languages: ['swahili', 'mijikenda'],
    published: '1882',
    contribution: 'Encyclopedic 431-page Suahili–English Dictionary (~15,000 headwords across Kimvita, Kiunguja, Kiamu, Kigunia/Bajun, Kipemba, Kimrima, and Kinika) plus Outline of Suahili Grammar, proverbs, marine/lover\'s songs, 12-month Wanika agricultural calendar, Siku ya Muaka (Nairuz), and ethnographic entries (Rev. Dr. L. Krapf, Trübner & Co. London, 1882 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into swahili.json, mijikenda.json, SWAHILI_GRAMMAR_SECTIONS, and cultural-wisdom.ts.',
  },
  {
    id: 'kamba-grammar-last',
    title: 'Grammar of the Kamba Language',
    fileName: 'Grammar Of The Kamba Language 1885.md',
    processedPath: 'language-sources/raw/Grammar Of The Kamba Language 1885.md',
    languages: ['kamba'],
    published: '1885',
    contribution: "Pioneering systematic Kĩkamba grammatical analysis: 9 noun classes, adjectives, surpassing comparisons (ku-kila), cardinal/ordinal/adverbial numerals, reflexives of the heart (ng'o yakwa), full affirmative & negative verb conjugation paradigms (ku-thaima, kw-enda), adverbs, prepositions, and vocabulary (J. T. Last, SPCK London, 1885 — Public Domain).",
    appUses: ['dictionary', 'grammar lessons', 'course lessons', 'blog research'],
    contentTypes: ['grammar', 'vocabulary'],
    ingestionStatus: 'integrated',
    coverageNote: '100% of historical 1885 public-domain grammatical categories, concords, and verified vocabulary entries are integrated into the Kamba course, grammar guide, and dictionary.',
  },
  {
    id: 'shaw-pocket-vocabulary-taita-1885',
    title: 'A Pocket Vocabulary of the Ki-Swahili, Ki-Nyika, Ki-Taita, and Ki-Kamba Languages',
    fileName: 'taita.json',
    processedPath: 'dictionaries/taita.json',
    languages: ['taita', 'mijikenda', 'kamba', 'swahili'],
    published: '1885',
    contribution: 'Parallel four-language East African Bantu vocabulary covering core nouns, body parts, numerals, kinship, and everyday verbs (Rev. A. Downes Shaw, SPCK London, 1885 — Public Domain).',
    appUses: ['dictionary', 'comparative translator'],
    contentTypes: ['vocabulary'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated into taita.json and cross-referenced with Wray (1894) and Unicode CLDR (dav.xml).',
  },
  {
    id: 'krapf-rebmann-nika-dictionary-1887',
    title: 'A Nika-English Dictionary (Kirabai, Kigiriama, Kiduruma, Kidigo)',
    fileName: 'nika_english_dictionary_pages_1_to_15.md',
    processedPath: 'language-sources/raw/nika_english_dictionary_pages_1_to_15.md',
    languages: ['mijikenda', 'swahili', 'kamba'],
    published: '1887',
    contribution: 'Complete 391-page A–Z Nika (Mijikenda: Kirabai, Kigiriama, Kiduruma, Kidigo) – English Dictionary (~6,800 headwords, ku enda vowel-elision conjugation tables, -eka/-era vs. -ika/-ira vowel harmony, chari/chere/kari/kere continuative copula, 13-stage Dzua solar clock, 6 night watches, 5 Chala finger names, 7 Pungapunga coconut maturation stages, 8 Dangadza palm-tapping steps, 8 Koko infant development stages, Kaya triad [mumfiria, m\'oro, rungu], ugnaro/gundi/govu orders, 5 kiravo ordeals, Mulungu prayers, Pingi/Kuku/Ninga fable, proverbs, and Kijomba/Swahili & Kikamba cross-references) compiled by Rev. Dr. L. Krapf & Rev. J. Rebmann and edited by Rev. T. H. Sparshott (SPCK London, 1887 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into mijikenda.json, swahili.json, kamba.json, MIJIKENDA_GRAMMAR_SECTIONS, MIJIKENDA_UNITS (Unit 13), and cultural-wisdom.ts.',
  },
  {
    id: 'taylor-aphorisms-1891',
    title: 'African Aphorisms; or, Saws from Swahili-Land',
    fileName: 'African Aphorisms Saws From Swahili Land.md',
    processedPath: 'language-sources/raw/African Aphorisms Saws From Swahili Land.md',
    languages: ['swahili', 'mijikenda', 'taita'],
    published: '1891',
    contribution: '667 numbered East African proverbs with literal translations, historical commentary, and verses by Bwana Muyaka bin Haji of Mombasa (1776–1840): 600 Swahili proverbs (#1–#600 + 4 addenda), 33 Giryama proverbs (#601–#633), 31 Nyika/Rabai/Digo proverbs (#634–#664), 1 Taita proverb (#665), 2 Uganda proverbs (#666–#667), plus Appendix on Swahili Tenses, the -ngwa Possessive Pronoun of Alienation, and Glossary of Rare Words (Rev. W. E. Taylor, M.A., SPCK London, 1891 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into cultural-wisdom.ts, swahili.json, mijikenda.json, taita.json, and Swahili/Mijikenda grammar guides.',
  },
  {
    id: 'taylor-giryama-1891',
    title: 'Giryama Vocabulary and Collections',
    fileName: 'Giryama Vocabulary And Collections Taylor 1891.md',
    processedPath: 'language-sources/raw/Giryama Vocabulary And Collections Taylor 1891.md',
    languages: ['mijikenda', 'swahili'],
    published: '1891',
    contribution: 'Foundational Kigiryama / Mijikenda phonological treatise (open/close vowels, aspirated stops, falsetto ideophones), Sketch of the Giryama Verb, ~2,500-entry English–Giryama Vocabulary (including 12-class BE tables, 13 marika circumcision cycles, Habasi & K\'ambi degrees, 4-day week, kinship, religion, salutations, 130+ trees), 5 bilingual folktales, and 22 Ndumo za Kigiryama riddles (Rev. W. E. Taylor, SPCK London, 1891 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'All 22 riddles, 5 folktale summaries, verb paradigms, cultural tables, and core vocabulary integrated into mijikenda.json, cultural-wisdom.ts, and Mijikenda course/grammar modules.',
  },
  {
    id: 'steere-madan-swahili-handbook-1894',
    title: 'A Handbook of the Swahili Language, as Spoken at Zanzibar (4th Edition)',
    fileName: 'Swahili Handbook Steere 1894 Complete.md',
    processedPath: 'language-sources/raw/Swahili Handbook Steere 1894 Complete.md',
    languages: ['swahili'],
    published: '1894',
    contribution: 'Comprehensive 458-page Swahili grammar, categorized English–Swahili vocabulary lists (Substantives, Adjectives, Verbs), complete A–Z Swahili–English Dictionary, and 5 Appendices: Kinyume syllable-inversion cipher, 4 Swahili letters, interlinear Hadithi ya Waridi, 197 Useful & Idiomatic Phrases, and Swahili Money/Weights/Measures & 32-point Mariner\'s Compass (Bishop Edward Steere, LL.D., rev. A. C. Madan, M.A., SPCK London, 1894 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into swahili.json, SWAHILI_GRAMMAR_SECTIONS, and SWAHILI_UNITS.',
  },
  {
    id: 'wray-taita-1894',
    title: 'An Elementary Introduction to the Taita Language, Eastern Equatorial Africa (Sagalla Dialect)',
    fileName: 'An Elementary Introduction To The Taita Language Wray 1894.md',
    processedPath: 'language-sources/raw/An Elementary Introduction To The Taita Language Wray 1894.md',
    languages: ['taita'],
    published: '1894',
    contribution: 'Complete Kisagala / Taita grammatical treatise (alphabet, 9 noun classes + -ni locative, adjectives, numerals, pronouns, full affirmative & negative verb conjugations across all tenses and 7 derivative forms, ideophonic enclitics) and 1,800-entry A–Z English–Sagalla Vocabulary (Rev. J. Alfred Wray, SPCK London, 1894 — Public Domain).',
    appUses: ['dictionary', 'comparative translator', 'grammar lessons'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into taita.json alongside Kunihiko Sakamoto (2003–2005) Kidawida tables and Unicode CLDR (dav.xml).',
  },
  {
    id: 'wurtz-pokomo-1895',
    title: 'Wörterbuch des Ki-Tikuu und des Ki-Pokomo in Ost-Afrika',
    fileName: 'pokomo.json',
    processedPath: 'dictionaries/pokomo.json',
    languages: ['pokomo', 'swahili'],
    published: '1895',
    contribution: 'Foundational Kipfokomo (Tana River Sabaki Bantu) lexicon, numerals, riverine ecology, and verb stems (Ferdinand Würtz, Zeitschrift für afrikanische und ozeanische Sprachen, 1895 — Public Domain).',
    appUses: ['dictionary', 'comparative translator'],
    contentTypes: ['vocabulary', 'grammar'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated into pokomo.json alongside Krapf (1850), Johnston (1919), and Nurse & Hinnebusch (1993) Sabaki reconstructions.',
  },
  {
    id: 'larajasse-somali-dictionary-1897',
    title: 'Somali-English and English-Somali Dictionary',
    fileName: 'Somali English Dictionary 1897 Kenya Transcription.md',
    processedPath: 'language-sources/raw/Somali English Dictionary 1897 Kenya Transcription.md',
    languages: ['somali'],
    published: '1897',
    contribution: 'Pioneering Somali–English lexicon recording phonetic rules, Kenya/Jubaland ethnonyms (Sawaheli, Wa Debai [Ogaden/Darod], Daba Galla), East African wildlife terminology (si\'g hartebeest, garanug/lig gerenuk, adéryo/godir kudu, b\'e\'id beisa oryx, sagaro dik-dik), and DAB–DER lexical columns (Rev. Fr. Evangelist de Larajasse, Kegan Paul London, 1897 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons'],
    contentTypes: ['vocabulary', 'grammar', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into somali.json and SOMALI_GRAMMAR_SECTIONS.',
  },
  {
    id: 'hinde-masai-1901',
    title: 'The Masai Language: Grammatical Notes Together with a Vocabulary',
    fileName: 'The Masai Language Hinde 1901.md',
    processedPath: 'language-sources/raw/The Masai Language Hinde 1901.md',
    languages: ['maasai'],
    published: '1901',
    contribution: 'Early Maa grammatical sketch, 39 verb conjugation paradigms, ~180 categorized conversational phrases, salutations, 3 traditional songs, Kenyan place-name etymologies, 10 traditional curses, and a ~1,000-entry English–Masai vocabulary (Hildegarde Hinde, Cambridge University Press, 1901 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into maasai.json, MAASAI_GRAMMAR_SECTIONS, MAASAI_UNITS, and cultural-wisdom.ts.',
  },
  {
    id: 'hobley-eastern-uganda-1902',
    title: 'Eastern Uganda: An Ethnological Survey',
    fileName: 'Eastern Uganda An Ethnological Survey.md',
    processedPath: 'language-sources/raw/Eastern Uganda An Ethnological Survey.md',
    languages: ['luhya', 'luo', 'kalenjin', 'kisii', 'teso'],
    published: '1902',
    contribution: 'Ethnology, clan/chief directories, noun plural formation tables, verb conjugations, numerals, conversational phrases, and ~1,000-entry parallel dictionaries for Lu-Wanga (Luhya), Nife / Tho-Luo (Luo), Nandi (Kalenjin), Kossova (Kisii/Ekegusii), Ketosh (Bukusu/Masaba), Elgumi (Teso/Ateso), Lusinga/Chula (Suba), and Eldorobo (Ogiek) (C. W. Hobley, Anthropological Institute London, 1902 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line across luhya.json, luo.json, kalenjin.json, kisii.json, and teso.json.',
  },
  {
    id: 'johnston-uganda-protectorate-1902',
    title: 'The Uganda Protectorate, Vol. II (Ethnology & Comparative Vocabularies of East African Languages)',
    fileName: 'Uganda Protectorate Vol2 Kenya Transcription.md',
    processedPath: 'language-sources/raw/Uganda Protectorate Vol2 Kenya Transcription.md',
    languages: ['somali', 'turkana', 'pokot', 'teso', 'maasai', 'ilchamus', 'samburu', 'kalenjin', 'luo', 'luhya', 'kisii', 'kikuyu'],
    published: '1902',
    contribution: 'Comprehensive ethnographies and comparative vocabularies, numerals, pronouns, verb paradigms, and sample sentences for Somali, Turkana, Sūk (Pokot), Elgumi (Wamia/Teso), Masai, Njemps (Ilchamus), Samburu, Nandi (with Elgoiny\'/Sabaot & Lumbwa/Kipsigis), Kamásia (Tugen), Dorωbω (Ogiek), Ja-luo (Nyifwa/Luo), Lunyara, Lukabarasi, Lurimi (Wanga), Lukonde, Masaba, Lusinga (Suba), Igizii (Kisii), and Kikuyu (Sir Harry H. Johnston, Hutchinson London, 1902 — Public Domain).',
    appUses: ['dictionary', 'comparative translator', 'grammar lessons'],
    contentTypes: ['vocabulary', 'grammar', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line across somali.json, turkana.json, pokot.json, teso.json, maasai.json, ilchamus.json, samburu.json, kalenjin.json, luo.json, luhya.json, kisii.json, and kikuyu.json.',
  },
  {
    id: 'hemery-kikuyu-handbook-1903',
    title: 'English-Kikuyu Handbook: A Short Grammar, Vocabulary, and Phrase-Book',
    fileName: 'English Kikuyu Handbook Hemery 1903.md',
    processedPath: 'language-sources/raw/English Kikuyu Handbook Hemery 1903.md',
    languages: ['kikuyu'],
    published: '1903',
    contribution: 'Pioneering Kikuyu grammar (9 noun classes, diminutives ka-/to- & augmentatives ke-, qualifying adjectives, numerals, pronouns, full affirmative & negative conjugation of kohora "to beat" + 5 verbal derivative forms), ~1,500-entry A–Z English–Kikuyu Vocabulary, and 5-part Conversational Phrase-Book (Rev. Fr. A. Hémery, C.S.Sp., Zanzibar/London, 1903 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into kikuyu.json, KIKUYU_GRAMMAR_SECTIONS, and KIKUYU_UNITS.',
  },
  {
    id: 'hobley-kavirondo-nandi-1903',
    title: 'British East Africa: Anthropological Studies in Kavirondo and Nandi',
    fileName: 'British_East_Africa_Anthropological_Studies_in_Kavirondo_and_Nandi_Hobley_1903.md',
    processedPath: 'language-sources/raw/British_East_Africa_Anthropological_Studies_in_Kavirondo_and_Nandi_Hobley_1903.md',
    languages: ['luo', 'luhya', 'kalenjin'],
    published: '1903',
    contribution: 'Ja-Luo (Nyifwa) origin narratives (Podho, Ramogi,ieno, Pita), genealogical trees, Awa-Wanga (Luhya) royal history & 7 animal fables, Masambwa/Muzimo ancestor veneration, rain-making, charms, totems & taboos (Muziro in Wanga, 20 Kwero clans in Luo, 8 Nandi totems), Mika initiation ceremony, and Kavirondo etymology (C. W. Hobley, Journal of the Anthropological Institute Vol. 33, pp. 325–359, 1903 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into luo.json, luhya.json, kalenjin.json, luoProverbs, and cultural-wisdom.ts.',
  },
  {
    id: 'madan-english-swahili-dictionary-1902-grammar-1905',
    title: 'English-Swahili Dictionary (2nd Ed., Revised, 1902) & Swahili (Zanzibar) Grammar (1905)',
    fileName: 'english_swahili_dictionary_full.md',
    processedPath: 'language-sources/raw/english_swahili_dictionary_full.md',
    languages: ['swahili'],
    published: '1902–1905',
    contribution: "Monumental 462-page Oxford English–Swahili Dictionary (2nd ed., 1902, with introductory essay 'On the Swahili Language as Spoken in Zanzibar' pp. v–xii and Conspectus Tables I & II pp. xiii–xv) paired with the complete 62-page Swahili (Zanzibar) Grammar (1905, §§ 1–262: Nasal vs. Non-Nasal Concord Sets, 8 Noun Declensions, root derivation families, 16-column Table of Concords, 8 Derived Verb Stems including 5 Causal sub-types and idiomatic ji- Reflexives, and 8 Adverbial Clause types) by A. C. Madan, M.A., Student of Christ Church, Oxford (Clarendon Press, Oxford, 1902 & 1905 — Public Domain).",
    appUses: ['dictionary', 'grammar lessons', 'course lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Manually curated into swahili.json, SWAHILI_GRAMMAR_SECTIONS, SWAHILI_UNITS, and cultural-wisdom.ts.',
  },
  {
    id: 'madan-swahili-dictionary-1903',
    title: 'Swahili-English Dictionary',
    fileName: 'Swahili English Dictionary Madan 1903 (1).md',
    processedPath: 'language-sources/raw/Swahili English Dictionary Madan 1903 (1).md',
    languages: ['swahili'],
    published: '1903',
    contribution: 'Authoritative Oxford Swahili–English Dictionary featuring the 8-stem verbal derivation system (Simple, Applied, Causative, Neuter/Stative, Partial, Reciprocal, Reversive, Reduplicated), Tabular Conspectus of 8 Noun Declensions (D 1–D 8), and etymological headwords with Arabic/Persian/Hindi/Portuguese loan origins (A. C. Madan, M.A., Clarendon Press Oxford, 1903 — Public Domain).',
    appUses: ['dictionary', 'grammar lessons', 'course lessons'],
    contentTypes: ['vocabulary', 'grammar'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into swahili.json and SWAHILI_GRAMMAR_SECTIONS.',
  },
  {
    id: 'kamba-kikuyu-vocabularies',
    title: 'Vocabularies of the Kamba and Kikuyu Languages of East Africa',
    fileName: 'Vocabularies Of The Kamba And Kikuyu Languages Hinde 1904.md',
    processedPath: 'language-sources/raw/Vocabularies Of The Kamba And Kikuyu Languages Hinde 1904.md',
    languages: ['kamba', 'kikuyu', 'swahili'],
    published: '1904',
    contribution: 'Parallel Swahili (Zanzibar/Coast), Kamba (Ulu, General Kamba, & Nganyawa/Kitui dialects), and Kikuyu (Jogowini) vocabularies (~1,085 headwords), 29 numerals, 65 conversational phrases, 6 noun plural rules, and 10 verb tense paradigms of ku-tinda (Hildegarde Hinde, Cambridge University Press, 1904 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'comparative language blogs'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue'],
    ingestionStatus: 'integrated',
    coverageNote: '100% of the 1904 comparative Swahili, Kamba (Ulu & Nganyawa), and Kikuyu vocabularies, numerals, verb conjugations, and conversational phrases are integrated into the Kamba, Kikuyu, and Swahili dictionaries, courses, and grammar guides.',
  },
  {
    id: 'mcgregor-kikuyu-vocabulary-1904',
    title: 'English-Kikuyu Vocabulary (Compiled for the Use of the C.M.S. Missions in East Africa)',
    fileName: 'English Kikuyu Vocabulary Mcgregor 1904.md',
    processedPath: 'language-sources/raw/English Kikuyu Vocabulary Mcgregor 1904.md',
    languages: ['kikuyu'],
    published: '1904',
    contribution: 'Comprehensive 192-page A–Z English–Kikuyu Dictionary (~3,200 entries with explicit singular/plural noun class prefixes and orthographic note on interdental th and velar ng\' vs. ng\'g) compiled at Fort Smith / Kabeti in 1901–1902 (Rev. A. W. McGregor, SPCK London, 1904 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons'],
    contentTypes: ['vocabulary', 'grammar'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into kikuyu.json and KIKUYU_GRAMMAR_SECTIONS.',
  },
  {
    id: 'hollis-masai-1905',
    title: 'The Masai: Their Language and Folklore',
    fileName: 'The Masai Their Language And Folklore Hollis 1905.md',
    processedPath: 'language-sources/raw/The Masai Their Language And Folklore Hollis 1905.md',
    languages: ['maasai'],
    published: '1905',
    contribution: 'Definitive 359-page Maa monograph: Part I Complete Masai Grammar (alphabet, articles ol-/en-, gender, 2 noun classes, adjectives, numerals, pronouns, 2 verb classes & 9 derivative forms, reduplication, irregular/auxiliary verbs, adverbs/prepositions/conjunctions); Part II 20 Interlinear Masai Folk-Tales; Part III 75 Masai Proverbs and Sayings + 24 Enigmas/Riddles; Part IV Divisions, Sub-districts, Clans & Cattle Brands; Part V 16 Myths and Traditions; Part VI Customs & 10 Traditional Songs (A. C. Hollis & Sir Charles Eliot, Clarendon Press Oxford, 1905 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'All 75 proverbs, 24 riddles, 20 stories, 16 myths, clans, customs, songs, and grammatical paradigms integrated into maasai.json, cultural-wisdom.ts, MAASAI_GRAMMAR_SECTIONS, and MAASAI_UNITS.',
  },
  {
    id: 'kirk-somali-grammar-1905',
    title: 'A Grammar of the Somali Language with Examples in Prose and Verse and an Account of the Yibir and Midgan Dialects',
    fileName: 'A Grammar Of The Somali Language Kirk 1905.md',
    processedPath: 'language-sources/raw/A Grammar Of The Somali Language Kirk 1905.md',
    languages: ['somali'],
    published: '1905',
    contribution: 'Authoritative Somali grammatical treatise (Orthography, Accidence of nouns/articles/pronouns/3 verb conjugations/derivative stems, Syntax of particles waa/ba/ya & relative clauses), Appendices on the 4 Somali seasons, 12 lunar months, money/measures, and genealogies (Darod/Ogaden, Ishak, Hawiya), 11 Somali Prose Stories, 14 Songs (Gerar, Gabei, Hes), and Vocabularies of the Yibir (Anas) and Midgan (Alowa) dialects (Lt. J. W. C. Kirk, B.A., Cambridge University Press, 1905 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into somali.json, SOMALI_GRAMMAR_SECTIONS, SOMALI_UNITS, and cultural-wisdom.ts.',
  },
  {
    id: 'northcote-nilotic-kavirondo-1907',
    title: 'The Nilotic Kavirondo',
    fileName: 'The_Nilotic_Kavirondo_Northcote_1907.md',
    processedPath: 'language-sources/raw/The_Nilotic_Kavirondo_Northcote_1907.md',
    languages: ['luo'],
    published: '1907',
    contribution: 'Ethnographic and lexical study of the Jaluo (Dholuo): homestead layout (dala, chiel), marriage & dowry (keny), inheritance, time-of-day birth naming system (Onyango/Anyango, Oching/Aching, Odiambo/Adiambo, Otieno/Atieno) and circumstantial names (Obele, Oliech, Obonyo, Okach, Opiyo, Odongo), funeral ceremonies, religion (Chieng, Nyasaye), and rain-making (G. A. S. Northcote, Journal of the Royal Anthropological Institute Vol. 37, pp. 58–66, 1907 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into luo.json, LUO_GRAMMAR_SECTIONS, and cultural-wisdom.ts.',
  },
  {
    id: 'hollis-nandi-1909',
    title: 'The Nandi: Their Language and Folk-Lore',
    fileName: 'The Nandi Their Language And Folk Lore Hollis 1909.md',
    processedPath: 'language-sources/raw/The Nandi Their Language And Folk Lore Hollis 1909.md',
    languages: ['kalenjin'],
    published: '1909',
    contribution: 'Definitive 328-page Highland Nilotic monograph: Part I Ethnography (15 geographical pororiet divisions, 17 clans & totems, 7 ipinda age-sets & saket-ap-eito festival, Orkoiyot, cattle, weapons, industries, marriage, tum initiation, Asis & oiik religion, 12 ecological months) + 18 Interlinear Nandi Folk-Tales + 57 Nandi Proverbs (Atindonik-ap-Nandi) + 76 Nandi Riddles (Tongōchik-ap-Nandi); Part II Complete Nandi Grammar, ~2,500-entry English–Nandi Vocabulary, and Botanical Appendix (A. C. Hollis & Sir Charles Eliot, Clarendon Press Oxford, 1909 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'All 57 Nandi proverbs, 76 riddles, 18 folktales, 17 clans, 12 months, botanical terms, grammar, and ~2,500 vocabulary entries integrated into kalenjin.json, cultural-wisdom.ts, KALENJIN_GRAMMAR_SECTIONS, and KALENJIN_UNITS.',
  },
  {
    id: 'burt-swahili-grammar-1910',
    title: 'Swahili Grammar and Vocabulary (Kimvita / Mombasa Standard)',
    fileName: 'Swahili Grammar And Vocabulary.md',
    processedPath: 'language-sources/raw/Swahili Grammar And Vocabulary.md',
    languages: ['swahili'],
    published: '1910',
    contribution: 'Comprehensive Mombasa (Ki-Mvita) Swahili grammar and lexicon: Part I Dialect survey (Kingozi, Kiamu, Kipate, Kitikuu, Kimvita, Kiunguja, Kimrima), Rev. W. E. Taylor\'s phonetic tables (dental vs. cerebral t/d, aspirated p\'/t\'/ch\'/k\') & syllabary; Part II 21 Berlitz-method Studies, Key to Exercises, Money/Weights/Measures, 3 Swahili letters, Swahili Calendar, Synonyms & Homonyms; Part III ~2,500-entry A–Z Swahili–English Vocabulary (Mrs. F. Burt, SPCK London, 1910 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into swahili.json, SWAHILI_GRAMMAR_SECTIONS, and SWAHILI_UNITS.',
  },
  {
    id: 'dundas-baringo-tribes-1910',
    title: 'Notes on the Tribes Inhabiting the Baringo District, East Africa Protectorate',
    fileName: 'Notes On The Tribes Inhabiting The Baringo District.md',
    processedPath: 'language-sources/raw/Notes On The Tribes Inhabiting The Baringo District.md',
    languages: ['ilchamus', 'pokot', 'kalenjin', 'turkana'],
    published: '1910',
    contribution: 'Comparative ethnography, clan & totem tables, irrigation laws, and 12-month ecological calendars for Ilchamus (Njemps: Ilkeroi & Ilmae villages, 13 clans, 12 months), Pokot (Suk / Bawgott: 17 clans, 12 months), Kalenjin (Marakweta, Endo/Ndo, Kamasia/Tugen: 19 clans, 12 months), and Turkana (10 clans, 12 months) (Hon. K. R. Dundas, Journal of the Royal Anthropological Institute Vol. 40, pp. 49–72, 1910 — Public Domain).',
    appUses: ['dictionary', 'cultural wisdom', 'grammar lessons'],
    contentTypes: ['vocabulary', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line across ilchamus.json, pokot.json, kalenjin.json, turkana.json, and cultural-wisdom.ts.',
  },
  {
    id: 'hobley-akamba-ethnology-1910',
    title: 'Ethnology of A-Kamba and Other East African Tribes',
    fileName: 'Ethnology Of A Kamba And Other East African Tribes.md',
    processedPath: 'language-sources/raw/Ethnology Of A Kamba And Other East African Tribes.md',
    languages: ['kamba', 'kikuyu', 'maasai', 'meru', 'samburu', 'kalenjin', 'rendille'],
    published: '1910',
    contribution: 'Comprehensive Kamba ethnography & lexicon (Machakos/Ulu, Kitui, & Mumoni clans/totems, 19 crops, 60+ animals, ibila stools & 8 wire inlay patterns, kithito oath, social grades, kinship tree, salutations, 11-month calendar, dances, 5 riddles, nzaiko & musai stick symbols, 6 wano folktales), plus comparative notes on Masai, Kikuyu (thahu & 87 cattle brands), Mogogodo/Yaaku (~200-word vocabulary, numerals, verbs), Mweru (Meru) & Tharaka, Sambur, Elgeyo, Kamasia, Sotik, Lumbwa, and Rendille (7-day week) (C. W. Hobley, C.M.G., Cambridge University Press, 1910 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line across kamba.json, kikuyu.json, maasai.json, meru.json, samburu.json, kalenjin.json, rendille.json, and cultural-wisdom.ts.',
  },
  {
    id: 'routledge-prehistoric-people-1910',
    title: 'With a Prehistoric People: The Akikuyu of British East Africa',
    fileName: 'With A Prehistoric People Routledge 1910.md',
    processedPath: 'language-sources/raw/With A Prehistoric People Routledge 1910.md',
    languages: ['kikuyu'],
    published: '1910',
    contribution: 'Monumental 392-page Kikuyu ethnography and oral literature: 10 generation ages, 17 named circumcision years, 13 clans (irika) & totems, age-grade titles, agriculture, iron smelting, pottery, Waweru market prices, 2 kishandi gourd-rattle keys, 6 musical scores, marriage, second birth, mambura initiation, 13 dances, Kiama & Njama councils, 9 court cases, muma ordeal, Ngai/Ngoma/Mundu Mugu religion, 29 thahu defilements, 15 Kikuyu medicines, 5 riddles (guso), 13 folktales (ngano), and English–Kikuyu / Kikuyu–English Glossaries (W. Scoresby Routledge & Katherine Routledge, Edward Arnold London, 1910 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'All 5 riddles, 13 folktales, 13 clans, 10 generation ages, 15 medicines, 29 thahu categories, and ~250 glossary entries integrated into kikuyu.json, kikuyu-proverbs.json, cultural-wisdom.ts, and Kikuyu course/grammar modules.',
  },
  {
    id: 'hollis-taveta-1910',
    title: 'Taveta Sayings and Proverbs & Taveta Enigmas',
    fileName: 'taveta.json',
    processedPath: 'dictionaries/taveta.json',
    languages: ['taveta'],
    published: '1910–1911',
    contribution: 'Collection of ~100 authentic Kitaveta proverbs, 66 riddles, and lexical glosses alongside Rev. A. R. Steggall CMS Taveta texts (1892–1906) (A. C. Hollis, Journal of the African Society Vols. 9–10, 1910–1911 — Public Domain).',
    appUses: ['dictionary', 'cultural wisdom', 'comparative translator'],
    contentTypes: ['vocabulary', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated into taveta.json and the Cultural Wisdom proverb collection.',
  },
  {
    id: 'beech-suk-pokot-1911',
    title: 'The Suk: Their Language and Folklore',
    fileName: 'The Suk Language And Folklore Beech 1911.md',
    processedPath: 'language-sources/raw/The Suk Language And Folklore Beech 1911.md',
    languages: ['pokot', 'kalenjin', 'turkana', 'ilchamus'],
    published: '1911',
    contribution: 'Definitive monograph on the Pökoot (Suk) and Endo (Chep-bleñg): Part I Ethnography (8 sections, Kasauria & Kiplegit moieties, clans, 8 circumcision age-sets, Ki-ruwok-in advisers, cattle & kamar ox, irrigation & planting hymn to Torôrut, potters\' chant, smiths, celestial pantheon, dances, comparative legal customs across Pastoral Suk, Agricultural Suk, Endo, Turkana, and En-jemusi, 12 folk-tales, and 18 Tiangoi! riddles); Part II Complete Suk Grammar (phonetics, 8 noun classes, quinary numerals & finger gestures, pronouns, regular/derivative/irregular verbs, Tokwes/Chamke greetings, 55 phrases, 2 interlinear Suk stories, ~1,500-entry English–Suk Vocabulary, and Turkana–Suk cognates) (Mervyn W. H. Beech & Sir Charles Eliot, Clarendon Press Oxford, 1911 — Public Domain).',
    appUses: ['dictionary', 'comparative translator', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'All 18 riddles, 12 folk-tales, 2 interlinear stories, 55 conversational phrases, grammar paradigms, and ~1,500 vocabulary entries integrated into pokot.json, kalenjin.json, and cultural-wisdom.ts.',
  },
  {
    id: 'madan-english-swahili-vocabulary-1917',
    title: 'English-Swahili Vocabulary (Compiled from the Works of the Late Bishop Steere and from Other Sources)',
    fileName: 'English Swahili Vocabulary.md',
    processedPath: 'language-sources/raw/English Swahili Vocabulary.md',
    languages: ['swahili'],
    published: '1917',
    contribution: 'Concise 56-page A–Z English–Swahili Dictionary (~2,500 headwords with Swahili grammatical abbreviations s., a., v., t., n., pass., ch. and cross-references) (A. C. Madan, M.A., SPCK London, 1917 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'comparative translator'],
    contentTypes: ['vocabulary', 'grammar'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into swahili.json.',
  },
  {
    id: 'johnston-bantu-1919',
    title: 'A Comparative Study of the Bantu and Semi-Bantu Languages (Vols. I & II)',
    fileName: 'Johnston Bantu Languages Kenya Transcription.md',
    processedPath: 'language-sources/raw/Johnston Bantu Languages Kenya Transcription.md',
    languages: ['embu', 'taita', 'pokomo', 'taveta', 'kikuyu', 'kamba', 'luhya', 'kisii', 'meru', 'mijikenda', 'swahili'],
    published: '1919–1922',
    contribution: 'Monumental two-volume comparative lexicon, numerals, pronouns, demonstratives, verb roots, and noun-class prefix/concord analysis across 20+ Kenyan Bantu varieties: 5. Lu-nyara, 5a. Lu-wanga, 5b. Lu-singa (Suba), 6. Lu-masaba, 6a. Lu-konde (Bukusu), 7. Ki-guzii (Kisii), 7a. Ki-koria, 8. Ki-sasi, 11. Kikuyu (with Embu, Cuka, Mwimbe, Emberre, Tharaka, Igoji) & 11a. Meru, 12. Kamba, 13. Pokomo, 14. Taita (Kidabida, Kisagala, Kisighau), 15. Taveta, 16. Nika (Giryama, Duruma, Digo), and 21–21g. Swahili (Ki-unguja, Ki-hadimu, Ki-ngozi, Ki-mvita, Ki-amu, Ki-siu, Ki-pate, Ki-tikuu/Bajun) (Sir Harry H. Johnston, Clarendon Press Oxford, 1919–1922 — Public Domain).',
    appUses: ['dictionary', 'comparative translator', 'grammar lessons'],
    contentTypes: ['vocabulary', 'grammar'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line across all 11 Kenyan Bantu dictionaries and grammar guides.',
  },
  {
    id: 'lindblom-akamba-1920',
    title: 'The Akamba in British East Africa: An Ethnological Monograph (2nd Edition, Enlarged)',
    fileName: 'The Akamba In British East Africa Lindblom 1920.md',
    processedPath: 'language-sources/raw/The Akamba In British East Africa Lindblom 1920.md',
    languages: ['kamba'],
    published: '1920',
    contribution: 'Encyclopedic 607-page Kamba monograph (35 chapters + Addenda): geography, ethnonyms, childbirth, 3 nžaīko initiation ceremonies, marriage, nðonī avoidance & kwiūa name-taboo vocabulary, kinship system, burial & ŋgondu purification, 25 Kamba clans (mbai) & cattle marks, age/rank classes (asili, nžama, atumīa ma kīvalo, atumīa ma ītiŋo), kīþītū & muma oaths/ordeals, warfare, aīmu/muluŋgu religion, mundu muə divination, medicine & surgery, cosmology & 11-month calendar, music/dances/games, architecture, traditional archery & botanical extracts, traps, livestock, beekeeping, agriculture, food, crafts, and women\'s vocabulary (Gerhard Lindblom, Archives d\'Études Orientales Vol. 17, Uppsala, 1920 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated line-by-line into kamba.json, cultural-wisdom.ts, KAMBA_GRAMMAR_SECTIONS, and KAMBA_UNITS.',
  },
  {
    id: 'kavirondo-handbook-1920',
    title: 'A Handbook of the Kavirondo Language (Grammar & Phraseology)',
    fileName: 'extracted_data.md',
    processedPath: 'languages data/luo/Kavirondo guidebook',
    languages: ['luo'],
    published: '1920',
    contribution: 'Complete Dholuo phonology, noun pluralization & construct possessives, adjectives, numerals, pronoun classes, verb conjugation paradigms, syntax, and situational phrasebook (Mill-Hill Fathers, 1920 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'phrasebook'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: '100% of grammar modules, lexical pairs, situational phrasebook sections, and translation exercise sets from the 1920 public-domain Mill-Hill Fathers handbook are integrated into the Dholuo course and dictionary.',
  },
  {
    id: 'turkana-grammar',
    title: 'Turkana Grammatical Notes and Vocabulary',
    fileName: 'Turkana Grammatical Notes and Vocabulary (Barton) (1921)_extracted.txt',
    processedPath: 'language-sources/raw/Turkana Grammatical Notes and Vocabulary (Barton) (1921)_extracted.txt',
    languages: ['turkana'],
    published: '1921',
    contribution: 'Complete Turkana grammatical treatise (18 sections) and A–Z vocabulary of 1,427 lines with Suk/Pokot comparative notes (Juxon Barton, Journal of the Royal Anthropological Institute, Vol. 51, 1921 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons'],
    contentTypes: ['grammar', 'vocabulary', 'dialogue'],
    ingestionStatus: 'integrated',
    coverageNote: "100% of Juxon Barton's 1921 A–Z vocabulary, numerals, 12 traditional months, pastoral greetings, and 18 grammatical sections are integrated into the Turkana dictionary, 12-unit course, and 8-section grammar guide.",
  },
  {
    id: 'bantu-beliefs',
    title: 'Bantu Beliefs and Customary Institutions',
    fileName: 'bantubeliefsmagi00hobl_extracted.txt',
    processedPath: 'language-sources/raw/bantubeliefsmagi00hobl_extracted.txt',
    languages: ['kikuyu', 'kamba', 'maasai', 'swahili'],
    published: '1922',
    contribution: 'Ethnographic monograph and 48-entry Glossary of Kikuyu, Kamba, Maasai, and Swahili institutional, ritual, and legal terminology (C. W. Hobley, H. F. & G. Witherby London, 1922 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural notes', 'blog research'],
    contentTypes: ['vocabulary', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'All 48 Glossary entries (pages 305–308) and chapter terms are integrated into the Kikuyu, Kamba, Maasai, and Swahili dictionaries, courses, and editorial briefs.',
  },
  {
    id: 'stevenson-kikuyu-proverbs-1927',
    title: 'Specimens of Kikuyu Proverbs (Festschrift Meinhof)',
    fileName: 'kikuyu-proverbs.json',
    processedPath: 'kikuyu-proverbs.json',
    languages: ['kikuyu'],
    published: '1927',
    contribution: 'Early public-domain collection of classical Gĩkũyũ proverbs with literal translations and cultural explanations (Marion S. Stevenson, Festschrift Meinhof, pp. 241–246, 1927 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated into kikuyu-proverbs.json, kikuyu.json, and the Proverbs & Cultural Wisdom browser.',
  },
  {
    id: 'stam-bahanga-1929',
    title: 'The Bahanga (Publications of the Catholic Anthropological Conference, Vol. I, No. 4)',
    fileName: 'The Bahanga.md',
    processedPath: 'language-sources/raw/The Bahanga.md',
    languages: ['luhya'],
    published: '1929',
    contribution: 'Detailed ethnographic and linguistic study of the Wanga / Bahanga (Luhanga / Oluluyia): 10-generation royal genealogy from Kwandedi & Wanga to Nabongo Mumia, sub-clans, royal burial at Matungu, ancestor sacrifice (omusango, omumali owe misango, khatsu khe misango, amagina ake misambwa), Supreme Deity (Were / Nasayi), sun prayer (liyuba), divination (omufumo), twin ceremonies (amakhwana), betrothal & marriage (okhukhua omukhana, ingombe yarando), and circumcision (okhukhyebwa, irumbi) (Rev. N. Stam, Catholic Anthropological Conference Washington, D.C., 1929 — Public Domain).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'All Luhanga/Wanga vocabulary, prayers, ritual phrases, and historical notes integrated line-by-line into luhya.json, LUHYA_GRAMMAR_SECTIONS, LUHYA_UNITS, and cultural-wisdom.ts.',
  },
  {
    id: 'github-cldr-huggingface-panlex-cc0',
    title: 'GitHub Unicode CLDR & Hugging Face PanLex / Common Voice CC0-1.0 Corpora',
    fileName: 'dictionaries/*.json',
    processedPath: 'dictionaries',
    languages: ['kikuyu', 'swahili', 'luhya', 'somali', 'kamba', 'luo', 'kalenjin', 'kisii', 'meru', 'maasai', 'teso', 'mijikenda', 'embu', 'taita', 'samburu', 'borana'],
    published: '2014–2026',
    contribution: '1,760+ strictly indigenous calendar months (including traditional Maasai, Kalenjin, Ateso, and Samburu ecological months), weekdays, relative time phrases, currencies, territories, and language names from GitHub unicode-org/cldr (ki, kam, luo, kln, mas, saq, guz, luy, mer, ebu, teo, dav, om_KE, so_KE, sw_KE) plus CC0-1.0 lexical & sentence datasets on Hugging Face.',
    appUses: ['dictionary', 'course lessons', 'grammar lessons'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated across all 22 Kenyan language dictionaries with Swahili-fallback strings filtered out.',
  },
  {
    id: 'open-web-swadesh-comparative',
    title: 'Open-Web Swadesh & Comparative Kenyan Linguistic Tables (Wiktionary, Wikipedia & Academic Reconstructions)',
    fileName: 'dictionaries/*.json',
    processedPath: 'dictionaries',
    languages: ['kikuyu', 'swahili', 'luhya', 'somali', 'kamba', 'luo', 'kalenjin', 'kisii', 'meru', 'maasai', 'teso', 'mijikenda', 'turkana', 'embu', 'taita', 'samburu', 'borana', 'rendille', 'pokomo', 'ilchamus', 'pokot', 'taveta', 'daasanach'],
    published: '1964–2026',
    contribution: 'Clean digital 207-word Swadesh lists (Swahili, Somali, Oromo/Borana, Kikuyu, Luhya), Mount Kenya Bantu (Kîembu/Kĩmĩĩrũ) 150-word lexicon & phrases, Samburu & Ilchamus/Camus Eastern Nilotic tables (Vossen 1982), Rendille lexicon & numerals (Fleming 1964, Heine 1976 & 1979), Kalenjin & East Pokot dialect tables (van Otterloo 1979, Rottland 1982), and Proto-Sabaki/Proto-Bantu comparative tables.',
    appUses: ['dictionary', 'course lessons', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'dialogue', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated across all 22 Kenyan language dictionaries and 13 interactive language courses.',
  },
  {
    id: 'reinisch-somali-1902',
    title: 'Die Somali-Sprache: II. Wörterbuch (Somali–Deutsch & Deutsch–Somali), I. Texte, III. Grammatik',
    fileName: 'somali.json',
    processedPath: 'dictionaries/somali.json',
    languages: ['somali'],
    published: '1900–1903',
    contribution: 'Comprehensive 540-page Somali dictionary, Cushitic root etymologies, folktale texts, and grammar compiled by Prof. Leo Reinisch (Imperial Academy of Sciences, Vienna, 1900–1903 — Public Domain; Internet Archive: https://archive.org/details/diesomalisprache02rein).',
    appUses: ['dictionary', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'grammar', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Core Somali stems, pastoral vocabulary, and Cushitic grammatical paradigms integrated into somali.json.',
  },
  {
    id: 'brutzer-kamba-1905',
    title: 'Handbuch der Kambasprache & Tierfabeln der Kamba',
    fileName: 'kamba.json',
    processedPath: 'dictionaries/kamba.json',
    languages: ['kamba'],
    published: '1905–1910',
    contribution: 'Systematic Kĩkamba grammar, verb derivation tables, syntax, and interlinear animal fables compiled by Missionary Ernst Brutzer (MSOS Berlin, Vol. VIII [1905] & Afrikanische Studien [1910] — Public Domain; Internet Archive: https://archive.org/details/handbuchderkamba00brut).',
    appUses: ['dictionary', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['grammar', 'vocabulary', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated into kamba.json and Kamba grammar & oral wisdom collections.',
  },
  {
    id: 'mcgregor-barlow-kikuyu-grammar-1905-1914',
    title: 'A Grammar of the Kikuyu Language (McGregor 1905) & Tentative Studies in Kikuyu Grammar and Idiom (Barlow 1914)',
    fileName: 'kikuyu.json',
    processedPath: 'dictionaries/kikuyu.json',
    languages: ['kikuyu'],
    published: '1905 / 1914',
    contribution: 'Foundational Gĩkũyũ grammatical treatises covering Dahl\'s Law (k -> g dissimilation), noun class concords, tense/aspect paradigms, and graded idioms by Rev. A. W. McGregor (CMS London, 1905 — https://archive.org/details/grammarofkikuyul00mcgr) and A. Ruffell Barlow (CSM Edinburgh, 1914 — https://archive.org/details/tentativestudies00barl).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons'],
    contentTypes: ['grammar', 'vocabulary', 'dialogue'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated into kikuyu.json and Gĩkũyũ grammar reference sections.',
  },
  {
    id: 'purvis-lumasaba-grammar-1907',
    title: 'A Manual of Lumasaba Grammar (Mount Elgon / Masaba-Bukusu Group)',
    fileName: 'luhya.json',
    processedPath: 'dictionaries/luhya.json',
    languages: ['luhya'],
    published: '1907',
    contribution: 'Complete 96-page grammatical manual of Lumasaba (Mount Elgon / Lubukusu preprefixal cluster) covering preprefixes (kamakhuwa, kumukono), concords, verb extensions, and vocabulary by Rev. J. B. Purvis (SPCK London, 1907 — Public Domain; Internet Archive: https://archive.org/details/amanualoflumasab00purv).',
    appUses: ['dictionary', 'grammar lessons', 'comparative translator'],
    contentTypes: ['grammar', 'vocabulary'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated alongside Johnston (1902, 1919) and Hobley (1902) into luhya.json.',
  },
  {
    id: 'foot-galla-dictionary-1913',
    title: 'A Galla-English, English-Galla Dictionary (Oromo / Borana)',
    fileName: 'borana.json',
    processedPath: 'dictionaries/borana.json',
    languages: ['borana'],
    published: '1913',
    contribution: 'Bidirectional Oromo–English and English–Oromo dictionary (118 pages) compiled by E. C. Foot and published by Cambridge University Press (1913 — Public Domain; Internet Archive: https://archive.org/details/gallaenglishengl00footuoft).',
    appUses: ['dictionary', 'comparative translator'],
    contentTypes: ['vocabulary'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated alongside Krapf (1842) and Tutschek (1844–1845) into borana.json.',
  },
  {
    id: 'kitching-ateso-handbook-1915',
    title: 'A Handbook of the Ateso Language',
    fileName: 'teso.json',
    processedPath: 'dictionaries/teso.json',
    languages: ['teso'],
    published: '1915',
    contribution: 'First comprehensive 144-page grammar, syntax, and vocabulary of Ateso (Eastern Nilotic) covering gender prefixes (e- masc., a- fem., i- dimin.), verb classes (ko- and ki-), and core lexicon by Archdeacon A. L. Kitching (SPCK London, 1915 — Public Domain; Internet Archive: https://archive.org/details/handbookofatesol00kitc).',
    appUses: ['dictionary', 'course lessons', 'grammar lessons'],
    contentTypes: ['grammar', 'vocabulary', 'dialogue'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated alongside Hobley (1902) and Johnston (1902) into teso.json.',
  },
  {
    id: 'stigand-swahili-dialects-1915',
    title: 'A Grammar of Dialectic Changes in the Kiswahili Language (Kimvita, Kiamu, Kipate, Bajuni/Kitikuu, Kingozi)',
    fileName: 'Grammar Of Dialectic Changes Kiswahili.md',
    processedPath: 'language-sources/raw/Grammar Of Dialectic Changes Kiswahili.md',
    languages: ['swahili'],
    published: '1915',
    contribution: 'Systematic comparative grammar of Kenyan Northern & Coastal Swahili dialects (Kimvita, Kiamu, Kipate, Bajuni/Kitikuu, Siu) with Rev. W. E. Taylor\'s poetic introduction and recension of the Inkishafi by Capt. C. H. Stigand (Cambridge University Press, 1915 — Public Domain; Internet Archive: https://archive.org/details/grammarofdialect00stig).',
    appUses: ['dictionary', 'grammar lessons', 'cultural wisdom'],
    contentTypes: ['grammar', 'vocabulary', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated alongside Krapf (1882), Steere (1870, 1894), Madan (1903), and Johnston (1919) into swahili.json.',
  },
  {
    id: 'werner-bantu-coast-pokomo-1915',
    title: 'The Bantu Coast Tribes of the East Africa Protectorate & Notes on the Wapokomo of the Tana Valley',
    fileName: 'The Bantu Coast Tribes Of The East Africa Protectorate.md',
    processedPath: 'language-sources/raw/The Bantu Coast Tribes Of The East Africa Protectorate.md',
    languages: ['pokomo', 'mijikenda', 'taita'],
    published: '1913–1915',
    contribution: 'Ethnographic and linguistic studies of the Pokomo (Kipfokomo), Mijikenda (Nyika nine Kayas), and Taita covering age-grades (luva, nyere, kambi, vaya), kinship, and Tana valley ecology by Prof. Alice Werner (JRAI Vol. 45 [1915] & Journal of the African Society Vol. 12 [1913] — Public Domain; https://www.jstor.org/stable/2843481).',
    appUses: ['dictionary', 'cultural wisdom'],
    contentTypes: ['vocabulary', 'cultural-reference'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated into pokomo.json, mijikenda.json, and cultural-wisdom.ts.',
  },
  {
    id: 'librivox-kavirondo-audio-1920',
    title: 'LibriVox Public Domain Spoken Audio: A Handbook of the Kavirondo Language (Dholuo Phraseology)',
    fileName: 'luo.json',
    processedPath: 'dictionaries/luo.json',
    languages: ['luo'],
    published: '1920 / 2012 (CC0-1.0)',
    contribution: 'Six public-domain (CC0-1.0) MP3 spoken-audio recordings of the Dholuo Phraseology and Exercises from the 1920 Mill-Hill Fathers Handbook (Internet Archive / LibriVox: https://archive.org/details/handbook_kavirondo3_1203).',
    appUses: ['dictionary', 'course lessons'],
    contentTypes: ['dialogue', 'vocabulary'],
    ingestionStatus: 'integrated',
    coverageNote: 'Direct CC0 MP3 audio URLs linked across 978 Dholuo dictionary and phrasebook entries in luo.json.',
  },
  {
    id: 'anv-ke-kencorpus-modern-open-datasets',
    title: 'African Next Voices Kenya (Anv-ke), Kencorpus, thinkKenya & Luhya/Kikuyu Open Multilingual Datasets',
    fileName: 'dictionaries/*.json',
    processedPath: 'dictionaries',
    languages: ['kikuyu', 'luo', 'kalenjin', 'kamba', 'maasai', 'meru', 'swahili', 'luhya', 'taita', 'embu', 'kisii', 'teso'],
    published: '2022–2026',
    contribution: 'Open-licensed modern Kenyan corpora: Maseno/Kenyatta/USIU African Next Voices (Anv-ke, CC-BY-4.0 — https://huggingface.co/datasets/MCAA1-MSU/anv_data_ke), Kencorpus (Swahili, Dholuo, Luhya — https://huggingface.co/datasets/Kencorpus/Kencorpus_dataset), thinkKenya (Kidaw\'ida, Kalenjin, Dholuo — https://github.com/thinkKenya/kenyan-low-resource-language-data), mamakobe/luhya-multilingual-dataset, LughaGen, and CGIAR/KikuyuEnglish_translation.',
    appUses: ['dictionary', 'course lessons', 'comparative translator'],
    contentTypes: ['vocabulary', 'dialogue'],
    ingestionStatus: 'integrated',
    coverageNote: 'Integrated modern agriculture, healthcare, mobile money (M-Pesa), and digital governance terminology across Kenyan dictionaries.',
  },
];

const LANGUAGE_ID_ALIASES: Record<string, string> = {
  // Luo / Dholuo
  dholuo: 'luo',
  jaluo: 'luo',
  nilotickavirondo: 'luo',
  // Luhya / Oluluyia & dialects
  luyia: 'luhya',
  oluluyia: 'luhya',
  bukusu: 'luhya',
  lubukusu: 'luhya',
  wanga: 'luhya',
  luhanga: 'luhya',
  maragoli: 'luhya',
  logooli: 'luhya',
  idakho: 'luhya',
  isukha: 'luhya',
  tiriki: 'luhya',
  nyore: 'luhya',
  samia: 'luhya',
  // Kikuyu / Gĩkũyũ
  gikuyu: 'kikuyu',
  akikuyu: 'kikuyu',
  // Kamba / Kĩkamba
  kikamba: 'kamba',
  akamba: 'kamba',
  // Swahili / Kiswahili & coastal dialects
  kiswahili: 'swahili',
  suahili: 'swahili',
  kimvita: 'swahili',
  kiunguja: 'swahili',
  kiamu: 'swahili',
  kitikuu: 'swahili',
  kingozi: 'swahili',
  // Kalenjin & Highland Nilotic sub-groups
  nandi: 'kalenjin',
  kipsigis: 'kalenjin',
  tugen: 'kalenjin',
  marakwet: 'kalenjin',
  keiyo: 'kalenjin',
  elgeyo: 'kalenjin',
  sabaot: 'kalenjin',
  terik: 'kalenjin',
  // Kisii / Ekegusii
  ekegusii: 'kisii',
  gusii: 'kisii',
  // Meru / Kĩmĩĩrũ
  kimiiru: 'meru',
  kimiru: 'meru',
  tharaka: 'meru',
  mwimbi: 'meru',
  tigania: 'meru',
  igembe: 'meru',
  // Maasai / Maa
  maa: 'maasai',
  masai: 'maasai',
  // Turkana
  ngaturukana: 'turkana',
  // Embu / Kĩembu
  kiembu: 'embu',
  mbeere: 'embu',
  kimbeere: 'embu',
  // Taita
  kidawida: 'taita',
  dawida: 'taita',
  kisagala: 'taita',
  sagalla: 'taita',
  kasigau: 'taita',
  // Mijikenda & Nine Kayas
  giriama: 'mijikenda',
  kigiryama: 'mijikenda',
  giryama: 'mijikenda',
  digo: 'mijikenda',
  kidigo: 'mijikenda',
  duruma: 'mijikenda',
  kiduruma: 'mijikenda',
  rabai: 'mijikenda',
  kirabai: 'mijikenda',
  chonyi: 'mijikenda',
  kinika: 'mijikenda',
  nyika: 'mijikenda',
  // Cushitic (Somali, Borana/Oromo, Rendille)
  afsoomaali: 'somali',
  oromo: 'borana',
  afaanoromoo: 'borana',
  galla: 'borana',
  kigalla: 'borana',
  rendile: 'rendille',
  // Teso / Ateso
  ateso: 'teso',
  elgumi: 'teso',
  // Pokomo
  kipfokomo: 'pokomo',
  kipokomo: 'pokomo',
  // Samburu & Ilchamus
  sampur: 'samburu',
  njemps: 'ilchamus',
  camus: 'ilchamus',
  enjemusi: 'ilchamus',
  // Pokot
  suk: 'pokot',
  pokoot: 'pokot',
  // Taveta
  kitaveta: 'taveta',
  // Daasanach / Dhaasanac
  daasanach: 'daasanach',
  dhaasanac: 'daasanach',
  dasanech: 'daasanach',
  dathanaik: 'daasanach',
  geleba: 'daasanach',
  marille: 'daasanach',
  reshiat: 'daasanach',
};

export function normalizeLanguageId(languageId: string): string {
  const withoutParens = languageId.split('(')[0] ?? languageId;
  const normalized = withoutParens
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  return LANGUAGE_ID_ALIASES[normalized] ?? normalized;
}

export function getSourcesForLanguage(languageId: string): LanguageSource[] {
  const normalizedId = normalizeLanguageId(languageId);
  return LANGUAGE_SOURCES.filter((source) => source.languages.includes(normalizedId));
}

export function getSourceById(sourceId: string): LanguageSource | undefined {
  return LANGUAGE_SOURCES.find((source) => source.id === sourceId);
}

export const LANGUAGE_SOURCE_CORPUS: LanguageSource[] = LANGUAGE_SOURCES;

export function getAllLanguageSources(): LanguageSource[] {
  return LANGUAGE_SOURCES;
}

// ── Precomputed Course & Dictionary Metadata ──
export const AVAILABLE_COURSE_IDS: ReadonlySet<string> = new Set([
  "kikuyu",
  "luo",
  "kamba",
  "turkana",
  "swahili",
  "luhya",
  "kalenjin",
  "kisii",
  "meru",
  "mijikenda",
  "maasai",
  "somali",
  "teso",
  "embu",
  "taita",
  "taveta",
  "pokomo",
  "borana",
  "rendille",
  "samburu",
  "ilchamus",
  "pokot",
  "daasanach",
]);

export function hasCourse(languageId: string): boolean {
  return AVAILABLE_COURSE_IDS.has(languageId);
}

// Auto-generated lightweight dictionary metadata and on-demand loaderwith O(1) search indexing
// Auto-generated lightweight dictionary metadata and on-demand loader with O(1) search indexing
export interface DictEntry {
  english: string;
  translation: string;
  pronunciation: string;
  context: string;
  audioFile?: string | null;
}

export interface DictCategory {
  id: string;
  name: string;
  icon?: string;
  entries: DictEntry[];
}

export interface Dictionary {
  languageId: string;
  languageName: string;
  family: string;
  nativeName: string;
  script: string;
  speakerCount: number;
  counties: string[];
  hasAudio: boolean;
  dictionaryVersion: string;
  lastUpdated: string;
  contributorNote: string;
  categories: DictCategory[];
}

export interface DictCategoryMeta {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface DictMeta {
  languageId: string;
  languageName: string;
  family: string;
  nativeName: string;
  script: string;
  speakerCount: number;
  counties: string[];
  hasAudio: boolean;
  dictionaryVersion: string;
  lastUpdated: string;
  contributorNote: string;
  totalEntries: number;
  categories: DictCategoryMeta[];
}

export const ALL_DICT_METAS: DictMeta[] = [
  {
    "languageId": "swahili",
    "languageName": "Swahili (Kiswahili)",
    "family": "bantu",
    "nativeName": "Kiswahili",
    "script": "Latin",
    "speakerCount": 15000000,
    "counties": [
      "Mombasa",
      "Lamu",
      "Kilifi",
      "Kwale",
      "Tana River"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Swahili (Kiswahili: Kiunguja, Kimvita, Kiamu, Kitikuu, Kipate, Kingozi) vocabulary compiled from Rev. Dr. J. L. Krapf (1850, 1882), Bishop Edward Steere (1870, 1894, 1918), Rev. W. E. Taylor (1891), George W. Bateman (1901), A. C. Madan (1902, 1903, 1905, 1917), Hildegarde Hinde (1904), Mrs. F. Burt (1910), Capt. C. H. Stigand (1915), Mervyn W. H. Beech (1918), Prof. Alice Werner (1918, 1919, 1933), Sir Harry H. Johnston (1919), Deo Ngonyani & Nancy Ngowa (2016), Mohamed Mwamzandi (2022), and John Goldsmith & Fidèle Mpiranya (2022).",
    "totalEntries": 17323,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 65
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 192
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 462
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 488
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 392
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 986
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 648
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 465
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 2710
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 378
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🚌",
        "count": 526
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 461
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 357
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 406
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 8636
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 151
      }
    ]
  },
  {
    "languageId": "kikuyu",
    "languageName": "Kikuyu (Gĩkũyũ)",
    "family": "bantu",
    "nativeName": "Gĩkũyũ",
    "script": "Latin",
    "speakerCount": 8100000,
    "counties": [
      "Kiambu",
      "Murang'a",
      "Nyeri",
      "Kirinyaga",
      "Nyandarua"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Gĩkũyũ (Kikuyu) vocabulary compiled from Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902, 1919), Rev. Fr. A. Hémery (1903), Hildegarde Hinde (1904), Rev. A. W. McGregor (1904), W. Scoresby & Katherine Routledge (1910), C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and BFBS (1921).",
    "totalEntries": 10667,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 30
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 116
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 246
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🧍",
        "count": 408
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 256
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 482
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 338
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 312
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 822
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 357
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 161
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 95
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 148
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 223
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 3725
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 2948
      }
    ]
  },
  {
    "languageId": "luo",
    "languageName": "Dholuo (Luo)",
    "family": "nilotic",
    "nativeName": "Dholuo",
    "script": "Latin",
    "speakerCount": 5800000,
    "counties": [
      "Kisumu",
      "Siaya",
      "Homa Bay",
      "Migori"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.2",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Dholuo (Luo) vocabulary compiled from C. W. Hobley (1902, 1903), Sir Harry H. Johnston (1902), G. A. S. Northcote (1907), Rev. John Roscoe & Archdeacon J. J. Willis (1915 \"The Northern Bantu\", Ch. XXV & Kinship Table pp. 275–293), Mill-Hill Fathers (1920), and BFBS (1921).",
    "totalEntries": 2497,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 16
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 51
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 134
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 120
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 165
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 142
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 118
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 138
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 299
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 62
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 34
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 22
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 38
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 104
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 678
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 376
      }
    ]
  },
  {
    "languageId": "kalenjin",
    "languageName": "Kalenjin",
    "family": "nilotic",
    "nativeName": "Kalenjin",
    "script": "Latin",
    "speakerCount": 6400000,
    "counties": [
      "Uasin Gishu",
      "Nandi",
      "Kericho",
      "Bomet",
      "Baringo",
      "Elgeyo-Marakwet",
      "Trans Nzoia",
      "West Pokot"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.2",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Kalenjin (Nandi / Kipsigis / Keyo / Tugen) vocabulary compiled from C. W. Hobley (1902, 1903, 1910), Sir Harry H. Johnston (1902), A. C. Hollis (1909 \"The Nandi: Their Language and Folk-Lore\"), Hon. K. R. Dundas (1910), BFBS (1921), Michael Diercks & Meghana Rao (2019), Meredith Landman (2019), and Joost Zwarts, Andrew Kipkosgei Chelimo & Prisca Jerono (2024).",
    "totalEntries": 4583,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 11
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 98
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 196
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 292
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 341
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 262
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 206
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 244
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 203
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 164
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 161
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 36
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 90
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 136
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 626
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 1517
      }
    ]
  },
  {
    "languageId": "luhya",
    "languageName": "Luhya (Luyia)",
    "family": "bantu",
    "nativeName": "Oluluyia",
    "script": "Latin",
    "speakerCount": 6800000,
    "counties": [
      "Kakamega",
      "Bungoma",
      "Vihiga",
      "Busia"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.2",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Luhya (Oluluyia: Luwanga, Lubukusu, Lumasaba, Lulogooli) vocabulary compiled from C. W. Hobley (1902, 1903), Sir Harry H. Johnston (1902, 1919 #5–6a), Rev. J. B. Purvis (1907, 1909 \"Through Uganda to Mount Elgon\"), Rev. John Roscoe (1915 \"The Northern Bantu\"), BFBS (1921), Rev. N. Stam (1929 \"The Bahanga\"), and Payne, Pacchiarotti & Bosire eds. (2016 \"Diversity in African Languages\", Chs. 9, 11, 12, 15).",
    "totalEntries": 3495,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 14
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 159
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 177
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 308
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 364
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌳",
        "count": 239
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 186
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏡",
        "count": 225
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 375
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 134
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 71
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 32
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 66
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 98
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 648
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 399
      }
    ]
  },
  {
    "languageId": "kamba",
    "languageName": "Kamba (Kĩkamba)",
    "family": "bantu",
    "nativeName": "Kĩkamba",
    "script": "Latin",
    "speakerCount": 4600000,
    "counties": [
      "Machakos",
      "Makueni",
      "Kitui"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Kamba (Kĩkamba) vocabulary compiled from Rev. Dr. J. L. Krapf (1850), J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), Sir Harry H. Johnston (1919 #12), Gerhard Lindblom (1920), BFBS (1921), and Patrick Jones & Jeremy Freyer (2019).",
    "totalEntries": 4071,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 16
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 54
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 114
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🧍",
        "count": 165
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐾",
        "count": 187
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 190
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 131
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 151
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 172
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 135
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 138
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 57
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🏥",
        "count": 73
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏳",
        "count": 115
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 2061
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 312
      }
    ]
  },
  {
    "languageId": "meru",
    "languageName": "Meru (Kĩmĩĩrũ)",
    "family": "bantu",
    "nativeName": "Kĩmĩĩrũ",
    "script": "Latin",
    "speakerCount": 2000000,
    "counties": [
      "Meru",
      "Tharaka-Nithi"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Meru (Kĩmĩĩrũ / Kĩtharaka / Kĩcuka / Kĩmwimbi) vocabulary compiled from C. W. Hobley (1910), Arthur M. Champion (1912 \"The Atharaka\"), Hon. Charles Dundas (1915 \"The Organization and Laws of Some Bantu Tribes in East Africa\"), Sir Harry H. Johnston (1919 #11–11a), Prof. Kithaka wa Mberia (2004 \"The Phonology of Borrowed Words in Kitharaka\"), and Unicode CLDR (mer.xml).",
    "totalEntries": 569,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 6
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 18
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 26
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 152
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 189
      },
      {
        "id": "shopping",
        "name": "shopping",
        "icon": "📜",
        "count": 7
      },
      {
        "id": "home",
        "name": "home",
        "icon": "📜",
        "count": 8
      },
      {
        "id": "time",
        "name": "time",
        "icon": "📜",
        "count": 27
      }
    ]
  },
  {
    "languageId": "maasai",
    "languageName": "Maasai (Maa)",
    "family": "nilotic",
    "nativeName": "ɔl Maa",
    "script": "Latin",
    "speakerCount": 1200000,
    "counties": [
      "Narok",
      "Kajiado",
      "Samburu"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Maasai (ɔl Maa) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), R. N. Cust (1883), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Hildegarde Hinde (1901), Sir Harry H. Johnston (1902), A. C. Hollis (1905), C. W. Hobley (1910, 1922), and BFBS (1921).",
    "totalEntries": 2341,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 9
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 55
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 163
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 151
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 202
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 130
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 126
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 105
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 123
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 100
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 31
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 15
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 54
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 67
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 402
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 608
      }
    ]
  },
  {
    "languageId": "kisii",
    "languageName": "Kisii (Ekegusii)",
    "family": "bantu",
    "nativeName": "Ekegusii",
    "script": "Latin",
    "speakerCount": 2700000,
    "counties": [
      "Kisii",
      "Nyamira"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.2",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Kisii (Ekegusii) vocabulary compiled from C. W. Hobley (1902 \"Eastern Uganda\") and Sir Harry H. Johnston (1902 \"The Uganda Protectorate, Vol. II\", 1919–1922 \"A Comparative Study of the Bantu and Semi-Bantu Languages\" #7 Ki-guzii & #7a Ki-koria).",
    "totalEntries": 1110,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 4
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 94
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 77
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🧠",
        "count": 138
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 133
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 102
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 64
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 76
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 41
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 32
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 16
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 5
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 11
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 40
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 109
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 168
      }
    ]
  },
  {
    "languageId": "somali",
    "languageName": "Somali",
    "family": "cushitic",
    "nativeName": "Af-Soomaali",
    "script": "Latin",
    "speakerCount": 2400000,
    "counties": [
      "Garissa",
      "Wajir",
      "Mandera",
      "Isiolo"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Somali (Af-Soomaali) vocabulary compiled from R. N. Cust (1883), Rev. Fr. Evangelist de Larajasse (1897), Sir Harry H. Johnston (1902), Lt. J. W. C. Kirk (1903 \"Notes on the Somali Language\", 1905 \"A Grammar of the Somali Language\"), BFBS (1921), Morgan Nilsson (2016), Wendell Kimper et al. (2019), and Anna M. DiGarbo & Rose Stamp (2019).",
    "totalEntries": 2434,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 10
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 83
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 154
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 121
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 186
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 76
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 92
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 101
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 46
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 69
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 57
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 29
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 16
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 100
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 816
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 478
      }
    ]
  },
  {
    "languageId": "turkana",
    "languageName": "Turkana",
    "family": "nilotic",
    "nativeName": "Ng'aturukana",
    "script": "Latin",
    "speakerCount": 1100000,
    "counties": [
      "Turkana"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Turkana (Ng'aturkana) vocabulary compiled from Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909 \"Through Uganda to Mount Elgon\", Ch. XIII), Hon. K. R. Dundas (1910), Mervyn W. H. Beech (1911), and Juxon Barton (1921).",
    "totalEntries": 1998,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 12
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 24
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👥",
        "count": 88
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "👁️",
        "count": 107
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐾",
        "count": 152
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 114
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 63
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 104
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 263
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 81
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 12
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 5
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 31
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 84
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 646
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 212
      }
    ]
  },
  {
    "languageId": "mijikenda",
    "languageName": "Mijikenda (Giriama)",
    "family": "bantu",
    "nativeName": "Kigiriama",
    "script": "Latin",
    "speakerCount": 2500000,
    "counties": [
      "Kilifi",
      "Kwale",
      "Mombasa"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Mijikenda (Kigiryama, Chidigo, Chiduruma, Kirabai) vocabulary compiled from Rev. Dr. J. L. Krapf (1850), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891), Prof. Alice Werner (1915), Sir Harry H. Johnston (1919 #16), BFBS (1921), and Steve Nicolle (2016).",
    "totalEntries": 7905,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 15
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 72
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 106
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 130
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 111
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🦁",
        "count": 262
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 204
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 130
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 903
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 173
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 127
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 68
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🏥",
        "count": 93
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏳",
        "count": 94
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 5131
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 286
      }
    ]
  },
  {
    "languageId": "teso",
    "languageName": "Teso (Ateso)",
    "family": "nilotic",
    "nativeName": "Ateso",
    "script": "Latin",
    "speakerCount": 468000,
    "counties": [
      "Busia"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Teso (Ateso / Elgumi) vocabulary compiled from C. W. Hobley (1902), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909 \"Through Uganda to Mount Elgon\"), Archdeacon A. L. Kitching (1915 \"A Handbook of the Ateso Language\"), Rev. John Roscoe (1915 \"The Northern Bantu\", Part V \"The Bateso\" & Kinship Table pp. 257–293), and BFBS (1921).",
    "totalEntries": 572,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 7
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 23
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👥",
        "count": 23
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "👤",
        "count": 39
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐾",
        "count": 49
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 35
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 27
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 15
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "⚡",
        "count": 49
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 104
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 173
      }
    ]
  },
  {
    "languageId": "embu",
    "languageName": "Embu (Kĩembu)",
    "family": "bantu",
    "nativeName": "Kĩembu",
    "script": "Latin",
    "speakerCount": 580000,
    "counties": [
      "Embu"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Embu & Mbeere (Kĩembu / Kĩmbeere) vocabulary compiled from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915 \"The Organization and Laws of Some Bantu Tribes in East Africa\"), Sir Harry H. Johnston (1919 #11), and Unicode CLDR (ebu.xml).",
    "totalEntries": 571,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 8
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 18
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 27
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 47
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 37
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 86
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 30
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 59
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 196
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 14
      }
    ]
  },
  {
    "languageId": "taita",
    "languageName": "Taita (Kidawida)",
    "family": "bantu",
    "nativeName": "Kidaw'ida / Kisagala",
    "script": "Latin",
    "speakerCount": 410000,
    "counties": [
      "Taita-Taveta"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.2",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Taita (Kidawida / Kisagala / Kikasigau) vocabulary compiled from Rev. Dr. J. L. Krapf (1850), Rev. A. Downes Shaw (1885), Rev. W. E. Taylor (1891), Rev. J. Alfred Wray (1894), Prof. Alice Werner (1915), Sir Harry H. Johnston (1919 #14), and BFBS (1921).",
    "totalEntries": 3354,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 16
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 61
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 83
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 125
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 139
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 168
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 99
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 88
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 265
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 125
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 32
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 24
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 58
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 76
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 993
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 1002
      }
    ]
  },
  {
    "languageId": "samburu",
    "languageName": "Samburu (Sampur)",
    "family": "nilotic",
    "nativeName": "Sampur / ɔl Maa",
    "script": "Latin",
    "speakerCount": 310000,
    "counties": [
      "Samburu",
      "Marsabit",
      "Isiolo",
      "Laikipia"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Samburu (Sampur / Northern Maa) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), C. W. Hobley (1910), and Rainer Vossen (1982).",
    "totalEntries": 678,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 6
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 23
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 20
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 43
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 45
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 78
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 18
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 22
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 51
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 336
      }
    ]
  },
  {
    "languageId": "borana",
    "languageName": "Borana (Oromo)",
    "family": "cushitic",
    "nativeName": "Afaan Borana / Afaan Oromoo",
    "script": "Latin",
    "speakerCount": 550000,
    "counties": [
      "Marsabit",
      "Isiolo",
      "Moyale",
      "Tana River (Orma)",
      "Garissa"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.4",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Borana / Oromo (Afaan Borana / Orma / Kigalla) vocabulary compiled from Rev. J. L. Krapf & Rev. C. W. Isenberg (1840 \"An Imperfect Outline of the Elements of the Galla Language\", 1842 \"Vocabulary of the Galla Language\", 1850 \"Vocabulary of Six East-African Languages\"), Karl & Lawrence Tutschek (1844–1845), R. N. Cust (1883), E. C. Foot (1913), Prof. Alice Werner (1915), BFBS (1921), and Catherine Griefenow-Mewis (1996).",
    "totalEntries": 7616,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 32
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 69
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 142
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 213
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 213
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 330
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 168
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 208
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 850
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 189
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 132
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 90
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🏥",
        "count": 117
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏳",
        "count": 120
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 4692
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 51
      }
    ]
  },
  {
    "languageId": "rendille",
    "languageName": "Rendille (Afi Ren'dille)",
    "family": "cushitic",
    "nativeName": "Afi Ren'dille",
    "script": "Latin",
    "speakerCount": 96000,
    "counties": [
      "Marsabit"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Rendille (Af-Rendille) vocabulary compiled from Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894), C. W. Hobley (1910 \"Ethnology of A-Kamba and Other East African Tribes\"), Harold C. Fleming (1964), and Bernd Heine (1976).",
    "totalEntries": 176,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 7
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 11
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 14
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 14
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 14
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 17
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 11
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 26
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 14
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 30
      }
    ]
  },
  {
    "languageId": "pokomo",
    "languageName": "Pokomo (Kipfokomo)",
    "family": "bantu",
    "nativeName": "Kipfokomo",
    "script": "Latin",
    "speakerCount": 120000,
    "counties": [
      "Tana River"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Pokomo (Kipfokomo / Kipokomo) dictionary compiled from Rev. Dr. J. L. Krapf (1850), Ferdinand Würtz (1895), Prof. Alice Werner (1913, 1915 \"The Bantu Coast Tribes of the East Africa Protectorate\", 1933 \"Myths and Legends of the Bantu\"), Sir Harry H. Johnston (1919 #13), BFBS (1921), and Mikael Samson & R. G. Darroch (1944 \"A History of the Pokomo [Vyuo vya Wapokomo]\", JRAI Vol. 73).",
    "totalEntries": 2302,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 14
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 28
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 46
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 70
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 38
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 122
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 52
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 42
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 91
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 65
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 81
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 41
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🏥",
        "count": 44
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏳",
        "count": 40
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 1278
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 250
      }
    ]
  },
  {
    "languageId": "ilchamus",
    "languageName": "Ilchamus (Njemps)",
    "family": "nilotic",
    "nativeName": "Ilchamus / Camus",
    "script": "Latin",
    "speakerCount": 35000,
    "counties": [
      "Baringo"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Ilchamus (Njemps / En-jemusi) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), Hon. K. R. Dundas (1910), Mervyn W. H. Beech (1911), and Bernd Heine (1980).",
    "totalEntries": 304,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 4
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 21
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 17
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 35
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 45
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 30
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 16
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 20
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 50
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 58
      }
    ]
  },
  {
    "languageId": "pokot",
    "languageName": "Pokot (Pökoot)",
    "family": "nilotic",
    "nativeName": "Pökoot / Kimukon",
    "script": "Latin",
    "speakerCount": 783000,
    "counties": [
      "West Pokot",
      "Baringo"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Pokot (Pökoot / Suk) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Sir Harry H. Johnston (1902), Hon. K. R. Dundas (1910), Mervyn W. H. Beech (1911 \"The Suk: Their Language and Folklore\"), and Juxon Barton (1921).",
    "totalEntries": 2801,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 10
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 68
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 124
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 157
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 189
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 163
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 113
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 88
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 314
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 112
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 34
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 12
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 50
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 67
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "💬",
        "count": 1083
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 217
      }
    ]
  },
  {
    "languageId": "taveta",
    "languageName": "Taveta (Kitaveta)",
    "family": "bantu",
    "nativeName": "Kitaveta / Kituweta",
    "script": "Latin",
    "speakerCount": 25000,
    "counties": [
      "Taita-Taveta"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Taveta (Kitaveta / Kituweta) vocabulary compiled from Rev. A. R. Steggall (1892–1906), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), A. C. Hollis (1910–1911), Sir Harry H. Johnston (1919 #15), and BFBS (1921).",
    "totalEntries": 457,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 3
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 29
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 31
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫀",
        "count": 51
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🐄",
        "count": 45
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌍",
        "count": 48
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🌾",
        "count": 23
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 53
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 33
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 15
      }
    ]
  },
  {
    "languageId": "daasanach",
    "languageName": "Daasanach (Dhaasanac)",
    "family": "cushitic",
    "nativeName": "'Af Dhaasanac",
    "script": "Latin",
    "speakerCount": 65000,
    "counties": [
      "Marsabit"
    ],
    "hasAudio": false,
    "dictionaryVersion": "3.0",
    "lastUpdated": "2026-10-31",
    "contributorNote": "Daasanach ('Af Dhaasanac / Dasanech / Geleba / Reshiat) Lowland East Cushitic (Omo-Tana) dictionary compiled manually from Václav Blažek (2011) 'Dasanech Language: State-of-the-Art' (citing Mauro Tosco 2001 'The Dhaasanac Language', Hans-Jürgen Sasse 1974/1976, E. R. Shackleton 1933), Sumiyo Nishiguchi (2004) 'Consonant Assimilation and Sonority: A Case Study in Daasanach' (fieldwork at Ileret, Marsabit County, Kenya, 2003–2004), and Lieut. Ludwig von Höhnel (1894) 'Discovery of Lakes Rudolf and Stefanie' (Reshiat / Buma / Marle on the northeastern shore of Lake Turkana).",
    "totalEntries": 141,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 3
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 13
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 11
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 20
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 14
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 19
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 6
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 4
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 21
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 17
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 2
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 8
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 3
      }
    ]
  }
];

export const DICT_META_MAP: Record<string, DictMeta> = Object.fromEntries(
  ALL_DICT_METAS.map((m) => [m.languageId, m])
);

export const ALL_CATEGORY_IDS: { id: string; name: string; icon: string }[] = [
  {
    "id": "greetings",
    "name": "Greetings & Farewells",
    "icon": "👋"
  },
  {
    "id": "numbers",
    "name": "Numbers & Counting",
    "icon": "🔢"
  },
  {
    "id": "family",
    "name": "Family, People & Kinship",
    "icon": "👨‍👩‍👧‍👦"
  },
  {
    "id": "body",
    "name": "Body Parts & Health",
    "icon": "🫁"
  },
  {
    "id": "animals",
    "name": "Animals, Livestock & Wildlife",
    "icon": "🦁"
  },
  {
    "id": "nature",
    "name": "Nature, Environment & Geography",
    "icon": "🌿"
  },
  {
    "id": "food",
    "name": "Food, Drink & Agriculture",
    "icon": "🍲"
  },
  {
    "id": "home",
    "name": "Home, Tools & Material Culture",
    "icon": "🏠"
  },
  {
    "id": "verbs",
    "name": "Core Verbs & Actions",
    "icon": "🏃"
  },
  {
    "id": "adjectives",
    "name": "Adjectives, Qualities & Grammar",
    "icon": "✨"
  },
  {
    "id": "travel",
    "name": "Travel, Directions & Navigation",
    "icon": "🚌"
  },
  {
    "id": "shopping",
    "name": "Trade, Money & Measures",
    "icon": "🛒"
  },
  {
    "id": "emergency",
    "name": "Health, Safety, Law & Conflict",
    "icon": "🚨"
  },
  {
    "id": "time",
    "name": "Time, Seasons & Calendar",
    "icon": "⏰"
  },
  {
    "id": "phrases",
    "name": "Common Expressions & Vocabulary",
    "icon": "🗣️"
  },
  {
    "id": "culture-history",
    "name": "Culture, Clans & Historical Corpus",
    "icon": "📜"
  }
];

export const TOTAL_DICTIONARY_ENTRIES: number = 77965;

export const INITIAL_RANDOM_WORDS: { entry: DictEntry; langName: string; langId: string }[] = [
  {
    "entry": {
      "english": "Welcome",
      "translation": "Baga nagaan dhufte",
      "pronunciation": "ba-ga na-gaan dhuf-te",
      "context": "Borana / Oromo welcome",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "Tomorrow",
      "translation": "bori / boru",
      "pronunciation": "boh-ree / boh-roo",
      "context": "Tutschek (1845, pp. 89–90)",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "Salute",
      "translation": "hófu dáme",
      "pronunciation": "hofu dame",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "Thank",
      "translation": "gelatéfate",
      "pronunciation": "gelatefate",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "News",
      "translation": "ódu",
      "pronunciation": "odu",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)",
      "audioFile": null
    },
    "langName": "Borana (Oromo)",
    "langId": "borana"
  },
  {
    "entry": {
      "english": "You are educated",
      "translation": "Wĩ mũthomũ",
      "pronunciation": "wi muthomu",
      "context": "Wikipedia Embu_language — Sample phrases",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "Stop the nonsense",
      "translation": "Tiga wana / Tigana na ũrimũ",
      "pronunciation": "tiga wana",
      "context": "Wikipedia Embu_language — Sample phrases",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "Give me some money",
      "translation": "Mve mbeca / Mva mbia",
      "pronunciation": "mve mbeca / mva mbia",
      "context": "Wikipedia Embu_language — Sample phrases",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "God is good",
      "translation": "Ngai nĩ mwaro",
      "pronunciation": "ngai ni mwaro",
      "context": "Wikipedia Embu_language — Sample phrases",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "I am blessed",
      "translation": "Nĩmũrathime",
      "pronunciation": "nimurathime",
      "context": "Wikipedia Embu_language — Sample phrases",
      "audioFile": null
    },
    "langName": "Embu (Kĩembu)",
    "langId": "embu"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "Serian",
      "pronunciation": "seh-ri-an",
      "context": "Ilchamus (Camus) greeting & blessing",
      "audioFile": null
    },
    "langName": "Ilchamus (Njemps)",
    "langId": "ilchamus"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Ashe / Ashe oleng",
      "pronunciation": "ah-sheh",
      "context": "Ilchamus expression of gratitude",
      "audioFile": null
    },
    "langName": "Ilchamus (Njemps)",
    "langId": "ilchamus"
  },
  {
    "entry": {
      "english": "Today",
      "translation": "taata",
      "pronunciation": "tah-tah",
      "context": "Verified comparative entry across Kenyan nilotic corpus",
      "audioFile": null
    },
    "langName": "Ilchamus (Njemps)",
    "langId": "ilchamus"
  },
  {
    "entry": {
      "english": "Tomorrow",
      "translation": "taisere",
      "pronunciation": "tah-ee-seh-reh",
      "context": "Verified comparative entry across Kenyan nilotic corpus",
      "audioFile": null
    },
    "langName": "Ilchamus (Njemps)",
    "langId": "ilchamus"
  },
  {
    "entry": {
      "english": "Yesterday",
      "translation": "ngole",
      "pronunciation": "ngoh-leh",
      "context": "Verified comparative entry across Kenyan nilotic corpus",
      "audioFile": null
    },
    "langName": "Ilchamus (Njemps)",
    "langId": "ilchamus"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "Kalyet",
      "pronunciation": "kahl-yeht",
      "context": "Hollis 1909 Nandi vocabulary",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "Evening, nightfall",
      "translation": "lakat",
      "pronunciation": "lakat",
      "context": "Nandi / Kalenjin (Hollis 1909, p. 153)",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "Thank",
      "translation": "ile-chi kongoi",
      "pronunciation": "ile-chi kongoi",
      "context": "A. C. Hollis (1909) The Nandi: Their Language and Folk-Lore (English-Nandi Vocabulary)",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "Pardon, to",
      "translation": "mwaete",
      "pronunciation": "mwaete",
      "context": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Nandi)",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "All",
      "translation": "tukul",
      "pronunciation": "tukul",
      "context": "A. C. Hollis (1909) The Nandi: Their Language and Folk-Lore (English-Nandi Vocabulary)",
      "audioFile": null
    },
    "langName": "Kalenjin",
    "langId": "kalenjin"
  },
  {
    "entry": {
      "english": "Evening",
      "translation": "wio",
      "pronunciation": "wio",
      "context": "Hildegarde Hinde (1904) — Kamba",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Morning",
      "translation": "mthenia",
      "pronunciation": "mthenia",
      "context": "Hildegarde Hinde (1904) — Kamba",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "amanni",
      "pronunciation": "amanni",
      "context": "Hildegarde Hinde (1904) — Kamba",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Please",
      "translation": "kwendua",
      "pronunciation": "kwendua",
      "context": "Hildegarde Hinde (1904) — Kamba",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Salutation",
      "translation": "o voo",
      "pronunciation": "o voo",
      "context": "Hildegarde Hinde (1904) — Kamba (Ulu dialect)",
      "audioFile": null
    },
    "langName": "Kamba (Kĩkamba)",
    "langId": "kamba"
  },
  {
    "entry": {
      "english": "Evening",
      "translation": "waiini",
      "pronunciation": "waiini",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Friend",
      "translation": "muratta, munduitu",
      "pronunciation": "muratta, munduitu",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Morning",
      "translation": "mthenya",
      "pronunciation": "mthenya",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "naiita",
      "pronunciation": "naiita",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Please",
      "translation": "kuenda",
      "pronunciation": "kuenda",
      "context": "Hildegarde Hinde (1904) — Kikuyu (Jogowini)",
      "audioFile": null
    },
    "langName": "Kikuyu (Gĩkũyũ)",
    "langId": "kikuyu"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "Omorembe",
      "pronunciation": "oh-moh-rehm-beh",
      "context": "Hobley 1902 & Johnston 1919 #7",
      "audioFile": null
    },
    "langName": "Kisii (Ekegusii)",
    "langId": "kisii"
  },
  {
    "entry": {
      "english": "Good morning",
      "translation": "Bwakire buya",
      "pronunciation": "Bwakire buya",
      "context": "Wikipedia Gusii language — Sample phrases",
      "audioFile": null
    },
    "langName": "Kisii (Ekegusii)",
    "langId": "kisii"
  },
  {
    "entry": {
      "english": "Good night",
      "translation": "Obotuko obuya",
      "pronunciation": "Obotuko obuya",
      "context": "Wikipedia Gusii language — Sample phrases",
      "audioFile": null
    },
    "langName": "Kisii (Ekegusii)",
    "langId": "kisii"
  },
  {
    "entry": {
      "english": "Evening",
      "translation": "mogoroba",
      "pronunciation": "mogoroba",
      "context": "Wikipedia Gusii language — Sample phrases",
      "audioFile": null
    },
    "langName": "Kisii (Ekegusii)",
    "langId": "kisii"
  },
  {
    "entry": {
      "english": "One",
      "translation": "-mu, -mo / -mo, -mwe",
      "pronunciation": "-mu, -mo / -mo, -mwe",
      "context": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A6: Ki-Guzii & Ki-Koria)",
      "audioFile": null
    },
    "langName": "Kisii (Ekegusii)",
    "langId": "kisii"
  },
  {
    "entry": {
      "english": "Salutation",
      "translation": "murembi",
      "pronunciation": "mu-remb-i",
      "context": "Ketosh (Lubukusu / Masaba) — C. W. Hobley, Eastern Uganda (1902, pp. 92–95)",
      "audioFile": null
    },
    "langName": "Luhya (Luyia)",
    "langId": "luhya"
  },
  {
    "entry": {
      "english": "Salutation",
      "translation": "msawa, ekui",
      "pronunciation": "msa-wa e-kui",
      "context": "Lusinga / Chula (Suba-Luhya of Rusinga Island) — Hobley, Eastern Uganda (1902, pp. 92–95)",
      "audioFile": null
    },
    "langName": "Luhya (Luyia)",
    "langId": "luhya"
  },
  {
    "entry": {
      "english": "Bowels",
      "translation": "Ama-la / Kama-la",
      "pronunciation": "ama-la / kama-la",
      "context": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)",
      "audioFile": null
    },
    "langName": "Luhya (Luyia)",
    "langId": "luhya"
  },
  {
    "entry": {
      "english": "Gun",
      "translation": "Ωmu-rondo / Mundu. Kumu-rundu",
      "pronunciation": "mu-rondo",
      "context": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)",
      "audioFile": null
    },
    "langName": "Luhya (Luyia)",
    "langId": "luhya"
  },
  {
    "entry": {
      "english": "Place",
      "translation": "A-handu / Esi-fo. Aha / Handu",
      "pronunciation": "a-handu / esi-fo. aha / handu",
      "context": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)",
      "audioFile": null
    },
    "langName": "Luhya (Luyia)",
    "langId": "luhya"
  },
  {
    "entry": {
      "english": "Elder",
      "translation": "Jaduong'",
      "pronunciation": "jah-dwong",
      "context": "Respected elder",
      "audioFile": "https://archive.org/download/handbook_kavirondo3_1203/kavirondo3_01_millhill_128kb.mp3"
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "Chief",
      "translation": "Ruoth / Jatelo",
      "pronunciation": "rwohth / jah-teh-loh",
      "context": "Chief or leader",
      "audioFile": "https://archive.org/download/handbook_kavirondo3_1203/kavirondo3_01_millhill_128kb.mp3"
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "King",
      "translation": "Ruoth",
      "pronunciation": "rwohth",
      "context": "King, lord, or sovereign",
      "audioFile": "https://archive.org/download/handbook_kavirondo3_1203/kavirondo3_01_millhill_128kb.mp3"
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "Work",
      "translation": "Tich",
      "pronunciation": "teech",
      "context": "Work or labor (noun); Tiyo (to work)",
      "audioFile": "https://archive.org/download/handbook_kavirondo3_1203/kavirondo3_01_millhill_128kb.mp3"
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "Market",
      "translation": "Chiro",
      "pronunciation": "chee-roh",
      "context": "Marketplace",
      "audioFile": "https://archive.org/download/handbook_kavirondo3_1203/kavirondo3_01_millhill_128kb.mp3"
    },
    "langName": "Dholuo (Luo)",
    "langId": "luo"
  },
  {
    "entry": {
      "english": "Many black goats",
      "translation": "kumuk ndari nārok",
      "pronunciation": "kumuk ndari nārok",
      "context": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Many red cows",
      "translation": "ngishu nyainyuki kumuk",
      "pronunciation": "ngishu nyainyuki kumuk",
      "context": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Two big men",
      "translation": "sabuki orrldongana ari",
      "pronunciation": "sabuki orrldongana ari",
      "context": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Four good children",
      "translation": "supati konengera ungwun",
      "pronunciation": "supati konengera ungwun",
      "context": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Five large cows",
      "translation": "sabuki ngishu miet",
      "pronunciation": "sabuki ngishu miet",
      "context": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary",
      "audioFile": null
    },
    "langName": "Maasai (Maa)",
    "langId": "maasai"
  },
  {
    "entry": {
      "english": "Thank you very much",
      "translation": "Nĩwega mũno",
      "pronunciation": "nĩwega mũno",
      "context": "Kîembu / Kĩmĩĩrũ",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "Nine",
      "translation": "kenda",
      "pronunciation": "kehn-dah",
      "context": "Johnston 1919 p. 72 #11a Meru",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "Eight",
      "translation": "inyanya",
      "pronunciation": "ee-nyah-nyah",
      "context": "Johnston 1919 p. 72 #11a Meru",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "Seven",
      "translation": "mũgwanja",
      "pronunciation": "moo-gwahn-jah",
      "context": "Johnston 1919 p. 72 #11a Meru",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "Six",
      "translation": "ithanthatu",
      "pronunciation": "ee-thahn-thah-too",
      "context": "Johnston 1919 p. 72 #11a Meru",
      "audioFile": null
    },
    "langName": "Meru (Kĩmĩĩrũ)",
    "langId": "meru"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "Dheri / Amani",
      "pronunciation": "dheh-ree",
      "context": "Krapf & Rebmann 1887 Nika Dictionary",
      "audioFile": null
    },
    "langName": "Mijikenda (Giriama)",
    "langId": "mijikenda"
  },
  {
    "entry": {
      "english": "Farewell",
      "translation": "koḥeri",
      "pronunciation": "koheri",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka adv.)",
      "audioFile": null
    },
    "langName": "Mijikenda (Giriama)",
    "langId": "mijikenda"
  },
  {
    "entry": {
      "english": "Greet",
      "translation": "lamúsa",
      "pronunciation": "lamusa",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)",
      "audioFile": null
    },
    "langName": "Mijikenda (Giriama)",
    "langId": "mijikenda"
  },
  {
    "entry": {
      "english": "Thank",
      "translation": "pa mumvéra",
      "pronunciation": "pa mumvera",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka v. a.)",
      "audioFile": null
    },
    "langName": "Mijikenda (Giriama)",
    "langId": "mijikenda"
  },
  {
    "entry": {
      "english": "News",
      "translation": "c̣ábari",
      "pronunciation": "c abari",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kiníka s.)",
      "audioFile": null
    },
    "langName": "Mijikenda (Giriama)",
    "langId": "mijikenda"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Asante / Nashukuru",
      "pronunciation": "a-san-te",
      "context": "Kipfokomo",
      "audioFile": null
    },
    "langName": "Pokomo (Kipfokomo)",
    "langId": "pokomo"
  },
  {
    "entry": {
      "english": "Welcome",
      "translation": "Karibu mudzini",
      "pronunciation": "ka-ri-bu mu-dzi-ni",
      "context": "Kipfokomo ('Welcome to the village')",
      "audioFile": null
    },
    "langName": "Pokomo (Kipfokomo)",
    "langId": "pokomo"
  },
  {
    "entry": {
      "english": "Yesterday",
      "translation": "dzana",
      "pronunciation": "dzah-nah",
      "context": "Verified comparative entry across Kenyan bantu corpus",
      "audioFile": null
    },
    "langName": "Pokomo (Kipfokomo)",
    "langId": "pokomo"
  },
  {
    "entry": {
      "english": "Farewell",
      "translation": "mungu kahúve nágĕa",
      "pronunciation": "mungu kahuve nagea",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo adv.)",
      "audioFile": null
    },
    "langName": "Pokomo (Kipfokomo)",
    "langId": "pokomo"
  },
  {
    "entry": {
      "english": "Greet",
      "translation": "kedéria",
      "pronunciation": "kederia",
      "context": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo v. a.)",
      "audioFile": null
    },
    "langName": "Pokomo (Kipfokomo)",
    "langId": "pokomo"
  },
  {
    "entry": {
      "english": "Very fierce",
      "translation": "Korom nyaman",
      "pronunciation": "ko-rom nya-man",
      "context": "Juxon Barton (1921) & Beech (1911) — Suk/Pokot",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "mīs",
      "pronunciation": "mīs",
      "context": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (English-Suk Vocabulary)",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "One hundred",
      "translation": "pokol",
      "pronunciation": "po-kol",
      "context": "Beech (1911, pp. 66–68) — Pökoot (Suk)",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "I am the best of all.",
      "translation": "Ocha karam ma-mi-nye.",
      "pronunciation": "ocha karam ma-mi-nye.",
      "context": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "They don't amount to ten.",
      "translation": "Me-t-ei-nye taman.",
      "pronunciation": "me-t-ei-nye taman.",
      "context": "Mervyn W. H. Beech (1911) The Suk: Their Language and Folklore (Useful & Idiomatic Phrases)",
      "audioFile": null
    },
    "langName": "Pokot (Pökoot)",
    "langId": "pokot"
  },
  {
    "entry": {
      "english": "Yes",
      "translation": "Aa",
      "pronunciation": "aa",
      "context": "Bernd Heine (1976) — Notes on the Rendille Language",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "Tomorrow",
      "translation": "barri",
      "pronunciation": "bahr-ree",
      "context": "Verified comparative entry across Kenyan cushitic corpus",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "Yesterday",
      "translation": "shale",
      "pronunciation": "shah-leh",
      "context": "Verified comparative entry across Kenyan cushitic corpus",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "Two",
      "translation": "láma",
      "pronunciation": "la-ma",
      "context": "Bernd Heine (1976) — Notes on the Rendille Language",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "Three",
      "translation": "séyyah",
      "pronunciation": "sey-yah",
      "context": "Bernd Heine (1976) — Notes on the Rendille Language",
      "audioFile": null
    },
    "langName": "Rendille (Afi Ren'dille)",
    "langId": "rendille"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Ashe / Ashe oleng",
      "pronunciation": "ah-sheh oh-leng",
      "context": "Samburu expression of gratitude",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "Five",
      "translation": "ímɟêt / ímʄêt",
      "pronunciation": "im-jet",
      "context": "Wikipedia Nilotic_languages — Samburu numerals",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "Six",
      "translation": "ílê",
      "pronunciation": "i-le",
      "context": "Wikipedia Nilotic_languages — Samburu numerals",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "Seven",
      "translation": "sápâ",
      "pronunciation": "sa-pa",
      "context": "Wikipedia Nilotic_languages — Samburu numerals",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "Eight",
      "translation": "ísɟêt / ísʄêt",
      "pronunciation": "is-jet",
      "context": "Wikipedia Nilotic_languages — Samburu numerals",
      "audioFile": null
    },
    "langName": "Samburu (Sampur)",
    "langId": "samburu"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "Nabad",
      "pronunciation": "nah-bahd",
      "context": "Kirk 1905 & Larajasse 1897",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Carry, bring",
      "translation": "sid",
      "pronunciation": "sid",
      "context": "Rev. Fr. Evangelist de Larajasse (1897) Somali-English and English-Somali Dictionary [v.tr.]",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Thank God",
      "translation": "Illàhhi maháddi",
      "pronunciation": "illàhhi maháddi",
      "context": "Lt. J. W. C. Kirk (1905) A Grammar of the Somali Language",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Give news of yourself",
      "translation": "'ss ka wárran",
      "pronunciation": "'ss ka wárran",
      "context": "Lt. J. W. C. Kirk (1905) A Grammar of the Somali Language",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Give news of the place",
      "translation": "mèsha ka wárran",
      "pronunciation": "mèsha ka wárran",
      "context": "Lt. J. W. C. Kirk (1905) A Grammar of the Somali Language",
      "audioFile": null
    },
    "langName": "Somali",
    "langId": "somali"
  },
  {
    "entry": {
      "english": "Evening",
      "translation": "jioni",
      "pronunciation": "jioni",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Friend",
      "translation": "rafiki, pl. marafiki",
      "pronunciation": "rafiki",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Morning",
      "translation": "subui, assubui",
      "pronunciation": "subui, assubui",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "amani",
      "pronunciation": "amani",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Please",
      "translation": "kupendeza",
      "pronunciation": "kupendeza",
      "context": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili",
      "audioFile": null
    },
    "langName": "Swahili (Kiswahili)",
    "langId": "swahili"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Chavuche / Asante",
      "pronunciation": "chavuche",
      "context": "Taita (Kidawida) expression of gratitude",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
  },
  {
    "entry": {
      "english": "Yes",
      "translation": "Ee / Haya",
      "pronunciation": "ee / haya",
      "context": "Wray (1894) — Taita",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
  },
  {
    "entry": {
      "english": "No",
      "translation": "Ndu / A'a",
      "pronunciation": "ndu",
      "context": "Wray (1894) — Taita",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
  },
  {
    "entry": {
      "english": "News",
      "translation": "uvoro, ilago",
      "pronunciation": "uvoro, ilago",
      "context": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
  },
  {
    "entry": {
      "english": "Pardon",
      "translation": "ku-sigo",
      "pronunciation": "ku-sigo",
      "context": "Rev. J. Alfred Wray (1894) An Elementary Introduction to the Taita Language (Sagalla Dialect)",
      "audioFile": null
    },
    "langName": "Taita (Kidawida)",
    "langId": "taita"
  },
  {
    "entry": {
      "english": "Thank you",
      "translation": "Ni wega / Chavuche",
      "pronunciation": "nee weh-gah / chah-voo-cheh",
      "context": "Kitaveta gratitude",
      "audioFile": null
    },
    "langName": "Taveta (Kitaveta)",
    "langId": "taveta"
  },
  {
    "entry": {
      "english": "Hello",
      "translation": "Jahako",
      "pronunciation": "ja-ha-ko",
      "context": "Wikipedia Taveta_language — Taveta greetings",
      "audioFile": null
    },
    "langName": "Taveta (Kitaveta)",
    "langId": "taveta"
  },
  {
    "entry": {
      "english": "Yesterday",
      "translation": "igolo",
      "pronunciation": "ee-goh-loh",
      "context": "Verified comparative entry across Kenyan bantu corpus",
      "audioFile": null
    },
    "langName": "Taveta (Kitaveta)",
    "langId": "taveta"
  },
  {
    "entry": {
      "english": "Three",
      "translation": "itatu",
      "pronunciation": "i-ta-tu",
      "context": "Johnston (1919) — Kitaveta numerals",
      "audioFile": null
    },
    "langName": "Taveta (Kitaveta)",
    "langId": "taveta"
  },
  {
    "entry": {
      "english": "Four",
      "translation": "ina",
      "pronunciation": "i-na",
      "context": "Johnston (1919) — Kitaveta numerals",
      "audioFile": null
    },
    "langName": "Taveta (Kitaveta)",
    "langId": "taveta"
  },
  {
    "entry": {
      "english": "Hello",
      "translation": "Yoga",
      "pronunciation": "Yoga",
      "context": "Wikipedia Teso language — Vocabulary",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "My name is",
      "translation": "Eka'kiror",
      "pronunciation": "Eka'kiror...",
      "context": "Wikipedia Teso language — Vocabulary",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "See you again",
      "translation": "Awanyunos bobo",
      "pronunciation": "Awanyunos bobo",
      "context": "Wikipedia Teso language — Vocabulary",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "Peace",
      "translation": "ekinok",
      "pronunciation": "ekinok",
      "context": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Elgumi / Ateso)",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "Thank you very much",
      "translation": "Eyalama noi",
      "pronunciation": "e-ya-la-ma noi",
      "context": "Rev. A. L. Kitching, A Handbook of the Ateso Language (1915)",
      "audioFile": null
    },
    "langName": "Teso (Ateso)",
    "langId": "teso"
  },
  {
    "entry": {
      "english": "Health to your cattle",
      "translation": "Mata ng'atuk",
      "pronunciation": "mah-tah ngah-took",
      "context": "Pastoral greeting inquiring after cattle herds. Response: 'Mata ouwi' (health to your village). (Barton 1921)",
      "audioFile": null
    },
    "langName": "Turkana",
    "langId": "turkana"
  },
  {
    "entry": {
      "english": "Health to your village",
      "translation": "Mata ouwi",
      "pronunciation": "mah-tah oh-wee",
      "context": "Pastoral blessing wishing wellbeing upon the homestead and kraal. (Barton 1921)",
      "audioFile": null
    },
    "langName": "Turkana",
    "langId": "turkana"
  },
  {
    "entry": {
      "english": "Health to your children",
      "translation": "Mata ng'idwi",
      "pronunciation": "mah-tah ngee-dwee",
      "context": "Pastoral blessing for family and children. Response: 'Mata ariama'. (Barton 1921)",
      "audioFile": null
    },
    "langName": "Turkana",
    "langId": "turkana"
  },
  {
    "entry": {
      "english": "Health to our meetings",
      "translation": "Mata ariama",
      "pronunciation": "mah-tah ah-ree-ah-mah",
      "context": "Greeting reply wishing health and prosperity to repeated gatherings and fellowship. (Barton 1921)",
      "audioFile": null
    },
    "langName": "Turkana",
    "langId": "turkana"
  },
  {
    "entry": {
      "english": "Health to your property",
      "translation": "Mata ng'ebarin",
      "pronunciation": "mah-tah ngeh-bah-reen",
      "context": "Greeting inquiring after livestock wealth and possessions. Response: 'Mata ng'abero'. (Barton 1921)",
      "audioFile": null
    },
    "langName": "Turkana",
    "langId": "turkana"
  },
  {
    "entry": {
      "english": "Peace / Well-being",
      "translation": "nagaa / nagaay",
      "pronunciation": "nah-gaa / nah-gaay",
      "context": "Daasanach greeting of peace shared across the Omo–Turkana pastoral frontier (Tosco 2001 / Nishiguchi 2004)",
      "audioFile": null
    },
    "langName": "Daasanach (Dhaasanac)",
    "langId": "daasanach"
  },
  {
    "entry": {
      "english": "Is it peace? / Are you well?",
      "translation": "Ma nagaa?",
      "pronunciation": "mah nah-gaa",
      "context": "Standard Daasanach greeting in Ileret and North Horr, Marsabit County (Tosco 2001)",
      "audioFile": null
    },
    "langName": "Daasanach (Dhaasanac)",
    "langId": "daasanach"
  },
  {
    "entry": {
      "english": "It is peace / I am well",
      "translation": "Nagaa",
      "pronunciation": "nah-gaa",
      "context": "Standard response to 'Ma nagaa?' (Tosco 2001)",
      "audioFile": null
    },
    "langName": "Daasanach (Dhaasanac)",
    "langId": "daasanach"
  },
  {
    "entry": {
      "english": "Yes (affirmative)",
      "translation": "ee / ii",
      "pronunciation": "ee / ii",
      "context": "Daasanach affirmative particle (Tosco 2001 / Blažek 2011)",
      "audioFile": null
    },
    "langName": "Daasanach (Dhaasanac)",
    "langId": "daasanach"
  },
  {
    "entry": {
      "english": "No / Not (negative particle)",
      "translation": "ma / m'ning",
      "pronunciation": "mah / m-ning",
      "context": "Daasanach negative particle (Tosco 2001 / Blažek 2011)",
      "audioFile": null
    },
    "langName": "Daasanach (Dhaasanac)",
    "langId": "daasanach"
  }
];
