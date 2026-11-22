/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import DynamicIcon from "@/components/ui/DynamicIcon";
import SearchInput from "@/components/ui/SearchInput";

import { useState, useMemo, useCallback, useEffect, useDeferredValue } from "react";
import ToolShell, { type RichGuideEntry } from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import CustomSelect from "@/components/ui/CustomSelect";
import { BarChart, BookOpen, Dices, Folder, Hash, Plus, X, Check, Send, ArrowRight, ChevronLeft, ChevronRight, Volume2 } from "lucide-react";

import {
  ALL_DICT_METAS,
  DICT_META_MAP,
  ALL_CATEGORY_IDS,
  TOTAL_DICTIONARY_ENTRIES,
  INITIAL_RANDOM_WORDS,
  type DictEntry,
  type DictCategory,
  type Dictionary,
} from "@/data/dictionaries/metadata";
import { getLanguageIdentity } from "@/data/language-identity";
import { addContribution, subscribeContributions } from "@/lib/contributions";
import { playLanguageAudio, hasVerifiedAudio } from "@/lib/language-audio";
import { renderInlineMarkdown } from "@/lib/render-markdown";
import { scrollToTopIfScrolled, scrollToSectionIfNeeded } from "@/lib/scroll";
import {
  FAMILY_COLORS,
  POPULAR_COMPARE_WORDS,
  extractNormalizedTerms,
  getDictIndex,
  runTranslatorSearch,
  getFuzzySuggestions,
} from "@/lib/dictionary-search";
import {
  CATEGORY_PAGE_SIZE,
  SEARCH_PAGE_SIZE,
  CONTACT_EMAIL,
  COMING_SOON_LANGUAGES,
  ALL_CONTRIBUTE_LANGUAGES,
  TRANSLATOR_FAQ as faq,
  DICT_CACHE,
  loadDictionary,
  applyApprovedContributionsToDict,
} from "@/lib/dictionary-loader";

const tool = TOOLS.find((t) => t.slug === "kenyan-translator")!;

