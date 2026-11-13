export interface MeruGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { meru: string; english: string; explanation?: string }[];
}

// ============================================================
// Meru (Kĩmĩĩrũ) Grammar Reference Sections
// Declarative modular grammar reference (audit-ready, zero runtime mutations)
// ============================================================

export const MERU_GRAMMAR_SECTIONS: MeruGrammarSection[] = [
  {
    "id": "meru-16-noun-classes-concord",
    "title": "The 16 Noun Classes of Kĩmĩĩrũ & Mount Kenya Bantu (Johnston 1919 #11–11a) & Dahl's Law",
    "summary": "Kĩmĩĩrũ and Kîembu preserve 16 active Bantu noun classes with full alliterative agreement across demonstratives, adjectives, and verbs, alongside Dahl's Law voicing dissimilation.",
    "content": "As documented in Sir Harry H. Johnston's *Comparative Study of the Bantu and Semi-Bantu Languages* (1919, Vol. I, pp. 98–112 & Vol. II, pp. 28–30, Languages #11 Kikuyu/Embu/Cuka/Mwimbe/Emberre/Þeraka/Igωji and #11a Meru), C. W. Hobley (1910, pp. 156–158, 169), and Wikipedia's *Meru language* & *Embu language* references:\n1. **Complete 16-Class Concord System (Johnston 1919, Vol. I, p. 111)**:\n   - **Class 1/2 (*mũ- / ba-* or *a-*)**: *Muntũ ũjũ mũraja arĩrũta wĩra* (This tall person is working) → *Antũ baba baraja barĩrũta wĩra* (These tall people are working). Johnston notes that Meru (#11a) preserves the archaic Class 2 prefix **ba-** alongside **a-**.\n   - **Class 3/4 (*mũ- / mĩ-*)**: *Mũtĩ ũjũ mũraja* (This tall tree) → *Mĩtĩ ĩjĩ mĩraja* (These tall trees).\n   - **Class 5/6 (*rĩ-, ĩ- / ma-*)**: *Ĩvia / Ĩiga* (stone) → *Mavia / Maiga* (stones), *Riũa* (sun), *Rĩitho → Maitho* (eye → eyes), *Maĩ / Manjĩ* (water).\n   - **Class 7/8 (*kĩ- / bi-, ci-*)**: *Kĩvĩrĩ / Gĩtĩ* (chair/stool) → *Bĩtĩ / Ciĩtĩ* (chairs), *Kĩara → Biara* (finger → fingers).\n   - **Class 9/10 (*n- / n-*)**: *Ng'ombe* (cattle), *Mbũri* (goat), *Nyomba* (house), *Njĩra* (path).\n   - **Class 11/10 (*rũ- / n-*)**: *Rũrĩmĩ → Ndĩmĩ* (tongue → tongues), *Rũũji* (river/water).\n   - **Class 12/13 (*ka- / tũ-* Diminutives)**: *Kaana → Tũana* (small child → small children), *Kavĩcĩ → Tũvĩcĩ* (young boy → boys).\n2. **Dahl's Law (Voicing Dissimilation)**:\n   - When a prefix containing voiceless *k* or *t* precedes a stem beginning with another voiceless consonant (*t, k, c, th*), the prefix consonant voices to *g* (*kĩ- + tĩ → gĩtĩ* 'chair', *kũ- + thiĩ → gũthiĩ* 'to go', *ka- + kana → gakana*).",
    "examples": [
      {
        "meru": "Muntũ ũjũ mũraja → Antũ baba baraja",
        "english": "This tall person → These tall people",
        "explanation": "Class 1/2 demonstrative and adjectival concord in Kĩmĩĩrũ (Johnston 1919 #11a)"
      },
      {
        "meru": "Mũtĩ ũjũ mũraja → Mĩtĩ ĩjĩ mĩraja",
        "english": "This tall tree → These tall trees",
        "explanation": "Class 3/4 concord"
      },
      {
        "meru": "kũ-ruga (to cook) vs. gũ-thiĩ (to go)",
        "english": "to cook vs. to go",
        "explanation": "Dahl's Law voicing kũ- -> gũ- before voiceless stem consonant"
      }
    ]
  },
  {
    "id": "meru-dialect-comparison-phrases",
    "title": "Mount Kenya Dialect Continuum (Imenti, Tigania/Igembe, Chuka/Mwimbi, Tharaka, Embu/Mbeere) & Pronouns (Johnston 1919)",
    "summary": "Spoken across Meru, Tharaka-Nithi, and Embu counties, Mount Kenya Bantu exhibits systematic correspondences across Johnston's (1919) sub-dialects (#11 & #11a) and Hobley's (1910) Mweru & Tharaka tables.",
    "content": "Sir Harry H. Johnston (1919, Vol. I, pp. 98–112) and C. W. Hobley (1910, pp. 156–158, 169) document the Mount Kenya Bantu sub-groups (**Meru, Igoji, Mwimbe, Muthambi, Chuka, Tharaka, Embu, Emberre**):\n1. **Personal & Possessive Pronouns (Johnston 1919, Vol. I, pp. 107–108)**:\n   - **I / me**: *niĩ* (Meru/Embu) | **My**: *-akwa*.\n   - **Thou / thee**: *gwe / we* | **Thy**: *-aku*.\n   - **He / she**: *we* | **His/her**: *-ake*.\n   - **We**: *batũ / ithuĩ* | **Our**: *-etũ / -itũ*.\n   - **You (pl.)**: *bũ / inyuĩ* | **Your**: *-enyu*.\n   - **They**: *bo / o* | **Their**: *-ao / -abo*.\n2. **Everyday Greetings & Phrases**:\n   - **Muuga! / Ũrĩ mwega?** = Hello! / How are you? → **Ndĩ mwega** (I am fine).\n   - **Mũrĩ ega?** = How are you all? → **Tũrĩ ega** (We are fine).\n   - **Wĩtagwa atĩa?** = What is your name? → **Njĩtagwa...** (My name is...).\n   - **Nkundia rũũji (Imenti) / Nkundia rũĩ (Tigania) / Nkundia rũũyĩ (Tharaka)** = Give me water to drink.",
    "examples": [
      {
        "meru": "Ũrĩ mwega? — Ndĩ mwega. | Mũrĩ ega? — Tũrĩ ega.",
        "english": "How are you? — I am fine. | How are you all? — We are fine.",
        "explanation": "Singular vs. plural greetings in Mount Kenya Bantu"
      },
      {
        "meru": "Nkundia rũũji (Imenti) • Nkundia rũĩ (Tigania) • Nkundia rũũyĩ (Tharaka)",
        "english": "Give me water to drink",
        "explanation": "Dialectal correspondence across Meru and Tharaka"
      },
      {
        "meru": "Njũri Ncheke • Kiama kia Ngome • Mũgwe",
        "english": "Supreme Council of Elders (Ameru • Aembu) • Traditional spiritual dignitary",
        "explanation": "Traditional indigenous governance institutions (Hobley 1910)"
      }
    ]
  },
  {
    "id": "meru-public-domain-dataset-synthesis",
    "title": "Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Meru (Kĩmĩĩrũ))",
    "summary": "Synthesizes phonological correspondences, morphological patterns, and lexical roots across the newly integrated public-domain monographs and open-web datasets for Meru (Kĩmĩĩrũ).",
    "content": "1. **Archival & Open-Dataset Integration for Meru (Kĩmĩĩrũ)**:\n   - Combines primary historical documentation (Johnston 1902/1919, Hobley 1902/1910/1922, Krapf 1842/1850/1882/1887, Hollis 1905/1909/1910, Beech 1911, Barton 1921, Lindblom 1920, Wray 1894, Kirk 1905, Tutschek 1844–1845) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).\n2. **Phonetic & Orthographic Normalization**:\n   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *ω, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    "examples": [
      {
        "meru": "Nyambeene / Jombeni • Angilo",
        "english": "Nyambene Hills (Jombeni Range) • Angilo (Meru clan whose totem is black cattle)",
        "explanation": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 155)"
      },
      {
        "meru": "Netiri • Kī-šīī",
        "english": "Totem / forbidden sacred thing (Mweru) • Womb",
        "explanation": "C. W. Hobley, Ethnology of A-Kamba (1910, p. 157 — Notes on Mweru)"
      }
    ]
  },
  {
    "id": "meru-kitharaka-champion-1912-mberia-2004-dundas-1915",
    "title": "Kĩtharaka Phonology & Loanword Nativization (Kithaka wa Mberia 2004), Atharaka Ethnography (Champion 1912) & Chuka/Mwimbi/Tharaka Law (Dundas 1915)",
    "summary": "Prof. Kithaka wa Mberia (2004) analyzes how Kĩtharaka's 7-vowel system, fricatives (/β, ð, ɣ/), and open-syllable constraints adapt borrowed words, complementing Arthur M. Champion's (1912) Atharaka ethnography and Charles Dundas's (1915) study of Chuka, Mwimbi, and Tharaka governance.",
    "content": "From Prof. Kithaka wa Mberia (*\"The Phonology of Borrowed Words in Kitharaka\"*, Nordic Journal of African Studies 13(1), 2004, pp. 74–85), Arthur M. Champion (*\"The Atharaka\"*, JRAI Vol. 42, 1912, pp. 68–90), and Hon. Charles Dundas (*\"The Organization and Laws of Some Bantu Tribes in East Africa\"*, JRAI Vol. 45, 1915, pp. 234–306):\n1. **Kĩtharaka Phonemic Inventory & Consonant Substitution Rules (Kithaka wa Mberia 2004, pp. 75–81)**:\n   - **7 Vowels (Short & Long)**: /i, e, ɛ, a, ɔ, o, u/.\n   - **Absence of Voiceless Labiodental/Alveolar Fricatives (/f, v, s, z/) & Voiced Non-Prenasalized Plosives (/b, d, g/)**:\n     - Foreign **/b, f, v/** nativize to bilabial fricative **/β/** (written *b*): English *baptism* / Swahili *ubatizo* → **ũbatitho** [oβatiðɔ]; Swahili *sifuri* ('zero') → **kĩbũrĩ** [keβore]; *taabu* ('trouble') → **ndaaβu**.\n     - Foreign **/s, z, θ, ð/** nativize to dental fricative **/ð/** (written *th*): Swahili *soko* ('market') → **thoko** [ðɔkɔ]; * saa* ('hour/watch') → **thaa** [ðaa]; *meza* ('table') → **metha** [mɛða]; *bunduki* ('gun') → **mũndũki** [mondoki].\n     - Foreign **/d/** nativizes to prenasalized **/nd/** or **/nt/** (*dakika* 'minute' → **ndagĩka**), and **/l/** nativizes to flap **/r/** (*skuli* 'school' → **thukuru** [ðukuru]).\n   - **Syllable Structure & Vowel Epenthesis**: Kĩtharaka permits only open **(C)V** syllables (no consonant clusters or codas); consonant clusters and final consonants are resolved by vowel epenthesis governed by labial attraction (/u/ after labial consonants) or vowel copy/coronal default (/i, e/).\n2. **Atharaka, Chuka & Mwimbi Ethnography & Customary Law (Champion 1912 & Dundas 1915)**:\n   - Champion (1912, pp. 68–90) documents the Atharaka settlements on both banks of the Tana River around the Grand Falls, their bee-keeping with hollowed log hives (**mwatũ**) hung in baobab and acacia trees, ironworking, bow-and-arrow hunting (*ũta* and *mũgũĩ* with *Acokanthera* poison), and circular granaries.\n   - Dundas (1915, pp. 238–304) records the generational age-sets (**ntuke**) of Chuka, Mwimbi, and Tharaka, the elder councils (**kiama**), and the unalienable forest/ridge estates (**gĩthaka**) of the Chuka on the eastern slopes of Mount Kenya.",
    "examples": [
      {
        "meru": "soko → thoko [ðɔkɔ] • meza → metha [mɛða] • sifuri → kĩbũrĩ [keβore] • skuli → thukuru [ðukuru]",
        "english": "market • table • zero • school",
        "explanation": "Kĩtharaka consonant substitution and vowel epenthesis in borrowed words (Kithaka wa Mberia 2004, pp. 77–83)"
      },
      {
        "meru": "Ntuke (generational age-set) • Kiama • Gĩthaka • Mwatũ (log beehive)",
        "english": "Ruling generation • Council of elders • Clan land estate • Hollowed log beehive",
        "explanation": "Chuka, Mwimbi & Atharaka institutional and material vocabulary (Champion 1912 & Dundas 1915)"
      }
    ]
  },
  {
    "id": "meru-hobley-1910-mweru-tharaka-clans-totems-chiefs",
    "title": "C. W. Hobley (1910) Part II Chapter VI & Appendix (5): The 22 Mweru (Meru) Sub-Tribes & Chiefs, 13 Mweru Mwiria Clans & Netiri Totems, Red-Sea Crossing Tradition & 14 Thaka (Tharaka) Clans & Nthuku Totems (pp. 39, 85, 93, 156–158, 169)",
    "summary": "Complete line-by-line synthesis of C. W. Hobley's 1910 Mweru (Meru) and Thaka (Tharaka) chapters: all 22 Mweru geographical sub-tribes and their 22 chiefs, all 13 Mweru clans (Mwiria) and totems (Netiri), the Ntowaita exodus tradition, and all 14 Tharaka clans (Mwiriga/Mbai) and totems (Nthuku).",
    "content": "From C. W. Hobley, C.M.G. (*Ethnology of A-Kamba and Other East African Tribes*, Cambridge University Press, 1910, Part I pp. 39, 85, 93; Part II, Chapter VI: *Notes on Mweru*, pp. 156–158; and Appendix (5): *The Thaka or Tharaka*, p. 169):\n1. **The 22 Mweru (Meru) Sub-Tribes & Their 22 Named Chiefs (Part II, Ch. VI, pp. 156–157)**:\n   - Hobley records the 22 territorial divisions of Mweru from Mount Kenia northward across the Nyambene (*Jombeni*) range together with the chief of each division:\n     1. **Imenti** — Chief *Mitabiru*\n     2. **Igoji** — Chief *Kiambi*\n     3. **Muthambi** — Chief *Ruini*\n     4. **Mwimbi** — Chief *Mbariga*\n     5. **Chuka** — Chief *Kibere*\n     6. **Miutini** — Chief *M'mura*\n     7. **Tigania** — Chief *M'ngongo*\n     8. **Igembe** — Chief *M'rithara*\n     9. **Athwana** — Chief *M'itonga*\n     10. **Akachiu** — Chief *M'munyua*\n     11. **Amomete** — Chief *M'kabuthu*\n     12. **Antubetwe** — Chief *M'itaru*\n     13. **Antuambui** — Chief *M'ruchu*\n     14. **Kianjai** — Chief *M'ithiria*\n     15. **Karama** — Chief *M'ringera*\n     16. **Muthara** — Chief *M'linya*\n     17. **Kangeta** — Chief *M'turuchiu*\n     18. **Luluma** — Chief *M'arimi*\n     19. **Amugaa** — Chief *M'ngatho*\n     20. **Athi** — Chief *M'kithia*\n     21. **Thaiichu** — Chief *M'kura*\n     22. **Tharaka (Thaka)** — Chief *M'kanyoni*\n2. **The 13 Mweru Totemic Clans (*Mwiria*) & Their Sacred Totems (*Netiri*, pp. 156–157)**:\n   - In Mweru, the clan is called **Mwiria** (pl. *Miiria*) and the totem is called **Netiri**:\n     1. **Njaru** — Totem: **White cattle** (*Ng'ombe njaru*)\n     2. **Ntuni** — Totem: **Red cattle** (*Ng'ombe ntuni*)\n     3. **Angilo** — Totem: **Black cattle** (*Ng'ombe njiru*)\n     4. **Athinga** — Totem: **Giraffe** (*Ntwiga*)\n     5. **Athanya** — Totem: **Basket twine / cord** (*Rorigi*)\n     6. **Nthia** — Totem: **Bushbuck** (*Nthia*)\n     7. **Amakui (Mukui)** — Totem: **Dog** (*Kuro*)\n     8. **Antuanthama** — Totem: **Dik-dik** (*Nthama*)\n     9. **Singamburi** — Totem: **Goat** (*Mburi*)\n     10. **Antwa mwakia** — Totem: **Fire** (*Mwanki*)\n     11. **Mwianda** — Totem: **Frog** (*Kiura*)\n     12. **Amatu (Kiringende)** — Totem: **Locust** (*Ngigi*)\n     13. **Ntowaita** — Dominant clan associated with the ancient crossing of a red sea (*Mbwa*)\n3. **The *Ntowaita* Red-Sea Migration Tradition & Mweru Spiritual Institutions (pp. 39, 85, 93, 157–158)**:\n   - Elders of the **Ntowaita** clan related to Hobley that their ancestors once lived in bondage beyond a great red water, crossed it when their leader struck the water with his staff, and migrated to Mount Kenia and the Jombeni Hills.\n   - Hobley also notes Mweru warrior war-horns (p. 39), ancestral spirit shrines (*Aiimu*, p. 85), and hereditary rain-makers (p. 93).\n4. **Appendix (5) — The 14 Thaka (Tharaka) Clans (*Mwiriga / Mbai*) & Their Totems (*Nthuku*, p. 169)**:\n   - In Tharaka (inhabiting both banks of the Tana River), the clan is called **Mwiriga** or **Mbai** and the totem is called **Nthuku**. Hobley tabulates 14 clans alongside key social terms (**Muchi** = village/homestead, **Mthumuba** = young warrior, **Mugao** = medicine-man, **Mutu muwao** = married woman):\n     1. **Mba-Kanyoni** — Totem: **Birds** (*Nyoni*)\n     2. **Mba-Mbau** — Totem: **Hyena** (*Mbiti*)\n     3. **Mba-Nthia** — Totem: **Bushbuck** (*Nthia*)\n     4. **Mba-Njiru** — Totem: **Buffalo** (*Mbogo*)\n     5. **Mba-Gachiku** — Totem: **Zebra** (*Njagi*)\n     6. **Mba-Thagana** — Totem: **Fish / Tana River creatures** (*Makuyu*)\n     7. **Mba-Mwei** — Totem: **Baboon** (*Nthia / Nguli*)\n     8. **Mba-Ngombe** — Totem: **Cattle spleen** (*Rurigi*)\n     9. **Mba-Nthiga** — Totem: **Lion** (*Munyambu*)\n     10. **Mba-Mburi** — Totem: **Goat** (*Mburi*)\n     11. **Mba-Kiringa** — Totem: **Iron / Smiths' bellows** (*Muura*)\n     12. **Mba-Mutonga** — Totem: **Elephant** (*Njogu*)\n     13. **Mba-Kariba** — Totem: **Python / Snake** (*Njoka*)\n     14. **Mba-Chimba** — Totem: **Ant-bear / Aardvark** (*Luma*)",
    "examples": [
      {
        "meru": "Mwiria (clan) & Netiri (totem): Njaru (white cattle), Ntuni (red cattle), Angilo (black cattle), Athinga (giraffe), Athanya (twine), Nthia (bushbuck), Amakui (dog), Antuanthama (dik-dik), Singamburi (goat), Antwa mwakia (fire), Mwianda (frog), Amatu (locust), Ntowaita",
        "english": "All 13 Mweru clans and their totems recorded by C. W. Hobley",
        "explanation": "Hobley (1910, Part II, Ch. VI, pp. 156–157)"
      },
      {
        "meru": "Imenti (Mitabiru), Igoji (Kiambi), Muthambi (Ruini), Mwimbi (Mbariga), Chuka (Kibere), Tigania (M'ngongo), Igembe (M'rithara)...",
        "english": "Mweru sub-tribes and their chiefs in 1910",
        "explanation": "Hobley (1910, Part II, Ch. VI, pp. 156–157)"
      },
      {
        "meru": "Thaka (Tharaka): Mwiriga / Mbai (clan) & Nthuku (totem) • Muchi (homestead) • Mthumuba (warrior) • Mugao (medicine-man) • Mutu muwao (married woman)",
        "english": "Tharaka social and totemic terminology along the Tana River",
        "explanation": "Hobley (1910, Appendix (5), p. 169)"
      }
    ]
  },
  {
    "id": "meru-johnston-1919-1922-group-c-11a",
    "title": "Sir Harry H. Johnston (1919–1922) Group C #11a Meru & #11 Cuka/Mwimbe/Þeraka/Igωji: Retention of Ba- (Cl. 2) & Bi- (Cl. 8), Numerals, Pronouns, Noteworthy Roots (Vol. II, pp. 28–30) & Bibliography (p. 788)",
    "summary": "Complete line-by-line documentation of #11a Meru (M.) and #11 Cuka (C.), Mwimbe (Mw.), Þeraka (Þ.), and Igωji (Ig.) in Sir Harry H. Johnston's Comparative Study of the Bantu and Semi-Bantu Languages (Vol. I [1919], pp. 98–112, 788 & Vol. II [1922], pp. 28–30, 226, 261).",
    "content": "From Sir Harry H. Johnston (*A Comparative Study of the Bantu and Semi-Bantu Languages*, Vol. I [1919], pp. 98–112, 788 & Vol. II [1922], pp. 28–30, 226, 261):\n1. **Archaisms Preserved in #11a Meru (*M.*), *Cuka* (*C.*), *Mwimbe* (*Mw.*), *Þeraka* (*Þ.*) & *Igωji* (*Ig.*)**:\n   - Unlike Southern Kikuyu (#11, which reduces Class 2 *Ba-* to *A-* and Class 8 *Bi-* to *I-/Ci-*), **#11a Meru** retains **Class 2 Ba-** (*Mu-ntu → Ba-ntu*, concord *ba-*) and **Class 8 Bi-** (*Ki-ntu → Bi-ntu*, concord *bi-*), alongside Class 13/12 Diminutives **Ka- / Tu-** (*Ka-ana → Tu-ana*).\n2. **Noteworthy Roots in #11a Meru & #11 C./Mw./Þ./Ig. (Vol. I, pp. 98–110 & Vol. II, pp. 28–30)**:\n   - **People & Kinship**: **Mu-ntu ; ba-ntu** (person), **Baba, Iþe** (father), **Maitω, Nyina** (mother), **Mū-rūme ; ba-** (man/husband), **Mū-ka ; ba-ka / Mū-gūrra** (woman/wife), **Mū-nene ; ba-** (chief).\n   - **Body, Nature & Animals**: **Kī-oṅgω / Mū-twe** (head), **Rī-iþω ; ma-iþω** (eye), **Gū-tū ; ma-tū** (ear), **I-gegω ; ma-** (tooth), **Rū-rīmī ; n-dīmī** (tongue), **Kū-ωkω ; m-ωkω** (arm), **Kū-gūrū ; ma-** (leg), **I-rūa / Ri-ūa** (sun), **M-weri** (moon), **N-jata** (star), **M-būra** (rain), **Rū-ī / Ma-ī** (water), **M-wanki** (fire), **I-higa / I-bia ; ma-** (stone), **N-jωgu** (elephant), **M-bωgω** (buffalo), **Mū-rūþi / Ṅ-gatia** (lion), **N-gari** (leopard), **M-biti** (hyena), **Kū-rō** (dog), **N-þī** (fish), **Kī-rāma** (spear), **Kī-shīī** (womb), **Mā-zigūma** (spring water).",
    "examples": [
      {
        "meru": "Mu-ntu → Ba-ntu (Class 1/2) • Ki-ntu → Bi-ntu (Class 7/8) • Ka-ntu → Tu-ntu (Class 13/12)",
        "english": "Retention of archaic Class 2 Ba- and Class 8 Bi- in #11a Meru",
        "explanation": "Johnston (1919, Vol. I, p. 111 & 1922, Vol. II, pp. 28–30)"
      },
      {
        "meru": "I-rūa (sun), Rū-ī / Ma-ī (water), M-wanki (fire), Kī-oṅgω (head), Mū-gūrra (woman), Kū-rō (dog), N-þī (fish)",
        "english": "Distinctive #11a Meru & #11 Cuka/Mwimbe/Þeraka roots in Johnston (1919, pp. 98–106)",
        "explanation": "Johnston (1919, Vol. I, pp. 98–106 & 1922, Vol. II, pp. 29–30)"
      }
    ]
  }
];
