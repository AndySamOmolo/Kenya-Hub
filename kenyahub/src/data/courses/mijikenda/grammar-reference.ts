// ============================================================
// Mijikenda (Kigiryama / Chidigo / Chichonyi / Chiduruma) Grammar Reference Guide
// Grounded in W. E. Taylor (1891) "Giryama Vocabulary and Collections" (SPCK, London — Public Domain)
// and Sabaki / North-East Coast Bantu Comparative Linguistics
// ============================================================

export interface MijikendaGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { mijikenda: string; english: string; explanation?: string }[];
}

export const MIJIKENDA_GRAMMAR_SECTIONS: MijikendaGrammarSection[] = [
  {
    id: "mijikenda-phonology-noun-classes",
    title: "Sabaki Sound Shifts (*t > h, dzi-/ma- Classes) & Nine Kaya Dialects",
    summary: "Mijikenda ('The Nine Homesteads' — Midzi Chenda) preserves distinctive Sabaki sound laws (such as *moto > moho 'fire', *mutu > mut'u 'person', *jino > dzino 'tooth') across Kigiryama, Chidigo, Chichonyi, and Chiduruma.",
    content: `As documented in W. E. Taylor's *Giryama Vocabulary and Collections* (1891) and Wikipedia's *Sabaki languages* / *Digo language* references:
1. **Distinctive Mijikenda Phonology & Sound Correspondences**:
   - **Aspirated voiceless stops (*t', k', p'*)**: e.g., **mut'u** (person, pl. **at'u**), **k'uku** (chicken), **p'ula** (nose).
   - **Lenition of Proto-Bantu \*t > h**: e.g., **moho** (fire, cf. Swahili *moto*), **muho** (river, cf. Swahili *mto*), **-hahu** (three, cf. Swahili *-tatu*), **mahahu** (three).
   - **Affrication in Class 5 (*dzi- / ma-*)**: **dziwe → mawe** (stone → stones), **dzino → meno** (tooth → teeth), **dzits'o → mats'o** (eye → eyes), **madzi** (water), **Midzi Chenda** (Nine Villages/Tribes).
2. **Giryama *ki-* vs. Chonyi/Digo *chi-* (Class 7/8)**:
   - Class 7 nouns take **ki-** in Kigiryama (**kihi** 'chair', **kikokora** 'elbow', **chakurya** 'food') and **chi-** in Chichonyi/Chidigo (**chihi** 'chair').`,
    examples: [
      { mijikenda: "mut'u (pl. at'u) • mwalume (pl. alume) • muche (pl. ache)", english: "person (pl. people) • man (pl. men) • woman (pl. women)", explanation: "Class 1/2 animate nouns in W. E. Taylor (1891)" },
      { mijikenda: "dziwe (pl. mawe) • dzino (pl. meno) • madzi • moho", english: "stone • tooth • water • fire", explanation: "Sabaki dzi-/ma- prefixation and *t > h lenition" },
      { mijikenda: "kihi (Kigiryama) / chihi (Chichonyi)", english: "chair, stool", explanation: "Class 7 dialectal alternation across Mijikenda" }
    ]
  },
  {
    id: "mijikenda-taylor-1891-riddles-verbs",
    title: "W. E. Taylor (1891) Verbal Morphology, Negation (k'a-) & Classical Giriama Riddles",
    summary: "In Taylor (1891), Kigiryama forms infinitives with ku-, negates indicative verbs with prefix k'a-, and uses conditional/temporal -ki- ('when/if').",
    content: `W. E. Taylor (1891) *Giryama Vocabulary and Collections* illustrates classical Kigiryama verb structure through riddles and folktales:
1. **Infinitive & Everyday Verbs (*ku-*)**:
   - **kurya** (to eat), **kugit'ira** (to cook), **kuadima** (to be able), **kuuka** (to depart/go away), **kulumika** (to be bitten), **kugula / kuguza** (to buy / to sell), **kutsimba** (to dig), **kudzenga** (to build).
2. **Negative Prefix (*k'a-*) & Conditional Infix (*-ki-*)**:
   - In Riddle #6 (Taylor 1891, p. 138): *"Fw-alume ahahu, a-ki-uka mumwenga, k'a-furya wari. Ni mafigo."*
   - **a-ki-uka mumwenga** = "when one goes away" (*-ki-* = temporal/conditional 'when').
   - **k'a-furya wari** = "we do not eat cornmeal" (*k'a-* = negative prefix).
   - **k'a-adima kugit'ira chakurya** = "(a person) cannot cook food".
   - In Riddle #8 (p. 139): **"K'a-ki-lumika. Ni kikokora."** = "It (Class 7 *ki-*) cannot be bitten. It is the elbow."`,
    examples: [
      { mijikenda: "Fw-alume ahahu, akiuka mumwenga, k'afurya wari. Ni mafigo.", english: "We are three men; when one goes away, we eat no cornmeal. It is the three hearthstones.", explanation: "W. E. Taylor (1891, p. 138, Riddle #6)" },
      { mijikenda: "K'akilumika. Ni kikokora.", english: "It cannot be bitten. It is the elbow.", explanation: "W. E. Taylor (1891, p. 139, Riddle #8)" },
      { mijikenda: "Magoma mairi lwanda-ni. Ni mahombo.", english: "Two cows in the open field. It is the breasts.", explanation: "W. E. Taylor (1891, p. 140, Riddle #18)" }
    ]
  }
];
