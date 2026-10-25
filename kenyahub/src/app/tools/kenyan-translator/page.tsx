/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import DynamicIcon from "@/components/ui/DynamicIcon";
import SearchInput from "@/components/ui/SearchInput";

import { useState, useMemo, useCallback, useEffect } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import CustomSelect from "@/components/ui/CustomSelect";
import { BarChart, BookOpen, Dices, Folder, Search, Hash, Plus, X, Check, Send, ArrowRight } from "lucide-react";

// Import all 22 Kenyan language dictionaries
import swahiliDict from "@/data/dictionaries/swahili.json";
import kikuyuDict from "@/data/dictionaries/kikuyu.json";
import luoDict from "@/data/dictionaries/luo.json";
import kalenjinDict from "@/data/dictionaries/kalenjin.json";
import luhyaDict from "@/data/dictionaries/luhya.json";
import kambaDict from "@/data/dictionaries/kamba.json";
import meruDict from "@/data/dictionaries/meru.json";
import maasaiDict from "@/data/dictionaries/maasai.json";
import kisiiDict from "@/data/dictionaries/kisii.json";
import somaliDict from "@/data/dictionaries/somali.json";
import turkanaDict from "@/data/dictionaries/turkana.json";
import mijikendaDict from "@/data/dictionaries/mijikenda.json";
import tesoDict from "@/data/dictionaries/teso.json";
import embuDict from "@/data/dictionaries/embu.json";
import taitaDict from "@/data/dictionaries/taita.json";
import samburuDict from "@/data/dictionaries/samburu.json";
import boranaDict from "@/data/dictionaries/borana.json";
import rendilleDict from "@/data/dictionaries/rendille.json";
import pokomoDict from "@/data/dictionaries/pokomo.json";
import ilchamusDict from "@/data/dictionaries/ilchamus.json";
import pokotDict from "@/data/dictionaries/pokot.json";
import tavetaDict from "@/data/dictionaries/taveta.json";

import langData from "@/data/kenya-languages.json";
import { addContribution } from "@/lib/contributions";

const tool = TOOLS.find((t) => t.slug === "kenyan-translator")!;

// ─── Types ───
interface DictEntry {
  english: string;
  translation: string;
  pronunciation: string;
  context: string;
  audioFile: string | null;
}

interface DictCategory {
  id: string;
  name: string;
  icon?: string;
  entries: DictEntry[];
}

interface Dictionary {
  languageId: string;
  languageName: string;
  family: string;
  nativeName: string;
  script: string;
  speakerCount: number;
  counties: string[];
  hasAudio: boolean;
  dictionaryVersion: string;
  lastUpdated: string;
  contributorNote: string;
  categories: DictCategory[];
}

