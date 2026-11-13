import type { GrammarSection } from "../types";

// ============================================================
// Pokomo (Kipfokomo) Grammar Reference Sections
// Declarative modular grammar reference (audit-ready, zero runtime mutations)
// ============================================================

export const POKOMO_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    "id": "pokomo-sabaki-grammar",
    "title": "Sabaki Phonology (Kipfokomo pf/bf, *t > h), Noun Classes & Numerals (Krapf 1850 & Johnston 1919 #13 Pωkωmω)",
    "summary": "Kipfokomo is a core member of the Sabaki Bantu subgroup alongside Swahili and Mijikenda, preserving Sabaki lenition (*moto > moho, *mto > muho, *-tatu > -hahu) and 15+ noun classes.",
    "content": "Documented by Rev. Dr. J. L. Krapf (*Vocabulary of Six East-African Languages*, 1850) and Sir Harry H. Johnston (*Comparative Study of the Bantu Languages*, 1919, #13 Pωkωmω, Vol. I, pp. 98–112 & Vol. II, pp. 31–32):\n- **Sabaki Sound Correspondences**: Proto-Bantu *t lenites to *h* (*moho* 'fire', *muho* 'river', *tahu* 'three', *handahu* 'six', *fungahe* 'seven'), while Class 5 uses *dzi- / i-* (*dziwe → mawe* 'stone', *dzua* 'sun', *madzi* 'water').\n- **Noun Classes**: Class 1/2 *munt'u → want'u* (person → people), Class 3/4 *muhi → mihi* (tree → trees), *mudzi → midzi* (village → villages).",
    "examples": [
      {
        "pokomo": "moho • muho • madzi • dziwe (pl. mawe)",
        "english": "fire • river • water • stone",
        "explanation": "Sabaki sound laws in Krapf (1850) & Johnston (1919, Vol. I, pp. 98–112 #13 Pωkωmω)"
      },
      {
        "pokomo": "imwe, mbiri, tahu, nne, tsano, handahu, fungahe, nane, kenda, kumi",
        "english": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
        "explanation": "Kipfokomo numerals (Johnston 1919, Vol. I, p. 107 #13 Pωkωmω)"
      }
    ]
  },
  {
    "id": "pokomo-public-domain-dataset-synthesis",
    "title": "Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Pokomo (Kipfokomo))",
    "summary": "Synthesizes phonological correspondences, morphological patterns, and lexical roots across the newly integrated public-domain monographs and open-web datasets for Pokomo (Kipfokomo).",
    "content": "1. **Archival & Open-Dataset Integration for Pokomo (Kipfokomo)**:\n   - Combines primary historical documentation (Johnston 1902/1919, Hobley 1902/1910/1922, Krapf 1842/1850/1882/1887, Hollis 1905/1909/1910, Beech 1911, Barton 1921, Lindblom 1920, Wray 1894, Kirk 1905, Tutschek 1844–1845) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).\n2. **Phonetic & Orthographic Normalization**:\n   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *ω, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    "examples": [
      {
        "pokomo": "kái • kifia",
        "english": "Old • New",
        "explanation": "Krapf (1850) Vocabulary of Six East-African Languages (Kipokómo adj.)"
      },
      {
        "pokomo": "-tsēkā • -mānyā",
        "english": "To laugh • To know",
        "explanation": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #13: Ki-Pokomo)"
      }
    ]
  },
  {
    "id": "pokomo-samson-1944-werner-1915-1933",
    "title": "The 13 Pokomo Sub-Tribes (Vyeti), Shungwaya & SangoVere Origins, Wakijo/Ngadzi Orders & Liongo Traditions (Mikael Samson 1944 & Werner 1915, 1933)",
    "summary": "Mikael Samson's indigenous Kipokomo history (translated by R. G. Darroch, JRAI 1944) and Prof. Alice Werner (1915, 1933) record the 13 Tana River Pokomo vyeti, the Wakijo council grades, the sacred ngadzi friction-drum, and the Pokomo oral traditions of Liongo Fumo.",
    "content": "From Mikael Samson & R. G. Darroch (*\"Some Notes on the Early History of the Tribes Living on the Lower Tana, Engaged by Mikael Samson and Others\"*, JRAI Vol. 73, 1944, pp. 119–149) and Prof. Alice Werner (*\"The Bantu Coast Tribes of the East Africa Protectorate\"*, JRAI Vol. 45, 1915, pp. 326–354 & *Myths and Legends of the Bantu*, 1933, Ch. X):\n1. **The 13 Pokomo Sub-Tribes (*Vyeti*) along the Tana River (*Muho wa Tsana*, Samson 1944 & Werner 1915)**:\n   - **Upper Pokomo (8 Vyeti)**: *Korokoro, Malankote, Malalulu, Zubaki, Ndura, Kinakomba, Gwano, Ndera*.\n   - **Lower Pokomo (5 Vyeti)**: *Mwina, Ngatana, Dzunza, Buu, Kalindi*.\n   - Mikael Samson (1944) preserves the indigenous history of the *Buu* clan descending from the founding ancestor **SangoVere** at **Shungwaya** and the formation of the *vyeti* alliances along the flood-plain bends (*maro*) of the Tana River.\n2. **Age-Sets (*Luva*), Council Orders (*Wakijo*), Healers (*Wagangana*) & the Sacred *Ngadzi* Drum (Werner 1915 & Samson 1944)**:\n   - Boys enter the *nyere* youth grade and advance through the **luva** age-sets into the **kijo** (*wakijo* elders' council), whose highest initiates guard the sacred friction-drum **ngadzi** inside the forest lodge alongside the **mugangana** (pl. *wagangana*) ritual healing order.\n3. **Pokomo Traditions of Liongo Fumo (*Muntu Muyeya*, Werner 1933, Ch. X)**:\n   - In Pokomo oral tradition recorded by Werner (1915, 1933), the hero **Liongo Fumo** of Shaka (near Kipini) was a giant (*muntu muyeya* 'tall man') who walked from Shaka to Gana (Chara) and back in a single day and imposed the *kikoa* tribute of *makoma* (doum-palm nuts) on the Wasanye and Wadahalo before shooting down the palm nuts with his bow.",
    "examples": [
      {
        "pokomo": "SangoVere • Shungwaya • Vyeti (Buu, Kalindi, Dzunza, Ngatana, Mwina, Ndera, Gwano, Kinakomba, Ndura, Zubaki)",
        "english": "Founding ancestor of the Buu • Ancestral homeland • Pokomo riverine sub-tribes",
        "explanation": "Mikael Samson & R. G. Darroch (1944, JRAI Vol. 73, pp. 119–149)"
      },
      {
        "pokomo": "Wakijo • Ngadzi • Mugangana (pl. Wagangana) • Luva • Muntu muyeya",
        "english": "Council elders • Sacred friction-drum • Traditional healer-priest • Age-set • Tall man (epithet of Liongo Fumo)",
        "explanation": "Prof. Alice Werner (1915, pp. 336–350 & 1933, Ch. X)"
      }
    ]
  },
  {
    "id": "pokomo-johnston-1919-1922-group-c-13",
    "title": "Sir Harry H. Johnston (1919–1922) Group C #13 Pωkωmω (Pfωkωmω): Erratum p. x (-kuni, -khuni), Bilabial Affricates (pf/bf), 16-Class Prefix/Concord Table (p. 111), Noteworthy Roots (Vol. II, pp. 31–32) & Bibliography (p. 788)",
    "summary": "Complete line-by-line documentation of Group C #13 Pωkωmω (Pfωkωmω) in Sir Harry H. Johnston's Comparative Study of the Bantu and Semi-Bantu Languages (Vol. I [1919], pp. x, 98–112, 788 & Vol. II [1922], pp. 31–32, 226, 261).",
    "content": "From Sir Harry H. Johnston (*A Comparative Study of the Bantu and Semi-Bantu Languages*, Vol. I [1919], pp. x, 98–112, 788 & Vol. II [1922], pp. 31–32, 226, 261):\n1. **Erratum (Vol. I, p. x), Phonology & Complete 16-Class Prefix/Concord Table (Vol. I, p. 111 & Vol. II, pp. 31–32, 226, 261)**:\n   - **Erratum (Vol. I, p. x)**: On p. 106 col. 13 (**Pωkωmω**), 'Wood (firewood)' is corrected from *-kumi, -khumi* to **-kuni, -khuni** (*Lu-kuni / N-khuni*).\n   - **Phonological Character**: Retains Sabaki **t > h** (*M-ωhω* 'fire', *Mū-hω* 'river', *Mū-hi* 'tree', *-hahu* 'three', *-handahu* 'six', *Fuṅgahe* 'seven'), develops labiodental/bilabial affricates **pf / bf** (*Ki-pfωkωmω, Bfūya* 'rain'), and shifts intervocalic *l* to **y** (*Bfūya* 'rain', *N-dzaa / N-dzaya* 'hunger', *-yala* 'sleep', *-kaya* 'sit/remain').\n   - **Complete 16-Class Prefix & Concord Table (Vol. I, p. 111)**:\n     - **Class 1**: **Mu-, M-** (*yu-, u-, a-, wa-*) • **Class 2**: **Wa-** (*wa-*)\n     - **Class 3**: **Mu-, M-** (*u-*) • **Class 4**: **Mi-** (*i-, mi-*)\n     - **Class 5**: **Dzi-, I-, Ø-** (*li-, dzi-*) • **Class 6**: **Ma-** (*ga-, ma-*)\n     - **Class 7**: **Ki-, C'-** (*ki-, c'-*) • **Class 8**: **Vi-, Vy-** (*vi-, vy-*)\n     - **Class 9**: **N- (Ny-, M-)** (*i-, y'-*) • **Class 10**: **N- (Ny-, M-)** (*zi-, z'-*)\n     - **Class 11**: **Lu-, U-** (*lu-*)\n     - **Class 12**: **Tu-** (plural of Class 13; *tu-*) • **Class 13**: **Ka-** (diminutive singular; *ka-*)\n     - **Class 14**: **U-** (*u-*) • **Class 15**: **Ku-** (*ku-*) • **Class 16**: **Va-, Ha-** (*va-, ha-*).\n2. **Noteworthy Roots in #13 Pωkωmω (Vol. I, pp. 98–110 & Vol. II, pp. 31–32)**:\n   - **Kinship, Body & Nature**: **Mu-ntu ; wa-ntu** (person), **Baba, Ise** (father), **Mama, Nina** (mother), **Mu-yūme ; wa-** (husband/man), **Mu-ke ; wa-ke** (wife/woman), **Ki-tswa ; vi-** (head), **Dz-itsω ; ma-tsω** (eye), **Kū-tū ; ma-tū** (ear), **Dz-inω ; m-enω** (tooth), **Lu-limi ; n-dimi** (tongue), **Mū-kωnω ; mi-** (arm), **Kū-gūū ; ma-** (leg), **Mū-dzi ; mi-dzi** (town/village), **W-ahω ; m-ahω** (dugout canoe), **N-gωma** (drum), **Mū-yūṅgu** (God), **Dz-ūa** (sun), **M-wezi** (moon), **Ny-ωta** (star), **Bfūya / M-vūya** (rain), **Ma-dzi** (water), **M-ωhω** (fire), **Dz-iwe ; ma-we** (stone), **N-dzωvu** (elephant), **M-bωgω** (buffalo), **Simba** (lion), **Tšūi** (leopard), **N-gūū** (hippo), **N-gwena** (crocodile), **N-swi** (fish).\n3. **Bibliography for #13 Pωkωmω (Vol. I, p. 788)**:\n   - Cites J. L. Krapf (*Vocabulary of Six East-African Languages*, 1850 — *Kipokomo*), missionary Ferdinand Würtz (*Wörterbuch des Ki-Tikuu und des Ki-Pokomo*, 1895 & *Grammatik des Pokomo*, 1896), and the Neukirchen Mission *Kipokomo New Testament* and *Book of Psalms*.",
    "examples": [
      {
        "pokomo": "-kuni, -khuni (Lu-kuni / N-khuni, firewood, Erratum p. x) • Bfūya / M-vūya (rain) • Mu-yūme (man) • Mū-yūṅgu (God)",
        "english": "Erratum p. x correction & characteristic Kipfokomo roots (*l > y, *v > bf)",
        "explanation": "Johnston (1919, Vol. I, pp. x, 98–106 & 1922, Vol. II, pp. 31–32)"
      },
      {
        "pokomo": "Cl. 1/2 Mu-/Wa- • Cl. 5/6 Dzi-/Ma- (li-/ga-) • Cl. 7/8 Ki-/Vi- • Cl. 11/10 Lu-/N- • Cl. 13/12 Ka-/Tu-",
        "english": "Complete Kipfokomo noun-class prefix and concord table",
        "explanation": "Johnston (1919, Vol. I, p. 111 #13 Pωkωmω)"
      },
      {
        "pokomo": "Imi (Mimi), Wewe, Yeye, Swiswi, Nyiwi, Waω • -aṅgu, -akω, -akwe, -etu, -enyu, -aω",
        "english": "Personal and possessive pronouns in #13 Pωkωmω",
        "explanation": "Johnston (1919, Vol. I, p. 108 #13 Pωkωmω)"
      }
    ]
  }
];
