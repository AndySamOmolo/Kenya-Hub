import type { GrammarSection } from "../types";

// ============================================================
// Taveta (Kitaveta) Grammar Reference Sections
// Declarative modular grammar reference (audit-ready, zero runtime mutations)
// ============================================================

export const TAVETA_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    "id": "taveta-hollis-1910-johnston-1919",
    "title": "Kitaveta Noun Classes, Numerals & Oral Literature (Hollis 1910–1911 & Johnston 1919 #15 Taveita)",
    "summary": "Kitaveta is a North-East Coastal Bantu language closely allied to Pare/Asu and Chaga-Taita, preserving 15+ noun classes and rich proverb/riddle morphology.",
    "content": "As documented in A. C. Hollis (*Taveta Sayings and Proverbs*, 1910; *Taveta Enigmas*, 1911) and Sir Harry Johnston (*Comparative Study of the Bantu Languages*, 1919, #15 Taveita, Vol. I, pp. 98–112 & Vol. II, pp. 33–34):\n- **Noun Classes**: Class 1/2 *mndu → wandu* (person → people), *mche → wache* (woman → women); Class 3/4 *mti → miti* (tree → trees); Class 5/6 *ideghe → madeghe* (bird → birds), *iwe → mawe* (stone → stones), *mazi* (water); Class 7/8 *kindu → vindu* (thing → things).\n- **Cardinal Numerals (Johnston 1919, Vol. I, p. 107 #15 Taveita)**: *imwe* (1), *iwiri* (2), *itatu* (3), *inya* (4), *itano* (5), *itandatu* (6), *mfungate* (7), *mnane* (8), *kenda* (9), *ikumi* (10).",
    "examples": [
      {
        "taveta": "Esikie mbeho niye esongeria moto.",
        "english": "It is the one who feels the cold who draws near to the fire.",
        "explanation": "A. C. Hollis (1910, Taveta Proverb #4)"
      },
      {
        "taveta": "Ideghe imwe likaremwa kuiya teheshigha kucha.",
        "english": "If one bird fails to sing, it does not stop the dawn from breaking.",
        "explanation": "A. C. Hollis (1910, Taveta Proverb #10)"
      }
    ]
  },
  {
    "id": "taveta-public-domain-dataset-synthesis",
    "title": "Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Taveta (Kitaveta))",
    "summary": "Synthesizes phonological correspondences, morphological patterns, and lexical roots across the newly integrated public-domain monographs and open-web datasets for Taveta (Kitaveta).",
    "content": "1. **Archival & Open-Dataset Integration for Taveta (Kitaveta)**:\n   - Combines primary historical documentation (Johnston 1902/1919, Hobley 1902/1910/1922, Krapf 1842/1850/1882/1887, Hollis 1905/1909/1910, Beech 1911, Barton 1921, Lindblom 1920, Wray 1894, Kirk 1905, Tutschek 1844–1845) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).\n2. **Phonetic & Orthographic Normalization**:\n   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *ω, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    "examples": [
      {
        "taveta": "mshana (pl. vashana) • mbazi /ulosi",
        "english": "Blacksmith / ironworker • Proverb / wise saying (Kitaveta)",
        "explanation": "A. C. Hollis, Taveta Sayings and Proverbs (1910)"
      },
      {
        "taveta": "lālā • kāā",
        "english": "„ sleep • „ sit, remain, abide",
        "explanation": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
      }
    ]
  },
  {
    "id": "taveta-johnston-1919-1922-group-c-15-group-d-17-caga",
    "title": "Sir Harry H. Johnston (1919–1922) Group C #15 Taveita & Group D #17 Caga: Errata p. x (M-ōtω & Mωši), 16-Class Prefix/Concord Table (p. 112), Noteworthy Roots (Vol. II, pp. 33–34) & Bibliography (p. 788)",
    "summary": "Complete line-by-line documentation of Group C #15 Taveita and its Kilimanjaro neighbour Group D #17 Caga in Sir Harry H. Johnston's Comparative Study of the Bantu and Semi-Bantu Languages (Vol. I [1919], pp. x, 98–126, 788 & Vol. II [1922], pp. 33–35, 226, 261).",
    "content": "From Sir Harry H. Johnston (*A Comparative Study of the Bantu and Semi-Bantu Languages*, Vol. I [1919], pp. x, 98–126, 788 & Vol. II [1922], pp. 33–35, 226, 261):\n1. **Errata (Vol. I, p. x) & Complete 16-Class Prefix/Concord Table for #15 Taveita (Vol. I, p. 112 & Vol. II, p. 261)**:\n   - **Errata (Vol. I, p. x)**: On p. 100 col. 15 (**Taveita**), 'Fire' is rendered **M-ōtω**; on p. 113 (**17. Caga**), the principal dialect is corrected from *Musi* to **Mωši** (alongside *Śira, Keni/Urombo, Uru, Macame, Siha, Meru, Kahe*).\n   - **16-Class Prefixes & Concords in #15 Taveita (Vol. I, p. 112)**:\n     - **Class 1**: **Mu-, M-** (*yu-, u-, a-, va-*) • **Class 2**: **Va-, Wa-** (*va-, wa-*)\n     - **Class 3**: **Mu-, M-** (*u-*) • **Class 4**: **Mi-** (*i-, mi-*)\n     - **Class 5**: **I-, Ri-** (*li-, ri-*) • **Class 6**: **Ma-** (*ga-, ma-*)\n     - **Class 7**: **Ki-, C'-** (*ki-, c'-*) • **Class 8**: **Vi-, Vy-** (*vi-, vy-*)\n     - **Class 9**: **N- (Ny-, M-)** (*i-, y'-*) • **Class 10**: **N- (Ny-, M-)** (*zi-, z'-*)\n     - **Class 11**: **Lu-** (*lu-*)\n     - **Class 12**: **Tu-** (plural of Class 13; *tu-*) • **Class 13**: **Ka-** (diminutive singular; *ka-*)\n     - **Class 14**: **Vu-, U-** (*vu-, u-*) • **Class 15**: **Ku-** (*ku-*) • **Class 16**: **Ha-, Va-** (*ha-, va-*), plus locative suffix **-ni / -ini**.\n2. **Noteworthy Roots in #15 Taveita & Comparison with #17 Caga (Vol. I, pp. 98–126 & Vol. II, pp. 33–35)**:\n   - **Kinship & People**: **M-ndu ; va-ndu** (person), **Papa, Iše** (father), **Mama, Nyinya** (mother), **M-īmi ; va-īmi** (man/husband), **M-ce ; va-ce** (woman/wife), **M-wana ; v-ana** (child), **M-fumwa ; va-** (chief/king), **M-ganga ; va-** (doctor).\n   - **Body, Nature & Animals**: **M-twi ; mi-twi** (head), **I-rišω ; m-ešω** (eye), **Kū-tū ; ma-tū** (ear), **I-jegω ; ma-jegω** (tooth), **Lu-limi ; n-dimi** (tongue), **M-kωnω ; mi-** (arm), **Kū-gūlū ; ma-** (leg), **Ny-umba** (house), **I-zūva** (sun; Caga **I-rūva**), **M-wezi** (moon), **Ny-ωta** (star), **M-vūa** (rain), **Ma-zi** (water; Caga **M-riṅga**), **M-ōtω** (fire), **I-we ; ma-we** (stone), **N-zωvu** (elephant), **M-bωgω** (buffalo), **Simba** (lion), **N-gω** (leopard), **M-fuli** (rhino), **Sūi** (fish), **I-deγe ; ma-deγe** (bird).\n3. **Bibliography for #15 Taveita (Vol. I, p. 788)**:\n   - Cites Sir Harry H. Johnston (*The Kilima-njaro Expedition*, 1886 — first published vocabulary of *Kitaveta*), J. T. Last (*Polyglotta Africana Orientalis*, 1885), Rev. A. R. Steggall (CMS Taveta translations, 1892–1906), and A. C. Hollis (*Taveta Sayings and Proverbs*, JAS 1910 & *Taveta Enigmas*, JAS 1911).",
    "examples": [
      {
        "taveta": "M-ndu → va-ndu • M-īmi → va-īmi (man/husband) • M-ce → va-ce (woman/wife) • I-deγe → ma-deγe (bird) • M-ōtω (fire, Erratum p. x)",
        "english": "Core Kitaveta nouns and Vol. I p. x Erratum in Johnston (1919 #15 Taveita)",
        "explanation": "Johnston (1919, Vol. I, pp. x, 98–106 #15 Taveita)"
      },
      {
        "taveta": "17. Caga (Mωši, Śira, Keni/Urombo, Uru, Macame, Siha, Meru, Kahe): I-rūva (sun/God), M-riṅga (water), M-ndu → wa-ndu",
        "english": "Kilimanjaro #17 Caga comparative roots and Erratum p. x (Mωši)",
        "explanation": "Johnston (1919, Vol. I, pp. x, 113–126 #17 Caga)"
      },
      {
        "taveta": "Iye (Mimi), Uwe, Yeye, Iswi, Inywi, Vaω • -aṅgu, -akω, -akwe, -etu, -enyu, -aω",
        "english": "Independent personal and possessive pronouns in #15 Taveita",
        "explanation": "Johnston (1919, Vol. I, p. 108 #15 Taveita)"
      }
    ]
  }
];
