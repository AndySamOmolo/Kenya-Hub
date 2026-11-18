import {
  ALL_DICT_METAS,
  DICT_META_MAP,
  type DictEntry,
  type Dictionary,
} from "@/data/dictionaries/metadata";
import langData from "@/data/kenya-languages.json";
import { getStoredContributions } from "@/lib/contributions";
import {
  invalidateDictIndex,
  type TranslationResultItem,
} from "@/lib/dictionary-search";

export type { TranslationResultItem };

export const CATEGORY_PAGE_SIZE = 50;
export const SEARCH_PAGE_SIZE = 50;
export const CONTACT_EMAIL = "contact@kenyahub.me";

type ContribDictEntry = DictEntry & { _userContrib?: boolean };

/**
 * Overlays approved community contributions (`status === "approved"` and `mergedToDictionary === true`)
 * from `localStorage` onto a loaded Dictionary in memory so approved entries immediately appear
 * in translator searches and category browsing, while stripping any previously injected entries
 * that were subsequently rejected or removed (`F-12`).
 */
export function applyApprovedContributionsToDict(dict: Dictionary): Dictionary {
  if (typeof window === "undefined") return dict;
  try {
    let modified = false;
    for (const cat of dict.categories) {
      const beforeLen = cat.entries.length;
      cat.entries = cat.entries.filter(
        (e) => !(e as ContribDictEntry)._userContrib
      );
      if (cat.entries.length !== beforeLen) {
        modified = true;
      }
    }

    const contributions = getStoredContributions();
    const langBase = dict.languageName.split("(")[0].trim().toLowerCase();
    const approved = contributions.filter((item) => {
      if ((item.status !== "approved" && item.status !== "pending") || item.type === "reviewer") {
        return false;
      }
      const itemLang = item.language.split("(")[0].trim().toLowerCase();
      return itemLang === dict.languageId.toLowerCase() || itemLang === langBase;
    });

    for (const contrib of approved) {
      const targetCatId = contrib.category || "phrases";
      const cat =
        dict.categories.find((c) => c.id === targetCatId) ||
        dict.categories.find((c) => c.id === "phrases") ||
        dict.categories[0];
      if (!cat) continue;

      const exists = cat.entries.some(
        (e) =>
          e.english.toLowerCase().trim() === contrib.english.toLowerCase().trim() &&
          e.translation.toLowerCase().trim() === contrib.translation.toLowerCase().trim()
      );
      if (!exists && contrib.english.trim() && contrib.translation.trim()) {
        const newEntry: ContribDictEntry = {
          english: contrib.english.trim(),
          translation: contrib.translation.trim(),
          pronunciation: contrib.pronunciation?.trim() || "",
          context: contrib.context?.trim()
            ? `${contrib.context.trim()} (Contributed by ${contrib.contributorName || "Community"})`
            : `Community contribution (${contrib.contributorName || "Verified"})`,
          _userContrib: true,
        };
        cat.entries.unshift(newEntry);
        modified = true;
      }
    }

    if (modified) {
      invalidateDictIndex(dict);
    }
  } catch {
    // Ignore storage read errors in restricted environments
  }
  return dict;
}

// ─── Dynamic Dictionary Loader & In-Memory Cache ───
const DICT_LOADERS: Record<string, () => Promise<{ default: Dictionary }>> = {
  swahili: () => import("@/data/dictionaries/swahili.json") as Promise<{ default: Dictionary }>,
  kikuyu: () => import("@/data/dictionaries/kikuyu.json") as Promise<{ default: Dictionary }>,
  luo: () => import("@/data/dictionaries/luo.json") as Promise<{ default: Dictionary }>,
  kalenjin: () => import("@/data/dictionaries/kalenjin.json") as Promise<{ default: Dictionary }>,
  luhya: () => import("@/data/dictionaries/luhya.json") as Promise<{ default: Dictionary }>,
  kamba: () => import("@/data/dictionaries/kamba.json") as Promise<{ default: Dictionary }>,
  meru: () => import("@/data/dictionaries/meru.json") as Promise<{ default: Dictionary }>,
  maasai: () => import("@/data/dictionaries/maasai.json") as Promise<{ default: Dictionary }>,
  kisii: () => import("@/data/dictionaries/kisii.json") as Promise<{ default: Dictionary }>,
  somali: () => import("@/data/dictionaries/somali.json") as Promise<{ default: Dictionary }>,
  turkana: () => import("@/data/dictionaries/turkana.json") as Promise<{ default: Dictionary }>,
  mijikenda: () => import("@/data/dictionaries/mijikenda.json") as Promise<{ default: Dictionary }>,
  teso: () => import("@/data/dictionaries/teso.json") as Promise<{ default: Dictionary }>,
  embu: () => import("@/data/dictionaries/embu.json") as Promise<{ default: Dictionary }>,
  taita: () => import("@/data/dictionaries/taita.json") as Promise<{ default: Dictionary }>,
  samburu: () => import("@/data/dictionaries/samburu.json") as Promise<{ default: Dictionary }>,
  borana: () => import("@/data/dictionaries/borana.json") as Promise<{ default: Dictionary }>,
  rendille: () => import("@/data/dictionaries/rendille.json") as Promise<{ default: Dictionary }>,
  pokomo: () => import("@/data/dictionaries/pokomo.json") as Promise<{ default: Dictionary }>,
  ilchamus: () => import("@/data/dictionaries/ilchamus.json") as Promise<{ default: Dictionary }>,
  pokot: () => import("@/data/dictionaries/pokot.json") as Promise<{ default: Dictionary }>,
  taveta: () => import("@/data/dictionaries/taveta.json") as Promise<{ default: Dictionary }>,
  daasanach: () => import("@/data/dictionaries/daasanach.json") as Promise<{ default: Dictionary }>,
};

