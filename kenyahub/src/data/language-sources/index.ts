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
 * Public Domain reference corpus (published 1842–1929) including all 66 historical linguistic,
 * grammatical, ethnographic, and modern scholarly works in language-sources/raw/ plus clean
 * open-web, Hugging Face (CC0-1.0), and GitHub (Unicode CLDR / Common Voice CC0) datasets.
 * Declarative array with all source enrichments merged in place.
 */
export const LANGUAGE_SOURCES: LanguageSource[] = [
  {
    "id": "krapf-galla-vocab-1842",
    "title": "Vocabulary of the Galla Language (Afaan Oromoo / Borana)",
    "fileName": "Vocabulary Of The Galla Language 1842.md",
    "processedPath": "language-sources/raw/Vocabulary Of The Galla Language 1842.md",
    "languages": [
      "borana",
      "somali"
    ],
    "published": "1842",
    "contribution": "First comprehensive English–Oromo/Borana lexicon (Title Page, Preface by Rev. C. W. Isenberg pp. i–ii, 42 double-column A–Z Vocabulary pages pp. 1–42 containing 2,194 cells, and Publisher's Advertisements and Colophon on p. [43] [PDF pp. 1–56]) compiled in Shoa in Galla and German in summer 1841 by Rev. Johann Ludwig Krapf and translated into English with part-of-speech classifications (verified against Krapf's Galla translations of St. Matthew and St. John, Chs. 1–5) and comparative cognate annotations across Amharic, Ethiopic (Ge'ez), Tigre, Dankali (Afar), Somāli (warabēsa), Shoa (dahêra, gabata), Arabic, Hebrew, and Latin by Rev. C. W. Isenberg (London: Printed for the Church Missionary Society by Richard Watts, Crown Court, Temple Bar, 1842 — Public Domain; Baptist Missionary Society Library No. P. 1. 5, S. F. Hassan Advocate Mombasa, UCSB Library X-30265 / UC Southern Regional Library Facility A 000 525 250 7).",
    "appUses": [
      "dictionary",
      "comparative translator",
      "grammar lessons"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (pp. i–ii, 1–42, Colophon p. [43]; all 837 Markdown lines / 2,194 vocabulary cells) into borana.json, BORANA_GRAMMAR_SECTIONS, BORANA_UNITS, cultural-wisdom.ts, and blog-posts.ts."
  },
  {
    "id": "tutschek-galla-oromo-1844",
    "title": "Dictionary of the Galla Language / Lexicon der Galla Sprache (Part I: Galla–English–German [1844]; Part II: English–Galla [1845])",
    "fileName": "dictionary_of_the_galla_language_complete.md",
    "processedPath": "language-sources/raw/dictionary_of_the_galla_language_complete.md",
    "languages": [
      "borana"
    ],
    "published": "1844–1845",
    "contribution": "Complete bilingual/trilingual Oromo/Borana dictionary by Charles Tutschek (Karl Tutschek, b. Bayreuth Jan. 13, 1815; d. Sept. 6, 1843), published and compiled in Part II by his brother Lawrence Tutschek, M.D. (Lorenz Tutschek; dedicated to His Royal Highness Maximilian, Crown Prince of Bavaria; printed by Dr. Franz Wild, Munich: Part I Galla–English–German, Sept. 1844, pp. I–LIX, 1–205; Part II English–Galla, 1845, pp. 1–126 — Public Domain): bilingual English & German Prefaces documenting the 4 redeemed African youths entrusted by Duke Maximilian in Bavaria on Nov. 18, 1838 (Akafed'e Dalle of Botchi in Hambo, province of Liban, d. May 17, 1841; Djalo Djondan Aré of Deling'n in Tumale-Tokoken under King Wofter Mat; Mussalam Motekutu of Methem in Darfur; and 12-year-old Awan of Dar Denka, identified via Dinka kur \"mountain\" and kir \"river\") plus Galla authorities Otshu Aga of Urgeza in Sibu (who exchanged 14 Galla letters with Akafed'e and learned songs from Bilile of Guma, d. Oct. 27, 1840) and Aman Gonda of Hibi in Goma (son of an Aba Fuño magistrate, brought by Duke Paul William of Württemberg [H. P.] at Mergentheim); 30-letter phonological alphabet & 8 derived verbal forms; monotheistic worship of Wacᵃ/Wacayo and refutation of tree-worship (wateza, lafto Michaila, makaniza, meeça, ba as consecrated assembly trees); Boranna (subdivision Wadjo/Watcho) vs. Djarzo sects; 5 circumcision (djara/buta) rank tribes (1. Horad'a, 2. Midjile, 3. Robale, 4. Kilole, 5. Dulo, with tchala priests and cori naga food); judicial & political hierarchy (moti/meti, zoreza/zalgana, aba ganda, aba lafa, aba fuño, cuge, cabi, erada, mangudo/bera, gude dubi/yai dyidu, findja Lali cascade in Hambo, gindo stocks, guma blood-money, qit'e sharecropper vs. yagudo/d'abo day-labourer, gubziza vassal, gada guda/t'ina & balfad'a/baldja adoption); kalatcha oath under the lafto Michaila and t'wu — aki — t'wu — tili! grass-spitting oath; amole salt-bar fractions (mogor = 2, tchabnana = 1/2, kurmana = 1/4, gimaz'i = 1/8, gedele/fotoqe = 1/12, zanaga/çarmama) and biri (Maria Theresa silver dollar with S. F. = 23 amole [Ak.] / 20 amole [Am.]); 7-day week (Gifti/Kamiza, Djimada, Zambata t'ina [preceded by Cadame], Zambata guda, Zaño, Maczaño/Tafno, Arbi), months (1st Hadoleza/Hadami, 2nd Hagayo, 3rd Wadabadji, Furma), seasons (birra ushered in by yellow kelo Stevia orientalis at the Magzala New Year festival, bona, arfaza, ganna), and daily time divisions (ganama aboro, ganama, dirama, ware, ware korate, oba [12 o'clock, adun guba keza, oba dyabi, and afternoon hours oba lamuti, oba zaditi, oba afuriti, oba z'aniti], galgala, wari, galgala dimemeza); Akafed'e's verbatim ethnomedical treatise on curing tapeworm (d'uma, early stage mini) with het'o (Brayera anthelminthica) flowers and d'ogonu mallow bark; all 23 verbatim Magm. proverbs and 9 Wetu songs; and the complete Galla–English–German (pp. 1–205) and English–Galla (pp. 1–126) lexicons.",
    "appUses": [
      "dictionary",
      "comparative translator",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line across Part I (1844, pp. I–LIX, 1–205) and Part II (1845, pp. 1–126) into borana.json, BORANA_GRAMMAR_SECTIONS, BORANA_UNITS, and KENYAN_PROVERBS."
  },
  {
    "id": "tutschek-galla-grammar-1845",
    "title": "A Grammar of the Galla Language (By Charles Tutschek, Edited by Lawrence Tutschek, M.D.)",
    "fileName": "A Grammar Of The Galla Language 1845.md",
    "processedPath": "language-sources/raw/A Grammar Of The Galla Language 1845.md",
    "languages": [
      "borana"
    ],
    "published": "1845",
    "contribution": "Complete Oromo/Borana grammatical treatise by Charles Tutschek, edited by Lawrence Tutschek, M.D., and translated from German by M. J. Smead of Richmond, Virginia (dedicated to Sir Thomas Dyke Acland Bart.; printed by Dr. Franz Wild, Munich, 1845 — Public Domain; compiled with native speakers Otshu Aga of Sibu, Aman of Goma, and Akafed'e Dalle of Hambo): 30-letter phonetic system + additional sounds (tsh, Slavonic ł, Goma nasal ˜, breathless t, p/bb), 3 vowel contractions (aa > â, awa > ã, aya > à), 6 breath-short vowels (ᵃ ᵉ ⁱ ᵒ ᵘ), 8 derived verbal forms (I Root, II Middle -ad'a, III Causative -za/-ziza/-tsha/-eza/-z'iza, IV Causative-Middle -fad'a/-zad'a, V -ziza, VI -zifad'a, VII -ziziza, VIII -zizifad'a) + Passive (-ama), Onomatopoeticals (djed'a, -za, -d'a), 24 Noun Denominatives & Deadjectival (-oma), Reduplicated Intensitives, 4 Modes (Indicative, Imperative, Infinitive in -u/-d'z'u, Participle in -a/-tu) + Subjunctive in -u + 5 affixed particle modes (-re, -mi, -ti, -yi, -ni), 4 Tenses + 4 proximate future stages with gà, 3 Conjugations (adema, tshiza, tà/boa), 3 Negation mechanisms (hin-, -miti, and 4 negative verbs dida, bad'a, d'aba, ola), collective feminine nouns, Accusative-base declension & Nominative suffixes (-n, -i, -fni, -ti, -ni), cardinals 1–100,000, ordinals (ini dura/hangafa vs. gudiru/ini boda, -tiana), 21 social numerals (-anu + ladz'u), 4 amole salt-bar fractions (tchabnana 1/2, karmana 1/4, gimaz'i 3/4, gedele/gadele 1/8), 7 pronoun classes & 7 relative clause types, particles & clausal -fu/-fi/-f (Djulule & Gadiyo dialogue), 3 native prayers (16-verse Hambo–Hamaya War Prayer, Morning Prayer, Evening Prayer), 2 1840 Munich letters by Otshu Aga & Akafed'e Dalle, and rear endpaper comparative notes.",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "grammar",
      "vocabulary",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (§§ 1–255, pp. I–VIII, 1–91, and endpaper notes pp. 105, 107) into borana.json, BORANA_GRAMMAR_SECTIONS, BORANA_UNITS, and KENYAN_PROVERBS."
  },
  {
    "id": "krapf-six-languages-1850",
    "title": "Vocabulary of Six East-African Languages (Kisuaheli, Kinika, Kikamba, Kipokomo, Kihiau, Kigalla)",
    "fileName": "vocabulary_of_six_east_african_languages_krapf_1850.md",
    "processedPath": "language-sources/raw/vocabulary_of_six_east_african_languages_krapf_1850.md",
    "languages": [
      "swahili",
      "mijikenda",
      "kamba",
      "pokomo",
      "borana",
      "taita",
      "somali"
    ],
    "published": "1850",
    "contribution": "Complete 74-page folio polyglot monograph (Title Page, Preface pp. iii–x dated Dagersheim in Würtemberg, 14. October 1850, and 6-column A–Z Vocabulary pp. 1–64 [PDF pp. 1–83]) by Rev. Dr. Johann Ludwig Krapf (1810–1881), Missionary of the Church-Missionary Society in East-Africa (Tübingen: Printed by Lud. Friedr. Fues, 1850 — Public Domain): Preface Part I (pp. iii–iv: 1844 arrival at Mombas; discovery of the Nilo-Hamitic or Nilotic [Bantu] family vs. Nigro-Hamitic stock; use of Krapf's 1842 Galla Vocabulary as prompt list; Rebmann's Oct. 1850 map; collections in 9 additional languages; Krapf, Isenberg and Mühleisen's 1843 Zeila Somáli Vocabulary to letter M; Prof. H. von Ewald's maxim); Preface Part II (pp. iv–x: [A] Suaheli 350,000–400,000 souls across Kiáma, Túla, Patta, Lámu, Káu, Mómbas, Tánga, Pémba, Sánsibar and Kiloa, Makafiri vs. watu wa mrima, Patta vs. Malinde ruins; [B] Wanika 50,000–60,000 souls, Mulungu, 1846 Rabbai station and Jagga/Kilimanjáro migration; [C] Wakamba 70,000–90,000 souls, absence of R and first-radical stress; [D] Pokomo on River Dána/Pokomóni/Máro, informant Hadji Omar at Takaóngo in 1845 [brother of Chief Bonnaia Dadia of Kalindi and interpreter to Berraráta], Wasegéju, Wateita [Ambakómo] and Kiriama [Mángea] migrations; [E] Wahiau [Kihiáu] of Lake Niassa/Moráwi, 1848 Mombas Kamanga informant and 1847 Mabiti/Mawizi raid; [F] Galla on the River Dana, \"Ormania\" from Orma [\"men\"] vs. morma [\"neck\"], and 3-point proof on Shoan Amharic); and Complete 6-Column A–Z Vocabulary (pp. 1–64).",
    "appUses": [
      "dictionary",
      "comparative translator",
      "grammar lessons"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (pp. i–x, 1–64; all 2,681 Markdown lines) across swahili.json, mijikenda.json, kamba.json, pokomo.json, borana.json, taita.json, cultural-wisdom.ts, and blog-posts.ts."
  },
  {
    "id": "steere-swahili-tales-1870",
    "title": "Swahili Tales, as Told by Natives of Zanzibar, with an English Translation",
    "fileName": "swahili_tales_steere_1870.md",
    "processedPath": "language-sources/raw/swahili_tales_steere_1870.md",
    "languages": [
      "swahili"
    ],
    "published": "1870",
    "contribution": "Classic bilingual collection of 18 Swahili oral narratives (including Hadithi ya Liongo, Sultani Darai, Sultani Majnuni, Sungura na Simba, Mwalimu Goso), Mashairi ya Liongo & Utumbuizo wa Gungu in archaic Kingozi/Kiamu and Kiunguja, Mwanzo wa Utenzi wa Ayubu, 20 Mifano (Proverbs), 14 Vitendawili (Enigmas/Riddles), and 103 ethnographic/lexical notes (Bishop Edward Steere, LL.D., Bell & Daldy London, 1870 — Public Domain).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "All 20 Mifano proverbs, 14 Vitendawili riddles, Liongo & Gungu poetic vocabulary, and 103 lexical notes integrated into swahili.json, cultural-wisdom.ts, and Swahili course modules."
  },
  {
    "id": "krapf-suahili-dictionary-1882",
    "title": "A Dictionary of the Suahili Language (Compiled by the Rev. Dr. L. Krapf, with Introduction Containing an Outline of a Suahili Grammar, London: Trübner and Co., 1882)",
    "fileName": "Krapf Suahili Dictionary Complete.md",
    "processedPath": "language-sources/raw/Krapf Suahili Dictionary Complete.md",
    "languages": [
      "swahili",
      "mijikenda"
    ],
    "published": "1882",
    "contribution": "Monumental 471-page (485-PDF-page, pp. [i]–[xl], [1]–431) Suahili–English Dictionary and Outline of Grammar compiled by the Rev. Dr. Johann Ludwig Krapf at Rabbai Mpia (1844–1853) and Kornthal near Stuttgart (Preface dated July 28, 1881; died on his knees in prayer Nov. 26, 1881 with clean sheets carried to p. 336 [S]), completed through the press by Robert N. Cust, Honorary Secretary of the Royal Asiatic Society (Introduction dated London, March 24, 1882), Rev. T. H. Sparshott, and Rev. J. T. Last of C.M.S. Mamboia (London: Trübner and Co., Ludgate Hill; printed by Ballantyne, Hanson and Co., Edinburgh and London, 1882; frontispiece portrait engraved by Weger sc. Leipzig with facsimile signature L. Krapf — Public Domain): Introduction by Robert Cust (pp. v–vi); Compiler's Preface (pp. vii–xii: Nov. 1843–Jan. 1844 voyage from Aden with Mrs. Rosine Krapf in an Arab Bágăla via Ras Hafun, Mukdisha, Barawa, Kiama, Takaungu, Mombasa, Tanga, and Pemba to Zanzibar; presentation on Jan. 7, 1844 by Major Hamerton to Sultan Said-Said and his structural-linguistic prophecy on Arabic and Swahili; founding of Rabbai Mpia in 1844; June 1846 arrival of Rev. John Rebmann; June 15, 1849 arrival of Rev. J. Erhardt; 4-volume MS lexicon of 1853–1854 sent to Bishop Edward Steere at Zanzibar; 3 dialect belts — Northern Kiamu/Kipate/Kigunia, Central Kimvita/Mombasa preferred by Krapf over Arabicized Kiunguja, and Southern Kiunguja/Kimrima — plus archaic poetic Kingozi of Malindi; critique of Lepsius Standard Alphabet vs. CMS orthography; and Judge Khamis bin Othman of Mombasa as primary authority); Outline of a Suahili Grammar (pp. xiii–xxxix: Part I Phonology Chs. I–III on 5 Italian vowels, 24 consonants, dynamic penult accent vs. enclitic -pi/-ni/-je shift, and syllabic m/n; Part II Etymology Chs. I–XVIII with Tables I–VI across 8 Noun Classes Grouped as Prefixed [I m-/wa-, II m-/mi-], In Part-Prefixed [III -/Ø niumba, IV -/ma-, V ch-, ki-/vi-, VI u-/Ø, ni-, ma-, mb-, nd-], and Non-Prefixed [VII máhali, VIII ku-], \"post-prefix\" genitives wa/ya/la/cha/via/za/pa/mua/kua, 6 Derivative Verb Stems [Simple, Causative -sa/-za/-sha, Objective/Dative -ia/-ea, Reflexive ji-, Reciprocal -na, Iterative -le-/-li-], Kimvita passive -oa, 7 Modes of Salutation [p. xx], full affirmative/negative/relative paradigm of penda [pp. xxiii–xxx], 12 Additions to Ch. VIII including enclitic object suffixes -mi/-we/-e/-sui/-nui/-o and analytic relatives with ambai kuamba, irregular & monosyllabic verbs, cardinals/ordinals, adjectives, pronouns, 9 classes of adverbs, prepositions, conjunctions, and interjections); Explanation of 21 Abbreviations (p. xl: Kid., Kimv./Kim., Kig., Kimr., Kir., Kin./Kinik., Kinias., Kikuav., Kik., Kiung., Kiám., Kijan., Kilind., Kijom., Arab. [Freytag], R./Reb., E./Erh., St., Sp.); and Complete A–Z Dictionary (pp. 1–431, A to ZATÍTI: ~15,000 headwords with proverbs, marine/lover's/historical songs [pp. 182–183, 231, 251, 256, 261, 269, 272, 332, 390, 425], 12 Wanika Months [p. 205], 12 Swahili/Arabic Months [pp. 223–224], 24-hour time divisions & 12-hour clock [pp. 248, 252–253, 318], 6 seasons & Siku ya Muaka / Nairuz [pp. 248, 258, 338], 53 Bird species [p. 284], 63 Fish species [pp. 322–323], 19 Cloth types [p. 158], 9 Gun & 4 Sword types [pp. 148, 159], 13 Ornaments & 7 Bead types [pp. 409–410], 5 Coconut & 8 Rice stages [pp. 273, 276–277], 6 Handful measures [p. 291], Reali/Farasila/Pishi currency & weights [pp. 302, 315–316], Rabai Mutzi Muíru kaya history & chant [pp. 268–269], 12 Wanika tribes [pp. 239–240], 5 Kiapo judicial ordeals [p. 136], Púnga pepo exorcism [pp. 311–312], and Mombasa/Mrima/Patta/Siyu/Ungama historical topography).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom",
      "comparative translator"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (all 5,969 transcription lines, PDF pp. 1–485 / Book pp. [i]–[xl], [1]–431) into swahili.json, mijikenda.json, SWAHILI_GRAMMAR_SECTIONS, MIJIKENDA_GRAMMAR_SECTIONS, SWAHILI_UNITS (Unit 17), and KENYAN_PROVERBS."
  },
  {
    "id": "kamba-grammar-last",
    "title": "Grammar of the Kamba Language, Eastern Equatorial Africa (J. T. Last, 1885)",
    "fileName": "Grammar Of The Kamba Language 1885.md",
    "processedPath": "language-sources/raw/Grammar Of The Kamba Language 1885.md",
    "languages": [
      "kamba"
    ],
    "published": "1885",
    "contribution": "Complete 40-page Kĩkamba grammar with Preface by Robert Cust (London, July 31, 1885): Krapf's 1850 Tübingen vocabulary (70,000–90,000 Kamba) and Last's discovery of the U-Sagára Kamba diaspora near Mamboia; Alphabet (5 Italian vowels, 18 simple consonants, 8 compound consonants Ch, Dz, Kh, Ng, Ng', Ny, Sh, Th); 9 Noun Classes with 6 Class VI plural rules and gender suffixes (-ume, -ke); Adjectives (living-being concord rule, vowel coalescence, 6 full 9-class paradigms for -cheo, -anata?, -ondi, -we/-nai, -mwe/-ingi, -nge, 4 irregular adjective constructions, and ku-kila comparisons); Numerals (cardinals 1–2,000, Noun+Adjective+Numeral word order, ordinals -a mbēe to -a mu-thĩa, and 9-class agreement table); Pronouns (personal, 9-class subject and object prefixes with ku-taa/ku-ua, possessives and kinship enclitics, ng'o and -ēnyi reflexives, 3 demonstrative sets + falsetto uuya/uuyāā/uuyāāā and copular forms, relatives, and interrogatives); Verbs (Imperatives, 6 Affirmative Indicative tenses, Subjunctive, Infinitive, and 5 Negative tenses of ku-thaima and kw-enda); and Adverbs, Prepositions, and Conjunctions (J. T. Last, CMS, SPCK London, 1885 — Public Domain).",
    "appUses": [
      "dictionary",
      "grammar lessons",
      "course lessons",
      "cultural wisdom",
      "blog research"
    ],
    "contentTypes": [
      "grammar",
      "vocabulary",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited line-by-line (pp. iii–iv, 1–40): 100% of grammatical rules, 9-class tables, adjective/numeral/pronoun/verb paradigms, example phrases, and vocabulary entries are integrated into KAMBA_GRAMMAR_SECTIONS, kamba.json, cultural-wisdom.ts, and blog-posts.ts."
  },
  {
    "id": "shaw-pocket-vocabulary-taita-1885",
    "title": "A Pocket Vocabulary of the Ki-Swahili, Ki-Nyika, Ki-Taita, and Ki-Kamba Languages",
    "fileName": "taita.json",
    "processedPath": "dictionaries/taita.json",
    "languages": [
      "taita",
      "mijikenda",
      "kamba",
      "swahili"
    ],
    "published": "1885",
    "contribution": "Parallel four-language East African Bantu vocabulary covering core nouns, body parts, numerals, kinship, and everyday verbs (Rev. A. Downes Shaw, SPCK London, 1885 — Public Domain).",
    "appUses": [
      "dictionary",
      "comparative translator"
    ],
    "contentTypes": [
      "vocabulary"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated into taita.json and cross-referenced with Wray (1894) and Unicode CLDR (dav.xml)."
  },
  {
    "id": "krapf-rebmann-nika-dictionary-1887",
    "title": "A Nika-English Dictionary (Compiled by the Late Rev. Dr. L. Krapf and the Late Rev. J. Rebmann, Edited by the Rev. T. H. Sparshott, London: SPCK, 1887)",
    "fileName": "nika_english_dictionary_pages_1_to_15.md",
    "processedPath": "language-sources/raw/nika_english_dictionary_pages_1_to_15.md",
    "languages": [
      "mijikenda",
      "swahili",
      "kamba"
    ],
    "published": "1887",
    "contribution": "Complete 398-page (409-PDF-page, pp. [i]–vii, 1–391) A–Z Nika (Mijikenda: Kiravai/Kirabai, Kigiriama, Kiduruma, Kidigo) – English Dictionary compiled at Rabbai Mpia by the late Rev. Dr. Johann Ludwig Krapf (commenced the Wa-Nika Mission in 1844) and the late Rev. John Rebmann (29 years of labour among ~12 tribes, 1846–1875), with a Preface by Robert N. Cust, Hon. Sec. of the Royal Asiatic Society (dated London, May 14, 1887, p. iii, citing p. 355 of his Modern Languages of Africa [1883], recounting his Oct. 1886 search of Widow Rebmann's bookcase at Kornthal for the lost bound fair copy, and describing how the rough copy at Salisbury Square had its lacunae supplied from the field) and an Introduction by the Editor, Rev. T. H. Sparshott (dated Cholmondeley Parsonage, Malpas, Cheshire, May 1887, pp. v–vi, recounting the illness and bereavement of his wife while sorting scores of odd slips of paper; London: Society for Promoting Christian Knowledge, Northumberland Avenue, Charing Cross, W.C.; printed by William Clowes and Sons, Limited, London and Beccles, 1887 — Public Domain): Phonology & Orthography (pp. v–vii: 25-letter Alphabet A, B, Ch, D, Dz, E, F, G, H, I, J, K, L, M, N, O, P, R, S, T, U, V, W, Y, Z; 8 Abbreviations K. = Krapf, Kid. = Kidigo, Kig. = Kigiriama, Kij. = Kijomba [Kinika for Kisuahili], Kik. = Kikamba, Kim. = Kimvita, Kins. = Kiniasa, Kir. = Kiravai; softening of Arabic gutturals ع → Ø, غ → g, خ → h as Habari/Roho, ق → k as Karafu; penultimate stress Ra-ba-i; consonant interchanges b/p, d/t, f/v, s/z; two th sounds as in thigh vs. thy and two t sounds including dental t in Kisulutini); Embedded Grammatical Treatises (Vowel Harmony under E p. 70 where root vowels e, o take -eka, -era, -eza and a, i, u take -ika, -ira, -iza with euphonic r/l, plus suffix -ma \"within/limiting\" pp. 24, 52, 229; Continuative Copula Chari/Chere/Kari/Kere p. 22 contrasting older Nichari... Achari with younger Nichere... Achere; Full Irregular Conjugation & 2 Syntax Rules of Ku enda pp. 72–73 across Present Nin'enda / N'enda, W'enda, 'Enda, Hu'enda, Mu'enda, 'Enda, Optative N'ende, Wende, 'Ende, H'ende, M'ende, 'Ende, Subjunctive/Participle Nik'enda, Past Nidzikuenda, Future Ntakuenda; 6 Verbs for \"To Answer\" p. 126 contrasting 3 negative-only [Ku hongoza, Ku runga, Ku shudia] vs. 3 affirmative/negative [Ku lungukiza, Ku udzikiza, Ku udzira]; 7 Harvesting Verbs p. 93 [ku funa, ku guha, ku tola, ku poa, ku hunda, ku kwachula, ku kopa]; 4 Pounding Verbs pp. 127, 384 [ku bonda, ku vonda, ku huaga, ku pura]; and Complete 12-Class Na- Pronominal Table p. 297 [(1) Na-ga/Na-go to (12) Na-mu/Na-mo]); Kinship, Teknonymy & Life-Cycle Rites (Abe teknonymy Abe-Gunja, Abe-Chindua Muambawa, Abe-Mkusi Dzama, Abe-yehu/zehu p. 1; Ame viala wangu vs. Mayo mufiere/muhoho pp. 6, 57, 245; Dzangasimi p. 57, Avu p. 9, Muhua/Ahua p. 276, Mukoi/Akoi p. 279, Muanababa & Muanachane p. 262, Mudzedza vs. Abefiala/Ameviala pp. 1–2, 268, Mbumaniumba p. 249, Mulamu & Wivi/Wifi pp. 282, 388, Wawe p. 387 & Dzawe p. 39 ku dililiana joking relationship; 8 Stages of Infant Development Koko p. 188 & two 7-day Mufungahe seclusions pp. 244, 273; male Yabayowe! vs. female Mayowe! mourning cries pp. 388–389, grave somersaults ku piga pindui p. 323 & kivunga mourning hair p. 186); Indigenous Taxonomies (13-Stage Solar Clock Dzua p. 66, 4 Evening Twilight stages Kim'irim'iri p. 175, 4-Day Week Isa p. 134 [Dziku ya ku ramuka, Dziku ya ku rima viri, Dziku ya ku isa, Juma], 6 Night Watches Kipindi p. 176, 8 Palm-Tapping steps Dangadza p. 35, 9 Kibaria calabash sizes pp. 151–152, 7 Pungapunga coconut stages p. 325 plus Hombo p. 126 & Mariapamba p. 243, 5 Chala finger names pp. 20–21 & ku funsa chala pp. 94–95, 7 Isu banana varieties p. 134, 4 Chulua frog species p. 30, 3 Nche arthropods p. 299, 3 Pembe tusk classes [Bori, Ndzao, Mugoma] p. 321); Kaya Polity, Jurisprudence & Religion (Kaya triad [mumfiria, m'oro, rungu] p. 149; Age-orders Gniere, Ugnaro, Gundi, Kambi, Mfaya, Mumondo, Thura, Govu, Niambura; M'oro assembly opening Similani kambi! — Hai! & closing Kula Abegnania! — Hosi nahu kule! pp. 259–260, 347; Kore blood-money of 2 anafiale as the victim's kifurifuri shadow vs. 1 kore for accidental homicide kua zani pp. 192, 339; 6 Kiravo ordeals & Ku piga niungu / Kikahe pot-smashing oath pp. 169, 178; 5 Verbatim Prayers to Mulungu p. 284; 3 Verbatim Fables [Pingi, Kuku na Ninga p. 323, Nundu the bat p. 314, Mignio ants vs. Ludzoa p. 256]; and all 56 Verbatim Proverbs across pp. 8–381).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom",
      "comparative translator"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (all 13,861 transcription lines, PDF pp. 1–409 / Book pp. [i]–vii, 1–391) into mijikenda.json, swahili.json, kamba.json, MIJIKENDA_GRAMMAR_SECTIONS, MIJIKENDA_UNITS (Units 13–14), and KENYAN_PROVERBS."
  },
  {
    "id": "taylor-aphorisms-1891",
    "title": "African Aphorisms; or, Saws from Swahili-Land",
    "fileName": "African Aphorisms Saws From Swahili Land.md",
    "processedPath": "language-sources/raw/African Aphorisms Saws From Swahili Land.md",
    "languages": [
      "swahili",
      "mijikenda",
      "taita",
      "pokomo"
    ],
    "published": "1891",
    "contribution": "Complete 194-page monograph (pp. i–xii, 1–182) by Rev. W. E. Taylor, M.A. Oxon., F.R.G.S. (C.M.S. Mombasa), with a Preface by Rev. W. Salter Price, F.R.G.S. (Founder of Frere Town, pp. v–vii): 12-couplet opening Mashairi epigraph adapted from Mwalim Sikujua ('AWALI ni mwanzo (sambe ni matezo!)... Sasa anakaa—ndiko kunyamaa!', p. 8); Author's Preface (pp. ix–xi) acknowledging Mwalim Sikujua, Bwana Hemedi bin Muhammad bin Ahmad il Mambasii (authority on cerebral d, t, n vs. dental *d*, *t*), Bishop Steere (1880 note on explosive ch', k', p', t', *t'* from philological n), Rev. W. Salter Price, and Rev. R. P. Ashe (with fn. [p9_1] emending § 83 from 'Hana kaba ya ulimi' to 'Hana kamba ya ulimi'); Pronunciation table (p. xii: open syllables, syllabic m'/n', cerebral d/t/n in Roman vs. dental *d*/*t* in Italics, aspirated/explosive ch'/k'/p'/t'/*t'*/ts', Giryama labial fricative *w*); 600 Swahili Aphorisms (§§ 1–600, pp. 1–135) + 4 Swahili Addenda (§§ [226a], [333a], [355a], [396a], pp. 162–163) with verses by Bwana Muyaka bin Mwinyi-Haji al Ghasâni (fl. 1796–1840), Mwana Mkisi, Mwana Aziza, Mwana Masuru, and Bwana Mataka, plus the 5 agricultural/monsoon seasons (§ 128), 10 marks of Swahili beauty (§ 425), and 18 gift/fee categories (§ 484); 33 Giryama Proverbs (§§ 601–633, pp. 136–143, including the 5 finger names § 602); 31 Nyika Proverbs (§§ 634–664, pp. 144–159, with phonetic critique and re-transcription of Rebmann's Kinika orthography pp. 144–145); 1 Taita Proverb (§ 665, p. 160); 2 Uganda Proverbs (§§ 666–667, p. 161); Appendix to Grammatical Notes Section A (Tenses I–VI: I. '-kali' Yet Tense & locatives -po/-ko/-mo; II. 'Sime-' Negative Perfect; III. '-ngwa-' Precatory Tense; IV. '-meze-' Poetical Perfect; V. 6 groups of Old/Poetic Preterites in -le, -li-...-le, -ee/-iye, -shile/-zile/-shiye/-ziye, internal vowel change -e...-e, and -e; VI. '-siku-' Negative Subordinated Resultant, pp. 164–166) and Section B ('-ngwa' Possessive Pronoun of Alienation = '-a wat\\'u': shokangwa, jembengwa, kitingwa, chanongwa, kinungwa, pp. 166–167); General Index (pp. 168–174); and Supplementary Indexes 1–5 (145 Rarer Swahili Words, Grammatical Foot-Notes, 66 Historical Proper Names & Places, Illustrative Proverbs, and Scripture Parallels, pp. 175–182) (SPCK London, 1891 — Public Domain; HathiTrust: https://hdl.handle.net/2027/hvd.32044086557964).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "100% of all 667 numbered proverbs (§§ 1–667), all 4 Swahili Addenda (§§ [226a], [333a], [355a], [396a]), Mwalim Sikujua's 24-line Epigraph (p. 8), Prefaces & Pronunciation (pp. v–xii), Appendix A & B (pp. 164–167), and Supplementary Indexes 1–5 (pp. 168–182) are verified line-by-line and integrated into cultural-wisdom.ts, SWAHILI_GRAMMAR_SECTIONS, SWAHILI_UNITS, MIJIKENDA_GRAMMAR_SECTIONS, MIJIKENDA_UNITS, swahili.json, mijikenda.json, and taita.json."
  },
  {
    "id": "taylor-giryama-1891",
    "title": "Giryama Vocabulary and Collections (By the Rev. W. E. Taylor, M.A., F.R.G.S., C.M.S., SPCK London, 1891)",
    "fileName": "Giryama Vocabulary And Collections Taylor 1891.md",
    "processedPath": "language-sources/raw/Giryama Vocabulary And Collections Taylor 1891.md",
    "languages": [
      "mijikenda",
      "swahili"
    ],
    "published": "1891",
    "contribution": "Complete 168-page (177-PDF-page) Kigiryama / Mijikenda phonological, grammatical, ethnographic, and lexical monograph by the Rev. W. E. Taylor, M.A., F.R.G.S., Missionary of the Church Missionary Society in East Africa, with a Preface by Robert Cust, Hon. Sec. of the Royal Asiatic Society, dated Sept. 1891, and Author's Preface dated C.M.S., Mombasa, Dec. 1889 (London: Society for Promoting Christian Knowledge, Northumberland Avenue, W.C., printed by Gilbert and Rivington, St. John's House, Clerkenwell, E.C., 1891, pp. i–xxviii, 1–140 — Public Domain): Habitat & 3 Territorial Divisions (pp. v–viii: Weruni with 15 malalo, Central Giryama around the Kaya with 31 malalo, and Northern Giryama towards Mount Mangea and the Sabaki River with 24 malalo = 70 districts; Mount Mangea cradleland, Gala retreat, Kaya abandonment, deforestation, and alkaline groundwater except at Fuladoyo and Mangea); Phonology & Accent (pp. viii–xiv: 5 Open vs. Close Vowel minimal-pair sets [tsama/tsama, laya/laya, bāra/bara; mwezi/mwezi, mweri/mweri; fisi/fisi, sīswi/síswi, usiku/usiku; lukolo/lukolo, ulongo/ulongo; wuu/tu', muvuhi/mufuhi], semi-vowels m'/n'/ng', voiceless nasals hm/hn & breathed hv, zh, labial fricative w, 6 breath/voice stop pairs & n-blending into mb/nd/ndz/nd/nj/ng vs. explosive p'/t'/ts'/t'/ch'/k', tonic & stress accent, enclitics/proclitics, Hvoyo ra Bwana [The Lord's Prayer, p. xiv], Grandmother–Child intonation dialogue [p. xiv], and falsetto ideophones Mwaruhe tsé!, mutune do!, mwiru pi!, yunyemere myá!); Relation of Giryama to Swahili & archaic Ngozi (pp. xv–xvi: 11 grammatical divergences where Giryama preserves older Bantu grammar); A Sketch of the Giryama Verb §§ I–VII & Errata (pp. xvii–xxviii: personal pronouns, tense/mood conjugation of ku-rima & ku-richa, participials, object infixes, 7 derived forms, compound conjugations, and passive -wa/-igwa); ~2,500-entry A–Z English–Giryama Vocabulary & Addendum (pp. 1–112, including 23 Antelopes [p. 4], 12-class BE tables [pp. 8–12], 55 Birds [pp. 13–14], 13 Marika Circumcision-cycles [p. 19: Wula-mbere to Nyoga], 6 Devil/spirit types & Katsumbakazi [p. 25], 5 Cow Entrail parts [p. 29], 10 Fowl stages [p. 34], Freemasonry degrees [pp. 34–35: Uhoho, Umondo, Ubora → Habasi, Gawe, Sayo ra K'oma, M'ng'aro, Kirao → K'ambi at Nyambura with luwoo, Waya, Fisi, Enye-ts'i], Moon 3 decades & 4-day week [p. 56: Jumwa, Kuramuka, Kurima-hiri, Kuisa & Kongo!], 16 Nation ethnonyms [pp. 57–59], Relations kinship system [pp. 74–75], Notes on the Giryama Religion [pp. 75–76], Riddle rules & 5 inline riddles [p. 76], Salutations [pp. 78–79], 9 Snakes & Mwam'nyika [p. 86], 132 Trees/plants & ethnomedicine [pp. 98–102], 17 Work occupations [p. 110], Year seasons & proverbs [p. 111], and Addendum on But [p. 112]); and Collections (pp. 113–140: 5 bilingual Ngano za Kigiryama folktales [1. Katsungula na Simba, 2. Fisi na Simba na Katsungula, 3. Mwanache na Nzimu, 4. K'uku na Katsungula, 5. Kuandika kwa Kufwa, na Kuononga kwa Muche] and all 22 Ndumo za Kigiryama riddles).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom",
      "blog research"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (Book pp. i–xxviii, 1–140; PDF pp. 1–177) into mijikenda.json, MIJIKENDA_GRAMMAR_SECTIONS, MIJIKENDA_UNITS, cultural-wisdom.ts, and blog-posts.ts."
  },
  {
    "id": "steere-madan-swahili-handbook-1894",
    "title": "A Handbook of the Swahili Language, as Spoken at Zanzibar (4th Edition)",
    "fileName": "Swahili Handbook Steere 1894 Complete.md",
    "processedPath": "language-sources/raw/Swahili Handbook Steere 1894 Complete.md",
    "languages": [
      "swahili"
    ],
    "published": "1894",
    "contribution": "Comprehensive 458-page Swahili grammar, categorized English–Swahili vocabulary lists (Substantives, Adjectives, Verbs), complete A–Z Swahili–English Dictionary, and 5 Appendices: Kinyume syllable-inversion cipher, 4 Swahili letters, interlinear Hadithi ya Waridi, 197 Useful & Idiomatic Phrases, and Swahili Money/Weights/Measures & 32-point Mariner's Compass (Bishop Edward Steere, LL.D., rev. A. C. Madan, M.A., SPCK London, 1894 — Public Domain).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated line-by-line into swahili.json, SWAHILI_GRAMMAR_SECTIONS, and SWAHILI_UNITS."
  },
  {
    "id": "wray-taita-1894",
    "title": "An Elementary Introduction to the Taita Language, Eastern Equatorial Africa (Sagalla Dialect)",
    "fileName": "An Elementary Introduction To The Taita Language Wray 1894.md",
    "processedPath": "language-sources/raw/An Elementary Introduction To The Taita Language Wray 1894.md",
    "languages": [
      "taita"
    ],
    "published": "1894",
    "contribution": "Complete 128-page Kisagala / Taita grammatical treatise and lexicon by Rev. J. Alfred Wray (CMS Sagalla, SPCK London, 1894 — Public Domain): Preface (pp. ii–iii: Taita mountain massifs, Bura/Dabida/Kasigau/Sagalla dialects, 1883 mission founding, Krapf & Rebmann journeys); Part I Grammar (pp. 5–76: 21-letter alphabet, aspirated 'b/'d/'g, velar ng', lateral tly, 9 Noun Classes + -ni locative & kw- concord, adjectives, variable particle -a, cardinals 1–1,000 + vigesimal koruja, ordinals, personal/possessive/kinship/reflective/demonstrative/relative/interrogative pronouns, full affirmative & negative conjugations of ku-lima across 15 indicative + 17 conditional tenses, imperative/subjunctive/infinitive moods, passive -o, ku-kalla/ku-wesi/ku-fwa/ku-ja paradigms, 7 derivative verb forms, enclitics -je/-ni/-ri/-ba/-ima & proclitic ke-, 13 adverbial ideophones); and Part II English–Sagalla Vocabulary (pp. 77–128: ~1,800 headwords with multi-line ethnographic notes on bananas, beads, cloth measures, maize & sorghum 9 growth stages, sweet potatoes, sugar-cane, wild fruits, honey, ivory tusk hand-measures, 4 seasons & 5 rains, 15 times of day, salutations, baobab riddle, war-cry, and ancestral skull-caves).",
    "appUses": [
      "dictionary",
      "comparative translator",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (Preface pp. ii–iii, Part I Grammar pp. 5–76, and Part II English–Sagalla Vocabulary pp. 77–128) into taita.json (3,366 entries across 15 categories), TAITA_GRAMMAR_SECTIONS (12 comprehensive sections), TAITA_UNITS (Units 1–12), KENYAN_PROVERBS, and CULTURAL_WISDOM."
  },
  {
    "id": "wurtz-pokomo-1895",
    "title": "Wörterbuch des Ki-Tikuu und des Ki-Pokomo in Ost-Afrika",
    "fileName": "pokomo.json",
    "processedPath": "dictionaries/pokomo.json",
    "languages": [
      "pokomo",
      "swahili"
    ],
    "published": "1895",
    "contribution": "Foundational Kipfokomo (Tana River Sabaki Bantu) lexicon, numerals, riverine ecology, and verb stems (Ferdinand Würtz, Zeitschrift für afrikanische und ozeanische Sprachen, 1895 — Public Domain).",
    "appUses": [
      "dictionary",
      "comparative translator"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated into pokomo.json alongside Krapf (1850), Johnston (1919), and Nurse & Hinnebusch (1993) Sabaki reconstructions."
  },
  {
    "id": "larajasse-somali-dictionary-1897",
    "title": "Somali-English and English-Somali Dictionary",
    "fileName": "Somali English Dictionary 1897 Kenya Transcription.md",
    "processedPath": "language-sources/raw/Somali English Dictionary 1897 Kenya Transcription.md",
    "languages": [
      "somali"
    ],
    "published": "1897",
    "contribution": "Comprehensive bidirectional Somali–English and English–Somali dictionary (with Supplement) by Rev. Fr. Evangelist de Larajasse (London: Kegan Paul, Trench, Trübner and Co., Ltd., 1897 — Public Domain): Front Matter and Preface (pp. v–xiii: 21 Roman letters + Syrian alphabet S. J. Beyrouth signs, diphthongs ai/ï, ei, au, aw, ow, Arabic ‘aïn ع, cerebral d vs. dental d, chest aspirate h, guttural h = غ ق خ, and minimal pairs ader, sōr vs. kol, gūr vs. gur, maya); 44 Grammatical Abbreviations (p. xiv); 20-Row Kenya Reference Table (sawaheli/sawahili, Ogaden/Dulbanteh/Darod wa debai / wa i debai [p. 293], daba galla vs. walo, antelopes si‘g, garanug and male lig, adéryo, adéryo ‘ari and male godir, b‘e‘id/bi‘‘id, sagaro/sakaro, dabatag, Africa, and rubiad/rubabi/rubod and rubi); and Full Two-Column Page Transcriptions of Book Pages 26 (DAB–DAF), 123 (SAR–SER), 127 (SIB–SIS), 242 (NAI–NEW), 266 (SIN–SLA), and 293 (Supplement BUR–DER).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (all 275 Markdown lines: Front Matter, Preface pp. v–xiii, 44 Abbreviations, 20 Kenya Reference Entries, and all 6 Full Two-Column Page Transcriptions pp. 26, 123, 127, 242, 266 and 293) into somali.json (2,518 entries), SOMALI_GRAMMAR_SECTIONS, SOMALI_UNITS, cultural-wisdom.ts, and blog-posts.ts."
  },
  {
    "id": "hinde-masai-1901",
    "title": "The Masai Language: Grammatical Notes Together with a Vocabulary",
    "fileName": "The Masai Language Hinde 1901.md",
    "processedPath": "language-sources/raw/The Masai Language Hinde 1901.md",
    "languages": [
      "maasai"
    ],
    "published": "1901",
    "contribution": "Early Maa grammatical sketch, 39 verb conjugation paradigms, ~180 categorized conversational phrases, salutations, 3 traditional songs, Kenyan place-name etymologies, 10 traditional solemn sanction, and a ~1,000-entry English–Masai vocabulary (Hildegarde Hinde, Cambridge University Press, 1901 — Public Domain).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated line-by-line into maasai.json, MAASAI_GRAMMAR_SECTIONS, MAASAI_UNITS, and cultural-wisdom.ts."
  },
  {
    "id": "hobley-eastern-uganda-1902",
    "title": "Eastern Uganda: An Ethnological Survey (Anthropological Institute Occasional Papers, No. 1)",
    "fileName": "Eastern Uganda An Ethnological Survey.md",
    "processedPath": "language-sources/raw/Eastern Uganda An Ethnological Survey.md",
    "languages": [
      "luhya",
      "luo",
      "kalenjin",
      "kisii",
      "teso"
    ],
    "published": "1902",
    "contribution": "Complete 96-page ethnological, historical, grammatical, and lexical monograph by C. W. Hobley, Assoc. M.Inst.C.E., Sub-Commissioner Uganda Protectorate (Anthropological Institute of Great Britain and Ireland, Occasional Papers No. 1, London, printed by Harrison and Sons, 1902, pp. 1–96, Figs. 1–13, Plates I–VI; Preface thanking Sir H. H. Johnston & Sir Clement Lloyd Hill): Chapter I Classification of Races (Classes I–IV across 3,770–8,500 ft with 7,000 ft mtama/wimbi altitude limit; pure-bred Kisii/Kossova origin of Chief Kitoto in the Nyamoga clan; Awa-Ware island migration to Nyala; Guasangishu Elkonono ironworkers & stone-walled kraals on Rangata Nyuki driven west by Laikipia Masai, plus Segelli of Olinyao in the Bararget valley near Fort Ternan dispersed by Laikivia of El Kidong; Mau Eldorobo/Wandorobo elephant poison-dart hunting & telegraph-wire raids; quartzose pelele lip-plugs, Gilgil obsidian, Nya-Luo jasper beads, and 1900 drought resilience); Chapter II Bantu Kavirondo (Awa-Limi/Awa-Rimi, Awa-Wanga, Ja-Mwa: Fig. 1 hut plan with Fireplaces No. 1 & No. 2 in-law taboo, Fig. 2 3 stool patterns, Fig. 3 18-in Samia/Ketosh hoe, Fig. 5 wooden log bellows, Fig. 6 Mumias semsem-oil lamp, Fig. 7 3-heap entrail divination A/B/C, Kisesa sitting burial & bone re-burial at Mutungu originated by Sundwa, bride-price & Nyole/Lakoli/Ithako/Isukha calf-return law, Makatta reed hand-harp [Fig. 10], Mfumo medicine women, Mufira witchcraft, Chilulu 20-yard vertigo ordeal, rainmakers Luta of Marama & Mgahanya son of Ligiri of Nyole, awa-vulana war-spoil division, pleurisy chest-piercing, Marama ancestral back door, 4 dances, and peace rites); Chapter III Nilotic Kavirondo (Ja-Luo / Awa-Nyoro / Wa-Nife: dema traps with papyrus & weighted ropes on ambatch rafts, Gemi Uvino smith clan Yothet-th & Jamkingo night witchcraft, Owiti/Awiti & Apio/Adongo birth customs, Orindi ambatch shields, Gemi poison-maker Opondo, 8-string Thūm harp [Fig. 8], Būl drum [Fig. 9], Odundu stalk harp, mother-in-law goat-skin rule, 15 brass ear-rings & Nya-Luo jasper beads matched by C. H. Read to ancient Egypt & Beluchistan, shaved head patterns [Fig. 11], Kiviri & Calabash mimosa-leaf ordeal [Fig. 12], Chief Odera's prophecy, Ochola war seed-case, Phytolacca Abyssinica & Ipomea palmata snake-bite antidotes identified by Dr. Rendle, and Chieng sun-deity); Chapter IV Nandiek/Nandi & Lumbwa/Sikisi (Fig. 13 hut plan with benches A/B & stones 1–3, Fig. 4 Nandi hoe, Koromojo/Turkana spiked ring traps, Lako/El-Gonyi & Nandi escarpment caves, Poyisia father of Laibon Kibeles buried under cattle-dung mound, elmoran/elmoru/dittos, Kabkeven pottery hill in Kakapoch, Lumbwa liquid tobacco snuff in goat horn, Chibkonyoin iron ore & El Konono smiths, mbolio saline mud, zezees bark zithers, laibon 3rd-night infant ox-tail sign & detached-head raid omen, Kamasia rain-root, father's skin-cloak curse, and skull/whetstone/tortoise/bent-spear/baby-exchange/fly-and-rat pot peace rites); Chapter V Complete Tribal, Clan & Chief Registries (§ 1 20 Bantu Kavirondo tribes incl. Awa-Wanga 9 clans & Netia's Manga ox-hump chronicle, Awa-Ketosh/Masawa 11 clans, Awa-Tindi's 10 sons, Awa-Lakoli Awa-Mawe vs. Awa-Kirima & Awa-Kisungu, Awa-Ware 8 clans on Lusinga/Lufangano, Awa-Kisingiri salt-chief Wambogo, and all 21 Kossova/Kisii clans & chiefs; § 2 all 17 Nilotic Kavirondo tribes & clans; § 3 Wamia/Elgumi & 10 West Elgon tribes; § 4 Kwavi/Guasangishu 4 clans under Sayen & late Kisera, Nandi 12 clans, 32 chiefs & 3 Laibons [Kibelēs, Koitalēl, Kipchumbēr], Nyangnori 8 clans in Masino under Ujoo, Lako, El-Gonyi, Savei, Sor/Mbai/Bumett, and Lumbwa/Sikisi named after Chief Lumbwa); and Chapters VI–VII Parallel Dictionaries, 43 conversational sentences, numerals 1–100, conjugations of \"Come\" & \"Want\", Noun Plural Classes (Lu-Wanga I–VII, Kossova/Kisii I–VI, Tho-Luo I–VIII, Nandi -ik/-ek/-ok), Lu-Nyamwezi comparison, and Kossova, Ketosh, Elgumi, Lusinga/Chula & Eldorobo vocabularies.",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line across Chapters I–VII and Plates I–VI (pp. 1–96) into luhya.json, luo.json, kalenjin.json, kisii.json, teso.json, grammar-reference.ts files, and cultural-wisdom.ts."
  },
  {
    "id": "johnston-uganda-protectorate-1902",
    "title": "The Uganda Protectorate, Vol. II (Anthropology, Ethnology & Comparative Vocabularies of East African Languages, pp. i–xx, 471–1018)",
    "fileName": "Uganda Protectorate Vol2 Kenya Transcription.md",
    "processedPath": "language-sources/raw/Uganda Protectorate Vol2 Kenya Transcription.md",
    "languages": [
      "somali",
      "turkana",
      "pokot",
      "teso",
      "maasai",
      "ilchamus",
      "samburu",
      "kalenjin",
      "luo",
      "luhya",
      "kisii",
      "kikuyu",
      "swahili",
      "kamba"
    ],
    "published": "1902",
    "contribution": "Complete 4,335-line Kenya transcription of Sir Harry Johnston, G.C.M.G., K.C.B., The Uganda Protectorate, Vol. II (London: Hutchinson & Co., Paternoster Row, 1902, pp. i–xx, 471–1018 — Public Domain): Front Matter, 3 Coloured Plates (46 A Masai Warrior p. 824, 47 A Nandi p. 860, 48 A Kamásia p. 868), 2 Fold-out Maps by J. G. Bartholomew & Author (Map 8 Native Races p. 486, Map 9 Language Groups p. 884 at 1:4,000,000 = 63.1 mi/in), and 81 Black-and-White Illustrations (Nos. 257, 258, 263, 383–403, 428–438, 439–463, 467–505); Chapter XIII Anthropology (pp. 471–509) with Dr. Frank C. Shrubsall's Craniometric & Osteometric Tables (Average Head Indices & Body Proportions on pp. 492–493 across 20 groups, plus Individual Tables A–F on pp. 496–509 for Nos. 25–32 Kavirondo, No. 39 Swahili ♀, Nos. 59–68 Sūk, Nos. 69–76 Masai, Nos. 77–87 Andorobo, Nos. 88–92 Kamásia, Nos. 93–98 Nandi, and No. 99 Lumbwa); Chapters XIV & XVI Excerpts (pp. 510–511, 525–526, 646, 684, 697, 713–714: Munande/-nande vs. Nandi note, 1901 sleeping sickness killing 200 on Buvuma and reaching Nandi Plateau, Baganda raids checked by Masai/Nandi, Busoga formerly inhabited by Lango, Elgumi & Masaba); Chapter XVII Bantu Kavirondo & Masaba (pp. 722–755: Wakefield/Ravenstein & Thomson origin of \"Kavirondo\", Masaba tribes Bapobo/Bangoko/Bakonde/Bagesu/Basokwia/Bosia, 3-ft Kabarasi kaolin \"matinée hats\", 2-fireplace hut etiquette, Ketosh moats & clay ramparts, women's dietary taboos, Mumia's tame ostriches, 5 tribal groups, bride-price & calf-return rule, Ba-fumo female doctors, obufira vs. obulogo, Awafwa & Ishishemi, liver- & dog-halving peace rites); Chapter XVIII Nilotic Ja-luo / Nyifwa (pp. 756–795: stork posture, father-in-law goat-skin rule, kiketi & nyaluo jasper beads at 1 cow per bead, dema traps & ambatch rafts, Yothetth smiths of Uvino, Chieng sun worship, jamkingo, 3 ordeals kiviri/calabash/flour, Chief Odua's prophecy, Owiti/Awiti & Opio/Apio birth rites, lung resection surgery); Chapter XIX Masai, Turkana, Sūk, Elgumi, Nandi, Kamásia & Andorobo (pp. 796–884: Pastoral vs. Agricultural Masai, Roñata Nyuki stone kraals, tetanus incisor theory, Laiok → El Manūa → El Mórran → Ol Baiyan, name-taboos, Dr. Bödeker's medical notes, Kibebete → Mbatian → Lenana & Sendeyo + Terere, Añgai & 4-God Creation Myth, os-singolio musical score p. 834, Elgunono smiths; p. 840 Caucasian admixture table; Turkana & Sūk chignon hair-bags, wrist-knives, nose-discs, 8-in 3-legged stools, 4-pointed concave shields, Sūk musical score p. 851; Elgumi/Wamia; Nandi, Lumbwa/Sikisi, Sotik, Kamásia/El Túkĕn, Elgeyo, Mutei, Japtuleil, Elgonyi/Lako/Ñoma, Sabei & Andorobo: 2-handled ear-cylinders, Sabei clay-tufted hair & shells, Evatt's 300-cattle Elgon caves, Nandi hut plan, Lumbwa liquid tobacco juice in goat horn, Acocanthera schimperi arrow poison & zingiberaceous root bird-lime, spiked ring traps & gridiron pits, Nandi & Elgeyo bride-price, 7-cattle medicine-man war share, comparative criminal law, 3rd-night infant ox-tail sign & detached-head legend, Mutei morning prayer, Kamásia 3-hole adversity sacrifice, and skull/dog/whetstone/tortoise/bent-spear/baby-exchange/fly-and-rat pot peace rites); and Chapter XX Languages, Orthography (p. 901), Bleek's prefix solution via Lukonde Gumu-/Gama-/Baba-/Bubu- & 16 prefixes (p. 1001), Vocabulary Sets 1, 2, 3, 8, 9 (pp. 903–1001), all 19 Nandi & 30 Masai Additional Words/Sentences (pp. 925–926), and Index (pp. 1003–1018).",
    "appUses": [
      "dictionary",
      "comparative translator",
      "course lessons",
      "grammar lessons",
      "cultural wisdom",
      "blog research"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (all 4,335 Markdown lines, pp. i–xx, 471–1018) across somali.json, turkana.json, pokot.json, teso.json, maasai.json, ilchamus.json, samburu.json, kalenjin.json, luo.json, luhya.json, kisii.json, kikuyu.json, swahili.json, grammar-reference.ts files, cultural-wisdom.ts, dictionaries/metadata.ts, and blog-posts.ts."
  },
  {
    "id": "hemery-kikuyu-handbook-1903",
    "title": "English-Kikuyu Hand-Book (By the Rev. Father A. Hémery, C.S.Sp., Zanzibar—Nairobi, 1903)",
    "fileName": "English Kikuyu Handbook Hemery 1903.md",
    "processedPath": "language-sources/raw/English Kikuyu Handbook Hemery 1903.md",
    "languages": [
      "kikuyu"
    ],
    "published": "1903",
    "contribution": "Complete 87-page (92-PDF-page) English–Kikuyu grammar, vocabulary, and conversational phrase-book by the Rev. Father A. Hémery, C.S.Sp., Missionary Apostolic of the Roman Catholic Mission, Naïrobi (Zanzibar—Nairobi: Roman Catholic Mission, 1903; Preface dated Catholic Mission, Naïrobi, April 20th, 1902, citing the Uganda Railway and Consul-General Sir Charles Eliot — Public Domain): Alphabet & Phonology (absence of f; 5 sound pairs confused by speakers: l/r, g/k, sh/ch, o/u, e/i); Chapter I The Noun (9 Classes I–IX: I m-/mu-/mo- → a-, II m-/mo- → me-, III Invariable n-/ny-/nd-/ng-/mb-, IV ke- → i-, V i- → ma- + koto → mato & kogoro → magoro, VI Ø → ma- [letwa → maletwa, ondo → maondo, taama → mataama], VII l-/lo- → n-/ny-/nd- [logito → ngito, lwimbo → nyimbo, loleme → ndeme, lorigi → ndigi, loara → ndoara, loere → ndoere], VIII ki- → shi- [kiombe → shiombe, kiongoyo → shiongoyo, kiara → shiara, kiuga → shiuga, kiaro → shiaro, kiondo → shiondo, kiura → shiura], IX Verbal Infinitives kokwa, kosie, kooraga; Diminutives in ka- [kangondu, kamunyu, kangombe] & to- [tomae, toirio] and Augmentatives in ke- [kengombe, kemunyu]); Chapters II–III Article & Adjectives (qualifying adjective -ega across all 9 classes, cardinals 1–10,000, ordinals -a mbereirie to -a suza, and indefinite adjectives); Chapter IV Pronouns (disjunctive niye/we/isue/inyue & class 3rd-person forms, genitive -a table across Classes 1–9, conjunctive subject & object prefixes, composite niye mwene... ao ene, possessives -akwa to -ao, 3-way demonstratives [near oyo/geke/rere, distant olya/kelya/relya, beforehand oshio/keo/reo], relative -o-/mwene, interrogatives nou/ou? & ke/neke?, and indefinites ngutire/hatire); Chapter V The Verb (5 moods, full affirmative & negative conjugation of kohora \"to beat\" across Present, Past, Preterit ndakehora, Future, Imperative, Subjunctive, Present/Past Conditional ningehora/ningehorile, Infinitive kohora/kotihora, habitual suffix -ga, and 5 derived forms: I Determinative -era, II Passive -wo/-ilwo, III Causative -ia/-ya, IV Reflexive -e-, V Reciprocal -na/-ana; plus adverbs, prepositions, conjunctions, enclitic -le \"if/when\" & -tya \"how?\", attention call aderere!, and salutations ne muhoro / tiguo uhoro on pp. 13–14); ~1,500-entry A–Z English–Kikuyu Vocabulary (pp. 15–75); and 5-part Phrase-Book (I. Usual, II. Servants, Meals, etc., III. A Visit to a Village, IV. Working, V. In Caravan, pp. 77–87).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (Book pp. 1–87, PDF pp. 1–92) into kikuyu.json, KIKUYU_GRAMMAR_SECTIONS, KIKUYU_UNITS, and KENYAN_PROVERBS."
  },
  {
    "id": "hobley-kavirondo-nandi-1903",
    "title": "British East Africa: Anthropological Studies in Kavirondo and Nandi",
    "fileName": "British_East_Africa_Anthropological_Studies_in_Kavirondo_and_Nandi_Hobley_1903.md",
    "processedPath": "language-sources/raw/British_East_Africa_Anthropological_Studies_in_Kavirondo_and_Nandi_Hobley_1903.md",
    "languages": [
      "luo",
      "luhya",
      "kalenjin"
    ],
    "published": "1903",
    "contribution": "Three Ja-Luo (Nyifwa) origin narratives & genealogical trees (Apōdtho, Ramogi, Anyango, Chindu, Rajoki, Jimbo, Uyua, Mbunga, Owidi, Rachonyo, Chwanya, Kanu, Alangu, Mugirango, Were tree, & Kadimu sacred python Nyelo), Lako/Savei/Nandi migration from Mount Kamalinga & Mount Elgon volcanic fire legend, 12-generation Awa-Wanga (Luhya) royal genealogy (Kuau & Wanga to Sundu, Kwehu, Sakwa & Mumia) & historical chronicle, 8 Ama-Wanga animal fables (including Chikonesi), Ithako ghost-laying cremation, Sumba Island dwarfish elves, Lusinga Bridge Island (Wa-Nyama kwa Wa-Ware), Masambwa/Muzimo ancestor altars (Sangaro Hill & Mrumba fig in Ketosh; 3-stone Siala altar in Awa-Wanga), Murembe peace tree, waka python rite (Wanawaka/Newaka), Chief Ugada’s 11 charms (Thako, Nya-Luo beads, omeni wrist sticks), 8 Bantu Kavirondo Muziro totems, 20 Ja-Luo Kwero totems in Tho-Luo, 8 Nandi totems, Koromojo Eyarri/Emuthi antidote, Nyole rain-maker Mgahanya & Simbi abūr legend, Cult of the Mkia (chieno of tuoro fibre & livoya), Mika ceremony, Awa-Wanga child naming (quail & kiketi bead), tattooing & demographic tables, Isira blood-feud taboo, Chieng & Polo cosmology, Kamililo Nandi legend of Ilet on Mount Tinderet (Oggiek & Arab Kibosone), Ja-Luo mikayi chieftainship succession (Umoli, Agola, Odera Ulalo & Sejenyi), and etymology of Kavirondo (C. W. Hobley, Journal of the Anthropological Institute Vol. 33, pp. 325–359, Plates XXVIII–XXX, 1903 — Public Domain).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "100% of Hobley (1903, pp. 325–359) integrated line-by-line across luo.json, luhya.json, kalenjin.json, luoProverbs, LUO_UNITS, LUHYA_UNITS, KALENJIN_UNITS, grammar references, and cultural-wisdom.ts."
  },
  {
    "id": "madan-english-swahili-dictionary-1902-grammar-1905",
    "title": "English-Swahili Dictionary (2nd Ed., Revised, 1902) & Swahili (Zanzibar) Grammar (1905)",
    "fileName": "english_swahili_dictionary_full.md",
    "processedPath": "language-sources/raw/english_swahili_dictionary_full.md",
    "languages": [
      "swahili"
    ],
    "published": "1902–1905",
    "contribution": "Monumental 462-page Oxford English–Swahili Dictionary (2nd ed., 1902, with introductory essay 'On the Swahili Language as Spoken in Zanzibar' pp. v–xii and Conspectus Tables I & II pp. xiii–xv) paired with the complete 62-page Swahili (Zanzibar) Grammar (1905, §§ 1–262: Nasal vs. Non-Nasal Concord Sets, 8 Noun Declensions, root derivation families, 16-column Table of Concords, 8 Derived Verb Stems including 5 Causal sub-types and idiomatic ji- Reflexives, and 8 Adverbial Clause types) by A. C. Madan, M.A., Student of Christ Church, Oxford (Clarendon Press, Oxford, 1902 & 1905 — Public Domain).",
    "appUses": [
      "dictionary",
      "grammar lessons",
      "course lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Manually curated into swahili.json, SWAHILI_GRAMMAR_SECTIONS, SWAHILI_UNITS, and cultural-wisdom.ts."
  },
  {
    "id": "madan-swahili-dictionary-1903",
    "title": "Swahili-English Dictionary",
    "fileName": "Swahili English Dictionary Madan 1903 (1).md",
    "processedPath": "language-sources/raw/Swahili English Dictionary Madan 1903 (1).md",
    "languages": [
      "swahili"
    ],
    "published": "1903",
    "contribution": "Authoritative Oxford Swahili–English Dictionary featuring the 8-stem verbal derivation system (Simple, Applied, Causative, Neuter/Stative, Partial, Reciprocal, Reversive, Reduplicated), Tabular Conspectus of 8 Noun Declensions (D 1–D 8), and etymological headwords with Arabic/Persian/Hindi/Portuguese loan origins (A. C. Madan, M.A., Clarendon Press Oxford, 1903 — Public Domain).",
    "appUses": [
      "dictionary",
      "grammar lessons",
      "course lessons"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated line-by-line into swahili.json and SWAHILI_GRAMMAR_SECTIONS."
  },
  {
    "id": "kamba-kikuyu-vocabularies",
    "title": "Vocabularies of the Kamba and Kikuyu Languages of East Africa",
    "fileName": "Vocabularies Of The Kamba And Kikuyu Languages Hinde 1904.md",
    "processedPath": "language-sources/raw/Vocabularies Of The Kamba And Kikuyu Languages Hinde 1904.md",
    "languages": [
      "kamba",
      "kikuyu",
      "swahili"
    ],
    "published": "1904",
    "contribution": "Complete 94-page comparative monograph (pp. i–xviii, 1–76 [PDF pp. 1–104]) by Hildegarde Hinde (Mrs Sidney L. Hinde, author of A Masai Grammar), signed at Fort Hall, British East Africa, September 1902 (Cambridge: at the University Press, 1904 — Public Domain): Preface (pp. v–viii: Ulu Kamba from Machakos to the coast vs. Nganyawa Kamba in part of Kitui District; Jogowini Kikuyu in Kenya Province; mutual intelligibility between Southern Kenya Province Akikuyu and Kitui Akamba; 6 plural formation rules incl. native Mukamba/Akamba and Mukikuyu/Akikuyu vs. Swahili Mkamba/Wakamba and Mkikuyu/Wakikuyu; absence of R in Kamba due to lisp from filed teeth, with burred rr; interchangeable K/G, B/V, Th/S/Z, and Kikuyu R/L); The Alphabet (pp. ix–x); Verbs (pp. xi–xviii: complete 12-paradigm conjugation of Swahili Ku-shinda vs. Kamba and Kikuyu Ku or gu-tinda [\"to conquer\"], including Past Perfect Kamba ni-na-tind-ie vs. Kikuyu ni-tind-eri and conversational ninkushoka for ninkashoka); Six-Column A–Z Vocabulary (pp. 1–69, ~1,100 parallel rows incl. 8 Kikuyu dances on pp. 17, 65); Numerals (pp. 70–71); and Phrases (pp. 72–75: all 65 parallel conversational phrases).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "comparative language blogs"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (pp. i–xviii, 1–76; all 3,529 Markdown lines) across kamba.json, kikuyu.json, swahili.json, KAMBA_GRAMMAR_SECTIONS, KIKUYU_GRAMMAR_SECTIONS, and cultural-wisdom.ts."
  },
  {
    "id": "mcgregor-kikuyu-vocabulary-1904",
    "title": "English-Kikuyu Vocabulary (Compiled for the Use of the C.M.S. Missions in East Africa, SPCK London, 1904)",
    "fileName": "English Kikuyu Vocabulary Mcgregor 1904.md",
    "processedPath": "language-sources/raw/English Kikuyu Vocabulary Mcgregor 1904.md",
    "languages": [
      "kikuyu"
    ],
    "published": "1904",
    "contribution": "Complete 192-page (201-PDF-page) A–Z English–Kikuyu Vocabulary (~3,200 entries) compiled by Rev. A. W. McGregor of the Church Missionary Society (London: Society for Promoting Christian Knowledge, Northumberland Avenue, W.C., printed by Richard Clay & Sons, Limited, London and Bungay, 1904; Preface pp. iii–iv dated London, May 1903 — Public Domain): Preface documenting collection at Fort Smith (native name Kabeti) in 1901–1902, Uganda Railway boundary from mile 326 to mile 360, Kikuyu territory stretching NE to Mount Kenia (Kirinyaga on p. iv; Kilinyatha / Kireira on p. 95), altitude 4,000–18,000 ft (inhabited 4,000–7,000 ft), population 200,000–300,000, and agricultural settlement around Nairobi and Kikuyu stations; Orthographic Note (p. 5) on Royal Geographical Society (R.G.S.) system, absence of S and Z in Kabeti with Th always taking their places, interchangeability of L and R, pure velar nasal ng' with a point after ng (as koteng'era = koteng-era, not koten-gera; ng'ombe, ng'ondu, ng'aragu, ng'ania, kong'orota, kong'athia, king'ang'aini) vs. prenasalized hard g written ng'g (as kuing'gata, ketung'guru), 9 grammatical abbreviations, and Observe A (infinitives in Ko-/Ku-/Kw-) & Observe B (singular/plural bracket notation: s. & p., full plural in brackets as Mwetereri [Etereri], or plural prefix in brackets as Gechunji [I-] → Ichunji); and complete A–Z English–Kikuyu Vocabulary (pp. 6–192) preserving Kabeti pronouns, demonstratives, locatives (Kw- & -ini), interrogative enclitics (-atea, -ha/-ka, -ko, -riko), suppletive kinship (Baba/Thoguo/Ithi pl. Maithi; Maito/Nyukwa/Nyina pl. Manyina), 7-day relative time sequence (Iyo, Ira, Reu/Omothi, Rochio, Oke, Matukwatatu, Matukwana), agricultural seasons (Kathano, Mwaka wa kehu, Mwaka wa Njahi, Mweri, Mohea), customary law (Chira, Magambo murder fine, Konyua muma ordeal cup, Oramati inheritance), religion & ethnomedicine (Ngai, Igongona, Thahu/Mugiru, Mundu mugo, Muthaiga, Murututu), and material culture.",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (Book pp. i–iv, 5–192; PDF pp. 1–201) into kikuyu.json, KIKUYU_GRAMMAR_SECTIONS, KIKUYU_UNITS, and KENYAN_PROVERBS."
  },
  {
    "id": "hollis-masai-1905",
    "title": "The Masai: Their Language and Folklore (By A. C. Hollis, with Introduction by Sir Charles Eliot, Oxford: Clarendon Press, 1905, pp. i–xxviii, 1–359, Plates I–XXVII, Map)",
    "fileName": "The Masai Their Language And Folklore Hollis 1905.md",
    "processedPath": "language-sources/raw/The Masai Their Language And Folklore Hollis 1905.md",
    "languages": [
      "maasai",
      "samburu",
      "ilchamus",
      "turkana",
      "kalenjin",
      "pokot",
      "taveta"
    ],
    "published": "1905",
    "contribution": "Complete 19,251-line transcription of A. C. Hollis, The Masai: Their Language and Folklore, with an Introduction by Sir Charles Eliot (Oxford: At the Clarendon Press, 1905, pp. i–xxviii, 1–359, Plates I–XXVII, Fold-out Map — Public Domain): Preface (pp. v–vii, signed A. C. H., Mombasa, Dec. 1904, crediting primary informant Justin Ol-omeni along with Napisyeki and Masai elders of Kaputiei, Naivasha, and Kisongo); List of 27 Plates (pp. ix–x); Introduction by Sir Charles Eliot (pp. xi–xxviii: History of the Masai, M-Batyany, the 1890s rinderpest epidemic, civil war between Lenana [Ol-Onana] and Sendeyo [Sendeu] ending in 1902 peace, and comparative Nilotic/Nilo-Hamitic grammar); Part I Complete Masai Grammar (pp. 1–102: Alphabet, close vs. open ē/ō & nasal î/û, post-nasal consonant mutation k→g, t/s→d, p→b, sh→j, w→b, euphonic insertion a/e/l, tonal Nominative vs. Accusative & Present vs. Past; Masculine ol-/o-, Feminine eng-/en-/em-/e-, Neuter e-weji, Vocative lo/li & na, Compound Relative/Genitive Articles ol-le-, en-e-, e-ne-; 6 Substantive Plural Classes [Class I consonant stems in -i with Exceptions A -in, B -t + -a/-o, C -a/-o; Class II vowel stems in -n with Exceptions A–D; Class III plurals in -k/-ak/-ek/-ok with all 5 finger names on p. 26 fn. 1; Class IV collective plurals forming singular in -i/-ni covering tribes, communities, insects & objects; Class V singulars adding -a/-o to plural; Class VI invariables, pluralia tantum, suppletives & compounds]; Kinship table; Adjectives, Numerals 1–1,000 & Finger-Counting Signs 1–60; Personal, Possessive, 4-Degree Demonstrative, Reflexive, Relative, Interrogative & Indefinite Pronouns; Class I Simple Verbs vs. Class II I-Stem Verbs, the 27-Row Contained Subject-Object Prefix Table, Passive -i/-ki, 8 Derivative Verb Formations, Irregular/Suppletive Verbs, Adverbs, Prepositions te/to & oo/o, Conjunctions & Interjections); Part II All 20 Interlinear Masai Stories ('N-atīnin oo-'l-Maasae, pp. 103–237); Part III All 75 Masai Proverbs and Sayings ('N-deṗen oo-'l-Maasae, Nos. 1–75, pp. 238–252) + All 24 Masai Enigmas ('L-ōyetyani loo-'l-Maasae, Nos. 1–24, pp. 253–259, opened by Oiyote! — E-euo!); Part IV Divisions of the Masai People ('Orot oo-'l-Maasae, pp. 260–263: Pastoral Il-Maasae vs. agricultural 'L-Oikoṗ / Il-Lumbwa, 4 Clans & 19 Families, 'L-oodo-kishu vs. 'L-oorook-kishu, 5 Districts, Right/Left Circumcisions, 3 Warrior Cohorts & 15 Remembered Ages 1791–1904); Part V Masai Myths and Traditions ('L-omon li-oṗa, pp. 264–281: Eng-ai narok vs. Eng-ai nanyokye, En-e-'n-aunir, 2 versions of Naiteru-kop, Le-eyo, Sun/Moon & Eclipse Song, Stars, Rainbow, Comets, Lightning, Earthquakes, Volcanoes & Caves); and Part VI Masai Customs ('N-dīun oo-'l-Maasae, pp. 282–356: Ornaments, Salutations, Cattle Brands Il-mishiren & Ear-Slits Il-ponot, Shields/Spears, Moving, I-manyat & Il-puli, Naming En-domono, Circumcision E-murata, E-unoto & Ol-aunoni, Marriage, Refuge Kitala, Death & Word-Taboo, Burial & Sacred Clan Snakes Il-asuria, Inheritance, Crimes, Tooth Extraction, Shaving, Spitting, Food, 9 Wild Animals, Games, Peace O-sotwa, Patureshi, Omens Il-tiloi, 'L-oibonok 9-generation genealogy, Smiths Il-kunono, 10 Day-Divisions, 4 Seasons & 12 Lunar Months, 45+ Botanical Species Il-kak & Firesticks ol-piron/en-dole, Surgeons Il-abaak, Curses/Oaths/Ordeals, and 8 Songs & Prayers 'Singolioitin).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom",
      "blog research"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (all 19,251 Markdown lines, pp. i–xxviii, 1–359, Plates I–XXVII, Map) across maasai.json, MAASAI_GRAMMAR_SECTIONS (12 comprehensive sections), MAASAI_UNITS (Units 1–14), MAASAI_PROVERBS (all 75 proverbs & 24 enigmas), ethnographic-summaries.ts, lexical-highlights.ts, and blog-posts.ts."
  },
  {
    "id": "kirk-somali-grammar-1905",
    "title": "A Grammar of the Somali Language with Examples in Prose and Verse and an Account of the Yibir and Midgan Dialects",
    "fileName": "A Grammar Of The Somali Language Kirk 1905.md",
    "processedPath": "language-sources/raw/A Grammar Of The Somali Language Kirk 1905.md",
    "languages": [
      "somali"
    ],
    "published": "1905",
    "contribution": "Complete 216-page Somali grammatical treatise, oral literature anthology, and Yibir/Midgan linguistic monograph by Lt. J. W. C. Kirk, B.A. (King's College, Cambridge; Duke of Cornwall's Light Infantry & 6th [Somaliland] Battalion, King's African Rifles; Cambridge University Press, printed by John Clay, M.A., 1905; Preface dated Sevenoaks, Dec. 1904; Bibliography of 8 works [Rigby 1849, Hunter 1880, Cust 1883, Schleicher 1892 & 1900 ed. Reinisch, Paulitschke 1896, Larajasse & Sampont 1897, Larajasse 1897]; Erratum p. xii correcting § 15b đig/đignin from \"warm, warming\" to \"warn, warning\"; Introduction pp. xiii–xvi on 11 Somali–Gala cognates, prefix vs. suffix conjugation wan imi vs. wan shega, and Ishhak vs. Dolbohanta / Bari vs. Galbed dialect tables): Part I Orthography (§§ 1–7: 23 consonants incl. cerebral đ = Sanskrit ड, g = ق, gh = غ, hh = ح, kh = خ, ‘ = ع, 5 vowels + ô, 4 diphthongs ai/ei/au/oi, diaeresis aï/baän/eï, vowel harmony & l+t > sh coalescence); Part II Accidence (§§ 8–135: 4 parts of speech, proper names & nicknames, 3 verb-noun classes in -nin/-in, -d, -s/-n, quality nouns in -nímo & -an, masc. guttural -k/-g/-h/-Ø & fem. dental -t/-d/-sh suffixes, 3 definite article vowels -i, -a, -u, 4 demonstratives kan, kèr, kas, kò, inclusive/exclusive pronouns, 6 plural formations with gender polarity, cardinals 1–1,000, subtractive 19/29/99, 6 fractions, all 19 radical adjectives, 3 regular conjugations [sheg, gùrso Tables I–IV, samèi + -yi verbs] + 7 irregular/prefixing/defective verbs [oll, imo, ođo, ogho, aho, laho, wah], 4 derivative verb classes [Intensive, Reflexive, Attributive, Causative with guttural > j], verbal/conjunctive particles, adverbs, prepositions, interjections & salutations); Parts III–IV Syntax (§§ 136–289: SOV order, wa/ba/ya focus syntax, 7 verbs of existence, wa runtai idiom, 8-slot pre-verbal particle hierarchy H→A in § 236, relative/temporal/final/4 conditional/causal/concessive clauses, and direct-speech Oratio Obliqua); Appendices I–III (5 seasons, 12 lunar months, 7 days, 18 day/night divisions, Indian rupee/anna/pie currency, weights/measures, Sketch Map & Genealogical Table of Asha/Gob [Ishhak & Darud], Dir [Esa, Gadabursi], and Sab [Hawiya, Tomal, Midgan, Yibir]); 11 Prose Stories (I–X folktales + XI Col. Swayne's 1900–1902 Expeditions by Cpl. Nur Jama); 14 Alliterative Songs (I–X Gerar, XI–XIII Gabei, XIV Hes); and Account of the Yibir (Anas) & Midgan (Alowa) Dialects (samanyo tax, aldibo tree, Midgan root raghahh, 26 Midgan & 75 Yibir sentences, Yibir Conversation, Story of Mohammed Hanif & Au-Bakhardli, ~260 Yibir/Midgan headwords, Comparative Vocabulary, Quinary Numerals, and 20 Wild Animals, pp. 184–214).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (pp. i–xvi + 1–216, §§ 1–289, Appendices I–III, Prose I–XI, Songs I–XIV, and Yibir & Midgan Dialect Monograph) into somali.json (2,500 entries), SOMALI_GRAMMAR_SECTIONS (7 comprehensive sections), SOMALI_UNITS, and KENYAN_PROVERBS."
  },
  {
    "id": "northcote-nilotic-kavirondo-1907",
    "title": "The Nilotic Kavirondo",
    "fileName": "The_Nilotic_Kavirondo_Northcote_1907.md",
    "processedPath": "language-sources/raw/The_Nilotic_Kavirondo_Northcote_1907.md",
    "languages": [
      "luo"
    ],
    "published": "1907",
    "contribution": "Ethnographic and lexical study of the Jaluo (Dholuo): homestead layout (dala, chiel), marriage & dowry (keny), inheritance, time-of-day birth naming system (Onyango/Anyango, Oching/Aching, Odiambo/Adiambo, Otieno/Atieno) and circumstantial names (Obele, Oliech, Obonyo, Okach, Opiyo, Odongo), funeral ceremonies, religion (Chieng, Nyasaye), and rain-making (G. A. S. Northcote, Journal of the Royal Anthropological Institute Vol. 37, pp. 58–66, 1907 — Public Domain).",
    "appUses": [
      "dictionary",
      "course lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated line-by-line into luo.json, LUO_GRAMMAR_SECTIONS, and cultural-wisdom.ts."
  },
  {
    "id": "hollis-nandi-1909",
    "title": "The Nandi: Their Language and Folk-Lore (By A. C. Hollis, with Introduction by Sir Charles Eliot, Oxford: Clarendon Press, 1909, pp. i–xl, 1–328, Plates I–XLIV, Figs. 1–53, Map)",
    "fileName": "The Nandi Their Language And Folk Lore Hollis 1909.md",
    "processedPath": "language-sources/raw/The Nandi Their Language And Folk Lore Hollis 1909.md",
    "languages": [
      "kalenjin",
      "turkana",
      "maasai",
      "pokot",
      "luo",
      "samburu"
    ],
    "published": "1909",
    "contribution": "Complete 328-page monograph + 40-page Introduction (pp. i–xl, 1–328, Plates I–XLIV, Text Figs. 1–53, Fold-out Map) by A. C. Hollis, with Introduction by Sir Charles Eliot, K.C.M.G. (Oxford: At the Clarendon Press, 1909 — Public Domain): Preface (pp. iii–xii: 5 prior works cited [Last 1885, Farler in Keane 1896, Johnston 1902, Hobley 1902/1903, Delmé-Radcliffe 1905]; 6 named indigenous informants: 5 Nandi warriors Oriare, Matang, Ar-ap-Sirtoi, Ar-ap-Kuna, Ar-ap-Chepsiet, and Kipsikīs/Lumbwa Chief Medicine Man Kipchomber or Ar-ap-Koileke with his son Sonaiet or Ar-ap-Kipchomber; acknowledgements to E. Battiscombe, E. L. Waring, Dr. A. D. Milne, W. J. Monson, Prof. J. G. Frazer, R. R. Marett; List of 44 Plates & 53 Text Figures); Introduction by Sir Charles Eliot (pp. xiii–xl: Nandi–Lumbwa–Buret–Sotik–Kamasia–Elgeyo–Suk–Elgonyi–Kipsorai–Nyangori–Kony–Dorobo continuum; Rift Valley Nandi toponyms Morendat [< marandut \"footprint\"] & Suswa [< susuo \"grass\"]; Lake Natron Dorobo dialect [arko, tichee/ndichee, ar-a-mach-a, ar-ke-mach-a, kuyanda, pelyandee, puniandee, muyare, taamuye, maae, kaawe, Vanda, vaiyaa]; Taveta-collected Turkana grammatical sketch on pp. xxix–xxxiii [articles e-/nye- & a-/nya-, plurals ñgi-/ñga-, numerals 1–100, pronouns Ayoñg/Iyoñg/nyezi, verb A-cham-it, ka-cham-it, ki-cham-it, ny-a-cham-it, ka-cham-it-ae, suffixes -un, -kino, ita-]; and Hollis's 150-word Kunōno [Masai Smiths] vocabulary on p. xxxiii with 4 unique forge words e-samereita, o-siota, en-gandiit, e-wuyuwuyu); Part I Ethnography & Folklore (pp. 1–151: endonym Chemñgal vs. Nandi; 6 Emet counties [Wareñg, Masop, Soiin/Pelkut, Aldai, Chesume, Em-gwen]; 15 Pororiet districts [Kâmelilo to Tuken]; all 17 Oret clans [Kipoiis to Chemur] with principal names, women's names, totems, taboos & Appendix II etymologies; 7 cyclic Ipinda age-sets [Maina, Nyonge, Kimnyike, Kâplelach, Kipkoiimet, Sowe, Juma], 3 warrior fires [Changen-opir, Kipal-koñg, Kiptoito] & Saket-ap-eito festival; 24-part hut plan [Kaita/Kot, p. 14]; cattle & salt-lick songs; weapons; 13 earthenware pot types [pp. 35–36]; Smith Ar-ap-Sutek's iron-ore prayer at Kâptilol/Ñgoriamuk [pp. 36–37]; Asis, Ilat, Chemosit & Oiik religion & verbatim prayers [pp. 40–48]; Orkoiyot genealogy [Kipsegun → Kopokoii → Turukat → Kimnyole → Kipchomber, Koitalel/Samwei & Kipeles/Tamasun, p. 50]; Tum circumcision rites & songs [pp. 52–60]; marriage & 3-generation naming example [p. 68]; homicide fines [tuk'-am-met = 5 cows, 5 bulls, 30 goats + iri-ñgot cow, pp. 73–75]; oaths; finger-counting 1–60 [pp. 88–89]; 3 taboo classes [ñgwonik, kerek, simwek]; 47 kinship terms [pp. 92–94]; 12 months [Kiptamo to Ñgotioto], 30 lunar phases & 36 daily hours [pp. 94–97]; 18 Folk-Tales [13 English + 5 Interlinear Nandi + Cumulative Chant, pp. 101–123]; all 57 Proverbs [Atindonik-ap-Nandi, pp. 124–132]; and all 76 Enigmas [Tongōchik-ap-Nandi, pp. 133–151]); and Part II Complete Nandi Grammar (pp. 152–231), A–Z English–Nandi Vocabulary (pp. 232–312), Appendix I: 83 Botanical Species Across 32 Plant Families Identified by E. Battiscombe (pp. 313–316), Appendix II: Meanings of the Clan Names (p. 317), and Index (pp. 319–328).",
    "appUses": [
      "dictionary",
      "comparative translator",
      "course lessons",
      "grammar lessons",
      "cultural wisdom",
      "blog research"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (pp. i–xl, 1–328, Plates I–XLIV, Figs. 1–53, Map) across kalenjin.json, turkana/grammar-reference.ts, maasai/grammar-reference.ts, dictionary-search.ts, cultural-wisdom.ts, and dictionaries/metadata.ts."
  },
  {
    "id": "burt-swahili-grammar-1910",
    "title": "Swahili Grammar and Vocabulary (Kimvita / Mombasa Standard)",
    "fileName": "Swahili Grammar And Vocabulary.md",
    "processedPath": "language-sources/raw/Swahili Grammar And Vocabulary.md",
    "languages": [
      "swahili"
    ],
    "published": "1910",
    "contribution": "Comprehensive Mombasa (Ki-Mvita) Swahili grammar and lexicon: Part I Dialect survey (Kingozi, Kiamu, Kipate, Kitikuu, Kimvita, Kiunguja, Kimrima), Rev. W. E. Taylor's phonetic tables (dental vs. cerebral t/d, aspirated p'/t'/ch'/k') & syllabary; Part II 21 Berlitz-method Studies, Key to Exercises, Money/Weights/Measures, 3 Swahili letters, Swahili Calendar, Synonyms & Homonyms; Part III ~2,500-entry A–Z Swahili–English Vocabulary (Mrs. F. Burt, SPCK London, 1910 — Public Domain).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated line-by-line into swahili.json, SWAHILI_GRAMMAR_SECTIONS, and SWAHILI_UNITS."
  },
  {
    "id": "dundas-baringo-tribes-1910",
    "title": "Notes on the Tribes Inhabiting the Baringo District, East Africa Protectorate",
    "fileName": "Notes On The Tribes Inhabiting The Baringo District.md",
    "processedPath": "language-sources/raw/Notes On The Tribes Inhabiting The Baringo District.md",
    "languages": [
      "ilchamus",
      "pokot",
      "kalenjin",
      "turkana",
      "samburu",
      "maasai",
      "rendille"
    ],
    "published": "1910",
    "contribution": "Complete 24-page monograph + 3 photographic plates (pp. 49–72, Plates XV–XVII) by Hon. Kenneth R. Dundas (Journal of the Royal Anthropological Institute Vol. 40, Jan.–Jun. 1910 — Public Domain): Baringo hydrography (Kerio, hot-salt-source Sogota, Tirkwel/Suom, Ngingyang [= Samburu \"crocodile\", p. 49 fn. 1] and Kito); Njemps/Njamus/Nyarusi (pp. 49–55: <=1,500 souls across Njemps Liabori, Njemps Lekepir and Korvan [Logogwa]; aboriginal Il Geroi; Samburu Il Doigio Loroghi horn legend, Lorogishu/Kwakituk and Rendille Naroshon on Sogota–Lomello, Lobbeyok at Il Maruroi/Tiati, Masai Segellai and Tigirri wars, Moruanghakhulakh [\"Hill of Thieves\"] and El Bogoi; all 16 Njamus clans across 6 tribes; 11-man Il Derito/Il Mayek sirwa-sheep furrow ceremony and 6 game taboos + 4-elder crop-medicine ceremony; 12-month Lare and Ngolong calendar); Laikipiak 5 main divisions (pp. 55–56); Suk/Bawgott (pp. 56–61, 72: 3 Kasauria migrations from Koma across Suom/Tirkwel and Kolowa raid on Moiven/Muttia/Il-Mokwan/I-Sirikwa, 11 geographical divisions, 5 pastoral divisions + Kamiriongo and Tawl, all 24 orten clans and 14 totems, Ellap/Ellat, Mt. Alongol and Kerial, verbatim sick prayer, warrior Lowalan and 12-month Kamei/Bengat calendar); Maragwetta, Ndo (Chebleng) and Hill Suk (pp. 61–65: 13 Chebleng sections/clans/totems, Sangwirr, Kabkamat [Olmo], 11 Hill Suk sections, 10–12 mile Ndo canal, half-trowel adze-spade, elephant law and 1-female-goat-per-half-acre land price); Kamasia/Tugen 14 Kapteberewa and 6 Nderois clans/totems (pp. 65–66); Turkana 16 tribes, 19 Ngoitunya/Ngolio attegir clans (incl. Ngaruwo rain-makers), 6 life stages, asavanissia, Agipie and 12-month Nakiborror/Nakamou/Nait calendar (pp. 66–70); Comparative 6-Tribe Hill Calendar Table (p. 72); and Plates XV–XVII.",
    "appUses": [
      "dictionary",
      "cultural wisdom",
      "grammar lessons"
    ],
    "contentTypes": [
      "vocabulary",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (pp. 49–72 + Plates XV–XVII; all 585 Markdown lines) across ilchamus.json, pokot.json, kalenjin.json, turkana.json, samburu.json, maasai.json, rendille.json, grammar-reference.ts files, cultural-wisdom.ts, and blog-posts.ts."
  },
  {
    "id": "hobley-akamba-ethnology-1910",
    "title": "Ethnology of A-Kamba and Other East African Tribes (Cambridge Archaeological and Ethnological Series)",
    "fileName": "Ethnology Of A Kamba And Other East African Tribes.md",
    "processedPath": "language-sources/raw/Ethnology Of A Kamba And Other East African Tribes.md",
    "languages": [
      "kamba",
      "kikuyu",
      "maasai",
      "meru",
      "samburu",
      "kalenjin",
      "rendille"
    ],
    "published": "1910",
    "contribution": "Complete 174-page monograph (pp. v–xvi, 1–174, Plates I–XXVII, Map) by C. W. Hobley, C.M.G., A.M.Inst.C.E., His Majesty's Provincial Commissioner, East Africa Protectorate, with Introductory Note by Prof. William Ridgeway (Cambridge University Press, 1910 — Public Domain): Part I The A-Kamba (Ch. I Distribution & Population of 233,000 across Ulu, Kitui & Mumoni, physical measurements, 3 dental-mutilation tools [Ngomo, Kilingi, Ngolia], scarification, red ochre Maumbu & Muingu oil, Kithangaona, Kiengo, Kisesi, Ikwata; Ch. II Architecture of Musi, Ikumbi, Ikua, Nzeli, Kizuka, Itaa, Mboani & Kithanga; Ch. III Iron smelting & forging [Kiuvi/Kiungu, Mwaa, Mukua, Ikangi], chain making [Muini, Kifuli, Nthengele], pottery [Kibuka, Mbaisu, Nzeli] & Kithito taboo on potters; Ch. IV 19 cultivated crops with maturation periods, Muo digging stick, foods [Usuru, Kitheki, Ngima], wild salt [Munyo, Kithi], fire-drill [Uwindi, Kika] & 4 traps [Mukwa, Ikehengi, Mwito, Kisungula]; Ch. V 60+ animals, livestock & beekeeping [Mwatu, Kikolo, Mboani]; Ch. VI Ukiya-iwa beer brewing [Ndingi, Muthi, Miatini, Njeli, Ua], tobacco & 8 musical instruments [Mbebe, Soo, Nguli, Zomali, Kithembi, Ngutha, Engoma, Muvungu/Cha]; Ch. VII Dress & ornaments [Kimengo, Nthale, Ndumunya, Kitanu, Katungi, Muchi, Kikuto, Mithanga, Imili, Mulia, Ndiki, Mulinga, Kitanga, Engomi, Kiangi, Ibuo], 5 stool woods & 8 wire-inlay Milia stool patterns on Ibila [Kithaitha, Vioo, Eumu, Kitui, Katungi, Keinga, Kizoro/Kisolo]; Ch. VIII Weapons & warfare [Uta, Mize, Moluka, Maange, Musi, Ivai, Mbua Mbui, Ubiu, Ndo, Nzomo, Ndabu, Ndata, Ngwalo, Mutwe tumo, Mutwe ubiu, Musizili, Mukulwa, Mutatha, Mobou]; Ch. IX 8 social grades from Kivisi/Muitu to Atumia ma Ithembo, genealogical kinship chart & terms; Ch. X 7 age-grade salutations, 11-month calendar [Mwa to Mubiu] & 2 rainy seasons [Ambua anzwa, Ambua ua], 8 dances/songs, 5 Kweta ndai riddles, astronomy, Mutingwano & Chiathi ya mathoa; Ch. XI Marriage [Mbui ya ntheo, Kuatia, Kupikila], birth [Mbia], twins & sitting burial; Ch. XII 25 Ulu & 27 Kitui Mbai clans, sub-clans & totems; Ch. XIII Nzaikonini, Nzaikoneni & Mbabani initiation, 27 sacred Nzaiko code words & 21 pictographic Musai stick symbols; Ch. XIV Customary law [Ndundu, Kithito, Ndiu, Kingñoli, Chuma, Kino, Wala, Kikuunguti], blood-money [Kiti: 11 cows & 1 bull for a man, 4 cows & 1 bull for a woman; Kitui: 14 cows & 1 bull / 7 cows & 1 bull], assault damages table & debt law; Ch. XV Engai/Mulungu, Aiimu ancestral spirits, Ithembo shrine sacrifices & Kilumi dance; Ch. XVI 6 classes of Mundu Mue divination & Muthiiti vs. Muoiin witchcraft; Ch. XVII Makwa & Thabu curses/taboos [Ngondu]; Ch. XVIII Medical & surgical practices [Choa, Kititi]; Ch. XIX Historic famines from ~1836–1898 [Changa, Ngovo, Kiasa, Ngeeti, Kanyua manzi, Ndata, Kubandia, Muvunga]; Ch. XX 6 Wano folktales; Ch. XXI 46 clan livestock brands); Part II Other Tribes (Ch. I Masai moieties Oodo Mongi & Orok Kiteng, 7 gilat & 36 sub-gilat, Eo Endomono naming rite & 7 Sirata shield patterns; Ch. II Comparative cattle brands of Kikuyu [87 mbari brands], Masai & Kamba [Figs. I–CXI]; Ch. III 15 Kikuyu Thahu causes, 7 sacred herbs, Ku'ringa-thengi & Kithathi; Ch. IV Chief Medicine-Man Kamiri & Kutagura 5-twig divination table; Ch. V First published ~200-word Mogogodo/Yaaku vocabulary, numerals & verbs [pp. 146–155]; Ch. VI Mweru [22 sub-tribes & chiefs, 13 Mwiria clans & Netiri totems], Sambur [9 sub-tribes & 3 gilat], Laikipiak [6 sub-tribes & 3 gilat], Uasingishu [4 gilat & totems], Elgeyo [9 Oret & totems], Kamasia [7 Oret & totems, 12 months], Randili/Rendille [6 sub-tribes, 7-day week Hahat to Sere gal, camel lore], Lumbwa & Sotik [7 districts, 6 Sotik & 5 Lumbwa Korgat & totems]); and Appendix (1)–(5) (Mumoni 22 clans/totems & beehive brands, Kitui 25 clan beehive brands, Mbooni/Ulu 14 clan beehive brands, 7-step Kithito formula, and Tharaka/Thaka 14 clans & totems, pp. 165–169).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom",
      "blog research"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (pp. v–xvi, 1–174, Plates I–XXVII) across kamba.json, kikuyu.json, maasai.json, meru.json, samburu.json, kalenjin.json, rendille.json, grammar-reference.ts files, course.ts files, cultural-wisdom.ts, and blog-posts.ts."
  },
  {
    "id": "routledge-prehistoric-people-1910",
    "title": "With a Prehistoric People: The Akikúyu of British East Africa",
    "fileName": "With A Prehistoric People Routledge 1910.md",
    "processedPath": "language-sources/raw/With A Prehistoric People Routledge 1910.md",
    "languages": [
      "kikuyu",
      "maasai"
    ],
    "published": "1910",
    "contribution": "Complete 392-page monograph + Frontispiece + Plates I–CXXXVI + Map (pp. i–xxxii, 1–392) by W. Scoresby Routledge, M.A. (Oxon.) and Katherine Routledge (born Pease), Som. Coll. (Oxon.), M.A. (Trin. Coll., Dublin) (Edward Arnold, London, 1910 — Public Domain): Prefaces and 17 named informants (Wa-ma'-hu, Wa-nang'-a, N'jar'-ge, Ka-no'-hi-a, Ki-ran-ju'-i, Ka-ran'-ja, Ki-lan'-go; Do'-sa, Ali bin Sha-ku'-a, Ali bin Salim, Lou-be'-a; Chiefs Mun'-gé, Ka-ru'-ri [and woman lieutenant Wan'-gu] and N'du-i-'ni, Medicine-Man Ra-zi'-mi, \"Jash'-u\" wa Ka'-ru'-ri, N'jo-ro'-gi, plus Na-ga-tú-u, Mo-só-ni, Kahiga and De-gua wa Ki-ma-ni); A'si (A-ki-e-ki / N'dor-ó-bo, 30-goat clearing sale) and A-gum'-ba (A-mai-tho ma chi-a-na, 4 ft 6 in., obsidian pit-dwelling excavation); 10 Ages Since Creation (Man-jí-ri [Mam'-ba and N'jí-ri] to Mu-i-run'-gu); 17 Initiation Years (1891 Ngan'do to 1907 Ka-ban'go); 13 exogamous clans (i-ri-ka) and Hobley's 9 totems + ki-rú-me curse; 10 male and 7 female age-stage terms; 6-month lunar crop calendar; 15-ft 19-post hut building; creeper bridges; 30–45s fire-making (u-lin'-di and je'-ka); 3-step string-making; iron smelting (i-li'-ma, mu'-ra, ki-ka'-ma), smithing (mu-hi'-ga, ke-li'-ha), cold wire-drawing (ú-ta, rú-ga = ró-ga + ke-rá-si + n'gó-me) and 6-step chain-making (ga-zi'-ka → ki-len-ge'-ri / mu-i-nor'-o); 2-stage pottery (li-um'-ba + m'bi-u/n'daka = 6-lb mun'-du-a bars); 30-item Wa-wer'-u market price list (Feb. 16, 1908); 47-symbol and 38-symbol ki-shan'-di rattle keys; 6 musical scores by Dr. C. S. Myers; Homesteads A–G, marriage, Second Birth, Mam-bú-ra, 4 burial methods, 12 dances + maize-harvest clay image dance, 5 Guso riddles, Mo-ran'-ja/Ki-á-ma/N'já-ma governance, 9 dated trials, 6 Mu-ma ordeals and 4-district penalty tables; N'gaí sacrifice and Chief Mungé's phonograph prayer, Ai-twi-ka / N'da-ma-thi-a snake worship, N'gor'o vs. N'góma, Mun'-du Mu-gu 5 m'boo-thu gourds and m'wá-no lot-gourd, prophets Ki-shu-ro and Nya-kai-ro, 29 Thá-hu causes, 9 Tuso plants, 14-hole Ki-tha-si of De-gua wa Ki-ma-ni and 15 medicines from Kahiga; 3 myths and 13 Ro-gá-nu folktales; Appendices I–V (incl. Appendix II: The Masaí, pp. 344–349); 25-Work Bibliography; and Bidirectional Glossaries (pp. 367–379).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (pp. i–xxxii, 1–392, Frontispiece + Plates I–CXXXVI + Map; all 11,833 Markdown lines) across kikuyu.json, maasai.json, kikuyu-proverbs.json, cultural-wisdom.ts, KIKUYU_GRAMMAR_SECTIONS, MAASAI_GRAMMAR_SECTIONS, KIKUYU_UNITS, and blog-posts.ts."
  },
  {
    "id": "hollis-taveta-1910",
    "title": "Taveta Sayings and Proverbs & Taveta Enigmas",
    "fileName": "taveta.json",
    "processedPath": "dictionaries/taveta.json",
    "languages": [
      "taveta"
    ],
    "published": "1910–1911",
    "contribution": "Collection of ~100 authentic Kitaveta proverbs, 66 riddles, and lexical glosses alongside Rev. A. R. Steggall CMS Taveta texts (1892–1906) (A. C. Hollis, Journal of the African Society Vols. 9–10, 1910–1911 — Public Domain).",
    "appUses": [
      "dictionary",
      "cultural wisdom",
      "comparative translator"
    ],
    "contentTypes": [
      "vocabulary",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated into taveta.json and the Cultural Wisdom proverb collection."
  },
  {
    "id": "beech-suk-pokot-1911",
    "title": "The Suk: Their Language and Folklore (By Mervyn W. H. Beech, with Introduction by Sir Charles Eliot, Oxford: Clarendon Press, 1911, pp. i–xxiv, 1–151, Plates I–XXIV, Maps I–III)",
    "fileName": "The Suk Language And Folklore Beech 1911.md",
    "processedPath": "language-sources/raw/The Suk Language And Folklore Beech 1911.md",
    "languages": [
      "pokot",
      "kalenjin",
      "turkana",
      "ilchamus",
      "samburu",
      "maasai",
      "luo"
    ],
    "published": "1911",
    "contribution": "Complete 5,642-line transcription of Mervyn W. H. Beech, M.A., District Commissioner, East Africa Protectorate, The Suk: Their Language and Folklore, with an Introduction by Sir Charles Eliot (Oxford: At the Clarendon Press, 1911, pp. i–xxiv, 1–151, Plates I–XXIV, Fold-out Maps I–III — Public Domain): Preface (pp. v–vi, signed M. W. H. B., Great Bealings: compiled while Acting DC Baringo for a little over a year, vocabulary revised with ~20 Suk collectively, thanking Sir Charles Eliot, Mr. A. C. Hollis for Turkana MSS., Mr. W. Pickford DC Ravine, and Hon. A. Bruce ADC Baringo); List of 24 Photographic Plates (Plates I–XXIV, pp. ix–x, featuring Lôrimo, Lōseron, Lowelan, \"Turkwel\", Kidarile, Karôle, Lurumutun, Akinichông, and PC Mr. S. S. Bagge, C.M.G.); Introduction by Sir Charles Eliot (pp. xi–xxiv: Nilotic vs. Nilo-Hamitic sub-groups, citing the 1910 Mill-Hill Elementary Grammar of the Nilotic Kavirondo Language [Dhŏ Lwo]; Nandi → Kamasia → Endo → Suk continuum; 21 Suk guttural gh vs. Nandi y/i/vowel cognate pairs on p. xvi fn. 1; glottal stop ʻ; r/l interchange; fossilized singular article -t/-to/-do without plural -k; critique of Johnston's chichino, pi'chuno, and mu on p. xviii; double pronominal prefix+suffix verb conjugation; negative ma-...-nye; derivative suffixes; 13 examples of Suk losing Nandi's movable i- prefix class on p. xx; and critique of Beech's Turkana Appendix on pp. xxiii–xxiv); Part I Ch. I The Suk (pp. 1–26: autonym Pôkwut sg. Pĕch-on; 8 geographical sections Chep-tulel, Kerūt [\"black tree beetle\"; weiwei = \"lake\"], Maghan, Sekēr [\"cowrie shells\"], Kapkoma, Muinoʻ, Kapukōgh, Tiati; origin from Chôk/Chŭk & Sekēr + refugees verified by Dr. Leys's anthropometry; Endo [Chep-bleñg] migration from Kaptapar & split rock-pillar legend; Sambur wizard stick, En-ginyañg [\"crocodile\"], Ka-ruwon, 2-year flight to Kapukōgh from Laikipia Masai, return to Ribkoʻ & Turkana alliance against En-jemusi; 2 intermarrying moieties Kasauria & Kiplegit [+ Kacheribkwaʻ]; Tiamalok's 3 clans Sopan [elephant], Terchon [rain], Lakenion [bull-frog]; 8 cyclic 15-year age-sets Pĕn [Mainaʻ, Nyongu, Merkutwa, Kablelach, Kip-koimet, Karongoro, Sowa, Jumoʻ] & 3 subdivisions [Nerkau/Chagen-ôpero, Ñgiru, Nimur]; Ki-ruwok-in advisers Lowelan, Kamuta, Karôle, Latanyale & war-leaders Kidarile, Lôrimo; Turkana Dorobo 30-ft tree-fork granaries at En-gabotoʻ & Hill Suk 6-ft pile huts/Maghan caves; 50% cattle loss, kamar raid-ox, lu [drink milk] vs. igh [drink water], muk-a vs. set calabashes, Rs. 12 donkey hut-tax value [bought from Turkwel Turkana for Rs. 3; 40 sheep/goats = 1 cow]; food taboos & Mombasa interpreter's fabricated pig/tortoise taboo; honey-wine [koman] & sari breech-birth dance; dress, siolip chignon & weapons; communal irrigation & verbatim Planting Hymn to Torôrut [p. 16], ½-acre-per-goat land price [Endo: 3 jars honey-wine + 2 goats]; women potters [koko-ter] chant & curse [pp. 17–18]; hill smiths [ki-tong-u] at Kaparloñg; Tiamolok's pantheon [Torôrut, Seta, Arawaʻ, Ilat, Kokel, Topogh, Asis; fn. 1 p. 19 En-jemusi En-Gai & En-Gop, Kamasia Asis = wife of Torôrut]; circumcision, 16th-day naming, 3-ft kraal dung burial, elephant hunting & alöit trap, 3 dances [Amumūr, Kedoñgô, Tum] & 6-stringed pakan lyre, evil-eye exile Loterok, bee-swarm cry & beaten-dog complaint to Asis [p. 26]); Part I Ch. II Comparative Customs across 5 Tribes (pp. 27–37: Pastoral Suk, Agricultural Suk, Endo, Turkana [Chief Aijigwa], and En-jemusi [Chief Launjali] across 13 legal categories, including the Nov. 1909 Cheptulel Suk–Endo peace oath); Part I Ch. III 12 Folk-Tales & 18 Tiangoi! Riddles (pp. 38–45); and Part II Complete Suk Grammar (pp. 46–92), 55 Useful & Idiomatic Phrases (pp. 92–97), 2 Interlinear Suk Stories (Kip-kokech ngô Ki-blerkwa & Kechir ngô Ñgaror, pp. 97–98), A–Z English–Suk Vocabulary (pp. 99–149), 25-Item Turkana–Suk Comparative Appendix (pp. 150–151), and Fold-out Maps I–III (PDF pp. 230–234).",
    "appUses": [
      "dictionary",
      "comparative translator",
      "course lessons",
      "grammar lessons",
      "cultural wisdom",
      "blog research"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (all 5,642 Markdown lines, pp. i–xxiv, 1–151, Plates I–XXIV, Maps I–III) across pokot.json, kalenjin.json, turkana.json, ilchamus.json, dictionary-search.ts, cultural-wisdom.ts, dictionaries/metadata.ts, and blog-posts.ts."
  },
  {
    "id": "madan-english-swahili-vocabulary-1917",
    "title": "English-Swahili Vocabulary (Compiled from the Works of the Late Bishop Steere and from Other Sources, SPCK London, 1917)",
    "fileName": "English Swahili Vocabulary.md",
    "processedPath": "language-sources/raw/English Swahili Vocabulary.md",
    "languages": [
      "swahili"
    ],
    "published": "1917",
    "contribution": "Complete 56-page (72-PDF-page) A–Z English–Swahili Vocabulary (~2,500 headwords) compiled from the works of the late Bishop Edward Steere (Swahili Exercises, Handbook of the Swahili Language, and Grammar in Swahili) and other sources by A. C. Madan, M.A. (London: Society for Promoting Christian Knowledge, 68, Haymarket, S.W., printed by William Clowes and Sons, Limited, London and Beccles, 1917; Title-page stamp: S. J. Moore, Bookseller, Nairobi, B.E.A. & signature C H Randall — Public Domain): Advertisement (PDF p. 9) explaining its origin as an Index to Bishop Steere's Swahili Exercises expanded from his Handbook of the Swahili Language; Table of 13 Abbreviations (PDF p. 11, signed A. C. M.) giving Bishop Steere's original Swahili grammatical definitions from Grammar in Swahili (Sarufi: v. = neno la [act.] kutenda kama Penda ao [neut.] kuwa na kutendeka kama Weza, Geuka; s. = Jina la kitu ao jambo; a. = Ginsi ya kitu ao jambo; adv. = Kadiri ya kuwa na kutenda; pron. = neno litumikalo Mahali pa Majina; prep. = neno la kuonyesha Kuwaje tendo ao hali; conj. = Ungo la kuungia maneno; interj. = Kilio kama Ah! Je! Loo! Kumbe; rel. = Rejeo kama -ye, -o, -cho; inter. = neno la Kuuliza; neg. = neno la Kukana; sing. = mmoja tu; plur. = wengi); and complete 56-page A–Z English–Swahili Vocabulary (Book pp. 1–56 / PDF pp. 13–68) with 120+ verbatim conversational sentences, grammatical rules (U- country prefix as Ugalla, ji- augmentatives jibwa/jitu, ki- sort/diminutive prefix, -ua reversives, -vyo/-po/-ko/-mo relatives, kabla sijafa / asijelala, negative subjunctive \"without\" clauses), maritime dhow taxonomy (mtepe, betela, bágala, batili, bedeni, dau, galawa), monsoon & tide terminology, calico & trade grades (amerikano, ulayiti, kaniki, bafta, shiti), arithmetic operations (jumla, baki, tháruba, mkasama, saba fi saba), and Indian Ocean place names.",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom",
      "comparative translator"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (Book pp. 1–56, PDF pp. 1–72) into swahili.json, SWAHILI_GRAMMAR_SECTIONS, SWAHILI_UNITS, and KENYAN_PROVERBS."
  },
  {
    "id": "johnston-bantu-1919",
    "title": "A Comparative Study of the Bantu and Semi-Bantu Languages (Vol. I [1919] & Vol. II [1922])",
    "fileName": "Johnston Bantu Languages Kenya Transcription.md",
    "processedPath": "language-sources/raw/Johnston Bantu Languages Kenya Transcription.md",
    "languages": [
      "embu",
      "taita",
      "pokomo",
      "taveta",
      "kikuyu",
      "kamba",
      "luhya",
      "kisii",
      "meru",
      "mijikenda",
      "swahili"
    ],
    "published": "1919–1922",
    "contribution": "Monumental two-volume comparative lexicon, numerals (1–1,000), personal/possessive/interrogative pronouns, demonstratives, adjectives, adverbs, verb roots, 16-class prefix/concord tables, 15-part verb paradigms, and historical-phonological analysis across 25+ Kenyan and borderland Bantu varieties by Sir Harry H. Johnston, G.C.M.G., K.C.B., D.Sc. (Cambs.) (Oxford: At the Clarendon Press, Vol. I [1919, xi + 815 pp.] & Vol. II [1922, xii + 544 pp.] — Public Domain): Part I (Vol. I, pp. iii–44: 10 Errata et Addenda on p. x, Chapters I–III History of Bantu Research, Johnston's 1901 West Elgon solution of Bleek's Gu-mu-/Ba-ba-/Ga-ma- preprefix & concord enigma, Northern Bantu boundary from Sio River & NW Elgon across Nzoia, Kavirondo Bay, Kilimanjaro, Athi Valley, Kikuyu, Mount Kenya, and Tana River to Lamu/Patta/Kiunga at 1°45' S, and complete Phonetic System γ, χ, x, š, ž, þ, đ, ṅ, c, j, ω, ō, ö, æ, ē, ī, ū, ü); Part II (Vol. I, pp. 73–97: Sub-group A 5 — 5. Lu-nyara, 5a. Lu-waṅga/Lu-haṅga/Lu-kabarasi/Lu-rimi & 5b. Lu-siṅga/Cula, 6. Lu-masaba/Ketosh & 6a. Lu-konde/Muhasa; Sub-group A 6 — 7. Ki-guzii/Igi-zii/Ki-siṅgiri/Ki-suba/Kωsωva & 7a. Ki-kωria/Ki-suna/Ki-tende/Bakulia; Group B — 8. Ki-šaši & 8a. Ki-rōri); Part III (Vol. I, pp. 98–126: Group C British East Africa — 11. Kikuyu with dialect markers K., N. Dhaicω, Nd. Ndia, E. Embu, C. Cuka, Mw. Mwimbe, M. Meru 11a, Emb. Emberre, Þ. Þeraka, Ig. Igωji, 12. Kamba, 13. Pωkωmω/Pfωkωmω, 14. Taita: Ki-dabida, Ki-sagala & Ki-siγau, 15. Taveita, 16. Nika: 16a Giryama, 16b Duruma & 16c Digω, plus Group D 17. Caga: Mωši, Śira, Keni/Urombo, Uru, Macame, Siha, Meru & Kahe); Part IV (Vol. I, pp. 131–140: Group F Zaṅgian — 21. Swahili/Ki-uṅguja with h. Ki-hadimu & g. Ki-ṅgωzi, 21a. Ki-mvita, 21b. Ki-amu, 21c. Ki-siu/Ki-ωzi, 21d. Ki-pate & Ki-šela, 21e. Ki-tikūū/Faza-Bajun/Ki-gunya, 21f. Ki-wibu & 21g. Ki-ṅgωje); Part V (Vol. I, pp. 757–800: Addenda for 5a Lu-waṅga & 5 Lu-nyara on p. 757 and complete Bibliography on pp. 787–789); and Part VI (Vol. II, pp. iii–534: Chapter VI Analytical Reviews & Noteworthy Roots on pp. 22–41 including Archdeacon Woodward's 1920 Ki-šaši vocabulary and Miss Dora Abdy's 1915 Ki-hadimu history from Windi to Śaṅgani with 30 Ki-hadimu words, Chapters VIII–XV Phonology, Prefixes, Pronouns, Numerals, 15-Part Verb Paradigm of Ωku-rora in #7 Ki-guzii/#7a Ki-kωria on pp. 497–498, and Group C/F Syntax on pp. 499–534).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom",
      "comparative translator"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Audited and integrated 100% line-by-line (Vol. I [1919] & Vol. II [1922], all 1,533 transcription lines) across all 11 Kenyan Bantu dictionaries, grammar reference guides, courses, and cultural wisdom."
  },
  {
    "id": "lindblom-akamba-1920",
    "title": "The Akamba in British East Africa: An Ethnological Monograph (2nd Edition, Enlarged)",
    "fileName": "The Akamba In British East Africa Lindblom 1920.md",
    "processedPath": "language-sources/raw/The Akamba In British East Africa Lindblom 1920.md",
    "languages": [
      "kamba"
    ],
    "published": "1920",
    "contribution": "Encyclopedic 607-page Kamba monograph (35 chapters + Addenda): geography, ethnonyms, childbirth, 3 nžaīko initiation ceremonies, marriage, nðonī avoidance & kwiūa name-taboo vocabulary, kinship system, burial & ŋgondu purification, 25 Kamba clans (mbai) & cattle marks, age/rank classes (asili, nžama, atumīa ma kīvalo, atumīa ma ītiŋo), kīþītū & muma oaths/ordeals, warfare, aīmu/muluŋgu religion, mundu muə divination, medicine & surgery, cosmology & 11-month calendar, music/dances/games, architecture, traditional archery & botanical extracts, traps, livestock, beekeeping, agriculture, food, crafts, and women's vocabulary (Gerhard Lindblom, Archives d'Études Orientales Vol. 17, Uppsala, 1920 — Public Domain).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated line-by-line into kamba.json, cultural-wisdom.ts, KAMBA_GRAMMAR_SECTIONS, and KAMBA_UNITS."
  },
  {
    "id": "kavirondo-handbook-1920",
    "title": "A Handbook of the Kavirondo Language, Containing the Grammar and Phraseology",
    "fileName": "A Handbook Of The Kavirondo Language 1921.md",
    "processedPath": "language-sources/raw/A Handbook Of The Kavirondo Language 1921.md",
    "languages": [
      "luo"
    ],
    "published": "1920–1921",
    "contribution": "Complete 128-page Dholuo grammar and phrasebook by Some Fathers of St. Joseph's Society (Mill-Hill, London), dedicated to the Right Rev. J. Biermans, D.D., Vicar Apostolic of the Upper Nile in remembrance of His Sacerdotal Jubilee (1896–1921), printed at the Caxton Printing & Publishing Works, \"LEADER\" Office, Nairobi (sole selling agents: J. P. Menezes, The Kisumu Stores, Kisumu, Price Rs. 2/-, Feast of the Immaculate Conception 1920 — Public Domain): Part I Grammar (Chapters I–IX: Alphabet, Nouns, Adjectives & Numerals, Pronouns, Verbs, Adverbs, Prepositions, Conjunctions, Interjections, Salutations), Part II Syntax & Word-Formation (Chapters I–IV, pp. 80–101), Phraseology Sections I–V (pp. 102–117), and Exercises I–VIII (pp. 118–123).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "phrasebook"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "100% of Part I Grammar (Chapters I–IX), Part II Syntax & Word-Formation (Chapters I–IV), Phraseology Sections I–V (pp. 102–117), and Exercises I–VIII (pp. 118–123) from the 1920–1921 Mill-Hill Fathers handbook are integrated line-by-line into luo.json, luo/course.ts, luo/grammar.ts, luo/grammar-reference.ts, and luo/lessons.ts."
  },
  {
    "id": "turkana-grammar",
    "title": "Turkana Grammatical Notes and Vocabulary",
    "fileName": "Turkana Grammatical Notes and Vocabulary (Barton) (1921)_extracted.txt",
    "processedPath": "language-sources/raw/Turkana Grammatical Notes and Vocabulary (Barton) (1921)_extracted.txt",
    "languages": [
      "turkana"
    ],
    "published": "1921",
    "contribution": "Complete Turkana grammatical treatise (18 sections) and A–Z vocabulary of 1,427 lines with Suk/Pokot comparative notes (Juxon Barton, Journal of the Royal Anthropological Institute, Vol. 51, 1921 — Public Domain).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons"
    ],
    "contentTypes": [
      "grammar",
      "vocabulary",
      "dialogue"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "100% of Juxon Barton's 1921 A–Z vocabulary, numerals, 12 traditional months, pastoral greetings, and 18 grammatical sections are integrated into the Turkana dictionary, 12-unit course, and 8-section grammar guide."
  },
  {
    "id": "bantu-beliefs",
    "title": "Bantu Beliefs and Customary Institutions",
    "fileName": "bantubeliefsmagi00hobl_extracted.txt",
    "processedPath": "language-sources/raw/bantubeliefsmagi00hobl_extracted.txt",
    "languages": [
      "kikuyu",
      "kamba",
      "maasai",
      "swahili"
    ],
    "published": "1922",
    "contribution": "Ethnographic monograph and 48-entry Glossary of Kikuyu, Kamba, Maasai, and Swahili institutional, ritual, and legal terminology (C. W. Hobley, H. F. & G. Witherby London, 1922 — Public Domain).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural notes",
      "blog research"
    ],
    "contentTypes": [
      "vocabulary",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "All 48 Glossary entries (pages 305–308) and chapter terms are integrated into the Kikuyu, Kamba, Maasai, and Swahili dictionaries, courses, and editorial briefs."
  },
  {
    "id": "stevenson-kikuyu-proverbs-1927",
    "title": "Specimens of Kikuyu Proverbs (Festschrift Meinhof)",
    "fileName": "kikuyu-proverbs.json",
    "processedPath": "kikuyu-proverbs.json",
    "languages": [
      "kikuyu"
    ],
    "published": "1927",
    "contribution": "Early public-domain collection of classical Gĩkũyũ proverbs with literal translations and cultural explanations (Marion S. Stevenson, Festschrift Meinhof, pp. 241–246, 1927 — Public Domain).",
    "appUses": [
      "dictionary",
      "course lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated into kikuyu-proverbs.json, kikuyu.json, and the Proverbs & Cultural Wisdom browser."
  },
  {
    "id": "stam-bahanga-1929",
    "title": "The Bahanga (Publications of the Catholic Anthropological Conference, Vol. I, No. 4)",
    "fileName": "The Bahanga.md",
    "processedPath": "language-sources/raw/The Bahanga.md",
    "languages": [
      "luhya"
    ],
    "published": "1929",
    "contribution": "Detailed ethnographic and linguistic study of the Wanga / Bahanga (Luhanga / Oluluyia): 10-generation royal genealogy from Kwandedi & Wanga to Nabongo Mumia, sub-clans, royal burial at Matungu, ancestor sacrifice (omusango, omumali owe misango, khatsu khe misango, amagina ake misambwa), Supreme Deity (Were / Nasayi), sun prayer (liyuba), divination (omufumo), twin ceremonies (amakhwana), betrothal & marriage (okhukhua omukhana, ingombe yarando), and initiation (okhukhyebwa, irumbi) (Rev. N. Stam, Catholic Anthropological Conference Washington, D.C., 1929 — Public Domain).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "All Luhanga/Wanga vocabulary, prayers, ritual phrases, and historical notes integrated line-by-line into luhya.json, LUHYA_GRAMMAR_SECTIONS, LUHYA_UNITS, and cultural-wisdom.ts."
  },
  {
    "id": "github-cldr-huggingface-panlex-cc0",
    "title": "GitHub Unicode CLDR & Hugging Face PanLex / Common Voice CC0-1.0 Corpora",
    "fileName": "dictionaries/*.json",
    "processedPath": "dictionaries",
    "languages": [
      "kikuyu",
      "swahili",
      "luhya",
      "somali",
      "kamba",
      "luo",
      "kalenjin",
      "kisii",
      "meru",
      "maasai",
      "teso",
      "mijikenda",
      "embu",
      "taita",
      "samburu",
      "borana"
    ],
    "published": "2014–2026",
    "contribution": "1,760+ strictly indigenous calendar months (including traditional Maasai, Kalenjin, Ateso, and Samburu ecological months), weekdays, relative time phrases, currencies, territories, and language names from GitHub unicode-org/cldr (ki, kam, luo, kln, mas, saq, guz, luy, mer, ebu, teo, dav, om_KE, so_KE, sw_KE) plus CC0-1.0 lexical & sentence datasets on Hugging Face.",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated across all 22 Kenyan language dictionaries with Swahili-fallback strings filtered out."
  },
  {
    "id": "open-web-swadesh-comparative",
    "title": "Open-Web Swadesh & Comparative Kenyan Linguistic Tables (Wiktionary, Wikipedia & Academic Reconstructions)",
    "fileName": "dictionaries/*.json",
    "processedPath": "dictionaries",
    "languages": [
      "kikuyu",
      "swahili",
      "luhya",
      "somali",
      "kamba",
      "luo",
      "kalenjin",
      "kisii",
      "meru",
      "maasai",
      "teso",
      "mijikenda",
      "turkana",
      "embu",
      "taita",
      "samburu",
      "borana",
      "rendille",
      "pokomo",
      "ilchamus",
      "pokot",
      "taveta",
      "daasanach"
    ],
    "published": "1964–2026",
    "contribution": "Clean digital 207-word Swadesh lists (Swahili, Somali, Oromo/Borana, Kikuyu, Luhya), Mount Kenya Bantu (Kîembu/Kĩmĩĩrũ) 150-word lexicon & phrases, Samburu & Ilchamus/Camus Eastern Nilotic tables (Vossen 1982), Rendille lexicon & numerals (Fleming 1964, Heine 1976 & 1979), Kalenjin & East Pokot dialect tables (van Otterloo 1979, Rottland 1982), and Proto-Sabaki/Proto-Bantu comparative tables.",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "dialogue",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated across all 22 Kenyan language dictionaries and 13 interactive language courses."
  },
  {
    "id": "reinisch-somali-1902",
    "title": "Die Somali-Sprache: II. Wörterbuch (Somali–Deutsch & Deutsch–Somali), I. Texte, III. Grammatik",
    "fileName": "somali.json",
    "processedPath": "dictionaries/somali.json",
    "languages": [
      "somali"
    ],
    "published": "1900–1903",
    "contribution": "Comprehensive 540-page Somali dictionary, Cushitic root etymologies, folktale texts, and grammar compiled by Prof. Leo Reinisch (Imperial Academy of Sciences, Vienna, 1900–1903 — Public Domain; Internet Archive: https://archive.org/details/diesomalisprache02rein).",
    "appUses": [
      "dictionary",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "grammar",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Core Somali stems, pastoral vocabulary, and Cushitic grammatical paradigms integrated into somali.json."
  },
  {
    "id": "brutzer-kamba-1905",
    "title": "Handbuch der Kambasprache & Tierfabeln der Kamba",
    "fileName": "kamba.json",
    "processedPath": "dictionaries/kamba.json",
    "languages": [
      "kamba"
    ],
    "published": "1905–1910",
    "contribution": "Systematic Kĩkamba grammar, verb derivation tables, syntax, and interlinear animal fables compiled by Missionary Ernst Brutzer (MSOS Berlin, Vol. VIII [1905] & Afrikanische Studien [1910] — Public Domain; Internet Archive: https://archive.org/details/handbuchderkamba00brut).",
    "appUses": [
      "dictionary",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "grammar",
      "vocabulary",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated into kamba.json and Kamba grammar & oral wisdom collections."
  },
  {
    "id": "mcgregor-barlow-kikuyu-grammar-1905-1914",
    "title": "A Grammar of the Kikuyu Language (McGregor 1905) & Tentative Studies in Kikuyu Grammar and Idiom (Barlow 1914)",
    "fileName": "kikuyu.json",
    "processedPath": "dictionaries/kikuyu.json",
    "languages": [
      "kikuyu"
    ],
    "published": "1905 / 1914",
    "contribution": "Foundational Gĩkũyũ grammatical treatises covering Dahl's Law (k -> g dissimilation), noun class concords, tense/aspect paradigms, and graded idioms by Rev. A. W. McGregor (CMS London, 1905 — https://archive.org/details/grammarofkikuyul00mcgr) and A. Ruffell Barlow (CSM Edinburgh, 1914 — https://archive.org/details/tentativestudies00barl).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons"
    ],
    "contentTypes": [
      "grammar",
      "vocabulary",
      "dialogue"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated into kikuyu.json and Gĩkũyũ grammar reference sections."
  },
  {
    "id": "purvis-lumasaba-grammar-1907",
    "title": "A Manual of Lumasaba Grammar (Mount Elgon / Masaba-Bukusu Group)",
    "fileName": "luhya.json",
    "processedPath": "dictionaries/luhya.json",
    "languages": [
      "luhya"
    ],
    "published": "1907",
    "contribution": "Complete 96-page grammatical manual of Lumasaba (Mount Elgon / Lubukusu preprefixal cluster) covering preprefixes (kamakhuwa, kumukono), concords, verb extensions, and vocabulary by Rev. J. B. Purvis (SPCK London, 1907 — Public Domain; Internet Archive: https://archive.org/details/amanualoflumasab00purv).",
    "appUses": [
      "dictionary",
      "grammar lessons",
      "comparative translator"
    ],
    "contentTypes": [
      "grammar",
      "vocabulary"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated alongside Johnston (1902, 1919) and Hobley (1902) into luhya.json."
  },
  {
    "id": "foot-galla-dictionary-1913",
    "title": "A Galla-English, English-Galla Dictionary (Oromo / Borana)",
    "fileName": "borana.json",
    "processedPath": "dictionaries/borana.json",
    "languages": [
      "borana"
    ],
    "published": "1913",
    "contribution": "Bidirectional Oromo–English and English–Oromo dictionary (118 pages) compiled by E. C. Foot and published by Cambridge University Press (1913 — Public Domain; Internet Archive: https://archive.org/details/gallaenglishengl00footuoft).",
    "appUses": [
      "dictionary",
      "comparative translator"
    ],
    "contentTypes": [
      "vocabulary"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated alongside Krapf (1842) and Tutschek (1844–1845) into borana.json."
  },
  {
    "id": "kitching-ateso-handbook-1915",
    "title": "A Handbook of the Ateso Language",
    "fileName": "teso.json",
    "processedPath": "dictionaries/teso.json",
    "languages": [
      "teso"
    ],
    "published": "1915",
    "contribution": "First comprehensive 144-page grammar, syntax, and vocabulary of Ateso (Eastern Nilotic) covering gender prefixes (e- masc., a- fem., i- dimin.), verb classes (ko- and ki-), and core lexicon by Archdeacon A. L. Kitching (SPCK London, 1915 — Public Domain; Internet Archive: https://archive.org/details/handbookofatesol00kitc).",
    "appUses": [
      "dictionary",
      "course lessons",
      "grammar lessons"
    ],
    "contentTypes": [
      "grammar",
      "vocabulary",
      "dialogue"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated alongside Hobley (1902) and Johnston (1902) into teso.json."
  },
  {
    "id": "stigand-swahili-dialects-1915",
    "title": "A Grammar of Dialectic Changes in the Kiswahili Language (Kimvita, Kiamu, Kipate, Bajuni/Kitikuu, Kingozi)",
    "fileName": "Grammar Of Dialectic Changes Kiswahili.md",
    "processedPath": "language-sources/raw/Grammar Of Dialectic Changes Kiswahili.md",
    "languages": [
      "swahili"
    ],
    "published": "1915",
    "contribution": "Systematic comparative grammar of Kenyan Northern & Coastal Swahili dialects (Kimvita, Kiamu, Kipate, Bajuni/Kitikuu, Siu) with Rev. W. E. Taylor's poetic introduction and recension of the Inkishafi by Capt. C. H. Stigand (Cambridge University Press, 1915 — Public Domain; Internet Archive: https://archive.org/details/grammarofdialect00stig).",
    "appUses": [
      "dictionary",
      "grammar lessons",
      "cultural wisdom"
    ],
    "contentTypes": [
      "grammar",
      "vocabulary",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated alongside Krapf (1882), Steere (1870, 1894), Madan (1903), and Johnston (1919) into swahili.json."
  },
  {
    "id": "werner-bantu-coast-pokomo-1915",
    "title": "The Bantu Coast Tribes of the East Africa Protectorate & Notes on the Wapokomo of the Tana Valley",
    "fileName": "The Bantu Coast Tribes Of The East Africa Protectorate.md",
    "processedPath": "language-sources/raw/The Bantu Coast Tribes Of The East Africa Protectorate.md",
    "languages": [
      "pokomo",
      "mijikenda",
      "taita"
    ],
    "published": "1913–1915",
    "contribution": "Ethnographic and linguistic studies of the Pokomo (Kipfokomo), Mijikenda (Nyika nine Kayas), and Taita covering age-grades (luva, nyere, kambi, vaya), kinship, and Tana valley ecology by Prof. Alice Werner (JRAI Vol. 45 [1915] & Journal of the African Society Vol. 12 [1913] — Public Domain; https://www.jstor.org/stable/2843481).",
    "appUses": [
      "dictionary",
      "cultural wisdom"
    ],
    "contentTypes": [
      "vocabulary",
      "cultural-reference"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated into pokomo.json, mijikenda.json, and cultural-wisdom.ts."
  },
  {
    "id": "librivox-kavirondo-audio-1920",
    "title": "LibriVox Public Domain Spoken Audio: A Handbook of the Kavirondo Language (Dholuo Phraseology)",
    "fileName": "luo.json",
    "processedPath": "dictionaries/luo.json",
    "languages": [
      "luo"
    ],
    "published": "1920 / 2012 (CC0-1.0)",
    "contribution": "Six public-domain (CC0-1.0) MP3 spoken-audio recordings of the Dholuo Phraseology and Exercises from the 1920 Mill-Hill Fathers Handbook (Internet Archive / LibriVox: https://archive.org/details/handbook_kavirondo3_1203).",
    "appUses": [
      "dictionary",
      "course lessons"
    ],
    "contentTypes": [
      "dialogue",
      "vocabulary"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Direct CC0 MP3 audio URLs linked across 978 Dholuo dictionary and phrasebook entries in luo.json."
  },
  {
    "id": "anv-ke-kencorpus-modern-open-datasets",
    "title": "African Next Voices Kenya (Anv-ke), Kencorpus, thinkKenya & Luhya/Kikuyu Open Multilingual Datasets",
    "fileName": "dictionaries/*.json",
    "processedPath": "dictionaries",
    "languages": [
      "kikuyu",
      "luo",
      "kalenjin",
      "kamba",
      "maasai",
      "meru",
      "swahili",
      "luhya",
      "taita",
      "embu",
      "kisii",
      "teso"
    ],
    "published": "2022–2026",
    "contribution": "Open-licensed modern Kenyan corpora: Maseno/Kenyatta/USIU African Next Voices (Anv-ke, CC-BY-4.0 — https://huggingface.co/datasets/MCAA1-MSU/anv_data_ke), Kencorpus (Swahili, Dholuo, Luhya — https://huggingface.co/datasets/Kencorpus/Kencorpus_dataset), thinkKenya (Kidaw'ida, Kalenjin, Dholuo — https://github.com/thinkKenya/kenyan-low-resource-language-data), mamakobe/luhya-multilingual-dataset, LughaGen, and CGIAR/KikuyuEnglish_translation.",
    "appUses": [
      "dictionary",
      "course lessons",
      "comparative translator"
    ],
    "contentTypes": [
      "vocabulary",
      "dialogue"
    ],
    "ingestionStatus": "integrated",
    "coverageNote": "Integrated modern agriculture, healthcare, mobile money (M-Pesa), and digital governance terminology across Kenyan dictionaries."
  }
];

const LANGUAGE_ID_ALIASES: Record<string, string> = {
  gikuyu: "kikuyu",
  dholuo: "luo",
  luyia: "luhya",
  ekegusii: "kisii",
  kikamba: "kamba",
  kimiiru: "meru",
  kiembu: "embu",
  kigiriama: "mijikenda",
  giriama: "mijikenda",
  kidawida: "taita",
  kitaveta: "taveta",
  kipokomo: "pokomo",
  maa: "maasai",
  sampur: "samburu",
  ngaturkana: "turkana",
  ateso: "teso",
  pokoot: "pokot",
  kiswahili: "swahili",
  oromo: "borana",
};

export function normalizeLanguageId(languageId: string): string {
  const cleaned = languageId.toLowerCase().trim();
  return LANGUAGE_ID_ALIASES[cleaned] || cleaned;
}

const SOURCES_BY_LANGUAGE_MAP = new Map<string, LanguageSource[]>();
const SOURCES_BY_ID_MAP = new Map<string, LanguageSource>();

for (const source of LANGUAGE_SOURCES) {
  SOURCES_BY_ID_MAP.set(source.id, source);
  for (const lang of source.languages) {
    const key = normalizeLanguageId(lang);
    const bucket = SOURCES_BY_LANGUAGE_MAP.get(key) || [];
    if (!bucket.includes(source)) {
      bucket.push(source);
    }
    SOURCES_BY_LANGUAGE_MAP.set(key, bucket);
  }
}

export function getSourcesForLanguage(languageId: string): LanguageSource[] {
  const normalized = normalizeLanguageId(languageId);
  return SOURCES_BY_LANGUAGE_MAP.get(normalized) || [];
}

export function getSourceById(sourceId: string): LanguageSource | undefined {
  return SOURCES_BY_ID_MAP.get(sourceId);
}

export const LANGUAGE_SOURCE_CORPUS: LanguageSource[] = LANGUAGE_SOURCES;

export function getAllLanguageSources(): LanguageSource[] {
  return LANGUAGE_SOURCES;
}

// ── Re-Exported Course, Dictionary & Ethnographic Metadata (Single Source of Truth) ──

export { AVAILABLE_COURSE_IDS, hasCourse } from "../courses/metadata";
export {
  ALL_DICT_METAS,
  DICT_META_MAP,
  ALL_CATEGORY_IDS,
  TOTAL_DICTIONARY_ENTRIES,
  INITIAL_RANDOM_WORDS,
  type DictEntry,
  type DictCategory,
  type Dictionary,
  type DictCategoryMeta,
  type DictMeta,
} from "../dictionaries/metadata";
export {
  NORTHCOTE_1907_COMPLETE_ETHNOGRAPHIC_SUMMARY,
  BEECH_1911_COMPLETE_ETHNOGRAPHIC_SUMMARY,
  HOLLIS_1909_COMPLETE_ETHNOGRAPHIC_SUMMARY,
  HOLLIS_1905_COMPLETE_ETHNOGRAPHIC_SUMMARY,
} from "./ethnographic-summaries";

// Update hinde-masai-1901 entry in LANGUAGE_SOURCES for complete line-by-line verification (pp. i–xii, 1–75, PDF pp. 1–98)
const _hinde1901Entry = LANGUAGE_SOURCES.find((s) => s.id === "hinde-masai-1901");
if (_hinde1901Entry) {
  _hinde1901Entry.contribution =
    'Complete 75-page grammatical, phraseological, ethnographic, and lexical monograph by Hildegarde Hinde (Cambridge: At the University Press, 1901, pp. i–xii, 1–75 [PDF pp. 1–98], UC Berkeley copy PL8501 H5 1901 MAIN — Public Domain): Front Matter, Preface (pp. v–ix, dated British East Africa, 1900, compiled during two years among the Masai without interpreters by testing 20–30 sentences across speakers; critiquing Ehrhardt\'s 1857 Vocabulary and Sir H. H. Johnston\'s Kilima Njaro Expedition; analyzing ol-/en- prefix fusion and studying over 70 verbs), Tipped-in Errata Slip (between pp. viii and ix on "to bring" pronoun order and gaju, en), and Editor\'s Note by E. C. M. (p. xi); Grammatical Rules §§ 1–23 (pp. 1–10: 21 letters + 8 special sounds, aspirates oshiagi & ishigo, liaison consonants n/k/b, personal pronouns, interrogative tone, negations meti/mer/me/m/ete/etwa/etu, conjunction o/oi, preposition atwa, adjectives, sexagesimal base-60 numerals where īp = 60 = 1 warrior company & finger-snapping signs, adjective declensions, possessives, singular vs. plural n- infinitives, edeba past, t-/en- imperatives, 9 regular plural suffix methods, 2 prefix plurals yeyu → noiyeyu & loom → eloom, 7 irregular plurals, 5 invariables, negative noun conjugation, and ainyo + b/be/ba liaison); 65 Verb Conjugation Paradigms (pp. 11–30: 54 regular, 4 irregular, and 7 negative/modal verbs); 340 Categorized Conversational Phrases across 7 functional groups (pp. 31–40, including p. 35 footnote on baba/yeyu vs. minyi/menye & ngutungy/ngotongy); Salutations (p. 41: tagwenia / tagwenia bōōgi — īgo, soboi — eber, nassak); 3 Traditional Songs (p. 42: Children\'s Rain Song "Siumbi aielisiumbi ngai kijaiga eo!", Medicine Song "Aamon yi ngai, aamon m\'Batian", and Warriors\' Song against Sendeyo); 3 Ethnonyms (Orrmāssani/elmāsai, olldōrrobon/dōrrobo, orrgunoni/elgunonu, p. 42); 8 Kenyan Geographical Place-Names (Kenia = oldonyo gēri, Kilima Njaro = oldonyo eborr, Suswa = oldonyo kenyuki, Nairobi = ngare nairobi, Ngongo bagas, Eldonyo sabuk, Gwasso kidong, Enaibasha, p. 42); 10 Curses (Djerrterrā to Mbarra, p. 43); and ~1,050-entry A–Z English–Masai Vocabulary (pp. 45–75) with 5 ethnographic footnotes (adjudge imperative pedagogy, basket = engiondo [kikuyu], jigger = ndudu [kiswahili], potato = ngwashin [kikuyu], and syphilis = ngaioulu ["literally god knows"]).';
  _hinde1901Entry.coverageNote =
    "Audited and integrated 100% line-by-line (all 3,650 Markdown lines: Front Matter pp. i–xii, Errata Slip, Grammatical Rules §§ 1–23 pp. 1–10, all 65 Verb Conjugation Paradigms pp. 11–30, all 340 Conversational Phrases pp. 31–40, Salutations p. 41, 3 Songs, 3 Ethnonyms & 8 Place-Names p. 42, 10 Curses p. 43, and A–Z Vocabulary pp. 45–75) into maasai.json, dictionary-search.ts, MAASAI_GRAMMAR_SECTIONS (Section 13), MAASAI_UNITS (Unit 15), ethnographic-summaries.ts, lexical-highlights.ts, and blog-posts.ts.";
}

export {
  HINDE_1901_COMPLETE_ETHNOGRAPHIC_SUMMARY,
  STAM_1929_COMPLETE_ETHNOGRAPHIC_SUMMARY,
} from "./ethnographic-summaries";

// Update stam-bahanga-1929 entry in LANGUAGE_SOURCES for complete line-by-line verification (pp. 143–179, Map p. 145, Figs. 1–2)
const _stam1929Entry = LANGUAGE_SOURCES.find((s) => s.id === "stam-bahanga-1929");
if (_stam1929Entry) {
  _stam1929Entry.contribution =
    'Complete 37-page ethnographic and linguistic monograph by Rev. N. Stam, Mill Hill Society, Mumias, Kavirondo, East Africa (Publications of the Catholic Anthropological Conference, Vol. I, No. 4, pp. 143–179, August, 1929, Washington, D.C., U.S.A., with 1 Map and 2 Text Figures — Public Domain): Map of the Territory of the Bahanga (p. 145: Country = Buhanga, Language = Luhanga, Native sg. = Muhanga, Natives pl. = Bahanga, showing Nzoia R., Lusumu R., Lugose R., Viratsi R., Mumias, Matawa, Imanga, Matungo, Khyimuli, Khyira, Ndangalasya, Lwanda, Babukusu, Bakhayo, Kabras, Nandi, Batsotso, Bamarama, Nilotic Kavirondo & Banyala); Tribal History & Complete 11-Generation Royal Genealogy of the Bakhitsetse Family (pp. 143–148: Kwandedi [born in Teriki, settled at Khyira in Kabras] → Wanga & Khabiagala [at Bwagwe]; Wanga\'s secret night flight to Imanga hill serving Maragoli chief Muyima while hiding his royal thick copper bracelet under his skin cloak, alliance at Bijifi with the 3 Kabras clans Bakyero/Bakhyero, Banamagwa & Bakhyikawa, defeat of the Bamakambo, founding of Mumias & Matungo fort; Waballa sawing horn tips in Bukhayo, murder plotted by Murono [father of Kitai at Marakalu near Ndangalasya], kingmaker Wakhalivu of Bakyero taking the bracelet and 4 arrows to Matawa, and boy Muswi ["a name of a girl who has not brought forth"] slaying 4 of Murono\'s men; Wamukoya [I] → Netya & Kweyu; Kweyu at Khyimuli → Lumbasi → Sakwa → Lutomiya [→ Rapando, chief of Mukulu], Lwambami & Kiwundu; Netya\'s wars & death at Lwanda against the Uasin-Gishu Masai → Osundwa [I] ["death or victory"] → Wamukoya [II] → Khyihundu [allied with rifle-armed Swahili caravan] → Paramount Chief Mumia [kraals in Mumias & Jinja, ~70 children, disliked Dr. Carl Peters, retired 1928], brothers Mulama [Marama], Katima [Samia], Murunga [N. Kitosh & Wamia], Were [Wahola] & Kiteki [father of Osundwa II, who succeeded in 1928]); Death & Sitting Burial of a Chief in his hut by Bakhyero elders and 1–2 year bone exhumation & butter-polishing procession to Matungo (okhusenera ekhyirindwa ekhyo mwami, pp. 148–149); Commoner Burial Diagram (Fig. 1 p. 150: man inside middle of hut on right side, woman outside left of entrance on left side, male/female child under right/left eaves, pierced wild-fig ear leaf, inkokho eyo mukulikho, okhuba khu maziga, okhukalusya evigumba without greeting or looking back on the road, okhusenera ekhyirindwa & omuyima dance, and river-bank burning of nightmare corpses, pp. 149–152); Kraal Sacrificial Stones Diagram (Fig. 2 p. 153: 2 ancestral stones amagina ake misambwa 10 ft in front of 1st wife\'s hut flanking the 4-ft lusambwa/lusiola Markhamia platycalyx pole from the khyemebekho/khyembekho grove [from obsolete samba "build" → reversive sambula "break down" in -ula], miniature hut khatsu khe misango to the left, and 2 flat pathway stones amagina ako lunganyi outside the kraal entrance dedicated to Nasayi/Were, 3-generation invocation "abakuku / evinambwa / evisoni mulire omu", 4 okhutisa imbusi goat sacrifices & inkokho eyakulikhirwamwo in-law baby-naming fowl, pp. 152–158); Sacred Fig Tree Rainmaking (khyembekho, pp. 158–159); Religion (Nasayi < sayo "to adore" & Were, sun spitting liyuba, "Were ankhonyere" p. 160, "Nasayi akhulinde" p. 161, self-digging hoes & Chameleon in the Chieffess\'s beerpot vs. Snake myth p. 161, soul ekhyinekha & evil spirits vikhyeno p. 162); 6 Practitioners (omusebe/sitani, balosi/mulosi, omundu owe misala, omundu owe mikalo with wild pig\'s tooth court charm, omufumo, omufira), 2 Ordeals (ekhyilulu with 2-cow theft / 3-cow false accusation fine & Skull Ordeal, pp. 162–168), and 10 Omens (amayoni amabi, pp. 169–170); Roadway Foundling Adoption as Makokha ("rubbish", p. 171); Twins (amakhwana & okhutsiya khu makwana across a 10-mile radius, pp. 172–173); Marriage (okhutekherana "to boil for one another", 10-cattle dowry okhukhua omukhana, live quail beak & spear, okhusira imbusi, virginity cow ingombe yarando, and 8-piece cooking outfit after 5–6 months with water-throwing & brother\'s stick-beating rite earning a heifer, pp. 173–176); Totems (musiro: Isaac\'s antelope Boöcercus eurycerus for all Bahanga, eland in Marama; patrilineal & non-exogamous; women\'s food taboos including lepidosiren mudfish, pp. 176–177); Mutilations (4 lower incisors, 2 rows of ~25 forehead incisions, 3-stroke cheek mark burnt with isambirire grass, saliva & cobwebs, p. 178); and Standing Circumcision (okhukhyebwa every 2–3 yrs, ages 15–25, by Kakalelwa/Abarebe operators & 4–5 months in irumbi huts, pp. 178–179).';
  _stam1929Entry.coverageNote =
    "Audited and integrated 100% line-by-line (all 37 pages, pp. 143–179, Map p. 145, Fig. 1 p. 150, Fig. 2 p. 153) into luhya.json, dictionary-search.ts, LUHYA_GRAMMAR_SECTIONS (Section 9), LUHYA_UNITS (Unit 13), ethnographic-summaries.ts, lexical-highlights.ts, kenya-languages.json, and blog-posts.ts.";
}

export {
  LINDBLOM_1920_COMPLETE_ETHNOGRAPHIC_SUMMARY,
} from "./ethnographic-summaries";

// Update lindblom-akamba-1920 entry in LANGUAGE_SOURCES for complete line-by-line verification (pp. I–XII, 1–607, Chs. I–XXXV, Addenda, Figs. 1–167)
const _lindblom1920Entry = LANGUAGE_SOURCES.find((s) => s.id === "lindblom-akamba-1920");
if (_lindblom1920Entry) {
  _lindblom1920Entry.fileName = "The Akamba In British East Africa Lindblom 1920.md";
  _lindblom1920Entry.processedPath = "language-sources/raw/The Akamba In British East Africa Lindblom 1920.md";
  _lindblom1920Entry.contribution =
    'Complete 607-page encyclopedic monograph by Gerhard Lindblom (2nd Edition, Enlarged, Archives d\'Études Orientales publiées par J.-A. Lundell, Vol. 17, Uppsala: Appelbergs Boktryckeri Aktiebolag, 1918–1920, pp. I–XII, 1–607, Figs. 1–167 — Public Domain; 1st ed. defended May 27, 1916; dedicated to Count Eric von Rosen; based on 1911–1912 fieldwork with 7 named Kamba informants: Kioko wa Malata, Malata wa Kiambi, Mbonge wa Kithome, Muhindi, Mbindia/Vindia of Kibwezi, Makiti of Kibwezi, and Muli near Ikutha): Ch. I Country, 4 Divisions & Dialects (Ulu/Yulu [kīkamba kīluŋgalu & Kīluŋgu æβau], Kitui [aþaisu / kīþaisu; ŋgoβə vs. īkulī], Kīkumbuliu & Mumonī, plus Anoka on Mt. Noka and the 1836 Rabai diaspora atumwa / madīkīlambua), 12 Kamba Ethnonyms for Neighbours (akīkuyu, akaβī/akīþoŋgo/alakī, andī, aþaka, asumba/maþomba, aswī, aluluma, ambele, atwa/akala, aŋgoloŋgo, anoβī, asuŋgu/andu atunə), Toponyms (Donyo Sabuk = kīma kīa nžaβī, Mtoto Andei = mutītu wa ndeī), and J. Hofmann\'s 1897–1910 Ikutha Monthly Rainfall Table (pp. 9–26); Part I Individual Life (Chs. II–VII, pp. 27–110): Childbirth (mukautī, nsuu/ŋgua īa kana, nðesīo, muīndə, 4th-day īþa neck-chain before which infant is kīīmu, olula kana, abnormal births & abortion plants), Circumcision & 3 Nžaīko Initiations (1. nžaīko īla nīnī / kaβīu / īekondə; 2. 7-day nžaīko īla nænə / mbusīa with roaring mbusīa pot, verbatim kīno & kea songs, 80-cm musaī pictographic sticks [Figs. 1–8] & sand drawings [Figs. 9–16], wild fig mumbu prayer & glans cut muβwa; 3. secret men\'s nžaīko īa aumə / mbæβanī with V-angled kīusīa pipes, 4 rank fires, ŋgala ordeal tests & 4 Kikumbuliu twig signs), Marriage (mbuī sīa nðeo, bride-price of 2 cows + 2 bulls + 40–50 goats, kuþoka → nðokī, kudīta wife-lending & 26-family Machakos demographic table p. 87), Nðonī Avoidance (ua nðonī / ua ŋgeano) & 11 Kwiūa Name-Taboo Pairs (pp. 93–94) + 7 Women\'s Words (p. 574), Complete Kinship Terminology (pp. 99–102), and Flexed Right/Left Burial & Ŋgondu Purification (pp. 103–110); Part II Sociology (Chs. VIII–XII, pp. 111–205): 25+ Mbaī Clans, Totems & Taboos (pp. 136–138), Cattle Brands (kīo, Figs. 17–22), Arrow Marks (uβano, Figs. 23–38) & Beehive Marks (Figs. 39–51), Blood-Brotherhood, 5 Meat-Sharing Grades of Atumīa (kukula/kukusa from mutumīa wa mutwə to hump kīaə & tongue), Customary Law (Nsīlī: homicide blood-money of 11 cows + 1 bull in Ulu [with ŋgombə īa ndulota & ŋgombə īa wumo] / 13 cows + 1 bull in Kitui, injury fines, 7-stone kīþītū oath [Fig. 52] & relative\'s gall-bladder ndundu oath, 6 Ordeals, kīŋgolə lynch-law & 4 kīumo curses), and Warfare (3 divisions muena, ŋgīla & īta, ŋgulī war-flute Fig. 53, wea frame Fig. 54, tula mbaŋga weapon purification & mutīætumo slayer honours); Part III Belief & Science (Chs. XIII–XIX, pp. 207–354): Soul (kīu) vs. Breath (þaīu/mīæβa), Aīmu Ancestral Spirits & Īþæmbo Groves (Figs. 55–56, 14-piece kīþaŋgona & mboka banana festival), Foreign Spirits (mbæβo, kīsulīa, kīlumi exorcism Figs. 57–58 & 1906–1908 kīesu mania), Supreme Creator Muluŋgu/Ŋgaī = Mumbī ("Potter") & Mwatwaŋgagī ("Cleaver", verbatim prayers pp. 244–245 & calabash Fig. 59), Creation & Chameleon/Weaver-Bird Myths, Mundu Muə Divination (kuausīa with bow + kītītī gourd Fig. 60), mutī vs. muþæa (kīþīao), unīka/mwītano Epidemic Arch & one-legged spirit Mwītualalī, Women\'s ŋgolano Rain March, 9 Amulets, Name Magic (kūtīea), ŋgomakomī Woodpecker Augury (6 directions), 17 ŋgondu Substances (curing þaβu & makwa), Snake-Charmers Kimia & Kivuvu (Fig. 62), Number Magic (odd mwa & 7), Surgery & 45+ Medicinal Plants, Botany/Zoology, Cosmology (Fig. 63 & solar observatory kīsūæsīo kīa sīua), 9 Historical Famines (1836–1909), and 3 Lists of the 11-Month Calendar (pp. 341–342); Part IV Art, Dress, Music & Games (Chs. XX–XXIII, pp. 355–428, Figs. 64–120): Calabashes, Stools, Dress (ua, muþīta, 700-cylinder brass apron kīmæŋgo Fig. 78), Ornaments, Cicatrization, Teeth-Chipping (kuseuβīa maīo with ŋæsa chisel & pegged bone false teeth, Figs. 104–108), 11 Musical Instruments (4 drums mbalīa, kīþæmbə, ŋgoma, kīa; uta bow; mbæβə fiddle played by blind bard Kieti; ŋgulī, mutulælə, so trumpet, nžumalī clarionet), Dances, and Toys & Games (including kīūīśī mancala); Part V Economy (Chs. XXIV–XXXIII, pp. 429–545, Figs. 121–167): Musīə Kraal & 13-Part Nyumba Hut Floor Plan (Fig. 125), 20-sec Fire-Drilling (ulīndī & kīka Fig. 126), Archery, īβaī Poison & 7 Traps (Figs. 127–138), 28 Livestock Terms & Malata\'s Twin-Calf Rite, Mwatu Beekeeping, Agriculture, Food & Beer/Snuff (Figs. 143–155), Ironworking, munīo S-Link Chains (Figs. 156–161), Woodcarving, Pottery (Fig. 165), kīondə/nduŋgū String Bags (Figs. 166–167), and Verbatim Rabai Reading-Book Text (pp. 543–545); and Part VI Mental/Somatic Characteristics & Addenda (Chs. XXXIV–XXXV, pp. 547–607): Backman\'s Anthropometry, 60 Kitui Prisoners\' Weights (mean 117.56 lbs), German East Africa Diaspora & Chagga Lineages (Mareale & Ngovi, pp. 569–573), Women\'s 7-Word Lexicon (p. 574), īþaβu Wayside Stone Custom (p. 576), 3 Basic Color Roots (-īu, -æu/nžaū, -tunə, p. 580), Women\'s Market Day (kīŋgaŋga, p. 580), Loanwords (pp. 582–584), Bibliography (pp. 585–589), 167 Figures (pp. 590–596), Errata (p. 597), and Index (pp. 599–607).';
  _lindblom1920Entry.coverageNote =
    "Audited and integrated 100% line-by-line (all 24,522 Markdown lines: Front Matter pp. I–XII, Introduction & Ch. I pp. 1–26, Part I Chs. II–VII pp. 27–110, Part II Chs. VIII–XII pp. 111–205, Part III Chs. XIII–XIX pp. 207–354, Part IV Chs. XX–XXIII pp. 355–428, Part V Chs. XXIV–XXXIII pp. 429–545, Part VI Chs. XXXIV–XXXV pp. 547–566, Addenda pp. 569–584, Bibliography pp. 585–589, List of 167 Illustrations pp. 590–596, Errata p. 597 & Index pp. 599–607) into kamba/grammar-reference.ts, kamba/course.ts (Unit 19), dictionary-search.ts, ethnographic-summaries.ts, lexical-highlights.ts, kenya-languages.json, and blog-posts.ts.";
}
