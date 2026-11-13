import {
  ALL_DICT_METAS,
  DICT_META_MAP,
  type DictEntry,
  type Dictionary,
} from "@/data/language-sources";
import langData from "@/data/kenya-languages.json";

export const CATEGORY_PAGE_SIZE = 50;
export const SEARCH_PAGE_SIZE = 50;
export const CONTACT_EMAIL = "contact@kenyahub.me";

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
const DICT_PROMISES: Record<string, Promise<Dictionary>> = {};

export async function loadDictionary(langId: string): Promise<Dictionary | null> {
  if (DICT_CACHE[langId]) return DICT_CACHE[langId];
  const loader = DICT_LOADERS[langId];
  if (!loader) return null;
  if (!DICT_PROMISES[langId]) {
    DICT_PROMISES[langId] = loader().then((mod) => {
      const dict = (mod.default || mod) as Dictionary;
      DICT_CACHE[langId] = dict;
      return dict;
    });
  }
  return DICT_PROMISES[langId];
}

export interface TranslationResultItem {
  entry: DictEntry;
  sourceEntry?: DictEntry;
  pivotEnglish?: string;
  categoryName: string;
  categoryIcon: string;
  languageId: string;
  languageName: string;
  family: string;
  matchType: "exact" | "partial";
  missingTarget?: boolean;
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
  { question: "What languages does this translator support?", answer: `Currently ${ALL_DICT_METAS.length} Kenyan languages with verified public-domain and community vocabularies: Swahili, Kikuyu, Dholuo (Luo), Kalenjin, Luhya, Kamba, Meru, Maasai, Kisii, Somali, Turkana, Mijikenda, Teso, Embu, Taita, Samburu, Borana (Oromo), Rendille, Pokomo, Ilchamus (Njemps), Pokot (Pökoot), and Taveta.` },
  { question: "How does translating between two Kenyan languages work?", answer: "When you choose any Kenyan language as your 'From' language and another Kenyan language (or 'All Languages') as your 'To' language, the translator uses English as a middleman bridge — matching your word in the source dictionary, resolving its English concept, and finding the corresponding translation in your target Kenyan language(s)." },
  { question: "Is this a machine translation tool?", answer: "No — this is a curated dictionary-based translator grounded in verified public-domain linguistic monographs (1844–1927), Unicode CLDR, and community contributors. It translates words and common phrases accurately without AI hallucination." },
  { question: "Can I contribute translations?", answer: "Yes! Use the 'Contribute' button on any language card to submit corrections or new vocabulary. All contributions are credited." },
];