export const DICT_CACHE: Record<string, Dictionary> = {};
const IN_FLIGHT: Record<string, Promise<Dictionary | null>> = {};

export async function loadDictionary(languageId: string): Promise<Dictionary | null> {
  if (DICT_CACHE[languageId]) {
    return applyApprovedContributionsToDict(DICT_CACHE[languageId]);
  }
  const loader = DICT_LOADERS[languageId];
  if (!loader) return null;
  if (!IN_FLIGHT[languageId]) {
    IN_FLIGHT[languageId] = loader()
      .then((mod) => {
        const dict = (mod.default || mod) as Dictionary;
        DICT_CACHE[languageId] = applyApprovedContributionsToDict(dict);
        delete IN_FLIGHT[languageId];
        return DICT_CACHE[languageId];
      })
      .catch((err) => {
        delete IN_FLIGHT[languageId];
        console.warn(`Failed to load dictionary ${languageId}:`, err);
        return null;
      });
  }
  return IN_FLIGHT[languageId];
}

// Languages that have no dictionary yet
export const COMING_SOON_LANGUAGES = langData.languages
  .filter((l) => {
    const id = l.name.split("(")[0].trim().toLowerCase().replace(/\s+/g, "");
    return !DICT_META_MAP[id] && id !== "swahili" && id !== "dholuo";
  })
  .map((l) => ({
    name: l.name,
    family: l.family,
    speakers: l.speakers,
    counties: l.counties,
  }));

export const ALL_CONTRIBUTE_LANGUAGES = Array.from(
  new Set([
    ...ALL_DICT_METAS.map((d) => d.languageName.split("(")[0].trim()),
    ...COMING_SOON_LANGUAGES.map((l) => l.name.split("(")[0].trim()),
  ])
).sort();

// ─── FAQ ───
export const TRANSLATOR_FAQ = [
  { question: "What languages does this translator support?", answer: `Currently ${ALL_DICT_METAS.length} Kenyan languages with verified public-domain and community vocabularies: Swahili, Kikuyu, Dholuo (Luo), Kalenjin, Luhya, Kamba, Meru, Maasai, Kisii, Somali, Turkana, Mijikenda, Teso, Embu, Taita, Samburu, Borana (Oromo), Rendille, Pokomo, Ilchamus (Njemps), Pokot (Pökoot), Taveta, and Daasanach.` },
  { question: "How does translating between two Kenyan languages work?", answer: "When you choose any Kenyan language as your 'From' language and another Kenyan language (or 'All Languages') as your 'To' language, the translator uses English as a middleman bridge — matching your word in the source dictionary, resolving its English concept, and finding the corresponding translation in your target Kenyan language(s)." },
  { question: "Is this a machine translation tool?", answer: "No — this is a curated dictionary-based translator grounded in 18 commercially permissive Kenyan language text dataset suites (Kencorpus, Project Tafsiri v2.0, The Thiomi Dataset, Google Research SMOL & GATITOS, LughaGen, ThinkKenya/Waleghwa, Mozilla Common Voice 25.0 CC0, African Next Voices Kenya, Sunbird AI SALT & SALT-31, Lingua-Connect Giriama, CGIAR Kikuyu, DDD Ekegusii & Somali, Mich-Seth Owusu Corpora, Kikamba First Corpus, CLDF ASJP v20 / BantuBVD / WOLD / Tsammalex, Kaikki.org Wiktionary, OLDI FLORES+ & SIB-200, Language Science Press CC-BY-4.0 volumes), public-domain linguistic monographs (1840–1944), and Unicode CLDR. It translates words and common phrases accurately without AI hallucination." },
  { question: "Can I contribute translations?", answer: "Yes! Use the 'Contribute' button on any language card to submit corrections or new vocabulary. All contributions are credited." },
];
