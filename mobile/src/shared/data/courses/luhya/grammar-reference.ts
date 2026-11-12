// ============================================================
// Luhya (Oluluyia / Luwanga / Luhanga / Lubukusu / Lumasaba / Lulogooli) Grammar Reference Guide
// Based on Public Domain & Peer-Reviewed Linguistic Sources:
// 1. C. W. Hobley (1902) "Eastern Uganda: An Ethnological Survey" (Lu-Wanga & Ketosh/Bukusu grammars & vocabularies)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" (Lunyara, Lukabarasi, Lurimi/Luwanga, Lukonde, Masaba)
// 3. C. W. Hobley (1903) "British East Africa: Anthropological Studies in Kavirondo and Nandi" (JAI Vol. 33, pp. 325–359)
// 4. Rev. J. B. Purvis (1909) "Through Uganda to Mount Elgon" (Lumasaba grammar, noun classes, greetings & 1907 native letter)
// 5. Rev. John Roscoe (1915) "The Northern Bantu" (Bagesu / Lumasaba kinship table, clans & customs)
// 6. Sir Harry H. Johnston (1919) "A Comparative Study of the Bantu and Semi-Bantu Languages" (#5–6a)
// 7. Rev. N. Stam (1929) "The Bahanga" (Catholic Anthropological Conference Vol. I, No. 4 — Public Domain)
// 8. Payne, Pacchiarotti & Bosire eds. (2016) "Diversity in African Languages" (Chs. 9, 11, 12, 15 on Logoori / Luragooli JE41)
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
    title: "The Luhya (Zone J30 / JE41) Dialect Continuum: Luwanga/Luhanga, Lunyara, Lukabarasi, Lubukusu/Lumasaba & Logoori (Hobley 1902, Purvis 1909, Johnston 1919 & Stam 1929)",
    summary: "Oluluyia comprises a continuum of Western Kenyan Bantu varieties documented by Hobley (1902), Purvis (1909), Roscoe (1915), Johnston (1902, 1919), Stam (1929), and modern Logoori studies (2016).",
    content: `As documented in C. W. Hobley (*Eastern Uganda*, 1902, pp. 43–51, 61–88, 92–95), Rev. J. B. Purvis (*Through Uganda to Mount Elgon*, 1909, pp. 265–357), Rev. John Roscoe (*The Northern Bantu*, 1915, pp. 161–196), Sir Harry H. Johnston (*Comparative Study of the Bantu Languages*, 1919, Vol. I, pp. 7, 19, 73–85, 757 & Vol. II, pp. 22–24, 225), and Rev. N. Stam (*The Bahanga*, 1929):
1. **Historical Varieties Recorded in 1902–1929**:
   - **Lu-Wanga / Luhanga (Stam 1929, Hobley 1902, Johnston 1902 *Lurimi* & 1919 *5a. Lu-wanga*)**: Spoken in the Wanga Kingdom (Buhanga) ruled by Nabongo Mumia; uses *okhu-* infinitives and *ekhyi-/evi-* (Class 7/8).
   - **Lu-Nyara (Johnston 1902 & 1919 *5. Lu-nyara*)** & **Lu-Kabarasi (Johnston 1902)**: Spoken in Kakamega/Busia/Lake Victoria north shore.
   - **Ketosh / Lu-Konde / Lu-Masaba (Hobley 1902, Purvis 1909, Roscoe 1915 & Johnston 1902/1919 *6–6a*)**: The Bukusu–Masaba cluster, characterized by double preprefixes (*umu-ndu*, *ba-ba-ndu*, *kumu-bano*, *khu-* infinitive).
   - **Lulogooli / Luragooli (Maragoli, JE41, BFBS 1921 & Payne et al. 2016)**: Southern dialect contrasting *v* where central Luhya has *kh* (*makuva* vs. *amakhuwa* 'words').
2. **Cross-Dialect Lexical Correspondences**:
   - **1st Person Singular ("I / me")**: *esie* (Wanga), *eshie* (Kisa), *ise* (Nyole/Bukusu/Masaba), *inze* (Logoli).
   - **King / Chief**: *omwami (mwami)* / *nabongo* (Stam 1929 & Hobley 1902).
   - **God / Supreme Creator**: *Were* / *Nasayi* (Purvis 1909, p. 296 & Stam 1929, pp. 154, 159–160; Nasayi = 'the one adored' < sayo 'to adore').`,
    examples: [
      { luhya: "esie / eshie / ise / inze", english: "I / me (1st person singular)", explanation: "Wanga/Kisa/Bukusu-Masaba/Logoli pronominal correspondence (Johnston 1902 & Purvis 1909)" },
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
    id: "luhya-hobley-1903-wanga-history-fables-totems",
    title: "C. W. Hobley (1903) Awa-Wanga 12-Generation Royal Genealogy, 8 Animal Fables, Masambwa/Muzimo Altars, 8 Muziro Totems & Customary Law",
    summary: "Hobley's 1903 monograph (JAI Vol. 33, pp. 333–358) records the 12-generation Wanga royal chronicle from Kuau and Wanga to Sundu, Kwehu, Sakwa, and Mumia, 8 Ama-Wanga fables, Sangaro Hill and Siala/Mrumba ancestor altars, Murembe peace covenants, 8 Bantu Kavirondo Muziro totems, livoya tassels, kiketi child naming, and the Isira blood-feud taboo.",
    content: `From C. W. Hobley, *British East Africa: Anthropological Studies in Kavirondo and Nandi* (*Journal of the Anthropological Institute*, Vol. 33, 1903, pp. 333–358):
1. **12-Generation Royal Genealogy & Chronicle of the Awa-Wanga (pp. 333–336)**:
   - **Genealogical Line (p. 336)**: **Kuau** (lived toward Tiriki) → **Wanga** → **Kisesi (or Wawala)** → **Mzui (or Chewi)** → **Msindalo** → **Netia** (and brother **Kiteji**) → **Sundwa** → (a) **Mkoya** → **Sundu** (chief when Joseph Thomson visited in 1884; died c. 1886) → **Mumia**; and (b) **Kwehu** → **Sakwa** (died 1895) → **Tomia** & **Wombani**.
   - **Wanga & Muima at Manga Hill (pp. 333–334)**: Wanga originally lived in **Tsoso** country near the source of the **River Viratsi** beside the Tiriki chief **Wakabiakala**, whose head wife stole bananas from Wanga's plantation and hanged herself in shame. Fleeing Wakabiakala's insults, Wanga hid his royal **brass bracelet** under his cloak and served **Muima**, chief of the **Awa-Manga** on **Manga** hill (4 miles south of Mumias), sweeping the cattle kraal one-handed until Muima's wife spied his brass armlet through a hole bored in his hut wall. Muima made a goat-skin wrist covenant with Wanga, who founded his capital **Shikulu** near the **River Lusimo**.
   - **Netia, Kiteji, Sundwa, Kwehu & Sundu (pp. 334–336)**: Netia reconciled with his brother Kiteji at **Rekho** after Wa-Kwavi raiders slew Kiteji's men, and later strangled 20 Wa-Kwavi inside his hut before dying in battle. His son **Sundwa** (who had 100 sons and grew so stout he had to be carried) compensated his neighbour **Vitonja** by measuring stolen cattle ropes and disinherited his raiding eldest son **Kwehu** (who built **Lumino**) in favour of **Mkoya**. Kwehu settled at **Kimuri** (1½ miles east of Mumias), poisoned Mkoya at a feast, repelled a coalition of **Kabras, Ketosh, and Kusia** with stockpiled sheaves of arrows alongside **Sundu** and **Wakholo of Kagenyi**, left a fist-worn judgment rock at Kimuri, and slaughtered up to 100 oxen daily to buy grain and feed his people during a great famine.
2. **The 8 Ama-Wanga Fables (pp. 337–339)**:
   - (1) *Leopard and Hyæna* (why the leopard caches meat high in a tree fork and drops bones to distract the hyæna); (2) *Rat and Cat* (why the rat dried first after swimming the river and slipped into a rock hole); (3) *Man and Foolish Woman* (the wife who despised short *wimbi* grain and had to climb into her husband's hidden granary with heavy stones tied to her legs); (4) *Buffalo and Lion* (the buffalo that feigned submission and crushed the lion under a fallen tree trunk); (5) *Kite and Mole* (the mother mole who threw earth in the kite's eyes while pretending to pick her least-loved child); (6) *Guinea Fowl and Domestic Chicken* (why the guinea fowl stayed in the bush while fowls are killed in villages); (7) *Ant-bear (Aard-vark) and Hyæna* (how the ant-bear clawed the hyæna to death from its back); (8) *Fight of the Hippopotamus and Elephant* (in Chief Kwehu's reign at a salt lick on the River Nzoia below Mumias, where both beasts killed each other and the place was named **Chikonesi**).
3. **Ghosts, Sumba Island Elves, Bridge Island & Ancestor Altars (`Masambwa` / `Muzimo`, pp. 339–344)**:
   - **Ithako & Awa-Wanga Ghost Laying (pp. 339–340)**: In Ithako, a haunting ghost is laid by a brother burning the undecomposed white corpse and re-interring the ashes (a child of the deceased must be rubbed with fresh sheep fat by a medicine man before eating with the cremator); in Awa-Wanga, a night cattle-thief killed in the act is cremated, and if a mother fails to bear again after a child's death, its bones are dug up, wrapped in banana leaves, and cast into the bush.
   - **Sumba Island & Lusinga Bridge Island (pp. 340–341)**: Off the **Nyala** coast near the Nzoia mouth, granite **Sumba Island** is inhabited by invisible dwarfish elves (**sumba**) propitiated with sacred cattle, pots, tobacco pipes, goats, and beer; NW of Lusinga Island, the twin monoliths of **Bridge Island** (**Wa-Nyama kwa Wa-Ware**) represent two fighting bulls turned to stone where the **Wa-Nyama** and **Wa-Ware** clans sacrifice an ox annually.
   - **Masambwa / Muzimo Altars & Charms (pp. 342–344)**: In **Ketosh**, **Sangaro Hill** (12 miles NE of Mumias) is the seat of the **Masambwa / Muzimo**, and every headman's hut has a 4-stone altar from Sangaro around a wild fig tree (**Mrumba**, Swahili *mlendege*); in **Awa-Wanga**, a 3-stone **Muzimo** altar is planted with a **Siala** (*Markhamia lutea*) or **Mtarawanda** tree (stealing one of the chief's altar stones by night forces immediate restitution of a stolen cow). Inter-tribal peace is ratified beneath the **Murembe** coral tree (*Erythrina tomentosa*, Swahili *Ekirikiti*, *murembe* = 'peace'); killing or seeing a python (**waka**) requires hoeing a path of the snake's length, sacrificing a white fowl with *mtama/wimbi* gruel, and naming the next child **Wanawaka** (boy) or **Newaka** (girl).
4. **The 8 Bantu Kavirondo (`Muziro`) Clan Totems, `Livoya` Tassels, `Kiketi` Naming & `Isira` Taboo (pp. 347–358)**:
   - **8 `Muziro` Totems (p. 347)**: (1) Kisesi of Awa-Wanga: **Imbongo** (bushbuck); (2) Marama, part of Tsoso & Isukha: **Kuru / Ikulu** (waterbuck); (3) Awa-Genya & Awa-Mrashi: **Liusi** (pigeon); (4) Awa-Shekwi of Nyole: **Njofu** (elephant); (5) Ketosh: **Makuyi** (black-and-white locust-eating stork); (6) Tasoni (Ngaki section): **Isunu** (reedbuck); (7) Ithako, E. Tsoso, S. Kabras: **Imbongo / Ngawe** (bushbuck); (8) Kabras: **Mbiakalo** (cooked flying white ants — eaten raw, never cooked).
   - **Rain-Maker Mgahanya, `Livoya`, Naming & `Isira` (pp. 349–358)**: Nyole rain-maker **Mgahanya** traces descent from **Agine (Ashue)** and the rain-witch (**Agine → Luchiri → Namonwa → Mgahanya**); Bantu Kavirondo married women wear the 12-inch black-dyed **livoya** fibre tassel; Awa-Wanga infants are named with a live quail, cowrie, and pale blue **kiketi** bead tied to the right wrist (boy) or left wrist (girl) and lower quail beak on the neck string (e.g. **Mumia**, **Jaksinis**, **Martinis**, **Obilos**); the **Isira** blood-feud taboo forbids eating with a killer's maternal kin; and Awa-Wanga parents of twins observe 20–30 days of seclusion until the husband's brother opens the door.`,
    examples: [
      { luhya: "Kuau → Wanga → Kisesi (Wawala) → Mzui (Chewi) → Msindalo → Netia & Kiteji → Sundwa → Mkoya (→ Sundu → Mumia) & Kwehu (→ Sakwa → Tomia & Wombani)", english: "12-generation royal genealogy of the Awa-Wanga", explanation: "Recorded verbatim by C. W. Hobley (1903, pp. 333–336)" },
      { luhya: "Masambwa / Muzimo: Sangaro & Mrumba (Ketosh) • Siala / Mtarawanda (Awa-Wanga) • Murembe (Ekirikiti) • Waka → Wanawaka (m.) / Newaka (f.)", english: "Ancestral spirit altars (Sangaro Hill & wild fig in Ketosh; 3-stone Siala altar in Wanga) • Peace coral tree • Python rite & birth names", explanation: "Hobley (1903, pp. 342–344)" },
      { luhya: "Muziro 8: Imbongo (Ngawe), Kuru (Ikulu), Liusi, Njofu, Makuyi, Isunu, Mbiakalo • Livoya • Kiketi • Isira", english: "8 Bantu Kavirondo clan totems (bushbuck, waterbuck, pigeon, elephant, stork, reedbuck, cooked flying termites) • Woman's black fibre tassel • Blue naming bead • Blood-feud meal taboo", explanation: "Hobley (1903, pp. 347, 350–353, 357–358)" }
    ]
  },
  {
    id: "luhya-purvis-1909-roscoe-1915-lumasaba",
    title: "Lumasaba / Bukusu-Masaba Double Preprefixes, Salutations, 1907 Native Letter & Kinship System (Purvis 1909 & Roscoe 1915)",
    summary: "Rev. J. B. Purvis (Through Uganda to Mount Elgon, 1909, Chs. XIV–XVII) and Rev. John Roscoe (The Northern Bantu, 1915, Part III) document Lumasaba's archaic CV- preprefixes, conversational greetings, a verbatim 1907 native letter, and the complete Bagesu/Masaba kinship table.",
    content: `From Rev. J. B. Purvis (*Through Uganda to Mount Elgon*, 1909, pp. 265–357) and Rev. John Roscoe (*The Northern Bantu*, 1915, pp. 161–196, 291–293):
1. **Six Lumasaba Double-Prefix Noun Classes & Possessive Concords (Purvis 1909, pp. 346–351)**:
   - **Class I (*umu- / baba-*)**: *umundu → babandu* (person → people); possessive *wase / base* ('my').
   - **Class II (*kumu- / kimi-*)**: *kumubano → kimibano* (knife → knives), *kumusala* (tree/bewitching stick), *kumutikinyi* (morning); possessive *kwase / kyase* ('my').
   - **Class III (*in- / tsin-*)**: *ingafu → tsingafu* (cow → cows), *ingoma* (long festival drum); possessive *yase / tsase* ('my').
   - **Class IV (*kiki- / bibi-*)**: *kikindu → bibindu* (thing → things), *kifuku* (day), *kikosefu* (whiteness/cleanness/holiness); possessive *kyase / byase* ('my').
   - **Class V (*li- / kama-*)**: *libali → kamabali* (stone → stones), *kametsi* (water); possessive *lyase / kase* ('my').
   - **Class VI (*lu- / tsin-*)**: *lugoye → tsingoye* (bark-cloth/string → strings); possessive *lwase / tsase* ('my').
2. **Dialogic Greetings & Verbatim 1907 Lumasaba Letter (Purvis 1909, pp. 276–278, 355)**:
   - **Salutations**: *Mulembe? / Mirembe?* (Peace?), *Ulame?* (Are you well?), *Wena?* (How are you?), *Wagonere oryena?* (How have you slept?) — *Nagonere bulahi, njebewe?* (I have slept well, how about you?), *Bengo baryena?* (How are those at home?) — *Baliyo balwakire* (They are well), *Wabuyire oryena?* (How have you passed the day?) — *Nabuyire bulahi* (I have passed it well), *Nitsya, nule bulahi* (I am going, may I reach safely) — *Nutsye wule bulahi* (Go, may you reach safely), *Nutsye ugona bulahi* (Go and sleep well) — *Ngone bulahi* (May I sleep well).
   - **Verbatim 1907 Letter (p. 355)**: *"Nakuchyesere lugali mulebe wase: Wena? ugona oryena? Ne bimutsu barye? Ubambonere bosi, ni babolera ngana kubabona wangu. Byaweye. Ise wakyo, Nayu."* ("I salute you very much, my brother: How are you? How have you slept? And how are all in the house? See them all for me, and tell them I wish to see them soon. The words are finished. I am yours, Nayu.")
3. **Bagesu / Lumasaba Kinship System (Roscoe 1915, pp. 193–196, 291–293)**:
   - **Parents & Grandparents**: *Papa / Baba* (my father), *So / Sowo* (your father), *Sewe* (his/her father); *Mayi* (my mother), *Nyoko* (your mother), *Ng'ina* (his/her mother); *Kuga* (grandfather, pl. *Bakuga*), *Kukhu* (grandmother, pl. *Bakukhu*).
   - **Uncles, Aunts & Siblings**: *Papa / Baba* (paternal uncle = FB), *Mama* (maternal uncle = MB, pl. *Bamama*), *Senge* (paternal aunt = FZ, pl. *Basenge*), *Mayi* (maternal aunt = MZ); *Wandayase* (sibling / parallel cousin, pl. *Bandayase*), *Mukhwewase* (brother-in-law), *Namwandu* (widow).`,
    examples: [
      { luhya: "umundu wase → babandu base • kumubano kwase → kimibano kyase • libali lyase → kamabali kase", english: "my person → my people • my knife → my knives • my stone → my stones", explanation: "Lumasaba double-prefix concords (Purvis 1909, pp. 346–351)" },
      { luhya: "Wagonere oryena? — Nagonere bulahi, njebewe? • Wabuyire oryena? — Nabuyire bulahi", english: "How have you slept? — I have slept well, how about you? • How have you passed the day? — I have passed it well", explanation: "Lumasaba daily greetings (Purvis 1909, pp. 276–278)" },
      { luhya: "Papa / So / Sewe • Mayi / Nyoko / Ng'ina • Mama (MB) • Senge (FZ)", english: "My/your/his father • My/your/his mother • Maternal uncle • Paternal aunt", explanation: "Bagesu/Lumasaba kinship terms (Roscoe 1915, pp. 291–293)" }
    ]
  },
  {
    id: "luhya-johnston-1919-archaic-preprefixes",
    title: "Archaic Disyllabic Preprefixes (Kumu-/Gumu-, Kimi-/Gimi-, Kama-/Gama-, Gugu-), -boine Preterite & Affirmative -isi/-si Copula (Johnston 1919–1922)",
    summary: "Sir Harry Johnston (1919, Vol. I, pp. 7, 19, 73–85 & 1922, Vol. II, pp. 22–24, 225) demonstrated from #6 Lu-masaba and #6a Lu-konde how Bantu preprefixes and concords originated, alongside unique Sub-group A 5 verbal features.",
    content: `In *A Comparative Study of the Bantu and Semi-Bantu Languages* (Vol. I, 1919, pp. 7, 19, 73–85, 757; Vol. II, 1922, pp. 22–24, 225), Sir Harry H. Johnston analyses Sub-group A 5 (**#5 Lu-nyara, #5a Lu-waṅga / Lu-haṅga / Lu-kabarasi / Lu-rimi, #5b Lu-siṅga, #6 Lu-masaba / 'Ketosh', #6a Lu-konde / 'Muhasa'**):
1. **Solution of the Bantu Preprefix Enigma via West Elgon (#6 Lu-masaba & #6a Lu-konde, Vol. I, pp. 7, 19, 85; Vol. II, pp. 22, 225)**:
   - Preserves full disyllabic preprefix + prefix combinations explaining why Classes 1, 3, 4, and 6 have *gu-, gi-, ga-* concords:
   - **Class 1**: *Omu- / Umu- / Namu-* (concord *umu-, u-, yo-*); **Class 2**: **Baba- / Bana-** (*ba-*, e.g. *baba-ndu* 'people', *bab-ana* 'children'; superimposed honorific **Na- / pl. Bana-**).
   - **Class 3**: **Kumu- / Gumu-** (*kumu-/gumu-, ku-/gu-*, e.g. *kumu-kono* 'arm', *kumu-riro* 'fire', *gumu-ti* 'tree').
   - **Class 4**: **Kimi- / Gimi-** (*kimi-/gimi-, ki-/gi-*, e.g. *kimi-ti* 'trees').
   - **Class 5**: *Li-, Ri-* (Errata p. x), *Di-, Iri-* (*li-, ri-*).
   - **Class 6**: **Kama- / Gama-** (*kama-/gama-, ka-/ga-*, e.g. *kama-lasiri* 'blood', *kama-futa* 'oil', *gama-tu* 'ears').
   - **Classes 7, 8, 11, 14, 15, 18**: **Kiki-** (*kiki-ndu* 'thing'), **Bibi-** (*bibi-ndu* 'things'), **Lulu-** (*lulu-tsi* 'door', *lulu-imbo* 'song'), **Bubu-** (*bubu-iṅgo* 'bow', *bubu-nyasi* 'grass'), **Kuku-** (*kuku-tu* 'ear'), and **Class 18 Augmentative Gugu-** (*Gu-bwa / Gugu-bwa* 'great dog', pl. *Gimi-*).
2. **Preterite in *-ire / -ine*, Affirmative *-isi / -si* Copula & Negation (Vol. II, p. 24 & Vol. I, p. 757)**:
   - **Preterite *-ire* & *-ine***: In *5–5a*, *-ine* fuses with *-bona* ('to see') to form **-boine** ('saw', from *-bonine*).
   - **Affirmative *-isi / -si* ('is / was')**: Alongside *Ni-, -li, -ba, -liṅgye*, and *-du / -ru / -lu*, Sub-group A 5 uses **-isi / -si** *affirmatively* to mean 'is, was' (confirming Bleek's hypothesis on the *-ise* preterite).
   - **Negation**: In *5–5b*, prefix **Si-** (*Si-, So-, Sa-, Siku-, Simu-, Siba-*) and suffixes **-ta, -tawe, -ṅga, -kata** ('neither'), plus negative verbs **-bula** ('to be lacking') and **Oxu-buta** ('to be without', Vol. I, p. 757 Addenda). In *6–6a*, prefix **Hi- / Ha-**, infix **-k'- / -ka-**, and negative infinitive prefix **Bu-**.`,
    examples: [
      { luhya: "Kumu-kono (Gumu-χono) → Kimi-kono (Gama-χono) • Baba-ndu • Kama-lasiri • Gugu-bwa", english: "arm → arms • people • blood • big dog (Class 18 augmentative)", explanation: "Full disyllabic preprefixes in #6 Lu-masaba & #6a Lu-konde (Johnston 1919, Vol. I, p. 85 & Vol. II, p. 22)" },
      { luhya: "-bona → -boine • -isi / -si (affirmative) • Si-...-tawe / Oxu-buta", english: "to see → saw • is/was • not / to be without", explanation: "Inflexional preterite -ine, affirmative -si copula & negation (Johnston 1922, Vol. II, p. 24)" },
      { luhya: "sasaba / sesaba (6), n-safu / mu-safu (7), kumu-rundu (10), li-tondo / li-kana (100), si-zumi (1,000)", english: "6, 7, 10, 100, 1,000", explanation: "Distinctive Sub-group A 5 numerals (Johnston 1919, Vol. I, p. 81 & Vol. II, p. 23)" }
    ]
  },
  {
    id: "luhya-logoori-phonology-tense-quantification-2016",
    title: "Logoori / Luragooli (JE41) Palatalization, 5-Way Future Tense System, Universal Quantifiers (Vuri vs. -oosi) & Anticausative -Vk (Payne et al. 2016)",
    summary: "Four peer-reviewed studies in Diversity in African Languages (2016) document Logoori's 7-vowel phonology and palatalization (Glewwe & Aly), 5 future tense inflections (Sarvasy), universal quantifiers vuri vs. -oosi (Landman), and anticausative -Vk suffixation (Gluckman & Bowler).",
    content: `From *Diversity in African Languages* (ed. Doris L. Payne, Sara Pacchiarotti & Mokaya Bosire, Language Science Press, 2016, Chapters 9, 11, 12, and 15):
1. **Logoori 7-Vowel System, Palatalization & /h/-Plosivization (Glewwe & Aly 2016, Ch. 9, pp. 165–182)**:
   - Contrasts 7 vowels (/i e ɛ a ɔ o u/) with phonemic length.
   - **Coronal & Dorsal/Glottal Palatalization before glide /j/ and high front /i/**: *sj → ʃ*, *n̪ → ɲ* (before /i, u/), *kj → tʃ*, *gj → dʒ*, *hj → ʃ*, and *h → ʃ / _i* (e.g., Class 7 *ke-hia → keʃa* 'new').
   - **Post-Nasal /h/-Plosivization (*h → b / N_*) & Nasal Deletion before Sibilants**: *o-handek-aa* ('you write') vs. *N-handek-aa → mbandekaa* ('I write'); Class 9 *eN-hia → embja* ('new'); *N-sɔm-aa → sɔmaa* ('I am reading').
2. **Five Distinct Positive Future Inflections in Logoori (Sarvasy 2016, Ch. 11, pp. 201–224)**:
   - **(1) Near / General Future (*SP-ra-...-a*)**: Hodiernal and crastinal future, e.g. *Mugamba, a-ra-zj-a mʊ ɪ-skuru* ('Tomorrow s/he will go to school'), *V-oosi va-ra-ɲor-a ɪ-taʤi* ('All will find a crown').
   - **(2) Middle Future (*na-SP-...-e*)**: Post-crastinal events after tomorrow, e.g. *Na-kʊ-sjaj-e Majki w-etu ma-uwa* ('We will award our Mike flowers').
   - **(3) Remote Future (*SP-raka-...-e* / *SP-aaka-...-e*)**: Distant or contingent future, e.g. *Mu-kana mu-rara neva a-raka-ataɲ-e kʊ ɪ-sjoŋgo...* ('If one girl should drop her waterpot...').
   - **(4) Long-Vowel Remote Future (*naa-SP-...-e*)**: *Naa-a-kor-e ɪ-gaasi* ('S/he will do work at a later date').
   - **(5) Indefinite / Uncertain Future (*SP-ri-...-a*, primarily negated)**: *Si va-ri-ɲar-a mba* ('They will not be able to [at any time]').
3. **Distributive *vuri* ('every') vs. Non-Distributive *-oosi* ('all/whole') (Landman 2016, Ch. 12, pp. 225–242)**:
   - **vuri** ('every/each') is an invariant pre-nominal D-quantifier taking singular nouns without preprefixes (*vuri muundu a-syeev-i* 'Every person danced', *soom-i vuri ki-tabu* 'I read every book').
   - **-oosi** ('all/whole/any') is a post-nominal agreeing modifier taking full noun-class concord (Cl.1 *woosi*, Cl.2 *voosi*, Cl.3 *gwoosi*, Cl.4 *joosi*, Cl.5 *rioosi*, Cl.6 *goosi*, Cl.7 *choosi*, Cl.8 *vyoosi*, Cl.9 *yoosi*, Cl.10 *zyoosi*; e.g., *vaandu v-oosi va-syeev-i* 'All the people danced').
4. **Anticausative *-Vk* (*-ek/-ik/-ok/-uk*) Alternation (Gluckman & Bowler 2016, Ch. 15, pp. 291–312)**:
   - Detransitivizes causative verbs into telic anticausatives that license oblique causers (*kutorona na imboza* 'from the wind') while rejecting agentive by-phrases: *kuhana* ('to close [tr.]') → **kuhanika** ('to close [intr.]', *muriaŋgo gu-han-ik-i* 'the door closed'), *kwoneka* ('to be destroyed'), *kubameka* ('to be flattened'), *kuzuganyika* ('to be mixed'), *kwomeka* ('to dry').`,
    examples: [
      { luhya: "ohandekaa → mbandekaa • ke-hia → keʃa vs. eN-hia → embja", english: "you write → I write • new (Class 7) vs. new (Class 9)", explanation: "Logoori post-nasal /h/-plosivization (h → b / N_) and palatalization (Glewwe & Aly 2016, pp. 168–174)" },
      { luhya: "a-ra-zj-a (Near) • na-kʊ-sjaj-e (Middle) • a-raka-ataɲ-e (Remote) • naa-a-kor-e (Long-vowel Remote)", english: "s/he will go (soon) • we will award (after tomorrow) • s/he will drop (distant) • s/he will work (later)", explanation: "Logoori 5-way future tense system (Sarvasy 2016, pp. 203–218)" },
      { luhya: "vuri muundu a-syeev-i vs. vaandu v-oosi va-syeev-i • muriaŋgo gu-han-ik-i kutorona na imboza", english: "Every person danced vs. All the people danced • The door closed from the wind", explanation: "Universal quantifiers vuri vs. -oosi (Landman 2016) & anticausative -Vk (Gluckman & Bowler 2016)" }
    ]
  },
  {
    "id": "luhya-public-domain-dataset-synthesis",
    "title": "Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Luhya (Luyia))",
    "summary": "Synthesizes phonological correspondences, morphological patterns, and lexical roots across the newly integrated public-domain monographs and open-web datasets for Luhya (Luyia).",
    "content": "1. **Archival & Open-Dataset Integration for Luhya (Luyia)**:\n   - Combines primary historical documentation (Johnston 1902/1919, Hobley 1902/1903, Purvis 1909, Roscoe 1915, BFBS 1921, Stam 1929, Payne et al. 2016) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).\n2. **Phonetic & Orthographic Normalization**:\n   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *o, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    "examples": [
      {
        "luhya": "Omwana wange • Ndzidza",
        "english": "My child • I come",
        "explanation": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukonde / Masaba)"
      },
      {
        "luhya": "Ndu • Tawi",
        "english": "I am • No, not",
        "explanation": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Lukabarasi / Luwanga / Lunyara)"
      }
    ]
  }
  ,
  {
    id: "luhya-hobley-1902-eastern-uganda-ethnology-grammar",
    title: "C. W. Hobley (1902) Eastern Uganda: Bantu Kavirondo Architecture (Figs. 1–6), Kisesa Burial at Mutungu, Bride-Price Calf-Return Law, 20 Tribal/Clan Registries, 7 Noun Classes, Verb Paradigms & Nyamwezi Comparison",
    summary: "Hobley's 1902 monograph (Anthropological Institute Occasional Papers No. 1, pp. 7–25, 43–51, 61–88, 92–95) provides the earliest comprehensive ethnological, architectural, clan-genealogical, and grammatical survey of the Bantu Kavirondo (Awa-Rimi / Lu-Wanga, Ketosh / Masawa, and Lusinga / Chula).",
    content: `From C. W. Hobley, Assoc. M.Inst.C.E. (*Eastern Uganda: An Ethnological Survey*, Anthropological Institute Occasional Papers No. 1, London, 1902, pp. 7–25, 43–51, 61–88, 92–95):
1. **Architecture, Fireplaces No. 1 & No. 2, Iron Smelting, Bellows & Musical Instruments (Ch. II, pp. 14–20, Figs. 1–6, 10)**:
   - **Hut Plan (Fig. 1, p. 15)**: Round huts (15–20 ft diameter, 5 ft walls) with **Fireplace No. 1** (cooking, where visitors sit) and **Fireplace No. 2** (sleeping, strictly forbidden to sons-in-law and daughters-in-law during the householder's lifetime; transgressors must sacrifice a goat, wear strips of its skin, and smear dung on their chests).
   - **Implements & Crafts (Figs. 2–3, 5–6, 10)**: Three stool patterns (Pattern No. 3 in Kakumega), 18-inch heart-shaped iron hoes forged in **Samia, Ketosh, and Kikelelwa**, double-chamber wooden log bellows with 4-ft sticks and clay tuyere (Fig. 5), earthenware saucer lamp for semsem oil at Mumia's (Fig. 6), 7-string harp, Nile monitor-skin drum, and women's reed hand-harp **Makatta** (Fig. 10).
2. **Kisesa Burial at Mutungu, Bride-Price, Calves-Return Law, Ordeal (`Chilulu`) & Divination (`Fig. 7`, pp. 16–25)**:
   - **Mutungu Bone Re-Burial (p. 17)**: Kisesa chiefs are buried sitting inside a hut with a cooking pot over the head above ground; after decomposition the head is buried nearby, and a few years later the bones are exhumed, wrapped in a raw ox-hide, and re-buried at **Mutungu** on the Ketosh border (originated by **Chief Sundwa**).
   - **Marriage & Calf-Return Law (pp. 18–19)**: Awa-Wanga minimum bride-price is **40 jembes, 20 goats, and 1 cow** (**Chief Mumia** paid **15 cows** plus hoes and goats for **Chief Tindi**'s daughter). In **Nyole, Lakoli, Ithako, and Isukha**, **all calves borne by the bride-price cows must be returned to the son-in-law** (and his children) until the original cows die.
   - **Healers (`Mfumo`), Witchcraft (`Mufira`), Ordeal (`Chilulu`), 3-Heap Entrail Divination (`Fig. 7`) & Rainmakers (pp. 21–24)**: Medicine women (**Mfumo**), harmless witchcraft (**Mufira**), the **Chilulu** 20-yard staring ordeal, 3-heap small-intestine divination (**A** = visitors, **B** = country, **C** = host/chief), rainmakers **Luta** (Marama) and **Mgahanya** son of **Ligiri** (Nyole), pleurisy chest-piercing surgery, and the **Marama** ancestral back door.
3. **Complete 1902 Registry of 20 Bantu Kavirondo Tribes, Clans & Chiefs (Ch. V § 1, pp. 43–51)**:
   - **Awa-Wanga** (9 clans: *Awa-Kisesi, Korwi, Leka, Mwima, Chikao, Nasheni, Kana/Kami, Korwewa Mari, Kolui*; genealogy **Netia → Chewi → Sundwa → Kwehu [→ Sakwa → Tomia] & Mkoya [→ Sundu → Mumia]**; Netia's Manga ox-hump chronicle), **Awa-Ketosh / Masawa** (11 clans incl. *Awa-Tasoni*), **Awa-Kamuni**, **Awa-Kisa** (4 clans), **Awa-Marama** (6 clans), **Awa-Nyole** (7 clans), **Awa-Nyala** (6 clans), **Awa-Samia / Mrashi / Sheshi / Tawana**, **Awa-Tindi / Khaiyo** (10 sons of Tindi), **Awa-Kikelelwa / Lewi**, **Awa-Kabras** (6 clans), **Awa-Wewanda**, **Awa-Tsoso** (6 clans), **Awa-Isukha** (11 clans) & **Awa-Idhako / Ithako** (8 clans) [= **Kakumega**], **Awa-Tiriki** (4 clans), **Awa-Lakoli / Maragoli** (*Awa-Mawe* & *Awa-Kirima*) & **Awa-Kisungu** (4 clans), **Awa-Mangali**, **Awa-Muteti**, **Awa-Dongoi**, **Awa-Ware / Wa-Chula** (8 clans on Lusinga & Lufangano), and **Awa-Kisingiri** (salt-chief **Wambogo**).
4. **Seven Lu-Wanga Noun Classes, Verb Conjugations & Nyamwezi Comparison (Ch. VI, pp. 85–88)**:
   - **7 Noun Classes (p. 86)**: **I.** *m-/mw- → awa-* (*mundu → awantu*, *mwami → awami*); **II.** *mu-/umu- → mi-/imi-* (*muwano → miwano*, *umurui → imirui*); **III.** *n-/in- → n-/in-* (*inzuki, inzala*); **IV.** *ch-/tzi- → ivi-/vi-/ifi-* (*chirifu → virifu*); **V.** *li- → ma-/ama-* (*lisika → amasika*, *lilemwa → maremwa*); **VI.** *lu-/olu- → zin-* (*luimbo → ziniimbo*, *oluala → zinzala*); **VII.** *i- → zi-/tzi-* (*inzu → tzinzu*).
   - **Verb Paradigms (p. 85)**: **okwidza / ku-widza** ('to come': Pres. *nzidza, widza, iedza, twidza, inyu mwidza, wedza*; Fut. *nanzidze...*; Past *ndalimwidziri*; Neg. *sinanzidza*) and **okwenya** ('to want': Pres. *nienya, wenya, inyenya, twenya/kwenya, inyumwenya, awawenya*; Fut. *nanyenyi*; Past *nenya / nalienyiri*; Neg. *sinyienya*).
   - **Lu-Nyamwezi vs. Lu-Wanga Comparison (pp. 87–88)**: Compares Classes I–VII, *ndwiza* vs. *nzidza*, and pronouns *nene/wenyeni, wewe/ewe, uwe/iye, iswe/efue, imwe/enyue, awo/awa(no)*.`,
    examples: [
      { luhya: "Cl. I mundu → awantu • Cl. II umurui → imirui • Cl. IV chirifu → virifu • Cl. V lilemwa → maremwa • Cl. VI oluala → zinzala • Cl. VII inzu → tzinzu", english: "person → people • head → heads • breast → breasts • plantain → plantains • finger → fingers • house → houses", explanation: "Hobley's (1902, p. 86) 7 Noun Plural Classes of Lu-Wanga" },
      { luhya: "nzidza, widza, iedza, twidza, inyu mwidza, wedza • nanzidze • ndalimwidziri • sinanzidza", english: "I, thou, he, we, ye, they come • I shall come • I came • I come not", explanation: "Conjugation of okwidza ('to come') in Hobley (1902, p. 85)" },
      { luhya: "Mutungu (Sundwa) • Mfumo & Mufira • Chilulu • Makatta • Luta & Mgahanya (Ligiri)", english: "Kisesa royal bone re-burial site • Medicine woman & harmless wizard • 20-yard staring ordeal • Women's reed harp • Rainmakers of Marama & Nyole", explanation: "Hobley (1902, Ch. II, pp. 17, 20–23)" }
    ]
  }
];
