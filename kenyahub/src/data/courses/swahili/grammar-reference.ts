// ============================================================
// Swahili (Kiswahili) Grammar Reference Guide
// Grounded in Hildegarde Hinde (1904) "Vocabularies of the Kamba and Kikuyu Languages of East Africa",
// C. W. Hobley (1922) "Bantu Beliefs and Magic", and Wiktionary Zone G40 Swahili Swadesh Corpus
// ============================================================

export interface SwahiliGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { swahili: string; english: string; explanation?: string }[];
}

export const SWAHILI_GRAMMAR_SECTIONS: SwahiliGrammarSection[] = [
  {
    id: "swahili-noun-classes-hinde-1904",
    title: "Bantu Noun Classes (Ngeli za Nomino) & Hinde (1904) Comparative Pluralization",
    summary: "Kiswahili organizes nouns into prefixal singular/plural pairs (m-/wa-, m-/mi-, ki-/vi-, n-/n-, ji-/ma-, u-) that govern subject, adjective, and possessive agreement.",
    content: `In *Vocabularies of the Kamba and Kikuyu Languages of East Africa* (1904), Hildegarde Hinde uses Coast/Zanzibar Swahili as the comparative baseline for East African Bantu noun classes:
1. **M-/WA- Class (Classes 1/2 — Animate/Human)**:
   - **mtu → watu** (person → people), **mtoto → watoto** (child → children), **mgeni → wageni** (stranger/guest → guests), **mganga → waganga** (healer → healers).
2. **M-/MI- Class (Classes 3/4 — Trees, Nature & Inanimate Objects)**:
   - **mti → miti** (tree → trees), **mto → mito** (river → rivers), **mwezi → miezi** (moon/month → months), **mkono → mikono** (hand/arm → hands).
3. **JI-/MA- Class (Classes 5/6 — Fruits, Paired Parts & Liquids)**:
   - **jiwe → mawe** (stone → stones), **jicho → macho** (eye → eyes), **jino → meno** (tooth → teeth), **maji** (water, Class 6 mass noun), **mafuta** (oil/fat).
4. **KI-/VI- Class (Classes 7/8 — Tools, Artifacts & Diminutives)**:
   - **kitu → vitu** (thing → things), **kiti → viti** (chair → chairs), **kisu → visu** (knife → knives), **kikombe → vikombe** (cup → cups).
5. **N-/N- Class (Classes 9/10 — Animals, Kinship & Everyday Nouns)**:
   - **nyumba → nyumba** (house → houses), **ng'ombe** (cattle), **mbuzi** (goat), **njia** (road/path).`,
    examples: [
      { swahili: "mtu mmoja → watu wawili", english: "one person → two people", explanation: "Class 1/2 m-/wa- noun and numeral agreement" },
      { swahili: "kitu kizuri → vitu vizuri", english: "a good thing → good things", explanation: "Class 7/8 ki-/vi- noun and adjectival agreement" },
      { swahili: "jiwe kubwa → mawe makubwa", english: "a large stone → large stones", explanation: "Class 5/6 ji-/ma- alternation (Hinde 1904)" }
    ]
  },
  {
    id: "swahili-verb-tenses-hinde-1904",
    title: "Agglutinative Verb Conjugation: Present (-na-/-a-), Past (-li-), Perfect (-me-), Future (-ta-) & Negation",
    summary: "Swahili verbs combine Subject Prefix + Tense Marker + Object Infix + Root + Mood Suffix, as systematically contrasted across 10 paradigms by Hinde (1904).",
    content: `Hildegarde Hinde (1904, pp. xiv–xv) documents ten affirmative and negative verb paradigms using **ku-shinda** ("to pass the day / overcome"):
1. **Subject Prefixes (Affirmative | Negative)**:
   - 1s **ni- | si-**, 2s **u- | hu-**, 3s **a- | ha-**, 1p **tu- | hatu-**, 2p **m- | ham-**, 3p **wa- | hawa-**.
2. **Core Affirmative Tense Markers**:
   - **Present (-na- / -a-)**: *ni-na-shinda / n-a-shinda* (I pass the day).
   - **Past (-li-)**: *ni-li-shinda* (I passed the day).
   - **Present Perfect (-me-)**: *ni-me-shinda* (I have passed the day).
   - **Future (-ta-)**: *ni-ta-shinda* (I shall pass the day).
   - **Narrative Consecutive (-ka-)**: *ni-ka-shinda* (and I passed the day).
3. **Negative Conjugation**:
   - **Present Negative**: Negative Subject Prefix + Root ending in **-i**: *si-shind-i* (I do not pass the day), *ha-shind-i* (he/she does not).
   - **Past Negative (-ku-)**: *si-ku-shinda* (I did not pass the day).
   - **Not Yet (-ja-)**: *si-ja-shinda* (I have not yet passed the day).
   - **Future Negative (-ta-)**: *si-ta-shinda* (I shall not pass the day).`,
    examples: [
      { swahili: "ninashinda / nilishinda / nitashinda", english: "I pass the day / I passed the day / I shall pass the day", explanation: "Present -na-, Past -li-, and Future -ta- (Hinde 1904)" },
      { swahili: "sishindi / sikushinda / sijashinda", english: "I do not pass the day / I did not / I have not yet", explanation: "Present -i, Past -ku-, and Incompletive -ja- negatives (Hinde 1904)" },
      { swahili: "Mtu ni watu • Haraka haraka haina baraka", english: "A person is people • Hurry, hurry has no blessing", explanation: "Classical Swahili proverbial syntax" }
    ]
  }
];
