// ============================================================
// Kamba (Kĩkamba) Grammar Reference Guide
// Based on:
// 1. Rev. Dr. J. L. Krapf (1850) "Vocabulary of Six East-African Languages" (Tübingen — Public Domain)
// 2. J. T. Last (1885) "Grammar of the Kamba Language" (SPCK, London — Public Domain)
// 3. Hildegarde Hinde (1904) "Vocabularies of the Kamba and Kikuyu Languages" (Cambridge — Public Domain)
// 4. C. W. Hobley (1910) "Ethnology of A-Kamba and Other East African Tribes" & (1922) "Bantu Beliefs and Magic"
// 5. Sir Harry H. Johnston (1919) "A Comparative Study of the Bantu and Semi-Bantu Languages" (#12 Kamba)
// 6. Gerhard Lindblom (1920) "The Akamba in British East Africa: An Ethnological Monograph" (Uppsala — Public Domain)
// ============================================================

export interface KambaGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { kamba: string; english: string; explanation?: string }[];
}

export const KAMBA_GRAMMAR_SECTIONS: KambaGrammarSection[] = [
  {
    id: 'kamba-phonology-lenition',
    title: 'Phonology, Intervocalic Lenition, R-Loss & Dialect Divisions (Krapf 1850, Last 1885, Hinde 1904 & Lindblom 1920)',
    summary: 'Kĩkamba is distinguished among Central Kenya Bantu languages by the widespread loss of Proto-Bantu *p, *t, *k in intervocalic positions, the absence of /r/, and regional dialects across Ulu (Machakos), Kitui (Nganyawa), and Mumoni.',
    content: `Rev. Dr. J. L. Krapf (1850), J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910), and Gerhard Lindblom (1920) document the phonological and dialectal structure of Kĩkamba:
1. **Absence of /r/ & Intervocalic Consonant Elision**:
   - Where Gĩkũyũ and coastal Bantu languages preserve *r*, Kĩkamba elides it or uses lateral /l/ or glide /y/:
   - Gĩkũyũ *kũrĩma* (to farm) → Kĩkamba **kũĩma**.
   - Gĩkũyũ *marĩgu* (bananas) → Kĩkamba **maiu**.
   - Gĩkũyũ *rũrĩmĩ* (tongue) → Kĩkamba **ũĩmĩ (pl. nĩmĩ)**.
   - Gĩkũyũ *kĩratũ* (shoe) → Kĩkamba **kĩlaato**.
   - Intervocalic consonants drop to create long vowel sequences: **mũsyĩ** (homestead), **maanzi / kĩw'ũ** (water).
2. **Regional Dialect Divisions, Ethnonyms & Color Roots (Hinde 1904, Hobley 1910 & Lindblom 1920, pp. 13–22, 573, 580)**:
   - **Ulu / Yulu (Western / Machakos & Makueni)**: Called *kīkamba kīluŋgalu* ("real/straight Kikamba"); SW **Kilungu** speakers call other Ulu Akamba *æβau*.
   - **Kitui / Nganyawa (Eastern)**: Ulu people call Kitui people *aþaisu* and their dialect *kīþaisu*.
   - **Mumoni (Northern)** & **Kikumbuliu (South-Eastern)**: Mumoni retains *r* (absent in Ulu/Kitui); Kikumbuliu shows Taita/Giriama contact.
   - **Three Primary Color Roots (Lindblom 1920, p. 580)**: **-īu** ("black/dark", also green & blue, from soot *mbu*), **-eu / nzau** ("white/light", from lime *īea*), and **-tunə** ("red/yellow", from red clay *ndo / nda*).`,
    examples: [
      { kamba: 'kũĩma • maiu • kĩlaato • ũĩmĩ', english: 'to cultivate • bananas • sandal • tongue', explanation: 'Regular loss of Proto-Bantu intervocalic r/g/k (Last 1885 & Hinde 1904)' },
      { kamba: 'nendu (Ulu) vs. mnyanya (Nganyawa/Kitui)', english: 'friend', explanation: 'Dialectal contrast documented by Hinde (1904)' },
      { kamba: 'maanzi / kĩw\'ũ', english: 'water', explanation: 'Classical Kamba terms for water (Krapf 1850, Last 1885, Lindblom 1920)' }
    ]
  },
  {
    id: 'kamba-noun-classes',
    title: 'Nine Noun Classes, 6 Phonetic Rules of Class VI & Concordial Inflexion (Last 1885, Hinde 1904 & Johnston 1919)',
    summary: 'J. T. Last (1885, pp. 4–14) classifies Kĩkamba nouns into 9 gender classes (Classes I–IX) distinguished by prefixes and 6 phonological mutation rules in Class VI.',
    content: `The 9 noun classes in Kĩkamba as codified verbatim by J. T. Last (1885, pp. 4–14) and compared with Sir Harry Johnston (1919, #12 Kamba):
1. **Class I (*m-, 'm-, mu-, mw- → a-*, living beings)**:
   - *mundu / andu* (man/person), *mtanya / atanya* (judge), *mtongui / atongui* (guide), *mwimi / aimi* (agriculturist); adj. *mundu mucheo / andu acheo*.
2. **Class II (*m-, 'm-, mu-, mw- → mi-*, non-living)**:
   - *mti / miti* (tree), *'mmongo / mimongo* (back), *muguwa / miguwa* (awl), *mwamba / miamba* (baobab tree); adj. *mti mcheo / miti micheo*.
3. **Class III (invariable *N- / ch-*, plural shown by concord)**:
   - *numba* (house/houses), *ngavu* (basket/baskets), *chengo* (camp/camps), *chalo* (caravan/caravans), *ngedza* (chisel/chisels); adj. *numba ncheo*, pron. *i- / zi-*.
4. **Class IV (*chi-, ki- → i-* [modern *kĩ- / syĩ- ~ i-*])**:
   - *kimandi / imandi* (cake), *king'abwe / ing'abwe* (centipede), *kinyezwa / inyezwa* (chin); adj. *kimandi kicheo / imandi icheo*.
5. **Class V (*i- → ma-*)**:
   - *itong'o / matong'o* (civet cat), *itumbi / matumbi* (egg), *ikuyu / makuyu* (fish), *ithea / mathea* (flower); adj. *itumbi icheo / matumbi macheo*, subj. *i- / ga-*.
6. **Class VI (*u-, w- → ny-, n-, nd-, mb-, nz-, ma-*) — with Last's 6 Phonetic Notes (pp. 6–7)**:
   - General (*u-/w- → ny-*): *ulii / ndii* (thread), *wiiyo / nyiyo* (wall), *wia / nyia* (business), *uova / nyova* (loop).
   - Note 1 (*uth-, uz- → nth-, nz-*): *uthuku / nthuku* (evil), *uzio / nzio* (face).
   - Note 2 (*ul-, ur- → nd-*): *ulembwa / ndembwa* (guttapercha), *ullii / ndii* (wall).
   - Note 3 (*ub-, uv-, uw- → mb-*): *uviyo / mbiyo* (knife), *uwathi / mbathi* (song), *uwau / mbau* (side), *uwenji / mbenji* (razor).
   - Note 4 (*ut- → nz-*): *utuka / nzuka* (night).
   - Note 5 (*uny- → ny-*): *unyai / nyai* (foot).
   - Note 6 (*uk- → mak-* or *k-*): *ukakaa / makakaa* (nostril), *ukungu / kungu* (dust).
7. **Class VII (*ka- → tu-*, diminutives)**:
   - *kalabuku / tulabuku* (hare), *kamwanya / tumwanya* (noose), *kabindi / tubindi* (joint), *kaindo / tuindo* (insect), *kabizji kadidi / tubizji tucheo* (little boy), *kana kaume / twana twaume* (male child).
8. **Class VIII (*wandu*, place)**:
   - Takes *wa-* / *pa-* concords: *wandu pacheo* (a good place), *wandu paanata?* (how many places?), *wandu wondi* (all places), *wandu wanai mba* (a place having rocks).
9. **Class IX (*ku-*, verbal infinitives)**:
   - *ku-thaima* (hunting/huntings), *kuthaima kucheo* (good hunting), *kuthaima kunai uwēa / mbēa* (hunting having danger/dangers).`,
    examples: [
      { kamba: 'mundu mucheo → andu acheo | kabizji kadidi → tubizji tucheo', english: 'a good man → good men | a little boy → good boys', explanation: 'Class I mu-/a- & Class VII diminutive ka-/tu- concords (Last 1885, pp. 4–9)' },
      { kamba: 'uviyo → mbiyo | uwathi → mbathi | utuka → nzuka | ukakaa → makakaa', english: 'knife → knives | song → songs | night → nights | nostril → nostrils', explanation: 'Class VI phonetic mutation rules (Last 1885, pp. 6–7, Notes 1–6)' },
      { kamba: 'wandu pacheo • wandu wanai mba • kuthaima kunai uwēa', english: 'a good place • a place having rocks • hunting having danger', explanation: 'Class VIII wandu & Class IX ku- concords (Last 1885, pp. 9–11)' }
    ]
  },
  {
    id: 'kamba-verbal-system',
    title: 'Full Affirmative & Negative Verb Paradigms: Ku-thaima ("To Hunt") & Kw-enda ("To Love") (Last 1885, pp. 26–39 & Hinde 1904)',
    summary: 'J. T. Last (1885, pp. 26–39) sets out full 9-class conjugation tables for ku-thaima ("to hunt") and kw-enda ("to like/love"), alongside Hinde\x27s (1904) paradigm of ku-tinda.',
    content: `In *Grammar of the Kamba Language* (1885, pp. 26–39), J. T. Last documents the complete affirmative and negative conjugations of **ku-thaima** ("to hunt") and **kw-enda** ("to like/love") across all 9 noun classes:
1. **Affirmative Indicative Tenses (Last 1885, pp. 27–34)**:
   - **Present Tense (*-a-*)**: 1s *N-a-thaim-a* (I hunt), 2s *W-a-thaim-a*, 3s *Y-a-thaim-a*, 1p *Tw-a-thaim-a*, 2p *Mw-a-thaim-a*, 3p *M-a-thaim-a* (Classes II–IX with *kw-enda*: *w-a-end-a / y-a-end-a*, *y-a-end-a / z-a-end-a*, *ch-a-end-a / y-a-end-a*, *y-a-end-a / g-a-end-a*, *w-a-end-a / z-a-end-a*, *k-a-end-a / tw-a-end-a*, *w-a-end-a*, *kw-a-end-a*).
   - **Present Imperfect (*-ki-*)**: 1s *Ni-ki-thaim-a* (I am hunting), 2s *U-ki-thaim-a*, 3s *A-ki-thaim-a*, 1p *Tu-ki-thaim-a*, 2p *M-ki-thaim-a*, 3p *Ma-ki-thaim-a*.
   - **Past Imperfect (*-ku-*)**: 1s *N-gu-thaim-a* (I was hunting), 2s *U-ku-thaim-a*, 3s *A-ku-thaim-a*, 1p *Tu-ku-thaim-a*, 2p *M-ku-thaim-a*, 3p *M-ku-thaim-a*.
   - **Present Perfect (*-iti*, modern *-ĩte*)**: 1s *Ni-thaim-iti* (I have hunted), 2s *U-thaim-iti*, 3s *Yu-thaim-iti*, 1p *Tu-thaim-iti*, 2p *Mu-thaim-iti*, 3p *Ma-thaim-iti* (with *kwenda*: *u-wend-iti / i-wend-iti*, *ga-wend-iti*, etc.).
   - **Past Perfect (*-na-...-ie*)**: 1s *Ni-na-thaim-ie* (I hunted), 2s *U-na-thaim-ie*, 3s *Yu-na-thaim-ie*, 1p *Tu-na-thaim-ie*, 2p *Mu-na-thaim-ie*, 3p *Ma-na-thaim-ie*.
   - **Future (*-ka-*)**: 1s *N-ga-thaim-a* (I shall hunt), 2s *U-ka-thaim-a*, 3s *A-ka-thaim-a*, 1p *Tu-ka-thaim-a*, 2p *Mu-ka-thaim-a*, 3p *Ma-ka-thaim-a*.
2. **Imperative & Subjunctive Moods (Last 1885, pp. 34–36)**:
   - **Imperative**: Sg. *-a* (*Thaim-a* hunt thou, *Enda* love thou, *Thek-a* laugh thou, *Iekan-a* forgive thou, *Uka* come, *Bigila* follow, *Waa* divide, *Ananga* destroy, *Ukila* depart, *Tala* count, *Kunika* cover) → Pl. *-ai* (*Thaim-ai, Endai, Thek-ai, Iekan-ai, Ukai, Bigilai*).
   - **Subjunctive (*-e*)**: *Ni-thaim-e, U-thaim-e, Yu-thaim-e, Tu-thaim-e, Mu-thaim-e, Ma-thaim-e*; deliberative questions: *Ni-iy-e ndi?* (when am I to eat?), *Yu-chok-e ndi?* (when is he to return?); purpose: *U-thumw-e u-chok-e miduki* (rest, that you may return quickly).
3. **Negative Conjugation (*-di-* in Last 1885, pp. 36–39; *-ti-* in Hinde 1904)**:
   - **Negative Present (*-di-*)**: *N-di-thaim-a* (I do not hunt), *U-di-thaim-a, A-di-thaim-a, Tu-di-thaim-a, Mu-di-thaim-a, Ma-di-thaim-a*.
   - **Negative Past (*-di-na-*)**: *N-di-na-thaim-a* (I did not hunt), *U-di-na-thaim-a, A-di-na-thaim-a, Tu-di-na-thaim-a, Mu-di-na-thaim-a, Ma-di-na-thaim-a*.
   - **Negative Future (*-di-ka-*)**: *N-di-ka-thaim-a* (I shall not hunt), *U-di-ka-thaim-a, A-di-ka-thaim-a, Tu-di-ka-thaim-a, Mu-di-ka-thaim-a, Ma-di-ka-thaim-a*.
   - **Negative Imperative & Subjunctive**: *Di thaim-a / Di-thaim-ai* (hunt not / hunt ye not); *M-di-thaim-e / Tu-di-thaim-e* (that I/we may not hunt).`,
    examples: [
      { kamba: 'N-a-thaim-a • Ni-ki-thaim-a • N-gu-thaim-a • Ni-thaim-iti • Ni-na-thaim-ie • N-ga-thaim-a', english: 'I hunt • I am hunting • I was hunting • I have hunted • I hunted • I shall hunt', explanation: '6 affirmative indicative tenses of ku-thaima "to hunt" (Last 1885, pp. 27–34)' },
      { kamba: 'N-di-thaim-a • N-di-na-thaim-a • N-di-ka-thaim-a • Di thaim-a!', english: 'I do not hunt • I did not hunt • I shall not hunt • Hunt not!', explanation: 'Negative tenses with -di- (Last 1885, pp. 36–39)' },
      { kamba: 'Ni-iy-e ndi? • Yu-chok-e ndi? • U-thumw-e u-chok-e miduki', english: 'When am I to eat? • When is he to return? • Rest, that you may return quickly', explanation: 'Subjunctive in deliberative questions & purpose clauses (Last 1885, p. 35)' }
    ]
  },
  {
    id: 'kamba-historical-last',
    title: '1885 Historical Grammar: Reflexives of the Heart ("Ng\'o") & Surpassing Comparison ("Ku-kila")',
    summary: 'J. T. Last\'s 1885 grammar records unique pre-colonial grammatical structures, including the metaphorical use of "ng\'o" (heart) for reflexives and "ku-kila" for comparative degrees.',
    content: `J. T. Last of the Church Missionary Society published the first standalone grammatical treatise on Kamba in 1885, capturing several classical morphological constructions:
1. **Reflexives of the Heart (*Ng'o*, Last 1885, p. 25)**:
   - In 19th-century Kĩkamba, reflexive identity ("myself", "ourselves") was formed using the substantive *ng'o* (heart) with possessives:
   - **Ng'o yakwa** = "My heart" → "Myself"
   - **Ng'o yaku** = "Thy heart" → "Thyself"
   - **Ng'o yake** = "His/her heart" → "Himself/herself"
   - **Ng'o zetu** = "Our hearts" → "Ourselves"
   - Alongside **mwēnyi** (himself/herself) and **aēnyi** (themselves), and the verbal reflexive infix **-i-** (*ku-i-wenda*, to love oneself).
2. **Comparison by Surpassing (*Ku-kila*, Last 1885, p. 15)**:
   - Rather than comparative suffixes, Kamba expresses degree through the verb *ku-kila* (to surpass):
   - *Mundu uyu mucheo, akilite uiya* = "This man is good, he surpasses that one in goodness (he is better)."
   - *Mundu yuyu mucheo, kuakila andu aondi* = "This man is good, surpassing all men (he is the best man)."`,
    examples: [
      { kamba: "Ng'o yakwa • Ng'o zetu", english: 'Myself (lit. my heart) • Ourselves (lit. our hearts)', explanation: 'Classical 1885 reflexive construction (Last 1885, p. 25)' },
      { kamba: 'Mundu akilite ucheo', english: 'A man surpassing in goodness (the best man)', explanation: 'Superlative with auxiliary ku-kila (Last 1885, p. 15)' },
      { kamba: 'Yu-ni-wenda • Ni-ka-ku-taa', english: 'He loves me • I will sell/deliver to you', explanation: 'Object infixes -ni- (me) and -ku- (thee) (Last 1885)' }
    ]
  },
  {
    id: "kamba-possessives-demonstratives",
    title: "Personal, Possessive, Demonstrative, Relative & Interrogative Pronouns (Last 1885, pp. 18–26 & Hinde 1904)",
    summary: "J. T. Last (1885, pp. 18–26) documents Kĩkamba personal pronouns, enclitic kinship possessives, three demonstrative degrees with falsetto distal lengthening, and double-concord object relatives.",
    content: `As documented in J. T. Last (1885, pp. 18–26) *Grammar of the Kamba Language* and Hinde (1904):
1. **Personal Pronouns & Copular Forms (Last 1885, pp. 18–25)**:
   - **Independent**: *ninye / nye* (I), *niwe / we* (thou), *miya* (he/she), *nithi* (we), *inyui* (you), *acho* (they).
   - **With *na-* (and/with)**: *na-nye, na-we, na-ya, na-thi, na-nyui, na-cho*.
   - **Copular**: *Ninye ni* (it is I), *Niwe ni* (it is thou), *Miya ni* (it is he), *Nithi ni* (it is we), *Inyui ni* (it is you), *Acho ni* (it is they); *Niya uyu* (that is he), *Tiya uyu* (that is not he), *Nucho! nucho!* (there it is!).
   - **Object Concords with Consonant (*ku-taa*, sell) vs. Vowel (*ku-ua*, buy) Verbs**: 1s *-ni- / -n-* (*yu-ni-taa / yu-n-ua*), 2s *-ku- / -kw-*, 3s *-mu- / -mw-*, 1p *-tu- / -tw-*, 2p *-mu- / -mw-*, 3p *-a- / -a-*.
2. **Possessive Stems & Enclitics (Last 1885, pp. 21–23)**:
   - **-kwa / -akwa** (my), **-go / -aku** (thy), **-kwe / -ake** (his/her/its), **-etu / -itũ** (our), **-enyu** (your pl.), **-eyo / -ayo / -oo** (their).
   - **Kinship Enclitics**: *mwanakwa* (my child), *mwanago* (thy child), *mwanakwe* (his/her child), *mwanetu* (our child), *mwanenyu* (your child), *mwaneyo* (their child).
   - **Emphatic & Genitive Possession**: *Kimanda chakwa ninye* (my own cake); *Ndong'ola zakwe kithwia* (the king's own oxen); *Ngathi yakwe ndong'ola* (the ox's hump); *Kiao chakwe uchi* (the bridge of the river).
3. **Three Demonstrative Degrees & Falsetto Distal Lengthening (Last 1885, pp. 24–25)**:
   - **1. Near at hand**: *mundu uya / andu aya, muti uya / miti iya, numba iya / ziya, kimanda kiya / iya, itumbi ii / matumbi gaa, uwathi uu / mbathi zii, kaindo kii / twindo twii, wandu waa, kuthaima kwaa*.
   - **2. Yonder at a distance**: *mundu uuya / andu aaya, muti uuya / miti iiya ...* — with falsetto vowel lengthening on the final syllable to mark greater distance: *Mtu uuya* (that man there) → *Mtu uuyāā* (further off) → *Mtu uuyāāā* (still further away); reduplicated locative: *Umama paapaa* (stand just here) vs. *Umama paayapaaya* (stand just there).
   - **3. Before-mentioned (referential)**: *mundu uyu / andu awu, muti uyu / miti iyu, numba iyu / ziyu, kimanda kiyu / iyu, itumbi iyu / matumbi gayu, uwathi uyu / mbathi ziyu, kaindo kayu / twindo tuyu, wandu wayu, kuthaima kuyu*.
4. **Relative & Interrogative Constructions (Last 1885, pp. 25–26)**:
   - **Subject Relative (Parataxis)**: *Mundu, anyenda* (the man, he loves me = the man who loves me); *Mundu yunayatilie miti iyo, akauka choko* (the man who cut trees yesterday will come tomorrow).
   - **Object Relative (Pre-Verbal + Infix Object Concord)**: *Andu a ninaaithiie* (the men whom I fed); *Kimanda ki akakiiya* (the cake which they will eat); *Miti i tukaitila choko* (the trees which we shall cut tomorrow); *Kaindo ka ninakaonie iyo* (the insect which I saw yesterday).
   - **Interrogatives**: *uu?* (who?), *chau?* (what?), *ndi?* (when?), *naku?* (where?), *mundu yuau?* (what man?), *kintu kii ni chau?* (what is this thing?), *-anata?* (how many?).`,
    examples: [
      { kamba: "mwanakwa, mwanago, mwanakwe, mwanetu, mwanenyu, mwaneyo", english: "my, thy, his/her, our, your, their child", explanation: "Enclitic kinship possessives (Last 1885, p. 21)" },
      { kamba: "Mtu uuya → Mtu uuyāā → Mtu uuyāāā | Umama paapaa", english: "That man there → further off → still further away | Stand just here", explanation: "Falsetto distal lengthening & reduplicated locative (Last 1885, pp. 24–25)" },
      { kamba: "Andu a ninaaithiie • Miti i tukaitila choko", english: "The men whom I fed • The trees which we shall cut tomorrow", explanation: "Double object-concord relative clause (Last 1885, p. 25)" }
    ]
  },
  {
    id: "kamba-verbal-extensions-locatives",
    title: "Verbal Extensions (-ĩa, -ĩthya, -ana, -wa), Locative Suffix (-nĩ) & Lindblom (1920) / Hobley (1910) Ethnographic Lexicon",
    summary: "Kĩkamba suffixes -nĩ to mark location, uses productive verbal extensions, and preserves rich institutional terminology for the 25 mbai clans, nžama council, kīþītū oath, and nðonī avoidance register.",
    content: `Last (1885), Hobley (*Ethnology of A-Kamba*, 1910), and Gerhard Lindblom (*The Akamba in British East Africa*, 1920) document Kĩkamba verbal extensions and cultural terminology:
1. **Locative Suffix (*-nĩ*) & Verbal Extensions**:
   - *mũũnda* (farm) → **mũũndanĩ** (in the farm); *nyũmba* (house) → **nyũmbanĩ** (in the house).
   - **Applicative (*-ĩa / -ea*)**: *kũua* (cook) → **kũuĩa** (cook for); **Causative (*-ĩthya / -ya*)**: *kũsoma* → **kũsomethya** (teach); **Reciprocal (*-ana*)**: **kwendana** (love one another); **Passive (*-wa*)**: **kũonwa** (be seen).
2. **Institutional, Ritual & Ecological Lexicon (Hobley 1910 & Lindblom 1920)**:
   - **Mbai (Clans & Totems *Kindu kithuku / Uthuku*, Hobley 1910, pp. 4–6 & Lindblom 1920, pp. 113–136)**: 8 original Ulu clans (*Atui, Ethanga, Anzauni, Amutei, Amuti, Akimei, Amoi, Amwei*) with 16 sub-clans (*Aitangwa, Asii, Akitutu, Akitondo, Amoini, Amoni, Embua, Amui, Eombi, Evai, Aieni, Anzio, Eiwani, Amunda, Akua, Amuin, Akitemei*), 33 Mumoni *Ba-* clans, and 18 Kitui clans; the tortoise (*Ngu*) is taboo to all A-Kamba.
   - **Social & Judicial Grades (Lindblom 1920, pp. 143–175)**: **Anake** (warriors) → **Nthele** (young married men) → **Atumĩa ma kisuka** → **Atumĩa ma nžama** (council elders) → **Atumĩa ma kīvalo** (district judges) → **Atumĩa ma ītiŋo** (custodians of the sacred shrine).
   - **Oaths & Religion**: **Kīþītū (Kithito)** (supreme judicial oath) & **Muma** (peace/covenant oath); **Muluŋgu (Mulungu / Ngai)** (Supreme Creator); **Aīmu (Aiimu)** (ancestral spirits); **Ithembo (pl. Mathembo)** (sacred grove shrine); **Mundu muə (Mũndũ mũe)** (diviner/healer with divining gourd *ūtīwa*).
   - **Nðonī (Nthoni), 14 Kwīua Name-Taboo Substitutions & 7 Women's Register Words (Lindblom 1920, pp. 89–98, 574)**:
      - **Kwīua Substitutions (pp. 93–94)**: *kīoko* ("tomorrow") → *uī*; *kīlonžo* ("noise") → *ŋguaīa*; *īlondu* ("sheep") → *ŋgondu*; *nžukī* ("bee") → *ndoŋgoŋgi*; *nžoka* ("snake") → *nīamu īa nðī / īkīlu*; *wa mbua* ("of rain") → *nduþu*; *ŋgomo* ("adze") → *ndæβo*; *mbesa* ("pice") → *īβulī*; *nzau* ("white") → *ndeuβu*; *þomə* ("kraal yard") → *īβuβeonī / muumaloni*; *mwatū* ("beehive") → *mwaŋgo*; *ītwīku* ("ravine") → *wīnuka*; *mwæī* ("moon") → *musesīa nðī*.
      - **Women's Register (p. 574)**: *mbunu* (castor seeds, for *mbaīkī*), *kīowu* (water, for *manžī*), *kīsīeelī* (wind, for *ŋgutanī*), *kwīsonoka* (be ashamed, for *kwīwīa nðonī*), *īma / īsuma mīno* (sheep, for *īlondu*), *mbuβaŋga* (firewood, old women's word for *ŋgu*), *ukaþi* (horn → uncircumcised girl's clitoris *uþuþu*).
    - **Three Nžaīko Initiation Degrees & Six Kukula Meat-Grades (Lindblom 1920, pp. 42–71, 144–145)**:
      - **(1) Nžaīko īla nīnī / īa kaβīu** (circumcision by *mwaīkī*), **(2) Nžaīko īla nænə / īa mbusīa** (Great Rhinoceros initiation in the *īþunu* hut with *musaī* pictographic sticks, roaring *mbusīa*, *mumbu* sap, and *ndoŋgu* Solanum raid), **(3) Nžaīko īa aumə / mbæβanī** (Men's secret initiation with V-shaped *kīusīa* pipes, 4 rank-fires *asīŋgī, ŋgala, aβwīkī, nžama*, and 5 secret recognition signs).
      - **6 Kukula Meat-Eating Ranks**: (1) 1 goat → *mutumīa wa mutwə* (goat's head), (2) 1st bull → lower leg, (3) 2nd bull → upper leg, (4) 3rd bull → loins & brisket, (5) 4th bull → hump (*kīaə*), (6) 5th bull → cattle tongue & head.`,
    examples: [
      { kamba: "Atumĩa ma nžama • Atumĩa ma kīvalo • Kīþītū (Kithito) • Ithembo", english: "Council elders • District judges • Supreme oath • Sacred grove shrine", explanation: "Akamba governance and ritual lexicon (Hobley 1910 & Lindblom 1920)" },
      { kamba: "Muluŋgu • Aīmu (Aiimu) • Mundu muə (Mũndũ mũe)", english: "Supreme Creator • Ancestral spirits • Diviner / medicine man", explanation: "Lindblom (1920, pp. 213–254) & Hobley (1910, pp. 85–95)" },
      { kamba: "Nðonī (Nthoni) • Mbai • Mwethya", english: "In-law respect/avoidance custom • Clan • Communal mutual-aid work party", explanation: "Core Akamba social institutions (Lindblom 1920)" }
    ]
  }
];
