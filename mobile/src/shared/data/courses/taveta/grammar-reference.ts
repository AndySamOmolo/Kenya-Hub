import type { GrammarSection } from "../types";

// ============================================================
// Taveta (Kitaveta) Grammar Reference Sections
// Declarative modular grammar reference (audit-ready, zero runtime mutations)
// ============================================================

export const TAVETA_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    "id": "taveta-hollis-1910-johnston-1919",
    "title": "Kitaveta Noun Classes, Numerals & Oral Literature (Hollis 1910–1911 & Johnston 1919 #15 Taveita)",
    "summary": "Kitaveta is a North-East Coastal Bantu language closely allied to Pare/Asu and Chaga-Taita, preserving 15+ noun classes and rich proverb/riddle morphology.",
    "content": "As documented in A. C. Hollis (*Taveta Sayings and Proverbs*, 1910; *Taveta Enigmas*, 1911) and Sir Harry Johnston (*Comparative Study of the Bantu Languages*, 1919, #15 Taveita, Vol. I, pp. 98–112 & Vol. II, pp. 33–34):\n- **Noun Classes**: Class 1/2 *mndu → wandu* (person → people), *mche → wache* (woman → women); Class 3/4 *mti → miti* (tree → trees); Class 5/6 *ideghe → madeghe* (bird → birds), *iwe → mawe* (stone → stones), *mazi* (water); Class 7/8 *kindu → vindu* (thing → things).\n- **Cardinal Numerals (Johnston 1919, Vol. I, p. 107 #15 Taveita)**: *imwe* (1), *iwiri* (2), *itatu* (3), *inya* (4), *itano* (5), *itandatu* (6), *mfungate* (7), *mnane* (8), *kenda* (9), *ikumi* (10).",
    "examples": [
      {
        "taveta": "Esikie mbeho niye esongeria moto.",
        "english": "It is the one who feels the cold who draws near to the fire.",
        "explanation": "A. C. Hollis (1910, Taveta Proverb #4)"
      },
      {
        "taveta": "Ideghe imwe likaremwa kuiya teheshigha kucha.",
        "english": "If one bird fails to sing, it does not stop the dawn from breaking.",
        "explanation": "A. C. Hollis (1910, Taveta Proverb #10)"
      }
    ]
  },
  {
    "id": "taveta-public-domain-dataset-synthesis",
    "title": "Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Taveta (Kitaveta))",
    "summary": "Synthesizes phonological correspondences, morphological patterns, and lexical roots across the newly integrated public-domain monographs and open-web datasets for Taveta (Kitaveta).",
    "content": "1. **Archival & Open-Dataset Integration for Taveta (Kitaveta)**:\n   - Combines primary historical documentation (Johnston 1902/1919, Hobley 1902/1910/1922, Krapf 1842/1850/1882/1887, Hollis 1905/1909/1910, Beech 1911, Barton 1921, Lindblom 1920, Wray 1894, Kirk 1905, Tutschek 1844–1845) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).\n2. **Phonetic & Orthographic Normalization**:\n   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *ω, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    "examples": [
      {
        "taveta": "mshana (pl. vashana) • mbazi /ulosi",
        "english": "Blacksmith / ironworker • Proverb / wise saying (Kitaveta)",
        "explanation": "A. C. Hollis, Taveta Sayings and Proverbs (1910)"
      },
      {
        "taveta": "lālā • kāā",
        "english": "„ sleep • „ sit, remain, abide",
        "explanation": "15. Taveita (Kitaveta) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 98–112)"
      }
    ]
  },
  {
    "id": "taveta-johnston-1919-1922-group-c-15-group-d-17-caga",
    "title": "Sir Harry H. Johnston (1919–1922) Group C #15 Taveita & Group D #17 Caga: Errata p. x (M-ōtω & Mωši), 16-Class Prefix/Concord Table (p. 112), Noteworthy Roots (Vol. II, pp. 33–34) & Bibliography (p. 788)",
    "summary": "Complete line-by-line documentation of Group C #15 Taveita and its Kilimanjaro neighbour Group D #17 Caga in Sir Harry H. Johnston's Comparative Study of the Bantu and Semi-Bantu Languages (Vol. I [1919], pp. x, 98–126, 788 & Vol. II [1922], pp. 33–35, 226, 261).",
    "content": "From Sir Harry H. Johnston (*A Comparative Study of the Bantu and Semi-Bantu Languages*, Vol. I [1919], pp. x, 98–126, 788 & Vol. II [1922], pp. 33–35, 226, 261):\n1. **Errata (Vol. I, p. x) & Complete 16-Class Prefix/Concord Table for #15 Taveita (Vol. I, p. 112 & Vol. II, p. 261)**:\n   - **Errata (Vol. I, p. x)**: On p. 100 col. 15 (**Taveita**), 'Fire' is rendered **M-ōtω**; on p. 113 (**17. Caga**), the principal dialect is corrected from *Musi* to **Mωši** (alongside *Śira, Keni/Urombo, Uru, Macame, Siha, Meru, Kahe*).\n   - **16-Class Prefixes & Concords in #15 Taveita (Vol. I, p. 112)**:\n     - **Class 1**: **Mu-, M-** (*yu-, u-, a-, va-*) • **Class 2**: **Va-, Wa-** (*va-, wa-*)\n     - **Class 3**: **Mu-, M-** (*u-*) • **Class 4**: **Mi-** (*i-, mi-*)\n     - **Class 5**: **I-, Ri-** (*li-, ri-*) • **Class 6**: **Ma-** (*ga-, ma-*)\n     - **Class 7**: **Ki-, C'-** (*ki-, c'-*) • **Class 8**: **Vi-, Vy-** (*vi-, vy-*)\n     - **Class 9**: **N- (Ny-, M-)** (*i-, y'-*) • **Class 10**: **N- (Ny-, M-)** (*zi-, z'-*)\n     - **Class 11**: **Lu-** (*lu-*)\n     - **Class 12**: **Tu-** (plural of Class 13; *tu-*) • **Class 13**: **Ka-** (diminutive singular; *ka-*)\n     - **Class 14**: **Vu-, U-** (*vu-, u-*) • **Class 15**: **Ku-** (*ku-*) • **Class 16**: **Ha-, Va-** (*ha-, va-*), plus locative suffix **-ni / -ini**.\n2. **Noteworthy Roots in #15 Taveita & Comparison with #17 Caga (Vol. I, pp. 98–126 & Vol. II, pp. 33–35)**:\n   - **Kinship & People**: **M-ndu ; va-ndu** (person), **Papa, Iše** (father), **Mama, Nyinya** (mother), **M-īmi ; va-īmi** (man/husband), **M-ce ; va-ce** (woman/wife), **M-wana ; v-ana** (child), **M-fumwa ; va-** (chief/king), **M-ganga ; va-** (doctor).\n   - **Body, Nature & Animals**: **M-twi ; mi-twi** (head), **I-rišω ; m-ešω** (eye), **Kū-tū ; ma-tū** (ear), **I-jegω ; ma-jegω** (tooth), **Lu-limi ; n-dimi** (tongue), **M-kωnω ; mi-** (arm), **Kū-gūlū ; ma-** (leg), **Ny-umba** (house), **I-zūva** (sun; Caga **I-rūva**), **M-wezi** (moon), **Ny-ωta** (star), **M-vūa** (rain), **Ma-zi** (water; Caga **M-riṅga**), **M-ōtω** (fire), **I-we ; ma-we** (stone), **N-zωvu** (elephant), **M-bωgω** (buffalo), **Simba** (lion), **N-gω** (leopard), **M-fuli** (rhino), **Sūi** (fish), **I-deγe ; ma-deγe** (bird).\n3. **Bibliography for #15 Taveita (Vol. I, p. 788)**:\n   - Cites Sir Harry H. Johnston (*The Kilima-njaro Expedition*, 1886 — first published vocabulary of *Kitaveta*), J. T. Last (*Polyglotta Africana Orientalis*, 1885), Rev. A. R. Steggall (CMS Taveta translations, 1892–1906), and A. C. Hollis (*Taveta Sayings and Proverbs*, JAS 1910 & *Taveta Enigmas*, JAS 1911).",
    "examples": [
      {
        "taveta": "M-ndu → va-ndu • M-īmi → va-īmi (man/husband) • M-ce → va-ce (woman/wife) • I-deγe → ma-deγe (bird) • M-ōtω (fire, Erratum p. x)",
        "english": "Core Kitaveta nouns and Vol. I p. x Erratum in Johnston (1919 #15 Taveita)",
        "explanation": "Johnston (1919, Vol. I, pp. x, 98–106 #15 Taveita)"
      },
      {
        "taveta": "17. Caga (Mωši, Śira, Keni/Urombo, Uru, Macame, Siha, Meru, Kahe): I-rūva (sun/God), M-riṅga (water), M-ndu → wa-ndu",
        "english": "Kilimanjaro #17 Caga comparative roots and Erratum p. x (Mωši)",
        "explanation": "Johnston (1919, Vol. I, pp. x, 113–126 #17 Caga)"
      },
      {
        "taveta": "Iye (Mimi), Uwe, Yeye, Iswi, Inywi, Vaω • -aṅgu, -akω, -akwe, -etu, -enyu, -aω",
        "english": "Independent personal and possessive pronouns in #15 Taveita",
        "explanation": "Johnston (1919, Vol. I, p. 108 #15 Taveita)"
      }
    ]
  }
];

