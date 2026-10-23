// ============================================================
// Meru & Mount Kenya Bantu (Kĩmĩĩrũ / Kîembu) Grammar Reference Guide
// Grounded in Wikipedia Meru_language (16 Noun Classes, 4 Dialect Clusters)
// and Wikipedia Embu_language (150-Word Lexicon & 16 Parallel Phrases)
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
    title: "The 16 Noun Classes of Kĩmĩĩrũ, Adjectival/Demonstrative Concord & Dahl's Law",
    summary: "Kĩmĩĩrũ preserves 16 active Bantu noun classes with full alliterative agreement across demonstratives, adjectives, and verbs, alongside Dahl's Law voicing dissimilation.",
    content: `As documented in Wikipedia's *Meru language* and *Embu language* linguistic references:
1. **Complete 16-Class Concord System**:
   - **Class 1/2 (*mũ- / a-* or *ba-*)**: *Muntũ ũjũ mũraja arĩrũta wĩra* (This tall person is working) → *Antũ baba baraja barĩrũta wĩra* (These tall people are working).
   - **Class 3/4 (*mũ- / mĩ-*)**: *Mũtĩ ũjũ mũraja* (This tall tree) → *Mĩtĩ ĩjĩ mĩraja* (These tall trees).
   - **Class 5/6 (*rĩ-, ĩ- / ma-*)**: *Ĩvia / Ĩiga* (stone) → *Mavia / Maiga* (stones), *Maĩ / Manjĩ* (water).
   - **Class 7/8 (*kĩ- / bi-, ci-*)**: *Kĩvĩrĩ / Gĩtĩ* (chair) → *Bĩtĩ / Ciĩtĩ* (chairs).
   - **Class 9/10 (*n- / n-*)**: *Ng'ombe* (cattle), *Mbũri* (goat), *Nyomba* (house).
   - **Class 12/13 (*ka- / tũ-* Diminutives)**: *Kaana → Tũana* (small child → small children), *Kavĩcĩ → Tũvĩcĩ* (young boy → boys).
2. **Dahl's Law (Voicing Dissimilation)**:
   - When a prefix containing voiceless *k* or *t* precedes a stem beginning with another voiceless stop (*t, k, c*), the prefix consonant voices to *g* (*kĩ- + tĩ → gĩtĩ* 'chair', *kũ- + thiĩ → gũthiĩ* 'to go').`,
    examples: [
      { meru: "Muntũ ũjũ mũraja → Antũ baba baraja", english: "This tall person → These tall people", explanation: "Class 1/2 demonstrative and adjectival concord in Kĩmĩĩrũ" },
      { meru: "Mũtĩ ũjũ mũraja → Mĩtĩ ĩjĩ mĩraja", english: "This tall tree → These tall trees", explanation: "Class 3/4 concord" },
      { meru: "kũ-ruga (to cook) vs. gũ-thiĩ (to go)", english: "to cook vs. to go", explanation: "Dahl's Law voicing kũ- -> gũ- before voiceless stem consonant" }
    ]
  },
  {
    id: "meru-dialect-comparison-phrases",
    title: "Four Kĩmĩĩrũ Dialect Clusters & Parallel Mount Kenya Bantu Conversational Phrases",
    summary: "Spoken across Meru, Tharaka-Nithi, and Embu counties, Mount Kenya Bantu exhibits systematic dialectal variations across Imenti, Tigania/Igembe, Chuka/Mwimbi/Muthambi, Tharaka, and Kîembu.",
    content: `Wikipedia's *Meru language* and *Embu language* tables compare everyday phrases across the Mount Kenya dialects:
1. **Four Kĩmĩĩrũ Dialect Clusters**:
   - **Imenti**: *Mpũa inyingĩ ĩtiumaga mbura* (Too much thunder does not bring rain).
   - **Chuka / Mwimbi / Muthambi**: Preserves conservative phonological distinctions along the southern slopes of Mount Kenya.
   - **Tigania / Igembe**: Spoken in northern Meru (Nyambene Hills).
   - **Tharaka**: Spoken in the eastern lowlands of Tharaka-Nithi.
2. **Everyday Greetings & Phrases**:
   - **Muuga! / Ũrĩ mwega?** = Hello! / How are you? → **Nĩ mwega** (I am fine).
   - **Mũrĩ ega?** = How are you all? → **Tũrĩ ega** (We are fine).
   - **Wĩtagwa atĩa?** = What is your name? → **Njĩtagwa...** (My name is...).
   - **Nĩwega mũno** = Thank you very much.`,
    examples: [
      { meru: "Ũrĩ mwega? — Nĩ mwega. | Mũrĩ ega? — Tũrĩ ega.", english: "How are you? — I am fine. | How are you all? — We are fine.", explanation: "Singular vs. plural greetings in Mount Kenya Bantu" },
      { meru: "Wĩtagwa atĩa? — Njĩtagwa...", english: "What is your name? — My name is...", explanation: "Passive verb -ĩtagwa ('to be called')" },
      { meru: "Njũri Ncheke • Kiama kia Ngome", english: "Supreme Council of Elders (Ameru • Aembu)", explanation: "Traditional indigenous governance institutions" }
    ]
  }
];
