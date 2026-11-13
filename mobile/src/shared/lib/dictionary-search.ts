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
            const rest = t.slice(commaIdx + 3).trim();
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
