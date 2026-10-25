// ============================================================
// Luhya (Oluluyia / Luwanga / Luhanga / Lubukusu) Grammar Reference Guide
// Based on Public Domain & Open-Web Comparative Linguistic Sources:
// 1. C. W. Hobley (1902) "Eastern Uganda: An Ethnological Survey" (Lu-Wanga & Ketosh/Bukusu grammars & vocabularies)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" (Lunyara, Lukabarasi, Lurimi/Luwanga, Lukonde, Masaba)
// 3. C. W. Hobley (1903) "British East Africa: Anthropological Studies in Kavirondo and Nandi" (JAI Vol. 33)
// 4. Sir Harry H. Johnston (1919) "A Comparative Study of the Bantu and Semi-Bantu Languages" (#5 Lunyara, #5a Luwanga, #5b Lusinga, #6 Lumasaba, #6a Lukonde)
// 5. Rev. N. Stam (1929) "The Bahanga" (Catholic Anthropological Conference Vol. I, No. 4 — Public Domain)
// 6. Wiktionary Bantu Swadesh Lists (Zone J30) & Wikipedia Luhya_language
// ============================================================

export interface LuhyaGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { luhya: string; english: string; explanation?: string }[];
}

export const LUHYA_GRAMMAR_SECTIONS: LuhyaGrammarSection[] = [
  {
    id: "luhya-dialects-comparison",
    title: "The Luhya (Zone J30) Dialect Continuum: Luwanga/Luhanga, Lunyara, Lukabarasi, Lubukusu/Ketosh & Logoli (Hobley 1902, Johnston 1902/1919 & Stam 1929)",
    summary: "Oluluyia comprises a continuum of Western Kenyan Bantu varieties documented by Hobley (1902), Johnston (1902, 1919), and Stam (1929), sharing core preprefixal Bantu noun-class morphology.",
    content: `As documented in C. W. Hobley (*Eastern Uganda*, 1902, pp. 46–51, 61–79), Sir Harry H. Johnston (*The Uganda Protectorate*, 1902, pp. 902–929 & *Comparative Study of the Bantu Languages*, 1919, pp. 49–55), and Rev. N. Stam (*The Bahanga*, 1929):
1. **Historical Varieties Recorded in 1902–1929**:
   - **Lu-Wanga / Luhanga (Stam 1929, Hobley 1902, Johnston 1902 *Lurimi* & 1919 *5a. Lu-wanga*)**: Spoken in the Wanga Kingdom (Buhanga) ruled by Nabongo Mumia; uses *okhu-* infinitives and *ekhyi-/evi-* (Class 7/8).
   - **Lu-Nyara (Johnston 1902 & 1919 *5. Lu-nyara*)** & **Lu-Kabarasi (Johnston 1902)**: Spoken in Kakamega/Busia/Lake Victoria north shore.
   - **Ketosh / Lu-Konde / Lu-Masaba (Hobley 1902 & Johnston 1902/1919 *6–6a*)**: The Bukusu–Masaba cluster, characterized by double preprefixes (*omu-ndu*, *ba-ba-ndu* or *aba-ndu*, *khu-* infinitive).
   - **Lulogooli (Maragoli)**: Southern dialect contrasting *v* where central Luhya has *kh* (*makuva* vs. *amakhuwa* 'words').
2. **Cross-Dialect Lexical Correspondences**:
   - **1st Person Singular ("I / me")**: *esie* (Wanga), *eshie* (Kisa), *ise* (Nyole/Bukusu), *inze* (Logoli).
   - **King / Chief**: *omwami (mwami)* / *nabongo* (Stam 1929 & Hobley 1902).
   - **God / Supreme Creator**: *Were* / *Nasayi* (Stam 1929, p. 148).`,
    examples: [
      { luhya: "esie / eshie / ise / inze", english: "I / me (1st person singular)", explanation: "Wanga/Kisa/Bukusu/Logoli pronominal correspondence (Johnston 1902 & 1919)" },
      { luhya: "amakhuwa (Wanga/Kisa) vs. makuva (Logoli)", english: "words / matters", explanation: "Regular kh ~ v consonant correspondence across Luhya dialects" },
      { luhya: "Were ankhonyere • Nasayi akhulinde", english: "May God (Were) help me • May the Creator (Nasayi) guard you", explanation: "Classical Luhanga/Wanga prayer formulas recorded by Rev. N. Stam (1929, p. 151)" }
    ]
  },
  {
    id: "luhya-noun-classes-infinitives",
    title: "Preprefixal Noun Classes (Omu-/Aba-, Ekhyi-/Evi-, Li-/Ama-), Hobley (1902) Verb Paradigms & Stam (1929) Cultural Lexicon",
    summary: "Oluluyia retains Bantu preprefixes (augment vowels o-, a-, e-, i-), forms verbal infinitives with okhu-, and preserves rich ceremonial terminology in Stam (1929) and Hobley (1902, 1903).",
    content: `From C. W. Hobley (*Eastern Uganda*, 1902, pp. 46–47), Sir Harry Johnston (1919, pp. 50–55), and Rev. N. Stam (*The Bahanga*, 1929, pp. 143–179):
1. **Preprefixal Noun Classes (Lu-Wanga / Luhanga)**:
   - **Class 1/2 (*omu- / aba-*)**: *omundu → abandu* (person → people), *omukhasi → abakhasi* (woman → women), *omusatsa → abasatsa* (man → men), *omwana → abana* (child → children), *omwami → abami* (chief/king → chiefs), *omufumo → abafumo* (diviner → diviners, Stam 1929).
   - **Class 3/4 (*omu- / emi-*)**: *omurwe → emirwe* (head → heads), *omukhono → emikhono* (hand/arm → hands), *omusango → emisango* (sacrificial rite → rites, Stam 1929), *omuliro* (fire).
   - **Class 5/6 (*li-, e- / ama-*)**: *liyuba / eliuba* (sun, Stam 1929), *ligina → amagina* (stone → stones, as in *amagina ake misambwa* 'ancestral altar stones', Stam 1929), *likumba → amakumba / evigumba* (bone → bones), *amakhwana* (twins, Stam 1929), *amaatsi* (water), *amalwa* (millet beer, Stam 1929).
   - **Class 7/8 (*eshi-, ekhyi- / ebi-, evi-*)**: *ekhyirindwa* (royal grave shrine, Stam 1929), *ekhyinekha* (clan totem/taboo, Stam 1929; cf. *muziro* in Hobley 1903), *eshifumbi* (stool/chair).
   - **Class 9/10 (*in- / tsin-*)**: *ingombe → tsingombe* (cow → cattle), *imbusi → tsimbusi* (goat → goats), *inkokho → tsinkokho* (chicken → chickens, Stam 1929), *inzu → tsinzu* (house → houses).
   - **Class 12/13 (*kha- / ru-* Diminutives)**: *khatsu khe misango* (little spirit-hut for sacrifices, Stam 1929, p. 149).
2. **Verbal Infinitives (*okhu-*) & Conjugation (Hobley 1902, p. 47 & Stam 1929)**:
   - Infinitives take **okhu-** (*okhw-* before vowels): *okhunywa* (to drink), *okhuliira* (to eat), *okhulola* (to see), *okhumanya* (to know), *okhufwa* (to die, Stam 1929), *okhuyaberwa* (to be buried, Stam 1929), *okhumala omusango* (to perform a sacrifice, Stam 1929), *okhukhua omukhana* (to pay bridewealth/betroth a bride, Stam 1929), *okhukhyebwa* (to be circumcised, Stam 1929).`,
    examples: [
      { luhya: "omundu → abandu • omwami → abami • omufumo → abafumo", english: "person → people • king/chief → kings • diviner → diviners", explanation: "Class 1/2 omu-/aba- nouns (Hobley 1902 & Stam 1929)" },
      { luhya: "amagina ake misambwa • khatsu khe misango • ekhyinekha (muziro)", english: "ancestral sacrifice stones • miniature spirit-hut • clan totem/taboo", explanation: "Luhanga/Wanga ritual & social terminology (Stam 1929 & Hobley 1903)" },
      { luhya: "okhumala omusango • okhukhua omukhana • okhukalusya evigumba", english: "to offer sacrifice • to betroth a bride • to return the bones (memorial rite)", explanation: "Class 15 okhu- verbal phrases in Rev. N. Stam (1929)" }
    ]
  }
];
