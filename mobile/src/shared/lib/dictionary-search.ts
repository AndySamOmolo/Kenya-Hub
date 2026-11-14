import type {
  DictCategory,
  DictEntry,
  Dictionary,
} from "../data/dictionaries/metadata";

/**
 * Standard language family color palette used across web and mobile views.
 */
export const FAMILY_COLORS: Record<string, string> = {
  bantu: "#2FA463",
  nilotic: "#C8961E",
  cushitic: "#BE2126",
  other: "#1A8BD1",
};

/**
 * Curated list of core comparison headwords available across all 22 Kenyan dictionaries.
 */
export const POPULAR_COMPARE_WORDS: string[] = [
  "Water",
  "Hello",
  "Thank you",
  "Father",
  "Mother",
  "Food",
  "God",
  "Cow",
  "One",
  "Two",
  "Friend",
  "Sun",
  "Fire",
  "House",
];

/**
 * Normalizes an English or indigenous headword into clean, comparable lookup tokens
 * so English can serve as an accurate bridge between any two Kenyan languages.
 */
export function extractNormalizedTerms(raw: string): string[] {
  const cleaned = raw
    .toLowerCase()
    .replace(/^\[[^\]]*\]\s*/g, "")
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/[!?.]/g, "")
    .trim();
  const baseHead = cleaned.split(/\s*[—–:|•]\s*/)[0].trim();
  const parts = cleaned
    .split(/[\/,;—–:|•]/)
    .map((s) => s.trim())
    .filter(Boolean);

  const out = new Set<string>();
  const addVariant = (v: string) => {
    if (!v) return;
    out.add(v);
    const nfd = v.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (nfd) out.add(nfd);
    const noApostrophe = nfd.replace(/['’‘ʻ]/g, "");
    if (noApostrophe && noApostrophe.length >= 2) out.add(noApostrophe);
    if (v.startsWith("to ")) {
      const bare = v.slice(3).trim();
      addVariant(bare);
    }
    if (v.startsWith("-")) {
      const bare = v.slice(1).trim();
      if (bare.length >= 2) addVariant(bare);
    }
  };

  addVariant(cleaned);
  addVariant(baseHead);
  for (const p of parts) addVariant(p);
  return Array.from(out);
}

export interface IndexedDictEntry {
  entry: DictEntry;
  cat: DictCategory;
  engLower: string;
  transLower: string;
  engTerms: string[];
  transTerms: string[];
}

export interface DictSearchIndex {
  all: IndexedDictEntry[];
  byEngTerm: Map<string, IndexedDictEntry[]>;
  byTransTerm: Map<string, IndexedDictEntry[]>;
}

const DICT_INDEX_CACHE = new WeakMap<Dictionary, DictSearchIndex>();

const HOLLIS_1909_TRUNCATED_VERB_FIXES: Record<string, string> = {
  "ime pr": "ime (pr. a-'me-i, p.p. ka-a-'me)",
  "nyulnyul-ke pr": "nyulnyul-ke (pr. a-nyulnyul-i-ke, p.p. ka-a-nyulnyul-ke)",
  "sir pr": "sir (pr. a-sir-e, p.p. ka-a-sir)",
  "siriny pr": "siriny (pr. a-siriny-i, p.p. ka-a-siriny)",
  "yem-ak-e pr": "yem-ak-e (pr. a-yem-at, p.p. ka-a-yem-ak-e)",
  "o-kwet-ke pr": "o-kwet-ke (pr. ki-kwet-i-ke, p.p. ka-ki-kwet-ke)",
  "iim pr": "iim (pr. a-iim-i, p.p. kâ-iim)",
  "tañgany pr": "tañgany (pr. a-toñgony-i, p.p. ka-a-tañgany)",
  "imelel pr": "imelel (pr. a-'melel-i, p.p. ka-a-'melel)",
  "res pr": "res (pr. a-res-e, p.p. ka-a-res)",
  "mach pr": "mach (pr. a-moch-e, p.p. ka-a-mach)",
  "ipuch pr": "ipuch (pr. a-'puch-i, p.p. ka-a-'puch)",
  "ñgwech pr": "ñgwech (pr. a-ñgwech-e, p.p. ka-a-ñgwech)",
};

const JOHNSTON_1902_SUPPLEMENTARY_ENTRIES: Record<string, { catId: string; entry: DictEntry }[]> = {
  kalenjin: [
    { catId: "greetings", entry: { english: "How do you do? (singular / plural)", translation: "Tiamge (singular), Otyamge (plural)", pronunciation: "ti-am-ge / o-tyam-ge", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Who is there?", translation: "Ñgō ni?", pronunciation: "ngo ni", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Come quickly!", translation: "Nyo cōk!", pronunciation: "nyo chok", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Wait a bit!", translation: "Kanyīte!", pronunciation: "ka-nyi-te", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "greetings", entry: { english: "Thank you!", translation: "Kongoi, Eñgōñgōi!", pronunciation: "ko-ngoi / e-ngo-ngoi", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Tell him to wait for me", translation: "Mweīcī ko ganyā", pronunciation: "mwei-chi ko ga-nya", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Go away!", translation: "Ui!", pronunciation: "ui", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "greetings", entry: { english: "Goodbye!", translation: "Kātigē!", pronunciation: "ka-ti-ge", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "You're a fool!", translation: "Iberber inye!", pronunciation: "i-ber-ber i-nye", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Take care!", translation: "Ribge!", pronunciation: "rib-ge", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "family", entry: { english: "My good friend!", translation: "Cōriōnyo!", pronunciation: "cho-rio-nyo", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Don't forget", translation: "Meūtye!", pronunciation: "meu-tye", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Lift it up", translation: "Sūt!", pronunciation: "sut", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Go ahead!", translation: "Indōē!", pronunciation: "in-do-e", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Come behind me", translation: "Isubō!", pronunciation: "i-su-bo", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Listen to me!", translation: "Kasā!", pronunciation: "ka-sa", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Get out of the road!", translation: "istoge ēñor!", pronunciation: "is-to-ge e-ngor", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Stand still!", translation: "Toñonye!", pronunciation: "to-ngo-nye", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "food", entry: { english: "Give me water to drink", translation: "Kōnō pek āē", pronunciation: "ko-no pek a-e", context: "Additional Words and Sentences in Nandi — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Sir Charles Eliot's 21 Suk–Nandi Guttural 'gh' (Arabic ghain) Cognate Pairs (Beech 1911, p. xvi, fn. 1)", translation: "ghaʻ / ya (bad) • egh / ei (bullock) • hegh / ē (hand) • nagh / naite (be accustomed) • tagh / tae (front/refuse) • siegh / sie (belch) • togh / tui (black) • ghet / etio (forbid) • maugh / moi (calf) • nyagh / nye (chew) • segh / siiya (claw) • ñgoghom / ñgom (clever) • ghogh / ioi (cook) • ogh / oi-iye (crowd) • meghat / myat (death) • ghiet / ete (deter) • igh / ie (drink) • mwagh / mwai (fat) • nyagh / ñga (grind) • sighin / siin (gullet) • kogh / koi (long)", pronunciation: "gha / ya • egh / ei • hegh / e • togh / tui • mwagh / mwai • kogh / koi", context: "Sir Charles Eliot, Introduction to Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. xvi, fn. 1)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Sir Charles Eliot's Suk vs. Nandi 'r/l' Interchange & Loss of Movable 'i-' Prefix Class (Beech 1911, pp. xvi, xx)", translation: "rel / lel (white) • karual / kalual (red) • nyaril / inyalil (green/oppress) • legit / negit (near) • terus / nero (fat) • ngôtian / kut (even) | Suk classless verbs vs. Nandi i-class: kany / i-kany (wait), kat / i-kat (salute), ker / i-ker (shut), iyit / i-it (count), lugh / i-lu (hurt), nem / i-nem (take out), ñgor / i-ñgor (divine), rat / i-rat (tie), rop / i-rop (punish), sich / i-sich (get), sil / i-sil (borrow), mat / i-mat (fire), kôwa / kôwuet (bone)", pronunciation: "rel / lel • karual / kalual • kany / i-kany • kat / i-kat", context: "Sir Charles Eliot, Introduction to Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, pp. xvi, xx)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Endo (Chep-bleñg) Origin from Kaptapar ('Beyond Sirgoi'), Split Rock-Pillar Legend, Chiefs Lōseron, Lotiram, Wiraporoa & Kapkornis & Customary Law (Beech 1911, pp. 3, 17, 27–37)", translation: "Chep-bleñg (Endo) • Kaptapar (beyond Sirgoi towards Nandi) • Chiefs Lōseron (Merich, Plate IIb), Lotiram (Kowo), Wiraporoa (Kumarin) & Kapkornis (Sakat) • Land price: 3 jars of honey-wine & 2 goats • Bride-price: 4 jars of honey-wine • Kamasia belief: Asis (Sun) is the wife of Torôrut (p. 19, fn. 1)", pronunciation: "chep-bleng / kap-ta-par / lo-se-ron / lo-ti-ram / wi-ra-po-roa / kap-kor-nis", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, pp. 3, 17, 19 fn. 1, 27–37 & Plate IIb)", audioFile: null } },
    { catId: "greetings", entry: { english: "Nandi Salutations: Men's Greeting ('Sopai! — Eiko!') & Women's Greeting ('Takwenya! — Igo!') (Hollis 1909, pp. 84, 164, 229)", translation: "Sopai! (Reply: Eiko! or Sopai!) • Women/Girls: Takwenya! (Reply: Igo!) • Vocational plural: Sopai, murén-ju! / Takwenya, chepiosō-chu! • Thank you: Kongoi! / Asai!", pronunciation: "so-pai / ei-ko / ta-kwe-nya / i-go / ko-ngoi / a-sai", context: "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, pp. 84, 164, 229)", audioFile: null } },
    { catId: "phrases", entry: { english: "Nandi Enigma Challenge Formula: 'A riddle!' — 'Say it!' — 'We cannot guess it; give us a pororiet district!' (Hollis 1909, p. 133)", translation: "Tongoj! — Choo! / Ta-tuñguch! — Ki-sir-to; kōn-ech pororiet!", pronunciation: "to-ngoj / choo / ta-tu-nguch / ki-sir-to ko-nech po-ro-riet", context: "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, p. 133)", audioFile: null } },
    { catId: "culture-history", entry: { english: "The 6 Named Nandi & Kipsikīs Informants in A. C. Hollis's Preface (1909, pp. x–xi)", translation: "5 Nandi Warriors: Oriare, Matang, Ar-ap-Sirtoi, Ar-ap-Kuna & Ar-ap-Chepsiet • Kipsikīs (Lumbwa) Chief Medicine Man (former Nandi): Kipchomber or Ar-ap-Koileke & his son Sonaiet or Ar-ap-Kipchomber", pronunciation: "o-ria-re / ma-tang / ar-ap-sir-toi / ar-ap-ku-na / ar-ap-chep-siet / kip-chom-ber", context: "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, Preface, pp. x–xi)", audioFile: null } },
    { catId: "culture-history", entry: { english: "The 6 Counties (Emet, pl. Emotinuek) & 15 Geographical Districts (Pororiet, pl. Pororōsiek) of Nandi (Hollis 1909, pp. 4–5)", translation: "6 Counties (Emet): 1. Wareñg (N.), 2. Masop (E.), 3. Soiin or Pelkut (S.), 4. Aldai (S.W.), 5. Chesume (W.), 6. Em-gwen (Centre) • 15 Districts (Pororiet): 1. Kâmelilo, 2. Kâpchepkendi, 3. Kâpkiptalam, 4. Koileke, 5. Kâkipoch, 6. Kâpianga, 7. Kâpsile, 8. Tipiñgot, 9. Cheptol, 10. Kimñgoror, 11. Kâkimno, 12. Murk'-ap-Tuk' (Kâpwaren), 13. Kâptumoiis, 14. Kâpsiondoi, 15. Tuken", pronunciation: "wa-reng / ma-sop / soi-in pel-kut / al-dai / che-su-me / em-gwen", context: "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, pp. 4–5)", audioFile: null } },
    { catId: "culture-history", entry: { english: "All 17 Nandi Clans (Oret, pl. Ortinuek), Principal Names, Women's Clan Names, Totems (Tiondo) & Appendix II Etymologies (Hollis 1909, pp. 5–11, 317)", translation: "1. Kipoiis (Koroiit, Chepkoii; jackal, cockroach, rain) • 2. Kipkoiitim (Kâpabo, Chepkoiitim; elephant &ameleon) • 3. Kipamwi (Kâpkatet, Chepamwi; duiker cheptirgichet) • 4. Kipkenda (Maïto, Chepkenda; bee & frog) • 5. Kipkōkōs (Kâpsiron, Chepkōkōs; buzzard chepkōkōsiot) • 6. Kipiegen (Ingoke, Chepiegen; monkey & house-snake) • 7. Talai (Kâpsamei, Cheptalai; lion ñgetundo) • 8. Toiyoi (Moriso, Cheptoiyoi; soldier-ant & rain) • 9. Kipsirgoi (Kâpkon, Chepsirgoi; bush-pig torēt) • 10. Sokom (Kâptolil, Chesokom; hawk chepkukiot) • 11. Moi (Sigilai, Chemoi; crested crane & buffalo) • 12. Kiptopke (Cheptopke; monkey tisiet) • 13. Kâmwaïke (Kipongoi, Chemwaïke; partridge taiyuet) • 14. Tungo (Korapōr, Cheptungo; hyena kimaketyet) • 15. Kipaa (Kâpcheromoi, Chepaa; monkey & snake) • 16. Kipasiso (Kâpchepsiror, Chepasiso; sun & mole) • 17. Chemur (Kâpcherop, Chemur; wild cat)", pronunciation: "ki-poi-is / kip-koii-tim / ki-pam-wi / kip-ken-da / ta-lai / toi-yoi / moi", context: "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, pp. 5–11 & Appendix II p. 317)", audioFile: null } },
    { catId: "culture-history", entry: { english: "The 7 Cyclic Age-Sets (Ipinda, ~52½-Year Cycle), 3 Warrior Fires (Mat, pl. Mostinuek) & Saket-ap-eito Festival (Hollis 1909, pp. 11–13)", translation: "7 Age-Sets (Ipinda): 1. Maina, 2. Nyonge, 3. Kimnyike, 4. Kâplelach, 5. Kipkoiimet, 6. Sowe, 7. Juma (~7½ years between circumcisions) • 3 Fires (Mostinuek) per Age-Set: 1. Changen-opir (senior), 2. Kipal-koñg (middle), 3. Kiptoito (junior) • Handing-over festival: Saket-ap-eito (white bullock sacrifice)", pronunciation: "i-pin-da / mai-na / nyo-nge / kim-nyi-ke / kap-le-lach / kip-koii-met / so-we / ju-ma", context: "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, pp. 11–13)", audioFile: null } },
    { catId: "culture-history", entry: { english: "24-Part Nandi Hut Plan (Kaita / Kot, p. 14), 13 Earthenware Pot Types (Teret, pp. 35–36) & Smith Ar-ap-Sutek at Kâptilol / Ñgoriamuk (Hollis 1909, pp. 14, 35–37)", translation: "Hut (Kaita [m.] / Kot [f.]): njor (men's side), koimaut (women's hearth side), injorut (goat/calf loft), kâpsoiyo (cattle compartment), kimonjokut (roof peak cap), tiliet-ap-ko (threshold), kurenet (door), tabut (attic) • 13 Pots: teret-ap-kimoiik, kiponyit, teret-ap-pendo, teret-ap-ingwek, kipsiluet, chepkoinet, tapet, teret-ap-maiyek, loiet, rokchet, murguiywet, kipismet, chepkonget • Iron ore (ñgoriamuk) blessed at Kâptilol on the Sosiani River by Smith Ar-ap-Sutek", pronunciation: "kai-ta / kot / njor / koi-maut / teret-ap-ki-moi-ik / ar-ap-su-tek", context: "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, pp. 14, 35–37)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Hereditary Orkoiyot Genealogy (Uasin Gishu Masai Origin) & 3-Generation Naming System (Hollis 1909, pp. 50, 68)", translation: "Orkoiyot Genealogy (p. 50): Kipsegun → Kopokoii & Ar-ap-Kipsegun → Turukat → Kimnyole (clubbed to death 1890) → Kipchomber (fled to Lumbwa), Koitalel or Samwei (shot Oct. 1905) & Kipeles or Tamasun • 3-Generation Naming (p. 68): 1. Paroret / Chepsiet / Ar-ap-Kipletiñg → 2. Kimosoñg / Kipēt / Tech-teget / Ar-ap-Chepsiet → 3. Kipsum / Kimuike / Ar-ap-Kipēt", pronunciation: "or-koi-yot / kip-se-gun / tu-ru-kat / kim-nyo-le / koi-ta-lel sam-wei / ki-pe-les", context: "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, pp. 50, 68)", audioFile: null } },
    { catId: "culture-history", entry: { english: "The 12 Nandi Months (Arawet), 30 Lunar Phases & 36 Daily Time Divisions (Hollis 1909, pp. 94–97)", translation: "2 Seasons: Kiptamo (dry, Sept.–Feb.) & Iwat-kut (wet, Mar.–Aug.) • 12 Months: 1. Kiptamo (Feb.), 2. Iwat-kut (Mar.), 3. Wake (Apr.), 4. Ñgei (May), 5. Rob-tui (June), 6. Puret (July), 7. Epeso (Aug.), 8. Kipsunde (Sept.), 9. Kipsunde oieng (Oct.), 10. Mulkul (Nov.), 11. Mulkulik oieng (Dec.), 12. Ñgotioto (Jan.) • 30 Moon Days: Ka-til-it arawet (Day 1) to Ka-me arawet / tililin (Days 29–30) • 36 Daily Hours from 4:00 a.m. (Ka-ok korir metit) to midnight (Kwenut-ap-kemboi)", pronunciation: "kip-ta-mo / i-wat-kut / wa-ke / ngei / rob-tui / pu-ret / e-pe-so / kip-sun-de / mul-kul / ngo-tio-to", context: "A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, pp. 94–97)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Sir Charles Eliot (1909, pp. xxvii–xxviii): Lake Natron Dorobo Dialect & Rift Valley Nandi Toponyms (Morendat & Suswa)", translation: "Lake Natron Dorobo Dialect: arko (he), tichee / ndichee (they); past/passive prefix ar- (ar-a-mach-a 'I wanted', ar-ke-mach-a 'I am wanted'); suffix -anda/-andee (kuyanda bow, pelyandee elephant, puniandee enemy); loss of n (muyare salt, taamuye beard); broad a (maae belly, kaawe bone); v for p (Vanda journey, vaiyaa old man) • Rift Valley Nandi place-names: Morendat (< marandut 'footprint') & Suswa (< susuo/susua 'grass')", pronunciation: "ar-ko / ti-chee / ar-a-ma-cha / ku-yan-da / pel-yan-dee / mo-ren-dat / su-swa", context: "Sir Charles Eliot, Introduction to A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, pp. xxvii–xxviii)", audioFile: null } },
    { catId: "nature", entry: { english: "Appendix I (Hollis 1909, pp. 313–316): 83 Botanical Species Across 32 Plant Families Identified by E. Battiscombe", translation: "Sacred & ritual flora: Simotwet (Ficus sp., sacred fig tree), Sinendet (Periploca linearifolia, sacred twining creeper), Korosiot (Markhamia lanata, fire-sticks & circumcision pole), Emtit (Olea chrysophylla, wild olive), Lebekwet (Dracaena sp., circum-altar), Tinet (Scutia indica), Sosit (Phoenix reclinata, wild date-palm), Tendwet (Pygeum africanum), Chepitet (Acacia abyssinica), Sapotet (Podocarpus milanjianus, bamboo-forest cedar), Tergik (Arundinaria alpina, mountain bamboo), Soliat (Lantana salvifolia)", pronunciation: "si-mot-wet / si-nen-det / ko-ro-siot / em-tit / le-bek-wet / so-sit / sa-po-tet", context: "A. C. Hollis & E. Battiscombe, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, Appendix I, pp. 313–316)", audioFile: null } },
  ],
  maasai: [
    { catId: "animals", entry: { english: "Calf (male / female)", translation: "Ol aṣe (m.), eñgaṣe (f.)", pronunciation: "ol a-se / e-nga-se", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "body", entry: { english: "Kidney", translation: "Ol airini", pronunciation: "ol ai-ri-ni", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Wait a bit!", translation: "T'anyō!", pronunciation: "ta-nyo", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "greetings", entry: { english: "Many thanks!", translation: "Asai!", pronunciation: "a-sai", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "He will return to-morrow", translation: "Elotu taīsere", pronunciation: "e-lo-tu tai-se-re", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Sit here!", translation: "Totóna enné!", pronunciation: "to-to-na en-ne", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Go away!", translation: "Ino! ṣōmō!", pronunciation: "i-no so-mo", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Don't forget", translation: "Emī damisso!", pronunciation: "e-mi da-mis-so", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Lift it up", translation: "Dumú!", pronunciation: "du-mu", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "food", entry: { english: "Give me to drink", translation: "Injohi maōko!", pronunciation: "in-jo-hi ma-o-ko", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Take care", translation: "Ndámăti!", pronunciation: "nda-ma-ti", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "family", entry: { english: "A barren woman", translation: "Ol bāhe", pronunciation: "ol ba-he", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "nature", entry: { english: "Medicine, trees", translation: "Ol canni", pronunciation: "ol chan-ni", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "verbs", entry: { english: "I love", translation: "Anyorr", pronunciation: "a-nyorr", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 925)", audioFile: null } },
    { catId: "phrases", entry: { english: "Bring firewood", translation: "Yao el gēk", pronunciation: "ya-o el gek", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "phrases", entry: { english: "Come quickly!", translation: "Wōu tāsīū!", pronunciation: "wou ta-si-u", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "phrases", entry: { english: "Listen!", translation: "Neningo!", pronunciation: "ne-ni-ngo", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "phrases", entry: { english: "Stand still!", translation: "Tōtónna!", pronunciation: "to-ton-na", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "phrases", entry: { english: "Wait for me!", translation: "Tanyō nanu!", pronunciation: "ta-nyo na-nu", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "phrases", entry: { english: "You're a fool!", translation: "Imīñāni iye!", pronunciation: "i-mi-nga-ni i-ye", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "greetings", entry: { english: "Goodbye!", translation: "Biado!", pronunciation: "bi-a-do", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "phrases", entry: { english: "Never mind!", translation: "Baīya!", pronunciation: "bai-ya", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "greetings", entry: { english: "Good morning! (and reply)", translation: "Sopai! (reply: Eépa!)", pronunciation: "so-pai / e-e-pa", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "phrases", entry: { english: "Very well!", translation: "Āiya!", pronunciation: "ai-ya", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "phrases", entry: { english: "Truly!", translation: "Ékĭnō!", pronunciation: "e-ki-no", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "phrases", entry: { english: "Make a fire", translation: "Eñnoyik akīma", pronunciation: "e-ngno-yik a-ki-ma", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "phrases", entry: { english: "Who's there?", translation: "Kálo?", pronunciation: "ka-lo", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "phrases", entry: { english: "Do you hear?", translation: "Gīniñ?", pronunciation: "gi-ning", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "phrases", entry: { english: "Take away!", translation: "Iwa!", pronunciation: "i-wa", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "phrases", entry: { english: "Go and herd the cattle", translation: "Ṣomo erriita ngiṣu!", pronunciation: "so-mo er-rii-ta ngi-su", context: "Additional Words and Sentences in Masai — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, p. 926)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Kunōno (Masai Smiths) Dialect: 4 Unique Metallurgical Words & 12 Nandi Cognates Collected by A. C. Hollis (1909, p. xxxiii)", translation: "e-samereita (iron) • o-siota (knife) • en-gandiit (spear) • e-wuyuwuyu (axe) — out of 150 Kunōno words collected by A. C. Hollis, over two-thirds are ordinary Masai, 12 are Nandi, and these 4 forge terms are peculiar to the Kunōno smiths • Masai war-song sung by Nandi boys at Labet-ap-eun: kambakta (p. 44)", pronunciation: "e-sa-me-rei-ta / o-sio-ta / en-gan-diit / e-wu-yu-wu-yu / kam-bak-ta", context: "Sir Charles Eliot & A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, pp. xxxiii, 44)", audioFile: null } },
    { catId: "adjectives", entry: { english: "The 6 Substantive Plural Classes in Masai (Hollis 1905, pp. 18–34): Class I (-i/-n/-in), Class II (Drops Singular Suffix -ni/-a/-i/-o/-oi/-u), Class III (-ok/-ak/-ek & Doubling Stem), Class IV (-ra/-ri/-ro/-ru & -ta/-ti/-to/-tu), Class V (Changes Final Letter or Syllables), Class VI (Irregular Plurals)", translation: "Class I: ol-tungani / il-tungana-i (man), en-gaji / in-gajijik or in-gaji-n (hut), ol-dia / il-die-in (dog) • Class II: ol-Maasani / il-Maasae (Masai), ol-keju / il-kejek (river), ol-choni / il-chon (hide), en-goshoke / in-goshua (stomach) • Class III: ol-murani / il-muran (warrior), ol-chekuti / il-chekut-ok (herdsman), ol-oiboni / il-oibon-ok (medicine man), ol-ashe / il-asho (calf), en-gerai / in-gera (child) • Class IV: ol-alem / il-alema-ra (sword), ol-oito / il-oik (bone), ol-chata / il-keek (firewood), ol-tuli / il-tuli-li (buttock) • Class V: ol-bitir / il-bitiro (wart-hog), ol-kine / il-kineji (he-goat), en-gine / in-gineji (she-goat) • Class VI: en-giteng / in-gishu (cow/cattle), ol-kiteng / il-mongi (ox), ol-chore / il-choreta (friend), ol-kila / il-kilani (garment)", pronunciation: "ol-tu-nga-ni / il-ma-a-sae / il-mu-ran / il-oi-bo-nok / en-gi-teng / in-gi-shu", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part I, pp. 18–34)", audioFile: null } },
    { catId: "family", entry: { english: "Masai Kinship Terms & Possessive Suffix Paradigm (Hollis 1905, pp. 32–34, 48–49): Father (Papa), Mother (Yeyo), Brother (Ol-alashe), Sister (En-ganashe), Wife (En-aisul / En-gerai), Co-Wife (En-gaini)", translation: "My father: Papa-lai (pl. il-oo-papa) • Thy father: Menye • His/her father: Menye • My mother: Yeyo-ai (pl. in-oo-yeyo) • Thy/his/her mother: Ñgotonye • My brother: Ol-alashe-lai (pl. Il-alashera-lainei) • My sister: En-ganashe-ai (pl. In-ganashera-ainei) • Son-in-law / Daughter-in-law / Parents-in-law: Ol-aputani / En-gaputani (pl. Il-aputanak)", pronunciation: "pa-pa-lai / me-nye / ye-yo-ai / ngo-to-nye / ol-a-la-she / en-ga-na-she", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part I, pp. 32–34, 48–49)", audioFile: null } },
    { catId: "numbers", entry: { english: "The 5 Masai Finger Names & Finger-Counting System from 1 to 60 (Hollis 1905, pp. 45–47)", translation: "5 Finger Names (Ol-kimojino, pl. Il-kimojik): 1. Ol-morijoi (thumb), 2. Ol-o-ilale-en-gorio (forefinger), 3. Ol-o-do-kimojino (middle finger), 4. Ol-le-lubo (ring finger), 5. Ol-o-ti-kimojino (little finger) • Finger-counting gestures: 1 (obo/nabo: raise forefinger), 2 (are/aare: forefinger + middle), 3 (okuni/uni: three fingers), 4 (oongwan/ongwan: four fingers with gap between middle & ring), 5 (imiet: closed fist with thumb between forefinger & middle), 6 (ile: click thumb nail & ring finger nail), 7 (naapishana: rub thumb & middle finger), 8 (oisyet [m.] / isyet [f.]: four fingers shaken), 9 (naaudo: thumb & forefinger tip ring), 10 (tomon: fillip thumb & forefinger), 20 (tikitam), 30 (osom), 40 (artam), 50 (onom), 60 (ntomoni-ile)", pronunciation: "ol-ki-mo-ji-no / ol-mo-ri-joi / o-bo / a-re / o-ku-ni / o-o-ngwan / i-miet / i-le / na-a-pi-sha-na / oi-syet / na-au-do / to-mon", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part I, pp. 41–47)", audioFile: null } },
    { catId: "verbs", entry: { english: "Complete 27-Row Pronominal Subject–Object Verb Prefix Table & 8 Derivative Verb Formations (Hollis 1905, pp. 50–51, 80–90)", translation: "Subject–Object Prefixes (with a-suj 'to follow'): aa-suj (I follow thee / he follows me), ki-suj (thou followest me / we follow him / he follows thee), a-suj (I follow him), i-suj (thou followest him), e-suj (he/they follow him/them) • 8 Derivative Verb Formations: 1. Neuter/Quasi-Passive (-a/-o + -ta/-to; e.g., a-fung-o 'to be open'), 2. Dative/Applied (-aki/-oki, past -aka/-oko; e.g., a-suj-aki 'to follow for'), 3. Motion Towards Speaker (-u, past -ua/-uo, imp. -u; e.g., a-suj-u, a-lot-u 'to come'), 4. Motion Away from Speaker (-aa/-oo, past -ayie/-oyie; e.g., a-ipir-aa), 5. Instrumental (-ie; e.g., a-rem-ie 'to stab with'), 6. Causative (Class I ita- prefix: a-ita-suj; Class II -ie suffix: a-rrip-ie), 7. Intransitive (-isho/-isho-re; e.g., a-suj-isho), 8. Reduplicated Intensive (a-suj-a-suj) • True Passive adds -i to active tenses (aa-suj-i 'I am followed', ki-suj-i 'thou art followed')", pronunciation: "a-a-suj / ki-suj / a-suj-a-ki / a-suj-u / a-lo-tu / a-ita-suj / a-suj-i-sho", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part I, pp. 50–51, 80–90)", audioFile: null } },
    { catId: "culture-history", entry: { english: "All 20 Traditional Masai Stories ('N-Atinin, Hollis 1905, Part II, pp. 103–237)", translation: "1. E-limoto oo-'l-muran oo-'l-ñgojine (The Warriors and the Hyena, p. 103) • 2. Ol-ñgojine o en-gine (The Hyena and the Crow, p. 107) • 3. Ol-owaru o en-gwirata (The Wild Beast and the Fire-Stick, p. 111) • 4. Ol-kiteñg le-kine o ol-o-'ñgishu (The He-Goat and the Herd, p. 117) • 5. E-limoto e-Konyek (The Story of Konyek the Half-Man/Half-Demon Son, p. 122) • 6. E-limoto oo-'l-muran o-'l-Torobo (The Warriors and the Dorobo, p. 133) • 7. En-dim le-Subai (The Caterpillar / Subai Forest, p. 142) • 8. En-gerai na-ata in-gonyek pokira aare (The Two-Eyed Girl Among the One-Eyed Demon Family, p. 151) • 9. Ol-tungani o-ata in-gera uni (The Man and His Three Sons, p. 166) • 10. En-giteñg oo-'l-Maasae (The Cow of the Masai, p. 176) • 11. Ol-owaru o en-gesalia (The Demon and the Swing, p. 180) • 12. En-daaroto e-Marikon (The Flight from Marikon, p. 187) • 13. En-dukuya e-moti (The Story of the Cooking-Pot, p. 193) • 14. Ol-tungani o ol-owaru (The Man and the Wild Beast, p. 197) • 15. Ol-owaru o en-gerai (The Demon and the Child, p. 203) • 16. Ol-ñgatuny o ol-owaru o ol-ñgojine (The Lion, the Leopard, and the Hyena, p. 207) • 17. En-dite o ol-owaru (The Girl and the Demon, p. 211) • 18. En-gerai o en-gopiro (The Boy and the Feather, p. 217) • 19. En-gerai o el-lulungata (The Child and the Python, p. 224) • 20. Ol-tungani o-boitare in-gishu (The Man Who Lived with His Cattle / Elephants & Mosquitoes, p. 230)", pronunciation: "n-a-ti-nin / ko-nyek / en-dim le-su-bai / ma-ri-kon / el-lu-lu-nga-ta", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part II, pp. 103–237)", audioFile: null } },
    { catId: "phrases", entry: { english: "All 75 Masai Proverbs & Sayings ('N-dungueta oo-'l-Maasae, Hollis 1905, Part III, pp. 238–252)", translation: "Representative proverbs from Nos. 1–75: #1 Me-eta en-gop ol-chore ('The earth has no friend') • #12 E-shomo ol-karsis en-goshoke e-ñgotonye ('The rich man has gone back to his mother's womb') • #32 Me-im-ie ol-kimojino obo e-shei ('One finger cannot kill a louse') • #48 Me-nyok-ie ol-tungani en-gima a-ibung e-ata ol-chekut ('A man does not take hold of the fire with his hand while he has a poker') • #49 Me-eta en-goshoke oik ('The stomach has no bones') • #54 Me-limu en-gutuk en-a-inos ('The mouth does not tell what it has eaten') • #63 E-risio il-kiu o in-gonyek ('Ant-hills and eyes are alike') • #75 Me-pal ol-tomia i-sirkon ('The elephant does not tire of his tusks')", pronunciation: "n-du-ngue-ta / me-im-ie ol-ki-mo-ji-no o-bo e-shei / me-pal ol-to-mia i-sir-kon", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part III, Nos. 1–75, pp. 238–252)", audioFile: null } },
    { catId: "phrases", entry: { english: "All 24 Masai Enigmas / Riddles ('L-oyeti) & Challenge Formula 'Oiyote! — E-euo!' (Hollis 1905, Part III, pp. 253–259)", translation: "Opening formula: Oiyote! ('Are you ready? / A riddle!') — Reply: E-euo! ('It has come! Let us hear it!') • Representative riddles from Nos. 1–24: #1 A-ata in-gishu ainei naa-nyokioo pokira, ne-ton ol-kiteng orok te-polos → Il-ala o en-gineji ('My cattle are all red and a black bullock stands in their midst → The teeth and the tongue', Note: red teeth stained from chewing tobacco/roots) • #4 En-gaji nabo na-ata il-turrur aare → En-gume ('One house with two rafters/passages → The nose') • #6 A-ata en-gine ai na-nyorr a-lo en-dim ne-itu e-nyorr a-lo ang → Ol-tim ('I have a goat that likes to go to the bush and does not like to come home → The thorn-branch gate barrier') • #18 E-ton ol-moruo te-boo ne-iput il-kilani en-gaji → En-gima o e-puruo ('The old man sits outside while his cloak fills the house → Fire and smoke') • #24 E-shomo ol-murani en-dim ne-shomo a-ar ol-mangati ne-boitare → Ol-kila ('The warrior went to the forest to fight the enemy and stayed with him → The garment/burr')", pronunciation: "oi-yo-te / e-eu-o / il-a-la o en-gi-ne-ji / en-gu-me / en-gi-ma o e-pu-ruo", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part III, Enigmas Nos. 1–24, pp. 253–259)", audioFile: null } },
    { catId: "culture-history", entry: { english: "The 4 Principal Masai Clans ('Orot), 2 Cattle-Dividing Moieties ('L-oodo-kishu & 'L-oorook-kishu) & 19 Sub-Families (Il-gilat) (Hollis 1905, Part IV, pp. 260–261)", translation: "4 Clans ('Orot, sg. Ol-orere / En-ishomi): I. Il-Aiser (sub-families: 'L-ugumai, 'L-idokoki, Il-partimaro, 'L-ongiito, 'L-ukumae, Il-parsinko, En-gidoñg — hereditary clan of the 'L-oibonok chief medicine-men), II. Il-Meñana (sub-families: 'L-okesen, 'L-okimai, Il-masakwa, Il-poosat, Il-kiboron), III. Il-Mokesen (sub-families: Il-mokesen, Il-kiporon, Il-tarosero, Il-aiser-le-mokesen), IV. Il-Molelian (sub-families: Il-molelian, Il-masula, Il-kipuyoni — includes the Il-kunono blacksmith caste) • 2 Cattle-Dividing Moieties (formed when dividing captured raid cattle): 'L-oodo-kishu ('Red Cattle', comprising Il-Aiser + Il-Meñana) vs. 'L-oorook-kishu ('Black Cattle', comprising Il-Mokesen + Il-Molelian)", pronunciation: "il-ai-ser / en-gi-dong / il-me-nga-na / il-mo-ke-sen / il-mo-le-lian / l-oo-do-ki-shu / l-oo-rook-ki-shu", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part IV, pp. 260–261)", audioFile: null } },
    { catId: "culture-history", entry: { english: "The 5 Masai Geographical Districts (Il-oshon) & 15 Remembered Generation Ages (Il-poror, c. 1791–1904) (Hollis 1905, Part IV, pp. 260–263)", translation: "5 Districts (Il-oshon): 1. Il-Kaputie (Athi/Kapiti plains), 2. Il-Keek-onyokie (Naivasha/Kinangop/Kedong), 3. Il-Matapato (Namanga/Kajiado border), 4. Il-Purko (Nakuru/Mau/Laikipia), 5. Il-Loitai (Loita hills) [plus pastoral/agricultural sections: Il-Uasin-gishu, Il-Laikipiak, Il-Dalalekutuk, Il-Loodokilani, Il-Siria, Il-Damat, Il-Lumbwa/Il-Oikop] • 15 Remembered Generation Ages (Il-poror, each split into Right-hand E-murut e-tatene & Left-hand E-murut e-kedianye circumcision): 1. Il-Tiyioki (~1791), 2. Il-Merisho (~1806), 3. Il-Kidotu (~1821), 4. Il-Tuati I (~1836), 5. Il-Nyangusi I (~1851), 6. Il-Laimer (~1866), 7. Il-Talala (~1881), 8. Il-Tuati II (~1896, right-hand Il-Kishumu, left-hand Il-Majeshi circumscribed 1904)", pronunciation: "il-ka-pu-tie / il-keek-o-nyo-kie / il-ma-ta-pa-to / il-pur-ko / il-loi-tai / il-ti-yio-ki / il-ta-la-la / il-tu-a-ti", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part IV, pp. 260–263)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Masai Cosmology & Myths: Black & Red Sky-Gods (Eng-ai Narok & Eng-ai Nanyokye), Naiteru-kop, and Le-eyo's Origin of Cattle & Origin of Death (Hollis 1905, Part V, pp. 264–273)", translation: "Two Sky-Beings: Eng-ai Narok (The Black Benevolent God who sends rain; rolling thunder is his voice saying 'E-m-bunga! Leave them alone!') & Eng-ai Nanyokye (The Red Malevolent God who wants to burn the earth; sharp lightning crash is his voice crying 'Ta-pala ma-puku! Let me go that I may kill them!') • Naiteru-kop ('The Beginner of the Earth', mediator who lowered cattle down a strip of hide from the sky to the Dorobo and Le-eyo) • Origin of Death (pp. 271–272): Le-eyo was instructed to chant over a dying child 'Man, die and return; Moon, die and remain away!' (Tungani taa-me ni-nyorr-u; Ol-apa taa-me ni-tu-turro!), but reversed the formula for a neighbor's child and was forced to repeat the fatal curse over his own son", pronunciation: "eng-ai na-rok / eng-ai na-nyo-kye / nai-te-ru-kop / le-e-yo / ol-a-pa", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part V, pp. 264–273)", audioFile: null } },
    { catId: "nature", entry: { english: "Masai Astronomy: The Sun (Eng-olong), Moon (Ol-apa), Pleiades (Il-kokua), Orion (Il-morijo & E-naibor-lukunya), Venus (Kileken & Ol-okira le-'n-gop), Jupiter (Eng-akakwai) & Milky Way (En-gikwei e-'n-gajijik) (Hollis 1905, Part V, pp. 273–279)", translation: "Sun (Eng-olong) married Moon (Ol-apa); they fought and Moon's face was scarred and one eye put out • Pleiades: Il-kokua (6 stars whose setting/rising marks the rainy season Ol-tumuret) • Orion's Belt: Il-morijo (Three Old Men) pursued by three widows E-naibor-lukunya (Orion's Sword) • Morning Star: Kileken (bringer of cattle) • Evening Star: Ol-okira le-'n-gop • Jupiter: Eng-akakwai • Milky Way: En-gikwei e-'n-gajijik • Rainbows: Ol-oidimani • Halos around sun/moon: En-gata ('cattle kraal') • Comets: Ol-okira le-'n-gop o-ata ol-kidongoi • Earthquakes: E-ipiri en-gop (caused by warriors walking in the underworld or Naiteru-kop shifting)", pronunciation: "eng-o-long / ol-a-pa / il-ko-kua / ki-le-ken / ol-o-ki-ra / eng-a-ka-kwai", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part V, pp. 273–279)", audioFile: null } },
    { catId: "animals", entry: { english: "Masai Cattle Hide Brands (Il-mishiren), Ear-Slit Marks (Il-ponot) & Ear-Flaps (Il-kipulul) Across the 4 Clans (Hollis 1905, Part VI, pp. 289–291 & Figs. 1–37)", translation: "Cattle ownership marks: 1. Il-mishiren (sg. Ol-mishire, red-hot iron hide brands burned on the flanks, thighs, shoulders, and cheeks representing the owner's clan and sub-family), 2. Il-ponot (sg. Ol-ponoto, distinctive notches and slits cut into the right and left ears of cattle, sheep, and goats), 3. Il-kipulul (dangling skin ear-flaps cut below the ear) • Illustrated in Hollis (1905) Figures 1–37 for Il-Aiser (En-gidong, Il-partimaro, 'L-oodo-kishu), Il-Meñana, Il-Mokesen, and Il-Molelian", pronunciation: "il-mi-shi-ren / ol-mi-shi-re / il-po-not / ol-po-no-to / il-ki-pu-lul", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part VI, pp. 289–291 & Figs. 1–37)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Complete 9-Generation Hereditary Genealogy of the Masai Chief Medicine-Men ('L-oibonok of the En-gidong Sub-Clan of Il-Aiser, Hollis 1905, pp. 324–330)", translation: "1. Ol-le-Mweiya (came down from heaven / Ngong Hills, found by an Il-Aiser elder) → 2. Kipet → 3. Marimbe → 4.iga / Sitonik → 5. Sitonik → 6. Supeet (consulted by Krapf & Rebmann's era) → 7. Mbatiany (d. ~1890, supreme prophet during the Great Rinderpest & Laikipiak wars) → 8. Lenana (Ol-onana, d. 1911, Paramount Chief in British East Africa) & Sendeyo (rival brother in German East Africa who made peace with Lenana in 1902) → 9. Segi (son of Lenana)", pronunciation: "ol-le-mwei-ya / su-peet / mba-tia-ny / le-na-na / sen-de-yo / se-gi", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part VI, pp. 324–330)", audioFile: null } },
    { catId: "emergency", entry: { english: "Masai Customary Law: Blood-Money Restitution (Il-ooo / En-gurore), Assault Fines, Theft Penalties & Trial by Ordeal Oaths (Ol-mumai) (Hollis 1905, Part VI, pp. 310–312, 344–345)", translation: "Intentional murder of a Masai man: 49 head of cattle (Il-ooo) • Murder of a woman: 29 head of cattle (or 19 cows + 2 ox-loads of honey) • Accidental homicide within the same clan: 14 to 29 cattle • Knocking out a tooth or blinding an eye: 1 cow and 1 calf (or 1 bullock) • Breaking an arm, leg, or collarbone: 2 to 8 cattle • Theft of a cow or ox: 7 cattle restitution • Three solemn Oaths / Ordeals (Ol-mumai): 1. Drinking blood mixed with milk/earth from a spear blade, 2. Striking the iron anvil/axe of the Il-kunono smiths, 3. Stepping over a warrior's sword or spear", pronunciation: "il-o-o-o / en-gu-ro-re / ol-mu-mai", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part VI, pp. 310–312, 344–345)", audioFile: null } },
    { catId: "home", entry: { english: "The Il-kunono Blacksmith Caste (Sub-Section of Il-Kipuyoni / Il-Molelian) & Oiling the Hand Before Touching Iron Weapons (Hollis 1905, Part VI, pp. 330–331)", translation: "Il-kunono (sg. Ol-kunoni, the hereditary endogamous blacksmith caste belonging to the Il-Kipuyoni sub-family of the Il-Molelian clan) • Smelt iron sand (ol-nyorri) in clay-tuyere furnaces to forge spears (em-bere), swords (ol-alem), cow-bells (ol-korikor), branding irons (ol-mishire), and razors (ol-murunya) • Pastoral Masai oil their hands with fat (e-ilata) before picking up any weapon forged by an Ol-kunoni lest the smith's curse (en-gooki) cling to their skin", pronunciation: "il-ku-no-no / ol-ku-no-ni / ol-nyor-ri / em-be-re / ol-a-lem / ol-mu-ru-nya", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part VI, pp. 330–331)", audioFile: null } },
    { catId: "time", entry: { english: "The 10 Masai Divisions of the Day, 4 Seasons & 12 Lunar Months (Il-apaitin) (Hollis 1905, Part VI, pp. 332–334)", translation: "10 Divisions of the Day: 1. E-nyorikarie (4–5 a.m., before dawn), 2. E-ikenyu en-gop (5–6 a.m., red dawn), 3. E-ilep eng-olong (6–7 a.m., sunrise), 4. En-dama (morning), 5. E-ipenari in-gishu (7–8 a.m., cattle go to pasture), 6. En-dama o-nguan / E-ton eng-olong te-weji nabo (12 noon), 7. E-ibelibel eng-olong (1–3 p.m., sun declines), 8. E-tul-a eng-olong / Te-ipa (4–6 p.m., evening), 9. E-sul-a eng-olong (6 p.m., sunset), 10. En-gairiamari / En-gewarie (night, 7 p.m.–4 a.m.) • 4 Seasons: 1. Ol-oirujuruj (drizzling rains), 2. Kujorok (heavy long rains, green pastures), 3. Ol-ameyu (hot dry season), 4. Ol-tumuret (short rains) • 12 Months (Il-apaitin): I. Ol-okua (Kara-obo), II. Kujorok, III. O-somed, IV. Moro-usin, V. O-loiboni, VI. Karat-apus, VII. Kiok, VIII. E-ruru, IX. O-sinyai, X. Ol-oibor-are, XI. Ngishu-naa-asha, XII. Ol-tumuret", pronunciation: "ol-oi-ru-ju-ruj / ku-jo-rok / ol-a-me-yu / ol-tu-mu-ret / il-a-pai-tin", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part VI, pp. 332–334)", audioFile: null } },
    { catId: "nature", entry: { english: "45+ Masai Botanical Species (Il-kak / Il-keek): Sacred Fig (Ol-reteti), Olive (Ol-oirien), Firesticks (Ol-piron & En-dole) & Soup-Bark Trees (Hollis 1905, Part VI, pp. 335–342)", translation: "Sacred & ritual trees: Ol-reteti (Ficus sp., sacred parasitic fig tree at mountain passes where travellers throw stones/grass), Ol-oirien (Olea chrysophylla, wild olive used for smoking milk gourds and blessing ceremonies), Ol-timigomi (Pappea capensis, warrior soup-bark), Ol-kiloriti (Acacia abyssinica, astringent bark boiled with meat by warriors in the ol-pul meat-camp to inspire courage), Ol-mokotan (Albizzia anthelmintica, tapeworm medicine), Ol-sinoni (Lippia sp., fragrant leaves), Ol-tarakwa (Juniperus procera, pencil cedar used for the male drilling firestick ol-piron), Ol-oibor-benek (Dombeya sp., soft wood used for the female hearth firestick en-dole), Ol-oilalei (Zizyphus mucronata), Ol-tukai (Phoenix reclinata, wild date palm)", pronunciation: "ol-re-te-ti / ol-oi-rien / ol-ki-lo-ri-ti / ol-mo-ko-tan / ol-ta-ra-kwa / ol-pi-ron / en-do-le", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part VI, pp. 335–342)", audioFile: null } },
    { catId: "culture-history", entry: { english: "All 8 Traditional Masai Songs & Prayers ('Singolioitin oo-'l-Maasae, Hollis 1905, Part VI, pp. 345–355)", translation: "1. Women's Prayer for Warriors on a Raid (p. 346: Na-Ai n-a-isho-o in-gera...) • 2. Women's Song Welcoming Returning Raiders (p. 347) • 3. Elders' & Women's Rain Prayer around the Sacred Ol-reteti Fig Tree (p. 348: Na-Ai Narok! Taa-shao!) • 4. Circumcision Candidates' Song (E-murata, p. 349) • 5. E-unoto Ceremony Song at the Installation of the Ol-aunoni Ritual Leader (p. 351) • 6. Warriors' Praise Song for Their Bullocks and Sweethearts (p. 352) • 7. Song Praising the Chief Medicine-Man Mbatiany / Lenana (p. 353) • 8. Children's & Mothers' Lullaby and Evening Prayer to the New Moon (p. 354: Kileken! Na-Ai!)", pronunciation: "si-ngo-lioi-tin / na-ai na-rok / e-mu-ra-ta / e-u-no-to / ol-au-no-ni", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part VI, pp. 345–355)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Masai Life-Cycle & Age-Grade Rites: Birth Feast (E-naisho oo-'n-gera), Ear-Piercing, Circumcision (E-murata, Sipolio), Warrior Kraal (E-manyata), E-unoto (Ol-aunoni) & Ol-ngesher Meat Feast (Hollis 1905, Part VI, pp. 294–304)", translation: "Birth feast: E-naisho oo-'n-gera (slaughter of ol-kiteng le-kulal) • Ear-piercing with hot iron awls and insertion of wooden ear-blocks (il-karash) • Circumcision (E-murata, held every ~4–5 years after the Elephants' Tusk horn e-mowuo ol-owaru sounds): novices wear black ostrich plumes (il-kalia) and shoot blunt arrows (ol-marisian) at girls as Sipolio initiates • Warriors (Il-muran) live in the E-manyata with their mothers and uninitiated sweethearts (in-dito), eating only beef, milk, and blood (never mixing milk and meat on the same day) • E-unoto ceremony installs the Ol-aunoni moral/ritual leader before graduation to elderhood (Il-moruak) at the Ol-ngesher feast", pronunciation: "e-mu-ra-ta / si-po-lio / e-ma-nya-ta / e-u-no-to / ol-au-no-ni / ol-nge-sher", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part VI, pp. 294–304)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Masai Death & Burial Customs: Exposed Corpses vs. Stone Cairn Burial for Chief Medicine-Men ('L-oibonok) & Rich Elders (Hollis 1905, Part VI, pp. 304–306)", translation: "Ordinary Masai are not buried in the earth (which would pollute the soil that grows grass for cattle); instead the corpse is carried out to the west side of the kraal, laid on its left side with the head towards the north, and left with sandals, a walking stick, and grass for hyenas (il-ngojinia) to consume • Exception: A great medicine-man (Ol-oiboni) or wealthy chief elder (Ol-karsis) is buried in a trench under a stone cairn after an ox or goat is sacrificed; every passer-by throws a stone and a tuft of grass onto the cairn while belief holds his soul turns into a sacred python or cobra (ol-asurai) that visits his family's cattle kraal", pronunciation: "ol-oi-bo-ni / ol-kar-sis / ol-a-su-rai / il-ngo-ji-nia", context: "A. C. Hollis, The Masai: Their Language and Folklore (Oxford: Clarendon Press, 1905, Part VI, pp. 304–306)", audioFile: null } },
  ],
  pokot: [
    { catId: "greetings", entry: { english: "Greeting on entering a village: Hail! (and reply)", translation: "Tokwes! (Reply: Eia!)", pronunciation: "tok-wes / ei-a", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 92)", audioFile: null } },
    { catId: "greetings", entry: { english: "Personal greeting: Health to thee! (and reply)", translation: "Chamke! (Reply: Chamke, chamke!)", pronunciation: "cham-ke", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 92)", audioFile: null } },
    { catId: "greetings", entry: { english: "On bidding farewell: I have gone! (and reply: Thou art going!)", translation: "Ka-rôt-on! / Korôton! (Reply: I-rôt-enyi!)", pronunciation: "ka-rot-on / i-rot-enyi", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, pp. 92, 119, 125)", audioFile: null } },
    { catId: "phrases", entry: { english: "Riddle challenge formula: 'A riddle!' — 'Propound it!' — 'We give it up!'", translation: "Tiangoi! — Tia! — Donguch!", pronunciation: "ti-a-ngoi / ti-a / do-nguch", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, pp. 43–45)", audioFile: null } },
    { catId: "phrases", entry: { english: "Planting Hymn to Torôrut (Beech 1911, p. 16): 'God give us fat (fertility), that men may thrive, that life may thrive! — Chorus: Which is sweet!'", translation: "Torôrut kun-e' mwagh / Ki-sop-'cha pich / Ki-sop sapon — Chorus: Ny' anyin!", pronunciation: "to-ro-rut ku-ne mwagh / ki-sop-cha pich / ki-sop sa-pon / ny' a-nyin", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, p. 16)", audioFile: null } },
    { catId: "phrases", entry: { english: "Women Potters' (Koko-ter) Firing Chant & Pot-Theft Curse (Beech 1911, pp. 17–18)", translation: "O-wei ter i-ker-ach mba maʻ, / I-chi-nyi tiumbo kukoʻ! ('Go, pot, shut yourself in the fire, you are the vessel of our ancestors!') • Curse: Ke-sasi-anan ter-e-nyan ko-sasi-nyi Torôrut! ('You have spoiled my pot, may God spoil you!')", pronunciation: "o-wei ter i-ker-ach mba ma / ke-sa-si-a-nan ter-e-nyan ko-sa-si-nyi to-ro-rut", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, pp. 17–18)", audioFile: null } },
    { catId: "phrases", entry: { english: "Bee-Swarm Threshold Sacrifice Cry & Beaten-Dog Complaint to Asis (Beech 1911, pp. 25–26)", translation: "Hei-Hei-Hei ka-rat sakam kôt! ('Lo! the bees have closed the door!') • Dog's complaint: Se-par-ana' kuliʻ k-a-m-ne nyeñgmwunye atô-ka-par kuliʻ ko-ros Asis ('Since you beat me for nothing, what of yours have I eaten? If you have beaten me for nothing, may the Sun see to it!')", pronunciation: "hei hei hei ka-rat sa-kam kot / se-par-a-na ku-li k-a-m-ne nyeng-mwu-nye", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, pp. 25–26)", audioFile: null } },
    { catId: "culture-history", entry: { english: "The 8 Geographical Divisions, 2 Moieties (Kasauria & Kiplegit), 3 Clans & 8 Cyclic 15-Year Age-Sets (Pĕn) in Beech (1911, pp. 1–6)", translation: "Autonym: Pôkwut (sg. Pĕch-on) • 8 Sections: 1. Chep-tulel, 2. Kerūt ('black tree beetle'; weiwei = 'lake'), 3. Maghan, 4. Sekēr ('cowrie shells', sg. sekĕr-ion), 5. Kapkoma, 6. Muinoʻ, 7. Kapukōgh, 8. Tiati / Pastoral Suk • 2 Tribes: Kasauria (sauria = skin well-rope) & Kiplegit (+ Kacheribkwaʻ) • 3 Clans (Tiamalok): Sopan (elephant), Terchon (rain), Lakenion (bull-frog) • 8 Age-Sets (Pĕn): Mainaʻ (15–30), Nyongu (30–45), Merkutwa (45–60), Kablelach (>60), Kip-koimet (>75), Karongoro, Sowa, Jumoʻ (each divided into Nerkau/Chagen-ôpero, Ñgiru, Nimur)", pronunciation: "po-kwut / pe-chon / ka-sau-ria / kip-le-git / mai-na / nyo-ngu / mer-ku-twa / kab-le-lach", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, pp. 1–6)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Celestial Pantheon of Tiamolok: Torôrut, Seta, Arawaʻ, Ilat, Kokel, Topogh & Asis (Beech 1911, pp. 19–20)", translation: "Torôrut (Supreme winged Sky-God; flash of wings = lightning kerial, whirring = thunder kotil, lives above yĭm) • Wife: Seta (Pleiades) • Eldest son: Arawaʻ (Moon) • Younger son: Ilat (Rain, carries water) • Other children: Kokel (Stars) • First-born daughter: Topogh (Evening Star) • Younger brother: Asis (Sun, angry in dry season) • Ancestral spirits: onyet (pl. hoi) entering house-snakes (moroi)", pronunciation: "to-ro-rut / se-ta / a-ra-wa / i-lat / ko-kel / to-pogh / a-sis / o-nyet / hoi", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, pp. 19–20)", audioFile: null } },
    { catId: "culture-history", entry: { english: "All 18 Suk Riddles (Tiangoi! — Tia! — Donguch!) Recorded Verbatim in Beech (1911, pp. 43–45)", translation: "1. Nyelnyel ma-ke-lany → Sirim-nyon (iron chain) • 2. O-wund-oi-a' soghoʻ → Tŭl (ant-hill) • 3. Rel-e' ti'-chu lopai, pirir kirokit → Kelat ngô ñgaliep (teeth & tongue) • 4. Ka-terer-an ôr → Arawaʻ (crescent moon) • 5. Ki-toñg-in lōh → Kerial (lightning) • 6. Pīr kôgh ma-ke-put → Kôgh pa maugh (calf's bone) • 7. O-pkan-a se-k'-om-is! → T'a-pa-tainy ngô maugh (cow's udders & calf) • 8. Kô-p-chii nya-ma-tiñget-nye kôkat → Rotin (egg) • 9. Kechir-e-nyan nya-le-pus kô-rot-ei → Iyām (turned-up soil) • 10. O-mwagh-an môt → Karur-uk (eyelashes) • 11. Ki-a-w-an lōh ngô chep-o-nyan → Onyet (shadow) • 12. Kô-p-chii ki-soch ket okoñgô → Wôton (mushroom) • 13. Tainy-e-nyan nya-tōgh mi kwin → Mĕno (clay in pot) • 14. Tuku-chu cha-chang, m-o-nget-an-nye a-iyit → Kokel (stars) • 15. Ki-ow-an o-nyur-u-a' kukōʻ ka-tĕp-oi → Kôgh (rock boulder) • 16. O-wir-a' ñgôt-e-nyan lōh → Koñg (the eye's glance) • 17. Pi'-chu cha-chang, lach-ei anang-a okoñgô → Sus-w-on pa kô (thatch grass of a hut) • 18. Ki-a-tĕr-a' ket-e-nyan ko-m-o-lim-j-an-nye → Kŏlŏl (felled shadow)", pronunciation: "ti-a-ngoi / si-rim-nyon / tul / ke-lat ngo nga-liep / a-ra-wa / ke-rial", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, Ch. III, pp. 43–45)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Two Interlinear Suk Fables in Part II (Beech 1911, pp. 97–98): 'The Tortoise and the Eagle' & 'The Sheep and the Goats'", translation: "Story I: Kip-kokech ngô Ki-blerkwa ('The Tortoise and the Eagle', p. 97) • Story II: Kechir ngô Ñgaror ('The Sheep and the Goats', p. 98, explaining why sheep's tails hang down covering their hindquarters while goats' tails turn upwards)", pronunciation: "kip-ko-kech ngo ki-bler-kwa / ke-chir ngo nga-ror", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, Part II, pp. 97–98)", audioFile: null } },
  ],
  turkana: [
    { catId: "culture-history", entry: { english: "Beech (1911, Appendix pp. 150–151 & Introduction pp. xxiii–xxiv): 25 Turkana–Suk Comparative Cognates & Borrowings", translation: "1. Adaru (elbow tail ornament) • 2. Adiñgo (warrior's belt) • 3. Akul (circular wrist-knife) • 4. Alakam (neck-ring) • 5. Aloket (head-dress wire tail) • 6. Alöit (elephant spring-noose trap) • 7. Amumūr (war-dance) • 8. Anañga (Turkana: anañga / enañga, cloth) • 9. Apapai (shield handle) • 10. Aparparat (nose-plate) • 11. Arobet (neck skin) • 12. Atērdĭü (hare's tail) • 13. Atekēr (Turkana: ateker, wooden trough) • 14. Atoros (box) • 15. Aturo (forelock ornament) • 16. Aturpopo (brass ear-ring) • 17. Kalacha (cape) • 18. Kedoñgô (dance) • 19. Koliko (girl's apron) • 20. Legetioʻ (woman's belt) • 21. Loñgô (shield) • 22. Muren (Turkana: ngi-muren, warriors) • 23. Ñgechĕr (Turkana: e-kicholông / ngicholong, stool) • 24. Rungu (club) • 25. Siolip (felted hair-bag chignon)", pronunciation: "a-da-ru / a-di-ngo / a-kul / a-lo-it / a-te-ker / si-o-lip", context: "Mervyn W. H. Beech & Sir Charles Eliot, The Suk: Their Language and Folklore (1911, pp. xxiii–xxiv, 150–151)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Chief Aijigwa of Naudu & Salali: Turkana Customary Law, Hereditary Lemurok vs. Lekatuknok & Tree-Fork Granaries (Beech 1911, pp. 8–9, 21, 27–37)", translation: "Chief Aijigwa (via Hon. A. Bruce) • Hereditary medicine-men: Lemurok vs. elected elders/advisers: Lekatuknok (p. 36) • Homicide: all murderer's cattle, sheep, and goats seized except donkeys (or murderer speared on the spot, p. 29) • Bride-price: minimum 5 cattle & 100 sheep (no divorce once children are born, p. 33) • Alöit spring-noose trap capable of killing up to 10 elephants in a day (p. 21) • Turkana Dorobo near En-gabotoʻ perch round grain huts 30 feet high in tree forks (p. 7)", pronunciation: "ai-ji-gwa / le-mu-rok / le-ka-tuk-nok / a-lo-it / en-ga-bo-to", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, pp. 7–9, 21, 27–37)", audioFile: null } },
    { catId: "culture-history", entry: { english: "Sir Charles Eliot (1909, pp. xxix–xxxiii): Taveta-Collected Turkana Grammatical Sketch (Articles, Nouns, Numerals 1–100, Pronouns, Demonstratives & Verb Conjugations)", translation: "Articles: Masc. e- / nye- (pl. ñgi- / i-), Fem. a- / nya- (pl. ñga- / a-) • Nouns: nye-takho / ñgi-takh (calf m.), nya-takho / ñga-takh (calf f.), nye-kile / ñgiliokh (man), nya-khaal / ñgaal (camel), nye-kileñg / ñgilenya (knife), nye-kasgout / ñgasgou (elder), nye-kalepan / ñgi-kalepakh (milker) • Numerals: ēpei/āpei (1), are (2), uni (3), omwon (4), akhan/ñgan (5), akhan ka pei (6), tomon (10), ñgi tomon are (20), pokol (100) • Pronouns: Ayoñg, Iyoñg, nyezi; sua/thua, Ezi, Ikezi • Possessives: khañg/kañg, khon/kon, keny/keñg; khosi/iyokh, kus, kech • Demonstratives: lo/na/ne (this), lu/nu/ne (these), ye/ya/inne (that), ñgul/ñgun/nege (those) • Interrogatives: ñgae? (who?), ani? (which sg.?), alu? / anu? (which pl.?) • Verb: A-cham-it (I love), ka-cham-it (I love thee), ki-cham-it (thou lovest me), ny-a-cham-it (I love not), ka-cham-it-ae (I am loved), a-k-inok (I lit), a-yeñg (I skinned), K-irimo (he went round), ta-ma (say!), ani-a-nyam-i (if I eat), -un (hither), -kino (dative), ita- (causative)", pronunciation: "nye-ta-kho / ngi-takh / nye-ki-le / a-yong / i-yong / nye-zi / a-cham-it", context: "Sir Charles Eliot, Introduction to A. C. Hollis, The Nandi: Their Language and Folk-Lore (Oxford: Clarendon Press, 1909, pp. xxix–xxxiii)", audioFile: null } },
  ],
  ilchamus: [
    { catId: "culture-history", entry: { english: "En-jemusi Religion (En-Gai & En-Gop) & Chief Launjali's Customary Law in Beech (1911, pp. 4, 19 fn. 1, 27–37)", translation: "En-Gai (Sky-God) & En-Gop (Earth-God; Sun and Moon are husband and wife, p. 19 fn. 1) • Authority: Chief Launjali (p. 27) • Homicide fine: 10 to 20 cows (p. 29) • Theft fine: 3× restitution per thief (if 3 men steal 1 cow, each pays 3 cows = 9 cows total, p. 32) • Bride-price: 6 goats (p. 33) • Slander against an elder: 1 bullock feast (p. 34)", pronunciation: "en-gai / en-gop / lau-nja-li / en-je-mu-si", context: "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, pp. 4, 19 fn. 1, 27–37)", audioFile: null } },
  ],
};

function normalizeJohnston1902DictionaryEntries(dict: Dictionary): void {
  // For maasai.json: clean Hinde (1901) table headers, footnote backslashes, brace artifacts, reversed curses/toponyms, and Hollis (1905) OCR typos
  if (dict.languageId === "maasai") {
    for (const cat of dict.categories) {
      const cleanedMaasaiEntries: DictEntry[] = [];
      for (const e of cat.entries) {
        // 1. Skip ingested Markdown table headers & prose fragments
        if (
          (e.english === "Occasion / Addressee" && e.translation === "Masai") ||
          (e.english === "Present or Future Tense" && e.translation === "Masai") ||
          (e.english === "Masai Curse" && e.translation === "Meaning / Usage") ||
          (e.english === "Geographic Name" && e.translation === "Masai Name & Meaning") ||
          (e.english === "The phonetics are simple and easy" &&
            e.translation === "Except for the length of the words")
        ) {
          continue;
        }

        // 2. Strip trailing/embedded footnote escape backslashes (\) from Hinde (1901) headwords (e.g. Basket\, Jigger\, Potato\, Syphilis\, Adjudge\, His father\, etc.)
        if (e.english.includes("\\")) {
          e.english = e.english.replace(/\\/g, "").trim();
        }

        // 3. Clean Markdown brace artifacts (`{` and `}`) in Hinde (1901) headwords and translations
        if (e.english.includes("`{`") || e.english.includes("`}`")) {
          e.english = e.english.replace(/\s*`[{}]`\s*/g, " ").replace(/\s+/g, " ").trim();
        }
        if (e.translation.includes("`{`") || e.translation.includes("`}`")) {
          e.translation = e.translation.replace(/\s*`[{}]`\s*/g, " ").replace(/\s+/g, " ").trim();
        }

        // 4. Fix reversed Hinde (1901) Curses (p. 43) and Toponyms (p. 42) where the Masai form was placed in `english` and the English gloss in `translation`
        if (e.english === "Djerrterrā" && e.translation === "A curse against the man addressed") {
          e.english = "Curse against the man addressed (Hinde 1901, p. 43 #1)";
          e.translation = "Djerrterrā";
          e.pronunciation = "djerr-ter-ra";
        } else if (e.english === "Njertērrda" && e.translation === "Against the man addressed") {
          e.english = "Curse against the man addressed (Hinde 1901, p. 43 #2)";
          e.translation = "Njertērrda";
          e.pronunciation = "njer-terr-da";
        } else if (e.english === "Mining jangayenda" && e.translation === "Against a man and his father") {
          e.english = "Curse against a man and his father (Hinde 1901, p. 43 #3)";
          e.translation = "Mining jangayenda";
          e.pronunciation = "mi-ning ja-nga-yen-da";
        } else if (
          e.english === "Kirrigūmini" &&
          e.translation === "A curse on the father saying that the person cursed is a bastard"
        ) {
          e.english = "Curse on the father saying the person cursed is a bastard (Hinde 1901, p. 43 #4)";
          e.translation = "Kirrigūmini";
          e.pronunciation = "kir-ri-gu-mi-ni";
        } else if (
          e.english === "Injeraii" &&
          e.translation === "This curse is supposed to cause the death of a brother or sister"
        ) {
          e.english = "Curse supposed to cause the death of a brother or sister (Hinde 1901, p. 43 #5)";
          e.translation = "Injeraii";
          e.pronunciation = "in-je-raii";
        } else if (
          e.english === "Tadui munigilidoigi" &&
          e.translation === "Supposed to cause the person addressed to die"
        ) {
          e.english = "Curse supposed to cause the person addressed to die (Hinde 1901, p. 43 #6)";
          e.translation = "Tadui munigilidoigi";
          e.pronunciation = "ta-dui mu-ni-gi-li-doi-gi";
        } else if (e.english === "Injerai kordai" && e.translation === "A child's curse") {
          e.english = "A child's curse (Hinde 1901, p. 43 #7)";
          e.translation = "Injerai kordai";
          e.pronunciation = "in-je-rai kor-dai";
        } else if (e.english === "Miinjirria nigiruk" && e.translation === "A child's curse") {
          e.english = "A child's curse (Hinde 1901, p. 43 #8)";
          e.translation = "Miinjirria nigiruk";
          e.pronunciation = "miin-jir-ria ni-gi-ruk";
        } else if (e.english === "Mbussa bwaara" && e.translation === "Fool") {
          e.english = "Fool! (curse/expletive, Hinde 1901, p. 43 #9)";
          e.translation = "Mbussa bwaara";
          e.pronunciation = "mbus-sa bwaa-ra";
        } else if (
          e.english === "Mbarra" &&
          e.translation === "This is accompanied by spitting and is the equivalent of damn"
        ) {
          e.english = "Damn! (curse accompanied by spitting, Hinde 1901, p. 43 #10)";
          e.translation = "Mbarra";
          e.pronunciation = "mbar-ra";
        } else if (e.english === "Nairobi (river)" && e.translation.startsWith("Cold (ngare nairobi")) {
          e.english = "Nairobi River (lit. 'cold water', emerging cold from the forest, Hinde 1901, p. 42)";
          e.translation = "ngare nairobi";
          e.pronunciation = "nga-re nai-ro-bi";
        } else if (e.english === "Ngongo bagas (river)" && e.translation === "the eye of the Spring") {
          e.english = "Ngong River / Spring ('the eye of the Spring', Hinde 1901, p. 42)";
          e.translation = "Ngongo bagas";
          e.pronunciation = "ngo-ngo ba-gas";
        } else if (e.english === "Eldonyo sabuk (mt.)" && e.translation === "the big mountain") {
          e.english = "Ol Donyo Sabuk ('the big mountain', Hinde 1901, p. 42)";
          e.translation = "Eldonyo sabuk";
          e.pronunciation = "el-do-nyo sa-buk";
        } else if (
          e.english === "Gwasso kidong (river)" &&
          e.translation.startsWith("the river of the ollokidong trees")
        ) {
          e.english = "Kedong River ('the river of the ollokidong trees', whose wood is used for making quivers, Hinde 1901, p. 42)";
          e.translation = "Gwasso kidong";
          e.pronunciation = "gwas-so ki-dong";
        } else if (e.english === "Enaibasha (lake)" && e.translation === "the great water or sea") {
          e.english = "Lake Naivasha ('the great water or sea', Hinde 1901, p. 42)";
          e.translation = "Enaibasha";
          e.pronunciation = "e-nai-ba-sha";
        }

        // 5. Fix Hollis (1905) OCR typos in maasai.json
        if (e.translation === "E-wSji ne-ra sapuk") {
          e.translation = "E-weji ne-ra sapuk";
          e.pronunciation = "e-we-ji ne-ra sa-puk";
        } else if (e.translation === "Ol-kiteSg orok sinyati li-opa") {
          e.translation = "Ol-kiteng orok sinyati li-opa";
          e.pronunciation = "ol-ki-teng o-rok si-nya-ti li-o-pa";
        } else if (e.translation === "E-uliilu" || e.translation === "E-uliilu (for en-ululu)") {
          e.translation = "E-ululu (for en-ululu)";
          e.pronunciation = "e-u-lu-lu";
        } else if (e.translation === "H-tungana (for il-tunganak)") {
          e.translation = "'L-tungana (for il-tunganak)";
          e.pronunciation = "l-tu-nga-na";
        } else if (e.english === "The middle" && e.translation === "The loin") {
          e.english = "The middle, the loin";
          e.translation = "Em-polos (pl. Im-polosi, Hollis 1905, p. 33)";
          e.pronunciation = "em-po-los";
        } else if (
          e.english === "The belief" &&
          e.translation === "In-girukot En-girukoto iruk The reply"
        ) {
          e.english = "The belief, the reply (verbal noun from a-iruk, 'to believe / reply')";
          e.translation = "En-girukoto, pl. In-girukot (Hollis 1905, p. 22)";
          e.pronunciation = "en-gi-ru-ko-to / in-gi-ru-kot";
        } else if (e.english === "The buttocks" && e.translation === "The seat") {
          e.english = "The buttocks, the seat";
          e.translation = "El-lulterish, pl. Il-lulterishi / O-siadi, pl. I-siadini (Hollis 1905, p. 33)";
          e.pronunciation = "el-lul-te-rish / o-sia-di";
        } else if (e.translation === "'N-giri naa-tuflgwaita") {
          e.translation = "'N-giri naa-tuñgwaita";
          e.pronunciation = "n-gi-ri naa-tu-ngwai-ta";
        } else if (e.translation === "Ol-tuSgani kitok") {
          e.translation = "Ol-tuñgani kitok";
          e.pronunciation = "ol-tu-nga-ni ki-tok";
        } else if (e.translation === "Ol-kitok-tu5gani") {
          e.translation = "Ol-kitok-tuñgani";
          e.pronunciation = "ol-ki-tok-tu-nga-ni";
        } else if (e.translation === "Ol-oing5ni Il-oiflgok The bull") {
          e.translation = "Ol-oiñgoni, pl. Il-oiñgok (the bull)";
          e.pronunciation = "ol-oi-ngo-ni / il-oi-ngok";
        } else if (e.translation === "Ejngoroyoni na-nana") {
          e.translation = "E-ñgoroyoni na-nana";
          e.pronunciation = "e-ngo-ro-yo-ni na-na-na";
        } else if (e.translation === "Ol-tungani o-ra3 sapuk") {
          e.translation = "Ol-tuñgani o-ra sapuk";
          e.pronunciation = "ol-tu-nga-ni o-ra sa-puk";
        } else if (e.translation === "Ol-tuilgani liki-suj") {
          e.translation = "Ol-tuñgani liki-suj";
          e.pronunciation = "ol-tu-nga-ni li-ki-suj";
        } else if (e.translation === "Ol-tuflgani o-tu-suj-a" || e.translation === "Ol-tungani 0-tu-suj-a") {
          e.translation = "Ol-tuñgani o-tu-suj-a";
          e.pronunciation = "ol-tu-nga-ni o-tu-suj-a";
        } else if (e.translation === "0-sarge (for ol-sarge)") {
          e.translation = "O-sarge (for ol-sarge)";
          e.pronunciation = "o-sar-ge";
        } else if (e.translation === "Ol-alem la-isho J") {
          e.translation = "Ol-alem la-isho";
          e.pronunciation = "ol-a-lem la-i-sho";
        } else if (e.translation === "A-iy5lo-u") {
          e.translation = "A-iyolo-u";
          e.pronunciation = "a-i-yo-lo-u";
        } else if (e.translation === "A-tonfe (for a-tonye)") {
          e.translation = "A-tonie (for a-tonye)";
          e.pronunciation = "a-to-nie";
        } else if (e.translation === "A-isud-6-rie") {
          e.translation = "A-isud-o-rie";
          e.pronunciation = "a-i-su-do-rie";
        } else if (e.translation === "Il-tuftganak oo-ibor") {
          e.translation = "Il-tuñganak oo-ibor";
          e.pronunciation = "il-tu-nga-nak oo-i-bor";
        } else if (e.translation === "'ftgoroyok kutiti") {
          e.translation = "'Ñgoroyok kutiti";
          e.pronunciation = "ngo-ro-yok ku-ti-ti";
        } else if (e.translation === "Il-nmran oo-gol") {
          e.translation = "Il-muran oo-gol";
          e.pronunciation = "il-mu-ran oo-gol";
        } else if (e.translation === "Il-nganaiyo (for il-Sganaiyok)") {
          e.translation = "Il-ñganaiyo (for il-ñganaiyok)";
          e.pronunciation = "il-nga-nai-yo";
        } else if (e.translation === "'N-gishu (for 'n-klshu)") {
          e.translation = "'N-gishu (for 'n-kishu)";
          e.pronunciation = "n-gi-shu";
        } else if (e.translation === "Ol-le-'ng-aina (the-of-the-hand 1)") {
          e.translation = "Ol-le-'ng-aina (the-of-the-hand)";
          e.pronunciation = "ol-le-ng-ai-na";
        } else if (e.translation === "Ol-oirien Il-oirieuito The wild olive-tree") {
          e.english = "The wild olive-tree (log of wood, heart of a tree)";
          e.translation = "Ol-oirien, pl. Il-oirienito";
          e.pronunciation = "ol-oi-rien / il-oi-rie-ni-to";
        } else if (e.translation === "Kishomi J") {
          e.translation = "Kishomi";
          e.pronunciation = "ki-sho-mi";
        } else if (e.translation === "El-loft1 go (for en-longo)") {
          e.translation = "El-loñgo (for en-loñgo)";
          e.pronunciation = "el-lo-ngo";
        } else if (e.translation === "1 A-nyal") {
          e.translation = "A-nyal";
          e.pronunciation = "a-nyal";
        } else if (e.english === "To cause to fol low for (some one) to (a place)") {
          e.english = "To cause to follow for (some one) to (a place)";
        } else if (e.translation === "Il-chaSgit le-'n-dim") {
          e.translation = "Il-chañgit le-'n-dim";
          e.pronunciation = "il-cha-ngit le-n-dim";
        }

        cleanedMaasaiEntries.push(e);
      }
      cat.entries = cleanedMaasaiEntries;
    }
  }

  // For kalenjin.json: clean truncated " pr" verbs, leading comma/parenthetical fragments, and ". (See ...)" stubs from Hollis (1909)
  if (dict.languageId === "kalenjin") {
    for (const cat of dict.categories) {
      for (const e of cat.entries) {
        const t = e.translation.trim();
        if (HOLLIS_1909_TRUNCATED_VERB_FIXES[t]) {
          e.translation = HOLLIS_1909_TRUNCATED_VERB_FIXES[t];
        } else if (t === "or Eldest , oo, pl. echen") {
          e.english = "Elder or Eldest";
          e.translation = "oo, pl. echen";
        } else if (t === "or wasp , aruwa, pl. aruk") {
          e.english = "Hornet or wasp";
          e.translation = "aruwa (aruwet), pl. aruk";
        } else if (t === "or eyelash , kororik-ap-konda") {
          e.english = "Eyebrow or eyelash";
          e.translation = "kororik-ap-konda";
        } else if (t === "or mist , kipuimet") {
          e.english = "Fog or mist";
          e.translation = "kipuimet (kipuimetiet)";
        } else if (t === "(v. imp.), inyol-chi" || t === ", inyol-chi") {
          e.translation = "inyol-chi (pr. inyol-chi-n, p.p. ka-inyol-chi)";
        } else if (t === "koii. (See Stone .)") {
          e.translation = "koii (koita), pl. koii (koiik)";
        } else if (t.startsWith("(neut.), ") || t.startsWith("(act.), ") || t.startsWith("(m.), ") || t.startsWith("(falsehood), ")) {
          const commaIdx = t.indexOf("), ");
          if (commaIdx !== -1) {
            const tag = t.slice(0, commaIdx + 1);
            const rest = t.slice(0, commaIdx) ? t.slice(commaIdx + 3).trim() : t;
            if (!e.english.includes(tag)) {
              e.english = `${e.english} ${tag}`;
            }
            e.translation = rest;
          }
        } else if (t.startsWith(", ")) {
          e.translation = t.slice(2).trim();
        }
      }
    }
  }

  // For pokot.json: clean false substring-matched plurals, period-truncated translations, and comma-split headwords from the older Beech 1911 pass
  if (dict.languageId === "pokot") {
    for (const cat of dict.categories) {
      // Collect English headwords that already have a full "(English-Suk Vocabulary)" entry in this category
      const fullBeechHeadwords = new Set<string>();
      for (const e of cat.entries) {
        if (e.context.includes("(English-Suk Vocabulary)")) {
          fullBeechHeadwords.add(e.english.toLowerCase().replace(/\s*\([^)]*\)/g, "").trim());
        }
      }

      const cleanedEntries: DictEntry[] = [];
      for (const e of cat.entries) {
        // Fix false substring-matched plurals in Beech (1911) entries
        if (e.translation === "met, pl. kômet-un") e.translation = "met, pl. met-o";
        else if (e.translation === "mu, pl. tamu-tin") e.translation = "mu, pl. mu-tin";
        else if (e.translation === "tainy, pl. matŏñg") e.translation = "tainy, pl. tīch, tī";
        else if (e.translation === "kech, pl. mnyīrke'tin") e.translation = "kech, pl. kech-ir";
        else if (e.translation === "kĕt, pl. tīkīt") e.translation = "kĕt, pl. id.";
        else if (e.translation === "kŏgh, pl. mokōgh") {
          e.translation = e.english.toLowerCase().includes("bone")
            ? "kŏgh, pl. kŏgh-en"
            : "kŏgh, pl. kŏgh-ech";
        } else if (e.translation === "orus-ion, pl. torus-tin") e.translation = "orus-ion, pl. orus-tin";
        else if (e.translation === "ăchei, pl. mĕchei") e.translation = "ăchei, pl. ōchei";
        else if (e.translation === "ril, pl. cha-le-meril-tin") e.translation = "rel (ril), pl. rel-ech";
        else if (e.translation === "pan, pl. kôpan-t-is") e.translation = "pan, pl. pŏn-w-ei";
        else if (e.translation === "nya, pl. pkonya-tin") e.translation = "nya, pl. cha";
        else if (e.translation === "chi, pl. kuam-pich") e.translation = "chi, pl. pich; pi'";
        else if (e.translation === "kôt, pl. pany-a-kôt") e.translation = "kôt, pl. kôt-oʻ";
        else if (e.translation === "akwagh, pl. endakwai'-tin") e.translation = "akwagh, pl. akwŏgh-ech";
        else if (e.translation === "kekir, pl. kekekir") e.translation = "kekir, pl. id. or kekir-ut";
        else if (e.translation === "ton, pl. wôta, -i") e.translation = "ton, pl. tô";
        else if (e.english === "Kalacha" && e.translation.endsWith("kne")) {
          e.translation = "a V-shaped man's cape tied round the neck, with the apex reaching to the back of his knees";
        }

        // Fix comma-split or grammar-fragment headwords
        if (e.english === "Both" && e.translation === "all three, &c") {
          e.translation = "tuwai ('both'), tukul ('all three, &c.')";
        } else if (e.english === "Man" && e.translation.startsWith("nya-man corresponds")) {
          e.english = "Nyaman (intensive adverb: very / indeed)";
          e.translation = "nya-man, man (corresponds to Nandi mising)";
        } else if (e.english === "Much" && e.translation.startsWith("many are represented")) {
          e.translation = "cha-chang (many / much)";
        } else if (e.english === "Little" && e.translation === "few by ñgeri") {
          e.english = "Few / Little";
          e.translation = "ñgeri (few), meneñg, pl. mingech (little)";
        } else if (e.english === "Thou" && e.translation === "second person singular") {
          e.translation = "nyī (2nd person singular pronoun)";
        } else if (e.english === "Dish" && e.translation === "a, otup-a, pl. otup-ei") {
          e.english = "Dish, a";
          e.translation = "otup-a, pl. otup-ei";
        } else if (e.english === "Elephant's" && e.translation === "ewu") {
          e.english = "Elephant's trunk";
          e.translation = "ewu, pl. ewu-tin";
        }

        // Skip defective period-truncated duplicates from the older "(Oxford, 1911 — Public Domain)" pass
        if (e.context.includes("(Oxford, 1911 — Public Domain)")) {
          const t = e.translation.trim();
          const isTruncatedStub =
            /^(?:\(i+\)\s*)?(?:to(?:\s*\([^)]*\))?:\s*)?(?:r|pr|use pass|use ad|use adv|express by pres|from r)$/i.test(t) ||
            t.endsWith(", pr") ||
            t.endsWith("; (ii) r") ||
            t.endsWith("[Swah") ||
            t.endsWith("; coll") ||
            t.endsWith("pl. and coll") ||
            t === "konyen (the pl)" ||
            t === "me; verbal pref" ||
            t === "Turn by 'give' with pron" ||
            t === "If I had not" ||
            t === "That I may not be struck, &c" ||
            t === "indeed, is also used as in the following example";
          const normHead = e.english.toLowerCase().replace(/\s*\([^)]*\)/g, "").trim();
          if (isTruncatedStub || fullBeechHeadwords.has(normHead)) {
            continue;
          }
        }

        cleanedEntries.push(e);
      }
      cat.entries = cleanedEntries;
    }
  }

  for (const cat of dict.categories) {
    for (const e of cat.entries) {
      // 1. Page citation corrections for Set 8 (pp. 980–992) and Set 9 (pp. 993–1001)
      if (e.context.includes("1902, pp. 946–966")) {
        e.context = e.context.replace("1902, pp. 946–966", "1902, pp. 980–992");
      } else if (e.context.includes("1902, pp. 958–966")) {
        e.context = e.context.replace("1902, pp. 958–966", "1902, pp. 993–1001");
      }

      // 2. Printer's ditto („ -> "To ...") headword corrections
      if (e.english === "To (female)" && e.translation === "Ciebī, Cep") e.english = "Child (female)";
      else if (e.english === "To young" && (e.translation === "Ciēbē" || e.translation === "Endīto" || e.translation === "Ñutu")) e.english = "Woman, young";
      else if (e.english === "To young" && e.translation === "Kiebtó (virgin)") e.english = "Woman, young (virgin)";
      else if (e.english === "To good" && e.translation === "Ane aca karām") e.english = "I am good";
      else if (e.english === "To (white)" && e.translation === "Ol giteñ oibor") e.english = "Bullock (white)";
      else if (e.english === "To (my)" && (e.translation === "Eñgaraiai" || e.translation === "Lakwen na nyu")) e.english = "My child";
      else if (e.english === "To (many)" && e.translation === "Kejan") e.english = "Many";
      else if (e.english === "To (milch)" && e.translation === "Teta kigei") e.english = "Milch cow";
      else if (e.english === "To man" && e.translation === "Ñama ñongo") e.english = "Great man";
      else if (e.english === "To not" && e.translation === "Ukanamī") e.english = "I give not";
      else if (e.english === "To molar") e.english = "Tooth, molar";
      else if (e.english === "To canine") e.english = "Tooth, canine";
      else if (e.english === "To nut") e.english = "Ground-nut";
      else if (e.english === "To child" || e.english === "To (little)") e.english = "Little child";
      else if (e.english === "To breeze") e.english = "Breeze";
      else if (e.english === "To small" && e.translation === "Ihumba") e.english = "Small nose";
      else if (e.english === "To (good)") e.english = "Good spirit / ghost";
      else if (e.english === "To (our)" && e.translation === "Alia efu") e.english = "Our eating";
      else if (e.english === "To most beasts, etc") e.english = "Male (of most beasts, etc.)";
      else if ((e.english === "To (mammals and reptiles)" || e.english === "Egg (of mammals and reptiles)") && e.translation === "Iduasi") e.english = "Female (of mammals and reptiles)";
      else if (e.english === "To (castrated)" && e.translation === "Ehei") e.english = "Bullock (castrated)";
      else if (e.english === "To day before") e.english = "Day before yesterday";
      else if (e.english === "To (of beads)") e.english = "String (of beads)";

      // 3. Truncated compound numerals and footnote tags
      if (e.english === "Sixty" && e.translation === "otomon") {
        e.translation = "Onnom otomon";
        e.pronunciation = "on-nom o-to-mon";
      } else if (e.english === "Seventy" && e.translation === "obikitam") {
        e.translation = "Onnom obikitam";
        e.pronunciation = "on-nom o-bi-ki-tam";
      } else if (e.english === "Eighty" && e.translation === "otomoni uni") {
        e.translation = "Onnom otomoni uni";
        e.pronunciation = "on-nom o-to-mo-ni u-ni";
      } else if (e.english === "Ninety" && e.translation === "artam") {
        e.translation = "Onnom artam";
        e.pronunciation = "on-nom ar-tam";
      } else if (e.english === "Thirty" && e.translation === "katatu") {
        e.translation = "Kamagumi katatu";
        e.pronunciation = "ka-ma-gu-mi ka-ta-tu";
      } else if (e.english === "Forty" && e.translation === "kanne") {
        e.translation = "Kamagumi kanne";
        e.pronunciation = "ka-ma-gu-mi kan-ne";
      } else if (e.english === "Fifty" && e.translation === "karano") {
        e.translation = "Kamagumi karano";
        e.pronunciation = "ka-ma-gu-mi ka-ra-noh";
      } else if (e.translation === "Retc[-11]") {
        e.translation = "Retc (pronounced 'Retch')";
        e.pronunciation = "retch";
      } else if (e.translation === "Ratc[-12]") {
        e.translation = "Ratc (often sounds like 'Raty')";
        e.pronunciation = "raty";
      } else if (e.translation === "Aciemo[-13]") {
        e.translation = "Aciemo (C in Ja-luo is pronounced very like ty)";
        e.pronunciation = "a-tye-mo";
      } else if (e.translation === "[Where the word is not given in Lurimi, it means that it is the same as Lukabarasi.]") {
        e.translation = "Inzikhe (same as Lukabarasi)";
        e.pronunciation = "in-zi-khe";
      }
    }
  }

  const extras = JOHNSTON_1902_SUPPLEMENTARY_ENTRIES[dict.languageId];
  if (extras) {
    for (const item of extras) {
      const targetCat = dict.categories.find((c) => c.id === item.catId) ?? dict.categories[0];
      if (targetCat && !targetCat.entries.some((x) => x.translation === item.entry.translation)) {
        targetCat.entries.push(item.entry);
      }
    }
  }
}

/**
 * Returns a WeakMap-memoized O(1) lookup index for a loaded dictionary.
 */
export function getDictIndex(dict: Dictionary): DictSearchIndex {
  const cached = DICT_INDEX_CACHE.get(dict);
  if (cached) return cached;

  normalizeJohnston1902DictionaryEntries(dict);

  const all: IndexedDictEntry[] = [];
  const byEngTerm = new Map<string, IndexedDictEntry[]>;
  const byTransTerm = new Map<string, IndexedDictEntry[]>;

  for (const cat of dict.categories) {
    for (const entry of cat.entries) {
      const engLower = entry.english.toLowerCase().trim();
      const transLower = entry.translation.toLowerCase().trim();
      const engTerms = extractNormalizedTerms(entry.english);
      const transTerms = extractNormalizedTerms(entry.translation);
      const item: IndexedDictEntry = {
        entry,
        cat,
        engLower,
        transLower,
        engTerms,
        transTerms,
      };
      all.push(item);

      for (const t of engTerms) {
        let bucket = byEngTerm.get(t);
        if (!bucket) {
          bucket = [];
          byEngTerm.set(t, bucket);
        }
        bucket.push(item);
      }
      for (const t of transTerms) {
        let bucket = byTransTerm.get(t);
        if (!bucket) {
          bucket = [];
          byTransTerm.set(t, bucket);
        }
        bucket.push(item);
      }
    }
  }

  const index: DictSearchIndex = { all, byEngTerm, byTransTerm };
  DICT_INDEX_CACHE.set(dict, index);
  return index;
}

// Complete G. A. S. Northcote (1907) "The Nilotic Kavirondo" (JRAI Vol. 37, pp. 58-66) Lexical & Ethnographic Dictionary Supplement
if (!JOHNSTON_1902_SUPPLEMENTARY_ENTRIES['luo']) {
  JOHNSTON_1902_SUPPLEMENTARY_ENTRIES['luo'] = [];
}
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES['luo'].push(
  { catId: 'people', entry: { english: 'Nilotic Kavirondo (proper tribal endonym; kin to Dinka, Aluri/Alur, and Acholi near Wadilai)', translation: 'Jaluo (Northcote 1907, p. 58)', pronunciation: 'ja-lu-o', context: 'G. A. S. Northcote, The Nilotic Kavirondo, JRAI Vol. 37 (1907, p. 58)', audioFile: null } },
  { catId: 'people', entry: { english: 'Retainer, page, poor relation in a family village; or policeman (adopted Swahili word)', translation: 'askari (Northcote 1907, p. 60, fn. 1)', pronunciation: 'as-ka-ri', context: 'G. A. S. Northcote, The Nilotic Kavirondo, JRAI Vol. 37 (1907, p. 60, fn. 1)', audioFile: null } },
  { catId: 'nature', entry: { english: 'Agricultural land / individually tilled plot within communal clan land (adopted Swahili word)', translation: 'shamba (Northcote 1907, p. 60, fn. 1)', pronunciation: 'sham-ba', context: 'G. A. S. Northcote, The Nilotic Kavirondo, JRAI Vol. 37 (1907, p. 60, fn. 1)', audioFile: null } },
  { catId: 'food', entry: { english: 'Millet (offered with meat, chicken, and beer to the sun-god at wedding feasts; adopted Swahili word)', translation: 'mtama (Northcote 1907, p. 62, fn. 1)', pronunciation: 'm-ta-ma', context: 'G. A. S. Northcote, The Nilotic Kavirondo, JRAI Vol. 37 (1907, p. 62, fn. 1)', audioFile: null } },
  { catId: 'people', entry: { english: 'Child born in the morning (widespread time-of-day birth name)', translation: 'onyango (Northcote 1907, p. 62)', pronunciation: 'o-nyan-go', context: 'G. A. S. Northcote, The Nilotic Kavirondo, JRAI Vol. 37 (1907, p. 62)', audioFile: null } },
  { catId: 'people', entry: { english: 'Child born at noon (widespread time-of-day birth name; standard Ochieng)', translation: 'oching (Northcote 1907, p. 62)', pronunciation: 'o-ching', context: 'G. A. S. Northcote, The Nilotic Kavirondo, JRAI Vol. 37 (1907, p. 62)', audioFile: null } },
  { catId: 'people', entry: { english: 'Child born in the afternoon (widespread time-of-day birth name; standard Odhiambo)', translation: 'odiambo (Northcote 1907, p. 62)', pronunciation: 'o-diam-bo', context: 'G. A. S. Northcote, The Nilotic Kavirondo, JRAI Vol. 37 (1907, p. 62)', audioFile: null } },
  { catId: 'people', entry: { english: 'Child born at night (widespread time-of-day birth name)', translation: 'otieno (Northcote 1907, p. 62)', pronunciation: 'o-ti-e-no', context: 'G. A. S. Northcote, The Nilotic Kavirondo, JRAI Vol. 37 (1907, p. 62)', audioFile: null } },
  { catId: 'people', entry: { english: 'Hereditary nickname: "the man who owned much mtama [millet]"', translation: 'obele (Northcote 1907, p. 62)', pronunciation: 'o-be-le', context: 'G. A. S. Northcote, The Nilotic Kavirondo, JRAI Vol. 37 (1907, p. 62)', audioFile: null } },
  { catId: 'people', entry: { english: 'Hereditary nickname: "the man who killed an elephant"', translation: 'oliech (Northcote 1907, p. 62)', pronunciation: 'o-li-ech', context: 'G. A. S. Northcote, The Nilotic Kavirondo, JRAI Vol. 37 (1907, p. 62)', audioFile: null } },
  { catId: 'people', entry: { english: 'Hereditary nickname: "the man like a locust"', translation: 'obonyo (Northcote 1907, p. 62)', pronunciation: 'o-bo-nyo', context: 'G. A. S. Northcote, The Nilotic Kavirondo, JRAI Vol. 37 (1907, p. 62)', audioFile: null } },
  { catId: 'people', entry: { english: 'Colonial administrative official / magistrate (rain-maker summons anecdote)', translation: 'Bwana (Northcote 1907, p. 64)', pronunciation: 'bwa-na', context: 'G. A. S. Northcote, The Nilotic Kavirondo, JRAI Vol. 37 (1907, p. 64)', audioFile: null } }
);

// Complete Hildegarde Hinde (1901) "The Masai Language: Grammatical Notes Together with a Vocabulary" (pp. i–xii, 1–75) & A. C. Hollis (1905) Dictionary Supplement and Normalization
if (!JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["maasai"]) {
  JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["maasai"] = [];
}
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["maasai"].push(
  {
    catId: "greetings",
    entry: {
      english: "Salutations in Hinde (1901, p. 41): To a woman (sg. & pl.), to a man, and on shaking hands",
      translation: "To a woman: tagwenia (lit. 'laugh'), pl. tagwenia bōōgi — Reply: īgo • To a man: soboi — Reply: eber • On shaking hands: nassak",
      pronunciation: "ta-gwe-nia / i-go / so-boi / e-ber / nas-sak",
      context: "Hildegarde Hinde, The Masai Language: Grammatical Notes Together with a Vocabulary (Cambridge University Press, 1901, p. 41)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Song the Children Sing for Rain (Hinde 1901, p. 42): 'God we sing, God rain we pray thee oh!'",
      translation: "Siumbi aielisiumbi ngai kijaiga eo!",
      pronunciation: "si-um-bi ai-e-li-si-um-bi ngai ki-jai-ga e-o",
      context: "Hildegarde Hinde, The Masai Language: Grammatical Notes Together with a Vocabulary (Cambridge University Press, 1901, p. 42)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Masai Medicine Song Invoking Ngai & Great Prophet Mbatian (Hinde 1901, p. 42): 'We pray God, we pray Batian.'",
      translation: "Aamon yi ngai, aamon m'Batian.",
      pronunciation: "aa-mon yi ngai aa-mon m-ba-tian",
      context: "Hildegarde Hinde, The Masai Language: Grammatical Notes Together with a Vocabulary (Cambridge University Press, 1901, p. 42)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Song Sung by the Warriors When Going to Fight Sendeyo (Hinde 1901, p. 42): 'Sendeyo has done evil, we were friends once but now we go to fight him with our spears, the big ones in front, the small behind.'",
      translation: "Sendeyo manoloimoti tendeboi errakenja bonik oldash irremeta.",
      pronunciation: "sen-de-yo ma-no-loi-mo-ti ten-de-boi er-ra-ke-nja bo-nik ol-dash ir-re-me-ta",
      context: "Hildegarde Hinde, The Masai Language: Grammatical Notes Together with a Vocabulary (Cambridge University Press, 1901, p. 42)",
      audioFile: null,
    },
  },
  {
    catId: "family",
    entry: {
      english: "The 3 Social & Occupational Group Ethnonyms in Hinde (1901, p. 42): Masai, Dorobo Hunters & Il-kunono Ironworkers",
      translation: "Masai: Orrmāssani (sing.), elmāsai (pl.) • Hunters: olldōrrobon (sing.), dōrrobo (pl.) • Iron workers: orrgunoni (sing.), elgunonu (pl.)",
      pronunciation: "orr-mas-sa-ni / el-ma-sai / oll-dor-ro-bon / dor-ro-bo / orr-gu-no-ni / el-gu-no-nu",
      context: "Hildegarde Hinde, The Masai Language: Grammatical Notes Together with a Vocabulary (Cambridge University Press, 1901, p. 42)",
      audioFile: null,
    },
  },
  {
    catId: "nature",
    entry: {
      english: "All 8 Kenyan & East African Geographical Names Recorded by Hildegarde Hinde (1901, p. 42)",
      translation: "1. Kenia (mt.): oldonyo gēri ('the striped mountain') • 2. Kilima Njaro (mt.): oldonyo eborr ('the white mountain') • 3. Suswa (mt.): oldonyo kenyuki ('the red mountain') • 4. Nairobi (river): ngare nairobi ('Cold — the river comes from the forest and is very cold as it emerges into the open') • 5. Ngongo bagas (river): 'the eye of the Spring' • 6. Eldonyo sabuk (mt.): 'the big mountain' • 7. Gwasso kidong (river): 'the river of the ollokidong trees (the wood of which is used for making quivers)' • 8. Enaibasha (lake): 'the great water or sea'",
      pronunciation: "ol-do-nyo ge-ri / ol-do-nyo e-borr / ol-do-nyo ke-nyu-ki / nga-re nai-ro-bi / ngo-ngo ba-gas / el-do-nyo sa-buk / gwas-so ki-dong / e-nai-ba-sha",
      context: "Hildegarde Hinde, The Masai Language: Grammatical Notes Together with a Vocabulary (Cambridge University Press, 1901, p. 42)",
      audioFile: null,
    },
  },
  {
    catId: "emergency",
    entry: {
      english: "All 10 Traditional Masai Curses & Imprecations Recorded by Hildegarde Hinde (1901, p. 43)",
      translation: "1. Djerrterrā (against the man addressed) • 2. Njertērrda (against the man addressed) • 3. Mining jangayenda (against a man and his father) • 4. Kirrigūmini (curse on the father saying the person cursed is a bastard) • 5. Injeraii (supposed to cause the death of a brother or sister) • 6. Tadui munigilidoigi (supposed to cause the person addressed to die) • 7. Injerai kordai (a child's curse) • 8. Miinjirria nigiruk (a child's curse) • 9. Mbussa bwaara ('Fool') • 10. Mbarra (accompanied by spitting; equivalent of 'damn')",
      pronunciation: "djerr-ter-ra / njer-terr-da / mi-ning ja-nga-yen-da / kir-ri-gu-mi-ni / in-je-raii / ta-dui mu-ni-gi-li-doi-gi / mbus-sa bwaa-ra / mbar-ra",
      context: "Hildegarde Hinde, The Masai Language: Grammatical Notes Together with a Vocabulary (Cambridge University Press, 1901, p. 43)",
      audioFile: null,
    },
  },
  {
    catId: "numbers",
    entry: {
      english: "Sexagesimal (Base-60) Warrior-Company Counting System & Finger-Snapping Signs (Hinde 1901, Rules 9–10, pp. 4–5)",
      translation: "1 nabu, 2 ari/are, 3 ūni, 4 ungwun, 5 miet (closed fist), 6 elle, 7 nabishāna, 8 issiet, 9 nawdu/endōrroi, 10 tomon (two closed fists), 20 tigitum, 30 ossom, 40 arrtam, 50 orrnom, 60 īp ('which equals our 100. The Masai count in sixties, and a company of warriors is composed of 60 men', signed by snapping the fingers of one hand), 120 īp ari (two sixties), First tangasaino, Last korom",
      pronunciation: "na-bu / a-ri / u-ni / u-ngwun / miet / el-le / na-bi-sha-na / is-siet / naw-du / to-mon / ti-gi-tum / os-som / arr-tam / orr-nom / ip",
      context: "Hildegarde Hinde, The Masai Language: Grammatical Notes Together with a Vocabulary (Cambridge University Press, 1901, Rules 9–10, pp. 4–5)",
      audioFile: null,
    },
  },
  {
    catId: "adjectives",
    entry: {
      english: "The 9 Regular Noun Plural Suffix Methods, 2 Prefix Plurals, 7 Irregular Plurals & 5 Invariables (Hinde 1901, Rules 18–21, pp. 8–10)",
      translation: "9 Regular Suffixes: 1. -i/-oi/-ni (engela → engelani, ndap → ndapi, orlōrro → orlōrroi) • 2. -a/-ia (oldulet → olduleta, essurutie → essorudia, essondai → essondā) • 3. -u/-tu (ingobirr → ingobirru, emurrt → emurrtu, oldonyi → elōnitu) • 4. -n/-in (ossesi → essessin, ōrgenoss → ergenossin, mbarrda → mbarrdan) • 5. -k/-ak/-ok (ngorraion → ngorroiok, emoworr → mowarrak, orlāmonon → lamonok) • 6. -g (ngaina → ngaieg, ndāridigi → ndāridig) • 7. -r/-rr (ngera → ngerr, emossori → emossorr, endōlu → endōluer) • 8. -o (olashi → olasho, endōlit → endōlo) • 9. -t (ollogurrto → ollogurrt, engumoru → engumurrt, engias → engiaset) • 2 Prefix Plurals: yeyu → noiyeyu (mother), loom → eloom (twig) • 7 Irregulars: orromashere → ellemasher (tick), ingirigura → maigurana (dance), ollomagaw → errmagawl (hippopotamus), orrigena → ellgiē (breast), orrborrnoto → irrgonot (mark), oloirika → lorrigaishi (chair), emālo → miggibi (kudu) • 5 Invariables: ngolong (sun), orrümünyi (beard), loisusu (flea), ngima (fire), baba (father)",
      pronunciation: "en-ge-la-ni / ol-du-le-ta / e-murr-tu / es-ses-sin / la-mo-nok / ngai-eg / ol-a-sho / noi-ye-yu / e-loom / mig-gi-bi",
      context: "Hildegarde Hinde, The Masai Language: Grammatical Notes Together with a Vocabulary (Cambridge University Press, 1901, Rules 18–21, pp. 8–10)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "The 5 Ethnographic & Lexical Footnotes in Hinde's Vocabulary & Phrases (1901, pp. 35, 47, 48, 59, 65, 70)",
      translation: "1. Kinship Suppletion (p. 35 fn. *): baba ('father') and yeyu ('mother') are never used in the 2nd or 3rd person, which substitute minyi/menye ('your/his/their father') and ngutungy/ngotongy/nutun/notorn ('your/his/their mother') • 2. Imperative Verb Entry Format (p. 47 fn. * under adjudge): all verbs are given in the Imperative so learners can make themselves understood before mastering complex conjugations • 3. Kikuyu Basket Loanword (p. 48 fn. *): engiondo [kikuyu] pl. engiondoni (baskets obtained from the Kikuyu) • 4. Swahili Jigger Loanword (p. 59 fn. *): ndudu [kiswahili] (jigger flea introduced by Swahilis) • 5. Kikuyu Potato Loanword (p. 65 fn. *): ngwashin [kikuyu] (potatoes known through the Wakikuyu medium) • 6. Syphilis Etymology (p. 70 fn. *): ngaioulu (literally 'God knows', introduced by Swahilis)",
      pronunciation: "ba-ba / mi-nyi / me-nye / ngu-tu-ngy / en-gion-do / ndu-du / ngwa-shin / ngai-ou-lu",
      context: "Hildegarde Hinde, The Masai Language: Grammatical Notes Together with a Vocabulary (Cambridge University Press, 1901, pp. 35, 47, 48, 59, 65, 70)",
      audioFile: null,
    },
  }
);

// Complete Rev. N. Stam (1929) "The Bahanga" (Publications of the Catholic Anthropological Conference, Vol. I, No. 4, pp. 143–179) Dictionary Supplement
if (!JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["luhya"]) {
  JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["luhya"] = [];
}
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["luhya"].push(
  {
    catId: "nature",
    entry: {
      english: "Country of the Bahanga (Wanga Kingdom), Language, and Native (sing. & plur.) on the 1929 Map (Stam 1929, p. 145)",
      translation: "Country: Buhanga • Language: Luhanga • Native (sing.): Muhanga • Natives (plur.): Bahanga • Rivers & Sites: Nzoia R. (Nzoya), Lusumu R., Lugose R., Viratsi R., Mumias, Matawa, Imanga, Matungo, Khyimuli, Khyira, Bwagwe, Bijifi, Marakalu, Ndangalasya, Lwanda, Mukulu",
      pronunciation: "bu-ha-nga / lu-ha-nga / mu-ha-nga / ba-ha-nga / ma-tu-ngo / khyi-mu-li",
      context: "Rev. N. Stam, The Bahanga, Publications of the Catholic Anthropological Conference Vol. I, No. 4 (1929, pp. 143–148 & Map p. 145)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Complete 11-Generation Royal Genealogy of the Bahanga (Bakhitsetse Family) from Kwandedi & Wanga to Mumia, Osundwa II & Rapando (Stam 1929, pp. 143–148)",
      translation: "Kwandedi (born in Teriki, moved to Khyira in Kabras) → Wanga & Khabiagala (at Bwagwe) • Wanga (served Muyima at Imanga hiding his thick copper bracelet, joined at Bijifi by Bakyero/Bakhyero, Banamagwa & Bakhyikawa clans, built Mumias & Matungo) → Waballa & Murono (→ Kitai at Marakalu near Ndangalasya) • Waballa (sawed horn tips in Bukhayo; sent Wakhalivu of Bakyero to Matawa with 4 arrows) → Muswi ('name of a girl who has not brought forth', slew 4 of Murono's men) → Wamukoya [I] → (1) Netya (fought Abetakho, Babukusu, Wamia, Nilotic Kavirondo & Uasin-Gishu Masai; killed at Lwanda) → Osundwa [I] ('death or victory') → Wamukoya [II] → Khyihundu (allied with rifle-armed Swahili caravan) → Mumia (kraals at Mumias & Jinja, retired 1928), Murunga (N. Kitosh & Wamia), Mulama (Marama), Katima (Samia), Were (Wahola) & Kiteki (→ Osundwa [II], succeeded 1928); and (2) Kweyu (at Khyimuli, fought Abekwe & Abarebe) → Lumbasi → Sakwa → Lutomiya (→ Rapando, chief of Mukulu), Lwambami & Kiwundu",
      pronunciation: "kwa-nde-di / wa-nga / wa-bal-la / mu-swi / wa-mu-ko-ya / ne-tya / o-su-ndwa / khyi-hu-ndu / mu-mi-a / kwe-yu / ra-pa-ndo",
      context: "Rev. N. Stam, The Bahanga, Publications of the Catholic Anthropological Conference Vol. I, No. 4 (1929, pp. 143–148)",
      audioFile: null,
    },
  },
  {
    catId: "family",
    entry: {
      english: "Paramount Chief / King of the Bahanga (of the royal Bakhitsetse family, nominated & strangled when dying by the Bakyero / Bakhyero clan) (Stam 1929, pp. 146–149)",
      translation: "mwami / omwami (genitive: ekhyo mwami 'of the chief'; royal dynasty: Bakhitsetse; kingmaking clan who bestow the thick copper bracelet: Bakyero / Bakhyero, headed under Waballa by Wakhalivu)",
      pronunciation: "mwa-mi / o-mwa-mi / ba-khi-tse-tse / ba-khye-ro / wa-kha-li-vu",
      context: "Rev. N. Stam, The Bahanga, Publications of the Catholic Anthropological Conference Vol. I, No. 4 (1929, pp. 146–149)",
      audioFile: null,
    },
  },
  {
    catId: "verbs",
    entry: {
      english: "To die / death, to be buried / burial, and grave in Luhanga (Stam 1929, pp. 149, 151)",
      translation: "okhufwa (death / to die) • okhuyaberwa (burial / to be buried) • ekhyirindwa (grave)",
      pronunciation: "o-khu-fwa / o-khu-ya-be-rwa / e-khyi-ri-ndwa",
      context: "Rev. N. Stam, The Bahanga, Publications of the Catholic Anthropological Conference Vol. I, No. 4 (1929, pp. 149, 151)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "To Fix the Grave of the Chief (1–2 Years After Sitting Burial in His Hut, Exhuming & Carrying Bones in a Beerpot to Matungo) (Stam 1929, pp. 148–149)",
      translation: "okhusenera ekhyirindwa ekhyo mwami ('to fix the grave of the chief': after the chief is strangled by Bakhyero elders and buried naked sitting in a fresh bull's hide in his hut with a beer-sucker in his mouth, 2 reedgrass pieces under his eyelids, and a bottomless beerpot over his head tended by his 1st wife, 1–2 years later his bones are washed with water, polished with butter, placed in a beerpot, and carried in procession to Matungo under the sacred trees)",
      pronunciation: "o-khu-se-ne-ra e-khyi-ri-ndwa e-khyo mwa-mi",
      context: "Rev. N. Stam, The Bahanga, Publications of the Catholic Anthropological Conference Vol. I, No. 4 (1929, pp. 148–149)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Commoner Burial Diagram (Fig. 1, p. 150), Pierced Fig-Leaf Ear Rite & Mourning Feasts (Stam 1929, pp. 149–152)",
      translation: "Fig. 1 Burial Positions: Kraal owner (man) inside middle of hut on right side (hair shaved on right forehead); Woman outside to left of entrance on left side (hair shaved on left); Male child outside under right eaves; Female child outside under left eaves (hair shaved in middle nearest forehead); wild-fig bark-cloth leaf under right ear & pierced leaf over left ear so the dead can hear sacrifices • Feasts: 1. inkokho eyo mukulikho ('chicken of the burial', roasted unplucked), 2. okhuba khu maziga ('the great bewailing', shaving on 3rd day for man / 2nd day for woman, bull killed on 4th day), 3. okhukalusya evigumba ('to return the bones', 2 weeks later by sons-in-law & wives without greeting anyone or looking back on the road), 4. okhusenera ekhyirindwa ('to fasten the grave') & omuyima ('the burial dance', 1 year later)",
      pronunciation: "i-nko-kho e-yo mu-ku-li-kho / o-khu-ba khu ma-zi-ga / o-khu-ka-lu-sya e-vi-gu-mba / o-khu-se-ne-ra e-khyi-ri-ndwa / o-mu-yi-ma",
      context: "Rev. N. Stam, The Bahanga, Publications of the Catholic Anthropological Conference Vol. I, No. 4 (1929, pp. 149–152 & Fig. 1 p. 150)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Sacrificer, Sacrifice, Kraal Sacrificial Stones Diagram (Fig. 2, p. 153) & Reversive Verb Rule (-a → -ula) (Stam 1929, pp. 152–156)",
      translation: "omumali owe misango (sacrificer) • omusango (sacrifice) • okhumala omusango (to sacrifice) • Fig. 2 Layout: 1. amagina ake misambwa ('stones of the ancestral spirits', 2 stones 10 ft in front of 1st wife's hut: right stone 1 × 1.5 ft inherited by eldest son, left stone 4–5 in. inherited by 2nd son) flanking the 4-ft lusambwa / lusiola pole (Markhamia platycalyx, up to 40 ft, cut from the khyemebekho / khyembekho family sacred grove; from obsolete samba 'to build/erect' → reversive sambula 'to break down' by changing -a to -ula), 2. khatsu khe misango ('little hut of the sacrifices', to left of 1st wife's hut, inherited by eldest son), 3. amagina ako lunganyi ('stones on the pathway', 2 flat stones outside kraal gate dedicated to Nasayi / Were) • Offerings: amalwa ake misango (beer), ingombe eye misango (cow / earless bull), inkokho eye misango (chicken), isindu eye misango (quail)",
      pronunciation: "o-mu-ma-li o-we mi-sa-ngo / a-ma-gi-na a-ke mi-sa-mbwa / lu-sa-mbwa / kha-tsu khe mi-sa-ngo / a-ma-gi-na a-ko lu-nga-nyi",
      context: "Rev. N. Stam, The Bahanga, Publications of the Catholic Anthropological Conference Vol. I, No. 4 (1929, pp. 152–156 & Fig. 2 p. 153)",
      audioFile: null,
    },
  },
  {
    catId: "phrases",
    entry: {
      english: "Three-Generation Ancestral Sacrificial Invocation: 'Grandfathers, Great-Grandfathers, Great-Great-Grandfathers, Eat Here!' (Stam 1929, p. 155)",
      translation: "abakuku mulire omu ('grandfathers, eat here') • evinambwa mulire omu ('great-grandfathers, eat here') • evisoni mulire omu ('great-great-grandfathers, eat here')",
      pronunciation: "a-ba-ku-ku mu-li-re o-mu / e-vi-na-mbwa mu-li-re o-mu / e-vi-so-ni mu-li-re o-mu",
      context: "Rev. N. Stam, The Bahanga, Publications of the Catholic Anthropological Conference Vol. I, No. 4 (1929, p. 155)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "The Five Special Sacrifices: Okhutisa Imbusi (4 Domestic/Neighbor Taboos) & Inkokho Eyakulikhirwamwo (In-Law Naming Fowl) (Stam 1929, pp. 156–158)",
      translation: "1–4. okhutisa imbusi (banging a young goat's head on the ground around the hut while singing, smearing dung on chests, tying wrist skin strips on women/children & thumb covers on men for 2 days, and halving the meat) required when: (1) a beaten wife suffers a skull fracture and flees bleeding into another's hut, (2) a beaten wife tears off her clothes and runs naked into another's hut, (3) a woman's waterpot falls from her head and breaks just past a hut, or (4) a woman carrying a perforated earthenware grass-ash salt filter stops to gossip in a neighbor's hut and lets salty water drip on the floor • 5. inkokho eyakulikhirwamwo ('the chicken by which the child receives its name', holding a live white cock/hen against the center pole and sticking 2 wing feathers in the ground when naming a crying 2-day baby after the father-in-law or mother-in-law)",
      pronunciation: "o-khu-ti-sa i-mbu-si / i-nko-kho e-ya-ku-li-khi-rwa-mwo",
      context: "Rev. N. Stam, The Bahanga, Publications of the Catholic Anthropological Conference Vol. I, No. 4 (1929, pp. 156–158)",
      audioFile: null,
    },
  },
  {
    catId: "phrases",
    entry: {
      english: "Supreme Being (Nasayi / Were), Morning Spitting Towards the Sun (Liyuba), Thanksgiving & Farewell Blessing (Stam 1929, pp. 159–162)",
      translation: "Nasayi ('the one adored', derived from sayo 'to adore') • Were (God, who makes the clouds move and gives life to every child) • liyuba (the sun; morning spitting towards the east & wrestler spitting into opponent's face because spittle = life) • Were ankhonyere ('God has helped me', said after escaping danger, p. 160) • Nasayi akhulinde ('May God protect you', said when bidding goodbye for a long trek, p. 161) • ekhyinekha (immortal human soul / shadow, p. 162) • vikhyeno (evil spirits / departed spirits, p. 162)",
      pronunciation: "na-sa-yi / we-re / li-yu-ba / we-re a-nkho-nye-re / na-sa-yi a-khu-li-nde / e-khyi-ne-kha / vi-khye-no",
      context: "Rev. N. Stam, The Bahanga, Publications of the Catholic Anthropological Conference Vol. I, No. 4 (1929, pp. 159–162)",
      audioFile: null,
    },
  },
  {
    catId: "emergency",
    entry: {
      english: "The Six Medical/Magical Practitioners, Two Judicial Ordeals (Ekhyilulu & Skull Ordeal) & 10 Omens (Amayoni Amabi) (Stam 1929, pp. 162–170)",
      translation: "1. omusebe / musebe / sitani (Masai-grave spirit possession cured by smoking under a blanket & throwing a burning stick on a Masai grave) • 2. balosi, sg. mulosi (night bewitchers carrying coal in a pot & keeping pet pythons/cobras/crocodiles/leopards) • 3. omundu owe misala ('man of the trees', herbalist & wet-cupping horn surgeon) • 4. omundu owe mikalo ('man of charms', hangs banana-bark cattle-plague bundle on kraal pole & puts burnt-wood ash in a hollow reed or wild pig's hollow tooth for court trials) • 5. omufumo (diviner shaking pebbles/millet in a gourd or reading entrails) • 6. omufira (poison-man with poison-pointed walking stick & wild onion; 2-cow cure fee) • Ordeals (ekhyilulu, pp. 167–168): pounded-stick water draught (innocent vomits in 15 min.; thief pays 2 cows, false accuser pays 3 cows) & Skull Ordeal (drinking water from or stepping over a relative's skull) • 10 Omens (amayoni amabi 'bad birds', pp. 169–170): wagtail (Motacilla vidua, visitors), crested crane (grey hair), crow on lusambwa pole (death), night owl on roof (death), rat gnawing hair/clothes, antelope crossing war path, dog howling like hyena or climbing roof (ears cut off on threshold), red ants (wealth), cats pairing by day (death), black field bird on right (lucky) vs. left (unlucky)",
      pronunciation: "o-mu-se-be / ba-lo-si / o-mu-ndu o-we mi-sa-la / o-mu-ndu o-we mi-ka-lo / o-mu-fu-mo / o-mu-fi-ra / e-khyi-lu-lu / a-ma-yo-ni a-ma-bi",
      context: "Rev. N. Stam, The Bahanga, Publications of the Catholic Anthropological Conference Vol. I, No. 4 (1929, pp. 162–170)",
      audioFile: null,
    },
  },
  {
    catId: "family",
    entry: {
      english: "Foundling Adoption (Makokha), Twins (Amakhwana), Marriage (Okhutekherana), Dowry (Okhukhua Omukhana), Totems (Musiro), Mutilations & Circumcision (Okhukhyebwa) (Stam 1929, pp. 170–179)",
      translation: "Makokha ('rubbish', roadway foundling adopted with loin-fringe, right-wrist mussel shell, waist bead & ear ring, p. 171) • amakhwana (twins) & okhutsiya khu makwana ('to go to the twins' after 2-month confinement, with Passifloraceae creeper, Trifolium clover, Caesalpiniaceae & sheep-dung sprinkling across 10-mile radius, pp. 172–173) • okhutekherana ('to boil for one another' = to marry, p. 173) • okhukhua omukhana (dowry: 1 young bull + 1 heifer + 8 cows, 3 goats = 1 cow, p. 174) • okhusira imbusi ('to jump over the goat', p. 175) • ingombe yarando ('stripped cow' sent if bride is a virgin, speared by paternal aunt, p. 175) • 8-piece household outfit after 5–6 months with water-throwing & brother's stick-beating rite earning a heifer (pp. 175–176) • musiro ('the thing abstained from': Isaac's antelope Boöcercus eurycerus for all Bahanga, eland in Marama; patrilineal & non-exogamous; women abstain from chickens, guinea fowl, eggs, sheep, suckling goat & lepidosiren mudfish, pp. 176–177) • 4 lower incisors extracted at age ~10, 2 rows of ~25 forehead incisions & 3-stroke cheek mark (\\|/, 1.25 in.) burnt with isambirire grass, saliva & cobwebs (p. 178) • okhukhyebwa (standing circumcision every 2–3 yrs, ages 15–25, by Kakalelwa/Abarebe operators) & irumbi (4–5 month seclusion hut, pp. 178–179)",
      pronunciation: "ma-ko-kha / a-ma-khwa-na / o-khu-tsi-ya khu ma-kwa-na / o-khu-te-khe-ra-na / o-khu-khu-a o-mu-kha-na / o-khu-si-ra i-mbu-si / i-ngo-mbe ya-ra-ndo / mu-si-ro / i-sa-mbi-ri-re / o-khu-khye-bwa / i-ru-mbi",
      context: "Rev. N. Stam, The Bahanga, Publications of the Catholic Anthropological Conference Vol. I, No. 4 (1929, pp. 170–179)",
      audioFile: null,
    },
  }
);

// Complete Gerhard Lindblom (1920) "The Akamba in British East Africa: An Ethnological Monograph" (2nd Ed., Enlarged, Archives d'Études Orientales Vol. 17, Uppsala 1918–1920, pp. I–XII, 1–607, Figs. 1–167) Dictionary Supplement
if (!JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["kamba"]) {
  JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["kamba"] = [];
}
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["kamba"].push(
  {
    catId: "culture-history",
    entry: {
      english: "The 7 Named Primary Kamba Informants & Custom Formula in Lindblom (1920, pp. 3, 6)",
      translation: "Custom formula: ni matindu ma andu ala ma tænə ('It is a custom handed down from our fathers', p. 3) • 7 Informants (p. 6): 1. Kioko wa Malata (Machakos), 2. Malata wa Kiambi (father of Kioko, specialist in ŋgondu purifications & cow twin-birth rites, p. 489), 3. Mbonge wa Kithome (ītīma herbal doctor, Machakos, p. 319), 4. Muhindi (respected elder, Machakos), 5. Mbindia / Vindia (mundu muə at Kibwezi, initiated Lindblom into the 3rd nžaīko [mbæβanī] & performed conjuring tricks kīama, pp. 61, 266–268), 6. Makiti (headman at Kibwezi, þaβu case pp. 299–300), 7. Muli (near Ikutha, Atharaka kīþītū rock crevice, pp. 170–171)",
      pronunciation: "ni ma-ti-ndu ma a-ndu a-la ma te-ne / ki-o-ko wa ma-la-ta / mbi-ndia / ma-ki-ti / mu-li",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Introduction, pp. 3, 6)",
      audioFile: null,
    },
  },
  {
    catId: "nature",
    entry: {
      english: "Ukamba Geography, Toponyms, 4 Divisions/Dialects, 12 Neighbour Ethnonyms & J. Hofmann's 1897–1910 Ikutha Rainfall Table (Lindblom 1920, Ch. I, pp. 9–26 & Addenda pp. 569–574)",
      translation: "Toponyms (p. 9): Donyo Sabuk = kīma kīa nžaβī ('the nžaβī bean mountain'); Mtoto Andei = mutītu wa ndeī ('the vulture forest'); Mt. Noka = inhabited by hunting Anoka speaking a Kamba dialect (p. 10 fn. 1); 1836 Rabai famine emigrants = atumwa ('slaves') or madīkīlambua ('rain-followers', p. 11) • 4 Divisions & Dialects (pp. 15–17): 1. Ulu / Yulu (kīkamba kīluŋgalu 'real Kikamba', with SW Kīluŋgu calling other Ulu Akamba æβau 'cousins'), 2. East Ukamba / Kitui (aþaisu speaking kīþaisu; cattle-rich ŋgoβə vs. beehive-climbing īkulī 'baboons', p. 16), 3. Kīkumbuliu, 4. Mumonī • 12 Neighbour Ethnonyms (pp. 17–22, 573–574): akīkuyu (Kikuyu), akaβī / akīþoŋgo / alakī ('wild-honey seekers' during raids, p. 289, Masai), andī (Wataita < ndī 'baobab strings'), aþaka (Atharaka), asumba / maþomba ('burden-bearers', Swahili), aswī (Wagiriama, lang. kīswī, country uswīnī), aluluma (Waduruma), ambele (Wambere), atwa (country utwa) / akala (Galla), aŋgoloŋgo (Somali), anoβī (Nubians), asuŋgu / andu atunə ('red people', Europeans); Swahili name for Akamba: Waumanguo / Warimangao; Masai name: el lunghu; Coast Kamba name for Ulu Kamba: nžaβī • Ikutha Rainfall in German zoll (p. 24): 1897 (17.36), 1899 (9.22 — Great Famine īoa īa ŋgalī / muβuŋga), 1902 (29.74), 1903 (21.75), 1904 (32.15), 1905 (24.57), 1906 (38.94), 1907 (26.34), 1908 (16.71), 1909 (21.26), 1910 (20.49)",
      pronunciation: "ki-ma ki-a nza-vi / mu-ti-tu wa nde-i / u-lu / a-thai-su / ki-ku-mbu-liu / mu-mo-ni / a-ka-vi",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Ch. I pp. 9–26 & Addenda pp. 569–574)",
      audioFile: null,
    },
  },
  {
    catId: "family",
    entry: {
      english: "Child-Birth, 4th-Day Īþa Neck-Chain, Turning the Child (Olula Kana), Abnormal Births, Abortion Plants & Menstruation (Lindblom 1920, Ch. II, pp. 29–41)",
      translation: "Pregnant announcement: naβītanītie mwæī ('I have passed the month', p. 29) • Navel cord: mukautī • Placenta: nsuu / ŋgua īa kana ('the child's dress', p. 31) • Birth charm: nðesīo (< þesīa 'to help') • Premature baby: muīndə (wrapped in a clay pot, p. 31) • Boy-and-girl water rite with wild fig (kīumo) & īkoka grass, even-numbered women's feast (never odd mwa) eating utīndītī (īsīo) & Eleusine porridge (ŋgīma), baby-carrier (ŋgoī), and 4th-day iron neck-chain (īþa, before which infant is kīīmu 'spirit-child', p. 33) • Turning the child (olula kana, p. 34): husband says 'nīnīonīə nðakamə nīnaolulə kana' ('I saw blood, I turned the child') • Abnormal births (pp. 37–38): breech birth (mundu wa kīu / mumo), born with caul (ŋgunīkīlīa), cutting upper teeth first (mundu wa kīumīlo / kīludu), twins (maβaþa) • Abortion substances (p. 39): soot (mwae), kīlīa mbitī (Jatropha), mutanda-mbo, ma-mbumbu (Phytolacca) • Menstruation: mwæŋgə (pp. 39–41) & parental coitus rite kuseuβīa mwītū",
      pronunciation: "na-vi-ta-ni-tie mwe-i / mu-kau-ti / nsu-u / nthe-sio / mu-i-nde / i-tha / ki-i-mu / o-lu-la ka-na / ma-va-tha",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part I, Ch. II, pp. 29–41)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "The 3 Nžaīko Initiations: 1. Nžaīko Īla Nīnī (Kaβīu), 2. Nžaīko Īla Nænə (Mbusīa; Musaī Sticks Figs. 1–8 & Sand Drawings Figs. 9–16), 3. Nžaīko Īa Aumə (Mbæβanī) (Lindblom 1920, Ch. III, pp. 42–71)",
      translation: "1. nžaīko īla nīnī / nžaīko īa kaβīu ('with the knife') / nžaīko īekondə (foreskin = īkondə / īkolə; operator = mwaīkī, pp. 42–45) • 2. nžaīko īla nænə / nžaīko īa mbusīa ('of the rhinoceros') / nžaīko īa mbaβī (7 days in þano, pp. 45–60): hut (īβunu in E. Ukamba; kīeŋgo kīa nžaīko / īlwanda in Ulu), novices (asīŋgī, sg. musīŋgī), instructors (aβwīkī, sg. muβwīkī; duty kuta), song-leader (ŋguī), obstacle songs (madīŋgo / mukīamo) & alternating boys'/girls' songs (kīno & kea, pp. 47–50), roaring mbusīa pot blown through mwaeþa tube (kwaþa mbusīa: 'wīkou nī mwana wa ŋganīa', pp. 50–51), miniature bows & bird-arrows (maŋgī of mukulwa / muluīla-mbīa), 80-cm musaī (ukaī) pictographic sticks of muþīwa wood (Figs. 1–8: 1. þomə yard, 2. tortoise, 3. ornamented mumbə stool seat, 4. python, 5. cow's tail, 6–7. stars, 8. millipede, beehive clan-mark, moon & star) & sand drawings (Figs. 9–16: 9. snake, 10. sun with ray legs, 11. 3-legged stool, 12. moon & stars, 13. chain with side links, 14. centipede, 15. cowry belt, 16. narrow-necked calabash), 5th-day wild fig (mumbu) prayer ('kīumbu kī, nītukīə ukuβoīa, utunæŋgə wumbu wa uīkīīa asīŋgī') with uki wa utulīa wumbu & glans cut (muβwa), and 7th-day sham Masai cattle raid pelting ndoŋgu fruits & nžuma dances (extended to ~1 month by anžaunī clan) • 3. nžaīko īa aumə ('circumcision of the men', called mbæβanī in Kikumbuliu / mbaβanī in Kitui & Mumoni, pp. 60–68): 10-cow fine or death for revealing secrets, V-angled mbæβanī pipes of kīusīa wood bound with mwaþa fibre & smeared with muīo, 4 rank fires (asīŋgī, ŋgala, aβwīkī, nžama), ordeal tests by the ŋgala (sucking sand, swallowing excrement crying 'aah!', pulling ground peg with teeth squatting handless, gauntlet, wood-tied erection & water-pit copulation), 4 Kikumbuliu secret twig/path recognition signs (p. 67), forehead shaving ('nītænzīə asīŋgī') & rebirth (kusīawa)",
      pronunciation: "nzai-ko i-la ni-ni / nzai-ko i-a mbu-sia / mu-sai / a-si-ngi / a-vwi-ki / mbe-va-ni / nga-la",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part I, Ch. III, pp. 42–71 & Figs. 1–16)",
      audioFile: null,
    },
  },
  {
    catId: "family",
    entry: {
      english: "Marriage (Kwasīa / Kuþoa Mwītū), Bride-Price, Kuþoka (Nðokī), Kudīta & 26-Family Machakos Demographic Table (Lindblom 1920, Ch. IV, pp. 72–88)",
      translation: "To woo / buy a girl: kwasīa / kuþoa mwītū • Proposal goats: mbuī sīa nðeo • Beer gifts: kuβīkīla uki waβīkīla mbuī & uki wa uþambīa nžælə • Slaughter buck: ndæŋgə īa kwītīa mbuī nðakamə nðī • Bride-price: 2 cows + 2 bulls/oxen + 40–50 goats (in tsetse Kikumbuliu 60–100 goats; 1 goat/sheep = 5–6 Rs., ox/bull = 20–25 Rs., cow = 60+ Rs.; cattle called kīīŋgo 'pot splinter') • Mother-in-law food gifts: kuþoka (child born during gifts named nðokī, p. 75) • Bride's weeping songs: mbaþī sīa maīo • Mother-in-law goat: mbuī īa kwona kana • Barren woman: ŋguŋguu • Impotent man: ndæwa • Tally stick: kīka kīa kutala mbuī • Hospitality wife-lending: kudīta (p. 82) • Sole full-brother: kīmwæmwə • Chief wife: kīβætī kīnænə / kīku • Widow: muka wa ndīwa & purification kuseuβīa kīβætī • 26-Family Statistics in Machakos (p. 87): 26 fathers, 52 wives, 100 living boys, 70 living girls, 61 dead children",
      pronunciation: "kwa-sia / ku-tho-a mwi-tu / mbui sia nthe-o / ku-tho-ka / ntho-ki / ngung-guu / ku-di-ta / ki-ve-ti",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part I, Ch. IV, pp. 72–88)",
      audioFile: null,
    },
  },
  {
    catId: "family",
    entry: {
      english: "Nðonī In-Law Avoidance, Ua Nðonī / Ua Ŋgeano, All 11 Kwiūa Name-Taboo Pairs & All 7 Women's Language Words (Lindblom 1920, Ch. V pp. 89–98 & Addenda p. 574)",
      translation: "In-law: muþonī (pl. aþonī; mutual greeting 'muþonwa!') • Buying fire: þoa mwakī • Kisese's 'killing nðonī' feast: ua nðonī (ox + goats, p. 91) • Ending brother-in-law avoidance: ua ŋgeano (< leana, p. 92) • All 11 Kwiūa Name-Taboo Substitution Pairs (pp. 93–94): 1. kīoko → unī (to-morrow), 2. kīlonžo → ŋguaīa (noise), 3. īlondu → ŋgondu (sheep), 4. nžukī → ndoŋgoŋgī (bee), 5. nžoka → niamu īa ndī / īkūū (snake), 6. wa mbua → nduþu (of rain), 7. ŋgomo → ndæwa (chisel), 8. mbesa → īβulī (ear-ring for pice coin), 9. -æu / nžaū → ndeuβu (white/clean), 10. þomə → īβuβeonī / muumaloni (kraal sitting-place), 11. mwatū → mwaŋgo (beehive), plus ītwīku → wīīuka (ravine) & mwæī → musesīa nðī (moon) • All 7 Women's Vocabulary Words (Addenda p. 574): 1. mbunu for mbaīkī (castor-oil seeds), 2. kīβwū for manžī (water), 3. kīseβə for ŋgutanī (wind), 4. kusonolīa for kwīwīa nðonī (to be ashamed), 5. īŋa / īsuma mīīo ('which seeks the sweet potato peels') for īlondu (sheep), 6. mbuþæŋgə for ŋgū (firewood), 7. ukatī ('horn') for uŋuþu (clitoris)",
      pronunciation: "ntho-ni / mu-tho-nwa / u-a ntho-ni / kwi-u-a / u-ni / ngu-ai-a / ngo-ndu / ndo-ngo-ngi / mbu-nu / ki-vwu",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part I, Ch. V pp. 89–98 & Addenda p. 574)",
      audioFile: null,
    },
  },
  {
    catId: "family",
    entry: {
      english: "Complete Kamba Kinship Terminology, Ŋga- Bride Prefix & Sīo- Teknonym Prefix (Lindblom 1920, Ch. VI, pp. 99–102)",
      translation: "Father: naū / tata / asa (thy father: au; his father: īþə) • Mother: mwaitū / inīa / nīa / nana / mukwə (thy mother: mwænīu) • Full brother/sister: mwanaaīa (half-sibling: mwanaasa / mwanaæþə; full sister: mwītūīaīa; half-sister: mwītūī-asa) • Elder brother/sister: mukuwa / mukuu / mukuə (eldest: īkīþoβī; youngest: īlumaita) • Younger brother/sister: mwīnawa / mwīnau / mwīnaə (dim. kalīnawa) • Husband: mwīmæwa / mutumīa wakwa • Wife: muka wakwa / kīβætī kīakwa / kīwandu kīakwa • Grandfather: umau • Grandmother: susu / usū • Grandchild: nžukulu / musukua • Paternal uncle: mwændwasa / mwændwau / mwændwīþə • Maternal uncle: mama / mwīβau / īnaīmu / īnaumə • Maternal aunt: mwændīa / mwændwa-mukwə • Cousin: mwīβawa / mwīβau • Co-parents-in-law: sīīawa / sīīau • Younger sister-in-law: mwamwa / mwamu / mwamwə • Husband's elder sibling: ukulu / asa munīnī • Young childless bride prefix: ŋga- (e.g. ŋga-kīoko) • Mother teknonym prefix: sīo- (e.g. sīo-mulī 'Muli's mother')",
      pronunciation: "na-u / ta-ta / a-sa / mwai-tu / mwa-na-ai-a / mu-ku-wa / mwi-na-wa / u-ma-u / su-su / ma-ma / sio-mu-li",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part I, Ch. VI, pp. 99–102)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Death, Right/Left Flexed Burial (Kwoko kwa Aumə vs. Aka), Βululīlīa, Mbea Death-Hut & Mutumīa wa Makwa / Uku Purification (Lindblom 1920, Ch. VII, pp. 103–110)",
      translation: "Man buried flexed on right side: kwoko kwa aumə ('men's hand', head facing E/NE) • Woman buried flexed on left side: kwoko kwa aka ('women's hand') • Paternal grandson turns first sod (βululīlīa, rewarded with a cow, p. 104) • Deserted death-hut: mbea • Knocking out 2 lower middle incisors of dead young child lest next child die (p. 106) • Purification by mutumīa wa makwa / mutumīa wa uku using goat stomach chyme (muīo from the kīþatīa / kīþīlīko stomach) mixed with ŋgondu herbs, widow purification coitus (kuseuβīa kīβætī), and burying a proxy corpse-stick for an absent family member (p. 109)",
      pronunciation: "kwo-ko kwa au-me / kwo-ko kwa a-ka / vu-lu-li-lia / mbe-a / mu-tu-mia wa ma-kwa / mu-i-o / ki-tha-tia",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part I, Ch. VII, pp. 103–110)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "All 25+ Kamba Clans (Mbaī), Totems (Niamu), Taboos, Cattle Brands (Kīo, Figs. 17–22), Arrow Marks (Uβano, Figs. 23–38) & Beehive Marks (Figs. 39–51) (Lindblom 1920, Ch. VIII, pp. 113–142)",
      translation: "Clan: mbaī (collective prefix mba-; totem question: 'niamu īaku nī īaū?' 'What is your animal?', p. 116) • 23 Machakos Clans & Sub-Clans (pp. 136–137): 1. aiīenī, 2. anžaunī (jackal mbīwa; beautiful but unlucky brides, p. 124), 3. anžīu (drongo kīndalī; congenital evil eye kīænī neutralized by spitting, p. 123), 4. awinī (hyena mbitī), 5. æombə (mba-maī & mba-mululu; monkey ŋgīma), 6. akīþumbə / akīmiī (bushbuck nðwaīa; women forbidden to make pottery, p. 124), 7. aþaŋga / æþaŋga (iron sand kīlea), 8. ætaŋgwa (mba-mulela/ŋguŋguu, mba-katætī, mba-muþækə, mba-mukuβa; baboon ŋgulī/īlaī & hawk mbulusīa), 9. asī & 10. amuī (lion munīambu; never eat or touch liver ītema; heal burns by chewing musu leaves on an empty stomach, pp. 118, 124), 11. akītutu (hawk mbulusīa), 12. atwī (smiths), 13. amwīī / amwæī (moon mwæī; never sweep refuse out of hut on last day of month, p. 124), 14. akītondo (mba-mbulī & mba-nðīmba; crow ŋguŋguu), 15. amumonī (wild fig mumo), 16. ambua (rain mbua), 17. akītuo (shoulder kītuo), 18. æwanī (leopard ŋgo), 19. amunda (mba-muīeþīa & mba-nžalu; leopard ŋgo), 20. amutī, 21. amutæī (secretary bird nðeī; 1-hole beehive mark, p. 494 fn. 1), 22. aæī / mba-mulata-īβīa / mba-kīīmu / mba-anžīkwa (descended from first couple cast down on Mt. Nzaui; forbidden to swing a child in one's arms lest it rise into the air and vanish, p. 125), 23. anðunðu (porcupine nžæ & bat uβuβu) • Kikumbuliu, Ikutha, Kitui & Mumoni Clans (p. 138): amwīlu, anžī, awīlī, mba-mule-ītema, mba-kītuku, mba-ŋgo, aŋgokī, kana/aæī (green parrot ŋgwæī) • Clan Marks (pp. 129–135): cattle brands (kīo < oa, Figs. 17–22), arrow marks (uβano, Figs. 23–38), beehive marks (Figs. 39–51) • Blood-brotherhood & breast-sucking asylum (pp. 140–142)",
      pronunciation: "mba-i / nia-mu ia-ku ni ia-u / a-nzau-ni / a-nzi-u / ki-e-ni / e-ta-ngwa / a-si / a-mu-i / ki-o / u-va-no",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part II, Ch. VIII, pp. 113–142 & Figs. 17–51)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Age-Grades, The 5 Meat-Sharing Promotions of Atumīa (Kukula / Kukusa), Kīsuka Police Club & Chief Kivui (Lindblom 1920, Chs. IX–X, pp. 143–151)",
      translation: "Life-stages: kana → kaβīsī → kīβīsī → mwanakə → nðælə → mutumīa (carrying round stool mumbə) → atumīa ma nžama / atumīa ma īþæmbo (carrying forked staff maka; female īβætī sīa īþæmbo) • The 5 Meat-Sharing Promotion Fees (kukula / kukusa, pp. 144–145): 1. 1 goat = mutumīa wa mutwə (right to eat goat's head), 2. 1st bull = lower leg of cattle, 3. 2nd bull = upper leg, 4. 3rd bull = loins & brisket, 5. 4th bull = hump (kīaə), 6. 5th bull = cattle tongue & head (all parts) • Executive police club in Ulu: kīsuka (pp. 146, 153) • Age-grade: īīka / ndukə (p. 147) • Celebrated Kitui leader: Kivui (met Krapf in 1849, p. 149)",
      pronunciation: "ka-vi-si / ki-vi-si / mwa-na-ke / nthe-le / mu-tu-mia wa mu-twe / ku-ku-la / ki-a-e / ki-su-ka / ki-vu-i",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part II, Chs. IX–X, pp. 143–151)",
      audioFile: null,
    },
  },
  {
    catId: "emergency",
    entry: {
      english: "Customary Law (Nsīlī), Homicide Blood-Money (Ŋgombə īa Ndulota & Wumo), Kīþītū (Fig. 52) & Ndundu Oaths, All 6 Ordeals, Kīŋgolə Lynch-Law & All 4 Curses (Kīumo) (Lindblom 1920, Ch. XI, pp. 152–185)",
      translation: "Lawsuit: nžwanī (undecided case: 'nžwanī yanīwa manžī' 'the case drank water', p. 152; to judge: sīla / sīlīla) • Homicide Blood-Money (pp. 154–156): Man in Ulu = 11 cows + 1 bull (10 cows to kin + 11th cow ŋgombə īa ndulota 'cow of the broken bow' to chief widow; 1st cow paid by killer himself = ŋgombə īa wumo; in Kitui = 13 cows + 1 bull); Woman in Ulu = 4–5 cows + 1 bull (in Kitui = 7 cows + 1 bull) • Bodily Injury Fines (p. 156): 1 finger = 1 goat to 1 bull; 2 fingers = 1 bull; 1 eye = 1 bull + 1 goat; 1 arm = 1 cow + 1 bull; 1 leg = 5 cows; both legs = ~8 cows; plus post-mortem autopsy (p. 157), honey-theft fine (1 bull + 5 goats, doubled/trebled, p. 160), boycotted outcast mukoə ('saliva', p. 161), and land fence goat mbuī īa maþanzū (p. 164) • Kīþītū (muma, Fig. 52 p. 166) placed on 3 stones with mwæa twigs while swearer stands naked on 7 stones striking it with a mukulwa twig (kuna / kuīa kīþītū: 'mukancæŋga ŋgombə īmwə; nīkīsīoka kwænda īngī ītīna, ŋgaīwa nī kīu!', p. 169; carried with mutton-fat hands by musænzælī bast and purified with kīluŋgu sap) vs. Relative Oath ndundu (bull gall-bladder pierced with mwæa thorn, p. 172) • All 6 Ordeals (pp. 173–176): (A) kīþītū kīa kīβīu (licking red-hot knife: 'æþwa nīnīosetə mbuī īa ŋganīa, kīβīu mbīβīe!'), (B) red-hot needle through lower lip, (C) kīuma (2 china beads in eyes), (D) ŋgunīko (wax-plugged water calabash spurting through straw), (E) mbæŋgolo bark poison draught, (F) jumping over burning basket • Kīŋgolə Lynch-Law (pp. 176–180, case of Kaβuβa) • Women's Collective Drum Intervention (kīþæmbə, pp. 180–182) • All 4 Curses (kīumo, pp. 182–185): (A) father urinating on red-hot kīo branding iron toward setting sun (revoked by milk+Eleusine blessing kīaþīmo), (B) mother burning grain or splashing water from ndamī loin-cloth, (D) youths' dance-boycott curse striking a red china bead (kīto) against a girl with ŋgulu ('self-will')",
      pronunciation: "nsi-li / nzwa-ni / ngo-mbe ia ndu-lo-ta / ngo-mbe ia wu-mo / ki-thi-tu / ndu-ndu / ki-ngo-le / ki-u-mo / ki-a-thi-mo",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part II, Ch. XI, pp. 152–185 & Fig. 52)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Kamba Warfare: 3 Tactical Divisions (Muena, Ŋgīla, Īta), Ŋgulī War-Flute (Fig. 53), Wea Frame (Fig. 54), Tula Mbaŋga & Mutīætumo Slayer Honours (Lindblom 1920, Ch. XII, pp. 186–205)",
      translation: "War leaders: asīlīlī • Spies: aþīanī (putting soporific medicine in enemy fire; Masai ol umigumi = Kamba muβa, p. 205) • 3 Tactical Divisions (pp. 191–195): 1. muena (50% anakə + 50% nðælə best archers surrounding Masai warriors' kraal mbīlī), 2. ŋgīla (seizing cattle), 3. īta (driving booty away) • Thomson's gazelle horn war-flute: ŋgulī (Fig. 53, blowing 'aka-βī, aka-βī, mæ-kuka, mæ-kuka!' 'The Masai are coming!', p. 192) • Zebra-mane chest frame: wea (Fig. 54 p. 194) • Fallen warriors are never buried (lest another die, p. 195) • Purifying captured weapons (matuso): tula mbaŋga ('break the peril', shooting a wooden arrow at the captured spear, p. 197) • Slayer Titles (pp. 198–200): mutīætumo (took Masai spear), mutīota (bow), mutīoβīu (sword), mutīaŋgua (dress), mutīaþīaka (quiver), mutīando (scabbard), wearing split ox-skin finger strip ukwalo (pl. ŋgwalə), marching in kwaŋga victory procession greeted by women's 'līlī, līlī, līlī!' trills while parents perform 'nītusæuβīə uta wa mwana'",
      pronunciation: "a-si-li-li / a-thia-ni / mu-e-na / ngi-la / i-ta / ngu-li / we-a / tu-la mba-nga / mu-ti-e-tu-mo / u-kwa-lo / kwa-nga",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part II, Ch. XII, pp. 186–205 & Figs. 53–54)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Kamba Religion: Soul (Kīu) vs. Breath (Þaīu), Aīmu Spirits, Īþæmbo Groves (Figs. 55–56), Kīlumi & Kīesu (Figs. 57–58), and Muluŋgu / Ŋgaī = Mumbī & Mwatwaŋgagī (Lindblom 1920, Ch. XIII, pp. 209–253)",
      translation: "Soul/shadow: kīu vs. physical breath/life: þaīu / mīæβa • Ancestral spirits: aīmu (sg. īīmu, dwelling underground or on Mt. Kyumbe, Kivauni, Muutha, Nengia, Nsambani & Kilui's Pond; elephant = spirits' cattle, tortoise = spirits' grindstone, praying mantis = mwaŋgī wa aīmu / muŋgaīmu 'spirit's snuff-box', spider's web = woman spirit's kīondo, p. 213) • Sacrifices (kīþaŋgona: 14 pieces of meat, or 7+7 with guest, p. 218) at sacred fig/baobab groves (īþæmbo, Figs. 55–56, with atumīa ma īþæmbo, anakə ma īþæmbo / atumīa anīnī, and īβætī sīa īþæmbo initiated at the mboka ripened-banana festival, p. 221) • Foreign spirits & exorcism (pp. 229–240): mbæβo, kīsulīa (cured with maβuo & 3 belly feathers), kīlumi dance (Figs. 57–58, with kīutu woodpecker-hole woodflour), and the 1906–1908 kīesu pith-helmet epidemic • Supreme Creator: Muluŋgu / Ŋgaī = Mumbī ('the Fashioner/Potter') & Mwatwaŋgagī ('the Cleaver' who shapes fingers & toes, p. 244; calabash Fig. 59 p. 251; verbatim child-birth prayer 'mumbī, we umbīə mwana uyu...' & rain prayer pp. 244–245) • 2 Myths (pp. 252–253): Creation from termite hole (muþumbīnī) & Mt. Nsaue, and Chameleon vs. Weaver-Bird origin of death",
      pronunciation: "ki-u / thai-u / ai-mu / i-the-mbo / ki-tha-ngo-na / mbo-ka / ki-lu-mi / ki-e-su / mu-lu-ngu / mu-mbi / mwa-twa-nga-gi",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part III, Ch. XIII, pp. 209–253 & Figs. 55–59)",
      audioFile: null,
    },
  },
  {
    catId: "emergency",
    entry: {
      english: "Medicine-Men (Mundu Muə vs. Ītīma vs. Mundu Mwoī), Divination (Kuausīa, Fig. 60), Unīka / Mwītano Epidemic Arch, Kūtīea Name Magic, Ŋgomakomī (6 Directions), 17 Ŋgondu Substances & Snake-Charmers (Lindblom 1920, Chs. XIV–XVI, pp. 254–333)",
      translation: "Diviner/healer: mundu muə (born with peg, 5 stones, or red mbuu seeds) vs. herbalist ītīma vs. sorcerer mundu mwoī (witchcraft woī; anti-witchcraft drink makīo sold by Mutune wa Taula of Nzaui, p. 283) • Divination (kuausīa, Fig. 60 p. 260): wire musical bow (uta) + kītītī gourd shaking out mbu pebbles/seeds onto leopard skin • Herbal medicine (mutī) vs. magical medicine (muþæa, activated by ritual key kīþīao < þīaa, p. 270) • Epidemic expulsion (kwīndukīa uwau, pp. 271–275): passing through the unīka banana/post arch with musoka garlands, mutaa sprinkling, munaβu whip, and 7-day right-instep goat-skin strip (mwītano: 'mwænə mwīmu, osa nusu!'), or offerings on Mt. Mutitu to one-legged spirit Mwītualalī & rainbow-serpent mukuŋga-mbua (rainbow utaþī) • Women's ŋgolano rain march to Ngunu (p. 277) • 9 Amulets (kīþītū / mbīŋgu, pp. 285–288) • Name Magic (kūtīea, pp. 288–290): elephants called nde ŋgu ('old poles'), mbonda malīa, wata, maβīa ('stones'); hippo = ŋgwaūlə; rain = Ŋgaī; honey-jar = kīnaþī; carrion = maþaŋgo ('dry leaves') • Omens (muþana musæo / muþuku, pp. 291–295): twitching (kīoīo), sneezing (kwaþīmwa → 'kula mwana wa ŋganīa!'), and red-headed woodpecker (ŋgomakomī, 6 directions: front mīsīa, behind ŋguŋguo, high right īna, low right βwaþī wa aumə, high left womu, low left βwaþī wa aka, p. 294) • 17 Ŋgondu Purification Substances (pp. 295–303): goat stomach chyme (muīo from kīþatīa / kīþīlīko) or rock hyrax (kīgond / kīkīla, called īlondū when snared), mutaa, mulīndītī, kīoŋgwa, mukunda mbuī, mulalə, etc., curing þaβu (-kuþunūa) & makwa (Kesungu of Kilungu taught by Siomuteti, p. 302) • Snake-Charmers Kimia of Ikutha & Kivuvu inoculating βīnīa ('power', Fig. 62 pp. 303–306) • Odd numbers taboo (mwa, especially 7, pp. 306–310) • Surgery & 45+ Medicinal Plants (pp. 311–320: uvula kalīmə excision with giraffe hairs, thorn suturing, kīaþī) & Botany/Zoology (pp. 321–333: gerenuk kawīla īma, road-rat katīwa nī nžīa, hornbill īlumī, hammerkop ŋgunə, oxpecker ndīæī, house-snake sīomeluka / kīænda ndæto, giant snake īaīa, Solanum snake ŋguluku, blindworm kīþī)",
      pronunciation: "mu-ndu mu-e / i-ti-ma / mu-ndu mwo-i / ku-au-sia / mu-the-a / ki-thi-ao / u-ni-ka / mwi-ta-no / ku-tie-a / ngo-ndu / tha-vu",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part III, Chs. XIV–XVI, pp. 254–333 & Figs. 60–62)",
      audioFile: null,
    },
  },
  {
    catId: "time",
    entry: {
      english: "Kamba Cosmology, All 9 Named Historical Famines (Īoa, 1836–1909), All 3 Variants of the 11-Month Calendar & Compass Points (Lindblom 1920, Chs. XVII–XIX, pp. 334–354)",
      translation: "Cosmology (pp. 334–338, Fig. 63): hail (maβīa), clouds (matu), fog (mumbī), rainbow (utaþī), lightning (utīsī), thunder (kītandalīkī / kītundumu), stars (ndata), evening star (ŋgæmandī), morning star (kithioi), comet (ndata īa kīsīþə / ndata īa īoa), rock crystal (maβīa ma ndata), solar eclipse (sīua īaþotə muþæna), lunar halo (kīβuīo), male vs. female moon (ndamba vs. muka, Fig. 63), solar horizon observatory (kīsūæsīo kīa sīua, p. 338), cricket night-watch (ŋgīlī) & Crinum flower (īla mwaka) • All 9 Historical Famines (īoa, pp. 339–340): 1. īoa īa malakwə (1908–09, beans), 2. īoa īa muβuŋga / ŋgalī (1898–99, rice / Uganda Railway), 3. īoa īa ndata (~1888, comet), 4. īoa īa ŋgætīsīə (bleeding cattle), 5. īoa īa uβoə (binding), 6. īoa īa kīasa (long drought), 7. īoa īoŋgela (double famine), 8. īoa īa īta (~1850, python famine), 9. īoa īa kudīkīla mbua (~1836, rain-following famine) • 4 Seasons & 3 Lists of the 11-Month Calendar (pp. 340–342): Year = mwaka (mbua īa uwa Mar.–June, nundu July–Aug., þano Sept.–Oct., mbua īa ndoa Nov.–Dec.); List I (Muutha): 1. mwa, 2. wīu, 3. mweu, 4. tulīa, 5. þanu wa mbēe, 6. wa mwonža, 7. wa nīanīa, 8. wa kænda, 9. wa īkumi, 10. muβīu, 11. oŋgonono; List II (Machakos): 1. kaīa, 2. wīu, 3. mweu, 4. wa katano, 5. wa þandatu, 6. wa mwonža, 7. wa nīanīa, 8. wa kænda, 9. wa īkumi, 10. muβīu, 11. wīŋgonono; List III: 1. mwa, 2. wīma, 3. mwanža, 4. mweu, 5. wa katano, 6. wa þandatu, 7. wa mwonža, 8. wa nīanīa, 9. wa kænda, 10. wa īkumi, 11. wīŋgonono • Compass & Travel (pp. 343–354): East = (m)uīnīlo wa sīua, West = uþuīlo / ndīwīlo wa sīua, horizon = kītulīa kīa ītu, first-time traveler = muþo (sucks bow-tip before drinking river water, p. 347), and origin myth of the 3 brothers Mukaβī, Mukīkuyu & Mukamba (pp. 353–354)",
      pronunciation: "ki-su-e-sio kia si-u-a / i-o-a ia ŋga-li / i-o-a ia ku-di-ki-la mbu-a / mwa / kai-a / wi-u / mwe-u / o-ngo-no-no",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part III, Chs. XVII–XIX, pp. 334–354 & Fig. 63)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Decorative Art, Dress (Ua, Muþīta, Kīmæŋgo), Ornaments, Teeth-Chipping (Kuseuβīa Maīo & Bone False Teeth), 11 Musical Instruments, Dances & Games (Lindblom 1920, Chs. XX–XXIII, pp. 355–428, Figs. 64–120)",
      translation: "Carved calabashes (Figs. 64–71, sīo-manðala crab Fig. 69b), painted drums (Figs. 72–73), wooden youth statue & staff (Figs. 74–75), wire-inlaid elder's stool (mumbə, Fig. 76) • Dress & Ornaments (pp. 371–389, Figs. 77–92): skin dress (ua stretched on kīβao frame), bifurcated rear leather tail (muþīta, Fig. 77; older īseso), girl's beaded katuŋgə & 700-cylinder 4.5-lb brass apron (kīmæŋgo of nžalī cylinders, Fig. 78), cotton ndamī, sandals (īatu), sitting leather (kīdīþə), bead belt (kīβīna of blue kītætī), wire spirals (mulīa / ndīīa), cowries (ŋgūu), white neck-ring (īmīlī / īdatī), collar (ŋgala / īsoa) with Conus disc (kīβuo), iron-chain collar (ŋgunī, Fig. 79), metal beads (ndekə, Fig. 80), elder's ukumū (Figs. 81–82), fragrant kīulu & kīþua grass-root necklets (Fig. 83), Job's tears (ŋgaīə), metal armlets (kītaŋga / kīlaŋga, Figs. 84–87), upper-arm beadwork (īambə), elephant ivory/hind-foot armlets (ukoþo / ŋgoþo, Fig. 88), ear-rings (īβulī, Figs. 89–92; peg kīkulu) & finger-rings (ŋgomo) • Hair, Cicatrization & Teeth-Chipping (pp. 387–397, Figs. 93–108): hairstyles (mutīundū, kīþuku), razor (wænzī), whetstone (īno), tweezers (ŋgosə & ŋgola, Figs. 93–95), kīutu perfume & pigments (mbu red ochre, ndo red earth, īea white chalk, īkaŋga yellow pollen), cicatrization (ndə īa kaβīu / mukuβa & ndækaþo, Figs. 96–103), and Teeth-Chipping (kuseuβīa maīo, Figs. 104–108: 6–8 teeth in Ulu, 4 in Kitui, 2 in E. Ukamba) with ŋæsa chisel, hartebeest/goat-bone false teeth pegged into roots with an awl (mukuβa), removal of 2 lower incisors (kwīβa), and 2 dental riddles (p. 397) • 11 Musical Instruments & Dances (pp. 398–417, Figs. 109–116): 4 drums (mbalīa / ŋguþa Fig. 109, kīþæmbə, ŋgoma, spool-shaped kīa / muβuŋgu Fig. 110), wire musical bow (uta, Fig. 111), bowed fiddle (mbæβə < Arabic rebab, Fig. 112, played by blind bard Kieti of Ikutha, p. 416), kudu/oryx horns, war-flute (ŋgulī), 4-hole flute (mutulælə), 1-m calabash trumpet (so, pl. maso, Fig. 113), boys' reed clarionet (nžumalī, Fig. 114), double Ricinus pipe (ŋgulī); dances (waþī, leader ŋguī, ground kītuto): cheek-rubbing mbalīa (Figs. 115–116), musīa (with leg bells kīambə), kīlamu, Kitui stilt dance, īβūulu, kīlumī, ŋgoma, mbæβo, kīesu, nžuma (tail mwīŋgu) • Toys & Games (īþau, kuþauka, pp. 418–428, Figs. 117–120): musīlī rattle, stalk/clay dolls (Figs. 117–118), whip-top (nðælælī, Fig. 119), hoop (ndīa), calabash wheel (kīsæŋgæla kīa kīku), sling (kīkuþa, Fig. 120), river-crossing riddle game (mutumīa aβota / alīsa, p. 425), 10-word counting-out rhyme ('tali, talita... mwitango', p. 426), and kīūīśī (mancala board game with ŋgaīə seeds, pp. 427–428)",
      pronunciation: "mu-thi-ta / ki-me-ngo / ku-se-u-via mai-o / nge-sa / mba-lia / ki-a / mbe-ve / so / nzu-ma-li / ki-u-i-si",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part IV, Chs. XX–XXIII, pp. 355–428 & Figs. 64–120)",
      audioFile: null,
    },
  },
  {
    catId: "home",
    entry: {
      english: "Village (Musīə), 13-Part Hut Floor Plan (Nyumba, Fig. 125), 20-Sec Fire-Drilling (Ulīndī & Kīka, Fig. 126), Archery, Īβaī Poison & All 7 Traps (Lindblom 1920, Chs. XXIV–XXVI, pp. 431–474, Figs. 121–138)",
      translation: "Village (musīə, Figs. 121–124): thorn fence (maþanzū), narrow entrance (muβīa), hanging-pole gate (Fig. 124), outside men's council tree (þomə, headed by mutumīa wa þomə), raised storehouse (īkumbī / kītsumba), refuse heap (utunda, pl. ndundə) • 13-Part Beehive Hut Plan (nyumba, Fig. 125 p. 438): center post (kītuə), rafters (ŋgetī), basketwork partition (ututu), inner sleeping room (we), elastic stick bed (mwau, pl. mīau), wood store (kībæta), 3 hearthstones (maβīa), mother's bed, children's beds, sheep/goat pen, calves' place, poultry perch & grinding stone; 'wife's bow' = kīondo hung with husband's bow when building; 20-second fire-drilling with male drill (ulīndī) & female hearth (kīka, Fig. 126 p. 440); baby skin carrier (ŋgoī); boys' spit challenge ('twīla mata, mβalaīnə!', p. 448) • Weapons (pp. 449–464, Figs. 127–133): bow (uta: upper tip mbīa īa muþīa, lower tip mbīa īa ītīna, sinew string ua), arrows (musīə: notch mbalīo, wooden foreshaft uþunžī, iron head vīano, unfeathered shaft muluka, Fig. 127; weight 21.8 g / 19 g), arrow-poison (īβaī from muβaī Acocanthera + kīlīa mbitī, kalamba, kīþūī, spider mbua-mbuī, applied with spatula kīβalū, Fig. 128), bird arrows (īaŋgī, pl. maŋgī, with ndaī & nžæþo cross-pegs, Fig. 129), quiver (þīaka) & ostrich-plume kītuku (Fig. 130), sword (uβīu, sheath ndo, Fig. 131), dance stick (nžuma / ndata, Fig. 132), and leather-encased quartz-ball club (Fig. 133) • Elephant hunting party (nžīma / uīma < kusīma; novices forbidden to eat uβulīo or īþə or see uncut tail/trunk/dugs, pp. 465–469) & All 7 Traps (pp. 469–474, Figs. 134–138): 1. kīambu (falling poisoned elephant spear), 2. īkæŋgə (falling log trap, Fig. 134), 3. live-hen pit noose, 4. mukwa & ndīndīlīo (bent-pole running nooses, Figs. 135–136), 5. īkæŋgə (arched bird-snare, Fig. 137), 6. stone-slab drop trap, 7. kītatī / kīsuŋgula (hollow wooden mole trap, Fig. 138), plus wild-fig bird-lime (ulæmbwa / læmbwa, p. 579)",
      pronunciation: "mu-si-e / tho-me / ki-tu-e / u-tu-tu / mwa-u / u-li-ndi / ki-ka / mu-si-e / i-va-i / ki-a-mbu / i-ke-nge",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part V, Chs. XXIV–XXVI, pp. 431–474 & Figs. 121–138)",
      audioFile: null,
    },
  },
  {
    catId: "animals",
    entry: {
      english: "All 28 Kamba Livestock & Domestic Animal Terms, 6 Cow Names, Malata's Twin-Calf Rite, Cattle Diseases & Mwatu Beekeeping (Lindblom 1920, Chs. XXVII–XXVIII, pp. 475–500, Figs. 139–142)",
      translation: "Cattle-post: kīeŋgo • Taming fierce cattle with night-jar (īawə) ash: kuβoβīa • Crook: mboloī • Cow-bell: mbuī • Castration: kuβakua (cattle) vs. kutua (sheep/goats) • Cattle-bleeding blunt arrow: ndīa (Figs. 139–140) • All 28 Livestock Terms (pp. 486–487): ŋgombə (ox/cattle), nžau (bull), ndæwa (castrated ox), morī / mwætī (heifer), kīlætī (older heifer), nžao (calf), kīluu (male calf), ītaŋgwa (first-born calf); mbuī (goat), nðæŋgə (he-goat), ntīa (castrated buck), mbuī īa mwatī (young she-goat), mbuī īa kīlætī (older she-goat), katæna (kid); īlondu (sheep), ndūmə (ram), ndūlū (wether), mwatī (young ewe), kīlætī (older ewe), kæna ka īlondu (lamb); īŋgoī (donkey); sululu / ŋgitī (dog); mbaka (cat); ŋguku (fowl), nžamba (cock), mwæla (young hen), kīswī (chick), īkī (egg) • 6 Cow Names (p. 487): mwaī (white), mbæa (hornless), mbaīa, nžīu (black), nðunə (red), mbuu (spotted) • Malata wa Kyambi's beehive-passage rite for twin calves (pp. 489–490) • Cattle diseases: ŋgaī, kīo kīa maβuī (lung brand, Fig. 141), muŋgutu / muþunī, īkænə, ndelu, nžamba (leeches) • Beekeeping (mwatu, pp. 494–500): lid mbæŋgæo / mbalaa, hook mboloī, taming bees (kuβoβīa) with molo lizard & mutton, honey bag (Fig. 142), container kīþæmbə, wax mawa, harvesting kutwa vs. wild-honey hunting kulaīa, telling bees of owner's death (p. 499)",
      pronunciation: "ki-e-ngo / ku-vo-via / ndia / ngo-mbe / nzau / nde-wa / mo-ri / mbu-i / nthe-nge / i-lo-ndu / mwa-tu / ku-twa",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Part V, Chs. XXVII–XXVIII, pp. 475–500 & Figs. 139–142)",
      audioFile: null,
    },
  },
  {
    catId: "food",
    entry: {
      english: "Agriculture, Dishes (Īsīo, Usu, Ŋgīma), Beer Brewing (Ukī), Ironworking, Munīo S-Link Chains (Figs. 156–161), Kīondə/Nduŋgū Bags, Rabai Text & Addenda Color/Market Lexicon (Lindblom 1920, Chs. XXIX–XXXV & Addenda, pp. 501–584)",
      translation: "Agriculture (pp. 501–510, Figs. 143–145): field (munda, pl. mīundə), irrigation ditch (mutau), clearing knife (nžomo / kasomo, Fig. 143), 2–3 m sod-breaking pole (nde), woman's digging stick (mīo / mwīo / kamolo, Fig. 144), bird-scaring platform (Fig. 145), threshing (kuβūa on kīβuīo), grass granary (kīīŋgə) • Food & Stimulants (pp. 511–526, Figs. 146–155): blood-whisk (muþekæþī, Fig. 146), fresh milk (īþumo), sour milk (īīa), colostrum (kīþana), milk gourd (kītīa in kīkamī), butter (mauta in kīþulī), dishes īsīo, usu (eaten with index finger kīaa kīa kusuna), kīna, ŋgīma, kītækə, maize bread (mukaə / mukatə / kīmutu / kīkīə), flying ants (mba), resin (kīþana); beer (ukī wa kīwa / nžukī) pounded with muþī in nde mortar, strained through kīkælə (kukæla ukī) with kītumbu pulp, fermented with mwatīnə (Kigelia), frothy top (kīβuo), buying father's permission to drink beer (kuþa / kuþaīa, pp. 519–520); tobacco (kumbato) & snuff (mbakī + īatī natron) in kīaŋgī bottles (Figs. 147–152) & pipes (ndozo, Figs. 153–155) • Ironworking, Chains, Stools, Pottery & Bags (pp. 527–542, Figs. 156–167): iron (kīaa), ore (kīlea), tuyere (kīīa), charcoal (maka), smith (mutwī < kutua), hammer (kīβa, Fig. 156), tongs (mwīβīsto, Fig. 157; smith's word-taboos on ua, īumba, ŋgola p. 530); wire (uþuku) drawn through uta drawplate, wound on kīlīŋgī (Fig. 158), cut on kītatī (Fig. 161a) & pinched with ŋgola pincers (Fig. 161b–c) into triangular S-link chains (munīo, Fig. 159 vs. Kikuyu chain Fig. 160); axe (īþoka), adze (ŋgomo, Fig. 164), stools (kīβīla, woman's kītumbə Fig. 162, elder's mumbə Fig. 163); pottery (nyuŋgu, large kītænə, father's muna / kamuna, potter's marks Fig. 165); chewed-bark string (ulī, pl. ndīī, in kīlīŋga balls) plaited into kīondə & girl's dowry bag (nduŋgū, Figs. 166–167); and verbatim Rabai Kamba reading-book text (Kitabu tja kutsoma) on Woman's vs. Man's Work (pp. 543–545) • Somatic & Addenda (pp. 561–584): 60 Kitui prisoners' weight (mean 117.56 lbs, min 79.5, max 133), 6th finger/toe (child named ndula), pigeon-toed runners (ndaŋgī / matæŋgo), one-eyed/cross-eyed (nžoŋgo), blind (kīlīnda), pointing with tongue (p. 565), Chagga lineages from Ukamba (Mareale from Mumoni, Ngovi, p. 573), īþaβu wayside stone/branch custom (p. 576), 3 basic color roots (-īu black = soot mbīo, -æu / nžaū white = lime īea, -tunə red = clay ndo, color = īlaŋgī, p. 580), and women's market day (kīŋgaŋga, p. 580)",
      pronunciation: "mu-nda / nzo-mo / i-si-o / u-su / ngi-ma / u-ki / ki-ke-le / mu-twi / mu-ni-o / ki-o-nde / ndu-ngu / ki-nga-nga",
      context: "Gerhard Lindblom, The Akamba in British East Africa (2nd Ed., Uppsala, 1920, Parts V–VI & Addenda, pp. 501–584 & Figs. 143–167)",
      audioFile: null,
    },
  }
);

// Complete Bishop Edward Steere (1870) "Swahili Tales, as Told by Natives of Zanzibar" (pp. i–xvi, 1–504) Dictionary Supplement
if (!JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["swahili"]) {
  JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["swahili"] = [];
}
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["swahili"].push(
  {
    catId: "culture-history",
    entry: {
      english: "The 6 Named Swahili Oral Informants & J. F. Campbell's Aug. 1, 1870 Kalila and Dimna Provenance in Steere (1870, pp. v–xiv, 422)",
      translation: "1. Hamisi wa Kayi (Khamis bin Abubekr of Mbweni on the Mrima: Punda wa Dobi, Sultani Darai, Mtoto wa Nzige, 20 Mifano, Goso, Uza Ghali, Hasseebu, Mtoto wa Sultani na Goso, 14 Vitendawili, Hadithi ya Liongo) • 2. Masazo (Mfalme na Wanawe saba, Sultani Majinuni, Kuku na Mwewe, Ao Rathi Ao Mali; closing formula: 'Ikiwa njema, njema yetu wote, na ikiwa mbaya, mbaya yangu mimi mosi niliyoifanya') • 3. Ali bin Moallim (Nussu-Bin-Nussu, Mohammed Mtepetevu) • 4. Kathi Mohammed bin Abd en Nuri (grandson of Sheikh Muhyiddin of Mombasa & Zanzibar: Kimvita tale Kititi, na Fisi, na Simba & 12-line religious poem on p. xiii) • 5. Munyi Khatibu of Mtang'ata (Nyani, na Simba, na Nyoka & Simba na Kulungu) • 6. Hassan bin Yusuf (transcriber/glosser of Mashairi ya Liongo by Sheikh Abdallah bin Ali bin Nasir Muyuweni, Utumbuizo wa Gungu & Mwanzo wa Utenzi wa Ayubu) • Flyleaf inscription: 'J. F. Campbell, Augt. 1st 1870. Given to me by Mr. Ralston at the Brit: Museum, July 29th 1870. Read & noted. J. F. C.' (matching Punda wa Dobi, Nyani na Simba na Nyoka & Nussu-Bin-Nussu to Knatchbull's 1819 Kalila and Dimna, pp. 340, 81)",
      pronunciation: "ha-mi-si wa ka-yi / ma-sa-zo / mo-ham-med bin abd en nu-ri / mu-nyi kha-ti-bu / has-san bin yu-suf",
      context: "Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (Bell & Daldy London, 1870, Preface pp. v–xiv & p. 422)",
      audioFile: null,
    },
  },
  {
    catId: "phrases",
    entry: {
      english: "All 37 Explanations of Words in Italics on Page 490 of Steere's 'Swahili Tales' (1870, p. 490: Askari to Zambarau)",
      translation: "Askari (soldier) •Bafta (fine white cotton cloth) •Baraza (stone bench outside house / public audience) •Bibo (cashew-apple) •Bimbashi (Turkish 'head of a thousand', captain) •Bughala (two-masted Arab dhow with high carved stern) •Bumunda (soft cake/dumpling of mtama meal) •Buni (coffee berries) •Chini (below/under, name of a town in Sultani Darai) •Daria (white muslin) •Doti (four-yard cloth length = 2 shukas) •Farasila (weight of ~35–36 lbs.) •Gora (whole piece of cloth) •Halmashauri (councillor) •Jamdani (white brocaded cloth) •Jemadari (commander) •Kanzu (long sewn tunic of white calico or brown merikani) •Kibla (northern prayer niche towards Mecca) •Kilemba (turban / father-in-law gift) •Kitambi (coloured turban/loin cloth) •Kiyama (Day of Resurrection) •Koma (fruit of the mkoma hyphaene/doum palm) •Kororo (crested guinea-fowl) •Kungu (red-stoned fruit of the mkungu Indian almond tree) •Ladu (spiced round ball of sesame seed, treacle & spice) •Liwali (governor) •Mahari (bride's legal dower) •Maka (Mecca) •Mkaja (woman's cloth / mother-in-law gift) •Mtama (millet, Sorghum vulgare) •Mzungu (European) •Nargili (coconut water-pipe / hookah) •Paa (tiny gazelle, Nesotragus moschatus) •Pishi (grain measure of ~6 lbs. = 4 vibaba) •Riale (silver dollar) •Sheherazade •Shemali (north wind) •Shuka (two-yard loincloth) •Stambuli (Constantinople) •Tambuu (betel leaf chewed with areca nut, lime & tobacco) •Ubeleko (baby-carrying cloth / mother-in-law gift) •Ugali (stiff porridge) •Ukuti (leaflet of coconut frond) •Ukwayu (tamarind foliage) •Zambarau (Java plum fruit)",
      pronunciation: "as-ka-ri / baf-ta / ba-ra-za / bu-mu-nda / fa-ra-si-la / ka-nzu / ki-le-mba / la-du / ma-ha-ri / m-ka-ja / pa-a / pi-shi / ta-mbu-u / u-be-le-ko / za-mba-ra-u",
      context: "Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (Bell & Daldy London, 1870, 'Explanations of Words in Italics', p. 490)",
      audioFile: null,
    },
  },
  {
    catId: "family",
    entry: {
      english: "Traditional Swahili Wedding Gifts, Bridal Matron & 7-Day Fungate Feast (Steere 1870, Notes #1, #16, #17, pp. 490, 493–494)",
      translation: "Fungate (Note 1, p. 490: seven-day wedding feast from Bantu -fungate 'seven') • 4 Primary Marriage Dues (Note 16, pp. 493–494): 1. Mahari (bride's legal dower), 2. Kilemba ('the turban', gift to the bride's father), 3. Mkaja ('postpartum waist-cloth', gift to the bride's mother), 4. Ubeleko ('baby-sling cloth', gift to the bride's mother) • Bridal Attendant & 3 Chamber Fees (Note 17, p. 494): Kungwi / Kungu (bridal matron/instructress), 1. Kifungua mlango ('door-opener' fee to enter bridal chamber), 2. Kiosha miguu ('foot-washing' fee), 3. Kipa mkono ('hand-giving' fee when taking the bride's hand)",
      pronunciation: "fu-nga-te / ma-ha-ri / ki-le-mba / m-ka-ja / u-be-le-ko / ku-ngwi / ki-fu-ngu-a m-la-ngo / ki-o-sha mi-gu-u / ki-pa m-ko-no",
      context: "Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (Bell & Daldy London, 1870, Notes #1, #16 & #17, pp. 490, 493–494)",
      audioFile: null,
    },
  },
  {
    catId: "food",
    entry: {
      english: "Classical Zanzibar & Coastal Coconut Cookery, Cakes & Sweetmeats (Steere 1870, Notes #2–#5, #76–#77, pp. 262, 274–276, 490–491, 501)",
      translation: "Mbuzi (Note 2, p. 490: 'the goat', low wooden stool with serrated iron blade for grating coconut) • Tui & Chicha (Note 3, p. 491: rich coconut milk squeezed from grated pulp vs. dry squeezed refuse chicha) • Ukoko (Note 4, p. 491: crisp browned crust of rice at the bottom of the cooking pot chungu) • Kitoweo & Mchuzi (Note 5, p. 491: fish/meat relish & curry gravy eaten with boiled rice wali) • Bumunda, pl. mabumunda (Note 76, p. 501: soft cake or dumpling made of mtama millet meal) • Ladu (Note 77, p. 501: round sweetmeat balls 1–2 inches in diameter made of semsem [sesame] seed, treacle, and spice) • Mkate wa kumimina & Mkate wa kusonga (pp. 262, 274–276: poured batter cake & stiff kneaded cake)",
      pronunciation: "m-bu-zi / tu-i / chi-cha / u-ko-ko / ki-to-we-o / m-chu-zi / bu-mu-nda / la-du / m-ka-te wa ku-mi-mi-na",
      context: "Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (Bell & Daldy London, 1870, pp. 262, 274–276, Notes #2–#5 pp. 490–491 & Notes #76–#77 p. 501)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Zanzibar Shamba Plantation Hierarchy (Note 68, p. 500), Board Games Bao &Tatu (Notes 15, 67), Stone Architecture & Daily Time/Prayer Cycle (Notes #1–#103)",
      translation: "Plantation Management (Note 68, p. 500): Msimamizi (free Arab overlooker), Nokoa (chief slave foreman), Kadamu (second head slave) • Board Games: Bao (Note 67, p. 499: 32-cup mancala board game played with komwe [Guilandina bonduc] seeds) & Tatu (Note 15, p. 493: three-in-a-row game) • Stone House Architecture: Baraza (stone bench/verandah), Sebule (reception room), Orfa / Ghurfa (upper-storey room), Sakafu (flat stone-and-lime roof without parapets, Note 64 p. 499), Dari (ceiling/upper floor), Uwani (courtyard) • Daily Time & Islamic Prayers: Alfajiri (early dawn, ~4:30 a.m.), Asubuhi (morning), Adhuhuri (noon prayer, Saa sita), Alasiri (afternoon prayer, ~3:30 p.m., Saa tisa), Magharibi (sunset prayer, Saa kumi na mbili = 6:00 p.m.), Esha / Isha (night prayer, ~7:30 p.m.), Siku ya Alhamisi / Juma (Thursday night & Friday mosque day)",
      pronunciation: "m-si-ma-mi-zi / no-ko-a / ka-da-mu / ba-o / ko-mwe / sa-ka-fu / al-fa-ji-ri / a-dhu-hu-ri / a-la-si-ri / ma-gha-ri-bi / e-sha",
      context: "Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (Bell & Daldy London, 1870, Notes #15, #64, #67, #68, pp. 493, 499–500)",
      audioFile: null,
    },
  },
  {
    catId: "adjectives",
    entry: {
      english: "Mombasa (Kimvita) vs. Zanzibar (Kiunguja) Dialect Lexicon in 'Kititi, na Fisi, na Simba' (Steere 1870, pp. 325–329 & Notes 82–88, pp. 501–502)",
      translation: "Kititi (Kimvita) = Sungura (Kiunguja: hare/rabbit, Note 82 p. 501) • tinyango = chinyango (small piece of meat, Note 84 p. 501) • kitoka = kishoka / shoka (hatchet/axe, Note 86 p. 501) • mtanga = mchanga (sand, Note 85 p. 501) • mato = macho (eyes) • tini = chini (down/below) • tangua = chagua / tatua • nti = nchi (earth/land) • mtezo = mchezo (game/dance) • kutinda = kuchinja (to slaughter/cut)",
      pronunciation: "ki-ti-ti / su-ngu-ra / ti-nya-ngo / ki-to-ka / m-ta-nga / ma-to / ti-ni / n-ti / m-te-zo / ku-ti-nda",
      context: "Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (Bell & Daldy London, 1870, pp. 325–329 & Notes 82–88, pp. 501–502)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Archaic Poetic Kingozi / Kiamu vs. Standard Kiunguja Parallel Glossary in 'Mashairi ya Liongo' & 'Utumbuizo wa Gungu' (Steere 1870, pp. 455–483)",
      translation: "Mja = Mtumwa (servant/bondsman) • Mbasi = Rafiki (friend) • Mwana = Bibi (lady/mistress) • Mbwene = Nimeona (I have seen — archaic -ene perfect) • Haona / Haoe = Nikaona / Nione (I saw / that I may see) • Tima = Moyo (heart) • Mawi = Mavi (dung/refuse) • Zema = Njema (good things) • Mewaza = Nimefikiri (I have thought/pondered) • Muinga = Mjinga (simpleton) • Amelimuka = Ameerevuka (he has grown wise/shrewd) • Kicho / Mchayi = Hofu / Mwoga (fear / coward) • Bolewe = Ole wake (woe to him) • Ukatumike = Uende utumwani (go on my errand) • Nipeeke = Nipeleke (take me) • Pali = Mahali (place)",
      pronunciation: "m-ja / m-ba-si / mwa-na / m-bwe-ne / ti-ma / ma-wi / ze-ma / me-wa-za / mu-i-nga / a-me-li-mu-ka / m-cha-yi / bo-le-we",
      context: "Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (Bell & Daldy London, 1870, pp. 442, 455–483, transcribed and glossed by Hassan bin Yusuf)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "All 12 Authorial Corrigenda on Page 504 of Bishop Edward Steere's 'Swahili Tales' (1870, p. 504)",
      translation: "1. P. 2, l. 22: for nimesahau read nimeacha • 2. P. 18, l. 4: for akamwambia read akawaambia • 3. P. 22, l. 26: for akawaambia read akamwambia • 4. P. 61, l. 16: for seventy read seven • 5. P. 134, l. 21: for akanena read wakanena • 6. P. 152, l. 11: for akamwambia read akawaambia • 7. P. 193, No. 8 (Kilimia proverb): for rise read set, and vice versâ • 8. P. 263, l. 19: for second read third • 9. P. 290, l. 15: for akamwambia read akawaambia • 10. P. 295, l. 26: for twenty read forty • 11. P. 299, l. 16: for stripped read chipped • 12. P. 444, l. 4: for mji read mti",
      pronunciation: "ni-me-a-cha / a-ka-wa-a-mbi-a / ki-li-mi-a / m-ti",
      context: "Bishop Edward Steere, Swahili Tales, as Told by Natives of Zanzibar (Bell & Daldy London, 1870, Corrigenda, p. 504)",
      audioFile: null,
    },
  }
);

// ── Complete Line-by-Line Supplemental Lexicon from Bishop Edward Steere & A. C. Madan's "A Handbook of the Swahili Language, as Spoken at Zanzibar" (4th Ed., SPCK London, 1894, pp. i–xxii, 1–458 [PDF pp. 1–488]) ──
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["swahili"].push(
  {
    catId: "culture-history",
    entry: {
      english: "Steere & Madan (1894, pp. iii–xxii, 1–15) Informants, Provenance, Broken 'Foreigners' Swahili' & Kilwa Letter Ambiguity",
      translation: "University of Toronto Copy (PL 8702 S724 1894, Barcode 3 1761 00101630 2, inscribed 'CHUO CHA KISWAHILI') • Primary Informants (pp. iii–xiii): Hamis wa Tani & his son Mohammed bin Khamis (revised Substantives, Adjectives, Pronouns & Verbs on Saturday mornings), Hamis wa Kayi, Sheikh 'Abd al 'Aziz (Psalms 1–16), Sheikh Mohammed bin Ali, Hassan bin Yusuf, Rev. & Mrs. G. E. Drayton, Rev. W. & Mrs. Lea • Jesting Folk Etymology (p. xiii): Sawa hila ('All same cheat') vs. Arabic Sawáhil (coasts) • Broken 'Foreigners' Swahili' Rules (pp. 3–4): forming plurals with ma- or nyingi, conjugating all verbs with na-/ma-/ta-, and negating with hakuna • Kilwa Arabic-Script Ambiguity (p. 6): امغزف read as amekufa ('had died') vs. amevuka ('had got away') • Explosive Aspirates (p. 11): p', t', k' from suppressed n (upepo → p'epo, upanga → p'anga, ukuta → k'uta) • Latent Intervocalic l (p. 13): Merima kufala = Zanzibar kufaa; mzambarau → Mzambaraúni",
      pronunciation: "ha-mi-s wa ta-ni / mo-ha-mme-d bin kha-mi-s / sa-wa hi-la / a-me-ku-fa / a-me-vu-ka / p'e-po / m-za-mba-ra-u-ni",
      context: "Bishop Edward Steere & A. C. Madan, A Handbook of the Swahili Language, as Spoken at Zanzibar (4th Ed., SPCK London, 1894, pp. iii–xxii, 1–15)",
      audioFile: null,
    },
  },
  {
    catId: "food",
    entry: {
      english: "26 Coconut Terms (Mnazi / Nazi, pp. 33–34), 10 Rice Varieties (p. 65) & 6 Cakes (p. 30) in Steere & Madan (1894)",
      translation: "Coconut Palm & Fruit (pp. 33–34): Mnazi (tree), kichilema / shaha (edible heart), kilifu (fibrous network), kuti / uchukuti / ukuti (leaf/midrib/leaflet), makuti ya kumba / ya pande / ya viungo (thatching), pakacha & karara (plaited baskets), upunga (embryo nut) → kidaka (tiny nut) → kitale (half-grown) → dafu (milk-drinking nut) → koroma (nutty-lined) → nazi (ripe nut) → joya (spongy nut) → mbata (dried copra), makumbi & usumba (husk & coir), kifuo (husking stake), kifuu (shell), mbuzi ya kukunia nazi (grater), tui (coconut milk), kifumbu (strainer bag), chicha (squeezed refuse), nazi kavu, mafuta ya nazi • 10 Rice Varieties (p. 65): Mpunga (in husk), Mchele (husked), Wali (boiled), Ukoko (crust), Masalufu (steamed), Bungala, Kapwai, Madevu, Uchukwi, Kimoto, Sifara, Kichooko, Shindano, Sena, Bora kupata • 6 Cakes (p. 30): Mkate wa mofu (mtama), Mkate wa tumbako (tobacco cake), Bumunda (spongy pancake), Kitumbua (fried rice fritter), Ladu (spiced sesame ball), Kinyunya",
      pronunciation: "m-na-zi / u-pu-nga / ki-da-ka / ki-ta-le / da-fu / ko-ro-ma / na-zi / jo-ya / m-ba-ta / ki-fu-o / ki-fu-mbu / bu-nga-la / ki-tu-mbu-a",
      context: "Bishop Edward Steere & A. C. Madan, A Handbook of the Swahili Language, as Spoken at Zanzibar (4th Ed., SPCK London, 1894, pp. 30, 33–34, 65)",
      audioFile: null,
    },
  },
  {
    catId: "nature",
    entry: {
      english: "9 Antelopes (p. 25), 14 Baskets (pp. 26–27), 8 Dhow Types (p. 38), 6 Games (p. 45), 3 Handfuls (p. 47), 11 Musical Instruments (p. 57), 7 Evil Spirits (p. 71) & 8 Woods (p. 82)",
      translation: "9 Antelopes (p. 25): Bara, Dondoro, Koru, Kuguni, Mpofu (eland), Nyumbo (wildebeest), Parahara, Kulungu (bushbuck), Paa (gazelle) • 14 Baskets (pp. 26–27): Kikapu/Chikapu, Kapu, Kanda, Junia/Gunia, Kigunni, Kifumbo, Pakacha, Dohani, Tunga, Ungo/Uteo, Kiteo, Kunguto, Jamanda • 8 Dhows & Parts (p. 38): Dau, Mtepe, Betela, Bágala (mlingote wa kalmi), Ghangi, Batili, Bedeni, Awesia (with duumi, gubeti, shetri, makanadili, darumeti, deheni, feuli) • 6 Games (p. 45): Bao, Maliyandimu, Tiabu, Dama, Tasa, Tinge • 3 Handfuls (p. 47): Ukufi (open hand), Chopa (both hands), Konzi (closed fist) • 11 Musical Instruments (p. 57): Ngoma, Msapata, Kumbwaya,Utumbuizo, Zumari, Baragumu, Siwa, Upatu, Kayamba, Zeze, Kinanda • 7 Evil Spirits (p. 71): Pepo, Shetani, Jini, Mahoka, Kinyamkela, Dungumaro, Koikoi, Mwana maua • 8 Woods (p. 82): Mninga, Mpingo (ebony), Mvule, Mkurungu, Mzambarau, Mpera, Mlimao, Mnazi",
      pronunciation: "m-po-fu / nyu-mbo / ku-lu-ngu / pa-a / m-te-pe / ba-ga-la / u-ku-fi / cho-pa / ko-nzi / ki-nya-mke-la / du-ngu-ma-ro",
      context: "Bishop Edward Steere & A. C. Madan, A Handbook of the Swahili Language, as Spoken at Zanzibar (4th Ed., SPCK London, 1894, pp. 25–27, 38, 45, 47, 57, 71, 82)",
      audioFile: null,
    },
  },
  {
    catId: "numbers",
    entry: {
      english: "5 Dollar Coins (p. 39), 16 Fractions of a Dollar (p. 93), Currency Scale (47 Dollars = 100 Rupees), Lengths, Weights & Regional Kanda Capacities (pp. 80–81, 455–457)",
      translation: "5 Dollar Coins (p. 39): Reale ya mizinga (Spanish Pillar dollar), Reale ya Sham (black dollar), Reale ya thahabu (American $20 gold piece), Reale ya kifransa / Bwara (French 5-franc piece) • 16 Dollar Fractions (p. 93): Nuss ya themuni (1/16), Themuni / Ze'mni (1/8), Zerenge (1/5), Robo (1/4), Nuss (1/2), Kassa robo (3/4), Kassa themuni (7/8), Kassa nuss ya themuni (15/16) • Currency Scale (pp. 455–456): 3 robo pesa = 1 pesa; 1 rupia = 60–64 pice (1s. 8d.); 1 reale = 2 rupees 8 pice (3s. 7d.); 1 English sovereign (robo Ingreza, p. 377) = 12 rupees; legal tender: 47 dollars = 100 rupees, 94 dollars = 200 rupees, 141 dollars = 300 rupees • Length (p. 456): Wanda (1 in.), Shibiri kamili (quarter-yard) & Morita, Thiraa kamili & Thiraa konde (half-yard), Wari (1 yd.), Pima (1 fathom), Uayo, Futi; Dunga = saa 'nne (4 hrs), Kokotoni = saa sita (6 hrs) • Weight (pp. 80–81, 456–457): 16 wakia = 1 rátel; 3 rátel = 1 mani (or 2¾ rattel p. 80); 6 rátel = 1 pishi; 6 pishi = 1 frasila (~35 lbs.); 10 frasila = 1 mzo (60 pishi); 64 frasila = 1 ton; Farra ya mti = 72 rattel (12 pishi, p. 81) • Capacity (p. 457): Kibaba cha tele vs. cha mfuto; 2 vibaba = 1 kisaga; 2 visaga = 1 pishi; Gunia (~168 lbs.); Kanda at Kwale/Mgao/Mvita (rice 10–12 pishi, maize 10 pishi) vs. Pangani/Tanga/Mtang'ata (rice 15–17 pishi, maize 13–13½ pishi); Korja (20 poles), Boma, Tanuu/Kikapo, Jura (35 yds calico)",
      pronunciation: "re-a-le ya mi-zi-nga / nuss ya the-mu-ni / ze-re-nge / ka-ssa ro-bo / shi-bi-ri / thi-ra-a / wa-ri / pi-ma / fra-si-la / m-zo",
      context: "Bishop Edward Steere & A. C. Madan, A Handbook of the Swahili Language, as Spoken at Zanzibar (4th Ed., SPCK London, 1894, pp. 39, 80–81, 93, 377, 455–457)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "All 32 Points of the Zanzibar Mariner's Compass (Steere & Madan 1894, Appendix V, p. 458; cf. pp. 329, 334)",
      translation: "Cardinals: North = Jaa • South = Kutubu • East = Matlai • West = Magaribi • N. to E./W. Star Bearings: N. by E. / W. = Faragadi (Matlai / Magaribi) • N.N.E. / N.N.W. = Nash (Matlai / Magaribi) • N.E. by N. / N.W. by N. = Nagr (Matlai / Magaribi) • N.E. / N.W. = Luagr (Matlai / Magaribi; cf. pp. 329, 334 Matlaa ayuk / Maghrib ayuk) • N.E. by E. / N.W. by W. = Dayabu (Matlai / Magaribi) • E.N.E. / W.N.W. = Semak (Matlai / Magaribi) • E. by N. / W. by N. = Seria (Matlai / Magaribi) • S. of E./W. Star Bearings: E. by S. / W. by S. = Sosa (Matlai / Magaribi) • E.S.E. / W.S.W. = Tiri (Matlai / Magaribi) • S.E. by E. / S.W. by W. = Lakadiri (Matlai / Magaribi) • S.E. / S.W. = Lakarabu (Matlai / Magaribi; cf. pp. 329, 334 Matlaa akrab / Maghrib akrab) • S.E. by S. / S.W. by S. = Hamareni (Matlai / Magaribi) • S.S.E. / S.S.W. = Seheli (Matlai / Magaribi) • S. by E. / S. by W. = Sonoobari (Matlai / Magaribi)",
      pronunciation: "ja-a / ku-tu-bu / ma-tla-i / ma-ga-ri-bi / fa-ra-ga-di / na-sh / na-gr / lu-a-gr / da-ya-bu / se-ma-k / se-ri-a / so-sa / ti-ri / la-ka-di-ri / la-ka-ra-bu / ha-ma-re-ni / se-he-li / so-no-o-ba-ri",
      context: "Bishop Edward Steere & A. C. Madan, A Handbook of the Swahili Language, as Spoken at Zanzibar (4th Ed., SPCK London, 1894, Appendix V, p. 458)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "All 18 Named Parts of a Man's Kanzu Tunic (Steere & Madan 1894, Part II, s.v. Kanzu, p. 299)",
      translation: "1. Tao la kanzu (bottom hem) • 2. Magongo nene & Magongo membamba (broad & narrow back/side seams) • 3. Badani or Kimo (front & back middle strip) • 4. Taharizi (side gores) • 5. Sijafu (inner breast linings) • 6. Vikwapa (armpit gussets) • 7. Lisani (under-flap of chest opening) • 8. Jabali (stitching where neck joins body) • 9. Mhalbori (red silk braided edge round neck & down breast) • 10. Kaaba (applied piece behind neck) • 11. Shada (neck tassel) • 12. Kitanzi (button-loop on left shoulder) • 13. Kazi ya shingo (red silk neck-stitching in 4 rows: Tiki [innermost], Mrera [2nd], Viboko [zigzags], Vinara [outer spots]) • 14. Darizi (inner line of stitching down chest opening) • 15. Mjuzi, Ar. shararaji (ornamental point at bottom of opening) • 16. Mkia wa mjuzi (line running down from the point) • 17. Vipaji or viguu (eyelets holding side seams before pressing) • 18. Kanzu ya ziki (kanzu worked with white cotton instead of red silk)",
      pronunciation: "ta-o la ka-nzu / ma-go-ngo ne-ne / ba-da-ni / ta-ha-ri-zi / si-ja-fu / vi-kwa-pa / li-sa-ni / ja-ba-li / m-ha-lbo-ri / ka-a-ba / sha-da / ki-ta-nzi / ti-ki m-re-ra vi-bo-ko vi-na-ra / da-ri-zi / m-ju-zi / vi-pa-ji",
      context: "Bishop Edward Steere & A. C. Madan, A Handbook of the Swahili Language, as Spoken at Zanzibar (4th Ed., SPCK London, 1894, Part II, s.v. Kanzu, p. 299)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "All 41 Named Mita (Quarters/Districts) of Zanzibar Town (30 Peninsula + 11 Ng'ambo, s.v. Mta, pp. 346–347) & Wahadimu / Munyi mkuu (pp. 82, 349)",
      translation: "30 Peninsula Quarters (pp. 346–347): 1. Shangani, 2. Baghani, 3. Gerezani, 4. Forthani, 5. Mita ya pwani, 6. Kiponda, 7. Mbuyuni, 8. Malindi, 9. Funguni, 10. Jungiani, 11. Kokoni, 12. Mkunazini, 13. Kibokoni, 14. Kidutani, 15. Mzambarauni, 16. Kijukakuni, 17. Vuga, 18. Mnazimoja, 19. Mji mpya, 20. Mtakuja, 21. Jumea, 22. Soko la Mahogo, 23. Kajificheni, 24. Mfuuni, 25. Migomboni, 26. Tiuyani, 27. Sham, 28. Hurumzi, 29. Kutani, 30. Mwavi • 11 Ng'ambo Quarters Across the Creek (p. 347): 31. Ng'ambo, 32. Mchangani, 33. Gulioni, 34. Kwa Buki, 35. Vikokotoni, 36. Kisimani kwa kema, 37. Mchinjani, 38. Mwembe mjugu, 39. Kikwajuni, 40. Mkadini, 41. Mnazi moja • Wahadimu & Munyi mkuu (pp. 82, 349): Original inhabitants of Zanzibar island speaking Kihadimu, governed by the Munyi mkuu at Dunga and paying a $2 house-tax shared equally between Seyed Majid and the Munyi mkuu's family",
      pronunciation: "sha-nga-ni / ba-gha-ni / ge-re-za-ni / fo-rtha-ni / ki-po-nda / ma-li-ndi / fu-ngu-ni / m-ku-na-zi-ni / vu-ga / ka-ji-fi-che-ni / hu-ru-mzi / ng'a-mbo / vi-ko-ko-to-ni / wa-ha-di-mu / mu-nyi m-ku-u",
      context: "Bishop Edward Steere & A. C. Madan, A Handbook of the Swahili Language, as Spoken at Zanzibar (4th Ed., SPCK London, 1894, pp. 82, 346–347, 349)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "All 52 Verbatim Merima-Dialect Kinyume Specimens Written Out by Johari (Steere & Madan 1894, Appendix I, pp. 425–426)",
      translation: "1. Ng'ombe → Mbeng'o (An ox) • 2. Mbuzi → Zimbu (A goat) • 3. Punda → Ndapu (A donkey) • 4. Nyamiya → Yangami (A camel) • 5. Nyumba → Mbanyu (A house) • 6. Mkeka → Kamke (A sleeping mat) • 7. Kitanda → Ndakita (A bedstead) • 8. Mlango → Ngomla (A door) • 9. Mijengo → Ngomije (Buildings) • 10. Udongo → Ngoudo (Red earth) • 11. Ngazi → Zinga (A ladder) • 12. Daraja → Jadara (A staircase) • 13. Maneno → Nomane (Words) • 14. Basi → Siba (That will do) • 15. Mwanamuke → Kemwanamu (A woman) • 16. Uzingizi → Ziuzingi (Sleep) • 17. Samaki → Kisama (Fish) • 18. Kweli → Likwe (Truth) • 19. Nazima → Manazi (I lend) • 20. Sikupi → Pisiku (I will not give you) • 21. Ntakupa → Pantaku (I will give you) • 22. Ntakunyima → Mantakunyi (I shall withhold from you) • 23. Macho → Choma (Eyes) • 24. Mguru → Rumgu (A leg) • 25. Rungu → Nguru (A club) • 26. Nakuomba → Mbanakuo (I pray you) • 27. Njara inaniuma → Ranja mainaniu (I ache with hunger) • 28. Vidole → Levido (Fingers) • 29. Shingo → Ngoshi (The neck) • 30. Si kweli → Lisikwe (It is not true) • 31. Fundi → Ndifu (A master workman) • 32. Sivyo → Vyosi (Not thus) • 33. Karatasi → Sikarata (Paper) • 34. Kalamu → Mukala (A pen) • 35. Wino → Nowi (Ink) • 36. Pakura → Rapaku (Dish up) • 37. Twende zetu → Tutwendeze (Let us be off) • 38. Senendi → Ndisene (I am not going) • 39. Chakula → Lachaku (Food) • 40. Utakwenda → Ndautakwe (You will go) • 41. Mchanga → Ngamcha (Sand) • 42. Samawati → Tisamawa (Heaven) • 43. Aruthi → Thiaru (Earth) • 44. Mutu → Tumu (Man) • 45. Mungwana → Namungwa (A free man) • 46. Mtumwa → Mwamtu (A slave) • 47. Sitaki → Kisita (I dislike it) • 48. Meza → Zame (A table) • 49. Bweta → Tabwe (A box) • 50. Sanduku → Kusandu (A chest) • 51. Kitabu → Bukita (A book) • 52. Msahafu → Fumsaha (A Koran)",
      pronunciation: "mbe-ng'o / zi-mbu / nda-pu / ya-nga-mi / mba-nyu / ke-mwa-na-mu / ru-mgu / ra-nja ma-i-na-ni-u / tu-twe-nde-ze / ndi-se-ne / bu-ki-ta / fu-msa-ha",
      context: "Bishop Edward Steere & A. C. Madan, A Handbook of the Swahili Language, as Spoken at Zanzibar (4th Ed., SPCK London, 1894, Appendix I, pp. 425–426)",
      audioFile: null,
    },
  },
  {
    catId: "greetings",
    entry: {
      english: "Appendices II, III & IV (pp. 427–453): 4 Letters/Poems, Interlinear Tale 'Waridi, Ureda, Jindi & Sinébar' & All 197 Idiomatic Phrases",
      translation: "Appendix II (pp. 427–429): Letter 1 to D. S., il Mwingrezi from H. bin A. sending 7 fowls (kuku saba); Letter 2 from M. wadi S. dated 26 mwezi wa mfunguo kenda; 16-line poem 'Risala enda kwa hima / Kwa Edward Istira...'; Pemba–Mombasa quatrain 'Hatukiati kisiwa kwa uvambume na upembe...'; Kingozi -ile/-ene perfects (mbwene = nimeona, nikomile = nimekoma) & p. 429 reader cursive note ('Bwana wangu ninyemheshimu sana...') • Appendix III (pp. 431–442): Interlinear tale 'Hadithi ya Waridi, na Ureda, na Jindi, na Sinébar' (opening 'Aliondokea mtu tajiri', 7-headed snake nyoka wa vichwa saba in the pit, magic invisibility cap kofia mbovu, and magic iron lamp taa mbovumbovu ya chuma summoning two men with gold or two men with cudgels vigongo) • Appendix IV (pp. 443–453): All 197 Useful & Idiomatic Phrases (Nos. 1–54 collected with Mrs. G. E. Drayton; Nos. 55–197 alphabetical, e.g., #15 Nyumba ya mawe ya orofa, #84 Kupiga kilemba, #106 Kumpaka mafuta kwa nyuma ya chupa, #195 Kuamba na kusengenya, #196 Jina lako nani?, #197 Unayo haja tena? — Haja yangu ya kuishi wewe sana na furaha [p. 453 vocalized Ajami: سَلَامُ سَانَ حَجَ يَاغُ يَكُعِشِ وِوِ سَانَ نَفُرَاحَ])",
      pronunciation: "ri-sa-la e-nda kwa hi-ma / m-bwe-ne / ni-ko-mi-le / wa-ri-di u-re-da ji-ndi si-ne-bar / ko-fi-a m-bo-vu / ku-a-mba na ku-se-nge-nya",
      context: "Bishop Edward Steere & A. C. Madan, A Handbook of the Swahili Language, as Spoken at Zanzibar (4th Ed., SPCK London, 1894, Appendices II, III & IV, pp. 427–453)",
      audioFile: null,
    },
  }
);

// ── Complete Line-by-Line Specialized Entries from Mrs. F. Burt & Rev. W. E. Taylor's "Swahili Grammar and Vocabulary" (SPCK London, 1910, Book pp. 1–252 [PDF pp. 1–260]) ──
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["swahili"].push(
  {
    catId: "culture-history",
    entry: {
      english: "Rev. W. E. Taylor's 3 Coastal Dialect-Groups & 4 Comparative Dialect Tables I–IV (Burt 1910, Part I, pp. 7–10)",
      translation: "Three Dialect-Groups (pp. 7–8): (a) Southern: Ki-Unguja (Zanzibar), Ki-P'emba (P'emba, the Emerald Isle supplying half the clove crop; sh → fy), Ki-Mrima (mainland opposite Zanzibar; cerebral t → r) • (b) Northern: Ki-Amu (Lamu), Ki-Pate (Pate), Ki-Gunya (Wa-Gunya/Bajuni islanders), Ki-ti-kuu (Mainland Bajuni, < nt'i-k'uu) • (c) Central: Ki-Mvita (Mombasa Island & coast) • Table I (S. & C. vs. N., pp. 8–9): Cerebral T (Mrima R) / T / CH (Bajuni); J / J / Y; SH (P'emba FY) / SH / S; Z / Z / DH (Bajuni); W / W / V; M / M / N; VI / VI / ZI; YU / YU / U; class/number relative suffixes vs. universal -o except Locative; suffix-perfect obsolete (S.) / poetic (C.) / in full use (N.); -je? vs. iye?; hivi vs. hiyau • Table II (C. & N. vs. S., p. 9): Southern CH & NJ = Central/Northern Dental *T* & N*D*; Southern 'barbarous' ninakupendani = Central/Northern nawapenda • Table III (3-Way Divergence, p. 9): ninakuja (S.) / naja (C.) / niyao (N.) • Table IV (Central Advantage, p. 9): kuthani, -dhani, dhambi, thalatha & -akwe (C.) vs. kuzani, ramazani, zambi, selasa & -ake (S. & N., avoiding ambiguity with wake 'females')",
      pronunciation: "ki-u-ngu-ja / ki-p'e-mba / ki-mri-ma / ki-a-mu / ki-pa-te / ki-gu-nya / ki-ti-ku-u / ki-mvi-ta / ni-na-ku-ja / na-ja / ni-ya-o",
      context: "Mrs. F. Burt & Rev. W. E. Taylor, Swahili Grammar and Vocabulary (SPCK London, 1910, Part I, pp. 7–10)",
      audioFile: null,
    },
  },
  {
    catId: "greetings",
    entry: {
      english: "Rev. W. E. Taylor's 21 Graded Phonetic Exercises, 'Sandwiching' Drill, All-Vowel Words & Complete Syllabary (Burt 1910, Part I, pp. 11–23)",
      translation: "'Sandwiching' Drill (p. 11): 10 repetitions by native teacher, 1 by student, 1 by teacher, then 1 by student between 2 teacher repetitions • Ex. 4 All-Vowel Words (p. 13): au (or), ai! (eh!), oa (marry), ua (kill/flower/backyard), aoa (he marries), aua (he kills), aoe (let him marry), aue (let him kill), aoae (he who marries), uuao (thou who killest / which kills), uuae (kill him), auuae (he who kills him), uuuao (which kills it), auae (he who kills), auuao (which kills him), aiuae (he who kills it) • Ex. 5 Glottal Hamza (p. 14): ’a ’a ('No!'), ’a ’a ’a ('Not at all!'), ’ee (woman's 'Yes!') • Ex. 7 Laryngeal (p. 15): Haa’! ('No indeed!') • Ex. 8 & 10 Sonant m’ & n’ (pp. 16–17): Ham’, hamu, hamo, ham’muui, m’memuua... hm’ & ’n’!—hn’!—’n’n’! • Ex. 12 Four Arabic 'll' Words (p. 17): Allahu, illa, illi, killa/kulla • Ex. 14 Palatal Nasal (p. 18): nyii (cry of hyæna) • Ex. 19–20 Dental vs. Cerebral (p. 20): Tua mto wako mtoni; mti huu utue na tini. Namtuma kutuma; natumia atumacho • Ex. 21 Blends vs. Aspirates (p. 21): mb, mv, nj, ng, nz vs. ch’, p’, k’, t’, *t*’ + vocal gymnastic Mng’wpe (African Aphorisms § 396) & women's closed-lip click assentive • Complete 5-Vowel Syllabary & 9 Arabic Sounds (pp. 22–23)",
      pronunciation: "a-u / o-a / u-a / a-o-a / a-u-a / ’a-’a / ’e-e / ha-m’ / a-lla-hu / m-ng’w-pe",
      context: "Mrs. F. Burt & Rev. W. E. Taylor, Swahili Grammar and Vocabulary (SPCK London, 1910, Part I, pp. 11–23)",
      audioFile: null,
    },
  },
  {
    catId: "verbs-grammar",
    entry: {
      english: "10 Noun Classes (incl. Class VI Monster Class), Kwisha Perfect, Contracted Possessives, Nasal-Aspiration Chain & 23-Form kufunga Table (Burt 1910, Part II, pp. 24–131)",
      translation: "10 Noun Classes (pp. 26–27): I. MT’U (mt’u/wat’u), II. MTI (mti/miti), III. N (nyumba/nyumba, aspirating ch’, k’, p’, t’, *t*’), IV. KI (k’itu/vit’u), V. (MA) (jina/majina), VI. (JI) or Monster Class (jit’u/mijit’u, nyonge/minyonge), VII. U (uzi/nyuzi, ubaya), VIII. PA (pahali, -ni pa), IX. KU (kufa, -ni kwa), X. MU (mwahali, -ni mwa) • Only 2 Irregular Imperatives (p. 29 fn. 2): ndoo (< kuja) & lete (< kuleta) • Idiomatic Kwisha Perfect (p. 39 fn. 1): nsha, unsha, ansha, tunsha, mnsha, wansha • 12 Kupiga Idioms (p. 43 fn. 3): mstari, k’engele, ch’apa, k’elele, t’eke, fundo, magot’i, pasi, mbinja, k’ura, yowe • 7 Monosyllabic ku- Tenses (p. 52): Present -na-, Perfect -me-, Past -li-, Future -ta-, Participial -ki-, Conditional -nge-/-ngeli-, Relative -taka- • Emphatic Inversion (pp. 58, 91): Zina Salehe [funguo]! & Mji unangia maradhi • Sole Tree-to-Fruit Exception (p. 81 fn. 5–6): mgomba → ndizi • Contracted Possessives (p. 92): kit’uche, jambole, vituvye, kufakwe, watumwaze, mwanangu/mwenetu/mwenenu, babangu/babako/babazo/babakwe/babae/babaze • Phonological Chain (p. 93): nik → nk → k’ → h (ha-, hi-, hu-; nita → n’ta → t’; mbwa = ni wa; nda = ni ya) • 7 Derivative Verb Forms & 23-Form Table of kufunga (pp. 98–102: kufunga, kufungwa, kufungisha, kufungishwa, kufungiza, kufungizwa, kufungika, kufungikana, kufungia, kufungiwa, kufungilia, kufungiliwa, kufungiana, kufungana, kufunganya, kufunganywa, kujifunga, kujifungia, kufungua, kufunguliwa, kufunguka, kufungukana, kufungafunga)",
      pronunciation: "ji-t’u / mi-ji-t’u / n-sha / u-n-sha / ki-t’u-che / ja-mbo-le / vi-tu-vye / ku-fa-kwe / ku-fu-nga / ku-fu-ngu-a",
      context: "Mrs. F. Burt & Rev. W. E. Taylor, Swahili Grammar and Vocabulary (SPCK London, 1910, Part II, Studies I–XXI, pp. 24–131)",
      audioFile: null,
    },
  },
  {
    catId: "numbers-money",
    entry: {
      english: "Mombasa Tables of Money, Weights & Measures, 3 Letters of Rabiu l-Awwal 1324 A.H. (1906 CE) & Swahili Monsoon Calendar (Burt 1910, pp. 152–158)",
      translation: "Coinage (p. 152): Silver Rupee (16 annas = 64 pice), ½ Rupee (8 annas = 32 pice), ¼ Rupee (4 annas = 16 pice), ⅛ Rupee (2 annas = 8 pice), Bronze Pice (¼ anna); Roboo ya zamani = 32 pice (8 annas = ¼ riale) vs. Roboo rupia = 16 pice (¼ rupee); Thumuni = 16 pice (⅛ riale) vs. Thumuni rupia = 8 pice (⅛ rupee) • Corn Capacity (p. 152): 1 Kibaba (Roboo kibaba ¼, Nusu kibaba ½, Kibaba kasir roboo ¾); 1 Kisaga = 2 vibaba; 1 Pishi = 2 visaga or 4 vibaba; 1 Jizila = 60 pishi • Weights (p. 153): 1 Ratili = 1 lb.; 1 Mani = 3 ratili (3 lbs.); 1 Farasila = 36 ratili (36 lbs.) • Length (p. 153): 1 Shubiri = 1 span; 1 Dhiraa = 2 shubiri (1 cubit); 1 P’ima = 4 dhiraa or 8 shubiri (1 fathom); Indian Wari = 2 dhiraa (1 yard) • 3 Mombasa Letters (pp. 154–156): Letter No. 1 (8 Rabiu l-Awwal 1324 A.H., Muhammad bin Maalim bin Bwana Kombo to Hamis bin Shaibu il Kilifi: 'walio mbali huonana kwa barua na barua ni nusu ya kuonana', heavy Mombasa rains, scarcity of mtele & kitoeo, maulidi month, birth of a son to Ali bin Omari, 1 doz. kanzus, ½ doz. kofias, 3 vikois); Letter No. 2 (12 Rabii Liawal 1324, Mula Alii bin Abdirrahaman on the earthquake in Ulaya ya Paris killing ~5,000 people with 'kulla neno aletalo Mngu ndiyo kheri'); Letter No. 3 (to a lady alukhti fulana binti fulani on the increased house tax kodi ya majumba) • Calendar & Monsoons (pp. 157–158): Kasikazi/Musimu (Nov.–Mar.), Maleleji (calms), Kusi (Apr.–Sept.), Kipupwe (June–July), Demani (Aug.–Sept.), T’anga Mbili (Sept.–Oct.); 3 Rains: Mwaka (Apr.–May), Mchoo (July), Vuli (Oct.–Nov.)",
      pronunciation: "ro-bo-o ya za-ma-ni / thu-mu-ni / ki-ba-ba / ki-sa-ga / pi-shi / ji-zi-la / ra-ti-li / ma-ni / fa-ra-si-la / ka-si-ka-zi / ku-si",
      context: "Mrs. F. Burt & Rev. W. E. Taylor, Swahili Grammar and Vocabulary (SPCK London, 1910, Part II, pp. 152–158)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "14 Synonym Groups & All 44 Aspirated and Dental/Cerebral Homonym Groups in Mombasa Swahili (Burt 1910, pp. 158–161)",
      translation: "6 Noun Synonym Groups (p. 158): (1) Notice: notisi, mbiyu, iilani; (2) Judge: ha’kimu, muamzi, kadhi; (3) Sin/Fault (12 terms): dhambi, makosa, maasi, taksiri, hatia, uovu, ubaya, udhalimu, ufisadi, upotevu, ukorofi, khatia; (4) Deceit: hila, udanganyifu; (5) Thought: thana, azima, mawazo, fikira; (6) Trouble/Grief (10 terms): shida, msiba, taabu, udhia, matata, huzuni, sikitiko, hamu, simazi, majonzi • 8 Verb Synonym Groups (pp. 158–159): rule (kumiliki/kutawala), be able/in time (kuweza/kuwahi/kudiriki), cool (kuzizima/kufanya baridi), think (5 verbs), descend (3 verbs: kushuka, kuteremka, kuanguka), climb (kupanda, kukwea), receive (kupokea, kukubali), keep/save (6 verbs: kuweka, kutunza, kuhifadhi, kulinda, kuokoa, kuponya), vex (4 verbs: kuudhi, kusumbua, kuchokoza, kutukiza) • All 44 Homonym Groups (pp. 159–161): 1. k’aa (crab) / kaa (ember) / kukaa (stay); 2. k’amba (prawns) / kamba (rope); 3. k’anga (guinea-fowl) / kanga (dry branch); 4. k’ata (head-pad) / kata (ladle) / kukata (cut); 5. k’ima (monkey/price) / kima (minced meat); 6. k’ombe (clam shell) / kombe (platter); 7. k’onde (fist) / konde (cultivated plot); 8. k’ongo (eland/peg) / kongo (sickness); 9. k’opa (dried cassava) / kukopa (borrow); 10. k’ope (eyelashes) / kope (wick); 11. k’ofi (clap hands) / kofi (box ears with open hand); 12. k’oko (stone of fruit) / koko (mangrove/bush); 13. koto (mason's trowel) / koto (curved) / k’oto (hook) / k’oto (ground-nuts) / kikoto (whip); 14. k’uku (hen) / kuku (old/worn); 15. k’unde (beans) / kunde (mist); 16. k’ungu (almond tree/red plaid) / kungu (cooking pot); 17. k’uni (firewood) / kuni- (me); 18. k’utu (rust) / kutu (eared owl); 19. ch’ungu (ant) / chungu (cooking pot) / -chungu (bitter); 20. ch’upa (bottle) / kuchupa (leap); 21. mchungwa (orange tree) / mchunga (herdsman); 22. mto (pillow) / mto (river); 23. mt’u (man) / mtu (tamarisk tree); 24. mvi (grey hair) / mvi (arrow); 25. nt’a (wax/point) / nta (4); 26. nt’i (earth/country) / nt’i (earrings) / nti (chart); 27. nyungu (pot) / nyungu (curved); 28. p’aa (gazelle) / paa (roof) / kupaa (scrape/ascend); 29. p’aka (cat) / kupaka (smear); 30. p’amba (cotton) / kupamba (adorn); 31. p’ande (side) / pande (piece); 32. p’anga (sword/cave) / kupanga (rent/arrange); 33. p’epo (winds/spirits/paradise) / pepo (gale); 34. p’ete (ring) / pete (folded); 35. p’ima (fathom) / kupima (measure); 36. p’inde (bow) / pinde (bends); 37. p’wani (coast) / pwani (ebb); 38. t’aa (lamp/skate fish) / taa (obedience); 39. t’ako (buttock) / tako (heels); 40. t’ambi (vermicelli/wick) / tambi (locks of hair); 41. t’anga (sail) / tanga (mourning assembly) / kutanga (wander); 42. t’awa (frying-pan/fish) / kutawa (live in seclusion); 43. t’embo (palm-wine) / tembo (elephant); 44. tandu (centipede) / tandu (spider-web/top of rice) / t’andu (copal)",
      pronunciation: "k’a-a / ka-a / k’o-fi / ko-fi / ko-to / k’o-to / m-t’u / m-tu / n-t’i / p’a-a / pa-a / t’a-nga / ta-nga / t’a-ndu",
      context: "Mrs. F. Burt & Rev. W. E. Taylor, Swahili Grammar and Vocabulary (SPCK London, 1910, Part II, pp. 158–161)",
      audioFile: null,
    },
  }
);

// ── Complete Line-by-Line Specialized Entries from A. C. Madan's "Swahili-English Dictionary" (Clarendon Press Oxford, 1903, Book pp. i–xix, 1–238, 442 [PDF pp. 1–260 & 464–478]) ──
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["swahili"].push(
  {
    catId: "verbs-grammar",
    entry: {
      english: "A. C. Madan (1903, pp. iii–xix): 'Bantize Rather Than Arabize', Asterisk (*) Loanword System, 8 Principal Verb-Stem Forms (6 Causal & 5 Reciprocal Varieties) & Conspectus II (8 Noun Declensions D 1–D 8)",
      translation: "Preface (pp. iii–viii): Zanzibar city Kiunguja standard; Swahili ranked among the 12 most important modern world languages from Nigeria/Soudan to the Hottentot region; asterisk (*) marks all non-Bantu loanwords; principle to 'Bantize rather than Arabize' (citing Bishop Steere & Prof. Max Müller); authorities Kr. (Krapf 1882), Sac. (Sacleux 1891), Str. (Steere) • 8 Principal Verb-Stem Forms (pp. xi–xiii): 1. Primary Pr. (Ps. -w-, Neuter Nt. -k-/-ik-/-ek- in 3 uses: njia hii yaendeka / yaendekana); 2. Applied Ap. (-i-/-e-); 3. Causal Cs. (-z-/-sh-/-s-/-y- in 6 varieties: simple tazamisha, compulsive lipisha, permissive poteza, suasive fanyiza, passive/non-interfering limisha, consequential chukiza); 4. Reciprocal Rp. (-an- in 5 aspects: reciprocal pigana, connected tokana na / fuatana na, combined endana / liana, internal shikana / kazana, practicability -kana onekana / wezekana); 5. Reflexive Rf. (ji-); 6. Reduplicated Rd. (piga piga); 7. Reversive Rv. (-u-/-o-: pindua, fungua, kamua, zimua); 8. Stative St. (-am-/-aman-: inama, simama, fungama, shikamana) • Conspectus II (pp. xvi–xvii): D 1 (m/wa: mtu mwema huyu ampenda), D 2 (m/mi: mti mdogo huu waota), D 3 (ki/vi: kitu kizuri hiki chapendeza), D 4 (u, w/ny: uimbo mbaya huu wachukiza), D 5 (—/ma: kasha kubwa hili latosha), D 6 (—/—: kazi ngumu hii yachosha), D 7 (pa, p: mahali pembamba hapa pafaa), D 8 (ku, kw: kufa kutukufu huku kwasifiwa)",
      pronunciation: "ta-za-mi-sha / li-pi-sha / po-te-za / fa-nyi-za / li-mi-sha / chu-ki-za / pi-ga-na / o-ne-ka-na / pi-ndu-a / shi-ka-ma-na",
      context: "A. C. Madan, M.A., Swahili-English Dictionary (Clarendon Press Oxford, 1903, Preface, Introduction & Conspectus II, pp. iii–xix)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "29 Gift/Present/Bribe/Fee Terms (*Bakshishi, p. 21), 5 Wedding/Work Fees (*Ada, p. 3), 11 Sticks (Bakora, p. 21), 6 Gun Types (*Bunduki, pp. 31–32) & 6 Judicial Ordeals (Kiapo, p. 139)",
      translation: "29 Gift/Bribe/Fee Terms (p. 21): zawadi, tunu, hiba, atia, karama, kipaji, hidaya, takrima, ikiramu, sadaka, daka, nadhiri, kafara, mchango, ada, kilemba, ufito, kinyosha mgongo, kifungua mlango, kipa mkono, kiokozi, kiongozi, mlungula, rushwa, chichiri/kijiri, hongo, ubani, ubani waayarabu, jalidi (plus kiosha miguu p. 158 & mkalio p. 231) • 11 Sticks (p. 21): bakora, fimbo, ufito, gongo/kigongo, mbarango/kibarango, rungu/kirungu, mkongojo, mpiko, mpweke, kipigi, mtobwe • 6 Gun Types (pp. 31–32): bunduki ya jiwe/gumegume (flintlock), ya mrao (matchlock), ya kushindiliwa/fataki (muzzle-loader), ya kuvunja/kukunja (breech-loader), ya viasi (cartridge gun), ya midomo miwili/kasiba mbili (double-barrelled), ya kindoro/makoa • 6 Judicial Ordeals (p. 139): kiapo cha moto (red-hot iron), cha mkate (dry bread), cha sindano (red-hot needle), cha mibano (temple splints), cha mchele (dry rice), cha kibao (bread with Koran ink)",
      pronunciation: "ba-kshi-shi / za-wa-di / ki-le-mba / m-lu-ngu-la / ru-shwa / ba-ko-ra / bu-ndu-ki ya gu-me-gu-me / ki-a-po cha mo-to",
      context: "A. C. Madan, M.A., Swahili-English Dictionary (Clarendon Press Oxford, 1903, pp. 3, 21, 31–32, 139, 158, 231)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "11 Dhow & Boat Types (Chombo, p. 44), 10 Dhow Ropes & 6 Binding Fibres (Kamba, p. 128), Mast Anatomy (Mlingoti, p. 237), Weaver's Loom (Kitanda cha mfumi, pp. 165–166), Carved Doors (Mlango, p. 236), Bow-Drill (Keke, p. 136) & Water-Pipe (Kiko, p. 149)",
      translation: "11 Dhow & Boat Types (p. 44): mtepe, betela, batili, bágala, bedeni, awesia, ghangi; dau, mtumbwi, galawa, mashua; merikebu, jahazi, meli, manowari • 10 Dhow Ropes & 6 Fibres (p. 128): amari (cable), baraji (main-sheet), hamarawi (tie), dasi (bolt-rope), henza (halyard), jarari (tackle), demani (lee-sheet), goshi (tack-rope), dakawa (tow-rope), mjiari/ujari (tiller-rope); fibres: ubugu, ugomba, ung'ong'o, ununu, ukindu, miwaa • Mast Anatomy (p. 237): mlingoti wa maji (bowsprit), wa mbele/omoni (foremast), wa kalme (mizzen-mast), resting on msitamu (false keel), fundo (cross-beam) & mwashiri (longitudinal timbers) • Weaver's Loom (pp. 165–166): mdoshi (treadle), faraka/mfariki (divider comb), marufaa (warp boards), kashabu (web rod), mladi/upanga (woof batten), mtande (warp), mshindio (woof) • Native Doors (p. 236): single screen of mwale (raphia mid-ribs) vs. double door of ubau boards with mfaa (centre strip), mwimo (side-posts), kizingiti (threshold/lintel) & kimandu (pivot-strip, p. 153) • Bow-Drill (p. 136): kekee (bit), msuka/msukano (handle), jivu (socket), uta (bow) • Water-Pipe (p. 149): kiko (shell), digali/mdakali (tubes), bori (bowl), shilamu (mouthpiece tube), malio ya kiko (bubbling)",
      pronunciation: "m-te-pe / ba-ga-la / a-ma-ri / ba-ra-ji / de-ma-ni / go-shi / m-li-ngo-ti / m-do-shi / ka-sha-bu / m-la-di / m-fa-a / ki-zi-ngi-ti",
      context: "A. C. Madan, M.A., Swahili-English Dictionary (Clarendon Press Oxford, 1903, pp. 44, 128, 136, 149, 153, 165–166, 236–237)",
      audioFile: null,
    },
  },
  {
    catId: "food",
    entry: {
      english: "8 Palm Species (Mnazi, p. 238), First- vs. Second-Press Coconut Cream (Kasimele, p. 132), 10 Rice Varieties (Mchele, p. 220), 5 Cassava Varieties (Mhogo, pp. 227–228), 14 Vegetables (Mboga, pp. 217–218), 8 Sweetmeats (Maandasi, p. 201), 18 Perfumes (Manukato, p. 208) & 19 English Loans (Manowari, p. 207)",
      translation: "8 Palm Species (p. 238): mnazi (coconut), mkindu (wild date), mwaa/mkoche/mkoma/mlala (Hyphaene), mpopoo (areca), mvumo (Borassus), mchikichi (oil-palm), mtende (date), mwale (raphia) • Coconut Milk & Cream (pp. 51, 132): bupu/punje la dafu, dafu la kukomba/kulamba, tonga la dafu; kasimele / tui la kasimele / tui halisi (thick first-press cream before water) vs. tui la nyuma / tui la kupopolea (second press with water) • 10 Rice Varieties (p. 220): sena, bungala, shindano, garafuu, kapwai, kifungo, madevu, mwanga, sifara, uchukwi (plus mashendea rice-pudding p. 211 & matabwatabwa thin gruel p. 212) • 5 Cassava Varieties (pp. 227–228): mhogo wa bungala & mweusi (sweet, reddish stems), wa kindoro, nangwa & mchungu (bitter, green stems) • 14 Vegetables (pp. 217–218): mboga ya pwani (Sesuvium portulacastrum), dodoki, nyanya, mumunye, figili, bilinganya, jimbi, kiazi, tango, uwatu, mchicha, yugwa • 8 Sweetmeats (p. 201): bumunda, ladu, kitumbua, mkate wa kumimina/kusonga/sinia/tambi/mofa, nyang'amba • 18 Perfumes (p. 208): marashi, meski, hal waridi, sandali, dasili, undi, ubani, dalia, maguba, rihani, garafuu, garafuu maiti, uvumba, liwa, buhuri, tibu, kivumbasi, afu • 19 English Loans (p. 207): manowari, boi, kala, shati, koti, fulana, sitoki, kabati, bira, burashi, daktari, stima, meli, afsa, dazin, inche, spitali, posta, afisi",
      pronunciation: "ka-si-me-le / tu-i ha-li-si / ma-she-nde-a / ma-ta-bwa-ta-bwa / ma-nu-ka-to / ma-no-wa-ri",
      context: "A. C. Madan, M.A., Swahili-English Dictionary (Clarendon Press Oxford, 1903, pp. 51, 132, 201, 207–208, 211–212, 217–218, 220, 227–228, 238)",
      audioFile: null,
    },
  }
);

// ── Complete Line-by-Line Specialized Entries from Mohamed Mwamzandi's "The pragmatics of Swahili relative clauses" (in Sibanda, Ngonyani, Choti & Biersteker, eds., Language Science Press, 2022, Ch. 13, pp. 227–246, DOI: 10.5281/zenodo.6393758) ──
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["swahili"].push(
  {
    catId: "verbs",
    entry: {
      english: "Mohamed Mwamzandi (2022, pp. 227–233, Examples 1–13): Three Swahili Relative Clause Strategies (Tensed, amba & General), TAM Restrictions, Subject Postposing, Disambiguation & Complexity",
      translation: "Three RC Strategies (p. 228): (1) Tensed RC: Askari [a-li-ye-ki-ongoza kikosi] ('1.policeman 1.SM-PST-1.SRM-7.OM-lead 7.squad' — 'The policeman who led the squad', SRM ye- prefixed after past tense li-); (2) amba RC: Askari [amba-ye a-li-ki-ongoza kikosi] ('The policeman who led the squad', SRM -ye suffixed to amba); (3) General relative: Askari a-ki-ongoz-a-ye kikosi ('The policeman who is leading the squad', SRM -ye suffixed after final vowel -a, time unspecified/present/habitual per Ashton 1944) • TAM Restriction (Keach 1985, p. 230): Tensed RCs occur only with past li, present na, future taka, and negation si; amba RCs occur with all TAM markers • Subject Postposing in Object RCs (p. 230): (6) Kikosi [amba-cho Kisaka a-li-ki-ongoza] (preverbal subject Kisaka) vs. (7) Kikosi [a-li-cho-ki-ongoza Kisaka] (postverbal subject Kisaka) • Critique of Russell's (1992: 125–126) Disambiguation Account (pp. 231–232): (8) Mwivi [a-li-ye-mw-ona mtoto] ('The thief who saw the child/whom the child saw'), (9) Mwivi [amba-ye mtoto a-li-mw-ona] ('The thief whom the child saw'), (10) Mwivi wa-li-ye-mu-ona watoto ('The thief who the children saw', disambiguated by Class 2 SM wa-), (11) Mwivi [amba-ye a-li-mw-ona mtoto] (postverbal subject remains ambiguous even with amba; resolved via Centering Theory, Grosz et al. 1995, Grosz & Sidner 1998) • Complexity & Accessibility Hierarchy (p. 232, Keenan & Comrie 1977, Ashton 1944: 310, Green 1996: 133): (12) Masanduku [amba-yo sisi watu wa-wili au wa-tatu ha-tu-wez-i]₁ [ku-ya-enua]₂ vs. (13) Masanduku [tu-si-yo-weza sisi watu wa-wili au watatu] ku-ya-enua]₂ ('Boxes which two or three of us cannot lift')",
      pronunciation: "a-ska-ri a-li-ye-ki-o-ngo-za ki-ko-si / a-mba-ye / a-ki-o-ngo-za-ye / ki-ko-si a-mba-cho ki-sa-ka / mwi-vi a-li-ye-mwo-na m-to-to / ma-sa-ndu-ku a-mba-yo",
      context: "Mohamed Mwamzandi, 'The pragmatics of Swahili relative clauses', in Sibanda, Ngonyani, Choti & Biersteker (eds.), Descriptive and theoretical approaches to African linguistics (Berlin: Language Science Press, 2022, Ch. 13, pp. 227–233, Examples 1–13)",
      audioFile: null,
    },
  },
  {
    catId: "adjectives",
    entry: {
      english: "Mohamed Mwamzandi (2022, pp. 233–238, Figure 1, Table 1 & Examples 14–24): Helsinki Corpus of Swahili (440 RCs), Restrictive vs. Non-Restrictive Distribution, RC Word Length & Fronted Adverbial Phrases",
      translation: "Methodology (p. 233): 440 RCs (285 tensed + 155 amba) extracted via Korp from the 25-million-word Helsinki Corpus of Swahili 2.0 (HCS 2.0, http://urn.fi/urn:nbn:fi:lb-2014032624) • Figure 1 (p. 234): amba RCs (N=155): 32 Restrictive (20.6%), 123 Non-restrictive (79.4%); Tensed RCs (N=285): 245 Restrictive (86.0%), 40 Non-restrictive (14.0%); Chi-squared χ²(1, N=440) = 180.89, p < 0.001 • Examples (14)–(18) (pp. 234–236): (14) Bwana yule [a-na-ye-sinzia] ('That man (over there) who is dozing'); (15) A-li-m-rud-i-a Adili [a-li-ye-kuwa a-na-pata fahamu] ('He got back to Adili, who was regaining his consciousness'); (16) Krapf [a-li-ye-li-tumikia dhehebu la C.M.S] ('Krapf, who served the C.M.S Christian denomination'); (17) A-li-kuwa a-me-va-li-a rubega nyeupe [amba-yo i-li-anza ku-poteza weupe wake] ('He was wearing a white cloak that had started to lose its whiteness'); (18) Mambo muhimu [[amba-yo ya-na-fanya]₁ [shairi li-it-w-e la Ki-swahili]₂] ('Important things that make a poem be called a Swahili poem') • Table 1 (p. 237): Mean (SD) RC length in words: amba Restrictive = 6.34 (3.25), amba Non-restrictive = 7.21 (3.71) (overall ~7 words); Tensed Restrictive = 3.09 (2.34), Tensed Non-restrictive = 4.25 (2.61) (overall ~4 words); ANOVA main effect of length on RM F(1, 440) = 197.49, p < 0.001, and on relative type F(1, 440) = 11.11, p < 0.001 • Examples (19a–b) & (20a–b) (p. 236): Mwanamke mjane amba-ye / a-li-ye-kuwa jirani yao (hapo zamani) ('A (woman) widow who was their neighbor [long ago]') • Fronted Adverbial Phrase kwa makusudi (pp. 237–238): (21) Wa-po wananchi [amba-o kwa makusudi wa-na-ziba mifereji] ('There are some citizens who deliberately block taps') vs. (22) *Wa-po wananchi kwa makusudi [wa-na-o-ziba mifereji] (ungrammatical) vs. (23–24) Wa-po wananchi [amba-o / wa-na-o-ziba mifereji kwa makusudi]",
      pronunciation: "bwa-na yu-le a-na-ye-si-nzi-a / a-di-li / kra-pf / ru-be-ga nye-u-pe / mwa-na-mke m-ja-ne / kwa ma-ku-su-di wa-na-zi-ba mi-fe-re-ji",
      context: "Mohamed Mwamzandi, 'The pragmatics of Swahili relative clauses', in Sibanda, Ngonyani, Choti & Biersteker (eds.), Descriptive and theoretical approaches to African linguistics (Berlin: Language Science Press, 2022, Ch. 13, pp. 233–238, Figure 1, Table 1 & Examples 14–24)",
      audioFile: null,
    },
  },
  {
    catId: "phrases",
    entry: {
      english: "Mohamed Mwamzandi (2022, pp. 238–246, Table 2 & Examples 25–32): Effect of Grammatical Role and Topic (Continue vs. Shift Transitions), 20 Abbreviations & 27 References",
      translation: "Topic Preservation via Subject Postposing (pp. 238–239): (25a) Nyumba [a-li-yo-kaa Beneti]. (25b) I-li-kuwa ya Kiswahili kabisa, (25c) I-li-on-ek-an-a kuukuu ('The house which Beneti stayed. It was a typical Swahili house, it looked old'); (26) Adili a-li-vunja amri [a-li-yo-p-ew-a] ('Adili broke the command he was given') • Table 2 (p. 240, N=440): 1. HN = Subj, topic: 7 amba restr., 21 amba non-restr. (28) vs. 62 tensed restr., 8 tensed non-restr. (70), Total = 98 (χ²(1, N=98) = 18, p < 0.001, continue transition); 2. HN = Subj, non-topic: 1, 0 vs. 4, 1, Total = 6; 3. HN = Obj, topic: 10, 55 (65 amba) vs. 21, 15 (36 tensed), Total = 101 (shift transition); 4. HN = Obj, non-topic: 3, 24 (27 amba) vs. 94, 5 (99 tensed), Total = 126; 5. HN = PP, topic: 5, 18 (23 amba) vs. 9, 9 (18 tensed), Total = 41 (p > 0.05); 6. HN = PP, non-topic: 6, 5 (11 amba) vs. 55, 2 (57 tensed), Total = 68 (χ²(1, N=77) = 31, p < 0.001) • Discourse Examples (27)–(32) (pp. 240–242): (27) Waandishi [wa-li-o-fuata] wa-me-ach-an-a na m-tindo huu ('The writers who followed have abandoned this style (of writing)'); (28) [Waandamanaji wa-li-kaidi amri hiyo]₁ [na ku-wa-rush-i-a mawe polisi]₂ [amba-o wa-li-jibu mapigo]₃ [kwa ku-fyatua risasi za moto]₄ ('The demonstrators disobeyed the command and threw stones to the policemen who responded to the beatings (of stones) by shooting live bullets'); (29) Bali Rehema a-li-po-nyanyua macho ku-m-tazama Bikiza [a-li-ye-leta taarifa ya kifo]... ('But when Rehema raised her eyes to look at Bikiza who brought the meassage of death...'); (30) A-li-anza ku-safiri ili ku-epuka ghadhabu ya ndugu yake amba-ye a-li-u-kosa u-rithi huo ('He started traveling to avoid the anger of his sibling who had missed the inheritance'); (31) A-li-ji-ona katika nyumba kubwa sana i-li-yo-kuwa n-zuri ajabu ('He found himself in a very big house that was surprisingly beautiful'); (32) Katika hukumu i-li-yo-to-lew-a jana na Jaji Bernard Luand ('In a ruling that was given yesterday by Judge Bernard Luand') • 20 Abbreviations (p. 244): 1, 2, 3..., AGR, APPL, AUX, FUT, FV, INF, OM, ORM, PASS, PFV, PROG, PRS, PST, RECP, REFL, SBJV, SM, SRM, STV",
      pronunciation: "nyu-mba a-li-yo-ka-a be-ne-ti / wa-a-ndi-shi wa-li-o-fu-a-ta / wa-a-nda-ma-na-ji / re-he-ma / bi-ki-za / gha-dha-bu / u-ri-thi / hu-ku-mu / ja-ji be-rna-rd lu-a-nd",
      context: "Mohamed Mwamzandi, 'The pragmatics of Swahili relative clauses', in Sibanda, Ngonyani, Choti & Biersteker (eds.), Descriptive and theoretical approaches to African linguistics (Berlin: Language Science Press, 2022, Ch. 13, pp. 238–246, Table 2 & Examples 25–32)",
      audioFile: null,
    },
  }
);

// ── Complete Line-by-Line Specialized Entries from Joost Zwarts, Andrew Chelimo & Prisca Jerono's "The reflexive in Kalenjin: Its syntactic status and semantic functions" (in Huang, Kaldhol, Lim, Rose & Struthers-Young, eds., ACAL in SoCAL, Language Science Press, 2024, Ch. 21, pp. 539–556, DOI: 10.5281/zenodo.11210482) ──
if (!JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["kalenjin"]) {
  JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["kalenjin"] = [];
}
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["kalenjin"].push(
  {
    catId: "adjectives",
    entry: {
      english: "Joost Zwarts, Andrew Chelimo & Prisca Jerono (2024, §§1–3, pp. 539–544, Examples 1–4): Syntactic Status of Kalenjin kee(y) as an Enclitic Word (Not a Suffix), ATR Opacity, Endo-Marakwet NT Corpus (1,815 Tokens) & Lexicalised Incorporations",
      translation: "Phonology & Orthography (pp. 539–541): pronounced [kɛː], [kɛːj], or Pökoot [kɛːx]; spelled keey in Endo-Marakwet & Tugen, kee in Keiyo, and in Kipsigis keen with pronouns vs. kee with verbs (fn. 8, p. 546); Kalenjin Union Bible writes no space before kee(y) vs. Marakwet, Pökoot & Sabaot Bibles which write a space; Endo-Marakwet Bible marks +ATR with macrons on <ā, ē(ē), ō(ō)> and writes long +ATR <a> as <oo> • Endo-Marakwet NT Corpus Counts (p. 541 & fn. 1): 1,815 relevant occurrences of keey = 1,653 tokens written as a separate word + 162 non-separate tokens in karkeey ('be like'), cheepaykeey ('prostitute(s)') & peerkeey ('virgin(s)') (fn. 1: kumwoochikeey 'they said to one another' is a typo without a space for kumwoochi keey; keeyaat [kee-yaat] and kikeeyeeng' [ki-keeyeeng'] are the only 2 irrelevant hits) • Proof 1 — Intervening Words (Ex. 1, Endo-Marakwet, p. 542): (1a) kaa-kee-syaak nyuun keey ('RP-1PL-judge then REFL' — 'we judged ourselves then', adverb nyuun intervenes); (1b) a-kuskuus aneen keey ('1SG-make.weak 1SG REFL' — 'I make myself weak', subject pronoun aneen intervenes) • Proof 2 — Opacity to ATR Vowel Harmony (pp. 542–543, Lodge 1995, Rottland 1982: 229 fn. 2): 1PL object suffix -eech harmonises (neet-eech 'teach us' vs. +ATR toorēt-ēēch 'help us') and contemporative/sociative suffixes -yō & -sōōt share +ATR (ng'eet 'stand up' → ng'ēētyō, ng'ēētsōōt, plural subjects only, Zwarts et al. 2023), whereas keey stays −ATR in neet keey and toorēt keey, like pronominal suffixes in Ex. (2) (Endo-Marakwet, p. 542): (2a) āmāraa 'I want', kichāmēēchaan 'we love', āchāmēēkwaan 'you (pl.) love', keemwaanyēēn 'you (sg.) say'; (2b) wēēchiikwaak 'their brothers', mālāktiing'waang' 'their reward', koonēētiisyeenyiin 'his teaching'; (2c) kookeelyaanoonēē 'that star', taapukeechoochēē 'those flowers', paannyēēnyi 'this moment' • Lexicalised Incorporations (p. 543): karkeey 'be like' → karkayiit 'become like' (vowel shortening) & kārkēēyin 'likeness' (+ATR harmony), and takes a second kee(y) in Ex. (3) (Keiyo, p. 543): i-kerkeéy keè laak-o-chu ('CL2-be.like REFL child-PL.DEF-these' — 'These kids are copying each other (to look the same)', fn. 5: Class 2 prefix i- [Rottland 1982: 123] is causative/transitive); cheepaykeeyaan 'prostitute' (?pay 'feed'), peerkeeyaan 'virgin' (?peer 'keep whole'), kimekeyaan / kipekeyaan 'selfish person' • Enclitic Fragment Test (Ex. 4, Keiyo, p. 544): (4a) Ki-ng'war ng'oo cheepyoos-ee? Ki-ng'war kee. ('Who did the lady scratch? (She scratched) herself.'); (4b) Ki-iim ng'oo piichooto? Ki-iim kee. ('Who did those people annoy? (They annoyed) each other.' — kee cannot stand alone without the verb)",
      pronunciation: "ke-e / ke-ey / ke-ex / kaa-kee-syaak nyu-un ke-ey / a-ku-sku-us a-ne-en ke-ey / ka-rke-ey / i-ke-rke-ey ke-e laa-ko-chu / ki-ng'war ke-e",
      context: "Joost Zwarts, Andrew Chelimo & Prisca Jerono, 'The reflexive in Kalenjin: Its syntactic status and semantic functions', in Huang et al. (eds.), ACAL in SoCAL (Berlin: Language Science Press, 2024, Ch. 21, §§1–3, pp. 539–544, Examples 1–4)",
      audioFile: null,
    },
  },
  {
    catId: "phrases",
    entry: {
      english: "Joost Zwarts, Andrew Chelimo & Prisca Jerono (2024, §4, pp. 544–546, Examples 5–10): Non-Verbal Hosts of kee(y) — Nominalised Verbs with -aa(p), Non-Deverbal Nouns, Preposition po ('of'), Conjunction ākōō & Emphatic Pronouns",
      translation: "Nominalised Verbs + Linker -aa(p) ('of') (Ex. 5, p. 544, fn. 6: Endo-Marakwet drops final p of -aap before consonants, +ATR -oo): (5a) Endo-Marakwet: las-at-aa keey ('praise-NMLZ-of REFL' — 'praise of oneself, i.e. pride'); (5b) Endo-Marakwet: riip-ot-oo keey ('guard-NMLZ-of REFL' — 'guarding of oneself, self-control'); (5c) Tugen: toorēt-ēēt-aap keey ('help-NMLZ-of REFL' — 'the helping of each other, collaboration'); (5d) Tugen: wiirun-ēēt-aap keey ('throw-NMLZ-of REFL' — 'the falling, lit. throwing of oneself') • Contrasted with Internal Lexicalised Nominalisation (Ex. 6, Tugen, p. 545): las-keey-nat-ēēt ('praise-REFL-NMLZ-TH.DEF' — 'praise of oneself, i.e. pride', from las keey 'boast') • Non-Deverbal Possessed Noun (Ex. 7, Tugen, p. 545): ki-sooman Kiptuum ak Kipēēt kitaapuu-syek-aap keey. ('DP-read Kiptum and Kibet book-PL.DEF-of REFL' — 'Kiptum and Kibet read their own/each other’s books.') • Preposition po ('of') (Ex. 8, Tugen, p. 545): ma-po keey chii. ('NEG-of REFL person' — 'No man is an island (lit. of himself).') • Ungrammaticality After Conjunction/Preposition ākōō ('and, with') (Ex. 9, Endo-Marakwet, p. 545): (9a) a-riir-ee keey ākōō laak-ōō-k-wook ('1SG-weep-APPL REFL and child-PL-DEF-2PL' — 'Weep about yourself and your children') vs. (9b) *a-riir-ee laak-ōō-k-wook ākōō keey (because keey must cliticise directly to the verb) • Emphatic Personal Pronouns (Ex. 10, Endo-Marakwet, p. 546; cf. Cherang'any íɲɛ́ɛ́-kɛ̂y 'he himself' in Mietzner 2016: 76 & Kipsigis keen with pronouns in fn. 8): (10a) inyēēn keey. ('3SG REFL' — '(Who came?) Only him.'); (10b) a-ku-ng'ālool-chi akwaaneek keey ('and-3-talk-DAT 3PL REFL' — 'and he spoke to them privately')",
      pronunciation: "la-sa-taa ke-ey / rii-po-too ke-ey / too-re-teet-aap ke-ey / wii-ru-neet-aap ke-ey / las-ke-ey-na-teet / ma-po ke-ey chii / i-nyeen ke-ey",
      context: "Joost Zwarts, Andrew Chelimo & Prisca Jerono, 'The reflexive in Kalenjin: Its syntactic status and semantic functions', in Huang et al. (eds.), ACAL in SoCAL (Berlin: Language Science Press, 2024, Ch. 21, §4, pp. 544–546, Examples 5–10)",
      audioFile: null,
    },
  },
  {
    catId: "verbs",
    entry: {
      english: "Joost Zwarts, Andrew Chelimo & Prisca Jerono (2024, §5, pp. 546–549, Examples 11–17): Reflexive, Reciprocal & Middle Voice Taxonomy (Kemmer 1993), Inanimate Anticausatives & Contemporative -yō Reciprocals",
      translation: "Reflexive & Reciprocal (Ex. 11, Endo-Marakwet, p. 546): (11a) ā-ng'ālool-ēē keey. ('1SG-talk-APPL REFL' — 'I am talking about myself.'); (11b) a-taakwees keey ('2PL-greet REFL' — 'greet each other!') • Middle Voice Comparison with German sich (Ex. 12a–h, p. 547, Kemmer 1993: 3, Heine 2000, Toweett 1979: 336): neet keey = lit. 'teach oneself', usually non-deliberate 'learn' • Endo-Marakwet Middle Categories (Ex. 13, p. 547): (13a) spontaneous: takus keey 'drown', wiiru keey 'fall'; (13b) collective: rum keey 'gather', ruruuk keey 'gather', tuuyo keey 'gather', pēēsyō keey 'separate'; (13c) non-translational motion: walak keey 'turn', ng'uruuk keey 'bend'; (13d) translational motion: wēēchi keey 'go', ng'unta keey 'walk quickly'; (13e) emotion keey: iim keey 'worry', las keey 'boast'; (13f) grooming: uun keey 'wash', laak keey 'dress' • Keiyo Middle Categories (Ex. 14, p. 548): (14a) change of posture: tēēp kee 'sit down', teleel kee 'stand up'; (14b) body activity: sus kee '(body) itch', liil kee '(teeth) ache' • Keiyo Inanimate Anticausatives (Ex. 15, p. 548): (15a) roong' kee kārātiik ('pour REFL blood-DEF' — 'the blood gushed'); (15b) choor kee asiis ('steal REFL sun' — 'the sun rose'); (15c) tum kee pēy ('pour REFL water' — 'water poured'); (15d) mil kee koyin ('turn REFL stone-PL' — 'stones fell') • Natural Reciprocity via Contemporative Suffix -yō & -sōōt (Ex. 16–17, Endo-Marakwet, p. 549, Rottland 1982: 127): (16) choomnyō 'reconcile', chuunchuunnyō 'disagree', tuupchō 'be brothers', pēēsyō 'disperse', pooryō 'fight', tēēniityō 'be equal', tuuyō 'meet'; (17a) si-mē-ē-tēēniit-yō keey nkōō chiitō aka ('PURP-NEG-1SG-make.equal-CONT REFL with person other' — 'so that you do not compare yourself with somebody else'); (17b) kii nēē kaa-kuu-tuu-yō keey pi-choochēē ('DP when RP-3-meet-CONT REFL people-those' — 'when those people had assembled')",
      pronunciation: "a-ng'a-loo-lee ke-ey / a-taa-kwe-es ke-ey / ta-kus ke-ey / wii-ru ke-ey / ro-ong' ke-e ka-ra-tiik / cho-or ke-e a-si-is / choo-mnyo / tuu-yo",
      context: "Joost Zwarts, Andrew Chelimo & Prisca Jerono, 'The reflexive in Kalenjin: Its syntactic status and semantic functions', in Huang et al. (eds.), ACAL in SoCAL (Berlin: Language Science Press, 2024, Ch. 21, §5, pp. 546–549, Examples 11–17)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Joost Zwarts, Andrew Chelimo & Prisca Jerono (2024, §§6–7, pp. 549–556, Examples 18–24): Arity Reduction ($P_2 \\rightarrow P_1$, $P_3 \\rightarrow P_2$), Dative -chi Licensing, Reduplicated Reciprocals, Pronoun Intensifiers & 5 Non-Leipzig Abbreviations",
      translation: "Arity Reduction ($P_2 + kee(y) \\rightarrow P_1$; $P_3 + kee(y) \\rightarrow P_2$, Ex. 18, Endo-Marakwet, pp. 549–550): (18a) si-ku-ng'ālool-chi keey ('PURP-3-talk-DAT REFL' — 'so that he talks to himself'); (18b) ku-ung'-a keey akwaaneek ('3-hide-APPL REFL 3PL' — 'he hid himself for them'); (18c) chēēr-ēēn-ook keey ('strengthen-APPL-2PL REFL' — 'strengthen oneself with you') • Motion Verbs wō ('go sg.') & pa ('go pl.') Licensed by Dative -chi (Ex. 19, Endo-Marakwet, p. 550): (19a) a-ku-wēē-chi keey ('and-3-go.SG-DAT REFL' — 'and he went away'); (19b) paani kaa-ku-pēē-chi keey saang' ('when RP-3-go.PL-DAT REFL outside' — 'when they had gone outside') vs. (19c) ku-pa saang' ('3-go.PL outside' — 'to go outside') • External Possessor Saturated via Dative -chi (Ex. 20, Keiyo, p. 551): (20a) ki-ng'wār-chin-i kee John patay. ('DP-scratch-DAT-IPFV REFL John back' — 'John was scratching his own back.'); (20b) ng'wār-chin-i kee pātooy. ('scratch-DAT-IPFV REFL backs' — 'They were scratching each other’s backs.') • Reduplicated Reciprocal Pronoun Adjuncts (Ex. 21–22, Tugen, pp. 551–552): (21a) ki-chām-ē keey acheek eng' acheek. ('We love each other.'); (21b) o-chām-ē keey okweek eng' okweek. ('You love each other.'); (21c) chām-ē keey icheek eng' icheek. ('They love each other.'); (22) ak o-tēpii eng' kaalyeet okweeke eng' okweeke ('and 2PL-stay in peace you and you' — 'and stay in peace with one another') • Non-Arity-Reducing Pronoun Intensifier & Anaphor (Ex. 23–24, Keiyo & Tugen, pp. 552–553; fn. 11 contrasts Cherang'any demonstrative kɛy [Mietzner 2016: 165] / Endo-Marakwet kay): (23) Keiyo: Ā-ām-iisyēy ani-kee. ('1SG-eat-INTR-IPFV 1SG-REFL' — 'I am eating by myself/alone/without help.'); (24a) Tugen: Ki-mwoo-chi Mary tiip-ik akopo ichee-keey. ('DP-tell-DAT Mary girl-DEF about 3SG-REFL' — 'Mary told the girls about themselves.'); (24b) Tugen: ki-sooman kitapuu-syek-aap ichee-keey. ('DP-read book-PL.DEF-of 3SG-REFL' — 'They read each other’s books.') • Typology & Conclusion (§7, pp. 553–556): Three-way polysemy (reflexive + middle + emphatic) challenges König & Siemund (2000: 59) and Kemmer (1993: 196) (cf. Juang in Patnaik & Subbarao 2000: 843 & Oceanic in Moyse-Faurie 2017); Datooga & Omotik have a singular/plural contrast (Rottland 1982: 151, 191; fn. 12: Gertrud Schneider-Blum & Alice Mitchell); no known nominal origin of kee(y); competing emphatic items kipaat & ākityōōn; Kouneli (2021) on Kipsigis -ak • 5 Non-Leipzig Abbreviations (p. 555): CL2 (class 2), CONT (contemporative), DP (distant past), RP (recent past), TH (theme vowel)",
      pronunciation: "a-ku-wee-chi ke-ey / ki-ng'war-chi-ni ke-e john pa-tay / a-che-ek eng' a-che-ek / a-am-ii-syey a-ni-ke-e / i-che-e-ke-ey / ki-pa-at / a-ki-tyo-on",
      context: "Joost Zwarts, Andrew Chelimo & Prisca Jerono, 'The reflexive in Kalenjin: Its syntactic status and semantic functions', in Huang et al. (eds.), ACAL in SoCAL (Berlin: Language Science Press, 2024, Ch. 21, §§6–7, pp. 549–556, Examples 18–24)",
      audioFile: null,
    },
  }
);

// ── Complete Line-by-Line Specialized Entries from Mikael Samson & R. G. Darroch's "A History of the Pokomo by Mikael Samson — Continued, with an Introduction and Notes by R. G. Darroch" (Journal of the East Africa Natural History Society, Vol. XVII, Nos. 5 & 6 [79–80], Sept. 1944, pp. 370–394 & Full-Page Sketch Map) ──
if (!JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["pokomo"]) {
  JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["pokomo"] = [];
}
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["pokomo"].push(
  {
    catId: "culture-history",
    entry: {
      english: "Mikael Samson & R. G. Darroch (1944, pp. 370–373, 383–384 & Notes 1–4 pp. 391–392): Introduction, Four Indigenous Self-Designations (Oromo, Wata, Elwana, Munyo), The Story of the Kalindi (Namboo & Mangwe/Gomeni), Hidabo Hill (Mrio / Kina Inti), Shaka (Waungwana wa Mashaa), Liongo Fumo & Ozi, Family Mlango Land Tenure & 1900 Headmen",
      translation: "Author & Context (pp. 370–371): Written by Mikael Samson (a Pokomo of the Buu tribe, clerk in the D.C.'s Office, Kipini) as a continuation of his 'History of the Malachini', translated and annotated by D.C. R. G. Darroch (at Kipini from 1940); though all Pokomo speak a Bantu language with many Hamitic (Oromo) words, none of the Upper Pokomo clans show a Bantu origin (except escaped slaves like Kamba Machika Mwemwere in Zubaki), whereas the Malachini show a coastal/Giriama origin and learned canoe-making from the Upper Pokomo; Ndera elders estimated they gave up speaking Oromo 3+ generations ago • Four Indigenous Endonyms (pp. 371, 380 & Note 11 p. 393): Oromo (not Galla), Wata (not Boni), Elwana (not Malakote), and Munyo (not Korokoro; Oromo use Munyo for all river tribes) • Kalindi Migration & 2 Clans (pp. 371–372 & Note 1 p. 391): Arabia → Pate → Mungini (Mundini) → crossed sea to Lamu under Chief Hidabo (who named Hidabo Hill south of Lamu; Mr. Talbot-Smith records pre-Islam settlement Mrio at the foot of Hidabo inhabited by the Kina Inti ['clan of the country'] of Pokomo affinities; Lamu named from the Banu Lami of Zeid Ali, c. A.H. 39 / A.D. 661; Alice Werner derived Kalindi from Dindi ['a hole where fish lie'], whereas Swahilis & Pokomo told Darroch Dindi = 'belly of a freshwater fish', so Darroch suggests Kilindi ['deep water', cf. Kilindini] or Kina Inti) → Shaka near Kipini; 2 Kalindi clans: Namboo (first to Shaka) & Mangwe (or Gomeni) • Liongo Fumo, Shaka & Ozi (p. 372, 383–384 & Notes 2–3 pp. 391–392): Shaka (Waungwana wa Mashaa, from the Shah of Persia) was founded under Harun al Rashid in A.H. 121 (or ~50 yrs later per Talbot-Smith); Fumo Liongo arrived later and his son Liongo flourished under Pate Sultan Omar Mohammed (A.D. 1306–1344), built Ozi (ancestors of Ozo Swahilis at Kau), and was refused land purchase because Pokomo cultivated land belongs inalienably to the family lineage (mlango, Note 3 p. 392); Sango Vere later brought the Kalindi from Liongo at Shaka to the Tana (p. 384) • Mahindini Bottle Boundary, Chara & 1900 Headmen (pp. 372–373, 384 & Note 4 p. 392): Chama & Abanyata showed the first European at Golbanti the Kalindi–Yunda boundary at Mahindini (near Kibusu, formerly covered by Lakes Matomba [Gana] & Ashaka Babo) where he buried a bottle (later replaced from Oda); Kalindi grew 2 rice crops a year in Chara; in 1900 first D.C. Mr. Anderssen listed Kalindi Headmen Kiriole at Meli (between Anasa & Semikaro) and Rangi at Bura (Golbanti), plus Ndera Headman Kombo Mitambo at Belezoni (from Pokomo Mbelezo 'a canal' on the Sheriko) over ~1,000 Upper Pokomo in Chara; 1944 Chara Headman: Abdalla Bashora (Ndera)",
      pronunciation: "ka-li-ndi / na-mbo-o / ma-ngwe / hi-da-bo / ki-na i-nti / sha-ka / li-o-ngo fu-mo / m-la-ngo / m-be-le-zo / be-le-zo-ni",
      context: "Mikael Samson & R. G. Darroch, 'A History of the Pokomo by Mikael Samson — Continued', Journal of the East Africa Natural History Society Vol. XVII, Nos. 5 & 6 (1944, pp. 370–373, 383–384 & Notes 1–4 pp. 391–392)",
      audioFile: null,
    },
  },
  {
    catId: "travel",
    entry: {
      english: "Mikael Samson & R. G. Darroch (1944, Map between pp. 372–373 & pp. 373–374, 384–385): Full-Page Sketch Map of All 14 Tana River (Galana Maro) Sections, Three Dried Buu Rivers (Milaoni/Magogoni, Ngambwa, Mbewee), Sanye Hippo Covenant & Verbatim Kipokomo Lament Song for Chikovu (p. 385)",
      translation: "Map Collaborators & Legend (Map & pp. 371, 373): Scaled down from Mikael Samson's 4+ foot map drawn with Garsen school-teacher Johana Daji and Garsen elder Luluta; symbols: wavy line (Rivers), crossed line (Motor Road), dashed line (Tribal Boundaries), (Z) (Lakes, Z = Ziwa), • WENJE (Present Villages), x CHIKOVU (Deserted Villages), dotted underline MANGULO (Villages at which Fights Occurred),BUU (Tribes) • All 14 Map Sections (North to South along TANA R. [GALANA MARO]): 1. ELWANA; 2. MALALULU (• MASABUBU, • HARANI, • KUMBI, MALBATI, • DAFOMA, • BOHONI, • GALOMANI); 3. ZUBAKI (x KADADA [fight], • HOLA [fight], • CHANANI); 4. NDURA (• TURO, • PUMWANI, x MANGULO [fight], • MAZUNI); 5. KINAKOMBA (• FANJUA, • MASALANI, • KIAPONI [fight]); 6. GWANO (• VUKONI, • WENJE, x MAKERE, x KONGOLANI); 7. NDERA (BAUMO •, (Z) L. LEMU, KOZI •, (Z) L. MAKANGE, x BWOBWOYA [fight], x KIRUNGU [fight], KINYADU •); 8. MWINA (• BUBESA, • MWINA); 9. BUU (MAREMBO •, PUMWANI •, NKOMBENI); 10. KULESA (KULESA •); 11. NGATANA (WEMA •, (Z) L. JANGE, MULANJA, (Z) MUKOMA, GADE •, MUHONI •, DUMI •, x KOPOLE, MIHAJA, MLANGO WA SIMBA); 12. BUU (GARSEN •, x CHIKOVU, (Z) L. GANA; BUU/SANYE; MILAONI R. with x MWANA Paka, (Z) L. MASEWA, x MBUA; MAGOGONI R.; road to NYANGORO & WITU); 13. YUNDA (MAHINDINI x, (Z) L., NGAMBWA R., SINGWAYA); 14. BUU & KALINDI (ASHAKA, BABO (Z), NGAO •, GOLBANTI •, ODA •, (Z) L. SAGEMA, CHARA, SEMIKARO •, ANASA •, SHERIKO R., OLD TANA R., PRESENT TANA R., • KAU, • OZI, • KIPINI, WAUNGWANA WA MASHAA [LIONGO'S VILLAGE] x, RAS SHAKA) • Three Dried Rivers of the Buu (pp. 373–374, 384): Driven by Oromo from Singwayu (near Kismayu) to Mungini, then west to Mowa on the (1) Milaoni / Magogoni River (Nkombeni to Kau, sharing a reciprocal hippo-meat covenant with the Sanye and monopoly over hunting at Mulanja & Mkoma), then (2) Ngambwa River (starting at Chahadugu/Koloni, principal village Chikovu; 1941 Kopole/Mihaja forest dispute won by Buu), then (3) Mbewee River (Muhoni, Murikicha, Nyangu, Gawisa, joining at Mbalahini ~6 hrs walk from Ngao), then Ngao to Kikomo above Anasa • Verbatim Kipokomo Lament Song for Chikovu & 4:00 A.M. Flight Under Chief Buko (p. 385): 'Mumaitha kadza ndio odu / Mbuu ni mzuka, endani / mukayowe kumea mani kubfaa / miima, azi na mfungu za / Witu nazo huziona, mudzi / wehu mudzi wa mbinguni / hutamisaa huichamba huyawe / na manya.' ('If an enemy comes the Buu have bad news, go and look, the grass has grown, it has climbed the hills, we have seen the portions of Witu, our village was of the heavens, we are troubled, we did not want to be lost out in the bush.') — evacuated at 4:00 a.m. via Kokane Gobu, Mlango wa Simba & Lake Tamaso in Nyangoro forest to Ngao under Chief Buko",
      pronunciation: "mi-la-o-ni / ma-go-go-ni / nga-mbwa / chi-ko-vu / m-be-we-e / mu-mai-tha ka-dza ndi-o o-du m-bu-u ni m-zu-ka",
      context: "Mikael Samson & R. G. Darroch, 'A History of the Pokomo by Mikael Samson — Continued' (1944, Full-Page Sketch Map between pp. 372–373 & pp. 373–374, 384–385)",
      audioFile: null,
    },
  },
  {
    catId: "family",
    entry: {
      english: "Mikael Samson & R. G. Darroch (1944, pp. 374–378, 385–386 & Notes 5–9 pp. 392–393): Upper Pokomo Part I — The Ndera & The Gwano: Bilingual Bantu/Oromo Clan Tables, Kinyadu Village, 'Abamogo' Greeting Covenant, Battle of Kirungu (Mwenye Era) & The Treacherous War of Jilo Bune",
      translation: "Ndera Clan Table & Origins (pp. 374–377, 385–386): 1. Kinamoto or Kinamaziwani = Oromo Karayu (Ndera claim Oromo Ana Kare at Kimbu above Baumo [with Ana Bake = Barareta Oromo & Ana Dima = Kofira Oromo], whereas Gwano elders & Mikael prove the Ndera ancestor was Ana Abio near Lake Lemu because Ngaji rites pass from Gwano to Ndera); 2. Kinambare = Oromo Karara (Maro Diribo of Ndura Kinaghaiba & Buya Bula); 3. Kinankaru (Kinankare) = Oromo Sukana (Malalulu Dambala Kakea); 4. Kinauru = Oromo Gamadho (from Mwina, where half remained as Kinahabfa; at Kinyadu village, Herbae bought Rehema for slave Magombe and Bawata Tutu bought Kimtovu for slave Hamadi); 5. Kinanato (descended from escaped Oromo slaves Gashiro & woman Hadiribo [place Hadiribo above Baumo] freed by Ana Abio) • Ndera Boundaries & Wars (pp. 374–377 & Note 7 p. 392): Boundary with Mwina at Lake Makange opposite Kozi (given to girl Wamboo, or at Hombe/Gagani), later above Bubesa; boundary with Gwano at Malbe Walu (east) & Kongolani (west), with Mtumitu shambas owned by Gwano Koya Gafo; Somali attack on Bwobwoya (~50 yrs before 1944); Battle of Kirungu where Ndera refused free 'maro' canoe relay and Gwano warrior Buya Gafo killed Arab leader Mwenye Era • Gwano Clan Table & Origins (pp. 375–378, 386 & Note 6 p. 392): 1. Kinauru = Oromo Gamado (Ana Dima at Takafu near Makere, with Ana Bake = Kofira Oromo & Ana Kare = Migo Oromo who went to Kamba country; rebuilt in Red & Black septs by Chief Dadho Moroa); 2. Kinadyasi = Oromo Karayu (Kokane Didha); 3. Kinakale (sept Karara Dulo) = Oromo Karara (escaped slave Dulo near Wenje); Oromo–Pokomo watering & ferrying pact (1 ox per season for clearing watering places, 1–2 oxen for ferrying stock, Oromo performing the slaughter, Note 6 p. 392) • Ana Dima & Sango Vere's Meeting ('Abamogo', p. 376 & Note 8 p. 392): Ana Dima followed his lost canoe downstream to Lake Lemu (or Mitole on the Ngambwa) and met Sango Vere (or his father Vere); they greeted each other as Abamogo ('wayfarer'), still used between Malachini & Upper Pokomo today • The Treacherous War of Jilo Bune & Kiaponi Battle (pp. 377–378 & Note 9 pp. 392–393): Oromo chief Jilo Bune sent a drugged bull and lured the Gwano unarmed into a thorn stockade ('Oh, a wonderful thing has happened. Many birds have settled on our chief. Come and see'); only Chief Dadho Moroa and his 2 wives (plus hidden witness Herbae Gafo) survived; later all Upper Pokomo (Gwano & Zubaki in vanguard, Malalulu in rear, recalled by Chalalu Herbae) recovered Oromo cattle from Somalis at Kiaponi and shot Somalis with arrows until they crossed at Masalani",
      pronunciation: "a-ba-mo-go / ki-na-ma-zi-wa-ni / ka-ra-yu / a-na di-ma / a-na ba-ke / a-na ka-re / a-na a-bi-o / da-dho mo-ro-a / ji-lo bu-ne",
      context: "Mikael Samson & R. G. Darroch, 'A History of the Pokomo by Mikael Samson — Continued' (1944, pp. 374–378, 385–386 & Notes 5–9 pp. 392–393)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Mikael Samson & R. G. Darroch (1944, pp. 378–394 & Notes 5, 10–13): Upper Pokomo Part II — Kinakomba, Ndura, Zubaki & Malalulu Clan Tables, Four Zubaki Wars, Galana Maro, Chief Mukaraji Maro's Genealogy, Elwana, Kijo/Ngaji, Waganga, Muunguni, Missions (1884–1887) & Government (1895–1944)",
      translation: "Kinakomba Clan Table (pp. 378, 386–387): 1. Kinambolo and Mandoyo = Oromo Karara (Boran Ali Gutu with 2 wives at Mankombe/Dakacha below Kiaponi, who met Ndura upstream & Gwano at Batani/Vukoni); 2. Kinamuyani (Kinamuywani) = Oromo Garjeda (Zubaki Ware Hamesa & Gamahara Wachu); 3. Kinamulunde = Oromo Uta; 4. Kinambura = Oromo Wayu (Boran Kokane Ware & Malalulu); plus Kinanguu (rivalry between Lower Kinakomba at Kiaponi with chiefs/Ngaji house vs. Upper Kinakomba at Masalani) • Ndura Clan Table (pp. 378–379, 387): 1. Sindo wa Ndura = Oromo Karayu (Galole Hirimani & Gababa Kitole at Sagari near Pumwani); 2. Kinambare = Oromo Uta (Ndera Mzuka Wayu); 3. Kinanato = Oromo Karara (Ndera Omara Oda & 1944 chief Dadho Bahola); 4. Kinagasere = Oromo Baretu (Madawa son of Zubaki Humacha Jilo of Hara near Chanani); 5. Kinajasi = Oromo Hajeji (Gwano Ntungulu & Ade Abas); 6. Kinambolo = Oromo Karara (Wario Gobu & uncle Herbae Bahola); 7. Kinambura = Oromo Wayole (Herbae Bwoe); Somali attacks at Mangulo (during Ngaji feast) & Mazuni; Fanjua–Mazuni club fight stopped by Christian teacher Ibrahim Kitere; secret night cultivation • Zubaki Clan Table & 4 Wars (pp. 380–382, 387–388 & Note 5 p. 392): 1. Uta = Uta (Oromo Hiye at Hola); 2. Ilani = Ilani (Gavere); 3. Karayu = Karayu (Mtabashi; Boran Royal Clan of Chief Gedu in Ethiopia); 4. Jaba = Jaba (Munyo/Korokoro); 5. Kinagasere = Baretu wa Maji; 6. Kinakaliani = Garjeda (Maro Wayu → Dulo Maro → Sarumbe & escaped Kamba slave Machika Mwemwere); 7. Meta = Meta (Komora Eba); 8. Kinagaiba = None? (Wayu Abae); 9. Karara = Karara (Ndera Komora Diribo); 4 Wars: (1) killing Oromo chief Gungumi at Hola, (2) Chief Wayu Umuru defeating Wata in banana shambas (survivors fled to Lake Jange near Wema as guests of Mwina and became the Ngatana, Note 10 p. 393), (3) Chief Karayu Wayu shooting swimming Somalis at Kadada, (4) 2-day Kamba siege & burning of Kadada stockade (alarm shouted by Goyoi, witnessed by blind elder Malim Jilo); Tana River name Galana Maro ('Maro's river', cf. Oromo Galana & Giriama Ganala, pp. 387–388) • Malalulu Clan Table & Elwana (pp. 382–383, 388 & Note 11 p. 393): All Hamitic names: 1. Wayu Duko & 2. Wayu Chireti (Gatokombo [real name Maro, found eating mud = tokombo in Malalulu dialect] at Malbati below Kumbi → sons Igu, Ibae & driven-out Kimtu); 3. Uta (Bakai Galgalo at Fumboni above Dafoma → Galgalo & Kofa); 4. Meta (Kuyo at Bohoni → Bashora & Didha); 5. Dulo/Karara (Boran Dulo at Malbati below Harani → Saluba & Guyo); 6. Garjeda (Boran Ganyare at Haretha opposite Kumbi → Babuya & Dae); 7. Ilani (Malalulu [→ Bauru] & brother Bashora [→ Muda] at Galomani); Chief Mukaraji Maro's 6-generation genealogy: Gatokombo (Maro)—Igu—Maro—Dadho—Maro—Mukaraji; Elwana above Malalulu circumcise women • Religions, Missions, Islam & Government (pp. 388–394 & Notes 12–13): Honey-barrel drum Ngaji & Kijo elders (protecting forests/big trees; 7th-month pregnancy farming exemption, Note 12); Waganga wizards/healers; God ('the old man of the woods', Note 13) in Muunguni (heavens) & 'God's portion' before harvest; 1884 British Methodist Mission at Golbanti & Swedish Mission at Kulesa; 1887 German Neukirchen Mission under Wietts at Ngao (Chief Buko Doyo, lieutenant Kadiko Herbae, first elder convert Abadula Gerera; 22+ churches by 1944); Islam via Chara & Riatha Mosque in Lamu; 1895 arrival of first D.C. Mr. Anderssen ('Bwana Muchinjeni') at Ngao, 14,000+ population, LNC bank account shared with Oromo & 1941 petition for a single Superior Chief",
      pronunciation: "ga-la-na ma-ro / ga-to-ko-mbo / to-ko-mbo / mu-ka-ra-ji ma-ro / ki-jo / nga-ji / wa-ga-nga / mu-u-ngu-ni / bwa-na mu-chi-nje-ni",
      context: "Mikael Samson & R. G. Darroch, 'A History of the Pokomo by Mikael Samson — Continued' (1944, pp. 378–394 & Notes 5, 10–13)",
      audioFile: null,
    },
  }
);

// ── Complete Line-by-Line Specialized Entries from Robert Needham Cust's "A Sketch of the Modern Languages of Africa, Accompanied by a Language-Map", Vol. I (London: Trübner & Co., 1883, Book pp. [i]–xvi, 1–287 + 16-p. Trübner Catalogue + Portrait Plates I–VI [PDF pp. 1–340]) ──
if (!JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["borana"]) {
  JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["borana"] = [];
}
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["borana"].push(
  {
    catId: "culture-history",
    entry: {
      english: "Robert Needham Cust (1883, Vol. I, Ch. IX.C.II 'Galla or Orómo', pp. 122–125): Habitat (10° N to Dana/Tana River Mouth), 5–6 Million Speakers, Autonym Orma/Oromo vs. 'Sons of Galla', Huma Royal Dynasty, 5 Chief Dialects (Wakefield at Ribé & Krapf 1850), Charles New's Wata 'Helot Races' & Primary Authorities",
      translation: "Habitat & Population (pp. 122–123): 5 to 6 million speakers stretching from the southern frontier of Abyssinia (10° N. Lat.) to the mouth of the Dana (Tana) River near Mombása, bounded on the East by Somáli and on the West by Berta and Dinka; the Huma royal dynasties of U-Ganda (where King Mtesa speaks Galla alongside Nyoro, Ganda, Swahíli, Soga, Zulu & Arabic, pp. 16, 123), U-Nyoro, and Karagwe belong to the Galla race • Autonyms (pp. 12, 122): D'Abbadie records that in war they call themselves 'Sons of Galla', while their national self-designation is Orma or Oromo ('men', matched with Bantu abántu on p. 12) • Five Chief Dialects Enumerated by Krapf & Schmidt (pp. 122–123): 1. North of Shoa (chiefly Mahometans); 2. East of Shoa toward Somáli-Land & Dankáli-Land; 3. South of Shoa on the River Hawash (analyzed by Schmidt in ZDMG from Krapf's St. Matthew); 4. On the River Godjeb (the dialect of Karl & Lorenz Tutschek's 1844–1845 Munich Grammar & Dictionary); 5. The Equatorial or South Galla (Bararetta / Tana River) Dialect in Kenya (investigated by Rev. Thomas Wakefield at Ribé near Mombása and recorded in Krapf's 1850 Vocabularies of Six Languages) • Hunter 'Helot Races' (Wata, pp. 122–123): Rev. Charles New notes hunting Helot Races among the Galla who pay tribute and speak Galla though ethnologically distinct • Authorities & Cust's Hand-Copied MS for Wakefield (pp. 123–125): Krapf (1840 Elements of the Galla Language [hand-copied for Wakefield at Ribé by Cust from the sole RGS copy, pp. 124–125], 1842 Vocabulary, 1850 Six Languages, Bible translations); F. W. Newman (Berber analogies); W. H. I. Bleek (click/ejective sounds); Bishop G. Massaia (1867 Latin Grammar forcing Amháric & Oroman into identical sections); Karl & Dr. Lorenz Tutschek (1838–1845 Munich with 4 redeemed slaves); overrun Christian kingdom of Enaréa (visited by Jesuit Fernandez in 1613 & D'Abbadie in 1845, where coffee grows wild); and Lango or Kidi on the Somerset Nile (met by Speke, Grant, Felkin & Emin Bey, p. 125)",
      pronunciation: "or-ma / o-ro-mo / hu-ma / go-djeb / da-na / ri-be / wa-ta / e-na-re-a / la-ngo / ki-di",
      context: "Robert Needham Cust, A Sketch of the Modern Languages of Africa, Accompanied by a Language-Map, Vol. I (London: Trübner & Co., 1883, Ch. I pp. 12, 16 & Ch. IX.C.II pp. 122–125)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Robert Needham Cust (1883, Vol. I, Front Matter, Catalogue, Plates I–VI & Chs. I–XI, pp. [i]–xvi, 1–287): Complete Architecture of Volume I — 31 Scholar/Explorer Portraits, 6-Family Classification (Semitic, Hamitic, Nuba-Fulah, Negro, Bántu, Hottentot-Bushman), Ravenstein's Prize Map & Reinisch's Two Ethiopic-Hamitic Clusters",
      translation: "Provenance & Trübner Catalogue (PDF pp. 3–22): 16-page Trübner's Oriental Series Catalogue dated '500—17/9/83' (25 published works + 4 in preparation); Merensky-Biblioteek Universiteit van Pretoria copy (stamped 10 DEC. 1941, Klasnommer ZTP.2-64, Registernommer 68959 CUST); dedicated to King Leopold II of the Belgians • All 6 Portrait Plates (31 Portraits): Plate I (Lepsius, Koelle, Schön, F. Müller, Bleek, Latham); Plate II (J. L. Wilson, F. W. Newman, Krapf, Barth, Saker, Christaller); Plate III (Stanley, Moffat, Nachtigall, Grout, Steere, Ravenstein); Plate IV (Norris, Livingstone, Hanoteau, Faidherbe, Rebman, Reinisch); Plate V (Beke, Baikie, Duveyrier, Archdeacon H. Johnson, Archdeacon D. Crowther, Schweinfurth); Plate VI (p. 212: 'HIC NIGER EST. SAMUEL CROWTHER, D.D.') • Classification & Chapters in Vol. I: Chs. I–VII General Methodology, History, Foreign/Mixed Languages, Classification (Friedrich Müller's 6 Main Divisions mapped in 6 colours by E. G. Ravenstein; Krapf's Nilo-Hamitic/Nilotic & Nigro-Hamitic/Nigritic terms, p. 54; Cooley's Zinjian, p. 54), Materials & Scripts (pp. 1–80); Ch. VIII I. Semitic Family (pp. 81–93, 10 Languages: Punic, Arabic + 8 Ethiopic [Gíz, Amháric, Tigré/Tigrínna, Harári, Argobba, Gafat, Kambat, Gurague]); Ch. IX II. Hamitic Group (pp. 94–140, 28 Languages: Egyptian [Koptic], Libyan/Berber [9 languages], and Ethiopic [18 languages, with Reinisch's Cluster 1: Bishári, Saho, Dankálí, Somáli, Galla & Cluster 2: Bilin, Agau of Lasta, Agaumidr, Falásha, Kamant, p. 119]); Ch. X III. Nuba-Fulah Group (pp. 141–161, 17 Languages: 16 Nuba [incl. V. Kwáfi & VI. Masai] + Fulah with 5 dialects); and Ch. XI IV. Negro Group (pp. 162–287, 194 Languages across Atlantic [67], Niger [38], Central [59] & Nile [31, incl. XXI. Kavirondo])",
      pronunciation: "lep-si-us / koel-le / krapf / stee-re / ra-ven-stein / rei-nisch / crow-ther",
      context: "Robert Needham Cust, A Sketch of the Modern Languages of Africa, Accompanied by a Language-Map, Vol. I (London: Trübner & Co., 1883, Book pp. [i]–xvi, 1–287 [PDF pp. 1–340])",
      audioFile: null,
    },
  }
);

if (!JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["somali"]) {
  JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["somali"] = [];
}
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["somali"].push({
  catId: "culture-history",
  entry: {
    english: "Robert Needham Cust (1883, Vol. I, Ch. IX.C.I 'Somáli', pp. 119, 121): Reinisch's First Ethiopic-Hamitic Cluster, Regio Aromatifera Habitat (Bab el Mandal & Cape Guardafui to the Bantu Frontier), Krapf's Testimony on Linguistic Unity & Early Authorities (Rigby, Burton, Hunter, Prætorius, Revoil)",
    translation: "Reinisch's First Cluster (p. 119): Prof. Leo Reinisch groups Somáli in Cluster I of the Ethiopic Sub-Group of Hamitic alongside A. Bishári (To'bedauie), B. Saho, C. Dankálí (Afar), D. Somáli, and E. Galla (Orómo) • Habitat & Character (p. 121): Occupies the entire Eastern Horn (Regio Aromatifera) from the Straits of Báb el Mandal round by Cape Guardafui to the confines of the Bántu Language-Field; claim descent from Arabia, nomadic pastoralists and Mahometans, 'full of fun and humour'; Rev. Dr. J. L. Krapf wrote to Cust that they 'consist of a multitude of tribes speaking one Language' • Bibliography (p. 121): General C. P. Rigby (1850 Bombay Geographical Society Grammatical Note, Sentences & Vocabulary; 1866 Ethnological Society essay on Somáli origin), Capt. Sir R. F. Burton (1856 First Footsteps in East Africa Grammatical Note & Vocabulary), Major F. M. Hunter (1880 Aden Grammar with English-Somáli & Somáli-English Vocabulary), Baron von der Decken, Prof. Franz Prætorius (ZDMG), and M. Georges Revoil (whose 1881 Venice Congress Greek-affinity hypothesis Cust refutes)",
    pronunciation: "so-ma-li / bi-sha-ri / sa-ho / dan-ka-li / gal-la / rig-by / bur-ton / hun-ter",
    context: "Robert Needham Cust, A Sketch of the Modern Languages of Africa, Vol. I (London: Trübner & Co., 1883, Ch. IX.C.I, pp. 119, 121)",
    audioFile: null,
  },
});

JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["maasai"].push({
  catId: "culture-history",
  entry: {
    english: "Robert Needham Cust (1883, Vol. I, Ch. X.A.V–VI 'Kwáfi' & 'Masai', pp. 149–152): Autonyms Loikób / Eloikób ('Men'), Krapf's 1854 Engútuk Eloikób Vocabulary, Erhardt's 1857 Enguduk Iloigob Vocabulary, J. T. Last's 6,000-Word Humba Lexicon, Arúsha & Ndorobo 'Helot Races', Joseph Thomson's 1883 RGS Expedition & Lepsius's 6 Grammatical Features",
    translation: "V. Kwáfi (Loikób / pl. Eloikób — Engútuk Eloikób, pp. 149–151): Habitat from south of the Galla down to the slopes of Mount Kenia and westward toward Victoria Nyanza; autonym Loikób, pl. Eloikób ('Men'; Swahili corruption Wa-Kwáfi from Loi-Kwáfi); subject Helot Races speaking an unknown language; Krapf's 1854 Tübingen Vocabulary of the Engútuk Eloikób, Grammatical Note, 1 John Ch. 1 & Texts compiled at Mombása from a Kwáfi slave (reviewed by Lepsius & Ewald); Rev. J. T. Last's 6,000-word vocabulary of the Humba tribe at Mamboia; Archdeacon J. P. Farler at Magíla confirming Kwáfi and Masai understand each other thoroughly; Rev. T. Wakefield at Ribé & Rev. Charles New on the Arúsha as Kwáfi descendants subject to Masai • VI. Masai (Loikob — Enguduk Iloigob, pp. 151–152): Intervene between Bántu tribes west of Mombása and the eastern shore of Victoria Nyanza; neither practise nor tolerate slavery (attacking Arab child-kidnapping caravans); subject Helot Races including the hunting Ndorobo (Ch. XIII, Vol. II); Joseph Thomson's 1883 RGS expedition from Mombása to Victoria Nyanza supplied by Cust with all printed books in Masai and Kwáfi; J. T. Last's visit via Nguru; Wakefield & Farler's caravan routes; Rev. J. Erhardt's 1857 Württemberg Vocabulary of the Enguduk Iloigob (edited by Krapf, first announcing Victoria Nyanza and the snow-capped mountains); and Lepsius's (1880 Nuba Grammar Preface) 6 structural features of Masai (1. no Bantu class prefixes/alliteration/nasalization, 2. verb-prefixed personal pronouns, 3. prepositions, 4. post-nominal genitive, 5. verb between subject & object, 6. consonant-final words)",
    pronunciation: "loi-kob / e-loi-kob / en-gu-tuk e-loi-kob / en-gu-duk i-loi-gob / hum-ba / a-ru-sha / n-do-ro-bo",
    context: "Robert Needham Cust, A Sketch of the Modern Languages of Africa, Vol. I (London: Trübner & Co., 1883, Ch. X.A.V–VI, pp. 149–152)",
    audioFile: null,
  },
});

if (!JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["luo"]) {
  JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["luo"] = [];
}
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["luo"].push({
  catId: "culture-history",
  entry: {
    english: "Robert Needham Cust (1883, Vol. I, Ch. XI.D 'Nile Sub-Group', pp. 273–287): XXI. Kavirondo (Dholuo on Victoria Nyanza, pp. 284–285), Charles New's (1873) & Thomas Wakefield's (1882–1883) Kavirondo Vocabularies, and First Comparative Proof of Affinity with Shilluk (Luoh/Lwo), Lúr & Shúli",
    translation: "XXI. Kavirondo on Victoria Nyanza (pp. 284–285): Marks the southernmost equatorial advance of the Nile Sub-Group along the eastern shore of Victoria Nyanza in Kenya; first brought to knowledge by Rev. Charles New (Life, Wanderings, and Labours in Eastern Africa, 1873), who published a Vocabulary collected via a Swahíli interpreter and described the Kavirondo as numerous, divided into many clans along the eastern shores of Victoria Nyanza, and speaking a language entirely different from the Bántu family; confirmed by missionaries at Mombása and Mamboia, and by Rev. Thomas Wakefield at Ribé, who just before returning to East Africa sent Cust a manuscript Kavirondo Vocabulary compiled from the lips of a competent Swahíli caravan traveller along the Mombása–Masai–Kavirondo route (soon to be traversed by Joseph Thomson's 1883 RGS expedition) • Comparative Lwo / Luoh Affinity across the 31 Nile Sub-Group Languages (pp. 275–285): Cust demonstrates the marked lexical affinity between the Kavirondo (Dholuo) Vocabulary and I. Shilluk alias Dyur (Behr, self-designation Luoh or Lwo, with branches Bellanda & Dembo, ~1,000,000 speakers in 3,000 villages along the White Nile, pp. 275–276), XVIII. Lúr (self-designation Luoh on Albert Nyanza, documented by Emin Bey, pp. 282–283), and XX. Shúli (including Gani, Wa-Nyóro Shefalu at the Victoria Nile falls, Obbo & Farajoke, documented by Grant, New, Emin Bey & Baker, pp. 283–284)",
    pronunciation: "ka-vi-ron-do / lu-oh / lwo / shil-luk / dyur / bel-lan-da / dem-bo / lur / shu-li / she-fa-lu",
    context: "Robert Needham Cust, A Sketch of the Modern Languages of Africa, Vol. I (London: Trübner & Co., 1883, Ch. XI.D, pp. 273–287)",
    audioFile: null,
  },
});

JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["swahili"].push({
  catId: "culture-history",
  entry: {
    english: "Robert Needham Cust (1883, Vol. I, pp. 11–16, 42–43, 48, 54, 74, 76–77, 84–85, 119, 211): Zanzibár Omanite Arabic (Prætorius), Sawáhil / Káfir / Kabáil Etymologies, East Coast Gujarati & Kachchi Mercantile Diglossia (Bhattia, Borah & Khoja), Steere's Critique of Bagamóyo Pidgin Swahili, Scripts & Frere Town Appeal",
    translation: "Arabic & Etymologies (pp. 54, 84–85): Prof. Franz Prætorius (ZDMG) proves the Arabic dialect of Zanzibár agrees with Muskát (Oman); Arabic origin of Sawáhil ('the shores'), Káfir ('the unbeliever') & Kabáil ('the tribes', p. 85); Cooley's Zinjian from Persian Zinj / Greek Azania → Zanzibár ('Country of the Blacks', p. 54) • Hindustáni, Gujaráti & Kachchi on the East African Coast (pp. 42–43, 76): Sir Bartle Frere reports that from Zanzibár round by Mozambík, Madagascar, and up to Cape Guardafui nearly every shopkeeper was an Indian—Hindu Bhattia and Mahometan Borah and Khoja from Bombay—keeping accounts in Gujaráti or Kachchi scripts; Col. Grant met a Zanzibár agent speaking Hindustáni at Karagwe; Bishop Steere requested a missionary knowing Gujaráti for Zanzibár • Bagamóyo Pidgin Critique (p. 48): Bishop Steere's warning against Roman Catholic missionaries at Bagamóyo publishing catechisms and Bible extracts in a coastal trade pidgin without grammatical inflections • Scripts & Orthography (pp. 74, 77, 119): Antiquated East Coast Arabic character 'most unsuited to the sounds of the Swahíli Language' (p. 74); Krapf and Steere each adopted a different Roman transliteration on the East Coast, both differing from Lepsius's Standard Alphabet (p. 77); Krapf found dead on his knees by his bedside in Nov. 1881 with corrected proofs of his Swahíli Dictionary on his table (p. 119); and Cust's appeal (p. 211) to collect vocabularies from released slaves at Frere Town (Mombasa) and Zanzibár just as Koelle did at Sierra Leone",
    pronunciation: "sa-wa-hil / ka-fir / ka-ba-il / zin-ji-an / bhat-ti-a / bo-rah / kho-ja / gu-ja-ra-ti / kach-chi",
    context: "Robert Needham Cust, A Sketch of the Modern Languages of Africa, Vol. I (London: Trübner & Co., 1883, pp. 11–16, 42–43, 48, 54, 74, 76–77, 84–85, 119, 211)",
    audioFile: null,
  },
});

// ── Complete Line-by-Line Specialized Entries from Mervyn W. H. Beech's "Aids to the Study of Ki-Swahili: Four Studies Compiled and Annotated" (London: Kegan Paul, Trench, Trübner & Co., Ltd., [1918], Book pp. v–xvi, 1–159 [PDF pp. 1–184]) ──
JOHNSTON_1902_SUPPLEMENTARY_ENTRIES["swahili"].push(
  {
    catId: "culture-history",
    entry: {
      english: "Mervyn W. H. Beech (1918, Preface pp. v–vii & 'Swahili Traditions as to Themselves' pp. xi–xvi): Higher Standard Exam, 5 Named Authorities, Three Stages of Swahili Origins, Mombasa's Thelatha Taifa & Tissa Taifa, Malindi's 6 Towns (1017 A.H. & 1271 A.H.), Pemba's Ki-Jezirati & Coastal Social Stratification",
      translation: "Preface (pp. v–vii, M. W. H. B., MOMBASA): Written for the East Africa Protectorate Higher Standard Examination (noting that an official fluent in clear Arabic script can decipher only ~1 in 6 coastal letters); quotes Ovid ('Video meliora proboque deteriora sequor', p. vi); thanks A. C. Hollis, Rev. John Hamshere (H.), Sir Harry Johnston, Chief Justice Hamilton, and 5 primary Arab/Swahili authorities: (1) late Sheikh Muhamad bin Salim bin Hamis 'l-Mazarui (Liwali of Takaungu), (2) Sharif Ahmad bin Uusuf (Kadhi of Fort Smith), (3) Sharif Said Hasan bin Aloï (of Pemba), (4) Muhamad bin Salim, and (5) Shaaban bin Muhamad (of Mombasa) • First Stage (pp. xi–xiv): Arabic sahil ('coast') → pl. suahil → Swahiliyi ('of the coasts'); 500-year-old Swahili MS on Persian rice paper (fn. xii-1); Mombasa's Thelatha Taifa (Miji mitatu = Three Tribes): Wa-Kilindini (Arab Jilindan-iyi near Maskat or Bantu Ki-lindi-ni), Wa-Changamwe (Syrian Taghamaw-iyi or ku-changanya), Wa-Tangana (Shiraz or ku-tangamana); Tissa Taifa (Miji Tissia = Nine Tribes) & Northern/Island Towns: Wa-Jomvu (Jauf in Yemen), Wa-Kilifi (Kulfah bin Hanthalah near Mecca), Wa-Mtwapa (Tabia near Maskat & Syria), Wa-Pate (~10 families from 'Ajam = Persia; subdivided into Wa-Pate, Nabahani, Ma-sharifu, 'Arabs' [Abdi Salam], Wa-Kilio [Nyika], Wa-Pokomo), Wa-Siyu (Wa-Siyu, Wa-Famau, Wa-Katwa, Ma-Sharifu), Wa-Gunia (Persians from Kangoni near Shiraz + Sudanese Muüli of Bana), Wa-Malindi (called Muludh, renamed Malindi out of compliment to Vasco da Gama's wife Linda; 5th town destroyed with Gedi, Kilifi & Ngomeni in 1017 A.H. after attempting to enslave the Galla and being overwhelmed by Witu; 6th town dates from 1271 A.H.), Wa-Shimazi (Ahmad bin Ali Shemzi), Wa-Faza (Faza near Halab/Aleppo), and Wa-Pemba (settled from Shiraz in 1771 A.D.; dialect Ki-Jezirati < Jezirah 'island') • Second & Third Stages (pp. xiv–xvi): Wa-Shambara (Nyassa slaves at Kilwa & Zanzibar); Suria (slave-concubine; Arab's son = 'Arab') vs. Mzalia (pl. wa-zalia, child of hybrid female + native or of two slaves); masikini (slaves freed in expiation of sins); Wa-ungwana (sg. Mu-ungwana < ku-ungana); Ma-Haji (Islamized Africans, incl. Ngombeni & Kidutani); Mazrui ('children of their mothers') and Mambrui",
      pronunciation: "swa-hi-li-yi / the-la-tha tai-fa / tis-sa tai-fa / ki-je-zi-ra-ti / m-za-li-a / wa-u-ngwa-na / ma-ha-ji",
      context: "Mervyn W. H. Beech, Aids to the Study of Ki-Swahili: Four Studies Compiled and Annotated (London: Kegan Paul, Trench, Trübner & Co., Ltd., 1918, pp. v–xvi)",
      audioFile: null,
    },
  },
  {
    catId: "phrases",
    entry: {
      english: "Mervyn W. H. Beech (1918, Study I 'Ki-Swahili Writing', pp. 1–55): 28-Letter Ajami Alphabet (p. 5), Missing Bantu Consonants (p, ch, v, g, ñg, ny), 10 Arabic Compliments, All 16 Original Letters (pp. 12–43), 6 Ki-Amu Coconut-Toddy Terms in Letter 16 & 4-Stream Ki-Jizirat Story (pp. 44–55)",
      translation: "Ajami Orthography (pp. 3–7): Arabic script lacks p (written ب ba or beginner پ), ch (ش shin or Lamu/Bajun چ), v (ف fa or beginner ڤ), hard g (غ ghain), ñg, and ny, drops n before consonants (ku-andika كُودِكَ, ñgombe غُمْبِ / غُوبِ, nyumba يُمْبَ), and uses hamzah (ء) to distinguish uli-o-pata (أُلِوْبَاتَ) from uli-yo-pata (أُلِيَبَاتَ) and Mombasa baada-e from Zanzibar baada-ye; 28-letter alphabet table (Alifu to Ya, p. 5); left-to-right addition sum 479 + 123 + 647 = 1249 (p. 6); 12 Swahili/Arabic months & 7 weekdays (p. 8); 10 Arabic compliments ('l-Hathwarat to 'l-maatham), sanat 1332 h. vs. sanat 1914 m. & 3 salutation templates (pp. 8–10) • All 16 Original Letters (pp. 12–43): From Takaungu (Liwali Muhamad bin Salim, Khamis bin Said, Karani Athman bin Jafar on mzee wa Gonjora & mjeuri wa Roka), Mombasa (Tijara binti Mzee 1911 Exam, Ahmad bin Ali 1912 Exam, Shaaban bin Muhamad), Dagoreti (Beech, Sheikh Abudi horse fall), Fort Smith (Kadhi Sharif Ahmad bin Yusuf, Hasani bin Hamis, Sharif Hasan on Somali Adani vs. Kikuyu Wanguri), Naivasha (Abdallah bin Seif), and Ngongo (Muhamad bin Muhedin-l-Bajuni) • 6 Ki-Amu Coconut-Toddy & Oil Terms in Letter 16 (pp. 42–43): 1. Kishinda (empty scraped half coconut shell), 2. Shinda (half shell with 3 holes plugged with wood for measuring tembo = Ki-Mvita upawa/kasi), 3. Inda (cotton wool soaked in mafuta ya ucho [= Ki-Mvita uto]), 4. Ufucho / infucho (wooden skimming stick for toddy), 5. Kitunguu (ladle for tembo), 6. Mai tini (= maji chini, scum of oil/fat) • 4-Stream Ki-Jizirat Story (pp. 44–55): 'Asiye hurumiwa ni Mngu usimhurumie' ('For whom God has no pity have no pity', Ramadhan 5 sanat 1330)",
      pronunciation: "ki-shi-nda / shi-nda / i-nda / u-fu-cho / ki-tu-ngu-u / ma-i ti-ni / a-si-ye hu-ru-mi-wa ni m-ngu",
      context: "Mervyn W. H. Beech, Aids to the Study of Ki-Swahili (London: Kegan Paul, 1918, Study I, pp. 1–55)",
      audioFile: null,
    },
  },
  {
    catId: "travel",
    entry: {
      english: "Mervyn W. H. Beech (1918, Study II 'Ki-Swahili Stories', pp. 57–113): 'Banawasi' (pp. 58–85), 8-Point Swahili Wind Compass Diagram (p. 69), 7 Uses of Connective -ka- (fn. 59-9), Ughaibu Betel Box (fn. 81-7), Note on Past Tense Infixes (p. 85) & 'Fathili za Punda ni Mashuzi' (pp. 86–113: 8 Daily Time-Divisions & Complete Smithy Lexicon)",
      translation: "Story 1 'Banawasi' (pp. 58–85, 67 footnotes): Banawasi (< Abu-nawasi), kichinja-mimba ('last-born child', fn. 61-7), mwikanga ('dappled ox', p. 65), maturuma & vifundo ('boat ribs & seat-knots', p. 71), fumba ('sleeping-mat bag', p. 76), ughaibu (betel mixture of timbaku, chokaa, katu, tambuu/mjengo, and popoo in a Jaluba box; chewing lime & tobacco only = kuvuata, fn. 81-7), and 'Hiyari hushinda utumwa' (p. 82) • 8-Point Swahili Wind Compass Diagram (p. 69): N Kasikazi, NE Maṯalai Kasikazi, E Maṯalai (Mashariki / maawio / Mawao / Matokeo), SE Maṯalai Kusi, S Kusi, SW Mmande Kusi, W Mmande (Mangaribi / kutwa maiwio / matweo; westerly morning creek breeze), NW Mmande Kasikazi • 7 Uses of Connective -ka- (fn. 59-9: Narrative, Final, Subjunctive, Future, Infinitival, Consecutive, Imperative) & Note on Past Tense Infixes (p. 85: Mombasa perfect -na- vs. Zanzibar progressive -na-, and Waungwana women's kana for kama) • Story 2 'Fathili za Punda ni Mashuzi' (pp. 86–113, 78 footnotes): 8 Daily Time-Divisions (fn. 93-6: alafagiri 5:30 a.m., sabahe 6:30 a.m., adhuhuri/mtanakati/mtikati noon, alasiri 3 p.m., ahurubu shems 5:30 p.m., mangaribi 6 p.m., liisha 7:30 p.m., leli/usiku makungu midnight, usiku wa manane 2 a.m.); Complete Blacksmith & Goldsmith Lexicon (fn. 95-3: sonara vs. mjua chuma/mfuaji, kiwanda, kweleo, nyundo, kiriba, fuawe, kalibu, ruwao, tindo, kuvukuta, mkando, chomwe, macheche); and the 7 Mosque Thieves' Vows (pp. 98–99)",
      pronunciation: "ba-na-wa-si / ka-si-ka-zi / ma-ta-la-i / ku-si / m-ma-nde / u-ghai-bu / so-na-ra / fu-a-we / ka-li-bu",
      context: "Mervyn W. H. Beech, Aids to the Study of Ki-Swahili (London: Kegan Paul, 1918, Study II, pp. 57–113)",
      audioFile: null,
    },
  },
  {
    catId: "culture-history",
    entry: {
      english: "Mervyn W. H. Beech (1918, Study III 'Enigmas and Aphorisms' pp. 115–132 & Study IV 'Magic in Pemba' pp. 133–159): All 67 Mafumbo, 4 Enigmas/Tambo, 30 Kitendawili, Ngoma ya Pepo, Kikoa kia Wachawi & Sihiri Charms (Sharif Hasan's Fugue to Baghdad & Mariamu under the Kunge Tree)",
      translation: "Study III (pp. 115–132): All 67 numbered Aphorisms (Mafumbo, Nos. 1–57 & 62–67 in Ki-Jizirat, Nos. 58–61 in Ki-Mvita, pp. 117–126), all 4 Ki-Mvita Enigmas/Tambo (pp. 126–128: Kinyume 'Mbarakita pecheu waju kalikito nasa', Ughaibu riddle, Tui/Mbuzi/Nyasi river-crossing tambo, and 15 doctors & Jinn sour-lime tambo), all 7 Ki-Jizirat Kitendawili (p. 129), and all 23 Ki-Mvita Kitendawili (pp. 129–132) • Study IV 'Magic in Pemba' (pp. 133–159 in parallel English & Ki-Jizirat): (1) Ngoma ya Pepo (pp. 134–143: bau/Furukani 'Ewe Ramli we nibainia haki usibaine batili', 3 yungi water-lilies, tumba ya mkadi, utanga white mat, patient as kiti ['chair'], heirloom wand cheo, Pepo wa Tari sea-spirits, vishuka vs. kijio feasts, 7th-day hupasua ulimi & mchomozi 'Finder' spirit incised with chale, 27 Mwerisho [Shaaban] kufunga with vue & mafusho, and post-Ramadhan kiano ['Plate'] feast); (2) Kikoa kia Wachawi / Witches' Sabbath (pp. 144–149: up to 3,000 naked wachawi at midnight Wed./Sat. in Mava/Uchanjaa, rotating chango [tango] family victim called ñgombe beaten with human shin-bones miundi that hutebanya, ransom with pweza cuttle-fish, emetic vuo [Mpacha & Mwenyika nguu], and 3 Arabic grimoires Babu, Mjarabati & Shems-l-maarifa); and (3–5) Sihiri Charms (pp. 150–159: Mviru footprint charm, Mvunja huruma shroud charm at star-hours Kamari/Shemshi, nongo [Malay daki] crossroads charm, njiwa pigeon spell that drove Sharif Hasan bin Said Aloi from his 3,000 Mikirafu clove trees in Pemba via Zanzibar and Mombasa to Baghdad for 4 months [fn. 153-1], Mviza tree charm, Mvuma nyuki [Mnamia kumbweni], Msasa [Mcheka wanawake], Mwinga Jinni, and burying luck under the dead kunge ['Blasted One'] tree, illustrated by Mariamu binti Saidi Ahmad Sharifu bewitched by Mwalimu Jafari)",
      pronunciation: "ngo-ma ya pe-po / ki-ko-a ki-a wa-cha-wi / mi-u-ndi / vu-o / m-ja-ra-ba-ti / m-vi-za / ku-nge",
      context: "Mervyn W. H. Beech, Aids to the Study of Ki-Swahili (London: Kegan Paul, 1918, Studies III & IV, pp. 115–159)",
      audioFile: null,
    },
  }
);
