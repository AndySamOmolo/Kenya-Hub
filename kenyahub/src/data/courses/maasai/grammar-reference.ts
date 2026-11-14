import type { GrammarSection } from "../types";

// ============================================================
// Maasai (ɔl Maa) Grammar Reference Sections
// Declarative modular grammar reference (audit-ready, zero runtime mutations)
// ============================================================

export const MAASAI_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    "id": "maasai-phonology-tone",
    "title": "1. Phonology, Alphabet, Post-Nasal Consonant Mutation & Tone (Hollis 1905, pp. 1–8)",
    "summary": "Classical ɔl Maa vowels (close vs. open ē/ō and nasal î/û), diphthongs, consonants, post-nasal voicing (k→g, t/s→d, p→b, sh→j, w→b), euphonic insertion (a, e, l), and grammatical tone.",
    "content": "1. **Vowels, Diphthongs & Consonants (pp. 1–4)**:\n   - Hollis (1905, pp. 1–4) records five cardinal vowels (`a, e, i, o, u`), distinguishing close `e, o` from open `ē, ō` (marked with a line above) and nasalized `î, û` (marked with a circumflex, as in `kîa` or `mûa`, 'he is dead'), plus nine diphthongs (`ai, au, ei, oi, ou, ua, ue, ui, uo`). Consonants include `b, d, g (gh), j, k, l, m, n, ny, ng (ṅg as in finger), ñg (ṅ as in singing), p, ṗ (explosive between p and b), r, rr (trilled), s, sh, t, w, y`, and `c/ch` (used only in `chomba`). When the article `ol-` precedes `s, t, n, l, y, r` (and `k` before `a, o, u`), the `l` is dropped or assimilated in rapid speech and marked by an apostrophe (e.g., `'l-omon`, 'the news'; `'sirkon`, 'the donkeys').\n2. **Change of Consonants After N or M & Euphonic Insertion (pp. 5–7)**:\n   - Hard consonants cannot stand immediately after the feminine prefix `en-`/`in-` or `em-`/`im-` (or first-person plural prefix `ki-` followed by nasal). They undergo regular post-nasal voicing (Hollis 1905, pp. 5–6): `k → g` (`ol-kine` 'castrated goat' → `en-gine` 'she-goat'; `a-keju` 'my leg' → `en-geju` 'the leg'), `t → d` (`ol-tuli` 'buttock' → `en-duli` 'little buttock'; `a-tareto` 'I helped' → `aa-dareto` 'I helped thee'), `s → d` (`o-sero` 'forest' → `en-dero` 'little forest'), `p → b` (`ol-purkel` 'dry steppes' → `em-burkel` 'little dry steppes'), `sh → j` (`ol-chani` 'big tree' → `en-jani` 'small tree'), and `w → b` (`e-waso` 'river' → `em-baso` 'small river' or `em-barta` 'horse'). Additionally, `a`, `e`, or `l` is often inserted between prefix and stem for euphony (pp. 6–7).\n3. **Intonation & Accentuation: Case and Tense by Tone (pp. 7–8)**:\n   - Maasai is a tonal VSO language in which pitch and stress distinguish both grammatical case (Nominative Subject vs. Accusative Object) and verbal tense (Present vs. Past, Hollis 1905, pp. 7–8). In nouns, the accent shifts between Nominative and Accusative (`ol-tuñgáni` Nominative vs. `ol-túñgani` Accusative). In verbs, present forms carry initial stress (`á-suj` 'I follow', `í-suj` 'thou followest'), whereas past forms shift stress to the root (`a-súj` 'I followed', `i-súj` 'thou followedst').",
    "examples": [
      {
        "maasai": "ol-kila → 'l-kilani",
        "english": "the garment → the garments (Hollis 1905, p. 3)",
        "explanation": "Vowels, Diphthongs & Consonants (pp. 1–4)"
      },
      {
        "maasai": "en-giteñg → 'n-gishu",
        "english": "the cow → the cattle (Hollis 1905, p. 4)",
        "explanation": "Vowels, Diphthongs & Consonants (pp. 1–4)"
      },
      {
        "maasai": "ol-osowuan / ol-osowan",
        "english": "the buffalo (w dropped as in 'l-osowani, p. 3)",
        "explanation": "Vowels, Diphthongs & Consonants (pp. 1–4)"
      },
      {
        "maasai": "ol-kine → en-gine • ol-chani → en-jani",
        "english": "castrated goat → she-goat (`k→g`); big tree → small tree (`ch/sh→j`, p. 5)",
        "explanation": "Change of Consonants After N or M & Euphonic Insertion (pp. 5–7)"
      },
      {
        "maasai": "o-sero → en-dero • e-waso → em-baso",
        "english": "forest → little forest (`s→d`); river → little river (`w→b`, p. 5)",
        "explanation": "Change of Consonants After N or M & Euphonic Insertion (pp. 5–7)"
      },
      {
        "maasai": "Ol-le-'l-masi (for Ol-lo-'l-masi) • Ol-a-maoi (for Ol-maoi)",
        "english": "euphonic insertion of `l` and `a` (Hollis 1905, pp. 6–7)",
        "explanation": "Change of Consonants After N or M & Euphonic Insertion (pp. 5–7)"
      },
      {
        "maasai": "E-dol ol-tuñgáni en-giteñg.",
        "english": "The man (Nom. `ol-tuñgáni`) sees the cow (Acc., Hollis 1905, p. 8).",
        "explanation": "Intonation & Accentuation: Case and Tense by Tone (pp. 7–8)"
      },
      {
        "maasai": "E-dol ol-túñgani en-giteñg.",
        "english": "The cow (Nom.) sees the man (Acc. `ol-túñgani`, Hollis 1905, p. 8).",
        "explanation": "Intonation & Accentuation: Case and Tense by Tone (pp. 7–8)"
      },
      {
        "maasai": "Á-suj (pres.) vs. A-súj (past)",
        "english": "I follow / I am following vs. I followed (Hollis 1905, p. 8).",
        "explanation": "Intonation & Accentuation: Case and Tense by Tone (pp. 7–8)"
      }
    ]
  },
  {
    "id": "maasai-gender-articles",
    "title": "2. Gender Prefixes, Definite Articles & Compound Relative Articles (Hollis 1905, pp. 9–17)",
    "summary": "Masculine (ol-/o-, pl. il-/i-) for strength and size, feminine (eng-/en-/em-/e-, pl. ing-/in-/im-/i-) for smallness or weakness, neuter e-weji ('place'), vocatives, and compound genitive articles.",
    "content": "1. **Masculine, Feminine & Neuter Articles (pp. 9–13)**:\n   - Substantives in Maasai are masculine, feminine, or (in one word only) neuter (Hollis 1905, pp. 9–10). Masculine gender signifies what is big, strong, or coarse (`ol-` or `o-` before `s, r, l, y`; `el-` before `l`; plural `il-` or `i-`). Feminine gender signifies what is small, weak, or delicate (`eng-` before vowels/`k`/`g`/`y`, `en-` before `d`/`j`, `em-` before `b`, `e-` before `s, sh, r, l, m, n, ny, p, t, w`; plural `ing-`, `in-`, `im-`, `i-`). Many roots take either prefix according to size or sex (`ol-ayoni` 'big boy' vs. `eng-ayoni` 'small boy'; `ol-donyo` 'mountain' vs. `en-donyo` 'hill'; `ol-ker` 'wether/castrated sheep', `ol-mergesh` 'ram', `en-ger` 'ewe'). Only one noun is neuter: `e-weji` (pl. `i-wejitin`), 'the place'.\n2. **Vocative Particles & Compound Relative/Genitive Articles (pp. 12–17)**:\n   - In the vocative case (p. 12), the article is replaced by `lo` (or `li` before a vowel) for masculine singular and plural (`Lo murani!` 'O warrior!', `Li akwiak!` 'O grandsires!') and `na` for feminine singular and plural (`Na dito!` 'O girl!', `Na doiye!` 'O girls!'). Compound articles combine the gender article with the genitive particle (`ol-le-` / `ol-lo-`, fem. `en-e-`, pl. `il-le-` / `il-loo-`, fem. pl. `in-e-` / `in-oo-`) to mean 'he of / she of / that of' (`Ol-le-Mweiya` 'the son of Mweiya'; `Ol-lo-'l-ponti` 'that of the pumpkin = the snail'; `En-e-'n-aunir` 'that of the stake = the forest devil', pp. 13–17).",
    "examples": [
      {
        "maasai": "ol-ayoni (pl. il-ayiok) vs. eng-ayoni (pl. ing-ayiok)",
        "english": "the big/overgrown boy vs. the small boy (Hollis 1905, p. 9)",
        "explanation": "Masculine, Feminine & Neuter Articles (pp. 9–13)"
      },
      {
        "maasai": "ol-donyo (mountain) vs. en-donyo (hill)",
        "english": "masculine augmentative vs. feminine diminutive (Hollis 1905, p. 9)",
        "explanation": "Masculine, Feminine & Neuter Articles (pp. 9–13)"
      },
      {
        "maasai": "ol-kine (wether-goat), ol-oro (he-goat), en-gine (she-goat)",
        "english": "gender and sex distinctions in livestock (Hollis 1905, p. 9)",
        "explanation": "Masculine, Feminine & Neuter Articles (pp. 9–13)"
      },
      {
        "maasai": "e-weji (pl. i-wejitin) — ene-weji / nene-wejitin",
        "english": "the place (pl. the places) — the only neuter noun in Maasai (Hollis 1905, pp. 10, 48)",
        "explanation": "Masculine, Feminine & Neuter Articles (pp. 9–13)"
      },
      {
        "maasai": "Lo murani! (pl. Lo muran!) • Na dito! (pl. Na doiye!)",
        "english": "O warrior! (pl. O warriors!) • O girl! (pl. O girls!, Hollis 1905, p. 12)",
        "explanation": "Vocative Particles & Compound Relative/Genitive Articles (pp. 12–17)"
      },
      {
        "maasai": "Ol-le-Mweiya • En-e-Mweiya",
        "english": "son of Mweiya • daughter of Mweiya (Hollis 1905, p. 14)",
        "explanation": "Vocative Particles & Compound Relative/Genitive Articles (pp. 12–17)"
      },
      {
        "maasai": "e-ne-tim (pl. i-nee-tim)",
        "english": "the place of the forest / monkey (compound locative article, p. 16)",
        "explanation": "Vocative Particles & Compound Relative/Genitive Articles (pp. 12–17)"
      }
    ]
  },
  {
    "id": "maasai-noun-classes",
    "title": "3. Substantives: Hollis's Six Plural Classes (Hollis 1905, pp. 18–34)",
    "summary": "Complete classification of Maasai substantives into Hollis's exact six plural classes (Classes I–VI, pp. 18–34), including all exception subclasses, finger names, ethnonyms, and irregulars.",
    "content": "1. **Class I: Singular Ends in a Consonant; Plural Affixes -i (with Exceptions A: -in, B: -t + -a/-o, C: -a/-o, pp. 19–21)**:\n   - In Class I (Hollis 1905, pp. 19–21), the singular ends in a consonant and the regular plural adds `-i`: `e-mulug → i-mulugi` (hollow), `ol-kuruk → il-kuruki` (crow), `ol-osowan → il-osowani` (buffalo), `eng-oloñg → ing-oloñgi` (sun/day), `en-gidoñg → in-gidoñgi` (quiver/divination gourd), `e-muny → i-munyi` (rhinoceros), `ol-oip → il-oipi` (shade), `en-dap → in-dapi` (palm of hand), `ol-poror → il-porori` (age), `e-makat → i-makati` (soda/salt). Exceptions: (A) adding `-in` (`ol-kaldes → il-kaldesin` monkey, `en-domes → il-domesin` camel, `en-gias → in-giasin` work, `ol-kinyañg → il-kinyañgin` crocodile, `en-derash → in-derashin` jackal, `o-eñgat → i-eñgatin` wildebeest, `e-ruat → i-ruatin` bed); (B) nouns in `-t` adding `-a` (`en-aret → in-areta` weapon, `ol-choruet → il-chorueta` friend, `ol-lañget → il-lañgeta` bridge, `e-remēt → i-remēta` spear, `ol-tulet → il-tuleta` gourd) or `-o` (`en-derit → in-derito` dust, `e-murt → i-murto` neck, `o-soit → i-soito` stone); (C) other consonant stems adding `-a` or `-o` (`ol-alem → il-alema` sword, `en-gerr → in-gerra` sheep, `ol-ñgejep → il-ñgejepa` tongue, `ol-bitir → il-bitiro` wart-hog, `ol-ñgatuny → il-ñgatunyo` lion, `ol-gos → il-goso` throat).\n2. **Class II: Singular Ends in a Vowel; Plural Adds -n (with Exceptions A–D, pp. 21–25)**:\n   - In Class II (Hollis 1905, pp. 21–25), the singular ends in a vowel (`a, e, i, o, u` or diphthong) and the regular plural adds `-n`: `o-singa → i-singan` (slave), `en-gurma → in-gurman` (flour/garden), `ol-orere → il-oreren` (people), `ol-ari → il-arin` (rainy season/year), `e-siangiki → i-siangikin` (young married woman), `ol-toilo → il-toilon` (voice), `ol-osho → il-oshon` (plateau/district), `ol-kumbau → il-kumbaun` (tobacco), `em-barta → im-bartan` (horse), `en-gitojo → in-gitojon` (hare), `ol-maalo → il-maalon` (kudu). Exceptions: (A) adding `-i`, `-ni`, or `-in` (`o-sirua → i-siruai` eland, `el-loñgo → il-loñgoi` shield, `o-sero → i-seroi` forest, `en-aiposha → in-aiposhani` lake, `ol-kila → il-kilani` garment, `ol-mesera → il-meserani` baobab, `ol-dia → il-diain` dog); (B) changing `-i` to `-n`/`-ni` (`e-sidai → i-sidan` ostrich, `ol-tarakwai → il-tarakwan` juniper); (C) changing `-i` to `-o`/`-to` (`ol-moti → il-motio` pot/pipe, `ol-kunoni → il-kunono` smith, `ol-choni → il-chonito/il-onito` skin, `ol-pukuri → il-pukurto` milk-gourd); (D) suffixes `-ra, -ta, -a, -ite, -ito, -shi/-ishi/-shin, -tin/-itin` (`ol-alashe → il-alashera` brother, `eng-anashe → ing-anashera` sister, `o-sarge → i-sargeta` blood, `ol-ngojine → il-ngojinia` hyena, `ol-lee → il-lewa` man/male, `eng-añg → ing-añgite` kraal, `ol-oirien → il-oirienito` wild olive, `ol-oitigo → il-oitigoshi` zebra, `ol-origha → il-orighaishi` stool, `eng-aï → ing-aïtin` God/sky/rain, `ol-aṗa → il-aṗaitin` moon/month vs. `il-aṗai` mushrooms, `ol-goo → il-goon/il-goite` chest, from which Mount Elgon is named `Ol-doinyo loo-'l-goon` 'Mountain of the Chests', p. 25 fn. 2).\n3. **Class III: Plural in -k (-k, -ak, -ek, -ok) — Callings/Agentives, Body Parts & Other Nouns (pp. 26–27)**:\n   - In Class III (Hollis 1905, pp. 26–27), the plural ends in `-k` (`-k, -ak, -ek, -ok`): (a) Nouns denoting state or calling (including verbal agentives in `ol-a-...-ni → il-a-...-k`): `ol-tuñgani → il-tuñganak` (person/people), `ol-moruo → il-moruak` (old man/husband), `e-ñgoroyoni → i-ñgoroyok` (woman/wife), `ol-akwi → il-akwiak` (grandfather/ancestors), `en-gitok → in-gituak` (woman), `ol-aputani → il-aputak` (relative-in-law), `ol-aitoriani → il-aitoriak` (lord/ruler), `ol-aigwenani → il-aigwenak` (counsellor/spokesman), `ol-oiboni → il-oibonok` (medicine-man), `ol-aisinani → il-aisinak` (poor man), `ol-airitani → il-airitak` (herdsman), `en-domono → in-domonok` (mother after childbirth); (b) Parts of the body: `ol-kimojino → il-kimojik` (finger/toe — with the 5 fingers on p. 26 fn. 1: thumb `ol-moruo`, index `ol-okod-ingishu` or `ol-oju-le-'n-gorio`, middle `ol-kimojino oado`, ring `ol-oti-le-'n-gorio`, little `ol-oti-lo-'l-kimojik`), `eng-aina → ing-aik` (arm/hand), `en-geju → in-gejek` (foot/leg), `ol-keju → il-kejek` (river), `ol-oito → il-oik` (bone), `e-mouo → i-mowarak` (horn), `eng-oñgu → ing-onyek` (eye); (c) Other nouns: `ol-oiñgoni → il-oiñgok` (bull), `eng-aji → ing-ajijik` (hut), `em-beneiyo → im-benek` (leaf), `ol-ñganaiyoi → il-ñganaiyok` (fruit), `ol-owaru → il-owarak` (beast of prey), `e-modioi → i-modiok` (cow-dung), `eng-are → ing-ariak` (water/stream).\n4. **Class IV: Collective Plurals Forming Singular by Adding -i or -ni (Tribes, Communities, Insects & Objects, pp. 27–30)**:\n   - In Class IV (Hollis 1905, pp. 27–30), the plural is the primary collective stem and the singular is formed by adding `-i` or `-ni`: (a) Tribes and races: `Il-Ashumba → Ol-Ashumbai` (Swahili), `Il-Teñgwal → Ol-Teñgwali` (Nandi), `Il-Keyu → Ol-Keyuni` (Elgeyo), `Il-Uasin-gishu`, `Il-Kume / Il-Turkana`, `Il-Kamasya`, `Il-Kakesan / Il-Lumbwa` (Lumbwa/Kipsigis), `'L-Oikoṗ / Il-Lumbwa / 'L-Oogol-ala` (agricultural Masai), `Il-Kapirondo` (Kavirondo), `Il-Kokoyo` (Kikuyu), `Il-Tupeita` (Taveta), `Il-Mosiro / Il-Kilema` (Chaga), `I-Suk` (Pokot), `Il-Torobo → Ol-Toroboni` (Dorobo); (b) Communities: `in-gera → en-gerai` (children → child), `i-sipolio → o-sipolioi` (initiated candidates), `il-barnot → ol-barnoti` (shaved young warriors), `il-muran → ol-murani` (warriors → warrior), `il-meek → ol-meeki` (non-Masai/Bantu), `il-omon → ol-omoni` (strangers/news); (c) Insects, birds & small animals: `ing-alao → eng-alaoni` (ants), `in-darget → en-dargeti` (grasshoppers), `in-daritik → en-daritiki` (small birds), `in-dero → en-deroni` (rats), `il-kuru → ol-kurui` (worms), `il-lashe → el-lashei` (calves/lice), `il-otorok → ol-otoroki` (bees), `il-ojoñga → ol-ojoñgani` (flies), `ing-ojoñga → eng-ojoñgani` (mosquitoes), `i-samburumbur → o-samburumburi` (butterflies); (d) Collective objects: `il-ala → ol-alai` (teeth), `il-keko → ol-kekoi` (charcoal), `il-kiyo → ol-kiyoi` (tears), `il-mao → ol-maoi` (twins), `il-meneñga → ol-meneñgai` (corpses/ghosts), `i-mosor → e-mosori` (eggs), `il-paek → ol-paeki` (maize), `i-seghera → e-segherai` (cowries), `i-seghenge → e-seghengei` (iron wire). Exceptions: `Il-Maasae → Ol-Maasani` (original `Il-Maa → Ol-Maï`, cf. `'sae / 'saen → o-saeni` beads, p. 29 fn. 1), `Il-Aisungun / Il-Musungu → Ol-Aisunguni` (Europeans, formerly `'L-ojuju` 'the hairy ones' and `'L-Ailungun`), `Il-Chumari / I-Sigiriaishi` (Somali), `il-munyo → ol-munyei` (beard).\n5. **Class V (Singular Adds -a or -o to Plural) & Class VI (Invariable, Plural-Only, Suppletive & Compounds, pp. 30–34)**:\n   - In Class V (Hollis 1905, pp. 30–31), the singular is formed from the collective plural by adding `-a` or `-o` (including verbal nouns): `in-duat → en-duata` (visions), `i-manyat → e-manyata` (warrior kraals), `i-sirat → e-sirata` (paintings/shield designs), `il-akir → ol-akira` (stars → star), `añgat → añgata` (plains → plain), `ing-arn → eng-arna` (names → name), `in-daghol → en-daghola` (beads → bead), `il-kurt → ol-kurto` (caterpillars), `il-lughuny → el-lughunya` (heads → head), `ing-opir → eng-opiro` (feathers → feather), `il-papit → ol-papita` (hairs → hair); exceptions: `in-guñg → en-guñgu` (knees → knee), `il-ki → ol-kina` (breasts → breast), `in-guk → en-gukuo` (charcoal). Class VI (pp. 32–34) comprises: (a) Invariable nouns (`ol-doinyo` mountain, `eng-oitoi` road, `o-riri` white ant, `o-rorei` word, `ol-tuli` buttock); (b) Singular-only abstracts (`en-dalisho` folly); (c) Plural-only liquids/collectives (`in-dare` sheep & goats, `kulle/alle` milk, `in-gulak` urine, `i-motori` soup, `ing-amulak` spittle); (d) Suppletive/Irregular plurals (`en-giteng → in-gishu` cow → cattle, `ol-kiteng → il-mongi` ox → oxen, `o-sighiria → i-sirkon` donkey → donkeys, `en-dito → in-doiye` girl → girls, `en-gop → in-gwapi` earth/land → lands, `ol-chani/ol-chata → il-keek/il-kak` tree/firewood → trees, `en-aisho → in-aishi` honey/beer, `e-ñgudi → i-ñgusidin` stick, `eng-oshoghe → ing-oshua` stomach, `ol-tau → il-tauja` heart); and (e) Compound words (`ol-kipiei` 'lungs' = `ol-le-kiborra-isho`, p. 34).",
    "examples": [
      {
        "maasai": "ol-kuruk → il-kuruki • eng-oloñg → ing-oloñgi • ol-poror → il-porori",
        "english": "crow → crows • sun/day → days • age → ages (Regular Class I in `-i`, p. 19)",
        "explanation": "Class I: Singular Ends in a Consonant; Plural Affixes -i (with Exceptions A: -in, B: -t + -a/-o, C: -a/-o, pp. 19–21)"
      },
      {
        "maasai": "en-gias → in-giasin • o-eñgat → i-eñgatin • e-ruat → i-ruatin",
        "english": "work → works • wildebeest • bed → beds (Class I Exc. A in `-in`, p. 20)",
        "explanation": "Class I: Singular Ends in a Consonant; Plural Affixes -i (with Exceptions A: -in, B: -t + -a/-o, C: -a/-o, pp. 19–21)"
      },
      {
        "maasai": "e-remēt → i-remēta • o-soit → i-soito • ol-ñgatuny → il-ñgatunyo",
        "english": "spear → spears • stone → stones • lion → lions (Class I Exc. B & C in `-a/-o`, pp. 20–21)",
        "explanation": "Class I: Singular Ends in a Consonant; Plural Affixes -i (with Exceptions A: -in, B: -t + -a/-o, C: -a/-o, pp. 19–21)"
      },
      {
        "maasai": "en-gurma → in-gurman • ol-ari → il-arin • en-gitojo → in-gitojon",
        "english": "garden → gardens • year → years • hare → hares (Regular Class II in `-n`, p. 22)",
        "explanation": "Class II: Singular Ends in a Vowel; Plural Adds -n (with Exceptions A–D, pp. 21–25)"
      },
      {
        "maasai": "el-loñgo → il-loñgoi • ol-kila → il-kilani • e-sidai → i-sidan",
        "english": "shield → shields • cloak → cloaks • ostrich → ostriches (Class II Exc. A & B, pp. 22–23)",
        "explanation": "Class II: Singular Ends in a Vowel; Plural Adds -n (with Exceptions A–D, pp. 21–25)"
      },
      {
        "maasai": "ol-kunoni → il-kunono • ol-alashe → il-alashera • ol-aṗa → il-aṗaitin",
        "english": "smith → smiths • brother → brothers • moon/month → months (Class II Exc. C & D, pp. 23–25)",
        "explanation": "Class II: Singular Ends in a Vowel; Plural Adds -n (with Exceptions A–D, pp. 21–25)"
      },
      {
        "maasai": "ol-tuñgani → il-tuñganak • ol-aigwenani → il-aigwenak • ol-oiboni → il-oibonok",
        "english": "person → people • counsellor → counsellors • medicine-man → medicine-men (Class IIIa, p. 26)",
        "explanation": "Class III: Plural in -k (-k, -ak, -ek, -ok) — Callings/Agentives, Body Parts & Other Nouns (pp. 26–27)"
      },
      {
        "maasai": "eng-aina → ing-aik • en-geju → in-gejek • eng-oñgu → ing-onyek",
        "english": "arm/hand → hands • leg/foot → feet • eye → eyes (Class IIIb body parts, pp. 26–27)",
        "explanation": "Class III: Plural in -k (-k, -ak, -ek, -ok) — Callings/Agentives, Body Parts & Other Nouns (pp. 26–27)"
      },
      {
        "maasai": "ol-oiñgoni → il-oiñgok • eng-aji → ing-ajijik • eng-are → ing-ariak",
        "english": "bull → bulls • hut → huts • water/stream → streams (Class IIIc, p. 27)",
        "explanation": "Class III: Plural in -k (-k, -ak, -ek, -ok) — Callings/Agentives, Body Parts & Other Nouns (pp. 26–27)"
      },
      {
        "maasai": "Il-Maasae → Ol-Maasani (orig. Il-Maa → Ol-Maï)",
        "english": "the Masai → a Masai (Hollis 1905, p. 29 & fn. 1)",
        "explanation": "Class IV: Collective Plurals Forming Singular by Adding -i or -ni (Tribes, Communities, Insects & Objects, pp. 27–30)"
      },
      {
        "maasai": "il-muran → ol-murani • in-gera → en-gerai • il-barnot → ol-barnoti",
        "english": "warriors → warrior • children → child • young warriors → young warrior (Class IVb, p. 28)",
        "explanation": "Class IV: Collective Plurals Forming Singular by Adding -i or -ni (Tribes, Communities, Insects & Objects, pp. 27–30)"
      },
      {
        "maasai": "il-otorok → ol-otoroki • il-ala → ol-alai • i-mosor → e-mosori",
        "english": "bees → bee • teeth → tooth • eggs → egg (Class IVc–d, pp. 28–29)",
        "explanation": "Class IV: Collective Plurals Forming Singular by Adding -i or -ni (Tribes, Communities, Insects & Objects, pp. 27–30)"
      },
      {
        "maasai": "il-akir → ol-akira • il-lughuny → el-lughunya • ing-opir → eng-opiro",
        "english": "stars → star • heads → head • feathers → feather (Class V, p. 31)",
        "explanation": "Class V (Singular Adds -a or -o to Plural) & Class VI (Invariable, Plural-Only, Suppletive & Compounds, pp. 30–34)"
      },
      {
        "maasai": "en-giteng → in-gishu • ol-kiteng → il-mongi • o-sighiria → i-sirkon",
        "english": "cow → cattle • ox → oxen • donkey → donkeys (Class VI Suppletive Plurals, p. 33)",
        "explanation": "Class V (Singular Adds -a or -o to Plural) & Class VI (Invariable, Plural-Only, Suppletive & Compounds, pp. 30–34)"
      },
      {
        "maasai": "en-dito → in-doiye • en-gop → in-gwapi • ol-chani → il-keek • ol-tau → il-tauja",
        "english": "girl → girls • land → lands • tree → trees • heart → hearts (Class VI, p. 33)",
        "explanation": "Class V (Singular Adds -a or -o to Plural) & Class VI (Invariable, Plural-Only, Suppletive & Compounds, pp. 30–34)"
      }
    ]
  },
  {
    "id": "maasai-cases-kinship",
    "title": "4. Cases, Genitive Construction & Kinship Terminology (Hollis 1905, pp. 34–36)",
    "summary": "Nominative vs. Accusative tonal case marking, the four-form genitive particle (le/li, e, oo), and Hollis's complete table of Masai relationship and kinship terms.",
    "content": "1. **Genitive Particle Agreement (le/li, e, oo, pp. 34–35)**:\n   - The possessed noun precedes the possessor, linked by the genitive particle ('of') which agrees in gender and number with BOTH the thing possessed and the possessor (Hollis 1905, p. 35): (1) When the thing possessed is masculine singular or plural, the particle is `le` (`lo` before `'l-` / `'n-`; `li` before vowels) before a singular possessor, and `loo` before a plural possessor (`ol-dia le-'ng-ayoni` 'the small boy's dog'; `il-diain loo-'l-muran` 'the warriors' dogs'). (2) When the thing possessed is feminine singular or plural, the particle is `e` (`o` before `'l-` / `'n-`) before a singular possessor, and `oo` before a plural possessor (`en-giteñg o-'l-moruo` 'the old man's cow'; `'n-gishu oo-'l-Maasae` 'the cattle of the Masai').\n2. **Complete Table of Kinship & Relationship Terms (pp. 35–36)**:\n   - Hollis (1905, pp. 35–36) tabulates the Masai kinship system, where 'my/our' is often inherent in the stem: `Papa` / `menye` (my/his father, pl. `'l-oo-menye`), `Yeyo` / `ñgoto` (my/his mother, pl. `'n-oo-ñgoto`), `Ol-apu` (maternal uncle or sister's son, pl. `il-aputin`), `Eng-anashe` (sister, pl. `ing-anashera`), `Ol-alashe` (brother, pl. `il-alashera`), `Ol-le-'sotwa` / `En-e-'sotwa` (blood-brother/relative/kinsman/uncle/aunt/nephew/niece/cousin, literally 'of the umbilical cord'), `Ol-aputani` (father-in-law, son-in-law, brother-in-law, pl. `il-aputak`), `En-gerai` (child, pl. `in-gera`), `En-dito` (daughter/girl, pl. `in-doiye`), `E-siangiki` (young married woman, pl. `i-siangikin`), `E-sindani` (brother's wife / sister-in-law, pl. `i-sindanin`), `Ol-moruo` (husband/elder, pl. `il-moruak`), `E-ñgoroyoni` (wife, pl. `i-ñgoroyok`), `Ol-akwi` (grandfather/grandson, pl. `il-akwiak`), `Eng-akwi` (grandmother/granddaughter, pl. `ing-akwiak`).",
    "examples": [
      {
        "maasai": "ol-alem lo-'l-murani • il-alema loo-'l-muran",
        "english": "the sword of the warrior • the swords of the warriors (Hollis 1905, p. 35)",
        "explanation": "Genitive Particle Agreement (le/li, e, oo, pp. 34–35)"
      },
      {
        "maasai": "en-giteñg o-'l-moruo • 'n-gishu oo-'l-moruak",
        "english": "the cow of the elder • the cattle of the elders (Hollis 1905, p. 35)",
        "explanation": "Genitive Particle Agreement (le/li, e, oo, pp. 34–35)"
      },
      {
        "maasai": "Papa (menye) • Yeyo (ñgoto) • Ol-akwi / Eng-akwi",
        "english": "my father (his father) • my mother (his mother) • grandfather/grandson / grandmother (pp. 35–36)",
        "explanation": "Complete Table of Kinship & Relationship Terms (pp. 35–36)"
      },
      {
        "maasai": "Ol-alashe / Eng-anashe • Ol-apu • Ol-aputani",
        "english": "brother / sister • maternal uncle or nephew • relative-in-law (pp. 35–36)",
        "explanation": "Complete Table of Kinship & Relationship Terms (pp. 35–36)"
      }
    ]
  },
  {
    "id": "maasai-adjectives-numerals",
    "title": "5. Adjectives, Numerals 1–1,000 & Finger-Counting Signs 1–60 (Hollis 1905, pp. 37–45)",
    "summary": "Attributive and predicative adjectives, comparison with a-lañg, numerals 1–1,000 with gender agreement for 1–4 and 7–9, and Hollis's complete Masai finger-counting sign language.",
    "content": "1. **Attributive vs. Predicative Adjectives & Comparison (pp. 37–41)**:\n   - Attributive adjectives follow their noun and agree in number (`ol-tuñgani supat → il-tuñganak supati` 'good man → good men'; `en-dito sidai → 'n-doiye sidan` 'beautiful girl → beautiful girls'; `ol-kiteng torono → il-mongi torok` 'bad ox → bad oxen', Hollis 1905, pp. 37–38). Many English adjectives are rendered in Maasai by relative verbal participles (`ol-tuñgani o-sapuk` 'a big man'; `en-giteñg na-nyokye` 'a red cow'; `ol-chani o-ado` 'a tall tree'). Predicative adjectives precede the noun (`Sidai en-dito` 'the girl is pretty'; `Torono ol-tuñgani` 'the man is bad'). Comparison is expressed by the verb `a-lañg` ('to surpass/cross', p. 41): `E-ado ol-le-'l-meut a-lañg ol-tome` ('The giraffe is taller than the elephant').\n2. **Numerals 1–1,000 & Gender Agreement (pp. 41–45)**:\n   - Numerals 1, 2, 3, 4, 7, 8, and 9 change their prefix for masculine, feminine, and neuter (`e-weji`), whereas 5 (`imiet`), 6 (`ile`), 10 (`tomon`), 20 (`tikitam`), 30 (`osom`), 40 (`artam`), 50 (`onom`), 60 (`ntomoni-ile`), and 100 (`iip`) are invariable for gender (Hollis 1905, pp. 41–43): 1 = `obo` (m.) / `nabo` (f.) / `nebo` (n.); 2 = `aare` (m.) / `are` (f. & n.); 3 = `okuni` (m.) / `uni` (f. & n.); 4 = `ooñgwan` (m.) / `oñgwan` (f. & n.); 5 = `imiet`; 6 = `ile`; 7 = `oopishana` (m.) / `naapishana` (f. & n.); 8 = `oisyet` (m.) / `isyet` (f. & n.); 9 = `oudo` (m.) / `naaudo` (f. & n.); 10 = `tomon`. Compound teens use `tomon o obo` (11), `tomon o aare` (12), etc. Distributives repeat the numeral (`obo-obo` 'one by one'); Multiplicatives use `katitin` ('times', `katitin uni` 'three times'); Ordinals use the genitive (`ol-le-tomon` 'the tenth', p. 45).\n3. **Hollis's Complete Finger-Counting & Hand-Sign System for 1–60 (pp. 43–44)**:\n   - Alongside spoken numerals, the Masai accompany every number with a precise manual sign (Hollis 1905, pp. 43–44): **1** = extend forefinger (`ol-okod-ingishu`), others closed; **2** = extend forefinger and middle finger (`ol-kimojino oado`), moving them up and down together; **3** = extend forefinger, middle, and ring finger, resting thumb between forefinger and middle finger; **4** = extend all four fingers with middle and ring fingers parted (`e-perer`); **5** = close hand with thumb (`ol-moruo`) resting between forefinger and middle finger; **6** = click nail of ring finger against thumb nail three or four times (`en-gipirta`); **7** = touch thumb tip to third finger and raise/lower hand; **8** = extend all four fingers and clash forefinger and middle finger rapidly against ring and little fingers (`en-gilisata`); **9** = form a circle with thumb and forefinger (`ol-bolo`); **10** = flick forefinger nail off thumb (`en-gisejata`); **20** = open and shut all fingers and thumb once or twice; **30** = place thumb tip between forefinger and middle finger and wave hand down once; **40** = extend four fingers (two and two) and wave hand once (`en-gonyata`); **50** = double fist and wave hand up and down; **60** = touch tip of little finger with thumb.",
    "examples": [
      {
        "maasai": "supat → supati • torono → torok • sidai → sidan • biot → bioti",
        "english": "good • bad • beautiful • healthy (attributive adjective plurals, pp. 37–38)",
        "explanation": "Attributive vs. Predicative Adjectives & Comparison (pp. 37–41)"
      },
      {
        "maasai": "o-rok / na-rok (pl. oo-rook / naa-rook) • o-ibor / na-ibor • o-nyokye / na-nyokye",
        "english": "black • white • red (relative verbal adjectives, pp. 38–40)",
        "explanation": "Attributive vs. Predicative Adjectives & Comparison (pp. 37–41)"
      },
      {
        "maasai": "obo/nabo (1), aare/are (2), okuni/uni (3), ooñgwan/oñgwan (4), imiet (5)",
        "english": "masculine/feminine numerals 1–5 (Hollis 1905, p. 41)",
        "explanation": "Numerals 1–1,000 & Gender Agreement (pp. 41–45)"
      },
      {
        "maasai": "ile (6), oopishana/naapishana (7), oisyet/isyet (8), oudo/naaudo (9), tomon (10)",
        "english": "numerals 6–10 (Hollis 1905, p. 41)",
        "explanation": "Numerals 1–1,000 & Gender Agreement (pp. 41–45)"
      },
      {
        "maasai": "tikitam (20), osom (30), artam (40), onom (50), iip (100)",
        "english": "tens and hundred in Maasai (Hollis 1905, pp. 42–43)",
        "explanation": "Numerals 1–1,000 & Gender Agreement (pp. 41–45)"
      },
      {
        "maasai": "1 = forefinger • 2 = 2 fingers scissored • 4 = 4 fingers parted 2 & 2 • 5 = fist with thumb between 1st & 2nd",
        "english": "Masai manual finger-signs for 1–5 (Hollis 1905, pp. 43–44)",
        "explanation": "Hollis's Complete Finger-Counting & Hand-Sign System for 1–60 (pp. 43–44)"
      },
      {
        "maasai": "6 = ring-finger nail clicked on thumb • 8 = 4 fingers clashed 2 on 2 • 9 = thumb-forefinger circle • 10 = forefinger flicked off thumb",
        "english": "Masai manual finger-signs for 6–10 (Hollis 1905, p. 44)",
        "explanation": "Hollis's Complete Finger-Counting & Hand-Sign System for 1–60 (pp. 43–44)"
      }
    ]
  },
  {
    "id": "maasai-pronouns",
    "title": "6. Personal, Possessive, Demonstrative, Reflexive, Relative & Interrogative Pronouns (Hollis 1905, pp. 45–63)",
    "summary": "Independent personal pronouns, gender-inflected possessives, four spatial/temporal degrees of demonstratives, reflexive keon/open, relative constructions, and interrogatives.",
    "content": "1. **Personal & Possessive Pronouns (pp. 45–47)**:\n   - Independent personal pronouns are `nanu` (I), `iye` (thou), `ninye` (he/she/it), `iyook` (we), `inye / ndae` (ye), `nince` (they, Hollis 1905, p. 45). Possessive pronouns agree in gender and number with the possessed noun (pp. 46–47): Masculine sg./pl.: `lai / lainei` (my), `lino / linono` (thy), `lenye / lenyena` (his/her/its), `lañg` (our), `linyi` (your), `lenye` (their); Feminine sg./pl.: `ai / ainei` (my), `ino / inono` (thy), `enye / enyena` (his/her/its), `añg` (our), `inyi` (your), `enye` (their).\n2. **Four Spatial & Temporal Degrees of Demonstratives (pp. 47–51)**:\n   - Maasai distinguishes four demonstrative series across Masculine, Feminine, and Neuter (`e-weji`, Hollis 1905, pp. 47–51): (1) Proximal ('this here'): `ele` (m.), `ena` (f.), `ene` (n.), pl. `kulo` (m.), `kune` (f.), `kune` (n.); (2) Distal ('that yonder'): `elde` (m.), `enda` (f.), `ende` (n.), pl. `kuldo` (m.), `kunda` (f.), `kunde` (n.); (3) Referential/Past ('that near you / already mentioned'): `ilo` (m.), `ina` (f.), `ine` (n.), pl. `lelo` (m.), `nena` (f.), `nene` (n.); (4) Temporal ('that former / that future'): `'l-omon li-oṗa` ('the former news/traditions') vs. `'l-omon li-akenya` ('the future news').\n3. **Reflexive, Relative, Interrogative & Indefinite Pronouns (pp. 51–63)**:\n   - Reflexive ('self/alone') is expressed by `keon` (sg.) / `keon` or `aate` (pl.), and 'himself/themselves/owner' by `open` (sg.) / `bopen` (pl., `ol-tuñgani open` 'the man himself'; `il-tuñganak bopen` 'the men themselves', p. 51). Relative clauses use the relative prefix `o-` (masc. sg.), `na-` (fem. sg.), `oo-` (masc. pl.), `naa-` (fem. pl.), negated by `-me-` (`ol-tuñgani o-me-suj` 'the man who does not follow', pp. 52–59). Interrogatives (pp. 60–61) include `aiñgai / ñgai` (who?, pl. `ainoo-ñgai`), `ainyoo / nyoo` (what?), `kakwa` (m.) / `kaja` (f.) (which?), `le-ñgai` / `e-ñgai` (whose?), and `aja` (how many?). Indefinite pronouns (pp. 62–63) include `likai` (m.) / `angai` (f.) ('another/other', pl. `kulikai / kungai`), `pooki` ('all/every'), and `hoo-obo / hoo-nabo` ('anyone/any whatever').",
    "examples": [
      {
        "maasai": "ol-kiteng lai (pl. il-mongi lainei) • en-giteng ai (pl. in-gishu ainei)",
        "english": "my ox (my oxen) • my cow (my cattle, Hollis 1905, p. 46)",
        "explanation": "Personal & Possessive Pronouns (pp. 45–47)"
      },
      {
        "maasai": "eng-añg añg • il-mongi lañg • in-gishu enyena",
        "english": "our kraal • our oxen • his/her cattle (Hollis 1905, pp. 46–47)",
        "explanation": "Personal & Possessive Pronouns (pp. 45–47)"
      },
      {
        "maasai": "ele-tuñgani (pl. kulo-tuñganak) • ena-kitok (pl. kuna-kituak)",
        "english": "this man (these men) • this woman (these women, Hollis 1905, p. 48)",
        "explanation": "Four Spatial & Temporal Degrees of Demonstratives (pp. 47–51)"
      },
      {
        "maasai": "elde-doinyo (pl. kuldo-doinyo) • ilo-tuñgani (pl. lelo-tuñganak)",
        "english": "that mountain yonder • that man aforementioned (Hollis 1905, pp. 48–49)",
        "explanation": "Four Spatial & Temporal Degrees of Demonstratives (pp. 47–51)"
      },
      {
        "maasai": "ol-tuñgani open (pl. il-tuñganak bopen) • a-lo ma-keon",
        "english": "the man himself (the men themselves) • I go by myself (Hollis 1905, p. 51)",
        "explanation": "Reflexive, Relative, Interrogative & Indefinite Pronouns (pp. 51–63)"
      },
      {
        "maasai": "Aiñgai ele? • Ainyoo i-ieu? • Aja 'n-gishu inono?",
        "english": "Who is this? • What dost thou want? • How many cattle hast thou? (pp. 60–61)",
        "explanation": "Reflexive, Relative, Interrogative & Indefinite Pronouns (pp. 51–63)"
      }
    ]
  },
  {
    "id": "maasai-verbs-conjugation",
    "title": "7. Verbs: Simple vs. I-Stems, the 27-Row Subject-Object Prefix Table & Irregular Verbs (Hollis 1905, pp. 63–99)",
    "summary": "The two conjugation classes (Class I Simple Verbs vs. Class II Verbs beginning with I), the contained pronominal subject-object prefix system, tenses, moods, passive, and irregular verbs.",
    "content": "1. **The 27-Row Contained Subject–Object Pronominal Prefix System (pp. 64–66)**:\n   - A hallmark of Maasai grammar is that a single verbal prefix encodes BOTH the subject and the pronominal object (Hollis 1905, pp. 64–66): Subject prefixes alone are `a-` (I), `i-` (thou/ye, with plural stem reduplication or suffix in the plural), `e-` (he/she/it/they), and `ki-` (we). When a pronominal object is contained: `aa-` = 'I...thee' OR 'he/they...me' (`aa-suj` 'I follow thee' or 'he follows me'); `ki-` = 'thou...me' OR 'he/they...thee' (`ki-suj` 'thou followest me' or 'he follows thee'); `a-` = 'I...him/them'; `i-` = 'thou...him/them'; `e-` = 'he/they...him/them/us/you'. In the negative (`m-`), 'I not thee' is `maa-suj`, 'thou not me' is `miki-suj`, 'he not me' is `maa-suj`, 'he not thee' is `miki-suj`.\n2. **Class I (Simple Verbs: a-suj, a-rany) vs. Class II (I-Stem Verbs: a-inos, a-irrag, pp. 66–77)**:\n   - Hollis divides Maasai verbs into two conjugations: (1) **Class I (Simple Verbs, pp. 66–77)** whose root begins with any letter except `i`: Present `a-suj, i-suj, e-suj, ki-suj, i-suj-usuj-a, e-suj`; Past formed with prefix `ta-/to-/tu-` and suffix `-a/-o/-e` (`a-tu-suj-a`, 'I followed'; Imperative `tu-suj-a!`, pl. `en-du-suj!`; Subjunctive `ma-tu-suj-a`; Future with `ayu` or `akwetu`); (2) **Class II (`I`-Stem Verbs, pp. 86–93)** whose root begins with `i` (`a-inos` 'to eat', `a-irrag` 'to lie down', `a-iruk` 'to believe/reply', `a-isuj` 'to wash'): Present `a-inos, i-inos, e-inos, k'-inos, i-inos-inos-a, e-inos`; Past formed WITHOUT `ta-`, simply by suffixing `-a/-o/-e` (`a-inos-a` 'I ate'; Imperative `inos-a!`, pl. `e-inos!`). The **Passive** (pp. 76–77) adds `-i` in the present and `-ki` in the past (`a-suj-i` 'I am followed', `a-tu-suj-aki` 'I was followed'), and in Maasai no agent can be expressed with a passive verb—one must use the active voice with tonal case marking.\n3. **Suppletive & Irregular Verbs (a-lo/a-puo, a-lotu/a-ponu, a-ra, a-ata, a-tua, pp. 93–99)**:\n   - Several high-frequency Maasai verbs use suppletive singular and plural roots (Hollis 1905, pp. 93–99): **'To go'**: sg. `a-lo` (Past `a-shom-o`, Imp. `shom-o!`), pl. `ki-puo` (Past `ki-shom-o`, Imp. `eu-shom-o!`); **'To come'**: sg. `a-lotu` (Past `a-eu-o`, Imp. `ou!`), pl. `ki-ponu` (Past `ki-et-uo`, Imp. `ew-o!`); **'To die'**: sg. `a-ye` (Past `a-tua`), pl. `ki-pok` (Past `ki-tuat-a`); **'To be'**: `a-ra` (Past `a-ta-a`, Future `a-aku`); **'To have'**: defective present `a-ata, i-ata, e-ata, ki-ata, i-at-at-a, e-ata` (neg. `m-a-ata` 'I have not'); **'To say'**: `a-jo` (Past `a-te-jo`, Imp. `te-jo!`); **'To be able'**: `a-idim`; **'To get/acquire'**: `a-tum`.",
    "examples": [
      {
        "maasai": "aa-suj (I follow thee / he follows me) • ki-suj (thou followest me / he follows thee)",
        "english": "portmanteau subject-object verbal prefixes (Hollis 1905, pp. 64–65)",
        "explanation": "The 27-Row Contained Subject–Object Pronominal Prefix System (pp. 64–66)"
      },
      {
        "maasai": "maa-suj (I follow thee not / he follows me not) • miki-suj (thou followest me not)",
        "english": "negative contained subject-object prefixes (Hollis 1905, p. 66)",
        "explanation": "The 27-Row Contained Subject–Object Pronominal Prefix System (pp. 64–66)"
      },
      {
        "maasai": "a-suj → a-tu-suj-a (Imp. tu-suj-a!) • a-rany → a-ta-rany-a (Imp. ta-rany-a!)",
        "english": "Class I Simple Verbs: to follow / to sing (Hollis 1905, pp. 67–75)",
        "explanation": "Class I (Simple Verbs: a-suj, a-rany) vs. Class II (I-Stem Verbs: a-inos, a-irrag, pp. 66–77)"
      },
      {
        "maasai": "a-inos → a-inos-a (Imp. inos-a!) • a-irrag → a-irrag-a (Imp. irrag-a!)",
        "english": "Class II I-Stem Verbs: to eat / to lie down (Hollis 1905, pp. 86–92)",
        "explanation": "Class I (Simple Verbs: a-suj, a-rany) vs. Class II (I-Stem Verbs: a-inos, a-irrag, pp. 66–77)"
      },
      {
        "maasai": "e-itu a-suj / e-itu i-suj / e-itu e-suj",
        "english": "negative past tense: I did not follow / thou didst not follow / he did not follow (p. 68)",
        "explanation": "Class I (Simple Verbs: a-suj, a-rany) vs. Class II (I-Stem Verbs: a-inos, a-irrag, pp. 66–77)"
      },
      {
        "maasai": "a-lo (pl. ki-puo), past a-shomo, imp. shomo! (pl. eushomo!)",
        "english": "to go — suppletive singular and plural paradigm (Hollis 1905, pp. 94–95)",
        "explanation": "Suppletive & Irregular Verbs (a-lo/a-puo, a-lotu/a-ponu, a-ra, a-ata, a-tua, pp. 93–99)"
      },
      {
        "maasai": "a-lotu (pl. ki-ponu), past a-euo (pl. ki-etuo), imp. ou! (pl. ewo!)",
        "english": "to come — suppletive singular and plural paradigm (Hollis 1905, p. 95)",
        "explanation": "Suppletive & Irregular Verbs (a-lo/a-puo, a-lotu/a-ponu, a-ra, a-ata, a-tua, pp. 93–99)"
      },
      {
        "maasai": "a-ata (neg. m-a-ata) • a-ra (past a-ta-a, fut. a-aku)",
        "english": "I have (I have not) • I am (I was, I shall become, pp. 93–94, 98)",
        "explanation": "Suppletive & Irregular Verbs (a-lo/a-puo, a-lotu/a-ponu, a-ra, a-ata, a-tua, pp. 93–99)"
      }
    ]
  },
  {
    "id": "maasai-derivative-verbs-particles",
    "title": "8. The Eight Derivative Verb Forms, Adverbs, Prepositions & Interjections (Hollis 1905, pp. 78–86, 99–102)",
    "summary": "Hollis's eight productive verbal extensions (Neuter, Applied/Dative, Motion Towards, Motion From, Causative, Intransitive, Reduplicative, Substantival) plus prepositions te/to and oo/o.",
    "content": "1. **The Eight Derivative Verb Forms (pp. 78–86)**:\n   - Hollis (1905, pp. 78–86) documents eight derivative formations built on verbal roots: (1) **Neuter or Quasi-Passive** in `-a, -o, -e` (reflexive/middle state: `a-suj-a` 'to be washed/clean oneself'; `a-bol-o` 'to be open'); (2) **Applied (Dative)** in `-aki, -oki, -iki` ('to do for/to someone': `a-suj-aki` 'to follow for', Past `a-tu-suj-ak-a`); (3) **Motion Towards the Speaker** in `-u` (Past `-u-a`, Subjunctive `-u-nye`: `a-suj-u` 'to follow hither'; `a-dot-u` 'to pull out hither'; `a-añg-u` 'to breathe in'); (4) **Motion From the Speaker** in `-aa` or `-oo` (Past `-aiy-e` / `-oiy-e`: `a-suj-aa` 'to follow thither/away'; `a-añg-aa` 'to breathe out'); (5) **Causative**: in Class I prefixed by `ita-/ito-/itu-` (`a-itu-suj` 'to cause to follow'; `a-ito-do-u` 'to show' from `a-dol` 'to see'); in Class II (`i`-stems) suffixed by `-isho/-isho` (`a-inos-isho` 'to cause to eat / feed'); (6) **Intransitive** in `-isho` or `-ishe` (`a-suj-isho` 'to do following/washing'); (7) **Reduplicative** diminishing or repeating the action (`a-suj-u-suj` 'to follow a little / repeatedly'); and (8) **Substantival (Verbal Nouns)** forming gerunds and agent nouns (`e-suj-ata` 'the act of following', `ol-a-suj-ani` pl. `il-a-suj-ak` 'the follower').\n2. **Adverbs, Prepositions (te/to, oo/o), Conjunctions & Interjections (pp. 99–102)**:\n   - Key temporal and locative adverbs (pp. 99–100) include `taata` (now/today), `duoo` (a little while ago this morning), `ñgole` (yesterday), `taaisere` (tomorrow), `metabaiki` (day after tomorrow), `oṗa / aṗa` (formerly/long ago), `akenya` (hereafter/in the future), `ine` (here), `inde` (there), `abori` (below), `keper` (above), and `boo` (outside). The universal oblique preposition `te` (`to` before `'l-` / `'n-`; `ti` before vowels, p. 100) means 'in, at, on, from, by, with (instrument)'. The preposition/conjunction `o` (`oo` before plural nouns, p. 101) means 'and / with'. Key interjections (p. 102) include `oi! / woi!` (grief/pain), `ai!` (surprise), `hepa!` (reply to elder's greeting `sopai!`), `igho!` (reply to `endakwenya!`), and `muro!` (alarm cry when thieves steal cattle at night, p. 310).",
    "examples": [
      {
        "maasai": "a-suj (follow) → a-suj-aki (follow for) → a-suj-u (follow hither) → a-suj-aa (follow away)",
        "english": "Simple, Applied, Motion Towards (-u), and Motion From (-aa) stems (pp. 78–81)",
        "explanation": "The Eight Derivative Verb Forms (pp. 78–86)"
      },
      {
        "maasai": "a-itu-suj (cause to follow, Cl. I) • a-inos-isho (cause to eat, Cl. II) • a-suj-isho (intrans.)",
        "english": "Causative and Intransitive verbal extensions (pp. 81–84)",
        "explanation": "The Eight Derivative Verb Forms (pp. 78–86)"
      },
      {
        "maasai": "ñgole (yesterday) • taata (today) • taaisere (tomorrow) • oṗa (long ago)",
        "english": "core temporal adverbs in Maasai (Hollis 1905, p. 99)",
        "explanation": "Adverbs, Prepositions (te/to, oo/o), Conjunctions & Interjections (pp. 99–102)"
      },
      {
        "maasai": "te-'ng-añg (at the kraal) • to-'l-alem (with the sword) • ti-alo (beside)",
        "english": "allomorphs of the universal preposition `te / to / ti` (Hollis 1905, p. 100)",
        "explanation": "Adverbs, Prepositions (te/to, oo/o), Conjunctions & Interjections (pp. 99–102)"
      }
    ]
  },
  {
    "id": "maasai-hollis-twenty-stories",
    "title": "9. Part II: The 20 Interlinear Masai Stories ('N-atīnin oo-'l-Maasae, Hollis 1905, pp. 103–237)",
    "summary": "Complete register of all 20 bilingual Maasai folktales recorded by A. C. Hollis (1905, pp. 103–237) with interlinear morphological glosses and English translations.",
    "content": "1. **Stories 1–10: Trickster Tales, Nine-Headed Ogres, Warriors & Moral Fables (pp. 103–171)**:\n   - Part II opens with ten interlinear narratives: (1) **En-atini e-'n-gitojo oo 'l-tomia** (*The Hare and the Elephants*, pp. 103–108: the hare calls the bull elephant `Papa` across the river, rides his trunk, and escapes into a hole while the elephants dig in vain); (2) **'L-omon loo-'l-muran o en-gukuu** (*The Warriors and the Devil*, pp. 108–116: a brother and sister live in a cave while the warriors raid; a devil with one horn and nine heads [`e-mowuo nabo na-ata 'l-lughuny naaudo`] drinks the girl's blood until her warrior lover `Ol-le-tepes-apau` slays the monster and burns it to ashes); (3) **'L-omon lo-'l-murani oo 'ng-anashera enyena** (*The Warrior and His Sisters, or Why Free Love is Permitted in the Manyata*, pp. 117–121: `Ol-le-sitima` leaves his sisters in a starving kraal, returns safely with raided cows, and the elders lift the ban on warriors' sweethearts); (4) **En-atini e-Sae-Kidongoi oo 'n-gera** (*The Devil Called Sae-Kidongoi and the Children*, pp. 122–129: an ogre swallows a runaway girl's beads, dress, arms, legs, and body, is cut open by warriors at the river so she steps out alive, and is later burned by a warrior whose son's cattle it stole); (5) **En-atini oo-'l-muran oo 'n-derei** (*The Warriors and the Monkeys*, pp. 129–132: monkeys steal the warriors' cooking meat in the `ol-puli` until the warriors trap and kill them inside the hut); (6) **'L-omon le-Konyek oo Menye-Konyek** (*Konyek and His Father*, pp. 133–146: a woman bears a demon son `Konyek` to a bush-spirit; when Konyek devours his half-brothers and mother, his human father lures Konyek and the demons into a grass hut and burns them, sparing only his twin sisters); (7) **En-atini o-'l-moruo o en-gungu enye** (*The Old Man and His Knee*, pp. 147–155: a bachelor elder extracts twin children — a girl and a boy, `Ol-le-nyokye-kimojik` 'He of the Red Fingers' — from his swollen knee; when a devil kills the sister, her brother tracks the monster through zebra, hartebeest, gazelle, and ant stomachs, pierces it, and releases all the swallowed people and cattle); (8) **'L-omon le-'m-biyani o-'l-moruo o e-ngoroyoni enye** (*Greed of the Old Man and His Wife*, pp. 155–161: husband and wife each pretend to be sick so the other will slaughter sheep for them); (9) **'L-omon le-'ngoroyoni oo 'n-gera o-'l-ngaboli** (*The Woman and the Children of the Sycamore Tree*, pp. 161–165: a childless wife makes children from `ol-ngaboli` sycamore figs who vanish back into fruits when her co-wife's children taunt them as `'l-oo-'l-ngaboli`); (10) **'L-omon le-Menye-Marogo** (*The Father of Marogo*, pp. 165–171: a father rolls a boulder down a hill into his own daughter `Marogo`'s kraal to steal her fat ox and blames a war-party).\n2. **Stories 11–20: Twins, Kunju the Caterpillar, the Lioness's Cave & Dorobo Tales (pp. 171–237)**:\n   - The second half of Part II comprises: (11) **'L-omon loo-'ngoroyok are oo 'l-mao** (*The Two Wives and the Twins*, pp. 171–178: barren co-wife puts twin boys in a drum set adrift in the river; a washerman fosters them until their hair-shaving feast reveals their royal birth); (12) **'L-omon lo-'l-kurto o-ji Kunju oo 'n-dokitin o-'sero** (*The Caterpillar Called Kunju and the Wild Animals*, pp. 179–185: Kunju hides in the hare's house chanting `A-ra Kunju le-papa, n-a-nyor o-sero, kake a-nyikisho ol-wuasa lo-'l-tome!`, terrifying the hare, jackal, leopard, rhino, and elephant until the frog `en-duaa` shouts back and pulls Kunju out); (13) **'L-omon lo-'l-murani oo 'l-Lumbwa** (*The Warrior and the Lumbwa*, pp. 185–190: a Masai youth hides in a stream, steals the spears of sleeping Lumbwa raiders waiting for roasted ox-ribs to cool, and slays all but two messengers); (14) **'L-omon lo-'l-ayoni o ol-alashe o o-singolio lenye** (*The Boy and His Brother and Their Song*, pp. 190–196: a magical bird steals a boy's mottled cow `en-Dambu` until his singing at a circumcision dance reunites him with his lost warrior brother); (15) **En-atini oo-'n-gera e-'sidai** (*The Ostrich Chicks*, pp. 196–198: a lioness swaps her cubs for a cock-ostrich's chicks, and only the squirrel `en-deroni` dares speak the truth before escaping up an ant-hill); (16) **En-atini o-'l-kuruk o-iyam-a e-siangiki** (*The Crow Who Married a Woman*, pp. 198–202); (17) **En-atini e-'n-gitojo o ol-ngojine o eng-apune o-'l-ngatuny** (*The Hare, the Hyena, and the Lioness's Cave*, pp. 202–215: the 5-room stone cave opened by the magic password `Soit, bolo!` 'Stone, open!' and closed by `Soit, ripa!`); (18) **En-atini e-'n-dyemasi o-inos-a 'l-tunganak, o en-gerai** (*The Demon Marimu Who Ate People, and the Child — A Taveta Tale*, pp. 215–223); (19) **'L-omon loo-'l-Torobo aare** (*The Two Dorobo*, pp. 223–230: the poor Dorobo cares for an abandoned sick elder who blesses him with wealth, while the rich Dorobo grows poor); (20) **'L-omon lo-'l-Toroboni o ol-meut** (*The Dorobo and the Giraffe*, pp. 230–237: a Dorobo kills a giraffe while his companion `Le-pambito` faints from laughing; when denied meat, `Le-pambito` frightens the hunter's wife away and steals every load of meat passed through the back wall-hole `el-lusye`).",
    "examples": [
      {
        "maasai": "1. En-atini e-'n-gitojo oo 'l-tomia • 2. 'L-omon loo-'l-muran o en-gukuu",
        "english": "1. The Hare and the Elephants (pp. 103–108) • 2. The Warriors and the Devil (pp. 108–116)",
        "explanation": "Stories 1–10: Trickster Tales, Nine-Headed Ogres, Warriors & Moral Fables (pp. 103–171)"
      },
      {
        "maasai": "6. 'L-omon le-Konyek oo Menye-Konyek • 7. En-atini o-'l-moruo o en-gungu enye",
        "english": "6. Konyek and His Father (pp. 133–146) • 7. The Old Man and His Knee (pp. 147–155)",
        "explanation": "Stories 1–10: Trickster Tales, Nine-Headed Ogres, Warriors & Moral Fables (pp. 103–171)"
      },
      {
        "maasai": "12. 'L-omon lo-'l-kurto o-ji Kunju • 17. En-atini e-'n-gitojo o ol-ngojine o eng-apune o-'l-ngatuny",
        "english": "12. The Caterpillar Kunju (pp. 179–185) • 17. The Hare, Hyena & Lioness's Cave (`Soit, bolo!`, pp. 202–215)",
        "explanation": "Stories 11–20: Twins, Kunju the Caterpillar, the Lioness's Cave & Dorobo Tales (pp. 171–237)"
      },
      {
        "maasai": "19. 'L-omon loo-'l-Torobo aare • 20. 'L-omon lo-'l-Toroboni o ol-meut",
        "english": "19. The Two Dorobo (pp. 223–230) • 20. The Dorobo and the Giraffe (pp. 230–237)",
        "explanation": "Stories 11–20: Twins, Kunju the Caterpillar, the Lioness's Cave & Dorobo Tales (pp. 171–237)"
      }
    ]
  },
  {
    "id": "maasai-hollis-proverbs-enigmas",
    "title": "10. Part III: The 75 Masai Proverbs & Sayings ('N-deṗen, pp. 238–252) & 24 Enigmas ('L-ōyetyani, pp. 253–259)",
    "summary": "Structure and grammar of the 75 numbered Masai proverbs and sayings (Nos. 1–75) and 24 numbered enigmas/riddles (Nos. 1–24) with the traditional opening formula Oiyote — E-euo.",
    "content": "1. **The 75 Masai Proverbs and Sayings ('N-deṗen oo-'l-Maasae, Nos. 1–75, pp. 238–252)**:\n   - Part III of Hollis (1905, pp. 238–252) presents 75 numbered Masai proverbs and sayings (`'N-deṗen oo-'l-Maasae`, sg. `en-deṗe`) with interlinear glosses, literal and idiomatic translations, an Index of 21 Illustrative European/Biblical Proverbs (p. 251), and a General Subject Index (p. 252). Several entries also record alternative variants (No. 3: `E-ata 'l-ojonga 'n-giyaa` / `E-ata en-gewarie 'n-giyaa`; No. 4: `E-baiki en-gutuk na-inosa 'sunya...` / `E-baiki ol-o-ta-ara 'n-gitungat...` [Matt. xx. 16]; No. 6: `E-kwenikye 'n-guk in-guruon` / `E-kwenikye ol-chata...`; No. 35: `M-e-ishaa 'mulugi en-dap` / `M-e-ishaa el-lejare en-dap`; No. 63: `M-i-'ro 'rorei oo-bana 'l-kujit` / `M-i-'ro 'rorei a-naa 'l-kujit` [Prov. x. 19]). All 75 proverbs are integrated verbatim in the KenyaHub Proverbs & Cultural Wisdom collection.\n2. **The 24 Masai Enigmas / Riddles ('L-ōyetyani loo-'l-Maasae, Nos. 1–24, pp. 253–259)**:\n   - On pages 253–259, Hollis records 24 numbered Masai riddles (`'L-ōyetyani loo-'l-Maasae`, sg. `ol-ōyetyani`), together with their dialogic opening formula (p. 253): the propounder asks **`Oiyote`** ('Are you ready?'), to which the audience replies **`E-euo`** ('He has come' = 'It is, or we are, ready'). All 24 enigmas are integrated verbatim in the KenyaHub Proverbs & Cultural Wisdom browser.",
    "examples": [
      {
        "maasai": "#3: E-ata 'l-ojonga 'n-giyaa. (Also: E-ata en-gewarie 'n-giyaa.)",
        "english": "Flies have ears / The night has ears ('Walls have ears', Hollis 1905, p. 238).",
        "explanation": "The 75 Masai Proverbs and Sayings ('N-deṗen oo-'l-Maasae, Nos. 1–75, pp. 238–252)"
      },
      {
        "maasai": "#6: E-kwenikye 'n-guk in-guruon. • #29: Ki-nder ol-le-'modai, pe ki-ndoki ol-le-'ngeno.",
        "english": "Coals laugh at ashes (p. 239) • We begin by being foolish and become wise by experience (p. 243).",
        "explanation": "The 75 Masai Proverbs and Sayings ('N-deṗen oo-'l-Maasae, Nos. 1–75, pp. 238–252)"
      },
      {
        "maasai": "#32: M-e-dany ol-kimojino obo el-lashei. • #50: M-e-pal ol-oitigo 'sirat.",
        "english": "One finger will not kill a louse (p. 244) • The zebra cannot do away with his stripes (p. 247).",
        "explanation": "The 75 Masai Proverbs and Sayings ('N-deṗen oo-'l-Maasae, Nos. 1–75, pp. 238–252)"
      },
      {
        "maasai": "Propounder: \"Oiyote!\" — Audience: \"E-euo!\"",
        "english": "\"Are you ready?\" — \"He has come / We are ready!\" (Hollis 1905, p. 253)",
        "explanation": "The 24 Masai Enigmas / Riddles ('L-ōyetyani loo-'l-Maasae, Nos. 1–24, pp. 253–259)"
      },
      {
        "maasai": "Enigma #1: A-ata 'l-muran lainei kumok, naa en-geju nabo e-itashe-ye? — Ol-popoñgi.",
        "english": "What do my warriors resemble when they stand on one leg? — The euphorbia tree (p. 253).",
        "explanation": "The 24 Masai Enigmas / Riddles ('L-ōyetyani loo-'l-Maasae, Nos. 1–24, pp. 253–259)"
      },
      {
        "maasai": "Enigma #24: Tununuko 'n-dapan, ma-ape Kinokop? — 'N-gidoñgo oo-'n-diain.",
        "english": "What is folding up the skins and going to Kinangop like? — The curly tails of bitches (p. 259).",
        "explanation": "The 24 Masai Enigmas / Riddles ('L-ōyetyani loo-'l-Maasae, Nos. 1–24, pp. 253–259)"
      }
    ]
  },
  {
    "id": "maasai-hollis-divisions-myths",
    "title": "11. Parts IV & V: Clans, Districts, the 15 Remembered Ages (1791–1904) & Myths (Hollis 1905, pp. 260–281)",
    "summary": "The 4 Clans ('Orot) and 19 sub-families, 'L-oodo-kishu vs. 'L-oorook-kishu, 5 Districts, Right/Left Circumcisions, 15 Historical Ages from Il-Tapari (1791) to Il-Meitaroni (1904), and cosmological myths.",
    "content": "1. **Part IV: The 4 Clans, 19 Families, 5 Districts & 15 Historical Ages (pp. 260–263)**:\n   - Hollis (1905, pp. 260–263) divides the Masai people into pastoral `Il-Maasae` and agricultural `'L-Oikoṗ` (`Il-Lumbwa`), organized into **4 Clans (`'Orot oo-'l-Maasae`)** and **19 Families**: (1) **`'L-Aiser`** (`'N-Gidoñgi` — medicine-men clan, `Il-Parkeneti`, `Il-Lughumae`, `Il-Partimaro`); (2) **`Il-Meñgana`** (`'L-Aitayok`, `'Siria`, `Il-Marumae`, `Il-Makuperia`); (3) **`Il-Mokesen`** (`Il-Mokesen-aate`, `Il-Partalale`, `Il-Tarosero`, `Il-Kiporon` — snake-charmers and rain-makers, `Il-Tanap-owaru`); (4) **`Il-Molelyan`** (`Il-Molelyan-aate`, `Il-Mamasita`, `Il-Pojos`, `Il-Kipuyoni` — the smiths `Il-kunono`, `Il-Moshono`, `Il-Masañgua`, `Il-Mokorere`). When dividing raided cattle, `'L-Aiser` + `Il-Meñgana` form **`'L-oodo-kishu`** ('the blood-red cattle') and `Il-Mokesen` + `Il-Molelyan` form **`'L-oorook-kishu`** ('the black cattle'). The **5 Districts (`Il-oshon`, p. 260)** are: (1) `Kaputiei/Kaptiei` (`'L-oodo-kilani`, `Matapato`, `Il-kak-oonyokyo`, `Il-dala-le-kutuk`), (2) `En-aiposha` (Naivasha: `Purko`, `Kinokop`, `Il-damat`, `'L-oita`), (3) `Kisoñgo` (18 sub-districts including `Moipo`, `'M-baashi`, `'K-oonyokyo`, `Em-bughoi`, `Ol-oitokitok`, `Kiteto`, `Salei`), (4) `'L-uasin-gishu` (`oorook`, `oonyokyo`), and (5) `'L-Aikipyak`. Every generation (`ol-aji`, ~15 years) consists of two ages (`il-porori`, ~7.5 years each): a **Right-Hand Circumcision (`E-murata e-tatene`)** and a **Left-Hand Circumcision (`E-murata e-kedyanye`)**, each subdivided into 3 cohorts: `'L-chañgen-opir` ('the big ostrich feathers'), `'L-tareto` ('the helpers'), and `'L-pariñgotwa lañg` ('our fleet runners'). Hollis (p. 262) tabulates **15 remembered ages** spanning 1791–1904: 1. `Il-Tapari` (1791), 2. `Il-Kirisisho`, 3. `Il-Meirishari` (1806), 4. `Il-Kidotu` (1821), 5. `Il-Tiyioki` (1836), 6. `Il-Majeshi`, 7. `Il-Kisaruni` / `Il-Merisho` (1851, Subugo le-Baringo), 8. `'L-ukunerok` / `Il-Nyañgusi` (1859), 9. `'L-aimer` (1866), 10. `Il-Kitoip` / `Il-Dalala` (1874, age of Sendeyo), 11. `Il-Peles` / `Il-Beek` (1881, age of Lenana), 12. `'L-oo-surkuro` / `Il-li-añgali` (1889), 13. `Il-Tuati` (1896), 14. `Il-Kijaru` / `Il-Maitei`, and 15. `Il-Meitaroni` (named March 1904).\n2. **Part V: Cosmological Myths — Two Gods, Naiteru-kop, Le-eyo & Astronomy (pp. 264–281)**:\n   - Part V (`'L-omon li-oṗa loo-'l-Maasae`, pp. 264–281) records: (1) **The Two Gods**: `Eng-ai narok` (the benevolent Black God overhead who sends rain, whose rolling thunder `Ruru-ruru-ruru` says 'Wait until next year') vs. `Eng-ai nanyokye` (the malevolent Red God above who withholds water, whose sharp thunder `Pel-pel-pel` demands to strike humans) plus the Aiser forest spirit `En-e-'n-aunir` (half-man, half-stone/lion living in `e-silalei` / *Commiphora*); (2) **Two Versions of `Naiteru-kop` ('Beginner of the Earth')**: Justin Ol-omeni's version (the Dorobo kills the serpent inside the elephant's trunk at the pool, removes the cow's bells, and later startles `Naiteru-kop` as cattle descend a hide strip `en-gane` from heaven to the `Ol-Maï`, causing God to cut the cord so the Dorobo hunts wild beasts while the Masai herd cattle, pp. 266–269) and Napisyeki's version (`Le-eyo` tricks the Dorobo out of `Naiteru-kop`'s cattle gift by making the Dorobo hold the calf by the legs all night, pp. 269–271); (3) **Le-eyo's Disobedience and the Origin of Death (pp. 271–272)**: `Naiteru-kop` instructs `Le-eyo` to cast away a dead child chanting `Tuñgani, tua, niitu; ol-aṗa, tua, nilotye!` ('Man, die and return; Moon, die and remain away!'), which `Le-eyo` reverses for a neighbor's child (`Tuñgani, tua, nilotye; ol-aṗa, tua, niitu!`), making human death permanent; (4) **Origin of Masai (`Ol-Maasinda`) & Bantu (`Il-Meek`)** via `Le-eyo`'s two sons choosing the herding stick vs. the yam digging stick (pp. 272–273); and (5) **Astronomical & Natural Lore (pp. 273–281)**: Marriage and battle of the Sun (`eng-oloñg`, fem.) and Moon (`ol-aṗa`, masc.), the Lunar Eclipse Song (`Ol-orosion li-orioñg añg! ... Aṗa topiu!`), the Pleiades (`'N-Gokwa`, whose setting brings the `Ol-oirujuruj` rains), Orion's Sword (`'L-moruak` 'The Old Men') pursued by Orion's Belt (`'N-gapyak` 'The Widows'), Morning Venus (`Kileghen`) vs. Evening Venus (`Leghen`), the Rainbow (`Ol-akir'-ai` / `Ol-kila le-papa`), Comets (`Ol-akira lo-'l-kidoñgoi`), Sheet Lightning (`Ol-motonyi le-'ng-ai`), Earthquakes (`En-gikirikir`), Active Volcanoes (`Ol-doinyo le-'ng-Ai`), and Steam-Jets/Caves (`Ol-doinyo opuru` at Naivasha and the Athi River cave on `Ol-keju le-'m-bagasi`).",
    "examples": [
      {
        "maasai": "'L-Aiser + Il-Meñgana = 'L-oodo-kishu • Il-Mokesen + Il-Molelyan = 'L-oorook-kishu",
        "english": "the 4 Masai clans and their two cattle-dividing moieties (Hollis 1905, pp. 260–261)",
        "explanation": "Part IV: The 4 Clans, 19 Families, 5 Districts & 15 Historical Ages (pp. 260–263)"
      },
      {
        "maasai": "E-murata e-tatene (Right-hand) + E-murata e-kedyanye (Left-hand) = 1 Ol-aji (~15 yrs)",
        "english": "two circumcision ages (`il-porori`) make one generation (`ol-aji`, Hollis 1905, pp. 261–262)",
        "explanation": "Part IV: The 4 Clans, 19 Families, 5 Districts & 15 Historical Ages (pp. 260–263)"
      },
      {
        "maasai": "\"Tuñgani, tua, niitu; ol-aṗa, tua, nilotye!\" vs. \"Tuñgani, tua, nilotye; ol-aṗa, tua, niitu!\"",
        "english": "Le-eyo's reversed chant over the dead child and the moon (Hollis 1905, pp. 271–272)",
        "explanation": "Part V: Cosmological Myths — Two Gods, Naiteru-kop, Le-eyo & Astronomy (pp. 264–281)"
      },
      {
        "maasai": "'N-Gokwa (Pleiades) • 'L-moruak (Orion's Sword) • 'N-gapyak (Orion's Belt) • Kileghen / Leghen (Venus)",
        "english": "classical Masai stellar astronomy (Hollis 1905, pp. 275–276)",
        "explanation": "Part V: Cosmological Myths — Two Gods, Naiteru-kop, Le-eyo & Astronomy (pp. 264–281)"
      }
    ]
  },
  {
    "id": "maasai-hollis-customs-botany-songs",
    "title": "12. Part VI: Customs, Law, Medicine-Men, Time & 12 Months, 45+ Botanical Species & 8 Songs (Hollis 1905, pp. 282–356)",
    "summary": "Complete ethnographic synthesis of Part VI ('N-dīun oo-'l-Maasae, pp. 282–356): rites of passage, customary law, 'L-oibonok genealogy, 10 day-divisions, 4 seasons & 12 lunar months, 45+ botanical trees, and 8 songs/prayers.",
    "content": "1. **Life-Cycle Ceremonies, Customary Law, Sacred Snakes & Medicine-Men (pp. 282–331)**:\n   - Part VI documents: (1) **Dress, Ornaments & Salutations (pp. 282–288)**: Women's coiled brass ear-rings (`'surutya`), iron wire necklaces (`i-seghenge`), leather skirts (`ol-okesena`, `ol-lekishopo`), elders' horn/ivory arm-ring (`ol-masañgus`), greetings (`Sopai!` — `Hepa!`; `Endakwenya!` — `Igho!`; children greeting elders by bowing the head to be touched), and departure blessing (`Toomonoi eng-Ai! I'nepu ake naa-serian! Tapaashare 'l-modook! — Endepetai 'n-aishi oo kulle! — Esai!`, p. 287); (2) **Sacredness of Cattle & Grass, Brands (`Il-mishiren`) & Ear-Slits (`Il-ponot`), Shields & Spears (`o-sirei`), Moving (`En-aidura`), `I-manyat` & `Il-puli` (pp. 288–294)**; (3) **Childbirth Naming (`En-domono`), Passing the Fence (`Em-bolosata e-sita`), Circumcision (`E-murata`), Candidate Status (`O-Sipolio` hunting birds with wax-tipped arrows), Shaved Novice (`Ol-barnoti`), Full Warrior (`Ol-murani`), Girl's Initiation (`'N-gaminini` wearing `e-noomoto` grass rings), and the `E-unoto` Feast electing the `Ol-aunoni` chief (pp. 294–301)**; (4) **Marriage (`En-giyama`: bride-price of 3 heifers & 2 bullocks calling spouses `Pakiteñg`, 1 sheep calling each other `Pakerr`, and honey-beer), Refuge (`Kitala`), Death & Word-Taboo (renaming `en-nanai` 'soft/gentle' to `epolpol` and `Ol-onana` to `Ol-opolpol` when an elder named `Ol-onana` dies, pp. 304–305), Stone-Cairn Burial (`en-gurare`) of `il-oibonok` & rich elders whose souls become sacred clan pythons/cobras (`il-asuria`, fed with milk when visiting their kraals, pp. 305–308), Mourning (`Em-buroto`), and Primogeniture Inheritance (`En-juñgore`, pp. 308–310)**; (5) **Crimes & Penalties (pp. 310–313)**: Theft (`Muro!` alarm cry; fine of 7 cattle + 1 ox for stealing an ox, or 8 sheep for a sheep), Murder blood-money (`ol-oikopani` pays 50 young bulls for killing a boy, or 2-year cattle raid fine for killing a warrior/woman); (6) **Tooth Extraction (`Em-bwata`), Shaving (`Em-barnore`), Spitting (`'N-gamulak`), Food/Blood-Drawing, 9 Wild Animals, Games (`Sambwen` & `en-geshei` board game), Peace Ceremonies (`O-sotwa` nursing an infant & `ol-momai` blood brotherhood), Red Bead (`Patureshi`), Omens (`Il-tiloi` woodpecker *Mesopicus spodocephalus*), Medicine-Men (`'L-oibonok` of `'N-Gidoñgi`: 4 divination tiers and genealogy from heaven-born `Ol-le-Mweiya` → `Ol-le-jaka` → `Teiyan` → `Kikenyi` → `Kipepete` → `Koo-konyokye` → `Sitonik` [slain at `En-gukuo` river] → `Supeet` → `M-Batyany` [d. c. 1890] → `Ol-Onana` [Lenana] & `Sendeu` [Sendeyo, peace 1902], pp. 324–330), and Smiths (`Il-kunono` of `Il-Kipuyoni`, pp. 330–331)**.\n2. **10 Divisions of the Day, 4 Seasons & 12 Lunar Months (pp. 332–334)**:\n   - Hollis (1905, pp. 332–334) records the **10 Divisions of the Day (`Eng-oloñg`)**: 1. `En-gakenya` / `E-saa o-'l-osowuan` (4–6 a.m., dawn / buffalo hour), 2. `Eng-oloñg e-ipuk` (6 a.m., sunrise), 3. `Eng-oloñg e-ilep-ita` (6–10 a.m., sun climbing), 4. `E-ululu eng-oloñg` (10–11:30 a.m.), 5. `Keper eng-oloñg` / `E-mudong` (12 noon), 6. `E-bel-isho eng-oloñg` (12:30–2 p.m., sun turning), 7. `Teipa` (2–5 p.m., afternoon), 8. `E-nyori eng-oloñg` (5–6 p.m., cool evening), 9. `E-sul-ari eng-oloñg` (6 p.m., sunset), 10. `E-ok-i kulle` (6:30–8 p.m., 'milk-drinking time'), and `Keuarye` (8 p.m.–4 a.m., night). The year consists of **4 Seasons and 12 Lunar Months (`Il-aṗaitin`, pp. 333–334)**: **I. `'L-aṗaitin lo-'l-oirujuruj` (Season of Showers)**: 1. `Ol-oiborr-are` ('the white water', Dec.–Jan.), 2. `Ol-odoyiorie-n-gokwa` ('setting of the Pleiades', Jan.–Feb.), 3. `Ol-oilepunye-n-gokwa` ('rising of the Pleiades', Feb.–Mar.); **II. `'L-aṗaitin lo-'l-ameyu` (Season of Hunger/Heat)**: 4. `Kujorok` ('luxuriant coat of hair', Mar.–Apr.), 5. `O-erat` ('scanty pools', Apr.–May), 6. `O-esumeri-n-gishu` ('cattle tracks visible', May–June); **III. `'L-aṗaitin lo-'l-tumurel` (Season of Heavy Rains)**: 7. `Ol-oikokwa` (June–July), 8. `Karaobo` ('mist/clouds', July–Aug.), 9. `Kiok` ('early morning showers', Aug.–Sept.); **IV. `'L-aṗaitin le-'l-leñgon` (Season of Plenty)**: 10. `ti-Arata` ('green valleys', Sept.–Oct.), 11. `Ol-kipelos` ('satisfaction', Oct.–Nov.), 12. `Ol-oisorua` ('heavy thunder showers', Nov.–Dec.).\n3. **45+ Botanical & Medicinal Trees ('L-kak, pp. 335–342) & 8 Songs and Prayers ('Singolioitin, pp. 345–356)**:\n   - Pages 335–342 catalogue **45+ indigenous trees and plants (`Il-kak`)** used for broth decoctions, purgatives, arrow shafts, milk-gourd smoking, and fire-making: including `Ol-kiloriti` (*Acacia abyssinica*, stimulating bark soup causing warriors `a-parapara`), `Ol-mukutan` (*Albizzia anthelmintica*, anthelmintic bark), `Ol-oisuki` (*Zanthoxylum hostii*, fragrant spice/cough remedy), `Ol-oirien` (*Olea chrysophylla*, wild olive burned to fumigate milk gourds with `ol-tim`), `Ol-tarakwai` (*Juniperus procera*, East African cedar used for the lower female firestick `en-dole` paired with the upper male drill `ol-piron` of `ol-okii` or `ol-mesigiyoi`, p. 342), `Ol-reteti` (*Ficus*, sacred banyan of women's fertility prayers), `Ol-ngaboli` (*Ficus sycomorus*), `Ol-mesera` (*Adansonia digitata*, baobab), `Ol-oponi` (*Erythrina tomentosa*), `Ol-tukai` (*Phoenix reclinata*, wild date palm), and `O-sinandei` (*Calotropis procera*, fermentation bark for honey-beer). Finally, pages 345–356 record **8 interlinear Songs and Prayers (`'Singolioitin`)**: (1) `Eng-aduñgata e-'sita` (Elder's song after passing the fence: *Ki-to-omon-o Eng-ai o M-batyany...*); (2) Women's & Children's Rain Song with handfuls of grass (*Soi! Naiteru-kop...*); (3) Women's Fertility Prayer around the `ol-reteti` tree smeared with milk, fat, and honey-wine (*Ai! Naiteru-kop! Ai! Eng-ai, k'-omon-o in-doiye oo 'l-muran...*); (4) Warriors' Raid Return Song (`En-oo-'n-dorosi`, singing *Hoi! Hoi! Wooi!* and praising `Ol-o-melil-kujita`); (5) Women's Prayer While Warriors Are on a Raid (*Eng-ai o Āsa, en-da-nyañg-ak-i 'l-omon loo-'l-ayiok lañg...*, addressing `Eng-ai`, the Sun `Āsa`, the Moon, Stars, and `Ol-doinyo Oibor` = Kilimanjaro); (6–7) Mothers' Praise Songs for Brave Sons (*En-da-ra en-aisho na-toyio...*) and Warriors (*E-ma-ton-i ma-ta-rany...*); and (8) Song of the Newly Elected `Ol-aunoni` Chief (*Ol-mañgatinda le-me-puo 'n-gishu aañg!*, pp. 354–356).",
    "examples": [
      {
        "maasai": "Il-mishiren (cattle hide brands) • Il-ponot (ear-slits) • Il-kipulul (sheep/donkey ear-flaps)",
        "english": "livestock heraldry terminology (Hollis 1905, p. 290)",
        "explanation": "Life-Cycle Ceremonies, Customary Law, Sacred Snakes & Medicine-Men (pp. 282–331)"
      },
      {
        "maasai": "Ol-le-Mweiya → ... → Supeet → M-Batyany → Ol-Onana (Lenana) & Sendeu (Sendeyo)",
        "english": "9-generation genealogy of the 'N-Gidoñgi medicine-men (Hollis 1905, pp. 326–330)",
        "explanation": "Life-Cycle Ceremonies, Customary Law, Sacred Snakes & Medicine-Men (pp. 282–331)"
      },
      {
        "maasai": "En-gakenya (E-saa o-'l-osowuan, 4–6 a.m.) • Keper eng-oloñg (noon) • E-ok-i kulle (6:30–8 p.m.)",
        "english": "dawn buffalo-hour, midday, and evening milk-drinking hour (Hollis 1905, p. 332)",
        "explanation": "10 Divisions of the Day, 4 Seasons & 12 Lunar Months (pp. 332–334)"
      },
      {
        "maasai": "Ol-oirujuruj (Showers, Months 1–3) • Ol-ameyu (Drought, 4–6) • Ol-tumurel (Rains, 7–9) • El-leñgon (Plenty, 10–12)",
        "english": "the 4 seasons and 12 lunar months of the Masai calendar (Hollis 1905, pp. 333–334)",
        "explanation": "10 Divisions of the Day, 4 Seasons & 12 Lunar Months (pp. 332–334)"
      },
      {
        "maasai": "Ol-kiloriti (Acacia abyssinica) • Ol-mukutan (Albizzia anthelmintica) • Ol-oirien (Olea chrysophylla)",
        "english": "core Masai medicinal and ritual trees (Hollis 1905, pp. 335–342)",
        "explanation": "45+ Botanical & Medicinal Trees ('L-kak, pp. 335–342) & 8 Songs and Prayers ('Singolioitin, pp. 345–356)"
      },
      {
        "maasai": "ol-piron (male upper fire-drill of ol-okii) + en-dole (female lower hearth of ol-tarakwai)",
        "english": "traditional Masai fire-making apparatus (Hollis 1905, p. 342)",
        "explanation": "45+ Botanical & Medicinal Trees ('L-kak, pp. 335–342) & 8 Songs and Prayers ('Singolioitin, pp. 345–356)"
      },
      {
        "maasai": "\"Ai! Naiteru-kop! Ai! Eng-ai, k'-omon-o in-doiye oo 'l-muran!\"",
        "english": "women's fertility prayer at the sacred ol-reteti fig tree (Hollis 1905, pp. 348–349)",
        "explanation": "45+ Botanical & Medicinal Trees ('L-kak, pp. 335–342) & 8 Songs and Prayers ('Singolioitin, pp. 345–356)"
      }
    ]
  },
  {
    "id": "maasai-hinde-1901-grammar-verbs-phrases",
    "title": "13. Hildegarde Hinde (1901): Grammatical Rules (§§ 1–23), 9 Plural Suffix Methods, 65 Verb Paradigms, 340 Phrases, Songs, Toponyms & Curses (pp. i–xii, 1–75)",
    "summary": "Complete line-by-line reference for Hildegarde Hinde's 'The Masai Language: Grammatical Notes Together with a Vocabulary' (Cambridge University Press, 1901, pp. i–xii, 1–75): Preface & Errata slip, Phonology & Rules (1)–(23), Sexagesimal Counting (īp = 60), 9 Regular Noun Plural Suffix Methods, 65 Verb Conjugation Tables, 340 Conversational Phrases, Salutations, 3 Songs, 3 Ethnonyms, 8 Geographical Names, 10 Curses, and 5 Vocabulary Footnotes.",
    "content": "1. **Preface (pp. v–ix), Tipped-in Errata Slip & Phonological System (pp. 1–2)**:\n   - Compiled by **Hildegarde Hinde** during two years spent among the Masai in British East Africa (Preface dated 1900; Editor's Note on p. xi signed `E. C. M.`, UC Berkeley copy `PL8501 H5 1901 MAIN`), *The Masai Language* was gathered directly without Swahíli or native interpreters by testing 20–30 similarly constructed sentences across multiple Masai speakers. Hinde reviews the only two prior Masai vocabularies—(1) **Rev. J. Ehrhardt's Vocabulary** (Würtemburg, 1857, ~1,000 words learned from Swahílis at the coast, prefaced by Dr. J. L. Krapf) and (2) **Sir H. H. Johnston's *Kilima Njaro Expedition*** (gathered from Wa-kwavi and through interpreters at Mandara's court)—and explains why she writes `ol-` and `en-` fused with the noun stem rather than separated by a hyphen (`orldia` 'dog/bitch', `orrgenoss` 'crocodile', `mparnass` 'duyker', `nottorrangi` 'chameleon', `baba` 'father', `yeyu` 'mother', `ngai` 'God/rain', `ngima` 'fire', `nda` 'food', `ngop` 'country', `ngolong` 'day/sun', `endim` 'forest', `endiul` 'gun', `engeringu` 'meat', `ngwess` 'game', `engojeta` 'grass', and invariable `sidai` across `sidai orlaiyon`, `sidai engitok`, `sidai ngishu`, `sidai ngaji`, `sidai nda`, `sidai orldia`). Having conjugated and studied **over 70 verbs**, she notes that only in **'to bring'** do personal pronouns precede the verb throughout (qualified by the **Tipped-in Errata Slip between pp. viii and ix**, which notes that in *'to bring'* the pronouns may also follow the verb, and corrects p. viii par. 2 `ngaju, en` to `gaju, en`). Her **21-letter alphabet** (`a b c d e g h i j k l m n o p r s t u w y`) plus **8 special sounds** (`ä, ö, oi, ü, sh, ss, rr, ai`) notes the aspirate in `oshiagi` ('also') and `ishigo` ('better'), free `b/p` and `g/k` interchange, burred `rr`, sharp hissing `ss`, prenasalized initial `m/n`, and liaison consonants `n, k, b` inserted between vowels (`ainyo berora?` = 'why sleep?').\n2. **Grammatical Rules §§ 1–16: Pronouns, Negations, Sexagesimal Numerals (īp = 60), Possessives & Verb Moods (pp. 2–8)**:\n   - Rules (1)–(16) establish: **(1) Personal Pronouns (p. 2)**: 1s `nanu` (I), 2s `iye` (thou), 3s `nenye` or `ninyi` (he/she/it), 1p `iog` or `eeog` (we), 2p `ndai` or `iye` (you), 3p `nenje` or `ninji` (they); **(2) Interrogative Tone (p. 2)**: `aemwi` ('I am ill') vs. `aemwi?` ('Am I ill?'); **(3) Negations (pp. 2–3)**: `meti` and its prefixes `mer` (before consonants except `s`: `mer torono` 'not bad', `mer gule` 'not milk'), `me` (before `s`: `me sidai` 'not good', `me sabuk` 'not large'), `m` (before vowels: `maiu` 'I do not want', `maiulu` 'I do not know'), and `ete / etwa / etu` (`etwaolo` 'I am not going', `eteau` 'he will not bring', `eteanawri` 'I am not tired'); **(4) Conjunctions & Prepositions (p. 3)**: omitted 'and' (`orldia embarrie` 'dog and cat', `eltungana engitok` 'man and woman'), euphonic `o / oi` with vowel elision (`nan oiye` < `nanu iye`, `neny oiye` < `nenye iye`), and preposition `atwa` ('in': `atwa ngaji` 'in the house', `atwa ngoshogi` 'in the stomach', `atwa engang` 'in the kraal'); **(5)–(8) Gender & Adjectives (pp. 3–4)**: only sheep, goat, ass, and cow have separate words for male and female; adjectives take a euphonic initial consonant (`engela kenyuki` 'red cloth', `ngare nairogua` 'hot water') and precede or follow nouns (`ērdo ngāiji` 'long house', `ndari nārok` 'black goat'); **(9)–(10) Sexagesimal Numerals & Finger-Counting (pp. 4–5)**: numerals follow the noun (`Arradua ngishu iīp` 'I see a hundred cows'): 1 `nabu`, 2 `ari / are`, 3 `ūni`, 4 `ungwun`, 5 `miet`, 6 `elle`, 7 `nabishāna`, 8 `issiet`, 9 `nawdu / endōrroi`, 10 `tomon`, 11 `tomon obbo`, 12 `tomon are`, 13 `tomon ogūni`, 14 `tomon ungwun`, 15 `tomon oimiet`, 16 `tomon oiille`, 17 `tomon nabishāna`, 18 `tomon oissiet`, 19 `tomon nawdo`, 20 `tigitum`, 30 `ossom`, 40 `arrtam`, 50 `orrnom`, **60 `īp` ('which equals our 100. The Masai count in sixties, and a company of warriors is composed of 60 men')**, Two sixties `īp ari`, First `tangasaino`, Last `korom` (with finger-counting gestures: closed fist = 5, two closed fists = 10, snapping fingers of one hand = 60, snapping fingers of both hands several times = very large number); **(11)–(12) Adjective Declensions & Possessives (pp. 5–6)**: 6-person declensions for `aemwi` ('I am ill'), `aranawei` ('I am tired'), and `arabiēro` ('I am well'), plus postposed possessives (`lai/elai/ai` 'my', `enino` 'thine', `enenye/eno` 'his/hers/its', `enāang/ung/oog` 'our', `eninyi/nyn/linyi` 'your', `āasho/ejanggarr/enje` 'their', plus p. 35 fn. `*` on `baba/yeyu` vs. `minyi/menye` & `ngutungy/ngotongy/nutun/notorn`); and **(13)–(16) Verb Infinitives in `n-`, Past `edeba`, 'To Be / Have' & Imperatives in `t- / en-` (pp. 6–8)**: singular vs. plural infinitives (`nadung / negidung` 'to cut', `nebong / negibong` 'to catch', `naisoja / negasoja` 'to bathe'), past tense prefixed by `edeba` ('finished'), and imperatives in `t-` (sg.) vs. `en-` (pl.) (`arrany → tarranya / endarrain` 'sing!', `agil nanu → tegella / endegi` 'break!', `etejo nanu → toojo / endojo` 'say!').\n3. **Rules §§ 17–23: The 9 Regular Plural Suffix Methods, 2 Prefix Plurals, 7 Irregulars & 65 Verb Conjugation Paradigms (pp. 8–30)**:\n   - Rules (18)–(21) classify Masai noun plurals into **9 Regular Suffix Methods (p. 9)**: **(1) `-i, -oi, -ni`** (`engela → engelani` cloth, `ndap → ndapi` palm, `orlōrro → orlōrroi` he-goat); **(2) `-a, -ia`** (`oldulet → olduleta` bottle, `essurutie → essorudia` earring, `essondai → essondā` wall); **(3) `-u, -tu`** (`ingobirr → ingobirru` feather, `emurrt → emurrtu` neck, `oldonyi → elōnitu` skin); **(4) `-n, -in`** (`ossesi → essessin` body, `ōrgenoss → ergenossin` crocodile, `mbarrda → mbarrdan` horse); **(5) `-k, -ak, -ok`** (`ngorraion → ngorroiok` woman, `emoworr → mowarrak` horn, `orlāmonon → lamonok` beggar); **(6) `-g`** (`ngaina → ngaieg` arm, `ndāridigi → ndāridig` bird); **(7) `-r, -rr`** (`ngera → ngerr` child, `emossori → emossorr` egg, `endōlu → endōluer` axe); **(8) `-o`** (`olashi → olasho` calf, `endōlit → endōlo` marrow); and **(9) `-t`** (`ollogurrto → ollogurrt` caterpillar, `engumoru → engumurrt` cavity, `engias → engiaset` work)—alongside **2 Prefix Plurals (Rule 19)**: `yeyu → noiyeyu` (mother) and `loom → eloom` (twig); **7 Irregular Plurals (Rule 20)**: `orromashere → ellemasher` (tick), `ingirigura → maigurana` (dance), `ollomagaw → errmagawl` (hippopotamus), `orrigena → ellgiē` (breast), `orrborrnoto → irrgonot` (mark), `oloirika → lorrigaishi` (chair), and `emālo → miggibi` (kudu); and **5 Invariable Nouns (Rule 21)**: `ngolong` (sun), `orrümünyi` (beard), `loisusu` (flea), `ngima` (fire), and `baba` (father). Pages 11–30 then present **65 complete 6-person verb conjugation paradigms** (54 Regular Affirmative Verbs on pp. 11–27, 4 Irregular Verbs—*to say, to ask, to die, to fight*—on pp. 27–28, and 7 Negative/Modal Verbs—*I can, I cannot, I do not like, I do not wait, I do not eat, I do not drink, I do not want*—on pp. 28–30), followed by **340 categorized conversational phrases** across 7 sections on pp. 31–40.\n4. **Salutations, 3 Songs, 3 Ethnonyms, 8 Geographical Names, 10 Curses & 5 Vocabulary Footnotes (pp. 41–75)**:\n   - Pages 41–43 preserve five ethnographic and oral-literature treasures: **(1) Salutations (p. 41)**: To a woman `tagwenia` (lit. 'laugh'), pl. `tagwenia bōōgi` — Reply `īgo`; To a man `soboi` — Reply `eber`; On shaking hands `nassak`; **(2) 3 Traditional Songs (p. 42)**: *Song the children sing for rain*: `Siumbi aielisiumbi ngai kijaiga eo!` ('God we sing, God rain we pray thee oh!'); *Medicine Song*: `Aamon yi ngai, aamon m'Batian.` ('We pray God, we pray Batian.'); *Song sung by the warriors when going to fight Sendeyo*: `Sendeyo manoloimoti tendeboi errakenja bonik oldash irremeta.` ('Sendeyo has done evil, we were friends once but now we go to fight him with our spears, the big ones in front, the small behind.'); **(3) 3 Group Ethnonyms (p. 42)**: Masai sg. `Orrmāssani` / pl. `elmāsai`; Hunters sg. `olldōrrobon` / pl. `dōrrobo`; Iron workers sg. `orrgunoni` / pl. `elgunonu`; **(4) 8 Geographical Place-Names (p. 42)**: `Kenia (mt.)` = `oldonyo gēri` ('the striped mountain'), `Kilima Njaro (mt.)` = `oldonyo eborr` ('the white mountain'), `Suswa (mt.)` = `oldonyo kenyuki` ('the red mountain'), `Nairobi (river)` = `ngare nairobi` ('Cold — the river comes from the forest and is very cold as it emerges into the open'), `Ngongo bagas (river)` = 'the eye of the Spring', `Eldonyo sabuk (mt.)` = 'the big mountain', `Gwasso kidong (river)` = 'the river of the ollokidong trees (the wood of which is used for making quivers)', and `Enaibasha (lake)` = 'the great water or sea'; and **(5) 10 Curses (p. 43)**: 1. `Djerrterrā` (against the man addressed), 2. `Njertērrda` (against the man addressed), 3. `Mining jangayenda` (against a man and his father), 4. `Kirrigūmini` (curse on the father saying the person cursed is a bastard), 5. `Injeraii` (supposed to cause the death of a brother or sister), 6. `Tadui munigilidoigi` (supposed to cause the person addressed to die), 7. `Injerai kordai` (a child's curse), 8. `Miinjirria nigiruk` (a child's curse), 9. `Mbussa bwaara` ('Fool'), and 10. `Mbarra` (accompanied by spitting; equivalent of 'damn'). Finally, the **A–Z Vocabulary (pp. 45–75)** includes **5 footnotes**: p. 47 (`adjudge`: all verbs given in the Imperative so learners can be understood before mastering conjugations), p. 48 (`basket`: `engiondo [kikuyu] pl. engiondoni`), p. 59 (`jigger`: `ndudu [kiswahili]`), p. 65 (`potato`: `ngwashin [kikuyu]`), and p. 70 (`syphilis`: `ngaioulu`, lit. 'God knows', introduced by Swahilis).",
    "examples": [
      {
        "maasai": "sidai orlaiyon (a good boy) • sidai engitok (a good woman) • sidai ngishu (a good cow) • sidai ngaji (a good house)",
        "english": "invariable predicate/attributive adjective sidai across noun classes (Hinde 1901, p. vii)",
        "explanation": "Preface (pp. v–ix), Tipped-in Errata Slip & Phonological System (pp. 1–2)"
      },
      {
        "maasai": "oshiagi (also) • ishigo (better) • ainyo berora? (why sleep? — b liaison before vowel)",
        "english": "aspirate words and euphonic b liaison recorded on pp. 1–2, 10",
        "explanation": "Preface (pp. v–ix), Tipped-in Errata Slip & Phonological System (pp. 1–2)"
      },
      {
        "maasai": "mer torono (not bad) • me sidai (not good) • maiu (I do not want) • etwaolo (I am not going)",
        "english": "the four negation prefixes mer-, me-, m-, and ete-/etwa-/etu- (Hinde 1901, pp. 2–3)",
        "explanation": "Grammatical Rules §§ 1–16: Pronouns, Negations, Sexagesimal Numerals (īp = 60), Possessives & Verb Moods (pp. 2–8)"
      },
      {
        "maasai": "nabu (1), ari (2), ūni (3), ungwun (4), miet (5), elle (6), nabishāna (7), issiet (8), nawdu (9), tomon (10), tigitum (20), ossom (30), arrtam (40), orrnom (50), īp (60 = Masai '100')",
        "english": "Hinde's sexagesimal Masai numeral system where 1 warrior company = 60 men = īp (pp. 4–5)",
        "explanation": "Grammatical Rules §§ 1–16: Pronouns, Negations, Sexagesimal Numerals (īp = 60), Possessives & Verb Moods (pp. 2–8)"
      },
      {
        "maasai": "baba lai (my father) vs. minyi / menye (thy/his father) • yeyu ai (my mother) vs. ngutungy / ngotongy (thy/his mother)",
        "english": "1st-person vs. 2nd/3rd-person kinship stem distinction (Hinde 1901, p. 35 fn. *)",
        "explanation": "Grammatical Rules §§ 1–16: Pronouns, Negations, Sexagesimal Numerals (īp = 60), Possessives & Verb Moods (pp. 2–8)"
      },
      {
        "maasai": "yeyu → noiyeyu (mother) • loom → eloom (twig) • emālo → miggibi (kudu) • oloirika → lorrigaishi (chair)",
        "english": "Hinde's 2 prefix plurals and irregular plurals (Rules 19–20, pp. 9–10)",
        "explanation": "Rules §§ 17–23: The 9 Regular Plural Suffix Methods, 2 Prefix Plurals, 7 Irregulars & 65 Verb Conjugation Paradigms (pp. 8–30)"
      },
      {
        "maasai": "nanu aiaw (I bring), iye iaw (thou bringest), nenye eaw (he brings), iog kiaw (we bring), ndai iaw (you bring), nenje eaw (they bring)",
        "english": "'to bring' — the verb noted in the Preface (p. ix) and Errata slip for preposed/postposed pronouns (p. 12)",
        "explanation": "Rules §§ 17–23: The 9 Regular Plural Suffix Methods, 2 Prefix Plurals, 7 Irregulars & 65 Verb Conjugation Paradigms (pp. 8–30)"
      },
      {
        "maasai": "tagwenia (pl. tagwenia bōōgi) — īgo! • soboi — eber! • nassak!",
        "english": "women's greeting, men's greeting, and handshake salutation (Hinde 1901, p. 41)",
        "explanation": "Salutations, 3 Songs, 3 Ethnonyms, 8 Geographical Names, 10 Curses & 5 Vocabulary Footnotes (pp. 41–75)"
      },
      {
        "maasai": "\"Siumbi aielisiumbi ngai kijaiga eo!\" • \"Aamon yi ngai, aamon m'Batian.\" • \"Sendeyo manoloimoti tendeboi errakenja bonik oldash irremeta.\"",
        "english": "the 3 traditional Masai songs recorded verbatim on p. 42 of Hinde (1901)",
        "explanation": "Salutations, 3 Songs, 3 Ethnonyms, 8 Geographical Names, 10 Curses & 5 Vocabulary Footnotes (pp. 41–75)"
      },
      {
        "maasai": "oldonyo gēri (Mt. Kenya) • oldonyo eborr (Kilimanjaro) • oldonyo kenyuki (Suswa) • ngare nairobi • Ngongo bagas • Eldonyo sabuk • Gwasso kidong • Enaibasha",
        "english": "all 8 geographical place-names and etymologies on p. 42 of Hinde (1901)",
        "explanation": "Salutations, 3 Songs, 3 Ethnonyms, 8 Geographical Names, 10 Curses & 5 Vocabulary Footnotes (pp. 41–75)"
      }
    ]
  }
];

