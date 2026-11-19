// Samburu (Sampur) Grammar Reference Sections
// Comprehensive grammatical overview based on Northern Maa linguistics (Vossen 1982, Hollis 1905, Payne 2026)

export interface SamburuGrammarSection {
  id: string;
  title: string;
  category: 'phonology' | 'morphology' | 'syntax' | 'pronouns' | 'verbs' | 'nouns';
  summary: string;
  content: string;
  examples: Array<{
    samburu: string;
    english: string;
    gloss?: string;
  }>;
}

export type GrammarSection = SamburuGrammarSection;

export const SAMBURU_GRAMMAR_SECTIONS: SamburuGrammarSection[] = [
  {
    id: 'samburu-comparative-corpus',
    title: '1. Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Samburu / Sampur)',
    category: 'phonology',
    summary: 'Cross-referenced phonological inventory, historical orthography mappings (Farler 1882, Höhnel 1894, Hinde 1901, Johnston 1902, Hollis 1905, Dundas 1910, Hobley 1910, Vossen 1982), and modern open-access corpus alignments.',
    content: `This reference section synthesizes the historical public-domain documentation (Farler 1882, Höhnel 1894, Hinde 1901, Johnston 1902, Hollis 1905, Dundas 1910, Hobley 1910, and Vossen 1982) with contemporary open-access linguistic datasets (CLDF/ASJP, PHOIBLE 2.0, Unicode CLDR \`saq.xml\`, SIL Bloom Samburu Graded Readers, and African Next Voices Kenya Kisamburu Dialect Corpus).

### Orthographic & Phonological Correspondences
* **Vowel Quality & ATR Harmony**: 9-vowel Advanced Tongue Root (+ATR / -ATR) harmony system (*a, e/ɛ, i/ɪ, o/ɔ, u/ʊ*) with contrastive tonal case (nominative vs. absolutive/accusative).
* **Velar & Palatal Nasals (*ṅ / ñ / ng' / ny*)**: Written as *ṅ* or *ñ* in 19th-century and Johnston (1902) wordlists, and standardized as *ng'* (*ŋ*) and *ny* (*ɲ*) in modern Samburu orthography.
* **Implosive Stops & Approximants**: Northern Maa preserves distinctive implosive stops (*ɓ, ɗ, ɠ, ʄ*) and pre-nasalized clusters (*nk-, nt-, mp-*).`,
    examples: [
      {
        samburu: 'Onnom artam • Onnom otomoni uni',
        english: 'Ninety (90) • Eighty (80)',
        gloss: 'Verified in Johnston (1902) North Maa & Samburu Dictionary'
      },
      {
        samburu: 'Ol-labanani • Lesuñgu',
        english: 'Diviner / Medicine-man • White man / European',
        gloss: 'Verified in Johnston (1902) North Maa & Samburu Dictionary'
      },
      {
        samburu: 'Eñ getok (pl. En gedūa) • Angoño (pl. Ngoinyek)',
        english: 'Mouth • Eye (pl. eyes)',
        gloss: 'Verified in Johnston (1902) North Maa & Samburu Dictionary'
      }
    ]
  },
  {
    id: 'samburu-gender-prefixes',
    title: '2. Northern Maa Gender Prefixes (l- / n-) & Tonal Case',
    category: 'nouns',
    summary: 'How Samburu contracts classical Maa ol-/en- prefixes into Northern Maa l- (masculine) and n- (feminine).',
    content: `Samburu (**Sampur / ɔl-Maa**) is a Northern Maa language of the Eastern Nilotic family. A defining phonological signature that distinguishes Samburu from Southern Maasai is the reduction of the initial vowel on gender prefixes:

| Gender | Southern Maasai | Samburu (Sampur) | Singular → Plural Example | Meaning |
| :--- | :--- | :--- | :--- | :--- |
| **Masculine** | *ol-* (pl. *il-*) | **l-** (pl. **l-**) | *lmurrani* → *lmurran* | Warrior → Warriors |
| **Feminine** | *en- / ink-* | **n-** (pl. **n-**) | *nkiteng'* → *nkishu* | Cow → Cattle |
| **Place / Diminutive** | *e-wueji* | **n- / l-** | *nkang'* → *nkang'itie* | Homestead (Manyatta) |

### Tonal Case Marking (Nominative vs. Absolutive)
Like all Maa varieties, Samburu is **Verb–Subject–Object (VSO)** and distinguishes the **Absolutive/Accusative case** (citation form and direct object) from the **Nominative case** (post-verbal subject) strictly by **tone melody** rather than suffixes.`,
    examples: [
      {
        samburu: "lmurrani (pl. lmurran) • lpayian (pl. lpayiani)",
        english: 'warrior (pl. warriors) • elder (pl. elders)',
        gloss: 'Northern Maa masculine prefix l-'
      },
      {
        samburu: "nkiteng' (pl. nkishu) • nkaji (pl. nkajijik)",
        english: 'cow (pl. cattle) • house (pl. houses)',
        gloss: 'Northern Maa feminine prefix n-'
      }
    ]
  },
  {
    id: 'samburu-verbs-vso',
    title: '3. VSO Clause Structure, Verbal Inflection & Greetings',
    category: 'verbs',
    summary: 'Subject prefixes (a-, i-, e-, ki-), VSO word order, and age-set greetings.',
    content: `### Verbal Subject Prefixes
Samburu verbs take prefixes marking the person of the subject (and combined subject-object portmanteau prefixes):
* **1st Sg. (I)**: **a-** (*a-lo* = I go; *a-nyor* = I love/like)
* **2nd Sg. (You)**: **i-** (*i-lo* = you go)
* **3rd Sg./Pl. (He/She/They)**: **e- / ɛ-** (*e-lo* = he/she goes)
* **1st Pl. (We)**: **ki-** (*ki-lo / ki-puo* = we go)
* **Negation**: Marked by the prefix **m- / me-** (present) or **eitu** (past): *me-lo* (he does not go), *eitu a-lo* (I did not go).

### Traditional Age-Set Greetings
Greetings in Samburu vary by the age-grade and gender of the speakers:
* **Supa! / Esupa!** (General greeting among peers/elders) → Reply: **Ipa!**
* **Nabo!** (Respectful address to elders/women) → Reply: **Eiko!**
* **Serian?** (Is it peaceful?) → Reply: **Serian!** (It is peaceful!)
* **Ashe / Ashe oleng'!** (Thank you / Thank you very much!).`,
    examples: [
      {
        samburu: "Supa! — Ipa! • Kaji inkununo? — Sidai oleng'!",
        english: 'Hello! — Hello! • How are you? — Very good!',
        gloss: 'Standard Samburu greeting exchange'
      },
      {
        samburu: "A-nyor kule. • E-lo lmurrani ldonyo.",
        english: 'I like milk. • The warrior goes to the mountain.',
        gloss: 'VSO word order with 1SG a- and 3SG e- prefixes'
      }
    ]
  },
  {
    id: 'samburu-payne-2026-middle-verbs',
    title: '4. Maa Alternating Middle Verbs, Media Tantum & Experiential Voice (Payne 2026)',
    category: 'verbs',
    summary: 'Morphosyntax of the Maa middle suffix (-a/-o/-ɔ, pl. -ata/-oto/-ɔtɔ), grooming middles, media tantum experiential verbs, and spontaneous event constructions from Doris L. Payne (2026).',
    content: `Based on Doris L. Payne's (2026) comparative study *"Middle verbs in Maa: Alternating, media tantum, and (spurious) look-alikes"*, Maa (shared across Samburu, Ilchamus, and Southern Maasai) exhibits a rich **Middle Voice** system distinct from the active and antipassive (*-isho / -ɪshɔ*).

### 1. Middle Suffix Allomorphy (+ATR / -ATR Harmony & Number)
| Aspect / Mood | Singular Suffix (+ATR / -ATR) | Plural Suffix (+ATR / -ATR) | Function |
| :--- | :--- | :--- | :--- |
| **Non-Perfective Middle** | **-a(r) / -o(r) / -ɔ(r)** | **-ata / -oto / -ɔtɔ** | Stative, grooming, spontaneous change, non-translational motion |
| **Perfective Middle** | **-e / -ɛ** | **-ate / -ote / -ɔtɛ** | Completed middle event (*ɛ-duŋ-óté intaléŋo* "the ceremonies have ended") |
| **Middle + Inchoative** | **-ayu / -oyu / -ɔyʊ** | — | "Able to become / get X-ed" (*m-ɛ́-ba-yú* "does not get healed") |

### 2. Alternating vs. Media Tantum Verbs
* **Alternating Middle Verbs**: Transitive active roots that take the middle suffix to express an anticausative, resulting state, or reflexive grooming action:
  * *a-dúŋ* (to cut) → **a-duŋ-ó** (to be cut / demarcated / cease flowing) → **áa-duŋ-o** (to be divided into portions).
  * *a-ɪbʊ́ŋ* (to catch/hold) → **a-ɪbʊŋ-á** (to coagulate / clot, e.g. blood *ɔsárgɛ / l-ɔɗɔ́*).
  * *a-jɪ́ŋ* (to enter) → **a-jɪŋ-á** (to be entered / possessed by a spirit).
  * **Grooming Middles**: **a-itukúó** (to bathe oneself), **a-ɪsʊjá** (to wash oneself), **a-ɪsɪkarrá** (to adorn oneself with beadwork), **a-ishopó** (to dress oneself).
* **Media Tantum Verbs**: Verbs that exist *only* in the middle voice (requiring a causative prefix *ɪta-* to become transitive):
  * **a-mɛrá** (to be intoxicated) → causative *a-ɪtɛ-mɛ́r*.
  * **a-nʊtá** (to be pregnant/gravid) → causative *a-ɪtʊ-nʊ́t*.
  * **a-rriá** (to fall down), **a-isiijó** (to ferment), **a-sɛshá** (to be chronically unwell), **a-ɪgʊtʊmá** (to squat/sit down), **a-gʊrrʊmá** (to vomit).`,
    examples: [
      {
        samburu: 'ɛ-duŋ-ó ɔlkɪtɛ́ŋ ŋolé • ɛ-duŋ-óté intaléŋo',
        english: 'The ox was divided into portions yesterday • The ceremonies have ended',
        gloss: 'Singular (-o) vs. plural perfective (-ote) middle suffixes (Payne 2026)'
      },
      {
        samburu: 'm-ɛ́-ba-yú ɔlmʊ́rráni te nkeék enyénak',
        english: 'A warrior does not get healed by his own medicines',
        gloss: 'NEG-3-reach-MID.INCH warrior.NOM OBL trees his.PL (Payne 2026)'
      }
    ]
  },
  {
    id: 'samburu-johnston-1902-hobley-1910-clans-numerals',
    title: '5. Northern Maa Numerals (1–100) & Samburu Clans (Johnston 1902, Dundas 1910 & Hobley 1910)',
    category: 'nouns',
    summary: 'Complete Northern Maa numeral paradigm, the 3 Sambur Gilat (clans), and the 3 historical Samburu sections (Il Doigio, Lorogishu, Lobbeyok).',
    content: `### 1. Samburu / Northern Maa Numeral System (Johnston 1902 & CLDR \`saq\`)
* **1–5**: **1** *obo* (m.) / *nabo* (f.), **2** *waare / aare* (f.) / *oäri* (m.), **3** *okuni* (m.) / *uni* (f.), **4** *ong'wan*, **5** *imet*.
* **6–10**: **6** *ile*, **7** *sapa / naapishana*, **8** *isiet*, **9** *saal*, **10** *tomon*.
* **11–20**: **11** *tomon obo*, **12** *tomon waare*, **20** *tikitam*.
* **30–100 (Johnston 1902 p. 921)**: **30** *otomoni uni*, **40** *artam*, **50** *onnom*, **60** *onnom otomon* (50+10), **70** *onnom obikitam* (50+20), **80** *onnom otomoni uni* (50+30), **90** *onnom artam* (50+40), **100** *iip*.

### 2. Historical Sections & Clans (Dundas 1910, pp. 50–52; Hobley 1910, p. 159)
* **Three Historical Territorial Sections (Dundas 1910)**:
  1. **Il Doigio** (oldest Samburu section on the Loroghi / Lorogi Plateau and around Mount Nyiro / *Ol-doinyo Nyiro*).
  2. **Lorogishu** (called *Kwakituk* by the Suk, occupying the 4,000-ft *Angata e-'m-barta* plateau north of Loroghi and migrating across the Suguta and Lomello plains).
  3. **Lobbeyok** (occupying *Ngingyang* and *Tiati / Il Maruroi*).
* **Sambur *Gilat* (Clan Phratries in Hobley 1910, p. 159)**: **1. Sitat**, **2. Ol Lesilali**, **3. Maletis** (with Chief Laibon **Ol Segeteti**).`,
    examples: [
      {
        samburu: "Obo / Nabo (1), Waare (2), Okuni (3), Ong'wan (4), Imet (5), Ile (6), Sapa (7), Isiet (8), Saal (9), Tomon (10)",
        english: 'Samburu cardinal numbers 1 to 10',
        gloss: 'Northern Maa numeral paradigm'
      },
      {
        samburu: 'Lapa le obo (January) • Lapa le tomon waare (December)',
        english: 'Month of One (January) • Month of Twelve (December)',
        gloss: 'Samburu calendar months built from lapa (month) + numerals'
      }
    ]
  }
];
