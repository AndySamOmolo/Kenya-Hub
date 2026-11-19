// Ilchamus (Njemps / Camus) Grammar Reference Sections
// Comprehensive grammatical overview based on Northern Maa & Lake Baringo linguistics
// Declarative data structure — zero runtime mutations

export interface IlchamusGrammarSection {
  id: string;
  title: string;
  category: 'phonology' | 'morphology' | 'syntax' | 'pronouns' | 'verbs' | 'nouns';
  summary: string;
  content: string;
  examples: Array<{
    ilchamus: string;
    english: string;
    gloss?: string;
  }>;
}

export type GrammarSection = IlchamusGrammarSection;

export const ILCHAMUS_GRAMMAR_SECTIONS: IlchamusGrammarSection[] = [
  {
    id: 'ilchamus-comparative-corpus',
    title: '1. Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Ilchamus / Njemps)',
    category: 'phonology',
    summary: 'Cross-referenced phonological inventory, historical orthography mappings (Farler 1882, Höhnel 1894, Johnston 1902, Dundas 1910, Beech 1911, Heine 1980, Vossen 1982, Payne 2026), and modern open-access corpus alignments.',
    content: `This reference section synthesizes the historical public-domain documentation (Farler 1882, Höhnel 1894, Johnston 1902, Dundas 1910, Beech 1911, Heine 1980, Vossen 1982, and Payne 2026) with contemporary open-access linguistic datasets (CLDF/ASJP, PHOIBLE 2.0, SIL Ilchamus Literacy Lexicon, and Baringo Maa corpora).

### Orthographic & Phonological Correspondences
* **9-Vowel ATR Harmony & Tonal Case**: Ilchamus (**Il-Chamus / En-Jemusi**) is a Northern Maa variety closely related to Samburu (**Sampur**), featuring +ATR / -ATR vowel harmony and tonal case inflection distinguishing nominative subjects from absolutive objects.
* **Gender Prefixes (*l- / n-* and *ol- / en-*)**: In everyday speech, Ilchamus uses the Northern Maa contracted prefixes **l-** (masculine) and **n-** (feminine), while preserving full **ol- / en-** forms in formal and historical citations.
* **Velar & Palatal Nasals (*ṅ / ñ / ng' / ny*)**: Transcribed as *ṅ* or *ñ* in Johnston (1902) and standardized as *ng'* (*ŋ*) and *ny* (*ɲ*) in modern orthography.`,
    examples: [
      {
        ilchamus: 'Onnom artam • Onnom otomoni uni',
        english: 'Ninety (90) • Eighty (80)',
        gloss: 'Verified in Johnston (1902) Njemps / North Maa & Ilchamus Dictionary'
      },
      {
        ilchamus: 'Ol-labanani • Lesuñgu',
        english: 'Diviner / Medicine-man • White man / European',
        gloss: 'Verified in Johnston (1902) Njemps / North Maa & Ilchamus Dictionary'
      },
      {
        ilchamus: 'Eñ getok (pl. En gedūa) • Angoño (pl. Ngoinyek)',
        english: 'Mouth • Eye (pl. eyes)',
        gloss: 'Verified in Johnston (1902) Njemps / North Maa & Ilchamus Dictionary'
      }
    ]
  },
  {
    id: 'ilchamus-payne-2026-middle-verbs',
    title: '2. Maa Alternating Middle Verbs, Media Tantum & Experiential Voice (Payne 2026)',
    category: 'verbs',
    summary: 'Morphosyntax of the Maa middle suffix (-a/-o/-ɔ, pl. -ata/-oto/-ɔtɔ), grooming middles, media tantum experiential verbs, and spontaneous event constructions from Doris L. Payne (2026).',
    content: `Based on Doris L. Payne's (2026) comparative study *"Middle verbs in Maa: Alternating, media tantum, and (spurious) look-alikes"*, Maa (shared across Ilchamus, Samburu, and Southern Maasai) exhibits a rich **Middle Voice** system distinct from the active and antipassive (*-isho / -ɪshɔ*).

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
  * **Grooming Middles**: **a-itukúó** (to bathe oneself), **a-ɪsʊjá** (to wash oneself), **a-ɪsɪkarrá** (to adorn oneself), **a-ishopó** (to dress oneself).
* **Media Tantum Verbs**: Verbs that exist *only* in the middle voice (requiring a causative prefix *ɪta-* to become transitive):
  * **a-mɛrá** (to be intoxicated) → causative *a-ɪtɛ-mɛ́r*.
  * **a-nʊtá** (to be pregnant/gravid) → causative *a-ɪtʊ-nʊ́t*.
  * **a-rriá** (to fall down), **a-isiijó** (to ferment), **a-sɛshá** (to be chronically unwell), **a-ɪgʊtʊmá** (to squat/sit down), **a-gʊrrʊmá** (to vomit).`,
    examples: [
      {
        ilchamus: 'ɛ-duŋ-ó ɔlkɪtɛ́ŋ ŋolé • ɛ-duŋ-óté intaléŋo',
        english: 'The ox was divided into portions yesterday • The ceremonies have ended',
        gloss: 'Singular (-o) vs. plural perfective (-ote) middle suffixes (Payne 2026)'
      },
      {
        ilchamus: 'm-ɛ́-ba-yú ɔlmʊ́rráni te nkeék enyénak',
        english: 'A warrior does not get healed by his own medicines',
        gloss: 'NEG-3-reach-MID.INCH warrior.NOM OBL trees his.PL (Payne 2026)'
      }
    ]
  },
  {
    id: 'ilchamus-dundas-1910-clans-irrigation-calendar',
    title: '3. The 6 Component Tribes, 16 Clans, 10-Month Calendar & Irrigation Ceremonies (Dundas 1910)',
    category: 'nouns',
    summary: 'Complete synthesis of Hon. K. R. Dundas (1910, pp. 49–55) on Ilchamus settlements, 16 clans, 10-month calendar, irrigation furrow rituals, and kudu-horn signals.',
    content: `### 1. The Two Settlements & Six Component Tribes (Dundas 1910, pp. 49–55)
Hon. K. R. Dundas (*JRAI* Vol. 40, 1910, pp. 49–55) documented the Ilchamus (**En-Jemusi**) living in two double-palisaded, thorn-fenced villages along the **Tigrish (Perkerra)** and **Molo** rivers south of Lake Baringo (**Mparingo**):
* **Njemps Liabori ("Down Stream" / Njemps Kubwa)**: Near the mouth of the Tigrish River, alongside the earlier settlement of **Korvan** (settled by sections from **Ol Kokwa** island and the **River Tim**).
* **Njemps Lekepir ("Up Stream" / Njemps Ndogo)**: Located five miles further upstream.

Dundas identified **16 clans distributed across 6 component tribes** that fused to form the Ilchamus community:
1. **Il Keroi** (aboriginal Baringo inhabitants): 6 clans — *Parsaina, Lugoمای (Loiborkishu), Loimisi,chamusi, Saka, Keroi*.
2. **Il Doigio** (Samburu section from Loroghi): 3 clans — *Loimisi, Masula, Parsaina*.
3. **Il Laikipiak** (Northern Maa section): 4 clans — *Loiborkishu, Saka, Mae, Парsaina*.
4. **Ilumbwa** (agriculturalists from beside Kilimanjaro): 1 clan — *Ilumbwa*.
5. **Il Mwesi** (from the Marangishu / Naivasha hills): 1 clan — *Il Mwesi*.
6. **Il Ngwesi** (from the eastern slopes of Mount Kenya): 1 clan — *Il Ngwesi*.

---

### 2. The 10-Month Agricultural & Pastoral Calendar (Dundas 1910, pp. 52–53)
Unlike the 12-month Turkana and Samburu calendars, Dundas recorded a **10-month Ilchamus cycle** divided into **Lare** (7 wet/cultivation months) and **Ngolong** (3 dry/harvest months):
* **Lare (Wet Season — 7 Months)**:
  1. **Oäni-oingok** ("When the bulls have to be tied up")
  2. **Borgola** (Month of marriage ceremonies)
  3. **Loo-'n Gokwa** ("Seven stars" — appearance of the Pleiades)
  4. **Lorigine**
  5. **Lakodakol**
  6. **Lekepirn**
  7. **Lolrochorot**
* **Ngolong (Dry Season — 3 Months)**:
  8. **Gulua**
  9. **Rialbala**
  10. **Arat**

---

### 3. Irrigation Furrow & Harvest Ceremonies (Dundas 1910, pp. 53–54)
* **Opening the Main Furrow**: At the start of the planting season, elders sacrifice a **black sheep** at the intake weir of the **Guaso Tigerish (Perkerra)** river, sprinkling the sheep's melted tail-fat, honey beer, and stomach contents (*ngik*) into the main canal before opening the sluices.
* **Crop-Ripening & Harvest Rules**: Once the finger millet and sorghum head out, **no kudu horn (*emowuo*) may be blown, no blacksmith may hammer iron, and no war-cry may be raised** near the fields lest the grain be blighted.`,
    examples: [
      {
        ilchamus: 'Njemps Liabori • Njemps Lekepir • Korvan (Ol Kokwa & Tim)',
        english: 'Down-stream village • Up-stream village • Island & River Tim settlement',
        gloss: 'Three historical Ilchamus settlements (Dundas 1910, pp. 49–51)'
      },
      {
        ilchamus: "Lare: Oäni-oingok, Borgola, Loo-'n Gokwa, Lorigine, Lakodakol, Lekepirn, Lolrochorot",
        english: 'The 7 wet-season months of the Ilchamus calendar',
        gloss: 'Dundas (1910, p. 53) wet season cycle'
      },
      {
        ilchamus: 'Ngolong: Gulua, Rialbala, Arat',
        english: 'The 3 dry-season months of the Ilchamus calendar',
        gloss: 'Dundas (1910, p. 53) dry season cycle'
      }
    ]
  },
  {
    id: 'ilchamus-hohnel-1894-farler-1882-baringo',
    title: '4. Lake Baringo Caravan History, Guaso Tigerish Irrigation & Island Refuge (Farler 1882 & Höhnel 1894)',
    category: 'syntax',
    summary: 'Complete primary-source documentation from Ven. J. P. Farler (1882) and Lieut. Ludwig von Höhnel (1894, Vol. I, Ch. VI, pp. 381–393; Vol. II, pp. 1–10) on the Ilchamus irrigation dam, crops, Ol Kokwa boatmen, and vocabulary.',
    content: `### 1. Ven. J. P. Farler (1882, pp. 733–736): Early Baringo Trade Routes
Archdeacon J. P. Farler (*Proceedings of the Royal Geographical Society*, Vol. 4, No. 12, Dec. 1882) recorded the Pangani–Taita–Naivasha–Nakuru–**Njemps** caravan route, noting the peaceful **Wa-kwavi of Njemps** living inside doubly stockaded villages along the **Guaso Tigerish** stream just south of Lake Baringo.

---

### 2. Lieut. Ludwig von Höhnel (1894, Vol. I, Ch. VI, pp. 381–393): The Guaso Tigerish Dam & Irrigation System
During the Teleki–Höhnel expedition's stay at Njemps (February & July–August 1888), Lieut. Ludwig von Höhnel documented the engineering and linguistic details of the Ilchamus community:
* **The Guaso Tigerish Timber-Pile, Brushwood & Boulder Dam (p. 383)**: One mile above Njemps, the Ilchamus constructed a massive weir across the **Guaso Tigerish (Perkerra)** by driving stout timber piles across the riverbed, weaving brushwood between them, and banking heavy boulders and river clay against the frame. From this reservoir, two main canals branched into a dense checkerboard of smaller ditches (**l-baa**) divided into square plots (**oboro**) that could be flooded or closed off with a single spadeful of earth.
* **Cultivated Crops & Granaries (*Lkadich*, pp. 383–385)**: The irrigated fields (**nkurma**) yielded two harvests a year of **mtama (Durrha / sorghum)**, **eleusine (wimbi / finger millet)**, and **two varieties of gourds/pumpkins** (*nkokorri*). The grain was stored in tall, cylindrical wickerwork granaries (**lkadich**) raised on wooden posts and roofed with grass thatch outside the thorn palisades (**o-sanzu**) because honesty within the community was absolute.
* **Ol Kokwa Island Boatmen & Leikipia Refugees (pp. 385, 391)**: On the volcanic island of **Ol Kokwa** in the middle of **Lake Baringo (Mparingo)** lived a section of Ilchamus who paddled lightweight ambatch-wood canoes (**l-kadich / emboyuwet**) and maintained hot-spring lookouts, where survivors of the **Il-Leikipiak** wars had also found sanctuary.`,
    examples: [
      {
        ilchamus: 'Guaso Tigerish (Perkerra) • Guaso Nyiro • Mparingo (Lake Baringo)',
        english: 'Perkerra River • Ewaso Ng\'iro River • Lake Baringo',
        gloss: 'Hydrological geography of the Baringo basin (Höhnel 1894, Vol. I, pp. 381–385)'
      },
      {
        ilchamus: 'oboro (irrigated plot) • lkadich (raised wicker granary) • o-sanzu (double thorn palisade)',
        english: 'Square irrigated garden plot • Raised cylindrical granary • Village palisade',
        gloss: 'Ilchamus agricultural and defensive architecture (Höhnel 1894, pp. 382–385)'
      },
      {
        ilchamus: 'Ol Kokwa • Korvan • Il Leikipiak',
        english: 'Ol Kokwa Island in Lake Baringo • Korvan settlement • Laikipiak Maa refugees',
        gloss: 'Island and mainland Baringo sanctuary settlements (Höhnel 1894 & Dundas 1910)'
      }
    ]
  }
];
