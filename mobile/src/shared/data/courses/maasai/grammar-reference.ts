// ============================================================
// Maasai (ɔl Maa) Grammar Reference Guide
// Based on Public Domain & Open-Web Linguistic Sources:
// 1. Hildegarde Hinde (1901) "The Masai Language: Grammatical Notes Together with a Vocabulary" (Cambridge Univ. Press)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" (Masai & Njemps/Samburu comparative tables)
// 3. A. C. Hollis (1905) "The Masai: Their Language and Folklore" (Clarendon Press, Oxford — Public Domain)
// 4. C. W. Hobley (1910) "Ethnology of A-Kamba and Other East African Tribes" & (1922) "Bantu Beliefs and Magic"
// 5. Wikipedia Maasai_language, Eastern_Nilotic_languages (Vossen 1982) & Nilotic_languages
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
    title: "Nine-Vowel ATR Harmony, Implosive Stops & Grammatical Tone in ɔl Maa (Hollis 1905, Hinde 1901 & Vossen 1982)",
    summary: "Maa contrasts +ATR (/i, e, o, u/) and -ATR (/ɪ, ɛ, ʊ, ɔ/) vowel sets with neutral /a/, four implosive stops (/ɓ, ɗ, ʄ, ɠ/), and tonal case/aspect inflection in VSO word order.",
    content: `As documented in A. C. Hollis (*The Masai: Their Language and Folklore*, 1905, pp. 1–102), Hildegarde Hinde (*The Masai Language*, 1901, pp. 1–39), and Nilotic linguistics:
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
    title: "Three Noun Gender Classes (Ol-, En-, E-), Two Verb Conjugation Classes, 9 Derivative Stems & Hollis (1905) / Hinde (1901) Oral Literature",
    summary: "Maa prefixes mark Masculine (ol-/ɔl-, pl. il-), Feminine/Diminutive (en-/ɛn-, pl. in-), and Place (e-), while verbs divide into Class I (non-i-stems) and Class II (i-stems) with 9 derivative extensions.",
    content: `From A. C. Hollis (1905, pp. 6–98) *The Masai: Their Language and Folklore* and Hildegarde Hinde (1901, pp. 8–39):
1. **Three Grammatical Genders (Masculine, Feminine & Place)**:
   - **Masculine (*ol- / ɔl-*, pl. *il- / ɪl-*)**: Denotes male beings, large size, or strength: *ol-tungani → il-tungana* (person → people), *ol-murani → il-muran* (warrior → warriors), *ol-oiboni → il-oibonok* (ritual prophet/seer), *ol-ngatuny* (male lion), *ol-chani → il-keek* (tree → trees/firewood).
   - **Feminine (*en- / ɛn- / eng- / ink-*, pl. *in- / ɪn-*)**: Denotes female beings, smaller items, or diminutives: *en-gerai → in-gera* (child → children), *en-kitok → in-kituak* (woman/wife → women), *Eng-ai* (God/sky/rain), *en-gare* (water/river), *eng-aji → ing-ajijik* (house → houses), *en-giteng → in-gishu* (cow → cattle).
   - **Place Gender (*e- / ewueji*)**: *ewueji nabo* (one place).
2. **Two Verb Classes & Nine Derivative Extensions (Hollis 1905, pp. 47–84)**:
   - **Class I Verbs** (roots not beginning with *i*): e.g., *a-suj* (to follow), *a-nyor* (to love), *a-lo* (to go, pl. *a-puo*).
   - **Class II Verbs** (roots beginning with *i*): e.g., *a-irorie* (to speak to), *a-ipot* (to call), *a-ining* (to hear).
   - **Subject-Object Portmanteau Prefixes**: **aa-** ("I...thee" or "he/they...me": *aa-nyor*, I love thee / he loves me), **ki-** ("thou...me" or "we").
   - **Nine Derivative Stems (Hollis 1905, pp. 66–77)**: (1) Motion towards speaker (**-u / -unye**), (2) Motion away (**-aa / -aya**), (3) Dative/Applied "for/to" (**-aki / -oki**), (4) Instrumental "with/at" (**-ie**), (5) Inchoative/Become (**-u / -isho**), (6) Intransitive (**-isho / -asho**), (7) Neuter/Quasi-Passive (**-a / -o**), (8) Reciprocal (**-ro / -no**), and (9) Causative (**a-ita-** for Class I, **-ie** for Class II).
3. **Salutations, Songs & Proverbs (Hinde 1901, pp. 29–38 & Hollis 1905, pp. 238–355)**:
   - Youth/warrior greeting: **Sopai!** → Reply: **Epa!**
   - Elder/women greeting: **Takwenya!** → Reply: **Iko!**`,
    examples: [
      { maasai: "Sopai! — Epa! | Takwenya! — Iko!", english: "Greetings (to men/warriors)! — Reply! | Greetings (to women/elders)! — Reply!", explanation: "Traditional Maa salutations (Hinde 1901, p. 29 & Hollis 1905, p. 99)" },
      { maasai: "aa-nyor (I love thee / he loves me) • ki-nyor (thou lovest me / we love)", english: "Portmanteau subject-object prefixes on Class I verb a-nyor ('to love')", explanation: "Hollis (1905, p. 48) & Hinde (1901)" },
      { maasai: "a-lo (sg.) / a-puo (pl.) • a-lotu (come hither) • a-lo-aa (go away)", english: "to go (sg./pl.) • to come towards speaker (-u) • to go away (-aa)", explanation: "Suppletive plural stem and directional extensions in Hollis (1905, pp. 66, 80)" }
    ]
  }
];
