// ============================================================
// Maasai (ɔl Maa) Grammar Reference Guide
// Based on Public Domain & Open-Web Linguistic Sources:
// 1. A. C. Hollis (1905) "The Masai: Their Language and Folklore" (Clarendon Press, Oxford — Public Domain)
// 2. C. W. Hobley (1922) "Bantu Beliefs and Magic" (Glossary — Public Domain)
// 3. Wikipedia Maasai_language, Eastern_Nilotic_languages (Vossen 1982) & Nilotic_languages
// ============================================================

export interface MaasaiGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { maasai: string; english: string; explanation?: string }[];
}

export const MAASAI_GRAMMAR_SECTIONS: MaasaiGrammarSection[] = [
  {
    id: "maasai-atr-vowel-harmony-tone",
    title: "Nine-Vowel ATR Harmony, Implosive Stops & Grammatical Tone in ɔl Maa",
    summary: "Maa contrasts +ATR (/i, e, o, u/) and -ATR (/ɪ, ɛ, ʊ, ɔ/) vowel sets with neutral /a/, four implosive stops (/ɓ, ɗ, ʄ, ɠ/), and tonal case/aspect inflection.",
    content: `As documented in Nilotic linguistics and Wikipedia's *Maasai language* reference:
1. **Advanced Tongue Root (ATR) Vowel Harmony**:
   - Maa has nine vowel phonemes divided into two harmonic sets plus neutral **/a/**:
   - **+ATR Set (/i, e, o, u/)**: e.g., **ébúl** (S/he will pierce it), **ol-mosorrî** (egg), **en-kitojó** (rabbit/hare), **atumokî** (to have a good opportunity).
   - **-ATR Set (/ɪ ⟨ɨ⟩, ɛ, ʊ ⟨ʉ⟩, ɔ/)**: e.g., **ɛ́bʉ́l** (S/he will prosper), **ɛn-kʉ́tʉ́k** (mouth), **kɨʉ́tɨshɔ** (index finger), **atʉmʉ́k** (to brew).
2. **Tonal Case & Voice Inflection (VSO Word Order)**:
   - Word order is predominantly **Verb–Subject–Object (VSO)**, and tone patterns distinguish Nominative (subject) from Accusative (object) case as well as active vs. middle voice:
   - **ɛ́yɛ́tá ɛmʊtí** = "She removed (meat) from the pot" (active perfective; *ɛmʊtí* in Low-High accusative tone).
   - **ɛyɛ́ta ɛmʊ́ti** = "The pot is de-meated" (imperfective middle; *ɛmʊ́ti* in High-Low nominative tone).`,
    examples: [
      { maasai: "ébúl (+ATR) vs. ɛ́bʉ́l (-ATR)", english: "S/he will pierce it vs. S/he will prosper", explanation: "Minimal pair contrasting +ATR /u/ and -ATR /ʊ/" },
      { maasai: "ol-mosorrî • en-kitojó • ɛn-kʉ́tʉ́k", english: "egg • rabbit • mouth", explanation: "Masculine ol- and feminine en- nouns with ATR harmony" },
      { maasai: "ɛ́yɛ́tá ɛmʊtí vs. ɛyɛ́ta ɛmʊ́ti", english: "She removed meat from the pot vs. The pot is de-meated", explanation: "Tonal inflection marking voice and case in VSO syntax" }
    ]
  },
  {
    id: "maasai-noun-genders-numerals-folklore",
    title: "Three Noun Gender Classes (Ol-, En-, E-), Gendered Numerals & Hollis (1905) Oral Literature",
    summary: "Maa prefixes mark Masculine (ol-/ɔl-, pl. il-), Feminine/Diminutive (en-/ɛn-, pl. in-), and Place (e-), with numerals 1–4, 7, and 9 inflecting for gender.",
    content: `From A. C. Hollis (1905) *The Masai: Their Language and Folklore*, C. W. Hobley (1922), and Vossen (1982):
1. **Three Grammatical Genders (Masculine, Feminine & Place)**:
   - **Masculine (*ol- / ɔl-*, pl. *il- / ɪl-*)**: Associated with large size, strength, or male beings: *ɔl-aláshɛ̀* (brother), *ol-ŋatúny* (male lion), *ɔl-caní* (tree/medicine), *ol-oiboni* (ritual prophet, pl. *il-oibonok*), *ol-murani* (warrior, pl. *il-muran*).
   - **Feminine (*en- / ɛn- / e-*, pl. *in- / ɪn-*)**: Associated with female beings, smaller items, or interior spaces: *ɛn-kái / Eng-ai* (God/sky/rain), *e-ŋatúny* (lioness), *ɛŋ-kár-ɛ́* (water/river), *eng-aji* (Maasai house), *en-gerr* (sheep).
   - **Place Gender (*e- / ne-*)**: Used for locations and spatial pronouns.
2. **Gender-Inflected Numerals (1–10)**:
   - Numerals 1, 2, 3, 4, 7, and 9 agree in gender with the noun counted:
   - **1**: *nabô* (fem.) / *obô* (masc.) / *nebô* (place)
   - **2**: *aré* (fem.) / *aàre, ɔáre* (masc.)
   - **3**: *uní* (fem.) / *okúni* (masc.)
   - **4**: *oŋwán* (fem.) / *oóŋwan* (masc.)
   - **5**: *ímíêt* • **6**: *ílɛ̂* • **7**: *naápishana* (f.) / *oópishana* (m.) • **8**: *ísíêt* • **9**: *naáudo* (f.) / *oódó* (m.) • **10**: *tɔ́mɔ̂n*.
3. **Hollis (1905) Proverbs & Riddles**:
   - *Eata en-gewarie 'n-giyaa* ("The night has ears", Proverb #3).
   - *Ekwenikye 'n-guk in-guruon* ("Coals laugh at the ashes", Proverb #6).
   - *Aata 'n-dapan ainei are naarisyo: Eng-ai o en-gap* ("I have two skins, one to lie on and the other to cover myself with: The bare ground and the sky", Riddle #5).`,
    examples: [
      { maasai: "ol-ŋatúny (masc.) vs. e-ŋatúny (fem.)", english: "male lion vs. lioness", explanation: "Productive gender prefix alternation ol- vs. e-" },
      { maasai: "nabô / obô / nebô (1) • aré / aàre (2) • uní / okúni (3)", english: "one (f./m./place) • two (f./m.) • three (f./m.)", explanation: "Gendered cardinal numerals in Maa" },
      { maasai: "Eata en-gewarie 'n-giyaa", english: "The night has ears", explanation: "A. C. Hollis (1905) The Masai: Their Language and Folklore, p. 238" }
    ]
  }
];
