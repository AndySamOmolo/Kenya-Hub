// ============================================================
// Kamba (Kĩkamba) Comprehensive Grammar Reference
// Synthesized line-by-line from:
// 1. J.T. Last, "Grammar of the Kamba Language, Eastern Equatorial Africa"
//    (Preface by Robert Cust, dated London, July 31, 1885; SPCK, London, 1885, pp. iii–iv, 1–40)
// 2. Hildegarde Hinde, "Vocabularies of the Kamba and Kikuyu Languages"
//    (Cambridge University Press, 1904, including Ulu & Nganyawa/Kitui dialects)
// 3. C.W. Hobley, "Ethnology of A-Kamba and Other East African Tribes"
//    (Cambridge University Press, 1910, Part I pp. 1–118 & Appendix pp. 165–169)
// 4. Gerhard Lindblom, "The Akamba in British East Africa" (Uppsala, 1920)
// ============================================================

import type { GrammarSection } from '../types';

export const KAMBA_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'kamba-orthography',
    title: 'Preface (Robert Cust, 1885), Alphabet (J. T. Last, 1885, p. 3) & Dialectal Phonology (Ulu & Nganyawa)',
    summary: 'Documents Robert Cust’s 1885 historical preface on the Kamba homeland and U-Sagára diaspora, J. T. Last’s 1885 alphabet (5 Italian vowels, 18 simple consonants, and 8 compound consonants), modern Kĩkamba 7-vowel orthography, and Ulu vs. Nganyawa (Kitui) sound correspondences.',
    content: `J. T. Last (*Grammar of the Kamba Language, Eastern Equatorial Africa*, SPCK London, 1885, pp. iii–iv, 1–3) and Hildegarde Hinde (1904, pp. xi–xv) document the historical background, sound system, and dialectal variations of Kĩkamba:
1. **Preface by Robert Cust (dated London, July 31, 1885, pp. iii–iv)**:
   - **Homeland & Krapf's 1850 Vocabulary**: When Rev. Dr. J. L. Krapf stayed at Rabbai Mpia near Mombása, he found the Kamba nation living about 400 miles from the coast with a population of 70,000 to 90,000, surrounded by Hamitic and Nuba-Fulah groups, and published a Kamba vocabulary at Tübingen in 1850 (*Vocabulary of Six East-African Languages*).
   - **Migration into U-Sagára (Mamboia)**: Later, Mr. J. T. Last, lay agent of the Church Missionary Society at Mamboia, found a large number of Kamba people who had migrated southwards from their native seats and settled in U-Sagára. During his stay among them he compiled this grammar and a vocabulary, noticed by Robert Cust at p. 359 of *A Sketch of the Modern Languages of Africa*.
2. **The Alphabet in J. T. Last (1885, p. 3)**:
   - **Five Vowels (*A, E, I, O, U*)**: Pronounced as in Italian (*a* as in *father*, *e* as *a* in *fate*, *i* as *ee* in *feet*, *o* as in *no*, *u* as *oo* in *pool*). Modern Kĩkamba orthography adds **ĩ** (front close-mid) and **ũ** (back close-mid).
   - **Eighteen Simple Consonants (*B, D, F, G, H, J, K, L, M, N, P, R, S, T, V, W, Y, Z*)**: Pronounced as in English, except that **G is always hard** (as in *gate*, never soft as in *genius*).
   - **Eight Compound Consonants (*Ch, Dz, Kh, Ng, Ng', Ny, Sh, Th*)**: **Ch** is always sounded as *ch* in *cherry* (the simple letter *c* is represented by *s*); **Dz** (voiced dental/alveolar affricate); **Kh** (voiceless velar fricative); **Ng** (prenasalized velar stop); **Ng'** (velar nasal \`/ŋ/\` as in *sing*, e.g. *King'abwe* 'centipede', *Itong'o* 'civet cat', *Ng'o* 'heart', *Ndong'ola* 'ox'); **Ny** (palatal nasal \`/ɲ/\`); **Sh**; and **Th** (voiced interdental fricative \`/ð/\` as in *this*, e.g. *Uthuku* 'evil', *Ku-thaima* 'to hunt').
3. **Prenasalized Consonants, Syllabic Nasals & Labialized Glides**:
   - Prenasalized stops (**mb, nd, ng, nz**) and syllabic nasals (**m-, 'm-, n-**) occur frequently as noun class prefixes and verb markers (e.g., *'Mmongo* 'the back', pl. *Mimongo*; *Mti* 'tree'; *Mtanya* 'judge'; *Numba* 'house'; *Mbathi* 'songs'; *Ndii* 'threads/walls'; *Nzio* 'faces'; *Nzuka* 'nights').
   - Palatalized and labialized glides (**ky, sy, vy, my, kw, mw, nw, tw**) distinguish grammatical classes and verb stems.
4. **Dialectal Variation (Ulu vs. Nganyawa / Kitui, Hinde 1904)**:
   - **Ulu (Machakos / Makueni)** vs. **Nganyawa (Kitui)** exhibit regular lexical and phonological shifts: e.g., Ulu *kialo* vs. Nganyawa *tchalo* / Last *chalo* (journey/caravan); Ulu *utheo* vs. Nganyawa *utzeo* / Last *ucheo* (goodness); Ulu *nzia* vs. Nganyawa *njia* (path); Ulu *leū* vs. Nganyawa *chakueer / kandu* (food).`,
    examples: [
      { kamba: "Vowels: A, E, I, O, U • Simple Consonants: B, D, F, G (always hard), H, J, K, L, M, N, P, R, S, T, V, W, Y, Z • Compound Consonants: Ch, Dz, Kh, Ng, Ng', Ny, Sh, Th", english: "Complete Kamba alphabet recorded by J. T. Last (1885, p. 3)", explanation: "Vowels pronounced as in Italian; Ch as in cherry; G always hard" },
      { kamba: "'Mmongo (pl. Mimongo) • King'abwe (pl. Ing'abwe) • Itong'o (pl. Matong'o) • Ndong'ola • Ng'o yakwa", english: "The back • Centipede • Civet cat • Ox • Myself (lit. my heart)", explanation: "Syllabic 'm- and velar nasal ng' in Last (1885, pp. 4, 21–22)" },
      { kamba: "Uthuku (pl. Nthuku) • Ku-thaima • Ngedza • Uzio (pl. Nzio)", english: "Evil • To hunt • Chisel(s) • Face (pl. Faces)", explanation: "Compound consonants th and dz in Last (1885, pp. 4–6)" }
    ]
  },
  {
    id: 'kamba-noun-classes',
    title: 'Substantives: The Nine Noun Classes, Gender Suffixes & Six Class VI Plural Rules (Last 1885, pp. 3–7)',
    summary: 'Kĩkamba substantives are divided by J. T. Last (1885, pp. 3–7) into nine prefix-governed classes with strict singular/plural alternations, six special phonetic plural rules for Class VI (u-/w-), and gender marking by -ume (male) and -ke (female).',
    content: `In J. T. Last's *Grammar of the Kamba Language* (1885, pp. 3–7), Kamba substantives are distinguished by prefixation and grouped into **nine classes**, governing concord across adjectives, numerals, pronouns, and verbs. **Gender** is not marked grammatically on the prefix; when necessary, it is denoted by suffixing **-ume** (male) and **-ke** (female) (e.g., *Kana kaume / Twana twaume* 'male child / male children'):
1. **Class I (*m-, 'm-, mu-, mw- → a-*) — Living Beings (pp. 3–4)**:
   - Words beginning with *m-, 'm-, mu-,* or *mw-* denoting living beings form their plural by changing the prefix into **a-**:
     - *Mundu*, a man → *Andu*, men;
     - *Mtanya*, a judge → *Atanya*, judges;
     - *Mtongui*, a guide → *Atongui*, guides;
     - *Mwimi*, an agriculturist → *Aimi*, agriculturists.
2. **Class II (*m-, 'm-, mu-, mw- → mi-*) — Inanimate / Trees & Objects (p. 4)**:
   - Words beginning with *m-, 'm-, mu-,* or *mw-* that are not the names of living beings form their plural by changing the prefix into **mi-**:
     - *Mti*, a tree → *Miti*, trees;
     - *'Mmongo*, the back → *Mimongo*, the backs;
     - *Muguwa*, an awl → *Miguwa*, awls;
     - *Mwamba*, a baobab tree → *Miamba*, baobab trees.
3. **Class III (Invariable Plural, taking *i-* sg. / *zi-* pl. concords) (p. 4)**:
   - Nouns which do not change their form to express the plural number:
     - *Numba*, a house → *Numba*, houses;
     - *Ngavu*, a basket → *Ngavu*, baskets;
     - *Chengo*, a camp → *Chengo*, camps;
     - *Chalo*, a caravan → *Chalo*, caravans;
     - *Ngedza*, a chisel → *Ngedza*, chisels.
4. **Class IV (*chi-, ki- → i-*) — Utensils, Things & Body Parts (pp. 4–5)**:
   - Nouns beginning with *chi-* or *ki-* form their plural by changing *chi-* or *ki-* into **i-**:
     - *Kimandi*, a cake → *Imandi*, cakes;
     - *King'abwe*, a centipede → *Ing'abwe*, centipedes;
     - *Kinyezwa*, a chin → *Inyezwa*, chins.
5. **Class V (*i- → ma-*) — Animals, Fruits, Eggs & Paired/Mass Nouns (p. 5)**:
   - Substantives commencing with *i-* form their plural by changing *i-* into **ma-**:
     - *Itong'o*, a civet cat → *Matong'o*, civet cats;
     - *Itumbi*, an egg → *Matumbi*, eggs;
     - *Ikuyu*, a fish → *Makuyu*, fishes;
     - *Ithea*, a flower → *Mathea*, flowers.
6. **Class VI (*u-, w- → ny- / nd- / mb- / nth- / nz- / mak- / k-*) — Abstract, Long & Collective Nouns, with Six Special Notes (pp. 5–6)**:
   - Substantives having *u-* or *w-* for their first syllable generally form their plural by changing *u-* or *w-* into **ny-**:
     - *Ua*, a courtyard/hide → *Nya*, courtyards/hides;
     - *Ulii*, a thread → *Ndii*, threads;
     - *Wiiyo*, a wall → *Nyiyo*, walls;
     - *Wia*, a business → *Nyia*, businesses;
     - *Uova*, a loop → *Nyova*, loops.
   - **Note 1 (*uth-, uz- → nth-, nz-*)**: *Uthuku*, an evil → *Nthuku*, evils; *Uzio*, a face → *Nzio*, faces.
   - **Note 2 (*ul-, ur- → nd-*)**: *Ulembwa*, a guttapercha → *Ndembwa*, guttaperchas; *Ullii*, a wall → *Ndii*, walls.
   - **Note 3 (*ub-, uv-, uw- → mb-*)**: *Uviyo*, a knife → *Mbiyo*, knives; *Uwathi*, a song → *Mbathi*, songs; *Uwau*, a side → *Mbau*, sides; *Uwenji*, a razor → *Mbenji*, razors.
   - **Note 4 (*ut- → nz-*)**: *Utuka*, a night → *Nzuka*, nights.
   - **Note 5 (*uny- → ny-*)**: *Unyai*, a foot → *Nyai*, feet.
   - **Note 6 (*uk- → mak-* or drops *u-*)**: *Ukakaa*, a nostril → *Makakaa*, nostrils; *Ukungu*, a dust → *Kungu*, dusts.
7. **Class VII (*ka- → tu-*) — Diminutives & Small Creatures (p. 6)**:
   - Substantives beginning with *ka-* form their plural by changing *ka-* into **tu-**:
     - *Kalabuku*, a hare → *Tulabuku*, hares;
     - *Kamwanya*, a noose → *Tumwanya*, nooses;
     - *Kabindi*, a joint → *Tubindi*, joints;
     - *Kaindo*, an insect → *Tuindo*, insects.
8. **Class VIII (*wandu*) — Locative / Place Class (p. 6)**:
   - Consists of one word, **wandu**, *a place* (or *places*), governing *wa-* / *pa-* concords (*Wandu pacheo*, a good place / good places; *Wandu wondi*, all places).
9. **Class IX (*ku- / kw-*) — Verbal Infinitives (pp. 6–7)**:
   - Consists of verbal nouns beginning with **ku-**: *Ku-thaima*, hunting → *Ku-thaima*, huntings.`,
    examples: [
      { kamba: "Class I: Mundu / Andu • Mtanya / Atanya • Mtongui / Atongui • Mwimi / Aimi", english: "Man / men • Judge / judges • Guide / guides • Agriculturist / agriculturists", explanation: "Class I (m-, 'm-, mu-, mw- → a-) in Last (1885, pp. 3–4)" },
      { kamba: "Class II: Mti / Miti • 'Mmongo / Mimongo • Muguwa / Miguwa • Mwamba / Miamba", english: "Tree / trees • Back / backs • Awl / awls • Baobab tree / baobab trees", explanation: "Class II (m-, 'm-, mu-, mw- → mi-) in Last (1885, p. 4)" },
      { kamba: "Class III: Numba • Ngavu • Chengo • Chalo • Ngedza | Class IV: Kimandi / Imandi • King'abwe / Ing'abwe • Kinyezwa / Inyezwa | Class V: Itong'o / Matong'o • Itumbi / Matumbi • Ikuyu / Makuyu • Ithea / Mathea", english: "House, basket, camp, caravan, chisel | Cake, centipede, chin | Civet cat, egg, fish, flower", explanation: "Classes III, IV & V in Last (1885, pp. 4–5)" },
      { kamba: "Class VI: Ua/Nya, Ulii/Ndii, Wiiyo/Nyiyo, Wia/Nyia, Uova/Nyova • Uthuku/Nthuku, Uzio/Nzio • Ulembwa/Ndembwa, Ullii/Ndii • Uviyo/Mbiyo, Uwathi/Mbathi, Uwau/Mbau, Uwenji/Mbenji • Utuka/Nzuka • Unyai/Nyai • Ukakaa/Makakaa, Ukungu/Kungu", english: "All Class VI nouns and Notes 1–6 plural alternations", explanation: "Last (1885, pp. 5–6)" },
      { kamba: "Class VII: Kalabuku / Tulabuku • Kamwanya / Tumwanya • Kabindi / Tubindi • Kaindo / Tuindo | Class VIII: Wandu | Class IX: Ku-thaima", english: "Hare / hares • Noose / nooses • Joint / joints • Insect / insects | Place(s) | Hunting(s)", explanation: "Classes VII, VIII & IX in Last (1885, pp. 6–7)" }
    ]
  },
  {
    id: 'kamba-adjectives',
    title: 'Adjectives: Nine-Class Concords, Six Full Paradigms, Four Irregular Constructions & Ku-kila Comparisons (Last 1885, pp. 7–13)',
    summary: 'Adjectives follow the substantive and take 9-class prefixes (with living beings optionally taking Class I concords), follow strict vowel-coalescence rules, and form irregular adjectives and comparisons with ku-kila.',
    content: `J. T. Last (1885, pp. 7–13) provides a complete analysis of Kamba adjectives, their vowel-coalescence rules, six full 9-class paradigms, four irregular adjective rules, and comparative/superlative syntax:
1. **Position & Living-Being Agreement Rule (pp. 7–8)**:
   - The Kamba adjective follows its substantive and agrees with it in number and class: *Mundu mucheo* (a good man) → *Andu acheo* (good men); *Mti mthuku* (a bad tree) → *Miti mithuku* (bad trees).
   - **Living Beings in Other Classes**: Words denoting living beings, whatever their class, often take Class I adjectival forms (*mu- / a-*), though they may also use their own class concords:
     - *Kiletu mucheo*, a good girl → *Iletu acheo*, good girls;
     - *Morma mucheo*, a good cow → *Miorma anini*, small cows;
     - *Kabizji kadidi*, a small boy → *Tubizji tucheo*, good boys;
     - *Kana kaume*, a male child → *Twana twaume*, male children.
2. **Table of Adjectival Prefixes & Vowel Coalescence Rules (pp. 8–9)**:
   - **Class I**: Sg. *m-, mu-*, Pl. *a-* | **Class II**: Sg. *m-, mu-*, Pl. *mi-* | **Class III**: Sg. *n-*, Pl. *n-* | **Class IV**: Sg. *ki-*, Pl. *i-* | **Class V**: Sg. *di-* (or *i-*), Pl. *ma-* | **Class VI**: Sg. *m-, mu-*, Pl. *n-* | **Class VII**: Sg. *ka-*, Pl. *tu-* | **Class VIII**: Sg./Pl. *wa-* (or *pa-*) | **Class IX**: Sg./Pl. *ku-*.
   - **Vowel Coalescence**:
     - Before vowel-initial stems, *u* becomes **w** (or remains *u*): *Mu mwingi* or *mu muingi* (much dust); *Tuthoka twingi* or *tuthoka tuingi* (many adzes).
     - Prefixes ending in *-a* coalesce with stems beginning in *e-* or *i-* into **e-**.
     - The *-a-* of the prefix is suppressed before an adjective beginning with *o-* (e.g., *Tuindo twondi* 'all the insects', *Wandu wondi* 'all the places').
     - The *-i-* of a prefix is absorbed before an adjective beginning with *i-* (e.g., *Miti mingi* 'many trees', *Imanda ingi* 'many cakes').
3. **Six Complete 9-Class Adjectival Paradigms (pp. 9–11)**:
   - **(1) *-cheo* (Good)**: Cl. I *Mundu mucheo / Andu acheo*; Cl. II *Mti mcheo / Miti micheo*; Cl. III *Numba ncheo / Numba ncheo*; Cl. IV *Kimandi kicheo / Imandi icheo*; Cl. V *Itumbi icheo / Matumbi macheo*; Cl. VI *Uwathi mcheo / Mbathi ncheo*; Cl. VII *Kaindo kacheo / Tuindo tucheo*; Cl. VIII *Wandu pacheo / Wandu pacheo*; Cl. IX *Kuthaima kucheo / Kuthaima kucheo*.
   - **(2) *-anata?* (How many? — Plural)**: Cl. I *Andu aanata?*; Cl. II *Miti mianata?*; Cl. III *Numba nanata?*; Cl. IV *Imanda ianata?*; Cl. V *Matumbi maanata?*; Cl. VI *Mbathi nanata?*; Cl. VII *Tuindo twaanata?*; Cl. VIII *Wandu paanata?*; Cl. IX *Kuthaima kwanata?*.
   - **(3) *-ondi* (All — Plural)**: Cl. I *Andu aondi*; Cl. II *Miti yondi*; Cl. III *Numba chondi*; Cl. IV *Imanda ichondi*; Cl. V *Matumbi yondi*; Cl. VI *Mbathi chondi*; Cl. VII *Tuindo twondi*; Cl. VIII *Wandu wondi*; Cl. IX *Kuthaima kwondi*.
   - **(4) *-we* or *-nai* ("Having" + Noun of Quality/Possession)**:
     - Cl. I: *Mundu yunai kiliku* (a man having wisdom) / *Andu anai makuyu* (men having fish);
     - Cl. II: *Muti unai mathango* (a tree having leaves) / *Miti inai mabeki* (trees having fruit);
     - Cl. III: *Numba inai iko* (a house having dirt) / *Numba zinai ucheo* (houses having beauty);
     - Cl. IV: *Kimanda kinai uwio* (a cake having sweetness) / *Imanda inai mabeki* (cakes having fruit);
     - Cl. V: *Itumbi inai ucheo* (an egg having goodness) / *Matumbi yunai ucheo* (eggs having goodness);
     - Cl. VI: *Uwathi unai uthoko* (a song having badness) / *Mbathi zinai uthoko* (songs having badness);
     - Cl. VII: *Kaindo kanai uki* (an insect having honey) / *Tuindo tunai nzea* (insects having wings);
     - Cl. VIII: *Wandu wanai mba* (a place having rocks) / *Wandu wanai nyichi* (places having grass);
     - Cl. IX: *Kuthaima kunai uwēa* (hunting having danger) / *Kuthaima kunai mbēa* (huntings having dangers).
   - **(5) *-mwe* (One, Sg.) & *-ingi / -engi* (Many, Pl.)**: Cl. I *Mundu yumwe / Andu aengi (or mangi)*; Cl. II *Mti umwe / Miti mingi*; Cl. III *Numba imwe / Numba ningi*; Cl. IV *Kimanda kimwe / Imanda ingi*; Cl. V *Itumbi imwe / Matumbi maingi*; Cl. VI *Uwathi umwe / Mbathi ningi*; Cl. VII *Kaindo kamwe / Tuindo twingi*; Cl. VIII *Wandu wamwe / Wandu wangi*; Cl. IX *Kuthaima kumwe / Kuthaima kwingi*.
   - **(6) *-nge* (Other)**: Cl. I *Mundu yunge* (or enclitic *Mundunge*) / *Andu ange*; Cl. II *Mti unge / Miti yange (or minge)*; Cl. III *Numba inge / Numba zinge*; Cl. IV *Kimanda kinge / Imanda inge*; Cl. V *Itumbi inge / Matumbi mange*; Cl. VI *Uwathi unge / Mbathi zinge*; Cl. VII *Kaindo kange / Tuindo tunge*; Cl. VIII *Wandu wange / Wandu wange*; Cl. IX *Kuthaima kunge / Kuthaima kunge*.
4. **Four Ways of Supplying Irregular Adjectives (pp. 11–12)**:
   - **(1) By a tense of a verb**: *Ndata ikalakala* (the stick is straight); *Ndata imamele* (the stick is crooked); *Muthungi ukuchuwa* (the jar is full).
   - **(2) By *wa* + noun of quality**: *Mundu wa kaú* (a quarrelsome man, lit. 'man of war/quarrel').
   - **(3) By *-nai* ("having") + noun of quality**: *Mundu yunai kiliku* (a wise man); *Andu anai iko* (dirty men).
   - **(4) By variable particle *-a* ("of") + verbal infinitive**: *Mundu wa kwaka* (a builder); *Andu a kuima* (agriculturists).
5. **Comparison of Adjectives (pp. 12–13)**:
   - **Comparative**: Expressed by juxtaposition (*Mundu uyu mucheo, mundu uiya, mthoko*, 'this man is better than that man') or by **ku-kila** ('to surpass'): *Mundu uyu mucheo, akilite uiya* ('this man is good, he surpasses that one'); *Mti uyu kucha mno mwaka uyu, kukila mwaka ula unge* ('this tree bears better this year than last').
   - **Superlative**: Expressed by the simple adjective (*Andu acheo athaime*, 'the best men are hunters') or by **ku-kila** + **-ondi** ('all'): *Mundu yuyu mucheo, kuakila andu aondi* ('this is the best man, surpassing all men'); *Mkamba yuyu akaakila andu aonde* ('this Mkamba will surpass all the men').`,
    examples: [
      { kamba: "Ndata ikalakala • Ndata imamele • Muthungi ukuchuwa", english: "The stick is straight • The stick is crooked • The jar is full", explanation: "Irregular adjectives expressed by verbal forms (Last 1885, p. 11)" },
      { kamba: "Mundu wa kaú • Mundu yunai kiliku • Andu anai iko • Mundu wa kwaka • Andu a kuima", english: "A quarrelsome man • A wise man • Dirty men • A builder • Agriculturists", explanation: "Adjectival constructions with wa, -nai, and -a + infinitive (Last 1885, pp. 11–12)" },
      { kamba: "Mundu uyu mucheo, akilite uiya • Mti uyu kucha mno mwaka uyu, kukila mwaka ula unge • Mundu yuyu mucheo, kuakila andu aondi", english: "This man is better than that • This tree bears better this year than last • This is the best man, surpassing all men", explanation: "Comparative and superlative constructions with ku-kila (Last 1885, pp. 12–13)" }
    ]
  },
  {
    id: 'kamba-numerals',
    title: 'Numerals: Cardinals (1–2,000), Word Order, Ordinals & Nine-Class Agreement Table (Last 1885, pp. 13–16)',
    summary: 'Documents J. T. Last’s (1885, pp. 13–16) cardinal numbers from 1 to 2,000, Noun + Adjective + Numeral word order, ordinal constructions (-a mbēe to -a mu-thĩa), and the full 9-class agreement table for numerals 1–10.',
    content: `J. T. Last (*Grammar of the Kamba Language*, 1885, pp. 13–16) documents Kamba cardinal numbers, word order, ordinals, and the 9-class numeral concord table:
1. **Cardinal Numbers 1 to 2,000 (pp. 13–15)**:
   - **1–10**: 1 **Mondi** (or stem *-mwe*), 2 **Keri** (*-iri / -eri*), 3 **Kadatu** (*-tatu / -datu*), 4 **Kana** (*-na*), 5 **Kathano** (*-thano*), 6 **Thandatu**, 7 **Monza**, 8 **Nyanya**, 9 **Kenda**, 10 **Ikumi**.
   - **11–19**: 11 *Ikumi na imwe*, 12 *Ikumi na iiri*, 13 *Ikumi na idatu*, 14 *Ikumi na ina*, 15 *Ikumi na ithano*, 16 *Ikumi na thandatu*, 17 *Ikumi na monza*, 18 *Ikumi na nyanya*, 19 *Ikumi na kenda*.
   - **Tens (20–90)**: 20 **Milongo iri** (21 *Milongo iri na imwe* ... 29 *Milongo iri na kenda*), 30 **Milongo itatu**, 40 **Milongo ina**, 50 **Milongo ithano**, 60 **Milongo thandatu**, 70 **Milongo monza**, 80 **Milongo nyanya**, 90 **Milongo kenda**.
   - **Hundreds & Thousands (100–2,000)**: 100 **Iyana**, 200 **Mayana maeri** or **Mana maeri**, 300 **Mana matatu**, 400 **Mana mana**, 500 **Mana mathano**, 600 **Mana thandatu**, 700 **Mana monza**, 800 **Mana nyanya**, 900 **Mana kenda**, 1000 **Mana makumi**, 2000 **Mana makumi maeri**.
2. **Word Order with Nouns & Adjectives (p. 15)**:
   - Numerals follow both the noun and any descriptive adjective (**Noun + Adjective + Numeral**):
     - *Mundu mucheo yumwe*, one good man;
     - *Andu athuku athano*, five bad men;
     - *Matumbi manini thandatu*, six small eggs.
3. **Ordinal Numbers (pp. 15–16)**:
   - Formed by prefixing the variable associative particle **-a** ("of") to the stem:
     - 1st **-a mbēe**, 2nd **-a keri**, 3rd **-a kadatu** (or **-a katatu**), 4th **-a kana**, 5th **-a kathano**, 6th **-a thandatu**, 7th **-a monza**, 8th **-a nyanya**, 9th **-a kenda**, 10th **-a ikumi**, Last **-a mu-thĩa**.
     - Examples: *Mundu wa mbēe* (the first man), *Kintu cha keri* (the second thing), *Nyumba ya kadatu* (the third house), *Kintu cha mu-thĩa* (the last thing).
4. **Nine-Class Agreement Table for Numerals 1–10 (p. 16)**:
   - Numerals 1–5 take class prefixes, while **6 (*Thandatu*), 7 (*Monza*), 8 (*Nyanya*), 9 (*Kenda*), and 10 (*Ikumi*) are invariable** across all classes:
   - **Class I (*Mundu / Andu*)**: 1 *Yumwe*, 2 *Aeri*, 3 *Atatu*, 4 *Ana*, 5 *Athano*;
   - **Class II (*Mti / Miti*)**: 1 *Umwe*, 2 *Iri*, 3 *Itatu*, 4 *Ina*, 5 *Ithano*;
   - **Class III (*Numba*)**: 1 *Imwe*, 2 *Iri*, 3 *Idatu*, 4 *Ina*, 5 *Ithano*;
   - **Class IV (*Kimandi / Imandi*)**: 1 *Kimwe*, 2 *Iri*, 3 *Itatu*, 4 *Ina*, 5 *Ithano*;
   - **Class V (*Itumbi / Matumbi*)**: 1 *Imwe*, 2 *Maeri*, 3 *Matatu*, 4 *Mana*, 5 *Mathano*;
   - **Class VI (*Uwathi / Mbathi*)**: 1 *Umwe*, 2 *Iri*, 3 *Idatu*, 4 *Ina*, 5 *Ithano*;
   - **Class VII (*Kaindo / Tuindo*)**: 1 *Kamwe*, 2 *Tuiri*, 3 *Tutatu*, 4 *Tuna*, 5 *Tuthano*;
   - **Class VIII (*Wandu*)**: 1 *Wamwe*, 2 *Wairi*, 3 *Watatu*, 4 *Wana*, 5 *Wathano*;
   - **Class IX (*Kuthaima*)**: 1 *Kumwe*, 2 *Kuiri*, 3 *Kutatu*, 4 *Kuna*, 5 *Kuthano*.`,
    examples: [
      { kamba: "Mondi (1), Keri (2), Kadatu (3), Kana (4), Kathano (5), Thandatu (6), Monza (7), Nyanya (8), Kenda (9), Ikumi (10), Milongo iri (20), Iyana (100), Mana makumi (1,000)", english: "Cardinal counting series in Last (1885, pp. 13–15)", explanation: "Abstract counting forms 1–5 use ka-/ke- prefixes (Mondi, Keri, Kadatu, Kana, Kathano)" },
      { kamba: "Mundu mucheo yumwe • Andu athuku athano • Matumbi manini thandatu", english: "One good man • Five bad men • Six small eggs", explanation: "Strict Noun + Adjective + Numeral word order (Last 1885, p. 15)" },
      { kamba: "Mundu wa mbēe • Kintu cha keri • Nyumba ya kadatu • Kintu cha mu-thĩa", english: "The first man • The second thing • The third house • The last thing", explanation: "Ordinal numbers with -a mbēe (1st) and -a mu-thĩa (last) (Last 1885, pp. 15–16)" }
    ]
  },
  {
    id: 'kamba-pronouns',
    title: 'Pronouns: Personal, Objective Infixes, Possessives, Heart Reflexives (Ng\'o & -ēnyi), Demonstratives, Relatives & Interrogatives (Last 1885, pp. 16–28)',
    summary: 'Complete pronominal grammar from J. T. Last (1885, pp. 16–28): personal pronouns, 9-class subject and object prefixes, possessives and kinship enclitics, ng\'o and -ēnyi reflexives, 3 demonstrative sets plus falsetto distance forms, relatives, and interrogatives.',
    content: `J. T. Last (*Grammar of the Kamba Language*, 1885, pp. 16–28) details six classes of Kamba pronouns across all nine noun classes:
1. **Personal Pronouns — Independent, Subjective Prefixes & Objective Infixes (pp. 16–20)**:
   - **Independent Personal Pronouns**: 1sg **Ninye** (I), 2sg **Uwe / Nuwe** (Thou), 3sg **Ye / Niye** (He or she), 1pl **Ithwe / Niithwe** (We), 2pl **Inywe / Niinywe** (Ye / You), 3pl **Mo / Nimo** (They).
   - **Subjective Case Prefixes (Classes I–IX)**:
     - Cl. I: 1sg *N-, ni-*, 2sg *U-, w-*, 3sg *Y-, ya-, a-*; 1pl *Tu-, tw-*, 2pl *M-, mu-, mw-*, 3pl *M-, ma-*.
     - Cl. II: Sg. *u-, w-*, Pl. *i-, y-* | Cl. III: Sg. *i-, y-*, Pl. *z-, zi-* | Cl. IV: Sg. *ki-, ch-*, Pl. *i-, y-* | Cl. V: Sg. *i-, y-*, Pl. *g-, ga-* | Cl. VI: Sg. *u-, w-*, Pl. *z-, zi-* | Cl. VII: Sg. *ka-*, Pl. *tu-, tw-* | Cl. VIII: Sg./Pl. *w-, wa-* | Cl. IX: Sg./Pl. *ku-, kw-*.
   - **Objective Case Infixes (Classes I–IX, with *ku-taa* 'to sell' & *ku-ua* 'to buy', pp. 18–20)**:
     - Cl. I: 1sg *-n-* (*Ni-mw-on-ie*, I saw him; *Yu-n-tiw-ie*, he left me), 2sg *-ku-* (*Yu-ku-tiw-ie*, he left thee), 3sg *-m-, -mu-, -mw-*; 1pl *-tu-*, 2pl *-mu-*, 3pl *-ma-* (or suffixed *-mo*: *Ni-ma-tiw-ie* or *A-tiw-ie-mo*, he left them).
     - Cl. II (*mti / miti*): Sg. **-u-, -w-** (*Yu-u-taa*, he sells it; *Yu-w-ua*, he buys it), Pl. **-mi-** (*Yu-mi-taa*, *Yu-mi-ua*).
     - Cl. III (*numba*): Sg. **-mi-** (*Yu-mi-taa*, *Yu-mi-ua*), Pl. **-zi-** (*Yu-zi-taa*, *Yu-zi-ua*).
     - Cl. IV (*kimandi / imandi*): Sg. **-ki-, -ch-** (*Yu-ki-taa*, *Yu-ch-ua*), Pl. **-i-, -y-** (*Yu-i-taa*, *Yu-y-ua*).
     - Cl. V (*itumbi / matumbi*): Sg. **-yi-** (*Yu-yi-taa*, *Yu-yi-ua*), Pl. **-ma-** (*Yu-ma-taa*, *Yu-ma-ua*).
     - Cl. VI (*uwathi / mbathi*): Sg. **-u-, -w-** (*Yu-u-taa*, *Yu-w-ua*), Pl. **-zi-** (*Yu-zi-taa*, *Yu-zi-ua*).
     - Cl. VII (*kaindo / tuindo*): Sg. **-ka-** (*Yu-ka-taa*, *Yu-ka-ua*), Pl. **-tu-, -tw-** (*Yu-tu-taa*, *Yu-tw-ua*).
     - Cl. VIII (*wandu*): Sg./Pl. **-wa-** (*Yu-wa-taa*, *Yu-wa-ua*).
     - Cl. IX (*kuthaima*): Sg./Pl. **-ku-, -kw-** (*Yu-ku-taa*, *Yu-kw-ua*).
2. **Possessive Pronouns & Kinship Enclitics (pp. 20–22)**:
   - **Possessive Stems**: My **-kwa**, Thy **-ko** or **-go**, His/her/its **-kwe**, Our **-itu**, Your **-inyu**, Their **-o** (combined with class prefixes: Cl. I *w-a- / a-*, Cl. II *w-a- / y-a-*, Cl. III *y-a- / z-a-*, Cl. IV *ch-a- / y-a-*, Cl. V *y-a- / g-a- (or y-a-)*, Cl. VI *w-a- / z-a-*, Cl. VII *k-a- / tw-a-*, Cl. VIII *w-a-*, Cl. IX *kw-a-*).
   - **Possessive Constructions (pp. 21–22)**:
     - *Ngathi yakwe ndong'ola*, the ox's hump (lit. 'its hump the ox');
     - *Kiao chakwe uchi*, the bridge of the river (lit. 'its bridge the river');
     - *Numba ya kithwia*, the king's house;
     - *Itumo iya Mkamba*, the Mkamba's spear;
     - *Ndong'ola zakwe kithwia*, the king's own oxen.
   - **Kinship Enclitics (with *mwana* 'child', *acha* 'father', *mwanatha* 'brother', p. 22)**:
     - *Mwanakwa* (my child), *Mwanako* (thy child), *Mwanakwe* (his/her child), *Mwanaitu* (our child/sibling), *Mwaninyu* (your child/sibling), *Mwanao* (their child);
     - *Achakwa* (my father), *Achako* (thy father), *Achakwe* (his father);
     - *Mwanathakwa* (my brother), *Mwanathako* (thy brother), *Mwanathakwe* (his brother).
3. **Reflective Pronouns — Heart (*Ng'o*), Verbal Infix (*-i-*) & *-ēnyi* ("Self") (pp. 22–23)**:
   - **(1) By *Ng'o* ("heart") + possessive**: *Ng'o yakwa* (myself), *Ng'o yako* (thyself), *Ng'o yakwe* (himself/herself/itself), *Ng'o zetu* (ourselves), *Ng'o zenyu* (yourselves), *Ng'o zao* (themselves).
   - **(2) By verbal reflective prefix *-i-***: *ku-enda* (to love) → **ku-i-enda** (to love oneself).
   - **(3) By *-ēnyi* ("self/selves") across all 9 classes (p. 23)**:
     - Cl. I *Mundu mwēnyi / Andu ēnyi*; Cl. II *Mti wēnyi / Miti yēnyi*; Cl. III *Numba yēnyi / Numba zēnyi*; Cl. IV *Kimandi chēnyi / Imandi zēnyi*; Cl. V *Itumbi rēnyi / Matumbi gēnyi*; Cl. VI *Uwathi wēnyi / Mbathi zēnyi*; Cl. VII *Kaindo kēnyi / Tuindo twēnyi*; Cl. VIII *Wandu wēnyi*; Cl. IX *Kuthaima kwēnyi*.
4. **Demonstrative Pronouns — Three Spatial Series, Falsetto Distance & Copular Forms (pp. 23–26)**:
   - **1st Set (Proximity — 'this / these')**: Cl. I *uyu / aya*, Cl. II *uu / ii*, Cl. III *ii / izi*, Cl. IV *kii / ii*, Cl. V *iyi / aya*, Cl. VI *uu / izi*, Cl. VII *kaa / tuu*, Cl. VIII *wawa*, Cl. IX *kuku*.
   - **2nd Set (Middle / Reference — 'that / those near you')**: Cl. I *uchu / acho*, Cl. II *ucho / icho*, Cl. III *icho / izo*, Cl. IV *kicho / icho*, Cl. V *icho / ago*, Cl. VI *ucho / izo*, Cl. VII *kacho / tucho*, Cl. VIII *wao*, Cl. IX *kucho*.
   - **3rd Set (Remote — 'that / those yonder')**: Cl. I *uya (ulia) / aia*, Cl. II *uya / iya*, Cl. III *iya / ziya*, Cl. IV *kiya / iya*, Cl. V *iya / gaya*, Cl. VI *uya / ziya*, Cl. VII *kaya / tuya*, Cl. VIII *waya*, Cl. IX *kuya*.
   - **Falsetto Distance Gradation & Reduplication (p. 25)**: Distance is intensified by raising the voice into a falsetto and lengthening the final vowel: *Mtu uuya* (that man there) → *Mtu uuyāā* (that man further off) → *Mtu uuyāāā* (that man yonder, very far off). Specificity is marked by reduplication: *Umama paapaa* (lie down just here); *Umama paayapaaya* (lie down just over there).
   - **Copular Demonstratives (p. 26)**: *Ninye ni...* (It is I), *Niya uyu* (this is he), *Tiya uyu* (this is not he), *Nucho! nucho!* (that is he! the very man!).
5. **Relative & Interrogative Pronouns (pp. 26–28)**:
   - **Relatives**: Expressed by the demonstrative (*uya, aia, iya, ziya, kiya, kaya, tuya, waya, kuya*) before the verb:
     - Subject relative: *Mundu uya yunaendie* (the man who went), *Numba ziya zinawalukie* (the houses which fell), *Tuindo tulia tunaruruma* (the insects which buzzed).
     - Object relative: *Andu aia uoneti* (the men whom thou hast seen), *Miti iya tunatemie* (the trees which we cut down), *Numba ziya unathorokie* (the houses which thou didst set on fire), *Numba ziya unaie ndini yakwe* (the houses which he slept in).
   - **Interrogatives (p. 28)**: **uu?** (who?), **chau?** (what?), **ndi?** (when?), **naku?** (where?), **-au?** (which/what sort?), **-anata?** (how many?). Examples: *Mundu yuau?* (what man?), *Kintu kii ni chau?* (what thing is this?), *Kintu chau?* (what thing?), *Nini chau?* (what is this?), *Andu aanata?* (how many men?).`,
    examples: [
      { kamba: "Ng'o yakwa (myself), Ng'o yako (thyself), Ng'o yakwe (himself), Ng'o zetu (ourselves), Ng'o zenyu (yourselves), Ng'o zao (themselves) • ku-i-enda • Mundu mwēnyi / Andu ēnyi", english: "Three ways of forming reflexives in Kamba", explanation: "Last (1885, pp. 22–23)" },
      { kamba: "Ngathi yakwe ndong'ola • Kiao chakwe uchi • Numba ya kithwia • Itumo iya Mkamba • Mwanakwa, Achako, Mwanathakwe", english: "The ox's hump • The bridge of the river • The king's house • The Mkamba's spear • My child, thy father, his brother", explanation: "Possessive syntax and kinship enclitics in Last (1885, pp. 21–22)" },
      { kamba: "Mtu uuya → Mtu uuyāā → Mtu uuyāāā • Umama paapaa / Umama paayapaaya • Nucho! nucho!", english: "That man there → further off → yonder (falsetto) • Lie down right here / right over there • That is he!", explanation: "Demonstrative gradation and emphasis in Last (1885, pp. 25–26)" },
      { kamba: "Mundu uya yunaendie • Numba ziya zinawalukie • Miti iya tunatemie • Numba ziya unathorokie • Numba ziya unaie ndini yakwe", english: "The man who went • The houses which fell • The trees which we cut down • The houses which thou didst set on fire • The houses which he slept in", explanation: "Subject and object relative clauses in Last (1885, pp. 26–28)" }
    ]
  },
  {
    id: 'kamba-verbs',
    title: 'Verbs (Affirmative & Negative Paradigms of Ku-thaima & Kw-enda), Adverbs, Prepositions & Conjunctions (Last 1885, pp. 28–40)',
    summary: 'Complete verbal conjugation system from J. T. Last (1885, pp. 28–40)—Imperatives, 6 Affirmative Indicative tenses, Subjunctive, Infinitive, and 5 Negative tenses—followed by Adverbs, Prepositions, and Conjunctions, plus Hobley’s (1910) & Lindblom’s (1920) cultural grammar.',
    content: `J. T. Last (*Grammar of the Kamba Language*, 1885, pp. 28–40) documents the full Kamba verb conjugation system using **ku-thaima** ('to hunt') and **kw-enda** ('to like/love' across all 9 noun classes), followed by Adverbs, Prepositions, and Conjunctions:
1. **The Imperative Mood (pp. 28–29)**:
   - Formed from the bare verb root in the singular, and by suffixing **-i** (or **-ai**) in the plural:
     - *Uka*, come thou → *Ukai*, come ye;
     - *Enda*, love thou → *Endai*, love ye;
     - *Tala*, count thou → *Talai*, count ye;
     - *Bigila*, follow thou → *Bigilai*, follow ye;
     - *Ukila*, depart thou → *Ukilai*, depart ye;
     - *Thek-a*, laugh thou → *Thek-ai*, laugh ye;
     - *Iekan-a*, forgive thou → *Iekan-ai*, forgive ye;
     - *Thaim-a*, hunt thou → *Thaim-ai*, hunt ye.
2. **Six Affirmative Indicative Tenses (pp. 29–36)**:
   - **(1) Present Indefinite (*-a-*)**: *N-a-thaim-a* (I hunt), *W-a-thaim-a* (thou huntest), *Y-a-thaim-a* (he/she hunts), *Tw-a-thaim-a* (we hunt), *Mw-a-thaim-a* (you hunt), *M-a-thaim-a* (they hunt).
     - *Kw-enda* ('to like') across Classes I–IX (pp. 30–31): Cl. I *Y-a-end-a / M-a-end-a*; Cl. II *W-a-end-a / Y-a-end-a*; Cl. III *Y-a-end-a / Z-a-end-a*; Cl. IV *Ch-a-end-a / Y-a-end-a*; Cl. V *Y-a-end-a / G-a-end-a*; Cl. VI *W-a-end-a / Z-a-end-a*; Cl. VII *K-a-end-a / Tw-a-end-a*; Cl. VIII *W-a-end-a*; Cl. IX *Kw-a-end-a*.
   - **(2) Present Imperfect (*-ki-*, 'am/art/is hunting')**: *Ni-ki-thaim-a*, *U-ki-thaim-a*, *A-ki-thaim-a*, *Tu-ki-thaim-a*, *M-ki-thaim-a*, *Ma-ki-thaim-a* (and 9-class *A-ki-end-a, U-ki-end-a, I-ki-end-a, Ki-ki-end-a, Ka-ki-end-a, Wa-ki-end-a, Ku-ki-end-a*).
   - **(3) Past Imperfect (*-ku-*, 'was/were hunting')**: *N-gu-thaim-a* (for *ni-ku-thaim-a*), *U-ku-thaim-a*, *A-ku-thaim-a*, *Tu-ku-thaim-a*, *M-ku-thaim-a*, *Ma-ku-thaim-a* (and 9-class *A-kw-end-a, U-kw-end-a, I-kw-end-a, Ki-kw-end-a, Ka-kw-end-a, Wa-kw-end-a, Ku-kw-end-a*).
   - **(4) Present Perfect (*-iti*, 'have/hast/has hunted')**: *Ni-thaim-iti*, *U-thaim-iti*, *Yu-thaim-iti*, *Tu-thaim-iti*, *Mu-thaim-iti*, *Ma-thaim-iti* (and 9-class *Yu-end-iti / Ma-end-iti, U-end-iti / I-end-iti, I-end-iti / Zi-end-iti, Ki-end-iti / I-end-iti, I-end-iti / Ga-end-iti, U-end-iti / Zi-end-iti, Ka-end-iti / Tu-end-iti, Wa-end-iti, Ku-end-iti*).
   - **(5) Past Perfect (*-na-...-ie*, 'hunted')**: *Ni-na-thaim-ie*, *U-na-thaim-ie*, *Yu-na-thaim-ie*, *Tu-na-thaim-ie*, *Mu-na-thaim-ie*, *Ma-na-thaim-ie* (and 9-class *Yu-na-end-ie / Ma-na-end-ie, U-na-end-ie / I-na-end-ie, I-na-end-ie / Zi-na-end-ie, Ki-na-end-ie / I-na-end-ie, I-na-end-ie / Ga-na-end-ie, U-na-end-ie / Zi-na-end-ie, Ka-na-end-ie / Tu-na-end-ie, Wa-na-end-ie, Ku-na-end-ie*).
   - **(6) Future (*-ka-*, 'shall/will hunt')**: *N-ga-thaim-a* (for *ni-ka-thaim-a*), *U-ka-thaim-a*, *A-ka-thaim-a*, *Tu-ka-thaim-a*, *Mu-ka-thaim-a*, *Ma-ka-thaim-a* (and 9-class *A-ka-end-a / Ma-ka-end-a, U-ka-end-a / I-ka-end-a, I-ka-end-a / Zi-ka-end-a, Ki-ka-end-a / I-ka-end-a, I-ka-end-a / Ga-ka-end-a, U-ka-end-a / Zi-ka-end-a, Ka-ka-end-a / Tu-ka-end-a, Wa-ka-end-a, Ku-ka-end-a*).
3. **Subjunctive & Infinitive Moods (p. 36)**:
   - **Subjunctive (*-e*, often preceded by *ni* or *kwa* 'that / in order that')**: *Ni-thaim-e* (that I may hunt), *U-thaim-e*, *A-thaim-e*, *Tu-thaim-e*, *Mu-thaim-e*, *Ma-thaim-e* (and across Classes I–IX: *A-end-e, U-end-e, I-end-e, Ki-end-e, Ka-end-e, Wa-end-e, Ku-end-e*).
   - **Infinitive (*ku- / kw-*)**: *Ku-thaima* (to hunt), *Kw-enda* (to love/like).
4. **Negative Conjugations (pp. 37–39)**:
   - **(1) Negative Present (*-di-*, 'do not hunt / like')**: *N-di-thaim-a*, *U-di-thaim-a*, *A-di-thaim-a*, *Tu-di-thaim-a*, *Mu-di-thaim-a*, *Ma-di-thaim-a* (and 9-class *A-di-end-a, U-di-end-a, I-di-end-a, Ki-di-end-a, Ka-di-end-a, Wa-di-end-a, Ku-di-end-a*; or with *ku-* before the stem: *N-di-ku-thaim-a*).
   - **(2) Negative Past (*-di-na-*, 'did not hunt / like')**: *N-di-na-thaim-a*, *U-di-na-thaim-a*, *A-di-na-thaim-a*, *Tu-di-na-thaim-a*, *Mu-di-na-thaim-a*, *Ma-di-na-thaim-a* (and 9-class *A-di-na-end-a, U-di-na-end-a, I-di-na-end-a, Ki-di-na-end-a, Ka-di-na-end-a, Wa-di-na-end-a, Ku-di-na-end-a*).
   - **(3) Negative Future (*-di-ka-*, 'shall/will not hunt')**: *N-di-ka-thaim-a*, *U-di-ka-thaim-a*, *A-di-ka-thaim-a*, *Tu-di-ka-thaim-a*, *Mu-di-ka-thaim-a*, *Ma-di-ka-thaim-a* (and 9-class *A-di-ka-end-a* etc.).
   - **(4) Negative Imperative (*di* + stem)**: *Di thaim-a* or *U-di-thaim-e* (hunt thou not); *Di thaim-ai* or *Mu-di-thaim-e* (hunt ye not).
   - **(5) Negative Subjunctive (*-di-...-e*, 'that I may not hunt')**: *N-di-thaim-e*, *U-di-thaim-e*, *A-di-thaim-e*, *Tu-di-thaim-e*, *Mu-di-thaim-e*, *Ma-di-thaim-e*.
5. **Adverbs, Prepositions & Conjunctions (Last 1885, pp. 39–40)**:
   - **Adverbs (pp. 39–40)**: Follow the verb or adjective they qualify:
     - *Ku-kuna muno*, to flog severely;
     - *Midukimno*, very fast (*miduki* 'fast' + *mno* 'very');
     - **Adverbs formed from infinitives with *kwa-***: *Kwa-ku-manda*, searchingly; *Kwa-ku-thauka*, playfully;
     - **Adverbs formed from nouns with *kwa***: *Kwa mioo*, sweetly; *Kwa uthuku*, badly.
   - **Prepositions (p. 40)**: **Na** or **ni** (and, with), **Y-a** (variable particle 'of'), **Kwa** (for, from, at, to), **Ku uma** (since, from).
   - **Conjunctions (p. 40)**: **Na** (and), **Ndi** (but).`,
    examples: [
      { kamba: "Uka / Ukai • Enda / Endai • Tala / Talai • Bigila / Bigilai • Ukila / Ukilai • Thek-a / Thek-ai • Iekan-a / Iekan-ai • Thaim-a / Thaim-ai", english: "Come • Love • Count • Follow • Depart • Laugh • Forgive • Hunt (Sg. / Pl. Imperatives)", explanation: "All 8 imperative pairs in Last (1885, pp. 28–29)" },
      { kamba: "N-a-thaim-a (Present) • Ni-ki-thaim-a (Pres. Imperfect) • N-gu-thaim-a (Past Imperfect) • Ni-thaim-iti (Pres. Perfect) • Ni-na-thaim-ie (Past Perfect) • N-ga-thaim-a (Future) • Ni-thaim-e (Subjunctive)", english: "I hunt • I am hunting • I was hunting • I have hunted • I hunted • I shall hunt • That I may hunt", explanation: "Affirmative tense system of ku-thaima in Last (1885, pp. 29–36)" },
      { kamba: "N-di-thaim-a (Neg. Present) • N-di-na-thaim-a (Neg. Past) • N-di-ka-thaim-a (Neg. Future) • Di thaim-a / Di thaim-ai (Neg. Imperative) • N-di-thaim-e (Neg. Subjunctive)", english: "I do not hunt • I did not hunt • I shall not hunt • Hunt not (sg./pl.) • That I may not hunt", explanation: "Negative tense system in Last (1885, pp. 37–39)" },
      { kamba: "Ku-kuna muno • Midukimno • Kwa-ku-manda • Kwa-ku-thauka • Kwa mioo • Kwa uthuku | Na / ni, Y-a, Kwa, Ku uma | Na, Ndi", english: "To flog severely • Very fast • Searchingly • Playfully • Sweetly • Badly | With, Of, For/from, Since | And, But", explanation: "Adverbs, Prepositions, and Conjunctions in Last (1885, pp. 39–40)" }
    ]
  },
  {
    id: 'kamba-ethnographic-handbook-hobley-1910',
    title: 'Hobley’s (1910) Ethnology of A-Kamba: Geography, 62 Clans & Totems, 19 Crops, 63 Animals, 8 Milia Stool Patterns, 3 Nzaiko Ceremonies, 9 Musai Pictographs, 5 Riddles & 6 Folktales',
    summary: 'Complete line-by-line synthesis of C. W. Hobley’s Ethnology of A-Kamba and Other East African Tribes (1910, Part I, Chapters I–XXI, pp. 1–118 & Appendix pp. 165–169), preserving every indigenous term, table, clan totem, livestock brand, stool pattern, initiation code word, riddle, and folktale.',
    content: `In *Ethnology of A-Kamba and Other East African Tribes* (Cambridge University Press, 1910, Part I, pp. 1–118 & Appendix pp. 165–169), C. W. Hobley recorded the ethnographic and linguistic heritage of the A-Kamba across **Ulu (Machakos)**, **Kitui**, **Mumoni**, **Kikumbuliu**, and **Thaka (Chuka)**:
1. **Chapters I–II — Geography, Sub-Tribes, 62 Clans (*Mbai*), Totems (*Kindu kithuku / Uthuku*) & Origin Migrations (pp. 1–8, 165–167)**:
   - **Homeland, Rivers & Hills**: Bounded by the **Athi (*Sabaki*)** and **Tana (*Kiluluma*)** rivers and the **Tsavo** river, across the **Ulu** hills (**Machakos, Mbooni, Kilungu, Nzaui, Mukaa,iba**), **Kitui**, **Mumoni**, and **Kikumbuliu (*Chulu*)**. Population (p. 2): Ulu ~110,000, Kitui ~115,000 (total ~225,000), plus diasporas in Rabai, Usambara, and Usagara.
   - **Original Clans (*Mbai*) & Sub-Divisions of Ulu (pp. 4–5)**: 8 primary clans (**Atui** [sub-clans *Asii, Amui, Aethangwa*], **Ethanga**, **Anzauni** [with *Atangwa*], **Amutei** [sub-clans *Amambua, Akoli, Aiveti, Nzioki*], **Amuti** [sub-clans *Akitutu, Ambua, Aiini, Amathunzi, Akanga, Athunzu*], **Akimei** [sub-clans *Awani, Atwii, Athanga,uluku*], **Amoi**, **Amwei**) totaling 25 Ulu divisions, plus 33 **Mumoni** *Ba-* clans and 18 **Kitui** clans (total 62 named clans, pp. 4–6, 165–167). The **Tortoise (*Ngu*)** is strictly taboo to all A-Kamba.
2. **Chapters III–V — Homestead (*Musi*), Meteorology, 19 Crops (*Mbeke*) & 63 Animals (pp. 9–26)**:
   - **Village (*Musi*)**: **Thomi** (shaded approach path and men's council clearing), **Muиmo** (outer kraal gate), **Kisuku** (cattle kraal), **Nyumba** (circular thatched hut with **Wea** eave-verandah), **Mulingo** (partition), **Kiko** (3-stone hearth), **Kiengo** (raised sleeping platform), **Ikumbi** (wicker granary inside hut).
   - **19 Cultivated Crops (Ch. IV, p. 17)**: **Mbia** (*Sorghum*), **Mwee** (*Pennisetum*), **Wimbi** (*Eleusine coracana*), **Bemba** (*Zea mays*), **Mbumbu** (fiwi beans), **Nzu** (*Cajanus indicus* pigeon pea), **Mbosho** (maharagwe beans), **Ngina** (pojo pulse), **Kikuu** (calabash), **Malengi** (pumpkins), **Mongu** (vegetable marrow), **Kiwa** (sugar cane), **Maiu** (bananas), **Matuma** (*Colocasia edulis*), **Kikwa** (yams), **Makwasi** (sweet potatoes), **Manga** (manioc), **Mbaki** (tobacco), **Ndata** (red Sorghum for **uki** beer).
   - **63 Mammals, Birds, Reptiles & Insects (Ch. V, pp. 18–23)**: **Nzou**, **Mbuzya**, **Nguu**, **Mboo**, **Munyambu**, ** Ngo**, **Ikomi**, **Mbiti**, **Mbawa**, **Mbiwa**, **Mbuzya**, **Ngunu**, **Kinyongo**, **Kibungu**, **Nzai**, **Ndata**, **Nthia**, **Ndwaya**, **Kitonga**, **Mbuku (Wa-paruku)**, **Nzee**, **Kithangathi**, **Ngaa**, **Mboo**, **Ilimba**, **Nguluku**, **Nziu**, **Nthonzi**, **Mwe**, **Nganga**, **Ikunguu**, **Ndei**, **Nthungululu**, **Mbau**, **Itaa**, **Kimbu**, **Kovoi**, **Kinyamkuti**, **Nduu**, **Mbuibui**, **Nzuki**, **Ngulamei**, **Muthwa**, **Ngie**, ** Siafu**, **Ngala**, **Kinyonga**.
3. **Chapters VI–IX — Pastoralism, Industries, Traps, Musical Instruments, 8 Milia Stool Patterns & Weapons (pp. 24–48)**:
   - **Cattle & Dairy**: **Ngombe**, **Mbui**, **Ilondu**, **Koko**; **Ia** (fresh milk), **Kalia** (sour milk), **Mauta** (ghee/butter).
   - **Industries, Traps & Instruments (Ch. VII, pp. 29–38)**: **Chondo (pl. Vyondo)** basket; **Ibia & Nthio** grindstones; **Uwindi** & **Kika** fire-drill; 4 traps (**Mukwa, Ikehengi, Mwito, Kisungula**); **Uki** beer fermented with **Miatini** (*Kigelia Africana*); **Mbebe** bowed fiddle, **Soo** horn, **Nguli** & **Zomali** whistles, and 4 drums (**Kithembi, Ngutha, Engoma, Muvungu / Cha**); **Mwatu** beehive; **Ibila / Ivila** stools carved from **Kiwazi (Muasi), Muinga, Kivuti, Mana, Mutungu** with 8 **Milia** wire-inlay patterns (**Kithaitha, Vioo, Eumu, Kitui, Katungi, upper-arm pattern, Keinga, Kizoro/Kisolo**).
   - **Dress, Weapons & Kithito Oath (Chs. VIII–IX, pp. 39–48)**: **Kimengo, Kitanu, Katungi (Muchi), Kikuto, Mithanga**; **Mize** arrows (**Moluka, Maange, Musi**) poisoned with **Ivai**, **Uta** bow, **Thiaka** quiver, **Ubiu** sword, **Ngwalo** trophy strips, and the **Kithito** oath horn.
4. **Chapters X–XXI & Appendix (1)–(5) — Social Grades, Kinship, 11-Month Calendar, 5 Riddles, 3 Nzaiko Stages, 9 Musai Pictographs, Law, Aiimu Religion & 6 Wano Folktales (pp. 49–118, 165–169)**:
   - **Social Grades & Kinship (Ch. X, pp. 49–51)**: Male: **Kivisi → Mwanake → Nthele → Mutumia → Mutumia Mukuu → Mutumia munene → Mutumia munene wa muthanga**. Female: **Muitu → Mundu mukaa → Kipeti → Mukuu / Ngungu**.
   - **Salutations, 11-Month Calendar & 5 Kweta Ndai Riddles (Ch. XI, pp. 52–56)**: **Umuvoo — Inimuvoo**, **Waiya — Waiya**, **Nosio / Oponiao / Wakia — Ah**. 11 Months: **1. Mwa, 2. Wima, 3. Wiu, 4. Mweu, 5. Onkonono, 6. Thandatu, 7. Moanza, 8. Nyanya, 9. Kenda, 10. Ekumi, 11. Mubiu** across **Ambua anzwa** & **Ambua ua**. 5 Riddles (*Nduma/Muumbi, O-Selia/Kimbu, Mwetu etiki/Kulotoi, Tuna Kwatana/Nzia na nzia, Wo wiwa/Kinto Kitheo*).
   - **Three Nzaiko Initiation Stages & 9 Musai Pictographs (Ch. XVI, pp. 68–77)**: **1. Nzaikonini**, **2. Nzaikoneni** (with **Musai** stick carved with 9 **Ndeto**: *1. Ndata, 2. Mwei, 3. Michi, 4. Ngongo, 5. Itaa, 6. Mbuibui, 7. Ngu, 8. Mwilo, 9. Kithembo*), and **3. Mbabani (Choo Muumba)** with 27 secret ceremonial code words.
   - **Law, Aiimu Religion, Divination (*Kititi cha Mbuu*), Lustration (*Ukuu*) & 6 Wano Folktales (Chs. XVII–XXI, pp. 78–118)**: **Kingñoli** communal justice, **Kisesi** grazing rights, **Engai / Mulungu** & **Aiimu** ancestral spirits at **Ithembo** shrines, **Mundu mue** vs. **Muoiin**, and 6 **Wano** stories.`,
    examples: [
      { kamba: "Umuvoo? — Inimuvoo! • Waiya! — Waiya! • Nosio / Oponiao / Wakia — Ah!", english: "Adult salutation & reply • Warrior greeting • Elder to child, warrior, or maiden", explanation: "Complete age- and gender-graded Kamba salutations in Hobley (1910, p. 52)" },
      { kamba: "Mwa, Wima, Wiu, Mweu, Onkonono, Thandatu, Moanza, Nyanya, Kenda, Ekumi, Mubiu", english: "The 11 months of the Kamba year (Anzwa) across Ambua anzwa and Ambua ua", explanation: "Hobley (1910, pp. 52–53)" },
      { kamba: "Nzaikonini → Nzaikoneni (Musai stick: Ndata, Mwei, Michi, Ngongo, Itaa, Mbuibui, Ngu, Mwilo, Kithembo) → Mbabani (Choo Muumba)", english: "The 3 Kamba initiation stages and 9 Musai pictographic riddles (Ndeto)", explanation: "Hobley (1910, Ch. XVI, pp. 68–77)" }
    ]
  },
  {
    id: 'kamba-verbal-extensions-locatives',
    title: 'Verbal Extensions (-ĩa, -ĩthya, -ana, -wa), Locative Suffix (-nĩ) & Lindblom (1920) / Dundas (1915) Ethnographic Lexicon',
    summary: 'Kĩkamba suffixes -nĩ to mark location, uses productive verbal extensions, and preserves rich institutional terminology for the mbai clans, nžama council, king\'ole communal justice, kīþītū oath, and nðonī avoidance register.',
    content: `Last (1885), Hobley (*Ethnology of A-Kamba*, 1910), Hon. Charles Dundas (*The Organization and Laws of Some Bantu Tribes in East Africa*, JRAI Vol. 45, 1915), and Gerhard Lindblom (*The Akamba in British East Africa*, 1920) document Kĩkamba verbal extensions and cultural terminology:
1. **Locative Suffix (*-nĩ*) & Verbal Extensions**:
   - *mũũnda* (farm) → **mũũndanĩ** (in the farm); *nyũmba* (house) → **nyũmbanĩ** (in the house); Last (1885, p. 28): *Numba ziya unaie ndini yakwe* (the houses which he slept in).
   - **Applicative (*-ĩa / -ea*)**: *kũua* (cook) → **kũuĩa** (cook for); **Causative (*-ĩthya / -ya*)**: *kũsoma* → **kũsomethya** (teach); **Reciprocal (*-ana*)**: **kwendana** (love one another), **kw-iekana** (forgive, Last 1885, p. 28); **Passive (*-wa*)**: **kũonwa** (be seen).
2. **Institutional, Judicial & Ecological Lexicon (Hobley 1910, Dundas 1915 & Lindblom 1920)**:
   - **Social & Judicial Grades (Dundas 1915, pp. 244–253 & Lindblom 1920, pp. 143–175)**: **Anake** (warriors) → **Nthele** (young married men) → **Atumĩa ma kisuka** (beer-council elders) → **Atumĩa ma nžama** (judicial council elders) → **Atumĩa ma kīvalo** (district judges) → **Atumĩa ma ītiŋo** (custodians of the sacred *ithembo* shrine); **King'ole** (supreme communal justice assembly, Hobley 1910, p. 95 & Dundas 1915, p. 262).
   - **Oaths, Land (*Ng'undu*) & Religion**: **Ng'undu** (ancestral cultivated land estate, vs. *weu / kisesi* grazing commonage); **Kīþītū (Kithito)** (supreme judicial oath) & **Muma** (peace/covenant oath); **Muluŋgu (Mulungu / Engai)** (Supreme Creator); **Aīmu (Aiimu)** (ancestral spirits); **Ithembo (pl. Mathembo)** (sacred grove shrine); **Mundu muə (Mũndũ mũe)** (diviner/healer).`,
    examples: [
      { kamba: "Atumĩa ma nžama • Atumĩa ma kīvalo • King'ole (Kingñoli) • Ng'undu vs. Weu (Kisesi)", english: "Council elders • District judges • Supreme communal tribunal • Ancestral farm estate vs. common grazing land", explanation: "Akamba governance and land law (Hobley 1910, Dundas 1915 & Lindblom 1920)" },
      { kamba: "Muluŋgu (Engai) • Aīmu (Aiimu) • Mundu muə (Mũndũ mũe) vs. Muoiin", english: "Supreme Creator • Ancestral spirits • Benevolent diviner vs. sorcerer", explanation: "Lindblom (1920, pp. 213–254) & Hobley (1910, pp. 85–95)" },
      { kamba: "Nðonī (Nthoni) • Mbai • Mwethya", english: "In-law respect/avoidance custom • Clan • Communal mutual-aid work party", explanation: "Core Akamba social institutions (Hobley 1910 & Lindblom 1920)" }
    ]
  },
  {
    id: 'kamba-melodic-tone-jones-freyer-2019',
    title: 'Kĩkamba Four-Level Surface Tone System (H, L, Super-High, Super-Low) & Five Verbal Stem Melodies (Jones & Freyer 2019)',
    summary: 'Patrick Jones & Jeremy Freyer (2019, Ch. 10 of Theory and Description in African Linguistics, pp. 163–181) demonstrate how Kĩkamba’s four surface tone heights (High, Low, Super-High, Super-Low) derive from five underlying tonal melodies on the verb stem plus boundary tone Lφ.',
    content: `From Patrick Jones & Jeremy Freyer (*"Kikamba Verb Stem Tonology"*, in *Theory and Description in African Linguistics*, ed. Clem, Jenks & Sande, Language Science Press, 2019, Ch. 10, pp. 163–181):
1. **Four Surface Tone Levels & Assertive Boundary Tone (Lφ)**:
   - Kĩkamba contrasts four surface pitch levels: **High (H, \`á\`)**, **Low (L, \`à\`)**, **Super-High (SH, \`a̋\`)**, and **Super-Low / Extra-Low (SL, \`ȁ\`)**.
   - Phrase-final **Super-Low (\`ȁ\`)** arises when an assertive phrasal boundary tone **Lφ** docks onto a final Low tone (e.g., *ko-konȁ* 'to hit' in isolation vs. *ko-konà ma-i.ò* 'to hit bananas' when non-final).
   - **Super-High (\`a̋\`)** and falling contour **SH-L (\`â\`)** arise when Lφ interacts with a final High or floating suffixal tone (e.g., *to-í-kon-ááng-á-â* 'we do not usually hit' vs. *to-í-kon-ááng-á-a̋ ma-i.ò* 'we do not usually hit bananas').
2. **Five Core Verbal Stem Melodies**:
   - **(1) {LFV}**: Low tone on the final vowel (e.g., infinitive *ko-konȁ* 'to hit').
   - **(2) {HFV}**: High tone on the final vowel.
   - **(3) {HV2}**: High tone assigned to the second stem mora.
   - **(4) {HV2 + LFV}**: High on the second stem mora plus Low on the final vowel.
   - **(5) {HV2 + HFV}**: High on the second stem mora spreading to the final vowel, combined with floating suffixal tones ({LSuf} or {HSuf}).`,
    examples: [
      { kamba: "ko-konȁ (phrase-final SL) vs. ko-konà ma-i.ò (non-final L)", english: "to hit vs. to hit bananas", explanation: "Assertive phrasal boundary tone Lφ lowers phrase-final L to Super-Low (Jones & Freyer 2019, p. 165)" },
      { kamba: "to-í-kon-ááng-á-â vs. to-í-kon-ááng-á-a̋ ma-i.ò", english: "we do not usually hit vs. we do not usually hit bananas", explanation: "Super-High (a̋) and falling contour realization before vs. at phrase boundary (Jones & Freyer 2019, p. 166)" }
    ]
  },
  {
    id: 'kamba-public-domain-dataset-synthesis',
    title: 'Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Kamba (Kĩkamba))',
    summary: 'Synthesizes phonological correspondences, morphological patterns, and lexical roots across the integrated public-domain monographs and open-web datasets for Kamba (Kĩkamba).',
    content: `1. **Archival & Open-Dataset Integration for Kamba (Kĩkamba)**:
   - Combines primary historical documentation (Krapf 1850, Last 1885, Hinde 1904, Hobley 1910/1922, Dundas 1915, Johnston 1919, Lindblom 1920, BFBS 1921, Jones & Freyer 2019) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).
2. **Phonetic & Orthographic Normalization**:
   - Historical transcriptions preserve older consonant and vowel distinctions (such as Last's 1885 8 compound consonants *Ch, Dz, Kh, Ng, Ng', Ny, Sh, Th* and Johnston's *ω, ṅ, γ, χ, š, þ, đ*), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.`,
    examples: [
      {
        kamba: "wa téne • mweu (nsau)",
        english: "Ancient (of old) • White / Pure",
        explanation: "Krapf (1850) Vocabulary of Six East-African Languages (Kikámba adj.)"
      },
      {
        kamba: "muthenia monthe (Ulu) / matuku onthe • King'ole (Kingñoli) • Kĩthito",
        english: "Always (every day) • Supreme communal tribunal • Judicial oath-object",
        explanation: "Hildegarde Hinde (1904) & C. W. Hobley (1910, pp. 47–48, 78, 95)"
      }
    ]
  }
  ,
  {
    id: "kamba-johnston-1919-1922-group-c-12",
    title: "Sir Harry H. Johnston (1919–1922) Group C #12 Kamba: Erratum p. x ('Frog' Cua), Intervocalic Consonant Elision, 16-Class Prefix/Concord Table (p. 111), Numerals, Pronouns, Noteworthy Roots (Vol. II, pp. 30–31) & Bibliography (p. 788)",
    summary: "Complete line-by-line documentation of Group C #12 Kamba in Sir Harry H. Johnston's Comparative Study of the Bantu and Semi-Bantu Languages (Vol. I, 1919, pp. x, 98–112, 788 & Vol. II, 1922, pp. 28, 30–31, 226, 261, 377–441, 463–491, 499–534).",
    content: `From Sir Harry H. Johnston, G.C.M.G., K.C.B., D.Sc. (*A Comparative Study of the Bantu and Semi-Bantu Languages*, Oxford: Clarendon Press, Vol. I [1919], pp. x, 98–112, 788 & Vol. II [1922], pp. 28, 30–31, 226, 261, 377–441, 463–491, 499–534):
1. **Erratum (Vol. I, p. x), Phonological Elision & Complete 16-Class Prefix/Concord Table (Vol. I, p. 111 & Vol. II, pp. 30–31, 226, 261)**:
   - **Erratum (Vol. I, p. x)**: On p. 101 col. 12 (**Kamba**), 'Frog' is corrected from *C-ua* to **Cua** (*Ky-ua*).
   - **Phonological Character (Vol. II, pp. 30–31, 226)**: Extensive elision of intervocalic *g, k, l, r, b, v* (*Mū-twe* 'head', *M-wīī* 'body', *I-ū ; ma-yū* 'tooth', *Ma-iū* 'bananas', *M-būi* 'goat', *N-zĩa* 'path', *Kī-īma* 'mountain', *M-wei* 'moon', *Ū-ta ; ma-ta* 'bow'), palatalization of Class 8 **Bi- → Vi- / Si- / Sy-**, and frequent dental **þ** (*th*) and **đ** (*dh*).
   - **Complete 16-Class Prefix & Concord Table (Vol. I, p. 111)**:
     - **Class 1**: **Mu-, Mū-** (*u-, mū-, a-, wa-*) • **Class 2**: **A-** (*a-, ma-*)
     - **Class 3**: **Mu-, Mū-** (*u-, mū-*) • **Class 4**: **Mi-** (*i-, ī-, mi-*)
     - **Class 5**: **I-, Ī-, Y-** (*yi-, lī-, rī-*) • **Class 6**: **Ma-** (*ma-, a-*)
     - **Class 7**: **Ki-, Kī-, C-** (*ki-, c'-*) • **Class 8**: **I-, Vi-, Si-, Sy-** (*i-, vi-, si-, sy-*)
     - **Class 9**: **N- (Ny-, M-)** (*i-, y'-*) • **Class 10**: **N- (Ny-, M-)** (*i-, zi-, sy-*)
     - **Class 11**: **U-, Ū-, W-** (from *Lu-*; *u-, ū-, w-*)
     - **Class 12**: **Tu-, Tū-, Tw-** (plural of Class 13; *tu-, tū-*) • **Class 13**: **Ka-** (diminutive singular; *ka-*)
     - **Class 14**: **U-, Ū-, W-** (*u-, ū-, w-*) • **Class 15**: **Ku-, Kū-, Kw-** (*ku-, kū-*) • **Class 16**: **Va-** (*va-*; locative suffix **-ni**).
2. **Noteworthy Kamba Roots & Grammar in Column 12 (Vol. I, pp. 98–110 & Vol. II, pp. 30–31)**:
   - **Kinship & People**: **Mū-ndū ; a-ndū** (person), **Nau, Au, Iše** (my/thy/his father), **Mwaitū, Nyūkwa, Nyinya** (my/thy/his mother), **Mwana wa nyinya** (brother/sister), **Mū-tūmia ; a-** (elder/husband), **Mū-ka / Kī-veti ; i-veti** (wife/woman), **M-wīītū ; e-ītū** (maiden).
   - **Body, Nature & Animals**: **Mū-twe ; mi-** (head), **I-þω ; m-eþω** (eye), **Kū-tū ; ma-tū** (ear), **I-ū ; ma-yū** (tooth), **Ū-īmī ; n-īmī** (tongue), **K-wωkω ; m-ωkω** (arm), **Kū-ū ; ma-ū** (leg), **N-gωω** (heart), **N-zωū** (elephant), **M-bωω** (buffalo), **Mū-nyambū** (lion), **N-gω** (leopard), **M-biti** (hyena), **N-giti / Sūlūlū** (dog), **Kī-kωyū / I-kūyū** (fish), **N-zūkī** (bee), **M-waki** (fire), **Ma-nzi** (water), **Sūa** (sun), **M-wei** (moon), **N-data** (star), **M-būa** (rain), **I-via ; ma-via** (stone).
   - **Numerals, Pronouns & Verbs (Vol. I, pp. 107–110)**: Cardinals **-mwe (1), -īlī (2), -tatū (3), -nya (4), -tanω (5), -þanþatū (6), Mū-ūanza (7), N-yanya (8), Kenda (9), I-kūmi (10), Mī-oṅgω īlī (20), I-ana (100), Ṅ-gili (1,000)**; Pronouns **Nyie (I), We (thou), Uyu/We (he), Iþyī (we), Inywī (ye), Aω (they)**; Possessives **-akwa, -aku, -ake, -itu, -anyu, -aω**; Verbs **-ūka** (come), **-enda / -þi** (go), **-īma** (cultivate), **-ūa** (buy/cook), **-kωma** (sleep), **-neena** (speak).
3. **Bibliography for #12 Kamba (Vol. I, p. 788)**:
   - Cites J. L. Krapf (*Vocabulary of Six East-African Languages*, 1850), J. T. Last (*Grammar of the Kamba Language*, 1885 & *Polyglotta Africana Orientalis*, 1885), C. G. Büttner (*Deutsch-Kikamba Wörterbuch*, 1888), A. D. Shaw (*Pocket Vocabulary*, 1885), Hildegarde Hinde (*Vocabularies of the Kamba and Kikuyu Languages*, 1904 — Ulu, Mumoni & Nzaui dialects), Ernst Brutzer (*Handbuch der Kambasprache*, 1906), and C. W. Hobley (*Ethnology of A-Kamba and Other East African Tribes*, 1910).`,
    examples: [
      { kamba: "Cua (Ky-ua) • I-ū → ma-yū • Ū-īmī → n-īmī • K-wωkω → m-ωkω • Kū-ū → ma-ū • I-via → ma-via", english: "frog (Erratum p. x) • tooth → teeth • tongue → tongues • arm → arms • leg → legs • stone → stones", explanation: "Johnston (1919, Vol. I, pp. x, 98–106 #12 Kamba)" },
      { kamba: "Cl. 7/8 Ki-/Kī- → I-/Vi-/Si-/Sy- • Cl. 11/10 U-/Ū- → N- • Cl. 13/12 Ka- → Tu-/Tū- • Cl. 16 Va-", english: "Kamba noun class prefixes & concords in Johnston's 16-class table", explanation: "Johnston (1919, Vol. I, p. 111 & 1922, Vol. II, p. 261)" },
      { kamba: "-mwe, -īlī, -tatū, -nya, -tanω, -þanþatū, Mū-ūanza, N-yanya, Kenda, I-kūmi, Mī-oṅgω īlī, I-ana, Ṅ-gili", english: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 100, 1,000 in #12 Kamba", explanation: "Johnston (1919, Vol. I, p. 107 #12 Kamba)" }
    ]
  }
];