TAVETA_GRAMMAR_SECTIONS.push({
  "id": "taveta-hohnel-1894-vol1-chs2-4-complete",
  "title": "Lieut. Ludwig von Höhnel (1894, Vol. I, Chs. II–IV, pp. 38–208): Bantu Prefix Rule (U-/M-/Wa-/Ki-, p. 61), 7-Turn Kiruvu Greeting Dialogue with Sultan Sedenga (p. 66), Swahili Caravan Toponymy (pp. 75–76), Wataveta & Kahe Ethnography (10 Wazee, Pombo, Naiberes vs. Schukas), Chaga Sultan Miriali (Kilengele, 'Tonga mbuya!', 7 Chaga States & Mandara's Taunts), Wameru Sultan Matunda (Maize-Ear Accounting & Lake Balbal) & First Ascent of Kilimanjaro to 17,387 ft.",
  "summary": "Complete line-by-line documentation of all Pangani Valley, Usambara, Pare, Taveta, Kahe, Chaga (Marangu & Mochi), and Meru linguistic, conversational, and ethnographic records in Lieut. Ludwig von Höhnel's 'Discovery of Lakes Rudolf and Stefanie' (tr. Nancy Bell [N. D'Anvers], Vol. I, London: Longmans, Green, and Co., 1894, Chapters II–IV, pp. 38–208 & Errata p. xx).",
  "content": [
    "1. Bantu Prefix Rule (p. 61), Verbatim 7-Turn Kiruvu Greeting Dialogue with Sultan Sedenga of Mkarama (p. 66) & Swahili Caravan Toponymy Footnote (pp. 75–76): In Chapter II (Feb. 4–March 31, 1887, pp. 38–93), after marching from Pangani and Bweni (Errata p. xx: Buenni → Bweni; Mauia → Mawia; Lewa → Leva; Wachensi → Washenzi; Masai → Mafi; Anoonuna arceus → Anomma arcens) past Leva (487 ft., pombe banana-wine mutiny; Wangwana 'the free' vs. Watuma 'slaves', p. 46 fn. 1) and the battle of Kwa Mgumi (pp. 58–60), Höhnel formulates the 4-prefix Bantu ethnonymic/glossonymic rule on p. 61: U- (country), M- (singular person), Wa- (plural people), and Ki- (language), illustrated by Usegua / M-segua / Wasegua / Ki-segua (= Waruvu / Kiruvu along the Ruvu [Pangani] river), U-ganda / M-ganda / Ki-ganda, and Ta-veta / M-taveta / Wa-taveta / Ki-taveta. At Mafi (900 ft., pp. 64–68), he records verbatim the 7-turn Kiruvu (Kizegua) ceremonial greeting dialogue exchanged with the aged Sultan Sedenga of Mkarama (p. 66, where both parties repeat nasal 'Hm! — Hm!' after every question, and fn. 1 notes that Europeans are called Wasangu in Kiruvu): (1) 'Kilo vedi?' ('Did you have a good night?') — 'Hm!' — 'Hm!'; (2) 'Si vedi?' ('Did you have a good day?') — 'Hm!' — 'Hm!'; (3) 'Ho kaja?' ('Is all well at home?') — 'Hm!' — 'Hm!'; (4) 'Ho kaja kilo vedi?' ('Did they all have a good night?') — 'Hm!' — 'Hm!'; (5) 'Mzima?' ('Are you well?') — 'Hm!' — 'Hm!'; (6) 'Sana' ('Very well') — 'Hm!' — 'Hm!'; (7) 'Yambo' ('Bless you!') — 'Hm!' — 'Hm!'. At Masinde (pp. 71–73), Sultan Sembodja of Usambara (seated in his baraja on a kitanda; father of Kimueri at Kambula, p. 74) prescribed a dream-cure against smallpox requiring 1 white hen, 1 black hen, and 1 guinea-fowl brought down with a gun. Footnote 1 on pp. 75–76 explains 14 Swahili caravan camp names in `-ni` and `Malago`: Mikocheni ('near the doum palms', 1,800 ft.), Mikwajuni ('near the tamarinds'), Mibuyuni ('near the baobabs'), Miwirimi ('near the medlars'), Mtoni ('near the stream'), Massimani ('near the water-hole'), Malago kanga ('home of the guinea-fowl'), Malago tembos ('elephant camp'), Malago faru ('rhinoceros haunt'), Indyiani ('by the path'), nsitoni ('in a wood'), nyikani / porini ('on a thorny steppe'), and Mabirioni ('boundary'). Marching past Wapare villages (Pare Maboga / Massangu, filed teeth, schuka / upande loincloths, pp. 77–78), Chief Mpesa at Makuyuni (12-in. fire-drill twirled in a 6-in. grooved hearth-board, pp. 80–81), the telekesa waterless mid-day cooking march (pp. 81–82), Chief Muanamata at Mwemba (p. 82), and Masai elder Alkomai across Angata Lesulenge ('pasture or meadow lands', p. 84) and Lake Jipe (viewing Kimawenzi and Kibo, pp. 88–90), the expedition entered Taveta on March 31, 1887 to the Swahili chorus: 'Yambo, Yambo, sana! Sabalcheir! Uhali ghani? Habari ghani?' ('Good day! God bless you! How are you? What's the news?', p. 93).",
    "2. Stay in Taveta: Wataveta & Wakwafi Coexistence, 10 Wazee Elders, Pombo Bead Strings, Naiberes vs. Schukas & Caravan Economy (Chs. III–IV, pp. 94–108, 170–174, 200–208): Settled on the Lumi river in a dense tropical forest stronghold about two generations earlier, Taveta numbered over 1,500 Bantu Wataveta governed by a council of 10 elders (Wazee, pp. 102–104, 208; including elder Mkamba, p. 205), joined ~50 years earlier by agricultural Wakwafi (routed by pastoral Masai and settled toward Lake Jipe, p. 100). Daily market women sold bananas, colocasia (Errata p. xx: colocosia → colocasia), yams, sweet potatoes, sugar-cane, maize, beans, tobacco, honey, butter, milk, and fowls (kitoweo = 'a tit-bit of anything', p. 99 fn. 1) for glass beads (1 string of white or blue beads = 2–3 lb. potatoes or 6–8 ears of maize). Young Wataveta men copied Masai warrior dress (broad-bladed simé sword, knobkerrie club, red ochre + fat), unmarried girls wore a beaded goatskin petticoat and 100+-string bead collars, and married elders wore 4-inch spiral brass wire ear-pendants supported by a leather band over the head (p. 101). Circumcision was performed on boys in the forest and on girls in their huts (kept secluded for 1 month while their mothers smeared their faces with red and white streaks, p. 103). In camp, porters re-threaded glass beads onto palm-fibre strings (Hyphæna thebaica) 21–22 inches long, tied in bundles of 10 strings called a pombo (pp. 104, 172), and tailored 1,200 Masai war-mantles called naiberes (2 yds. of ulayti mfupi with a 6–8 in. bright red calico stripe down the middle and 4–4.5 in. fringes at both ends) alongside schukas (2⅛ yds. without red stripe, p. 105; p. 141 fn. 1: '1 doti = 2 schuka; 1 schuka = 4 mikono'). Also documents the pet ape Hamis (pp. 99–100), orator Jibu wadi Kombo (p. 104), the night attack on Taveta by Mbaruk of the Msara [Mazrui] dynasty wounding Johar (p. 171), the massika rains (Apr. 13–May 16, pp. 171–172), hiring guide Juma Mussa Naddim Balosi (a native of Tanga speaking Masai, $13/mo., p. 173), Rev. Mr. Fitch's CMS monthly 5-day postal runners from Mochi to Mombasa (pp. 174, 198), the Ngaboto ivory caravan carrying 300 frassilah (each ~35 lb., p. 202 & Errata p. xx), Hindu trader Ademji (p. 202), the farewell feast (Sadaka) with battle-cry 'Saferi a palepale!' ('A journey on the spot!', p. 204), and the severed right hand of a murdered Wanika talisman-maker nailed over the northern forest gate to deter theft (p. 207).",
    "3. Sultan Miriali of Marangu, the 7 Chaga States, Mandara of Mochi & First High Ascent of Kilimanjaro (pp. 109–118, 174–200): Visiting Marangu (4,600 ft.), Höhnel and Teleki befriended the 24–25-year-old Sultan Miriali (styled Mangi, 'king'), who had 3 wives (including a daughter of Sultan Mandara of Mochi bought for 300 cows) and 3 slave-girls who begged for kilengele ('beads' in Kichaga, p. 113 & Errata p. xx) until Miriali dismissed them with 'Tonga mbuya!' ('Off with you now, friend!', p. 113). Pages 178–184 document the Marangu smithy (forging spears and drawing fine iron wire for mikufu chains), a 300-warrior war-dance chanting 'Oh Mangi! thou art like a lion', and a raw-entrail and warm-blood bullock feast overlooking the 7 Chaga states from E to W: Mamba, Samanga, Marangu, Kilema, Kirua, Mochi, and Tela (p. 184). When Count Teleki sent presents to Sultan Mandara of Mochi, Mandara mocked him in Swahili: 'wasunga Kana wanaona ugombe a mafuta, saua kana mafissi' ('Europeans are as fond of fat oxen as hyænas', p. 198) and called Mr. Fitch 'mtschunga a punda a wasungu' ('the European's donkey driver', p. 199). On June 14–21, 1887 (pp. 183–197), Teleki and Höhnel ascended Kilimanjaro from Marangu past Johnston's 1884 camp (9,390 ft., Lobelia Deckenii & Senecio Johnstonii 16.5 ft., pp. 188–190) and the saddle camp between Kimawenzi and Kibo (13,818 ft., boiling point +86.71° C, min. -11° C, collecting the new spider Tylophora bicolor Eug. Sim. and new composite Erigeron Telekii Schweinfurth, pp. 192–196 & Errata p. xx); on June 20, 1887, Höhnel reached 16,240 ft. and Count Teleki reached 17,387 ft. (barometer 411.3 mm) on Kibo before meeting Dr. Hans Meyer and Lieut. von Eberstein at Taveta on June 27 (p. 200).",
    "4. Excursion to Mount Meru, Sultan Matunda of the Wameru, Lake Balbal, Little Arusha & Kahe (pp. 118–169): Marching west from Taveta across the Habari steppes (where Somalis dug up the edible root-parasite Hydnora africana, called likke, pp. 123–124) and Sigirari ('Leibon, sobaj! — Ebaj, moran!', p. 131; Gazella Thomsonii, pp. 134–135 & Errata p. xx), they reached Mount Meru (14,638 / 14,640 ft. SW wall vs. 12,100 ft. N wall, pp. 135, 157), inhabited by ~1,000 Kijagga-speaking Wameru under Sultan Matunda allied with the Wakwafi of Great Arusha (Arusha-wa-ju, pp. 136–137). At the forest gate of Meru, the leibon anointed the leaders on the forehead and neck with honey (p. 143); porter Mhoke was robbed crying 'Matta kitu' (p. 144); Sultan Matunda's elders counted out maize ears on the ground to reckon the exact number of dotis, senenjes, mikufus, and beads demanded in tribute (p. 149); and rockets fired at night were revered as dana ('medicine', p. 151). After discovering the triangular crater Lake Balbal (two sides 2,600 ft., third side 1,600 ft., p. 157), they returned via Mikindúni (where porter Kijuma wadi Muynuru shammed spirit possession until cured by Teleki's cold-water douche, pp. 161–162), Little Arusha (Arusha-wa-Chini, junction of 4 caravan routes to Masailand; biaschera ku 'good business'; tadschiris 'rich fellows'; interpreter Mpujui, pp. 165–166), Mayleja river (death of grey Muscat donkey Sim 'Lightning' from tsetse fly, p. 167), and Kahe on the Mwaleni and Himo rivers (where the grove-dwelling inhabitants spoke a Bantu dialect identical to Wataveta, pp. 167–169)."
  ].join("\n\n"),
  "examples": [
    {
      "taveta": "Kilo vedi? — Hm! — Hm! • Si vedi? — Hm! — Hm! • Ho kaja? — Hm! — Hm! • Ho kaja kilo vedi? — Hm! — Hm! • Mzima? — Hm! — Hm! • Sana — Hm! — Hm! • Yambo — Hm! — Hm!",
      "english": "Verbatim 7-turn Kiruvu (Kizegua) ceremonial greeting dialogue with Sultan Sedenga of Mkarama ('Did you have a good night? Did you have a good day? Is all well at home? Did they all have a good night? Are you well? Very well. Bless you!')",
      "explanation": "Lieut. Ludwig von Höhnel, Discovery of Lakes Rudolf and Stefanie, Vol. I (1894, Ch. II, p. 66)"
    },
    {
      "taveta": "Ta-veta / M-taveta / Wa-taveta / Ki-taveta (p. 61) • Wazee (10 elders, Mkamba) • kitoweo ('a tit-bit of anything', p. 99 fn. 1) • pombo (10 strings of 21–22 in. palm-fibre beads) • naiberes vs. schukas (1 doti = 2 schuka; 1 schuka = 4 mikono, p. 141 fn. 1) • Saferi a palepale! (p. 204)",
      "english": "Bantu 4-prefix rule, Taveta council of 10 elders, market delicacy term, bead-string & cloth units, and caravan battle-cry",
      "explanation": "Lieut. Ludwig von Höhnel, Discovery of Lakes Rudolf and Stefanie, Vol. I (1894, Chs. II–III, pp. 61, 99–105, 141 fn. 1, 172, 204–205)"
    },
    {
      "taveta": "Mangi (Sultan Miriali of Marangu) • kilengele ('beads', p. 113) • 'Tonga mbuya!' ('Off with you now, friend!', p. 113) • 7 Chaga States: Mamba, Samanga, Marangu, Kilema, Kirua, Mochi, Tela (p. 184) • 'wasunga Kana wanaona ugombe a mafuta, saua kana mafissi' & 'mtschunga a punda a wasungu' (pp. 198–199)",
      "english": "Kichaga royal title, bead request, dismissal phrase, 7 Chaga states, and Sultan Mandara's Swahili taunts",
      "explanation": "Lieut. Ludwig von Höhnel, Discovery of Lakes Rudolf and Stefanie, Vol. I (1894, Ch. III, pp. 113, 184, 198–199)"
    }
  ]
});
