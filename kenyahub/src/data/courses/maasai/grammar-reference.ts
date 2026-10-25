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
    title: "Nine-Vowel ATR Harmony, Consonant Mutations & Grammatical Tone in ɔl Maa (Hollis 1905, Hinde 1901 & Vossen 1982)",
    summary: "Maa contrasts +ATR (/i, e, o, u/) and -ATR (/ɪ, ɛ, ʊ, ɔ/) vowel sets with neutral /a/, regular consonant mutations after the feminine nasal article (pp. 2–7), and tonal case/aspect inflection in VSO word order (pp. 7–9).",
    content: `As documented in A. C. Hollis (*The Masai: Their Language and Folklore*, 1905, pp. 1–102), Hildegarde Hinde (*The Masai Language*, 1901, pp. v–ix, 1–43), and Nilotic linguistics:
1. **Advanced Tongue Root (ATR) Vowel Harmony & Consonant Mutations (Hollis 1905, pp. 1–7)**:
   - Maa has nine vowel phonemes divided into two harmonic sets plus neutral **/a/**:
   - **+ATR Set (/i, e, o, u/)**: e.g., **ébúl** (S/he will pierce it), **ol-mosorrî** (egg), **en-kitojó** (rabbit/hare), **atumokî** (to have a good opportunity).
   - **-ATR Set (/ɪ ⟨ɨ⟩, ɛ, ʊ ⟨ʉ⟩, ɔ/)**: e.g., **ɛ́bʉ́l** (S/he will prosper), **ɛn-kʉ́tʉ́k** (mouth), **kɨʉ́tɨshɔ** (index finger), **atʉmʉ́k** (to brew).
   - **Consonant Mutations after the Feminine Nasal Article (*en- / em- / eng-*, Hollis 1905, pp. 2–7)**:
     - **k → g**: *ol-kimojino* (finger) vs. *en-gimojino* (little finger/toe); *il-keek* (trees) vs. *en-geju* (leg); *a-kur* (to dig) → *ol-kurto* (caterpillar).
     - **p → b**: *ol-purkel* (steppe/dry country) vs. *em-burkel* (small steppe); *il-papit* (hairs) vs. *em-barta* (horse).
     - **t → d**: *ol-tungani* (man/person) vs. *en-dungani* (little man); *il-tuleta* (gourds) vs. *en-dulet* (small gourd).
     - **ch / sh → j**: *ol-chani* (tree) vs. *en-jani* (small tree/medicine); *ol-chorro* (spring) vs. *en-jorro* (small spring).
     - **s → j** (optionally after *n*): *o-soit* (stone) vs. *en-joit / e-soit* (small stone).
2. **Tonal Case & Voice Inflection in VSO Word Order (Hollis 1905, pp. 7–9)**:
   - Word order is predominantly **Verb–Subject–Object (VSO)**, and tone patterns alone distinguish Nominative (subject) from Accusative (object) case as well as active vs. middle voice:
   - In Hollis (1905, p. 8), the tone rises on the subject (Nominative) and stays low/normal on the object (Accusative): **Edol ol-túngani en-gíteng** ("The man sees the cow") vs. **Edol ol-tungani en-giténg** ("The cow sees the man").
   - **ɛ́yɛ́tá ɛmʊtí** = "She removed (meat) from the pot" (active perfective; *ɛmʊtí* in Low-High accusative tone) vs. **ɛyɛ́ta ɛmʊ́ti** = "The pot is de-meated" (imperfective middle; *ɛmʊ́ti* in High-Low nominative tone).`,
    examples: [
      { maasai: "ébúl (+ATR) vs. ɛ́bʉ́l (-ATR)", english: "S/he will pierce it vs. S/he will prosper", explanation: "Minimal pair contrasting +ATR /u/ and -ATR /ʊ/" },
      { maasai: "ol-chani → en-jani • ol-kimojino → en-gimojino • ol-tungani → en-dungani", english: "tree → small tree • finger → little finger • man → little man", explanation: "Consonant voicing (ch→j, k→g, t→d, p→b) after the feminine diminutive article en- (Hollis 1905, pp. 3–10)" },
      { maasai: "Edol ol-túngani en-gíteng vs. Edol ol-tungani en-giténg", english: "The man sees the cow vs. The cow sees the man", explanation: "Grammatical tone distinguishing Subject (Nominative) from Object (Accusative) in VSO syntax (Hollis 1905, p. 8)" }
    ]
  },
  {
    id: "maasai-noun-genders-numerals-folklore",
    title: "Three Gender Articles (Ol-, En-, E-), Six Noun Plural Classes, Two Verb Classes, 9 Derivative Stems & Oral Literature (Hollis 1905 & Hinde 1901)",
    summary: "Maa prefixes mark Masculine/Augmentative (ol-/il-), Feminine/Diminutive (en-/in-), and Place (e-), with 6 Noun Declension Classes (pp. 18–34), Gendered Numerals & Finger Signs (pp. 39–41), and 9 Verb Derivative Stems (pp. 71–87).",
    content: `From A. C. Hollis (1905, pp. 9–102) *The Masai: Their Language and Folklore* and Hildegarde Hinde (1901, pp. 1–43):
1. **Three Grammatical Genders & Six Substantive Classes (Hollis 1905, pp. 9–34)**:
   - **Masculine / Augmentative (*ol- / o-*, pl. *il- / i-*, pp. 9–14)**: Denotes male beings, strength, or large size: *ol-tungani → il-tungana* (man/person → people), *ol-murani → il-muran* (warrior → warriors), *ol-oiboni → il-oibonok* (medicine-man/ritual prophet), *ol-ngatuny* (lion), *ol-chani → il-keek* (tree → trees/firewood).
   - **Feminine / Diminutive (*en- / em- / eng- / e-*, pl. *in- / im- / ing- / i-*, pp. 9–14)**: Denotes female beings, smaller items, or diminutives: *en-gerai → in-gera* (child → children), *en-kitok → in-kituak* (woman/wife → women), *Eng-ai* (God/sky/rain), *en-gare* (water/river), *eng-aji → ing-ajijik* (hut → huts), *en-giteng → in-gishu* (cow → cattle). Replacing *ol-* with *en-* forms diminutives (*ol-doinyo* 'mountain' → *en-doinyo* 'hill'), while replacing *en-* with *ol-* forms augmentatives (*en-dap* 'palm of hand' → *ol-dap* 'broad hand', p. 10).
   - **Place Gender (*e- / e-weji*, p. 11)**: *e-weji nabo* / *nebo* (one place).
   - **Six Noun Plural Classes (Hollis 1905, pp. 18–34)**:
     - **Class I** (singular in *-i / -ni*, dropping *-i / -ni* in plural, pp. 18–21): *ol-murani → il-muran* (warrior), *ol-ashe → il-asho* (calf), *ol-tuli → il-tuli* (buttock), *en-goshoke → in-goshua* (stomach).
     - **Class II** (adding *-i, -ni, -n, -in* in plural, pp. 21–24): *ol-chore → il-chorei* (friend), *ol-gilata → il-gilat* (clan/room), *ol-oiboni → il-oibonok* (medicine-man), *ol-alashe → il-alashera* (brother), *en-dap → in-dapi* (palm of hand).
     - **Class III** (adding *-a* in plural, pp. 24–27): *ol-alem → il-alema* (sword), *ol-tulet → il-tuleta* (gourd), *e-surutya → i-surutya* (coiled brass ear-ring), *en-geju → in-gejek* (foot/leg).
     - **Class IV** (adding *-k / -ak / -ek / -ik / -ok / -uk* in plural, plus ethnonyms on pp. 27–30): *eng-aji → ing-ajijik* (hut), *em-bae → im-baa* (arrow/matter), *ol-Maasani → il-Maasae* (a Masai → the Masai), *ol-Toroboni → il-Torobo* (Dorobo hunter), *ol-Meeki → il-Meek* (agriculturalist/non-Masai), *ol-Ashumpani → il-Ashumpa* (Swahili/coastal trader), *ol-Mangati → il-Mangati* (enemy, specifically Barabaig/Tatoga).
     - **Class V** (changing final vowel/syllable to *-o / -u / -ra / -itin*, pp. 30–32): *ol-coro → il-coroi* (spring), *e-murt → i-murto* (neck), *en-gata → in-gataitin* (time/occasion).
     - **Class VI** (Suppletive / Irregular plurals, pp. 33–34): *en-giteng → in-gishu* (cow → cattle), *ol-chani → il-keek* (tree → trees), *en-gerai → in-gera* (child → children), *ol-lee → il-lewa* (man → men), *en-kitok → in-kituak* (woman → women), *eng-ongu → ing-onyek* (eye → eyes), *en-giook → in-giyaa* (ear → ears).
2. **Adjectives, Gendered Numerals & Finger-Counting Signs (Hollis 1905, pp. 35–41 & Hinde 1901, p. 5)**:
   - **Adjectives (pp. 35–38)**: Inflect for number (*kitok → kituak* 'great/big', *oti / kiti → ooti / kutiti* 'small', *supat → supati* 'good/well-behaved', *sidai → sidan* 'beautiful/good', *torono → torok* 'bad', *ibor → iboor* 'white', *rok → rook* 'black', *nyokye → nyokyo* 'red').
   - **Gendered Numerals (pp. 39–41)**: Numbers 1, 2, 3, 4, 7, and 9 inflect for Feminine vs. Masculine: **1** *nabo* (f.) / *obo* (m.) / *nebo* (place); **2** *are* (f.) / *aare* (m.); **3** *uni* (f.) / *okuni* (m.); **4** *ongwan* (f.) / *oongwan* (m.); **5** *imiet*; **6** *ile*; **7** *naapishana* (f.) / *oopishana* (m.); **8** *isiet*; **9** *naaudo* (f.) / *oodo* (m.); **10** *tomon*; **20** *tikitam*; **30** *osom*; **40** *artam*; **50** *onom*; **60** *ntomoni-ile* (Hinde 1901 p. 5: *īp* = 60, a warrior company, signaled by snapping fingers); **100** *ip*.
3. **Two Verb Classes & Nine Derivative Extensions (Hollis 1905, pp. 48–97)**:
   - **Class I Verbs** (roots not beginning with *i*, pp. 48–63): e.g., *a-suj* (to follow), *a-nyor* (to love), *a-lo* (to go, pl. *a-puo*).
   - **Class II Verbs** (roots beginning with *i*, pp. 63–71): e.g., *a-irorie* (to speak to), *a-ipot* (to call), *a-ining* (to hear).
   - **Subject-Object Portmanteau Prefixes (p. 48)**: **aa-** ("I...thee" or "he/they...me": *aa-suj*, I follow thee / he follows me), **ki-** ("thou...me" or "we": *ki-suj*, thou followest me / we follow).
   - **Nine Derivative Stems (Hollis 1905, pp. 71–87)**: (1) Motion towards speaker (**-u / -unye**, pp. 71–73: *a-lotu* 'come hither', *a-nyorru* 'fall in love with'), (2) Motion away (**-aa / -aya / -oo**, pp. 73–75: *a-lo-aa* 'go away', *a-suj-aa* 'follow away'), (3) Dative/Applied "for/to" (**-aki / -oki**, pp. 75–77: *a-suj-aki* 'follow for'), (4) Instrumental/Locative "with/at" (**-ie**, pp. 77–79: *a-suj-ie* 'follow with'), (5) Inchoative/Become (**-u / -isho**, pp. 79–81: *a-rok-u* 'become black', *a-ibor-u* 'become white'), (6) Intransitive (**-isho / -asho / -osho**, pp. 81–83: *a-suj-isho*), (7) Neuter/Quasi-Passive (**-a / -o / -ye**, pp. 83–84: *a-dany-a* 'be broken/split'), (8) Reciprocal (**-ro / -no**, pp. 84–85: *a-nyor-ro* 'love one another'), and (9) Causative (**a-ita-** for Class I, **-ie** for Class II, pp. 85–87: *a-ita-suj* 'cause to follow').
4. **Salutations, Departure Blessings, Clans, Age-Sets & 12-Month Calendar (Hollis 1905, pp. 101–102, 260–356 & Hinde 1901, pp. 41–43)**:
   - **Salutations (Hollis 1905, pp. 101–102, 284–287 & Hinde 1901, p. 41)**: To men/warriors: **Sopai! — Epa! (Hepa!)**; To women/elders: **Takwenya! — Iko! (Igho!)**; Departure blessing (p. 287): **Sere! Toomonoi eng-Ai! I'nepu ake naaserian! Tapaashare 'l-modook! — Endepetai 'n-aishi oo kulle! — Esai!** ("Goodbye! Pray to God! Meet only with peace! Avoid fools! — May you have honey-wine and milk! — Amen!").
   - **2 Moieties, 4 Genealogical Clans & 5 Geographical Districts (pp. 260–261)**: **(I) *'L-oodo-kishu* ("the blood-red cattle")**: (1) *'L-Aiser* (*'N-Gidongi* — the medicine-man's sub-clan, *Il-Parkeneti*, *Il-Lughumae*, *Il-Partimaro*), (2) *Il-Mengana* (*'L-Aitayok*, *'Siria*, *Il-Marumae*, *Il-Makuperia*); **(II) *'L-oorook-kishu* ("the black cattle")**: (3) *Il-Mokesen* (*Il-Mokesen-aate*, *Il-Partalale*, *Il-Tarosero*, *Il-Kiporon* — snake-charmers/rain-makers, *Il-Tanap-owaru* — lion-killers), (4) *Il-Molelyan* (*Il-Molelyan-aate*, *Il-Mamasita*, *Il-Pojos*, *Il-Kipuyoni* — the smiths' sub-clan, *Il-Moshono*, *Il-Masangua*, *Il-Mokorere*). **5 Districts (*il-oshon*)**: *Kaputiei*, *En-aiposha* (Naivasha), *Kisongo*, *'L-uasin-gishu*, and *'L-Aikipyak*.
   - **12 Masai Months across 4 Seasons (pp. 333–334)**: (I) *Ol-okii* (Heavy rains): 1. *Kara-obo / Loo-'n-gokwa*, 2. *Kipern*, 3. *L'-iarat*; (II) *Ol-oiorujuj* (Drizzling season): 4. *Pushuke*, 5. *'N-dungus*, 6. *Ol-oiborare*; (III) *Ol-tumuret* (Short rains): 7. *Ol-gisan*, 8. *Ol-odalu*, 9. *Loo-'n-gushu*; (IV) *Ol-ameyu* (Dry/hunger season): 10. *Kuj-orok*, 11. *Oani-oingok*, 12. *Loo-'n-Gokwa (Ol-oingoni)*.`,
    examples: [
      { maasai: "Sopai! — Epa! (Hepa!) | Takwenya! — Iko! (Igho!)", english: "Greetings (to men/warriors)! — Reply! | Greetings (to women/elders)! — Reply!", explanation: "Traditional Maa salutations (Hinde 1901, p. 41 & Hollis 1905, pp. 101–102, 284–285)" },
      { maasai: "aa-suj (I follow thee / he follows me) • ki-suj (thou followest me / we follow)", english: "Portmanteau subject-object prefixes on Class I verb a-suj ('to follow')", explanation: "Hollis (1905, p. 48)" },
      { maasai: "a-lo (sg.) / a-puo (pl.) • a-lotu (come hither) • a-lo-aa (go away)", english: "to go (sg./pl.) • to come towards speaker (-u) • to go away (-aa)", explanation: "Suppletive plural stem and directional extensions in Hollis (1905, pp. 71–75, 90)" }
    ]
  }
];