// ─── Component ───
export default function KenyanTranslatorPage() {
  const [sourceLanguage, setSourceLanguage] = useState("english");
  const [targetLanguage, setTargetLanguage] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categorySearch, setCategorySearch] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const [audioOnly, setAudioOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"translate" | "browse" | "favorites">("translate");
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loadedDicts, setLoadedDicts] = useState<Record<string, Dictionary>>(() => ({ ...DICT_CACHE }));
  const [isLoadingDicts, setIsLoadingDicts] = useState(false);

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
  const [contributeMailtoUrl, setContributeMailtoUrl] = useState<string | null>(null);

  const ensureDictionariesLoaded = useCallback(async (langIds: string[]) => {
    const missing = langIds.filter((id) => id && id !== "english" && id !== "all" && !DICT_CACHE[id]);
    if (missing.length === 0) return;
    setIsLoadingDicts(true);
    await Promise.all(missing.map((id) => loadDictionary(id)));
    setLoadedDicts({ ...DICT_CACHE });
    setIsLoadingDicts(false);
  }, []);

  // Load required dictionaries on demand with debounced progressive loading to protect mobile INP
  useEffect(() => {
    const toLoad = new Set<string>(["swahili"]);
    if (sourceLanguage !== "english") toLoad.add(sourceLanguage);
    if (targetLanguage !== "english" && targetLanguage !== "all") toLoad.add(targetLanguage);
    ensureDictionariesLoaded(Array.from(toLoad));

    if (targetLanguage === "all" && searchQuery.trim().length > 0) {
      const priorityIds = ["swahili", "kikuyu", "luo", "kalenjin", "luhya", "kamba"];
      const timer1 = setTimeout(() => {
        ensureDictionariesLoaded(priorityIds);
      }, 150);
      const timer2 = setTimeout(() => {
        const remainingIds = ALL_DICT_METAS.map((d) => d.languageId).filter(
          (id) => !priorityIds.includes(id)
        );
        ensureDictionariesLoaded(remainingIds);
      }, 420);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [sourceLanguage, targetLanguage, searchQuery, viewMode, ensureDictionariesLoaded]);

  // Load browse target or favorites dictionaries on demand
  useEffect(() => {
    if (viewMode === "browse" && targetLanguage !== "all" && targetLanguage !== "english") {
      ensureDictionariesLoaded([targetLanguage]);
    } else if (viewMode === "favorites" && favorites.length > 0) {
      const favLangIds = Array.from(new Set(favorites.map((k) => k.split(":")[0]).filter(Boolean)));
      ensureDictionariesLoaded(favLangIds);
    }
  }, [viewMode, targetLanguage, favorites, ensureDictionariesLoaded]);

  // Live-overlay approved community contributions when updated
  useEffect(() => {
    return subscribeContributions(() => {
      Object.values(DICT_CACHE).forEach((d) => applyApprovedContributionsToDict(d));
      setLoadedDicts({ ...DICT_CACHE });
    });
  }, []);

  // Reset pagination when filters change
  useEffect(() => {
    setCategoryPage(1);
    setCategorySearch("");
  }, [activeCategory, sourceLanguage, targetLanguage]);

  useEffect(() => {
    setSearchPage(1);
    if (targetLang && targetLang !== 'english') preloadLanguageAudioIndex(targetLang);
    if (sourceLang && sourceLang !== 'english') preloadLanguageAudioIndex(sourceLang);
  }, [searchQuery, sourceLanguage, targetLanguage]);

  const openContributeModal = useCallback((langName?: string, defaultEnglish?: string) => {
    if (langName) setContributeLanguage(langName.split("(")[0].trim());
    if (defaultEnglish) setContributeEnglish(defaultEnglish);
    setContributeSubmitted(false);
    setIsContributeOpen(true);
  }, []);

  const closeContributeModal = useCallback(() => {
    setIsContributeOpen(false);
    setContributeSubmitted(false);
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
    setContributeMailtoUrl(mailtoUrl);
    setContributeSubmitted(true);
  };

  // Support ?lang=<languageId>&q=<query> URL deep links from courses and blog posts
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get("lang")?.toLowerCase().trim();
    const qParam = params.get("q")?.trim();
    if (langParam && DICT_META_MAP[langParam]) {
      setTargetLanguage(langParam);
      setSourceLanguage("english");
    }
    if (qParam) {
      setSearchQuery(qParam);
    }
  }, []);

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

  // Debounced recent search recording (outside useMemo)
  useEffect(() => {
    const q = searchQuery.toLowerCase().trim();
    if (q.length <= 2) return;
    const t = setTimeout(() => addRecentSearch(q), 500);
    return () => clearTimeout(t);
  }, [searchQuery, addRecentSearch]);

  // O(1) Favorites Set
  const favoritesSet = useMemo(() => new Set(favorites), [favorites]);

  const toggleFavorite = useCallback((key: string) => {
    setFavorites((prev) => {
      const next = prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key];
      try { localStorage.setItem("kh-translator-favs", JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  // Copy to clipboard
  const playAudio = useCallback((entry: DictEntry, langId?: string) => {
    playLanguageAudio(entry, langId || "swahili");
  }, []);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    }).catch(() => {});
  }, []);

  const targetMeta = targetLanguage !== "english" && targetLanguage !== "all" ? DICT_META_MAP[targetLanguage] : null;
  const sourceMeta = sourceLanguage !== "english" ? DICT_META_MAP[sourceLanguage] : null;
  const targetDict = targetLanguage !== "english" && targetLanguage !== "all" ? loadedDicts[targetLanguage] || null : null;
  const sourceDict = sourceLanguage !== "english" ? loadedDicts[sourceLanguage] || null : null;
  const activeDictList = useMemo(
    () => ALL_DICT_METAS.map((m) => loadedDicts[m.languageId]).filter(Boolean) as Dictionary[],
    [loadedDicts]
  );

  // ─── Fast Indexed Search / Translation Logic (Shared Engine) ───
  const { searchResults, detectedPivotWords } = useMemo(
    () =>
      runTranslatorSearch({
        query: deferredSearchQuery,
        sourceLanguage,
        targetLanguage,
        sourceDict,
        targetDict,
        activeDictList,
        maxSingleDictResults: 150,
      }),
    [deferredSearchQuery, sourceLanguage, targetLanguage, targetDict, sourceDict, activeDictList]
  );

  // Fuzzy "Did you mean?" suggestions when search returns 0 results
  const fuzzySuggestions = useMemo(() => {
    if (!deferredSearchQuery.trim() || deferredSearchQuery.trim().length < 3 || searchResults.length > 0) return [];
    const pool =
      sourceLanguage === "english"
        ? targetDict
          ? [targetDict]
          : activeDictList
        : sourceDict
        ? [sourceDict]
        : activeDictList;
    return getFuzzySuggestions(deferredSearchQuery, pool, sourceLanguage, 5);
  }, [deferredSearchQuery, searchResults.length, sourceLanguage, targetDict, sourceDict, activeDictList]);

  // Swap languages while preserving or flipping the active query
  const swapLanguages = useCallback(() => {
    const isReverseToEnglish = sourceLanguage !== "english" && targetLanguage === "english";
    const topMatch = searchResults.find((r) => !r.missingTarget);
    if (targetLanguage === "all") {
      const nextSource = topMatch?.languageId || "swahili";
      setSourceLanguage(nextSource);
      setTargetLanguage("english");
      if (topMatch && searchQuery.trim()) {
        setSearchQuery(topMatch.entry.translation.split(/[\/;(]/)[0].trim());
      }
    } else {
      setSourceLanguage(targetLanguage);
      setTargetLanguage(sourceLanguage);
      if (topMatch && searchQuery.trim()) {
        const flipped = isReverseToEnglish
          ? topMatch.entry.english.split(/[\/;(]/)[0].trim()
          : topMatch.entry.translation.split(/[\/;(]/)[0].trim();
        if (flipped) setSearchQuery(flipped);
      }
    }
  }, [sourceLanguage, targetLanguage, searchResults, searchQuery]);

  // Resolved Favorite Entries across loaded dictionaries
  const favoriteItems = useMemo(() => {
    const out: {
      favKey: string;
      languageId: string;
      languageName: string;
      family: string;
      categoryName: string;
      entry: DictEntry;
    }[] = [];
    for (const key of favorites) {
      const colonIdx = key.indexOf(":");
      if (colonIdx === -1) continue;
      const langId = key.slice(0, colonIdx);
      const eng = key.slice(colonIdx + 1);
      const dict = loadedDicts[langId];
      if (!dict) continue;
      let foundEntry: DictEntry | undefined;
      let foundCat = "Vocabulary";
      for (const cat of dict.categories) {
        const match = cat.entries.find((e) => e.english === eng);
        if (match) {
          foundEntry = match;
          foundCat = cat.name;
          break;
        }
      }
      if (foundEntry) {
        out.push({
          favKey: key,
          languageId: dict.languageId,
          languageName: dict.languageName,
          family: dict.family,
          categoryName: foundCat,
          entry: foundEntry,
        });
      }
    }
    return out;
  }, [favorites, loadedDicts]);

  const dedupedSearchResults = useMemo(() => {
    const seen = new Set<string>();
    return searchResults.filter((r) => {
      const k = `${r.languageId}|${r.entry.english.trim().toLowerCase()}|${r.entry.translation.trim().toLowerCase()}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }, [searchResults]);

  const audioSearchCount = useMemo(
    () => dedupedSearchResults.filter((r) => hasVerifiedAudio(r.entry)).length,
    [dedupedSearchResults]
  );

  const filteredSearchResults = useMemo(
    () => (audioOnly ? dedupedSearchResults.filter((r) => hasVerifiedAudio(r.entry)) : dedupedSearchResults),
    [dedupedSearchResults, audioOnly]
  );

  const visibleSearchResults = useMemo(
    () => filteredSearchResults.slice(0, searchPage * SEARCH_PAGE_SIZE),
    [filteredSearchResults, searchPage]
  );

  // ─── Category Browser (Supports direct browsing OR Kenyan-to-Kenyan pivot browsing!) ───
  const browseLangId =
    targetLanguage !== "english" && targetLanguage !== "all"
      ? targetLanguage
      : sourceLanguage !== "english"
      ? sourceLanguage
      : "swahili";
  const browseMeta = DICT_META_MAP[browseLangId] || DICT_META_MAP.swahili;
  const browseDict = loadedDicts[browseLangId] || null;

  const browseAudioEntries = useMemo(() => {
    if (!browseDict) return [];
    const seen = new Set<string>();
    const list: DictEntry[] = [];
    for (const c of browseDict.categories) {
      for (const e of c.entries) {
        if (!hasVerifiedAudio(e)) continue;
        const k = `${e.english.trim().toLowerCase()}|${e.translation.trim().toLowerCase()}`;
        if (seen.has(k)) continue;
        seen.add(k);
        list.push(e);
      }
    }
    return list;
  }, [browseDict]);

  const categoryEntries = useMemo(() => {
    if (!activeCategory || !browseDict) return [];
    let baseEntries: DictEntry[];
    if (activeCategory === "__audio__") {
      baseEntries = browseAudioEntries;
    } else {
      const cat = browseDict.categories.find((c) => c.id === activeCategory);
      if (!cat) return [];
      const seen = new Set<string>();
      baseEntries = cat.entries.filter((e) => {
        const k = `${e.english.trim().toLowerCase()}|${e.translation.trim().toLowerCase()}`;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });
    }
    const stripDia = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const q = stripDia(categorySearch.trim());
    if (!q) return baseEntries;
    return baseEntries.filter(
      (e) =>
        stripDia(e.english).includes(q) ||
        stripDia(e.translation).includes(q) ||
        (e.context && stripDia(e.context).includes(q))
    );
  }, [activeCategory, browseDict, browseAudioEntries, categorySearch]);

  const totalCategoryPages = Math.max(1, Math.ceil(categoryEntries.length / CATEGORY_PAGE_SIZE));
  const paginatedCategoryEntries = useMemo(() => {
    const start = (categoryPage - 1) * CATEGORY_PAGE_SIZE;
    return categoryEntries.slice(start, start + CATEGORY_PAGE_SIZE);
  }, [categoryEntries, categoryPage]);

  // Map English headword -> sourceDict entry when browsing a category in Kenyan A -> Kenyan B mode
  const sourcePivotMap = useMemo(() => {
    if (!sourceDict) return new Map<string, DictEntry>();
    const idx = getDictIndex(sourceDict);
    const map = new Map<string, DictEntry>();
    for (const [term, items] of idx.byEngTerm.entries()) {
      if (items.length > 0) map.set(term, items[0].entry);
    }
    return map;
  }, [sourceDict]);

  // Stats
  const totalEntries = TOTAL_DICTIONARY_ENTRIES;

  // ─── Daily Word Feature (Seeded Deterministically by Calendar Date YYYY-MM-DD for Zero Hydration Flicker) ───
  const [randomWord, setRandomWord] = useState<{ entry: DictEntry; langName: string; langId: string } | null>(() => {
    if (!INITIAL_RANDOM_WORDS.length) return null;
    const dateStr = new Date().toISOString().slice(0, 10);
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = (hash * 31 + dateStr.charCodeAt(i)) >>> 0;
    }
    const sample = INITIAL_RANDOM_WORDS[hash % INITIAL_RANDOM_WORDS.length];
    return sample ? { entry: sample.entry, langName: sample.langName, langId: sample.langId } : null;
  });

  const pickBalancedRandomWord = useCallback(
    (excludeLangId?: string) => {
      // Only pull from loaded dictionaries when a broad multi-language set (>= 10) is loaded;
      // otherwise use INITIAL_RANDOM_WORDS which is evenly balanced across all 23 Kenyan languages.
      if (activeDictList.length >= 10) {
        const eligibleDicts = activeDictList.filter((d) => d.languageId !== excludeLangId);
        const pool = eligibleDicts.length > 0 ? eligibleDicts : activeDictList;
        const dict = pool[Math.floor(Math.random() * pool.length)];
        const validCats = dict.categories.filter(
          (c) => c.id !== "culture-history" && c.entries.length > 0
        );
        if (validCats.length > 0) {
          for (let attempt = 0; attempt < 24; attempt++) {
            const cat = validCats[Math.floor(Math.random() * validCats.length)];
            const candidate = cat.entries[Math.floor(Math.random() * cat.entries.length)];
            if (
              candidate &&
              candidate.english.length >= 2 &&
              candidate.english.length <= 32 &&
              candidate.translation.length >= 2 &&
              candidate.translation.length <= 36 &&
              !/[();:/[\]"„—]/.test(candidate.english) &&
              !/[();:[\]"„—]/.test(candidate.translation)
            ) {
              return { entry: candidate, langName: dict.languageName, langId: dict.languageId };
            }
          }
        }
      }
      const candidates = INITIAL_RANDOM_WORDS.filter((w) => w.langId !== excludeLangId);
      const sourcePool = candidates.length > 0 ? candidates : INITIAL_RANDOM_WORDS;
      const sample = sourcePool[Math.floor(Math.random() * sourcePool.length)];
      return sample ? { entry: sample.entry, langName: sample.langName, langId: sample.langId } : null;
    },
    [activeDictList]
  );



  const getRandomWord = useCallback(() => {
    setRandomWord((prev) => pickBalancedRandomWord(prev?.langId));
  }, [pickBalancedRandomWord]);

  useEffect(() => {
    scrollToTopIfScrolled();
  }, [viewMode]);

  const isPivotMode = sourceLanguage !== "english" && targetLanguage !== "english";

  const translatorGuideOverride: RichGuideEntry = useMemo(
    () => ({
      notesTitle: `${ALL_DICT_METAS.length}-Language Kenyan Dictionary & Cross-Dialect Translator Guide`,
      overview: [
        `Unlike generic machine translation tools that frequently conflate East African languages, the KenyaHub ${ALL_DICT_METAS.length}-Language Translator searches ${totalEntries.toLocaleString("en-KE")}+ verified entries across ${ALL_DICT_METAS.length} Kenyan languages grounded in verified Kenyan dictionaries and historical wordlists.`,
        `Translate directly between English and any Kenyan language, compare cognates side by side across all ${ALL_DICT_METAS.length} languages, or translate between any two Kenyan languages using English as a semantic bridge.`,
      ],
      howItWorks: [],
      complianceTips: [],
      notes: [],
      faq,
    }),
    [totalEntries]
  );

  return (
    <ToolShell tool={tool} faq={faq} guideOverride={translatorGuideOverride}>
      <div className="space-y-3 sm:space-y-5">

        {/* ── Random Word of the Moment ── */}
        {randomWord && (
          <div className="bg-gradient-to-r from-gold/10 to-kenya-green/10 border border-gold/20 rounded-xl p-2.5 sm:p-4 flex items-center justify-between gap-2.5 sm:gap-4">
            <div className="min-w-0">
              <p className="text-[0.6rem] uppercase tracking-wider text-gold font-medium mb-0.5 sm:mb-1 flex items-center gap-1.5"><Dices className="w-3 h-3" /> Discover a word ({ALL_DICT_METAS.length} Kenyan languages)</p>
              <p className="text-sm font-bold text-text-primary">{randomWord.entry.english}</p>
              <p className="text-xs text-text-secondary mt-0.5">
                <span className="text-gold font-medium">{randomWord.entry.translation}</span>
                <span className="text-text-muted"> — {randomWord.langName}</span>
              </p>
              {(randomWord.entry.pronunciation || hasVerifiedAudio(randomWord.entry)) && (
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  {randomWord.entry.pronunciation && (
                    <p className="text-[0.65rem] text-text-muted italic">/{randomWord.entry.pronunciation}/</p>
                  )}
                  {hasVerifiedAudio(randomWord.entry) && (
                    <button
                      type="button"
                      onClick={() => playAudio(randomWord.entry, randomWord.langId)}
                      className="inline-flex items-center gap-1 text-[0.65rem] text-sky hover:underline font-semibold cursor-pointer"
                      title="Play verified native-speaker recording"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>Listen</span>
                    </button>
                  )}
                </div>
              )}
            </div>
            <button onClick={getRandomWord} className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold/15 hover:bg-gold/25 flex items-center justify-center transition-colors cursor-pointer" title="Get another word">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        )}

        {/* ── View Mode Tabs (Standalone Horizontal Pills) ── */}
        <ExpandablePillRow className="[&>button]:!h-7 [&>button]:!w-7 sm:[&>button]:!h-8 sm:[&>button]:!w-8 [&>button]:rounded-full [&_.expandable-pill-row]:px-1 [&_.expandable-pill-row]:scroll-pl-1">
          {([
            { id: "translate" as const, label: <>Translate &amp; Dictionary <span className="whitespace-nowrap">(All {ALL_DICT_METAS.length} Languages)</span></> },
            { id: "browse" as const, label: `Browse ${ALL_DICT_METAS.length} Dictionaries` },
            { id: "favorites" as const, label: `Saved Favorites (♥ ${favorites.length.toLocaleString("en-KE")})` },
          ]).map((mode) => {
            const active = viewMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => { setViewMode(mode.id); setSearchQuery(""); setActiveCategory(null); }}
                className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 sm:px-4 sm:py-1.5 min-h-[30px] sm:min-h-[38px] inline-flex items-center justify-center gap-1 text-xs font-semibold border transition-all cursor-pointer ${
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
            {/* Language Selector & Search Controls (No Outer Box Container) */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <div className="w-full sm:flex-1 min-w-0">
                  <label className="block text-[0.6rem] uppercase tracking-wider text-text-muted mb-1 font-medium">From (Source Language)</label>
                  <CustomSelect
                    value={sourceLanguage}
                    onValueChange={setSourceLanguage}
                    options={[
                      { value: "english", label: "English" },
                      ...ALL_DICT_METAS.map((d) => ({ value: d.languageId, label: d.languageName }))
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
                      { value: "all", label: `All ${ALL_DICT_METAS.length} Kenyan Languages` },
                      { value: "english", label: "English" },
                      ...ALL_DICT_METAS.map((d) => ({ value: d.languageId, label: d.languageName }))
                    ]}
                    id="target-lang"
                  />
                </div>
              </div>

              {/* Bridge Indicator Badge when translating Kenyan -> Kenyan or Kenyan -> All */}
              {isPivotMode && (
                <div className="mt-2.5 px-3 py-1.5 rounded-lg bg-gold/10 border border-gold/25 flex items-center gap-2 text-[0.6875rem] text-text-secondary">
                  <span className="text-gold font-semibold">English Middleman Active:</span>
                  <span>
                    Translating from <strong>{sourceMeta?.languageName}</strong>{" "}
                    <ArrowRight className="inline w-3 h-3 text-gold mx-0.5" /> <strong>English</strong>{" "}
                    <ArrowRight className="inline w-3 h-3 text-gold mx-0.5" />{" "}
                    <strong>{targetLanguage === "all" ? `All ${ALL_DICT_METAS.length - 1} Other Kenyan Languages` : targetMeta?.languageName}</strong>
                  </span>
                </div>
              )}

              {/* Search Input */}
              <div className="mt-2 sm:mt-4">
                <SearchInput
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClear={() => setSearchQuery("")}
                  placeholder={
                    sourceLanguage === "english"
                      ? "Type an English word..."
                      : `Type a word in ${sourceMeta?.languageName ?? "source language"} (or English)...`
                  }
                  className="!h-9 sm:!h-11 text-sm w-full"
                  id="translator-search"
                />
              </div>

              {/* Quick Suggestions & Recent Searches */}
              {!searchQuery && (
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  <span className="text-[0.6rem] text-text-muted">Try:</span>
                  {POPULAR_COMPARE_WORDS.slice(0, 8).map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setSearchQuery(w)}
                      className="text-xs px-2.5 py-1 min-h-[28px] sm:min-h-[34px] inline-flex items-center rounded-full bg-bg-elevated border border-border text-text-secondary hover:text-gold hover:border-gold/30 transition-colors cursor-pointer"
                    >
                      {w}
                    </button>
                  ))}
                  {recentSearches.length > 0 && (
                    <div className="w-full flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[0.65rem] text-text-muted">Recent:</span>
                      {recentSearches.slice(0, 4).map((s) => (
                        <button key={s} onClick={() => setSearchQuery(s)} className="text-xs px-2.5 py-1 min-h-[28px] sm:min-h-[34px] inline-flex items-center rounded-full bg-gold/10 border border-gold/25 text-gold hover:bg-gold/20 transition-colors cursor-pointer">
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Target Language Info Banner */}
            {targetMeta && !searchQuery && (
              <div className="bg-bg-card border border-border rounded-xl p-3.5 sm:p-4 flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: FAMILY_COLORS[targetMeta.family] }} />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-text-primary">{targetMeta.languageName}</h3>
                  <p className="text-[0.65rem] text-text-muted mt-0.5">
                    {targetMeta.nativeName} · {(targetMeta.speakerCount / 1000000).toFixed(2).replace(/\.?0+$/, "")}M speakers · {targetMeta.family.charAt(0).toUpperCase() + targetMeta.family.slice(1)} family
                  </p>
                  <p className="text-[0.6rem] text-text-muted mt-1">{targetMeta.counties.join(", ")}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-[0.6rem] text-text-muted flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" /> {targetMeta.totalEntries.toLocaleString()} words
                    </span>
                    <span className="text-[0.6rem] text-text-muted flex items-center gap-1.5">
                      <Folder className="w-3.5 h-3.5" /> {targetMeta.categories.length} categories
                    </span>
                    <span className="text-[0.6rem] text-text-muted flex items-center gap-1.5">
                      <Hash className="w-3.5 h-3.5" /> v{targetMeta.dictionaryVersion}
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
                    Showing {visibleSearchResults.length} of {filteredSearchResults.length} result{filteredSearchResults.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
                    {audioSearchCount > 0 && (
                      <button
                        type="button"
                        onClick={() => { setAudioOnly((v) => !v); setSearchPage(1); }}
                        className={`ml-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold border transition-all cursor-pointer ${
                          audioOnly
                            ? "border-sky-400/60 bg-sky-500/20 text-sky-300"
                            : "border-border bg-bg-card text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        <DynamicIcon emoji="🔊" className="w-3 h-3" />
                        With Audio ({audioSearchCount.toLocaleString("en-KE")})
                      </button>
                    )}
                    {targetLanguage === "all" ? (
                      <span> across all Kenyan languages</span>
                    ) : targetMeta ? (
                      <span> in {targetMeta.languageName}</span>
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

                {searchResults.length === 0 && !isLoadingDicts && (
                  <div data-adsense-pause="true" className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 text-center">
                    <div className="flex justify-center mb-3"><DynamicIcon emoji="🔍" className="w-8 h-8 text-text-muted" /></div>
                    <p className="text-sm font-medium text-text-primary mb-1">No translations found</p>
                    {fuzzySuggestions.length > 0 && (
                      <div className="my-2.5 flex flex-wrap items-center justify-center gap-1.5">
                        <span className="text-xs text-text-secondary font-medium">Did you mean:</span>
                        {fuzzySuggestions.map((sug) => (
                          <button
                            key={sug}
                            type="button"
                            onClick={() => setSearchQuery(sug)}
                            className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gold/15 hover:bg-gold/25 text-gold border border-gold/30 transition-colors cursor-pointer"
                          >
                            {sug}
                          </button>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-text-muted max-w-sm mx-auto">
                      Try searching a core word (e.g. Water, Fire, Sun, Mother, One) or switch &ldquo;To&rdquo; to <strong>All {ALL_DICT_METAS.length} Kenyan Languages</strong>.
                    </p>
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      {targetLanguage !== "all" && (
                        <button
                          type="button"
                          onClick={() => setTargetLanguage("all")}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-kenya-green/15 hover:bg-kenya-green/25 text-kenya-green-light border border-kenya-green/30 transition-all cursor-pointer"
                        >
                          <span>Translate &ldquo;{searchQuery}&rdquo; to All {ALL_DICT_METAS.length} Languages</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => openContributeModal(targetMeta?.languageName || sourceMeta?.languageName || "Swahili", searchQuery)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gold/15 hover:bg-gold/25 text-gold border border-gold/30 transition-all cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Contribute &ldquo;{searchQuery}&rdquo; translation</span>
                      </button>
                    </div>
                  </div>
                )}

                <div className={targetLanguage === "all" ? "grid grid-cols-1 sm:grid-cols-2 gap-2.5" : "space-y-2"}>
                  {visibleSearchResults.map((result, i) => {
                    const favKey = `${result.languageId}:${result.entry.english}`;
                    const isFav = favoritesSet.has(favKey);
                    const isReverseToEnglish = sourceLanguage !== "english" && targetLanguage === "english";

                    return (
                      <div key={i} className={`bg-bg-card border rounded-xl p-3.5 sm:p-4 transition-all hover:border-gold/30 ${result.matchType === "exact" ? "border-gold/25" : "border-border"}`}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: FAMILY_COLORS[result.family] || "#C8961E" }} />
                              <span className="text-xs font-bold text-text-primary">{result.languageName}</span>
                              <span className="text-[0.6rem] text-text-muted">· {result.categoryName}</span>
                              {result.matchType === "exact" && (
                                <span className="text-[0.55rem] bg-gold/15 text-gold px-1.5 py-0.5 rounded font-medium">Exact</span>
                              )}
                            </div>

                            {/* 3-Column Pivot View when translating Kenyan A -> Kenyan B */}
                            {result.sourceEntry && sourceMeta ? (
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 pt-2 border-t border-border/40">
                                <div>
                                  <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5">{sourceMeta.languageName}</p>
                                  <p className="text-xs font-bold text-text-primary break-words">{result.sourceEntry.translation}</p>
                                </div>
                                <div>
                                  <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5">English (Middleman)</p>
                                  <p className="text-xs font-medium text-text-secondary break-words">{result.pivotEnglish}</p>
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
                                      <p className="text-sm font-bold text-gold break-words">{result.entry.translation}</p>
                                      {Boolean(result.entry.translation) && (
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                          {result.entry.pronunciation && (
                                            <p className="text-[0.65rem] text-text-muted italic">/{result.entry.pronunciation}/</p>
                                          )}
                                          {hasVerifiedAudio(result.entry) && (
                                            <button
                                              type="button"
                                              onClick={() => playAudio(result.entry, result.languageId)}
                                              className="inline-flex items-center gap-1 text-[0.6rem] text-sky hover:underline font-semibold cursor-pointer"
                                              title="Play verified native-speaker recording"
                                            >
                                              <Volume2 className="w-3 h-3" />
                                              <span>Listen</span>
                                            </button>
                                          )}
                                        </div>
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1.5">
                                <div>
                                  <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5">{isReverseToEnglish ? result.languageName : "English"}</p>
                                  <p className="text-xs sm:text-sm font-semibold text-text-primary break-words">{isReverseToEnglish ? result.entry.translation : result.entry.english}</p>
                                </div>
                                <div>
                                  <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5">{isReverseToEnglish ? "English" : result.languageName}</p>
                                  <p className="text-sm font-bold text-gold break-words">{isReverseToEnglish ? result.entry.english : result.entry.translation}</p>
                                  {Boolean(result.entry.translation) && (
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                          {result.entry.pronunciation && (
                                            <p className="text-[0.65rem] text-text-muted italic">/{result.entry.pronunciation}/</p>
                                          )}
                                          {hasVerifiedAudio(result.entry) && (
                                            <button
                                              type="button"
                                              onClick={() => playAudio(result.entry, result.languageId)}
                                              className="inline-flex items-center gap-1 text-[0.6rem] text-sky hover:underline font-semibold cursor-pointer"
                                              title="Play verified native-speaker recording"
                                            >
                                              <Volume2 className="w-3 h-3" />
                                              <span>Listen</span>
                                            </button>
                                          )}
                                        </div>
                                      )}
                                </div>
                              </div>
                            )}

                            {result.entry.context && !result.missingTarget && (
                              <p className="text-[0.65rem] text-text-muted mt-2 bg-bg-elevated rounded-lg px-2.5 py-1 flex items-start gap-1.5">
                                <DynamicIcon emoji="💡" className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                                <span>{renderInlineMarkdown(result.entry.context)}</span>
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

                {filteredSearchResults.length > visibleSearchResults.length && (
                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => setSearchPage((p) => p + 1)}
                      className="px-4 py-2 rounded-xl bg-bg-card border border-border hover:border-gold/40 text-xs font-semibold text-gold transition-colors cursor-pointer"
                    >
                      Show More Results ({filteredSearchResults.length - visibleSearchResults.length} remaining)
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Category Browser (when not searching) */}
            {!searchQuery && browseMeta && (
              <>
                <div id="translator-category-browser">
                  <h3 className="text-sm font-bold text-text-primary mb-2 font-[family-name:var(--font-outfit)] text-balance">
                    Browse {browseMeta.languageName} by Category
                  </h3>
                  <ExpandablePillRow className="[&>button]:!h-8 [&>button]:!w-8 [&>button]:rounded-full [&_.expandable-pill-row]:px-1 [&_.expandable-pill-row]:scroll-pl-1">
                    {browseAudioEntries.length > 0 && (
                      <button
                        key="__audio__"
                        onClick={() => { setActiveCategory(activeCategory === "__audio__" ? null : "__audio__"); setCategoryPage(1); }}
                        className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 min-h-[36px] inline-flex items-center justify-center gap-1.5 text-xs font-medium border transition-all cursor-pointer ${
                          activeCategory === "__audio__"
                            ? "border-sky-400/60 bg-sky-500/20 text-sky-300 font-semibold"
                            : "border-sky-600/40 bg-sky-500/10 text-sky-700 dark:text-sky-300 hover:bg-sky-500/20"
                        }`}
                      >
                        <DynamicIcon emoji="🔊" className="w-3.5 h-3.5" />
                        With Audio ({browseAudioEntries.length.toLocaleString("en-KE")})
                      </button>
                    )}
                    {ALL_CATEGORY_IDS.map((cat) => {
                      const catMeta = browseMeta.categories.find((c) => c.id === cat.id);
                      const hasEntries = Boolean(catMeta && catMeta.count > 0);
                      const active = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => { setActiveCategory(active ? null : cat.id); }}
                          disabled={!hasEntries}
                          className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 min-h-[36px] inline-flex items-center justify-center text-xs font-medium border transition-all cursor-pointer ${
                            active
                              ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                              : hasEntries
                              ? "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
                              : "border-border/50 bg-bg-elevated/40 text-text-muted/40 cursor-not-allowed"
                          }`}
                        >
                          {cat.name} {catMeta ? `(${catMeta.count.toLocaleString("en-KE")})` : ""}
                        </button>
                      );
                    })}
                  </ExpandablePillRow>
                </div>

                {/* Category Entries Table (Paginated for Fast Rendering) */}
                {activeCategory && (
                  <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
                    <div className="px-4 py-3 border-b border-border bg-bg-elevated/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary flex items-center gap-2">
                          <span><DynamicIcon emoji={ALL_CATEGORY_IDS.find((c) => c.id === activeCategory)?.icon} className="w-[1em] h-[1em]" /></span>
                          {activeCategory === "__audio__" ? "Entries with Native Audio" : ALL_CATEGORY_IDS.find((c) => c.id === activeCategory)?.name} — {browseMeta.languageName}
                          <span className="text-[0.65rem] text-text-muted font-normal">
                            ({categoryEntries.length.toLocaleString()} entries)
                          </span>
                        </h4>
                        {categoryEntries.length > CATEGORY_PAGE_SIZE && (
                          <p className="text-[0.65rem] text-text-muted mt-0.5">
                            Showing {((categoryPage - 1) * CATEGORY_PAGE_SIZE) + 1}–{Math.min(categoryPage * CATEGORY_PAGE_SIZE, categoryEntries.length)} of {categoryEntries.length.toLocaleString()}
                          </p>
                        )}
                      </div>

                      <div className="w-full sm:w-64">
                        <SearchInput
                          value={categorySearch}
                          onChange={(e) => {
                            setCategorySearch(e.target.value);
                            setCategoryPage(1);
                          }}
                          onClear={() => {
                            setCategorySearch("");
                            setCategoryPage(1);
                          }}
                          placeholder="Filter entries..."
                          className="text-xs w-full"
                        />
                      </div>
                    </div>

                    {!browseDict ? (
                      <div className="p-8 text-center text-xs text-text-muted animate-pulse">
                        Loading {browseMeta.languageName} dictionary...
                      </div>
                    ) : paginatedCategoryEntries.length === 0 ? (
                      <div className="p-6 text-center text-xs text-text-muted">
                        No entries match &ldquo;{categorySearch}&rdquo; in this category.
                      </div>
                    ) : (
                      <>
                        <div className="divide-y divide-border">
                          {paginatedCategoryEntries.map((entry, i) => {
                            const favKey = `${browseDict.languageId}:${entry.english}`;
                            const isFav = favoritesSet.has(favKey);
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
                                        <p className="text-xs font-bold text-kenya-green-light break-words">{matchedSource.translation}</p>
                                      )}
                                      <p className="text-[0.8125rem] text-text-primary font-medium break-words">{entry.english}</p>
                                    </div>
                                    <div>
                                      <p className="text-[0.55rem] uppercase tracking-wider text-text-muted mb-0.5">{browseDict.languageName}</p>
                                      <p className="text-[0.8125rem] text-gold font-bold break-words">{entry.translation}</p>
                                    </div>
                                    <div>
                                      {Boolean(entry.translation) && (
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                          {entry.pronunciation && (
                                            <p className="text-[0.75rem] text-text-muted italic break-words">/{entry.pronunciation}/</p>
                                          )}
                                          {hasVerifiedAudio(entry) && (
                                            <button
                                              type="button"
                                              onClick={() => playAudio(entry, browseDict.languageId)}
                                              className="inline-flex items-center gap-1 text-[0.65rem] text-sky hover:underline font-semibold cursor-pointer"
                                              title="Play verified native-speaker recording"
                                            >
                                              <Volume2 className="w-3 h-3" />
                                              <span>Listen</span>
                                            </button>
                                          )}
                                        </div>
                                      )}
                                      {entry.context && (
                                        <p className="text-[0.65rem] text-text-muted mt-0.5">{renderInlineMarkdown(entry.context)}</p>
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

                        {/* Pagination Footer */}
                        {totalCategoryPages > 1 && (
                          <div className="px-4 py-3 border-t border-border bg-bg-elevated/40 flex items-center justify-between gap-2 flex-wrap">
                            <span className="text-xs text-text-muted">
                              Page <strong className="text-text-primary">{categoryPage}</strong> of{" "}
                              <strong className="text-text-primary">{totalCategoryPages}</strong> ({categoryEntries.length.toLocaleString()} entries)
                            </span>
                            <div className="flex items-center gap-1.5">
                              <button
                                type="button"
                                disabled={categoryPage <= 1}
                                onClick={() => { setCategoryPage((p) => Math.max(1, p - 1)); scrollToSectionIfNeeded("translator-category-browser", 80); }}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-bg-card border border-border text-text-secondary hover:text-gold disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                              >
                                <ChevronLeft className="w-3.5 h-3.5" />
                                <span>Previous</span>
                              </button>
                              <button
                                type="button"
                                disabled={categoryPage >= totalCategoryPages}
                                onClick={() => { setCategoryPage((p) => Math.min(totalCategoryPages, p + 1)); scrollToSectionIfNeeded("translator-category-browser", 80); }}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-bg-card border border-border text-text-secondary hover:text-gold disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                              >
                                <span>Next</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* ═══════════════════════════════════════ */}
        {/* ═══════════════════════════════════════ */}
        {/* ── BROWSE MODE — All 23 Languages ── */}
        {/* ═══════════════════════════════════════ */}
        {viewMode === "browse" && (
          <>
            <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
              <div>
                <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                  All Kenyan Languages ({ALL_DICT_METAS.length} active dictionaries)
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

            {/* Active Language Cards with fun Cultural Greetings & Motifs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {ALL_DICT_METAS.map((dict) => {
                const entryCount = dict.totalEntries;
                const identity = getLanguageIdentity(dict.languageId);
                return (
                  <div
                    key={dict.languageId}
                    className="bg-bg-card border border-border rounded-xl p-3 sm:p-4 flex flex-col justify-between group hover:border-gold/40 transition-all shadow-sm"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <button
                          type="button"
                          onClick={() => { const firstCat = dict.categories.find((c) => c.count > 0)?.id || null; setTargetLanguage(dict.languageId); setSourceLanguage("english"); setSearchQuery(""); setActiveCategory(firstCat); setViewMode("translate"); scrollToSectionIfNeeded("translator-category-browser", 80); }}
                          className="text-left group-hover:text-gold transition-colors cursor-pointer min-w-0 flex-1"
                        >
                          {/* Cultural identity greeting badge & motif tag */}
                          <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                            <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.625rem] font-bold bg-gold/10 border border-gold/30 text-gold">
                              “{identity.greeting}”
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-elevated px-2 py-0.5 text-[0.6rem] text-text-muted">
                                                            <span>{identity.region}</span>
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-text-primary group-hover:text-gold transition-colors leading-snug">{dict.languageName}</h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-[0.625rem] px-2 py-0.5 rounded-md bg-bg-elevated border border-border text-text-secondary font-medium capitalize">
                              {dict.family}
                            </span>
                            <span className="text-[0.5rem] text-text-muted">·</span>
                            <span className="text-[0.625rem] text-text-muted">{dict.nativeName}</span>
                          </div>
                        </button>
                        <span className="text-xs font-bold text-gold shrink-0 bg-gold/10 px-2 py-0.5 rounded-md border border-gold/20 tabular-nums">
                          {entryCount.toLocaleString()} entries
                        </span>
                      </div>
                      <p className="text-[0.625rem] text-text-muted mb-2 leading-relaxed">{dict.counties.slice(0, 3).join(", ")}{dict.counties.length > 3 ? ` +${dict.counties.length - 3}` : ""}</p>
                      <div className="flex flex-wrap items-center gap-1.5 mb-2 text-[0.6875rem] text-text-muted">
                        <span className="px-2 py-0.5 rounded-md bg-bg-elevated border border-border/50">
                          {dict.categories.length} topic categories
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-3 pt-2.5 border-t border-border/60">
                      <button
                        type="button"
                        onClick={() => { const firstCat = dict.categories.find((c) => c.count > 0)?.id || null; setTargetLanguage(dict.languageId); setSourceLanguage("english"); setSearchQuery(""); setActiveCategory(firstCat); setViewMode("translate"); scrollToSectionIfNeeded("translator-category-browser", 80); }}
                        className="text-[0.6875rem] font-semibold text-text-secondary hover:text-gold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>Translate</span>
                        <span>→</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => openContributeModal(dict.languageName)}
                        className="text-[0.625rem] font-medium text-gold hover:text-gold-light bg-gold/10 hover:bg-gold/20 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
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

        {/* ═══════════════════════════════════════ */}
        {/* ── SAVED FAVORITES MODE ── */}
        {/* ═══════════════════════════════════════ */}
        {viewMode === "favorites" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                  Saved Favorite Words &amp; Phrases ({favorites.length})
                </h3>
                <p className="text-[0.65rem] text-text-muted">
                  Bookmarked vocabulary across all {ALL_DICT_METAS.length} Kenyan languages stored on your device
                </p>
              </div>
              {favorites.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setFavorites([]);
                    try { localStorage.removeItem("kh-translator-favs"); } catch {}
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-bg-elevated hover:bg-border text-text-muted hover:text-text-primary border border-border transition-colors cursor-pointer"
                >
                  Clear All Favorites
                </button>
              )}
            </div>

            {favorites.length === 0 ? (
              <div data-adsense-pause="true" className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 text-center">
                <p className="text-sm font-semibold text-text-primary mb-1">No Saved Favorites Yet</p>
                <p className="text-xs text-text-muted max-w-md mx-auto mb-3">
                  Tap the heart icon on any dictionary card while translating or browsing categories to build your personal Kenyan vocabulary list.
                </p>
                <button
                  type="button"
                  onClick={() => setViewMode("translate")}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-gold text-kenya-black hover:bg-gold-light transition-colors cursor-pointer"
                >
                  Explore Translator
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {favoriteItems.map((item) => (
                  <div
                    key={item.favKey}
                    className="bg-bg-card border border-border hover:border-gold/30 rounded-xl p-3.5 sm:p-4 flex items-start justify-between gap-3 transition-all"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: FAMILY_COLORS[item.family] || "#C8961E" }}
                        />
                        <span className="text-xs font-bold text-text-primary">{item.languageName}</span>
                        <span className="text-[0.6rem] text-text-muted">· {item.categoryName}</span>
                      </div>
                      <p className="text-xs font-medium text-text-secondary break-words">{item.entry.english}</p>
                      <p className="text-sm font-bold text-gold break-words mt-0.5">{item.entry.translation}</p>
                      {Boolean(item.entry.translation) && (
                        <div className="flex items-center gap-1.5 mt-0.5">
                          {item.entry.pronunciation && (
                            <p className="text-[0.65rem] text-text-muted italic">/{item.entry.pronunciation}/</p>
                          )}
                          {hasVerifiedAudio(item.entry) && (
                            <button
                              type="button"
                              onClick={() => playAudio(item.entry, item.languageId)}
                              className="inline-flex items-center gap-1 text-[0.6rem] text-sky hover:underline font-semibold cursor-pointer"
                              title="Play verified native-speaker recording"
                            >
                              <Volume2 className="w-3 h-3" />
                              <span>Listen</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => copyToClipboard(item.entry.translation)}
                        className="w-7 h-7 rounded-lg bg-bg-elevated hover:bg-border flex items-center justify-center transition-colors"
                        title="Copy translation"
                      >
                        {copiedText === item.entry.translation ? (
                          <Check className="w-3.5 h-3.5 text-kenya-green-light" />
                        ) : (
                          <span className="text-xs text-text-muted">📋</span>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleFavorite(item.favKey)}
                        className="w-7 h-7 rounded-lg bg-bg-elevated hover:bg-border flex items-center justify-center transition-colors"
                        title="Remove from favorites"
                      >
                        <X className="w-3.5 h-3.5 text-kenya-red" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── Compact Corpus Stats Bar (Full editorial guide renders in ToolShell below) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          <div className="bg-bg-card border border-border rounded-xl p-2 sm:p-3.5 text-center">
            <p className="text-sm sm:text-xl font-extrabold tabular-nums text-gold">{ALL_DICT_METAS.length}</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-text-muted truncate compact-label">Languages</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-2 sm:p-3.5 text-center">
            <p className="text-sm sm:text-xl font-extrabold tabular-nums text-gold">{totalEntries.toLocaleString()}</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-text-muted truncate compact-label">Entries</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-2 sm:p-3.5 text-center">
            <p className="text-sm sm:text-xl font-extrabold tabular-nums text-gold">{ALL_CATEGORY_IDS.length}</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-text-muted truncate compact-label">Categories</p>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-2 sm:p-3.5 text-center">
            <p className="text-sm sm:text-xl font-extrabold text-gold">Any ↔ Any</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-text-muted truncate compact-label">English Bridge</p>
          </div>
        </div>

      </div>

      {/* ═══════════════════════════════════════ */}
      {/* ── CONTRIBUTE MODAL ── */}
      {/* ═══════════════════════════════════════ */}
      {isContributeOpen && (
        <div
          data-adsense-pause="true"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contribute-modal-title"
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeContributeModal();
          }}
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
                <div className="pr-9">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-[0.65rem] uppercase tracking-wider text-gold font-bold">Community Linguistic Contribution</span>
                  </div>
                  <h3 id="contribute-modal-title" className="text-base sm:text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)]">
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
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={contributeEnglish}
                          onChange={(e) => setContributeEnglish(e.target.value)}
                          placeholder="e.g. Water, Hello, Peace, How are you?"
                          className="input-field text-sm w-full pr-10!"
                          style={{ paddingRight: "2.5rem" }}
                        />
                        {contributeEnglish && (
                          <button
                            type="button"
                            onClick={() => setContributeEnglish("")}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:text-gold flex items-center justify-center text-text-muted transition-colors cursor-pointer z-10"
                            aria-label="Clear English term"
                          >
                            <X className="w-3 h-3 shrink-0" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                        {contributeLanguage} Translation <span className="text-kenya-red">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={contributeTranslation}
                          onChange={(e) => setContributeTranslation(e.target.value)}
                          placeholder={`Word or phrase in ${contributeLanguage}...`}
                          className="input-field text-sm w-full pr-10!"
                          style={{ paddingRight: "2.5rem" }}
                        />
                        {contributeTranslation && (
                          <button
                            type="button"
                            onClick={() => setContributeTranslation("")}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:text-gold flex items-center justify-center text-text-muted transition-colors cursor-pointer z-10"
                            aria-label="Clear native translation"
                          >
                            <X className="w-3 h-3 shrink-0" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                          Pronunciation (Optional)
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={contributePronunciation}
                            onChange={(e) => setContributePronunciation(e.target.value)}
                            placeholder="e.g. eh-johk, mah-jee"
                            className="input-field text-xs w-full pr-9!"
                            style={{ paddingRight: "2.25rem" }}
                          />
                          {contributePronunciation && (
                            <button
                              type="button"
                              onClick={() => setContributePronunciation("")}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:text-gold flex items-center justify-center text-text-muted transition-colors cursor-pointer z-10"
                              aria-label="Clear pronunciation"
                            >
                              <X className="w-3 h-3 shrink-0" />
                            </button>
                          )}
                        </div>
                      </div>
                      <div>
                        <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                          County / Dialect (Optional)
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={contributeContext}
                            onChange={(e) => setContributeContext(e.target.value)}
                            placeholder="e.g. Turkana North dialect"
                            className="input-field text-xs w-full pr-9!"
                            style={{ paddingRight: "2.25rem" }}
                          />
                          {contributeContext && (
                            <button
                              type="button"
                              onClick={() => setContributeContext("")}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:text-gold flex items-center justify-center text-text-muted transition-colors cursor-pointer z-10"
                              aria-label="Clear context"
                            >
                              <X className="w-3 h-3 shrink-0" />
                            </button>
                          )}
                        </div>
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
                    <div className="relative">
                      <input
                        type="text"
                        value={contributorName}
                        onChange={(e) => setContributorName(e.target.value)}
                        placeholder="e.g. Akeno L., Kiprop, Anon"
                        className="input-field text-xs w-full pr-9!"
                        style={{ paddingRight: "2.25rem" }}
                      />
                      {contributorName && (
                        <button
                          type="button"
                          onClick={() => setContributorName("")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:text-gold flex items-center justify-center text-text-muted transition-colors cursor-pointer z-10"
                          aria-label="Clear contributor name"
                        >
                          <X className="w-3 h-3 shrink-0" />
                        </button>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[0.65rem] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={contributorEmail}
                        onChange={(e) => setContributorEmail(e.target.value)}
                        placeholder="For attribution updates"
                        className="input-field text-xs w-full pr-9!"
                        style={{ paddingRight: "2.25rem" }}
                      />
                      {contributorEmail && (
                        <button
                          type="button"
                          onClick={() => setContributorEmail("")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:text-gold flex items-center justify-center text-text-muted transition-colors cursor-pointer z-10"
                          aria-label="Clear contributor email"
                        >
                          <X className="w-3 h-3 shrink-0" />
                        </button>
                      )}
                    </div>
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
                  {contributeMailtoUrl && (
                    <a
                      href={contributeMailtoUrl}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gold/15 hover:bg-gold/25 text-gold border border-gold/30 transition-colors"
                    >
                      Send Backup via Email App
                    </a>
                  )}
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