interface TranslationResultItem {
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

// ─── All 22 dictionaries indexed ───
const ALL_DICTS: Dictionary[] = [
  swahiliDict,
  kikuyuDict,
  luoDict,
  kalenjinDict,
  luhyaDict,
  kambaDict,
  meruDict,
  maasaiDict,
  kisiiDict,
  somaliDict,
  turkanaDict,
  mijikendaDict,
  tesoDict,
  embuDict,
  taitaDict,
  samburuDict,
  boranaDict,
  rendilleDict,
  pokomoDict,
  ilchamusDict,
  pokotDict,
  tavetaDict,
];

const DICT_MAP: Record<string, Dictionary> = {};
ALL_DICTS.forEach((d) => {
  DICT_MAP[d.languageId] = d;
});

// Languages that have no dictionary yet
const COMING_SOON_LANGUAGES = langData.languages
  .filter((l) => {
    const id = l.name.split("(")[0].trim().toLowerCase().replace(/\s+/g, "");
    return !DICT_MAP[id] && id !== "swahili" && id !== "dholuo";
  })
  .map((l) => ({
    name: l.name,
    family: l.family,
    speakers: l.speakers,
    counties: l.counties,
  }));

// Family color map
const FAMILY_COLORS: Record<string, string> = {
  bantu: "#2FA463",
  nilotic: "#C8961E",
  cushitic: "#BE2126",
  other: "#1A8BD1",
};

const CONTACT_EMAIL = "andysamonyango@gmail.com";

const ALL_CONTRIBUTE_LANGUAGES = Array.from(
  new Set([
    ...ALL_DICTS.map((d) => d.languageName.split("(")[0].trim()),
    ...COMING_SOON_LANGUAGES.map((l) => l.name.split("(")[0].trim()),
  ])
).sort();

// All category IDs across all languages (unique, in order)
const ALL_CATEGORY_IDS: { id: string; name: string; icon: string }[] = [];
const seenCats = new Set<string>();
ALL_DICTS.forEach((d) =>
  d.categories.forEach((c) => {
    if (!seenCats.has(c.id)) {
      seenCats.add(c.id);
      ALL_CATEGORY_IDS.push({ id: c.id, name: c.name, icon: c.icon || "📖" });
    }
  })
);

// Popular comparison words across Kenyan dictionaries
const POPULAR_COMPARE_WORDS = [
  "Water", "Hello", "Thank you", "Father", "Mother", "Food",
  "God", "Cow", "One", "Two", "Friend", "Sun", "Fire", "House"
];

/**
 * Normalize an English or indigenous headword into clean comparable tokens
 * so English can serve as an accurate middleman/bridge between any two Kenyan languages.
 */
function extractNormalizedTerms(raw: string): string[] {
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

// ─── FAQ ───
const faq = [
  { question: "What languages does this translator support?", answer: `Currently ${ALL_DICTS.length} Kenyan languages with verified public-domain and community vocabularies: Swahili, Kikuyu, Dholuo (Luo), Kalenjin, Luhya, Kamba, Meru, Maasai, Kisii, Somali, Turkana, Mijikenda, Teso, Embu, Taita, Samburu, Borana (Oromo), Rendille, Pokomo, Ilchamus (Njemps), Pokot (Pökoot), and Taveta.` },
  { question: "How does translating between two Kenyan languages work?", answer: "When you choose any Kenyan language as your 'From' language and another Kenyan language (or 'All Languages') as your 'To' language, the translator uses English as a middleman bridge — matching your word in the source dictionary, resolving its English concept, and finding the corresponding translation in your target Kenyan language(s)." },
  { question: "Is this a machine translation tool?", answer: "No — this is a curated dictionary-based translator grounded in verified public-domain linguistic monographs (1844–1927), Unicode CLDR, and community contributors. It translates words and common phrases accurately without AI hallucination." },
  { question: "Can I contribute translations?", answer: "Yes! Use the 'Contribute' button on any language card to submit corrections or new vocabulary. All contributions are credited." },
];

// ─── Component ───
export default function KenyanTranslatorPage() {
  const [sourceLanguage, setSourceLanguage] = useState("english");
  const [targetLanguage, setTargetLanguage] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"translate" | "compare" | "browse">("translate");
  const [compareLanguages, setCompareLanguages] = useState<string[]>(() => ALL_DICTS.map((d) => d.languageId));
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  // ─── Contribute Modal State ───
  const [isContributeOpen, setIsContributeOpen] = useState(false);
  const [contributeLanguage, setContributeLanguage] = useState("Swahili");
  const [contributeType, setContributeType] = useState<"new_word" | "correction" | "pronunciation" | "reviewer">("new_word");
  const [contributeEnglish, setContributeEnglish] = useState("");
  const [contributeTranslation, setContributeTranslation] = useState("");
  const [contributePronunciation, setContributePronunciation] = useState("");
  const [contributeContext, setContributeContext] = useState("");
  const [contributorName, setContributorName] = useState("");
  const [contributorEmail, setContributorEmail] = useState("");
  const [contributeSubmitted, setContributeSubmitted] = useState(false);
  const [contributeCopied, setContributeCopied] = useState(false);

  const openContributeModal = useCallback((langName?: string, defaultEnglish?: string) => {
    if (langName) setContributeLanguage(langName.split("(")[0].trim());
    if (defaultEnglish) setContributeEnglish(defaultEnglish);
    setContributeSubmitted(false);
    setContributeCopied(false);
    setIsContributeOpen(true);
  }, []);

  const closeContributeModal = useCallback(() => {
    setIsContributeOpen(false);
    setContributeSubmitted(false);
    setContributeCopied(false);
  }, []);

  const handleSubmitContribution = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contributeLanguage) return;

    try {
      addContribution({
        language: contributeLanguage,
        type: contributeType,
        english: contributeEnglish,
        translation: contributeTranslation,
        pronunciation: contributePronunciation,
        context: contributeContext,
        contributorName: contributorName || "Anonymous Contributor",
        contributorEmail: contributorEmail,
      });
    } catch (err) {
      console.error("Failed to add contribution:", err);
    }

    try {
      const saved = localStorage.getItem("kh-user-contributions");
      const existing = saved ? JSON.parse(saved) : [];
      const newEntry = {
        id: Date.now().toString(),
        language: contributeLanguage,
        type: contributeType,
        english: contributeEnglish,
        translation: contributeTranslation,
        pronunciation: contributePronunciation,
        context: contributeContext,
        contributorName: contributorName || "Anonymous Contributor",
        contributorEmail: contributorEmail,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem("kh-user-contributions", JSON.stringify([newEntry, ...existing]));
    } catch { /* ignore */ }

    const typeLabel =
      contributeType === "new_word"
        ? "New Word"
        : contributeType === "correction"
        ? "Correction"
        : contributeType === "pronunciation"
        ? "Pronunciation"
        : "Native Reviewer";
    const subjectLine = `[KenyaHub Translation Contribution - ${contributeLanguage}] ${contributeEnglish || typeLabel}`;
    const bodyText = [
      `Language: ${contributeLanguage}`,
      `Contribution Type: ${typeLabel}`,
      `English Term: ${contributeEnglish || "N/A"}`,
      `Native Translation: ${contributeTranslation || "N/A"}`,
      `Pronunciation Guide: ${contributePronunciation || "N/A"}`,
      `Dialect / Context / Note: ${contributeContext || "N/A"}`,
      ``,
      `Contributor Name: ${contributorName || "Anonymous"}`,
      `Email: ${contributorEmail || "N/A"}`,
      ``,
      `Submitted via Kenya-Hub Translator Module`,
    ].join("\n");

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;

    setContributeSubmitted(true);
  };

  // Load recent searches and favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("kh-translator-recent");
      if (saved) setRecentSearches(JSON.parse(saved));
      const savedFavs = localStorage.getItem("kh-translator-favs");
      if (savedFavs) setFavorites(JSON.parse(savedFavs));
    } catch { /* ignore */ }
  }, []);

  // Save recent searches
  const addRecentSearch = useCallback((query: string) => {
    setRecentSearches((prev) => {
      const next = [query, ...prev.filter((s) => s !== query)].slice(0, 8);
      try { localStorage.setItem("kh-translator-recent", JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  // Favorites
  const toggleFavorite = useCallback((key: string) => {
    setFavorites((prev) => {
      const next = prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key];
      try { localStorage.setItem("kh-translator-favs", JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  // Copy to clipboard
  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    });
  }, []);

  // Swap languages
  const swapLanguages = useCallback(() => {
    if (targetLanguage === "all") {
      setSourceLanguage("swahili");
      setTargetLanguage("english");
    } else {
      setSourceLanguage(targetLanguage);
      setTargetLanguage(sourceLanguage);
    }
    setSearchQuery("");
  }, [sourceLanguage, targetLanguage]);

  const targetDict = targetLanguage !== "english" && targetLanguage !== "all" ? DICT_MAP[targetLanguage] : null;
  const sourceDict = sourceLanguage !== "english" ? DICT_MAP[sourceLanguage] : null;

  // ─── Search / Translation Logic (Supports English->X, X->English, X->Y via English middleman, and X/English->All Languages) ───
  const { searchResults, detectedPivotWords } = useMemo(() => {
    if (!searchQuery.trim()) return { searchResults: [], detectedPivotWords: [] as string[] };
    const q = searchQuery.toLowerCase().trim();
    const qClean = extractNormalizedTerms(q)[0] || q;

    if (q.length > 2) {
      setTimeout(() => addRecentSearch(q), 0);
    }

    const results: TranslationResultItem[] = [];
    const pivotWordsSet = new Set<string>();

    // Helper to search a target dictionary by a list of English pivot terms
    const findInDictByEnglishPivots = (
      dict: Dictionary,
      pivots: string[],
      sourceMatch?: DictEntry
    ): TranslationResultItem[] => {
      const exactMatches: TranslationResultItem[] = [];
      const partialMatches: TranslationResultItem[] = [];

      for (const cat of dict.categories) {
        for (const entry of cat.entries) {
          const engTerms = extractNormalizedTerms(entry.english);
          const engLower = entry.english.toLowerCase();

          const isExact = pivots.some(
            (pw) => engLower === pw || engTerms.includes(pw)
          );
          if (isExact) {
            exactMatches.push({
              entry,
              sourceEntry: sourceMatch,
              pivotEnglish: sourceMatch ? sourceMatch.english : entry.english,
              categoryName: cat.name,
              categoryIcon: cat.icon || "📖",
              languageId: dict.languageId,
              languageName: dict.languageName,
              family: dict.family,
              matchType: "exact",
            });
          } else if (
            pivots.some((pw) => pw.length >= 3 && engTerms.some((et) => et.includes(pw)))
          ) {
            partialMatches.push({
              entry,
              sourceEntry: sourceMatch,
              pivotEnglish: sourceMatch ? sourceMatch.english : entry.english,
              categoryName: cat.name,
              categoryIcon: cat.icon || "📖",
              languageId: dict.languageId,
              languageName: dict.languageName,
              family: dict.family,
              matchType: "partial",
            });
          }
        }
      }
      return [...exactMatches, ...partialMatches];
    };

    if (sourceLanguage === "english") {
      const pivots = extractNormalizedTerms(q);
      if (targetLanguage === "all") {
        // Translate English -> All 22 Kenyan languages
        for (const dict of ALL_DICTS) {
          const matches = findInDictByEnglishPivots(dict, pivots);
          if (matches.length > 0) {
            results.push(matches[0]);
          }
        }
      } else if (targetLanguage === "english") {
        // English -> English (show matches across all dictionaries as reference)
        for (const dict of ALL_DICTS) {
          const matches = findInDictByEnglishPivots(dict, pivots);
          if (matches.length > 0) results.push(matches[0]);
        }
      } else if (targetDict) {
        // English -> Specific Kenyan language
        results.push(...findInDictByEnglishPivots(targetDict, pivots));
      }
    } else if (sourceDict) {
      // Source is a Kenyan language: first match in sourceDict
      const exactSourceMatches: { entry: DictEntry; cat: DictCategory }[] = [];
      const partialSourceMatches: { entry: DictEntry; cat: DictCategory }[] = [];

      for (const cat of sourceDict.categories) {
        for (const entry of cat.entries) {
          const transTerms = extractNormalizedTerms(entry.translation);
          const transLower = entry.translation.toLowerCase();
          if (transLower === q || transTerms.includes(qClean)) {
            exactSourceMatches.push({ entry, cat });
          } else if (transLower.includes(q) || transTerms.some((t) => t.includes(qClean))) {
            partialSourceMatches.push({ entry, cat });
          }
        }
      }

      // Fallback: if user typed an English word while a Kenyan language was selected as "From", still match it!
      if (exactSourceMatches.length === 0 && partialSourceMatches.length === 0) {
        for (const cat of sourceDict.categories) {
          for (const entry of cat.entries) {
            const engTerms = extractNormalizedTerms(entry.english);
            if (engTerms.includes(qClean)) {
              exactSourceMatches.push({ entry, cat });
            } else if (entry.english.toLowerCase().includes(q)) {
              partialSourceMatches.push({ entry, cat });
            }
          }
        }
      }

      const combinedSource = [...exactSourceMatches, ...partialSourceMatches];

      if (targetLanguage === "english" || targetLanguage === sourceLanguage) {
        // Kenyan language -> English
        for (const sm of combinedSource) {
          const isExact = exactSourceMatches.includes(sm);
          results.push({
            entry: sm.entry,
            categoryName: sm.cat.name,
            categoryIcon: sm.cat.icon || "📖",
            languageId: sourceDict.languageId,
            languageName: sourceDict.languageName,
            family: sourceDict.family,
            matchType: isExact ? "exact" : "partial",
          });
        }
      } else if (targetLanguage === "all") {
        // Kenyan language -> ALL languages using English as the middleman!
        const primarySources = exactSourceMatches.length > 0 ? exactSourceMatches.slice(0, 3) : partialSourceMatches.slice(0, 3);
        const allPivots: string[] = [];
        for (const sm of primarySources) {
          for (const pw of extractNormalizedTerms(sm.entry.english)) {
            pivotWordsSet.add(pw);
            if (!allPivots.includes(pw)) allPivots.push(pw);
          }
        }

        if (primarySources.length > 0) {
          const bestSource = primarySources[0].entry;
          for (const dict of ALL_DICTS) {
            if (dict.languageId === sourceDict.languageId) continue;
            const dictMatches = findInDictByEnglishPivots(dict, allPivots, bestSource);
            if (dictMatches.length > 0) {
              results.push(dictMatches[0]);
            }
          }
        }
      } else if (targetDict) {
        // Kenyan language A -> Kenyan language B using English as the middleman!
        const primarySources = exactSourceMatches.length > 0 ? exactSourceMatches.slice(0, 5) : partialSourceMatches.slice(0, 5);
        const seenTargetKeys = new Set<string>();

        for (const sm of primarySources) {
          const pivots = extractNormalizedTerms(sm.entry.english);
          pivots.forEach((pw) => pivotWordsSet.add(pw));
          const targetMatches = findInDictByEnglishPivots(targetDict, pivots, sm.entry);

          if (targetMatches.length > 0) {
            for (const tm of targetMatches) {
              const key = `${tm.entry.english}::${tm.entry.translation}`;
              if (!seenTargetKeys.has(key)) {
                seenTargetKeys.add(key);
                results.push(tm);
              }
            }
          } else {
            // Even if targetDict lacks this entry, show the resolved English bridge meaning
            const key = `bridge::${sm.entry.english}`;
            if (!seenTargetKeys.has(key)) {
              seenTargetKeys.add(key);
              results.push({
                entry: sm.entry,
                sourceEntry: sm.entry,
                pivotEnglish: sm.entry.english,
                categoryName: sm.cat.name,
                categoryIcon: sm.cat.icon || "📖",
                languageId: targetDict.languageId,
                languageName: targetDict.languageName,
                family: targetDict.family,
                matchType: "partial",
                missingTarget: true,
              });
            }
          }
        }
      }
    }

    // Multi-word phrase / word-by-word fallback when user enters multiple words
    const wordTokens = q
      .replace(/[^a-zA-Z0-9\u00C0-\u024F'\s-]/g, " ")
      .split(/\s+/)
      .map((w) => w.trim())
      .filter((w) => w.length >= 2 && !["the", "a", "an", "please"].includes(w));

    if (wordTokens.length >= 2 && sourceLanguage === "english") {
      const synthesizeForDict = (dict: Dictionary): TranslationResultItem | null => {
        const translatedParts: string[] = [];
        const pronParts: string[] = [];
        let matchedCount = 0;
        for (const tok of wordTokens) {
          const tokMatches = findInDictByEnglishPivots(dict, extractNormalizedTerms(tok));
          const exact = tokMatches.find((m) => m.matchType === "exact") || tokMatches[0];
          if (exact) {
            matchedCount++;
            const cleanT = exact.entry.translation.split(/[\/;(]/)[0].trim();
            translatedParts.push(cleanT);
            if (exact.entry.pronunciation) {
              pronParts.push(exact.entry.pronunciation.split("/")[0].trim());
            }
          }
        }
        if (matchedCount >= 2) {
          return {
            entry: {
              english: searchQuery.trim(),
              translation: translatedParts.join(" + "),
              pronunciation: pronParts.join(" · "),
              context: `Word-by-word synthesis (${matchedCount}/${wordTokens.length} words matched in ${dict.languageName})`,
              audioFile: null,
            },
            categoryName: "Word-by-Word Phrase Bridge",
            categoryIcon: "🔗",
            languageId: dict.languageId,
            languageName: dict.languageName,
            family: dict.family,
            matchType: matchedCount === wordTokens.length ? "exact" : "partial",
          };
        }
        return null;
      };

      if (targetLanguage === "all") {
        for (const dict of ALL_DICTS) {
          if (!results.some((r) => r.languageId === dict.languageId && r.matchType === "exact")) {
            const syn = synthesizeForDict(dict);
            if (syn) results.push(syn);
          }
        }
      } else if (targetDict && !results.some((r) => r.matchType === "exact")) {
        const syn = synthesizeForDict(targetDict);
        if (syn) results.unshift(syn);
        for (const tok of wordTokens) {
          const tokMatches = findInDictByEnglishPivots(targetDict, extractNormalizedTerms(tok));
          if (tokMatches.length > 0) results.push(tokMatches[0]);
        }
      }
    }

    results.sort((a, b) => {
      if (a.missingTarget !== b.missingTarget) return a.missingTarget ? 1 : -1;
      return (a.matchType === "exact" ? -1 : 1) - (b.matchType === "exact" ? -1 : 1);
    });

    return {
      searchResults: results,
      detectedPivotWords: Array.from(pivotWordsSet),
    };
  }, [searchQuery, sourceLanguage, targetLanguage, targetDict, sourceDict, addRecentSearch]);

  // ─── Category Browser (Supports direct browsing OR Kenyan-to-Kenyan pivot browsing!) ───
  const browseDict = targetDict || sourceDict || DICT_MAP.swahili;
  const categoryEntries = useMemo(() => {
    if (!activeCategory || !browseDict) return [];
    const cat = browseDict.categories.find((c) => c.id === activeCategory);
    return cat ? cat.entries : [];
  }, [activeCategory, browseDict]);

  // Map English headword -> sourceDict entry when browsing a category in Kenyan A -> Kenyan B mode
  const sourcePivotMap = useMemo(() => {
    if (!sourceDict) return new Map<string, DictEntry>();
    const map = new Map<string, DictEntry>();
    for (const cat of sourceDict.categories) {
      for (const entry of cat.entries) {
        for (const term of extractNormalizedTerms(entry.english)) {
          if (!map.has(term)) map.set(term, entry);
        }
      }
    }
    return map;
  }, [sourceDict]);

  // ─── Compare Mode: word across multiple languages ───
  const { comparisonResults, resolvedEnglish } = useMemo(() => {
    if (viewMode !== "compare" || !searchQuery.trim()) {
      return { comparisonResults: [], resolvedEnglish: null };
    }
    const qTerms = extractNormalizedTerms(searchQuery);
    const q = qTerms[0] || searchQuery.toLowerCase().trim();

    // First check if query already matches an English headword in any dictionary
    let isKnownEnglish = false;
    for (const d of ALL_DICTS) {
      for (const cat of d.categories) {
        for (const entry of cat.entries) {
          const engTerms = extractNormalizedTerms(entry.english);
          if (entry.english.toLowerCase().trim() === q || engTerms.includes(q)) {
            isKnownEnglish = true;
            break;
          }
        }
        if (isKnownEnglish) break;
      }
      if (isKnownEnglish) break;
    }

    // Only resolve via indigenous translation if query is not already a known English headword
    let matchedEnglish = q;
    if (!isKnownEnglish) {
      for (const d of ALL_DICTS) {
        for (const cat of d.categories) {
          for (const entry of cat.entries) {
            const transTerms = extractNormalizedTerms(entry.translation);
            if (transTerms.includes(q)) {
              matchedEnglish = extractNormalizedTerms(entry.english)[0] || entry.english.toLowerCase();
              break;
            }
          }
          if (matchedEnglish !== q) break;
        }
        if (matchedEnglish !== q) break;
      }
    }

    const targetWords = Array.from(new Set([matchedEnglish, ...qTerms, ...extractNormalizedTerms(matchedEnglish)]));

    const results: { languageId: string; languageName: string; family: string; entry: DictEntry | null }[] = [];

    compareLanguages.forEach((langId) => {
      const dict = DICT_MAP[langId];
      if (!dict) return;
      let found: DictEntry | null = null;

      for (const cat of dict.categories) {
        for (const entry of cat.entries) {
          const engTerms = extractNormalizedTerms(entry.english);
          if (
            targetWords.some(
              (tw) =>
                entry.english.toLowerCase().trim() === tw ||
                engTerms.includes(tw)
            )
          ) {
            found = entry;
            break;
          }
        }
        if (found) break;
      }

      if (!found && !isKnownEnglish) {
        for (const cat of dict.categories) {
          for (const entry of cat.entries) {
            const transTerms = extractNormalizedTerms(entry.translation);
            if (targetWords.some((tw) => transTerms.includes(tw))) {
              found = entry;
              break;
            }
          }
          if (found) break;
        }
      }

      if (!found) {
        for (const cat of dict.categories) {
          for (const entry of cat.entries) {
            const engTerms = extractNormalizedTerms(entry.english);
            if (
              targetWords.some((tw) => tw.includes(" ") && engTerms.some((et) => et.includes(tw)))
            ) {
              found = entry;
              break;
            }
          }
          if (found) break;
        }
      }

      results.push({ languageId: dict.languageId, languageName: dict.languageName, family: dict.family, entry: found });
    });

    return {
      comparisonResults: results,
      resolvedEnglish: matchedEnglish !== q ? matchedEnglish : null,
    };
  }, [searchQuery, viewMode, compareLanguages]);

  // Stats
  const totalEntries = ALL_DICTS.reduce((sum, d) => sum + d.categories.reduce((s, c) => s + c.entries.length, 0), 0);

  // ─── Random Word Feature ───
  const [randomWord, setRandomWord] = useState<{ entry: DictEntry; langName: string } | null>(null);
  const getRandomWord = useCallback(() => {
    const populatedDicts = ALL_DICTS.filter((d) => d.categories.some((c) => c.entries.length > 0));
    if (populatedDicts.length === 0) return;
    const dict = populatedDicts[Math.floor(Math.random() * populatedDicts.length)];
    const validCats = dict.categories.filter((c) => c.entries.length > 0);
    if (validCats.length === 0) return;
    const cat = validCats[Math.floor(Math.random() * validCats.length)];
    const entry = cat.entries[Math.floor(Math.random() * cat.entries.length)];
    if (entry) setRandomWord({ entry, langName: dict.languageName });
  }, []);

  useEffect(() => { getRandomWord(); }, [getRandomWord]);

  const isPivotMode = sourceLanguage !== "english" && targetLanguage !== "english";

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-4 sm:space-y-6">

        {/* ── Random Word of the Moment ── */}
        {randomWord && (
          <div className="bg-gradient-to-r from-gold/10 to-kenya-green/10 border border-gold/20 rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-3 sm:gap-4">
            <div className="min-w-0">
              <p className="text-[0.6rem] uppercase tracking-wider text-gold font-medium mb-0.5 sm:mb-1 flex items-center gap-1.5"><Dices className="w-3 h-3" /> Discover a word ({ALL_DICTS.length} Kenyan languages)</p>
              <p className="text-sm font-bold text-text-primary">&ldquo;{randomWord.entry.english}&rdquo;</p>
              <p className="text-xs text-text-secondary mt-0.5">
                <span className="text-gold font-medium">{randomWord.entry.translation}</span>
                <span className="text-text-muted"> — {randomWord.langName}</span>
              </p>
              {randomWord.entry.pronunciation && (
                <p className="text-[0.65rem] text-text-muted mt-0.5 italic">/{randomWord.entry.pronunciation}/</p>
              )}
            </div>
            <button onClick={getRandomWord} className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/15 hover:bg-gold/25 flex items-center justify-center transition-colors" title="Get another word">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        )}

        {/* ── View Mode Tabs (Standalone Horizontal Pills) ── */}
        <ExpandablePillRow>
          {([
            { id: "translate" as const, label: "Translate (Any → Any / All)" },
            { id: "compare" as const, label: `Compare (${ALL_DICTS.length} Languages)` },
            { id: "browse" as const, label: "Browse Dictionaries" },
          ]).map((mode) => {
            const active = viewMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => { setViewMode(mode.id); setSearchQuery(""); setActiveCategory(null); }}
                className={`shrink-0 whitespace-nowrap rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium border transition-all ${
                  active
                    ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                    : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
                }`}
              >
                {mode.label}
              </button>
            );
          })}
        </ExpandablePillRow>

        {/* ═══════════════════════════════════════ */}
        {/* ── TRANSLATE MODE ── */}
        {/* ═══════════════════════════════════════ */}
        {viewMode === "translate" && (
          <>
            {/* Language Selector */}
            <div className="bg-bg-card border border-border rounded-xl p-3.5 sm:p-5">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <div className="w-full sm:flex-1 min-w-0">
                  <label className="block text-[0.6rem] uppercase tracking-wider text-text-muted mb-1 font-medium">From (Source Language)</label>
                  <CustomSelect
                    value={sourceLanguage}
                    onValueChange={setSourceLanguage}
                    options={[
                      { value: "english", label: "English" },
                      ...ALL_DICTS.map((d) => ({ value: d.languageId, label: d.languageName }))
                    ]}
                    id="source-lang"
                  />
                </div>

                <button
                  onClick={swapLanguages}
                  className="my-0.5 sm:my-0 sm:mt-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gold/15 hover:bg-gold/25 flex items-center justify-center transition-all hover:rotate-180 duration-300 flex-shrink-0 transform rotate-90 sm:rotate-0"
                  title="Swap languages"
                >
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                </button>

                <div className="w-full sm:flex-1 min-w-0">
                  <label className="block text-[0.6rem] uppercase tracking-wider text-text-muted mb-1 font-medium">To (Target Language)</label>
                  <CustomSelect
                    value={targetLanguage}
                    onValueChange={setTargetLanguage}
                    options={[
                      { value: "all", label: `✨ All ${ALL_DICTS.length} Kenyan Languages` },
                      { value: "english", label: "English" },
                      ...ALL_DICTS.map((d) => ({ value: d.languageId, label: d.languageName }))
                    ]}
                    id="target-lang"
                  />
                </div>
              </div>

              {/* Bridge Indicator Badge when translating Kenyan -> Kenyan or Kenyan -> All */}
              {isPivotMode && (
                <div className="mt-2.5 px-3 py-1.5 rounded-lg bg-gold/10 border border-gold/25 flex items-center gap-2 text-[0.6875rem] text-text-secondary">
                  <span className="text-gold font-semibold">🔗 English Middleman Active:</span>
                  <span>
                    Translating from <strong>{sourceDict?.languageName}</strong>{" "}
                    <ArrowRight className="inline w-3 h-3 text-gold mx-0.5" /> <strong>English</strong>{" "}
                    <ArrowRight className="inline w-3 h-3 text-gold mx-0.5" />{" "}
                    <strong>{targetLanguage === "all" ? `All ${ALL_DICTS.length - 1} Other Kenyan Languages` : targetDict?.languageName}</strong>
                  </span>
                </div>
              )}

              {/* Search Input */}
              <div className="mt-3 sm:mt-4 relative">
                <Search className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-text-muted" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    sourceLanguage === "english"
                      ? "Type an English word (e.g. Water, Sun, Mother, One, Fire)..."
                      : `Type a word in ${sourceDict?.languageName ?? "source language"} (or English)...`
                  }
                  className="input-field text-sm w-full !pl-10 sm:!pl-12 !pr-10"
                  id="translator-search"
                  autoComplete="off"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-bg-elevated hover:bg-border flex items-center justify-center transition-colors">
                    <svg className="w-3 h-3 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Quick Suggestions & Recent Searches */}
              {!searchQuery && (
                <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                  <span className="text-[0.6rem] text-text-muted">Try:</span>
                  {POPULAR_COMPARE_WORDS.slice(0, 8).map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setSearchQuery(w)}
                      className="text-[0.65rem] px-2 py-0.5 rounded-full bg-bg-elevated border border-border text-text-secondary hover:text-gold hover:border-gold/30 transition-colors"
                    >
                      {w}
                    </button>
                  ))}
                  {recentSearches.length > 0 && (
                    <>
                      <span className="text-[0.6rem] text-text-muted ml-1">Recent:</span>
                      {recentSearches.slice(0, 4).map((s) => (
                        <button key={s} onClick={() => setSearchQuery(s)} className="text-[0.65rem] px-2 py-0.5 rounded-full bg-gold/10 border border-gold/25 text-gold hover:bg-gold/20 transition-colors">
                          {s}
                        </button>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Target Language Info Banner */}
            {targetDict && !searchQuery && (
              <div className="bg-bg-card border border-border rounded-xl p-3.5 sm:p-4 flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: FAMILY_COLORS[targetDict.family] }} />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-text-primary">{targetDict.languageName}</h3>
                  <p className="text-[0.65rem] text-text-muted mt-0.5">
                    {targetDict.nativeName} · {(targetDict.speakerCount / 1000000).toFixed(2).replace(/\.?0+$/, "")}M speakers · {targetDict.family.charAt(0).toUpperCase() + targetDict.family.slice(1)} family
                  </p>
                  <p className="text-[0.6rem] text-text-muted mt-1">{targetDict.counties.join(", ")}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-[0.6rem] text-text-muted flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" /> {targetDict.categories.reduce((s, c) => s + c.entries.length, 0)} words
                    </span>
                    <span className="text-[0.6rem] text-text-muted flex items-center gap-1.5">
                      <Folder className="w-3.5 h-3.5" /> {targetDict.categories.length} categories
                    </span>
                    <span className="text-[0.6rem] text-text-muted flex items-center gap-1.5">
                      <Hash className="w-3.5 h-3.5" /> v{targetDict.dictionaryVersion}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Search Results */}
            {searchQuery && (
              <div className="space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="text-xs text-text-muted">
                    {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
                    {targetLanguage === "all" ? (
                      <span> across all Kenyan languages</span>
                    ) : targetDict ? (
                      <span> in {targetDict.languageName}</span>
                    ) : (
                      <span> in English</span>
                    )}
                  </p>
                  {detectedPivotWords.length > 0 && (
                    <span className="text-[0.65rem] bg-gold/10 border border-gold/25 text-gold px-2.5 py-0.5 rounded-full font-medium">
                      English bridge: &ldquo;{detectedPivotWords.slice(0, 3).join(", ")}&rdquo;
                    </span>
                  )}
                </div>

                {searchResults.length === 0 && (
                  <div className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 text-center">
                    <div className="flex justify-center mb-3"><DynamicIcon emoji="🔍" className="w-8 h-8 text-text-muted" /></div>
                    <p className="text-sm font-medium text-text-primary mb-1">No translations found</p>
                    <p className="text-xs text-text-muted max-w-sm mx-auto">
                      Try searching a core word (e.g. Water, Fire, Sun, Mother, One) or switch &ldquo;To&rdquo; to <strong>All {ALL_DICTS.length} Kenyan Languages</strong>.
                    </p>
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      {targetLanguage !== "all" && (
                        <button
                          type="button"
                          onClick={() => setTargetLanguage("all")}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-kenya-green/15 hover:bg-kenya-green/25 text-kenya-green-light border border-kenya-green/30 transition-all cursor-pointer"
                        >
                          <span>Translate &ldquo;{searchQuery}&rdquo; to All {ALL_DICTS.length} Languages</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => openContributeModal(targetDict?.languageName || sourceDict?.languageName || "Swahili", searchQuery)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gold/15 hover:bg-gold/25 text-gold border border-gold/30 transition-all cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Contribute &ldquo;{searchQuery}&rdquo; translation</span>
                      </button>
                    </div>
                  </div>
                )}

                <div className={targetLanguage === "all" ? "grid grid-cols-1 sm:grid-cols-2 gap-2.5" : "space-y-2"}>
                  {searchResults.map((result, i) => {
                    const favKey = `${result.languageId}:${result.entry.english}`;
                    const isFav = favorites.includes(favKey);
                    const isReverseToEnglish = sourceLanguage !== "english" && targetLanguage === "english";

                    return (
                      <div key={i} className={`bg-bg-card border rounded-xl p-3.5 sm:p-4 transition-all hover:border-gold/30 ${result.matchType === "exact" ? "border-gold/25" : "border-border"}`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: FAMILY_COLORS[result.family] || "#C8961E" }} />
                              <span className="text-xs font-bold text-text-primary">{result.languageName}</span>
                              <span className="text-[0.6rem] text-text-muted">· {result.categoryIcon} {result.categoryName}</span>
                              {result.matchType === "exact" && (
                                <span className="text-[0.55rem] bg-gold/15 text-gold px-1.5 py-0.5 rounded font-medium">Exact</span>
                              )}
                            </div>

                            {/* 3-Column Pivot View when translating Kenyan A -> Kenyan B */}
                            {result.sourceEntry && sourceDict ? (
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 pt-2 border-t border-border/40">
                                <div>
                                  <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5">{sourceDict.languageName}</p>
                                  <p className="text-xs font-bold text-text-primary">{result.sourceEntry.translation}</p>
                                </div>
                                <div>
                                  <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5">English (Middleman)</p>
                                  <p className="text-xs font-medium text-text-secondary">{result.pivotEnglish}</p>
                                </div>
                                <div>
                                  <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5">{result.languageName}</p>
                                  {result.missingTarget ? (
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs text-text-muted italic">Not yet recorded in {result.languageName}</span>
                                      <button
                                        type="button"
                                        onClick={() => openContributeModal(result.languageName, result.pivotEnglish)}
                                        className="text-[0.6rem] text-gold hover:underline font-semibold"
                                      >
                                        + Add
                                      </button>
                                    </div>
                                  ) : (
                                    <>
                                      <p className="text-sm font-bold text-gold">{result.entry.translation}</p>
                                      {result.entry.pronunciation && (
                                        <p className="text-[0.65rem] text-text-muted italic mt-0.5">/{result.entry.pronunciation}/</p>
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1.5">
                                <div>
                                  <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5">{isReverseToEnglish ? result.languageName : "English"}</p>
                                  <p className="text-xs sm:text-sm font-semibold text-text-primary">{isReverseToEnglish ? result.entry.translation : result.entry.english}</p>
                                </div>
                                <div>
                                  <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5">{isReverseToEnglish ? "English" : result.languageName}</p>
                                  <p className="text-sm font-bold text-gold">{isReverseToEnglish ? result.entry.english : result.entry.translation}</p>
                                  {result.entry.pronunciation && (
                                    <p className="text-[0.65rem] text-text-muted italic mt-0.5">/{result.entry.pronunciation}/</p>
                                  )}
                                </div>
                              </div>
                            )}

                            {result.entry.context && !result.missingTarget && (
                              <p className="text-[0.65rem] text-text-muted mt-2 bg-bg-elevated rounded-lg px-2.5 py-1 flex items-start gap-1.5">
                                <DynamicIcon emoji="💡" className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                                <span>{result.entry.context}</span>
                              </p>
                            )}
                          </div>
                          {!result.missingTarget && (
                            <div className="flex flex-col gap-1 flex-shrink-0">
                              <button onClick={() => copyToClipboard(isReverseToEnglish ? result.entry.english : result.entry.translation)} className="w-7 h-7 rounded-lg bg-bg-elevated hover:bg-border flex items-center justify-center transition-colors" title="Copy translation">
                                {copiedText === (isReverseToEnglish ? result.entry.english : result.entry.translation) ? (
                                  <svg className="w-3.5 h-3.5 text-kenya-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                ) : (
                                  <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                  </svg>
                                )}
                              </button>
                              <button onClick={() => toggleFavorite(favKey)} className="w-7 h-7 rounded-lg bg-bg-elevated hover:bg-border flex items-center justify-center transition-colors" title={isFav ? "Remove from favorites" : "Add to favorites"}>
                                <svg className={`w-3.5 h-3.5 ${isFav ? "text-kenya-red fill-kenya-red" : "text-text-muted"}`} fill={isFav ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Category Browser (when not searching) */}
            {!searchQuery && browseDict && (
              <>
                <div>
                  <h3 className="text-sm font-bold text-text-primary mb-2 font-[family-name:var(--font-outfit)]">
                    Browse {browseDict.languageName} by Category
                  </h3>
                  <ExpandablePillRow>
                    {ALL_CATEGORY_IDS.map((cat) => {
                      const hasEntries = browseDict.categories.some((c) => c.id === cat.id && c.entries.length > 0);
                      const active = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(active ? null : cat.id)}
                          disabled={!hasEntries}
                          className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1 text-xs font-medium border transition-all ${
                            active
                              ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                              : hasEntries
                              ? "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
                              : "border-border/50 bg-bg-elevated/40 text-text-muted/40 cursor-not-allowed"
                          }`}
                        >
                          {cat.name}
                        </button>
                      );
                    })}
                  </ExpandablePillRow>
                </div>

                {/* Category Entries Table */}
                {activeCategory && categoryEntries.length > 0 && (
                  <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
                    <div className="px-4 py-2.5 border-b border-border bg-bg-elevated/50">
                      <h4 className="text-sm font-semibold text-text-primary flex items-center gap-2">
                        <span><DynamicIcon emoji={ALL_CATEGORY_IDS.find((c) => c.id === activeCategory)?.icon} className="w-[1em] h-[1em]" /></span>
                        {ALL_CATEGORY_IDS.find((c) => c.id === activeCategory)?.name} — {browseDict.languageName}
                        <span className="text-[0.6rem] text-text-muted font-normal">({categoryEntries.length} entries)</span>
                      </h4>
                    </div>
                    <div className="divide-y divide-border">
                      {categoryEntries.map((entry, i) => {
                        const favKey = `${browseDict.languageId}:${entry.english}`;
                        const isFav = favorites.includes(favKey);
                        const matchedSource =
                          sourceDict && targetDict && sourceDict.languageId !== targetDict.languageId
                            ? extractNormalizedTerms(entry.english).map((t) => sourcePivotMap.get(t)).find(Boolean)
                            : undefined;

                        return (
                          <div key={i} className="px-3.5 sm:px-4 py-2.5 sm:py-3 hover:bg-bg-card-hover transition-colors">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0 flex-1 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
                                <div>
                                  <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5">
                                    {matchedSource && sourceDict ? `${sourceDict.languageName} → English` : "English"}
                                  </p>
                                  {matchedSource && sourceDict && (
                                    <p className="text-xs font-bold text-kenya-green-light">{matchedSource.translation}</p>
                                  )}
                                  <p className="text-[0.8125rem] text-text-primary font-medium">{entry.english}</p>
                                </div>
                                <div>
                                  <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5">{browseDict.languageName}</p>
                                  <p className="text-[0.8125rem] text-gold font-bold">{entry.translation}</p>
                                </div>
                                <div>
                                  {entry.pronunciation && (
                                    <p className="text-[0.75rem] text-text-muted italic">/{entry.pronunciation}/</p>
                                  )}
                                  {entry.context && (
                                    <p className="text-[0.65rem] text-text-muted mt-0.5">{entry.context}</p>
                                  )}
                                </div>
                              </div>
                              <div className="flex gap-1 flex-shrink-0">
                                <button onClick={() => copyToClipboard(entry.translation)} className="w-6 h-6 rounded bg-bg-elevated hover:bg-border flex items-center justify-center transition-colors" title="Copy">
                                  {copiedText === entry.translation ? (
                                    <svg className="w-3 h-3 text-kenya-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                  ) : (
                                    <svg className="w-3 h-3 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                  )}
                                </button>
                                <button onClick={() => toggleFavorite(favKey)} className="w-6 h-6 rounded bg-bg-elevated hover:bg-border flex items-center justify-center transition-colors">
                                  <svg className={`w-3 h-3 ${isFav ? "text-kenya-red fill-kenya-red" : "text-text-muted"}`} fill={isFav ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* ═══════════════════════════════════════ */}
        {/* ── COMPARE MODE ── */}
        {/* ═══════════════════════════════════════ */}
        {viewMode === "compare" && (
          <>
            <div className="bg-bg-card border border-border rounded-xl p-3.5 sm:p-5 space-y-3.5">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <label className="text-[0.6rem] uppercase tracking-wider text-text-muted font-medium">
                    Compare across languages ({compareLanguages.length}/{ALL_DICTS.length} selected)
                  </label>
                  <div className="flex items-center gap-1.5 bg-bg-elevated px-2 py-0.5 rounded-lg border border-border">
                    <button
                      type="button"
                      onClick={() => setCompareLanguages(ALL_DICTS.map((d) => d.languageId))}
                      className="text-[0.65rem] font-medium text-text-muted hover:text-gold transition-colors"
                    >
                      All ({ALL_DICTS.length})
                    </button>
                    <span className="text-[0.6rem] text-border">|</span>
                    <button
                      type="button"
                      onClick={() => setCompareLanguages(ALL_DICTS.filter((d) => d.family === "nilotic").map((d) => d.languageId))}
                      className="text-[0.65rem] font-medium text-text-muted hover:text-gold transition-colors"
                    >
                      Nilotic
                    </button>
                    <span className="text-[0.6rem] text-border">|</span>
                    <button
                      type="button"
                      onClick={() => setCompareLanguages(ALL_DICTS.filter((d) => d.family === "bantu").map((d) => d.languageId))}
                      className="text-[0.65rem] font-medium text-text-muted hover:text-gold transition-colors"
                    >
                      Bantu
                    </button>
                    <span className="text-[0.6rem] text-border">|</span>
                    <button
                      type="button"
                      onClick={() => setCompareLanguages(ALL_DICTS.filter((d) => d.family === "cushitic").map((d) => d.languageId))}
                      className="text-[0.65rem] font-medium text-text-muted hover:text-gold transition-colors"
                    >
                      Cushitic
                    </button>
                    <span className="text-[0.6rem] text-border">|</span>
                    <button
                      type="button"
                      onClick={() => setCompareLanguages([])}
                      className="text-[0.65rem] font-medium text-text-muted hover:text-kenya-red transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                <ExpandablePillRow>
                  {ALL_DICTS.map((d) => {
                    const isSelected = compareLanguages.includes(d.languageId);
                    return (
                      <button
                        key={d.languageId}
                        onClick={() => {
                          setCompareLanguages((prev) =>
                            isSelected ? prev.filter((l) => l !== d.languageId) : [...prev, d.languageId]
                          );
                        }}
                        className={`shrink-0 whitespace-nowrap px-2.5 py-1 rounded-full text-[0.65rem] font-medium transition-all flex items-center gap-1 ${
                          isSelected
                            ? "text-white shadow-sm"
                            : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"
                        }`}
                        style={isSelected ? { backgroundColor: FAMILY_COLORS[d.family] } : {}}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isSelected ? "rgba(255,255,255,0.5)" : FAMILY_COLORS[d.family] }} />
                        {d.languageName.split("(")[0].trim()}
                      </button>
                    );
                  })}
                </ExpandablePillRow>
              </div>

              <div className="space-y-2">
                <SearchInput
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClear={() => setSearchQuery("")}
                  placeholder="Type any English or Kenyan word (e.g. Water, Maĩ, Bishaan, Nkárɛ́, Maji)..."
                  id="compare-search"
                />
                <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                  <span className="text-[0.65rem] text-text-muted font-medium">Quick compare:</span>
                  {POPULAR_COMPARE_WORDS.map((word) => (
                    <button
                      key={word}
                      type="button"
                      onClick={() => setSearchQuery(word)}
                      className={`px-2 py-0.5 rounded-md text-[0.65rem] transition-colors border ${
                        searchQuery.toLowerCase() === word.toLowerCase()
                          ? "bg-gold/15 text-gold border-gold/30 font-semibold"
                          : "bg-bg-elevated text-text-secondary border-border hover:border-gold/50 hover:text-text-primary"
                      }`}
                    >
                      {word}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {!searchQuery && (
              <div className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mx-auto">
                  <BarChart className="w-6 h-6" />
                </div>
                <div className="max-w-md mx-auto">
                  <h4 className="text-sm font-semibold text-text-primary">Compare Across {ALL_DICTS.length} Kenyan Languages</h4>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    Instantly compare vocabulary across Swahili, Kikuyu, Dholuo, Kalenjin, Maasai, Samburu, Embu, Taita, Borana, Rendille, Pokomo, Pokot, Taveta, and more.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 pt-1 max-w-xl mx-auto">
                  {POPULAR_COMPARE_WORDS.map((word) => (
                    <button
                      key={word}
                      type="button"
                      onClick={() => setSearchQuery(word)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-bg-elevated border border-border text-text-secondary hover:text-gold hover:border-gold/40 transition-all flex items-center gap-1.5"
                    >
                      <span className="text-[0.7rem] text-gold">⚡</span>
                      <span>{word}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {searchQuery && comparisonResults.length > 0 && (
              <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-border bg-bg-elevated/50 flex items-center justify-between flex-wrap gap-2">
                  <h4 className="text-sm font-semibold text-text-primary">
                    &ldquo;{searchQuery}&rdquo; {resolvedEnglish && resolvedEnglish !== searchQuery.toLowerCase() ? <span className="text-text-muted font-normal text-xs"> (English middleman: &ldquo;{resolvedEnglish}&rdquo;)</span> : null} in {compareLanguages.length} languages
                  </h4>
                  <span className="text-[0.65rem] text-text-muted">
                    {comparisonResults.filter((r) => r.entry).length} of {compareLanguages.length} found
                  </span>
                </div>
                <div className="divide-y divide-border">
                  {comparisonResults.map((result) => (
                    <div key={result.languageId} className="px-4 py-2.5 sm:py-3 flex items-center gap-3 hover:bg-bg-card-hover transition-colors">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: FAMILY_COLORS[result.family] }} />
                      <div className="w-28 sm:w-36 flex-shrink-0">
                        <p className="text-xs font-medium text-text-primary break-words">{result.languageName}</p>
                        <p className="text-[0.6rem] text-text-muted capitalize">{result.family}</p>
                      </div>
                      {result.entry ? (
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-gold">{result.entry.translation}</p>
                          {result.entry.pronunciation && (
                            <p className="text-[0.65rem] text-text-muted italic">/{result.entry.pronunciation}/</p>
                          )}
                          {result.entry.english.toLowerCase() !== searchQuery.toLowerCase() && (
                            <p className="text-[0.65rem] text-text-muted mt-0.5">Meaning: {result.entry.english}</p>
                          )}
                        </div>
                      ) : (
                        <div className="flex-1 flex items-center justify-between gap-2">
                          <p className="text-xs text-text-muted italic">Not in dictionary yet</p>
                          <button
                            type="button"
                            onClick={() => openContributeModal(result.languageName, resolvedEnglish || searchQuery)}
                            className="text-[0.65rem] text-gold hover:text-gold-light bg-gold/10 hover:bg-gold/20 px-2 py-0.5 rounded font-medium transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                            <span>Add translation</span>
                          </button>
                        </div>
                      )}
                      {result.entry && (
                        <button onClick={() => copyToClipboard(result.entry!.translation)} className="w-6 h-6 rounded bg-bg-elevated hover:bg-border flex items-center justify-center transition-colors flex-shrink-0">
                          {copiedText === result.entry.translation ? (
                            <svg className="w-3 h-3 text-kenya-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-3 h-3 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* ═══════════════════════════════════════ */}
        {/* ── BROWSE MODE — All 22 Languages ── */}
        {/* ═══════════════════════════════════════ */}
        {viewMode === "browse" && (
          <>
            <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
              <div>
                <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                  All Kenyan Languages ({ALL_DICTS.length} active dictionaries)
                </h3>
                <p className="text-[0.65rem] text-text-muted">{totalEntries.toLocaleString()} total verified words &amp; phrases</p>
              </div>
              <button
                type="button"
                onClick={() => openContributeModal()}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gold text-kenya-black hover:bg-gold-light transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Contribute Vocabulary</span>
              </button>
            </div>

            {/* Active Language Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {ALL_DICTS.map((dict) => {
                const entryCount = dict.categories.reduce((s, c) => s + c.entries.length, 0);
                const maxEntries = 120;
                const coverage = Math.min(100, (entryCount / maxEntries) * 100);
                return (
                  <div
                    key={dict.languageId}
                    className="bg-bg-card border border-border rounded-xl p-3.5 sm:p-4 flex flex-col justify-between group hover:border-gold/30 transition-all"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <button
                          type="button"
                          onClick={() => { setViewMode("translate"); setTargetLanguage(dict.languageId); setSourceLanguage("english"); }}
                          className="text-left group-hover:text-gold transition-colors cursor-pointer"
                        >
                          <h4 className="text-sm font-bold text-text-primary group-hover:text-gold transition-colors">{dict.languageName}</h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: FAMILY_COLORS[dict.family] }} />
                            <span className="text-[0.6rem] text-text-muted capitalize">{dict.family}</span>
                            <span className="text-[0.5rem] text-text-muted">·</span>
                            <span className="text-[0.6rem] text-text-muted">{dict.nativeName}</span>
                          </div>
                        </button>
                        <span className="text-xs font-bold text-gold">{entryCount}</span>
                      </div>
                      <p className="text-[0.6rem] text-text-muted mb-2">{dict.counties.slice(0, 3).join(", ")}{dict.counties.length > 3 ? ` +${dict.counties.length - 3}` : ""}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {dict.categories.map((cat) => (
                          <span key={cat.id} className="text-[0.55rem] bg-bg-elevated px-1.5 py-0.5 rounded text-text-muted"><DynamicIcon emoji={cat.icon} className="w-[1em] h-[1em]" /> {cat.entries.length}</span>
                        ))}
                      </div>
                      <div className="h-1 bg-bg-elevated rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${coverage}%`, backgroundColor: FAMILY_COLORS[dict.family] }} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-3 pt-2.5 border-t border-border/60">
                      <button
                        type="button"
                        onClick={() => { setViewMode("translate"); setTargetLanguage(dict.languageId); setSourceLanguage("english"); }}
                        className="text-[0.65rem] font-medium text-text-secondary hover:text-gold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>Translate</span>
                        <span>→</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => openContributeModal(dict.languageName)}
                        className="text-[0.65rem] font-medium text-gold hover:text-gold-light bg-gold/10 hover:bg-gold/20 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Contribute</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ── Stats Footer ── */}
        <div className="bg-bg-card border border-border rounded-xl p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About This Translator</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <div className="text-center">
              <p className="text-lg font-bold text-gold">{ALL_DICTS.length}</p>
              <p className="text-[0.6rem] text-text-muted">Kenyan Languages</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gold">{totalEntries.toLocaleString()}</p>
              <p className="text-[0.6rem] text-text-muted">Words &amp; Phrases</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gold">{ALL_CATEGORY_IDS.length}</p>
              <p className="text-[0.6rem] text-text-muted">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gold">Any ↔ Any</p>
              <p className="text-[0.6rem] text-text-muted">English Bridge</p>
            </div>
          </div>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>Translate between any two Kenyan languages (or into all {ALL_DICTS.length} languages at once) using English as an automatic semantic bridge.</span></li>
            <li className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>Grounded in verified public-domain monographs (1844–1927), Unicode CLDR, and community linguistic contributions.</span></li>
          </ul>
        </div>

      </div>

      {/* ═══════════════════════════════════════ */}
      {/* ── CONTRIBUTE MODAL ── */}
      {/* ═══════════════════════════════════════ */}
      {isContributeOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-kenya-black/80 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeContributeModal();
          }}
        >
          <div className="bg-bg-card border border-border rounded-2xl w-full max-w-lg p-5 sm:p-6 shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-150">
            <button
              type="button"
              onClick={closeContributeModal}
              className="absolute top-4 right-4 w-7 h-7 rounded-lg bg-bg-elevated hover:bg-border flex items-center justify-center text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {!contributeSubmitted ? (
              <form onSubmit={handleSubmitContribution} className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-[0.65rem] uppercase tracking-wider text-gold font-bold">Community Linguistic Contribution</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                    Contribute to {contributeLanguage}
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5">
                    Help expand KenyaHub&apos;s open dictionaries. All submitted vocabulary is reviewed and approved in the admin panel.
                  </p>
                </div>

                <div>
                  <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                    Contribution Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {[
                      { id: "new_word" as const, label: "New Word" },
                      { id: "correction" as const, label: "Correction" },
                      { id: "pronunciation" as const, label: "Pronounce" },
                      { id: "reviewer" as const, label: "Volunteer" },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setContributeType(type.id)}
                        className={`px-2 py-1.5 rounded-lg text-xs font-medium text-center transition-all cursor-pointer ${
                          contributeType === type.id
                            ? "bg-gold text-kenya-black font-semibold shadow-sm"
                            : "bg-bg-elevated border border-border text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                    Target Language
                  </label>
                  <CustomSelect
                    value={contributeLanguage}
                    onValueChange={setContributeLanguage}
                    options={[
                      ...ALL_CONTRIBUTE_LANGUAGES.map((l) => ({ value: l, label: l })),
                      { value: "Other", label: "Other Kenyan Language..." },
                    ]}
                    id="contribute-lang"
                  />
                </div>

                {contributeType !== "reviewer" ? (
                  <>
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                        English Word or Phrase <span className="text-kenya-red">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={contributeEnglish}
                        onChange={(e) => setContributeEnglish(e.target.value)}
                        placeholder="e.g. Water, Hello, Peace, How are you?"
                        className="input-field text-sm w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                        {contributeLanguage} Translation <span className="text-kenya-red">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={contributeTranslation}
                        onChange={(e) => setContributeTranslation(e.target.value)}
                        placeholder={`Word or phrase in ${contributeLanguage}...`}
                        className="input-field text-sm w-full"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                          Pronunciation (Optional)
                        </label>
                        <input
                          type="text"
                          value={contributePronunciation}
                          onChange={(e) => setContributePronunciation(e.target.value)}
                          placeholder="e.g. eh-johk, mah-jee"
                          className="input-field text-xs w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                          County / Dialect (Optional)
                        </label>
                        <input
                          type="text"
                          value={contributeContext}
                          onChange={(e) => setContributeContext(e.target.value)}
                          placeholder="e.g. Turkana North dialect"
                          className="input-field text-xs w-full"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="bg-bg-elevated border border-border rounded-xl p-3 text-xs text-text-secondary leading-relaxed space-y-2">
                    <p>
                      <strong className="text-gold">Native Speaker / Reviewer Program:</strong> Are you fluent in {contributeLanguage}?
                      Help verify translations and build authentic vocabulary, audio, and grammar lessons.
                    </p>
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                        Dialect / Region &amp; Background
                      </label>
                      <textarea
                        value={contributeContext}
                        onChange={(e) => setContributeContext(e.target.value)}
                        rows={2}
                        placeholder={`Tell us about your background or regional dialect in ${contributeLanguage}...`}
                        className="input-field text-xs w-full"
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-border/60">
                  <div>
                    <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                      Your Name / Handle (for Credit)
                    </label>
                    <input
                      type="text"
                      value={contributorName}
                      onChange={(e) => setContributorName(e.target.value)}
                      placeholder="e.g. Akeno L., Kiprop, Anon"
                      className="input-field text-xs w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={contributorEmail}
                      onChange={(e) => setContributorEmail(e.target.value)}
                      placeholder="For attribution updates"
                      className="input-field text-xs w-full"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={closeContributeModal}
                    className="px-3.5 py-2 rounded-lg text-xs font-medium text-text-muted hover:text-text-primary bg-bg-elevated hover:bg-border transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-gold text-kenya-black hover:bg-gold-light transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Contribution</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-4 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-kenya-green/15 text-kenya-green-light flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                    Asante Sana! Thank You!
                  </h3>
                  <p className="text-xs text-text-muted max-w-sm mx-auto mt-1 leading-relaxed">
                    Your contribution for <strong className="text-gold">{contributeLanguage}</strong> has been submitted to the admin panel for review and saved on this device.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={closeContributeModal}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-text-muted hover:text-text-primary bg-bg-elevated transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </ToolShell>
  );
}