MAASAI_GRAMMAR_SECTIONS.push({
  id: "maasai-cust-1883-kwafi-masai-vol1",
  title: "14. Robert Needham Cust (1883, Vol. I, Ch. X.A.V–VI, pp. 149–152): 'A Sketch of the Modern Languages of Africa' — Kwáfi (Engútuk Eloikób) & Masai (Enguduk Iloigob) in the Nuba Sub-Group, Krapf (1854), Erhardt (1857), Last's 6,000-Word Humba Lexicon, Farler, Wakefield, New, Thomson (1883) & Lepsius's 6 Structural Features",
  summary: "Complete line-by-line synthesis of Robert Needham Cust's treatment of V. Kwáfi (pp. 149–151) and VI. Masai (pp. 151–152) in 'A Sketch of the Modern Languages of Africa', Vol. I (London: Trübner & Co., 1883, Ch. X Nuba-Fulah Group): autonyms Loikób / Eloikób ('Men'), Engútuk Eloikób (Krapf 1854) & Enguduk Iloigob (Erhardt 1857), J. T. Last's 6,000-word Humba vocabulary at Mamboia, Farler & Wakefield's caravan routes, Arúsha & Ndorobo 'Helot Races', Joseph Thomson's 1883 RGS expedition, and Lepsius's (1880) 6 grammatical hallmarks.",
  content: "From Robert Needham Cust (*A Sketch of the Modern Languages of Africa, Accompanied by a Language-Map*, Vol. I, London: Trübner & Co., 1883, Ch. X *III. Nuba-Fulah Group — A. Nuba Sub-Group*, Nos. V–VI, pp. 149–152):\n1. **Classification in Friedrich Müller's & Cust's Nuba Sub-Group (Ch. X, pp. 141–152)**:\n   - Following **Friedrich Müller** and **Richard Lepsius**, Cust classifies **V. Kwáfi** and **VI. Masai** at the southeastern extremity of the **Nuba Sub-Group** (alongside Nuba, Koldaji, Tumále, Konjára, Berta, Kamamíl, Funj, Tabi, Haméj, Golo, Krej, Sehre, Nyam-Nyam/Sandeh, and Monbutto), pressing directly upon the Bántu tribes from the slopes of **Mount Kenia** and **Kilimanjáro** to the eastern shore of **Victoria Nyanza**.\n2. **V. KWÁFI (*Loikób / Eloikób — Engútuk Eloikób*, Book pp. 149–151)**:\n   - **Habitat & Autonym**: Situated nearly on the Equator, south of the Galla and north of the Bántu tribes, reaching down to the **slopes of Mount Kenia** and stretching westward toward **Victoria Nyanza**. They call themselves **`Loikób`** (plural **`Eloikób`**, meaning **'Men'**; Swahili corruption *Wa-Kwáfi* from *Loi-Kwáfi*), and have **Helot Races** in subjection to them who speak an unknown language of their own (p. 150).\n   - **Krapf's 1854 Tübingen Monograph**: While residing at **Mombása**, **Rev. Dr. J. L. Krapf** had daily intercourse with a learned Kwáfi slave belonging to a Mahometan master and published ***Vocabulary of the Engútuk Eloikób, or the Language of the Khwáfi Tribe in East Africa*** (Tübingen: CMS, **1854**), containing a Vocabulary, short Grammatical Note, a translation of part of the **First Epistle of St. John, Ch. 1**, and short Texts (reviewed by **Lepsius** and **Ewald** in *ZDMG*, p. 150).\n   - **J. T. Last's 6,000-Word *Humba* Vocabulary, Farler, Wakefield & New (pp. 150–151)**:\n     - **Rev. J. T. Last** of the C.M.S. at **Mamboia** came into contact with the **Humba** tribe of Kwáfi and collected a **Vocabulary of 6,000 words**.\n     - **Archdeacon J. P. Farler** of the U.M.C.A. at **Magíla** wrote to Cust that Kwáfi is a dialectal variety of Masai, with the two tribes understanding each other thoroughly.\n     - **Rev. Thomas Wakefield** (at **Ribé** near Mombása) and **Rev. Charles New** documented the **Arúsha** southwest of Kilimanjáro as descendants of the Kwáfi now subject to the Masai.\n3. **VI. MASAI (*Loikob — Enguduk Iloigob*, Book pp. 151–152)**:\n   - **Habitat, Anti-Slavery Ethos & *Ndorobo* Helot Race**: Intervene between the Bántu tribes **west of Mombása** and the **eastern shore of Victoria Nyanza**. Like the Kwáfi, they call themselves **`Loikob`** and their language **`Enguduk Iloigob`**. They neither practise nor tolerate slavery—hence they fiercely attack Arab slave-caravans that kidnap Masai children—while **Helot Races**, including the hunting **Ndorobo** (cross-referenced to Ch. XIII in Vol. II), live in subjection to them (p. 151).\n   - **Erhardt & Krapf (1857), Last, Wakefield, Farler & Joseph Thomson's 1883 Expedition (pp. 151–152)**:\n     - **Rev. J. Erhardt** compiled from oral information at the coast his ***Vocabulary of the Enguduk Iloigob, as spoken by the Masai-tribes in East-Africa*** (Masai–English and English–Masai, edited by **Dr. L. Krapf** and printed at Württemberg in **1857**), in which Erhardt and Krapf first announced the great Equatorial Lake (*Victoria Nyanza*) and the snow-capped mountains (*Kenia* and *Kilimanjáro*).\n     - **Rev. J. T. Last** visited the Masai from Mamboia via Nguru and collected a Vocabulary and Sentences; **Wakefield** and **Farler** published detailed native caravan routes through the Masai Country to Victoria Nyanza.\n     - In **1883**, the Royal Geographical Society dispatched **Joseph Thomson** from **Mombása through the Masai Country to Victoria Nyanza**, supplied by Cust with copies of all printed books in Masai and Kwáfi.\n   - **Lepsius's (1880) Six Grammatical Hallmarks of Masai (p. 152)**:\n     - In the Preface to his *Nuba Grammar* (**1880**), **Prof. Richard Lepsius** analyzed Erhardt's and Krapf's Masai materials and identified six defining structural features distinguishing Masai from Bantu:\n       1. **Absence of Bantu Nominal Class Prefixes, Alliteration, Tones (in Lepsius's view), and Nasalization** (though possessing grammatical gender prefixes).\n       2. **Personal Pronouns Prefixed to the Verb Root**.\n       3. **Prepositions Used Instead of Postpositions**.\n       4. **Genitive Placed After the Governing Noun**.\n       5. **Verb Placed Between Subject and Object (or Verb-Initial)**.\n       6. **Absence of Vowel-Final Word Requirement** (many words ending in consonants).",
  examples: [
    {
      maasai: "Loikób / pl. Eloikób ('Men') • Engútuk Eloikób (Krapf 1854 Tübingen Kwáfi Vocabulary & 1 John Ch. 1) • Enguduk Iloigob (Erhardt & Krapf 1857 Württemberg Masai–English / English–Masai Vocabulary)",
      english: "The earliest printed Maa (Kwáfi & Masai) vocabularies and texts documented in Cust (1883, Vol. I, pp. 149–152)",
      explanation: "Robert Needham Cust, A Sketch of the Modern Languages of Africa, Vol. I (1883, Ch. X.A.V–VI, pp. 149–152)"
    },
    {
      maasai: "Humba (J. T. Last's 6,000-word Kwáfi vocabulary at Mamboia) • Arúsha (Kwáfi descendants subject to Masai — Wakefield & New) • Ndorobo (hunting 'Helot Race' subject to Masai, p. 151)",
      english: "Regional Maa varieties and hunter-gatherer tributaries recorded in Cust (1883, Vol. I, pp. 150–151)",
      explanation: "Robert Needham Cust, A Sketch of the Modern Languages of Africa, Vol. I (1883, Ch. X.A.V–VI, pp. 150–151)"
    }
  ]
});
