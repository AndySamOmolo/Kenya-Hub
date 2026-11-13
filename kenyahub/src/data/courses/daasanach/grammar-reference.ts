import type { GrammarSection } from "../types";

// ============================================================
// Daasanach (Dhaasanac) ('Af Dhaasanac) Grammar Reference Sections
// Declarative modular grammar reference (audit-ready, zero runtime mutations)
// ============================================================

export const DAASANACH_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    "id": "daasanach-nishiguchi-2004-phonology-assimilation",
    "title": "Phonology, Implosives & Sonority-Driven Consonant Assimilation in Ileret Daasanach (Nishiguchi 2004 & Tosco 2001)",
    "summary": "Sumiyo Nishiguchi (2004, fieldwork at Ileret, Marsabit County) and Mauro Tosco (2001) document Daasanach's 7-vowel system, voiced implosives (b', d', j', g'), and progressive/regressive consonant assimilation governed by the sonority hierarchy.",
    "content": "From Sumiyo Nishiguchi (*\"Consonant Assimilation and Sonority: A Case Study in Daasanach\"*, Rutgers Optimality Archive, 2004, pp. 1–16) and Mauro Tosco (*The Dhaasanac Language*, Köppe, Cologne, 2001):\n1. **Vowel & Consonant Inventory**:\n   - **7 Vowels (short & long)**: /i, e, ɛ, a, ɔ, o, u/ with tonal accent (High `á` vs. Falling `â`).\n   - **Consonants**: Includes voiced implosives (*b' [ɓ], d' [ɗ], dy/j' [ʄ], g' [ɠ]*), voiced interdental fricative *dh [ð]*, glottal stop *' [ʔ]*, liquids *l, r*, glides *w, y*, and nasals *m, n, ny [ɲ], ng [ŋ]*.\n2. **Sonority-Governed Consonant Assimilation Across Morpheme Boundaries (Nishiguchi 2004, pp. 3–12)**:\n   - When inflectional suffixes beginning with coronal obstruent **/t/** (such as singulative *-ti* or 2s/3f imperfective verbal suffix *-ta*) attach to stems ending in a consonant, assimilation depends on the relative sonority of the stem-final consonant:\n   - **After Liquids (/l, r/) — Total Progressive Gemination**: *maal + -ta →* **maal-la** ('you/she hears'), *fur + -ta →* **fur-ra** ('you/she opens'), *baar + -ta →* **baar-ra** ('it flies'), *kor + -u →* **kor-ri** ('trees'), *gaal + -u →* **gaal-li** ('camels'), *bil + -u →* **bil-li** ('houses').\n   - **After Nasals (/m, n/) — Place & Manner Coalescence to Geminate *-nn-***: Labial /m/ assimilates in place to coronal /t/, while /t/ assimilates in nasality to the nasal, yielding geminate **-nn-**: *kom + -ta →* **kon-na** ('you/she eats'), *giin + -ta →* **giin-na** ('you/she bites').\n   - **After Labial Fricative (/f/) — Progressive Gemination**: *rif + -ta →* **rif-fa** ('you/she sleeps'), *kuf + -ta →* **kuf-fa** ('you/she dies').\n   - **After Coronal Sibilant/Fricative (/s, dh/)**: *gas + -u →* **gac-cu / gas-u** ('feet/legs'), *sedh + -ta →* **sete** ('you/she walks').",
    "examples": [
      {
        "daasanach": "maal + -ta → maal-la • fur + -ta → fur-ra • kom + -ta → kon-na • rif + -ta → rif-fa",
        "english": "you/she hears • you/she opens • you/she eats • you/she sleeps",
        "explanation": "Sonority-driven consonant assimilation in 2s/3f imperfective verbs (Nishiguchi 2004, pp. 7–9)"
      },
      {
        "daasanach": "bil → bil-li • gaal → gaal-li • cher → cher-ri • kor → kor-ri",
        "english": "house → houses • camel → camels • dog → dogs • tree → trees",
        "explanation": "Liquid gemination in noun plural formation (Nishiguchi 2004, pp. 4–6)"
      }
    ]
  },
  {
    "id": "daasanach-blazek-2011-morphology-lexicon",
    "title": "Western Omo-Tana Classification, Clusivity Pronouns, Number Marking & 100-Word Swadesh Etymologies (Blažek 2011 & Höhnel 1894)",
    "summary": "Václav Blažek (2011) synthesizes the genealogical position of Daasanach inside the Western Omo-Tana branch of Lowland East Cushitic alongside Arbore and Elmolo, detailing its pronominal clusivity, numerals, and core lexicon.",
    "content": "From Václav Blažek (*\"Dasanech Language: State-of-the-Art\"*, 2011, pp. 1–16, citing Sasse 1974/1976 and Tosco 2001) and Lieut. Ludwig von Höhnel (*Discovery of Lakes Rudolf and Stefanie*, Vol. I, 1894, pp. 161–175):\n1. **Genealogical Position in Lowland East Cushitic (Omo-Tana)**:\n   - Daasanach (*'Af Dhaasanac*) forms the **Western Omo-Tana (Galaboid)** sub-branch together with **Arbore** (*Marle*) and Kenya's endangered **Elmolo**, closely related to **Rendille** and **Somali**.\n   - Regular sound correspondences include Lowland East Cushitic **l → n* in initial position before nasals (**lam(m)a → nààmà* 'two'), loss of pharyngeal laryngeals with compensatory vowel length (**mathH- → mé* 'head', **magac- → mé* 'name'), and **k → ch* palatalization before front vowels (**ker- → chér* 'dog', **k(V)an- → chén* 'five').\n2. **Inclusive vs. Exclusive 1st Person Plural Pronouns (Blažek 2011, p. 3)**:\n   - **1s**: Subj. *yáa*, Obj. *yú*, Poss. *chú / kú* ('my').\n   - **2s**: Subj. *kúu*, Obj. *kú / kuo*, Poss. *kúo* ('thy').\n   - **1p Inclusive ('you and I')**: Subj. **múu**, Obj. **mú / muo**.\n   - **1p Exclusive ('we without you')**: Subj. **nyíni**, Obj. **nyí**.\n   - **2p**: Subj. **'ítíni**, Obj. **'ití**.\n3. **Three-Way Nominal Number System (Collectives, Singulatives *-ti/-iti*, Pluratives *-u/-ddi*)**:\n   - Many transnumeral collectives form a singulative in **-ti** and a plurative in **-u / -ddi**: e.g., *bêèch* ('fish [coll.]') → *bêèch-tì* ('a fish') → *bêèch-ù* ('fishes'); *kìdìny* ('bird') → *kìdìny-tì* → *kìdìny-ù*; *jáàr* ('stone') → *jáàr-tì* → *jáàr-ù*.\n   - Compound genitives use the suffix **-iet**: *góng kór-iet* ('bark of tree' = 'skin of tree'), *nèèt kór-iet* ('leaf' = 'ear of tree').",
    "examples": [
      {
        "daasanach": "múu (inclusive) vs. nyíni (exclusive) • tákàch (1), nààmà (2), sèddí (3), 'àffúr (4), chén (5)",
        "english": "we (incl. vs. excl.) • 1, 2, 3, 4, 5",
        "explanation": "Pronominal clusivity and numerals in Blažek (2011, pp. 3–4)"
      },
      {
        "daasanach": "bêèch → bêèch-tì (sg.) → bêèch-ù (pl.) • góng kór-iet • nèèt kór-iet",
        "english": "fish (coll. → sg. → pl.) • bark ('skin of tree') • leaf ('ear of tree')",
        "explanation": "Tripartite number marking and genitive compounds (Blažek 2011, pp. 5–10)"
      }
    ]
  }
];
