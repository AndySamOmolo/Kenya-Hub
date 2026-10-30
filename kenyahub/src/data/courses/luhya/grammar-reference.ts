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
    content: `As documented in C. W. Hobley (*Eastern Uganda*, 1902, pp. 43–51, 61–88, 92–95), Sir Harry H. Johnston (*The Uganda Protectorate*, 1902, pp. 902–929 & *Comparative Study of the Bantu Languages*, 1919, Vol. I, pp. 7, 19, 73–85, 757 & Vol. II, pp. 22–24, 225), and Rev. N. Stam (*The Bahanga*, 1929):
1. **Historical Varieties Recorded in 1902–1929**:
   - **Lu-Wanga / Luhanga (Stam 1929, Hobley 1902, Johnston 1902 *Lurimi* & 1919 *5a. Lu-wanga*)**: Spoken in the Wanga Kingdom (Buhanga) ruled by Nabongo Mumia; uses *okhu-* infinitives and *ekhyi-/evi-* (Class 7/8).
   - **Lu-Nyara (Johnston 1902 & 1919 *5. Lu-nyara*)** & **Lu-Kabarasi (Johnston 1902)**: Spoken in Kakamega/Busia/Lake Victoria north shore.
   - **Ketosh / Lu-Konde / Lu-Masaba (Hobley 1902 & Johnston 1902/1919 *6–6a*)**: The Bukusu–Masaba cluster, characterized by double preprefixes (*omu-ndu*, *ba-ba-ndu* or *aba-ndu*, *khu-* infinitive).
   - **Lulogooli (Maragoli)**: Southern dialect contrasting *v* where central Luhya has *kh* (*makuva* vs. *amakhuwa* 'words').
2. **Cross-Dialect Lexical Correspondences**:
   - **1st Person Singular ("I / me")**: *esie* (Wanga), *eshie* (Kisa), *ise* (Nyole/Bukusu), *inze* (Logoli).
   - **King / Chief**: *omwami (mwami)* / *nabongo* (Stam 1929 & Hobley 1902).
   - **God / Supreme Creator**: *Were* / *Nasayi* (Stam 1929, pp. 154, 159–160; Nasayi = 'the one adored' < sayo 'to adore').`,
    examples: [
      { luhya: "esie / eshie / ise / inze", english: "I / me (1st person singular)", explanation: "Wanga/Kisa/Bukusu/Logoli pronominal correspondence (Johnston 1902 & 1919)" },
      { luhya: "amakhuwa (Wanga/Kisa) vs. makuva (Logoli)", english: "words / matters", explanation: "Regular kh ~ v consonant correspondence across Luhya dialects" },
      { luhya: "Were ankhonyere • Nasayi akhulinde", english: "May God (Were) help me • May the Creator (Nasayi) guard you", explanation: "Classical Luhanga/Wanga prayer formulas recorded by Rev. N. Stam (1929, p. 160)" }
    ]
  },
  {
    id: "luhya-noun-classes-infinitives",
    title: "Preprefixal Noun Classes (Omu-/Aba-, Ekhyi-/Evi-, Li-/Ama-), Hobley (1902) Verb Paradigms & Stam (1929) Cultural Lexicon",
    summary: "Oluluyia retains Bantu preprefixes (augment vowels o-, a-, e-, i-), forms verbal infinitives with okhu-, and preserves rich ceremonial terminology in Stam (1929) and Hobley (1902, 1903).",
    content: `From C. W. Hobley (*Eastern Uganda*, 1902, pp. 84–86), Sir Harry Johnston (1919, Vol. I, pp. 73–85 & Vol. II, pp. 22–24, 225), and Rev. N. Stam (*The Bahanga*, 1929, pp. 143–179):
1. **Preprefixal Noun Classes (Lu-Wanga / Luhanga)**:
   - **Class 1/2 (*omu- / aba-*)**: *omundu → abandu* (person → people), *omukhasi → abakhasi* (woman → women), *omusatsa → abasatsa* (man → men), *omwana → abana* (child → children), *omwami → abami* (chief/king → chiefs), *omufumo → abafumo* (diviner → diviners, Stam 1929).
   - **Class 3/4 (*omu- / emi-*)**: *omurwe → emirwe* (head → heads), *omukhono → emikhono* (hand/arm → hands), *omusango → emisango* (sacrificial rite → rites, Stam 1929), *omuliro* (fire).
   - **Class 5/6 (*li-, e- / ama-*)**: *liyuba / eliuba* (sun, Stam 1929), *ligina → amagina* (stone → stones, as in *amagina ake misambwa* 'ancestral altar stones', Stam 1929), *likumba → amakumba / evigumba* (bone → bones), *amakhwana* (twins, Stam 1929), *amaatsi* (water), *amalwa* (millet beer, Stam 1929).
   - **Class 7/8 (*eshi-, ekhyi- / ebi-, evi-*)**: *ekhyirindwa* (grave, Stam 1929 pp. 149–151), *ekhyinekha* (person's soul or shadow, Stam 1929 p. 162; pl. *vikhyeno* 'departed spirits/devils' p. 160), *ekhyilulu* (judicial ordeal, Stam 1929 p. 168), *musiro* (clan totem/taboo 'the thing abstained from', Stam 1929 p. 176; cf. *muziro* in Hobley 1903), *eshifumbi* (stool/chair).
   - **Class 9/10 (*in- / tsin-*)**: *ingombe → tsingombe* (cow → cattle), *imbusi → tsimbusi* (goat → goats), *inkokho → tsinkokho* (chicken → chickens, Stam 1929), *inzu → tsinzu* (house → houses).
   - **Class 12/13 (*kha- / ru-* Diminutives)**: *khatsu khe misango* (little spirit-hut for sacrifices, Stam 1929, p. 154); **Class 11 (*lu-*) & Reversive Suffix (*-ula*)**: *lusambwa / lusiola* (sacred *Markhamia platycalyx* altar pole from the *khyembekho* family grove, from obsolete *samba* 'to build/erect' → reversive **sambula** 'to break down', changing final *-a* into *-ula*, Stam 1929 pp. 152–153).
2. **Verbal Infinitives (*okhu-*) & Conjugation (Hobley 1902, p. 85 & Stam 1929)**:
   - Infinitives take **okhu-** (*okhw-* before vowels): *okhunywa* (to drink), *okhuliira* (to eat), *okhulola* (to see), *okhumanya* (to know), *okhufwa* (to die, Stam 1929), *okhuyaberwa* (to be buried, Stam 1929), *okhumala omusango* (to perform a sacrifice, Stam 1929), *okhutekherana* (to marry, lit. 'to boil for one another', Stam 1929 p. 173), *okhukhua omukhana* (to pay bridewealth/betroth a bride, p. 174), *okhusira imbusi* (to jump over the marriage goat, p. 175), *okhukhyebwa* (to be circumcised, p. 178).`,
    examples: [
      { luhya: "omundu → abandu • omwami → abami • omufumo → abafumo", english: "person → people • king/chief → kings • diviner → diviners", explanation: "Class 1/2 omu-/aba- nouns (Hobley 1902 & Stam 1929)" },
      { luhya: "amagina ake misambwa • khatsu khe misango • ekhyinekha (soul/shadow) • musiro (totem)", english: "ancestral sacrifice stones • miniature spirit-hut • soul/shadow • clan totem/taboo", explanation: "Luhanga/Wanga ritual & social terminology (Stam 1929, pp. 152–154, 162, 176 & Hobley 1903)" },
      { luhya: "okhumala omusango • okhukhua omukhana • okhukalusya evigumba", english: "to offer sacrifice • to betroth a bride • to return the bones (memorial rite)", explanation: "Class 15 okhu- verbal phrases in Rev. N. Stam (1929)" }
    ]
   },
  {
    id: "luhya-johnston-1919-archaic-preprefixes",
    title: "Archaic Disyllabic Preprefixes (Kumu-/Gumu-, Kimi-/Gimi-, Kama-/Gama-, Gugu-), -bωine Preterite & Affirmative -isi/-si Copula (Johnston 1919–1922)",
    summary: "Sir Harry Johnston (1919, Vol. I, pp. 7, 19, 73–85 & 1922, Vol. II, pp. 22–24, 225) demonstrated from #6 Lu-masaba and #6a Lu-konde how Bantu preprefixes and concords originated, alongside unique Sub-group A 5 verbal features.",
    content: `In *A Comparative Study of the Bantu and Semi-Bantu Languages* (Vol. I, 1919, pp. 7, 19, 73–85, 757; Vol. II, 1922, pp. 22–24, 225), Sir Harry H. Johnston analyses Sub-group A 5 (**#5 Lu-nyara, #5a Lu-waṅga / Lu-haṅga / Lu-kabarasi / Lu-rimi, #5b Lu-siṅga, #6 Lu-masaba / 'Ketosh', #6a Lu-konde / 'Muhasa'**):
1. **Solution of the Bantu Preprefix Enigma via West Elgon (#6 Lu-masaba & #6a Lu-konde, Vol. I, pp. 7, 19, 85; Vol. II, pp. 22, 225)**:
   - Preserves full disyllabic preprefix + prefix combinations explaining why Classes 1, 3, 4, and 6 have *gu-, gi-, ga-* concords:
   - **Class 1**: *Ωmu- / Umu- / Namu-* (concord *umu-, u-, yω-*); **Class 2**: **Baba- / Bana-** (*ba-*, e.g. *baba-ndu* 'people', *bab-ana* 'children'; superimposed honorific **Na- / pl. Bana-**).
   - **Class 3**: **Kumu- / Gumu-** (*kumu-/gumu-, ku-/gu-*, e.g. *kumu-kωnω* 'arm', *kumu-rirω* 'fire', *gumu-ti* 'tree').
   - **Class 4**: **Kimi- / Gimi-** (*kimi-/gimi-, ki-/gi-*, e.g. *kimi-ti* 'trees').
   - **Class 5**: *Li-, Ri-* (Errata p. x), *Di-, Iri-* (*li-, ri-*).
   - **Class 6**: **Kama- / Gama-** (*kama-/gama-, ka-/ga-*, e.g. *kama-lasiri* 'blood', *kama-futa* 'oil', *gama-tu* 'ears').
   - **Classes 7, 8, 11, 14, 15, 18**: **Kiki-** (*kiki-ndu* 'thing'), **Bibi-** (*bibi-ndu* 'things'), **Lulu-** (*lulu-tsi* 'door', *lulu-imbω* 'song'), **Bubu-** (*bubu-iṅgω* 'bow', *bubu-nyasi* 'grass'), **Kuku-** (*kuku-tu* 'ear'), and **Class 18 Augmentative Gugu-** (*Gu-bwa / Gugu-bwa* 'great dog', pl. *Gimi-*).
2. **Preterite in *-ire / -ine*, Affirmative *-isi / -si* Copula & Negation (Vol. II, p. 24 & Vol. I, p. 757)**:
   - **Preterite *-ire* & *-ine***: In *5–5a*, *-ine* fuses with *-bωna* ('to see') to form **-bωine** ('saw', from *-bωnine*).
   - **Affirmative *-isi / -si* ('is / was')**: Alongside *Ni-, -li, -ba, -liṅgye*, and *-du / -ru / -lu*, Sub-group A 5 uses **-isi / -si** *affirmatively* to mean 'is, was' (confirming Bleek's hypothesis on the *-ise* preterite).
   - **Negation**: In *5–5b*, prefix **Si-** (*Si-, Sω-, Sa-, Siku-, Simu-, Siba-*) and suffixes **-ta, -tawe, -ṅga, -kata** ('neither'), plus negative verbs **-bula** ('to be lacking') and **Ωxu-buta** ('to be without', Vol. I, p. 757 Addenda). In *6–6a*, prefix **Hi- / Ha-**, infix **-k'- / -ka-**, and negative infinitive prefix **Bu-**.`,
    examples: [
      { luhya: "Kumu-kωnω (Gumu-χωnω) → Kimi-kωnω (Gama-χωnω) • Baba-ndu • Kama-lasiri • Gugu-bwa", english: "arm → arms • people • blood • big dog (Class 18 augmentative)", explanation: "Full disyllabic preprefixes in #6 Lu-masaba & #6a Lu-konde (Johnston 1919, Vol. I, p. 85 & Vol. II, p. 22)" },
      { luhya: "-bωna → -bωine • -isi / -si (affirmative) • Si-...-tawe / Ωxu-buta", english: "to see → saw • is/was • not / to be without", explanation: "Inflexional preterite -ine, affirmative -si copula & negation (Johnston 1922, Vol. II, p. 24)" },
      { luhya: "sasaba / sesaba (6), n-safu / mu-safu (7), kumu-rundu (10), li-tondω / li-kana (100), si-zumi (1,000)", english: "6, 7, 10, 100, 1,000", explanation: "Distinctive Sub-group A 5 numerals (Johnston 1919, Vol. I, p. 81 & Vol. II, p. 23)" }
    ]
  },
  {
    "id": "luhya-public-domain-dataset-synthesis",
    "title": "Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Luhya (Luyia))",
    "summary": "Synthesizes phonological correspondences, morphological patterns, and lexical roots across the newly integrated public-domain monographs and open-web datasets for Luhya (Luyia).",
    "content": "1. **Archival & Open-Dataset Integration for Luhya (Luyia)**:\n   - Combines primary historical documentation (Johnston 1902/1919, Hobley 1902/1910/1922, Krapf 1842/1850/1882/1887, Hollis 1905/1909/1910, Beech 1911, Barton 1921, Lindblom 1920, Wray 1894, Kirk 1905, Tutschek 1844–1845) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).\n2. **Phonetic & Orthographic Normalization**:\n   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *ω, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    "examples": [
      {
        "luhya": "wañge = my • Ndzidza",
        "english": "(my) • I come",
        "explanation": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukonde / Masaba)"
      },
      {
        "luhya": "Ndu • Tawi",
        "english": "I am • No, not",
        "explanation": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
      }
    ]
  }
];
